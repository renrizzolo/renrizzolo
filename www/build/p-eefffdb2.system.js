var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,o)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:false,cmpDidLoad:true,cmpDidUnload:true,cmpDidUpdate:true,cmpDidRender:false,cmpWillLoad:true,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:true,disconnectedCallback:true,element:false,event:true,hasRenderFn:true,lifecycle:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:true,propString:true,propMutable:true,reflect:true,scoped:false,shadowDom:true,slot:true,slotRelocation:true,state:true,style:true,svg:true,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:true,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="app";var i=window;var s=document;var o={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var l=!!s.documentElement.attachShadow;var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var $={};var u=new WeakMap;var c=function(e){return u.get(e)};var d=e("r",function(e,t){return u.set(t.$lazyInstance$=e,t)});var v=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return u.set(e,t)}};var h=function(e,t){return t in e};var m=function(e){return console.error(e)};var g=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},m)};var p=new Map;var y=i.__stencil_cssshim;var b=0;var w=false;var S=[];var R=[];var x=[];var N=function(e){return function(t){e.push(t);if(!w){w=true;o.raf(L)}}};var T=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){m(e)}}e.length=0};var _=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){m(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var L=function(){b++;T(S);var e=(o.$flags$&6)===2?performance.now()+7*Math.ceil(b*(1/22)):Infinity;_(R,e);_(x,e);if(R.length>0){x.push.apply(x,R);R.length=0}if(w=S.length+R.length+x.length>0){o.raf(L)}else{b=0}};var C=function(e){return Promise.resolve().then(e)};var k=N(S);var E=N(R);var A={};var I="http://www.w3.org/2000/svg";var j=function(e){return e!=null};var P=function(e){return e.toLowerCase()};var U=function(e){return["object","function"].includes(typeof e)};function B(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var M=e("a",function(){if(!(i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var O=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n;return __generator(this,function(o){switch(o.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(s.querySelectorAll("script")).find(function(e){return e.src.includes("/"+a+".esm.js")||e.getAttribute("data-namespace")===a});n=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,i.location.href));z(n.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:o.sent();o.label=3;case 3:return[2,n.href]}})})});var z=function(e){var t=B(a);try{i[t]=new Function("w","return import(w);")}catch(n){var r=new Map;i[t]=function(n){var a=new URL(n,e).href;var o=r.get(a);if(!o){var l=s.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise(function(e){l.onload=function(){e(i[t].m);l.remove()}});r.set(a,o);s.head.appendChild(l)}return o}}};var D="r";var H="o";var V="s";var W="t";var q="hydrated";var F="s-id";var G="c-id";var Q="http://www.w3.org/1999/xlink";var K=new WeakMap;var Y=function(e,t,r){var n=p.get(e);if(f&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}p.set(e,n)};var J=function(e,t,r,n){var a=Z(t.$tagName$);var i=p.get(a);e=e.nodeType===11?e:s;if(i){if(typeof i==="string"){e=e.head||e;var o=K.get(e);var l=void 0;if(!o){K.set(e,o=new Set)}if(!o.has(a)){if(e.host&&(l=e.firstElementChild)&&l.tagName==="STYLE"){l.innerHTML=i}else{if(y){l=y.createHostStyle(n,a,i,!!(t.$flags$&10));var f=l["s-sc"];if(f){a=f;o=null}}else{l=s.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var X=function(e,t,r){var n=J(l&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var Z=function(e,t){return"sc-"+e};var ee=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var te=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var l;var f=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!U(a)){a=String(a)}if(i&&s){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}s=i}}};$(r);if(t){{o=t.key||undefined}{l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,ae)}var c={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{c.$key$=o}{c.$name$=l}return c});var re=e("H",{});var ne=function(e){return e&&e.$tag$===re};var ae={forEach:function(e,t){return e.map(ie).forEach(t)},map:function(e,t){return e.map(ie).map(t).map(se)}};var ie=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var se=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var oe=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var s=le(r);var l=le(e.className).filter(function(e){return!s.includes(e)});e.className=l.concat(le(n).filter(function(e){return!l.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!h(e,t)){if(h(e,P(t))){t=P(t.substring(2))}else{t=P(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var $=h(e,t);var u=U(n);if(($||u&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}var c=a&&t!==(t=t.replace(/^xlink\:?/,""))?true:false;if(n==null||n===false){if(c){e.removeAttributeNS(Q,P(t))}else{e.removeAttribute(t)}}else if((!$||i&4||a)&&!u){n=n===true?"":n.toString();if(c){e.setAttributeNS(Q,P(t),n)}else{e.setAttribute(t,n)}}}};var le=function(e){return!e?[]:e.split(" ")};var fe=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||A;var s=t.$attrs$||A;{for(n in i){if(s[n]==null&&i[n]!=null){oe(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){oe(a,n,i[n],s[n],r,t.$flags$)}};var $e;var ue;var ce;var de=false;var ve=false;var he=false;var me=false;var ge=function(e,t,r,n){var a=t.$children$[r];var i=0;var o;var l;var f;if(!de){he=true;if(a.$tag$==="slot"){if($e){n.classList.add($e+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(j(a.$text$)){a.$elm$=s.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=s.createTextNode("")}else{o=a.$elm$=me||a.$tag$==="svg"?s.createElementNS(I,a.$tag$):s.createElement(a.$flags$&2?"slot-fb":a.$tag$);{me=a.$tag$==="svg"?true:a.$tag$==="foreignObject"?false:me}{fe(null,a,me)}if(j($e)&&o["s-si"]!==$e){o.classList.add(o["s-si"]=$e)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=ge(e,a,i,o);if(l){o.appendChild(l)}}}if(a.$tag$==="svg"){me=false}}{a.$elm$["s-hn"]=ce;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=ue;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){pe(e.$elm$,false)}}}return a.$elm$};var pe=function(e,t){o.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==ce&&a["s-ol"]){xe(a).insertBefore(a,Re(a));a["s-ol"].remove();a["s-ol"]=undefined;he=true}if(t){pe(a,t)}}o.$flags$&=~1};var ye=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&P(s.tagName)===ce){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=ge(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,Re(t))}}}};var be=function(e,t,r,n){for(;t<=r;++t){if(j(e[t])){n=e[t].$elm$;Ce(e[t],true);{ve=true;if(n["s-ol"]){n["s-ol"].remove()}else{pe(n,true)}}n.remove()}}};var we=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var f=t[0];var $=t[l];var u=n.length-1;var c=n[0];var d=n[u];var v;var h;while(a<=l&&i<=u){if(f==null){f=t[++a]}else if($==null){$=t[--l]}else if(c==null){c=n[++i]}else if(d==null){d=n[--u]}else if(Se(f,c)){Ne(f,c);f=t[++a];c=n[++i]}else if(Se($,d)){Ne($,d);$=t[--l];d=n[--u]}else if(Se(f,d)){if(f.$tag$==="slot"||d.$tag$==="slot"){pe(f.$elm$.parentNode,false)}Ne(f,d);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=t[++a];d=n[--u]}else if(Se($,c)){if(f.$tag$==="slot"||d.$tag$==="slot"){pe($.$elm$.parentNode,false)}Ne($,c);e.insertBefore($.$elm$,f.$elm$);$=t[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&j(t[o].$key$)&&t[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){v=ge(t&&t[i],r,s,e)}else{Ne(h,c);t[s]=undefined;v=h.$elm$}c=n[++i]}else{v=ge(t&&t[i],r,i,e);c=n[++i]}if(v){{xe(f.$elm$).insertBefore(v,Re(f.$elm$))}}}}if(a>l){ye(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){be(t,a,l)}};var Se=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var Re=function(e){return e&&e["s-ol"]||e};var xe=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Ne=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;{me=r&&j(r.parentNode)&&r.ownerSVGElement!==undefined;me=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:me}if(!j(t.$text$)){{if(t.$tag$==="slot");else{fe(e,t,me)}}if(j(n)&&j(a)){we(r,n,t,a)}else if(j(a)){if(j(e.$text$)){r.textContent=""}ye(r,null,t,a,0,a.length-1)}else if(j(n)){be(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}if(me&&t.$tag$==="svg"){me=false}};var Te=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}Te(t)}}};var _e=[];var Le=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!_e.some(function(e){return e.nodeToRelocate===o})){ve=true;o["s-sn"]=f;_e.push({slotRefNode:s,nodeToRelocate:o})}}}}}if(s.nodeType===1){Le(s)}}};var Ce=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){Ce(e,t)})}};var ke=function(e,t,r,n){ce=P(e.tagName);var a=t.$vnode$||{$flags$:0};var i=ne(n)?n:te(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach(function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]})}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{$e=e["s-sc"]}{ue=e["s-cr"];de=l&&(r.$flags$&1)!==0;he=ve=false}Ne(a,i);{if(he){Le(i.$elm$);for(var f=0;f<_e.length;f++){var $=_e[f];if(!$.nodeToRelocate["s-ol"]){var u=s.createTextNode("");u["s-nr"]=$.nodeToRelocate;$.nodeToRelocate.parentNode.insertBefore($.nodeToRelocate["s-ol"]=u,$.nodeToRelocate)}}o.$flags$|=1;for(var f=0;f<_e.length;f++){var $=_e[f];var c=$.slotRefNode.parentNode;var d=$.slotRefNode.nextSibling;var u=$.nodeToRelocate["s-ol"];while(u=u.previousSibling){var v=u["s-nr"];if(v&&v){if(v["s-sn"]===$.nodeToRelocate["s-sn"]){if(c===v.parentNode){if((v=v.nextSibling)&&v&&!v["s-nr"]){d=v;break}}}}}if(!d&&c!==$.nodeToRelocate.parentNode||$.nodeToRelocate.nextSibling!==d){if($.nodeToRelocate!==d){c.insertBefore($.nodeToRelocate,d)}}}o.$flags$&=~1}if(ve){Te(i.$elm$)}_e.length=0}};var Ee=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();m(r);return[3,4];case 4:return[2]}})})};var Ae=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){switch(i.label){case 0:{t.$flags$|=16}r=t.$lazyInstance$;if(!a)return[3,2];return[4,Ee(r,"componentWillLoad")];case 1:i.sent();i.label=2;case 2:{E(function(){return Ie(e,t,n,r,a)})}return[2]}})})};var Ie=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){X(e,r,t.$modeName$)}{{t.$flags$|=4;try{ke(e,t,r,n.render&&n.render())}catch(e){m(e)}t.$flags$&=~4}}if(y){y.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}je(e,t)};var je=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(q)}{Ee(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){s.documentElement.classList.add(q);{setTimeout(function(){return o.$flags$|=2},999)}}}else{{Ee(n,"componentDidUpdate")}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var Pe=function(e){if((o.$flags$&1)===0){var t=c(e);if(y){y.removeHost(e)}var r=t.$lazyInstance$;{Ee(r,"disconnectedCallback")}{Ee(r,"componentDidUnload")}}};var Ue=function(e,t){if(e!=null&&!U(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Be=function(e,t){return c(e).$instanceValues$.get(t)};var Me=function(e,t,r,n){var a=c(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=Ue(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&(o&(1|8))===1){var l=n.$watchers$[t];if(l){l.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,s,t)}catch(e){m(e)}})}}if((o&(4|2|16))===2){Ae(i,a,n,false)}}}};var Oe=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Be(this,n)},set:function(e){Me(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a})}}return e};var ze=function(e,t,r,n){var a=e.shadowRoot;var i=[];var l=[];var f=a?[]:null;var $=n.$vnode$={$flags$:0,$tag$:t};if(!o.$orgLocNodes$){He(s.body,o.$orgLocNodes$=new Map)}e[F]=r;e.removeAttribute(F);De($,i,l,f,e,e,r);i.forEach(function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=o.$orgLocNodes$.get(r);var i=e.$elm$;if(n&&(n["s-sd"]||e.$hostId$==="0")){n.parentNode.insertBefore(i,n.nextSibling)}if(!a){i["s-hn"]=t;if(n){i["s-ol"]=n;i["s-ol"]["s-nr"]=i}}o.$orgLocNodes$.delete(r)});if(a){f.forEach(function(e){if(e){a.appendChild(e)}})}};var De=function(e,t,r,n,a,i,o){var l;var f;var $;if(i.nodeType===1){l=i.getAttribute(G);if(l){f=l.split(".");if(f[0]===o||f[0]==="0"){$={$flags$:0,$hostId$:f[0],$nodeId$:f[1],$depth$:f[2],$index$:f[3],$tag$:P(i.tagName),$elm$:i};t.push($);i.removeAttribute(G);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}var u=i.childNodes.length-1;for(;u>=0;u--){De(e,t,r,n,a,i.childNodes[u],o)}if(i.shadowRoot){for(u=i.shadowRoot.childNodes.length-1;u>=0;u--){De(e,t,r,n,a,i.shadowRoot.childNodes[u],o)}}}else if(i.nodeType===8){f=i.nodeValue.split(".");if(f[1]===o||f[1]==="0"){l=f[0];$={$flags$:0,$hostId$:f[1],$nodeId$:f[2],$depth$:f[3],$index$:f[4],$elm$:i};if(l===W){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===o){if(l===V){$.$tag$="slot";if(f[5]){i["s-sn"]=$.$name$=f[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=s.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(l===D){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){e.$children$=[{$index$:"0",$text$:i.textContent,$elm$:i}]}};var He=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){He(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){He(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===H){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-sd"]=n[3]===""}}};var Ve=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,function(){var r,i,o;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&256)===0))return[3,4];n.$flags$|=256;return[4,g(a)];case 1:s=l.sent();if(!s.isProxied){{a.$watchers$=s.watchers}Oe(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){m(e)}{n.$flags$&=~8}We(n.$lazyInstance$);if(!(!s.isStyleRegistered&&s.style))return[3,4];r=s.style;i=Z(a.$tagName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,i,false)})];case 2:r=l.sent();l.label=3;case 3:Y(i,r,!!(a.$flags$&1));s.isStyleRegistered=true;l.label=4;case 4:o=n.$ancestorComponent$;if(o&&!o["s-lr"]&&o["s-rc"]){o["s-rc"].push(function(){return Ve(e,n,a)})}else{Ae(e,n,a,true)}return[2]}})})};var We=function(e){{Ee(e,"connectedCallback")}};var qe=function(e,t){if((o.$flags$&1)===0){var r=c(e);if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;{n=e.getAttribute(F);if(n){if(l&&t.$flags$&1){var a=J(e.shadowRoot,t,e.getAttribute("s-mode"));e.classList.remove(a+"-h");e.classList.remove(a+"-s")}ze(e,t.$tagName$,n,r)}}if(!n){if(t.$flags$&4||t.$flags$&8){Fe(e)}}{var i=e;while(i=i.parentNode||i.host){if(i.nodeType===1&&i.hasAttribute("s-id")||i["s-init"]&&!i["s-lr"]){r.$ancestorComponent$=i;(i["s-al"]=i["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{Ve(e,r,t)}}We(r.$lazyInstance$)}};var Fe=function(e,t){var r;{r=""}t=e["s-cr"]=s.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ge=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=s.head;var f=i.customElements;var $=a.querySelector("meta[charset]");var u=s.createElement("style");Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"/",i.location.href).href;if(t.syncQueue){o.$flags$|=4}{var d=s.querySelectorAll("style[s-id]");var h="";d.forEach(function(e){return h+=e.innerHTML});d.forEach(function(e){Y(e.getAttribute(F),h+ee(e.innerHTML),true)})}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$attrsToReflect$=[]}{a.$watchers$={}}if(!l&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}v(t);if(a.$flags$&1){if(l){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){qe(this,a)};t.prototype.disconnectedCallback=function(){Pe(this)};t.prototype["s-init"]=function(){var e=c(this);if(e.$lazyInstance$){je(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=c(this);Ae(this,e,a,false)}};t.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!f.get(i)){r.push(i);f.define(i,Oe(s,a,1))}})});u.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";u.setAttribute("data-styles","");a.insertBefore(u,$?$.nextSibling:a.firstChild)});var Qe=e("c",function(e,t,r){var n=Je(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}});var Ke=function(e){var t=new URL(e,o.$resourcesUrl$);return t.origin!==i.location.origin?t.href:t.pathname};var Ye=e("d",function(e,t){if(t in $){return $[t]}else if(t==="window"){return i}else if(t==="document"){return s}else if(t==="isServer"||t==="isPrerender"){return!!n.hydrateServerSide}else if(t==="isClient"){return!n.hydrateServerSide}else if(t==="resourcesUrl"||t==="publicPath"){return Ke(".")}else if(t==="queue"){return{write:E,read:k,tick:{then:function(e){return C(e)}}}}return undefined});var Je=e("g",function(e){return c(e).$hostElement$})}}});