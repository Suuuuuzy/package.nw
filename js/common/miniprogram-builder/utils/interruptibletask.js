!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.InterruptibleTask=exports.AbortEvent=void 0,exports.AbortEvent="abort";class InterruptibleTask{constructor(...t){this._aborted=!1,this._args=t,this._promise=this.run(...t)}then(t,r){return this._promise.then(t,r)}catch(t){return this._promise.catch(t)}abort(){this._aborted||(this._aborted=!0)}}exports.InterruptibleTask=InterruptibleTask;
}(require("licia/lazyImport")(require), require)