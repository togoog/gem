!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||window.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class o extends EventTarget{constructor(){super(...arguments),this.currentId=0,this.count=0,this.pool=new Map}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var r;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(r||(r={}));class a{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,r.LOCALSTORAGE)}getSession(t){return this.get(t,r.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,r.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,r.SESSIONSTORAGE)}}class c extends URLSearchParams{constructor(t){if(t instanceof c)return t;"string"==typeof t?super(t):t?(super(),Object.keys(t).forEach(e=>{this.append(e,t[e])})):super()}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function h(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function l(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}function d(t,e){const s=new Set(t);return e.forEach(t=>{s.delete(t)}),[...s]}function u(){}const p="gem@storeHandlesKey";function f(t){const e=t;return Object.defineProperty(e,p,{enumerable:!1,value:new Set,writable:!0}),e}function g(t,e){Object.assign(t,e),t[p].forEach(t=>{i(t)})}function m(t,e){t[p].delete(e)}const _=f({list:[{}],currentIndex:0}),b=new WeakMap,v=new WeakMap,y=new WeakMap;function w(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return b.set(i,e),v.set(i,s),y.set(i,n),i}let x="",S={historyState:_,get basePath(){return x},set basePath(t){const{list:e,currentIndex:s}=_;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),g(_,{}),x=t},get location(){const{list:t,currentIndex:e}=_,s=t[e];return{get query(){return new c(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",h=w(t.data||{},s,n,i);window.history.pushState(h,a,S.basePath+e+new c(o)+r);const{list:l,currentIndex:d}=_;r!==l[d].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const u=l.slice(0,d+1).concat({state:h,title:a,path:e,query:o,hash:r});g(_,{list:u,currentIndex:u.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=_,{state:n}=e[s];if(n.$close){v.get(n)(),S.replace(t)}else S.push(t)},pushState(t){const{list:e,currentIndex:s}=_,{path:n,query:i,hash:o}=e[s];S.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},h=t.title||"",l=w(a,s,n,i);window.history.replaceState(l,h,S.basePath+e+new c(o)+r);const{list:d,currentIndex:u}=_;r!==d[u].hash&&window.dispatchEvent(new CustomEvent("hashchange")),d.splice(u,1,{state:l,title:h,path:e,query:o,hash:r}),g(_,{list:d})},replaceState(t){const{list:e,currentIndex:s}=_,{path:n,query:i,hash:o}=e[s];S.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){S=window.__gemHistory;const t=S.basePath;Object.defineProperty(S,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=S,window.history.state)window.history.state.$close&&S.back();else{const{pathname:t,search:e,hash:s}=window.location;S.replace({path:t,query:e,hash:s})}const t=new a,e="gem@historyStateList";g(_,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,_)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=_,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=b.get(r);t&&t()}else if(i.$close){const t=v.get(i),e=y.get(i);if(e&&!e())return s=!0,void S.forward();t?t():(s=!0,S.back())}g(_,{currentIndex:o})})}
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
 */const E=new WeakMap,N=t=>(...e)=>{const s=t(...e);return E.set(s,!0),s},A=t=>"function"==typeof t&&E.has(t),k=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,P=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},O=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},C={},$={},M=`{{lit-${String(Math.random()).slice(2)}}}`,V=`\x3c!--${M}--\x3e`,T=new RegExp(`${M}|${V}`),j="$lit$";class H{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:c,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)R(e[t].name,j)&&n++;for(;n-- >0;){const e=c[a],s=q.exec(e)[2],n=s.toLowerCase()+j,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(T);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(M)>=0){const n=t.parentNode,i=e.split(T),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=L();else{const t=q.exec(o);null!==t&&R(t[2],j)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-j.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(L(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===M){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(L(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(M,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const R=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},I=t=>-1!==t.index,L=()=>document.createComment(""),q=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class W{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=k?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],I(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return k&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const B=` ${M} `;class U{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=q.exec(t);e+=null===o?t+(s?B:V):t.substr(0,o.index)+o[1]+o[2]+j+o[3]+M}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class F extends U{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),P(e,s.firstChild),t}}
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
 */const G=t=>null===t||!("object"==typeof t||"function"==typeof t),D=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class z{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new J(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(G(t)||!D(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class J{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===C||G(t)&&t===this.value||(this.value=t,A(t)||(this.committer.dirty=!0))}commit(){for(;A(this.value);){const t=this.value;this.value=C,t(this)}this.value!==C&&this.committer.commit()}}class K{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(L()),this.endNode=t.appendChild(L())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=L()),t.__insert(this.endNode=L())}insertAfterPart(t){t.__insert(this.startNode=L()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}const t=this.__pendingValue;t!==C&&(G(t)?t!==this.value&&this.__commitText(t):t instanceof U?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):D(t)?this.__commitIterable(t):t===$?(this.value=$,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof W&&this.value.template===e)this.value.update(t.values);else{const s=new W(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new K(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){O(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Z{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}if(this.__pendingValue===C)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=C}}class Q extends z{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new X(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class X extends J{}let Y=!1;try{const t={get capture(){return Y=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class tt{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}if(this.__pendingValue===C)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=et(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=C}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const et=t=>t&&(Y?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const st=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new Q(t,e.slice(1),s).parts}return"@"===i?[new tt(t,e.slice(1),n.eventContext)]:"?"===i?[new Z(t,e.slice(1),s)]:new z(t,e,s).parts}handleTextExpression(t){return new K(t)}};
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
 */function nt(t){let e=it.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},it.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(M);return s=e.keyString.get(n),void 0===s&&(s=new H(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const it=new Map,ot=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const rt=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(L(),n);s.insertBefore(L(),n);const o=new K(t.options);return o.insertAfterNode(i),o},at=(t,e)=>(t.setValue(e),t.commit(),t),ct=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&P(n,e.startNode,o,i)},ht=t=>{O(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},lt=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},dt=new WeakMap,ut=new WeakMap,pt=N((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof K))throw new Error("repeat can only be used in text bindings");const i=dt.get(e)||[],o=ut.get(e)||[],r=[],a=[],c=[];let h,l,d=0;for(const e of t)c[d]=n?n(e,d):d,a[d]=s(e,d),d++;let u=0,p=i.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===c[f])r[f]=at(i[u],a[f]),u++,f++;else if(o[p]===c[g])r[g]=at(i[p],a[g]),p--,g--;else if(o[u]===c[g])r[g]=at(i[u],a[g]),ct(e,i[u],r[g+1]),u++,g--;else if(o[p]===c[f])r[f]=at(i[p],a[f]),ct(e,i[p],i[u]),p--,f++;else if(void 0===h&&(h=lt(c,f,g),l=lt(o,u,p)),h.has(o[u]))if(h.has(o[p])){const t=l.get(c[f]),s=void 0!==t?i[t]:null;if(null===s){const t=rt(e,i[u]);at(t,a[f]),r[f]=t}else r[f]=at(s,a[f]),ct(e,s,i[u]),i[t]=null;f++}else ht(i[p]),p--;else ht(i[u]),u++;for(;f<=g;){const t=rt(e,r[g+1]);at(t,a[f]),r[f++]=t}for(;u<=p;){const t=i[u++];null!==t&&ht(t)}dt.set(e,r),ut.set(e,c)}}),ft=new WeakMap,gt=N((t,e)=>s=>{const n=ft.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||ft.has(s)))return;s.setValue(e()),ft.set(s,Array.isArray(t)?Array.from(t):t)}),mt=N(t=>e=>{if(void 0===t&&e instanceof J){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let _t={html:(t,...e)=>new U(t,e,"html",st),svg:(t,...e)=>new F(t,e,"svg",st),render:(t,e,s)=>{let n=ot.get(e);void 0===n&&(O(e,e.firstChild),ot.set(e,n=new K(Object.assign({templateFactory:nt},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:N,repeat:pt,guard:gt,ifDefined:mt};window.__litHtml?_t=window.__litHtml:window.__litHtml=_t;const{html:bt,svg:vt,render:yt,directive:wt,repeat:xt,guard:St,ifDefined:Et}=_t;class Nt extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.__connectAttribute=this.__connectAttribute.bind(this),this.__disconnectAttribute=this.__disconnectAttribute.bind(this),this.__connectProperty=this.__connectProperty.bind(this),this.__disconnectProperty=this.__disconnectProperty.bind(this),this.__connectStore=this.__connectStore.bind(this),this.__disconnectStore=this.__disconnectStore.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{this.__connectAttribute(t,!0)}),n&&n.forEach(t=>{this[t]=u}),s&&s.forEach(t=>{this.__connectProperty(t)}),i&&i.forEach(t=>{this.__connectStore(t)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}setState(t){Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return bt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(yt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}__connectAttribute(t,e=!1){const s=e?l(t):t,n=e?t:h(s);if("function"==typeof this[s])throw"Don't use attribute with the same name as native methods";if(void 0!==this[s])return;const i=this.constructor;i.observedAttributes||(i.observedAttributes=[]),i.observedAttributes.push(n),Object.defineProperty(this,s,{configurable:!0,get(){return this.getAttribute(n)||""},set(t){null===t?this.removeAttribute(n):this.setAttribute(n,t)}})}connectAttribute(t,e=!1){this.__connectAttribute(t,e)}__disconnectAttribute(t,e=!1){const s=e?l(t):t,n=e?t:h(s);Object.defineProperty(this,s,{configurable:!0,enumerable:!0,writable:!0});const i=this.constructor;i.observedAttributes=d(i.observedAttributes,[n])}disconnectAttribute(t,e=!1){this.__disconnectAttribute(t,e)}__defineEvent(t){const e=this.constructor;e.defineEvents||(e.defineEvents=[]),e.defineEvents.push(t);let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(e){if(e.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{this.dispatchEvent(new CustomEvent(t.toLowerCase(),{detail:e instanceof Event?null:e}))},s.isEventHandle=!0}})}__connectProperty(t){if(t in this)return;const e=this.constructor;e.observedPropertys||(e.observedPropertys=[]),e.observedPropertys.push(t);let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(e){e!==s&&(s=e,this.__isMounted&&(this.propertyChanged(t,s,e),i(this.__update)))}})}connectProperty(t){this.__connectProperty(t)}__disconnectProperty(t){Object.defineProperty(this,t,{configurable:!0,enumerable:!0,writable:!0});const e=this.constructor;e.observedPropertys=d(e.observedPropertys,[t])}disconnectPropertys(t){this.__disconnectProperty(t)}__connectStore(t){if(!t[p])throw new Error("`observedStores` only support store module");const e=this.constructor;e.observedStores||(e.observedStores=[]),e.observedStores.push(t),function(t,e){t[p].add(e)}(t,this.__update)}connectStore(t){this.__connectStore(t)}__disconnectStore(t){m(t,this.__update);const e=this.constructor;e.observedStores=d(e.observedStores,[t])}disconnectStore(t){this.__disconnectStore(t)}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{m(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class At extends Nt{connectedCallback(){this.willMount(),yt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const kt=new o;let Pt=!1;const Ot=()=>{window.requestAnimationFrame((function t(e){const s=kt.get();s&&(s(),performance.now()-e<16)?t(e):Pt&&Ot()}))};kt.addEventListener("start",()=>{Pt=!0,Ot()}),kt.addEventListener("end",()=>Pt=!1);const Ct=customElements.define.bind(customElements);customElements.define=function(t,e,s){customElements.get(t)||Ct(t,e,s)};const $t=Symbol("open mark");function Mt(t){var e;return(e=class extends At{constructor(){super(),this.closeHandle=this.closeHandle.bind(this)}static get isOpen(){return this.store[$t]}static get observedStores(){return[S.historyState,this.store]}static open(t){const e=()=>g(this.store,Object.assign({[$t]:!0},t));e(),S.pushState({open:e,close:this.close.bind(this),shouldClose:this.shouldClose.bind(this)})}static close(){g(this.store,Object.assign({[$t]:!1},t))}static shouldClose(){return!0}closeHandle(){S.back()}render(){return bt``}}).store=f(Object.assign({[$t]:!1},t)),e}class Vt extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Tt(t){return new Vt(t)}function jt(t,e){return!!e.match(Tt(t))}function Ht(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}class Rt extends At{constructor(){super();const{path:t,query:e}=S.location,s=t+e;this.href=s}static getParams(){if(Rt.currentRoute)return function(t,e){const s=Tt(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(Rt.currentRoute.pattern,S.location.path)}initPage(){const{list:t,currentIndex:e}=S.historyState;Rt.currentRoute&&Rt.currentRoute.title&&Rt.currentRoute.title!==t[e].title&&(t.splice(e,1,Object.assign(Object.assign({},t[e]),{title:Rt.currentRoute.title})),g(S.historyState,{list:t}))}shouldUpdate(){const{path:t,query:e}=S.location,s=t+e;return t+e!==this.href&&(this.href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();let t,e;Rt.currentRoute=null,e=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of e){const{pattern:e}=s;if("*"===e)t=s;else if(jt(e,S.location.path)){Rt.currentRoute=s;break}}return Rt.currentRoute||(Rt.currentRoute=t),Rt.currentRoute?Rt.currentRoute.redirect?(S.replace({path:Rt.currentRoute.redirect}),this.callback()):bt`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Rt.currentRoute.content}
    `:this.callback()}callback(){return Rt.currentRoute=null,bt``}}Rt.observedPropertys=["routes"],Rt.observedStores=[S.historyState],customElements.define("gem-route",Rt);class It extends At{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:i}=S.location;s+n+i!==e&&(t.stopPropagation(),this.route?S.pushWithoutCloseHandle(function(t,e){const s=Ht(t,e);return Object.assign({path:s},e)}(this.route,this.options)):S.pushWithoutCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options?this.options.query:"",e=this.options?this.options.hash:"";return Ht(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(){const{path:t,query:e,hash:s}=S.location;return this.pattern&&jt(this.pattern,t)||t+e+s===this.getHref()?this.setAttribute("active",""):this.removeAttribute("active"),bt`
      <slot></slot>
    `}}It.observedAttributes=["href","path","query","hash","pattern"],It.observedStores=[S.historyState],It.observedPropertys=["route","options"],customElements.define("gem-link",It);class Lt extends(Mt({content:bt``})){render(){return bt`
      <style>
        .root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }
        .body {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 100px;
          background: white;
        }
      </style>
      <div class="root" ?hidden=${!Lt.isOpen}>
        <div class="body">
          <h2>hello.</h2>
        </div>
      </div>
    `}}customElements.define("app-dialog1",Lt);class qt extends(Mt({content:bt``})){static shouldClose(){return confirm("confirm close dialog?")}openModal(){Lt.open({content:bt`
        213
      `})}render(){return bt`
      <style>
        .root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }
        .body {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 200px;
          background: white;
        }
      </style>
      <div class="root" ?hidden=${!qt.isOpen}>
        <div class="body">
          <h2>hello.</h2>
          <div>${qt.store.content}</div>
          <button @click=${this.closeHandle}>x</button>
          <button @click=${this.openModal}>创建另一个 dialog</button>
          <app-dialog1></app-dialog1>
        </div>
      </div>
    `}}customElements.define("app-dialog",qt);class Wt extends At{constructor(){super(...arguments),this.clickHandle=()=>qt.open({content:bt`
        <div>dialog</div>
        <gem-link path="/hi" style="cursor: pointer; color: blue">replace route</gem-link>
      `})}render(){return bt`
      <style>
        :host {
          font-size: x-large;
        }
      </style>
      <button @click="${this.clickHandle}">open dialog</button>
      <app-dialog></app-dialog>
    `}}customElements.define("app-root",Wt),document.body.append(new Wt)}]);
//# sourceMappingURL=bundle.22644fdd74866438b098.js.map