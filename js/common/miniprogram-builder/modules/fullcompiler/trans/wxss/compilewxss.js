!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compileWxss=void 0;const tslib_1=require("tslib"),index_1=tslib_1.__importDefault(require("../wcc/index")),wcscnode=index_1.default.wcsc;async function compileWxss(e){return compileUseWCSCNode(e)}async function compileUseWCSCNode(e){var s;const o=Date.now(),c=await wcscnode(Object.assign(Object.assign({},e),{debug:!0}));return(null===(s=process.env)||void 0===s?void 0:s.isDevtools)&&console.warn("[wcsc-node] compile cost:",Date.now()-o),c}exports.compileWxss=compileWxss;
}(require("licia/lazyImport")(require), require)