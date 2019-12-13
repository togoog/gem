!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gem/build/",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){n.size||window.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class o extends Image{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var r;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(r||(r={}));class a{constructor(){this.cache={}}get(t,e){if(this.cache[e]||(this.cache[e]={}),t in this.cache[e])return this.cache[e][t];const s=window[e].getItem(t);if(s)try{const n=JSON.parse(s);return this.cache[e][t]=n,n}catch(s){window[e].removeItem(t)}}getLocal(t){return this.get(t,r.LOCALSTORAGE)}getSession(t){return this.get(t,r.SESSIONSTORAGE)}set(t,e,s){return this.cache[s]||(this.cache[s]={}),this.cache[s][t]=e,window[s].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,r.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,r.SESSIONSTORAGE)}}class h extends URLSearchParams{constructor(t){if(t instanceof h)return t;super(t),Object.setPrototypeOf(this,h.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}window.q=h;new WeakMap;function l(){}const c="gem@storeHandlesKey";function u(t){const e=t;return Object.defineProperty(e,c,{enumerable:!1,value:new Set,writable:!0}),e}function d(t,e){Object.assign(t,e),t[c].forEach(t=>{i(t)})}const p=u({list:[{}],currentIndex:0}),m=new WeakMap,f=new WeakMap,g=new WeakMap;function _(t,e,s,n){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!s,$shouldClose:!!n});return m.set(i,e),f.set(i,s),g.set(i,n),i}let v="",w={historyState:p,get basePath(){return v},set basePath(t){const{list:e,currentIndex:s}=p;e[s].path=window.location.pathname.replace(new RegExp(`^${t}`),""),d(p,{}),v=t},get location(){const{list:t,currentIndex:e}=p,s=t[e];return{get query(){return new h(s.query)},hash:s.hash,path:s.path,state:s.state,title:s.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",l=_(t.data||{},s,n,i);window.history.pushState(l,a,w.basePath+e+new h(o)+r);const{list:c,currentIndex:u}=p;r!==c[u].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const m=c.slice(0,u+1).concat({state:l,title:a,path:e,query:o,hash:r});d(p,{list:m,currentIndex:m.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:s}=p,{state:n}=e[s];if(n.$close){f.get(n)(),w.replace(t)}else w.push(t)},pushState(t){const{list:e,currentIndex:s}=p,{path:n,query:i,hash:o}=e[s];w.push(Object.assign({path:n,query:i,hash:o},t))},replace(t){const{path:e,open:s,close:n,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},l=t.title||"",c=_(a,s,n,i);window.history.replaceState(c,l,w.basePath+e+new h(o)+r);const{list:u,currentIndex:m}=p;r!==u[m].hash&&window.dispatchEvent(new CustomEvent("hashchange")),u.splice(m,1,{state:c,title:l,path:e,query:o,hash:r}),d(p,{list:u})},replaceState(t){const{list:e,currentIndex:s}=p,{path:n,query:i,hash:o}=e[s];w.replace(Object.assign({path:n,query:i,hash:o},t))}};if(!!window.__gemHistory){w=window.__gemHistory;const t=w.basePath;Object.defineProperty(w,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=w,window.history.state)window.history.state.$close&&w.back();else{const{pathname:t,search:e,hash:s}=window.location;w.replace({path:t,query:e,hash:s})}const t=new a,e="gem@historyStateList";d(p,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,p)});let s=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(s)return void(s=!1);const{list:e,currentIndex:n}=p,{state:i}=e[n],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>n&&r.$open){const t=m.get(r);t&&t()}else if(i.$close){const t=f.get(i),e=g.get(i);if(e&&!e())return s=!0,void w.forward();t?t():(s=!0,w.back())}d(p,{currentIndex:o})})}
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
 */const y=new WeakMap,b=t=>(...e)=>{const s=t(...e);return y.set(s,!0),s},x=t=>"function"==typeof t&&y.has(t),E=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,S=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},N=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},k={},O={},A=`{{lit-${String(Math.random()).slice(2)}}}`,C=`\x3c!--${A}--\x3e`,P=new RegExp(`${A}|${C}`),$="$lit$";class V{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:h,values:{length:l}}=t;for(;a<l;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)M(e[t].name,$)&&n++;for(;n-- >0;){const e=h[a],s=I.exec(e)[2],n=s.toLowerCase()+$,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(P);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(A)>=0){const n=t.parentNode,i=e.split(P),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=R();else{const t=I.exec(o);null!==t&&M(t[2],$)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-$.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(R(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===A){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(R(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(A,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const M=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},T=t=>-1!==t.index,R=()=>document.createComment(""),I=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class j{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=E?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],T(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return E&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const L=` ${A} `;class H{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=I.exec(t);e+=null===o?t+(s?L:C):t.substr(0,o.index)+o[1]+o[2]+$+o[3]+A}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class q extends H{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),S(e,s.firstChild),t}}
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
 */const W=t=>null===t||!("object"==typeof t||"function"==typeof t),B=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class U{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new F(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(W(t)||!B(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class F{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===k||W(t)&&t===this.value||(this.value=t,x(t)||(this.committer.dirty=!0))}commit(){for(;x(this.value);){const t=this.value;this.value=k,t(this)}this.value!==k&&this.committer.commit()}}class D{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(R()),this.endNode=t.appendChild(R())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=R()),t.__insert(this.endNode=R())}insertAfterPart(t){t.__insert(this.startNode=R()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;x(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=k,t(this)}const t=this.__pendingValue;t!==k&&(W(t)?t!==this.value&&this.__commitText(t):t instanceof H?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===O?(this.value=O,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof j&&this.value.template===e)this.value.update(t.values);else{const s=new j(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new D(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){N(this.startNode.parentNode,t.nextSibling,this.endNode)}}class G{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;x(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=k,t(this)}if(this.__pendingValue===k)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=k}}class z extends U{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new J(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class J extends F{}let K=!1;try{const t={get capture(){return K=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Q{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;x(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=k,t(this)}if(this.__pendingValue===k)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=X(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=k}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const X=t=>t&&(K?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const Y=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new z(t,e.slice(1),s).parts}return"@"===i?[new Q(t,e.slice(1),n.eventContext)]:"?"===i?[new G(t,e.slice(1),s)]:new U(t,e,s).parts}handleTextExpression(t){return new D(t)}};
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
 */function Z(t){let e=tt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},tt.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(A);return s=e.keyString.get(n),void 0===s&&(s=new V(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const tt=new Map,et=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const st=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(R(),n);s.insertBefore(R(),n);const o=new D(t.options);return o.insertAfterNode(i),o},nt=(t,e)=>(t.setValue(e),t.commit(),t),it=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&S(n,e.startNode,o,i)},ot=t=>{N(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},rt=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},at=new WeakMap,ht=new WeakMap,lt=b((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof D))throw new Error("repeat can only be used in text bindings");const i=at.get(e)||[],o=ht.get(e)||[],r=[],a=[],h=[];let l,c,u=0;for(const e of t)h[u]=n?n(e,u):u,a[u]=s(e,u),u++;let d=0,p=i.length-1,m=0,f=a.length-1;for(;d<=p&&m<=f;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===h[m])r[m]=nt(i[d],a[m]),d++,m++;else if(o[p]===h[f])r[f]=nt(i[p],a[f]),p--,f--;else if(o[d]===h[f])r[f]=nt(i[d],a[f]),it(e,i[d],r[f+1]),d++,f--;else if(o[p]===h[m])r[m]=nt(i[p],a[m]),it(e,i[p],i[d]),p--,m++;else if(void 0===l&&(l=rt(h,m,f),c=rt(o,d,p)),l.has(o[d]))if(l.has(o[p])){const t=c.get(h[m]),s=void 0!==t?i[t]:null;if(null===s){const t=st(e,i[d]);nt(t,a[m]),r[m]=t}else r[m]=nt(s,a[m]),it(e,s,i[d]),i[t]=null;m++}else ot(i[p]),p--;else ot(i[d]),d++;for(;m<=f;){const t=st(e,r[f+1]);nt(t,a[m]),r[m++]=t}for(;d<=p;){const t=i[d++];null!==t&&ot(t)}at.set(e,r),ht.set(e,h)}}),ct=new WeakMap,ut=b((t,e)=>s=>{const n=ct.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||ct.has(s)))return;s.setValue(e()),ct.set(s,Array.isArray(t)?Array.from(t):t)}),dt=b(t=>e=>{if(void 0===t&&e instanceof F){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let pt={html:(t,...e)=>new H(t,e,"html",Y),svg:(t,...e)=>new q(t,e,"svg",Y),render:(t,e,s)=>{let n=et.get(e);void 0===n&&(N(e,e.firstChild),et.set(e,n=new D(Object.assign({templateFactory:Z},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:b,repeat:lt,guard:ut,ifDefined:dt};window.__litHtml?pt=window.__litHtml:window.__litHtml=pt;const{html:mt,svg:ft,render:gt,directive:_t,repeat:vt,guard:wt,ifDefined:yt}=pt;class bt extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=l}),i&&i.forEach(t=>{if(!t[c])throw new Error("`observedStores` only support store module");!function(t,e){t[c].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),i(this.__update))}}})}setState(t){Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return mt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(gt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{!function(t,e){t[c].delete(e)}(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class xt extends bt{connectedCallback(){this.willMount(),gt(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const Et=new o;let St=!1;const Nt=()=>{window.requestAnimationFrame((function t(e){const s=Et.get();s&&(s(),performance.now()-e<16)?t(e):St&&Nt()}))};Et.addEventListener("start",()=>{St=!0,Nt()}),Et.addEventListener("end",()=>St=!1);const kt=customElements.define.bind(customElements);customElements.define=function(t,e,s){customElements.get(t)||kt(t,e,s)};class Ot extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function At(t){return new Ot(t)}function Ct(t,e){return!!e.match(At(t))}function Pt(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}function $t(t,e){const s=Pt(t,e);return Object.assign({path:s},e)}class Vt extends xt{constructor(){super();const{path:t,query:e}=w.location,s=t+e;this.href=s}static getParams(){if(Vt.currentRoute)return function(t,e){const s=At(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(Vt.currentRoute.pattern,w.location.path)}initPage(){const{list:t,currentIndex:e}=w.historyState;Vt.currentRoute&&Vt.currentRoute.title&&Vt.currentRoute.title!==t[e].title&&(t.splice(e,1,Object.assign(Object.assign({},t[e]),{title:Vt.currentRoute.title})),d(w.historyState,{list:t}))}shouldUpdate(){const{path:t,query:e}=w.location,s=t+e;return t+e!==this.href&&(this.href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();let t,e;Vt.currentRoute=null,e=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of e){const{pattern:e}=s;if("*"===e)t=s;else if(Ct(e,w.location.path)){Vt.currentRoute=s;break}}return Vt.currentRoute||(Vt.currentRoute=t),Vt.currentRoute?Vt.currentRoute.redirect?(w.replace({path:Vt.currentRoute.redirect}),this.callback()):mt`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Vt.currentRoute.content}
    `:this.callback()}callback(){return Vt.currentRoute=null,mt``}}Vt.observedPropertys=["routes"],Vt.observedStores=[w.historyState],customElements.define("gem-route",Vt);class Mt extends xt{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:i}=w.location;s+n+i!==e&&(t.stopPropagation(),this.route?w.pushWithoutCloseHandle($t(this.route,this.options)):w.pushWithoutCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options?this.options.query:"",e=this.options?this.options.hash:"";return Pt(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(){const{path:t,query:e,hash:s}=w.location;return this.pattern&&Ct(this.pattern,t)||t+e+s===this.getHref()?this.setAttribute("active",""):this.removeAttribute("active"),mt`
      <slot></slot>
    `}}Mt.observedAttributes=["href","path","query","hash","pattern"],Mt.observedStores=[w.historyState],Mt.observedPropertys=["route","options"],customElements.define("gem-link",Mt);const Tt={home:{pattern:"/",get content(){return mt`
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
        <gem-link .route=${Tt.a} .options=${{params:{b:1}}}>a page link, params: {a: 1}</gem-link>
      `}},a:{pattern:"/a/:b",get content(){return mt`
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
        <gem-link .route=${Tt.a} .options=${{params:{b:1},query:"?a=1"}}>a page link, query: ?a=1</gem-link>
      `}}};class Rt extends xt{constructor(){super(...arguments),this.onclick=()=>{Vt.currentRoute===Tt.home?w.push($t(Tt.a,{params:{b:Date.now()}})):w.push($t(Tt.home))}}render(){return mt`
      <main>
        <gem-route .routes=${Tt}></gem-route>
      </main>
    `}}customElements.define("app-root",Rt),document.body.append(new Rt)}]);
//# sourceMappingURL=bundle.73c1df29032d13d85888.js.map