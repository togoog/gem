!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/gem/build/index/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=new Set;function i(e){s.size||globalThis.queueMicrotask(()=>{s.forEach(e=>e()),s.clear()}),s.delete(e),s.add(e)}class o extends(globalThis.Image||null){constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,o.prototype)}add(e){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,e),this.count+=1}get(){const e=this.pool.get(this.currentId);return e&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),e}}class r extends URLSearchParams{constructor(e){if(e instanceof r)return e;super(e),Object.setPrototypeOf(this,r.prototype)}concat(e){let t;t="string"==typeof e?Object.fromEntries(new URLSearchParams(e).entries()):e,Object.keys(t).forEach(e=>{this.append(e,t[e])})}toString(){const e=super.toString();return e?`?${e}`:""}toJSON(){return this.toString()}}new WeakMap;function a(e){return Object.keys(e).forEach(t=>{delete e[t]}),e}class l extends Error{constructor(e){super(e),this.message=`gem: ${this.message}`}}function h(){}const d="gem@storeHandlesKey";function u(e){const t=e;return Object.defineProperty(t,d,{enumerable:!1,value:new Set,writable:!0}),t}function c(e,t){Object.assign(e,t),e[d].forEach(e=>{i(e)})}const p=window.history,f=window.location,m=p.pushState.bind(p),g=p.replaceState.bind(p);let v=0;const _=()=>++v,b=u({$hasCloseHandle:!1,$hasOpenHandle:!1,$hasShouldCloseHandle:!1,$key:0}),y=new Map;function w(e){var t,n,s,i;if(null===(t=e)||void 0===t?void 0:t.$key)throw new l("`$key` is not allowed");if(null===(n=e)||void 0===n?void 0:n.$hasCloseHandle)throw new l("`$hasCloseHandle` is not allowed");if(null===(s=e)||void 0===s?void 0:s.$hasOpenHandle)throw new l("`$hasOpenHandle` is not allowed");if(null===(i=e)||void 0===i?void 0:i.$hasShouldCloseHandle)throw new l("`$hasShouldCloseHandle` is not allowed")}function x(e){return p.basePath?p.basePath+("/"===e?"":e):e}function E(e){return e.replace(new RegExp(`^${p.basePath}`),"")}function N(e){const t=e.title||"",n=e.path||E(f.pathname),s=new r(e.query||(e.path?"":f.search)),i=e.path||e.query,o=e.hash||(i?"":f.hash);return Object.assign(Object.assign({},e),{title:t,path:n,query:s,hash:o})}function S(e,t){w(t.data);const n=N(t),{title:s,path:i,query:o,hash:l}=n,h=Object.assign({$hasCloseHandle:!!n.close,$hasOpenHandle:!!n.open,$hasShouldCloseHandle:!!n.shouldClose,$key:_()},n.data||{});y.set(h.$key,n),c(a(b),h);const d=x(i)+new r(o)+l,u=f.hash;("push"===e?m:g)(h,s,d),u!==l&&window.dispatchEvent(new CustomEvent("hashchange"))}function $(e,t,n,s){w(t);const i=Object.assign({$key:_()},t||{}),{pathname:o,search:l,hash:h}=new URL(s,f.origin),d=N({path:o,query:new r(l),hash:h,title:n,data:t});y.set(i.$key,d),c(a(b),i);const u=x(o)+d.query+h,p=f.hash;("push"===e?m:g)(i,n,u),p!==h&&window.dispatchEvent(new CustomEvent("hashchange"))}const C=u({basePath:""});if(!("basePath"in p)){if(Object.defineProperties(p,{basePath:{get:()=>C.basePath,set(e){if(C.basePath)throw new l("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象");c(C,{basePath:e}),Object.assign(y.get(b.$key),{path:E(f.pathname)})}},getParams:{value:function(){return y.get(b.$key)}},updateParams:{value:function(e){Object.assign(y.get(b.$key),e),c(b,{})}},store:{value:b},push:{value:function(e){S("push",e)}},pushIgnoreCloseHandle:{value:function(e){var t,n,s;b.$hasCloseHandle?(null===(s=null===(t=y.get(b.$key))||void 0===t?void 0:(n=t).close)||void 0===s||s.call(n),p.replace(e)):p.push(e)}},replace:{value:function(e){S("replace",e)}},pushState:{value:function(e,t,n){$("push",e,t,n)}},replaceState:{value:function(e,t,n){$("replace",e,t,n)}}}),p.state)if(p.state.$hasCloseHandle)c(b,p.state),p.back();else{const e=N({title:document.title});c(b,Object.assign({$key:_()},p.state||{})),y.set(b.$key,e)}else{const{pathname:e,search:t,hash:n}=f;p.replace({path:e,query:t,hash:n})}let e=!1;window.addEventListener("popstate",t=>{var n,s,i,o,l,h;const d=t.state;if(!(null===(n=d)||void 0===n?void 0:n.$key))return;if(e)return void(e=!1);if(!y.has(d.$key)){const{pathname:e,search:t,hash:n}=f;y.set(d.$key,{path:e,query:new r(t),hash:n,title:document.title,data:d})}const u=b;if(d.$key>u.$key&&d.$hasOpenHandle)null===(o=null===(s=y.get(d.$key))||void 0===s?void 0:(i=s).open)||void 0===o||o.call(i);else if(u.$hasCloseHandle){const t=y.get(u.$key),n=null===(l=t)||void 0===l?void 0:l.close,s=null===(h=t)||void 0===h?void 0:h.shouldClose;if(s&&!s())return e=!0,void p.forward();n?n():d.$hasCloseHandle&&(e=!0,p.back())}c(a(b),d)})}
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
 */const k=new WeakMap,O=e=>(...t)=>{const n=e(...t);return k.set(n,!0),n},P=e=>"function"==typeof e&&k.has(e),V=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,A=(e,t,n=null,s=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,s),t=n}},H=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},M={},T={},j=`{{lit-${String(Math.random()).slice(2)}}}`,L=`\x3c!--${j}--\x3e`,R=new RegExp(`${j}|${L}`),I="$lit$";class q{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)W(t[e].name,I)&&s++;for(;s-- >0;){const t=l[a],n=F.exec(t)[2],s=n.toLowerCase()+I,i=e.getAttribute(s);e.removeAttribute(s);const o=i.split(R);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(j)>=0){const s=e.parentNode,i=t.split(R),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=B();else{const e=F.exec(o);null!==e&&W(e[2],I)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-I.length)+e[3]),n=document.createTextNode(o)}s.insertBefore(n,e),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(B(),e),n.push(e)):e.data=i[o],a+=o}}else if(8===e.nodeType)if(e.data===j){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(B(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(n.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(j,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const W=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},U=e=>-1!==e.index,B=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class D{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=V?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],U(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return V&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const z=` ${j} `;class J{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const o=F.exec(e);t+=null===o?e+(n?z:L):e.substr(0,o.index)+o[1]+o[2]+I+o[3]+j}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class K extends J{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),A(t,n.firstChild),e}}
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
 */const G=e=>null===e||!("object"==typeof e||"function"==typeof e),Q=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class X{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Y(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(G(e)||!Q(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Y{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===M||G(e)&&e===this.value||(this.value=e,P(e)||(this.committer.dirty=!0))}commit(){for(;P(this.value);){const e=this.value;this.value=M,e(this)}this.value!==M&&this.committer.commit()}}class Z{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(B()),this.endNode=e.appendChild(B())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=B()),e.__insert(this.endNode=B())}insertAfterPart(e){e.__insert(this.startNode=B()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;P(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=M,e(this)}const e=this.__pendingValue;e!==M&&(G(e)?e!==this.value&&this.__commitText(e):e instanceof J?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Q(e)?this.__commitIterable(e):e===T?(this.value=T,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof D&&this.value.template===t)this.value.update(e.values);else{const n=new D(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)n=t[s],void 0===n&&(n=new Z(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){H(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ee{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;P(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=M,e(this)}if(this.__pendingValue===M)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=M}}class te extends X{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ne extends Y{}let se=!1;try{const e={get capture(){return se=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ie{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;P(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=M,e(this)}if(this.__pendingValue===M)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=oe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=M}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const oe=e=>e&&(se?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const re=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];if("."===i){return new te(e,t.slice(1),n).parts}return"@"===i?[new ie(e,t.slice(1),s.eventContext)]:"?"===i?[new ee(e,t.slice(1),n)]:new X(e,t,n).parts}handleTextExpression(e){return new Z(e)}};
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
 */function ae(e){let t=le.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},le.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(j);return n=t.keyString.get(s),void 0===n&&(n=new q(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const le=new Map,he=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const de=(e,t)=>{const n=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,i=n.insertBefore(B(),s);n.insertBefore(B(),s);const o=new Z(e.options);return o.insertAfterNode(i),o},ue=(e,t)=>(e.setValue(t),e.commit(),e),ce=(e,t,n)=>{const s=e.startNode.parentNode,i=n?n.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&A(s,t.startNode,o,i)},pe=e=>{H(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},fe=(e,t,n)=>{const s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},me=new WeakMap,ge=new WeakMap,ve=O((e,t,n)=>{let s;return void 0===n?n=t:void 0!==t&&(s=t),t=>{if(!(t instanceof Z))throw new Error("repeat can only be used in text bindings");const i=me.get(t)||[],o=ge.get(t)||[],r=[],a=[],l=[];let h,d,u=0;for(const t of e)l[u]=s?s(t,u):u,a[u]=n(t,u),u++;let c=0,p=i.length-1,f=0,m=a.length-1;for(;c<=p&&f<=m;)if(null===i[c])c++;else if(null===i[p])p--;else if(o[c]===l[f])r[f]=ue(i[c],a[f]),c++,f++;else if(o[p]===l[m])r[m]=ue(i[p],a[m]),p--,m--;else if(o[c]===l[m])r[m]=ue(i[c],a[m]),ce(t,i[c],r[m+1]),c++,m--;else if(o[p]===l[f])r[f]=ue(i[p],a[f]),ce(t,i[p],i[c]),p--,f++;else if(void 0===h&&(h=fe(l,f,m),d=fe(o,c,p)),h.has(o[c]))if(h.has(o[p])){const e=d.get(l[f]),n=void 0!==e?i[e]:null;if(null===n){const e=de(t,i[c]);ue(e,a[f]),r[f]=e}else r[f]=ue(n,a[f]),ce(t,n,i[c]),i[e]=null;f++}else pe(i[p]),p--;else pe(i[c]),c++;for(;f<=m;){const e=de(t,r[m+1]);ue(e,a[f]),r[f++]=e}for(;c<=p;){const e=i[c++];null!==e&&pe(e)}me.set(t,r),ge.set(t,l)}}),_e=new WeakMap,be=O((e,t)=>n=>{const s=_e.get(n);if(Array.isArray(e)){if(Array.isArray(s)&&s.length===e.length&&e.every((e,t)=>e===s[t]))return}else if(s===e&&(void 0!==e||_e.has(n)))return;n.setValue(t()),_e.set(n,Array.isArray(e)?Array.from(e):e)}),ye=O(e=>t=>{if(void 0===e&&t instanceof Y){if(e!==t.value){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else t.setValue(e)});let we={html:(e,...t)=>new J(e,t,"html",re),svg:(e,...t)=>new K(e,t,"svg",re),render:(e,t,n)=>{let s=he.get(t);void 0===s&&(H(t,t.firstChild),he.set(t,s=new Z(Object.assign({templateFactory:ae},n))),s.appendInto(t)),s.setValue(e),s.commit()},directive:O,repeat:ve,guard:be,ifDefined:ye};window.__litHtml?we=window.__litHtml:window.__litHtml=we;const{html:xe,svg:Ee,render:Ne,directive:Se,repeat:$e,guard:Ce,ifDefined:ke}=we;class Oe extends HTMLElement{constructor(e=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=e?this.attachShadow({mode:"open"}):this;const{observedAttributes:t,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;t&&t.forEach(e=>{const t=function(e){return e.replace(/-(.)/g,(e,t)=>t.toUpperCase())}(e);if("function"==typeof this[t])throw"Don't use attribute with the same name as native methods";void 0===this[t]&&Object.defineProperty(this,t,{configurable:!0,get(){return this.getAttribute(e)||""},set(t){null===t?this.removeAttribute(e):this.setAttribute(e,t)}})}),n&&n.forEach(e=>{this.__connectProperty(e,!1)}),s&&s.forEach(e=>{this.__connectProperty(e,!0),this[e]=h}),i&&i.forEach(e=>{if(!e[d])throw new Error("`observedStores` only support store module");!function(e,t){e[d].add(t)}(e,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(e,t=!1){if(e in this)return;let n=this[e];Object.defineProperty(this,e,{configurable:!0,get:()=>n,set(s){if(s!==n){if(t){if(s.isEventHandle)throw"Don't assign a wrapped event handler";n=t=>{const n=new CustomEvent(e.toLowerCase(),{detail:t});this.dispatchEvent(n),s(n)},n.isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(e,n,s),i(this.__update))}}})}setState(e){if(!this.state)throw new Error("`state` not initialized");Object.assign(this.state,e),i(this.__update)}willMount(){}render(){return xe`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(Ne(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(e,t,n){}attributeChanged(e,t,n){}unmounted(){}attributeChangedCallback(e,t,n){this.__isMounted&&(this.attributeChanged(e,t,n),i(this.__update))}__connectedCallback(){Ne(this.render(),this.__renderRoot);const e=this.mounted();e&&(this.__unmountCallback=e),this.__isMounted=!0}disconnectedCallback(){var e;const t=this.constructor;t.observedStores&&t.observedStores.forEach(e=>{!function(e,t){e[d].delete(t)}(e,this.__update)}),null===(e=this.__unmountCallback)||void 0===e||e.call(this),this.unmounted(),this.__isMounted=!1}}class Pe extends Oe{connectedCallback(){this.willMount(),this.__connectedCallback()}}const Ve=new o;let Ae=!1;const He=()=>{window.requestAnimationFrame((function e(t){const n=Ve.get();n&&(n(),performance.now()-t<16)?e(t):Ae&&He()}))};Ve.addEventListener("start",()=>{Ae=!0,He()}),Ve.addEventListener("end",()=>Ae=!1);const Me=customElements.define.bind(customElements);customElements.define=function(e,t,n){customElements.get(e)||Me(e,t,n)};const Te=e=>`../${e}/`;let je=class extends Pe{constructor(){super(...arguments),this.render=()=>{const e="base-path,decorator,dialog,hash,hello-world,index,light-dom,multi-page,perf-demo,ref-route,styled,svg-icon,theme".split(",");return xe`
      <dl>
        <dt>version:</dt>
        <dd>${"0.3.5"}</dd>
        ${e.map(e=>xe`
            <dt>${e}:</dt>
            <dd><a href=${Te(e)}>${new URL(Te(e),location.href)}</a></dd>
          `)}
      </dl>
    `}}};var Le;je=function(e,t,n,s){var i,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}([(Le="app-root",function(e){customElements.define(Le,e)})],je),document.body.append(new je)}]);
//# sourceMappingURL=bundle.3352bf843979db95ce0c.js.map