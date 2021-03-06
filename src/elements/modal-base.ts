import { GemElement, createStore, updateStore, history } from '../';

const open = Symbol('open mark');

/**
 * 需要使用范型，所以导出一个函数，用来*创建*类似 Confirm 元素的基类;
 * 需要使用 Confirm 的静态方式所以使用 Store 来管理组件状态;
 * 返回 *单实例* Confirm 类
 */
export default function createModalClass<T extends object>(options: T) {
  return class extends GemElement {
    static instance: GemElement | null = null;
    /**
     * @final
     * modal 状态，包括内容，是否已经确认关闭等属性
     */
    static store = createStore({
      [open]: false,
      ...options,
    });

    /**@final */
    static get isOpen() {
      return this.store[open];
    }

    /**@final */
    static get observedStores() {
      return [history.store, this.store];
    }

    /**
     * @final
     * 自带 100ms 延迟，以允许在其他 Dialog 的 `shouldClose` 中调用此方法;
     * 浏览器 history 为异步 API，需要设置较长延迟;
     */
    static open(opts: T) {
      this.instance = new this();
      document.body.append(this.instance);
      const changeStore = () => updateStore(this.store, { [open]: true, ...opts });
      setTimeout(() => {
        changeStore();
        history.push({
          open: changeStore,
          close: this.closeHandle.bind(this),
          shouldClose: this.shouldClose.bind(this),
        });
      }, 100);
    }

    /**
     * @final
     * UI 中执行关闭
     */
    static close() {
      history.back();
    }

    /**
     * @final
     * history 中自动调用
     */
    static closeHandle() {
      this.instance?.remove();
      updateStore(this.store, { [open]: false, ...options });
    }

    /**
     * 由于要操作浏览器历史记录，所以没有设计为 Promise；
     */
    static shouldClose() {
      return true;
    }
  };
}
