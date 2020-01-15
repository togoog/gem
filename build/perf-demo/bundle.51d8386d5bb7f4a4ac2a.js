!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gem/build/perf-demo/",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const n=new Set;function i(e){n.size||globalThis.queueMicrotask(()=>{n.forEach(e=>e()),n.clear()}),n.delete(e),n.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}function a(e,...t){return e.reduce((e,s,n)=>e+(t[n-1]||"")+s)}new WeakMap;function l(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class h extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function d(){}const u="gem@storeHandlesKey";function c(e){const t=e;return Object.defineProperty(t,u,{enumerable:!1,value:new Set,writable:!0}),t}function p(e,t){Object.assign(e,t),e[u].forEach(e=>{i(e)})}const f=window.history,m=window.location,g=f.pushState.bind(f),v=f.replaceState.bind(f);let _=0;const b=()=>++_,y=c({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),w=new Map;function x(e){var t,s,n,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new h("`$key` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasCloseHandle)throw new h("`$hasCloseHandle` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasOpenHandle)throw new h("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new h("`$hasShouldCloseHandle` is not allowed")}function E(e){return f.basePath?f.basePath+("/"===e?"":e):e}function N(e){return e.replace(new RegExp(`^${f.basePath}`),"")}function $(e){const t=e.title||"",s=e.path||N(m.pathname),n=new r(e.query||(e.path?"":m.search)),i=e.path||e.query,o=e.hash||(i?"":m.hash);return Object.assign(Object.assign({},e),{title:t,path:s,query:n,hash:o})}function S(e,t){x(t.data);const s=$(t),{title:n,path:i,query:o,hash:a}=s,h=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:b()},s.data||{});w.set(h.$key,s),p(l(y),h);const d=E(i)+new r(o)+a,u=m.hash;("push"===e?g:v)(h,n,d),u!==a&&window.dispatchEvent(new CustomEvent("hashchange"))}function C(e,t,s,n){x(t);const i=Object.assign({$key:b()},t||{}),{pathname:o,search:a,hash:h}=new URL(n,m.origin),d=$({path:o,query:new r(a),hash:h,title:s,data:t});w.set(i.$key,d),p(l(y),i);const u=E(o)+d.query+h,c=m.hash;("push"===e?g:v)(i,s,u),c!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const k=c({basePath:""});if(!("basePath"in f)){if(Object.defineProperties(f,{basePath:{get:()=>k.basePath,set(e){if(k.basePath)throw new h("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");p(k,{basePath:e}),Object.assign(w.get(y.$key),{path:N(m.pathname)})}},getParams:{value:function(){return w.get(y.$key)}},updateParams:{value:function(e){Object.assign(w.get(y.$key),e),p(y,{})}},store:{value:y},push:{value:function(e){S("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,s,n;y.$hasCloseHandle?(null===(n=null===(t=w.get(y.$key))||void 0===t?void 0:(s=t).close)||void 0===n||n.call(s),f.replace(e)):f.push(e)}},replace:{value:function(e){S("replace",e)}},pushState:{value:function(e,t,s){C("push",e,t,s)}},replaceState:{value:function(e,t,s){C("replace",e,t,s)}}}),f.state)if(f.state.$hasCloseHandle)p(y,f.state),f.back();else{const e=$({title:document.title});p(y,Object.assign({$key:b()},f.state||{})),w.set(y.$key,e)}else{const{pathname:e,search:t,hash:s}=m;f.replace({path:e,query:t,hash:s})}let e=!1;window.addEventListener("popstate",t=>{var s,n,i,o,a,h;const d=t.state;if(!(null===(s=d)||void 0===s?void 0:s.$key))return;if(e)return void(e=!1);if(!w.has(d.$key)){const{pathname:e,search:t,hash:s}=m;w.set(d.$key,{path:e,query:new r(t),hash:s,title:document.title,data:d})}const u=y;if(d.$key>u.$key&&d.$hasOpenHandle)null===(o=null===(n=w.get(d.$key))||void 0===n?void 0:(i=n).open)||void 0===o||o.call(i);else if(u.$hasCloseHandle){const t=w.get(u.$key),s=null===(a=t)||void 0===a?void 0:a.close,n=null===(h=t)||void 0===h?void 0:h.shouldClose;if(n&&!n())return e=!0,void f.forward();s?s():d.$hasCloseHandle&&(e=!0,f.back())}p(l(y),d)})}
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
 */const O=new WeakMap,V=e=>(...t)=>{const s=e(...t);return O.set(s,!0),s},P=e=>"function"==typeof e&&O.has(e),A=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,H=(e,t,s=null,n=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,n),t=s}},M=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},T={},j={},L=`{{lit-${String(Math.random()).slice(2)}}}`,I=`\x3c!--${L}--\x3e`,R=new RegExp(`${L}|${I}`),q="$lit$";class W{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)F(t[e].name,q)&&n++;for(;n-- >0;){const t=l[a],s=z.exec(t)[2],n=s.toLowerCase()+q,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(R);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(L)>=0){const n=e.parentNode,i=t.split(R),o=i.length-1;for(let t=0;t<o;t++){let s,o=i[t];if(""===o)s=B();else{const e=z.exec(o);null!==e&&F(e[2],q)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-q.length)+e[3]),s=document.createTextNode(o)}n.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(B(),e),s.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===L){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(B(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(L,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const F=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},U=e=>-1!==e.index,B=()=>document.createComment(""),z=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class D{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=A?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],U(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return A&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const J=` ${L} `;class K{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const o=z.exec(e);t+=null===o?e+(s?J:I):e.substr(0,o.index)+o[1]+o[2]+q+o[3]+L}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class X extends K{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),H(t,s.firstChild),e}}
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
 */const Y=e=>null===e||!("object"==typeof e||"function"==typeof e),Z=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class G{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Q(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(Y(e)||!Z(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Q{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===T||Y(e)&&e===this.value||(this.value=e,P(e)||(this.committer.dirty=!0))}commit(){for(;P(this.value);){const e=this.value;this.value=T,e(this)}this.value!==T&&this.committer.commit()}}class ee{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(B()),this.endNode=e.appendChild(B())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=B()),e.__insert(this.endNode=B())}insertAfterPart(e){e.__insert(this.startNode=B()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;P(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}const e=this.__pendingValue;e!==T&&(Y(e)?e!==this.value&&this.__commitText(e):e instanceof K?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Z(e)?this.__commitIterable(e):e===j?(this.value=j,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof D&&this.value.template===t)this.value.update(e.values);else{const s=new D(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)s=t[n],void 0===s&&(s=new ee(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){M(this.startNode.parentNode,e.nextSibling,this.endNode)}}class te{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;P(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}if(this.__pendingValue===T)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=T}}class se extends G{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ne extends Q{}let ie=!1;try{const e={get capture(){return ie=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class oe{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;P(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=T,e(this)}if(this.__pendingValue===T)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=re(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=T}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const re=e=>e&&(ie?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const ae=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];if("."===i){return new se(e,t.slice(1),s).parts}return"@"===i?[new oe(e,t.slice(1),n.eventContext)]:"?"===i?[new te(e,t.slice(1),s)]:new G(e,t,s).parts}handleTextExpression(e){return new ee(e)}};
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ue=(e,t)=>{const s=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,i=s.insertBefore(B(),n);s.insertBefore(B(),n);const o=new ee(e.options);return o.insertAfterNode(i),o},ce=(e,t)=>(e.setValue(t),e.commit(),e),pe=(e,t,s)=>{const n=e.startNode.parentNode,i=s?s.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&H(n,t.startNode,o,i)},fe=e=>{M(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},me=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},ge=new WeakMap,ve=new WeakMap,_e=V((e,t,s)=>{let n;return void 0===s?s=t:void 0!==t&&(n=t),t=>{if(!(t instanceof ee))throw new Error("repeat can only be used in text bindings");const i=ge.get(t)||[],o=ve.get(t)||[],r=[],a=[],l=[];let h,d,u=0;for(const t of e)l[u]=n?n(t,u):u,a[u]=s(t,u),u++;let c=0,p=i.length-1,f=0,m=a.length-1;for(;c<=p&&f<=m;)if(null===i[c])c++;else if(null===i[p])p--;else if(o[c]===l[f])r[f]=ce(i[c],a[f]),c++,f++;else if(o[p]===l[m])r[m]=ce(i[p],a[m]),p--,m--;else if(o[c]===l[m])r[m]=ce(i[c],a[m]),pe(t,i[c],r[m+1]),c++,m--;else if(o[p]===l[f])r[f]=ce(i[p],a[f]),pe(t,i[p],i[c]),p--,f++;else if(void 0===h&&(h=me(l,f,m),d=me(o,c,p)),h.has(o[c]))if(h.has(o[p])){const e=d.get(l[f]),s=void 0!==e?i[e]:null;if(null===s){const e=ue(t,i[c]);ce(e,a[f]),r[f]=e}else r[f]=ce(s,a[f]),pe(t,s,i[c]),i[e]=null;f++}else fe(i[p]),p--;else fe(i[c]),c++;for(;f<=m;){const e=ue(t,r[m+1]);ce(e,a[f]),r[f++]=e}for(;c<=p;){const e=i[c++];null!==e&&fe(e)}ge.set(t,r),ve.set(t,l)}}),be=new WeakMap,ye=V((e,t)=>s=>{const n=be.get(s);if(Array.isArray(e)){if(Array.isArray(n)&&n.length===e.length&&e.every((e,t)=>e===n[t]))return}else if(n===e&&(void 0!==e||be.has(s)))return;s.setValue(t()),be.set(s,Array.isArray(e)?Array.from(e):e)}),we=V(e=>t=>{if(void 0===e&&t instanceof Q){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let xe={html:(e,...t)=>new K(e,t,"html",ae),svg:(e,...t)=>new X(e,t,"svg",ae),render:(e,t,s)=>{let n=de.get(t);void 0===n&&(M(t,t.firstChild),de.set(t,n=new ee(Object.assign({templateFactory:le},s))),n.appendInto(t)),n.setValue(e),n.commit()},directive:V,repeat:_e,guard:ye,ifDefined:we};window.__litHtml?xe=window.__litHtml:window.__litHtml=xe;const{html:Ee,svg:Ne,render:$e,directive:Se,repeat:Ce,guard:ke,ifDefined:Oe}=xe;class Ve extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),s&&s.forEach(e=>{this.__connectProperty(e,!1)}),n&&n.forEach(e=>{this.__connectProperty(e,!0),this[e]=d}),i&&i.forEach(e=>{if(!e[u])throw new Error("`observedStores` only support store module");!function(e,t){e[u].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let s=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>s,set(n){if(n!==s){if(t){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=t=>{const s=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(e,s,n),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return Ee`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&($e(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,s){}attributeChanged(e,t,s){}unmounted(){}attributeChangedCallback(e,t,s){this.__isMounted&&(this.attributeChanged(e,t,s),i(this.__update))}__connectedCallback(){$e(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[u].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Pe extends Ve{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ae=new o;let He=!1;const Me=()=>{window.requestAnimationFrame((function e(t){const s=Ae.get();s&&(s(),performance.now()-t<16)?e(t):He&&Me()}))};Ae.addEventListener("start",()=>{He=!0,Me()}),Ae.addEventListener("end",()=>He=!1);class Te extends Ve{__update(){Ae.add(()=>{this.shouldUpdate()&&($e(this.render(),this.__renderRoot),this.updated())})}connectedCallback(){this.willMount(),Ae.add(()=>{this.__connectedCallback()})}}const je=customElements.define.bind(customElements);var Le;customElements.define=function(e,t,s){customElements.get(e)||je(e,t,s)};const Ie=c({number:1});setInterval(()=>{p(Ie,{number:Ie.number%10+1})},1e3),customElements.define("fiber-dot",((Le=class extends Te{constructor(){super(...arguments),this.onmouseenter=()=>{this.setState({hover:!0})},this.onmouseleave=()=>{this.setState({hover:!1})},this.state={hover:!1}}render(){const e=1.3*this.size;return Object.assign(this.style,{width:e+"px",height:e+"px",left:this.x+"px",top:this.y+"px",borderRadius:e/2+"px",lineHeight:e+"px",background:this.state.hover?"#ff0":"#61dafb"}),Ee`
        <style>
          :host {
            position: absolute;
            font: normal 15px sans-serif;
            text-align: center;
            cursor: pointer;
            display: block;
          }
        </style>
        ${this.state.hover?"**"+Ie.number+"**":Ie.number}
      `}}).observedStores=[Ie],Le));customElements.define("fiber-triangle",class extends Pe{render(){let e=this.s;if(e<=25)return Ee`
          <fiber-dot .x=${this.x-12.5} .y=${this.y-12.5} .size=${25}></fiber-dot>
        `;e/=2;{const e=performance.now()+.8;for(;performance.now()<e;);}return Ee`
        <fiber-triangle .x=${this.x} .y=${this.y-e/2} .s=${e}></fiber-triangle>
        <fiber-triangle .x=${this.x-e} .y=${this.y+e/2} .s=${e}></fiber-triangle>
        <fiber-triangle .x=${this.x+e} .y=${this.y+e/2} .s=${e}></fiber-triangle>
      `}});class Re extends Pe{constructor(){super(...arguments),this.elapsed=0}render(){const e=this.elapsed/1e3%10,t=1+(e>5?10-e:e)/10;return this.style.transform="scaleX("+t/2.1+") scaleY(0.7) translateZ(0.1px)",Ee`
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
    `}}Re.observedPropertys=["elapsed"],customElements.define("app-root",Re),document.body.innerHTML=a`
  <ul>
    <li><a href="https://stencil-fiber-demo.firebaseapp.com/perf.html">stencil-fiber-demo</a></li>
    <li><a href="https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html">react-fiber-demo</a></li>
  </ul>
`;const qe=new Re;document.body.append(qe);const We=Date.now();requestAnimationFrame((function e(){qe.elapsed=Date.now()-We,requestAnimationFrame(e)}))}]);
//# sourceMappingURL=bundle.51d8386d5bb7f4a4ac2a.js.map