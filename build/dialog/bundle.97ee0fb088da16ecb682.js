!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gem/build/",s(s.s=0)}([function(t,e,s){"use strict";var n,o;s.r(e);const i=new Set;function r(t){i.size||globalThis.queueMicrotask(()=>{i.forEach(t=>t()),i.clear()}),i.delete(t),i.add(t)}class a extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,a.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var l;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(l||(l={}));class h{constructor(){this[n]={},this[o]={}}}n=l.LOCALSTORAGE,o=l.SESSIONSTORAGE;class c{constructor(){this.cache=new h}get(t,e){if(t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,l.LOCALSTORAGE)}getSession(t){return this.get(t,l.SESSIONSTORAGE)}set(t,e,s){return this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,l.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,l.SESSIONSTORAGE)}}class u extends URLSearchParams{constructor(t){if(t instanceof u)return t;super(t),Object.setPrototypeOf(this,u.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function d(){}const p="gem@storeHandlesKey";function f(t){const e=t;return Object.defineProperty(e,p,{enumerable:!1,value:new Set,writable:!0}),e}function g(t,e){Object.assign(t,e),t[p].forEach(t=>{r(t)})}const m=f({list:[{}],currentIndex:0}),v=new WeakMap,_=new WeakMap,b=new WeakMap;function y(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const o=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return v.set(o,e),_.set(o,s),b.set(o,n),o}let w="",x={historyState:m,get basePath(){return w},set basePath(t){const{list:e,currentIndex:s}=m;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),g(m,{}),w=t},get location(){const{list:t,currentIndex:e}=m,s=t[e];return{get query(){return new u(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e="",open:s,close:n,shouldClose:o}=t,i=t.query||"",r=t.hash||"",a=t.title||"",l=y(t.data||{},s,n,o);window.history.pushState(l,a,x.basePath+e+new u(i)+r);const{list:h,currentIndex:c}=m;r!==h[c].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const d=h.slice(0,c+1).concat({state:l,title:a,path:e,query:i,hash:r});g(m,{list:d,currentIndex:d.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=m,{state:n}=e[s];if(n.$close){const e=_.get(n);e&&e(),x.replace(t)}else x.push(t)},pushState(t){const{list:e,currentIndex:s}=m,{path:n,query:o,hash:i}=e[s];x.push(Object.assign({path:n,query:o,hash:i},t))},replace(t){const{path:e="",open:s,close:n,shouldClose:o}=t,i=t.query||"",r=t.hash||"",a=t.data||{},l=t.title||"",h=y(a,s,n,o);window.history.replaceState(h,l,x.basePath+e+new u(i)+r);const{list:c,currentIndex:d}=m;r!==c[d].hash&&window.dispatchEvent(new CustomEvent("hashchange")),c.splice(d,1,{state:h,title:l,path:e,query:i,hash:r}),g(m,{list:c})},replaceState(t){const{list:e,currentIndex:s}=m,{path:n,query:o,hash:i}=e[s];x.replace(Object.assign({path:n,query:o,hash:i},t))}};if(!!window.__gemHistory){x=window.__gemHistory;const t=x.basePath;Object.defineProperty(x,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=x,window.history.state)window.history.state.$close&&x.back();else{const{pathname:t,search:e,hash:s}=window.location;x.replace({path:t,query:e,hash:s})}const t=new c,e="gem@historyStateList";g(m,t.getSession(e)),window.addEventListener("beforeunload",()=>{t.setSession(e,m)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=m,{state:o}=e[n],i=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===i)return;const{state:r}=e[i];if(i>n&&r.$open){const t=v.get(r);t&&t()}else if(o.$close){const t=_.get(o),e=b.get(o);if(e&&!e())return s=!0,void x.forward();t?t():(s=!0,x.back())}g(m,{currentIndex:i})})}
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
 */const S=new WeakMap,E=t=>(...e)=>{const s=t(...e);return S.set(s,!0),s},N=t=>"function"==typeof t&&S.has(t),O=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,k=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},C=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},A={},P={},$=`{{lit-${String(Math.random()).slice(2)}}}`,T=`\x3c!--${$}--\x3e`,R=new RegExp(`${$}|${T}`),M="$lit$";class V{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let i=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=o.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)j(e[t].name,M)&&n++;for(;n-- >0;){const e=l[a],s=I.exec(e)[2],n=s.toLowerCase()+M,o=t.getAttribute(n);t.removeAttribute(n);const i=o.split(R);this.parts.push({type:"attribute",index:r,name:s,strings:i}),a+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf($)>=0){const n=t.parentNode,o=e.split(R),i=o.length-1;for(let e=0;e<i;e++){let s,i=o[e];if(""===i)s=L();else{const t=I.exec(i);null!==t&&j(t[2],M)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-M.length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===o[i]?(n.insertBefore(L(),t),s.push(t)):t.data=o[i],a+=i}}else if(8===t.nodeType)if(t.data===$){const e=t.parentNode;null!==t.previousSibling&&r!==i||(r++,e.insertBefore(L(),t)),i=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf($,e+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const j=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},H=t=>-1!==t.index,L=()=>document.createComment(""),I=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class q{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=O?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,i=0,r=0,a=n.nextNode();for(;i<s.length;)if(o=s[i],H(o)){for(;r<o.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));i++}else this.__parts.push(void 0),i++;return O&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const W=` ${$} `;class D{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const i=I.exec(t);e+=null===i?t+(s?W:T):t.substr(0,i.index)+i[1]+i[2]+M+i[3]+$}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class U extends D{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),k(e,s.firstChild),t}}
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
 */const B=t=>null===t||!("object"==typeof t||"function"==typeof t),G=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class F{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new z(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(B(t)||!G(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===A||B(t)&&t===this.value||(this.value=t,N(t)||(this.committer.dirty=!0))}commit(){for(;N(this.value);){const t=this.value;this.value=A,t(this)}this.value!==A&&this.committer.commit()}}class J{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(L()),this.endNode=t.appendChild(L())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=L()),t.__insert(this.endNode=L())}insertAfterPart(t){t.__insert(this.startNode=L()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=A,t(this)}const t=this.__pendingValue;t!==A&&(B(t)?t!==this.value&&this.__commitText(t):t instanceof D?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):G(t)?this.__commitIterable(t):t===P?(this.value=P,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof q&&this.value.template===e)this.value.update(t.values);else{const s=new q(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const o of t)s=e[n],void 0===s&&(s=new J(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(o),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){C(this.startNode.parentNode,t.nextSibling,this.endNode)}}class K{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=A,t(this)}if(this.__pendingValue===A)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=A}}class Z extends F{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new Q(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Q extends z{}let X=!1;try{const t={get capture(){return X=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Y{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=A,t(this)}if(this.__pendingValue===A)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=tt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=A}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const tt=t=>t&&(X?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const et=new class{handleAttributeExpressions(t,e,s,n){const o=e[0];if("."===o){return new Z(t,e.slice(1),s).parts}return"@"===o?[new Y(t,e.slice(1),n.eventContext)]:"?"===o?[new K(t,e.slice(1),s)]:new F(t,e,s).parts}handleTextExpression(t){return new J(t)}};
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
 */function st(t){let e=nt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},nt.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join($);return s=e.keyString.get(n),void 0===s&&(s=new V(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const nt=new Map,ot=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const it=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,o=s.insertBefore(L(),n);s.insertBefore(L(),n);const i=new J(t.options);return i.insertAfterNode(o),i},rt=(t,e)=>(t.setValue(e),t.commit(),t),at=(t,e,s)=>{const n=t.startNode.parentNode,o=s?s.startNode:t.endNode,i=e.endNode.nextSibling;i!==o&&k(n,e.startNode,i,o)},lt=t=>{C(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ht=(t,e,s)=>{const n=new Map;for(let o=e;o<=s;o++)n.set(t[o],o);return n},ct=new WeakMap,ut=new WeakMap,dt=E((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof J))throw new Error("repeat can only be used in text bindings");const o=ct.get(e)||[],i=ut.get(e)||[],r=[],a=[],l=[];let h,c,u=0;for(const e of t)l[u]=n?n(e,u):u,a[u]=s(e,u),u++;let d=0,p=o.length-1,f=0,g=a.length-1;for(;d<=p&&f<=g;)if(null===o[d])d++;else if(null===o[p])p--;else if(i[d]===l[f])r[f]=rt(o[d],a[f]),d++,f++;else if(i[p]===l[g])r[g]=rt(o[p],a[g]),p--,g--;else if(i[d]===l[g])r[g]=rt(o[d],a[g]),at(e,o[d],r[g+1]),d++,g--;else if(i[p]===l[f])r[f]=rt(o[p],a[f]),at(e,o[p],o[d]),p--,f++;else if(void 0===h&&(h=ht(l,f,g),c=ht(i,d,p)),h.has(i[d]))if(h.has(i[p])){const t=c.get(l[f]),s=void 0!==t?o[t]:null;if(null===s){const t=it(e,o[d]);rt(t,a[f]),r[f]=t}else r[f]=rt(s,a[f]),at(e,s,o[d]),o[t]=null;f++}else lt(o[p]),p--;else lt(o[d]),d++;for(;f<=g;){const t=it(e,r[g+1]);rt(t,a[f]),r[f++]=t}for(;d<=p;){const t=o[d++];null!==t&&lt(t)}ct.set(e,r),ut.set(e,l)}}),pt=new WeakMap,ft=E((t,e)=>s=>{const n=pt.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||pt.has(s)))return;s.setValue(e()),pt.set(s,Array.isArray(t)?Array.from(t):t)}),gt=E(t=>e=>{if(void 0===t&&e instanceof z){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let mt={html:(t,...e)=>new D(t,e,"html",et),svg:(t,...e)=>new U(t,e,"svg",et),render:(t,e,s)=>{let n=ot.get(e);void 0===n&&(C(e,e.firstChild),ot.set(e,n=new J(Object.assign({templateFactory:st},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:E,repeat:dt,guard:ft,ifDefined:gt};window.__litHtml?mt=window.__litHtml:window.__litHtml=mt;const{html:vt,svg:_t,render:bt,directive:yt,repeat:wt,guard:xt,ifDefined:St}=mt;class Et extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:o,adoptedStyleSheets:i}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=d}),o&&o.forEach(t=>{if(!t[p])throw new Error("`observedStores` only support store module");!function(t,e){t[p].add(e)}(t,this.__update)}),i&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=i:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(i))}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),r(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),r(this.__update)}willMount(){}render(){return vt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(bt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),r(this.__update))}__connectedCallback(){bt(this.render(),this.__renderRoot);const t=this.mounted();t&&(this.__unmountCallback=t),this.__isMounted=!0}disconnectedCallback(){var t;const e=this.constructor;e.observedStores&&e.observedStores.forEach(t=>{!function(t,e){t[p].delete(e)}(t,this.__update)}),null===(t=this.__unmountCallback)||void 0===t||t.call(this),this.unmounted(),this.__isMounted=!1}}class Nt extends Et{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ot=new a;let kt=!1;const Ct=()=>{window.requestAnimationFrame((function t(e){const s=Ot.get();s&&(s(),performance.now()-e<16)?t(e):kt&&Ct()}))};Ot.addEventListener("start",()=>{kt=!0,Ct()}),Ot.addEventListener("end",()=>kt=!1);const At=customElements.define.bind(customElements);function Pt(t,e){const s=t.constructor;s.observedAttributes||(s.observedAttributes=[]),s.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function $t(t,e){const s=t.constructor;s.observedPropertys||(s.observedPropertys=[]),s.observedPropertys.push(e)}customElements.define=function(t,e,s){customElements.get(t)||At(t,e,s)};const Tt=Symbol("open mark");function Rt(t){var e;return(e=class extends Nt{constructor(){super(),this.closeHandle=this.closeHandle.bind(this)}static get isOpen(){return this.store[Tt]}static get observedStores(){return[x.historyState,this.store]}static open(t){const e=()=>g(this.store,Object.assign({[Tt]:!0},t));e(),x.pushState({open:e,close:this.close.bind(this),shouldClose:this.shouldClose.bind(this)})}static close(){g(this.store,Object.assign({[Tt]:!1},t))}static shouldClose(){return!0}closeHandle(){x.back()}render(){return vt``}}).store=f(Object.assign({[Tt]:!1},t)),e}class Mt extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Vt(t){return new Mt(t)}function jt(t,e){return!!e.match(Vt(t))}function Ht(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}class Lt extends Nt{constructor(){super();const{path:t,query:e}=x.location,s=t+e;this.href=s}static getParams(){if(Lt.currentRoute)return function(t,e){const s=Vt(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(Lt.currentRoute.pattern,x.location.path)}initPage(){const{list:t,currentIndex:e}=x.historyState;Lt.currentRoute&&Lt.currentRoute.title&&Lt.currentRoute.title!==t[e].title&&(t.splice(e,1,Object.assign(Object.assign({},t[e]),{title:Lt.currentRoute.title})),g(x.historyState,{list:t}))}shouldUpdate(){const{path:t,query:e}=x.location,s=t+e;return t+e!==this.href&&(this.href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();Lt.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of t){const{pattern:t}=s;if("*"===t)e=s;else if(jt(t,x.location.path)){Lt.currentRoute=s;break}}return Lt.currentRoute||(Lt.currentRoute=e),Lt.currentRoute?Lt.currentRoute.redirect?(x.replace({path:Lt.currentRoute.redirect}),this.callback()):vt`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Lt.currentRoute.content}
    `:this.callback()}callback(){return Lt.currentRoute=null,vt``}}Lt.observedPropertys=["routes"],Lt.observedStores=[x.historyState],customElements.define("gem-route",Lt);var It=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};let qt=class extends Nt{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:o}=x.location;s+n+o!==e&&(t.stopPropagation(),this.route?x.pushWithoutCloseHandle(function(t,e){const s=Ht(t,e);return Object.assign({path:s},e)}(this.route,this.options)):x.pushWithoutCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.preventDefault=t=>{t.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options&&this.options.query||"",e=this.options&&this.options.hash||"";return Ht(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(){const{path:t,query:e,hash:s}=x.location,n=this.pattern&&jt(this.pattern,t),o=this.getHref();return n||t+e+s===o?this.setAttribute("active",""):this.removeAttribute("active"),vt`
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
    `}};var Wt,Dt;It([Pt],qt.prototype,"href",void 0),It([Pt],qt.prototype,"path",void 0),It([Pt],qt.prototype,"query",void 0),It([Pt],qt.prototype,"hash",void 0),It([Pt],qt.prototype,"pattern",void 0),It([$t],qt.prototype,"route",void 0),It([$t],qt.prototype,"options",void 0),qt=It([(Dt="gem-link",function(t){customElements.define(Dt,t)}),(Wt=x.historyState,function(t){const e=t;e.observedStores||(e.observedStores=[]),e.observedStores.push(Wt)})],qt);class Ut extends(Rt({content:vt``})){render(){return vt`
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
      <div class="root" ?hidden=${!Ut.isOpen}>
        <div class="body">
          <h2>hello.</h2>
        </div>
      </div>
    `}}customElements.define("app-dialog1",Ut);class Bt extends(Rt({content:vt``})){static shouldClose(){return confirm("confirm close dialog?")}openModal(){Ut.open({content:vt`
        213
      `})}render(){return vt`
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
      <div class="root" ?hidden=${!Bt.isOpen}>
        <div class="body">
          <h2>hello.</h2>
          <div>${Bt.store.content}</div>
          <button @click=${this.closeHandle}>x</button>
          <button @click=${this.openModal}>创建另一个 dialog</button>
          <app-dialog1></app-dialog1>
        </div>
      </div>
    `}}customElements.define("app-dialog",Bt);class Gt extends Nt{constructor(){super(...arguments),this.clickHandle=()=>Bt.open({content:vt`
        <div>dialog</div>
        <gem-link path="/hi" style="cursor: pointer; color: blue">replace route</gem-link>
      `})}render(){return vt`
      <style>
        :host {
          font-size: x-large;
        }
      </style>
      <button @click="${this.clickHandle}">open dialog</button>
      <app-dialog></app-dialog>
    `}}customElements.define("app-root",Gt),document.body.append(new Gt)}]);
//# sourceMappingURL=bundle.97ee0fb088da16ecb682.js.map