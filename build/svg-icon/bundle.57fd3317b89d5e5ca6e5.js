!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gem/build/svg-icon/",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const n=new Set;function i(e){n.size||globalThis.queueMicrotask(()=>{n.forEach(e=>e()),n.clear()}),n.delete(e),n.add(e)}const o=globalThis.Image||Object;class r extends o{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,r.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class a extends URLSearchParams{constructor(e){if(e instanceof a)return e;super(e),Object.setPrototypeOf(this,a.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}new WeakMap;function l(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class h extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function d(){}const c="gem@storeHandlesKey";function u(e){const t=e;return Object.defineProperty(t,c,{enumerable:!1,value:new Set,writable:!0}),t}function p(e,t){Object.assign(e,t),e[c].forEach(e=>{i(e)})}const f=window.history,m=window.location,g=f.pushState.bind(f),v=f.replaceState.bind(f);let _=0;const b=()=>++_,y=u({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),w=new Map;function x(e){var t,s,n,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new h("`$key` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasCloseHandle)throw new h("`$hasCloseHandle` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasOpenHandle)throw new h("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new h("`$hasShouldCloseHandle` is not allowed")}function E(e){return f.basePath?f.basePath+("/"===e?"":e):e}function N(e){return e.replace(new RegExp(`^${f.basePath}`),"")}function S(e){const t=e.title||"",s=e.path||N(m.pathname),n=new a(e.query||(e.path?"":m.search)),i=e.path||e.query,o=e.hash||(i?"":m.hash);return Object.assign(Object.assign({},e),{title:t,path:s,query:n,hash:o})}function C(e,t){x(t.data);const s=S(t),{title:n,path:i,query:o,hash:r}=s,h=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:b()},s.data||{});w.set(h.$key,s),p(l(y),h);const d=E(i)+new a(o)+r,c=m.hash;("push"===e?g:v)(h,n,d),c!==r&&window.dispatchEvent(new CustomEvent("hashchange"))}function $(e,t,s,n){x(t);const i=Object.assign({$key:b()},t||{}),{pathname:o,search:r,hash:h}=new URL(n,m.origin),d=S({path:o,query:new a(r),hash:h,title:s,data:t});w.set(i.$key,d),p(l(y),i);const c=E(o)+d.query+h,u=m.hash;("push"===e?g:v)(i,s,c),u!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const k=u({basePath:""});if(!("basePath"in f)){if(Object.defineProperties(f,{basePath:{get:()=>k.basePath,set(e){if(k.basePath)throw new h("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");p(k,{basePath:e}),Object.assign(w.get(y.$key),{path:N(m.pathname)})}},getParams:{value:function(){return w.get(y.$key)}},updateParams:{value:function(e){Object.assign(w.get(y.$key),e),p(y,{})}},store:{value:y},push:{value:function(e){C("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,s,n;y.$hasCloseHandle?(null===(n=null===(t=w.get(y.$key))||void 0===t?void 0:(s=t).close)||void 0===n||n.call(s),f.replace(e)):f.push(e)}},replace:{value:function(e){C("replace",e)}},pushState:{value:function(e,t,s){$("push",e,t,s)}},replaceState:{value:function(e,t,s){$("replace",e,t,s)}}}),f.state)if(f.state.$hasCloseHandle)p(y,f.state),f.back();else{const e=S({title:document.title});p(y,Object.assign({$key:b()},f.state||{})),w.set(y.$key,e)}else{const{pathname:e,search:t,hash:s}=m;f.replace({path:e,query:t,hash:s})}let e=!1;window.addEventListener("popstate",t=>{var s,n,i,o,r,h;const d=t.state;if(!(null===(s=d)||void 0===s?void 0:s.$key))return;if(e)return void(e=!1);if(!w.has(d.$key)){const{pathname:e,search:t,hash:s}=m;w.set(d.$key,{path:e,query:new a(t),hash:s,title:document.title,data:d})}const c=y;if(d.$key>c.$key&&d.$hasOpenHandle)null===(o=null===(n=w.get(d.$key))||void 0===n?void 0:(i=n).open)||void 0===o||o.call(i);else if(c.$hasCloseHandle){const t=w.get(c.$key),s=null===(r=t)||void 0===r?void 0:r.close,n=null===(h=t)||void 0===h?void 0:h.shouldClose;if(n&&!n())return e=!0,void f.forward();s?s():d.$hasCloseHandle&&(e=!0,f.back())}p(l(y),d)})}
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
 */const O=new WeakMap,P=e=>(...t)=>{const s=e(...t);return O.set(s,!0),s},V=e=>"function"==typeof e&&O.has(e),H=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,A=(e,t,s=null,n=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,n),t=s}},M=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},T={},j={},L=`{{lit-${String(Math.random()).slice(2)}}}`,R=`\x3c!--${L}--\x3e`,I=new RegExp(`${L}|${R}`),q="$lit$";class W{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)B(t[e].name,q)&&n++;for(;n-- >0;){const t=l[a],s=F.exec(t)[2],n=s.toLowerCase()+q,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(I);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(L)>=0){const n=e.parentNode,i=t.split(I),o=i.length-1;for(let t=0;t<o;t++){let s,o=i[t];if(""===o)s=U();else{const e=F.exec(o);null!==e&&B(e[2],q)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-q.length)+e[3]),s=document.createTextNode(o)}n.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(U(),e),s.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===L){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(U(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(L,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const B=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},z=e=>-1!==e.index,U=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class D{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=H?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],z(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return H&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const G=` ${L} `;class J{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const o=F.exec(e);t+=null===o?e+(s?G:R):e.substr(0,o.index)+o[1]+o[2]+q+o[3]+L}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class K extends J{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),A(t,s.firstChild),e}}
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
 */const Z=e=>null===e||!("object"==typeof e||"function"==typeof e),Q=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class X{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Y(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(Z(e)||!Q(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Y{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===T||Z(e)&&e===this.value||(this.value=e,V(e)||(this.committer.dirty=!0))}commit(){for(;V(this.value);){const e=this.value;this.value=T,e(this)}this.value!==T&&this.committer.commit()}}class ee{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(U()),this.endNode=e.appendChild(U())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=U()),e.__insert(this.endNode=U())}insertAfterPart(e){e.__insert(this.startNode=U()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;V(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}const e=this.__pendingValue;e!==T&&(Z(e)?e!==this.value&&this.__commitText(e):e instanceof J?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Q(e)?this.__commitIterable(e):e===j?(this.value=j,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof D&&this.value.template===t)this.value.update(e.values);else{const s=new D(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)s=t[n],void 0===s&&(s=new ee(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){M(this.startNode.parentNode,e.nextSibling,this.endNode)}}class te{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;V(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}if(this.__pendingValue===T)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=T}}class se extends X{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ne extends Y{}let ie=!1;try{const e={get capture(){return ie=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class oe{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;V(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}if(this.__pendingValue===T)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=re(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=T}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const re=e=>e&&(ie?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const ae=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];if("."===i){return new se(e,t.slice(1),s).parts}return"@"===i?[new oe(e,t.slice(1),n.eventContext)]:"?"===i?[new te(e,t.slice(1),s)]:new X(e,t,s).parts}handleTextExpression(e){return new ee(e)}};
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
 */function le(e){let t=he.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},he.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(L);return s=t.keyString.get(n),void 0===s&&(s=new W(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const he=new Map,de=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ce=(e,t)=>{const s=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,i=s.insertBefore(U(),n);s.insertBefore(U(),n);const o=new ee(e.options);return o.insertAfterNode(i),o},ue=(e,t)=>(e.setValue(t),e.commit(),e),pe=(e,t,s)=>{const n=e.startNode.parentNode,i=s?s.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&A(n,t.startNode,o,i)},fe=e=>{M(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},me=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},ge=new WeakMap,ve=new WeakMap,_e=P((e,t,s)=>{let n;return void 0===s?s=t:void 0!==t&&(n=t),t=>{if(!(t instanceof ee))throw new Error("repeat can only be used in text bindings");const i=ge.get(t)||[],o=ve.get(t)||[],r=[],a=[],l=[];let h,d,c=0;for(const t of e)l[c]=n?n(t,c):c,a[c]=s(t,c),c++;let u=0,p=i.length-1,f=0,m=a.length-1;for(;u<=p&&f<=m;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===l[f])r[f]=ue(i[u],a[f]),u++,f++;else if(o[p]===l[m])r[m]=ue(i[p],a[m]),p--,m--;else if(o[u]===l[m])r[m]=ue(i[u],a[m]),pe(t,i[u],r[m+1]),u++,m--;else if(o[p]===l[f])r[f]=ue(i[p],a[f]),pe(t,i[p],i[u]),p--,f++;else if(void 0===h&&(h=me(l,f,m),d=me(o,u,p)),h.has(o[u]))if(h.has(o[p])){const e=d.get(l[f]),s=void 0!==e?i[e]:null;if(null===s){const e=ce(t,i[u]);ue(e,a[f]),r[f]=e}else r[f]=ue(s,a[f]),pe(t,s,i[u]),i[e]=null;f++}else fe(i[p]),p--;else fe(i[u]),u++;for(;f<=m;){const e=ce(t,r[m+1]);ue(e,a[f]),r[f++]=e}for(;u<=p;){const e=i[u++];null!==e&&fe(e)}ge.set(t,r),ve.set(t,l)}}),be=new WeakMap,ye=P((e,t)=>s=>{const n=be.get(s);if(Array.isArray(e)){if(Array.isArray(n)&&n.length===e.length&&e.every((e,t)=>e===n[t]))return}else if(n===e&&(void 0!==e||be.has(s)))return;s.setValue(t()),be.set(s,Array.isArray(e)?Array.from(e):e)}),we=P(e=>t=>{if(void 0===e&&t instanceof Y){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let xe={html:(e,...t)=>new J(e,t,"html",ae),svg:(e,...t)=>new K(e,t,"svg",ae),render:(e,t,s)=>{let n=de.get(t);void 0===n&&(M(t,t.firstChild),de.set(t,n=new ee(Object.assign({templateFactory:le},s))),n.appendInto(t)),n.setValue(e),n.commit()},directive:P,repeat:_e,guard:ye,ifDefined:we};window.__litHtml?xe=window.__litHtml:window.__litHtml=xe;const{html:Ee,svg:Ne,render:Se,directive:Ce,repeat:$e,guard:ke,ifDefined:Oe}=xe;class Pe extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),s&&s.forEach(e=>{this.__connectProperty(e,!1)}),n&&n.forEach(e=>{this.__connectProperty(e,!0),this[e]=d}),i&&i.forEach(e=>{if(!e[c])throw new Error("`observedStores` only support store module");!function(e,t){e[c].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}get internals(){return this.__internals||(this.__internals=this.attachInternals()),this.__internals}__connectProperty(e,t=!1){if(e in this)return;let s=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>s,set(n){if(n!==s){if(t){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=t=>{const s=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(e,s,n),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return Ee`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Se(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,s){}attributeChanged(e,t,s){}unmounted(){}attributeChangedCallback(e,t,s){this.__isMounted&&(this.attributeChanged(e,t,s),i(this.__update))}__connectedCallback(){Se(this.render(),this.__renderRoot);const e=this.mounted();"function"==typeof e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[c].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Ve extends Pe{connectedCallback(){this.willMount(),this.__connectedCallback()}}const He=new r;let Ae=!1;const Me=()=>{window.requestAnimationFrame((function e(t){const s=He.get();s&&(s(),performance.now()-t<16)?e(t):Ae&&Me()}))};He.addEventListener("start",()=>{Ae=!0,Me()}),He.addEventListener("end",()=>Ae=!1);const Te=customElements.define.bind(customElements);customElements.define=function(e,t,s){customElements.get(e)||Te(e,t,s)};var je=function(e,t,s,n){var i,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,s,r):i(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r};let Le=class extends Ve{constructor(){super(...arguments),this.root=document}getContent(){const e=this.root.querySelector(this.selector);return e instanceof HTMLTemplateElement?e.content.cloneNode(!0):e instanceof SVGSVGElement?e.cloneNode(!0):null}render(){return Ee`
      <style>
        :host {
          position: relative;
        }
        :host(:not([hidden])) {
          display: inline-flex;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      </style>
      ${this.getContent()}
      <slot></slot>
    `}};var Re;je([function(e,t){const s=e.constructor;s.observedAttributes||(s.observedAttributes=[]),s.observedAttributes.push(t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()))}],Le.prototype,"selector",void 0),je([function(e,t){const s=e.constructor;s.observedPropertys||(s.observedPropertys=[]),s.observedPropertys.push(t)}],Le.prototype,"root",void 0),Le=je([(Re="gem-use",function(e){customElements.define(Re,e)})],Le),Se(Ee`
    <template id="icon">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </template>
    <gem-use .root=${document.body} selector="#icon"></gem-use>
    <gem-use selector="#icon"></gem-use>
  `,document.body)}]);
//# sourceMappingURL=bundle.57fd3317b89d5e5ca6e5.js.map