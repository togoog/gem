!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/gem/build/styled",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=new Set;function i(e){s.size||globalThis.queueMicrotask(()=>{s.forEach(e=>e()),s.clear()}),s.delete(e),s.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}function a(e,...t){return e.reduce((e,n,s)=>e+(t[s-1]||"")+n)}const l=new WeakMap;function h(e=5,t="0123456789abcdefghijklmnopqrstuvwxyz"){const n=t.length;let s="";for(let i=0;i<e;i++)s+=t[Math.floor(Math.random()*n)];return s}function d(e,t){const n=[];let s=`& {${e.replace(new RegExp("&.*{(.*)}","gs"),(function(e){return n.push(e),""}))}}`+n.join("");return"tag"!==t&&(s=s.replace(/&/g,"class"===t?".&":"#&")),{str:s,key:h(),type:t}}const u=(e,...t)=>{return d(a(e,...t),"class")},c=(e,...t)=>{return d(a(e,...t),"id")},p=(e,...t)=>{return d(a(e,...t),"tag")};function f(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class m extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function g(){}const v="gem@storeHandlesKey";function _(e){const t=e;return Object.defineProperty(t,v,{enumerable:!1,value:new Set,writable:!0}),t}function y(e,t){Object.assign(e,t),e[v].forEach(e=>{i(e)})}const b=window.history,w=window.location,x=b.pushState.bind(b),N=b.replaceState.bind(b);let S=0;const E=()=>++S,$=_({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),k=new Map;function C(e){var t,n,s,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new m("`$key` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasCloseHandle)throw new m("`$hasCloseHandle` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasOpenHandle)throw new m("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new m("`$hasShouldCloseHandle` is not allowed")}function V(e){const t=e.title||"",n=e.path||w.pathname,s=new r(e.query||(e.path?"":w.search)),i=e.path||e.query,o=e.hash||(i?"":w.hash);return Object.assign(Object.assign({},e),{title:t,path:n,query:s,hash:o})}function O(e,t){C(t.data);const n=V(t),{title:s,path:i,query:o,hash:a}=n,l=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:E()},n.data||{});k.set(l.$key,n),y(f($),l);const h=b.basePath+i+new r(o)+a;("push"===e?x:N)(l,s,h)}function M(e,t,n,s){C(t);const i=Object.assign({$key:E()},t||{}),{pathname:o,search:a,hash:l}=new URL(s,w.origin),h=V({path:o,query:new r(a),hash:l,title:n,data:t});k.set(i.$key,h),y(f($),i),("push"===e?x:N)(i,n,s)}if(!("basePath"in b)){let e="";if(Object.defineProperties(b,{basePath:{get:()=>e,set(t){if(e)throw new m("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");e=t}},getParams:{value:function(){return k.get($.$key)}},updateParams:{value:function(e){Object.assign(k.get($.$key),e),y($,{})}},store:{value:$},push:{value:function(e){O("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,n,s;$.$hasCloseHandle?(null===(s=null===(t=k.get($.$key))||void 0===t?void 0:(n=t).close)||void 0===s||s.call(n),b.replace(e)):b.push(e)}},replace:{value:function(e){O("replace",e)}},pushState:{value:function(e,t,n){M("push",e,t,n)}},replaceState:{value:function(e,t,n){M("replace",e,t,n)}}}),b.state)if(b.state.$close)b.back();else{const e=V({title:document.title});y($,Object.assign({$key:E()},b.state||{})),k.set($.$key,e)}else{const{pathname:e,search:t,hash:n}=w;b.replace({path:e,query:t,hash:n})}let t=!1;window.addEventListener("popstate",e=>{var n,s,i,o,a,l;const h=e.state;if(!(null===(n=h)||void 0===n?void 0:n.$key))return;if(t)return void(t=!1);if(!k.has(h.$key)){const{pathname:e,search:t,hash:n}=w;k.set(h.$key,{path:e,query:new r(t),hash:n,title:document.title,data:h})}const d=$;if(h.$key>d.$key&&h.$hasOpenHandle)null===(o=null===(s=k.get(h.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(d.$hasCloseHandle){const e=k.get(d.$key),n=null===(a=e)||void 0===a?void 0:a.close,s=null===(l=e)||void 0===l?void 0:l.shouldClose;if(s&&!s())return t=!0,void b.forward();n?n():(t=!0,b.back())}y(f($),h)})}
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
 */const H=new WeakMap,A=e=>(...t)=>{const n=e(...t);return H.set(n,!0),n},T=e=>"function"==typeof e&&H.has(e),P=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,j=(e,t,n=null,s=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,s),t=n}},L=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},I={},R={},q=`{{lit-${String(Math.random()).slice(2)}}}`,W=`\x3c!--${q}--\x3e`,B=new RegExp(`${q}|${W}`),U="$lit$";class F{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)z(t[e].name,U)&&s++;for(;s-- >0;){const t=l[a],n=K.exec(t)[2],s=n.toLowerCase()+U,i=e.getAttribute(s);e.removeAttribute(s);const o=i.split(B);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(q)>=0){const s=e.parentNode,i=t.split(B),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=J();else{const e=K.exec(o);null!==e&&z(e[2],U)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-U.length)+e[3]),n=document.createTextNode(o)}s.insertBefore(n,e),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(J(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===q){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(J(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(n.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(q,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const z=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},D=e=>-1!==e.index,J=()=>document.createComment(""),K=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class G{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],D(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return P&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const Q=` ${q} `;class X{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=K.exec(e);t+=null===o?e+(n?Q:W):e.substr(0,o.index)+o[1]+o[2]+U+o[3]+q}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Y extends X{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),j(t,n.firstChild),e}}
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
 */const Z=e=>null===e||!("object"==typeof e||"function"==typeof e),ee=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class te{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new ne(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(Z(e)||!ee(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ne{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===I||Z(e)&&e===this.value||(this.value=e,T(e)||(this.committer.dirty=!0))}commit(){for(;T(this.value);){const e=this.value;this.value=I,e(this)}this.value!==I&&this.committer.commit()}}class se{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(J()),this.endNode=e.appendChild(J())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=J()),e.__insert(this.endNode=J())}insertAfterPart(e){e.__insert(this.startNode=J()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=I,e(this)}const e=this.__pendingValue;e!==I&&(Z(e)?e!==this.value&&this.__commitText(e):e instanceof X?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):ee(e)?this.__commitIterable(e):e===R?(this.value=R,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof G&&this.value.template===t)this.value.update(e.values);else{const n=new G(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)n=t[s],void 0===n&&(n=new se(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){L(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ie{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=I,e(this)}if(this.__pendingValue===I)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=I}}class oe extends te{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new re(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class re extends ne{}let ae=!1;try{const e={get capture(){return ae=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class le{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=I,e(this)}if(this.__pendingValue===I)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=he(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=I}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const he=e=>e&&(ae?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const de=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new oe(e,t.slice(1),n).parts}return"@"===i?[new le(e,t.slice(1),s.eventContext)]:"?"===i?[new ie(e,t.slice(1),n)]:new te(e,t,n).parts}handleTextExpression(e){return new se(e)}};
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
 */function ue(e){let t=ce.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ce.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(q);return n=t.keyString.get(s),void 0===n&&(n=new F(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const ce=new Map,pe=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const fe=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(J(),s);n.insertBefore(J(),s);const o=new se(e.options);return o.insertAfterNode(i),o},me=(e,t)=>(e.setValue(t),e.commit(),e),ge=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&j(s,t.startNode,o,i)},ve=e=>{L(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},_e=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},ye=new WeakMap,be=new WeakMap,we=A((e,t,n)=>{let s;return void 0===n?n=t:void 0!==t&&(s=t),t=>{if(!(t instanceof se))throw new Error("repeat can only be used in text bindings");const i=ye.get(t)||[],o=be.get(t)||[],r=[],a=[],l=[];let h,d,u=0;for(const t of e)l[u]=s?s(t,u):u,a[u]=n(t,u),u++;let c=0,p=i.length-1,f=0,m=a.length-1;for(;c<=p&&f<=m;)if(null===i[c])c++;else if(null===i[p])p--;else if(o[c]===l[f])r[f]=me(i[c],a[f]),c++,f++;else if(o[p]===l[m])r[m]=me(i[p],a[m]),p--,m--;else if(o[c]===l[m])r[m]=me(i[c],a[m]),ge(t,i[c],r[m+1]),c++,m--;else if(o[p]===l[f])r[f]=me(i[p],a[f]),ge(t,i[p],i[c]),p--,f++;else if(void 0===h&&(h=_e(l,f,m),d=_e(o,c,p)),h.has(o[c]))if(h.has(o[p])){const e=d.get(l[f]),n=void 0!==e?i[e]:null;if(null===n){const e=fe(t,i[c]);me(e,a[f]),r[f]=e}else r[f]=me(n,a[f]),ge(t,n,i[c]),i[e]=null;f++}else ve(i[p]),p--;else ve(i[c]),c++;for(;f<=m;){const e=fe(t,r[m+1]);me(e,a[f]),r[f++]=e}for(;c<=p;){const e=i[c++];null!==e&&ve(e)}ye.set(t,r),be.set(t,l)}}),xe=new WeakMap,Ne=A((e,t)=>n=>{const s=xe.get(n);if(Array.isArray(e)){if(Array.isArray(s)&&s.length===e.length&&e.every((e,t)=>e===s[t]))return}else if(s===e&&(void 0!==e||xe.has(n)))return;n.setValue(t()),xe.set(n,Array.isArray(e)?Array.from(e):e)}),Se=A(e=>t=>{if(void 0===e&&t instanceof ne){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let Ee={html:(e,...t)=>new X(e,t,"html",de),svg:(e,...t)=>new Y(e,t,"svg",de),render:(e,t,n)=>{let s=pe.get(t);void 0===s&&(L(t,t.firstChild),pe.set(t,s=new se(Object.assign({templateFactory:ue},n))),s.appendInto(t)),s.setValue(e),s.commit()},directive:A,repeat:we,guard:Ne,ifDefined:Se};window.__litHtml?Ee=window.__litHtml:window.__litHtml=Ee;const{html:$e,svg:ke,render:Ce,directive:Ve,repeat:Oe,guard:Me,ifDefined:He}=Ee;class Ae extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),n&&n.forEach(e=>{this.__connectProperty(e,!1)}),s&&s.forEach(e=>{this.__connectProperty(e,!0),this[e]=g}),i&&i.forEach(e=>{if(!e[v])throw new Error("`observedStores` only support store module");!function(e,t){e[v].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let n=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>n,set(s){if(s!==n){if(t){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=t=>{const n=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(e,n,s),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return $e`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Ce(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,n){}attributeChanged(e,t,n){}unmounted(){}attributeChangedCallback(e,t,n){this.__isMounted&&(this.attributeChanged(e,t,n),i(this.__update))}__connectedCallback(){Ce(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[v].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Te extends Ae{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Pe=new o;let je=!1;const Le=()=>{window.requestAnimationFrame((function e(t){const n=Pe.get();n&&(n(),performance.now()-t<16)?e(t):je&&Le()}))};Pe.addEventListener("start",()=>{je=!0,Le()}),Pe.addEventListener("end",()=>je=!1);const Ie=customElements.define.bind(customElements);customElements.define=function(e,t,n){customElements.get(e)||Ie(e,t,n)};const Re=function(e,t=""){let n=l.get(e);if(!n){const s=new CSSStyleSheet;s.media.mediaText=t;let i="";"string"==typeof e?i=e:(Object.keys(e).forEach(t=>{s[t]="tag"===e[t].type?t:`${t}-${e[t].key}`,i+=e[t].str.replace(/&/g,s[t])}),l.set(e,s)),s.replaceSync(i),n=s}return n}({h1:u`
    color: yellow;
    &:hover {
      color: red;
    }
  `,h2:c`
    background: yellow;
    &:hover {
      background: red;
    }
  `,h3:p`
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  `});class qe extends Te{render(){return $e`
      <h1 class=${Re.h1}>Header 1</h1>
      <h2 id=${Re.h2}>Header 2</h2>
      <h3>Header 3</h3>
    `}}qe.adoptedStyleSheets=[Re],customElements.define("app-root",qe),document.body.append(new qe)}]);
//# sourceMappingURL=bundle.dc88ec568f4c81a8fc9b.js.map