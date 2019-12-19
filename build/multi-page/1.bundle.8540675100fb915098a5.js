(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(t,e,s){"use strict";s.r(e),s.d(e,"Title",(function(){return n}));var i=s(0);class n extends i.a{constructor(t){super();const{title:e}=i.g.location;this.documentTitle=e,this.hidden=t}static setTitle(t){const{list:e,currentIndex:s}=i.g.historyState;e.splice(s,1,Object.assign(Object.assign({},e[s]),{title:t})),Object(i.j)(i.g.historyState,{list:e})}shouldUpdate(){const{title:t}=i.g.location;return t!==this.documentTitle&&(this.documentTitle=t,!0)}render(){const{list:t,currentIndex:e}=i.g.historyState,{title:s}=t[e];return document.title=s,this.hidden?i.h``:s?i.h`
      ${s}
    `:i.h`
        <slot></slot>
      `}}n.observedStores=[i.g.historyState],customElements.define("gem-title",n),document.head.querySelector("gem-title")||document.head.append(new n(!0))}}]);
//# sourceMappingURL=1.bundle.8540675100fb915098a5.js.map