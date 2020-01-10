(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return o}));var c=n(0);let o=class extends c.a{static setTitle(e){c.g.updateParams({title:e})}constructor(e){super(),this.hidden=e}render(){const{title:e}=c.g.getParams();return document.title=e||this.textContent||"",this.hidden?c.h``:document.title?c.h`
      ${document.title}
    `:c.h`
        <slot></slot>
      `}};o=function(e,t,n,c){var o,r=arguments.length,i=r<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,c);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}([Object(c.c)(c.g.store),Object(c.f)("gem-title")],o),document.head&&!document.head.querySelector("gem-title")&&document.head.append(new o(!0))}}]);
//# sourceMappingURL=1.bundle.7624fcd02fb4106cb4c5.js.map