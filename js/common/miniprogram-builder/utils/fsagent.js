!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FSAgent=void 0;const tslib_1=require("tslib"),fs_1=tslib_1.__importDefault(require("fs")),log=tslib_1.__importStar(require("./log")),tools_1=require("./tools");class FSAgent{constructor(e){e&&(this._agent=e)}setAgent(e){this._agent=e}stat(e){var t;return e=(0,tools_1.normalizePath)(e),(null===(t=this._agent)||void 0===t?void 0:t.stat)?(log.debug("FSAgent use agent.stat for "+e),this._agent.stat(e)):new Promise((t,r)=>{log.debug("FSAgent use fs.stat for "+e),fs_1.default.stat(e,(e,i)=>{if(e)return r(e);t(i)})})}exists(e){var t;return e=(0,tools_1.normalizePath)(e),(null===(t=this._agent)||void 0===t?void 0:t.exists)?(log.debug("FSAgent use agent.exists for "+e),this._agent.exists(e)):new Promise((t,r)=>{log.debug("FSAgent use fs.exists for "+e),fs_1.default.exists(e,e=>{t(e)})})}readFile(e){var t;return e=(0,tools_1.normalizePath)(e),(null===(t=this._agent)||void 0===t?void 0:t.readFile)?(log.debug("FSAgent use agent.readFile for "+e),this._agent.readFile(e)):new Promise((t,r)=>{log.debug("FSAgent use fs.readFile for "+e),fs_1.default.readFile(e,null,(e,i)=>{if(e)return r(e);t(i)})})}writeFile(e,t,r=null){var i;return e=(0,tools_1.normalizePath)(e),(null===(i=this._agent)||void 0===i?void 0:i.writeFile)?(log.debug("FSAgent use agent.writeFile for "+e),this._agent.writeFile(e,t,r)):new Promise((i,s)=>{log.debug("FSAgent use fs.writeFile for "+e),fs_1.default.writeFile(e,t,r,e=>{if(e)return s(e);i()})})}readdir(e){var t;return e=(0,tools_1.normalizePath)(e),(null===(t=this._agent)||void 0===t?void 0:t.readdir)?(log.debug("FSAgent use agent.readdir for "+e),this._agent.readdir(e)):new Promise((t,r)=>{fs_1.default.readdir(e,(e,i)=>{if(e)return r(e);t(i)})})}}exports.FSAgent=FSAgent;
}(require("licia/lazyImport")(require), require)