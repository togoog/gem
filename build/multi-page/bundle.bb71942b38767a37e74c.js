!function(e){function t(t){for(var n,i,o=t[0],r=t[1],a=0,c=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&c.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(l&&l(t);c.length;)c.shift()()}var n={},s={0:0};function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=s[e]=[t,i]}));t.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+e+".bundle."+{1:"7624fcd02fb4106cb4c5",2:"f1aaf71668eda2479725"}[e]+".js"}(e);var l=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}s[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gem/build/multi-page",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var l=r;i(i.s=2)}([function(e,t,n){"use strict";const s=new Set;function i(e){s.size||globalThis.queueMicrotask(()=>{s.forEach(e=>e()),s.clear()}),s.delete(e),s.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}function a(e,...t){return e.reduce((e,n,s)=>e+(t[s-1]||"")+n)}function l(e,...t){return a(e,...t)}new WeakMap;function c(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class u extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function h(){}const d="gem@storeHandlesKey";function p(e){const t=e;return Object.defineProperty(t,d,{enumerable:!1,value:new Set,writable:!0}),t}function f(e){return Object.keys(e).forEach(t=>{p(e[t])}),e}function g(e,t){Object.assign(e,t),e[d].forEach(e=>{i(e)})}const m=window.history,v=window.location,b=m.pushState.bind(m),y=m.replaceState.bind(m);let _=0;const w=()=>++_,x=p({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),k=new Map;function E(e){var t,n,s,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new u("`$key` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasCloseHandle)throw new u("`$hasCloseHandle` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasOpenHandle)throw new u("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new u("`$hasShouldCloseHandle` is not allowed")}function P(e){const t=e.title||"",n=e.path||v.pathname,s=new r(e.query||(e.path?"":v.search)),i=e.path||e.query,o=e.hash||(i?"":v.hash);return Object.assign(Object.assign({},e),{title:t,path:n,query:s,hash:o})}function N(e,t){E(t.data);const n=P(t),{title:s,path:i,query:o,hash:a}=n,l=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:w()},n.data||{});k.set(l.$key,n),g(c(x),l);const u=m.basePath+i+new r(o)+a;("push"===e?b:y)(l,s,u)}function O(e,t,n,s){E(t);const i=Object.assign({$key:w()},t||{}),{pathname:o,search:a,hash:l}=new URL(s,v.origin),u=P({path:o,query:new r(a),hash:l,title:n,data:t});k.set(i.$key,u),g(c(x),i),("push"===e?b:y)(i,n,s)}if(!("basePath"in m)){let e="";if(Object.defineProperties(m,{basePath:{get:()=>e,set(t){if(e)throw new u("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");e=t}},getParams:{value:function(){return k.get(x.$key)}},updateParams:{value:function(e){Object.assign(k.get(x.$key),e),g(x,{})}},store:{value:x},push:{value:function(e){N("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,n,s;x.$hasCloseHandle?(null===(s=null===(t=k.get(x.$key))||void 0===t?void 0:(n=t).close)||void 0===s||s.call(n),m.replace(e)):m.push(e)}},replace:{value:function(e){N("replace",e)}},pushState:{value:function(e,t,n){O("push",e,t,n)}},replaceState:{value:function(e,t,n){O("replace",e,t,n)}}}),m.state)if(m.state.$close)m.back();else{const e=P({title:document.title});g(x,Object.assign({$key:w()},m.state||{})),k.set(x.$key,e)}else{const{pathname:e,search:t,hash:n}=v;m.replace({path:e,query:t,hash:n})}let t=!1;window.addEventListener("popstate",e=>{var n,s,i,o,a,l;const u=e.state;if(!(null===(n=u)||void 0===n?void 0:n.$key))return;if(t)return void(t=!1);if(!k.has(u.$key)){const{pathname:e,search:t,hash:n}=v;k.set(u.$key,{path:e,query:new r(t),hash:n,title:document.title,data:u})}const h=x;if(u.$key>h.$key&&u.$hasOpenHandle)null===(o=null===(s=k.get(u.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(h.$hasCloseHandle){const e=k.get(h.$key),n=null===(a=e)||void 0===a?void 0:a.close,s=null===(l=e)||void 0===l?void 0:l.shouldClose;if(s&&!s())return t=!0,void m.forward();n?n():(t=!0,m.back())}g(c(x),u)})}
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
 */const S=new WeakMap,C=e=>(...t)=>{const n=e(...t);return S.set(n,!0),n},$=e=>"function"==typeof e&&S.has(e),j=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,A=(e,t,n=null,s=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,s),t=n}},H=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},T={},V={},R=`{{lit-${String(Math.random()).slice(2)}}}`,M=`\x3c!--${R}--\x3e`,L=new RegExp(`${R}|${M}`),q="$lit$";class B{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)I(t[e].name,q)&&s++;for(;s-- >0;){const t=l[a],n=U.exec(t)[2],s=n.toLowerCase()+q,i=e.getAttribute(s);e.removeAttribute(s);const o=i.split(L);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(R)>=0){const s=e.parentNode,i=t.split(L),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=W();else{const e=U.exec(o);null!==e&&I(e[2],q)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-q.length)+e[3]),n=document.createTextNode(o)}s.insertBefore(n,e),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(W(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===R){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(W(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(n.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(R,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const I=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},D=e=>-1!==e.index,W=()=>document.createComment(""),U=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class F{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=j?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],D(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return j&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const z=` ${R} `;class J{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=U.exec(e);t+=null===o?e+(n?z:M):e.substr(0,o.index)+o[1]+o[2]+q+o[3]+R}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class K extends J{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),A(t,n.firstChild),e}}
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
 */const Z=e=>null===e||!("object"==typeof e||"function"==typeof e),G=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Q{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new X(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(Z(e)||!G(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class X{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===T||Z(e)&&e===this.value||(this.value=e,$(e)||(this.committer.dirty=!0))}commit(){for(;$(this.value);){const e=this.value;this.value=T,e(this)}this.value!==T&&this.committer.commit()}}class Y{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(W()),this.endNode=e.appendChild(W())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=W()),e.__insert(this.endNode=W())}insertAfterPart(e){e.__insert(this.startNode=W()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}const e=this.__pendingValue;e!==T&&(Z(e)?e!==this.value&&this.__commitText(e):e instanceof J?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):G(e)?this.__commitIterable(e):e===V?(this.value=V,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof F&&this.value.template===t)this.value.update(e.values);else{const n=new F(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)n=t[s],void 0===n&&(n=new Y(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){H(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ee{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}if(this.__pendingValue===T)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=T}}class te extends Q{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ne extends X{}let se=!1;try{const e={get capture(){return se=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ie{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}if(this.__pendingValue===T)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=oe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=T}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const oe=e=>e&&(se?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */function ae(e){let t=le.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},le.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(R);return n=t.keyString.get(s),void 0===n&&(n=new B(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const le=new Map,ce=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ue=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(W(),s);n.insertBefore(W(),s);const o=new Y(e.options);return o.insertAfterNode(i),o},he=(e,t)=>(e.setValue(t),e.commit(),e),de=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&A(s,t.startNode,o,i)},pe=e=>{H(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},fe=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},ge=new WeakMap,me=new WeakMap,ve=C((e,t,n)=>{let s;return void 0===n?n=t:void 0!==t&&(s=t),t=>{if(!(t instanceof Y))throw new Error("repeat can only be used in text bindings");const i=ge.get(t)||[],o=me.get(t)||[],r=[],a=[],l=[];let c,u,h=0;for(const t of e)l[h]=s?s(t,h):h,a[h]=n(t,h),h++;let d=0,p=i.length-1,f=0,g=a.length-1;for(;d<=p&&f<=g;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===l[f])r[f]=he(i[d],a[f]),d++,f++;else if(o[p]===l[g])r[g]=he(i[p],a[g]),p--,g--;else if(o[d]===l[g])r[g]=he(i[d],a[g]),de(t,i[d],r[g+1]),d++,g--;else if(o[p]===l[f])r[f]=he(i[p],a[f]),de(t,i[p],i[d]),p--,f++;else if(void 0===c&&(c=fe(l,f,g),u=fe(o,d,p)),c.has(o[d]))if(c.has(o[p])){const e=u.get(l[f]),n=void 0!==e?i[e]:null;if(null===n){const e=ue(t,i[d]);he(e,a[f]),r[f]=e}else r[f]=he(n,a[f]),de(t,n,i[d]),i[e]=null;f++}else pe(i[p]),p--;else pe(i[d]),d++;for(;f<=g;){const e=ue(t,r[g+1]);he(e,a[f]),r[f++]=e}for(;d<=p;){const e=i[d++];null!==e&&pe(e)}ge.set(t,r),me.set(t,l)}}),be=new WeakMap,ye=C((e,t)=>n=>{const s=be.get(n);if(Array.isArray(e)){if(Array.isArray(s)&&s.length===e.length&&e.every((e,t)=>e===s[t]))return}else if(s===e&&(void 0!==e||be.has(n)))return;n.setValue(t()),be.set(n,Array.isArray(e)?Array.from(e):e)}),_e=C(e=>t=>{if(void 0===e&&t instanceof X){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let we={html:(e,...t)=>new J(e,t,"html",re),svg:(e,...t)=>new K(e,t,"svg",re),render:(e,t,n)=>{let s=ce.get(t);void 0===s&&(H(t,t.firstChild),ce.set(t,s=new Y(Object.assign({templateFactory:ae},n))),s.appendInto(t)),s.setValue(e),s.commit()},directive:C,repeat:ve,guard:ye,ifDefined:_e};window.__litHtml?we=window.__litHtml:window.__litHtml=we;const{html:xe,svg:ke,render:Ee,directive:Pe,repeat:Ne,guard:Oe,ifDefined:Se}=we;class Ce extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),n&&n.forEach(e=>{this.__connectProperty(e,!1)}),s&&s.forEach(e=>{this.__connectProperty(e,!0),this[e]=h}),i&&i.forEach(e=>{if(!e[d])throw new Error("`observedStores` only support store module");!function(e,t){e[d].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let n=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>n,set(s){if(s!==n){if(t){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=t=>{const n=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(e,n,s),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return xe`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Ee(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,n){}attributeChanged(e,t,n){}unmounted(){}attributeChangedCallback(e,t,n){this.__isMounted&&(this.attributeChanged(e,t,n),i(this.__update))}__connectedCallback(){Ee(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[d].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class $e extends Ce{connectedCallback(){this.willMount(),this.__connectedCallback()}}const je=new o;let Ae=!1;const He=()=>{window.requestAnimationFrame((function e(t){const n=je.get();n&&(n(),performance.now()-t<16)?e(t):Ae&&He()}))};je.addEventListener("start",()=>{Ae=!0,He()}),je.addEventListener("end",()=>Ae=!1);const Te=customElements.define.bind(customElements);function Ve(e,t){const n=e.constructor;n.observedAttributes||(n.observedAttributes=[]),n.observedAttributes.push(t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()))}function Re(e,t){const n=e.constructor;n.observedPropertys||(n.observedPropertys=[]),n.observedPropertys.push(t)}function Me(e){return function(t){const n=t;n.observedStores||(n.observedStores=[]),n.observedStores.push(e)}}function Le(e){return function(t){customElements.define(e,t)}}customElements.define=function(e,t,n){customElements.get(e)||Te(e,t,n)},n.d(t,"d",(function(){return f})),n.d(t,"j",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return xe})),n.d(t,"a",(function(){return $e})),n.d(t,"b",(function(){return Ve})),n.d(t,"i",(function(){return Re})),n.d(t,"c",(function(){return Me})),n.d(t,"f",(function(){return Le})),n.d(t,"e",(function(){return l}))},function(e,t,n){"use strict";var s=n(0);t.a=Object(s.d)({pageA:{text:"this is page A"},pageB:{text:"this is page B"}})},function(e,t,n){"use strict";n.r(t);var s,i=n(0),o=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};class r extends RegExp{constructor(e){const t={};let n=0;super(`^${e.replace(/:([^/$]+)/g,(e,s)=>(t[s]=n++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=t}}function a(e){return new r(e)}function l(e,t){return!!t.match(a(e))}function c(e,t){let n=e.pattern;return t&&t.params&&Object.keys(t.params).forEach(e=>{n=n.replace(new RegExp(`:${e}`,"g"),t.params[e])}),n}let u=s=class extends i.a{constructor(){super();const{path:e,query:t}=i.g.getParams(),n=e+t;this.href=n}static getParams(){if(s.currentRoute)return function(e,t){const n=a(e),s=t.match(n);if(s){const e={};return Object.keys(n.namePosition).forEach(t=>{e[t]=s[n.namePosition[t]+1]}),e}}(s.currentRoute.pattern,i.g.getParams().path)}initPage(){s.currentRoute&&s.currentRoute.title&&s.currentRoute.title!==i.g.getParams().title&&i.g.updateParams({title:s.currentRoute.title})}shouldUpdate(){const{path:e,query:t}=i.g.getParams(),n=e+t;return e+t!==this.href&&(this.href=n,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();s.currentRoute=null;let e,t=null;e=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const n of e){const{pattern:e}=n;if("*"===e)t=n;else if(l(e,i.g.getParams().path)){s.currentRoute=n;break}}return s.currentRoute||(s.currentRoute=t),s.currentRoute?s.currentRoute.redirect?(i.g.replace({path:s.currentRoute.redirect}),this.callback()):i.h`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${s.currentRoute.content}
    `:this.callback()}callback(){return s.currentRoute=null,i.h``}};o([i.i],u.prototype,"routes",void 0),u=s=o([Object(i.c)(i.g.store),Object(i.f)("gem-route")],u);var h=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let d=class extends i.a{constructor(){super(),this.clickHandle=e=>{const t=this.getHref();if(!t.startsWith("/"))return void window.open(t);const{path:n,query:s,hash:o}=i.g.getParams();n+s+o!==t&&(e.stopPropagation(),this.route?i.g.pushIgnoreCloseHandle(function(e,t){const n=c(e,t);return Object.assign({path:n},t)}(this.route,this.options)):i.g.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.preventDefault=e=>{e.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const e=this.options&&this.options.query||"",t=this.options&&this.options.hash||"";return c(this.route,this.options)+e+t}return this.href||this.path+this.query+this.hash}render(e=this.getHref()){return i.h`
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
      <a @click=${this.preventDefault} href=${new URL(e,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};h([i.b],d.prototype,"href",void 0),h([i.b],d.prototype,"path",void 0),h([i.b],d.prototype,"query",void 0),h([i.b],d.prototype,"hash",void 0),h([i.i],d.prototype,"route",void 0),h([i.i],d.prototype,"options",void 0),d=h([Object(i.f)("gem-link")],d);let p=class extends d{render(){const{path:e,query:t,hash:n}=i.g.getParams(),s=this.pattern&&l(this.pattern,e),o=this.getHref();return s||e+t+n===o?this.setAttribute("active",""):this.removeAttribute("active"),super.render(o)}};h([i.b],p.prototype,"pattern",void 0),p=h([Object(i.f)("gem-active-link"),Object(i.c)(i.g.store)],p);let f=class extends i.a{static setTitle(e){i.g.updateParams({title:e})}constructor(e){super(),this.hidden=e}render(){const{title:e}=i.g.getParams();return document.title=e||this.textContent||"",this.hidden?i.h``:document.title?i.h`
      ${document.title}
    `:i.h`
        <slot></slot>
      `}};f=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}([Object(i.c)(i.g.store),Object(i.f)("gem-title")],f),document.head&&!document.head.querySelector("gem-title")&&document.head.append(new f(!0));var g,m=n(1);customElements.define("app-page-b",((g=class extends i.a{render(){return i.h`
        <slot></slot> ${m.a.pageB.text}
      `}}).observedStores=[m.a.pageB],g)),setTimeout(()=>n.e(1).then(n.bind(null,3)));const v=[{title:"ccccccd",pattern:"/c/d",content:i.h`
      <div>C/D</div>
    `},{pattern:"/c/e",content:i.h`
      <div>C/E</div>
    `},{pattern:"/c/*",content:i.h`
      <div>C/E</div>
    `}];customElements.define("app-page-c",class extends i.a{render(){return i.h`
        <style>
          gem-link + gem-link {
            margin-left: 0.5em;
          }
        </style>
        <gem-link path="/c/d">Page c/d</gem-link>
        <gem-link path="/c/e">Page c/e</gem-link>
        <gem-route .routes=${v}></gem-route>
      `}});const b=[{pattern:"/",redirect:"/c/e"},{title:"Page A Title",pattern:"/a",get content(){return n.e(2).then(n.bind(null,4)),i.h`
        <app-page-a>A: </app-page-a>
      `}},{title:"Page B Title",pattern:"/b",content:i.h`
      <app-page-b>B: </app-page-b>
    `},{title:"Page C Title",pattern:"/c/*",content:i.h`
      <app-page-c>C: </app-page-c>
    `},{pattern:"/",content:i.h`
      <div>hello</div>
    `}];class y extends i.a{render(){return i.h`
      <style>
        :host {
          text-align: center;
        }
        gem-link {
          cursor: pointer;
        }
        gem-link + gem-link {
          margin-left: 0.5em;
        }
        gem-link:hover {
          text-decoration: underline;
        }
      </style>
      <header><gem-title>Default Title</gem-title></header>
      <nav>
        <gem-link path="/">Home</gem-link>
        <gem-link path="/a">PageA</gem-link>
        <gem-link path="/b">PageB</gem-link>
        <gem-link path="/c/e" pattern="/c/*">PageC</gem-link>
      </nav>
      <main>
        <gem-route .routes=${b}></gem-route>
      </main>
    `}}const _=document.createElement("style");_.innerHTML=i.e`
  body {
    font-size: xx-large;
  }
`,document.head.append(_),customElements.define("app-root",y),document.body.append(new y)}]);
//# sourceMappingURL=bundle.bb71942b38767a37e74c.js.map