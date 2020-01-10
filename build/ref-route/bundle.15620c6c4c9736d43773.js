!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/gem/build/ref-route",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const s=new Set;function i(t){s.size||globalThis.queueMicrotask(()=>{s.forEach(t=>t()),s.clear()}),s.delete(t),s.add(t)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}class r extends URLSearchParams{constructor(t){if(t instanceof r)return t;super(t),Object.setPrototypeOf(this,r.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function a(t){return Object.keys(t).forEach(e=>{delete t[e]}),t}class l extends Error{constructor(t){super(t),this.message=`gem: ${this.message}`}}function u(){}const h="gem@storeHandlesKey";function c(t){const e=t;return Object.defineProperty(e,h,{enumerable:!1,value:new Set,writable:!0}),e}function d(t,e){Object.assign(t,e),t[h].forEach(t=>{i(t)})}const p=window.history,f=window.location,m=p.pushState.bind(p),g=p.replaceState.bind(p);let v=0;const _=()=>++v,y=c({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),b=new Map;function w(t){var e,n,s,i;if(null===(e=t)||void 0===e?void 0:e.$key)throw new l("`$key` is not allowed");if(null===(n=t)||void 0===n?void 0:n.$hasCloseHandle)throw new l("`$hasCloseHandle` is not allowed");if(null===(s=t)||void 0===s?void 0:s.$hasOpenHandle)throw new l("`$hasOpenHandle` is not allowed");if(null===(i=t)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new l("`$hasShouldCloseHandle` is not allowed")}function x(t){const e=t.title||"",n=t.path||f.pathname,s=new r(t.query||(t.path?"":f.search)),i=t.path||t.query,o=t.hash||(i?"":f.hash);return Object.assign(Object.assign({},t),{title:e,path:n,query:s,hash:o})}function k(t,e){w(e.data);const n=x(e),{title:s,path:i,query:o,hash:l}=n,u=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:_()},n.data||{});b.set(u.$key,n),d(a(y),u);const h=p.basePath+i+new r(o)+l;("push"===t?m:g)(u,s,h)}function E(t,e,n,s){w(e);const i=Object.assign({$key:_()},e||{}),{pathname:o,search:l,hash:u}=new URL(s,f.origin),h=x({path:o,query:new r(l),hash:u,title:n,data:e});b.set(i.$key,h),d(a(y),i),("push"===t?m:g)(i,n,s)}if(!("basePath"in p)){let t="";if(Object.defineProperties(p,{basePath:{get:()=>t,set(e){if(t)throw new l("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");t=e}},getParams:{value:function(){return b.get(y.$key)}},updateParams:{value:function(t){Object.assign(b.get(y.$key),t),d(y,{})}},store:{value:y},push:{value:function(t){k("push",t)}},pushIgnoreCloseHandle:{value:function(t){var e,n,s;y.$hasCloseHandle?(null===(s=null===(e=b.get(y.$key))||void 0===e?void 0:(n=e).close)||void 0===s||s.call(n),p.replace(t)):p.push(t)}},replace:{value:function(t){k("replace",t)}},pushState:{value:function(t,e,n){E("push",t,e,n)}},replaceState:{value:function(t,e,n){E("replace",t,e,n)}}}),p.state)if(p.state.$close)p.back();else{const t=x({title:document.title});d(y,Object.assign({$key:_()},p.state||{})),b.set(y.$key,t)}else{const{pathname:t,search:e,hash:n}=f;p.replace({path:t,query:e,hash:n})}let e=!1;window.addEventListener("popstate",t=>{var n,s,i,o,l,u;const h=t.state;if(!(null===(n=h)||void 0===n?void 0:n.$key))return;if(e)return void(e=!1);if(!b.has(h.$key)){const{pathname:t,search:e,hash:n}=f;b.set(h.$key,{path:t,query:new r(e),hash:n,title:document.title,data:h})}const c=y;if(h.$key>c.$key&&h.$hasOpenHandle)null===(o=null===(s=b.get(h.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(c.$hasCloseHandle){const t=b.get(c.$key),n=null===(l=t)||void 0===l?void 0:l.close,s=null===(u=t)||void 0===u?void 0:u.shouldClose;if(s&&!s())return e=!0,void p.forward();n?n():(e=!0,p.back())}d(a(y),h)})}
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
 */const N=new WeakMap,S=t=>(...e)=>{const n=t(...e);return N.set(n,!0),n},$=t=>"function"==typeof t&&N.has(t),P=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,C=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},O=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},A={},H={},V=`{{lit-${String(Math.random()).slice(2)}}}`,j=`\x3c!--${V}--\x3e`,R=new RegExp(`${V}|${j}`),M="$lit$";class T{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:u}}=t;for(;a<u;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)q(e[t].name,M)&&s++;for(;s-- >0;){const e=l[a],n=W.exec(e)[2],s=n.toLowerCase()+M,i=t.getAttribute(s);t.removeAttribute(s);const o=i.split(R);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(V)>=0){const s=t.parentNode,i=e.split(R),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=I();else{const t=W.exec(o);null!==t&&q(t[2],M)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-M.length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(I(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===V){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(I(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(V,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const q=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},L=t=>-1!==t.index,I=()=>document.createComment(""),W=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class D{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=P?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],L(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return P&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const U=` ${V} `;class B{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=W.exec(t);e+=null===o?t+(n?U:j):t.substr(0,o.index)+o[1]+o[2]+M+o[3]+V}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class F extends B{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),C(e,n.firstChild),t}}
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
 */const z=t=>null===t||!("object"==typeof t||"function"==typeof t),J=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class K{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Z(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(z(t)||!J(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===A||z(t)&&t===this.value||(this.value=t,$(t)||(this.committer.dirty=!0))}commit(){for(;$(this.value);){const t=this.value;this.value=A,t(this)}this.value!==A&&this.committer.commit()}}class G{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(I()),this.endNode=t.appendChild(I())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=I()),t.__insert(this.endNode=I())}insertAfterPart(t){t.__insert(this.startNode=I()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;$(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=A,t(this)}const t=this.__pendingValue;t!==A&&(z(t)?t!==this.value&&this.__commitText(t):t instanceof B?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):J(t)?this.__commitIterable(t):t===H?(this.value=H,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof D&&this.value.template===e)this.value.update(t.values);else{const n=new D(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)n=e[s],void 0===n&&(n=new G(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){O(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Q{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;$(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=A,t(this)}if(this.__pendingValue===A)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=A}}class X extends K{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Y(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Y extends Z{}let tt=!1;try{const t={get capture(){return tt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class et{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;$(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=A,t(this)}if(this.__pendingValue===A)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=nt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=A}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const nt=t=>t&&(tt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const st=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new X(t,e.slice(1),n).parts}return"@"===i?[new et(t,e.slice(1),s.eventContext)]:"?"===i?[new Q(t,e.slice(1),n)]:new K(t,e,n).parts}handleTextExpression(t){return new G(t)}};
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
 */function it(t){let e=ot.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ot.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(V);return n=e.keyString.get(s),void 0===n&&(n=new T(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const ot=new Map,rt=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const at=(t,e)=>{const n=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,i=n.insertBefore(I(),s);n.insertBefore(I(),s);const o=new G(t.options);return o.insertAfterNode(i),o},lt=(t,e)=>(t.setValue(e),t.commit(),t),ut=(t,e,n)=>{const s=t.startNode.parentNode,i=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&C(s,e.startNode,o,i)},ht=t=>{O(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ct=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},dt=new WeakMap,pt=new WeakMap,ft=S((t,e,n)=>{let s;return void 0===n?n=e:void 0!==e&&(s=e),e=>{if(!(e instanceof G))throw new Error("repeat can only be used in text bindings");const i=dt.get(e)||[],o=pt.get(e)||[],r=[],a=[],l=[];let u,h,c=0;for(const e of t)l[c]=s?s(e,c):c,a[c]=n(e,c),c++;let d=0,p=i.length-1,f=0,m=a.length-1;for(;d<=p&&f<=m;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===l[f])r[f]=lt(i[d],a[f]),d++,f++;else if(o[p]===l[m])r[m]=lt(i[p],a[m]),p--,m--;else if(o[d]===l[m])r[m]=lt(i[d],a[m]),ut(e,i[d],r[m+1]),d++,m--;else if(o[p]===l[f])r[f]=lt(i[p],a[f]),ut(e,i[p],i[d]),p--,f++;else if(void 0===u&&(u=ct(l,f,m),h=ct(o,d,p)),u.has(o[d]))if(u.has(o[p])){const t=h.get(l[f]),n=void 0!==t?i[t]:null;if(null===n){const t=at(e,i[d]);lt(t,a[f]),r[f]=t}else r[f]=lt(n,a[f]),ut(e,n,i[d]),i[t]=null;f++}else ht(i[p]),p--;else ht(i[d]),d++;for(;f<=m;){const t=at(e,r[m+1]);lt(t,a[f]),r[f++]=t}for(;d<=p;){const t=i[d++];null!==t&&ht(t)}dt.set(e,r),pt.set(e,l)}}),mt=new WeakMap,gt=S((t,e)=>n=>{const s=mt.get(n);if(Array.isArray(t)){if(Array.isArray(s)&&s.length===t.length&&t.every((t,e)=>t===s[e]))return}else if(s===t&&(void 0!==t||mt.has(n)))return;n.setValue(e()),mt.set(n,Array.isArray(t)?Array.from(t):t)}),vt=S(t=>e=>{if(void 0===t&&e instanceof Z){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let _t={html:(t,...e)=>new B(t,e,"html",st),svg:(t,...e)=>new F(t,e,"svg",st),render:(t,e,n)=>{let s=rt.get(e);void 0===s&&(O(e,e.firstChild),rt.set(e,s=new G(Object.assign({templateFactory:it},n))),s.appendInto(e)),s.setValue(t),s.commit()},directive:S,repeat:ft,guard:gt,ifDefined:vt};window.__litHtml?_t=window.__litHtml:window.__litHtml=_t;const{html:yt,svg:bt,render:wt,directive:xt,repeat:kt,guard:Et,ifDefined:Nt}=_t;class St extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),n&&n.forEach(t=>{this.__connectProperty(t,!1)}),s&&s.forEach(t=>{this.__connectProperty(t,!0),this[t]=u}),i&&i.forEach(t=>{if(!t[h])throw new Error("`observedStores` only support store module");!function(t,e){t[h].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(t,e=!1){if(t in this)return;let n=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>n,set(s){if(s!==n){if(e){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=e=>{const n=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(t,n,s),i(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),i(this.__update)}willMount(){}render(){return yt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(wt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,n){}attributeChanged(t,e,n){}unmounted(){}attributeChangedCallback(t,e,n){this.__isMounted&&(this.attributeChanged(t,e,n),i(this.__update))}__connectedCallback(){wt(this.render(),this.__renderRoot);const t=this.mounted();t&&(this.__unmountCallback=t),this.__isMounted=!0}disconnectedCallback(){var t;const e=this.constructor;e.observedStores&&e.observedStores.forEach(t=>{!function(t,e){t[h].delete(e)}(t,this.__update)}),null===(t=this.__unmountCallback)||void 0===t||t.call(this),this.unmounted(),this.__isMounted=!1}}class $t extends St{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Pt=new o;let Ct=!1;const Ot=()=>{window.requestAnimationFrame((function t(e){const n=Pt.get();n&&(n(),performance.now()-e<16)?t(e):Ct&&Ot()}))};Pt.addEventListener("start",()=>{Ct=!0,Ot()}),Pt.addEventListener("end",()=>Ct=!1);const At=customElements.define.bind(customElements);function Ht(t,e){const n=t.constructor;n.observedAttributes||(n.observedAttributes=[]),n.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function Vt(t,e){const n=t.constructor;n.observedPropertys||(n.observedPropertys=[]),n.observedPropertys.push(e)}function jt(t){return function(e){const n=e;n.observedStores||(n.observedStores=[]),n.observedStores.push(t)}}function Rt(t){return function(e){customElements.define(t,e)}}customElements.define=function(t,e,n){customElements.get(t)||At(t,e,n)};var Mt,Tt=function(t,e,n,s){var i,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};class qt extends RegExp{constructor(t){const e={};let n=0;super(`^${t.replace(/:([^/$]+)/g,(t,s)=>(e[s]=n++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Lt(t){return new qt(t)}function It(t,e){return!!e.match(Lt(t))}function Wt(t,e){let n=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{n=n.replace(new RegExp(`:${t}`,"g"),e.params[t])}),n}function Dt(t,e){const n=Wt(t,e);return Object.assign({path:n},e)}let Ut=Mt=class extends $t{constructor(){super();const{path:t,query:e}=p.getParams(),n=t+e;this.href=n}static getParams(){if(Mt.currentRoute)return function(t,e){const n=Lt(t),s=e.match(n);if(s){const t={};return Object.keys(n.namePosition).forEach(e=>{t[e]=s[n.namePosition[e]+1]}),t}}(Mt.currentRoute.pattern,p.getParams().path)}initPage(){Mt.currentRoute&&Mt.currentRoute.title&&Mt.currentRoute.title!==p.getParams().title&&p.updateParams({title:Mt.currentRoute.title})}shouldUpdate(){const{path:t,query:e}=p.getParams(),n=t+e;return t+e!==this.href&&(this.href=n,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();Mt.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const n of t){const{pattern:t}=n;if("*"===t)e=n;else if(It(t,p.getParams().path)){Mt.currentRoute=n;break}}return Mt.currentRoute||(Mt.currentRoute=e),Mt.currentRoute?Mt.currentRoute.redirect?(p.replace({path:Mt.currentRoute.redirect}),this.callback()):yt`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Mt.currentRoute.content}
    `:this.callback()}callback(){return Mt.currentRoute=null,yt``}};Tt([Vt],Ut.prototype,"routes",void 0),Ut=Mt=Tt([jt(p.store),Rt("gem-route")],Ut);var Bt=function(t,e,n,s){var i,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ft=class extends $t{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:n,query:s,hash:i}=p.getParams();n+s+i!==e&&(t.stopPropagation(),this.route?p.pushIgnoreCloseHandle(Dt(this.route,this.options)):p.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.preventDefault=t=>{t.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options&&this.options.query||"",e=this.options&&this.options.hash||"";return Wt(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(t=this.getHref()){return yt`
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
      <a @click=${this.preventDefault} href=${new URL(t,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};Bt([Ht],Ft.prototype,"href",void 0),Bt([Ht],Ft.prototype,"path",void 0),Bt([Ht],Ft.prototype,"query",void 0),Bt([Ht],Ft.prototype,"hash",void 0),Bt([Vt],Ft.prototype,"route",void 0),Bt([Vt],Ft.prototype,"options",void 0),Ft=Bt([Rt("gem-link")],Ft);let zt=class extends Ft{render(){const{path:t,query:e,hash:n}=p.getParams(),s=this.pattern&&It(this.pattern,t),i=this.getHref();return s||t+e+n===i?this.setAttribute("active",""):this.removeAttribute("active"),super.render(i)}};Bt([Ht],zt.prototype,"pattern",void 0),zt=Bt([Rt("gem-active-link"),jt(p.store)],zt);const Jt={home:{pattern:"/",get content(){return yt`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: home page, click navigation to a page
        <gem-active-link .route=${Jt.a} .options=${{params:{b:1}}}>
          a page link, params: {a: 1}
        </gem-active-link>
      `}},a:{pattern:"/a/:b",get content(){return yt`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: /a/:b, click navigation to home page, cuurent query: ${p.getParams().query.toString()}
        <gem-active-link .route=${Jt.a} .options=${{params:{b:1},query:"?a=1"}}>
          a page link, query: ?a=1
        </gem-active-link>
      `}}};class Kt extends $t{constructor(){super(...arguments),this.onclick=()=>{Ut.currentRoute===Jt.home?p.push(Dt(Jt.a,{params:{b:String(Date.now())}})):p.push(Dt(Jt.home))}}render(){return yt`
      <main>
        <gem-route .routes=${Jt}></gem-route>
      </main>
    `}}customElements.define("app-root",Kt),document.body.append(new Kt)}]);
//# sourceMappingURL=bundle.15620c6c4c9736d43773.js.map