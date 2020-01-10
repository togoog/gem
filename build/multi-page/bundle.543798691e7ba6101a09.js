!function(e){function t(t){for(var n,i,o=t[0],r=t[1],a=0,c=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&c.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(l&&l(t);c.length;)c.shift()()}var n={},s={0:0};function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=s[e]=[t,i]}));t.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+e+".bundle."+{1:"32521d5779810bad2599",2:"41fcc0e60bd6568574cf"}[e]+".js"}(e);var l=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}s[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gem/build/multi-page",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var l=r;i(i.s=2)}([function(e,t,n){"use strict";const s=new Set;function i(e){s.size||globalThis.queueMicrotask(()=>{s.forEach(e=>e()),s.clear()}),s.delete(e),s.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}function a(e,...t){return e.reduce((e,n,s)=>e+(t[s-1]||"")+n)}function l(e,...t){return a(e,...t)}new WeakMap;function c(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class h extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function u(){}const d="gem@storeHandlesKey";function p(e){const t=e;return Object.defineProperty(t,d,{enumerable:!1,value:new Set,writable:!0}),t}function f(e){return Object.keys(e).forEach(t=>{p(e[t])}),e}function m(e,t){Object.assign(e,t),e[d].forEach(e=>{i(e)})}const g=window.history,v=window.location,b=g.pushState.bind(g),y=g.replaceState.bind(g);let _=0;const w=()=>++_,x=p({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),E=new Map;function k(e){var t,n,s,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new h("`$key` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasCloseHandle)throw new h("`$hasCloseHandle` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasOpenHandle)throw new h("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new h("`$hasShouldCloseHandle` is not allowed")}function P(e){const t=e.title||"",n=e.path||("/"===v.pathname?"":v.pathname.replace(new RegExp(`^${g.basePath}`),"")),s=new r(e.query||(e.path?"":v.search)),i=e.path||e.query,o=e.hash||(i?"":v.hash);return Object.assign(Object.assign({},e),{title:t,path:n,query:s,hash:o})}function C(e,t){k(t.data);const n=P(t),{title:s,path:i,query:o,hash:a}=n,l=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:w()},n.data||{});E.set(l.$key,n),m(c(x),l);const h=g.basePath+i+new r(o)+a,u=v.hash;("push"===e?b:y)(l,s,h),u!==a&&window.dispatchEvent(new CustomEvent("hashchange"))}function N(e,t,n,s){k(t);const i=Object.assign({$key:w()},t||{}),{pathname:o,search:a,hash:l}=new URL(s,v.origin);v.hash!==l&&window.dispatchEvent(new CustomEvent("hashchange"));const h=P({path:o,query:new r(a),hash:l,title:n,data:t});E.set(i.$key,h),m(c(x),i);const u=g.basePath+s,d=v.hash;("push"===e?b:y)(i,n,u),d!==l&&window.dispatchEvent(new CustomEvent("hashchange"))}const O=p({basePath:""});if(!("basePath"in g)){if(Object.defineProperties(g,{basePath:{get:()=>O.basePath,set(e){if(O.basePath)throw new h("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");Object.assign(E.get(x.$key),{path:window.location.pathname.replace(new RegExp(`^${e}`),"")}),m(O,{basePath:e})}},getParams:{value:function(){return E.get(x.$key)}},updateParams:{value:function(e){Object.assign(E.get(x.$key),e),m(x,{})}},store:{value:x},push:{value:function(e){C("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,n,s;x.$hasCloseHandle?(null===(s=null===(t=E.get(x.$key))||void 0===t?void 0:(n=t).close)||void 0===s||s.call(n),g.replace(e)):g.push(e)}},replace:{value:function(e){C("replace",e)}},pushState:{value:function(e,t,n){N("push",e,t,n)}},replaceState:{value:function(e,t,n){N("replace",e,t,n)}}}),g.state)if(g.state.$close)g.back();else{const e=P({title:document.title});m(x,Object.assign({$key:w()},g.state||{})),E.set(x.$key,e)}else{const{pathname:e,search:t,hash:n}=v;g.replace({path:e,query:t,hash:n})}let e=!1;window.addEventListener("popstate",t=>{var n,s,i,o,a,l;const h=t.state;if(!(null===(n=h)||void 0===n?void 0:n.$key))return;if(e)return void(e=!1);if(!E.has(h.$key)){const{pathname:e,search:t,hash:n}=v;E.set(h.$key,{path:e,query:new r(t),hash:n,title:document.title,data:h})}const u=x;if(h.$key>u.$key&&h.$hasOpenHandle)null===(o=null===(s=E.get(h.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(u.$hasCloseHandle){const t=E.get(u.$key),n=null===(a=t)||void 0===a?void 0:a.close,s=null===(l=t)||void 0===l?void 0:l.shouldClose;if(s&&!s())return e=!0,void g.forward();n?n():(e=!0,g.back())}m(c(x),h)})}
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
 */const S=new WeakMap,$=e=>(...t)=>{const n=e(...t);return S.set(n,!0),n},j=e=>"function"==typeof e&&S.has(e),A=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,H=(e,t,n=null,s=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,s),t=n}},T=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},R={},V={},M=`{{lit-${String(Math.random()).slice(2)}}}`,L=`\x3c!--${M}--\x3e`,q=new RegExp(`${M}|${L}`),I="$lit$";class B{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)D(t[e].name,I)&&s++;for(;s-- >0;){const t=l[a],n=F.exec(t)[2],s=n.toLowerCase()+I,i=e.getAttribute(s);e.removeAttribute(s);const o=i.split(q);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(M)>=0){const s=e.parentNode,i=t.split(q),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=W();else{const e=F.exec(o);null!==e&&D(e[2],I)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-I.length)+e[3]),n=document.createTextNode(o)}s.insertBefore(n,e),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(W(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===M){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(W(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(n.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(M,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const D=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},U=e=>-1!==e.index,W=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class z{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=A?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],U(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return A&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const J=` ${M} `;class K{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=F.exec(e);t+=null===o?e+(n?J:L):e.substr(0,o.index)+o[1]+o[2]+I+o[3]+M}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Z extends K{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),H(t,n.firstChild),e}}
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
 */const G=e=>null===e||!("object"==typeof e||"function"==typeof e),Q=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class X{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Y(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(G(e)||!Q(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Y{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===R||G(e)&&e===this.value||(this.value=e,j(e)||(this.committer.dirty=!0))}commit(){for(;j(this.value);){const e=this.value;this.value=R,e(this)}this.value!==R&&this.committer.commit()}}class ee{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(W()),this.endNode=e.appendChild(W())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=W()),e.__insert(this.endNode=W())}insertAfterPart(e){e.__insert(this.startNode=W()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;j(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=R,e(this)}const e=this.__pendingValue;e!==R&&(G(e)?e!==this.value&&this.__commitText(e):e instanceof K?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Q(e)?this.__commitIterable(e):e===V?(this.value=V,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof z&&this.value.template===t)this.value.update(e.values);else{const n=new z(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)n=t[s],void 0===n&&(n=new ee(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){T(this.startNode.parentNode,e.nextSibling,this.endNode)}}class te{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;j(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=R,e(this)}if(this.__pendingValue===R)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=R}}class ne extends X{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new se(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class se extends Y{}let ie=!1;try{const e={get capture(){return ie=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class oe{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;j(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=R,e(this)}if(this.__pendingValue===R)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=re(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=R}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const re=e=>e&&(ie?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const ae=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new ne(e,t.slice(1),n).parts}return"@"===i?[new oe(e,t.slice(1),s.eventContext)]:"?"===i?[new te(e,t.slice(1),n)]:new X(e,t,n).parts}handleTextExpression(e){return new ee(e)}};
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
 */function le(e){let t=ce.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ce.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(M);return n=t.keyString.get(s),void 0===n&&(n=new B(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const ce=new Map,he=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ue=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(W(),s);n.insertBefore(W(),s);const o=new ee(e.options);return o.insertAfterNode(i),o},de=(e,t)=>(e.setValue(t),e.commit(),e),pe=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&H(s,t.startNode,o,i)},fe=e=>{T(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},me=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},ge=new WeakMap,ve=new WeakMap,be=$((e,t,n)=>{let s;return void 0===n?n=t:void 0!==t&&(s=t),t=>{if(!(t instanceof ee))throw new Error("repeat can only be used in text bindings");const i=ge.get(t)||[],o=ve.get(t)||[],r=[],a=[],l=[];let c,h,u=0;for(const t of e)l[u]=s?s(t,u):u,a[u]=n(t,u),u++;let d=0,p=i.length-1,f=0,m=a.length-1;for(;d<=p&&f<=m;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===l[f])r[f]=de(i[d],a[f]),d++,f++;else if(o[p]===l[m])r[m]=de(i[p],a[m]),p--,m--;else if(o[d]===l[m])r[m]=de(i[d],a[m]),pe(t,i[d],r[m+1]),d++,m--;else if(o[p]===l[f])r[f]=de(i[p],a[f]),pe(t,i[p],i[d]),p--,f++;else if(void 0===c&&(c=me(l,f,m),h=me(o,d,p)),c.has(o[d]))if(c.has(o[p])){const e=h.get(l[f]),n=void 0!==e?i[e]:null;if(null===n){const e=ue(t,i[d]);de(e,a[f]),r[f]=e}else r[f]=de(n,a[f]),pe(t,n,i[d]),i[e]=null;f++}else fe(i[p]),p--;else fe(i[d]),d++;for(;f<=m;){const e=ue(t,r[m+1]);de(e,a[f]),r[f++]=e}for(;d<=p;){const e=i[d++];null!==e&&fe(e)}ge.set(t,r),ve.set(t,l)}}),ye=new WeakMap,_e=$((e,t)=>n=>{const s=ye.get(n);if(Array.isArray(e)){if(Array.isArray(s)&&s.length===e.length&&e.every((e,t)=>e===s[t]))return}else if(s===e&&(void 0!==e||ye.has(n)))return;n.setValue(t()),ye.set(n,Array.isArray(e)?Array.from(e):e)}),we=$(e=>t=>{if(void 0===e&&t instanceof Y){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let xe={html:(e,...t)=>new K(e,t,"html",ae),svg:(e,...t)=>new Z(e,t,"svg",ae),render:(e,t,n)=>{let s=he.get(t);void 0===s&&(T(t,t.firstChild),he.set(t,s=new ee(Object.assign({templateFactory:le},n))),s.appendInto(t)),s.setValue(e),s.commit()},directive:$,repeat:be,guard:_e,ifDefined:we};window.__litHtml?xe=window.__litHtml:window.__litHtml=xe;const{html:Ee,svg:ke,render:Pe,directive:Ce,repeat:Ne,guard:Oe,ifDefined:Se}=xe;class $e extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),n&&n.forEach(e=>{this.__connectProperty(e,!1)}),s&&s.forEach(e=>{this.__connectProperty(e,!0),this[e]=u}),i&&i.forEach(e=>{if(!e[d])throw new Error("`observedStores` only support store module");!function(e,t){e[d].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let n=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>n,set(s){if(s!==n){if(t){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=t=>{const n=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(e,n,s),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return Ee`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Pe(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,n){}attributeChanged(e,t,n){}unmounted(){}attributeChangedCallback(e,t,n){this.__isMounted&&(this.attributeChanged(e,t,n),i(this.__update))}__connectedCallback(){Pe(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[d].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class je extends $e{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ae=new o;let He=!1;const Te=()=>{window.requestAnimationFrame((function e(t){const n=Ae.get();n&&(n(),performance.now()-t<16)?e(t):He&&Te()}))};Ae.addEventListener("start",()=>{He=!0,Te()}),Ae.addEventListener("end",()=>He=!1);const Re=customElements.define.bind(customElements);function Ve(e,t){const n=e.constructor;n.observedAttributes||(n.observedAttributes=[]),n.observedAttributes.push(t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()))}function Me(e,t){const n=e.constructor;n.observedPropertys||(n.observedPropertys=[]),n.observedPropertys.push(t)}function Le(e){return function(t){const n=t;n.observedStores||(n.observedStores=[]),n.observedStores.push(e)}}function qe(e){return function(t){customElements.define(e,t)}}customElements.define=function(e,t,n){customElements.get(e)||Re(e,t,n)},n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"i",(function(){return Ee})),n.d(t,"a",(function(){return je})),n.d(t,"b",(function(){return Ve})),n.d(t,"j",(function(){return Me})),n.d(t,"d",(function(){return Le})),n.d(t,"g",(function(){return qe})),n.d(t,"f",(function(){return l}))},function(e,t,n){"use strict";var s=n(0);t.a=Object(s.e)({pageA:{text:"this is page A"},pageB:{text:"this is page B"}})},function(e,t,n){"use strict";n.r(t);var s,i=n(0),o=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};class r extends RegExp{constructor(e){const t={};let n=0;super(`^${e.replace(/:([^/$]+)/g,(e,s)=>(t[s]=n++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=t}}function a(e){return new r(e)}function l(e,t){return!!t.match(a(e))}function c(e,t){let n=e.pattern;return t&&t.params&&Object.keys(t.params).forEach(e=>{n=n.replace(new RegExp(`:${e}`,"g"),t.params[e])}),n}let h=s=class extends i.a{constructor(){super();const{path:e,query:t}=i.h.getParams(),n=e+t;this.href=n}static getParams(){if(s.currentRoute)return function(e,t){const n=a(e),s=t.match(n);if(s){const e={};return Object.keys(n.namePosition).forEach(t=>{e[t]=s[n.namePosition[t]+1]}),e}}(s.currentRoute.pattern,i.h.getParams().path)}initPage(){s.currentRoute&&s.currentRoute.title&&s.currentRoute.title!==i.h.getParams().title&&i.h.updateParams({title:s.currentRoute.title})}shouldUpdate(){const{path:e,query:t}=i.h.getParams(),n=e+t;return e+t!==this.href&&(this.href=n,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();s.currentRoute=null;let e,t=null;e=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const n of e){const{pattern:e}=n;if("*"===e)t=n;else if(l(e,i.h.getParams().path)){s.currentRoute=n;break}}return s.currentRoute||(s.currentRoute=t),s.currentRoute?s.currentRoute.redirect?(i.h.replace({path:s.currentRoute.redirect}),this.callback()):i.i`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${s.currentRoute.content}
    `:this.callback()}callback(){return s.currentRoute=null,i.i``}};o([i.j],h.prototype,"routes",void 0),h=s=o([Object(i.d)(i.h.store),Object(i.g)("gem-route")],h);var u=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let d=class extends i.a{constructor(){super(),this.clickHandle=e=>{const t=this.getHref();if(!t.startsWith("/"))return void window.open(t);const{path:n,query:s,hash:o}=i.h.getParams();if(n+s+o!==t)if(e.stopPropagation(),this.route)i.h.pushIgnoreCloseHandle(function(e,t){const n=c(e,t);return Object.assign({path:n},t)}(this.route,this.options));else if(this.href){const{pathname:e,search:t,hash:n}=new URL(this.href,location.origin);i.h.pushIgnoreCloseHandle({path:e,query:t,hash:n})}else console.log(this.href),i.h.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash})},this.preventDefault=e=>{e.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const e=this.options&&this.options.query||"",t=this.options&&this.options.hash||"";return c(this.route,this.options)+e+t}return this.href||this.path+this.query+this.hash}render(e=this.getHref()){return i.i`
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
      <a @click=${this.preventDefault} href=${new URL(i.h.basePath+e,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};u([i.b],d.prototype,"href",void 0),u([i.b],d.prototype,"path",void 0),u([i.b],d.prototype,"query",void 0),u([i.b],d.prototype,"hash",void 0),u([i.j],d.prototype,"route",void 0),u([i.j],d.prototype,"options",void 0),d=u([Object(i.g)("gem-link"),Object(i.d)(i.c)],d);let p=class extends d{render(){const{path:e,query:t,hash:n}=i.h.getParams(),s=this.pattern&&l(this.pattern,e),o=this.getHref();return s||e+t+n===o?this.setAttribute("active",""):this.removeAttribute("active"),super.render(o)}};u([i.b],p.prototype,"pattern",void 0),p=u([Object(i.g)("gem-active-link"),Object(i.d)(i.h.store)],p);let f=class extends i.a{static setTitle(e){i.h.updateParams({title:e})}constructor(e){super(),this.hidden=e}render(){const{title:e}=i.h.getParams();return document.title=e||this.textContent||"",this.hidden?i.i``:document.title?i.i`
      ${document.title}
    `:i.i`
        <slot></slot>
      `}};f=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}([Object(i.d)(i.h.store),Object(i.g)("gem-title")],f),document.head&&!document.head.querySelector("gem-title")&&document.head.append(new f(!0));var m,g=n(1);customElements.define("app-page-b",((m=class extends i.a{render(){return i.i`
        <slot></slot> ${g.a.pageB.text}
      `}}).observedStores=[g.a.pageB],m)),setTimeout(()=>n.e(1).then(n.bind(null,3)));const v=[{title:"ccccccd",pattern:"/c/d",content:i.i`
      <div>C/D</div>
    `},{pattern:"/c/e",content:i.i`
      <div>C/E</div>
    `},{pattern:"/c/*",content:i.i`
      <div>C/E</div>
    `}];customElements.define("app-page-c",class extends i.a{render(){return i.i`
        <style>
          gem-link + gem-link {
            margin-left: 0.5em;
          }
        </style>
        <gem-link path="/c/d">Page c/d</gem-link>
        <gem-link path="/c/e">Page c/e</gem-link>
        <gem-route .routes=${v}></gem-route>
      `}});const b=[{pattern:"/",redirect:"/c/e"},{title:"Page A Title",pattern:"/a",get content(){return n.e(2).then(n.bind(null,4)),i.i`
        <app-page-a>A: </app-page-a>
      `}},{title:"Page B Title",pattern:"/b",content:i.i`
      <app-page-b>B: </app-page-b>
    `},{title:"Page C Title",pattern:"/c/*",content:i.i`
      <app-page-c>C: </app-page-c>
    `},{pattern:"/",content:i.i`
      <div>hello</div>
    `}];class y extends i.a{render(){return i.i`
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
    `}}const _=document.createElement("style");_.innerHTML=i.f`
  body {
    font-size: xx-large;
  }
`,document.head.append(_),customElements.define("app-root",y),document.body.append(new y)}]);
//# sourceMappingURL=bundle.543798691e7ba6101a09.js.map