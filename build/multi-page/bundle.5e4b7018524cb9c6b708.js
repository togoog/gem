!function(t){function e(e){for(var n,i,r=e[0],o=e[1],a=0,l=[];a<r.length;a++)i=r[a],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&l.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);for(c&&c(e);l.length;)l.shift()()}var n={},s={0:0};function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(t){return i.p+""+t+".bundle."+{1:"24304e0f42c796cc9311",2:"b87b82b4e9c35dbfa95b"}[t]+".js"}(t);var c=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,n[1](c)}s[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/gem/build/",i.oe=function(t){throw console.error(t),t};var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var c=o;i(i.s=2)}([function(t,e,n){"use strict";var s,i;const r=new Set;function o(t){r.size||window.queueMicrotask(()=>{r.forEach(t=>t()),r.clear()}),r.delete(t),r.add(t)}class a extends Image{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,a.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var c;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(c||(c={}));class l{constructor(){this[s]={},this[i]={}}}s=c.LOCALSTORAGE,i=c.SESSIONSTORAGE;class h{constructor(){this.cache=new l}get(t,e){if(t in this.cache[e])return this.cache[e][t];const n=window[e].getItem(t);if(n)try{const s=JSON.parse(n);return this.cache[e][t]=s,s}catch(n){window[e].removeItem(t)}}getLocal(t){return this.get(t,c.LOCALSTORAGE)}getSession(t){return this.get(t,c.SESSIONSTORAGE)}set(t,e,n){return this.cache[n][t]=e,window[n].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,c.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,c.SESSIONSTORAGE)}}class u extends URLSearchParams{constructor(t){if(t instanceof u)return t;super(t),Object.setPrototypeOf(this,u.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}function d(t,...e){return t.reduce((t,n,s)=>t+(e[s-1]||"")+n)}function p(t,...e){return d(t,...e)}new WeakMap;function m(){}const f="gem@storeHandlesKey";function g(t){const e=t;return Object.defineProperty(e,f,{enumerable:!1,value:new Set,writable:!0}),e}function v(t){return Object.keys(t).forEach(e=>{g(t[e])}),t}function _(t,e){Object.assign(t,e),t[f].forEach(t=>{o(t)})}const w=g({list:[{}],currentIndex:0}),y=new WeakMap,b=new WeakMap,x=new WeakMap;function E(t,e,n,s){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!n,$shouldClose:!!s});return y.set(i,e),b.set(i,n),x.set(i,s),i}let S="",N={historyState:w,get basePath(){return S},set basePath(t){const{list:e,currentIndex:n}=w;e[n].path=window.location.pathname.replace(new RegExp(`^${t}`),""),_(w,{}),S=t},get location(){const{list:t,currentIndex:e}=w,n=t[e];return{get query(){return new u(n.query)},hash:n.hash,path:n.path,state:n.state,title:n.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e="",open:n,close:s,shouldClose:i}=t,r=t.query||"",o=t.hash||"",a=t.title||"",c=E(t.data||{},n,s,i);window.history.pushState(c,a,N.basePath+e+new u(r)+o);const{list:l,currentIndex:h}=w;o!==l[h].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const d=l.slice(0,h+1).concat({state:c,title:a,path:e,query:r,hash:o});_(w,{list:d,currentIndex:d.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:n}=w,{state:s}=e[n];if(s.$close){const e=b.get(s);e&&e(),N.replace(t)}else N.push(t)},pushState(t){const{list:e,currentIndex:n}=w,{path:s,query:i,hash:r}=e[n];N.push(Object.assign({path:s,query:i,hash:r},t))},replace(t){const{path:e="",open:n,close:s,shouldClose:i}=t,r=t.query||"",o=t.hash||"",a=t.data||{},c=t.title||"",l=E(a,n,s,i);window.history.replaceState(l,c,N.basePath+e+new u(r)+o);const{list:h,currentIndex:d}=w;o!==h[d].hash&&window.dispatchEvent(new CustomEvent("hashchange")),h.splice(d,1,{state:l,title:c,path:e,query:r,hash:o}),_(w,{list:h})},replaceState(t){const{list:e,currentIndex:n}=w,{path:s,query:i,hash:r}=e[n];N.replace(Object.assign({path:s,query:i,hash:r},t))}};if(!!window.__gemHistory){N=window.__gemHistory;const t=N.basePath;Object.defineProperty(N,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=N,window.history.state)window.history.state.$close&&N.back();else{const{pathname:t,search:e,hash:n}=window.location;N.replace({path:t,query:e,hash:n})}const t=new h,e="gem@historyStateList";_(w,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,w)});let n=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(n)return void(n=!1);const{list:e,currentIndex:s}=w,{state:i}=e[s],r=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===r)return;const{state:o}=e[r];if(r>s&&o.$open){const t=y.get(o);t&&t()}else if(i.$close){const t=b.get(i),e=x.get(i);if(e&&!e())return n=!0,void N.forward();t?t():(n=!0,N.back())}_(w,{currentIndex:r})})}
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
 */const O=new WeakMap,k=t=>(...e)=>{const n=t(...e);return O.set(n,!0),n},A=t=>"function"==typeof t&&O.has(t),P=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,C=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},T=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},j={},V={},$=`{{lit-${String(Math.random()).slice(2)}}}`,M=`\x3c!--${$}--\x3e`,R=new RegExp(`${$}|${M}`),I="$lit$";class L{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],i=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:c,values:{length:l}}=t;for(;a<l;){const t=i.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)H(e[t].name,I)&&s++;for(;s-- >0;){const e=c[a],n=B.exec(e)[2],s=n.toLowerCase()+I,i=t.getAttribute(s);t.removeAttribute(s);const r=i.split(R);this.parts.push({type:"attribute",index:o,name:n,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf($)>=0){const s=t.parentNode,i=e.split(R),r=i.length-1;for(let e=0;e<r;e++){let n,r=i[e];if(""===r)n=W();else{const t=B.exec(r);null!==t&&H(t[2],I)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-I.length)+t[3]),n=document.createTextNode(r)}s.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===i[r]?(s.insertBefore(W(),t),n.push(t)):t.data=i[r],a+=r}}else if(8===t.nodeType)if(t.data===$){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(W(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf($,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const H=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},q=t=>-1!==t.index,W=()=>document.createComment(""),B=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class U{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,r=0,o=0,a=s.nextNode();for(;r<n.length;)if(i=n[r],q(i)){for(;o<i.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return P&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const G=` ${$} `;class F{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const r=B.exec(t);e+=null===r?t+(n?G:M):t.substr(0,r.index)+r[1]+r[2]+I+r[3]+$}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class D extends F{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),C(e,n.firstChild),t}}
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
 */const z=t=>null===t||!("object"==typeof t||"function"==typeof t),J=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class K{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Q(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(z(t)||!J(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Q{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===j||z(t)&&t===this.value||(this.value=t,A(t)||(this.committer.dirty=!0))}commit(){for(;A(this.value);){const t=this.value;this.value=j,t(this)}this.value!==j&&this.committer.commit()}}class X{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(W()),this.endNode=t.appendChild(W())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=W()),t.__insert(this.endNode=W())}insertAfterPart(t){t.__insert(this.startNode=W()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=j,t(this)}const t=this.__pendingValue;t!==j&&(z(t)?t!==this.value&&this.__commitText(t):t instanceof F?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):J(t)?this.__commitIterable(t):t===V?(this.value=V,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof U&&this.value.template===e)this.value.update(t.values);else{const n=new U(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new X(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){T(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Y{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=j,t(this)}if(this.__pendingValue===j)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=j}}class Z extends K{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new tt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class tt extends Q{}let et=!1;try{const t={get capture(){return et=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class nt{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=j,t(this)}if(this.__pendingValue===j)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=st(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=j}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const st=t=>t&&(et?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const it=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new Z(t,e.slice(1),n).parts}return"@"===i?[new nt(t,e.slice(1),s.eventContext)]:"?"===i?[new Y(t,e.slice(1),n)]:new K(t,e,n).parts}handleTextExpression(t){return new X(t)}};
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
 */function rt(t){let e=ot.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ot.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join($);return n=e.keyString.get(s),void 0===n&&(n=new L(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const ot=new Map,at=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ct=(t,e)=>{const n=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,i=n.insertBefore(W(),s);n.insertBefore(W(),s);const r=new X(t.options);return r.insertAfterNode(i),r},lt=(t,e)=>(t.setValue(e),t.commit(),t),ht=(t,e,n)=>{const s=t.startNode.parentNode,i=n?n.startNode:t.endNode,r=e.endNode.nextSibling;r!==i&&C(s,e.startNode,r,i)},ut=t=>{T(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},dt=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},pt=new WeakMap,mt=new WeakMap,ft=k((t,e,n)=>{let s;return void 0===n?n=e:void 0!==e&&(s=e),e=>{if(!(e instanceof X))throw new Error("repeat can only be used in text bindings");const i=pt.get(e)||[],r=mt.get(e)||[],o=[],a=[],c=[];let l,h,u=0;for(const e of t)c[u]=s?s(e,u):u,a[u]=n(e,u),u++;let d=0,p=i.length-1,m=0,f=a.length-1;for(;d<=p&&m<=f;)if(null===i[d])d++;else if(null===i[p])p--;else if(r[d]===c[m])o[m]=lt(i[d],a[m]),d++,m++;else if(r[p]===c[f])o[f]=lt(i[p],a[f]),p--,f--;else if(r[d]===c[f])o[f]=lt(i[d],a[f]),ht(e,i[d],o[f+1]),d++,f--;else if(r[p]===c[m])o[m]=lt(i[p],a[m]),ht(e,i[p],i[d]),p--,m++;else if(void 0===l&&(l=dt(c,m,f),h=dt(r,d,p)),l.has(r[d]))if(l.has(r[p])){const t=h.get(c[m]),n=void 0!==t?i[t]:null;if(null===n){const t=ct(e,i[d]);lt(t,a[m]),o[m]=t}else o[m]=lt(n,a[m]),ht(e,n,i[d]),i[t]=null;m++}else ut(i[p]),p--;else ut(i[d]),d++;for(;m<=f;){const t=ct(e,o[f+1]);lt(t,a[m]),o[m++]=t}for(;d<=p;){const t=i[d++];null!==t&&ut(t)}pt.set(e,o),mt.set(e,c)}}),gt=new WeakMap,vt=k((t,e)=>n=>{const s=gt.get(n);if(Array.isArray(t)){if(Array.isArray(s)&&s.length===t.length&&t.every((t,e)=>t===s[e]))return}else if(s===t&&(void 0!==t||gt.has(n)))return;n.setValue(e()),gt.set(n,Array.isArray(t)?Array.from(t):t)}),_t=k(t=>e=>{if(void 0===t&&e instanceof Q){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let wt={html:(t,...e)=>new F(t,e,"html",it),svg:(t,...e)=>new D(t,e,"svg",it),render:(t,e,n)=>{let s=at.get(e);void 0===s&&(T(e,e.firstChild),at.set(e,s=new X(Object.assign({templateFactory:rt},n))),s.appendInto(e)),s.setValue(t),s.commit()},directive:k,repeat:ft,guard:vt,ifDefined:_t};window.__litHtml?wt=window.__litHtml:window.__litHtml=wt;const{html:yt,svg:bt,render:xt,directive:Et,repeat:St,guard:Nt,ifDefined:Ot}=wt;class kt extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:r}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),n&&n.forEach(t=>{this.__connectProperty(t,!1)}),s&&s.forEach(t=>{this.__connectProperty(t,!0),this[t]=m}),i&&i.forEach(t=>{if(!t[f])throw new Error("`observedStores` only support store module");!function(t,e){t[f].add(e)}(t,this.__update)}),r&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=r:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(r))}__connectProperty(t,e=!1){if(t in this)return;let n=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>n,set(s){if(s!==n){if(e){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=e=>{const n=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(t,n,s),o(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),o(this.__update)}willMount(){}render(){return yt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(xt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,n){}attributeChanged(t,e,n){}unmounted(){}attributeChangedCallback(t,e,n){this.__isMounted&&(this.attributeChanged(t,e,n),o(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{!function(t,e){t[f].delete(e)}(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class At extends kt{connectedCallback(){this.willMount(),xt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const Pt=new a;let Ct=!1;const Tt=()=>{window.requestAnimationFrame((function t(e){const n=Pt.get();n&&(n(),performance.now()-e<16)?t(e):Ct&&Tt()}))};Pt.addEventListener("start",()=>{Ct=!0,Tt()}),Pt.addEventListener("end",()=>Ct=!1);const jt=customElements.define.bind(customElements);customElements.define=function(t,e,n){customElements.get(t)||jt(t,e,n)},n.d(e,"b",(function(){return v})),n.d(e,"f",(function(){return _})),n.d(e,"d",(function(){return N})),n.d(e,"e",(function(){return yt})),n.d(e,"a",(function(){return At})),n.d(e,"c",(function(){return p}))},function(t,e,n){"use strict";var s=n(0);e.a=Object(s.b)({pageA:{text:"this is page A"},pageB:{text:"this is page B"}})},function(t,e,n){"use strict";n.r(e);var s=n(0);class i extends RegExp{constructor(t){const e={};let n=0;super(`^${t.replace(/:([^/$]+)/g,(t,s)=>(e[s]=n++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function r(t){return new i(t)}function o(t,e){return!!e.match(r(t))}function a(t,e){let n=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{n=n.replace(new RegExp(`:${t}`,"g"),e.params[t])}),n}class c extends s.a{constructor(){super();const{path:t,query:e}=s.d.location,n=t+e;this.href=n}static getParams(){if(c.currentRoute)return function(t,e){const n=r(t),s=e.match(n);if(s){const t={};return Object.keys(n.namePosition).forEach(e=>{t[e]=s[n.namePosition[e]+1]}),t}}(c.currentRoute.pattern,s.d.location.path)}initPage(){const{list:t,currentIndex:e}=s.d.historyState;c.currentRoute&&c.currentRoute.title&&c.currentRoute.title!==t[e].title&&(t.splice(e,1,Object.assign(Object.assign({},t[e]),{title:c.currentRoute.title})),Object(s.f)(s.d.historyState,{list:t}))}shouldUpdate(){const{path:t,query:e}=s.d.location,n=t+e;return t+e!==this.href&&(this.href=n,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();c.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const n of t){const{pattern:t}=n;if("*"===t)e=n;else if(o(t,s.d.location.path)){c.currentRoute=n;break}}return c.currentRoute||(c.currentRoute=e),c.currentRoute?c.currentRoute.redirect?(s.d.replace({path:c.currentRoute.redirect}),this.callback()):s.e`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${c.currentRoute.content}
    `:this.callback()}callback(){return c.currentRoute=null,s.e``}}c.observedPropertys=["routes"],c.observedStores=[s.d.historyState],customElements.define("gem-route",c);class l extends s.a{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:n,query:i,hash:r}=s.d.location;n+i+r!==e&&(t.stopPropagation(),this.route?s.d.pushWithoutCloseHandle(function(t,e){const n=a(t,e);return Object.assign({path:n},e)}(this.route,this.options)):s.d.pushWithoutCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options?this.options.query:"",e=this.options?this.options.hash:"";return a(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(){const{path:t,query:e,hash:n}=s.d.location;return this.pattern&&o(this.pattern,t)||t+e+n===this.getHref()?this.setAttribute("active",""):this.removeAttribute("active"),s.e`
      <slot></slot>
    `}}l.observedAttributes=["href","path","query","hash","pattern"],l.observedStores=[s.d.historyState],l.observedPropertys=["route","options"],customElements.define("gem-link",l);class h extends s.a{constructor(t){super();const{title:e}=s.d.location;this.documentTitle=e,this.hidden=t}static setTitle(t){const{list:e,currentIndex:n}=s.d.historyState;e.splice(n,1,Object.assign(Object.assign({},e[n]),{title:t})),Object(s.f)(s.d.historyState,{list:e})}shouldUpdate(){const{title:t}=s.d.location;return t!==this.documentTitle&&(this.documentTitle=t,!0)}render(){const{list:t,currentIndex:e}=s.d.historyState,{title:n}=t[e];return document.title=n,this.hidden?s.e``:n?s.e`
      ${n}
    `:s.e`
        <slot></slot>
      `}}h.observedStores=[s.d.historyState],customElements.define("gem-title",h),document.head.querySelector("gem-title")||document.head.append(new h(!0));var u,d=n(1);customElements.define("app-page-b",((u=class extends s.a{render(){return s.e`
        <slot></slot> ${d.a.pageB.text}
      `}}).observedStores=[d.a.pageB],u)),setTimeout(()=>n.e(1).then(n.bind(null,3)));const p=[{title:"ccccccd",pattern:"/c/d",content:s.e`
      <div>C/D</div>
    `},{pattern:"/c/e",content:s.e`
      <div>C/E</div>
    `},{pattern:"/c/*",content:s.e`
      <div>C/E</div>
    `}];customElements.define("app-page-c",class extends s.a{render(){return s.e`
        <gem-link path="/c/d">Page c/d</gem-link>
        <gem-link path="/c/e">Page c/e</gem-link>
        <gem-route .routes=${p}></gem-route>
      `}});const m=[{pattern:"/",redirect:"/c/e"},{title:"Page A Title",pattern:"/a",get content(){return n.e(2).then(n.bind(null,4)),s.e`
        <app-page-a>A: </app-page-a>
      `}},{title:"Page B Title",pattern:"/b",content:s.e`
      <app-page-b>B: </app-page-b>
    `},{title:"Page C Title",pattern:"/c/*",content:s.e`
      <app-page-c>C: </app-page-c>
    `},{pattern:"/",content:s.e`
      <div>hello</div>
    `}];class f extends s.a{render(){return s.e`
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
        <gem-route .routes=${m}></gem-route>
      </main>
    `}}const g=document.createElement("style");g.innerHTML=s.c`
  body {
    font-size: xx-large;
  }
`,document.head.append(g),customElements.define("app-root",f),document.body.append(new f)}]);
//# sourceMappingURL=bundle.5e4b7018524cb9c6b708.js.map