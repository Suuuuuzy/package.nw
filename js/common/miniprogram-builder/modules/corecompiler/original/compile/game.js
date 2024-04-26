!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compile=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),game_1=tslib_1.__importDefault(require("../json/game")),projectconfig_1=require("../json/projectconfig"),taskstatus_1=require("../../../../utils/taskstatus"),config_1=require("../../../../config/config"),common_1=require("../../../../utils/common"),locales_1=tslib_1.__importDefault(require("../../../../utils/locales/locales")),white_ext_list_1=require("../../../../utils/white_ext_list"),uglifyfilenames_1=require("../protect/uglifyfilenames"),common_2=require("./common");async function compileGameJSON(e,t){const{onProgressUpdate:i=(()=>{})}=t,o=new taskstatus_1.TaskStatus("game.json");i(o);const a=(0,game_1.default)(e);return o.done(),i(o),a}async function compile(e,t){var i;const o=(0,projectconfig_1.getProjectConfigJSON)(e),a=o.miniprogramRoot||"",{GameWhiteList:s}=await(0,white_ext_list_1.getWhiteExtList)(),n=e.getFileList(a,"").filter(common_2.isNotIgnoredByProjectConfig.bind(null,o,a)).filter(e=>s.has(path_1.default.posix.extname(e))),r=await compileGameJSON(e,t);e.stat(a,"game.js")||(0,common_1.throwError)({msg:locales_1.default.config.FILE_NOT_FOUND.format(path_1.default.posix.join(a,"game.js")),filePath:path_1.default.posix.join(a,"game.js"),code:config_1.FILE_NOT_FOUND});const m=n.filter(e=>".js"===path_1.default.posix.extname(e)).map(e=>path_1.default.posix.relative(a,e)),l=await(0,common_2.compileJSFiles)(e,m,a,t),_=n.filter(e=>e!==path_1.default.posix.join(a,"game.json")&&".js"!==path_1.default.posix.extname(e)),c=await(0,common_2.compileOther)(e,_,t),p=await(0,common_2.getUploadProjectConfig)(e,o);let f=Object.assign(Object.assign({},l),c);if(e.type===config_1.COMPILE_TYPE.miniGame){if(p.miniprogramRoot&&"."!==p.miniprogramRoot&&"./"!==p.miniprogramRoot){const t={};for(const i in f)t[path_1.default.posix.relative(e.miniprogramRoot,i)]=f[i];f=t}p.miniprogramRoot="",f["game.json"]=JSON.stringify(r)}else f[path_1.default.posix.join(p.miniprogramRoot||"","game.json")]=JSON.stringify(r);return p.__compileDebugInfo__=t.__compileDebugInfo__||{},f["project.config.json"]=JSON.stringify(p),delete f["project.private.config.json"],e.type===config_1.COMPILE_TYPE.miniGame&&(null===(i=t.setting)||void 0===i?void 0:i.codeProtect)&&(f=await(0,uglifyfilenames_1.uglifyFileNames)(e,f)),f}exports.compile=compile;
}(require("licia/lazyImport")(require), require)