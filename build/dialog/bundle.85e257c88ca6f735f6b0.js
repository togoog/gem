!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gem/build/dialog",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const n=new Set;function o(t){n.size||globalThis.queueMicrotask(()=>{n.forEach(t=>t()),n.clear()}),n.delete(t),n.add(t)}class i extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,i.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}class r extends URLSearchParams{constructor(t){if(t instanceof r)return t;super(t),Object.setPrototypeOf(this,r.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function a(t){return Object.keys(t).forEach(e=>{delete t[e]}),t}class l extends Error{constructor(t){super(t),this.message=`gem: ${this.message}`}}function h(){}const c="gem@storeHandlesKey";function u(t){const e=t;return Object.defineProperty(e,c,{enumerable:!1,value:new Set,writable:!0}),e}function d(t,e){Object.assign(t,e),t[c].forEach(t=>{o(t)})}const p=window.history,f=window.location,g=p.pushState.bind(p),m=p.replaceState.bind(p);let v=0;const b=()=>++v,_=u({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),y=new Map;function w(t){var e,s,n,o;if(null===(e=t)||void 0===e?void 0:e.$key)throw new l("`$key` is not allowed");if(null===(s=t)||void 0===s?void 0:s.$hasCloseHandle)throw new l("`$hasCloseHandle` is not allowed");if(null===(n=t)||void 0===n?void 0:n.$hasOpenHandle)throw new l("`$hasOpenHandle` is not allowed");if(null===(o=t)||void 0===o?void 0:o.$hasShouldCloseHandle)throw new l("`$hasShouldCloseHandle` is not allowed")}function x(t){const e=t.title||"",s=t.path||f.pathname,n=new r(t.query||(t.path?"":f.search)),o=t.path||t.query,i=t.hash||(o?"":f.hash);return Object.assign(Object.assign({},t),{title:e,path:s,query:n,hash:i})}function k(t,e){w(e.data);const s=x(e),{title:n,path:o,query:i,hash:l}=s,h=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:b()},s.data||{});y.set(h.$key,s),d(a(_),h);const c=p.basePath+o+new r(i)+l;("push"===t?g:m)(h,n,c)}function E(t,e,s,n){w(e);const o=Object.assign({$key:b()},e||{}),{pathname:i,search:l,hash:h}=new URL(n,f.origin),c=x({path:i,query:new r(l),hash:h,title:s,data:e});y.set(o.$key,c),d(a(_),o),("push"===t?g:m)(o,s,n)}if(!("basePath"in p)){let t="";if(Object.defineProperties(p,{basePath:{get:()=>t,set(e){if(t)throw new l("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");t=e}},getParams:{value:function(){return y.get(_.$key)}},updateParams:{value:function(t){Object.assign(y.get(_.$key),t),d(_,{})}},store:{value:_},push:{value:function(t){k("push",t)}},pushIgnoreCloseHandle:{value:function(t){var e,s,n;_.$hasCloseHandle?(null===(n=null===(e=y.get(_.$key))||void 0===e?void 0:(s=e).close)||void 0===n||n.call(s),p.replace(t)):p.push(t)}},replace:{value:function(t){k("replace",t)}},pushState:{value:function(t,e,s){E("push",t,e,s)}},replaceState:{value:function(t,e,s){E("replace",t,e,s)}}}),p.state)if(p.state.$close)p.back();else{const t=x({title:document.title});d(_,Object.assign({$key:b()},p.state||{})),y.set(_.$key,t)}else{const{pathname:t,search:e,hash:s}=f;p.replace({path:t,query:e,hash:s})}let e=!1;window.addEventListener("popstate",t=>{var s,n,o,i,l,h;const c=t.state;if(!(null===(s=c)||void 0===s?void 0:s.$key))return;if(e)return void(e=!1);if(!y.has(c.$key)){const{pathname:t,search:e,hash:s}=f;y.set(c.$key,{path:t,query:new r(e),hash:s,title:document.title,data:c})}const u=_;if(c.$key>u.$key&&c.$hasOpenHandle)null===(i=null===(n=y.get(c.$key))||void 0===n?void 0:(o=n).open)||void 0===i||i.call(o);else if(u.$hasCloseHandle){const t=y.get(u.$key),s=null===(l=t)||void 0===l?void 0:l.close,n=null===(h=t)||void 0===h?void 0:h.shouldClose;if(n&&!n())return e=!0,void p.forward();s?s():(e=!0,p.back())}d(a(_),c)})}
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
 */const N=new WeakMap,S=t=>(...e)=>{const s=t(...e);return N.set(s,!0),s},$=t=>"function"==typeof t&&N.has(t),C=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,P=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},O=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},H={},A={},j=`{{lit-${String(Math.random()).slice(2)}}}`,V=`\x3c!--${j}--\x3e`,M=new RegExp(`${j}|${V}`),R="$lit$";class T{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let i=0,r=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=o.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)L(e[t].name,R)&&n++;for(;n-- >0;){const e=l[a],s=W.exec(e)[2],n=s.toLowerCase()+R,o=t.getAttribute(n);t.removeAttribute(n);const i=o.split(M);this.parts.push({type:"attribute",index:r,name:s,strings:i}),a+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(j)>=0){const n=t.parentNode,o=e.split(M),i=o.length-1;for(let e=0;e<i;e++){let s,i=o[e];if(""===i)s=I();else{const t=W.exec(i);null!==t&&L(t[2],R)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-R.length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===o[i]?(n.insertBefore(I(),t),s.push(t)):t.data=o[i],a+=i}}else if(8===t.nodeType)if(t.data===j){const e=t.parentNode;null!==t.previousSibling&&r!==i||(r++,e.insertBefore(I(),t)),i=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(j,e+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const L=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},q=t=>-1!==t.index,I=()=>document.createComment(""),W=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class U{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=C?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,i=0,r=0,a=n.nextNode();for(;i<s.length;)if(o=s[i],q(o)){for(;r<o.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));i++}else this.__parts.push(void 0),i++;return C&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const D=` ${j} `;class B{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const i=W.exec(t);e+=null===i?t+(s?D:V):t.substr(0,i.index)+i[1]+i[2]+R+i[3]+j}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class F extends B{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),P(e,s.firstChild),t}}
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
 */const z=t=>null===t||!("object"==typeof t||"function"==typeof t),J=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class K{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Z(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(z(t)||!J(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Z{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===H||z(t)&&t===this.value||(this.value=t,$(t)||(this.committer.dirty=!0))}commit(){for(;$(this.value);){const t=this.value;this.value=H,t(this)}this.value!==H&&this.committer.commit()}}class G{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(I()),this.endNode=t.appendChild(I())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=I()),t.__insert(this.endNode=I())}insertAfterPart(t){t.__insert(this.startNode=I()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;$(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=H,t(this)}const t=this.__pendingValue;t!==H&&(z(t)?t!==this.value&&this.__commitText(t):t instanceof B?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):J(t)?this.__commitIterable(t):t===A?(this.value=A,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof U&&this.value.template===e)this.value.update(t.values);else{const s=new U(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const o of t)s=e[n],void 0===s&&(s=new G(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(o),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){O(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Q{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;$(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=H,t(this)}if(this.__pendingValue===H)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=H}}class X extends K{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new Y(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Y extends Z{}let tt=!1;try{const t={get capture(){return tt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class et{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;$(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=H,t(this)}if(this.__pendingValue===H)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=st(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=H}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const st=t=>t&&(tt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const nt=new class{handleAttributeExpressions(t,e,s,n){const o=e[0];if("."===o){return new X(t,e.slice(1),s).parts}return"@"===o?[new et(t,e.slice(1),n.eventContext)]:"?"===o?[new Q(t,e.slice(1),s)]:new K(t,e,s).parts}handleTextExpression(t){return new G(t)}};
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
 */function ot(t){let e=it.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},it.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(j);return s=e.keyString.get(n),void 0===s&&(s=new T(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const it=new Map,rt=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const at=(t,e)=>{const s=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,o=s.insertBefore(I(),n);s.insertBefore(I(),n);const i=new G(t.options);return i.insertAfterNode(o),i},lt=(t,e)=>(t.setValue(e),t.commit(),t),ht=(t,e,s)=>{const n=t.startNode.parentNode,o=s?s.startNode:t.endNode,i=e.endNode.nextSibling;i!==o&&P(n,e.startNode,i,o)},ct=t=>{O(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ut=(t,e,s)=>{const n=new Map;for(let o=e;o<=s;o++)n.set(t[o],o);return n},dt=new WeakMap,pt=new WeakMap,ft=S((t,e,s)=>{let n;return void 0===s?s=e:void 0!==e&&(n=e),e=>{if(!(e instanceof G))throw new Error("repeat can only be used in text bindings");const o=dt.get(e)||[],i=pt.get(e)||[],r=[],a=[],l=[];let h,c,u=0;for(const e of t)l[u]=n?n(e,u):u,a[u]=s(e,u),u++;let d=0,p=o.length-1,f=0,g=a.length-1;for(;d<=p&&f<=g;)if(null===o[d])d++;else if(null===o[p])p--;else if(i[d]===l[f])r[f]=lt(o[d],a[f]),d++,f++;else if(i[p]===l[g])r[g]=lt(o[p],a[g]),p--,g--;else if(i[d]===l[g])r[g]=lt(o[d],a[g]),ht(e,o[d],r[g+1]),d++,g--;else if(i[p]===l[f])r[f]=lt(o[p],a[f]),ht(e,o[p],o[d]),p--,f++;else if(void 0===h&&(h=ut(l,f,g),c=ut(i,d,p)),h.has(i[d]))if(h.has(i[p])){const t=c.get(l[f]),s=void 0!==t?o[t]:null;if(null===s){const t=at(e,o[d]);lt(t,a[f]),r[f]=t}else r[f]=lt(s,a[f]),ht(e,s,o[d]),o[t]=null;f++}else ct(o[p]),p--;else ct(o[d]),d++;for(;f<=g;){const t=at(e,r[g+1]);lt(t,a[f]),r[f++]=t}for(;d<=p;){const t=o[d++];null!==t&&ct(t)}dt.set(e,r),pt.set(e,l)}}),gt=new WeakMap,mt=S((t,e)=>s=>{const n=gt.get(s);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every((t,e)=>t===n[e]))return}else if(n===t&&(void 0!==t||gt.has(s)))return;s.setValue(e()),gt.set(s,Array.isArray(t)?Array.from(t):t)}),vt=S(t=>e=>{if(void 0===t&&e instanceof Z){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let bt={html:(t,...e)=>new B(t,e,"html",nt),svg:(t,...e)=>new F(t,e,"svg",nt),render:(t,e,s)=>{let n=rt.get(e);void 0===n&&(O(e,e.firstChild),rt.set(e,n=new G(Object.assign({templateFactory:ot},s))),n.appendInto(e)),n.setValue(t),n.commit()},directive:S,repeat:ft,guard:mt,ifDefined:vt};window.__litHtml?bt=window.__litHtml:window.__litHtml=bt;const{html:_t,svg:yt,render:wt,directive:xt,repeat:kt,guard:Et,ifDefined:Nt}=bt;class St extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:s,defineEvents:n,observedStores:o,adoptedStyleSheets:i}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),s&&s.forEach(t=>{this.__connectProperty(t,!1)}),n&&n.forEach(t=>{this.__connectProperty(t,!0),this[t]=h}),o&&o.forEach(t=>{if(!t[c])throw new Error("`observedStores` only support store module");!function(t,e){t[c].add(e)}(t,this.__update)}),i&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=i:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(i))}__connectProperty(t,e=!1){if(t in this)return;let s=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>s,set(n){if(n!==s){if(e){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=e=>{const s=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(t,s,n),o(this.__update))}}})}setState(t){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,t),o(this.__update)}willMount(){}render(){return _t`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(wt(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,s){}attributeChanged(t,e,s){}unmounted(){}attributeChangedCallback(t,e,s){this.__isMounted&&(this.attributeChanged(t,e,s),o(this.__update))}__connectedCallback(){wt(this.render(),this.__renderRoot);const t=this.mounted();t&&(this.__unmountCallback=t),this.__isMounted=!0}disconnectedCallback(){var t;const e=this.constructor;e.observedStores&&e.observedStores.forEach(t=>{!function(t,e){t[c].delete(e)}(t,this.__update)}),null===(t=this.__unmountCallback)||void 0===t||t.call(this),this.unmounted(),this.__isMounted=!1}}class $t extends St{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ct=new i;let Pt=!1;const Ot=()=>{window.requestAnimationFrame((function t(e){const s=Ct.get();s&&(s(),performance.now()-e<16)?t(e):Pt&&Ot()}))};Ct.addEventListener("start",()=>{Pt=!0,Ot()}),Ct.addEventListener("end",()=>Pt=!1);const Ht=customElements.define.bind(customElements);function At(t,e){const s=t.constructor;s.observedAttributes||(s.observedAttributes=[]),s.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function jt(t,e){const s=t.constructor;s.observedPropertys||(s.observedPropertys=[]),s.observedPropertys.push(e)}function Vt(t){return function(e){const s=e;s.observedStores||(s.observedStores=[]),s.observedStores.push(t)}}function Mt(t){return function(e){customElements.define(t,e)}}customElements.define=function(t,e,s){customElements.get(t)||Ht(t,e,s)};const Rt=Symbol("open mark");function Tt(t){var e;return(e=class extends $t{constructor(){super(),this.closeHandle=this.closeHandle.bind(this)}static get isOpen(){return this.store[Rt]}static get observedStores(){return[p.store,this.store]}static open(t){const e=()=>d(this.store,Object.assign({[Rt]:!0},t));e(),p.push({open:e,close:this.close.bind(this),shouldClose:this.shouldClose.bind(this)})}static close(){d(this.store,Object.assign({[Rt]:!1},t))}static shouldClose(){return!0}closeHandle(){p.back()}render(){return _t``}}).store=u(Object.assign({[Rt]:!1},t)),e}var Lt,qt=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};class It extends RegExp{constructor(t){const e={};let s=0;super(`^${t.replace(/:([^/$]+)/g,(t,n)=>(e[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=e}}function Wt(t){return new It(t)}function Ut(t,e){return!!e.match(Wt(t))}function Dt(t,e){let s=t.pattern;return e&&e.params&&Object.keys(e.params).forEach(t=>{s=s.replace(new RegExp(`:${t}`,"g"),e.params[t])}),s}let Bt=Lt=class extends $t{constructor(){super();const{path:t,query:e}=p.getParams(),s=t+e;this.href=s}static getParams(){if(Lt.currentRoute)return function(t,e){const s=Wt(t),n=e.match(s);if(n){const t={};return Object.keys(s.namePosition).forEach(e=>{t[e]=n[s.namePosition[e]+1]}),t}}(Lt.currentRoute.pattern,p.getParams().path)}initPage(){Lt.currentRoute&&Lt.currentRoute.title&&Lt.currentRoute.title!==p.getParams().title&&p.updateParams({title:Lt.currentRoute.title})}shouldUpdate(){const{path:t,query:e}=p.getParams(),s=t+e;return t+e!==this.href&&(this.href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();Lt.currentRoute=null;let t,e=null;t=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of t){const{pattern:t}=s;if("*"===t)e=s;else if(Ut(t,p.getParams().path)){Lt.currentRoute=s;break}}return Lt.currentRoute||(Lt.currentRoute=e),Lt.currentRoute?Lt.currentRoute.redirect?(p.replace({path:Lt.currentRoute.redirect}),this.callback()):_t`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Lt.currentRoute.content}
    `:this.callback()}callback(){return Lt.currentRoute=null,_t``}};qt([jt],Bt.prototype,"routes",void 0),Bt=Lt=qt([Vt(p.store),Mt("gem-route")],Bt);var Ft=function(t,e,s,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,s,r):o(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};let zt=class extends $t{constructor(){super(),this.clickHandle=t=>{const e=this.getHref();if(!e.startsWith("/"))return void window.open(e);const{path:s,query:n,hash:o}=p.getParams();s+n+o!==e&&(t.stopPropagation(),this.route?p.pushIgnoreCloseHandle(function(t,e){const s=Dt(t,e);return Object.assign({path:s},e)}(this.route,this.options)):p.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash}))},this.preventDefault=t=>{t.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const t=this.options&&this.options.query||"",e=this.options&&this.options.hash||"";return Dt(this.route,this.options)+t+e}return this.href||this.path+this.query+this.hash}render(t=this.getHref()){return _t`
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
    `}};Ft([At],zt.prototype,"href",void 0),Ft([At],zt.prototype,"path",void 0),Ft([At],zt.prototype,"query",void 0),Ft([At],zt.prototype,"hash",void 0),Ft([jt],zt.prototype,"route",void 0),Ft([jt],zt.prototype,"options",void 0),zt=Ft([Mt("gem-link")],zt);let Jt=class extends zt{render(){const{path:t,query:e,hash:s}=p.getParams(),n=this.pattern&&Ut(this.pattern,t),o=this.getHref();return n||t+e+s===o?this.setAttribute("active",""):this.removeAttribute("active"),super.render(o)}};Ft([At],Jt.prototype,"pattern",void 0),Jt=Ft([Mt("gem-active-link"),Vt(p.store)],Jt);class Kt extends(Tt({content:_t``})){render(){return _t`
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
      <div class="root" ?hidden=${!Kt.isOpen}>
        <div class="body">
          <h2>hello.</h2>
        </div>
      </div>
    `}}customElements.define("app-dialog1",Kt);class Zt extends(Tt({content:_t``})){static shouldClose(){return confirm("confirm close dialog?")}openModal(){Kt.open({content:_t`
        213
      `})}render(){return _t`
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
          width: 300px;
          height: 200px;
          background: white;
        }
      </style>
      <div class="root" ?hidden=${!Zt.isOpen}>
        <div class="body">
          <h2>hello.</h2>
          <div>${Zt.store.content}</div>
          <button @click=${this.closeHandle}>x</button>
          <button @click=${this.openModal}>创建另一个 dialog</button>
          <app-dialog1></app-dialog1>
        </div>
      </div>
    `}}customElements.define("app-dialog",Zt);class Gt extends $t{constructor(){super(...arguments),this.clickHandle=()=>Zt.open({content:_t`
        <div>dialog</div>
        <gem-link path="/hi" style="cursor: pointer; color: blue">replace route</gem-link>
      `})}render(){return _t`
      <style>
        :host {
          font-size: x-large;
        }
      </style>
      <button @click="${this.clickHandle}">open dialog</button>
      <app-dialog></app-dialog>
    `}}customElements.define("app-root",Gt),document.body.append(new Gt)}]);
//# sourceMappingURL=bundle.85e257c88ca6f735f6b0.js.map