!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gem/build/ref-route/",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function i(t){"function"==typeof t&&(n.size||globalThis.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t))}const o=globalThis.Image||Object;class r extends o{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,r.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}class a extends URLSearchParams{constructor(t){if(t instanceof a)return t;super(t),Object.setPrototypeOf(this,a.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function l(t){return Object.keys(t).forEach(e=>{delete t[e]}),t}class h extends Error{constructor(t){super(t),this.message=`gem: ${this.message}`}}function c(){}const u="gem@storeHandlesKey";function d(t){const e=t;return Object.defineProperty(e,u,{enumerable:!1,value:new Set,writable:!0}),e}function p(t,e){Object.assign(t,e),t[u].forEach(t=>{i(t)})}const f=window.history,m=window.location,g=f.pushState.bind(f),v=f.replaceState.bind(f);let _=0;const y=()=>++_,b=d({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),w=new Map;function x(t){var e,s,n,i;if(null===(e=t)||void 0===e?void 0:e.$key)throw new h("`$key` is not allowed");if(null===(s=t)||void 0===s?void 0:s.$hasCloseHandle)throw new h("`$hasCloseHandle` is not allowed");if(null===(n=t)||void 0===n?void 0:n.$hasOpenHandle)throw new h("`$hasOpenHandle` is not allowed");if(null===(i=t)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new h("`$hasShouldCloseHandle` is not allowed")}function k(t){return f.basePath?f.basePath+("/"===t?"":t):t}function E(t){return t.replace(new RegExp(`^${f.basePath}`),"")}function $(t){const e=w.get(b.$key)||{},s=t.path||E(m.pathname),n=new a(t.query||(t.path?"":m.search)),i=t.path&&t.path!==e.path||t.query&&String(t.query)!==String(e.query),o=t.title||(i?"":document.title),r=t.hash||(i?"":m.hash);return Object.assign(Object.assign({},t),{title:o,path:s,query:n,hash:r})}function N(t,e){x(e.data);const s=$(e),{title:n,path:i,query:o,hash:r}=s,h=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:y()},s.data||{});w.set(h.$key,s),p(l(b),h);const c=k(i)+new a(o)+r,u=m.hash;("push"===t?g:v)(h,n,c),u!==r&&window.dispatchEvent(new CustomEvent("hashchange"))}function P(t,e,s,n){x(e);const i=Object.assign({$key:y()},e||{}),{pathname:o,search:r,hash:h}=new URL(n,m.origin),c=$({path:o,query:new a(r),hash:h,title:s,data:e});w.set(i.$key,c),p(l(b),i);const u=k(o)+c.query+h,d=m.hash;("push"===t?g:v)(i,s,u),d!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}window.addEventListener("hashchange",({isTrusted:t})=>{t&&f.replace({hash:m.hash})});const S=d({basePath:""});if(!("basePath"in f)){if(Object.defineProperties(f,{basePath:{get:()=>S.basePath,set(t){if(S.basePath)throw new h("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");p(S,{basePath:t}),Object.assign(w.get(b.$key),{path:E(m.pathname)})}},getParams:{value:function(){return w.get(b.$key)}},updateParams:{value:function(t){Object.assign(w.get(b.$key),t),p(b,{})}},store:{value:b},push:{value:function(t){N("push",t)}},pushIgnoreCloseHandle:{value:function(t){var e,s,n;b.$hasCloseHandle?(null===(n=null===(e=w.get(b.$key))||void 0===e?void 0:(s=e).close)||void 0===n||n.call(s),f.replace(t)):f.push(t)}},replace:{value:function(t){N("replace",t)}},pushState:{value:function(t,e,s){P("push",t,e,s)}},replaceState:{value:function(t,e,s){P("replace",t,e,s)}}}),f.state)if(f.state.$hasCloseHandle)p(b,f.state),f.back();else{const t=$({title:document.title});p(b,Object.assign({$key:y()},f.state||{})),w.set(b.$key,t)}else{const{pathname:t,search:e,hash:s}=m;f.replace({path:t,query:e,hash:s})}let t=!1;window.addEventListener("popstate",e=>{var s,n,i,o,r,h;const c=e.state;if(!(null===(s=c)||void 0===s?void 0:s.$key))return;if(t)return void(t=!1);if(!w.has(c.$key)){const{pathname:t,search:e,hash:s}=m;w.set(c.$key,{path:t,query:new a(e),hash:s,title:document.title,data:c})}const u=b;if(c.$key>u.$key&&c.$hasOpenHandle)null===(o=null===(n=w.get(c.$key))||void 0===n?void 0:(i=n).open)||void 0===o||o.call(i);else if(u.$hasCloseHandle){const e=w.get(u.$key),s=null===(r=e)||void 0===r?void 0:r.close,n=null===(h=e)||void 0===h?void 0:h.shouldClose;if(n&&!n())return t=!0,void f.forward();s?s():c.$hasCloseHandle&&(t=!0,f.back())}p(l(b),c)})}
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
 */const C=new WeakMap,O=t=>(...e)=>{const s=t(...e);return C.set(s,!0),s},H=t=>"function"==typeof t&&C.has(t),j=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,A=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},R=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},V={},T={},M=`{{lit-${String(Math.random()).slice(2)}}}`,q=`\x3c!--${M}--\x3e`,L=new RegExp(`${M}|${q}`),I="$lit$";class W{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)U(e[t].name,I)&&n++;for(;n-- >0;){const e=l[a],s=F.exec(e)[2],n=s.toLowerCase()+I,i=t.getAttribute(n);t.removeAttribute(n);const o=i.split(L);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(M)>=0){const n=t.parentNode,i=e.split(L),o=i.length-1;for(let e=0;e<o;e++){let s,o=i[e];if(""===o)s=B();else{const t=F.exec(o);null!==t&&U(t[2],I)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-I.length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(B(),t),s.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===M){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(B(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(M,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const U=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},D=t=>-1!==t.index,B=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class z{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=j?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],D(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return j&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const J=` ${M} `;class K{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===t.indexOf("--\x3e",i+1);const o=F.exec(t);e+=null===o?t+(s?J:q):t.substr(0,o.index)+o[1]+o[2]+I+o[3]+M}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class Z extends K{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),A(e,s.firstChild),t}}
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
 */const G=t=>null===t||!("object"==typeof t||"function"==typeof t),Q=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class X{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Y(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(G(t)||!Q(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Y{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===V||G(t)&&t===this.value||(this.value=t,H(t)||(this.committer.dirty=!0))}commit(){for(;H(this.value);){const t=this.value;this.value=V,t(this)}this.value!==V&&this.committer.commit()}}class tt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(B()),this.endNode=t.appendChild(B())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=B()),t.__insert(this.endNode=B())}insertAfterPart(t){t.__insert(this.startNode=B()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}const t=this.__pendingValue;t!==V&&(G(t)?t!==this.value&&this.__commitText(t):t instanceof K?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Q(t)?this.__commitIterable(t):t===T?(this.value=T,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof z&&this.value.template===e)this.value.update(t.values);else{const s=new z(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new tt(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){R(this.startNode.parentNode,t.nextSibling,this.endNode)}}class et{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}if(this.__pendingValue===V)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=V}}class st extends X{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new nt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class nt extends Y{}let it=!1;try{const t={get capture(){return it=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class ot{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;H(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}if(this.__pendingValue===V)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=rt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=V}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const rt=t=>t&&(it?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const at=new class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new st(t,e.slice(1),s).parts}return"@"===i?[new ot(t,e.slice(1),n.eventContext)]:"?"===i?[new et(t,e.slice(1),s)]:new X(t,e,s).parts}handleTextExpression(t){return new tt(t)}};
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
 */function lt(t){let e=ht.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ht.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(M);return s=e.keyString.get(n),void 0===s&&(s=new W(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const ht=new Map,ct=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ut=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=s.insertBefore(B(),n);s.insertBefore(B(),n);const o=new tt(t.options);return o.insertAfterNode(i),o},dt=(t,e)=>(t.setValue(e),t.commit(),t),pt=(t,e,s)=>{const n=t.startNode.parentNode,i=s?s.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&A(n,e.startNode,o,i)},ft=t=>{R(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},mt=(t,e,s)=>{const n=new Map;for(let i=e;i<=s;i++)n.set(t[i],i);return n},gt=new WeakMap,vt=new WeakMap,_t=O((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof tt))throw new Error("repeat can only be used in text bindings");const i=gt.get(e)||[],o=vt.get(e)||[],r=[],a=[],l=[];let h,c,u=0;for(const e of t)l[u]=n?n(e,u):u,a[u]=s(e,u),u++;let d=0,p=i.length-1,f=0,m=a.length-1;for(;d<=p&&f<=m;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===l[f])r[f]=dt(i[d],a[f]),d++,f++;else if(o[p]===l[m])r[m]=dt(i[p],a[m]),p--,m--;else if(o[d]===l[m])r[m]=dt(i[d],a[m]),pt(e,i[d],r[m+1]),d++,m--;else if(o[p]===l[f])r[f]=dt(i[p],a[f]),pt(e,i[p],i[d]),p--,f++;else if(void 0===h&&(h=mt(l,f,m),c=mt(o,d,p)),h.has(o[d]))if(h.has(o[p])){const t=c.get(l[f]),s=void 0!==t?i[t]:null;if(null===s){const t=ut(e,i[d]);dt(t,a[f]),r[f]=t}else r[f]=dt(s,a[f]),pt(e,s,i[d]),i[t]=null;f++}else ft(i[p]),p--;else ft(i[d]),d++;for(;f<=m;){const t=ut(e,r[m+1]);dt(t,a[f]),r[f++]=t}for(;d<=p;){const t=i[d++];null!==t&&ft(t)}gt.set(e,r),vt.set(e,l)}}),yt=new WeakMap,bt=O((t,e)=>s=>{const n=yt.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||yt.has(s)))return;s.setValue(e()),yt.set(s,Array.isArray(t)?Array.from(t):t)}),wt=O(t=>e=>{if(void 0===t&&e instanceof Y){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let xt={html:(t,...e)=>new K(t,e,"html",at),svg:(t,...e)=>new Z(t,e,"svg",at),render:(t,e,s)=>{let n=ct.get(e);void 0===n&&(R(e,e.firstChild),ct.set(e,n=new tt(Object.assign({templateFactory:lt},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:O,repeat:_t,guard:bt,ifDefined:wt};window.__litHtml?xt=window.__litHtml:window.__litHtml=xt;const{html:kt,svg:Et,render:$t,directive:Nt,repeat:Pt,guard:St,ifDefined:Ct}=xt;class Ot extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=c}),i&&i.forEach(t=>{if(!t[u])throw new Error("`observedStores` only support store module");!function(t,e){t[u].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}get internals(){return this.__internals||(this.__internals=this.attachInternals()),this.__internals}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),i(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return kt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&($t(this.render(),this.__renderRoot),i(this.updated))}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),i(this.__update))}__connectedCallback(){$t(this.render(),this.__renderRoot);const t=this.mounted();"function"==typeof t&&(this.__unmountCallback=t),this.__isMounted=!0}disconnectedCallback(){var t;const e=this.constructor;e.observedStores&&e.observedStores.forEach(t=>{!function(t,e){t[u].delete(e)}(t,this.__update)}),null===(t=this.__unmountCallback)||void 0===t||t.call(this),this.unmounted(),this.__isMounted=!1}}class Ht extends Ot{connectedCallback(){this.willMount(),this.__connectedCallback()}}const jt=new r;let At=!1;const Rt=()=>{window.requestAnimationFrame((function t(e){const s=jt.get();s&&(s(),performance.now()-e<16)?t(e):At&&Rt()}))};jt.addEventListener("start",()=>{At=!0,Rt()}),jt.addEventListener("end",()=>At=!1);const Vt=customElements.define.bind(customElements);function Tt(t,e){const s=t.constructor;s.observedAttributes||(s.observedAttributes=[]),s.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function Mt(t,e){const s=t.constructor;s.observedPropertys||(s.observedPropertys=[]),s.observedPropertys.push(e)}function qt(t){return function(e){const s=e;s.observedStores||(s.observedStores=[]),s.observedStores.push(t)}}function Lt(t){return function(e){customElements.define(t,e)}}customElements.define=function(t,e,s){customElements.get(t)||Vt(t,e,s)};var It,Wt=function(t,e,s,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};class Ut extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Dt(t){return new Ut(t)}function Bt(t,e){return!!e.match(Dt(t))}function Ft(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}function zt(t,e){const s=Ft(t,e);return Object.assign({path:s},e)}let Jt=It=class extends Ht{constructor(){super();const{path:t,query:e}=f.getParams(),s=t+e;this._href=s}static getParams(){if(It.currentRoute)return function(t,e){const s=Dt(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(It.currentRoute.pattern,f.getParams().path)}initPage(){It.currentRoute&&It.currentRoute.title&&It.currentRoute.title!==f.getParams().title&&f.updateParams({title:It.currentRoute.title})}shouldUpdate(){const{path:t,query:e}=f.getParams(),s=t+e;return s!==this._href&&(this._href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.change(It.currentRoute)}render(){if(!this.routes)return this.callback();It.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of t){const{pattern:t}=s;if("*"===t)e=s;else if(Bt(t,f.getParams().path)){It.currentRoute=s;break}}return It.currentRoute||(It.currentRoute=e),It.currentRoute?It.currentRoute.redirect?(f.replace({path:It.currentRoute.redirect}),this.callback()):kt`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${It.currentRoute.content}
    `:this.callback()}callback(){return It.currentRoute=null,kt``}};Wt([Mt],Jt.prototype,"routes",void 0),Wt([function(t,e){const s=t.constructor;s.defineEvents||(s.defineEvents=[]),s.defineEvents.push(e)}],Jt.prototype,"change",void 0),Jt=It=Wt([qt(f.store),Lt("gem-route")],Jt);var Kt=function(t,e,s,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let Zt=class extends Ht{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:i}=f.getParams();if(s+n+i!==e)if(t.stopPropagation(),this.route)f.pushIgnoreCloseHandle(Object.assign(Object.assign({},zt(this.route,this.options)),{title:this.route.title||this.docTitle}));else if(this.href){const{pathname:t,search:s,hash:n}=new URL(e,location.origin);f.pushIgnoreCloseHandle({path:t,query:s,hash:n,title:this.docTitle})}else f.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash,title:this.docTitle})},this.preventDefault=t=>{t.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options&&this.options.query||"",e=this.options&&this.options.hash||"";return Ft(this.route,this.options)+t+e}{const t=this.href||this.path+this.query+this.hash,{path:e,query:s}=f.getParams();return t.startsWith("#")?`${e}${s}${t}`:t.startsWith("?")?`${e}${t}`:t}}render(t=this.getHref()){return kt`
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
      <a @click=${this.preventDefault} href=${new URL(f.basePath+t,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};Kt([Tt],Zt.prototype,"href",void 0),Kt([Tt],Zt.prototype,"path",void 0),Kt([Tt],Zt.prototype,"query",void 0),Kt([Tt],Zt.prototype,"hash",void 0),Kt([Tt],Zt.prototype,"docTitle",void 0),Kt([Mt],Zt.prototype,"route",void 0),Kt([Mt],Zt.prototype,"options",void 0),Zt=Kt([Lt("gem-link"),qt(S)],Zt);let Gt=class extends Zt{render(){const{path:t,query:e,hash:s}=f.getParams(),n=this.pattern&&Bt(this.pattern,t),i=this.getHref();return n||t+e+s===i?(this.active=!0,this.classList.add("active")):(this.active=!1,this.classList.remove("active")),super.render(i)}};Kt([Tt],Gt.prototype,"pattern",void 0),Kt([function(t,e){Object.defineProperty(t,e,{get(){var t,s;return!!(null===(s=null===(t=this.internals)||void 0===t?void 0:t.states)||void 0===s?void 0:s.contains(e))},set(t){const s=this,n=s.internals;n.states||(n.states=s.classList),t?n.states.add(e):n.states.remove(e)}})}],Gt.prototype,"active",void 0),Gt=Kt([Lt("gem-active-link"),qt(f.store)],Gt);const Qt={home:{pattern:"/",get content(){return kt`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link:state(active) {
            color: inherit;
          }
          gem-active-link.active {
            color: inherit;
          }
        </style>
        current route: home page, click navigation to a page
        <gem-active-link .route=${Qt.a} .options=${{params:{b:1}}}>
          a page link, params: {a: 1}
        </gem-active-link>
      `}},a:{pattern:"/a/:b",get content(){return kt`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link:state(active) {
            color: inherit;
          }
          gem-active-link.active {
            color: inherit;
          }
        </style>
        current route: /a/:b, click navigation to home page, cuurent query: ${f.getParams().query.toString()}
        <gem-active-link .route=${Qt.a} .options=${{params:{b:1},query:"?a=1"}}>
          a page link, query: ?a=1
        </gem-active-link>
      `}}};class Xt extends Ht{constructor(){super(...arguments),this.onclick=()=>{Jt.currentRoute===Qt.home?f.push(zt(Qt.a,{params:{b:String(Date.now())}})):f.push(zt(Qt.home))}}render(){return kt`
      <main>
        <gem-route .routes=${Qt}></gem-route>
      </main>
    `}}customElements.define("app-root",Xt),document.body.append(new Xt)}]);
//# sourceMappingURL=bundle.0b42b6d0b719cf41a4d1.js.map