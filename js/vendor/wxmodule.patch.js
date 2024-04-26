if(typeof globalThis!=="object"){var globalThis={}}var __webnode__;(function(){"use strict";var e={};(function(){e.d=function(r,n){for(var i in n){if(e.o(n,i)&&!e.o(r,i)){Object.defineProperty(r,i,{enumerable:true,get:n[i]})}}}})();(function(){e.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}})();(function(){e.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();var r={};e.r(r);e.d(r,{define:function(){return c},require:function(){return C},requireOnce:function(){return O}});var n=globalThis;var i=1;var t=2;var o={};var a={};var u=1;if(globalThis.wxModuleVersion){var f=~~globalThis.wxModuleVersion;globalThis.enableWxModule=u>f}else{globalThis.wxModuleVersion=u;globalThis.enableWxModule=true}var s=function(){return{__wxRoute:n.__wxRoute,__wxAppCurrentFile__:n.__wxAppCurrentFile__,__wxRouteBegin:n.__wxRouteBegin}};var l=function(e){n.__wxRoute=e.__wxRoute;n.__wxAppCurrentFile__=e.__wxAppCurrentFile__;n.__wxRouteBegin=e.__wxRouteBegin};function c(e,r){var n;if((n=o[e])!==null&&n!==void 0&&n.factory){var t=o[e];var a=r.toString();if(!t.factoryString){t.factoryString=t.factory.toString()}if(a!==t.factoryString){o[e]={status:i,factory:r,factoryString:a}}}else{o[e]={status:i,factory:r}}}var _=function(e){var r=e.match(/(.*)\/([^/]+)?$/);return!r||!r[1]?"./":r[1]};var v=function(e){if(!e){return undefined}if(m.subPackages){for(var r=0,n=m.subPackages.length;r<n;r++){if(e.indexOf(m.subPackages[r].root)===0){return m.subPackages[r]}}}return undefined};var g=function(e){var r=[];var n=e.split("/");for(var i=0,t=n.length;i<t;++i){var o=n[i];if(o===""||o==="."){continue}if(o===".."){if(r.length===0){r=null;break}r.pop()}else if(i+1<t&&n[i+1]===".."){i++}else{r.push(o)}}return r};var d=function(e){var r=g(e+"/index.js").join("/");if(o[r])return r;r=g(e).join("/");if(!/\.js$/.test(r))r+=".js";if(o[r])return r;return""};var p=function(e,r,n){var i=e;if(!/\.js$/.test(i))i+=".js";if(typeof i==="string"&&o[i])return i;var t=g(r);if(!t)throw new Error("can not find module : "+n);var a=e.substring(t.join("/").length);var u;var f;while(t.length){f=t.join("/")+"/miniprogram_npm"+a;u=d(f);if(u)break;t.pop()}if(!u){a=a[0]==="/"?a:"/"+a;f="miniprogram_npm"+a;u=d(f)}return u||e};var b=["wx0354ba48aadc0ab2","wxfa43a4a7041a84de"];function w(e,r){var n=e==="__APP__";if(e.slice(-1)!=="/")e+="/";if(m.platform==="devtools"){WeixinJSBridge.invoke("injectSubPackages",{subPackages:[e]},r)}else{__appServiceSDK__.loadSubpackage({name:e,success(){var i=m.subPackages.find((function(r){return r.root===e}));var t=Object.keys(i.plugins||{}).map((function(e){var r=i.plugins[e].provider;var n="__plugin__/"+r;return{plugin_id:r,prefix_path:b.includes(r)?null:n}}));__subContextEngine__.injectEntryFile(n?"":e,t);r()}})}}var x=function(e){var r;var n=(r=m)===null||r===void 0?void 0:r.subPackages;if(!n)n=[];for(var i=0;i<n.length;++i){var t=n[i].root||"";if(t&&t.slice(-1)!=="/"){t+="/"}if(e.slice(0,t.length)===t){return t}}return"__APP__"};var y=false;var h=[];var j=function(e){Object.keys(e).forEach((function(r){var n=r;if(r.endsWith("*")){n=n.slice(0,-1)}var i=e[r];if(e[r].endsWith("*")){i=i.slice(0,-1)}h.push({key:n,value:i})}))};var m=Object.assign({},__wxConfig);if(typeof wxConfigClone==="object"){m=Object.assign(m,wxConfigClone);wxConfigClone=undefined}if(typeof __wxConfig.onReady==="function"){__wxConfig.onReady((function(){m=Object.assign({},__wxConfig);if(typeof m.resolveAlias==="object"){y=!!Object.keys(m.resolveAlias).length;y&&j(m.resolveAlias)}}))}else{if(typeof m.resolveAlias==="object"){y=!!Object.keys(m.resolveAlias).length;y&&j(m.resolveAlias)}}var k=function(e){var r={key:""};var n=false;h.forEach((function(i){if(e.startsWith(i.key)&&r.key.length<i.key.length){r=i;n=true}}));if(!n){return}var i=e.replace(r.key,r.value);if(i[0]==="/"){i=i.slice(1)}return i};var P=function(e){var r=_(e);var n=function(n,i){var t=r;if(typeof n!=="string"){throw new Error("require args must be a string")}var o;if(n==="/__wx__/private-api"){o=g(n).join("/")}else{if(y){o=k(n)}if(o!==undefined){t="";o=g(o).join("/")}else{o=g(t+"/"+n).join("/")}}if(!o)throw new Error(`can not find module : ${o}, require args is ${n}`);try{var a=p(o,t,n);var u=function(e){return g(e)[0]==="functional-pages"};if(u(a)!==u(e)){Reporter.thirdErrorReport({error:new Error('should not require across "functional-pages" folder'),extend:'at require("'+n+'") in '+e})}if(m.platform==="devtools"&&m.subPackages&&i===undefined){var f=v(a);var s=v(e);if(f&&f!==s){console.warn(`Requires "${n}" from "${e}" without a callback may fail in production, since they are in different subPackages`)}}return C(a,undefined,i,n)}catch(e){throw e}};n.async=function(e){return new Promise((function(r){return n(e,r)}))};return n};function C(e,r,n,u=""){if(typeof r==="undefined"){r=true}if(typeof e!=="string"){throw new Error("require args must be a string")}var f=o[e];if(!f){var c=e.indexOf("/")===-1?e+"/index.js":e;c="miniprogram_npm/"+c;if(!/\.js$/.test(c))c+=".js";f=o[c]}if(!e.endsWith(".js"))e+=".js";if(!f&&m.platform!=="devtools"&&typeof __subContextEngine__!=="undefined"){var _="/"+e.substr(0,e.length-3)+".appservice.js";var v=s();var g=__subContextEngine__.loadJsFiles([_],null,{waitResult:true});l(v);f=o[e];g&&g(!!f)}if(typeof n==="function"){if(f){setTimeout((function(){return n(C(e))}))}else{var d=x(e);var p=s();w(d,(function(){n(C(e));l(p)}))}return}if(!f){var b=`module '${e}' is not defined, require args is '${u===""?e:u}'`;throw new Error(b)}var y={exports:{}};var h=f.factory;if(!r||a[e]){delete f.exports;f.status=i;a[e]=true;h&&h(P(e),y,y.exports);return y.exports}if(f.status===i){f.exports=y.exports;f.status=t;var j;try{h&&(j=h(P(e),y,y.exports))}catch(e){f.status=i;throw e}f.exports=y.exports!==undefined?y.exports:j}return f.exports}function O(e){return C(e,false)};if(globalThis.enableWxModule!==false){n.__modules__=o};__webnode__=r})();if(globalThis.enableWxModule!==false){var defineMiniProgramFile=define=__webnode__.define;var requireMiniProgramFile=require=__webnode__.require;requireOnce=__webnode__.requireOnce}