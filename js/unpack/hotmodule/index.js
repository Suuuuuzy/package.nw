"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("fs"),o=require("path"),r=require('../../../core.wxvpkg/e45a1736f0cff12ccd223e3f4dd75808.js'),n=require('../../../core.wxvpkg/80fe453c1ce7cbd1ad8861357cd87ff7.js'),i=require('../../../core.wxvpkg/87340deef308fb62efd7eb7a7e63e98d.js'),s=require('../../../core.wxvpkg/f55caa53aa348f57ae517eeaf9ebd4e4.js'),t=require('../../../core.wxvpkg/37906d351f554f2bc9ae51c0dc7cafd5.js'),c=require("zlib"),l=require("rimraf"),u=require("mkdir-p"),a=require('../../../core.wxvpkg/b7691e109ad844af265d9385e5205802.js'),d=o.join(i.WeappVendor,"hot-module");u.sync(d);const m=o.join(n.vendorPath,"hot-module","hot-module-config.json"),p=JSON.parse(e.readFileSync(m).toString());function g(e){return new Promise((o,r)=>{c.gunzip(e,(e,n)=>{e?r(e):o(n)})})}const f={0:"stable",1:"release",2:"nightly"}[global.appVersionType]||"nightly",v={require(r,n={forceRequireLocal:!1}){const i=p.modules[r].localModRequirePath,s=o.posix.join(`${d}/${r}${p.modules[r].useWxvPkgModule?".wxvpkg":""}`);return global.appConfig.isDev||n.forceRequireLocal||!p.modules[r].updateRemote||!e.existsSync(s)?(n.forceRequireLocal&&console.warn("[hot-module] requireing local mod: "+r),require(i)):(console.warn(`[hot-module] requireing remote mod: ${r}, path: ${s}`),require(s))},getRemoteConfigJSON:async()=>new Promise((e,o)=>{t({url:`http://dldir1.qq.com/WechatWebDev/vendor/hot-module/${f}.json?t=${Date.now()}`},(r,n,i)=>{r?o(r):e(JSON.parse(i))})}),downloadGzipMod(r,n,i){const s=`http://dldir1.qq.com/WechatWebDev/vendor/hot-module/${r}_${n}.wxvpkg.gzip?t=${Date.now()}`,c=o.posix.join(d,`${r}_${i.modules[r].version}.wxvpkg`);return new Promise((o,r)=>{const n=e.createWriteStream(c,{mode:511});t({url:s},e=>{e&&r(e)}).pipe(n),n.on("error",e=>{r(e)}),n.on("close",()=>{o(c)})})},matchRange(e,o){var r,n;const i=(null===(n=null===(r=a.getState().project)||void 0===r?void 0:r.current)||void 0===n?void 0:n.appid)||"";return!!i&&("touristappid"===i||Array.isArray(o.modules[e].whiteList)&&o.modules[e].whiteList.includes(i)?(console.warn("[hot-module] 命中白名单逻辑，下载 "+e),!0):parseInt(i.substr(-8),16)/4294967295<o.modules[e].scale&&(console.warn(`[hot-module] ${i} 命中灰度比例逻辑，下载 ${e}，此模块灰度比例为 ${100*o.modules[e].scale}%`),!0))},init:async()=>{const n=Object.keys(p.modules);for(const r of n)if(p.modules[r].useWxvPkgModule){const n=o.posix.join(d,r+"_tmp.wxvpkg");if(e.existsSync(n)){const i=o.posix.join(d,r+".wxvpkg");l.sync(i),e.renameSync(n,i)}}else{const n=o.posix.join(d,r+"_tmp");if(e.existsSync(n)){const i=o.posix.join(d,r);l.sync(i),e.renameSync(n,i)}}try{const i=await v.getRemoteConfigJSON();console.log(`[hot-module] remoteConfig: ${JSON.stringify(i)} ${JSON.stringify(p)}`);for(const t of n){const n=i.modules[t],c=p.modules[t];if(!n||!c.version)continue;const u=n.devtoolsVersion||{},a=u[process.versions.nw]||u.all,f=!a||(0,r.compareVersion)(global.appVersion,a)>=0,h=c.version&&1===(0,r.compareVersion)(n.version,c.version);if(f&&h&&v.matchRange(t,i))try{const r=await v.downloadGzipMod(t,n.version,i),u=await g(e.readFileSync(r));if(c.useWxvPkgModule)e.writeFileSync(o.posix.join(d,t+"_tmp.wxvpkg"),u);else{const e=o.join(d,t+"_tmp");l.sync(e),s.default.unpack(u,e)}l.sync(r),c.version=n.version,c.updateRemote=!0;try{e.writeFileSync(m,JSON.stringify(p))}catch(e){console.error("[hot-module] save new local-module-config.json failed, detail: "+JSON.stringify(e))}}catch(e){console.error(`[hot-module] download ${t} error or unpack error`,e)}}}catch(e){console.error("[hot-module] get remote json error",e)}}};exports.default=v;