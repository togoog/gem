!function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gem/build/ref-route",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const n=new Set;function i(e){n.size||globalThis.queueMicrotask(()=>{n.forEach(e=>e()),n.clear()}),n.delete(e),n.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}new WeakMap;function a(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class l extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function h(){}const c="gem@storeHandlesKey";function u(e){const t=e;return Object.defineProperty(t,c,{enumerable:!1,value:new Set,writable:!0}),t}function d(e,t){Object.assign(e,t),e[c].forEach(e=>{i(e)})}const p=window.history,f=window.location,m=p.pushState.bind(p),g=p.replaceState.bind(p);let v=0;const _=()=>++v,y=u({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),b=new Map;function w(e){var t,s,n,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new l("`$key` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasCloseHandle)throw new l("`$hasCloseHandle` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasOpenHandle)throw new l("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new l("`$hasShouldCloseHandle` is not allowed")}function x(e){const t=e.title||"",s=e.path||("/"===f.pathname?"":f.pathname.replace(new RegExp(`^${p.basePath}`),"")),n=new r(e.query||(e.path?"":f.search)),i=e.path||e.query,o=e.hash||(i?"":f.hash);return Object.assign(Object.assign({},e),{title:t,path:s,query:n,hash:o})}function E(e,t){w(t.data);const s=x(t),{title:n,path:i,query:o,hash:l}=s,h=Object.assign({$hasCloseHandle:!!s.close,$hasOpenHandle:!!s.open,$hasShouldCloseHandle:!!s.shouldClose,$key:_()},s.data||{});b.set(h.$key,s),d(a(y),h);const c=p.basePath+i+new r(o)+l,u=f.hash;("push"===e?m:g)(h,n,c),u!==l&&window.dispatchEvent(new CustomEvent("hashchange"))}function k(e,t,s,n){w(t);const i=Object.assign({$key:_()},t||{}),{pathname:o,search:l,hash:h}=new URL(n,f.origin);f.hash!==h&&window.dispatchEvent(new CustomEvent("hashchange"));const c=x({path:o,query:new r(l),hash:h,title:s,data:t});b.set(i.$key,c),d(a(y),i);const u=p.basePath+n,v=f.hash;("push"===e?m:g)(i,s,u),v!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const N=u({basePath:""});if(!("basePath"in p)){if(Object.defineProperties(p,{basePath:{get:()=>N.basePath,set(e){if(N.basePath)throw new l("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");Object.assign(b.get(y.$key),{path:window.location.pathname.replace(new RegExp(`^${e}`),"")}),d(N,{basePath:e})}},getParams:{value:function(){return b.get(y.$key)}},updateParams:{value:function(e){Object.assign(b.get(y.$key),e),d(y,{})}},store:{value:y},push:{value:function(e){E("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,s,n;y.$hasCloseHandle?(null===(n=null===(t=b.get(y.$key))||void 0===t?void 0:(s=t).close)||void 0===n||n.call(s),p.replace(e)):p.push(e)}},replace:{value:function(e){E("replace",e)}},pushState:{value:function(e,t,s){k("push",e,t,s)}},replaceState:{value:function(e,t,s){k("replace",e,t,s)}}}),p.state)if(p.state.$close)p.back();else{const e=x({title:document.title});d(y,Object.assign({$key:_()},p.state||{})),b.set(y.$key,e)}else{const{pathname:e,search:t,hash:s}=f;p.replace({path:e,query:t,hash:s})}let e=!1;window.addEventListener("popstate",t=>{var s,n,i,o,l,h;const c=t.state;if(!(null===(s=c)||void 0===s?void 0:s.$key))return;if(e)return void(e=!1);if(!b.has(c.$key)){const{pathname:e,search:t,hash:s}=f;b.set(c.$key,{path:e,query:new r(t),hash:s,title:document.title,data:c})}const u=y;if(c.$key>u.$key&&c.$hasOpenHandle)null===(o=null===(n=b.get(c.$key))||void 0===n?void 0:(i=n).open)||void 0===o||o.call(i);else if(u.$hasCloseHandle){const t=b.get(u.$key),s=null===(l=t)||void 0===l?void 0:l.close,n=null===(h=t)||void 0===h?void 0:h.shouldClose;if(n&&!n())return e=!0,void p.forward();s?s():(e=!0,p.back())}d(a(y),c)})}
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
 */const P=new WeakMap,S=e=>(...t)=>{const s=e(...t);return P.set(s,!0),s},$=e=>"function"==typeof e&&P.has(e),C=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,O=(e,t,s=null,n=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,n),t=s}},A=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},H={},R={},V=`{{lit-${String(Math.random()).slice(2)}}}`,j=`\x3c!--${V}--\x3e`,M=new RegExp(`${V}|${j}`),T="$lit$";class q{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)L(t[e].name,T)&&n++;for(;n-- >0;){const t=l[a],s=W.exec(t)[2],n=s.toLowerCase()+T,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(M);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(V)>=0){const n=e.parentNode,i=t.split(M),o=i.length-1;for(let t=0;t<o;t++){let s,o=i[t];if(""===o)s=U();else{const e=W.exec(o);null!==e&&L(e[2],T)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-T.length)+e[3]),s=document.createTextNode(o)}n.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(U(),e),s.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===V){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(U(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(V,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const L=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},I=e=>-1!==e.index,U=()=>document.createComment(""),W=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class D{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=C?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=n.nextNode();for(;o<s.length;)if(i=s[o],I(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return C&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const B=` ${V} `;class F{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const o=W.exec(e);t+=null===o?e+(s?B:j):e.substr(0,o.index)+o[1]+o[2]+T+o[3]+V}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class z extends F{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),O(t,s.firstChild),e}}
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
 */const J=e=>null===e||!("object"==typeof e||"function"==typeof e),K=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Z{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new G(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(J(e)||!K(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class G{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===H||J(e)&&e===this.value||(this.value=e,$(e)||(this.committer.dirty=!0))}commit(){for(;$(this.value);){const e=this.value;this.value=H,e(this)}this.value!==H&&this.committer.commit()}}class Q{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(U()),this.endNode=e.appendChild(U())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=U()),e.__insert(this.endNode=U())}insertAfterPart(e){e.__insert(this.startNode=U()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=H,e(this)}const e=this.__pendingValue;e!==H&&(J(e)?e!==this.value&&this.__commitText(e):e instanceof F?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):K(e)?this.__commitIterable(e):e===R?(this.value=R,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof D&&this.value.template===t)this.value.update(e.values);else{const s=new D(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)s=t[n],void 0===s&&(s=new Q(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){A(this.startNode.parentNode,e.nextSibling,this.endNode)}}class X{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=H,e(this)}if(this.__pendingValue===H)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=H}}class Y extends Z{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new ee(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ee extends G{}let te=!1;try{const e={get capture(){return te=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class se{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;$(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=H,e(this)}if(this.__pendingValue===H)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=ne(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=H}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ne=e=>e&&(te?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const ie=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];if("."===i){return new Y(e,t.slice(1),s).parts}return"@"===i?[new se(e,t.slice(1),n.eventContext)]:"?"===i?[new X(e,t.slice(1),s)]:new Z(e,t,s).parts}handleTextExpression(e){return new Q(e)}};
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
 */function oe(e){let t=re.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},re.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(V);return s=t.keyString.get(n),void 0===s&&(s=new q(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const re=new Map,ae=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const le=(e,t)=>{const s=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,i=s.insertBefore(U(),n);s.insertBefore(U(),n);const o=new Q(e.options);return o.insertAfterNode(i),o},he=(e,t)=>(e.setValue(t),e.commit(),e),ce=(e,t,s)=>{const n=e.startNode.parentNode,i=s?s.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&O(n,t.startNode,o,i)},ue=e=>{A(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},de=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},pe=new WeakMap,fe=new WeakMap,me=S((e,t,s)=>{let n;return void 0===s?s=t:void 0!==t&&(n=t),t=>{if(!(t instanceof Q))throw new Error("repeat can only be used in text bindings");const i=pe.get(t)||[],o=fe.get(t)||[],r=[],a=[],l=[];let h,c,u=0;for(const t of e)l[u]=n?n(t,u):u,a[u]=s(t,u),u++;let d=0,p=i.length-1,f=0,m=a.length-1;for(;d<=p&&f<=m;)if(null===i[d])d++;else if(null===i[p])p--;else if(o[d]===l[f])r[f]=he(i[d],a[f]),d++,f++;else if(o[p]===l[m])r[m]=he(i[p],a[m]),p--,m--;else if(o[d]===l[m])r[m]=he(i[d],a[m]),ce(t,i[d],r[m+1]),d++,m--;else if(o[p]===l[f])r[f]=he(i[p],a[f]),ce(t,i[p],i[d]),p--,f++;else if(void 0===h&&(h=de(l,f,m),c=de(o,d,p)),h.has(o[d]))if(h.has(o[p])){const e=c.get(l[f]),s=void 0!==e?i[e]:null;if(null===s){const e=le(t,i[d]);he(e,a[f]),r[f]=e}else r[f]=he(s,a[f]),ce(t,s,i[d]),i[e]=null;f++}else ue(i[p]),p--;else ue(i[d]),d++;for(;f<=m;){const e=le(t,r[m+1]);he(e,a[f]),r[f++]=e}for(;d<=p;){const e=i[d++];null!==e&&ue(e)}pe.set(t,r),fe.set(t,l)}}),ge=new WeakMap,ve=S((e,t)=>s=>{const n=ge.get(s);if(Array.isArray(e)){if(Array.isArray(n)&&n.length===e.length&&e.every((e,t)=>e===n[t]))return}else if(n===e&&(void 0!==e||ge.has(s)))return;s.setValue(t()),ge.set(s,Array.isArray(e)?Array.from(e):e)}),_e=S(e=>t=>{if(void 0===e&&t instanceof G){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let ye={html:(e,...t)=>new F(e,t,"html",ie),svg:(e,...t)=>new z(e,t,"svg",ie),render:(e,t,s)=>{let n=ae.get(t);void 0===n&&(A(t,t.firstChild),ae.set(t,n=new Q(Object.assign({templateFactory:oe},s))),n.appendInto(t)),n.setValue(e),n.commit()},directive:S,repeat:me,guard:ve,ifDefined:_e};window.__litHtml?ye=window.__litHtml:window.__litHtml=ye;const{html:be,svg:we,render:xe,directive:Ee,repeat:ke,guard:Ne,ifDefined:Pe}=ye;class Se extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:s,defineEvents:n,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),s&&s.forEach(e=>{this.__connectProperty(e,!1)}),n&&n.forEach(e=>{this.__connectProperty(e,!0),this[e]=h}),i&&i.forEach(e=>{if(!e[c])throw new Error("`observedStores` only support store module");!function(e,t){e[c].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let s=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>s,set(n){if(n!==s){if(t){if(n.isEventHandle)throw"Don't assign a wrapped event handler";s=t=>{const s=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(s),n(s)},s.isEventHandle=!0}else s=n;this.__isMounted&&(this.propertyChanged(e,s,n),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return be`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(xe(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,s){}attributeChanged(e,t,s){}unmounted(){}attributeChangedCallback(e,t,s){this.__isMounted&&(this.attributeChanged(e,t,s),i(this.__update))}__connectedCallback(){xe(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[c].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class $e extends Se{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ce=new o;let Oe=!1;const Ae=()=>{window.requestAnimationFrame((function e(t){const s=Ce.get();s&&(s(),performance.now()-t<16)?e(t):Oe&&Ae()}))};Ce.addEventListener("start",()=>{Oe=!0,Ae()}),Ce.addEventListener("end",()=>Oe=!1);const He=customElements.define.bind(customElements);function Re(e,t){const s=e.constructor;s.observedAttributes||(s.observedAttributes=[]),s.observedAttributes.push(t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()))}function Ve(e,t){const s=e.constructor;s.observedPropertys||(s.observedPropertys=[]),s.observedPropertys.push(t)}function je(e){return function(t){const s=t;s.observedStores||(s.observedStores=[]),s.observedStores.push(e)}}function Me(e){return function(t){customElements.define(e,t)}}customElements.define=function(e,t,s){customElements.get(e)||He(e,t,s)};var Te,qe=function(e,t,s,n){var i,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,s,r):i(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r};class Le extends RegExp{constructor(e){const t={};let s=0;super(`^${e.replace(/:([^/$]+)/g,(e,n)=>(t[n]=s++,"([^/]+)")).replace("*",".*")}$`),this.namePosition=t}}function Ie(e){return new Le(e)}function Ue(e,t){return!!t.match(Ie(e))}function We(e,t){let s=e.pattern;return t&&t.params&&Object.keys(t.params).forEach(e=>{s=s.replace(new RegExp(`:${e}`,"g"),t.params[e])}),s}function De(e,t){const s=We(e,t);return Object.assign({path:s},t)}let Be=Te=class extends $e{constructor(){super();const{path:e,query:t}=p.getParams(),s=e+t;this.href=s}static getParams(){if(Te.currentRoute)return function(e,t){const s=Ie(e),n=t.match(s);if(n){const e={};return Object.keys(s.namePosition).forEach(t=>{e[t]=n[s.namePosition[t]+1]}),e}}(Te.currentRoute.pattern,p.getParams().path)}initPage(){Te.currentRoute&&Te.currentRoute.title&&Te.currentRoute.title!==p.getParams().title&&p.updateParams({title:Te.currentRoute.title})}shouldUpdate(){const{path:e,query:t}=p.getParams(),s=e+t;return e+t!==this.href&&(this.href=s,!0)}mounted(){this.initPage()}updated(){this.initPage(),this.dispatchEvent(new CustomEvent("change"))}render(){if(!this.routes)return this.callback();Te.currentRoute=null;let e,t=null;e=this.routes instanceof Array?this.routes:Object.values(this.routes);for(const s of e){const{pattern:e}=s;if("*"===e)t=s;else if(Ue(e,p.getParams().path)){Te.currentRoute=s;break}}return Te.currentRoute||(Te.currentRoute=t),Te.currentRoute?Te.currentRoute.redirect?(p.replace({path:Te.currentRoute.redirect}),this.callback()):be`
      <style>
        :host {
          display: contents;
        }
      </style>
      ${Te.currentRoute.content}
    `:this.callback()}callback(){return Te.currentRoute=null,be``}};qe([Ve],Be.prototype,"routes",void 0),Be=Te=qe([je(p.store),Me("gem-route")],Be);var Fe=function(e,t,s,n){var i,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,s,r):i(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r};let ze=class extends $e{constructor(){super(),this.clickHandle=e=>{const t=this.getHref();if(!t.startsWith("/"))return void window.open(t);const{path:s,query:n,hash:i}=p.getParams();if(s+n+i!==t)if(e.stopPropagation(),this.route)p.pushIgnoreCloseHandle(De(this.route,this.options));else if(this.href){const{pathname:e,search:t,hash:s}=new URL(this.href,location.origin);p.pushIgnoreCloseHandle({path:e,query:t,hash:s})}else console.log(this.href),p.pushIgnoreCloseHandle({path:this.path,query:this.query,hash:this.hash})},this.preventDefault=e=>{e.preventDefault()},this.onclick=this.clickHandle}getHref(){if(this.route){const e=this.options&&this.options.query||"",t=this.options&&this.options.hash||"";return We(this.route,this.options)+e+t}return this.href||this.path+this.query+this.hash}render(e=this.getHref()){return be`
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
      <a @click=${this.preventDefault} href=${new URL(p.basePath+e,location.origin).toString()}>
        <slot></slot>
      </a>
    `}};Fe([Re],ze.prototype,"href",void 0),Fe([Re],ze.prototype,"path",void 0),Fe([Re],ze.prototype,"query",void 0),Fe([Re],ze.prototype,"hash",void 0),Fe([Ve],ze.prototype,"route",void 0),Fe([Ve],ze.prototype,"options",void 0),ze=Fe([Me("gem-link"),je(N)],ze);let Je=class extends ze{render(){const{path:e,query:t,hash:s}=p.getParams(),n=this.pattern&&Ue(this.pattern,e),i=this.getHref();return n||e+t+s===i?this.setAttribute("active",""):this.removeAttribute("active"),super.render(i)}};Fe([Re],Je.prototype,"pattern",void 0),Je=Fe([Me("gem-active-link"),je(p.store)],Je);const Ke={home:{pattern:"/",get content(){return be`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: home page, click navigation to a page
        <gem-active-link .route=${Ke.a} .options=${{params:{b:1}}}>
          a page link, params: {a: 1}
        </gem-active-link>
      `}},a:{pattern:"/a/:b",get content(){return be`
        <style>
          gem-active-link {
            display: block;
          }
          gem-active-link[active] {
            color: inherit;
          }
        </style>
        current route: /a/:b, click navigation to home page, cuurent query: ${p.getParams().query.toString()}
        <gem-active-link .route=${Ke.a} .options=${{params:{b:1},query:"?a=1"}}>
          a page link, query: ?a=1
        </gem-active-link>
      `}}};class Ze extends $e{constructor(){super(...arguments),this.onclick=()=>{Be.currentRoute===Ke.home?p.push(De(Ke.a,{params:{b:String(Date.now())}})):p.push(De(Ke.home))}}render(){return be`
      <main>
        <gem-route .routes=${Ke}></gem-route>
      </main>
    `}}customElements.define("app-root",Ze),document.body.append(new Ze)}]);
//# sourceMappingURL=bundle.7179b7eac71cfc99f5bb.js.map