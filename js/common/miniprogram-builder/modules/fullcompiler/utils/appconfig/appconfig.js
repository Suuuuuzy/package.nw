!function(require, directRequire){
"use strict";const tslib_1=require("tslib"),theme_1=require("../theme"),tools=tslib_1.__importStar(require("../tools")),pagejson_1=tslib_1.__importDefault(require("./pagejson")),appjson_1=tslib_1.__importDefault(require("./appjson")),path=require("path"),_=require("lodash");async function mergeThemeJSON(e){var a;const{project:t,isDarkMode:n,themeLocation:i,themeJSON:o,appConfig:s}=e,r=path.join(t.projectPath,t.miniprogramRoot||""),{windowConfigRules:g,tabbarRules:c,tabbarListItemRules:p}=(0,theme_1.checkThemeRules)(r);(0,theme_1.checkVariables)({isDarkMode:n,themeLocation:i,themeJSON:o,filePath:"app.json or ext.json",windowConfig:s.global.window,rules:g,keyPrefix:'["window"]',isPlugin:!1});for(const e in s.page){const a=e.replace(/\.html$/,"");(0,theme_1.checkVariables)({isDarkMode:n,themeLocation:i,themeJSON:o,filePath:a+".json",windowConfig:s.page[e].window||{},rules:g,keyPrefix:"",isPlugin:!1})}if(s.tabBar){(0,theme_1.checkVariables)({isDarkMode:n,themeLocation:i,themeJSON:o,filePath:"app.json or ext.json",windowConfig:s.tabBar||{},rules:c,keyPrefix:'["tabBar"]',isPlugin:!1});for(let e=0;e<(null===(a=s.tabBar)||void 0===a?void 0:a.list.length);e++)(0,theme_1.checkVariables)({isDarkMode:n,themeLocation:i,themeJSON:o,filePath:"app.json or ext.json",windowConfig:s.tabBar.list[e],rules:p,keyPrefix:`["tabBar"]["list"][${e}]`,isPlugin:!1})}}function getAppConfigJSON(e,a){return{pages:e.pages||[],resizable:!!e.resizable,subPackages:e.subPackages,debug:!!e.debug,widgets:e.widgets||[],customClose:!!e.customClose,workers:e.workers||"",cloud:!!e.cloud,global:{window:Object.assign(Object.assign({},(0,theme_1.getDefaultWindowConfig)(e.darkmode&&a)),e.window)},page:{},networkTimeout:Object.assign({request:6e4,uploadFile:6e4,connectSocket:6e4,downloadFile:6e4},e.networkTimeout),ext:e.ext||{},extAppid:e.extAppid||"",plugins:e.plugins||{},mainPlugins:Object.assign({},e.plugins),preloadRule:e.preloadRule,permission:e.permission,requiredBackgroundModes:e.requiredBackgroundModes,functionalPages:e.functionalPages,style:e.style,useExtendedLib:e.useExtendedLib||{},supportedMaterials:e.supportedMaterials||[],usingShopPlugin:e.usingShopPlugin||void 0,embeddedAppIdList:e.embeddedAppIdList,halfPage:e.halfPage,resolveAlias:e.resolveAlias,renderer:e.renderer,enablePassiveEvent:e.enablePassiveEvent,debugOptions:e.debugOptions,__warning__:e.__warning__||""}}async function checkAppConfig(e,a,t){const n=await(0,appjson_1.default)(e,a),i=getAppConfigJSON(n,t),o=e=>{e.__warning__&&(i.__warning__&&(i.__warning__+="、"),i.__warning__+=""+e.__warning__)},{pages:s}=i;i.entryPagePath=n.entryPagePath?n.entryPagePath+".html":s[0]+".html";for(const t of s){const n=await(0,pagejson_1.default)(e,a,""+t)||{};o(n);const{singlePage:s}=n,r=tslib_1.__rest(n,["singlePage"]);i.page[t+".html"]={window:r||{},singlePage:s,renderer:n.renderer}}if(i.subPackages){let t={};for(const n of i.subPackages){for(const t of n.pages){const s=path.posix.join(n.root,t),r=await(0,pagejson_1.default)(e,a,""+s)||{};o(r);const{singlePage:g}=r,c=tslib_1.__rest(r,["singlePage"]);i.page[s+".html"]={window:c||{},singlePage:g,renderer:r.renderer}}t=Object.assign(Object.assign({},t),n.plugins)}i.plugins=Object.assign(Object.assign({},i.plugins),t)}i.page=Object.assign({},i.page);const r=Object.assign({},n.tabBar),g=[].concat(r.list||[]),c=[];for(const e of g){const a=Object.assign({},e);a.pagePath+=".html",c.push(a)}r.list=c,i.tabBar=r,n.darkmode&&(i.supportDarkmode=!0);let p={};const{themeLocation:l}=n;return void 0!==l&&""!==l.trim().replace(/^\.\//,"")&&(p=await a.checkThemeJSON({themeLocation:l})),await mergeThemeJSON({project:e,summerCompiler:a,themeJSON:p,themeLocation:l,isDarkMode:!(!n.darkmode||!t),appConfig:i}),i}let appConfigCache=null;async function checkLightAppConfig(e,a,t=!0){let n;return appConfigCache?n=appConfigCache:(n=await checkAppConfig(e,a,!1),appConfigCache=n),t?_.cloneDeep(n):n}let appDarkConfigCache=null;async function checkDarkmodeAppConfig(e,a,t=!0){let n;return appDarkConfigCache?n=appDarkConfigCache:(n=await checkAppConfig(e,a,!0),appDarkConfigCache=n),t?_.cloneDeep(n):n}const getAppConfig=async(e,a,t=!0)=>{const n=await checkLightAppConfig(e,a,t);return t?_.cloneDeep(n):n},checkIsInSubPackage=async(e,a,t)=>{const n=await getAppConfig(e,a,!1);return tools.checkIsInSubPackage(n,t)},DealSubPackages=e=>{if(Array.isArray(e.subPackages||e.subpackages)&&Array.isArray(e.pages)){const a=_.cloneDeep(e);return(a.subPackages||a.subpackages).forEach(e=>{const t=[];e.pages.forEach(n=>{const i=path.join(e.root,n);t.push(i),a.pages.includes(i)||a.pages.push(i)}),e.pages=t}),a}return e};module.exports={checkLightAppConfig:checkLightAppConfig,checkDarkmodeAppConfig:checkDarkmodeAppConfig,getAppConfig:getAppConfig,checkIsInSubPackage:checkIsInSubPackage,DealSubPackages:DealSubPackages};
}(require("licia/lazyImport")(require), require)