"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = exports.document = exports.core = void 0;
__exportStar(require("./types/common"), exports);
__exportStar(require("./types/document"), exports);
__exportStar(require("./types/js"), exports);
__exportStar(require("./types/style"), exports);
__exportStar(require("./types/wxml"), exports);
__exportStar(require("./datas/datas"), exports);
const core = require("./core/index");
exports.core = core;
__exportStar(require("./connection/connection"), exports);
__exportStar(require("./connection/contracts"), exports);
const document = require("./document/index");
exports.document = document;
const common = require("./common/index");
exports.common = common;
//# sourceMappingURL=index.js.map