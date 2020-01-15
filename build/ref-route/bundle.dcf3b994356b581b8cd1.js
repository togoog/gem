!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/gem/build/ref-route/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=new Set;function i(e){s.size||globalThis.queueMicrotask(()=>{s.forEach(e=>e()),s.clear()}),s.delete(e),s.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}new WeakMap;function a(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class l extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function h(){}const u="gem@storeHandlesKey";function c(e){const t=e;return Object.defineProperty(t,u,{enumerable:!1,value:new Set,writable:!0}),t}function d(e,t){Object.assign(e,t),e[u].forEach(e=>{i(e)})}const p=window.history,f=window.location,m=p.pushState.bind(p),g=p.replaceState.bind(p);let v=0;const _=()=>++v,y=c({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),b=new Map;function w(e){var t,n,s,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new l("`$key` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasCloseHandle)throw new l("`$hasCloseHandle` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasOpenHandle)throw new l("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new l("`$hasShouldCloseHandle` is not allowed")}function x(e){return p.basePath?p.basePath+("/"===e?"":e):e}function k(e){return e.replace(new RegExp(`^${p.basePath}`),"")}function E(e){const t=e.title||"",n=e.path||k(f.pathname),s=new r(e.query||(e.path?"":f.search)),i=e.path||e.query,o=e.hash||(i?"":f.hash);return Object.assign(Object.assign({},e),{title:t,path:n,query:s,hash:o})}function N(e,t){w(t.data);const n=E(t),{title:s,path:i,query:o,hash:l}=n,h=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:_()},n.data||{});b.set(h.$key,n),d(a(y),h);const u=x(i)+new r(o)+l,c=f.hash;("push"===e?m:g)(h,s,u),c!==l&&window.dispatchEvent(new CustomEvent("hashchange"))}function P(e,t,n,s){w(t);const i=Object.assign({$key:_()},t||{}),{pathname:o,search:l,hash:h}=new URL(s,f.origin),u=E({path:o,query:new r(l),hash:h,title:n,data:t});b.set(i.$key,u),d(a(y),i);const c=x(o)+u.query+h,p=f.hash;("push"===e?m:g)(i,n,c),p!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const S=c({basePath:""});if(!("basePath"in p)){if(Object.defineProperties(p,{basePath:{get:()=>S.basePath,set(e){if(S.basePath)throw new l("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");d(S,{basePath:e}),Object.assign(b.get(y.$key),{path:k(f.pathname)})}},getParams:{value:function(){return b.get(y.$key)}},updateParams:{value:function(e){Object.assign(b.get(y.$key),e),d(y,{})}},store:{value:y},push:{value:function(e){N("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,n,s;y.$hasCloseHandle?(null===(s=null===(t=b.get(y.$key))||void 0===t?void 0:(n=t).close)||void 0===s||s.call(n),p.replace(e)):p.push(e)}},replace:{value:function(e){N("replace",e)}},pushState:{value:function(e,t,n){P("push",e,t,n)}},replaceState:{value:function(e,t,n){P("replace",e,t,n)}}}),p.state)if(p.state.$hasCloseHandle)d(y,p.state),p.back();else{const e=E({title:document.title});d(y,Object.assign({$key:_()},p.state||{})),b.set(y.$key,e)}else{const{pathname:e,search:t,hash:n}=f;p.replace({path:e,query:t,hash:n})}let e=!1;window.addEventListener("popstate",t=>{var n,s,i,o,l,h;const u=t.state;if(!(null===(n=u)||void 0===n?void 0:n.$key))return;if(e)return void(e=!1);if(!b.has(u.$key)){const{pathname:e,search:t,hash:n}=f;b.set(u.$key,{path:e,query:new r(t),hash:n,title:document.title,data:u})}const c=y;if(u.$key>c.$key&&u.$hasOpenHandle)null===(o=null===(s=b.get(u.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(c.$hasCloseHandle){const t=b.get(c.$key),n=null===(l=t)||void 0===l?void 0:l.close,s=null===(h=t)||void 0===h?void 0:h.shouldClose;if(s&&!s())return e=!0,void p.forward();n?n():u.$hasCloseHandle&&(e=!0,p.back())}d(a(y),u)})}
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
 */const $=new WeakMap,C=e=>(...t)=>{const n=e(...t);return $.set(n,!0),n},O=e=>"function"==typeof e&&$.has(e),H=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,A=(e,t,n=null,s=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,s),t=n}},R=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},V={},j={},M=`{{lit-${String(Math.random()).slice(2)}}}`,T=`\x3c!--${M}--\x3e`,q=new RegExp(`${M}|${T}`),L="$lit$";class I{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)U(t[e].name,L)&&s++;for(;s-- >0;){const t=l[a],n=B.exec(t)[2],s=n.toLowerCase()+L,i=e.getAttribute(s);e.removeAttribute(s);const o=i.split(q);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(M)>=0){const s=e.parentNode,i=t.split(q),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=D();else{const e=B.exec(o);null!==e&&U(e[2],L)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-L.length)+e[3]),n=document.createTextNode(o)}s.insertBefore(n,e),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(D(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===M){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(D(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(n.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(M,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const U=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},W=e=>-1!==e.index,D=()=>document.createComment(""),B=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class F{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=H?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],W(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return H&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const z=` ${M} `;class J{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=B.exec(e);t+=null===o?e+(n?z:T):e.substr(0,o.index)+o[1]+o[2]+L+o[3]+M}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class K extends J{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),A(t,n.firstChild),e}}
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
 */const Z=e=>null===e||!("object"==typeof e||"function"==typeof e),G=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Q{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new X(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(Z(e)||!G(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class X{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===V||Z(e)&&e===this.value||(this.value=e,O(e)||(this.committer.dirty=!0))}commit(){for(;O(this.value);){const e=this.value;this.value=V,e(this)}this.value!==V&&this.committer.commit()}}class Y{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(D()),this.endNode=e.appendChild(D())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=D()),e.__insert(this.endNode=D())}insertAfterPart(e){e.__insert(this.startNode=D()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;O(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=V,e(this)}const e=this.__pendingValue;e!==V&&(Z(e)?e!==this.value&&this.__commitText(e):e instanceof J?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):G(e)?this.__commitIterable(e):e===j?(this.value=j,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof F&&this.value.template===t)this.value.update(e.values);else{const n=new F(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)n=t[s],void 0===n&&(n=new Y(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){R(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ee{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;O(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=V,e(this)}if(this.__pendingValue===V)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=V}}class te extends Q{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ne extends X{}let se=!1;try{const e={get capture(){return se=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ie{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;O(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=V,e(this)}if(this.__pendingValue===V)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=oe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=V}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const oe=e=>e&&(se?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const re=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new te(e,t.slice(1),n).parts}return"@"===i?[new ie(e,t.slice(1),s.eventContext)]:"?"===i?[new ee(e,t.slice(1),n)]:new Q(e,t,n).parts}handleTextExpression(e){return new Y(e)}};
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
 */function ae(e){let t=le.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},le.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(M);return n=t.keyString.get(s),void 0===n&&(n=new I(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const le=new Map,he=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ue=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(D(),s);n.insertBefore(D(),s);const o=new Y(e.options);return o.insertAfterNode(i),o},ce=(e,t)=>(e.setValue(t),e.commit(),e),de=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&A(s,t.startNode,o,i)},pe=e=>{R(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},fe=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},me=new WeakMap,ge=new WeakMap,ve=C((e,t,n)=>{let s;return void 0===n?n=t:void 0!==t&&(s=t),t=>{if(!(t instanceof Y))throw new Error("repeat can only be used in text bindings");const i=me.get(t)||[],o=ge.get(t)||[],r=[],a=[],l=[];let h,u,c=0;for(const t of e)l[c]=s?s(t,c):c,a[c]=n(t,c),c++;let d=0,p=i.length-1,f=0,m=a.length-1;for(;d<=p&&f<=m;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===l[f])r[f]=ce(i[d],a[f]),d++,f++;else if(o[p]===l[m])r[m]=ce(i[p],a[m]),p--,m--;else if(o[d]===l[m])r[m]=ce(i[d],a[m]),de(t,i[d],r[m+1]),d++,m--;else if(o[p]===l[f])r[f]=ce(i[p],a[f]),de(t,i[p],i[d]),p--,f++;else if(void 0===h&&(h=fe(l,f,m),u=fe(o,d,p)),h.has(o[d]))if(h.has(o[p])){const e=u.get(l[f]),n=void 0!==e?i[e]:null;if(null===n){const e=ue(t,i[d]);ce(e,a[f]),r[f]=e}else r[f]=ce(n,a[f]),de(t,n,i[d]),i[e]=null;f++}else pe(i[p]),p--;else pe(i[d]),d++;for(;f<=m;){const e=ue(t,r[m+1]);ce(e,a[f]),r[f++]=e}for(;d<=p;){const e=i[d++];null!==e&&pe(e)}me.set(t,r),ge.set(t,l)}}),_e=new WeakMap,ye=C((e,t)=>n=>{const s=_e.get(n);if(Array.isArray(e)){if(Array.isArray(s)&&s.length===e.length&&e.every((e,t)=>e===s[t]))return}else if(s===e&&(void 0!==e||_e.has(n)))return;n.setValue(t()),_e.set(n,Array.isArray(e)?Array.from(e):e)}),be=C(e=>t=>{if(void 0===e&&t instanceof X){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let we={html:(e,...t)=>new J(e,t,"html",re),svg:(e,...t)=>new K(e,t,"svg",re),render:(e,t,n)=>{let s=he.get(t);void 0===s&&(R(t,t.firstChild),he.set(t,s=new Y(Object.assign({templateFactory:ae},n))),s.appendInto(t)),s.setValue(e),s.commit()},directive:C,repeat:ve,guard:ye,ifDefined:be};window.__litHtml?we=window.__litHtml:window.__litHtml=we;const{html:xe,svg:ke,render:Ee,directive:Ne,repeat:Pe,guard:Se,ifDefined:$e}=we;class Ce extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),n&&n.forEach(e=>{this.__connectProperty(e,!1)}),s&&s.forEach(e=>{this.__connectProperty(e,!0),this[e]=h}),i&&i.forEach(e=>{if(!e[u])throw new Error("`observedStores` only support store module");!function(e,t){e[u].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let n=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>n,set(s){if(s!==n){if(t){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=t=>{const n=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(e,n,s),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return xe`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Ee(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,n){}attributeChanged(e,t,n){}unmounted(){}attributeChangedCallback(e,t,n){this.__isMounted&&(this.attributeChanged(e,t,n),i(this.__update))}__connectedCallback(){Ee(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[u].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Oe extends Ce{connectedCallback(){this.willMount(),this.__connectedCallback()}}const He=new o;let Ae=!1;const Re=()=>{window.requestAnimationFrame((function e(t){const n=He.get();n&&(n(),performance.now()-t<16)?e(t):Ae&&Re()}))};He.addEventListener("start",()=>{Ae=!0,Re()}),He.addEventListener("end",()=>Ae=!1);const Ve=customElements.define.bind(customElements);function je(e,t){const n=e.constructor;n.observedAttributes||(n.observedAttributes=[]),n.observedAttributes.push(t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()))}function Me(e,t){const n=e.constructor;n.observedPropertys||(n.observedPropertys=[]),n.observedPropertys.push(t)}function Te(e){return function(t){const n=t;n.observedStores||(n.observedStores=[]),n.observedStores.push(e)}}function qe(e){return function(t){customElements.define(e,t)}}customElements.define=function(e,t,n){customElements.get(e)||Ve(e,t,n)};var Le,Ie=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};class Ue extends RegExp{constructor(e){const t={};let n=0;super(`^${e.replace(/:([^/$]+)/g,(e,s)=>(t[s]=n++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=t}}function We(e){return new Ue(e)}function De(e,t){return!!t.match(We(e))}function Be(e,t){let n=e.pattern;return t&&t.params&&Object.keys(t.params).forEach(e=>{n=n.replace(new RegExp(`:${e}`,"g"),t.params[e])}),n}function Fe(e,t){const n=Be(e,t);return Object.assign({path:n},t)}let ze=Le=class extends Oe{constructor(){super();const{path:e,query:t}=p.getParams(),n=e+t;this._href=n}static getParams(){if(Le.currentRoute)return function(e,t){const n=We(e),s=t.match(n);if(s){const e={};return Object.keys(n.namePosition).forEach(t=>{e[t]=s[n.namePosition[t]+1]}),e}}(Le.currentRoute.pattern,p.getParams().path)}initPage(){Le.currentRoute&&Le.currentRoute.title&&Le.currentRoute.title!==p.getParams().title&&p.updateParams({title:Le.currentRoute.title})}shouldUpdate(){const{path:e,query:t}=p.getParams(),n=e+t;return n!==this._href&&(this._href=n,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.change(Le.currentRoute)}render(){if(!this.routes)return this.callback();Le.currentRoute=null;let e,t=null;e=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const n of e){const{pattern:e}=n;if("*"===e)t=n;else if(De(e,p.getParams().path)){Le.currentRoute=n;break}}return Le.currentRoute||(Le.currentRoute=t),Le.currentRoute?Le.currentRoute.redirect?(p.replace({path:Le.currentRoute.redirect}),this.callback()):xe`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Le.currentRoute.content}
    `:this.callback()}callback(){return Le.currentRoute=null,xe``}};Ie([Me],ze.prototype,"routes",void 0),Ie([function(e,t){const n=e.constructor;n.defineEvents||(n.defineEvents=[]),n.defineEvents.push(t)}],ze.prototype,"change",void 0),ze=Le=Ie([Te(p.store),qe("gem-route")],ze);var Je=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let Ke=class extends Oe{constructor(){super(),this.clickHandle=e=>{const t=this.getHref();if(!t.startsWith("/"))return void window.open(t);const{path:n,query:s,hash:i}=p.getParams();if(n+s+i!==t)if(e.stopPropagation(),this.route)p.pushIgnoreCloseHandle(Fe(this.route,this.options));else if(this.href){const{pathname:e,search:t,hash:n}=new URL(this.href,location.origin);p.pushIgnoreCloseHandle({path:e,query:t,hash:n})}else p.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash})},this.preventDefault=e=>{e.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const e=this.options&&this.options.query||"",t=this.options&&this.options.hash||"";return Be(this.route,this.options)+e+t}return this.href||this.path+this.query+this.hash}render(e=this.getHref()){return xe`
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
      <a @click=${this.preventDefault} href=${new URL(p.basePath+e,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};Je([je],Ke.prototype,"href",void 0),Je([je],Ke.prototype,"path",void 0),Je([je],Ke.prototype,"query",void 0),Je([je],Ke.prototype,"hash",void 0),Je([Me],Ke.prototype,"route",void 0),Je([Me],Ke.prototype,"options",void 0),Ke=Je([qe("gem-link"),Te(S)],Ke);let Ze=class extends Ke{render(){const{path:e,query:t,hash:n}=p.getParams(),s=this.pattern&&De(this.pattern,e),i=this.getHref();return s||e+t+n===i?this.setAttribute("active",""):this.removeAttribute("active"),super.render(i)}};Je([je],Ze.prototype,"pattern",void 0),Ze=Je([qe("gem-active-link"),Te(p.store)],Ze);const Ge={home:{pattern:"/",get content(){return xe`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: home page, click navigation to a page
        <gem-active-link .route=${Ge.a} .options=${{params:{b:1}}}>
          a page link, params: {a: 1}
        </gem-active-link>
      `}},a:{pattern:"/a/:b",get content(){return xe`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: /a/:b, click navigation to home page, cuurent query: ${p.getParams().query.toString()}
        <gem-active-link .route=${Ge.a} .options=${{params:{b:1},query:"?a=1"}}>
          a page link, query: ?a=1
        </gem-active-link>
      `}}};class Qe extends Oe{constructor(){super(...arguments),this.onclick=()=>{ze.currentRoute===Ge.home?p.push(Fe(Ge.a,{params:{b:String(Date.now())}})):p.push(Fe(Ge.home))}}render(){return xe`
      <main>
        <gem-route .routes=${Ge}></gem-route>
      </main>
    `}}customElements.define("app-root",Qe),document.body.append(new Qe)}]);
//# sourceMappingURL=bundle.dcf3b994356b581b8cd1.js.map