!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/gem/build/styled/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=new Set;function i(e){s.size||globalThis.queueMicrotask(()=>{s.forEach(e=>e()),s.clear()}),s.delete(e),s.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}function a(e,...t){return e.reduce((e,n,s)=>e+(t[s-1]||"")+n)}const l=new WeakMap;function h(e=5,t="0123456789abcdefghijklmnopqrstuvwxyz"){const n=t.length;let s="";for(let i=0;i<e;i++)s+=t[Math.floor(Math.random()*n)];return s}function d(e,t){const n=[];let s=`& {${e.replace(new RegExp("&.*{(.*)}","gs"),(function(e){return n.push(e),""}))}}`+n.join("");return"tag"!==t&&(s=s.replace(/&/g,"class"===t?".&":"#&")),{str:s,key:h(),type:t}}const u=(e,...t)=>{return d(a(e,...t),"class")},c=(e,...t)=>{return d(a(e,...t),"id")},p=(e,...t)=>{return d(a(e,...t),"tag")};function f(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class m extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function g(){}const v="gem@storeHandlesKey";function _(e){const t=e;return Object.defineProperty(t,v,{enumerable:!1,value:new Set,writable:!0}),t}function y(e,t){Object.assign(e,t),e[v].forEach(e=>{i(e)})}const b=window.history,w=window.location,x=b.pushState.bind(b),E=b.replaceState.bind(b);let N=0;const S=()=>++N,$=_({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),C=new Map;function k(e){var t,n,s,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new m("`$key` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasCloseHandle)throw new m("`$hasCloseHandle` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasOpenHandle)throw new m("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new m("`$hasShouldCloseHandle` is not allowed")}function O(e){return b.basePath?b.basePath+("/"===e?"":e):e}function V(e){return e.replace(new RegExp(`^${b.basePath}`),"")}function H(e){const t=e.title||"",n=e.path||V(w.pathname),s=new r(e.query||(e.path?"":w.search)),i=e.path||e.query,o=e.hash||(i?"":w.hash);return Object.assign(Object.assign({},e),{title:t,path:n,query:s,hash:o})}function M(e,t){k(t.data);const n=H(t),{title:s,path:i,query:o,hash:a}=n,l=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:S()},n.data||{});C.set(l.$key,n),y(f($),l);const h=O(i)+new r(o)+a,d=w.hash;("push"===e?x:E)(l,s,h),d!==a&&window.dispatchEvent(new CustomEvent("hashchange"))}function P(e,t,n,s){k(t);const i=Object.assign({$key:S()},t||{}),{pathname:o,search:a,hash:l}=new URL(s,w.origin),h=H({path:o,query:new r(a),hash:l,title:n,data:t});C.set(i.$key,h),y(f($),i);const d=O(o)+h.query+l,u=w.hash;("push"===e?x:E)(i,n,d),u!==l&&window.dispatchEvent(new CustomEvent("hashchange"))}const A=_({basePath:""});if(!("basePath"in b)){if(Object.defineProperties(b,{basePath:{get:()=>A.basePath,set(e){if(A.basePath)throw new m("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");y(A,{basePath:e}),Object.assign(C.get($.$key),{path:V(w.pathname)})}},getParams:{value:function(){return C.get($.$key)}},updateParams:{value:function(e){Object.assign(C.get($.$key),e),y($,{})}},store:{value:$},push:{value:function(e){M("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,n,s;$.$hasCloseHandle?(null===(s=null===(t=C.get($.$key))||void 0===t?void 0:(n=t).close)||void 0===s||s.call(n),b.replace(e)):b.push(e)}},replace:{value:function(e){M("replace",e)}},pushState:{value:function(e,t,n){P("push",e,t,n)}},replaceState:{value:function(e,t,n){P("replace",e,t,n)}}}),b.state)if(b.state.$hasCloseHandle)y($,b.state),b.back();else{const e=H({title:document.title});y($,Object.assign({$key:S()},b.state||{})),C.set($.$key,e)}else{const{pathname:e,search:t,hash:n}=w;b.replace({path:e,query:t,hash:n})}let e=!1;window.addEventListener("popstate",t=>{var n,s,i,o,a,l;const h=t.state;if(!(null===(n=h)||void 0===n?void 0:n.$key))return;if(e)return void(e=!1);if(!C.has(h.$key)){const{pathname:e,search:t,hash:n}=w;C.set(h.$key,{path:e,query:new r(t),hash:n,title:document.title,data:h})}const d=$;if(h.$key>d.$key&&h.$hasOpenHandle)null===(o=null===(s=C.get(h.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(d.$hasCloseHandle){const t=C.get(d.$key),n=null===(a=t)||void 0===a?void 0:a.close,s=null===(l=t)||void 0===l?void 0:l.shouldClose;if(s&&!s())return e=!0,void b.forward();n?n():h.$hasCloseHandle&&(e=!0,b.back())}y(f($),h)})}
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
 */const T=new WeakMap,j=e=>(...t)=>{const n=e(...t);return T.set(n,!0),n},L=e=>"function"==typeof e&&T.has(e),I=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,R=(e,t,n=null,s=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,s),t=n}},q=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},W={},B={},U=`{{lit-${String(Math.random()).slice(2)}}}`,F=`\x3c!--${U}--\x3e`,z=new RegExp(`${U}|${F}`),D="$lit$";class J{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)K(t[e].name,D)&&s++;for(;s-- >0;){const t=l[a],n=X.exec(t)[2],s=n.toLowerCase()+D,i=e.getAttribute(s);e.removeAttribute(s);const o=i.split(z);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(U)>=0){const s=e.parentNode,i=t.split(z),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=Q();else{const e=X.exec(o);null!==e&&K(e[2],D)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-D.length)+e[3]),n=document.createTextNode(o)}s.insertBefore(n,e),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(Q(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===U){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(Q(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(n.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(U,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const K=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},G=e=>-1!==e.index,Q=()=>document.createComment(""),X=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class Y{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=I?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],G(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return I&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const Z=` ${U} `;class ee{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=X.exec(e);t+=null===o?e+(n?Z:F):e.substr(0,o.index)+o[1]+o[2]+D+o[3]+U}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class te extends ee{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),R(t,n.firstChild),e}}
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
 */const ne=e=>null===e||!("object"==typeof e||"function"==typeof e),se=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ie{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new oe(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(ne(e)||!se(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class oe{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===W||ne(e)&&e===this.value||(this.value=e,L(e)||(this.committer.dirty=!0))}commit(){for(;L(this.value);){const e=this.value;this.value=W,e(this)}this.value!==W&&this.committer.commit()}}class re{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Q()),this.endNode=e.appendChild(Q())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Q()),e.__insert(this.endNode=Q())}insertAfterPart(e){e.__insert(this.startNode=Q()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;L(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=W,e(this)}const e=this.__pendingValue;e!==W&&(ne(e)?e!==this.value&&this.__commitText(e):e instanceof ee?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):se(e)?this.__commitIterable(e):e===B?(this.value=B,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Y&&this.value.template===t)this.value.update(e.values);else{const n=new Y(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)n=t[s],void 0===n&&(n=new re(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){q(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ae{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;L(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=W,e(this)}if(this.__pendingValue===W)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=W}}class le extends ie{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new he(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class he extends oe{}let de=!1;try{const e={get capture(){return de=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ue{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;L(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=W,e(this)}if(this.__pendingValue===W)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=ce(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=W}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ce=e=>e&&(de?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const pe=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new le(e,t.slice(1),n).parts}return"@"===i?[new ue(e,t.slice(1),s.eventContext)]:"?"===i?[new ae(e,t.slice(1),n)]:new ie(e,t,n).parts}handleTextExpression(e){return new re(e)}};
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
 */function fe(e){let t=me.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},me.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(U);return n=t.keyString.get(s),void 0===n&&(n=new J(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const me=new Map,ge=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ve=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(Q(),s);n.insertBefore(Q(),s);const o=new re(e.options);return o.insertAfterNode(i),o},_e=(e,t)=>(e.setValue(t),e.commit(),e),ye=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&R(s,t.startNode,o,i)},be=e=>{q(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},we=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},xe=new WeakMap,Ee=new WeakMap,Ne=j((e,t,n)=>{let s;return void 0===n?n=t:void 0!==t&&(s=t),t=>{if(!(t instanceof re))throw new Error("repeat can only be used in text bindings");const i=xe.get(t)||[],o=Ee.get(t)||[],r=[],a=[],l=[];let h,d,u=0;for(const t of e)l[u]=s?s(t,u):u,a[u]=n(t,u),u++;let c=0,p=i.length-1,f=0,m=a.length-1;for(;c<=p&&f<=m;)if(null===i[c])c++;else if(null===i[p])p--;else if(o[c]===l[f])r[f]=_e(i[c],a[f]),c++,f++;else if(o[p]===l[m])r[m]=_e(i[p],a[m]),p--,m--;else if(o[c]===l[m])r[m]=_e(i[c],a[m]),ye(t,i[c],r[m+1]),c++,m--;else if(o[p]===l[f])r[f]=_e(i[p],a[f]),ye(t,i[p],i[c]),p--,f++;else if(void 0===h&&(h=we(l,f,m),d=we(o,c,p)),h.has(o[c]))if(h.has(o[p])){const e=d.get(l[f]),n=void 0!==e?i[e]:null;if(null===n){const e=ve(t,i[c]);_e(e,a[f]),r[f]=e}else r[f]=_e(n,a[f]),ye(t,n,i[c]),i[e]=null;f++}else be(i[p]),p--;else be(i[c]),c++;for(;f<=m;){const e=ve(t,r[m+1]);_e(e,a[f]),r[f++]=e}for(;c<=p;){const e=i[c++];null!==e&&be(e)}xe.set(t,r),Ee.set(t,l)}}),Se=new WeakMap,$e=j((e,t)=>n=>{const s=Se.get(n);if(Array.isArray(e)){if(Array.isArray(s)&&s.length===e.length&&e.every((e,t)=>e===s[t]))return}else if(s===e&&(void 0!==e||Se.has(n)))return;n.setValue(t()),Se.set(n,Array.isArray(e)?Array.from(e):e)}),Ce=j(e=>t=>{if(void 0===e&&t instanceof oe){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let ke={html:(e,...t)=>new ee(e,t,"html",pe),svg:(e,...t)=>new te(e,t,"svg",pe),render:(e,t,n)=>{let s=ge.get(t);void 0===s&&(q(t,t.firstChild),ge.set(t,s=new re(Object.assign({templateFactory:fe},n))),s.appendInto(t)),s.setValue(e),s.commit()},directive:j,repeat:Ne,guard:$e,ifDefined:Ce};window.__litHtml?ke=window.__litHtml:window.__litHtml=ke;const{html:Oe,svg:Ve,render:He,directive:Me,repeat:Pe,guard:Ae,ifDefined:Te}=ke;class je extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),n&&n.forEach(e=>{this.__connectProperty(e,!1)}),s&&s.forEach(e=>{this.__connectProperty(e,!0),this[e]=g}),i&&i.forEach(e=>{if(!e[v])throw new Error("`observedStores` only support store module");!function(e,t){e[v].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let n=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>n,set(s){if(s!==n){if(t){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=t=>{const n=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(e,n,s),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return Oe`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(He(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,n){}attributeChanged(e,t,n){}unmounted(){}attributeChangedCallback(e,t,n){this.__isMounted&&(this.attributeChanged(e,t,n),i(this.__update))}__connectedCallback(){He(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[v].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Le extends je{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ie=new o;let Re=!1;const qe=()=>{window.requestAnimationFrame((function e(t){const n=Ie.get();n&&(n(),performance.now()-t<16)?e(t):Re&&qe()}))};Ie.addEventListener("start",()=>{Re=!0,qe()}),Ie.addEventListener("end",()=>Re=!1);const We=customElements.define.bind(customElements);customElements.define=function(e,t,n){customElements.get(e)||We(e,t,n)};const Be=function(e,t=""){let n=l.get(e);if(!n){const s=new CSSStyleSheet;s.media.mediaText=t;let i="";"string"==typeof e?i=e:(Object.keys(e).forEach(t=>{s[t]="tag"===e[t].type?t:`${t}-${e[t].key}`,i+=e[t].str.replace(/&/g,s[t])}),l.set(e,s)),s.replaceSync(i),n=s}return n}({h1:u`
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
  `});class Ue extends Le{render(){return Oe`
      <h1 class=${Be.h1}>Header 1</h1>
      <h2 id=${Be.h2}>Header 2</h2>
      <h3>Header 3</h3>
    `}}Ue.adoptedStyleSheets=[Be],customElements.define("app-root",Ue),document.body.append(new Ue)}]);
//# sourceMappingURL=bundle.3c5950d4f5e534ffba56.js.map