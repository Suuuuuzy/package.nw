!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),handleerror_1=require("./utils/handleerror/handleerror");async function default_1(e,t){try{return{success:!0,content:await getAllRawFilesCore(e,t)}}catch(s){return{success:!1,errMsg:await(0,handleerror_1.handleError)(e,t,s),content:new Map}}}async function getAllRawFilesCore(e,t){let s=[];const n=await t.getMPFileInfo(),r=await t.getCompAndPagesOfConf();return s=Object.keys(n).filter(e=>{const t=path_1.default.extname(e);return(".json"!==t||!r.pages[e.slice(0,e.length-t.length)]&&!r.comps[e.slice(0,e.length-t.length)])&&(!["app.json","project.config.json","project.private.config.json","sitemap.json","ext.json"].includes(e)&&!(e.endsWith(".wxml")||e.endsWith(".wxss")||e.endsWith(".js")||e.endsWith(".ts")||e.endsWith(".scss")||e.endsWith(".sass")||e.endsWith(".scss")))}),s}exports.default=default_1;
}(require("licia/lazyImport")(require), require)