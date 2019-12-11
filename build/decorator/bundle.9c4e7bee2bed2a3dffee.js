!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||window.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class o extends EventTarget{constructor(){super(...arguments),this.currentId=0,this.count=0,this.pool=new Map}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var r;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(r||(r={}));class a{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,r.LOCALSTORAGE)}getSession(t){return this.get(t,r.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,r.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,r.SESSIONSTORAGE)}}class c extends URLSearchParams{constructor(t){if(t instanceof c)return t;"string"==typeof t?super(t):t?(super(),Object.keys(t).forEach(e=>{this.append(e,t[e])})):super()}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}function h(t,...e){return t.reduce((t,s,n)=>t+(e[n-1]||"")+s)}const l=new WeakMap;function d(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function u(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}function p(t,e){const s=new Set(t);return e.forEach(t=>{s.delete(t)}),[...s]}const f="gem@storeHandlesKey";function _(t){const e=t;return Object.defineProperty(e,f,{enumerable:!1,value:new Set,writable:!0}),e}function m(t,e){Object.assign(t,e),t[f].forEach(t=>{i(t)})}function g(t,e){t[f].delete(e)}const v=_({list:[{}],currentIndex:0}),b=new WeakMap,y=new WeakMap,w=new WeakMap;function S(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return b.set(i,e),y.set(i,s),w.set(i,n),i}let x="",E={historyState:v,get basePath(){return x},set basePath(t){const{list:e,currentIndex:s}=v;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),m(v,{}),x=t},get location(){const{list:t,currentIndex:e}=v,s=t[e];return{get query(){return new c(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",h=S(t.data||{},s,n,i);window.history.pushState(h,a,E.basePath+e+new c(o)+r);const{list:l,currentIndex:d}=v;r!==l[d].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const u=l.slice(0,d+1).concat({state:h,title:a,path:e,query:o,hash:r});m(v,{list:u,currentIndex:u.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=v,{state:n}=e[s];if(n.$close){y.get(n)(),E.replace(t)}else E.push(t)},pushState(t){const{list:e,currentIndex:s}=v,{path:n,query:i,hash:o}=e[s];E.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},h=t.title||"",l=S(a,s,n,i);window.history.replaceState(l,h,E.basePath+e+new c(o)+r);const{list:d,currentIndex:u}=v;r!==d[u].hash&&window.dispatchEvent(new CustomEvent("hashchange")),d.splice(u,1,{state:l,title:h,path:e,query:o,hash:r}),m(v,{list:d})},replaceState(t){const{list:e,currentIndex:s}=v,{path:n,query:i,hash:o}=e[s];E.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){E=window.__gemHistory;const t=E.basePath;Object.defineProperty(E,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=E,window.history.state)window.history.state.$close&&E.back();else{const{pathname:t,search:e,hash:s}=window.location;E.replace({path:t,query:e,hash:s})}const t=new a,e="gem@historyStateList";m(v,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,v)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=v,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=b.get(r);t&&t()}else if(i.$close){const t=y.get(i),e=w.get(i);if(e&&!e())return s=!0,void E.forward();t?t():(s=!0,E.back())}m(v,{currentIndex:o})})}
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
 */const N=new WeakMap,A=t=>(...e)=>{const s=t(...e);return N.set(s,!0),s},O=t=>"function"==typeof t&&N.has(t),P=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,C=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},T=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},$={},V={},k=`{{lit-${String(Math.random()).slice(2)}}}`,M=`\x3c!--${k}--\x3e`,j=new RegExp(`${k}|${M}`),I="$lit$";class L{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:c,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)H(e[t].name,I)&&n++;for(;n-- >0;){const e=c[a],s=q.exec(e)[2],n=s.toLowerCase()+I,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(j);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(k)>=0){const n=t.parentNode,i=e.split(j),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=W();else{const t=q.exec(o);null!==t&&H(t[2],I)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-I.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(W(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===k){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(W(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(k,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const H=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},R=t=>-1!==t.index,W=()=>document.createComment(""),q=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class B{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],R(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return P&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const D=` ${k} `;class F{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=q.exec(t);e+=null===o?t+(s?D:M):t.substr(0,o.index)+o[1]+o[2]+I+o[3]+k}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class U extends F{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),C(e,s.firstChild),t}}
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
 */const G=t=>null===t||!("object"==typeof t||"function"==typeof t),J=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class z{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new K(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(G(t)||!J(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class K{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===$||G(t)&&t===this.value||(this.value=t,O(t)||(this.committer.dirty=!0))}commit(){for(;O(this.value);){const t=this.value;this.value=$,t(this)}this.value!==$&&this.committer.commit()}}class Z{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(W()),this.endNode=t.appendChild(W())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=W()),t.__insert(this.endNode=W())}insertAfterPart(t){t.__insert(this.startNode=W()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}const t=this.__pendingValue;t!==$&&(G(t)?t!==this.value&&this.__commitText(t):t instanceof F?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):J(t)?this.__commitIterable(t):t===V?(this.value=V,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof B&&this.value.template===e)this.value.update(t.values);else{const s=new B(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new Z(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){T(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Q{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}if(this.__pendingValue===$)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=$}}class X extends z{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new Y(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Y extends K{}let tt=!1;try{const t={get capture(){return tt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class et{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}if(this.__pendingValue===$)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=st(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=$}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const st=t=>t&&(tt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const nt=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new X(t,e.slice(1),s).parts}return"@"===i?[new et(t,e.slice(1),n.eventContext)]:"?"===i?[new Q(t,e.slice(1),s)]:new z(t,e,s).parts}handleTextExpression(t){return new Z(t)}};
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
 */function it(t){let e=ot.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ot.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(k);return s=e.keyString.get(n),void 0===s&&(s=new L(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const ot=new Map,rt=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const at=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(W(),n);s.insertBefore(W(),n);const o=new Z(t.options);return o.insertAfterNode(i),o},ct=(t,e)=>(t.setValue(e),t.commit(),t),ht=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&C(n,e.startNode,o,i)},lt=t=>{T(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},dt=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},ut=new WeakMap,pt=new WeakMap,ft=A((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof Z))throw new Error("repeat can only be used in text bindings");const i=ut.get(e)||[],o=pt.get(e)||[],r=[],a=[],c=[];let h,l,d=0;for(const e of t)c[d]=n?n(e,d):d,a[d]=s(e,d),d++;let u=0,p=i.length-1,f=0,_=a.length-1;for(;u<=p&&f<=_;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===c[f])r[f]=ct(i[u],a[f]),u++,f++;else if(o[p]===c[_])r[_]=ct(i[p],a[_]),p--,_--;else if(o[u]===c[_])r[_]=ct(i[u],a[_]),ht(e,i[u],r[_+1]),u++,_--;else if(o[p]===c[f])r[f]=ct(i[p],a[f]),ht(e,i[p],i[u]),p--,f++;else if(void 0===h&&(h=dt(c,f,_),l=dt(o,u,p)),h.has(o[u]))if(h.has(o[p])){const t=l.get(c[f]),s=void 0!==t?i[t]:null;if(null===s){const t=at(e,i[u]);ct(t,a[f]),r[f]=t}else r[f]=ct(s,a[f]),ht(e,s,i[u]),i[t]=null;f++}else lt(i[p]),p--;else lt(i[u]),u++;for(;f<=_;){const t=at(e,r[_+1]);ct(t,a[f]),r[f++]=t}for(;u<=p;){const t=i[u++];null!==t&&lt(t)}ut.set(e,r),pt.set(e,c)}}),_t=new WeakMap,mt=A((t,e)=>s=>{const n=_t.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||_t.has(s)))return;s.setValue(e()),_t.set(s,Array.isArray(t)?Array.from(t):t)}),gt=A(t=>e=>{if(void 0===t&&e instanceof K){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let vt={html:(t,...e)=>new F(t,e,"html",nt),svg:(t,...e)=>new U(t,e,"svg",nt),render:(t,e,s)=>{let n=rt.get(e);void 0===n&&(T(e,e.firstChild),rt.set(e,n=new Z(Object.assign({templateFactory:it},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:A,repeat:ft,guard:mt,ifDefined:gt};window.__litHtml?vt=window.__litHtml:window.__litHtml=vt;const{html:bt,svg:yt,render:wt,directive:St,repeat:xt,guard:Et,ifDefined:Nt}=vt;class At extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.__connectAttribute=this.__connectAttribute.bind(this),this.__disconnectAttribute=this.__disconnectAttribute.bind(this),this.__connectProperty=this.__connectProperty.bind(this),this.__disconnectProperty=this.__disconnectProperty.bind(this),this.__connectStore=this.__connectStore.bind(this),this.__disconnectStore=this.__disconnectStore.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,observedStores:n,adoptedStyleSheets:i}=new.target;e&&e.forEach(t=>{this.__connectAttribute(t,!0)}),s&&s.forEach(t=>{this.__connectProperty(t)}),n&&n.forEach(t=>{this.__connectStore(t)}),i&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=i:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(i))}setState(t){Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return bt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(wt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}__connectAttribute(t,e=!1){const s=e?u(t):t,n=e?t:d(s);if("function"==typeof this[s])throw"Don't use attribute with the same name as native methods";if(void 0!==this[s])return;const i=this.constructor;i.observedAttributes||(i.observedAttributes=[]),i.observedAttributes.push(n),Object.defineProperty(this,s,{configurable:!0,get(){return this.getAttribute(n)||""},set(t){null===t?this.removeAttribute(n):this.setAttribute(n,t)}})}connectAttribute(t,e=!1){this.__connectAttribute(t,e)}__disconnectAttribute(t,e=!1){const s=e?u(t):t,n=e?t:d(s);Object.defineProperty(this,s,{configurable:!0,enumerable:!0,writable:!0});const i=this.constructor;i.observedAttributes=p(i.observedAttributes,[n])}disconnectAttribute(t,e=!1){this.__disconnectAttribute(t,e)}__connectProperty(t){if(t in this)return;const e=this.constructor;e.observedPropertys||(e.observedPropertys=[]),e.observedPropertys.push(t);let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(e){e!==s&&(s=e,this.__isMounted&&(this.propertyChanged(t,s,e),i(this.__update)))}})}connectProperty(t){this.__connectProperty(t)}__disconnectProperty(t){Object.defineProperty(this,t,{configurable:!0,enumerable:!0,writable:!0});const e=this.constructor;e.observedPropertys=p(e.observedPropertys,[t])}disconnectPropertys(t){this.__disconnectProperty(t)}__connectStore(t){if(!t[f])throw new Error("`observedStores` only support store module");const e=this.constructor;e.observedStores||(e.observedStores=[]),e.observedStores.push(t),function(t,e){t[f].add(e)}(t,this.__update)}connectStore(t){this.__connectStore(t)}__disconnectStore(t){g(t,this.__update);const e=this.constructor;e.observedStores=p(e.observedStores,[t])}disconnectStore(t){this.__disconnectStore(t)}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{g(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class Ot extends At{connectedCallback(){this.willMount(),wt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const Pt=new o;let Ct=!1;const Tt=()=>{window.requestAnimationFrame((function t(e){const s=Pt.get();s&&(s(),performance.now()-e<16)?t(e):Ct&&Tt()}))};Pt.addEventListener("start",()=>{Ct=!0,Tt()}),Pt.addEventListener("end",()=>Ct=!1);const $t=customElements.define.bind(customElements);function Vt(t,e){t.connectAttribute(e)}function kt(t){return function(e){customElements.define(t,e)}}customElements.define=function(t,e,s){customElements.get(t)||$t(t,e,s)};var Mt=function(t,e,s,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let jt=class extends Ot{constructor(){super(...arguments),this.clickHandle=()=>{this.dispatchEvent(new CustomEvent("say-hi"))}}render(){return bt`
      <p>
        attributes:
        <span>${this.firstName}</span>
        <span>${this.lastName}</span>
      </p>
      <p>properties: ${JSON.stringify(this.message)}</p>
      <slot name="light"></slot>
      <button @click=${this.clickHandle}>say hi</button>
    `}};Mt([Vt],jt.prototype,"firstName",void 0),Mt([Vt],jt.prototype,"lastName",void 0),Mt([function(t,e){t.connectProperty(e)}],jt.prototype,"message",void 0),jt=Mt([kt("app-children")],jt);var It=function(t,e,s,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};const Lt=_({msg:[1,2],now:new Date}),Ht=function(t,e=""){let s=l.get(t);if(!s){const n=new CSSStyleSheet;n.media.mediaText=e;let i="";"string"==typeof t?i=t:(Object.keys(t).forEach(e=>{n[e]="tag"===t[e].type?e:`${e}-${t[e].key}`,i+=t[e].str.replace(/&/g,n[e])}),l.set(t,n)),n.replaceSync(i),s=n}return s}((function(t,...e){return h(t,...e)})`
  h1 {
    text-decoration: underline;
  }
`);let Rt=class extends Ot{constructor(t){super(),this.onSayHi=()=>{const[t,e]=Lt.msg;m(Lt,{msg:[e,t],now:new Date})},this.appTitle=t}render(){return bt`
      <h1>${this.appTitle}</h1>
      <app-children @say-hi=${this.onSayHi} .message=${Lt.msg} first-name="hello" last-name="world">
        <p slot="light">now: ${Lt.now}</p>
      </app-children>
    `}};var Wt,qt;It([Vt],Rt.prototype,"appTitle",void 0),Rt=It([(qt=Lt,function(t){const e=t;e.observedStores||(e.observedStores=[]),e.observedStores.push(qt)}),(Wt=Ht,function(t){const e=t;e.adoptedStyleSheets||(e.adoptedStyleSheets=[]),e.adoptedStyleSheets.push(Wt)}),kt("app-root")],Rt),document.body.append(new Rt("I'm Title"))}]);
//# sourceMappingURL=bundle.9c4e7bee2bed2a3dffee.js.map