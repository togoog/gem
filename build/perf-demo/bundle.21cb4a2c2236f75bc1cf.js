!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||window.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class o extends EventTarget{constructor(){super(...arguments),this.currentId=0,this.count=0,this.pool=new Map}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var r;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(r||(r={}));class a{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,r.LOCALSTORAGE)}getSession(t){return this.get(t,r.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,r.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,r.SESSIONSTORAGE)}}class h extends URLSearchParams{constructor(t){if(t instanceof h)return t;"string"==typeof t?super(t):t?(super(),Object.keys(t).forEach(e=>{this.append(e,t[e])})):super()}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}function c(t,...e){return t.reduce((t,s,n)=>t+(e[n-1]||"")+s)}new WeakMap;function d(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function l(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}function u(t,e){const s=new Set(t);return e.forEach(t=>{s.delete(t)}),[...s]}function p(){}const f="gem@storeHandlesKey";function m(t){const e=t;return Object.defineProperty(e,f,{enumerable:!1,value:new Set,writable:!0}),e}function _(t,e){Object.assign(t,e),t[f].forEach(t=>{i(t)})}function g(t,e){t[f].delete(e)}const b=m({list:[{}],currentIndex:0}),v=new WeakMap,w=new WeakMap,y=new WeakMap;function x(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return v.set(i,e),w.set(i,s),y.set(i,n),i}let S="",E={historyState:b,get basePath(){return S},set basePath(t){const{list:e,currentIndex:s}=b;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),_(b,{}),S=t},get location(){const{list:t,currentIndex:e}=b,s=t[e];return{get query(){return new h(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",c=x(t.data||{},s,n,i);window.history.pushState(c,a,E.basePath+e+new h(o)+r);const{list:d,currentIndex:l}=b;r!==d[l].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const u=d.slice(0,l+1).concat({state:c,title:a,path:e,query:o,hash:r});_(b,{list:u,currentIndex:u.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=b,{state:n}=e[s];if(n.$close){w.get(n)(),E.replace(t)}else E.push(t)},pushState(t){const{list:e,currentIndex:s}=b,{path:n,query:i,hash:o}=e[s];E.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},c=t.title||"",d=x(a,s,n,i);window.history.replaceState(d,c,E.basePath+e+new h(o)+r);const{list:l,currentIndex:u}=b;r!==l[u].hash&&window.dispatchEvent(new CustomEvent("hashchange")),l.splice(u,1,{state:d,title:c,path:e,query:o,hash:r}),_(b,{list:l})},replaceState(t){const{list:e,currentIndex:s}=b,{path:n,query:i,hash:o}=e[s];E.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){E=window.__gemHistory;const t=E.basePath;Object.defineProperty(E,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=E,window.history.state)window.history.state.$close&&E.back();else{const{pathname:t,search:e,hash:s}=window.location;E.replace({path:t,query:e,hash:s})}const t=new a,e="gem@historyStateList";_(b,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,b)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=b,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=v.get(r);t&&t()}else if(i.$close){const t=w.get(i),e=y.get(i);if(e&&!e())return s=!0,void E.forward();t?t():(s=!0,E.back())}_(b,{currentIndex:o})})}
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
 */const N=new WeakMap,A=t=>(...e)=>{const s=t(...e);return N.set(s,!0),s},P=t=>"function"==typeof t&&N.has(t),$=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,C=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},O=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},M={},T={},V=`{{lit-${String(Math.random()).slice(2)}}}`,k=`\x3c!--${V}--\x3e`,L=new RegExp(`${V}|${k}`),I="$lit$";class j{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:h,values:{length:c}}=t;for(;a<c;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)H(e[t].name,I)&&n++;for(;n-- >0;){const e=h[a],s=W.exec(e)[2],n=s.toLowerCase()+I,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(L);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(V)>=0){const n=t.parentNode,i=e.split(L),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=q();else{const t=W.exec(o);null!==t&&H(t[2],I)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-I.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(q(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===V){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(q(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(V,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const H=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},R=t=>-1!==t.index,q=()=>document.createComment(""),W=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class F{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=$?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],R(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return $&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const B=` ${V} `;class U{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=W.exec(t);e+=null===o?t+(s?B:k):t.substr(0,o.index)+o[1]+o[2]+I+o[3]+V}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class D extends U{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),C(e,s.firstChild),t}}
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
 */const G=t=>null===t||!("object"==typeof t||"function"==typeof t),z=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class J{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Z(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(G(t)||!z(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===M||G(t)&&t===this.value||(this.value=t,P(t)||(this.committer.dirty=!0))}commit(){for(;P(this.value);){const t=this.value;this.value=M,t(this)}this.value!==M&&this.committer.commit()}}class K{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(q()),this.endNode=t.appendChild(q())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=q()),t.__insert(this.endNode=q())}insertAfterPart(t){t.__insert(this.startNode=q()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;P(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}const t=this.__pendingValue;t!==M&&(G(t)?t!==this.value&&this.__commitText(t):t instanceof U?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):z(t)?this.__commitIterable(t):t===T?(this.value=T,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof F&&this.value.template===e)this.value.update(t.values);else{const s=new F(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new K(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){O(this.startNode.parentNode,t.nextSibling,this.endNode)}}class X{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;P(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}if(this.__pendingValue===M)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=M}}class Y extends J{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new Q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Q extends Z{}let tt=!1;try{const t={get capture(){return tt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class et{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;P(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=M,t(this)}if(this.__pendingValue===M)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=st(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=M}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const st=t=>t&&(tt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const nt=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new Y(t,e.slice(1),s).parts}return"@"===i?[new et(t,e.slice(1),n.eventContext)]:"?"===i?[new X(t,e.slice(1),s)]:new J(t,e,s).parts}handleTextExpression(t){return new K(t)}};
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
 */function it(t){let e=ot.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ot.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(V);return s=e.keyString.get(n),void 0===s&&(s=new j(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const ot=new Map,rt=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const at=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(q(),n);s.insertBefore(q(),n);const o=new K(t.options);return o.insertAfterNode(i),o},ht=(t,e)=>(t.setValue(e),t.commit(),t),ct=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&C(n,e.startNode,o,i)},dt=t=>{O(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},lt=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},ut=new WeakMap,pt=new WeakMap,ft=A((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof K))throw new Error("repeat can only be used in text bindings");const i=ut.get(e)||[],o=pt.get(e)||[],r=[],a=[],h=[];let c,d,l=0;for(const e of t)h[l]=n?n(e,l):l,a[l]=s(e,l),l++;let u=0,p=i.length-1,f=0,m=a.length-1;for(;u<=p&&f<=m;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===h[f])r[f]=ht(i[u],a[f]),u++,f++;else if(o[p]===h[m])r[m]=ht(i[p],a[m]),p--,m--;else if(o[u]===h[m])r[m]=ht(i[u],a[m]),ct(e,i[u],r[m+1]),u++,m--;else if(o[p]===h[f])r[f]=ht(i[p],a[f]),ct(e,i[p],i[u]),p--,f++;else if(void 0===c&&(c=lt(h,f,m),d=lt(o,u,p)),c.has(o[u]))if(c.has(o[p])){const t=d.get(h[f]),s=void 0!==t?i[t]:null;if(null===s){const t=at(e,i[u]);ht(t,a[f]),r[f]=t}else r[f]=ht(s,a[f]),ct(e,s,i[u]),i[t]=null;f++}else dt(i[p]),p--;else dt(i[u]),u++;for(;f<=m;){const t=at(e,r[m+1]);ht(t,a[f]),r[f++]=t}for(;u<=p;){const t=i[u++];null!==t&&dt(t)}ut.set(e,r),pt.set(e,h)}}),mt=new WeakMap,_t=A((t,e)=>s=>{const n=mt.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||mt.has(s)))return;s.setValue(e()),mt.set(s,Array.isArray(t)?Array.from(t):t)}),gt=A(t=>e=>{if(void 0===t&&e instanceof Z){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let bt={html:(t,...e)=>new U(t,e,"html",nt),svg:(t,...e)=>new D(t,e,"svg",nt),render:(t,e,s)=>{let n=rt.get(e);void 0===n&&(O(e,e.firstChild),rt.set(e,n=new K(Object.assign({templateFactory:it},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:A,repeat:ft,guard:_t,ifDefined:gt};window.__litHtml?bt=window.__litHtml:window.__litHtml=bt;const{html:vt,svg:wt,render:yt,directive:xt,repeat:St,guard:Et,ifDefined:Nt}=bt;class At extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.__connectAttribute=this.__connectAttribute.bind(this),this.__disconnectAttribute=this.__disconnectAttribute.bind(this),this.__connectProperty=this.__connectProperty.bind(this),this.__disconnectProperty=this.__disconnectProperty.bind(this),this.__connectStore=this.__connectStore.bind(this),this.__disconnectStore=this.__disconnectStore.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{this.__connectAttribute(t,!0)}),n&&n.forEach(t=>{this[t]=p}),s&&s.forEach(t=>{this.__connectProperty(t)}),i&&i.forEach(t=>{this.__connectStore(t)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}setState(t){Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return vt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(yt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}__connectAttribute(t,e=!1){const s=e?l(t):t,n=e?t:d(s);if("function"==typeof this[s])throw"Don't use attribute with the same name as native methods";if(void 0!==this[s])return;const i=this.constructor;i.observedAttributes||(i.observedAttributes=[]),i.observedAttributes.push(n),Object.defineProperty(this,s,{configurable:!0,get(){return this.getAttribute(n)||""},set(t){null===t?this.removeAttribute(n):this.setAttribute(n,t)}})}connectAttribute(t,e=!1){this.__connectAttribute(t,e)}__disconnectAttribute(t,e=!1){const s=e?l(t):t,n=e?t:d(s);Object.defineProperty(this,s,{configurable:!0,enumerable:!0,writable:!0});const i=this.constructor;i.observedAttributes=u(i.observedAttributes,[n])}disconnectAttribute(t,e=!1){this.__disconnectAttribute(t,e)}__connectProperty(t,e=!1){if(t in this)return;const s=this.constructor;e?(s.defineEvents||(s.defineEvents=[]),s.defineEvents.push(t)):(s.observedPropertys||(s.observedPropertys=[]),s.observedPropertys.push(t));let n=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>n,set(s){if(s!==n){if(e){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=e=>{const n=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(t,n,s),i(this.__update))}}})}connectProperty(t,e=!1){this.__connectProperty(t,e)}__disconnectProperty(t,e=!1){Object.defineProperty(this,t,{configurable:!0,enumerable:!0,writable:!0});const s=this.constructor;e?s.defineEvents=u(s.defineEvents,[t]):s.observedPropertys=u(s.observedPropertys,[t])}disconnectPropertys(t,e=!1){this.__disconnectProperty(t,e)}__connectStore(t){if(!t[f])throw new Error("`observedStores` only support store module");const e=this.constructor;e.observedStores||(e.observedStores=[]),e.observedStores.push(t),function(t,e){t[f].add(e)}(t,this.__update)}connectStore(t){this.__connectStore(t)}__disconnectStore(t){g(t,this.__update);const e=this.constructor;e.observedStores=u(e.observedStores,[t])}disconnectStore(t){this.__disconnectStore(t)}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{g(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class Pt extends At{connectedCallback(){this.willMount(),yt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const $t=new o;let Ct=!1;const Ot=()=>{window.requestAnimationFrame((function t(e){const s=$t.get();s&&(s(),performance.now()-e<16)?t(e):Ct&&Ot()}))};$t.addEventListener("start",()=>{Ct=!0,Ot()}),$t.addEventListener("end",()=>Ct=!1);class Mt extends At{__update(){$t.add(()=>{this.shouldUpdate()&&(yt(this.render(),this.__renderRoot),this.updated())})}connectedCallback(){this.willMount(),$t.add(()=>{yt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0})}}const Tt=customElements.define.bind(customElements);var Vt;customElements.define=function(t,e,s){customElements.get(t)||Tt(t,e,s)};const kt=m({number:1});setInterval(()=>{_(kt,{number:kt.number%10+1})},1e3),customElements.define("fiber-dot",((Vt=class extends Mt{constructor(){super(...arguments),this.onmouseenter=()=>{this.setState({hover:!0})},this.onmouseleave=()=>{this.setState({hover:!1})},this.state={hover:!1}}render(){const t=1.3*this.size;return Object.assign(this.style,{width:t+"px",height:t+"px",left:this.x+"px",top:this.y+"px",borderRadius:t/2+"px",lineHeight:t+"px",background:this.state.hover?"#ff0":"#61dafb"}),vt`
        <style>
          :host {
            position: absolute;
            font: normal 15px sans-serif;
            text-align: center;
            cursor: pointer;
            display: block;
          }
        </style>
        ${this.state.hover?"**"+kt.number+"**":kt.number}
      `}}).observedStores=[kt],Vt));customElements.define("fiber-triangle",class extends Pt{render(){let t=this.s;if(t<=25)return vt`
          <fiber-dot .x=${this.x-12.5} .y=${this.y-12.5} .size=${25}></fiber-dot>
        `;t/=2;{const t=performance.now()+.8;for(;performance.now()<t;);}return vt`
        <fiber-triangle .x=${this.x} .y=${this.y-t/2} .s=${t}></fiber-triangle>
        <fiber-triangle .x=${this.x-t} .y=${this.y+t/2} .s=${t}></fiber-triangle>
        <fiber-triangle .x=${this.x+t} .y=${this.y+t/2} .s=${t}></fiber-triangle>
      `}});class Lt extends Pt{constructor(){super(...arguments),this.elapsed=0}render(){const t=this.elapsed/1e3%10,e=1+(t>5?10-t:t)/10;return this.style.transform="scaleX("+e/2.1+") scaleY(0.7) translateZ(0.1px)",vt`
      <style>
        :host {
          position: absolute;
          transform-origin: 0 0;
          left: 50%;
          top: 50%;
          width: 10px;
          height: 10px;
          background: #eee;
        }
      </style>
      <div>
        <fiber-triangle .x=${0} .y=${0} .s=${1e3}></fiber-triangle>
      </div>
    `}}Lt.observedPropertys=["elapsed"],customElements.define("app-root",Lt),document.body.innerHTML=c`
  <ul>
    <li><a href="https://stencil-fiber-demo.firebaseapp.com/perf.html">stencil-fiber-demo</a></li>
    <li><a href="https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html">react-fiber-demo</a></li>
  </ul>
`;const It=new Lt;document.body.append(It);const jt=Date.now();requestAnimationFrame((function t(){It.elapsed=Date.now()-jt,requestAnimationFrame(t)}))}]);
//# sourceMappingURL=bundle.21cb4a2c2236f75bc1cf.js.map