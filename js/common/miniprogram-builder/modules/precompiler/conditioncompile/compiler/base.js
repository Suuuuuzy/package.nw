!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseConditionCompiler=void 0;const define_1=require("../define");class BaseConditionCompiler{constructor({targetPlatform:e,targetPlatformDefines:t,type:i,verbose:r,tripleSlash:o}){this.targetPlatform="mini-wechat",this.targetPlatformDefines={},this.type="ts",this.verbose=!1,this.tripleSlash=!1,e||console.error("platform is required"),this.targetPlatform=e,this.targetPlatformDefines=t,this.type=i,this.verbose=r,this.tripleSlash=o}compile(e,t){const i=new define_1.MacroDefine({targetPlatform:this.targetPlatform,filePath:e});return this.doCompile({filePath:e,content:t,macroDefine:i})}}exports.BaseConditionCompiler=BaseConditionCompiler;
}(require("licia/lazyImport")(require), require)