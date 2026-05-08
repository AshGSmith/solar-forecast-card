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
const t$3=globalThis,e$3=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$4 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$4("string"==typeof t?t:t+"",void 0,s$2),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$4(o,t,s$2)},S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$2,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$4,getPrototypeOf:n$3}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$4(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$2(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$3(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$3=t=>t,s$1=t$2.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$3=`lit$${Math.random().toFixed(9).slice(2)}$`,n$2="?"+o$3,r$2=`<${n$2}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$2:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$3+x):s+o$3+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$3)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$3),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$2)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$3,t+1));)d.push({type:7,index:l}),t+=o$3.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$3(t).nextSibling;i$3(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$2.litHtmlPolyfillSupport;B?.(S,k),(t$2.litHtmlVersions??=[]).push("3.3.2");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$2 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$2._$litElement$=true,i$2["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$2});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$2});(s.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{ void 0!==o?o.addInitializer(()=>{customElements.define(t,e);}):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r$1=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,true,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,true,r);}}throw Error("Unsupported decorator location: "+n)};function n$1(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n$1({...r,state:true,attribute:false})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="important",i=" !"+n,o=e(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||t$1.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e;}}return E}});

var af = {
  "day": {
    "today": "Vandag",
    "tomorrow": "Môre",
    "sunday_short": "So",
    "monday_short": "Ma",
    "tuesday_short": "Di",
    "wednesday_short": "Wo",
    "thursday_short": "Do",
    "friday_short": "Vr",
    "saturday_short": "Sa"
  },
  "card": {
    "defaultTitle": "Sonvoorspelling",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "REGSTREEKS:",
      "exportRate": "UITVOERTARIEF:",
      "nextHour": "+1 U:",
      "left": "OOR:",
      "week": "WEEK:",
      "avg": "GEM:",
      "total": "Totaal",
      "p10": "P10",
      "forecast": "voorspelling",
      "generated": "opgewek",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ar = {
  "day": {
    "today": "اليوم",
    "tomorrow": "غدًا",
    "sunday_short": "الأحد",
    "monday_short": "الاثنين",
    "tuesday_short": "الثلاثاء",
    "wednesday_short": "الأربعاء",
    "thursday_short": "الخميس",
    "friday_short": "الجمعة",
    "saturday_short": "السبت"
  },
  "card": {
    "defaultTitle": "توقع الطاقة الشمسية",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "مباشر:",
      "exportRate": "تعرفة التصدير:",
      "nextHour": "+1 س:",
      "left": "المتبقي:",
      "week": "الأسبوع:",
      "avg": "متوسط:",
      "total": "الإجمالي",
      "p10": "P10",
      "forecast": "توقع",
      "generated": "مُولّد",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var bg = {
  "day": {
    "today": "Днес",
    "tomorrow": "Утре",
    "sunday_short": "нд",
    "monday_short": "пн",
    "tuesday_short": "вт",
    "wednesday_short": "ср",
    "thursday_short": "чт",
    "friday_short": "пт",
    "saturday_short": "сб"
  },
  "card": {
    "defaultTitle": "Слънчева прогноза",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "НА ЖИВО:",
      "exportRate": "ТАРИФА ИЗНОС:",
      "nextHour": "+1 Ч:",
      "left": "ОСТАВА:",
      "week": "СЕДМИЦА:",
      "avg": "СРЕДНО:",
      "total": "Общо",
      "p10": "P10",
      "forecast": "прогноза",
      "generated": "произведено",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var bn = {
  "day": {
    "today": "আজ",
    "tomorrow": "আগামীকাল",
    "sunday_short": "রবি",
    "monday_short": "সোম",
    "tuesday_short": "মঙ্গল",
    "wednesday_short": "বুধ",
    "thursday_short": "বৃহস্পতি",
    "friday_short": "শুক্র",
    "saturday_short": "শনি"
  },
  "card": {
    "defaultTitle": "সৌর পূর্বাভাস",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "লাইভ:",
      "exportRate": "রপ্তানি হার:",
      "nextHour": "+1 ঘ:",
      "left": "বাকি:",
      "week": "সপ্তাহ:",
      "avg": "গড়:",
      "total": "মোট",
      "p10": "P10",
      "forecast": "পূর্বাভাস",
      "generated": "উৎপন্ন",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var bs = {
  "day": {
    "today": "Danas",
    "tomorrow": "Sutra",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "uto",
    "wednesday_short": "sri",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sub"
  },
  "card": {
    "defaultTitle": "Solarna prognoza",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "UŽIVO:",
      "exportRate": "TARIFA IZVOZA:",
      "nextHour": "+1 H:",
      "left": "OSTALO:",
      "week": "SEDMICA:",
      "avg": "PROSJEK:",
      "total": "Ukupno",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "proizvedeno",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ca = {
  "day": {
    "today": "Avui",
    "tomorrow": "Demà",
    "sunday_short": "dg",
    "monday_short": "dl",
    "tuesday_short": "dt",
    "wednesday_short": "dc",
    "thursday_short": "dj",
    "friday_short": "dv",
    "saturday_short": "ds"
  },
  "card": {
    "defaultTitle": "Previsió solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN DIRECTE:",
      "exportRate": "TARIFA EXPORT:",
      "nextHour": "+1 H:",
      "left": "RESTANT:",
      "week": "SETMANA:",
      "avg": "MITJANA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsió",
      "generated": "generat",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var cs = {
  "day": {
    "today": "Dnes",
    "tomorrow": "Zítra",
    "sunday_short": "ne",
    "monday_short": "po",
    "tuesday_short": "út",
    "wednesday_short": "st",
    "thursday_short": "čt",
    "friday_short": "pá",
    "saturday_short": "so"
  },
  "card": {
    "defaultTitle": "Solární předpověď",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ŽIVĚ:",
      "exportRate": "VÝKUPNÍ TARIF:",
      "nextHour": "+1 H:",
      "left": "ZBÝVÁ:",
      "week": "TÝDEN:",
      "avg": "PRŮM.:",
      "total": "Celkem",
      "p10": "P10",
      "forecast": "předpověď",
      "generated": "vyrobeno",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var cy = {
  "day": {
    "today": "Heddiw",
    "tomorrow": "Yfory",
    "sunday_short": "Sul",
    "monday_short": "Llun",
    "tuesday_short": "Maw",
    "wednesday_short": "Mer",
    "thursday_short": "Iau",
    "friday_short": "Gwe",
    "saturday_short": "Sad"
  },
  "card": {
    "defaultTitle": "Rhagolwg solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "BYW:",
      "exportRate": "CYFRADD ALLFORIO:",
      "nextHour": "+1 A:",
      "left": "AR ÔL:",
      "week": "WYTHNOS:",
      "avg": "CYF:",
      "total": "Cyfanswm",
      "p10": "P10",
      "forecast": "rhagolwg",
      "generated": "cynhyrchwyd",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var da = {
  "day": {
    "today": "I dag",
    "tomorrow": "I morgen",
    "sunday_short": "søn",
    "monday_short": "man",
    "tuesday_short": "tirs",
    "wednesday_short": "ons",
    "thursday_short": "tors",
    "friday_short": "fre",
    "saturday_short": "lør"
  },
  "card": {
    "defaultTitle": "Solprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARIF:",
      "nextHour": "+1 T:",
      "left": "TILBAGE:",
      "week": "UGE:",
      "avg": "GENNEM.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "produceret",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var de = {
  "day": {
    "today": "Heute",
    "tomorrow": "Morgen",
    "sunday_short": "So",
    "monday_short": "Mo",
    "tuesday_short": "Di",
    "wednesday_short": "Mi",
    "thursday_short": "Do",
    "friday_short": "Fr",
    "saturday_short": "Sa"
  },
  "card": {
    "defaultTitle": "Solarprognose",
    "placeholder": "Keine Prognose-Entitäten konfiguriert.",
    "placeholderAction": "Öffne den Karteneditor, um zu beginnen.",
    "twoDayNote": "2-Tage-Prognose verfügbar",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EINSPEISEVERGÜTUNG:",
      "nextHour": "+1 STD:",
      "left": "REST:",
      "week": "WOCHE:",
      "avg": "Ø:",
      "total": "Gesamt",
      "p10": "P10",
      "forecast": "Prognose",
      "generated": "erzeugt",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} Einspeiselimit"
    },
    "days": {
      "sun": "So",
      "mon": "Mo",
      "tue": "Di",
      "wed": "Mi",
      "thu": "Do",
      "fri": "Fr",
      "sat": "Sa",
      "today": "Heute",
      "tomorrow": "Morgen",
      "day3": "Tag 3",
      "day4": "Tag 4",
      "day5": "Tag 5",
      "day6": "Tag 6",
      "day7": "Tag 7"
    },
    "popup": {
      "close": "Schließen",
      "noForecastData": "Keine Prognosedaten",
      "noHourlyData": "Keine stündlichen Daten für diesen Tag verfügbar.",
      "integrationNoHourlyData": "Die ausgewählten Prognose-Entitäten stellen keine stündlichen Prognosedaten bereit.",
      "chart": {
        "time": "Zeit",
        "power": "Leistung",
        "kwh": "kWh",
        "forecastShort": "Prog.",
        "actualShort": "Ist"
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Ungültige Konfiguration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/Tag"
    }
  },
  "editor": {
    "labels": {
      "title": "Titel (optional)",
      "icon": "Header-Symbol (optional, z. B. mdi:solar-power)",
      "show_header": "Header anzeigen",
      "display_estimate10": "Estimate10-Prognosewerte anzeigen",
      "device_id": "Prognosegerät",
      "integration_type": "Integrationstyp",
      "forecast_entity_0": "Tag 1 - Heute",
      "forecast_entity_1": "Tag 2 - Morgen",
      "forecast_entity_2": "Tag 3",
      "forecast_entity_3": "Tag 4",
      "forecast_entity_4": "Tag 5",
      "forecast_entity_5": "Tag 6",
      "forecast_entity_6": "Tag 7",
      "export_rate_entity": "Aktuelle Einspeisevergütung-Entität",
      "live_power_entity": "Live-Leistung (optional, kW-Sensor)",
      "today_actual_entity": "Heutige tatsächliche Erzeugung (optional)",
      "next_hour_entity": "+1 STD Prognose (optional, überschreibt automatisch abgeleiteten Wert)",
      "remaining_today_entity": "REST / verbleibend heute (optional, überschreibt automatisch abgeleiteten Wert)",
      "date_format": "Datumsformat",
      "time_format": "Zeitformat (stündliches Popup)",
      "show_hourly_as_main": "Stündliche Prognose als Hauptkarte anzeigen",
      "inverter_max_kw": "Max. Wechselrichterleistung (kW)",
      "solar_max_kwp": "Größe der Solaranlage (kWp)",
      "low_threshold": "Niedriger Schwellenwert (kWh)",
      "high_threshold": "Hoher Schwellenwert (kWh)",
      "desktop_text_scale": "Desktop-Textskalierung",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Einspeiselimit (kW)"
    },
    "options": {
      "autoDetect": "Automatisch erkennen",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "TT/MM  (z. B. 15/04)",
      "dateMmDd": "MM/TT  (z. B. 04/15)",
      "time24h": "24 h  (z. B. 17:00)",
      "time12h": "12 h  (z. B. 5pm)"
    },
    "sections": {
      "integrationType": "Integrationstyp",
      "dailyForecastEntities": "Tägliche Prognose-Entitäten",
      "liveData": "Live-Daten",
      "actualGenerationArrays": "Tatsächliche Erzeugungs-Arrays",
      "systemParameters": "Systemparameter",
      "energyProvider": "Energieanbieter",
      "colourThresholds": "Farbschwellenwerte",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Empfohlen: Die Auswahl eines Geräts konfiguriert die Karte automatisch",
      "estimate10": "Estimate10 anzeigen gilt nur für den Integrationstyp Solcast",
      "integrationType": "Wird automatisch gesetzt, wenn oben ein Prognosegerät ausgewählt ist. Nur überschreiben, wenn Prognose-Entitäten manuell ohne Gerät konfiguriert werden.",
      "liveData": "+1 STD und REST werden, wenn möglich, automatisch erkannt oder abgeleitet. Setze diese Werte manuell, um sie zu überschreiben oder einen eigenen Sensor zu verwenden.",
      "actualArrays": "Optional: Konfiguriere einzelne Array-Sensoren, um eine gestapelte Aufschlüsselung auf dem heutigen Balken anzuzeigen. Jedes Label ist ein einzelnes Zeichen im Segment (z. B. N, S, O).",
      "desktopTextScale": "Desktop-Textskalierung: gilt nur auf breiteren Bildschirmen (≥ 768 px). Die mobile Größe bleibt unverändert.",
      "hourlyAsMain": "Zeigt die stündliche Prognose direkt auf der Karte statt der täglichen Prognosebalken an.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Das Ändern des Geräts überschreibt manuell konfigurierte Entitäten nicht."
    },
    "arrays": {
      "entity": "Array-Entität",
      "label": "Label (1 Zeichen)",
      "placeholder": "O",
      "hint": "Balken & Popup",
      "remove": "Entfernen",
      "add": "Array hinzufügen"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Tägliche Solarenergieprognose mit Unterstützung für stündliche Aufschlüsselung."
  }
}
;

var el = {
  "day": {
    "today": "Σήμερα",
    "tomorrow": "Αύριο",
    "sunday_short": "Κυρ",
    "monday_short": "Δευ",
    "tuesday_short": "Τρί",
    "wednesday_short": "Τετ",
    "thursday_short": "Πέμ",
    "friday_short": "Παρ",
    "saturday_short": "Σάβ"
  },
  "card": {
    "defaultTitle": "Ηλιακή πρόγνωση",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ΖΩΝΤΑΝΑ:",
      "exportRate": "ΤΙΜΗ ΕΞΑΓΩΓΗΣ:",
      "nextHour": "+1 Ω:",
      "left": "ΥΠΟΛ.:",
      "week": "ΕΒΔΟΜΑΔΑ:",
      "avg": "Μ.Ο.:",
      "total": "Σύνολο",
      "p10": "P10",
      "forecast": "πρόγνωση",
      "generated": "παράχθηκε",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var en = {
  "day": {
    "today": "Today",
    "tomorrow": "Tomorrow",
    "sunday_short": "Sun",
    "monday_short": "Mon",
    "tuesday_short": "Tue",
    "wednesday_short": "Wed",
    "thursday_short": "Thu",
    "friday_short": "Fri",
    "saturday_short": "Sat"
  },
  "card": {
    "defaultTitle": "Solar Forecast",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORT RATE:",
      "nextHour": "+1HR:",
      "left": "LEFT:",
      "week": "WEEK:",
      "avg": "AVG:",
      "total": "Total",
      "p10": "P10",
      "forecast": "forecast",
      "generated": "generated",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "export_limit_kw": "Export Limit (kW)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var en_GB = {
  "day": {
    "today": "Today",
    "tomorrow": "Tomorrow",
    "sunday_short": "Sun",
    "monday_short": "Mon",
    "tuesday_short": "Tue",
    "wednesday_short": "Wed",
    "thursday_short": "Thu",
    "friday_short": "Fri",
    "saturday_short": "Sat"
  },
  "card": {
    "defaultTitle": "Solar Forecast",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORT RATE:",
      "nextHour": "+1HR:",
      "left": "LEFT:",
      "week": "WEEK:",
      "avg": "AVG:",
      "total": "Total",
      "p10": "P10",
      "forecast": "forecast",
      "generated": "generated",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var eo = {
  "day": {
    "today": "Hodiaŭ",
    "tomorrow": "Morgaŭ",
    "sunday_short": "di",
    "monday_short": "lu",
    "tuesday_short": "ma",
    "wednesday_short": "me",
    "thursday_short": "ĵa",
    "friday_short": "ve",
    "saturday_short": "sa"
  },
  "card": {
    "defaultTitle": "Suna prognozo",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "VIVE:",
      "exportRate": "EKSPORTA TARIFO:",
      "nextHour": "+1 H:",
      "left": "RESTAS:",
      "week": "SEMAJNO:",
      "avg": "MEZ.:",
      "total": "Entute",
      "p10": "P10",
      "forecast": "prognozo",
      "generated": "produktita",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var es = {
  "day": {
    "today": "Hoy",
    "tomorrow": "Mañana",
    "sunday_short": "dom",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mié",
    "thursday_short": "jue",
    "friday_short": "vie",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Pronóstico solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "PROM.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsión",
      "generated": "generado",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var es_419 = {
  "day": {
    "today": "Hoy",
    "tomorrow": "Mañana",
    "sunday_short": "dom",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mié",
    "thursday_short": "jue",
    "friday_short": "vie",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Pronóstico solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "PROM.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "pronóstico",
      "generated": "generado",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var et = {
  "day": {
    "today": "Täna",
    "tomorrow": "Homme",
    "sunday_short": "P",
    "monday_short": "E",
    "tuesday_short": "T",
    "wednesday_short": "K",
    "thursday_short": "N",
    "friday_short": "R",
    "saturday_short": "L"
  },
  "card": {
    "defaultTitle": "Päikeseprognoos",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "OTSE:",
      "exportRate": "MÜÜGITARIIF:",
      "nextHour": "+1 H:",
      "left": "JÄÄNUD:",
      "week": "NÄDAL:",
      "avg": "KESKM.:",
      "total": "Kokku",
      "p10": "P10",
      "forecast": "prognoos",
      "generated": "toodetud",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var eu = {
  "day": {
    "today": "Gaur",
    "tomorrow": "Bihar",
    "sunday_short": "ig",
    "monday_short": "al",
    "tuesday_short": "ar",
    "wednesday_short": "az",
    "thursday_short": "og",
    "friday_short": "or",
    "saturday_short": "lr"
  },
  "card": {
    "defaultTitle": "Eguzki iragarpena",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ZUZENEAN:",
      "exportRate": "ESPORTAZIO TARIFA:",
      "nextHour": "+1 H:",
      "left": "GERATZEN:",
      "week": "ASTEA:",
      "avg": "BB:",
      "total": "Guztira",
      "p10": "P10",
      "forecast": "iragarpena",
      "generated": "sortua",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fa = {
  "day": {
    "today": "امروز",
    "tomorrow": "فردا",
    "sunday_short": "یکشنبه",
    "monday_short": "دوشنبه",
    "tuesday_short": "سه‌شنبه",
    "wednesday_short": "چهارشنبه",
    "thursday_short": "پنجشنبه",
    "friday_short": "جمعه",
    "saturday_short": "شنبه"
  },
  "card": {
    "defaultTitle": "پیش‌بینی خورشیدی",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "زنده:",
      "exportRate": "نرخ فروش:",
      "nextHour": "+1 س:",
      "left": "باقی‌مانده:",
      "week": "هفته:",
      "avg": "میانگین:",
      "total": "مجموع",
      "p10": "P10",
      "forecast": "پیش‌بینی",
      "generated": "تولیدشده",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fi = {
  "day": {
    "today": "Tänään",
    "tomorrow": "Huomenna",
    "sunday_short": "su",
    "monday_short": "ma",
    "tuesday_short": "ti",
    "wednesday_short": "ke",
    "thursday_short": "to",
    "friday_short": "pe",
    "saturday_short": "la"
  },
  "card": {
    "defaultTitle": "Aurinkoennuste",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "MYYNTIHINTA:",
      "nextHour": "+1 H:",
      "left": "JÄLJELLÄ:",
      "week": "VIIKKO:",
      "avg": "KA:",
      "total": "Yhteensä",
      "p10": "P10",
      "forecast": "ennuste",
      "generated": "tuotettu",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fy = {
  "day": {
    "today": "Hjoed",
    "tomorrow": "Moarn",
    "sunday_short": "si",
    "monday_short": "mo",
    "tuesday_short": "ti",
    "wednesday_short": "wo",
    "thursday_short": "to",
    "friday_short": "fr",
    "saturday_short": "so"
  },
  "card": {
    "defaultTitle": "Sinnefoarsizzing",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARYF:",
      "nextHour": "+1 O:",
      "left": "OER:",
      "week": "WIKE:",
      "avg": "GEM.:",
      "total": "Totaal",
      "p10": "P10",
      "forecast": "foarsizzing",
      "generated": "opwekt",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var fr = {
  "day": {
    "today": "Aujourd’hui",
    "tomorrow": "Demain",
    "sunday_short": "dim",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mer",
    "thursday_short": "jeu",
    "friday_short": "ven",
    "saturday_short": "sam"
  },
  "card": {
    "defaultTitle": "Prévision solaire",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "DIRECT :",
      "exportRate": "TARIF EXPORT :",
      "nextHour": "+1 H :",
      "left": "RESTE :",
      "week": "SEMAINE :",
      "avg": "MOY :",
      "total": "Total",
      "p10": "P10",
      "forecast": "prévu",
      "generated": "produit",
      "exportLimitShort": "Limite",
      "exportLimitTooltip": "> {limit} {unit} limite d'export"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Aujourd'hui",
      "tomorrow": "Demain",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Fermer",
      "noForecastData": "No forecast data",
      "noHourlyData": "Aucune donnée horaire disponible pour ce jour.",
      "integrationNoHourlyData": "Les entités de prévision sélectionnées ne fournissent pas de données horaires.",
      "chart": {
        "time": "Heure",
        "power": "Puissance",
        "kwh": "kWh",
        "forecastShort": "Prév.",
        "actualShort": "Réel"
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Afficher la prévision horaire comme carte principale",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Limite d'export (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "JJ/MM  (ex. 15/04)",
      "dateMmDd": "MM/JJ  (ex. 04/15)",
      "time24h": "24 h  (ex. 17:00)",
      "time12h": "12 h  (ex. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Affiche la prévision horaire directement sur la carte au lieu des barres de prévision journalière.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ga = {
  "day": {
    "today": "Inniu",
    "tomorrow": "Amárach",
    "sunday_short": "Domh",
    "monday_short": "Luan",
    "tuesday_short": "Máirt",
    "wednesday_short": "Céad",
    "thursday_short": "Déar",
    "friday_short": "Aoine",
    "saturday_short": "Sath"
  },
  "card": {
    "defaultTitle": "Réamhaisnéis ghréine",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "BEO:",
      "exportRate": "RÁTA EASPÓRT.:",
      "nextHour": "+1 U:",
      "left": "FÁGTHA:",
      "week": "SEACHTAIN:",
      "avg": "MEÁN:",
      "total": "Iomlán",
      "p10": "P10",
      "forecast": "réamhaisnéis",
      "generated": "giniúna",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var gl = {
  "day": {
    "today": "Hoxe",
    "tomorrow": "Mañá",
    "sunday_short": "dom",
    "monday_short": "luns",
    "tuesday_short": "mar",
    "wednesday_short": "mér",
    "thursday_short": "xov",
    "friday_short": "ven",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Previsión solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "EN DIRECTO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "MEDIA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsión",
      "generated": "xerado",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var gsw = {
  "day": {
    "today": "Hüt",
    "tomorrow": "Morn",
    "sunday_short": "Su",
    "monday_short": "Mä",
    "tuesday_short": "Zi",
    "wednesday_short": "Mi",
    "thursday_short": "Du",
    "friday_short": "Fr",
    "saturday_short": "Sa"
  },
  "card": {
    "defaultTitle": "Solarprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "IISPIISIG:",
      "nextHour": "+1 STD:",
      "left": "REST:",
      "week": "WUCHE:",
      "avg": "Ø:",
      "total": "Total",
      "p10": "P10",
      "forecast": "Prognose",
      "generated": "erzügt",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var he = {
  "day": {
    "today": "היום",
    "tomorrow": "מחר",
    "sunday_short": "יום א׳",
    "monday_short": "יום ב׳",
    "tuesday_short": "יום ג׳",
    "wednesday_short": "יום ד׳",
    "thursday_short": "יום ה׳",
    "friday_short": "יום ו׳",
    "saturday_short": "שבת"
  },
  "card": {
    "defaultTitle": "תחזית סולארית",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "חי:",
      "exportRate": "תעריף ייצוא:",
      "nextHour": "+1 ש:",
      "left": "נותר:",
      "week": "שבוע:",
      "avg": "ממוצע:",
      "total": "סה״כ",
      "p10": "P10",
      "forecast": "תחזית",
      "generated": "יוצר",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hi = {
  "day": {
    "today": "आज",
    "tomorrow": "कल",
    "sunday_short": "रवि",
    "monday_short": "सोम",
    "tuesday_short": "मंगल",
    "wednesday_short": "बुध",
    "thursday_short": "गुरु",
    "friday_short": "शुक्र",
    "saturday_short": "शनि"
  },
  "card": {
    "defaultTitle": "सौर पूर्वानुमान",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "लाइव:",
      "exportRate": "निर्यात दर:",
      "nextHour": "+1 घं:",
      "left": "शेष:",
      "week": "सप्ताह:",
      "avg": "औसत:",
      "total": "कुल",
      "p10": "P10",
      "forecast": "पूर्वानुमान",
      "generated": "उत्पन्न",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hr = {
  "day": {
    "today": "Danas",
    "tomorrow": "Sutra",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "uto",
    "wednesday_short": "sri",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sub"
  },
  "card": {
    "defaultTitle": "Solarna prognoza",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "UŽIVO:",
      "exportRate": "IZVOZNA TARIFA:",
      "nextHour": "+1 H:",
      "left": "PREOSTALO:",
      "week": "TJEDAN:",
      "avg": "PROSJEK:",
      "total": "Ukupno",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "proizvedeno",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hu = {
  "day": {
    "today": "Ma",
    "tomorrow": "Holnap",
    "sunday_short": "V",
    "monday_short": "H",
    "tuesday_short": "K",
    "wednesday_short": "Sze",
    "thursday_short": "Cs",
    "friday_short": "P",
    "saturday_short": "Szo"
  },
  "card": {
    "defaultTitle": "Napelem előrejelzés",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ÉLŐ:",
      "exportRate": "BETÁPL. TARIFA:",
      "nextHour": "+1 Ó:",
      "left": "MARAD:",
      "week": "HÉT:",
      "avg": "ÁTL.:",
      "total": "Összesen",
      "p10": "P10",
      "forecast": "előrejelzés",
      "generated": "termelt",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var hy = {
  "day": {
    "today": "Այսօր",
    "tomorrow": "Վաղը",
    "sunday_short": "կիր",
    "monday_short": "երկ",
    "tuesday_short": "երք",
    "wednesday_short": "չրք",
    "thursday_short": "հնգ",
    "friday_short": "ուր",
    "saturday_short": "շբթ"
  },
  "card": {
    "defaultTitle": "Արևային կանխատեսում",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ՈՒՂԻՂ:",
      "exportRate": "ԱՐՏԱՀԱՆՄԱՆ ՍԱԿԱԳԻՆ:",
      "nextHour": "+1 Ժ:",
      "left": "ՄՆԱՑԵԼ Է:",
      "week": "ՇԱԲԱԹ:",
      "avg": "ՄԻՋ.:",
      "total": "Ընդամենը",
      "p10": "P10",
      "forecast": "կանխատեսում",
      "generated": "արտադրված",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var id = {
  "day": {
    "today": "Hari ini",
    "tomorrow": "Besok",
    "sunday_short": "Min",
    "monday_short": "Sen",
    "tuesday_short": "Sel",
    "wednesday_short": "Rab",
    "thursday_short": "Kam",
    "friday_short": "Jum",
    "saturday_short": "Sab"
  },
  "card": {
    "defaultTitle": "Prakiraan Surya",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LANGSUNG:",
      "exportRate": "TARIF EKSPOR:",
      "nextHour": "+1 JAM:",
      "left": "SISA:",
      "week": "MINGGU:",
      "avg": "RATA2:",
      "total": "Total",
      "p10": "P10",
      "forecast": "prakiraan",
      "generated": "dihasilkan",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var it = {
  "day": {
    "today": "Oggi",
    "tomorrow": "Domani",
    "sunday_short": "dom",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mer",
    "thursday_short": "gio",
    "friday_short": "ven",
    "saturday_short": "sab"
  },
  "card": {
    "defaultTitle": "Previsione solare",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TARIFFA EXPORT:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SETTIMANA:",
      "avg": "MEDIA:",
      "total": "Totale",
      "p10": "P10",
      "forecast": "previsione",
      "generated": "prodotto",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var is = {
  "day": {
    "today": "Í dag",
    "tomorrow": "Á morgun",
    "sunday_short": "sun",
    "monday_short": "mán",
    "tuesday_short": "þri",
    "wednesday_short": "mið",
    "thursday_short": "fim",
    "friday_short": "fös",
    "saturday_short": "lau"
  },
  "card": {
    "defaultTitle": "Sólarspá",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "Í BEINNI:",
      "exportRate": "ÚTFLUTNINGSGJALD:",
      "nextHour": "+1 KLST:",
      "left": "EFTIR:",
      "week": "VIKA:",
      "avg": "MEÐALT.:",
      "total": "Samtals",
      "p10": "P10",
      "forecast": "spá",
      "generated": "framleitt",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ja = {
  "day": {
    "today": "今日",
    "tomorrow": "明日",
    "sunday_short": "日",
    "monday_short": "月",
    "tuesday_short": "火",
    "wednesday_short": "水",
    "thursday_short": "木",
    "friday_short": "金",
    "saturday_short": "土"
  },
  "card": {
    "defaultTitle": "太陽光予測",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ライブ:",
      "exportRate": "売電単価:",
      "nextHour": "+1時間:",
      "left": "残り:",
      "week": "週:",
      "avg": "平均:",
      "total": "合計",
      "p10": "P10",
      "forecast": "予測",
      "generated": "発電済み",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ka = {
  "day": {
    "today": "დღეს",
    "tomorrow": "ხვალ",
    "sunday_short": "კვი",
    "monday_short": "ორშ",
    "tuesday_short": "სამ",
    "wednesday_short": "ოთხ",
    "thursday_short": "ხუთ",
    "friday_short": "პარ",
    "saturday_short": "შაბ"
  },
  "card": {
    "defaultTitle": "მზის პროგნოზი",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "ექსპორტის ტარიფი:",
      "nextHour": "+1 სთ:",
      "left": "დარჩა:",
      "week": "კვირა:",
      "avg": "საშ.:",
      "total": "სულ",
      "p10": "P10",
      "forecast": "პროგნოზი",
      "generated": "გამომუშავდა",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ko = {
  "day": {
    "today": "오늘",
    "tomorrow": "내일",
    "sunday_short": "일",
    "monday_short": "월",
    "tuesday_short": "화",
    "wednesday_short": "수",
    "thursday_short": "목",
    "friday_short": "금",
    "saturday_short": "토"
  },
  "card": {
    "defaultTitle": "태양광 예보",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "실시간:",
      "exportRate": "수출 요금:",
      "nextHour": "+1시간:",
      "left": "남음:",
      "week": "주:",
      "avg": "평균:",
      "total": "합계",
      "p10": "P10",
      "forecast": "예보",
      "generated": "발전됨",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var lb = {
  "day": {
    "today": "Haut",
    "tomorrow": "Muer",
    "sunday_short": "Son",
    "monday_short": "Méi",
    "tuesday_short": "Dën",
    "wednesday_short": "Mët",
    "thursday_short": "Don",
    "friday_short": "Fre",
    "saturday_short": "Sam"
  },
  "card": {
    "defaultTitle": "Solarprognos",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORTTARIF:",
      "nextHour": "+1 ST:",
      "left": "IWWREG:",
      "week": "WOCH:",
      "avg": "DUERCH.:",
      "total": "Total",
      "p10": "P10",
      "forecast": "Prognos",
      "generated": "produzéiert",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var lt = {
  "day": {
    "today": "Šiandien",
    "tomorrow": "Rytoj",
    "sunday_short": "sk",
    "monday_short": "pr",
    "tuesday_short": "an",
    "wednesday_short": "tr",
    "thursday_short": "kt",
    "friday_short": "pn",
    "saturday_short": "št"
  },
  "card": {
    "defaultTitle": "Saulės prognozė",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "GYVAI:",
      "exportRate": "EKSPORTO TARIFAS:",
      "nextHour": "+1 VAL:",
      "left": "LIKO:",
      "week": "SAVAITĖ:",
      "avg": "VID.:",
      "total": "Iš viso",
      "p10": "P10",
      "forecast": "prognozė",
      "generated": "pagaminta",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var lv = {
  "day": {
    "today": "Šodien",
    "tomorrow": "Rīt",
    "sunday_short": "Svētd",
    "monday_short": "Pirmd",
    "tuesday_short": "Otrd",
    "wednesday_short": "Trešd",
    "thursday_short": "Ceturtd",
    "friday_short": "Piektd",
    "saturday_short": "Sestd"
  },
  "card": {
    "defaultTitle": "Saules prognoze",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "TIEŠRAIDĒ:",
      "exportRate": "EKSPORTA TARIFS:",
      "nextHour": "+1 H:",
      "left": "ATLICIS:",
      "week": "NEDĒĻA:",
      "avg": "VID.:",
      "total": "Kopā",
      "p10": "P10",
      "forecast": "prognoze",
      "generated": "saražots",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var mk = {
  "day": {
    "today": "Денес",
    "tomorrow": "Утре",
    "sunday_short": "нед",
    "monday_short": "пон",
    "tuesday_short": "вто",
    "wednesday_short": "сре",
    "thursday_short": "чет",
    "friday_short": "пет",
    "saturday_short": "саб"
  },
  "card": {
    "defaultTitle": "Соларна прогноза",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ВО ЖИВО:",
      "exportRate": "ИЗВОЗНА ТАРИФА:",
      "nextHour": "+1 Ч:",
      "left": "ОСТАНАТО:",
      "week": "НЕДЕЛА:",
      "avg": "ПРОСЕК:",
      "total": "Вкупно",
      "p10": "P10",
      "forecast": "прогноза",
      "generated": "произведено",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ml = {
  "day": {
    "today": "ഇന്ന്",
    "tomorrow": "നാളെ",
    "sunday_short": "ഞായർ",
    "monday_short": "തിങ്കൾ",
    "tuesday_short": "ചൊവ്വ",
    "wednesday_short": "ബുധൻ",
    "thursday_short": "വ്യാഴം",
    "friday_short": "വെള്ളി",
    "saturday_short": "ശനി"
  },
  "card": {
    "defaultTitle": "സൗര പ്രവചനം",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "ലൈവ്:",
      "exportRate": "കയറ്റുമതി നിരക്ക്:",
      "nextHour": "+1 മ:",
      "left": "ബാക്കി:",
      "week": "ആഴ്ച:",
      "avg": "ശരാശരി:",
      "total": "ആകെ",
      "p10": "P10",
      "forecast": "പ്രവചനം",
      "generated": "ഉൽപ്പാദിപ്പിച്ചത്",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var nl = {
  "day": {
    "today": "Vandaag",
    "tomorrow": "Morgen",
    "sunday_short": "zo",
    "monday_short": "ma",
    "tuesday_short": "di",
    "wednesday_short": "wo",
    "thursday_short": "do",
    "friday_short": "vr",
    "saturday_short": "za"
  },
  "card": {
    "defaultTitle": "Zonneprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TERUGLEVERTARIEF:",
      "nextHour": "+1 U:",
      "left": "REST:",
      "week": "WEEK:",
      "avg": "GEM.:",
      "total": "Totaal",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "opgewekt",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var nb = {
  "day": {
    "today": "I dag",
    "tomorrow": "I morgen",
    "sunday_short": "søn",
    "monday_short": "man",
    "tuesday_short": "tir",
    "wednesday_short": "ons",
    "thursday_short": "tor",
    "friday_short": "fre",
    "saturday_short": "lør"
  },
  "card": {
    "defaultTitle": "Solprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARIFF:",
      "nextHour": "+1 T:",
      "left": "IGJEN:",
      "week": "UKE:",
      "avg": "SNITT:",
      "total": "Totalt",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "produsert",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var nn = {
  "day": {
    "today": "I dag",
    "tomorrow": "I morgon",
    "sunday_short": "søn",
    "monday_short": "mån",
    "tuesday_short": "tys",
    "wednesday_short": "ons",
    "thursday_short": "tor",
    "friday_short": "fre",
    "saturday_short": "lau"
  },
  "card": {
    "defaultTitle": "Solprognose",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EKSPORTTARIFF:",
      "nextHour": "+1 T:",
      "left": "IGJEN:",
      "week": "VEKE:",
      "avg": "SNITT:",
      "total": "Totalt",
      "p10": "P10",
      "forecast": "prognose",
      "generated": "produsert",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var pl = {
  "day": {
    "today": "Dzisiaj",
    "tomorrow": "Jutro",
    "sunday_short": "niedz",
    "monday_short": "pon",
    "tuesday_short": "wt",
    "wednesday_short": "śr",
    "thursday_short": "czw",
    "friday_short": "pt",
    "saturday_short": "sob"
  },
  "card": {
    "defaultTitle": "Prognoza solarna",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "NA ŻYWO:",
      "exportRate": "STAWKA EKSPORTU:",
      "nextHour": "+1 H:",
      "left": "POZOSTAŁO:",
      "week": "TYDZIEŃ:",
      "avg": "ŚR.:",
      "total": "Razem",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "wygenerowano",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var pt = {
  "day": {
    "today": "Hoje",
    "tomorrow": "Amanhã",
    "sunday_short": "dom",
    "monday_short": "seg",
    "tuesday_short": "ter",
    "wednesday_short": "qua",
    "thursday_short": "qui",
    "friday_short": "sex",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Previsão solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "AO VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "MÉDIA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsão",
      "generated": "gerado",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var pt_BR = {
  "day": {
    "today": "Hoje",
    "tomorrow": "Amanhã",
    "sunday_short": "dom",
    "monday_short": "seg",
    "tuesday_short": "ter",
    "wednesday_short": "qua",
    "thursday_short": "qui",
    "friday_short": "sex",
    "saturday_short": "sáb"
  },
  "card": {
    "defaultTitle": "Previsão solar",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "AO VIVO:",
      "exportRate": "TARIFA EXPORT.:",
      "nextHour": "+1 H:",
      "left": "RESTANTE:",
      "week": "SEMANA:",
      "avg": "MÉDIA:",
      "total": "Total",
      "p10": "P10",
      "forecast": "previsão",
      "generated": "gerado",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ro = {
  "day": {
    "today": "Azi",
    "tomorrow": "Mâine",
    "sunday_short": "dum",
    "monday_short": "lun",
    "tuesday_short": "mar",
    "wednesday_short": "mie",
    "thursday_short": "joi",
    "friday_short": "vin",
    "saturday_short": "sâm"
  },
  "card": {
    "defaultTitle": "Prognoză solară",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TARIF EXPORT:",
      "nextHour": "+1 H:",
      "left": "RĂMAS:",
      "week": "SĂPT.:",
      "avg": "MEDIE:",
      "total": "Total",
      "p10": "P10",
      "forecast": "prognoză",
      "generated": "generat",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ru = {
  "day": {
    "today": "Сегодня",
    "tomorrow": "Завтра",
    "sunday_short": "вс",
    "monday_short": "пн",
    "tuesday_short": "вт",
    "wednesday_short": "ср",
    "thursday_short": "чт",
    "friday_short": "пт",
    "saturday_short": "сб"
  },
  "card": {
    "defaultTitle": "Солнечный прогноз",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "СЕЙЧАС:",
      "exportRate": "ТАРИФ ЭКСПОРТА:",
      "nextHour": "+1 Ч:",
      "left": "ОСТАЛОСЬ:",
      "week": "НЕДЕЛЯ:",
      "avg": "СРЕД.:",
      "total": "Итого",
      "p10": "P10",
      "forecast": "прогноз",
      "generated": "выработано",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sk = {
  "day": {
    "today": "Dnes",
    "tomorrow": "Zajtra",
    "sunday_short": "ne",
    "monday_short": "po",
    "tuesday_short": "ut",
    "wednesday_short": "st",
    "thursday_short": "št",
    "friday_short": "pi",
    "saturday_short": "so"
  },
  "card": {
    "defaultTitle": "Solárna predpoveď",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "NAŽIVO:",
      "exportRate": "VÝKUPNÝ TARIF:",
      "nextHour": "+1 H:",
      "left": "ZOSTÁVA:",
      "week": "TÝŽDEŇ:",
      "avg": "PRIEM.:",
      "total": "Celkom",
      "p10": "P10",
      "forecast": "predpoveď",
      "generated": "vyrobené",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sl = {
  "day": {
    "today": "Danes",
    "tomorrow": "Jutri",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "tor",
    "wednesday_short": "sre",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sob"
  },
  "card": {
    "defaultTitle": "Sončna napoved",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "V ŽIVO:",
      "exportRate": "IZVOZNA TARIFA:",
      "nextHour": "+1 H:",
      "left": "OSTALO:",
      "week": "TEDEN:",
      "avg": "POVP.:",
      "total": "Skupaj",
      "p10": "P10",
      "forecast": "napoved",
      "generated": "proizvedeno",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sr = {
  "day": {
    "today": "Данас",
    "tomorrow": "Сутра",
    "sunday_short": "нед",
    "monday_short": "пон",
    "tuesday_short": "уто",
    "wednesday_short": "сре",
    "thursday_short": "чет",
    "friday_short": "пет",
    "saturday_short": "суб"
  },
  "card": {
    "defaultTitle": "Соларна прогноза",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "УЖИВО:",
      "exportRate": "ИЗВОЗНА ТАРИФА:",
      "nextHour": "+1 Ч:",
      "left": "ПРЕОСТАЛО:",
      "week": "НЕДЕЉА:",
      "avg": "ПРОСЕК:",
      "total": "Укупно",
      "p10": "P10",
      "forecast": "прогноза",
      "generated": "произведено",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sr_Latn = {
  "day": {
    "today": "Danas",
    "tomorrow": "Sutra",
    "sunday_short": "ned",
    "monday_short": "pon",
    "tuesday_short": "uto",
    "wednesday_short": "sre",
    "thursday_short": "čet",
    "friday_short": "pet",
    "saturday_short": "sub"
  },
  "card": {
    "defaultTitle": "Solarna prognoza",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "UŽIVO:",
      "exportRate": "IZVOZNA TARIFA:",
      "nextHour": "+1 H:",
      "left": "PREOSTALO:",
      "week": "NEDELJA:",
      "avg": "PROSEK:",
      "total": "Ukupno",
      "p10": "P10",
      "forecast": "prognoza",
      "generated": "proizvedeno",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sv = {
  "day": {
    "today": "Idag",
    "tomorrow": "Imorgon",
    "sunday_short": "sön",
    "monday_short": "mån",
    "tuesday_short": "tis",
    "wednesday_short": "ons",
    "thursday_short": "tors",
    "friday_short": "fre",
    "saturday_short": "lör"
  },
  "card": {
    "defaultTitle": "Solprognos",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "EXPORTTARIFF:",
      "nextHour": "+1 H:",
      "left": "KVAR:",
      "week": "VECKA:",
      "avg": "SNITT:",
      "total": "Totalt",
      "p10": "P10",
      "forecast": "prognos",
      "generated": "producerat",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var sq = {
  "day": {
    "today": "Sot",
    "tomorrow": "Nesër",
    "sunday_short": "die",
    "monday_short": "hën",
    "tuesday_short": "mar",
    "wednesday_short": "mër",
    "thursday_short": "enj",
    "friday_short": "pre",
    "saturday_short": "sht"
  },
  "card": {
    "defaultTitle": "Parashikimi diellor",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "LIVE:",
      "exportRate": "TARIFA EKSPORTI:",
      "nextHour": "+1 O:",
      "left": "MBETUR:",
      "week": "JAVË:",
      "avg": "MES.:",
      "total": "Totali",
      "p10": "P10",
      "forecast": "parashikim",
      "generated": "prodhuar",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ta = {
  "day": {
    "today": "இன்று",
    "tomorrow": "நாளை",
    "sunday_short": "ஞாயி",
    "monday_short": "திங்",
    "tuesday_short": "செவ்",
    "wednesday_short": "புத",
    "thursday_short": "வியா",
    "friday_short": "வெள்",
    "saturday_short": "சனி"
  },
  "card": {
    "defaultTitle": "சூரிய முன்னறிவிப்பு",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "நேரலை:",
      "exportRate": "ஏற்றுமதி விகிதம்:",
      "nextHour": "+1 ம:",
      "left": "மீதம்:",
      "week": "வாரம்:",
      "avg": "சராசரி:",
      "total": "மொத்தம்",
      "p10": "P10",
      "forecast": "முன்னறிவிப்பு",
      "generated": "உற்பத்தி",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var te = {
  "day": {
    "today": "నేడు",
    "tomorrow": "రేపు",
    "sunday_short": "ఆది",
    "monday_short": "సోమ",
    "tuesday_short": "మంగళ",
    "wednesday_short": "బుధ",
    "thursday_short": "గురు",
    "friday_short": "శుక్ర",
    "saturday_short": "శని"
  },
  "card": {
    "defaultTitle": "సౌర అంచనా",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "లైవ్:",
      "exportRate": "ఎగుమతి రేటు:",
      "nextHour": "+1 గం:",
      "left": "మిగిలింది:",
      "week": "వారం:",
      "avg": "సగటు:",
      "total": "మొత్తం",
      "p10": "P10",
      "forecast": "అంచనా",
      "generated": "ఉత్పత్తి",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var th = {
  "day": {
    "today": "วันนี้",
    "tomorrow": "พรุ่งนี้",
    "sunday_short": "อา",
    "monday_short": "จ",
    "tuesday_short": "อ",
    "wednesday_short": "พ",
    "thursday_short": "พฤ",
    "friday_short": "ศ",
    "saturday_short": "ส"
  },
  "card": {
    "defaultTitle": "พยากรณ์พลังงานแสงอาทิตย์",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "สด:",
      "exportRate": "อัตราส่งออก:",
      "nextHour": "+1 ชม.:",
      "left": "เหลือ:",
      "week": "สัปดาห์:",
      "avg": "เฉลี่ย:",
      "total": "รวม",
      "p10": "P10",
      "forecast": "พยากรณ์",
      "generated": "ผลิตแล้ว",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var tr = {
  "day": {
    "today": "Bugün",
    "tomorrow": "Yarın",
    "sunday_short": "Paz",
    "monday_short": "Pzt",
    "tuesday_short": "Sal",
    "wednesday_short": "Çar",
    "thursday_short": "Per",
    "friday_short": "Cum",
    "saturday_short": "Cmt"
  },
  "card": {
    "defaultTitle": "Güneş tahmini",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "CANLI:",
      "exportRate": "İHRACAT TARİFESİ:",
      "nextHour": "+1 SA:",
      "left": "KALAN:",
      "week": "HAFTA:",
      "avg": "ORT.:",
      "total": "Toplam",
      "p10": "P10",
      "forecast": "tahmin",
      "generated": "üretildi",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var uk = {
  "day": {
    "today": "Сьогодні",
    "tomorrow": "Завтра",
    "sunday_short": "нд",
    "monday_short": "пн",
    "tuesday_short": "вт",
    "wednesday_short": "ср",
    "thursday_short": "чт",
    "friday_short": "пт",
    "saturday_short": "сб"
  },
  "card": {
    "defaultTitle": "Сонячний прогноз",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "НАЖИВО:",
      "exportRate": "ТАРИФ ЕКСПОРТУ:",
      "nextHour": "+1 Г:",
      "left": "ЗАЛИШОК:",
      "week": "ТИЖДЕНЬ:",
      "avg": "СЕР.:",
      "total": "Разом",
      "p10": "P10",
      "forecast": "прогноз",
      "generated": "вироблено",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var ur = {
  "day": {
    "today": "آج",
    "tomorrow": "کل",
    "sunday_short": "اتوار",
    "monday_short": "پیر",
    "tuesday_short": "منگل",
    "wednesday_short": "بدھ",
    "thursday_short": "جمعرات",
    "friday_short": "جمعہ",
    "saturday_short": "ہفتہ"
  },
  "card": {
    "defaultTitle": "شمسی پیش گوئی",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "لائیو:",
      "exportRate": "برآمدی شرح:",
      "nextHour": "+1 گھنٹہ:",
      "left": "باقی:",
      "week": "ہفتہ:",
      "avg": "اوسط:",
      "total": "کل",
      "p10": "P10",
      "forecast": "پیش گوئی",
      "generated": "پیدا شدہ",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var vi = {
  "day": {
    "today": "Hôm nay",
    "tomorrow": "Ngày mai",
    "sunday_short": "CN",
    "monday_short": "Th 2",
    "tuesday_short": "Th 3",
    "wednesday_short": "Th 4",
    "thursday_short": "Th 5",
    "friday_short": "Th 6",
    "saturday_short": "Th 7"
  },
  "card": {
    "defaultTitle": "Dự báo năng lượng mặt trời",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "TRỰC TIẾP:",
      "exportRate": "GIÁ BÁN ĐIỆN:",
      "nextHour": "+1 GIỜ:",
      "left": "CÒN LẠI:",
      "week": "TUẦN:",
      "avg": "TB:",
      "total": "Tổng",
      "p10": "P10",
      "forecast": "dự báo",
      "generated": "đã tạo",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var zh_Hans = {
  "day": {
    "today": "今天",
    "tomorrow": "明天",
    "sunday_short": "周日",
    "monday_short": "周一",
    "tuesday_short": "周二",
    "wednesday_short": "周三",
    "thursday_short": "周四",
    "friday_short": "周五",
    "saturday_short": "周六"
  },
  "card": {
    "defaultTitle": "太阳能预测",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "实时:",
      "exportRate": "上网电价:",
      "nextHour": "+1小时:",
      "left": "剩余:",
      "week": "本周:",
      "avg": "平均:",
      "total": "总计",
      "p10": "P10",
      "forecast": "预测",
      "generated": "已发电",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

var zh_Hant = {
  "day": {
    "today": "今天",
    "tomorrow": "明天",
    "sunday_short": "週日",
    "monday_short": "週一",
    "tuesday_short": "週二",
    "wednesday_short": "週三",
    "thursday_short": "週四",
    "friday_short": "週五",
    "saturday_short": "週六"
  },
  "card": {
    "defaultTitle": "太陽能預測",
    "placeholder": "No forecast entities configured.",
    "placeholderAction": "Open the card editor to get started.",
    "twoDayNote": "2-day forecast available",
    "labels": {
      "live": "即時:",
      "exportRate": "躉售電價:",
      "nextHour": "+1小時:",
      "left": "剩餘:",
      "week": "本週:",
      "avg": "平均:",
      "total": "總計",
      "p10": "P10",
      "forecast": "預測",
      "generated": "已發電",
      "exportLimitShort": "Limit",
      "exportLimitTooltip": "> {limit} {unit} export limit"
    },
    "days": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat",
      "today": "Today",
      "tomorrow": "Tomorrow",
      "day3": "Day 3",
      "day4": "Day 4",
      "day5": "Day 5",
      "day6": "Day 6",
      "day7": "Day 7"
    },
    "popup": {
      "close": "Close",
      "noForecastData": "No forecast data",
      "noHourlyData": "No hourly data available for this day.",
      "integrationNoHourlyData": "The selected forecast entities do not provide hourly forecast data.",
      "chart": {
        "time": "Time",
        "power": "Power",
        "kwh": "kWh",
        "forecastShort": "Fcst",
        "actualShort": "Act."
      }
    },
    "aria": {
      "dayButton": "{day} {date}"
    },
    "errors": {
      "invalidConfig": "Invalid configuration"
    },
    "units": {
      "watts": "W",
      "kilowatts": "kW",
      "kilowattHours": "kWh",
      "kilowattHoursPerDay": "kWh/day"
    }
  },
  "editor": {
    "labels": {
      "title": "Title (optional)",
      "icon": "Header icon (optional, e.g. mdi:solar-power)",
      "show_header": "Show header",
      "display_estimate10": "Display Estimate10 Forecast Values",
      "device_id": "Forecast Device",
      "integration_type": "Integration Type",
      "forecast_entity_0": "Day 1 — Today",
      "forecast_entity_1": "Day 2 — Tomorrow",
      "forecast_entity_2": "Day 3",
      "forecast_entity_3": "Day 4",
      "forecast_entity_4": "Day 5",
      "forecast_entity_5": "Day 6",
      "forecast_entity_6": "Day 7",
      "export_rate_entity": "Current Export Rate Entity",
      "live_power_entity": "Live power (optional, kW sensor)",
      "today_actual_entity": "Today's actual generation (optional)",
      "next_hour_entity": "+1HR forecast (optional, overrides auto-derived value)",
      "remaining_today_entity": "LEFT / remaining today (optional, overrides auto-derived value)",
      "date_format": "Date format",
      "time_format": "Time format (hourly popup)",
      "show_hourly_as_main": "Show Hourly Forecast as Main Card",
      "inverter_max_kw": "Inverter max output (kW)",
      "solar_max_kwp": "Solar array size (kWp)",
      "low_threshold": "Low threshold (kWh)",
      "high_threshold": "High threshold (kWh)",
      "desktop_text_scale": "Desktop Text Scale",
      "font_size": "Font Size",
      "bar_width": "Bar Width",
      "export_limit_kw": "Export Limit (kW)"
    },
    "options": {
      "autoDetect": "Auto-detect",
      "solcast": "Solcast",
      "volcast": "Volcast",
      "forecastSolar": "Forecast.Solar",
      "openMeteo": "Open-Meteo Solar Forecast",
      "dateDdMm": "DD/MM  (e.g. 15/04)",
      "dateMmDd": "MM/DD  (e.g. 04/15)",
      "time24h": "24h  (e.g. 17:00)",
      "time12h": "12h  (e.g. 5pm)"
    },
    "sections": {
      "integrationType": "Integration Type",
      "dailyForecastEntities": "Daily Forecast Entities",
      "liveData": "Live Data",
      "actualGenerationArrays": "Actual Generation Arrays",
      "systemParameters": "System Parameters",
      "energyProvider": "Energy Provider",
      "colourThresholds": "Colour Thresholds",
      "dateTimeDisplay": "Display"
    },
    "helpers": {
      "device": "Recommended: selecting a device will auto-configure the card",
      "estimate10": "Display Estimate10 is only applicable when the integration type is Solcast",
      "integrationType": "Automatically set when a forecast device is selected above. Override here only when configuring forecast entities manually without a device.",
      "liveData": "+1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.",
      "actualArrays": "Optional: configure individual array sensors to display a stacked breakdown on today's bar. Each label is a single character shown inside its segment (e.g. N, S, E).",
      "desktopTextScale": "Desktop Text Scale: only applies on wider screens (≥ 768 px). Mobile sizing is unchanged.",
      "hourlyAsMain": "Displays the hourly forecast view directly on the card instead of the daily forecast bars.",
      "fontSize": "Optional daily bar text size in pixels. Leave blank to use CSS/default styling.",
      "barWidth": "Optional forecast bar width in pixels. Leave blank to use CSS/default styling."
    },
    "warnings": {
      "manualEntities": "Changing device will not overwrite manually configured entities."
    },
    "arrays": {
      "entity": "Array entity",
      "label": "Label (1 char)",
      "placeholder": "E",
      "hint": "bar & popup",
      "remove": "Remove",
      "add": "Add array"
    }
  },
  "customCard": {
    "name": "Solar Forecast Card",
    "description": "Daily solar energy forecast with hourly breakdown support."
  }
}
;

const LOCALES = {
    "af": af,
    "ar": ar,
    "bg": bg,
    "bn": bn,
    "bs": bs,
    "ca": ca,
    "cs": cs,
    "cy": cy,
    "da": da,
    "de": de,
    "el": el,
    "en": en,
    "en-GB": en_GB,
    "eo": eo,
    "es": es,
    "es-419": es_419,
    "et": et,
    "eu": eu,
    "fa": fa,
    "fi": fi,
    "fy": fy,
    "fr": fr,
    "ga": ga,
    "gl": gl,
    "gsw": gsw,
    "he": he,
    "hi": hi,
    "hr": hr,
    "hu": hu,
    "hy": hy,
    "id": id,
    "it": it,
    "is": is,
    "ja": ja,
    "ka": ka,
    "ko": ko,
    "lb": lb,
    "lt": lt,
    "lv": lv,
    "mk": mk,
    "ml": ml,
    "nl": nl,
    "nb": nb,
    "nn": nn,
    "pl": pl,
    "pt": pt,
    "pt-BR": pt_BR,
    "ro": ro,
    "ru": ru,
    "sk": sk,
    "sl": sl,
    "sr": sr,
    "sr-Latn": sr_Latn,
    "sv": sv,
    "sq": sq,
    "ta": ta,
    "te": te,
    "th": th,
    "tr": tr,
    "uk": uk,
    "ur": ur,
    "vi": vi,
    "zh-Hans": zh_Hans,
    "zh-Hant": zh_Hant,
};
const LANGUAGE_OPTIONS = ["af", "ar", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "en-GB", "eo", "es", "es-419", "et", "eu", "fa", "fi", "fy", "fr", "ga", "gl", "gsw", "he", "hi", "hr", "hu", "hy", "id", "it", "is", "ja", "ka", "ko", "lb", "lt", "lv", "mk", "ml", "nl", "nb", "nn", "pl", "pt", "pt-BR", "ro", "ru", "sk", "sl", "sr", "sr-Latn", "sv", "sq", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh-Hans", "zh-Hant"];

function normaliseLanguage(value) {
    if (typeof value !== "string" || value.trim() === "")
        return "en";
    const requested = value.toLowerCase().replace("_", "-");
    const exact = LANGUAGE_OPTIONS.find((language) => language.toLowerCase() === requested);
    if (exact)
        return exact;
    const base = requested.split("-")[0];
    return LANGUAGE_OPTIONS.find((language) => language.toLowerCase() === base) ?? "en";
}
function resolveLanguage(hass) {
    const localeLanguage = hass?.locale && typeof hass.locale === "object" && "language" in hass.locale
        ? hass.locale.language
        : undefined;
    return normaliseLanguage(localeLanguage ?? hass?.language);
}
function readPath(tree, key) {
    return key.split(".").reduce((node, part) => {
        if (node && typeof node === "object" && part in node) {
            return node[part];
        }
        return undefined;
    }, tree);
}
function localize(language, key, vars) {
    const translated = readPath(LOCALES[language] ?? en, key);
    const fallback = readPath(en, key);
    const raw = typeof translated === "string"
        ? translated
        : typeof fallback === "string"
            ? fallback
            : key;
    return vars
        ? raw.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? `{${name}}`))
        : raw;
}

// ── Schema segments (rendered with section headers between them) ──────────────
// Device field — rendered first as the primary entry point
const SCHEMA_DEVICE = [
    { name: "device_id", selector: { device: {} } },
];
// Integration type — auto-set by device detection; exposed here as a manual
// override for users who configure forecast_entities without a device.
// Remaining top-level fields — always visible
const SCHEMA_TOP = [
    { name: "title", selector: { text: {} } },
    { name: "icon", selector: { icon: {} } },
    { name: "show_header", selector: { boolean: {} } },
    { name: "display_estimate10", selector: { boolean: {} } },
];
const SCHEMA_FORECAST = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
    name: `forecast_entity_${i}`,
    selector: { entity: { domain: "sensor" } },
}));
// All Live Data entity pickers in one schema so a single ha-form instance
// handles them — matching the same pattern used by SCHEMA_FORECAST (all 7
// forecast entities in one ha-form), which is what makes them correctly
// reflect auto-detected values in the editor.
const SCHEMA_LIVE = [
    { name: "live_power_entity", selector: { entity: { domain: "sensor" } } },
    { name: "today_actual_entity", selector: { entity: { domain: "sensor" } } },
    { name: "next_hour_entity", selector: { entity: { domain: "sensor" } } },
    { name: "remaining_today_entity", selector: { entity: { domain: "sensor" } } },
];
const SCHEMA_DISPLAY_TEXT_SCALE = [
    {
        name: "desktop_text_scale",
        selector: {
            number: { min: 100, max: 150, step: 5, mode: "slider", unit_of_measurement: "%" },
        },
    },
];
const SCHEMA_DISPLAY_FONT_SIZE = [
    {
        name: "font_size",
        selector: {
            number: { min: 10, max: 24, step: 1, mode: "box", unit_of_measurement: "px" },
        },
    },
];
const SCHEMA_DISPLAY_BAR_WIDTH = [
    {
        name: "bar_width",
        selector: {
            number: { min: 8, max: 40, step: 1, mode: "box", unit_of_measurement: "px" },
        },
    },
];
const SCHEMA_DISPLAY_HOURLY = [
    { name: "show_hourly_as_main", selector: { boolean: {} } },
];
const SCHEMA_ENERGY_PROVIDER = [
    { name: "export_rate_entity", selector: { entity: {} } },
];
const SCHEMA_SYSTEM = [
    { name: "inverter_max_kw", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kW" } } },
    { name: "solar_max_kwp", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWp" } } },
    { name: "export_limit_kw", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kW" } } },
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
        display_estimate10: raw.display_estimate10 ?? false,
        device_id: raw.device_id,
        integration_type: raw.integration_type ?? "manual",
        forecast_entities: incoming,
        export_rate_entity: raw.export_rate_entity,
        live_power_entity: raw.live_power_entity,
        today_actual_entity: raw.today_actual_entity,
        next_hour_entity: raw.next_hour_entity,
        remaining_today_entity: raw.remaining_today_entity,
        actual_arrays: Array.isArray(raw.actual_arrays)
            ? raw.actual_arrays.filter((e) => typeof e === "object" && e !== null && typeof e.entity === "string")
            : undefined,
        date_format: raw.date_format,
        time_format: raw.time_format,
        show_hourly_as_main: raw.show_hourly_as_main ?? false,
        inverter_max_kw: raw.inverter_max_kw,
        solar_max_kwp: raw.solar_max_kwp,
        export_limit_kw: raw.export_limit_kw,
        low_threshold: raw.low_threshold,
        high_threshold: raw.high_threshold,
        desktop_text_scale: raw.desktop_text_scale,
        font_size: raw.font_size,
        bar_width: raw.bar_width,
    };
}
// ── Editor element ────────────────────────────────────────────────────────────
/** Entity FormData keys that count as "manually edited" when changed by the user. */
const ENTITY_FIELDS = [
    "forecast_entity_0", "forecast_entity_1", "forecast_entity_2",
    "forecast_entity_3", "forecast_entity_4", "forecast_entity_5",
    "forecast_entity_6", "today_actual_entity", "live_power_entity",
    "next_hour_entity", "remaining_today_entity",
];
let SolarForecastCardEditor = class SolarForecastCardEditor extends i$2 {
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
    _language() {
        return resolveLanguage(this.hass);
    }
    _t(key, vars) {
        return localize(this._language(), key, vars);
    }
    _integrationSchema() {
        return [
            {
                name: "integration_type",
                selector: {
                    select: {
                        options: [
                            { value: "manual", label: this._t("editor.options.autoDetect") },
                            { value: "solcast", label: this._t("editor.options.solcast") },
                            { value: "volcast", label: this._t("editor.options.volcast") },
                            { value: "forecast_solar", label: this._t("editor.options.forecastSolar") },
                            { value: "open_meteo_solar_forecast", label: this._t("editor.options.openMeteo") },
                        ],
                    },
                },
            },
        ];
    }
    // ── Config ↔ flat FormData conversion ──────────────────────────────────────
    _toFormData(cfg) {
        return {
            title: cfg.title ?? "",
            icon: cfg.icon ?? "",
            show_header: cfg.show_header,
            display_estimate10: cfg.display_estimate10 ?? false,
            device_id: cfg.device_id ?? "",
            integration_type: cfg.integration_type ?? "manual",
            export_rate_entity: cfg.export_rate_entity ?? "",
            live_power_entity: cfg.live_power_entity ?? "",
            today_actual_entity: cfg.today_actual_entity ?? "",
            next_hour_entity: cfg.next_hour_entity ?? "",
            remaining_today_entity: cfg.remaining_today_entity ?? "",
            show_hourly_as_main: cfg.show_hourly_as_main ?? false,
            inverter_max_kw: cfg.inverter_max_kw,
            solar_max_kwp: cfg.solar_max_kwp,
            export_limit_kw: cfg.export_limit_kw,
            low_threshold: cfg.low_threshold,
            high_threshold: cfg.high_threshold,
            desktop_text_scale: cfg.desktop_text_scale ?? 100,
            font_size: cfg.font_size,
            bar_width: cfg.bar_width,
            forecast_entity_0: cfg.forecast_entities[0] ?? "",
            forecast_entity_1: cfg.forecast_entities[1] ?? "",
            forecast_entity_2: cfg.forecast_entities[2] ?? "",
            forecast_entity_3: cfg.forecast_entities[3] ?? "",
            forecast_entity_4: cfg.forecast_entities[4] ?? "",
            forecast_entity_5: cfg.forecast_entities[5] ?? "",
            forecast_entity_6: cfg.forecast_entities[6] ?? "",
        };
    }
    _optionalNumber(value) {
        return typeof value === "number" && Number.isFinite(value) ? value : undefined;
    }
    _fromFormData(data) {
        return {
            type: this._config?.type ?? "custom:solar-forecast-card",
            title: data.title || undefined,
            icon: data.icon || undefined,
            show_header: data.show_header,
            display_estimate10: data.display_estimate10,
            device_id: data.device_id || undefined,
            integration_type: data.integration_type || "manual",
            forecast_entities: [
                data.forecast_entity_0,
                data.forecast_entity_1,
                data.forecast_entity_2,
                data.forecast_entity_3,
                data.forecast_entity_4,
                data.forecast_entity_5,
                data.forecast_entity_6,
            ],
            export_rate_entity: data.export_rate_entity || undefined,
            live_power_entity: data.live_power_entity || undefined,
            today_actual_entity: data.today_actual_entity || undefined,
            next_hour_entity: data.next_hour_entity || undefined,
            remaining_today_entity: data.remaining_today_entity || undefined,
            actual_arrays: this._config?.actual_arrays,
            date_format: this._config?.date_format,
            time_format: this._config?.time_format,
            show_hourly_as_main: data.show_hourly_as_main,
            inverter_max_kw: typeof data.inverter_max_kw === "number" ? data.inverter_max_kw : undefined,
            solar_max_kwp: typeof data.solar_max_kwp === "number" ? data.solar_max_kwp : undefined,
            export_limit_kw: typeof data.export_limit_kw === "number" ? data.export_limit_kw : undefined,
            low_threshold: typeof data.low_threshold === "number" ? data.low_threshold : undefined,
            high_threshold: typeof data.high_threshold === "number" ? data.high_threshold : undefined,
            // Only persist when non-default (100) so YAML stays clean for most users.
            desktop_text_scale: typeof data.desktop_text_scale === "number" && data.desktop_text_scale !== 100
                ? data.desktop_text_scale
                : undefined,
            font_size: this._optionalNumber(data.font_size),
            bar_width: this._optionalNumber(data.bar_width),
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
        let remainingTodayEntity;
        for (const sensor of sensors) {
            const state = this.hass.states[sensor.entity_id];
            const unit = state?.attributes?.unit_of_measurement;
            if (unit !== "kWh" && unit !== "Wh")
                continue;
            const id = sensor.entity_id;
            if (id.includes("energy_production_today_remaining")) {
                // Capture as remaining_today_entity — provides the LEFT header value
                // directly for forecast.solar (which has no hourly attribute data).
                remainingTodayEntity = id;
            }
            else if (id.includes("energy_production_today")) {
                slots[0] = id;
            }
            else if (id.includes("energy_production_tomorrow")) {
                slots[1] = id;
            }
        }
        console.debug("[solar-forecast-card] forecast.solar auto-detect mapping:", slots.map((id, i) => ({
            slot: `Day ${i} (${["Today", "Tomorrow", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"][i]})`,
            entity: id ? id.replace(/^sensor\./, "") : "(empty)",
        })), "remaining_today_entity:", remainingTodayEntity ?? "(none)");
        return {
            forecast_entities: slots,
            integration_type: "forecast_solar",
            remaining_today_entity: remainingTodayEntity,
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
        let remainingTodayEntity;
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
            const id = sensor.entity_id;
            // "remaining" sensors are not daily totals and must not go into a forecast slot,
            // but energy_production_today_remaining maps to remaining_today_entity.
            if (id.includes("_remaining")) {
                if (id.includes("energy_production_today_remaining")) {
                    const state = this.hass.states[id];
                    const unit = state?.attributes?.unit_of_measurement;
                    if (unit === "kWh" || unit === "Wh")
                        remainingTodayEntity = id;
                }
                continue;
            }
            const state = this.hass.states[id];
            const unit = state?.attributes?.unit_of_measurement;
            if (unit !== "kWh" && unit !== "Wh")
                continue;
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
        })), "remaining_today_entity:", remainingTodayEntity ?? "(none)");
        return {
            forecast_entities: slots,
            integration_type: "open_meteo_solar_forecast",
            remaining_today_entity: remainingTodayEntity,
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
                // replace forecast_entities, integration_type, and any detected
                // summary entities. today_actual_entity is always preserved — it
                // typically comes from the inverter, not the forecast device, so
                // device changes must never clear it.
                //
                // remaining_today_entity and next_hour_entity are set to the detected
                // value (may be undefined = clear) so that switching between integrations
                // never leaves stale auto-populated values from a previous device.
                newConfig = {
                    ...newConfig,
                    forecast_entities: detected.forecast_entities,
                    integration_type: detected.integration_type,
                    remaining_today_entity: detected.remaining_today_entity,
                    next_hour_entity: detected.next_hour_entity,
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
            newConfig = {
                ...newConfig,
                integration_type: "manual",
                remaining_today_entity: undefined,
                next_hour_entity: undefined,
            };
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
        return i$5 `
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
        align-items: flex-start;
        gap: 8px;
        padding: 4px 0;
      }

      .array-row ha-selector {
        flex: 1;
        min-width: 0;
      }

      /* Nudge the delete button down so it sits beside the input,
         not the label heading above it. */
      .array-row > ha-icon-button {
        margin-top: 20px;
        flex-shrink: 0;
      }

      /* Wrapper: stacks the heading, input, and hint vertically */
      .array-label-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        flex-shrink: 0;
      }

      .array-field-label {
        font-size: 0.63rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
        line-height: 1.2;
      }

      .array-label-hint {
        font-size: 0.58rem;
        color: var(--secondary-text-color);
        opacity: 0.65;
        white-space: nowrap;
        text-align: center;
        line-height: 1.2;
      }

      .array-label-input {
        width: 3.2rem;
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
        const label = (s) => this._t(`editor.labels.${s.name}`);
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
        ${this._t("editor.helpers.device")}
      </p>

      ${this._showManualWarning ? b `
        <ha-alert alert-type="warning">
          ${this._t("editor.warnings.manualEntities")}
        </ha-alert>
      ` : A}

      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_TOP}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>
      <p class="device-helper" style="margin:0 0 4px">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        ${this._t("editor.helpers.estimate10")}
      </p>

      <ha-expansion-panel header=${this._t("editor.sections.integrationType")} outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.integrationType")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${this._integrationSchema()}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.dailyForecastEntities")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_FORECAST}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.liveData")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_LIVE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:4px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.liveData")}
        </p>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.actualGenerationArrays")} outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 10px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.actualArrays")}
        </p>
        ${(this._config.actual_arrays ?? []).map((entry, idx) => b `
          <div class="array-row">
            <ha-selector
              .hass=${this.hass}
              .selector=${{ entity: { domain: ["sensor"] } }}
              .value=${entry.entity || ""}
              .label=${this._t("editor.arrays.entity")}
              @value-changed=${(e) => this._updateArrayEntity(idx, e.detail.value)}
            ></ha-selector>
            <div class="array-label-wrap">
              <span class="array-field-label">${this._t("editor.arrays.label")}</span>
              <input
                type="text"
                class="array-label-input"
                placeholder=${this._t("editor.arrays.placeholder")}
                maxlength="1"
                .value=${entry.label || ""}
                @input=${(e) => this._updateArrayLabel(idx, e.target.value)}
              />
              <span class="array-label-hint">${this._t("editor.arrays.hint")}</span>
            </div>
            <ha-icon-button
              .label=${this._t("editor.arrays.remove")}
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
          ${this._t("editor.arrays.add")}
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.systemParameters")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_SYSTEM}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.energyProvider")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_ENERGY_PROVIDER}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.colourThresholds")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_THRESHOLDS}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.dateTimeDisplay")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_TEXT_SCALE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.desktopTextScale")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_FONT_SIZE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.fontSize")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_BAR_WIDTH}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.barWidth")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_HOURLY}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.hourlyAsMain")}
        </p>
      </ha-expansion-panel>
    `;
    }
};
__decorate([
    n$1({ attribute: false })
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
    t$1("solar-forecast-card-editor")
], SolarForecastCardEditor);

const DAY_KEYS = [
    "sunday_short",
    "monday_short",
    "tuesday_short",
    "wednesday_short",
    "thursday_short",
    "friday_short",
    "saturday_short",
];
const COMPLETE_THRESHOLD = 1.0;
const POPUP_CLOSE_MS = 260;
const MAIN_ACTUAL_REFRESH_MS = 60000;
let SolarForecastCard = class SolarForecastCard extends i$2 {
    constructor() {
        super(...arguments);
        /** Currently open popup row (null = closed). */
        this._popup = null;
        /** True once the popup is in-DOM and should animate in. */
        this._popupVisible = false;
        /**
         * Hourly actual-generation data (local hour → kWh) fetched asynchronously
         * from the HA history API when today's popup opens.
         * null  = not yet fetched or not applicable (not today / no entity).
         * Map   = fetch completed; map may be empty if no generating hours found.
         */
        this._popupActualHourly = null;
        /**
         * Same actual-history data as the popup uses, but for the optional main-card
         * hourly view. Kept separate so opening/closing the popup never resets the
         * inline chart's Actual column.
         */
        this._mainActualHourly = null;
        this._mainActualRefreshInFlight = false;
        this._mainActualNextRefreshAt = 0;
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
            show_header: true,
        };
    }
    setConfig(config) {
        if (!config)
            throw new Error(localize("en", "card.errors.invalidConfig"));
        this._config = normalizeConfig(config);
        this._mainActualFetchKey = undefined;
        this._mainActualDataScope = undefined;
        this._mainActualRefreshInFlight = false;
        this._mainActualNextRefreshAt = 0;
        this._mainActualHourly = null;
        // Apply the desktop text scale as a CSS custom property on the host element.
        // The static stylesheet uses calc(base * var(--dts-factor, 1)) inside a
        // @media (min-width: 768px) block so mobile sizing is never affected.
        const factor = (this._config.desktop_text_scale ?? 100) / 100;
        this.style.setProperty("--dts-factor", String(factor));
        this._setOptionalCssPx("--sfc-font-size", this._config.font_size);
        this._setOptionalCssPx("--sfc-bar-width", this._config.bar_width);
    }
    getCardSize() {
        return 4;
    }
    _language() {
        return resolveLanguage(this.hass);
    }
    _t(key, vars) {
        return localize(this._language(), key, vars);
    }
    _setOptionalCssPx(name, value) {
        if (typeof value === "number" && Number.isFinite(value)) {
            this.style.setProperty(name, `${value}px`);
        }
        else {
            this.style.removeProperty(name);
        }
    }
    _cardStyle() {
        const styles = {};
        if (typeof this._config?.font_size === "number" && Number.isFinite(this._config.font_size)) {
            styles["--sfc-font-size"] = `${this._config.font_size}px`;
        }
        if (typeof this._config?.bar_width === "number" && Number.isFinite(this._config.bar_width)) {
            styles["--sfc-bar-width"] = `${this._config.bar_width}px`;
        }
        return styles;
    }
    _localeCode() {
        return this._language();
    }
    _dateLocaleCode() {
        const localeLanguage = this.hass?.locale && typeof this.hass.locale === "object" && "language" in this.hass.locale
            ? this.hass.locale.language
            : undefined;
        if (typeof localeLanguage === "string" && localeLanguage.trim() !== "") {
            return localeLanguage.replace("_", "-");
        }
        if (typeof this.hass?.language === "string" && this.hass.language.trim() !== "") {
            return this.hass.language.replace("_", "-");
        }
        return "en-GB";
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
        if (changedProps.has("_config") || changedProps.has("_popup") || changedProps.has("_popupVisible") || changedProps.has("_popupActualHourly") || changedProps.has("_mainActualHourly"))
            return true;
        if (!this._config || !this.hass)
            return false;
        const oldHass = changedProps.get("hass");
        if (!oldHass)
            return true;
        if (resolveLanguage(oldHass) !== this._language())
            return true;
        const watchIds = [
            ...this._config.forecast_entities,
            this._config.live_power_entity,
            this._config.today_actual_entity,
            this._config.next_hour_entity,
            this._config.remaining_today_entity,
            this._config.export_rate_entity,
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
        // The header (_renderLive) applies the same precedence: arrays sum when
        // configured, today_actual_entity otherwise. It reads entities directly
        // so it stays in sync without depending on this _buildRows output.
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
        const showEstimate10 = cfg.integration_type === "solcast" && cfg.display_estimate10;
        const raw = cfg.forecast_entities.map((entityId, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const s = entityId ? this.hass.states[entityId] : undefined;
            const kwhVal = parseFloat(s?.state ?? "");
            return {
                dayIndex: i + 1,
                date,
                isToday: i === 0,
                entityId,
                forecastKwh: isFinite(kwhVal) ? kwhVal : null,
                actualKwh: i === 0 ? todayActualKwh : null,
                actualArrays: i === 0 ? (todayArrayEntries ?? null) : null,
                estimate10Kwh: showEstimate10
                    ? this._sumEstimate10(s?.attributes?.detailedForecast)
                    : null,
                rawHoursAttr: this._rawHoursForState(s, cfg.integration_type),
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
     * Handles five formats:
     *   1. Solcast detailedForecast  – [{period_start: ISO, pv_estimate: kW}, …]
     *                                  30-min periods, aggregated into hourly kWh
     *   2. Volcast hours             – array of numbers (index = clock hour for
     *                                  24-element arrays) OR array of objects with
     *                                  explicit hour/datetime fields; dispatched to
     *                                  _parseVolcastHours so clock hours are always
     *                                  resolved correctly regardless of array length
     *   3. Open-Meteo wh_period      – plain object keyed by ISO datetime → Wh
     *   4. Array of numbers          – index is the hour (generic fallback)
     *   5. Plain object keyed by hour – {"6": 0.5, "7": 1.2, …}
     */
    _parseHours(raw, hint, silent = false) {
        // ── Always log the raw value so callers can verify the format ────────────
        if (!silent)
            console.debug("[solar-forecast-card] hours attr →", raw === undefined ? "undefined" :
                raw === null ? "null" :
                    Array.isArray(raw)
                        ? `array[${raw.length}] first=${JSON.stringify(raw[0])}`
                        : `${typeof raw} ${JSON.stringify(raw).slice(0, 120)}`);
        if (raw === null || raw === undefined)
            return [];
        // ── Volcast: dispatch before generic format detection ────────────────────
        // The generic array path maps array index → clock hour, which is only
        // correct for 24-element midnight-indexed arrays. Volcast may provide a
        // shorter array (trimmed past hours removed as the day progresses) or an
        // array of objects whose time is encoded in period_start/datetime fields
        // rather than an explicit "hour" key. _parseVolcastHours handles all cases
        // by extracting the clock hour from ISO datetime fields when available,
        // falling back to array index only for bare-number 24-element arrays.
        if (hint === "volcast") {
            if (!Array.isArray(raw)) {
                if (!silent)
                    console.debug("[solar-forecast-card] hours: Volcast hours is not an array");
                return [];
            }
            if (!silent)
                console.debug("[solar-forecast-card] hours: Volcast hours format");
            const pts = this._parseVolcastHours(raw);
            if (!silent && pts.length > 0)
                console.debug(`[solar-forecast-card] hours: ${pts.length} Volcast points,`, `${pts[0].hour}:00 → ${pts[pts.length - 1].hour}:00,`, `peak ${Math.max(...pts.map((p) => p.kwh)).toFixed(3)} kWh`);
            return pts;
        }
        // ── Open-Meteo: dispatch before generic format detection ─────────────────
        if (hint === "open_meteo_solar_forecast") {
            if (typeof raw !== "object" || Array.isArray(raw)) {
                if (!silent)
                    console.debug("[solar-forecast-card] hours: Open-Meteo wh_period is not a plain object");
                return [];
            }
            if (!silent)
                console.debug("[solar-forecast-card] hours: Open-Meteo wh_period format");
            return this._parseOpenMeteoWhPeriod(raw);
        }
        try {
            let points;
            if (Array.isArray(raw)) {
                if (raw.length === 0) {
                    if (!silent)
                        console.debug("[solar-forecast-card] hours: empty array");
                    return [];
                }
                // ── Format 1: Solcast detailedForecast ────────────────────────────
                // When hint is "solcast", skip detection and parse directly.
                // Otherwise detect by inspecting the first element.
                // Volcast is dispatched above so hint can never be "volcast" here.
                const isSolcast = hint === "solcast" ||
                    (typeof raw[0]?.period_start === "string" &&
                        "pv_estimate" in raw[0]);
                if (isSolcast) {
                    if (!silent)
                        console.debug("[solar-forecast-card] hours: Solcast detailedForecast format");
                    points = this._parseSolcastPeriods(raw);
                }
                else {
                    // ── Format 2 & 3: generic array ───────────────────────────────────
                    points = raw.map((v, i) => {
                        // 1 — bare number, index = hour
                        if (typeof v === "number") {
                            const kwh = isFinite(v) ? v : 0;
                            return { hour: i, kwh, maxKw: kwh };
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
                            const rawPower = obj.power_kw ?? obj.pv_estimate;
                            const rawDurationHours = obj.duration_hours ?? obj.interval_hours;
                            const rawDurationMinutes = obj.duration_minutes ?? obj.interval_minutes;
                            const durationHours = typeof rawDurationHours === "number" ? rawDurationHours :
                                typeof rawDurationHours === "string" ? parseFloat(rawDurationHours) :
                                    typeof rawDurationMinutes === "number" ? rawDurationMinutes / 60 :
                                        typeof rawDurationMinutes === "string" ? parseFloat(rawDurationMinutes) / 60 :
                                            1;
                            const maxKw = typeof rawPower === "number" ? rawPower
                                : typeof rawPower === "string" ? parseFloat(rawPower)
                                    : durationHours > 0 ? kwh / durationHours : kwh;
                            const safeKwh = isFinite(kwh) ? kwh : 0;
                            return {
                                hour: isFinite(hour) ? hour : i,
                                kwh: safeKwh,
                                maxKw: isFinite(maxKw) ? maxKw : safeKwh,
                            };
                        }
                        return { hour: i, kwh: 0, maxKw: 0 };
                    });
                } // close else (non-Solcast array)
                // ── Format 3: plain object keyed by hour ────────────────────────────
            }
            else if (typeof raw === "object") {
                const entries = Object.entries(raw);
                if (entries.length === 0) {
                    if (!silent)
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
                        maxKw: isFinite(kwh) ? kwh : 0,
                    };
                })
                    .sort((a, b) => a.hour - b.hour);
            }
            else {
                if (!silent)
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
                if (!silent)
                    console.debug("[solar-forecast-card] hours: attribute present but all values are zero");
                return [];
            }
            const trimmed = points.slice(first, last + 1);
            if (!silent)
                console.debug(`[solar-forecast-card] hours: ${trimmed.length} points,`, `${trimmed[0].hour}:00 → ${trimmed[trimmed.length - 1].hour}:00,`, `peak ${Math.max(...trimmed.map((p) => p.kwh)).toFixed(3)} kWh`);
            return trimmed;
        }
        catch (err) {
            if (!silent)
                console.error("[solar-forecast-card] hours: parse failed →", err, "\nraw value:", raw);
            return [];
        }
    }
    _parseSolcastPeriods(entries) {
        const buckets = new Map();
        const peakKw = new Map();
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
            peakKw.set(hour, Math.max(peakKw.get(hour) ?? 0, estimate));
        }
        return Array.from(buckets.entries())
            .map(([hour, kwh]) => ({ hour, kwh, maxKw: peakKw.get(hour) ?? kwh }))
            .sort((a, b) => a.hour - b.hour);
    }
    /**
     * Parse Volcast's `hours` attribute into HourPoint[].
     *
     * The attribute can take two forms:
     *
     *   a) Array of numbers — treated as a midnight-indexed 24-element array
     *      where index = clock hour. This is the standard Volcast format for
     *      full-day forecasts. If Volcast returns a shorter array (past hours
     *      removed during the day), left-over indices still map to clock hours
     *      0-N; the resulting LEFT filter in _renderLive will then apply the
     *      same clock-hour comparison, so hours are still excluded correctly.
     *
     *   b) Array of objects — clock hour is resolved in priority order:
     *        1. Numeric "hour", "time", or "h" field
     *        2. ISO datetime string in "period_start", "datetime", or "start"
     *           — the T-component is extracted directly (avoids UTC offset shift)
     *        3. Array index (last resort)
     *      Multiple sub-hourly periods for the same clock hour are summed.
     *
     * Output is sorted ascending by clock hour with leading/trailing zeros
     * trimmed, consistent with all other integration parsers.
     */
    _parseVolcastHours(raw) {
        if (raw.length === 0)
            return [];
        const buckets = new Map();
        const peakKw = new Map();
        for (let i = 0; i < raw.length; i++) {
            const v = raw[i];
            let hour;
            let kwh;
            if (typeof v === "number") {
                // Bare number: index = clock hour (standard 24-element midnight array)
                hour = i;
                kwh = isFinite(v) ? v : 0;
            }
            else if (typeof v === "object" && v !== null) {
                const obj = v;
                // ── Resolve clock hour ────────────────────────────────────────────
                const rawH = obj.hour ?? obj.time ?? obj.h;
                if (typeof rawH === "number" && isFinite(rawH)) {
                    hour = rawH;
                }
                else if (typeof rawH === "string") {
                    const parsed = parseInt(rawH, 10);
                    hour = isFinite(parsed) ? parsed : i;
                }
                else {
                    // Fallback: ISO datetime field — extract T-component as local hour.
                    // Matches "2024-04-26T14:00:00" → 14.  Avoids new Date() UTC shift.
                    const dtField = obj.period_start ?? obj.datetime ?? obj.start;
                    if (typeof dtField === "string") {
                        const m = dtField.match(/T(\d{2}):/);
                        hour = m ? parseInt(m[1], 10) : i;
                    }
                    else {
                        hour = i;
                    }
                }
                // ── Resolve energy value ──────────────────────────────────────────
                const rawV = obj.value ?? obj.energy ?? obj.kwh ??
                    obj.wh ?? obj.power_kw ?? obj.pv_estimate ??
                    obj.forecast ?? obj.solar ?? 0;
                kwh = typeof rawV === "number" ? rawV
                    : typeof rawV === "string" ? parseFloat(rawV)
                        : 0;
                if (!isFinite(kwh))
                    kwh = 0;
                const rawPower = obj.power_kw ?? obj.pv_estimate;
                const rawDurationHours = obj.duration_hours ?? obj.interval_hours;
                const rawDurationMinutes = obj.duration_minutes ?? obj.interval_minutes;
                const durationHours = typeof rawDurationHours === "number" ? rawDurationHours :
                    typeof rawDurationHours === "string" ? parseFloat(rawDurationHours) :
                        typeof rawDurationMinutes === "number" ? rawDurationMinutes / 60 :
                            typeof rawDurationMinutes === "string" ? parseFloat(rawDurationMinutes) / 60 :
                                1;
                const maxKw = typeof rawPower === "number" ? rawPower
                    : typeof rawPower === "string" ? parseFloat(rawPower)
                        : durationHours > 0 ? kwh / durationHours : kwh;
                peakKw.set(hour, Math.max(peakKw.get(hour) ?? 0, isFinite(maxKw) ? maxKw : kwh));
            }
            else {
                continue; // skip null / unexpected types
            }
            if (!isFinite(hour) || hour < 0 || hour > 23)
                continue;
            buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
            if (!peakKw.has(hour))
                peakKw.set(hour, kwh);
        }
        const points = Array.from(buckets.entries())
            .map(([hour, kwh]) => ({ hour, kwh, maxKw: peakKw.get(hour) ?? kwh }))
            .sort((a, b) => a.hour - b.hour);
        // Trim leading / trailing zeros — consistent with all other parsers
        let first = -1, last = -1;
        for (let i = 0; i < points.length; i++) {
            if (points[i].kwh > 0) {
                if (first === -1)
                    first = i;
                last = i;
            }
        }
        if (first === -1)
            return [];
        return points.slice(first, last + 1);
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
        const entries = Object.entries(raw)
            .map(([isoKey, val]) => {
            const hourMatch = isoKey.match(/T(\d{2}):/);
            const timestamp = Date.parse(isoKey);
            const wh = typeof val === "number" ? val
                : typeof val === "string" ? parseFloat(val)
                    : NaN;
            return {
                timestamp,
                hour: hourMatch ? parseInt(hourMatch[1], 10) : NaN,
                wh,
            };
        })
            .filter((entry) => isFinite(entry.hour) && entry.hour >= 0 && entry.hour <= 23 &&
            isFinite(entry.wh))
            .sort((a, b) => a.timestamp - b.timestamp);
        const buckets = new Map();
        const peakKw = new Map();
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            // Extract the hour directly from the ISO string (the T-portion is the
            // local hour in HA's timezone). Using new Date().getHours() would shift
            // the hour to the browser's local timezone, which may differ from HA's.
            const hour = entry.hour;
            const kwh = entry.wh / 1000; // Wh → kWh
            const nextTimestamp = entries[i + 1]?.timestamp;
            const durationHours = isFinite(entry.timestamp) && isFinite(nextTimestamp)
                ? Math.max((nextTimestamp - entry.timestamp) / 3600000, 0)
                : 1;
            const avgKw = durationHours > 0 ? kwh / durationHours : kwh;
            buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
            peakKw.set(hour, Math.max(peakKw.get(hour) ?? 0, avgKw));
        }
        // Filter out hours with zero generation — Open-Meteo includes all 24 hours
        // in wh_period (including night/cloudy hours with 0 Wh). The generic path
        // used by Volcast/Solcast trims only leading/trailing zeros; for Open-Meteo
        // we remove ALL zero-value hours so the popup shows only generating periods.
        return Array.from(buckets.entries())
            .filter(([, kwh]) => kwh > 0)
            .map(([hour, kwh]) => ({ hour, kwh, maxKw: peakKw.get(hour) ?? kwh }))
            .sort((a, b) => a.hour - b.hour);
    }
    _rawHoursForState(state, integrationType) {
        if (!state)
            return undefined;
        if (integrationType === "solcast") {
            return state.attributes?.detailedForecast ?? state.attributes?.hours;
        }
        if (integrationType === "volcast") {
            return state.attributes?.hours;
        }
        if (integrationType === "forecast_solar") {
            return state.attributes?.hours ?? state.attributes?.detailedForecast ?? state.attributes?.wh_period;
        }
        if (integrationType === "open_meteo_solar_forecast") {
            return state.attributes?.wh_period;
        }
        return state.attributes?.hours ?? state.attributes?.detailedForecast ?? state.attributes?.wh_period;
    }
    _exportLimitKw() {
        const limit = this._config?.export_limit_kw;
        return typeof limit === "number" && isFinite(limit) && limit > 0 ? limit : null;
    }
    _forecastAverageKw(point) {
        if (typeof point.maxKw === "number" && isFinite(point.maxKw))
            return point.maxKw;
        return isFinite(point.kwh) ? point.kwh : 0;
    }
    _exceedsExportLimit(point) {
        const limit = this._exportLimitKw();
        if (limit === null)
            return false;
        const avgKw = this._forecastAverageKw(point);
        return isFinite(avgKw) && avgKw > limit;
    }
    _rowExceedsExportLimit(row) {
        if (!row || this._exportLimitKw() === null)
            return false;
        return this._parseHours(row.rawHoursAttr, this._config?.integration_type, true)
            .some((point) => this._exceedsExportLimit(point));
    }
    _exportLimitTitle() {
        const limit = this._exportLimitKw();
        if (limit === null)
            return "";
        return this._t("card.labels.exportLimitTooltip", {
            limit: this._formatNumber(limit, 2),
            unit: this._t("card.units.kilowatts"),
        });
    }
    // ── Estimate10 ───────────────────────────────────────────────────────────
    /**
     * Sum the pv_estimate10 values from a Solcast detailedForecast attribute.
     *
     * detailedForecast is an array of 30-min period objects:
     *   { period_start: ISO, pv_estimate: kW, pv_estimate10: kW, pv_estimate90: kW }
     *
     * pv_estimate10 is the 10th-percentile kW output for each 30-min slot.
     * Multiplying by 0.5 converts the half-hourly kW figure to kWh.
     *
     * Returns null when the attribute is absent, not an array, or every entry
     * lacks a finite pv_estimate10 value — so the caller can cleanly skip
     * rendering rather than showing 0.00 kWh.
     */
    _sumEstimate10(raw) {
        if (!Array.isArray(raw) || raw.length === 0)
            return null;
        let total = 0;
        let hasAny = false;
        for (const entry of raw) {
            const val = entry.pv_estimate10;
            if (typeof val === "number" && isFinite(val)) {
                total += val * 0.5; // 30-min period kW → kWh
                hasAny = true;
            }
        }
        return hasAny ? total : null;
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
        const freshHours = this._rawHoursForState(freshState, intType);
        // Log which entity is being used and what the hours attribute looks like
        const hoursType = freshHours === undefined ? "missing"
            : freshHours === null ? "null"
                : Array.isArray(freshHours) ? `array[${freshHours.length}]`
                    : `${typeof freshHours}`;
        console.debug("[solar-forecast-card] popup →", row.entityId || "(no entity)", "| state:", freshState?.state ?? "n/a", "| hours:", hoursType);
        this._popup = { ...row, rawHoursAttr: freshHours ?? row.rawHoursAttr };
        this._popupVisible = false;
        // Fetch per-hour actual-generation history for today's popup.
        // Reset to null first so the popup renders forecast-only until the fetch
        // completes, then re-renders cleanly when the Map arrives.
        this._popupActualHourly = null;
        if (row.isToday && this._config?.today_actual_entity) {
            const entityId = this._config.today_actual_entity;
            this._fetchActualHourly(entityId).then((map) => {
                // Only apply if the popup is still open (user may have closed it while fetching)
                if (this._popup)
                    this._popupActualHourly = map;
            });
        }
        // Single rAF lets Lit stamp the overlay into the DOM before we add .visible
        requestAnimationFrame(() => { this._popupVisible = true; });
    }
    _closePopup() {
        this._popupVisible = false;
        this._popupActualHourly = null;
        this._closeTimer = setTimeout(() => { this._popup = null; }, POPUP_CLOSE_MS);
    }
    // ── Actual-generation history ─────────────────────────────────────────────
    /**
     * Fetch hourly actual-generation values for today from the HA history API.
     *
     * today_actual_entity is a cumulative energy sensor (kWh or Wh) whose value
     * rises monotonically through the day. Per-hour generation is the difference
     * between the sensor's value at the end and start of each hour boundary.
     *
     * Returns a Map<localHour (0–23), kWh> containing only hours with positive
     * generation (> 0).  Pre-sunrise and future hours are not included so the
     * popup table stays clean — a missing key means "no data / future", not zero.
     *
     * Returns an empty Map (never rejects) if the history API is unavailable,
     * the entity has no recorded history for today, or any other error occurs.
     */
    async _fetchActualHourly(entityId) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const hass = this.hass;
        if (!hass?.callApi)
            return new Map();
        const now = new Date();
        const startOfDay = new Date(now);
        startOfDay.setHours(0, 0, 0, 0);
        // Detect Wh vs kWh from the live entity state so history values are
        // normalised to kWh consistently with the rest of the card.
        const unit = this.hass?.states[entityId]?.attributes?.unit_of_measurement?.toLowerCase();
        const isWh = unit === "wh";
        try {
            // Build the history/period REST path.
            // significant_changes_only=false: return every recorded state change,
            // not just those that cross a threshold — essential for cumulative sensors.
            const path = `history/period/${startOfDay.toISOString()}` +
                `?filter_entity_id=${encodeURIComponent(entityId)}` +
                `&end_time=${encodeURIComponent(now.toISOString())}` +
                `&minimal_response=true&no_attributes=true&significant_changes_only=false`;
            const result = await hass.callApi("GET", path);
            if (!Array.isArray(result) || result.length === 0 || !Array.isArray(result[0])) {
                return new Map();
            }
            // Normalise: keep only entries with finite numeric state, sorted ascending.
            const entries = result[0]
                .filter((e) => e && typeof e.last_changed === "string" && isFinite(parseFloat(e.state)))
                .sort((a, b) => (a.last_changed < b.last_changed ? -1 : a.last_changed > b.last_changed ? 1 : 0));
            if (entries.length === 0)
                return new Map();
            /**
             * Returns the most-recent finite numeric state value recorded at or
             * before the given UTC ISO timestamp.  Entries are sorted ascending so
             * iteration stops as soon as we pass the target timestamp.
             */
            const valueAt = (isoTs) => {
                let val = null;
                for (const e of entries) {
                    if (e.last_changed <= isoTs) {
                        const v = parseFloat(e.state);
                        if (isFinite(v))
                            val = v;
                    }
                    else {
                        break;
                    }
                }
                return val;
            };
            const map = new Map();
            const currentHour = now.getHours();
            for (let h = 0; h <= currentHour; h++) {
                const hourStart = new Date(now);
                hourStart.setHours(h, 0, 0, 0);
                const hourEnd = new Date(now);
                hourEnd.setHours(h + 1, 0, 0, 0);
                const startVal = valueAt(hourStart.toISOString());
                const endVal = valueAt(hourEnd.toISOString());
                if (startVal === null || endVal === null)
                    continue;
                let delta = endVal - startVal;
                if (delta < 0)
                    continue; // sensor reset or stale data — skip
                if (isWh)
                    delta /= 1000; // Wh → kWh
                // Only record hours that actually generated something.
                // This keeps the popup table free of zero rows for pre-sunrise hours.
                if (delta > 0)
                    map.set(h, delta);
            }
            console.debug(`[solar-forecast-card] actual history: ${map.size} generating hour(s) found for ${entityId}`);
            return map;
        }
        catch (err) {
            console.debug("[solar-forecast-card] actual history fetch failed:", err);
            return new Map();
        }
    }
    // ── Formatting ────────────────────────────────────────────────────────────
    _dayLabel(row) {
        if (row.dayIndex === 1)
            return this._t("day.today");
        if (row.dayIndex === 2)
            return this._t("day.tomorrow");
        const { date } = row;
        return this._t(`day.${DAY_KEYS[date.getDay()]}`);
    }
    _dateLabel(date) {
        try {
            return new Intl.DateTimeFormat(this._dateLocaleCode(), {
                day: "2-digit",
                month: "2-digit",
            }).format(date);
        }
        catch {
            const d = String(date.getDate()).padStart(2, "0");
            const m = String(date.getMonth() + 1).padStart(2, "0");
            return `${d}/${m}`;
        }
    }
    _fullDateLabel(date, isToday) {
        const weekday = isToday ? this._t("card.days.today") : date.toLocaleDateString(this._localeCode(), { weekday: "long" });
        const dt = date.toLocaleDateString(this._localeCode(), { day: "numeric", month: "long" });
        return `${weekday} · ${dt}`;
    }
    _hourLabel(hour) {
        const date = new Date(2000, 0, 1, hour, 0, 0, 0);
        const hour12 = this._localeHour12();
        try {
            return new Intl.DateTimeFormat(this._dateLocaleCode(), {
                hour: "numeric",
                minute: "2-digit",
                ...(hour12 === undefined ? {} : { hour12 }),
            }).format(date);
        }
        catch {
            return String(hour).padStart(2, "0") + ":00";
        }
    }
    _localeHour12() {
        const timeFormat = this.hass?.locale?.time_format;
        if (typeof timeFormat !== "string")
            return undefined;
        const normalized = timeFormat.toLowerCase().replace(/[-_\s]/g, "");
        if (normalized === "12" || normalized === "12h" || normalized === "ampm")
            return true;
        if (normalized === "24" || normalized === "24h" || normalized === "twentyfour")
            return false;
        return undefined;
    }
    _formatNumber(value, minimumFractionDigits, maximumFractionDigits = minimumFractionDigits) {
        return new Intl.NumberFormat(this._localeCode(), {
            minimumFractionDigits,
            maximumFractionDigits,
        }).format(value);
    }
    // ── Styles ────────────────────────────────────────────────────────────────
    static get styles() {
        return i$5 `
      :host {
        display: block;
        --sfc-card-padding-default: 16px 12px 14px;
        --sfc-value-font-size-default: 0.75rem;
        --sfc-value-unit-font-size-default: 0.60rem;
        --sfc-value-estimate-font-size-default: 0.58rem;
        --sfc-value-empty-font-size-default: 0.78rem;
        --sfc-day-name-font-size-default: 0.75rem;
        --sfc-day-date-font-size-default: 0.65rem;
        --sfc-two-day-note-font-size-default: 0.65rem;
        --sfc-array-label-font-size-default: 0.5rem;
      }

      ha-card {
        background: var(--sfc-card-background, var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #fff))));
        border-radius: var(--sfc-card-border-radius, var(--ha-card-border-radius, 12px));
        box-shadow: var(--sfc-card-box-shadow, var(--ha-card-box-shadow, none));
        padding: var(--sfc-card-padding, var(--sfc-card-padding-default));
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

      /* Left column: stacks title + export rate row vertically */
      .header-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        flex: 1;
        min-width: 0;
      }

      .header-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: var(--sfc-title-font-size, 1.05rem);
        font-weight: 500;
        color: var(--sfc-title-color, var(--primary-text-color));
        flex-wrap: wrap;
      }

      .header-title ha-icon {
        color: var(--state-active-color, #fbbf24);
        flex-shrink: 0;
      }

      .export-limit-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        padding: 2px 6px;
        border-radius: 999px;
        background: rgba(245, 158, 11, 0.10);
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
        font-size: 0.66rem;
        font-weight: 700;
        line-height: 1;
        white-space: nowrap;
      }

      .export-limit-badge ha-icon {
        --mdc-icon-size: 12px;
        color: currentColor;
      }

      .export-rate-row {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.75rem;
        font-variant-numeric: tabular-nums;
        color: var(--sfc-header-value-color, var(--secondary-text-color));
        white-space: nowrap;
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
        color: var(--sfc-header-value-color, var(--secondary-text-color));
      }

      .live-label {
        font-weight: 700;
        color: var(--sfc-header-label-color, var(--state-active-color, #fbbf24));
      }

      .live-week {
        font-size: 0.68rem;
        font-variant-numeric: tabular-nums;
        color: var(--sfc-header-value-color, var(--secondary-text-color));
        opacity: 0.72;
      }

      .week-label {
        font-weight: 600;
        color: var(--sfc-header-label-color, var(--sfc-header-value-color, var(--secondary-text-color)));
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
        width: min(var(--sfc-bar-width, 72px), 72%);
      }

      .two-day-note {
        text-align: center;
        font-size: var(--sfc-two-day-note-font-size-default);
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

      .col.primary-day-label {
        padding-inline: 2px;
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
        font-size: var(--sfc-font-size, var(--sfc-value-font-size-default));
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        color: var(--primary-text-color);
        line-height: 1.15;
        white-space: nowrap;
      }

      .value-unit {
        font-size: var(--sfc-font-size, var(--sfc-value-unit-font-size-default));
        color: var(--secondary-text-color);
        line-height: 1.2;
      }

      .value-estimate10 {
        font-size: var(--sfc-font-size, var(--sfc-value-estimate-font-size-default));
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        opacity: 0.60;
        line-height: 1.3;
        white-space: nowrap;
      }


      .value-empty {
        font-size: var(--sfc-font-size, var(--sfc-value-empty-font-size-default));
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

      .bar-limit-marker {
        position: absolute;
        top: 4px;
        left: calc(50% + 8px);
        width: 14px;
        height: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        background: color-mix(in srgb, var(--ha-card-background, #fff) 76%, transparent);
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
        box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.28);
      }

      .bar-limit-marker ha-icon {
        --mdc-icon-size: 11px;
      }

      .bar-bg {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(var(--sfc-bar-width, 24px), 72%);
        height: 100%;
        border-radius: var(--sfc-bar-radius, 8px);
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.07));
      }

      .bar-forecast,
      .bar-actual,
      .bar-dotted {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(var(--sfc-bar-width, 24px), 72%);
        transition:
          height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1),
          bottom 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
      }

      /* ── Forecast bar — average (default, yellow/amber) ──────── */

      .bar-forecast {
        border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
        background: var(--sfc-average-color, linear-gradient(
          to top,
          rgba(245, 158, 11, 0.92),
          rgba(254, 215, 86, 0.78)
        ));
        box-shadow:
          0 0 0 1px rgba(251, 191, 36, 0.15),
          0 2px 10px 0 rgba(245, 158, 11, 0.28),
          0 0 16px 2px rgba(251, 191, 36, 0.18);
      }

      .bar-forecast.complete {
        background: var(--sfc-average-color, linear-gradient(
          to top,
          rgba(245, 158, 11, 0.98),
          rgba(254, 215, 86, 0.88)
        ));
        box-shadow:
          0 0 0 1px rgba(251, 191, 36, 0.25),
          0 2px 12px 0 rgba(245, 158, 11, 0.42),
          0 0 22px 4px rgba(251, 191, 36, 0.28);
      }

      /* ── Forecast bar — low (soft coral/rose) ────────────────── */

      .bar-forecast.low {
        background: var(--sfc-low-color, linear-gradient(
          to top,
          rgba(220, 80, 80, 0.88),
          rgba(252, 160, 155, 0.74)
        ));
        box-shadow:
          0 0 0 1px rgba(239, 68, 68, 0.14),
          0 2px 10px 0 rgba(220, 80, 80, 0.24),
          0 0 16px 2px rgba(239, 68, 68, 0.15);
      }

      .bar-forecast.complete.low {
        background: var(--sfc-low-color, linear-gradient(
          to top,
          rgba(220, 80, 80, 0.98),
          rgba(252, 160, 155, 0.88)
        ));
        box-shadow:
          0 0 0 1px rgba(239, 68, 68, 0.25),
          0 2px 12px 0 rgba(220, 80, 80, 0.40),
          0 0 22px 4px rgba(239, 68, 68, 0.26);
      }

      /* ── Forecast bar — high (green) ─────────────────────────── */

      .bar-forecast.high {
        background: var(--sfc-high-color, linear-gradient(
          to top,
          rgba(22, 163, 74, 0.92),
          rgba(74, 222, 128, 0.78)
        ));
        box-shadow:
          0 0 0 1px rgba(34, 197, 94, 0.15),
          0 2px 10px 0 rgba(22, 163, 74, 0.28),
          0 0 16px 2px rgba(34, 197, 94, 0.18);
      }

      .bar-forecast.complete.high {
        background: var(--sfc-high-color, linear-gradient(
          to top,
          rgba(22, 163, 74, 0.98),
          rgba(74, 222, 128, 0.90)
        ));
        box-shadow:
          0 0 0 1px rgba(34, 197, 94, 0.25),
          0 2px 12px 0 rgba(22, 163, 74, 0.42),
          0 0 22px 4px rgba(34, 197, 94, 0.28);
      }

      /* ── Actual generation bar — purple ──────────────────────── */

      .bar-actual {
        border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
        background: var(--sfc-actual-color, linear-gradient(
          to top,
          rgba(124, 58, 237, 0.90),
          rgba(196, 136, 255, 0.76)
        ));
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
        width: min(var(--sfc-bar-width, 24px), 72%);
        display: flex;
        flex-direction: column-reverse; /* first array sits at the bottom */
        border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
        overflow: hidden;
        transition:
          height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
      }

      .forecast-grid.two-day .bar-arrays-stack {
        width: min(var(--sfc-bar-width, 72px), 72%);
      }

      .bar-array-segment {
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .array-label {
        font-size: var(--sfc-font-size, var(--sfc-array-label-font-size-default));
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
       *   1  blue        cornflower / sky-blue
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
          to top, rgba(59, 130, 246, 0.90), rgba(147, 197, 253, 0.76)
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

      .bar-dotted.full    { border-radius: var(--sfc-bar-radius, 6px); }
      .bar-dotted.partial { border-bottom: none; border-radius: var(--sfc-bar-radius, 6px 6px 0 0); }

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
        font-size: var(--sfc-font-size, var(--sfc-day-name-font-size-default));
        font-weight: 500;
        color: var(--primary-text-color);
        line-height: 1.25;
        white-space: nowrap;
        text-align: center;
      }

      .col.today .day-name {
        font-weight: 700;
        color: var(--warning-color, #f59e0b);
      }

      .col.primary-day-label .day-name {
        max-width: 100%;
        white-space: normal;
        overflow-wrap: anywhere;
        line-height: 1.1;
      }

      .day-date {
        font-size: var(--sfc-font-size, var(--sfc-day-date-font-size-default));
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
        background: var(--sfc-popup-background, var(--ha-card-background, var(--card-background-color, #1c1c1e)));
        border-radius: var(--sfc-popup-border-radius, 20px);
        color: var(--sfc-popup-text-color, var(--primary-text-color));
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
        color: var(--sfc-popup-text-color, var(--primary-text-color));
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
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
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
        color: var(--sfc-popup-text-color, var(--primary-text-color));
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

      /* ── Inline hourly main-card view ─────────────────────── */

      .main-hourly {
        padding: 0 4px 2px;
      }

      .main-hourly-summary {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
        padding: 0 4px 8px;
        border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
        color: var(--secondary-text-color);
      }

      .main-hourly-day {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--sfc-popup-text-color, var(--primary-text-color));
      }

      .main-hourly-total {
        flex-shrink: 0;
        font-size: 0.74rem;
        font-variant-numeric: tabular-nums;
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
      }

      .main-hourly-chart {
        max-height: min(360px, 55vh);
        padding: 10px 4px 2px;
      }

      .main-hourly .chart-no-data {
        padding: 26px 8px 24px;
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

      .chart-row.export-limit-exceeded {
        position: relative;
        border-radius: 4px;
        background: rgba(245, 158, 11, 0.045);
        box-shadow: inset 2px 0 0 0 rgba(245, 158, 11, 0.40);
      }

      .chart-row.export-limit-exceeded > * {
        position: relative;
        z-index: 1;
      }

      .chart-hour {
        font-size: 0.70rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        text-align: right;
        line-height: 1;
        opacity: 0.75;
      }

      .chart-limit-icon {
        --mdc-icon-size: 11px;
        margin-left: 2px;
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
        opacity: 0.9;
        vertical-align: -2px;
      }

      .chart-bar-track {
        position: relative;
        height: 9px;
        border-radius: 5px;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.08));
        overflow: hidden;
      }

      .chart-bar-track.with-actual {
        height: 14px;
      }

      .chart-bar-fill {
        position: absolute;
        inset: 0 auto 0 0;
        border-radius: 5px;
        background: var(--sfc-average-color, linear-gradient(
          to right,
          rgba(245, 158, 11, 0.88),
          rgba(254, 215, 86, 0.76)
        ));
        /* Bars animate in staggered via --delay set inline */
        animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
        animation-delay: var(--delay, 0ms);
      }

      .chart-bar-track.with-actual .chart-bar-fill {
        bottom: 5px;
        height: 8px;
      }

      .chart-bar-fill.peak {
        background: var(--sfc-average-color, linear-gradient(
          to right,
          rgba(245, 158, 11, 1.0),
          rgba(254, 215, 86, 0.92)
        ));
        box-shadow: 0 0 7px 1px rgba(245, 158, 11, 0.38);
      }

      .chart-actual-fill {
        position: absolute;
        left: 0;
        bottom: 1px;
        height: 3px;
        border-radius: 3px;
        background: linear-gradient(
          to right,
          rgba(220, 80, 80, 0.78),
          rgba(252, 160, 155, 0.68)
        );
        animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
        animation-delay: var(--delay, 0ms);
      }

      .chart-actual-fill.actual-match {
        background: linear-gradient(
          to right,
          rgba(245, 158, 11, 0.82),
          rgba(254, 215, 86, 0.70)
        );
      }

      .chart-actual-fill.actual-over {
        background: linear-gradient(
          to right,
          rgba(22, 163, 74, 0.82),
          rgba(74, 222, 128, 0.70)
        );
        box-shadow: 0 0 6px 1px rgba(34, 197, 94, 0.24);
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
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
        font-weight: 600;
      }

      /* ── Popup chart — 4-column layout (today + actual) ────── */

      /* Extend the grid when actual history data is available */
      .chart-header.with-actuals,
      .chart-row.with-actuals {
        grid-template-columns: 2.8rem 1fr 2.6rem 2.8rem;
      }

      /* Align the "Fcst" header label left (matches bar-value column) */
      /* Align the "Act." header label right (matches actual-value column) */
      .chart-header.with-actuals .col-actual {
        text-align: right;
      }

      /* Actual-generation value cell */
      .chart-val-actual {
        font-size: 0.70rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        font-weight: 500;
        line-height: 1;
        text-align: right;
      }

      .chart-val-actual.actual-under {
        color: rgba(220, 80, 80, 0.92);
      }

      .chart-val-actual.actual-match {
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
      }

      .chart-val-actual.actual-over {
        color: var(--success-color, #4caf50);
      }

      /* Placeholder dash for hours with no actual data (future / pre-sunrise) */
      .chart-val-actual.empty {
        color: var(--secondary-text-color);
        opacity: 0.35;
        font-weight: 400;
      }

      /* ── Current-hour highlight (today only) ─────────────────── */

      /* Subtle amber-tinted row with a 2 px left accent line.
         Inset box-shadow is used for the accent so it doesn't affect layout.
         The amber values match the forecast bar / today column palette so the
         highlight feels at home in both light and dark HA themes. */
      .chart-row.current-hour {
        position: relative;
        border-radius: 4px;
      }

      .chart-row.current-hour::before {
        content: "";
        position: absolute;
        inset: -2px -2px;
        pointer-events: none;
        border-radius: 4px;
        background: rgba(251, 191, 36, 0.07);
        box-shadow: inset 2px 0 0 0 var(--sfc-popup-accent-color, rgba(245, 158, 11, 0.50));
        z-index: 0;
      }

      .chart-row.current-hour > * {
        position: relative;
        z-index: 1;
      }

      /* Amber time label so the current hour is easy to find at a glance */
      .chart-row.current-hour .chart-hour {
        color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
        opacity: 1;
      }

      /* ══════════════════════════════════════════════════════════
         DESKTOP TEXT SCALING
         ══════════════════════════════════════════════════════════
         --dts-factor is set by setConfig() from desktop_text_scale
         (config value / 100, default 1.0).

         Applied ONLY on viewports >= 768 px so mobile sizing is
         always left untouched.  At the default factor of 1.0 the
         calc() values are numerically identical to the base sizes,
         so there is zero visual change for users who haven't set
         the option.

         Scope: header, daily value labels, day labels, bar segment
         labels, and summary values in the live header.
         Popup text is intentionally excluded — it is a modal panel
         that already displays at comfortable reading size.
         ══════════════════════════════════════════════════════════ */

      @media (min-width: 768px) {
        :host {
          --sfc-value-font-size-default: calc(0.75rem * var(--dts-factor, 1));
          --sfc-value-unit-font-size-default: calc(0.60rem * var(--dts-factor, 1));
          --sfc-value-estimate-font-size-default: calc(0.58rem * var(--dts-factor, 1));
          --sfc-value-empty-font-size-default: calc(0.78rem * var(--dts-factor, 1));
          --sfc-day-name-font-size-default: calc(0.75rem * var(--dts-factor, 1));
          --sfc-day-date-font-size-default: calc(0.65rem * var(--dts-factor, 1));
          --sfc-two-day-note-font-size-default: calc(0.65rem * var(--dts-factor, 1));
          --sfc-array-label-font-size-default: calc(0.5rem * var(--dts-factor, 1));
        }

        /* Header */
        .header-title    { font-size: calc(1.05rem * var(--dts-factor, 1)); }
        .export-rate-row { font-size: calc(0.75rem * var(--dts-factor, 1)); }
        .live-row        { font-size: calc(0.75rem * var(--dts-factor, 1)); }
        .live-week       { font-size: calc(0.68rem * var(--dts-factor, 1)); }

        /* Inline hourly summary */
        .main-hourly-day   { font-size: calc(0.82rem * var(--dts-factor, 1)); }
        .main-hourly-total { font-size: calc(0.74rem * var(--dts-factor, 1)); }
      }
    `;
    }
    // ── Render ────────────────────────────────────────────────────────────────
    render() {
        if (!this._config)
            return A;
        const title = this._config.title ?? this._t("card.defaultTitle");
        const icon = this._config.icon ?? "mdi:solar-power";
        const hasEntities = this._config.forecast_entities.some(Boolean);
        const rows = this._buildRows();
        const todayExportLimitWarning = this._rowExceedsExportLimit(rows[0]);
        const header = this._config.show_header ? b `
      <div part="header" class="card-header">
        <div class="header-left">
          <div part="title" class="header-title">
            <ha-icon icon=${icon}></ha-icon>
            <span>${title}</span>
            ${todayExportLimitWarning ? b `
              <span class="export-limit-badge" title=${this._exportLimitTitle()}>
                <ha-icon icon="mdi:alert-outline"></ha-icon>
                <span>${this._t("card.labels.exportLimitShort")}</span>
              </span>
            ` : A}
          </div>
          ${this._renderExportRate()}
        </div>
        ${this._renderLive()}
      </div>
    ` : A;
        const cardStyle = this._cardStyle();
        if (this._config.show_hourly_as_main) {
            return b `
        <ha-card part="card" style=${o(cardStyle)}>
          ${header}
          ${this._renderMainHourly(rows[0])}
        </ha-card>
      `;
        }
        if (!hasEntities) {
            return b `
        <ha-card part="card" style=${o(cardStyle)}>
          ${header}
          <div class="placeholder">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            <p>${this._t("card.placeholder")}<br />${this._t("card.placeholderAction")}</p>
          </div>
        </ha-card>
      `;
        }
        const validRows = rows.filter((r) => r.entityId);
        const isTwoDay = this._config.integration_type === "forecast_solar" && validRows.length <= 2;
        const displayRows = isTwoDay ? validRows : rows;
        return b `
      <ha-card part="card" style=${o(cardStyle)}>
        ${header}
        <div class="forecast-grid ${isTwoDay ? "two-day" : ""}">
          ${displayRows.map((row) => this._renderCol(row))}
        </div>
        ${isTwoDay ? b `<div class="two-day-note">${this._t("card.twoDayNote")}</div>` : A}
      </ha-card>
      ${this._renderPopup()}
    `;
    }
    // ── Export rate ───────────────────────────────────────────────────────────
    _renderExportRate() {
        const cfg = this._config;
        if (!cfg.export_rate_entity)
            return A;
        const st = this.hass?.states[cfg.export_rate_entity];
        if (!st)
            return A;
        // Treat unavailable / unknown / non-numeric states as absent — hide cleanly
        const num = parseFloat(st.state);
        if (!isFinite(num))
            return A;
        const unit = st.attributes?.unit_of_measurement ?? "";
        return b `
      <div class="export-rate-row">
        <span class="live-label">${this._t("card.labels.exportRate")}</span>
        <span>${st.state}${unit ? ` ${unit}` : ""}</span>
      </div>
    `;
    }
    // ── Live badge ────────────────────────────────────────────────────────────
    _formatPower(watts) {
        if (watts < 10)
            return `0 ${this._t("card.units.watts")}`;
        if (watts < 1000)
            return `${Math.round(watts)} ${this._t("card.units.watts")}`;
        return `${this._formatNumber(watts / 1000, 1)} ${this._t("card.units.kilowatts")}`;
    }
    /**
     * Format an energy value compactly: 2 dp below 1 kWh, 1 dp above.
     * Guards against non-finite input — should never occur in normal use, but
     * prevents "NaN kWh" / "Infinity kWh" from appearing in the header.
     */
    _formatKwh(kwh) {
        if (!isFinite(kwh) || kwh < 0)
            return `0.00 ${this._t("card.units.kilowattHours")}`;
        return `${kwh < 1 ? this._formatNumber(kwh, 2) : this._formatNumber(kwh, 1)} ${this._t("card.units.kilowattHours")}`;
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
        // ── Actual generation total — arrays take precedence over single entity ──
        // When actual_arrays are configured and producing (sum > 0) their sum is the
        // canonical header total. When arrays are configured but sum to 0 (pre-sunrise,
        // all entities unavailable, etc.) we fall back to today_actual_entity — the
        // same precedence rule that _buildRows uses so the bar and header always agree.
        let actualKwh = NaN;
        const hasArrays = (cfg.actual_arrays?.length ?? 0) > 0;
        if (hasArrays) {
            const arraysSum = cfg.actual_arrays.reduce((s, a) => {
                const st = a.entity ? this.hass?.states[a.entity] : undefined;
                const raw = parseFloat(st?.state ?? "");
                const unit = st?.attributes?.unit_of_measurement?.toLowerCase();
                return s + (isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : 0);
            }, 0);
            if (arraysSum > 0) {
                // Arrays are live — their sum is the canonical total.
                actualKwh = arraysSum;
            }
            else if (cfg.today_actual_entity) {
                // Arrays sum to 0 (pre-sunrise / all unavailable) — fall back to the
                // single entity so the header always matches the bar in _renderCol.
                const actualState = this.hass?.states[cfg.today_actual_entity];
                const actualRawVal = parseFloat(actualState?.state ?? "");
                const actualRawUnit = actualState?.attributes?.unit_of_measurement?.toLowerCase();
                const v = isFinite(actualRawVal) ? (actualRawUnit === "wh" ? actualRawVal / 1000 : actualRawVal) : NaN;
                if (isFinite(v))
                    actualKwh = v;
            }
            // If arrays are configured but neither path produces a finite value,
            // actualKwh stays NaN and the header omits the actual total cleanly.
        }
        else if (cfg.today_actual_entity) {
            const actualState = this.hass?.states[cfg.today_actual_entity];
            const actualRawVal = parseFloat(actualState?.state ?? "");
            const actualRawUnit = actualState?.attributes?.unit_of_measurement?.toLowerCase();
            actualKwh = isFinite(actualRawVal)
                ? (actualRawUnit === "wh" ? actualRawVal / 1000 : actualRawVal)
                : NaN;
        }
        const hasPower = isFinite(powerW);
        const hasActual = isFinite(actualKwh);
        // ── Week total / daily average ────────────────────────────────────────────
        const validForecasts = cfg.forecast_entities
            .map((id) => (id ? parseFloat(this.hass?.states[id]?.state ?? "") : NaN))
            .filter((v) => isFinite(v));
        const weekTotal = validForecasts.reduce((s, v) => s + v, 0);
        const avgDay = validForecasts.length > 0 ? weekTotal / validForecasts.length : NaN;
        const hasWeek = validForecasts.length > 0;
        // ── Forecast summary: +1HR and LEFT ──────────────────────────────────────
        // Both values are derived purely from the integration's own hourly forecast
        // data — they are independent of actual generation sensors.
        //
        // +1HR — forecast kWh for the next full hour (currentHour + 1).
        // LEFT — sum of all forecast kWh for every hour still remaining today
        //        (i.e. all hours > currentHour, which includes +1HR itself).
        //
        // The gate is data-driven, not integration-name-driven: rawHours resolves
        // to undefined for any integration that carries no hourly attribute
        // (forecast.solar being the current example), and the inner block is
        // skipped cleanly — both values stay null and the line is not rendered.
        //
        // Attribute resolution mirrors _openPopup exactly so all four integrations
        // are handled by the same _parseHours normalisation path:
        //   Volcast        → hours            (array of numbers/objects)
        //   Solcast        → detailedForecast  (30-min period objects → aggregated hourly)
        //   Open-Meteo     → wh_period         (ISO datetime→Wh dict  → hourly kWh)
        //   forecast.solar → undefined         (no hourly data; values not shown)
        //   manual         → hours ?? detailedForecast (best-effort fallback)
        let nextHourKwh = null;
        let forecastLeftKwh = null;
        const todayEntityId = cfg.forecast_entities[0];
        const todayFcState = todayEntityId ? this.hass?.states[todayEntityId] : undefined;
        if (todayEntityId && todayFcState) {
            const intType = cfg.integration_type;
            // Mirrors the attribute resolution in _openPopup — keep in sync if that changes.
            const rawHours = this._rawHoursForState(todayFcState, intType);
            if (rawHours !== undefined) {
                try {
                    // nextForecastHour is the next FULL hour slot after whatever the clock
                    // currently shows.  At 13:15 → 14; at 13:00 → 14; at 23:50 → 24.
                    // Hour 24 won't match any slot so both values stay null after midnight.
                    const currentHour = new Date().getHours(); // 0–23, browser/local time
                    const nextForecastHour = currentHour + 1;
                    // Parse silently — runs on every render, console noise not wanted here
                    const points = this._parseHours(rawHours, intType, true);
                    // +1HR — the single forecast bucket for the next upcoming full hour.
                    // Example: 13:15 → slot 14, 13:59 → slot 14.
                    // isFinite guard: _parseHours already ensures finite values, but we
                    // defend here too so a bad attribute can never produce "NaN kWh".
                    const nextHourPt = points.find((p) => p.hour === nextForecastHour);
                    if (nextHourPt && isFinite(nextHourPt.kwh)) {
                        nextHourKwh = nextHourPt.kwh;
                    }
                    // LEFT — sum of all forecast buckets from the next full hour onward.
                    // Example: 13:15 → slots 14 + 15 + 16 … through end of today.
                    // Tomorrow is automatically excluded: _parseHours only processes
                    // today's entity and its trimming removes trailing zero slots, so
                    // no tomorrow data can be present in points[].
                    const futurePoints = points.filter((p) => p.hour >= nextForecastHour);
                    if (futurePoints.length > 0) {
                        const sum = futurePoints.reduce((s, p) => s + p.kwh, 0);
                        if (isFinite(sum))
                            forecastLeftKwh = sum;
                    }
                }
                catch {
                    // If parsing or calculation fails for any reason, leave both values
                    // as null so the summary line is simply not rendered rather than
                    // showing broken or misleading data.
                    nextHourKwh = null;
                    forecastLeftKwh = null;
                }
            }
        }
        // ── Manual entity overrides ────────────────────────────────────────────────
        // When next_hour_entity / remaining_today_entity are configured in the card
        // config, their state values take precedence over the auto-derived results
        // computed above. This lets users point to any sensor (e.g. a helper or a
        // custom integration attribute) regardless of integration type.
        // Both Wh and kWh units are normalised to kWh for consistency.
        if (cfg.next_hour_entity) {
            const st = this.hass?.states[cfg.next_hour_entity];
            const raw = parseFloat(st?.state ?? "");
            const unit = st?.attributes?.unit_of_measurement?.toLowerCase();
            const kwh = isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : NaN;
            if (isFinite(kwh))
                nextHourKwh = kwh;
        }
        if (cfg.remaining_today_entity) {
            const st = this.hass?.states[cfg.remaining_today_entity];
            const raw = parseFloat(st?.state ?? "");
            const unit = st?.attributes?.unit_of_measurement?.toLowerCase();
            const kwh = isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : NaN;
            if (isFinite(kwh))
                forecastLeftKwh = kwh;
        }
        const hasForecastSummary = nextHourKwh !== null || forecastLeftKwh !== null;
        if (!hasPower && !hasActual && !hasWeek && !hasForecastSummary)
            return A;
        const liveParts = [];
        if (hasPower)
            liveParts.push(this._formatPower(powerW));
        if (hasActual)
            liveParts.push(`${this._formatNumber(actualKwh, 1)} ${this._t("card.units.kilowattHours")}`);
        return b `
      <div class="header-live">
        ${hasPower || hasActual ? b `
          <div class="live-row">
            <span class="live-label">${this._t("card.labels.live")}</span>
            <span>${liveParts.join(" | ")}</span>
          </div>
        ` : A}
        ${hasForecastSummary ? b `
          <div class="live-row">
            ${nextHourKwh !== null ? b `
              <span class="live-label">${this._t("card.labels.nextHour")}</span>
              <span>${this._formatKwh(nextHourKwh)}</span>
            ` : A}
            ${nextHourKwh !== null && forecastLeftKwh !== null ? b `
              <span style="opacity:0.35">|</span>
            ` : A}
            ${forecastLeftKwh !== null ? b `
              <span class="live-label">${this._t("card.labels.left")}</span>
              <span>${this._formatKwh(forecastLeftKwh)}</span>
            ` : A}
          </div>
        ` : A}
        ${hasWeek ? b `
          <div class="live-week">
            <span class="week-label">${this._t("card.labels.week")}</span>
            ${this._formatNumber(weekTotal, 1)} ${this._t("card.units.kilowattHours")} | <span class="week-label">${this._t("card.labels.avg")}</span> ${this._formatNumber(avgDay, 1)} ${this._t("card.units.kilowattHoursPerDay")}
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
            const sum = row.actualArrays.reduce((s, a) => s + a.kwh, 0);
            if (sum > 0) {
                // Arrays are producing — show per-array breakdown with total.
                const arrayText = row.actualArrays
                    .map((a) => `${a.label || "?"}: ${this._formatNumber(a.kwh, 1)} ${this._t("card.units.kilowattHours")}`)
                    .join(" | ");
                return b `
          <span class="popup-subtitle">
            ${arrayText} | <span class="popup-total-kwh">${this._t("card.labels.total")}: ${this._formatNumber(sum, 1)} ${this._t("card.units.kilowattHours")}</span>
          </span>
        `;
            }
            // Arrays sum to 0 (pre-sunrise / all unavailable) — fall through to
            // single-entity display so row.actualKwh (from today_actual_entity) shows
            // rather than an all-zeros breakdown.
        }
        // No arrays configured, or arrays configured but not yet producing.
        // Show the single actual total when available (row.actualKwh is the
        // today_actual_entity value, or the arrays sum when they are producing —
        // _buildRows ensures these are consistent).
        if (row.actualKwh !== null) {
            return b `
        <span class="popup-subtitle">
          <span class="popup-total-kwh">${this._formatNumber(row.actualKwh, 2)}</span> ${this._t("card.units.kilowattHours")} ${this._t("card.labels.generated")}
        </span>
      `;
        }
        return A;
    }
    // ── Column ────────────────────────────────────────────────────────────────
    _renderCol(row) {
        const { forecastPct, actualPct, dottedPct, isComplete, isToday } = row;
        const tier = this._tier(row.forecastKwh);
        const exportLimitWarning = this._rowExceedsExportLimit(row);
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
                bars = b `<div part="daily-bar" class="bar-forecast complete ${tier}" style="height:${forecastPct}%"></div>`;
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
          <div part="daily-bar" class="bar-arrays-stack" style="height:${actualPct}%">
            ${visibleArrays.map((arr, i) => {
                    const segPx = sumKwh > 0 ? (arr.kwh / sumKwh) * stackPx : 0;
                    const showLabel = arr.label && segPx >= 16;
                    return b `
                <div part="daily-bar" class="bar-array-segment seg-color-${i % 8}" style="flex:${arr.kwh}">
                  ${showLabel ? b `<span class="array-label">${arr.label}</span>` : A}
                </div>
              `;
                })}
          </div>
          ${hasDotted ? b `
            <div part="daily-bar" class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
                 style="height:${dottedPct}%;bottom:${actualPct}%"></div>
          ` : A}
        `;
            }
            else {
                // ── Single-colour actual bar — default and single-source fallback ───
                const hasDotted = dottedPct > 1;
                bars = b `
          <div part="daily-bar" class="bar-actual ${hasDotted ? "below-dotted" : ""}"
               style="height:${actualPct}%"></div>
          ${hasDotted ? b `
            <div part="daily-bar" class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
                 style="height:${dottedPct}%;bottom:${actualPct}%"></div>
          ` : A}
        `;
            }
        }
        else {
            bars = b `<div part="daily-bar" class="bar-forecast ${tier}" style="height:${forecastPct}%"></div>`;
        }
        const valueLabel = row.forecastKwh !== null
            ? b `<span class="value-num">${this._formatNumber(row.forecastKwh, 1)}</span><span class="value-unit">${this._t("card.units.kilowattHours")}</span>`
            : b `<span class="value-empty">—</span>`;
        const estimate10Label = row.estimate10Kwh !== null
            ? b `<span class="value-estimate10">${this._t("card.labels.p10")} ${this._formatNumber(row.estimate10Kwh, 1)}</span>`
            : A;
        return b `
      <div
        class="col ${isToday ? "today" : ""} ${row.dayIndex <= 2 ? "primary-day-label" : ""}"
        role="button"
        tabindex="0"
        aria-label=${this._t("card.aria.dayButton", { day: this._dayLabel(row), date: this._dateLabel(row.date) })}
        @click=${() => this._openPopup(row)}
        @keydown=${(e) => (e.key === "Enter" || e.key === " ") && this._openPopup(row)}
      >
        <div part="daily-value" class="col-value">${valueLabel}${estimate10Label}</div>
        <div class="col-bar-wrap">
          <div part="daily-bar" class="bar-bg"></div>
          ${bars}
          ${exportLimitWarning ? b `
            <span class="bar-limit-marker" title=${this._exportLimitTitle()}>
              <ha-icon icon="mdi:alert-outline"></ha-icon>
            </span>
          ` : A}
        </div>
        <div part="daily-label" class="col-label">
          <span class="day-name">${this._dayLabel(row)}</span>
          <span class="day-date">${this._dateLabel(row.date)}</span>
        </div>
      </div>
    `;
    }
    // ── Main-card hourly view ─────────────────────────────────────────────────
    _renderMainHourly(row) {
        if (!row || !row.entityId) {
            return b `
        <div class="main-hourly">
          <div class="chart-no-data">
            <p>${this._t("card.popup.noHourlyData")}</p>
          </div>
        </div>
      `;
        }
        this._ensureMainActualHourly(row);
        return b `
      <div class="main-hourly">
        <div class="main-hourly-summary">
          <span class="main-hourly-day">${this._fullDateLabel(row.date, row.isToday)}</span>
          <span class="main-hourly-total">
            ${row.forecastKwh !== null
            ? `${this._formatNumber(row.forecastKwh, 2)} ${this._t("card.units.kilowattHours")} ${this._t("card.labels.forecast")}`
            : this._t("card.popup.noForecastData")}
          </span>
        </div>
        <div class="chart-scroll main-hourly-chart">
          ${this._renderHourlyChartContent(row, row.isToday ? this._mainActualHourly : undefined)}
        </div>
      </div>
    `;
    }
    _ensureMainActualHourly(row) {
        const entityId = this._config?.today_actual_entity;
        if (!this._config?.show_hourly_as_main || !row.isToday || !entityId) {
            this._mainActualFetchKey = undefined;
            this._mainActualDataScope = undefined;
            this._mainActualRefreshInFlight = false;
            this._mainActualNextRefreshAt = 0;
            if (this._mainActualHourly !== null)
                this._mainActualHourly = null;
            return;
        }
        const todayKey = new Date().toDateString();
        const scopeKey = `${entityId}|${todayKey}`;
        if (this._mainActualDataScope !== scopeKey) {
            this._mainActualDataScope = scopeKey;
            this._mainActualFetchKey = undefined;
            this._mainActualRefreshInFlight = false;
            this._mainActualNextRefreshAt = 0;
            if (this._mainActualHourly !== null)
                this._mainActualHourly = null;
        }
        const refreshKey = `${scopeKey}|${new Date().getHours()}`;
        const now = Date.now();
        const hasActualData = this._mainActualHourly instanceof Map;
        if (this._mainActualRefreshInFlight ||
            (hasActualData && this._mainActualFetchKey === refreshKey && now < this._mainActualNextRefreshAt)) {
            return;
        }
        this._mainActualFetchKey = refreshKey;
        this._mainActualRefreshInFlight = true;
        this._fetchActualHourly(entityId).then((map) => {
            if (this._mainActualFetchKey === refreshKey &&
                this._mainActualDataScope === scopeKey &&
                this._config?.show_hourly_as_main) {
                // Keep the last known non-empty dataset visible if HA briefly returns an
                // empty history response during a refresh. This prevents the inline
                // hourly Actual column from disappearing on frequent sensor updates.
                const hasExistingData = this._mainActualHourly instanceof Map && this._mainActualHourly.size > 0;
                if (map.size > 0 || !hasExistingData) {
                    this._mainActualHourly = map;
                }
                this._mainActualNextRefreshAt = Date.now() + MAIN_ACTUAL_REFRESH_MS;
            }
        }).finally(() => {
            if (this._mainActualFetchKey === refreshKey && this._mainActualDataScope === scopeKey) {
                this._mainActualRefreshInFlight = false;
            }
        });
    }
    _renderHourlyChartContent(row, actualHourly) {
        const points = this._parseHours(row.rawHoursAttr, this._config?.integration_type);
        if (this._config?.integration_type === "forecast_solar" && points.length === 0) {
            return b `
        <div class="chart-no-data">
          <p>${this._t("card.popup.integrationNoHourlyData")}</p>
        </div>
      `;
        }
        const peakKwh = points.length ? Math.max(...points.map((p) => p.kwh)) : 0;
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
        return this._renderHourlyChart(points, peakKwh, maxRef, row.isToday ? actualHourly : undefined, row.isToday);
    }
    // ── Popup ─────────────────────────────────────────────────────────────────
    _renderPopup() {
        if (!this._popup)
            return A;
        const row = this._popup;
        const chartContent = this._renderHourlyChartContent(row, row.isToday ? this._popupActualHourly : undefined);
        return b `
      <div
        class="popup-overlay ${this._popupVisible ? "visible" : ""}"
        @click=${this._closePopup}
      >
        <div part="popup" class="popup-panel" @click=${(e) => e.stopPropagation()}>

          <div class="popup-header">
            <div class="popup-title">
              <span class="popup-day-name">
                ${this._fullDateLabel(row.date, row.isToday)}
              </span>
              <span class="popup-subtitle">
                ${row.forecastKwh !== null
            ? b `<span class="popup-total-kwh">${this._formatNumber(row.forecastKwh, 2)}</span> ${this._t("card.units.kilowattHours")} ${this._t("card.labels.forecast")}`
            : b `${this._t("card.popup.noForecastData")}`}
              </span>
              ${this._renderActualSubtitle(row)}
            </div>
            <button
              class="popup-close"
              aria-label=${this._t("card.popup.close")}
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
    /**
     * Render the hourly forecast chart rows.
     *
     * @param points       Parsed hourly forecast points (trimmed, sorted by hour).
     * @param peakKwh      Highest forecast kWh value — used to highlight peak row.
     * @param maxRef       Bar-scale ceiling (inverter / array / day peak).
     * @param actualHourly Optional: Map<localHour, kWh> from HA history.
     *   undefined  → not today; render forecast-only (3-column, unchanged layout).
     *   null       → today but fetch still in progress; render forecast-only until ready.
     *   Map        → today, fetch complete; render 4-column with Forecast + Actual.
     * @param isToday      True when the popup is showing today's forecast. Used to
     *   enable current-hour row highlighting; false/undefined = no highlight.
     */
    _renderHourlyChart(points, peakKwh, maxRef, actualHourly, isToday) {
        if (points.length === 0) {
            return b `
        <div class="chart-no-data">
          <p>${this._t("card.popup.noHourlyData")}</p>
        </div>
      `;
        }
        // Only show the Actual column when the fetch has completed (Map, not null/undefined)
        const showActualCol = actualHourly instanceof Map;
        // Current local hour — used to highlight the matching row.
        // Set to -1 for future days so no row ever matches.
        const currentHour = isToday ? new Date().getHours() : -1;
        return [
            b `
        <div class="chart-header ${showActualCol ? "with-actuals" : ""}">
          <span class="col-time">${this._t("card.popup.chart.time")}</span>
          <span class="col-power">${this._t("card.popup.chart.power")}</span>
          <span class="col-kwh">${showActualCol ? this._t("card.popup.chart.forecastShort") : this._t("card.popup.chart.kwh")}</span>
          ${showActualCol ? b `<span class="col-actual">${this._t("card.popup.chart.actualShort")}</span>` : A}
        </div>
      `,
            ...points.map((pt, i) => {
                const pct = maxRef > 0 ? Math.min((pt.kwh / maxRef) * 100, 100) : 0;
                const isPeak = pt.kwh === peakKwh && peakKwh > 0;
                const isCurrentHour = pt.hour === currentHour;
                const exportLimitExceeded = this._exceedsExportLimit(pt);
                // Stagger: 20ms base + 18ms per row, capped at 300ms
                const delay = Math.min(20 + i * 18, 300);
                // Look up actual kWh for this hour.
                // null  = no entry in map → future hour or pre-sunrise → show dash
                // number = real measured value (> 0 since map only stores positives)
                const actualKwh = showActualCol
                    ? (actualHourly.has(pt.hour) ? actualHourly.get(pt.hour) : null)
                    : null;
                const actualPct = actualKwh !== null && maxRef > 0
                    ? Math.min((actualKwh / maxRef) * 100, 100)
                    : 0;
                const compareClass = actualKwh === null
                    ? ""
                    : actualKwh > pt.kwh + 0.005
                        ? "actual-over"
                        : actualKwh < pt.kwh - 0.005
                            ? "actual-under"
                            : "actual-match";
                return b `
          <div part="popup-row" class="chart-row
            ${showActualCol ? "with-actuals" : ""}
            ${isCurrentHour ? "current-hour" : ""}
            ${exportLimitExceeded ? "export-limit-exceeded" : ""}"
            title=${exportLimitExceeded ? this._exportLimitTitle() : ""}>
            <span class="chart-hour">
              ${this._hourLabel(pt.hour)}
              ${exportLimitExceeded ? b `
                <ha-icon class="chart-limit-icon" icon="mdi:alert-outline"></ha-icon>
              ` : A}
            </span>
            <div class="chart-bar-track ${actualKwh !== null ? "with-actual" : ""}">
              <div
                class="chart-bar-fill ${isPeak ? "peak" : ""}"
                style="width:${pct.toFixed(1)}%;--delay:${delay}ms"
              ></div>
              ${actualKwh !== null ? b `
                <div
                  class="chart-actual-fill ${compareClass}"
                  style="width:${actualPct.toFixed(1)}%;--delay:${delay}ms"
                ></div>
              ` : A}
            </div>
            <span class="chart-val ${isPeak ? "peak" : ""}">
              ${this._formatNumber(pt.kwh, 2)}
            </span>
            ${showActualCol ? b `
              <span class="chart-val-actual ${actualKwh !== null ? compareClass : "empty"}">
                ${actualKwh !== null ? this._formatNumber(actualKwh, 2) : "—"}
              </span>
            ` : A}
          </div>
        `;
            }),
        ];
    }
};
__decorate([
    n$1({ attribute: false })
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
__decorate([
    r()
], SolarForecastCard.prototype, "_popupActualHourly", void 0);
__decorate([
    r()
], SolarForecastCard.prototype, "_mainActualHourly", void 0);
SolarForecastCard = __decorate([
    t$1("solar-forecast-card")
], SolarForecastCard);
window.customCards = window.customCards ?? [];
window.customCards.push({
    type: "solar-forecast-card",
    name: localize("en", "customCard.name"),
    description: localize("en", "customCard.description"),
    preview: false,
});

export { SolarForecastCard };
