import { createStore, updateStore, Store } from './store';
import { QueryString, cleanObject, GemError } from './utils';

export const history = window.history;
const location = window.location;
const pushState: typeof history.pushState = history.pushState.bind(history);
const replaceState: typeof history.replaceState = history.replaceState.bind(history);

let key = 0;
const getKey = () => ++key;

// history.state
export interface HistoryItem {
  $hasCloseHandle: boolean;
  $hasOpenHandle: boolean;
  $hasShouldCloseHandle: boolean;
  $key: number;
  [index: string]: any;
}

const store = createStore<HistoryItem>({
  $hasCloseHandle: false,
  $hasOpenHandle: false,
  $hasShouldCloseHandle: false,
  $key: 0,
});

export interface UpdateHistoryParams {
  title?: string;
  path?: string; // 不包括 basePath，只有根目录储存末尾斜杠
  query?: string | QueryString; // 包含 `?`
  hash?: string; // 包含 `#`
  open?: Function; // 按下前进键时执行
  close?: Function; // 按下返回键时执行
  shouldClose?: () => boolean; // 按下返回键时判断是否执行 close 函数，返回为 false 时不执行，并恢复 history
  data?: any;
}

// 实际应用值
type HistoryParams = UpdateHistoryParams & { title: string; path: string; query: QueryString; hash: string };

// TODO: WeakRef
const paramsMap = new Map<number, HistoryParams>();

declare global {
  interface History {
    store: Store<HistoryItem>;
    basePath?: string;
    getParams: () => HistoryParams;

    push: (params: UpdateHistoryParams) => void;
    replace: (params: UpdateHistoryParams) => void;
    // push 一条历史记录
    // 有 close 处理函数时先执行 closeHandle 在 replace
    // 比如在 modal 打开时跳转页面
    // 不完美：只支持在 1 级 modal 中切换页面
    pushIgnoreCloseHandle: (params: UpdateHistoryParams) => void;
    updateParams: (params: Omit<UpdateHistoryParams, 'path' | 'query' | 'hash' | 'state'>) => void;
  }
}

type UpdateHistoryType = 'push' | 'replace';

function validData(data: any) {
  if (data?.$key) throw new GemError('`$key` is not allowed');
  if (data?.$hasCloseHandle) throw new GemError('`$hasCloseHandle` is not allowed');
  if (data?.$hasOpenHandle) throw new GemError('`$hasOpenHandle` is not allowed');
  if (data?.$hasShouldCloseHandle) throw new GemError('`$hasShouldCloseHandle` is not allowed');
}

// 并非实际路径 `location.pathname`
function getAbsolutePath(relativePath: string) {
  if (history.basePath) {
    return history.basePath + (relativePath === '/' ? '' : relativePath);
  }
  return relativePath;
}

function getRelativePath(realPath: string) {
  return realPath.replace(new RegExp(`^${history.basePath}`), '');
}

function initParams(params: UpdateHistoryParams): HistoryParams {
  const current = paramsMap.get(store.$key) || ({} as HistoryParams);
  // 没提供 path 使用当前 path
  const path = params.path || getRelativePath(location.pathname);
  // 没提供 query 又没有提供 path 时使用当前 search
  const query = new QueryString(params.query || (params.path ? '' : location.search));
  const pathChanged =
    (params.path && params.path !== current.path) || (params.query && String(params.query) !== String(current.query));
  const title = params.title || (pathChanged ? '' : document.title);
  // 没提供 hash 又没有改变路径时使用当前 hash
  const hash = params.hash || (pathChanged ? '' : decodeURIComponent(location.hash));
  return { ...params, title, path, query, hash };
}

window.addEventListener('hashchange', ({ isTrusted }) => {
  if (isTrusted) {
    history.replace({ hash: decodeURIComponent(location.hash) });
  }
});

function updateHistory(type: UpdateHistoryType, p: UpdateHistoryParams) {
  validData(p.data);
  const params = initParams(p);
  const { title, path, query, hash } = params;
  const state = {
    $hasCloseHandle: !!params.close,
    $hasOpenHandle: !!params.open,
    $hasShouldCloseHandle: !!params.shouldClose,
    $key: getKey(),
    ...(params.data || {}),
  };
  paramsMap.set(state.$key, params);
  updateStore(cleanObject(store), state);
  const url = getAbsolutePath(path) + new QueryString(query) + hash;
  const prevHave = decodeURIComponent(location.hash);
  (type === 'push' ? pushState : replaceState)(state, title, url);
  if (prevHave !== hash) window.dispatchEvent(new CustomEvent('hashchange'));
}

