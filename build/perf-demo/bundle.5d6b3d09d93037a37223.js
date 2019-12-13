!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gem/build/",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||window.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class o extends Image{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var r;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(r||(r={}));class a{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,r.LOCALSTORAGE)}getSession(t){return this.get(t,r.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,r.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,r.SESSIONSTORAGE)}}class l extends URLSearchParams{constructor(t){if(t instanceof l)return t;super(t),Object.setPrototypeOf(this,l.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}function h(t,...e){return t.reduce((t,s,n)=>t+(e[n-1]||"")+s)}window.q=l;new WeakMap;function d(){}const c="gem@storeHandlesKey";function u(t){const e=t;return Object.defineProperty(e,c,{enumerable:!1,value:new Set,writable:!0}),e}function p(t,e){Object.assign(t,e),t[c].forEach(t=>{i(t)})}const f=u({list:[{}],currentIndex:0}),m=new WeakMap,g=new WeakMap,_=new WeakMap;function w(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return m.set(i,e),g.set(i,s),_.set(i,n),i}let v="",b={historyState:f,get basePath(){return v},set basePath(t){const{list:e,currentIndex:s}=f;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),p(f,{}),v=t},get location(){const{list:t,currentIndex:e}=f,s=t[e];return{get query(){return new l(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",h=w(t.data||{},s,n,i);window.history.pushState(h,a,b.basePath+e+new l(o)+r);const{list:d,currentIndex:c}=f;r!==d[c].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const u=d.slice(0,c+1).concat({state:h,title:a,path:e,query:o,hash:r});p(f,{list:u,currentIndex:u.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=f,{state:n}=e[s];if(n.$close){g.get(n)(),b.replace(t)}else b.push(t)},pushState(t){const{list:e,currentIndex:s}=f,{path:n,query:i,hash:o}=e[s];b.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},h=t.title||"",d=w(a,s,n,i);window.history.replaceState(d,h,b.basePath+e+new l(o)+r);const{list:c,currentIndex:u}=f;r!==c[u].hash&&window.dispatchEvent(new CustomEvent("hashchange")),c.splice(u,1,{state:d,title:h,path:e,query:o,hash:r}),p(f,{list:c})},replaceState(t){const{list:e,currentIndex:s}=f,{path:n,query:i,hash:o}=e[s];b.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){b=window.__gemHistory;const t=b.basePath;Object.defineProperty(b,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=b,window.history.state)window.history.state.$close&&b.back();else{const{pathname:t,search:e,hash:s}=window.location;b.replace({path:t,query:e,hash:s})}const t=new a,e="gem@historyStateList";p(f,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,f)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=f,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=m.get(r);t&&t()}else if(i.$close){const t=g.get(i),e=_.get(i);if(e&&!e())return s=!0,void b.forward();t?t():(s=!0,b.back())}p(f,{currentIndex:o})})}
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
 */const y=new WeakMap,x=t=>(...e)=>{const s=t(...e);return y.set(s,!0),s},S=t=>"function"==typeof t&&y.has(t),E=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,N=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},A=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},$={},O={},C=`{{lit-${String(Math.random()).slice(2)}}}`,M=`\x3c!--${C}--\x3e`,V=new RegExp(`${C}|${M}`),T="$lit$";class k{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)P(e[t].name,T)&&n++;for(;n-- >0;){const e=l[a],s=j.exec(e)[2],n=s.toLowerCase()+T,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(V);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(C)>=0){const n=t.parentNode,i=e.split(V),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=L();else{const t=j.exec(o);null!==t&&P(t[2],T)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-T.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(L(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===C){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(L(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(C,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const P=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},I=t=>-1!==t.index,L=()=>document.createComment(""),j=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class H{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=E?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],I(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return E&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const R=` ${C} `;class q{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=j.exec(t);e+=null===o?t+(s?R:M):t.substr(0,o.index)+o[1]+o[2]+T+o[3]+C}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class W extends q{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),N(e,s.firstChild),t}}
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
 */const F=t=>null===t||!("object"==typeof t||"function"==typeof t),B=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class U{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new D(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(F(t)||!B(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class D{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===$||F(t)&&t===this.value||(this.value=t,S(t)||(this.committer.dirty=!0))}commit(){for(;S(this.value);){const t=this.value;this.value=$,t(this)}this.value!==$&&this.committer.commit()}}class G{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(L()),this.endNode=t.appendChild(L())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=L()),t.__insert(this.endNode=L())}insertAfterPart(t){t.__insert(this.startNode=L()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}const t=this.__pendingValue;t!==$&&(F(t)?t!==this.value&&this.__commitText(t):t instanceof q?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===O?(this.value=O,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof H&&this.value.template===e)this.value.update(t.values);else{const s=new H(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new G(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){A(this.startNode.parentNode,t.nextSibling,this.endNode)}}class z{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}if(this.__pendingValue===$)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=$}}class J extends U{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new K(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class K extends D{}let X=!1;try{const t={get capture(){return X=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Y{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;S(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=$,t(this)}if(this.__pendingValue===$)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Z(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=$}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Z=t=>t&&(X?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const Q=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new J(t,e.slice(1),s).parts}return"@"===i?[new Y(t,e.slice(1),n.eventContext)]:"?"===i?[new z(t,e.slice(1),s)]:new U(t,e,s).parts}handleTextExpression(t){return new G(t)}};
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
 */function tt(t){let e=et.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},et.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(C);return s=e.keyString.get(n),void 0===s&&(s=new k(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const et=new Map,st=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const nt=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(L(),n);s.insertBefore(L(),n);const o=new G(t.options);return o.insertAfterNode(i),o},it=(t,e)=>(t.setValue(e),t.commit(),t),ot=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&N(n,e.startNode,o,i)},rt=t=>{A(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},at=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},lt=new WeakMap,ht=new WeakMap,dt=x((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof G))throw new Error("repeat can only be used in text bindings");const i=lt.get(e)||[],o=ht.get(e)||[],r=[],a=[],l=[];let h,d,c=0;for(const e of t)l[c]=n?n(e,c):c,a[c]=s(e,c),c++;let u=0,p=i.length-1,f=0,m=a.length-1;for(;u<=p&&f<=m;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===l[f])r[f]=it(i[u],a[f]),u++,f++;else if(o[p]===l[m])r[m]=it(i[p],a[m]),p--,m--;else if(o[u]===l[m])r[m]=it(i[u],a[m]),ot(e,i[u],r[m+1]),u++,m--;else if(o[p]===l[f])r[f]=it(i[p],a[f]),ot(e,i[p],i[u]),p--,f++;else if(void 0===h&&(h=at(l,f,m),d=at(o,u,p)),h.has(o[u]))if(h.has(o[p])){const t=d.get(l[f]),s=void 0!==t?i[t]:null;if(null===s){const t=nt(e,i[u]);it(t,a[f]),r[f]=t}else r[f]=it(s,a[f]),ot(e,s,i[u]),i[t]=null;f++}else rt(i[p]),p--;else rt(i[u]),u++;for(;f<=m;){const t=nt(e,r[m+1]);it(t,a[f]),r[f++]=t}for(;u<=p;){const t=i[u++];null!==t&&rt(t)}lt.set(e,r),ht.set(e,l)}}),ct=new WeakMap,ut=x((t,e)=>s=>{const n=ct.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||ct.has(s)))return;s.setValue(e()),ct.set(s,Array.isArray(t)?Array.from(t):t)}),pt=x(t=>e=>{if(void 0===t&&e instanceof D){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let ft={html:(t,...e)=>new q(t,e,"html",Q),svg:(t,...e)=>new W(t,e,"svg",Q),render:(t,e,s)=>{let n=st.get(e);void 0===n&&(A(e,e.firstChild),st.set(e,n=new G(Object.assign({templateFactory:tt},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:x,repeat:dt,guard:ut,ifDefined:pt};window.__litHtml?ft=window.__litHtml:window.__litHtml=ft;const{html:mt,svg:gt,render:_t,directive:wt,repeat:vt,guard:bt,ifDefined:yt}=ft;class xt extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=d}),i&&i.forEach(t=>{if(!t[c])throw new Error("`observedStores` only support store module");!function(t,e){t[c].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),i(this.__update))}}})}setState(t){Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return mt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(_t(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{!function(t,e){t[c].delete(e)}(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class St extends xt{connectedCallback(){this.willMount(),_t(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const Et=new o;let Nt=!1;const At=()=>{window.requestAnimationFrame((function t(e){const s=Et.get();s&&(s(),performance.now()-e<16)?t(e):Nt&&At()}))};Et.addEventListener("start",()=>{Nt=!0,At()}),Et.addEventListener("end",()=>Nt=!1);class $t extends xt{__update(){Et.add(()=>{this.shouldUpdate()&&(_t(this.render(),this.__renderRoot),this.updated())})}connectedCallback(){this.willMount(),Et.add(()=>{_t(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0})}}const Ot=customElements.define.bind(customElements);var Ct;customElements.define=function(t,e,s){customElements.get(t)||Ot(t,e,s)};const Mt=u({number:1});setInterval(()=>{p(Mt,{number:Mt.number%10+1})},1e3),customElements.define("fiber-dot",((Ct=class extends $t{constructor(){super(...arguments),this.onmouseenter=()=>{this.setState({hover:!0})},this.onmouseleave=()=>{this.setState({hover:!1})},this.state={hover:!1}}render(){const t=1.3*this.size;return Object.assign(this.style,{width:t+"px",height:t+"px",left:this.x+"px",top:this.y+"px",borderRadius:t/2+"px",lineHeight:t+"px",background:this.state.hover?"#ff0":"#61dafb"}),mt`
        <style>
          :host {
            position: absolute;
            font: normal 15px sans-serif;
            text-align: center;
            cursor: pointer;
            display: block;
          }
        </style>
        ${this.state.hover?"**"+Mt.number+"**":Mt.number}
      `}}).observedStores=[Mt],Ct));customElements.define("fiber-triangle",class extends St{render(){let t=this.s;if(t<=25)return mt`
          <fiber-dot .x=${this.x-12.5} .y=${this.y-12.5} .size=${25}></fiber-dot>
        `;t/=2;{const t=performance.now()+.8;for(;performance.now()<t;);}return mt`
        <fiber-triangle .x=${this.x} .y=${this.y-t/2} .s=${t}></fiber-triangle>
        <fiber-triangle .x=${this.x-t} .y=${this.y+t/2} .s=${t}></fiber-triangle>
        <fiber-triangle .x=${this.x+t} .y=${this.y+t/2} .s=${t}></fiber-triangle>
      `}});class Vt extends St{constructor(){super(...arguments),this.elapsed=0}render(){const t=this.elapsed/1e3%10,e=1+(t>5?10-t:t)/10;return this.style.transform="scaleX("+e/2.1+") scaleY(0.7) translateZ(0.1px)",mt`
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
    `}}Vt.observedPropertys=["elapsed"],customElements.define("app-root",Vt),document.body.innerHTML=h`
  <ul>
    <li><a href="https://stencil-fiber-demo.firebaseapp.com/perf.html">stencil-fiber-demo</a></li>
    <li><a href="https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html">react-fiber-demo</a></li>
  </ul>
`;const Tt=new Vt;document.body.append(Tt);const kt=Date.now();requestAnimationFrame((function t(){Tt.elapsed=Date.now()-kt,requestAnimationFrame(t)}))}]);
//# sourceMappingURL=bundle.5d6b3d09d93037a37223.js.map