!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BaseCoreCompiler=void 0;const tslib_1=require("tslib"),fs_1=tslib_1.__importDefault(require("fs")),path_1=tslib_1.__importDefault(require("path")),lodash_1=tslib_1.__importDefault(require("lodash")),locales_1=tslib_1.__importDefault(require("../../utils/locales/locales")),index_1=require("./original/index"),singletontask_1=require("../../utils/singletontask");class BaseCoreCompiler{constructor(t){this.isSummer=!1,this.project=t}get projectPath(){return this.project.projectPath}get srcPath(){return this.project.srcPath}get pluginSrcPath(){return this.project.pluginSrcPath}async ready(){return this._checkReadyTask||(this._checkReadyTask=new singletontask_1.SingletonTask(this.init.bind(this))),await this._checkReadyTask.getResult(!0)}watch(t){this.project.event.on("fileChange",t)}unwatch(t){this.project.event.off("fileChange",t)}compileJS(t){throw new Error("no implement compileJS")}compile(t){throw new Error("no implement compile")}clearCache(){throw new Error("no implement clearCache")}async uglifyFileNames(t,e,i){throw new Error("no implement uglifyFileNames")}async packNpm(t){var e;const i=(null===(e=this.project)||void 0===e?void 0:e.setting)||{};if(!i.packNpmManually)return await(0,index_1.packNpm)(this.project,t);if(!i.packNpmRelationList)throw new Error("project.config.json setting.packNpmRelationList 必须存在");const{projectPath:r}=this.project;for(const t of i.packNpmRelationList){if(!t.packageJsonPath||"string"!=typeof t.packageJsonPath||!t.packageJsonPath.endsWith("package.json"))throw new Error(locales_1.default.config.PACKAGE_JSON_PATH_IN_VALID.format(t.packageJsonPath));const e=path_1.default.join(r,t.packageJsonPath);if(!fs_1.default.existsSync(e))throw new Error(locales_1.default.config.NOT_FOUND.format(e));const i=path_1.default.join(r,t.packageJsonPath,"../node_modules");if(!fs_1.default.existsSync(i))throw new Error(locales_1.default.config.RELATED_NODE_MODULES_NOT_FOUND.format(e,path_1.default.join(e,"..")));const o=path_1.default.join(r,t.miniprogramNpmDistDir);if(!fs_1.default.existsSync(o))throw new Error(locales_1.default.config.NOT_FOUND.format(o))}const o=lodash_1.default.cloneDeep(i.packNpmRelationList);return o.forEach(t=>{t.packageJsonPath=path_1.default.join(r,t.packageJsonPath),t.miniprogramNpmDistDir=path_1.default.join(r,t.miniprogramNpmDistDir)}),await this.packNpmManually(o)}async packNpmManually(t){const e={miniProgramPackNum:0,otherNpmPackNum:0,warnList:[]};for(const i of t){const t=await(0,index_1.packNpmManually)(i);e.miniProgramPackNum+=t.miniProgramPackNum,e.otherNpmPackNum+=t.otherNpmPackNum,e.warnList=e.warnList.concat(t.warnList)}return e.warnList}stat(t="",e=""){return this.project.stat(t,e)}exists(t="",e=""){return this.project.exists(t,e)}excludeRoot(t=[],e=""){return e?t.map(t=>path_1.default.posix.relative(e,t)):t}excludeKeyRoot(t,e=""){if(!e)return t;const i={};let r="";for(const o in t)r=path_1.default.posix.relative(e,o),i[r]=t[o];return i}getFile(t="",e=""){return this.project.getFile(t,e)}getFileString(t="",e=""){return this.project.getFile(t,e).toString()}getMPFileWithDir(t=""){var e;const{files:i=[],dirs:r=[]}=(null===(e=this.project)||void 0===e?void 0:e.getFilesAndDirs())||{};return t=this.project.miniprogramRoot?path_1.default.posix.join(this.project.miniprogramRoot,t):t,this.excludeRoot(i.concat(r),this.project.miniprogramRoot||"")}getMPFileList(t="",e=""){return t=this.project.miniprogramRoot?path_1.default.posix.join(this.project.miniprogramRoot||"",t):t,this.excludeRoot(this.project.getFileList(t,e),this.project.miniprogramRoot||"")}getMPWXMLFileList(t=""){return this.getMPFileList(t,".wxml")}getMPWXSFileList(t=""){return this.getMPFileList(t,".wxs")}getMPJSFileList(t=""){return this.getMPFileList(t,".js")}getMPWXSSFileList(t=""){return this.getMPFileList(t,".wxss")}getMPJSONFileList(t=""){return this.getMPFileList(t,".json")}getPluginFileList(t="",e=""){return t=path_1.default.posix.join(this.project.pluginRoot||"",t),this.excludeRoot(this.project.getFileList(t,e),this.project.pluginRoot)}getPluginWXMLFileList(t=""){return this.getPluginFileList(t,".wxml")}getPluginWXSFileList(t=""){return this.getPluginFileList(t,".wxs")}getPluginJSFileList(t=""){return this.getPluginFileList(t,".js")}getPluginWXSSFileList(t=""){return this.getPluginFileList(t,".wxss")}getPluginJSONFileList(t=""){return this.getPluginFileList(t,".json")}isValidComponent(t="",e){const i=this.excludeRoot(this.project.getFileList(t),t),r=i.some(t=>t===e+".json"),o=i.some(t=>t===e+".wxml"),s=i.some(t=>t===e+".js"||t===e+".ts");return r&&o&&s}async getAllFileInfo(t=""){return this.project.getAllFileInfo(t)}}exports.BaseCoreCompiler=BaseCoreCompiler;
}(require("licia/lazyImport")(require), require)