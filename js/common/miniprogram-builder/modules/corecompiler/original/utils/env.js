!function(require, directRequire){
"use strict";function getProcessEnv(){const s=process.env.cpprocessEnv;return"childprocess"===s||"workerthread"===s||"workerprocess"===s?s:"main"}function getHostEnv(){var s;return(null===(s=process.env)||void 0===s?void 0:s.isDevtools)||process.__nwjs&&"wechatwebdevtools"===nw.App.manifest.appname?"devtools":"ci"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.nativeProcess=exports.summerProcess=exports.hostEnv=exports.processEnv=void 0,exports.processEnv=getProcessEnv(),exports.hostEnv=getHostEnv(),exports.summerProcess="1"===process.env.summerProcess,exports.nativeProcess="1"===process.env.nativeProcess;
}(require("licia/lazyImport")(require), require)