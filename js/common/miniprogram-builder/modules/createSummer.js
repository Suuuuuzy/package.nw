!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSummerCompiler=exports.summerCompilerFactory=exports.SummerCompilerFactory=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),lodash_1=tslib_1.__importDefault(require("lodash")),config_1=require("../config/config"),ciProject_1=require("../project/ciProject"),tools_1=require("../utils/tools"),locales_1=tslib_1.__importDefault(require("../utils/locales/locales")),packOptionsHelper_1=tslib_1.__importDefault(require("../utils/packOptionsHelper")),summerCompiler_1=require("./corecompiler/summerCompiler"),WeappCompileCache="";class SummerCompilerFactory{constructor(){this.summerCompiler=null,this.project=null,this.createPromise=null,this.releaseCbs=[]}async getSummerCompiler(e){return this.shouldCreate(e)?(this.releaseLastCompiler(),this.project=e,this.summerCompiler=null,this.createPromise=this.createSummerCompiler(e),this.summerCompiler=await this.createPromise,this.summerCompiler.setLocale(locales_1.default.getLocale())):(this.summerCompiler||(this.summerCompiler=await this.createPromise),this.summerCompiler.updateOptions(this.getSummerOptions(e))),this.summerCompiler}shouldCreate(e){return!this.project||(this.project.projectPath!==e.projectPath||!lodash_1.default.isEqual(this.project.packOptions,e.packOptions))}async releaseLastCompiler(){const{releaseCbs:e}=this;if(this.releaseCbs=[],this.createPromise)try{(await this.createPromise).destroy(),e.forEach(e=>{try{e()}catch(e){console.error("[SummerCompilerFactory] releaseLastCompiler release cb execute error: "+e)}})}catch(e){console.error("[SummerCompilerFactory] releaseLastCompiler error: "+e)}}ensureCacheDir(){const e=path_1.default.join("",(0,tools_1.generateMD5)(this.project.projectPath+"|summer"));return(0,tools_1.mkdirSync)(e),e}async createSummerCompiler(e){const r=new ciProject_1.CIProject(e);await r.ready();const t=this.ensureCacheDir(),i=this.getSummerOptions(e),o=new summerCompiler_1.SummerCompiler(r,t,i,{showBuildLog:(e,r,t)=>{}});return await o.ready(),o}getFileFilter(e){packOptionsHelper_1.default.updateState(e);return r=>{const t=r.startsWith(e.miniprogramRoot)&&packOptionsHelper_1.default.isIgnoredByRules(r.slice(e.miniprogramRoot.length)),i=e.pluginRoot&&r.startsWith(e.pluginRoot)&&packOptionsHelper_1.default.isIgnoredByRules(r.slice(e.pluginRoot.length));return!t&&!i}}getSummerOptions(e){const r=new Set;r.add("javascript"),r.add(["es6module",{disableUseStrict:e.setting.disableUseStrict}]),(e.setting.enhance||e.setting.es6)&&r.add(["enhance",{disableUseStrict:e.setting.disableUseStrict}]),(e.setting.minifyWXSS||e.setting.postcss)&&r.add("wxss"),e.setting.minified&&(r.add("terser"),r.add("wxss")),e.setting.useCompilerPlugins&&e.setting.useCompilerPlugins.forEach(e=>{if("string"==typeof e)r.add(e);else{if(!Array.isArray(e))throw new Error("invalid useCompilerPlugins options: "+JSON.stringify(e));if("string"!=typeof e[0]||void 0===e[1])throw new Error("invalid useCompilerPlugins options: "+JSON.stringify(e));r.add(e)}});const t={[config_1.compileTypeConfig.weapp]:"miniProgram",[config_1.compileTypeConfig.plugin]:"miniProgramPlugin",[config_1.compileTypeConfig.game]:"miniGame",[config_1.compileTypeConfig.gamePlugin]:"miniGamePlugin"}[e.compileType];return{appid:e.appid,attr:e.attr,projectArchitecture:e.projectArchitecture,miniprogramRoot:e.miniprogramRoot,pluginRoot:e.pluginRoot,compileType:t,summerPlugins:Array.from(r),babelSetting:e.setting.babelSetting}}}exports.SummerCompilerFactory=SummerCompilerFactory,exports.summerCompilerFactory=new SummerCompilerFactory,exports.getSummerCompiler=exports.summerCompilerFactory.getSummerCompiler.bind(exports.summerCompilerFactory);
}(require("licia/lazyImport")(require), require)