var e0=Object.defineProperty;var n0=(n,t,e)=>t in n?e0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Je=(n,t,e)=>n0(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function r0(){return`
    <div class="topbar">

      <button data-page="newOrder">
        New Order
      </button>

      <button data-page="openOrders">
        Open Orders
      </button>

      <button data-page="warehouse">
        Warehouse
      </button>

      <button data-page="shipping">
        Shipping
      </button>

      <button data-page="invoicing">
        Invoicing
      </button>

      <button data-page="admin">
        Admin
      </button>

      <button data-page="analytics">
        Analytics
      </button>

    </div>
  `}function i0(n){document.addEventListener("click",t=>{const e=t.target.closest("[data-page]");e&&(t.preventDefault(),n(e.dataset.page))})}var nf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},s0=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},_1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,b=(s&3)<<4|a>>4;let A=(a&15)<<2|d>>6,m=d&63;u||(m=64,o||(A=64)),r.push(e[f],e[b],e[A],e[m])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(w1(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):s0(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const b=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||d==null||b==null)throw new o0;const A=s<<2|a>>4;if(r.push(A),d!==64){const m=a<<4&240|d>>2;if(r.push(m),b!==64){const D=d<<6&192|b;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class o0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a0=function(n){const t=w1(n);return _1.encodeByteArray(t,!0)},dc=function(n){return a0(n).replace(/\./g,"")},l0=function(n){try{return _1.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=()=>c0().__FIREBASE_DEFAULTS__,h0=()=>{if(typeof process>"u"||typeof nf>"u")return;const n=nf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},d0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&l0(n[1]);return t&&JSON.parse(t)},Th=()=>{try{return u0()||h0()||d0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},f0=n=>{var t,e;return(e=(t=Th())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},p0=n=>{const t=f0(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},A1=()=>{var n;return(n=Th())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[dc(JSON.stringify(e)),dc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v0(){var n;const t=(n=Th())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b0(){return!v0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w0(){try{return typeof indexedDB=="object"}catch{return!1}}function _0(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="FirebaseError";class xa extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=A0,Object.setPrototypeOf(this,xa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E1.prototype.create)}}class E1{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?E0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xa(i,a,r)}}function E0(n,t){return n.replace(x0,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const x0=/\{\$([^}]+)}/g;function qu(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(rf(s)&&rf(o)){if(!qu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function rf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){return n&&n._delegate?n._delegate:n}class ll{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new m0;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(N0(t))try{this.getOrInitializeService({instanceIdentifier:Ao})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ao){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ao){return this.instances.has(t)}getOptions(t=Ao){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I0(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ao){return this.component?this.component.multipleInstances?t:Ao:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(n){return n===Ao?void 0:n}function N0(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new S0(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ue||(Ue={}));const L0={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},P0=Ue.INFO,k0={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},C0=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=k0[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class x1{constructor(t){this.name=t,this._logLevel=P0,this._logHandler=C0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?L0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...t),this._logHandler(this,Ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...t),this._logHandler(this,Ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...t),this._logHandler(this,Ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...t),this._logHandler(this,Ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...t),this._logHandler(this,Ue.ERROR,...t)}}const R0=(n,t)=>t.some(e=>n instanceof e);let sf,of;function D0(){return sf||(sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O0(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S1=new WeakMap,zu=new WeakMap,I1=new WeakMap,du=new WeakMap,Lh=new WeakMap;function F0(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(Ks(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&S1.set(e,n)}).catch(()=>{}),Lh.set(t,n),t}function M0(n){if(zu.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});zu.set(n,t)}let Hu={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zu.get(n);if(t==="objectStoreNames")return n.objectStoreNames||I1.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ks(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function B0(n){Hu=n(Hu)}function V0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(fu(this),t,...e);return I1.set(r,t.sort?t.sort():[t]),Ks(r)}:O0().includes(n)?function(...t){return n.apply(fu(this),t),Ks(S1.get(this))}:function(...t){return Ks(n.apply(fu(this),t))}}function j0(n){return typeof n=="function"?V0(n):(n instanceof IDBTransaction&&M0(n),R0(n,D0())?new Proxy(n,Hu):n)}function Ks(n){if(n instanceof IDBRequest)return F0(n);if(du.has(n))return du.get(n);const t=j0(n);return t!==n&&(du.set(n,t),Lh.set(t,n)),t}const fu=n=>Lh.get(n);function U0(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=Ks(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ks(o.result),u.oldVersion,u.newVersion,Ks(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const $0=["get","getKey","getAll","getAllKeys","count"],q0=["put","add","delete","clear"],pu=new Map;function af(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(pu.get(t))return pu.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=q0.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$0.includes(e)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[e](...a),i&&u.done]))[0]};return pu.set(t,s),s}B0(n=>({...n,get:(t,e,r)=>af(t,e)||n.get(t,e,r),has:(t,e)=>!!af(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(H0(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function H0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wu="@firebase/app",lf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new x1("@firebase/app"),W0="@firebase/app-compat",G0="@firebase/analytics-compat",K0="@firebase/analytics",Q0="@firebase/app-check-compat",Y0="@firebase/app-check",X0="@firebase/auth",J0="@firebase/auth-compat",Z0="@firebase/database",t5="@firebase/data-connect",e5="@firebase/database-compat",n5="@firebase/functions",r5="@firebase/functions-compat",i5="@firebase/installations",s5="@firebase/installations-compat",o5="@firebase/messaging",a5="@firebase/messaging-compat",l5="@firebase/performance",c5="@firebase/performance-compat",u5="@firebase/remote-config",h5="@firebase/remote-config-compat",d5="@firebase/storage",f5="@firebase/storage-compat",p5="@firebase/firestore",m5="@firebase/vertexai-preview",g5="@firebase/firestore-compat",y5="firebase",v5="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="[DEFAULT]",b5={[Wu]:"fire-core",[W0]:"fire-core-compat",[K0]:"fire-analytics",[G0]:"fire-analytics-compat",[Y0]:"fire-app-check",[Q0]:"fire-app-check-compat",[X0]:"fire-auth",[J0]:"fire-auth-compat",[Z0]:"fire-rtdb",[t5]:"fire-data-connect",[e5]:"fire-rtdb-compat",[n5]:"fire-fn",[r5]:"fire-fn-compat",[i5]:"fire-iid",[s5]:"fire-iid-compat",[o5]:"fire-fcm",[a5]:"fire-fcm-compat",[l5]:"fire-perf",[c5]:"fire-perf-compat",[u5]:"fire-rc",[h5]:"fire-rc-compat",[d5]:"fire-gcs",[f5]:"fire-gcs-compat",[p5]:"fire-fst",[g5]:"fire-fst-compat",[m5]:"fire-vertex","fire-js":"fire-js",[y5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map,w5=new Map,Ku=new Map;function cf(n,t){try{n.container.addComponent(t)}catch(e){_s.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function pc(n){const t=n.name;if(Ku.has(t))return _s.debug(`There were multiple attempts to register component ${t}.`),!1;Ku.set(t,n);for(const e of fc.values())cf(e,n);for(const e of w5.values())cf(e,n);return!0}function _5(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qs=new E1("app","Firebase",A5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ll("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x5=v5;function N1(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Qs.create("bad-app-name",{appName:String(i)});if(e||(e=A1()),!e)throw Qs.create("no-options");const s=fc.get(i);if(s){if(qu(e,s.options)&&qu(r,s.config))return s;throw Qs.create("duplicate-app",{appName:i})}const o=new T0(i);for(const u of Ku.values())o.addComponent(u);const a=new E5(e,r,o);return fc.set(i,a),a}function S5(n=Gu){const t=fc.get(n);if(!t&&n===Gu&&A1())return N1();if(!t)throw Qs.create("no-app",{appName:n});return t}function ua(n,t,e){var r;let i=(r=b5[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_s.warn(a.join(" "));return}pc(new ll(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I5="firebase-heartbeat-database",N5=1,cl="firebase-heartbeat-store";let mu=null;function T1(){return mu||(mu=U0(I5,N5,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(cl)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qs.create("idb-open",{originalErrorMessage:n.message})})),mu}async function T5(n){try{const e=(await T1()).transaction(cl),r=await e.objectStore(cl).get(L1(n));return await e.done,r}catch(t){if(t instanceof xa)_s.warn(t.message);else{const e=Qs.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_s.warn(e.message)}}}async function uf(n,t){try{const r=(await T1()).transaction(cl,"readwrite");await r.objectStore(cl).put(t,L1(n)),await r.done}catch(e){if(e instanceof xa)_s.warn(e.message);else{const r=Qs.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});_s.warn(r.message)}}}function L1(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L5=1024,P5=30*24*60*60*1e3;class k5{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new R5(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=P5}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_s.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hf(),{heartbeatsToSend:r,unsentEntries:i}=C5(this._heartbeatsCache.heartbeats),s=dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return _s.warn(e),""}}}function hf(){return new Date().toISOString().substring(0,10)}function C5(n,t=L5){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),df(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),df(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class R5{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w0()?_0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await T5(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return uf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return uf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function df(n){return dc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D5(n){pc(new ll("platform-logger",t=>new z0(t),"PRIVATE")),pc(new ll("heartbeat",t=>new k5(t),"PRIVATE")),ua(Wu,lf,n),ua(Wu,lf,"esm2017"),ua("fire-js","")}D5("");var O5="firebase",F5="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ua(O5,F5,"app");var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Io,P1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(j,N){function E(){}E.prototype=N.prototype,j.D=N.prototype,j.prototype=new E,j.prototype.constructor=j,j.C=function(C,w,x){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return N.prototype[w].apply(C,S)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(j,N,E){E||(E=0);var C=Array(16);if(typeof N=="string")for(var w=0;16>w;++w)C[w]=N.charCodeAt(E++)|N.charCodeAt(E++)<<8|N.charCodeAt(E++)<<16|N.charCodeAt(E++)<<24;else for(w=0;16>w;++w)C[w]=N[E++]|N[E++]<<8|N[E++]<<16|N[E++]<<24;N=j.g[0],E=j.g[1],w=j.g[2];var x=j.g[3],S=N+(x^E&(w^x))+C[0]+3614090360&4294967295;N=E+(S<<7&4294967295|S>>>25),S=x+(w^N&(E^w))+C[1]+3905402710&4294967295,x=N+(S<<12&4294967295|S>>>20),S=w+(E^x&(N^E))+C[2]+606105819&4294967295,w=x+(S<<17&4294967295|S>>>15),S=E+(N^w&(x^N))+C[3]+3250441966&4294967295,E=w+(S<<22&4294967295|S>>>10),S=N+(x^E&(w^x))+C[4]+4118548399&4294967295,N=E+(S<<7&4294967295|S>>>25),S=x+(w^N&(E^w))+C[5]+1200080426&4294967295,x=N+(S<<12&4294967295|S>>>20),S=w+(E^x&(N^E))+C[6]+2821735955&4294967295,w=x+(S<<17&4294967295|S>>>15),S=E+(N^w&(x^N))+C[7]+4249261313&4294967295,E=w+(S<<22&4294967295|S>>>10),S=N+(x^E&(w^x))+C[8]+1770035416&4294967295,N=E+(S<<7&4294967295|S>>>25),S=x+(w^N&(E^w))+C[9]+2336552879&4294967295,x=N+(S<<12&4294967295|S>>>20),S=w+(E^x&(N^E))+C[10]+4294925233&4294967295,w=x+(S<<17&4294967295|S>>>15),S=E+(N^w&(x^N))+C[11]+2304563134&4294967295,E=w+(S<<22&4294967295|S>>>10),S=N+(x^E&(w^x))+C[12]+1804603682&4294967295,N=E+(S<<7&4294967295|S>>>25),S=x+(w^N&(E^w))+C[13]+4254626195&4294967295,x=N+(S<<12&4294967295|S>>>20),S=w+(E^x&(N^E))+C[14]+2792965006&4294967295,w=x+(S<<17&4294967295|S>>>15),S=E+(N^w&(x^N))+C[15]+1236535329&4294967295,E=w+(S<<22&4294967295|S>>>10),S=N+(w^x&(E^w))+C[1]+4129170786&4294967295,N=E+(S<<5&4294967295|S>>>27),S=x+(E^w&(N^E))+C[6]+3225465664&4294967295,x=N+(S<<9&4294967295|S>>>23),S=w+(N^E&(x^N))+C[11]+643717713&4294967295,w=x+(S<<14&4294967295|S>>>18),S=E+(x^N&(w^x))+C[0]+3921069994&4294967295,E=w+(S<<20&4294967295|S>>>12),S=N+(w^x&(E^w))+C[5]+3593408605&4294967295,N=E+(S<<5&4294967295|S>>>27),S=x+(E^w&(N^E))+C[10]+38016083&4294967295,x=N+(S<<9&4294967295|S>>>23),S=w+(N^E&(x^N))+C[15]+3634488961&4294967295,w=x+(S<<14&4294967295|S>>>18),S=E+(x^N&(w^x))+C[4]+3889429448&4294967295,E=w+(S<<20&4294967295|S>>>12),S=N+(w^x&(E^w))+C[9]+568446438&4294967295,N=E+(S<<5&4294967295|S>>>27),S=x+(E^w&(N^E))+C[14]+3275163606&4294967295,x=N+(S<<9&4294967295|S>>>23),S=w+(N^E&(x^N))+C[3]+4107603335&4294967295,w=x+(S<<14&4294967295|S>>>18),S=E+(x^N&(w^x))+C[8]+1163531501&4294967295,E=w+(S<<20&4294967295|S>>>12),S=N+(w^x&(E^w))+C[13]+2850285829&4294967295,N=E+(S<<5&4294967295|S>>>27),S=x+(E^w&(N^E))+C[2]+4243563512&4294967295,x=N+(S<<9&4294967295|S>>>23),S=w+(N^E&(x^N))+C[7]+1735328473&4294967295,w=x+(S<<14&4294967295|S>>>18),S=E+(x^N&(w^x))+C[12]+2368359562&4294967295,E=w+(S<<20&4294967295|S>>>12),S=N+(E^w^x)+C[5]+4294588738&4294967295,N=E+(S<<4&4294967295|S>>>28),S=x+(N^E^w)+C[8]+2272392833&4294967295,x=N+(S<<11&4294967295|S>>>21),S=w+(x^N^E)+C[11]+1839030562&4294967295,w=x+(S<<16&4294967295|S>>>16),S=E+(w^x^N)+C[14]+4259657740&4294967295,E=w+(S<<23&4294967295|S>>>9),S=N+(E^w^x)+C[1]+2763975236&4294967295,N=E+(S<<4&4294967295|S>>>28),S=x+(N^E^w)+C[4]+1272893353&4294967295,x=N+(S<<11&4294967295|S>>>21),S=w+(x^N^E)+C[7]+4139469664&4294967295,w=x+(S<<16&4294967295|S>>>16),S=E+(w^x^N)+C[10]+3200236656&4294967295,E=w+(S<<23&4294967295|S>>>9),S=N+(E^w^x)+C[13]+681279174&4294967295,N=E+(S<<4&4294967295|S>>>28),S=x+(N^E^w)+C[0]+3936430074&4294967295,x=N+(S<<11&4294967295|S>>>21),S=w+(x^N^E)+C[3]+3572445317&4294967295,w=x+(S<<16&4294967295|S>>>16),S=E+(w^x^N)+C[6]+76029189&4294967295,E=w+(S<<23&4294967295|S>>>9),S=N+(E^w^x)+C[9]+3654602809&4294967295,N=E+(S<<4&4294967295|S>>>28),S=x+(N^E^w)+C[12]+3873151461&4294967295,x=N+(S<<11&4294967295|S>>>21),S=w+(x^N^E)+C[15]+530742520&4294967295,w=x+(S<<16&4294967295|S>>>16),S=E+(w^x^N)+C[2]+3299628645&4294967295,E=w+(S<<23&4294967295|S>>>9),S=N+(w^(E|~x))+C[0]+4096336452&4294967295,N=E+(S<<6&4294967295|S>>>26),S=x+(E^(N|~w))+C[7]+1126891415&4294967295,x=N+(S<<10&4294967295|S>>>22),S=w+(N^(x|~E))+C[14]+2878612391&4294967295,w=x+(S<<15&4294967295|S>>>17),S=E+(x^(w|~N))+C[5]+4237533241&4294967295,E=w+(S<<21&4294967295|S>>>11),S=N+(w^(E|~x))+C[12]+1700485571&4294967295,N=E+(S<<6&4294967295|S>>>26),S=x+(E^(N|~w))+C[3]+2399980690&4294967295,x=N+(S<<10&4294967295|S>>>22),S=w+(N^(x|~E))+C[10]+4293915773&4294967295,w=x+(S<<15&4294967295|S>>>17),S=E+(x^(w|~N))+C[1]+2240044497&4294967295,E=w+(S<<21&4294967295|S>>>11),S=N+(w^(E|~x))+C[8]+1873313359&4294967295,N=E+(S<<6&4294967295|S>>>26),S=x+(E^(N|~w))+C[15]+4264355552&4294967295,x=N+(S<<10&4294967295|S>>>22),S=w+(N^(x|~E))+C[6]+2734768916&4294967295,w=x+(S<<15&4294967295|S>>>17),S=E+(x^(w|~N))+C[13]+1309151649&4294967295,E=w+(S<<21&4294967295|S>>>11),S=N+(w^(E|~x))+C[4]+4149444226&4294967295,N=E+(S<<6&4294967295|S>>>26),S=x+(E^(N|~w))+C[11]+3174756917&4294967295,x=N+(S<<10&4294967295|S>>>22),S=w+(N^(x|~E))+C[2]+718787259&4294967295,w=x+(S<<15&4294967295|S>>>17),S=E+(x^(w|~N))+C[9]+3951481745&4294967295,j.g[0]=j.g[0]+N&4294967295,j.g[1]=j.g[1]+(w+(S<<21&4294967295|S>>>11))&4294967295,j.g[2]=j.g[2]+w&4294967295,j.g[3]=j.g[3]+x&4294967295}r.prototype.u=function(j,N){N===void 0&&(N=j.length);for(var E=N-this.blockSize,C=this.B,w=this.h,x=0;x<N;){if(w==0)for(;x<=E;)i(this,j,x),x+=this.blockSize;if(typeof j=="string"){for(;x<N;)if(C[w++]=j.charCodeAt(x++),w==this.blockSize){i(this,C),w=0;break}}else for(;x<N;)if(C[w++]=j[x++],w==this.blockSize){i(this,C),w=0;break}}this.h=w,this.o+=N},r.prototype.v=function(){var j=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);j[0]=128;for(var N=1;N<j.length-8;++N)j[N]=0;var E=8*this.o;for(N=j.length-8;N<j.length;++N)j[N]=E&255,E/=256;for(this.u(j),j=Array(16),N=E=0;4>N;++N)for(var C=0;32>C;C+=8)j[E++]=this.g[N]>>>C&255;return j};function s(j,N){var E=a;return Object.prototype.hasOwnProperty.call(E,j)?E[j]:E[j]=N(j)}function o(j,N){this.h=N;for(var E=[],C=!0,w=j.length-1;0<=w;w--){var x=j[w]|0;C&&x==N||(E[w]=x,C=!1)}this.g=E}var a={};function u(j){return-128<=j&&128>j?s(j,function(N){return new o([N|0],0>N?-1:0)}):new o([j|0],0>j?-1:0)}function d(j){if(isNaN(j)||!isFinite(j))return b;if(0>j)return M(d(-j));for(var N=[],E=1,C=0;j>=E;C++)N[C]=j/E|0,E*=4294967296;return new o(N,0)}function f(j,N){if(j.length==0)throw Error("number format error: empty string");if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(j.charAt(0)=="-")return M(f(j.substring(1),N));if(0<=j.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(N,8)),C=b,w=0;w<j.length;w+=8){var x=Math.min(8,j.length-w),S=parseInt(j.substring(w,w+x),N);8>x?(x=d(Math.pow(N,x)),C=C.j(x).add(d(S))):(C=C.j(E),C=C.add(d(S)))}return C}var b=u(0),A=u(1),m=u(16777216);n=o.prototype,n.m=function(){if(R(this))return-M(this).m();for(var j=0,N=1,E=0;E<this.g.length;E++){var C=this.i(E);j+=(0<=C?C:4294967296+C)*N,N*=4294967296}return j},n.toString=function(j){if(j=j||10,2>j||36<j)throw Error("radix out of range: "+j);if(D(this))return"0";if(R(this))return"-"+M(this).toString(j);for(var N=d(Math.pow(j,6)),E=this,C="";;){var w=W(E,N).g;E=O(E,w.j(N));var x=((0<E.g.length?E.g[0]:E.h)>>>0).toString(j);if(E=w,D(E))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},n.i=function(j){return 0>j?0:j<this.g.length?this.g[j]:this.h};function D(j){if(j.h!=0)return!1;for(var N=0;N<j.g.length;N++)if(j.g[N]!=0)return!1;return!0}function R(j){return j.h==-1}n.l=function(j){return j=O(this,j),R(j)?-1:D(j)?0:1};function M(j){for(var N=j.g.length,E=[],C=0;C<N;C++)E[C]=~j.g[C];return new o(E,~j.h).add(A)}n.abs=function(){return R(this)?M(this):this},n.add=function(j){for(var N=Math.max(this.g.length,j.g.length),E=[],C=0,w=0;w<=N;w++){var x=C+(this.i(w)&65535)+(j.i(w)&65535),S=(x>>>16)+(this.i(w)>>>16)+(j.i(w)>>>16);C=S>>>16,x&=65535,S&=65535,E[w]=S<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function O(j,N){return j.add(M(N))}n.j=function(j){if(D(this)||D(j))return b;if(R(this))return R(j)?M(this).j(M(j)):M(M(this).j(j));if(R(j))return M(this.j(M(j)));if(0>this.l(m)&&0>j.l(m))return d(this.m()*j.m());for(var N=this.g.length+j.g.length,E=[],C=0;C<2*N;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(var w=0;w<j.g.length;w++){var x=this.i(C)>>>16,S=this.i(C)&65535,Q=j.i(w)>>>16,ut=j.i(w)&65535;E[2*C+2*w]+=S*ut,Y(E,2*C+2*w),E[2*C+2*w+1]+=x*ut,Y(E,2*C+2*w+1),E[2*C+2*w+1]+=S*Q,Y(E,2*C+2*w+1),E[2*C+2*w+2]+=x*Q,Y(E,2*C+2*w+2)}for(C=0;C<N;C++)E[C]=E[2*C+1]<<16|E[2*C];for(C=N;C<2*N;C++)E[C]=0;return new o(E,0)};function Y(j,N){for(;(j[N]&65535)!=j[N];)j[N+1]+=j[N]>>>16,j[N]&=65535,N++}function G(j,N){this.g=j,this.h=N}function W(j,N){if(D(N))throw Error("division by zero");if(D(j))return new G(b,b);if(R(j))return N=W(M(j),N),new G(M(N.g),M(N.h));if(R(N))return N=W(j,M(N)),new G(M(N.g),N.h);if(30<j.g.length){if(R(j)||R(N))throw Error("slowDivide_ only works with positive integers.");for(var E=A,C=N;0>=C.l(j);)E=ot(E),C=ot(C);var w=pt(E,1),x=pt(C,1);for(C=pt(C,2),E=pt(E,2);!D(C);){var S=x.add(C);0>=S.l(j)&&(w=w.add(E),x=S),C=pt(C,1),E=pt(E,1)}return N=O(j,w.j(N)),new G(w,N)}for(w=b;0<=j.l(N);){for(E=Math.max(1,Math.floor(j.m()/N.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=d(E),S=x.j(N);R(S)||0<S.l(j);)E-=C,x=d(E),S=x.j(N);D(x)&&(x=A),w=w.add(x),j=O(j,S)}return new G(w,j)}n.A=function(j){return W(this,j).h},n.and=function(j){for(var N=Math.max(this.g.length,j.g.length),E=[],C=0;C<N;C++)E[C]=this.i(C)&j.i(C);return new o(E,this.h&j.h)},n.or=function(j){for(var N=Math.max(this.g.length,j.g.length),E=[],C=0;C<N;C++)E[C]=this.i(C)|j.i(C);return new o(E,this.h|j.h)},n.xor=function(j){for(var N=Math.max(this.g.length,j.g.length),E=[],C=0;C<N;C++)E[C]=this.i(C)^j.i(C);return new o(E,this.h^j.h)};function ot(j){for(var N=j.g.length+1,E=[],C=0;C<N;C++)E[C]=j.i(C)<<1|j.i(C-1)>>>31;return new o(E,j.h)}function pt(j,N){var E=N>>5;N%=32;for(var C=j.g.length-E,w=[],x=0;x<C;x++)w[x]=0<N?j.i(x+E)>>>N|j.i(x+E+1)<<32-N:j.i(x+E);return new o(w,j.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,P1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Io=o}).apply(typeof ff<"u"?ff:typeof self<"u"?self:typeof window<"u"?window:{});var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var k1,Ja,C1,ec,Qu,R1,D1,O1;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ql=="object"&&ql];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=e(this);function i(c,y){if(y)t:{var _=r;c=c.split(".");for(var B=0;B<c.length-1;B++){var rt=c[B];if(!(rt in _))break t;_=_[rt]}c=c[c.length-1],B=_[c],y=y(B),y!=B&&y!=null&&t(_,c,{configurable:!0,writable:!0,value:y})}}function s(c,y){c instanceof String&&(c+="");var _=0,B=!1,rt={next:function(){if(!B&&_<c.length){var ht=_++;return{value:y(ht,c[ht]),done:!1}}return B=!0,{done:!0,value:void 0}}};return rt[Symbol.iterator]=function(){return rt},rt}i("Array.prototype.values",function(c){return c||function(){return s(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function d(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function f(c,y,_){return c.call.apply(c.bind,arguments)}function b(c,y,_){if(!c)throw Error();if(2<arguments.length){var B=Array.prototype.slice.call(arguments,2);return function(){var rt=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(rt,B),c.apply(y,rt)}}return function(){return c.apply(y,arguments)}}function A(c,y,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:b,A.apply(null,arguments)}function m(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var B=_.slice();return B.push.apply(B,arguments),c.apply(this,B)}}function D(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(B,rt,ht){for(var Ct=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)Ct[ge-2]=arguments[ge];return y.prototype[rt].apply(B,Ct)}}function R(c){const y=c.length;if(0<y){const _=Array(y);for(let B=0;B<y;B++)_[B]=c[B];return _}return[]}function M(c,y){for(let _=1;_<arguments.length;_++){const B=arguments[_];if(u(B)){const rt=c.length||0,ht=B.length||0;c.length=rt+ht;for(let Ct=0;Ct<ht;Ct++)c[rt+Ct]=B[Ct]}else c.push(B)}}class O{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Y(c){return/^[\s\xa0]*$/.test(c)}function G(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function W(c){return W[" "](c),c}W[" "]=function(){};var ot=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function pt(c,y,_){for(const B in c)y.call(_,c[B],B,c)}function j(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function N(c){const y={};for(const _ in c)y[_]=c[_];return y}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,y){let _,B;for(let rt=1;rt<arguments.length;rt++){B=arguments[rt];for(_ in B)c[_]=B[_];for(let ht=0;ht<E.length;ht++)_=E[ht],Object.prototype.hasOwnProperty.call(B,_)&&(c[_]=B[_])}}function w(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function x(c){a.setTimeout(()=>{throw c},0)}function S(){var c=vt;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Q{constructor(){this.h=this.g=null}add(y,_){const B=ut.get();B.set(y,_),this.h?this.h.next=B:this.g=B,this.h=B}}var ut=new O(()=>new yt,c=>c.reset());class yt{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,at=!1,vt=new Q,kt=()=>{const c=a.Promise.resolve(void 0);mt=()=>{c.then(xt)}};var xt=()=>{for(var c;c=S();){try{c.h.call(c.g)}catch(_){x(_)}var y=ut;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}at=!1};function P(){this.s=this.s,this.C=this.C}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};a.addEventListener("test",_,y),a.removeEventListener("test",_,y)}catch{}return c}();function J(c,y){if(H.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,B=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ot){t:{try{W(y.nodeName);var rt=!0;break t}catch{}rt=!1}rt||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,B?(this.clientX=B.clientX!==void 0?B.clientX:B.pageX,this.clientY=B.clientY!==void 0?B.clientY:B.pageY,this.screenX=B.screenX||0,this.screenY=B.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:nt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&J.aa.h.call(this)}}D(J,H);var nt={2:"touch",3:"pen",4:"mouse"};J.prototype.h=function(){J.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),dt=0;function ft(c,y,_,B,rt){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!B,this.ha=rt,this.key=++dt,this.da=this.fa=!1}function _t(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Lt(c){this.src=c,this.g={},this.h=0}Lt.prototype.add=function(c,y,_,B,rt){var ht=c.toString();c=this.g[ht],c||(c=this.g[ht]=[],this.h++);var Ct=Ot(c,y,B,rt);return-1<Ct?(y=c[Ct],_||(y.fa=!1)):(y=new ft(y,this.src,ht,!!B,rt),y.fa=_,c.push(y)),y};function Ft(c,y){var _=y.type;if(_ in c.g){var B=c.g[_],rt=Array.prototype.indexOf.call(B,y,void 0),ht;(ht=0<=rt)&&Array.prototype.splice.call(B,rt,1),ht&&(_t(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Ot(c,y,_,B){for(var rt=0;rt<c.length;++rt){var ht=c[rt];if(!ht.da&&ht.listener==y&&ht.capture==!!_&&ht.ha==B)return rt}return-1}var Gt="closure_lm_"+(1e6*Math.random()|0),U={};function Dt(c,y,_,B,rt){if(Array.isArray(y)){for(var ht=0;ht<y.length;ht++)Dt(c,y[ht],_,B,rt);return null}return _=Pe(_),c&&c[st]?c.K(y,_,d(B)?!!B.capture:!1,rt):Ae(c,y,_,!1,B,rt)}function Ae(c,y,_,B,rt,ht){if(!y)throw Error("Invalid event type");var Ct=d(rt)?!!rt.capture:!!rt,ge=Qt(c);if(ge||(c[Gt]=ge=new Lt(c)),_=ge.add(y,_,B,Ct,ht),_.proxy)return _;if(B=ie(),_.proxy=B,B.src=c,B.listener=_,c.addEventListener)K||(rt=Ct),rt===void 0&&(rt=!1),c.addEventListener(y.toString(),B,rt);else if(c.attachEvent)c.attachEvent(Mt(y.toString()),B);else if(c.addListener&&c.removeListener)c.addListener(B);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ie(){function c(_){return y.call(c.src,c.listener,_)}const y=ee;return c}function It(c,y,_,B,rt){if(Array.isArray(y))for(var ht=0;ht<y.length;ht++)It(c,y[ht],_,B,rt);else B=d(B)?!!B.capture:!!B,_=Pe(_),c&&c[st]?(c=c.i,y=String(y).toString(),y in c.g&&(ht=c.g[y],_=Ot(ht,_,B,rt),-1<_&&(_t(ht[_]),Array.prototype.splice.call(ht,_,1),ht.length==0&&(delete c.g[y],c.h--)))):c&&(c=Qt(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Ot(y,_,B,rt)),(_=-1<c?y[c]:null)&&Zt(_))}function Zt(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[st])Ft(y.i,c);else{var _=c.type,B=c.proxy;y.removeEventListener?y.removeEventListener(_,B,c.capture):y.detachEvent?y.detachEvent(Mt(_),B):y.addListener&&y.removeListener&&y.removeListener(B),(_=Qt(y))?(Ft(_,c),_.h==0&&(_.src=null,y[Gt]=null)):_t(c)}}}function Mt(c){return c in U?U[c]:U[c]="on"+c}function ee(c,y){if(c.da)c=!0;else{y=new J(y,this);var _=c.listener,B=c.ha||c.src;c.fa&&Zt(c),c=_.call(B,y)}return c}function Qt(c){return c=c[Gt],c instanceof Lt?c:null}var Me="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pe(c){return typeof c=="function"?c:(c[Me]||(c[Me]=function(y){return c.handleEvent(y)}),c[Me])}function Wt(){P.call(this),this.i=new Lt(this),this.M=this,this.F=null}D(Wt,P),Wt.prototype[st]=!0,Wt.prototype.removeEventListener=function(c,y,_,B){It(this,c,y,_,B)};function le(c,y){var _,B=c.F;if(B)for(_=[];B;B=B.F)_.push(B);if(c=c.M,B=y.type||y,typeof y=="string")y=new H(y,c);else if(y instanceof H)y.target=y.target||c;else{var rt=y;y=new H(B,c),C(y,rt)}if(rt=!0,_)for(var ht=_.length-1;0<=ht;ht--){var Ct=y.g=_[ht];rt=Se(Ct,B,!0,y)&&rt}if(Ct=y.g=c,rt=Se(Ct,B,!0,y)&&rt,rt=Se(Ct,B,!1,y)&&rt,_)for(ht=0;ht<_.length;ht++)Ct=y.g=_[ht],rt=Se(Ct,B,!1,y)&&rt}Wt.prototype.N=function(){if(Wt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],B=0;B<_.length;B++)_t(_[B]);delete c.g[y],c.h--}}this.F=null},Wt.prototype.K=function(c,y,_,B){return this.i.add(String(c),y,!1,_,B)},Wt.prototype.L=function(c,y,_,B){return this.i.add(String(c),y,!0,_,B)};function Se(c,y,_,B){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var rt=!0,ht=0;ht<y.length;++ht){var Ct=y[ht];if(Ct&&!Ct.da&&Ct.capture==_){var ge=Ct.listener,pn=Ct.ha||Ct.src;Ct.fa&&Ft(c.i,Ct),rt=ge.call(pn,B)!==!1&&rt}}return rt&&!B.defaultPrevented}function $t(c,y,_){if(typeof c=="function")_&&(c=A(c,_));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:a.setTimeout(c,y||0)}function me(c){c.g=$t(()=>{c.g=null,c.i&&(c.i=!1,me(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class Kt extends P{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:me(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(c){P.call(this),this.h=c,this.g={}}D(en,P);var De=[];function Ee(c){pt(c.g,function(y,_){this.g.hasOwnProperty(_)&&Zt(y)},c),c.g={}}en.prototype.N=function(){en.aa.N.call(this),Ee(this)},en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var we=a.JSON.stringify,on=a.JSON.parse,te=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function ze(){}ze.prototype.h=null;function oe(c){return c.h||(c.h=c.i())}function fe(){}var He={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xe(){H.call(this,"d")}D(xe,H);function ne(){H.call(this,"c")}D(ne,H);var ke={},Fi=null;function kn(){return Fi=Fi||new Wt}ke.La="serverreachability";function ii(c){H.call(this,ke.La,c)}D(ii,H);function ur(c){const y=kn();le(y,new ii(y))}ke.STAT_EVENT="statevent";function se(c,y){H.call(this,ke.STAT_EVENT,c),this.stat=y}D(se,H);function fn(c){const y=kn();le(y,new se(y,c))}ke.Ma="timingevent";function si(c,y){H.call(this,ke.Ma,c),this.size=y}D(si,H);function Xn(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},y)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function yn(c,y,_,B,rt,ht){c.info(function(){if(c.g)if(ht)for(var Ct="",ge=ht.split("&"),pn=0;pn<ge.length;pn++){var Le=ge[pn].split("=");if(1<Le.length){var Sn=Le[0];Le=Le[1];var nn=Sn.split("_");Ct=2<=nn.length&&nn[1]=="type"?Ct+(Sn+"="+Le+"&"):Ct+(Sn+"=redacted&")}}else Ct=null;else Ct=ht;return"XMLHTTP REQ ("+B+") [attempt "+rt+"]: "+y+`
`+_+`
`+Ct})}function jn(c,y,_,B,rt,ht,Ct){c.info(function(){return"XMLHTTP RESP ("+B+") [ attempt "+rt+"]: "+y+`
`+_+`
`+ht+" "+Ct})}function vn(c,y,_,B){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Mi(c,_)+(B?" "+B:"")})}function rs(c,y){c.info(function(){return"TIMEOUT: "+y})}Jn.prototype.info=function(){};function Mi(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var B=_[c];if(!(2>B.length)){var rt=B[1];if(Array.isArray(rt)&&!(1>rt.length)){var ht=rt[0];if(ht!="noop"&&ht!="stop"&&ht!="close")for(var Ct=1;Ct<rt.length;Ct++)rt[Ct]=""}}}}return we(_)}catch{return y}}var hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function dr(){}D(dr,ze),dr.prototype.g=function(){return new XMLHttpRequest},dr.prototype.i=function(){return{}},Sr=new dr;function Cn(c,y,_,B){this.j=c,this.i=y,this.l=_,this.R=B||1,this.U=new en(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bi}function Bi(){this.i=null,this.g="",this.h=!1}var Hr={},wi={};function Vi(c,y,_){c.L=1,c.v=Ns(qn(y)),c.m=_,c.P=!0,is(c,null)}function is(c,y){c.F=Date.now(),ji(c),c.A=qn(c.v);var _=c.A,B=c.R;Array.isArray(B)||(B=[String(B)]),qi(_.i,"t",B),c.C=0,_=c.j.J,c.h=new Bi,c.g=We(c.j,_?y:null,!c.m),0<c.O&&(c.M=new Kt(A(c.Y,c,c.g),c.O)),y=c.U,_=c.g,B=c.ca;var rt="readystatechange";Array.isArray(rt)||(rt&&(De[0]=rt.toString()),rt=De);for(var ht=0;ht<rt.length;ht++){var Ct=Dt(_,rt[ht],B||y.handleEvent,!1,y.h||y);if(!Ct)break;y.g[Ct.key]=Ct}y=c.H?N(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),ur(),yn(c.i,c.u,c.A,c.l,c.R,c.m)}Cn.prototype.ca=function(c){c=c.target;const y=this.M;y&&Nr(c)==3?y.j():this.Y(c)},Cn.prototype.Y=function(c){try{if(c==this.g)t:{const nn=Nr(this.g);var y=this.g.Ba();const In=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||us(this.g)))){this.J||nn!=4||y==7||(y==8||0>=In?ur(3):ur(2)),xs(this);var _=this.g.Z();this.X=_;e:if(ss(this)){var B=us(this.g);c="";var rt=B.length,ht=Nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),Zn(this);var Ct="";break e}this.h.i=new a.TextDecoder}for(y=0;y<rt;y++)this.h.h=!0,c+=this.h.i.decode(B[y],{stream:!(ht&&y==rt-1)});B.length=0,this.h.g+=c,this.C=0,Ct=this.h.g}else Ct=this.g.oa();if(this.o=_==200,jn(this.i,this.u,this.A,this.l,this.R,nn,_),this.o){if(this.T&&!this.K){e:{if(this.g){var ge,pn=this.g;if((ge=pn.g?pn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(ge)){var Le=ge;break e}}Le=null}if(_=Le)vn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ss(this,_);else{this.o=!1,this.s=3,fn(12),Wr(this),Zn(this);break t}}if(this.P){_=!0;let mr;for(;!this.J&&this.C<Ct.length;)if(mr=La(this,Ct),mr==wi){nn==4&&(this.s=4,fn(14),_=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(mr==Hr){this.s=4,fn(15),vn(this.i,this.l,Ct,"[Invalid Chunk]"),_=!1;break}else vn(this.i,this.l,mr,null),Ss(this,mr);if(ss(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||Ct.length!=0||this.h.h||(this.s=1,fn(16),_=!1),this.o=this.o&&_,!_)vn(this.i,this.l,Ct,"[Invalid Chunked Response]"),Wr(this),Zn(this);else if(0<Ct.length&&!this.W){this.W=!0;var Sn=this.j;Sn.g==this&&Sn.ba&&!Sn.M&&(Sn.j.info("Great, no buffering proxy detected. Bytes received: "+Ct.length),gt(Sn),Sn.M=!0,fn(11))}}else vn(this.i,this.l,Ct,null),Ss(this,Ct);nn==4&&Wr(this),this.o&&!this.J&&(nn==4?Vt(this.j,this):(this.o=!1,ji(this)))}else Ho(this.g),_==400&&0<Ct.indexOf("Unknown SID")?(this.s=3,fn(12)):(this.s=0,fn(13)),Wr(this),Zn(this)}}}catch{}finally{}};function ss(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function La(c,y){var _=c.C,B=y.indexOf(`
`,_);return B==-1?wi:(_=Number(y.substring(_,B)),isNaN(_)?Hr:(B+=1,B+_>y.length?wi:(y=y.slice(B,B+_),c.C=B+_,y)))}Cn.prototype.cancel=function(){this.J=!0,Wr(this)};function ji(c){c.S=Date.now()+c.I,ro(c,c.I)}function ro(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Xn(A(c.ba,c),y)}function xs(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Cn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(rs(this.i,this.A),this.L!=2&&(ur(),fn(17)),Wr(this),this.s=2,Zn(this)):ro(this,this.S-c)};function Zn(c){c.j.G==0||c.J||Vt(c.j,c)}function Wr(c){xs(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ee(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Ss(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||Dr(_.h,c))){if(!c.K&&Dr(_.h,c)&&_.G==3){try{var B=_.Da.g.parse(y)}catch{B=null}if(Array.isArray(B)&&B.length==3){var rt=B;if(rt[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Bt(_),hs(_);else break t;et(_),fn(18)}}else _.za=rt[1],0<_.za-_.T&&37500>rt[2]&&_.F&&_.v==0&&!_.C&&(_.C=Xn(A(_.Za,_),6e3));if(1>=ao(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ce(_,11)}else if((c.K||_.g==c)&&Bt(_),!Y(y))for(rt=_.Da.g.parse(y),y=0;y<rt.length;y++){let Le=rt[y];if(_.T=Le[0],Le=Le[1],_.G==2)if(Le[0]=="c"){_.K=Le[1],_.ia=Le[2];const Sn=Le[3];Sn!=null&&(_.la=Sn,_.j.info("VER="+_.la));const nn=Le[4];nn!=null&&(_.Aa=nn,_.j.info("SVER="+_.Aa));const In=Le[5];In!=null&&typeof In=="number"&&0<In&&(B=1.5*In,_.L=B,_.j.info("backChannelRequestTimeoutMs_="+B)),B=_;const mr=c.g;if(mr){const Si=mr.g?mr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var ht=B.h;ht.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(ht.j=ht.l,ht.g=new Set,ht.h&&(Ui(ht,ht.h),ht.h=null))}if(B.D){const Cs=mr.g?mr.g.getResponseHeader("X-HTTP-Session-Id"):null;Cs&&(B.ya=Cs,Ke(B.I,B.D,Cs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),B=_;var Ct=c;if(B.qa=An(B,B.J?B.ia:null,B.W),Ct.K){jo(B.h,Ct);var ge=Ct,pn=B.L;pn&&(ge.I=pn),ge.B&&(xs(ge),ji(ge)),B.g=Ct}else X(B);0<_.i.length&&ui(_)}else Le[0]!="stop"&&Le[0]!="close"||ce(_,7);else _.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?ce(_,7):ks(_):Le[0]!="noop"&&_.l&&_.l.ta(Le),_.v=0)}}ur(4)}catch{}}var io=class{constructor(c,y){this.g=c,this.map=y}};function so(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ao(c){return c.h?1:c.g?c.g.size:0}function Dr(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ui(c,y){c.g?c.g.add(y):c.h=y}function jo(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}so.prototype.cancel=function(){if(this.i=_n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _n(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return R(c.i)}function Uo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(u(c)){for(var y=[],_=c.length,B=0;B<_;B++)y.push(c[B]);return y}y=[],_=0;for(B in c)y[_++]=c[B];return y}function oi(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(u(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const B in c)y[_++]=B;return y}}}function os(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(u(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=oi(c),B=Uo(c),rt=B.length,ht=0;ht<rt;ht++)y.call(void 0,B[ht],_&&_[ht],c)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ir(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var B=c[_].indexOf("="),rt=null;if(0<=B){var ht=c[_].substring(0,B);rt=c[_].substring(B+1)}else ht=c[_];y(ht,rt?decodeURIComponent(rt.replace(/\+/g," ")):"")}}}function Or(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Or){this.h=c.h,xn(this,c.j),this.o=c.o,this.g=c.g,as(this,c.s),this.l=c.l;var y=c.i,_=new Fr;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),$o(this,_),this.m=c.m}else c&&(y=String(c).match(Is))?(this.h=!1,xn(this,y[1]||"",!0),this.o=fr(y[2]||""),this.g=fr(y[3]||"",!0),as(this,y[4]),this.l=fr(y[5]||"",!0),$o(this,y[6]||"",!0),this.m=fr(y[7]||"")):(this.h=!1,this.i=new Fr(null,this.h))}Or.prototype.toString=function(){var c=[],y=this.j;y&&c.push($i(y,ls,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push($i(y,ls,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push($i(_,_.charAt(0)=="/"?Pa:lo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",$i(_,Ca)),c.join("")};function qn(c){return new Or(c)}function xn(c,y,_){c.j=_?fr(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function as(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function $o(c,y,_){y instanceof Fr?(c.i=y,Ra(c.i,c.h)):(_||(y=$i(y,ka)),c.i=new Fr(y,c.h))}function Ke(c,y,_){c.i.set(y,_)}function Ns(c){return Ke(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function fr(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $i(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,Ts),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ts(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ls=/[#\/\?@]/g,lo=/[#\?:]/g,Pa=/[#\?]/g,ka=/[#\?@]/g,Ca=/#/g;function Fr(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Gr(c){c.g||(c.g=new Map,c.h=0,c.i&&Ir(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=Fr.prototype,n.add=function(c,y){Gr(this),this.i=null,c=re(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function _i(c,y){Gr(c),y=re(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function qo(c,y){return Gr(c),y=re(c,y),c.g.has(y)}n.forEach=function(c,y){Gr(this),this.g.forEach(function(_,B){_.forEach(function(rt){c.call(y,rt,B,this)},this)},this)},n.na=function(){Gr(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let B=0;B<y.length;B++){const rt=c[B];for(let ht=0;ht<rt.length;ht++)_.push(y[B])}return _},n.V=function(c){Gr(this);let y=[];if(typeof c=="string")qo(this,c)&&(y=y.concat(this.g.get(re(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},n.set=function(c,y){return Gr(this),this.i=null,c=re(this,c),qo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function qi(c,y,_){_i(c,y),0<_.length&&(c.i=null,c.g.set(re(c,y),R(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var B=y[_];const ht=encodeURIComponent(String(B)),Ct=this.V(B);for(B=0;B<Ct.length;B++){var rt=ht;Ct[B]!==""&&(rt+="="+encodeURIComponent(String(Ct[B]))),c.push(rt)}}return this.i=c.join("&")};function re(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Ra(c,y){y&&!c.j&&(Gr(c),c.i=null,c.g.forEach(function(_,B){var rt=B.toLowerCase();B!=rt&&(_i(this,B),qi(this,rt,_))},c)),c.j=y}function Da(c,y){const _=new Jn;if(a.Image){const B=new Image;B.onload=m(ai,_,"TestLoadImage: loaded",!0,y,B),B.onerror=m(ai,_,"TestLoadImage: error",!1,y,B),B.onabort=m(ai,_,"TestLoadImage: abort",!1,y,B),B.ontimeout=m(ai,_,"TestLoadImage: timeout",!1,y,B),a.setTimeout(function(){B.ontimeout&&B.ontimeout()},1e4),B.src=c}else y(!1)}function Oa(c,y){const _=new Jn,B=new AbortController,rt=setTimeout(()=>{B.abort(),ai(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:B.signal}).then(ht=>{clearTimeout(rt),ht.ok?ai(_,"TestPingServer: ok",!0,y):ai(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(rt),ai(_,"TestPingServer: error",!1,y)})}function ai(c,y,_,B,rt){try{rt&&(rt.onload=null,rt.onerror=null,rt.onabort=null,rt.ontimeout=null),B(_)}catch{}}function Fa(){this.g=new te}function Ai(c,y,_){const B=_||"";try{os(c,function(rt,ht){let Ct=rt;d(rt)&&(Ct=we(rt)),y.push(B+ht+"="+encodeURIComponent(Ct))})}catch(rt){throw y.push(B+"type="+encodeURIComponent("_badmap")),rt}}function Mr(c){this.l=c.Ub||null,this.j=c.eb||!1}D(Mr,ze),Mr.prototype.g=function(){return new Ls(this.l,this.j)},Mr.prototype.i=function(c){return function(){return c}}({});function Ls(c,y){Wt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ls,Wt),n=Ls.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,Ei(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||a).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function zo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?li(this):Ei(this),this.readyState==3&&zo(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,li(this))},n.Qa=function(c){this.g&&(this.response=c,li(this))},n.ga=function(){this.g&&li(this)};function li(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ei(c)}n.setRequestHeader=function(c,y){this.u.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function Ei(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Kr(c){let y="";return pt(c,function(_,B){y+=B,y+=":",y+=_,y+=`\r
`}),y}function co(c,y,_){t:{for(B in _){var B=!1;break t}B=!0}B||(_=Kr(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Ke(c,y,_))}function Qe(c){Wt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Qe,Wt);var Ma=/^https?$/i,uo=["POST","PUT"];n=Qe.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,y,_,B){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?oe(this.o):oe(Sr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(ht){xi(this,ht);return}if(c=_||"",_=new Map(this.headers),B)if(Object.getPrototypeOf(B)===Object.prototype)for(var rt in B)_.set(rt,B[rt]);else if(typeof B.keys=="function"&&typeof B.get=="function")for(const ht of B.keys())_.set(ht,B.get(ht));else throw Error("Unknown input type for opt_headers: "+String(B));B=Array.from(_.keys()).find(ht=>ht.toLowerCase()=="content-type"),rt=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(uo,y,void 0))||B||rt||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ht,Ct]of _)this.g.setRequestHeader(ht,Ct);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cs(this),this.u=!0,this.g.send(c),this.u=!1}catch(ht){xi(this,ht)}};function xi(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Ps(c),Hi(c)}function Ps(c){c.A||(c.A=!0,le(c,"complete"),le(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,le(this,"complete"),le(this,"abort"),Hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zi(this):this.bb())},n.bb=function(){zi(this)};function zi(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Nr(c)!=4||c.Z()!=2)){if(c.u&&Nr(c)==4)$t(c.Ea,0,c);else if(le(c,"readystatechange"),Nr(c)==4){c.h=!1;try{const Ct=c.Z();t:switch(Ct){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var _;if(!(_=y)){var B;if(B=Ct===0){var rt=String(c.D).match(Is)[1]||null;!rt&&a.self&&a.self.location&&(rt=a.self.location.protocol.slice(0,-1)),B=!Ma.test(rt?rt.toLowerCase():"")}_=B}if(_)le(c,"complete"),le(c,"success");else{c.m=6;try{var ht=2<Nr(c)?c.g.statusText:""}catch{ht=""}c.l=ht+" ["+c.Z()+"]",Ps(c)}}finally{Hi(c)}}}}function Hi(c,y){if(c.g){cs(c);const _=c.g,B=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||le(c,"ready");try{_.onreadystatechange=B}catch{}}}function cs(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Nr(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Nr(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),on(y)}};function us(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ho(c){const y={};c=(c.g&&2<=Nr(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let B=0;B<c.length;B++){if(Y(c[B]))continue;var _=w(c[B]);const rt=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const ht=y[rt]||[];y[rt]=ht,ht.push(_)}j(y,function(B){return B.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tr(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function ci(c){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tr("baseRetryDelayMs",5e3,c),this.cb=Tr("retryDelaySeedMs",1e4,c),this.Wa=Tr("forwardChannelMaxRetries",2,c),this.wa=Tr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new so(c&&c.concurrentRequestLimit),this.Da=new Fa,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ci.prototype,n.la=8,n.G=1,n.connect=function(c,y,_,B){fn(0),this.W=c,this.H=y||{},_&&B!==void 0&&(this.H.OSID=_,this.H.OAID=B),this.F=this.X,this.I=An(this,null,this.W),ui(this)};function ks(c){if(ho(c),c.G==3){var y=c.U++,_=qn(c.I);if(Ke(_,"SID",c.K),Ke(_,"RID",y),Ke(_,"TYPE","terminate"),I(c,_),y=new Cn(c,c.j,y),y.L=2,y.v=Ns(qn(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=y.v,_=!0),_||(y.g=We(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ji(y)}Ce(c)}function hs(c){c.g&&(gt(c),c.g.cancel(),c.g=null)}function ho(c){hs(c),c.u&&(a.clearTimeout(c.u),c.u=null),Bt(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function ui(c){if(!oo(c.h)&&!c.s){c.s=!0;var y=c.Ga;mt||kt(),at||(mt(),at=!0),vt.add(y,c),c.B=0}}function Wo(c,y){return ao(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Xn(A(c.Ga,c,y),ue(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const rt=new Cn(this,this.j,c);let ht=this.o;if(this.S&&(ht?(ht=N(ht),C(ht,this.S)):ht=this.S),this.m!==null||this.O||(rt.H=ht,ht=null),this.P)t:{for(var y=0,_=0;_<this.i.length;_++){e:{var B=this.i[_];if("__data__"in B.map&&(B=B.map.__data__,typeof B=="string")){B=B.length;break e}B=void 0}if(B===void 0)break;if(y+=B,4096<y){y=_;break t}if(y===4096||_===this.i.length-1){y=_+1;break t}}y=1e3}else y=1e3;y=$(this,rt,y),_=qn(this.I),Ke(_,"RID",c),Ke(_,"CVER",22),this.D&&Ke(_,"X-HTTP-Session-Id",this.D),I(this,_),ht&&(this.O?y="headers="+encodeURIComponent(String(Kr(ht)))+"&"+y:this.m&&co(_,this.m,ht)),Ui(this.h,rt),this.Ua&&Ke(_,"TYPE","init"),this.P?(Ke(_,"$req",y),Ke(_,"SID","null"),rt.T=!0,Vi(rt,_,null)):Vi(rt,_,y),this.G=2}}else this.G==3&&(c?p(this,c):this.i.length==0||oo(this.h)||p(this))};function p(c,y){var _;y?_=y.l:_=c.U++;const B=qn(c.I);Ke(B,"SID",c.K),Ke(B,"RID",_),Ke(B,"AID",c.T),I(c,B),c.m&&c.o&&co(B,c.m,c.o),_=new Cn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=$(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ui(c.h,_),Vi(_,B,y)}function I(c,y){c.H&&pt(c.H,function(_,B){Ke(y,B,_)}),c.l&&os({},function(_,B){Ke(y,B,_)})}function $(c,y,_){_=Math.min(c.i.length,_);var B=c.l?A(c.l.Na,c.l,c):null;t:{var rt=c.i;let ht=-1;for(;;){const Ct=["count="+_];ht==-1?0<_?(ht=rt[0].g,Ct.push("ofs="+ht)):ht=0:Ct.push("ofs="+ht);let ge=!0;for(let pn=0;pn<_;pn++){let Le=rt[pn].g;const Sn=rt[pn].map;if(Le-=ht,0>Le)ht=Math.max(0,rt[pn].g-100),ge=!1;else try{Ai(Sn,Ct,"req"+Le+"_")}catch{B&&B(Sn)}}if(ge){B=Ct.join("&");break t}}}return c=c.i.splice(0,_),y.D=c,B}function X(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;mt||kt(),at||(mt(),at=!0),vt.add(y,c),c.v=0}}function et(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Xn(A(c.Fa,c),ue(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Et(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Xn(A(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,fn(10),hs(this),Et(this))};function gt(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Et(c){c.g=new Cn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=qn(c.qa);Ke(y,"RID","rpc"),Ke(y,"SID",c.K),Ke(y,"AID",c.T),Ke(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ke(y,"TO",c.ja),Ke(y,"TYPE","xmlhttp"),I(c,y),c.m&&c.o&&co(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Ns(qn(y)),_.m=null,_.P=!0,is(_,c)}n.Za=function(){this.C!=null&&(this.C=null,hs(this),et(this),fn(19))};function Bt(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Vt(c,y){var _=null;if(c.g==y){Bt(c),gt(c),c.g=null;var B=2}else if(Dr(c.h,y))_=y.D,jo(c.h,y),B=1;else return;if(c.G!=0){if(y.o)if(B==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var rt=c.B;B=kn(),le(B,new si(B,_)),ui(c)}else X(c);else if(rt=y.s,rt==3||rt==0&&0<y.X||!(B==1&&Wo(c,y)||B==2&&et(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),rt){case 1:ce(c,5);break;case 4:ce(c,10);break;case 3:ce(c,6);break;default:ce(c,2)}}}function ue(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function ce(c,y){if(c.j.info("Error code "+y),y==2){var _=A(c.fb,c),B=c.Xa;const rt=!B;B=new Or(B||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xn(B,"https"),Ns(B),rt?Da(B.toString(),_):Oa(B.toString(),_)}else fn(2);c.G=0,c.l&&c.l.sa(y),Ce(c),ho(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),fn(2)):(this.j.info("Failed to ping google.com"),fn(1))};function Ce(c){if(c.G=0,c.ka=[],c.l){const y=_n(c.h);(y.length!=0||c.i.length!=0)&&(M(c.ka,y),M(c.ka,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.ra()}}function An(c,y,_){var B=_ instanceof Or?qn(_):new Or(_);if(B.g!="")y&&(B.g=y+"."+B.g),as(B,B.s);else{var rt=a.location;B=rt.protocol,y=y?y+"."+rt.hostname:rt.hostname,rt=+rt.port;var ht=new Or(null);B&&xn(ht,B),y&&(ht.g=y),rt&&as(ht,rt),_&&(ht.l=_),B=ht}return _=c.D,y=c.ya,_&&y&&Ke(B,_,y),Ke(B,"VER",c.la),I(c,B),B}function We(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Qe(new Mr({eb:_})):new Qe(c.pa),y.Ha(c.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qe(){}n=qe.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ge(){}Ge.prototype.g=function(c,y){return new Re(c,y)};function Re(c,y){Wt.call(this),this.g=new ci(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!Y(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!Y(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new pr(this)}D(Re,Wt),Re.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Re.prototype.close=function(){ks(this.g)},Re.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=we(c),c=_);y.i.push(new io(y.Ya++,c)),y.G==3&&ui(y)},Re.prototype.N=function(){this.g.l=null,delete this.j,ks(this.g),delete this.g,Re.aa.N.call(this)};function an(c){xe.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const _ in y){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}D(an,xe);function zn(){ne.call(this),this.status=1}D(zn,ne);function pr(c){this.g=c}D(pr,qe),pr.prototype.ua=function(){le(this.g,"a")},pr.prototype.ta=function(c){le(this.g,new an(c))},pr.prototype.sa=function(c){le(this.g,new zn)},pr.prototype.ra=function(){le(this.g,"b")},Ge.prototype.createWebChannel=Ge.prototype.g,Re.prototype.send=Re.prototype.o,Re.prototype.open=Re.prototype.m,Re.prototype.close=Re.prototype.close,O1=function(){return new Ge},D1=function(){return kn()},R1=ke,Qu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,ec=hr,zr.COMPLETE="complete",C1=zr,fe.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",Wt.prototype.listen=Wt.prototype.K,Ja=fe,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,k1=Qe}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});const pf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Er.UNAUTHENTICATED=new Er(null),Er.GOOGLE_CREDENTIALS=new Er("google-credentials-uid"),Er.FIRST_PARTY=new Er("first-party-uid"),Er.MOCK_USER=new Er("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new x1("@firebase/firestore");function Qa(){return To.logLevel}function qt(n,...t){if(To.logLevel<=Ue.DEBUG){const e=t.map(Ph);To.debug(`Firestore (${Sa}): ${n}`,...e)}}function As(n,...t){if(To.logLevel<=Ue.ERROR){const e=t.map(Ph);To.error(`Firestore (${Sa}): ${n}`,...e)}}function ya(n,...t){if(To.logLevel<=Ue.WARN){const e=t.map(Ph);To.warn(`Firestore (${Sa}): ${n}`,...e)}}function Ph(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n="Unexpected state"){const t=`FIRESTORE (${Sa}) INTERNAL ASSERTION FAILED: `+n;throw As(t),new Error(t)}function tn(n,t){n||pe()}function be(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Jt extends xa{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class M5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Er.UNAUTHENTICATED))}shutdown(){}}class B5{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class V5{constructor(t){this.t=t,this.currentUser=Er.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){tn(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new ws;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ws,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{qt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(qt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ws)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(qt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tn(typeof r.accessToken=="string"),new F1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return tn(t===null||typeof t=="string"),new Er(t)}}class j5{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Er.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class U5{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new j5(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Er.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $5{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q5{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){tn(this.o===void 0);const r=s=>{s.error!=null&&qt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,qt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{qt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):qt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tn(typeof e.token=="string"),this.R=e.token,new $5(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z5(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=z5(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function $e(n,t){return n<t?-1:n>t?1:0}function va(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Jt(Nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Jt(Nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Jt(Nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Jt(Nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Yn.fromMillis(Date.now())}static fromDate(t){return Yn.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Yn(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$e(this.nanoseconds,t.nanoseconds):$e(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ve(t)}static min(){return new ve(new Yn(0,0))}static max(){return new ve(new Yn(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,e,r){e===void 0?e=0:e>t.length&&pe(),r===void 0?r=t.length-e:r>t.length-e&&pe(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ul.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ul?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class wn extends ul{construct(t,e,r){return new wn(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new Jt(Nt.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new wn(e)}static emptyPath(){return new wn([])}}const H5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ar extends ul{construct(t,e,r){return new ar(t,e,r)}static isValidIdentifier(t){return H5.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ar.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ar(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Jt(Nt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new Jt(Nt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Jt(Nt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Jt(Nt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ar(e)}static emptyPath(){return new ar([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.path=t}static fromPath(t){return new ae(wn.fromString(t))}static fromName(t){return new ae(wn.fromString(t).popFirst(5))}static empty(){return new ae(wn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&wn.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return wn.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ae(new wn(t.slice()))}}function W5(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new Yn(e+1,0):new Yn(e,r));return new Js(i,ae.empty(),t)}function G5(n){return new Js(n.readTime,n.key,-1)}class Js{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Js(ve.min(),ae.empty(),-1)}static max(){return new Js(ve.max(),ae.empty(),-1)}}function K5(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=ae.comparator(n.documentKey,t.documentKey),e!==0?e:$e(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(n){if(n.code!==Nt.FAILED_PRECONDITION||n.message!==Q5)throw n;qt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Tt((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Tt?e:Tt.resolve(e)}catch(e){return Tt.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Tt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Tt.reject(e)}static resolve(t){return new Tt((e,r)=>{e(t)})}static reject(t){return new Tt((e,r)=>{r(t)})}static waitFor(t){return new Tt((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=Tt.resolve(!1);for(const r of t)e=e.next(i=>i?Tt.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new Tt((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const d=u;e(t[d]).next(f=>{o[d]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(t,e){return new Tt((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function X5(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function bl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}kh.oe=-1;function Pc(n){return n==null}function mc(n){return n===0&&1/n==-1/0}function J5(n){return typeof n=="number"&&Number.isInteger(n)&&!mc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Do(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function B1(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e){this.comparator=t,this.root=e||or.EMPTY}insert(t,e){return new En(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,or.BLACK,null,null))}remove(t){return new En(this.comparator,this.root.remove(t,this.comparator).copy(null,null,or.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zl(this.root,t,this.comparator,!1)}getReverseIterator(){return new zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zl(this.root,t,this.comparator,!0)}}class zl{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class or{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??or.RED,this.left=i??or.EMPTY,this.right=s??or.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new or(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return or.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return or.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,or.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const t=this.left.check();if(t!==this.right.check())throw pe();return t+(this.isRed()?0:1)}}or.EMPTY=null,or.RED=!0,or.BLACK=!1;or.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(t,e,r,i,s){return this}insert(t,e,r){return new or(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.comparator=t,this.data=new En(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new gf(this.data.getIterator())}getIteratorFrom(t){return new gf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof lr)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lr(this.comparator);return e.data=t,e}}class gf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this.fields=t,t.sort(ar.comparator)}static empty(){return new ni([])}unionWith(t){let e=new lr(ar.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ni(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return va(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new V1("Invalid base64 string: "+s):s}}(t);return new cr(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new cr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $e(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}cr.EMPTY_BYTE_STRING=new cr("");const Z5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zs(n){if(tn(!!n),typeof n=="string"){let t=0;const e=Z5.exec(n);if(tn(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Fn(n.seconds),nanos:Fn(n.nanos)}}function Fn(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lo(n){return typeof n=="string"?cr.fromBase64String(n):cr.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Rh(n){const t=n.mapValue.fields.__previous_value__;return Ch(t)?Rh(t):t}function hl(n){const t=Zs(n.mapValue.fields.__local_write_time__.timestampValue);return new Yn(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t,e,r,i,s,o,a,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class dl{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof dl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={mapValue:{}};function Po(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ch(n)?4:ny(n)?9007199254740991:ey(n)?10:11:pe()}function ts(n,t){if(n===t)return!0;const e=Po(n);if(e!==Po(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return hl(n).isEqual(hl(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zs(i.timestampValue),a=Zs(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Lo(i.bytesValue).isEqual(Lo(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return Fn(i.geoPointValue.latitude)===Fn(s.geoPointValue.latitude)&&Fn(i.geoPointValue.longitude)===Fn(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fn(i.integerValue)===Fn(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fn(i.doubleValue),a=Fn(s.doubleValue);return o===a?mc(o)===mc(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return va(n.arrayValue.values||[],t.arrayValue.values||[],ts);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(mf(o)!==mf(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ts(o[u],a[u])))return!1;return!0}(n,t);default:return pe()}}function fl(n,t){return(n.values||[]).find(e=>ts(e,t))!==void 0}function ba(n,t){if(n===t)return 0;const e=Po(n),r=Po(t);if(e!==r)return $e(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $e(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Fn(s.integerValue||s.doubleValue),u=Fn(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return yf(n.timestampValue,t.timestampValue);case 4:return yf(hl(n),hl(t));case 5:return $e(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Lo(s),u=Lo(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let d=0;d<a.length&&d<u.length;d++){const f=$e(a[d],u[d]);if(f!==0)return f}return $e(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=$e(Fn(s.latitude),Fn(o.latitude));return a!==0?a:$e(Fn(s.longitude),Fn(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return vf(n.arrayValue,t.arrayValue);case 10:return function(s,o){var a,u,d,f;const b=s.fields||{},A=o.fields||{},m=(a=b.value)===null||a===void 0?void 0:a.arrayValue,D=(u=A.value)===null||u===void 0?void 0:u.arrayValue,R=$e(((d=m==null?void 0:m.values)===null||d===void 0?void 0:d.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:vf(m,D)}(n.mapValue,t.mapValue);case 11:return function(s,o){if(s===Hl.mapValue&&o===Hl.mapValue)return 0;if(s===Hl.mapValue)return 1;if(o===Hl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let b=0;b<u.length&&b<f.length;++b){const A=$e(u[b],f[b]);if(A!==0)return A;const m=ba(a[u[b]],d[f[b]]);if(m!==0)return m}return $e(u.length,f.length)}(n.mapValue,t.mapValue);default:throw pe()}}function yf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $e(n,t);const e=Zs(n),r=Zs(t),i=$e(e.seconds,r.seconds);return i!==0?i:$e(e.nanos,r.nanos)}function vf(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=ba(e[i],r[i]);if(s)return s}return $e(e.length,r.length)}function wa(n){return Yu(n)}function Yu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Zs(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Lo(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return ae.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Yu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Yu(e.fields[o])}`;return i+"}"}(n.mapValue):pe()}function Xu(n){return!!n&&"integerValue"in n}function Dh(n){return!!n&&"arrayValue"in n}function bf(n){return!!n&&"nullValue"in n}function wf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nc(n){return!!n&&"mapValue"in n}function ey(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function nl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Do(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=nl(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nl(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ny(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.value=t}static empty(){return new Ur({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!nc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nl(e)}setAll(t){let e=ar.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=nl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());nc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ts(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Do(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ur(nl(this.value))}}function j1(n){const t=[];return Do(n.fields,(e,r)=>{const i=new ar([e]);if(nc(r)){const s=j1(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ni(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new xr(t,0,ve.min(),ve.min(),ve.min(),Ur.empty(),0)}static newFoundDocument(t,e,r,i){return new xr(t,1,e,ve.min(),r,i,0)}static newNoDocument(t,e){return new xr(t,2,e,ve.min(),ve.min(),Ur.empty(),0)}static newUnknownDocument(t,e){return new xr(t,3,e,ve.min(),ve.min(),Ur.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ur.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ur.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,e){this.position=t,this.inclusive=e}}function _f(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),e.key):r=ba(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Af(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ts(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e="asc"){this.field=t,this.dir=e}}function ry(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{}class Qn extends U1{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new sy(t,e,r):e==="array-contains"?new ly(t,r):e==="in"?new cy(t,r):e==="not-in"?new uy(t,r):e==="array-contains-any"?new hy(t,r):new Qn(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new oy(t,r):new ay(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ba(e,this.value)):e!==null&&Po(this.value)===Po(e)&&this.matchesComparison(ba(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class es extends U1{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new es(t,e)}matches(t){return $1(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $1(n){return n.op==="and"}function q1(n){return iy(n)&&$1(n)}function iy(n){for(const t of n.filters)if(t instanceof es)return!1;return!0}function Ju(n){if(n instanceof Qn)return n.field.canonicalString()+n.op.toString()+wa(n.value);if(q1(n))return n.filters.map(t=>Ju(t)).join(",");{const t=n.filters.map(e=>Ju(e)).join(",");return`${n.op}(${t})`}}function z1(n,t){return n instanceof Qn?function(r,i){return i instanceof Qn&&r.op===i.op&&r.field.isEqual(i.field)&&ts(r.value,i.value)}(n,t):n instanceof es?function(r,i){return i instanceof es&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&z1(o,i.filters[a]),!0):!1}(n,t):void pe()}function H1(n){return n instanceof Qn?function(e){return`${e.field.canonicalString()} ${e.op} ${wa(e.value)}`}(n):n instanceof es?function(e){return e.op.toString()+" {"+e.getFilters().map(H1).join(" ,")+"}"}(n):"Filter"}class sy extends Qn{constructor(t,e,r){super(t,e,r),this.key=ae.fromName(r.referenceValue)}matches(t){const e=ae.comparator(t.key,this.key);return this.matchesComparison(e)}}class oy extends Qn{constructor(t,e){super(t,"in",e),this.keys=W1("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ay extends Qn{constructor(t,e){super(t,"not-in",e),this.keys=W1("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function W1(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>ae.fromName(r.referenceValue))}class ly extends Qn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Dh(e)&&fl(e.arrayValue,this.value)}}class cy extends Qn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&fl(this.value.arrayValue,e)}}class uy extends Qn{constructor(t,e){super(t,"not-in",e)}matches(t){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!fl(this.value.arrayValue,e)}}class hy extends Qn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Dh(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ef(n,t=null,e=[],r=[],i=null,s=null,o=null){return new dy(n,t,e,r,i,s,o)}function Oh(n){const t=be(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ju(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>wa(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>wa(r)).join(",")),t.ue=e}return t.ue}function Fh(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ry(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!z1(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Af(n.startAt,t.startAt)&&Af(n.endAt,t.endAt)}function Zu(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fy(n,t,e,r,i,s,o,a){return new kc(n,t,e,r,i,s,o,a)}function Mh(n){return new kc(n)}function xf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function py(n){return n.collectionGroup!==null}function rl(n){const t=be(n);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lr(ar.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new yc(s,r))}),e.has(ar.keyField().canonicalString())||t.ce.push(new yc(ar.keyField(),r))}return t.ce}function Ji(n){const t=be(n);return t.le||(t.le=my(t,rl(n))),t.le}function my(n,t){if(n.limitType==="F")return Ef(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yc(i.field,s)});const e=n.endAt?new gc(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gc(n.startAt.position,n.startAt.inclusive):null;return Ef(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function th(n,t,e){return new kc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Cc(n,t){return Fh(Ji(n),Ji(t))&&n.limitType===t.limitType}function G1(n){return`${Oh(Ji(n))}|lt:${n.limitType}`}function ia(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>H1(i)).join(", ")}]`),Pc(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>wa(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>wa(i)).join(",")),`Target(${r})`}(Ji(n))}; limitType=${n.limitType})`}function Rc(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of rl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const d=_f(o,a,u);return o.inclusive?d<=0:d<0}(r.startAt,rl(r),i)||r.endAt&&!function(o,a,u){const d=_f(o,a,u);return o.inclusive?d>=0:d>0}(r.endAt,rl(r),i))}(n,t)}function gy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function K1(n){return(t,e)=>{let r=!1;for(const i of rl(n)){const s=yy(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yy(n,t,e){const r=n.field.isKeyField()?ae.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),d=a.data.field(s);return u!==null&&d!==null?ba(u,d):pe()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Do(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return B1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new En(ae.comparator);function Es(){return vy}const Q1=new En(ae.comparator);function Za(...n){let t=Q1;for(const e of n)t=t.insert(e.key,e);return t}function Y1(n){let t=Q1;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function So(){return il()}function X1(){return il()}function il(){return new Ia(n=>n.toString(),(n,t)=>n.isEqual(t))}const by=new En(ae.comparator),wy=new lr(ae.comparator);function Oe(...n){let t=wy;for(const e of n)t=t.add(e);return t}const _y=new lr($e);function Ay(){return _y}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(t)?"-0":t}}function J1(n){return{integerValue:""+n}}function Ey(n,t){return J5(t)?J1(t):Bh(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this._=void 0}}function xy(n,t,e){return n instanceof vc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ch(s)&&(s=Rh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof pl?tm(n,t):n instanceof ml?em(n,t):function(i,s){const o=Z1(i,s),a=Sf(o)+Sf(i.Pe);return Xu(o)&&Xu(i.Pe)?J1(a):Bh(i.serializer,a)}(n,t)}function Sy(n,t,e){return n instanceof pl?tm(n,t):n instanceof ml?em(n,t):e}function Z1(n,t){return n instanceof bc?function(r){return Xu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class vc extends Dc{}class pl extends Dc{constructor(t){super(),this.elements=t}}function tm(n,t){const e=nm(t);for(const r of n.elements)e.some(i=>ts(i,r))||e.push(r);return{arrayValue:{values:e}}}class ml extends Dc{constructor(t){super(),this.elements=t}}function em(n,t){let e=nm(t);for(const r of n.elements)e=e.filter(i=>!ts(i,r));return{arrayValue:{values:e}}}class bc extends Dc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Sf(n){return Fn(n.integerValue||n.doubleValue)}function nm(n){return Dh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Iy(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof pl&&i instanceof pl||r instanceof ml&&i instanceof ml?va(r.elements,i.elements,ts):r instanceof bc&&i instanceof bc?ts(r.Pe,i.Pe):r instanceof vc&&i instanceof vc}(n.transform,t.transform)}class Ny{constructor(t,e){this.version=t,this.transformResults=e}}class vi{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new vi}static exists(t){return new vi(void 0,t)}static updateTime(t){return new vi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rc(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Oc{}function rm(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vh(n.key,vi.none()):new wl(n.key,n.data,vi.none());{const e=n.data,r=Ur.empty();let i=new lr(ar.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new no(n.key,r,new ni(i.toArray()),vi.none())}}function Ty(n,t,e){n instanceof wl?function(i,s,o){const a=i.value.clone(),u=Nf(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof no?function(i,s,o){if(!rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Nf(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(im(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function sl(n,t,e,r){return n instanceof wl?function(s,o,a,u){if(!rc(s.precondition,o))return a;const d=s.value.clone(),f=Tf(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof no?function(s,o,a,u){if(!rc(s.precondition,o))return a;const d=Tf(s.fieldTransforms,u,o),f=o.data;return f.setAll(im(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(b=>b.field))}(n,t,e,r):function(s,o,a){return rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Ly(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Z1(r.transform,i||null);s!=null&&(e===null&&(e=Ur.empty()),e.set(r.field,s))}return e||null}function If(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&va(r,i,(s,o)=>Iy(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wl extends Oc{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class no extends Oc{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function im(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Nf(n,t,e){const r=new Map;tn(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Sy(o,a,e[i]))}return r}function Tf(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,xy(s,o,t))}return r}class Vh extends Oc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Py extends Oc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Ty(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=sl(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=sl(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=X1();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=rm(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Oe())}isEqual(t){return this.batchId===t.batchId&&va(this.mutations,t.mutations,(e,r)=>If(e,r))&&va(this.baseMutations,t.baseMutations,(e,r)=>If(e,r))}}class jh{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){tn(t.mutations.length===r.length);let i=function(){return by}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jh(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n,Ve;function Dy(n){switch(n){default:return pe();case Nt.CANCELLED:case Nt.UNKNOWN:case Nt.DEADLINE_EXCEEDED:case Nt.RESOURCE_EXHAUSTED:case Nt.INTERNAL:case Nt.UNAVAILABLE:case Nt.UNAUTHENTICATED:return!1;case Nt.INVALID_ARGUMENT:case Nt.NOT_FOUND:case Nt.ALREADY_EXISTS:case Nt.PERMISSION_DENIED:case Nt.FAILED_PRECONDITION:case Nt.ABORTED:case Nt.OUT_OF_RANGE:case Nt.UNIMPLEMENTED:case Nt.DATA_LOSS:return!0}}function sm(n){if(n===void 0)return As("GRPC error has no .code"),Nt.UNKNOWN;switch(n){case $n.OK:return Nt.OK;case $n.CANCELLED:return Nt.CANCELLED;case $n.UNKNOWN:return Nt.UNKNOWN;case $n.DEADLINE_EXCEEDED:return Nt.DEADLINE_EXCEEDED;case $n.RESOURCE_EXHAUSTED:return Nt.RESOURCE_EXHAUSTED;case $n.INTERNAL:return Nt.INTERNAL;case $n.UNAVAILABLE:return Nt.UNAVAILABLE;case $n.UNAUTHENTICATED:return Nt.UNAUTHENTICATED;case $n.INVALID_ARGUMENT:return Nt.INVALID_ARGUMENT;case $n.NOT_FOUND:return Nt.NOT_FOUND;case $n.ALREADY_EXISTS:return Nt.ALREADY_EXISTS;case $n.PERMISSION_DENIED:return Nt.PERMISSION_DENIED;case $n.FAILED_PRECONDITION:return Nt.FAILED_PRECONDITION;case $n.ABORTED:return Nt.ABORTED;case $n.OUT_OF_RANGE:return Nt.OUT_OF_RANGE;case $n.UNIMPLEMENTED:return Nt.UNIMPLEMENTED;case $n.DATA_LOSS:return Nt.DATA_LOSS;default:return pe()}}(Ve=$n||($n={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=new Io([4294967295,4294967295],0);function Lf(n){const t=Oy().encode(n),e=new P1;return e.update(t),new Uint8Array(e.digest())}function Pf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Io([e,r],0),new Io([i,s],0)]}class Uh{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new tl(`Invalid padding: ${e}`);if(r<0)throw new tl(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tl(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new tl(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Io.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Io.fromNumber(r)));return i.compare(Fy)===1&&(i=new Io([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Lf(t),[r,i]=Pf(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Uh(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Lf(t),[r,i]=Pf(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,_l.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Fc(ve.min(),i,new En($e),Es(),Oe())}}class _l{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new _l(r,e,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class om{constructor(t,e){this.targetId=t,this.me=e}}class am{constructor(t,e,r=cr.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class kf{constructor(){this.fe=0,this.ge=Rf(),this.pe=cr.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Oe(),e=Oe(),r=Oe();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:pe()}}),new _l(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Rf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tn(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class My{constructor(t){this.Le=t,this.Be=new Map,this.ke=Es(),this.qe=Cf(),this.Qe=new En($e)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:pe()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const s=i.target;if(Zu(s))if(r===0){const o=new ae(s.path);this.Ue(e,o,xr.newNoDocument(o,ve.min()))}else tn(r===1);else{const o=this.Ye(e);if(o!==r){const a=this.Ze(t),u=a?this.Xe(a,t,o):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Lo(r).toUint8Array()}catch(u){if(u instanceof V1)return ya("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Uh(o,i,s)}catch(u){return ya(u instanceof tl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Zu(a.target)){const u=new ae(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,xr.newNoDocument(u,t))}s.be&&(e.set(o,s.ve()),s.Ce())}});let r=Oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const i=new Fc(t,e,this.Qe,this.ke,r);return this.ke=Es(),this.qe=Cf(),this.Qe=new En($e),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new kf,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lr($e),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||qt("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new kf),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Cf(){return new En(ae.comparator)}function Rf(){return new En(ae.comparator)}const By={asc:"ASCENDING",desc:"DESCENDING"},Vy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jy={and:"AND",or:"OR"};class Uy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function eh(n,t){return n.useProto3Json||Pc(t)?t:{value:t}}function wc(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lm(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $y(n,t){return wc(n,t.toTimestamp())}function Zi(n){return tn(!!n),ve.fromTimestamp(function(e){const r=Zs(e);return new Yn(r.seconds,r.nanos)}(n))}function $h(n,t){return nh(n,t).canonicalString()}function nh(n,t){const e=function(i){return new wn(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function cm(n){const t=wn.fromString(n);return tn(pm(t)),t}function rh(n,t){return $h(n.databaseId,t.path)}function gu(n,t){const e=cm(t);if(e.get(1)!==n.databaseId.projectId)throw new Jt(Nt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new Jt(Nt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new ae(hm(e))}function um(n,t){return $h(n.databaseId,t)}function qy(n){const t=cm(n);return t.length===4?wn.emptyPath():hm(t)}function ih(n){return new wn(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hm(n){return tn(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Df(n,t,e){return{name:rh(n,t),fields:e.value.mapValue.fields}}function zy(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:pe()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(tn(f===void 0||typeof f=="string"),cr.fromBase64String(f||"")):(tn(f===void 0||f instanceof Buffer||f instanceof Uint8Array),cr.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(d){const f=d.code===void 0?Nt.UNKNOWN:sm(d.code);return new Jt(f,d.message||"")}(o);e=new am(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=gu(n,r.document.name),s=Zi(r.document.updateTime),o=r.document.createTime?Zi(r.document.createTime):ve.min(),a=new Ur({mapValue:{fields:r.document.fields}}),u=xr.newFoundDocument(i,s,o,a),d=r.targetIds||[],f=r.removedTargetIds||[];e=new ic(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=gu(n,r.document),s=r.readTime?Zi(r.readTime):ve.min(),o=xr.newNoDocument(i,s),a=r.removedTargetIds||[];e=new ic([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=gu(n,r.document),s=r.removedTargetIds||[];e=new ic([],s,i,null)}else{if(!("filter"in t))return pe();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ry(i,s),a=r.targetId;e=new om(a,o)}}return e}function Hy(n,t){let e;if(t instanceof wl)e={update:Df(n,t.key,t.value)};else if(t instanceof Vh)e={delete:rh(n,t.key)};else if(t instanceof no)e={update:Df(n,t.key,t.data),updateMask:tv(t.fieldMask)};else{if(!(t instanceof Py))return pe();e={verify:rh(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof vc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ml)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$y(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:pe()}(n,t.precondition)),e}function Wy(n,t){return n&&n.length>0?(tn(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?Zi(i.updateTime):Zi(s);return o.isEqual(ve.min())&&(o=Zi(s)),new Ny(o,i.transformResults||[])}(e,t))):[]}function Gy(n,t){return{documents:[um(n,t.path)]}}function Ky(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=um(n,i);const s=function(d){if(d.length!==0)return fm(es.create(d,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(A){return{field:sa(A.field),direction:Xy(A.dir)}}(f))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=eh(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function Qy(n){let t=qy(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){tn(r===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(b){const A=dm(b);return A instanceof es&&q1(A)?A.getFilters():[A]}(e.where));let o=[];e.orderBy&&(o=function(b){return b.map(A=>function(D){return new yc(oa(D.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(e.orderBy));let a=null;e.limit&&(a=function(b){let A;return A=typeof b=="object"?b.value:b,Pc(A)?null:A}(e.limit));let u=null;e.startAt&&(u=function(b){const A=!!b.before,m=b.values||[];return new gc(m,A)}(e.startAt));let d=null;return e.endAt&&(d=function(b){const A=!b.before,m=b.values||[];return new gc(m,A)}(e.endAt)),fy(t,i,o,s,a,"F",u,d)}function Yy(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function dm(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=oa(e.unaryFilter.field);return Qn.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=oa(e.unaryFilter.field);return Qn.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=oa(e.unaryFilter.field);return Qn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oa(e.unaryFilter.field);return Qn.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(n):n.fieldFilter!==void 0?function(e){return Qn.create(oa(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return es.create(e.compositeFilter.filters.map(r=>dm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return pe()}}(e.compositeFilter.op))}(n):pe()}function Xy(n){return By[n]}function Jy(n){return Vy[n]}function Zy(n){return jy[n]}function sa(n){return{fieldPath:n.canonicalString()}}function oa(n){return ar.fromServerFormat(n.fieldPath)}function fm(n){return n instanceof Qn?function(e){if(e.op==="=="){if(wf(e.value))return{unaryFilter:{field:sa(e.field),op:"IS_NAN"}};if(bf(e.value))return{unaryFilter:{field:sa(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wf(e.value))return{unaryFilter:{field:sa(e.field),op:"IS_NOT_NAN"}};if(bf(e.value))return{unaryFilter:{field:sa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sa(e.field),op:Jy(e.op),value:e.value}}}(n):n instanceof es?function(e){const r=e.getFilters().map(i=>fm(i));return r.length===1?r[0]:{compositeFilter:{op:Zy(e.op),filters:r}}}(n):pe()}function tv(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function pm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e,r,i,s=ve.min(),o=ve.min(),a=cr.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Hs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Hs(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t){this.ct=t}}function nv(n){const t=Qy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?th(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(){this.un=new iv}addToCollectionParentIndex(t,e){return this.un.add(e),Tt.resolve()}getCollectionParents(t,e){return Tt.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return Tt.resolve()}deleteFieldIndex(t,e){return Tt.resolve()}deleteAllFieldIndexes(t){return Tt.resolve()}createTargetIndexes(t,e){return Tt.resolve()}getDocumentsMatchingTarget(t,e){return Tt.resolve(null)}getIndexType(t,e){return Tt.resolve(0)}getFieldIndexes(t,e){return Tt.resolve([])}getNextCollectionGroupToUpdate(t){return Tt.resolve(null)}getMinOffset(t,e){return Tt.resolve(Js.min())}getMinOffsetFromCollectionGroup(t,e){return Tt.resolve(Js.min())}updateCollectionGroup(t,e,r){return Tt.resolve()}updateIndexEntries(t,e){return Tt.resolve()}}class iv{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new lr(wn.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lr(wn.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new _a(0)}static kn(){return new _a(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.changes=new Ia(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?Tt.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&sl(r.mutation,i,ni.empty(),Yn.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Oe()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Oe()){const i=So();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Za();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=So();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Oe()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Es();const o=il(),a=function(){return il()}();return e.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof no)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),sl(f.mutation,d,f.mutation.getFieldMask(),Yn.now())):o.set(d.key,ni.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),e.forEach((d,f)=>{var b;return a.set(d,new ov(f,(b=o.get(d))!==null&&b!==void 0?b:null))}),a))}recalculateAndSaveOverlays(t,e){const r=il();let i=new En((o,a)=>o-a),s=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||ni.empty();f=a.applyToLocalView(d,f),r.set(u,f);const b=(i.get(a.batchId)||Oe()).add(u);i=i.insert(a.batchId,b)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,f=u.value,b=X1();f.forEach(A=>{if(!s.has(A)){const m=rm(e.get(A),r.get(A));m!==null&&b.set(A,m),s=s.add(A)}}),o.push(this.documentOverlayCache.saveOverlays(t,d,b))}return Tt.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):py(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):Tt.resolve(So());let a=-1,u=s;return o.next(d=>Tt.forEach(d,(f,b)=>(a<b.largestBatchId&&(a=b.largestBatchId),s.get(f)?Tt.resolve():this.remoteDocumentCache.getEntry(t,f).next(A=>{u=u.insert(f,A)}))).next(()=>this.populateOverlays(t,d,s)).next(()=>this.computeViews(t,u,d,Oe())).next(f=>({batchId:a,changes:Y1(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ae(e)).next(r=>{let i=Za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Za();return this.indexManager.getCollectionParents(t,s).next(a=>Tt.forEach(a,u=>{const d=function(b,A){return new kc(A,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(f=>{f.forEach((b,A)=>{o=o.insert(b,A)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,xr.newInvalidDocument(f)))});let a=Za();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&sl(f.mutation,d,ni.empty(),Yn.now()),Rc(e,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return Tt.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Zi(i.createTime)}}(e)),Tt.resolve()}getNamedQuery(t,e){return Tt.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:nv(i.bundledQuery),readTime:Zi(i.readTime)}}(e)),Tt.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.overlays=new En(ae.comparator),this.Ir=new Map}getOverlay(t,e){return Tt.resolve(this.overlays.get(e))}getOverlays(t,e){const r=So();return Tt.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),Tt.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),Tt.resolve()}getOverlaysForCollection(t,e,r){const i=So(),s=e.length+1,o=new ae(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return Tt.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new En((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=So(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=So(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return Tt.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Cy(e,r));let s=this.Ir.get(e);s===void 0&&(s=Oe(),this.Ir.set(e,s)),this.Ir.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.sessionToken=cr.EMPTY_BYTE_STRING}getSessionToken(t){return Tt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Tt.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.Tr=new lr(tr.Er),this.dr=new lr(tr.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new tr(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new tr(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new ae(new wn([])),r=new tr(e,t),i=new tr(e,t+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new ae(new wn([])),r=new tr(e,t),i=new tr(e,t+1);let s=Oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new tr(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class tr{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return ae.comparator(t.key,e.key)||$e(t.wr,e.wr)}static Ar(t,e){return $e(t.wr,e.wr)||ae.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new lr(tr.Er)}checkEmpty(t){return Tt.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ky(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new tr(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Tt.resolve(o)}lookupMutationBatch(t,e){return Tt.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),s=i<0?0:i;return Tt.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Tt.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return Tt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new tr(e,0),i=new tr(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),Tt.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lr($e);return e.forEach(i=>{const s=new tr(i,0),o=new tr(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),Tt.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new tr(new ae(s),0);let a=new lr($e);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},o),Tt.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){tn(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return Tt.forEach(e.mutations,i=>{const s=new tr(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new tr(e,0),i=this.br.firstAfterOrEqual(r);return Tt.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Tt.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(t){this.Mr=t,this.docs=function(){return new En(ae.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return Tt.resolve(r?r.document.mutableCopy():xr.newInvalidDocument(e))}getEntries(t,e){let r=Es();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xr.newInvalidDocument(i))}),Tt.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Es();const o=e.path,a=new ae(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||K5(G5(f),r)<=0||(i.has(f.key)||Rc(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return Tt.resolve(s)}getAllFromCollectionGroup(t,e,r,i){pe()}Or(t,e){return Tt.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new fv(this)}getSize(t){return Tt.resolve(this.size)}}class fv extends sv{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),Tt.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t){this.persistence=t,this.Nr=new Ia(e=>Oh(e),Fh),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qh,this.targetCount=0,this.kr=_a.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),Tt.resolve()}getLastRemoteSnapshotVersion(t){return Tt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Tt.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),Tt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),Tt.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new _a(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,Tt.resolve()}updateTargetData(t,e){return this.Kn(e),Tt.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,Tt.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),Tt.waitFor(s).next(()=>i)}getTargetCount(t){return Tt.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return Tt.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),Tt.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),Tt.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),Tt.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return Tt.resolve(r)}containsKey(t,e){return Tt.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t,e){this.qr={},this.overlays={},this.Qr=new kh(0),this.Kr=!1,this.Kr=!0,this.$r=new uv,this.referenceDelegate=t(this),this.Ur=new pv(this),this.indexManager=new rv,this.remoteDocumentCache=function(i){return new dv(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ev(e),this.Gr=new lv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new cv,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new hv(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){qt("MemoryPersistence","Starting transaction:",t);const i=new gv(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(t,e){return Tt.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class gv extends Y5{constructor(t){super(),this.currentSequenceNumber=t}}class zh{constructor(t){this.persistence=t,this.Jr=new qh,this.Yr=null}static Zr(t){return new zh(t)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),Tt.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),Tt.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),Tt.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tt.forEach(this.Xr,r=>{const i=ae.fromPath(r);return this.ei(t,i).next(s=>{s||e.removeEntry(i,ve.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return Tt.or([()=>Tt.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=Oe(),i=Oe();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hh(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return b0()?8:X5(y0())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.Yi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yv;return this.Xi(t,e,o).next(a=>{if(s.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>s.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(Qa()<=Ue.DEBUG&&qt("QueryEngine","SDK will not create cache indexes for query:",ia(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Tt.resolve()):(Qa()<=Ue.DEBUG&&qt("QueryEngine","Query:",ia(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Qa()<=Ue.DEBUG&&qt("QueryEngine","The SDK decides to create cache indexes for query:",ia(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ji(e))):Tt.resolve())}Yi(t,e){if(xf(e))return Tt.resolve(null);let r=Ji(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=th(e,null,"F"),r=Ji(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Oe(...s);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.ts(e,a);return this.ns(e,d,o,u.readTime)?this.Yi(t,th(e,null,"F")):this.rs(t,d,e,u)}))})))}Zi(t,e,r,i){return xf(e)||i.isEqual(ve.min())?Tt.resolve(null):this.Ji.getDocuments(t,r).next(s=>{const o=this.ts(e,s);return this.ns(e,o,r,i)?Tt.resolve(null):(Qa()<=Ue.DEBUG&&qt("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ia(e)),this.rs(t,o,e,W5(i,-1)).next(a=>a))})}ts(t,e){let r=new lr(K1(t));return e.forEach((i,s)=>{Rc(t,s)&&(r=r.add(s))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,r){return Qa()<=Ue.DEBUG&&qt("QueryEngine","Using full collection scan to execute query:",ia(e)),this.Ji.getDocumentsMatchingQuery(t,e,Js.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new En($e),this._s=new Ia(s=>Oh(s),Fh),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new av(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function wv(n,t,e,r){return new bv(n,t,e,r)}async function mm(n,t){const e=be(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Oe();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:a}))})})}function _v(n,t){const e=be(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,f){const b=d.batch,A=b.keys();let m=Tt.resolve();return A.forEach(D=>{m=m.next(()=>f.getEntry(u,D)).next(R=>{const M=d.docVersions.get(D);tn(M!==null),R.version.compareTo(M)<0&&(b.applyToRemoteDocument(R,d),R.isValidDocument()&&(R.setReadTime(d.commitVersion),f.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,b))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Oe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function gm(n){const t=be(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Av(n,t){const e=be(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((f,b)=>{const A=i.get(b);if(!A)return;a.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,b).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,b)));let m=A.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(b)!==null?m=m.withResumeToken(cr.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):f.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(f.resumeToken,r)),i=i.insert(b,m),function(R,M,O){return R.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(A,m,f)&&a.push(e.Ur.updateTargetData(s,m))});let u=Es(),d=Oe();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(Ev(s,o,t.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ve.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(b=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return Tt.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(e.os=i,s))}function Ev(n,t,e){let r=Oe(),i=Oe();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Es();return e.forEach((a,u)=>{const d=s.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ve.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):qt("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function xv(n,t){const e=be(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Sv(n,t){const e=be(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(s=>s?(i=s,Tt.resolve(i)):e.Ur.allocateTargetId(r).next(o=>(i=new Hs(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function sh(n,t,e){const r=be(n),i=r.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bl(o))throw o;qt("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Of(n,t,e){const r=be(n);let i=ve.min(),s=Oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const b=be(u),A=b._s.get(f);return A!==void 0?Tt.resolve(b.os.get(A)):b.Ur.getTargetData(d,f)}(r,o,Ji(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,t,e?i:ve.min(),e?s:Oe())).next(a=>(Iv(r,gy(t),a),{documents:a,Ts:s})))}function Iv(n,t,e){let r=n.us.get(t)||ve.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(t,r)}class Ff{constructor(){this.activeTargetIds=Ay()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nv{constructor(){this.so=new Ff,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ff,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){qt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){qt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl=null;function yu(){return Wl===null?Wl=function(){return 268435456+Math.round(2147483648*Math.random())}():Wl++,"0x"+Wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="WebChannelConnection";class kv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,r,i,s,o){const a=yu(),u=this.xo(e,r.toUriEncodedString());qt("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(e,u,d,i).then(f=>(qt("RestConnection",`Received RPC '${e}' ${a}: `,f),f),f=>{throw ya("RestConnection",`RPC '${e}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(e,r,i,s,o,a){return this.Mo(e,r,i,s,o)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}xo(e,r){const i=Lv[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const s=yu();return new Promise((o,a)=>{const u=new k1;u.setWithCredentials(!0),u.listenOnce(C1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ec.NO_ERROR:const f=u.getResponseJson();qt(vr,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),o(f);break;case ec.TIMEOUT:qt(vr,`RPC '${t}' ${s} timed out`),a(new Jt(Nt.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const b=u.getStatus();if(qt(vr,`RPC '${t}' ${s} failed with status:`,b,"response text:",u.getResponseText()),b>0){let A=u.getResponseJson();Array.isArray(A)&&(A=A[0]);const m=A==null?void 0:A.error;if(m&&m.status&&m.message){const D=function(M){const O=M.toLowerCase().replace(/_/g,"-");return Object.values(Nt).indexOf(O)>=0?O:Nt.UNKNOWN}(m.status);a(new Jt(D,m.message))}else a(new Jt(Nt.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Jt(Nt.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{qt(vr,`RPC '${t}' ${s} completed.`)}});const d=JSON.stringify(i);qt(vr,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",d,r,15)})}Bo(t,e,r){const i=yu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=O1(),a=D1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=s.join("");qt(vr,`Creating RPC '${t}' stream ${i}: ${f}`,u);const b=o.createWebChannel(f,u);let A=!1,m=!1;const D=new Pv({Io:M=>{m?qt(vr,`Not sending because RPC '${t}' stream ${i} is closed:`,M):(A||(qt(vr,`Opening RPC '${t}' stream ${i} transport.`),b.open(),A=!0),qt(vr,`RPC '${t}' stream ${i} sending:`,M),b.send(M))},To:()=>b.close()}),R=(M,O,Y)=>{M.listen(O,G=>{try{Y(G)}catch(W){setTimeout(()=>{throw W},0)}})};return R(b,Ja.EventType.OPEN,()=>{m||(qt(vr,`RPC '${t}' stream ${i} transport opened.`),D.yo())}),R(b,Ja.EventType.CLOSE,()=>{m||(m=!0,qt(vr,`RPC '${t}' stream ${i} transport closed`),D.So())}),R(b,Ja.EventType.ERROR,M=>{m||(m=!0,ya(vr,`RPC '${t}' stream ${i} transport errored:`,M),D.So(new Jt(Nt.UNAVAILABLE,"The operation could not be completed")))}),R(b,Ja.EventType.MESSAGE,M=>{var O;if(!m){const Y=M.data[0];tn(!!Y);const G=Y,W=G.error||((O=G[0])===null||O===void 0?void 0:O.error);if(W){qt(vr,`RPC '${t}' stream ${i} received error:`,W);const ot=W.status;let pt=function(E){const C=$n[E];if(C!==void 0)return sm(C)}(ot),j=W.message;pt===void 0&&(pt=Nt.INTERNAL,j="Unknown error status: "+ot+" with message "+W.message),m=!0,D.So(new Jt(pt,j)),b.close()}else qt(vr,`RPC '${t}' stream ${i} received:`,Y),D.bo(Y)}}),R(a,R1.STAT_EVENT,M=>{M.stat===Qu.PROXY?qt(vr,`RPC '${t}' stream ${i} detected buffering proxy`):M.stat===Qu.NOPROXY&&qt(vr,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function vu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){return new Uy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&qt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t,e,r,i,s,o,a,u){this.ui=t,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ym(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===Nt.RESOURCE_EXHAUSTED?(As(e.toString()),As("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===Nt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new Jt(Nt.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return qt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(qt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cv extends vm{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=zy(this.serializer,t),r=function(s){if(!("targetChange"in s))return ve.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Zi(o.readTime):ve.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=ih(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=Zu(u)?{documents:Gy(s,u)}:{query:Ky(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lm(s,o.resumeToken);const d=eh(s,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=wc(s,o.snapshotVersion.toTimestamp());const d=eh(s,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,t);const r=Yy(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=ih(this.serializer),e.removeTarget=t,this.a_(e)}}class Rv extends vm{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return tn(!!t.streamToken),this.lastStreamToken=t.streamToken,tn(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){tn(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Wy(t.writeResults,t.commitTime),r=Zi(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=ih(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Hy(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Jt(Nt.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(t,nh(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Jt(Nt.UNKNOWN,s.toString())})}Lo(t,e,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,nh(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Jt(Nt.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ov{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(As(e),this.D_=!1):qt("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Oo(this)&&(qt("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=be(u);d.L_.add(4),await Al(d),d.q_.set("Unknown"),d.L_.delete(4),await Bc(d)}(this))})}),this.q_=new Ov(r,i)}}async function Bc(n){if(Oo(n))for(const t of n.B_)await t(!0)}async function Al(n){for(const t of n.B_)await t(!1)}function bm(n,t){const e=be(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Qh(e)?Kh(e):Na(e).r_()&&Gh(e,t))}function Wh(n,t){const e=be(n),r=Na(e);e.N_.delete(t),r.r_()&&wm(e,t),e.N_.size===0&&(r.r_()?r.o_():Oo(e)&&e.q_.set("Unknown"))}function Gh(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ve.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Na(n).A_(t)}function wm(n,t){n.Q_.xe(t),Na(n).R_(t)}function Kh(n){n.Q_=new My({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Na(n).start(),n.q_.v_()}function Qh(n){return Oo(n)&&!Na(n).n_()&&n.N_.size>0}function Oo(n){return be(n).L_.size===0}function _m(n){n.Q_=void 0}async function Mv(n){n.q_.set("Online")}async function Bv(n){n.N_.forEach((t,e)=>{Gh(n,t)})}async function Vv(n,t){_m(n),Qh(n)?(n.q_.M_(t),Kh(n)):n.q_.set("Unknown")}async function jv(n,t,e){if(n.q_.set("Online"),t instanceof am&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(r){qt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _c(n,r)}else if(t instanceof ic?n.Q_.Ke(t):t instanceof om?n.Q_.He(t):n.Q_.We(t),!e.isEqual(ve.min()))try{const r=await gm(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(cr.EMPTY_BYTE_STRING,f.snapshotVersion)),wm(s,u);const b=new Hs(f.target,u,d,f.sequenceNumber);Gh(s,b)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){qt("RemoteStore","Failed to raise snapshot:",r),await _c(n,r)}}async function _c(n,t,e){if(!bl(t))throw t;n.L_.add(1),await Al(n),n.q_.set("Offline"),e||(e=()=>gm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{qt("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Bc(n)})}function Am(n,t){return t().catch(e=>_c(n,e,t))}async function Vc(n){const t=be(n),e=to(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Uv(t);)try{const i=await xv(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,$v(t,i)}catch(i){await _c(t,i)}Em(t)&&xm(t)}function Uv(n){return Oo(n)&&n.O_.length<10}function $v(n,t){n.O_.push(t);const e=to(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Em(n){return Oo(n)&&!to(n).n_()&&n.O_.length>0}function xm(n){to(n).start()}async function qv(n){to(n).p_()}async function zv(n){const t=to(n);for(const e of n.O_)t.m_(e.mutations)}async function Hv(n,t,e){const r=n.O_.shift(),i=jh.from(r,t,e);await Am(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Vc(n)}async function Wv(n,t){t&&to(n).V_&&await async function(r,i){if(function(o){return Dy(o)&&o!==Nt.ABORTED}(i.code)){const s=r.O_.shift();to(r).s_(),await Am(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vc(r)}}(n,t),Em(n)&&xm(n)}async function Bf(n,t){const e=be(n);e.asyncQueue.verifyOperationInProgress(),qt("RemoteStore","RemoteStore received new credentials");const r=Oo(e);e.L_.add(3),await Al(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Bc(e)}async function Gv(n,t){const e=be(n);t?(e.L_.delete(2),await Bc(e)):t||(e.L_.add(2),await Al(e),e.q_.set("Unknown"))}function Na(n){return n.K_||(n.K_=function(e,r,i){const s=be(e);return s.w_(),new Cv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Mv.bind(null,n),Ro:Bv.bind(null,n),mo:Vv.bind(null,n),d_:jv.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Qh(n)?Kh(n):n.q_.set("Unknown")):(await n.K_.stop(),_m(n))})),n.K_}function to(n){return n.U_||(n.U_=function(e,r,i){const s=be(e);return s.w_(),new Rv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:qv.bind(null,n),mo:Wv.bind(null,n),f_:zv.bind(null,n),g_:Hv.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Vc(n)):(await n.U_.stop(),n.O_.length>0&&(qt("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Yh(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Jt(Nt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xh(n,t){if(As("AsyncQueue",`${t}: ${n}`),bl(n))return new Jt(Nt.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this.comparator=t?(e,r)=>t(e,r)||ae.comparator(e.key,r.key):(e,r)=>ae.comparator(e.key,r.key),this.keyedMap=Za(),this.sortedSet=new En(this.comparator)}static emptySet(t){return new ha(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ha)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ha;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.W_=new En(ae.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):pe():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Aa{constructor(t,e,r,i,s,o,a,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Aa(t,e,ha.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Qv{constructor(){this.queries=jf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=be(e),s=i.queries;i.queries=jf(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new Jt(Nt.ABORTED,"Firestore shutting down"))}}function jf(){return new Ia(n=>G1(n),Cc)}async function Sm(n,t){const e=be(n);let r=3;const i=t.query;let s=e.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new Kv,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await e.onListen(i,!0);break;case 1:s.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=Xh(o,`Initialization of query '${ia(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Jh(e)}async function Im(n,t){const e=be(n),r=t.query;let i=3;const s=e.queries.get(r);if(s){const o=s.j_.indexOf(t);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Yv(n,t){const e=be(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Jh(e)}function Xv(n,t,e){const r=be(n),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(e);r.queries.delete(t)}function Jh(n){n.Y_.forEach(t=>{t.next()})}var oh,Uf;(Uf=oh||(oh={})).ea="default",Uf.Cache="cache";class Nm{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Aa(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Aa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==oh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t){this.key=t}}class Lm{constructor(t){this.key=t}}class Jv{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Oe(),this.mutatedKeys=Oe(),this.Aa=K1(t),this.Ra=new ha(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Vf,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,b)=>{const A=i.get(f),m=Rc(this.query,b)?b:null,D=!!A&&this.mutatedKeys.has(A.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let M=!1;A&&m?A.data.isEqual(m.data)?D!==R&&(r.track({type:3,doc:m}),M=!0):this.ga(A,m)||(r.track({type:2,doc:m}),M=!0,(u&&this.Aa(m,u)>0||d&&this.Aa(m,d)<0)&&(a=!0)):!A&&m?(r.track({type:0,doc:m}),M=!0):A&&!m&&(r.track({type:1,doc:A}),M=!0,(u||d)&&(a=!0)),M&&(m?(o=o.add(m),s=R?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((f,b)=>function(m,D){const R=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return R(m)-R(D)}(f.type,b.type)||this.Aa(f.doc,b.doc)),this.pa(r),i=i!=null&&i;const a=e&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Aa(this.query,t.Ra,s,o,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Lm(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Tm(r))}),e}ba(t){this.Ta=t.Ts,this.da=Oe();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Aa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Zv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class tb{constructor(t){this.key=t,this.va=!1}}class eb{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ia(a=>G1(a),Cc),this.Ma=new Map,this.xa=new Set,this.Oa=new En(ae.comparator),this.Na=new Map,this.La=new qh,this.Ba={},this.ka=new Map,this.qa=_a.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function nb(n,t,e=!0){const r=Om(n);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Pm(r,t,e,!0),i}async function rb(n,t){const e=Om(n);await Pm(e,t,!0,!1)}async function Pm(n,t,e,r){const i=await Sv(n.localStore,Ji(t)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,e);let a;return r&&(a=await ib(n,t,s,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&bm(n.remoteStore,i),a}async function ib(n,t,e,r,i){n.Ka=(b,A,m)=>async function(R,M,O,Y){let G=M.view.ma(O);G.ns&&(G=await Of(R.localStore,M.query,!1).then(({documents:j})=>M.view.ma(j,G)));const W=Y&&Y.targetChanges.get(M.targetId),ot=Y&&Y.targetMismatches.get(M.targetId)!=null,pt=M.view.applyChanges(G,R.isPrimaryClient,W,ot);return qf(R,M.targetId,pt.wa),pt.snapshot}(n,b,A,m);const s=await Of(n.localStore,t,!0),o=new Jv(t,s.Ts),a=o.ma(s.documents),u=_l.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=o.applyChanges(a,n.isPrimaryClient,u);qf(n,e,d.wa);const f=new Zv(t,e,o);return n.Fa.set(t,f),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function sb(n,t,e){const r=be(n),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Cc(o,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await sh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Wh(r.remoteStore,i.targetId),ah(r,i.targetId)}).catch(vl)):(ah(r,i.targetId),await sh(r.localStore,i.targetId,!0))}async function ob(n,t){const e=be(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Wh(e.remoteStore,r.targetId))}async function ab(n,t,e){const r=pb(n);try{const i=await function(o,a){const u=be(o),d=Yn.now(),f=a.reduce((m,D)=>m.add(D.key),Oe());let b,A;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let D=Es(),R=Oe();return u.cs.getEntries(m,f).next(M=>{D=M,D.forEach((O,Y)=>{Y.isValidDocument()||(R=R.add(O))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,D)).next(M=>{b=M;const O=[];for(const Y of a){const G=Ly(Y,b.get(Y.key).overlayedDocument);G!=null&&O.push(new no(Y.key,G,j1(G.value.mapValue),vi.exists(!0)))}return u.mutationQueue.addMutationBatch(m,d,O,a)}).next(M=>{A=M;const O=M.applyToLocalDocumentSet(b,R);return u.documentOverlayCache.saveOverlays(m,M.batchId,O)})}).then(()=>({batchId:A.batchId,changes:Y1(b)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new En($e)),d=d.insert(a,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,e),await El(r,i.changes),await Vc(r.remoteStore)}catch(i){const s=Xh(i,"Failed to persist write");e.reject(s)}}async function km(n,t){const e=be(n);try{const r=await Av(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Na.get(s);o&&(tn(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?tn(o.va):i.removedDocuments.size>0&&(tn(o.va),o.va=!1))}),await El(e,r,t)}catch(r){await vl(r)}}function $f(n,t,e){const r=be(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=be(o);u.onlineState=a;let d=!1;u.queries.forEach((f,b)=>{for(const A of b.j_)A.Z_(a)&&(d=!0)}),d&&Jh(u)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function lb(n,t,e){const r=be(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),s=i&&i.key;if(s){let o=new En(ae.comparator);o=o.insert(s,xr.newNoDocument(s,ve.min()));const a=Oe().add(s),u=new Fc(ve.min(),new Map,new En($e),o,a);await km(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(t),Zh(r)}else await sh(r.localStore,t,!1).then(()=>ah(r,t,e)).catch(vl)}async function cb(n,t){const e=be(n),r=t.batch.batchId;try{const i=await _v(e.localStore,t);Rm(e,r,null),Cm(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await El(e,i)}catch(i){await vl(i)}}async function ub(n,t,e){const r=be(n);try{const i=await function(o,a){const u=be(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,a).next(b=>(tn(b!==null),f=b.keys(),u.mutationQueue.removeMutationBatch(d,b))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,t);Rm(r,t,e),Cm(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await El(r,i)}catch(i){await vl(i)}}function Cm(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Rm(n,t,e){const r=be(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function ah(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Dm(n,r)})}function Dm(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Wh(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Zh(n))}function qf(n,t,e){for(const r of e)r instanceof Tm?(n.La.addReference(r.key,t),hb(n,r)):r instanceof Lm?(qt("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Dm(n,r.key)):pe()}function hb(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(qt("SyncEngine","New document in limbo: "+e),n.xa.add(r),Zh(n))}function Zh(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new ae(wn.fromString(t)),r=n.qa.next();n.Na.set(r,new tb(e)),n.Oa=n.Oa.insert(e,r),bm(n.remoteStore,new Hs(Ji(Mh(e.path)),r,"TargetPurposeLimboResolution",kh.oe))}}async function El(n,t,e){const r=be(n),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,t,e).then(d=>{var f;if((d||e)&&r.isPrimaryClient){const b=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,b?"current":"not-current")}if(d){i.push(d);const b=Hh.Wi(u.targetId,d);s.push(b)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const f=be(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>Tt.forEach(d,A=>Tt.forEach(A.$i,m=>f.persistence.referenceDelegate.addReference(b,A.targetId,m)).next(()=>Tt.forEach(A.Ui,m=>f.persistence.referenceDelegate.removeReference(b,A.targetId,m)))))}catch(b){if(!bl(b))throw b;qt("LocalStore","Failed to update sequence numbers: "+b)}for(const b of d){const A=b.targetId;if(!b.fromCache){const m=f.os.get(A),D=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(A,R)}}}(r.localStore,s))}async function db(n,t){const e=be(n);if(!e.currentUser.isEqual(t)){qt("SyncEngine","User change. New user:",t.toKey());const r=await mm(e.localStore,t);e.currentUser=t,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new Jt(Nt.CANCELLED,o))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await El(e,r.hs)}}function fb(n,t){const e=be(n),r=e.Na.get(t);if(r&&r.va)return Oe().add(r.key);{let i=Oe();const s=e.Ma.get(t);if(!s)return i;for(const o of s){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Om(n){const t=be(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=km.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fb.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lb.bind(null,t),t.Ca.d_=Yv.bind(null,t.eventManager),t.Ca.$a=Xv.bind(null,t.eventManager),t}function pb(n){const t=be(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cb.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ub.bind(null,t),t}class Ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return wv(this.persistence,new vv,t.initialUser,this.serializer)}Ga(t){return new mv(zh.Zr,this.serializer)}Wa(t){return new Nv}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ac.provider={build:()=>new Ac};class lh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=db.bind(null,this.syncEngine),await Gv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Qv}()}createDatastore(t){const e=Mc(t.databaseInfo.databaseId),r=function(s){return new kv(s)}(t.databaseInfo);return function(s,o,a,u){return new Dv(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Fv(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>$f(this.syncEngine,e,0),function(){return Mf.D()?new Mf:new Tv}())}createSyncEngine(t,e){return function(i,s,o,a,u,d,f){const b=new eb(i,s,o,a,u,d);return f&&(b.Qa=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=be(i);qt("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Al(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}lh.provider={build:()=>new lh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):As("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(t,e,r,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Er.UNAUTHENTICATED,this.clientId=M1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{qt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(qt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Xh(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function bu(n,t){n.asyncQueue.verifyOperationInProgress(),qt("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mm(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function zf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await gb(n);qt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Bf(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Bf(t.remoteStore,i)),n._onlineComponents=t}async function gb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){qt("FirestoreClient","Using user provided OfflineComponentProvider");try{await bu(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===Nt.FAILED_PRECONDITION||i.code===Nt.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ya("Error using user provided cache. Falling back to memory cache: "+e),await bu(n,new Ac)}}else qt("FirestoreClient","Using default OfflineComponentProvider"),await bu(n,new Ac);return n._offlineComponents}async function Mm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(qt("FirestoreClient","Using user provided OnlineComponentProvider"),await zf(n,n._uninitializedComponentsProvider._online)):(qt("FirestoreClient","Using default OnlineComponentProvider"),await zf(n,new lh))),n._onlineComponents}function yb(n){return Mm(n).then(t=>t.syncEngine)}async function Bm(n){const t=await Mm(n),e=t.eventManager;return e.onListen=nb.bind(null,t.syncEngine),e.onUnlisten=sb.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=rb.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ob.bind(null,t.syncEngine),e}function vb(n,t,e={}){const r=new ws;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,d){const f=new Fm({next:A=>{f.Za(),o.enqueueAndForget(()=>Im(s,b));const m=A.docs.has(a);!m&&A.fromCache?d.reject(new Jt(Nt.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&A.fromCache&&u&&u.source==="server"?d.reject(new Jt(Nt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),b=new Nm(Mh(a.path),f,{includeMetadataChanges:!0,_a:!0});return Sm(s,b)}(await Bm(n),n.asyncQueue,t,e,r)),r.promise}function bb(n,t,e={}){const r=new ws;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,d){const f=new Fm({next:A=>{f.Za(),o.enqueueAndForget(()=>Im(s,b)),A.fromCache&&u.source==="server"?d.reject(new Jt(Nt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),b=new Nm(a,f,{includeMetadataChanges:!0,_a:!0});return Sm(s,b)}(await Bm(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n,t,e){if(!e)throw new Jt(Nt.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function wb(n,t,e,r){if(t===!0&&r===!0)throw new Jt(Nt.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Wf(n){if(!ae.isDocumentKey(n))throw new Jt(Nt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gf(n){if(ae.isDocumentKey(n))throw new Jt(Nt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function td(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":pe()}function ki(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new Jt(Nt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=td(n);throw new Jt(Nt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Jt(Nt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Jt(Nt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vm((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Jt(Nt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Jt(Nt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Jt(Nt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class jc{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Jt(Nt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Jt(Nt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M5;switch(r.type){case"firstParty":return new U5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Jt(Nt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Hf.get(e);r&&(qt("ComponentProvider","Removing Datastore"),Hf.delete(e),r.terminate())}(this),Promise.resolve()}}function _b(n,t,e,r={}){var i;const s=(n=ki(n,jc))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ya("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Er.MOCK_USER;else{a=g0(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Jt(Nt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Er(d)}n._authCredentials=new B5(new F1(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Uc(this.firestore,t,this._query)}}class $r{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $r(this.firestore,t,this._key)}}class Ys extends Uc{constructor(t,e,r){super(t,e,Mh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $r(this.firestore,null,new ae(t))}withConverter(t){return new Ys(this.firestore,t,this._path)}}function Pn(n,t,...e){if(n=Xs(n),jm("collection","path",t),n instanceof jc){const r=wn.fromString(t,...e);return Gf(r),new Ys(n,null,r)}{if(!(n instanceof $r||n instanceof Ys))throw new Jt(Nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(wn.fromString(t,...e));return Gf(r),new Ys(n.firestore,null,r)}}function dn(n,t,...e){if(n=Xs(n),arguments.length===1&&(t=M1.newId()),jm("doc","path",t),n instanceof jc){const r=wn.fromString(t,...e);return Wf(r),new $r(n,null,new ae(r))}{if(!(n instanceof $r||n instanceof Ys))throw new Jt(Nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(wn.fromString(t,...e));return Wf(r),new $r(n.firestore,n instanceof Ys?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ym(this,"async_queue_retry"),this.Vu=()=>{const r=vu();r&&qt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=vu();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ws;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!bl(t))throw t;qt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw As("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Yh.createAndSchedule(this,t,e,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&pe()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Fo extends jc{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Qf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qf(t),this._firestoreClient=void 0,await t}}}function Ab(n,t){const e=typeof n=="object"?n:S5(),r=typeof n=="string"?n:"(default)",i=_5(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=p0("firestore");s&&_b(i,...s)}return i}function ed(n){if(n._terminated)throw new Jt(Nt.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Eb(n),n._firestoreClient}function Eb(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,d,f){return new ty(a,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Vm(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new mb(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ea(cr.fromBase64String(t))}catch(e){throw new Jt(Nt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ea(cr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new Jt(Nt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ar(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Jt(Nt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Jt(Nt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $e(this._lat,t._lat)||$e(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=/^__.*__$/;class Sb{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new no(t,this.data,this.fieldMask,e,this.fieldTransforms):new wl(t,this.data,e,this.fieldTransforms)}}class Um{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new no(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function $m(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class sd{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new sd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ec(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if($m(this.Cu)&&xb.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Ib{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Mc(t)}Qu(t,e,r,i=!1){return new sd({Cu:t,methodName:e,qu:r,path:ar.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function od(n){const t=n._freezeSettings(),e=Mc(n._databaseId);return new Ib(n._databaseId,!!t.ignoreUndefinedProperties,e)}function qm(n,t,e,r,i,s={}){const o=n.Qu(s.merge||s.mergeFields?2:0,t,e,i);ad("Data must be an object, but it was:",o,r);const a=zm(r,o);let u,d;if(s.merge)u=new ni(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const b of s.mergeFields){const A=ch(t,b,e);if(!o.contains(A))throw new Jt(Nt.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Wm(f,A)||f.push(A)}u=new ni(f),d=o.fieldTransforms.filter(b=>u.covers(b.field))}else u=null,d=o.fieldTransforms;return new Sb(new Ur(a),u,d)}class qc extends nd{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qc}}function Nb(n,t,e,r){const i=n.Qu(1,t,e);ad("Data must be an object, but it was:",i,r);const s=[],o=Ur.empty();Do(r,(u,d)=>{const f=ld(t,u,e);d=Xs(d);const b=i.Nu(f);if(d instanceof qc)s.push(f);else{const A=zc(d,b);A!=null&&(s.push(f),o.set(f,A))}});const a=new ni(s);return new Um(o,a,i.fieldTransforms)}function Tb(n,t,e,r,i,s){const o=n.Qu(1,t,e),a=[ch(t,r,e)],u=[i];if(s.length%2!=0)throw new Jt(Nt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<s.length;A+=2)a.push(ch(t,s[A])),u.push(s[A+1]);const d=[],f=Ur.empty();for(let A=a.length-1;A>=0;--A)if(!Wm(d,a[A])){const m=a[A];let D=u[A];D=Xs(D);const R=o.Nu(m);if(D instanceof qc)d.push(m);else{const M=zc(D,R);M!=null&&(d.push(m),f.set(m,M))}}const b=new ni(d);return new Um(f,b,o.fieldTransforms)}function zc(n,t){if(Hm(n=Xs(n)))return ad("Unsupported field value:",t,n),zm(n,t);if(n instanceof nd)return function(r,i){if(!$m(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=zc(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Xs(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ey(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Yn.fromDate(r);return{timestampValue:wc(i.serializer,s)}}if(r instanceof Yn){const s=new Yn(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wc(i.serializer,s)}}if(r instanceof rd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ea)return{bytesValue:lm(i.serializer,r._byteString)};if(r instanceof $r){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$h(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof id)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Bh(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${td(r)}`)}(n,t)}function zm(n,t){const e={};return B1(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Do(n,(r,i)=>{const s=zc(i,t.Mu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Hm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Yn||n instanceof rd||n instanceof Ea||n instanceof $r||n instanceof nd||n instanceof id)}function ad(n,t,e){if(!Hm(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=td(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function ch(n,t,e){if((t=Xs(t))instanceof $c)return t._internalPath;if(typeof t=="string")return ld(n,t);throw Ec("Field path arguments must be of type string or ",n,!1,void 0,e)}const Lb=new RegExp("[~\\*/\\[\\]]");function ld(n,t,e){if(t.search(Lb)>=0)throw Ec(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new $c(...t.split("."))._internalPath}catch{throw Ec(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ec(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Jt(Nt.INVALID_ARGUMENT,a+n+u)}function Wm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $r(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Pb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Km("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Pb extends Gm{data(){return super.data()}}function Km(n,t){return typeof t=="string"?ld(n,t):t instanceof $c?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Jt(Nt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cb{convertValue(t,e="none"){switch(Po(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Fn(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Lo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw pe()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Do(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertVectorValue(t){var e,r,i;const s=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Fn(o.doubleValue));return new id(s)}convertGeoPoint(t){return new rd(Fn(t.latitude),Fn(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Rh(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(hl(t));default:return null}}convertTimestamp(t){const e=Zs(t);return new Yn(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=wn.fromString(t);tn(pm(r));const i=new dl(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(e)||As(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ym extends Gm{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Km("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class sc extends Ym{data(t={}){return super.data(t)}}class Rb{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new el(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new sc(this._firestore,this._userDataWriter,r.key,r,new el(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Jt(Nt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new sc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new el(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new sc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new el(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:Db(a.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Db(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){n=ki(n,$r);const t=ki(n.firestore,Fo);return vb(ed(t),n._key).then(e=>Ob(t,n,e))}class Xm extends Cb{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ea(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new $r(this.firestore,null,e)}}function nr(n){n=ki(n,Uc);const t=ki(n.firestore,Fo),e=ed(t),r=new Xm(t);return kb(n._query),bb(e,n._query).then(i=>new Rb(t,r,n,i))}function xl(n,t,e){n=ki(n,$r);const r=ki(n.firestore,Fo),i=Qm(n.converter,t,e);return Wc(r,[qm(od(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,vi.none())])}function Ci(n,t,e,...r){n=ki(n,$r);const i=ki(n.firestore,Fo),s=od(i);let o;return o=typeof(t=Xs(t))=="string"||t instanceof $c?Tb(s,"updateDoc",n._key,t,e,r):Nb(s,"updateDoc",n._key,t),Wc(i,[o.toMutation(n._key,vi.exists(!0))])}function Jm(n){return Wc(ki(n.firestore,Fo),[new Vh(n._key,vi.none())])}function Hc(n,t){const e=ki(n.firestore,Fo),r=dn(n),i=Qm(n.converter,t);return Wc(e,[qm(od(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,vi.exists(!1))]).then(()=>r)}function Wc(n,t){return function(r,i){const s=new ws;return r.asyncQueue.enqueueAndForget(async()=>ab(await yb(r),i,s)),s.promise}(ed(n),t)}function Ob(n,t,e){const r=e.docs.get(t._key),i=new Xm(n);return new Ym(n,i,t._key,r,new el(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Sa=i})(x5),pc(new ll("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fo(new V5(r.getProvider("auth-internal")),new q5(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Jt(Nt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ua(pf,"4.7.3",t),ua(pf,"4.7.3","esm2017")})();const Fb={apiKey:"AIzaSyBc1sS-x98QTSeZH--_A3pLMkmPdJTCl6M",authDomain:"fixed-price-contract.firebaseapp.com",projectId:"fixed-price-contract",storageBucket:"fixed-price-contract.firebasestorage.app",messagingSenderId:"438551886150",appId:"1:438551886150:web:554cb893c8b50f3ed98d47"},Mb=N1(Fb),de=Ab(Mb);function Te(n,t="success"){let e=document.querySelector(".toast-wrap");e||(e=document.createElement("div"),e.className="toast-wrap",document.body.appendChild(e));const r=document.createElement("div");r.className=`toast ${t}`,r.innerText=n,e.appendChild(r),setTimeout(()=>{r.classList.add("fadeout"),setTimeout(()=>{r.remove()},250)},2200)}let xc=[],uh=[],da=[];async function Yf(n){da=[],xc=await Bb(),uh=await Vb(),n.innerHTML=`
    <h2>New Order</h2>

    <div class="card">

      <div class="grid-3">

        <div>
          <label>PO Number</label>
          <input id="poNumber" />
        </div>

        <div>
          <label>Customer</label>
          <select id="customerName">
            <option value="">
              Select Customer
            </option>

            ${uh.map(t=>`
              <option>
                ${t.name||""}
              </option>
            `).join("")}

          </select>
        </div>

        <div>
          <label>Buyer</label>
          <input id="buyerName" />
        </div>

        <div>
          <label>Order Date</label>
          <input
            type="date"
            id="orderDate"
          />
        </div>

        <div>
          <label>Due Date</label>
          <input
            type="date"
            id="dueDate"
          />
        </div>

        <div>
          <label>Currency</label>
          <select id="currency">
            <option>GBP</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </div>

      </div>

      <br>

      <div class="grid-2">

        <div>
          <label>Shipping Address</label>
          <textarea
            id="shippingAddress"
            rows="4"
          ></textarea>
        </div>

        <div>
          <label>Invoice Address</label>
          <textarea
            id="invoiceAddress"
            rows="4"
          ></textarea>
        </div>

      </div>

    </div>

    <br>

    <div class="card">

      <h3>Add Item</h3>

      <div class="grid-5">

        <div>
          <input
            id="searchBox"
            list="productList"
            placeholder="Type stock / part / desc"
          />

          <datalist id="productList">

            ${xc.map(t=>`
              <option value="${t.stockCode||""}">
                ${t.stockCode||""}
                ${t.partNumber||""}
                ${t.description||""}
                ${t.supplierName||t.supplier||""}
              </option>
            `).join("")}

          </datalist>

        </div>

        <input
          id="partNumber"
          placeholder="Part Number"
          readonly
        />

        <input
          id="description"
          placeholder="Description"
          readonly
        />

        <input
          id="qty"
          type="number"
          placeholder="Qty"
        />

        <button id="addBtn">
          Add Line
        </button>

      </div>

    </div>

    <br>

    <div id="itemArea"></div>

    <br>

    <button id="saveBtn">
      Create Order
    </button>
  `,document.getElementById("customerName").onchange=jb,document.getElementById("searchBox").oninput=Ub,document.getElementById("addBtn").onclick=$b,document.getElementById("saveBtn").onclick=zb,cd()}async function Bb(){const t=(await nr(Pn(de,"items"))).docs.map(r=>({id:r.id,...r.data()}));return t.length?t:(await nr(Pn(de,"products"))).docs.map(r=>({id:r.id,...r.data()}))}async function Vb(){return(await nr(Pn(de,"customers"))).docs.map(t=>t.data())}function jb(){const n=uh.find(t=>t.name===mi("customerName"));n&&(Ws("shippingAddress",n.shippingAddress||""),Ws("invoiceAddress",n.invoiceAddress||""))}function Ub(){const n=Zm(mi("searchBox"));n&&(Ws("partNumber",n.partNumber||""),Ws("description",n.description||""))}function Zm(n){const t=ta(n),e=xc.find(i=>ta(i.stockCode)===t||ta(i.clientStockCode)===t||ta(i.partNumber)===t||ta(i.description)===t);if(e)return e;const r=xc.filter(i=>[i.stockCode,i.clientStockCode,i.partNumber,i.description,i.supplier,i.supplierName].map(ta).some(s=>s.includes(t)));return r.length===1?r[0]:null}function $b(){const n=Zm(mi("searchBox"));if(!n){Te("Enter correct item number","error");return}const t=Number(mi("qty")||0);if(t<=0){Te("Enter quantity","error");return}da.push({stockCode:n.stockCode||"",clientStockCode:n.clientStockCode||"",partNumber:n.partNumber||"",description:n.description||"",supplier:n.supplier||n.supplierName||"",qty:t,sell:Number(n.salePrice||0),cost:Number(n.costPrice||0),hsCode:n.hsCode||"",countryOfOrigin:n.countryOfOrigin||"",receivedQty:0,lineStatus:"Open"}),qb(),cd()}function qb(){Ws("searchBox",""),Ws("partNumber",""),Ws("description",""),Ws("qty","")}function cd(){document.getElementById("itemArea").innerHTML=`
    <table class="table">

      <thead>
        <tr>
          <th>Stock</th>
          <th>Part</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>

        ${da.map(n=>`
          <tr>
            <td>${n.stockCode}</td>
            <td>${n.partNumber}</td>
            <td>${n.description}</td>
            <td>${n.qty}</td>
            <td>${Xf(n.sell)}</td>
            <td>${Xf(n.sell*n.qty)}</td>
          </tr>
        `).join("")}

      </tbody>

    </table>
  `}async function zb(){if(!da.length){Te("Add items first","error");return}await Hc(Pn(de,"orders"),{poNumber:mi("poNumber"),customerName:mi("customerName"),buyerName:mi("buyerName"),orderDate:mi("orderDate"),dueDate:mi("dueDate"),currency:mi("currency"),shippingAddress:mi("shippingAddress"),invoiceAddress:mi("invoiceAddress"),items:da,status:"Open",created:new Date().toISOString().slice(0,10)}),Te("Order Created","success"),da=[],cd()}function mi(n){return document.getElementById(n).value}function Ws(n,t){document.getElementById(n).value=t}function ta(n){return String(n||"").trim().toUpperCase()}function Xf(n){return Number(n||0).toFixed(2)}const Hb="modulepreload",Wb=function(n){return"/"+n},Jf={},wu=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(u=>{if(u=Wb(u),u in Jf)return;Jf[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const b=document.createElement("link");if(b.rel=d?"stylesheet":Hb,d||(b.as="script"),b.crossOrigin="",b.href=u,a&&b.setAttribute("nonce",a),document.head.appendChild(b),d)return new Promise((A,m)=>{b.addEventListener("load",A),b.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};function Ze(n){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(n)}var Ri=Uint8Array,ri=Uint16Array,ud=Int32Array,hd=new Ri([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dd=new Ri([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zf=new Ri([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tg=function(n,t){for(var e=new ri(31),r=0;r<31;++r)e[r]=t+=1<<n[r-1];for(var i=new ud(e[30]),r=1;r<30;++r)for(var s=e[r];s<e[r+1];++s)i[s]=s-e[r]<<5|r;return{b:e,r:i}},eg=tg(hd,2),Gb=eg.b,hh=eg.r;Gb[28]=258,hh[258]=28;var Kb=tg(dd,0),tp=Kb.r,dh=new ri(32768);for(var gn=0;gn<32768;++gn){var qs=(gn&43690)>>1|(gn&21845)<<1;qs=(qs&52428)>>2|(qs&13107)<<2,qs=(qs&61680)>>4|(qs&3855)<<4,dh[gn]=((qs&65280)>>8|(qs&255)<<8)>>1}var ol=function(n,t,e){for(var r=n.length,i=0,s=new ri(t);i<r;++i)n[i]&&++s[n[i]-1];var o=new ri(t);for(i=1;i<t;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(e){a=new ri(1<<t);var u=15-t;for(i=0;i<r;++i)if(n[i])for(var d=i<<4|n[i],f=t-n[i],b=o[n[i]-1]++<<f,A=b|(1<<f)-1;b<=A;++b)a[dh[b]>>u]=d}else for(a=new ri(r),i=0;i<r;++i)n[i]&&(a[i]=dh[o[n[i]-1]++]>>15-n[i]);return a},ko=new Ri(288);for(var gn=0;gn<144;++gn)ko[gn]=8;for(var gn=144;gn<256;++gn)ko[gn]=9;for(var gn=256;gn<280;++gn)ko[gn]=7;for(var gn=280;gn<288;++gn)ko[gn]=8;var Sc=new Ri(32);for(var gn=0;gn<32;++gn)Sc[gn]=5;var Qb=ol(ko,9,0),Yb=ol(Sc,5,0),ng=function(n){return(n+7)/8|0},Xb=function(n,t,e){return(e==null||e>n.length)&&(e=n.length),new Ri(n.subarray(t,e))},ys=function(n,t,e){e<<=t&7;var r=t/8|0;n[r]|=e,n[r+1]|=e>>8},Ya=function(n,t,e){e<<=t&7;var r=t/8|0;n[r]|=e,n[r+1]|=e>>8,n[r+2]|=e>>16},_u=function(n,t){for(var e=[],r=0;r<n.length;++r)n[r]&&e.push({s:r,f:n[r]});var i=e.length,s=e.slice();if(!i)return{t:ig,l:0};if(i==1){var o=new Ri(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(ot,pt){return ot.f-pt.f}),e.push({s:-1,f:25001});var a=e[0],u=e[1],d=0,f=1,b=2;for(e[0]={s:-1,f:a.f+u.f,l:a,r:u};f!=i-1;)a=e[e[d].f<e[b].f?d++:b++],u=e[d!=f&&e[d].f<e[b].f?d++:b++],e[f++]={s:-1,f:a.f+u.f,l:a,r:u};for(var A=s[0].s,r=1;r<i;++r)s[r].s>A&&(A=s[r].s);var m=new ri(A+1),D=fh(e[f-1],m,0);if(D>t){var r=0,R=0,M=D-t,O=1<<M;for(s.sort(function(pt,j){return m[j.s]-m[pt.s]||pt.f-j.f});r<i;++r){var Y=s[r].s;if(m[Y]>t)R+=O-(1<<D-m[Y]),m[Y]=t;else break}for(R>>=M;R>0;){var G=s[r].s;m[G]<t?R-=1<<t-m[G]++-1:++r}for(;r>=0&&R;--r){var W=s[r].s;m[W]==t&&(--m[W],++R)}D=t}return{t:new Ri(m),l:D}},fh=function(n,t,e){return n.s==-1?Math.max(fh(n.l,t,e+1),fh(n.r,t,e+1)):t[n.s]=e},ep=function(n){for(var t=n.length;t&&!n[--t];);for(var e=new ri(++t),r=0,i=n[0],s=1,o=function(u){e[r++]=u},a=1;a<=t;++a)if(n[a]==i&&a!=t)++s;else{if(!i&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i);s=1,i=n[a]}return{c:e.subarray(0,r),n:t}},Xa=function(n,t){for(var e=0,r=0;r<t.length;++r)e+=n[r]*t[r];return e},rg=function(n,t,e){var r=e.length,i=ng(t+2);n[i]=r&255,n[i+1]=r>>8,n[i+2]=n[i]^255,n[i+3]=n[i+1]^255;for(var s=0;s<r;++s)n[i+s+4]=e[s];return(i+4+r)*8},np=function(n,t,e,r,i,s,o,a,u,d,f){ys(t,f++,e),++i[256];for(var b=_u(i,15),A=b.t,m=b.l,D=_u(s,15),R=D.t,M=D.l,O=ep(A),Y=O.c,G=O.n,W=ep(R),ot=W.c,pt=W.n,j=new ri(19),N=0;N<Y.length;++N)++j[Y[N]&31];for(var N=0;N<ot.length;++N)++j[ot[N]&31];for(var E=_u(j,7),C=E.t,w=E.l,x=19;x>4&&!C[Zf[x-1]];--x);var S=d+5<<3,Q=Xa(i,ko)+Xa(s,Sc)+o,ut=Xa(i,A)+Xa(s,R)+o+14+3*x+Xa(j,C)+2*j[16]+3*j[17]+7*j[18];if(u>=0&&S<=Q&&S<=ut)return rg(t,f,n.subarray(u,u+d));var yt,mt,at,vt;if(ys(t,f,1+(ut<Q)),f+=2,ut<Q){yt=ol(A,m,0),mt=A,at=ol(R,M,0),vt=R;var kt=ol(C,w,0);ys(t,f,G-257),ys(t,f+5,pt-1),ys(t,f+10,x-4),f+=14;for(var N=0;N<x;++N)ys(t,f+3*N,C[Zf[N]]);f+=3*x;for(var xt=[Y,ot],P=0;P<2;++P)for(var H=xt[P],N=0;N<H.length;++N){var K=H[N]&31;ys(t,f,kt[K]),f+=C[K],K>15&&(ys(t,f,H[N]>>5&127),f+=H[N]>>12)}}else yt=Qb,mt=ko,at=Yb,vt=Sc;for(var N=0;N<a;++N){var J=r[N];if(J>255){var K=J>>18&31;Ya(t,f,yt[K+257]),f+=mt[K+257],K>7&&(ys(t,f,J>>23&31),f+=hd[K]);var nt=J&31;Ya(t,f,at[nt]),f+=vt[nt],nt>3&&(Ya(t,f,J>>5&8191),f+=dd[nt])}else Ya(t,f,yt[J]),f+=mt[J]}return Ya(t,f,yt[256]),f+mt[256]},Jb=new ud([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ig=new Ri(0),Zb=function(n,t,e,r,i,s){var o=s.z||n.length,a=new Ri(r+o+5*(1+Math.ceil(o/7e3))+i),u=a.subarray(r,a.length-i),d=s.l,f=(s.r||0)&7;if(t){f&&(u[0]=s.r>>3);for(var b=Jb[t-1],A=b>>13,m=b&8191,D=(1<<e)-1,R=s.p||new ri(32768),M=s.h||new ri(D+1),O=Math.ceil(e/3),Y=2*O,G=function(Gt){return(n[Gt]^n[Gt+1]<<O^n[Gt+2]<<Y)&D},W=new ud(25e3),ot=new ri(288),pt=new ri(32),j=0,N=0,E=s.i||0,C=0,w=s.w||0,x=0;E+2<o;++E){var S=G(E),Q=E&32767,ut=M[S];if(R[Q]=ut,M[S]=Q,w<=E){var yt=o-E;if((j>7e3||C>24576)&&(yt>423||!d)){f=np(n,u,0,W,ot,pt,N,C,x,E-x,f),C=j=N=0,x=E;for(var mt=0;mt<286;++mt)ot[mt]=0;for(var mt=0;mt<30;++mt)pt[mt]=0}var at=2,vt=0,kt=m,xt=Q-ut&32767;if(yt>2&&S==G(E-xt))for(var P=Math.min(A,yt)-1,H=Math.min(32767,E),K=Math.min(258,yt);xt<=H&&--kt&&Q!=ut;){if(n[E+at]==n[E+at-xt]){for(var J=0;J<K&&n[E+J]==n[E+J-xt];++J);if(J>at){if(at=J,vt=xt,J>P)break;for(var nt=Math.min(xt,J-2),st=0,mt=0;mt<nt;++mt){var dt=E-xt+mt&32767,ft=R[dt],_t=dt-ft&32767;_t>st&&(st=_t,ut=dt)}}}Q=ut,ut=R[Q],xt+=Q-ut&32767}if(vt){W[C++]=268435456|hh[at]<<18|tp[vt];var Lt=hh[at]&31,Ft=tp[vt]&31;N+=hd[Lt]+dd[Ft],++ot[257+Lt],++pt[Ft],w=E+at,++j}else W[C++]=n[E],++ot[n[E]]}}for(E=Math.max(E,w);E<o;++E)W[C++]=n[E],++ot[n[E]];f=np(n,u,d,W,ot,pt,N,C,x,E-x,f),d||(s.r=f&7|u[f/8|0]<<3,f-=7,s.h=M,s.p=R,s.i=E,s.w=w)}else{for(var E=s.w||0;E<o+d;E+=65535){var Ot=E+65535;Ot>=o&&(u[f/8|0]=d,Ot=o),f=rg(u,f+1,n.subarray(E,Ot))}s.i=o}return Xb(a,0,r+ng(f)+i)},sg=function(){var n=1,t=0;return{p:function(e){for(var r=n,i=t,s=e.length|0,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)i+=r+=e[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}n=r,t=i},d:function(){return n%=65521,t%=65521,(n&255)<<24|(n&65280)<<8|(t&255)<<8|t>>8}}},tw=function(n,t,e,r,i){if(!i&&(i={l:1},t.dictionary)){var s=t.dictionary.subarray(-32768),o=new Ri(s.length+n.length);o.set(s),o.set(n,s.length),n=o,i.w=s.length}return Zb(n,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+t.mem,e,r,i)},og=function(n,t,e){for(;e;++t)n[t]=e,e>>>=8},ew=function(n,t){var e=t.level,r=e==0?0:e<6?1:e==9?3:2;if(n[0]=120,n[1]=r<<6|(t.dictionary&&32),n[1]|=31-(n[0]<<8|n[1])%31,t.dictionary){var i=sg();i.p(t.dictionary),og(n,2,i.d())}};function ph(n,t){t||(t={});var e=sg();e.p(n);var r=tw(n,t,t.dictionary?6:2,4);return ew(r,t),og(r,r.length-4,e.d()),r}var nw=typeof TextDecoder<"u"&&new TextDecoder,rw=0;try{nw.decode(ig,{stream:!0}),rw=1}catch{}function iw(n){if(Array.isArray(n))return n}function sw(n,t){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var r,i,s,o,a=[],u=!0,d=!1;try{if(s=(e=e.call(n)).next,t!==0)for(;!(u=(r=s.call(e)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(f){d=!0,i=f}finally{try{if(!u&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(d)throw i}}return a}}function rp(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function ow(n,t){if(n){if(typeof n=="string")return rp(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?rp(n,t):void 0}}function aw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ip(n,t){return iw(n)||sw(n,t)||ow(n,t)||aw()}function sp(n,t="utf8"){return new TextDecoder(t).decode(n)}const lw=new TextEncoder;function cw(n){return lw.encode(n)}const uw=1024*8,hw=(()=>{const n=new Uint8Array(4),t=new Uint32Array(n.buffer);return!((t[0]=1)&n[0])})(),Au={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class fd{constructor(t=uw,e={}){Je(this,"buffer");Je(this,"byteLength");Je(this,"byteOffset");Je(this,"length");Je(this,"offset");Je(this,"lastWrittenByte");Je(this,"littleEndian");Je(this,"_data");Je(this,"_mark");Je(this,"_marks");let r=!1;typeof t=="number"?t=new ArrayBuffer(t):(r=!0,this.lastWrittenByte=t.byteLength);const i=e.offset?e.offset>>>0:0,s=t.byteLength-i;let o=i;(ArrayBuffer.isView(t)||t instanceof fd)&&(t.byteLength!==t.buffer.byteLength&&(o=t.byteOffset+i),t=t.buffer),r?this.lastWrittenByte=s:this.lastWrittenByte=0,this.buffer=t,this.length=s,this.byteLength=s,this.byteOffset=o,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,o,s),this._mark=0,this._marks=[]}available(t=1){return this.offset+t<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(t=1){return this.offset+=t,this}back(t=1){return this.offset-=t,this}seek(t){return this.offset=t,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const t=this._marks.pop();if(t===void 0)throw new Error("Mark stack empty");return this.seek(t),this}rewind(){return this.offset=0,this}ensureAvailable(t=1){if(!this.available(t)){const r=(this.offset+t)*2,i=new Uint8Array(r);i.set(new Uint8Array(this.buffer)),this.buffer=i.buffer,this.length=r,this.byteLength=r,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(t=1){return this.readArray(t,"uint8")}readArray(t,e){const r=Au[e].BYTES_PER_ELEMENT*t,i=this.byteOffset+this.offset,s=this.buffer.slice(i,i+r);if(this.littleEndian===hw&&e!=="uint8"&&e!=="int8"){const a=new Uint8Array(this.buffer.slice(i,i+r));a.reverse();const u=new Au[e](a.buffer);return this.offset+=r,u.reverse(),u}const o=new Au[e](s);return this.offset+=r,o}readInt16(){const t=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}readUint16(){const t=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,t}readInt32(){const t=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint32(){const t=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat32(){const t=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readFloat64(){const t=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}readBigInt64(){const t=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,t}readBigUint64(){const t=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,t}readChar(){return String.fromCharCode(this.readInt8())}readChars(t=1){let e="";for(let r=0;r<t;r++)e+=this.readChar();return e}readUtf8(t=1){return sp(this.readBytes(t))}decodeText(t=1,e="utf8"){return sp(this.readBytes(t),e)}writeBoolean(t){return this.writeUint8(t?255:0),this}writeInt8(t){return this.ensureAvailable(1),this._data.setInt8(this.offset++,t),this._updateLastWrittenByte(),this}writeUint8(t){return this.ensureAvailable(1),this._data.setUint8(this.offset++,t),this._updateLastWrittenByte(),this}writeByte(t){return this.writeUint8(t)}writeBytes(t){this.ensureAvailable(t.length);for(let e=0;e<t.length;e++)this._data.setUint8(this.offset++,t[e]);return this._updateLastWrittenByte(),this}writeInt16(t){return this.ensureAvailable(2),this._data.setInt16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(t){return this.ensureAvailable(2),this._data.setUint16(this.offset,t,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(t){return this.ensureAvailable(4),this._data.setInt32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(t){return this.ensureAvailable(4),this._data.setUint32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(t){return this.ensureAvailable(4),this._data.setFloat32(this.offset,t,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(t){return this.ensureAvailable(8),this._data.setFloat64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(t){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(t){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,t,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(t){return this.writeUint8(t.charCodeAt(0))}writeChars(t){for(let e=0;e<t.length;e++)this.writeUint8(t.charCodeAt(e));return this}writeUtf8(t){return this.writeBytes(cw(t))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function Ta(n){let t=n.length;for(;--t>=0;)n[t]=0}const dw=3,fw=258,ag=29,pw=256,mw=pw+1+ag,lg=30,gw=512,yw=new Array((mw+2)*2);Ta(yw);const vw=new Array(lg*2);Ta(vw);const bw=new Array(gw);Ta(bw);const ww=new Array(fw-dw+1);Ta(ww);const _w=new Array(ag);Ta(_w);const Aw=new Array(lg);Ta(Aw);const Ew=(n,t,e,r)=>{let i=n&65535|0,s=n>>>16&65535|0,o=0;for(;e!==0;){o=e>2e3?2e3:e,e-=o;do i=i+t[r++]|0,s=s+i|0;while(--o);i%=65521,s%=65521}return i|s<<16|0};var mh=Ew;const xw=()=>{let n,t=[];for(var e=0;e<256;e++){n=e;for(var r=0;r<8;r++)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n}return t},Sw=new Uint32Array(xw()),Iw=(n,t,e,r)=>{const i=Sw,s=r+e;n^=-1;for(let o=r;o<s;o++)n=n>>>8^i[(n^t[o])&255];return n^-1};var Ki=Iw,gh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},cg={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const Nw=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var Tw=function(n){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const e=t.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(const r in e)Nw(e,r)&&(n[r]=e[r])}}return n},Lw=n=>{let t=0;for(let r=0,i=n.length;r<i;r++)t+=n[r].length;const e=new Uint8Array(t);for(let r=0,i=0,s=n.length;r<s;r++){let o=n[r];e.set(o,i),i+=o.length}return e},ug={assign:Tw,flattenChunks:Lw};let hg=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{hg=!1}const gl=new Uint8Array(256);for(let n=0;n<256;n++)gl[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;gl[254]=gl[254]=1;var Pw=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let t,e,r,i,s,o=n.length,a=0;for(i=0;i<o;i++)e=n.charCodeAt(i),(e&64512)===55296&&i+1<o&&(r=n.charCodeAt(i+1),(r&64512)===56320&&(e=65536+(e-55296<<10)+(r-56320),i++)),a+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Uint8Array(a),s=0,i=0;s<a;i++)e=n.charCodeAt(i),(e&64512)===55296&&i+1<o&&(r=n.charCodeAt(i+1),(r&64512)===56320&&(e=65536+(e-55296<<10)+(r-56320),i++)),e<128?t[s++]=e:e<2048?(t[s++]=192|e>>>6,t[s++]=128|e&63):e<65536?(t[s++]=224|e>>>12,t[s++]=128|e>>>6&63,t[s++]=128|e&63):(t[s++]=240|e>>>18,t[s++]=128|e>>>12&63,t[s++]=128|e>>>6&63,t[s++]=128|e&63);return t};const kw=(n,t)=>{if(t<65534&&n.subarray&&hg)return String.fromCharCode.apply(null,n.length===t?n:n.subarray(0,t));let e="";for(let r=0;r<t;r++)e+=String.fromCharCode(n[r]);return e};var Cw=(n,t)=>{const e=t||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,t));let r,i;const s=new Array(e*2);for(i=0,r=0;r<e;){let o=n[r++];if(o<128){s[i++]=o;continue}let a=gl[o];if(a>4){s[i++]=65533,r+=a-1;continue}for(o&=a===2?31:a===3?15:7;a>1&&r<e;)o=o<<6|n[r++]&63,a--;if(a>1){s[i++]=65533;continue}o<65536?s[i++]=o:(o-=65536,s[i++]=55296|o>>10&1023,s[i++]=56320|o&1023)}return kw(s,i)},Rw=(n,t)=>{t=t||n.length,t>n.length&&(t=n.length);let e=t-1;for(;e>=0&&(n[e]&192)===128;)e--;return e<0||e===0?t:e+gl[n[e]]>t?e:t},yh={string2buf:Pw,buf2string:Cw,utf8border:Rw};function Dw(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Ow=Dw;const Gl=16209,Fw=16191;var Mw=function(t,e){let r,i,s,o,a,u,d,f,b,A,m,D,R,M,O,Y,G,W,ot,pt,j,N,E,C;const w=t.state;r=t.next_in,E=t.input,i=r+(t.avail_in-5),s=t.next_out,C=t.output,o=s-(e-t.avail_out),a=s+(t.avail_out-257),u=w.dmax,d=w.wsize,f=w.whave,b=w.wnext,A=w.window,m=w.hold,D=w.bits,R=w.lencode,M=w.distcode,O=(1<<w.lenbits)-1,Y=(1<<w.distbits)-1;t:do{D<15&&(m+=E[r++]<<D,D+=8,m+=E[r++]<<D,D+=8),G=R[m&O];e:for(;;){if(W=G>>>24,m>>>=W,D-=W,W=G>>>16&255,W===0)C[s++]=G&65535;else if(W&16){ot=G&65535,W&=15,W&&(D<W&&(m+=E[r++]<<D,D+=8),ot+=m&(1<<W)-1,m>>>=W,D-=W),D<15&&(m+=E[r++]<<D,D+=8,m+=E[r++]<<D,D+=8),G=M[m&Y];n:for(;;){if(W=G>>>24,m>>>=W,D-=W,W=G>>>16&255,W&16){if(pt=G&65535,W&=15,D<W&&(m+=E[r++]<<D,D+=8,D<W&&(m+=E[r++]<<D,D+=8)),pt+=m&(1<<W)-1,pt>u){t.msg="invalid distance too far back",w.mode=Gl;break t}if(m>>>=W,D-=W,W=s-o,pt>W){if(W=pt-W,W>f&&w.sane){t.msg="invalid distance too far back",w.mode=Gl;break t}if(j=0,N=A,b===0){if(j+=d-W,W<ot){ot-=W;do C[s++]=A[j++];while(--W);j=s-pt,N=C}}else if(b<W){if(j+=d+b-W,W-=b,W<ot){ot-=W;do C[s++]=A[j++];while(--W);if(j=0,b<ot){W=b,ot-=W;do C[s++]=A[j++];while(--W);j=s-pt,N=C}}}else if(j+=b-W,W<ot){ot-=W;do C[s++]=A[j++];while(--W);j=s-pt,N=C}for(;ot>2;)C[s++]=N[j++],C[s++]=N[j++],C[s++]=N[j++],ot-=3;ot&&(C[s++]=N[j++],ot>1&&(C[s++]=N[j++]))}else{j=s-pt;do C[s++]=C[j++],C[s++]=C[j++],C[s++]=C[j++],ot-=3;while(ot>2);ot&&(C[s++]=C[j++],ot>1&&(C[s++]=C[j++]))}}else if(W&64){t.msg="invalid distance code",w.mode=Gl;break t}else{G=M[(G&65535)+(m&(1<<W)-1)];continue n}break}}else if(W&64)if(W&32){w.mode=Fw;break t}else{t.msg="invalid literal/length code",w.mode=Gl;break t}else{G=R[(G&65535)+(m&(1<<W)-1)];continue e}break}}while(r<i&&s<a);ot=D>>3,r-=ot,D-=ot<<3,m&=(1<<D)-1,t.next_in=r,t.next_out=s,t.avail_in=r<i?5+(i-r):5-(r-i),t.avail_out=s<a?257+(a-s):257-(s-a),w.hold=m,w.bits=D};const ea=15,op=852,ap=592,lp=0,Eu=1,cp=2,Bw=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Vw=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),jw=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Uw=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),$w=(n,t,e,r,i,s,o,a)=>{const u=a.bits;let d=0,f=0,b=0,A=0,m=0,D=0,R=0,M=0,O=0,Y=0,G,W,ot,pt,j,N=null,E;const C=new Uint16Array(ea+1),w=new Uint16Array(ea+1);let x=null,S,Q,ut;for(d=0;d<=ea;d++)C[d]=0;for(f=0;f<r;f++)C[t[e+f]]++;for(m=u,A=ea;A>=1&&C[A]===0;A--);if(m>A&&(m=A),A===0)return i[s++]=1<<24|64<<16|0,i[s++]=1<<24|64<<16|0,a.bits=1,0;for(b=1;b<A&&C[b]===0;b++);for(m<b&&(m=b),M=1,d=1;d<=ea;d++)if(M<<=1,M-=C[d],M<0)return-1;if(M>0&&(n===lp||A!==1))return-1;for(w[1]=0,d=1;d<ea;d++)w[d+1]=w[d]+C[d];for(f=0;f<r;f++)t[e+f]!==0&&(o[w[t[e+f]]++]=f);if(n===lp?(N=x=o,E=20):n===Eu?(N=Bw,x=Vw,E=257):(N=jw,x=Uw,E=0),Y=0,f=0,d=b,j=s,D=m,R=0,ot=-1,O=1<<m,pt=O-1,n===Eu&&O>op||n===cp&&O>ap)return 1;for(;;){S=d-R,o[f]+1<E?(Q=0,ut=o[f]):o[f]>=E?(Q=x[o[f]-E],ut=N[o[f]-E]):(Q=96,ut=0),G=1<<d-R,W=1<<D,b=W;do W-=G,i[j+(Y>>R)+W]=S<<24|Q<<16|ut|0;while(W!==0);for(G=1<<d-1;Y&G;)G>>=1;if(G!==0?(Y&=G-1,Y+=G):Y=0,f++,--C[d]===0){if(d===A)break;d=t[e+o[f]]}if(d>m&&(Y&pt)!==ot){for(R===0&&(R=m),j+=b,D=d-R,M=1<<D;D+R<A&&(M-=C[D+R],!(M<=0));)D++,M<<=1;if(O+=1<<D,n===Eu&&O>op||n===cp&&O>ap)return 1;ot=Y&pt,i[ot]=m<<24|D<<16|j-s|0}}return Y!==0&&(i[j+Y]=d-R<<24|64<<16|0),a.bits=m,0};var al=$w;const qw=0,dg=1,fg=2,{Z_FINISH:up,Z_BLOCK:zw,Z_TREES:Kl,Z_OK:Co,Z_STREAM_END:Hw,Z_NEED_DICT:Ww,Z_STREAM_ERROR:bi,Z_DATA_ERROR:pg,Z_MEM_ERROR:mg,Z_BUF_ERROR:Gw,Z_DEFLATED:hp}=cg,Gc=16180,dp=16181,fp=16182,pp=16183,mp=16184,gp=16185,yp=16186,vp=16187,bp=16188,wp=16189,Ic=16190,vs=16191,xu=16192,_p=16193,Su=16194,Ap=16195,Ep=16196,xp=16197,Sp=16198,Ql=16199,Yl=16200,Ip=16201,Np=16202,Tp=16203,Lp=16204,Pp=16205,Iu=16206,kp=16207,Cp=16208,bn=16209,gg=16210,yg=16211,Kw=852,Qw=592,Yw=15,Xw=Yw,Rp=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function Jw(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Bo=n=>{if(!n)return 1;const t=n.state;return!t||t.strm!==n||t.mode<Gc||t.mode>yg?1:0},vg=n=>{if(Bo(n))return bi;const t=n.state;return n.total_in=n.total_out=t.total=0,n.msg="",t.wrap&&(n.adler=t.wrap&1),t.mode=Gc,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Kw),t.distcode=t.distdyn=new Int32Array(Qw),t.sane=1,t.back=-1,Co},bg=n=>{if(Bo(n))return bi;const t=n.state;return t.wsize=0,t.whave=0,t.wnext=0,vg(n)},wg=(n,t)=>{let e;if(Bo(n))return bi;const r=n.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?bi:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=e,r.wbits=t,bg(n))},_g=(n,t)=>{if(!n)return bi;const e=new Jw;n.state=e,e.strm=n,e.window=null,e.mode=Gc;const r=wg(n,t);return r!==Co&&(n.state=null),r},Zw=n=>_g(n,Xw);let Dp=!0,Nu,Tu;const t_=n=>{if(Dp){Nu=new Int32Array(512),Tu=new Int32Array(32);let t=0;for(;t<144;)n.lens[t++]=8;for(;t<256;)n.lens[t++]=9;for(;t<280;)n.lens[t++]=7;for(;t<288;)n.lens[t++]=8;for(al(dg,n.lens,0,288,Nu,0,n.work,{bits:9}),t=0;t<32;)n.lens[t++]=5;al(fg,n.lens,0,32,Tu,0,n.work,{bits:5}),Dp=!1}n.lencode=Nu,n.lenbits=9,n.distcode=Tu,n.distbits=5},Ag=(n,t,e,r)=>{let i;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),r>=s.wsize?(s.window.set(t.subarray(e-s.wsize,e),0),s.wnext=0,s.whave=s.wsize):(i=s.wsize-s.wnext,i>r&&(i=r),s.window.set(t.subarray(e-r,e-r+i),s.wnext),r-=i,r?(s.window.set(t.subarray(e-r,e),0),s.wnext=r,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0},e_=(n,t)=>{let e,r,i,s,o,a,u,d,f,b,A,m,D,R,M=0,O,Y,G,W,ot,pt,j,N;const E=new Uint8Array(4);let C,w;const x=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Bo(n)||!n.output||!n.input&&n.avail_in!==0)return bi;e=n.state,e.mode===vs&&(e.mode=xu),o=n.next_out,i=n.output,u=n.avail_out,s=n.next_in,r=n.input,a=n.avail_in,d=e.hold,f=e.bits,b=a,A=u,N=Co;t:for(;;)switch(e.mode){case Gc:if(e.wrap===0){e.mode=xu;break}for(;f<16;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(e.wrap&2&&d===35615){e.wbits===0&&(e.wbits=15),e.check=0,E[0]=d&255,E[1]=d>>>8&255,e.check=Ki(e.check,E,2,0),d=0,f=0,e.mode=dp;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((d&255)<<8)+(d>>8))%31){n.msg="incorrect header check",e.mode=bn;break}if((d&15)!==hp){n.msg="unknown compression method",e.mode=bn;break}if(d>>>=4,f-=4,j=(d&15)+8,e.wbits===0&&(e.wbits=j),j>15||j>e.wbits){n.msg="invalid window size",e.mode=bn;break}e.dmax=1<<e.wbits,e.flags=0,n.adler=e.check=1,e.mode=d&512?wp:vs,d=0,f=0;break;case dp:for(;f<16;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(e.flags=d,(e.flags&255)!==hp){n.msg="unknown compression method",e.mode=bn;break}if(e.flags&57344){n.msg="unknown header flags set",e.mode=bn;break}e.head&&(e.head.text=d>>8&1),e.flags&512&&e.wrap&4&&(E[0]=d&255,E[1]=d>>>8&255,e.check=Ki(e.check,E,2,0)),d=0,f=0,e.mode=fp;case fp:for(;f<32;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}e.head&&(e.head.time=d),e.flags&512&&e.wrap&4&&(E[0]=d&255,E[1]=d>>>8&255,E[2]=d>>>16&255,E[3]=d>>>24&255,e.check=Ki(e.check,E,4,0)),d=0,f=0,e.mode=pp;case pp:for(;f<16;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}e.head&&(e.head.xflags=d&255,e.head.os=d>>8),e.flags&512&&e.wrap&4&&(E[0]=d&255,E[1]=d>>>8&255,e.check=Ki(e.check,E,2,0)),d=0,f=0,e.mode=mp;case mp:if(e.flags&1024){for(;f<16;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}e.length=d,e.head&&(e.head.extra_len=d),e.flags&512&&e.wrap&4&&(E[0]=d&255,E[1]=d>>>8&255,e.check=Ki(e.check,E,2,0)),d=0,f=0}else e.head&&(e.head.extra=null);e.mode=gp;case gp:if(e.flags&1024&&(m=e.length,m>a&&(m=a),m&&(e.head&&(j=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(r.subarray(s,s+m),j)),e.flags&512&&e.wrap&4&&(e.check=Ki(e.check,r,m,s)),a-=m,s+=m,e.length-=m),e.length))break t;e.length=0,e.mode=yp;case yp:if(e.flags&2048){if(a===0)break t;m=0;do j=r[s+m++],e.head&&j&&e.length<65536&&(e.head.name+=String.fromCharCode(j));while(j&&m<a);if(e.flags&512&&e.wrap&4&&(e.check=Ki(e.check,r,m,s)),a-=m,s+=m,j)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=vp;case vp:if(e.flags&4096){if(a===0)break t;m=0;do j=r[s+m++],e.head&&j&&e.length<65536&&(e.head.comment+=String.fromCharCode(j));while(j&&m<a);if(e.flags&512&&e.wrap&4&&(e.check=Ki(e.check,r,m,s)),a-=m,s+=m,j)break t}else e.head&&(e.head.comment=null);e.mode=bp;case bp:if(e.flags&512){for(;f<16;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(e.wrap&4&&d!==(e.check&65535)){n.msg="header crc mismatch",e.mode=bn;break}d=0,f=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),n.adler=e.check=0,e.mode=vs;break;case wp:for(;f<32;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}n.adler=e.check=Rp(d),d=0,f=0,e.mode=Ic;case Ic:if(e.havedict===0)return n.next_out=o,n.avail_out=u,n.next_in=s,n.avail_in=a,e.hold=d,e.bits=f,Ww;n.adler=e.check=1,e.mode=vs;case vs:if(t===zw||t===Kl)break t;case xu:if(e.last){d>>>=f&7,f-=f&7,e.mode=Iu;break}for(;f<3;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}switch(e.last=d&1,d>>>=1,f-=1,d&3){case 0:e.mode=_p;break;case 1:if(t_(e),e.mode=Ql,t===Kl){d>>>=2,f-=2;break t}break;case 2:e.mode=Ep;break;case 3:n.msg="invalid block type",e.mode=bn}d>>>=2,f-=2;break;case _p:for(d>>>=f&7,f-=f&7;f<32;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if((d&65535)!==(d>>>16^65535)){n.msg="invalid stored block lengths",e.mode=bn;break}if(e.length=d&65535,d=0,f=0,e.mode=Su,t===Kl)break t;case Su:e.mode=Ap;case Ap:if(m=e.length,m){if(m>a&&(m=a),m>u&&(m=u),m===0)break t;i.set(r.subarray(s,s+m),o),a-=m,s+=m,u-=m,o+=m,e.length-=m;break}e.mode=vs;break;case Ep:for(;f<14;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(e.nlen=(d&31)+257,d>>>=5,f-=5,e.ndist=(d&31)+1,d>>>=5,f-=5,e.ncode=(d&15)+4,d>>>=4,f-=4,e.nlen>286||e.ndist>30){n.msg="too many length or distance symbols",e.mode=bn;break}e.have=0,e.mode=xp;case xp:for(;e.have<e.ncode;){for(;f<3;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}e.lens[x[e.have++]]=d&7,d>>>=3,f-=3}for(;e.have<19;)e.lens[x[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,C={bits:e.lenbits},N=al(qw,e.lens,0,19,e.lencode,0,e.work,C),e.lenbits=C.bits,N){n.msg="invalid code lengths set",e.mode=bn;break}e.have=0,e.mode=Sp;case Sp:for(;e.have<e.nlen+e.ndist;){for(;M=e.lencode[d&(1<<e.lenbits)-1],O=M>>>24,Y=M>>>16&255,G=M&65535,!(O<=f);){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(G<16)d>>>=O,f-=O,e.lens[e.have++]=G;else{if(G===16){for(w=O+2;f<w;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(d>>>=O,f-=O,e.have===0){n.msg="invalid bit length repeat",e.mode=bn;break}j=e.lens[e.have-1],m=3+(d&3),d>>>=2,f-=2}else if(G===17){for(w=O+3;f<w;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}d>>>=O,f-=O,j=0,m=3+(d&7),d>>>=3,f-=3}else{for(w=O+7;f<w;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}d>>>=O,f-=O,j=0,m=11+(d&127),d>>>=7,f-=7}if(e.have+m>e.nlen+e.ndist){n.msg="invalid bit length repeat",e.mode=bn;break}for(;m--;)e.lens[e.have++]=j}}if(e.mode===bn)break;if(e.lens[256]===0){n.msg="invalid code -- missing end-of-block",e.mode=bn;break}if(e.lenbits=9,C={bits:e.lenbits},N=al(dg,e.lens,0,e.nlen,e.lencode,0,e.work,C),e.lenbits=C.bits,N){n.msg="invalid literal/lengths set",e.mode=bn;break}if(e.distbits=6,e.distcode=e.distdyn,C={bits:e.distbits},N=al(fg,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,C),e.distbits=C.bits,N){n.msg="invalid distances set",e.mode=bn;break}if(e.mode=Ql,t===Kl)break t;case Ql:e.mode=Yl;case Yl:if(a>=6&&u>=258){n.next_out=o,n.avail_out=u,n.next_in=s,n.avail_in=a,e.hold=d,e.bits=f,Mw(n,A),o=n.next_out,i=n.output,u=n.avail_out,s=n.next_in,r=n.input,a=n.avail_in,d=e.hold,f=e.bits,e.mode===vs&&(e.back=-1);break}for(e.back=0;M=e.lencode[d&(1<<e.lenbits)-1],O=M>>>24,Y=M>>>16&255,G=M&65535,!(O<=f);){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(Y&&!(Y&240)){for(W=O,ot=Y,pt=G;M=e.lencode[pt+((d&(1<<W+ot)-1)>>W)],O=M>>>24,Y=M>>>16&255,G=M&65535,!(W+O<=f);){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}d>>>=W,f-=W,e.back+=W}if(d>>>=O,f-=O,e.back+=O,e.length=G,Y===0){e.mode=Pp;break}if(Y&32){e.back=-1,e.mode=vs;break}if(Y&64){n.msg="invalid literal/length code",e.mode=bn;break}e.extra=Y&15,e.mode=Ip;case Ip:if(e.extra){for(w=e.extra;f<w;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}e.length+=d&(1<<e.extra)-1,d>>>=e.extra,f-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=Np;case Np:for(;M=e.distcode[d&(1<<e.distbits)-1],O=M>>>24,Y=M>>>16&255,G=M&65535,!(O<=f);){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(!(Y&240)){for(W=O,ot=Y,pt=G;M=e.distcode[pt+((d&(1<<W+ot)-1)>>W)],O=M>>>24,Y=M>>>16&255,G=M&65535,!(W+O<=f);){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}d>>>=W,f-=W,e.back+=W}if(d>>>=O,f-=O,e.back+=O,Y&64){n.msg="invalid distance code",e.mode=bn;break}e.offset=G,e.extra=Y&15,e.mode=Tp;case Tp:if(e.extra){for(w=e.extra;f<w;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}e.offset+=d&(1<<e.extra)-1,d>>>=e.extra,f-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){n.msg="invalid distance too far back",e.mode=bn;break}e.mode=Lp;case Lp:if(u===0)break t;if(m=A-u,e.offset>m){if(m=e.offset-m,m>e.whave&&e.sane){n.msg="invalid distance too far back",e.mode=bn;break}m>e.wnext?(m-=e.wnext,D=e.wsize-m):D=e.wnext-m,m>e.length&&(m=e.length),R=e.window}else R=i,D=o-e.offset,m=e.length;m>u&&(m=u),u-=m,e.length-=m;do i[o++]=R[D++];while(--m);e.length===0&&(e.mode=Yl);break;case Pp:if(u===0)break t;i[o++]=e.length,u--,e.mode=Yl;break;case Iu:if(e.wrap){for(;f<32;){if(a===0)break t;a--,d|=r[s++]<<f,f+=8}if(A-=u,n.total_out+=A,e.total+=A,e.wrap&4&&A&&(n.adler=e.check=e.flags?Ki(e.check,i,A,o-A):mh(e.check,i,A,o-A)),A=u,e.wrap&4&&(e.flags?d:Rp(d))!==e.check){n.msg="incorrect data check",e.mode=bn;break}d=0,f=0}e.mode=kp;case kp:if(e.wrap&&e.flags){for(;f<32;){if(a===0)break t;a--,d+=r[s++]<<f,f+=8}if(e.wrap&4&&d!==(e.total&4294967295)){n.msg="incorrect length check",e.mode=bn;break}d=0,f=0}e.mode=Cp;case Cp:N=Hw;break t;case bn:N=pg;break t;case gg:return mg;case yg:default:return bi}return n.next_out=o,n.avail_out=u,n.next_in=s,n.avail_in=a,e.hold=d,e.bits=f,(e.wsize||A!==n.avail_out&&e.mode<bn&&(e.mode<Iu||t!==up))&&Ag(n,n.output,n.next_out,A-n.avail_out),b-=n.avail_in,A-=n.avail_out,n.total_in+=b,n.total_out+=A,e.total+=A,e.wrap&4&&A&&(n.adler=e.check=e.flags?Ki(e.check,i,A,n.next_out-A):mh(e.check,i,A,n.next_out-A)),n.data_type=e.bits+(e.last?64:0)+(e.mode===vs?128:0)+(e.mode===Ql||e.mode===Su?256:0),(b===0&&A===0||t===up)&&N===Co&&(N=Gw),N},n_=n=>{if(Bo(n))return bi;let t=n.state;return t.window&&(t.window=null),n.state=null,Co},r_=(n,t)=>{if(Bo(n))return bi;const e=n.state;return e.wrap&2?(e.head=t,t.done=!1,Co):bi},i_=(n,t)=>{const e=t.length;let r,i,s;return Bo(n)||(r=n.state,r.wrap!==0&&r.mode!==Ic)?bi:r.mode===Ic&&(i=1,i=mh(i,t,e,0),i!==r.check)?pg:(s=Ag(n,t,e,e),s?(r.mode=gg,mg):(r.havedict=1,Co))};var s_=bg,o_=wg,a_=vg,l_=Zw,c_=_g,u_=e_,h_=n_,d_=r_,f_=i_,p_="pako inflate (from Nodeca project)",bs={inflateReset:s_,inflateReset2:o_,inflateResetKeep:a_,inflateInit:l_,inflateInit2:c_,inflate:u_,inflateEnd:h_,inflateGetHeader:d_,inflateSetDictionary:f_,inflateInfo:p_};function m_(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var g_=m_;const Eg=Object.prototype.toString,{Z_NO_FLUSH:y_,Z_FINISH:v_,Z_OK:yl,Z_STREAM_END:Lu,Z_NEED_DICT:Pu,Z_STREAM_ERROR:b_,Z_DATA_ERROR:Op,Z_MEM_ERROR:w_}=cg;function Sl(n){this.options=ug.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(n&&n.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ow,this.strm.avail_out=0;let e=bs.inflateInit2(this.strm,t.windowBits);if(e!==yl)throw new Error(gh[e]);if(this.header=new g_,bs.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=yh.string2buf(t.dictionary):Eg.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=bs.inflateSetDictionary(this.strm,t.dictionary),e!==yl)))throw new Error(gh[e])}Sl.prototype.push=function(n,t){const e=this.strm,r=this.options.chunkSize,i=this.options.dictionary;let s,o,a;if(this.ended)return!1;for(t===~~t?o=t:o=t===!0?v_:y_,Eg.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(r),e.next_out=0,e.avail_out=r),s=bs.inflate(e,o),s===Pu&&i&&(s=bs.inflateSetDictionary(e,i),s===yl?s=bs.inflate(e,o):s===Op&&(s=Pu));e.avail_in>0&&s===Lu&&e.state.wrap>0&&n[e.next_in]!==0;)bs.inflateReset(e),s=bs.inflate(e,o);switch(s){case b_:case Op:case Pu:case w_:return this.onEnd(s),this.ended=!0,!1}if(a=e.avail_out,e.next_out&&(e.avail_out===0||s===Lu))if(this.options.to==="string"){let u=yh.utf8border(e.output,e.next_out),d=e.next_out-u,f=yh.buf2string(e.output,u);e.next_out=d,e.avail_out=r-d,d&&e.output.set(e.output.subarray(u,u+d),0),this.onData(f)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out));if(!(s===yl&&a===0)){if(s===Lu)return s=bs.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(e.avail_in===0)break}}return!0};Sl.prototype.onData=function(n){this.chunks.push(n)};Sl.prototype.onEnd=function(n){n===yl&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=ug.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function __(n,t){const e=new Sl(t);if(e.push(n),e.err)throw e.msg||gh[e.err];return e.result}var A_=Sl,E_=__,x_={Inflate:A_,inflate:E_};const{Inflate:S_,inflate:I_}=x_;var Fp=S_,N_=I_;const xg=[];for(let n=0;n<256;n++){let t=n;for(let e=0;e<8;e++)t&1?t=3988292384^t>>>1:t=t>>>1;xg[n]=t}const Mp=4294967295;function T_(n,t,e){let r=n;for(let i=0;i<e;i++)r=xg[(r^t[i])&255]^r>>>8;return r}function L_(n,t){return(T_(Mp,n,t)^Mp)>>>0}function Bp(n,t,e){const r=n.readUint32(),i=L_(new Uint8Array(n.buffer,n.byteOffset+n.offset-t-4,t),t);if(i!==r)throw new Error(`CRC mismatch for chunk ${e}. Expected ${r}, found ${i}`)}function Sg(n,t,e){for(let r=0;r<e;r++)t[r]=n[r]}function Ig(n,t,e,r){let i=0;for(;i<r;i++)t[i]=n[i];for(;i<e;i++)t[i]=n[i]+t[i-r]&255}function Ng(n,t,e,r){let i=0;if(e.length===0)for(;i<r;i++)t[i]=n[i];else for(;i<r;i++)t[i]=n[i]+e[i]&255}function Tg(n,t,e,r,i){let s=0;if(e.length===0){for(;s<i;s++)t[s]=n[s];for(;s<r;s++)t[s]=n[s]+(t[s-i]>>1)&255}else{for(;s<i;s++)t[s]=n[s]+(e[s]>>1)&255;for(;s<r;s++)t[s]=n[s]+(t[s-i]+e[s]>>1)&255}}function Lg(n,t,e,r,i){let s=0;if(e.length===0){for(;s<i;s++)t[s]=n[s];for(;s<r;s++)t[s]=n[s]+t[s-i]&255}else{for(;s<i;s++)t[s]=n[s]+e[s]&255;for(;s<r;s++)t[s]=n[s]+P_(t[s-i],e[s],e[s-i])&255}}function P_(n,t,e){const r=n+t-e,i=Math.abs(r-n),s=Math.abs(r-t),o=Math.abs(r-e);return i<=s&&i<=o?n:s<=o?t:e}function k_(n,t,e,r,i,s){switch(n){case 0:Sg(t,e,i);break;case 1:Ig(t,e,i,s);break;case 2:Ng(t,e,r,i);break;case 3:Tg(t,e,r,i,s);break;case 4:Lg(t,e,r,i,s);break;default:throw new Error(`Unsupported filter: ${n}`)}}const C_=new Uint16Array([255]),R_=new Uint8Array(C_.buffer),D_=R_[0]===255;function O_(n){const{data:t,width:e,height:r,channels:i,depth:s}=n,o=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],a=Math.ceil(s/8)*i,u=new Uint8Array(r*e*a);let d=0;for(let f=0;f<7;f++){const b=o[f],A=Math.ceil((e-b.x)/b.xStep),m=Math.ceil((r-b.y)/b.yStep);if(A<=0||m<=0)continue;const D=A*a,R=new Uint8Array(D);for(let M=0;M<m;M++){const O=t[d++],Y=t.subarray(d,d+D);d+=D;const G=new Uint8Array(D);k_(O,Y,G,R,D,a),R.set(G);for(let W=0;W<A;W++){const ot=b.x+W*b.xStep,pt=b.y+M*b.yStep;if(!(ot>=e||pt>=r))for(let j=0;j<a;j++)u[(pt*e+ot)*a+j]=G[W*a+j]}}}if(s===16){const f=new Uint16Array(u.buffer);if(D_)for(let b=0;b<f.length;b++)f[b]=F_(f[b]);return f}else return u}function F_(n){return(n&255)<<8|n>>8&255}const M_=new Uint16Array([255]),B_=new Uint8Array(M_.buffer),V_=B_[0]===255,j_=new Uint8Array(0);function Vp(n){const{data:t,width:e,height:r,channels:i,depth:s}=n,o=Math.ceil(s/8)*i,a=Math.ceil(s/8*i*e),u=new Uint8Array(r*a);let d=j_,f=0,b,A;for(let m=0;m<r;m++){switch(b=t.subarray(f+1,f+1+a),A=u.subarray(m*a,(m+1)*a),t[f]){case 0:Sg(b,A,a);break;case 1:Ig(b,A,a,o);break;case 2:Ng(b,A,d,a);break;case 3:Tg(b,A,d,a,o);break;case 4:Lg(b,A,d,a,o);break;default:throw new Error(`Unsupported filter: ${t[f]}`)}d=A,f+=a+1}if(s===16){const m=new Uint16Array(u.buffer);if(V_)for(let D=0;D<m.length;D++)m[D]=U_(m[D]);return m}else return u}function U_(n){return(n&255)<<8|n>>8&255}const oc=Uint8Array.of(137,80,78,71,13,10,26,10);function jp(n){if(!$_(n.readBytes(oc.length)))throw new Error("wrong PNG signature")}function $_(n){if(n.length<oc.length)return!1;for(let t=0;t<oc.length;t++)if(n[t]!==oc[t])return!1;return!0}const q_="tEXt",z_=0,Pg=new TextDecoder("latin1");function H_(n){if(G_(n),n.length===0||n.length>79)throw new Error("keyword length must be between 1 and 79")}const W_=/^[\u0000-\u00FF]*$/;function G_(n){if(!W_.test(n))throw new Error("invalid latin1 text")}function K_(n,t,e){const r=kg(t);n[r]=Q_(t,e-r.length-1)}function kg(n){for(n.mark();n.readByte()!==z_;);const t=n.offset;n.reset();const e=Pg.decode(n.readBytes(t-n.offset-1));return n.skip(1),H_(e),e}function Q_(n,t){return Pg.decode(n.readBytes(t))}const ei={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},ku={UNKNOWN:-1,DEFLATE:0},Up={UNKNOWN:-1,ADAPTIVE:0},Cu={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},Xl={NONE:0,BACKGROUND:1,PREVIOUS:2},Ru={SOURCE:0,OVER:1};class Y_ extends fd{constructor(e,r={}){super(e);Je(this,"_checkCrc");Je(this,"_inflator");Je(this,"_png");Je(this,"_apng");Je(this,"_end");Je(this,"_hasPalette");Je(this,"_palette");Je(this,"_hasTransparency");Je(this,"_transparency");Je(this,"_compressionMethod");Je(this,"_filterMethod");Je(this,"_interlaceMethod");Je(this,"_colorType");Je(this,"_isAnimated");Je(this,"_numberOfFrames");Je(this,"_numberOfPlays");Je(this,"_frames");Je(this,"_writingDataChunks");const{checkCrc:i=!1}=r;this._checkCrc=i,this._inflator=new Fp,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=ku.UNKNOWN,this._filterMethod=Up.UNKNOWN,this._interlaceMethod=Cu.UNKNOWN,this._colorType=ei.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(jp(this);!this._end;){const e=this.readUint32(),r=this.readChars(4);this.decodeChunk(e,r)}return this.decodeImage(),this._png}decodeApng(){for(jp(this);!this._end;){const e=this.readUint32(),r=this.readChars(4);this.decodeApngChunk(e,r)}return this.decodeApngImage(),this._apng}decodeChunk(e,r){const i=this.offset;switch(r){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(e);break;case"IDAT":this.decodeIDAT(e);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(e);break;case"iCCP":this.decodeiCCP(e);break;case q_:K_(this._png.text,this,e);break;case"pHYs":this.decodepHYs();break;default:this.skip(e);break}if(this.offset-i!==e)throw new Error(`Length mismatch while decoding chunk ${r}`);this._checkCrc?Bp(this,e+4,r):this.skip(4)}decodeApngChunk(e,r){const i=this.offset;switch(r!=="fdAT"&&r!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),r){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(e);break;default:this.decodeChunk(e,r),this.offset=i+e;break}if(this.offset-i!==e)throw new Error(`Length mismatch while decoding chunk ${r}`);this._checkCrc?Bp(this,e+4,r):this.skip(4)}decodeIHDR(){const e=this._png;e.width=this.readUint32(),e.height=this.readUint32(),e.depth=X_(this.readUint8());const r=this.readUint8();this._colorType=r;let i;switch(r){case ei.GREYSCALE:i=1;break;case ei.TRUECOLOUR:i=3;break;case ei.INDEXED_COLOUR:i=1;break;case ei.GREYSCALE_ALPHA:i=2;break;case ei.TRUECOLOUR_ALPHA:i=4;break;case ei.UNKNOWN:default:throw new Error(`Unknown color type: ${r}`)}if(this._png.channels=i,this._compressionMethod=this.readUint8(),this._compressionMethod!==ku.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const e={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(e)}decodePLTE(e){if(e%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${e}`);const r=e/3;this._hasPalette=!0;const i=[];this._palette=i;for(let s=0;s<r;s++)i.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(e){this._writingDataChunks=!0;const r=e,i=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,i,r)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(e)}decodeFDAT(e){this._writingDataChunks=!0;let r=e,i=this.offset+this.byteOffset;if(i+=4,r-=4,this._inflator.push(new Uint8Array(this.buffer,i,r)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(e)}decodetRNS(e){switch(this._colorType){case ei.GREYSCALE:case ei.TRUECOLOUR:{if(e%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${e}`);if(e/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${e/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(e/2);for(let r=0;r<e/2;r++)this._transparency[r]=this.readUint16();break}case ei.INDEXED_COLOUR:{if(e>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${e} vs ${this._palette.length})`);let r=0;for(;r<e;r++){const i=this.readByte();this._palette[r].push(i)}for(;r<this._palette.length;r++)this._palette[r].push(255);break}case ei.UNKNOWN:case ei.GREYSCALE_ALPHA:case ei.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(e){const r=kg(this),i=this.readUint8();if(i!==ku.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${i}`);const s=this.readBytes(e-r.length-2);this._png.iccEmbeddedProfile={name:r,profile:N_(s)}}decodepHYs(){const e=this.readUint32(),r=this.readUint32(),i=this.readByte();this._png.resolution={x:e,y:r,unit:i}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let e=0;e<this._numberOfFrames;e++){const r={sequenceNumber:this._frames[e].sequenceNumber,delayNumber:this._frames[e].delayNumber,delayDenominator:this._frames[e].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},i=this._frames.at(e);if(i){if(i.data=Vp({data:i.data,width:i.width,height:i.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),e===0||i.xOffset===0&&i.yOffset===0&&i.width===this._png.width&&i.height===this._png.height)r.data=i.data;else{const s=this._apng.frames.at(e-1);this.disposeFrame(i,s,r),this.addFrameDataToCanvas(r,i)}this._apng.frames.push(r)}}return this._apng}disposeFrame(e,r,i){switch(e.disposeOp){case Xl.NONE:break;case Xl.BACKGROUND:for(let s=0;s<this._png.height;s++)for(let o=0;o<this._png.width;o++){const a=(s*e.width+o)*this._png.channels;for(let u=0;u<this._png.channels;u++)i.data[a+u]=0}break;case Xl.PREVIOUS:i.data.set(r.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(e,r){const i=1<<this._png.depth,s=(o,a)=>{const u=((o+r.yOffset)*this._png.width+r.xOffset+a)*this._png.channels,d=(o*r.width+a)*this._png.channels;return{index:u,frameIndex:d}};switch(r.blendOp){case Ru.SOURCE:for(let o=0;o<r.height;o++)for(let a=0;a<r.width;a++){const{index:u,frameIndex:d}=s(o,a);for(let f=0;f<this._png.channels;f++)e.data[u+f]=r.data[d+f]}break;case Ru.OVER:for(let o=0;o<r.height;o++)for(let a=0;a<r.width;a++){const{index:u,frameIndex:d}=s(o,a);for(let f=0;f<this._png.channels;f++){const b=r.data[d+this._png.channels-1]/i,A=f%(this._png.channels-1)===0?1:r.data[d+f],m=Math.floor(b*A+(1-b)*e.data[u+f]);e.data[u+f]+=m}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var r;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const e=this._isAnimated?((r=this._frames)==null?void 0:r.at(0)).data:this._inflator.result;if(this._filterMethod!==Up.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===Cu.NO_INTERLACE)this._png.data=Vp({data:e,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===Cu.ADAM7)this._png.data=O_({data:e,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const e=this._inflator.result,r=this._frames.at(-1);r?r.data=e:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:Xl.NONE,blendOp:Ru.SOURCE,data:e}),this._inflator=new Fp,this._writingDataChunks=!1}}function X_(n){if(n!==1&&n!==2&&n!==4&&n!==8&&n!==16)throw new Error(`invalid bit depth: ${n}`);return n}var $p;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.METRE=1]="METRE"})($p||($p={}));function J_(n,t){return new Y_(n,t).decode()}var he=function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this}();function Du(){he.console&&typeof he.console.log=="function"&&he.console.log.apply(he.console,arguments)}var sn={log:Du,warn:function(n){he.console&&(typeof he.console.warn=="function"?he.console.warn.apply(he.console,arguments):Du.call(null,arguments))},error:function(n){he.console&&(typeof he.console.error=="function"?he.console.error.apply(he.console,arguments):Du(n))}};function Ou(n,t,e){var r=new XMLHttpRequest;r.open("GET",n),r.responseType="blob",r.onload=function(){Eo(r.response,t,e)},r.onerror=function(){sn.error("could not download file")},r.send()}function qp(n){var t=new XMLHttpRequest;t.open("HEAD",n,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function Jl(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(t)}}var Eo=he.saveAs||((typeof window>"u"?"undefined":Ze(window))!=="object"||window!==he?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(n,t,e){var r=he.URL||he.webkitURL,i=document.createElement("a");t=t||n.name||"download",i.download=t,i.rel="noopener",typeof n=="string"?(i.href=n,i.origin!==location.origin?qp(i.href)?Ou(n,t,e):Jl(i,i.target="_blank"):Jl(i)):(i.href=r.createObjectURL(n),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){Jl(i)},0))}:"msSaveOrOpenBlob"in navigator?function(n,t,e){if(t=t||n.name||"download",typeof n=="string")if(qp(n))Ou(n,t,e);else{var r=document.createElement("a");r.href=n,r.target="_blank",setTimeout(function(){Jl(r)})}else navigator.msSaveOrOpenBlob(function(i,s){return s===void 0?s={autoBom:!1}:Ze(s)!=="object"&&(sn.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\uFEFF",i],{type:i.type}):i}(n,e),t)}:function(n,t,e,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),typeof n=="string")return Ou(n,t,e);var i=n.type==="application/octet-stream",s=/constructor/i.test(he.HTMLElement)||he.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s)&&(typeof FileReader>"u"?"undefined":Ze(FileReader))==="object"){var a=new FileReader;a.onloadend=function(){var f=a.result;f=o?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=f:location=f,r=null},a.readAsDataURL(n)}else{var u=he.URL||he.webkitURL,d=u.createObjectURL(n);r?r.location=d:location.href=d,r=null,setTimeout(function(){u.revokeObjectURL(d)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function Cg(n){var t;n=n||"",this.ok=!1,n.charAt(0)=="#"&&(n=n.substr(1,6)),n={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[n=(n=n.replace(/ /g,"")).toLowerCase()]||n;for(var e=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(a){return[parseInt(a[1]),parseInt(a[2]),parseInt(a[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}}],r=0;r<e.length;r++){var i=e[r].re,s=e[r].process,o=i.exec(n);o&&(t=s(o),this.r=t[0],this.g=t[1],this.b=t[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var a=this.r.toString(16),u=this.g.toString(16),d=this.b.toString(16);return a.length==1&&(a="0"+a),u.length==1&&(u="0"+u),d.length==1&&(d="0"+d),"#"+a+u+d}}var ac=he.atob.bind(he),zp=he.btoa.bind(he);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function Fu(n,t){var e=n[0],r=n[1],i=n[2],s=n[3];e=br(e,r,i,s,t[0],7,-680876936),s=br(s,e,r,i,t[1],12,-389564586),i=br(i,s,e,r,t[2],17,606105819),r=br(r,i,s,e,t[3],22,-1044525330),e=br(e,r,i,s,t[4],7,-176418897),s=br(s,e,r,i,t[5],12,1200080426),i=br(i,s,e,r,t[6],17,-1473231341),r=br(r,i,s,e,t[7],22,-45705983),e=br(e,r,i,s,t[8],7,1770035416),s=br(s,e,r,i,t[9],12,-1958414417),i=br(i,s,e,r,t[10],17,-42063),r=br(r,i,s,e,t[11],22,-1990404162),e=br(e,r,i,s,t[12],7,1804603682),s=br(s,e,r,i,t[13],12,-40341101),i=br(i,s,e,r,t[14],17,-1502002290),e=wr(e,r=br(r,i,s,e,t[15],22,1236535329),i,s,t[1],5,-165796510),s=wr(s,e,r,i,t[6],9,-1069501632),i=wr(i,s,e,r,t[11],14,643717713),r=wr(r,i,s,e,t[0],20,-373897302),e=wr(e,r,i,s,t[5],5,-701558691),s=wr(s,e,r,i,t[10],9,38016083),i=wr(i,s,e,r,t[15],14,-660478335),r=wr(r,i,s,e,t[4],20,-405537848),e=wr(e,r,i,s,t[9],5,568446438),s=wr(s,e,r,i,t[14],9,-1019803690),i=wr(i,s,e,r,t[3],14,-187363961),r=wr(r,i,s,e,t[8],20,1163531501),e=wr(e,r,i,s,t[13],5,-1444681467),s=wr(s,e,r,i,t[2],9,-51403784),i=wr(i,s,e,r,t[7],14,1735328473),e=_r(e,r=wr(r,i,s,e,t[12],20,-1926607734),i,s,t[5],4,-378558),s=_r(s,e,r,i,t[8],11,-2022574463),i=_r(i,s,e,r,t[11],16,1839030562),r=_r(r,i,s,e,t[14],23,-35309556),e=_r(e,r,i,s,t[1],4,-1530992060),s=_r(s,e,r,i,t[4],11,1272893353),i=_r(i,s,e,r,t[7],16,-155497632),r=_r(r,i,s,e,t[10],23,-1094730640),e=_r(e,r,i,s,t[13],4,681279174),s=_r(s,e,r,i,t[0],11,-358537222),i=_r(i,s,e,r,t[3],16,-722521979),r=_r(r,i,s,e,t[6],23,76029189),e=_r(e,r,i,s,t[9],4,-640364487),s=_r(s,e,r,i,t[12],11,-421815835),i=_r(i,s,e,r,t[15],16,530742520),e=Ar(e,r=_r(r,i,s,e,t[2],23,-995338651),i,s,t[0],6,-198630844),s=Ar(s,e,r,i,t[7],10,1126891415),i=Ar(i,s,e,r,t[14],15,-1416354905),r=Ar(r,i,s,e,t[5],21,-57434055),e=Ar(e,r,i,s,t[12],6,1700485571),s=Ar(s,e,r,i,t[3],10,-1894986606),i=Ar(i,s,e,r,t[10],15,-1051523),r=Ar(r,i,s,e,t[1],21,-2054922799),e=Ar(e,r,i,s,t[8],6,1873313359),s=Ar(s,e,r,i,t[15],10,-30611744),i=Ar(i,s,e,r,t[6],15,-1560198380),r=Ar(r,i,s,e,t[13],21,1309151649),e=Ar(e,r,i,s,t[4],6,-145523070),s=Ar(s,e,r,i,t[11],10,-1120210379),i=Ar(i,s,e,r,t[2],15,718787259),r=Ar(r,i,s,e,t[9],21,-343485551),n[0]=Gs(e,n[0]),n[1]=Gs(r,n[1]),n[2]=Gs(i,n[2]),n[3]=Gs(s,n[3])}function Kc(n,t,e,r,i,s){return t=Gs(Gs(t,n),Gs(r,s)),Gs(t<<i|t>>>32-i,e)}function br(n,t,e,r,i,s,o){return Kc(t&e|~t&r,n,t,i,s,o)}function wr(n,t,e,r,i,s,o){return Kc(t&r|e&~r,n,t,i,s,o)}function _r(n,t,e,r,i,s,o){return Kc(t^e^r,n,t,i,s,o)}function Ar(n,t,e,r,i,s,o){return Kc(e^(t|~r),n,t,i,s,o)}function Rg(n){var t,e=n.length,r=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=n.length;t+=64)Fu(r,Z_(n.substring(t-64,t)));n=n.substring(t-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n.length;t++)i[t>>2]|=n.charCodeAt(t)<<(t%4<<3);if(i[t>>2]|=128<<(t%4<<3),t>55)for(Fu(r,i),t=0;t<16;t++)i[t]=0;return i[14]=8*e,Fu(r,i),r}function Z_(n){var t,e=[];for(t=0;t<64;t+=4)e[t>>2]=n.charCodeAt(t)+(n.charCodeAt(t+1)<<8)+(n.charCodeAt(t+2)<<16)+(n.charCodeAt(t+3)<<24);return e}var Hp="0123456789abcdef".split("");function t4(n){for(var t="",e=0;e<4;e++)t+=Hp[n>>8*e+4&15]+Hp[n>>8*e&15];return t}function e4(n){return String.fromCharCode(255&n,(65280&n)>>8,(16711680&n)>>16,(4278190080&n)>>24)}function vh(n){return Rg(n).map(e4).join("")}var n4=function(n){for(var t=0;t<n.length;t++)n[t]=t4(n[t]);return n.join("")}(Rg("hello"))!="5d41402abc4b2a76b9719d911017c592";function Gs(n,t){if(n4){var e=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(e>>16)<<16|65535&e}return n+t&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function bh(n,t){var e,r,i,s;if(n!==e){for(var o=(i=n,s=1+(256/n.length|0),new Array(s+1).join(i)),a=[],u=0;u<256;u++)a[u]=u;var d=0;for(u=0;u<256;u++){var f=a[u];d=(d+f+o.charCodeAt(u))%256,a[u]=a[d],a[d]=f}e=n,r=a}else a=r;var b=t.length,A=0,m=0,D="";for(u=0;u<b;u++)m=(m+(f=a[A=(A+1)%256]))%256,a[A]=a[m],a[m]=f,o=a[(a[A]+a[m])%256],D+=String.fromCharCode(t.charCodeAt(u)^o);return D}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var Wp={print:4,modify:8,copy:16,"annot-forms":32};function aa(n,t,e,r){this.v=1,this.r=2;var i=192;n.forEach(function(a){if(Wp.perm!==void 0)throw new Error("Invalid permission: "+a);i+=Wp[a]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var s=(t+this.padding).substr(0,32),o=(e+this.padding).substr(0,32);this.O=this.processOwnerPassword(s,o),this.P=-(1+(255^i)),this.encryptionKey=vh(s+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(r)).substr(0,5),this.U=bh(this.encryptionKey,this.padding)}function la(n){if(/[^\u0000-\u00ff]/.test(n))throw new Error("Invalid PDF Name Object: "+n+", Only accept ASCII characters.");for(var t="",e=n.length,r=0;r<e;r++){var i=n.charCodeAt(r);t+=i<33||i===35||i===37||i===40||i===41||i===47||i===60||i===62||i===91||i===93||i===123||i===125||i>126?"#"+("0"+i.toString(16)).slice(-2):n[r]}return t}function Gp(n){if(Ze(n)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var t={};this.subscribe=function(e,r,i){if(i=i||!1,typeof e!="string"||typeof r!="function"||typeof i!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");t.hasOwnProperty(e)||(t[e]={});var s=Math.random().toString(35);return t[e][s]=[r,!!i],s},this.unsubscribe=function(e){for(var r in t)if(t[r][e])return delete t[r][e],Object.keys(t[r]).length===0&&delete t[r],!0;return!1},this.publish=function(e){if(t.hasOwnProperty(e)){var r=Array.prototype.slice.call(arguments,1),i=[];for(var s in t[e]){var o=t[e][s];try{o[0].apply(n,r)}catch(a){he.console&&sn.error("jsPDF PubSub Error",a.message,a)}o[1]&&i.push(s)}i.length&&i.forEach(this.unsubscribe)}},this.getTopics=function(){return t}}function Nc(n){if(!(this instanceof Nc))return new Nc(n);var t="opacity,stroke-opacity".split(",");for(var e in n)n.hasOwnProperty(e)&&t.indexOf(e)>=0&&(this[e]=n[e]);this.id="",this.objectNumber=-1}function Dg(n,t){this.gState=n,this.matrix=t,this.id="",this.objectNumber=-1}function xo(n,t,e,r,i){if(!(this instanceof xo))return new xo(n,t,e,r,i);this.type=n==="axial"?2:3,this.coords=t,this.colors=e,Dg.call(this,r,i)}function ca(n,t,e,r,i){if(!(this instanceof ca))return new ca(n,t,e,r,i);this.boundingBox=n,this.xStep=t,this.yStep=e,this.stream="",this.cloneIndex=0,Dg.call(this,r,i)}function Xt(n){var t,e=typeof arguments[0]=="string"?arguments[0]:"p",r=arguments[1],i=arguments[2],s=arguments[3],o=[],a=1,u=16,d="S",f=null;Ze(n=n||{})==="object"&&(e=n.orientation,r=n.unit||r,i=n.format||i,s=n.compress||n.compressPdf||s,(f=n.encryption||null)!==null&&(f.userPassword=f.userPassword||"",f.ownerPassword=f.ownerPassword||"",f.userPermissions=f.userPermissions||[]),a=typeof n.userUnit=="number"?Math.abs(n.userUnit):1,n.precision!==void 0&&(t=n.precision),n.floatPrecision!==void 0&&(u=n.floatPrecision),d=n.defaultPathOperation||"S"),o=n.filters||(s===!0?["FlateEncode"]:o),r=r||"mm",e=(""+(e||"P")).toLowerCase();var b=n.putOnlyUsedFonts||!1,A={},m={internal:{},__private__:{}};m.__private__.PubSub=Gp;var D="1.3",R=m.__private__.getPdfVersion=function(){return D};m.__private__.setPdfVersion=function(p){D=p};var M={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};m.__private__.getPageFormats=function(){return M};var O=m.__private__.getPageFormat=function(p){return M[p]};i=i||"a4";var Y="compat",G="advanced",W=Y;function ot(){this.saveGraphicsState(),U(new se(me,0,0,-me,0,ui()*me).toString()+" cm"),this.setFontSize(this.getFontSize()/me),d="n",W=G}function pt(){this.restoreGraphicsState(),d="S",W=Y}var j=m.__private__.combineFontStyleAndFontWeight=function(p,I){if(p=="bold"&&I=="normal"||p=="bold"&&I==400||p=="normal"&&I=="italic"||p=="bold"&&I=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return I&&(p=I==400||I==="normal"?p==="italic"?"italic":"normal":I!=700&&I!=="bold"||p!=="normal"?(I==700?"bold":I)+""+p:"bold"),p};m.advancedAPI=function(p){var I=W===Y;return I&&ot.call(this),typeof p!="function"||(p(this),I&&pt.call(this)),this},m.compatAPI=function(p){var I=W===G;return I&&pt.call(this),typeof p!="function"||(p(this),I&&ot.call(this)),this},m.isAdvancedAPI=function(){return W===G};var N,E=function(p){if(W!==G)throw new Error(p+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},C=m.roundToPrecision=m.__private__.roundToPrecision=function(p,I){var $=t||I;if(isNaN(p)||isNaN($))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return p.toFixed($).replace(/0+$/,"")};N=m.hpf=m.__private__.hpf=typeof u=="number"?function(p){if(isNaN(p))throw new Error("Invalid argument passed to jsPDF.hpf");return C(p,u)}:u==="smart"?function(p){if(isNaN(p))throw new Error("Invalid argument passed to jsPDF.hpf");return C(p,p>-1&&p<1?16:5)}:function(p){if(isNaN(p))throw new Error("Invalid argument passed to jsPDF.hpf");return C(p,16)};var w=m.f2=m.__private__.f2=function(p){if(isNaN(p))throw new Error("Invalid argument passed to jsPDF.f2");return C(p,2)},x=m.__private__.f3=function(p){if(isNaN(p))throw new Error("Invalid argument passed to jsPDF.f3");return C(p,3)},S=m.scale=m.__private__.scale=function(p){if(isNaN(p))throw new Error("Invalid argument passed to jsPDF.scale");return W===Y?p*me:W===G?p:void 0},Q=function(p){return S(function(I){return W===Y?ui()-I:W===G?I:void 0}(p))};m.__private__.setPrecision=m.setPrecision=function(p){typeof parseInt(p,10)=="number"&&(t=parseInt(p,10))};var ut,yt="00000000000000000000000000000000",mt=m.__private__.getFileId=function(){return yt},at=m.__private__.setFileId=function(p){return yt=p!==void 0&&/^[a-fA-F0-9]{32}$/.test(p)?p.toUpperCase():yt.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),f!==null&&(xn=new aa(f.userPermissions,f.userPassword,f.ownerPassword,yt)),yt};m.setFileId=function(p){return at(p),this},m.getFileId=function(){return mt()};var vt=m.__private__.convertDateToPDFDate=function(p){var I=p.getTimezoneOffset(),$=I<0?"+":"-",X=Math.floor(Math.abs(I/60)),et=Math.abs(I%60),gt=[$,K(X),"'",K(et),"'"].join("");return["D:",p.getFullYear(),K(p.getMonth()+1),K(p.getDate()),K(p.getHours()),K(p.getMinutes()),K(p.getSeconds()),gt].join("")},kt=m.__private__.convertPDFDateToDate=function(p){var I=parseInt(p.substr(2,4),10),$=parseInt(p.substr(6,2),10)-1,X=parseInt(p.substr(8,2),10),et=parseInt(p.substr(10,2),10),gt=parseInt(p.substr(12,2),10),Et=parseInt(p.substr(14,2),10);return new Date(I,$,X,et,gt,Et,0)},xt=m.__private__.setCreationDate=function(p){var I;if(p===void 0&&(p=new Date),p instanceof Date)I=vt(p);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(p))throw new Error("Invalid argument passed to jsPDF.setCreationDate");I=p}return ut=I},P=m.__private__.getCreationDate=function(p){var I=ut;return p==="jsDate"&&(I=kt(ut)),I};m.setCreationDate=function(p){return xt(p),this},m.getCreationDate=function(p){return P(p)};var H,K=m.__private__.padd2=function(p){return("0"+parseInt(p)).slice(-2)},J=m.__private__.padd2Hex=function(p){return("00"+(p=p.toString())).substr(p.length)},nt=0,st=[],dt=[],ft=0,_t=[],Lt=[],Ft=!1,Ot=dt;m.__private__.setCustomOutputDestination=function(p){Ft=!0,Ot=p};var Gt=function(p){Ft||(Ot=p)};m.__private__.resetCustomOutputDestination=function(){Ft=!1,Ot=dt};var U=m.__private__.out=function(p){return p=p.toString(),ft+=p.length+1,Ot.push(p),Ot},Dt=m.__private__.write=function(p){return U(arguments.length===1?p.toString():Array.prototype.join.call(arguments," "))},Ae=m.__private__.getArrayBuffer=function(p){for(var I=p.length,$=new ArrayBuffer(I),X=new Uint8Array($);I--;)X[I]=p.charCodeAt(I);return $},ie=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];m.__private__.getStandardFonts=function(){return ie};var It=n.fontSize||16;m.__private__.setFontSize=m.setFontSize=function(p){return It=W===G?p/me:p,this};var Zt,Mt=m.__private__.getFontSize=m.getFontSize=function(){return W===Y?It:It*me},ee=n.R2L||!1;m.__private__.setR2L=m.setR2L=function(p){return ee=p,this},m.__private__.getR2L=m.getR2L=function(){return ee};var Qt,Me=m.__private__.setZoomMode=function(p){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(p))Zt=p;else if(isNaN(p)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(p)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+p+'" is not recognized.');Zt=p}else Zt=parseInt(p,10)};m.__private__.getZoomMode=function(){return Zt};var Pe,Wt=m.__private__.setPageMode=function(p){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(p)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+p+'" is not recognized.');Qt=p};m.__private__.getPageMode=function(){return Qt};var le=m.__private__.setLayoutMode=function(p){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(p)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+p+'" is not recognized.');Pe=p};m.__private__.getLayoutMode=function(){return Pe},m.__private__.setDisplayMode=m.setDisplayMode=function(p,I,$){return Me(p),le(I),Wt($),this};var Se={title:"",subject:"",author:"",keywords:"",creator:""};m.__private__.getDocumentProperty=function(p){if(Object.keys(Se).indexOf(p)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return Se[p]},m.__private__.getDocumentProperties=function(){return Se},m.__private__.setDocumentProperties=m.setProperties=m.setDocumentProperties=function(p){for(var I in Se)Se.hasOwnProperty(I)&&p[I]&&(Se[I]=p[I]);return this},m.__private__.setDocumentProperty=function(p,I){if(Object.keys(Se).indexOf(p)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return Se[p]=I};var $t,me,Kt,en,De,Ee={},we={},on=[],te={},ze={},oe={},fe={},He=null,xe=0,ne=[],ke=new Gp(m),Fi=n.hotfixes||[],kn={},ii={},ur=[],se=function p(I,$,X,et,gt,Et){if(!(this instanceof p))return new p(I,$,X,et,gt,Et);isNaN(I)&&(I=1),isNaN($)&&($=0),isNaN(X)&&(X=0),isNaN(et)&&(et=1),isNaN(gt)&&(gt=0),isNaN(Et)&&(Et=0),this._matrix=[I,$,X,et,gt,Et]};Object.defineProperty(se.prototype,"sx",{get:function(){return this._matrix[0]},set:function(p){this._matrix[0]=p}}),Object.defineProperty(se.prototype,"shy",{get:function(){return this._matrix[1]},set:function(p){this._matrix[1]=p}}),Object.defineProperty(se.prototype,"shx",{get:function(){return this._matrix[2]},set:function(p){this._matrix[2]=p}}),Object.defineProperty(se.prototype,"sy",{get:function(){return this._matrix[3]},set:function(p){this._matrix[3]=p}}),Object.defineProperty(se.prototype,"tx",{get:function(){return this._matrix[4]},set:function(p){this._matrix[4]=p}}),Object.defineProperty(se.prototype,"ty",{get:function(){return this._matrix[5]},set:function(p){this._matrix[5]=p}}),Object.defineProperty(se.prototype,"a",{get:function(){return this._matrix[0]},set:function(p){this._matrix[0]=p}}),Object.defineProperty(se.prototype,"b",{get:function(){return this._matrix[1]},set:function(p){this._matrix[1]=p}}),Object.defineProperty(se.prototype,"c",{get:function(){return this._matrix[2]},set:function(p){this._matrix[2]=p}}),Object.defineProperty(se.prototype,"d",{get:function(){return this._matrix[3]},set:function(p){this._matrix[3]=p}}),Object.defineProperty(se.prototype,"e",{get:function(){return this._matrix[4]},set:function(p){this._matrix[4]=p}}),Object.defineProperty(se.prototype,"f",{get:function(){return this._matrix[5]},set:function(p){this._matrix[5]=p}}),Object.defineProperty(se.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(se.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(se.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(se.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),se.prototype.join=function(p){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(N).join(p)},se.prototype.multiply=function(p){var I=p.sx*this.sx+p.shy*this.shx,$=p.sx*this.shy+p.shy*this.sy,X=p.shx*this.sx+p.sy*this.shx,et=p.shx*this.shy+p.sy*this.sy,gt=p.tx*this.sx+p.ty*this.shx+this.tx,Et=p.tx*this.shy+p.ty*this.sy+this.ty;return new se(I,$,X,et,gt,Et)},se.prototype.decompose=function(){var p=this.sx,I=this.shy,$=this.shx,X=this.sy,et=this.tx,gt=this.ty,Et=Math.sqrt(p*p+I*I),Bt=(p/=Et)*$+(I/=Et)*X;$-=p*Bt,X-=I*Bt;var Vt=Math.sqrt($*$+X*X);return Bt/=Vt,p*(X/=Vt)<I*($/=Vt)&&(p=-p,I=-I,Bt=-Bt,Et=-Et),{scale:new se(Et,0,0,Vt,0,0),translate:new se(1,0,0,1,et,gt),rotate:new se(p,I,-I,p,0,0),skew:new se(1,0,Bt,1,0,0)}},se.prototype.toString=function(p){return this.join(" ")},se.prototype.inversed=function(){var p=this.sx,I=this.shy,$=this.shx,X=this.sy,et=this.tx,gt=this.ty,Et=1/(p*X-I*$),Bt=X*Et,Vt=-I*Et,ue=-$*Et,ce=p*Et;return new se(Bt,Vt,ue,ce,-Bt*et-ue*gt,-Vt*et-ce*gt)},se.prototype.applyToPoint=function(p){var I=p.x*this.sx+p.y*this.shx+this.tx,$=p.x*this.shy+p.y*this.sy+this.ty;return new zi(I,$)},se.prototype.applyToRectangle=function(p){var I=this.applyToPoint(p),$=this.applyToPoint(new zi(p.x+p.w,p.y+p.h));return new Hi(I.x,I.y,$.x-I.x,$.y-I.y)},se.prototype.clone=function(){var p=this.sx,I=this.shy,$=this.shx,X=this.sy,et=this.tx,gt=this.ty;return new se(p,I,$,X,et,gt)},m.Matrix=se;var fn=m.matrixMult=function(p,I){return I.multiply(p)},si=new se(1,0,0,1,0,0);m.unitMatrix=m.identityMatrix=si;var Xn=function(p,I){if(!ze[p]){var $=(I instanceof xo?"Sh":"P")+(Object.keys(te).length+1).toString(10);I.id=$,ze[p]=$,te[$]=I,ke.publish("addPattern",I)}};m.ShadingPattern=xo,m.TilingPattern=ca,m.addShadingPattern=function(p,I){return E("addShadingPattern()"),Xn(p,I),this},m.beginTilingPattern=function(p){E("beginTilingPattern()"),Nr(p.boundingBox[0],p.boundingBox[1],p.boundingBox[2]-p.boundingBox[0],p.boundingBox[3]-p.boundingBox[1],p.matrix)},m.endTilingPattern=function(p,I){E("endTilingPattern()"),I.stream=Lt[H].join(`
`),Xn(p,I),ke.publish("endTilingPattern",I),ur.pop().restore()};var Jn,yn=m.__private__.newObject=function(){var p=jn();return vn(p,!0),p},jn=m.__private__.newObjectDeferred=function(){return nt++,st[nt]=function(){return ft},nt},vn=function(p,I){return I=typeof I=="boolean"&&I,st[p]=ft,I&&U(p+" 0 obj"),p},rs=m.__private__.newAdditionalObject=function(){var p={objId:jn(),content:""};return _t.push(p),p},Mi=jn(),hr=jn(),zr=m.__private__.decodeColorString=function(p){var I=p.split(" ");if(I.length!==2||I[1]!=="g"&&I[1]!=="G")I.length!==5||I[4]!=="k"&&I[4]!=="K"||(I=[(1-I[0])*(1-I[3]),(1-I[1])*(1-I[3]),(1-I[2])*(1-I[3]),"r"]);else{var $=parseFloat(I[0]);I=[$,$,$,"r"]}for(var X="#",et=0;et<3;et++)X+=("0"+Math.floor(255*parseFloat(I[et])).toString(16)).slice(-2);return X},Sr=m.__private__.encodeColorString=function(p){var I;typeof p=="string"&&(p={ch1:p});var $=p.ch1,X=p.ch2,et=p.ch3,gt=p.ch4,Et=p.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof $=="string"&&$.charAt(0)!=="#"){var Bt=new Cg($);if(Bt.ok)$=Bt.toHex();else if(!/^\d*\.?\d*$/.test($))throw new Error('Invalid color "'+$+'" passed to jsPDF.encodeColorString.')}if(typeof $=="string"&&/^#[0-9A-Fa-f]{3}$/.test($)&&($="#"+$[1]+$[1]+$[2]+$[2]+$[3]+$[3]),typeof $=="string"&&/^#[0-9A-Fa-f]{6}$/.test($)){var Vt=parseInt($.substr(1),16);$=Vt>>16&255,X=Vt>>8&255,et=255&Vt}if(X===void 0||gt===void 0&&$===X&&X===et)I=typeof $=="string"?$+" "+Et[0]:p.precision===2?w($/255)+" "+Et[0]:x($/255)+" "+Et[0];else if(gt===void 0||Ze(gt)==="object"){if(gt&&!isNaN(gt.a)&&gt.a===0)return["1.","1.","1.",Et[1]].join(" ");I=typeof $=="string"?[$,X,et,Et[1]].join(" "):p.precision===2?[w($/255),w(X/255),w(et/255),Et[1]].join(" "):[x($/255),x(X/255),x(et/255),Et[1]].join(" ")}else I=typeof $=="string"?[$,X,et,gt,Et[2]].join(" "):p.precision===2?[w($),w(X),w(et),w(gt),Et[2]].join(" "):[x($),x(X),x(et),x(gt),Et[2]].join(" ");return I},dr=m.__private__.getFilters=function(){return o},Cn=m.__private__.putStream=function(p){var I=(p=p||{}).data||"",$=p.filters||dr(),X=p.alreadyAppliedFilters||[],et=p.addLength1||!1,gt=I.length,Et=p.objectId,Bt=function(Ge){return Ge};if(f!==null&&Et===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");f!==null&&(Bt=xn.encryptor(Et,0));var Vt={};$===!0&&($=["FlateEncode"]);var ue=p.additionalKeyValues||[],ce=(Vt=Xt.API.processDataByFilters!==void 0?Xt.API.processDataByFilters(I,$):{data:I,reverseChain:[]}).reverseChain+(Array.isArray(X)?X.join(" "):X.toString());if(Vt.data.length!==0&&(ue.push({key:"Length",value:Vt.data.length}),et===!0&&ue.push({key:"Length1",value:gt})),ce.length!=0)if(ce.split("/").length-1==1)ue.push({key:"Filter",value:ce});else{ue.push({key:"Filter",value:"["+ce+"]"});for(var Ce=0;Ce<ue.length;Ce+=1)if(ue[Ce].key==="DecodeParms"){for(var An=[],We=0;We<Vt.reverseChain.split("/").length-1;We+=1)An.push("null");An.push(ue[Ce].value),ue[Ce].value="["+An.join(" ")+"]"}}U("<<");for(var qe=0;qe<ue.length;qe++)U("/"+ue[qe].key+" "+ue[qe].value);U(">>"),Vt.data.length!==0&&(U("stream"),U(Bt(Vt.data)),U("endstream"))},Bi=m.__private__.putPage=function(p){var I=p.number,$=p.data,X=p.objId,et=p.contentsObjId;vn(X,!0),U("<</Type /Page"),U("/Parent "+p.rootDictionaryObjId+" 0 R"),U("/Resources "+p.resourceDictionaryObjId+" 0 R"),U("/MediaBox ["+parseFloat(N(p.mediaBox.bottomLeftX))+" "+parseFloat(N(p.mediaBox.bottomLeftY))+" "+N(p.mediaBox.topRightX)+" "+N(p.mediaBox.topRightY)+"]"),p.cropBox!==null&&U("/CropBox ["+N(p.cropBox.bottomLeftX)+" "+N(p.cropBox.bottomLeftY)+" "+N(p.cropBox.topRightX)+" "+N(p.cropBox.topRightY)+"]"),p.bleedBox!==null&&U("/BleedBox ["+N(p.bleedBox.bottomLeftX)+" "+N(p.bleedBox.bottomLeftY)+" "+N(p.bleedBox.topRightX)+" "+N(p.bleedBox.topRightY)+"]"),p.trimBox!==null&&U("/TrimBox ["+N(p.trimBox.bottomLeftX)+" "+N(p.trimBox.bottomLeftY)+" "+N(p.trimBox.topRightX)+" "+N(p.trimBox.topRightY)+"]"),p.artBox!==null&&U("/ArtBox ["+N(p.artBox.bottomLeftX)+" "+N(p.artBox.bottomLeftY)+" "+N(p.artBox.topRightX)+" "+N(p.artBox.topRightY)+"]"),typeof p.userUnit=="number"&&p.userUnit!==1&&U("/UserUnit "+p.userUnit),ke.publish("putPage",{objId:X,pageContext:ne[I],pageNumber:I,page:$}),U("/Contents "+et+" 0 R"),U(">>"),U("endobj");var gt=$.join(`
`);return W===G&&(gt+=`
Q`),vn(et,!0),Cn({data:gt,filters:dr(),objectId:et}),U("endobj"),X},Hr=m.__private__.putPages=function(){var p,I,$=[];for(p=1;p<=xe;p++)ne[p].objId=jn(),ne[p].contentsObjId=jn();for(p=1;p<=xe;p++)$.push(Bi({number:p,data:Lt[p],objId:ne[p].objId,contentsObjId:ne[p].contentsObjId,mediaBox:ne[p].mediaBox,cropBox:ne[p].cropBox,bleedBox:ne[p].bleedBox,trimBox:ne[p].trimBox,artBox:ne[p].artBox,userUnit:ne[p].userUnit,rootDictionaryObjId:Mi,resourceDictionaryObjId:hr}));vn(Mi,!0),U("<</Type /Pages");var X="/Kids [";for(I=0;I<xe;I++)X+=$[I]+" 0 R ";U(X+"]"),U("/Count "+xe),U(">>"),U("endobj"),ke.publish("postPutPages")},wi=function(p){ke.publish("putFont",{font:p,out:U,newObject:yn,putStream:Cn}),p.isAlreadyPutted!==!0&&(p.objectNumber=yn(),U("<<"),U("/Type /Font"),U("/BaseFont /"+la(p.postScriptName)),U("/Subtype /Type1"),typeof p.encoding=="string"&&U("/Encoding /"+p.encoding),U("/FirstChar 32"),U("/LastChar 255"),U(">>"),U("endobj"))},Vi=function(p){p.objectNumber=yn();var I=[];I.push({key:"Type",value:"/XObject"}),I.push({key:"Subtype",value:"/Form"}),I.push({key:"BBox",value:"["+[N(p.x),N(p.y),N(p.x+p.width),N(p.y+p.height)].join(" ")+"]"}),I.push({key:"Matrix",value:"["+p.matrix.toString()+"]"});var $=p.pages[1].join(`
`);Cn({data:$,additionalKeyValues:I,objectId:p.objectNumber}),U("endobj")},is=function(p,I){I||(I=21);var $=yn(),X=function(Et,Bt){var Vt,ue=[],ce=1/(Bt-1);for(Vt=0;Vt<1;Vt+=ce)ue.push(Vt);if(ue.push(1),Et[0].offset!=0){var Ce={offset:0,color:Et[0].color};Et.unshift(Ce)}if(Et[Et.length-1].offset!=1){var An={offset:1,color:Et[Et.length-1].color};Et.push(An)}for(var We="",qe=0,Ge=0;Ge<ue.length;Ge++){for(Vt=ue[Ge];Vt>Et[qe+1].offset;)qe++;var Re=Et[qe].offset,an=(Vt-Re)/(Et[qe+1].offset-Re),zn=Et[qe].color,pr=Et[qe+1].color;We+=J(Math.round((1-an)*zn[0]+an*pr[0]).toString(16))+J(Math.round((1-an)*zn[1]+an*pr[1]).toString(16))+J(Math.round((1-an)*zn[2]+an*pr[2]).toString(16))}return We.trim()}(p.colors,I),et=[];et.push({key:"FunctionType",value:"0"}),et.push({key:"Domain",value:"[0.0 1.0]"}),et.push({key:"Size",value:"["+I+"]"}),et.push({key:"BitsPerSample",value:"8"}),et.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),et.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),Cn({data:X,additionalKeyValues:et,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:$}),U("endobj"),p.objectNumber=yn(),U("<< /ShadingType "+p.type),U("/ColorSpace /DeviceRGB");var gt="/Coords ["+N(parseFloat(p.coords[0]))+" "+N(parseFloat(p.coords[1]))+" ";p.type===2?gt+=N(parseFloat(p.coords[2]))+" "+N(parseFloat(p.coords[3])):gt+=N(parseFloat(p.coords[2]))+" "+N(parseFloat(p.coords[3]))+" "+N(parseFloat(p.coords[4]))+" "+N(parseFloat(p.coords[5])),U(gt+="]"),p.matrix&&U("/Matrix ["+p.matrix.toString()+"]"),U("/Function "+$+" 0 R"),U("/Extend [true true]"),U(">>"),U("endobj")},ss=function(p,I){var $=jn(),X=yn();I.push({resourcesOid:$,objectOid:X}),p.objectNumber=X;var et=[];et.push({key:"Type",value:"/Pattern"}),et.push({key:"PatternType",value:"1"}),et.push({key:"PaintType",value:"1"}),et.push({key:"TilingType",value:"1"}),et.push({key:"BBox",value:"["+p.boundingBox.map(N).join(" ")+"]"}),et.push({key:"XStep",value:N(p.xStep)}),et.push({key:"YStep",value:N(p.yStep)}),et.push({key:"Resources",value:$+" 0 R"}),p.matrix&&et.push({key:"Matrix",value:"["+p.matrix.toString()+"]"}),Cn({data:p.stream,additionalKeyValues:et,objectId:p.objectNumber}),U("endobj")},La=function(p){for(var I in p.objectNumber=yn(),U("<<"),p)switch(I){case"opacity":U("/ca "+w(p[I]));break;case"stroke-opacity":U("/CA "+w(p[I]))}U(">>"),U("endobj")},ji=function(p){vn(p.resourcesOid,!0),U("<<"),U("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),function(){for(var I in U("/Font <<"),Ee)Ee.hasOwnProperty(I)&&(b===!1||b===!0&&A.hasOwnProperty(I))&&U("/"+I+" "+Ee[I].objectNumber+" 0 R");U(">>")}(),function(){if(Object.keys(te).length>0){for(var I in U("/Shading <<"),te)te.hasOwnProperty(I)&&te[I]instanceof xo&&te[I].objectNumber>=0&&U("/"+I+" "+te[I].objectNumber+" 0 R");ke.publish("putShadingPatternDict"),U(">>")}}(),function(I){if(Object.keys(te).length>0){for(var $ in U("/Pattern <<"),te)te.hasOwnProperty($)&&te[$]instanceof m.TilingPattern&&te[$].objectNumber>=0&&te[$].objectNumber<I&&U("/"+$+" "+te[$].objectNumber+" 0 R");ke.publish("putTilingPatternDict"),U(">>")}}(p.objectOid),function(){if(Object.keys(oe).length>0){var I;for(I in U("/ExtGState <<"),oe)oe.hasOwnProperty(I)&&oe[I].objectNumber>=0&&U("/"+I+" "+oe[I].objectNumber+" 0 R");ke.publish("putGStateDict"),U(">>")}}(),function(){for(var I in U("/XObject <<"),kn)kn.hasOwnProperty(I)&&kn[I].objectNumber>=0&&U("/"+I+" "+kn[I].objectNumber+" 0 R");ke.publish("putXobjectDict"),U(">>")}(),U(">>"),U("endobj")},ro=function(p){we[p.fontName]=we[p.fontName]||{},we[p.fontName][p.fontStyle]=p.id},xs=function(p,I,$,X,et){var gt={id:"F"+(Object.keys(Ee).length+1).toString(10),postScriptName:p,fontName:I,fontStyle:$,encoding:X,isStandardFont:et||!1,metadata:{}};return ke.publish("addFont",{font:gt,instance:this}),Ee[gt.id]=gt,ro(gt),gt.id},Zn=m.__private__.pdfEscape=m.pdfEscape=function(p,I){return function($,X){var et,gt,Et,Bt,Vt,ue,ce,Ce,An;if(Et=(X=X||{}).sourceEncoding||"Unicode",Vt=X.outputEncoding,(X.autoencode||Vt)&&Ee[$t].metadata&&Ee[$t].metadata[Et]&&Ee[$t].metadata[Et].encoding&&(Bt=Ee[$t].metadata[Et].encoding,!Vt&&Ee[$t].encoding&&(Vt=Ee[$t].encoding),!Vt&&Bt.codePages&&(Vt=Bt.codePages[0]),typeof Vt=="string"&&(Vt=Bt[Vt]),Vt)){for(ce=!1,ue=[],et=0,gt=$.length;et<gt;et++)(Ce=Vt[$.charCodeAt(et)])?ue.push(String.fromCharCode(Ce)):ue.push($[et]),ue[et].charCodeAt(0)>>8&&(ce=!0);$=ue.join("")}for(et=$.length;ce===void 0&&et!==0;)$.charCodeAt(et-1)>>8&&(ce=!0),et--;if(!ce)return $;for(ue=X.noBOM?[]:[254,255],et=0,gt=$.length;et<gt;et++){if((An=(Ce=$.charCodeAt(et))>>8)>>8)throw new Error("Character at position "+et+" of string '"+$+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");ue.push(An),ue.push(Ce-(An<<8))}return String.fromCharCode.apply(void 0,ue)}(p,I).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Wr=m.__private__.beginPage=function(p){Lt[++xe]=[],ne[xe]={objId:0,contentsObjId:0,userUnit:Number(a),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(p[0]),topRightY:Number(p[1])}},so(xe),Gt(Lt[H])},Ss=function(p,I){var $,X,et;switch(e=I||e,typeof p=="string"&&($=O(p.toLowerCase()),Array.isArray($)&&(X=$[0],et=$[1])),Array.isArray(p)&&(X=p[0]*me,et=p[1]*me),isNaN(X)&&(X=i[0],et=i[1]),(X>14400||et>14400)&&(sn.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),X=Math.min(14400,X),et=Math.min(14400,et)),i=[X,et],e.substr(0,1)){case"l":et>X&&(i=[et,X]);break;case"p":X>et&&(i=[et,X])}Wr(i),Da(re),U(li),uo!==0&&U(uo+" J"),xi!==0&&U(xi+" j"),ke.publish("addPage",{pageNumber:xe})},io=function(p){p>0&&p<=xe&&(Lt.splice(p,1),ne.splice(p,1),xe--,H>xe&&(H=xe),this.setPage(H))},so=function(p){p>0&&p<=xe&&(H=p)},oo=m.__private__.getNumberOfPages=m.getNumberOfPages=function(){return Lt.length-1},ao=function(p,I,$){var X,et=void 0;return $=$||{},p=p!==void 0?p:Ee[$t].fontName,I=I!==void 0?I:Ee[$t].fontStyle,X=p.toLowerCase(),we[X]!==void 0&&we[X][I]!==void 0?et=we[X][I]:we[p]!==void 0&&we[p][I]!==void 0?et=we[p][I]:$.disableWarning===!1&&sn.warn("Unable to look up font label for font '"+p+"', '"+I+"'. Refer to getFontList() for available fonts."),et||$.noFallback||(et=we.times[I])==null&&(et=we.times.normal),et},Dr=m.__private__.putInfo=function(){var p=yn(),I=function(X){return X};for(var $ in f!==null&&(I=xn.encryptor(p,0)),U("<<"),U("/Producer ("+Zn(I("jsPDF "+Xt.version))+")"),Se)Se.hasOwnProperty($)&&Se[$]&&U("/"+$.substr(0,1).toUpperCase()+$.substr(1)+" ("+Zn(I(Se[$]))+")");U("/CreationDate ("+Zn(I(ut))+")"),U(">>"),U("endobj")},Ui=m.__private__.putCatalog=function(p){var I=(p=p||{}).rootDictionaryObjId||Mi;switch(yn(),U("<<"),U("/Type /Catalog"),U("/Pages "+I+" 0 R"),Zt||(Zt="fullwidth"),Zt){case"fullwidth":U("/OpenAction [3 0 R /FitH null]");break;case"fullheight":U("/OpenAction [3 0 R /FitV null]");break;case"fullpage":U("/OpenAction [3 0 R /Fit]");break;case"original":U("/OpenAction [3 0 R /XYZ null null 1]");break;default:var $=""+Zt;$.substr($.length-1)==="%"&&(Zt=parseInt(Zt)/100),typeof Zt=="number"&&U("/OpenAction [3 0 R /XYZ null null "+w(Zt)+"]")}switch(Pe||(Pe="continuous"),Pe){case"continuous":U("/PageLayout /OneColumn");break;case"single":U("/PageLayout /SinglePage");break;case"two":case"twoleft":U("/PageLayout /TwoColumnLeft");break;case"tworight":U("/PageLayout /TwoColumnRight")}Qt&&U("/PageMode /"+Qt),ke.publish("putCatalog"),U(">>"),U("endobj")},jo=m.__private__.putTrailer=function(){U("trailer"),U("<<"),U("/Size "+(nt+1)),U("/Root "+nt+" 0 R"),U("/Info "+(nt-1)+" 0 R"),f!==null&&U("/Encrypt "+xn.oid+" 0 R"),U("/ID [ <"+yt+"> <"+yt+"> ]"),U(">>")},_n=m.__private__.putHeader=function(){U("%PDF-"+D),U("%ºß¬à")},Uo=m.__private__.putXRef=function(){var p="0000000000";U("xref"),U("0 "+(nt+1)),U("0000000000 65535 f ");for(var I=1;I<=nt;I++)typeof st[I]=="function"?U((p+st[I]()).slice(-10)+" 00000 n "):st[I]!==void 0?U((p+st[I]).slice(-10)+" 00000 n "):U("0000000000 00000 n ")},oi=m.__private__.buildDocument=function(){var p;nt=0,ft=0,dt=[],st=[],_t=[],Mi=jn(),hr=jn(),Gt(dt),ke.publish("buildDocument"),_n(),Hr(),function(){ke.publish("putAdditionalObjects");for(var $=0;$<_t.length;$++){var X=_t[$];vn(X.objId,!0),U(X.content),U("endobj")}ke.publish("postPutAdditionalObjects")}(),p=[],function(){for(var $ in Ee)Ee.hasOwnProperty($)&&(b===!1||b===!0&&A.hasOwnProperty($))&&wi(Ee[$])}(),function(){var $;for($ in oe)oe.hasOwnProperty($)&&La(oe[$])}(),function(){for(var $ in kn)kn.hasOwnProperty($)&&Vi(kn[$])}(),function($){var X;for(X in te)te.hasOwnProperty(X)&&(te[X]instanceof xo?is(te[X]):te[X]instanceof ca&&ss(te[X],$))}(p),ke.publish("putResources"),p.forEach(ji),ji({resourcesOid:hr,objectOid:Number.MAX_SAFE_INTEGER}),ke.publish("postPutResources"),f!==null&&(xn.oid=yn(),U("<<"),U("/Filter /Standard"),U("/V "+xn.v),U("/R "+xn.r),U("/U <"+xn.toHexString(xn.U)+">"),U("/O <"+xn.toHexString(xn.O)+">"),U("/P "+xn.P),U(">>"),U("endobj")),Dr(),Ui();var I=ft;return Uo(),jo(),U("startxref"),U(""+I),U("%%EOF"),Gt(Lt[H]),dt.join(`
`)},os=m.__private__.getBlob=function(p){return new Blob([Ae(p)],{type:"application/pdf"})},Is=function(p){for(;p.firstChild;)p.removeChild(p.firstChild)},Ir=function(p){var I,$=p.document,X=$.documentElement,et=$.head,gt=$.body;return et||(et=$.createElement("head"),X.appendChild(et)),gt||(gt=$.createElement("body"),X.appendChild(gt)),Is(et),Is(gt),(I=$.createElement("style")).appendChild($.createTextNode("html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}")),et.appendChild(I),{document:$,body:gt}},Or=m.output=m.__private__.output=(Jn=function(p,I){switch(typeof(I=I||{})=="string"?I={filename:I}:I.filename=I.filename||"generated.pdf",p){case void 0:return oi();case"save":m.save(I.filename);break;case"arraybuffer":return Ae(oi());case"blob":return os(oi());case"bloburi":case"bloburl":if(he.URL!==void 0&&typeof he.URL.createObjectURL=="function")return he.URL&&he.URL.createObjectURL(os(oi()))||void 0;sn.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var $="",X=oi();try{$=zp(X)}catch{$=zp(unescape(encodeURIComponent(X)))}return"data:application/pdf;filename="+encodeURIComponent(I.filename)+";base64,"+$;case"pdfobjectnewwindow":if(Object.prototype.toString.call(he)==="[object Window]"){var et="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",gt=!I.pdfObjectUrl;gt||(et=I.pdfObjectUrl);var Et=he.open();if(Et!==null){var Bt=Ir(Et),Vt=Bt.document.createElement("script"),ue=this;Vt.src=et,gt&&(Vt.integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==",Vt.crossOrigin="anonymous"),Vt.onload=function(){Et.PDFObject.embed(ue.output("dataurlstring"),I)},Bt.body.appendChild(Vt)}return Et}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(he)==="[object Window]"){var ce=I.pdfJsUrl||"examples/PDF.js/web/viewer.html",Ce=he.open();if(Ce!==null){var An=Ir(Ce),We=An.document.createElement("iframe"),qe=ce.indexOf("?")===-1?"?":"&";ue=this,We.id="pdfViewer",We.width="500px",We.height="400px",We.src=ce+qe+"file=&downloadName="+encodeURIComponent(I.filename),We.onload=function(){Ce.document.title=I.filename,We.contentWindow.PDFViewerApplication.open(ue.output("bloburl"))},An.body.appendChild(We)}return Ce}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(he)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var Ge=he.open();if(Ge!==null){var Re=Ir(Ge),an=Re.document.createElement("iframe");an.src=this.output("datauristring",I),Re.body.appendChild(an),Ge.document.title=I.filename}if(Ge||typeof safari>"u")return Ge;break;case"datauri":case"dataurl":return he.document.location.href=this.output("datauristring",I);default:return null}},Jn.foo=function(){try{return Jn.apply(this,arguments)}catch($){var p=$.stack||"";~p.indexOf(" at ")&&(p=p.split(" at ")[1]);var I="Error in function "+p.split(`
`)[0].split("<")[0]+": "+$.message;if(!he.console)throw new Error(I);he.console.error(I,$),he.alert&&alert(I)}},Jn.foo.bar=Jn,Jn.foo),qn=function(p){return Array.isArray(Fi)===!0&&Fi.indexOf(p)>-1};switch(r){case"pt":me=1;break;case"mm":me=72/25.4;break;case"cm":me=72/2.54;break;case"in":me=72;break;case"px":me=qn("px_scaling")==1?.75:96/72;break;case"pc":case"em":me=12;break;case"ex":me=6;break;default:if(typeof r!="number")throw new Error("Invalid unit: "+r);me=r}var xn=null;xt(),at();var as=m.__private__.getPageInfo=m.getPageInfo=function(p){if(isNaN(p)||p%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:ne[p].objId,pageNumber:p,pageContext:ne[p]}},$o=m.__private__.getPageInfoByObjId=function(p){if(isNaN(p)||p%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var I in ne)if(ne[I].objId===p)break;return as(I)},Ke=m.__private__.getCurrentPageInfo=m.getCurrentPageInfo=function(){return{objId:ne[H].objId,pageNumber:H,pageContext:ne[H]}};m.addPage=function(){return Ss.apply(this,arguments),this},m.setPage=function(){return so.apply(this,arguments),Gt.call(this,Lt[H]),this},m.insertPage=function(p){return this.addPage(),this.movePage(H,p),this},m.movePage=function(p,I){var $,X;if(p>I){$=Lt[p],X=ne[p];for(var et=p;et>I;et--)Lt[et]=Lt[et-1],ne[et]=ne[et-1];Lt[I]=$,ne[I]=X,this.setPage(I)}else if(p<I){$=Lt[p],X=ne[p];for(var gt=p;gt<I;gt++)Lt[gt]=Lt[gt+1],ne[gt]=ne[gt+1];Lt[I]=$,ne[I]=X,this.setPage(I)}return this},m.deletePage=function(){return io.apply(this,arguments),this},m.__private__.text=m.text=function(p,I,$,X,et){var gt,Et,Bt,Vt,ue,ce,Ce,An,We,qe=(X=X||{}).scope||this;if(typeof p=="number"&&typeof I=="number"&&(typeof $=="string"||Array.isArray($))){var Ge=$;$=I,I=p,p=Ge}if(arguments[3]instanceof se==0?(Bt=arguments[4],Vt=arguments[5],Ze(Ce=arguments[3])==="object"&&Ce!==null||(typeof Bt=="string"&&(Vt=Bt,Bt=null),typeof Ce=="string"&&(Vt=Ce,Ce=null),typeof Ce=="number"&&(Bt=Ce,Ce=null),X={flags:Ce,angle:Bt,align:Vt})):(E("The transform parameter of text() with a Matrix value"),We=et),isNaN(I)||isNaN($)||p==null)throw new Error("Invalid arguments passed to jsPDF.text");if(p.length===0)return qe;var Re,an="",zn=typeof X.lineHeightFactor=="number"?X.lineHeightFactor:qi,pr=qe.internal.scaleFactor;function c(ln){return ln=ln.split("	").join(Array(X.TabLen||9).join(" ")),Zn(ln,Ce)}function y(ln){for(var cn,Rn=ln.concat(),Hn=[],fs=Rn.length;fs--;)typeof(cn=Rn.shift())=="string"?Hn.push(cn):Array.isArray(ln)&&(cn.length===1||cn[1]===void 0&&cn[2]===void 0)?Hn.push(cn[0]):Hn.push([cn[0],cn[1],cn[2]]);return Hn}function _(ln,cn){var Rn;if(typeof ln=="string")Rn=cn(ln)[0];else if(Array.isArray(ln)){for(var Hn,fs,$a=ln.concat(),Jo=[],Il=$a.length;Il--;)typeof(Hn=$a.shift())=="string"?Jo.push(cn(Hn)[0]):Array.isArray(Hn)&&typeof Hn[0]=="string"&&(fs=cn(Hn[0],Hn[1],Hn[2]),Jo.push([fs[0],fs[1],fs[2]]));Rn=Jo}return Rn}var B=!1,rt=!0;if(typeof p=="string")B=!0;else if(Array.isArray(p)){var ht=p.concat();Et=[];for(var Ct,ge=ht.length;ge--;)(typeof(Ct=ht.shift())!="string"||Array.isArray(Ct)&&typeof Ct[0]!="string")&&(rt=!1);B=rt}if(B===!1)throw new Error('Type of text must be string or Array. "'+p+'" is not recognized.');typeof p=="string"&&(p=p.match(/[\r?\n]/)?p.split(/\r\n|\r|\n/g):[p]);var pn=It/qe.internal.scaleFactor,Le=pn*(zn-1);switch(X.baseline){case"bottom":$-=Le;break;case"top":$+=pn-Le;break;case"hanging":$+=pn-2*Le;break;case"middle":$+=pn/2-Le}if((ce=X.maxWidth||0)>0&&(typeof p=="string"?p=qe.splitTextToSize(p,ce):Object.prototype.toString.call(p)==="[object Array]"&&(p=p.reduce(function(ln,cn){return ln.concat(qe.splitTextToSize(cn,ce))},[]))),gt={text:p,x:I,y:$,options:X,mutex:{pdfEscape:Zn,activeFontKey:$t,fonts:Ee,activeFontSize:It}},ke.publish("preProcessText",gt),p=gt.text,Bt=(X=gt.options).angle,We instanceof se==0&&Bt&&typeof Bt=="number"){Bt*=Math.PI/180,X.rotationDirection===0&&(Bt=-Bt),W===G&&(Bt=-Bt);var Sn=Math.cos(Bt),nn=Math.sin(Bt);We=new se(Sn,nn,-nn,Sn,0,0)}else Bt&&Bt instanceof se&&(We=Bt);W!==G||We||(We=si),(ue=X.charSpace||Qe)!==void 0&&(an+=N(S(ue))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(An=X.horizontalScale)!==void 0&&(an+=N(100*An)+` Tz
`),X.lang;var In=-1,mr=X.renderingMode!==void 0?X.renderingMode:X.stroke,Si=qe.internal.getCurrentPageInfo().pageContext;switch(mr){case 0:case!1:case"fill":In=0;break;case 1:case!0:case"stroke":In=1;break;case 2:case"fillThenStroke":In=2;break;case 3:case"invisible":In=3;break;case 4:case"fillAndAddForClipping":In=4;break;case 5:case"strokeAndAddPathForClipping":In=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":In=6;break;case 7:case"addToPathForClipping":In=7}var Cs=Si.usedRenderingMode!==void 0?Si.usedRenderingMode:-1;In!==-1?an+=In+` Tr
`:Cs!==-1&&(an+=`0 Tr
`),In!==-1&&(Si.usedRenderingMode=In),Vt=X.align||"left";var hi,fo=It*zn,Ba=qe.internal.pageSize.getWidth(),Go=Ee[$t];ue=X.charSpace||Qe,ce=X.maxWidth||0,Ce=Object.assign({autoencode:!0,noBOM:!0},X.flags);var po=[],Va=function(ln){return qe.getStringUnitWidth(ln,{font:Go,charSpace:ue,fontSize:It,doKerning:!1})*It/pr};if(Object.prototype.toString.call(p)==="[object Array]"){var Lr;Et=y(p),Vt!=="left"&&(hi=Et.map(Va));var Br,Ko=0;if(Vt==="right"){I-=hi[0],p=[],ge=Et.length;for(var Rs=0;Rs<ge;Rs++)Rs===0?(Br=Ai(I),Lr=Mr($)):(Br=S(Ko-hi[Rs]),Lr=-fo),p.push([Et[Rs],Br,Lr]),Ko=hi[Rs]}else if(Vt==="center"){I-=hi[0]/2,p=[],ge=Et.length;for(var Ds=0;Ds<ge;Ds++)Ds===0?(Br=Ai(I),Lr=Mr($)):(Br=S((Ko-hi[Ds])/2),Lr=-fo),p.push([Et[Ds],Br,Lr]),Ko=hi[Ds]}else if(Vt==="left"){p=[],ge=Et.length;for(var Qo=0;Qo<ge;Qo++)p.push(Et[Qo])}else if(Vt==="justify"&&Go.encoding==="Identity-H"){p=[],ge=Et.length,ce=ce!==0?ce:Ba;for(var mo=0,Un=0;Un<ge;Un++)if(Lr=Un===0?Mr($):-fo,Br=Un===0?Ai(I):mo,Un<ge-1){var Qc=S((ce-hi[Un])/(Et[Un].split(" ").length-1)),Wi=Et[Un].split(" ");p.push([Wi[0]+" ",Br,Lr]),mo=0;for(var Ii=1;Ii<Wi.length;Ii++){var go=(Va(Wi[Ii-1]+" "+Wi[Ii])-Va(Wi[Ii]))*pr+Qc;Ii==Wi.length-1?p.push([Wi[Ii],go,0]):p.push([Wi[Ii]+" ",go,0]),mo-=go}}else p.push([Et[Un],Br,Lr]);p.push(["",mo,0])}else{if(Vt!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(p=[],ge=Et.length,ce=ce!==0?ce:Ba,Un=0;Un<ge;Un++){Lr=Un===0?Mr($):-fo,Br=Un===0?Ai(I):0;var ja=Et[Un].split(" ").length-1,Ua=ja>0?(ce-hi[Un])/ja:0;Un<ge-1?po.push(N(S(Ua))):po.push(0),p.push([Et[Un],Br,Lr])}}}(typeof X.R2L=="boolean"?X.R2L:ee)===!0&&(p=_(p,function(ln,cn,Rn){return[ln.split("").reverse().join(""),cn,Rn]})),gt={text:p,x:I,y:$,options:X,mutex:{pdfEscape:Zn,activeFontKey:$t,fonts:Ee,activeFontSize:It}},ke.publish("postProcessText",gt),p=gt.text,Re=gt.mutex.isHex||!1;var Yo=Ee[$t].encoding;Yo!=="WinAnsiEncoding"&&Yo!=="StandardEncoding"||(p=_(p,function(ln,cn,Rn){return[c(ln),cn,Rn]})),Et=y(p),p=[];for(var yo,vo,Os,ds=Array.isArray(Et[0])?1:0,Fs="",Xo=function(ln,cn,Rn){var Hn="";return Rn instanceof se?(Rn=typeof X.angle=="number"?fn(Rn,new se(1,0,0,1,ln,cn)):fn(new se(1,0,0,1,ln,cn),Rn),W===G&&(Rn=fn(new se(1,0,0,-1,0,0),Rn)),Hn=Rn.join(" ")+` Tm
`):Hn=N(ln)+" "+N(cn)+` Td
`,Hn},gr=0;gr<Et.length;gr++){switch(Fs="",ds){case 1:Os=(Re?"<":"(")+Et[gr][0]+(Re?">":")"),yo=parseFloat(Et[gr][1]),vo=parseFloat(Et[gr][2]);break;case 0:Os=(Re?"<":"(")+Et[gr]+(Re?">":")"),yo=Ai(I),vo=Mr($)}po!==void 0&&po[gr]!==void 0&&(Fs=po[gr]+` Tw
`),gr===0?p.push(Fs+Xo(yo,vo,We)+Os):ds===0?p.push(Fs+Os):ds===1&&p.push(Fs+Xo(yo,vo,We)+Os)}p=ds===0?p.join(` Tj
T* `):p.join(` Tj
`),p+=` Tj
`;var Gi=`BT
/`;return Gi+=$t+" "+It+` Tf
`,Gi+=N(It*zn)+` TL
`,Gi+=Kr+`
`,Gi+=an,Gi+=p,U(Gi+="ET"),A[$t]=!0,qe};var Ns=m.__private__.clip=m.clip=function(p){return U(p==="evenodd"?"W*":"W"),this};m.clipEvenOdd=function(){return Ns("evenodd")},m.__private__.discardPath=m.discardPath=function(){return U("n"),this};var fr=m.__private__.isValidStyle=function(p){var I=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(p)!==-1&&(I=!0),I};m.__private__.setDefaultPathOperation=m.setDefaultPathOperation=function(p){return fr(p)&&(d=p),this};var $i=m.__private__.getStyle=m.getStyle=function(p){var I=d;switch(p){case"D":case"S":I="S";break;case"F":I="f";break;case"FD":case"DF":I="B";break;case"f":case"f*":case"B":case"B*":I=p}return I},Ts=m.close=function(){return U("h"),this};m.stroke=function(){return U("S"),this},m.fill=function(p){return ls("f",p),this},m.fillEvenOdd=function(p){return ls("f*",p),this},m.fillStroke=function(p){return ls("B",p),this},m.fillStrokeEvenOdd=function(p){return ls("B*",p),this};var ls=function(p,I){Ze(I)==="object"?ka(I,p):U(p)},lo=function(p){p===null||W===G&&p===void 0||(p=$i(p),U(p))};function Pa(p,I,$,X,et){var gt=new ca(I||this.boundingBox,$||this.xStep,X||this.yStep,this.gState,et||this.matrix);gt.stream=this.stream;var Et=p+"$$"+this.cloneIndex+++"$$";return Xn(Et,gt),gt}var ka=function(p,I){var $=ze[p.key],X=te[$];if(X instanceof xo)U("q"),U(Ca(I)),X.gState&&m.setGState(X.gState),U(p.matrix.toString()+" cm"),U("/"+$+" sh"),U("Q");else if(X instanceof ca){var et=new se(1,0,0,-1,0,ui());p.matrix&&(et=et.multiply(p.matrix||si),$=Pa.call(X,p.key,p.boundingBox,p.xStep,p.yStep,et).id),U("q"),U("/Pattern cs"),U("/"+$+" scn"),X.gState&&m.setGState(X.gState),U(I),U("Q")}},Ca=function(p){switch(p){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},Fr=m.moveTo=function(p,I){return U(N(S(p))+" "+N(Q(I))+" m"),this},Gr=m.lineTo=function(p,I){return U(N(S(p))+" "+N(Q(I))+" l"),this},_i=m.curveTo=function(p,I,$,X,et,gt){return U([N(S(p)),N(Q(I)),N(S($)),N(Q(X)),N(S(et)),N(Q(gt)),"c"].join(" ")),this};m.__private__.line=m.line=function(p,I,$,X,et){if(isNaN(p)||isNaN(I)||isNaN($)||isNaN(X)||!fr(et))throw new Error("Invalid arguments passed to jsPDF.line");return W===Y?this.lines([[$-p,X-I]],p,I,[1,1],et||"S"):this.lines([[$-p,X-I]],p,I,[1,1]).stroke()},m.__private__.lines=m.lines=function(p,I,$,X,et,gt){var Et,Bt,Vt,ue,ce,Ce,An,We,qe,Ge,Re,an;if(typeof p=="number"&&(an=$,$=I,I=p,p=an),X=X||[1,1],gt=gt||!1,isNaN(I)||isNaN($)||!Array.isArray(p)||!Array.isArray(X)||!fr(et)||typeof gt!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(Fr(I,$),Et=X[0],Bt=X[1],ue=p.length,Ge=I,Re=$,Vt=0;Vt<ue;Vt++)(ce=p[Vt]).length===2?(Ge=ce[0]*Et+Ge,Re=ce[1]*Bt+Re,Gr(Ge,Re)):(Ce=ce[0]*Et+Ge,An=ce[1]*Bt+Re,We=ce[2]*Et+Ge,qe=ce[3]*Bt+Re,Ge=ce[4]*Et+Ge,Re=ce[5]*Bt+Re,_i(Ce,An,We,qe,Ge,Re));return gt&&Ts(),lo(et),this},m.path=function(p){for(var I=0;I<p.length;I++){var $=p[I],X=$.c;switch($.op){case"m":Fr(X[0],X[1]);break;case"l":Gr(X[0],X[1]);break;case"c":_i.apply(this,X);break;case"h":Ts()}}return this},m.__private__.rect=m.rect=function(p,I,$,X,et){if(isNaN(p)||isNaN(I)||isNaN($)||isNaN(X)||!fr(et))throw new Error("Invalid arguments passed to jsPDF.rect");return W===Y&&(X=-X),U([N(S(p)),N(Q(I)),N(S($)),N(S(X)),"re"].join(" ")),lo(et),this},m.__private__.triangle=m.triangle=function(p,I,$,X,et,gt,Et){if(isNaN(p)||isNaN(I)||isNaN($)||isNaN(X)||isNaN(et)||isNaN(gt)||!fr(Et))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[$-p,X-I],[et-$,gt-X],[p-et,I-gt]],p,I,[1,1],Et,!0),this},m.__private__.roundedRect=m.roundedRect=function(p,I,$,X,et,gt,Et){if(isNaN(p)||isNaN(I)||isNaN($)||isNaN(X)||isNaN(et)||isNaN(gt)||!fr(Et))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Bt=4/3*(Math.SQRT2-1);return et=Math.min(et,.5*$),gt=Math.min(gt,.5*X),this.lines([[$-2*et,0],[et*Bt,0,et,gt-gt*Bt,et,gt],[0,X-2*gt],[0,gt*Bt,-et*Bt,gt,-et,gt],[2*et-$,0],[-et*Bt,0,-et,-gt*Bt,-et,-gt],[0,2*gt-X],[0,-gt*Bt,et*Bt,-gt,et,-gt]],p+et,I,[1,1],Et,!0),this},m.__private__.ellipse=m.ellipse=function(p,I,$,X,et){if(isNaN(p)||isNaN(I)||isNaN($)||isNaN(X)||!fr(et))throw new Error("Invalid arguments passed to jsPDF.ellipse");var gt=4/3*(Math.SQRT2-1)*$,Et=4/3*(Math.SQRT2-1)*X;return Fr(p+$,I),_i(p+$,I-Et,p+gt,I-X,p,I-X),_i(p-gt,I-X,p-$,I-Et,p-$,I),_i(p-$,I+Et,p-gt,I+X,p,I+X),_i(p+gt,I+X,p+$,I+Et,p+$,I),lo(et),this},m.__private__.circle=m.circle=function(p,I,$,X){if(isNaN(p)||isNaN(I)||isNaN($)||!fr(X))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(p,I,$,$,X)},m.setFont=function(p,I,$){return $&&(I=j(I,$)),$t=ao(p,I,{disableWarning:!1}),this};var qo=m.__private__.getFont=m.getFont=function(){return Ee[ao.apply(m,arguments)]};m.__private__.getFontList=m.getFontList=function(){var p,I,$={};for(p in we)if(we.hasOwnProperty(p))for(I in $[p]=[],we[p])we[p].hasOwnProperty(I)&&$[p].push(I);return $},m.addFont=function(p,I,$,X,et){var gt=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&gt.indexOf(arguments[3])!==-1?et=arguments[3]:arguments[3]&&gt.indexOf(arguments[3])==-1&&($=j($,X)),xs.call(this,p,I,$,et=et||"Identity-H")};var qi,re=n.lineWidth||.200025,Ra=m.__private__.getLineWidth=m.getLineWidth=function(){return re},Da=m.__private__.setLineWidth=m.setLineWidth=function(p){return re=p,U(N(S(p))+" w"),this};m.__private__.setLineDash=Xt.API.setLineDash=Xt.API.setLineDashPattern=function(p,I){if(p=p||[],I=I||0,isNaN(I)||!Array.isArray(p))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return p=p.map(function($){return N(S($))}).join(" "),I=N(S(I)),U("["+p+"] "+I+" d"),this};var Oa=m.__private__.getLineHeight=m.getLineHeight=function(){return It*qi};m.__private__.getLineHeight=m.getLineHeight=function(){return It*qi};var ai=m.__private__.setLineHeightFactor=m.setLineHeightFactor=function(p){return typeof(p=p||1.15)=="number"&&(qi=p),this},Fa=m.__private__.getLineHeightFactor=m.getLineHeightFactor=function(){return qi};ai(n.lineHeight);var Ai=m.__private__.getHorizontalCoordinate=function(p){return S(p)},Mr=m.__private__.getVerticalCoordinate=function(p){return W===G?p:ne[H].mediaBox.topRightY-ne[H].mediaBox.bottomLeftY-S(p)},Ls=m.__private__.getHorizontalCoordinateString=m.getHorizontalCoordinateString=function(p){return N(Ai(p))},zo=m.__private__.getVerticalCoordinateString=m.getVerticalCoordinateString=function(p){return N(Mr(p))},li=n.strokeColor||"0 G";m.__private__.getStrokeColor=m.getDrawColor=function(){return zr(li)},m.__private__.setStrokeColor=m.setDrawColor=function(p,I,$,X){return li=Sr({ch1:p,ch2:I,ch3:$,ch4:X,pdfColorType:"draw",precision:2}),U(li),this};var Ei=n.fillColor||"0 g";m.__private__.getFillColor=m.getFillColor=function(){return zr(Ei)},m.__private__.setFillColor=m.setFillColor=function(p,I,$,X){return Ei=Sr({ch1:p,ch2:I,ch3:$,ch4:X,pdfColorType:"fill",precision:2}),U(Ei),this};var Kr=n.textColor||"0 g",co=m.__private__.getTextColor=m.getTextColor=function(){return zr(Kr)};m.__private__.setTextColor=m.setTextColor=function(p,I,$,X){return Kr=Sr({ch1:p,ch2:I,ch3:$,ch4:X,pdfColorType:"text",precision:3}),this};var Qe=n.charSpace,Ma=m.__private__.getCharSpace=m.getCharSpace=function(){return parseFloat(Qe||0)};m.__private__.setCharSpace=m.setCharSpace=function(p){if(isNaN(p))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Qe=p,this};var uo=0;m.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},m.__private__.setLineCap=m.setLineCap=function(p){var I=m.CapJoinStyles[p];if(I===void 0)throw new Error("Line cap style of '"+p+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return uo=I,U(I+" J"),this};var xi=0;m.__private__.setLineJoin=m.setLineJoin=function(p){var I=m.CapJoinStyles[p];if(I===void 0)throw new Error("Line join style of '"+p+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return xi=I,U(I+" j"),this},m.__private__.setLineMiterLimit=m.__private__.setMiterLimit=m.setLineMiterLimit=m.setMiterLimit=function(p){if(p=p||0,isNaN(p))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return U(N(S(p))+" M"),this},m.GState=Nc,m.setGState=function(p){(p=typeof p=="string"?oe[fe[p]]:Ps(null,p)).equals(He)||(U("/"+p.id+" gs"),He=p)};var Ps=function(p,I){if(!p||!fe[p]){var $=!1;for(var X in oe)if(oe.hasOwnProperty(X)&&oe[X].equals(I)){$=!0;break}if($)I=oe[X];else{var et="GS"+(Object.keys(oe).length+1).toString(10);oe[et]=I,I.id=et}return p&&(fe[p]=I.id),ke.publish("addGState",I),I}};m.addGState=function(p,I){return Ps(p,I),this},m.saveGraphicsState=function(){return U("q"),on.push({key:$t,size:It,color:Kr}),this},m.restoreGraphicsState=function(){U("Q");var p=on.pop();return $t=p.key,It=p.size,Kr=p.color,He=null,this},m.setCurrentTransformationMatrix=function(p){return U(p.toString()+" cm"),this},m.comment=function(p){return U("#"+p),this};var zi=function(p,I){var $=p||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return $},set:function(gt){isNaN(gt)||($=parseFloat(gt))}});var X=I||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return X},set:function(gt){isNaN(gt)||(X=parseFloat(gt))}});var et="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return et},set:function(gt){et=gt.toString()}}),this},Hi=function(p,I,$,X){zi.call(this,p,I),this.type="rect";var et=$||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return et},set:function(Et){isNaN(Et)||(et=parseFloat(Et))}});var gt=X||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return gt},set:function(Et){isNaN(Et)||(gt=parseFloat(Et))}}),this},cs=function(){this.page=xe,this.currentPage=H,this.pages=Lt.slice(0),this.pagesContext=ne.slice(0),this.x=Kt,this.y=en,this.matrix=De,this.width=Ho(H),this.height=ci(H),this.outputDestination=Ot,this.id="",this.objectNumber=-1};cs.prototype.restore=function(){xe=this.page,H=this.currentPage,ne=this.pagesContext,Lt=this.pages,Kt=this.x,en=this.y,De=this.matrix,Tr(H,this.width),ks(H,this.height),Ot=this.outputDestination};var Nr=function(p,I,$,X,et){ur.push(new cs),xe=H=0,Lt=[],Kt=p,en=I,De=et,Wr([$,X])};for(var us in m.beginFormObject=function(p,I,$,X,et){return Nr(p,I,$,X,et),this},m.endFormObject=function(p){return function(I){if(ii[I])ur.pop().restore();else{var $=new cs,X="Xo"+(Object.keys(kn).length+1).toString(10);$.id=X,ii[I]=X,kn[X]=$,ke.publish("addFormObject",$),ur.pop().restore()}}(p),this},m.doFormObject=function(p,I){var $=kn[ii[p]];return U("q"),U(I.toString()+" cm"),U("/"+$.id+" Do"),U("Q"),this},m.getFormObject=function(p){var I=kn[ii[p]];return{x:I.x,y:I.y,width:I.width,height:I.height,matrix:I.matrix}},m.save=function(p,I){return p=p||"generated.pdf",(I=I||{}).returnPromise=I.returnPromise||!1,I.returnPromise===!1?(Eo(os(oi()),p),typeof Eo.unload=="function"&&he.setTimeout&&setTimeout(Eo.unload,911),this):new Promise(function($,X){try{var et=Eo(os(oi()),p);typeof Eo.unload=="function"&&he.setTimeout&&setTimeout(Eo.unload,911),$(et)}catch(gt){X(gt.message)}})},Xt.API)Xt.API.hasOwnProperty(us)&&(us==="events"&&Xt.API.events.length?function(p,I){var $,X,et;for(et=I.length-1;et!==-1;et--)$=I[et][0],X=I[et][1],p.subscribe.apply(p,[$].concat(typeof X=="function"?[X]:X))}(ke,Xt.API.events):m[us]=Xt.API[us]);function Ho(p){return ne[p].mediaBox.topRightX-ne[p].mediaBox.bottomLeftX}function Tr(p,I){ne[p].mediaBox.topRightX=I+ne[p].mediaBox.bottomLeftX}function ci(p){return ne[p].mediaBox.topRightY-ne[p].mediaBox.bottomLeftY}function ks(p,I){ne[p].mediaBox.topRightY=I+ne[p].mediaBox.bottomLeftY}var hs=m.getPageWidth=function(p){return Ho(p=p||H)/me},ho=m.setPageWidth=function(p,I){Tr(p,I*me)},ui=m.getPageHeight=function(p){return ci(p=p||H)/me},Wo=m.setPageHeight=function(p,I){ks(p,I*me)};return m.internal={pdfEscape:Zn,getStyle:$i,getFont:qo,getFontSize:Mt,getCharSpace:Ma,getTextColor:co,getLineHeight:Oa,getLineHeightFactor:Fa,getLineWidth:Ra,write:Dt,getHorizontalCoordinate:Ai,getVerticalCoordinate:Mr,getCoordinateString:Ls,getVerticalCoordinateString:zo,collections:{},newObject:yn,newAdditionalObject:rs,newObjectDeferred:jn,newObjectDeferredBegin:vn,getFilters:dr,putStream:Cn,events:ke,scaleFactor:me,pageSize:{getWidth:function(){return hs(H)},setWidth:function(p){ho(H,p)},getHeight:function(){return ui(H)},setHeight:function(p){Wo(H,p)}},encryptionOptions:f,encryption:xn,getEncryptor:function(p){return f!==null?xn.encryptor(p,0):function(I){return I}},output:Or,getNumberOfPages:oo,get pages(){return Lt},out:U,f2:w,f3:x,getPageInfo:as,getPageInfoByObjId:$o,getCurrentPageInfo:Ke,getPDFVersion:R,Point:zi,Rectangle:Hi,Matrix:se,hasHotfix:qn},Object.defineProperty(m.internal.pageSize,"width",{get:function(){return hs(H)},set:function(p){ho(H,p)},enumerable:!0,configurable:!0}),Object.defineProperty(m.internal.pageSize,"height",{get:function(){return ui(H)},set:function(p){Wo(H,p)},enumerable:!0,configurable:!0}),(function(p){for(var I=0,$=ie.length;I<$;I++){var X=xs.call(this,p[I][0],p[I][1],p[I][2],ie[I][3],!0);b===!1&&(A[X]=!0);var et=p[I][0].split("-");ro({id:X,fontName:et[0],fontStyle:et[1]||""})}ke.publish("addFonts",{fonts:Ee,dictionary:we})}).call(m,ie),$t="F1",Ss(i,e),ke.publish("initialized"),m}aa.prototype.lsbFirstWord=function(n){return String.fromCharCode(255&n,n>>8&255,n>>16&255,n>>24&255)},aa.prototype.toHexString=function(n){return n.split("").map(function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)}).join("")},aa.prototype.hexToBytes=function(n){for(var t=[],e=0;e<n.length;e+=2)t.push(String.fromCharCode(parseInt(n.substr(e,2),16)));return t.join("")},aa.prototype.processOwnerPassword=function(n,t){return bh(vh(t).substr(0,5),n)},aa.prototype.encryptor=function(n,t){var e=vh(this.encryptionKey+String.fromCharCode(255&n,n>>8&255,n>>16&255,255&t,t>>8&255)).substr(0,10);return function(r){return bh(e,r)}},Nc.prototype.equals=function(n){var t,e="id,objectNumber,equals";if(!n||Ze(n)!==Ze(this))return!1;var r=0;for(t in this)if(!(e.indexOf(t)>=0)){if(this.hasOwnProperty(t)&&!n.hasOwnProperty(t)||this[t]!==n[t])return!1;r++}for(t in n)n.hasOwnProperty(t)&&e.indexOf(t)<0&&r--;return r===0},Xt.API={events:[]},Xt.version="4.2.1";var Ln=Xt.API,pd=1,Vo=function(n){return n.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},na=function(n){return n.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},Ro=function(n){return n.toString().replace(/#/g,"#23").replace(/[\s\n\r()<>[\]{}\/%]/g,function(t){var e=t.charCodeAt(0).toString(16).toUpperCase();return"#"+(e.length===1?"0"+e:e)})},ye=function(n){return n.toFixed(2)},zs=function(n){return n.toFixed(5)};Ln.__acroform__={};var qr=function(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n},Kp=function(n){return n*pd},Qi=function(n){var t=new Fg,e=Ut.internal.getHeight(n)||0,r=Ut.internal.getWidth(n)||0;return t.BBox=[0,0,Number(ye(r)),Number(ye(e))],t},r4=Ln.__acroform__.setBit=function(n,t){if(n=n||0,t=t||0,isNaN(n)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return n|1<<t},i4=Ln.__acroform__.clearBit=function(n,t){if(n=n||0,t=t||0,isNaN(n)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return n&~(1<<t)},s4=Ln.__acroform__.getBit=function(n,t){if(isNaN(n)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return n&1<<t?1:0},Mn=Ln.__acroform__.getBitForPdf=function(n,t){if(isNaN(n)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return s4(n,t-1)},Bn=Ln.__acroform__.setBitForPdf=function(n,t){if(isNaN(n)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return r4(n,t-1)},Vn=Ln.__acroform__.clearBitForPdf=function(n,t){if(isNaN(n)||isNaN(t))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return i4(n,t-1)},o4=Ln.__acroform__.calculateCoordinates=function(n,t){var e=t.internal.getHorizontalCoordinate,r=t.internal.getVerticalCoordinate,i=n[0],s=n[1],o=n[2],a=n[3],u={};return u.lowerLeft_X=e(i)||0,u.lowerLeft_Y=r(s+a)||0,u.upperRight_X=e(i+o)||0,u.upperRight_Y=r(s)||0,[Number(ye(u.lowerLeft_X)),Number(ye(u.lowerLeft_Y)),Number(ye(u.upperRight_X)),Number(ye(u.upperRight_Y))]},a4=function(n){if(n.appearanceStreamContent)return n.appearanceStreamContent;if(n.V||n.DV){var t=[],e=n._V||n.DV,r=wh(n,e),i=n.scope.internal.getFont(n.fontName,n.fontStyle).id;t.push("/Tx BMC"),t.push("q"),t.push("BT"),t.push(n.scope.__private__.encodeColorString(n.color)),t.push("/"+i+" "+ye(r.fontSize)+" Tf"),t.push("1 0 0 1 0 0 Tm"),t.push(r.text),t.push("ET"),t.push("Q"),t.push("EMC");var s=Qi(n);return s.scope=n.scope,s.stream=t.join(`
`),s}},wh=function(n,t){var e=n.fontSize===0?n.maxFontSize:n.fontSize,r={text:"",fontSize:""},i=(t=(t=t.substr(0,1)=="("?t.substr(1):t).substr(t.length-1)==")"?t.substr(0,t.length-1):t).split(" ");i=n.multiline?i.map(function(w){return w.split(`
`)}):i.map(function(w){return[w]});var s=e,o=Ut.internal.getHeight(n)||0;o=o<0?-o:o;var a=Ut.internal.getWidth(n)||0;a=a<0?-a:a;var u=function(w,x,S){if(w+1<i.length){var Q=x+" "+i[w+1][0];return Zl(Q,n,S).width<=a-4}return!1};s++;t:for(;s>0;){t="",s--;var d,f,b=Zl("3",n,s).height,A=n.multiline?o-s:(o-b)/2,m=A+=2,D=0,R=0,M=0;if(s<=0){t=`(...) Tj
`,t+="% Width of Text: "+Zl(t,n,s=12).width+", FieldWidth:"+a+`
`;break}for(var O="",Y=0,G=0;G<i.length;G++)if(i.hasOwnProperty(G)){var W=!1;if(i[G].length!==1&&M!==i[G].length-1){if((b+2)*(Y+2)+2>o)continue t;O+=i[G][M],W=!0,R=G,G--}else{O=(O+=i[G][M]+" ").substr(O.length-1)==" "?O.substr(0,O.length-1):O;var ot=parseInt(G),pt=u(ot,O,s),j=G>=i.length-1;if(pt&&!j){O+=" ",M=0;continue}if(pt||j){if(j)R=ot;else if(n.multiline&&(b+2)*(Y+2)+2>o)continue t}else{if(!n.multiline||(b+2)*(Y+2)+2>o)continue t;R=ot}}for(var N="",E=D;E<=R;E++){var C=i[E];if(n.multiline){if(E===R){N+=C[M]+" ",M=(M+1)%C.length;continue}if(E===D){N+=C[C.length-1]+" ";continue}}N+=C[0]+" "}switch(N=N.substr(N.length-1)==" "?N.substr(0,N.length-1):N,f=Zl(N,n,s).width,n.textAlign){case"right":d=a-f-2;break;case"center":d=(a-f)/2;break;default:d=2}t+=ye(d)+" "+ye(m)+` Td
`,t+="("+Vo(N)+`) Tj
`,t+=-ye(d)+` 0 Td
`,m=-(s+2),f=0,D=W?R:R+1,Y++,O=""}break}return r.text=t,r.fontSize=s,r},Zl=function(n,t,e){var r=t.scope.internal.getFont(t.fontName,t.fontStyle),i=t.scope.getStringUnitWidth(n,{font:r,fontSize:parseFloat(e),charSpace:0})*parseFloat(e);return{height:t.scope.getStringUnitWidth("3",{font:r,fontSize:parseFloat(e),charSpace:0})*parseFloat(e)*1.5,width:i}},l4={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},c4=function(n,t){var e={type:"reference",object:n};t.internal.getPageInfo(n.page).pageContext.annotations.find(function(r){return r.type===e.type&&r.object===e.object})===void 0&&t.internal.getPageInfo(n.page).pageContext.annotations.push(e)},u4=function(n,t){if(t.scope=n,n.internal!==void 0&&(n.internal.acroformPlugin===void 0||n.internal.acroformPlugin.isInitialized===!1)){if(Di.FieldNum=0,n.internal.acroformPlugin=JSON.parse(JSON.stringify(l4)),n.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");pd=n.internal.scaleFactor,n.internal.acroformPlugin.acroFormDictionaryRoot=new Mg,n.internal.acroformPlugin.acroFormDictionaryRoot.scope=n,n.internal.acroformPlugin.acroFormDictionaryRoot._eventID=n.internal.events.subscribe("postPutResources",function(){(function(e){e.internal.events.unsubscribe(e.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete e.internal.acroformPlugin.acroFormDictionaryRoot._eventID,e.internal.acroformPlugin.printedOut=!0})(n)}),n.internal.events.subscribe("buildDocument",function(){(function(e){e.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var r=e.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];s.objId=void 0,s.hasAnnotation&&c4(s,e)}})(n)}),n.internal.events.subscribe("putCatalog",function(){(function(e){if(e.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");e.internal.write("/AcroForm "+e.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(n)}),n.internal.events.subscribe("postPutPages",function(e){(function(r,i){var s=!r;for(var o in r||(i.internal.newObjectDeferredBegin(i.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),i.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),r=r||i.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(r.hasOwnProperty(o)){var a=r[o],u=[],d=a.Rect;if(a.Rect&&(a.Rect=o4(a.Rect,i)),i.internal.newObjectDeferredBegin(a.objId,!0),a.DA=Ut.createDefaultAppearanceStream(a),Ze(a)==="object"&&typeof a.getKeyValueListForStream=="function"&&(u=a.getKeyValueListForStream()),a.Rect=d,a.hasAppearanceStream&&!a.appearanceStreamContent){var f=a4(a);u.push({key:"AP",value:"<</N "+f+">>"}),i.internal.acroformPlugin.xForms.push(f)}if(a.appearanceStreamContent){var b="";for(var A in a.appearanceStreamContent)if(a.appearanceStreamContent.hasOwnProperty(A)){var m=a.appearanceStreamContent[A];if(b+="/"+A+" ",b+="<<",Object.keys(m).length>=1||Array.isArray(m)){for(var o in m)if(m.hasOwnProperty(o)){var D=m[o];typeof D=="function"&&(D=D.call(i,a)),b+="/"+o+" "+D+" ",i.internal.acroformPlugin.xForms.indexOf(D)>=0||i.internal.acroformPlugin.xForms.push(D)}}else typeof(D=m)=="function"&&(D=D.call(i,a)),b+="/"+o+" "+D,i.internal.acroformPlugin.xForms.indexOf(D)>=0||i.internal.acroformPlugin.xForms.push(D);b+=">>"}u.push({key:"AP",value:`<<
`+b+">>"})}i.internal.putStream({additionalKeyValues:u,objectId:a.objId}),i.internal.out("endobj")}s&&function(R,M){for(var O in R)if(R.hasOwnProperty(O)){var Y=O,G=R[O];M.internal.newObjectDeferredBegin(G.objId,!0),Ze(G)==="object"&&typeof G.putStream=="function"&&G.putStream(),delete R[Y]}}(i.internal.acroformPlugin.xForms,i)})(e,n)}),n.internal.acroformPlugin.isInitialized=!0}},Og=Ln.__acroform__.arrayToPdfArray=function(n,t,e){var r=function(o){return o};if(Array.isArray(n)){for(var i="[",s=0;s<n.length;s++)switch(s!==0&&(i+=" "),Ze(n[s])){case"boolean":case"number":case"object":i+=n[s].toString();break;case"string":n[s].substr(0,1)==="/"?i+="/"+Ro(n[s].substr(1)):(t!==void 0&&e&&(r=e.internal.getEncryptor(t)),i+="("+Vo(r(n[s].toString()))+")")}return i+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},Mu=function(n,t,e){var r=function(i){return i};return t!==void 0&&e&&(r=e.internal.getEncryptor(t)),(n=n||"").toString(),"("+Vo(r(n))+")"},Xi=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(n){this._objId=n}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};Xi.prototype.toString=function(){return this.objId+" 0 R"},Xi.prototype.putStream=function(){var n=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:n,objectId:this.objId}),this.scope.internal.out("endobj")},Xi.prototype.getKeyValueListForStream=function(){var n=[],t=Object.getOwnPropertyNames(this).filter(function(s){return s!="content"&&s!="appearanceStreamContent"&&s!="scope"&&s!="objId"&&s.substring(0,1)!="_"});for(var e in t)if(Object.getOwnPropertyDescriptor(this,t[e]).configurable===!1){var r=t[e],i=this[r];i&&(Array.isArray(i)?n.push({key:r,value:Og(i,this.objId,this.scope)}):i instanceof Xi?(i.scope=this.scope,n.push({key:r,value:i.objId+" 0 R"})):typeof i!="function"&&n.push({key:r,value:i}))}return n};var Fg=function(){Xi.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var n,t=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(e){n=e.trim()},get:function(){return n||null}})};qr(Fg,Xi);var Mg=function(){Xi.call(this);var n,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return t.length>0?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(n){var e=function(r){return r};return this.scope&&(e=this.scope.internal.getEncryptor(this.objId)),"("+Vo(e(n))+")"}},set:function(e){n=e}})};qr(Mg,Xi);var Di=function n(){Xi.call(this);var t=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return t},set:function(O){if(isNaN(O))throw new Error('Invalid value "'+O+'" for attribute F supplied.');t=O}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!Mn(t,3)},set:function(O){O?this.F=Bn(t,3):this.F=Vn(t,3)}});var e=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return e},set:function(O){if(isNaN(O))throw new Error('Invalid value "'+O+'" for attribute Ff supplied.');e=O}});var r=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(r.length!==0)return r},set:function(O){r=O!==void 0?O:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[0])?0:r[0]},set:function(O){r[0]=O}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[1])?0:r[1]},set:function(O){r[1]=O}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[2])?0:r[2]},set:function(O){r[2]=O}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[3])?0:r[3]},set:function(O){r[3]=O}});var i="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return i},set:function(O){switch(O){case"/Btn":case"/Tx":case"/Ch":case"/Sig":i=O;break;default:throw new Error('Invalid value "'+O+'" for attribute FT supplied.')}}});var s=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!s||s.length<1){if(this instanceof Tc)return;s="FieldObject"+n.FieldNum++}var O=function(Y){return Y};return this.scope&&(O=this.scope.internal.getEncryptor(this.objId)),"("+Vo(O(s))+")"},set:function(O){s=O.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return s},set:function(O){s=O}});var o="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return o},set:function(O){o=O}});var a="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return a},set:function(O){a=O}});var u=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return u},set:function(O){u=O}});var d=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return d===void 0?50/pd:d},set:function(O){d=O}});var f="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return f},set:function(O){f=O}});var b="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!b||this instanceof Tc||this instanceof No))return Mu(b,this.objId,this.scope)},set:function(O){O=O.toString(),b=O}});var A=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(A)return this instanceof er==0?Mu(A,this.objId,this.scope):A},set:function(O){O=O.toString(),A=this instanceof er==0?O.substr(0,1)==="("?na(O.substr(1,O.length-2)):na(O):O}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof er==1?na(A.substr(1,A.length-1)):A},set:function(O){O=O.toString(),A=this instanceof er==1?"/"+Ro(O):O}});var m=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(m)return m},set:function(O){this.V=O}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(m)return this instanceof er==0?Mu(m,this.objId,this.scope):m},set:function(O){O=O.toString(),m=this instanceof er==0?O.substr(0,1)==="("?na(O.substr(1,O.length-2)):na(O):O}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof er==1?na(m.substr(1,m.length-1)):m},set:function(O){O=O.toString(),m=this instanceof er==1?"/"+Ro(O):O}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var D,R=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return R},set:function(O){O=!!O,R=O}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(D)return D},set:function(O){D=O}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,1)},set:function(O){O?this.Ff=Bn(this.Ff,1):this.Ff=Vn(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,2)},set:function(O){O?this.Ff=Bn(this.Ff,2):this.Ff=Vn(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,3)},set:function(O){O?this.Ff=Bn(this.Ff,3):this.Ff=Vn(this.Ff,3)}});var M=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(M!==null)return M},set:function(O){if([0,1,2].indexOf(O)===-1)throw new Error('Invalid value "'+O+'" for attribute Q supplied.');M=O}}),Object.defineProperty(this,"textAlign",{get:function(){var O;switch(M){case 0:default:O="left";break;case 1:O="center";break;case 2:O="right"}return O},configurable:!0,enumerable:!0,set:function(O){switch(O){case"right":case 2:M=2;break;case"center":case 1:M=1;break;default:M=0}}})};qr(Di,Xi);var fa=function(){Di.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var n=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return n},set:function(e){n=e}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return n},set:function(e){n=e}});var t=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return Og(t,this.objId,this.scope)},set:function(e){var r,i;i=[],typeof(r=e)=="string"&&(i=function(s,o,a){a||(a=1);for(var u,d=[];u=o.exec(s);)d.push(u[a]);return d}(r,/\((.*?)\)/g)),t=i}}),this.getOptions=function(){return t},this.setOptions=function(e){t=e,this.sort&&t.sort()},this.addOption=function(e){e=(e=e||"").toString(),t.push(e),this.sort&&t.sort()},this.removeOption=function(e,r){for(r=r||!1,e=(e=e||"").toString();t.indexOf(e)!==-1&&(t.splice(t.indexOf(e),1),r!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,18)},set:function(e){e?this.Ff=Bn(this.Ff,18):this.Ff=Vn(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,19)},set:function(e){this.combo===!0&&(e?this.Ff=Bn(this.Ff,19):this.Ff=Vn(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,20)},set:function(e){e?(this.Ff=Bn(this.Ff,20),t.sort()):this.Ff=Vn(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,22)},set:function(e){e?this.Ff=Bn(this.Ff,22):this.Ff=Vn(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,23)},set:function(e){e?this.Ff=Bn(this.Ff,23):this.Ff=Vn(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,27)},set:function(e){e?this.Ff=Bn(this.Ff,27):this.Ff=Vn(this.Ff,27)}}),this.hasAppearanceStream=!1};qr(fa,Di);var pa=function(){fa.call(this),this.fontName="helvetica",this.combo=!1};qr(pa,fa);var ma=function(){pa.call(this),this.combo=!0};qr(ma,pa);var lc=function(){ma.call(this),this.edit=!0};qr(lc,ma);var er=function(){Di.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,15)},set:function(e){e?this.Ff=Bn(this.Ff,15):this.Ff=Vn(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,16)},set:function(e){e?this.Ff=Bn(this.Ff,16):this.Ff=Vn(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,17)},set:function(e){e?this.Ff=Bn(this.Ff,17):this.Ff=Vn(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,26)},set:function(e){e?this.Ff=Bn(this.Ff,26):this.Ff=Vn(this.Ff,26)}});var n,t={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var e=function(s){return s};if(this.scope&&(e=this.scope.internal.getEncryptor(this.objId)),Object.keys(t).length!==0){var r,i=[];for(r in i.push("<<"),t)i.push("/"+r+" ("+Vo(e(t[r]))+")");return i.push(">>"),i.join(`
`)}},set:function(e){Ze(e)==="object"&&(t=e)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return t.CA||""},set:function(e){typeof e=="string"&&(t.CA=e)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return n},set:function(e){var r=e==null?"":e.toString();r.substr(0,1)==="/"&&(r=r.substr(1)),n="/"+Ro(r)}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return n.substr(1,n.length-1)},set:function(e){n="/"+Ro(e)}})};qr(er,Di);var cc=function(){er.call(this),this.pushButton=!0};qr(cc,er);var ga=function(){er.call(this),this.radio=!0,this.pushButton=!1;var n=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return n},set:function(t){n=t!==void 0?t:[]}})};qr(ga,er);var Tc=function(){var n,t;Di.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return n},set:function(i){n=i}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(i){t=i}});var e,r={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var i=function(a){return a};this.scope&&(i=this.scope.internal.getEncryptor(this.objId));var s,o=[];for(s in o.push("<<"),r)o.push("/"+s+" ("+Vo(i(r[s]))+")");return o.push(">>"),o.join(`
`)},set:function(i){Ze(i)==="object"&&(r=i)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return r.CA||""},set:function(i){typeof i=="string"&&(r.CA=i)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(i){var s=i==null?"":i.toString();s.substr(0,1)==="/"&&(s=s.substr(1)),e="/"+Ro(s)}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(i){var s=i==null?"":i.toString();s.substr(0,1)==="/"&&(s=s.substr(1)),e="/"+Ro(s)}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Ut.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};qr(Tc,Di),ga.prototype.setAppearance=function(n){if(!("createAppearanceStream"in n)||!("getCA"in n))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var t in this.Kids)if(this.Kids.hasOwnProperty(t)){var e=this.Kids[t];e.appearanceStreamContent=n.createAppearanceStream(e.optionName),e.caption=n.getCA()}},ga.prototype.createOption=function(n){var t=new Tc;return t.Parent=this,t.optionName=n,this.Kids.push(t),h4.call(this.scope,t),t};var uc=function(){er.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Ut.CheckBox.createAppearanceStream()};qr(uc,er);var No=function(){Di.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,13)},set:function(t){t?this.Ff=Bn(this.Ff,13):this.Ff=Vn(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,21)},set:function(t){t?this.Ff=Bn(this.Ff,21):this.Ff=Vn(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,23)},set:function(t){t?this.Ff=Bn(this.Ff,23):this.Ff=Vn(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,24)},set:function(t){t?this.Ff=Bn(this.Ff,24):this.Ff=Vn(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,25)},set:function(t){t?this.Ff=Bn(this.Ff,25):this.Ff=Vn(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,26)},set:function(t){t?this.Ff=Bn(this.Ff,26):this.Ff=Vn(this.Ff,26)}});var n=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return n},set:function(t){n=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return n},set:function(t){Number.isInteger(t)&&(n=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};qr(No,Di);var hc=function(){No.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!Mn(this.Ff,14)},set:function(n){n?this.Ff=Bn(this.Ff,14):this.Ff=Vn(this.Ff,14)}}),this.password=!0};qr(hc,No);var Ut={CheckBox:{createAppearanceStream:function(){return{N:{On:Ut.CheckBox.YesNormal},D:{On:Ut.CheckBox.YesPushDown,Off:Ut.CheckBox.OffPushDown}}},YesPushDown:function(n){var t=Qi(n);t.scope=n.scope;var e=[],r=n.scope.internal.getFont(n.fontName,n.fontStyle).id,i=n.scope.__private__.encodeColorString(n.color),s=wh(n,n.caption);return e.push("0.749023 g"),e.push("0 0 "+ye(Ut.internal.getWidth(n))+" "+ye(Ut.internal.getHeight(n))+" re"),e.push("f"),e.push("BMC"),e.push("q"),e.push("0 0 1 rg"),e.push("/"+r+" "+ye(s.fontSize)+" Tf "+i),e.push("BT"),e.push(s.text),e.push("ET"),e.push("Q"),e.push("EMC"),t.stream=e.join(`
`),t},YesNormal:function(n){var t=Qi(n);t.scope=n.scope;var e=n.scope.internal.getFont(n.fontName,n.fontStyle).id,r=n.scope.__private__.encodeColorString(n.color),i=[],s=Ut.internal.getHeight(n),o=Ut.internal.getWidth(n),a=wh(n,n.caption);return i.push("1 g"),i.push("0 0 "+ye(o)+" "+ye(s)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+ye(o-1)+" "+ye(s-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+e+" "+ye(a.fontSize)+" Tf "+r),i.push(a.text),i.push("ET"),i.push("Q"),t.stream=i.join(`
`),t},OffPushDown:function(n){var t=Qi(n);t.scope=n.scope;var e=[];return e.push("0.749023 g"),e.push("0 0 "+ye(Ut.internal.getWidth(n))+" "+ye(Ut.internal.getHeight(n))+" re"),e.push("f"),t.stream=e.join(`
`),t}},RadioButton:{Circle:{createAppearanceStream:function(n){var t={D:{Off:Ut.RadioButton.Circle.OffPushDown},N:{}};return t.N[n]=Ut.RadioButton.Circle.YesNormal,t.D[n]=Ut.RadioButton.Circle.YesPushDown,t},getCA:function(){return"l"},YesNormal:function(n){var t=Qi(n);t.scope=n.scope;var e=[],r=Ut.internal.getWidth(n)<=Ut.internal.getHeight(n)?Ut.internal.getWidth(n)/4:Ut.internal.getHeight(n)/4;r=Number((.9*r).toFixed(5));var i=Ut.internal.Bezier_C,s=Number((r*i).toFixed(5));return e.push("q"),e.push("1 0 0 1 "+zs(Ut.internal.getWidth(n)/2)+" "+zs(Ut.internal.getHeight(n)/2)+" cm"),e.push(r+" 0 m"),e.push(r+" "+s+" "+s+" "+r+" 0 "+r+" c"),e.push("-"+s+" "+r+" -"+r+" "+s+" -"+r+" 0 c"),e.push("-"+r+" -"+s+" -"+s+" -"+r+" 0 -"+r+" c"),e.push(s+" -"+r+" "+r+" -"+s+" "+r+" 0 c"),e.push("f"),e.push("Q"),t.stream=e.join(`
`),t},YesPushDown:function(n){var t=Qi(n);t.scope=n.scope;var e=[],r=Ut.internal.getWidth(n)<=Ut.internal.getHeight(n)?Ut.internal.getWidth(n)/4:Ut.internal.getHeight(n)/4;r=Number((.9*r).toFixed(5));var i=Number((2*r).toFixed(5)),s=Number((i*Ut.internal.Bezier_C).toFixed(5)),o=Number((r*Ut.internal.Bezier_C).toFixed(5));return e.push("0.749023 g"),e.push("q"),e.push("1 0 0 1 "+zs(Ut.internal.getWidth(n)/2)+" "+zs(Ut.internal.getHeight(n)/2)+" cm"),e.push(i+" 0 m"),e.push(i+" "+s+" "+s+" "+i+" 0 "+i+" c"),e.push("-"+s+" "+i+" -"+i+" "+s+" -"+i+" 0 c"),e.push("-"+i+" -"+s+" -"+s+" -"+i+" 0 -"+i+" c"),e.push(s+" -"+i+" "+i+" -"+s+" "+i+" 0 c"),e.push("f"),e.push("Q"),e.push("0 g"),e.push("q"),e.push("1 0 0 1 "+zs(Ut.internal.getWidth(n)/2)+" "+zs(Ut.internal.getHeight(n)/2)+" cm"),e.push(r+" 0 m"),e.push(r+" "+o+" "+o+" "+r+" 0 "+r+" c"),e.push("-"+o+" "+r+" -"+r+" "+o+" -"+r+" 0 c"),e.push("-"+r+" -"+o+" -"+o+" -"+r+" 0 -"+r+" c"),e.push(o+" -"+r+" "+r+" -"+o+" "+r+" 0 c"),e.push("f"),e.push("Q"),t.stream=e.join(`
`),t},OffPushDown:function(n){var t=Qi(n);t.scope=n.scope;var e=[],r=Ut.internal.getWidth(n)<=Ut.internal.getHeight(n)?Ut.internal.getWidth(n)/4:Ut.internal.getHeight(n)/4;r=Number((.9*r).toFixed(5));var i=Number((2*r).toFixed(5)),s=Number((i*Ut.internal.Bezier_C).toFixed(5));return e.push("0.749023 g"),e.push("q"),e.push("1 0 0 1 "+zs(Ut.internal.getWidth(n)/2)+" "+zs(Ut.internal.getHeight(n)/2)+" cm"),e.push(i+" 0 m"),e.push(i+" "+s+" "+s+" "+i+" 0 "+i+" c"),e.push("-"+s+" "+i+" -"+i+" "+s+" -"+i+" 0 c"),e.push("-"+i+" -"+s+" -"+s+" -"+i+" 0 -"+i+" c"),e.push(s+" -"+i+" "+i+" -"+s+" "+i+" 0 c"),e.push("f"),e.push("Q"),t.stream=e.join(`
`),t}},Cross:{createAppearanceStream:function(n){var t={D:{Off:Ut.RadioButton.Cross.OffPushDown},N:{}};return t.N[n]=Ut.RadioButton.Cross.YesNormal,t.D[n]=Ut.RadioButton.Cross.YesPushDown,t},getCA:function(){return"8"},YesNormal:function(n){var t=Qi(n);t.scope=n.scope;var e=[],r=Ut.internal.calculateCross(n);return e.push("q"),e.push("1 1 "+ye(Ut.internal.getWidth(n)-2)+" "+ye(Ut.internal.getHeight(n)-2)+" re"),e.push("W"),e.push("n"),e.push(ye(r.x1.x)+" "+ye(r.x1.y)+" m"),e.push(ye(r.x2.x)+" "+ye(r.x2.y)+" l"),e.push(ye(r.x4.x)+" "+ye(r.x4.y)+" m"),e.push(ye(r.x3.x)+" "+ye(r.x3.y)+" l"),e.push("s"),e.push("Q"),t.stream=e.join(`
`),t},YesPushDown:function(n){var t=Qi(n);t.scope=n.scope;var e=Ut.internal.calculateCross(n),r=[];return r.push("0.749023 g"),r.push("0 0 "+ye(Ut.internal.getWidth(n))+" "+ye(Ut.internal.getHeight(n))+" re"),r.push("f"),r.push("q"),r.push("1 1 "+ye(Ut.internal.getWidth(n)-2)+" "+ye(Ut.internal.getHeight(n)-2)+" re"),r.push("W"),r.push("n"),r.push(ye(e.x1.x)+" "+ye(e.x1.y)+" m"),r.push(ye(e.x2.x)+" "+ye(e.x2.y)+" l"),r.push(ye(e.x4.x)+" "+ye(e.x4.y)+" m"),r.push(ye(e.x3.x)+" "+ye(e.x3.y)+" l"),r.push("s"),r.push("Q"),t.stream=r.join(`
`),t},OffPushDown:function(n){var t=Qi(n);t.scope=n.scope;var e=[];return e.push("0.749023 g"),e.push("0 0 "+ye(Ut.internal.getWidth(n))+" "+ye(Ut.internal.getHeight(n))+" re"),e.push("f"),t.stream=e.join(`
`),t}}},createDefaultAppearanceStream:function(n){var t=n.scope.internal.getFont(n.fontName,n.fontStyle).id,e=n.scope.__private__.encodeColorString(n.color);return"/"+t+" "+n.fontSize+" Tf "+e}};Ut.internal={Bezier_C:.551915024494,calculateCross:function(n){var t=Ut.internal.getWidth(n),e=Ut.internal.getHeight(n),r=Math.min(t,e);return{x1:{x:(t-r)/2,y:(e-r)/2+r},x2:{x:(t-r)/2+r,y:(e-r)/2},x3:{x:(t-r)/2,y:(e-r)/2},x4:{x:(t-r)/2+r,y:(e-r)/2+r}}}},Ut.internal.getWidth=function(n){var t=0;return Ze(n)==="object"&&(t=Kp(n.Rect[2])),t},Ut.internal.getHeight=function(n){var t=0;return Ze(n)==="object"&&(t=Kp(n.Rect[3])),t};var h4=Ln.addField=function(n){if(u4(this,n),!(n instanceof Di))throw new Error("Invalid argument passed to jsPDF.addField.");var t;return(t=n).scope.internal.acroformPlugin.printedOut&&(t.scope.internal.acroformPlugin.printedOut=!1,t.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t),n.page=n.scope.internal.getCurrentPageInfo().pageNumber,this};Ln.AcroFormChoiceField=fa,Ln.AcroFormListBox=pa,Ln.AcroFormComboBox=ma,Ln.AcroFormEditBox=lc,Ln.AcroFormButton=er,Ln.AcroFormPushButton=cc,Ln.AcroFormRadioButton=ga,Ln.AcroFormCheckBox=uc,Ln.AcroFormTextField=No,Ln.AcroFormPasswordField=hc,Ln.AcroFormAppearance=Ut,Ln.AcroForm={ChoiceField:fa,ListBox:pa,ComboBox:ma,EditBox:lc,Button:er,PushButton:cc,RadioButton:ga,CheckBox:uc,TextField:No,PasswordField:hc,Appearance:Ut},Xt.AcroForm={ChoiceField:fa,ListBox:pa,ComboBox:ma,EditBox:lc,Button:er,PushButton:cc,RadioButton:ga,CheckBox:uc,TextField:No,PasswordField:hc,Appearance:Ut};Xt.AcroForm;function Bg(n){return n.reduce(function(t,e,r){return t[e]=r,t},{})}(function(n){var t="addImage_";n.__addimage__={};var e="UNKNOWN",r={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},i=n.__addimage__.getImageFileTypeByImageData=function(w,x){var S,Q,ut,yt,mt,at=e;if((x=x||e)==="RGBA"||w.data!==void 0&&w.data instanceof Uint8ClampedArray&&"height"in w&&"width"in w)return"RGBA";if(pt(w))for(mt in r)for(ut=r[mt],S=0;S<ut.length;S+=1){for(yt=!0,Q=0;Q<ut[S].length;Q+=1)if(ut[S][Q]!==void 0&&ut[S][Q]!==w[Q]){yt=!1;break}if(yt===!0){at=mt;break}}else for(mt in r)for(ut=r[mt],S=0;S<ut.length;S+=1){for(yt=!0,Q=0;Q<ut[S].length;Q+=1)if(ut[S][Q]!==void 0&&ut[S][Q]!==w.charCodeAt(Q)){yt=!1;break}if(yt===!0){at=mt;break}}return at===e&&x!==e&&(at=x),at},s=function w(x){for(var S=this.internal.write,Q=this.internal.putStream,ut=(0,this.internal.getFilters)();ut.indexOf("FlateEncode")!==-1;)ut.splice(ut.indexOf("FlateEncode"),1);x.objectId=this.internal.newObject();var yt=[];if(yt.push({key:"Type",value:"/XObject"}),yt.push({key:"Subtype",value:"/Image"}),yt.push({key:"Width",value:x.width}),yt.push({key:"Height",value:x.height}),x.colorSpace===O.INDEXED?yt.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(x.palette.length/3-1)+" "+("sMask"in x&&x.sMask!==void 0?x.objectId+2:x.objectId+1)+" 0 R]"}):(yt.push({key:"ColorSpace",value:"/"+x.colorSpace}),x.colorSpace===O.DEVICE_CMYK&&yt.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),yt.push({key:"BitsPerComponent",value:x.bitsPerComponent}),"decodeParameters"in x&&x.decodeParameters!==void 0&&yt.push({key:"DecodeParms",value:"<<"+x.decodeParameters+">>"}),"transparency"in x&&Array.isArray(x.transparency)&&x.transparency.length>0){for(var mt="",at=0,vt=x.transparency.length;at<vt;at++)mt+=x.transparency[at]+" "+x.transparency[at]+" ";yt.push({key:"Mask",value:"["+mt+"]"})}x.sMask!==void 0&&yt.push({key:"SMask",value:x.objectId+1+" 0 R"});var kt=x.filter!==void 0?["/"+x.filter]:void 0;if(Q({data:x.data,additionalKeyValues:yt,alreadyAppliedFilters:kt,objectId:x.objectId}),S("endobj"),"sMask"in x&&x.sMask!==void 0){var xt,P=(xt=x.sMaskBitsPerComponent)!==null&&xt!==void 0?xt:x.bitsPerComponent,H={width:x.width,height:x.height,colorSpace:"DeviceGray",bitsPerComponent:P,data:x.sMask};"filter"in x&&(H.decodeParameters="/Predictor ".concat(x.predictor," /Colors 1 /BitsPerComponent ").concat(P," /Columns ").concat(x.width),H.filter=x.filter),w.call(this,H)}if(x.colorSpace===O.INDEXED){var K=this.internal.newObject();Q({data:N(new Uint8Array(x.palette)),objectId:K}),S("endobj")}},o=function(){var w=this.internal.collections[t+"images"];for(var x in w)s.call(this,w[x])},a=function(){var w,x=this.internal.collections[t+"images"],S=this.internal.write;for(var Q in x)S("/I"+(w=x[Q]).index,w.objectId,"0","R")},u=function(){this.internal.collections[t+"images"]||(this.internal.collections[t+"images"]={},this.internal.events.subscribe("putResources",o),this.internal.events.subscribe("putXobjectDict",a))},d=function(){var w=this.internal.collections[t+"images"];return u.call(this),w},f=function(){return Object.keys(this.internal.collections[t+"images"]).length},b=function(w){return typeof n["process"+w.toUpperCase()]=="function"},A=function(w){return Ze(w)==="object"&&w.nodeType===1},m=function(w,x){if(w.nodeName==="IMG"&&w.hasAttribute("src")){var S=""+w.getAttribute("src");if(S.indexOf("data:image/")===0)return ac(unescape(S).split("base64,").pop());var Q=n.loadFile(S,!0);if(Q!==void 0)return Q}if(w.nodeName==="CANVAS"){if(w.width===0||w.height===0)throw new Error("Given canvas must have data. Canvas width: "+w.width+", height: "+w.height);var ut;switch(x){case"PNG":ut="image/png";break;case"WEBP":ut="image/webp";break;default:ut="image/jpeg"}return ac(w.toDataURL(ut,1).split("base64,").pop())}},D=function(w){var x=this.internal.collections[t+"images"];if(x){for(var S in x)if(w===x[S].alias)return x[S]}},R=function(w,x,S){return w||x||(w=-96,x=-96),w<0&&(w=-1*S.width*72/w/this.internal.scaleFactor),x<0&&(x=-1*S.height*72/x/this.internal.scaleFactor),w===0&&(w=x*S.width/S.height),x===0&&(x=w*S.height/S.width),[w,x]},M=function(w,x,S,Q,ut,yt){var mt=R.call(this,S,Q,ut),at=this.internal.getCoordinateString,vt=this.internal.getVerticalCoordinateString,kt=d.call(this);if(S=mt[0],Q=mt[1],kt[ut.index]=ut,yt){yt*=Math.PI/180;var xt=Math.cos(yt),P=Math.sin(yt),H=function(J){return J.toFixed(4)},K=[H(xt),H(P),H(-1*P),H(xt),0,0,"cm"]}this.internal.write("q"),yt?(this.internal.write([1,"0","0",1,at(w),vt(x+Q),"cm"].join(" ")),this.internal.write(K.join(" ")),this.internal.write([at(S),"0","0",at(Q),"0","0","cm"].join(" "))):this.internal.write([at(S),"0","0",at(Q),at(w),vt(x+Q),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+ut.index+" Do"),this.internal.write("Q")},O=n.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};n.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var Y=n.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},G=n.__addimage__.sHashCode=function(w){var x,S,Q=0;if(typeof w=="string")for(S=w.length,x=0;x<S;x++)Q=(Q<<5)-Q+w.charCodeAt(x),Q|=0;else if(pt(w))for(S=w.byteLength/2,x=0;x<S;x++)Q=(Q<<5)-Q+w[x],Q|=0;return Q},W=n.__addimage__.validateStringAsBase64=function(w){(w=w||"").toString().trim();var x=!0;return w.length===0&&(x=!1),w.length%4!=0&&(x=!1),/^[A-Za-z0-9+/]+$/.test(w.substr(0,w.length-2))===!1&&(x=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(w.substr(-2))===!1&&(x=!1),x},ot=n.__addimage__.extractImageFromDataUrl=function(w){if(w==null||!(w=w.trim()).startsWith("data:"))return null;var x=w.indexOf(",");return x<0?null:w.substring(0,x).trim().endsWith("base64")?w.substring(x+1):null};n.__addimage__.isArrayBuffer=function(w){return w instanceof ArrayBuffer};var pt=n.__addimage__.isArrayBufferView=function(w){return w instanceof Int8Array||w instanceof Uint8Array||w instanceof Uint8ClampedArray||w instanceof Int16Array||w instanceof Uint16Array||w instanceof Int32Array||w instanceof Uint32Array||w instanceof Float32Array||w instanceof Float64Array},j=n.__addimage__.binaryStringToUint8Array=function(w){for(var x=w.length,S=new Uint8Array(x),Q=0;Q<x;Q++)S[Q]=w.charCodeAt(Q);return S},N=n.__addimage__.arrayBufferToBinaryString=function(w){for(var x="",S=pt(w)?w:new Uint8Array(w),Q=0;Q<S.length;Q+=8192)x+=String.fromCharCode.apply(null,S.subarray(Q,Q+8192));return x};n.addImage=function(){var w,x,S,Q,ut,yt,mt,at,vt;if(typeof arguments[1]=="number"?(x=e,S=arguments[1],Q=arguments[2],ut=arguments[3],yt=arguments[4],mt=arguments[5],at=arguments[6],vt=arguments[7]):(x=arguments[1],S=arguments[2],Q=arguments[3],ut=arguments[4],yt=arguments[5],mt=arguments[6],at=arguments[7],vt=arguments[8]),Ze(w=arguments[0])==="object"&&!A(w)&&"imageData"in w){var kt=w;w=kt.imageData,x=kt.format||x||e,S=kt.x||S||0,Q=kt.y||Q||0,ut=kt.w||kt.width||ut,yt=kt.h||kt.height||yt,mt=kt.alias||mt,at=kt.compression||at,vt=kt.rotation||kt.angle||vt}var xt=this.internal.getFilters();if(at===void 0&&xt.indexOf("FlateEncode")!==-1&&(at="SLOW"),isNaN(S)||isNaN(Q))throw new Error("Invalid coordinates passed to jsPDF.addImage");u.call(this);var P=E.call(this,w,x,mt,at);return M.call(this,S,Q,ut,yt,P,vt),this};var E=function(w,x,S,Q){var ut,yt,mt;if(typeof w=="string"&&i(w)===e){w=unescape(w);var at=C(w,!1);(at!==""||(at=n.loadFile(w,!0))!==void 0)&&(w=at)}if(A(w)&&(w=m(w,x)),x=i(w,x),!b(x))throw new Error("addImage does not support files of type '"+x+"', please ensure that a plugin for '"+x+"' support is added.");if(((mt=S)==null||mt.length===0)&&(S=function(vt){return typeof vt=="string"||pt(vt)?G(vt):pt(vt.data)?G(vt.data):null}(w)),(ut=D.call(this,S))||(w instanceof Uint8Array||x==="RGBA"||(yt=w,w=j(w)),ut=this["process"+x.toUpperCase()](w,f.call(this),S,function(vt){return vt&&typeof vt=="string"&&(vt=vt.toUpperCase()),vt in n.image_compression?vt:Y.NONE}(Q),yt)),!ut)throw new Error("An unknown error occurred whilst processing the image.");return ut},C=n.__addimage__.convertBase64ToBinaryString=function(w,x){x=typeof x!="boolean"||x;var S,Q="";if(typeof w=="string"){var ut;S=(ut=ot(w))!==null&&ut!==void 0?ut:w;try{Q=ac(S)}catch(yt){if(x)throw W(S)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+yt.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return Q};n.getImageProperties=function(w){var x,S,Q="";if(A(w)&&(w=m(w)),typeof w=="string"&&i(w)===e&&((Q=C(w,!1))===""&&(Q=n.loadFile(w)||""),w=Q),S=i(w),!b(S))throw new Error("addImage does not support files of type '"+S+"', please ensure that a plugin for '"+S+"' support is added.");if(w instanceof Uint8Array||(w=j(w)),!(x=this["process"+S.toUpperCase()](w)))throw new Error("An unknown error occurred whilst processing the image");return x.fileType=S,x}})(Xt.API),function(n){var t=function(e){if(e!==void 0&&e!="")return!0};Xt.API.events.push(["addPage",function(e){this.internal.getPageInfo(e.pageNumber).pageContext.annotations=[]}]),n.events.push(["putPage",function(e){for(var r,i,s,o=this.internal.getCoordinateString,a=this.internal.getVerticalCoordinateString,u=this.internal.getPageInfoByObjId(e.objId),d=e.pageContext.annotations,f=!1,b=0;b<d.length&&!f;b++)switch((r=d[b]).type){case"link":(t(r.options.url)||t(r.options.pageNumber))&&(f=!0);break;case"reference":case"text":case"freetext":f=!0}if(f!=0){this.internal.write("/Annots [");for(var A=0;A<d.length;A++){r=d[A];var m=this.internal.pdfEscape,D=this.internal.getEncryptor(e.objId);switch(r.type){case"reference":this.internal.write(" "+r.object.objId+" 0 R ");break;case"text":var R=this.internal.newAdditionalObject(),M=this.internal.newAdditionalObject(),O=this.internal.getEncryptor(R.objId),Y=r.title||"Note";s="<</Type /Annot /Subtype /Text "+(i="/Rect ["+o(r.bounds.x)+" "+a(r.bounds.y+r.bounds.h)+" "+o(r.bounds.x+r.bounds.w)+" "+a(r.bounds.y)+"] ")+"/Contents ("+m(O(r.contents))+")",s+=" /Popup "+M.objId+" 0 R",s+=" /P "+u.objId+" 0 R",s+=" /T ("+m(O(Y))+") >>",R.content=s;var G=R.objId+" 0 R";s="<</Type /Annot /Subtype /Popup "+(i="/Rect ["+o(r.bounds.x+30)+" "+a(r.bounds.y+r.bounds.h)+" "+o(r.bounds.x+r.bounds.w+30)+" "+a(r.bounds.y)+"] ")+" /Parent "+G,r.open&&(s+=" /Open true"),s+=" >>",M.content=s,this.internal.write(R.objId,"0 R",M.objId,"0 R");break;case"freetext":i="/Rect ["+o(r.bounds.x)+" "+a(r.bounds.y)+" "+o(r.bounds.x+r.bounds.w)+" "+a(r.bounds.y+r.bounds.h)+"] ";var W="font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+(r.color||"#000000");s="<</Type /Annot /Subtype /FreeText "+i+"/Contents ("+m(D(r.contents))+")",s+=" /DS("+m(D(W))+")",s+=" /Border [0 0 0]",s+=" >>",this.internal.write(s);break;case"link":if(r.options.name){var ot=this.annotations._nameMap[r.options.name];r.options.pageNumber=ot.page,r.options.top=ot.y}else r.options.top||(r.options.top=0);if(i="/Rect ["+r.finalBounds.x+" "+r.finalBounds.y+" "+r.finalBounds.w+" "+r.finalBounds.h+"] ",s="",r.options.url)s="<</Type /Annot /Subtype /Link "+i+"/Border [0 0 0] /A <</S /URI /URI ("+m(D(r.options.url))+") >>";else if(r.options.pageNumber)switch(s="<</Type /Annot /Subtype /Link "+i+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(r.options.pageNumber).objId+" 0 R",r.options.magFactor=r.options.magFactor||"XYZ",r.options.magFactor){case"Fit":s+=" /Fit]";break;case"FitH":s+=" /FitH "+r.options.top+"]";break;case"FitV":r.options.left=r.options.left||0,s+=" /FitV "+r.options.left+"]";break;default:var pt=a(r.options.top);r.options.left=r.options.left||0,r.options.zoom===void 0&&(r.options.zoom=0),s+=" /XYZ "+r.options.left+" "+pt+" "+r.options.zoom+"]"}s!=""&&(s+=" >>",this.internal.write(s))}}this.internal.write("]")}}]),n.createAnnotation=function(e){var r=this.internal.getCurrentPageInfo();switch(e.type){case"link":this.link(e.bounds.x,e.bounds.y,e.bounds.w,e.bounds.h,e);break;case"text":case"freetext":r.pageContext.annotations.push(e)}},n.link=function(e,r,i,s,o){var a=this.internal.getCurrentPageInfo(),u=this.internal.getCoordinateString,d=this.internal.getVerticalCoordinateString;a.pageContext.annotations.push({finalBounds:{x:u(e),y:d(r),w:u(e+i),h:d(r+s)},options:o,type:"link"})},n.textWithLink=function(e,r,i,s){var o,a,u=this.getTextWidth(e),d=this.internal.getLineHeight()/this.internal.scaleFactor;if(s.maxWidth!==void 0){a=s.maxWidth;var f=this.splitTextToSize(e,a).length;o=Math.ceil(d*f)}else a=u,o=d;return this.text(e,r,i,s),i+=.2*d,s.align==="center"&&(r-=u/2),s.align==="right"&&(r-=u),this.link(r,i-d,a,o,s),u},n.getTextWidth=function(e){var r=this.internal.getFontSize();return this.getStringUnitWidth(e)*r/this.internal.scaleFactor}}(Xt.API),function(n){var t={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},e={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},r={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},i=[1570,1571,1573,1575];n.__arabicParser__={};var s=n.__arabicParser__.isInArabicSubstitutionA=function(R){return t[R.charCodeAt(0)]!==void 0},o=n.__arabicParser__.isArabicLetter=function(R){return typeof R=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(R)},a=n.__arabicParser__.isArabicEndLetter=function(R){return o(R)&&s(R)&&t[R.charCodeAt(0)].length<=2},u=n.__arabicParser__.isArabicAlfLetter=function(R){return o(R)&&i.indexOf(R.charCodeAt(0))>=0};n.__arabicParser__.arabicLetterHasIsolatedForm=function(R){return o(R)&&s(R)&&t[R.charCodeAt(0)].length>=1};var d=n.__arabicParser__.arabicLetterHasFinalForm=function(R){return o(R)&&s(R)&&t[R.charCodeAt(0)].length>=2};n.__arabicParser__.arabicLetterHasInitialForm=function(R){return o(R)&&s(R)&&t[R.charCodeAt(0)].length>=3};var f=n.__arabicParser__.arabicLetterHasMedialForm=function(R){return o(R)&&s(R)&&t[R.charCodeAt(0)].length==4},b=n.__arabicParser__.resolveLigatures=function(R){var M=0,O=e,Y="",G=0;for(M=0;M<R.length;M+=1)O[R.charCodeAt(M)]!==void 0?(G++,typeof(O=O[R.charCodeAt(M)])=="number"&&(Y+=String.fromCharCode(O),O=e,G=0),M===R.length-1&&(O=e,Y+=R.charAt(M-(G-1)),M-=G-1,G=0)):(O=e,Y+=R.charAt(M-G),M-=G,G=0);return Y};n.__arabicParser__.isArabicDiacritic=function(R){return R!==void 0&&r[R.charCodeAt(0)]!==void 0};var A=n.__arabicParser__.getCorrectForm=function(R,M,O){return o(R)?s(R)===!1?-1:!d(R)||!o(M)&&!o(O)||!o(O)&&a(M)||a(R)&&!o(M)||a(R)&&u(M)||a(R)&&a(M)?0:f(R)&&o(M)&&!a(M)&&o(O)&&d(O)?3:a(R)||!o(O)?1:2:-1},m=function(R){var M=0,O=0,Y=0,G="",W="",ot="",pt=(R=R||"").split("\\s+"),j=[];for(M=0;M<pt.length;M+=1){for(j.push(""),O=0;O<pt[M].length;O+=1)G=pt[M][O],W=pt[M][O-1],ot=pt[M][O+1],o(G)?(Y=A(G,W,ot),j[M]+=Y!==-1?String.fromCharCode(t[G.charCodeAt(0)][Y]):G):j[M]+=G;j[M]=b(j[M])}return j.join(" ")},D=n.__arabicParser__.processArabic=n.processArabic=function(){var R,M=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,O=[];if(Array.isArray(M)){var Y=0;for(O=[],Y=0;Y<M.length;Y+=1)Array.isArray(M[Y])?O.push([m(M[Y][0]),M[Y][1],M[Y][2]]):O.push([m(M[Y])]);R=O}else R=m(M);return typeof arguments[0]=="string"?R:(arguments[0].text=R,arguments[0])};n.events.push(["preProcessText",D])}(Xt.API),Xt.API.autoPrint=function(n){var t;return(n=n||{}).variant=n.variant||"non-conform",n.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+t+" 0 R")})),this},function(n){var t=function(){var e=void 0;Object.defineProperty(this,"pdf",{get:function(){return e},set:function(a){e=a}});var r=150;Object.defineProperty(this,"width",{get:function(){return r},set:function(a){r=isNaN(a)||Number.isInteger(a)===!1||a<0?150:a,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=r+1)}});var i=300;Object.defineProperty(this,"height",{get:function(){return i},set:function(a){i=isNaN(a)||Number.isInteger(a)===!1||a<0?300:a,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=i+1)}});var s=[];Object.defineProperty(this,"childNodes",{get:function(){return s},set:function(a){s=a}});var o={};Object.defineProperty(this,"style",{get:function(){return o},set:function(a){o=a}}),Object.defineProperty(this,"parentNode",{})};t.prototype.getContext=function(e,r){var i;if((e=e||"2d")!=="2d")return null;for(i in r)this.pdf.context2d.hasOwnProperty(i)&&(this.pdf.context2d[i]=r[i]);return this.pdf.context2d._canvas=this,this.pdf.context2d},t.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},n.events.push(["initialized",function(){this.canvas=new t,this.canvas.pdf=this}])}(Xt.API),function(n){var t={left:0,top:0,bottom:0,right:0},e=!1,r=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},t),this.internal.__cell__.margins.width=this.getPageWidth(),i.call(this))},i=function(){this.internal.__cell__.lastCell=new s,this.internal.__cell__.pages=1},s=function(){var u=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return u},set:function(R){u=R}});var d=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return d},set:function(R){d=R}});var f=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return f},set:function(R){f=R}});var b=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return b},set:function(R){b=R}});var A=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return A},set:function(R){A=R}});var m=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return m},set:function(R){m=R}});var D=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return D},set:function(R){D=R}}),this};s.prototype.clone=function(){return new s(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},s.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},n.setHeaderFunction=function(u){return r.call(this),this.internal.__cell__.headerFunction=typeof u=="function"?u:void 0,this},n.getTextDimensions=function(u,d){r.call(this);var f=(d=d||{}).fontSize||this.getFontSize(),b=d.font||this.getFont(),A=d.scaleFactor||this.internal.scaleFactor,m=0,D=0,R=0,M=this;if(!Array.isArray(u)&&typeof u!="string"){if(typeof u!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");u=String(u)}var O=d.maxWidth;O>0?typeof u=="string"?u=this.splitTextToSize(u,O):Object.prototype.toString.call(u)==="[object Array]"&&(u=u.reduce(function(G,W){return G.concat(M.splitTextToSize(W,O))},[])):u=Array.isArray(u)?u:[u];for(var Y=0;Y<u.length;Y++)m<(R=this.getStringUnitWidth(u[Y],{font:b})*f)&&(m=R);return m!==0&&(D=u.length),{w:m/=A,h:Math.max((D*f*this.getLineHeightFactor()-f*(this.getLineHeightFactor()-1))/A,0)}},n.cellAddPage=function(){r.call(this),this.addPage();var u=this.internal.__cell__.margins||t;return this.internal.__cell__.lastCell=new s(u.left,u.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var o=n.cell=function(){var u;u=arguments[0]instanceof s?arguments[0]:new s(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),r.call(this);var d=this.internal.__cell__.lastCell,f=this.internal.__cell__.padding,b=this.internal.__cell__.margins||t,A=this.internal.__cell__.tableHeaderRow,m=this.internal.__cell__.printHeaders;return d.lineNumber!==void 0&&(d.lineNumber===u.lineNumber?(u.x=(d.x||0)+(d.width||0),u.y=d.y||0):d.y+d.height+u.height+b.bottom>this.getPageHeight()?(this.cellAddPage(),u.y=b.top,m&&A&&(this.printHeaderRow(u.lineNumber,!0),u.y+=A[0].height)):u.y=d.y+d.height||u.y),u.text[0]!==void 0&&(this.rect(u.x,u.y,u.width,u.height,e===!0?"FD":void 0),u.align==="right"?this.text(u.text,u.x+u.width-f,u.y+f,{align:"right",baseline:"top"}):u.align==="center"?this.text(u.text,u.x+u.width/2,u.y+f,{align:"center",baseline:"top",maxWidth:u.width-f-f}):this.text(u.text,u.x+f,u.y+f,{align:"left",baseline:"top",maxWidth:u.width-f-f})),this.internal.__cell__.lastCell=u,this};n.table=function(u,d,f,b,A){if(r.call(this),!f)throw new Error("No data for PDF table.");var m,D,R,M,O=[],Y=[],G=[],W={},ot={},pt=[],j=[],N=(A=A||{}).autoSize||!1,E=A.printHeaders!==!1,C=A.css&&A.css["font-size"]!==void 0?16*A.css["font-size"]:A.fontSize||12,w=A.margins||Object.assign({width:this.getPageWidth()},t),x=typeof A.padding=="number"?A.padding:3,S=A.headerBackgroundColor||"#c8c8c8",Q=A.headerTextColor||"#000";if(i.call(this),this.internal.__cell__.printHeaders=E,this.internal.__cell__.margins=w,this.internal.__cell__.table_font_size=C,this.internal.__cell__.padding=x,this.internal.__cell__.headerBackgroundColor=S,this.internal.__cell__.headerTextColor=Q,this.setFontSize(C),b==null)Y=O=Object.keys(f[0]),G=O.map(function(){return"left"});else if(Array.isArray(b)&&Ze(b[0])==="object")for(O=b.map(function(kt){return kt.name}),Y=b.map(function(kt){return kt.prompt||kt.name||""}),G=b.map(function(kt){return kt.align||"left"}),m=0;m<b.length;m+=1)ot[b[m].name]=.7499990551181103*b[m].width;else Array.isArray(b)&&typeof b[0]=="string"&&(Y=O=b,G=O.map(function(){return"left"}));if(N||Array.isArray(b)&&typeof b[0]=="string")for(m=0;m<O.length;m+=1){for(W[M=O[m]]=f.map(function(kt){return kt[M]}),this.setFont(void 0,"bold"),pt.push(this.getTextDimensions(Y[m],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),D=W[M],this.setFont(void 0,"normal"),R=0;R<D.length;R+=1)pt.push(this.getTextDimensions(D[R],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);ot[M]=Math.max.apply(null,pt)+x+x,pt=[]}if(E){var ut={};for(m=0;m<O.length;m+=1)ut[O[m]]={},ut[O[m]].text=Y[m],ut[O[m]].align=G[m];var yt=a.call(this,ut,ot);j=O.map(function(kt){return new s(u,d,ot[kt],yt,ut[kt].text,void 0,ut[kt].align)}),this.setTableHeaderRow(j),this.printHeaderRow(1,!1)}var mt=b.reduce(function(kt,xt){return kt[xt.name]=xt.align,kt},{});for(m=0;m<f.length;m+=1){"rowStart"in A&&A.rowStart instanceof Function&&A.rowStart({row:m,data:f[m]},this);var at=a.call(this,f[m],ot);for(R=0;R<O.length;R+=1){var vt=f[m][O[R]];"cellStart"in A&&A.cellStart instanceof Function&&A.cellStart({row:m,col:R,data:vt},this),o.call(this,new s(u,d,ot[O[R]],at,vt,m+2,mt[O[R]]))}}return this.internal.__cell__.table_x=u,this.internal.__cell__.table_y=d,this};var a=function(u,d){var f=this.internal.__cell__.padding,b=this.internal.__cell__.table_font_size,A=this.internal.scaleFactor;return Object.keys(u).map(function(m){var D=u[m];return this.splitTextToSize(D.hasOwnProperty("text")?D.text:D,d[m]-f-f)},this).map(function(m){return this.getLineHeightFactor()*m.length*b/A+f+f},this).reduce(function(m,D){return Math.max(m,D)},0)};n.setTableHeaderRow=function(u){r.call(this),this.internal.__cell__.tableHeaderRow=u},n.printHeaderRow=function(u,d){if(r.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var f;if(e=!0,typeof this.internal.__cell__.headerFunction=="function"){var b=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new s(b[0],b[1],b[2],b[3],void 0,-1)}this.setFont(void 0,"bold");for(var A=[],m=0;m<this.internal.__cell__.tableHeaderRow.length;m+=1){f=this.internal.__cell__.tableHeaderRow[m].clone(),d&&(f.y=this.internal.__cell__.margins.top||0,A.push(f)),f.lineNumber=u;var D=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),o.call(this,f),this.setTextColor(D)}A.length>0&&this.setTableHeaderRow(A),this.setFont(void 0,"normal"),e=!1}}(Xt.API);var Vg={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},jg=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],_h=Bg(jg),Ug=[100,200,300,400,500,600,700,800,900],d4=Bg(Ug);function Bu(n){var t=n.family.replace(/"|'/g,"").toLowerCase(),e=function(s){return Vg[s=s||"normal"]?s:"normal"}(n.style),r=function(s){return s?typeof s=="number"?s>=100&&s<=900&&s%100==0?s:400:/^\d00$/.test(s)?parseInt(s):s==="bold"?700:400:400}(n.weight),i=function(s){return typeof _h[s=s||"normal"]=="number"?s:"normal"}(n.stretch);return{family:t,style:e,weight:r,stretch:i,src:n.src||[],ref:n.ref||{name:t,style:[i,e,r].join(" ")}}}function Qp(n,t,e,r){var i;for(i=e;i>=0&&i<t.length;i+=r)if(n[t[i]])return n[t[i]];for(i=e;i>=0&&i<t.length;i-=r)if(n[t[i]])return n[t[i]]}var f4={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Yp={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Xp(n){return[n.stretch,n.style,n.weight,n.family].join(" ")}function Jp(n){return n.trimLeft()}function p4(n,t){for(var e=0;e<n.length;){if(n.charAt(e)===t)return[n.substring(0,e),n.substring(e+1)];e+=1}return null}function m4(n){var t=n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return t===null?null:[t[0],n.substring(t[0].length)]}var ra,tc,Zp,t1,e1,Vu=["times"];function n1(n,t,e,r,i){var s=4,o=i1;switch(i){case Xt.API.image_compression.FAST:s=1,o=r1;break;case Xt.API.image_compression.MEDIUM:s=6,o=s1;break;case Xt.API.image_compression.SLOW:s=9,o=o1}n=function(u,d,f,b){for(var A,m=u.length/d,D=new Uint8Array(u.length+m),R=[g4,r1,i1,s1,o1],M=0;M<m;M+=1){var O=M*d,Y=u.subarray(O,O+d);if(b)D.set(b(Y,f,A),O+M);else{for(var G=R.length,W=[],ot=0;ot<G;ot+=1)W[ot]=R[ot](Y,f,A);var pt=v4(W.concat());D.set(W[pt],O+M)}A=Y}return D}(n,t,Math.ceil(e*r/8),o);var a=ph(n,{level:s});return Xt.API.__addimage__.arrayBufferToBinaryString(a)}function g4(n){var t=Array.apply([],n);return t.unshift(0),t}function r1(n,t){var e=n.length,r=[];r[0]=1;for(var i=0;i<e;i+=1){var s=n[i-t]||0;r[i+1]=n[i]-s+256&255}return r}function i1(n,t,e){var r=n.length,i=[];i[0]=2;for(var s=0;s<r;s+=1){var o=e&&e[s]||0;i[s+1]=n[s]-o+256&255}return i}function s1(n,t,e){var r=n.length,i=[];i[0]=3;for(var s=0;s<r;s+=1){var o=n[s-t]||0,a=e&&e[s]||0;i[s+1]=n[s]+256-(o+a>>>1)&255}return i}function o1(n,t,e){var r=n.length,i=[];i[0]=4;for(var s=0;s<r;s+=1){var o=y4(n[s-t]||0,e&&e[s]||0,e&&e[s-t]||0);i[s+1]=n[s]-o+256&255}return i}function y4(n,t,e){if(n===t&&t===e)return n;var r=Math.abs(t-e),i=Math.abs(n-e),s=Math.abs(n+t-e-e);return r<=i&&r<=s?n:i<=s?t:e}function v4(n){var t=n.map(function(e){return e.reduce(function(r,i){return r+Math.abs(i)},0)});return t.indexOf(Math.min.apply(null,t))}function ju(n,t,e){var r=t*e,i=Math.floor(r/8),s=16-(r-8*i+e),o=(1<<e)-1;return $g(n,i)>>s&o}function a1(n,t,e,r){var i=e*r,s=Math.floor(i/8),o=16-(i-8*s+r),a=(1<<r)-1,u=(t&a)<<o;(function(d,f,b){if(f+1<d.byteLength)d.setUint16(f,b,!1);else{var A=b>>8&255;d.setUint8(f,A)}})(n,s,$g(n,s)&~(a<<o)&65535|u)}function $g(n,t){return t+1<n.byteLength?n.getUint16(t,!1):n.getUint8(t)<<8}function b4(n){var t=0;if(n[t++]!==71||n[t++]!==73||n[t++]!==70||n[t++]!==56||(n[t++]+1&253)!=56||n[t++]!==97)throw new Error("Invalid GIF 87a/89a header.");var e=n[t++]|n[t++]<<8,r=n[t++]|n[t++]<<8,i=n[t++],s=i>>7,o=1<<1+(7&i);n[t++],n[t++];var a=null,u=null;s&&(a=t,u=o,t+=3*o);var d=!0,f=[],b=0,A=null,m=0,D=null;for(this.width=e,this.height=r;d&&t<n.length;)switch(n[t++]){case 33:switch(n[t++]){case 255:if(n[t]!==11||n[t+1]==78&&n[t+2]==69&&n[t+3]==84&&n[t+4]==83&&n[t+5]==67&&n[t+6]==65&&n[t+7]==80&&n[t+8]==69&&n[t+9]==50&&n[t+10]==46&&n[t+11]==48&&n[t+12]==3&&n[t+13]==1&&n[t+16]==0)t+=14,D=n[t++]|n[t++]<<8,t++;else for(t+=12;;){if(!((w=n[t++])>=0))throw Error("Invalid block size");if(w===0)break;t+=w}break;case 249:if(n[t++]!==4||n[t+4]!==0)throw new Error("Invalid graphics extension block.");var R=n[t++];b=n[t++]|n[t++]<<8,A=n[t++],1&R||(A=null),m=R>>2&7,t++;break;case 254:for(;;){if(!((w=n[t++])>=0))throw Error("Invalid block size");if(w===0)break;t+=w}break;default:throw new Error("Unknown graphic control label: 0x"+n[t-1].toString(16))}break;case 44:var M=n[t++]|n[t++]<<8,O=n[t++]|n[t++]<<8,Y=n[t++]|n[t++]<<8,G=n[t++]|n[t++]<<8,W=n[t++],ot=W>>6&1,pt=1<<1+(7&W),j=a,N=u,E=!1;W>>7&&(E=!0,j=t,N=pt,t+=3*pt);var C=t;for(t++;;){var w;if(!((w=n[t++])>=0))throw Error("Invalid block size");if(w===0)break;t+=w}f.push({x:M,y:O,width:Y,height:G,has_local_palette:E,palette_offset:j,palette_size:N,data_offset:C,data_length:t-C,transparent_index:A,interlaced:!!ot,delay:b,disposal:m});break;case 59:d=!1;break;default:throw new Error("Unknown gif block: 0x"+n[t-1].toString(16))}this.numFrames=function(){return f.length},this.loopCount=function(){return D},this.frameInfo=function(x){if(x<0||x>=f.length)throw new Error("Frame index out of range.");return f[x]},this.decodeAndBlitFrameBGRA=function(x,S){var Q=this.frameInfo(x),ut=Q.width*Q.height;if(ut>536870912)throw new Error("Image dimensions exceed 512MB, which is too large.");var yt=new Uint8Array(ut);l1(n,Q.data_offset,yt,ut);var mt=Q.palette_offset,at=Q.transparent_index;at===null&&(at=256);var vt=Q.width,kt=e-vt,xt=vt,P=4*(Q.y*e+Q.x),H=4*((Q.y+Q.height)*e+Q.x),K=P,J=4*kt;Q.interlaced===!0&&(J+=4*e*7);for(var nt=8,st=0,dt=yt.length;st<dt;++st){var ft=yt[st];if(xt===0&&(xt=vt,(K+=J)>=H&&(J=4*kt+4*e*(nt-1),K=P+(vt+kt)*(nt<<1),nt>>=1)),ft===at)K+=4;else{var _t=n[mt+3*ft],Lt=n[mt+3*ft+1],Ft=n[mt+3*ft+2];S[K++]=Ft,S[K++]=Lt,S[K++]=_t,S[K++]=255}--xt}},this.decodeAndBlitFrameRGBA=function(x,S){var Q=this.frameInfo(x),ut=Q.width*Q.height;if(ut>536870912)throw new Error("Image dimensions exceed 512MB, which is too large.");var yt=new Uint8Array(ut);l1(n,Q.data_offset,yt,ut);var mt=Q.palette_offset,at=Q.transparent_index;at===null&&(at=256);var vt=Q.width,kt=e-vt,xt=vt,P=4*(Q.y*e+Q.x),H=4*((Q.y+Q.height)*e+Q.x),K=P,J=4*kt;Q.interlaced===!0&&(J+=4*e*7);for(var nt=8,st=0,dt=yt.length;st<dt;++st){var ft=yt[st];if(xt===0&&(xt=vt,(K+=J)>=H&&(J=4*kt+4*e*(nt-1),K=P+(vt+kt)*(nt<<1),nt>>=1)),ft===at)K+=4;else{var _t=n[mt+3*ft],Lt=n[mt+3*ft+1],Ft=n[mt+3*ft+2];S[K++]=_t,S[K++]=Lt,S[K++]=Ft,S[K++]=255}--xt}}}function l1(n,t,e,r){for(var i=n[t++],s=1<<i,o=s+1,a=o+1,u=i+1,d=(1<<u)-1,f=0,b=0,A=0,m=n[t++],D=new Int32Array(4096),R=null;;){for(;f<16&&m!==0;)b|=n[t++]<<f,f+=8,m===1?m=n[t++]:--m;if(f<u)break;var M=b&d;if(b>>=u,f-=u,M!==s){if(M===o)break;for(var O=M<a?M:R,Y=0,G=O;G>s;)G=D[G]>>8,++Y;var W=G;if(A+Y+(O!==M?1:0)>r)return void sn.log("Warning, gif stream longer than expected.");e[A++]=W;var ot=A+=Y;for(O!==M&&(e[A++]=W),G=O;Y--;)G=D[G],e[--ot]=255&G,G>>=8;R!==null&&a<4096&&(D[a++]=R<<8|W,a>=d+1&&u<12&&(++u,d=d<<1|1)),R=M}else a=o+1,d=(1<<(u=i+1))-1,R=null}return A!==r&&sn.log("Warning, gif stream shorter than expected."),e}/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function Uu(n){var t,e,r,i,s,o=Math.floor,a=new Array(64),u=new Array(64),d=new Array(64),f=new Array(64),b=new Array(65535),A=new Array(65535),m=new Array(64),D=new Array(64),R=[],M=0,O=7,Y=new Array(64),G=new Array(64),W=new Array(64),ot=new Array(256),pt=new Array(2048),j=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],N=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],E=[0,1,2,3,4,5,6,7,8,9,10,11],C=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],w=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],x=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],S=[0,1,2,3,4,5,6,7,8,9,10,11],Q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],ut=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function yt(P,H){for(var K=0,J=0,nt=new Array,st=1;st<=16;st++){for(var dt=1;dt<=P[st];dt++)nt[H[J]]=[],nt[H[J]][0]=K,nt[H[J]][1]=st,J++,K++;K*=2}return nt}function mt(P){for(var H=P[0],K=P[1]-1;K>=0;)H&1<<K&&(M|=1<<O),K--,--O<0&&(M==255?(at(255),at(0)):at(M),O=7,M=0)}function at(P){R.push(P)}function vt(P){at(P>>8&255),at(255&P)}function kt(P,H,K,J,nt){for(var st,dt=nt[0],ft=nt[240],_t=function(It,Zt){var Mt,ee,Qt,Me,Pe,Wt,le,Se,$t,me,Kt=0;for($t=0;$t<8;++$t){Mt=It[Kt],ee=It[Kt+1],Qt=It[Kt+2],Me=It[Kt+3],Pe=It[Kt+4],Wt=It[Kt+5],le=It[Kt+6];var en=Mt+(Se=It[Kt+7]),De=Mt-Se,Ee=ee+le,we=ee-le,on=Qt+Wt,te=Qt-Wt,ze=Me+Pe,oe=Me-Pe,fe=en+ze,He=en-ze,xe=Ee+on,ne=Ee-on;It[Kt]=fe+xe,It[Kt+4]=fe-xe;var ke=.707106781*(ne+He);It[Kt+2]=He+ke,It[Kt+6]=He-ke;var Fi=.382683433*((fe=oe+te)-(ne=we+De)),kn=.5411961*fe+Fi,ii=1.306562965*ne+Fi,ur=.707106781*(xe=te+we),se=De+ur,fn=De-ur;It[Kt+5]=fn+kn,It[Kt+3]=fn-kn,It[Kt+1]=se+ii,It[Kt+7]=se-ii,Kt+=8}for(Kt=0,$t=0;$t<8;++$t){Mt=It[Kt],ee=It[Kt+8],Qt=It[Kt+16],Me=It[Kt+24],Pe=It[Kt+32],Wt=It[Kt+40],le=It[Kt+48];var si=Mt+(Se=It[Kt+56]),Xn=Mt-Se,Jn=ee+le,yn=ee-le,jn=Qt+Wt,vn=Qt-Wt,rs=Me+Pe,Mi=Me-Pe,hr=si+rs,zr=si-rs,Sr=Jn+jn,dr=Jn-jn;It[Kt]=hr+Sr,It[Kt+32]=hr-Sr;var Cn=.707106781*(dr+zr);It[Kt+16]=zr+Cn,It[Kt+48]=zr-Cn;var Bi=.382683433*((hr=Mi+vn)-(dr=yn+Xn)),Hr=.5411961*hr+Bi,wi=1.306562965*dr+Bi,Vi=.707106781*(Sr=vn+yn),is=Xn+Vi,ss=Xn-Vi;It[Kt+40]=ss+Hr,It[Kt+24]=ss-Hr,It[Kt+8]=is+wi,It[Kt+56]=is-wi,Kt++}for($t=0;$t<64;++$t)me=It[$t]*Zt[$t],m[$t]=me>0?me+.5|0:me-.5|0;return m}(P,H),Lt=0;Lt<64;++Lt)D[j[Lt]]=_t[Lt];var Ft=D[0]-K;K=D[0],Ft==0?mt(J[0]):(mt(J[A[st=32767+Ft]]),mt(b[st]));for(var Ot=63;Ot>0&&D[Ot]==0;)Ot--;if(Ot==0)return mt(dt),K;for(var Gt,U=1;U<=Ot;){for(var Dt=U;D[U]==0&&U<=Ot;)++U;var Ae=U-Dt;if(Ae>=16){Gt=Ae>>4;for(var ie=1;ie<=Gt;++ie)mt(ft);Ae&=15}st=32767+D[U],mt(nt[(Ae<<4)+A[st]]),mt(b[st]),U++}return Ot!=63&&mt(dt),K}function xt(P){P=Math.min(Math.max(P,1),100),s!=P&&(function(H){for(var K=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],J=0;J<64;J++){var nt=o((K[J]*H+50)/100);nt=Math.min(Math.max(nt,1),255),a[j[J]]=nt}for(var st=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],dt=0;dt<64;dt++){var ft=o((st[dt]*H+50)/100);ft=Math.min(Math.max(ft,1),255),u[j[dt]]=ft}for(var _t=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Lt=0,Ft=0;Ft<8;Ft++)for(var Ot=0;Ot<8;Ot++)d[Lt]=1/(a[j[Lt]]*_t[Ft]*_t[Ot]*8),f[Lt]=1/(u[j[Lt]]*_t[Ft]*_t[Ot]*8),Lt++}(P<50?Math.floor(5e3/P):Math.floor(200-2*P)),s=P)}this.encode=function(P,H){H&&xt(H),R=new Array,M=0,O=7,vt(65496),vt(65504),vt(16),at(74),at(70),at(73),at(70),at(0),at(1),at(1),at(0),vt(1),vt(1),at(0),at(0),function(){vt(65499),vt(132),at(0);for(var ee=0;ee<64;ee++)at(a[ee]);at(1);for(var Qt=0;Qt<64;Qt++)at(u[Qt])}(),function(ee,Qt){vt(65472),vt(17),at(8),vt(Qt),vt(ee),at(3),at(1),at(17),at(0),at(2),at(17),at(1),at(3),at(17),at(1)}(P.width,P.height),function(){vt(65476),vt(418),at(0);for(var ee=0;ee<16;ee++)at(N[ee+1]);for(var Qt=0;Qt<=11;Qt++)at(E[Qt]);at(16);for(var Me=0;Me<16;Me++)at(C[Me+1]);for(var Pe=0;Pe<=161;Pe++)at(w[Pe]);at(1);for(var Wt=0;Wt<16;Wt++)at(x[Wt+1]);for(var le=0;le<=11;le++)at(S[le]);at(17);for(var Se=0;Se<16;Se++)at(Q[Se+1]);for(var $t=0;$t<=161;$t++)at(ut[$t])}(),vt(65498),vt(12),at(3),at(1),at(0),at(2),at(17),at(3),at(17),at(0),at(63),at(0);var K=0,J=0,nt=0;M=0,O=7,this.encode.displayName="_encode_";for(var st,dt,ft,_t,Lt,Ft,Ot,Gt,U,Dt=P.data,Ae=P.width,ie=P.height,It=4*Ae,Zt=0;Zt<ie;){for(st=0;st<It;){for(Lt=It*Zt+st,Ot=-1,Gt=0,U=0;U<64;U++)Ft=Lt+(Gt=U>>3)*It+(Ot=4*(7&U)),Zt+Gt>=ie&&(Ft-=It*(Zt+1+Gt-ie)),st+Ot>=It&&(Ft-=st+Ot-It+4),dt=Dt[Ft++],ft=Dt[Ft++],_t=Dt[Ft++],Y[U]=(pt[dt]+pt[ft+256|0]+pt[_t+512|0]>>16)-128,G[U]=(pt[dt+768|0]+pt[ft+1024|0]+pt[_t+1280|0]>>16)-128,W[U]=(pt[dt+1280|0]+pt[ft+1536|0]+pt[_t+1792|0]>>16)-128;K=kt(Y,d,K,t,r),J=kt(G,f,J,e,i),nt=kt(W,f,nt,e,i),st+=32}Zt+=8}if(O>=0){var Mt=[];Mt[1]=O+1,Mt[0]=(1<<O+1)-1,mt(Mt)}return vt(65497),new Uint8Array(R)},n=n||50,function(){for(var P=String.fromCharCode,H=0;H<256;H++)ot[H]=P(H)}(),t=yt(N,E),e=yt(x,S),r=yt(C,w),i=yt(Q,ut),function(){for(var P=1,H=2,K=1;K<=15;K++){for(var J=P;J<H;J++)A[32767+J]=K,b[32767+J]=[],b[32767+J][1]=K,b[32767+J][0]=J;for(var nt=-(H-1);nt<=-P;nt++)A[32767+nt]=K,b[32767+nt]=[],b[32767+nt][1]=K,b[32767+nt][0]=H-1+nt;P<<=1,H<<=1}}(),function(){for(var P=0;P<256;P++)pt[P]=19595*P,pt[P+256|0]=38470*P,pt[P+512|0]=7471*P+32768,pt[P+768|0]=-11059*P,pt[P+1024|0]=-21709*P,pt[P+1280|0]=32768*P+8421375,pt[P+1536|0]=-27439*P,pt[P+1792|0]=-5329*P}(),xt(n)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function Pi(n,t){if(this.pos=0,this.buffer=n,this.datav=new DataView(n.buffer),this.is_with_alpha=!!t,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function c1(n){function t(E){if(!E)throw Error("assert :P")}function e(E,C,w){for(var x=0;4>x;x++)if(E[C+x]!=w.charCodeAt(x))return!0;return!1}function r(E,C,w,x,S){for(var Q=0;Q<S;Q++)E[C+Q]=w[x+Q]}function i(E,C,w,x){for(var S=0;S<x;S++)E[C+S]=w}function s(E){return new Int32Array(E)}function o(E,C){for(var w=[],x=0;x<E;x++)w.push(new C);return w}function a(E,C){var w=[];return function x(S,Q,ut){for(var yt=ut[Q],mt=0;mt<yt&&(S.push(ut.length>Q+1?[]:new C),!(ut.length<Q+1));mt++)x(S[mt],Q+1,ut)}(w,0,E),w}var u=function(){var E=this;function C(l,h){for(var g=1<<h-1>>>0;l&g;)g>>>=1;return g?(l&g-1)+g:l}function w(l,h,g,v,T){t(!(v%g));do l[h+(v-=g)]=T;while(0<v)}function x(l,h,g,v,T){if(t(2328>=T),512>=T)var L=s(512);else if((L=s(T))==null)return 0;return function(k,F,V,q,Z,ct){var z,tt,it=F,bt=1<<V,lt=s(16),wt=s(16);for(t(Z!=0),t(q!=null),t(k!=null),t(0<V),tt=0;tt<Z;++tt){if(15<q[tt])return 0;++lt[q[tt]]}if(lt[0]==Z)return 0;for(wt[1]=0,z=1;15>z;++z){if(lt[z]>1<<z)return 0;wt[z+1]=wt[z]+lt[z]}for(tt=0;tt<Z;++tt)z=q[tt],0<q[tt]&&(ct[wt[z]++]=tt);if(wt[15]==1)return(q=new S).g=0,q.value=ct[0],w(k,it,1,bt,q),bt;var At,Pt=-1,St=bt-1,Yt=0,jt=1,Ie=1,zt=1<<V;for(tt=0,z=1,Z=2;z<=V;++z,Z<<=1){if(jt+=Ie<<=1,0>(Ie-=lt[z]))return 0;for(;0<lt[z];--lt[z])(q=new S).g=z,q.value=ct[tt++],w(k,it+Yt,Z,zt,q),Yt=C(Yt,z)}for(z=V+1,Z=2;15>=z;++z,Z<<=1){if(jt+=Ie<<=1,0>(Ie-=lt[z]))return 0;for(;0<lt[z];--lt[z]){if(q=new S,(Yt&St)!=Pt){for(it+=zt,At=1<<(Pt=z)-V;15>Pt&&!(0>=(At-=lt[Pt]));)++Pt,At<<=1;bt+=zt=1<<(At=Pt-V),k[F+(Pt=Yt&St)].g=At+V,k[F+Pt].value=it-F-Pt}q.g=z-V,q.value=ct[tt++],w(k,it+(Yt>>V),Z,zt,q),Yt=C(Yt,z)}}return jt!=2*wt[15]-1?0:bt}(l,h,g,v,T,L)}function S(){this.value=this.g=0}function Q(){this.value=this.g=0}function ut(){this.G=o(5,S),this.H=s(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=o(Go,Q)}function yt(l,h,g,v){t(l!=null),t(h!=null),t(2147483648>v),l.Ca=254,l.I=0,l.b=-8,l.Ka=0,l.oa=h,l.pa=g,l.Jd=h,l.Yc=g+v,l.Zc=4<=v?g+v-4+1:g,dt(l)}function mt(l,h){for(var g=0;0<h--;)g|=_t(l,128)<<h;return g}function at(l,h){var g=mt(l,h);return ft(l)?-g:g}function vt(l,h,g,v){var T,L=0;for(t(l!=null),t(h!=null),t(4294967288>v),l.Sb=v,l.Ra=0,l.u=0,l.h=0,4<v&&(v=4),T=0;T<v;++T)L+=h[g+T]<<8*T;l.Ra=L,l.bb=v,l.oa=h,l.pa=g}function kt(l){for(;8<=l.u&&l.bb<l.Sb;)l.Ra>>>=8,l.Ra+=l.oa[l.pa+l.bb]<<Lr-8>>>0,++l.bb,l.u-=8;J(l)&&(l.h=1,l.u=0)}function xt(l,h){if(t(0<=h),!l.h&&h<=Va){var g=K(l)&po[h];return l.u+=h,kt(l),g}return l.h=1,l.u=0}function P(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function H(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function K(l){return l.Ra>>>(l.u&Lr-1)>>>0}function J(l){return t(l.bb<=l.Sb),l.h||l.bb==l.Sb&&l.u>Lr}function nt(l,h){l.u=h,l.h=J(l)}function st(l){l.u>=Br&&(t(l.u>=Br),kt(l))}function dt(l){t(l!=null&&l.oa!=null),l.pa<l.Zc?(l.I=(l.oa[l.pa++]|l.I<<8)>>>0,l.b+=8):(t(l!=null&&l.oa!=null),l.pa<l.Yc?(l.b+=8,l.I=l.oa[l.pa++]|l.I<<8):l.Ka?l.b=0:(l.I<<=8,l.b+=8,l.Ka=1))}function ft(l){return mt(l,1)}function _t(l,h){var g=l.Ca;0>l.b&&dt(l);var v=l.b,T=g*h>>>8,L=(l.I>>>v>T)+0;for(L?(g-=T,l.I-=T+1<<v>>>0):g=T+1,v=g,T=0;256<=v;)T+=8,v>>=8;return v=7^T+Ko[v],l.b-=v,l.Ca=(g<<v)-1,L}function Lt(l,h,g){l[h+0]=g>>24&255,l[h+1]=g>>16&255,l[h+2]=g>>8&255,l[h+3]=255&g}function Ft(l,h){return l[h+0]|l[h+1]<<8}function Ot(l,h){return Ft(l,h)|l[h+2]<<16}function Gt(l,h){return Ft(l,h)|Ft(l,h+2)<<16}function U(l,h){var g=1<<h;return t(l!=null),t(0<h),l.X=s(g),l.X==null?0:(l.Mb=32-h,l.Xa=h,1)}function Dt(l,h){t(l!=null),t(h!=null),t(l.Xa==h.Xa),r(h.X,0,l.X,0,1<<h.Xa)}function Ae(){this.X=[],this.Xa=this.Mb=0}function ie(l,h,g,v){t(g!=null),t(v!=null);var T=g[0],L=v[0];return T==0&&(T=(l*L+h/2)/h),L==0&&(L=(h*T+l/2)/l),0>=T||0>=L?0:(g[0]=T,v[0]=L,1)}function It(l,h){return l+(1<<h)-1>>>h}function Zt(l,h){return((4278255360&l)+(4278255360&h)>>>0&4278255360)+((16711935&l)+(16711935&h)>>>0&16711935)>>>0}function Mt(l,h){E[h]=function(g,v,T,L,k,F,V){var q;for(q=0;q<k;++q){var Z=E[l](F[V+q-1],T,L+q);F[V+q]=Zt(g[v+q],Z)}}}function ee(){this.ud=this.hd=this.jd=0}function Qt(l,h){return((4278124286&(l^h))>>>1)+(l&h)>>>0}function Me(l){return 0<=l&&256>l?l:0>l?0:255<l?255:void 0}function Pe(l,h){return Me(l+(l-h+.5>>1))}function Wt(l,h,g){return Math.abs(h-g)-Math.abs(l-g)}function le(l,h,g,v,T,L,k){for(v=L[k-1],g=0;g<T;++g)L[k+g]=v=Zt(l[h+g],v)}function Se(l,h,g,v,T){var L;for(L=0;L<g;++L){var k=l[h+L],F=k>>8&255,V=16711935&(V=(V=16711935&k)+((F<<16)+F));v[T+L]=(4278255360&k)+V>>>0}}function $t(l,h){h.jd=255&l,h.hd=l>>8&255,h.ud=l>>16&255}function me(l,h,g,v,T,L){var k;for(k=0;k<v;++k){var F=h[g+k],V=F>>>8,q=F,Z=255&(Z=(Z=F>>>16)+((l.jd<<24>>24)*(V<<24>>24)>>>5));q=255&(q=(q+=(l.hd<<24>>24)*(V<<24>>24)>>>5)+((l.ud<<24>>24)*(Z<<24>>24)>>>5)),T[L+k]=(4278255360&F)+(Z<<16)+q}}function Kt(l,h,g,v,T){E[h]=function(L,k,F,V,q,Z,ct,z,tt){for(V=ct;V<z;++V)for(ct=0;ct<tt;++ct)q[Z++]=T(F[v(L[k++])])},E[l]=function(L,k,F,V,q,Z,ct){var z=8>>L.b,tt=L.Ea,it=L.K[0],bt=L.w;if(8>z)for(L=(1<<L.b)-1,bt=(1<<z)-1;k<F;++k){var lt,wt=0;for(lt=0;lt<tt;++lt)lt&L||(wt=v(V[q++])),Z[ct++]=T(it[wt&bt]),wt>>=z}else E["VP8LMapColor"+g](V,q,it,bt,Z,ct,k,F,tt)}}function en(l,h,g,v,T){for(g=h+g;h<g;){var L=l[h++];v[T++]=L>>16&255,v[T++]=L>>8&255,v[T++]=255&L}}function De(l,h,g,v,T){for(g=h+g;h<g;){var L=l[h++];v[T++]=L>>16&255,v[T++]=L>>8&255,v[T++]=255&L,v[T++]=L>>24&255}}function Ee(l,h,g,v,T){for(g=h+g;h<g;){var L=(k=l[h++])>>16&240|k>>12&15,k=240&k|k>>28&15;v[T++]=L,v[T++]=k}}function we(l,h,g,v,T){for(g=h+g;h<g;){var L=(k=l[h++])>>16&248|k>>13&7,k=k>>5&224|k>>3&31;v[T++]=L,v[T++]=k}}function on(l,h,g,v,T){for(g=h+g;h<g;){var L=l[h++];v[T++]=255&L,v[T++]=L>>8&255,v[T++]=L>>16&255}}function te(l,h,g,v,T,L){if(L==0)for(g=h+g;h<g;)Lt(v,((L=l[h++])[0]>>24|L[1]>>8&65280|L[2]<<8&16711680|L[3]<<24)>>>0),T+=32;else r(v,T,l,h,g)}function ze(l,h){E[h][0]=E[l+"0"],E[h][1]=E[l+"1"],E[h][2]=E[l+"2"],E[h][3]=E[l+"3"],E[h][4]=E[l+"4"],E[h][5]=E[l+"5"],E[h][6]=E[l+"6"],E[h][7]=E[l+"7"],E[h][8]=E[l+"8"],E[h][9]=E[l+"9"],E[h][10]=E[l+"10"],E[h][11]=E[l+"11"],E[h][12]=E[l+"12"],E[h][13]=E[l+"13"],E[h][14]=E[l+"0"],E[h][15]=E[l+"0"]}function oe(l){return l==Jc||l==Zc||l==Cl||l==tu}function fe(){this.eb=[],this.size=this.A=this.fb=0}function He(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function xe(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new fe,this.f.kb=new He,this.sd=null}function ne(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function ke(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function Fi(l){return alert("todo:WebPSamplerProcessPlane"),l.T}function kn(l,h){var g=l.T,v=h.ba.f.RGBA,T=v.eb,L=v.fb+l.ka*v.A,k=fi[h.ba.S],F=l.y,V=l.O,q=l.f,Z=l.N,ct=l.ea,z=l.W,tt=h.cc,it=h.dc,bt=h.Mc,lt=h.Nc,wt=l.ka,At=l.ka+l.T,Pt=l.U,St=Pt+1>>1;for(wt==0?k(F,V,null,null,q,Z,ct,z,q,Z,ct,z,T,L,null,null,Pt):(k(h.ec,h.fc,F,V,tt,it,bt,lt,q,Z,ct,z,T,L-v.A,T,L,Pt),++g);wt+2<At;wt+=2)tt=q,it=Z,bt=ct,lt=z,Z+=l.Rc,z+=l.Rc,L+=2*v.A,k(F,(V+=2*l.fa)-l.fa,F,V,tt,it,bt,lt,q,Z,ct,z,T,L-v.A,T,L,Pt);return V+=l.fa,l.j+At<l.o?(r(h.ec,h.fc,F,V,Pt),r(h.cc,h.dc,q,Z,St),r(h.Mc,h.Nc,ct,z,St),g--):1&At||k(F,V,null,null,q,Z,ct,z,q,Z,ct,z,T,L+v.A,null,null,Pt),g}function ii(l,h,g){var v=l.F,T=[l.J];if(v!=null){var L=l.U,k=h.ba.S,F=k==kl||k==Cl;h=h.ba.f.RGBA;var V=[0],q=l.ka;V[0]=l.T,l.Kb&&(q==0?--V[0]:(--q,T[0]-=l.width),l.j+l.ka+l.T==l.o&&(V[0]=l.o-l.j-q));var Z=h.eb;q=h.fb+q*h.A,l=Id(v,T[0],l.width,L,V,Z,q+(F?0:3),h.A),t(g==V),l&&oe(k)&&qa(Z,q,F,L,V,h.A)}return 0}function ur(l){var h=l.ma,g=h.ba.S,v=11>g,T=g==Ll||g==Pl||g==kl||g==Xc||g==12||oe(g);if(h.memory=null,h.Ib=null,h.Jb=null,h.Nd=null,!hi(h.Oa,l,T?11:12))return 0;if(T&&oe(g)&&pr(),l.da)alert("todo:use_scaling");else{if(v){if(h.Ib=Fi,l.Kb){if(g=l.U+1>>1,h.memory=s(l.U+2*g),h.memory==null)return 0;h.ec=h.memory,h.fc=0,h.cc=h.ec,h.dc=h.fc+l.U,h.Mc=h.cc,h.Nc=h.dc+g,h.Ib=kn,pr()}}else alert("todo:EmitYUV");T&&(h.Jb=ii,v&&an())}if(v&&!$d){for(l=0;256>l;++l)F2[l]=89858*(l-128)+Dl>>Rl,V2[l]=-22014*(l-128)+Dl,B2[l]=-45773*(l-128),M2[l]=113618*(l-128)+Dl>>Rl;for(l=Ha;l<ru;++l)h=76283*(l-16)+Dl>>Rl,j2[l-Ha]=Dr(h,255),U2[l-Ha]=Dr(h+8>>4,15);$d=1}return 1}function se(l){var h=l.ma,g=l.U,v=l.T;return t(!(1&l.ka)),0>=g||0>=v?0:(g=h.Ib(l,h),h.Jb!=null&&h.Jb(l,h,g),h.Dc+=g,1)}function fn(l){l.ma.memory=null}function si(l,h,g,v){return xt(l,8)!=47?0:(h[0]=xt(l,14)+1,g[0]=xt(l,14)+1,v[0]=xt(l,1),xt(l,3)!=0?0:!l.h)}function Xn(l,h){if(4>l)return l+1;var g=l-2>>1;return(2+(1&l)<<g)+xt(h,g)+1}function Jn(l,h){return 120<h?h-120:1<=(g=((g=A2[h-1])>>4)*l+(8-(15&g)))?g:1;var g}function yn(l,h,g){var v=K(g),T=l[h+=255&v].g-8;return 0<T&&(nt(g,g.u+8),v=K(g),h+=l[h].value,h+=v&(1<<T)-1),nt(g,g.u+l[h].g),l[h].value}function jn(l,h,g){return g.g+=l.g,g.value+=l.value<<h>>>0,t(8>=g.g),l.g}function vn(l,h,g){var v=l.xc;return t((h=v==0?0:l.vc[l.md*(g>>v)+(h>>v)])<l.Wb),l.Ya[h]}function rs(l,h,g,v){var T=l.ab,L=l.c*h,k=l.C;h=k+h;var F=g,V=v;for(v=l.Ta,g=l.Ua;0<T--;){var q=l.gc[T],Z=k,ct=h,z=F,tt=V,it=(V=v,F=g,q.Ea);switch(t(Z<ct),t(ct<=q.nc),q.hc){case 2:Qo(z,tt,(ct-Z)*it,V,F);break;case 0:var bt=Z,lt=ct,wt=V,At=F,Pt=(zt=q).Ea;bt==0&&(Rs(z,tt,null,null,1,wt,At),le(z,tt+1,0,0,Pt-1,wt,At+1),tt+=Pt,At+=Pt,++bt);for(var St=1<<zt.b,Yt=St-1,jt=It(Pt,zt.b),Ie=zt.K,zt=zt.w+(bt>>zt.b)*jt;bt<lt;){var Fe=Ie,Wn=zt,Ne=1;for(Ds(z,tt,wt,At-Pt,1,wt,At);Ne<Pt;){var Ht=(Ne&~Yt)+St;Ht>Pt&&(Ht=Pt),(0,Ii[Fe[Wn++]>>8&15])(z,tt+ +Ne,wt,At+Ne-Pt,Ht-Ne,wt,At+Ne),Ne=Ht}tt+=Pt,At+=Pt,++bt&Yt||(zt+=jt)}ct!=q.nc&&r(V,F-it,V,F+(ct-Z-1)*it,it);break;case 1:for(it=z,lt=tt,Pt=(z=q.Ea)-(At=z&~(wt=(tt=1<<q.b)-1)),bt=It(z,q.b),St=q.K,q=q.w+(Z>>q.b)*bt;Z<ct;){for(Yt=St,jt=q,Ie=new ee,zt=lt+At,Fe=lt+z;lt<zt;)$t(Yt[jt++],Ie),go(Ie,it,lt,tt,V,F),lt+=tt,F+=tt;lt<Fe&&($t(Yt[jt++],Ie),go(Ie,it,lt,Pt,V,F),lt+=Pt,F+=Pt),++Z&wt||(q+=bt)}break;case 3:if(z==V&&tt==F&&0<q.b){for(lt=V,z=it=F+(ct-Z)*it-(At=(ct-Z)*It(q.Ea,q.b)),tt=V,wt=F,bt=[],At=(Pt=At)-1;0<=At;--At)bt[At]=tt[wt+At];for(At=Pt-1;0<=At;--At)lt[z+At]=bt[At];mo(q,Z,ct,V,it,V,F)}else mo(q,Z,ct,z,tt,V,F)}F=v,V=g}V!=g&&r(v,g,F,V,L)}function Mi(l,h){var g=l.V,v=l.Ba+l.c*l.C,T=h-l.C;if(t(h<=l.l.o),t(16>=T),0<T){var L=l.l,k=l.Ta,F=l.Ua,V=L.width;if(rs(l,T,g,v),T=F=[F],t((g=l.C)<(v=h)),t(L.v<L.va),v>L.o&&(v=L.o),g<L.j){var q=L.j-g;g=L.j,T[0]+=q*V}if(g>=v?g=0:(T[0]+=4*L.v,L.ka=g-L.j,L.U=L.va-L.v,L.T=v-g,g=1),g){if(F=F[0],11>(g=l.ca).S){var Z=g.f.RGBA,ct=(v=g.S,T=L.U,L=L.T,q=Z.eb,Z.A),z=L;for(Z=Z.fb+l.Ma*Z.A;0<z--;){var tt=k,it=F,bt=T,lt=q,wt=Z;switch(v){case Tl:ja(tt,it,bt,lt,wt);break;case Ll:Ua(tt,it,bt,lt,wt);break;case Jc:Ua(tt,it,bt,lt,wt),qa(lt,wt,0,bt,1,0);break;case Rd:vo(tt,it,bt,lt,wt);break;case Pl:te(tt,it,bt,lt,wt,1);break;case Zc:te(tt,it,bt,lt,wt,1),qa(lt,wt,0,bt,1,0);break;case kl:te(tt,it,bt,lt,wt,0);break;case Cl:te(tt,it,bt,lt,wt,0),qa(lt,wt,1,bt,1,0);break;case Xc:Yo(tt,it,bt,lt,wt);break;case tu:Yo(tt,it,bt,lt,wt),Sd(lt,wt,bt,1,0);break;case Dd:yo(tt,it,bt,lt,wt);break;default:t(0)}F+=V,Z+=ct}l.Ma+=L}else alert("todo:EmitRescaledRowsYUVA");t(l.Ma<=g.height)}}l.C=h,t(l.C<=l.i)}function hr(l){var h;if(0<l.ua)return 0;for(h=0;h<l.Wb;++h){var g=l.Ya[h].G,v=l.Ya[h].H;if(0<g[1][v[1]+0].g||0<g[2][v[2]+0].g||0<g[3][v[3]+0].g)return 0}return 1}function zr(l,h,g,v,T,L){if(l.Z!=0){var k=l.qd,F=l.rd;for(t(Bs[l.Z]!=null);h<g;++h)Bs[l.Z](k,F,v,T,v,T,L),k=v,F=T,T+=L;l.qd=k,l.rd=F}}function Sr(l,h){var g=l.l.ma,v=g.Z==0||g.Z==1?l.l.j:l.C;if(v=l.C<v?v:l.C,t(h<=l.l.o),h>v){var T=l.l.width,L=g.ca,k=g.tb+T*v,F=l.V,V=l.Ba+l.c*v,q=l.gc;t(l.ab==1),t(q[0].hc==3),Qc(q[0],v,h,F,V,L,k),zr(g,v,h,L,k,T)}l.C=l.Ma=h}function dr(l,h,g,v,T,L,k){var F=l.$/v,V=l.$%v,q=l.m,Z=l.s,ct=g+l.$,z=ct;T=g+v*T;var tt=g+v*L,it=280+Z.ua,bt=l.Pb?F:16777216,lt=0<Z.ua?Z.Wa:null,wt=Z.wc,At=ct<tt?vn(Z,V,F):null;t(l.C<L),t(tt<=T);var Pt=!1;t:for(;;){for(;Pt||ct<tt;){var St=0;if(F>=bt){var Yt=ct-g;t((bt=l).Pb),bt.wd=bt.m,bt.xd=Yt,0<bt.s.ua&&Dt(bt.s.Wa,bt.s.vb),bt=F+x2}if(V&wt||(At=vn(Z,V,F)),t(At!=null),At.Qb&&(h[ct]=At.qb,Pt=!0),!Pt)if(st(q),At.jc){St=q,Yt=h;var jt=ct,Ie=At.pd[K(St)&Go-1];t(At.jc),256>Ie.g?(nt(St,St.u+Ie.g),Yt[jt]=Ie.value,St=0):(nt(St,St.u+Ie.g-256),t(256<=Ie.value),St=Ie.value),St==0&&(Pt=!0)}else St=yn(At.G[0],At.H[0],q);if(q.h)break;if(Pt||256>St){if(!Pt)if(At.nd)h[ct]=(At.qb|St<<8)>>>0;else{if(st(q),Pt=yn(At.G[1],At.H[1],q),st(q),Yt=yn(At.G[2],At.H[2],q),jt=yn(At.G[3],At.H[3],q),q.h)break;h[ct]=(jt<<24|Pt<<16|St<<8|Yt)>>>0}if(Pt=!1,++ct,++V>=v&&(V=0,++F,k!=null&&F<=L&&!(F%16)&&k(l,F),lt!=null))for(;z<ct;)St=h[z++],lt.X[(506832829*St&4294967295)>>>lt.Mb]=St}else if(280>St){if(St=Xn(St-256,q),Yt=yn(At.G[4],At.H[4],q),st(q),Yt=Jn(v,Yt=Xn(Yt,q)),q.h)break;if(ct-g<Yt||T-ct<St)break t;for(jt=0;jt<St;++jt)h[ct+jt]=h[ct+jt-Yt];for(ct+=St,V+=St;V>=v;)V-=v,++F,k!=null&&F<=L&&!(F%16)&&k(l,F);if(t(ct<=T),V&wt&&(At=vn(Z,V,F)),lt!=null)for(;z<ct;)St=h[z++],lt.X[(506832829*St&4294967295)>>>lt.Mb]=St}else{if(!(St<it))break t;for(Pt=St-280,t(lt!=null);z<ct;)St=h[z++],lt.X[(506832829*St&4294967295)>>>lt.Mb]=St;St=ct,t(!(Pt>>>(Yt=lt).Xa)),h[St]=Yt.X[Pt],Pt=!0}Pt||t(q.h==J(q))}if(l.Pb&&q.h&&ct<T)t(l.m.h),l.a=5,l.m=l.wd,l.$=l.xd,0<l.s.ua&&Dt(l.s.vb,l.s.Wa);else{if(q.h)break t;k!=null&&k(l,F>L?L:F),l.a=0,l.$=ct-g}return 1}return l.a=3,0}function Cn(l){t(l!=null),l.vc=null,l.yc=null,l.Ya=null;var h=l.Wa;h!=null&&(h.X=null),l.vb=null,t(l!=null)}function Bi(){var l=new Bt;return l==null?null:(l.a=0,l.xb=Md,ze("Predictor","VP8LPredictors"),ze("Predictor","VP8LPredictors_C"),ze("PredictorAdd","VP8LPredictorsAdd"),ze("PredictorAdd","VP8LPredictorsAdd_C"),Qo=Se,go=me,ja=en,Ua=De,Yo=Ee,yo=we,vo=on,E.VP8LMapColor32b=Un,E.VP8LMapColor8b=Wi,l)}function Hr(l,h,g,v,T){var L=1,k=[l],F=[h],V=v.m,q=v.s,Z=null,ct=0;t:for(;;){if(g)for(;L&&xt(V,1);){var z=k,tt=F,it=v,bt=1,lt=it.m,wt=it.gc[it.ab],At=xt(lt,2);if(it.Oc&1<<At)L=0;else{switch(it.Oc|=1<<At,wt.hc=At,wt.Ea=z[0],wt.nc=tt[0],wt.K=[null],++it.ab,t(4>=it.ab),At){case 0:case 1:wt.b=xt(lt,3)+2,bt=Hr(It(wt.Ea,wt.b),It(wt.nc,wt.b),0,it,wt.K),wt.K=wt.K[0];break;case 3:var Pt,St=xt(lt,8)+1,Yt=16<St?0:4<St?1:2<St?2:3;if(z[0]=It(wt.Ea,Yt),wt.b=Yt,Pt=bt=Hr(St,1,0,it,wt.K)){var jt,Ie=St,zt=wt,Fe=1<<(8>>zt.b),Wn=s(Fe);if(Wn==null)Pt=0;else{var Ne=zt.K[0],Ht=zt.w;for(Wn[0]=zt.K[0][0],jt=1;jt<1*Ie;++jt)Wn[jt]=Zt(Ne[Ht+jt],Wn[jt-1]);for(;jt<4*Fe;++jt)Wn[jt]=0;zt.K[0]=null,zt.K[0]=Wn,Pt=1}}bt=Pt;break;case 2:break;default:t(0)}L=bt}}if(k=k[0],F=F[0],L&&xt(V,1)&&!(L=1<=(ct=xt(V,4))&&11>=ct)){v.a=3;break t}var Rt;if(Rt=L)e:{var Dn,_e,Be,mn=v,rr=k,Pr=F,Nn=ct,yr=g,kr=mn.m,Gn=mn.s,je=[null],Ye=1,Tn=0,Xe=E2[Nn];n:for(;;){if(yr&&xt(kr,1)){var ir=xt(kr,3)+2,Ti=It(rr,ir),On=It(Pr,ir),Vr=Ti*On;if(!Hr(Ti,On,0,mn,je))break n;for(je=je[0],Gn.xc=ir,Dn=0;Dn<Vr;++Dn){var rn=je[Dn]>>8&65535;je[Dn]=rn,rn>=Ye&&(Ye=rn+1)}}if(kr.h)break n;for(_e=0;5>_e;++_e){var Kn=Od[_e];!_e&&0<Nn&&(Kn+=1<<Nn),Tn<Kn&&(Tn=Kn)}var Yr=o(Ye*Xe,S),Cr=Ye,Xr=o(Cr,ut);if(Xr==null)var Jr=null;else t(65536>=Cr),Jr=Xr;var jr=s(Tn);if(Jr==null||jr==null||Yr==null){mn.a=1;break n}var Zr=Yr;for(Dn=Be=0;Dn<Ye;++Dn){var un=Jr[Dn],ti=un.G,Li=un.H,bo=0,ms=1,sr=0;for(_e=0;5>_e;++_e){Kn=Od[_e],ti[_e]=Zr,Li[_e]=Be,!_e&&0<Nn&&(Kn+=1<<Nn);i:{var Fl,iu=Kn,Ml=mn,Wa=jr,z2=Zr,H2=Be,su=0,Vs=Ml.m,W2=xt(Vs,1);if(i(Wa,0,0,iu),W2){var G2=xt(Vs,1)+1,K2=xt(Vs,1),Hd=xt(Vs,K2==0?1:8);Wa[Hd]=1,G2==2&&(Wa[Hd=xt(Vs,8)]=1);var Bl=1}else{var Wd=s(19),Gd=xt(Vs,4)+4;if(19<Gd){Ml.a=3;var Vl=0;break i}for(Fl=0;Fl<Gd;++Fl)Wd[_2[Fl]]=xt(Vs,3);var ou=void 0,Ga=void 0,Kd=Ml,Q2=Wd,jl=iu,Qd=Wa,au=0,js=Kd.m,Yd=8,Xd=o(128,S);r:for(;x(Xd,0,7,Q2,19);){if(xt(js,1)){var Y2=2+2*xt(js,3);if((ou=2+xt(js,Y2))>jl)break r}else ou=jl;for(Ga=0;Ga<jl&&ou--;){st(js);var Jd=Xd[0+(127&K(js))];nt(js,js.u+Jd.g);var Zo=Jd.value;if(16>Zo)Qd[Ga++]=Zo,Zo!=0&&(Yd=Zo);else{var X2=Zo==16,Zd=Zo-16,J2=b2[Zd],tf=xt(js,v2[Zd])+J2;if(Ga+tf>jl)break r;for(var Z2=X2?Yd:0;0<tf--;)Qd[Ga++]=Z2}}au=1;break r}au||(Kd.a=3),Bl=au}(Bl=Bl&&!Vs.h)&&(su=x(z2,H2,8,Wa,iu)),Bl&&su!=0?Vl=su:(Ml.a=3,Vl=0)}if(Vl==0)break n;if(ms&&w2[_e]==1&&(ms=Zr[Be].g==0),bo+=Zr[Be].g,Be+=Vl,3>=_e){var Ka,lu=jr[0];for(Ka=1;Ka<Kn;++Ka)jr[Ka]>lu&&(lu=jr[Ka]);sr+=lu}}if(un.nd=ms,un.Qb=0,ms&&(un.qb=(ti[3][Li[3]+0].value<<24|ti[1][Li[1]+0].value<<16|ti[2][Li[2]+0].value)>>>0,bo==0&&256>ti[0][Li[0]+0].value&&(un.Qb=1,un.qb+=ti[0][Li[0]+0].value<<8)),un.jc=!un.Qb&&6>sr,un.jc){var Ul,gs=un;for(Ul=0;Ul<Go;++Ul){var Us=Ul,$s=gs.pd[Us],$l=gs.G[0][gs.H[0]+Us];256<=$l.value?($s.g=$l.g+256,$s.value=$l.value):($s.g=0,$s.value=0,Us>>=jn($l,8,$s),Us>>=jn(gs.G[1][gs.H[1]+Us],16,$s),Us>>=jn(gs.G[2][gs.H[2]+Us],0,$s),jn(gs.G[3][gs.H[3]+Us],24,$s))}}}Gn.vc=je,Gn.Wb=Ye,Gn.Ya=Jr,Gn.yc=Yr,Rt=1;break e}Rt=0}if(!(L=Rt)){v.a=3;break t}if(0<ct){if(q.ua=1<<ct,!U(q.Wa,ct)){v.a=1,L=0;break t}}else q.ua=0;var cu=v,ef=k,t0=F,uu=cu.s,hu=uu.xc;if(cu.c=ef,cu.i=t0,uu.md=It(ef,hu),uu.wc=hu==0?-1:(1<<hu)-1,g){v.xb=k2;break t}if((Z=s(k*F))==null){v.a=1,L=0;break t}L=(L=dr(v,Z,0,k,F,F,null))&&!V.h;break t}return L?(T!=null?T[0]=Z:(t(Z==null),t(g)),v.$=0,g||Cn(q)):Cn(q),L}function wi(l,h){var g=l.c*l.i,v=g+h+16*h;return t(l.c<=h),l.V=s(v),l.V==null?(l.Ta=null,l.Ua=0,l.a=1,0):(l.Ta=l.V,l.Ua=l.Ba+g+h,1)}function Vi(l,h){var g=l.C,v=h-g,T=l.V,L=l.Ba+l.c*g;for(t(h<=l.l.o);0<v;){var k=16<v?16:v,F=l.l.ma,V=l.l.width,q=V*k,Z=F.ca,ct=F.tb+V*g,z=l.Ta,tt=l.Ua;rs(l,k,T,L),Nd(z,tt,Z,ct,q),zr(F,g,g+k,Z,ct,V),v-=k,T+=k*l.c,g+=k}t(g==h),l.C=l.Ma=h}function is(){this.ub=this.yd=this.td=this.Rb=0}function ss(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function La(){this.Fb=this.Bb=this.Cb=0,this.Zb=s(4),this.Lb=s(4)}function ji(){this.Yb=function(){var l=[];return function h(g,v,T){for(var L=T[v],k=0;k<L&&(g.push(T.length>v+1?[]:0),!(T.length<v+1));k++)h(g[k],v+1,T)}(l,0,[3,11]),l}()}function ro(){this.jb=s(3),this.Wc=a([4,8],ji),this.Xc=a([4,17],ji)}function xs(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new s(4),this.od=new s(4)}function Zn(){this.ld=this.La=this.dd=this.tc=0}function Wr(){this.Na=this.la=0}function Ss(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function io(){this.ad=s(384),this.Za=0,this.Ob=s(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function so(){this.uc=this.M=this.Nb=0,this.wa=Array(new Zn),this.Y=0,this.ya=Array(new io),this.aa=0,this.l=new Ui}function oo(){this.y=s(16),this.f=s(8),this.ea=s(8)}function ao(){this.cb=this.a=0,this.sc="",this.m=new P,this.Od=new is,this.Kc=new ss,this.ed=new xs,this.Qa=new La,this.Ic=this.$c=this.Aa=0,this.D=new so,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=o(8,P),this.ia=0,this.pb=o(4,Ss),this.Pa=new ro,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new oo),this.Hd=0,this.rb=Array(new Wr),this.sb=0,this.wa=Array(new Zn),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new io),this.L=this.aa=0,this.gd=a([4,2],Zn),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Dr(l,h){return 0>l?0:l>h?h:l}function Ui(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function jo(){var l=new ao;return l!=null&&(l.a=0,l.sc="OK",l.cb=0,l.Xb=0,za||(za=os)),l}function _n(l,h,g){return l.a==0&&(l.a=h,l.sc=g,l.cb=0),0}function Uo(l,h,g){return 3<=g&&l[h+0]==157&&l[h+1]==1&&l[h+2]==42}function oi(l,h){if(l==null)return 0;if(l.a=0,l.sc="OK",h==null)return _n(l,2,"null VP8Io passed to VP8GetHeaders()");var g=h.data,v=h.w,T=h.ha;if(4>T)return _n(l,7,"Truncated header.");var L=g[v+0]|g[v+1]<<8|g[v+2]<<16,k=l.Od;if(k.Rb=!(1&L),k.td=L>>1&7,k.yd=L>>4&1,k.ub=L>>5,3<k.td)return _n(l,3,"Incorrect keyframe parameters.");if(!k.yd)return _n(l,4,"Frame not displayable.");v+=3,T-=3;var F=l.Kc;if(k.Rb){if(7>T)return _n(l,7,"cannot parse picture header");if(!Uo(g,v,T))return _n(l,3,"Bad code word");F.c=16383&(g[v+4]<<8|g[v+3]),F.Td=g[v+4]>>6,F.i=16383&(g[v+6]<<8|g[v+5]),F.Ud=g[v+6]>>6,v+=7,T-=7,l.za=F.c+15>>4,l.Ub=F.i+15>>4,h.width=F.c,h.height=F.i,h.Da=0,h.j=0,h.v=0,h.va=h.width,h.o=h.height,h.da=0,h.ib=h.width,h.hb=h.height,h.U=h.width,h.T=h.height,i((L=l.Pa).jb,0,255,L.jb.length),t((L=l.Qa)!=null),L.Cb=0,L.Bb=0,L.Fb=1,i(L.Zb,0,0,L.Zb.length),i(L.Lb,0,0,L.Lb)}if(k.ub>T)return _n(l,7,"bad partition length");yt(L=l.m,g,v,k.ub),v+=k.ub,T-=k.ub,k.Rb&&(F.Ld=ft(L),F.Kd=ft(L)),F=l.Qa;var V,q=l.Pa;if(t(L!=null),t(F!=null),F.Cb=ft(L),F.Cb){if(F.Bb=ft(L),ft(L)){for(F.Fb=ft(L),V=0;4>V;++V)F.Zb[V]=ft(L)?at(L,7):0;for(V=0;4>V;++V)F.Lb[V]=ft(L)?at(L,6):0}if(F.Bb)for(V=0;3>V;++V)q.jb[V]=ft(L)?mt(L,8):255}else F.Bb=0;if(L.Ka)return _n(l,3,"cannot parse segment header");if((F=l.ed).zd=ft(L),F.Tb=mt(L,6),F.wb=mt(L,3),F.Pc=ft(L),F.Pc&&ft(L)){for(q=0;4>q;++q)ft(L)&&(F.vd[q]=at(L,6));for(q=0;4>q;++q)ft(L)&&(F.od[q]=at(L,6))}if(l.L=F.Tb==0?0:F.zd?1:2,L.Ka)return _n(l,3,"cannot parse filter header");var Z=T;if(T=V=v,v=V+Z,F=Z,l.Xb=(1<<mt(l.m,2))-1,Z<3*(q=l.Xb))g=7;else{for(V+=3*q,F-=3*q,Z=0;Z<q;++Z){var ct=g[T+0]|g[T+1]<<8|g[T+2]<<16;ct>F&&(ct=F),yt(l.Jc[+Z],g,V,ct),V+=ct,F-=ct,T+=3}yt(l.Jc[+q],g,V,F),g=V<v?0:5}if(g!=0)return _n(l,g,"cannot parse partitions");for(g=mt(V=l.m,7),T=ft(V)?at(V,4):0,v=ft(V)?at(V,4):0,F=ft(V)?at(V,4):0,q=ft(V)?at(V,4):0,V=ft(V)?at(V,4):0,Z=l.Qa,ct=0;4>ct;++ct){if(Z.Cb){var z=Z.Zb[ct];Z.Fb||(z+=g)}else{if(0<ct){l.pb[ct]=l.pb[0];continue}z=g}var tt=l.pb[ct];tt.Sc[0]=eu[Dr(z+T,127)],tt.Sc[1]=nu[Dr(z+0,127)],tt.Eb[0]=2*eu[Dr(z+v,127)],tt.Eb[1]=101581*nu[Dr(z+F,127)]>>16,8>tt.Eb[1]&&(tt.Eb[1]=8),tt.Qc[0]=eu[Dr(z+q,117)],tt.Qc[1]=nu[Dr(z+V,127)],tt.lc=z+V}if(!k.Rb)return _n(l,4,"Not a key frame.");for(ft(L),k=l.Pa,g=0;4>g;++g){for(T=0;8>T;++T)for(v=0;3>v;++v)for(F=0;11>F;++F)q=_t(L,L2[g][T][v][F])?mt(L,8):N2[g][T][v][F],k.Wc[g][T].Yb[v][F]=q;for(T=0;17>T;++T)k.Xc[g][T]=k.Wc[g][P2[T]]}return l.kc=ft(L),l.kc&&(l.Bd=mt(L,8)),l.cb=1}function os(l,h,g,v,T,L,k){var F=h[T].Yb[g];for(g=0;16>T;++T){if(!_t(l,F[g+0]))return T;for(;!_t(l,F[g+1]);)if(F=h[++T].Yb[0],g=0,T==16)return 16;var V=h[T+1].Yb;if(_t(l,F[g+2])){var q=l,Z=0;if(_t(q,(z=F)[(ct=g)+3]))if(_t(q,z[ct+6])){for(F=0,ct=2*(Z=_t(q,z[ct+8]))+(z=_t(q,z[ct+9+Z])),Z=0,z=S2[ct];z[F];++F)Z+=Z+_t(q,z[F]);Z+=3+(8<<ct)}else _t(q,z[ct+7])?(Z=7+2*_t(q,165),Z+=_t(q,145)):Z=5+_t(q,159);else Z=_t(q,z[ct+4])?3+_t(q,z[ct+5]):2;F=V[2]}else Z=1,F=V[1];V=k+I2[T],0>(q=l).b&&dt(q);var ct,z=q.b,tt=(ct=q.Ca>>1)-(q.I>>z)>>31;--q.b,q.Ca+=tt,q.Ca|=1,q.I-=(ct+1&tt)<<z,L[V]=((Z^tt)-tt)*v[(0<T)+0]}return 16}function Is(l){var h=l.rb[l.sb-1];h.la=0,h.Na=0,i(l.zc,0,0,l.zc.length),l.ja=0}function Ir(l,h,g,v,T){T=l[h+g+32*v]+(T>>3),l[h+g+32*v]=-256&T?0>T?0:255:T}function Or(l,h,g,v,T,L){Ir(l,h,0,g,v+T),Ir(l,h,1,g,v+L),Ir(l,h,2,g,v-L),Ir(l,h,3,g,v-T)}function qn(l){return(20091*l>>16)+l}function xn(l,h,g,v){var T,L=0,k=s(16);for(T=0;4>T;++T){var F=l[h+0]+l[h+8],V=l[h+0]-l[h+8],q=(35468*l[h+4]>>16)-qn(l[h+12]),Z=qn(l[h+4])+(35468*l[h+12]>>16);k[L+0]=F+Z,k[L+1]=V+q,k[L+2]=V-q,k[L+3]=F-Z,L+=4,h++}for(T=L=0;4>T;++T)F=(l=k[L+0]+4)+k[L+8],V=l-k[L+8],q=(35468*k[L+4]>>16)-qn(k[L+12]),Ir(g,v,0,0,F+(Z=qn(k[L+4])+(35468*k[L+12]>>16))),Ir(g,v,1,0,V+q),Ir(g,v,2,0,V-q),Ir(g,v,3,0,F-Z),L++,v+=32}function as(l,h,g,v){var T=l[h+0]+4,L=35468*l[h+4]>>16,k=qn(l[h+4]),F=35468*l[h+1]>>16;Or(g,v,0,T+k,l=qn(l[h+1]),F),Or(g,v,1,T+L,l,F),Or(g,v,2,T-L,l,F),Or(g,v,3,T-k,l,F)}function $o(l,h,g,v,T){xn(l,h,g,v),T&&xn(l,h+16,g,v+4)}function Ke(l,h,g,v){ds(l,h+0,g,v,1),ds(l,h+32,g,v+128,1)}function Ns(l,h,g,v){var T;for(l=l[h+0]+4,T=0;4>T;++T)for(h=0;4>h;++h)Ir(g,v,h,T,l)}function fr(l,h,g,v){l[h+0]&&gr(l,h+0,g,v),l[h+16]&&gr(l,h+16,g,v+4),l[h+32]&&gr(l,h+32,g,v+128),l[h+48]&&gr(l,h+48,g,v+128+4)}function $i(l,h,g,v){var T,L=s(16);for(T=0;4>T;++T){var k=l[h+0+T]+l[h+12+T],F=l[h+4+T]+l[h+8+T],V=l[h+4+T]-l[h+8+T],q=l[h+0+T]-l[h+12+T];L[0+T]=k+F,L[8+T]=k-F,L[4+T]=q+V,L[12+T]=q-V}for(T=0;4>T;++T)k=(l=L[0+4*T]+3)+L[3+4*T],F=L[1+4*T]+L[2+4*T],V=L[1+4*T]-L[2+4*T],q=l-L[3+4*T],g[v+0]=k+F>>3,g[v+16]=q+V>>3,g[v+32]=k-F>>3,g[v+48]=q-V>>3,v+=64}function Ts(l,h,g){var v,T=h-32,L=Qr,k=255-l[T-1];for(v=0;v<g;++v){var F,V=L,q=k+l[h-1];for(F=0;F<g;++F)l[h+F]=V[q+l[T+F]];h+=32}}function ls(l,h){Ts(l,h,4)}function lo(l,h){Ts(l,h,8)}function Pa(l,h){Ts(l,h,16)}function ka(l,h){var g;for(g=0;16>g;++g)r(l,h+32*g,l,h-32,16)}function Ca(l,h){var g;for(g=16;0<g;--g)i(l,h,l[h-1],16),h+=32}function Fr(l,h,g){var v;for(v=0;16>v;++v)i(h,g+32*v,l,16)}function Gr(l,h){var g,v=16;for(g=0;16>g;++g)v+=l[h-1+32*g]+l[h+g-32];Fr(v>>5,l,h)}function _i(l,h){var g,v=8;for(g=0;16>g;++g)v+=l[h-1+32*g];Fr(v>>4,l,h)}function qo(l,h){var g,v=8;for(g=0;16>g;++g)v+=l[h+g-32];Fr(v>>4,l,h)}function qi(l,h){Fr(128,l,h)}function re(l,h,g){return l+2*h+g+2>>2}function Ra(l,h){var g,v=h-32;for(v=new Uint8Array([re(l[v-1],l[v+0],l[v+1]),re(l[v+0],l[v+1],l[v+2]),re(l[v+1],l[v+2],l[v+3]),re(l[v+2],l[v+3],l[v+4])]),g=0;4>g;++g)r(l,h+32*g,v,0,v.length)}function Da(l,h){var g=l[h-1],v=l[h-1+32],T=l[h-1+64],L=l[h-1+96];Lt(l,h+0,16843009*re(l[h-1-32],g,v)),Lt(l,h+32,16843009*re(g,v,T)),Lt(l,h+64,16843009*re(v,T,L)),Lt(l,h+96,16843009*re(T,L,L))}function Oa(l,h){var g,v=4;for(g=0;4>g;++g)v+=l[h+g-32]+l[h-1+32*g];for(v>>=3,g=0;4>g;++g)i(l,h+32*g,v,4)}function ai(l,h){var g=l[h-1+0],v=l[h-1+32],T=l[h-1+64],L=l[h-1-32],k=l[h+0-32],F=l[h+1-32],V=l[h+2-32],q=l[h+3-32];l[h+0+96]=re(v,T,l[h-1+96]),l[h+1+96]=l[h+0+64]=re(g,v,T),l[h+2+96]=l[h+1+64]=l[h+0+32]=re(L,g,v),l[h+3+96]=l[h+2+64]=l[h+1+32]=l[h+0+0]=re(k,L,g),l[h+3+64]=l[h+2+32]=l[h+1+0]=re(F,k,L),l[h+3+32]=l[h+2+0]=re(V,F,k),l[h+3+0]=re(q,V,F)}function Fa(l,h){var g=l[h+1-32],v=l[h+2-32],T=l[h+3-32],L=l[h+4-32],k=l[h+5-32],F=l[h+6-32],V=l[h+7-32];l[h+0+0]=re(l[h+0-32],g,v),l[h+1+0]=l[h+0+32]=re(g,v,T),l[h+2+0]=l[h+1+32]=l[h+0+64]=re(v,T,L),l[h+3+0]=l[h+2+32]=l[h+1+64]=l[h+0+96]=re(T,L,k),l[h+3+32]=l[h+2+64]=l[h+1+96]=re(L,k,F),l[h+3+64]=l[h+2+96]=re(k,F,V),l[h+3+96]=re(F,V,V)}function Ai(l,h){var g=l[h-1+0],v=l[h-1+32],T=l[h-1+64],L=l[h-1-32],k=l[h+0-32],F=l[h+1-32],V=l[h+2-32],q=l[h+3-32];l[h+0+0]=l[h+1+64]=L+k+1>>1,l[h+1+0]=l[h+2+64]=k+F+1>>1,l[h+2+0]=l[h+3+64]=F+V+1>>1,l[h+3+0]=V+q+1>>1,l[h+0+96]=re(T,v,g),l[h+0+64]=re(v,g,L),l[h+0+32]=l[h+1+96]=re(g,L,k),l[h+1+32]=l[h+2+96]=re(L,k,F),l[h+2+32]=l[h+3+96]=re(k,F,V),l[h+3+32]=re(F,V,q)}function Mr(l,h){var g=l[h+0-32],v=l[h+1-32],T=l[h+2-32],L=l[h+3-32],k=l[h+4-32],F=l[h+5-32],V=l[h+6-32],q=l[h+7-32];l[h+0+0]=g+v+1>>1,l[h+1+0]=l[h+0+64]=v+T+1>>1,l[h+2+0]=l[h+1+64]=T+L+1>>1,l[h+3+0]=l[h+2+64]=L+k+1>>1,l[h+0+32]=re(g,v,T),l[h+1+32]=l[h+0+96]=re(v,T,L),l[h+2+32]=l[h+1+96]=re(T,L,k),l[h+3+32]=l[h+2+96]=re(L,k,F),l[h+3+64]=re(k,F,V),l[h+3+96]=re(F,V,q)}function Ls(l,h){var g=l[h-1+0],v=l[h-1+32],T=l[h-1+64],L=l[h-1+96];l[h+0+0]=g+v+1>>1,l[h+2+0]=l[h+0+32]=v+T+1>>1,l[h+2+32]=l[h+0+64]=T+L+1>>1,l[h+1+0]=re(g,v,T),l[h+3+0]=l[h+1+32]=re(v,T,L),l[h+3+32]=l[h+1+64]=re(T,L,L),l[h+3+64]=l[h+2+64]=l[h+0+96]=l[h+1+96]=l[h+2+96]=l[h+3+96]=L}function zo(l,h){var g=l[h-1+0],v=l[h-1+32],T=l[h-1+64],L=l[h-1+96],k=l[h-1-32],F=l[h+0-32],V=l[h+1-32],q=l[h+2-32];l[h+0+0]=l[h+2+32]=g+k+1>>1,l[h+0+32]=l[h+2+64]=v+g+1>>1,l[h+0+64]=l[h+2+96]=T+v+1>>1,l[h+0+96]=L+T+1>>1,l[h+3+0]=re(F,V,q),l[h+2+0]=re(k,F,V),l[h+1+0]=l[h+3+32]=re(g,k,F),l[h+1+32]=l[h+3+64]=re(v,g,k),l[h+1+64]=l[h+3+96]=re(T,v,g),l[h+1+96]=re(L,T,v)}function li(l,h){var g;for(g=0;8>g;++g)r(l,h+32*g,l,h-32,8)}function Ei(l,h){var g;for(g=0;8>g;++g)i(l,h,l[h-1],8),h+=32}function Kr(l,h,g){var v;for(v=0;8>v;++v)i(h,g+32*v,l,8)}function co(l,h){var g,v=8;for(g=0;8>g;++g)v+=l[h+g-32]+l[h-1+32*g];Kr(v>>4,l,h)}function Qe(l,h){var g,v=4;for(g=0;8>g;++g)v+=l[h+g-32];Kr(v>>3,l,h)}function Ma(l,h){var g,v=4;for(g=0;8>g;++g)v+=l[h-1+32*g];Kr(v>>3,l,h)}function uo(l,h){Kr(128,l,h)}function xi(l,h,g){var v=l[h-g],T=l[h+0],L=3*(T-v)+Yc[1020+l[h-2*g]-l[h+g]],k=Nl[112+(L+4>>3)];l[h-g]=Qr[255+v+Nl[112+(L+3>>3)]],l[h+0]=Qr[255+T-k]}function Ps(l,h,g,v){var T=l[h+0],L=l[h+g];return di[255+l[h-2*g]-l[h-g]]>v||di[255+L-T]>v}function zi(l,h,g,v){return 4*di[255+l[h-g]-l[h+0]]+di[255+l[h-2*g]-l[h+g]]<=v}function Hi(l,h,g,v,T){var L=l[h-3*g],k=l[h-2*g],F=l[h-g],V=l[h+0],q=l[h+g],Z=l[h+2*g],ct=l[h+3*g];return 4*di[255+F-V]+di[255+k-q]>v?0:di[255+l[h-4*g]-L]<=T&&di[255+L-k]<=T&&di[255+k-F]<=T&&di[255+ct-Z]<=T&&di[255+Z-q]<=T&&di[255+q-V]<=T}function cs(l,h,g,v){var T=2*v+1;for(v=0;16>v;++v)zi(l,h+v,g,T)&&xi(l,h+v,g)}function Nr(l,h,g,v){var T=2*v+1;for(v=0;16>v;++v)zi(l,h+v*g,1,T)&&xi(l,h+v*g,1)}function us(l,h,g,v){var T;for(T=3;0<T;--T)cs(l,h+=4*g,g,v)}function Ho(l,h,g,v){var T;for(T=3;0<T;--T)Nr(l,h+=4,g,v)}function Tr(l,h,g,v,T,L,k,F){for(L=2*L+1;0<T--;){if(Hi(l,h,g,L,k))if(Ps(l,h,g,F))xi(l,h,g);else{var V=l,q=h,Z=g,ct=V[q-2*Z],z=V[q-Z],tt=V[q+0],it=V[q+Z],bt=V[q+2*Z],lt=27*(At=Yc[1020+3*(tt-z)+Yc[1020+ct-it]])+63>>7,wt=18*At+63>>7,At=9*At+63>>7;V[q-3*Z]=Qr[255+V[q-3*Z]+At],V[q-2*Z]=Qr[255+ct+wt],V[q-Z]=Qr[255+z+lt],V[q+0]=Qr[255+tt-lt],V[q+Z]=Qr[255+it-wt],V[q+2*Z]=Qr[255+bt-At]}h+=v}}function ci(l,h,g,v,T,L,k,F){for(L=2*L+1;0<T--;){if(Hi(l,h,g,L,k))if(Ps(l,h,g,F))xi(l,h,g);else{var V=l,q=h,Z=g,ct=V[q-Z],z=V[q+0],tt=V[q+Z],it=Nl[112+(4+(bt=3*(z-ct))>>3)],bt=Nl[112+(bt+3>>3)],lt=it+1>>1;V[q-2*Z]=Qr[255+V[q-2*Z]+lt],V[q-Z]=Qr[255+ct+bt],V[q+0]=Qr[255+z-it],V[q+Z]=Qr[255+tt-lt]}h+=v}}function ks(l,h,g,v,T,L){Tr(l,h,g,1,16,v,T,L)}function hs(l,h,g,v,T,L){Tr(l,h,1,g,16,v,T,L)}function ho(l,h,g,v,T,L){var k;for(k=3;0<k;--k)ci(l,h+=4*g,g,1,16,v,T,L)}function ui(l,h,g,v,T,L){var k;for(k=3;0<k;--k)ci(l,h+=4,1,g,16,v,T,L)}function Wo(l,h,g,v,T,L,k,F){Tr(l,h,T,1,8,L,k,F),Tr(g,v,T,1,8,L,k,F)}function p(l,h,g,v,T,L,k,F){Tr(l,h,1,T,8,L,k,F),Tr(g,v,1,T,8,L,k,F)}function I(l,h,g,v,T,L,k,F){ci(l,h+4*T,T,1,8,L,k,F),ci(g,v+4*T,T,1,8,L,k,F)}function $(l,h,g,v,T,L,k,F){ci(l,h+4,1,T,8,L,k,F),ci(g,v+4,1,T,8,L,k,F)}function X(){this.ba=new xe,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new ke,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function et(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function gt(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function Et(){this.ua=0,this.Wa=new Ae,this.vb=new Ae,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new ut,this.yc=new S}function Bt(){this.xb=this.a=0,this.l=new Ui,this.ca=new xe,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new H,this.Pb=0,this.wd=new H,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new Et,this.ab=0,this.gc=o(4,gt),this.Oc=0}function Vt(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Ui,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function ue(l,h,g,v,T,L,k){for(l=l==null?0:l[h+0],h=0;h<k;++h)T[L+h]=l+g[v+h]&255,l=T[L+h]}function ce(l,h,g,v,T,L,k){var F;if(l==null)ue(null,null,g,v,T,L,k);else for(F=0;F<k;++F)T[L+F]=l[h+F]+g[v+F]&255}function Ce(l,h,g,v,T,L,k){if(l==null)ue(null,null,g,v,T,L,k);else{var F,V=l[h+0],q=V,Z=V;for(F=0;F<k;++F)q=Z+(V=l[h+F])-q,Z=g[v+F]+(-256&q?0>q?0:255:q)&255,q=V,T[L+F]=Z}}function An(l,h,g,v){var T=h.width,L=h.o;if(t(l!=null&&h!=null),0>g||0>=v||g+v>L)return null;if(!l.Cc){if(l.ga==null){var k;if(l.ga=new Vt,(k=l.ga==null)||(k=h.width*h.o,t(l.Gb.length==0),l.Gb=s(k),l.Uc=0,l.Gb==null?k=0:(l.mb=l.Gb,l.nb=l.Uc,l.rc=null,k=1),k=!k),!k){k=l.ga;var F=l.Fa,V=l.P,q=l.qc,Z=l.mb,ct=l.nb,z=V+1,tt=q-1,it=k.l;if(t(F!=null&&Z!=null&&h!=null),Bs[0]=null,Bs[1]=ue,Bs[2]=ce,Bs[3]=Ce,k.ca=Z,k.tb=ct,k.c=h.width,k.i=h.height,t(0<k.c&&0<k.i),1>=q)h=0;else if(k.$a=3&F[V+0],k.Z=F[V+0]>>2&3,k.Lc=F[V+0]>>4&3,V=F[V+0]>>6&3,0>k.$a||1<k.$a||4<=k.Z||1<k.Lc||V)h=0;else if(it.put=se,it.ac=ur,it.bc=fn,it.ma=k,it.width=h.width,it.height=h.height,it.Da=h.Da,it.v=h.v,it.va=h.va,it.j=h.j,it.o=h.o,k.$a)t:{t(k.$a==1),h=Bi();e:for(;;){if(h==null){h=0;break t}if(t(k!=null),k.mc=h,h.c=k.c,h.i=k.i,h.l=k.l,h.l.ma=k,h.l.width=k.c,h.l.height=k.i,h.a=0,vt(h.m,F,z,tt),!Hr(k.c,k.i,1,h,null)||(h.ab==1&&h.gc[0].hc==3&&hr(h.s)?(k.ic=1,F=h.c*h.i,h.Ta=null,h.Ua=0,h.V=s(F),h.Ba=0,h.V==null?(h.a=1,h=0):h=1):(k.ic=0,h=wi(h,k.c)),!h))break e;h=1;break t}k.mc=null,h=0}else h=tt>=k.c*k.i;k=!h}if(k)return null;l.ga.Lc!=1?l.Ga=0:v=L-g}t(l.ga!=null),t(g+v<=L);t:{if(h=(F=l.ga).c,L=F.l.o,F.$a==0){if(z=l.rc,tt=l.Vc,it=l.Fa,V=l.P+1+g*h,q=l.mb,Z=l.nb+g*h,t(V<=l.P+l.qc),F.Z!=0)for(t(Bs[F.Z]!=null),k=0;k<v;++k)Bs[F.Z](z,tt,it,V,q,Z,h),z=q,tt=Z,Z+=h,V+=h;else for(k=0;k<v;++k)r(q,Z,it,V,h),z=q,tt=Z,Z+=h,V+=h;l.rc=z,l.Vc=tt}else{if(t(F.mc!=null),h=g+v,t((k=F.mc)!=null),t(h<=k.i),k.C>=h)h=1;else if(F.ic||an(),F.ic){F=k.V,z=k.Ba,tt=k.c;var bt=k.i,lt=(it=1,V=k.$/tt,q=k.$%tt,Z=k.m,ct=k.s,k.$),wt=tt*bt,At=tt*h,Pt=ct.wc,St=lt<At?vn(ct,q,V):null;t(lt<=wt),t(h<=bt),t(hr(ct));e:for(;;){for(;!Z.h&&lt<At;){if(q&Pt||(St=vn(ct,q,V)),t(St!=null),st(Z),256>(bt=yn(St.G[0],St.H[0],Z)))F[z+lt]=bt,++lt,++q>=tt&&(q=0,++V<=h&&!(V%16)&&Sr(k,V));else{if(!(280>bt)){it=0;break e}bt=Xn(bt-256,Z);var Yt,jt=yn(St.G[4],St.H[4],Z);if(st(Z),!(lt>=(jt=Jn(tt,jt=Xn(jt,Z)))&&wt-lt>=bt)){it=0;break e}for(Yt=0;Yt<bt;++Yt)F[z+lt+Yt]=F[z+lt+Yt-jt];for(lt+=bt,q+=bt;q>=tt;)q-=tt,++V<=h&&!(V%16)&&Sr(k,V);lt<At&&q&Pt&&(St=vn(ct,q,V))}t(Z.h==J(Z))}Sr(k,V>h?h:V);break e}!it||Z.h&&lt<wt?(it=0,k.a=Z.h?5:3):k.$=lt,h=it}else h=dr(k,k.V,k.Ba,k.c,k.i,h,Vi);if(!h){v=0;break t}}g+v>=L&&(l.Cc=1),v=1}if(!v)return null;if(l.Cc&&((v=l.ga)!=null&&(v.mc=null),l.ga=null,0<l.Ga))return alert("todo:WebPDequantizeLevels"),null}return l.nb+g*T}function We(l,h,g,v,T,L){for(;0<T--;){var k,F=l,V=h+(g?1:0),q=l,Z=h+(g?0:3);for(k=0;k<v;++k){var ct=q[Z+4*k];ct!=255&&(ct*=32897,F[V+4*k+0]=F[V+4*k+0]*ct>>23,F[V+4*k+1]=F[V+4*k+1]*ct>>23,F[V+4*k+2]=F[V+4*k+2]*ct>>23)}h+=L}}function qe(l,h,g,v,T){for(;0<v--;){var L;for(L=0;L<g;++L){var k=l[h+2*L+0],F=15&(q=l[h+2*L+1]),V=4369*F,q=(240&q|q>>4)*V>>16;l[h+2*L+0]=(240&k|k>>4)*V>>16&240|(15&k|k<<4)*V>>16>>4&15,l[h+2*L+1]=240&q|F}h+=T}}function Ge(l,h,g,v,T,L,k,F){var V,q,Z=255;for(q=0;q<T;++q){for(V=0;V<v;++V){var ct=l[h+V];L[k+4*V]=ct,Z&=ct}h+=g,k+=F}return Z!=255}function Re(l,h,g,v,T){var L;for(L=0;L<T;++L)g[v+L]=l[h+L]>>8}function an(){qa=We,Sd=qe,Id=Ge,Nd=Re}function zn(l,h,g){E[l]=function(v,T,L,k,F,V,q,Z,ct,z,tt,it,bt,lt,wt,At,Pt){var St,Yt=Pt-1>>1,jt=F[V+0]|q[Z+0]<<16,Ie=ct[z+0]|tt[it+0]<<16;t(v!=null);var zt=3*jt+Ie+131074>>2;for(h(v[T+0],255&zt,zt>>16,bt,lt),L!=null&&(zt=3*Ie+jt+131074>>2,h(L[k+0],255&zt,zt>>16,wt,At)),St=1;St<=Yt;++St){var Fe=F[V+St]|q[Z+St]<<16,Wn=ct[z+St]|tt[it+St]<<16,Ne=jt+Fe+Ie+Wn+524296,Ht=Ne+2*(Fe+Ie)>>3;zt=Ht+jt>>1,jt=(Ne=Ne+2*(jt+Wn)>>3)+Fe>>1,h(v[T+2*St-1],255&zt,zt>>16,bt,lt+(2*St-1)*g),h(v[T+2*St-0],255&jt,jt>>16,bt,lt+(2*St-0)*g),L!=null&&(zt=Ne+Ie>>1,jt=Ht+Wn>>1,h(L[k+2*St-1],255&zt,zt>>16,wt,At+(2*St-1)*g),h(L[k+2*St+0],255&jt,jt>>16,wt,At+(2*St+0)*g)),jt=Fe,Ie=Wn}1&Pt||(zt=3*jt+Ie+131074>>2,h(v[T+Pt-1],255&zt,zt>>16,bt,lt+(Pt-1)*g),L!=null&&(zt=3*Ie+jt+131074>>2,h(L[k+Pt-1],255&zt,zt>>16,wt,At+(Pt-1)*g)))}}function pr(){fi[Tl]=C2,fi[Ll]=Bd,fi[Rd]=R2,fi[Pl]=Vd,fi[kl]=jd,fi[Xc]=Ud,fi[Dd]=D2,fi[Jc]=Bd,fi[Zc]=Vd,fi[Cl]=jd,fi[tu]=Ud}function c(l){return l&-16384?0>l?0:255:l>>O2}function y(l,h){return c((19077*l>>8)+(26149*h>>8)-14234)}function _(l,h,g){return c((19077*l>>8)-(6419*h>>8)-(13320*g>>8)+8708)}function B(l,h){return c((19077*l>>8)+(33050*h>>8)-17685)}function rt(l,h,g,v,T){v[T+0]=y(l,g),v[T+1]=_(l,h,g),v[T+2]=B(l,h)}function ht(l,h,g,v,T){v[T+0]=B(l,h),v[T+1]=_(l,h,g),v[T+2]=y(l,g)}function Ct(l,h,g,v,T){var L=_(l,h,g);h=L<<3&224|B(l,h)>>3,v[T+0]=248&y(l,g)|L>>5,v[T+1]=h}function ge(l,h,g,v,T){var L=240&B(l,h)|15;v[T+0]=240&y(l,g)|_(l,h,g)>>4,v[T+1]=L}function pn(l,h,g,v,T){v[T+0]=255,rt(l,h,g,v,T+1)}function Le(l,h,g,v,T){ht(l,h,g,v,T),v[T+3]=255}function Sn(l,h,g,v,T){rt(l,h,g,v,T),v[T+3]=255}function nn(l,h,g){E[l]=function(v,T,L,k,F,V,q,Z,ct){for(var z=Z+(-2&ct)*g;Z!=z;)h(v[T+0],L[k+0],F[V+0],q,Z),h(v[T+1],L[k+0],F[V+0],q,Z+g),T+=2,++k,++V,Z+=2*g;1&ct&&h(v[T+0],L[k+0],F[V+0],q,Z)}}function In(l,h,g){return g==0?l==0?h==0?6:5:h==0?4:0:g}function mr(l,h,g,v,T){switch(l>>>30){case 3:ds(h,g,v,T,0);break;case 2:Fs(h,g,v,T);break;case 1:gr(h,g,v,T)}}function Si(l,h){var g,v,T=h.M,L=h.Nb,k=l.oc,F=l.pc+40,V=l.oc,q=l.pc+584,Z=l.oc,ct=l.pc+600;for(g=0;16>g;++g)k[F+32*g-1]=129;for(g=0;8>g;++g)V[q+32*g-1]=129,Z[ct+32*g-1]=129;for(0<T?k[F-1-32]=V[q-1-32]=Z[ct-1-32]=129:(i(k,F-32-1,127,21),i(V,q-32-1,127,9),i(Z,ct-32-1,127,9)),v=0;v<l.za;++v){var z=h.ya[h.aa+v];if(0<v){for(g=-1;16>g;++g)r(k,F+32*g-4,k,F+32*g+12,4);for(g=-1;8>g;++g)r(V,q+32*g-4,V,q+32*g+4,4),r(Z,ct+32*g-4,Z,ct+32*g+4,4)}var tt=l.Gd,it=l.Hd+v,bt=z.ad,lt=z.Hc;if(0<T&&(r(k,F-32,tt[it].y,0,16),r(V,q-32,tt[it].f,0,8),r(Z,ct-32,tt[it].ea,0,8)),z.Za){var wt=k,At=F-32+16;for(0<T&&(v>=l.za-1?i(wt,At,tt[it].y[15],4):r(wt,At,tt[it+1].y,0,4)),g=0;4>g;g++)wt[At+128+g]=wt[At+256+g]=wt[At+384+g]=wt[At+0+g];for(g=0;16>g;++g,lt<<=2)wt=k,At=F+qd[g],Ni[z.Ob[g]](wt,At),mr(lt,bt,16*+g,wt,At)}else if(wt=In(v,T,z.Ob[0]),Ms[wt](k,F),lt!=0)for(g=0;16>g;++g,lt<<=2)mr(lt,bt,16*+g,k,F+qd[g]);for(g=z.Gc,wt=In(v,T,z.Dd),ps[wt](V,q),ps[wt](Z,ct),lt=bt,wt=V,At=q,255&(z=0|g)&&(170&z?Xo(lt,256,wt,At):Gi(lt,256,wt,At)),z=Z,lt=ct,255&(g>>=8)&&(170&g?Xo(bt,320,z,lt):Gi(bt,320,z,lt)),T<l.Ub-1&&(r(tt[it].y,0,k,F+480,16),r(tt[it].f,0,V,q+224,8),r(tt[it].ea,0,Z,ct+224,8)),g=8*L*l.B,tt=l.sa,it=l.ta+16*v+16*L*l.R,bt=l.qa,z=l.ra+8*v+g,lt=l.Ha,wt=l.Ia+8*v+g,g=0;16>g;++g)r(tt,it+g*l.R,k,F+32*g,16);for(g=0;8>g;++g)r(bt,z+g*l.B,V,q+32*g,8),r(lt,wt+g*l.B,Z,ct+32*g,8)}}function Cs(l,h,g,v,T,L,k,F,V){var q=[0],Z=[0],ct=0,z=V!=null?V.kd:0,tt=V??new et;if(l==null||12>g)return 7;tt.data=l,tt.w=h,tt.ha=g,h=[h],g=[g],tt.gb=[tt.gb];t:{var it=h,bt=g,lt=tt.gb;if(t(l!=null),t(bt!=null),t(lt!=null),lt[0]=0,12<=bt[0]&&!e(l,it[0],"RIFF")){if(e(l,it[0]+8,"WEBP")){lt=3;break t}var wt=Gt(l,it[0]+4);if(12>wt||4294967286<wt){lt=3;break t}if(z&&wt>bt[0]-8){lt=7;break t}lt[0]=wt,it[0]+=12,bt[0]-=12}lt=0}if(lt!=0)return lt;for(wt=0<tt.gb[0],g=g[0];;){t:{var At=l;bt=h,lt=g;var Pt=q,St=Z,Yt=it=[0];if((zt=ct=[ct])[0]=0,8>lt[0])lt=7;else{if(!e(At,bt[0],"VP8X")){if(Gt(At,bt[0]+4)!=10){lt=3;break t}if(18>lt[0]){lt=7;break t}var jt=Gt(At,bt[0]+8),Ie=1+Ot(At,bt[0]+12);if(2147483648<=Ie*(At=1+Ot(At,bt[0]+15))){lt=3;break t}Yt!=null&&(Yt[0]=jt),Pt!=null&&(Pt[0]=Ie),St!=null&&(St[0]=At),bt[0]+=18,lt[0]-=18,zt[0]=1}lt=0}}if(ct=ct[0],it=it[0],lt!=0)return lt;if(bt=!!(2&it),!wt&&ct)return 3;if(L!=null&&(L[0]=!!(16&it)),k!=null&&(k[0]=bt),F!=null&&(F[0]=0),k=q[0],it=Z[0],ct&&bt&&V==null){lt=0;break}if(4>g){lt=7;break}if(wt&&ct||!wt&&!ct&&!e(l,h[0],"ALPH")){g=[g],tt.na=[tt.na],tt.P=[tt.P],tt.Sa=[tt.Sa];t:{jt=l,lt=h,wt=g;var zt=tt.gb;Pt=tt.na,St=tt.P,Yt=tt.Sa,Ie=22,t(jt!=null),t(wt!=null),At=lt[0];var Fe=wt[0];for(t(Pt!=null),t(Yt!=null),Pt[0]=null,St[0]=null,Yt[0]=0;;){if(lt[0]=At,wt[0]=Fe,8>Fe){lt=7;break t}var Wn=Gt(jt,At+4);if(4294967286<Wn){lt=3;break t}var Ne=8+Wn+1&-2;if(Ie+=Ne,0<zt&&Ie>zt){lt=3;break t}if(!e(jt,At,"VP8 ")||!e(jt,At,"VP8L")){lt=0;break t}if(Fe[0]<Ne){lt=7;break t}e(jt,At,"ALPH")||(Pt[0]=jt,St[0]=At+8,Yt[0]=Wn),At+=Ne,Fe-=Ne}}if(g=g[0],tt.na=tt.na[0],tt.P=tt.P[0],tt.Sa=tt.Sa[0],lt!=0)break}g=[g],tt.Ja=[tt.Ja],tt.xa=[tt.xa];t:if(zt=l,lt=h,wt=g,Pt=tt.gb[0],St=tt.Ja,Yt=tt.xa,jt=lt[0],At=!e(zt,jt,"VP8 "),Ie=!e(zt,jt,"VP8L"),t(zt!=null),t(wt!=null),t(St!=null),t(Yt!=null),8>wt[0])lt=7;else{if(At||Ie){if(zt=Gt(zt,jt+4),12<=Pt&&zt>Pt-12){lt=3;break t}if(z&&zt>wt[0]-8){lt=7;break t}St[0]=zt,lt[0]+=8,wt[0]-=8,Yt[0]=Ie}else Yt[0]=5<=wt[0]&&zt[jt+0]==47&&!(zt[jt+4]>>5),St[0]=wt[0];lt=0}if(g=g[0],tt.Ja=tt.Ja[0],tt.xa=tt.xa[0],h=h[0],lt!=0)break;if(4294967286<tt.Ja)return 3;if(F==null||bt||(F[0]=tt.xa?2:1),k=[k],it=[it],tt.xa){if(5>g){lt=7;break}F=k,z=it,bt=L,l==null||5>g?l=0:5<=g&&l[h+0]==47&&!(l[h+4]>>5)?(wt=[0],zt=[0],Pt=[0],vt(St=new H,l,h,g),si(St,wt,zt,Pt)?(F!=null&&(F[0]=wt[0]),z!=null&&(z[0]=zt[0]),bt!=null&&(bt[0]=Pt[0]),l=1):l=0):l=0}else{if(10>g){lt=7;break}F=it,l==null||10>g||!Uo(l,h+3,g-3)?l=0:(z=l[h+0]|l[h+1]<<8|l[h+2]<<16,bt=16383&(l[h+7]<<8|l[h+6]),l=16383&(l[h+9]<<8|l[h+8]),1&z||3<(z>>1&7)||!(z>>4&1)||z>>5>=tt.Ja||!bt||!l?l=0:(k&&(k[0]=bt),F&&(F[0]=l),l=1))}if(!l||(k=k[0],it=it[0],ct&&(q[0]!=k||Z[0]!=it)))return 3;V!=null&&(V[0]=tt,V.offset=h-V.w,t(4294967286>h-V.w),t(V.offset==V.ha-g));break}return lt==0||lt==7&&ct&&V==null?(L!=null&&(L[0]|=tt.na!=null&&0<tt.na.length),v!=null&&(v[0]=k),T!=null&&(T[0]=it),0):lt}function hi(l,h,g){var v=h.width,T=h.height,L=0,k=0,F=v,V=T;if(h.Da=l!=null&&0<l.Da,h.Da&&(F=l.cd,V=l.bd,L=l.v,k=l.j,11>g||(L&=-2,k&=-2),0>L||0>k||0>=F||0>=V||L+F>v||k+V>T))return 0;if(h.v=L,h.j=k,h.va=L+F,h.o=k+V,h.U=F,h.T=V,h.da=l!=null&&0<l.da,h.da){if(!ie(F,V,g=[l.ib],L=[l.hb]))return 0;h.ib=g[0],h.hb=L[0]}return h.ob=l!=null&&l.ob,h.Kb=l==null||!l.Sd,h.da&&(h.ob=h.ib<3*v/4&&h.hb<3*T/4,h.Kb=0),1}function fo(l){if(l==null)return 2;if(11>l.S){var h=l.f.RGBA;h.fb+=(l.height-1)*h.A,h.A=-h.A}else h=l.f.kb,l=l.height,h.O+=(l-1)*h.fa,h.fa=-h.fa,h.N+=(l-1>>1)*h.Ab,h.Ab=-h.Ab,h.W+=(l-1>>1)*h.Db,h.Db=-h.Db,h.F!=null&&(h.J+=(l-1)*h.lb,h.lb=-h.lb);return 0}function Ba(l,h,g,v){if(v==null||0>=l||0>=h)return 2;if(g!=null){if(g.Da){var T=g.cd,L=g.bd,k=-2&g.v,F=-2&g.j;if(0>k||0>F||0>=T||0>=L||k+T>l||F+L>h)return 2;l=T,h=L}if(g.da){if(!ie(l,h,T=[g.ib],L=[g.hb]))return 2;l=T[0],h=L[0]}}v.width=l,v.height=h;t:{var V=v.width,q=v.height;if(l=v.S,0>=V||0>=q||!(l>=Tl&&13>l))l=2;else{if(0>=v.Rd&&v.sd==null){k=L=T=h=0;var Z=(F=V*zd[l])*q;if(11>l||(L=(q+1)/2*(h=(V+1)/2),l==12&&(k=(T=V)*q)),(q=s(Z+2*L+k))==null){l=1;break t}v.sd=q,11>l?((V=v.f.RGBA).eb=q,V.fb=0,V.A=F,V.size=Z):((V=v.f.kb).y=q,V.O=0,V.fa=F,V.Fd=Z,V.f=q,V.N=0+Z,V.Ab=h,V.Cd=L,V.ea=q,V.W=0+Z+L,V.Db=h,V.Ed=L,l==12&&(V.F=q,V.J=0+Z+2*L),V.Tc=k,V.lb=T)}if(h=1,T=v.S,L=v.width,k=v.height,T>=Tl&&13>T)if(11>T)l=v.f.RGBA,h&=(F=Math.abs(l.A))*(k-1)+L<=l.size,h&=F>=L*zd[T],h&=l.eb!=null;else{l=v.f.kb,F=(L+1)/2,Z=(k+1)/2,V=Math.abs(l.fa),q=Math.abs(l.Ab);var ct=Math.abs(l.Db),z=Math.abs(l.lb),tt=z*(k-1)+L;h&=V*(k-1)+L<=l.Fd,h&=q*(Z-1)+F<=l.Cd,h=(h&=ct*(Z-1)+F<=l.Ed)&V>=L&q>=F&ct>=F,h&=l.y!=null,h&=l.f!=null,h&=l.ea!=null,T==12&&(h&=z>=L,h&=tt<=l.Tc,h&=l.F!=null)}else h=0;l=h?0:2}}return l!=0||g!=null&&g.fd&&(l=fo(v)),l}var Go=64,po=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Va=24,Lr=32,Br=8,Ko=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Mt("Predictor0","PredictorAdd0"),E.Predictor0=function(){return 4278190080},E.Predictor1=function(l){return l},E.Predictor2=function(l,h,g){return h[g+0]},E.Predictor3=function(l,h,g){return h[g+1]},E.Predictor4=function(l,h,g){return h[g-1]},E.Predictor5=function(l,h,g){return Qt(Qt(l,h[g+1]),h[g+0])},E.Predictor6=function(l,h,g){return Qt(l,h[g-1])},E.Predictor7=function(l,h,g){return Qt(l,h[g+0])},E.Predictor8=function(l,h,g){return Qt(h[g-1],h[g+0])},E.Predictor9=function(l,h,g){return Qt(h[g+0],h[g+1])},E.Predictor10=function(l,h,g){return Qt(Qt(l,h[g-1]),Qt(h[g+0],h[g+1]))},E.Predictor11=function(l,h,g){var v=h[g+0];return 0>=Wt(v>>24&255,l>>24&255,(h=h[g-1])>>24&255)+Wt(v>>16&255,l>>16&255,h>>16&255)+Wt(v>>8&255,l>>8&255,h>>8&255)+Wt(255&v,255&l,255&h)?v:l},E.Predictor12=function(l,h,g){var v=h[g+0];return(Me((l>>24&255)+(v>>24&255)-((h=h[g-1])>>24&255))<<24|Me((l>>16&255)+(v>>16&255)-(h>>16&255))<<16|Me((l>>8&255)+(v>>8&255)-(h>>8&255))<<8|Me((255&l)+(255&v)-(255&h)))>>>0},E.Predictor13=function(l,h,g){var v=h[g-1];return(Pe((l=Qt(l,h[g+0]))>>24&255,v>>24&255)<<24|Pe(l>>16&255,v>>16&255)<<16|Pe(l>>8&255,v>>8&255)<<8|Pe(255&l,255&v))>>>0};var Rs=E.PredictorAdd0;E.PredictorAdd1=le,Mt("Predictor2","PredictorAdd2"),Mt("Predictor3","PredictorAdd3"),Mt("Predictor4","PredictorAdd4"),Mt("Predictor5","PredictorAdd5"),Mt("Predictor6","PredictorAdd6"),Mt("Predictor7","PredictorAdd7"),Mt("Predictor8","PredictorAdd8"),Mt("Predictor9","PredictorAdd9"),Mt("Predictor10","PredictorAdd10"),Mt("Predictor11","PredictorAdd11"),Mt("Predictor12","PredictorAdd12"),Mt("Predictor13","PredictorAdd13");var Ds=E.PredictorAdd2;Kt("ColorIndexInverseTransform","MapARGB","32b",function(l){return l>>8&255},function(l){return l}),Kt("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(l){return l},function(l){return l>>8&255});var Qo,mo=E.ColorIndexInverseTransform,Un=E.MapARGB,Qc=E.VP8LColorIndexInverseTransformAlpha,Wi=E.MapAlpha,Ii=E.VP8LPredictorsAdd=[];Ii.length=16,(E.VP8LPredictors=[]).length=16,(E.VP8LPredictorsAdd_C=[]).length=16,(E.VP8LPredictors_C=[]).length=16;var go,ja,Ua,Yo,yo,vo,Os,ds,Fs,Xo,gr,Gi,ln,cn,Rn,Hn,fs,$a,Jo,Il,_d,Ad,Ed,xd,qa,Sd,Id,Nd,Td=s(511),Ld=s(2041),Pd=s(225),kd=s(767),Cd=0,Yc=Ld,Nl=Pd,Qr=kd,di=Td,Tl=0,Ll=1,Rd=2,Pl=3,kl=4,Xc=5,Dd=6,Jc=7,Zc=8,Cl=9,tu=10,v2=[2,3,7],b2=[3,3,11],Od=[280,256,256,256,40],w2=[0,1,1,1,0],_2=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],A2=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],E2=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],x2=8,eu=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],nu=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],za=null,S2=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],I2=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],Fd=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],N2=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],T2=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],L2=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],P2=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],Ms=[],Ni=[],ps=[],k2=1,Md=2,Bs=[],fi=[];zn("UpsampleRgbLinePair",rt,3),zn("UpsampleBgrLinePair",ht,3),zn("UpsampleRgbaLinePair",Sn,4),zn("UpsampleBgraLinePair",Le,4),zn("UpsampleArgbLinePair",pn,4),zn("UpsampleRgba4444LinePair",ge,2),zn("UpsampleRgb565LinePair",Ct,2);var C2=E.UpsampleRgbLinePair,R2=E.UpsampleBgrLinePair,Bd=E.UpsampleRgbaLinePair,Vd=E.UpsampleBgraLinePair,jd=E.UpsampleArgbLinePair,Ud=E.UpsampleRgba4444LinePair,D2=E.UpsampleRgb565LinePair,Rl=16,Dl=1<<Rl-1,Ha=-227,ru=482,O2=6,$d=0,F2=s(256),M2=s(256),B2=s(256),V2=s(256),j2=s(ru-Ha),U2=s(ru-Ha);nn("YuvToRgbRow",rt,3),nn("YuvToBgrRow",ht,3),nn("YuvToRgbaRow",Sn,4),nn("YuvToBgraRow",Le,4),nn("YuvToArgbRow",pn,4),nn("YuvToRgba4444Row",ge,2),nn("YuvToRgb565Row",Ct,2);var qd=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Ol=[0,2,8],$2=[8,7,6,4,4,2,2,2,1,1,1,1],q2=1;this.WebPDecodeRGBA=function(l,h,g,v,T){var L=Ll,k=new X,F=new xe;k.ba=F,F.S=L,F.width=[F.width],F.height=[F.height];var V=F.width,q=F.height,Z=new ne;if(Z==null||l==null)var ct=2;else t(Z!=null),ct=Cs(l,h,g,Z.width,Z.height,Z.Pd,Z.Qd,Z.format,null);if(ct!=0?V=0:(V!=null&&(V[0]=Z.width[0]),q!=null&&(q[0]=Z.height[0]),V=1),V){F.width=F.width[0],F.height=F.height[0],v!=null&&(v[0]=F.width),T!=null&&(T[0]=F.height);t:{if(v=new Ui,(T=new et).data=l,T.w=h,T.ha=g,T.kd=1,h=[0],t(T!=null),((l=Cs(T.data,T.w,T.ha,null,null,null,h,null,T))==0||l==7)&&h[0]&&(l=4),(h=l)==0){if(t(k!=null),v.data=T.data,v.w=T.w+T.offset,v.ha=T.ha-T.offset,v.put=se,v.ac=ur,v.bc=fn,v.ma=k,T.xa){if((l=Bi())==null){k=1;break t}if(function(z,tt){var it=[0],bt=[0],lt=[0];e:for(;;){if(z==null)return 0;if(tt==null)return z.a=2,0;if(z.l=tt,z.a=0,vt(z.m,tt.data,tt.w,tt.ha),!si(z.m,it,bt,lt)){z.a=3;break e}if(z.xb=Md,tt.width=it[0],tt.height=bt[0],!Hr(it[0],bt[0],1,z,null))break e;return 1}return t(z.a!=0),0}(l,v)){if(v=(h=Ba(v.width,v.height,k.Oa,k.ba))==0){e:{v=l;n:for(;;){if(v==null){v=0;break e}if(t(v.s.yc!=null),t(v.s.Ya!=null),t(0<v.s.Wb),t((g=v.l)!=null),t((T=g.ma)!=null),v.xb!=0){if(v.ca=T.ba,v.tb=T.tb,t(v.ca!=null),!hi(T.Oa,g,Pl)){v.a=2;break n}if(!wi(v,g.width)||g.da)break n;if((g.da||oe(v.ca.S))&&an(),11>v.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),v.ca.f.kb.F!=null&&an()),v.Pb&&0<v.s.ua&&v.s.vb.X==null&&!U(v.s.vb,v.s.Wa.Xa)){v.a=1;break n}v.xb=0}if(!dr(v,v.V,v.Ba,v.c,v.i,g.o,Mi))break n;T.Dc=v.Ma,v=1;break e}t(v.a!=0),v=0}v=!v}v&&(h=l.a)}else h=l.a}else{if((l=new jo)==null){k=1;break t}if(l.Fa=T.na,l.P=T.P,l.qc=T.Sa,oi(l,v)){if((h=Ba(v.width,v.height,k.Oa,k.ba))==0){if(l.Aa=0,g=k.Oa,t((T=l)!=null),g!=null){if(0<(V=0>(V=g.Md)?0:100<V?255:255*V/100)){for(q=Z=0;4>q;++q)12>(ct=T.pb[q]).lc&&(ct.ia=V*$2[0>ct.lc?0:ct.lc]>>3),Z|=ct.ia;Z&&(alert("todo:VP8InitRandom"),T.ia=1)}T.Ga=g.Id,100<T.Ga?T.Ga=100:0>T.Ga&&(T.Ga=0)}(function(z,tt){if(z==null)return 0;if(tt==null)return _n(z,2,"NULL VP8Io parameter in VP8Decode().");if(!z.cb&&!oi(z,tt))return 0;if(t(z.cb),tt.ac==null||tt.ac(tt)){tt.ob&&(z.L=0);var it=Ol[z.L];if(z.L==2?(z.yb=0,z.zb=0):(z.yb=tt.v-it>>4,z.zb=tt.j-it>>4,0>z.yb&&(z.yb=0),0>z.zb&&(z.zb=0)),z.Va=tt.o+15+it>>4,z.Hb=tt.va+15+it>>4,z.Hb>z.za&&(z.Hb=z.za),z.Va>z.Ub&&(z.Va=z.Ub),0<z.L){var bt=z.ed;for(it=0;4>it;++it){var lt;if(z.Qa.Cb){var wt=z.Qa.Lb[it];z.Qa.Fb||(wt+=bt.Tb)}else wt=bt.Tb;for(lt=0;1>=lt;++lt){var At=z.gd[it][lt],Pt=wt;if(bt.Pc&&(Pt+=bt.vd[0],lt&&(Pt+=bt.od[0])),0<(Pt=0>Pt?0:63<Pt?63:Pt)){var St=Pt;0<bt.wb&&(St=4<bt.wb?St>>2:St>>1)>9-bt.wb&&(St=9-bt.wb),1>St&&(St=1),At.dd=St,At.tc=2*Pt+St,At.ld=40<=Pt?2:15<=Pt?1:0}else At.tc=0;At.La=lt}}}it=0}else _n(z,6,"Frame setup failed"),it=z.a;if(it=it==0){if(it){z.$c=0,0<z.Aa||(z.Ic=q2);e:{it=z.Ic,bt=4*(St=z.za);var Yt=32*St,jt=St+1,Ie=0<z.L?St*(0<z.Aa?2:1):0,zt=(z.Aa==2?2:1)*St;if((At=bt+832+(lt=3*(16*it+Ol[z.L])/2*Yt)+(wt=z.Fa!=null&&0<z.Fa.length?z.Kc.c*z.Kc.i:0))!=At)it=0;else{if(At>z.Vb){if(z.Vb=0,z.Ec=s(At),z.Fc=0,z.Ec==null){it=_n(z,1,"no memory during frame initialization.");break e}z.Vb=At}At=z.Ec,Pt=z.Fc,z.Ac=At,z.Bc=Pt,Pt+=bt,z.Gd=o(Yt,oo),z.Hd=0,z.rb=o(jt+1,Wr),z.sb=1,z.wa=Ie?o(Ie,Zn):null,z.Y=0,z.D.Nb=0,z.D.wa=z.wa,z.D.Y=z.Y,0<z.Aa&&(z.D.Y+=St),t(!0),z.oc=At,z.pc=Pt,Pt+=832,z.ya=o(zt,io),z.aa=0,z.D.ya=z.ya,z.D.aa=z.aa,z.Aa==2&&(z.D.aa+=St),z.R=16*St,z.B=8*St,St=(Yt=Ol[z.L])*z.R,Yt=Yt/2*z.B,z.sa=At,z.ta=Pt+St,z.qa=z.sa,z.ra=z.ta+16*it*z.R+Yt,z.Ha=z.qa,z.Ia=z.ra+8*it*z.B+Yt,z.$c=0,Pt+=lt,z.mb=wt?At:null,z.nb=wt?Pt:null,t(Pt+wt<=z.Fc+z.Vb),Is(z),i(z.Ac,z.Bc,0,bt),it=1}}if(it){if(tt.ka=0,tt.y=z.sa,tt.O=z.ta,tt.f=z.qa,tt.N=z.ra,tt.ea=z.Ha,tt.Vd=z.Ia,tt.fa=z.R,tt.Rc=z.B,tt.F=null,tt.J=0,!Cd){for(it=-255;255>=it;++it)Td[255+it]=0>it?-it:it;for(it=-1020;1020>=it;++it)Ld[1020+it]=-128>it?-128:127<it?127:it;for(it=-112;112>=it;++it)Pd[112+it]=-16>it?-16:15<it?15:it;for(it=-255;510>=it;++it)kd[255+it]=0>it?0:255<it?255:it;Cd=1}Os=$i,ds=$o,Xo=Ke,gr=Ns,Gi=fr,Fs=as,ln=ks,cn=hs,Rn=Wo,Hn=p,fs=ho,$a=ui,Jo=I,Il=$,_d=cs,Ad=Nr,Ed=us,xd=Ho,Ni[0]=Oa,Ni[1]=ls,Ni[2]=Ra,Ni[3]=Da,Ni[4]=ai,Ni[5]=Ai,Ni[6]=Fa,Ni[7]=Mr,Ni[8]=zo,Ni[9]=Ls,Ms[0]=Gr,Ms[1]=Pa,Ms[2]=ka,Ms[3]=Ca,Ms[4]=_i,Ms[5]=qo,Ms[6]=qi,ps[0]=co,ps[1]=lo,ps[2]=li,ps[3]=Ei,ps[4]=Ma,ps[5]=Qe,ps[6]=uo,it=1}else it=0}it&&(it=function(Fe,Wn){for(Fe.M=0;Fe.M<Fe.Va;++Fe.M){var Ne,Ht=Fe.Jc[Fe.M&Fe.Xb],Rt=Fe.m,Dn=Fe;for(Ne=0;Ne<Dn.za;++Ne){var _e=Rt,Be=Dn,mn=Be.Ac,rr=Be.Bc+4*Ne,Pr=Be.zc,Nn=Be.ya[Be.aa+Ne];if(Be.Qa.Bb?Nn.$b=_t(_e,Be.Pa.jb[0])?2+_t(_e,Be.Pa.jb[2]):_t(_e,Be.Pa.jb[1]):Nn.$b=0,Be.kc&&(Nn.Ad=_t(_e,Be.Bd)),Nn.Za=!_t(_e,145)+0,Nn.Za){var yr=Nn.Ob,kr=0;for(Be=0;4>Be;++Be){var Gn,je=Pr[0+Be];for(Gn=0;4>Gn;++Gn){je=T2[mn[rr+Gn]][je];for(var Ye=Fd[_t(_e,je[0])];0<Ye;)Ye=Fd[2*Ye+_t(_e,je[Ye])];je=-Ye,mn[rr+Gn]=je}r(yr,kr,mn,rr,4),kr+=4,Pr[0+Be]=je}}else je=_t(_e,156)?_t(_e,128)?1:3:_t(_e,163)?2:0,Nn.Ob[0]=je,i(mn,rr,je,4),i(Pr,0,je,4);Nn.Dd=_t(_e,142)?_t(_e,114)?_t(_e,183)?1:3:2:0}if(Dn.m.Ka)return _n(Fe,7,"Premature end-of-partition0 encountered.");for(;Fe.ja<Fe.za;++Fe.ja){if(Dn=Ht,_e=(Rt=Fe).rb[Rt.sb-1],mn=Rt.rb[Rt.sb+Rt.ja],Ne=Rt.ya[Rt.aa+Rt.ja],rr=Rt.kc?Ne.Ad:0)_e.la=mn.la=0,Ne.Za||(_e.Na=mn.Na=0),Ne.Hc=0,Ne.Gc=0,Ne.ia=0;else{var Tn,Xe;if(_e=mn,mn=Dn,rr=Rt.Pa.Xc,Pr=Rt.ya[Rt.aa+Rt.ja],Nn=Rt.pb[Pr.$b],Be=Pr.ad,yr=0,kr=Rt.rb[Rt.sb-1],je=Gn=0,i(Be,yr,0,384),Pr.Za)var ir=0,Ti=rr[3];else{Ye=s(16);var On=_e.Na+kr.Na;if(On=za(mn,rr[1],On,Nn.Eb,0,Ye,0),_e.Na=kr.Na=(0<On)+0,1<On)Os(Ye,0,Be,yr);else{var Vr=Ye[0]+3>>3;for(Ye=0;256>Ye;Ye+=16)Be[yr+Ye]=Vr}ir=1,Ti=rr[0]}var rn=15&_e.la,Kn=15&kr.la;for(Ye=0;4>Ye;++Ye){var Yr=1&Kn;for(Vr=Xe=0;4>Vr;++Vr)rn=rn>>1|(Yr=(On=za(mn,Ti,On=Yr+(1&rn),Nn.Sc,ir,Be,yr))>ir)<<7,Xe=Xe<<2|(3<On?3:1<On?2:Be[yr+0]!=0),yr+=16;rn>>=4,Kn=Kn>>1|Yr<<7,Gn=(Gn<<8|Xe)>>>0}for(Ti=rn,ir=Kn>>4,Tn=0;4>Tn;Tn+=2){for(Xe=0,rn=_e.la>>4+Tn,Kn=kr.la>>4+Tn,Ye=0;2>Ye;++Ye){for(Yr=1&Kn,Vr=0;2>Vr;++Vr)On=Yr+(1&rn),rn=rn>>1|(Yr=0<(On=za(mn,rr[2],On,Nn.Qc,0,Be,yr)))<<3,Xe=Xe<<2|(3<On?3:1<On?2:Be[yr+0]!=0),yr+=16;rn>>=2,Kn=Kn>>1|Yr<<5}je|=Xe<<4*Tn,Ti|=rn<<4<<Tn,ir|=(240&Kn)<<Tn}_e.la=Ti,kr.la=ir,Pr.Hc=Gn,Pr.Gc=je,Pr.ia=43690&je?0:Nn.ia,rr=!(Gn|je)}if(0<Rt.L&&(Rt.wa[Rt.Y+Rt.ja]=Rt.gd[Ne.$b][Ne.Za],Rt.wa[Rt.Y+Rt.ja].La|=!rr),Dn.Ka)return _n(Fe,7,"Premature end-of-file encountered.")}if(Is(Fe),Rt=Wn,Dn=1,Ne=(Ht=Fe).D,_e=0<Ht.L&&Ht.M>=Ht.zb&&Ht.M<=Ht.Va,Ht.Aa==0)e:{if(Ne.M=Ht.M,Ne.uc=_e,Si(Ht,Ne),Dn=1,Ne=(Xe=Ht.D).Nb,_e=(je=Ol[Ht.L])*Ht.R,mn=je/2*Ht.B,Ye=16*Ne*Ht.R,Vr=8*Ne*Ht.B,rr=Ht.sa,Pr=Ht.ta-_e+Ye,Nn=Ht.qa,Be=Ht.ra-mn+Vr,yr=Ht.Ha,kr=Ht.Ia-mn+Vr,Kn=(rn=Xe.M)==0,Gn=rn>=Ht.Va-1,Ht.Aa==2&&Si(Ht,Xe),Xe.uc)for(Yr=(On=Ht).D.M,t(On.D.uc),Xe=On.yb;Xe<On.Hb;++Xe){ir=Xe,Ti=Yr;var Cr=(Xr=(sr=On).D).Nb;Tn=sr.R;var Xr=Xr.wa[Xr.Y+ir],Jr=sr.sa,jr=sr.ta+16*Cr*Tn+16*ir,Zr=Xr.dd,un=Xr.tc;if(un!=0)if(t(3<=un),sr.L==1)0<ir&&Ad(Jr,jr,Tn,un+4),Xr.La&&xd(Jr,jr,Tn,un),0<Ti&&_d(Jr,jr,Tn,un+4),Xr.La&&Ed(Jr,jr,Tn,un);else{var ti=sr.B,Li=sr.qa,bo=sr.ra+8*Cr*ti+8*ir,ms=sr.Ha,sr=sr.Ia+8*Cr*ti+8*ir;Cr=Xr.ld,0<ir&&(cn(Jr,jr,Tn,un+4,Zr,Cr),Hn(Li,bo,ms,sr,ti,un+4,Zr,Cr)),Xr.La&&($a(Jr,jr,Tn,un,Zr,Cr),Il(Li,bo,ms,sr,ti,un,Zr,Cr)),0<Ti&&(ln(Jr,jr,Tn,un+4,Zr,Cr),Rn(Li,bo,ms,sr,ti,un+4,Zr,Cr)),Xr.La&&(fs(Jr,jr,Tn,un,Zr,Cr),Jo(Li,bo,ms,sr,ti,un,Zr,Cr))}}if(Ht.ia&&alert("todo:DitherRow"),Rt.put!=null){if(Xe=16*rn,rn=16*(rn+1),Kn?(Rt.y=Ht.sa,Rt.O=Ht.ta+Ye,Rt.f=Ht.qa,Rt.N=Ht.ra+Vr,Rt.ea=Ht.Ha,Rt.W=Ht.Ia+Vr):(Xe-=je,Rt.y=rr,Rt.O=Pr,Rt.f=Nn,Rt.N=Be,Rt.ea=yr,Rt.W=kr),Gn||(rn-=je),rn>Rt.o&&(rn=Rt.o),Rt.F=null,Rt.J=null,Ht.Fa!=null&&0<Ht.Fa.length&&Xe<rn&&(Rt.J=An(Ht,Rt,Xe,rn-Xe),Rt.F=Ht.mb,Rt.F==null&&Rt.F.length==0)){Dn=_n(Ht,3,"Could not decode alpha data.");break e}Xe<Rt.j&&(je=Rt.j-Xe,Xe=Rt.j,t(!(1&je)),Rt.O+=Ht.R*je,Rt.N+=Ht.B*(je>>1),Rt.W+=Ht.B*(je>>1),Rt.F!=null&&(Rt.J+=Rt.width*je)),Xe<rn&&(Rt.O+=Rt.v,Rt.N+=Rt.v>>1,Rt.W+=Rt.v>>1,Rt.F!=null&&(Rt.J+=Rt.v),Rt.ka=Xe-Rt.j,Rt.U=Rt.va-Rt.v,Rt.T=rn-Xe,Dn=Rt.put(Rt))}Ne+1!=Ht.Ic||Gn||(r(Ht.sa,Ht.ta-_e,rr,Pr+16*Ht.R,_e),r(Ht.qa,Ht.ra-mn,Nn,Be+8*Ht.B,mn),r(Ht.Ha,Ht.Ia-mn,yr,kr+8*Ht.B,mn))}if(!Dn)return _n(Fe,6,"Output aborted.")}return 1}(z,tt)),tt.bc!=null&&tt.bc(tt),it&=1}return it?(z.cb=0,it):0})(l,v)||(h=l.a)}}else h=l.a}h==0&&k.Oa!=null&&k.Oa.fd&&(h=fo(k.ba))}k=h}L=k!=0?null:11>L?F.f.RGBA.eb:F.f.kb.y}else L=null;return L};var zd=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function d(E,C){for(var w="",x=0;x<4;x++)w+=String.fromCharCode(E[C++]);return w}function f(E,C){return E[C+0]|E[C+1]<<8}function b(E,C){return(E[C+0]|E[C+1]<<8|E[C+2]<<16)>>>0}function A(E,C){return(E[C+0]|E[C+1]<<8|E[C+2]<<16|E[C+3]<<24)>>>0}new u;var m=[0],D=[0],R=[],M=new u,O=n,Y=function(E,C){var w={},x=0,S=!1,Q=0,ut=0;if(w.frames=[],!function(P,H){for(var K=0;K<4;K++)if(P[H+K]!="RIFF".charCodeAt(K))return!0;return!1}(E,C)){for(A(E,C+=4),C+=8;C<E.length;){var yt=d(E,C),mt=A(E,C+=4);C+=4;var at=mt+(1&mt);switch(yt){case"VP8 ":case"VP8L":w.frames[x]===void 0&&(w.frames[x]={}),(xt=w.frames[x]).src_off=S?ut:C-8,xt.src_size=Q+mt+8,x++,S&&(S=!1,Q=0,ut=0);break;case"VP8X":(xt=w.header={}).feature_flags=E[C];var vt=C+4;xt.canvas_width=1+b(E,vt),vt+=3,xt.canvas_height=1+b(E,vt),vt+=3;break;case"ALPH":S=!0,Q=at+8,ut=C-8;break;case"ANIM":(xt=w.header).bgcolor=A(E,C),vt=C+4,xt.loop_count=f(E,vt),vt+=2;break;case"ANMF":var kt,xt;(xt=w.frames[x]={}).offset_x=2*b(E,C),C+=3,xt.offset_y=2*b(E,C),C+=3,xt.width=1+b(E,C),C+=3,xt.height=1+b(E,C),C+=3,xt.duration=b(E,C),C+=3,kt=E[C++],xt.dispose=1&kt,xt.blend=kt>>1&1}yt!="ANMF"&&(C+=at)}return w}}(O,0);Y.response=O,Y.rgbaoutput=!0,Y.dataurl=!1;var G=Y.header?Y.header:null,W=Y.frames?Y.frames:null;if(G){G.loop_counter=G.loop_count,m=[G.canvas_height],D=[G.canvas_width];for(var ot=0;ot<W.length&&W[ot].blend!=0;ot++);}var pt=W[0],j=M.WebPDecodeRGBA(O,pt.src_off,pt.src_size,D,m);pt.rgba=j,pt.imgwidth=D[0],pt.imgheight=m[0];for(var N=0;N<D[0]*m[0]*4;N++)R[N]=j[N];return this.width=D,this.height=m,this.data=R,this}/** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */function w4(){var n,t=this.internal.__metadata__.metadata,e=unescape(encodeURIComponent(t));n=this.internal.__metadata__.rawXml?e:'<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceUri+'"><jspdf:metadata>'+e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")+"</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>",this.internal.__metadata__.metadataObjectNumber=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+n.length+" >>"),this.internal.write("stream"),this.internal.write(n),this.internal.write("endstream"),this.internal.write("endobj")}function _4(){this.internal.__metadata__.metadataObjectNumber&&this.internal.write("/Metadata "+this.internal.__metadata__.metadataObjectNumber+" 0 R")}(function(n){var t,e,r,i,s,o,a,u,d,f=function(P){return P=P||{},this.isStrokeTransparent=P.isStrokeTransparent||!1,this.strokeOpacity=P.strokeOpacity||1,this.strokeStyle=P.strokeStyle||"#000000",this.fillStyle=P.fillStyle||"#000000",this.isFillTransparent=P.isFillTransparent||!1,this.fillOpacity=P.fillOpacity||1,this.font=P.font||"10px sans-serif",this.textBaseline=P.textBaseline||"alphabetic",this.textAlign=P.textAlign||"left",this.lineWidth=P.lineWidth||1,this.lineJoin=P.lineJoin||"miter",this.lineCap=P.lineCap||"butt",this.path=P.path||[],this.transform=P.transform!==void 0?P.transform.clone():new u,this.globalCompositeOperation=P.globalCompositeOperation||"normal",this.globalAlpha=P.globalAlpha||1,this.clip_path=P.clip_path||[],this.currentPoint=P.currentPoint||new o,this.miterLimit=P.miterLimit||10,this.lastPoint=P.lastPoint||new o,this.lineDashOffset=P.lineDashOffset||0,this.lineDash=P.lineDash||[],this.margin=P.margin||[0,0,0,0],this.prevPageLastElemOffset=P.prevPageLastElemOffset||0,this.ignoreClearRect=typeof P.ignoreClearRect!="boolean"||P.ignoreClearRect,this};n.events.push(["initialized",function(){this.context2d=new b(this),t=this.internal.f2,e=this.internal.getCoordinateString,r=this.internal.getVerticalCoordinateString,i=this.internal.getHorizontalCoordinate,s=this.internal.getVerticalCoordinate,o=this.internal.Point,a=this.internal.Rectangle,u=this.internal.Matrix,d=new f}]);var b=function(P){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var H=P;Object.defineProperty(this,"pdf",{get:function(){return H}});var K=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return K},set:function(U){K=!!U}});var J=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return J},set:function(U){J=!!U}});var nt=0;Object.defineProperty(this,"posX",{get:function(){return nt},set:function(U){isNaN(U)||(nt=U)}});var st=0;Object.defineProperty(this,"posY",{get:function(){return st},set:function(U){isNaN(U)||(st=U)}}),Object.defineProperty(this,"margin",{get:function(){return d.margin},set:function(U){var Dt;typeof U=="number"?Dt=[U,U,U,U]:((Dt=new Array(4))[0]=U[0],Dt[1]=U.length>=2?U[1]:Dt[0],Dt[2]=U.length>=3?U[2]:Dt[0],Dt[3]=U.length>=4?U[3]:Dt[1]),d.margin=Dt}});var dt=!1;Object.defineProperty(this,"autoPaging",{get:function(){return dt},set:function(U){dt=U}});var ft=0;Object.defineProperty(this,"lastBreak",{get:function(){return ft},set:function(U){ft=U}});var _t=[];Object.defineProperty(this,"pageBreaks",{get:function(){return _t},set:function(U){_t=U}}),Object.defineProperty(this,"ctx",{get:function(){return d},set:function(U){U instanceof f&&(d=U)}}),Object.defineProperty(this,"path",{get:function(){return d.path},set:function(U){d.path=U}});var Lt=[];Object.defineProperty(this,"ctxStack",{get:function(){return Lt},set:function(U){Lt=U}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(U){var Dt;Dt=A(U),this.ctx.fillStyle=Dt.style,this.ctx.isFillTransparent=Dt.a===0,this.ctx.fillOpacity=Dt.a,this.pdf.setFillColor(Dt.r,Dt.g,Dt.b,{a:Dt.a}),this.pdf.setTextColor(Dt.r,Dt.g,Dt.b,{a:Dt.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(U){var Dt=A(U);this.ctx.strokeStyle=Dt.style,this.ctx.isStrokeTransparent=Dt.a===0,this.ctx.strokeOpacity=Dt.a,Dt.a===0?this.pdf.setDrawColor(255,255,255):(Dt.a,this.pdf.setDrawColor(Dt.r,Dt.g,Dt.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(U){["butt","round","square"].indexOf(U)!==-1&&(this.ctx.lineCap=U,this.pdf.setLineCap(U))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(U){isNaN(U)||(this.ctx.lineWidth=U,this.pdf.setLineWidth(U))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(U){["bevel","round","miter"].indexOf(U)!==-1&&(this.ctx.lineJoin=U,this.pdf.setLineJoin(U))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(U){isNaN(U)||(this.ctx.miterLimit=U,this.pdf.setMiterLimit(U))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(U){this.ctx.textBaseline=U}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(U){["right","end","center","left","start"].indexOf(U)!==-1&&(this.ctx.textAlign=U)}});var Ft=null,Ot=null,Gt=null;Object.defineProperty(this,"fontFaces",{get:function(){return Gt},set:function(U){Ft=null,Ot=null,Gt=U}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(U){var Dt;if(this.ctx.font=U,(Dt=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(U))!==null){var Ae=Dt[1];Dt[2];var ie=Dt[3],It=Dt[4];Dt[5];var Zt=Dt[6],Mt=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(It)[2];It=Math.floor(Mt==="px"?parseFloat(It)*this.pdf.internal.scaleFactor:Mt==="em"?parseFloat(It)*this.pdf.getFontSize():parseFloat(It)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(It);var ee=function(Kt){var en,De,Ee=[],we=Kt.trim();if(we==="")return Vu;if(we in Yp)return[Yp[we]];for(;we!=="";){switch(De=null,en=(we=Jp(we)).charAt(0)){case'"':case"'":De=p4(we.substring(1),en);break;default:De=m4(we)}if(De===null||(Ee.push(De[0]),(we=Jp(De[1]))!==""&&we.charAt(0)!==","))return Vu;we=we.replace(/^,/,"")}return Ee}(Zt);if(this.fontFaces){var Qt=function(Kt,en){var De=Kt.getFontList(),Ee=JSON.stringify(De);if(Ft===null||Ot!==Ee){var we=function(on){var te=[];return Object.keys(on).forEach(function(ze){on[ze].forEach(function(oe){var fe=null;switch(oe){case"bold":fe={family:ze,weight:"bold"};break;case"italic":fe={family:ze,style:"italic"};break;case"bolditalic":fe={family:ze,weight:"bold",style:"italic"};break;case"":case"normal":fe={family:ze}}fe!==null&&(fe.ref={name:ze,style:oe},te.push(fe))})}),te}(De);Ft=function(on){for(var te={},ze=0;ze<on.length;++ze){var oe=Bu(on[ze]),fe=oe.family,He=oe.stretch,xe=oe.style,ne=oe.weight;te[fe]=te[fe]||{},te[fe][He]=te[fe][He]||{},te[fe][He][xe]=te[fe][He][xe]||{},te[fe][He][xe][ne]=oe}return te}(we.concat(en)),Ot=Ee}return Ft}(this.pdf,this.fontFaces),Me=ee.map(function(Kt){return{family:Kt,stretch:"normal",weight:ie,style:Ae}}),Pe=function(Kt,en,De){for(var Ee=(De=De||{}).defaultFontFamily||"times",we=Object.assign({},f4,De.genericFontFamilies||{}),on=null,te=null,ze=0;ze<en.length;++ze)if(we[(on=Bu(en[ze])).family]&&(on.family=we[on.family]),Kt.hasOwnProperty(on.family)){te=Kt[on.family];break}if(!(te=te||Kt[Ee]))throw new Error("Could not find a font-family for the rule '"+Xp(on)+"' and default family '"+Ee+"'.");if(te=function(oe,fe){if(fe[oe])return fe[oe];var He=_h[oe],xe=He<=_h.normal?-1:1,ne=Qp(fe,jg,He,xe);if(!ne)throw new Error("Could not find a matching font-stretch value for "+oe);return ne}(on.stretch,te),te=function(oe,fe){if(fe[oe])return fe[oe];for(var He=Vg[oe],xe=0;xe<He.length;++xe)if(fe[He[xe]])return fe[He[xe]];throw new Error("Could not find a matching font-style for "+oe)}(on.style,te),!(te=function(oe,fe){if(fe[oe])return fe[oe];if(oe===400&&fe[500])return fe[500];if(oe===500&&fe[400])return fe[400];var He=d4[oe],xe=Qp(fe,Ug,He,oe<400?-1:1);if(!xe)throw new Error("Could not find a matching font-weight for value "+oe);return xe}(on.weight,te)))throw new Error("Failed to resolve a font for the rule '"+Xp(on)+"'.");return te}(Qt,Me);this.pdf.setFont(Pe.ref.name,Pe.ref.style)}else{var Wt="";(ie==="bold"||parseInt(ie,10)>=700||Ae==="bold")&&(Wt="bold"),Ae==="italic"&&(Wt+="italic"),Wt.length===0&&(Wt="normal");for(var le="",Se={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},$t=0;$t<ee.length;$t++){if(this.pdf.internal.getFont(ee[$t],Wt,{noFallback:!0,disableWarning:!0})!==void 0){le=ee[$t];break}if(Wt==="bolditalic"&&this.pdf.internal.getFont(ee[$t],"bold",{noFallback:!0,disableWarning:!0})!==void 0)le=ee[$t],Wt="bold";else if(this.pdf.internal.getFont(ee[$t],"normal",{noFallback:!0,disableWarning:!0})!==void 0){le=ee[$t],Wt="normal";break}}if(le===""){for(var me=0;me<ee.length;me++)if(Se[ee[me]]){le=Se[ee[me]];break}}le=le===""?"Times":le,this.pdf.setFont(le,Wt)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(U){this.ctx.globalCompositeOperation=U}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(U){this.ctx.globalAlpha=U}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(U){this.ctx.lineDashOffset=U,xt.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(U){this.ctx.lineDash=U,xt.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(U){this.ctx.ignoreClearRect=!!U}})};b.prototype.setLineDash=function(P){this.lineDash=P},b.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},b.prototype.fill=function(){W.call(this,"fill",!1)},b.prototype.stroke=function(){W.call(this,"stroke",!1)},b.prototype.beginPath=function(){this.path=[{type:"begin"}]},b.prototype.moveTo=function(P,H){if(isNaN(P)||isNaN(H))throw sn.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var K=this.ctx.transform.applyToPoint(new o(P,H));this.path.push({type:"mt",x:K.x,y:K.y}),this.ctx.lastPoint=new o(P,H)},b.prototype.closePath=function(){var P=new o(0,0),H=0;for(H=this.path.length-1;H!==-1;H--)if(this.path[H].type==="begin"&&Ze(this.path[H+1])==="object"&&typeof this.path[H+1].x=="number"){P=new o(this.path[H+1].x,this.path[H+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new o(P.x,P.y)},b.prototype.lineTo=function(P,H){if(isNaN(P)||isNaN(H))throw sn.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var K=this.ctx.transform.applyToPoint(new o(P,H));this.path.push({type:"lt",x:K.x,y:K.y}),this.ctx.lastPoint=new o(K.x,K.y)},b.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),W.call(this,null,!0)},b.prototype.quadraticCurveTo=function(P,H,K,J){if(isNaN(K)||isNaN(J)||isNaN(P)||isNaN(H))throw sn.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var nt=this.ctx.transform.applyToPoint(new o(K,J)),st=this.ctx.transform.applyToPoint(new o(P,H));this.path.push({type:"qct",x1:st.x,y1:st.y,x:nt.x,y:nt.y}),this.ctx.lastPoint=new o(nt.x,nt.y)},b.prototype.bezierCurveTo=function(P,H,K,J,nt,st){if(isNaN(nt)||isNaN(st)||isNaN(P)||isNaN(H)||isNaN(K)||isNaN(J))throw sn.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var dt=this.ctx.transform.applyToPoint(new o(nt,st)),ft=this.ctx.transform.applyToPoint(new o(P,H)),_t=this.ctx.transform.applyToPoint(new o(K,J));this.path.push({type:"bct",x1:ft.x,y1:ft.y,x2:_t.x,y2:_t.y,x:dt.x,y:dt.y}),this.ctx.lastPoint=new o(dt.x,dt.y)},b.prototype.arc=function(P,H,K,J,nt,st){if(isNaN(P)||isNaN(H)||isNaN(K)||isNaN(J)||isNaN(nt))throw sn.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(st=!!st,!this.ctx.transform.isIdentity){var dt=this.ctx.transform.applyToPoint(new o(P,H));P=dt.x,H=dt.y;var ft=this.ctx.transform.applyToPoint(new o(0,K)),_t=this.ctx.transform.applyToPoint(new o(0,0));K=Math.sqrt(Math.pow(ft.x-_t.x,2)+Math.pow(ft.y-_t.y,2))}Math.abs(nt-J)>=2*Math.PI&&(J=0,nt=2*Math.PI),this.path.push({type:"arc",x:P,y:H,radius:K,startAngle:J,endAngle:nt,counterclockwise:st})},b.prototype.arcTo=function(P,H,K,J,nt){throw new Error("arcTo not implemented.")},b.prototype.rect=function(P,H,K,J){if(isNaN(P)||isNaN(H)||isNaN(K)||isNaN(J))throw sn.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(P,H),this.lineTo(P+K,H),this.lineTo(P+K,H+J),this.lineTo(P,H+J),this.lineTo(P,H),this.lineTo(P+K,H),this.lineTo(P,H)},b.prototype.fillRect=function(P,H,K,J){if(isNaN(P)||isNaN(H)||isNaN(K)||isNaN(J))throw sn.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!m.call(this)){var nt={};this.lineCap!=="butt"&&(nt.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(nt.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(P,H,K,J),this.fill(),nt.hasOwnProperty("lineCap")&&(this.lineCap=nt.lineCap),nt.hasOwnProperty("lineJoin")&&(this.lineJoin=nt.lineJoin)}},b.prototype.strokeRect=function(P,H,K,J){if(isNaN(P)||isNaN(H)||isNaN(K)||isNaN(J))throw sn.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");D.call(this)||(this.beginPath(),this.rect(P,H,K,J),this.stroke())},b.prototype.clearRect=function(P,H,K,J){if(isNaN(P)||isNaN(H)||isNaN(K)||isNaN(J))throw sn.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(P,H,K,J))},b.prototype.save=function(P){P=typeof P!="boolean"||P;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,K=0;K<this.pdf.internal.getNumberOfPages();K++)this.pdf.setPage(K+1),this.pdf.internal.out("q");if(this.pdf.setPage(H),P){this.ctx.fontSize=this.pdf.internal.getFontSize();var J=new f(this.ctx);this.ctxStack.push(this.ctx),this.ctx=J}},b.prototype.restore=function(P){P=typeof P!="boolean"||P;for(var H=this.pdf.internal.getCurrentPageInfo().pageNumber,K=0;K<this.pdf.internal.getNumberOfPages();K++)this.pdf.setPage(K+1),this.pdf.internal.out("Q");this.pdf.setPage(H),P&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},b.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var A=function(P){var H,K,J,nt;if(P.isCanvasGradient===!0&&(P=P.getColor()),!P)return{r:0,g:0,b:0,a:0,style:P};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(P))H=0,K=0,J=0,nt=0;else{var st=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(P);if(st!==null)H=parseInt(st[1]),K=parseInt(st[2]),J=parseInt(st[3]),nt=1;else if((st=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(P))!==null)H=parseInt(st[1]),K=parseInt(st[2]),J=parseInt(st[3]),nt=parseFloat(st[4]);else{if(nt=1,typeof P=="string"&&P.charAt(0)!=="#"){var dt=new Cg(P);P=dt.ok?dt.toHex():"#000000"}P.length===4?(H=P.substring(1,2),H+=H,K=P.substring(2,3),K+=K,J=P.substring(3,4),J+=J):(H=P.substring(1,3),K=P.substring(3,5),J=P.substring(5,7)),H=parseInt(H,16),K=parseInt(K,16),J=parseInt(J,16)}}return{r:H,g:K,b:J,a:nt,style:P}},m=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},D=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};b.prototype.fillText=function(P,H,K,J){if(isNaN(H)||isNaN(K)||typeof P!="string")throw sn.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(J=isNaN(J)?void 0:J,!m.call(this)){var nt=at(this.ctx.transform.rotation),st=this.ctx.transform.scaleX;x.call(this,{text:P,x:H,y:K,scale:st,angle:nt,align:this.textAlign,maxWidth:J})}},b.prototype.strokeText=function(P,H,K,J){if(isNaN(H)||isNaN(K)||typeof P!="string")throw sn.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!D.call(this)){J=isNaN(J)?void 0:J;var nt=at(this.ctx.transform.rotation),st=this.ctx.transform.scaleX;x.call(this,{text:P,x:H,y:K,scale:st,renderingMode:"stroke",angle:nt,align:this.textAlign,maxWidth:J})}},b.prototype.measureText=function(P){if(typeof P!="string")throw sn.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var H=this.pdf,K=this.pdf.internal.scaleFactor,J=H.internal.getFontSize(),nt=H.getStringUnitWidth(P)*J/H.internal.scaleFactor;return new function(st){var dt=(st=st||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return dt}}),this}({width:nt*=Math.round(96*K/72*1e4)/1e4})},b.prototype.scale=function(P,H){if(isNaN(P)||isNaN(H))throw sn.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var K=new u(P,0,0,H,0,0);this.ctx.transform=this.ctx.transform.multiply(K)},b.prototype.rotate=function(P){if(isNaN(P))throw sn.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var H=new u(Math.cos(P),Math.sin(P),-Math.sin(P),Math.cos(P),0,0);this.ctx.transform=this.ctx.transform.multiply(H)},b.prototype.translate=function(P,H){if(isNaN(P)||isNaN(H))throw sn.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var K=new u(1,0,0,1,P,H);this.ctx.transform=this.ctx.transform.multiply(K)},b.prototype.transform=function(P,H,K,J,nt,st){if(isNaN(P)||isNaN(H)||isNaN(K)||isNaN(J)||isNaN(nt)||isNaN(st))throw sn.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var dt=new u(P,H,K,J,nt,st);this.ctx.transform=this.ctx.transform.multiply(dt)},b.prototype.setTransform=function(P,H,K,J,nt,st){P=isNaN(P)?1:P,H=isNaN(H)?0:H,K=isNaN(K)?0:K,J=isNaN(J)?1:J,nt=isNaN(nt)?0:nt,st=isNaN(st)?0:st,this.ctx.transform=new u(P,H,K,J,nt,st)};var R=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};b.prototype.drawImage=function(P,H,K,J,nt,st,dt,ft,_t){var Lt=this.pdf.getImageProperties(P),Ft=1,Ot=1,Gt=1,U=1;J!==void 0&&ft!==void 0&&(Gt=ft/J,U=_t/nt,Ft=Lt.width/J*ft/J,Ot=Lt.height/nt*_t/nt),st===void 0&&(st=H,dt=K,H=0,K=0),J!==void 0&&ft===void 0&&(ft=J,_t=nt),J===void 0&&ft===void 0&&(ft=Lt.width,_t=Lt.height);var Dt=this.ctx.transform.decompose(),Ae=at(Dt.rotate.shx),ie=new u,It=(ie=(ie=(ie=ie.multiply(Dt.translate)).multiply(Dt.skew)).multiply(Dt.scale)).applyToRectangle(new a(st-H*Gt,dt-K*U,J*Ft,nt*Ot));if(this.autoPaging){for(var Zt,Mt=M.call(this,It),ee=[],Qt=0;Qt<Mt.length;Qt+=1)ee.indexOf(Mt[Qt])===-1&&ee.push(Mt[Qt]);G(ee);for(var Me=ee[0],Pe=ee[ee.length-1],Wt=Me;Wt<Pe+1;Wt++){this.pdf.setPage(Wt);var le=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Se=Wt===1?this.posY+this.margin[0]:this.margin[0],$t=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],me=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],Kt=Wt===1?0:$t+(Wt-2)*me;if(this.ctx.clip_path.length!==0){var en=this.path;Zt=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=Y(Zt,this.posX+this.margin[3],-Kt+Se+this.ctx.prevPageLastElemOffset),ot.call(this,"fill",!0),this.path=en}var De=JSON.parse(JSON.stringify(It));De=Y([De],this.posX+this.margin[3],-Kt+Se+this.ctx.prevPageLastElemOffset)[0];var Ee=(Wt>Me||Wt<Pe)&&R.call(this);Ee&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],le,me,null).clip().discardPath()),this.pdf.addImage(P,"JPEG",De.x,De.y,De.w,De.h,null,null,Ae),Ee&&this.pdf.restoreGraphicsState()}}else this.pdf.addImage(P,"JPEG",It.x,It.y,It.w,It.h,null,null,Ae)};var M=function(P,H,K){var J=[];H=H||this.pdf.internal.pageSize.width,K=K||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var nt=this.posY+this.ctx.prevPageLastElemOffset;switch(P.type){default:case"mt":case"lt":J.push(Math.floor((P.y+nt)/K)+1);break;case"arc":J.push(Math.floor((P.y+nt-P.radius)/K)+1),J.push(Math.floor((P.y+nt+P.radius)/K)+1);break;case"qct":var st=vt(this.ctx.lastPoint.x,this.ctx.lastPoint.y,P.x1,P.y1,P.x,P.y);J.push(Math.floor((st.y+nt)/K)+1),J.push(Math.floor((st.y+st.h+nt)/K)+1);break;case"bct":var dt=kt(this.ctx.lastPoint.x,this.ctx.lastPoint.y,P.x1,P.y1,P.x2,P.y2,P.x,P.y);J.push(Math.floor((dt.y+nt)/K)+1),J.push(Math.floor((dt.y+dt.h+nt)/K)+1);break;case"rect":J.push(Math.floor((P.y+nt)/K)+1),J.push(Math.floor((P.y+P.h+nt)/K)+1)}for(var ft=0;ft<J.length;ft+=1)for(;this.pdf.internal.getNumberOfPages()<J[ft];)O.call(this);return J},O=function(){var P=this.fillStyle,H=this.strokeStyle,K=this.font,J=this.lineCap,nt=this.lineWidth,st=this.lineJoin;this.pdf.addPage(),this.fillStyle=P,this.strokeStyle=H,this.font=K,this.lineCap=J,this.lineWidth=nt,this.lineJoin=st},Y=function(P,H,K){for(var J=0;J<P.length;J++)switch(P[J].type){case"bct":P[J].x2+=H,P[J].y2+=K;case"qct":P[J].x1+=H,P[J].y1+=K;default:P[J].x+=H,P[J].y+=K}return P},G=function(P){return P.sort(function(H,K){return H-K})},W=function(P,H){var K=this.fillStyle,J=this.strokeStyle,nt=this.lineCap,st=this.lineWidth,dt=Math.abs(st*this.ctx.transform.scaleX),ft=this.lineJoin;if(this.autoPaging){for(var _t,Lt,Ft=JSON.parse(JSON.stringify(this.path)),Ot=JSON.parse(JSON.stringify(this.path)),Gt=[],U=0;U<Ot.length;U++)if(Ot[U].x!==void 0)for(var Dt=M.call(this,Ot[U]),Ae=0;Ae<Dt.length;Ae+=1)Gt.indexOf(Dt[Ae])===-1&&Gt.push(Dt[Ae]);for(var ie=0;ie<Gt.length;ie++)for(;this.pdf.internal.getNumberOfPages()<Gt[ie];)O.call(this);G(Gt);for(var It=Gt[0],Zt=Gt[Gt.length-1],Mt=It;Mt<Zt+1;Mt++){this.pdf.setPage(Mt),this.fillStyle=K,this.strokeStyle=J,this.lineCap=nt,this.lineWidth=dt,this.lineJoin=ft;var ee=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Qt=Mt===1?this.posY+this.margin[0]:this.margin[0],Me=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Pe=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],Wt=Mt===1?0:Me+(Mt-2)*Pe;if(this.ctx.clip_path.length!==0){var le=this.path;_t=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=Y(_t,this.posX+this.margin[3],-Wt+Qt+this.ctx.prevPageLastElemOffset),ot.call(this,P,!0),this.path=le}if(Lt=JSON.parse(JSON.stringify(Ft)),this.path=Y(Lt,this.posX+this.margin[3],-Wt+Qt+this.ctx.prevPageLastElemOffset),H===!1||Mt===0){var Se=(Mt>It||Mt<Zt)&&R.call(this);Se&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],ee,Pe,null).clip().discardPath()),ot.call(this,P,H),Se&&this.pdf.restoreGraphicsState()}this.lineWidth=st}this.path=Ft}else this.lineWidth=dt,ot.call(this,P,H),this.lineWidth=st},ot=function(P,H){if((P!=="stroke"||H||!D.call(this))&&(P==="stroke"||H||!m.call(this))){for(var K,J,nt=[],st=this.path,dt=0;dt<st.length;dt++){var ft=st[dt];switch(ft.type){case"begin":nt.push({begin:!0});break;case"close":nt.push({close:!0});break;case"mt":nt.push({start:ft,deltas:[],abs:[]});break;case"lt":var _t=nt.length;if(st[dt-1]&&!isNaN(st[dt-1].x)&&(K=[ft.x-st[dt-1].x,ft.y-st[dt-1].y],_t>0)){for(;_t>=0;_t--)if(nt[_t-1].close!==!0&&nt[_t-1].begin!==!0){nt[_t-1].deltas.push(K),nt[_t-1].abs.push(ft);break}}break;case"bct":K=[ft.x1-st[dt-1].x,ft.y1-st[dt-1].y,ft.x2-st[dt-1].x,ft.y2-st[dt-1].y,ft.x-st[dt-1].x,ft.y-st[dt-1].y],nt[nt.length-1].deltas.push(K);break;case"qct":var Lt=st[dt-1].x+2/3*(ft.x1-st[dt-1].x),Ft=st[dt-1].y+2/3*(ft.y1-st[dt-1].y),Ot=ft.x+2/3*(ft.x1-ft.x),Gt=ft.y+2/3*(ft.y1-ft.y),U=ft.x,Dt=ft.y;K=[Lt-st[dt-1].x,Ft-st[dt-1].y,Ot-st[dt-1].x,Gt-st[dt-1].y,U-st[dt-1].x,Dt-st[dt-1].y],nt[nt.length-1].deltas.push(K);break;case"arc":nt.push({deltas:[],abs:[],arc:!0}),Array.isArray(nt[nt.length-1].abs)&&nt[nt.length-1].abs.push(ft)}}J=H?null:P==="stroke"?"stroke":"fill";for(var Ae=!1,ie=0;ie<nt.length;ie++)if(nt[ie].arc)for(var It=nt[ie].abs,Zt=0;Zt<It.length;Zt++){var Mt=It[Zt];Mt.type==="arc"?N.call(this,Mt.x,Mt.y,Mt.radius,Mt.startAngle,Mt.endAngle,Mt.counterclockwise,void 0,H,!Ae):S.call(this,Mt.x,Mt.y),Ae=!0}else if(nt[ie].close===!0)this.pdf.internal.out("h"),Ae=!1;else if(nt[ie].begin!==!0){var ee=nt[ie].start.x,Qt=nt[ie].start.y;Q.call(this,nt[ie].deltas,ee,Qt),Ae=!0}J&&E.call(this,J),H&&C.call(this)}},pt=function(P){var H=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,K=H*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return P-K;case"top":return P+H-K;case"hanging":return P+H-2*K;case"middle":return P+H/2-K;default:return P}},j=function(P){return P+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};b.prototype.createLinearGradient=function(){var P=function(){};return P.colorStops=[],P.addColorStop=function(H,K){this.colorStops.push([H,K])},P.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},P.isCanvasGradient=!0,P},b.prototype.createPattern=function(){return this.createLinearGradient()},b.prototype.createRadialGradient=function(){return this.createLinearGradient()};var N=function(P,H,K,J,nt,st,dt,ft,_t){for(var Lt=yt.call(this,K,J,nt,st),Ft=0;Ft<Lt.length;Ft++){var Ot=Lt[Ft];Ft===0&&(_t?w.call(this,Ot.x1+P,Ot.y1+H):S.call(this,Ot.x1+P,Ot.y1+H)),ut.call(this,P,H,Ot.x2,Ot.y2,Ot.x3,Ot.y3,Ot.x4,Ot.y4)}ft?C.call(this):E.call(this,dt)},E=function(P){switch(P){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},C=function(){this.pdf.clip(),this.pdf.discardPath()},w=function(P,H){this.pdf.internal.out(e(P)+" "+r(H)+" m")},x=function(P){var H;switch(P.align){case"right":case"end":H="right";break;case"center":H="center";break;default:H="left"}var K,J,nt,st=this.pdf.getTextDimensions(P.text),dt=pt.call(this,P.y),ft=j.call(this,dt)-st.h,_t=this.ctx.transform.applyToPoint(new o(P.x,dt));if(this.autoPaging){var Lt=this.ctx.transform.decompose(),Ft=new u;Ft=(Ft=(Ft=Ft.multiply(Lt.translate)).multiply(Lt.skew)).multiply(Lt.scale);for(var Ot=this.ctx.transform.applyToRectangle(new a(P.x,dt,st.w,st.h)),Gt=Ft.applyToRectangle(new a(P.x,ft,st.w,st.h)),U=M.call(this,Gt),Dt=[],Ae=0;Ae<U.length;Ae+=1)Dt.indexOf(U[Ae])===-1&&Dt.push(U[Ae]);G(Dt);for(var ie=Dt[0],It=Dt[Dt.length-1],Zt=ie;Zt<It+1;Zt++){this.pdf.setPage(Zt);var Mt=Zt===1?this.posY+this.margin[0]:this.margin[0],ee=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Qt=this.pdf.internal.pageSize.height-this.margin[2],Me=Qt-this.margin[0],Pe=this.pdf.internal.pageSize.width-this.margin[1],Wt=Pe-this.margin[3],le=Zt===1?0:ee+(Zt-2)*Me;if(this.ctx.clip_path.length!==0){var Se=this.path;K=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=Y(K,this.posX+this.margin[3],-1*le+Mt),ot.call(this,"fill",!0),this.path=Se}var $t=Y([JSON.parse(JSON.stringify(Gt))],this.posX+this.margin[3],-le+Mt+this.ctx.prevPageLastElemOffset)[0];P.scale>=.01&&(J=this.pdf.internal.getFontSize(),this.pdf.setFontSize(J*P.scale),nt=this.lineWidth,this.lineWidth=nt*P.scale);var me=this.autoPaging!=="text";if(me||$t.y+$t.h<=Qt){if(me||$t.y>=Mt&&$t.x<=Pe){var Kt=me?P.text:this.pdf.splitTextToSize(P.text,P.maxWidth||Pe-$t.x)[0],en=Y([JSON.parse(JSON.stringify(Ot))],this.posX+this.margin[3],-le+Mt+this.ctx.prevPageLastElemOffset)[0],De=me&&(Zt>ie||Zt<It)&&R.call(this);De&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Wt,Me,null).clip().discardPath()),this.pdf.text(Kt,en.x,en.y,{angle:P.angle,align:H,renderingMode:P.renderingMode}),De&&this.pdf.restoreGraphicsState()}}else $t.y<Qt&&(this.ctx.prevPageLastElemOffset+=Qt-$t.y);P.scale>=.01&&(this.pdf.setFontSize(J),this.lineWidth=nt)}}else P.scale>=.01&&(J=this.pdf.internal.getFontSize(),this.pdf.setFontSize(J*P.scale),nt=this.lineWidth,this.lineWidth=nt*P.scale),this.pdf.text(P.text,_t.x+this.posX,_t.y+this.posY,{angle:P.angle,align:H,renderingMode:P.renderingMode,maxWidth:P.maxWidth}),P.scale>=.01&&(this.pdf.setFontSize(J),this.lineWidth=nt)},S=function(P,H,K,J){K=K||0,J=J||0,this.pdf.internal.out(e(P+K)+" "+r(H+J)+" l")},Q=function(P,H,K){return this.pdf.lines(P,H,K,null,null)},ut=function(P,H,K,J,nt,st,dt,ft){this.pdf.internal.out([t(i(K+P)),t(s(J+H)),t(i(nt+P)),t(s(st+H)),t(i(dt+P)),t(s(ft+H)),"c"].join(" "))},yt=function(P,H,K,J){for(var nt=2*Math.PI,st=Math.PI/2;H>K;)H-=nt;var dt=Math.abs(K-H);dt<nt&&J&&(dt=nt-dt);for(var ft=[],_t=J?-1:1,Lt=H;dt>1e-5;){var Ft=Lt+_t*Math.min(dt,st);ft.push(mt.call(this,P,Lt,Ft)),dt-=Math.abs(Ft-Lt),Lt=Ft}return ft},mt=function(P,H,K){var J=(K-H)/2,nt=P*Math.cos(J),st=P*Math.sin(J),dt=nt,ft=-st,_t=dt*dt+ft*ft,Lt=_t+dt*nt+ft*st,Ft=4/3*(Math.sqrt(2*_t*Lt)-Lt)/(dt*st-ft*nt),Ot=dt-Ft*ft,Gt=ft+Ft*dt,U=Ot,Dt=-Gt,Ae=J+H,ie=Math.cos(Ae),It=Math.sin(Ae);return{x1:P*Math.cos(H),y1:P*Math.sin(H),x2:Ot*ie-Gt*It,y2:Ot*It+Gt*ie,x3:U*ie-Dt*It,y3:U*It+Dt*ie,x4:P*Math.cos(K),y4:P*Math.sin(K)}},at=function(P){return 180*P/Math.PI},vt=function(P,H,K,J,nt,st){var dt=P+.5*(K-P),ft=H+.5*(J-H),_t=nt+.5*(K-nt),Lt=st+.5*(J-st),Ft=Math.min(P,nt,dt,_t),Ot=Math.max(P,nt,dt,_t),Gt=Math.min(H,st,ft,Lt),U=Math.max(H,st,ft,Lt);return new a(Ft,Gt,Ot-Ft,U-Gt)},kt=function(P,H,K,J,nt,st,dt,ft){var _t,Lt,Ft,Ot,Gt,U,Dt,Ae,ie,It,Zt,Mt,ee,Qt,Me=K-P,Pe=J-H,Wt=nt-K,le=st-J,Se=dt-nt,$t=ft-st;for(Lt=0;Lt<41;Lt++)ie=(Dt=(Ft=P+(_t=Lt/40)*Me)+_t*((Gt=K+_t*Wt)-Ft))+_t*(Gt+_t*(nt+_t*Se-Gt)-Dt),It=(Ae=(Ot=H+_t*Pe)+_t*((U=J+_t*le)-Ot))+_t*(U+_t*(st+_t*$t-U)-Ae),Lt==0?(Zt=ie,Mt=It,ee=ie,Qt=It):(Zt=Math.min(Zt,ie),Mt=Math.min(Mt,It),ee=Math.max(ee,ie),Qt=Math.max(Qt,It));return new a(Math.round(Zt),Math.round(Mt),Math.round(ee-Zt),Math.round(Qt-Mt))},xt=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var P,H,K=(P=this.ctx.lineDash,H=this.ctx.lineDashOffset,JSON.stringify({lineDash:P,lineDashOffset:H}));this.prevLineDash!==K&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=K)}}})(Xt.API),function(n){var t=function(o){var a,u,d,f,b,A,m,D,R,M;for(u=[],d=0,f=(o+=a="\0\0\0\0".slice(o.length%4||4)).length;f>d;d+=4)(b=(o.charCodeAt(d)<<24)+(o.charCodeAt(d+1)<<16)+(o.charCodeAt(d+2)<<8)+o.charCodeAt(d+3))!==0?(A=(b=((b=((b=((b=(b-(M=b%85))/85)-(R=b%85))/85)-(D=b%85))/85)-(m=b%85))/85)%85,u.push(A+33,m+33,D+33,R+33,M+33)):u.push(122);return function(O,Y){for(var G=Y;G>0;G--)O.pop()}(u,a.length),String.fromCharCode.apply(String,u)+"~>"},e=function(o){var a,u,d,f,b,A=String,m="length",D=255,R="charCodeAt",M="slice",O="replace";for(o[M](-2),o=o[M](0,-2)[O](/\s/g,"")[O]("z","!!!!!"),d=[],f=0,b=(o+=a="uuuuu"[M](o[m]%5||5))[m];b>f;f+=5)u=52200625*(o[R](f)-33)+614125*(o[R](f+1)-33)+7225*(o[R](f+2)-33)+85*(o[R](f+3)-33)+(o[R](f+4)-33),d.push(D&u>>24,D&u>>16,D&u>>8,D&u);return function(Y,G){for(var W=G;W>0;W--)Y.pop()}(d,a[m]),A.fromCharCode.apply(A,d)},r=function(o){return o.split("").map(function(a){return("0"+a.charCodeAt().toString(16)).slice(-2)}).join("")+">"},i=function(o){var a=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((o=o.replace(/\s/g,"")).indexOf(">")!==-1&&(o=o.substr(0,o.indexOf(">"))),o.length%2&&(o+="0"),a.test(o)===!1)return"";for(var u="",d=0;d<o.length;d+=2)u+=String.fromCharCode("0x"+(o[d]+o[d+1]));return u},s=function(o){for(var a=new Uint8Array(o.length),u=o.length;u--;)a[u]=o.charCodeAt(u);return(a=ph(a)).reduce(function(d,f){return d+String.fromCharCode(f)},"")};n.processDataByFilters=function(o,a){var u=0,d=o||"",f=[];for(typeof(a=a||[])=="string"&&(a=[a]),u=0;u<a.length;u+=1)switch(a[u]){case"ASCII85Decode":case"/ASCII85Decode":d=e(d),f.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":d=t(d),f.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":d=i(d),f.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":d=r(d),f.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":d=s(d),f.push("/FlateDecode");break;default:throw new Error('The filter: "'+a[u]+'" is not implemented')}return{data:d,reverseChain:f.reverse().join(" ")}}}(Xt.API),function(n){n.loadFile=function(t,e,r){return function(i,s,o){s=s!==!1,o=typeof o=="function"?o:function(){};var a=void 0;try{a=function(u,d,f){var b=new XMLHttpRequest,A=0,m=function(D){var R=D.length,M=[],O=String.fromCharCode;for(A=0;A<R;A+=1)M.push(O(255&D.charCodeAt(A)));return M.join("")};if(b.open("GET",u,!d),b.overrideMimeType("text/plain; charset=x-user-defined"),d===!1&&(b.onload=function(){b.status===200?f(m(this.responseText)):f(void 0)}),b.send(null),d&&b.status===200)return m(b.responseText)}(i,s,o)}catch{}return a}(t,e,r)},n.allowFsRead=void 0,n.loadImageFile=n.loadFile}(Xt.API),function(n){function t(){return(he.html2canvas?Promise.resolve(he.html2canvas):wu(()=>import("./html2canvas.esm-CBrSDip1.js"),[])).catch(function(a){return Promise.reject(new Error("Could not load html2canvas: "+a))}).then(function(a){return a.default?a.default:a})}function e(){return(he.DOMPurify?Promise.resolve(he.DOMPurify):wu(()=>import("./purify.es-dhnUglUx.js"),[])).catch(function(a){return Promise.reject(new Error("Could not load dompurify: "+a))}).then(function(a){return a.default?a.default:a})}var r=function(a){var u=Ze(a);return u==="undefined"?"undefined":u==="string"||a instanceof String?"string":u==="number"||a instanceof Number?"number":u==="function"||a instanceof Function?"function":a&&a.constructor===Array?"array":a&&a.nodeType===1?"element":u==="object"?"object":"unknown"},i=function(a,u){var d=document.createElement(a);for(var f in u.className&&(d.className=u.className),u.innerHTML&&u.dompurify&&(d.innerHTML=u.dompurify.sanitize(u.innerHTML)),u.style)d.style[f]=u.style[f];return d},s=function a(u,d){for(var f=u.nodeType===3?document.createTextNode(u.nodeValue):u.cloneNode(!1),b=u.firstChild;b;b=b.nextSibling)d!==!0&&b.nodeType===1&&b.nodeName==="SCRIPT"||f.appendChild(a(b,d));return u.nodeType===1&&(u.nodeName==="CANVAS"?(f.width=u.width,f.height=u.height,f.getContext("2d").drawImage(u,0,0)):u.nodeName!=="TEXTAREA"&&u.nodeName!=="SELECT"||(f.value=u.value),f.addEventListener("load",function(){f.scrollTop=u.scrollTop,f.scrollLeft=u.scrollLeft},!0)),f},o=function a(u){var d=Object.assign(a.convert(Promise.resolve()),JSON.parse(JSON.stringify(a.template))),f=a.convert(Promise.resolve(),d);return(f=f.setProgress(1,a,1,[a])).set(u)};(o.prototype=Object.create(Promise.prototype)).constructor=o,o.convert=function(a,u){return a.__proto__=u||o.prototype,a},o.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},o.prototype.from=function(a,u){return this.then(function(){switch(u=u||function(d){switch(r(d)){case"string":return"string";case"element":return d.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}}(a),u){case"string":return this.then(e).then(function(d){return this.set({src:i("div",{innerHTML:a,dompurify:d})})});case"element":return this.set({src:a});case"canvas":return this.set({canvas:a});case"img":return this.set({img:a});default:return this.error("Unknown source type.")}})},o.prototype.to=function(a){switch(a){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},o.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var a={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},u=s(this.prop.src,this.opt.html2canvas.javascriptEnabled);u.tagName==="BODY"&&(a.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=i("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=i("div",{className:"html2pdf__container",style:a}),this.prop.container.appendChild(u),this.prop.container.firstChild.appendChild(i("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},o.prototype.toCanvas=function(){var a=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(a).then(t).then(function(u){var d=Object.assign({},this.opt.html2canvas);return delete d.onrendered,u(this.prop.container,d)}).then(function(u){(this.opt.html2canvas.onrendered||function(){})(u),this.prop.canvas=u,document.body.removeChild(this.prop.overlay)})},o.prototype.toContext2d=function(){var a=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(a).then(t).then(function(u){var d=this.opt.jsPDF,f=this.opt.fontFaces,b=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,A=Object.assign({async:!0,allowTaint:!0,scale:b,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete A.onrendered,d.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,d.context2d.posX=this.opt.x,d.context2d.posY=this.opt.y,d.context2d.margin=this.opt.margin,d.context2d.fontFaces=f,f)for(var m=0;m<f.length;++m){var D=f[m],R=D.src.find(function(M){return M.format==="truetype"});R&&d.addFont(R.url,D.ref.name,D.ref.style)}return A.windowHeight=A.windowHeight||0,A.windowHeight=A.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):A.windowHeight,d.context2d.save(!0),u(this.prop.container,A)}).then(function(u){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(u),this.prop.canvas=u,document.body.removeChild(this.prop.overlay)})},o.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var a=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=a})},o.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},o.prototype.output=function(a,u,d){return(d=d||"pdf").toLowerCase()==="img"||d.toLowerCase()==="image"?this.outputImg(a,u):this.outputPdf(a,u)},o.prototype.outputPdf=function(a,u){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(a,u)})},o.prototype.outputImg=function(a){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(a){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+a+'" is not supported.'}})},o.prototype.save=function(a){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(a?{filename:a}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},o.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},o.prototype.set=function(a){if(r(a)!=="object")return this;var u=Object.keys(a||{}).map(function(d){if(d in o.template.prop)return function(){this.prop[d]=a[d]};switch(d){case"margin":return this.setMargin.bind(this,a.margin);case"jsPDF":return function(){return this.opt.jsPDF=a.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,a.pageSize);default:return function(){this.opt[d]=a[d]}}},this);return this.then(function(){return this.thenList(u)})},o.prototype.get=function(a,u){return this.then(function(){var d=a in o.template.prop?this.prop[a]:this.opt[a];return u?u(d):d})},o.prototype.setMargin=function(a){return this.then(function(){switch(r(a)){case"number":a=[a,a,a,a];case"array":if(a.length===2&&(a=[a[0],a[1],a[0],a[1]]),a.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=a}).then(this.setPageSize)},o.prototype.setPageSize=function(a){function u(d,f){return Math.floor(d*f/72*96)}return this.then(function(){(a=a||Xt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(a.inner={width:a.width-this.opt.margin[1]-this.opt.margin[3],height:a.height-this.opt.margin[0]-this.opt.margin[2]},a.inner.px={width:u(a.inner.width,a.k),height:u(a.inner.height,a.k)},a.inner.ratio=a.inner.height/a.inner.width),this.prop.pageSize=a})},o.prototype.setProgress=function(a,u,d,f){return a!=null&&(this.progress.val=a),u!=null&&(this.progress.state=u),d!=null&&(this.progress.n=d),f!=null&&(this.progress.stack=f),this.progress.ratio=this.progress.val/this.progress.state,this},o.prototype.updateProgress=function(a,u,d,f){return this.setProgress(a?this.progress.val+a:null,u||null,d?this.progress.n+d:null,f?this.progress.stack.concat(f):null)},o.prototype.then=function(a,u){var d=this;return this.thenCore(a,u,function(f,b){return d.updateProgress(null,null,1,[f]),Promise.prototype.then.call(this,function(A){return d.updateProgress(null,f),A}).then(f,b).then(function(A){return d.updateProgress(1),A})})},o.prototype.thenCore=function(a,u,d){d=d||Promise.prototype.then;var f=this;a&&(a=a.bind(f)),u&&(u=u.bind(f));var b=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?f:o.convert(Object.assign({},f),Promise.prototype),A=d.call(b,a,u);return o.convert(A,f.__proto__)},o.prototype.thenExternal=function(a,u){return Promise.prototype.then.call(this,a,u)},o.prototype.thenList=function(a){var u=this;return a.forEach(function(d){u=u.thenCore(d)}),u},o.prototype.catch=function(a){a&&(a=a.bind(this));var u=Promise.prototype.catch.call(this,a);return o.convert(u,this)},o.prototype.catchExternal=function(a){return Promise.prototype.catch.call(this,a)},o.prototype.error=function(a){return this.then(function(){throw new Error(a)})},o.prototype.using=o.prototype.set,o.prototype.saveAs=o.prototype.save,o.prototype.export=o.prototype.output,o.prototype.run=o.prototype.then,Xt.getPageSize=function(a,u,d){if(Ze(a)==="object"){var f=a;a=f.orientation,u=f.unit||u,d=f.format||d}u=u||"mm",d=d||"a4",a=(""+(a||"P")).toLowerCase();var b,A=(""+d).toLowerCase(),m={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(u){case"pt":b=1;break;case"mm":b=72/25.4;break;case"cm":b=72/2.54;break;case"in":b=72;break;case"px":b=.75;break;case"pc":case"em":b=12;break;case"ex":b=6;break;default:throw"Invalid unit: "+u}var D,R=0,M=0;if(m.hasOwnProperty(A))R=m[A][1]/b,M=m[A][0]/b;else try{R=d[1],M=d[0]}catch{throw new Error("Invalid format: "+d)}if(a==="p"||a==="portrait")a="p",M>R&&(D=M,M=R,R=D);else{if(a!=="l"&&a!=="landscape")throw"Invalid orientation: "+a;a="l",R>M&&(D=M,M=R,R=D)}return{width:M,height:R,unit:u,k:b,orientation:a}},n.html=function(a,u){(u=u||{}).callback=u.callback||function(){},u.html2canvas=u.html2canvas||{},u.html2canvas.canvas=u.html2canvas.canvas||this.canvas,u.jsPDF=u.jsPDF||this,u.fontFaces=u.fontFaces?u.fontFaces.map(Bu):null;var d=new o(u);return u.worker?d:d.from(a).doCallback()}}(Xt.API),Xt.API.addJS=function(n){var t,e,r=function(i){for(var s="",o=0;o<i.length;o++){var a=i[o];if(a==="("||a===")"){for(var u=0,d=o-1;d>=0&&i[d]==="\\";d--)u++;s+=u%2==0?"\\"+a:a}else s+=a}return s}(n);return this.internal.events.subscribe("postPutResources",function(){t=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(t+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+r+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){t!==void 0&&e!==void 0&&this.internal.out("/Names <</JavaScript "+t+" 0 R>>")}),this},function(n){var t;n.events.push(["postPutResources",function(){var e=this,r=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var i=e.outline.render().split(/\r\n/),s=0;s<i.length;s++){var o=i[s],a=r.exec(o);if(a!=null){var u=a[1];e.internal.newObjectDeferredBegin(u,!1)}e.internal.write(o)}if(this.outline.createNamedDestinations){var d=this.internal.pages.length,f=[];for(s=0;s<d;s++){var b=e.internal.newObject();f.push(b);var A=e.internal.getPageInfo(s+1);e.internal.write("<< /D["+A.objId+" 0 R /XYZ null null null]>> endobj")}var m=e.internal.newObject();for(e.internal.write("<< /Names [ "),s=0;s<f.length;s++)e.internal.write("(page_"+(s+1)+")"+f[s]+" 0 R");e.internal.write(" ] >>","endobj"),t=e.internal.newObject(),e.internal.write("<< /Dests "+m+" 0 R"),e.internal.write(">>","endobj")}}]),n.events.push(["putCatalog",function(){var e=this;e.outline.root.children.length>0&&(e.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&e.internal.write("/Names "+t+" 0 R"))}]),n.events.push(["initialized",function(){var e=this;e.outline={createNamedDestinations:!1,root:{children:[]}},e.outline.add=function(r,i,s){var o={title:i,options:s,children:[]};return r==null&&(r=this.root),r.children.push(o),o},e.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=e,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},e.outline.genIds_r=function(r){r.id=e.internal.newObjectDeferred();for(var i=0;i<r.children.length;i++)this.genIds_r(r.children[i])},e.outline.renderRoot=function(r){this.objStart(r),this.line("/Type /Outlines"),r.children.length>0&&(this.line("/First "+this.makeRef(r.children[0])),this.line("/Last "+this.makeRef(r.children[r.children.length-1]))),this.line("/Count "+this.count_r({count:0},r)),this.objEnd()},e.outline.renderItems=function(r){for(var i=this.ctx.pdf.internal.getVerticalCoordinateString,s=0;s<r.children.length;s++){var o=r.children[s];this.objStart(o),this.line("/Title "+this.makeString(o.title)),this.line("/Parent "+this.makeRef(r)),s>0&&this.line("/Prev "+this.makeRef(r.children[s-1])),s<r.children.length-1&&this.line("/Next "+this.makeRef(r.children[s+1])),o.children.length>0&&(this.line("/First "+this.makeRef(o.children[0])),this.line("/Last "+this.makeRef(o.children[o.children.length-1])));var a=this.count=this.count_r({count:0},o);if(a>0&&this.line("/Count "+a),o.options&&o.options.pageNumber){var u=e.internal.getPageInfo(o.options.pageNumber);this.line("/Dest ["+u.objId+" 0 R /XYZ 0 "+i(0)+" 0]")}this.objEnd()}for(var d=0;d<r.children.length;d++)this.renderItems(r.children[d])},e.outline.line=function(r){this.ctx.val+=r+`\r
`},e.outline.makeRef=function(r){return r.id+" 0 R"},e.outline.makeString=function(r){return"("+e.internal.pdfEscape(r)+")"},e.outline.objStart=function(r){this.ctx.val+=`\r
`+r.id+` 0 obj\r
<<\r
`},e.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},e.outline.count_r=function(r,i){for(var s=0;s<i.children.length;s++)r.count++,this.count_r(r,i.children[s]);return r.count}}])}(Xt.API),function(n){var t=[192,193,194,195,196,197,198,199];n.processJPEG=function(e,r,i,s,o,a){var u,d=this.decode.DCT_DECODE,f=null;if(typeof e=="string"||this.__addimage__.isArrayBuffer(e)||this.__addimage__.isArrayBufferView(e)){switch(e=o||e,e=this.__addimage__.isArrayBuffer(e)?new Uint8Array(e):e,u=function(b){for(var A,m=256*b.charCodeAt(4)+b.charCodeAt(5),D=b.length,R={width:0,height:0,numcomponents:1},M=4;M<D;M+=2){if(M+=m,t.indexOf(b.charCodeAt(M+1))!==-1){A=256*b.charCodeAt(M+5)+b.charCodeAt(M+6),R={width:256*b.charCodeAt(M+7)+b.charCodeAt(M+8),height:A,numcomponents:b.charCodeAt(M+9)};break}m=256*b.charCodeAt(M+2)+b.charCodeAt(M+3)}return R}(e=this.__addimage__.isArrayBufferView(e)?this.__addimage__.arrayBufferToBinaryString(e):e),u.numcomponents){case 1:a=this.color_spaces.DEVICE_GRAY;break;case 4:a=this.color_spaces.DEVICE_CMYK;break;case 3:a=this.color_spaces.DEVICE_RGB}f={data:e,width:u.width,height:u.height,colorSpace:a,bitsPerComponent:8,filter:d,index:r,alias:i}}return f}}(Xt.API),Xt.API.processPNG=function(n,t,e,r){if(this.__addimage__.isArrayBuffer(n)&&(n=new Uint8Array(n)),this.__addimage__.isArrayBufferView(n)){var i,s=J_(n,{checkCrc:!0}),o=s.width,a=s.height,u=s.channels,d=s.palette,f=s.depth;i=d&&u===1?function(N){for(var E=N.width,C=N.height,w=N.data,x=N.palette,S=N.depth,Q=!1,ut=[],yt=[],mt=void 0,at=!1,vt=0,kt=0;kt<x.length;kt++){var xt=ip(x[kt],4),P=xt[0],H=xt[1],K=xt[2],J=xt[3];ut.push(P,H,K),J!=null&&(J===0?(vt++,yt.length<1&&yt.push(kt)):J<255&&(at=!0))}if(at||vt>1){Q=!0,yt=void 0;var nt=E*C;mt=new Uint8Array(nt);for(var st=new DataView(w.buffer),dt=0;dt<nt;dt++){var ft=ju(st,dt,S),_t=ip(x[ft],4)[3];mt[dt]=_t}}else vt===0&&(yt=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:Q?8:void 0,colorBytes:w,alphaBytes:mt,needSMask:Q,palette:ut,mask:yt}}(s):u===2||u===4?function(N){for(var E=N.data,C=N.width,w=N.height,x=N.channels,S=N.depth,Q=x===2?"DeviceGray":"DeviceRGB",ut=x-1,yt=C*w,mt=ut,at=yt*mt,vt=1*yt,kt=Math.ceil(at*S/8),xt=Math.ceil(vt*S/8),P=new Uint8Array(kt),H=new Uint8Array(xt),K=new DataView(E.buffer),J=new DataView(P.buffer),nt=new DataView(H.buffer),st=!1,dt=0;dt<yt;dt++){for(var ft=dt*x,_t=0;_t<mt;_t++)a1(J,ju(K,ft+_t,S),dt*mt+_t,S);var Lt=ju(K,ft+mt,S);Lt<(1<<S)-1&&(st=!0),a1(nt,Lt,1*dt,S)}return{colorSpace:Q,colorsPerPixel:ut,sMaskBitsPerComponent:st?S:void 0,colorBytes:P,alphaBytes:H,needSMask:st}}(s):function(N){var E=N.data,C=N.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:C,colorsPerPixel:C==="DeviceGray"?1:3,colorBytes:E instanceof Uint16Array?function(w){for(var x=w.length,S=new Uint8Array(2*x),Q=new DataView(S.buffer,S.byteOffset,S.byteLength),ut=0;ut<x;ut++)Q.setUint16(2*ut,w[ut],!1);return S}(E):E,needSMask:!1}}(s);var b,A,m,D=i,R=D.colorSpace,M=D.colorsPerPixel,O=D.sMaskBitsPerComponent,Y=D.colorBytes,G=D.alphaBytes,W=D.needSMask,ot=D.palette,pt=D.mask,j=null;return r!==Xt.API.image_compression.NONE&&typeof ph=="function"?(j=function(N){var E;switch(N){case Xt.API.image_compression.FAST:E=11;break;case Xt.API.image_compression.MEDIUM:E=13;break;case Xt.API.image_compression.SLOW:E=14;break;default:E=12}return E}(r),b=this.decode.FLATE_DECODE,A="/Predictor ".concat(j," /Colors ").concat(M," /BitsPerComponent ").concat(f," /Columns ").concat(o),n=n1(Y,Math.ceil(o*M*f/8),M,f,r),W&&(m=n1(G,Math.ceil(o*O/8),1,O,r))):(b=void 0,A=void 0,n=Y,W&&(m=G)),(this.__addimage__.isArrayBuffer(n)||this.__addimage__.isArrayBufferView(n))&&(n=this.__addimage__.arrayBufferToBinaryString(n)),(m&&this.__addimage__.isArrayBuffer(m)||this.__addimage__.isArrayBufferView(m))&&(m=this.__addimage__.arrayBufferToBinaryString(m)),{alias:e,data:n,index:t,filter:b,decodeParameters:A,transparency:pt,palette:ot,sMask:m,predictor:j,width:o,height:a,bitsPerComponent:f,sMaskBitsPerComponent:O,colorSpace:R}}},function(n){n.processGIF89A=function(t,e,r,i){var s=new b4(t),o=s.width,a=s.height,u=[];s.decodeAndBlitFrameRGBA(0,u);var d={data:u,width:o,height:a},f=new Uu(100).encode(d,100);return n.processJPEG.call(this,f,e,r,i)},n.processGIF87A=n.processGIF89A}(Xt.API),Pi.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var n=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(n);for(var t=0;t<n;t++){var e=this.datav.getUint8(this.pos++,!0),r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0);this.palette[t]={red:i,green:r,blue:e,quad:s}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},Pi.prototype.parseBGR=function(){this.pos=this.offset;var n="bit"+this.bitPP,t=this.width*this.height*4;if(t>536870912)throw new Error("Image dimensions exceed 512MB, which is too large.");this.data=new Uint8Array(t);try{this[n]()}catch(e){sn.log("bit decode error:"+e)}},Pi.prototype.bit1=function(){var n,t=Math.ceil(this.width/8),e=t%4;for(n=this.height-1;n>=0;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++)for(var s=this.datav.getUint8(this.pos++,!0),o=r*this.width*4+8*i*4,a=0;a<8&&8*i+a<this.width;a++){var u=this.palette[s>>7-a&1];this.data[o+4*a]=u.blue,this.data[o+4*a+1]=u.green,this.data[o+4*a+2]=u.red,this.data[o+4*a+3]=255}e!==0&&(this.pos+=4-e)}},Pi.prototype.bit4=function(){for(var n=Math.ceil(this.width/2),t=n%4,e=this.height-1;e>=0;e--){for(var r=this.bottom_up?e:this.height-1-e,i=0;i<n;i++){var s=this.datav.getUint8(this.pos++,!0),o=r*this.width*4+2*i*4,a=s>>4,u=15&s,d=this.palette[a];if(this.data[o]=d.blue,this.data[o+1]=d.green,this.data[o+2]=d.red,this.data[o+3]=255,2*i+1>=this.width)break;d=this.palette[u],this.data[o+4]=d.blue,this.data[o+4+1]=d.green,this.data[o+4+2]=d.red,this.data[o+4+3]=255}t!==0&&(this.pos+=4-t)}},Pi.prototype.bit8=function(){for(var n=this.width%4,t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var i=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*r;if(i<this.palette.length){var o=this.palette[i];this.data[s]=o.red,this.data[s+1]=o.green,this.data[s+2]=o.blue,this.data[s+3]=255}else this.data[s]=255,this.data[s+1]=255,this.data[s+2]=255,this.data[s+3]=255}n!==0&&(this.pos+=4-n)}},Pi.prototype.bit15=function(){for(var n=this.width%3,t=parseInt("11111",2),e=this.height-1;e>=0;e--){for(var r=this.bottom_up?e:this.height-1-e,i=0;i<this.width;i++){var s=this.datav.getUint16(this.pos,!0);this.pos+=2;var o=(s&t)/t*255|0,a=(s>>5&t)/t*255|0,u=(s>>10&t)/t*255|0,d=s>>15?255:0,f=r*this.width*4+4*i;this.data[f]=u,this.data[f+1]=a,this.data[f+2]=o,this.data[f+3]=d}this.pos+=n}},Pi.prototype.bit16=function(){for(var n=this.width%3,t=parseInt("11111",2),e=parseInt("111111",2),r=this.height-1;r>=0;r--){for(var i=this.bottom_up?r:this.height-1-r,s=0;s<this.width;s++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var a=(o&t)/t*255|0,u=(o>>5&e)/e*255|0,d=(o>>11)/t*255|0,f=i*this.width*4+4*s;this.data[f]=d,this.data[f+1]=u,this.data[f+2]=a,this.data[f+3]=255}this.pos+=n}},Pi.prototype.bit24=function(){for(var n=this.height-1;n>=0;n--){for(var t=this.bottom_up?n:this.height-1-n,e=0;e<this.width;e++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),o=t*this.width*4+4*e;this.data[o]=s,this.data[o+1]=i,this.data[o+2]=r,this.data[o+3]=255}this.pos+=this.width%4}},Pi.prototype.bit32=function(){for(var n=this.height-1;n>=0;n--)for(var t=this.bottom_up?n:this.height-1-n,e=0;e<this.width;e++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),s=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=t*this.width*4+4*e;this.data[a]=s,this.data[a+1]=i,this.data[a+2]=r,this.data[a+3]=o}},Pi.prototype.getData=function(){return this.data},function(n){n.processBMP=function(t,e,r,i){var s=new Pi(t,!1),o=s.width,a=s.height,u={data:s.getData(),width:o,height:a},d=new Uu(100).encode(u,100);return n.processJPEG.call(this,d,e,r,i)}}(Xt.API),c1.prototype.getData=function(){return this.data},function(n){n.processWEBP=function(t,e,r,i){var s=new c1(t),o=s.width,a=s.height,u={data:s.getData(),width:o,height:a},d=new Uu(100).encode(u,100);return n.processJPEG.call(this,d,e,r,i)}}(Xt.API),Xt.API.processRGBA=function(n,t,e){for(var r=n.data,i=r.length,s=new Uint8Array(i/4*3),o=new Uint8Array(i/4),a=0,u=0,d=0;d<i;d+=4){var f=r[d],b=r[d+1],A=r[d+2],m=r[d+3];s[a++]=f,s[a++]=b,s[a++]=A,o[u++]=m}var D=this.__addimage__.arrayBufferToBinaryString(s);return{alpha:this.__addimage__.arrayBufferToBinaryString(o),data:D,index:t,alias:e,colorSpace:"DeviceRGB",bitsPerComponent:8,width:n.width,height:n.height}},Xt.API.setLanguage=function(n){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[n]!==void 0&&(this.internal.languageSettings.languageCode=n,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},ra=Xt.API,tc=ra.getCharWidthsArray=function(n,t){var e,r,i=(t=t||{}).font||this.internal.getFont(),s=t.fontSize||this.internal.getFontSize(),o=t.charSpace||this.internal.getCharSpace(),a=t.widths?t.widths:i.metadata.Unicode.widths,u=a.fof?a.fof:1,d=t.kerning?t.kerning:i.metadata.Unicode.kerning,f=d.fof?d.fof:1,b=t.doKerning!==!1,A=0,m=n.length,D=0,R=a[0]||u,M=[];for(e=0;e<m;e++)r=n.charCodeAt(e),typeof i.metadata.widthOfString=="function"?M.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(r))+o*(1e3/s)||0)/1e3):(A=b&&Ze(d[r])==="object"&&!isNaN(parseInt(d[r][D],10))?d[r][D]/f:0,M.push((a[r]||R)/u+A)),D=r;return M},Zp=ra.getStringUnitWidth=function(n,t){var e=(t=t||{}).fontSize||this.internal.getFontSize(),r=t.font||this.internal.getFont(),i=t.charSpace||this.internal.getCharSpace();return ra.processArabic&&(n=ra.processArabic(n)),typeof r.metadata.widthOfString=="function"?r.metadata.widthOfString(n,e,i)/e:tc.apply(this,arguments).reduce(function(s,o){return s+o},0)},t1=function(n,t,e,r){for(var i=[],s=0,o=n.length,a=0;s!==o&&a+t[s]<e;)a+=t[s],s++;i.push(n.slice(0,s));var u=s;for(a=0;s!==o;)a+t[s]>r&&(i.push(n.slice(u,s)),a=0,u=s),a+=t[s],s++;return u!==s&&i.push(n.slice(u,s)),i},e1=function(n,t,e){e||(e={});var r,i,s,o,a,u,d,f=[],b=[f],A=e.textIndent||0,m=0,D=0,R=n.split(" "),M=tc.apply(this,[" ",e])[0];if(u=e.lineIndent===-1?R[0].length+2:e.lineIndent||0){var O=Array(u).join(" "),Y=[];R.map(function(W){(W=W.split(/\s*\n/)).length>1?Y=Y.concat(W.map(function(ot,pt){return(pt&&ot.length?`
`:"")+ot})):Y.push(W[0])}),R=Y,u=Zp.apply(this,[O,e])}for(s=0,o=R.length;s<o;s++){var G=0;if(r=R[s],u&&r[0]==`
`&&(r=r.substr(1),G=1),A+m+(D=(i=tc.apply(this,[r,e])).reduce(function(W,ot){return W+ot},0))>t||G){if(D>t){for(a=t1.apply(this,[r,i,t-(A+m),t]),f.push(a.shift()),f=[a.pop()];a.length;)b.push([a.shift()]);D=i.slice(r.length-(f[0]?f[0].length:0)).reduce(function(W,ot){return W+ot},0)}else f=[r];b.push(f),A=D+u,m=M}else f.push(r),A+=m+D,m=M}return d=u?function(W,ot){return(ot?O:"")+W.join(" ")}:function(W){return W.join(" ")},b.map(d)},ra.splitTextToSize=function(n,t,e){var r,i=(e=e||{}).fontSize||this.internal.getFontSize(),s=(function(f){if(f.widths&&f.kerning)return{widths:f.widths,kerning:f.kerning};var b=this.internal.getFont(f.fontName,f.fontStyle),A="Unicode";return b.metadata[A]?{widths:b.metadata[A].widths||{0:1},kerning:b.metadata[A].kerning||{}}:{font:b.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,e);r=Array.isArray(n)?n:String(n).split(/\r?\n/);var o=1*this.internal.scaleFactor*t/i;s.textIndent=e.textIndent?1*e.textIndent*this.internal.scaleFactor/i:0,s.lineIndent=e.lineIndent;var a,u,d=[];for(a=0,u=r.length;a<u;a++)d=d.concat(e1.apply(this,[r[a],o,s]));return d},function(n){n.__fontmetrics__=n.__fontmetrics__||{};for(var t="0123456789abcdef",e="klmnopqrstuvwxyz",r={},i={},s=0;s<16;s++)r[e[s]]=t[s],i[t[s]]=e[s];var o=function(A){return"0x"+parseInt(A,10).toString(16)},a=n.__fontmetrics__.compress=function(A){var m,D,R,M,O=["{"];for(var Y in A){if(m=A[Y],isNaN(parseInt(Y,10))?D="'"+Y+"'":(Y=parseInt(Y,10),D=(D=o(Y).slice(2)).slice(0,-1)+i[D.slice(-1)]),typeof m=="number")m<0?(R=o(m).slice(3),M="-"):(R=o(m).slice(2),M=""),R=M+R.slice(0,-1)+i[R.slice(-1)];else{if(Ze(m)!=="object")throw new Error("Don't know what to do with value type "+Ze(m)+".");R=a(m)}O.push(D+R)}return O.push("}"),O.join("")},u=n.__fontmetrics__.uncompress=function(A){if(typeof A!="string")throw new Error("Invalid argument passed to uncompress.");for(var m,D,R,M,O={},Y=1,G=O,W=[],ot="",pt="",j=A.length-1,N=1;N<j;N+=1)(M=A[N])=="'"?m?(R=m.join(""),m=void 0):m=[]:m?m.push(M):M=="{"?(W.push([G,R]),G={},R=void 0):M=="}"?((D=W.pop())[0][D[1]]=G,R=void 0,G=D[0]):M=="-"?Y=-1:R===void 0?r.hasOwnProperty(M)?(ot+=r[M],R=parseInt(ot,16)*Y,Y=1,ot=""):ot+=M:r.hasOwnProperty(M)?(pt+=r[M],G[R]=parseInt(pt,16)*Y,Y=1,R=void 0,pt=""):pt+=M;return O},d={codePages:["WinAnsiEncoding"],WinAnsiEncoding:u("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},f={Unicode:{Courier:d,"Courier-Bold":d,"Courier-BoldOblique":d,"Courier-Oblique":d,Helvetica:d,"Helvetica-Bold":d,"Helvetica-BoldOblique":d,"Helvetica-Oblique":d,"Times-Roman":d,"Times-Bold":d,"Times-BoldItalic":d,"Times-Italic":d}},b={Unicode:{"Courier-Oblique":u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":u("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":u("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":u("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:u("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:u("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":u("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:u("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":u("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":u("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":u("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};n.events.push(["addFont",function(A){var m=A.font,D=b.Unicode[m.postScriptName];D&&(m.metadata.Unicode={},m.metadata.Unicode.widths=D.widths,m.metadata.Unicode.kerning=D.kerning);var R=f.Unicode[m.postScriptName];R&&(m.metadata.Unicode.encoding=R,m.encoding=R.codePages[0])}])}(Xt.API),function(n){var t=function(e){for(var r=e.length,i=new Uint8Array(r),s=0;s<r;s++)i[s]=e.charCodeAt(s);return i};n.API.events.push(["addFont",function(e){var r=void 0,i=e.font,s=e.instance;if(!i.isStandardFont){if(s===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");if(typeof(r=s.existsFileInVFS(i.postScriptName)===!1?s.loadFile(i.postScriptName):s.getFileFromVFS(i.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");(function(o,a){a=/^\x00\x01\x00\x00/.test(a)?t(a):t(ac(a)),o.metadata=n.API.TTFFont.open(a),o.metadata.Unicode=o.metadata.Unicode||{encoding:{},kerning:{},widths:[]},o.metadata.glyIdsUsed=[0]})(i,r)}}])}(Xt),Xt.API.addSvgAsImage=function(n,t,e,r,i,s,o,a){if(isNaN(t)||isNaN(e))throw sn.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(r)||isNaN(i))throw sn.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var u=document.createElement("canvas");u.width=r,u.height=i;var d=u.getContext("2d");d.fillStyle="#fff",d.fillRect(0,0,u.width,u.height);var f={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},b=this;return(he.canvg?Promise.resolve(he.canvg):wu(()=>import("./index.es-CxQXJkIA.js"),[])).catch(function(A){return Promise.reject(new Error("Could not load canvg: "+A))}).then(function(A){return A.default?A.default:A}).then(function(A){return A.fromString(d,n,f)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(A){return A.render(f)}).then(function(){b.addImage(u.toDataURL("image/jpeg",1),t,e,r,i,o,a)})},Xt.API.putTotalPages=function(n){var t,e=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(t=new RegExp(n,"g"),e=this.internal.getNumberOfPages()):(t=new RegExp(this.pdfEscape16(n,this.internal.getFont()),"g"),e=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var r=1;r<=this.internal.getNumberOfPages();r++)for(var i=0;i<this.internal.pages[r].length;i++)this.internal.pages[r][i]=this.internal.pages[r][i].replace(t,e);return this},Xt.API.viewerPreferences=function(n,t){var e;n=n||{},t=t||!1;var r,i,s,o={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},a=Object.keys(o),u=[],d=0,f=0,b=0;function A(D,R){var M,O=!1;for(M=0;M<D.length;M+=1)D[M]===R&&(O=!0);return O}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(o)),this.internal.viewerpreferences.isSubscribed=!1),e=this.internal.viewerpreferences.configuration,n==="reset"||t===!0){var m=a.length;for(b=0;b<m;b+=1)e[a[b]].value=e[a[b]].defaultValue,e[a[b]].explicitSet=!1}if(Ze(n)==="object"){for(i in n)if(s=n[i],A(a,i)&&s!==void 0){if(e[i].type==="boolean"&&typeof s=="boolean")e[i].value=s;else if(e[i].type==="name"&&A(e[i].valueSet,s))e[i].value=s;else if(e[i].type==="integer"&&Number.isInteger(s))e[i].value=s;else if(e[i].type==="array"){for(d=0;d<s.length;d+=1)if(r=!0,s[d].length===1&&typeof s[d][0]=="number")u.push(String(s[d]-1));else if(s[d].length>1){for(f=0;f<s[d].length;f+=1)typeof s[d][f]!="number"&&(r=!1);r===!0&&u.push([s[d][0]-1,s[d][1]-1].join(" "))}e[i].value="["+u.join(" ")+"]"}else e[i].value=e[i].defaultValue;e[i].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var D,R=[];for(D in e)e[D].explicitSet===!0&&(e[D].type==="name"?R.push("/"+D+" /"+e[D].value):R.push("/"+D+" "+e[D].value));R.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+R.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=e,this},Xt.API.addMetadata=function(n,t){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:n,namespaceUri:t??"http://jspdf.default.namespaceuri/",rawXml:typeof t=="boolean"&&t},this.internal.events.subscribe("putCatalog",_4),this.internal.events.subscribe("postPutResources",w4)),this},function(n){var t=n.API,e=t.pdfEscape16=function(s,o){for(var a,u=o.metadata.Unicode.widths,d=["","0","00","000","0000"],f=[""],b=0,A=s.length;b<A;++b){if(a=o.metadata.characterToGlyph(s.charCodeAt(b)),o.metadata.glyIdsUsed.push(a),o.metadata.toUnicode[a]=s.charCodeAt(b),u.indexOf(a)==-1&&(u.push(a),u.push([parseInt(o.metadata.widthOfGlyph(a),10)])),a=="0")return f.join("");a=a.toString(16),f.push(d[4-a.length],a)}return f.join("")},r=function(s){var o,a,u,d,f,b,A;for(f=`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,u=[],b=0,A=(a=Object.keys(s).sort(function(m,D){return m-D})).length;b<A;b++)o=a[b],u.length>=100&&(f+=`
`+u.length+` beginbfchar
`+u.join(`
`)+`
endbfchar`,u=[]),s[o]!==void 0&&s[o]!==null&&typeof s[o].toString=="function"&&(d=("0000"+s[o].toString(16)).slice(-4),o=("0000"+(+o).toString(16)).slice(-4),u.push("<"+o+"><"+d+">"));return u.length&&(f+=`
`+u.length+` beginbfchar
`+u.join(`
`)+`
endbfchar
`),f+`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};t.events.push(["putFont",function(s){(function(o){var a=o.font,u=o.out,d=o.newObject,f=o.putStream;if(a.metadata instanceof n.API.TTFFont&&a.encoding==="Identity-H"){for(var b=a.metadata.Unicode.widths,A=a.metadata.subset.encode(a.metadata.glyIdsUsed,1),m="",D=0;D<A.length;D++)m+=String.fromCharCode(A[D]);var R=d();f({data:m,addLength1:!0,objectId:R}),u("endobj");var M=d();f({data:r(a.metadata.toUnicode),addLength1:!0,objectId:M}),u("endobj");var O=d();u("<<"),u("/Type /FontDescriptor"),u("/FontName /"+la(a.fontName)),u("/FontFile2 "+R+" 0 R"),u("/FontBBox "+n.API.PDFObject.convert(a.metadata.bbox)),u("/Flags "+a.metadata.flags),u("/StemV "+a.metadata.stemV),u("/ItalicAngle "+a.metadata.italicAngle),u("/Ascent "+a.metadata.ascender),u("/Descent "+a.metadata.decender),u("/CapHeight "+a.metadata.capHeight),u(">>"),u("endobj");var Y=d();u("<<"),u("/Type /Font"),u("/BaseFont /"+la(a.fontName)),u("/FontDescriptor "+O+" 0 R"),u("/W "+n.API.PDFObject.convert(b)),u("/CIDToGIDMap /Identity"),u("/DW 1000"),u("/Subtype /CIDFontType2"),u("/CIDSystemInfo"),u("<<"),u("/Supplement 0"),u("/Registry (Adobe)"),u("/Ordering ("+a.encoding+")"),u(">>"),u(">>"),u("endobj"),a.objectNumber=d(),u("<<"),u("/Type /Font"),u("/Subtype /Type0"),u("/ToUnicode "+M+" 0 R"),u("/BaseFont /"+la(a.fontName)),u("/Encoding /"+a.encoding),u("/DescendantFonts ["+Y+" 0 R]"),u(">>"),u("endobj"),a.isAlreadyPutted=!0}})(s)}]),t.events.push(["putFont",function(s){(function(o){var a=o.font,u=o.out,d=o.newObject,f=o.putStream;if(a.metadata instanceof n.API.TTFFont&&a.encoding==="WinAnsiEncoding"){for(var b=a.metadata.rawData,A="",m=0;m<b.length;m++)A+=String.fromCharCode(b[m]);var D=d();f({data:A,addLength1:!0,objectId:D}),u("endobj");var R=d();f({data:r(a.metadata.toUnicode),addLength1:!0,objectId:R}),u("endobj");var M=d();u("<<"),u("/Descent "+a.metadata.decender),u("/CapHeight "+a.metadata.capHeight),u("/StemV "+a.metadata.stemV),u("/Type /FontDescriptor"),u("/FontFile2 "+D+" 0 R"),u("/Flags 96"),u("/FontBBox "+n.API.PDFObject.convert(a.metadata.bbox)),u("/FontName /"+la(a.fontName)),u("/ItalicAngle "+a.metadata.italicAngle),u("/Ascent "+a.metadata.ascender),u(">>"),u("endobj"),a.objectNumber=d();for(var O=0;O<a.metadata.hmtx.widths.length;O++)a.metadata.hmtx.widths[O]=parseInt(a.metadata.hmtx.widths[O]*(1e3/a.metadata.head.unitsPerEm));u("<</Subtype/TrueType/Type/Font/ToUnicode "+R+" 0 R/BaseFont/"+la(a.fontName)+"/FontDescriptor "+M+" 0 R/Encoding/"+a.encoding+" /FirstChar 29 /LastChar 255 /Widths "+n.API.PDFObject.convert(a.metadata.hmtx.widths)+">>"),u("endobj"),a.isAlreadyPutted=!0}})(s)}]);var i=function(s){var o,a=s.text||"",u=s.x,d=s.y,f=s.options||{},b=s.mutex||{},A=b.pdfEscape,m=b.activeFontKey,D=b.fonts,R=m,M="",O=0,Y="",G=D[R].encoding;if(D[R].encoding!=="Identity-H")return{text:a,x:u,y:d,options:f,mutex:b};for(Y=a,R=m,Array.isArray(a)&&(Y=a[0]),O=0;O<Y.length;O+=1)D[R].metadata.hasOwnProperty("cmap")&&(o=D[R].metadata.cmap.unicode.codeMap[Y[O].charCodeAt(0)]),o||Y[O].charCodeAt(0)<256&&D[R].metadata.hasOwnProperty("Unicode")?M+=Y[O]:M+="";var W="";return parseInt(R.slice(1))<14||G==="WinAnsiEncoding"?W=A(M,R).split("").map(function(ot){return ot.charCodeAt(0).toString(16)}).join(""):G==="Identity-H"&&(W=e(M,D[R])),b.isHex=!0,{text:W,x:u,y:d,options:f,mutex:b}};t.events.push(["postProcessText",function(s){var o=s.text||"",a=[],u={text:o,x:s.x,y:s.y,options:s.options,mutex:s.mutex};if(Array.isArray(o)){var d=0;for(d=0;d<o.length;d+=1)Array.isArray(o[d])&&o[d].length===3?a.push([i(Object.assign({},u,{text:o[d][0]})).text,o[d][1],o[d][2]]):a.push(i(Object.assign({},u,{text:o[d]})).text);s.text=a}else s.text=i(Object.assign({},u,{text:o})).text}])}(Xt),function(n){var t=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};n.existsFileInVFS=function(e){return t.call(this),this.internal.vFS[e]!==void 0},n.addFileToVFS=function(e,r){return t.call(this),this.internal.vFS[e]=r,this},n.getFileFromVFS=function(e){return t.call(this),this.internal.vFS[e]!==void 0?this.internal.vFS[e]:null}}(Xt.API),function(n){n.__bidiEngine__=n.prototype.__bidiEngine__=function(r){var i,s,o,a,u,d,f,b=t,A=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],m=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],D={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},R={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},M=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],O=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),Y=!1,G=0;this.__bidiEngine__={};var W=function(w){var x=w.charCodeAt(),S=x>>8,Q=R[S];return Q!==void 0?b[256*Q+(255&x)]:S===252||S===253?"AL":O.test(S)?"L":S===8?"R":"N"},ot=function(w){for(var x,S=0;S<w.length;S++){if((x=W(w.charAt(S)))==="L")return!1;if(x==="R")return!0}return!1},pt=function(w,x,S,Q){var ut,yt,mt,at,vt=x[Q];switch(vt){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":Y=!1;break;case"N":case"AN":break;case"EN":Y&&(vt="AN");break;case"AL":Y=!0,vt="R";break;case"WS":case"BN":vt="N";break;case"CS":Q<1||Q+1>=x.length||(ut=S[Q-1])!=="EN"&&ut!=="AN"||(yt=x[Q+1])!=="EN"&&yt!=="AN"?vt="N":Y&&(yt="AN"),vt=yt===ut?yt:"N";break;case"ES":vt=(ut=Q>0?S[Q-1]:"B")==="EN"&&Q+1<x.length&&x[Q+1]==="EN"?"EN":"N";break;case"ET":if(Q>0&&S[Q-1]==="EN"){vt="EN";break}if(Y){vt="N";break}for(mt=Q+1,at=x.length;mt<at&&x[mt]==="ET";)mt++;vt=mt<at&&x[mt]==="EN"?"EN":"N";break;case"NSM":if(o&&!a){for(at=x.length,mt=Q+1;mt<at&&x[mt]==="NSM";)mt++;if(mt<at){var kt=w[Q],xt=kt>=1425&&kt<=2303||kt===64286;if(ut=x[mt],xt&&(ut==="R"||ut==="AL")){vt="R";break}}}vt=Q<1||(ut=x[Q-1])==="B"?"N":S[Q-1];break;case"B":Y=!1,i=!0,vt=G;break;case"S":s=!0,vt="N"}return vt},j=function(w,x,S){var Q=w.split("");return S&&N(Q,S,{hiLevel:G}),Q.reverse(),x&&x.reverse(),Q.join("")},N=function(w,x,S){var Q,ut,yt,mt,at,vt=-1,kt=w.length,xt=0,P=[],H=G?m:A,K=[];for(Y=!1,i=!1,s=!1,ut=0;ut<kt;ut++)K[ut]=W(w[ut]);for(yt=0;yt<kt;yt++){if(at=xt,P[yt]=pt(w,K,P,yt),Q=240&(xt=H[at][D[P[yt]]]),xt&=15,x[yt]=mt=H[xt][5],Q>0)if(Q===16){for(ut=vt;ut<yt;ut++)x[ut]=1;vt=-1}else vt=-1;if(H[xt][6])vt===-1&&(vt=yt);else if(vt>-1){for(ut=vt;ut<yt;ut++)x[ut]=mt;vt=-1}K[yt]==="B"&&(x[yt]=0),S.hiLevel|=mt}s&&function(J,nt,st){for(var dt=0;dt<st;dt++)if(J[dt]==="S"){nt[dt]=G;for(var ft=dt-1;ft>=0&&J[ft]==="WS";ft--)nt[ft]=G}}(K,x,kt)},E=function(w,x,S,Q,ut){if(!(ut.hiLevel<w)){if(w===1&&G===1&&!i)return x.reverse(),void(S&&S.reverse());for(var yt,mt,at,vt,kt=x.length,xt=0;xt<kt;){if(Q[xt]>=w){for(at=xt+1;at<kt&&Q[at]>=w;)at++;for(vt=xt,mt=at-1;vt<mt;vt++,mt--)yt=x[vt],x[vt]=x[mt],x[mt]=yt,S&&(yt=S[vt],S[vt]=S[mt],S[mt]=yt);xt=at}xt++}}},C=function(w,x,S){var Q=w.split(""),ut={hiLevel:G};return S||(S=[]),N(Q,S,ut),function(yt,mt,at){if(at.hiLevel!==0&&f)for(var vt,kt=0;kt<yt.length;kt++)mt[kt]===1&&(vt=M.indexOf(yt[kt]))>=0&&(yt[kt]=M[vt+1])}(Q,S,ut),E(2,Q,x,S,ut),E(1,Q,x,S,ut),Q.join("")};return this.__bidiEngine__.doBidiReorder=function(w,x,S){if(function(ut,yt){if(yt)for(var mt=0;mt<ut.length;mt++)yt[mt]=mt;a===void 0&&(a=ot(ut)),d===void 0&&(d=ot(ut))}(w,x),o||!u||d)if(o&&u&&a^d)G=a?1:0,w=j(w,x,S);else if(!o&&u&&d)G=a?1:0,w=C(w,x,S),w=j(w,x);else if(!o||a||u||d){if(o&&!u&&a^d)w=j(w,x),a?(G=0,w=C(w,x,S)):(G=1,w=C(w,x,S),w=j(w,x));else if(o&&a&&!u&&d)G=1,w=C(w,x,S),w=j(w,x);else if(!o&&!u&&a^d){var Q=f;a?(G=1,w=C(w,x,S),G=0,f=!1,w=C(w,x,S),f=Q):(G=0,w=C(w,x,S),w=j(w,x),G=1,f=!1,w=C(w,x,S),f=Q,w=j(w,x))}}else G=0,w=C(w,x,S);else G=a?1:0,w=C(w,x,S);return w},this.__bidiEngine__.setOptions=function(w){w&&(o=w.isInputVisual,u=w.isOutputVisual,a=w.isInputRtl,d=w.isOutputRtl,f=w.isSymmetricSwapping)},this.__bidiEngine__.setOptions(r),this.__bidiEngine__};var t=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],e=new n.__bidiEngine__({isInputVisual:!0});n.API.events.push(["postProcessText",function(r){var i=r.text;r.x,r.y;var s=r.options||{};r.mutex,s.lang;var o=[];if(s.isInputVisual=typeof s.isInputVisual!="boolean"||s.isInputVisual,e.setOptions(s),Object.prototype.toString.call(i)==="[object Array]"){var a=0;for(o=[],a=0;a<i.length;a+=1)Object.prototype.toString.call(i[a])==="[object Array]"?o.push([e.doBidiReorder(i[a][0]),i[a][1],i[a][2]]):o.push([e.doBidiReorder(i[a])]);r.text=o}else r.text=e.doBidiReorder(i);e.setOptions({isInputVisual:!0})}])}(Xt),Xt.API.TTFFont=function(){function n(t){var e;if(this.rawData=t,e=this.contents=new eo(t),this.contents.pos=4,e.readString(4)==="ttcf")throw new Error("TTCF not supported.");e.pos=0,this.parse(),this.subset=new F4(this),this.registerTTF()}return n.open=function(t){return new n(t)},n.prototype.parse=function(){return this.directory=new A4(this.contents),this.head=new x4(this),this.name=new L4(this),this.cmap=new qg(this),this.toUnicode={},this.hhea=new S4(this),this.maxp=new P4(this),this.hmtx=new k4(this),this.post=new N4(this),this.os2=new I4(this),this.loca=new O4(this),this.glyf=new C4(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},n.prototype.registerTTF=function(){var t,e,r,i,s;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var o,a,u,d;for(d=[],o=0,a=(u=this.bbox).length;o<a;o++)t=u[o],d.push(Math.round(t*this.scaleFactor));return d}).call(this),this.stemV=0,this.post.exists?(r=255&(i=this.post.italic_angle),32768&(e=i>>16)&&(e=-(1+(65535^e))),this.italicAngle=+(e+"."+r)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(s=this.familyClass)===1||s===2||s===3||s===4||s===5||s===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},n.prototype.characterToGlyph=function(t){var e;return((e=this.cmap.unicode)!=null?e.codeMap[t]:void 0)||0},n.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},n.prototype.widthOfString=function(t,e,r){var i,s,o,a;for(o=0,s=0,a=(t=""+t).length;0<=a?s<a:s>a;s=0<=a?++s:--s)i=t.charCodeAt(s),o+=this.widthOfGlyph(this.characterToGlyph(i))+r*(1e3/e)||0;return o*(e/1e3)},n.prototype.lineHeight=function(t,e){var r;return e==null&&(e=!1),r=e?this.lineGap:0,(this.ascender+r-this.decender)/1e3*t},n}();var Oi,eo=function(){function n(t){this.data=t??[],this.pos=0,this.length=this.data.length}return n.prototype.readByte=function(){return this.data[this.pos++]},n.prototype.writeByte=function(t){return this.data[this.pos++]=t},n.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},n.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},n.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},n.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},n.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},n.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},n.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},n.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},n.prototype.readString=function(t){var e,r;for(r=[],e=0;0<=t?e<t:e>t;e=0<=t?++e:--e)r[e]=String.fromCharCode(this.readByte());return r.join("")},n.prototype.writeString=function(t){var e,r,i;for(i=[],e=0,r=t.length;0<=r?e<r:e>r;e=0<=r?++e:--e)i.push(this.writeByte(t.charCodeAt(e)));return i},n.prototype.readShort=function(){return this.readInt16()},n.prototype.writeShort=function(t){return this.writeInt16(t)},n.prototype.readLongLong=function(){var t,e,r,i,s,o,a,u;return t=this.readByte(),e=this.readByte(),r=this.readByte(),i=this.readByte(),s=this.readByte(),o=this.readByte(),a=this.readByte(),u=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^r)+4294967296*(255^i)+16777216*(255^s)+65536*(255^o)+256*(255^a)+(255^u)+1):72057594037927940*t+281474976710656*e+1099511627776*r+4294967296*i+16777216*s+65536*o+256*a+u},n.prototype.writeLongLong=function(t){var e,r;return e=Math.floor(t/4294967296),r=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r)},n.prototype.readInt=function(){return this.readInt32()},n.prototype.writeInt=function(t){return this.writeInt32(t)},n.prototype.read=function(t){var e,r;for(e=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)e.push(this.readByte());return e},n.prototype.write=function(t){var e,r,i,s;for(s=[],r=0,i=t.length;r<i;r++)e=t[r],s.push(this.writeByte(e));return s},n}(),A4=function(){var n;function t(e){var r,i,s;for(this.scalarType=e.readInt(),this.tableCount=e.readShort(),this.searchRange=e.readShort(),this.entrySelector=e.readShort(),this.rangeShift=e.readShort(),this.tables={},i=0,s=this.tableCount;0<=s?i<s:i>s;i=0<=s?++i:--i)r={tag:e.readString(4),checksum:e.readInt(),offset:e.readInt(),length:e.readInt()},this.tables[r.tag]=r}return t.prototype.encode=function(e){var r,i,s,o,a,u,d,f,b,A,m,D,R;for(R in m=Object.keys(e).length,u=Math.log(2),b=16*Math.floor(Math.log(m)/u),o=Math.floor(b/u),f=16*m-b,(i=new eo).writeInt(this.scalarType),i.writeShort(m),i.writeShort(b),i.writeShort(o),i.writeShort(f),s=16*m,d=i.pos+s,a=null,D=[],e)for(A=e[R],i.writeString(R),i.writeInt(n(A)),i.writeInt(d),i.writeInt(A.length),D=D.concat(A),R==="head"&&(a=d),d+=A.length;d%4;)D.push(0),d++;return i.write(D),r=2981146554-n(i.data),i.pos=a+8,i.writeUInt32(r),i.data},n=function(e){var r,i,s,o;for(e=zg.call(e);e.length%4;)e.push(0);for(s=new eo(e),i=0,r=0,o=e.length;r<o;r=r+=4)i+=s.readUInt32();return 4294967295&i},t}(),E4={}.hasOwnProperty,ns=function(n,t){for(var e in t)E4.call(t,e)&&(n[e]=t[e]);function r(){this.constructor=n}return r.prototype=t.prototype,n.prototype=new r,n.__super__=t.prototype,n};Oi=function(){function n(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return n.prototype.parse=function(){},n.prototype.encode=function(){},n.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},n}();var x4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="head",n.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},n.prototype.encode=function(t){var e;return(e=new eo).writeInt(this.version),e.writeInt(this.revision),e.writeInt(this.checkSumAdjustment),e.writeInt(this.magicNumber),e.writeShort(this.flags),e.writeShort(this.unitsPerEm),e.writeLongLong(this.created),e.writeLongLong(this.modified),e.writeShort(this.xMin),e.writeShort(this.yMin),e.writeShort(this.xMax),e.writeShort(this.yMax),e.writeShort(this.macStyle),e.writeShort(this.lowestRecPPEM),e.writeShort(this.fontDirectionHint),e.writeShort(t),e.writeShort(this.glyphDataFormat),e.data},n}(),u1=function(){function n(t,e){var r,i,s,o,a,u,d,f,b,A,m,D,R,M,O,Y,G;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=e+t.readInt(),b=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(u=0;u<256;++u)this.codeMap[u]=t.readByte();break;case 4:for(m=t.readUInt16(),A=m/2,t.pos+=6,s=function(){var W,ot;for(ot=[],u=W=0;0<=A?W<A:W>A;u=0<=A?++W:--W)ot.push(t.readUInt16());return ot}(),t.pos+=2,R=function(){var W,ot;for(ot=[],u=W=0;0<=A?W<A:W>A;u=0<=A?++W:--W)ot.push(t.readUInt16());return ot}(),d=function(){var W,ot;for(ot=[],u=W=0;0<=A?W<A:W>A;u=0<=A?++W:--W)ot.push(t.readUInt16());return ot}(),f=function(){var W,ot;for(ot=[],u=W=0;0<=A?W<A:W>A;u=0<=A?++W:--W)ot.push(t.readUInt16());return ot}(),i=(this.length-t.pos+this.offset)/2,a=function(){var W,ot;for(ot=[],u=W=0;0<=i?W<i:W>i;u=0<=i?++W:--W)ot.push(t.readUInt16());return ot}(),u=O=0,G=s.length;O<G;u=++O)for(M=s[u],r=Y=D=R[u];D<=M?Y<=M:Y>=M;r=D<=M?++Y:--Y)f[u]===0?o=r+d[u]:(o=a[f[u]/2+(r-D)-(A-u)]||0)!==0&&(o+=d[u]),this.codeMap[r]=65535&o}t.pos=b}return n.encode=function(t,e){var r,i,s,o,a,u,d,f,b,A,m,D,R,M,O,Y,G,W,ot,pt,j,N,E,C,w,x,S,Q,ut,yt,mt,at,vt,kt,xt,P,H,K,J,nt,st,dt,ft,_t,Lt,Ft;switch(Q=new eo,o=Object.keys(t).sort(function(Ot,Gt){return Ot-Gt}),e){case"macroman":for(R=0,M=function(){var Ot=[];for(D=0;D<256;++D)Ot.push(0);return Ot}(),Y={0:0},s={},ut=0,vt=o.length;ut<vt;ut++)Y[ft=t[i=o[ut]]]==null&&(Y[ft]=++R),s[i]={old:t[i],new:Y[t[i]]},M[i]=Y[t[i]];return Q.writeUInt16(1),Q.writeUInt16(0),Q.writeUInt32(12),Q.writeUInt16(0),Q.writeUInt16(262),Q.writeUInt16(0),Q.write(M),{charMap:s,subtable:Q.data,maxGlyphID:R+1};case"unicode":for(x=[],b=[],G=0,Y={},r={},O=d=null,yt=0,kt=o.length;yt<kt;yt++)Y[ot=t[i=o[yt]]]==null&&(Y[ot]=++G),r[i]={old:ot,new:Y[ot]},a=Y[ot]-i,O!=null&&a===d||(O&&b.push(O),x.push(i),d=a),O=i;for(O&&b.push(O),b.push(65535),x.push(65535),C=2*(E=x.length),N=2*Math.pow(Math.log(E)/Math.LN2,2),A=Math.log(N/2)/Math.LN2,j=2*E-N,u=[],pt=[],m=[],D=mt=0,xt=x.length;mt<xt;D=++mt){if(w=x[D],f=b[D],w===65535){u.push(0),pt.push(0);break}if(w-(S=r[w].new)>=32768)for(u.push(0),pt.push(2*(m.length+E-D)),i=at=w;w<=f?at<=f:at>=f;i=w<=f?++at:--at)m.push(r[i].new);else u.push(S-w),pt.push(0)}for(Q.writeUInt16(3),Q.writeUInt16(1),Q.writeUInt32(12),Q.writeUInt16(4),Q.writeUInt16(16+8*E+2*m.length),Q.writeUInt16(0),Q.writeUInt16(C),Q.writeUInt16(N),Q.writeUInt16(A),Q.writeUInt16(j),st=0,P=b.length;st<P;st++)i=b[st],Q.writeUInt16(i);for(Q.writeUInt16(0),dt=0,H=x.length;dt<H;dt++)i=x[dt],Q.writeUInt16(i);for(_t=0,K=u.length;_t<K;_t++)a=u[_t],Q.writeUInt16(a);for(Lt=0,J=pt.length;Lt<J;Lt++)W=pt[Lt],Q.writeUInt16(W);for(Ft=0,nt=m.length;Ft<nt;Ft++)R=m[Ft],Q.writeUInt16(R);return{charMap:r,subtable:Q.data,maxGlyphID:G+1}}},n}(),qg=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="cmap",n.prototype.parse=function(t){var e,r,i;for(t.pos=this.offset,this.version=t.readUInt16(),i=t.readUInt16(),this.tables=[],this.unicode=null,r=0;0<=i?r<i:r>i;r=0<=i?++r:--r)e=new u1(t,this.offset),this.tables.push(e),e.isUnicode&&this.unicode==null&&(this.unicode=e);return!0},n.encode=function(t,e){var r,i;return e==null&&(e="macroman"),r=u1.encode(t,e),(i=new eo).writeUInt16(0),i.writeUInt16(1),r.table=i.data.concat(r.subtable),r},n}(),S4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="hhea",n.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},n}(),I4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="OS/2",n.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var e,r;for(r=[],e=0;e<10;++e)r.push(t.readByte());return r}(),this.charRange=function(){var e,r;for(r=[],e=0;e<4;++e)r.push(t.readInt());return r}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var e,r;for(r=[],e=0;e<2;e=++e)r.push(t.readInt());return r}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},n}(),N4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="post",n.prototype.parse=function(t){var e,r,i;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:case 196608:break;case 131072:var s;for(r=t.readUInt16(),this.glyphNameIndex=[],s=0;0<=r?s<r:s>r;s=0<=r?++s:--s)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],i=[];t.pos<this.offset+this.length;)e=t.readByte(),i.push(this.names.push(t.readString(e)));return i;case 151552:return r=t.readUInt16(),this.offsets=t.read(r);case 262144:return this.map=(function(){var o,a,u;for(u=[],s=o=0,a=this.file.maxp.numGlyphs;0<=a?o<a:o>a;s=0<=a?++o:--o)u.push(t.readUInt32());return u}).call(this)}},n}(),T4=function(n,t){this.raw=n,this.length=n.length,this.platformID=t.platformID,this.encodingID=t.encodingID,this.languageID=t.languageID},L4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="name",n.prototype.parse=function(t){var e,r,i,s,o,a,u,d,f,b,A;for(t.pos=this.offset,t.readShort(),e=t.readShort(),a=t.readShort(),r=[],s=0;0<=e?s<e:s>e;s=0<=e?++s:--s)r.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+a+t.readShort()});for(u={},s=f=0,b=r.length;f<b;s=++f)i=r[s],t.pos=i.offset,d=t.readString(i.length),o=new T4(d,i),u[A=i.nameID]==null&&(u[A]=[]),u[i.nameID].push(o);this.strings=u,this.copyright=u[0],this.fontFamily=u[1],this.fontSubfamily=u[2],this.uniqueSubfamily=u[3],this.fontName=u[4],this.version=u[5];try{this.postscriptName=u[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=u[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=u[7],this.manufacturer=u[8],this.designer=u[9],this.description=u[10],this.vendorUrl=u[11],this.designerUrl=u[12],this.license=u[13],this.licenseUrl=u[14],this.preferredFamily=u[15],this.preferredSubfamily=u[17],this.compatibleFull=u[18],this.sampleText=u[19]},n}(),P4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="maxp",n.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},n}(),k4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="hmtx",n.prototype.parse=function(t){var e,r,i,s,o,a,u;for(t.pos=this.offset,this.metrics=[],e=0,a=this.file.hhea.numberOfMetrics;0<=a?e<a:e>a;e=0<=a?++e:--e)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(i=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var d,f;for(f=[],e=d=0;0<=i?d<i:d>i;e=0<=i?++d:--d)f.push(t.readInt16());return f}(),this.widths=(function(){var d,f,b,A;for(A=[],d=0,f=(b=this.metrics).length;d<f;d++)s=b[d],A.push(s.advance);return A}).call(this),r=this.widths[this.widths.length-1],u=[],e=o=0;0<=i?o<i:o>i;e=0<=i?++o:--o)u.push(this.widths.push(r));return u},n.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},n}(),zg=[].slice,C4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="glyf",n.prototype.parse=function(){return this.cache={}},n.prototype.glyphFor=function(t){var e,r,i,s,o,a,u,d,f,b;return t in this.cache?this.cache[t]:(s=this.file.loca,e=this.file.contents,r=s.indexOf(t),(i=s.lengthOf(t))===0?this.cache[t]=null:(e.pos=this.offset+r,o=(a=new eo(e.read(i))).readShort(),d=a.readShort(),b=a.readShort(),u=a.readShort(),f=a.readShort(),this.cache[t]=o===-1?new D4(a,d,b,u,f):new R4(a,o,d,b,u,f),this.cache[t]))},n.prototype.encode=function(t,e,r){var i,s,o,a,u;for(o=[],s=[],a=0,u=e.length;a<u;a++)i=t[e[a]],s.push(o.length),i&&(o=o.concat(i.encode(r)));return s.push(o.length),{table:o,offsets:s}},n}(),R4=function(){function n(t,e,r,i,s,o){this.raw=t,this.numberOfContours=e,this.xMin=r,this.yMin=i,this.xMax=s,this.yMax=o,this.compound=!1}return n.prototype.encode=function(){return this.raw.data},n}(),D4=function(){function n(t,e,r,i,s){var o,a;for(this.raw=t,this.xMin=e,this.yMin=r,this.xMax=i,this.yMax=s,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],o=this.raw;a=o.readShort(),this.glyphOffsets.push(o.pos),this.glyphIDs.push(o.readUInt16()),32&a;)o.pos+=1&a?4:2,128&a?o.pos+=8:64&a?o.pos+=4:8&a&&(o.pos+=2)}return n.prototype.encode=function(){var t,e,r;for(e=new eo(zg.call(this.raw.data)),t=0,r=this.glyphIDs.length;t<r;++t)e.pos=this.glyphOffsets[t];return e.data},n}(),O4=function(){function n(){return n.__super__.constructor.apply(this,arguments)}return ns(n,Oi),n.prototype.tag="loca",n.prototype.parse=function(t){var e,r;return t.pos=this.offset,e=this.file.head.indexToLocFormat,this.offsets=e===0?(function(){var i,s;for(s=[],r=0,i=this.length;r<i;r+=2)s.push(2*t.readUInt16());return s}).call(this):(function(){var i,s;for(s=[],r=0,i=this.length;r<i;r+=4)s.push(t.readUInt32());return s}).call(this)},n.prototype.indexOf=function(t){return this.offsets[t]},n.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},n.prototype.encode=function(t,e){for(var r=new Uint32Array(this.offsets.length),i=0,s=0,o=0;o<r.length;++o)if(r[o]=i,s<e.length&&e[s]==o){++s,r[o]=i;var a=this.offsets[o],u=this.offsets[o+1]-a;u>0&&(i+=u)}for(var d=new Array(4*r.length),f=0;f<r.length;++f)d[4*f+3]=255&r[f],d[4*f+2]=(65280&r[f])>>8,d[4*f+1]=(16711680&r[f])>>16,d[4*f]=(4278190080&r[f])>>24;return d},n}(),F4=function(){function n(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return n.prototype.generateCmap=function(){var t,e,r,i,s;for(e in i=this.font.cmap.tables[0].codeMap,t={},s=this.subset)r=s[e],t[e]=i[r];return t},n.prototype.glyphsFor=function(t){var e,r,i,s,o,a,u;for(i={},o=0,a=t.length;o<a;o++)i[s=t[o]]=this.font.glyf.glyphFor(s);for(s in e=[],i)(r=i[s])!=null&&r.compound&&e.push.apply(e,r.glyphIDs);if(e.length>0)for(s in u=this.glyphsFor(e))r=u[s],i[s]=r;return i},n.prototype.encode=function(t,e){var r,i,s,o,a,u,d,f,b,A,m,D,R,M,O;for(i in r=qg.encode(this.generateCmap(),"unicode"),o=this.glyphsFor(t),m={0:0},O=r.charMap)m[(u=O[i]).old]=u.new;for(D in A=r.maxGlyphID,o)D in m||(m[D]=A++);return f=function(Y){var G,W;for(G in W={},Y)W[Y[G]]=G;return W}(m),b=Object.keys(f).sort(function(Y,G){return Y-G}),R=function(){var Y,G,W;for(W=[],Y=0,G=b.length;Y<G;Y++)a=b[Y],W.push(f[a]);return W}(),s=this.font.glyf.encode(o,R,m),d=this.font.loca.encode(s.offsets,R),M={cmap:this.font.cmap.raw(),glyf:s.table,loca:d,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(e)},this.font.os2.exists&&(M["OS/2"]=this.font.os2.raw()),this.font.directory.encode(M)},n}();Xt.API.PDFObject=function(){var n;function t(){}return n=function(e,r){return(Array(r+1).join("0")+e).slice(-r)},t.convert=function(e){var r,i,s,o;if(Array.isArray(e))return"["+function(){var a,u,d;for(d=[],a=0,u=e.length;a<u;a++)r=e[a],d.push(t.convert(r));return d}().join(" ")+"]";if(typeof e=="string")return"/"+e;if(e!=null&&e.isString)return"("+e+")";if(e instanceof Date)return"(D:"+n(e.getUTCFullYear(),4)+n(e.getUTCMonth(),2)+n(e.getUTCDate(),2)+n(e.getUTCHours(),2)+n(e.getUTCMinutes(),2)+n(e.getUTCSeconds(),2)+"Z)";if({}.toString.call(e)==="[object Object]"){for(i in s=["<<"],e)o=e[i],s.push("/"+i+" "+t.convert(o));return s.push(">>"),s.join(`
`)}return""+e},t}();async function M4(n){const t=await B4(),e={};(n.items||[]).forEach(r=>{const i=r.supplierName||r.supplier||"Unknown";e[i]||(e[i]=[]),e[i].push(r)});for(const r in e){const i=t.find(s=>s.name===r)||{};V4(n,i,e[r])}}async function B4(){return(await nr(Pn(de,"suppliers"))).docs.map(t=>t.data())}function V4(n,t,e){var f;const r=new Xt,i=14;let s=20;const o=n.currency||((f=e==null?void 0:e[0])==null?void 0:f.purchaseCurrency)||"EUR",u={EUR:"€",USD:"$",GBP:"£"}[o]||o;r.setFontSize(18),r.setTextColor(196,0,106),r.text("PURCHASE ORDER",196,s,{align:"right"}),s+=10,r.setFontSize(10),r.setTextColor(0),r.text(`PO Number: ${n.id}`,i,s),r.text(`Date: ${new Date().toLocaleDateString()}`,196,s,{align:"right"}),s+=10,r.text(`Supplier: ${t.name||""}`,i,s),r.text(`Email: ${t.email||""}`,i,s+5),s+=20,r.setFillColor(196,0,106),r.rect(i,s,182,8,"F"),r.setTextColor(255),r.text("Code",i+2,s+5),r.text("Description",i+30,s+5),r.text("Qty",i+110,s+5),r.text("Unit",i+135,s+5),r.text("Total",i+165,s+5),s+=10,r.setTextColor(0);let d=0;e.forEach(b=>{const A=Number(b.qty||0),m=Number(b.cost||b.purchasePrice||b.costPrice||0),D=A*m;d+=D,r.text(b.stockCode||"",i+2,s),r.text(b.description||"",i+30,s),r.text(String(A),i+110,s),r.text(`${u}${m.toFixed(2)}`,i+135,s),r.text(`${u}${D.toFixed(2)}`,i+165,s),s+=8}),s+=10,r.setFontSize(12),r.setTextColor(196,0,106),r.text(`TOTAL ${o}`,i+120,s),r.text(`${u}${d.toFixed(2)}`,i+165,s),r.save(`PO_${t.name||"Supplier"}_${n.id}.pdf`)}let Hg=[],Rr=null;async function j4(n,t){n.innerHTML=`<div class="card">
      Loading order...
    </div>`,Hg=await U4();const e=dn(de,"orders",t),r=await Mo(e);if(!r.exists()){n.innerHTML=`<div class="card">
        Order not found
      </div>`;return}Rr={id:r.id,...r.data()},n.innerHTML=`
    <div class="card">

      <h2>Order Detail</h2>

      <div class="grid-3">

        <div>
          <label>Customer</label>
          <input
            value="${Rr.customerName||""}"
            disabled
          />
        </div>

        <div>
          <label>Buyer</label>
          <input
            value="${Rr.buyerName||""}"
            disabled
          />
        </div>

        <div>
          <label>Order Date</label>
          <input
            type="date"
            value="${Rr.created||""}"
            disabled
          />
        </div>

      </div>

      <br>

      <div class="grid-2">

        <div>
          <label>Invoice Address</label>
          <textarea
            rows="4"
            disabled
          >${Rr.invoiceAddress||""}</textarea>
        </div>

        <div>
          <label>Delivery Address</label>
          <textarea
            rows="4"
            disabled
          >${Rr.shippingAddress||""}</textarea>
        </div>

      </div>

      <br>

      <div class="grid-3">

        <div>
          <label>Delivery Date</label>
          <input
            type="date"
            value="${Rr.deliveryDate||""}"
            disabled
          />
        </div>

        <div>
          <label>Status</label>
          <input
            value="${Rr.status||"Open"}"
            disabled
          />
        </div>

      </div>

      <hr>

      <table class="table">

        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Supplier</th>
            <th></th>
            <th>Qty</th>
            <th>Cost</th>
            <th>Sell</th>
            <th>Margin %</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody id="itemRows"></tbody>

      </table>

      <br>

      <div id="totalsBox"></div>

      <br>

      <button id="saveBtn">
        Save Changes
      </button>

      <button id="poBtn">
        Generate PO
      </button>

    </div>

    <div
      id="supplierModal"
      class="modal hidden"
    >
      <div class="modal-content">

        <h3>
          Change Supplier
        </h3>

        <input
          id="supplierSearch"
          placeholder="Search supplier..."
        />

        <br><br>

        <div id="supplierList"></div>

        <br>

        <button id="closeModal">
          Close
        </button>

      </div>
    </div>
  `,Wg(),Gg(),document.getElementById("saveBtn").onclick=q4,document.getElementById("poBtn").onclick=async()=>{await M4(Rr),Te("Purchase Order generated","success")},document.getElementById("closeModal").onclick=Kg}async function U4(){return(await nr(Pn(de,"suppliers"))).docs.map(t=>t.data())}function Wg(){const n=document.getElementById("itemRows");n.innerHTML=(Rr.items||[]).map((t,e)=>{const r=Number(t.sell||t.salePrice||0),i=t.supplier||t.supplierName||"",s=H4(Number(t.cost||0),r);return`
        <tr data-row="${e}">

          <td>${t.stockCode||""}</td>

          <td>${t.description||""}</td>

          <td>${i}</td>

          <td>
            <button
              class="supBtn"
              data-i="${e}"
            >
              Change
            </button>
          </td>

          <td>${t.qty||0}</td>

          <td>${Number(t.cost||0).toFixed(2)}</td>

          <td>${r.toFixed(2)}</td>

          <td>${s.toFixed(2)}%</td>

          <td>
            <select
              class="curSel"
              data-i="${e}"
            >
              ${z4(t.purchaseCurrency||"EUR")}
            </select>
          </td>

        </tr>
      `}).join(""),document.querySelectorAll(".supBtn").forEach(t=>{t.onclick=e=>$4(Number(e.target.dataset.i))}),document.querySelectorAll(".curSel").forEach(t=>{t.onchange=e=>{const r=Number(e.target.dataset.i);Rr.items[r].purchaseCurrency=e.target.value,Te("Currency updated","info")}})}function Gg(){let n=0,t=0;(Rr.items||[]).forEach(i=>{const s=Number(i.sell||i.salePrice||0);n+=s*Number(i.qty||0),t+=Number(i.cost||0)*Number(i.qty||0)});const e=n-t,r=n?e/n*100:0;document.getElementById("totalsBox").innerHTML=`
    <strong>Total Sell:</strong>
    ${n.toFixed(2)}
    |
    <strong>Total Cost:</strong>
    ${t.toFixed(2)}
    |
    <strong>GP:</strong>
    ${e.toFixed(2)}
    |
    <strong>Margin:</strong>
    ${r.toFixed(2)}%
  `}function $4(n){document.getElementById("supplierModal").classList.remove("hidden");const e=document.getElementById("supplierSearch"),r=document.getElementById("supplierList"),i=s=>{const o=s.toLowerCase();r.innerHTML=Hg.filter(a=>{var u;return(u=a.name)==null?void 0:u.toLowerCase().includes(o)}).map(a=>`
        <div
          class="supplier-row"
          data-name="${a.name}"
        >
          ${a.name}
        </div>
      `).join(""),document.querySelectorAll(".supplier-row").forEach(a=>{a.onclick=()=>{Rr.items[n].supplier=a.dataset.name,Kg(),Wg(),Gg(),Te("Supplier updated")}})};i(""),e.oninput=s=>i(s.target.value)}function Kg(){document.getElementById("supplierModal").classList.add("hidden")}async function q4(){await Ci(dn(de,"orders",Rr.id),{items:Rr.items}),Te("Order updated successfully")}function z4(n){return`
    <option ${n==="EUR"?"selected":""}>EUR</option>

    <option ${n==="USD"?"selected":""}>USD</option>

    <option ${n==="GBP"?"selected":""}>GBP</option>
  `}function H4(n,t){return t?(t-n)/t*100:0}let h1=[],Qg=null;async function Yg(n){Qg=n,h1=await t3();const t=h1.filter(e=>!e.invoiced);n.innerHTML=`
    <h2 style="margin-bottom:16px">Open Orders</h2>

    <div class="grid-4" style="margin-bottom:16px">
      <input id="searchBox" placeholder="Search PO or customer…" />
      <select id="custFilter">
        <option value="">All customers</option>
        ${Z4(t)}
      </select>
      <select id="statusFilter">
        <option value="">All statuses</option>
        <option>Open</option>
        <option>Partial</option>
        <option>Received</option>
        <option>Packed</option>
        <option>Shipped</option>
        <option>Query</option>
      </select>
      <div style="display:flex;gap:8px">
        <button id="reloadBtn">Reload</button>
        <button id="csvBtn">Weekly CSV</button>
      </div>
    </div>

    <div id="gridArea"></div>
  `,Xg(t),document.getElementById("reloadBtn").onclick=()=>Yg(n),document.getElementById("csvBtn").onclick=()=>G4(t),document.getElementById("searchBox").oninput=()=>$u(t),document.getElementById("custFilter").onchange=()=>$u(t),document.getElementById("statusFilter").onchange=()=>$u(t)}function Xg(n){const t=document.getElementById("gridArea");if(t){if(!n.length){t.innerHTML='<div class="card">No open orders found.</div>';return}t.innerHTML=`
    <table class="table">
      <thead>
        <tr>
          <th>PO</th>
          <th>Customer</th>
          <th>Buyer</th>
          <th>Due date</th>
          <th>Order status</th>
          <th>Warehouse</th>
          <th>Suppliers</th>
          <th>Customer status note</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${n.map(e=>`
          <tr id="row-${e.id}">
            <td><strong>${e.poNumber||"—"}</strong></td>
            <td>${e.customerName||"—"}</td>
            <td>${e.buyerName||"—"}</td>
            <td>${e.dueDate||e.deliveryDate||"—"}</td>
            <td>${K4(e)}</td>
            <td>
              ${Q4(e)}
              ${Y4(e)}
            </td>
            <td>${X4(e)}</td>
            <td>
              <div style="display:flex;flex-direction:column;gap:4px">
                ${e.warehouseSummary?`
                  <div style="
                    font-size:11px;color:#9ca3af;
                    background:#111827;padding:4px 7px;
                    border-radius:4px;margin-bottom:4px;
                    border-left:2px solid #374151;
                  ">
                    <span style="color:#6b7280;font-size:10px">
                      Auto (warehouse):
                    </span><br>
                    ${e.warehouseSummary}
                  </div>
                `:""}
                <textarea
                  id="txt_${e.id}"
                  rows="2"
                  placeholder="Trader status note…"
                  style="font-size:12px"
                >${e.customerStatus||""}</textarea>
              </div>
            </td>
            <td>
              <button
                class="saveBtn"
                data-id="${e.id}"
                style="white-space:nowrap"
              >
                Save note
              </button>
            </td>
            <td>
              <button
                class="viewBtn"
                data-id="${e.id}"
              >
                View
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,document.querySelectorAll(".saveBtn").forEach(e=>e.onclick=()=>W4(e.dataset.id)),document.querySelectorAll(".viewBtn").forEach(e=>e.onclick=()=>j4(Qg,e.dataset.id))}}async function W4(n){const t=document.getElementById(`txt_${n}`);t&&(await Ci(dn(de,"orders",n),{customerStatus:t.value}),Te("Status note saved","success"))}function G4(n){let t=`Customer,PO,Buyer,Due Date,Order Status,Warehouse Status,Customer Status
`;n.forEach(s=>{var u;const o=s.warehouseStatus||md(s.items||[]),a=(((u=document.getElementById(`txt_${s.id}`))==null?void 0:u.value)||s.customerStatus||s.warehouseSummary||"").trim();t+=[wo(s.customerName),wo(s.poNumber),wo(s.buyerName),wo(s.dueDate||s.deliveryDate),wo(s.status||"Open"),wo(o),wo(a)].join(",")+`
`});const e=new Blob([t],{type:"text/csv"}),r=URL.createObjectURL(e),i=document.createElement("a");i.href=r,i.download=`weekly-status-${new Date().toISOString().split("T")[0]}.csv`,i.click(),URL.revokeObjectURL(r),Te("CSV exported","success")}function $u(n){var i,s,o;const t=(((i=document.getElementById("searchBox"))==null?void 0:i.value)||"").toLowerCase(),e=((s=document.getElementById("custFilter"))==null?void 0:s.value)||"",r=((o=document.getElementById("statusFilter"))==null?void 0:o.value)||"";Xg(n.filter(a=>{const u=`${a.poNumber} ${a.customerName}`.toLowerCase(),d=a.warehouseStatus||md(a.items||[]),f=!t||u.includes(t),b=!e||a.customerName===e,A=!r||(a.status||"Open")===r||d===r;return f&&b&&A}))}function K4(n){const t=n.status||"Open",e={Open:["#1e3a8a","#93c5fd"],Partial:["#78350f","#fcd34d"],Received:["#14532d","#86efac"],Packed:["#14532d","#86efac"],Shipped:["#312e81","#c4b5fd"],Query:["#4c1d95","#f0abfc"],Invoiced:["#1f2937","#9ca3af"]},[r,i]=e[t]||e.Open;return`<span style="background:${r};color:${i};
    padding:3px 9px;border-radius:20px;font-size:11px;font-weight:700">${t}</span>`}function Q4(n){const t=n.warehouseStatus||md(n.items||[]);if(!t||t==="Open")return"";const e={Received:["#14532d","#86efac"],Partial:["#78350f","#fcd34d"],Query:["#4c1d95","#f0abfc"],Packed:["#14532d","#86efac"]},[r,i]=e[t]||["#1f2937","#9ca3af"];return`<span style="background:${r};color:${i};
    padding:2px 7px;border-radius:12px;font-size:10px;font-weight:700;
    display:inline-block;margin-bottom:4px">WH: ${t}</span>`}function Y4(n){const t=J4(n.items||[]);return Object.keys(t).length?Object.entries(t).map(([e,r])=>{const i=r.every(u=>Number(u.receivedQty)>=Number(u.qty)),s=r.some(u=>Number(u.receivedQty)>0);return`<div style="font-size:11px;color:#9ca3af">${r.some(u=>u.lineStatus==="Query")?"⚠️":i?"✅":s?"🔶":"⏳"} ${e}</div>`}).join(""):""}function X4(n){return[...new Set((n.items||[]).map(e=>e.supplier||e.supplierName||"").filter(Boolean))].map(e=>`<span style="background:#1e3a5f;color:#93c5fd;padding:1px 6px;
      border-radius:4px;font-size:11px;margin:1px;display:inline-block">${e}</span>`).join("")}function md(n){return n.length?n.some(t=>t.lineStatus==="Query")?"Query":n.every(t=>Number(t.receivedQty)>=Number(t.qty))?"Received":n.some(t=>Number(t.receivedQty)>0)?"Partial":"Open":"Open"}function J4(n){return n.reduce((t,e)=>{const r=e.supplier||e.supplierName||"Unknown";return t[r]||(t[r]=[]),t[r].push(e),t},{})}function Z4(n){return[...new Set(n.map(t=>t.customerName).filter(Boolean))].sort().map(t=>`<option>${t}</option>`).join("")}async function t3(){return(await nr(Pn(de,"orders"))).docs.map(t=>({id:t.id,...t.data()}))}function wo(n){return`"${String(n||"").replace(/"/g,'""')}"`}let Ah=[],Jg=[],gd=[],Zg=null;async function yd(n){Zg=n,await Eh(),n.innerHTML=`
    <h2 style="margin-bottom:16px">Warehouse</h2>

    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input
          id="wh-search"
          placeholder="Search by order number or customer…"
          style="flex:1;min-width:200px"
        />
        <button id="wh-reload">Reload</button>
      </div>
    </div>

    <div id="wh-grid"></div>
  `,document.getElementById("wh-reload").onclick=()=>yd(n),document.getElementById("wh-search").oninput=t=>{const e=t.target.value.toUpperCase();d1(Ah.filter(r=>((r.poNumber||"")+(r.customerName||"")).toUpperCase().includes(e)))},d1(Ah)}async function Eh(){const[n,t,e]=await Promise.all([nr(Pn(de,"orders")),nr(Pn(de,"countries")),nr(Pn(de,"exceptionReasons"))]);Ah=n.docs.map(r=>({id:r.id,...r.data()})),Jg=t.docs.map(r=>{const i=r.data();return{name:i.name||i.country||i.countryName||""}}).filter(r=>r.name).sort((r,i)=>r.name.localeCompare(i.name)),gd=e.empty?e3():e.docs.map(r=>({id:r.id,...r.data()}))}function e3(){return[{id:"wrong_part",label:"Incorrect part number"},{id:"damaged",label:"Damage"},{id:"short_qty",label:"Incorrect delivery quantity"}]}function d1(n){const t=document.getElementById("wh-grid");if(t){if(!n.length){t.innerHTML='<div class="card">No orders found.</div>';return}t.innerHTML=`
    <table class="table">
      <thead>
        <tr>
          <th>Order No.</th>
          <th>Customer</th>
          <th>Suppliers</th>
          <th>Warehouse status</th>
          <th>Summary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${n.map(e=>`
          <tr>
            <td><strong>${e.poNumber||"—"}</strong></td>
            <td>${e.customerName||"—"}</td>
            <td>${c3(e)}</td>
            <td>${i2(e)}</td>
            <td style="font-size:12px;color:#9ca3af">${o3(e)}</td>
            <td>
              <button onclick="window._whOpen('${e.id}')">Book in / labels</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `,window._whOpen=e=>vd(e)}}async function vd(n){const t=await Mo(dn(de,"orders",n));if(!t.exists()){Te("Order not found","error");return}const e={id:t.id,...t.data()},r=Zg,i=r2(e.items||[]),s=Object.keys(i);r.innerHTML=`
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
      <button id="wh-back-results">← Back to results</button>
      <h2 style="margin:0">
        Warehouse — ${e.poNumber||"—"}
        <span style="font-size:14px;font-weight:400;color:#9ca3af;margin-left:10px">
          ${e.customerName||""}
        </span>
      </h2>
      ${i2(e)}
    </div>

    ${e.warehouseSummary?`
      <div class="card" style="margin-bottom:16px;border-left:3px solid #3b82f6">
        <strong>Current status:</strong> ${e.warehouseSummary}
      </div>`:""}

    <div class="card" style="margin-bottom:16px">
      <h3 style="margin-bottom:10px">Warehouse actions</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <button id="wh-bond-label">
          Print Bond Label
        </button>
        <button id="wh-final-label">
          Print Final Label
        </button>
        <span style="color:#9ca3af;font-size:12px">
          Book goods in using the supplier tabs and line-item Receive buttons below.
        </span>
      </div>
    </div>

    <!-- ── SUPPLIER TABS ── -->
    <div style="display:flex;gap:6px;margin-bottom:0;flex-wrap:wrap">
      ${s.map((d,f)=>`
        <button
          class="sup-tab ${f===0?"active-tab":""}"
          onclick="window._whTab(${f})"
          data-si="${f}"
          style="border-radius:6px 6px 0 0;margin-bottom:0;
            ${f===0?"background:#1d4ed8":"background:#1f2c44"}"
        >
          ${d}
          ${u3(i[d])}
        </button>
      `).join("")}
    </div>

    <!-- ── SUPPLIER PANELS ── -->
    ${s.map((d,f)=>`
      <div
        id="sup-panel-${f}"
        style="display:${f===0?"block":"none"}"
      >
        ${n3(e,d,i[d],f)}
      </div>
    `).join("")}

    <!-- ── EXCEPTION REASONS ADMIN ── -->
    <div class="card" style="margin-top:20px">
      <details>
        <summary style="cursor:pointer;font-weight:600;color:#9ca3af;font-size:13px">
          ⚙ Manage exception reason list
        </summary>
        <div id="ex-reason-manager" style="margin-top:12px">
          ${xh()}
        </div>
      </details>
    </div>

  `,window._whPanel=r;const o=document.getElementById("wh-back-results");o&&(o.onclick=()=>yd(r));const a=document.getElementById("wh-bond-label");a&&(a.onclick=()=>a3(e.id));const u=document.getElementById("wh-final-label");u&&(u.onclick=()=>l3(e.id)),window._whTab=d=>{s.forEach((f,b)=>{const A=document.querySelector(`[data-si="${b}"]`),m=document.getElementById(`sup-panel-${b}`);A&&(A.style.background=b===d?"#1d4ed8":"#1f2c44"),m&&(m.style.display=b===d?"block":"none")})},s.forEach((d,f)=>{i[d].map(m=>m._originalIndex).forEach((m,D)=>{const R=`recv-btn-${f}-${D}`,M=document.getElementById(R);M&&(M.onclick=()=>r3(e.id,m,f,D))});const A=document.getElementById(`save-pack-${f}`);A&&(A.onclick=()=>i3(e.id,f,d))}),Sh(e.id)}function n3(n,t,e,r){const i=(n.packingBySup||{})[t]||{};return`
    <div class="card" style="border-radius:0 6px 6px 6px;margin-bottom:0">

      <!-- ── LINE ITEMS TABLE ── -->
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Part no.</th>
              <th>Stock code</th>
              <th>Description</th>
              <th>Ordered</th>
              <th>Previously received</th>
              <th>Receive now</th>
              <th>Country of origin</th>
              <th>Line status</th>
              <th>Exception reason</th>
              <th>Note</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${e.map((s,o)=>{const a=Number(s.receivedQty||0),u=Number(s.qty)-a;return`
                <tr id="line-row-${r}-${o}">
                  <td>${s.partNumber||"—"}</td>
                  <td>${s.stockCode||"—"}</td>
                  <td>${s.description||"—"}</td>
                  <td>${s.qty}</td>
                  <td>${a}</td>
                  <td>
                    <input
                      id="rcv-${r}-${o}"
                      type="number"
                      min="0"
                      max="${u}"
                      placeholder="0"
                      style="width:70px"
                      oninput="window._whAutoStatus(${r},${o},${Number(s.qty)},${a})"
                    />
                  </td>
                  <td>
                    <select id="coo-${r}-${o}" style="min-width:120px">
                      <option value="">Select…</option>
                      ${Jg.map(d=>`
                        <option ${d.name===(s.countryOfOrigin||"")?"selected":""}>
                          ${d.name}
                        </option>
                      `).join("")}
                    </select>
                  </td>
                  <td>
                    <select id="st-${r}-${o}" style="min-width:110px">
                      <option ${(s.lineStatus||"Open")==="Open"?"selected":""}>Open</option>
                      <option ${(s.lineStatus||"")==="Accepted"?"selected":""}>Accepted</option>
                      <option ${(s.lineStatus||"")==="Partial"?"selected":""}>Partial</option>
                      <option ${(s.lineStatus||"")==="Query"?"selected":""}>Query</option>
                    </select>
                  </td>
                  <td>
                    <select id="ex-${r}-${o}" style="min-width:160px">
                      <option value="">None</option>
                      ${gd.map(d=>`
                        <option value="${d.label}"
                          ${(s.exceptionReason||"")===d.label?"selected":""}
                        >${d.label}</option>
                      `).join("")}
                    </select>
                  </td>
                  <td>
                    <input
                      id="nt-${r}-${o}"
                      value="${s.note||""}"
                      placeholder="Note…"
                      style="width:120px"
                    />
                  </td>
                  <td>
                    <button id="recv-btn-${r}-${o}">
                      Receive
                    </button>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>

      <!-- ── PACKING / WEIGHT / DIMENSIONS ── -->
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid #1f2c44">
        <h4 style="margin-bottom:12px;color:#9ca3af;font-size:13px;text-transform:uppercase;letter-spacing:.05em">
          Weight, dimensions &amp; bond location — ${t}
        </h4>
        <div class="grid-4" style="gap:10px">
          <div>
            <label style="font-size:12px;color:#9ca3af">Cartons</label>
            <input id="pack-cartons-${r}"
              placeholder="No. cartons"
              value="${i.cartons||""}" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Weight (kg)</label>
            <input id="pack-weight-${r}"
              type="number" step="0.01"
              placeholder="Total kg"
              value="${i.totalWeight||""}" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Length (cm)</label>
            <input id="pack-l-${r}"
              type="number"
              placeholder="L"
              value="${i.length||""}" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Width (cm)</label>
            <input id="pack-w-${r}"
              type="number"
              placeholder="W"
              value="${i.width||""}" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Height (cm)</label>
            <input id="pack-h-${r}"
              type="number"
              placeholder="H"
              value="${i.height||""}" />
          </div>
          <div>
            <label style="font-size:12px;color:#9ca3af">Bond location</label>
            <input id="pack-bond-${r}"
              placeholder="e.g. A3, Bay 7…"
              value="${i.bondLocation||""}" />
          </div>
        </div>
        <div style="margin-top:12px">
          <button id="save-pack-${r}" style="background:#059669">
            Save weight / dimensions / bond location
          </button>
        </div>
      </div>

    </div>
  `}window._whAutoStatus=(n,t,e,r)=>{const i=document.getElementById(`rcv-${n}-${t}`),s=document.getElementById(`st-${n}-${t}`);if(!i||!s)return;const o=Number(i.value||0),a=r+o;a===0?s.value="Open":a>=e?s.value="Accepted":s.value="Partial"};async function r3(n,t,e,r){const i=await Mo(dn(de,"orders",n));if(!i.exists()){Te("Order not found","error");return}const s={id:i.id,...i.data()},o=[...s.items||[]],a={...o[t]},u=Number(gi(`rcv-${e}-${r}`)||0);if(u<0){Te("Enter a valid quantity","error");return}a.receivedQty=Number(a.receivedQty||0)+u,a.countryOfOrigin=gi(`coo-${e}-${r}`),a.lineStatus=gi(`st-${e}-${r}`),a.exceptionReason=gi(`ex-${e}-${r}`),a.note=gi(`nt-${e}-${r}`),a.receivedQty>=Number(a.qty)?a.lineStatus!=="Query"&&(a.lineStatus="Accepted"):a.receivedQty>0&&a.lineStatus!=="Query"&&(a.lineStatus="Partial"),o[t]=a;const d=t2(o),f=e2(s,o);await Ci(dn(de,"orders",n),{items:o,warehouseStatus:d,warehouseSummary:f,customerStatus:f}),Te("Receipt saved","success"),vd(n)}async function i3(n,t,e){const r=await Mo(dn(de,"orders",n));if(!r.exists()){Te("Order not found","error");return}const s={...{id:r.id,...r.data()}.packingBySup||{}};s[e]={cartons:gi(`pack-cartons-${t}`),totalWeight:gi(`pack-weight-${t}`),length:gi(`pack-l-${t}`),width:gi(`pack-w-${t}`),height:gi(`pack-h-${t}`),bondLocation:gi(`pack-bond-${t}`),savedAt:new Date().toISOString()};const o=s3(s);await Ci(dn(de,"orders",n),{packingBySup:s,packing:o}),Te(`Packing info saved for ${e}`,"success"),vd(n)}function s3(n){let t=0,e=0;const r=[];return Object.values(n).forEach(i=>{t+=Number(i.totalWeight||0),e+=Number(i.cartons||0),i.length&&i.width&&i.height&&r.push(`${i.length}×${i.width}×${i.height}`)}),{totalWeight:t.toFixed(2),cartons:e,dimensions:r.join(" / "),bondLocations:Object.entries(n).filter(([,i])=>i.bondLocation).map(([i,s])=>`${i}: ${s.bondLocation}`).join(" | ")}}function t2(n){return n.length?n.some(t=>t.lineStatus==="Query")?"Query":n.every(t=>Number(t.receivedQty)>=Number(t.qty))?"Received":n.some(t=>Number(t.receivedQty)>0)?"Partial":"Open":"Open"}function e2(n,t){const e=r2(t);return Object.entries(e).map(([i,s])=>{const o=s.every(d=>Number(d.receivedQty)>=Number(d.qty)),a=s.every(d=>!Number(d.receivedQty));return s.some(d=>d.lineStatus==="Query")?`${i}: Query`:o?`${i}: Received`:a?`${i}: Awaiting`:`${i}: Partial (${s.map(d=>`${d.stockCode} ${d.receivedQty}/${d.qty}`).join(", ")})`}).join(" | ")}function o3(n){return n.warehouseSummary||e2(n,n.items||[])}function xh(){return`
    <div id="ex-list">
      ${gd.map(n=>`
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <span style="flex:1">${n.label}</span>
          <button
            onclick="window._whDelExReason('${n.id}')"
            style="background:#7f1d1d;padding:4px 8px;font-size:12px"
          >Remove</button>
        </div>
      `).join("")}
    </div>
    <div style="display:flex;gap:8px;margin-top:10px">
      <input id="new-ex-reason" placeholder="New exception reason…" style="flex:1" />
      <button onclick="window._whAddExReason()">Add</button>
    </div>
  `}function Sh(n){window._whAddExReason=async()=>{const t=gi("new-ex-reason").trim();if(!t){Te("Enter a reason","warn");return}await Hc(Pn(de,"exceptionReasons"),{label:t}),Te("Exception reason added","success"),await Eh();const e=document.getElementById("ex-reason-manager");e&&(e.innerHTML=xh(),Sh())},window._whDelExReason=async t=>{if(t.startsWith("wrong_")||t==="damaged"||t==="short_qty"){Te("Default reasons cannot be removed","warn");return}await Jm(dn(de,"exceptionReasons",t)),Te("Removed","success"),await Eh();const e=document.getElementById("ex-reason-manager");e&&(e.innerHTML=xh(),Sh())}}async function a3(n){const t=await Mo(dn(de,"orders",n));if(!t.exists())return;const e={id:t.id,...t.data()},r=e.packingBySup||{},i=Object.entries(r).map(([s,o])=>`
    <div style="
      font-family:Arial,sans-serif;
      border:3px solid #000;
      padding:24px;
      max-width:380px;
      margin:20px auto;
      page-break-after:always
    ">
      <div style="text-align:center;font-size:22px;font-weight:bold;margin-bottom:16px;letter-spacing:.05em">
        BOND LABEL
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        <tr><td style="padding:6px 4px;color:#555;width:40%">Order No.</td>
            <td style="padding:6px 4px;font-weight:700">${e.poNumber||"—"}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Supplier</td>
            <td style="padding:6px 4px;font-weight:700">${s}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Weight</td>
            <td style="padding:6px 4px;font-weight:700">${o.totalWeight||"—"} kg</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Dimensions</td>
            <td style="padding:6px 4px;font-weight:700">${o.length||"?"}×${o.width||"?"}×${o.height||"?"} cm</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Cartons</td>
            <td style="padding:6px 4px;font-weight:700">${o.cartons||"—"}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:8px 4px;color:#555">Bond location</td>
            <td style="padding:8px 4px;font-size:20px;font-weight:900">${o.bondLocation||"—"}</td></tr>
      </table>
    </div>
  `).join("");n2("Bond Labels — "+e.poNumber,i)}async function l3(n){const t=await Mo(dn(de,"orders",n));if(!t.exists())return;const e={id:t.id,...t.data()},r=e.packing||{},i=[...new Set((e.items||[]).map(o=>o.countryOfOrigin).filter(Boolean))].join(", "),s=`
    <div style="
      font-family:Arial,sans-serif;
      border:3px solid #000;
      padding:24px;
      max-width:380px;
      margin:20px auto
    ">
      <div style="text-align:center;font-size:20px;font-weight:bold;margin-bottom:16px;letter-spacing:.05em">
        FINAL LABEL
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        <tr><td style="padding:6px 4px;color:#555;width:45%">Customer</td>
            <td style="padding:6px 4px;font-weight:700">${e.customerName||"—"}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Customer order no.</td>
            <td style="padding:6px 4px;font-weight:700">${e.poNumber||"—"}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">System order no.</td>
            <td style="padding:6px 4px;font-weight:700">${e.id}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Weight</td>
            <td style="padding:6px 4px;font-weight:700">${r.totalWeight||"—"} kg</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Dimensions</td>
            <td style="padding:6px 4px;font-weight:700">${r.dimensions||"—"}</td></tr>
        <tr><td style="padding:6px 4px;color:#555">Cartons</td>
            <td style="padding:6px 4px;font-weight:700">${r.cartons||"—"}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:8px 4px;color:#555">Country of origin</td>
            <td style="padding:8px 4px;font-weight:700">${i||"—"}</td></tr>
      </table>
    </div>
  `;n2("Final Label — "+e.poNumber,s)}function n2(n,t){const e=window.open("","_blank");e.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${n}</title>
      <style>
        body { margin:0; background:#fff; color:#000; }
        @media print { body { margin:0; } }
      </style>
    </head>
    <body>
      ${t}
      <script>window.onload = () => { window.print(); }<\/script>
    </body>
    </html>
  `),e.document.close()}function r2(n){const t={};return n.forEach((e,r)=>{const i=e.supplier||e.supplierName||"Unknown supplier";t[i]||(t[i]=[]),t[i].push({...e,_originalIndex:r})}),t}function c3(n){return[...new Set((n.items||[]).map(e=>e.supplier||e.supplierName||"").filter(Boolean))].map(e=>`<span style="
    background:#1e3a5f;color:#93c5fd;
    padding:2px 7px;border-radius:4px;
    font-size:11px;margin-right:4px
  ">${e}</span>`).join("")}function u3(n){const t=n.every(i=>Number(i.receivedQty)>=Number(i.qty)),e=n.some(i=>Number(i.receivedQty)>0);return n.some(i=>i.lineStatus==="Query")?" ⚠️":t?" ✅":e?" 🔶":""}function i2(n){const t=n.warehouseStatus||t2(n.items||[]),e={Received:["green","#14532d","#86efac"],Partial:["amber","#78350f","#fcd34d"],Query:["purple","#4c1d95","#c4b5fd"],Open:["blue","#1e3a8a","#93c5fd"],Packed:["green","#14532d","#86efac"]},[,r,i]=e[t]||e.Open;return`<span style="
    background:${r};color:${i};
    padding:4px 10px;border-radius:20px;
    font-size:12px;font-weight:700
  ">${t}</span>`}function gi(n){const t=document.getElementById(n);return t?t.value:""}let f1=[],hn=null;const Yi="Colchester, UK";async function s2(n){f1=await m3();const t=f1.filter(e=>e.warehouseStatus==="Received"||e.warehouseStatus==="Partial"||e.warehouseStatus==="Packed"||(e.items||[]).some(r=>Number(r.receivedQty)>0));n.innerHTML=`
    <h2 style="margin-bottom:16px">Shipping</h2>

    <div class="card" style="margin-bottom:16px">
      <label style="font-size:13px;color:#9ca3af;display:block;margin-bottom:6px">
        Select order to despatch
      </label>
      <div style="display:flex;gap:10px">
        <select id="ship-sel" style="flex:1">
          <option value="">— Select order —</option>
          ${t.map(e=>`
            <option value="${e.id}">
              ${e.poNumber||e.id} — ${e.customerName||""}
              ${e.warehouseStatus?"("+e.warehouseStatus+")":""}
            </option>
          `).join("")}
        </select>
        <button id="ship-load-btn">Load order</button>
      </div>
      ${t.length?"":`
        <p style="color:#9ca3af;font-size:12px;margin-top:8px">
          No orders are ready to ship. Goods must be received at warehouse first.
        </p>`}
    </div>

    <div id="ship-detail"></div>
  `,document.getElementById("ship-load-btn").onclick=async()=>{const e=document.getElementById("ship-sel").value;if(!e){Te("Select an order first","warn");return}const r=await Mo(dn(de,"orders",e));if(!r.exists()){Te("Order not found","error");return}hn={id:r.id,...r.data()},h3()}}function h3(n){const t=document.getElementById("ship-detail"),e=hn.packing||{},r=hn.packingBySup||{},i=Object.entries(r).map(([o,a])=>`
    <tr>
      <td>${o}</td>
      <td>${a.cartons||"—"}</td>
      <td>${a.totalWeight||"—"} kg</td>
      <td>${a.length||"?"}×${a.width||"?"}×${a.height||"?"} cm</td>
      <td>${a.bondLocation||"—"}</td>
    </tr>
  `).join(""),s=(hn.items||[]).filter(o=>Number(o.receivedQty)>0);t.innerHTML=`
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div>
          <strong style="font-size:16px">${hn.poNumber||"—"}</strong>
          <span style="color:#9ca3af;margin-left:10px">${hn.customerName||""}</span>
        </div>
        <button onclick="renderShipping(document.getElementById('pageArea'))"
          style="background:#374151">
          ← Back
        </button>
      </div>

      <!-- ── PACKING SUMMARY FROM WAREHOUSE ── -->
      <h4 style="margin-bottom:10px;font-size:13px;text-transform:uppercase;
                 letter-spacing:.05em;color:#9ca3af">
        Packing — from warehouse
      </h4>

      ${Object.keys(r).length?`
        <table class="table" style="margin-bottom:16px">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Cartons</th>
              <th>Weight</th>
              <th>Dimensions</th>
              <th>Bond location</th>
            </tr>
          </thead>
          <tbody>${i}</tbody>
          <tfoot>
            <tr style="font-weight:700;border-top:1px solid #374151">
              <td>TOTAL</td>
              <td>${e.cartons||"—"}</td>
              <td>${e.totalWeight||"—"} kg</td>
              <td>${e.dimensions||"—"}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      `:`
        <div style="color:#f59e0b;font-size:13px;margin-bottom:16px">
          ⚠ No packing information entered at warehouse yet.
          Weight and dimensions must be entered before generating documents.
        </div>
      `}

      <!-- ── LINE ITEMS (received only) ── -->
      <h4 style="margin-bottom:10px;font-size:13px;text-transform:uppercase;
                 letter-spacing:.05em;color:#9ca3af">
        Commercial lines — received goods
      </h4>

      <div style="overflow-x:auto">
        <table class="table" style="margin-bottom:16px">
          <thead>
            <tr>
              <th>Part no.</th>
              <th>Stock code</th>
              <th>Description</th>
              <th>Qty shipping</th>
              <th>HS code</th>
              <th>Country of origin</th>
              <th>Unit value</th>
              <th>Line total</th>
            </tr>
          </thead>
          <tbody>
            ${s.map((o,a)=>`
              <tr>
                <td>${o.partNumber||"—"}</td>
                <td>${o.stockCode||"—"}</td>
                <td>${o.description||"—"}</td>
                <td>
                  <strong style="${Number(o.receivedQty)<Number(o.qty)?"color:#f59e0b":"color:#86efac"}">
                    ${o.receivedQty}
                    ${Number(o.receivedQty)<Number(o.qty)?`<span style="color:#9ca3af;font-size:11px">
                           of ${o.qty} — balance outstanding
                         </span>`:""}
                  </strong>
                </td>
                <td>
                  <input
                    id="hs-${a}"
                    value="${o.hsCode||""}"
                    style="width:110px"
                    placeholder="HS code"
                  />
                </td>
                <td style="color:#86efac">
                  ${o.countryOfOrigin||'<span style="color:#f59e0b">Not set</span>'}
                </td>
                <td>${Number(o.sell||o.salePrice||0).toFixed(2)}</td>
                <td>${(Number(o.receivedQty)*Number(o.sell||o.salePrice||0)).toFixed(2)}</td>
              </tr>
            `).join("")}
          </tbody>
          <tfoot>
            <tr style="font-weight:700;border-top:1px solid #374151">
              <td colspan="7">Total EX Works ${Yi}</td>
              <td>${s.reduce((o,a)=>o+Number(a.receivedQty)*Number(a.sell||a.salePrice||0),0).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- ── DESPATCH METHOD ── -->
      <h4 style="margin-bottom:10px;font-size:13px;text-transform:uppercase;
                 letter-spacing:.05em;color:#9ca3af">
        Despatch details
      </h4>

      <div class="grid-4" style="gap:12px;margin-bottom:14px">
        <div>
          <label style="font-size:12px;color:#9ca3af">Method</label>
          <select id="ship-type" onchange="window._shipMethodToggle()">
            <option value="Courier">Courier</option>
            <option value="Ex-Works">Collected by forwarder (Ex-Works)</option>
          </select>
        </div>
        <div id="courier-name-wrap">
          <label style="font-size:12px;color:#9ca3af">Courier company</label>
          <input id="ship-courier" placeholder="e.g. DHL Express" />
        </div>
        <div id="awb-wrap">
          <label style="font-size:12px;color:#9ca3af">AWB / tracking ref</label>
          <input id="ship-awb" placeholder="AWB or tracking number" />
        </div>
        <div>
          <label style="font-size:12px;color:#9ca3af">Despatch date</label>
          <input type="date" id="ship-date"
            value="${new Date().toISOString().split("T")[0]}" />
        </div>
      </div>

      <!-- ── DOCUMENT BUTTONS ── -->
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;
                  padding-bottom:16px;border-bottom:1px solid #1f2c44">
        <button id="btn-packing-list" onclick="window._shipPackingList()">
          📋 Packing list
        </button>
        <button id="btn-comm-inv" onclick="window._shipCommercialInvoice()">
          📄 Commercial invoice
        </button>
      </div>

      <!-- ── CONFIRM SHIPMENT ── -->
      <button id="btn-confirm-ship"
        style="background:#059669;font-size:14px;padding:10px 20px"
        onclick="window._shipConfirm()">
        ✅ Confirm shipment &amp; update status
      </button>
    </div>

    <!-- ── PRINT PREVIEW AREA ── -->
    <div id="ship-print-preview"></div>
  `,window._shipMethodToggle=()=>{const a=document.getElementById("ship-type").value==="Courier";document.getElementById("courier-name-wrap").style.display=a?"":"none",document.getElementById("awb-wrap").style.display=a?"":"none"},window._shipPackingList=()=>d3(),window._shipCommercialInvoice=()=>f3(),window._shipConfirm=()=>p3()}function d3(){const n=hn.packing||{},t=hn.packingBySup||{},e=(hn.items||[]).filter(b=>Number(b.receivedQty)>0);e.forEach((b,A)=>{const m=document.getElementById(`hs-${A}`);m&&(b.hsCode=m.value)});const r=yi("ship-type"),i=yi("ship-courier"),s=yi("ship-awb"),o=yi("ship-date"),a=r==="Courier"?`Courier: ${i||"—"} &nbsp;|&nbsp; AWB: ${s||"—"}`:`Collected by client's forwarder (Ex-Works ${Yi})`,u=Object.entries(t).map(([b,A])=>`
    <tr>
      <td>${b}</td>
      <td>${A.cartons||"—"}</td>
      <td>${A.totalWeight||"—"} kg</td>
      <td>${A.length||"?"}×${A.width||"?"}×${A.height||"?"} cm</td>
    </tr>
  `).join(""),d=e.map(b=>`
    <tr>
      <td>${b.partNumber||"—"}</td>
      <td>${b.stockCode||"—"}</td>
      <td>${b.description||"—"}</td>
      <td>${b.hsCode||"—"}</td>
      <td>${b.countryOfOrigin||"—"}</td>
      <td>${b.receivedQty}</td>
    </tr>
  `).join(""),f=o2("Packing List",`
    <table class="doc-hdr-table">
      <tr><td><strong>PL No:</strong></td><td>PL-${hn.poNumber||hn.id}</td></tr>
      <tr><td><strong>Date:</strong></td><td>${o}</td></tr>
      <tr><td><strong>Client PO:</strong></td><td>${hn.poNumber||"—"}</td></tr>
      <tr><td><strong>Customer:</strong></td><td>${hn.customerName||"—"}</td></tr>
      <tr><td><strong>Despatch from:</strong></td><td>${Yi}</td></tr>
      <tr><td><strong>Method:</strong></td><td>${a}</td></tr>
    </table>
    <h3>Package details</h3>
    <table class="doc-table">
      <thead><tr><th>Supplier</th><th>Cartons</th><th>Weight</th><th>Dimensions</th></tr></thead>
      <tbody>${u}</tbody>
      <tfoot>
        <tr><td><strong>TOTAL</strong></td>
            <td><strong>${n.cartons||"—"}</strong></td>
            <td><strong>${n.totalWeight||"—"} kg</strong></td>
            <td></td></tr>
      </tfoot>
    </table>
    <h3>Line items</h3>
    <table class="doc-table">
      <thead><tr><th>Part no.</th><th>Stock code</th><th>Description</th>
                 <th>HS code</th><th>Country of origin</th><th>Qty</th></tr></thead>
      <tbody>${d}</tbody>
    </table>
    <p style="margin-top:24px;font-size:12px;color:#555">
      I hereby certify this packing list is a true and accurate description
      of the goods shipped.
    </p>
    ${a2()}
  `);l2(`Packing List — ${hn.poNumber}`,f),Te("Packing list opened for print","success")}async function f3(){const n=hn.packing||{},t=(hn.items||[]).filter(A=>Number(A.receivedQty)>0),e=[...hn.items||[]];t.forEach((A,m)=>{const D=document.getElementById(`hs-${m}`);if(D){const R=e.findIndex(M=>M.stockCode===A.stockCode);R>=0&&(e[R].hsCode=D.value)}}),await Ci(dn(de,"orders",hn.id),{items:e}),hn.items=e;const r=yi("ship-type"),i=yi("ship-courier"),s=yi("ship-awb"),o=yi("ship-date"),a=r==="Courier"?`Courier: ${i||"—"} | AWB: ${s||"—"}`:`Collected by client's forwarder (Ex-Works ${Yi})`,u=t.map(A=>`
    <tr>
      <td>${A.partNumber||"—"}</td>
      <td>${A.stockCode||"—"}</td>
      <td>${A.description||"—"}</td>
      <td>${A.hsCode||"—"}</td>
      <td>${A.countryOfOrigin||"—"}</td>
      <td>${A.receivedQty}</td>
      <td>${Number(A.sell||A.salePrice||0).toFixed(2)}</td>
      <td>${(Number(A.receivedQty)*Number(A.sell||A.salePrice||0)).toFixed(2)}</td>
    </tr>
  `).join(""),d=t.reduce((A,m)=>A+Number(m.receivedQty)*Number(m.sell||m.salePrice||0),0),f=o2("Commercial Invoice — For customs & export purposes",`
    <table class="doc-hdr-table">
      <tr><td><strong>Invoice No:</strong></td><td>SINV-${hn.poNumber||hn.id}</td></tr>
      <tr><td><strong>Date:</strong></td><td>${o}</td></tr>
      <tr><td><strong>Client PO:</strong></td><td>${hn.poNumber||"—"}</td></tr>
      <tr><td><strong>Exporter:</strong></td><td>Quinta Raddison Ltd, Stour House, High Lift Road, Langham, Colchester, Essex CO4 5TD</td></tr>
      <tr><td><strong>Consignee:</strong></td><td>${hn.customerName||"—"}</td></tr>
      <tr><td><strong>Despatch:</strong></td><td>${a}</td></tr>
      <tr><td><strong>Incoterms:</strong></td><td>EXW ${Yi}</td></tr>
      <tr><td><strong>Packages:</strong></td>
          <td>${n.cartons||"—"} carton(s) | ${n.totalWeight||"—"} kg | ${n.dimensions||"—"}</td></tr>
    </table>
    <h3>Goods description</h3>
    <table class="doc-table">
      <thead><tr><th>Part no.</th><th>Stock code</th><th>Description</th>
                 <th>HS code</th><th>Country of origin</th><th>Qty</th>
                 <th>Unit value GBP</th><th>Total GBP</th></tr></thead>
      <tbody>${u}</tbody>
      <tfoot>
        <tr><td colspan="7" style="text-align:right"><strong>Total EXW ${Yi}</strong></td>
            <td><strong>£${d.toFixed(2)}</strong></td></tr>
      </tfoot>
    </table>
    <p style="margin-top:20px;font-size:12px;color:#555">
      We hereby certify that the information on this invoice is true and correct
      and that the contents of this shipment are as stated above.
      Goods are of the stated origin.
    </p>
    ${a2()}
  `),b=`Goods in our ${Yi} depot — ${n.totalWeight||"?"} kg (${n.dimensions||"?"}) — ${n.cartons||"?"} carton(s) — goods ready for collection/shipment at ${Yi}.`;await Ci(dn(de,"orders",hn.id),{customerStatus:b,shippingStatus:"Awaiting instructions",status:"Packed"}),l2(`Commercial Invoice — ${hn.poNumber}`,f),Te("Commercial invoice opened — customer status updated","success")}async function p3(){const n=yi("ship-type"),t=yi("ship-courier"),e=yi("ship-awb"),r=yi("ship-date")||new Date().toISOString().split("T")[0];let i="";n==="Courier"?i=`Goods shipped from ${Yi} depot via ${t||"courier"} — AWB: ${e||"—"} — despatch date: ${r}.`:i=`Goods collected from our ${Yi} depot by client's forwarder on ${r}.`,await Ci(dn(de,"orders",hn.id),{customerStatus:i,shippingStatus:"Shipped",dispatchDate:r,dispatchMethod:n,courierName:t||null,awbRef:e||null,status:"Shipped"}),Te("Shipment confirmed — customer status updated","success"),s2(document.getElementById("pageArea"))}function o2(n,t){return`
    <style>
      body { font-family: Arial, sans-serif; color: #000; background: #fff; margin: 20px; }
      h2 { font-size: 20px; margin-bottom: 4px; }
      h3 { font-size: 14px; margin: 16px 0 8px; border-bottom: 1px solid #ccc; padding-bottom: 4px; }
      .doc-hdr-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 13px; }
      .doc-hdr-table td { padding: 4px 8px; }
      .doc-hdr-table td:first-child { width: 160px; color: #555; }
      .doc-table { width: 100%; border-collapse: collapse; font-size: 12px; }
      .doc-table th { background: #C4006A; color: #fff; padding: 7px 8px; text-align: left; }
      .doc-table td { padding: 6px 8px; border-bottom: 1px solid #eee; }
      .doc-table tfoot td { border-top: 2px solid #C4006A; padding-top: 8px; }
      .co-block { margin-top: 24px; font-size: 12px; }
      .sig-table { width: 100%; margin-top: 32px; border-collapse: collapse; }
      .sig-table td { width: 33%; padding: 0 10px; vertical-align: bottom; }
      .sig-line { border-top: 1px solid #000; margin-top: 40px; padding-top: 4px; font-size: 11px; color: #555; }
      .letterhead { border-bottom: 3px solid #C4006A; margin-bottom: 16px; padding-bottom: 12px;
                    display: flex; justify-content: space-between; align-items: flex-end; }
      .letterhead .co { font-size: 11px; color: #555; line-height: 1.6; }
    </style>
    <div class="letterhead">
      <div>
        <div style="font-size:22px;font-weight:700;color:#C4006A">Quinta</div>
        <div style="font-size:22px;font-weight:700;color:#3AAA35;margin-top:-6px">Raddison</div>
      </div>
      <div class="co">
        Quinta Raddison Ltd<br>
        Stour House, High Lift Road, Langham<br>
        Colchester, Essex CO4 5TD<br>
        Tel: +44 1206 323 255 | sales@qrltd.co.uk<br>
        Reg: 1566906 | VAT: GB368541428
      </div>
    </div>
    <h2>${n}</h2>
    ${t}
  `}function a2(){return`
    <table class="sig-table">
      <tr>
        <td><div class="sig-line">Authorised signatory</div></td>
        <td><div class="sig-line">Name &amp; position</div></td>
        <td><div class="sig-line">Date: ${new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}</div></td>
      </tr>
    </table>
  `}function l2(n,t){const e=window.open("","_blank");e.document.write(`<!DOCTYPE html><html><head><title>${n}</title></head>
    <body>${t}
    <script>window.onload=()=>window.print()<\/script>
    </body></html>`),e.document.close()}async function m3(){return(await nr(Pn(de,"orders"))).docs.map(t=>({id:t.id,...t.data()}))}function yi(n){const t=document.getElementById(n);return t?t.value:""}const pi={name:"Quinta Raddison Ltd",reg:"1566906",vat:"GB368541428",email:"sales@qrltd.co.uk",tel:"+44 1206 323 255",bank:"Barclays Bank PLC",sort:"20-00-00",account:"12345678",iban:"GB00 BARC 2000 0012 3456 78",swift:"BARCGB22"};async function Lc(n){const t=await y3(),e=t.filter(i=>i.dispatchDate&&!i.invoiced),r=t.filter(i=>i.invoiced).sort((i,s)=>(s.invoiceDate||"").localeCompare(i.invoiceDate||""));n.innerHTML=`
    <h2 style="margin-bottom:16px">Invoicing</h2>

    <div class="grid-3" style="margin-bottom:16px">
      <div class="card" style="text-align:center">
        <div style="font-size:28px;font-weight:700;color:#86efac">${e.length}</div>
        <div style="font-size:13px;color:#9ca3af">Ready to invoice</div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:28px;font-weight:700">${r.length}</div>
        <div style="font-size:13px;color:#9ca3af">Invoiced</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button id="reloadInv" style="flex:1">Reload</button>
        <input id="searchInv" placeholder="Search…" style="flex:2" />
      </div>
    </div>

    <!-- ── READY TO INVOICE ── -->
    <div class="card" style="margin-bottom:20px">
      <h3 style="margin-bottom:12px">Ready to invoice</h3>

      ${e.length?`<table class="table">
             <thead>
               <tr>
                 <th>PO</th>
                 <th>Customer</th>
                 <th>Dispatch</th>
                 <th>Currency</th>
                 <th>Invoice value</th>
                 <th>Items</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               ${e.map(i=>`
                 <tr>
                   <td><strong>${i.poNumber||"—"}</strong></td>
                   <td>${i.customerName||"—"}</td>
                   <td>${i.dispatchDate||"—"}</td>
                   <td>${i.currency||"GBP"}</td>
                   <td><strong>${u2(i)}</strong></td>
                   <td style="font-size:12px;color:#9ca3af">
                     ${(i.items||[]).filter(s=>Number(s.receivedQty)>0).length} line(s)
                   </td>
                   <td>
                     <button onclick="window._makeInv('${i.id}')">
                       Create invoice
                     </button>
                   </td>
                 </tr>
               `).join("")}
             </tbody>
           </table>`:`<p style="color:#9ca3af;font-size:13px">
             No orders awaiting invoice. Orders appear here once
             despatch has been confirmed in the Shipping page.
           </p>`}
    </div>

    <!-- ── INVOICED (ARCHIVE) ── -->
    <div class="card">
      <h3 style="margin-bottom:12px">Recent invoices</h3>
      ${r.length?`<table class="table">
             <thead>
               <tr>
                 <th>Invoice no.</th>
                 <th>PO</th>
                 <th>Customer</th>
                 <th>Invoice date</th>
                 <th>Due date</th>
                 <th>Value</th>
                 <th>Currency</th>
                 <th>Paid</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               ${r.slice(0,30).map(i=>{var s;return`
                 <tr>
                   <td><strong>${i.invoiceNo||"—"}</strong></td>
                   <td>${i.poNumber||"—"}</td>
                   <td>${i.customerName||"—"}</td>
                   <td>${i.invoiceDate||"—"}</td>
                   <td>${i.dueDate||"—"}</td>
                   <td>${((s=i.invoiceValue)==null?void 0:s.toFixed(2))||"—"}</td>
                   <td>${i.currency||"GBP"}</td>
                   <td>
                     ${i.paid?'<span style="color:#86efac;font-weight:700">✓ Paid</span>':`<button onclick="window._markPaid('${i.id}')"
                            style="background:#059669;font-size:11px;padding:3px 8px">
                            Mark paid
                          </button>`}
                   </td>
                   <td>
                     <button onclick="window._reprint('${i.id}')"
                       style="font-size:11px;padding:3px 8px">
                       Reprint
                     </button>
                   </td>
                 </tr>
               `}).join("")}
             </tbody>
           </table>`:'<p style="color:#9ca3af;font-size:13px">No invoices yet.</p>'}
    </div>

    <!-- invoice print preview renders here -->
    <div id="inv-preview"></div>
  `,document.getElementById("reloadInv").onclick=()=>Lc(n),document.getElementById("searchInv").oninput=i=>{const s=i.target.value.toUpperCase();document.querySelectorAll(".table tbody tr").forEach(o=>{o.style.display=o.innerText.toUpperCase().includes(s)?"":"none"})},window._makeInv=i=>g3(i,t,n),window._markPaid=async i=>{await Ci(dn(de,"orders",i),{paid:!0}),Te("Marked as paid","success"),Lc(n)},window._reprint=i=>{const s=t.find(o=>o.id===i);s&&c2(s,s.invoiceNo,s.invoiceDate,s.dueDate)}}async function g3(n,t,e){const r=t.find(u=>u.id===n);if(!r){Te("Order not found","error");return}const i=v3(),s=b3(),o=w3(),a=Number(u2(r));await Hc(Pn(de,"invoices"),{invoiceNo:i,orderId:n,poNumber:r.poNumber||"",customerName:r.customerName||"",invoiceDate:s,dueDate:o,currency:r.currency||"GBP",value:a,paid:!1,items:bd(r)}),await Ci(dn(de,"orders",n),{invoiced:!0,invoiceNo:i,invoiceDate:s,dueDate:o,invoiceValue:a,paid:!1,customerStatus:`Invoice ${i} issued ${s}. Payment due ${o}.`}),Te("Invoice created","success"),c2(r,i,s,o),Lc(e)}function c2(n,t,e,r){const i=bd(n),s=i.reduce((f,b)=>f+b.lineTotal,0),o=n.dispatchDepot||"Colchester, UK",a=i.map(f=>`
    <tr>
      <td>${f.partNumber||"—"}</td>
      <td>${f.stockCode||"—"}</td>
      <td>${f.description}</td>
      <td style="text-align:right">${f.qty}</td>
      <td style="text-align:right">${f.unitPrice.toFixed(2)}</td>
      <td style="text-align:right"><strong>${f.lineTotal.toFixed(2)}</strong></td>
    </tr>
  `).join(""),u=`
    <style>
      body { font-family:Arial,sans-serif; color:#000; margin:28px; font-size:13px; }
      .lh { display:flex; justify-content:space-between; align-items:flex-end;
            border-bottom:3px solid #C4006A; padding-bottom:14px; margin-bottom:18px; }
      .brand .q { font-size:24px; font-weight:700; color:#C4006A; }
      .brand .r { font-size:24px; font-weight:700; color:#3AAA35; }
      .co { font-size:11px; color:#555; line-height:1.7; text-align:right; }
      .inv-title { font-size:22px; font-weight:700; color:#C4006A; margin-bottom:4px; }
      .inv-pill { display:inline-block; background:#C4006A; color:#fff;
                  padding:3px 14px; border-radius:3px; font-size:13px; font-weight:700; }
      .addr-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:18px; }
      .addr-box { border-left:3px solid #C4006A; padding:8px 12px;
                  background:#fff8fb; font-size:12px; line-height:1.7; }
      .addr-box.grn { border-left-color:#3AAA35; background:#f4fdf4; }
      .addr-box .lbl { font-size:10px; font-weight:700; color:#C4006A;
                       text-transform:uppercase; letter-spacing:.06em; margin-bottom:3px; }
      .addr-box.grn .lbl { color:#3AAA35; }
      .ref-strip { display:grid; grid-template-columns:repeat(3,1fr); gap:8px;
                   background:#fff8fb; border:1px solid #f8bbd0; padding:8px 12px;
                   border-radius:3px; margin-bottom:16px; font-size:12px; }
      .ref-strip .k { font-size:9px; font-weight:700; color:#C4006A;
                      text-transform:uppercase; letter-spacing:.04em; display:block; margin-bottom:2px; }
      table { width:100%; border-collapse:collapse; margin-bottom:14px; font-size:12px; }
      thead tr { background:#C4006A; color:#fff; }
      th { padding:7px 8px; text-align:left; font-size:10px; font-weight:700; letter-spacing:.03em; }
      td { padding:6px 8px; border-bottom:1px solid #eee; }
      tfoot td { border-top:2px solid #C4006A; font-weight:700; font-size:14px; color:#C4006A; }
      .bank { display:grid; grid-template-columns:1fr 1fr; gap:16px;
              background:#f9f9f9; border-radius:3px; padding:12px 14px; margin-bottom:14px; }
      .bank .bk { font-size:9px; font-weight:700; color:#C4006A; text-transform:uppercase;
                  letter-spacing:.04em; display:block; margin-bottom:3px; }
      .bank span { font-size:11px; line-height:1.8; }
      .sig-table { width:100%; margin-top:28px; }
      .sig-table td { padding:0 10px; vertical-align:bottom; }
      .sig-line { border-top:1px solid #000; margin-top:36px; padding-top:3px;
                  font-size:10px; color:#888; }
      .ft { border-top:2px solid #C4006A; padding-top:9px; margin-top:16px;
            display:flex; justify-content:space-between; font-size:10px; color:#888; }
      .exw { display:inline-block; background:#fff3e0; color:#e65100;
             border:1px solid #ffcc80; padding:2px 7px; border-radius:3px;
             font-size:10px; font-weight:700; }
    </style>

    <div class="lh">
      <div class="brand">
        <div class="q">Quinta</div>
        <div class="r">Raddison</div>
      </div>
      <div>
        <div class="inv-title">Invoice</div>
        <div class="inv-pill">${t}</div>
        <div style="font-size:11px;color:#666;margin-top:6px">
          Date: ${e}<br>
          Due: ${r} (Net 30)
        </div>
      </div>
      <div class="co">
        ${pi.name}<br>
        Stour House, High Lift Road<br>
        Langham, Colchester, Essex CO4 5TD<br>
        ${pi.tel} | ${pi.email}<br>
        Reg: ${pi.reg} | VAT: ${pi.vat}
      </div>
    </div>

    <div class="addr-grid">
      <div class="addr-box">
        <div class="lbl">Bill to</div>
        <strong>${n.customerName||"—"}</strong><br>
        ${(n.invoiceAddress||"").replace(/\n/g,"<br>")}
      </div>
      <div class="addr-box grn">
        <div class="lbl" style="color:#3AAA35">Delivered to</div>
        <strong>${n.customerName||"—"}</strong><br>
        ${(n.shippingAddress||"").replace(/\n/g,"<br>")}
      </div>
    </div>

    <div class="ref-strip">
      <div>
        <span class="k">Client PO</span>
        ${n.poNumber||"—"}
        <span style="display:inline-block;background:#e8f5e9;color:#2e7d32;
          border:1px solid #a5d6a7;padding:1px 7px;border-radius:3px;
          font-size:10px;font-weight:700;margin-left:4px">Fixed price</span>
      </div>
      <div><span class="k">Ship date</span>${n.dispatchDate||"—"}</div>
      <div>
        <span class="k">Incoterms</span>
        <span class="exw">EXW ${o}</span>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Part no.</th>
          <th>Stock code</th>
          <th>Description</th>
          <th style="text-align:right">Qty</th>
          <th style="text-align:right">Unit price GBP</th>
          <th style="text-align:right">Total GBP</th>
        </tr>
      </thead>
      <tbody>${a}</tbody>
      <tfoot>
        <tr>
          <td colspan="5" style="text-align:right">
            Total EX Works ${o}
          </td>
          <td style="text-align:right">£${s.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>

    <div class="bank">
      <div>
        <span class="bk">Bank details</span>
        <span>
          ${pi.bank}<br>
          Sort: ${pi.sort} | Acc: ${pi.account}<br>
          IBAN: ${pi.iban}<br>
          SWIFT: ${pi.swift}
        </span>
      </div>
      <div>
        <span class="bk">Payment reference &amp; notes</span>
        <span>
          Please quote: ${t}<br>
          ${i.some(f=>f.isPartial)?`<em>Note: One or more lines are part-shipped.
                 Balance will be invoiced on despatch.</em>`:""}
        </span>
      </div>
    </div>

    <table class="sig-table">
      <tr>
        <td style="width:33%"><div class="sig-line">Authorised signatory</div></td>
        <td style="width:33%"><div class="sig-line">Name &amp; position</div></td>
        <td style="width:33%"><div class="sig-line">Date: ${e}</div></td>
      </tr>
    </table>

    <div class="ft">
      <div>${pi.name} — Reg. England &amp; Wales No. ${pi.reg} | This is a VAT invoice. E&amp;OE.</div>
      <div>${t} | Page 1 of 1</div>
    </div>
  `,d=window.open("","_blank");d.document.write(`<!DOCTYPE html><html><head><title>${t}</title></head>
    <body>${u}
    <script>window.onload=()=>window.print()<\/script>
    </body></html>`),d.document.close()}function bd(n){return(n.items||[]).filter(t=>Number(t.receivedQty)>0).map(t=>{const e=Number(t.receivedQty),r=Number(t.sell||t.salePrice||0);return{partNumber:t.partNumber||"—",stockCode:t.stockCode||"—",description:t.description||"—",qty:e,unitPrice:r,lineTotal:e*r,isPartial:e<Number(t.qty||e)}})}function u2(n){return bd(n).reduce((t,e)=>t+e.lineTotal,0).toFixed(2)}async function y3(){return(await nr(Pn(de,"orders"))).docs.map(t=>({id:t.id,...t.data()}))}function v3(){const n=new Date;return`INV-${n.getFullYear()}${p1(n.getMonth()+1)}${p1(n.getDate())}-${Date.now().toString().slice(-4)}`}function p1(n){return String(n).padStart(2,"0")}function b3(){return new Date().toISOString().split("T")[0]}function w3(){const n=new Date;return n.setDate(n.getDate()+30),n.toISOString().split("T")[0]}async function _3(n){n.innerHTML=`
    <h2 style="margin-bottom:16px">Analytics</h2>
    <div style="color:#9ca3af;font-size:13px;margin-bottom:16px">Loading…</div>
  `;const[t,e]=await Promise.all([m1("orders"),m1("invoices")]),r=new Date,i=new Date(r.getFullYear(),r.getMonth(),1),s=new Date(r.getFullYear(),r.getMonth()-2,1),o=e.filter(G=>Ih(G.invoiceDate)>=i),a=e.filter(G=>Ih(G.invoiceDate)>=s),u=g1(o,"value"),d=g1(a,"value"),f=t.filter(G=>!G.invoiced),b=t.filter(G=>G.warehouseStatus==="Query"),A=o.reduce((G,W)=>{const ot=W.items||[];return G+ot.reduce((pt,j)=>pt+Number(j.fxVarianceGbp||0),0)},0),m=o.reduce((G,W)=>{const ot=W.items||[],pt=ot.reduce((N,E)=>N+E.qty*E.unitPrice,0),j=ot.reduce((N,E)=>N+Number(E.actualCostGbp||0),0);return G+(pt-j)},0),D=u>0?(m/u*100).toFixed(1):"—",R={};t.forEach(G=>{(G.items||[]).forEach(W=>{const ot=W.supplier||W.supplierName||"Unknown";R[ot]||(R[ot]={orders:0,lines:0,short:0,query:0}),R[ot].orders++,R[ot].lines++,Number(W.receivedQty||0)<Number(W.qty||0)&&R[ot].short++,W.lineStatus==="Query"&&R[ot].query++})});const M={};f.forEach(G=>{const W=G.customerName||"Unknown";M[W]||(M[W]={count:0,value:0}),M[W].count++,M[W].value+=E3(G)});const O=t.filter(G=>G.dispatchDate&&G.poDate),Y=O.length?O.reduce((G,W)=>G+x3(W.poDate,W.dispatchDate),0)/O.length:null;n.innerHTML=`
    <h2 style="margin-bottom:6px">Analytics</h2>
    <p style="color:#9ca3af;font-size:12px;margin-bottom:16px">
      This month / all open orders
    </p>

    <!-- KPI cards -->
    <div class="grid-4" style="margin-bottom:20px">
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">Revenue (this month)</div>
        <div style="font-size:26px;font-weight:700;color:#86efac">
          £${u.toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:2})}
        </div>
        <div style="font-size:11px;color:#9ca3af;margin-top:4px">
          ${o.length} invoice(s)
        </div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">Margin (this month)</div>
        <div style="font-size:26px;font-weight:700;color:${m>=0?"#86efac":"#f87171"}">
          £${Math.abs(m).toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:2})}
        </div>
        <div style="font-size:11px;color:#9ca3af;margin-top:4px">
          ${D!=="—"?D+"%":"—"}
        </div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">FX variance (month)</div>
        <div style="font-size:26px;font-weight:700;color:${A>=0?"#86efac":"#f87171"}">
          ${A>=0?"+":"-"}£${Math.abs(A).toFixed(2)}
        </div>
        <div style="font-size:11px;color:#9ca3af;margin-top:4px">
          vs PO-date rates
        </div>
      </div>
      <div class="card" style="text-align:center">
        <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;
                    letter-spacing:.05em;margin-bottom:6px">Open orders</div>
        <div style="font-size:26px;font-weight:700">${f.length}</div>
        <div style="font-size:11px;margin-top:4px">
          ${b.length>0?`<span style="color:#f87171">${b.length} on query</span>`:'<span style="color:#86efac">None on query</span>'}
        </div>
      </div>
    </div>

    <div class="grid-3" style="margin-bottom:20px">

      <!-- Quarterly revenue -->
      <div class="card">
        <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                   text-transform:uppercase;letter-spacing:.05em">
          Quarter revenue
        </h4>
        <div style="font-size:22px;font-weight:700">
          £${d.toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:2})}
        </div>
        <div style="font-size:12px;color:#9ca3af;margin-top:4px">
          ${a.length} invoices over 3 months
        </div>
        ${Y!==null?`
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid #1f2c44;
                      font-size:12px;color:#9ca3af">
            Avg. order cycle:
            <strong style="color:#e8eaf0">${Y.toFixed(1)} days</strong>
            (PO to despatch)
          </div>`:""}
      </div>

      <!-- Outstanding by customer -->
      <div class="card">
        <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                   text-transform:uppercase;letter-spacing:.05em">
          Outstanding by customer
        </h4>
        ${Object.keys(M).length?Object.entries(M).sort((G,W)=>W[1].value-G[1].value).map(([G,W])=>`
                <div style="display:flex;justify-content:space-between;
                            padding:6px 0;border-bottom:1px solid #1f2c44;
                            font-size:13px">
                  <span>${G}</span>
                  <span>
                    <strong>
                      £${W.value.toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:2})}
                    </strong>
                    <span style="color:#9ca3af;font-size:11px;margin-left:6px">
                      ${W.count} order(s)
                    </span>
                  </span>
                </div>
              `).join(""):'<div style="color:#9ca3af;font-size:13px">No open orders</div>'}
      </div>

      <!-- Supplier delivery performance -->
      <div class="card">
        <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                   text-transform:uppercase;letter-spacing:.05em">
          Supplier performance
        </h4>
        ${Object.keys(R).length?Object.entries(R).sort((G,W)=>W[1].lines-G[1].lines).map(([G,W])=>{const ot=W.lines>0?(W.short/W.lines*100).toFixed(0):0,pt=ot<5;return`
                  <div style="margin-bottom:10px">
                    <div style="display:flex;justify-content:space-between;
                                font-size:12px;margin-bottom:3px">
                      <span>${G}</span>
                      <span style="color:${pt?"#86efac":"#f87171"}">
                        ${ot}% short deliveries
                        ${W.query>0?`<span style="color:#f0abfc"> | ${W.query} query</span>`:""}
                      </span>
                    </div>
                    <div style="background:#111827;border-radius:4px;height:6px;overflow:hidden">
                      <div style="
                        width:${Math.min(100,100-ot)}%;
                        height:100%;
                        background:${pt?"#059669":"#dc2626"};
                        border-radius:4px
                      "></div>
                    </div>
                    <div style="font-size:11px;color:#6b7280;margin-top:2px">
                      ${W.lines} line(s) across ${W.orders} order(s)
                    </div>
                  </div>
                `}).join(""):'<div style="color:#9ca3af;font-size:13px">No data yet</div>'}
      </div>
    </div>

    <!-- Monthly revenue bar chart (simple CSS bars) -->
    <div class="card" style="margin-bottom:16px">
      <h4 style="margin-bottom:14px;font-size:13px;color:#9ca3af;
                 text-transform:uppercase;letter-spacing:.05em">
        Monthly revenue — last 6 months
      </h4>
      ${A3(e,6)}
    </div>

    <!-- Recent invoices -->
    <div class="card">
      <h4 style="margin-bottom:12px;font-size:13px;color:#9ca3af;
                 text-transform:uppercase;letter-spacing:.05em">
        Recent invoices
      </h4>
      ${e.length?`<table class="table">
             <thead>
               <tr>
                 <th>Invoice no.</th>
                 <th>PO</th>
                 <th>Customer</th>
                 <th>Date</th>
                 <th>Value</th>
                 <th>Paid</th>
               </tr>
             </thead>
             <tbody>
               ${e.sort((G,W)=>(W.invoiceDate||"").localeCompare(G.invoiceDate||"")).slice(0,15).map(G=>`
                   <tr>
                     <td><strong>${G.invoiceNo||"—"}</strong></td>
                     <td>${G.poNumber||"—"}</td>
                     <td>${G.customerName||"—"}</td>
                     <td>${G.invoiceDate||"—"}</td>
                     <td>£${Number(G.value||0).toFixed(2)}</td>
                     <td>${G.paid?'<span style="color:#86efac;font-weight:700">✓ Paid</span>':'<span style="color:#9ca3af">Outstanding</span>'}</td>
                   </tr>
                 `).join("")}
             </tbody>
           </table>`:'<div style="color:#9ca3af;font-size:13px">No invoices yet.</div>'}
    </div>
  `}function A3(n,t){const e=[],r=new Date;for(let s=t-1;s>=0;s--){const o=new Date(r.getFullYear(),r.getMonth()-s,1),a=o.toLocaleDateString("en-GB",{month:"short",year:"2-digit"}),u=n.filter(d=>{const f=Ih(d.invoiceDate);return f&&f.getMonth()===o.getMonth()&&f.getFullYear()===o.getFullYear()}).reduce((d,f)=>d+Number(f.value||0),0);e.push({label:a,total:u})}const i=Math.max(...e.map(s=>s.total),1);return`
    <div style="display:flex;align-items:flex-end;gap:8px;height:120px">
      ${e.map(s=>{const o=Math.round(s.total/i*100);return`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px">
            <div style="font-size:10px;color:#9ca3af">
              ${s.total>0?"£"+(s.total/1e3).toFixed(0)+"k":""}
            </div>
            <div style="
              width:100%;height:${o}px;
              background:${o>0?"#C4006A":"#1f2c44"};
              border-radius:3px 3px 0 0;
              min-height:4px;
              transition:height .3s
            "></div>
            <div style="font-size:11px;color:#9ca3af">${s.label}</div>
          </div>
        `}).join("")}
    </div>
  `}async function m1(n){return(await nr(Pn(de,n))).docs.map(e=>({id:e.id,...e.data()}))}function g1(n,t){return n.reduce((e,r)=>e+Number(r[t]||0),0)}function E3(n){return(n.items||[]).filter(t=>Number(t.receivedQty)>0).reduce((t,e)=>t+Number(e.receivedQty)*Number(e.sell||e.salePrice||0),0)}function Ih(n){if(!n)return null;const t=new Date(n);return isNaN(t)?null:t}function x3(n,t){const e=new Date(n),r=new Date(t);return Math.abs((r-e)/864e5)}function S3(n){n.innerHTML=`
    <h2>
      Admin Panel
    </h2>

    <div class="grid-3">

      <button id="productsBtn">
        Products
      </button>

      <button id="suppliersBtn">
        Suppliers
      </button>

      <button id="usersBtn">
        Users
      </button>

      <button id="customersBtn">
        Customers
      </button>

      <button id="fxBtn">
        FX Rates
      </button>

      <button id="countryBtn">
        Country Master
      </button>

      <button id="archiveBtn">
        Archive
      </button>

    </div>

    <br>

    <div class="card">
      Select an admin area.
    </div>
  `,_o("productsBtn","./products.js",["renderProductsAdmin","renderProducts"],n),_o("suppliersBtn","./suppliers.js",["renderSuppliersAdmin","renderSuppliers"],n),_o("usersBtn","./users.js",["renderUsersAdmin","renderUsers"],n),_o("customersBtn","./customers.js",["renderCustomersAdmin","renderCustomers"],n),_o("fxBtn","./fx.js",["renderFxAdmin","renderFX","renderFx"],n),_o("countryBtn","./countries.js",["renderCountryAdmin"],n),_o("archiveBtn","./archive.js",["renderArchive"],n)}function _o(n,t,e,r){document.getElementById(n).onclick=async()=>{try{const i=await import(t);for(const s of e)if(typeof i[s]=="function"){i[s](r);return}r.innerHTML=`
          <div class="card">
            Module loaded but
            no render function
            found.
          </div>
        `}catch(i){console.error(i),r.innerHTML=`
          <div class="card">
            Failed loading
            module:
            ${t}
          </div>
        `}}}async function I3(n){n.innerHTML=`
    <h2>Archive Automation</h2>

    <div class="grid-3">

      <button id="runArchive">
        Run Archive Check
      </button>

      <button id="viewArchive">
        View Archived
      </button>

      <div id="archiveCount">
        Ready...
      </div>

    </div>

    <br>

    <div id="archiveArea"></div>
  `,document.getElementById("runArchive").onclick=N3,document.getElementById("viewArchive").onclick=P3}async function N3(){const n=await nr(Pn(de,"orders"));let t=0;for(const e of n.docs){const r={id:e.id,...e.data()};T3(r)&&(await Hc(Pn(de,"orders_archive"),{...r,archivedDate:k3()}),await Jm(dn(de,"orders",e.id)),t++)}document.getElementById("archiveCount").innerHTML=`Archived: ${t}`,Te(`${t} archived`,"success")}function T3(n){return!!(n.invoiced===!0||n.dispatchDate&&L3(n.dispatchDate)>=7)}function L3(n){const t=new Date(n),r=new Date-t;return Math.floor(r/864e5)}async function P3(){const t=(await nr(Pn(de,"orders_archive"))).docs.map(e=>({id:e.id,...e.data()}));document.getElementById("archiveArea").innerHTML=`
    <table class="table">

      <thead>
        <tr>
          <th>PO</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Archived</th>
        </tr>
      </thead>

      <tbody>

        ${t.map(e=>`
          <tr>
            <td>
              ${e.poNumber||""}
            </td>

            <td>
              ${e.customerName||""}
            </td>

            <td>
              ${e.customerStatus||""}
            </td>

            <td>
              ${e.archivedDate||""}
            </td>
          </tr>
        `).join("")}

      </tbody>

    </table>
  `}function k3(){return new Date().toISOString().split("T")[0]}async function C3(n,t){const e=await R3();window._products=e,n.innerHTML=`
    <h3>Products Pro</h3>

    <div class="grid-4">

      <input
        id="searchBox"
        placeholder="Search code / part / desc"
      />

      <button id="btnAdd">
        Add Product
      </button>

      <button id="btnDownload">
        Download CSV
      </button>

      <label class="buttonLike">
        Upload CSV
        <input
          id="csvFile"
          type="file"
          accept=".csv"
          hidden
        />
      </label>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Code</th>
          <th>Part No</th>
          <th>Description</th>
          <th>Cost</th>
          <th>Sale</th>
          <th>Currency</th>
          <th>Supplier</th>
          <th>Margin</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="productRows"></tbody>

    </table>
  `,y1(e),document.getElementById("searchBox").oninput=()=>{const r=document.getElementById("searchBox").value.toLowerCase(),i=e.filter(s=>`${s.stockCode} ${s.partNumber} ${s.description} ${s.supplierName}`.toLowerCase().includes(r));y1(i)},document.getElementById("btnAdd").onclick=()=>O3(t),document.getElementById("btnDownload").onclick=M3,document.getElementById("csvFile").onchange=B3}async function R3(){return(await nr(Pn(de,"items"))).docs.map(t=>({id:t.id,...t.data()}))}function y1(n){document.getElementById("productRows").innerHTML=n.map(t=>{const e=Number(t.costPrice||0),r=Number(t.salePrice||0),i=r?((r-e)/r*100).toFixed(1):"0.0";return`
        <tr>

          <td>
            <input
              value="${t.stockCode||""}"
              data-id="${t.id}"
              data-field="stockCode"
            />
          </td>

          <td>
            <input
              value="${t.partNumber||""}"
              data-id="${t.id}"
              data-field="partNumber"
            />
          </td>

          <td>
            <input
              value="${t.description||""}"
              data-id="${t.id}"
              data-field="description"
            />
          </td>

          <td>
            <input
              value="${e}"
              data-id="${t.id}"
              data-field="costPrice"
            />
          </td>

          <td>
            <input
              value="${r}"
              data-id="${t.id}"
              data-field="salePrice"
            />
          </td>

          <td>
            <select
              data-id="${t.id}"
              data-field="currency"
            >
              ${h2(t.currency||"USD")}
            </select>
          </td>

          <td>
            <input
              value="${t.supplierName||""}"
              data-id="${t.id}"
              data-field="supplierName"
            />
          </td>

          <td>
            ${i}%
          </td>

          <td>
            <button
              class="saveRow"
              data-id="${t.id}"
            >
              Save
            </button>
          </td>

        </tr>
      `}).join(""),document.querySelectorAll(".saveRow").forEach(t=>{t.onclick=()=>D3(t.dataset.id)})}async function D3(n){const t=document.querySelectorAll(`[data-id="${n}"]`),e={};t.forEach(r=>{e[r.dataset.field]=r.value}),await Ci(dn(de,"items",n),e),Te("Product updated","success")}function O3(n){n.innerHTML=`
    <div class="modal">
      <div class="modal-card">

        <h3>Add Product</h3>

        <input id="nCode" placeholder="Code" />
        <input id="nPart" placeholder="Part No" />
        <input id="nDesc" placeholder="Description" />
        <input id="nCost" placeholder="Cost" />
        <input id="nSale" placeholder="Sale" />
        <input id="nSupp" placeholder="Supplier" />

        <select id="nCur">
          ${h2("USD")}
        </select>

        <br><br>

        <button id="saveNew">
          Save
        </button>

        <button id="closeNew">
          Cancel
        </button>

      </div>
    </div>
  `,document.getElementById("closeNew").onclick=()=>n.innerHTML="",document.getElementById("saveNew").onclick=F3}async function F3(){const n=document.getElementById("nCode").value;n&&(await xl(dn(de,"items",n),{stockCode:n,partNumber:document.getElementById("nPart").value,description:document.getElementById("nDesc").value,costPrice:Number(document.getElementById("nCost").value),salePrice:Number(document.getElementById("nSale").value),supplierName:document.getElementById("nSupp").value,currency:document.getElementById("nCur").value}),Te("Product added","success"),location.reload())}function h2(n){return["GBP","EUR","USD","JPY","CNY"].map(e=>`
    <option
      value="${e}"
      ${e===n?"selected":""}
    >
      ${e}
    </option>
  `).join("")}function M3(){const n=window._products||[];let t=`stockCode,partNumber,description,costPrice,salePrice,currency,supplierName
`;n.forEach(i=>{t+=[i.stockCode,i.partNumber,i.description,i.costPrice,i.salePrice,i.currency,i.supplierName].join(",")+`
`});const e=new Blob([t],{type:"text/csv"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="products.csv",r.click(),Te("CSV downloaded","info")}async function B3(n){const t=n.target.files[0];if(!t)return;const r=(await t.text()).trim().split(`
`),i=r[0].split(",");for(let s=1;s<r.length;s++){const o=r[s].split(","),a={};i.forEach((d,f)=>{var b;a[d.trim()]=((b=o[f])==null?void 0:b.trim())||""});const u=a.stockCode;u&&await xl(dn(de,"items",u),a,{merge:!0})}Te("CSV uploaded","success"),location.reload()}async function V3(n,t){const e=await j3();window._customers=e,n.innerHTML=`
    <h3>Customers Pro</h3>

    <div class="grid-4">

      <input
        id="searchBox"
        placeholder="Search customer..."
      />

      <button id="btnAdd">
        Add Client
      </button>

      <button id="btnDownload">
        Download CSV
      </button>

      <span></span>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Buyer</th>
          <th>Email</th>
          <th>Currency</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="custRows"></tbody>

    </table>
  `,v1(e),document.getElementById("searchBox").oninput=()=>{const r=document.getElementById("searchBox").value.toLowerCase(),i=e.filter(s=>`${s.name} ${s.email}`.toLowerCase().includes(r));v1(i)},document.getElementById("btnAdd").onclick=()=>U3(t),document.getElementById("btnDownload").onclick=H3}async function j3(){return(await nr(Pn(de,"customers"))).docs.map(t=>({id:t.id,...t.data()}))}function v1(n){document.getElementById("custRows").innerHTML=n.map(t=>`
      <tr>

        <td>${t.name||""}</td>

        <td>
          ${(t.buyers||[]).map(e=>e.name).join(", ")}
        </td>

        <td>
          ${(t.buyers||[]).map(e=>e.email).join(", ")}
        </td>

        <td>${t.currency||""}</td>

        <td>
          <button
            class="editBtn"
            data-id="${t.id}"
          >
            Edit
          </button>
        </td>

      </tr>
    `).join(""),document.querySelectorAll(".editBtn").forEach(t=>{t.onclick=()=>$3(t.dataset.id)})}function U3(n){n.innerHTML=d2(),f2()}function $3(n){const t=window._customers.find(r=>r.id===n),e=document.getElementById("modalArea");e.innerHTML=d2(t),f2(n)}function d2(n={}){const t=n.buyers||[{name:"",email:""}];return`
    <div class="modal">

      <div class="modal-card">

        <h3>
          ${n.id?"Edit":"Add"}
          Customer
        </h3>

        <input
          id="cName"
          placeholder="Customer Name"
          value="${n.name||""}"
        />

        <textarea
          id="cInv"
          rows="4"
          placeholder="Invoice Address"
        >${n.invoiceAddress||""}</textarea>

        <textarea
          id="cShip"
          rows="4"
          placeholder="Shipping Address"
        >${n.shippingAddress||""}</textarea>

        <div id="buyerArea">

          ${t.map((e,r)=>`
            <div class="grid-2 buyerRow">

              <input
                class="buyerName"
                placeholder="Buyer Name"
                value="${e.name||""}"
              />

              <input
                class="buyerEmail"
                placeholder="Buyer Email"
                value="${e.email||""}"
              />

            </div>
          `).join("")}

        </div>

        <button id="addBuyer">
          + Add Contact
        </button>

        <br><br>

        <select id="cCur">
          ${z3(n.currency||"GBP")}
        </select>

        <br><br>

        <button id="saveCust">
          Save
        </button>

        <button id="closeCust">
          Cancel
        </button>

      </div>

    </div>
  `}function f2(n=null){document.getElementById("closeCust").onclick=()=>document.getElementById("modalArea").innerHTML="",document.getElementById("addBuyer").onclick=()=>{document.getElementById("buyerArea").insertAdjacentHTML("beforeend",`
          <div class="grid-2 buyerRow">

            <input
              class="buyerName"
              placeholder="Buyer Name"
            />

            <input
              class="buyerEmail"
              placeholder="Buyer Email"
            />

          </div>
        `)},document.getElementById("saveCust").onclick=()=>q3(n)}async function q3(n=null){const t=document.getElementById("cName").value;if(!t){Te("Enter customer name","error");return}const e=document.querySelectorAll(".buyerName"),r=document.querySelectorAll(".buyerEmail"),i=[];e.forEach((a,u)=>{var d;a.value.trim()&&i.push({name:a.value,email:((d=r[u])==null?void 0:d.value)||""})});const s={name:t,invoiceAddress:document.getElementById("cInv").value,shippingAddress:document.getElementById("cShip").value,buyers:i,currency:document.getElementById("cCur").value};await xl(dn(de,"customers",n||t),s,{merge:!0}),Te("Customer saved","success"),location.reload()}function z3(n){return["GBP","EUR","USD","JPY","CNY"].map(e=>`
    <option
      value="${e}"
      ${e===n?"selected":""}
    >
      ${e}
    </option>
  `).join("")}function H3(){const n=window._customers||[];let t=`name,invoiceAddress,shippingAddress,buyers,currency
`;n.forEach(i=>{t+=[i.name,i.invoiceAddress,i.shippingAddress,(i.buyers||[]).map(s=>`${s.name}:${s.email}`).join("|"),i.currency].join(",")+`
`});const e=new Blob([t],{type:"text/csv"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="customers.csv",r.click(),Te("CSV downloaded","info")}async function W3(n,t){const e=await G3();window._suppliers=e,n.innerHTML=`
    <h3>Suppliers Pro</h3>

    <div class="grid-4">

      <input
        id="searchBox"
        placeholder="Search supplier..."
      />

      <button id="btnAdd">
        Add Supplier
      </button>

      <button id="btnDownload">
        Download CSV
      </button>

      <span></span>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Terms</th>
          <th>Currency</th>
          <th></th>
        </tr>
      </thead>

      <tbody id="supRows"></tbody>

    </table>
  `,b1(e),document.getElementById("searchBox").oninput=()=>{const r=document.getElementById("searchBox").value.toLowerCase(),i=e.filter(s=>`${s.name} ${s.contactName} ${s.contactEmail}`.toLowerCase().includes(r));b1(i)},document.getElementById("btnAdd").onclick=()=>K3(t),document.getElementById("btnDownload").onclick=Z3}async function G3(){return(await nr(Pn(de,"suppliers"))).docs.map(t=>({id:t.id,...t.data()}))}function b1(n){document.getElementById("supRows").innerHTML=n.map(t=>`
      <tr>

        <td>${t.name||""}</td>

        <td>${t.contactName||""}</td>

        <td>${t.contactEmail||""}</td>

        <td>${t.shippingTerms||""}</td>

        <td>${t.currency||""}</td>

        <td>
          <button
            class="editBtn"
            data-id="${t.id}"
          >
            Edit
          </button>
        </td>

      </tr>
    `).join(""),document.querySelectorAll(".editBtn").forEach(t=>{t.onclick=()=>Q3(t.dataset.id)})}function K3(n){n.innerHTML=p2(),m2()}function Q3(n){const t=window._suppliers.find(r=>r.id===n),e=document.getElementById("modalArea");e.innerHTML=p2(t),m2(n)}function p2(n={}){return`
    <div class="modal">

      <div class="modal-card">

        <h3>
          ${n.id?"Edit":"Add"}
          Supplier
        </h3>

        <input
          id="sName"
          placeholder="Supplier Name"
          value="${n.name||""}"
        />

        <textarea
          id="sAddress"
          rows="4"
          placeholder="Address"
        >${n.address||""}</textarea>

        <input
          id="sContact"
          placeholder="Contact Name"
          value="${n.contactName||""}"
        />

        <input
          id="sEmail"
          placeholder="Contact Email"
          value="${n.contactEmail||""}"
        />

        <select id="sTerms">
          ${J3(n.shippingTerms||"FOB")}
        </select>

        <br><br>

        <select id="sCur">
          ${X3(n.currency||"USD")}
        </select>

        <br><br>

        <button id="saveSup">
          Save
        </button>

        <button id="closeSup">
          Cancel
        </button>

      </div>

    </div>
  `}function m2(n=null){document.getElementById("closeSup").onclick=()=>document.getElementById("modalArea").innerHTML="",document.getElementById("saveSup").onclick=()=>Y3(n)}async function Y3(n=null){const t=document.getElementById("sName").value;if(!t){Te("Enter supplier name","error");return}const e={name:t,address:document.getElementById("sAddress").value,contactName:document.getElementById("sContact").value,contactEmail:document.getElementById("sEmail").value,shippingTerms:document.getElementById("sTerms").value,currency:document.getElementById("sCur").value};await xl(dn(de,"suppliers",n||t),e,{merge:!0}),Te("Supplier saved","success"),location.reload()}function X3(n){return["GBP","EUR","USD","JPY","CNY"].map(e=>`
    <option
      value="${e}"
      ${e===n?"selected":""}
    >
      ${e}
    </option>
  `).join("")}function J3(n){return["EXW","FCA","FOB","CIF","DAP","DDP","COLLECTION"].map(e=>`
    <option
      value="${e}"
      ${e===n?"selected":""}
    >
      ${e}
    </option>
  `).join("")}function Z3(){const n=window._suppliers||[];let t=`name,address,contactName,contactEmail,shippingTerms,currency
`;n.forEach(i=>{t+=[i.name,i.address,i.contactName,i.contactEmail,i.shippingTerms,i.currency].join(",")+`
`});const e=new Blob([t],{type:"text/csv"}),r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="suppliers.csv",r.click(),Te("CSV downloaded","info")}async function wd(n){const t=await g2();n.innerHTML=`
    <h3>FX Control Centre</h3>

    <div class="grid-4">

      <input
        id="fxSearch"
        placeholder="Search currency..."
      />

      <button id="fxRefresh">
        Reload
      </button>

      <button id="fxAdd">
        Add Currency
      </button>

      <button id="fxConvert">
        Converter
      </button>

    </div>

    <br>

    <table class="table">

      <thead>
        <tr>
          <th>Code</th>
          <th>Rate vs GBP</th>
          <th>Updated</th>
          <th>Status</th>
          <th>Save</th>
        </tr>
      </thead>

      <tbody id="fxRows">
        ${t.map(tA).join("")}
      </tbody>

    </table>

    <br>

    <div id="fxTool"></div>
  `,document.getElementById("fxSearch").oninput=eA,document.getElementById("fxRefresh").onclick=()=>wd(n),document.getElementById("fxAdd").onclick=nA,document.getElementById("fxConvert").onclick=rA}async function g2(){return(await nr(Pn(de,"fxRates"))).docs.map(t=>({id:t.id,...t.data()})).sort((t,e)=>t.code.localeCompare(e.code))}function tA(n){return sA(n.updated),`
    <tr class="okRow">

      <td>${n.code}</td>

      <td>
        <input
          id="rate_${n.code}"
          value="${n.rate}"
        />
      </td>

      <td>
        ${n.updated||""}
      </td>

      <td>
        Live
      </td>

      <td>
        <button
          onclick="window.saveFx('${n.code}')"
        >
          Save
        </button>
      </td>

    </tr>
  `}window.saveFx=async n=>{const t=Number(document.getElementById("rate_"+n).value);await Ci(dn(de,"fxRates",n),{rate:t,updated:y2(),source:"Manual Edit"}),Te(n+" updated","success")};function eA(n){const t=n.target.value.toUpperCase();document.querySelectorAll("#fxRows tr").forEach(r=>{r.style.display=r.innerText.includes(t)?"":"none"})}async function nA(){const n=prompt("Currency Code");n&&(await xl(dn(de,"fxRates",n.toUpperCase()),{code:n.toUpperCase(),rate:1,updated:y2(),source:"Manual Add"}),Te("Currency added","success"),wd(document.getElementById("adminPanel")))}function rA(){document.getElementById("fxTool").innerHTML=`
    <div class="card">

      <h4>Quick Converter</h4>

      <div class="grid-4">

        <input
          id="amt"
          value="1000"
        />

        <input
          id="from"
          placeholder="GBP"
        />

        <input
          id="to"
          placeholder="USD"
        />

        <button id="goFx">
          Convert
        </button>

      </div>

      <br>

      <div id="fxOut"></div>

    </div>
  `,document.getElementById("goFx").onclick=iA}async function iA(){const n=Number(document.getElementById("amt").value),t=document.getElementById("from").value.toUpperCase(),e=document.getElementById("to").value.toUpperCase(),r=await g2(),i={};r.forEach(o=>{i[o.code]=Number(o.rate)});let s=0;t==="GBP"?s=n*i[e]:e==="GBP"?s=n/i[t]:s=n/i[t]*i[e],document.getElementById("fxOut").innerHTML=`
    <div class="metricBig">
      ${n}
      ${t}
      =
      ${s.toFixed(2)}
      ${e}
    </div>
  `}function y2(){return new Date().toLocaleString("en-GB")}function sA(n){return!0}const oA=document.getElementById("app");window.route=Nh;aA();function aA(){oA.innerHTML=`
    <div id="navArea"></div>
    <div id="pageArea"></div>
  `,document.getElementById("navArea").innerHTML=r0(),i0(Nh),Nh("newOrder")}function Nh(n){const t=document.getElementById("pageArea");switch(t.innerHTML=`
    <div class="loading">
      Loading...
    </div>
  `,n){case"newOrder":Yf(t);break;case"openOrders":Yg(t);break;case"warehouse":yd(t);break;case"shipping":s2(t);break;case"invoicing":Lc(t);break;case"analytics":_3(t);break;case"admin":S3(t);break;case"archive":I3(t);break;case"products":C3(t);break;case"customers":V3(t);break;case"suppliers":W3(t);break;case"fx":wd(t);break;default:Yf(t);break}}export{Ze as _};
