(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return c}));var o=n(0);let c=class extends o.a{static setTitle(e){o.i.updateParams({title:e})}constructor(e){super(),this.hidden=e}render(){const{title:e}=o.i.getParams();return document.title=e||this.textContent||"",this.hidden?o.j``:document.title?o.j`
      ${document.title}
    `:o.j`
        <slot></slot>
      `}};c=function(e,t,n,o){var c,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(i=(r<3?c(i):r>3?c(t,n,i):c(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}([Object(o.d)(o.i.store),Object(o.g)("gem-title")],c),document.head&&!document.head.querySelector("gem-title")&&document.head.append(new c(!0))}}]);
//# sourceMappingURL=1.bundle.5975b8d66d3e4a788958.js.map