!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateSubPkgAppInfoJson=exports.packAllPackagesToWxapkg=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),pack_1=tslib_1.__importDefault(require("../../../utils/wxapkg/pack")),tools_1=require("../../../utils/tools"),updatecontactandlaunch_1=require("./contactandlaunch/updatecontactandlaunch");var IMiniappPkgType;async function packAllPackagesToWxapkg(e,t,a){const n=[],i=t.subpackages||t.subPackages,o=[];if(i){const p="__APP__",s=`${a}/${(0,tools_1.generateMD5)(p)}.wxapkg`,l=path_1.default.join(e,s),u=path_1.default.join(e,"app"),g=await(0,pack_1.default)(".",l,u,i.map(e=>path_1.default.join(".",e.root,"/**/*")));o.push(g),n.push({name:p,filePath:s,pkgType:4,md5:(0,tools_1.generateMD5)(g),size:g.byteLength,independent:!1,page_count:t.pages.length,alias:[],wxacode_lib_info_list:[],without_lib_md5:"",separated_plugin_list:[],md5_list:[],widget_list:[]});for(const t of i){const i=processSubpkgRootPath(t.root),p=`${a}/${(0,tools_1.generateMD5)(i)}.wxapkg`,s=path_1.default.join(e,p),l=await(0,pack_1.default)(t.root,s,u,[]);o.push(l),n.push({name:i,filePath:p,pkgType:4,md5:(0,tools_1.generateMD5)(l),size:l.byteLength,independent:!1,page_count:t.pages.length,alias:[],wxacode_lib_info_list:[],without_lib_md5:"",separated_plugin_list:[],md5_list:[],widget_list:[]})}}else{const i="__APP__",o=`${a}/${(0,tools_1.generateMD5)(i)}.wxapkg`,p=path_1.default.join(e,o),s=path_1.default.join(e,"app"),l=await(0,pack_1.default)(".",p,s);n.push({name:i,filePath:o,pkgType:0,md5:(0,tools_1.generateMD5)(l),size:l.byteLength,independent:!1,page_count:t.pages.length,alias:[],wxacode_lib_info_list:[],without_lib_md5:"",separated_plugin_list:[],md5_list:[],widget_list:[]})}const p=Buffer.concat(o);return{wholePkgMd5:(0,tools_1.generateMD5)(p),moduleListConfig:n}}async function generateSubPkgAppInfoJson(e){const{miniModuleId:t,nickName:a,brandIconURL:n,pageOrientation:i,subpkgs:o,buildVersion:p,contact:s,cpfWxaAttrSyncResponse:l}=e,u=p||1,g=await(0,updatecontactandlaunch_1.updateLaunchBase64)();return{miniModuleId:t,nickname:a,device_orientation:i||"portrait",appVersion:u,pkgInfos:o.map(e=>{var a,n;return{miniModuleId:t,moduleName:e.name,pkgType:e.type,pkgMd5:e.md5,appVersion:u,versionType:e.versionType===IMiniappPkgType.Release?0:1,assetPath:e.file,signVersion:null!==(a=e.signVersion)&&void 0!==a?a:0,signFilePath:null!==(n=e.signFile)&&void 0!==n?n:e.file+".sign"}}),contactBase64:s,launchBase64:g,cpfWxaAttrSyncResponse:l,version:2,miniappPkgType:IMiniappPkgType.Release}}function processSubpkgRootPath(e){return e.startsWith("/")||(e="/"+e),e.endsWith("/")||(e+="/"),e}!function(e){e.Release="Release",e.Debug="Debug",e.HotReload="HotReload"}(IMiniappPkgType||(IMiniappPkgType={})),exports.packAllPackagesToWxapkg=packAllPackagesToWxapkg,exports.generateSubPkgAppInfoJson=generateSubPkgAppInfoJson;
}(require("licia/lazyImport")(require), require)