"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeChars = exports.str2ab = exports.ab2str = void 0;
function ab2str(buf, charIndex = 0, charLen) {
    charLen = charLen || (buf.byteLength / 2 - charIndex);
    return String.fromCharCode.apply(null, new Uint16Array(buf, charIndex * 2, charLen));
}
exports.ab2str = ab2str;
function str2ab(str, ctor) {
    const len = str.length;
    const buf = new ctor(len * 2);
    const bufView = new Uint16Array(buf);
    for (let i = 0, strLen = len; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
exports.str2ab = str2ab;
function writeChars(fullStr, buf, bufWriteOffset, strOffset, writeLen) {
    const bufView = new Uint16Array(buf, bufWriteOffset, writeLen);
    for (let j = 0, i = strOffset, strLen = strOffset + writeLen; i < strLen;) {
        bufView[j] = fullStr.charCodeAt(i);
        i += 1;
        j += 1;
    }
    return buf;
}
exports.writeChars = writeChars;
//# sourceMappingURL=util.js.map