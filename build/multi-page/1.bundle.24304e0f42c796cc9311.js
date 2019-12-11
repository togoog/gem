(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(t,e,s){"use strict";s.r(e),s.d(e,"Title",(function(){return n}));var i=s(0);class n extends i.a{constructor(t){super();const{title:e}=i.d.location;this.documentTitle=e,this.hidden=t}static setTitle(t){const{list:e,currentIndex:s}=i.d.historyState;e.splice(s,1,Object.assign(Object.assign({},e[s]),{title:t})),Object(i.f)(i.d.historyState,{list:e})}shouldUpdate(){const{title:t}=i.d.location;return t!==this.documentTitle&&(this.documentTitle=t,!0)}render(){const{list:t,currentIndex:e}=i.d.historyState,{title:s}=t[e];return document.title=s,this.hidden?i.e``:s?i.e`
      ${s}
    `:i.e`
        <slot></slot>
      `}}n.observedStores=[i.d.historyState],customElements.define("gem-title",n),document.head.querySelector("gem-title")||document.head.append(new n(!0))}}]);
//# sourceMappingURL=1.bundle.24304e0f42c796cc9311.js.map