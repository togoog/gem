!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gem/build/dialog/",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function o(t){n.size||globalThis.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}const i=globalThis.Image||Object;class r extends i{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,r.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}class a extends URLSearchParams{constructor(t){if(t instanceof a)return t;super(t),Object.setPrototypeOf(this,a.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function l(t){return Object.keys(t).forEach(e=>{delete t[e]}),t}class h extends Error{constructor(t){super(t),this.message=`gem: ${this.message}`}}function c(){}const d="gem@storeHandlesKey";function u(t){const e=t;return Object.defineProperty(e,d,{enumerable:!1,value:new Set,writable:!0}),e}function p(t,e){Object.assign(t,e),t[d].forEach(t=>{o(t)})}const f=window.history,g=window.location,m=f.pushState.bind(f),v=f.replaceState.bind(f);let b=0;const y=()=>++b,_=u({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),w=new Map;function x(t){var e,s,n,o;if(null===(e=t)||void 0===e?void 0:e.$key)throw new h("`$key` is not allowed");if(null===(s=t)||void 0===s?void 0:s.$hasCloseHandle)throw new h("`$hasCloseHandle` is not allowed");if(null===(n=t)||void 0===n?void 0:n.$hasOpenHandle)throw new h("`$hasOpenHandle` is not allowed");if(null===(o=t)||void 0===o?void 0:o.$hasShouldCloseHandle)throw new h("`$hasShouldCloseHandle` is not allowed")}function k(t){return f.basePath?f.basePath+("/"===t?"":t):t}function E(t){return t.replace(new RegExp(`^${f.basePath}`),"")}function C(t){const e=t.title||"",s=t.path||E(g.pathname),n=new a(t.query||(t.path?"":g.search)),o=t.path||t.query,i=t.hash||(o?"":g.hash);return Object.assign(Object.assign({},t),{title:e,path:s,query:n,hash:i})}function N(t,e){x(e.data);const s=C(e),{title:n,path:o,query:i,hash:r}=s,h=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:y()},s.data||{});w.set(h.$key,s),p(l(_),h);const c=k(o)+new a(i)+r,d=g.hash;("push"===t?m:v)(h,n,c),d!==r&&window.dispatchEvent(new CustomEvent("hashchange"))}function P(t,e,s,n){x(e);const o=Object.assign({$key:y()},e||{}),{pathname:i,search:r,hash:h}=new URL(n,g.origin),c=C({path:i,query:new a(r),hash:h,title:s,data:e});w.set(o.$key,c),p(l(_),o);const d=k(i)+c.query+h,u=g.hash;("push"===t?m:v)(o,s,d),u!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const S=u({basePath:""});if(!("basePath"in f)){if(Object.defineProperties(f,{basePath:{get:()=>S.basePath,set(t){if(S.basePath)throw new h("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");p(S,{basePath:t}),Object.assign(w.get(_.$key),{path:E(g.pathname)})}},getParams:{value:function(){return w.get(_.$key)}},updateParams:{value:function(t){Object.assign(w.get(_.$key),t),p(_,{})}},store:{value:_},push:{value:function(t){N("push",t)}},pushIgnoreCloseHandle:{value:function(t){var e,s,n;_.$hasCloseHandle?(null===(n=null===(e=w.get(_.$key))||void 0===e?void 0:(s=e).close)||void 0===n||n.call(s),f.replace(t)):f.push(t)}},replace:{value:function(t){N("replace",t)}},pushState:{value:function(t,e,s){P("push",t,e,s)}},replaceState:{value:function(t,e,s){P("replace",t,e,s)}}}),f.state)if(f.state.$hasCloseHandle)p(_,f.state),f.back();else{const t=C({title:document.title});p(_,Object.assign({$key:y()},f.state||{})),w.set(_.$key,t)}else{const{pathname:t,search:e,hash:s}=g;f.replace({path:t,query:e,hash:s})}let t=!1;window.addEventListener("popstate",e=>{var s,n,o,i,r,h;const c=e.state;if(!(null===(s=c)||void 0===s?void 0:s.$key))return;if(t)return void(t=!1);if(!w.has(c.$key)){const{pathname:t,search:e,hash:s}=g;w.set(c.$key,{path:t,query:new a(e),hash:s,title:document.title,data:c})}const d=_;if(c.$key>d.$key&&c.$hasOpenHandle)null===(i=null===(n=w.get(c.$key))||void 0===n?void 0:(o=n).open)||void 0===i||i.call(o);else if(d.$hasCloseHandle){const e=w.get(d.$key),s=null===(r=e)||void 0===r?void 0:r.close,n=null===(h=e)||void 0===h?void 0:h.shouldClose;if(n&&!n())return t=!0,void f.forward();s?s():c.$hasCloseHandle&&(t=!0,f.back())}p(l(_),c)})}
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
 */const H=new WeakMap,$=t=>(...e)=>{const s=t(...e);return H.set(s,!0),s},O=t=>"function"==typeof t&&H.has(t),j=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,A=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},R=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},V={},T={},M=`{{lit-${String(Math.random()).slice(2)}}}`,L=`\x3c!--${M}--\x3e`,q=new RegExp(`${M}|${L}`),I="$lit$";class D{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let i=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=o.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)U(e[t].name,I)&&n++;for(;n-- >0;){const e=l[a],s=F.exec(e)[2],n=s.toLowerCase()+I,o=t.getAttribute(n);t.removeAttribute(n);const i=o.split(q);this.parts.push({type:"attribute",index:r,name:s,strings:i}),a+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(M)>=0){const n=t.parentNode,o=e.split(q),i=o.length-1;for(let e=0;e<i;e++){let s,i=o[e];if(""===i)s=B();else{const t=F.exec(i);null!==t&&U(t[2],I)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-I.length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===o[i]?(n.insertBefore(B(),t),s.push(t)):t.data=o[i],a+=i}}else if(8===t.nodeType)if(t.data===M){const e=t.parentNode;null!==t.previousSibling&&r!==i||(r++,e.insertBefore(B(),t)),i=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(M,e+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const U=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},W=t=>-1!==t.index,B=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class z{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=j?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,i=0,r=0,a=n.nextNode();for(;i<s.length;)if(o=s[i],W(o)){for(;r<o.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));i++}else this.__parts.push(void 0),i++;return j&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const J=` ${M} `;class K{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const i=F.exec(t);e+=null===i?t+(s?J:L):t.substr(0,i.index)+i[1]+i[2]+I+i[3]+M}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class Z extends K{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),A(e,s.firstChild),t}}
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
 */const G=t=>null===t||!("object"==typeof t||"function"==typeof t),Q=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class X{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Y(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(G(t)||!Q(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Y{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===V||G(t)&&t===this.value||(this.value=t,O(t)||(this.committer.dirty=!0))}commit(){for(;O(this.value);){const t=this.value;this.value=V,t(this)}this.value!==V&&this.committer.commit()}}class tt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(B()),this.endNode=t.appendChild(B())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=B()),t.__insert(this.endNode=B())}insertAfterPart(t){t.__insert(this.startNode=B()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}const t=this.__pendingValue;t!==V&&(G(t)?t!==this.value&&this.__commitText(t):t instanceof K?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Q(t)?this.__commitIterable(t):t===T?(this.value=T,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof z&&this.value.template===e)this.value.update(t.values);else{const s=new z(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const o of t)s=e[n],void 0===s&&(s=new tt(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(o),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){R(this.startNode.parentNode,t.nextSibling,this.endNode)}}class et{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}if(this.__pendingValue===V)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=V}}class st extends X{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new nt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class nt extends Y{}let ot=!1;try{const t={get capture(){return ot=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class it{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;O(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=V,t(this)}if(this.__pendingValue===V)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=rt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=V}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const rt=t=>t&&(ot?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const at=new class{handleAttributeExpressions(t,e,s,n){const o=e[0];if("."===o){return new st(t,e.slice(1),s).parts}return"@"===o?[new it(t,e.slice(1),n.eventContext)]:"?"===o?[new et(t,e.slice(1),s)]:new X(t,e,s).parts}handleTextExpression(t){return new tt(t)}};
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
 */function lt(t){let e=ht.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ht.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(M);return s=e.keyString.get(n),void 0===s&&(s=new D(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const ht=new Map,ct=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const dt=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,o=s.insertBefore(B(),n);s.insertBefore(B(),n);const i=new tt(t.options);return i.insertAfterNode(o),i},ut=(t,e)=>(t.setValue(e),t.commit(),t),pt=(t,e,s)=>{const n=t.startNode.parentNode,o=s?s.startNode:t.endNode,i=e.endNode.nextSibling;i!==o&&A(n,e.startNode,i,o)},ft=t=>{R(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},gt=(t,e,s)=>{const n=new Map;for(let o=e;o<=s;o++)n.set(t[o],o);return n},mt=new WeakMap,vt=new WeakMap,bt=$((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof tt))throw new Error("repeat can only be used in text bindings");const o=mt.get(e)||[],i=vt.get(e)||[],r=[],a=[],l=[];let h,c,d=0;for(const e of t)l[d]=n?n(e,d):d,a[d]=s(e,d),d++;let u=0,p=o.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===o[u])u++;else if(null===o[p])p--;else if(i[u]===l[f])r[f]=ut(o[u],a[f]),u++,f++;else if(i[p]===l[g])r[g]=ut(o[p],a[g]),p--,g--;else if(i[u]===l[g])r[g]=ut(o[u],a[g]),pt(e,o[u],r[g+1]),u++,g--;else if(i[p]===l[f])r[f]=ut(o[p],a[f]),pt(e,o[p],o[u]),p--,f++;else if(void 0===h&&(h=gt(l,f,g),c=gt(i,u,p)),h.has(i[u]))if(h.has(i[p])){const t=c.get(l[f]),s=void 0!==t?o[t]:null;if(null===s){const t=dt(e,o[u]);ut(t,a[f]),r[f]=t}else r[f]=ut(s,a[f]),pt(e,s,o[u]),o[t]=null;f++}else ft(o[p]),p--;else ft(o[u]),u++;for(;f<=g;){const t=dt(e,r[g+1]);ut(t,a[f]),r[f++]=t}for(;u<=p;){const t=o[u++];null!==t&&ft(t)}mt.set(e,r),vt.set(e,l)}}),yt=new WeakMap,_t=$((t,e)=>s=>{const n=yt.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||yt.has(s)))return;s.setValue(e()),yt.set(s,Array.isArray(t)?Array.from(t):t)}),wt=$(t=>e=>{if(void 0===t&&e instanceof Y){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let xt={html:(t,...e)=>new K(t,e,"html",at),svg:(t,...e)=>new Z(t,e,"svg",at),render:(t,e,s)=>{let n=ct.get(e);void 0===n&&(R(e,e.firstChild),ct.set(e,n=new tt(Object.assign({templateFactory:lt},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:$,repeat:bt,guard:_t,ifDefined:wt};window.__litHtml?xt=window.__litHtml:window.__litHtml=xt;const{html:kt,svg:Et,render:Ct,directive:Nt,repeat:Pt,guard:St,ifDefined:Ht}=xt;class $t extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:o,adoptedStyleSheets:i}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=c}),o&&o.forEach(t=>{if(!t[d])throw new Error("`observedStores` only support store module");!function(t,e){t[d].add(e)}(t,this.__update)}),i&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=i:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(i))}get internals(){return this.__internals||(this.__internals=this.attachInternals()),this.__internals}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),o(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),o(this.__update)}willMount(){}render(){return kt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Ct(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),o(this.__update))}__connectedCallback(){Ct(this.render(),this.__renderRoot);const t=this.mounted();t&&(this.__unmountCallback=t),this.__isMounted=!0}disconnectedCallback(){var t;const e=this.constructor;e.observedStores&&e.observedStores.forEach(t=>{!function(t,e){t[d].delete(e)}(t,this.__update)}),null===(t=this.__unmountCallback)||void 0===t||t.call(this),this.unmounted(),this.__isMounted=!1}}class Ot extends $t{connectedCallback(){this.willMount(),this.__connectedCallback()}}const jt=new r;let At=!1;const Rt=()=>{window.requestAnimationFrame((function t(e){const s=jt.get();s&&(s(),performance.now()-e<16)?t(e):At&&Rt()}))};jt.addEventListener("start",()=>{At=!0,Rt()}),jt.addEventListener("end",()=>At=!1);const Vt=customElements.define.bind(customElements);function Tt(t,e){const s=t.constructor;s.observedAttributes||(s.observedAttributes=[]),s.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function Mt(t,e){const s=t.constructor;s.observedPropertys||(s.observedPropertys=[]),s.observedPropertys.push(e)}function Lt(t){return function(e){const s=e;s.observedStores||(s.observedStores=[]),s.observedStores.push(t)}}function qt(t){return function(e){customElements.define(t,e)}}customElements.define=function(t,e,s){customElements.get(t)||Vt(t,e,s)};const It=Symbol("open mark");var Dt=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};let Ut=class extends Ot{constructor(){super(),this.opened=!1,this.open=()=>{this.opened||(this.openHandle(),f.push({open:this.openHandle,close:this.closeHandle,shouldClose:this.shouldClose}))},this.close=()=>{f.back()},this.closeHandle=this.closeHandle.bind(this),this.openHandle=this.openHandle.bind(this),this.shouldClose=this.shouldClose.bind(this)}closeHandle(){this.opened=!1}openHandle(){this.opened=!0}shouldClose(){return!0}};Dt([function(t,e){Object.defineProperty(t,e,{get(){var t,s;return!!(null===(s=null===(t=this.internals)||void 0===t?void 0:t.states)||void 0===s?void 0:s.contains(e))},set(t){const s=this,n=s.internals;n.states||(n.states=s.classList),t?n.states.add(e):n.states.remove(e)}})}],Ut.prototype,"opened",void 0),Ut=Dt([Lt(f.store)],Ut);var Wt,Bt=Ut,Ft=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};class zt extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Jt(t){return new zt(t)}function Kt(t,e){return!!e.match(Jt(t))}function Zt(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}let Gt=Wt=class extends Ot{constructor(){super();const{path:t,query:e}=f.getParams(),s=t+e;this._href=s}static getParams(){if(Wt.currentRoute)return function(t,e){const s=Jt(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(Wt.currentRoute.pattern,f.getParams().path)}initPage(){Wt.currentRoute&&Wt.currentRoute.title&&Wt.currentRoute.title!==f.getParams().title&&f.updateParams({title:Wt.currentRoute.title})}shouldUpdate(){const{path:t,query:e}=f.getParams(),s=t+e;return s!==this._href&&(this._href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.change(Wt.currentRoute)}render(){if(!this.routes)return this.callback();Wt.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of t){const{pattern:t}=s;if("*"===t)e=s;else if(Kt(t,f.getParams().path)){Wt.currentRoute=s;break}}return Wt.currentRoute||(Wt.currentRoute=e),Wt.currentRoute?Wt.currentRoute.redirect?(f.replace({path:Wt.currentRoute.redirect}),this.callback()):kt`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Wt.currentRoute.content}
    `:this.callback()}callback(){return Wt.currentRoute=null,kt``}};Ft([Mt],Gt.prototype,"routes",void 0),Ft([function(t,e){const s=t.constructor;s.defineEvents||(s.defineEvents=[]),s.defineEvents.push(e)}],Gt.prototype,"change",void 0),Gt=Wt=Ft([Lt(f.store),qt("gem-route")],Gt);var Qt=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};let Xt=class extends Ot{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:o}=f.getParams();if(s+n+o!==e)if(t.stopPropagation(),this.route)f.pushIgnoreCloseHandle(function(t,e){const s=Zt(t,e);return Object.assign({path:s},e)}(this.route,this.options));else if(this.href){const{pathname:t,search:e,hash:s}=new URL(this.href,location.origin);f.pushIgnoreCloseHandle({path:t,query:e,hash:s})}else f.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash})},this.preventDefault=t=>{t.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options&&this.options.query||"",e=this.options&&this.options.hash||"";return Zt(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(t=this.getHref()){return kt`
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
    `}};Qt([Tt],Xt.prototype,"href",void 0),Qt([Tt],Xt.prototype,"path",void 0),Qt([Tt],Xt.prototype,"query",void 0),Qt([Tt],Xt.prototype,"hash",void 0),Qt([Mt],Xt.prototype,"route",void 0),Qt([Mt],Xt.prototype,"options",void 0),Xt=Qt([qt("gem-link"),Lt(S)],Xt);let Yt=class extends Xt{render(){const{path:t,query:e,hash:s}=f.getParams(),n=this.pattern&&Kt(this.pattern,t),o=this.getHref();return n||t+e+s===o?this.setAttribute("active",""):this.removeAttribute("active"),super.render(o)}};Qt([Tt],Yt.prototype,"pattern",void 0),Yt=Qt([qt("gem-active-link"),Lt(f.store)],Yt);class te extends(function(t){var e;return(e=class extends Ot{static get isOpen(){return this.store[It]}static get observedStores(){return[f.store,this.store]}static open(t){const e=()=>p(this.store,Object.assign({[It]:!0},t));setTimeout(()=>{e(),f.push({open:e,close:this.closeHandle.bind(this),shouldClose:this.shouldClose.bind(this)})},100)}static close(){f.back()}static closeHandle(){p(this.store,Object.assign({[It]:!1},t))}static shouldClose(){return!0}}).store=u(Object.assign({[It]:!1},t)),e}({content:kt``,confirmHandle:c})){constructor(){super(...arguments),this.confirm=()=>{te.store.confirmHandle(),te.close()}}render(){return kt`
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
      <div class="root" ?hidden=${!te.isOpen}>
        <div class="body">
          <h2>Confirm Title</h2>
          <button @click=${this.confirm}>close dialog</button>
        </div>
      </div>
    `}}customElements.define("app-confirm",te);customElements.define("app-dialog",class extends Bt{constructor(){super(...arguments),this.shouldClose=()=>!this.opened||(te.open({content:kt`
          Confirm?
        `,confirmHandle:()=>{this.closeHandle(),history.back()}}),!1)}render(){return kt`
      <style>
        .root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
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
      <div class="root" ?hidden=${!this.opened}>
        <div class="body">
          <h2>Dialog Title</h2>
          <slot></slot>
          <button @click=${this.close}>x</button>
        </div>
      </div>
    `}});class ee extends Ot{constructor(){super(...arguments),this.clickHandle=()=>{var t,e;null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("app-dialog"))||void 0===e||e.open()}}render(){return kt`
      <style>
        :host {
          font-size: x-large;
        }
      </style>
      <button @click="${this.clickHandle}">open dialog</button>
      <app-dialog>
        <div>dialog body</div>
        <gem-link path="/hi" style="cursor: pointer; color: blue">replace route</gem-link>
      </app-dialog>
    `}}customElements.define("app-root",ee),document.body.append(new ee),document.body.append(new te)}]);
//# sourceMappingURL=bundle.d42c55cc8622c380caf5.js.map