// 跨框架时，调用者对 basePath 无感知
function updateHistoryByNative(type: UpdateHistoryType, data: any, title: string, originUrl: string) {
  validData(data);
  const state = {
    $key: getKey(),
    ...(data || {}),
  };
  const { pathname, search, hash } = new URL(originUrl, location.origin);
  const params = initParams({ path: pathname, query: new QueryString(search), hash, title, data });
  paramsMap.set(state.$key, params);
  updateStore(cleanObject(store), state);
  const url = getAbsolutePath(pathname) + params.query + hash;
  const prevHave = location.hash;
  (type === 'push' ? pushState : replaceState)(state, title, url);
  // `location.hash` 和 `hash` 都已经进行了 url 编码，可以直接进行相等判断
  if (prevHave !== hash) window.dispatchEvent(new CustomEvent('hashchange'));
}

export const basePathStore = createStore({
  basePath: '',
});

if (!('basePath' in history)) {
  // 不允许其他框架重写
  // 保持原有功能
  Object.defineProperties(history, {
    basePath: {
      get() {
        return basePathStore.basePath;
      },
      set(v: string) {
        if (!basePathStore.basePath) {
          // 应用初始化的时候设置
          updateStore(basePathStore, { basePath: v });
          // paramsMap 更新后 ui 才会更新
          Object.assign(paramsMap.get(store.$key), { path: getRelativePath(location.pathname) });
        } else {
          throw new GemError('已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象');
        }
      },
    },
    getParams: {
      value: function() {
        return paramsMap.get(store.$key);
      },
    },
    updateParams: {
      value: function(params: UpdateHistoryParams) {
        Object.assign(paramsMap.get(store.$key), params);
        updateStore(store, {});
      },
    },
    store: {
      value: store,
    },
    push: {
      value: function(params: UpdateHistoryParams) {
        updateHistory('push', params);
      },
    },
    pushIgnoreCloseHandle: {
      value: function(params: UpdateHistoryParams) {
        if (store.$hasCloseHandle) {
          paramsMap.get(store.$key)?.close?.();
          history.replace(params);
        } else {
          history.push(params);
        }
      },
    },
    replace: {
      value: function(params: UpdateHistoryParams) {
        updateHistory('replace', params);
      },
    },
    pushState: {
      value: function(data: any, title: string, path: string) {
        updateHistoryByNative('push', data, title, path);
      },
    },
    replaceState: {
      value: function(data: any, title: string, path: string) {
        updateHistoryByNative('replace', data, title, path);
      },
    },
  });

  if (!history.state) {
    // 初始化 historyItem
    const { pathname, search, hash } = location;
    history.replace({ path: pathname, query: search, hash });
  } else if (history.state.$hasCloseHandle) {
    updateStore(store, history.state);
    const params = initParams({ title: document.title });
    paramsMap.set(store.$key, params);
    // 有 handle 返回键的页面刷新需要清除返回 handler
    history.back();
  } else {
    // 有 gem 历史的正常普通刷新, 储存 params
    const params = initParams({ title: document.title });
    updateStore(store, {
      $key: getKey(),
      ...(history.state || {}),
    });
    paramsMap.set(store.$key, params);
  }

  /**
   * 表示 popstate handler 中正在进行导航
   */
  let navigating = false;
  window.addEventListener('popstate', event => {
    const newState = event.state as HistoryItem | null;
    if (!newState?.$key) {
      // 比如作为其他 app 的宿主 app
      return;
    }
    if (navigating) {
      navigating = false;
      return;
    }

    // 处理 forward or back
    // replace 不会触发

    // 刷新后再导航需要从当前 state 中构建 params
    // 理论上该条历史记录中不会出现事件处理器
    if (!paramsMap.has(newState.$key)) {
      const { pathname, search, hash } = location;
      paramsMap.set(newState.$key, {
        path: pathname,
        query: new QueryString(search),
        hash,
        title: document.title, // 浏览器缓存的 title
        data: newState,
      });
    }

    // url 变化前 historyItem
    const prevState = store;

    if (newState.$key > prevState.$key && newState.$hasOpenHandle) {
      // 返回键关闭的 modal 能前进键重新打开
      // 刷新后不能工作：刷新后 historyItem 中只有 url
      paramsMap.get(newState.$key)?.open?.();
    } else if (prevState.$hasCloseHandle) {
      const prevParams = paramsMap.get(prevState.$key);
      const closeHandle = prevParams?.close;
      const shouldCloseHandle = prevParams?.shouldClose;
      const notAllowClose = shouldCloseHandle && !shouldCloseHandle();
      if (notAllowClose) {
        navigating = true;
        history.forward(); // 将重新触发 popstate
        return; // 历史记录栈位置没有变化，不需要后面的 updateStore
      } else {
        // handle 返回键
        if (closeHandle) {
          closeHandle();
        } else if (newState.$hasCloseHandle) {
          // 有 modal 的页面刷新会执行 back 触发 popstate
          // 如果是二级 modal 页面刷新
          // 则还需要进行一次 back
          // !!! 不完美：三级 modal 页面刷新不支持返回到初始页面
          navigating = true;
          history.back();
        }
      }
    }

    updateStore(cleanObject(store), newState);
  });
}
