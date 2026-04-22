/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t=>t,s$1=t$1.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$2=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$2,r$2=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$2+x):s+o$2+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$2)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$2),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$2,t+1));)d.push({type:7,index:l}),t+=o$2.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:true,attribute:false})}

// ── Field labels ──────────────────────────────────────────────────────────────
const LABELS = {
    title: "Title (optional)",
    icon: "Header icon (optional, e.g. mdi:solar-power)",
    show_header: "Show header",
    device_id: "Forecast Device",
    forecast_entity_0: "Day 1 — Today",
    forecast_entity_1: "Day 2 — Tomorrow",
    forecast_entity_2: "Day 3",
    forecast_entity_3: "Day 4",
    forecast_entity_4: "Day 5",
    forecast_entity_5: "Day 6",
    forecast_entity_6: "Day 7",
    live_power_entity: "Live power (optional, kW sensor)",
    today_actual_entity: "Today's actual generation (optional)",
    date_format: "Date format",
    time_format: "Time format (hourly popup)",
    inverter_max_kw: "Inverter max output (kW)",
    solar_max_kwp: "Solar array size (kWp)",
    low_threshold: "Low threshold (kWh)",
    high_threshold: "High threshold (kWh)",
};
// ── Schema segments (rendered with section headers between them) ──────────────
// Device field — rendered first as the primary entry point
const SCHEMA_DEVICE = [
    { name: "device_id", selector: { device: {} } },
];
// Remaining top-level fields — always visible
const SCHEMA_TOP = [
    { name: "title", selector: { text: {} } },
    { name: "icon", selector: { icon: {} } },
    { name: "show_header", selector: { boolean: {} } },
];
const SCHEMA_FORECAST = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
    name: `forecast_entity_${i}`,
    selector: { entity: { domain: "sensor" } },
}));
const SCHEMA_TODAY_ACTUAL = [
    { name: "today_actual_entity", selector: { entity: { domain: "sensor" } } },
];
const SCHEMA_LIVE_POWER = [
    { name: "live_power_entity", selector: { entity: { domain: "sensor" } } },
];
const SCHEMA_DISPLAY = [
    {
        name: "date_format",
        selector: {
            select: {
                options: [
                    { value: "DD/MM", label: "DD/MM  (e.g. 15/04)" },
                    { value: "MM/DD", label: "MM/DD  (e.g. 04/15)" },
                ],
            },
        },
    },
    {
        name: "time_format",
        selector: {
            select: {
                options: [
                    { value: "24h", label: "24h  (e.g. 17:00)" },
                    { value: "12h", label: "12h  (e.g. 5pm)" },
                ],
            },
        },
    },
];
const SCHEMA_SYSTEM = [
    { name: "inverter_max_kw", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kW" } } },
    { name: "solar_max_kwp", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWp" } } },
];
const SCHEMA_THRESHOLDS = [
    { name: "low_threshold", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
    { name: "high_threshold", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
];
// ── Config normalisation (exported — also used by the main card) ──────────────
function normalizeConfig(raw) {
    const incoming = Array.isArray(raw.forecast_entities)
        ? raw.forecast_entities.slice(0, 7)
        : [];
    while (incoming.length < 7)
        incoming.push("");
    return {
        type: raw.type ?? "custom:solar-forecast-card",
        title: raw.title,
        icon: raw.icon,
        show_header: raw.show_header !== false,
        device_id: raw.device_id,
        integration_type: raw.integration_type ?? "manual",
        forecast_entities: incoming,
        live_power_entity: raw.live_power_entity,
        today_actual_entity: raw.today_actual_entity,
        actual_arrays: Array.isArray(raw.actual_arrays)
            ? raw.actual_arrays.filter((e) => typeof e === "object" && e !== null && typeof e.entity === "string")
            : undefined,
        date_format: raw.date_format ?? "DD/MM",
        time_format: raw.time_format ?? "24h",
        inverter_max_kw: raw.inverter_max_kw,
        solar_max_kwp: raw.solar_max_kwp,
        low_threshold: raw.low_threshold,
        high_threshold: raw.high_threshold,
    };
}
// ── Editor element ────────────────────────────────────────────────────────────
/** Entity FormData keys that count as "manually edited" when changed by the user. */
const ENTITY_FIELDS = [
    "forecast_entity_0", "forecast_entity_1", "forecast_entity_2",
    "forecast_entity_3", "forecast_entity_4", "forecast_entity_5",
    "forecast_entity_6", "today_actual_entity", "live_power_entity",
];
let SolarForecastCardEditor = class SolarForecastCardEditor extends i {
    constructor() {
        super(...arguments);
        /**
         * True when the current entity values were populated by auto-detection.
         * Set to true after any auto-detect run; reset to false if the user
         * manually edits any entity field. Used to decide whether a device switch
         * should overwrite all mapped entities or leave them alone.
         */
        this._autoPopulated = false;
        /**
         * True when the user changed the device while entities were manually
         * configured. Cleared once auto-population takes over or device is removed.
         */
        this._showManualWarning = false;
    }
    setConfig(config) {
        this._config = normalizeConfig(config);
    }
    // ── Config ↔ flat FormData conversion ──────────────────────────────────────
    _toFormData(cfg) {
        return {
            title: cfg.title ?? "",
            icon: cfg.icon ?? "",
            show_header: cfg.show_header,
            device_id: cfg.device_id ?? "",
            live_power_entity: cfg.live_power_entity ?? "",
            today_actual_entity: cfg.today_actual_entity ?? "",
            date_format: cfg.date_format ?? "DD/MM",
            time_format: cfg.time_format ?? "24h",
            inverter_max_kw: cfg.inverter_max_kw,
            solar_max_kwp: cfg.solar_max_kwp,
            low_threshold: cfg.low_threshold,
            high_threshold: cfg.high_threshold,
            forecast_entity_0: cfg.forecast_entities[0] ?? "",
            forecast_entity_1: cfg.forecast_entities[1] ?? "",
            forecast_entity_2: cfg.forecast_entities[2] ?? "",
            forecast_entity_3: cfg.forecast_entities[3] ?? "",
            forecast_entity_4: cfg.forecast_entities[4] ?? "",
            forecast_entity_5: cfg.forecast_entities[5] ?? "",
            forecast_entity_6: cfg.forecast_entities[6] ?? "",
        };
    }
    _fromFormData(data) {
        return {
            type: this._config?.type ?? "custom:solar-forecast-card",
            title: data.title || undefined,
            icon: data.icon || undefined,
            show_header: data.show_header,
            device_id: data.device_id || undefined,
            integration_type: this._config?.integration_type ?? "manual",
            forecast_entities: [
                data.forecast_entity_0,
                data.forecast_entity_1,
                data.forecast_entity_2,
                data.forecast_entity_3,
                data.forecast_entity_4,
                data.forecast_entity_5,
                data.forecast_entity_6,
            ],
            live_power_entity: data.live_power_entity || undefined,
            today_actual_entity: data.today_actual_entity || undefined,
            actual_arrays: this._config?.actual_arrays,
            date_format: data.date_format || "DD/MM",
            time_format: data.time_format || "24h",
            inverter_max_kw: typeof data.inverter_max_kw === "number" ? data.inverter_max_kw : undefined,
            solar_max_kwp: typeof data.solar_max_kwp === "number" ? data.solar_max_kwp : undefined,
            low_threshold: typeof data.low_threshold === "number" ? data.low_threshold : undefined,
            high_threshold: typeof data.high_threshold === "number" ? data.high_threshold : undefined,
        };
    }
    // ── Actual-array management ─────────────────────────────────────────────────
    _addArray() {
        const arrays = [...(this._config?.actual_arrays ?? []), { entity: "", label: "" }];
        this._dispatchArrayChange(arrays);
    }
    _removeArray(idx) {
        const arrays = (this._config?.actual_arrays ?? []).filter((_, i) => i !== idx);
        this._dispatchArrayChange(arrays);
    }
    _updateArrayEntity(idx, entity) {
        const arrays = [...(this._config?.actual_arrays ?? [])];
        arrays[idx] = { ...arrays[idx], entity: entity ?? "" };
        this._dispatchArrayChange(arrays);
    }
    _updateArrayLabel(idx, raw) {
        const arrays = [...(this._config?.actual_arrays ?? [])];
        arrays[idx] = { ...arrays[idx], label: raw.slice(0, 1) };
        this._dispatchArrayChange(arrays);
    }
    _dispatchArrayChange(arrays) {
        if (!this._config)
            return;
        const newConfig = {
            ...this._config,
            actual_arrays: arrays.length > 0 ? arrays : undefined,
        };
        this._config = newConfig;
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        }));
    }
    // ── Entity auto-detection ───────────────────────────────────────────────────
    _deviceSensors(deviceId) {
        if (!this.hass?.entities)
            return [];
        return Object.values(this.hass.entities).filter((e) => e.device_id === deviceId &&
            !e.disabled_by &&
            !e.hidden_by &&
            e.entity_id.startsWith("sensor."));
    }
    _autoDetect(deviceId) {
        const sensors = this._deviceSensors(deviceId);
        // Route to integration-specific detection when platform is identifiable
        const isSolcast = sensors.some((e) => e.platform === "solcast_solar");
        const isForecastSolar = sensors.some((e) => e.platform === "forecast_solar");
        const isOpenMeteo = sensors.some((e) => e.platform === "open_meteo_solar_forecast");
        if (isSolcast)
            return this._autoDetectSolcast(sensors);
        if (isForecastSolar)
            return this._autoDetectForecastSolar(sensors);
        if (isOpenMeteo)
            return this._autoDetectOpenMeteo(sensors);
        // ── Split into forecast sensors (have "hours") and actual candidates ──────
        const forecastSensors = sensors.filter((e) => Array.isArray(this.hass.states[e.entity_id]?.attributes?.hours));
        // ── Map each forecast sensor to a day-offset from today ───────────────────
        const todayMidnight = this._localMidnight(new Date());
        const candidates = forecastSensors.map((e) => {
            const state = this.hass.states[e.entity_id];
            const date = this._extractForecastDate(e.entity_id, state);
            let offset = null;
            if (date !== null) {
                const diff = this._localMidnight(date).getTime() - todayMidnight.getTime();
                offset = Math.round(diff / 86400000);
            }
            return { entityId: e.entity_id, offset };
        });
        // ── Build the 7-slot array ────────────────────────────────────────────────
        const slots = ["", "", "", "", "", "", ""];
        const hasDates = candidates.some((c) => c.offset !== null);
        if (hasDates) {
            // Place entities whose offset falls within [0, 6]
            for (const c of candidates) {
                if (c.offset !== null && c.offset >= 0 && c.offset < 7) {
                    slots[c.offset] = c.entityId;
                }
            }
            // Any leftover entities (past, or no date info) fill the first empty slots
            const unplaced = candidates
                .filter((c) => c.offset === null || c.offset < 0 || c.offset >= 7)
                .sort((a, b) => a.entityId.localeCompare(b.entityId));
            let si = 0;
            for (const c of unplaced) {
                while (si < 7 && slots[si])
                    si++;
                if (si < 7)
                    slots[si++] = c.entityId;
            }
        }
        else {
            // No date metadata at all — stable alphabetical fallback
            const sorted = [...forecastSensors]
                .sort((a, b) => a.entity_id.localeCompare(b.entity_id))
                .map((e) => e.entity_id);
            for (let i = 0; i < 7; i++)
                slots[i] = sorted[i] ?? "";
        }
        // ── Debug log ─────────────────────────────────────────────────────────────
        console.debug("[solar-forecast-card] auto-detect mapping:", candidates
            .slice()
            .sort((a, b) => (a.offset ?? 999) - (b.offset ?? 999))
            .map((c) => ({
            entity: c.entityId.replace(/^sensor\./, ""),
            offset: c.offset ?? "no-date",
            slot: c.offset !== null && c.offset >= 0 && c.offset < 7
                ? `Day ${c.offset} (${["Today", "Tomorrow", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"][c.offset]})`
                : "unplaced",
        })));
        return {
            forecast_entities: slots,
            integration_type: "volcast",
        };
    }
    /**
     * Solcast-specific auto-detection.
     *
     * Solcast entities don't carry an `hours` array attribute so the generic
     * detector won't find them. Instead we match against the well-known keywords
     * the integration embeds in every entity_id:
     *
     *   forecast_today → slot 0  (today)
     *   forecast_tomorrow → slot 1  (tomorrow)
     *   forecast_day_3 … forecast_day_7 → slots 2–6
     *
     * Only kWh sensors are considered to avoid picking up power/API sensors.
     * today_actual_entity is left undefined — Solcast doesn't expose actual
     * generation; that sensor typically comes from the inverter integration.
     */
    _autoDetectSolcast(sensors) {
        const slots = ["", "", "", "", "", "", ""];
        const DAY_KEYWORDS = [
            ["forecast_today", 0],
            ["forecast_tomorrow", 1],
            ["forecast_day_3", 2],
            ["forecast_day_4", 3],
            ["forecast_day_5", 4],
            ["forecast_day_6", 5],
            ["forecast_day_7", 6],
        ];
        for (const sensor of sensors) {
            const state = this.hass.states[sensor.entity_id];
            const unit = state?.attributes?.unit_of_measurement;
            if (unit !== "kWh")
                continue;
            for (const [keyword, slot] of DAY_KEYWORDS) {
                if (sensor.entity_id.includes(keyword)) {
                    slots[slot] = sensor.entity_id;
                    break;
                }
            }
        }
        console.debug("[solar-forecast-card] Solcast auto-detect mapping:", slots.map((id, i) => ({
            slot: `Day ${i} (${["Today", "Tomorrow", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"][i]})`,
            entity: id ? id.replace(/^sensor\./, "") : "(empty)",
        })));
        return {
            forecast_entities: slots,
            integration_type: "solcast",
        };
    }
    /**
     * forecast.solar-specific auto-detection.
     *
     * The integration exposes two daily energy sensors per device:
     *   energy_production_today     → slot 0
     *   energy_production_tomorrow  → slot 1
     *
     * Slots 2–6 are left empty; forecast.solar doesn't provide day 3+ totals.
     * today_actual_entity is left undefined — actual generation comes from the
     * inverter, not from this integration.
     *
     * The native unit is Wh but HA displays it as kWh; both are accepted.
     * "energy_production_today_remaining" is excluded from slot 0 by requiring
     * the keyword is not followed by "_remaining".
     */
    _autoDetectForecastSolar(sensors) {
        const slots = ["", "", "", "", "", "", ""];
        for (const sensor of sensors) {
            const state = this.hass.states[sensor.entity_id];
            const unit = state?.attributes?.unit_of_measurement;
            if (unit !== "kWh" && unit !== "Wh")
                continue;
            const id = sensor.entity_id;
            if (id.includes("energy_production_today") && !id.includes("remaining")) {
                slots[0] = id;
            }
            else if (id.includes("energy_production_tomorrow")) {
                slots[1] = id;
            }
        }
        console.debug("[solar-forecast-card] forecast.solar auto-detect mapping:", slots.map((id, i) => ({
            slot: `Day ${i} (${["Today", "Tomorrow", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"][i]})`,
            entity: id ? id.replace(/^sensor\./, "") : "(empty)",
        })));
        return {
            forecast_entities: slots,
            integration_type: "forecast_solar",
        };
    }
    /**
     * Open-Meteo Solar Forecast auto-detection.
     *
     * The integration (platform: "open_meteo_solar_forecast") exposes daily
     * energy sensors whose entity_id follows the pattern:
     *   sensor.{service_slug}_{key}
     *
     * Keys mapped to card slots:
     *   energy_production_today     → slot 0  (today)
     *   energy_production_tomorrow  → slot 1  (tomorrow)
     *   energy_production_d2        → slot 2
     *   energy_production_d3        → slot 3
     *   energy_production_d4        → slot 4
     *   energy_production_d5        → slot 5
     *   energy_production_d6        → slot 6
     *   energy_production_d7        → skipped (card only has 7 slots, 0–6)
     *
     * "energy_production_today_remaining" is excluded.
     * Native unit is Wh; HA auto-converts to kWh via suggested_unit_of_measurement.
     * Both "kWh" and "Wh" are accepted to be safe.
     *
     * Each daily sensor carries a `wh_period` attribute (ISO datetime → Wh)
     * that the card uses for the hourly popup chart.
     */
    _autoDetectOpenMeteo(sensors) {
        const slots = ["", "", "", "", "", "", ""];
        // Key suffix → slot index.  Order matters: "today" must be listed before
        // any d-number so the endsWith check doesn't need extra guards.
        const KEY_SLOTS = [
            ["energy_production_today", 0],
            ["energy_production_tomorrow", 1],
            ["energy_production_d2", 2],
            ["energy_production_d3", 3],
            ["energy_production_d4", 4],
            ["energy_production_d5", 5],
            ["energy_production_d6", 6],
            // energy_production_d7 → no slot, intentionally omitted
        ];
        for (const sensor of sensors) {
            // Skip the "remaining" sensor — not a daily total
            if (sensor.entity_id.includes("_remaining"))
                continue;
            const state = this.hass.states[sensor.entity_id];
            const unit = state?.attributes?.unit_of_measurement;
            if (unit !== "kWh" && unit !== "Wh")
                continue;
            const id = sensor.entity_id;
            for (const [key, slot] of KEY_SLOTS) {
                // entity_id format is sensor.{slug}_{key}, so the key is always the suffix
                if (id.endsWith("_" + key)) {
                    slots[slot] = id;
                    break;
                }
            }
        }
        console.debug("[solar-forecast-card] Open-Meteo auto-detect mapping:", slots.map((id, i) => ({
            slot: `Day ${i} (${["Today", "Tomorrow", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"][i]})`,
            entity: id ? id.replace(/^sensor\./, "") : "(empty)",
        })));
        return {
            forecast_entities: slots,
            integration_type: "open_meteo_solar_forecast",
        };
    }
    /**
     * Extract the forecast date from an entity, trying in priority order:
     *   1. `datetime` state attribute  (ISO datetime string)
     *   2. `date`     state attribute  (ISO date string  YYYY-MM-DD)
     *   3. ISO date pattern inside the entity_id  (YYYY_MM_DD or YYYY-MM-DD)
     *
     * Returns null when no reliable date can be found.
     */
    _extractForecastDate(entityId, state) {
        // 1. datetime attribute
        const dtAttr = state?.attributes?.datetime;
        if (typeof dtAttr === "string") {
            const d = new Date(dtAttr);
            if (!isNaN(d.getTime()))
                return d;
        }
        // 2. date attribute (parse as local to avoid UTC-offset day shift)
        const dateAttr = state?.attributes?.date;
        if (typeof dateAttr === "string") {
            const d = this._parseLocalDate(dateAttr);
            if (d)
                return d;
        }
        // 3. ISO date embedded in entity_id:  sensor.foo_2024_04_15_bar
        //                                  or sensor.foo_2024-04-15_bar
        const m = entityId.match(/(\d{4})[_-](\d{2})[_-](\d{2})/);
        if (m) {
            const d = new Date(+m[1], +m[2] - 1, +m[3]);
            if (!isNaN(d.getTime()))
                return d;
        }
        return null;
    }
    /** Parse "YYYY-MM-DD" as a local-timezone Date (avoids UTC midnight offset). */
    _parseLocalDate(value) {
        const m = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (!m)
            return null;
        const d = new Date(+m[1], +m[2] - 1, +m[3]);
        return isNaN(d.getTime()) ? null : d;
    }
    /** Return a new Date set to local midnight of the given date. */
    _localMidnight(d) {
        const out = new Date(d);
        out.setHours(0, 0, 0, 0);
        return out;
    }
    // ── Event handling ──────────────────────────────────────────────────────────
    /**
     * Shared handler for all ha-form value-changed events.
     * Each form instance fires only its own field subset; we merge with the
     * current full FormData before converting back to SolarForecastCardConfig.
     */
    _valueChanged(ev) {
        if (!this._config)
            return;
        ev.stopPropagation(); // don't let ha-form's value-changed bubble further
        const partial = ev.detail.value;
        const current = this._toFormData(this._config);
        const merged = { ...current, ...partial };
        let newConfig = this._fromFormData(merged);
        const deviceChanged = !!(newConfig.device_id && newConfig.device_id !== this._config.device_id);
        const deviceCleared = !newConfig.device_id && !!this._config.device_id;
        const isFirstDevice = deviceChanged && !this._config.device_id;
        if (deviceChanged) {
            const detected = this._autoDetect(newConfig.device_id);
            if (isFirstDevice || this._autoPopulated) {
                // First-ever device selection, or entities were previously auto-filled:
                // replace forecast_entities and integration_type. today_actual_entity
                // is always preserved — it typically comes from the inverter, not the
                // forecast device, so device changes must never clear it.
                newConfig = {
                    ...newConfig,
                    forecast_entities: detected.forecast_entities,
                    integration_type: detected.integration_type,
                };
                this._autoPopulated = true;
                this._showManualWarning = false;
            }
            else {
                // User has manually edited entities — leave them alone, but still
                // update integration_type so parsing logic stays correct.
                newConfig = { ...newConfig, integration_type: detected.integration_type };
                this._showManualWarning = true;
            }
        }
        else if (deviceCleared) {
            newConfig = { ...newConfig, integration_type: "manual" };
            this._autoPopulated = false;
            this._showManualWarning = false;
        }
        else if (ENTITY_FIELDS.some((f) => f in partial)) {
            // User manually edited an entity field — mark as no longer auto-populated.
            this._autoPopulated = false;
        }
        this._config = newConfig;
        // composed: true is required so the event crosses the shadow DOM boundary
        // back to HA's dialog and the config is actually saved.
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        }));
    }
    // ── Styles ──────────────────────────────────────────────────────────────────
    static get styles() {
        return i$3 `
      :host {
        display: block;
      }

      .device-helper {
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 4px 0 8px;
        padding: 0 4px;
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        opacity: 0.75;
      }

      .device-helper ha-icon {
        --mdc-icon-size: 14px;
        flex-shrink: 0;
      }

      ha-expansion-panel {
        display: block;
        margin-top: 8px;
        --expansion-panel-summary-padding: 0 8px;
        --expansion-panel-content-padding: 0 8px 8px;
      }

      /* ── Actual-array list ─────────────────────────────────── */

      .array-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 0;
      }

      .array-row ha-selector {
        flex: 1;
        min-width: 0;
      }

      .array-label-input {
        width: 3.2rem;
        flex-shrink: 0;
        border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.3));
        border-radius: 4px;
        padding: 6px 6px;
        font-size: 0.9rem;
        text-align: center;
        background: var(--secondary-background-color, transparent);
        color: var(--primary-text-color);
        outline: none;
        box-sizing: border-box;
      }

      .array-label-input:focus {
        border-color: var(--primary-color);
      }

      .add-array-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 4px 2px;
        cursor: pointer;
        color: var(--primary-color);
        font-size: 0.85rem;
        font-weight: 500;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      .add-array-btn:hover { opacity: 0.8; }

      .add-array-btn ha-icon {
        --mdc-icon-size: 18px;
      }
    `;
    }
    // ── Render ──────────────────────────────────────────────────────────────────
    render() {
        if (!this.hass || !this._config)
            return A;
        const data = this._toFormData(this._config);
        const label = (s) => LABELS[s.name] ?? s.name;
        const onChange = this._valueChanged.bind(this);
        return b `
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_DEVICE}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>
      <p class="device-helper">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        Recommended: selecting a device will auto-configure the card
      </p>

      ${this._showManualWarning ? b `
        <ha-alert alert-type="warning">
          Changing device will not overwrite manually configured entities.
        </ha-alert>
      ` : A}

      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_TOP}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>

      <ha-expansion-panel header="Daily Forecast Entities" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_FORECAST}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Live Data" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_LIVE_POWER}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_TODAY_ACTUAL}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Actual Generation Arrays" outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 10px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          Optional: configure individual array sensors to display a stacked breakdown on today's bar.
          Each label is a single character shown inside its segment (e.g. N, S, E).
        </p>
        ${(this._config.actual_arrays ?? []).map((entry, idx) => b `
          <div class="array-row">
            <ha-selector
              .hass=${this.hass}
              .selector=${{ entity: { domain: ["sensor"] } }}
              .value=${entry.entity || ""}
              .label=${"Array entity"}
              @value-changed=${(e) => this._updateArrayEntity(idx, e.detail.value)}
            ></ha-selector>
            <input
              type="text"
              class="array-label-input"
              placeholder="?"
              maxlength="1"
              .value=${entry.label || ""}
              title="Single character label (e.g. N, S, E)"
              @input=${(e) => this._updateArrayLabel(idx, e.target.value)}
            />
            <ha-icon-button
              .label=${"Remove"}
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              @click=${() => this._removeArray(idx)}
            ></ha-icon-button>
          </div>
        `)}
        <div
          class="add-array-btn"
          role="button"
          tabindex="0"
          @click=${this._addArray.bind(this)}
          @keydown=${(e) => (e.key === "Enter" || e.key === " ") && this._addArray()}
        >
          <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
          Add array
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel header="System Parameters" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_SYSTEM}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Colour Thresholds" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_THRESHOLDS}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Date/Time Formats" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>
    `;
    }
};
__decorate([
    n({ attribute: false })
], SolarForecastCardEditor.prototype, "hass", void 0);
__decorate([
    r()
], SolarForecastCardEditor.prototype, "_config", void 0);
__decorate([
    r()
], SolarForecastCardEditor.prototype, "_autoPopulated", void 0);
__decorate([
    r()
], SolarForecastCardEditor.prototype, "_showManualWarning", void 0);
SolarForecastCardEditor = __decorate([
    t("solar-forecast-card-editor")
], SolarForecastCardEditor);

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const COMPLETE_THRESHOLD = 0.9;
const POPUP_CLOSE_MS = 260;
let SolarForecastCard = class SolarForecastCard extends i {
    constructor() {
        super(...arguments);
        /** Currently open popup row (null = closed). */
        this._popup = null;
        /** True once the popup is in-DOM and should animate in. */
        this._popupVisible = false;
        this._onDocKey = (e) => {
            if (e.key === "Escape" && this._popup)
                this._closePopup();
        };
    }
    // ── Lovelace lifecycle ────────────────────────────────────────────────────
    static getConfigElement() {
        return document.createElement("solar-forecast-card-editor");
    }
    static getStubConfig() {
        return {
            forecast_entities: ["", "", "", "", "", "", ""],
            date_format: "DD/MM",
            show_header: true,
        };
    }
    setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        this._config = normalizeConfig(config);
    }
    getCardSize() {
        return 4;
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener("keydown", this._onDocKey);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener("keydown", this._onDocKey);
        clearTimeout(this._closeTimer);
    }
    // ── Update optimisation ───────────────────────────────────────────────────
    shouldUpdate(changedProps) {
        if (changedProps.has("_config") || changedProps.has("_popup") || changedProps.has("_popupVisible"))
            return true;
        if (!this._config || !this.hass)
            return false;
        const oldHass = changedProps.get("hass");
        if (!oldHass)
            return true;
        const watchIds = [
            ...this._config.forecast_entities,
            this._config.live_power_entity,
            this._config.today_actual_entity,
            ...(this._config.actual_arrays?.map((a) => a.entity) ?? []),
        ].filter(Boolean);
        return watchIds.some((id) => oldHass.states[id] !== this.hass.states[id]);
    }
    // ── Data ─────────────────────────────────────────────────────────────────
    _buildRows() {
        if (!this._config || !this.hass)
            return [];
        const cfg = this._config;
        const today = new Date();
        let todayActualKwh = null;
        if (cfg.today_actual_entity) {
            const actualState = this.hass.states[cfg.today_actual_entity];
            const actualRaw = parseFloat(actualState?.state ?? "");
            const actualUnit = actualState?.attributes?.unit_of_measurement?.toLowerCase();
            const v = isFinite(actualRaw) ? (actualUnit === "wh" ? actualRaw / 1000 : actualRaw) : NaN;
            if (isFinite(v))
                todayActualKwh = v;
        }
        // ── Actual arrays (manual multi-array breakdown) ──────────────────────────
        // Arrays are an optional visual enhancement layer. When configured:
        //   - Each array entity is read and Wh-normalised to kWh.
        //   - If the sum of all arrays is > 0, it becomes the canonical actualKwh
        //     (used for bar height, dotted-remainder, and isComplete).
        //   - If the sum is 0 (pre-sunrise, all entities unavailable, incomplete
        //     config, etc.), todayActualKwh is left unchanged so it retains the
        //     today_actual_entity value already read above — graceful fallback.
        //
        // The header (_renderLive) always reads today_actual_entity independently
        // and is never affected by this block.
        let todayArrayEntries = null;
        if ((cfg.actual_arrays?.length ?? 0) > 0) {
            todayArrayEntries = cfg.actual_arrays.map((a) => {
                const st = a.entity ? this.hass.states[a.entity] : undefined;
                const raw = parseFloat(st?.state ?? "");
                const unit = st?.attributes?.unit_of_measurement?.toLowerCase();
                const kwh = isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : 0;
                return { label: a.label || "?", kwh };
            });
            const sumKwh = todayArrayEntries.reduce((s, e) => s + e.kwh, 0);
            if (sumKwh > 0) {
                // Arrays have live data — their sum is the canonical actual total.
                todayActualKwh = sumKwh;
            }
            // sumKwh === 0: all arrays are producing nothing or unavailable.
            // todayActualKwh is intentionally left as-is (today_actual_entity fallback).
        }
        const raw = cfg.forecast_entities.map((entityId, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const s = entityId ? this.hass.states[entityId] : undefined;
            const kwhVal = parseFloat(s?.state ?? "");
            return {
                date,
                isToday: i === 0,
                entityId,
                forecastKwh: isFinite(kwhVal) ? kwhVal : null,
                actualKwh: i === 0 ? todayActualKwh : null,
                actualArrays: i === 0 ? (todayArrayEntries ?? null) : null,
                rawHoursAttr: cfg.integration_type === "solcast"
                    ? s?.attributes?.detailedForecast
                    : cfg.integration_type === "volcast"
                        ? s?.attributes?.hours
                        : cfg.integration_type === "forecast_solar"
                            ? undefined
                            : cfg.integration_type === "open_meteo_solar_forecast"
                                ? s?.attributes?.wh_period
                                : s?.attributes?.hours ?? s?.attributes?.detailedForecast,
            };
        });
        const maxKwh = Math.max(...raw.map((r) => r.forecastKwh ?? 0), 0.001);
        return raw.map((r) => {
            const forecastPct = r.forecastKwh !== null
                ? Math.round((r.forecastKwh / maxKwh) * 100) : 0;
            const rawActualPct = r.actualKwh !== null
                ? Math.round((r.actualKwh / maxKwh) * 100) : 0;
            const actualPct = Math.min(rawActualPct, forecastPct);
            const dottedPct = forecastPct - actualPct;
            const isComplete = r.isToday
                && r.forecastKwh !== null && r.forecastKwh > 0
                && r.actualKwh !== null
                && r.actualKwh / r.forecastKwh >= COMPLETE_THRESHOLD;
            return { ...r, forecastPct, actualPct, dottedPct, isComplete };
        });
    }
    /**
     * Parse the raw hourly attribute into trimmed [{hour, kwh}] points.
     *
     * @param hint  integration_type from config — skips format detection when known.
     *
     * Handles four formats:
     *   1. Solcast detailedForecast  – [{period_start: ISO, pv_estimate: kW}, …]
     *                                  30-min periods, aggregated into hourly kWh
     *   2. Array of numbers          – index is the hour
     *   3. Array of objects          – looks for common value-key names
     *   4. Plain object keyed by hour – {"6": 0.5, "7": 1.2, …}
     */
    _parseHours(raw, hint) {
        // ── Always log the raw value so callers can verify the format ────────────
        console.debug("[solar-forecast-card] hours attr →", raw === undefined ? "undefined" :
            raw === null ? "null" :
                Array.isArray(raw)
                    ? `array[${raw.length}] first=${JSON.stringify(raw[0])}`
                    : `${typeof raw} ${JSON.stringify(raw).slice(0, 120)}`);
        if (raw === null || raw === undefined)
            return [];
        // ── Open-Meteo: dispatch before generic format detection ─────────────────
        if (hint === "open_meteo_solar_forecast") {
            if (typeof raw !== "object" || Array.isArray(raw)) {
                console.debug("[solar-forecast-card] hours: Open-Meteo wh_period is not a plain object");
                return [];
            }
            console.debug("[solar-forecast-card] hours: Open-Meteo wh_period format");
            return this._parseOpenMeteoWhPeriod(raw);
        }
        try {
            let points;
            if (Array.isArray(raw)) {
                if (raw.length === 0) {
                    console.debug("[solar-forecast-card] hours: empty array");
                    return [];
                }
                // ── Format 1: Solcast detailedForecast ────────────────────────────
                // When hint is "solcast", skip detection and parse directly.
                // Otherwise detect by inspecting the first element.
                const isSolcast = hint === "solcast" ||
                    (hint !== "volcast" &&
                        typeof raw[0]?.period_start === "string" &&
                        "pv_estimate" in raw[0]);
                if (isSolcast) {
                    console.debug("[solar-forecast-card] hours: Solcast detailedForecast format");
                    points = this._parseSolcastPeriods(raw);
                }
                else {
                    // ── Format 2 & 3: generic array ───────────────────────────────────
                    points = raw.map((v, i) => {
                        // 1 — bare number, index = hour
                        if (typeof v === "number") {
                            return { hour: i, kwh: isFinite(v) ? v : 0 };
                        }
                        // 2 — object with hour + value fields
                        if (typeof v === "object" && v !== null) {
                            const obj = v;
                            // Resolve hour index — try "hour", "time", "h" keys
                            const rawH = obj.hour ?? obj.time ?? obj.h;
                            const hour = typeof rawH === "number" ? rawH
                                : typeof rawH === "string" ? parseInt(rawH, 10)
                                    : i;
                            // Resolve value — try all known key names in priority order
                            const rawV = obj.value ?? obj.energy ?? obj.kwh ??
                                obj.wh ?? obj.power_kw ?? obj.pv_estimate ??
                                obj.forecast ?? obj.solar ?? 0;
                            const kwh = typeof rawV === "number" ? rawV
                                : typeof rawV === "string" ? parseFloat(rawV)
                                    : 0;
                            return {
                                hour: isFinite(hour) ? hour : i,
                                kwh: isFinite(kwh) ? kwh : 0,
                            };
                        }
                        return { hour: i, kwh: 0 };
                    });
                } // close else (non-Solcast array)
                // ── Format 3: plain object keyed by hour ────────────────────────────
            }
            else if (typeof raw === "object") {
                const entries = Object.entries(raw);
                if (entries.length === 0) {
                    console.debug("[solar-forecast-card] hours: empty object");
                    return [];
                }
                points = entries
                    .map(([k, v]) => {
                    const hour = parseInt(k, 10);
                    const kwh = typeof v === "number" ? v
                        : typeof v === "string" ? parseFloat(v)
                            : 0;
                    return {
                        hour: isFinite(hour) ? hour : 0,
                        kwh: isFinite(kwh) ? kwh : 0,
                    };
                })
                    .sort((a, b) => a.hour - b.hour);
            }
            else {
                console.warn("[solar-forecast-card] hours: unrecognised type:", typeof raw);
                return [];
            }
            // ── Trim leading / trailing zeros ────────────────────────────────────
            let first = -1, last = -1;
            for (let i = 0; i < points.length; i++) {
                if (points[i].kwh > 0) {
                    if (first === -1)
                        first = i;
                    last = i;
                }
            }
            if (first === -1) {
                console.debug("[solar-forecast-card] hours: attribute present but all values are zero");
                return [];
            }
            const trimmed = points.slice(first, last + 1);
            console.debug(`[solar-forecast-card] hours: ${trimmed.length} points,`, `${trimmed[0].hour}:00 → ${trimmed[trimmed.length - 1].hour}:00,`, `peak ${Math.max(...trimmed.map((p) => p.kwh)).toFixed(3)} kWh`);
            return trimmed;
        }
        catch (err) {
            console.error("[solar-forecast-card] hours: parse failed →", err, "\nraw value:", raw);
            return [];
        }
    }
    _parseSolcastPeriods(entries) {
        const buckets = new Map();
        for (const entry of entries) {
            const periodStart = entry.period_start;
            if (typeof periodStart !== "string")
                continue;
            const d = new Date(periodStart);
            if (isNaN(d.getTime()))
                continue;
            const hour = d.getHours();
            const estimate = typeof entry.pv_estimate === "number" ? entry.pv_estimate : 0;
            const kwh = estimate * 0.5; // 30-min period in kW → kWh
            buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
        }
        return Array.from(buckets.entries())
            .map(([hour, kwh]) => ({ hour, kwh }))
            .sort((a, b) => a.hour - b.hour);
    }
    /**
     * Parse Open-Meteo's `wh_period` attribute into HourPoint[].
     *
     * The attribute is a plain object keyed by ISO datetime strings
     * (e.g. "2024-04-22T06:00:00") with numeric Wh energy values for each
     * period. Multiple sub-hourly periods with the same hour are summed.
     * Values are converted from Wh to kWh.
     */
    _parseOpenMeteoWhPeriod(raw) {
        const buckets = new Map();
        for (const [isoKey, val] of Object.entries(raw)) {
            // Extract the hour directly from the ISO string (the T-portion is the
            // local hour in HA's timezone). Using new Date().getHours() would shift
            // the hour to the browser's local timezone, which may differ from HA's.
            const hourMatch = isoKey.match(/T(\d{2}):/);
            if (!hourMatch)
                continue;
            const hour = parseInt(hourMatch[1], 10);
            if (!isFinite(hour) || hour < 0 || hour > 23)
                continue;
            const wh = typeof val === "number" ? val
                : typeof val === "string" ? parseFloat(val)
                    : NaN;
            if (!isFinite(wh))
                continue;
            buckets.set(hour, (buckets.get(hour) ?? 0) + wh / 1000); // Wh → kWh
        }
        return Array.from(buckets.entries())
            .map(([hour, kwh]) => ({ hour, kwh }))
            .sort((a, b) => a.hour - b.hour);
    }
    // ── Colour tier ──────────────────────────────────────────────────────────
    _tier(kwh) {
        if (kwh === null)
            return "average";
        const lo = this._config?.low_threshold;
        const hi = this._config?.high_threshold;
        if (lo !== undefined && kwh < lo)
            return "low";
        if (hi !== undefined && kwh > hi)
            return "high";
        return "average";
    }
    // ── Popup ─────────────────────────────────────────────────────────────────
    _openPopup(row) {
        clearTimeout(this._closeTimer);
        // Re-read the entity state fresh at click time so we always get the latest hours
        const freshState = row.entityId ? this.hass?.states[row.entityId] : undefined;
        const intType = this._config?.integration_type;
        const freshHours = intType === "solcast"
            ? freshState?.attributes?.detailedForecast
            : intType === "volcast"
                ? freshState?.attributes?.hours
                : intType === "forecast_solar"
                    ? undefined
                    : intType === "open_meteo_solar_forecast"
                        ? freshState?.attributes?.wh_period
                        : freshState?.attributes?.hours ?? freshState?.attributes?.detailedForecast;
        // Log which entity is being used and what the hours attribute looks like
        const hoursType = freshHours === undefined ? "missing"
            : freshHours === null ? "null"
                : Array.isArray(freshHours) ? `array[${freshHours.length}]`
                    : `${typeof freshHours}`;
        console.debug("[solar-forecast-card] popup →", row.entityId || "(no entity)", "| state:", freshState?.state ?? "n/a", "| hours:", hoursType);
        this._popup = { ...row, rawHoursAttr: freshHours ?? row.rawHoursAttr };
        this._popupVisible = false;
        // Single rAF lets Lit stamp the overlay into the DOM before we add .visible
        requestAnimationFrame(() => { this._popupVisible = true; });
    }
    _closePopup() {
        this._popupVisible = false;
        this._closeTimer = setTimeout(() => { this._popup = null; }, POPUP_CLOSE_MS);
    }
    // ── Formatting ────────────────────────────────────────────────────────────
    _dayLabel(date, isToday) {
        return isToday ? "Today" : DAY_NAMES[date.getDay()];
    }
    _dateLabel(date) {
        const d = String(date.getDate()).padStart(2, "0");
        const m = String(date.getMonth() + 1).padStart(2, "0");
        return this._config.date_format === "MM/DD" ? `${m}/${d}` : `${d}/${m}`;
    }
    _fullDateLabel(date, isToday) {
        const weekday = isToday ? "Today" : date.toLocaleDateString(undefined, { weekday: "long" });
        const dt = date.toLocaleDateString(undefined, { day: "numeric", month: "long" });
        return `${weekday} · ${dt}`;
    }
    _hourLabel(hour) {
        if (this._config?.time_format === "12h") {
            const period = hour < 12 ? "am" : "pm";
            const h = hour % 12 || 12; // 0 → 12, 13 → 1, etc.
            return `${h}${period}`;
        }
        return String(hour).padStart(2, "0") + ":00";
    }
    // ── Styles ────────────────────────────────────────────────────────────────
    static get styles() {
        return i$3 `
      :host {
        display: block;
      }

      ha-card {
        padding: 16px 12px 14px;
        overflow: hidden;
        box-sizing: border-box;
      }

      /* ── Header ──────────────────────────────────────────── */

      .card-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 18px;
        padding: 0 4px;
      }

      .header-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.05rem;
        font-weight: 500;
        color: var(--primary-text-color);
        flex: 1;
        min-width: 0;
        flex-wrap: wrap;
      }

      .header-title ha-icon {
        color: var(--state-active-color, #fbbf24);
        flex-shrink: 0;
      }

      .header-live {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2px;
        padding-top: 3px;
        white-space: nowrap;
      }

      .live-row {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.75rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
      }

      .live-label {
        font-weight: 700;
        color: var(--state-active-color, #fbbf24);
      }

      .live-week {
        font-size: 0.68rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        opacity: 0.72;
      }

      .week-label {
        font-weight: 600;
      }

      /* ── Placeholder ─────────────────────────────────────── */

      .placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 28px 0;
        gap: 10px;
        color: var(--secondary-text-color);
        text-align: center;
      }

      .placeholder ha-icon {
        --mdc-icon-size: 40px;
        color: var(--state-active-color, #fbbf24);
        opacity: 0.65;
      }

      .placeholder p {
        margin: 0;
        font-size: 0.88rem;
        line-height: 1.5;
      }

      /* ── 7-column grid ───────────────────────────────────── */

      .forecast-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
        min-width: 0;
      }

      /* ── 2-column grid (forecast.solar) ──────────────────── */

      .forecast-grid.two-day {
        grid-template-columns: repeat(2, minmax(0, 140px));
        justify-content: center;
        gap: 8px;
      }

      .forecast-grid.two-day .bar-bg,
      .forecast-grid.two-day .bar-forecast,
      .forecast-grid.two-day .bar-actual,
      .forecast-grid.two-day .bar-dotted {
        width: min(72px, 72%);
      }

      .two-day-note {
        text-align: center;
        font-size: 0.65rem;
        color: var(--secondary-text-color);
        opacity: 0.45;
        margin-top: 10px;
        padding: 0 4px 2px;
      }

      /* ── Column ──────────────────────────────────────────── */

      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 3px 5px;
        border-radius: 12px;
        gap: 3px;
        min-width: 0;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        transition: background 0.2s ease, transform 0.1s ease;
        outline: none;
      }

      .col:hover {
        background: rgba(251, 191, 36, 0.08);
      }

      .col:active {
        transform: scale(0.94);
      }

      .col.today {
        background: rgba(251, 191, 36, 0.10);
      }

      .col.today:hover {
        background: rgba(251, 191, 36, 0.16);
      }

      /* ── Value label ─────────────────────────────────────── */

      .col-value {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        min-height: 30px;
        width: 100%;
        text-align: center;
        pointer-events: none;
      }

      .value-num {
        font-size: 0.75rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        color: var(--primary-text-color);
        line-height: 1.15;
        white-space: nowrap;
      }

      .value-unit {
        font-size: 0.60rem;
        color: var(--secondary-text-color);
        line-height: 1.2;
      }

      .value-empty {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
        opacity: 0.4;
        line-height: 30px;
      }

      /* ── Bar area ────────────────────────────────────────── */

      .col-bar-wrap {
        position: relative;
        width: 100%;
        height: clamp(100px, 20vw, 160px);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        pointer-events: none;
      }

      .bar-bg {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(24px, 72%);
        height: 100%;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.07));
      }

      .bar-forecast,
      .bar-actual,
      .bar-dotted {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(24px, 72%);
        transition:
          height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1),
          bottom 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
      }

      /* ── Forecast bar — average (default, yellow/amber) ──────── */

      .bar-forecast {
        border-radius: 6px 6px 3px 3px;
        background: linear-gradient(
          to top,
          rgba(245, 158, 11, 0.92),
          rgba(254, 215, 86, 0.78)
        );
        box-shadow:
          0 0 0 1px rgba(251, 191, 36, 0.15),
          0 2px 10px 0 rgba(245, 158, 11, 0.28),
          0 0 16px 2px rgba(251, 191, 36, 0.18);
      }

      .bar-forecast.complete {
        background: linear-gradient(
          to top,
          rgba(245, 158, 11, 0.98),
          rgba(254, 215, 86, 0.88)
        );
        box-shadow:
          0 0 0 1px rgba(251, 191, 36, 0.25),
          0 2px 12px 0 rgba(245, 158, 11, 0.42),
          0 0 22px 4px rgba(251, 191, 36, 0.28);
      }

      /* ── Forecast bar — low (soft coral/rose) ────────────────── */

      .bar-forecast.low {
        background: linear-gradient(
          to top,
          rgba(220, 80, 80, 0.88),
          rgba(252, 160, 155, 0.74)
        );
        box-shadow:
          0 0 0 1px rgba(239, 68, 68, 0.14),
          0 2px 10px 0 rgba(220, 80, 80, 0.24),
          0 0 16px 2px rgba(239, 68, 68, 0.15);
      }

      .bar-forecast.complete.low {
        background: linear-gradient(
          to top,
          rgba(220, 80, 80, 0.98),
          rgba(252, 160, 155, 0.88)
        );
        box-shadow:
          0 0 0 1px rgba(239, 68, 68, 0.25),
          0 2px 12px 0 rgba(220, 80, 80, 0.40),
          0 0 22px 4px rgba(239, 68, 68, 0.26);
      }

      /* ── Forecast bar — high (green) ─────────────────────────── */

      .bar-forecast.high {
        background: linear-gradient(
          to top,
          rgba(22, 163, 74, 0.92),
          rgba(74, 222, 128, 0.78)
        );
        box-shadow:
          0 0 0 1px rgba(34, 197, 94, 0.15),
          0 2px 10px 0 rgba(22, 163, 74, 0.28),
          0 0 16px 2px rgba(34, 197, 94, 0.18);
      }

      .bar-forecast.complete.high {
        background: linear-gradient(
          to top,
          rgba(22, 163, 74, 0.98),
          rgba(74, 222, 128, 0.90)
        );
        box-shadow:
          0 0 0 1px rgba(34, 197, 94, 0.25),
          0 2px 12px 0 rgba(22, 163, 74, 0.42),
          0 0 22px 4px rgba(34, 197, 94, 0.28);
      }

      /* ── Actual generation bar — purple ──────────────────────── */

      .bar-actual {
        border-radius: 6px 6px 3px 3px;
        background: linear-gradient(
          to top,
          rgba(124, 58, 237, 0.90),
          rgba(196, 136, 255, 0.76)
        );
        box-shadow:
          0 0 0 1px rgba(139, 92, 246, 0.15),
          0 2px 10px 0 rgba(124, 58, 237, 0.28),
          0 0 16px 2px rgba(139, 92, 246, 0.18);
      }

      .bar-actual.below-dotted {
        border-radius: 0 0 3px 3px;
      }

      /* ── Stacked actual-arrays bar ───────────────────────────── */

      .bar-arrays-stack {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(24px, 72%);
        display: flex;
        flex-direction: column-reverse; /* first array sits at the bottom */
        border-radius: 6px 6px 3px 3px;
        overflow: hidden;
        transition:
          height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
      }

      .forecast-grid.two-day .bar-arrays-stack {
        width: min(72px, 72%);
      }

      .bar-array-segment {
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .array-label {
        font-size: 0.5rem;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.90);
        line-height: 1;
        pointer-events: none;
        user-select: none;
      }

      /*
       * Segment colour palette — 8 slots, cycles every 8 arrays.
       *
       * Base group (indices 0–3):
       *   0  purple      primary actual colour, matches existing bar-actual
       *   1  teal        cool green-blue
       *   2  indigo      deep blue-purple
       *   3  slate-blue  muted steel blue
       *
       * Extended group (indices 4–7) — lighter / shifted variations:
       *   4  violet      lighter purple
       *   5  emerald     deeper teal
       *   6  periwinkle  lighter indigo
       *   7  steel       darker slate
       */
      .seg-color-0 {
        background: linear-gradient(
          to top, rgba(124, 58, 237, 0.90), rgba(196, 136, 255, 0.76)
        );
      }
      .seg-color-1 {
        background: linear-gradient(
          to top, rgba(13, 148, 136, 0.90), rgba(45, 212, 191, 0.76)
        );
      }
      .seg-color-2 {
        background: linear-gradient(
          to top, rgba(79, 70, 229, 0.90), rgba(129, 140, 248, 0.76)
        );
      }
      .seg-color-3 {
        background: linear-gradient(
          to top, rgba(71, 107, 167, 0.90), rgba(119, 159, 207, 0.76)
        );
      }
      .seg-color-4 {
        background: linear-gradient(
          to top, rgba(139, 92, 246, 0.90), rgba(196, 180, 254, 0.76)
        );
      }
      .seg-color-5 {
        background: linear-gradient(
          to top, rgba(4, 120, 87, 0.90), rgba(52, 211, 153, 0.76)
        );
      }
      .seg-color-6 {
        background: linear-gradient(
          to top, rgba(99, 102, 241, 0.90), rgba(165, 180, 252, 0.76)
        );
      }
      .seg-color-7 {
        background: linear-gradient(
          to top, rgba(71, 85, 105, 0.90), rgba(100, 116, 139, 0.76)
        );
      }

      /* ── Dotted forecast remainder — tier-aware ──────────────── */

      .bar-dotted {
        border: 2px dashed rgba(245, 158, 11, 0.65);
        background: rgba(251, 191, 36, 0.07);
        box-sizing: border-box;
      }

      .bar-dotted.low {
        border-color: rgba(239, 68, 68, 0.58);
        background: rgba(239, 68, 68, 0.06);
      }

      .bar-dotted.high {
        border-color: rgba(34, 197, 94, 0.58);
        background: rgba(34, 197, 94, 0.06);
      }

      .bar-dotted.full    { border-radius: 6px; }
      .bar-dotted.partial { border-bottom: none; border-radius: 6px 6px 0 0; }

      /* ── Day label ───────────────────────────────────────── */

      .col-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
        text-align: center;
        width: 100%;
        min-width: 0;
        pointer-events: none;
      }

      .day-name {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--primary-text-color);
        line-height: 1.25;
        white-space: nowrap;
      }

      .col.today .day-name {
        font-weight: 700;
        color: var(--warning-color, #f59e0b);
      }

      .day-date {
        font-size: 0.65rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        white-space: nowrap;
      }

      /* ════════════════════════════════════════════════════════
         POPUP
         ════════════════════════════════════════════════════════ */

      .popup-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(0, 0, 0, 0.42);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        box-sizing: border-box;
        /* enter / exit */
        opacity: 0;
        pointer-events: none;
        transition: opacity ${POPUP_CLOSE_MS}ms ease;
      }

      .popup-overlay.visible {
        opacity: 1;
        pointer-events: auto;
      }

      /* ── Panel ───────────────────────────────────────────── */

      .popup-panel {
        position: relative;
        background: var(--ha-card-background, var(--card-background-color, #1c1c1e));
        border-radius: 20px;
        width: 100%;
        max-width: 400px;
        max-height: min(520px, calc(100dvh - 32px));
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow:
          0 32px 72px rgba(0, 0, 0, 0.32),
          0 8px 24px rgba(0, 0, 0, 0.18);
        /* enter: slide up + scale in */
        transform: translateY(32px) scale(0.95);
        opacity: 0;
        transition:
          transform ${POPUP_CLOSE_MS + 40}ms cubic-bezier(0.34, 1.28, 0.64, 1),
          opacity ${POPUP_CLOSE_MS}ms ease;
        will-change: transform, opacity;
      }

      .popup-overlay.visible .popup-panel {
        transform: translateY(0) scale(1);
        opacity: 1;
      }

      /* ── Header ──────────────────────────────────────────── */

      .popup-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 18px 16px 14px 20px;
        gap: 8px;
        border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
        flex-shrink: 0;
      }

      .popup-title {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
      }

      .popup-day-name {
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--primary-text-color);
        line-height: 1.2;
      }

      .popup-subtitle {
        font-size: 0.82rem;
        color: var(--secondary-text-color);
        display: flex;
        align-items: baseline;
        gap: 4px;
        flex-wrap: wrap;
      }

      .popup-total-kwh {
        font-size: 0.95rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        color: var(--warning-color, #f59e0b);
      }

      .popup-close {
        flex-shrink: 0;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.10));
        border: none;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s, color 0.15s;
        margin-top: -2px;
      }

      .popup-close:hover {
        background: var(--divider-color, rgba(128, 128, 128, 0.18));
        color: var(--primary-text-color);
      }

      .popup-close ha-icon {
        --mdc-icon-size: 18px;
      }

      /* ── Chart ───────────────────────────────────────────── */

      .chart-scroll {
        overflow-y: auto;
        overflow-x: hidden;
        padding: 14px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        /* Custom scrollbar — subtle */
        scrollbar-width: thin;
        scrollbar-color: rgba(128, 128, 128, 0.25) transparent;
      }

      .chart-scroll::-webkit-scrollbar { width: 4px; }
      .chart-scroll::-webkit-scrollbar-thumb {
        background: rgba(128, 128, 128, 0.25);
        border-radius: 2px;
      }

      .chart-no-data {
        text-align: center;
        padding: 32px 0;
        color: var(--secondary-text-color);
        font-size: 0.88rem;
        line-height: 1.5;
      }

      /* Grid: [hour label] [bar track] [value] */
      .chart-header,
      .chart-row {
        display: grid;
        grid-template-columns: 2.8rem 1fr 2.6rem;
        gap: 8px;
      }

      .chart-header {
        align-items: center;
        padding-bottom: 6px;
        margin-bottom: 2px;
        border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
      }

      .chart-header span {
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
        opacity: 0.7;
      }

      .chart-header .col-time  { text-align: right; }
      .chart-header .col-power { text-align: left; padding-left: 0; }
      .chart-header .col-kwh   { text-align: left; }

      .chart-row {
        align-items: center;
        height: 24px;
      }

      .chart-hour {
        font-size: 0.70rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        text-align: right;
        line-height: 1;
        opacity: 0.75;
      }

      .chart-bar-track {
        position: relative;
        height: 9px;
        border-radius: 5px;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.08));
        overflow: hidden;
      }

      .chart-bar-fill {
        position: absolute;
        inset: 0 auto 0 0;
        border-radius: 5px;
        background: linear-gradient(
          to right,
          rgba(245, 158, 11, 0.88),
          rgba(254, 215, 86, 0.76)
        );
        /* Bars animate in staggered via --delay set inline */
        animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
        animation-delay: var(--delay, 0ms);
      }

      .chart-bar-fill.peak {
        background: linear-gradient(
          to right,
          rgba(245, 158, 11, 1.0),
          rgba(254, 215, 86, 0.92)
        );
        box-shadow: 0 0 7px 1px rgba(245, 158, 11, 0.38);
      }

      @keyframes bar-in {
        from { width: 0 !important; }
      }

      .chart-val {
        font-size: 0.70rem;
        font-weight: 500;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        line-height: 1;
        text-align: left;
      }

      .chart-val.peak {
        color: var(--warning-color, #f59e0b);
        font-weight: 600;
      }
    `;
    }
    // ── Render ────────────────────────────────────────────────────────────────
    render() {
        if (!this._config)
            return A;
        const title = this._config.title ?? "Solar Forecast";
        const icon = this._config.icon ?? "mdi:solar-power";
        const hasEntities = this._config.forecast_entities.some(Boolean);
        const header = this._config.show_header ? b `
      <div class="card-header">
        <div class="header-title">
          <ha-icon icon=${icon}></ha-icon>
          ${title}
        </div>
        ${this._renderLive()}
      </div>
    ` : A;
        if (!hasEntities) {
            return b `
        <ha-card>
          ${header}
          <div class="placeholder">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            <p>No forecast entities configured.<br />Open the card editor to get started.</p>
          </div>
        </ha-card>
      `;
        }
        const rows = this._buildRows();
        const validRows = rows.filter((r) => r.entityId);
        const isTwoDay = this._config.integration_type === "forecast_solar" && validRows.length <= 2;
        const displayRows = isTwoDay ? validRows : rows;
        return b `
      <ha-card>
        ${header}
        <div class="forecast-grid ${isTwoDay ? "two-day" : ""}">
          ${displayRows.map((row) => this._renderCol(row))}
        </div>
        ${isTwoDay ? b `<div class="two-day-note">2-day forecast available</div>` : A}
      </ha-card>
      ${this._renderPopup()}
    `;
    }
    // ── Live badge ────────────────────────────────────────────────────────────
    _formatPower(watts) {
        if (watts < 10)
            return "0 W";
        if (watts < 1000)
            return `${Math.round(watts)} W`;
        return `${(watts / 1000).toFixed(1)} kW`;
    }
    _renderLive() {
        const cfg = this._config;
        // ── Live power / actual generation ────────────────────────────────────────
        const powerState = cfg.live_power_entity
            ? this.hass?.states[cfg.live_power_entity]
            : undefined;
        const powerRaw = parseFloat(powerState?.state ?? "");
        const powerUnit = powerState?.attributes?.unit_of_measurement ?? "W";
        const powerW = isFinite(powerRaw)
            ? (powerUnit.toLowerCase() === "kw" ? powerRaw * 1000 : powerRaw)
            : NaN;
        const actualState = cfg.today_actual_entity
            ? this.hass?.states[cfg.today_actual_entity]
            : undefined;
        const actualRawVal = parseFloat(actualState?.state ?? "");
        const actualRawUnit = actualState?.attributes?.unit_of_measurement?.toLowerCase();
        const actualKwh = isFinite(actualRawVal)
            ? (actualRawUnit === "wh" ? actualRawVal / 1000 : actualRawVal)
            : NaN;
        const hasPower = isFinite(powerW);
        const hasActual = isFinite(actualKwh);
        // ── Week total / daily average ────────────────────────────────────────────
        const validForecasts = cfg.forecast_entities
            .map((id) => (id ? parseFloat(this.hass?.states[id]?.state ?? "") : NaN))
            .filter((v) => isFinite(v));
        const weekTotal = validForecasts.reduce((s, v) => s + v, 0);
        const avgDay = validForecasts.length > 0 ? weekTotal / validForecasts.length : NaN;
        const hasWeek = validForecasts.length > 0;
        if (!hasPower && !hasActual && !hasWeek)
            return A;
        const liveParts = [];
        if (hasPower)
            liveParts.push(this._formatPower(powerW));
        if (hasActual)
            liveParts.push(actualKwh.toFixed(1) + " kWh");
        return b `
      <div class="header-live">
        ${hasPower || hasActual ? b `
          <div class="live-row">
            <span class="live-label">LIVE:</span>
            <span>${liveParts.join(" | ")}</span>
          </div>
        ` : A}
        ${hasWeek ? b `
          <div class="live-week">
            <span class="week-label">WEEK:</span>
            ${weekTotal.toFixed(1)} kWh | <span class="week-label">AVG:</span> ${avgDay.toFixed(1)} kWh/day
          </div>
        ` : A}
      </div>
    `;
    }
    // ── Popup actual-generation subtitle ────────────────────────────────────
    /**
     * Returns the actual-generation subtitle for the popup header.
     * Only shown for today's row; format depends on whether arrays are configured.
     *
     * - No arrays:  "<X.XX> kWh generated"
     * - Arrays:     "E: 4.2 kWh | W: 3.8 kWh | Total: 8.0 kWh"
     */
    _renderActualSubtitle(row) {
        if (!row.isToday)
            return A;
        const cfg = this._config;
        const hasArrays = (cfg.actual_arrays?.length ?? 0) > 0;
        if (hasArrays && row.actualArrays && row.actualArrays.length > 0) {
            // Per-array breakdown: label: X.X kWh for each, then total
            const sum = row.actualArrays.reduce((s, a) => s + a.kwh, 0);
            const arrayText = row.actualArrays
                .map((a) => `${a.label || "?"}: ${a.kwh.toFixed(1)} kWh`)
                .join(" | ");
            return b `
        <span class="popup-subtitle">
          ${arrayText} | <span class="popup-total-kwh">Total: ${sum.toFixed(1)} kWh</span>
        </span>
      `;
        }
        // No arrays configured — show the single total if available
        if (!hasArrays && row.actualKwh !== null) {
            return b `
        <span class="popup-subtitle">
          <span class="popup-total-kwh">${row.actualKwh.toFixed(2)}</span> kWh generated
        </span>
      `;
        }
        return A;
    }
    // ── Column ────────────────────────────────────────────────────────────────
    _renderCol(row) {
        const { forecastPct, actualPct, dottedPct, isComplete, isToday } = row;
        const tier = this._tier(row.forecastKwh);
        // Arrays that are currently producing (kwh > 0).
        // Used to decide stacked vs single-bar path.
        const visibleArrays = row.actualArrays?.filter((a) => a.kwh > 0) ?? [];
        // Only enter stacked mode when at least 2 arrays are producing —
        // a single active source stays on the existing single-colour bar path.
        const useStacked = visibleArrays.length >= 2;
        let bars;
        if (isToday && row.actualKwh !== null && row.forecastKwh !== null) {
            if (isComplete) {
                // Completion indicator — solid forecast bar regardless of arrays
                bars = b `<div class="bar-forecast complete ${tier}" style="height:${forecastPct}%"></div>`;
            }
            else if (useStacked) {
                // ── Stacked per-array segments ──────────────────────────────────────
                // Segments use flex-grow proportional to each array's kWh so they
                // automatically fill the container correctly without pixel maths.
                //
                // Label visibility: estimate the segment's pixel height from the
                // mid-range bar height (120 px ≈ clamp(100 px, 20 vw, 160 px)).
                // Only render the label when the estimated height is ≥ 16 px.
                const sumKwh = visibleArrays.reduce((s, a) => s + a.kwh, 0);
                const stackPx = (actualPct / 100) * 120; // estimated total stack height
                const hasDotted = dottedPct > 1;
                bars = b `
          <div class="bar-arrays-stack" style="height:${actualPct}%">
            ${visibleArrays.map((arr, i) => {
                    const segPx = sumKwh > 0 ? (arr.kwh / sumKwh) * stackPx : 0;
                    const showLabel = arr.label && segPx >= 16;
                    return b `
                <div class="bar-array-segment seg-color-${i % 8}" style="flex:${arr.kwh}">
                  ${showLabel ? b `<span class="array-label">${arr.label}</span>` : A}
                </div>
              `;
                })}
          </div>
          ${hasDotted ? b `
            <div class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
                 style="height:${dottedPct}%;bottom:${actualPct}%"></div>
          ` : A}
        `;
            }
            else {
                // ── Single-colour actual bar — default and single-source fallback ───
                const hasDotted = dottedPct > 1;
                bars = b `
          <div class="bar-actual ${hasDotted ? "below-dotted" : ""}"
               style="height:${actualPct}%"></div>
          ${hasDotted ? b `
            <div class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
                 style="height:${dottedPct}%;bottom:${actualPct}%"></div>
          ` : A}
        `;
            }
        }
        else {
            bars = b `<div class="bar-forecast ${tier}" style="height:${forecastPct}%"></div>`;
        }
        const valueLabel = row.forecastKwh !== null
            ? b `<span class="value-num">${row.forecastKwh.toFixed(1)}</span><span class="value-unit">kWh</span>`
            : b `<span class="value-empty">—</span>`;
        return b `
      <div
        class="col ${isToday ? "today" : ""}"
        role="button"
        tabindex="0"
        aria-label="${this._dayLabel(row.date, isToday)} ${this._dateLabel(row.date)}"
        @click=${() => this._openPopup(row)}
        @keydown=${(e) => (e.key === "Enter" || e.key === " ") && this._openPopup(row)}
      >
        <div class="col-value">${valueLabel}</div>
        <div class="col-bar-wrap">
          <div class="bar-bg"></div>
          ${bars}
        </div>
        <div class="col-label">
          <span class="day-name">${this._dayLabel(row.date, isToday)}</span>
          <span class="day-date">${this._dateLabel(row.date)}</span>
        </div>
      </div>
    `;
    }
    // ── Popup ─────────────────────────────────────────────────────────────────
    _renderPopup() {
        if (!this._popup)
            return A;
        const row = this._popup;
        const isForecastSolar = this._config?.integration_type === "forecast_solar";
        let chartContent;
        if (isForecastSolar) {
            chartContent = b `
        <div class="chart-no-data">
          <p>The selected forecast entities do not provide hourly forecast data.</p>
        </div>
      `;
        }
        else {
            const points = this._parseHours(row.rawHoursAttr, this._config?.integration_type);
            const peakKwh = points.length ? Math.max(...points.map((p) => p.kwh)) : 0;
            // Determine the reference ceiling for bar scaling
            const { inverter_max_kw, solar_max_kwp } = this._config;
            let maxRef;
            if (inverter_max_kw !== undefined && solar_max_kwp !== undefined) {
                maxRef = solar_max_kwp >= inverter_max_kw ? inverter_max_kw : solar_max_kwp;
            }
            else if (inverter_max_kw !== undefined) {
                maxRef = inverter_max_kw;
            }
            else if (solar_max_kwp !== undefined) {
                maxRef = solar_max_kwp;
            }
            else {
                maxRef = peakKwh;
            }
            chartContent = this._renderHourlyChart(points, peakKwh, maxRef);
        }
        return b `
      <div
        class="popup-overlay ${this._popupVisible ? "visible" : ""}"
        @click=${this._closePopup}
      >
        <div class="popup-panel" @click=${(e) => e.stopPropagation()}>

          <div class="popup-header">
            <div class="popup-title">
              <span class="popup-day-name">
                ${this._fullDateLabel(row.date, row.isToday)}
              </span>
              <span class="popup-subtitle">
                ${row.forecastKwh !== null
            ? b `<span class="popup-total-kwh">${row.forecastKwh.toFixed(2)}</span> kWh forecast`
            : b `No forecast data`}
              </span>
              ${this._renderActualSubtitle(row)}
            </div>
            <button
              class="popup-close"
              aria-label="Close"
              @click=${this._closePopup}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>

          <div class="chart-scroll">
            ${chartContent}
          </div>

        </div>
      </div>
    `;
    }
    _renderHourlyChart(points, peakKwh, maxRef) {
        if (points.length === 0) {
            return b `
        <div class="chart-no-data">
          <p>No hourly data available for this day.</p>
        </div>
      `;
        }
        return [
            b `
        <div class="chart-header">
          <span class="col-time">Time</span>
          <span class="col-power">Power</span>
          <span class="col-kwh">kWh</span>
        </div>
      `,
            ...points.map((pt, i) => {
                const pct = maxRef > 0 ? Math.min((pt.kwh / maxRef) * 100, 100) : 0;
                const isPeak = pt.kwh === peakKwh && peakKwh > 0;
                // Stagger: 20ms base + 18ms per row, capped at 300ms
                const delay = Math.min(20 + i * 18, 300);
                return b `
        <div class="chart-row">
          <span class="chart-hour">${this._hourLabel(pt.hour)}</span>
          <div class="chart-bar-track">
            <div
              class="chart-bar-fill ${isPeak ? "peak" : ""}"
              style="width:${pct.toFixed(1)}%;--delay:${delay}ms"
            ></div>
          </div>
          <span class="chart-val ${isPeak ? "peak" : ""}">
            ${pt.kwh.toFixed(2)}
          </span>
        </div>
      `;
            }),
        ];
    }
};
__decorate([
    n({ attribute: false })
], SolarForecastCard.prototype, "hass", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_config", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_popup", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_popupVisible", void 0);
SolarForecastCard = __decorate([
    t("solar-forecast-card")
], SolarForecastCard);
window.customCards = window.customCards ?? [];
window.customCards.push({
    type: "solar-forecast-card",
    name: "Solar Forecast Card",
    description: "Daily solar energy forecast with hourly breakdown support.",
    preview: false,
});

export { SolarForecastCard };
