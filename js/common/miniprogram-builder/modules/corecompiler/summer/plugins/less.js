"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.importWxssCssReg=exports.importWxssReg=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),customError_1=require("../../../../utils/customError"),less=()=>require("less");function default_1(s,e){return{name:"summer-less",resolveExt:{wxss:"less"},async load(r,t){var o;if(t.endsWith(".less")){const r=path_1.default.relative(s.projectPath,t);let i=s.getFile("",r).toString();const a=[];i=i.replace(exports.importWxssReg,(s,e,r)=>(a.push(r),s.replace(r,r+"?css")));try{const r=await require("less").render(i,{sourceMap:{outputSourceFiles:!0},paths:this.rootPath?[this.rootPath]:[],filename:t,globalVars:null!==(o=null==e?void 0:e.globalVars)&&void 0!==o?o:{}}),l=r.css.replace(exports.importWxssCssReg,(s,e,r)=>{const t=r.slice(0,-4);return a.includes(t)?s.replace(r,t):s});if(r.imports.length)for(const s of r.imports)this.addWatchFile(s);let p=void 0;return r.map&&(p=JSON.parse(r.map),p.sources=p.sources.map(e=>path_1.default.posix.relative(s.projectPath,e))),{sourceCode:l,inputMap:p}}catch(s){throw(0,customError_1.makeCustomError)(s,customError_1.CustomErrors.SUMMER_PLUGIN_CODE_ERR)}}}}}exports.importWxssReg=/(?:^|\s)?(?:@import)(?:\s*)?(["'])([^"']+.wxss)\1(?:\s*);/g,exports.importWxssCssReg=/(?:^|\s)?(?:@import)(?:\s*)?(["'])([^"']+.wxss\?css)\1(?:\s*);/g,exports.default=default_1;