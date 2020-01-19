!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/gem/build/ref-route/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const s=new Set;function i(t){s.size||globalThis.queueMicrotask(()=>{s.forEach(t=>t()),s.clear()}),s.delete(t),s.add(t)}const o=globalThis.Image||Object;class r extends o{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,r.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}class a extends URLSearchParams{constructor(t){if(t instanceof a)return t;super(t),Object.setPrototypeOf(this,a.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function l(t){return Object.keys(t).forEach(e=>{delete t[e]}),t}class h extends Error{constructor(t){super(t),this.message=`gem: ${this.message}`}}function u(){}const c="gem@storeHandlesKey";function d(t){const e=t;return Object.defineProperty(e,c,{enumerable:!1,value:new Set,writable:!0}),e}function p(t,e){Object.assign(t,e),t[c].forEach(t=>{i(t)})}const f=window.history,m=window.location,g=f.pushState.bind(f),v=f.replaceState.bind(f);let _=0;const y=()=>++_,b=d({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),w=new Map;function x(t){var e,n,s,i;if(null===(e=t)||void 0===e?void 0:e.$key)throw new h("`$key` is not allowed");if(null===(n=t)||void 0===n?void 0:n.$hasCloseHandle)throw new h("`$hasCloseHandle` is not allowed");if(null===(s=t)||void 0===s?void 0:s.$hasOpenHandle)throw new h("`$hasOpenHandle` is not allowed");if(null===(i=t)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new h("`$hasShouldCloseHandle` is not allowed")}function k(t){return f.basePath?f.basePath+("/"===t?"":t):t}function E(t){return t.replace(new RegExp(`^${f.basePath}`),"")}function N(t){const e=t.title||"",n=t.path||E(m.pathname),s=new a(t.query||(t.path?"":m.search)),i=t.path||t.query,o=t.hash||(i?"":m.hash);return Object.assign(Object.assign({},t),{title:e,path:n,query:s,hash:o})}function P(t,e){x(e.data);const n=N(e),{title:s,path:i,query:o,hash:r}=n,h=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:y()},n.data||{});w.set(h.$key,n),p(l(b),h);const u=k(i)+new a(o)+r,c=m.hash;("push"===t?g:v)(h,s,u),c!==r&&window.dispatchEvent(new CustomEvent("hashchange"))}function S(t,e,n,s){x(e);const i=Object.assign({$key:y()},e||{}),{pathname:o,search:r,hash:h}=new URL(s,m.origin),u=N({path:o,query:new a(r),hash:h,title:n,data:e});w.set(i.$key,u),p(l(b),i);const c=k(o)+u.query+h,d=m.hash;("push"===t?g:v)(i,n,c),d!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const $=d({basePath:""});if(!("basePath"in f)){if(Object.defineProperties(f,{basePath:{get:()=>$.basePath,set(t){if($.basePath)throw new h("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");p($,{basePath:t}),Object.assign(w.get(b.$key),{path:E(m.pathname)})}},getParams:{value:function(){return w.get(b.$key)}},updateParams:{value:function(t){Object.assign(w.get(b.$key),t),p(b,{})}},store:{value:b},push:{value:function(t){P("push",t)}},pushIgnoreCloseHandle:{value:function(t){var e,n,s;b.$hasCloseHandle?(null===(s=null===(e=w.get(b.$key))||void 0===e?void 0:(n=e).close)||void 0===s||s.call(n),f.replace(t)):f.push(t)}},replace:{value:function(t){P("replace",t)}},pushState:{value:function(t,e,n){S("push",t,e,n)}},replaceState:{value:function(t,e,n){S("replace",t,e,n)}}}),f.state)if(f.state.$hasCloseHandle)p(b,f.state),f.back();else{const t=N({title:document.title});p(b,Object.assign({$key:y()},f.state||{})),w.set(b.$key,t)}else{const{pathname:t,search:e,hash:n}=m;f.replace({path:t,query:e,hash:n})}let t=!1;window.addEventListener("popstate",e=>{var n,s,i,o,r,h;const u=e.state;if(!(null===(n=u)||void 0===n?void 0:n.$key))return;if(t)return void(t=!1);if(!w.has(u.$key)){const{pathname:t,search:e,hash:n}=m;w.set(u.$key,{path:t,query:new a(e),hash:n,title:document.title,data:u})}const c=b;if(u.$key>c.$key&&u.$hasOpenHandle)null===(o=null===(s=w.get(u.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(c.$hasCloseHandle){const e=w.get(c.$key),n=null===(r=e)||void 0===r?void 0:r.close,s=null===(h=e)||void 0===h?void 0:h.shouldClose;if(s&&!s())return t=!0,void f.forward();n?n():u.$hasCloseHandle&&(t=!0,f.back())}p(l(b),u)})}
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
 */const C=new WeakMap,O=t=>(...e)=>{const n=t(...e);return C.set(n,!0),n},H=t=>"function"==typeof t&&C.has(t),A=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,j=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},R=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},V={},M={},T=`{{lit-${String(Math.random()).slice(2)}}}`,q=`\x3c!--${T}--\x3e`,L=new RegExp(`${T}|${q}`),I="$lit$";class U{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)W(e[t].name,I)&&s++;for(;s-- >0;){const e=l[a],n=F.exec(e)[2],s=n.toLowerCase()+I,i=t.getAttribute(s);t.removeAttribute(s);const o=i.split(L);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(T)>=0){const s=t.parentNode,i=e.split(L),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=B();else{const t=F.exec(o);null!==t&&W(t[2],I)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-I.length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(B(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===T){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(B(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(T,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const W=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},D=t=>-1!==t.index,B=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class z{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=A?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],D(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return A&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const J=` ${T} `;class K{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=F.exec(t);e+=null===o?t+(n?J:q):t.substr(0,o.index)+o[1]+o[2]+I+o[3]+T}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class Z extends K{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),j(e,n.firstChild),t}}
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
 */const G=t=>null===t||!("object"==typeof t||"function"==typeof t),Q=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class X{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Y(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(G(t)||!Q(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Y{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===V||G(t)&&t===this.value||(this.value=t,H(t)||(this.committer.dirty=!0))}commit(){for(;H(this.value);){const t=this.value;this.value=V,t(this)}this.value!==V&&this.committer.commit()}}class tt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(B()),this.endNode=t.appendChild(B())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=B()),t.__insert(this.endNode=B())}insertAfterPart(t){t.__insert(this.startNode=B()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}const t=this.__pendingValue;t!==V&&(G(t)?t!==this.value&&this.__commitText(t):t instanceof K?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Q(t)?this.__commitIterable(t):t===M?(this.value=M,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof z&&this.value.template===e)this.value.update(t.values);else{const n=new z(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new tt(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){R(this.startNode.parentNode,t.nextSibling,this.endNode)}}class et{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}if(this.__pendingValue===V)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=V}}class nt extends X{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new st(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class st extends Y{}let it=!1;try{const t={get capture(){return it=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class ot{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}if(this.__pendingValue===V)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=rt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=V}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const rt=t=>t&&(it?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const at=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new nt(t,e.slice(1),n).parts}return"@"===i?[new ot(t,e.slice(1),s.eventContext)]:"?"===i?[new et(t,e.slice(1),n)]:new X(t,e,n).parts}handleTextExpression(t){return new tt(t)}};
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
 */function lt(t){let e=ht.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ht.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(T);return n=e.keyString.get(s),void 0===n&&(n=new U(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const ht=new Map,ut=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ct=(t,e)=>{const n=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,i=n.insertBefore(B(),s);n.insertBefore(B(),s);const o=new tt(t.options);return o.insertAfterNode(i),o},dt=(t,e)=>(t.setValue(e),t.commit(),t),pt=(t,e,n)=>{const s=t.startNode.parentNode,i=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&j(s,e.startNode,o,i)},ft=t=>{R(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},mt=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},gt=new WeakMap,vt=new WeakMap,_t=O((t,e,n)=>{let s;return void 0===n?n=e:void 0!==e&&(s=e),e=>{if(!(e instanceof tt))throw new Error("repeat can only be used in text bindings");const i=gt.get(e)||[],o=vt.get(e)||[],r=[],a=[],l=[];let h,u,c=0;for(const e of t)l[c]=s?s(e,c):c,a[c]=n(e,c),c++;let d=0,p=i.length-1,f=0,m=a.length-1;for(;d<=p&&f<=m;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===l[f])r[f]=dt(i[d],a[f]),d++,f++;else if(o[p]===l[m])r[m]=dt(i[p],a[m]),p--,m--;else if(o[d]===l[m])r[m]=dt(i[d],a[m]),pt(e,i[d],r[m+1]),d++,m--;else if(o[p]===l[f])r[f]=dt(i[p],a[f]),pt(e,i[p],i[d]),p--,f++;else if(void 0===h&&(h=mt(l,f,m),u=mt(o,d,p)),h.has(o[d]))if(h.has(o[p])){const t=u.get(l[f]),n=void 0!==t?i[t]:null;if(null===n){const t=ct(e,i[d]);dt(t,a[f]),r[f]=t}else r[f]=dt(n,a[f]),pt(e,n,i[d]),i[t]=null;f++}else ft(i[p]),p--;else ft(i[d]),d++;for(;f<=m;){const t=ct(e,r[m+1]);dt(t,a[f]),r[f++]=t}for(;d<=p;){const t=i[d++];null!==t&&ft(t)}gt.set(e,r),vt.set(e,l)}}),yt=new WeakMap,bt=O((t,e)=>n=>{const s=yt.get(n);if(Array.isArray(t)){if(Array.isArray(s)&&s.length===t.length&&t.every((t,e)=>t===s[e]))return}else if(s===t&&(void 0!==t||yt.has(n)))return;n.setValue(e()),yt.set(n,Array.isArray(t)?Array.from(t):t)}),wt=O(t=>e=>{if(void 0===t&&e instanceof Y){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let xt={html:(t,...e)=>new K(t,e,"html",at),svg:(t,...e)=>new Z(t,e,"svg",at),render:(t,e,n)=>{let s=ut.get(e);void 0===s&&(R(e,e.firstChild),ut.set(e,s=new tt(Object.assign({templateFactory:lt},n))),s.appendInto(e)),s.setValue(t),s.commit()},directive:O,repeat:_t,guard:bt,ifDefined:wt};window.__litHtml?xt=window.__litHtml:window.__litHtml=xt;const{html:kt,svg:Et,render:Nt,directive:Pt,repeat:St,guard:$t,ifDefined:Ct}=xt;class Ot extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),n&&n.forEach(t=>{this.__connectProperty(t,!1)}),s&&s.forEach(t=>{this.__connectProperty(t,!0),this[t]=u}),i&&i.forEach(t=>{if(!t[c])throw new Error("`observedStores` only support store module");!function(t,e){t[c].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}get internals(){return this.__internals||(this.__internals=this.attachInternals()),this.__internals}__connectProperty(t,e=!1){if(t in this)return;let n=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>n,set(s){if(s!==n){if(e){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=e=>{const n=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(t,n,s),i(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return kt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Nt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,n){}attributeChanged(t,e,n){}unmounted(){}attributeChangedCallback(t,e,n){this.__isMounted&&(this.attributeChanged(t,e,n),i(this.__update))}__connectedCallback(){Nt(this.render(),this.__renderRoot);const t=this.mounted();t&&(this.__unmountCallback=t),this.__isMounted=!0}disconnectedCallback(){var t;const e=this.constructor;e.observedStores&&e.observedStores.forEach(t=>{!function(t,e){t[c].delete(e)}(t,this.__update)}),null===(t=this.__unmountCallback)||void 0===t||t.call(this),this.unmounted(),this.__isMounted=!1}}class Ht extends Ot{connectedCallback(){this.willMount(),this.__connectedCallback()}}const At=new r;let jt=!1;const Rt=()=>{window.requestAnimationFrame((function t(e){const n=At.get();n&&(n(),performance.now()-e<16)?t(e):jt&&Rt()}))};At.addEventListener("start",()=>{jt=!0,Rt()}),At.addEventListener("end",()=>jt=!1);const Vt=customElements.define.bind(customElements);function Mt(t,e){const n=t.constructor;n.observedAttributes||(n.observedAttributes=[]),n.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function Tt(t,e){const n=t.constructor;n.observedPropertys||(n.observedPropertys=[]),n.observedPropertys.push(e)}function qt(t){return function(e){const n=e;n.observedStores||(n.observedStores=[]),n.observedStores.push(t)}}function Lt(t){return function(e){customElements.define(t,e)}}customElements.define=function(t,e,n){customElements.get(t)||Vt(t,e,n)};var It,Ut=function(t,e,n,s){var i,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};class Wt extends RegExp{constructor(t){const e={};let n=0;super(`^${t.replace(/:([^/$]+)/g,(t,s)=>(e[s]=n++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Dt(t){return new Wt(t)}function Bt(t,e){return!!e.match(Dt(t))}function Ft(t,e){let n=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{n=n.replace(new RegExp(`:${t}`,"g"),e.params[t])}),n}function zt(t,e){const n=Ft(t,e);return Object.assign({path:n},e)}let Jt=It=class extends Ht{constructor(){super();const{path:t,query:e}=f.getParams(),n=t+e;this._href=n}static getParams(){if(It.currentRoute)return function(t,e){const n=Dt(t),s=e.match(n);if(s){const t={};return Object.keys(n.namePosition).forEach(e=>{t[e]=s[n.namePosition[e]+1]}),t}}(It.currentRoute.pattern,f.getParams().path)}initPage(){It.currentRoute&&It.currentRoute.title&&It.currentRoute.title!==f.getParams().title&&f.updateParams({title:It.currentRoute.title})}shouldUpdate(){const{path:t,query:e}=f.getParams(),n=t+e;return n!==this._href&&(this._href=n,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.change(It.currentRoute)}render(){if(!this.routes)return this.callback();It.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const n of t){const{pattern:t}=n;if("*"===t)e=n;else if(Bt(t,f.getParams().path)){It.currentRoute=n;break}}return It.currentRoute||(It.currentRoute=e),It.currentRoute?It.currentRoute.redirect?(f.replace({path:It.currentRoute.redirect}),this.callback()):kt`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${It.currentRoute.content}
    `:this.callback()}callback(){return It.currentRoute=null,kt``}};Ut([Tt],Jt.prototype,"routes",void 0),Ut([function(t,e){const n=t.constructor;n.defineEvents||(n.defineEvents=[]),n.defineEvents.push(e)}],Jt.prototype,"change",void 0),Jt=It=Ut([qt(f.store),Lt("gem-route")],Jt);var Kt=function(t,e,n,s){var i,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Zt=class extends Ht{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:n,query:s,hash:i}=f.getParams();if(n+s+i!==e)if(t.stopPropagation(),this.route)f.pushIgnoreCloseHandle(zt(this.route,this.options));else if(this.href){const{pathname:t,search:e,hash:n}=new URL(this.href,location.origin);f.pushIgnoreCloseHandle({path:t,query:e,hash:n})}else f.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash})},this.preventDefault=t=>{t.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options&&this.options.query||"",e=this.options&&this.options.hash||"";return Ft(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(t=this.getHref()){return kt`
      <style>
        :host {
          /* link default style */
          cursor: pointer;
          color: blue;
          text-decoration: underline;
        }
        a {
          all: unset;
        }
      </style>
      <a @click=${this.preventDefault} href=${new URL(f.basePath+t,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};Kt([Mt],Zt.prototype,"href",void 0),Kt([Mt],Zt.prototype,"path",void 0),Kt([Mt],Zt.prototype,"query",void 0),Kt([Mt],Zt.prototype,"hash",void 0),Kt([Tt],Zt.prototype,"route",void 0),Kt([Tt],Zt.prototype,"options",void 0),Zt=Kt([Lt("gem-link"),qt($)],Zt);let Gt=class extends Zt{render(){const{path:t,query:e,hash:n}=f.getParams(),s=this.pattern&&Bt(this.pattern,t),i=this.getHref();return s||t+e+n===i?this.setAttribute("active",""):this.removeAttribute("active"),super.render(i)}};Kt([Mt],Gt.prototype,"pattern",void 0),Gt=Kt([Lt("gem-active-link"),qt(f.store)],Gt);const Qt={home:{pattern:"/",get content(){return kt`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: home page, click navigation to a page
        <gem-active-link .route=${Qt.a} .options=${{params:{b:1}}}>
          a page link, params: {a: 1}
        </gem-active-link>
      `}},a:{pattern:"/a/:b",get content(){return kt`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: /a/:b, click navigation to home page, cuurent query: ${f.getParams().query.toString()}
        <gem-active-link .route=${Qt.a} .options=${{params:{b:1},query:"?a=1"}}>
          a page link, query: ?a=1
        </gem-active-link>
      `}}};class Xt extends Ht{constructor(){super(...arguments),this.onclick=()=>{Jt.currentRoute===Qt.home?f.push(zt(Qt.a,{params:{b:String(Date.now())}})):f.push(zt(Qt.home))}}render(){return kt`
      <main>
        <gem-route .routes=${Qt}></gem-route>
      </main>
    `}}customElements.define("app-root",Xt),document.body.append(new Xt)}]);
//# sourceMappingURL=bundle.79951229a173c539a42a.js.map