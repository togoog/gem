import { html, GemElement, history, TemplateResult, updateStore, NavigationParameter } from '../';

class ParamsRegExp extends RegExp {
  namePosition: object;
  constructor(pattern: string) {
    const namePosition = {};
    let i = 0;
    super(
      `^${pattern.replace(/:([^/$]+)/g, (_m, name: string) => {
        namePosition[name] = i++;
        return `([^/]+)`;
      })}$`,
    );
    this.namePosition = namePosition;
  }
}

function getReg(pattern: string) {
  return new ParamsRegExp(pattern);
}

// `/a/b/:c/:d` `/a/b/1/2`
function getParams(pattern: string, path: string) {
  const reg = getReg(pattern);
  const matchResult = path.match(reg);
  if (matchResult) {
    const params = {};
    Object.keys(reg.namePosition).forEach(name => {
      params[name] = matchResult[reg.namePosition[name] + 1];
    });
    return params;
  }
}

function isMatch(pattern: string, path: string) {
  return !!path.match(getReg(pattern));
}

export interface RouteItem {
  pattern: '*' | (string & {});
  content: TemplateResult;
  title?: string;
}

export interface RoutesObject {
  [prop: string]: RouteItem;
}

// params 中的成员不会验证
type RouteOptions = Omit<NavigationParameter, 'path'> & { params: object };

export function createRoute(route: RouteItem, options?: RouteOptions): NavigationParameter {
  let path = route.pattern;
  if (options && options.params) {
    Object.keys(options.params).forEach(param => {
      path = path.replace(new RegExp(`:${param}`, 'g'), options.params[param]);
    });
  }
  return {
    path,
    ...options,
  };
}

/**
 * @event change
 */
export class Route extends GemElement {
  static observedPropertys = ['routes'];
  static observedStores = [history.historyState];

  static currentRoute: RouteItem;

  // 获取当前匹配的路由的 params
  static getParams() {
    if (Route.currentRoute) {
      return getParams(Route.currentRoute.pattern, history.location.path);
    }
  }

  routes: RouteItem[] | RoutesObject;
  private href: string;

  constructor() {
    super();
    const { path, query } = history.location;
    const href = path + query;
    this.href = href;
  }
  initPage() {
    const { list, currentIndex } = history.historyState;
    if (Route.currentRoute && Route.currentRoute.title && Route.currentRoute.title !== list[currentIndex].title) {
      list.splice(currentIndex, 1, {
        ...list[currentIndex],
        title: Route.currentRoute.title,
      });
      updateStore(history.historyState, {
        list,
      });
    }
  }

  shouldUpdate() {
    const { path, query } = history.location;
    const href = path + query;
    if (path + query !== this.href) {
      this.href = href;
      return true;
    }
    return false;
  }

  mounted() {
    this.initPage();
  }

  updated() {
    this.initPage();
    this.dispatchEvent(new CustomEvent('change'));
  }

  render() {
    if (!this.routes) return this.callback();
    Route.currentRoute = null;

    let defaultRoute: RouteItem;
    let routes: RouteItem[];
    if (this.routes instanceof Array) {
      routes = this.routes;
    } else {
      routes = Object.values(this.routes);
    }

    for (let item of routes) {
      const { pattern } = item;
      if ('*' === pattern) {
        defaultRoute = item;
      } else if (isMatch(pattern, history.location.path)) {
        Route.currentRoute = item;
        break;
      }
    }

    if (!Route.currentRoute) {
      Route.currentRoute = defaultRoute;
    }

    if (!Route.currentRoute) return this.callback();
    return html`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Route.currentRoute.content}
    `;
  }

  callback() {
    Route.currentRoute = null;
    return super.render();
  }
}

customElements.define('gem-route', Route);
