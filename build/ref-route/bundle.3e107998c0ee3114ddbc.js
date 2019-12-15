!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gem/build/",s(s.s=0)}([function(t,e,s){"use strict";var n,i;s.r(e);const o=new Set;function r(t){o.size||window.queueMicrotask(()=>{o.forEach(t=>t()),o.clear()}),o.delete(t),o.add(t)}class a extends Image{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,a.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var h;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(h||(h={}));class l{constructor(){this[n]={},this[i]={}}}n=h.LOCALSTORAGE,i=h.SESSIONSTORAGE;class c{constructor(){this.cache=new l}get(t,e){if(t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,h.LOCALSTORAGE)}getSession(t){return this.get(t,h.SESSIONSTORAGE)}set(t,e,s){return this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,h.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,h.SESSIONSTORAGE)}}class u extends URLSearchParams{constructor(t){if(t instanceof u)return t;super(t),Object.setPrototypeOf(this,u.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function d(){}const p="gem@storeHandlesKey";function m(t){const e=t;return Object.defineProperty(e,p,{enumerable:!1,value:new Set,writable:!0}),e}function f(t,e){Object.assign(t,e),t[p].forEach(t=>{r(t)})}const g=m({list:[{}],currentIndex:0}),_=new WeakMap,v=new WeakMap,w=new WeakMap;function y(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return _.set(i,e),v.set(i,s),w.set(i,n),i}let b="",x={historyState:g,get basePath(){return b},set basePath(t){const{list:e,currentIndex:s}=g;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),f(g,{}),b=t},get location(){const{list:t,currentIndex:e}=g,s=t[e];return{get query(){return new u(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e="",open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",h=y(t.data||{},s,n,i);window.history.pushState(h,a,x.basePath+e+new u(o)+r);const{list:l,currentIndex:c}=g;r!==l[c].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const d=l.slice(0,c+1).concat({state:h,title:a,path:e,query:o,hash:r});f(g,{list:d,currentIndex:d.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=g,{state:n}=e[s];if(n.$close){const e=v.get(n);e&&e(),x.replace(t)}else x.push(t)},pushState(t){const{list:e,currentIndex:s}=g,{path:n,query:i,hash:o}=e[s];x.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e="",open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},h=t.title||"",l=y(a,s,n,i);window.history.replaceState(l,h,x.basePath+e+new u(o)+r);const{list:c,currentIndex:d}=g;r!==c[d].hash&&window.dispatchEvent(new CustomEvent("hashchange")),c.splice(d,1,{state:l,title:h,path:e,query:o,hash:r}),f(g,{list:c})},replaceState(t){const{list:e,currentIndex:s}=g,{path:n,query:i,hash:o}=e[s];x.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){x=window.__gemHistory;const t=x.basePath;Object.defineProperty(x,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=x,window.history.state)window.history.state.$close&&x.back();else{const{pathname:t,search:e,hash:s}=window.location;x.replace({path:t,query:e,hash:s})}const t=new c,e="gem@historyStateList";f(g,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,g)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=g,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=_.get(r);t&&t()}else if(i.$close){const t=v.get(i),e=w.get(i);if(e&&!e())return s=!0,void x.forward();t?t():(s=!0,x.back())}f(g,{currentIndex:o})})}
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
 */const S=new WeakMap,E=t=>(...e)=>{const s=t(...e);return S.set(s,!0),s},N=t=>"function"==typeof t&&S.has(t),k=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,O=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},A=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},C={},P={},$=`{{lit-${String(Math.random()).slice(2)}}}`,T=`\x3c!--${$}--\x3e`,V=new RegExp(`${$}|${T}`),M="$lit$";class R{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:h,values:{length:l}}=t;for(;a<l;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)I(e[t].name,M)&&n++;for(;n-- >0;){const e=h[a],s=H.exec(e)[2],n=s.toLowerCase()+M,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(V);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf($)>=0){const n=t.parentNode,i=e.split(V),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=j();else{const t=H.exec(o);null!==t&&I(t[2],M)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-M.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(j(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===$){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(j(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf($,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const I=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},L=t=>-1!==t.index,j=()=>document.createComment(""),H=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class q{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=k?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],L(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return k&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const W=` ${$} `;class B{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=H.exec(t);e+=null===o?t+(s?W:T):t.substr(0,o.index)+o[1]+o[2]+M+o[3]+$}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class G extends B{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),O(e,s.firstChild),t}}
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
 */const U=t=>null===t||!("object"==typeof t||"function"==typeof t),F=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class D{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new z(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(U(t)||!F(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===C||U(t)&&t===this.value||(this.value=t,N(t)||(this.committer.dirty=!0))}commit(){for(;N(this.value);){const t=this.value;this.value=C,t(this)}this.value!==C&&this.committer.commit()}}class J{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(j()),this.endNode=t.appendChild(j())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=j()),t.__insert(this.endNode=j())}insertAfterPart(t){t.__insert(this.startNode=j()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}const t=this.__pendingValue;t!==C&&(U(t)?t!==this.value&&this.__commitText(t):t instanceof B?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):F(t)?this.__commitIterable(t):t===P?(this.value=P,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof q&&this.value.template===e)this.value.update(t.values);else{const s=new q(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new J(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){A(this.startNode.parentNode,t.nextSibling,this.endNode)}}class K{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}if(this.__pendingValue===C)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=C}}class Q extends D{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new X(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class X extends z{}let Y=!1;try{const t={get capture(){return Y=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Z{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=C,t(this)}if(this.__pendingValue===C)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=tt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=C}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const tt=t=>t&&(Y?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const et=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new Q(t,e.slice(1),s).parts}return"@"===i?[new Z(t,e.slice(1),n.eventContext)]:"?"===i?[new K(t,e.slice(1),s)]:new D(t,e,s).parts}handleTextExpression(t){return new J(t)}};
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
 */function st(t){let e=nt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},nt.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join($);return s=e.keyString.get(n),void 0===s&&(s=new R(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const nt=new Map,it=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ot=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(j(),n);s.insertBefore(j(),n);const o=new J(t.options);return o.insertAfterNode(i),o},rt=(t,e)=>(t.setValue(e),t.commit(),t),at=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&O(n,e.startNode,o,i)},ht=t=>{A(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},lt=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},ct=new WeakMap,ut=new WeakMap,dt=E((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof J))throw new Error("repeat can only be used in text bindings");const i=ct.get(e)||[],o=ut.get(e)||[],r=[],a=[],h=[];let l,c,u=0;for(const e of t)h[u]=n?n(e,u):u,a[u]=s(e,u),u++;let d=0,p=i.length-1,m=0,f=a.length-1;for(;d<=p&&m<=f;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===h[m])r[m]=rt(i[d],a[m]),d++,m++;else if(o[p]===h[f])r[f]=rt(i[p],a[f]),p--,f--;else if(o[d]===h[f])r[f]=rt(i[d],a[f]),at(e,i[d],r[f+1]),d++,f--;else if(o[p]===h[m])r[m]=rt(i[p],a[m]),at(e,i[p],i[d]),p--,m++;else if(void 0===l&&(l=lt(h,m,f),c=lt(o,d,p)),l.has(o[d]))if(l.has(o[p])){const t=c.get(h[m]),s=void 0!==t?i[t]:null;if(null===s){const t=ot(e,i[d]);rt(t,a[m]),r[m]=t}else r[m]=rt(s,a[m]),at(e,s,i[d]),i[t]=null;m++}else ht(i[p]),p--;else ht(i[d]),d++;for(;m<=f;){const t=ot(e,r[f+1]);rt(t,a[m]),r[m++]=t}for(;d<=p;){const t=i[d++];null!==t&&ht(t)}ct.set(e,r),ut.set(e,h)}}),pt=new WeakMap,mt=E((t,e)=>s=>{const n=pt.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||pt.has(s)))return;s.setValue(e()),pt.set(s,Array.isArray(t)?Array.from(t):t)}),ft=E(t=>e=>{if(void 0===t&&e instanceof z){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let gt={html:(t,...e)=>new B(t,e,"html",et),svg:(t,...e)=>new G(t,e,"svg",et),render:(t,e,s)=>{let n=it.get(e);void 0===n&&(A(e,e.firstChild),it.set(e,n=new J(Object.assign({templateFactory:st},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:E,repeat:dt,guard:mt,ifDefined:ft};window.__litHtml?gt=window.__litHtml:window.__litHtml=gt;const{html:_t,svg:vt,render:wt,directive:yt,repeat:bt,guard:xt,ifDefined:St}=gt;class Et extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=d}),i&&i.forEach(t=>{if(!t[p])throw new Error("`observedStores` only support store module");!function(t,e){t[p].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),r(this.__update))}}})}setState(t){Object.assign(this.state,t),r(this.__update)}willMount(){}render(){return _t`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(wt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),r(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{!function(t,e){t[p].delete(e)}(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class Nt extends Et{connectedCallback(){this.willMount(),wt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const kt=new a;let Ot=!1;const At=()=>{window.requestAnimationFrame((function t(e){const s=kt.get();s&&(s(),performance.now()-e<16)?t(e):Ot&&At()}))};kt.addEventListener("start",()=>{Ot=!0,At()}),kt.addEventListener("end",()=>Ot=!1);const Ct=customElements.define.bind(customElements);customElements.define=function(t,e,s){customElements.get(t)||Ct(t,e,s)};class Pt extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function $t(t){return new Pt(t)}function Tt(t,e){return!!e.match($t(t))}function Vt(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}function Mt(t,e){const s=Vt(t,e);return Object.assign({path:s},e)}class Rt extends Nt{constructor(){super();const{path:t,query:e}=x.location,s=t+e;this.href=s}static getParams(){if(Rt.currentRoute)return function(t,e){const s=$t(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(Rt.currentRoute.pattern,x.location.path)}initPage(){const{list:t,currentIndex:e}=x.historyState;Rt.currentRoute&&Rt.currentRoute.title&&Rt.currentRoute.title!==t[e].title&&(t.splice(e,1,Object.assign(Object.assign({},t[e]),{title:Rt.currentRoute.title})),f(x.historyState,{list:t}))}shouldUpdate(){const{path:t,query:e}=x.location,s=t+e;return t+e!==this.href&&(this.href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();Rt.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of t){const{pattern:t}=s;if("*"===t)e=s;else if(Tt(t,x.location.path)){Rt.currentRoute=s;break}}return Rt.currentRoute||(Rt.currentRoute=e),Rt.currentRoute?Rt.currentRoute.redirect?(x.replace({path:Rt.currentRoute.redirect}),this.callback()):_t`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Rt.currentRoute.content}
    `:this.callback()}callback(){return Rt.currentRoute=null,_t``}}Rt.observedPropertys=["routes"],Rt.observedStores=[x.historyState],customElements.define("gem-route",Rt);class It extends Nt{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:i}=x.location;s+n+i!==e&&(t.stopPropagation(),this.route?x.pushWithoutCloseHandle(Mt(this.route,this.options)):x.pushWithoutCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options?this.options.query:"",e=this.options?this.options.hash:"";return Vt(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(){const{path:t,query:e,hash:s}=x.location;return this.pattern&&Tt(this.pattern,t)||t+e+s===this.getHref()?this.setAttribute("active",""):this.removeAttribute("active"),_t`
      <slot></slot>
    `}}It.observedAttributes=["href","path","query","hash","pattern"],It.observedStores=[x.historyState],It.observedPropertys=["route","options"],customElements.define("gem-link",It);const Lt={home:{pattern:"/",get content(){return _t`
        <style>
          gem-link {
            display: block;
            color: blue;
          }
          gem-link[active] {
            color: inherit;
          }
        </style>
        current route: home page, click navigation to a page
        <gem-link .route=${Lt.a} .options=${{params:{b:1}}}>a page link, params: {a: 1}</gem-link>
      `}},a:{pattern:"/a/:b",get content(){return _t`
        <style>
          gem-link {
            display: block;
            color: blue;
          }
          gem-link[active] {
            color: inherit;
          }
        </style>
        current route: /a/:b, click navigation to home page
        <gem-link .route=${Lt.a} .options=${{params:{b:1},query:"?a=1"}}>a page link, query: ?a=1</gem-link>
      `}}};class jt extends Nt{constructor(){super(...arguments),this.onclick=()=>{Rt.currentRoute===Lt.home?x.push(Mt(Lt.a,{params:{b:String(Date.now())}})):x.push(Mt(Lt.home))}}render(){return _t`
      <main>
        <gem-route .routes=${Lt}></gem-route>
      </main>
    `}}customElements.define("app-root",jt),document.body.append(new jt)}]);
//# sourceMappingURL=bundle.3e107998c0ee3114ddbc.js.map