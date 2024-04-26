!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TaskStatus=void 0;const tslib_1=require("tslib"),locales_1=tslib_1.__importDefault(require("./locales/locales"));class TaskStatus{constructor(t){this._status="doing",this._msg="",this._id=`${Math.random()}${Date.now()}`,this._msg=t}get id(){return this._id}get status(){return this._status}get message(){return this._msg}done(){this._status="done"}toString(){return"doing"===this._status?locales_1.default.config.PROCESSING.format(this._msg):"done"===this._status?locales_1.default.config.DONE.format(this._msg):this._msg}}exports.TaskStatus=TaskStatus;
}(require("licia/lazyImport")(require), require)