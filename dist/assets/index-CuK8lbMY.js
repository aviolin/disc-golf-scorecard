function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PlayView-DmW0zVGd.js","assets/PlayView-C1xHv-zO.css","assets/AccountView-DcnrmibS.js","assets/AccountView-BrhIuaq1.css","assets/LoginView-ySnfTfr6.js","assets/AuthError-Dp8l2aXI.js","assets/AuthError-BTPtN2Sr.css","assets/LoginView-K9am1glq.css","assets/SignupView-C0xin4Tl.js","assets/SignupView--I8EMX_S.css","assets/ResetPasswordView-CFMcnBO7.js","assets/ResetPasswordView-CuObXS2b.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nl(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ie={},Ur=[],Tt=()=>{},Py=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),Je=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},by=Object.prototype.hasOwnProperty,ce=(t,e)=>by.call(t,e),G=Array.isArray,Br=t=>Ei(t)==="[object Map]",Qf=t=>Ei(t)==="[object Set]",mh=t=>Ei(t)==="[object Date]",re=t=>typeof t=="function",Ve=t=>typeof t=="string",$n=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Jf=t=>(Ee(t)||re(t))&&re(t.then)&&re(t.catch),Yf=Object.prototype.toString,Ei=t=>Yf.call(t),Cy=t=>Ei(t).slice(8,-1),Xf=t=>Ei(t)==="[object Object]",Ml=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ky=/-(\w)/g,Zt=sa(t=>t.replace(ky,(e,n)=>n?n.toUpperCase():"")),Dy=/\B([A-Z])/g,ls=sa(t=>t.replace(Dy,"-$1").toLowerCase()),ia=sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),sc=sa(t=>t?`on${ia(t)}`:""),jn=(t,e)=>!Object.is(t,e),ho=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ro=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Mc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _h;const Zf=()=>_h||(_h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ll(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?xy(r):Ll(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ve(t)||Ee(t))return t}const Oy=/;(?![^(]*\))/g,Ny=/:([^]+)/,Vy=/\/\*[^]*?\*\//g;function xy(t){const e={};return t.replace(Vy,"").split(Oy).forEach(n=>{if(n){const r=n.split(Ny);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oa(t){let e="";if(Ve(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=oa(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const My="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ly=Nl(My);function ep(t){return!!t||t===""}function Fy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=So(t[r],e[r]);return n}function So(t,e){if(t===e)return!0;let n=mh(t),r=mh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$n(t),r=$n(e),n||r)return t===e;if(n=G(t),r=G(e),n||r)return n&&r?Fy(t,e):!1;if(n=Ee(t),r=Ee(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!So(t[o],e[o]))return!1}}return String(t)===String(e)}const yh=t=>Ve(t)?t:t==null?"":G(t)||Ee(t)&&(t.toString===Yf||!re(t.toString))?JSON.stringify(t,tp,2):String(t),tp=(t,e)=>e&&e.__v_isRef?tp(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ic(r,i)+" =>"]=s,n),{})}:Qf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ic(n))}:$n(e)?ic(e):Ee(e)&&!G(e)&&!Xf(e)?String(e):e,ic=(t,e="")=>{var n;return $n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class np{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function rp(t){return new np(t)}function Uy(t,e=gt){e&&e.active&&e.effects.push(t)}function sp(){return gt}function By(t){gt&&gt.cleanups.push(t)}let lr;class Fl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Uy(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ir();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&($y(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),wr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Vn,n=lr;try{return Vn=!0,lr=this,this._runnings++,vh(this),this.fn()}finally{Eh(this),this._runnings--,lr=n,Vn=e}}stop(){var e;this.active&&(vh(this),Eh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function $y(t){return t.value}function vh(t){t._trackId++,t._depsLength=0}function Eh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ip(t.deps[e],t);t.deps.length=t._depsLength}}function ip(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Vn=!0,Lc=0;const op=[];function Ir(){op.push(Vn),Vn=!1}function wr(){const t=op.pop();Vn=t===void 0?!0:t}function Ul(){Lc++}function Bl(){for(Lc--;!Lc&&Fc.length;)Fc.shift()()}function ap(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&ip(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Fc=[];function cp(t,e,n){Ul();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Fc.push(r.scheduler)))}Bl()}const lp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Po=new WeakMap,ur=Symbol(""),Uc=Symbol("");function dt(t,e,n){if(Vn&&lr){let r=Po.get(t);r||Po.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=lp(()=>r.delete(n))),ap(lr,s)}}function ln(t,e,n,r,s,i){const o=Po.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!$n(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Ml(n)&&a.push(o.get("length")):(a.push(o.get(ur)),Br(t)&&a.push(o.get(Uc)));break;case"delete":G(t)||(a.push(o.get(ur)),Br(t)&&a.push(o.get(Uc)));break;case"set":Br(t)&&a.push(o.get(ur));break}Ul();for(const c of a)c&&cp(c,4);Bl()}function jy(t,e){var n;return(n=Po.get(t))==null?void 0:n.get(e)}const qy=Nl("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n)),Ih=Hy();function Hy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ir(),Ul();const r=le(this)[e].apply(this,n);return Bl(),wr(),r}}),t}function Ky(t){const e=le(this);return dt(e,"has",t),e.hasOwnProperty(t)}class hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sv:gp:i?pp:fp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&ce(Ih,n))return Reflect.get(Ih,n,r);if(n==="hasOwnProperty")return Ky}const a=Reflect.get(e,n,r);return($n(n)?up.has(n):qy(n))||(s||dt(e,"get",n),i)?a:Ue(a)?o&&Ml(n)?a:a.value:Ee(a)?s?_p(a):Ii(a):a}}class dp extends hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jr(i);if(!bo(r)&&!Jr(r)&&(i=le(i),r=le(r)),!G(e)&&Ue(i)&&!Ue(r))return c?!1:(i.value=r,!0)}const o=G(e)&&Ml(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?jn(r,i)&&ln(e,"set",n,r):ln(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ln(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!$n(n)||!up.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",G(e)?"length":ur),Reflect.ownKeys(e)}}class Wy extends hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zy=new dp,Gy=new Wy,Qy=new dp(!0),$l=t=>t,aa=t=>Reflect.getPrototypeOf(t);function Wi(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(jn(e,i)&&dt(s,"get",e),dt(s,"get",i));const{has:o}=aa(s),a=r?$l:n?Hl:Js;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(jn(t,s)&&dt(r,"has",t),dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gi(t,e=!1){return t=t.__v_raw,!e&&dt(le(t),"iterate",ur),Reflect.get(t,"size",t)}function wh(t){t=le(t);const e=le(this);return aa(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function Th(t,e){e=le(e);const n=le(this),{has:r,get:s}=aa(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?jn(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function Ah(t){const e=le(this),{has:n,get:r}=aa(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ln(e,"delete",t,void 0),i}function Rh(){const t=le(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function Qi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?$l:t?Hl:Js;return!t&&dt(a,"iterate",ur),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ji(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=Br(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?$l:e?Hl:Js;return!e&&dt(i,"iterate",c?Uc:ur),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Jy(){const t={get(i){return Wi(this,i)},get size(){return Gi(this)},has:zi,add:wh,set:Th,delete:Ah,clear:Rh,forEach:Qi(!1,!1)},e={get(i){return Wi(this,i,!1,!0)},get size(){return Gi(this)},has:zi,add:wh,set:Th,delete:Ah,clear:Rh,forEach:Qi(!1,!0)},n={get(i){return Wi(this,i,!0)},get size(){return Gi(this,!0)},has(i){return zi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Qi(!0,!1)},r={get(i){return Wi(this,i,!0,!0)},get size(){return Gi(this,!0)},has(i){return zi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ji(i,!1,!1),n[i]=Ji(i,!0,!1),e[i]=Ji(i,!1,!0),r[i]=Ji(i,!0,!0)}),[t,n,e,r]}const[Yy,Xy,Zy,ev]=Jy();function jl(t,e){const n=e?t?ev:Zy:t?Xy:Yy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const tv={get:jl(!1,!1)},nv={get:jl(!1,!0)},rv={get:jl(!0,!1)},fp=new WeakMap,pp=new WeakMap,gp=new WeakMap,sv=new WeakMap;function iv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ov(t){return t.__v_skip||!Object.isExtensible(t)?0:iv(Cy(t))}function Ii(t){return Jr(t)?t:ql(t,!1,zy,tv,fp)}function mp(t){return ql(t,!1,Qy,nv,pp)}function _p(t){return ql(t,!0,Gy,rv,gp)}function ql(t,e,n,r,s){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ov(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function xn(t){return Jr(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jr(t){return!!(t&&t.__v_isReadonly)}function bo(t){return!!(t&&t.__v_isShallow)}function yp(t){return xn(t)||Jr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function ca(t){return Object.isExtensible(t)&&Ro(t,"__v_skip",!0),t}const Js=t=>Ee(t)?Ii(t):t,Hl=t=>Ee(t)?_p(t):t;class vp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fl(()=>e(this._value),()=>fo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return(!e._cacheable||e.effect.dirty)&&jn(e._value,e._value=e.effect.run())&&fo(e,4),Ep(e),e.effect._dirtyLevel>=2&&fo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function av(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=Tt):(r=t.get,s=t.set),new vp(r,s,i||!s,n)}function Ep(t){var e;Vn&&lr&&(t=le(t),ap(lr,(e=t.dep)!=null?e:t.dep=lp(()=>t.dep=void 0,t instanceof vp?t:void 0)))}function fo(t,e=4,n){t=le(t);const r=t.dep;r&&cp(r,e)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function lt(t){return Ip(t,!1)}function cv(t){return Ip(t,!0)}function Ip(t,e){return Ue(t)?t:new lv(t,e)}class lv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Js(e)}get value(){return Ep(this),this._value}set value(e){const n=this.__v_isShallow||bo(e)||Jr(e);e=n?e:le(e),jn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Js(e),fo(this,4))}}function et(t){return Ue(t)?t.value:t}const uv={get:(t,e,n)=>et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function wp(t){return xn(t)?t:new Proxy(t,uv)}function hv(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=fv(t,n);return e}class dv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jy(le(this._object),this._key)}}function fv(t,e,n){const r=t[e];return Ue(r)?r:new dv(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(t,e,n,r){try{return r?t(...r):t()}catch(s){la(s,e,n)}}function kt(t,e,n,r){if(re(t)){const i=Mn(t,e,n,r);return i&&Jf(i)&&i.catch(o=>{la(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(kt(t[i],e,n,r));return s}function la(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mn(c,null,10,[t,o,a]);return}}pv(t,n,s,r)}function pv(t,e,n,r=!0){console.error(t)}let Ys=!1,Bc=!1;const nt=[];let jt=0;const $r=[];let Tn=null,tr=0;const Tp=Promise.resolve();let Kl=null;function Wl(t){const e=Kl||Tp;return t?e.then(this?t.bind(this):t):e}function gv(t){let e=jt+1,n=nt.length;for(;e<n;){const r=e+n>>>1,s=nt[r],i=Xs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function zl(t){(!nt.length||!nt.includes(t,Ys&&t.allowRecurse?jt+1:jt))&&(t.id==null?nt.push(t):nt.splice(gv(t.id),0,t),Ap())}function Ap(){!Ys&&!Bc&&(Bc=!0,Kl=Tp.then(Sp))}function mv(t){const e=nt.indexOf(t);e>jt&&nt.splice(e,1)}function _v(t){G(t)?$r.push(...t):(!Tn||!Tn.includes(t,t.allowRecurse?tr+1:tr))&&$r.push(t),Ap()}function Sh(t,e,n=Ys?jt+1:0){for(;n<nt.length;n++){const r=nt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;nt.splice(n,1),n--,r()}}}function Rp(t){if($r.length){const e=[...new Set($r)].sort((n,r)=>Xs(n)-Xs(r));if($r.length=0,Tn){Tn.push(...e);return}for(Tn=e,tr=0;tr<Tn.length;tr++)Tn[tr]();Tn=null,tr=0}}const Xs=t=>t.id==null?1/0:t.id,yv=(t,e)=>{const n=Xs(t)-Xs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Sp(t){Bc=!1,Ys=!0,nt.sort(yv);try{for(jt=0;jt<nt.length;jt++){const e=nt[jt];e&&e.active!==!1&&Mn(e,null,14)}}finally{jt=0,nt.length=0,Rp(),Ys=!1,Kl=null,(nt.length||$r.length)&&Sp()}}function vv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ie;d&&(s=n.map(p=>Ve(p)?p.trim():p)),h&&(s=n.map(Mc))}let a,c=r[a=sc(e)]||r[a=sc(Zt(e))];!c&&i&&(c=r[a=sc(ls(e))]),c&&kt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,s)}}function Pp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=Pp(l,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Je(o,i),Ee(t)&&r.set(t,o),o)}function ua(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,ls(e))||ce(t,e))}let Le=null,ha=null;function Co(t){const e=Le;return Le=t,ha=t&&t.type.__scopeId||null,e}function da(t){ha=t}function fa(){ha=null}function Dn(t,e=Le,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Uh(-1);const i=Co(e);let o;try{o=t(...s)}finally{Co(i),r._d&&Uh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function oc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:T}=t;let A,b;const S=Co(t);try{if(n.shapeFlag&4){const V=s||r,$=V;A=$t(u.call($,V,h,i,p,d,_)),b=c}else{const V=e;A=$t(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),b=e.props?c:Ev(c)}}catch(V){Us.length=0,la(V,t,1),A=Ne(qn)}let R=A;if(b&&T!==!1){const V=Object.keys(b),{shapeFlag:$}=R;V.length&&$&7&&(o&&V.some(Vl)&&(b=Iv(b,o)),R=Yr(R,b))}return n.dirs&&(R=Yr(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),A=R,Co(S),A}const Ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},Iv=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function wv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ph(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ua(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ph(r,o,l):!0:!!o;return!1}function Ph(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ua(n,i))return!0}return!1}function Tv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const bp="components";function $c(t,e){return Rv(bp,t,!0,e)||t}const Av=Symbol.for("v-ndc");function Rv(t,e,n=!0,r=!1){const s=Le||We;if(s){const i=s.type;if(t===bp){const a=wE(i,!1);if(a&&(a===e||a===Zt(e)||a===ia(Zt(e))))return i}const o=bh(s[t]||i[t],e)||bh(s.appContext[t],e);return!o&&r?i:o}}function bh(t,e){return t&&(t[e]||t[Zt(e)]||t[ia(Zt(e))])}const Sv=t=>t.__isSuspense;function Pv(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):_v(t)}const bv=Symbol.for("v-scx"),Cv=()=>Dt(bv),Yi={};function hr(t,e,n){return Cp(t,e,n)}function Cp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ie){if(e&&i){const L=e;e=(...X)=>{L(...X),$()}}const c=We,l=L=>r===!0?L:sr(L,r===!1?1:void 0);let u,h=!1,d=!1;if(Ue(t)?(u=()=>t.value,h=bo(t)):xn(t)?(u=()=>l(t),h=!0):G(t)?(d=!0,h=t.some(L=>xn(L)||bo(L)),u=()=>t.map(L=>{if(Ue(L))return L.value;if(xn(L))return l(L);if(re(L))return Mn(L,c,2)})):re(t)?e?u=()=>Mn(t,c,2):u=()=>(p&&p(),kt(t,c,3,[_])):u=Tt,e&&r){const L=u;u=()=>sr(L())}let p,_=L=>{p=R.onStop=()=>{Mn(L,c,4),p=R.onStop=void 0}},T;if(_a)if(_=Tt,e?n&&kt(e,c,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const L=Cv();T=L.__watcherHandles||(L.__watcherHandles=[])}else return Tt;let A=d?new Array(t.length).fill(Yi):Yi;const b=()=>{if(!(!R.active||!R.dirty))if(e){const L=R.run();(r||h||(d?L.some((X,Q)=>jn(X,A[Q])):jn(L,A)))&&(p&&p(),kt(e,c,3,[L,A===Yi?void 0:d&&A[0]===Yi?[]:A,_]),A=L)}else R.run()};b.allowRecurse=!!e;let S;s==="sync"?S=b:s==="post"?S=()=>ht(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),S=()=>zl(b));const R=new Fl(u,Tt,S),V=sp(),$=()=>{R.stop(),V&&xl(V.effects,R)};return e?n?b():A=R.run():s==="post"?ht(R.run.bind(R),c&&c.suspense):R.run(),T&&T.push($),$}function kv(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?kp(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=wi(this),a=Cp(s,i.bind(r),n);return o(),a}function kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function sr(t,e,n=0,r){if(!Ee(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ue(t))sr(t.value,e,n,r);else if(G(t))for(let s=0;s<t.length;s++)sr(t[s],e,n,r);else if(Qf(t)||Br(t))t.forEach(s=>{sr(s,e,n,r)});else if(Xf(t))for(const s in t)sr(t[s],e,n,r);return t}function Xi(t,e){if(Le===null)return t;const n=ya(Le)||Le.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Ie]=e[s];i&&(re(i)&&(i={mounted:i,updated:i}),i.deep&&sr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Yn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ir(),kt(c,n,8,[t.el,a,t,e]),wr())}}/*! #__NO_SIDE_EFFECTS__ */function Dp(t,e){return re(t)?Je({name:t.name},e,{setup:t}):t}const Ms=t=>!!t.type.__asyncLoader,Op=t=>t.type.__isKeepAlive;function Dv(t,e){Np(t,"a",e)}function Ov(t,e){Np(t,"da",e)}function Np(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Op(s.parent.vnode)&&Nv(r,e,n,s),s=s.parent}}function Nv(t,e,n,r){const s=pa(e,t,r,!0);xp(()=>{xl(r[e],s)},n)}function pa(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ir();const a=wi(n),c=kt(e,n,t,o);return a(),wr(),c});return r?s.unshift(i):s.push(i),i}}const pn=t=>(e,n=We)=>(!_a||t==="sp")&&pa(t,(...r)=>e(...r),n),Vv=pn("bm"),Vp=pn("m"),xv=pn("bu"),Mv=pn("u"),Lv=pn("bum"),xp=pn("um"),Fv=pn("sp"),Uv=pn("rtg"),Bv=pn("rtc");function $v(t,e=We){pa("ec",t,e)}function Mp(t,e,n,r){let s;const i=n&&n[r];if(G(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function jv(t,e,n={},r,s){if(Le.isCE||Le.parent&&Ms(Le.parent)&&Le.parent.isCE)return e!=="default"&&(n.name=e),Ne("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),De();const o=i&&Lp(i(n)),a=On(at,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Lp(t){return t.some(e=>Do(e)?!(e.type===qn||e.type===at&&!Lp(e.children)):!0)?t:null}const jc=t=>t?Qp(t)?ya(t)||t.proxy:jc(t.parent):null,Ls=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jc(t.parent),$root:t=>jc(t.root),$emit:t=>t.emit,$options:t=>Gl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,zl(t.update)}),$nextTick:t=>t.n||(t.n=Wl.bind(t.proxy)),$watch:t=>kv.bind(t)}),ac=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ce(t,e),qv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ac(r,e))return o[e]=1,r[e];if(s!==Ie&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==Ie&&ce(n,e))return o[e]=4,n[e];qc&&(o[e]=0)}}const u=Ls[e];let h,d;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ac(s,e)?(s[e]=n,!0):r!==Ie&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ce(t,o)||ac(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Ls,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ch(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qc=!0;function Hv(t){const e=Gl(t),n=t.proxy,r=t.ctx;qc=!1,e.beforeCreate&&kh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:T,deactivated:A,beforeDestroy:b,beforeUnmount:S,destroyed:R,unmounted:V,render:$,renderTracked:L,renderTriggered:X,errorCaptured:Q,serverPrefetch:J,expose:de,inheritAttrs:be,components:ft,directives:yt,filters:Jn}=e;if(l&&Kv(l,r,null),o)for(const _e in o){const fe=o[_e];re(fe)&&(r[_e]=fe.bind(n))}if(s){const _e=s.call(n,n);Ee(_e)&&(t.data=Ii(_e))}if(qc=!0,i)for(const _e in i){const fe=i[_e],nn=re(fe)?fe.bind(n,n):re(fe.get)?fe.get.bind(n,n):Tt,yn=!re(fe)&&re(fe.set)?fe.set.bind(n):Tt,Lt=mt({get:nn,set:yn});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:ut=>Lt.value=ut})}if(a)for(const _e in a)Fp(a[_e],r,n,_e);if(c){const _e=re(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(fe=>{po(fe,_e[fe])})}u&&kh(u,t,"c");function ue(_e,fe){G(fe)?fe.forEach(nn=>_e(nn.bind(n))):fe&&_e(fe.bind(n))}if(ue(Vv,h),ue(Vp,d),ue(xv,p),ue(Mv,_),ue(Dv,T),ue(Ov,A),ue($v,Q),ue(Bv,L),ue(Uv,X),ue(Lv,S),ue(xp,V),ue(Fv,J),G(de))if(de.length){const _e=t.exposed||(t.exposed={});de.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:nn=>n[fe]=nn})})}else t.exposed||(t.exposed={});$&&t.render===Tt&&(t.render=$),be!=null&&(t.inheritAttrs=be),ft&&(t.components=ft),yt&&(t.directives=yt)}function Kv(t,e,n=Tt){G(t)&&(t=Hc(t));for(const r in t){const s=t[r];let i;Ee(s)?"default"in s?i=Dt(s.from||r,s.default,!0):i=Dt(s.from||r):i=Dt(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function kh(t,e,n){kt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fp(t,e,n,r){const s=r.includes(".")?kp(n,r):()=>n[r];if(Ve(t)){const i=e[t];re(i)&&hr(s,i)}else if(re(t))hr(s,t.bind(n));else if(Ee(t))if(G(t))t.forEach(i=>Fp(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&hr(s,i,t)}}function Gl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ko(c,l,o,!0)),ko(c,e,o)),Ee(e)&&i.set(e,c),c}function ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ko(t,i,n,!0),s&&s.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wv={data:Dh,props:Oh,emits:Oh,methods:bs,computed:bs,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:bs,directives:bs,watch:Gv,provide:Dh,inject:zv};function Dh(t,e){return e?t?function(){return Je(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function zv(t,e){return bs(Hc(t),Hc(e))}function Hc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function bs(t,e){return t?Je(Object.create(null),t,e):e}function Oh(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Je(Object.create(null),Ch(t),Ch(e??{})):e}function Gv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function Up(){return{app:null,config:{isNativeTag:Py,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qv=0;function Jv(t,e){return function(r,s=null){re(r)||(r=Je({},r)),s!=null&&!Ee(s)&&(s=null);const i=Up(),o=new WeakSet;let a=!1;const c=i.app={_uid:Qv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:AE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ne(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ya(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=jr;jr=c;try{return l()}finally{jr=u}}};return c}}let jr=null;function po(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=We||Le;if(r||jr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}function Yv(){return!!(We||Le||jr)}function Xv(t,e,n,r=!1){const s={},i={};Ro(i,ma,1),t.propsDefaults=Object.create(null),Bp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:mp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Zv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ua(t.emitsOptions,d))continue;const p=e[d];if(c)if(ce(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const _=Zt(d);s[_]=Kc(c,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Bp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=ls(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Kc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&ln(t,"set","$attrs")}function Bp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xs(c))continue;const l=e[c];let u;s&&ce(s,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ua(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Kc(s,c,h,l[h],t,!ce(l,h))}}return o}function Kc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&re(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=wi(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ls(n))&&(r=!0))}return r}function $p(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[d,p]=$p(h,e,!0);Je(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ee(t)&&r.set(t,Ur),Ur;if(G(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);Nh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Zt(u);if(Nh(h)){const d=i[u],p=o[h]=G(d)||re(d)?{type:d}:Je({},d);if(p){const _=Mh(Boolean,p.type),T=Mh(String,p.type);p[0]=_>-1,p[1]=T<0||_<T,(_>-1||ce(p,"default"))&&a.push(h)}}}const l=[o,a];return Ee(t)&&r.set(t,l),l}function Nh(t){return t[0]!=="$"&&!xs(t)}function Vh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function xh(t,e){return Vh(t)===Vh(e)}function Mh(t,e){return G(e)?e.findIndex(n=>xh(n,t)):re(e)&&xh(e,t)?0:-1}const jp=t=>t[0]==="_"||t==="$stable",Ql=t=>G(t)?t.map($t):[$t(t)],eE=(t,e,n)=>{if(e._n)return e;const r=Dn((...s)=>Ql(e(...s)),n);return r._c=!1,r},qp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(jp(s))continue;const i=t[s];if(re(i))e[s]=eE(s,i,r);else if(i!=null){const o=Ql(i);e[s]=()=>o}}},Hp=(t,e)=>{const n=Ql(e);t.slots.default=()=>n},tE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Ro(e,"_",n)):qp(e,t.slots={})}else t.slots={},e&&Hp(t,e);Ro(t.slots,ma,1)},nE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,qp(e,s)),o=e}else e&&(Hp(t,e),o={default:1});if(i)for(const a in s)!jp(a)&&o[a]==null&&delete s[a]};function Wc(t,e,n,r,s=!1){if(G(t)){t.forEach((d,p)=>Wc(d,e&&(G(e)?e[p]:e),n,r,s));return}if(Ms(r)&&!s)return;const i=r.shapeFlag&4?ya(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),re(c))Mn(c,a,12,[o,u]);else{const d=Ve(c),p=Ue(c);if(d||p){const _=()=>{if(t.f){const T=d?ce(h,c)?h[c]:u[c]:c.value;s?G(T)&&xl(T,i):G(T)?T.includes(i)||T.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ht(_,n)):_()}}}const ht=Pv;function rE(t){return sE(t)}function sE(t,e){const n=Zf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Tt,insertStaticContent:_}=t,T=(f,g,m,I=null,y=null,k=null,M=void 0,C=null,D=!!g.dynamicChildren)=>{if(f===g)return;f&&!Es(f,g)&&(I=v(f),ut(f,y,k,!0),f=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:P,ref:U,shapeFlag:z}=g;switch(P){case ga:A(f,g,m,I);break;case qn:b(f,g,m,I);break;case lc:f==null&&S(g,m,I,M);break;case at:ft(f,g,m,I,y,k,M,C,D);break;default:z&1?$(f,g,m,I,y,k,M,C,D):z&6?yt(f,g,m,I,y,k,M,C,D):(z&64||z&128)&&P.process(f,g,m,I,y,k,M,C,D,j)}U!=null&&y&&Wc(U,f&&f.ref,k,g||f,!g)},A=(f,g,m,I)=>{if(f==null)r(g.el=a(g.children),m,I);else{const y=g.el=f.el;g.children!==f.children&&l(y,g.children)}},b=(f,g,m,I)=>{f==null?r(g.el=c(g.children||""),m,I):g.el=f.el},S=(f,g,m,I)=>{[f.el,f.anchor]=_(f.children,g,m,I,f.el,f.anchor)},R=({el:f,anchor:g},m,I)=>{let y;for(;f&&f!==g;)y=d(f),r(f,m,I),f=y;r(g,m,I)},V=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},$=(f,g,m,I,y,k,M,C,D)=>{g.type==="svg"?M="svg":g.type==="math"&&(M="mathml"),f==null?L(g,m,I,y,k,M,C,D):J(f,g,y,k,M,C,D)},L=(f,g,m,I,y,k,M,C)=>{let D,P;const{props:U,shapeFlag:z,transition:H,dirs:ee}=f;if(D=f.el=o(f.type,k,U&&U.is,U),z&8?u(D,f.children):z&16&&Q(f.children,D,null,I,y,cc(f,k),M,C),ee&&Yn(f,null,I,"created"),X(D,f,f.scopeId,M,I),U){for(const ye in U)ye!=="value"&&!xs(ye)&&i(D,ye,null,U[ye],k,f.children,I,y,Ye);"value"in U&&i(D,"value",null,U.value,k),(P=U.onVnodeBeforeMount)&&Ut(P,I,f)}ee&&Yn(f,null,I,"beforeMount");const se=iE(y,H);se&&H.beforeEnter(D),r(D,g,m),((P=U&&U.onVnodeMounted)||se||ee)&&ht(()=>{P&&Ut(P,I,f),se&&H.enter(D),ee&&Yn(f,null,I,"mounted")},y)},X=(f,g,m,I,y)=>{if(m&&p(f,m),I)for(let k=0;k<I.length;k++)p(f,I[k]);if(y){let k=y.subTree;if(g===k){const M=y.vnode;X(f,M,M.scopeId,M.slotScopeIds,y.parent)}}},Q=(f,g,m,I,y,k,M,C,D=0)=>{for(let P=D;P<f.length;P++){const U=f[P]=C?An(f[P]):$t(f[P]);T(null,U,g,m,I,y,k,M,C)}},J=(f,g,m,I,y,k,M)=>{const C=g.el=f.el;let{patchFlag:D,dynamicChildren:P,dirs:U}=g;D|=f.patchFlag&16;const z=f.props||Ie,H=g.props||Ie;let ee;if(m&&Xn(m,!1),(ee=H.onVnodeBeforeUpdate)&&Ut(ee,m,g,f),U&&Yn(g,f,m,"beforeUpdate"),m&&Xn(m,!0),P?de(f.dynamicChildren,P,C,m,I,cc(g,y),k):M||fe(f,g,C,null,m,I,cc(g,y),k,!1),D>0){if(D&16)be(C,g,z,H,m,I,y);else if(D&2&&z.class!==H.class&&i(C,"class",null,H.class,y),D&4&&i(C,"style",z.style,H.style,y),D&8){const se=g.dynamicProps;for(let ye=0;ye<se.length;ye++){const Re=se[ye],Be=z[Re],Rt=H[Re];(Rt!==Be||Re==="value")&&i(C,Re,Be,Rt,y,f.children,m,I,Ye)}}D&1&&f.children!==g.children&&u(C,g.children)}else!M&&P==null&&be(C,g,z,H,m,I,y);((ee=H.onVnodeUpdated)||U)&&ht(()=>{ee&&Ut(ee,m,g,f),U&&Yn(g,f,m,"updated")},I)},de=(f,g,m,I,y,k,M)=>{for(let C=0;C<g.length;C++){const D=f[C],P=g[C],U=D.el&&(D.type===at||!Es(D,P)||D.shapeFlag&70)?h(D.el):m;T(D,P,U,null,I,y,k,M,!0)}},be=(f,g,m,I,y,k,M)=>{if(m!==I){if(m!==Ie)for(const C in m)!xs(C)&&!(C in I)&&i(f,C,m[C],null,M,g.children,y,k,Ye);for(const C in I){if(xs(C))continue;const D=I[C],P=m[C];D!==P&&C!=="value"&&i(f,C,P,D,M,g.children,y,k,Ye)}"value"in I&&i(f,"value",m.value,I.value,M)}},ft=(f,g,m,I,y,k,M,C,D)=>{const P=g.el=f?f.el:a(""),U=g.anchor=f?f.anchor:a("");let{patchFlag:z,dynamicChildren:H,slotScopeIds:ee}=g;ee&&(C=C?C.concat(ee):ee),f==null?(r(P,m,I),r(U,m,I),Q(g.children||[],m,U,y,k,M,C,D)):z>0&&z&64&&H&&f.dynamicChildren?(de(f.dynamicChildren,H,m,y,k,M,C),(g.key!=null||y&&g===y.subTree)&&Jl(f,g,!0)):fe(f,g,m,U,y,k,M,C,D)},yt=(f,g,m,I,y,k,M,C,D)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?y.ctx.activate(g,m,I,M,D):Jn(g,m,I,y,k,M,D):vt(f,g,D)},Jn=(f,g,m,I,y,k,M)=>{const C=f.component=_E(f,I,y);if(Op(f)&&(C.ctx.renderer=j),yE(C),C.asyncDep){if(y&&y.registerDep(C,ue),!f.el){const D=C.subTree=Ne(qn);b(null,D,g,m)}}else ue(C,f,g,m,y,k,M)},vt=(f,g,m)=>{const I=g.component=f.component;if(wv(f,g,m))if(I.asyncDep&&!I.asyncResolved){_e(I,g,m);return}else I.next=g,mv(I.update),I.effect.dirty=!0,I.update();else g.el=f.el,I.vnode=g},ue=(f,g,m,I,y,k,M)=>{const C=()=>{if(f.isMounted){let{next:U,bu:z,u:H,parent:ee,vnode:se}=f;{const Cr=Kp(f);if(Cr){U&&(U.el=se.el,_e(f,U,M)),Cr.asyncDep.then(()=>{f.isUnmounted||C()});return}}let ye=U,Re;Xn(f,!1),U?(U.el=se.el,_e(f,U,M)):U=se,z&&ho(z),(Re=U.props&&U.props.onVnodeBeforeUpdate)&&Ut(Re,ee,U,se),Xn(f,!0);const Be=oc(f),Rt=f.subTree;f.subTree=Be,T(Rt,Be,h(Rt.el),v(Rt),f,y,k),U.el=Be.el,ye===null&&Tv(f,Be.el),H&&ht(H,y),(Re=U.props&&U.props.onVnodeUpdated)&&ht(()=>Ut(Re,ee,U,se),y)}else{let U;const{el:z,props:H}=g,{bm:ee,m:se,parent:ye}=f,Re=Ms(g);if(Xn(f,!1),ee&&ho(ee),!Re&&(U=H&&H.onVnodeBeforeMount)&&Ut(U,ye,g),Xn(f,!0),z&&Ae){const Be=()=>{f.subTree=oc(f),Ae(z,f.subTree,f,y,null)};Re?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Be()):Be()}else{const Be=f.subTree=oc(f);T(null,Be,m,I,f,y,k),g.el=Be.el}if(se&&ht(se,y),!Re&&(U=H&&H.onVnodeMounted)){const Be=g;ht(()=>Ut(U,ye,Be),y)}(g.shapeFlag&256||ye&&Ms(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&ht(f.a,y),f.isMounted=!0,g=m=I=null}},D=f.effect=new Fl(C,Tt,()=>zl(P),f.scope),P=f.update=()=>{D.dirty&&D.run()};P.id=f.uid,Xn(f,!0),P()},_e=(f,g,m)=>{g.component=f;const I=f.vnode.props;f.vnode=g,f.next=null,Zv(f,g.props,I,m),nE(f,g.children,m),Ir(),Sh(f),wr()},fe=(f,g,m,I,y,k,M,C,D=!1)=>{const P=f&&f.children,U=f?f.shapeFlag:0,z=g.children,{patchFlag:H,shapeFlag:ee}=g;if(H>0){if(H&128){yn(P,z,m,I,y,k,M,C,D);return}else if(H&256){nn(P,z,m,I,y,k,M,C,D);return}}ee&8?(U&16&&Ye(P,y,k),z!==P&&u(m,z)):U&16?ee&16?yn(P,z,m,I,y,k,M,C,D):Ye(P,y,k,!0):(U&8&&u(m,""),ee&16&&Q(z,m,I,y,k,M,C,D))},nn=(f,g,m,I,y,k,M,C,D)=>{f=f||Ur,g=g||Ur;const P=f.length,U=g.length,z=Math.min(P,U);let H;for(H=0;H<z;H++){const ee=g[H]=D?An(g[H]):$t(g[H]);T(f[H],ee,m,null,y,k,M,C,D)}P>U?Ye(f,y,k,!0,!1,z):Q(g,m,I,y,k,M,C,D,z)},yn=(f,g,m,I,y,k,M,C,D)=>{let P=0;const U=g.length;let z=f.length-1,H=U-1;for(;P<=z&&P<=H;){const ee=f[P],se=g[P]=D?An(g[P]):$t(g[P]);if(Es(ee,se))T(ee,se,m,null,y,k,M,C,D);else break;P++}for(;P<=z&&P<=H;){const ee=f[z],se=g[H]=D?An(g[H]):$t(g[H]);if(Es(ee,se))T(ee,se,m,null,y,k,M,C,D);else break;z--,H--}if(P>z){if(P<=H){const ee=H+1,se=ee<U?g[ee].el:I;for(;P<=H;)T(null,g[P]=D?An(g[P]):$t(g[P]),m,se,y,k,M,C,D),P++}}else if(P>H)for(;P<=z;)ut(f[P],y,k,!0),P++;else{const ee=P,se=P,ye=new Map;for(P=se;P<=H;P++){const pt=g[P]=D?An(g[P]):$t(g[P]);pt.key!=null&&ye.set(pt.key,P)}let Re,Be=0;const Rt=H-se+1;let Cr=!1,fh=0;const vs=new Array(Rt);for(P=0;P<Rt;P++)vs[P]=0;for(P=ee;P<=z;P++){const pt=f[P];if(Be>=Rt){ut(pt,y,k,!0);continue}let Ft;if(pt.key!=null)Ft=ye.get(pt.key);else for(Re=se;Re<=H;Re++)if(vs[Re-se]===0&&Es(pt,g[Re])){Ft=Re;break}Ft===void 0?ut(pt,y,k,!0):(vs[Ft-se]=P+1,Ft>=fh?fh=Ft:Cr=!0,T(pt,g[Ft],m,null,y,k,M,C,D),Be++)}const ph=Cr?oE(vs):Ur;for(Re=ph.length-1,P=Rt-1;P>=0;P--){const pt=se+P,Ft=g[pt],gh=pt+1<U?g[pt+1].el:I;vs[P]===0?T(null,Ft,m,gh,y,k,M,C,D):Cr&&(Re<0||P!==ph[Re]?Lt(Ft,m,gh,2):Re--)}}},Lt=(f,g,m,I,y=null)=>{const{el:k,type:M,transition:C,children:D,shapeFlag:P}=f;if(P&6){Lt(f.component.subTree,g,m,I);return}if(P&128){f.suspense.move(g,m,I);return}if(P&64){M.move(f,g,m,j);return}if(M===at){r(k,g,m);for(let z=0;z<D.length;z++)Lt(D[z],g,m,I);r(f.anchor,g,m);return}if(M===lc){R(f,g,m);return}if(I!==2&&P&1&&C)if(I===0)C.beforeEnter(k),r(k,g,m),ht(()=>C.enter(k),y);else{const{leave:z,delayLeave:H,afterLeave:ee}=C,se=()=>r(k,g,m),ye=()=>{z(k,()=>{se(),ee&&ee()})};H?H(k,se,ye):ye()}else r(k,g,m)},ut=(f,g,m,I=!1,y=!1)=>{const{type:k,props:M,ref:C,children:D,dynamicChildren:P,shapeFlag:U,patchFlag:z,dirs:H}=f;if(C!=null&&Wc(C,null,m,f,!0),U&256){g.ctx.deactivate(f);return}const ee=U&1&&H,se=!Ms(f);let ye;if(se&&(ye=M&&M.onVnodeBeforeUnmount)&&Ut(ye,g,f),U&6)Ki(f.component,m,I);else{if(U&128){f.suspense.unmount(m,I);return}ee&&Yn(f,null,g,"beforeUnmount"),U&64?f.type.remove(f,g,m,y,j,I):P&&(k!==at||z>0&&z&64)?Ye(P,g,m,!1,!0):(k===at&&z&384||!y&&U&16)&&Ye(D,g,m),I&&Pr(f)}(se&&(ye=M&&M.onVnodeUnmounted)||ee)&&ht(()=>{ye&&Ut(ye,g,f),ee&&Yn(f,null,g,"unmounted")},m)},Pr=f=>{const{type:g,el:m,anchor:I,transition:y}=f;if(g===at){br(m,I);return}if(g===lc){V(f);return}const k=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:M,delayLeave:C}=y,D=()=>M(m,k);C?C(f.el,k,D):D()}else k()},br=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},Ki=(f,g,m)=>{const{bum:I,scope:y,update:k,subTree:M,um:C}=f;I&&ho(I),y.stop(),k&&(k.active=!1,ut(M,f,g,m)),C&&ht(C,g),ht(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ye=(f,g,m,I=!1,y=!1,k=0)=>{for(let M=k;M<f.length;M++)ut(f[M],g,m,I,y)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let F=!1;const x=(f,g,m)=>{f==null?g._vnode&&ut(g._vnode,null,null,!0):T(g._vnode||null,f,g,null,null,null,m),F||(F=!0,Sh(),Rp(),F=!1),g._vnode=f},j={p:T,um:ut,m:Lt,r:Pr,mt:Jn,mc:Q,pc:fe,pbc:de,n:v,o:t};let pe,Ae;return e&&([pe,Ae]=e(j)),{render:x,hydrate:pe,createApp:Jv(x,pe)}}function cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function iE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jl(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=An(s[i]),a.el=o.el),n||Jl(o,a)),a.type===ga&&(a.el=o.el)}}function oE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Kp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kp(e)}const aE=t=>t.__isTeleport,Fs=t=>t&&(t.disabled||t.disabled===""),Lh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Fh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,zc=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},cE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:_,createText:T,createComment:A}}=l,b=Fs(e.props);let{shapeFlag:S,children:R,dynamicChildren:V}=e;if(t==null){const $=e.el=T(""),L=e.anchor=T("");p($,n,r),p(L,n,r);const X=e.target=zc(e.props,_),Q=e.targetAnchor=T("");X&&(p(Q,X),o==="svg"||Lh(X)?o="svg":(o==="mathml"||Fh(X))&&(o="mathml"));const J=(de,be)=>{S&16&&u(R,de,be,s,i,o,a,c)};b?J(n,L):X&&J(X,Q)}else{e.el=t.el;const $=e.anchor=t.anchor,L=e.target=t.target,X=e.targetAnchor=t.targetAnchor,Q=Fs(t.props),J=Q?n:L,de=Q?$:X;if(o==="svg"||Lh(L)?o="svg":(o==="mathml"||Fh(L))&&(o="mathml"),V?(d(t.dynamicChildren,V,J,s,i,o,a),Jl(t,e,!0)):c||h(t,e,J,de,s,i,o,a,!1),b)Q?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Zi(e,n,$,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const be=e.target=zc(e.props,_);be&&Zi(e,be,null,l,0)}else Q&&Zi(e,L,X,l,1)}Wp(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=t;if(h&&i(u),o&&i(l),a&16){const p=o||!Fs(d);for(let _=0;_<c.length;_++){const T=c[_];s(T,e,n,p,!!T.dynamicChildren)}}},move:Zi,hydrate:lE};function Zi(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||Fs(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],e,n,2);h&&r(a,e,n)}function lE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=zc(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Fs(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,r,s,i)}Wp(e)}return e.anchor&&o(e.anchor)}const uE=cE;function Wp(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const at=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),lc=Symbol.for("v-stc"),Us=[];let Pt=null;function De(t=!1){Us.push(Pt=t?null:[])}function hE(){Us.pop(),Pt=Us[Us.length-1]||null}let Zs=1;function Uh(t){Zs+=t}function zp(t){return t.dynamicChildren=Zs>0?Pt||Ur:null,hE(),Zs>0&&Pt&&Pt.push(t),t}function Et(t,e,n,r,s,i){return zp(q(t,e,n,r,s,i,!0))}function On(t,e,n,r,s){return zp(Ne(t,e,n,r,s,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const ma="__vInternal",Gp=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||Ue(t)||re(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,r=0,s=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gp(e),ref:e&&go(e),scopeId:ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(Xl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Zs>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Ne=dE;function dE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Av)&&(t=qn),Do(t)){const a=Yr(t,e,!0);return n&&Xl(a,n),Zs>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(TE(t)&&(t=t.__vccOpts),e){e=fE(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=oa(a)),Ee(c)&&(yp(c)&&!G(c)&&(c=Je({},c)),e.style=Ll(c))}const o=Ve(t)?1:Sv(t)?128:aE(t)?64:Ee(t)?4:re(t)?2:0;return q(t,e,n,r,s,o,i,!0)}function fE(t){return t?yp(t)||ma in t?Je({},t):t:null}function Yr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gp(a),ref:e&&e.ref?n&&s?G(s)?s.concat(go(e)):[s,go(e)]:go(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yr(t.ssContent),ssFallback:t.ssFallback&&Yr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function St(t=" ",e=0){return Ne(ga,null,t,e)}function Yl(t="",e=!1){return e?(De(),On(qn,null,t)):Ne(qn,null,t)}function $t(t){return t==null||typeof t=="boolean"?Ne(qn):G(t)?Ne(at,null,t.slice()):typeof t=="object"?An(t):Ne(ga,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yr(t)}function Xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ma in e)?e._ctx=Le:s===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[St(e)]):n=8);t.children=e,t.shapeFlag|=n}function pE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oa([e.class,r.class]));else if(s==="style")e.style=Ll([e.style,r.style]);else if(ra(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){kt(t,e,7,[n,r])}const gE=Up();let mE=0;function _E(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gE,i={uid:mE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$p(r,s),emitsOptions:Pp(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vv.bind(null,i),t.ce&&t.ce(i),i}let We=null,Oo,Gc;{const t=Zf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Oo=e("__VUE_INSTANCE_SETTERS__",n=>We=n),Gc=e("__VUE_SSR_SETTERS__",n=>_a=n)}const wi=t=>{const e=We;return Oo(t),t.scope.on(),()=>{t.scope.off(),Oo(e)}},Bh=()=>{We&&We.scope.off(),Oo(null)};function Qp(t){return t.vnode.shapeFlag&4}let _a=!1;function yE(t,e=!1){e&&Gc(e);const{props:n,children:r}=t.vnode,s=Qp(t);Xv(t,n,s,e),tE(t,r);const i=s?vE(t,e):void 0;return e&&Gc(!1),i}function vE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ca(new Proxy(t.ctx,qv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?IE(t):null,i=wi(t);Ir();const o=Mn(r,t,0,[t.props,s]);if(wr(),i(),Jf(o)){if(o.then(Bh,Bh),e)return o.then(a=>{$h(t,a,e)}).catch(a=>{la(a,t,0)});t.asyncDep=o}else $h(t,o,e)}else Jp(t,e)}function $h(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=wp(e)),Jp(t,n)}let jh;function Jp(t,e,n){const r=t.type;if(!t.render){if(!e&&jh&&!r.render){const s=r.template||Gl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Je(Je({isCustomElement:i,delimiters:a},o),c);r.render=jh(s,l)}}t.render=r.render||Tt}{const s=wi(t);Ir();try{Hv(t)}finally{wr(),s()}}}function EE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function IE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return EE(t)},slots:t.slots,emit:t.emit,expose:e}}function ya(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wp(ca(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}}))}function wE(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function TE(t){return re(t)&&"__vccOpts"in t}const mt=(t,e)=>av(t,e,_a);function Yp(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!G(e)?Do(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Do(n)&&(n=[n]),Ne(t,e,n))}const AE="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const RE="http://www.w3.org/2000/svg",SE="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,qh=Rn&&Rn.createElement("template"),PE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(RE,t):e==="mathml"?Rn.createElementNS(SE,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=qh.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bE=Symbol("_vtc");function CE(t,e,n){const r=t[bE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hh=Symbol("_vod"),kE=Symbol("_vsh"),DE=Symbol(""),OE=/(^|;)\s*display\s*:/;function NE(t,e,n){const r=t.style,s=Ve(n);let i=!1;if(n&&!s){if(e)if(Ve(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&mo(r,a,"")}else for(const o in e)n[o]==null&&mo(r,o,"");for(const o in n)o==="display"&&(i=!0),mo(r,o,n[o])}else if(s){if(e!==n){const o=r[DE];o&&(n+=";"+o),r.cssText=n,i=OE.test(n)}}else e&&t.removeAttribute("style");Hh in t&&(t[Hh]=i?r.display:"",t[kE]&&(r.display="none"))}const Kh=/\s*!important$/;function mo(t,e,n){if(G(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=VE(t,e);Kh.test(n)?t.setProperty(ls(r),n.replace(Kh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],uc={};function VE(t,e){const n=uc[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return uc[e]=r;r=ia(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return uc[e]=i}return e}const zh="http://www.w3.org/1999/xlink";function xE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zh,e.slice(6,e.length)):t.setAttributeNS(zh,e,n);else{const i=Ly(e);n==null||i&&!ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ME(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ep(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function nr(t,e,n,r){t.addEventListener(e,n,r)}function LE(t,e,n,r){t.removeEventListener(e,n,r)}const Gh=Symbol("_vei");function FE(t,e,n,r,s=null){const i=t[Gh]||(t[Gh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=UE(e);if(r){const l=i[e]=jE(r,s);nr(t,a,l,c)}else o&&(LE(t,a,o,c),i[e]=void 0)}}const Qh=/(?:Once|Passive|Capture)$/;function UE(t){let e;if(Qh.test(t)){e={};let r;for(;r=t.match(Qh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let hc=0;const BE=Promise.resolve(),$E=()=>hc||(BE.then(()=>hc=0),hc=Date.now());function jE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(qE(r,n.value),e,5,[r])};return n.value=t,n.attached=$E(),n}function qE(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,HE=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?CE(t,r,l):e==="style"?NE(t,n,r):ra(e)?Vl(e)||FE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KE(t,e,r,l))?ME(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xE(t,e,r,l))};function KE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jh(e)&&re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jh(e)&&Ve(n)?!1:e in t}const No=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ho(e,n):e};function WE(t){t.target.composing=!0}function Yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qr=Symbol("_assign"),zE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[qr]=No(s);const i=r||s.props&&s.props.type==="number";nr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Mc(a)),t[qr](a)}),n&&nr(t,"change",()=>{t.value=t.value.trim()}),e||(nr(t,"compositionstart",WE),nr(t,"compositionend",Yh),nr(t,"change",Yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[qr]=No(i),t.composing)return;const o=s||t.type==="number"?Mc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},dc={created(t,{value:e},n){t.checked=So(e,n.props.value),t[qr]=No(n),nr(t,"change",()=>{t[qr](GE(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[qr]=No(r),e!==n&&(t.checked=So(e,r.props.value))}};function GE(t){return"_value"in t?t._value:t.value}const QE=["ctrl","shift","alt","meta"],JE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>QE.some(n=>t[`${n}Key`]&&!e.includes(n))},Ht=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=JE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},YE=Je({patchProp:HE},PE);let Xh;function XE(){return Xh||(Xh=rE(YE))}const ZE=(...t)=>{const e=XE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tI(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,eI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function eI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tI(t){return Ve(t)?document.querySelector(t):t}var nI=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Xp;const va=t=>Xp=t,Zp=Symbol();function Qc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Bs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bs||(Bs={}));function rI(){const t=rp(!0),e=t.run(()=>lt({}));let n=[],r=[];const s=ca({install(i){va(s),s._a=i,i.provide(Zp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!nI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const eg=()=>{};function Zh(t,e,n,r=eg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&sp()&&By(s),s}function kr(t,...e){t.slice().forEach(n=>{n(...e)})}const sI=t=>t();function Jc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Qc(s)&&Qc(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!xn(r)?t[n]=Jc(s,r):t[n]=r}return t}const iI=Symbol();function oI(t){return!Qc(t)||!t.hasOwnProperty(iI)}const{assign:wn}=Object;function aI(t){return!!(Ue(t)&&t.effect)}function cI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=hv(n.state.value[t]);return wn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ca(mt(()=>{va(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=tg(t,l,e,n,r,!0),c}function tg(t,e,n={},r,s,i){let o;const a=wn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),lt({});let T;function A(Q){let J;l=u=!1,typeof Q=="function"?(Q(r.state.value[t]),J={type:Bs.patchFunction,storeId:t,events:p}):(Jc(r.state.value[t],Q),J={type:Bs.patchObject,payload:Q,storeId:t,events:p});const de=T=Symbol();Wl().then(()=>{T===de&&(l=!0)}),u=!0,kr(h,J,r.state.value[t])}const b=i?function(){const{state:J}=n,de=J?J():{};this.$patch(be=>{wn(be,de)})}:eg;function S(){o.stop(),h=[],d=[],r._s.delete(t)}function R(Q,J){return function(){va(r);const de=Array.from(arguments),be=[],ft=[];function yt(ue){be.push(ue)}function Jn(ue){ft.push(ue)}kr(d,{args:de,name:Q,store:$,after:yt,onError:Jn});let vt;try{vt=J.apply(this&&this.$id===t?this:$,de)}catch(ue){throw kr(ft,ue),ue}return vt instanceof Promise?vt.then(ue=>(kr(be,ue),ue)).catch(ue=>(kr(ft,ue),Promise.reject(ue))):(kr(be,vt),vt)}}const V={_p:r,$id:t,$onAction:Zh.bind(null,d),$patch:A,$reset:b,$subscribe(Q,J={}){const de=Zh(h,Q,J.detached,()=>be()),be=o.run(()=>hr(()=>r.state.value[t],ft=>{(J.flush==="sync"?u:l)&&Q({storeId:t,type:Bs.direct,events:p},ft)},wn({},c,J)));return de},$dispose:S},$=Ii(V);r._s.set(t,$);const X=(r._a&&r._a.runWithContext||sI)(()=>r._e.run(()=>(o=rp()).run(e)));for(const Q in X){const J=X[Q];if(Ue(J)&&!aI(J)||xn(J))i||(_&&oI(J)&&(Ue(J)?J.value=_[Q]:Jc(J,_[Q])),r.state.value[t][Q]=J);else if(typeof J=="function"){const de=R(Q,J);X[Q]=de,a.actions[Q]=J}}return wn($,X),wn(le($),X),Object.defineProperty($,"$state",{get:()=>r.state.value[t],set:Q=>{A(J=>{wn(J,Q)})}}),r._p.forEach(Q=>{wn($,o.run(()=>Q({store:$,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate($.$state,_),l=!0,u=!0,$}function lI(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Yv();return a=a||(l?Dt(Zp,null):null),a&&va(a),a=Xp,a._s.has(r)||(i?tg(r,e,s,a):cI(r,s,a)),a._s.get(r)}return o.$id=r,o}const uI="/disc-golf-scorecard/favicon.svg",hI="modulepreload",dI=function(t){return"/disc-golf-scorecard/"+t},ed={},Is=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=dI(c),c in ed)return;ed[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const _=i[p];if(_.href===c&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":hI,l||(d.as="script",d.crossOrigin=""),d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Nr=typeof document<"u";function fI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function fc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ot(s)?s.map(t):t(s)}return n}const $s=()=>{},Ot=Array.isArray,ng=/#/g,pI=/&/g,gI=/\//g,mI=/=/g,_I=/\?/g,rg=/\+/g,yI=/%5B/g,vI=/%5D/g,sg=/%5E/g,EI=/%60/g,ig=/%7B/g,II=/%7C/g,og=/%7D/g,wI=/%20/g;function Zl(t){return encodeURI(""+t).replace(II,"|").replace(yI,"[").replace(vI,"]")}function TI(t){return Zl(t).replace(ig,"{").replace(og,"}").replace(sg,"^")}function Yc(t){return Zl(t).replace(rg,"%2B").replace(wI,"+").replace(ng,"%23").replace(pI,"%26").replace(EI,"`").replace(ig,"{").replace(og,"}").replace(sg,"^")}function AI(t){return Yc(t).replace(mI,"%3D")}function RI(t){return Zl(t).replace(ng,"%23").replace(_I,"%3F")}function SI(t){return t==null?"":RI(t).replace(gI,"%2F")}function ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const PI=/\/$/,bI=t=>t.replace(PI,"");function pc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=OI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ei(o)}}function CI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function td(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(e.matched[r],n.matched[s])&&ag(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ag(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!DI(t[n],e[n]))return!1;return!0}function DI(t,e){return Ot(t)?nd(t,e):Ot(e)?nd(e,t):t===e}function nd(t,e){return Ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function OI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function NI(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bI(t)}const VI=/^[^#]+#/;function xI(t,e){return t.replace(VI,"#")+e}function MI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ea=()=>({left:window.scrollX,top:window.scrollY});function LI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=MI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rd(t,e){return(history.state?history.state.position-e:-1)+t}const Xc=new Map;function FI(t,e){Xc.set(t,e)}function UI(t){const e=Xc.get(t);return Xc.delete(t),e}let BI=()=>location.protocol+"//"+location.host;function cg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),td(c,"")}return td(n,t)+r+s}function $I(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=cg(t,location),_=n.value,T=e.value;let A=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}A=T?d.position-T.position:0}else r(p);s.forEach(b=>{b(n.value,_,{delta:A,type:ti.pop,direction:A?A>0?js.forward:js.back:js.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:Ea()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function sd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ea():null}}function jI(t){const{history:e,location:n}=window,r={value:cg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:BI()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ge({},e.state,sd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ge({},s.value,e.state,{forward:c,scroll:Ea()});i(u.current,u,!0);const h=ge({},sd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function qI(t){t=NI(t);const e=jI(t),n=$I(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ge({location:"",base:t,go:r,createHref:xI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function HI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),qI(t)}function KI(t){return typeof t=="string"||t&&typeof t=="object"}function lg(t){return typeof t=="string"||typeof t=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ug=Symbol("");var id;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(id||(id={}));function Zr(t,e){return ge(new Error,{type:t,[ug]:!0},e)}function rn(t,e){return t instanceof Error&&ug in t&&(e==null||!!(t.type&e))}const od="[^/]+?",WI={sensitive:!1,strict:!1,start:!0,end:!0},zI=/[.+*?^${}()[\]/\\]/g;function GI(t,e){const n=ge({},WI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(zI,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:T,optional:A,regexp:b}=d;i.push({name:_,repeatable:T,optional:A});const S=b||od;if(S!==od){p+=10;try{new RegExp(`(${S})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+V.message)}}let R=T?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(R=A&&l.length<2?`(?:/${R})`:"/"+R),A&&(R+="?"),s+=R,p+=20,A&&(p+=-8),T&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:T,optional:A}=p,b=_ in l?l[_]:"";if(Ot(b)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=Ot(b)?b.join("/"):b;if(!S)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function QI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function JI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=QI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ad(r))return 1;if(ad(s))return-1}return s.length-r.length}function ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const YI={type:0,value:""},XI=/[a-zA-Z0-9_]/;function ZI(t){if(!t)return[[]];if(t==="/")return[[YI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:XI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ew(t,e,n){const r=GI(ZI(t.path),n),s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tw(t,e){const n=[],r=new Map;e=ud({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,_=nw(u);_.aliasOf=d&&d.record;const T=ud(e,u),A=[_];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of R)A.push(ge({},_,{components:d?d.record.components:_.components,path:V,aliasOf:d?d.record:_}))}let b,S;for(const R of A){const{path:V}=R;if(h&&V[0]!=="/"){const $=h.record.path,L=$[$.length-1]==="/"?"":"/";R.path=h.record.path+(V&&L+V)}if(b=ew(R,h,T),d?d.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),p&&u.name&&!ld(b)&&o(u.name)),_.children){const $=_.children;for(let L=0;L<$.length;L++)i($[L],b,d&&d.children[L])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return S?()=>{o(S)}:$s}function o(u){if(lg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&JI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ld(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},_,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Zr(1,{location:u});T=d.record.name,p=ge(cd(h.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&cd(u.params,d.keys.map(S=>S.name))),_=d.stringify(p)}else if(u.path!=null)_=u.path,d=n.find(S=>S.re.test(_)),d&&(p=d.parse(_),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw Zr(1,{location:u,currentLocation:h});T=d.record.name,p=ge({},h.params,u.params),_=d.stringify(p)}const A=[];let b=d;for(;b;)A.unshift(b.record),b=b.parent;return{name:T,path:_,params:p,matched:A,meta:sw(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function cd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function nw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sw(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function ud(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hg(t,e){return e.children.some(n=>n===t||hg(t,n))}function iw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(rg," "),o=i.indexOf("="),a=ei(o<0?i:i.slice(0,o)),c=o<0?null:ei(i.slice(o+1));if(a in e){let l=e[a];Ot(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function hd(t){let e="";for(let n in t){const r=t[n];if(n=AI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(r)?r.map(i=>i&&Yc(i)):[r&&Yc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ow(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const aw=Symbol(""),dd=Symbol(""),Ia=Symbol(""),dg=Symbol(""),Zc=Symbol("");function ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Zr(4,{from:n,to:e})):d instanceof Error?c(d):KI(d)?c(Zr(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(d=>c(d))})}function gc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(cw(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Sn(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=fI(u)?u.default:u;o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&Sn(p,n,r,o,a,s)()}))}}return i}function cw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fd(t){const e=Dt(Ia),n=Dt(dg),r=mt(()=>e.resolve(et(t.to))),s=mt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xr.bind(null,u));if(d>-1)return d;const p=pd(c[l-2]);return l>1&&pd(u)===p&&h[h.length-1].path!==p?h.findIndex(Xr.bind(null,c[l-2])):d}),i=mt(()=>s.value>-1&&dw(n.params,r.value.params)),o=mt(()=>s.value>-1&&s.value===n.matched.length-1&&ag(n.params,r.value.params));function a(c={}){return hw(c)?e[et(t.replace)?"replace":"push"](et(t.to)).catch($s):Promise.resolve()}return{route:r,href:mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const lw=Dp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fd,setup(t,{slots:e}){const n=Ii(fd(t)),{options:r}=Dt(Ia),s=mt(()=>({[gd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Yp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uw=lw;function hw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ot(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gd=(t,e,n)=>t??e??n,fw=Dp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(Zc),s=mt(()=>t.route||r.value),i=Dt(dd,0),o=mt(()=>{let l=et(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=mt(()=>s.value.matched[o.value]);po(dd,mt(()=>o.value+1)),po(aw,a),po(Zc,s);const c=lt();return hr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Xr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return md(n.default,{Component:d,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,A=Yp(d,ge({},_,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return md(n.default,{Component:A,route:l})||A}}});function md(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pw=fw;function gw(t){const e=tw(t.routes,t),n=t.parseQuery||iw,r=t.stringifyQuery||hd,s=t.history,i=ws(),o=ws(),a=ws(),c=cv(En);let l=En;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fc.bind(null,v=>""+v),h=fc.bind(null,SI),d=fc.bind(null,ei);function p(v,F){let x,j;return lg(v)?(x=e.getRecordMatcher(v),j=F):j=v,e.addRoute(j,x)}function _(v){const F=e.getRecordMatcher(v);F&&e.removeRoute(F)}function T(){return e.getRoutes().map(v=>v.record)}function A(v){return!!e.getRecordMatcher(v)}function b(v,F){if(F=ge({},F||c.value),typeof v=="string"){const g=pc(n,v,F.path),m=e.resolve({path:g.path},F),I=s.createHref(g.fullPath);return ge(g,m,{params:d(m.params),hash:ei(g.hash),redirectedFrom:void 0,href:I})}let x;if(v.path!=null)x=ge({},v,{path:pc(n,v.path,F.path).path});else{const g=ge({},v.params);for(const m in g)g[m]==null&&delete g[m];x=ge({},v,{params:h(g)}),F.params=h(F.params)}const j=e.resolve(x,F),pe=v.hash||"";j.params=u(d(j.params));const Ae=CI(r,ge({},v,{hash:TI(pe),path:j.path})),f=s.createHref(Ae);return ge({fullPath:Ae,hash:pe,query:r===hd?ow(v.query):v.query||{}},j,{redirectedFrom:void 0,href:f})}function S(v){return typeof v=="string"?pc(n,v,c.value.path):ge({},v)}function R(v,F){if(l!==v)return Zr(8,{from:F,to:v})}function V(v){return X(v)}function $(v){return V(ge(S(v),{replace:!0}))}function L(v){const F=v.matched[v.matched.length-1];if(F&&F.redirect){const{redirect:x}=F;let j=typeof x=="function"?x(v):x;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=S(j):{path:j},j.params={}),ge({query:v.query,hash:v.hash,params:j.path!=null?{}:v.params},j)}}function X(v,F){const x=l=b(v),j=c.value,pe=v.state,Ae=v.force,f=v.replace===!0,g=L(x);if(g)return X(ge(S(g),{state:typeof g=="object"?ge({},pe,g.state):pe,force:Ae,replace:f}),F||x);const m=x;m.redirectedFrom=F;let I;return!Ae&&kI(r,j,x)&&(I=Zr(16,{to:m,from:j}),Lt(j,j,!0,!1)),(I?Promise.resolve(I):de(m,j)).catch(y=>rn(y)?rn(y,2)?y:yn(y):fe(y,m,j)).then(y=>{if(y){if(rn(y,2))return X(ge({replace:f},S(y.to),{state:typeof y.to=="object"?ge({},pe,y.to.state):pe,force:Ae}),F||m)}else y=ft(m,j,!0,f,pe);return be(m,j,y),y})}function Q(v,F){const x=R(v,F);return x?Promise.reject(x):Promise.resolve()}function J(v){const F=br.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(v):v()}function de(v,F){let x;const[j,pe,Ae]=mw(v,F);x=gc(j.reverse(),"beforeRouteLeave",v,F);for(const g of j)g.leaveGuards.forEach(m=>{x.push(Sn(m,v,F))});const f=Q.bind(null,v,F);return x.push(f),Ye(x).then(()=>{x=[];for(const g of i.list())x.push(Sn(g,v,F));return x.push(f),Ye(x)}).then(()=>{x=gc(pe,"beforeRouteUpdate",v,F);for(const g of pe)g.updateGuards.forEach(m=>{x.push(Sn(m,v,F))});return x.push(f),Ye(x)}).then(()=>{x=[];for(const g of Ae)if(g.beforeEnter)if(Ot(g.beforeEnter))for(const m of g.beforeEnter)x.push(Sn(m,v,F));else x.push(Sn(g.beforeEnter,v,F));return x.push(f),Ye(x)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),x=gc(Ae,"beforeRouteEnter",v,F,J),x.push(f),Ye(x))).then(()=>{x=[];for(const g of o.list())x.push(Sn(g,v,F));return x.push(f),Ye(x)}).catch(g=>rn(g,8)?g:Promise.reject(g))}function be(v,F,x){a.list().forEach(j=>J(()=>j(v,F,x)))}function ft(v,F,x,j,pe){const Ae=R(v,F);if(Ae)return Ae;const f=F===En,g=Nr?history.state:{};x&&(j||f?s.replace(v.fullPath,ge({scroll:f&&g&&g.scroll},pe)):s.push(v.fullPath,pe)),c.value=v,Lt(v,F,x,f),yn()}let yt;function Jn(){yt||(yt=s.listen((v,F,x)=>{if(!Ki.listening)return;const j=b(v),pe=L(j);if(pe){X(ge(pe,{replace:!0}),j).catch($s);return}l=j;const Ae=c.value;Nr&&FI(rd(Ae.fullPath,x.delta),Ea()),de(j,Ae).catch(f=>rn(f,12)?f:rn(f,2)?(X(f.to,j).then(g=>{rn(g,20)&&!x.delta&&x.type===ti.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(x.delta&&s.go(-x.delta,!1),fe(f,j,Ae))).then(f=>{f=f||ft(j,Ae,!1),f&&(x.delta&&!rn(f,8)?s.go(-x.delta,!1):x.type===ti.pop&&rn(f,20)&&s.go(-1,!1)),be(j,Ae,f)}).catch($s)}))}let vt=ws(),ue=ws(),_e;function fe(v,F,x){yn(v);const j=ue.list();return j.length?j.forEach(pe=>pe(v,F,x)):console.error(v),Promise.reject(v)}function nn(){return _e&&c.value!==En?Promise.resolve():new Promise((v,F)=>{vt.add([v,F])})}function yn(v){return _e||(_e=!v,Jn(),vt.list().forEach(([F,x])=>v?x(v):F()),vt.reset()),v}function Lt(v,F,x,j){const{scrollBehavior:pe}=t;if(!Nr||!pe)return Promise.resolve();const Ae=!x&&UI(rd(v.fullPath,0))||(j||!x)&&history.state&&history.state.scroll||null;return Wl().then(()=>pe(v,F,Ae)).then(f=>f&&LI(f)).catch(f=>fe(f,v,F))}const ut=v=>s.go(v);let Pr;const br=new Set,Ki={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:A,getRoutes:T,resolve:b,options:t,push:V,replace:$,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:nn,install(v){const F=this;v.component("RouterLink",uw),v.component("RouterView",pw),v.config.globalProperties.$router=F,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>et(c)}),Nr&&!Pr&&c.value===En&&(Pr=!0,V(s.location).catch(pe=>{}));const x={};for(const pe in En)Object.defineProperty(x,pe,{get:()=>c.value[pe],enumerable:!0});v.provide(Ia,F),v.provide(dg,mp(x)),v.provide(Zc,c);const j=v.unmount;br.add(v),v.unmount=function(){br.delete(v),br.size<1&&(l=En,yt&&yt(),yt=null,c.value=En,Pr=!1,_e=!1),j()}}};function Ye(v){return v.reduce((F,x)=>F.then(()=>J(x)),Promise.resolve())}return Ki}function mw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xr(l,c))||s.push(c))}return[n,r,s]}function _w(){return Dt(Ia)}const wa=lI("gameStore",()=>{let t=null;localStorage.getItem("scorecard")&&(t=JSON.parse(localStorage.getItem("scorecard")));const e=lt((t==null?void 0:t.players)||[]),n=lt((t==null?void 0:t.holes)||[]),r=()=>(e.value.push({id:e.value.length+Date.now(),name:"",holes:[],total:0}),a(n.value.length),e.value[e.value.length-1]),s=S=>{e.value=e.value.filter(R=>R.id!==S)},i=S=>{e.value=S.map(R=>({id:Date.now()+Math.random()+"",name:"Anonymous",holes:n.value.map(V=>({id:V.id,score:""})),total:0,...R}))},o=()=>{n.value.push({id:n.value.length,par:3}),e.value.forEach(S=>{S.holes.push({id:n.value.length-1,score:""})})},a=S=>{n.value=[];for(let R=0;R<S;R++)n.value.push({id:R,par:3,notes:""});e.value.forEach(R=>{for(let V=0;V<S;V++)R.holes[V]||(R.holes[V]={id:V,score:"",notes:""})})},c=S=>{e.value=[],n.value=[],S.players.forEach(R=>{e.value.push({id:R.id,name:R.name,holes:R.holes,total:R.total})}),S.holes.forEach(R=>{n.value.push({id:R.id,par:R.par,notes:R.notes})})},l=S=>{c(S),e.value.forEach(R=>{R.holes=R.holes.map(V=>({id:V.id,score:"",notes:""}))})},u=(S,R,V)=>{const $=n.value.find(L=>L.id===S);$&&($.par=R,$.notes=V)},h=(S,R,V)=>{const $=e.value.find(X=>X.id===S);if(!$)return;const L=$.holes.findIndex(X=>(X==null?void 0:X.id)===R);L!==-1&&($.holes[L].score=V,_())},d=(S,R)=>{const V=n.value.find($=>$.id===S);V&&(V.par=R,_())},p=(S,R)=>{const V=e.value.find($=>$.id===S);V&&(V.name=R)},_=()=>{e.value.forEach(S=>{S.total=S.holes.reduce((R,V)=>{if(V.score==="E"||V.score==="")return R;const $=n.value.find(L=>L.id===V.id).par;return R+V.score-$},0)})},T=()=>{e.value=[],n.value=[]},A=()=>{localStorage.setItem("scorecard",JSON.stringify({players:e.value,holes:n.value}))},b=()=>{localStorage.getItem("scorecard")&&(localStorage.removeItem("scorecard"),e.value=[],n.value=[])};return hr(e,A,{deep:!0}),hr(n,A,{deep:!0}),{players:e,holes:n,cloneGame:l,setGame:c,addPlayer:r,removePlayer:s,setPlayers:i,updateName:p,addHole:o,setHole:u,setHoles:a,setScore:h,reset:T,setPar:d,removeLocalStorage:b}}),us=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yw={class:"modal-inner"},vw={__name:"ModalWrapper",emits:["close"],setup(t,{emit:e}){const n=e;return(r,s)=>(De(),On(uE,{to:"body"},[q("div",{class:"modal",onClick:s[1]||(s[1]=Ht(i=>n("close"),["self"]))},[q("div",yw,[q("button",{class:"btn btn-close",onClick:s[0]||(s[0]=Ht(()=>n("close"),["prevent"]))},"X"),jv(r.$slots,"default",{close:()=>n("close"),test:5},void 0,!0)])])]))}},Ew=us(vw,[["__scopeId","data-v-720290cd"]]),_d=["Ace","Acey","Airshot","Backhand","Basket","Birdie","Blitz","Bogey","Caddy","Cannon","Chains","Corkscrew","Dasher","Disc","Discus","Driver","Eagle","Fairway","Flick","Flare","Forehand","Frisbee","Glide","Grip","Harmony","Huck","Hyzer","Juke","Laser","Launch","Launchpad","Magnet","Mulligan","Putter","Putt","Raptor","Ripper","Roc","Skip","Stall","Steady","Tee","Throw","Zephyr"],yd=["Driver","Woods","Putterman","Putterson","Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Mulligan","Robinson"],Iw=()=>`${_d[Math.floor(Math.random()*_d.length)]} ${yd[Math.floor(Math.random()*yd.length)]}`,gn=t=>(da("data-v-e3c2ccee"),t=t(),fa(),t),ww={class:"form-row"},Tw=gn(()=>q("p",null,"Holes",-1)),Aw={class:"hole-inputs"},Rw={class:"radio-wrapper"},Sw=gn(()=>q("span",null,"1",-1)),Pw={class:"radio-wrapper"},bw=gn(()=>q("span",null,"9",-1)),Cw={class:"radio-wrapper"},kw=gn(()=>q("span",null,"18",-1)),Dw=gn(()=>q("small",null,"* You can add more as you go",-1)),Ow={class:"form-row"},Nw=gn(()=>q("p",null,"Players",-1)),Vw=["placeholder","onUpdate:modelValue"],xw=["onClick"],Mw=gn(()=>q("span",{class:"material-symbols-outlined"},"delete",-1)),Lw=[Mw],Fw=gn(()=>q("span",{class:"material-symbols-outlined"},"person_add",-1)),Uw={class:"form-row"},Bw=["disabled"],$w=gn(()=>q("small",null,"* This will overwrite any current unsaved scorecard.",-1)),jw={__name:"NewGameModal",props:{modal:Object},setup(t){const e=wa(),n=_w(),{user:r}=hh(),s=t,i=lt([]),o=lt(9);Vp(()=>{c()});const a=()=>{e.reset(),e.setHoles(o.value),i.value=i.value.map(h=>({...h,name:h.name||h.placeholder})),e.setPlayers(i.value),s.modal.close(),n.push("/play")},c=h=>{let d="";r.value&&i.value.length===0&&(d=r.value.displayName),i.value.push({id:Date.now()+Math.random()+"",name:d,placeholder:d||Iw()})},l=h=>{i.value=i.value.filter(d=>d.id!==h)},u=mt(()=>o.value>0&&i.value.length>0);return(h,d)=>(De(),Et("form",{class:"setup-form",onSubmit:Ht(a,["prevent"])},[q("div",ww,[Tw,q("div",Aw,[q("label",Rw,[Xi(q("input",{type:"radio",name:"holes",value:1,"onUpdate:modelValue":d[0]||(d[0]=p=>o.value=p),onChange:d[1]||(d[1]=p=>o.value=1)},null,544),[[dc,o.value]]),Sw]),q("label",Pw,[Xi(q("input",{type:"radio",name:"holes",value:9,"onUpdate:modelValue":d[2]||(d[2]=p=>o.value=p),onChange:d[3]||(d[3]=p=>o.value=9)},null,544),[[dc,o.value]]),bw]),q("label",Cw,[Xi(q("input",{type:"radio",name:"holes",value:18,"onUpdate:modelValue":d[4]||(d[4]=p=>o.value=p),onChange:d[5]||(d[5]=p=>o.value=18)},null,544),[[dc,o.value]]),kw])]),Dw]),q("div",Ow,[Nw,(De(!0),Et(at,null,Mp(i.value,p=>(De(),Et("div",{key:p.id,class:"player-row"},[Xi(q("input",{type:"text",name:"player",placeholder:p.placeholder,"onUpdate:modelValue":_=>p.name=_},null,8,Vw),[[zE,p.name]]),q("button",{class:"btn btn-warn btn-icon",onClick:Ht(_=>l(p.id),["prevent"])},Lw,8,xw)]))),128)),q("button",{class:"btn btn-add",onClick:Ht(c,["prevent"])},[Fw,St(" Add Player ")])]),q("div",Uw,[q("button",{class:"btn btn-primary",disabled:!u.value},"Start",8,Bw),$w])],32))}},qw=us(jw,[["__scopeId","data-v-e3c2ccee"]]),Hw={__name:"NewGameButton",props:{classes:{type:String,default:"btn"}},setup(t){const e=lt(!1);return(n,r)=>(De(),Et(at,null,[q("button",{class:oa(t.classes),onClick:r[0]||(r[0]=Ht(s=>e.value=!0,["prevent"]))}," New Game ",2),e.value?(De(),On(Ew,{key:0,onClose:r[1]||(r[1]=s=>e.value=!1)},{default:Dn(s=>[Ne(qw,{modal:s},null,8,["modal"])]),_:1})):Yl("",!0)],64))}},Kw=us(Hw,[["__scopeId","data-v-77e88424"]]),Ta=t=>(da("data-v-aa9d94dd"),t=t(),fa(),t),Ww={key:0,class:"archive container"},zw=Ta(()=>q("h1",null,"My games",-1)),Gw={key:0},Qw={key:1},Jw={key:2},Yw={class:"game-row"},Xw=["onClick"],Zw=["datetime"],eT={class:"game-row__buttons"},tT={class:"main-buttons"},nT=["onClick"],rT=Ta(()=>q("span",{class:"material-symbols-outlined"},"visibility",-1)),sT=["onClick"],iT=Ta(()=>q("span",{class:"material-symbols-outlined"},"content_copy",-1)),oT=["onClick"],aT=Ta(()=>q("span",{class:"material-symbols-outlined"},"delete",-1)),cT=[aT],lT={__name:"HomeView",setup(t){const{status:e,user:n,userGames:r,deleteDocument:s,getGames:i}=hh(),o=wa(),a=u=>{o.setGame(u),ni.push("/play")},c=u=>{o.cloneGame(u),ni.push("/play")},l=u=>{s("games",u.id),i()};return(u,h)=>{const d=$c("RouterLink");return et(e)!=="loading"?(De(),Et("form",Ww,[zw,Ne(Kw),!et(r).length&&et(n)?(De(),Et("p",Gw," No games found. ")):!et(r).length&&!et(n)?(De(),Et("p",Qw,[Ne(d,{to:"/log-in"},{default:Dn(()=>[St("Log in")]),_:1}),St(" or "),Ne(d,{to:"/sign-up"},{default:Dn(()=>[St("create an account")]),_:1}),St(" to save your games. ")])):(De(),Et("ul",Jw,[(De(!0),Et(at,null,Mp(et(r),p=>(De(),Et("li",{key:p.id},[q("div",Yw,[q("button",{class:"btn btn-game btn-icon",onClick:Ht(_=>a(p),["prevent"])},[St(yh(p.name)+" ",1),q("time",{datetime:p.date},yh(new Date(p.date).toLocaleDateString("en-us",{timeZone:"UTC"})),9,Zw)],8,Xw),q("div",eT,[q("div",tT,[q("button",{class:"btn btn-icon",onClick:Ht(_=>a(p),["prevent"])},[rT,St(" View ")],8,nT),q("button",{class:"btn btn-icon",onClick:Ht(_=>c(p),["prevent"])},[iT,St(" Clone ")],8,sT)]),q("button",{class:"btn btn-icon btn-warn",onClick:Ht(_=>l(p),["prevent"])},cT,8,oT)])])]))),128))]))])):Yl("",!0)}}},uT=us(lT,[["__scopeId","data-v-aa9d94dd"]]),ni=gw({history:HI("/disc-golf-scorecard/"),routes:[{path:"/",name:"home",component:uT},{path:"/play",name:"play",component:()=>Is(()=>import("./PlayView-DmW0zVGd.js"),__vite__mapDeps([0,1]))},{path:"/account",name:"account",component:()=>Is(()=>import("./AccountView-DcnrmibS.js"),__vite__mapDeps([2,3]))},{path:"/log-in",name:"log-in",component:()=>Is(()=>import("./LoginView-ySnfTfr6.js"),__vite__mapDeps([4,5,6,7]))},{path:"/sign-up",name:"sign-up",component:()=>Is(()=>import("./SignupView-C0xin4Tl.js"),__vite__mapDeps([8,5,6,9]))},{path:"/reset-password",name:"reset-password",component:()=>Is(()=>import("./ResetPasswordView-CFMcnBO7.js"),__vite__mapDeps([10,11]))}]});var vd={};/**
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
 */const fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new dT;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fT=function(t){const e=fg(t);return pg.encodeByteArray(e,!0)},Vo=function(t){return fT(t).replace(/\./g,"")},gg=function(t){try{return pg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gT=()=>pT().__FIREBASE_DEFAULTS__,mT=()=>{if(typeof process>"u"||typeof vd>"u")return;const t=vd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_T=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gg(t[1]);return e&&JSON.parse(e)},Aa=()=>{try{return gT()||mT()||_T()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mg=t=>{var e,n;return(n=(e=Aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yT=t=>{const e=mg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_g=()=>{var t;return(t=Aa())===null||t===void 0?void 0:t.config},yg=t=>{var e;return(e=Aa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ET(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),""].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function wT(){var t;const e=(t=Aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RT(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ST(){return!wT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vg(){try{return typeof indexedDB=="object"}catch{return!1}}function PT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const bT="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bT,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?CT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mn(s,a,r)}}function CT(t,e){return t.replace(kT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kT=/\{\$([^}]+)}/g;function DT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ed(i)&&Ed(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ed(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function OT(t,e){const n=new NT(t,e);return n.subscribe.bind(n)}class NT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class xT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LT(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MT(t){return t===er?void 0:t}function LT(t){return t.instantiationMode==="EAGER"}/**
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
 */class FT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const UT={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},BT=oe.INFO,$T={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},jT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$T[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=BT,this._logHandler=jT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const qT=(t,e)=>e.some(n=>t instanceof n);let Id,wd;function HT(){return Id||(Id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KT(){return wd||(wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,el=new WeakMap,Ig=new WeakMap,_c=new WeakMap,tu=new WeakMap;function WT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ln(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),tu.set(e,t),e}function zT(t){if(el.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GT(t){tl=t(tl)}function QT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yc(this),e,...n);return Ig.set(r,e.sort?e.sort():[e]),Ln(r)}:KT().includes(t)?function(...e){return t.apply(yc(this),e),Ln(Eg.get(this))}:function(...e){return Ln(t.apply(yc(this),e))}}function JT(t){return typeof t=="function"?QT(t):(t instanceof IDBTransaction&&zT(t),qT(t,HT())?new Proxy(t,tl):t)}function Ln(t){if(t instanceof IDBRequest)return WT(t);if(_c.has(t))return _c.get(t);const e=JT(t);return e!==t&&(_c.set(t,e),tu.set(e,t)),e}const yc=t=>tu.get(t);function YT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ln(o.result),c.oldVersion,c.newVersion,Ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const XT=["get","getKey","getAll","getAllKeys","count"],ZT=["put","add","delete","clear"],vc=new Map;function Td(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ZT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return vc.set(e,i),i}GT(t=>({...t,get:(e,n,r)=>Td(e,n)||t.get(e,n,r),has:(e,n)=>!!Td(e,n)||t.has(e,n)}));/**
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
 */class eA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",Ad="0.10.0";/**
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
 */const pr=new eu("@firebase/app"),nA="@firebase/app-compat",rA="@firebase/analytics-compat",sA="@firebase/analytics",iA="@firebase/app-check-compat",oA="@firebase/app-check",aA="@firebase/auth",cA="@firebase/auth-compat",lA="@firebase/database",uA="@firebase/database-compat",hA="@firebase/functions",dA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",gA="@firebase/messaging",mA="@firebase/messaging-compat",_A="@firebase/performance",yA="@firebase/performance-compat",vA="@firebase/remote-config",EA="@firebase/remote-config-compat",IA="@firebase/storage",wA="@firebase/storage-compat",TA="@firebase/firestore",AA="@firebase/firestore-compat",RA="firebase",SA="10.10.0";/**
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
 */const rl="[DEFAULT]",PA={[nl]:"fire-core",[nA]:"fire-core-compat",[sA]:"fire-analytics",[rA]:"fire-analytics-compat",[oA]:"fire-app-check",[iA]:"fire-app-check-compat",[aA]:"fire-auth",[cA]:"fire-auth-compat",[lA]:"fire-rtdb",[uA]:"fire-rtdb-compat",[hA]:"fire-fn",[dA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[gA]:"fire-fcm",[mA]:"fire-fcm-compat",[_A]:"fire-perf",[yA]:"fire-perf-compat",[vA]:"fire-rc",[EA]:"fire-rc-compat",[IA]:"fire-gcs",[wA]:"fire-gcs-compat",[TA]:"fire-fst",[AA]:"fire-fst-compat","fire-js":"fire-js",[RA]:"fire-js-all"};/**
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
 */const Mo=new Map,bA=new Map,sl=new Map;function Rd(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(sl.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;sl.set(e,t);for(const n of Mo.values())Rd(n,t);for(const n of bA.values())Rd(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t.settings!==void 0}/**
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
 */const CA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Ti("app","Firebase",CA);/**
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
 */class kA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=SA;function wg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(n||(n=_g()),!n)throw Fn.create("no-options");const i=Mo.get(s);if(i){if(xo(n,i.options)&&xo(r,i.config))return i;throw Fn.create("duplicate-app",{appName:s})}const o=new FT(s);for(const c of sl.values())o.addComponent(c);const a=new kA(n,r,o);return Mo.set(s,a),a}function Tg(t=rl){const e=Mo.get(t);if(!e&&t===rl&&_g())return wg();if(!e)throw Fn.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let s=(r=PA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}es(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const DA="firebase-heartbeat-database",OA=1,ri="firebase-heartbeat-store";let Ec=null;function Ag(){return Ec||(Ec=YT(DA,OA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),Ec}async function NA(t){try{const n=(await Ag()).transaction(ri),r=await n.objectStore(ri).get(Rg(t));return await n.done,r}catch(e){if(e instanceof mn)pr.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Sd(t,e){try{const r=(await Ag()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,Rg(t)),await r.done}catch(n){if(n instanceof mn)pr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function Rg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VA=1024,xA=30*24*60*60*1e3;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pd(),{heartbeatsToSend:r,unsentEntries:s}=LA(this._heartbeatsCache.heartbeats),i=Vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pd(){return new Date().toISOString().substring(0,10)}function LA(t,e=VA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vg()?PT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bd(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UA(t){es(new fr("platform-logger",e=>new eA(e),"PRIVATE")),es(new fr("heartbeat",e=>new MA(e),"PRIVATE")),Un(nl,Ad,t),Un(nl,Ad,"esm2017"),Un("fire-js","")}UA("");var BA="firebase",$A="10.10.0";/**
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
 */Un(BA,$A,"app");function ru(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jA=Sg,Pg=new Ti("auth","Firebase",Sg());/**
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
 */const Lo=new eu("@firebase/auth");function qA(t,...e){Lo.logLevel<=oe.WARN&&Lo.warn(`Auth (${hs}): ${t}`,...e)}function _o(t,...e){Lo.logLevel<=oe.ERROR&&Lo.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw su(t,...e)}function zt(t,...e){return su(t,...e)}function bg(t,e,n){const r=Object.assign(Object.assign({},jA()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function Gt(t){return bg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pg.create(t,...e)}function W(t,e,...n){if(!t)throw su(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function hn(t,e){t||sn(e)}/**
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
 */function il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HA(){return Cd()==="http:"||Cd()==="https:"}function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function KA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HA()||TT()||"connection"in navigator)?navigator.onLine:!0}function WA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=IT()||AT()}get(){return KA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function iu(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GA=new Ri(3e4,6e4);function _n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mt(t,e,n,r,s={}){return kg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Cg.fetch()(Dg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function kg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zA),e);try{const s=new JA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw eo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bg(t,u,l);Nt(t,u)}}catch(s){if(s instanceof mn)throw s;Nt(t,"network-request-failed",{message:String(s)})}}async function Si(t,e,n,r,s={}){const i=await Mt(t,e,n,r,s);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?iu(t.config,s):`${t.config.apiScheme}://${s}`}function QA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),GA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}function kd(t){return t!==void 0&&t.enterprise!==void 0}class YA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function XA(t,e){return Mt(t,"GET","/v2/recaptchaConfig",_n(t,e))}/**
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
 */async function ZA(t,e){return Mt(t,"POST","/v1/accounts:delete",e)}async function Og(t,e){return Mt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e0(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=ou(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qs(Ic(s.auth_time)),issuedAtTime:qs(Ic(s.iat)),expirationTime:qs(Ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function ou(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=gg(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dd(t){const e=ou(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&t0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function t0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class n0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ol{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gr(t,Og(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ng(i.providerUserInfo):[],a=s0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ol(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function r0(t){const e=Me(t);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ng(t){return t.map(e=>{var{providerId:n}=e,r=ru(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function i0(t,e){const n=await kg(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Dg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function o0(t,e){return Mt(t,"POST","/v2/accounts:revokeToken",_n(t,e))}/**
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
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Dd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await i0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hr;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
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
 */function In(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ol(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e0(this,e)}reload(){return r0(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Gt(this.auth));const e=await this.getIdToken();return await gr(this,ZA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:V,isAnonymous:$,providerData:L,stsTokenManager:X}=n;W(R&&X,e,"internal-error");const Q=Hr.fromJSON(this.name,X);W(typeof R=="string",e,"internal-error"),In(h,e.name),In(d,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof $=="boolean",e,"internal-error"),In(p,e.name),In(_,e.name),In(T,e.name),In(A,e.name),In(b,e.name),In(S,e.name);const J=new on({uid:R,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:$,photoURL:_,phoneNumber:p,tenantId:T,stsTokenManager:Q,createdAt:b,lastLoginAt:S});return L&&Array.isArray(L)&&(J.providerData=L.map(de=>Object.assign({},de))),A&&(J._redirectEventId=A),J}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hr;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ng(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Hr;a.updateFromIdToken(r);const c=new on({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ol(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Od=new Map;function an(t){hn(t instanceof Function,"Expected a class definition");let e=Od.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Od.set(t,e),e)}/**
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
 */class Vg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vg.type="NONE";const Nd=Vg;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(an(Nd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||an(Nd);const o=yo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=on._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Kr(i,e,r))}}/**
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
 */function Vd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ug(e))return"Blackberry";if(Bg(e))return"Webos";if(au(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xg(t=xe()){return/firefox\//i.test(t)}function au(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=xe()){return/crios\//i.test(t)}function Lg(t=xe()){return/iemobile/i.test(t)}function Fg(t=xe()){return/android/i.test(t)}function Ug(t=xe()){return/blackberry/i.test(t)}function Bg(t=xe()){return/webos/i.test(t)}function Ra(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a0(t=xe()){var e;return Ra(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c0(){return RT()&&document.documentMode===10}function $g(t=xe()){return Ra(t)||Fg(t)||Bg(t)||Ug(t)||/windows phone/i.test(t)||Lg(t)}function l0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Vd(xe());break;case"Worker":n=`${Vd(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class u0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function h0(t,e={}){return Mt(t,"GET","/v2/passwordPolicy",_n(t,e))}/**
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
 */const d0=6;class f0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:d0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class p0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xd(this),this.idTokenSubscription=new xd(this),this.beforeStateQueue=new u0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Og(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Gt(this));const n=e?Me(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h0(this),n=new f0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await o0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(t){return Me(t)}class xd{constructor(e){this.auth=e,this.observer=null,this.addObserver=OT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g0(t){Sa=t}function qg(t){return Sa.loadJS(t)}function m0(){return Sa.recaptchaEnterpriseScript}function _0(){return Sa.gapiScript}function y0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const v0="recaptcha-enterprise",E0="NO_RECAPTCHA";class I0{constructor(e){this.type=v0,this.auth=zn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{XA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new YA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;kd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(E0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&kd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=m0();c.length!==0&&(c+=a),qg(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Md(t,e,n,r=!1){const s=new I0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uo(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Md(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Md(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function w0(t,e){const n=nu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return s;Nt(s,"already-initialized")}return n.initialize({options:e})}function T0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function A0(t,e,n){const r=zn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Hg(e),{host:o,port:a}=R0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||S0()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R0(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ld(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ld(o)}}}function Ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function S0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function P0(t,e){return Mt(t,"POST","/v1/accounts:update",e)}async function b0(t,e){return Mt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function C0(t,e){return Si(t,"POST","/v1/accounts:signInWithPassword",_n(t,e))}async function k0(t,e){return Mt(t,"POST","/v1/accounts:sendOobCode",_n(t,e))}async function D0(t,e){return k0(t,e)}/**
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
 */async function O0(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}async function N0(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}/**
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
 */class si extends cu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new si(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new si(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uo(e,n,"signInWithPassword",C0);case"emailLink":return O0(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uo(e,r,"signUpPassword",b0);case"emailLink":return N0(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wr(t,e){return Si(t,"POST","/v1/accounts:signInWithIdp",_n(t,e))}/**
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
 */const V0="http://localhost";class mr extends cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ru(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:V0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */function x0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M0(t){const e=Cs(ks(t)).link,n=e?Cs(ks(e)).deep_link_id:null,r=Cs(ks(t)).deep_link_id;return(r?Cs(ks(r)).link:null)||r||n||e||t}class lu{constructor(e){var n,r,s,i,o,a;const c=Cs(ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=x0((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=M0(e);try{return new lu(n)}catch{return null}}}/**
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
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(e,n){return si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lu.parseLink(n);return W(r,"argument-error"),si._fromEmailAndCode(e,r.code,r.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends Kg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pn extends Pi{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Cn extends Pi{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
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
 */class kn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */async function L0(t,e){return Si(t,"POST","/v1/accounts:signUp",_n(t,e))}/**
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
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=Fd(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fd(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bo extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bo(e,n,r,s)}}function Wg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(t,i,e,r):i})}async function F0(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function zg(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(Gt(r));const s="reauthenticate";try{const i=await gr(t,Wg(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=ou(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),i}}/**
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
 */async function Gg(t,e,n=!1){if(bt(t.app))return Promise.reject(Gt(t));const r="signIn",s=await Wg(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function U0(t,e){return Gg(zn(t),e)}async function B0(t,e){return zg(Me(t),e)}/**
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
 */function $0(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Qg(t){const e=zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j0(t,e,n){const r=zn(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&$0(r,s,n),await Uo(r,s,"getOobCode",D0)}async function q0(t,e,n){if(bt(t.app))return Promise.reject(Gt(t));const r=zn(t),o=await Uo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",L0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Qg(t),c}),a=await _r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function H0(t,e,n){return bt(t.app)?Promise.reject(Gt(t)):U0(Me(t),Tr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qg(t),r})}/**
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
 */async function K0(t,e){return Mt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ud(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Me(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gr(r,K0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function W0(t,e){const n=Me(t);return bt(n.auth.app)?Promise.reject(Gt(n.auth)):Jg(n,e,null)}function z0(t,e){return Jg(Me(t),null,e)}async function Jg(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await gr(t,P0(r,i));await t._updateTokensIfNecessary(o,!0)}function G0(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function Q0(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function J0(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function Y0(t){return Me(t).signOut()}async function X0(t){return Me(t).delete()}const $o="__sak";/**
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
 */class Yg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Z0(){const t=xe();return au(t)||Ra(t)}const eR=1e3,tR=10;class Xg extends Yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z0()&&l0(),this.fallbackToPolling=$g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);c0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xg.type="LOCAL";const nR=Xg;/**
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
 */class Zg extends Yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zg.type="SESSION";const em=Zg;/**
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
 */function rR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await rR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=uu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function iR(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function tm(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function oR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cR(){return tm()?self:null}/**
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
 */const nm="firebaseLocalStorageDb",lR=1,jo="firebaseLocalStorage",rm="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ba(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function uR(){const t=indexedDB.deleteDatabase(nm);return new bi(t).toPromise()}function al(){const t=indexedDB.open(nm,lR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jo,{keyPath:rm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await uR(),e(await al()))})})}async function Bd(t,e,n){const r=ba(t,!0).put({[rm]:e,value:n});return new bi(r).toPromise()}async function hR(t,e){const n=ba(t,!1).get(e),r=await new bi(n).toPromise();return r===void 0?null:r.value}function $d(t,e){const n=ba(t,!0).delete(e);return new bi(n).toPromise()}const dR=800,fR=3;class sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(cR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oR(),!this.activeServiceWorker)return;this.sender=new sR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await al();return await Bd(e,$o,"1"),await $d(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$d(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ba(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sm.type="LOCAL";const pR=sm;new Ri(3e4,6e4);/**
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
 */function gR(t,e){return e?an(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hu extends cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mR(t){return Gg(t.auth,new hu(t),t.bypassAuthState)}function _R(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),zg(n,new hu(t),t.bypassAuthState)}async function yR(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),F0(n,new hu(t),t.bypassAuthState)}/**
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
 */class im{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mR;case"linkViaPopup":case"linkViaRedirect":return yR;case"reauthViaPopup":case"reauthViaRedirect":return _R;default:Nt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vR=new Ri(2e3,1e4);class Lr extends im{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vR.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const ER="pendingRedirect",vo=new Map;class IR extends im{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await wR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wR(t,e){const n=RR(e),r=AR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function TR(t,e){vo.set(t._key(),e)}function AR(t){return an(t._redirectPersistence)}function RR(t){return yo(ER,t.config.apiKey,t.name)}async function SR(t,e,n=!1){if(bt(t.app))return Promise.reject(Gt(t));const r=zn(t),s=gR(r,e),o=await new IR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PR=10*60*1e3;class bR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!om(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PR&&this.cachedEventUids.clear(),this.cachedEventUids.has(jd(e))}saveEventToCache(e){this.cachedEventUids.add(jd(e)),this.lastProcessedEventTime=Date.now()}}function jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function om({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return om(t);default:return!1}}/**
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
 */async function kR(t,e={}){return Mt(t,"GET","/v1/projects",e)}/**
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
 */const DR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OR=/^https?/;async function NR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kR(t);for(const n of e)try{if(VR(n))return}catch{}Nt(t,"unauthorized-domain")}function VR(t){const e=il(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OR.test(n))return!1;if(DR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const xR=new Ri(3e4,6e4);function qd(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MR(t){return new Promise((e,n)=>{var r,s,i;function o(){qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qd(),n(zt(t,"network-request-failed"))},timeout:xR.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=y0("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},qg(`${_0()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function LR(t){return Eo=Eo||MR(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const FR=new Ri(5e3,15e3),UR="__/auth/iframe",BR="emulator/auth/iframe",$R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qR(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?iu(e,BR):`https://${t.config.authDomain}/${UR}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=jR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function HR(t){const e=await LR(t),n=Qt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:qR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$R,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},FR.get());function c(){Qt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const KR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WR=500,zR=600,GR="_blank",QR="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JR(t,e,n,r=WR,s=zR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},KR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=xe().toLowerCase();n&&(a=Mg(l)?GR:n),xg(l)&&(e=e||QR,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(a0(l)&&a!=="_self")return YR(e||"",a),new Hd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Hd(h)}function YR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const XR="__/auth/handler",ZR="emulator/auth/handler",eS=encodeURIComponent("fac");async function Kd(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof Kg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Pi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${eS}=${encodeURIComponent(c)}`:"";return`${tS(t)}?${Ai(a).slice(1)}${l}`}function tS({config:t}){return t.emulator?iu(t,ZR):`https://${t.authDomain}/${XR}`}/**
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
 */const wc="webStorageSupport";class nS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=em,this._completeRedirectFn=SR,this._overrideRedirectResult=TR}async _openPopup(e,n,r,s){var i;hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Kd(e,n,r,il(),s);return JR(e,o,uu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Kd(e,n,r,il(),s);return iR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HR(e),r=new bR(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $g()||au()||Ra()}}const rS=nS;var Wd="@firebase/auth",zd="1.7.0";/**
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
 */class sS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oS(t){es(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},l=new p0(r,s,i,c);return T0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new fr("auth-internal",e=>{const n=zn(e.getProvider("auth").getImmediate());return(r=>new sS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Wd,zd,iS(t)),Un(Wd,zd,"esm2017")}/**
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
 */const aS=5*60,cS=yg("authIdTokenMaxAge")||aS;let Gd=null;const lS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cS)return;const s=n==null?void 0:n.token;Gd!==s&&(Gd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uS(t=Tg()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=w0(t,{popupRedirectResolver:rS,persistence:[pR,nR,em]}),r=yg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lS(i.toString());Q0(n,o,()=>o(n.currentUser)),G0(n,a=>o(a))}}const s=mg("auth");return s&&A0(n,`http://${s}`),n}function hS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",hS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oS("Browser");var dS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,du=du||{},Z=dS||self;function Ca(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fS(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++pS)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),pS=0;function gS(t,e,n){return t.call.apply(t.bind,arguments)}function mS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=gS:rt=mS,rt.apply(null,arguments)}function to(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var _S=0;Gn.prototype.s=!1;Gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),_S!=0)&&fS(this)};Gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const am=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ca(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var yS=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Z.addEventListener("test",n,e),Z.removeEventListener("test",n,e)}catch{}return t}();function ii(t){return/^[\s\xa0]*$/.test(t)}function ka(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return ka().indexOf(t)!=-1}function pu(t){return pu[" "](t),t}pu[" "]=function(){};function vS(t,e){var n=hP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ES=qt("Opera"),ts=qt("Trident")||qt("MSIE"),cm=qt("Edge"),cl=cm||ts,lm=qt("Gecko")&&!(ka().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),IS=ka().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function um(){var t=Z.document;return t?t.documentMode:void 0}var ll;e:{var Ac="",Rc=function(){var t=ka();if(lm)return/rv:([^\);]+)(\)|;)/.exec(t);if(cm)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IS)return/WebKit\/(\S+)/.exec(t);if(ES)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rc&&(Ac=Rc?Rc[1]:""),ts){var Sc=um();if(Sc!=null&&Sc>parseFloat(Ac)){ll=String(Sc);break e}}ll=Ac}var ul;if(Z.document&&ts){var Jd=um();ul=Jd||parseInt(ll,10)||void 0}else ul=void 0;var wS=ul;function oi(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lm){e:{try{pu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oi.$.h.call(this)}}qe(oi,st);var TS={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),AS=0;function RS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++AS,this.fa=this.ia=!1}function Da(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function SS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function hm(t){const e={};for(const n in t)e[n]=t[n];return e}const Yd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Yd.length;i++)n=Yd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Oa(t){this.src=t,this.g={},this.h=0}Oa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new RS(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function hl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=am(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Da(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var mu="closure_lm_"+(1e6*Math.random()|0),Pc={};function fm(t,e,n,r,s){if(r&&r.once)return gm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)fm(t,e[i],n,r,s);return null}return n=vu(n),t&&t[ki]?t.O(e,n,Ci(r)?!!r.capture:!!r,s):pm(t,e,n,!1,r,s)}function pm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ci(s)?!!s.capture:!!s,a=yu(t);if(a||(t[mu]=a=new Oa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=PS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)yS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(_m(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PS(){function t(n){return e.call(t.src,t.listener,n)}const e=bS;return t}function gm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gm(t,e[i],n,r,s);return null}return n=vu(n),t&&t[ki]?t.P(e,n,Ci(r)?!!r.capture:!!r,s):pm(t,e,n,!0,r,s)}function mm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)mm(t,e[i],n,r,s);else r=Ci(r)?!!r.capture:!!r,n=vu(n),t&&t[ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dl(i,n,r,s),-1<n&&(Da(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=yu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,r,s)),(n=-1<t?e[t]:null)&&_u(n))}function _u(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ki])hl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_m(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yu(e))?(hl(n,t),n.h==0&&(n.src=null,e[mu]=null)):Da(t)}}}function _m(t){return t in Pc?Pc[t]:Pc[t]="on"+t}function bS(t,e){if(t.fa)t=!0;else{e=new oi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&_u(t),t=n.call(r,e)}return t}function yu(t){return t=t[mu],t instanceof Oa?t:null}var bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function vu(t){return typeof t=="function"?t:(t[bc]||(t[bc]=function(e){return t.handleEvent(e)}),t[bc])}function je(){Gn.call(this),this.i=new Oa(this),this.S=this,this.J=null}qe(je,Gn);je.prototype[ki]=!0;je.prototype.removeEventListener=function(t,e,n,r){mm(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),dm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=no(o,r,!0,e)&&s}if(o=e.g=t,s=no(o,r,!0,e)&&s,s=no(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=no(o,r,!1,e)&&s}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Da(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function no(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&hl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Eu=Z.JSON.stringify;class CS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function kS(){var t=Iu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DS{constructor(){this.h=this.g=null}add(e,n){const r=ym.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ym=new CS(()=>new OS,t=>t.reset());class OS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VS(t){Z.setTimeout(()=>{throw t},0)}let ai,ci=!1,Iu=new DS,vm=()=>{const t=Z.Promise.resolve(void 0);ai=()=>{t.then(xS)}};var xS=()=>{for(var t;t=kS();){try{t.h.call(t.g)}catch(n){VS(n)}var e=ym;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ci=!1};function Na(t,e){je.call(this),this.h=t||1,this.g=e||Z,this.j=rt(this.qb,this),this.l=Date.now()}qe(Na,je);N=Na.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(wu(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Na.$.N.call(this),wu(this),delete this.g};function Tu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Em(t){t.g=Tu(()=>{t.g=null,t.i&&(t.i=!1,Em(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class MS extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Em(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(t){Gn.call(this),this.h=t,this.g={}}qe(li,Gn);var Xd=[];function Im(t,e,n,r){Array.isArray(n)||(n&&(Xd[0]=n.toString()),n=Xd);for(var s=0;s<n.length;s++){var i=fm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function wm(t){gu(t.g,function(e,n){this.g.hasOwnProperty(n)&&_u(e)},t),t.g={}}li.prototype.N=function(){li.$.N.call(this),wm(this)};li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Va(){this.g=!0}Va.prototype.Ea=function(){this.g=!1};function LS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function FS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Fr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BS(t,n)+(r?" "+r:"")})}function US(t,e){t.info(function(){return"TIMEOUT: "+e})}Va.prototype.info=function(){};function BS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Eu(n)}catch{return e}}var Ar={},Zd=null;function xa(){return Zd=Zd||new je}Ar.Ta="serverreachability";function Tm(t){st.call(this,Ar.Ta,t)}qe(Tm,st);function ui(t){const e=xa();Ge(e,new Tm(e))}Ar.STAT_EVENT="statevent";function Am(t,e){st.call(this,Ar.STAT_EVENT,t),this.stat=e}qe(Am,st);function ct(t){const e=xa();Ge(e,new Am(e,t))}Ar.Ua="timingevent";function Rm(t,e){st.call(this,Ar.Ua,t),this.size=e}qe(Rm,st);function Di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Ma={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Sm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Au(){}Au.prototype.h=null;function ef(t){return t.h||(t.h=t.i())}function Pm(){}var Oi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ru(){st.call(this,"d")}qe(Ru,st);function Su(){st.call(this,"c")}qe(Su,st);var fl;function La(){}qe(La,Au);La.prototype.g=function(){return new XMLHttpRequest};La.prototype.i=function(){return{}};fl=new La;function Ni(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new li(this),this.P=$S,t=cl?125:void 0,this.V=new Na(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new bm}function bm(){this.i=null,this.g="",this.h=!1}var $S=45e3,Cm={},pl={};N=Ni.prototype;N.setTimeout=function(t){this.P=t};function gl(t,e,n){t.L=1,t.A=Ua(dn(e)),t.u=n,t.S=!0,km(t,null)}function km(t,e){t.G=Date.now(),Vi(t),t.B=dn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Fm(n.i,"t",r),t.o=0,n=t.l.J,t.h=new bm,t.g=i_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new MS(rt(t.Pa,t,t.g),t.O)),Im(t.U,t.g,"readystatechange",t.nb),e=t.I?hm(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ui(),LS(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Kt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Kt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||cl||this.g&&(this.h.h||this.g.ja()||sf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ui(3):ui(2)),Fa(this);var n=this.g.da();this.ca=n;t:if(Dm(this)){var r=sf(this.g);t="";var s=r.length,i=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Hs(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,FS(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ii(a)){var l=a;break t}}l=null}if(n=l)Fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ml(this,n);else{this.i=!1,this.s=3,ct(12),ir(this),Hs(this);break e}}this.S?(Om(this,u,o),cl&&this.i&&u==3&&(Im(this.U,this.V,"tick",this.mb),this.V.start())):(Fr(this.j,this.m,o,null),ml(this,o)),u==4&&ir(this),this.i&&!this.J&&(u==4?t_(this.l,this):(this.i=!1,Vi(this)))}else cP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),ir(this),Hs(this)}}}catch{}finally{}};function Dm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Om(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=jS(t,n),s==pl){e==4&&(t.s=4,ct(14),r=!1),Fr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Cm){t.s=4,ct(15),Fr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fr(t.j,t.m,s,null),ml(t,s);Dm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ou(e),e.M=!0,ct(11))):(Fr(t.j,t.m,n,"[Invalid Chunked Response]"),ir(t),Hs(t))}N.mb=function(){if(this.g){var t=Kt(this.g),e=this.g.ja();this.o<e.length&&(Fa(this),Om(this,t,e),this.i&&t!=4&&Vi(this))}};function jS(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?pl:(n=Number(e.substring(n,r)),isNaN(n)?Cm:(r+=1,r+n>e.length?pl:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,ir(this)};function Vi(t){t.Y=Date.now()+t.P,Nm(t,t.P)}function Nm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Di(rt(t.lb,t),e)}function Fa(t){t.C&&(Z.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(US(this.j,this.B),this.L!=2&&(ui(),ct(17)),ir(this),this.s=2,Hs(this)):Nm(this,this.Y-t)};function Hs(t){t.l.H==0||t.J||t_(t.l,t)}function ir(t){Fa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,wu(t.V),wm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ml(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_l(n.i,t))){if(!t.K&&_l(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ko(n),qa(n);else break e;Du(n),ct(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Di(rt(n.ib,n),6e3));if(1>=$m(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&Ko(n),!ii(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Pu(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,we(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=s_(r,r.J?r.pa:null,r.Y),o.K){jm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Fa(a),Vi(a)),r.g=o}else Zm(r);0<n.j.length&&Ha(n)}else l[0]!="stop"&&l[0]!="close"||or(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?or(n,7):ku(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ui(4)}catch{}}function qS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ca(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function HS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ca(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Vm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ca(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HS(t),r=qS(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var xm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function dr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof dr){this.h=t.h,qo(this,t.j),this.s=t.s,this.g=t.g,Ho(this,t.m),this.l=t.l;var e=t.i,n=new hi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tf(this,n),this.o=t.o}else t&&(e=String(t).match(xm))?(this.h=!1,qo(this,e[1]||"",!0),this.s=Ds(e[2]||""),this.g=Ds(e[3]||"",!0),Ho(this,e[4]),this.l=Ds(e[5]||"",!0),tf(this,e[6]||"",!0),this.o=Ds(e[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Os(e,nf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Os(e,nf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Os(n,n.charAt(0)=="/"?GS:zS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Os(n,JS)),t.join("")};function dn(t){return new dr(t)}function qo(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ho(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tf(t,e,n){e instanceof hi?(t.i=e,YS(t.i,t.h)):(n||(e=Os(e,QS)),t.i=new hi(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Ua(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,WS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function WS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nf=/[#\/\?@]/g,zS=/[#\?:]/g,GS=/[#\?]/g,QS=/[#\?@]/g,JS=/#/g;function hi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&KS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=hi.prototype;N.add=function(t,e){Qn(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mm(t,e){Qn(t),e=ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lm(t,e){return Qn(t),e=ds(t,e),t.g.has(e)}N.forEach=function(t,e){Qn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){Qn(this);let e=[];if(typeof t=="string")Lm(this,t)&&(e=e.concat(this.g.get(ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Qn(this),this.i=null,t=ds(this,t),Lm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Fm(t,e,n){Mm(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),fu(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function YS(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Mm(this,r),Fm(this,s,n))},t)),t.j=e}var XS=class{constructor(t,e){this.g=t,this.map=e}};function Um(t){this.l=t||ZS,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZS=10;function Bm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $m(t){return t.h?1:t.g?t.g.size:0}function _l(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pu(t,e){t.g?t.g.add(e):t.h=e}function jm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Um.prototype.cancel=function(){if(this.i=qm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return fu(t.i)}var eP=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function tP(){this.g=new eP}function nP(t,e,n){const r=n||"";try{Vm(t,function(s,i){let o=s;Ci(s)&&(o=Eu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function rP(t,e){const n=new Va;if(Z.Image){const r=new Image;r.onload=to(ro,n,r,"TestLoadImage: loaded",!0,e),r.onerror=to(ro,n,r,"TestLoadImage: error",!1,e),r.onabort=to(ro,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=to(ro,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ro(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ba(t){this.l=t.ec||null,this.j=t.ob||!1}qe(Ba,Au);Ba.prototype.g=function(){return new $a(this.l,this.j)};Ba.prototype.i=function(t){return function(){return t}}({});function $a(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe($a,je);var bu=0;N=$a.prototype;N.open=function(t,e){if(this.readyState!=bu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=bu};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Hm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Hm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xi(this):di(this),this.readyState==3&&Hm(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,xi(this))};N.Ya=function(t){this.g&&(this.response=t,xi(this))};N.ka=function(){this.g&&xi(this)};function xi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sP=Z.JSON.parse;function Pe(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Km,this.L=this.M=!1}qe(Pe,je);var Km="",iP=/^https?$/i,oP=["POST","PUT"];N=Pe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fl.g(),this.C=this.u?ef(this.u):ef(fl),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){rf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Z.FormData&&t instanceof Z.FormData,!(0<=am(oP,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gm(this),0<this.B&&((this.L=aP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Tu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rf(this,i)}};function aP(t){return ts&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof du<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function rf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wm(t),ja(t)}function Wm(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),ja(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ja(this,!0)),Pe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?zm(this):this.kb())};N.kb=function(){zm(this)};function zm(t){if(t.h&&typeof du<"u"&&(!t.C[1]||Kt(t)!=4||t.da()!=2)){if(t.v&&Kt(t)==4)Tu(t.La,0,t);else if(Ge(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(xm)[1]||null;!s&&Z.self&&Z.self.location&&(s=Z.self.location.protocol.slice(0,-1)),r=!iP.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<Kt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Wm(t)}}finally{ja(t)}}}}function ja(t,e){if(t.g){Gm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Gm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Kt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sP(e)}};function sf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Km:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function cP(t){const e={};t=(t.g&&2<=Kt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ii(t[r]))continue;var n=NS(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}SS(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qm(t){let e="";return gu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Cu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Qm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jm(t){this.Ga=0,this.j=[],this.l=new Va,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ts("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ts("baseRetryDelayMs",5e3,t),this.hb=Ts("retryDelaySeedMs",1e4,t),this.eb=Ts("forwardChannelMaxRetries",2,t),this.xa=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Um(t&&t.concurrentRequestLimit),this.Ja=new tP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Jm.prototype;N.ra=8;N.H=1;function ku(t){if(Ym(t),t.H==3){var e=t.W++,n=dn(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),Mi(t,n),e=new Ni(t,t.l,e),e.L=2,e.A=Ua(dn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.A,n=!0),n||(e.g=i_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Vi(e)}r_(t)}function qa(t){t.g&&(Ou(t),t.g.cancel(),t.g=null)}function Ym(t){qa(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Ko(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Ha(t){if(!Bm(t.i)&&!t.m){t.m=!0;var e=t.Na;ai||vm(),ci||(ai(),ci=!0),Iu.add(e,t),t.C=0}}function lP(t,e){return $m(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Di(rt(t.Na,t,e),n_(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ni(this,this.l,t);let i=this.s;if(this.U&&(i?(i=hm(i),dm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xm(this,s,e),n=dn(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Mi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Qm(i)))+"&"+e:this.o&&Cu(n,this.o,i)),Pu(this.i,s),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),s.aa=!0,gl(s,n,null)):gl(s,n,e),this.H=2}}else this.H==3&&(t?of(this,t):this.j.length==0||Bm(this.i)||of(this))};function of(t,e){var n;e?n=e.m:n=t.W++;const r=dn(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),Mi(t,r),t.o&&t.s&&Cu(r,t.o,t.s),n=new Ni(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Pu(t.i,n),gl(n,r,e)}function Mi(t,e){t.na&&gu(t.na,function(n,r){we(e,r,n)}),t.h&&Vm({},function(n,r){we(e,r,n)})}function Xm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{nP(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Zm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ai||vm(),ci||(ai(),ci=!0),Iu.add(e,t),t.A=0}}function Du(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Di(rt(t.Ma,t),n_(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,e_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Di(rt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ct(10),qa(this),e_(this))};function Ou(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function e_(t){t.g=new Ni(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dn(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),Mi(t,e),t.o&&t.s&&Cu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ua(dn(e)),n.u=null,n.S=!0,km(n,t)}N.ib=function(){this.v!=null&&(this.v=null,qa(this),Du(this),ct(19))};function Ko(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function t_(t,e){var n=null;if(t.g==e){Ko(t),Ou(t),t.g=null;var r=2}else if(_l(t.i,e))n=e.F,jm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=xa(),Ge(r,new Rm(r,n)),Ha(t)}else Zm(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&lP(t,e)||r==2&&Du(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}}function n_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new dr("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||qo(n,"https"),Ua(n)),rP(n.toString(),r)}else ct(2);t.H=0,t.h&&t.h.za(e),r_(t),Ym(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ct(2)):(this.l.info("Failed to ping google.com"),ct(1))};function r_(t){if(t.H=0,t.ma=[],t.h){const e=qm(t.i);(e.length!=0||t.j.length!=0)&&(Qd(t.ma,e),Qd(t.ma,t.j),t.i.i.length=0,fu(t.j),t.j.length=0),t.h.ya()}}function s_(t,e,n){var r=n instanceof dr?dn(n):new dr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ho(r,r.m);else{var s=Z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new dr(null);r&&qo(i,r),e&&(i.g=e),s&&Ho(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),Mi(t,r),r}function i_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new Ba({ob:n})):new Pe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function o_(){}N=o_.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Wo(){if(ts&&!(10<=Number(wS)))throw Error("Environmental error: no available transport.")}Wo.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){je.call(this),this.g=new Jm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}qe(_t,je);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=s_(t,null,t.Y),Ha(t)};_t.prototype.close=function(){ku(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eu(t),t=n);e.j.push(new XS(e.fb++,t)),e.H==3&&Ha(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,ku(this.g),delete this.g,_t.$.N.call(this)};function a_(t){Ru.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(a_,Ru);function c_(){Su.call(this),this.status=1}qe(c_,Su);function fs(t){this.g=t}qe(fs,o_);fs.prototype.Ba=function(){Ge(this.g,"a")};fs.prototype.Aa=function(t){Ge(this.g,new a_(t))};fs.prototype.za=function(t){Ge(this.g,new c_)};fs.prototype.ya=function(){Ge(this.g,"b")};function uP(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(Vt,uP);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Cc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Vt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Cc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Cc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Cc(this,r),s=0;break}}this.h=s,this.i+=e};Vt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var hP={};function Nu(t){return-128<=t&&128>t?vS(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Wt(t){if(isNaN(t)||!isFinite(t))return zr;if(0>t)return Ke(Wt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=yl;return new me(e,0)}function l_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(l_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Wt(Math.pow(e,8)),r=zr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Wt(Math.pow(e,i)),r=r.R(i).add(Wt(o))):(r=r.R(n),r=r.add(Wt(o)))}return r}var yl=4294967296,zr=Nu(0),vl=Nu(1),af=Nu(16777216);N=me.prototype;N.ea=function(){if(It(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:yl+r)*e,e*=yl}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(It(this))return"-"+Ke(this).toString(t);for(var e=Wt(Math.pow(t,6)),n=this,r="";;){var s=Go(n,e).g;n=zo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,cn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}N.X=function(t){return t=zo(this,t),It(t)?-1:cn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(vl)}N.abs=function(){return It(this)?Ke(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function zo(t,e){return t.add(Ke(e))}N.R=function(t){if(cn(this)||cn(t))return zr;if(It(this))return It(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(It(t))return Ke(this.R(Ke(t)));if(0>this.X(af)&&0>t.X(af))return Wt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,so(n,2*r+2*s),n[2*r+2*s+1]+=i*c,so(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,so(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,so(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function so(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function As(t,e){this.g=t,this.h=e}function Go(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new As(zr,zr);if(It(t))return e=Go(Ke(t),e),new As(Ke(e.g),Ke(e.h));if(It(e))return e=Go(t,Ke(e)),new As(Ke(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vl,r=e;0>=r.X(t);)n=cf(n),r=cf(r);var s=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!cn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Dr(r,1),n=Dr(n,1)}return e=zo(t,s.R(e)),new As(s,e)}for(s=zr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Wt(n),o=i.R(e);It(o)||0<o.X(t);)n-=r,i=Wt(n),o=i.R(e);cn(i)&&(i=vl),s=s.add(i),t=zo(t,o)}return new As(s,t)}N.gb=function(t){return Go(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function cf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(s,t.h)}Wo.prototype.createWebChannel=Wo.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Ma.NO_ERROR=0;Ma.TIMEOUT=8;Ma.HTTP_ERROR=6;Sm.COMPLETE="complete";Pm.EventType=Oi;Oi.OPEN="a";Oi.CLOSE="b";Oi.ERROR="c";Oi.MESSAGE="d";je.prototype.listen=je.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Wt;me.fromString=l_;var dP=function(){return new Wo},fP=function(){return xa()},kc=Ma,pP=Sm,gP=Ar,lf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},io=Pm,mP=Pe,_P=Vt,Gr=me;const uf="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let ps="10.10.0";/**
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
 */const yr=new eu("@firebase/firestore");function Rs(){return yr.logLevel}function O(t,...e){if(yr.logLevel<=oe.DEBUG){const n=e.map(Vu);yr.debug(`Firestore (${ps}): ${t}`,...n)}}function en(t,...e){if(yr.logLevel<=oe.ERROR){const n=e.map(Vu);yr.error(`Firestore (${ps}): ${t}`,...n)}}function ns(t,...e){if(yr.logLevel<=oe.WARN){const n=e.map(Vu);yr.warn(`Firestore (${ps}): ${t}`,...n)}}function Vu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw en(e),new Error(e)}function ve(t,e){t||Y()}function ne(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class u_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class vP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EP{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new u_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ze(e)}}class IP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new TP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function RP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class h_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=RP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Fe(0,0))}static max(){return new te(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends fi{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const SP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends fi{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return SP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Te.fromString(e))}static fromName(e){return new K(Te.fromString(e).popFirst(5))}static empty(){return new K(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Te(e.slice()))}}function PP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Hn(s,K.empty(),e)}function bP(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(te.min(),K.empty(),-1)}static max(){return new Hn(te.max(),K.empty(),-1)}}function CP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const kP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==kP)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(s=>s?w.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new w((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new w((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class xu{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new un,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ks(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Mu(r.target.error);this.V.reject(new Ks(e,s))}}static open(e,n,r,s){try{return new xu(n,e.transaction(s,r))}catch(i){throw new Ks(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new NP(n)}}class ar{constructor(e,n,r){this.name=e,this.version=n,this.p=r,ar.S(xe())===12.2&&en("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),rr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!vg())return!1;if(ar.C())return!0;const e=xe(),n=ar.S(e),r=0<n&&n<10,s=ar.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Ks(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new B(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ks(e,o))},s.onupgradeneeded=i=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=xu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(O("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class OP{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return rr(this.k.delete())}}class Ks extends B{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Fi(t){return t.name==="IndexedDbTransactionError"}class NP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(O("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),rr(r)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),rr(this.store.add(e))}get(e){return rr(this.store.get(e)).next(n=>(n===void 0&&(n=null),O("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),rr(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),rr(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new w((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){O("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new w((r,s)=>{n.onerror=i=>{const o=Mu(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new w((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new OP(a),l=n(a.primaryKey,a.value,c);if(l instanceof w){const u=l.catch(h=>(c.done(),w.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function rr(t){return new w((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Mu(r.target.error);n(s)}})}let hf=!1;function Mu(t){const e=ar.S(xe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hf||(hf=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Lu._e=-1;function Ka(t){return t==null}function Qo(t){return t===0&&1/t==-1/0}function VP(t){return typeof t=="number"&&Number.isInteger(t)&&!Qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ff(this.data.getIterator())}getIteratorFrom(e){return new ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Qe(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class f_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f_("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const xP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=xP.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Fu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Uu(t){const e=t.mapValue.fields.__previous_value__;return Fu(e)?Uu(e):e}function pi(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class MP{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fu(t)?4:LP(t)?9007199254740991:10:Y()}function tn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Kn(s.timestampValue),a=Kn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),a=ke(i.doubleValue);return o===a?Qo(o)===Qo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(df(o)!==df(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!tn(o[c],a[c])))return!1;return!0}(t,e);default:return Y()}}function mi(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ke(i.integerValue||i.doubleValue),c=ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return pf(t.timestampValue,e.timestampValue);case 4:return pf(pi(t),pi(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const a=vr(i),c=vr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=he(a[l],c[l]);if(u!==0)return u}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(ke(i.latitude),ke(o.latitude));return a!==0?a:he(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ss(a[l],c[l]);if(u)return u}return he(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ao.mapValue&&o===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(o===ao.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=he(c[h],u[h]);if(d!==0)return d;const p=ss(a[c[h]],l[u[h]]);if(p!==0)return p}return he(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Kn(t),r=Kn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function is(t){return El(t)}function El(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=El(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${El(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function gf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Il(t){return!!t&&"integerValue"in t}function Bu(t){return!!t&&"arrayValue"in t}function mf(t){return!!t&&"nullValue"in t}function _f(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=ze.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ws(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Ws(this.value))}}function p_(t){const e=[];return gs(t.fields,(n,r)=>{const s=new ze([n]);if(Io(r)){const i=p_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
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
 */class tt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,te.min(),te.min(),te.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,te.min(),te.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,te.min(),te.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jo{constructor(e,n){this.position=e,this.inclusive=n}}function yf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function FP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class g_{}class Oe extends g_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BP(e,n,r):n==="array-contains"?new qP(e,r):n==="in"?new HP(e,r):n==="not-in"?new KP(e,r):n==="array-contains-any"?new WP(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $P(e,r):new jP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends g_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new xt(e,n)}matches(e){return m_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function m_(t){return t.op==="and"}function __(t){return UP(t)&&m_(t)}function UP(t){for(const e of t.filters)if(e instanceof xt)return!1;return!0}function wl(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+is(t.value);if(__(t))return t.filters.map(e=>wl(e)).join(",");{const e=t.filters.map(n=>wl(n)).join(",");return`${t.op}(${e})`}}function y_(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&y_(o,s.filters[a]),!0):!1}(t,e):void Y()}function v_(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof xt?function(n){return n.op.toString()+" {"+n.getFilters().map(v_).join(" ,")+"}"}(t):"Filter"}class BP extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class $P extends Oe{constructor(e,n){super(e,"in",n),this.keys=E_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jP extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=E_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function E_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class qP extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bu(n)&&mi(n.arrayValue,this.value)}}class HP extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mi(this.value.arrayValue,n)}}class KP extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mi(this.value.arrayValue,n)}}class WP extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
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
 */class zP{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Ef(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zP(t,e,n,r,s,i,o)}function $u(t){const e=ne(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.ce=n}return e.ce}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vf(t.startAt,e.startAt)&&vf(t.endAt,e.endAt)}function Tl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ui{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function GP(t,e,n,r,s,i,o,a){return new Ui(t,e,n,r,s,i,o,a)}function I_(t){return new Ui(t)}function If(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function w_(t){return t.collectionGroup!==null}function zs(t){const e=ne(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qe(ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Yo(i,r))}),n.has(ze.keyField().canonicalString())||e.le.push(new Yo(ze.keyField(),r))}return e.le}function Jt(t){const e=ne(t);return e.he||(e.he=QP(e,zs(t))),e.he}function QP(t,e){if(t.limitType==="F")return Ef(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yo(s.field,i)});const n=t.endAt?new Jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jo(t.startAt.position,t.startAt.inclusive):null;return Ef(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Al(t,e){const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rl(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return ju(Jt(t),Jt(e))&&t.limitType===e.limitType}function T_(t){return`${$u(Jt(t))}|lt:${t.limitType}`}function Vr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>v_(s)).join(", ")}]`),Ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=yf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,zs(r),s)||r.endAt&&!function(o,a,c){const l=yf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,zs(r),s))}(t,e)}function JP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A_(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=YP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YP(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ss(c,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return d_(this.inner)}size(){return this.innerSize}}/**
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
 */const XP=new Se(K.comparator);function fn(){return XP}const R_=new Se(K.comparator);function Ns(...t){let e=R_;for(const n of t)e=e.insert(n.key,n);return e}function S_(t){let e=R_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Gs()}function P_(){return Gs()}function Gs(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZP=new Se(K.comparator),eb=new Qe(K.comparator);function ie(...t){let e=eb;for(const n of t)e=e.add(n);return e}const tb=new Qe(he);function nb(){return tb}/**
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
 */function b_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qo(e)?"-0":e}}function C_(t){return{integerValue:""+t}}function rb(t,e){return VP(e)?C_(e):b_(t,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function sb(t,e,n){return t instanceof Xo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fu(i)&&(i=Uu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof _i?D_(t,e):t instanceof yi?O_(t,e):function(s,i){const o=k_(s,i),a=wf(o)+wf(s.Ie);return Il(o)&&Il(s.Ie)?C_(a):b_(s.serializer,a)}(t,e)}function ib(t,e,n){return t instanceof _i?D_(t,e):t instanceof yi?O_(t,e):n}function k_(t,e){return t instanceof Zo?function(r){return Il(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xo extends Ga{}class _i extends Ga{constructor(e){super(),this.elements=e}}function D_(t,e){const n=N_(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends Ga{constructor(e){super(),this.elements=e}}function O_(t,e){let n=N_(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class Zo extends Ga{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function wf(t){return ke(t.integerValue||t.doubleValue)}function N_(t){return Bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ob(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?rs(r.elements,s.elements,tn):r instanceof Zo&&s instanceof Zo?tn(r.Ie,s.Ie):r instanceof Xo&&s instanceof Xo}(t.transform,e.transform)}class ab{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function V_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qu(t.key,Yt.none()):new Bi(t.key,t.data,Yt.none());{const n=t.data,r=wt.empty();let s=new Qe(ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new Ct(s.toArray()),Yt.none())}}function cb(t,e,n){t instanceof Bi?function(s,i,o){const a=s.value.clone(),c=Af(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Af(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(x_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Bi?function(i,o,a,c){if(!wo(i.precondition,o))return a;const l=i.value.clone(),u=Rf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,a,c){if(!wo(i.precondition,o))return a;const l=Rf(i.fieldTransforms,c,o),u=o.data;return u.setAll(x_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=k_(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function Tf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,o)=>ob(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function x_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ib(o,a,n[s]))}return r}function Rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sb(i,o,e))}return r}class qu extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ub extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=V_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>Tf(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>Tf(n,r))}}class Hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=function(){return ZP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hu(e,n,r,s)}}/**
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
 */class db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,ae;function pb(t){switch(t){default:return Y();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function M_(t){if(t===void 0)return en("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ce.OK:return E.OK;case Ce.CANCELLED:return E.CANCELLED;case Ce.UNKNOWN:return E.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return E.INTERNAL;case Ce.UNAVAILABLE:return E.UNAVAILABLE;case Ce.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ce.NOT_FOUND:return E.NOT_FOUND;case Ce.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ce.ABORTED:return E.ABORTED;case Ce.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ce.DATA_LOSS:return E.DATA_LOSS;default:return Y()}}(ae=Ce||(Ce={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gb(){return new TextEncoder}/**
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
 */const mb=new Gr([4294967295,4294967295],0);function Sf(t){const e=gb().encode(t),n=new _P;return n.update(e),new Uint8Array(n.digest())}function Pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class Ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Gr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Gr.fromNumber(r)));return s.compare(mb)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Sf(e),[r,s]=Pf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ku(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Sf(e),[r,s]=Pf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ja(te.min(),s,new Se(he),fn(),ie())}}class $i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $i(r,n,ie(),ie(),ie())}}/**
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
 */class To{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class L_{constructor(e,n){this.targetId=e,this.fe=n}}class F_{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class bf{constructor(){this.ge=0,this.pe=kf(),this.ye=it.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ie(),n=ie(),r=ie();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new $i(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=kf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ve(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class _b{constructor(e){this.Be=e,this.ke=new Map,this.qe=fn(),this.Qe=Cf(),this.Ke=new Se(he)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Tl(i))if(r===0){const o=new K(i.path);this.We(n,o,tt.newNoDocument(o,te.min()))}else ve(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=vr(r).toUint8Array()}catch(c){if(c instanceof f_)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ku(o,s,i)}catch(c){return ns(c instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Tl(a.target)){const c=new K(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,tt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ie();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ja(e,n,this.Ke,this.qe,r);return this.qe=fn(),this.Qe=Cf(),this.Ke=new Se(he),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new bf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Qe(he),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new bf),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Cf(){return new Se(K.comparator)}function kf(){return new Se(K.comparator)}const yb={asc:"ASCENDING",desc:"DESCENDING"},vb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Eb={and:"AND",or:"OR"};class Ib{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sl(t,e){return t.useProto3Json||Ka(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wb(t,e){return ea(t,e.toTimestamp())}function Xt(t){return ve(!!t),te.fromTimestamp(function(n){const r=Kn(n);return new Fe(r.seconds,r.nanos)}(t))}function Wu(t,e){return Pl(t,e).canonicalString()}function Pl(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function B_(t){const e=Te.fromString(t);return ve(K_(e)),e}function bl(t,e){return Wu(t.databaseId,e.path)}function Dc(t,e){const n=B_(e);if(n.get(1)!==t.databaseId.projectId)throw new B(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(j_(n))}function $_(t,e){return Wu(t.databaseId,e)}function Tb(t){const e=B_(t);return e.length===4?Te.emptyPath():j_(e)}function Cl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j_(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Df(t,e,n){return{name:bl(t,e),fields:n.value.mapValue.fields}}function Ab(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ve(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:M_(l.code);return new B(u,l.message||"")}(o);n=new F_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dc(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):te.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=tt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new To(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Dc(t,r.document),i=r.readTime?Xt(r.readTime):te.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new To([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Dc(t,r.document),i=r.removedTargetIds||[];n=new To([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fb(s,i),a=r.targetId;n=new L_(a,o)}}return n}function Rb(t,e){let n;if(e instanceof Bi)n={update:Df(t,e.key,e.value)};else if(e instanceof qu)n={delete:bl(t,e.key)};else if(e instanceof Rr)n={update:Df(t,e.key,e.data),updateMask:Vb(e.fieldMask)};else{if(!(e instanceof ub))return Y();n={verify:bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function Sb(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(te.min())&&(o=Xt(i)),new ab(o,s.transformResults||[])}(n,e))):[]}function Pb(t,e){return{documents:[$_(t,e.path)]}}function bb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$_(t,s);const i=function(l){if(l.length!==0)return H_(xt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:xr(d.field),direction:Db(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Sl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function Cb(t){let e=Tb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=q_(h);return d instanceof xt&&__(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Yo(Mr(_.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ka(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Jo(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Jo(p,d)}(n.endAt)),GP(e,s,o,i,a,"F",c,l)}function kb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function q_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mr(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Mr(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Mr(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mr(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xt.create(n.compositeFilter.filters.map(r=>q_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Db(t){return yb[t]}function Ob(t){return vb[t]}function Nb(t){return Eb[t]}function xr(t){return{fieldPath:t.canonicalString()}}function Mr(t){return ze.fromServerFormat(t.fieldPath)}function H_(t){return t instanceof Oe?function(n){if(n.op==="=="){if(_f(n.value))return{unaryFilter:{field:xr(n.field),op:"IS_NAN"}};if(mf(n.value))return{unaryFilter:{field:xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_f(n.value))return{unaryFilter:{field:xr(n.field),op:"IS_NOT_NAN"}};if(mf(n.value))return{unaryFilter:{field:xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(n.field),op:Ob(n.op),value:n.value}}}(t):t instanceof xt?function(n){const r=n.getFilters().map(s=>H_(s));return r.length===1?r[0]:{compositeFilter:{op:Nb(n.op),filters:r}}}(t):Y()}function Vb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function K_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nn{constructor(e,n,r,s,i=te.min(),o=te.min(),a=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xb{constructor(e){this.ct=e}}function Mb(t){const e=Cb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rl(e,e.limit,"L"):e}/**
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
 */class Lb{constructor(){this._n=new Fb}addToCollectionParentIndex(e,n){return this._n.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Hn.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Fb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Te.comparator)).toArray()}}/**
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
 */class os{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new os(0)}static Ln(){return new os(-1)}}/**
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
 */class Ub{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $b{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Ct.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ns();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=fn();const o=Gs(),a=function(){return Gs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Rr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Qs(u.mutation,l,u.mutation.getFieldMask(),Fe.now())):o.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Bb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Se((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ct.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=P_();u.forEach(d=>{if(!i.has(d)){const p=V_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):w_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):w.resolve(cr());let a=-1,c=i;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:S_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,i).next(a=>w.forEach(a,c=>{const l=function(h,d){return new Ui(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,tt.newInvalidDocument(u)))});let a=Ns();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Qs(u.mutation,l,Ct.empty(),Fe.now()),za(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class jb{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return w.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Mb(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),w.resolve()}}/**
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
 */class qb{constructor(){this.overlays=new Se(K.comparator),this.hr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return w.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=cr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return w.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new db(n,r));let i=this.hr.get(n);i===void 0&&(i=ie(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class zu{constructor(){this.Pr=new Qe($e.Ir),this.Tr=new Qe($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new Te([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new Te([])),r=new $e(n,e),s=new $e(n,e+1);let i=ie();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||he(e.pr,n.pr)}static Er(e,n){return he(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
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
 */class Hb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Qe($e.Ir)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(he);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),w.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new $e(new K(i),0);let a=new Qe(he);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),w.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return w.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),s=this.wr.firstAfterOrEqual(r);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kb{constructor(e){this.vr=e,this.docs=function(){return new Se(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=fn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||CP(bP(u),r)<=0||(s.has(u.key)||za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}Fr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Wb(this)}getSize(e){return w.resolve(this.size)}}class Wb extends Ub{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class zb{constructor(e){this.persistence=e,this.Mr=new ms(n=>$u(n),ju),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Or=0,this.Nr=new zu,this.targetCount=0,this.Lr=os.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),w.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.qn(n),w.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Nr.containsKey(n))}}/**
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
 */class Gb{constructor(e,n){this.Br={},this.overlays={},this.kr=new Lu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new zb(this),this.indexManager=new Lb,this.remoteDocumentCache=function(s){return new Kb(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new xb(n),this.$r=new jb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Hb(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const s=new Qb(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return w.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Qb extends DP{constructor(e){super(),this.currentSequenceNumber=e}}class Gu{constructor(e){this.persistence=e,this.zr=new zu,this.jr=null}static Hr(e){return new Gu(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),w.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Jr,r=>{const s=K.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return w.or([()=>w.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Qu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qu(e,n.fromCache,r,s)}}/**
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
 */class Jb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Yb{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ST()?8:ar.v(xe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Jb;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Rs()<=oe.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Vr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),w.resolve()):(Rs()<=oe.DEBUG&&O("QueryEngine","Query:",Vr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Rs()<=oe.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Vr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):w.resolve())}ji(e,n){if(If(n))return w.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rl(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,Rl(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return If(n)||s.isEqual(te.min())?w.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?w.resolve(null):(Rs()<=oe.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vr(n)),this.es(e,o,n,PP(s,-1)).next(a=>a))})}Zi(e,n){let r=new Qe(A_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Rs()<=oe.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Vr(n)),this.zi.getDocumentsMatchingQuery(e,n,Hn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Xb{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Se(he),this.rs=new ms(i=>$u(i),ju),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $b(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function Zb(t,e,n,r){return new Xb(t,e,n,r)}async function W_(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ie();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function eC(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=w.resolve();return d.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(T=>{const A=l.docVersions.get(_);ve(A!==null),T.version.compareTo(A)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ie();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function z_(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function tC(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(it.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,A,b){return T.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let c=fn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(nC(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(te.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function nC(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=fn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function rC(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sC(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,w.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Nn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function kl(t,e,n){const r=ne(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Of(t,e,n){const r=ne(t);let s=te.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ne(c),d=h.rs.get(u);return d!==void 0?w.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,Jt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ie())).next(a=>(iC(r,JP(e),a),{documents:a,hs:i})))}function iC(t,e,n){let r=t.ss.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Nf{constructor(){this.activeTargetIds=nb()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oC{constructor(){this.no=new Nf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Nf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aC{io(e){}shutdown(){}}/**
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
 */class Vf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let co=null;function Oc(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
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
 */const cC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Xe="WebChannelConnection";class uC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Oc(),c=this.bo(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(O("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ns("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=cC[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Oc();return new Promise((o,a)=>{const c=new mP;c.setWithCredentials(!0),c.listenOnce(pP.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case kc.NO_ERROR:const u=c.getResponseJson();O(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case kc.TIMEOUT:O(Xe,`RPC '${e}' ${i} timed out`),a(new B(E.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const h=c.getStatus();if(O(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(A){const b=A.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(b)>=0?b:E.UNKNOWN}(p.status);a(new B(_,p.message))}else a(new B(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(E.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{O(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);O(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=Oc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dP(),a=fP(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");O(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const _=new lC({lo:A=>{p?O(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(d||(O(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),O(Xe,`RPC '${e}' stream ${s} sending:`,A),h.send(A))},ho:()=>h.close()}),T=(A,b,S)=>{A.listen(b,R=>{try{S(R)}catch(V){setTimeout(()=>{throw V},0)}})};return T(h,io.EventType.OPEN,()=>{p||O(Xe,`RPC '${e}' stream ${s} transport opened.`)}),T(h,io.EventType.CLOSE,()=>{p||(p=!0,O(Xe,`RPC '${e}' stream ${s} transport closed`),_.Vo())}),T(h,io.EventType.ERROR,A=>{p||(p=!0,ns(Xe,`RPC '${e}' stream ${s} transport errored:`,A),_.Vo(new B(E.UNAVAILABLE,"The operation could not be completed")))}),T(h,io.EventType.MESSAGE,A=>{var b;if(!p){const S=A.data[0];ve(!!S);const R=S,V=R.error||((b=R[0])===null||b===void 0?void 0:b.error);if(V){O(Xe,`RPC '${e}' stream ${s} received error:`,V);const $=V.status;let L=function(J){const de=Ce[J];if(de!==void 0)return M_(de)}($),X=V.message;L===void 0&&(L=E.INTERNAL,X="Unknown error status: "+$+" with message "+V.message),p=!0,_.Vo(new B(L,X)),h.close()}else O(Xe,`RPC '${e}' stream ${s} received:`,S),_.mo(S)}}),T(a,gP.STAT_EVENT,A=>{A.stat===lf.PROXY?O(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===lf.NOPROXY&&O(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function Nc(){return typeof document<"u"?document:null}/**
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
 */function Ya(t){return new Ib(t,!0)}/**
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
 */class G_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Q_{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new G_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(en(n.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new B(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hC extends Q_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Ab(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Xt(o.readTime):te.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Cl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Tl(c)?{documents:Pb(i,c)}:{query:bb(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=U_(i,o.resumeToken);const l=Sl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=ea(i,o.snapshotVersion.toTimestamp());const l=Sl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=kb(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Cl(this.serializer),n.removeTarget=e,this.t_(n)}}class dC extends Q_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=Sb(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.T_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Cl(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rb(this.serializer,r))};this.t_(n)}}/**
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
 */class fC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new B(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Pl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(E.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Pl(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(E.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class pC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(en(n),this.g_=!1):O("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class gC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ne(c);l.v_.add(4),await ji(l),l.x_.set("Unknown"),l.v_.delete(4),await Xa(l)}(this))})}),this.x_=new pC(r,s)}}async function Xa(t){if(Sr(t))for(const e of t.F_)await e(!0)}async function ji(t){for(const e of t.F_)await e(!1)}function J_(t,e){const n=ne(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Zu(n)?Xu(n):_s(n).Jo()&&Yu(n,e))}function Ju(t,e){const n=ne(t),r=_s(n);n.C_.delete(e),r.Jo()&&Y_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Sr(n)&&n.x_.set("Unknown"))}function Yu(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).c_(e)}function Y_(t,e){t.O_.Oe(e),_s(t).l_(e)}function Xu(t){t.O_=new _b({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.x_.p_()}function Zu(t){return Sr(t)&&!_s(t).Ho()&&t.C_.size>0}function Sr(t){return ne(t).v_.size===0}function X_(t){t.O_=void 0}async function mC(t){t.C_.forEach((e,n)=>{Yu(t,e)})}async function _C(t,e){X_(t),Zu(t)?(t.x_.S_(e),Xu(t)):t.x_.set("Unknown")}async function yC(t,e,n){if(t.x_.set("Online"),e instanceof F_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof To?t.O_.$e(e):e instanceof L_?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(te.min()))try{const r=await z_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(it.EMPTY_BYTE_STRING,u.snapshotVersion)),Y_(i,c);const h=new Nn(u.target,c,l,u.sequenceNumber);Yu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!Fi(e))throw e;t.v_.add(1),await ji(t),t.x_.set("Offline"),n||(n=()=>z_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Xa(t)})}function Z_(t,e){return e().catch(n=>ta(t,n,e))}async function Za(t){const e=ne(t),n=Wn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;vC(e);)try{const s=await rC(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,EC(e,s)}catch(s){await ta(e,s)}ey(e)&&ty(e)}function vC(t){return Sr(t)&&t.D_.length<10}function EC(t,e){t.D_.push(e);const n=Wn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function ey(t){return Sr(t)&&!Wn(t).Ho()&&t.D_.length>0}function ty(t){Wn(t).start()}async function IC(t){Wn(t).d_()}async function wC(t){const e=Wn(t);for(const n of t.D_)e.I_(n.mutations)}async function TC(t,e,n){const r=t.D_.shift(),s=Hu.from(r,e,n);await Z_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Za(t)}async function AC(t,e){e&&Wn(t).P_&&await async function(r,s){if(function(o){return pb(o)&&o!==E.ABORTED}(s.code)){const i=r.D_.shift();Wn(r).Zo(),await Z_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Za(r)}}(t,e),ey(t)&&ty(t)}async function xf(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.v_.add(3),await ji(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Xa(n)}async function RC(t,e){const n=ne(t);e?(n.v_.delete(2),await Xa(n)):e||(n.v_.add(2),await ji(n),n.x_.set("Unknown"))}function _s(t){return t.N_||(t.N_=function(n,r,s){const i=ne(n);return i.R_(),new hC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:mC.bind(null,t),To:_C.bind(null,t),u_:yC.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Zu(t)?Xu(t):t.x_.set("Unknown")):(await t.N_.stop(),X_(t))})),t.N_}function Wn(t){return t.L_||(t.L_=function(n,r,s){const i=ne(n);return i.R_(),new dC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:IC.bind(null,t),To:AC.bind(null,t),E_:wC.bind(null,t),T_:TC.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Za(t)):(await t.L_.stop(),t.D_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class eh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new eh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(t,e){if(en("AsyncQueue",`${e}: ${t}`),Fi(t))return new B(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Mf{constructor(){this.B_=new Se(K.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Y():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new as(e,n,Qr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class SC{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class PC{constructor(){this.queries=new ms(e=>T_(e),Wa),this.onlineState="Unknown",this.W_=new Set}}async function bC(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new SC,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=th(o,`Initialization of query '${Vr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&nh(n)}async function CC(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kC(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&nh(n)}function DC(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function nh(t){t.W_.forEach(e=>{e.next()})}var Dl,Lf;(Lf=Dl||(Dl={})).j_="default",Lf.Cache="cache";class OC{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Dl.Cache}}/**
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
 */class ny{constructor(e){this.key=e}}class ry{constructor(e){this.key=e}}class NC{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ie(),this.mutatedKeys=ie(),this.ha=A_(e),this.Pa=new Qr(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Mf,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=za(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;d&&p?d.data.isEqual(p.data)?_!==T&&(r.track({type:3,doc:p}),A=!0):this.da(d,p)||(r.track({type:2,doc:p}),A=!0,(c&&this.ha(p,c)>0||l&&this.ha(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),A=!0):d&&!p&&(r.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(p,_){const T=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return T(p)-T(_)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new as(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Mf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ie(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new ry(r))}),this.la.forEach(r=>{e.has(r)||n.push(new ny(r))}),n}fa(e){this.ua=e.hs,this.la=ie();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return as.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class VC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xC{constructor(e){this.key=e,this.pa=!1}}class MC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ms(a=>T_(a),Wa),this.Sa=new Map,this.ba=new Set,this.Da=new Se(K.comparator),this.Ca=new Map,this.va=new zu,this.Fa={},this.Ma=new Map,this.xa=os.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function LC(t,e,n=!0){const r=ly(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await sy(r,e,n,!0),s}async function FC(t,e){const n=ly(t);await sy(n,e,!0,!1)}async function sy(t,e,n,r){const s=await sC(t.localStore,Jt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await UC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&J_(t.remoteStore,s),a}async function UC(t,e,n,r,s){t.Na=(h,d,p)=>async function(T,A,b,S){let R=A.view.Ta(b);R.Xi&&(R=await Of(T.localStore,A.query,!1).then(({documents:X})=>A.view.Ta(X,R)));const V=S&&S.targetChanges.get(A.targetId),$=S&&S.targetMismatches.get(A.targetId)!=null,L=A.view.applyChanges(R,T.isPrimaryClient,V,$);return Uf(T,A.targetId,L.Va),L.snapshot}(t,h,d,p);const i=await Of(t.localStore,e,!0),o=new NC(e,i.hs),a=o.Ta(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Uf(t,n,l.Va);const u=new VC(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function BC(t,e,n){const r=ne(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Wa(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ju(r.remoteStore,s.targetId),Ol(r,s.targetId)}).catch(Li)):(Ol(r,s.targetId),await kl(r.localStore,s.targetId,!0))}async function $C(t,e){const n=ne(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ju(n.remoteStore,r.targetId))}async function jC(t,e,n){const r=QC(t);try{const s=await function(o,a){const c=ne(o),l=Fe.now(),u=a.reduce((p,_)=>p.add(_.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=fn(),T=ie();return c.os.getEntries(p,u).next(A=>{_=A,_.forEach((b,S)=>{S.isValidDocument()||(T=T.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(A=>{h=A;const b=[];for(const S of a){const R=lb(S,h.get(S.key).overlayedDocument);R!=null&&b.push(new Rr(S.key,R,p_(R.value.mapValue),Yt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,b,a)}).next(A=>{d=A;const b=A.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(p,A.batchId,b)})}).then(()=>({batchId:d.batchId,changes:S_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new Se(he)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await qi(r,s.changes),await Za(r.remoteStore)}catch(s){const i=th(s,"Failed to persist write");n.reject(i)}}async function iy(t,e){const n=ne(t);try{const r=await tC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?ve(o.pa):s.removedDocuments.size>0&&(ve(o.pa),o.pa=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function Ff(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ne(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(l=!0)}),l&&nh(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qC(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new Se(K.comparator);o=o.insert(i,tt.newNoDocument(i,te.min()));const a=ie().add(i),c=new Ja(te.min(),new Map,new Se(he),o,a);await iy(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),rh(r)}else await kl(r.localStore,e,!1).then(()=>Ol(r,e,n)).catch(Li)}async function HC(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await eC(n.localStore,e);ay(n,r,null),oy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function KC(t,e,n){const r=ne(t);try{const s=await function(o,a){const c=ne(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ve(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);ay(r,e,n),oy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function oy(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function ay(t,e,n){const r=ne(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function Ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||cy(t,r)})}function cy(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Ju(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),rh(t))}function Uf(t,e,n){for(const r of n)r instanceof ny?(t.va.addReference(r.key,e),WC(t,r)):r instanceof ry?(O("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||cy(t,r.key)):Y()}function WC(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(O("SyncEngine","New document in limbo: "+n),t.ba.add(r),rh(t))}function rh(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new K(Te.fromString(e)),r=t.xa.next();t.Ca.set(r,new xC(n)),t.Da=t.Da.insert(n,r),J_(t.remoteStore,new Nn(Jt(I_(n.path)),r,"TargetPurposeLimboResolution",Lu._e))}}async function qi(t,e,n){const r=ne(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Qu.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=ne(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(l,d=>w.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>w.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Fi(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),_=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(_);u.ns=u.ns.insert(d,T)}}}(r.localStore,i))}async function zC(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await W_(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new B(E.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.us)}}function GC(t,e){const n=ne(t),r=n.Ca.get(e);if(r&&r.pa)return ie().add(r.key);{let s=ie();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function ly(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qC.bind(null,e),e.ya.u_=kC.bind(null,e.eventManager),e.ya.La=DC.bind(null,e.eventManager),e}function QC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KC.bind(null,e),e}class Bf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Zb(this.persistence,new Yb,e.initialUser,this.serializer)}createPersistence(e){return new Gb(Gu.Hr,this.serializer)}createSharedClientState(e){return new oC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zC.bind(null,this.syncEngine),await RC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PC}()}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=function(i){return new uC(i)}(e.databaseInfo);return function(i,o,a,c){return new fC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new gC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ff(this.syncEngine,n,0),function(){return Vf.D()?new Vf:new aC}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new MC(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ne(r);O("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ji(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class YC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=h_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=th(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await W_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await e1(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xf(e.remoteStore,s)),t._onlineComponents=e}function ZC(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function e1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZC(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new Bf)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new Bf);return t._offlineComponents}async function uy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await $f(t,new JC))),t._onlineComponents}function t1(t){return uy(t).then(e=>e.syncEngine)}async function n1(t){const e=await uy(t),n=e.eventManager;return n.onListen=LC.bind(null,e.syncEngine),n.onUnlisten=BC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$C.bind(null,e.syncEngine),n}function r1(t,e,n={}){const r=new un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new YC({next:d=>{o.enqueueAndForget(()=>CC(i,h)),d.fromCache&&c.source==="server"?l.reject(new B(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new OC(a,u,{includeMetadataChanges:!0,ta:!0});return bC(i,h)}(await n1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function hy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jf=new Map;/**
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
 */function dy(t,e,n){if(!n)throw new B(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function s1(t,e,n,r){if(e===!0&&r===!0)throw new B(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qf(t){if(!K.isDocumentKey(t))throw new B(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hf(t){if(K.isDocumentKey(t))throw new B(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new B(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Kf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}s1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yP;switch(r.type){case"firstParty":return new wP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jf.get(n);r&&(O("ComponentProvider","Removing Datastore"),jf.delete(n),r.terminate())}(this),Promise.resolve()}}function i1(t,e,n,r={}){var s;const i=(t=vi(t,tc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=ET(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new vP(new u_(a,c))}}/**
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
 */class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Bn extends ys{constructor(e,n,r){super(e,n,I_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new K(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function Wf(t,e,...n){if(t=Me(t),dy("collection","path",e),t instanceof tc){const r=Te.fromString(e,...n);return Hf(r),new Bn(t,null,r)}{if(!(t instanceof At||t instanceof Bn))throw new B(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Hf(r),new Bn(t.firestore,null,r)}}function fy(t,e,...n){if(t=Me(t),arguments.length===1&&(e=h_.newId()),dy("doc","path",e),t instanceof tc){const r=Te.fromString(e,...n);return qf(r),new At(t,null,new K(r))}{if(!(t instanceof At||t instanceof Bn))throw new B(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return qf(r),new At(t.firestore,t instanceof Bn?t.converter:null,new K(r))}}/**
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
 */class o1{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new G_(this,"async_queue_retry"),this.cu=()=>{const n=Nc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new un;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Fi(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw en("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=eh.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&Y()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class nc extends tc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new o1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gy(this),this._firestoreClient.terminate()}}function a1(t,e){const n=typeof t=="object"?t:Tg(),r=typeof t=="string"?t:e||"(default)",s=nu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yT("firestore");i&&i1(s,...i)}return s}function py(t){return t._firestoreClient||gy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new MP(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,hy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new XC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(it.fromBase64String(e))}catch(n){throw new B(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class my{constructor(e){this._methodName=e}}/**
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
 */class ih{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const c1=/^__.*__$/;class l1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}function _y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class oh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return na(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(_y(this.Vu)&&c1.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class u1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ya(e)}Cu(e,n,r,s=!1){return new oh({Vu:e,methodName:n,Du:r,path:ze.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yy(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new u1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function h1(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);Iy("Data must be an object, but it was:",o,r);const a=vy(r,o);let c,l;if(i.merge)c=new Ct(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=f1(e,h,n);if(!o.contains(d))throw new B(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);g1(u,d)||u.push(d)}c=new Ct(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new l1(new wt(a),c,l)}function d1(t,e,n,r=!1){return ah(n,t.Cu(r?4:3,e))}function ah(t,e){if(Ey(t=Me(t)))return Iy("Unsupported field value:",e,t),vy(t,e);if(t instanceof my)return function(r,s){if(!_y(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ah(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:ea(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(s.serializer,i)}}if(r instanceof ih)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:U_(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${ec(r)}`)}(t,e)}function vy(t,e){const n={};return d_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,(r,s)=>{const i=ah(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ey(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof ih||t instanceof cs||t instanceof At||t instanceof my)}function Iy(t,e,n){if(!Ey(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ec(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function f1(t,e,n){if((e=Me(e))instanceof sh)return e._internalPath;if(typeof e=="string")return wy(t,e);throw na("Field path arguments must be of type string or ",t,!1,void 0,n)}const p1=new RegExp("[~\\*/\\[\\]]");function wy(t,e,n){if(e.search(p1)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sh(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function na(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new B(E.INVALID_ARGUMENT,a+t+c)}function g1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ty{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new m1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ch("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class m1 extends Ty{data(){return super.data()}}function ch(t,e){return typeof e=="string"?wy(t,e):e instanceof sh?e._internalPath:e._delegate._internalPath}/**
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
 */function _1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}class y1 extends lh{}function v1(t,e,...n){let r=[];e instanceof lh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof uh).length,a=i.filter(c=>c instanceof rc).length;if(o>1||o>0&&a>0)throw new B(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class rc extends y1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rc(e,n,r)}_apply(e){const n=this._parse(e);return Ay(e._query,n),new ys(e.firestore,e.converter,Al(e._query,n))}_parse(e){const n=yy(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Gf(h,u);const p=[];for(const _ of h)p.push(zf(c,i,_));d={arrayValue:{values:p}}}else d=zf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Gf(h,u),d=d1(a,o,h,u==="in"||u==="not-in");return Oe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function E1(t,e,n){const r=e,s=ch("where",t);return rc._create(s,r,n)}class uh extends lh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Ay(o,c),o=Al(o,c)}(e._query,n),new ys(e.firestore,e.converter,Al(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zf(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new B(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!w_(e)&&n.indexOf("/")!==-1)throw new B(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!K.isDocumentKey(r))throw new B(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gf(t,new K(r))}if(n instanceof At)return gf(t,n._key);throw new B(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function Gf(t,e){if(!Array.isArray(t)||t.length===0)throw new B(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ay(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class I1{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ih(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ve(K_(r));const s=new gi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||en(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function w1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class T1 extends Ty{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ao extends T1{data(e={}){return super.data(e)}}class A1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ao(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new lo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ao(s._firestore,s._userDataWriter,a.doc.key,a.doc,new lo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:R1(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function R1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class S1 extends I1{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function P1(t){t=vi(t,ys);const e=vi(t.firestore,nc),n=py(e),r=new S1(e);return _1(t._query),r1(n,t._query).then(s=>new A1(e,r,t,s))}function b1(t){return Ry(vi(t.firestore,nc),[new qu(t._key,Yt.none())])}function C1(t,e){const n=vi(t.firestore,nc),r=fy(t),s=w1(t.converter,e);return Ry(n,[h1(yy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function Ry(t,e){return function(r,s){const i=new un;return r.asyncQueue.enqueueAndForget(async()=>jC(await t1(r),s,i)),i.promise}(py(t),e)}(function(e,n=!0){(function(s){ps=s})(hs),es(new fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new nc(new EP(r.getProvider("auth-internal")),new AP(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new B(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Un(uf,"4.5.1",e),Un(uf,"4.5.1","esm2017")})();const k1={apiKey:"AIzaSyBjh24VyZVkdLFiKer1RbGju9UlNa903Ks",authDomain:"disc-golf-scorecard-c0347.firebaseapp.com",projectId:"disc-golf-scorecard-c0347",storageBucket:"disc-golf-scorecard-c0347.appspot.com",messagingSenderId:"55303345378",appId:"1:55303345378:web:a7808911be87b35f8efabb"},Ss=lt(null),Or=lt(null),Zn=lt(null),Ps=lt(null),xc=lt([]),uo=lt("loading"),Bt=lt(null),hh=()=>{const t=wa(),e=()=>{Ss.value=wg(k1),Or.value=uS(Ss.value),Ps.value=a1(Ss.value),J0(Or.value,async l=>{l?(console.log("Auth state changed:"),Zn.value=l,c().then(()=>{uo.value="loaded",Bt.value=null})):(console.log("Auth state changed: user signed out"),Zn.value=!1,xc.value=[],uo.value="loaded",Bt.value=null,t.removeLocalStorage())})};Ss.value||e();const n=(l,u,h)=>{Bt.value=null,q0(Or.value,l,u).then(d=>{const p=d.user;console.log("Account created:"),Ud(p,{displayName:h}).catch(function(_){console.error(_)}).then(()=>{r(l,u)})}).catch(d=>{console.warn("Account creation failed:",d.message,d.code),Bt.value=d.code})},r=(l,u)=>{Bt.value=null,H0(Or.value,l,u).then(h=>{h.user,ni.push("/")}).catch(h=>{console.warn("Login failed:",h.message,h.code),Bt.value=h.code})},s=()=>{Bt.value=null,Y0(Or.value).then(()=>{Zn.value=!1,uo.value="loaded",ni.push("/"),Bt.value=null}).catch(l=>{console.warn("Logout failed:",l)})},i=l=>{Bt.value=null;const u=Tr.credential(Zn.value.email,l);return B0(Zn.value,u)},o=async(l,u)=>{try{const h=await C1(Wf(Ps.value,l),u);return c(),h.id}catch(h){console.error("Error adding document: ",h)}},a=async(l,u)=>{try{await b1(fy(Ps.value,l,u))}catch(h){console.error("Error deleting document: ",h)}},c=async()=>{const l=v1(Wf(Ps.value,"games"),E1("owner","==",Zn.value.uid)),u=await P1(l),h=[];u.forEach(d=>{h.push(d.data()),h[h.length-1].id=d.id}),xc.value=h};return{app:Ss,auth:Or,user:Zn,db:Ps,status:uo,error:Bt,updateProfile:Ud,updateEmail:W0,updatePassword:z0,deleteUser:X0,createAccount:n,login:r,logout:s,reauthenticate:i,sendPasswordResetEmail:j0,addDocument:o,deleteDocument:a,userGames:xc,getGames:c}},D1={},Sy=t=>(da("data-v-88d47d84"),t=t(),fa(),t),O1={class:"loader"},N1=Sy(()=>q("div",{class:"lds-circle"},[q("div")],-1)),V1=Sy(()=>q("p",null,"Loading...",-1)),x1=[N1,V1];function M1(t,e){return De(),Et("div",O1,x1)}const L1=us(D1,[["render",M1],["__scopeId","data-v-88d47d84"]]),Hi=t=>(da("data-v-c750e919"),t=t(),fa(),t),F1={class:"wrapper"},U1={class:"logo"},B1=Hi(()=>q("img",{src:uI},null,-1)),$1=Hi(()=>q("i",null,"Disc Golf Scorecard",-1)),j1=Hi(()=>q("span",{class:"material-symbols-outlined"},"visibility",-1)),q1=Hi(()=>q("span",{class:"material-symbols-outlined"},"account_circle",-1)),H1=Hi(()=>q("footer",null,[q("a",{href:"https://github.com/aviolin/disc-golf-scorecard/"},"View the source on GitHub."),q("small",null,"© Copyright 2024, Arlo Adams.")],-1)),K1={__name:"App",setup(t){const{status:e,user:n}=hh(),r=wa();return(s,i)=>{const o=$c("RouterLink"),a=$c("RouterView");return et(e)!=="loading"?(De(),Et(at,{key:0},[q("header",null,[q("div",F1,[q("div",U1,[Ne(o,{to:"/",class:"logo"},{default:Dn(()=>[B1,$1]),_:1})]),q("nav",null,[et(r).players.length!=0&&et(r).holes.length!=0?(De(),On(o,{key:0,to:"/play",class:"btn btn-primary btn-small"},{default:Dn(()=>[j1,St(" Card ")]),_:1})):Yl("",!0),et(n)?(De(),On(o,{key:1,to:"/account",class:"btn btn-icon"},{default:Dn(()=>[q1]),_:1})):(De(),On(o,{key:2,to:"/log-in",class:"btn btn-secondary btn-small"},{default:Dn(()=>[St("Login")]),_:1}))])])]),Ne(a),H1],64)):(De(),On(L1,{key:1}))}}},W1=us(K1,[["__scopeId","data-v-c750e919"]]),dh=ZE(W1);dh.use(rI());dh.use(ni);dh.mount("#app");export{at as F,Ew as M,Kw as N,us as _,q as a,lt as b,Et as c,mt as d,On as e,Dn as f,Ne as g,Yl as h,fa as i,Xi as j,St as k,Wl as l,hh as m,oa as n,De as o,da as p,$c as q,Mp as r,et as s,yh as t,wa as u,zE as v,Ht as w,Vv as x,ni as y};
