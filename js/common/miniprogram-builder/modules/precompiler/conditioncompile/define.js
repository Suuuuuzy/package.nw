!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MacroDefine=void 0;const define_1=require("../../../config/define"),defaultDefine={};class MacroDefine{constructor({filePath:t,targetPlatform:e,targetPlatformDefines:s={}}){this.defaultConstants=defaultDefine,this.customConstants={},this.defaultConstants.FILE=t,this.defaultConstants.PLATFORM=e,this.defaultConstants.MP=e===define_1.PLATFORM["mini-weixin"],this.defaultConstants.ANDROID=e===define_1.PLATFORM["mini-android"],this.defaultConstants.IOS=e===define_1.PLATFORM["mini-ios"],this.defaultConstants.NATIVE=e===define_1.PLATFORM["mini-android"]||e===define_1.PLATFORM["mini-ios"],this.defines(s)}defines(t){for(const e in t)this.define(e,t[e])}define(t,e){if(this.defaultConstants[t])throw new Error(`macro ${t} is forbidden`);this.customConstants[t]=e}isDefined(t){return!!this.defaultConstants[t]||!!this.customConstants[t]}getDefines(){return Object.assign(Object.assign({},this.defaultConstants),this.customConstants)}}exports.MacroDefine=MacroDefine;
}(require("licia/lazyImport")(require), require)