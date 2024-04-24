!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAppCode=exports.getBabelHelperAndDepsCode=exports.getBabelCodeByName=void 0;const tslib_1=require("tslib"),tools_1=require("../../../utils/tools"),transwxmltojs_1=require("../trans/transwxmltojs"),babel_helper_1=require("../../../utils/babel_helper"),handleError_1=require("../utils/handleerror/handleError"),getjsfile_1=tslib_1.__importDefault(require("./getjsfile")),concat=require("licia/concat"),isEmpty=require("licia/isEmpty"),arrToMap=require("licia/arrToMap"),unique=require("licia/unique"),TaskManager=require("../utils/taskmanager"),getMainPkgSortedJSFiles=require("./getmainpkgsortedjsfiles"),appserviceGetwxappcode=require("./getwxappcode"),AppServiceConfig=require("./appservice.config");async function getAppServiceBuildCore(e,t){const r=[];getInitJS(r);const n=await getWXMLJS(e,t,r),{hasAppJS:a,pageFiles:o,componentFiles:i,functionalPageFiles:s,otherFiles:p,allFiles:l}=await getMainPkgSortedJSFiles(e,t),{otherJsFiles:c,jsPagesFiles:u,components:_}=await t.getAllSortedJSFiles(),g=c.concat(u).concat(_);a&&g.push("app.js"),await getJSCodeBuild(e,t,r,a,o,i,s,p,l,g),await getAppCode(e,t,r,n,i,o);return r.join("\n")}async function getAppService(e,t){try{return{success:!0,content:await getAppServiceBuildCore(e,t)}}catch(r){return{success:!1,content:await(0,handleError_1.handleError)(e,t,r)}}}function getInitJS(e){e.push('\n    var __wxAppData = __wxAppData || {};\n    var __wxRoute = __wxRoute || "";\n    var __wxRouteBegin = __wxRouteBegin || "";\n    var __wxAppCode__ = __wxAppCode__ || {};\n    var global = global || {};\n    var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};\n    var __wxAppCurrentFile__=__wxAppCurrentFile__||"";\n    var Component = Component || function(){};\n    var definePlugin = definePlugin || function(){};\n    var requirePlugin = requirePlugin || function(){};\n    var Behavior = Behavior || function(){};\n    var __vd_version_info__ = __vd_version_info__ || {};\n  ')}async function getWXMLJS(e,t,r){const n=await(0,transwxmltojs_1.transWXMLToJS)(e,t,{app:!0});return r.push(n.code),n}async function getJSCodeBuild(e,t,r,n,a,o,i,s,p,l){const c=p.map(e=>e+".js"),u=await Promise.all(l.map(r=>{const n=(0,getjsfile_1.default)(e,t,r,{});return new Promise(e=>{n.then(t=>{e(Object.assign(Object.assign({},t),{scriptLink:r}))})})}));let _=[],g=[u.map(e=>(e.helpers&&(_=concat(_,e.helpers)),c.indexOf(e.scriptLink)>-1?e.code:"")).filter(e=>!!e).join("\n")];const d=await getBabelHelperAndDepsCode(e,_);g=concat(Array.from(d.values()),g),r.push(g.join("\n")),n&&r.push("\n      try {\n        require(\"app.js\")\n      } catch (error) {\n        !error.from && console.error('app.js错误:\\n',error)\n        throw error\n      }")}exports.default=getAppService;let babelRoot="";async function getBabelCodeByName(e,t){babelRoot||(babelRoot=(0,babel_helper_1.getBabelOutputPath)(e));return wrapFN(t+".js",await(0,babel_helper_1.getHelperContent)(t,babelRoot))}function wrapFN(e,t){return`define("${(0,tools_1.escapeQuot)(e,'"')}", function(require, module, exports, ${AppServiceConfig.noBrowser}){ ${t} \n})`}async function getBabelHelperAndDepsCode(e,t){if(!isEmpty(t)){t=unique(t);const r=(0,babel_helper_1.getBabelOutputPath)(e),n=(0,babel_helper_1.getHelperDeps)(arrToMap(t),r),a=new Map;for(const t of Object.keys(n)){const r=await getBabelCodeByName(e,t);a.set(t,r)}return a}return new Map}async function getAppCode(e,t,r,n,a,o){const i=new TaskManager;for(const s of a.concat(o)){const a=async function(){r.push(await appserviceGetwxappcode.getWxAppCodeOfPage(e,t,s,n.name))};i.addTask(a)}await i.runAllAsync()}exports.getBabelCodeByName=getBabelCodeByName,exports.getBabelHelperAndDepsCode=getBabelHelperAndDepsCode,exports.getAppCode=getAppCode;
}(require("licia/lazyImport")(require), require)