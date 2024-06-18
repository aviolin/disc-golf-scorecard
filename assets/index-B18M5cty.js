function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PlayView-P0XZJBuc.js","assets/PlayView-C6jZYOMf.css","assets/AccountView-CIVxGRif.js","assets/AccountView-B__RbsvB.css","assets/LoginView-CpcReG_n.js","assets/AuthError-tkkYdhQT.js","assets/AuthError-BTPtN2Sr.css","assets/LoginView-DK7q6Ciq.css","assets/SignupView-BZkc8S4w.js","assets/SignupView-C2mhoiQi.css","assets/ResetPasswordView-gj0lGPjm.js","assets/ResetPasswordView-CuObXS2b.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nl(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ie={},Br=[],Tt=()=>{},by=()=>!1,na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),Je=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cy=Object.prototype.hasOwnProperty,ce=(t,e)=>Cy.call(t,e),G=Array.isArray,$r=t=>Ei(t)==="[object Map]",Gf=t=>Ei(t)==="[object Set]",gh=t=>Ei(t)==="[object Date]",ne=t=>typeof t=="function",Ne=t=>typeof t=="string",Bn=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Qf=t=>(Ee(t)||ne(t))&&ne(t.then)&&ne(t.catch),Jf=Object.prototype.toString,Ei=t=>Jf.call(t),ky=t=>Ei(t).slice(8,-1),Yf=t=>Ei(t)==="[object Object]",Ml=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Dy=/-(\w)/g,Xt=ra(t=>t.replace(Dy,(e,n)=>n?n.toUpperCase():"")),Oy=/\B([A-Z])/g,us=ra(t=>t.replace(Oy,"-$1").toLowerCase()),sa=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),rc=ra(t=>t?`on${sa(t)}`:""),$n=(t,e)=>!Object.is(t,e),uo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Mc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mh;const Xf=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ll(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?My(r):Ll(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(t)||Ee(t))return t}const Ny=/;(?![^(]*\))/g,Vy=/:([^]+)/,xy=/\/\*[^]*?\*\//g;function My(t){const e={};return t.replace(xy,"").split(Ny).forEach(n=>{if(n){const r=n.split(Vy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ia(t){let e="";if(Ne(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=ia(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fy=Nl(Ly);function Zf(t){return!!t||t===""}function Uy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ro(t[r],e[r]);return n}function Ro(t,e){if(t===e)return!0;let n=gh(t),r=gh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Bn(t),r=Bn(e),n||r)return t===e;if(n=G(t),r=G(e),n||r)return n&&r?Uy(t,e):!1;if(n=Ee(t),r=Ee(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ro(t[o],e[o]))return!1}}return String(t)===String(e)}const _h=t=>Ne(t)?t:t==null?"":G(t)||Ee(t)&&(t.toString===Jf||!ne(t.toString))?JSON.stringify(t,ep,2):String(t),ep=(t,e)=>e&&e.__v_isRef?ep(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[sc(r,i)+" =>"]=s,n),{})}:Gf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sc(n))}:Bn(e)?sc(e):Ee(e)&&!G(e)&&!Yf(e)?String(e):e,sc=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function np(t){return new tp(t)}function By(t,e=gt){e&&e.active&&e.effects.push(t)}function rp(){return gt}function $y(t){gt&&gt.cleanups.push(t)}let cr;class Fl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,By(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ir();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(jy(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),wr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Nn,n=cr;try{return Nn=!0,cr=this,this._runnings++,yh(this),this.fn()}finally{vh(this),this._runnings--,cr=n,Nn=e}}stop(){var e;this.active&&(yh(this),vh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function jy(t){return t.value}function yh(t){t._trackId++,t._depsLength=0}function vh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)sp(t.deps[e],t);t.deps.length=t._depsLength}}function sp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Nn=!0,Lc=0;const ip=[];function Ir(){ip.push(Nn),Nn=!1}function wr(){const t=ip.pop();Nn=t===void 0?!0:t}function Ul(){Lc++}function Bl(){for(Lc--;!Lc&&Fc.length;)Fc.shift()()}function op(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&sp(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Fc=[];function ap(t,e,n){Ul();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Fc.push(r.scheduler)))}Bl()}const cp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},So=new WeakMap,lr=Symbol(""),Uc=Symbol("");function dt(t,e,n){if(Nn&&cr){let r=So.get(t);r||So.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=cp(()=>r.delete(n))),op(cr,s)}}function cn(t,e,n,r,s,i){const o=So.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Bn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Ml(n)&&a.push(o.get("length")):(a.push(o.get(lr)),$r(t)&&a.push(o.get(Uc)));break;case"delete":G(t)||(a.push(o.get(lr)),$r(t)&&a.push(o.get(Uc)));break;case"set":$r(t)&&a.push(o.get(lr));break}Ul();for(const c of a)c&&ap(c,4);Bl()}function qy(t,e){var n;return(n=So.get(t))==null?void 0:n.get(e)}const Hy=Nl("__proto__,__v_isRef,__isVue"),lp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn)),Eh=Ky();function Ky(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ir(),Ul();const r=le(this)[e].apply(this,n);return Bl(),wr(),r}}),t}function Wy(t){const e=le(this);return dt(e,"has",t),e.hasOwnProperty(t)}class up{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?iv:pp:i?fp:dp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!s){if(o&&ce(Eh,n))return Reflect.get(Eh,n,r);if(n==="hasOwnProperty")return Wy}const a=Reflect.get(e,n,r);return(Bn(n)?lp.has(n):Hy(n))||(s||dt(e,"get",n),i)?a:Ue(a)?o&&Ml(n)?a:a.value:Ee(a)?s?mp(a):Ii(a):a}}class hp extends up{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Yr(i);if(!Po(r)&&!Yr(r)&&(i=le(i),r=le(r)),!G(e)&&Ue(i)&&!Ue(r))return c?!1:(i.value=r,!0)}const o=G(e)&&Ml(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?$n(r,i)&&cn(e,"set",n,r):cn(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Bn(n)||!lp.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",G(e)?"length":lr),Reflect.ownKeys(e)}}class zy extends up{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Gy=new hp,Qy=new zy,Jy=new hp(!0),$l=t=>t,oa=t=>Reflect.getPrototypeOf(t);function Ki(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||($n(e,i)&&dt(s,"get",e),dt(s,"get",i));const{has:o}=oa(s),a=r?$l:n?Hl:Js;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||($n(t,s)&&dt(r,"has",t),dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function zi(t,e=!1){return t=t.__v_raw,!e&&dt(le(t),"iterate",lr),Reflect.get(t,"size",t)}function Ih(t){t=le(t);const e=le(this);return oa(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function wh(t,e){e=le(e);const n=le(this),{has:r,get:s}=oa(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?$n(e,o)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function Th(t){const e=le(this),{has:n,get:r}=oa(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&cn(e,"delete",t,void 0),i}function Ah(){const t=le(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Gi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?$l:t?Hl:Js;return!t&&dt(a,"iterate",lr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Qi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=$r(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?$l:e?Hl:Js;return!e&&dt(i,"iterate",c?Uc:lr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yy(){const t={get(i){return Ki(this,i)},get size(){return zi(this)},has:Wi,add:Ih,set:wh,delete:Th,clear:Ah,forEach:Gi(!1,!1)},e={get(i){return Ki(this,i,!1,!0)},get size(){return zi(this)},has:Wi,add:Ih,set:wh,delete:Th,clear:Ah,forEach:Gi(!1,!0)},n={get(i){return Ki(this,i,!0)},get size(){return zi(this,!0)},has(i){return Wi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Gi(!0,!1)},r={get(i){return Ki(this,i,!0,!0)},get size(){return zi(this,!0)},has(i){return Wi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:Gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qi(i,!1,!1),n[i]=Qi(i,!0,!1),e[i]=Qi(i,!1,!0),r[i]=Qi(i,!0,!0)}),[t,n,e,r]}const[Xy,Zy,ev,tv]=Yy();function jl(t,e){const n=e?t?tv:ev:t?Zy:Xy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const nv={get:jl(!1,!1)},rv={get:jl(!1,!0)},sv={get:jl(!0,!1)},dp=new WeakMap,fp=new WeakMap,pp=new WeakMap,iv=new WeakMap;function ov(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function av(t){return t.__v_skip||!Object.isExtensible(t)?0:ov(ky(t))}function Ii(t){return Yr(t)?t:ql(t,!1,Gy,nv,dp)}function gp(t){return ql(t,!1,Jy,rv,fp)}function mp(t){return ql(t,!0,Qy,sv,pp)}function ql(t,e,n,r,s){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=av(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vn(t){return Yr(t)?Vn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Po(t){return!!(t&&t.__v_isShallow)}function _p(t){return Vn(t)||Yr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function aa(t){return Object.isExtensible(t)&&Ao(t,"__v_skip",!0),t}const Js=t=>Ee(t)?Ii(t):t,Hl=t=>Ee(t)?mp(t):t;class yp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fl(()=>e(this._value),()=>ho(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return(!e._cacheable||e.effect.dirty)&&$n(e._value,e._value=e.effect.run())&&ho(e,4),vp(e),e.effect._dirtyLevel>=2&&ho(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function cv(t,e,n=!1){let r,s;const i=ne(t);return i?(r=t,s=Tt):(r=t.get,s=t.set),new yp(r,s,i||!s,n)}function vp(t){var e;Nn&&cr&&(t=le(t),op(cr,(e=t.dep)!=null?e:t.dep=cp(()=>t.dep=void 0,t instanceof yp?t:void 0)))}function ho(t,e=4,n){t=le(t);const r=t.dep;r&&ap(r,e)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function ct(t){return Ep(t,!1)}function lv(t){return Ep(t,!0)}function Ep(t,e){return Ue(t)?t:new uv(t,e)}class uv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Js(e)}get value(){return vp(this),this._value}set value(e){const n=this.__v_isShallow||Po(e)||Yr(e);e=n?e:le(e),$n(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Js(e),ho(this,4))}}function ht(t){return Ue(t)?t.value:t}const hv={get:(t,e,n)=>ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ip(t){return Vn(t)?t:new Proxy(t,hv)}function dv(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=pv(t,n);return e}class fv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qy(le(this._object),this._key)}}function pv(t,e,n){const r=t[e];return Ue(r)?r:new fv(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xn(t,e,n,r){try{return r?t(...r):t()}catch(s){ca(s,e,n)}}function kt(t,e,n,r){if(ne(t)){const i=xn(t,e,n,r);return i&&Qf(i)&&i.catch(o=>{ca(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(kt(t[i],e,n,r));return s}function ca(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}gv(t,n,s,r)}function gv(t,e,n,r=!0){console.error(t)}let Ys=!1,Bc=!1;const tt=[];let jt=0;const jr=[];let wn=null,er=0;const wp=Promise.resolve();let Kl=null;function Wl(t){const e=Kl||wp;return t?e.then(this?t.bind(this):t):e}function mv(t){let e=jt+1,n=tt.length;for(;e<n;){const r=e+n>>>1,s=tt[r],i=Xs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function zl(t){(!tt.length||!tt.includes(t,Ys&&t.allowRecurse?jt+1:jt))&&(t.id==null?tt.push(t):tt.splice(mv(t.id),0,t),Tp())}function Tp(){!Ys&&!Bc&&(Bc=!0,Kl=wp.then(Rp))}function _v(t){const e=tt.indexOf(t);e>jt&&tt.splice(e,1)}function yv(t){G(t)?jr.push(...t):(!wn||!wn.includes(t,t.allowRecurse?er+1:er))&&jr.push(t),Tp()}function Rh(t,e,n=Ys?jt+1:0){for(;n<tt.length;n++){const r=tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;tt.splice(n,1),n--,r()}}}function Ap(t){if(jr.length){const e=[...new Set(jr)].sort((n,r)=>Xs(n)-Xs(r));if(jr.length=0,wn){wn.push(...e);return}for(wn=e,er=0;er<wn.length;er++)wn[er]();wn=null,er=0}}const Xs=t=>t.id==null?1/0:t.id,vv=(t,e)=>{const n=Xs(t)-Xs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rp(t){Bc=!1,Ys=!0,tt.sort(vv);try{for(jt=0;jt<tt.length;jt++){const e=tt[jt];e&&e.active!==!1&&xn(e,null,14)}}finally{jt=0,tt.length=0,Ap(),Ys=!1,Kl=null,(tt.length||jr.length)&&Rp()}}function Ev(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ie;d&&(s=n.map(p=>Ne(p)?p.trim():p)),h&&(s=n.map(Mc))}let a,c=r[a=rc(e)]||r[a=rc(Xt(e))];!c&&i&&(c=r[a=rc(us(e))]),c&&kt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,s)}}function Sp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Sp(l,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Je(o,i),Ee(t)&&r.set(t,o),o)}function la(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,us(e))||ce(t,e))}let Le=null,ua=null;function bo(t){const e=Le;return Le=t,ua=t&&t.type.__scopeId||null,e}function ha(t){ua=t}function da(){ua=null}function kn(t,e=Le,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fh(-1);const i=bo(e);let o;try{o=t(...s)}finally{bo(i),r._d&&Fh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ic(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:_,inheritAttrs:R}=t;let S,E;const A=bo(t);try{if(n.shapeFlag&4){const B=s||r,W=B;S=$t(u.call(W,B,h,i,p,d,_)),E=c}else{const B=e;S=$t(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),E=e.props?c:Iv(c)}}catch(B){Us.length=0,ca(B,t,1),S=Ce(jn)}let b=S;if(E&&R!==!1){const B=Object.keys(E),{shapeFlag:W}=b;B.length&&W&7&&(o&&B.some(Vl)&&(E=wv(E,o)),b=Xr(b,E))}return n.dirs&&(b=Xr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),S=b,bo(A),S}const Iv=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},wv=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Tv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Sh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!la(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Sh(r,o,l):!0:!!o;return!1}function Sh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!la(n,i))return!0}return!1}function Av({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Pp="components";function $c(t,e){return Sv(Pp,t,!0,e)||t}const Rv=Symbol.for("v-ndc");function Sv(t,e,n=!0,r=!1){const s=Le||We;if(s){const i=s.type;if(t===Pp){const a=TE(i,!1);if(a&&(a===e||a===Xt(e)||a===sa(Xt(e))))return i}const o=Ph(s[t]||i[t],e)||Ph(s.appContext[t],e);return!o&&r?i:o}}function Ph(t,e){return t&&(t[e]||t[Xt(e)]||t[sa(Xt(e))])}const Pv=t=>t.__isSuspense;function bv(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):yv(t)}const Cv=Symbol.for("v-scx"),kv=()=>Dt(Cv),Ji={};function ur(t,e,n){return bp(t,e,n)}function bp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ie){if(e&&i){const M=e;e=(...re)=>{M(...re),W()}}const c=We,l=M=>r===!0?M:rr(M,r===!1?1:void 0);let u,h=!1,d=!1;if(Ue(t)?(u=()=>t.value,h=Po(t)):Vn(t)?(u=()=>l(t),h=!0):G(t)?(d=!0,h=t.some(M=>Vn(M)||Po(M)),u=()=>t.map(M=>{if(Ue(M))return M.value;if(Vn(M))return l(M);if(ne(M))return xn(M,c,2)})):ne(t)?e?u=()=>xn(t,c,2):u=()=>(p&&p(),kt(t,c,3,[_])):u=Tt,e&&r){const M=u;u=()=>rr(M())}let p,_=M=>{p=b.onStop=()=>{xn(M,c,4),p=b.onStop=void 0}},R;if(ma)if(_=Tt,e?n&&kt(e,c,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const M=kv();R=M.__watcherHandles||(M.__watcherHandles=[])}else return Tt;let S=d?new Array(t.length).fill(Ji):Ji;const E=()=>{if(!(!b.active||!b.dirty))if(e){const M=b.run();(r||h||(d?M.some((re,Q)=>$n(re,S[Q])):$n(M,S)))&&(p&&p(),kt(e,c,3,[M,S===Ji?void 0:d&&S[0]===Ji?[]:S,_]),S=M)}else b.run()};E.allowRecurse=!!e;let A;s==="sync"?A=E:s==="post"?A=()=>ut(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),A=()=>zl(E));const b=new Fl(u,Tt,A),B=rp(),W=()=>{b.stop(),B&&xl(B.effects,b)};return e?n?E():S=b.run():s==="post"?ut(b.run.bind(b),c&&c.suspense):b.run(),R&&R.push(W),W}function Dv(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?Cp(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=wi(this),a=bp(s,i.bind(r),n);return o(),a}function Cp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function rr(t,e,n=0,r){if(!Ee(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ue(t))rr(t.value,e,n,r);else if(G(t))for(let s=0;s<t.length;s++)rr(t[s],e,n,r);else if(Gf(t)||$r(t))t.forEach(s=>{rr(s,e,n,r)});else if(Yf(t))for(const s in t)rr(t[s],e,n,r);return t}function Yi(t,e){if(Le===null)return t;const n=_a(Le)||Le.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Ie]=e[s];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&rr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Jn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ir(),kt(c,n,8,[t.el,a,t,e]),wr())}}/*! #__NO_SIDE_EFFECTS__ */function kp(t,e){return ne(t)?Je({name:t.name},e,{setup:t}):t}const Ms=t=>!!t.type.__asyncLoader,Dp=t=>t.type.__isKeepAlive;function Ov(t,e){Op(t,"a",e)}function Nv(t,e){Op(t,"da",e)}function Op(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dp(s.parent.vnode)&&Vv(r,e,n,s),s=s.parent}}function Vv(t,e,n,r){const s=fa(e,t,r,!0);Vp(()=>{xl(r[e],s)},n)}function fa(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ir();const a=wi(n),c=kt(e,n,t,o);return a(),wr(),c});return r?s.unshift(i):s.push(i),i}}const fn=t=>(e,n=We)=>(!ma||t==="sp")&&fa(t,(...r)=>e(...r),n),xv=fn("bm"),Np=fn("m"),Mv=fn("bu"),Lv=fn("u"),Fv=fn("bum"),Vp=fn("um"),Uv=fn("sp"),Bv=fn("rtg"),$v=fn("rtc");function jv(t,e=We){fa("ec",t,e)}function xp(t,e,n,r){let s;const i=n&&n[r];if(G(t)||Ne(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function qv(t,e,n={},r,s){if(Le.isCE||Le.parent&&Ms(Le.parent)&&Le.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Me();const o=i&&Mp(i(n)),a=hr(ot,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Mp(t){return t.some(e=>ko(e)?!(e.type===jn||e.type===ot&&!Mp(e.children)):!0)?t:null}const jc=t=>t?Qp(t)?_a(t)||t.proxy:jc(t.parent):null,Ls=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jc(t.parent),$root:t=>jc(t.root),$emit:t=>t.emit,$options:t=>Gl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,zl(t.update)}),$nextTick:t=>t.n||(t.n=Wl.bind(t.proxy)),$watch:t=>Dv.bind(t)}),oc=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ce(t,e),Hv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(oc(r,e))return o[e]=1,r[e];if(s!==Ie&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==Ie&&ce(n,e))return o[e]=4,n[e];qc&&(o[e]=0)}}const u=Ls[e];let h,d;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return oc(s,e)?(s[e]=n,!0):r!==Ie&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ce(t,o)||oc(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Ls,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bh(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qc=!0;function Kv(t){const e=Gl(t),n=t.proxy,r=t.ctx;qc=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:R,deactivated:S,beforeDestroy:E,beforeUnmount:A,destroyed:b,unmounted:B,render:W,renderTracked:M,renderTriggered:re,errorCaptured:Q,serverPrefetch:J,expose:de,inheritAttrs:be,components:ft,directives:yt,filters:Qn}=e;if(l&&Wv(l,r,null),o)for(const _e in o){const fe=o[_e];ne(fe)&&(r[_e]=fe.bind(n))}if(s){const _e=s.call(n,n);Ee(_e)&&(t.data=Ii(_e))}if(qc=!0,i)for(const _e in i){const fe=i[_e],tn=ne(fe)?fe.bind(n,n):ne(fe.get)?fe.get.bind(n,n):Tt,_n=!ne(fe)&&ne(fe.set)?fe.set.bind(n):Tt,Lt=mt({get:tn,set:_n});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:lt=>Lt.value=lt})}if(a)for(const _e in a)Lp(a[_e],r,n,_e);if(c){const _e=ne(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(fe=>{fo(fe,_e[fe])})}u&&Ch(u,t,"c");function ue(_e,fe){G(fe)?fe.forEach(tn=>_e(tn.bind(n))):fe&&_e(fe.bind(n))}if(ue(xv,h),ue(Np,d),ue(Mv,p),ue(Lv,_),ue(Ov,R),ue(Nv,S),ue(jv,Q),ue($v,M),ue(Bv,re),ue(Fv,A),ue(Vp,B),ue(Uv,J),G(de))if(de.length){const _e=t.exposed||(t.exposed={});de.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:tn=>n[fe]=tn})})}else t.exposed||(t.exposed={});W&&t.render===Tt&&(t.render=W),be!=null&&(t.inheritAttrs=be),ft&&(t.components=ft),yt&&(t.directives=yt)}function Wv(t,e,n=Tt){G(t)&&(t=Hc(t));for(const r in t){const s=t[r];let i;Ee(s)?"default"in s?i=Dt(s.from||r,s.default,!0):i=Dt(s.from||r):i=Dt(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ch(t,e,n){kt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lp(t,e,n,r){const s=r.includes(".")?Cp(n,r):()=>n[r];if(Ne(t)){const i=e[t];ne(i)&&ur(s,i)}else if(ne(t))ur(s,t.bind(n));else if(Ee(t))if(G(t))t.forEach(i=>Lp(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&ur(s,i,t)}}function Gl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Co(c,l,o,!0)),Co(c,e,o)),Ee(e)&&i.set(e,c),c}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(o=>Co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zv={data:kh,props:Dh,emits:Dh,methods:bs,computed:bs,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:bs,directives:bs,watch:Qv,provide:kh,inject:Gv};function kh(t,e){return e?t?function(){return Je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Gv(t,e){return bs(Hc(t),Hc(e))}function Hc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function bs(t,e){return t?Je(Object.create(null),t,e):e}function Dh(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Je(Object.create(null),bh(t),bh(e??{})):e}function Qv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function Fp(){return{app:null,config:{isNativeTag:by,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jv=0;function Yv(t,e){return function(r,s=null){ne(r)||(r=Je({},r)),s!=null&&!Ee(s)&&(s=null);const i=Fp(),o=new WeakSet;let a=!1;const c=i.app={_uid:Jv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:RE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ce(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,_a(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=qr;qr=c;try{return l()}finally{qr=u}}};return c}}let qr=null;function fo(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=We||Le;if(r||qr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:qr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}function Xv(){return!!(We||Le||qr)}function Zv(t,e,n,r=!1){const s={},i={};Ao(i,ga,1),t.propsDefaults=Object.create(null),Up(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function eE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(la(t.emitsOptions,d))continue;const p=e[d];if(c)if(ce(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const _=Xt(d);s[_]=Kc(c,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Up(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=us(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Kc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&cn(t,"set","$attrs")}function Up(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xs(c))continue;const l=e[c];let u;s&&ce(s,u=Xt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:la(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Kc(s,c,h,l[h],t,!ce(l,h))}}return o}function Kc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ne(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=wi(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===us(n))&&(r=!0))}return r}function Bp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[d,p]=Bp(h,e,!0);Je(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ee(t)&&r.set(t,Br),Br;if(G(i))for(let u=0;u<i.length;u++){const h=Xt(i[u]);Oh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Xt(u);if(Oh(h)){const d=i[u],p=o[h]=G(d)||ne(d)?{type:d}:Je({},d);if(p){const _=xh(Boolean,p.type),R=xh(String,p.type);p[0]=_>-1,p[1]=R<0||_<R,(_>-1||ce(p,"default"))&&a.push(h)}}}const l=[o,a];return Ee(t)&&r.set(t,l),l}function Oh(t){return t[0]!=="$"&&!xs(t)}function Nh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Vh(t,e){return Nh(t)===Nh(e)}function xh(t,e){return G(e)?e.findIndex(n=>Vh(n,t)):ne(e)&&Vh(e,t)?0:-1}const $p=t=>t[0]==="_"||t==="$stable",Ql=t=>G(t)?t.map($t):[$t(t)],tE=(t,e,n)=>{if(e._n)return e;const r=kn((...s)=>Ql(e(...s)),n);return r._c=!1,r},jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if($p(s))continue;const i=t[s];if(ne(i))e[s]=tE(s,i,r);else if(i!=null){const o=Ql(i);e[s]=()=>o}}},qp=(t,e)=>{const n=Ql(e);t.slots.default=()=>n},nE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Ao(e,"_",n)):jp(e,t.slots={})}else t.slots={},e&&qp(t,e);Ao(t.slots,ga,1)},rE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,jp(e,s)),o=e}else e&&(qp(t,e),o={default:1});if(i)for(const a in s)!$p(a)&&o[a]==null&&delete s[a]};function Wc(t,e,n,r,s=!1){if(G(t)){t.forEach((d,p)=>Wc(d,e&&(G(e)?e[p]:e),n,r,s));return}if(Ms(r)&&!s)return;const i=r.shapeFlag&4?_a(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),ne(c))xn(c,a,12,[o,u]);else{const d=Ne(c),p=Ue(c);if(d||p){const _=()=>{if(t.f){const R=d?ce(h,c)?h[c]:u[c]:c.value;s?G(R)&&xl(R,i):G(R)?R.includes(i)||R.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ut(_,n)):_()}}}const ut=bv;function sE(t){return iE(t)}function iE(t,e){const n=Xf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Tt,insertStaticContent:_}=t,R=(f,g,m,w=null,y=null,k=null,x=void 0,C=null,D=!!g.dynamicChildren)=>{if(f===g)return;f&&!Is(f,g)&&(w=v(f),lt(f,y,k,!0),f=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:P,ref:F,shapeFlag:z}=g;switch(P){case pa:S(f,g,m,w);break;case jn:E(f,g,m,w);break;case cc:f==null&&A(g,m,w,x);break;case ot:ft(f,g,m,w,y,k,x,C,D);break;default:z&1?W(f,g,m,w,y,k,x,C,D):z&6?yt(f,g,m,w,y,k,x,C,D):(z&64||z&128)&&P.process(f,g,m,w,y,k,x,C,D,$)}F!=null&&y&&Wc(F,f&&f.ref,k,g||f,!g)},S=(f,g,m,w)=>{if(f==null)r(g.el=a(g.children),m,w);else{const y=g.el=f.el;g.children!==f.children&&l(y,g.children)}},E=(f,g,m,w)=>{f==null?r(g.el=c(g.children||""),m,w):g.el=f.el},A=(f,g,m,w)=>{[f.el,f.anchor]=_(f.children,g,m,w,f.el,f.anchor)},b=({el:f,anchor:g},m,w)=>{let y;for(;f&&f!==g;)y=d(f),r(f,m,w),f=y;r(g,m,w)},B=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},W=(f,g,m,w,y,k,x,C,D)=>{g.type==="svg"?x="svg":g.type==="math"&&(x="mathml"),f==null?M(g,m,w,y,k,x,C,D):J(f,g,y,k,x,C,D)},M=(f,g,m,w,y,k,x,C)=>{let D,P;const{props:F,shapeFlag:z,transition:j,dirs:Z}=f;if(D=f.el=o(f.type,k,F&&F.is,F),z&8?u(D,f.children):z&16&&Q(f.children,D,null,w,y,ac(f,k),x,C),Z&&Jn(f,null,w,"created"),re(D,f,f.scopeId,x,w),F){for(const ye in F)ye!=="value"&&!xs(ye)&&i(D,ye,null,F[ye],k,f.children,w,y,Ye);"value"in F&&i(D,"value",null,F.value,k),(P=F.onVnodeBeforeMount)&&Ut(P,w,f)}Z&&Jn(f,null,w,"beforeMount");const se=oE(y,j);se&&j.beforeEnter(D),r(D,g,m),((P=F&&F.onVnodeMounted)||se||Z)&&ut(()=>{P&&Ut(P,w,f),se&&j.enter(D),Z&&Jn(f,null,w,"mounted")},y)},re=(f,g,m,w,y)=>{if(m&&p(f,m),w)for(let k=0;k<w.length;k++)p(f,w[k]);if(y){let k=y.subTree;if(g===k){const x=y.vnode;re(f,x,x.scopeId,x.slotScopeIds,y.parent)}}},Q=(f,g,m,w,y,k,x,C,D=0)=>{for(let P=D;P<f.length;P++){const F=f[P]=C?Tn(f[P]):$t(f[P]);R(null,F,g,m,w,y,k,x,C)}},J=(f,g,m,w,y,k,x)=>{const C=g.el=f.el;let{patchFlag:D,dynamicChildren:P,dirs:F}=g;D|=f.patchFlag&16;const z=f.props||Ie,j=g.props||Ie;let Z;if(m&&Yn(m,!1),(Z=j.onVnodeBeforeUpdate)&&Ut(Z,m,g,f),F&&Jn(g,f,m,"beforeUpdate"),m&&Yn(m,!0),P?de(f.dynamicChildren,P,C,m,w,ac(g,y),k):x||fe(f,g,C,null,m,w,ac(g,y),k,!1),D>0){if(D&16)be(C,g,z,j,m,w,y);else if(D&2&&z.class!==j.class&&i(C,"class",null,j.class,y),D&4&&i(C,"style",z.style,j.style,y),D&8){const se=g.dynamicProps;for(let ye=0;ye<se.length;ye++){const Re=se[ye],Be=z[Re],Rt=j[Re];(Rt!==Be||Re==="value")&&i(C,Re,Be,Rt,y,f.children,m,w,Ye)}}D&1&&f.children!==g.children&&u(C,g.children)}else!x&&P==null&&be(C,g,z,j,m,w,y);((Z=j.onVnodeUpdated)||F)&&ut(()=>{Z&&Ut(Z,m,g,f),F&&Jn(g,f,m,"updated")},w)},de=(f,g,m,w,y,k,x)=>{for(let C=0;C<g.length;C++){const D=f[C],P=g[C],F=D.el&&(D.type===ot||!Is(D,P)||D.shapeFlag&70)?h(D.el):m;R(D,P,F,null,w,y,k,x,!0)}},be=(f,g,m,w,y,k,x)=>{if(m!==w){if(m!==Ie)for(const C in m)!xs(C)&&!(C in w)&&i(f,C,m[C],null,x,g.children,y,k,Ye);for(const C in w){if(xs(C))continue;const D=w[C],P=m[C];D!==P&&C!=="value"&&i(f,C,P,D,x,g.children,y,k,Ye)}"value"in w&&i(f,"value",m.value,w.value,x)}},ft=(f,g,m,w,y,k,x,C,D)=>{const P=g.el=f?f.el:a(""),F=g.anchor=f?f.anchor:a("");let{patchFlag:z,dynamicChildren:j,slotScopeIds:Z}=g;Z&&(C=C?C.concat(Z):Z),f==null?(r(P,m,w),r(F,m,w),Q(g.children||[],m,F,y,k,x,C,D)):z>0&&z&64&&j&&f.dynamicChildren?(de(f.dynamicChildren,j,m,y,k,x,C),(g.key!=null||y&&g===y.subTree)&&Jl(f,g,!0)):fe(f,g,m,F,y,k,x,C,D)},yt=(f,g,m,w,y,k,x,C,D)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?y.ctx.activate(g,m,w,x,D):Qn(g,m,w,y,k,x,D):vt(f,g,D)},Qn=(f,g,m,w,y,k,x)=>{const C=f.component=yE(f,w,y);if(Dp(f)&&(C.ctx.renderer=$),vE(C),C.asyncDep){if(y&&y.registerDep(C,ue),!f.el){const D=C.subTree=Ce(jn);E(null,D,g,m)}}else ue(C,f,g,m,y,k,x)},vt=(f,g,m)=>{const w=g.component=f.component;if(Tv(f,g,m))if(w.asyncDep&&!w.asyncResolved){_e(w,g,m);return}else w.next=g,_v(w.update),w.effect.dirty=!0,w.update();else g.el=f.el,w.vnode=g},ue=(f,g,m,w,y,k,x)=>{const C=()=>{if(f.isMounted){let{next:F,bu:z,u:j,parent:Z,vnode:se}=f;{const Cr=Hp(f);if(Cr){F&&(F.el=se.el,_e(f,F,x)),Cr.asyncDep.then(()=>{f.isUnmounted||C()});return}}let ye=F,Re;Yn(f,!1),F?(F.el=se.el,_e(f,F,x)):F=se,z&&uo(z),(Re=F.props&&F.props.onVnodeBeforeUpdate)&&Ut(Re,Z,F,se),Yn(f,!0);const Be=ic(f),Rt=f.subTree;f.subTree=Be,R(Rt,Be,h(Rt.el),v(Rt),f,y,k),F.el=Be.el,ye===null&&Av(f,Be.el),j&&ut(j,y),(Re=F.props&&F.props.onVnodeUpdated)&&ut(()=>Ut(Re,Z,F,se),y)}else{let F;const{el:z,props:j}=g,{bm:Z,m:se,parent:ye}=f,Re=Ms(g);if(Yn(f,!1),Z&&uo(Z),!Re&&(F=j&&j.onVnodeBeforeMount)&&Ut(F,ye,g),Yn(f,!0),z&&Ae){const Be=()=>{f.subTree=ic(f),Ae(z,f.subTree,f,y,null)};Re?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Be()):Be()}else{const Be=f.subTree=ic(f);R(null,Be,m,w,f,y,k),g.el=Be.el}if(se&&ut(se,y),!Re&&(F=j&&j.onVnodeMounted)){const Be=g;ut(()=>Ut(F,ye,Be),y)}(g.shapeFlag&256||ye&&Ms(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&ut(f.a,y),f.isMounted=!0,g=m=w=null}},D=f.effect=new Fl(C,Tt,()=>zl(P),f.scope),P=f.update=()=>{D.dirty&&D.run()};P.id=f.uid,Yn(f,!0),P()},_e=(f,g,m)=>{g.component=f;const w=f.vnode.props;f.vnode=g,f.next=null,eE(f,g.props,w,m),rE(f,g.children,m),Ir(),Rh(f),wr()},fe=(f,g,m,w,y,k,x,C,D=!1)=>{const P=f&&f.children,F=f?f.shapeFlag:0,z=g.children,{patchFlag:j,shapeFlag:Z}=g;if(j>0){if(j&128){_n(P,z,m,w,y,k,x,C,D);return}else if(j&256){tn(P,z,m,w,y,k,x,C,D);return}}Z&8?(F&16&&Ye(P,y,k),z!==P&&u(m,z)):F&16?Z&16?_n(P,z,m,w,y,k,x,C,D):Ye(P,y,k,!0):(F&8&&u(m,""),Z&16&&Q(z,m,w,y,k,x,C,D))},tn=(f,g,m,w,y,k,x,C,D)=>{f=f||Br,g=g||Br;const P=f.length,F=g.length,z=Math.min(P,F);let j;for(j=0;j<z;j++){const Z=g[j]=D?Tn(g[j]):$t(g[j]);R(f[j],Z,m,null,y,k,x,C,D)}P>F?Ye(f,y,k,!0,!1,z):Q(g,m,w,y,k,x,C,D,z)},_n=(f,g,m,w,y,k,x,C,D)=>{let P=0;const F=g.length;let z=f.length-1,j=F-1;for(;P<=z&&P<=j;){const Z=f[P],se=g[P]=D?Tn(g[P]):$t(g[P]);if(Is(Z,se))R(Z,se,m,null,y,k,x,C,D);else break;P++}for(;P<=z&&P<=j;){const Z=f[z],se=g[j]=D?Tn(g[j]):$t(g[j]);if(Is(Z,se))R(Z,se,m,null,y,k,x,C,D);else break;z--,j--}if(P>z){if(P<=j){const Z=j+1,se=Z<F?g[Z].el:w;for(;P<=j;)R(null,g[P]=D?Tn(g[P]):$t(g[P]),m,se,y,k,x,C,D),P++}}else if(P>j)for(;P<=z;)lt(f[P],y,k,!0),P++;else{const Z=P,se=P,ye=new Map;for(P=se;P<=j;P++){const pt=g[P]=D?Tn(g[P]):$t(g[P]);pt.key!=null&&ye.set(pt.key,P)}let Re,Be=0;const Rt=j-se+1;let Cr=!1,dh=0;const Es=new Array(Rt);for(P=0;P<Rt;P++)Es[P]=0;for(P=Z;P<=z;P++){const pt=f[P];if(Be>=Rt){lt(pt,y,k,!0);continue}let Ft;if(pt.key!=null)Ft=ye.get(pt.key);else for(Re=se;Re<=j;Re++)if(Es[Re-se]===0&&Is(pt,g[Re])){Ft=Re;break}Ft===void 0?lt(pt,y,k,!0):(Es[Ft-se]=P+1,Ft>=dh?dh=Ft:Cr=!0,R(pt,g[Ft],m,null,y,k,x,C,D),Be++)}const fh=Cr?aE(Es):Br;for(Re=fh.length-1,P=Rt-1;P>=0;P--){const pt=se+P,Ft=g[pt],ph=pt+1<F?g[pt+1].el:w;Es[P]===0?R(null,Ft,m,ph,y,k,x,C,D):Cr&&(Re<0||P!==fh[Re]?Lt(Ft,m,ph,2):Re--)}}},Lt=(f,g,m,w,y=null)=>{const{el:k,type:x,transition:C,children:D,shapeFlag:P}=f;if(P&6){Lt(f.component.subTree,g,m,w);return}if(P&128){f.suspense.move(g,m,w);return}if(P&64){x.move(f,g,m,$);return}if(x===ot){r(k,g,m);for(let z=0;z<D.length;z++)Lt(D[z],g,m,w);r(f.anchor,g,m);return}if(x===cc){b(f,g,m);return}if(w!==2&&P&1&&C)if(w===0)C.beforeEnter(k),r(k,g,m),ut(()=>C.enter(k),y);else{const{leave:z,delayLeave:j,afterLeave:Z}=C,se=()=>r(k,g,m),ye=()=>{z(k,()=>{se(),Z&&Z()})};j?j(k,se,ye):ye()}else r(k,g,m)},lt=(f,g,m,w=!1,y=!1)=>{const{type:k,props:x,ref:C,children:D,dynamicChildren:P,shapeFlag:F,patchFlag:z,dirs:j}=f;if(C!=null&&Wc(C,null,m,f,!0),F&256){g.ctx.deactivate(f);return}const Z=F&1&&j,se=!Ms(f);let ye;if(se&&(ye=x&&x.onVnodeBeforeUnmount)&&Ut(ye,g,f),F&6)Hi(f.component,m,w);else{if(F&128){f.suspense.unmount(m,w);return}Z&&Jn(f,null,g,"beforeUnmount"),F&64?f.type.remove(f,g,m,y,$,w):P&&(k!==ot||z>0&&z&64)?Ye(P,g,m,!1,!0):(k===ot&&z&384||!y&&F&16)&&Ye(D,g,m),w&&Pr(f)}(se&&(ye=x&&x.onVnodeUnmounted)||Z)&&ut(()=>{ye&&Ut(ye,g,f),Z&&Jn(f,null,g,"unmounted")},m)},Pr=f=>{const{type:g,el:m,anchor:w,transition:y}=f;if(g===ot){br(m,w);return}if(g===cc){B(f);return}const k=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:C}=y,D=()=>x(m,k);C?C(f.el,k,D):D()}else k()},br=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},Hi=(f,g,m)=>{const{bum:w,scope:y,update:k,subTree:x,um:C}=f;w&&uo(w),y.stop(),k&&(k.active=!1,lt(x,f,g,m)),C&&ut(C,g),ut(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ye=(f,g,m,w=!1,y=!1,k=0)=>{for(let x=k;x<f.length;x++)lt(f[x],g,m,w,y)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let L=!1;const V=(f,g,m)=>{f==null?g._vnode&&lt(g._vnode,null,null,!0):R(g._vnode||null,f,g,null,null,null,m),L||(L=!0,Rh(),Ap(),L=!1),g._vnode=f},$={p:R,um:lt,m:Lt,r:Pr,mt:Qn,mc:Q,pc:fe,pbc:de,n:v,o:t};let pe,Ae;return e&&([pe,Ae]=e($)),{render:V,hydrate:pe,createApp:Yv(V,pe)}}function ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function oE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jl(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tn(s[i]),a.el=o.el),n||Jl(o,a)),a.type===pa&&(a.el=o.el)}}function aE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hp(e)}const cE=t=>t.__isTeleport,Fs=t=>t&&(t.disabled||t.disabled===""),Mh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Lh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,zc=(t,e)=>{const n=t&&t.to;return Ne(n)?e?e(n):null:n},lE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:_,createText:R,createComment:S}}=l,E=Fs(e.props);let{shapeFlag:A,children:b,dynamicChildren:B}=e;if(t==null){const W=e.el=R(""),M=e.anchor=R("");p(W,n,r),p(M,n,r);const re=e.target=zc(e.props,_),Q=e.targetAnchor=R("");re&&(p(Q,re),o==="svg"||Mh(re)?o="svg":(o==="mathml"||Lh(re))&&(o="mathml"));const J=(de,be)=>{A&16&&u(b,de,be,s,i,o,a,c)};E?J(n,M):re&&J(re,Q)}else{e.el=t.el;const W=e.anchor=t.anchor,M=e.target=t.target,re=e.targetAnchor=t.targetAnchor,Q=Fs(t.props),J=Q?n:M,de=Q?W:re;if(o==="svg"||Mh(M)?o="svg":(o==="mathml"||Lh(M))&&(o="mathml"),B?(d(t.dynamicChildren,B,J,s,i,o,a),Jl(t,e,!0)):c||h(t,e,J,de,s,i,o,a,!1),E)Q?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Xi(e,n,W,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const be=e.target=zc(e.props,_);be&&Xi(e,be,null,l,0)}else Q&&Xi(e,M,re,l,1)}Kp(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=t;if(h&&i(u),o&&i(l),a&16){const p=o||!Fs(d);for(let _=0;_<c.length;_++){const R=c[_];s(R,e,n,p,!!R.dynamicChildren)}}},move:Xi,hydrate:uE};function Xi(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||Fs(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],e,n,2);h&&r(a,e,n)}function uE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=zc(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Fs(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,r,s,i)}Kp(e)}return e.anchor&&o(e.anchor)}const hE=lE;function Kp(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const ot=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),jn=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),Us=[];let Pt=null;function Me(t=!1){Us.push(Pt=t?null:[])}function dE(){Us.pop(),Pt=Us[Us.length-1]||null}let Zs=1;function Fh(t){Zs+=t}function Wp(t){return t.dynamicChildren=Zs>0?Pt||Br:null,dE(),Zs>0&&Pt&&Pt.push(t),t}function Et(t,e,n,r,s,i){return Wp(q(t,e,n,r,s,i,!0))}function hr(t,e,n,r,s){return Wp(Ce(t,e,n,r,s,!0))}function ko(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const ga="__vInternal",zp=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||Ue(t)||ne(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,r=0,s=null,i=t===ot?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zp(e),ref:e&&po(e),scopeId:ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(Yl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Zs>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Ce=fE;function fE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rv)&&(t=jn),ko(t)){const a=Xr(t,e,!0);return n&&Yl(a,n),Zs>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(AE(t)&&(t=t.__vccOpts),e){e=pE(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=ia(a)),Ee(c)&&(_p(c)&&!G(c)&&(c=Je({},c)),e.style=Ll(c))}const o=Ne(t)?1:Pv(t)?128:cE(t)?64:Ee(t)?4:ne(t)?2:0;return q(t,e,n,r,s,o,i,!0)}function pE(t){return t?_p(t)||ga in t?Je({},t):t:null}function Xr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?gE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zp(a),ref:e&&e.ref?n&&s?G(s)?s.concat(po(e)):[s,po(e)]:po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function St(t=" ",e=0){return Ce(pa,null,t,e)}function Gp(t="",e=!1){return e?(Me(),hr(jn,null,t)):Ce(jn,null,t)}function $t(t){return t==null||typeof t=="boolean"?Ce(jn):G(t)?Ce(ot,null,t.slice()):typeof t=="object"?Tn(t):Ce(pa,null,String(t))}function Tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function Yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ga in e)?e._ctx=Le:s===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[St(e)]):n=8);t.children=e,t.shapeFlag|=n}function gE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ia([e.class,r.class]));else if(s==="style")e.style=Ll([e.style,r.style]);else if(na(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){kt(t,e,7,[n,r])}const mE=Fp();let _E=0;function yE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mE,i={uid:_E++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(r,s),emitsOptions:Sp(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ev.bind(null,i),t.ce&&t.ce(i),i}let We=null,Do,Gc;{const t=Xf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Do=e("__VUE_INSTANCE_SETTERS__",n=>We=n),Gc=e("__VUE_SSR_SETTERS__",n=>ma=n)}const wi=t=>{const e=We;return Do(t),t.scope.on(),()=>{t.scope.off(),Do(e)}},Uh=()=>{We&&We.scope.off(),Do(null)};function Qp(t){return t.vnode.shapeFlag&4}let ma=!1;function vE(t,e=!1){e&&Gc(e);const{props:n,children:r}=t.vnode,s=Qp(t);Zv(t,n,s,e),nE(t,r);const i=s?EE(t,e):void 0;return e&&Gc(!1),i}function EE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=aa(new Proxy(t.ctx,Hv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wE(t):null,i=wi(t);Ir();const o=xn(r,t,0,[t.props,s]);if(wr(),i(),Qf(o)){if(o.then(Uh,Uh),e)return o.then(a=>{Bh(t,a,e)}).catch(a=>{ca(a,t,0)});t.asyncDep=o}else Bh(t,o,e)}else Jp(t,e)}function Bh(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Ip(e)),Jp(t,n)}let $h;function Jp(t,e,n){const r=t.type;if(!t.render){if(!e&&$h&&!r.render){const s=r.template||Gl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Je(Je({isCustomElement:i,delimiters:a},o),c);r.render=$h(s,l)}}t.render=r.render||Tt}{const s=wi(t);Ir();try{Kv(t)}finally{wr(),s()}}}function IE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function wE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return IE(t)},slots:t.slots,emit:t.emit,expose:e}}function _a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ip(aa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}}))}function TE(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function AE(t){return ne(t)&&"__vccOpts"in t}const mt=(t,e)=>cv(t,e,ma);function Yp(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!G(e)?ko(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ko(n)&&(n=[n]),Ce(t,e,n))}const RE="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const SE="http://www.w3.org/2000/svg",PE="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,jh=An&&An.createElement("template"),bE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(SE,t):e==="mathml"?An.createElementNS(PE,t):An.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{jh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=jh.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},CE=Symbol("_vtc");function kE(t,e,n){const r=t[CE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qh=Symbol("_vod"),DE=Symbol("_vsh"),OE=Symbol(""),NE=/(^|;)\s*display\s*:/;function VE(t,e,n){const r=t.style,s=Ne(n);let i=!1;if(n&&!s){if(e)if(Ne(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&go(r,a,"")}else for(const o in e)n[o]==null&&go(r,o,"");for(const o in n)o==="display"&&(i=!0),go(r,o,n[o])}else if(s){if(e!==n){const o=r[OE];o&&(n+=";"+o),r.cssText=n,i=NE.test(n)}}else e&&t.removeAttribute("style");qh in t&&(t[qh]=i?r.display:"",t[DE]&&(r.display="none"))}const Hh=/\s*!important$/;function go(t,e,n){if(G(n))n.forEach(r=>go(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xE(t,e);Hh.test(n)?t.setProperty(us(r),n.replace(Hh,""),"important"):t[r]=n}}const Kh=["Webkit","Moz","ms"],lc={};function xE(t,e){const n=lc[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return lc[e]=r;r=sa(r);for(let s=0;s<Kh.length;s++){const i=Kh[s]+r;if(i in t)return lc[e]=i}return e}const Wh="http://www.w3.org/1999/xlink";function ME(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wh,e.slice(6,e.length)):t.setAttributeNS(Wh,e,n);else{const i=Fy(e);n==null||i&&!Zf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function LE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function tr(t,e,n,r){t.addEventListener(e,n,r)}function FE(t,e,n,r){t.removeEventListener(e,n,r)}const zh=Symbol("_vei");function UE(t,e,n,r,s=null){const i=t[zh]||(t[zh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=BE(e);if(r){const l=i[e]=qE(r,s);tr(t,a,l,c)}else o&&(FE(t,a,o,c),i[e]=void 0)}}const Gh=/(?:Once|Passive|Capture)$/;function BE(t){let e;if(Gh.test(t)){e={};let r;for(;r=t.match(Gh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):us(t.slice(2)),e]}let uc=0;const $E=Promise.resolve(),jE=()=>uc||($E.then(()=>uc=0),uc=Date.now());function qE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(HE(r,n.value),e,5,[r])};return n.value=t,n.attached=jE(),n}function HE(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,KE=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?kE(t,r,l):e==="style"?VE(t,n,r):na(e)?Vl(e)||UE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WE(t,e,r,l))?LE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ME(t,e,r,l))};function WE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qh(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qh(e)&&Ne(n)?!1:e in t}const Oo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>uo(e,n):e};function zE(t){t.target.composing=!0}function Jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hr=Symbol("_assign"),GE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Hr]=Oo(s);const i=r||s.props&&s.props.type==="number";tr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Mc(a)),t[Hr](a)}),n&&tr(t,"change",()=>{t.value=t.value.trim()}),e||(tr(t,"compositionstart",zE),tr(t,"compositionend",Jh),tr(t,"change",Jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Hr]=Oo(i),t.composing)return;const o=s||t.type==="number"?Mc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},hc={created(t,{value:e},n){t.checked=Ro(e,n.props.value),t[Hr]=Oo(n),tr(t,"change",()=>{t[Hr](QE(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Hr]=Oo(r),e!==n&&(t.checked=Ro(e,r.props.value))}};function QE(t){return"_value"in t?t._value:t.value}const JE=["ctrl","shift","alt","meta"],YE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>JE.some(n=>t[`${n}Key`]&&!e.includes(n))},Dn=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=YE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},XE=Je({patchProp:KE},bE);let Yh;function ZE(){return Yh||(Yh=sE(XE))}const eI=(...t)=>{const e=ZE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nI(r);if(!s)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,tI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function tI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function nI(t){return Ne(t)?document.querySelector(t):t}var rI=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Xp;const ya=t=>Xp=t,Zp=Symbol();function Qc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Bs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bs||(Bs={}));function sI(){const t=np(!0),e=t.run(()=>ct({}));let n=[],r=[];const s=aa({install(i){ya(s),s._a=i,i.provide(Zp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!rI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const eg=()=>{};function Xh(t,e,n,r=eg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&rp()&&$y(s),s}function kr(t,...e){t.slice().forEach(n=>{n(...e)})}const iI=t=>t();function Jc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Qc(s)&&Qc(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!Vn(r)?t[n]=Jc(s,r):t[n]=r}return t}const oI=Symbol();function aI(t){return!Qc(t)||!t.hasOwnProperty(oI)}const{assign:In}=Object;function cI(t){return!!(Ue(t)&&t.effect)}function lI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=dv(n.state.value[t]);return In(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=aa(mt(()=>{ya(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=tg(t,l,e,n,r,!0),c}function tg(t,e,n={},r,s,i){let o;const a=In({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),ct({});let R;function S(Q){let J;l=u=!1,typeof Q=="function"?(Q(r.state.value[t]),J={type:Bs.patchFunction,storeId:t,events:p}):(Jc(r.state.value[t],Q),J={type:Bs.patchObject,payload:Q,storeId:t,events:p});const de=R=Symbol();Wl().then(()=>{R===de&&(l=!0)}),u=!0,kr(h,J,r.state.value[t])}const E=i?function(){const{state:J}=n,de=J?J():{};this.$patch(be=>{In(be,de)})}:eg;function A(){o.stop(),h=[],d=[],r._s.delete(t)}function b(Q,J){return function(){ya(r);const de=Array.from(arguments),be=[],ft=[];function yt(ue){be.push(ue)}function Qn(ue){ft.push(ue)}kr(d,{args:de,name:Q,store:W,after:yt,onError:Qn});let vt;try{vt=J.apply(this&&this.$id===t?this:W,de)}catch(ue){throw kr(ft,ue),ue}return vt instanceof Promise?vt.then(ue=>(kr(be,ue),ue)).catch(ue=>(kr(ft,ue),Promise.reject(ue))):(kr(be,vt),vt)}}const B={_p:r,$id:t,$onAction:Xh.bind(null,d),$patch:S,$reset:E,$subscribe(Q,J={}){const de=Xh(h,Q,J.detached,()=>be()),be=o.run(()=>ur(()=>r.state.value[t],ft=>{(J.flush==="sync"?u:l)&&Q({storeId:t,type:Bs.direct,events:p},ft)},In({},c,J)));return de},$dispose:A},W=Ii(B);r._s.set(t,W);const re=(r._a&&r._a.runWithContext||iI)(()=>r._e.run(()=>(o=np()).run(e)));for(const Q in re){const J=re[Q];if(Ue(J)&&!cI(J)||Vn(J))i||(_&&aI(J)&&(Ue(J)?J.value=_[Q]:Jc(J,_[Q])),r.state.value[t][Q]=J);else if(typeof J=="function"){const de=b(Q,J);re[Q]=de,a.actions[Q]=J}}return In(W,re),In(le(W),re),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:Q=>{S(J=>{In(J,Q)})}}),r._p.forEach(Q=>{In(W,o.run(()=>Q({store:W,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(W.$state,_),l=!0,u=!0,W}function uI(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Xv();return a=a||(l?Dt(Zp,null):null),a&&ya(a),a=Xp,a._s.has(r)||(i?tg(r,e,s,a):lI(r,s,a)),a._s.get(r)}return o.$id=r,o}const hI="/disc-golf-scorecard/favicon.svg",dI="modulepreload",fI=function(t){return"/disc-golf-scorecard/"+t},Zh={},ws=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=fI(c),c in Zh)return;Zh[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const _=i[p];if(_.href===c&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":dI,l||(d.as="script",d.crossOrigin=""),d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof document<"u";function pI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function dc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ot(s)?s.map(t):t(s)}return n}const $s=()=>{},Ot=Array.isArray,ng=/#/g,gI=/&/g,mI=/\//g,_I=/=/g,yI=/\?/g,rg=/\+/g,vI=/%5B/g,EI=/%5D/g,sg=/%5E/g,II=/%60/g,ig=/%7B/g,wI=/%7C/g,og=/%7D/g,TI=/%20/g;function Xl(t){return encodeURI(""+t).replace(wI,"|").replace(vI,"[").replace(EI,"]")}function AI(t){return Xl(t).replace(ig,"{").replace(og,"}").replace(sg,"^")}function Yc(t){return Xl(t).replace(rg,"%2B").replace(TI,"+").replace(ng,"%23").replace(gI,"%26").replace(II,"`").replace(ig,"{").replace(og,"}").replace(sg,"^")}function RI(t){return Yc(t).replace(_I,"%3D")}function SI(t){return Xl(t).replace(ng,"%23").replace(yI,"%3F")}function PI(t){return t==null?"":SI(t).replace(mI,"%2F")}function ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const bI=/\/$/,CI=t=>t.replace(bI,"");function fc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=NI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ei(o)}}function kI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function DI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zr(e.matched[r],n.matched[s])&&ag(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ag(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!OI(t[n],e[n]))return!1;return!0}function OI(t,e){return Ot(t)?td(t,e):Ot(e)?td(e,t):t===e}function td(t,e){return Ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function NI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function VI(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CI(t)}const xI=/^[^#]+#/;function MI(t,e){return t.replace(xI,"#")+e}function LI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const va=()=>({left:window.scrollX,top:window.scrollY});function FI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=LI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nd(t,e){return(history.state?history.state.position-e:-1)+t}const Xc=new Map;function UI(t,e){Xc.set(t,e)}function BI(t){const e=Xc.get(t);return Xc.delete(t),e}let $I=()=>location.protocol+"//"+location.host;function cg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ed(c,"")}return ed(n,t)+r+s}function jI(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=cg(t,location),_=n.value,R=e.value;let S=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}S=R?d.position-R.position:0}else r(p);s.forEach(E=>{E(n.value,_,{delta:S,type:ti.pop,direction:S?S>0?js.forward:js.back:js.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:va()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function rd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?va():null}}function qI(t){const{history:e,location:n}=window,r={value:cg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:$I()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ge({},e.state,rd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ge({},s.value,e.state,{forward:c,scroll:va()});i(u.current,u,!0);const h=ge({},rd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function HI(t){t=VI(t);const e=qI(t),n=jI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ge({location:"",base:t,go:r,createHref:MI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function KI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),HI(t)}function WI(t){return typeof t=="string"||t&&typeof t=="object"}function lg(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ug=Symbol("");var sd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sd||(sd={}));function es(t,e){return ge(new Error,{type:t,[ug]:!0},e)}function nn(t,e){return t instanceof Error&&ug in t&&(e==null||!!(t.type&e))}const id="[^/]+?",zI={sensitive:!1,strict:!1,start:!0,end:!0},GI=/[.+*?^${}()[\]/\\]/g;function QI(t,e){const n=ge({},zI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(GI,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:R,optional:S,regexp:E}=d;i.push({name:_,repeatable:R,optional:S});const A=E||id;if(A!==id){p+=10;try{new RegExp(`(${A})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+B.message)}}let b=R?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(b=S&&l.length<2?`(?:/${b})`:"/"+b),S&&(b+="?"),s+=b,p+=20,S&&(p+=-8),R&&(p+=-20),A===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:R,optional:S}=p,E=_ in l?l[_]:"";if(Ot(E)&&!R)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=Ot(E)?E.join("/"):E;if(!A)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function JI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function YI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=JI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(od(r))return 1;if(od(s))return-1}return s.length-r.length}function od(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XI={type:0,value:""},ZI=/[a-zA-Z0-9_]/;function ew(t){if(!t)return[[]];if(t==="/")return[[XI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:ZI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function tw(t,e,n){const r=QI(ew(t.path),n),s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function nw(t,e){const n=[],r=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,_=rw(u);_.aliasOf=d&&d.record;const R=ld(e,u),S=[_];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of b)S.push(ge({},_,{components:d?d.record.components:_.components,path:B,aliasOf:d?d.record:_}))}let E,A;for(const b of S){const{path:B}=b;if(h&&B[0]!=="/"){const W=h.record.path,M=W[W.length-1]==="/"?"":"/";b.path=h.record.path+(B&&M+B)}if(E=tw(b,h,R),d?d.alias.push(E):(A=A||E,A!==E&&A.alias.push(E),p&&u.name&&!cd(E)&&o(u.name)),_.children){const W=_.children;for(let M=0;M<W.length;M++)i(W[M],E,d&&d.children[M])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return A?()=>{o(A)}:$s}function o(u){if(lg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&YI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!cd(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},_,R;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw es(1,{location:u});R=d.record.name,p=ge(ad(h.params,d.keys.filter(A=>!A.optional).concat(d.parent?d.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),u.params&&ad(u.params,d.keys.map(A=>A.name))),_=d.stringify(p)}else if(u.path!=null)_=u.path,d=n.find(A=>A.re.test(_)),d&&(p=d.parse(_),R=d.record.name);else{if(d=h.name?r.get(h.name):n.find(A=>A.re.test(h.path)),!d)throw es(1,{location:u,currentLocation:h});R=d.record.name,p=ge({},h.params,u.params),_=d.stringify(p)}const S=[];let E=d;for(;E;)S.unshift(E.record),E=E.parent;return{name:R,path:_,params:p,matched:S,meta:iw(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ad(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function rw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:sw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function sw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iw(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function ld(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hg(t,e){return e.children.some(n=>n===t||hg(t,n))}function ow(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(rg," "),o=i.indexOf("="),a=ei(o<0?i:i.slice(0,o)),c=o<0?null:ei(i.slice(o+1));if(a in e){let l=e[a];Ot(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ud(t){let e="";for(let n in t){const r=t[n];if(n=RI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(r)?r.map(i=>i&&Yc(i)):[r&&Yc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function aw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const cw=Symbol(""),hd=Symbol(""),Ea=Symbol(""),dg=Symbol(""),Zc=Symbol("");function Ts(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(es(4,{from:n,to:e})):d instanceof Error?c(d):WI(d)?c(es(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(d=>c(d))})}function pc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(lw(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Rn(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=pI(u)?u.default:u;o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&Rn(p,n,r,o,a,s)()}))}}return i}function lw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function dd(t){const e=Dt(Ea),n=Dt(dg),r=mt(()=>e.resolve(ht(t.to))),s=mt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Zr.bind(null,u));if(d>-1)return d;const p=fd(c[l-2]);return l>1&&fd(u)===p&&h[h.length-1].path!==p?h.findIndex(Zr.bind(null,c[l-2])):d}),i=mt(()=>s.value>-1&&fw(n.params,r.value.params)),o=mt(()=>s.value>-1&&s.value===n.matched.length-1&&ag(n.params,r.value.params));function a(c={}){return dw(c)?e[ht(t.replace)?"replace":"push"](ht(t.to)).catch($s):Promise.resolve()}return{route:r,href:mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const uw=kp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dd,setup(t,{slots:e}){const n=Ii(dd(t)),{options:r}=Dt(Ea),s=mt(()=>({[pd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Yp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),hw=uw;function dw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ot(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pd=(t,e,n)=>t??e??n,pw=kp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(Zc),s=mt(()=>t.route||r.value),i=Dt(hd,0),o=mt(()=>{let l=ht(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=mt(()=>s.value.matched[o.value]);fo(hd,mt(()=>o.value+1)),fo(cw,a),fo(Zc,s);const c=ct();return ur(()=>[c.value,a.value,t.name],([l,u,h],[d,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Zr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return gd(n.default,{Component:d,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,S=Yp(d,ge({},_,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return gd(n.default,{Component:S,route:l})||S}}});function gd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gw=pw;function mw(t){const e=nw(t.routes,t),n=t.parseQuery||ow,r=t.stringifyQuery||ud,s=t.history,i=Ts(),o=Ts(),a=Ts(),c=lv(vn);let l=vn;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dc.bind(null,v=>""+v),h=dc.bind(null,PI),d=dc.bind(null,ei);function p(v,L){let V,$;return lg(v)?(V=e.getRecordMatcher(v),$=L):$=v,e.addRoute($,V)}function _(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function R(){return e.getRoutes().map(v=>v.record)}function S(v){return!!e.getRecordMatcher(v)}function E(v,L){if(L=ge({},L||c.value),typeof v=="string"){const g=fc(n,v,L.path),m=e.resolve({path:g.path},L),w=s.createHref(g.fullPath);return ge(g,m,{params:d(m.params),hash:ei(g.hash),redirectedFrom:void 0,href:w})}let V;if(v.path!=null)V=ge({},v,{path:fc(n,v.path,L.path).path});else{const g=ge({},v.params);for(const m in g)g[m]==null&&delete g[m];V=ge({},v,{params:h(g)}),L.params=h(L.params)}const $=e.resolve(V,L),pe=v.hash||"";$.params=u(d($.params));const Ae=kI(r,ge({},v,{hash:AI(pe),path:$.path})),f=s.createHref(Ae);return ge({fullPath:Ae,hash:pe,query:r===ud?aw(v.query):v.query||{}},$,{redirectedFrom:void 0,href:f})}function A(v){return typeof v=="string"?fc(n,v,c.value.path):ge({},v)}function b(v,L){if(l!==v)return es(8,{from:L,to:v})}function B(v){return re(v)}function W(v){return B(ge(A(v),{replace:!0}))}function M(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:V}=L;let $=typeof V=="function"?V(v):V;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=A($):{path:$},$.params={}),ge({query:v.query,hash:v.hash,params:$.path!=null?{}:v.params},$)}}function re(v,L){const V=l=E(v),$=c.value,pe=v.state,Ae=v.force,f=v.replace===!0,g=M(V);if(g)return re(ge(A(g),{state:typeof g=="object"?ge({},pe,g.state):pe,force:Ae,replace:f}),L||V);const m=V;m.redirectedFrom=L;let w;return!Ae&&DI(r,$,V)&&(w=es(16,{to:m,from:$}),Lt($,$,!0,!1)),(w?Promise.resolve(w):de(m,$)).catch(y=>nn(y)?nn(y,2)?y:_n(y):fe(y,m,$)).then(y=>{if(y){if(nn(y,2))return re(ge({replace:f},A(y.to),{state:typeof y.to=="object"?ge({},pe,y.to.state):pe,force:Ae}),L||m)}else y=ft(m,$,!0,f,pe);return be(m,$,y),y})}function Q(v,L){const V=b(v,L);return V?Promise.reject(V):Promise.resolve()}function J(v){const L=br.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(v):v()}function de(v,L){let V;const[$,pe,Ae]=_w(v,L);V=pc($.reverse(),"beforeRouteLeave",v,L);for(const g of $)g.leaveGuards.forEach(m=>{V.push(Rn(m,v,L))});const f=Q.bind(null,v,L);return V.push(f),Ye(V).then(()=>{V=[];for(const g of i.list())V.push(Rn(g,v,L));return V.push(f),Ye(V)}).then(()=>{V=pc(pe,"beforeRouteUpdate",v,L);for(const g of pe)g.updateGuards.forEach(m=>{V.push(Rn(m,v,L))});return V.push(f),Ye(V)}).then(()=>{V=[];for(const g of Ae)if(g.beforeEnter)if(Ot(g.beforeEnter))for(const m of g.beforeEnter)V.push(Rn(m,v,L));else V.push(Rn(g.beforeEnter,v,L));return V.push(f),Ye(V)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),V=pc(Ae,"beforeRouteEnter",v,L,J),V.push(f),Ye(V))).then(()=>{V=[];for(const g of o.list())V.push(Rn(g,v,L));return V.push(f),Ye(V)}).catch(g=>nn(g,8)?g:Promise.reject(g))}function be(v,L,V){a.list().forEach($=>J(()=>$(v,L,V)))}function ft(v,L,V,$,pe){const Ae=b(v,L);if(Ae)return Ae;const f=L===vn,g=Vr?history.state:{};V&&($||f?s.replace(v.fullPath,ge({scroll:f&&g&&g.scroll},pe)):s.push(v.fullPath,pe)),c.value=v,Lt(v,L,V,f),_n()}let yt;function Qn(){yt||(yt=s.listen((v,L,V)=>{if(!Hi.listening)return;const $=E(v),pe=M($);if(pe){re(ge(pe,{replace:!0}),$).catch($s);return}l=$;const Ae=c.value;Vr&&UI(nd(Ae.fullPath,V.delta),va()),de($,Ae).catch(f=>nn(f,12)?f:nn(f,2)?(re(f.to,$).then(g=>{nn(g,20)&&!V.delta&&V.type===ti.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(V.delta&&s.go(-V.delta,!1),fe(f,$,Ae))).then(f=>{f=f||ft($,Ae,!1),f&&(V.delta&&!nn(f,8)?s.go(-V.delta,!1):V.type===ti.pop&&nn(f,20)&&s.go(-1,!1)),be($,Ae,f)}).catch($s)}))}let vt=Ts(),ue=Ts(),_e;function fe(v,L,V){_n(v);const $=ue.list();return $.length?$.forEach(pe=>pe(v,L,V)):console.error(v),Promise.reject(v)}function tn(){return _e&&c.value!==vn?Promise.resolve():new Promise((v,L)=>{vt.add([v,L])})}function _n(v){return _e||(_e=!v,Qn(),vt.list().forEach(([L,V])=>v?V(v):L()),vt.reset()),v}function Lt(v,L,V,$){const{scrollBehavior:pe}=t;if(!Vr||!pe)return Promise.resolve();const Ae=!V&&BI(nd(v.fullPath,0))||($||!V)&&history.state&&history.state.scroll||null;return Wl().then(()=>pe(v,L,Ae)).then(f=>f&&FI(f)).catch(f=>fe(f,v,L))}const lt=v=>s.go(v);let Pr;const br=new Set,Hi={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:S,getRoutes:R,resolve:E,options:t,push:B,replace:W,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:tn,install(v){const L=this;v.component("RouterLink",hw),v.component("RouterView",gw),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(c)}),Vr&&!Pr&&c.value===vn&&(Pr=!0,B(s.location).catch(pe=>{}));const V={};for(const pe in vn)Object.defineProperty(V,pe,{get:()=>c.value[pe],enumerable:!0});v.provide(Ea,L),v.provide(dg,gp(V)),v.provide(Zc,c);const $=v.unmount;br.add(v),v.unmount=function(){br.delete(v),br.size<1&&(l=vn,yt&&yt(),yt=null,c.value=vn,Pr=!1,_e=!1),$()}}};function Ye(v){return v.reduce((L,V)=>L.then(()=>J(V)),Promise.resolve())}return Hi}function _w(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zr(l,c))||s.push(c))}return[n,r,s]}function yw(){return Dt(Ea)}const fg=uI("gameStore",()=>{let t=null;localStorage.getItem("scorecard")&&(t=JSON.parse(localStorage.getItem("scorecard")));const e=ct((t==null?void 0:t.players)||[]),n=ct((t==null?void 0:t.holes)||[]),r=()=>(e.value.push({id:e.value.length+Date.now(),name:"",holes:[],total:0}),a(n.value.length),e.value[e.value.length-1]),s=E=>{e.value=e.value.filter(A=>A.id!==E)},i=E=>{e.value=E.map(A=>({id:Date.now()+Math.random()+"",name:"Anonymous",holes:n.value.map(b=>({id:b.id,score:""})),total:0,...A}))},o=()=>{n.value.push({id:n.value.length,par:3}),e.value.forEach(E=>{E.holes.push({id:n.value.length-1,score:""})})},a=E=>{n.value=[];for(let A=0;A<E;A++)n.value.push({id:A,par:3,notes:""});e.value.forEach(A=>{for(let b=0;b<E;b++)A.holes[b]||(A.holes[b]={id:b,score:"",notes:""})})},c=E=>{e.value=[],n.value=[],E.players.forEach(A=>{e.value.push({id:A.id,name:A.name,holes:A.holes,total:A.total})}),E.holes.forEach(A=>{n.value.push({id:A.id,par:A.par,notes:A.notes})})},l=E=>{c(E),e.value.forEach(A=>{A.holes=A.holes.map(b=>({id:b.id,score:"",notes:""}))})},u=(E,A,b)=>{const B=n.value.find(W=>W.id===E);B&&(B.par=A,B.notes=b)},h=(E,A,b)=>{const B=e.value.find(M=>M.id===E);if(!B)return;const W=B.holes.findIndex(M=>(M==null?void 0:M.id)===A);W!==-1&&(B.holes[W].score=b,_())},d=(E,A)=>{const b=n.value.find(B=>B.id===E);b&&(b.par=A,_())},p=(E,A)=>{const b=e.value.find(B=>B.id===E);b&&(b.name=A)},_=()=>{e.value.forEach(E=>{E.total=E.holes.reduce((A,b)=>{if(b.score==="E"||b.score==="")return A;const B=n.value.find(W=>W.id===b.id).par;return A+b.score-B},0)})},R=()=>{e.value=[],n.value=[]},S=()=>{localStorage.setItem("scorecard",JSON.stringify({players:e.value,holes:n.value}))};return ur(e,S,{deep:!0}),ur(n,S,{deep:!0}),{players:e,holes:n,cloneGame:l,setGame:c,addPlayer:r,removePlayer:s,setPlayers:i,updateName:p,addHole:o,setHole:u,setHoles:a,setScore:h,reset:R,setPar:d}}),hs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vw={class:"modal-inner"},Ew={__name:"ModalWrapper",emits:["close"],setup(t,{emit:e}){const n=e;return(r,s)=>(Me(),hr(hE,{to:"body"},[q("div",{class:"modal",onClick:s[1]||(s[1]=Dn(i=>n("close"),["self"]))},[q("div",vw,[q("button",{class:"btn btn-close",onClick:s[0]||(s[0]=()=>n("close"))},"X"),qv(r.$slots,"default",{close:()=>n("close"),test:5},void 0,!0)])])]))}},Iw=hs(Ew,[["__scopeId","data-v-5b726cc4"]]),md=["Ace","Acey","Airshot","Backhand","Basket","Birdie","Blitz","Bogey","Caddy","Cannon","Chains","Corkscrew","Dasher","Disc","Discus","Driver","Eagle","Fairway","Flick","Flare","Forehand","Frisbee","Glide","Grip","Harmony","Huck","Hyzer","Juke","Laser","Launch","Launchpad","Magnet","Mulligan","Putter","Putt","Raptor","Ripper","Roc","Skip","Stall","Steady","Tee","Throw","Zephyr"],_d=["Driver","Woods","Putterman","Putterson","Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Mulligan","Robinson"],ww=()=>`${md[Math.floor(Math.random()*md.length)]} ${_d[Math.floor(Math.random()*_d.length)]}`,pn=t=>(ha("data-v-e68fb2d1"),t=t(),da(),t),Tw={class:"form-row"},Aw=pn(()=>q("p",null,"Holes",-1)),Rw={class:"hole-inputs"},Sw={class:"radio-wrapper"},Pw=pn(()=>q("span",null,"1",-1)),bw={class:"radio-wrapper"},Cw=pn(()=>q("span",null,"9",-1)),kw={class:"radio-wrapper"},Dw=pn(()=>q("span",null,"18",-1)),Ow=pn(()=>q("small",null,"* You can add more as you go",-1)),Nw={class:"form-row"},Vw=pn(()=>q("p",null,"Players",-1)),xw=["placeholder","onUpdate:modelValue"],Mw=["onClick"],Lw=pn(()=>q("span",{class:"material-symbols-outlined"},"delete",-1)),Fw=[Lw],Uw=pn(()=>q("span",{class:"material-symbols-outlined"},"person_add",-1)),Bw={class:"form-row"},$w=["disabled"],jw=pn(()=>q("small",null,"* This will overwrite any current unsaved scorecard.",-1)),qw={__name:"NewGameModal",props:{modal:Object},setup(t){const e=fg(),n=yw(),{user:r}=uh(),s=t,i=ct([]),o=ct(9);Np(()=>{c()});const a=()=>{e.reset(),e.setHoles(o.value),i.value=i.value.map(h=>({...h,name:h.name||h.placeholder})),e.setPlayers(i.value),s.modal.close(),n.push("/play")},c=h=>{let d="";r.value&&i.value.length===0&&(d=r.value.displayName),i.value.push({id:Date.now()+Math.random()+"",name:d,placeholder:d||ww()})},l=h=>{i.value=i.value.filter(d=>d.id!==h)},u=mt(()=>o.value>0&&i.value.length>0);return(h,d)=>(Me(),Et("form",{class:"setup-form",onSubmit:Dn(a,["prevent"])},[q("div",Tw,[Aw,q("div",Rw,[q("label",Sw,[Yi(q("input",{type:"radio",name:"holes",value:1,"onUpdate:modelValue":d[0]||(d[0]=p=>o.value=p),onChange:d[1]||(d[1]=p=>o.value=1)},null,544),[[hc,o.value]]),Pw]),q("label",bw,[Yi(q("input",{type:"radio",name:"holes",value:9,"onUpdate:modelValue":d[2]||(d[2]=p=>o.value=p),onChange:d[3]||(d[3]=p=>o.value=9)},null,544),[[hc,o.value]]),Cw]),q("label",kw,[Yi(q("input",{type:"radio",name:"holes",value:18,"onUpdate:modelValue":d[4]||(d[4]=p=>o.value=p),onChange:d[5]||(d[5]=p=>o.value=18)},null,544),[[hc,o.value]]),Dw])]),Ow]),q("div",Nw,[Vw,(Me(!0),Et(ot,null,xp(i.value,p=>(Me(),Et("div",{key:p.id,class:"player-row"},[Yi(q("input",{type:"text",name:"player",placeholder:p.placeholder,"onUpdate:modelValue":_=>p.name=_},null,8,xw),[[GE,p.name]]),q("button",{class:"btn btn-warn btn-icon",onClick:Dn(_=>l(p.id),["prevent"])},Fw,8,Mw)]))),128)),q("button",{class:"btn btn-add",onClick:Dn(c,["prevent"])},[Uw,St(" Add Player ")])]),q("div",Bw,[q("button",{class:"btn btn-primary",disabled:!u.value},"Start",8,$w),jw])],32))}},Hw=hs(qw,[["__scopeId","data-v-e68fb2d1"]]),Kw={__name:"NewGameButton",props:{classes:{type:String,default:"btn"}},setup(t){const e=ct(!1);return(n,r)=>(Me(),Et(ot,null,[q("button",{class:ia(t.classes),onClick:r[0]||(r[0]=s=>e.value=!0)}," New Game ",2),e.value?(Me(),hr(Iw,{key:0,onClose:r[1]||(r[1]=s=>e.value=!1)},{default:kn(s=>[Ce(Hw,{modal:s},null,8,["modal"])]),_:1})):Gp("",!0)],64))}},Ww=hs(Kw,[["__scopeId","data-v-3f9c1123"]]),Ia=t=>(ha("data-v-bc17e848"),t=t(),da(),t),zw={key:0,class:"archive container"},Gw=Ia(()=>q("h1",null,"My games",-1)),Qw={key:0},Jw={key:1},Yw={key:2},Xw={class:"game-row"},Zw=["onClick"],eT=["datetime"],tT={class:"game-row__buttons"},nT={class:"main-buttons"},rT=["onClick"],sT=Ia(()=>q("span",{class:"material-symbols-outlined"},"visibility",-1)),iT=["onClick"],oT=Ia(()=>q("span",{class:"material-symbols-outlined"},"content_copy",-1)),aT=["onClick"],cT=Ia(()=>q("span",{class:"material-symbols-outlined"},"delete",-1)),lT=[cT],uT={__name:"HomeView",setup(t){const{status:e,user:n,userGames:r,deleteDocument:s,getGames:i}=uh(),o=fg(),a=u=>{o.setGame(u),ni.push("/play")},c=u=>{o.cloneGame(u),ni.push("/play")},l=u=>{s("games",u.id),i()};return(u,h)=>{const d=$c("RouterLink");return ht(e)!=="loading"?(Me(),Et("form",zw,[Gw,Ce(Ww),!ht(r).length&&ht(n)?(Me(),Et("p",Qw," No games found. ")):!ht(r).length&&!ht(n)?(Me(),Et("p",Jw,[Ce(d,{to:"/log-in"},{default:kn(()=>[St("Log in")]),_:1}),St(" or "),Ce(d,{to:"/sign-up"},{default:kn(()=>[St("create an account")]),_:1}),St(" to save your games. ")])):(Me(),Et("ul",Yw,[(Me(!0),Et(ot,null,xp(ht(r),p=>(Me(),Et("li",{key:p.id},[q("div",Xw,[q("button",{class:"btn btn-game btn-icon",onClick:Dn(_=>a(p),["prevent"])},[St(_h(p.name)+" ",1),q("time",{datetime:p.date},_h(new Date(p.date).toLocaleDateString("en-us",{timeZone:"UTC"})),9,eT)],8,Zw),q("div",tT,[q("div",nT,[q("button",{class:"btn btn-icon",onClick:Dn(_=>a(p),["prevent"])},[sT,St(" View ")],8,rT),q("button",{class:"btn btn-icon",onClick:Dn(_=>c(p),["prevent"])},[oT,St(" Clone ")],8,iT)]),q("button",{class:"btn btn-icon btn-warn",onClick:Dn(_=>l(p),["prevent"])},lT,8,aT)])])]))),128))]))])):Gp("",!0)}}},hT=hs(uT,[["__scopeId","data-v-bc17e848"]]),ni=mw({history:KI("/disc-golf-scorecard/"),routes:[{path:"/",name:"home",component:hT},{path:"/play",name:"play",component:()=>ws(()=>import("./PlayView-P0XZJBuc.js"),__vite__mapDeps([0,1]))},{path:"/account",name:"account",component:()=>ws(()=>import("./AccountView-CIVxGRif.js"),__vite__mapDeps([2,3]))},{path:"/log-in",name:"log-in",component:()=>ws(()=>import("./LoginView-CpcReG_n.js"),__vite__mapDeps([4,5,6,7]))},{path:"/sign-up",name:"sign-up",component:()=>ws(()=>import("./SignupView-BZkc8S4w.js"),__vite__mapDeps([8,5,6,9]))},{path:"/reset-password",name:"reset-password",component:()=>ws(()=>import("./ResetPasswordView-gj0lGPjm.js"),__vite__mapDeps([10,11]))}]});var yd={};/**
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
 */const pg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new fT;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pT=function(t){const e=pg(t);return gg.encodeByteArray(e,!0)},No=function(t){return pT(t).replace(/\./g,"")},mg=function(t){try{return gg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mT=()=>gT().__FIREBASE_DEFAULTS__,_T=()=>{if(typeof process>"u"||typeof yd>"u")return;const t=yd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mg(t[1]);return e&&JSON.parse(e)},wa=()=>{try{return mT()||_T()||yT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_g=t=>{var e,n;return(n=(e=wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vT=t=>{const e=_g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yg=()=>{var t;return(t=wa())===null||t===void 0?void 0:t.config},vg=t=>{var e;return(e=wa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ET{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function IT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[No(JSON.stringify(n)),No(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function TT(){var t;const e=(t=wa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ST(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PT(){return!TT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eg(){try{return typeof indexedDB=="object"}catch{return!1}}function bT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const CT="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CT,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gn(s,a,r)}}function kT(t,e){return t.replace(DT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DT=/\{\$([^}]+)}/g;function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vd(i)&&vd(o)){if(!Vo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function NT(t,e){const n=new VT(t,e);return n.subscribe.bind(n)}class VT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gc),s.error===void 0&&(s.error=gc),s.complete===void 0&&(s.complete=gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class MT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ET;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FT(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LT(t){return t===Zn?void 0:t}function FT(t){return t.instantiationMode==="EAGER"}/**
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
 */class UT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const BT={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},$T=oe.INFO,jT={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},qT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=$T,this._logHandler=qT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const HT=(t,e)=>e.some(n=>t instanceof n);let Ed,Id;function KT(){return Ed||(Ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WT(){return Id||(Id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ig=new WeakMap,el=new WeakMap,wg=new WeakMap,mc=new WeakMap,eu=new WeakMap;function zT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ig.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function GT(t){if(el.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QT(t){tl=t(tl)}function JT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return wg.set(r,e.sort?e.sort():[e]),Mn(r)}:WT().includes(t)?function(...e){return t.apply(_c(this),e),Mn(Ig.get(this))}:function(...e){return Mn(t.apply(_c(this),e))}}function YT(t){return typeof t=="function"?JT(t):(t instanceof IDBTransaction&&GT(t),HT(t,KT())?new Proxy(t,tl):t)}function Mn(t){if(t instanceof IDBRequest)return zT(t);if(mc.has(t))return mc.get(t);const e=YT(t);return e!==t&&(mc.set(t,e),eu.set(e,t)),e}const _c=t=>eu.get(t);function XT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ZT=["get","getKey","getAll","getAllKeys","count"],eA=["put","add","delete","clear"],yc=new Map;function wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=eA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return yc.set(e,i),i}QT(t=>({...t,get:(e,n,r)=>wd(e,n)||t.get(e,n,r),has:(e,n)=>!!wd(e,n)||t.has(e,n)}));/**
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
 */class tA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",Td="0.10.0";/**
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
 */const pr=new Zl("@firebase/app"),rA="@firebase/app-compat",sA="@firebase/analytics-compat",iA="@firebase/analytics",oA="@firebase/app-check-compat",aA="@firebase/app-check",cA="@firebase/auth",lA="@firebase/auth-compat",uA="@firebase/database",hA="@firebase/database-compat",dA="@firebase/functions",fA="@firebase/functions-compat",pA="@firebase/installations",gA="@firebase/installations-compat",mA="@firebase/messaging",_A="@firebase/messaging-compat",yA="@firebase/performance",vA="@firebase/performance-compat",EA="@firebase/remote-config",IA="@firebase/remote-config-compat",wA="@firebase/storage",TA="@firebase/storage-compat",AA="@firebase/firestore",RA="@firebase/firestore-compat",SA="firebase",PA="10.10.0";/**
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
 */const rl="[DEFAULT]",bA={[nl]:"fire-core",[rA]:"fire-core-compat",[iA]:"fire-analytics",[sA]:"fire-analytics-compat",[aA]:"fire-app-check",[oA]:"fire-app-check-compat",[cA]:"fire-auth",[lA]:"fire-auth-compat",[uA]:"fire-rtdb",[hA]:"fire-rtdb-compat",[dA]:"fire-fn",[fA]:"fire-fn-compat",[pA]:"fire-iid",[gA]:"fire-iid-compat",[mA]:"fire-fcm",[_A]:"fire-fcm-compat",[yA]:"fire-perf",[vA]:"fire-perf-compat",[EA]:"fire-rc",[IA]:"fire-rc-compat",[wA]:"fire-gcs",[TA]:"fire-gcs-compat",[AA]:"fire-fst",[RA]:"fire-fst-compat","fire-js":"fire-js",[SA]:"fire-js-all"};/**
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
 */const xo=new Map,CA=new Map,sl=new Map;function Ad(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(sl.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;sl.set(e,t);for(const n of xo.values())Ad(n,t);for(const n of CA.values())Ad(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t.settings!==void 0}/**
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
 */const kA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Ti("app","Firebase",kA);/**
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
 */class DA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=PA;function Tg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(n||(n=yg()),!n)throw Ln.create("no-options");const i=xo.get(s);if(i){if(Vo(n,i.options)&&Vo(r,i.config))return i;throw Ln.create("duplicate-app",{appName:s})}const o=new UT(s);for(const c of sl.values())o.addComponent(c);const a=new DA(n,r,o);return xo.set(s,a),a}function Ag(t=rl){const e=xo.get(t);if(!e&&t===rl&&yg())return Tg();if(!e)throw Ln.create("no-app",{appName:t});return e}function Fn(t,e,n){var r;let s=(r=bA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}ts(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const OA="firebase-heartbeat-database",NA=1,ri="firebase-heartbeat-store";let vc=null;function Rg(){return vc||(vc=XT(OA,NA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),vc}async function VA(t){try{const n=(await Rg()).transaction(ri),r=await n.objectStore(ri).get(Sg(t));return await n.done,r}catch(e){if(e instanceof gn)pr.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Rd(t,e){try{const r=(await Rg()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,Sg(t)),await r.done}catch(n){if(n instanceof gn)pr.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function Sg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xA=1024,MA=30*24*60*60*1e3;class LA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=MA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sd(),{heartbeatsToSend:r,unsentEntries:s}=FA(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sd(){return new Date().toISOString().substring(0,10)}function FA(t,e=xA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class UA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?bT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pd(t){return No(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BA(t){ts(new fr("platform-logger",e=>new tA(e),"PRIVATE")),ts(new fr("heartbeat",e=>new LA(e),"PRIVATE")),Fn(nl,Td,t),Fn(nl,Td,"esm2017"),Fn("fire-js","")}BA("");var $A="firebase",jA="10.10.0";/**
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
 */Fn($A,jA,"app");function nu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Pg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qA=Pg,bg=new Ti("auth","Firebase",Pg());/**
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
 */const Mo=new Zl("@firebase/auth");function HA(t,...e){Mo.logLevel<=oe.WARN&&Mo.warn(`Auth (${ds}): ${t}`,...e)}function mo(t,...e){Mo.logLevel<=oe.ERROR&&Mo.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw ru(t,...e)}function Wt(t,...e){return ru(t,...e)}function Cg(t,e,n){const r=Object.assign(Object.assign({},qA()),{[e]:n});return new Ti("auth","Firebase",r).create(e,{appName:t.name})}function zt(t){return Cg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bg.create(t,...e)}function K(t,e,...n){if(!t)throw ru(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function un(t,e){t||rn(e)}/**
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
 */function il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KA(){return bd()==="http:"||bd()==="https:"}function bd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KA()||AT()||"connection"in navigator)?navigator.onLine:!0}function zA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=wT()||RT()}get(){return WA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function su(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QA=new Ri(3e4,6e4);function mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mt(t,e,n,r,s={}){return Dg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kg.fetch()(Og(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Dg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const s=new YA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Cg(t,u,l);Nt(t,u)}}catch(s){if(s instanceof gn)throw s;Nt(t,"network-request-failed",{message:String(s)})}}async function Si(t,e,n,r,s={}){const i=await Mt(t,e,n,r,s);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Og(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?su(t.config,s):`${t.config.apiScheme}://${s}`}function JA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),QA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Wt(t,e,r);return s.customData._tokenResponse=n,s}function Cd(t){return t!==void 0&&t.enterprise!==void 0}class XA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZA(t,e){return Mt(t,"GET","/v2/recaptchaConfig",mn(t,e))}/**
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
 */async function e0(t,e){return Mt(t,"POST","/v1/accounts:delete",e)}async function Ng(t,e){return Mt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t0(t,e=!1){const n=xe(t),r=await n.getIdToken(e),s=iu(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qs(Ec(s.auth_time)),issuedAtTime:qs(Ec(s.iat)),expirationTime:qs(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=mg(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kd(t){const e=iu(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&n0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class r0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gr(t,Ng(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vg(i.providerUserInfo):[],a=i0(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ol(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function s0(t){const e=xe(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vg(t){return t.map(e=>{var{providerId:n}=e,r=nu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function o0(t,e){const n=await Dg(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Og(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a0(t,e){return Mt(t,"POST","/v2/accounts:revokeToken",mn(t,e))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=kd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await o0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function En(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ol(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t0(this,e)}reload(){return s0(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await gr(this,e0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:B,isAnonymous:W,providerData:M,stsTokenManager:re}=n;K(b&&re,e,"internal-error");const Q=Kr.fromJSON(this.name,re);K(typeof b=="string",e,"internal-error"),En(h,e.name),En(d,e.name),K(typeof B=="boolean",e,"internal-error"),K(typeof W=="boolean",e,"internal-error"),En(p,e.name),En(_,e.name),En(R,e.name),En(S,e.name),En(E,e.name),En(A,e.name);const J=new sn({uid:b,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:W,photoURL:_,phoneNumber:p,tenantId:R,stsTokenManager:Q,createdAt:E,lastLoginAt:A});return M&&Array.isArray(M)&&(J.providerData=M.map(de=>Object.assign({},de))),S&&(J._redirectEventId=S),J}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Vg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Kr;a.updateFromIdToken(r);const c=new sn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ol(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Dd=new Map;function on(t){un(t instanceof Function,"Expected a class definition");let e=Dd.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dd.set(t,e),e)}/**
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
 */class xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xg.type="NONE";const Od=xg;/**
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
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_o(this.userKey,s.apiKey,i),this.fullPersistenceKey=_o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(on(Od),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||on(Od);const o=_o(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=sn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wr(i,e,r))}}/**
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
 */function Nd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bg(e))return"Blackberry";if($g(e))return"Webos";if(ou(e))return"Safari";if((e.includes("chrome/")||Lg(e))&&!e.includes("edge/"))return"Chrome";if(Ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mg(t=Ve()){return/firefox\//i.test(t)}function ou(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lg(t=Ve()){return/crios\//i.test(t)}function Fg(t=Ve()){return/iemobile/i.test(t)}function Ug(t=Ve()){return/android/i.test(t)}function Bg(t=Ve()){return/blackberry/i.test(t)}function $g(t=Ve()){return/webos/i.test(t)}function Ta(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c0(t=Ve()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function l0(){return ST()&&document.documentMode===10}function jg(t=Ve()){return Ta(t)||Ug(t)||$g(t)||Bg(t)||/windows phone/i.test(t)||Fg(t)}function u0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qg(t,e=[]){let n;switch(t){case"Browser":n=Nd(Ve());break;case"Worker":n=`${Nd(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class h0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function d0(t,e={}){return Mt(t,"GET","/v2/passwordPolicy",mn(t,e))}/**
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
 */const f0=6;class p0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class g0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vd(this),this.idTokenSubscription=new Vd(this),this.beforeStateQueue=new h0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ng(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(zt(this));const n=e?xe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d0(this),n=new p0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await a0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wn(t){return xe(t)}class Vd{constructor(e){this.auth=e,this.observer=null,this.addObserver=NT(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function m0(t){Aa=t}function Hg(t){return Aa.loadJS(t)}function _0(){return Aa.recaptchaEnterpriseScript}function y0(){return Aa.gapiScript}function v0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const E0="recaptcha-enterprise",I0="NO_RECAPTCHA";class w0{constructor(e){this.type=E0,this.auth=Wn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ZA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new XA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Cd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(I0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Cd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_0();c.length!==0&&(c+=a),Hg(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xd(t,e,n,r=!1){const s=new w0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fo(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await xd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function T0(t,e){const n=tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vo(i,e??{}))return s;Nt(s,"already-initialized")}return n.initialize({options:e})}function A0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R0(t,e,n){const r=Wn(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Kg(e),{host:o,port:a}=S0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||P0()}function Kg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S0(t){const e=Kg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Md(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Md(o)}}}function Md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function b0(t,e){return Mt(t,"POST","/v1/accounts:update",e)}async function C0(t,e){return Mt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function k0(t,e){return Si(t,"POST","/v1/accounts:signInWithPassword",mn(t,e))}async function D0(t,e){return Mt(t,"POST","/v1/accounts:sendOobCode",mn(t,e))}async function O0(t,e){return D0(t,e)}/**
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
 */async function N0(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}async function V0(t,e){return Si(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}/**
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
 */class si extends au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new si(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new si(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fo(e,n,"signInWithPassword",k0);case"emailLink":return N0(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fo(e,r,"signUpPassword",C0);case"emailLink":return V0(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zr(t,e){return Si(t,"POST","/v1/accounts:signInWithIdp",mn(t,e))}/**
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
 */const x0="http://localhost";class mr extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=nu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:x0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */function M0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function L0(t){const e=Cs(ks(t)).link,n=e?Cs(ks(e)).deep_link_id:null,r=Cs(ks(t)).deep_link_id;return(r?Cs(ks(r)).link:null)||r||n||e||t}class cu{constructor(e){var n,r,s,i,o,a;const c=Cs(ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=M0((s=c.mode)!==null&&s!==void 0?s:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=L0(e);try{return new cu(n)}catch{return null}}}/**
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
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(e,n){return si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cu.parseLink(n);return K(r,"argument-error"),si._fromEmailAndCode(e,r.code,r.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends Pi{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class bn extends Pi{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class Cn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
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
 */async function F0(t,e){return Si(t,"POST","/v1/accounts:signUp",mn(t,e))}/**
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
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=Ld(r);return new _r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ld(r);return new _r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uo extends gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uo(e,n,r,s)}}function zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,i,e,r):i})}async function U0(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
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
 */async function Gg(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(zt(r));const s="reauthenticate";try{const i=await gr(t,zg(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=iu(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),_r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),i}}/**
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
 */async function Qg(t,e,n=!1){if(bt(t.app))return Promise.reject(zt(t));const r="signIn",s=await zg(t,r,e),i=await _r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function B0(t,e){return Qg(Wn(t),e)}async function $0(t,e){return Gg(xe(t),e)}/**
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
 */function j0(t,e,n){var r;K(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Jg(t){const e=Wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q0(t,e,n){const r=Wn(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&j0(r,s,n),await Fo(r,s,"getOobCode",O0)}async function H0(t,e,n){if(bt(t.app))return Promise.reject(zt(t));const r=Wn(t),o=await Fo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",F0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Jg(t),c}),a=await _r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function K0(t,e,n){return bt(t.app)?Promise.reject(zt(t)):B0(xe(t),Tr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jg(t),r})}/**
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
 */async function W0(t,e){return Mt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Fd(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gr(r,W0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function z0(t,e){const n=xe(t);return bt(n.auth.app)?Promise.reject(zt(n.auth)):Yg(n,e,null)}function G0(t,e){return Yg(xe(t),null,e)}async function Yg(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await gr(t,b0(r,i));await t._updateTokensIfNecessary(o,!0)}function Q0(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function J0(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function Y0(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function X0(t){return xe(t).signOut()}async function Z0(t){return xe(t).delete()}const Bo="__sak";/**
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
 */class Xg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function eR(){const t=Ve();return ou(t)||Ta(t)}const tR=1e3,nR=10;class Zg extends Xg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eR()&&u0(),this.fallbackToPolling=jg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);l0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zg.type="LOCAL";const rR=Zg;/**
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
 */class em extends Xg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}em.type="SESSION";const tm=em;/**
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
 */function sR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await sR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
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
 */function lu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=lu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function oR(t){Gt().location.href=t}/**
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
 */function nm(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function aR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lR(){return nm()?self:null}/**
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
 */const rm="firebaseLocalStorageDb",uR=1,$o="firebaseLocalStorage",sm="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function hR(){const t=indexedDB.deleteDatabase(rm);return new bi(t).toPromise()}function al(){const t=indexedDB.open(rm,uR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:sm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await hR(),e(await al()))})})}async function Ud(t,e,n){const r=Sa(t,!0).put({[sm]:e,value:n});return new bi(r).toPromise()}async function dR(t,e){const n=Sa(t,!1).get(e),r=await new bi(n).toPromise();return r===void 0?null:r.value}function Bd(t,e){const n=Sa(t,!0).delete(e);return new bi(n).toPromise()}const fR=800,pR=3;class im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(lR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aR(),!this.activeServiceWorker)return;this.sender=new iR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await al();return await Ud(e,Bo,"1"),await Bd(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ud(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sa(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}im.type="LOCAL";const gR=im;new Ri(3e4,6e4);/**
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
 */function mR(t,e){return e?on(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _R(t){return Qg(t.auth,new uu(t),t.bypassAuthState)}function yR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Gg(n,new uu(t),t.bypassAuthState)}async function vR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),U0(n,new uu(t),t.bypassAuthState)}/**
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
 */class om{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _R;case"linkViaPopup":case"linkViaRedirect":return vR;case"reauthViaPopup":case"reauthViaRedirect":return yR;default:Nt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ER=new Ri(2e3,1e4);class Fr extends om{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ER.get())};e()}}Fr.currentPopupAction=null;/**
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
 */const IR="pendingRedirect",yo=new Map;class wR extends om{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await TR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TR(t,e){const n=SR(e),r=RR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function AR(t,e){yo.set(t._key(),e)}function RR(t){return on(t._redirectPersistence)}function SR(t){return _o(IR,t.config.apiKey,t.name)}async function PR(t,e,n=!1){if(bt(t.app))return Promise.reject(zt(t));const r=Wn(t),s=mR(r,e),o=await new wR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const bR=10*60*1e3;class CR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!am(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bR&&this.cachedEventUids.clear(),this.cachedEventUids.has($d(e))}saveEventToCache(e){this.cachedEventUids.add($d(e)),this.lastProcessedEventTime=Date.now()}}function $d(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function am({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return am(t);default:return!1}}/**
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
 */async function DR(t,e={}){return Mt(t,"GET","/v1/projects",e)}/**
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
 */const OR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DR(t);for(const n of e)try{if(xR(n))return}catch{}Nt(t,"unauthorized-domain")}function xR(t){const e=il(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NR.test(n))return!1;if(OR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MR=new Ri(3e4,6e4);function jd(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LR(t){return new Promise((e,n)=>{var r,s,i;function o(){jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jd(),n(Wt(t,"network-request-failed"))},timeout:MR.get()})}if(!((s=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const a=v0("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},Hg(`${y0()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vo=null,e})}let vo=null;function FR(t){return vo=vo||LR(t),vo}/**
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
 */const UR=new Ri(5e3,15e3),BR="__/auth/iframe",$R="emulator/auth/iframe",jR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?su(e,$R):`https://${t.config.authDomain}/${BR}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=qR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function KR(t){const e=await FR(t),n=Gt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:HR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Gt().setTimeout(()=>{i(o)},UR.get());function c(){Gt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const WR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zR=500,GR=600,QR="_blank",JR="http://localhost";class qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YR(t,e,n,r=zR,s=GR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WR),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ve().toLowerCase();n&&(a=Lg(l)?QR:n),Mg(l)&&(e=e||JR,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(c0(l)&&a!=="_self")return XR(e||"",a),new qd(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new qd(h)}function XR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZR="__/auth/handler",eS="emulator/auth/handler",tS=encodeURIComponent("fac");async function Hd(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof Wg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Pi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${tS}=${encodeURIComponent(c)}`:"";return`${nS(t)}?${Ai(a).slice(1)}${l}`}function nS({config:t}){return t.emulator?su(t,eS):`https://${t.authDomain}/${ZR}`}/**
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
 */const Ic="webStorageSupport";class rS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tm,this._completeRedirectFn=PR,this._overrideRedirectResult=AR}async _openPopup(e,n,r,s){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Hd(e,n,r,il(),s);return YR(e,o,lu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hd(e,n,r,il(),s);return oR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KR(e),r=new CR(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ic];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jg()||ou()||Ta()}}const sS=rS;var Kd="@firebase/auth",Wd="1.7.0";/**
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
 */class iS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aS(t){ts(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qg(t)},l=new g0(r,s,i,c);return A0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new fr("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(r=>new iS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(Kd,Wd,oS(t)),Fn(Kd,Wd,"esm2017")}/**
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
 */const cS=5*60,lS=vg("authIdTokenMaxAge")||cS;let zd=null;const uS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lS)return;const s=n==null?void 0:n.token;zd!==s&&(zd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hS(t=Ag()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=T0(t,{popupRedirectResolver:sS,persistence:[gR,rR,tm]}),r=vg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=uS(i.toString());J0(n,o,()=>o(n.currentUser)),Q0(n,a=>o(a))}}const s=_g("auth");return s&&R0(n,`http://${s}`),n}function dS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}m0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Wt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aS("Browser");var fS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,hu=hu||{},X=fS||self;function Pa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pS(t){return Object.prototype.hasOwnProperty.call(t,wc)&&t[wc]||(t[wc]=++gS)}var wc="closure_uid_"+(1e9*Math.random()>>>0),gS=0;function mS(t,e,n){return t.call.apply(t.bind,arguments)}function _S(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=mS:nt=_S,nt.apply(null,arguments)}function eo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function zn(){this.s=this.s,this.o=this.o}var yS=0;zn.prototype.s=!1;zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yS!=0)&&pS(this)};zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function du(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Gd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var vS=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};X.addEventListener("test",n,e),X.removeEventListener("test",n,e)}catch{}return t}();function ii(t){return/^[\s\xa0]*$/.test(t)}function ba(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function qt(t){return ba().indexOf(t)!=-1}function fu(t){return fu[" "](t),t}fu[" "]=function(){};function ES(t,e){var n=dP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var IS=qt("Opera"),ns=qt("Trident")||qt("MSIE"),lm=qt("Edge"),cl=lm||ns,um=qt("Gecko")&&!(ba().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge"))&&!(qt("Trident")||qt("MSIE"))&&!qt("Edge"),wS=ba().toLowerCase().indexOf("webkit")!=-1&&!qt("Edge");function hm(){var t=X.document;return t?t.documentMode:void 0}var ll;e:{var Tc="",Ac=function(){var t=ba();if(um)return/rv:([^\);]+)(\)|;)/.exec(t);if(lm)return/Edge\/([\d\.]+)/.exec(t);if(ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wS)return/WebKit\/(\S+)/.exec(t);if(IS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ac&&(Tc=Ac?Ac[1]:""),ns){var Rc=hm();if(Rc!=null&&Rc>parseFloat(Tc)){ll=String(Rc);break e}}ll=Tc}var ul;if(X.document&&ns){var Qd=hm();ul=Qd||parseInt(ll,10)||void 0}else ul=void 0;var TS=ul;function oi(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(um){e:{try{fu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oi.$.h.call(this)}}qe(oi,rt);var AS={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),RS=0;function SS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++RS,this.fa=this.ia=!1}function Ca(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function dm(t){const e={};for(const n in t)e[n]=t[n];return e}const Jd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Jd.length;i++)n=Jd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ka(t){this.src=t,this.g={},this.h=0}ka.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new SS(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function hl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=cm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var gu="closure_lm_"+(1e6*Math.random()|0),Sc={};function pm(t,e,n,r,s){if(r&&r.once)return mm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)pm(t,e[i],n,r,s);return null}return n=yu(n),t&&t[ki]?t.O(e,n,Ci(r)?!!r.capture:!!r,s):gm(t,e,n,!1,r,s)}function gm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ci(s)?!!s.capture:!!s,a=_u(t);if(a||(t[gu]=a=new ka(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=bS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ym(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bS(){function t(n){return e.call(t.src,t.listener,n)}const e=CS;return t}function mm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)mm(t,e[i],n,r,s);return null}return n=yu(n),t&&t[ki]?t.P(e,n,Ci(r)?!!r.capture:!!r,s):gm(t,e,n,!0,r,s)}function _m(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)_m(t,e[i],n,r,s);else r=Ci(r)?!!r.capture:!!r,n=yu(n),t&&t[ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dl(i,n,r,s),-1<n&&(Ca(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dl(e,n,r,s)),(n=-1<t?e[t]:null)&&mu(n))}function mu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ki])hl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ym(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_u(e))?(hl(n,t),n.h==0&&(n.src=null,e[gu]=null)):Ca(t)}}}function ym(t){return t in Sc?Sc[t]:Sc[t]="on"+t}function CS(t,e){if(t.fa)t=!0;else{e=new oi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mu(t),t=n.call(r,e)}return t}function _u(t){return t=t[gu],t instanceof ka?t:null}var Pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function yu(t){return typeof t=="function"?t:(t[Pc]||(t[Pc]=function(e){return t.handleEvent(e)}),t[Pc])}function je(){zn.call(this),this.i=new ka(this),this.S=this,this.J=null}qe(je,zn);je.prototype[ki]=!0;je.prototype.removeEventListener=function(t,e,n,r){_m(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),fm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=to(o,r,!0,e)&&s}if(o=e.g=t,s=to(o,r,!0,e)&&s,s=to(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=to(o,r,!1,e)&&s}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ca(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function to(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&hl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var vu=X.JSON.stringify;class kS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function DS(){var t=Eu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OS{constructor(){this.h=this.g=null}add(e,n){const r=vm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vm=new kS(()=>new NS,t=>t.reset());class NS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xS(t){X.setTimeout(()=>{throw t},0)}let ai,ci=!1,Eu=new OS,Em=()=>{const t=X.Promise.resolve(void 0);ai=()=>{t.then(MS)}};var MS=()=>{for(var t;t=DS();){try{t.h.call(t.g)}catch(n){xS(n)}var e=vm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ci=!1};function Da(t,e){je.call(this),this.h=t||1,this.g=e||X,this.j=nt(this.qb,this),this.l=Date.now()}qe(Da,je);N=Da.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(Iu(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Iu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Da.$.N.call(this),Iu(this),delete this.g};function wu(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Im(t){t.g=wu(()=>{t.g=null,t.i&&(t.i=!1,Im(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class LS extends zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Im(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(t){zn.call(this),this.h=t,this.g={}}qe(li,zn);var Yd=[];function wm(t,e,n,r){Array.isArray(n)||(n&&(Yd[0]=n.toString()),n=Yd);for(var s=0;s<n.length;s++){var i=pm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Tm(t){pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&mu(e)},t),t.g={}}li.prototype.N=function(){li.$.N.call(this),Tm(this)};li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oa(){this.g=!0}Oa.prototype.Ea=function(){this.g=!1};function FS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function US(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ur(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$S(t,n)+(r?" "+r:"")})}function BS(t,e){t.info(function(){return"TIMEOUT: "+e})}Oa.prototype.info=function(){};function $S(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return vu(n)}catch{return e}}var Ar={},Xd=null;function Na(){return Xd=Xd||new je}Ar.Ta="serverreachability";function Am(t){rt.call(this,Ar.Ta,t)}qe(Am,rt);function ui(t){const e=Na();Ge(e,new Am(e))}Ar.STAT_EVENT="statevent";function Rm(t,e){rt.call(this,Ar.STAT_EVENT,t),this.stat=e}qe(Rm,rt);function at(t){const e=Na();Ge(e,new Rm(e,t))}Ar.Ua="timingevent";function Sm(t,e){rt.call(this,Ar.Ua,t),this.size=e}qe(Sm,rt);function Di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Va={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Tu(){}Tu.prototype.h=null;function Zd(t){return t.h||(t.h=t.i())}function bm(){}var Oi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Au(){rt.call(this,"d")}qe(Au,rt);function Ru(){rt.call(this,"c")}qe(Ru,rt);var fl;function xa(){}qe(xa,Tu);xa.prototype.g=function(){return new XMLHttpRequest};xa.prototype.i=function(){return{}};fl=new xa;function Ni(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new li(this),this.P=jS,t=cl?125:void 0,this.V=new Da(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Cm}function Cm(){this.i=null,this.g="",this.h=!1}var jS=45e3,km={},pl={};N=Ni.prototype;N.setTimeout=function(t){this.P=t};function gl(t,e,n){t.L=1,t.A=La(hn(e)),t.u=n,t.S=!0,Dm(t,null)}function Dm(t,e){t.G=Date.now(),Vi(t),t.B=hn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Um(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Cm,t.g=o_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new LS(nt(t.Pa,t,t.g),t.O)),wm(t.U,t.g,"readystatechange",t.nb),e=t.I?dm(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ui(),FS(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Ht(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Ht(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||cl||this.g&&(this.h.h||this.g.ja()||rf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ui(3):ui(2)),Ma(this);var n=this.g.da();this.ca=n;t:if(Om(this)){var r=rf(this.g);t="";var s=r.length,i=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Hs(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,US(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ii(a)){var l=a;break t}}l=null}if(n=l)Ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ml(this,n);else{this.i=!1,this.s=3,at(12),sr(this),Hs(this);break e}}this.S?(Nm(this,u,o),cl&&this.i&&u==3&&(wm(this.U,this.V,"tick",this.mb),this.V.start())):(Ur(this.j,this.m,o,null),ml(this,o)),u==4&&sr(this),this.i&&!this.J&&(u==4?n_(this.l,this):(this.i=!1,Vi(this)))}else lP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),sr(this),Hs(this)}}}catch{}finally{}};function Om(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Nm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=qS(t,n),s==pl){e==4&&(t.s=4,at(14),r=!1),Ur(t.j,t.m,null,"[Incomplete Response]");break}else if(s==km){t.s=4,at(15),Ur(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ur(t.j,t.m,s,null),ml(t,s);Om(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Du(e),e.M=!0,at(11))):(Ur(t.j,t.m,n,"[Invalid Chunked Response]"),sr(t),Hs(t))}N.mb=function(){if(this.g){var t=Ht(this.g),e=this.g.ja();this.o<e.length&&(Ma(this),Nm(this,t,e),this.i&&t!=4&&Vi(this))}};function qS(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?pl:(n=Number(e.substring(n,r)),isNaN(n)?km:(r+=1,r+n>e.length?pl:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,sr(this)};function Vi(t){t.Y=Date.now()+t.P,Vm(t,t.P)}function Vm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Di(nt(t.lb,t),e)}function Ma(t){t.C&&(X.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(BS(this.j,this.B),this.L!=2&&(ui(),at(17)),sr(this),this.s=2,Hs(this)):Vm(this,this.Y-t)};function Hs(t){t.l.H==0||t.J||n_(t.l,t)}function sr(t){Ma(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Iu(t.V),Tm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ml(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_l(n.i,t))){if(!t.K&&_l(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ho(n),$a(n);else break e;ku(n),at(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Di(nt(n.ib,n),6e3));if(1>=jm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ir(n,11)}else if((t.K||n.g==t)&&Ho(n),!ii(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Su(i,i.h),i.h=null))}if(r.F){const R=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,we(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=i_(r,r.J?r.pa:null,r.Y),o.K){qm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ma(a),Vi(a)),r.g=o}else e_(r);0<n.j.length&&ja(n)}else l[0]!="stop"&&l[0]!="close"||ir(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ir(n,7):Cu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ui(4)}catch{}}function HS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KS(t),r=HS(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Mm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function dr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof dr){this.h=t.h,jo(this,t.j),this.s=t.s,this.g=t.g,qo(this,t.m),this.l=t.l;var e=t.i,n=new hi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ef(this,n),this.o=t.o}else t&&(e=String(t).match(Mm))?(this.h=!1,jo(this,e[1]||"",!0),this.s=Ds(e[2]||""),this.g=Ds(e[3]||"",!0),qo(this,e[4]),this.l=Ds(e[5]||"",!0),ef(this,e[6]||"",!0),this.o=Ds(e[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Os(e,tf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Os(e,tf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Os(n,n.charAt(0)=="/"?QS:GS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Os(n,YS)),t.join("")};function hn(t){return new dr(t)}function jo(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ef(t,e,n){e instanceof hi?(t.i=e,XS(t.i,t.h)):(n||(e=Os(e,JS)),t.i=new hi(e,t.h))}function we(t,e,n){t.i.set(e,n)}function La(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var tf=/[#\/\?@]/g,GS=/[#\?:]/g,QS=/[#\?]/g,JS=/[#\?@]/g,YS=/#/g;function hi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&WS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=hi.prototype;N.add=function(t,e){Gn(this),this.i=null,t=fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lm(t,e){Gn(t),e=fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fm(t,e){return Gn(t),e=fs(t,e),t.g.has(e)}N.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){Gn(this);let e=[];if(typeof t=="string")Fm(this,t)&&(e=e.concat(this.g.get(fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Gn(this),this.i=null,t=fs(this,t),Fm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Um(t,e,n){Lm(t,e),0<n.length&&(t.i=null,t.g.set(fs(t,e),du(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XS(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Lm(this,r),Um(this,s,n))},t)),t.j=e}var ZS=class{constructor(t,e){this.g=t,this.map=e}};function Bm(t){this.l=t||eP,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eP=10;function $m(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jm(t){return t.h?1:t.g?t.g.size:0}function _l(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Su(t,e){t.g?t.g.add(e):t.h=e}function qm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Bm.prototype.cancel=function(){if(this.i=Hm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return du(t.i)}var tP=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function nP(){this.g=new tP}function rP(t,e,n){const r=n||"";try{xm(t,function(s,i){let o=s;Ci(s)&&(o=vu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function sP(t,e){const n=new Oa;if(X.Image){const r=new Image;r.onload=eo(no,n,r,"TestLoadImage: loaded",!0,e),r.onerror=eo(no,n,r,"TestLoadImage: error",!1,e),r.onabort=eo(no,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=eo(no,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function no(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Fa(t){this.l=t.ec||null,this.j=t.ob||!1}qe(Fa,Tu);Fa.prototype.g=function(){return new Ua(this.l,this.j)};Fa.prototype.i=function(t){return function(){return t}}({});function Ua(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Ua,je);var Pu=0;N=Ua.prototype;N.open=function(t,e){if(this.readyState!=Pu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=Pu};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Km(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Km(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xi(this):di(this),this.readyState==3&&Km(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,xi(this))};N.Ya=function(t){this.g&&(this.response=t,xi(this))};N.ka=function(){this.g&&xi(this)};function xi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iP=X.JSON.parse;function Pe(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wm,this.L=this.M=!1}qe(Pe,je);var Wm="",oP=/^https?$/i,aP=["POST","PUT"];N=Pe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fl.g(),this.C=this.u?Zd(this.u):Zd(fl),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){nf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=cm(aP,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qm(this),0<this.B&&((this.L=cP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=wu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){nf(this,i)}};function cP(t){return ns&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof hu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function nf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zm(t),Ba(t)}function zm(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ba(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ba(this,!0)),Pe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Gm(this):this.kb())};N.kb=function(){Gm(this)};function Gm(t){if(t.h&&typeof hu<"u"&&(!t.C[1]||Ht(t)!=4||t.da()!=2)){if(t.v&&Ht(t)==4)wu(t.La,0,t);else if(Ge(t,"readystatechange"),Ht(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Mm)[1]||null;!s&&X.self&&X.self.location&&(s=X.self.location.protocol.slice(0,-1)),r=!oP.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<Ht(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",zm(t)}}finally{Ba(t)}}}}function Ba(t,e){if(t.g){Qm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Qm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Ht(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iP(e)}};function rf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Wm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function lP(t){const e={};t=(t.g&&2<=Ht(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ii(t[r]))continue;var n=VS(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}PS(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jm(t){let e="";return pu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ym(t){this.Ga=0,this.j=[],this.l=new Oa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=As("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=As("baseRetryDelayMs",5e3,t),this.hb=As("retryDelaySeedMs",1e4,t),this.eb=As("forwardChannelMaxRetries",2,t),this.xa=As("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Bm(t&&t.concurrentRequestLimit),this.Ja=new nP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Ym.prototype;N.ra=8;N.H=1;function Cu(t){if(Xm(t),t.H==3){var e=t.W++,n=hn(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),Mi(t,n),e=new Ni(t,t.l,e),e.L=2,e.A=La(hn(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.A,n=!0),n||(e.g=o_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Vi(e)}s_(t)}function $a(t){t.g&&(Du(t),t.g.cancel(),t.g=null)}function Xm(t){$a(t),t.u&&(X.clearTimeout(t.u),t.u=null),Ho(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function ja(t){if(!$m(t.i)&&!t.m){t.m=!0;var e=t.Na;ai||Em(),ci||(ai(),ci=!0),Eu.add(e,t),t.C=0}}function uP(t,e){return jm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Di(nt(t.Na,t,e),r_(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ni(this,this.l,t);let i=this.s;if(this.U&&(i?(i=dm(i),fm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zm(this,s,e),n=hn(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Mi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Jm(i)))+"&"+e:this.o&&bu(n,this.o,i)),Su(this.i,s),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),s.aa=!0,gl(s,n,null)):gl(s,n,e),this.H=2}}else this.H==3&&(t?sf(this,t):this.j.length==0||$m(this.i)||sf(this))};function sf(t,e){var n;e?n=e.m:n=t.W++;const r=hn(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),Mi(t,r),t.o&&t.s&&bu(r,t.o,t.s),n=new Ni(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Zm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Su(t.i,n),gl(n,r,e)}function Mi(t,e){t.na&&pu(t.na,function(n,r){we(e,r,n)}),t.h&&xm({},function(n,r){we(e,r,n)})}function Zm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{rP(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function e_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ai||Em(),ci||(ai(),ci=!0),Eu.add(e,t),t.A=0}}function ku(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Di(nt(t.Ma,t),r_(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,t_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Di(nt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,at(10),$a(this),t_(this))};function Du(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function t_(t){t.g=new Ni(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=hn(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),Mi(t,e),t.o&&t.s&&bu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=La(hn(e)),n.u=null,n.S=!0,Dm(n,t)}N.ib=function(){this.v!=null&&(this.v=null,$a(this),ku(this),at(19))};function Ho(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function n_(t,e){var n=null;if(t.g==e){Ho(t),Du(t),t.g=null;var r=2}else if(_l(t.i,e))n=e.F,qm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Na(),Ge(r,new Sm(r,n)),ja(t)}else e_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&uP(t,e)||r==2&&ku(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}}function r_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ir(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=nt(t.pb,t);n||(n=new dr("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||jo(n,"https"),La(n)),sP(n.toString(),r)}else at(2);t.H=0,t.h&&t.h.za(e),s_(t),Xm(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),at(2)):(this.l.info("Failed to ping google.com"),at(1))};function s_(t){if(t.H=0,t.ma=[],t.h){const e=Hm(t.i);(e.length!=0||t.j.length!=0)&&(Gd(t.ma,e),Gd(t.ma,t.j),t.i.i.length=0,du(t.j),t.j.length=0),t.h.ya()}}function i_(t,e,n){var r=n instanceof dr?hn(n):new dr(n);if(r.g!="")e&&(r.g=e+"."+r.g),qo(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new dr(null);r&&jo(i,r),e&&(i.g=e),s&&qo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),Mi(t,r),r}function o_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new Fa({ob:n})):new Pe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function a_(){}N=a_.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Ko(){if(ns&&!(10<=Number(TS)))throw Error("Environmental error: no available transport.")}Ko.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){je.call(this),this.g=new Ym(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}qe(_t,je);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;at(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=i_(t,null,t.Y),ja(t)};_t.prototype.close=function(){Cu(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vu(t),t=n);e.j.push(new ZS(e.fb++,t)),e.H==3&&ja(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,Cu(this.g),delete this.g,_t.$.N.call(this)};function c_(t){Au.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(c_,Au);function l_(){Ru.call(this),this.status=1}qe(l_,Ru);function ps(t){this.g=t}qe(ps,a_);ps.prototype.Ba=function(){Ge(this.g,"a")};ps.prototype.Aa=function(t){Ge(this.g,new c_(t))};ps.prototype.za=function(t){Ge(this.g,new l_)};ps.prototype.ya=function(){Ge(this.g,"b")};function hP(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(Vt,hP);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Vt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)bc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){bc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){bc(this,r),s=0;break}}this.h=s,this.i+=e};Vt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var dP={};function Ou(t){return-128<=t&&128>t?ES(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Kt(t){if(isNaN(t)||!isFinite(t))return Gr;if(0>t)return Ke(Kt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=yl;return new me(e,0)}function u_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(u_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kt(Math.pow(e,8)),r=Gr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Kt(Math.pow(e,i)),r=r.R(i).add(Kt(o))):(r=r.R(n),r=r.add(Kt(o)))}return r}var yl=4294967296,Gr=Ou(0),vl=Ou(1),of=Ou(16777216);N=me.prototype;N.ea=function(){if(It(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:yl+r)*e,e*=yl}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(an(this))return"0";if(It(this))return"-"+Ke(this).toString(t);for(var e=Kt(Math.pow(t,6)),n=this,r="";;){var s=zo(n,e).g;n=Wo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,an(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function an(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}N.X=function(t){return t=Wo(this,t),It(t)?-1:an(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(vl)}N.abs=function(){return It(this)?Ke(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Wo(t,e){return t.add(Ke(e))}N.R=function(t){if(an(this)||an(t))return Gr;if(It(this))return It(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(It(t))return Ke(this.R(Ke(t)));if(0>this.X(of)&&0>t.X(of))return Kt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,ro(n,2*r+2*s),n[2*r+2*s+1]+=i*c,ro(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ro(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ro(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function ro(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Rs(t,e){this.g=t,this.h=e}function zo(t,e){if(an(e))throw Error("division by zero");if(an(t))return new Rs(Gr,Gr);if(It(t))return e=zo(Ke(t),e),new Rs(Ke(e.g),Ke(e.h));if(It(e))return e=zo(t,Ke(e)),new Rs(Ke(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vl,r=e;0>=r.X(t);)n=af(n),r=af(r);var s=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!an(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Dr(r,1),n=Dr(n,1)}return e=Wo(t,s.R(e)),new Rs(s,e)}for(s=Gr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Kt(n),o=i.R(e);It(o)||0<o.X(t);)n-=r,i=Kt(n),o=i.R(e);an(i)&&(i=vl),s=s.add(i),t=Wo(t,o)}return new Rs(s,t)}N.gb=function(t){return zo(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function af(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(s,t.h)}Ko.prototype.createWebChannel=Ko.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Va.NO_ERROR=0;Va.TIMEOUT=8;Va.HTTP_ERROR=6;Pm.COMPLETE="complete";bm.EventType=Oi;Oi.OPEN="a";Oi.CLOSE="b";Oi.ERROR="c";Oi.MESSAGE="d";je.prototype.listen=je.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Kt;me.fromString=u_;var fP=function(){return new Ko},pP=function(){return Na()},Cc=Va,gP=Pm,mP=Ar,cf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},so=bm,_P=Pe,yP=Vt,Qr=me;const lf="@firebase/firestore";/**
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
 */let gs="10.10.0";/**
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
 */const yr=new Zl("@firebase/firestore");function Ss(){return yr.logLevel}function O(t,...e){if(yr.logLevel<=oe.DEBUG){const n=e.map(Nu);yr.debug(`Firestore (${gs}): ${t}`,...n)}}function Zt(t,...e){if(yr.logLevel<=oe.ERROR){const n=e.map(Nu);yr.error(`Firestore (${gs}): ${t}`,...n)}}function rs(t,...e){if(yr.logLevel<=oe.WARN){const n=e.map(Nu);yr.warn(`Firestore (${gs}): ${t}`,...n)}}function Nu(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Zt(e),new Error(e)}function ve(t,e){t||Y()}function te(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class h_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class EP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IP{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ln,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new h_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ze(e)}}class wP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new AP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function SP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class d_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=SP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Fe(0,0))}static max(){return new ee(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends fi{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const PP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends fi{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return PP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Te.fromString(e))}static fromName(e){return new H(Te.fromString(e).popFirst(5))}static empty(){return new H(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Te(e.slice()))}}function bP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new qn(s,H.empty(),e)}function CP(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(ee.min(),H.empty(),-1)}static max(){return new qn(ee.max(),H.empty(),-1)}}function kP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const DP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==DP)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(s=>s?T.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new T((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new T((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Vu{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ln,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ks(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=xu(r.target.error);this.V.reject(new Ks(e,s))}}static open(e,n,r,s){try{return new Vu(n,e.transaction(s,r))}catch(i){throw new Ks(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new VP(n)}}class or{constructor(e,n,r){this.name=e,this.version=n,this.p=r,or.S(Ve())===12.2&&Zt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),nr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Eg())return!1;if(or.C())return!0;const e=Ve(),n=or.S(e),r=0<n&&n<10,s=or.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Ks(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new U(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ks(e,o))},s.onupgradeneeded=i=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Vu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),T.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(O("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class NP{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return nr(this.k.delete())}}class Ks extends U{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Fi(t){return t.name==="IndexedDbTransactionError"}class VP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(O("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),nr(r)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),nr(this.store.add(e))}get(e){return nr(this.store.get(e)).next(n=>(n===void 0&&(n=null),O("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),nr(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),nr(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new T((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new T((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){O("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new T((r,s)=>{n.onerror=i=>{const o=xu(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new T((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new NP(a),l=n(a.primaryKey,a.value,c);if(l instanceof T){const u=l.catch(h=>(c.done(),T.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function nr(t){return new T((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=xu(r.target.error);n(s)}})}let uf=!1;function xu(t){const e=or.S(Ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return uf||(uf=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Mu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Mu._e=-1;function qa(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function xP(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function hf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function f_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new df(this.data.getIterator())}getIteratorFrom(e){return new df(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class df{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Qe(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class p_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new p_("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const MP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=MP.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function Lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fu(t){const e=t.mapValue.fields.__previous_value__;return Lu(e)?Fu(e):e}function pi(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class LP{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const oo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lu(t)?4:FP(t)?9007199254740991:10:Y()}function en(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hn(s.timestampValue),a=Hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),a=De(i.doubleValue);return o===a?Go(o)===Go(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(hf(o)!==hf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!en(o[c],a[c])))return!1;return!0}(t,e);default:return Y()}}function mi(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=De(i.integerValue||i.doubleValue),c=De(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ff(t.timestampValue,e.timestampValue);case 4:return ff(pi(t),pi(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const a=vr(i),c=vr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=he(a[l],c[l]);if(u!==0)return u}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(De(i.latitude),De(o.latitude));return a!==0?a:he(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=is(a[l],c[l]);if(u)return u}return he(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===oo.mapValue&&o===oo.mapValue)return 0;if(i===oo.mapValue)return 1;if(o===oo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=he(c[h],u[h]);if(d!==0)return d;const p=is(a[c[h]],l[u[h]]);if(p!==0)return p}return he(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function ff(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Hn(t),r=Hn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function os(t){return El(t)}function El(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=El(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${El(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function pf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Il(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function gf(t){return!!t&&"nullValue"in t}function mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ws(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(n)}setAll(e){let n=ze.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ws(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Eo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Ws(this.value))}}function g_(t){const e=[];return ms(t.fields,(n,r)=>{const s=new ze([n]);if(Eo(r)){const i=g_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
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
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,ee.min(),ee.min(),ee.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,ee.min(),ee.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,ee.min(),ee.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qo{constructor(e,n){this.position=e,this.inclusive=n}}function _f(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function UP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class m_{}class Oe extends m_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $P(e,n,r):n==="array-contains"?new HP(e,r):n==="in"?new KP(e,r):n==="not-in"?new WP(e,r):n==="array-contains-any"?new zP(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jP(e,r):new qP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends m_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new xt(e,n)}matches(e){return __(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function __(t){return t.op==="and"}function y_(t){return BP(t)&&__(t)}function BP(t){for(const e of t.filters)if(e instanceof xt)return!1;return!0}function wl(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+os(t.value);if(y_(t))return t.filters.map(e=>wl(e)).join(",");{const e=t.filters.map(n=>wl(n)).join(",");return`${t.op}(${e})`}}function v_(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&v_(o,s.filters[a]),!0):!1}(t,e):void Y()}function E_(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof xt?function(n){return n.op.toString()+" {"+n.getFilters().map(E_).join(" ,")+"}"}(t):"Filter"}class $P extends Oe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class jP extends Oe{constructor(e,n){super(e,"in",n),this.keys=I_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qP extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=I_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function I_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class HP extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&mi(n.arrayValue,this.value)}}class KP extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mi(this.value.arrayValue,n)}}class WP extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mi(this.value.arrayValue,n)}}class zP extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
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
 */class GP{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function vf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new GP(t,e,n,r,s,i,o)}function Bu(t){const e=te(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ce=n}return e.ce}function $u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!v_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yf(t.startAt,e.startAt)&&yf(t.endAt,e.endAt)}function Tl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ui{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function QP(t,e,n,r,s,i,o,a){return new Ui(t,e,n,r,s,i,o,a)}function w_(t){return new Ui(t)}function Ef(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function T_(t){return t.collectionGroup!==null}function zs(t){const e=te(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qe(ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Jo(i,r))}),n.has(ze.keyField().canonicalString())||e.le.push(new Jo(ze.keyField(),r))}return e.le}function Qt(t){const e=te(t);return e.he||(e.he=JP(e,zs(t))),e.he}function JP(t,e){if(t.limitType==="F")return vf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jo(s.field,i)});const n=t.endAt?new Qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qo(t.startAt.position,t.startAt.inclusive):null;return vf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Al(t,e){const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rl(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return $u(Qt(t),Qt(e))&&t.limitType===e.limitType}function A_(t){return`${Bu(Qt(t))}|lt:${t.limitType}`}function xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>E_(s)).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function Ka(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=_f(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,zs(r),s)||r.endAt&&!function(o,a,c){const l=_f(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,zs(r),s))}(t,e)}function YP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function R_(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=XP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function XP(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?is(c,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return f_(this.inner)}size(){return this.innerSize}}/**
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
 */const ZP=new Se(H.comparator);function dn(){return ZP}const S_=new Se(H.comparator);function Ns(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function P_(t){let e=S_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ar(){return Gs()}function b_(){return Gs()}function Gs(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const eb=new Se(H.comparator),tb=new Qe(H.comparator);function ie(...t){let e=tb;for(const n of t)e=e.add(n);return e}const nb=new Qe(he);function rb(){return nb}/**
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
 */function C_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function k_(t){return{integerValue:""+t}}function sb(t,e){return xP(e)?k_(e):C_(t,e)}/**
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
 */class Wa{constructor(){this._=void 0}}function ib(t,e,n){return t instanceof Yo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lu(i)&&(i=Fu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof _i?O_(t,e):t instanceof yi?N_(t,e):function(s,i){const o=D_(s,i),a=If(o)+If(s.Ie);return Il(o)&&Il(s.Ie)?k_(a):C_(s.serializer,a)}(t,e)}function ob(t,e,n){return t instanceof _i?O_(t,e):t instanceof yi?N_(t,e):n}function D_(t,e){return t instanceof Xo?function(r){return Il(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yo extends Wa{}class _i extends Wa{constructor(e){super(),this.elements=e}}function O_(t,e){const n=V_(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends Wa{constructor(e){super(),this.elements=e}}function N_(t,e){let n=V_(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class Xo extends Wa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function If(t){return De(t.integerValue||t.doubleValue)}function V_(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ab(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?ss(r.elements,s.elements,en):r instanceof Xo&&s instanceof Xo?en(r.Ie,s.Ie):r instanceof Yo&&s instanceof Yo}(t.transform,e.transform)}class cb{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class za{}function x_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,Jt.none()):new Bi(t.key,t.data,Jt.none());{const n=t.data,r=wt.empty();let s=new Qe(ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new Ct(s.toArray()),Jt.none())}}function lb(t,e,n){t instanceof Bi?function(s,i,o){const a=s.value.clone(),c=Tf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Tf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(M_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Bi?function(i,o,a,c){if(!Io(i.precondition,o))return a;const l=i.value.clone(),u=Af(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,a,c){if(!Io(i.precondition,o))return a;const l=Af(i.fieldTransforms,c,o),u=o.data;return u.setAll(M_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ub(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=D_(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,o)=>ab(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends za{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends za{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function M_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ob(o,a,n[s]))}return r}function Af(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ib(i,o,e))}return r}class ju extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hb extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class db{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=b_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=x_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>wf(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>wf(n,r))}}class qu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=function(){return eb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qu(e,n,r,s)}}/**
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
 */class fb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,ae;function gb(t){switch(t){default:return Y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function L_(t){if(t===void 0)return Zt("GRPC error has no .code"),I.UNKNOWN;switch(t){case ke.OK:return I.OK;case ke.CANCELLED:return I.CANCELLED;case ke.UNKNOWN:return I.UNKNOWN;case ke.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ke.INTERNAL:return I.INTERNAL;case ke.UNAVAILABLE:return I.UNAVAILABLE;case ke.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ke.NOT_FOUND:return I.NOT_FOUND;case ke.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ke.ABORTED:return I.ABORTED;case ke.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ke.DATA_LOSS:return I.DATA_LOSS;default:return Y()}}(ae=ke||(ke={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mb(){return new TextEncoder}/**
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
 */const _b=new Qr([4294967295,4294967295],0);function Rf(t){const e=mb().encode(t),n=new yP;return n.update(e),new Uint8Array(n.digest())}function Sf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([s,i],0)]}class Hu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Qr.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Qr.fromNumber(r)));return s.compare(_b)===1&&(s=new Qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Rf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Hu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Rf(e),[r,s]=Sf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ga(ee.min(),s,new Se(he),dn(),ie())}}class $i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $i(r,n,ie(),ie(),ie())}}/**
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
 */class wo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class F_{constructor(e,n){this.targetId=e,this.fe=n}}class U_{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.ge=0,this.pe=Cf(),this.ye=st.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ie(),n=ie(),r=ie();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new $i(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Cf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ve(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class yb{constructor(e){this.Be=e,this.ke=new Map,this.qe=dn(),this.Qe=bf(),this.Ke=new Se(he)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Tl(i))if(r===0){const o=new H(i.path);this.We(n,o,et.newNoDocument(o,ee.min()))}else ve(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=vr(r).toUint8Array()}catch(c){if(c instanceof p_)return rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Hu(o,s,i)}catch(c){return rs(c instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Tl(a.target)){const c=new H(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,et.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ie();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ga(e,n,this.Ke,this.qe,r);return this.qe=dn(),this.Qe=bf(),this.Ke=new Se(he),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Pf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Qe(he),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Pf),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function bf(){return new Se(H.comparator)}function Cf(){return new Se(H.comparator)}const vb={asc:"ASCENDING",desc:"DESCENDING"},Eb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ib={and:"AND",or:"OR"};class wb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sl(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function Zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function B_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tb(t,e){return Zo(t,e.toTimestamp())}function Yt(t){return ve(!!t),ee.fromTimestamp(function(n){const r=Hn(n);return new Fe(r.seconds,r.nanos)}(t))}function Ku(t,e){return Pl(t,e).canonicalString()}function Pl(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $_(t){const e=Te.fromString(t);return ve(W_(e)),e}function bl(t,e){return Ku(t.databaseId,e.path)}function kc(t,e){const n=$_(e);if(n.get(1)!==t.databaseId.projectId)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(q_(n))}function j_(t,e){return Ku(t.databaseId,e)}function Ab(t){const e=$_(t);return e.length===4?Te.emptyPath():q_(e)}function Cl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function q_(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kf(t,e,n){return{name:bl(t,e),fields:n.value.mapValue.fields}}function Rb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ve(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:L_(l.code);return new U(u,l.message||"")}(o);n=new U_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=kc(t,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):ee.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new wo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=kc(t,r.document),i=r.readTime?Yt(r.readTime):ee.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new wo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=kc(t,r.document),i=r.removedTargetIds||[];n=new wo([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pb(s,i),a=r.targetId;n=new F_(a,o)}}return n}function Sb(t,e){let n;if(e instanceof Bi)n={update:kf(t,e.key,e.value)};else if(e instanceof ju)n={delete:bl(t,e.key)};else if(e instanceof Rr)n={update:kf(t,e.key,e.data),updateMask:xb(e.fieldMask)};else{if(!(e instanceof hb))return Y();n={verify:bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Tb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function Pb(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Yt(s.updateTime):Yt(i);return o.isEqual(ee.min())&&(o=Yt(i)),new cb(o,s.transformResults||[])}(n,e))):[]}function bb(t,e){return{documents:[j_(t,e.path)]}}function Cb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=j_(t,s);const i=function(l){if(l.length!==0)return K_(xt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Mr(d.field),direction:Ob(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Sl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function kb(t){let e=Ab(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=H_(h);return d instanceof xt&&y_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Jo(Lr(_.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,qa(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Qo(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Qo(p,d)}(n.endAt)),QP(e,s,o,i,a,"F",c,l)}function Db(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function H_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Lr(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Lr(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Lr(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Lr(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Lr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xt.create(n.compositeFilter.filters.map(r=>H_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function Ob(t){return vb[t]}function Nb(t){return Eb[t]}function Vb(t){return Ib[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function Lr(t){return ze.fromServerFormat(t.fieldPath)}function K_(t){return t instanceof Oe?function(n){if(n.op==="=="){if(mf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NAN"}};if(gf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NAN"}};if(gf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(n.field),op:Nb(n.op),value:n.value}}}(t):t instanceof xt?function(n){const r=n.getFilters().map(s=>K_(s));return r.length===1?r[0]:{compositeFilter:{op:Vb(n.op),filters:r}}}(t):Y()}function xb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function W_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class On{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Mb{constructor(e){this.ct=e}}function Lb(t){const e=kb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rl(e,e.limit,"L"):e}/**
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
 */class Fb{constructor(){this._n=new Ub}addToCollectionParentIndex(e,n){return this._n.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}deleteAllFieldIndexes(e){return T.resolve()}createTargetIndexes(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(qn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class Ub{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Te.comparator)).toArray()}}/**
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
 */class as{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new as(0)}static Ln(){return new as(-1)}}/**
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
 */class Bb{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $b{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Ct.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ns();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=dn();const o=Gs(),a=function(){return Gs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Rr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Qs(u.mutation,l,u.mutation.getFieldMask(),Fe.now())):o.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new $b(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Se((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ct.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=b_();u.forEach(d=>{if(!i.has(d)){const p=x_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):T_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):T.resolve(ar());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ie())).next(u=>({batchId:a,changes:P_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,i).next(a=>T.forEach(a,c=>{const l=function(h,d){return new Ui(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,et.newInvalidDocument(u)))});let a=Ns();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Qs(u.mutation,l,Ct.empty(),Fe.now()),Ka(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class qb{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return T.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Lb(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class Hb{constructor(){this.overlays=new Se(H.comparator),this.hr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ar();return T.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const s=ar(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return T.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ar(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return T.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fb(n,r));let i=this.hr.get(n);i===void 0&&(i=ie(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Wu{constructor(){this.Pr=new Qe($e.Ir),this.Tr=new Qe($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new H(new Te([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new H(new Te([])),r=new $e(n,e),s=new $e(n,e+1);let i=ie();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return H.comparator(e.key,n.key)||he(e.pr,n.pr)}static Er(e,n){return he(e.pr,n.pr)||H.comparator(e.key,n.key)}}/**
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
 */class Kb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Qe($e.Ir)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new db(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(he);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),T.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new $e(new H(i),0);let a=new Qe(he);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),T.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return T.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),s=this.wr.firstAfterOrEqual(r);return T.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Wb{constructor(e){this.vr=e,this.docs=function(){return new Se(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=dn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||kP(CP(u),r)<=0||(s.has(u.key)||Ka(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}Fr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zb(this)}getSize(e){return T.resolve(this.size)}}class zb extends Bb{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Gb{constructor(e){this.persistence=e,this.Mr=new _s(n=>Bu(n),$u),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wu,this.targetCount=0,this.Lr=as.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),T.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.qn(n),T.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Nr.containsKey(n))}}/**
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
 */class Qb{constructor(e,n){this.Br={},this.overlays={},this.kr=new Mu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Gb(this),this.indexManager=new Fb,this.remoteDocumentCache=function(s){return new Wb(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Mb(n),this.$r=new qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Kb(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const s=new Jb(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return T.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Jb extends OP{constructor(e){super(),this.currentSequenceNumber=e}}class zu{constructor(e){this.persistence=e,this.zr=new Wu,this.jr=null}static Hr(e){return new zu(e)}get Jr(){if(this.jr)return this.jr;throw Y()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),T.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Jr,r=>{const s=H.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return T.or([()=>T.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gu(e,n.fromCache,r,s)}}/**
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
 */class Yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xb{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return PT()?8:or.v(Ve())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Yb;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ss()<=oe.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),T.resolve()):(Ss()<=oe.DEBUG&&O("QueryEngine","Query:",xr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ss()<=oe.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):T.resolve())}ji(e,n){if(Ef(n))return T.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rl(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,Rl(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Ef(n)||s.isEqual(ee.min())?T.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?T.resolve(null):(Ss()<=oe.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xr(n)),this.es(e,o,n,bP(s,-1)).next(a=>a))})}Zi(e,n){let r=new Qe(R_(e));return n.forEach((s,i)=>{Ka(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ss()<=oe.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",xr(n)),this.zi.getDocumentsMatchingQuery(e,n,qn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Zb{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Se(he),this.rs=new _s(i=>Bu(i),$u),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jb(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function eC(t,e,n,r){return new Zb(t,e,n,r)}async function z_(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ie();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function tC(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=T.resolve();return d.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(R=>{const S=l.docVersions.get(_);ve(S!==null),R.version.compareTo(S)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ie();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function G_(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function nC(t,e){const n=te(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(st.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(R,S,E){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let c=dn(),l=ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(rC(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(ee.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function rC(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=dn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function sC(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iC(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,T.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new On(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function kl(t,e,n){const r=te(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Df(t,e,n){const r=te(t);let s=ee.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=te(c),d=h.rs.get(u);return d!==void 0?T.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,Qt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ie())).next(a=>(oC(r,YP(e),a),{documents:a,hs:i})))}function oC(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Of{constructor(){this.activeTargetIds=rb()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aC{constructor(){this.no=new Of,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Of,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cC{io(e){}shutdown(){}}/**
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
 */class Nf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ao=null;function Dc(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
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
 */const lC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Xe="WebChannelConnection";class hC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Dc(),c=this.bo(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(O("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw rs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=lC[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Dc();return new Promise((o,a)=>{const c=new _P;c.setWithCredentials(!0),c.listenOnce(gP.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cc.NO_ERROR:const u=c.getResponseJson();O(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Cc.TIMEOUT:O(Xe,`RPC '${e}' ${i} timed out`),a(new U(I.DEADLINE_EXCEEDED,"Request time out"));break;case Cc.HTTP_ERROR:const h=c.getStatus();if(O(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(E)>=0?E:I.UNKNOWN}(p.status);a(new U(_,p.message))}else a(new U(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(I.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{O(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);O(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=Dc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fP(),a=pP(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");O(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const _=new uC({lo:S=>{p?O(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(d||(O(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),O(Xe,`RPC '${e}' stream ${s} sending:`,S),h.send(S))},ho:()=>h.close()}),R=(S,E,A)=>{S.listen(E,b=>{try{A(b)}catch(B){setTimeout(()=>{throw B},0)}})};return R(h,so.EventType.OPEN,()=>{p||O(Xe,`RPC '${e}' stream ${s} transport opened.`)}),R(h,so.EventType.CLOSE,()=>{p||(p=!0,O(Xe,`RPC '${e}' stream ${s} transport closed`),_.Vo())}),R(h,so.EventType.ERROR,S=>{p||(p=!0,rs(Xe,`RPC '${e}' stream ${s} transport errored:`,S),_.Vo(new U(I.UNAVAILABLE,"The operation could not be completed")))}),R(h,so.EventType.MESSAGE,S=>{var E;if(!p){const A=S.data[0];ve(!!A);const b=A,B=b.error||((E=b[0])===null||E===void 0?void 0:E.error);if(B){O(Xe,`RPC '${e}' stream ${s} received error:`,B);const W=B.status;let M=function(J){const de=ke[J];if(de!==void 0)return L_(de)}(W),re=B.message;M===void 0&&(M=I.INTERNAL,re="Unknown error status: "+W+" with message "+B.message),p=!0,_.Vo(new U(M,re)),h.close()}else O(Xe,`RPC '${e}' stream ${s} received:`,A),_.mo(A)}}),R(a,mP.STAT_EVENT,S=>{S.stat===cf.PROXY?O(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===cf.NOPROXY&&O(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function Oc(){return typeof document<"u"?document:null}/**
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
 */function Qa(t){return new wb(t,!0)}/**
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
 */class Q_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class J_{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Q_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Zt(n.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new U(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dC extends J_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Rb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Yt(o.readTime):ee.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Cl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Tl(c)?{documents:bb(i,c)}:{query:Cb(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=B_(i,o.resumeToken);const l=Sl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Zo(i,o.snapshotVersion.toTimestamp());const l=Sl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=Db(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Cl(this.serializer),n.removeTarget=e,this.t_(n)}}class fC extends J_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=Pb(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.T_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Cl(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sb(this.serializer,r))};this.t_(n)}}/**
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
 */class pC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Pl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(I.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Pl(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(I.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class gC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Zt(n),this.g_=!1):O("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class mC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=te(c);l.v_.add(4),await ji(l),l.x_.set("Unknown"),l.v_.delete(4),await Ja(l)}(this))})}),this.x_=new gC(r,s)}}async function Ja(t){if(Sr(t))for(const e of t.F_)await e(!0)}async function ji(t){for(const e of t.F_)await e(!1)}function Y_(t,e){const n=te(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Xu(n)?Yu(n):ys(n).Jo()&&Ju(n,e))}function Qu(t,e){const n=te(t),r=ys(n);n.C_.delete(e),r.Jo()&&X_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Sr(n)&&n.x_.set("Unknown"))}function Ju(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).c_(e)}function X_(t,e){t.O_.Oe(e),ys(t).l_(e)}function Yu(t){t.O_=new yb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.x_.p_()}function Xu(t){return Sr(t)&&!ys(t).Ho()&&t.C_.size>0}function Sr(t){return te(t).v_.size===0}function Z_(t){t.O_=void 0}async function _C(t){t.C_.forEach((e,n)=>{Ju(t,e)})}async function yC(t,e){Z_(t),Xu(t)?(t.x_.S_(e),Yu(t)):t.x_.set("Unknown")}async function vC(t,e,n){if(t.x_.set("Online"),e instanceof U_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ea(t,r)}else if(e instanceof wo?t.O_.$e(e):e instanceof F_?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ee.min()))try{const r=await G_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(st.EMPTY_BYTE_STRING,u.snapshotVersion)),X_(i,c);const h=new On(u.target,c,l,u.sequenceNumber);Ju(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ea(t,r)}}async function ea(t,e,n){if(!Fi(e))throw e;t.v_.add(1),await ji(t),t.x_.set("Offline"),n||(n=()=>G_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Ja(t)})}function ey(t,e){return e().catch(n=>ea(t,n,e))}async function Ya(t){const e=te(t),n=Kn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;EC(e);)try{const s=await sC(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,IC(e,s)}catch(s){await ea(e,s)}ty(e)&&ny(e)}function EC(t){return Sr(t)&&t.D_.length<10}function IC(t,e){t.D_.push(e);const n=Kn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function ty(t){return Sr(t)&&!Kn(t).Ho()&&t.D_.length>0}function ny(t){Kn(t).start()}async function wC(t){Kn(t).d_()}async function TC(t){const e=Kn(t);for(const n of t.D_)e.I_(n.mutations)}async function AC(t,e,n){const r=t.D_.shift(),s=qu.from(r,e,n);await ey(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ya(t)}async function RC(t,e){e&&Kn(t).P_&&await async function(r,s){if(function(o){return gb(o)&&o!==I.ABORTED}(s.code)){const i=r.D_.shift();Kn(r).Zo(),await ey(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ya(r)}}(t,e),ty(t)&&ny(t)}async function Vf(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.v_.add(3),await ji(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Ja(n)}async function SC(t,e){const n=te(t);e?(n.v_.delete(2),await Ja(n)):e||(n.v_.add(2),await ji(n),n.x_.set("Unknown"))}function ys(t){return t.N_||(t.N_=function(n,r,s){const i=te(n);return i.R_(),new dC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:_C.bind(null,t),To:yC.bind(null,t),u_:vC.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Xu(t)?Yu(t):t.x_.set("Unknown")):(await t.N_.stop(),Z_(t))})),t.N_}function Kn(t){return t.L_||(t.L_=function(n,r,s){const i=te(n);return i.R_(),new fC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:wC.bind(null,t),To:RC.bind(null,t),E_:TC.bind(null,t),T_:AC.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ya(t)):(await t.L_.stop(),t.D_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class Zu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Zu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eh(t,e){if(Zt("AsyncQueue",`${e}: ${t}`),Fi(t))return new U(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class xf{constructor(){this.B_=new Se(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Y():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new cs(e,n,Jr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class PC{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class bC{constructor(){this.queries=new _s(e=>A_(e),Ha),this.onlineState="Unknown",this.W_=new Set}}async function CC(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new PC,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=eh(o,`Initialization of query '${xr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&th(n)}async function kC(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DC(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&th(n)}function OC(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function th(t){t.W_.forEach(e=>{e.next()})}var Dl,Mf;(Mf=Dl||(Dl={})).j_="default",Mf.Cache="cache";class NC{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Dl.Cache}}/**
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
 */class ry{constructor(e){this.key=e}}class sy{constructor(e){this.key=e}}class VC{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ie(),this.mutatedKeys=ie(),this.ha=R_(e),this.Pa=new Jr(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new xf,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Ka(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),R=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let S=!1;d&&p?d.data.isEqual(p.data)?_!==R&&(r.track({type:3,doc:p}),S=!0):this.da(d,p)||(r.track({type:2,doc:p}),S=!0,(c&&this.ha(p,c)>0||l&&this.ha(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),S=!0):d&&!p&&(r.track({type:1,doc:d}),S=!0,(c||l)&&(a=!0)),S&&(p?(o=o.add(p),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(p,_){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(p)-R(_)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new cs(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new xf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ie(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new sy(r))}),this.la.forEach(r=>{e.has(r)||n.push(new ry(r))}),n}fa(e){this.ua=e.hs,this.la=ie();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return cs.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class xC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MC{constructor(e){this.key=e,this.pa=!1}}class LC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new _s(a=>A_(a),Ha),this.Sa=new Map,this.ba=new Set,this.Da=new Se(H.comparator),this.Ca=new Map,this.va=new Wu,this.Fa={},this.Ma=new Map,this.xa=as.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function FC(t,e,n=!0){const r=uy(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await iy(r,e,n,!0),s}async function UC(t,e){const n=uy(t);await iy(n,e,!0,!1)}async function iy(t,e,n,r){const s=await iC(t.localStore,Qt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await BC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Y_(t.remoteStore,s),a}async function BC(t,e,n,r,s){t.Na=(h,d,p)=>async function(R,S,E,A){let b=S.view.Ta(E);b.Xi&&(b=await Df(R.localStore,S.query,!1).then(({documents:re})=>S.view.Ta(re,b)));const B=A&&A.targetChanges.get(S.targetId),W=A&&A.targetMismatches.get(S.targetId)!=null,M=S.view.applyChanges(b,R.isPrimaryClient,B,W);return Ff(R,S.targetId,M.Va),M.snapshot}(t,h,d,p);const i=await Df(t.localStore,e,!0),o=new VC(e,i.hs),a=o.Ta(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Ff(t,n,l.Va);const u=new xC(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function $C(t,e,n){const r=te(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Ha(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Qu(r.remoteStore,s.targetId),Ol(r,s.targetId)}).catch(Li)):(Ol(r,s.targetId),await kl(r.localStore,s.targetId,!0))}async function jC(t,e){const n=te(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qu(n.remoteStore,r.targetId))}async function qC(t,e,n){const r=JC(t);try{const s=await function(o,a){const c=te(o),l=Fe.now(),u=a.reduce((p,_)=>p.add(_.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=dn(),R=ie();return c.os.getEntries(p,u).next(S=>{_=S,_.forEach((E,A)=>{A.isValidDocument()||(R=R.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(S=>{h=S;const E=[];for(const A of a){const b=ub(A,h.get(A.key).overlayedDocument);b!=null&&E.push(new Rr(A.key,b,g_(b.value.mapValue),Jt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,E,a)}).next(S=>{d=S;const E=S.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(p,S.batchId,E)})}).then(()=>({batchId:d.batchId,changes:P_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new Se(he)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await qi(r,s.changes),await Ya(r.remoteStore)}catch(s){const i=eh(s,"Failed to persist write");n.reject(i)}}async function oy(t,e){const n=te(t);try{const r=await nC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?ve(o.pa):s.removedDocuments.size>0&&(ve(o.pa),o.pa=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function Lf(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=te(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(l=!0)}),l&&th(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HC(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new Se(H.comparator);o=o.insert(i,et.newNoDocument(i,ee.min()));const a=ie().add(i),c=new Ga(ee.min(),new Map,new Se(he),o,a);await oy(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),nh(r)}else await kl(r.localStore,e,!1).then(()=>Ol(r,e,n)).catch(Li)}async function KC(t,e){const n=te(t),r=e.batch.batchId;try{const s=await tC(n.localStore,e);cy(n,r,null),ay(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function WC(t,e,n){const r=te(t);try{const s=await function(o,a){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ve(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);cy(r,e,n),ay(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function ay(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function cy(t,e,n){const r=te(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function Ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||ly(t,r)})}function ly(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Qu(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),nh(t))}function Ff(t,e,n){for(const r of n)r instanceof ry?(t.va.addReference(r.key,e),zC(t,r)):r instanceof sy?(O("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||ly(t,r.key)):Y()}function zC(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(O("SyncEngine","New document in limbo: "+n),t.ba.add(r),nh(t))}function nh(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new H(Te.fromString(e)),r=t.xa.next();t.Ca.set(r,new MC(n)),t.Da=t.Da.insert(n,r),Y_(t.remoteStore,new On(Qt(w_(n.path)),r,"TargetPurposeLimboResolution",Mu._e))}}async function qi(t,e,n){const r=te(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Gu.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=te(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(l,d=>T.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>T.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Fi(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),_=p.snapshotVersion,R=p.withLastLimboFreeSnapshotVersion(_);u.ns=u.ns.insert(d,R)}}}(r.localStore,i))}async function GC(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await z_(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new U(I.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.us)}}function QC(t,e){const n=te(t),r=n.Ca.get(e);if(r&&r.pa)return ie().add(r.key);{let s=ie();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function uy(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HC.bind(null,e),e.ya.u_=DC.bind(null,e.eventManager),e.ya.La=OC.bind(null,e.eventManager),e}function JC(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WC.bind(null,e),e}class Uf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eC(this.persistence,new Xb,e.initialUser,this.serializer)}createPersistence(e){return new Qb(zu.Hr,this.serializer)}createSharedClientState(e){return new aC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GC.bind(null,this.syncEngine),await SC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bC}()}createDatastore(e){const n=Qa(e.databaseInfo.databaseId),r=function(i){return new hC(i)}(e.databaseInfo);return function(i,o,a,c){return new pC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new mC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lf(this.syncEngine,n,0),function(){return Nf.D()?new Nf:new cC}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new LC(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=te(r);O("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ji(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class XC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=d_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=eh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await z_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await t1(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vf(e.remoteStore,s)),t._onlineComponents=e}function e1(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function t1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!e1(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Nc(t,new Uf)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Nc(t,new Uf);return t._offlineComponents}async function hy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Bf(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Bf(t,new YC))),t._onlineComponents}function n1(t){return hy(t).then(e=>e.syncEngine)}async function r1(t){const e=await hy(t),n=e.eventManager;return n.onListen=FC.bind(null,e.syncEngine),n.onUnlisten=$C.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jC.bind(null,e.syncEngine),n}function s1(t,e,n={}){const r=new ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new XC({next:d=>{o.enqueueAndForget(()=>kC(i,h)),d.fromCache&&c.source==="server"?l.reject(new U(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new NC(a,u,{includeMetadataChanges:!0,ta:!0});return CC(i,h)}(await r1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $f=new Map;/**
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
 */function fy(t,e,n){if(!n)throw new U(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function i1(t,e,n,r){if(e===!0&&r===!0)throw new U(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jf(t){if(!H.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qf(t){if(H.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(t);throw new U(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Hf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Za{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vP;switch(r.type){case"firstParty":return new TP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$f.get(n);r&&(O("ComponentProvider","Removing Datastore"),$f.delete(n),r.terminate())}(this),Promise.resolve()}}function o1(t,e,n,r={}){var s;const i=(t=vi(t,Za))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=IT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new EP(new h_(a,c))}}/**
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
 */class vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Un extends vs{constructor(e,n,r){super(e,n,w_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new H(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function Vc(t,e,...n){if(t=xe(t),fy("collection","path",e),t instanceof Za){const r=Te.fromString(e,...n);return qf(r),new Un(t,null,r)}{if(!(t instanceof At||t instanceof Un))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return qf(r),new Un(t.firestore,null,r)}}function py(t,e,...n){if(t=xe(t),arguments.length===1&&(e=d_.newId()),fy("doc","path",e),t instanceof Za){const r=Te.fromString(e,...n);return jf(r),new At(t,null,new H(r))}{if(!(t instanceof At||t instanceof Un))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return jf(r),new At(t.firestore,t instanceof Un?t.converter:null,new H(r))}}/**
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
 */class a1{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Q_(this,"async_queue_retry"),this.cu=()=>{const n=Oc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new ln;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Fi(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Zt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=Zu.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&Y()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class ec extends Za{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new a1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||my(this),this._firestoreClient.terminate()}}function c1(t,e){const n=typeof t=="object"?t:Ag(),r=typeof t=="string"?t:e||"(default)",s=tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vT("firestore");i&&o1(s,...i)}return s}function gy(t){return t._firestoreClient||my(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function my(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new LP(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,dy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ZC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(st.fromBase64String(e))}catch(n){throw new U(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _y{constructor(e){this._methodName=e}}/**
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
 */class sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const l1=/^__.*__$/;class u1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}function yy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ih{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return ta(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(yy(this.Vu)&&l1.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class h1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qa(e)}Cu(e,n,r,s=!1){return new ih({Vu:e,methodName:n,Du:r,path:ze.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vy(t){const e=t._freezeSettings(),n=Qa(t._databaseId);return new h1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function d1(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);wy("Data must be an object, but it was:",o,r);const a=Ey(r,o);let c,l;if(i.merge)c=new Ct(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=p1(e,h,n);if(!o.contains(d))throw new U(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);m1(u,d)||u.push(d)}c=new Ct(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new u1(new wt(a),c,l)}function f1(t,e,n,r=!1){return oh(n,t.Cu(r?4:3,e))}function oh(t,e){if(Iy(t=xe(t)))return wy("Unsupported field value:",e,t),Ey(t,e);if(t instanceof _y)return function(r,s){if(!yy(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=oh(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:Zo(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(s.serializer,i)}}if(r instanceof sh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:B_(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ku(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Xa(r)}`)}(t,e)}function Ey(t,e){const n={};return f_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=oh(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Iy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof sh||t instanceof ls||t instanceof At||t instanceof _y)}function wy(t,e,n){if(!Iy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xa(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function p1(t,e,n){if((e=xe(e))instanceof rh)return e._internalPath;if(typeof e=="string")return Ty(t,e);throw ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const g1=new RegExp("[~\\*/\\[\\]]");function Ty(t,e,n){if(e.search(g1)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rh(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(I.INVALID_ARGUMENT,a+t+c)}function m1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ay{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ah("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _1 extends Ay{data(){return super.data()}}function ah(t,e){return typeof e=="string"?Ty(t,e):e instanceof rh?e._internalPath:e._delegate._internalPath}/**
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
 */function y1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ch{}class v1 extends ch{}function E1(t,e,...n){let r=[];e instanceof ch&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof lh).length,a=i.filter(c=>c instanceof tc).length;if(o>1||o>0&&a>0)throw new U(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class tc extends v1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tc(e,n,r)}_apply(e){const n=this._parse(e);return Ry(e._query,n),new vs(e.firestore,e.converter,Al(e._query,n))}_parse(e){const n=vy(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Wf(h,u);const p=[];for(const _ of h)p.push(Kf(c,i,_));d={arrayValue:{values:p}}}else d=Kf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Wf(h,u),d=f1(a,o,h,u==="in"||u==="not-in");return Oe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function I1(t,e,n){const r=e,s=ah("where",t);return tc._create(s,r,n)}class lh extends ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Ry(o,c),o=Al(o,c)}(e._query,n),new vs(e.firestore,e.converter,Al(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kf(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new U(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!T_(e)&&n.indexOf("/")!==-1)throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!H.isDocumentKey(r))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pf(t,new H(r))}if(n instanceof At)return pf(t,n._key);throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function Wf(t,e){if(!Array.isArray(t)||t.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ry(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class w1{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new sh(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ve(W_(r));const s=new gi(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||Zt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function T1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class A1 extends Ay{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ah("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class To extends A1{data(e={}){return super.data(e)}}class R1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new To(s._firestore,s._userDataWriter,a.doc.key,a.doc,new co(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new To(s._firestore,s._userDataWriter,a.doc.key,a.doc,new co(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:S1(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function S1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class P1 extends w1{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function zf(t){t=vi(t,vs);const e=vi(t.firestore,ec),n=gy(e),r=new P1(e);return y1(t._query),s1(n,t._query).then(s=>new R1(e,r,t,s))}function b1(t){return Sy(vi(t.firestore,ec),[new ju(t._key,Jt.none())])}function C1(t,e){const n=vi(t.firestore,ec),r=py(t),s=T1(t.converter,e);return Sy(n,[d1(vy(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function Sy(t,e){return function(r,s){const i=new ln;return r.asyncQueue.enqueueAndForget(async()=>qC(await n1(r),s,i)),i.promise}(gy(t),e)}(function(e,n=!0){(function(s){gs=s})(ds),ts(new fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ec(new IP(r.getProvider("auth-internal")),new RP(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Fn(lf,"4.5.1",e),Fn(lf,"4.5.1","esm2017")})();const k1={apiKey:"AIzaSyBjh24VyZVkdLFiKer1RbGju9UlNa903Ks",authDomain:"disc-golf-scorecard-c0347.firebaseapp.com",projectId:"disc-golf-scorecard-c0347",storageBucket:"disc-golf-scorecard-c0347.appspot.com",messagingSenderId:"55303345378",appId:"1:55303345378:web:a7808911be87b35f8efabb"},Ps=ct(null),Or=ct(null),Xn=ct(null),Nr=ct(null),xc=ct([]),lo=ct("loading"),Bt=ct(null),uh=()=>{const t=()=>{Ps.value=Tg(k1),Or.value=hS(Ps.value),Nr.value=c1(Ps.value),Y0(Or.value,async l=>{l?(console.log("Auth state changed:"),Xn.value=l,c().then(()=>{lo.value="loaded",Bt.value=null})):(console.log("Auth state changed: user signed out"),Xn.value=!1,xc.value=[],lo.value="loaded",Bt.value=null)}),console.log("Firebase initialized")};Ps.value||t();const e=(l,u,h)=>{Bt.value=null,H0(Or.value,l,u).then(d=>{const p=d.user;console.log("Account created:"),Fd(p,{displayName:h}).catch(function(_){console.log(_)}).then(()=>{n(l,u)})}).catch(d=>{console.warn("Account creation failed:",d.message,d.code),Bt.value=d.code})},n=(l,u)=>{Bt.value=null,K0(Or.value,l,u).then(h=>{h.user,console.log("Logged in:"),ni.push("/")}).catch(h=>{console.warn("Login failed:",h.message,h.code),Bt.value=h.code})},r=()=>{Bt.value=null,X0(Or.value).then(()=>{console.log("Logged out"),Xn.value=!1,lo.value="loaded",ni.push("/"),Bt.value=null}).catch(l=>{console.warn("Logout failed:",l)})},s=l=>{Bt.value=null;const u=Tr.credential(Xn.value.email,l);return $0(Xn.value,u)},i=async(l,u)=>{try{const h=await C1(Vc(Nr.value,l),u);return console.log("Document written with ID: ",h.id),c(),h.id}catch(h){console.error("Error adding document: ",h)}},o=async(l,u)=>{const d=(await zf(Vc(Nr.value,l))).find(p=>p.id===u);console.log(d)},a=async(l,u)=>{try{console.log("id:",u),console.log("collection:",l),await b1(py(Nr.value,l,u)),console.log("Document deleted: ",u)}catch(h){console.error("Error deleting document: ",h)}},c=async()=>{const l=E1(Vc(Nr.value,"games"),I1("owner","==",Xn.value.uid)),u=await zf(l),h=[];u.forEach(d=>{console.log(d.id),h.push(d.data()),h[h.length-1].id=d.id}),xc.value=h};return{app:Ps,auth:Or,user:Xn,db:Nr,status:lo,error:Bt,updateProfile:Fd,updateEmail:z0,updatePassword:G0,deleteUser:Z0,createAccount:e,login:n,logout:r,reauthenticate:s,sendPasswordResetEmail:q0,addDocument:i,getDocument:o,deleteDocument:a,userGames:xc,getGames:c}},D1={},Py=t=>(ha("data-v-be13adba"),t=t(),da(),t),O1={class:"loader"},N1=Py(()=>q("div",{class:"lds-circle"},[q("div")],-1)),V1=Py(()=>q("p",null,"Loading...",-1)),x1=[N1,V1];function M1(t,e){return Me(),Et("div",O1,x1)}const L1=hs(D1,[["render",M1],["__scopeId","data-v-be13adba"]]),nc=t=>(ha("data-v-5917c96f"),t=t(),da(),t),F1={class:"wrapper"},U1={class:"logo"},B1=nc(()=>q("img",{src:hI},null,-1)),$1=nc(()=>q("i",null,"Disc Golf Scorecard",-1)),j1=nc(()=>q("span",{class:"material-symbols-outlined"},"account_circle",-1)),q1=nc(()=>q("footer",null,[q("a",{href:"https://github.com/aviolin/flash-cards/"},"View the source on GitHub."),q("small",null,"© Copyright 2024, Arlo Adams.")],-1)),H1={__name:"App",setup(t){const{status:e,user:n}=uh();return(r,s)=>{const i=$c("RouterLink"),o=$c("RouterView");return ht(e)!=="loading"?(Me(),Et(ot,{key:0},[q("header",null,[q("div",F1,[q("div",U1,[Ce(i,{to:"/",class:"logo"},{default:kn(()=>[B1,$1]),_:1})]),q("nav",null,[Ce(i,{to:"/play",class:"btn btn-primary btn-small"},{default:kn(()=>[St("Current Card")]),_:1}),ht(n)?(Me(),hr(i,{key:0,to:"/account",class:"btn btn-icon"},{default:kn(()=>[j1]),_:1})):(Me(),hr(i,{key:1,to:"/log-in",class:"btn btn-secondary btn-small"},{default:kn(()=>[St("Login")]),_:1}))])])]),Ce(o),q1],64)):(Me(),hr(L1,{key:1}))}}},K1=hs(H1,[["__scopeId","data-v-5917c96f"]]),hh=eI(K1);hh.use(sI());hh.use(ni);hh.mount("#app");export{ot as F,Iw as M,Ww as N,hs as _,q as a,ct as b,Et as c,mt as d,hr as e,Ce as f,Gp as g,Dn as h,da as i,Yi as j,St as k,Wl as l,uh as m,ia as n,Me as o,ha as p,$c as q,xp as r,ht as s,_h as t,fg as u,GE as v,kn as w,xv as x,ni as y};
