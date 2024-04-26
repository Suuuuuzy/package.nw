!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.runSummerPluginHook=void 0;const customError_1=require("../../../utils/customError"),summerCPProject_1=require("../../../project/summerCPProject"),index_1=require("../../precompiler/index"),initPlugin_1=require("./initPlugin");class PluginContainer{constructor(){this.initedPlugins=new Map}getPluginInstance(r,e,t){let n=this.initedPlugins.get(r);return n||(n=(0,initPlugin_1.initPlugin)(r,e,t),this.initedPlugins.set(r,n)),n}clear(){this.initedPlugins.clear()}}const pluginContainer=new PluginContainer;async function runSummerPluginHook(r){var e;if("clear"===r.command)return pluginContainer.clear(),{};const{plugin:t,projectInfo:n,pluginOption:i,method:o,args:u}=r,l=new summerCPProject_1.SummerCPProject(n);await l.ready();const{targetPlatform:s,targetPlatformDefines:a}=n,c=new index_1.PreCompiler(l),m=await c.getPreCompileProject({targetPlatform:s,targetPlatformDefines:a,runEnv:"worker cp"}),P=pluginContainer.getPluginInstance(t,m,i);if("runMethod"===r.command){const r=null===(e=P.workerMethods)||void 0===e?void 0:e[o];if(!r||"function"!=typeof r)throw new Error(`the ${r} is not a workerMethod of plugin(${t})`);try{return{result:await r(...u)}}catch(r){return{error:r instanceof customError_1.CustomError?r.toJSON():r}}}return{}}exports.runSummerPluginHook=runSummerPluginHook;
}(require("licia/lazyImport")(require), require)