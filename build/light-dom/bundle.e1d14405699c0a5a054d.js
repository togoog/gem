!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gem/build/light-dom",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const n=new Set;function i(e){n.size||globalThis.queueMicrotask(()=>{n.forEach(e=>e()),n.clear()}),n.delete(e),n.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}function a(e,...t){return e.reduce((e,s,n)=>e+(t[n-1]||"")+s)}new WeakMap;function l(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class h extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function d(){}const u="gem@storeHandlesKey";function c(e){const t=e;return Object.defineProperty(t,u,{enumerable:!1,value:new Set,writable:!0}),t}function p(e,t){Object.assign(e,t),e[u].forEach(e=>{i(e)})}const m=window.history,f=window.location,g=m.pushState.bind(m),v=m.replaceState.bind(m);let _=0;const w=()=>++_,b=c({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),y=new Map;function x(e){var t,s,n,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new h("`$key` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasCloseHandle)throw new h("`$hasCloseHandle` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasOpenHandle)throw new h("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new h("`$hasShouldCloseHandle` is not allowed")}function E(e){const t=e.title||"",s=e.path||("/"===f.pathname?"":f.pathname.replace(new RegExp(`^${m.basePath}`),"")),n=new r(e.query||(e.path?"":f.search)),i=e.path||e.query,o=e.hash||(i?"":f.hash);return Object.assign(Object.assign({},e),{title:t,path:s,query:n,hash:o})}function N(e,t){x(t.data);const s=E(t),{title:n,path:i,query:o,hash:a}=s,h=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:w()},s.data||{});y.set(h.$key,s),p(l(b),h);const d=m.basePath+i+new r(o)+a,u=f.hash;("push"===e?g:v)(h,n,d),u!==a&&window.dispatchEvent(new CustomEvent("hashchange"))}function S(e,t,s,n){x(t);const i=Object.assign({$key:w()},t||{}),{pathname:o,search:a,hash:h}=new URL(n,f.origin);f.hash!==h&&window.dispatchEvent(new CustomEvent("hashchange"));const d=E({path:o,query:new r(a),hash:h,title:s,data:t});y.set(i.$key,d),p(l(b),i);const u=m.basePath+n,c=f.hash;("push"===e?g:v)(i,s,u),c!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const C=c({basePath:""});if(!("basePath"in m)){if(Object.defineProperties(m,{basePath:{get:()=>C.basePath,set(e){if(C.basePath)throw new h("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");Object.assign(y.get(b.$key),{path:window.location.pathname.replace(new RegExp(`^${e}`),"")}),p(C,{basePath:e})}},getParams:{value:function(){return y.get(b.$key)}},updateParams:{value:function(e){Object.assign(y.get(b.$key),e),p(b,{})}},store:{value:b},push:{value:function(e){N("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,s,n;b.$hasCloseHandle?(null===(n=null===(t=y.get(b.$key))||void 0===t?void 0:(s=t).close)||void 0===n||n.call(s),m.replace(e)):m.push(e)}},replace:{value:function(e){N("replace",e)}},pushState:{value:function(e,t,s){S("push",e,t,s)}},replaceState:{value:function(e,t,s){S("replace",e,t,s)}}}),m.state)if(m.state.$close)m.back();else{const e=E({title:document.title});p(b,Object.assign({$key:w()},m.state||{})),y.set(b.$key,e)}else{const{pathname:e,search:t,hash:s}=f;m.replace({path:e,query:t,hash:s})}let e=!1;window.addEventListener("popstate",t=>{var s,n,i,o,a,h;const d=t.state;if(!(null===(s=d)||void 0===s?void 0:s.$key))return;if(e)return void(e=!1);if(!y.has(d.$key)){const{pathname:e,search:t,hash:s}=f;y.set(d.$key,{path:e,query:new r(t),hash:s,title:document.title,data:d})}const u=b;if(d.$key>u.$key&&d.$hasOpenHandle)null===(o=null===(n=y.get(d.$key))||void 0===n?void 0:(i=n).open)||void 0===o||o.call(i);else if(u.$hasCloseHandle){const t=y.get(u.$key),s=null===(a=t)||void 0===a?void 0:a.close,n=null===(h=t)||void 0===h?void 0:h.shouldClose;if(n&&!n())return e=!0,void m.forward();s?s():(e=!0,m.back())}p(l(b),d)})}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new WeakMap,k=e=>(...t)=>{const s=e(...t);return $.set(s,!0),s},V=e=>"function"==typeof e&&$.has(e),O=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,P=(e,t,s=null,n=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,n),t=s}},M=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},A={},H={},T=`{{lit-${String(Math.random()).slice(2)}}}`,j=`\x3c!--${T}--\x3e`,L=new RegExp(`${T}|${j}`),I="$lit$";class R{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)W(t[e].name,I)&&n++;for(;n-- >0;){const t=l[a],s=U.exec(t)[2],n=s.toLowerCase()+I,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(L);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(T)>=0){const n=e.parentNode,i=t.split(L),o=i.length-1;for(let t=0;t<o;t++){let s,o=i[t];if(""===o)s=B();else{const e=U.exec(o);null!==e&&W(e[2],I)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-I.length)+e[3]),s=document.createTextNode(o)}n.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(B(),e),s.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===T){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(B(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(T,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const W=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},q=e=>-1!==e.index,B=()=>document.createComment(""),U=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class F{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=O?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],q(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return O&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=` ${T} `;class z{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const o=U.exec(e);t+=null===o?e+(s?D:j):e.substr(0,o.index)+o[1]+o[2]+I+o[3]+T}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class J extends z{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),P(t,s.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const K=e=>null===e||!("object"==typeof e||"function"==typeof e),G=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Q{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new X(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(K(e)||!G(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class X{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===A||K(e)&&e===this.value||(this.value=e,V(e)||(this.committer.dirty=!0))}commit(){for(;V(this.value);){const e=this.value;this.value=A,e(this)}this.value!==A&&this.committer.commit()}}class Y{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(B()),this.endNode=e.appendChild(B())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=B()),e.__insert(this.endNode=B())}insertAfterPart(e){e.__insert(this.startNode=B()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;V(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=A,e(this)}const e=this.__pendingValue;e!==A&&(K(e)?e!==this.value&&this.__commitText(e):e instanceof z?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):G(e)?this.__commitIterable(e):e===H?(this.value=H,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof F&&this.value.template===t)this.value.update(e.values);else{const s=new F(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)s=t[n],void 0===s&&(s=new Y(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){M(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Z{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;V(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=A,e(this)}if(this.__pendingValue===A)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=A}}class ee extends Q{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new te(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class te extends X{}let se=!1;try{const e={get capture(){return se=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ne{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;V(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=A,e(this)}if(this.__pendingValue===A)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=ie(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=A}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ie=e=>e&&(se?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const oe=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];if("."===i){return new ee(e,t.slice(1),s).parts}return"@"===i?[new ne(e,t.slice(1),n.eventContext)]:"?"===i?[new Z(e,t.slice(1),s)]:new Q(e,t,s).parts}handleTextExpression(e){return new Y(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function re(e){let t=ae.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ae.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(T);return s=t.keyString.get(n),void 0===s&&(s=new R(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const ae=new Map,le=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const he=(e,t)=>{const s=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,i=s.insertBefore(B(),n);s.insertBefore(B(),n);const o=new Y(e.options);return o.insertAfterNode(i),o},de=(e,t)=>(e.setValue(t),e.commit(),e),ue=(e,t,s)=>{const n=e.startNode.parentNode,i=s?s.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&P(n,t.startNode,o,i)},ce=e=>{M(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},pe=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},me=new WeakMap,fe=new WeakMap,ge=k((e,t,s)=>{let n;return void 0===s?s=t:void 0!==t&&(n=t),t=>{if(!(t instanceof Y))throw new Error("repeat can only be used in text bindings");const i=me.get(t)||[],o=fe.get(t)||[],r=[],a=[],l=[];let h,d,u=0;for(const t of e)l[u]=n?n(t,u):u,a[u]=s(t,u),u++;let c=0,p=i.length-1,m=0,f=a.length-1;for(;c<=p&&m<=f;)if(null===i[c])c++;else if(null===i[p])p--;else if(o[c]===l[m])r[m]=de(i[c],a[m]),c++,m++;else if(o[p]===l[f])r[f]=de(i[p],a[f]),p--,f--;else if(o[c]===l[f])r[f]=de(i[c],a[f]),ue(t,i[c],r[f+1]),c++,f--;else if(o[p]===l[m])r[m]=de(i[p],a[m]),ue(t,i[p],i[c]),p--,m++;else if(void 0===h&&(h=pe(l,m,f),d=pe(o,c,p)),h.has(o[c]))if(h.has(o[p])){const e=d.get(l[m]),s=void 0!==e?i[e]:null;if(null===s){const e=he(t,i[c]);de(e,a[m]),r[m]=e}else r[m]=de(s,a[m]),ue(t,s,i[c]),i[e]=null;m++}else ce(i[p]),p--;else ce(i[c]),c++;for(;m<=f;){const e=he(t,r[f+1]);de(e,a[m]),r[m++]=e}for(;c<=p;){const e=i[c++];null!==e&&ce(e)}me.set(t,r),fe.set(t,l)}}),ve=new WeakMap,_e=k((e,t)=>s=>{const n=ve.get(s);if(Array.isArray(e)){if(Array.isArray(n)&&n.length===e.length&&e.every((e,t)=>e===n[t]))return}else if(n===e&&(void 0!==e||ve.has(s)))return;s.setValue(t()),ve.set(s,Array.isArray(e)?Array.from(e):e)}),we=k(e=>t=>{if(void 0===e&&t instanceof X){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let be={html:(e,...t)=>new z(e,t,"html",oe),svg:(e,...t)=>new J(e,t,"svg",oe),render:(e,t,s)=>{let n=le.get(t);void 0===n&&(M(t,t.firstChild),le.set(t,n=new Y(Object.assign({templateFactory:re},s))),n.appendInto(t)),n.setValue(e),n.commit()},directive:k,repeat:ge,guard:_e,ifDefined:we};window.__litHtml?be=window.__litHtml:window.__litHtml=be;const{html:ye,svg:xe,render:Ee,directive:Ne,repeat:Se,guard:Ce,ifDefined:$e}=be;class ke extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),s&&s.forEach(e=>{this.__connectProperty(e,!1)}),n&&n.forEach(e=>{this.__connectProperty(e,!0),this[e]=d}),i&&i.forEach(e=>{if(!e[u])throw new Error("`observedStores` only support store module");!function(e,t){e[u].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let s=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>s,set(n){if(n!==s){if(t){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=t=>{const s=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(e,s,n),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return ye`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Ee(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,s){}attributeChanged(e,t,s){}unmounted(){}attributeChangedCallback(e,t,s){this.__isMounted&&(this.attributeChanged(e,t,s),i(this.__update))}__connectedCallback(){Ee(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[u].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Ve extends ke{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Oe=new o;let Pe=!1;const Me=()=>{window.requestAnimationFrame((function e(t){const s=Oe.get();s&&(s(),performance.now()-t<16)?e(t):Pe&&Me()}))};Oe.addEventListener("start",()=>{Pe=!0,Me()}),Oe.addEventListener("end",()=>Pe=!1);const Ae=customElements.define.bind(customElements);customElements.define=function(e,t,s){customElements.get(e)||Ae(e,t,s)};class He extends Ve{constructor(){super(!1),this.state={now:0},setInterval(()=>{this.setState({now:Date.now()})},1e3)}render(){return ye`
      <div>hello world!</div>
      <time>${this.state.now}</time>
    `}}customElements.define("app-root",He),document.body.append(new He);const Te=document.createElement("style");document.body.append(Te),Te.outerHTML=a`<style>div{color: red}</style>`}]);
//# sourceMappingURL=bundle.e1d14405699c0a5a054d.js.map