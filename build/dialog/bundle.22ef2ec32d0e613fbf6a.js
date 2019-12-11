!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||window.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class o extends EventTarget{constructor(){super(...arguments),this.currentId=0,this.count=0,this.pool=new Map}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var r;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(r||(r={}));class a{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,r.LOCALSTORAGE)}getSession(t){return this.get(t,r.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,r.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,r.SESSIONSTORAGE)}}class c extends URLSearchParams{constructor(t){if(t instanceof c)return t;"string"==typeof t?super(t):t?(super(),Object.keys(t).forEach(e=>{this.append(e,t[e])})):super()}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function h(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}function l(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}function d(t,e){const s=new Set(t);return e.forEach(t=>{s.delete(t)}),[...s]}const u="gem@storeHandlesKey";function p(t){const e=t;return Object.defineProperty(e,u,{enumerable:!1,value:new Set,writable:!0}),e}function f(t,e){Object.assign(t,e),t[u].forEach(t=>{i(t)})}function g(t,e){t[u].delete(e)}const m=p({list:[{}],currentIndex:0}),_=new WeakMap,b=new WeakMap,v=new WeakMap;function y(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return _.set(i,e),b.set(i,s),v.set(i,n),i}let w="",x={historyState:m,get basePath(){return w},set basePath(t){const{list:e,currentIndex:s}=m;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),f(m,{}),w=t},get location(){const{list:t,currentIndex:e}=m,s=t[e];return{get query(){return new c(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",h=y(t.data||{},s,n,i);window.history.pushState(h,a,x.basePath+e+new c(o)+r);const{list:l,currentIndex:d}=m;r!==l[d].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const u=l.slice(0,d+1).concat({state:h,title:a,path:e,query:o,hash:r});f(m,{list:u,currentIndex:u.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=m,{state:n}=e[s];if(n.$close){b.get(n)(),x.replace(t)}else x.push(t)},pushState(t){const{list:e,currentIndex:s}=m,{path:n,query:i,hash:o}=e[s];x.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},h=t.title||"",l=y(a,s,n,i);window.history.replaceState(l,h,x.basePath+e+new c(o)+r);const{list:d,currentIndex:u}=m;r!==d[u].hash&&window.dispatchEvent(new CustomEvent("hashchange")),d.splice(u,1,{state:l,title:h,path:e,query:o,hash:r}),f(m,{list:d})},replaceState(t){const{list:e,currentIndex:s}=m,{path:n,query:i,hash:o}=e[s];x.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){x=window.__gemHistory;const t=x.basePath;Object.defineProperty(x,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=x,window.history.state)window.history.state.$close&&x.back();else{const{pathname:t,search:e,hash:s}=window.location;x.replace({path:t,query:e,hash:s})}const t=new a,e="gem@historyStateList";f(m,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,m)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=m,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=_.get(r);t&&t()}else if(i.$close){const t=b.get(i),e=v.get(i);if(e&&!e())return s=!0,void x.forward();t?t():(s=!0,x.back())}f(m,{currentIndex:o})})}
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
 */const S=new WeakMap,E=t=>(...e)=>{const s=t(...e);return S.set(s,!0),s},N=t=>"function"==typeof t&&S.has(t),A=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,k=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},P=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},O={},C={},$=`{{lit-${String(Math.random()).slice(2)}}}`,M=`\x3c!--${$}--\x3e`,V=new RegExp(`${$}|${M}`),T="$lit$";class j{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:c,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)R(e[t].name,T)&&n++;for(;n-- >0;){const e=c[a],s=L.exec(e)[2],n=s.toLowerCase()+T,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(V);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf($)>=0){const n=t.parentNode,i=e.split(V),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=I();else{const t=L.exec(o);null!==t&&R(t[2],T)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-T.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(I(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===$){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(I(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf($,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const R=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},H=t=>-1!==t.index,I=()=>document.createComment(""),L=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class q{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=A?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],H(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return A&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const W=` ${$} `;class B{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=L.exec(t);e+=null===o?t+(s?W:M):t.substr(0,o.index)+o[1]+o[2]+T+o[3]+$}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class U extends B{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),k(e,s.firstChild),t}}
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
 */const F=t=>null===t||!("object"==typeof t||"function"==typeof t),G=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class z{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new D(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(F(t)||!G(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class D{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===O||F(t)&&t===this.value||(this.value=t,N(t)||(this.committer.dirty=!0))}commit(){for(;N(this.value);){const t=this.value;this.value=O,t(this)}this.value!==O&&this.committer.commit()}}class J{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(I()),this.endNode=t.appendChild(I())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=I()),t.__insert(this.endNode=I())}insertAfterPart(t){t.__insert(this.startNode=I()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=O,t(this)}const t=this.__pendingValue;t!==O&&(F(t)?t!==this.value&&this.__commitText(t):t instanceof B?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):G(t)?this.__commitIterable(t):t===C?(this.value=C,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof q&&this.value.template===e)this.value.update(t.values);else{const s=new q(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new J(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){P(this.startNode.parentNode,t.nextSibling,this.endNode)}}class K{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=O,t(this)}if(this.__pendingValue===O)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=O}}class Z extends z{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new Q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Q extends D{}let X=!1;try{const t={get capture(){return X=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Y{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=O,t(this)}if(this.__pendingValue===O)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=tt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=O}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const tt=t=>t&&(X?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const et=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new Z(t,e.slice(1),s).parts}return"@"===i?[new Y(t,e.slice(1),n.eventContext)]:"?"===i?[new K(t,e.slice(1),s)]:new z(t,e,s).parts}handleTextExpression(t){return new J(t)}};
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
 */function st(t){let e=nt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},nt.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join($);return s=e.keyString.get(n),void 0===s&&(s=new j(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const nt=new Map,it=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ot=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(I(),n);s.insertBefore(I(),n);const o=new J(t.options);return o.insertAfterNode(i),o},rt=(t,e)=>(t.setValue(e),t.commit(),t),at=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&k(n,e.startNode,o,i)},ct=t=>{P(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ht=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},lt=new WeakMap,dt=new WeakMap,ut=E((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof J))throw new Error("repeat can only be used in text bindings");const i=lt.get(e)||[],o=dt.get(e)||[],r=[],a=[],c=[];let h,l,d=0;for(const e of t)c[d]=n?n(e,d):d,a[d]=s(e,d),d++;let u=0,p=i.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===c[f])r[f]=rt(i[u],a[f]),u++,f++;else if(o[p]===c[g])r[g]=rt(i[p],a[g]),p--,g--;else if(o[u]===c[g])r[g]=rt(i[u],a[g]),at(e,i[u],r[g+1]),u++,g--;else if(o[p]===c[f])r[f]=rt(i[p],a[f]),at(e,i[p],i[u]),p--,f++;else if(void 0===h&&(h=ht(c,f,g),l=ht(o,u,p)),h.has(o[u]))if(h.has(o[p])){const t=l.get(c[f]),s=void 0!==t?i[t]:null;if(null===s){const t=ot(e,i[u]);rt(t,a[f]),r[f]=t}else r[f]=rt(s,a[f]),at(e,s,i[u]),i[t]=null;f++}else ct(i[p]),p--;else ct(i[u]),u++;for(;f<=g;){const t=ot(e,r[g+1]);rt(t,a[f]),r[f++]=t}for(;u<=p;){const t=i[u++];null!==t&&ct(t)}lt.set(e,r),dt.set(e,c)}}),pt=new WeakMap,ft=E((t,e)=>s=>{const n=pt.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||pt.has(s)))return;s.setValue(e()),pt.set(s,Array.isArray(t)?Array.from(t):t)}),gt=E(t=>e=>{if(void 0===t&&e instanceof D){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let mt={html:(t,...e)=>new B(t,e,"html",et),svg:(t,...e)=>new U(t,e,"svg",et),render:(t,e,s)=>{let n=it.get(e);void 0===n&&(P(e,e.firstChild),it.set(e,n=new J(Object.assign({templateFactory:st},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:E,repeat:ut,guard:ft,ifDefined:gt};window.__litHtml?mt=window.__litHtml:window.__litHtml=mt;const{html:_t,svg:bt,render:vt,directive:yt,repeat:wt,guard:xt,ifDefined:St}=mt;class Et extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.__connectAttribute=this.__connectAttribute.bind(this),this.__disconnectAttribute=this.__disconnectAttribute.bind(this),this.__connectProperty=this.__connectProperty.bind(this),this.__disconnectProperty=this.__disconnectProperty.bind(this),this.__connectStore=this.__connectStore.bind(this),this.__disconnectStore=this.__disconnectStore.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,observedStores:n,adoptedStyleSheets:i}=new.target;e&&e.forEach(t=>{this.__connectAttribute(t,!0)}),s&&s.forEach(t=>{this.__connectProperty(t)}),n&&n.forEach(t=>{this.__connectStore(t)}),i&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=i:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(i))}setState(t){Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return _t`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(vt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}__connectAttribute(t,e=!1){const s=e?l(t):t,n=e?t:h(s);if("function"==typeof this[s])throw"Don't use attribute with the same name as native methods";if(void 0!==this[s])return;const i=this.constructor;i.observedAttributes||(i.observedAttributes=[]),i.observedAttributes.push(n),Object.defineProperty(this,s,{configurable:!0,get(){return this.getAttribute(n)||""},set(t){null===t?this.removeAttribute(n):this.setAttribute(n,t)}})}connectAttribute(t,e=!1){this.__connectAttribute(t,e)}__disconnectAttribute(t,e=!1){const s=e?l(t):t,n=e?t:h(s);Object.defineProperty(this,s,{configurable:!0,enumerable:!0,writable:!0});const i=this.constructor;i.observedAttributes=d(i.observedAttributes,[n])}disconnectAttribute(t,e=!1){this.__disconnectAttribute(t,e)}__connectProperty(t){if(t in this)return;const e=this.constructor;e.observedPropertys||(e.observedPropertys=[]),e.observedPropertys.push(t);let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(e){e!==s&&(s=e,this.__isMounted&&(this.propertyChanged(t,s,e),i(this.__update)))}})}connectProperty(t){this.__connectProperty(t)}__disconnectProperty(t){Object.defineProperty(this,t,{configurable:!0,enumerable:!0,writable:!0});const e=this.constructor;e.observedPropertys=d(e.observedPropertys,[t])}disconnectPropertys(t){this.__disconnectProperty(t)}__connectStore(t){if(!t[u])throw new Error("`observedStores` only support store module");const e=this.constructor;e.observedStores||(e.observedStores=[]),e.observedStores.push(t),function(t,e){t[u].add(e)}(t,this.__update)}connectStore(t){this.__connectStore(t)}__disconnectStore(t){g(t,this.__update);const e=this.constructor;e.observedStores=d(e.observedStores,[t])}disconnectStore(t){this.__disconnectStore(t)}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{g(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class Nt extends Et{connectedCallback(){this.willMount(),vt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const At=new o;let kt=!1;const Pt=()=>{window.requestAnimationFrame((function t(e){const s=At.get();s&&(s(),performance.now()-e<16)?t(e):kt&&Pt()}))};At.addEventListener("start",()=>{kt=!0,Pt()}),At.addEventListener("end",()=>kt=!1);const Ot=customElements.define.bind(customElements);customElements.define=function(t,e,s){customElements.get(t)||Ot(t,e,s)};const Ct=Symbol("open mark");function $t(t){var e;return(e=class extends Nt{constructor(){super(),this.closeHandle=this.closeHandle.bind(this)}static get isOpen(){return this.store[Ct]}static get observedStores(){return[x.historyState,this.store]}static open(t){const e=()=>f(this.store,Object.assign({[Ct]:!0},t));e(),x.pushState({open:e,close:this.close.bind(this),shouldClose:this.shouldClose.bind(this)})}static close(){f(this.store,Object.assign({[Ct]:!1},t))}static shouldClose(){return!0}closeHandle(){x.back()}render(){return _t``}}).store=p(Object.assign({[Ct]:!1},t)),e}class Mt extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Vt(t){return new Mt(t)}function Tt(t,e){return!!e.match(Vt(t))}function jt(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}class Rt extends Nt{constructor(){super();const{path:t,query:e}=x.location,s=t+e;this.href=s}static getParams(){if(Rt.currentRoute)return function(t,e){const s=Vt(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(Rt.currentRoute.pattern,x.location.path)}initPage(){const{list:t,currentIndex:e}=x.historyState;Rt.currentRoute&&Rt.currentRoute.title&&Rt.currentRoute.title!==t[e].title&&(t.splice(e,1,Object.assign(Object.assign({},t[e]),{title:Rt.currentRoute.title})),f(x.historyState,{list:t}))}shouldUpdate(){const{path:t,query:e}=x.location,s=t+e;return t+e!==this.href&&(this.href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();let t,e;Rt.currentRoute=null,e=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of e){const{pattern:e}=s;if("*"===e)t=s;else if(Tt(e,x.location.path)){Rt.currentRoute=s;break}}return Rt.currentRoute||(Rt.currentRoute=t),Rt.currentRoute?Rt.currentRoute.redirect?(x.replace({path:Rt.currentRoute.redirect}),this.callback()):_t`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Rt.currentRoute.content}
    `:this.callback()}callback(){return Rt.currentRoute=null,_t``}}Rt.observedPropertys=["routes"],Rt.observedStores=[x.historyState],customElements.define("gem-route",Rt);class Ht extends Nt{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:i}=x.location;s+n+i!==e&&(t.stopPropagation(),this.route?x.pushWithoutCloseHandle(function(t,e){const s=jt(t,e);return Object.assign({path:s},e)}(this.route,this.options)):x.pushWithoutCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options?this.options.query:"",e=this.options?this.options.hash:"";return jt(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(){const{path:t,query:e,hash:s}=x.location;return this.pattern&&Tt(this.pattern,t)||t+e+s===this.getHref()?this.setAttribute("active",""):this.removeAttribute("active"),_t`
      <slot></slot>
    `}}Ht.observedAttributes=["href","path","query","hash","pattern"],Ht.observedStores=[x.historyState],Ht.observedPropertys=["route","options"],customElements.define("gem-link",Ht);class It extends($t({content:_t``})){render(){return _t`
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
      <div class="root" ?hidden=${!It.isOpen}>
        <div class="body">
          <h2>hello.</h2>
        </div>
      </div>
    `}}customElements.define("app-dialog1",It);class Lt extends($t({content:_t``})){static shouldClose(){return confirm("confirm close dialog?")}openModal(){It.open({content:_t`
        213
      `})}render(){return _t`
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
      <div class="root" ?hidden=${!Lt.isOpen}>
        <div class="body">
          <h2>hello.</h2>
          <div>${Lt.store.content}</div>
          <button @click=${this.closeHandle}>x</button>
          <button @click=${this.openModal}>创建另一个 dialog</button>
          <app-dialog1></app-dialog1>
        </div>
      </div>
    `}}customElements.define("app-dialog",Lt);class qt extends Nt{constructor(){super(...arguments),this.clickHandle=()=>Lt.open({content:_t`
        <div>dialog</div>
        <gem-link path="/hi" style="cursor: pointer; color: blue">replace route</gem-link>
      `})}render(){return _t`
      <style>
        :host {
          font-size: x-large;
        }
      </style>
      <button @click="${this.clickHandle}">open dialog</button>
      <app-dialog></app-dialog>
    `}}customElements.define("app-root",qt),document.body.append(new qt)}]);
//# sourceMappingURL=bundle.22ef2ec32d0e613fbf6a.js.map