function sI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tv={exports:{}},iu={},nv={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),aI=Symbol.for("react.portal"),lI=Symbol.for("react.fragment"),uI=Symbol.for("react.strict_mode"),cI=Symbol.for("react.profiler"),hI=Symbol.for("react.provider"),dI=Symbol.for("react.context"),fI=Symbol.for("react.forward_ref"),pI=Symbol.for("react.suspense"),mI=Symbol.for("react.memo"),gI=Symbol.for("react.lazy"),am=Symbol.iterator;function yI(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var rv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iv=Object.assign,sv={};function Gi(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||rv}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ov(){}ov.prototype=Gi.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=sv,this.updater=n||rv}var Bd=jd.prototype=new ov;Bd.constructor=jd;iv(Bd,Gi.prototype);Bd.isPureReactComponent=!0;var lm=Array.isArray,av=Object.prototype.hasOwnProperty,Vd={current:null},lv={key:!0,ref:!0,__self:!0,__source:!0};function uv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)av.call(e,r)&&!lv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Po,type:t,key:s,ref:o,props:i,_owner:Vd.current}}function vI(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function wI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wI(""+t.key):e.toString(36)}function Ba(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case aI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cc(o,0):r,lm(i)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),Ba(i,e,n,"",function(u){return u})):i!=null&&(zd(i)&&(i=vI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cc(s,a);o+=Ba(s,e,n,l,i)}else if(l=yI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cc(s,a++),o+=Ba(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(t,e,n){if(t==null)return t;var r=[],i=0;return Ba(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},Va={transition:null},_I={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Va,ReactCurrentOwner:Vd};G.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=Gi;G.Fragment=lI;G.Profiler=cI;G.PureComponent=jd;G.StrictMode=uI;G.Suspense=pI;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_I;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)av.call(e,l)&&!lv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Po,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:dI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hI,_context:t},t.Consumer=t};G.createElement=uv;G.createFactory=function(t){var e=uv.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:fI,render:t}};G.isValidElement=zd;G.lazy=function(t){return{$$typeof:gI,_payload:{_status:-1,_result:t},_init:EI}};G.memo=function(t,e){return{$$typeof:mI,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return nt.current.useCallback(t,e)};G.useContext=function(t){return nt.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};G.useEffect=function(t,e){return nt.current.useEffect(t,e)};G.useId=function(){return nt.current.useId()};G.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return nt.current.useMemo(t,e)};G.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};G.useRef=function(t){return nt.current.useRef(t)};G.useState=function(t){return nt.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return nt.current.useTransition()};G.version="18.2.0";nv.exports=G;var S=nv.exports;const cv=oI(S),II=sI({__proto__:null,default:cv},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SI=S,AI=Symbol.for("react.element"),TI=Symbol.for("react.fragment"),kI=Object.prototype.hasOwnProperty,CI=SI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RI={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kI.call(e,r)&&!RI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AI,type:t,key:s,ref:o,props:i,_owner:CI.current}}iu.Fragment=TI;iu.jsx=hv;iu.jsxs=hv;tv.exports=iu;var I=tv.exports,lh={},dv={exports:{}},wt={},fv={exports:{}},pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,B){var V=P.length;P.push(B);e:for(;0<V;){var me=V-1>>>1,Te=P[me];if(0<i(Te,B))P[me]=B,P[V]=Te,V=me;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],V=P.pop();if(V!==B){P[0]=V;e:for(var me=0,Te=P.length,ua=Te>>>1;me<ua;){var hr=2*(me+1)-1,uc=P[hr],dr=hr+1,ca=P[dr];if(0>i(uc,V))dr<Te&&0>i(ca,uc)?(P[me]=ca,P[dr]=V,me=dr):(P[me]=uc,P[hr]=V,me=hr);else if(dr<Te&&0>i(ca,V))P[me]=ca,P[dr]=V,me=dr;else break e}}return B}function i(P,B){var V=P.sortIndex-B.sortIndex;return V!==0?V:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=P)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function w(P){if(v=!1,m(P),!y)if(n(l)!==null)y=!0,ac(k);else{var B=n(u);B!==null&&lc(w,B.startTime-P)}}function k(P,B){y=!1,v&&(v=!1,p(O),O=-1),g=!0;var V=d;try{for(m(B),h=n(l);h!==null&&(!(h.expirationTime>B)||P&&!Dt());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var Te=me(h.expirationTime<=B);B=t.unstable_now(),typeof Te=="function"?h.callback=Te:h===n(l)&&r(l),m(B)}else r(l);h=n(l)}if(h!==null)var ua=!0;else{var hr=n(u);hr!==null&&lc(w,hr.startTime-B),ua=!1}return ua}finally{h=null,d=V,g=!1}}var R=!1,N=null,O=-1,K=5,z=-1;function Dt(){return!(t.unstable_now()-z<K)}function ls(){if(N!==null){var P=t.unstable_now();z=P;var B=!0;try{B=N(!0,P)}finally{B?us():(R=!1,N=null)}}else R=!1}var us;if(typeof f=="function")us=function(){f(ls)};else if(typeof MessageChannel<"u"){var om=new MessageChannel,iI=om.port2;om.port1.onmessage=ls,us=function(){iI.postMessage(null)}}else us=function(){E(ls,0)};function ac(P){N=P,R||(R=!0,us())}function lc(P,B){O=E(function(){P(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,ac(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var V=d;d=B;try{return P()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=d;d=P;try{return B()}finally{d=V}},t.unstable_scheduleCallback=function(P,B,V){var me=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?me+V:me):V=me,P){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=V+Te,P={id:c++,callback:B,priorityLevel:P,startTime:V,expirationTime:Te,sortIndex:-1},V>me?(P.sortIndex=V,e(u,P),n(l)===null&&P===n(u)&&(v?(p(O),O=-1):v=!0,lc(w,V-me))):(P.sortIndex=Te,e(l,P),y||g||(y=!0,ac(k))),P},t.unstable_shouldYield=Dt,t.unstable_wrapCallback=function(P){var B=d;return function(){var V=d;d=B;try{return P.apply(this,arguments)}finally{d=V}}}})(pv);fv.exports=pv;var NI=fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=S,yt=NI;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gv=new Set,Qs={};function Br(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(Qs[t]=e,t=0;t<e.length;t++)gv.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,DI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},hm={};function xI(t){return uh.call(hm,t)?!0:uh.call(cm,t)?!1:DI.test(t)?hm[t]=!0:(cm[t]=!0,!1)}function PI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OI(t,e,n,r){if(e===null||typeof e>"u"||PI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);be[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);be[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Gd);be[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OI(e,n,i,r)&&(n=null),r||i===null?xI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),dm=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,hc;function _s(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function LI(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ni:return"Fragment";case ti:return"Portal";case ch:return"Profiler";case qd:return"StrictMode";case hh:return"Suspense";case dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case yv:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case kn:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function MI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UI(t){var e=Ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=UI(t))}function _v(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ev(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iv(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function mh(t,e){Iv(t,e);var n=Xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,Xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Is(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xn(n)}}function Sv(t,e){var n=Xn(e.value),r=Xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pa,Tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bI=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){bI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function Cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FI=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wh(t,e){if(e){if(FI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ih=null,yi=null,vi=null;function ym(t){if(t=Mo(t)){if(typeof Ih!="function")throw Error(A(280));var e=t.stateNode;e&&(e=uu(e),Ih(t.stateNode,t.type,e))}}function Rv(t){yi?vi?vi.push(t):vi=[t]:yi=t}function Nv(){if(yi){var t=yi,e=vi;if(vi=yi=null,ym(t),e)for(t=0;t<e.length;t++)ym(e[t])}}function Dv(t,e){return t(e)}function xv(){}var pc=!1;function Pv(t,e,n){if(pc)return t(e,n);pc=!0;try{return Dv(t,e,n)}finally{pc=!1,(yi!==null||vi!==null)&&(xv(),Nv())}}function Xs(t,e){var n=t.stateNode;if(n===null)return null;var r=uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Sh=!1;if(pn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Sh=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Sh=!1}function $I(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ls=!1,ll=null,ul=!1,Ah=null,jI={onError:function(t){Ls=!0,ll=t}};function BI(t,e,n,r,i,s,o,a,l){Ls=!1,ll=null,$I.apply(jI,arguments)}function VI(t,e,n,r,i,s,o,a,l){if(BI.apply(this,arguments),Ls){if(Ls){var u=ll;Ls=!1,ll=null}else throw Error(A(198));ul||(ul=!0,Ah=u)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(Vr(t)!==t)throw Error(A(188))}function zI(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vm(i),t;if(s===r)return vm(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function Lv(t){return t=zI(t),t!==null?Mv(t):null}function Mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mv(t);if(e!==null)return e;t=t.sibling}return null}var Uv=yt.unstable_scheduleCallback,wm=yt.unstable_cancelCallback,HI=yt.unstable_shouldYield,GI=yt.unstable_requestPaint,ge=yt.unstable_now,WI=yt.unstable_getCurrentPriorityLevel,Xd=yt.unstable_ImmediatePriority,bv=yt.unstable_UserBlockingPriority,cl=yt.unstable_NormalPriority,qI=yt.unstable_LowPriority,Fv=yt.unstable_IdlePriority,su=null,Kt=null;function KI(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:XI,QI=Math.log,YI=Math.LN2;function XI(t){return t>>>=0,t===0?32:31-(QI(t)/YI|0)|0}var ma=64,ga=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ss(a):(s&=o,s!==0&&(r=Ss(s)))}else o=n&~i,o!==0?r=Ss(o):s!==0&&(r=Ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function JI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $v(){var t=ma;return ma<<=1,!(ma&4194240)&&(ma=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function eS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function jv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bv,Zd,Vv,zv,Hv,kh=!1,ya=[],$n=null,jn=null,Bn=null,Js=new Map,Zs=new Map,Rn=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Em(t,e){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Mo(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nS(t,e,n,r,i){switch(e){case"focusin":return $n=ds($n,t,e,n,r,i),!0;case"dragenter":return jn=ds(jn,t,e,n,r,i),!0;case"mouseover":return Bn=ds(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Js.set(s,ds(Js.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zs.set(s,ds(Zs.get(s)||null,t,e,n,r,i)),!0}return!1}function Gv(t){var e=gr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,Hv(t.priority,function(){Vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ch(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_h=r,n.target.dispatchEvent(r),_h=null}else return e=Mo(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function _m(t,e,n){za(t)&&n.delete(e)}function rS(){kh=!1,$n!==null&&za($n)&&($n=null),jn!==null&&za(jn)&&(jn=null),Bn!==null&&za(Bn)&&(Bn=null),Js.forEach(_m),Zs.forEach(_m)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,rS)))}function eo(t){function e(i){return fs(i,t)}if(0<ya.length){fs(ya[0],t);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===t&&(r.blockedOn=null)}}for($n!==null&&fs($n,t),jn!==null&&fs(jn,t),Bn!==null&&fs(Bn,t),Js.forEach(e),Zs.forEach(e),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&Rn.shift()}var wi=Sn.ReactCurrentBatchConfig,dl=!0;function iS(t,e,n,r){var i=X,s=wi.transition;wi.transition=null;try{X=1,ef(t,e,n,r)}finally{X=i,wi.transition=s}}function sS(t,e,n,r){var i=X,s=wi.transition;wi.transition=null;try{X=4,ef(t,e,n,r)}finally{X=i,wi.transition=s}}function ef(t,e,n,r){if(dl){var i=Ch(t,e,n,r);if(i===null)Tc(t,e,r,fl,n),Em(t,r);else if(nS(i,t,e,n,r))r.stopPropagation();else if(Em(t,r),e&4&&-1<tS.indexOf(t)){for(;i!==null;){var s=Mo(i);if(s!==null&&Bv(s),s=Ch(t,e,n,r),s===null&&Tc(t,e,r,fl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Tc(t,e,r,null,n)}}var fl=null;function Ch(t,e,n,r){if(fl=null,t=Yd(r),t=gr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fl=t,null}function Wv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WI()){case Xd:return 1;case bv:return 4;case cl:case qI:return 16;case Fv:return 536870912;default:return 16}default:return 16}}var Mn=null,tf=null,Ha=null;function qv(){if(Ha)return Ha;var t,e=tf,n=e.length,r,i="value"in Mn?Mn.value:Mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function Im(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?va:Im,this.isPropagationStopped=Im,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=Et(Wi),Lo=ce({},Wi,{view:0,detail:0}),oS=Et(Lo),gc,yc,ps,ou=ce({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(gc=t.screenX-ps.screenX,yc=t.screenY-ps.screenY):yc=gc=0,ps=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Sm=Et(ou),aS=ce({},ou,{dataTransfer:0}),lS=Et(aS),uS=ce({},Lo,{relatedTarget:0}),vc=Et(uS),cS=ce({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=Et(cS),dS=ce({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fS=Et(dS),pS=ce({},Wi,{data:0}),Am=Et(pS),mS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yS[t])?!!e[t]:!1}function rf(){return vS}var wS=ce({},Lo,{key:function(t){if(t.key){var e=mS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ES=Et(wS),_S=ce({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Et(_S),IS=ce({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),SS=Et(IS),AS=ce({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=Et(AS),kS=ce({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Et(kS),RS=[9,13,27,32],sf=pn&&"CompositionEvent"in window,Ms=null;pn&&"documentMode"in document&&(Ms=document.documentMode);var NS=pn&&"TextEvent"in window&&!Ms,Kv=pn&&(!sf||Ms&&8<Ms&&11>=Ms),km=String.fromCharCode(32),Cm=!1;function Qv(t,e){switch(t){case"keyup":return RS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function DS(t,e){switch(t){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(Cm=!0,km);case"textInput":return t=e.data,t===km&&Cm?null:t;default:return null}}function xS(t,e){if(ri)return t==="compositionend"||!sf&&Qv(t,e)?(t=qv(),Ha=tf=Mn=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var PS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PS[t.type]:e==="textarea"}function Xv(t,e,n,r){Rv(r),e=pl(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Us=null,to=null;function OS(t){l0(t,0)}function au(t){var e=oi(t);if(_v(e))return t}function LS(t,e){if(t==="change")return e}var Jv=!1;if(pn){var wc;if(pn){var Ec="oninput"in document;if(!Ec){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Ec=typeof Nm.oninput=="function"}wc=Ec}else wc=!1;Jv=wc&&(!document.documentMode||9<document.documentMode)}function Dm(){Us&&(Us.detachEvent("onpropertychange",Zv),to=Us=null)}function Zv(t){if(t.propertyName==="value"&&au(to)){var e=[];Xv(e,to,t,Yd(t)),Pv(OS,e)}}function MS(t,e,n){t==="focusin"?(Dm(),Us=e,to=n,Us.attachEvent("onpropertychange",Zv)):t==="focusout"&&Dm()}function US(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(to)}function bS(t,e){if(t==="click")return au(e)}function FS(t,e){if(t==="input"||t==="change")return au(e)}function $S(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:$S;function no(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uh.call(e,i)||!bt(t[i],e[i]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,e){var n=xm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xm(n)}}function e0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t0(){for(var t=window,e=al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=al(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jS(t){var e=t0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e0(n.ownerDocument.documentElement,n)){if(r!==null&&of(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pm(n,s);var o=Pm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BS=pn&&"documentMode"in document&&11>=document.documentMode,ii=null,Rh=null,bs=null,Nh=!1;function Om(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nh||ii==null||ii!==al(r)||(r=ii,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&no(bs,r)||(bs=r,r=pl(Rh,"onSelect"),0<r.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},_c={},n0={};pn&&(n0=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function lu(t){if(_c[t])return _c[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n0)return _c[t]=e[n];return t}var r0=lu("animationend"),i0=lu("animationiteration"),s0=lu("animationstart"),o0=lu("transitionend"),a0=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){a0.set(t,e),Br(e,[t])}for(var Ic=0;Ic<Lm.length;Ic++){var Sc=Lm[Ic],VS=Sc.toLowerCase(),zS=Sc[0].toUpperCase()+Sc.slice(1);rr(VS,"on"+zS)}rr(r0,"onAnimationEnd");rr(i0,"onAnimationIteration");rr(s0,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(o0,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VI(r,e,void 0,t),t.currentTarget=null}function l0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Mm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Mm(i,a,u),s=l}}}if(ul)throw t=Ah,ul=!1,Ah=null,t}function ee(t,e){var n=e[Lh];n===void 0&&(n=e[Lh]=new Set);var r=t+"__bubble";n.has(r)||(u0(e,t,2,!1),n.add(r))}function Ac(t,e,n){var r=0;e&&(r|=4),u0(n,t,r,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[Ea]){t[Ea]=!0,gv.forEach(function(n){n!=="selectionchange"&&(HS.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,Ac("selectionchange",!1,e))}}function u0(t,e,n,r){switch(Wv(e)){case 1:var i=iS;break;case 4:i=sS;break;default:i=ef}n=i.bind(null,e,n,t),i=void 0,!Sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Tc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Pv(function(){var u=s,c=Yd(n),h=[];e:{var d=a0.get(t);if(d!==void 0){var g=nf,y=t;switch(t){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":g=ES;break;case"focusin":y="focus",g=vc;break;case"focusout":y="blur",g=vc;break;case"beforeblur":case"afterblur":g=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=SS;break;case r0:case i0:case s0:g=hS;break;case o0:g=TS;break;case"scroll":g=oS;break;case"wheel":g=CS;break;case"copy":case"cut":case"paste":g=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Tm}var v=(e&4)!==0,E=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Xs(f,p),w!=null&&v.push(io(f,w,m)))),E)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==_h&&(y=n.relatedTarget||n.fromElement)&&(gr(y)||y[mn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?gr(y):null,y!==null&&(E=Vr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Sm,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Tm,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=g==null?d:oi(g),m=y==null?d:oi(y),d=new v(w,f+"leave",g,n,c),d.target=E,d.relatedTarget=m,w=null,gr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=E,w=v),E=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=Qr(m))f++;for(m=0,w=p;w;w=Qr(w))m++;for(;0<f-m;)v=Qr(v),f--;for(;0<m-f;)p=Qr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Qr(v),p=Qr(p)}v=null}else v=null;g!==null&&Um(h,d,g,v,!1),y!==null&&E!==null&&Um(h,E,y,v,!0)}}e:{if(d=u?oi(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var k=LS;else if(Rm(d))if(Jv)k=FS;else{k=US;var R=MS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=bS);if(k&&(k=k(t,u))){Xv(h,k,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&gh(d,"number",d.value)}switch(R=u?oi(u):window,t){case"focusin":(Rm(R)||R.contentEditable==="true")&&(ii=R,Rh=u,bs=null);break;case"focusout":bs=Rh=ii=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,Om(h,n,c);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":Om(h,n,c)}var N;if(sf)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ri?Qv(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Kv&&n.locale!=="ko"&&(ri||O!=="onCompositionStart"?O==="onCompositionEnd"&&ri&&(N=qv()):(Mn=c,tf="value"in Mn?Mn.value:Mn.textContent,ri=!0)),R=pl(u,O),0<R.length&&(O=new Am(O,t,null,n,c),h.push({event:O,listeners:R}),N?O.data=N:(N=Yv(n),N!==null&&(O.data=N)))),(N=NS?DS(t,n):xS(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(c=new Am("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}l0(h,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xs(t,n),s!=null&&r.unshift(io(t,s,i)),s=Xs(t,e),s!=null&&r.push(io(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Um(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Xs(n,s),l!=null&&o.unshift(io(n,l,a))):i||(l=Xs(n,s),l!=null&&o.push(io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function bm(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(WS,"")}function _a(t,e,n){if(e=bm(e),bm(t)!==e&&n)throw Error(A(425))}function ml(){}var Dh=null,xh=null;function Ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,KS=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(t){return Fm.resolve(null).then(t).catch(QS)}:Oh;function QS(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eo(e)}function Vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),zt="__reactFiber$"+qi,so="__reactProps$"+qi,mn="__reactContainer$"+qi,Lh="__reactEvents$"+qi,YS="__reactListeners$"+qi,XS="__reactHandles$"+qi;function gr(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$m(t);t!==null;){if(n=t[zt])return n;t=$m(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[zt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function uu(t){return t[so]||null}var Mh=[],ai=-1;function ir(t){return{current:t}}function re(t){0>ai||(t.current=Mh[ai],Mh[ai]=null,ai--)}function Z(t,e){ai++,Mh[ai]=t.current,t.current=e}var Jn={},Qe=ir(Jn),lt=ir(!1),Cr=Jn;function Ni(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function gl(){re(lt),re(Qe)}function jm(t,e,n){if(Qe.current!==Jn)throw Error(A(168));Z(Qe,e),Z(lt,n)}function c0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,MI(t)||"Unknown",i));return ce({},n,r)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Cr=Qe.current,Z(Qe,t),Z(lt,lt.current),!0}function Bm(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=c0(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,re(lt),re(Qe),Z(Qe,t)):re(lt),Z(lt,n)}var sn=null,cu=!1,Cc=!1;function h0(t){sn===null?sn=[t]:sn.push(t)}function JS(t){cu=!0,h0(t)}function sr(){if(!Cc&&sn!==null){Cc=!0;var t=0,e=X;try{var n=sn;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,cu=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),Uv(Xd,sr),i}finally{X=e,Cc=!1}}return null}var li=[],ui=0,vl=null,wl=0,_t=[],It=0,Rr=null,on=1,an="";function fr(t,e){li[ui++]=wl,li[ui++]=vl,vl=t,wl=e}function d0(t,e,n){_t[It++]=on,_t[It++]=an,_t[It++]=Rr,Rr=t;var r=on;t=an;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-Mt(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function af(t){t.return!==null&&(fr(t,1),d0(t,1,0))}function lf(t){for(;t===vl;)vl=li[--ui],li[ui]=null,wl=li[--ui],li[ui]=null;for(;t===Rr;)Rr=_t[--It],_t[It]=null,an=_t[--It],_t[It]=null,on=_t[--It],_t[It]=null}var gt=null,ft=null,oe=!1,Lt=null;function f0(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,ft=Vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,ft=null,!0):!1;default:return!1}}function Uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bh(t){if(oe){var e=ft;if(e){var n=e;if(!Vm(t,e)){if(Uh(t))throw Error(A(418));e=Vn(n.nextSibling);var r=gt;e&&Vm(t,e)?f0(r,n):(t.flags=t.flags&-4097|2,oe=!1,gt=t)}}else{if(Uh(t))throw Error(A(418));t.flags=t.flags&-4097|2,oe=!1,gt=t}}}function zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function Ia(t){if(t!==gt)return!1;if(!oe)return zm(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ph(t.type,t.memoizedProps)),e&&(e=ft)){if(Uh(t))throw p0(),Error(A(418));for(;e;)f0(t,e),e=Vn(e.nextSibling)}if(zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=Vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=gt?Vn(t.stateNode.nextSibling):null;return!0}function p0(){for(var t=ft;t;)t=Vn(t.nextSibling)}function Di(){ft=gt=null,oe=!1}function uf(t){Lt===null?Lt=[t]:Lt.push(t)}var ZS=Sn.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var El=ir(null),_l=null,ci=null,cf=null;function hf(){cf=ci=_l=null}function df(t){var e=El.current;re(El),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){_l=t,cf=ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(cf!==t)if(t={context:t,memoizedValue:e,next:null},ci===null){if(_l===null)throw Error(A(308));ci=t,_l.dependencies={lanes:0,firstContext:t}}else ci=ci.next=t;return e}var yr=null;function ff(t){yr===null?yr=[t]:yr.push(t)}function m0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ff(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function g0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,ff(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=ce({},h,d);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=h}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var y0=new mv.Component().refs;function $h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Gn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Ut(e,t,i,r),Wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Gn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Ut(e,t,i,r),Wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=Gn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Ut(e,t,r,n),Wa(e,t,r))}};function Wm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!no(n,r)||!no(i,s):!0}function v0(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ut(e)?Cr:Qe.current,r=e.contextTypes,s=(r=r!=null)?Ni(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=y0,pf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ut(e)?Cr:Qe.current,i.context=Ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),Il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===y0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function w0(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Lc(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var k=m.type;return k===ni?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kn&&Km(k)===f.type)?(w=i(f,m.props),w.ref=ms(p,f,m),w.return=p,w):(w=Ja(m.type,m.key,m.props,null,p.mode,w),w.ref=ms(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Mc(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,k){return f===null||f.tag!==7?(f=Sr(m,p.mode,w,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Lc(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case da:return m=Ja(f.type,f.key,f.props,null,p.mode,m),m.ref=ms(p,null,f),m.return=p,m;case ti:return f=Mc(f,p.mode,m),f.return=p,f;case kn:var w=f._init;return h(p,w(f._payload),m)}if(Is(f)||cs(f))return f=Sr(f,p.mode,m,null),f.return=p,f;Sa(p,f)}return null}function d(p,f,m,w){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case da:return m.key===k?l(p,f,m,w):null;case ti:return m.key===k?u(p,f,m,w):null;case kn:return k=m._init,d(p,f,k(m._payload),w)}if(Is(m)||cs(m))return k!==null?null:c(p,f,m,w,null);Sa(p,m)}return null}function g(p,f,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case da:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,k);case ti:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,k);case kn:var R=w._init;return g(p,f,m,R(w._payload),k)}if(Is(w)||cs(w))return p=p.get(m)||null,c(f,p,w,k,null);Sa(f,w)}return null}function y(p,f,m,w){for(var k=null,R=null,N=f,O=f=0,K=null;N!==null&&O<m.length;O++){N.index>O?(K=N,N=null):K=N.sibling;var z=d(p,N,m[O],w);if(z===null){N===null&&(N=K);break}t&&N&&z.alternate===null&&e(p,N),f=s(z,f,O),R===null?k=z:R.sibling=z,R=z,N=K}if(O===m.length)return n(p,N),oe&&fr(p,O),k;if(N===null){for(;O<m.length;O++)N=h(p,m[O],w),N!==null&&(f=s(N,f,O),R===null?k=N:R.sibling=N,R=N);return oe&&fr(p,O),k}for(N=r(p,N);O<m.length;O++)K=g(N,p,O,m[O],w),K!==null&&(t&&K.alternate!==null&&N.delete(K.key===null?O:K.key),f=s(K,f,O),R===null?k=K:R.sibling=K,R=K);return t&&N.forEach(function(Dt){return e(p,Dt)}),oe&&fr(p,O),k}function v(p,f,m,w){var k=cs(m);if(typeof k!="function")throw Error(A(150));if(m=k.call(m),m==null)throw Error(A(151));for(var R=k=null,N=f,O=f=0,K=null,z=m.next();N!==null&&!z.done;O++,z=m.next()){N.index>O?(K=N,N=null):K=N.sibling;var Dt=d(p,N,z.value,w);if(Dt===null){N===null&&(N=K);break}t&&N&&Dt.alternate===null&&e(p,N),f=s(Dt,f,O),R===null?k=Dt:R.sibling=Dt,R=Dt,N=K}if(z.done)return n(p,N),oe&&fr(p,O),k;if(N===null){for(;!z.done;O++,z=m.next())z=h(p,z.value,w),z!==null&&(f=s(z,f,O),R===null?k=z:R.sibling=z,R=z);return oe&&fr(p,O),k}for(N=r(p,N);!z.done;O++,z=m.next())z=g(N,p,O,z.value,w),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?O:z.key),f=s(z,f,O),R===null?k=z:R.sibling=z,R=z);return t&&N.forEach(function(ls){return e(p,ls)}),oe&&fr(p,O),k}function E(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===ni&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case da:e:{for(var k=m.key,R=f;R!==null;){if(R.key===k){if(k=m.type,k===ni){if(R.tag===7){n(p,R.sibling),f=i(R,m.props.children),f.return=p,p=f;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kn&&Km(k)===R.type){n(p,R.sibling),f=i(R,m.props),f.ref=ms(p,R,m),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===ni?(f=Sr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Ja(m.type,m.key,m.props,null,p.mode,w),w.ref=ms(p,f,m),w.return=p,p=w)}return o(p);case ti:e:{for(R=m.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Mc(m,p.mode,w),f.return=p,p=f}return o(p);case kn:return R=m._init,E(p,f,R(m._payload),w)}if(Is(m))return y(p,f,m,w);if(cs(m))return v(p,f,m,w);Sa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Lc(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var xi=w0(!0),E0=w0(!1),Uo={},Qt=ir(Uo),oo=ir(Uo),ao=ir(Uo);function vr(t){if(t===Uo)throw Error(A(174));return t}function mf(t,e){switch(Z(ao,e),Z(oo,t),Z(Qt,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vh(e,t)}re(Qt),Z(Qt,e)}function Pi(){re(Qt),re(oo),re(ao)}function _0(t){vr(ao.current);var e=vr(Qt.current),n=vh(e,t.type);e!==n&&(Z(oo,t),Z(Qt,n))}function gf(t){oo.current===t&&(re(Qt),re(oo))}var le=ir(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function yf(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var qa=Sn.ReactCurrentDispatcher,Nc=Sn.ReactCurrentBatchConfig,Nr=0,ue=null,Se=null,Ce=null,Al=!1,Fs=!1,lo=0,eA=0;function Fe(){throw Error(A(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,i,s){if(Nr=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qa.current=t===null||t.memoizedState===null?iA:sA,t=n(r,i),Fs){s=0;do{if(Fs=!1,lo=0,25<=s)throw Error(A(301));s+=1,Ce=Se=null,e.updateQueue=null,qa.current=oA,t=n(r,i)}while(Fs)}if(qa.current=Tl,e=Se!==null&&Se.next!==null,Nr=0,Ce=Se=ue=null,Al=!1,e)throw Error(A(300));return t}function Ef(){var t=lo!==0;return lo=0,t}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function Nt(){if(Se===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=Ce===null?ue.memoizedState:Ce.next;if(e!==null)Ce=e,Se=t;else{if(t===null)throw Error(A(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function uo(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ue.lanes|=c,Dr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,bt(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bt(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function I0(){}function S0(t,e){var n=ue,r=Nt(),i=e(),s=!bt(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,_f(k0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,co(9,T0.bind(null,n,r,i,e),void 0,null),Re===null)throw Error(A(349));Nr&30||A0(n,e,i)}return i}function A0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,r){e.value=n,e.getSnapshot=r,C0(e)&&R0(t)}function k0(t,e,n){return n(function(){C0(e)&&R0(t)})}function C0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function R0(t){var e=gn(t,1);e!==null&&Ut(e,t,1,-1)}function Qm(t){var e=Vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=rA.bind(null,ue,t),[e.memoizedState,t]}function co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N0(){return Nt().memoizedState}function Ka(t,e,n,r){var i=Vt();ue.flags|=t,i.memoizedState=co(1|e,n,void 0,r===void 0?null:r)}function du(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(Se!==null){var o=Se.memoizedState;if(s=o.destroy,r!==null&&vf(r,o.deps)){i.memoizedState=co(e,n,s,r);return}}ue.flags|=t,i.memoizedState=co(1|e,n,s,r)}function Ym(t,e){return Ka(8390656,8,t,e)}function _f(t,e){return du(2048,8,t,e)}function D0(t,e){return du(4,2,t,e)}function x0(t,e){return du(4,4,t,e)}function P0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O0(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,P0.bind(null,e,t),n)}function If(){}function L0(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function M0(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function U0(t,e,n){return Nr&21?(bt(n,e)||(n=$v(),ue.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function tA(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=Nc.transition;Nc.transition={};try{t(!1),e()}finally{X=n,Nc.transition=r}}function b0(){return Nt().memoizedState}function nA(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F0(t))$0(e,n);else if(n=m0(t,e,n,r),n!==null){var i=tt();Ut(n,t,r,i),j0(n,e,r)}}function rA(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F0(t))$0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,bt(a,o)){var l=e.interleaved;l===null?(i.next=i,ff(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=m0(t,e,i,r),n!==null&&(i=tt(),Ut(n,t,r,i),j0(n,e,r))}}function F0(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function $0(t,e){Fs=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}var Tl={readContext:Rt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},iA={readContext:Rt,useCallback:function(t,e){return Vt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:Ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,P0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=Vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nA.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Vt();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:If,useDeferredValue:function(t){return Vt().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=tA.bind(null,t[1]),Vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Vt();if(oe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Re===null)throw Error(A(349));Nr&30||A0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ym(k0.bind(null,r,s,t),[t]),r.flags|=2048,co(9,T0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vt(),e=Re.identifierPrefix;if(oe){var n=an,r=on;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sA={readContext:Rt,useCallback:L0,useContext:Rt,useEffect:_f,useImperativeHandle:O0,useInsertionEffect:D0,useLayoutEffect:x0,useMemo:M0,useReducer:Dc,useRef:N0,useState:function(){return Dc(uo)},useDebugValue:If,useDeferredValue:function(t){var e=Nt();return U0(e,Se.memoizedState,t)},useTransition:function(){var t=Dc(uo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:S0,useId:b0,unstable_isNewReconciler:!1},oA={readContext:Rt,useCallback:L0,useContext:Rt,useEffect:_f,useImperativeHandle:O0,useInsertionEffect:D0,useLayoutEffect:x0,useMemo:M0,useReducer:xc,useRef:N0,useState:function(){return xc(uo)},useDebugValue:If,useDeferredValue:function(t){var e=Nt();return Se===null?e.memoizedState=t:U0(e,Se.memoizedState,t)},useTransition:function(){var t=xc(uo)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:S0,useId:b0,unstable_isNewReconciler:!1};function Oi(t,e){try{var n="",r=e;do n+=LI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aA=typeof WeakMap=="function"?WeakMap:Map;function B0(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cl||(Cl=!0,Xh=r),Bh(t,e)},n}function V0(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_A.bind(null,t,e,n),e.then(t,t))}function Jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var lA=Sn.ReactCurrentOwner,at=!1;function Ze(t,e,n,r){e.child=t===null?E0(e,null,n,r):xi(e,t.child,n,r)}function eg(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=wf(t,e,n,r,s,i),n=Ef(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(oe&&n&&af(e),e.flags|=1,Ze(t,e,r,i),e.child)}function tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z0(t,e,s,r,i)):(t=Ja(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function z0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(no(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,yn(t,e,i)}return Vh(t,e,n,r,i)}function H0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(di,ht),ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(di,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(di,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(di,ht),ht|=r;return Ze(t,e,i,n),e.child}function G0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vh(t,e,n,r,i){var s=ut(n)?Cr:Qe.current;return s=Ni(e,s),Ei(e,i),n=wf(t,e,n,r,s,i),r=Ef(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(oe&&r&&af(e),e.flags|=1,Ze(t,e,n,i),e.child)}function ng(t,e,n,r,i){if(ut(n)){var s=!0;yl(e)}else s=!1;if(Ei(e,i),e.stateNode===null)Qa(t,e),v0(e,n,r),jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ut(n)?Cr:Qe.current,u=Ni(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qm(e,o,r,u),Cn=!1;var d=e.memoizedState;o.state=d,Il(e,r,o,i),l=e.memoizedState,a!==r||d!==l||lt.current||Cn?(typeof c=="function"&&($h(e,n,c,r),l=e.memoizedState),(a=Cn||Wm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,g0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=ut(n)?Cr:Qe.current,l=Ni(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&qm(e,o,r,l),Cn=!1,d=e.memoizedState,o.state=d,Il(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||lt.current||Cn?(typeof g=="function"&&($h(e,n,g,r),y=e.memoizedState),(u=Cn||Wm(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,s,i)}function zh(t,e,n,r,i,s){G0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bm(e,n,!1),yn(t,e,s);r=e.stateNode,lA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xi(e,t.child,null,s),e.child=xi(e,null,a,s)):Ze(t,e,a,s),e.memoizedState=r.state,i&&Bm(e,n,!0),e.child}function W0(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),mf(t,e.containerInfo)}function rg(t,e,n,r,i){return Di(),uf(i),e.flags|=256,Ze(t,e,n,r),e.child}var Hh={dehydrated:null,treeContext:null,retryLane:0};function Gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function q0(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(le,i&1),t===null)return bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,r,0,null),t=Sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gh(n),e.memoizedState=Hh,t):Sf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hh,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,r){return r!==null&&uf(r),xi(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pc(Error(A(422))),Aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mu({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xi(e,t.child,null,o),e.child.memoizedState=Gh(o),e.memoizedState=Hh,s);if(!(e.mode&1))return Aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Pc(s,r,void 0),Aa(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Ut(r,t,i,-1))}return Nf(),r=Pc(Error(A(421))),Aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=IA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=Vn(i.nextSibling),gt=e,oe=!0,Lt=null,t!==null&&(_t[It++]=on,_t[It++]=an,_t[It++]=Rr,on=t.id,an=t.overflow,Rr=e),e=Sf(e,r.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function Oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function K0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cA(t,e,n){switch(e.tag){case 3:W0(e),Di();break;case 5:_0(e);break;case 1:ut(e.type)&&yl(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(El,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?q0(t,e,n):(Z(le,le.current&1),t=yn(t,e,n),t!==null?t.sibling:null);Z(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return K0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,H0(t,e,n)}return yn(t,e,n)}var Q0,Wh,Y0,X0;Q0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wh=function(){};Y0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vr(Qt.current);var s=null;switch(n){case"input":i=ph(t,i),r=ph(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=yh(t,i),r=yh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ml)}wh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};X0=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hA(t,e,n){var r=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return ut(e.type)&&gl(),$e(e),null;case 3:return r=e.stateNode,Pi(),re(lt),re(Qe),yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lt!==null&&(ed(Lt),Lt=null))),Wh(t,e),$e(e),null;case 5:gf(e);var i=vr(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Y0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return $e(e),null}if(t=vr(Qt.current),Ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zt]=e,r[so]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)ee(As[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":fm(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":mm(r,s),ee("invalid",r)}wh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,a,t),i=["children",""+a]):Qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":fa(r),pm(r,s,!0);break;case"textarea":fa(r),gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ml)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zt]=e,t[so]=r,Q0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Eh(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)ee(As[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":fm(t,r),i=ph(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ee("invalid",t);break;case"textarea":mm(t,r),i=yh(t,r),ee("invalid",t);break;default:i=r}wh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Cv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Wd(t,s,l,o))}switch(n){case"input":fa(t),pm(t,r,!1);break;case"textarea":fa(t),gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)X0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=vr(ao.current),vr(Qt.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[zt]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:_a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r}return $e(e),null;case 13:if(re(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&ft!==null&&e.mode&1&&!(e.flags&128))p0(),Di(),e.flags|=98560,s=!1;else if(s=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[zt]=e}else Di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Lt!==null&&(ed(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?Ae===0&&(Ae=3):Nf())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Pi(),Wh(t,e),t===null&&ro(e.stateNode.containerInfo),$e(e),null;case 10:return df(e.type._context),$e(e),null;case 17:return ut(e.type)&&gl(),$e(e),null;case 19:if(re(le),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>Li&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return $e(e),null}else 2*ge()-s.renderingStartTime>Li&&n!==1073741824&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=le.current,Z(le,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ht&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function dA(t,e){switch(lf(e),e.tag){case 1:return ut(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pi(),re(lt),re(Qe),yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(re(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(le),null;case 4:return Pi(),null;case 10:return df(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var Ta=!1,Ve=!1,fA=typeof WeakSet=="function"?WeakSet:Set,x=null;function hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function qh(t,e,n){try{n()}catch(r){fe(t,e,r)}}var sg=!1;function pA(t,e){if(Dh=dl,t=t0(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},dl=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Pt(e.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=sg,sg=!1,y}function $s(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qh(e,n,s)}i=i.next}while(i!==r)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J0(t){var e=t.alternate;e!==null&&(t.alternate=null,J0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zt],delete e[so],delete e[Lh],delete e[YS],delete e[XS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z0(t){return t.tag===5||t.tag===3||t.tag===4}function og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}var Pe=null,Ot=!1;function An(t,e,n){for(n=n.child;n!==null;)ew(t,e,n),n=n.sibling}function ew(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:Ve||hi(n,e);case 6:var r=Pe,i=Ot;Pe=null,An(t,e,n),Pe=r,Ot=i,Pe!==null&&(Ot?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Ot?(t=Pe,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),eo(t)):kc(Pe,n.stateNode));break;case 4:r=Pe,i=Ot,Pe=n.stateNode.containerInfo,Ot=!0,An(t,e,n),Pe=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qh(n,e,o),i=i.next}while(i!==r)}An(t,e,n);break;case 1:if(!Ve&&(hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,An(t,e,n),Ve=r):An(t,e,n);break;default:An(t,e,n)}}function ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fA),e.forEach(function(r){var i=SA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Ot=!1;break e;case 3:Pe=a.stateNode.containerInfo,Ot=!0;break e;case 4:Pe=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(Pe===null)throw Error(A(160));ew(s,o,i),Pe=null,Ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tw(e,t),e=e.sibling}function tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Bt(t),r&4){try{$s(3,t,t.return),fu(3,t)}catch(v){fe(t,t.return,v)}try{$s(5,t,t.return)}catch(v){fe(t,t.return,v)}}break;case 1:xt(e,t),Bt(t),r&512&&n!==null&&hi(n,n.return);break;case 5:if(xt(e,t),Bt(t),r&512&&n!==null&&hi(n,n.return),t.flags&32){var i=t.stateNode;try{Ys(i,"")}catch(v){fe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Iv(i,s),Eh(a,o);var u=Eh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Cv(i,h):c==="dangerouslySetInnerHTML"?Tv(i,h):c==="children"?Ys(i,h):Wd(i,c,h,u)}switch(a){case"input":mh(i,s);break;case"textarea":Sv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?gi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[so]=s}catch(v){fe(t,t.return,v)}}break;case 6:if(xt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){fe(t,t.return,v)}}break;case 3:if(xt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(v){fe(t,t.return,v)}break;case 4:xt(e,t),Bt(t);break;case 13:xt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kf=ge())),r&4&&ag(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ve=(u=Ve)||c,xt(e,t),Ve=u):xt(e,t),Bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,g=d.child,d.tag){case 0:case 11:case 14:case 15:$s(4,d,d.return);break;case 1:hi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){fe(r,n,v)}}break;case 5:hi(d,d.return);break;case 22:if(d.memoizedState!==null){ug(h);continue}}g!==null?(g.return=d,x=g):ug(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kv("display",o))}catch(v){fe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){fe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xt(e,t),Bt(t),r&4&&ag(t);break;case 21:break;default:xt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ys(i,""),r.flags&=-33);var s=og(t);Yh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=og(t);Qh(t,a,o);break;default:throw Error(A(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mA(t,e,n){x=t,nw(t)}function nw(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ta;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ve;a=Ta;var u=Ve;if(Ta=o,(Ve=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?cg(i):l!==null?(l.return=o,x=l):cg(i);for(;s!==null;)x=s,nw(s),s=s.sibling;x=i,Ta=a,Ve=u}lg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):lg(t)}}function lg(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ve||fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&eo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ve||e.flags&512&&Kh(e)}catch(d){fe(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function ug(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function cg(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{Kh(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{Kh(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var gA=Math.ceil,kl=Sn.ReactCurrentDispatcher,Af=Sn.ReactCurrentOwner,kt=Sn.ReactCurrentBatchConfig,q=0,Re=null,_e=null,Me=0,ht=0,di=ir(0),Ae=0,ho=null,Dr=0,pu=0,Tf=0,js=null,st=null,kf=0,Li=1/0,rn=null,Cl=!1,Xh=null,Hn=null,ka=!1,Un=null,Rl=0,Bs=0,Jh=null,Ya=-1,Xa=0;function tt(){return q&6?ge():Ya!==-1?Ya:Ya=ge()}function Gn(t){return t.mode&1?q&2&&Me!==0?Me&-Me:ZS.transition!==null?(Xa===0&&(Xa=$v()),Xa):(t=X,t!==0||(t=window.event,t=t===void 0?16:Wv(t.type)),t):1}function Ut(t,e,n,r){if(50<Bs)throw Bs=0,Jh=null,Error(A(185));Oo(t,n,r),(!(q&2)||t!==Re)&&(t===Re&&(!(q&2)&&(pu|=n),Ae===4&&Nn(t,Me)),ct(t,r),n===1&&q===0&&!(e.mode&1)&&(Li=ge()+500,cu&&sr()))}function ct(t,e){var n=t.callbackNode;ZI(t,e);var r=hl(t,t===Re?Me:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?JS(hg.bind(null,t)):h0(hg.bind(null,t)),KS(function(){!(q&6)&&sr()}),n=null;else{switch(jv(r)){case 1:n=Xd;break;case 4:n=bv;break;case 16:n=cl;break;case 536870912:n=Fv;break;default:n=cl}n=cw(n,rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rw(t,e){if(Ya=-1,Xa=0,q&6)throw Error(A(327));var n=t.callbackNode;if(_i()&&t.callbackNode!==n)return null;var r=hl(t,t===Re?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nl(t,r);else{e=r;var i=q;q|=2;var s=sw();(Re!==t||Me!==e)&&(rn=null,Li=ge()+500,Ir(t,e));do try{wA();break}catch(a){iw(t,a)}while(1);hf(),kl.current=s,q=i,_e!==null?e=0:(Re=null,Me=0,e=Ae)}if(e!==0){if(e===2&&(i=Th(t),i!==0&&(r=i,e=Zh(t,i))),e===1)throw n=ho,Ir(t,0),Nn(t,r),ct(t,ge()),n;if(e===6)Nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yA(i)&&(e=Nl(t,r),e===2&&(s=Th(t),s!==0&&(r=s,e=Zh(t,s))),e===1))throw n=ho,Ir(t,0),Nn(t,r),ct(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:pr(t,st,rn);break;case 3:if(Nn(t,r),(r&130023424)===r&&(e=kf+500-ge(),10<e)){if(hl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oh(pr.bind(null,t,st,rn),e);break}pr(t,st,rn);break;case 4:if(Nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gA(r/1960))-r,10<r){t.timeoutHandle=Oh(pr.bind(null,t,st,rn),r);break}pr(t,st,rn);break;case 5:pr(t,st,rn);break;default:throw Error(A(329))}}}return ct(t,ge()),t.callbackNode===n?rw.bind(null,t):null}function Zh(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=st,st=n,e!==null&&ed(e)),t}function ed(t){st===null?st=t:st.push.apply(st,t)}function yA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nn(t,e){for(e&=~Tf,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function hg(t){if(q&6)throw Error(A(327));_i();var e=hl(t,0);if(!(e&1))return ct(t,ge()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var r=Th(t);r!==0&&(e=r,n=Zh(t,r))}if(n===1)throw n=ho,Ir(t,0),Nn(t,e),ct(t,ge()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,st,rn),ct(t,ge()),null}function Cf(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Li=ge()+500,cu&&sr())}}function xr(t){Un!==null&&Un.tag===0&&!(q&6)&&_i();var e=q;q|=1;var n=kt.transition,r=X;try{if(kt.transition=null,X=1,t)return t()}finally{X=r,kt.transition=n,q=e,!(q&6)&&sr()}}function Rf(){ht=di.current,re(di)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qS(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gl();break;case 3:Pi(),re(lt),re(Qe),yf();break;case 5:gf(r);break;case 4:Pi();break;case 13:re(le);break;case 19:re(le);break;case 10:df(r.type._context);break;case 22:case 23:Rf()}n=n.return}if(Re=t,_e=t=Wn(t.current,null),Me=ht=e,Ae=0,ho=null,Tf=pu=Dr=0,st=js=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yr=null}return t}function iw(t,e){do{var n=_e;try{if(hf(),qa.current=Tl,Al){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Al=!1}if(Nr=0,Ce=Se=ue=null,Fs=!1,lo=0,Af.current=null,n===null||n.return===null){Ae=1,ho=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Jm(o);if(g!==null){g.flags&=-257,Zm(g,o,a,s,e),g.mode&1&&Xm(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Xm(s,u,e),Nf();break e}l=Error(A(426))}}else if(oe&&a.mode&1){var E=Jm(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Zm(E,o,a,s,e),uf(Oi(l,a));break e}}s=l=Oi(l,a),Ae!==4&&(Ae=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=B0(s,l,e);Hm(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hn===null||!Hn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=V0(s,a,e);Hm(s,w);break e}}s=s.return}while(s!==null)}aw(n)}catch(k){e=k,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function sw(){var t=kl.current;return kl.current=Tl,t===null?Tl:t}function Nf(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Re===null||!(Dr&268435455)&&!(pu&268435455)||Nn(Re,Me)}function Nl(t,e){var n=q;q|=2;var r=sw();(Re!==t||Me!==e)&&(rn=null,Ir(t,e));do try{vA();break}catch(i){iw(t,i)}while(1);if(hf(),q=n,kl.current=r,_e!==null)throw Error(A(261));return Re=null,Me=0,Ae}function vA(){for(;_e!==null;)ow(_e)}function wA(){for(;_e!==null&&!HI();)ow(_e)}function ow(t){var e=uw(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?aw(t):_e=e,Af.current=null}function aw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dA(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,_e=null;return}}else if(n=hA(n,e,ht),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Ae===0&&(Ae=5)}function pr(t,e,n){var r=X,i=kt.transition;try{kt.transition=null,X=1,EA(t,e,n,r)}finally{kt.transition=i,X=r}return null}function EA(t,e,n,r){do _i();while(Un!==null);if(q&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eS(t,s),t===Re&&(_e=Re=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,cw(cl,function(){return _i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=X;X=1;var a=q;q|=4,Af.current=null,pA(t,n),tw(n,t),jS(xh),dl=!!Dh,xh=Dh=null,t.current=n,mA(n),GI(),q=a,X=o,kt.transition=s}else t.current=n;if(ka&&(ka=!1,Un=t,Rl=i),s=t.pendingLanes,s===0&&(Hn=null),KI(n.stateNode),ct(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cl)throw Cl=!1,t=Xh,Xh=null,t;return Rl&1&&t.tag!==0&&_i(),s=t.pendingLanes,s&1?t===Jh?Bs++:(Bs=0,Jh=t):Bs=0,sr(),null}function _i(){if(Un!==null){var t=jv(Rl),e=kt.transition,n=X;try{if(kt.transition=null,X=16>t?16:t,Un===null)var r=!1;else{if(t=Un,Un=null,Rl=0,q&6)throw Error(A(331));var i=q;for(q|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:$s(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,g=c.return;if(J0(c),c===u){x=null;break}if(d!==null){d.return=g,x=d;break}x=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$s(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fu(9,a)}}catch(k){fe(a,a.return,k)}if(a===o){x=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,x=w;break e}x=a.return}}if(q=i,sr(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{X=n,kt.transition=e}}return!1}function dg(t,e,n){e=Oi(n,e),e=B0(t,e,1),t=zn(t,e,1),e=tt(),t!==null&&(Oo(t,1,e),ct(t,e))}function fe(t,e,n){if(t.tag===3)dg(t,t,n);else for(;e!==null;){if(e.tag===3){dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Oi(n,t),t=V0(e,t,1),e=zn(e,t,1),t=tt(),e!==null&&(Oo(e,1,t),ct(e,t));break}}e=e.return}}function _A(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(Me&n)===n&&(Ae===4||Ae===3&&(Me&130023424)===Me&&500>ge()-kf?Ir(t,0):Tf|=n),ct(t,e)}function lw(t,e){e===0&&(t.mode&1?(e=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):e=1);var n=tt();t=gn(t,e),t!==null&&(Oo(t,e,n),ct(t,n))}function IA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lw(t,n)}function SA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),lw(t,n)}var uw;uw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,cA(t,e,n);at=!!(t.flags&131072)}else at=!1,oe&&e.flags&1048576&&d0(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qa(t,e),t=e.pendingProps;var i=Ni(e,Qe.current);Ei(e,n),i=wf(null,e,r,t,i,n);var s=Ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,yl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pf(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,jh(e,r,t,n),e=zh(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&af(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TA(r),t=Pt(r,t),i){case 0:e=Vh(null,e,r,t,n);break e;case 1:e=ng(null,e,r,t,n);break e;case 11:e=eg(null,e,r,t,n);break e;case 14:e=tg(null,e,r,Pt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),ng(t,e,r,i,n);case 3:e:{if(W0(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,g0(t,e),Il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Oi(Error(A(423)),e),e=rg(t,e,r,n,i);break e}else if(r!==i){i=Oi(Error(A(424)),e),e=rg(t,e,r,n,i);break e}else for(ft=Vn(e.stateNode.containerInfo.firstChild),gt=e,oe=!0,Lt=null,n=E0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){e=yn(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return _0(e),t===null&&bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ph(r,i)?o=null:s!==null&&Ph(r,s)&&(e.flags|=32),G0(t,e),Ze(t,e,o,n),e.child;case 6:return t===null&&bh(e),null;case 13:return q0(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xi(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),eg(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(El,r._currentValue),r._currentValue=o,s!==null)if(bt(s.value,o)){if(s.children===i.children&&!lt.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=Rt(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),tg(t,e,r,i,n);case 15:return z0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Qa(t,e),e.tag=1,ut(r)?(t=!0,yl(e)):t=!1,Ei(e,n),v0(e,r,i),jh(e,r,i,n),zh(null,e,r,!0,t,n);case 19:return K0(t,e,n);case 22:return H0(t,e,n)}throw Error(A(156,e.tag))};function cw(t,e){return Uv(t,e)}function AA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new AA(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TA(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Qd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ni:return Sr(n.children,i,s,e);case qd:o=8,i|=8;break;case ch:return t=At(12,n,e,i|2),t.elementType=ch,t.lanes=s,t;case hh:return t=At(13,n,e,i),t.elementType=hh,t.lanes=s,t;case dh:return t=At(19,n,e,i),t.elementType=dh,t.lanes=s,t;case wv:return mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yv:o=10;break e;case vv:o=9;break e;case Kd:o=11;break e;case Qd:o=14;break e;case kn:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function mu(t,e,n,r){return t=At(22,t,r,e),t.elementType=wv,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xf(t,e,n,r,i,s,o,a,l){return t=new kA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function CA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hw(t){if(!t)return Jn;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(ut(n))return c0(t,n,e)}return e}function dw(t,e,n,r,i,s,o,a,l){return t=xf(n,r,!0,t,i,s,o,a,l),t.context=hw(null),n=t.current,r=tt(),i=Gn(n),s=hn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,Oo(t,i,r),ct(t,r),t}function gu(t,e,n,r){var i=e.current,s=tt(),o=Gn(i);return n=hw(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,o),t!==null&&(Ut(t,i,o,s),Wa(t,i,o)),o}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){fg(t,e),(t=t.alternate)&&fg(t,e)}function RA(){return null}var fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}yu.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));gu(t,e,null,null)};yu.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){gu(null,t,null,null)}),e[mn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=zv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rn.length&&e!==0&&e<Rn[n].priority;n++);Rn.splice(n,0,t),n===0&&Gv(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function NA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Dl(o);s.call(u)}}var o=dw(e,r,t,0,null,!1,!1,"",pg);return t._reactRootContainer=o,t[mn]=o.current,ro(t.nodeType===8?t.parentNode:t),xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Dl(l);a.call(u)}}var l=xf(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=l,t[mn]=l.current,ro(t.nodeType===8?t.parentNode:t),xr(function(){gu(e,l,n,r)}),l}function wu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Dl(o);a.call(l)}}gu(e,o,t,i)}else o=NA(n,e,t,i,r);return Dl(o)}Bv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(Jd(e,n|1),ct(e,ge()),!(q&6)&&(Li=ge()+500,sr()))}break;case 13:xr(function(){var r=gn(t,1);if(r!==null){var i=tt();Ut(r,t,1,i)}}),Pf(t,1)}};Zd=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=tt();Ut(e,t,134217728,n)}Pf(t,134217728)}};Vv=function(t){if(t.tag===13){var e=Gn(t),n=gn(t,e);if(n!==null){var r=tt();Ut(n,t,e,r)}Pf(t,e)}};zv=function(){return X};Hv=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};Ih=function(t,e,n){switch(e){case"input":if(mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uu(r);if(!i)throw Error(A(90));_v(r),mh(r,i)}}}break;case"textarea":Sv(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};Dv=Cf;xv=xr;var DA={usingClientEntryPoint:!1,Events:[Mo,oi,uu,Rv,Nv,Cf]},ys={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xA={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||RA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{su=Ca.inject(xA),Kt=Ca}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DA;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(A(200));return CA(t,e,null,n)};wt.createRoot=function(t,e){if(!Lf(t))throw Error(A(299));var n=!1,r="",i=fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xf(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,ro(t.nodeType===8?t.parentNode:t),new Of(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return xr(t)};wt.hydrate=function(t,e,n){if(!vu(e))throw Error(A(200));return wu(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dw(e,null,t,1,n??null,i,!1,s,o),t[mn]=e.current,ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};wt.render=function(t,e,n){if(!vu(e))throw Error(A(200));return wu(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!vu(t))throw Error(A(40));return t._reactRootContainer?(xr(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};wt.unstable_batchedUpdates=Cf;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return wu(t,e,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";function pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pw)}catch(t){console.error(t)}}pw(),dv.exports=wt;var PA=dv.exports,mg=PA;lh.createRoot=mg.createRoot,lh.hydrateRoot=mg.hydrateRoot;const OA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmRjMjBmNTM2LTJhZjUtNGM3My05ZjZjLTAzMzkwY2JlN2VjMDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PvItxZYAAAKwSURBVFiF7Ze9bhNBFIW/M2s7JqJAUKdKpJS8AwXpkRANzxAJ0cIbREi8AAUSSqBFUNDxBrQoilLTUeQPxzuHYmYdx3Y2tpdYSPGRVusdz5355ufeuQNLLbXUUrdbGi04ODgd+isSggR4Ut0pZRvZOASQoN+HjY07swPaZn//BElIKAQszcs13G5q264GKyRPxFhf716ybY0RKz2AJboS3dTofJLARmXJEagPxh70gR2RiivtxwBDCAGIwOMYvQu0mwBm2xVbP4Et0C/JGU+2jaS7wNFUgDE6ADEEPbJ1HxyB0AAwz5YegreA90ArRp+HACEUOxA/A99zP3HYtq7jMzCS+pI87wOK1dKC2/ltSdi8Ab8En+byMYixGZwAr5H3jHK21aANyX3wjs2LBH+16gCH1cCVL5nG7CRvJbbTN6Gu/UZ7a1bZ/JF4BdpOMydxzeCnncGmKkhh6zWwmYqcw7azU0zmvHFAKcUSCYE2bZy9ugo11EWxG1/iBCTZsk3M3luF6WvtF7UHDdalT2Aa31vAElvpaFMEh6HfmgZwAUucArbtYOurpGPbIQXw/2eJI4DNO+BJ2ocuMmTtTC4IMKWTkh/Y/gY8T2mcA6i8OObGZ3QqQNsNspkq1zU5OGP7A/AsQ7byeT3Rus5JKqhSDbLWbFqCCqDIza7Y/iQpgHZTEgGTIOsAOwC2uzV1plXVz+8M0odY2OxdDCD1di2glCrb/ihpg3+TsHaAwxD0JSG4bLdXOTs7FoS9VqujTqeg1yvrAfNWqzbNjxjj00bbb0ijuyTGSKfT9fl5T1A6xsBgIq8CzMcQpINd6TYW48W5ObcsKdgMEoOyTGlgCIVjNL1eb/LARgsOD09ptUS7DScnxh69gc0qke8d9Ptn2GZ19R5ra81vi0sttdRSt0F/AbV4QUoZ1kOTAAAAAElFTkSuQmCC",LA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQyOGI5NDkyLTJiMDAtNDVjZC1iNDc4LTNjODM4YzMxZTZhMzwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PgpJjy4AAAWJSURBVFiF7ZdNiGRXGYaf95xb3V01o+MYEzLOCNP2xDDgD+ImgRDQpSIuXKigmEBQSBaCC7Nyo5v8ICSrkIWB4EZ3BsVEQVEMBqIbYWAw00WRLDQOkwRnpqd+7j3ndXFuVZeZrs7tHhMXzge96Fvfud97vp/3ey/ctJv2vzUd9MBwOCYEI0HTCAmV98hgQ8I2UmRra/DeAhwOx4ABsBWBpMUbhG2AIOVcfCDGAZubB87DwqqujtvbY0r8RbBk05P4KNAHZhIjm/FgcJGdndsEOKVrhwYHELo4DYczIBZUKSCB5G+FwCvAOeBl8F9tX5D83atXT2A3nt+mZP5dBFhVvRZUUlUlbB61eRp82nZlu2e7knQS+JGUn4mxx/p6YwiUgr+LAO2M3QQ72NaXge9JJFtJkud/thOoBu7PmYdmsx7gqMO3YLch2d4ec+LEm1y6dIy6ji9JvstWI7kq04vKSEi2k6RoexvyWVCj/0Ao5SyDkDJnzvT3jd0pg5L1+uvHaZpwCvwpW4CjrUWfteAsKRSa0WmpulMKQFCZ6ADg0iZrSGI02r8/OwKUJCHpuKQKTPn/Or82j9imsn3SBjuHcoYIfMSGfv88Bfz+1rEHC8XZugieSMw57+1+lN+QRBMCr5XhUlxfH1DX+cfAaznrm9PpJjmnHgRGo3rlpHcCmHP22lpFjPqnzV/aqia3tabgtWTZC/I+D9UrkrE9u3bNAF8ql9A97QXr2WzK5csXV2azE1H3egOm00kAMuiHNp+VqGyathcpQGhakACP2HUOwe8DfT7G6a1leAC8JXEf8A9Jv+73j67MVacpHo3eIIQPUtfjOcjvSH5ivt5KWTUvL8BjMerhlDISP7D5fgllWjraXZDiXuCPQNjaGlzHmJ1KnFKf48dBCjlnC3gS9EXbf5K4Yuuq5Cvgl4GvheCH7Rzb45fagcqAS0fI7dC9BfoXc71xmAwOh9dYvnArFizBeLwT+v2jdwNnJUYp8aLkKYAdBAmpsuSP275T4hnb7wd+BXoc9KqdRmBB8h13HLsu/r49OBxOSakmhAAolu0BwOds3b+xceRu8IeAwoDiisSLNj+VeK7cP1Wgc7B+DiZPtaT9d5vfhyByRjaGvffhyhKPRmPspgVHBBJwEvQL4Lfgr0vasnXM1gdsH5N8Cvgq8HMp/07iYxKN7XWYYvOE7VfBP5NMzrkaDv/sy5cvEcLe2nFliS9cGCN5CZw+A/xS4vYWrG2HIljLa2wblCVkE8E7El+w/QdwkELe2ak1GKx5PjQxwubm6nW3Zwa3t8ctdgVQknQaeB58O3jmohoq7S7Zxbor9OMguZZ0xOYF0KchZJu4thaX1uM7254AQyiyvq7rnItWehZ8q6SZzVoLqw20C7Jkzm5XXg9cgzaAZyXWJKeqCpJsKSF53+ytBBjjUWxir9cjhPAVm3tLL9GT5kpkbxE1f174jp5EDXzC5kE7UKpitraOdPpm2RPgbNbQ78fU6wnwt3f3q99W0pWmuaCwHcqFeCBGB8mpI/2uBhgCmkwaUsonJe5qRUDY1X5dbFd+td1wNmd9sj3eGeEqRwHYnKF8EB3K1NZZUm4H66yLNOo8JHsStb3I0odLIHIroQ4h3gU4l97jlqWHhwe41P7zTF4nTjvDK5zo9vwt7+DeDeCSFtUypbSBOkMtK2wxLAD1fwWgxBzi33azp/qgJW7PeUGZcH6O/YYAgjJkinoOP7H9DeZf7oc0id+sr288lxI0zSzdIMDcyiUsbdxnT16SOEUp0UGyaCDavAXx6clkmguX6sYy2MryohQiuWl4aq+PpINY+6GleV/eEMAYB6Q0ASCl6cLvoNO87G/nZj4rMXbvln3DtaTK8trtmskVq3rl85v2f2v/BnSI93fiTohdAAAAAElFTkSuQmCC",MA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA4LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmNhNTE4ODMwLTBmMmYtNGY0NC1iYzQ2LWVlM2JlZmQ4MmIxNjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5MYW1hIERldjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PlV4Lz0AAANzSURBVFiF7ZVNixxlFIWfc6u6pyYzi7iImkUWSXqT+Ilg/Fhkl1VcuAn+BUFw7Q/wX7gRQXAl/gIFQQ0EBKMizkdGgpBFxF07091V97iot+ejZ4xuhTrQ0FWc973nPee+t2DAgAEDBgwYMOD/DJ31cnf3L6qqQUq6bkEmIYGkvHx5jUzY25sBpqqEBF1nbEmyAEfgiI62rYiAtoVMqCqQUKltOyyBbSaT5t8F7u7ukwlSX6eqyK6DIhA7Q3LaM+BwwwDS7sVSKj98eD8nk9eYzw8AA2g6XXhzc3ysfBd2lWUVk8n6CT2xKtCmFLGAlKIBXgJekWIT1MvX6Pghs6rqAL0AvAo8BeSlS89rOv0D29i9YxsbNcA1iRvABZvMXCBVbG76lIOnBBbno5fql9u2+0nie+Be17W/2r5p23ZEWW+bK23b3gP/AHwHfiBxR5JHo3Mh9eYDT0v6CvjZ5lvbDyDei6ix29jfh+1tn1JzAjs7+yUOVeAfQdf6SJGEbB5H8JzNY0hltpbWvpH8Zh9z31+SZqAXwVtABe5sPgPe6VPwcj+AN0B3gZjPm7x+/UjWGQ6iovuqxESyj3pLC+BCJrf6jWtLzQsSr9skaNmrc9trkG/bJmLRAc8At0tvlx7XrJS8LRnJoRXL6lPqdGjxCIo6oBfppfjNY9z1k0lIJQFsn+vfrSHlOjByH8XyFqscaukk58+f1HPGJdHy98hm3jvCXGIB1OX5bj8aGiDu2/xeRscMPC/tAfA1QNe1MR4/+s32VilTeJTD8Es5nC9ePNmDZwm0lCH5T+ADG2yv2R73wvkwk/uZCA4C8kDi/eJYY2sMroCPwF9KliRms2eReFdiatPYjG2PJH2+sdF8urGxToS6EthRHqsCt7cPkGCxWFDXNRK3JG4CYXMvIr9o25qIJLNDCtF3/A2Jt3qet2x9EtHRFzSgoB9b14A7wBp4t6rWP27bg1w2x5UrTenPfxC4s3PQWxsiM8vuPqRXVarrwgBXrzZsbU2JiJCURzxYLMRoVOYvuQwrpEj7iFfXDW07Y7l2Mjn35IgnkwbJjMdJXduFU5dftVhUzuyX7e3NmM3MdDrPVd547MOi0hg76T926Div6+blsomqOnVnz/4WQz99V59PWF/+r/JOFTi25klcrc6XAQMGDBgwYMCA/4K/AR9NvILUl7eBAAAAAElFTkSuQmCC";/**
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
 */const mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new bA;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FA=function(t){const e=mw(t);return gw.encodeByteArray(e,!0)},xl=function(t){return FA(t).replace(/\./g,"")},yw=function(t){try{return gw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jA=()=>$A().__FIREBASE_DEFAULTS__,BA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yw(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return jA()||BA()||VA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vw=t=>{var e,n;return(n=(e=Eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ww=t=>{const e=vw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ew=()=>{var t;return(t=Eu())===null||t===void 0?void 0:t.config},_w=t=>{var e;return(e=Eu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Iw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xl(JSON.stringify(n)),xl(JSON.stringify(o)),a].join(".")}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function GA(){var t;const e=(t=Eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KA(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QA(){try{return typeof indexedDB=="object"}catch{return!1}}function YA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const XA="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XA,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function JA(t,e){return t.replace(ZA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZA=/\{\$([^}]+)}/g;function eT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gg(s)&&gg(o)){if(!Pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gg(t){return t!==null&&typeof t=="object"}/**
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
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tT(t,e){const n=new nT(t,e);return n.subscribe.bind(n)}class nT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uc),i.error===void 0&&(i.error=Uc),i.complete===void 0&&(i.complete=Uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
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
 */function ae(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class iT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oT(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(t){return t===mr?void 0:t}function oT(t){return t.instantiationMode==="EAGER"}/**
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
 */class aT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const lT={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},uT=Q.INFO,cT={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},hT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=uT,this._logHandler=hT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const dT=(t,e)=>e.some(n=>t instanceof n);let yg,vg;function fT(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pT(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sw=new WeakMap,td=new WeakMap,Aw=new WeakMap,bc=new WeakMap,Uf=new WeakMap;function mT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sw.set(n,t)}).catch(()=>{}),Uf.set(e,t),e}function gT(t){if(td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});td.set(t,e)}let nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Aw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yT(t){nd=t(nd)}function vT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return Aw.set(r,e.sort?e.sort():[e]),qn(r)}:pT().includes(t)?function(...e){return t.apply(Fc(this),e),qn(Sw.get(this))}:function(...e){return qn(t.apply(Fc(this),e))}}function wT(t){return typeof t=="function"?vT(t):(t instanceof IDBTransaction&&gT(t),dT(t,fT())?new Proxy(t,nd):t)}function qn(t){if(t instanceof IDBRequest)return mT(t);if(bc.has(t))return bc.get(t);const e=wT(t);return e!==t&&(bc.set(t,e),Uf.set(e,t)),e}const Fc=t=>Uf.get(t);function ET(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qn(o.result),l.oldVersion,l.newVersion,qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _T=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],$c=new Map;function wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_T.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $c.set(e,s),s}yT(t=>({...t,get:(e,n,r)=>wg(e,n)||t.get(e,n,r),has:(e,n)=>!!wg(e,n)||t.has(e,n)}));/**
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
 */class ST{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rd="@firebase/app",Eg="0.9.13";/**
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
 */const Pr=new Mf("@firebase/app"),TT="@firebase/app-compat",kT="@firebase/analytics-compat",CT="@firebase/analytics",RT="@firebase/app-check-compat",NT="@firebase/app-check",DT="@firebase/auth",xT="@firebase/auth-compat",PT="@firebase/database",OT="@firebase/database-compat",LT="@firebase/functions",MT="@firebase/functions-compat",UT="@firebase/installations",bT="@firebase/installations-compat",FT="@firebase/messaging",$T="@firebase/messaging-compat",jT="@firebase/performance",BT="@firebase/performance-compat",VT="@firebase/remote-config",zT="@firebase/remote-config-compat",HT="@firebase/storage",GT="@firebase/storage-compat",WT="@firebase/firestore",qT="@firebase/firestore-compat",KT="firebase",QT="9.23.0";/**
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
 */const id="[DEFAULT]",YT={[rd]:"fire-core",[TT]:"fire-core-compat",[CT]:"fire-analytics",[kT]:"fire-analytics-compat",[NT]:"fire-app-check",[RT]:"fire-app-check-compat",[DT]:"fire-auth",[xT]:"fire-auth-compat",[PT]:"fire-rtdb",[OT]:"fire-rtdb-compat",[LT]:"fire-fn",[MT]:"fire-fn-compat",[UT]:"fire-iid",[bT]:"fire-iid-compat",[FT]:"fire-fcm",[$T]:"fire-fcm-compat",[jT]:"fire-perf",[BT]:"fire-perf-compat",[VT]:"fire-rc",[zT]:"fire-rc-compat",[HT]:"fire-gcs",[GT]:"fire-gcs-compat",[WT]:"fire-fst",[qT]:"fire-fst-compat","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const Ol=new Map,sd=new Map;function XT(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Or(t){const e=t.name;if(sd.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;sd.set(e,t);for(const n of Ol.values())XT(n,t);return!0}function _u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const JT={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kn=new bo("app","Firebase",JT);/**
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
 */class ZT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=QT;function Tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:id,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=Ew()),!n)throw Kn.create("no-options");const s=Ol.get(i);if(s){if(Pl(n,s.options)&&Pl(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const o=new aT(i);for(const l of sd.values())o.addComponent(l);const a=new ZT(n,r,o);return Ol.set(i,a),a}function bf(t=id){const e=Ol.get(t);if(!e&&t===id&&Ew())return Tw();if(!e)throw Kn.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=YT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}Or(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ek="firebase-heartbeat-database",tk=1,fo="firebase-heartbeat-store";let jc=null;function kw(){return jc||(jc=ET(ek,tk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fo)}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),jc}async function nk(t){try{return await(await kw()).transaction(fo).objectStore(fo).get(Cw(t))}catch(e){if(e instanceof nn)Pr.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(n.message)}}}async function _g(t,e){try{const r=(await kw()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,Cw(t)),await r.done}catch(n){if(n instanceof nn)Pr.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function Cw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rk=1024,ik=30*24*60*60*1e3;class sk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ak(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ig();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ik}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ig(),{heartbeatsToSend:n,unsentEntries:r}=ok(this._heartbeatsCache.heartbeats),i=xl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ig(){return new Date().toISOString().substring(0,10)}function ok(t,e=rk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ak{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QA()?YA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sg(t){return xl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lk(t){Or(new Zn("platform-logger",e=>new ST(e),"PRIVATE")),Or(new Zn("heartbeat",e=>new sk(e),"PRIVATE")),Yt(rd,Eg,t),Yt(rd,Eg,"esm2017"),Yt("fire-js","")}lk("");function Ff(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Rw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uk=Rw,Nw=new bo("auth","Firebase",Rw());/**
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
 */const Ll=new Mf("@firebase/auth");function ck(t,...e){Ll.logLevel<=Q.WARN&&Ll.warn(`Auth (${zr}): ${t}`,...e)}function Za(t,...e){Ll.logLevel<=Q.ERROR&&Ll.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw $f(t,...e)}function Xt(t,...e){return $f(t,...e)}function hk(t,e,n){const r=Object.assign(Object.assign({},uk()),{[e]:n});return new bo("auth","Firebase",r).create(e,{appName:t.name})}function $f(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nw.create(t,...e)}function U(t,e,...n){if(!t)throw $f(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function vn(t,e){t||ln(e)}/**
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
 */function od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dk(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dk()||WA()||"connection"in navigator)?navigator.onLine:!0}function pk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=HA()||qA()}get(){return fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jf(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gk=new $o(3e4,6e4);function Ki(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,r,i={}){return xw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Dw.fetch()(Pw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mk),e);try{const i=new yk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ra(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hk(t,c,u);Ft(t,c)}}catch(i){if(i instanceof nn)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function jo(t,e,n,r,i={}){const s=await Hr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Pw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jf(t.config,i):`${t.config.apiScheme}://${i}`}class yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function vk(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function wk(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ek(t,e=!1){const n=ae(t),r=await n.getIdToken(e),i=Bf(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vs(Bc(i.auth_time)),issuedAtTime:Vs(Bc(i.iat)),expirationTime:Vs(Bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function Bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const i=yw(n);return i?JSON.parse(i):(Za("Failed to decode base64 JWT payload"),null)}catch(i){return Za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _k(t){const e=Bf(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&Ik(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ik({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Sk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ow{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mi(t,wk(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kk(s.providerUserInfo):[],a=Tk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ow(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Ak(t){const e=ae(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kk(t){return t.map(e=>{var{providerId:n}=e,r=Ff(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ck(t,e){const n=await xw(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Pw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_k(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ck(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new po;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
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
 */function Tn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ow(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ek(this,e)}reload(){return Ak(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mi(this,vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:R,stsTokenManager:N}=n;U(m&&N,e,"internal-error");const O=po.fromJSON(this.name,N);U(typeof m=="string",e,"internal-error"),Tn(h,e.name),Tn(d,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof k=="boolean",e,"internal-error"),Tn(g,e.name),Tn(y,e.name),Tn(v,e.name),Tn(E,e.name),Tn(p,e.name),Tn(f,e.name);const K=new Ar({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(K.providerData=R.map(z=>Object.assign({},z))),E&&(K._redirectEventId=E),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new po;i.updateFromServerResponse(n);const s=new Ar({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ml(s),s}}/**
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
 */const Tg=new Map;function un(t){vn(t instanceof Function,"Expected a class definition");let e=Tg.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tg.set(t,e),e)}/**
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
 */class Lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lw.type="NONE";const kg=Lw;/**
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
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=el(this.userKey,i.apiKey,s),this.fullPersistenceKey=el("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ii(un(kg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||un(kg);const o=el(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ar._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ii(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ii(s,e,r))}}/**
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
 */function Cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($w(e))return"Blackberry";if(jw(e))return"Webos";if(Vf(e))return"Safari";if((e.includes("chrome/")||Uw(e))&&!e.includes("edge/"))return"Chrome";if(Fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=Ye()){return/firefox\//i.test(t)}function Vf(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uw(t=Ye()){return/crios\//i.test(t)}function bw(t=Ye()){return/iemobile/i.test(t)}function Fw(t=Ye()){return/android/i.test(t)}function $w(t=Ye()){return/blackberry/i.test(t)}function jw(t=Ye()){return/webos/i.test(t)}function Iu(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rk(t=Ye()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nk(){return KA()&&document.documentMode===10}function Bw(t=Ye()){return Iu(t)||Fw(t)||jw(t)||$w(t)||/windows phone/i.test(t)||bw(t)}function Dk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vw(t,e=[]){let n;switch(t){case"Browser":n=Cg(Ye());break;case"Worker":n=`${Cg(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}async function zw(t,e){return Hr(t,"GET","/v2/recaptchaConfig",Ki(t,e))}function Rg(t){return t!==void 0&&t.enterprise!==void 0}class Hw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function xk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xk().appendChild(r)})}function Pk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ok="https://www.google.com/recaptcha/enterprise.js?render=",Lk="recaptcha-enterprise",Mk="NO_RECAPTCHA";class Ww{constructor(e){this.type=Lk,this.auth=Qi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Hw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Rg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Mk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Rg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gw(Ok+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ul(t,e,n,r=!1){const i=new Ww(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class bk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ng(this),this.idTokenSubscription=new Ng(this),this.beforeStateQueue=new Uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}async initializeRecaptchaConfig(){const e=await zw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Hw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ww(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ck(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qi(t){return ae(t)}class Ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=tT(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Fk(t,e){const n=_u(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pl(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function $k(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jk(t,e,n){const r=Qi(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qw(e),{host:o,port:a}=Bk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Vk()}function qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bk(t){const e=qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dg(o)}}}function Dg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function zk(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Vc(t,e){return jo(t,"POST","/v1/accounts:signInWithPassword",Ki(t,e))}/**
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
 */async function Hk(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Ki(t,e))}async function Gk(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Ki(t,e))}/**
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
 */class mo extends zf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ul(e,r,"signInWithPassword");return Vc(e,i)}else return Vc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ul(e,r,"signInWithPassword");return Vc(e,s)}else return Promise.reject(i)});case"emailLink":return Hk(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return zk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Si(t,e){return jo(t,"POST","/v1/accounts:signInWithIdp",Ki(t,e))}/**
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
 */const Wk="http://localhost";class Lr extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ff(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Si(e,n)}buildRequest(){const e={requestUri:Wk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
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
 */function qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kk(t){const e=Ts(ks(t)).link,n=e?Ts(ks(e)).deep_link_id:null,r=Ts(ks(t)).deep_link_id;return(r?Ts(ks(r)).link:null)||r||n||e||t}class Hf{constructor(e){var n,r,i,s,o,a;const l=Ts(ks(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=qk((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Kk(e);try{return new Hf(n)}catch{return null}}}/**
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
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hf.parseLink(n);return U(r,"argument-error"),mo._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bo extends Kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends Bo{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class xn extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class Pn extends Bo{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */class On extends Bo{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function zc(t,e){return jo(t,"POST","/v1/accounts:signUp",Ki(t,e))}/**
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
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ar._fromIdTokenResponse(e,r,i),o=xg(r);return new Mr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xg(r);return new Mr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bl extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bl(e,n,r,i)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,s,e,r):s})}async function Qk(t,e,n=!1){const r=await Mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
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
 */async function Yk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Mi(t,Qw(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Bf(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Mr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
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
 */async function Yw(t,e,n=!1){const r="signIn",i=await Qw(t,r,e),s=await Mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Xk(t,e){return Yw(Qi(t),e)}async function Jk(t,e,n){var r;const i=Qi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ul(i,s,"signUpPassword");o=zc(i,u)}else o=zc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ul(i,s,"signUpPassword");return zc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Mr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Zk(t,e,n){return Xk(ae(t),Yi.credential(e,n))}/**
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
 */async function eC(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function tC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mi(r,eC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function nC(t,e,n,r){return ae(t).onIdTokenChanged(e,n,r)}function rC(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}function iC(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}function sC(t){return ae(t).signOut()}const Fl="__sak";/**
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
 */class Xw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fl,"1"),this.storage.removeItem(Fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oC(){const t=Ye();return Vf(t)||Iu(t)}const aC=1e3,lC=10;class Jw extends Xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oC()&&Dk(),this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Nk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const uC=Jw;/**
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
 */class Zw extends Xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zw.type="SESSION";const e1=Zw;/**
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
 */function cC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await cC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
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
 */function Gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Gf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function dC(t){Jt().location.href=t}/**
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
 */function t1(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function fC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mC(){return t1()?self:null}/**
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
 */const n1="firebaseLocalStorageDb",gC=1,$l="firebaseLocalStorage",r1="fbase_key";class Vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Au(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function yC(){const t=indexedDB.deleteDatabase(n1);return new Vo(t).toPromise()}function ad(){const t=indexedDB.open(n1,gC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($l,{keyPath:r1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($l)?e(r):(r.close(),await yC(),e(await ad()))})})}async function Pg(t,e,n){const r=Au(t,!0).put({[r1]:e,value:n});return new Vo(r).toPromise()}async function vC(t,e){const n=Au(t,!1).get(e),r=await new Vo(n).toPromise();return r===void 0?null:r.value}function Og(t,e){const n=Au(t,!0).delete(e);return new Vo(n).toPromise()}const wC=800,EC=3;class i1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(mC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fC(),!this.activeServiceWorker)return;this.sender=new hC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await Pg(e,Fl,"1"),await Og(e,Fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Au(i,!1).getAll();return new Vo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i1.type="LOCAL";const _C=i1;new $o(3e4,6e4);/**
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
 */function IC(t,e){return e?un(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SC(t){return Yw(t.auth,new Wf(t),t.bypassAuthState)}function AC(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Yk(n,new Wf(t),t.bypassAuthState)}async function TC(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Qk(n,new Wf(t),t.bypassAuthState)}/**
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
 */class s1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SC;case"linkViaPopup":case"linkViaRedirect":return TC;case"reauthViaPopup":case"reauthViaRedirect":return AC;default:Ft(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kC=new $o(2e3,1e4);class fi extends s1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kC.get())};e()}}fi.currentPopupAction=null;/**
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
 */const CC="pendingRedirect",tl=new Map;class RC extends s1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await NC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NC(t,e){const n=PC(e),r=xC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DC(t,e){tl.set(t._key(),e)}function xC(t){return un(t._redirectPersistence)}function PC(t){return el(CC,t.config.apiKey,t.name)}async function OC(t,e,n=!1){const r=Qi(t),i=IC(r,e),o=await new RC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LC=10*60*1e3;class MC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lg(e))}saveEventToCache(e){this.cachedEventUids.add(Lg(e)),this.lastProcessedEventTime=Date.now()}}function Lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o1(t);default:return!1}}/**
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
 */async function bC(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
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
 */const FC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$C=/^https?/;async function jC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bC(t);for(const n of e)try{if(BC(n))return}catch{}Ft(t,"unauthorized-domain")}function BC(t){const e=od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$C.test(n))return!1;if(FC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VC=new $o(3e4,6e4);function Mg(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zC(t){return new Promise((e,n)=>{var r,i,s;function o(){Mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mg(),n(Xt(t,"network-request-failed"))},timeout:VC.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const a=Pk("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Gw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nl=null,e})}let nl=null;function HC(t){return nl=nl||zC(t),nl}/**
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
 */const GC=new $o(5e3,15e3),WC="__/auth/iframe",qC="emulator/auth/iframe",KC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YC(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jf(e,qC):`https://${t.config.authDomain}/${WC}`,r={apiKey:e.apiKey,appName:t.name,v:zr},i=QC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fo(r).slice(1)}`}async function XC(t){const e=await HC(t),n=Jt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:YC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Jt().setTimeout(()=>{s(o)},GC.get());function l(){Jt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const JC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZC=500,eR=600,tR="_blank",nR="http://localhost";class Ug{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(t,e,n,r=ZC,i=eR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},JC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ye().toLowerCase();n&&(a=Uw(u)?tR:n),Mw(u)&&(e=e||nR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(Rk(u)&&a!=="_self")return iR(e||"",a),new Ug(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Ug(h)}function iR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function bg(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(e instanceof Kw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Bo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${aR}=${encodeURIComponent(l)}`:"";return`${lR(t)}?${Fo(a).slice(1)}${u}`}function lR({config:t}){return t.emulator?jf(t,oR):`https://${t.authDomain}/${sR}`}/**
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
 */const Hc="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e1,this._completeRedirectFn=OC,this._overrideRedirectResult=DC}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bg(e,n,r,od(),i);return rR(e,o,Gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bg(e,n,r,od(),i);return dC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XC(e),r=new MC(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hc];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||Vf()||Iu()}}const cR=uR;var Fg="@firebase/auth",$g="0.23.2";/**
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
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fR(t){Or(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vw(t)},u=new bk(r,i,s,l);return $k(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Or(new Zn("auth-internal",e=>{const n=Qi(e.getProvider("auth").getImmediate());return(r=>new hR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Fg,$g,dR(t)),Yt(Fg,$g,"esm2017")}/**
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
 */const pR=5*60,mR=_w("authIdTokenMaxAge")||pR;let jg=null;const gR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mR)return;const i=n==null?void 0:n.token;jg!==i&&(jg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yR(t=bf()){const e=_u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fk(t,{popupRedirectResolver:cR,persistence:[_C,uC,e1]}),r=_w("authTokenSyncURL");if(r){const s=gR(r);rC(n,s,()=>s(n.currentUser)),nC(n,o=>s(o))}const i=vw("auth");return i&&jk(n,`http://${i}`),n}fR("Browser");var vR="firebase",wR="9.23.0";/**
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
 */Yt(vR,wR,"app");/**
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
 */const a1="firebasestorage.googleapis.com",l1="storageBucket",ER=2*60*1e3,_R=10*60*1e3,IR=1e3;/**
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
 */class de extends nn{constructor(e,n,r=0){super(Gc(e),`Firebase Storage: ${n} (${Gc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function Gc(t){return"storage/"+t}function qf(){const t="An unknown error occurred, please check the error payload for server response.";return new de(se.UNKNOWN,t)}function SR(t){return new de(se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AR(t){return new de(se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(se.UNAUTHENTICATED,t)}function kR(){return new de(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CR(t){return new de(se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function u1(){return new de(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function c1(){return new de(se.CANCELED,"User canceled the upload/download.")}function RR(t){return new de(se.INVALID_URL,"Invalid URL '"+t+"'.")}function NR(t){return new de(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DR(){return new de(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+l1+"' property when initializing the app?")}function h1(){return new de(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xR(){return new de(se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function PR(){return new de(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function OR(t){return new de(se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ld(t){return new de(se.INVALID_ARGUMENT,t)}function d1(){return new de(se.APP_DELETED,"The Firebase app was deleted.")}function LR(t){return new de(se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new de(se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function vs(t){throw new de(se.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(r.path==="")return r;throw NR(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===a1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${E}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<m.length;w++){const k=m[w],R=k.regex.exec(e);if(R){const N=R[k.indices.bucket];let O=R[k.indices.path];O||(O=""),r=new pt(N,O),k.postModify(r);break}}if(r==null)throw RR(e);return r}}class MR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function UR(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(g,l())},E)}function d(){s&&clearTimeout(s)}function g(E,...p){if(u){d();return}if(E){d(),c.call(null,E,...p);return}if(l()||o){d(),c.call(null,E,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let y=!1;function v(E){y||(y=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function bR(t){t(!1)}/**
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
 */function FR(t){return t!==void 0}function $R(t){return typeof t=="function"}function jR(t){return typeof t=="object"&&!Array.isArray(t)}function Tu(t){return typeof t=="string"||t instanceof String}function Bg(t){return Kf()&&t instanceof Blob}function Kf(){return typeof Blob<"u"&&!GA()}function Vg(t,e,n,r){if(r<e)throw ld(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ld(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function zo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function f1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Tr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Tr||(Tr={}));/**
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
 */function p1(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class BR{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Na(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Tr.NO_ERROR,l=s.getStatus();if(!a||p1(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Tr.ABORT;r(!1,new Na(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Na(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());FR(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=qf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?d1():c1();o(l)}else{const l=u1();o(l)}};this.canceled_?n(!1,new Na(!1,null,!0)):this.backoffId_=UR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Na{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WR(t,e,n,r,i,s,o=!0){const a=f1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return HR(u,e),VR(u,n),zR(u,s),GR(u,r),new BR(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function qR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function KR(...t){const e=qR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Kf())return new Blob(t);throw new de(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function YR(t){if(typeof atob>"u")throw OR("base-64");return atob(t)}/**
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
 */const Gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wc{constructor(e,n){this.data=e,this.contentType=n||null}}function XR(t,e){switch(t){case Gt.RAW:return new Wc(m1(e));case Gt.BASE64:case Gt.BASE64URL:return new Wc(g1(t,e));case Gt.DATA_URL:return new Wc(ZR(e),eN(e))}throw qf()}function m1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JR(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(Gt.DATA_URL,"Malformed data URL.")}return m1(e)}function g1(t,e){switch(t){case Gt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Gt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=YR(e)}catch(i){throw i.message.includes("polyfill")?i:zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class y1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(Gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ZR(t){const e=new y1(t);return e.base64?g1(Gt.BASE64,e.rest):JR(e.rest)}function eN(t){return new y1(t).contentType}function tN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ln{constructor(e,n){let r=0,i="";Bg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Bg(this.data_)){const r=this.data_,i=QR(r,e,n);return i===null?null:new Ln(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ln(r,!0)}}static getBlob(...e){if(Kf()){const n=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(KR.apply(null,n))}else{const n=e.map(o=>Tu(o)?XR(Gt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ln(i,!0)}}uploadData(){return this.data_}}/**
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
 */function v1(t){let e;try{e=JSON.parse(t)}catch{return null}return jR(e)?e:null}/**
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
 */function nN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function w1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function iN(t,e){return e}class Je{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||iN}}let Da=null;function sN(t){return!Tu(t)||t.length<2?t:w1(t)}function E1(){if(Da)return Da;const t=[];t.push(new Je("bucket")),t.push(new Je("generation")),t.push(new Je("metageneration")),t.push(new Je("name","fullPath",!0));function e(s,o){return sN(o)}const n=new Je("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Je("size");return i.xform=r,t.push(i),t.push(new Je("timeCreated")),t.push(new Je("updated")),t.push(new Je("md5Hash",null,!0)),t.push(new Je("cacheControl",null,!0)),t.push(new Je("contentDisposition",null,!0)),t.push(new Je("contentEncoding",null,!0)),t.push(new Je("contentLanguage",null,!0)),t.push(new Je("contentType",null,!0)),t.push(new Je("metadata","customMetadata",!0)),Da=t,Da}function oN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function aN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return oN(r,t),r}function _1(t,e,n){const r=v1(e);return r===null?null:aN(t,r,n)}function lN(t,e,n,r){const i=v1(e);if(i===null||!Tu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=zo(d,n,r),y=f1({alt:"media",token:u});return g+y})[0]}function I1(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Xi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dn(t){if(!t)throw qf()}function Qf(t,e){function n(r,i){const s=_1(t,i,e);return dn(s!==null),s}return n}function uN(t,e){function n(r,i){const s=_1(t,i,e);return dn(s!==null),lN(s,i,t.host,t._protocol)}return n}function Ho(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=kR():i=TR():n.getStatus()===402?i=AR(t.bucket):n.getStatus()===403?i=CR(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function S1(t){const e=Ho(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=SR(t.path)),s.serverResponse=i.serverResponse,s}return n}function cN(t,e,n){const r=e.fullServerUrl(),i=zo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Xi(i,s,Qf(t,n),o);return a.errorHandler=S1(e),a}function hN(t,e,n){const r=e.fullServerUrl(),i=zo(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Xi(i,s,uN(t,n),o);return a.errorHandler=S1(e),a}function dN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function A1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=dN(null,e)),r}function fN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let w=0;w<2;w++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=A1(e,r,i),c=I1(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",g=Ln.getBlob(h,r,d);if(g===null)throw h1();const y={name:u.fullPath},v=zo(s,t.host,t._protocol),E="POST",p=t.maxUploadRetryTime,f=new Xi(v,E,Qf(t,n),p);return f.urlParams=y,f.headers=o,f.body=g.uploadData(),f.errorHandler=Ho(e),f}class jl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Yf(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{dn(!1)}return dn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function pN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=A1(e,r,i),a={name:o.fullPath},l=zo(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=I1(o,n),d=t.maxUploadRetryTime;function g(v){Yf(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{dn(!1)}return dn(Tu(E)),E}const y=new Xi(l,u,g,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Ho(e),y}function mN(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Yf(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{dn(!1)}h||dn(!1);const d=Number(h);return dn(!isNaN(d)),new jl(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Xi(n,o,s,a);return l.headers=i,l.errorHandler=Ho(e),l}const zg=256*1024;function gN(t,e,n,r,i,s,o,a){const l=new jl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw xR();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let g="";c===0?g="finalize":u===c?g="upload, finalize":g="upload";const y={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw h1();function E(w,k){const R=Yf(w,["active","final"]),N=l.current+c,O=r.size();let K;return R==="final"?K=Qf(e,s)(w,k):K=null,new jl(N,O,R==="final",K)}const p="POST",f=e.maxUploadRetryTime,m=new Xi(n,p,E,f);return m.headers=y,m.body=v.uploadData(),m.progressCallback=a||null,m.errorHandler=Ho(t),m}const it={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function qc(t){switch(t){case"running":case"pausing":case"canceling":return it.RUNNING;case"paused":return it.PAUSED;case"success":return it.SUCCESS;case"canceled":return it.CANCELED;case"error":return it.ERROR;default:return it.ERROR}}/**
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
 */class yN{constructor(e,n,r){if($R(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Yr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class vN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Tr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Tr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Tr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw vs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wN extends vN{initXhr(){this.xhr_.responseType="text"}}function Jr(){return new wN}/**
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
 */class EN{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=E1(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(p1(i.status,[]))if(s)i=u1();else{this.sleepTime=Math.max(this.sleepTime*2,IR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(se.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=pN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=mN(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Jr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zg*this._chunkMultiplier,n=new jl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=gN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Jr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=cN(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=fN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Jr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=c1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=qc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new yN(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(qc(this._state)){case it.SUCCESS:Yr(this._resolve.bind(null,this.snapshot))();break;case it.CANCELED:case it.ERROR:const n=this._reject;Yr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(qc(this._state)){case it.RUNNING:case it.PAUSED:e.next&&Yr(e.next.bind(e,this.snapshot))();break;case it.SUCCESS:e.complete&&Yr(e.complete.bind(e))();break;case it.CANCELED:case it.ERROR:e.error&&Yr(e.error.bind(e,this._error))();break;default:e.error&&Yr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ur{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ur(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return w1(this._location.path)}get storage(){return this._service}get parent(){const e=nN(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new Ur(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LR(e)}}function _N(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new EN(t,new Ln(e),n)}function IN(t){t._throwIfRoot("getDownloadURL");const e=hN(t.storage,t._location,E1());return t.storage.makeRequestWithTokens(e,Jr).then(n=>{if(n===null)throw PR();return n})}function SN(t,e){const n=rN(t._location.path,e),r=new pt(t._location.bucket,n);return new Ur(t.storage,r)}/**
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
 */function AN(t){return/^[A-Za-z]+:\/\//.test(t)}function TN(t,e){return new Ur(t,e)}function T1(t,e){if(t instanceof Xf){const n=t;if(n._bucket==null)throw DR();const r=new Ur(n,n._bucket);return e!=null?T1(r,e):r}else return e!==void 0?SN(t,e):t}function kN(t,e){if(e&&AN(e)){if(t instanceof Xf)return TN(t,e);throw ld("To use ref(service, url), the first argument must be a Storage instance.")}else return T1(t,e)}function Hg(t,e){const n=e==null?void 0:e[l1];return n==null?null:pt.makeFromBucketSpec(n,t)}function CN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Iw(i,t.app.options.projectId))}class Xf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=a1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ER,this._maxUploadRetryTime=_R,this._requests=new Set,i!=null?this._bucket=pt.makeFromBucketSpec(i,this._host):this._bucket=Hg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=Hg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ur(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new MR(d1());{const o=WR(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Gg="@firebase/storage",Wg="0.11.2";/**
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
 */const k1="storage";function C1(t,e,n){return t=ae(t),_N(t,e,n)}function R1(t){return t=ae(t),IN(t)}function N1(t,e){return t=ae(t),kN(t,e)}function RN(t=bf(),e){t=ae(t);const r=_u(t,k1).getImmediate({identifier:e}),i=ww("storage");return i&&NN(r,...i),r}function NN(t,e,n,r={}){CN(t,e,n,r)}function DN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xf(n,r,i,e,zr)}function xN(){Or(new Zn(k1,DN,"PUBLIC").setMultipleInstances(!0)),Yt(Gg,Wg,""),Yt(Gg,Wg,"esm2017")}xN();var PN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,Jf=Jf||{},F=PN||self;function ku(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Go(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ON(t){return Object.prototype.hasOwnProperty.call(t,Kc)&&t[Kc]||(t[Kc]=++LN)}var Kc="closure_uid_"+(1e9*Math.random()>>>0),LN=0;function MN(t,e,n){return t.call.apply(t.bind,arguments)}function UN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ge=MN:Ge=UN,Ge.apply(null,arguments)}function xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function or(){this.s=this.s,this.o=this.o}var bN=0;or.prototype.s=!1;or.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),bN!=0)&&ON(this)};or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const D1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ku(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var FN=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}function Cu(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return Cu().indexOf(t)!=-1}function ep(t){return ep[" "](t),t}ep[" "]=function(){};function $N(t,e){var n=xD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var jN=Ht("Opera"),Ui=Ht("Trident")||Ht("MSIE"),x1=Ht("Edge"),ud=x1||Ui,P1=Ht("Gecko")&&!(Cu().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),BN=Cu().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function O1(){var t=F.document;return t?t.documentMode:void 0}var cd;e:{var Qc="",Yc=function(){var t=Cu();if(P1)return/rv:([^\);]+)(\)|;)/.exec(t);if(x1)return/Edge\/([\d\.]+)/.exec(t);if(Ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BN)return/WebKit\/(\S+)/.exec(t);if(jN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yc&&(Qc=Yc?Yc[1]:""),Ui){var Xc=O1();if(Xc!=null&&Xc>parseFloat(Qc)){cd=String(Xc);break e}}cd=Qc}var hd;if(F.document&&Ui){var Kg=O1();hd=Kg||parseInt(cd,10)||void 0}else hd=void 0;var VN=hd;function yo(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(P1){e:{try{ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yo.$.h.call(this)}}De(yo,We);var zN={2:"touch",3:"pen",4:"mouse"};yo.prototype.h=function(){yo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wo="closure_listenable_"+(1e6*Math.random()|0),HN=0;function GN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++HN,this.fa=this.ia=!1}function Ru(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function WN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function L1(t){const e={};for(const n in t)e[n]=t[n];return e}const Qg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Qg.length;s++)n=Qg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nu(t){this.src=t,this.g={},this.h=0}Nu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=fd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new GN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function dd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=D1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ru(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var np="closure_lm_"+(1e6*Math.random()|0),Jc={};function U1(t,e,n,r,i){if(r&&r.once)return F1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)U1(t,e[s],n,r,i);return null}return n=sp(n),t&&t[Wo]?t.O(e,n,Go(r)?!!r.capture:!!r,i):b1(t,e,n,!1,r,i)}function b1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Go(i)?!!i.capture:!!i,a=ip(t);if(a||(t[np]=a=new Nu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=qN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(j1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qN(){function t(n){return e.call(t.src,t.listener,n)}const e=KN;return t}function F1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)F1(t,e[s],n,r,i);return null}return n=sp(n),t&&t[Wo]?t.P(e,n,Go(r)?!!r.capture:!!r,i):b1(t,e,n,!0,r,i)}function $1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$1(t,e[s],n,r,i);else r=Go(r)?!!r.capture:!!r,n=sp(n),t&&t[Wo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=fd(s,n,r,i),-1<n&&(Ru(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ip(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fd(e,n,r,i)),(n=-1<t?e[t]:null)&&rp(n))}function rp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wo])dd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(j1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ip(e))?(dd(n,t),n.h==0&&(n.src=null,e[np]=null)):Ru(t)}}}function j1(t){return t in Jc?Jc[t]:Jc[t]="on"+t}function KN(t,e){if(t.fa)t=!0;else{e=new yo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&rp(t),t=n.call(r,e)}return t}function ip(t){return t=t[np],t instanceof Nu?t:null}var Zc="__closure_events_fn_"+(1e9*Math.random()>>>0);function sp(t){return typeof t=="function"?t:(t[Zc]||(t[Zc]=function(e){return t.handleEvent(e)}),t[Zc])}function Ne(){or.call(this),this.i=new Nu(this),this.S=this,this.J=null}De(Ne,or);Ne.prototype[Wo]=!0;Ne.prototype.removeEventListener=function(t,e,n,r){$1(this,t,e,n,r)};function Ue(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var i=e;e=new We(r,t),M1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Pa(o,r,!0,e)&&i}if(o=e.g=t,i=Pa(o,r,!0,e)&&i,i=Pa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Pa(o,r,!1,e)&&i}Ne.prototype.N=function(){if(Ne.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ru(n[r]);delete t.g[e],t.h--}}this.J=null};Ne.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ne.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&dd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var op=F.JSON.stringify;class QN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function YN(){var t=ap;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XN{constructor(){this.h=this.g=null}add(e,n){const r=B1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var B1=new QN(()=>new JN,t=>t.reset());class JN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ZN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function eD(t){F.setTimeout(()=>{throw t},0)}let vo,wo=!1,ap=new XN,V1=()=>{const t=F.Promise.resolve(void 0);vo=()=>{t.then(tD)}};var tD=()=>{for(var t;t=YN();){try{t.h.call(t.g)}catch(n){eD(n)}var e=B1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wo=!1};function Du(t,e){Ne.call(this),this.h=t||1,this.g=e||F,this.j=Ge(this.qb,this),this.l=Date.now()}De(Du,Ne);C=Du.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ue(this,"tick"),this.ga&&(lp(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}C.N=function(){Du.$.N.call(this),lp(this),delete this.g};function up(t,e,n){if(typeof t=="function")n&&(t=Ge(t,n));else if(t&&typeof t.handleEvent=="function")t=Ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function z1(t){t.g=up(()=>{t.g=null,t.i&&(t.i=!1,z1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class nD extends or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:z1(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Eo(t){or.call(this),this.h=t,this.g={}}De(Eo,or);var Yg=[];function H1(t,e,n,r){Array.isArray(n)||(n&&(Yg[0]=n.toString()),n=Yg);for(var i=0;i<n.length;i++){var s=U1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function G1(t){tp(t.g,function(e,n){this.g.hasOwnProperty(n)&&rp(e)},t),t.g={}}Eo.prototype.N=function(){Eo.$.N.call(this),G1(this)};Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xu(){this.g=!0}xu.prototype.Ea=function(){this.g=!1};function rD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function iD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oD(t,n)+(r?" "+r:"")})}function sD(t,e){t.info(function(){return"TIMEOUT: "+e})}xu.prototype.info=function(){};function oD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return op(n)}catch{return e}}var Gr={},Xg=null;function Pu(){return Xg=Xg||new Ne}Gr.Ta="serverreachability";function W1(t){We.call(this,Gr.Ta,t)}De(W1,We);function _o(t){const e=Pu();Ue(e,new W1(e))}Gr.STAT_EVENT="statevent";function q1(t,e){We.call(this,Gr.STAT_EVENT,t),this.stat=e}De(q1,We);function et(t){const e=Pu();Ue(e,new q1(e,t))}Gr.Ua="timingevent";function K1(t,e){We.call(this,Gr.Ua,t),this.size=e}De(K1,We);function qo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Ou={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Q1={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function cp(){}cp.prototype.h=null;function Jg(t){return t.h||(t.h=t.i())}function Y1(){}var Ko={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function hp(){We.call(this,"d")}De(hp,We);function dp(){We.call(this,"c")}De(dp,We);var pd;function Lu(){}De(Lu,cp);Lu.prototype.g=function(){return new XMLHttpRequest};Lu.prototype.i=function(){return{}};pd=new Lu;function Qo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Eo(this),this.P=aD,t=ud?125:void 0,this.V=new Du(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new X1}function X1(){this.i=null,this.g="",this.h=!1}var aD=45e3,md={},Bl={};C=Qo.prototype;C.setTimeout=function(t){this.P=t};function gd(t,e,n){t.L=1,t.v=Uu(wn(e)),t.s=n,t.S=!0,J1(t,null)}function J1(t,e){t.G=Date.now(),Yo(t),t.A=wn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),oE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new X1,t.g=CE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new nD(Ge(t.Pa,t,t.g),t.O)),H1(t.U,t.g,"readystatechange",t.nb),e=t.I?L1(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),_o(),rD(t.j,t.u,t.A,t.m,t.W,t.s)}C.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};C.Pa=function(t){try{if(t==this.g)e:{const c=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||ud||this.g&&(this.h.h||this.g.ja()||ny(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?_o(3):_o(2)),Mu(this);var n=this.g.da();this.ca=n;t:if(Z1(this)){var r=ny(this.g);t="";var i=r.length,s=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),Hs(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,iD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var u=a;break t}}u=null}if(n=u)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yd(this,n);else{this.i=!1,this.o=3,et(12),wr(this),Hs(this);break e}}this.S?(eE(this,c,o),ud&&this.i&&c==3&&(H1(this.U,this.V,"tick",this.mb),this.V.start())):(pi(this.j,this.m,o,null),yd(this,o)),c==4&&wr(this),this.i&&!this.J&&(c==4?SE(this.l,this):(this.i=!1,Yo(this)))}else RD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),wr(this),Hs(this)}}}catch{}finally{}};function Z1(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function eE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=lD(t,n),i==Bl){e==4&&(t.o=4,et(14),r=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==md){t.o=4,et(15),pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else pi(t.j,t.m,i,null),yd(t,i);Z1(t)&&i!=Bl&&i!=md&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vp(e),e.M=!0,et(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),wr(t),Hs(t))}C.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.C<e.length&&(Mu(this),eE(this,t,e),this.i&&t!=4&&Yo(this))}};function lD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Bl:(n=Number(e.substring(n,r)),isNaN(n)?md:(r+=1,r+n>e.length?Bl:(e=e.slice(r,r+n),t.C=r+n,e)))}C.cancel=function(){this.J=!0,wr(this)};function Yo(t){t.Y=Date.now()+t.P,tE(t,t.P)}function tE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qo(Ge(t.lb,t),e)}function Mu(t){t.B&&(F.clearTimeout(t.B),t.B=null)}C.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(sD(this.j,this.A),this.L!=2&&(_o(),et(17)),wr(this),this.o=2,Hs(this)):tE(this,this.Y-t)};function Hs(t){t.l.H==0||t.J||SE(t.l,t)}function wr(t){Mu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,lp(t.V),G1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function yd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||vd(n.i,t))){if(!t.K&&vd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Hl(n),$u(n);else break e;yp(n),et(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=qo(Ge(n.ib,n),6e3));if(1>=uE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Er(n,11)}else if((t.K||n.g==t)&&Hl(n),!go(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(fp(s,s.h),s.h=null))}if(r.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,te(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=kE(r,r.J?r.pa:null,r.Y),o.K){cE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Mu(a),Yo(a)),r.g=o}else _E(r);0<n.j.length&&ju(n)}else u[0]!="stop"&&u[0]!="close"||Er(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Er(n,7):gp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}_o(4)}catch{}}function uD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ku(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function cD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ku(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function nE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ku(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cD(t),r=uD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var rE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function kr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof kr){this.h=t.h,Vl(this,t.j),this.s=t.s,this.g=t.g,zl(this,t.m),this.l=t.l;var e=t.i,n=new Io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zg(this,n),this.o=t.o}else t&&(e=String(t).match(rE))?(this.h=!1,Vl(this,e[1]||"",!0),this.s=Cs(e[2]||""),this.g=Cs(e[3]||"",!0),zl(this,e[4]),this.l=Cs(e[5]||"",!0),Zg(this,e[6]||"",!0),this.o=Cs(e[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,ey,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,ey,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?pD:fD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,gD)),t.join("")};function wn(t){return new kr(t)}function Vl(t,e,n){t.j=n?Cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zg(t,e,n){e instanceof Io?(t.i=e,yD(t.i,t.h)):(n||(e=Rs(e,mD)),t.i=new Io(e,t.h))}function te(t,e,n){t.i.set(e,n)}function Uu(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ey=/[#\/\?@]/g,fD=/[#\?:]/g,pD=/[#\?]/g,mD=/[#\?@]/g,gD=/#/g;function Io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ar(t){t.g||(t.g=new Map,t.h=0,t.i&&hD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=Io.prototype;C.add=function(t,e){ar(this),this.i=null,t=Ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iE(t,e){ar(t),e=Ji(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sE(t,e){return ar(t),e=Ji(t,e),t.g.has(e)}C.forEach=function(t,e){ar(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};C.ta=function(){ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};C.Z=function(t){ar(this);let e=[];if(typeof t=="string")sE(this,t)&&(e=e.concat(this.g.get(Ji(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return ar(this),this.i=null,t=Ji(this,t),sE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function oE(t,e,n){iE(t,e),0<n.length&&(t.i=null,t.g.set(Ji(t,e),Zf(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yD(t,e){e&&!t.j&&(ar(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(iE(this,r),oE(this,i,n))},t)),t.j=e}var vD=class{constructor(t,e){this.g=t,this.map=e}};function aE(t){this.l=t||wD,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wD=10;function lE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function uE(t){return t.h?1:t.g?t.g.size:0}function vd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fp(t,e){t.g?t.g.add(e):t.h=e}function cE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}aE.prototype.cancel=function(){if(this.i=hE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zf(t.i)}var ED=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function _D(){this.g=new ED}function ID(t,e,n){const r=n||"";try{nE(t,function(i,s){let o=i;Go(i)&&(o=op(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function SD(t,e){const n=new xu;if(F.Image){const r=new Image;r.onload=xa(Oa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xa(Oa,n,r,"TestLoadImage: error",!1,e),r.onabort=xa(Oa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xa(Oa,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Oa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xo(t){this.l=t.fc||null,this.j=t.ob||!1}De(Xo,cp);Xo.prototype.g=function(){return new bu(this.l,this.j)};Xo.prototype.i=function(t){return function(){return t}}({});function bu(t,e){Ne.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=pp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(bu,Ne);var pp=0;C=bu.prototype;C.open=function(t,e){if(this.readyState!=pp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,So(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jo(this)),this.readyState=pp};C.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}C.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jo(this):So(this),this.readyState==3&&dE(this)}};C.Za=function(t){this.g&&(this.response=this.responseText=t,Jo(this))};C.Ya=function(t){this.g&&(this.response=t,Jo(this))};C.ka=function(){this.g&&Jo(this)};function Jo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,So(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function So(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AD=F.JSON.parse;function pe(t){Ne.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fE,this.L=this.M=!1}De(pe,Ne);var fE="",TD=/^https?$/i,kD=["POST","PUT"];C=pe.prototype;C.Oa=function(t){this.M=t};C.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pd.g(),this.C=this.u?Jg(this.u):Jg(pd),this.g.onreadystatechange=Ge(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ty(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=D1(kD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{gE(this),0<this.B&&((this.L=CD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ge(this.ua,this)):this.A=up(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ty(this,s)}};function CD(t){return Ui&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.ua=function(){typeof Jf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function ty(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pE(t),Fu(t)}function pE(t){t.F||(t.F=!0,Ue(t,"complete"),Ue(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),Fu(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fu(this,!0)),pe.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?mE(this):this.kb())};C.kb=function(){mE(this)};function mE(t){if(t.h&&typeof Jf<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)up(t.La,0,t);else if(Ue(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(rE)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!TD.test(i?i.toLowerCase():"")}n=r}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var s=2<Wt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",pE(t)}}finally{Fu(t)}}}}function Fu(t,e){if(t.g){gE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=r}catch{}}}function gE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}C.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}C.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AD(e)}};function ny(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RD(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(go(t[r]))continue;var n=ZN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}WN(e,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yE(t){let e="";return tp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function mp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vE(t){this.Ga=0,this.j=[],this.l=new xu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ws("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ws("baseRetryDelayMs",5e3,t),this.hb=ws("retryDelaySeedMs",1e4,t),this.eb=ws("forwardChannelMaxRetries",2,t),this.xa=ws("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new aE(t&&t.concurrentRequestLimit),this.Ja=new _D,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=vE.prototype;C.ra=8;C.H=1;function gp(t){if(wE(t),t.H==3){var e=t.W++,n=wn(t.I);if(te(n,"SID",t.K),te(n,"RID",e),te(n,"TYPE","terminate"),Zo(t,n),e=new Qo(t,t.l,e),e.L=2,e.v=Uu(wn(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=CE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yo(e)}TE(t)}function $u(t){t.g&&(vp(t),t.g.cancel(),t.g=null)}function wE(t){$u(t),t.u&&(F.clearTimeout(t.u),t.u=null),Hl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function ju(t){if(!lE(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||V1(),wo||(vo(),wo=!0),ap.add(e,t),t.C=0}}function ND(t,e){return uE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qo(Ge(t.Na,t,e),AE(t,t.C)),t.C++,!0)}C.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Qo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=L1(s),M1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=EE(this,i,e),n=wn(this.I),te(n,"RID",t),te(n,"CVER",22),this.F&&te(n,"X-HTTP-Session-Id",this.F),Zo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(yE(s)))+"&"+e:this.o&&mp(n,this.o,s)),fp(this.i,i),this.bb&&te(n,"TYPE","init"),this.P?(te(n,"$req",e),te(n,"SID","null"),i.aa=!0,gd(i,n,null)):gd(i,n,e),this.H=2}}else this.H==3&&(t?ry(this,t):this.j.length==0||lE(this.i)||ry(this))};function ry(t,e){var n;e?n=e.m:n=t.W++;const r=wn(t.I);te(r,"SID",t.K),te(r,"RID",n),te(r,"AID",t.V),Zo(t,r),t.o&&t.s&&mp(r,t.o,t.s),n=new Qo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=EE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),fp(t.i,n),gd(n,r,e)}function Zo(t,e){t.na&&tp(t.na,function(n,r){te(e,r,n)}),t.h&&nE({},function(n,r){te(e,r,n)})}function EE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ge(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{ID(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function _E(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||V1(),wo||(vo(),wo=!0),ap.add(e,t),t.A=0}}function yp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qo(Ge(t.Ma,t),AE(t,t.A)),t.A++,!0)}C.Ma=function(){if(this.u=null,IE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qo(Ge(this.jb,this),t)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),$u(this),IE(this))};function vp(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function IE(t){t.g=new Qo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);te(e,"RID","rpc"),te(e,"SID",t.K),te(e,"AID",t.V),te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&te(e,"TO",t.qa),te(e,"TYPE","xmlhttp"),Zo(t,e),t.o&&t.s&&mp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Uu(wn(e)),n.s=null,n.S=!0,J1(n,t)}C.ib=function(){this.v!=null&&(this.v=null,$u(this),yp(this),et(19))};function Hl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function SE(t,e){var n=null;if(t.g==e){Hl(t),vp(t),t.g=null;var r=2}else if(vd(t.i,e))n=e.F,cE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Pu(),Ue(r,new K1(r,n)),ju(t)}else _E(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&ND(t,e)||r==2&&yp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Er(t,5);break;case 4:Er(t,10);break;case 3:Er(t,6);break;default:Er(t,2)}}}function AE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Er(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ge(t.pb,t);n||(n=new kr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Vl(n,"https"),Uu(n)),SD(n.toString(),r)}else et(2);t.H=0,t.h&&t.h.za(e),TE(t),wE(t)}C.pb=function(t){t?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function TE(t){if(t.H=0,t.ma=[],t.h){const e=hE(t.i);(e.length!=0||t.j.length!=0)&&(qg(t.ma,e),qg(t.ma,t.j),t.i.i.length=0,Zf(t.j),t.j.length=0),t.h.ya()}}function kE(t,e,n){var r=n instanceof kr?wn(n):new kr(n);if(r.g!="")e&&(r.g=e+"."+r.g),zl(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new kr(null);r&&Vl(s,r),e&&(s.g=e),i&&zl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&te(r,n,e),te(r,"VER",t.ra),Zo(t,r),r}function CE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new pe(new Xo({ob:!0})):new pe(t.va),e.Oa(t.J),e}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function RE(){}C=RE.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function Gl(){if(Ui&&!(10<=Number(VN)))throw Error("Environmental error: no available transport.")}Gl.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){Ne.call(this),this.g=new vE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zi(this)}De(vt,Ne);vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;et(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=kE(t,null,t.Y),ju(t)};vt.prototype.close=function(){gp(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=op(t),t=n);e.j.push(new vD(e.fb++,t)),e.H==3&&ju(e)};vt.prototype.N=function(){this.g.h=null,delete this.j,gp(this.g),delete this.g,vt.$.N.call(this)};function NE(t){hp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(NE,hp);function DE(){dp.call(this),this.status=1}De(DE,dp);function Zi(t){this.g=t}De(Zi,RE);Zi.prototype.Ba=function(){Ue(this.g,"a")};Zi.prototype.Aa=function(t){Ue(this.g,new NE(t))};Zi.prototype.za=function(t){Ue(this.g,new DE)};Zi.prototype.ya=function(){Ue(this.g,"b")};function DD(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De($t,DD);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function eh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}$t.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)eh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){eh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){eh(this,r),i=0;break}}this.h=i,this.i+=e};$t.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function J(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var xD={};function wp(t){return-128<=t&&128>t?$N(t,function(e){return new J([e|0],0>e?-1:0)}):new J([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Ai;if(0>t)return Le(qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=wd;return new J(e,0)}function xE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Le(xE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),r=Ai,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=qt(Math.pow(e,s)),r=r.R(s).add(qt(o))):(r=r.R(n),r=r.add(qt(o)))}return r}var wd=4294967296,Ai=wp(0),Ed=wp(1),iy=wp(16777216);C=J.prototype;C.ea=function(){if(St(this))return-Le(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:wd+r)*e,e*=wd}return t};C.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(St(this))return"-"+Le(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,r="";;){var i=ql(n,e).g;n=Wl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};C.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}C.X=function(t){return t=Wl(this,t),St(t)?-1:cn(t)?0:1};function Le(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new J(n,~t.h).add(Ed)}C.abs=function(){return St(this)?Le(this):this};C.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new J(n,n[n.length-1]&-2147483648?-1:0)};function Wl(t,e){return t.add(Le(e))}C.R=function(t){if(cn(this)||cn(t))return Ai;if(St(this))return St(t)?Le(this).R(Le(t)):Le(Le(this).R(t));if(St(t))return Le(this.R(Le(t)));if(0>this.X(iy)&&0>t.X(iy))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,La(n,2*r+2*i),n[2*r+2*i+1]+=s*l,La(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,La(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,La(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new J(n,0)};function La(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Es(t,e){this.g=t,this.h=e}function ql(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new Es(Ai,Ai);if(St(t))return e=ql(Le(t),e),new Es(Le(e.g),Le(e.h));if(St(e))return e=ql(t,Le(e)),new Es(Le(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ed,r=e;0>=r.X(t);)n=sy(n),r=sy(r);var i=Xr(n,1),s=Xr(r,1);for(r=Xr(r,2),n=Xr(n,2);!cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Xr(r,1),n=Xr(n,1)}return e=Wl(t,i.R(e)),new Es(i,e)}for(i=Ai;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=qt(n),o=s.R(e);St(o)||0<o.X(t);)n-=r,s=qt(n),o=s.R(e);cn(s)&&(s=Ed),i=i.add(s),t=Wl(t,o)}return new Es(i,t)}C.gb=function(t){return ql(this,t).h};C.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new J(n,this.h&t.h)};C.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new J(n,this.h|t.h)};C.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new J(n,this.h^t.h)};function sy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new J(n,t.h)}function Xr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new J(i,t.h)}Gl.prototype.createWebChannel=Gl.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;Ou.NO_ERROR=0;Ou.TIMEOUT=8;Ou.HTTP_ERROR=6;Q1.COMPLETE="complete";Y1.EventType=Ko;Ko.OPEN="a";Ko.CLOSE="b";Ko.ERROR="c";Ko.MESSAGE="d";Ne.prototype.listen=Ne.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;J.prototype.add=J.prototype.add;J.prototype.multiply=J.prototype.R;J.prototype.modulo=J.prototype.gb;J.prototype.compare=J.prototype.X;J.prototype.toNumber=J.prototype.ea;J.prototype.toString=J.prototype.toString;J.prototype.getBits=J.prototype.D;J.fromNumber=qt;J.fromString=xE;var PD=function(){return new Gl},OD=function(){return Pu()},th=Ou,LD=Q1,MD=Gr,oy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},UD=Xo,Ma=Y1,bD=pe,FD=$t,Ti=J;const ay="@firebase/firestore";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let es="9.23.0";/**
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
 */const br=new Mf("@firebase/firestore");function ly(){return br.logLevel}function L(t,...e){if(br.logLevel<=Q.DEBUG){const n=e.map(Ep);br.debug(`Firestore (${es}): ${t}`,...n)}}function En(t,...e){if(br.logLevel<=Q.ERROR){const n=e.map(Ep);br.error(`Firestore (${es}): ${t}`,...n)}}function bi(t,...e){if(br.logLevel<=Q.WARN){const n=e.map(Ep);br.warn(`Firestore (${es}): ${t}`,...n)}}function Ep(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function ie(t,e){t||b()}function j(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class PE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $D{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class jD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BD{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new PE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Be(e)}}class VD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class zD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new VD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.T=n.token,new HD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function WD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class OE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function Fi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new ye(0,0))}static max(){return new $(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends Ao{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const qD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Ao{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return qD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ne.fromString(e))}static fromName(e){return new M(ne.fromString(e).popFirst(5))}static empty(){return new M(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ne(e.slice()))}}function KD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new er(i,M.empty(),e)}function QD(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er($.min(),M.empty(),-1)}static max(){return new er($.max(),M.empty(),-1)}}function YD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
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
 */const XD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ea(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==XD)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ta(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _p{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}_p.ct=-1;function Bu(t){return t==null}function Kl(t){return t===0&&1/t==-1/0}function ZD(t){return typeof t=="number"&&Number.isInteger(t)&&!Kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class he{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new he(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(e){return new cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new mt([])}unionWith(e){let n=new qe(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ME extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ME("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const ex=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(ie(!!t),typeof t=="string"){let e=0;const n=ex.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Ip(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sp(t){const e=t.mapValue.fields.__previous_value__;return Ip(e)?Sp(e):e}function To(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class tx{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ba={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ip(t)?4:nx(t)?9007199254740991:10:b()}function tn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=tr(r.timestampValue),o=tr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Fr(r.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ee(r.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(r.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ee(r.integerValue)===Ee(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ee(r.doubleValue),o=Ee(i.doubleValue);return s===o?Kl(s)===Kl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(uy(s)!==uy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!tn(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Co(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ee(i.integerValue||i.doubleValue),a=Ee(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hy(t.timestampValue,e.timestampValue);case 4:return hy(To(t),To(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Fr(i),a=Fr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(Ee(i.latitude),Ee(s.latitude));return o!==0?o:Y(Ee(i.longitude),Ee(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=$i(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ba.mapValue&&s===ba.mapValue)return 0;if(i===ba.mapValue)return 1;if(s===ba.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Y(a[c],u[c]);if(h!==0)return h;const d=$i(o[a[c]],l[u[c]]);if(d!==0)return d}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=tr(t),r=tr(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function ji(t){return _d(t)}function _d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=tr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=_d(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${_d(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function dy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Id(t){return!!t&&"integerValue"in t}function Ap(t){return!!t&&"arrayValue"in t}function fy(t){return!!t&&"nullValue"in t}function py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rl(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Gs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(Gs(this.value))}}function UE(t){const e=[];return Wr(t.fields,(n,r)=>{const i=new He([n]);if(rl(r)){const s=UE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mt(e)}/**
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
 */class ze{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,$.min(),$.min(),$.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new ze(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new ze(e,2,n,$.min(),$.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,$.min(),$.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ql{constructor(e,n){this.position=e,this.inclusive=n}}function my(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function rx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bE{}class Ie extends bE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sx(e,n,r):n==="array-contains"?new lx(e,r):n==="in"?new ux(e,r):n==="not-in"?new cx(e,r):n==="array-contains-any"?new hx(e,r):new Ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ox(e,r):new ax(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends bE{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new jt(e,n)}matches(e){return FE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function FE(t){return t.op==="and"}function $E(t){return ix(t)&&FE(t)}function ix(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function Sd(t){if(t instanceof Ie)return t.field.canonicalString()+t.op.toString()+ji(t.value);if($E(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function jE(t,e){return t instanceof Ie?function(n,r){return r instanceof Ie&&n.op===r.op&&n.field.isEqual(r.field)&&tn(n.value,r.value)}(t,e):t instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&jE(s,r.filters[o]),!0):!1}(t,e):void b()}function BE(t){return t instanceof Ie?function(e){return`${e.field.canonicalString()} ${e.op} ${ji(e.value)}`}(t):t instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(BE).join(" ,")+"}"}(t):"Filter"}class sx extends Ie{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class ox extends Ie{constructor(e,n){super(e,"in",n),this.keys=VE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ax extends Ie{constructor(e,n){super(e,"not-in",n),this.keys=VE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function VE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class lx extends Ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ap(n)&&Co(n.arrayValue,this.value)}}class ux extends Ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class cx extends Ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class hx extends Ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ap(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
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
 */class dx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function yy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dx(t,e,n,r,i,s,o)}function Tp(t){const e=j(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),e.dt=n}return e.dt}function kp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gy(t.startAt,e.startAt)&&gy(t.endAt,e.endAt)}function Ad(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class na{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function fx(t,e,n,r,i,s,o,a){return new na(t,e,n,r,i,s,o,a)}function Vu(t){return new na(t)}function vy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function HE(t){return t.collectionGroup!==null}function ki(t){const e=j(t);if(e.wt===null){e.wt=[];const n=Cp(e),r=zE(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ws(n)),e.wt.push(new Ws(He.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ws(He.keyField(),s))}}}return e.wt}function _n(t){const e=j(t);if(!e._t)if(e.limitType==="F")e._t=yy(e.path,e.collectionGroup,ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ki(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ws(s.field,o))}const r=e.endAt?new Ql(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ql(e.startAt.position,e.startAt.inclusive):null;e._t=yy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Td(t,e){e.getFirstInequalityField(),Cp(t);const n=t.filters.concat([e]);return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kd(t,e,n){return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zu(t,e){return kp(_n(t),_n(e))&&t.limitType===e.limitType}function GE(t){return`${Tp(_n(t))}|lt:${t.limitType}`}function Cd(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>BE(r)).join(", ")}]`),Bu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),`Target(${n})`}(_n(t))}; limitType=${t.limitType})`}function Hu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ki(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=my(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ki(n),r)||n.endAt&&!function(i,s,o){const a=my(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ki(n),r))}(t,e)}function px(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function WE(t){return(e,n)=>{let r=!1;for(const i of ki(t)){const s=mx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mx(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?$i(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LE(this.inner)}size(){return this.innerSize}}/**
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
 */const gx=new he(M.comparator);function In(){return gx}const qE=new he(M.comparator);function Ns(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function KE(t){let e=qE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return qs()}function QE(){return qs()}function qs(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const yx=new he(M.comparator),vx=new qe(M.comparator);function H(...t){let e=vx;for(const n of t)e=e.add(n);return e}const wx=new qe(Y);function Ex(){return wx}/**
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
 */function YE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(e)?"-0":e}}function XE(t){return{integerValue:""+t}}function _x(t,e){return ZD(e)?XE(e):YE(t,e)}/**
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
 */class Gu{constructor(){this._=void 0}}function Ix(t,e,n){return t instanceof Ro?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ip(i)&&(i=Sp(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Bi?ZE(t,e):t instanceof No?e_(t,e):function(r,i){const s=JE(r,i),o=wy(s)+wy(r.gt);return Id(s)&&Id(r.gt)?XE(o):YE(r.serializer,o)}(t,e)}function Sx(t,e,n){return t instanceof Bi?ZE(t,e):t instanceof No?e_(t,e):n}function JE(t,e){return t instanceof Yl?Id(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ro extends Gu{}class Bi extends Gu{constructor(e){super(),this.elements=e}}function ZE(t,e){const n=t_(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class No extends Gu{constructor(e){super(),this.elements=e}}function e_(t,e){let n=t_(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Yl extends Gu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function wy(t){return Ee(t.integerValue||t.doubleValue)}function t_(t){return Ap(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class n_{constructor(e,n){this.field=e,this.transform=n}}function Ax(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Bi&&r instanceof Bi||n instanceof No&&r instanceof No?Fi(n.elements,r.elements,tn):n instanceof Yl&&r instanceof Yl?tn(n.gt,r.gt):n instanceof Ro&&r instanceof Ro}(t.transform,e.transform)}class Tx{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wu{}function r_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new s_(t.key,Zt.none()):new ra(t.key,t.data,Zt.none());{const n=t.data,r=ot.empty();let i=new qe(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new lr(t.key,r,new mt(i.toArray()),Zt.none())}}function kx(t,e,n){t instanceof ra?function(r,i,s){const o=r.value.clone(),a=_y(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(r,i,s){if(!il(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=_y(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(i_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof ra?function(i,s,o,a){if(!il(i.precondition,s))return o;const l=i.value.clone(),u=Iy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,s,o,a){if(!il(i.precondition,s))return o;const l=Iy(i.fieldTransforms,a,s),u=s.data;return u.setAll(i_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return il(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Cx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JE(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function Ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Fi(n,r,(i,s)=>Ax(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lr extends Wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function i_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _y(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Sx(o,a,n[i]))}return r}function Iy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ix(s,o,e))}return r}class s_ extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rx extends Wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=r_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,r)=>Ey(n,r))&&Fi(this.baseMutations,e.baseMutations,(n,r)=>Ey(n,r))}}class Rp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=yx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Rp(e,n,r,i)}}/**
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
 */class Dx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var we,W;function Px(t){switch(t){default:return b();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function o_(t){if(t===void 0)return En("GRPC error has no .code"),_.UNKNOWN;switch(t){case we.OK:return _.OK;case we.CANCELLED:return _.CANCELLED;case we.UNKNOWN:return _.UNKNOWN;case we.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case we.INTERNAL:return _.INTERNAL;case we.UNAVAILABLE:return _.UNAVAILABLE;case we.UNAUTHENTICATED:return _.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case we.NOT_FOUND:return _.NOT_FOUND;case we.ALREADY_EXISTS:return _.ALREADY_EXISTS;case we.PERMISSION_DENIED:return _.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case we.ABORTED:return _.ABORTED;case we.OUT_OF_RANGE:return _.OUT_OF_RANGE;case we.UNIMPLEMENTED:return _.UNIMPLEMENTED;case we.DATA_LOSS:return _.DATA_LOSS;default:return b()}}(W=we||(we={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Np{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fa}static getOrCreateInstance(){return Fa===null&&(Fa=new Np),Fa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Fa=null;/**
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
 */function Ox(){return new TextEncoder}/**
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
 */const Lx=new Ti([4294967295,4294967295],0);function Sy(t){const e=Ox().encode(t),n=new FD;return n.update(e),new Uint8Array(n.digest())}function Ay(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ti([n,r],0),new Ti([i,s],0)]}class Dp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ti.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ti.fromNumber(r)));return i.compare(Lx)===1&&(i=new Ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Sy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Sy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qu($.min(),i,new he(Y),In(),H())}}class ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,H(),H(),H())}}/**
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
 */class sl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class a_{constructor(e,n){this.targetId=e,this.Vt=n}}class l_{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ty{constructor(){this.St=0,this.Dt=Cy(),this.Ct=Xe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=H(),n=H(),r=H();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new ia(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Cy()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Mx{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=In(),this.zt=ky(),this.Wt=new he(Y)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Ad(o))if(i===0){const a=new M(o.path);this.Yt(r,a,ze.newNoDocument(a,$.min()))}else ie(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Np.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,g,y,v,E,p;const f={localCacheCount:c,existenceFilterCount:h.count},m=h.unchangedNames;return m&&(f.bloomFilter={applied:u===0,hashCount:(d=m==null?void 0:m.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(p=(E=m==null?void 0:m.bits)===null||E===void 0?void 0:E.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Fr(s).toUint8Array()}catch(c){if(c instanceof ME)return bi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Dp(l,o,a)}catch(c){return bi(c instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Ad(a.target)){const l=new M(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,ze.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=H();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new qu(e,n,this.Wt,this.jt,r);return this.jt=In(),this.zt=ky(),this.Wt=new he(Y),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Ty,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new qe(Y),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ty),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function ky(){return new he(M.comparator)}function Cy(){return new he(M.comparator)}const Ux=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Fx=(()=>({and:"AND",or:"OR"}))();class $x{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||Bu(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jx(t,e){return Xl(t,e.toTimestamp())}function en(t){return ie(!!t),$.fromTimestamp(function(e){const n=tr(e);return new ye(n.seconds,n.nanos)}(t))}function xp(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function c_(t){const e=ne.fromString(t);return ie(p_(e)),e}function Nd(t,e){return xp(t.databaseId,e.path)}function nh(t,e){const n=c_(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(h_(n))}function Dd(t,e){return xp(t.databaseId,e)}function Bx(t){const e=c_(t);return e.length===4?ne.emptyPath():h_(e)}function xd(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function h_(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ry(t,e,n){return{name:Nd(t,e),fields:n.value.mapValue.fields}}function Vx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ie(u===void 0||typeof u=="string"),Xe.fromBase64String(u||"")):(ie(u===void 0||u instanceof Uint8Array),Xe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:o_(l.code);return new D(u,l.message||"")}(o);n=new l_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nh(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):$.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new sl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nh(t,r.document),s=r.readTime?en(r.readTime):$.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nh(t,r.document),s=r.removedTargetIds||[];n=new sl([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xx(i,s),a=r.targetId;n=new a_(a,o)}}return n}function zx(t,e){let n;if(e instanceof ra)n={update:Ry(t,e.key,e.value)};else if(e instanceof s_)n={delete:Nd(t,e.key)};else if(e instanceof lr)n={update:Ry(t,e.key,e.data),updateMask:Jx(e.fieldMask)};else{if(!(e instanceof Rx))return b();n={verify:Nd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Bi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof No)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yl)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function Hx(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?en(r.updateTime):en(i);return s.isEqual($.min())&&(s=en(i)),new Tx(s,r.transformResults||[])}(n,e))):[]}function Gx(t,e){return{documents:[Dd(t,e.path)]}}function Wx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Dd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return f_(jt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Zr(c.field),direction:Qx(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Rd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function qx(t){let e=Bx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=d_(c);return h instanceof jt&&$E(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ws(ei(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Bu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ql(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ql(d,h)}(n.endAt)),fx(e,i,o,s,a,"F",l,u)}function Kx(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function d_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ei(e.unaryFilter.field);return Ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ei(e.unaryFilter.field);return Ie.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ei(e.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ei(e.unaryFilter.field);return Ie.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(e){return Ie.create(ei(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(n=>d_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(t):b()}function Qx(t){return Ux[t]}function Yx(t){return bx[t]}function Xx(t){return Fx[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function ei(t){return He.fromServerFormat(t.fieldPath)}function f_(t){return t instanceof Ie?function(e){if(e.op==="=="){if(py(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NAN"}};if(fy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(py(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NAN"}};if(fy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(e.field),op:Yx(e.op),value:e.value}}}(t):t instanceof jt?function(e){const n=e.getFilters().map(r=>f_(r));return n.length===1?n[0]:{compositeFilter:{op:Xx(e.op),filters:n}}}(t):b()}function Jx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function p_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class bn{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Zx{constructor(e){this.fe=e}}function e2(t){const e=qx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
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
 */class t2{constructor(){this.rn=new n2}addToCollectionParentIndex(e,n){return this.rn.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(er.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class n2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(ne.comparator)).toArray()}}/**
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
 */class Vi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Vi(0)}static Mn(){return new Vi(-1)}}/**
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
 */class r2{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class i2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class s2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ks(r.mutation,i,mt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=_r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=In();const o=qs(),a=qs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof lr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ks(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new i2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qs();let i=new he((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||mt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=QE();c.forEach(d=>{if(!s.has(d)){const g=r_(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(_r());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:KE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ns();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new na(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ze.newInvalidDocument(u)))});let o=Ns();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ks(u.mutation,l,mt.empty(),ye.now()),Hu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class o2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return T.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:en(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:e2(r.bundledQuery),readTime:en(r.readTime)}}(n)),T.resolve()}}/**
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
 */class a2{constructor(){this.overlays=new he(M.comparator),this.ls=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=_r(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new he((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=_r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=_r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dx(n,r));let s=this.ls.get(n);s===void 0&&(s=H(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class Pp{constructor(){this.fs=new qe(ke.ds),this.ws=new qe(ke._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new ke(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new ke(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new M(new ne([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new M(new ne([])),r=new ke(n,e),i=new ke(n,e+1);let s=H();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ke(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return M.comparator(e.key,n.key)||Y(e.As,n.As)}static _s(e,n){return Y(e.As,n.As)||M.comparator(e.key,n.key)}}/**
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
 */class l2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new qe(ke.ds)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(Y);return n.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),T.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new ke(new M(s),0);let a=new qe(Y);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),T.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return T.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new ke(n,0),i=this.Rs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class u2{constructor(e){this.Ds=e,this.docs=new he(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=In();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||YD(QD(c),r)<=0||(i.has(c.key)||Hu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Cs(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new c2(this)}getSize(e){return T.resolve(this.size)}}class c2 extends r2{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class h2{constructor(e){this.persistence=e,this.xs=new ts(n=>Tp(n),kp),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Pp,this.targetCount=0,this.Ms=Vi.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),T.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Fn(n),T.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.ks.containsKey(n))}}/**
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
 */class d2{constructor(e,n){this.$s={},this.overlays={},this.Os=new _p(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new h2(this),this.indexManager=new t2,this.remoteDocumentCache=function(r){return new u2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Zx(n),this.qs=new o2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new a2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new l2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new f2(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return T.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class f2 extends JD{constructor(e){super(),this.currentSequenceNumber=e}}class Op{constructor(e){this.persistence=e,this.Qs=new Pp,this.js=null}static zs(e){return new Op(e)}get Ws(){if(this.js)return this.js;throw b()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),T.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ws,r=>{const i=M.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return T.or([()=>T.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Lp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lp(e,n.fromCache,r,i)}}/**
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
 */class p2{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(vy(n))return T.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kd(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,kd(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return vy(n)||i.isEqual($.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(ly()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cd(n)),this.Wi(e,o,n,KD(i,-1)))})}ji(e,n){let r=new qe(WE(e));return n.forEach((i,s)=>{Hu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return ly()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Cd(n)),this.Ui.getDocumentsMatchingQuery(e,n,er.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class m2{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new he(Y),this.Yi=new ts(s=>Tp(s),kp),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s2(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function g2(t,e,n,r){return new m2(t,e,n,r)}async function m_(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function y2(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);ie(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function g_(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function v2(t,e){const n=j(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=In(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(w2(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual($.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function w2(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=In();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function E2(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _2(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Pd(t,e,n){const r=j(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Ny(t,e,n){const r=j(t);let i=$.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=j(a),h=c.Yi.get(u);return h!==void 0?T.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:H())).next(a=>(I2(r,px(e),a),{documents:a,ir:s})))}function I2(t,e,n){let r=t.Xi.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Dy{constructor(){this.activeTargetIds=Ex()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S2{constructor(){this.Hr=new Dy,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A2{Yr(e){}shutdown(){}}/**
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
 */class xy{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $a=null;function rh(){return $a===null?$a=268435456+Math.round(2147483648*Math.random()):$a++,"0x"+$a.toString(16)}/**
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
 */const T2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class k2{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const je="WebChannelConnection";class C2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=rh(),a=this.To(e,n);L("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(L("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw bi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=T2[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=rh();return new Promise((o,a)=>{const l=new bD;l.setWithCredentials(!0),l.listenOnce(LD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case th.NO_ERROR:const c=l.getResponseJson();L(je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case th.TIMEOUT:L(je,`RPC '${e}' ${s} timed out`),a(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case th.HTTP_ERROR:const h=l.getStatus();if(L(je,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const y=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(E)>=0?E:_.UNKNOWN}(g.status);a(new D(y,g.message))}else a(new D(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(_.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{L(je,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);L(je,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=rh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PD(),a=OD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new UD({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");L(je,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const y=new k2({ro:E=>{g?L(je,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(L(je,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),L(je,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),v=(E,p,f)=>{E.listen(p,m=>{try{f(m)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,Ma.EventType.OPEN,()=>{g||L(je,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Ma.EventType.CLOSE,()=>{g||(g=!0,L(je,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Ma.EventType.ERROR,E=>{g||(g=!0,bi(je,`RPC '${e}' stream ${i} transport errored:`,E),y.wo(new D(_.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ma.EventType.MESSAGE,E=>{var p;if(!g){const f=E.data[0];ie(!!f);const m=f,w=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(w){L(je,`RPC '${e}' stream ${i} received error:`,w);const k=w.status;let R=function(O){const K=we[O];if(K!==void 0)return o_(K)}(k),N=w.message;R===void 0&&(R=_.INTERNAL,N="Unknown error status: "+k+" with message "+w.message),g=!0,y.wo(new D(R,N)),h.close()}else L(je,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),v(a,MD.STAT_EVENT,E=>{E.stat===oy.PROXY?L(je,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===oy.NOPROXY&&L(je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function ih(){return typeof document<"u"?document:null}/**
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
 */function Ku(t){return new $x(t,!0)}/**
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
 */class y_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class v_{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new y_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new D(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R2 extends v_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Vx(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?$.min():s.readTime?en(s.readTime):$.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=xd(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Ad(a)?{documents:Gx(i,a)}:{query:Wx(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=u_(i,s.resumeToken);const l=Rd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo($.min())>0){o.readTime=Xl(i,s.snapshotVersion.toTimestamp());const l=Rd(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=Kx(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=xd(this.serializer),n.removeTarget=e,this.Wo(n)}}class N2 extends v_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Hx(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.cu(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=xd(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zx(this.serializer,r))};this.Wo(n)}}/**
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
 */class D2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(_.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(_.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class x2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(En(n),this.mu=!1):L("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class P2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{qr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l.vu.add(4),await sa(l),l.bu.set("Unknown"),l.vu.delete(4),await Qu(l)}(this))})}),this.bu=new x2(r,i)}}async function Qu(t){if(qr(t))for(const e of t.Ru)await e(!0)}async function sa(t){for(const e of t.Ru)await e(!1)}function w_(t,e){const n=j(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),bp(n)?Up(n):ns(n).Ko()&&Mp(n,e))}function E_(t,e){const n=j(t),r=ns(n);n.Au.delete(e),r.Ko()&&__(n,e),n.Au.size===0&&(r.Ko()?r.jo():qr(n)&&n.bu.set("Unknown"))}function Mp(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ns(t).su(e)}function __(t,e){t.Vu.qt(e),ns(t).iu(e)}function Up(t){t.Vu=new Mx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.bu.gu()}function bp(t){return qr(t)&&!ns(t).Uo()&&t.Au.size>0}function qr(t){return j(t).vu.size===0}function I_(t){t.Vu=void 0}async function O2(t){t.Au.forEach((e,n)=>{Mp(t,e)})}async function L2(t,e){I_(t),bp(t)?(t.bu.Iu(e),Up(t)):t.bu.set("Unknown")}async function M2(t,e,n){if(t.bu.set("Online"),e instanceof l_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof sl?t.Vu.Ht(e):e instanceof a_?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual($.min()))try{const r=await g_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Xe.EMPTY_BYTE_STRING,u.snapshotVersion)),__(i,a);const c=new bn(u.target,a,l,u.sequenceNumber);Mp(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!ta(e))throw e;t.vu.add(1),await sa(t),t.bu.set("Offline"),n||(n=()=>g_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Qu(t)})}function S_(t,e){return e().catch(n=>Jl(t,n,e))}async function Yu(t){const e=j(t),n=nr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;U2(e);)try{const i=await E2(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,b2(e,i)}catch(i){await Jl(e,i)}A_(e)&&T_(e)}function U2(t){return qr(t)&&t.Eu.length<10}function b2(t,e){t.Eu.push(e);const n=nr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function A_(t){return qr(t)&&!nr(t).Uo()&&t.Eu.length>0}function T_(t){nr(t).start()}async function F2(t){nr(t).hu()}async function $2(t){const e=nr(t);for(const n of t.Eu)e.uu(n.mutations)}async function j2(t,e,n){const r=t.Eu.shift(),i=Rp.from(r,e,n);await S_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yu(t)}async function B2(t,e){e&&nr(t).ou&&await async function(n,r){if(i=r.code,Px(i)&&i!==_.ABORTED){const s=n.Eu.shift();nr(n).Qo(),await S_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Yu(n)}var i}(t,e),A_(t)&&T_(t)}async function Py(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.vu.add(3),await sa(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Qu(n)}async function V2(t,e){const n=j(t);e?(n.vu.delete(2),await Qu(n)):e||(n.vu.add(2),await sa(n),n.bu.set("Unknown"))}function ns(t){return t.Su||(t.Su=function(e,n,r){const i=j(e);return i.fu(),new R2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:O2.bind(null,t),ao:L2.bind(null,t),nu:M2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),bp(t)?Up(t):t.bu.set("Unknown")):(await t.Su.stop(),I_(t))})),t.Su}function nr(t){return t.Du||(t.Du=function(e,n,r){const i=j(e);return i.fu(),new N2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:F2.bind(null,t),ao:B2.bind(null,t),au:$2.bind(null,t),cu:j2.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Yu(t)):(await t.Du.stop(),t.Eu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Fp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Fp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $p(t,e){if(En("AsyncQueue",`${e}: ${t}`),ta(t))return new D(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Oy{constructor(){this.Cu=new he(M.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):b():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class zi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zi(e,n,Ci.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class z2{constructor(){this.Nu=void 0,this.listeners=[]}}class H2{constructor(){this.queries=new ts(e=>GE(e),zu),this.onlineState="Unknown",this.ku=new Set}}async function jp(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new z2),i)try{s.Nu=await n.onListen(r)}catch(o){const a=$p(o,`Initialization of query '${Cd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Vp(n)}async function Bp(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function G2(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Vp(n)}function W2(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Vp(t){t.ku.forEach(e=>{e.next()})}class zp{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class k_{constructor(e){this.key=e}}class C_{constructor(e){this.key=e}}class q2{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=H(),this.mutatedKeys=H(),this.tc=WE(e),this.ec=new Ci(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new Oy,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Hu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),E=!0):this.rc(d,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(h)-g(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new zi(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Oy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=H(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new C_(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new k_(r))}),n}hc(e){this.Yu=e.ir,this.Zu=H();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return zi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class K2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Q2{constructor(e){this.key=e,this.fc=!1}}class Y2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ts(a=>GE(a),zu),this._c=new Map,this.mc=new Set,this.gc=new he(M.comparator),this.yc=new Map,this.Ic=new Pp,this.Tc={},this.Ec=new Map,this.Ac=Vi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function X2(t,e){const n=aP(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await _2(n.localStore,_n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await J2(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&w_(n.remoteStore,o)}return i}async function J2(t,e,n,r,i){t.Rc=(h,d,g)=>async function(y,v,E,p){let f=v.view.sc(E);f.zi&&(f=await Ny(y.localStore,v.query,!1).then(({documents:k})=>v.view.sc(k,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return My(y,v.targetId,w.cc),w.snapshot}(t,h,d,g);const s=await Ny(t.localStore,e,!0),o=new q2(e,s.ir),a=o.sc(s.documents),l=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);My(t,n,u.cc);const c=new K2(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Z2(t,e){const n=j(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!zu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),E_(n.remoteStore,r.targetId),Od(n,r.targetId)}).catch(ea)):(Od(n,r.targetId),await Pd(n.localStore,r.targetId,!0))}async function eP(t,e,n){const r=lP(t);try{const i=await function(s,o){const a=j(s),l=ye.now(),u=o.reduce((d,g)=>d.add(g.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=In(),y=H();return a.Zi.getEntries(d,u).next(v=>{g=v,g.forEach((E,p)=>{p.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const E=[];for(const p of o){const f=Cx(p,c.get(p.key).overlayedDocument);f!=null&&E.push(new lr(p.key,f,UE(f.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:KE(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new he(Y)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await oa(r,i.changes),await Yu(r.remoteStore)}catch(i){const s=$p(i,"Failed to persist write");n.reject(s)}}async function R_(t,e){const n=j(t);try{const r=await v2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ie(o.fc):i.removedDocuments.size>0&&(ie(o.fc),o.fc=!1))}),await oa(n,r,e)}catch(r){await ea(r)}}function Ly(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Vp(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tP(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new he(M.comparator);o=o.insert(s,ze.newNoDocument(s,$.min()));const a=H().add(s),l=new qu($.min(),new Map,new he(Y),o,a);await R_(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Hp(r)}else await Pd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(ea)}async function nP(t,e){const n=j(t),r=e.batch.batchId;try{const i=await y2(n.localStore,e);D_(n,r,null),N_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,i)}catch(i){await ea(i)}}async function rP(t,e,n){const r=j(t);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ie(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);D_(r,e,n),N_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,i)}catch(i){await ea(i)}}function N_(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function D_(t,e,n){const r=j(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||x_(t,r)})}function x_(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(E_(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Hp(t))}function My(t,e,n){for(const r of n)r instanceof k_?(t.Ic.addReference(r.key,e),iP(t,r)):r instanceof C_?(L("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||x_(t,r.key)):b()}function iP(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.mc.add(r),Hp(t))}function Hp(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new M(ne.fromString(e)),r=t.Ac.next();t.yc.set(r,new Q2(n)),t.gc=t.gc.insert(n,r),w_(t.remoteStore,new bn(_n(Vu(n.path)),r,"TargetPurposeLimboResolution",_p.ct))}}async function oa(t,e,n){const r=j(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Lp.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ta(c))throw c;L("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function sP(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await m_(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new D(_.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.er)}}function oP(t,e){const n=j(t),r=n.yc.get(e);if(r&&r.fc)return H().add(r.key);{let i=H();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function aP(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=R_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tP.bind(null,e),e.dc.nu=G2.bind(null,e.eventManager),e.dc.Pc=W2.bind(null,e.eventManager),e}function lP(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rP.bind(null,e),e}class Uy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return g2(this.persistence,new p2,e.initialUser,this.serializer)}createPersistence(e){return new d2(Op.zs,this.serializer)}createSharedClientState(e){return new S2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ly(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sP.bind(null,this.syncEngine),await V2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new H2}createDatastore(e){const n=Ku(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new C2(i));var i;return function(s,o,a,l){return new D2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Ly(this.syncEngine,a,0),o=xy.D()?new xy:new A2,new P2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Y2(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);L("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await sa(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Gp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=OE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$p(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sh(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await m_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function by(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dP(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Py(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Py(e.remoteStore,s)),t._onlineComponents=e}function hP(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hP(n))throw n;bi("Error using user provided cache. Falling back to memory cache: "+n),await sh(t,new Uy)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await sh(t,new Uy);return t._offlineComponents}async function P_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await by(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await by(t,new uP))),t._onlineComponents}function fP(t){return P_(t).then(e=>e.syncEngine)}async function Zl(t){const e=await P_(t),n=e.eventManager;return n.onListen=X2.bind(null,e.syncEngine),n.onUnlisten=Z2.bind(null,e.syncEngine),n}function pP(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Gp({next:h=>{s.enqueueAndForget(()=>Bp(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new D(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new D(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new zp(Vu(o.path),u,{includeMetadataChanges:!0,Ku:!0});return jp(i,c)}(await Zl(t),t.asyncQueue,e,n,r)),r.promise}function mP(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Gp({next:h=>{s.enqueueAndForget(()=>Bp(i,c)),h.fromCache&&a.source==="server"?l.reject(new D(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new zp(o,u,{includeMetadataChanges:!0,Ku:!0});return jp(i,c)}(await Zl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function O_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Fy=new Map;/**
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
 */function L_(t,e,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gP(t,e,n,r){if(e===!0&&r===!0)throw new D(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $y(t){if(!M.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jy(t){if(M.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xu(t);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class By{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new By({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new By(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $D;switch(n.type){case"firstParty":return new zD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fy.get(e);n&&(L("ComponentProvider","Removing Datastore"),Fy.delete(e),n.terminate())}(this),Promise.resolve()}}function yP(t,e,n,r={}){var i;const s=(t=Ct(t,Ju))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Be.MOCK_USER;else{a=Iw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Be(u)}t._authCredentials=new jD(new PE(a,l))}}/**
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
 */class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kr(this.firestore,e,this._query)}}class Qn extends Kr{constructor(e,n,r){super(e,n,Vu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new M(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function vP(t,e,...n){if(t=ae(t),L_("collection","path",e),t instanceof Ju){const r=ne.fromString(e,...n);return jy(r),new Qn(t,null,r)}{if(!(t instanceof Ke||t instanceof Qn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return jy(r),new Qn(t.firestore,null,r)}}function Tt(t,e,...n){if(t=ae(t),arguments.length===1&&(e=OE.A()),L_("doc","path",e),t instanceof Ju){const r=ne.fromString(e,...n);return $y(r),new Ke(t,null,new M(r))}{if(!(t instanceof Ke||t instanceof Qn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return $y(r),new Ke(t.firestore,t instanceof Qn?t.converter:null,new M(r))}}/**
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
 */class wP{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new y_(this,"async_queue_retry"),this.Xc=()=>{const n=ih();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=ih();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new fn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ta(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw En("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Fp.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&b()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Vy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class jr extends Ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new wP,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||M_(this),this._firestoreClient.terminate()}}function EP(t,e){const n=typeof t=="object"?t:bf(),r=typeof t=="string"?t:e||"(default)",i=_u(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ww("firestore");s&&yP(i,...s)}return i}function Zu(t){return t._firestoreClient||M_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function M_(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new tx(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,O_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cP(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(Xe.fromBase64String(e))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ec{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class aa{constructor(e){this._methodName=e}}/**
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
 */class Wp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */const _P=/^__.*__$/;class IP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class U_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function b_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class tc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return eu(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(b_(this.ca)&&_P.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class SP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ku(e)}ya(e,n,r,i=!1){return new tc({ca:e,methodName:n,ga:r,path:He.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qp(t){const e=t._freezeSettings(),n=Ku(t._databaseId);return new SP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AP(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Qp("Data must be an object, but it was:",o,r);const a=F_(r,o);let l,u;if(s.merge)l=new mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Ld(e,h,n);if(!o.contains(d))throw new D(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);j_(c,d)||c.push(d)}l=new mt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new IP(new ot(a),l,u)}class nc extends aa{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}function TP(t,e,n){return new tc({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Kp extends aa{_toFieldTransform(e){return new n_(e.path,new Ro)}isEqual(e){return e instanceof Kp}}class kP extends aa{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=TP(this,e,!0),r=this.pa.map(s=>rs(s,n)),i=new Bi(r);return new n_(e.path,i)}isEqual(e){return this===e}}function CP(t,e,n,r){const i=t.ya(1,e,n);Qp("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Wr(r,(l,u)=>{const c=Yp(e,l,n);u=ae(u);const h=i.da(c);if(u instanceof nc)s.push(c);else{const d=rs(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new mt(s);return new U_(o,a,i.fieldTransforms)}function RP(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Ld(e,r,n)],l=[i];if(s.length%2!=0)throw new D(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ld(e,s[d])),l.push(s[d+1]);const u=[],c=ot.empty();for(let d=a.length-1;d>=0;--d)if(!j_(u,a[d])){const g=a[d];let y=l[d];y=ae(y);const v=o.da(g);if(y instanceof nc)u.push(g);else{const E=rs(y,v);E!=null&&(u.push(g),c.set(g,E))}}const h=new mt(u);return new U_(c,h,o.fieldTransforms)}function NP(t,e,n,r=!1){return rs(n,t.ya(r?4:3,e))}function rs(t,e){if($_(t=ae(t)))return Qp("Unsupported field value:",e,t),F_(t,e);if(t instanceof aa)return function(n,r){if(!b_(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=rs(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _x(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Xl(r.serializer,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xl(r.serializer,i)}}if(n instanceof Wp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hi)return{bytesValue:u_(r.serializer,n._byteString)};if(n instanceof Ke){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Xu(n)}`)}(t,e)}function F_(t,e){const n={};return LE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,i)=>{const s=rs(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Wp||t instanceof Hi||t instanceof Ke||t instanceof aa)}function Qp(t,e,n){if(!$_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xu(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Ld(t,e,n){if((e=ae(e))instanceof ec)return e._internalPath;if(typeof e=="string")return Yp(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,n)}const DP=new RegExp("[~\\*/\\[\\]]");function Yp(t,e,n){if(e.search(DP)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ec(...e.split("."))._internalPath}catch{throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(_.INVALID_ARGUMENT,a+t+l)}function j_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class B_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xP extends B_{data(){return super.data()}}function Xp(t,e){return typeof e=="string"?Yp(t,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
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
 */function V_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jp{}class PP extends Jp{}function OP(t,e,...n){let r=[];e instanceof Jp&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Zp).length,o=i.filter(a=>a instanceof rc).length;if(s>1||s>0&&o>0)throw new D(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rc extends PP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rc(e,n,r)}_apply(e){const n=this._parse(e);return z_(e._query,n),new Kr(e.firestore,e.converter,Td(e._query,n))}_parse(e){const n=qp(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Hy(c,u);const d=[];for(const g of c)d.push(zy(a,i,g));h={arrayValue:{values:d}}}else h=zy(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Hy(c,u),h=NP(o,s,c,u==="in"||u==="not-in");return Ie.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LP(t,e,n){const r=e,i=Xp("where",t);return rc._create(i,r,n)}class Zp extends Jp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)z_(s,a),s=Td(s,a)}(e._query,n),new Kr(e.firestore,e.converter,Td(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zy(t,e,n){if(typeof(n=ae(n))=="string"){if(n==="")throw new D(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HE(e)&&n.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!M.isDocumentKey(r))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dy(t,new M(r))}if(n instanceof Ke)return dy(t,n._key);throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xu(n)}.`)}function Hy(t,e){if(!Array.isArray(t)||t.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function z_(t,e){if(e.isInequality()){const r=Cp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=zE(t);s!==null&&MP(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function MP(t,e,n){if(!n.isEqual(e))throw new D(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class UP{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wp(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=tr(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ie(p_(r));const i=new ko(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function bP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class H_ extends B_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ol extends H_{data(e={}){return super.data(e)}}class G_{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ol(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ol(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ol(r._firestore,r._userDataWriter,o.doc.key,o.doc,new xs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:FP(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
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
 */function $P(t){t=Ct(t,Ke);const e=Ct(t.firestore,jr);return pP(Zu(e),t._key).then(n=>K_(e,t,n))}class em extends UP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function jP(t){t=Ct(t,Kr);const e=Ct(t.firestore,jr),n=Zu(e),r=new em(e);return V_(t._query),mP(n,t._query).then(i=>new G_(e,r,t,i))}function Md(t,e,n){t=Ct(t,Ke);const r=Ct(t.firestore,jr),i=bP(t.converter,e,n);return q_(r,[AP(qp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function mi(t,e,n,...r){t=Ct(t,Ke);const i=Ct(t.firestore,jr),s=qp(i);let o;return o=typeof(e=ae(e))=="string"||e instanceof ec?RP(s,"updateDoc",t._key,e,n,r):CP(s,"updateDoc",t._key,e),q_(i,[o.toMutation(t._key,Zt.exists(!0))])}function W_(t,...e){var n,r,i;t=ae(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ke)u=Ct(t.firestore,jr),c=Vu(t._key.path),l={next:h=>{e[o]&&e[o](K_(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ct(t,Kr);u=Ct(h.firestore,jr),c=h._query;const d=new em(u);l={next:g=>{e[o]&&e[o](new G_(u,d,h,g))},error:e[o+1],complete:e[o+2]},V_(t._query)}return function(h,d,g,y){const v=new Gp(y),E=new zp(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>jp(await Zl(h),E)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>Bp(await Zl(h),E))}}(Zu(u),c,a,l)}function q_(t,e){return function(n,r){const i=new fn;return n.asyncQueue.enqueueAndForget(async()=>eP(await fP(n),r,i)),i.promise}(Zu(t),e)}function K_(t,e,n){const r=n.docs.get(e._key),i=new em(t);return new H_(t,i,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}function tu(){return new Kp("serverTimestamp")}function Gy(...t){return new kP("arrayUnion",t)}(function(t,e=!0){(function(n){es=n})(zr),Or(new Zn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new jr(new BD(n.getProvider("auth-internal")),new GD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Yt(ay,"3.13.0",t),Yt(ay,"3.13.0","esm2017")})();const BP={apiKey:"AIzaSyBHeAkcpdMwDFoTaYx1qVT7o6F2pa8229g",authDomain:"chatapp-5e237.firebaseapp.com",projectId:"chatapp-5e237",storageBucket:"chatapp-5e237.appspot.com",messagingSenderId:"465898439134",appId:"1:465898439134:web:d0b00ecb022551c8555d4f"};Tw(BP);const ic=yR(),Q_=RN(),dt=EP(),ur=S.createContext(),VP=({children:t})=>{const[e,n]=S.useState({});return S.useEffect(()=>{const r=iC(ic,i=>{n(i)});return()=>{r()}},[]),I.jsx(ur.Provider,{value:{currentUser:e},children:t})},is=S.createContext(),zP=({children:t})=>{const{currentUser:e}=S.useContext(ur),n={chatId:"null",user:{}},r=(o,a)=>{switch(a.type){case"CHANGE_USER":return{user:a.payload,chatId:e.uid>a.payload.uid?`${e.uid}${a.payload.uid}`:`${a.payload.uid}${e.uid}`};default:return o}},[i,s]=S.useReducer(r,n);return I.jsx(is.Provider,{value:{data:i,dispatch:s},children:t})},HP=({message:t})=>{var i;const{currentUser:e}=S.useContext(ur),{data:n}=S.useContext(is),r=S.useRef();return S.useEffect(()=>{r.current.scrollIntoView({behavior:"smooth"})},[t]),I.jsxs("div",{ref:r,className:`message ${t.senderId===e.uid&&"owner"}`,children:[I.jsxs("div",{className:"messageInfo",children:[I.jsx("img",{src:t.senderId===e.uid?e==null?void 0:e.photoURL:(i=n.user)==null?void 0:i.photoURL,alt:""}),I.jsx("span",{children:"just now"})]}),I.jsxs("div",{className:"messageContent",children:[I.jsx("p",{children:t.text}),t.img&&I.jsx("img",{src:t.img,alt:""})]})]})},GP=()=>{const[t,e]=S.useState([]),{data:n}=S.useContext(is);return S.useEffect(()=>{const r=W_(Tt(dt,"chats",n==null?void 0:n.chatId),i=>{i.exists()&&e(i.data().messages)});return()=>{r()}},[n==null?void 0:n.chatId]),I.jsx("div",{className:"messages",children:t.map(r=>I.jsx(HP,{message:r},r.id))})},WP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RAzQjvjAGAAAEuUlEQVRYw+2WbUyTVxTH/7cvdFiBOBCKqJCROlJETQQaUVpeu4mxH5ZCidkyUWOiuBmRaBRJIL4lhPnyZR/QxBpRtmqyhtWiRVeftsaAG0t0+AIuoqmausdMrUUstWcfNgh0ILBWlyX7f7p57rnn/s59zj33AP/rLxExZt9ZX2+PUan+FQAbpaVxHJH9w9bWd7mvYHiwSSwGACoSCP65u6mL2TMPH6bpS5dCHRmJAoWCrX72jJLv3MF3Ph9mb9+u9joc3O8FBdDv2wefSBTyjmWvX6OtszPQWl+fz3heBK9Kha8WLRqaJ0NMDLB4MW77/WSWyZAP4IlcjhqlMmxhp2dnC57qdDbKymJGo1CYmBgdjVqFIlDvdOKV1SqILC9/udHn01z3eofWOH+LiqJboZ8Aq4uKCijq6khXUYHPzpwZnuAqMzI4joirNJvDFuk46tZFRHArvV7upscznHDezT09rMHpZKoRVEEyGoXCjtTo6FAB0s/4fJjL83g8ffqkF3HGrVvtshcvOI6Ia+E4e+acOaFAcJX37nEc0agrd9GQlNSti4gINrZRURESGhtpkVgMpcuFWSoV7Tt6NNSTAEbUgYvZCQmitL4+vqip6W9G94uKAAD8li3u1pQUttXtRld+vo1CT8phB6Ks+Hi8EolwPS4u2IjVuly0FmCppaUyV2wsaePjoXC58pnfHzaAN2ng52PHJO+vX08b8/KAvDxI/H6WvG1bqJtPGkBz3eu98rFSOXhArydPQgJLb2tTJV679s4AAGDJg5cvoTcY3mRjNAqFCTXNzSx1yRKqKi5Wa3p7J/I7pYeHk+bm2mN27RrrphAxJnMcOYKj5eW0IzmZfWS1XjQkJYUNwLFLqWRRbW3Uuns3v/P06WAIR3FjI+kqKqB0uaA3mehSSorortV6wRAbGzKAjdLSApVmM30rlWIez8Oj1Y6E4A7U1FBtVRXm8Ty+1mik35eVQWCxoEChEPdbLDYav+JNCGCj2bMFm86fR09cHMkPHmQtCxbgi9u3hyA46+bNWLxnD37xeLCypERddfNmZtbgoDSytJQ1OJ1Iz84WfGoyWXokkikDtFtjYgRLzWaUzZ2LBadOqROrq1VVjx7531Or8cONG/BotZAcOoT9Ph9UOp36x6tXh9ZmZvb3S26tWIGfurqwvrBQ+sJoHKtwjQtwJSkyMuKBxYL9Cxcy07lz0jurVzMWCABAYafbzfY2NAAAJH6/4LFer86wWoN9KH99/tz/TUkJWG8vPFqt8MumJiLGJgUw+IlGgw9ycrC3o2Pggk6XmTU4OMpgVnU1OCK2bN263C6TaTw/hZ1udyBXo4HS5SJdRcUlpKdPCmDa5+3taFy7VlC7fPnIxmRIFL9mTaBWo1H5jx+fKI/yWV8fW5aTQ/2rVuWhu3tMo+GGxHH27EQOwyGu9f79Uc+xsO7Jkz9Dk8uJ3m5n7HDMmIEbMhnm8fxwVi6b+fAh12K3Y5ZKZX964sSlu83NlBL038MgQfO0aYHs6moExGIaaGkZlZGcVS5nB9rbaUdy8ts8AQDA3o4O4cniYhb8vSM1Onpgx4YNODR/Pps5dvEIReTxetmqy5dfbzEYwtFP/Pf1B63n8BCweUoHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTMxVDE3OjAzOjUyKzAwOjAwAqs7ggAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0zMVQxNzowMzo1MiswMDowMHP2gz4AAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMDgtMzFUMTc6MDM6NTIrMDA6MDAk46LhAAAAAElFTkSuQmCC",qP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RBhBiyiCSAAACDklEQVRYw+2XPUgbcRjGn0vtUj8mzRDBUSeXkkgbHCS4xWiV1FWQkqWEwkF7yQUUOoTGFheziDpEJzPce5JIN48YMgnRkg4NnbocItr6kaXX4e2QEEqwekkuXXrP+D7Pvff7P8v/DrDVhPa809OU1DTyVCrkqVQoqWmqOxBoZ6dgNkiH8TguotFbzUg8PluOxVoBcJg9OS6iUQwZhvAxEuEXLpfj/eAgHkkShgwD72SZRqam2mni7tMnNY2IWQ1JUqOnhiSJiJlGDg461gBSHg8AGJOpVKNVn4lud+cA5O5uAJifPz1ttOozZ29v5wAaROFCgc7y+Vb9P9XVCgB8Xi8KbfjtNmClbAAbwAawAWyA1u6Ckq5j1OVSvo+PAwBytdk/a+DDzg4ACLl8XshVbz3hy/Z25wDObm4AIL3b0wMAvzaWlrCQSKCk6yjpOhYSCWNmeRkA9ry174LaM5aINo+PiZiJJybuyyorPh8RMz0pFq1rYDKbBQC8EcV7F55UM0Iok7GsAWXF6aT162siZtUny3/NlWKxalOXl5nH/f1mdpv+L1APg0HeTKcxKwh4ms065lZXf746OgKArm9jY44TUeTnfj+ImV8Hg3OjimIpQB3i7dYWXvb13Rp4dnXFnxcXzb68aQAASO8ODDxcD4eFT34/fx0eBgDkymXhx/7+g+TaWqB4ft7szv9bvwGBKNSBpuqWcAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0zMVQxNzowNjoxNiswMDowMJSH2i8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMzFUMTc6MDY6MTYrMDA6MDDl2mKTAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA4LTMxVDE3OjA2OjE2KzAwOjAwss9DTAAAAABJRU5ErkJggg==";let ja;const KP=new Uint8Array(16);function QP(){if(!ja&&(ja=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ja))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ja(KP)}const xe=[];for(let t=0;t<256;++t)xe.push((t+256).toString(16).slice(1));function YP(t,e=0){return(xe[t[e+0]]+xe[t[e+1]]+xe[t[e+2]]+xe[t[e+3]]+"-"+xe[t[e+4]]+xe[t[e+5]]+"-"+xe[t[e+6]]+xe[t[e+7]]+"-"+xe[t[e+8]]+xe[t[e+9]]+"-"+xe[t[e+10]]+xe[t[e+11]]+xe[t[e+12]]+xe[t[e+13]]+xe[t[e+14]]+xe[t[e+15]]).toLowerCase()}const XP=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Wy={randomUUID:XP};function oh(t,e,n){if(Wy.randomUUID&&!e&&!t)return Wy.randomUUID();t=t||{};const r=t.random||(t.rng||QP)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return YP(r)}const JP=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),{currentUser:i}=S.useContext(ur),{data:s}=S.useContext(is),o=async()=>{if(n){const a=N1(Q_,oh()),l=C1(a,n);l.on("state_changed",u=>{const c=u.bytesTransferred/u.totalBytes*100;switch(console.log("Upload is "+c+"% done"),u.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},u=>{console.log(u)},()=>{R1(l.snapshot.ref).then(async u=>{await mi(Tt(dt,"chats",s.chatId),{messages:Gy({id:oh(),text:t,senderId:i.uid,date:ye.now(),img:u})})})})}else await mi(Tt(dt,"chats",s.chatId),{messages:Gy({id:oh(),text:t,senderId:i.uid,date:ye.now()})});await mi(Tt(dt,"userChats",s.user.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:tu()}),await mi(Tt(dt,"userChats",i.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:tu()}),e(""),r(null)};return I.jsxs("div",{className:"input",children:[I.jsx("input",{type:"text",value:t,placeholder:"Type something here...",onChange:a=>e(a.target.value)}),I.jsxs("div",{className:"send",children:[I.jsx("img",{src:qP,alt:""}),I.jsx("input",{type:"file",name:"",id:"file",style:{display:"none"},onChange:a=>r(a.target.files[0])}),I.jsx("label",{htmlFor:"file",children:I.jsx("img",{src:WP,alt:""})}),I.jsx("button",{onClick:o,children:"Send"})]})]})},ZP=()=>{var e;const{data:t}=S.useContext(is);return I.jsxs("div",{className:"chat",children:[I.jsxs("div",{className:"chatInfo",children:[I.jsx("span",{children:(e=t.user)==null?void 0:e.displayName}),I.jsxs("div",{className:"chatIcons",children:[I.jsx("img",{src:OA,alt:""}),I.jsx("img",{src:LA,alt:""}),I.jsx("img",{src:MA,alt:""})]})]}),I.jsx(GP,{}),I.jsx(JP,{})]})},eO=()=>{const{currentUser:t}=S.useContext(ur);return I.jsxs("div",{className:"navbar",children:[I.jsx("span",{className:"logo",children:"ChatApp"}),I.jsxs("div",{className:"user",children:[I.jsx("img",{src:t.photoURL,alt:""}),I.jsx("span",{children:t.displayName}),I.jsx("button",{onClick:()=>sC(ic),children:"Logout"})]})]})},tO=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(null),[i,s]=S.useState(!1),{currentUser:o}=S.useContext(ur),a=async()=>{const c=OP(vP(dt,"users"),LP("displayName","==",t));try{(await jP(c)).forEach(d=>{r(d.data())})}catch{s(!0)}},l=async()=>{const c=o.uid>n.uid?`${o.uid}${n.uid}`:`${n.uid}${o.uid}`;try{(await $P(Tt(dt,"chats",c))).exists()||(console.log("something here"),await Md(Tt(dt,"chats",c),{messages:[]}),await mi(Tt(dt,"userChats",o.uid),{[c+".userInfo"]:{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL},[c+".date"]:tu()}),await mi(Tt(dt,"userChats",n.uid),{[c+".userInfo"]:{uid:o.uid,displayName:o.displayName,photoURL:o.photoURL},[c+".date"]:tu()}))}catch(h){console.log(h)}r(null),e("")},u=c=>{c.code==="Enter"&&a()};return I.jsxs("div",{className:"search",children:[I.jsx("div",{className:"searchForm",children:I.jsx("input",{type:"text",placeholder:"Find a user",onKeyDown:u,value:t,onChange:c=>e(c.target.value)})}),i&&I.jsx("span",{children:"User not found!"}),n&&I.jsxs("div",{className:"userChat",onClick:l,children:[I.jsx("img",{src:n.photoURL,alt:"userImage"}),I.jsx("div",{className:"userChatInfo",children:I.jsx("span",{children:n.displayName})})]}),I.jsx("hr",{})]})},nO=()=>{var s;const[t,e]=S.useState([]),{currentUser:n}=S.useContext(ur),{dispatch:r}=S.useContext(is);S.useEffect(()=>{const o=()=>{const a=W_(Tt(dt,"userChats",n.uid),l=>{e(l==null?void 0:l.data())});return()=>{a()}};n.uid&&o()},[n.uid]);const i=o=>{r({type:"CHANGE_USER",payload:o})};return I.jsx("div",{className:"chats",children:(s=Object==null?void 0:Object.entries(t))==null?void 0:s.sort((o,a)=>a[1].date-o[1].date).map(o=>{var a,l,u;return I.jsxs("div",{className:"userChat",onClick:()=>i(o[1].userInfo),children:[I.jsx("img",{src:(a=o[1].userInfo)==null?void 0:a.photoURL,alt:"user_image"}),I.jsxs("div",{className:"userChatInfo",children:[I.jsx("span",{children:(l=o[1].userInfo)==null?void 0:l.displayName}),I.jsx("p",{children:(u=o[1].lastMessage)==null?void 0:u.text})]})]},o[0])})})},rO=()=>I.jsxs("div",{className:"sidebar",children:[I.jsx(eO,{}),I.jsx(tO,{}),I.jsx(nO,{})]}),iO=()=>I.jsx("div",{className:"home",children:I.jsxs("div",{className:"container",children:[I.jsx(rO,{}),I.jsx(ZP,{})]})}),sO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5gkBChonodWdTQAADIVJREFUeNrtnX1UVVXawH/PuUIIfgJOZoCjoGlOH0LaiFQiRuZ6tV5zFLUPy/xYoTLmV2Uqpk0141gqOKWVY8tE6XNqtUoE8c0JVxqpaX686kySuSwVGdEK5Z5n/rjca4If517u5ULc3z93sdfez372s5+zz3P2s88BAgQI0HgRfyvQ2FiTnv93NTt3Nt8wViFxccYyfQINC/NUnjlWnkfOnIHKP6P7948oT40XY/9+q+0DDuBjVo9Zn6dmUpJUShaSlUUqk+Cmm3zVn7wgT6Hbt8tV9vuRCROGfZ46SeSzzy5Z398G+rXimvibjMlIQQERugiCg+tMgROSAWfPEscKSE4e3j+lp0hRUfVqTfxloNzc3FxVm61yQMQCNDLSWGm2Q8LDGWW0h6ZNdVPlfyAkRFtLMYSE6H6jBWoY/tLXXeQBFWThQla7OfH3EIH+61/me8ZJZOhQI98+BBVhpxGG5OYyRVdAhw5XlON0uDCuQbOyHIXx8TX0rCuDrFpUqGpGRQXtsSdBly5mEfuQmBip4Dpo4jdH9DZSKTMhNNScr8Hw4otut/8nh2HKlLTsfqNEFi50lq8+XdBTdcoU+VD/BAsWuC13sZEBcXFpm/t+LXLwoLPcZ4Zffbqgp5pXXy0LeAxJTJSl9iRo00adCsF1vurbn5jXmxuhZUuQVI8E5LMcTp+uXiwTuQ/OnMEzqdBO46FzZ+BrOO8AXl9S33xzwwbVhAQZYg6HQYMkR5dDmzbe7qfeEmlkg83mbbGy14wH8XzFHsJDaLNm1Yu9tgLkHMzfp+Ztt8kA8xHo2hUkEGJ6k3DjO9RmA43ypl1r7QCuK9418QEuylymw4EDPM1uWLpU5pEAZ87UqDdJ28CmTaRfWGyOlRKksNCYrsth3LjqzXQWxRAWxjGeRNPTaUtvJDb2Smp57ACue/wQ+w40Pj5wxV8ec5axANLSRo7s21ekuBi4+LN5+sXbj7in72yRr792/OX8/QX3O35yHl6/SM1Nm2grvWHr1ivp5XEM4Aru/i1vI7W4NwXwKrpVFiJBQVbru70C5HyybpSa0dGS0ciCu1pi3KX/Czk5OS/mz1UzK0teJg/5+ecaFatuAWnpd74vsmePs3j1PzY8o9qtmzHdXAe9e1dvZn7oePyUEYyDSZNAV1jRy20H0KQmu6FLF0Ete1kAYL2+A5060RaQRYs0k94XqyaZMuf8Pf68AxjLNAZNTtZM5iJLltRoV1z1gD0FSxPvxLIDOHfu7In6GERHU0fP8ZJPKhoSokNJQJKT+atMh4QEs6PeAW3b/qLeCjh6lEjuhi++MB7WxVBYqC0kDSoq6kJXn1JqXovY7d4OtCw7gGvLdpZeh/h+584s1wchOlqOGh8h6elM0t7QujWHdDGAHKrWwMZ9EB3NSYDoaG0q++H22zVR98DSpVIkXeHwYV/rzV8lHc6dY53WXtYv0C7Gl6AKmuBR+6n6EVJeXr3cchDo2qv3NaM0E8LDjbbyAWRkcEAnQevWbg/4WUyIiGCKIZCRoaskwhM5bvd73P4j1DS05fbOx7nq5Ut452LlVpEYIw9qpomtPwVUJWl8YLMLB/p/cg0MHqzTmAzNm9da4E5dCy1ayGC9GQYP9rX+xkDZBj/+SJE8D7t2uS2g6jk+5+H14Wrecsva5vkPqdmjh6zWFjBhgtvy3mUXfPll9RyAS1+rcpzZOV8Zzun5+jYPQYJHy9xl5WfqZEhIcCZrfDUOFw8SCqtWudKyVnFu4KRKLrJ1q7mMB5AtW2jOE/Db31qW4+x3tCTCxImXqmbdAarSsr6yl7yhZRATIx/yAvgg7RsqxWCzmc+ShcbE+GocrvHcryfg5EluJRZmz/Z4RXCXPBbDjh1XOgfgxHIwd0E+3gfbPvqS9ISQEHawsPbSLsPL5mQkJAQk06f9VOFyBACWLDEn6vsQGiqRtlBo3pwpmg3WN25qyO+jR6Gy0uwlm+DUKbXrCXTXrpH9U3qKcemJd1Jv8vBSKo9DWZni3ei5Rj8HmYWWlRGKzR9b164YARPHLzfXSmAR/QGMKrvZZ7mpT92b4OJIBN/DoUP0JBq9SJKktvL/Iq9Debn24/+RkhJ/j7e+UG8cQO/VD8A02c8TSF6e1zuo5C3Iy3PsB5imv8dbX6g3DuBSqL38HvLy+Eru/OVWqMeM4wzs3i1rmQ/5+f4eX32j3jmAayUAIDtbinkNPv1U1sgGx07YFbhXngLTlF7cgW7caCjvQnb2hXIDOKk3QWB15F1NhHPngBJ4803drK0gP58tZEP37syTz9FrrnHVn8YgOHJE+5prYNs2SqUP8sMP2s7fI6nf1FsHqI704iv4/nvHX598Atrhgih+BjsBBHnA37o2JOrdLSBA3RJwgEZOwAEaOQ0mBvi1YQaZ10GzZvzNGAy33Was4Tj06KEl7IV27eQL5sKxY9qfZ9DiYmM3KcjGjVrGLCgr85YeAQeoa8KJQjt3Nh5psh2ZOFEPmyMgOFiTiKqqEQWgI9gEv/kNkIzcfbd9CdPgrrukTFehr72mK6UZFBcbb5CGWHg8vgQBB/Ax5oOsQUWMJ+RGJD5ec3UuMnasIxdgnfNZUvkOGTNGDlCIRkU5Tjx98IGnO5yBGMBHaKIMAsOQ/5F+yMCBmqtvwdixXusg1bEyOCb+0Ud1sBR5klUMrABeRgfbukFQEAP0FXT0aHaby5Du3X3WXyZzISGBcn0eIiKMCvsbMG0aYGkLLLACeAlXUNfN/CfMmMFh3058DZwnhl6w/QGGDrXaLLAC1BLZxusQGSmZRjlMn45NRzheD28YBFYATwliDsTGmj/LUsjMpDtlDWninTSgFcCYB2A8oyVocLC9JddDSIh25DhSWclbegP600+1fSy6Uv86QG+HXr3oqRth1CjW6UB/W6Y21GMHcBjcvN18Be3cWe7QCcjQoXZTFyPR0ZzkFIAU4/j+TleaIkeO6Fxpia5dK3NkKrJ3L5huHpK6EMdjlmHwtHkt3HMPW9gI/fv72zreot45gHnEXAJNm8rfZSU6fLicZQxy661c6axgBduhXTvQx5HJk/UPZje0oEAKyETeeYdSyQS73aoe56P5ysfQ0aPZwrd1GtTVEZZjgKBgYyfiiwMVVUvrXGmJduki240w9NlnOasDHRPvId1kJ5KSYq40zsGMGSzmW4iJcV3R1QnXTLDZdLKuQDt1EsyDMGcOh+XqhjTx8h29EevvQlo/Fr5Cv0ErK4GB3jhNq+MdL30Sbr6LDBuG8jiSmMgWvvWqQYo1GNq3V3gdZs5kr1wPFRXmy9IVSkqMs7yKGob+mXKkfXtaUoI0aaI36pPe1KOu0FacgxMnsHis1vIKYKba76jNW7bOLVGzWDugcXFkyT5k/nyCuRcSE+vMQpPYDVddJUcdr2trqbZGYmN5lBa/hs/VyVNyGo4ds1rf8oAlWGKRU6cAy8IBuEVKoGlTYz5dkCFDtCP/gKQk5vv2/H9jRT80r0d/+MFqfcsOYD5kHEFLS43FGnS5W4DzSpcI/Qni4mSZZCLjxunr+ohXXvYMcFmMz2Q7bN9uub7VivvCPv0cOXbMjNJOVYc1L8R5pT/CNmTkSFpKCTJ1qk4LTHydcIMMg1On5NXSAbBjh9Vmbodza6ILQ1VTUszx9n1oXJyRwx6kY0ddI8Nh/Hjn69j+tkej40duhbVrh4/u11wkLc1qM7eDHnuYeRg9cMBoQnN4+mmdyT7o08cx8QH8hf7OuBaWLXO3ndu5gJF7U8LFOHSIZnyMeP+TqAHc5CzvQ1HR8J7J/4HCQnebe5wMModJKTp1Kq9yCior/W2HRkeV3Y0JlKN//KOIiHiQA/HYAUZGpowSY8sWpkkU+mSD3DRp0HzDazB79rDyfivFuPIXQS9Frff0VFVVRdasK/geXnqJk+xyfKgwgC+QT0iGpUvTVvaziaSn11qetxXM2VowSHXGDGL1Wpg3j3XcV5svYDR6nLfYqit++MF+H4k895y3xPvsGxk5N+ZHqnbvLkd4D7KzdQkV0KtX3Vit4SMTuQo2b5YKXkUzMmq71F+yn7oaUI6uV9U+fXjJuBvGjJHlmgQDBugsfg+tWtWVHvWOqg0cPtdv4OOPJVPvhOXLh5X02wwbNnga3FnFb1/5fuXlL7aqGRTUalpZFtx8s9mBj5AbbiCVBRAby0GZDJGRfKYzoUULWvGe4x8mNAycaVlXdi5GJ6LHj+vvjEVw9Kg+R3f46qvTb7fsBtu2jRt/Sw8xLrLDGiBAgAABAgQIECCAt/kvM0G98R+QJHEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDktMDFUMTA6MjY6MzkrMDA6MDCBjcn+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA5LTAxVDEwOjI2OjM5KzAwOjAw8NBxQgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0wOS0wMVQxMDoyNjozOSswMDowMKfFUJ0AAAAASUVORK5CYII=";/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Do.apply(this,arguments)}var Fn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fn||(Fn={}));const qy="popstate";function oO(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ud("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nu(i)}return lO(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aO(){return Math.random().toString(36).substr(2,8)}function Ky(t,e){return{usr:t.state,key:t.key,idx:e}}function Ud(t,e,n,r){return n===void 0&&(n=null),Do({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ss(e):e,{state:n,key:e&&e.key||r||aO()})}function nu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ss(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lO(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Fn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Do({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Fn.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:p})}function d(E,p){a=Fn.Push;let f=Ud(v.location,E,p);n&&n(f,E),u=c()+1;let m=Ky(f,u),w=v.createHref(f);try{o.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(E,p){a=Fn.Replace;let f=Ud(v.location,E,p);n&&n(f,E),u=c();let m=Ky(f,u),w=v.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:nu(E);return ve(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qy,h),l=E,()=>{i.removeEventListener(qy,h),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let p=y(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(E){return o.go(E)}};return v}var Qy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qy||(Qy={}));function uO(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ss(e):e,i=nm(r.pathname||"/",n);if(i==null)return null;let s=Y_(t);cO(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=wO(s[a],IO(i));return o}function Y_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Y_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yO(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X_(s.path))i(s,o,l)}),e}function X_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function cO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hO=/^:\w+$/,dO=3,fO=2,pO=1,mO=10,gO=-2,Yy=t=>t==="*";function yO(t,e){let n=t.split("/"),r=n.length;return n.some(Yy)&&(r+=gO),e&&(r+=fO),n.filter(i=>!Yy(i)).reduce((i,s)=>i+(hO.test(s)?dO:s===""?pO:mO),r)}function vO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function wO(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=EO({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Yn([i,c.pathname]),pathnameBase:kO(Yn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Yn([i,c.pathnameBase]))}return s}function EO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_O(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=SO(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function _O(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function IO(t){try{return decodeURI(t)}catch(e){return tm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function SO(t,e){try{return decodeURIComponent(t)}catch(n){return tm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function nm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function AO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ss(t):t;return{pathname:n?n.startsWith("/")?n:TO(n,e):e,search:CO(r),hash:RO(i)}}function TO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ah(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function im(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ss(t):(i=Do({},t),ve(!i.pathname||!i.pathname.includes("?"),ah("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),ah("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),ah("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=AO(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Yn=t=>t.join("/").replace(/\/\/+/g,"/"),kO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const J_=["post","put","patch","delete"];new Set(J_);const DO=["get",...J_];new Set(DO);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ru.apply(this,arguments)}const sm=S.createContext(null),xO=S.createContext(null),os=S.createContext(null),sc=S.createContext(null),cr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Z_=S.createContext(null);function PO(t,e){let{relative:n}=e===void 0?{}:e;as()||ve(!1);let{basename:r,navigator:i}=S.useContext(os),{hash:s,pathname:o,search:a}=tI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Yn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function as(){return S.useContext(sc)!=null}function la(){return as()||ve(!1),S.useContext(sc).location}function eI(t){S.useContext(os).static||S.useLayoutEffect(t)}function oc(){let{isDataRoute:t}=S.useContext(cr);return t?GO():OO()}function OO(){as()||ve(!1);let t=S.useContext(sm),{basename:e,navigator:n}=S.useContext(os),{matches:r}=S.useContext(cr),{pathname:i}=la(),s=JSON.stringify(rm(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return eI(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=im(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Yn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function tI(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(cr),{pathname:i}=la(),s=JSON.stringify(rm(r).map(o=>o.pathnameBase));return S.useMemo(()=>im(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function LO(t,e){return MO(t,e)}function MO(t,e,n){as()||ve(!1);let{navigator:r}=S.useContext(os),{matches:i}=S.useContext(cr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=la(),u;if(e){var c;let v=typeof e=="string"?ss(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ve(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=uO(t,{pathname:d}),y=jO(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Yn([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Yn([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?S.createElement(sc.Provider,{value:{location:ru({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fn.Pop}},y):y}function UO(){let t=HO(),e=NO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const bO=S.createElement(UO,null);class FO extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(cr.Provider,{value:this.props.routeContext},S.createElement(Z_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $O(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(sm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(cr.Provider,{value:e},r)}function jO(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ve(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||bO);let d=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=h:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement($O,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(FO,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var bd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(bd||(bd={}));var xo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(xo||(xo={}));function BO(t){let e=S.useContext(sm);return e||ve(!1),e}function VO(t){let e=S.useContext(xO);return e||ve(!1),e}function zO(t){let e=S.useContext(cr);return e||ve(!1),e}function nI(t){let e=zO(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function HO(){var t;let e=S.useContext(Z_),n=VO(xo.UseRouteError),r=nI(xo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function GO(){let{router:t}=BO(bd.UseNavigateStable),e=nI(xo.UseNavigateStable),n=S.useRef(!1);return eI(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ru({fromRouteId:e},s)))},[t,e])}function WO(t){let{to:e,replace:n,state:r,relative:i}=t;as()||ve(!1);let{matches:s}=S.useContext(cr),{pathname:o}=la(),a=oc(),l=im(e,rm(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Ps(t){ve(!1)}function qO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:s,static:o=!1}=t;as()&&ve(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ss(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=S.useMemo(()=>{let v=nm(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return y==null?null:S.createElement(os.Provider,{value:l},S.createElement(sc.Provider,{children:n,value:y}))}function KO(t){let{children:e,location:n}=t;return LO(Fd(e),n)}var Xy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Xy||(Xy={}));new Promise(()=>{});function Fd(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Fd(r.props.children,s));return}r.type!==Ps&&ve(!1),!r.props.index||!r.props.children||ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $d(){return $d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$d.apply(this,arguments)}function QO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XO(t,e){return t.button===0&&(!e||e==="_self")&&!YO(t)}const JO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],ZO="startTransition",Jy=II[ZO];function eL(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=oO({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(h=>{u&&Jy?Jy(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(qO,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const tL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rI=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=QO(e,JO),{basename:d}=S.useContext(os),g,y=!1;if(typeof u=="string"&&nL.test(u)&&(g=u,tL))try{let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=nm(m.pathname,d);m.origin===f.origin&&w!=null?u=w+m.search+m.hash:y=!0}catch{}let v=PO(u,{relative:i}),E=rL(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||E(f)}return S.createElement("a",$d({},h,{href:g||v,onClick:y||s?r:p,ref:n,target:l}))});var Zy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Zy||(Zy={}));var ev;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ev||(ev={}));function rL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=oc(),l=la(),u=tI(t,{relative:o});return S.useCallback(c=>{if(XO(c,n)){c.preventDefault();let h=r!==void 0?r:nu(l)===nu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const iL=()=>{const[t,e]=S.useState(!1),n=oc(),r=async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value;try{const a=await Zk(ic,s,o);n("/")}catch{e(!0)}};return I.jsx("div",{className:"formContainer",children:I.jsxs("div",{className:"formWrapper",children:[I.jsx("span",{className:"logo",children:"ChatApp"}),I.jsx("span",{className:"title",children:"Login"}),I.jsxs("form",{action:"",onSubmit:r,children:[I.jsx("input",{type:"email",placeholder:"Email"}),I.jsx("input",{type:"password",placeholder:"Password"}),I.jsx("button",{children:"Login"})]}),I.jsxs("p",{children:["Don't have an account? ",I.jsx(rI,{to:"/register",children:"Register"})," "]})]})})},sL=()=>{const[t,e]=S.useState(!1),n=oc(),r=async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value,a=i.target[2].value,l=i.target[3].files[0];try{const u=await Jk(ic,o,a),c=N1(Q_,s),h=C1(c,l);h.on("state_changed",d=>{const g=d.bytesTransferred/d.totalBytes*100;switch(console.log("Upload is "+g+"% done"),d.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},d=>{e(!0),console.log(d)},()=>{R1(h.snapshot.ref).then(async d=>{await tC(u.user,{displayName:s,photoURL:d}),await Md(Tt(dt,"users",u.user.uid),{uid:u.user.uid,displayName:s,email:o,photoURL:d}),await Md(Tt(dt,"userChats",u.user.uid),{}),n("/")})})}catch(u){e(!0),console.log(u)}};return I.jsx("div",{className:"formContainer",children:I.jsxs("div",{className:"formWrapper",children:[I.jsx("span",{className:"logo",children:"ChatApp"}),I.jsx("span",{className:"title",children:"Register"}),I.jsxs("form",{action:"",onSubmit:r,children:[I.jsx("input",{type:"text",placeholder:"Display Name"}),I.jsx("input",{type:"email",placeholder:"Email"}),I.jsx("input",{type:"password",placeholder:"Password"}),I.jsx("input",{style:{display:"none"},type:"file",placeholder:"Profile Picture",id:"file"}),I.jsxs("label",{htmlFor:"file",children:[I.jsx("img",{src:sO,alt:""}),I.jsx("span",{children:"Add an avatar"})]}),I.jsx("button",{children:"Sign Up"}),t&&I.jsx("span",{children:"Something went wrong"})]}),I.jsxs("p",{children:["Already have an account? ",I.jsx(rI,{to:"/login",children:"Login"})," "]})]})})};function oL(){const{currentUser:t}=S.useContext(ur),e=({children:n})=>t?n:I.jsx(WO,{to:"/login"});return I.jsx(eL,{children:I.jsx(KO,{children:I.jsxs(Ps,{path:"/",children:[I.jsx(Ps,{index:!0,element:I.jsx(e,{children:I.jsx(iO,{})})}),I.jsx(Ps,{path:"login",element:I.jsx(iL,{})}),I.jsx(Ps,{path:"register",element:I.jsx(sL,{})})]})})})}lh.createRoot(document.getElementById("root")).render(I.jsx(VP,{children:I.jsx(zP,{children:I.jsx(cv.StrictMode,{children:I.jsx(oL,{})})})}));
