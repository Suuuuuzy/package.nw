!function(require, directRequire){
"use strict";const tslib_1=require("tslib"),tools_1=require("../../../utils/tools"),appconfig_1=tslib_1.__importDefault(require("../utils/appconfig/appconfig")),checkcustomcomponent_1=require("../utils/appconfig/checkcustomcomponent"),wxappcodejson_1=tslib_1.__importDefault(require("../utils/appconfig/wxappcodejson")),TaskManager=require("../utils/taskmanager");async function getWxAppCode(e,o,t=!0){const a=await appconfig_1.default.getAppConfig(e,o),n=await(0,checkcustomcomponent_1.getFileListJustInPack)(e,o,a),r=[],p=new TaskManager;for(const a of n)p.addTask(getWxAppCodeOfPage,e,o,a,"$gwx",t);r.push(...await p.runAllAsync());return(0,tools_1.escapeScript)(r.join("\n"))}async function getWxAppCodeOfPage(e,o,t,a,n=!0){let r={};try{r=await(0,wxappcodejson_1.default)(e,o,decodeURI(t))}catch(e){r={}}let p=`\n    var decodePathName = decodeURI("${(0,tools_1.escapeQuot)(t,'"')}")\n    __wxAppCode__[decodePathName + ".json"] = ${JSON.stringify(r)}\n    __wxAppCode__[decodePathName + ".wxml"] = ${a}("./" + decodePathName + ".wxml")\n  `;return n&&(p+="\n    __wxRoute = decodePathName\n    __wxRouteBegin = true\n    __wxAppCurrentFile__ = decodePathName + \".js\"\n    try {\n      require(__wxAppCurrentFile__)\n    } catch (error) {\n      // 插件项目不能hack define和require，走这里，异常只能精准到页面，内部的多层依赖的报错无法精准\n      !error.from && console.error('页面【' + decodePathName + ']错误:\\n',error)\n      throw error\n    }"),p}async function getWxAppCodeJsonOfPage(e,o,t){let a={};try{a=await(0,wxappcodejson_1.default)(e,o,decodeURI(t))}catch(e){a={}}return`\n    var decodePathName = decodeURI("${(0,tools_1.escapeQuot)(t,'"')}")\n    __wxAppCode__[decodePathName + ".json"] = ${JSON.stringify(a)}\n  `}function getWxAppCodeWxmlOfPage(e,o,t,a=!0){let n=`\n    var decodePathName = decodeURI("${(0,tools_1.escapeQuot)(o,'"')}")\n    __wxAppCode__[decodePathName + ".wxml"] = ${t}("./" + decodePathName + ".wxml")\n  `;return a&&(n+="\n    __wxRoute = decodePathName\n    __wxRouteBegin = true\n    __wxAppCurrentFile__ = decodePathName + \".js\"\n    try {\n      require(__wxAppCurrentFile__)\n    } catch (error) {\n      // 插件项目不能hack define和require，走这里，异常只能精准到页面，内部的多层依赖的报错无法精准\n      !error.from && console.error('页面【' + decodePathName + ']错误:\\n',error)\n      throw error\n    }"),n}module.exports={getWxAppCode:getWxAppCode,getWxAppCodeOfPage:getWxAppCodeOfPage,getWxAppCodeJsonOfPage:getWxAppCodeJsonOfPage,getWxAppCodeWxmlOfPage:getWxAppCodeWxmlOfPage};
}(require("licia/lazyImport")(require), require)