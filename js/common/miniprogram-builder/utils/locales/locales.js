!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=require("tslib"),en_1=tslib_1.__importDefault(require("./en")),zh_1=tslib_1.__importDefault(require("./zh")),systemLocale="$SYSTEM",supportedLocales=["zh","en"];let locale="en";const toSupportedLocale=e=>("$SYSTEM"===e&&"zh_CN"===(e=navigator.language)&&(e="zh"),supportedLocales.find(t=>e.toLowerCase().includes(t))||"zh"),setLocale=e=>{locale=toSupportedLocale(e)},getLocale=()=>locale;exports.default={get config(){return"en"===locale?en_1.default:zh_1.default},setLocale:setLocale,getLocale:getLocale};
}(require("licia/lazyImport")(require), require)