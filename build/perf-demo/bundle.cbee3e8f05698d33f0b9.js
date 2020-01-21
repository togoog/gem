!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gem/build/perf-demo/",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const n=new Set;function i(e){n.size||globalThis.queueMicrotask(()=>{n.forEach(e=>e()),n.clear()}),n.delete(e),n.add(e)}const o=globalThis.Image||Object;class r extends o{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,r.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class a extends URLSearchParams{constructor(e){if(e instanceof a)return e;super(e),Object.setPrototypeOf(this,a.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}function l(e,...t){return e.reduce((e,s,n)=>e+(t[n-1]||"")+s)}new WeakMap;function h(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class d extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function u(){}const c="gem@storeHandlesKey";function p(e){const t=e;return Object.defineProperty(t,c,{enumerable:!1,value:new Set,writable:!0}),t}function f(e,t){Object.assign(e,t),e[c].forEach(e=>{i(e)})}const m=window.history,g=window.location,v=m.pushState.bind(m),_=m.replaceState.bind(m);let b=0;const y=()=>++b,w=p({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),x=new Map;function E(e){var t,s,n,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new d("`$key` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasCloseHandle)throw new d("`$hasCloseHandle` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasOpenHandle)throw new d("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new d("`$hasShouldCloseHandle` is not allowed")}function $(e){return m.basePath?m.basePath+("/"===e?"":e):e}function N(e){return e.replace(new RegExp(`^${m.basePath}`),"")}function S(e){const t=x.get(w.$key)||{},s=e.path||N(g.pathname),n=new a(e.query||(e.path?"":g.search)),i=e.path&&e.path!==t.path||e.query&&String(e.query)!==String(t.query),o=e.title||(i?"":document.title),r=e.hash||(i?"":g.hash);return Object.assign(Object.assign({},e),{title:o,path:s,query:n,hash:r})}function C(e,t){E(t.data);const s=S(t),{title:n,path:i,query:o,hash:r}=s,l=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:y()},s.data||{});x.set(l.$key,s),f(h(w),l);const d=$(i)+new a(o)+r,u=g.hash;("push"===e?v:_)(l,n,d),u!==r&&window.dispatchEvent(new CustomEvent("hashchange"))}function k(e,t,s,n){E(t);const i=Object.assign({$key:y()},t||{}),{pathname:o,search:r,hash:l}=new URL(n,g.origin),d=S({path:o,query:new a(r),hash:l,title:s,data:t});x.set(i.$key,d),f(h(w),i);const u=$(o)+d.query+l,c=g.hash;("push"===e?v:_)(i,s,u),c!==l&&window.dispatchEvent(new CustomEvent("hashchange"))}window.addEventListener("hashchange",({isTrusted:e})=>{e&&m.replace({hash:g.hash})});const O=p({basePath:""});if(!("basePath"in m)){if(Object.defineProperties(m,{basePath:{get:()=>O.basePath,set(e){if(O.basePath)throw new d("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");f(O,{basePath:e}),Object.assign(x.get(w.$key),{path:N(g.pathname)})}},getParams:{value:function(){return x.get(w.$key)}},updateParams:{value:function(e){Object.assign(x.get(w.$key),e),f(w,{})}},store:{value:w},push:{value:function(e){C("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,s,n;w.$hasCloseHandle?(null===(n=null===(t=x.get(w.$key))||void 0===t?void 0:(s=t).close)||void 0===n||n.call(s),m.replace(e)):m.push(e)}},replace:{value:function(e){C("replace",e)}},pushState:{value:function(e,t,s){k("push",e,t,s)}},replaceState:{value:function(e,t,s){k("replace",e,t,s)}}}),m.state)if(m.state.$hasCloseHandle)f(w,m.state),m.back();else{const e=S({title:document.title});f(w,Object.assign({$key:y()},m.state||{})),x.set(w.$key,e)}else{const{pathname:e,search:t,hash:s}=g;m.replace({path:e,query:t,hash:s})}let e=!1;window.addEventListener("popstate",t=>{var s,n,i,o,r,l;const d=t.state;if(!(null===(s=d)||void 0===s?void 0:s.$key))return;if(e)return void(e=!1);if(!x.has(d.$key)){const{pathname:e,search:t,hash:s}=g;x.set(d.$key,{path:e,query:new a(t),hash:s,title:document.title,data:d})}const u=w;if(d.$key>u.$key&&d.$hasOpenHandle)null===(o=null===(n=x.get(d.$key))||void 0===n?void 0:(i=n).open)||void 0===o||o.call(i);else if(u.$hasCloseHandle){const t=x.get(u.$key),s=null===(r=t)||void 0===r?void 0:r.close,n=null===(l=t)||void 0===l?void 0:l.shouldClose;if(n&&!n())return e=!0,void m.forward();s?s():d.$hasCloseHandle&&(e=!0,m.back())}f(h(w),d)})}
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
 */const V=new WeakMap,P=e=>(...t)=>{const s=e(...t);return V.set(s,!0),s},A=e=>"function"==typeof e&&V.has(e),H=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,M=(e,t,s=null,n=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,n),t=s}},T=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},j={},L={},I=`{{lit-${String(Math.random()).slice(2)}}}`,q=`\x3c!--${I}--\x3e`,R=new RegExp(`${I}|${q}`),W="$lit$";class F{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)U(t[e].name,W)&&n++;for(;n-- >0;){const t=l[a],s=D.exec(t)[2],n=s.toLowerCase()+W,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(R);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(I)>=0){const n=e.parentNode,i=t.split(R),o=i.length-1;for(let t=0;t<o;t++){let s,o=i[t];if(""===o)s=z();else{const e=D.exec(o);null!==e&&U(e[2],W)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-W.length)+e[3]),s=document.createTextNode(o)}n.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(z(),e),s.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===I){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(z(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(I,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const U=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},B=e=>-1!==e.index,z=()=>document.createComment(""),D=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class J{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=H?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],B(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return H&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const K=` ${I} `;class X{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const o=D.exec(e);t+=null===o?e+(s?K:q):e.substr(0,o.index)+o[1]+o[2]+W+o[3]+I}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Y extends X{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),M(t,s.firstChild),e}}
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
 */const Z=e=>null===e||!("object"==typeof e||"function"==typeof e),G=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Q{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new ee(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(Z(e)||!G(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ee{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===j||Z(e)&&e===this.value||(this.value=e,A(e)||(this.committer.dirty=!0))}commit(){for(;A(this.value);){const e=this.value;this.value=j,e(this)}this.value!==j&&this.committer.commit()}}class te{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(z()),this.endNode=e.appendChild(z())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=z()),e.__insert(this.endNode=z())}insertAfterPart(e){e.__insert(this.startNode=z()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;A(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=j,e(this)}const e=this.__pendingValue;e!==j&&(Z(e)?e!==this.value&&this.__commitText(e):e instanceof X?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):G(e)?this.__commitIterable(e):e===L?(this.value=L,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof J&&this.value.template===t)this.value.update(e.values);else{const s=new J(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)s=t[n],void 0===s&&(s=new te(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){T(this.startNode.parentNode,e.nextSibling,this.endNode)}}class se{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;A(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=j,e(this)}if(this.__pendingValue===j)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=j}}class ne extends Q{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new ie(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ie extends ee{}let oe=!1;try{const e={get capture(){return oe=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class re{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;A(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=j,e(this)}if(this.__pendingValue===j)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=ae(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=j}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ae=e=>e&&(oe?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const le=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];if("."===i){return new ne(e,t.slice(1),s).parts}return"@"===i?[new re(e,t.slice(1),n.eventContext)]:"?"===i?[new se(e,t.slice(1),s)]:new Q(e,t,s).parts}handleTextExpression(e){return new te(e)}};
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
 */function he(e){let t=de.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},de.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(I);return s=t.keyString.get(n),void 0===s&&(s=new F(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const de=new Map,ue=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ce=(e,t)=>{const s=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,i=s.insertBefore(z(),n);s.insertBefore(z(),n);const o=new te(e.options);return o.insertAfterNode(i),o},pe=(e,t)=>(e.setValue(t),e.commit(),e),fe=(e,t,s)=>{const n=e.startNode.parentNode,i=s?s.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&M(n,t.startNode,o,i)},me=e=>{T(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},ge=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},ve=new WeakMap,_e=new WeakMap,be=P((e,t,s)=>{let n;return void 0===s?s=t:void 0!==t&&(n=t),t=>{if(!(t instanceof te))throw new Error("repeat can only be used in text bindings");const i=ve.get(t)||[],o=_e.get(t)||[],r=[],a=[],l=[];let h,d,u=0;for(const t of e)l[u]=n?n(t,u):u,a[u]=s(t,u),u++;let c=0,p=i.length-1,f=0,m=a.length-1;for(;c<=p&&f<=m;)if(null===i[c])c++;else if(null===i[p])p--;else if(o[c]===l[f])r[f]=pe(i[c],a[f]),c++,f++;else if(o[p]===l[m])r[m]=pe(i[p],a[m]),p--,m--;else if(o[c]===l[m])r[m]=pe(i[c],a[m]),fe(t,i[c],r[m+1]),c++,m--;else if(o[p]===l[f])r[f]=pe(i[p],a[f]),fe(t,i[p],i[c]),p--,f++;else if(void 0===h&&(h=ge(l,f,m),d=ge(o,c,p)),h.has(o[c]))if(h.has(o[p])){const e=d.get(l[f]),s=void 0!==e?i[e]:null;if(null===s){const e=ce(t,i[c]);pe(e,a[f]),r[f]=e}else r[f]=pe(s,a[f]),fe(t,s,i[c]),i[e]=null;f++}else me(i[p]),p--;else me(i[c]),c++;for(;f<=m;){const e=ce(t,r[m+1]);pe(e,a[f]),r[f++]=e}for(;c<=p;){const e=i[c++];null!==e&&me(e)}ve.set(t,r),_e.set(t,l)}}),ye=new WeakMap,we=P((e,t)=>s=>{const n=ye.get(s);if(Array.isArray(e)){if(Array.isArray(n)&&n.length===e.length&&e.every((e,t)=>e===n[t]))return}else if(n===e&&(void 0!==e||ye.has(s)))return;s.setValue(t()),ye.set(s,Array.isArray(e)?Array.from(e):e)}),xe=P(e=>t=>{if(void 0===e&&t instanceof ee){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let Ee={html:(e,...t)=>new X(e,t,"html",le),svg:(e,...t)=>new Y(e,t,"svg",le),render:(e,t,s)=>{let n=ue.get(t);void 0===n&&(T(t,t.firstChild),ue.set(t,n=new te(Object.assign({templateFactory:he},s))),n.appendInto(t)),n.setValue(e),n.commit()},directive:P,repeat:be,guard:we,ifDefined:xe};window.__litHtml?Ee=window.__litHtml:window.__litHtml=Ee;const{html:$e,svg:Ne,render:Se,directive:Ce,repeat:ke,guard:Oe,ifDefined:Ve}=Ee;class Pe extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),s&&s.forEach(e=>{this.__connectProperty(e,!1)}),n&&n.forEach(e=>{this.__connectProperty(e,!0),this[e]=u}),i&&i.forEach(e=>{if(!e[c])throw new Error("`observedStores` only support store module");!function(e,t){e[c].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}get internals(){return this.__internals||(this.__internals=this.attachInternals()),this.__internals}__connectProperty(e,t=!1){if(e in this)return;let s=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>s,set(n){if(n!==s){if(t){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=t=>{const s=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(e,s,n),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return $e`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Se(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,s){}attributeChanged(e,t,s){}unmounted(){}attributeChangedCallback(e,t,s){this.__isMounted&&(this.attributeChanged(e,t,s),i(this.__update))}__connectedCallback(){Se(this.render(),this.__renderRoot);const e=this.mounted();"function"==typeof e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[c].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Ae extends Pe{connectedCallback(){this.willMount(),this.__connectedCallback()}}const He=new r;let Me=!1;const Te=()=>{window.requestAnimationFrame((function e(t){const s=He.get();s&&(s(),performance.now()-t<16)?e(t):Me&&Te()}))};He.addEventListener("start",()=>{Me=!0,Te()}),He.addEventListener("end",()=>Me=!1);class je extends Pe{__update(){He.add(()=>{this.shouldUpdate()&&(Se(this.render(),this.__renderRoot),this.updated())})}connectedCallback(){this.willMount(),He.add(()=>{this.__connectedCallback()})}}const Le=customElements.define.bind(customElements);var Ie;customElements.define=function(e,t,s){customElements.get(e)||Le(e,t,s)};const qe=p({number:1});setInterval(()=>{f(qe,{number:qe.number%10+1})},1e3),customElements.define("fiber-dot",((Ie=class extends je{constructor(){super(...arguments),this.onmouseenter=()=>{this.setState({hover:!0})},this.onmouseleave=()=>{this.setState({hover:!1})},this.state={hover:!1}}render(){const e=1.3*this.size;return Object.assign(this.style,{width:e+"px",height:e+"px",left:this.x+"px",top:this.y+"px",borderRadius:e/2+"px",lineHeight:e+"px",background:this.state.hover?"#ff0":"#61dafb"}),$e`
        <style>
          :host {
            position: absolute;
            font: normal 15px sans-serif;
            text-align: center;
            cursor: pointer;
            display: block;
          }
        </style>
        ${this.state.hover?"**"+qe.number+"**":qe.number}
      `}}).observedStores=[qe],Ie));customElements.define("fiber-triangle",class extends Ae{render(){let e=this.s;if(e<=25)return $e`
          <fiber-dot .x=${this.x-12.5} .y=${this.y-12.5} .size=${25}></fiber-dot>
        `;e/=2;{const e=performance.now()+.8;for(;performance.now()<e;);}return $e`
        <fiber-triangle .x=${this.x} .y=${this.y-e/2} .s=${e}></fiber-triangle>
        <fiber-triangle .x=${this.x-e} .y=${this.y+e/2} .s=${e}></fiber-triangle>
        <fiber-triangle .x=${this.x+e} .y=${this.y+e/2} .s=${e}></fiber-triangle>
      `}});class Re extends Ae{constructor(){super(...arguments),this.elapsed=0}render(){const e=this.elapsed/1e3%10,t=1+(e>5?10-e:e)/10;return this.style.transform="scaleX("+t/2.1+") scaleY(0.7) translateZ(0.1px)",$e`
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
    `}}Re.observedPropertys=["elapsed"],customElements.define("app-root",Re),document.body.innerHTML=l`
  <ul>
    <li><a href="https://stencil-fiber-demo.firebaseapp.com/perf.html">stencil-fiber-demo</a></li>
    <li><a href="https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html">react-fiber-demo</a></li>
  </ul>
`;const We=new Re;document.body.append(We);const Fe=Date.now();requestAnimationFrame((function e(){We.elapsed=Date.now()-Fe,requestAnimationFrame(e)}))}]);
//# sourceMappingURL=bundle.cbee3e8f05698d33f0b9.js.map