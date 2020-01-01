!function(t){function e(e){for(var n,i,o=e[0],r=e[1],a=0,l=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&l.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);for(c&&c(e);l.length;)l.shift()()}var n={},s={0:0};function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(t){return i.p+""+t+".bundle."+{1:"8540675100fb915098a5",2:"f1aaf71668eda2479725"}[t]+".js"}(t);var c=new Error;r=function(e){a.onerror=a.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,n[1](c)}s[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/gem/build/",i.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var a=0;a<o.length;a++)e(o[a]);var c=r;i(i.s=2)}([function(t,e,n){"use strict";var s,i;const o=new Set;function r(t){o.size||window.queueMicrotask(()=>{o.forEach(t=>t()),o.clear()}),o.delete(t),o.add(t)}class a extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,a.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var c;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(c||(c={}));class l{constructor(){this[s]={},this[i]={}}}s=c.LOCALSTORAGE,i=c.SESSIONSTORAGE;class h{constructor(){this.cache=new l}get(t,e){if(t in this.cache[e])return this.cache[e][t];const n=window[e].getItem(t);if(n)try{const s=JSON.parse(n);return this.cache[e][t]=s,s}catch(n){window[e].removeItem(t)}}getLocal(t){return this.get(t,c.LOCALSTORAGE)}getSession(t){return this.get(t,c.SESSIONSTORAGE)}set(t,e,n){return this.cache[n][t]=e,window[n].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,c.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,c.SESSIONSTORAGE)}}class u extends URLSearchParams{constructor(t){if(t instanceof u)return t;super(t),Object.setPrototypeOf(this,u.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}function d(t,...e){return t.reduce((t,n,s)=>t+(e[s-1]||"")+n)}function p(t,...e){return d(t,...e)}new WeakMap;function f(){}const g="gem@storeHandlesKey";function m(t){const e=t;return Object.defineProperty(e,g,{enumerable:!1,value:new Set,writable:!0}),e}function v(t){return Object.keys(t).forEach(e=>{m(t[e])}),t}function b(t,e){Object.assign(t,e),t[g].forEach(t=>{r(t)})}const _=m({list:[{}],currentIndex:0}),y=new WeakMap,w=new WeakMap,x=new WeakMap;function E(t,e,n,s){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!n,$shouldClose:!!s});return y.set(i,e),w.set(i,n),x.set(i,s),i}let S="",N={historyState:_,get basePath(){return S},set basePath(t){const{list:e,currentIndex:n}=_;e[n].path=window.location.pathname.replace(new RegExp(`^${t}`),""),b(_,{}),S=t},get location(){const{list:t,currentIndex:e}=_,n=t[e];return{get query(){return new u(n.query)},hash:n.hash,path:n.path,state:n.state,title:n.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e="",open:n,close:s,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",c=E(t.data||{},n,s,i);window.history.pushState(c,a,N.basePath+e+new u(o)+r);const{list:l,currentIndex:h}=_;r!==l[h].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const d=l.slice(0,h+1).concat({state:c,title:a,path:e,query:o,hash:r});b(_,{list:d,currentIndex:d.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:n}=_,{state:s}=e[n];if(s.$close){const e=w.get(s);e&&e(),N.replace(t)}else N.push(t)},pushState(t){const{list:e,currentIndex:n}=_,{path:s,query:i,hash:o}=e[n];N.push(Object.assign({path:s,query:i,hash:o},t))},replace(t){const{path:e="",open:n,close:s,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},c=t.title||"",l=E(a,n,s,i);window.history.replaceState(l,c,N.basePath+e+new u(o)+r);const{list:h,currentIndex:d}=_;r!==h[d].hash&&window.dispatchEvent(new CustomEvent("hashchange")),h.splice(d,1,{state:l,title:c,path:e,query:o,hash:r}),b(_,{list:h})},replaceState(t){const{list:e,currentIndex:n}=_,{path:s,query:i,hash:o}=e[n];N.replace(Object.assign({path:s,query:i,hash:o},t))}};if(!!window.__gemHistory){N=window.__gemHistory;const t=N.basePath;Object.defineProperty(N,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=N,window.history.state)window.history.state.$close&&N.back();else{const{pathname:t,search:e,hash:n}=window.location;N.replace({path:t,query:e,hash:n})}const t=new h,e="gem@historyStateList";b(_,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,_)});let n=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(n)return void(n=!1);const{list:e,currentIndex:s}=_,{state:i}=e[s],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>s&&r.$open){const t=y.get(r);t&&t()}else if(i.$close){const t=w.get(i),e=x.get(i);if(e&&!e())return n=!0,void N.forward();t?t():(n=!0,N.back())}b(_,{currentIndex:o})})}
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
 */const O=new WeakMap,k=t=>(...e)=>{const n=t(...e);return O.set(n,!0),n},A=t=>"function"==typeof t&&O.has(t),C=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,P=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},T=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},j={},$={},R=`{{lit-${String(Math.random()).slice(2)}}}`,V=`\x3c!--${R}--\x3e`,M=new RegExp(`${R}|${V}`),L="$lit$";class I{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:c,values:{length:l}}=t;for(;a<l;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)H(e[t].name,L)&&s++;for(;s-- >0;){const e=c[a],n=B.exec(e)[2],s=n.toLowerCase()+L,i=t.getAttribute(s);t.removeAttribute(s);const o=i.split(M);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(R)>=0){const s=t.parentNode,i=e.split(M),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=W();else{const t=B.exec(o);null!==t&&H(t[2],L)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-L.length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(W(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===R){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(W(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(R,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const H=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},q=t=>-1!==t.index,W=()=>document.createComment(""),B=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class D{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=C?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],q(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return C&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const U=` ${R} `;class G{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=B.exec(t);e+=null===o?t+(n?U:V):t.substr(0,o.index)+o[1]+o[2]+L+o[3]+R}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class F extends G{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),P(e,n.firstChild),t}}
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
 */const z=t=>null===t||!("object"==typeof t||"function"==typeof t),J=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class K{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Z(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(z(t)||!J(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===j||z(t)&&t===this.value||(this.value=t,A(t)||(this.committer.dirty=!0))}commit(){for(;A(this.value);){const t=this.value;this.value=j,t(this)}this.value!==j&&this.committer.commit()}}class Q{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(W()),this.endNode=t.appendChild(W())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=W()),t.__insert(this.endNode=W())}insertAfterPart(t){t.__insert(this.startNode=W()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=j,t(this)}const t=this.__pendingValue;t!==j&&(z(t)?t!==this.value&&this.__commitText(t):t instanceof G?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):J(t)?this.__commitIterable(t):t===$?(this.value=$,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof D&&this.value.template===e)this.value.update(t.values);else{const n=new D(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new Q(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){T(this.startNode.parentNode,t.nextSibling,this.endNode)}}class X{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=j,t(this)}if(this.__pendingValue===j)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=j}}class Y extends K{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new tt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class tt extends Z{}let et=!1;try{const t={get capture(){return et=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class nt{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=j,t(this)}if(this.__pendingValue===j)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=st(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=j}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const st=t=>t&&(et?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const it=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new Y(t,e.slice(1),n).parts}return"@"===i?[new nt(t,e.slice(1),s.eventContext)]:"?"===i?[new X(t,e.slice(1),n)]:new K(t,e,n).parts}handleTextExpression(t){return new Q(t)}};
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
 */function ot(t){let e=rt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},rt.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(R);return n=e.keyString.get(s),void 0===n&&(n=new I(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const rt=new Map,at=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ct=(t,e)=>{const n=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,i=n.insertBefore(W(),s);n.insertBefore(W(),s);const o=new Q(t.options);return o.insertAfterNode(i),o},lt=(t,e)=>(t.setValue(e),t.commit(),t),ht=(t,e,n)=>{const s=t.startNode.parentNode,i=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&P(s,e.startNode,o,i)},ut=t=>{T(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},dt=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},pt=new WeakMap,ft=new WeakMap,gt=k((t,e,n)=>{let s;return void 0===n?n=e:void 0!==e&&(s=e),e=>{if(!(e instanceof Q))throw new Error("repeat can only be used in text bindings");const i=pt.get(e)||[],o=ft.get(e)||[],r=[],a=[],c=[];let l,h,u=0;for(const e of t)c[u]=s?s(e,u):u,a[u]=n(e,u),u++;let d=0,p=i.length-1,f=0,g=a.length-1;for(;d<=p&&f<=g;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===c[f])r[f]=lt(i[d],a[f]),d++,f++;else if(o[p]===c[g])r[g]=lt(i[p],a[g]),p--,g--;else if(o[d]===c[g])r[g]=lt(i[d],a[g]),ht(e,i[d],r[g+1]),d++,g--;else if(o[p]===c[f])r[f]=lt(i[p],a[f]),ht(e,i[p],i[d]),p--,f++;else if(void 0===l&&(l=dt(c,f,g),h=dt(o,d,p)),l.has(o[d]))if(l.has(o[p])){const t=h.get(c[f]),n=void 0!==t?i[t]:null;if(null===n){const t=ct(e,i[d]);lt(t,a[f]),r[f]=t}else r[f]=lt(n,a[f]),ht(e,n,i[d]),i[t]=null;f++}else ut(i[p]),p--;else ut(i[d]),d++;for(;f<=g;){const t=ct(e,r[g+1]);lt(t,a[f]),r[f++]=t}for(;d<=p;){const t=i[d++];null!==t&&ut(t)}pt.set(e,r),ft.set(e,c)}}),mt=new WeakMap,vt=k((t,e)=>n=>{const s=mt.get(n);if(Array.isArray(t)){if(Array.isArray(s)&&s.length===t.length&&t.every((t,e)=>t===s[e]))return}else if(s===t&&(void 0!==t||mt.has(n)))return;n.setValue(e()),mt.set(n,Array.isArray(t)?Array.from(t):t)}),bt=k(t=>e=>{if(void 0===t&&e instanceof Z){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let _t={html:(t,...e)=>new G(t,e,"html",it),svg:(t,...e)=>new F(t,e,"svg",it),render:(t,e,n)=>{let s=at.get(e);void 0===s&&(T(e,e.firstChild),at.set(e,s=new Q(Object.assign({templateFactory:ot},n))),s.appendInto(e)),s.setValue(t),s.commit()},directive:k,repeat:gt,guard:vt,ifDefined:bt};window.__litHtml?_t=window.__litHtml:window.__litHtml=_t;const{html:yt,svg:wt,render:xt,directive:Et,repeat:St,guard:Nt,ifDefined:Ot}=_t;class kt extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),n&&n.forEach(t=>{this.__connectProperty(t,!1)}),s&&s.forEach(t=>{this.__connectProperty(t,!0),this[t]=f}),i&&i.forEach(t=>{if(!t[g])throw new Error("`observedStores` only support store module");!function(t,e){t[g].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(t,e=!1){if(t in this)return;let n=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>n,set(s){if(s!==n){if(e){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=e=>{const n=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(t,n,s),r(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),r(this.__update)}willMount(){}render(){return yt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(xt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,n){}attributeChanged(t,e,n){}unmounted(){}attributeChangedCallback(t,e,n){this.__isMounted&&(this.attributeChanged(t,e,n),r(this.__update))}__connectedCallback(){xt(this.render(),this.__renderRoot);const t=this.mounted();t&&(this.__unmountCallback=t),this.__isMounted=!0}disconnectedCallback(){var t;const e=this.constructor;e.observedStores&&e.observedStores.forEach(t=>{!function(t,e){t[g].delete(e)}(t,this.__update)}),null===(t=this.__unmountCallback)||void 0===t||t.call(this),this.unmounted(),this.__isMounted=!1}}class At extends kt{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ct=new a;let Pt=!1;const Tt=()=>{window.requestAnimationFrame((function t(e){const n=Ct.get();n&&(n(),performance.now()-e<16)?t(e):Pt&&Tt()}))};Ct.addEventListener("start",()=>{Pt=!0,Tt()}),Ct.addEventListener("end",()=>Pt=!1);const jt=customElements.define.bind(customElements);function $t(t,e){const n=t.constructor;n.observedAttributes||(n.observedAttributes=[]),n.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function Rt(t,e){const n=t.constructor;n.observedPropertys||(n.observedPropertys=[]),n.observedPropertys.push(e)}function Vt(t){return function(e){const n=e;n.observedStores||(n.observedStores=[]),n.observedStores.push(t)}}function Mt(t){return function(e){customElements.define(t,e)}}customElements.define=function(t,e,n){customElements.get(t)||jt(t,e,n)},n.d(e,"d",(function(){return v})),n.d(e,"j",(function(){return b})),n.d(e,"g",(function(){return N})),n.d(e,"h",(function(){return yt})),n.d(e,"a",(function(){return At})),n.d(e,"b",(function(){return $t})),n.d(e,"i",(function(){return Rt})),n.d(e,"c",(function(){return Vt})),n.d(e,"f",(function(){return Mt})),n.d(e,"e",(function(){return p}))},function(t,e,n){"use strict";var s=n(0);e.a=Object(s.d)({pageA:{text:"this is page A"},pageB:{text:"this is page B"}})},function(t,e,n){"use strict";n.r(e);var s=n(0);class i extends RegExp{constructor(t){const e={};let n=0;super(`^${t.replace(/:([^/$]+)/g,(t,s)=>(e[s]=n++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function o(t){return new i(t)}function r(t,e){return!!e.match(o(t))}function a(t,e){let n=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{n=n.replace(new RegExp(`:${t}`,"g"),e.params[t])}),n}class c extends s.a{constructor(){super();const{path:t,query:e}=s.g.location,n=t+e;this.href=n}static getParams(){if(c.currentRoute)return function(t,e){const n=o(t),s=e.match(n);if(s){const t={};return Object.keys(n.namePosition).forEach(e=>{t[e]=s[n.namePosition[e]+1]}),t}}(c.currentRoute.pattern,s.g.location.path)}initPage(){const{list:t,currentIndex:e}=s.g.historyState;c.currentRoute&&c.currentRoute.title&&c.currentRoute.title!==t[e].title&&(t.splice(e,1,Object.assign(Object.assign({},t[e]),{title:c.currentRoute.title})),Object(s.j)(s.g.historyState,{list:t}))}shouldUpdate(){const{path:t,query:e}=s.g.location,n=t+e;return t+e!==this.href&&(this.href=n,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();c.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const n of t){const{pattern:t}=n;if("*"===t)e=n;else if(r(t,s.g.location.path)){c.currentRoute=n;break}}return c.currentRoute||(c.currentRoute=e),c.currentRoute?c.currentRoute.redirect?(s.g.replace({path:c.currentRoute.redirect}),this.callback()):s.h`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${c.currentRoute.content}
    `:this.callback()}callback(){return c.currentRoute=null,s.h``}}c.observedPropertys=["routes"],c.observedStores=[s.g.historyState],customElements.define("gem-route",c);var l=function(t,e,n,s){var i,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let h=class extends s.a{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:n,query:i,hash:o}=s.g.location;n+i+o!==e&&(t.stopPropagation(),this.route?s.g.pushWithoutCloseHandle(function(t,e){const n=a(t,e);return Object.assign({path:n},e)}(this.route,this.options)):s.g.pushWithoutCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.preventDefault=t=>{t.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options&&this.options.query||"",e=this.options&&this.options.hash||"";return a(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(){const{path:t,query:e,hash:n}=s.g.location,i=this.pattern&&r(this.pattern,t),o=this.getHref();return i||t+e+n===o?this.setAttribute("active",""):this.removeAttribute("active"),s.h`
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
      <a @click=${this.preventDefault} href=${new URL(o,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};l([s.b],h.prototype,"href",void 0),l([s.b],h.prototype,"path",void 0),l([s.b],h.prototype,"query",void 0),l([s.b],h.prototype,"hash",void 0),l([s.b],h.prototype,"pattern",void 0),l([s.i],h.prototype,"route",void 0),l([s.i],h.prototype,"options",void 0),h=l([Object(s.f)("gem-link"),Object(s.c)(s.g.historyState)],h);class u extends s.a{constructor(t){super();const{title:e}=s.g.location;this.documentTitle=e,this.hidden=t}static setTitle(t){const{list:e,currentIndex:n}=s.g.historyState;e.splice(n,1,Object.assign(Object.assign({},e[n]),{title:t})),Object(s.j)(s.g.historyState,{list:e})}shouldUpdate(){const{title:t}=s.g.location;return t!==this.documentTitle&&(this.documentTitle=t,!0)}render(){const{list:t,currentIndex:e}=s.g.historyState,{title:n}=t[e];return document.title=n,this.hidden?s.h``:n?s.h`
      ${n}
    `:s.h`
        <slot></slot>
      `}}u.observedStores=[s.g.historyState],customElements.define("gem-title",u),document.head.querySelector("gem-title")||document.head.append(new u(!0));var d,p=n(1);customElements.define("app-page-b",((d=class extends s.a{render(){return s.h`
        <slot></slot> ${p.a.pageB.text}
      `}}).observedStores=[p.a.pageB],d)),setTimeout(()=>n.e(1).then(n.bind(null,3)));const f=[{title:"ccccccd",pattern:"/c/d",content:s.h`
      <div>C/D</div>
    `},{pattern:"/c/e",content:s.h`
      <div>C/E</div>
    `},{pattern:"/c/*",content:s.h`
      <div>C/E</div>
    `}];customElements.define("app-page-c",class extends s.a{render(){return s.h`
        <gem-link path="/c/d">Page c/d</gem-link>
        <gem-link path="/c/e">Page c/e</gem-link>
        <gem-route .routes=${f}></gem-route>
      `}});const g=[{pattern:"/",redirect:"/c/e"},{title:"Page A Title",pattern:"/a",get content(){return n.e(2).then(n.bind(null,4)),s.h`
        <app-page-a>A: </app-page-a>
      `}},{title:"Page B Title",pattern:"/b",content:s.h`
      <app-page-b>B: </app-page-b>
    `},{title:"Page C Title",pattern:"/c/*",content:s.h`
      <app-page-c>C: </app-page-c>
    `},{pattern:"/",content:s.h`
      <div>hello</div>
    `}];class m extends s.a{render(){return s.h`
      <style>
        :host {
          text-align: center;
        }
        gem-link {
          cursor: pointer;
        }
        gem-link:hover {
          text-decoration: underline;
        }
      </style>
      <header><gem-title>Home Page Title</gem-title></header>
      <nav>
        <gem-link path="/">Home</gem-link>
        <gem-link path="/a">PageA</gem-link>
        <gem-link path="/b">PageB</gem-link>
        <gem-link path="/c/e" pattern="/c/*">PageC</gem-link>
      </nav>
      <main>
        <gem-route .routes=${g}></gem-route>
      </main>
    `}}const v=document.createElement("style");v.innerHTML=s.e`
  body {
    font-size: xx-large;
  }
`,document.head.append(v),customElements.define("app-root",m),document.body.append(new m)}]);
//# sourceMappingURL=bundle.70268dfadc3e2d6eecb3.js.map