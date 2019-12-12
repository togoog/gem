!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||window.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class o extends EventTarget{constructor(){super(...arguments),this.currentId=0,this.count=0,this.pool=new Map}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var r;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(r||(r={}));class a{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,r.LOCALSTORAGE)}getSession(t){return this.get(t,r.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,r.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,r.SESSIONSTORAGE)}}class l extends URLSearchParams{constructor(t){if(t instanceof l)return t;"string"==typeof t?super(t):t?(super(),Object.keys(t).forEach(e=>{this.append(e,t[e])})):super()}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}function h(t,...e){return t.reduce((t,s,n)=>t+(e[n-1]||"")+s)}const c=new WeakMap;function d(t=5,e="0123456789abcdefghijklmnopqrstuvwxyz"){const s=e.length;let n="";for(let i=0;i<t;i++)n+=e[Math.floor(Math.random()*s)];return n}function u(t,e){const s=[];let n=`& {${t.replace(new RegExp("&.*{(.*)}","gs"),(function(t){return s.push(t),""}))}}`+s.join("");return"tag"!==e&&(n=n.replace(/&/g,"class"===e?".&":"#&")),{str:n,key:d(),type:e}}const p=(t,...e)=>{return u(h(t,...e),"class")},f=(t,...e)=>{return u(h(t,...e),"id")},m=(t,...e)=>{return u(h(t,...e),"tag")};function g(){}const _="gem@storeHandlesKey";function w(t){const e=t;return Object.defineProperty(e,_,{enumerable:!1,value:new Set,writable:!0}),e}function v(t,e){Object.assign(t,e),t[_].forEach(t=>{i(t)})}const y=w({list:[{}],currentIndex:0}),b=new WeakMap,x=new WeakMap,S=new WeakMap;function E(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return b.set(i,e),x.set(i,s),S.set(i,n),i}let N="",A={historyState:y,get basePath(){return N},set basePath(t){const{list:e,currentIndex:s}=y;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),v(y,{}),N=t},get location(){const{list:t,currentIndex:e}=y,s=t[e];return{get query(){return new l(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",h=E(t.data||{},s,n,i);window.history.pushState(h,a,A.basePath+e+new l(o)+r);const{list:c,currentIndex:d}=y;r!==c[d].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const u=c.slice(0,d+1).concat({state:h,title:a,path:e,query:o,hash:r});v(y,{list:u,currentIndex:u.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=y,{state:n}=e[s];if(n.$close){x.get(n)(),A.replace(t)}else A.push(t)},pushState(t){const{list:e,currentIndex:s}=y,{path:n,query:i,hash:o}=e[s];A.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},h=t.title||"",c=E(a,s,n,i);window.history.replaceState(c,h,A.basePath+e+new l(o)+r);const{list:d,currentIndex:u}=y;r!==d[u].hash&&window.dispatchEvent(new CustomEvent("hashchange")),d.splice(u,1,{state:c,title:h,path:e,query:o,hash:r}),v(y,{list:d})},replaceState(t){const{list:e,currentIndex:s}=y,{path:n,query:i,hash:o}=e[s];A.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){A=window.__gemHistory;const t=A.basePath;Object.defineProperty(A,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=A,window.history.state)window.history.state.$close&&A.back();else{const{pathname:t,search:e,hash:s}=window.location;A.replace({path:t,query:e,hash:s})}const t=new a,e="gem@historyStateList";v(y,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,y)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=y,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=b.get(r);t&&t()}else if(i.$close){const t=x.get(i),e=S.get(i);if(e&&!e())return s=!0,void A.forward();t?t():(s=!0,A.back())}v(y,{currentIndex:o})})}
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
 */const C=new WeakMap,O=t=>(...e)=>{const s=t(...e);return C.set(s,!0),s},M=t=>"function"==typeof t&&C.has(t),T=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,V=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},k=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},$={},P={},I=`{{lit-${String(Math.random()).slice(2)}}}`,L=`\x3c!--${I}--\x3e`,j=new RegExp(`${I}|${L}`),H="$lit$";class R{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)q(e[t].name,H)&&n++;for(;n-- >0;){const e=l[a],s=F.exec(e)[2],n=s.toLowerCase()+H,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(j);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(I)>=0){const n=t.parentNode,i=e.split(j),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=B();else{const t=F.exec(o);null!==t&&q(t[2],H)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-H.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(B(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===I){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(B(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(I,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const q=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},W=t=>-1!==t.index,B=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class U{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=T?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],W(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return T&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const G=` ${I} `;class D{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=F.exec(t);e+=null===o?t+(s?G:L):t.substr(0,o.index)+o[1]+o[2]+H+o[3]+I}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class z extends D{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),V(e,s.firstChild),t}}
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
 */const J=t=>null===t||!("object"==typeof t||"function"==typeof t),K=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Q{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new X(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(J(t)||!K(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class X{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===$||J(t)&&t===this.value||(this.value=t,M(t)||(this.committer.dirty=!0))}commit(){for(;M(this.value);){const t=this.value;this.value=$,t(this)}this.value!==$&&this.committer.commit()}}class Y{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(B()),this.endNode=t.appendChild(B())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=B()),t.__insert(this.endNode=B())}insertAfterPart(t){t.__insert(this.startNode=B()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;M(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}const t=this.__pendingValue;t!==$&&(J(t)?t!==this.value&&this.__commitText(t):t instanceof D?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):K(t)?this.__commitIterable(t):t===P?(this.value=P,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof U&&this.value.template===e)this.value.update(t.values);else{const s=new U(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new Y(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){k(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Z{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;M(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}if(this.__pendingValue===$)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=$}}class tt extends Q{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new et(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class et extends X{}let st=!1;try{const t={get capture(){return st=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class nt{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;M(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}if(this.__pendingValue===$)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=it(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=$}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const it=t=>t&&(st?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const ot=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new tt(t,e.slice(1),s).parts}return"@"===i?[new nt(t,e.slice(1),n.eventContext)]:"?"===i?[new Z(t,e.slice(1),s)]:new Q(t,e,s).parts}handleTextExpression(t){return new Y(t)}};
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
 */function rt(t){let e=at.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},at.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(I);return s=e.keyString.get(n),void 0===s&&(s=new R(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const at=new Map,lt=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ht=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(B(),n);s.insertBefore(B(),n);const o=new Y(t.options);return o.insertAfterNode(i),o},ct=(t,e)=>(t.setValue(e),t.commit(),t),dt=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&V(n,e.startNode,o,i)},ut=t=>{k(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},pt=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},ft=new WeakMap,mt=new WeakMap,gt=O((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof Y))throw new Error("repeat can only be used in text bindings");const i=ft.get(e)||[],o=mt.get(e)||[],r=[],a=[],l=[];let h,c,d=0;for(const e of t)l[d]=n?n(e,d):d,a[d]=s(e,d),d++;let u=0,p=i.length-1,f=0,m=a.length-1;for(;u<=p&&f<=m;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===l[f])r[f]=ct(i[u],a[f]),u++,f++;else if(o[p]===l[m])r[m]=ct(i[p],a[m]),p--,m--;else if(o[u]===l[m])r[m]=ct(i[u],a[m]),dt(e,i[u],r[m+1]),u++,m--;else if(o[p]===l[f])r[f]=ct(i[p],a[f]),dt(e,i[p],i[u]),p--,f++;else if(void 0===h&&(h=pt(l,f,m),c=pt(o,u,p)),h.has(o[u]))if(h.has(o[p])){const t=c.get(l[f]),s=void 0!==t?i[t]:null;if(null===s){const t=ht(e,i[u]);ct(t,a[f]),r[f]=t}else r[f]=ct(s,a[f]),dt(e,s,i[u]),i[t]=null;f++}else ut(i[p]),p--;else ut(i[u]),u++;for(;f<=m;){const t=ht(e,r[m+1]);ct(t,a[f]),r[f++]=t}for(;u<=p;){const t=i[u++];null!==t&&ut(t)}ft.set(e,r),mt.set(e,l)}}),_t=new WeakMap,wt=O((t,e)=>s=>{const n=_t.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||_t.has(s)))return;s.setValue(e()),_t.set(s,Array.isArray(t)?Array.from(t):t)}),vt=O(t=>e=>{if(void 0===t&&e instanceof X){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let yt={html:(t,...e)=>new D(t,e,"html",ot),svg:(t,...e)=>new z(t,e,"svg",ot),render:(t,e,s)=>{let n=lt.get(e);void 0===n&&(k(e,e.firstChild),lt.set(e,n=new Y(Object.assign({templateFactory:rt},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:O,repeat:gt,guard:wt,ifDefined:vt};window.__litHtml?yt=window.__litHtml:window.__litHtml=yt;const{html:bt,svg:xt,render:St,directive:Et,repeat:Nt,guard:At,ifDefined:Ct}=yt;class Ot extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=g}),i&&i.forEach(t=>{if(!t[_])throw new Error("`observedStores` only support store module");!function(t,e){t[_].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),i(this.__update))}}})}setState(t){Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return bt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(St(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{!function(t,e){t[_].delete(e)}(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class Mt extends Ot{connectedCallback(){this.willMount(),St(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const Tt=new o;let Vt=!1;const kt=()=>{window.requestAnimationFrame((function t(e){const s=Tt.get();s&&(s(),performance.now()-e<16)?t(e):Vt&&kt()}))};Tt.addEventListener("start",()=>{Vt=!0,kt()}),Tt.addEventListener("end",()=>Vt=!1);const $t=customElements.define.bind(customElements);customElements.define=function(t,e,s){customElements.get(t)||$t(t,e,s)};const Pt=function(t,e=""){let s=c.get(t);if(!s){const n=new CSSStyleSheet;n.media.mediaText=e;let i="";"string"==typeof t?i=t:(Object.keys(t).forEach(e=>{n[e]="tag"===t[e].type?e:`${e}-${t[e].key}`,i+=t[e].str.replace(/&/g,n[e])}),c.set(t,n)),n.replaceSync(i),s=n}return s}({h1:p`
    color: yellow;
    &:hover {
      color: red;
    }
  `,h2:f`
    background: yellow;
    &:hover {
      background: red;
    }
  `,h3:m`
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  `});class It extends Mt{render(){return bt`
      <h1 class=${Pt.h1}>Header 1</h1>
      <h2 id=${Pt.h2}>Header 2</h2>
      <h3>Header 3</h3>
    `}}It.adoptedStyleSheets=[Pt],customElements.define("app-root",It),document.body.append(new It)}]);
//# sourceMappingURL=bundle.9b1725e2eff5da63ed2d.js.map