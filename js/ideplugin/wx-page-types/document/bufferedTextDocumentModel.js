"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doTest = exports.BufferedTextDocumentModel = exports.getInsertionForOffset = void 0;
const bufferedTextDocumentModelNode_1 = require("./bufferedTextDocumentModelNode");
const util_1 = require("../common/util");
function getInsertionForOffset(insertions, beforeCharOffsetsOrdered, startingIndex, offset) {
    if (!insertions)
        return null;
    if (startingIndex >= beforeCharOffsetsOrdered.length)
        return null;
    const beforeCharOffset = beforeCharOffsetsOrdered[startingIndex];
    if (offset >= beforeCharOffset) {
        return {
            beforeCharOffset,
            insertion: insertions.get(beforeCharOffset),
            idx: startingIndex + 1,
        };
    }
    return null;
}
exports.getInsertionForOffset = getInsertionForOffset;
class BufferedTextDocumentModel {
    constructor(originalChunks, addedChunks, nodes, lastOffset) {
        this.originalChunks = originalChunks;
        this.addedChunks = addedChunks;
        this.nodes = nodes;
        const lastChunk = addedChunks[addedChunks.length - 1];
        this.lastOffset = typeof lastOffset === 'number' ? lastOffset : (lastChunk ? lastChunk.byteLength : -1);
    }
    get preferredCtor() {
        if (this._preferredCtor) {
            return this._preferredCtor;
        }
        return SharedArrayBuffer;
    }
    set preferredCtor(ctor) { this._preferredCtor = ctor; }
    build(insertions) {
        const textFragments = [];
        const chunks = [this.originalChunks, this.addedChunks];
        const _insertionKeys = insertions === null || insertions === void 0 ? void 0 : insertions.keys();
        const insertionKeys = _insertionKeys ? Array.from(_insertionKeys).sort((a, b) => { return a - b; }) : null;
        let currentCharOffset = 0;
        let currentInsertionIndex = 0;
        for (const node of this.nodes) {
            const type = node.nodeType;
            const idx = node.chunkIndex;
            const charIndex = node.charIndex;
            const charLen = node.charLen;
            const chunk = chunks[type][idx];
            if (!chunk) {
                console.error('Cannot find chunk', type, idx);
                continue;
            }
            const piece = charLen === 0 ? '' : util_1.ab2str(chunk, charIndex, charLen);
            let needPush = true;
            currentCharOffset += piece.length;
            if (insertionKeys) {
                const insertion = getInsertionForOffset(insertions, insertionKeys, currentInsertionIndex, currentCharOffset);
                if (insertion) {
                    needPush = false;
                    currentInsertionIndex = insertion.idx;
                    const text = insertion.insertion.insertText;
                    const beforeCharOffset = insertion.beforeCharOffset;
                    const revCnt = currentCharOffset - beforeCharOffset + 1;
                    textFragments.push(piece.slice(0, -revCnt), text, piece.slice(-revCnt));
                }
            }
            if (needPush) {
                textFragments.push(piece);
            }
        }
        return textFragments.join('');
    }
    readRange(startCharOffset, charLen) {
        if (startCharOffset < 0)
            return null;
        if (charLen <= 0)
            return '';
        const [startNodeIdx, startLeftCharOffset, startRightCharOffset] = bufferedTextDocumentModelNode_1.nodeIndexForCharOffset(this.nodes, startCharOffset) || [];
        if (isNaN(startNodeIdx)) {
            return null;
        }
        const strBeginOffset = startCharOffset - startLeftCharOffset;
        const leastStrLenToRead = charLen + strBeginOffset;
        const textFragments = [];
        const chunks = [this.originalChunks, this.addedChunks];
        let readLen = 0;
        for (let i = startNodeIdx; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const nodeType = node.nodeType;
            const chunkIndex = node.chunkIndex;
            const charLen = node.charLen;
            const charIndex = node.charIndex;
            const chunk = chunks[nodeType][chunkIndex];
            if (!chunk)
                continue;
            const piece = charLen === 0 ? '' : util_1.ab2str(chunk, charIndex, charLen);
            textFragments.push(piece);
            readLen += piece.length;
            if (readLen >= leastStrLenToRead) {
                break;
            }
        }
        const partialFullStr = textFragments.join('');
        return partialFullStr.substr(strBeginOffset, charLen);
    }
    get lastAddedChunk() {
        return this.addedChunks[this.addedChunks.length - 1];
    }
    mutateWithChanges(changes, reArrange = false) {
        changes = changes.sort((a, b) => {
            return b.beforeCharOffset - a.beforeCharOffset;
        });
        let newNodes = [...this.nodes];
        const newChunks = [...this.addedChunks];
        let lastOffset = this.lastOffset;
        for (const change of changes) {
            if (change.insertText) {
                newNodes = bufferedTextDocumentModelNode_1.deleteCharsInsideNodes(newNodes, change.beforeCharOffset, change.charLen);
                const replaceRes = bufferedTextDocumentModelNode_1.insertCharsWithinNodes(newNodes, newChunks[newChunks.length - 1], newChunks.length - 1, lastOffset, change.beforeCharOffset, change.insertText, this.preferredCtor);
                newNodes = replaceRes.nodes;
                lastOffset = replaceRes.lastOffset;
                newChunks.push(...replaceRes.newlyChunks);
            }
            else {
                newNodes = bufferedTextDocumentModelNode_1.deleteCharsInsideNodes(newNodes, change.beforeCharOffset, change.charLen);
            }
        }
        return new BufferedTextDocumentModel([...this.originalChunks], newChunks, reArrange ? bufferedTextDocumentModelNode_1.reArrangeNodes(newNodes) : newNodes, lastOffset);
    }
    static fromString(fullStr, ctor) {
        const eachPieceCharLen = bufferedTextDocumentModelNode_1.PreferredChunkSize / 2;
        const pieces = Math.ceil(fullStr.length / eachPieceCharLen);
        const originals = [];
        const nodes = [];
        let strOffset = 0;
        for (let i = 0; i < pieces; i++) {
            const thisTimeWriteLen = Math.min(eachPieceCharLen, fullStr.length - strOffset);
            const chunk = new ctor(thisTimeWriteLen * 2);
            util_1.writeChars(fullStr, chunk, 0, strOffset, thisTimeWriteLen);
            originals.push(chunk);
            const node = new bufferedTextDocumentModelNode_1.BufferedTextDocumentModelNode();
            node.nodeType = 0;
            node.chunkIndex = i;
            node.charIndex = 0;
            node.charLen = thisTimeWriteLen;
            nodes.push(node);
            strOffset += thisTimeWriteLen;
        }
        return new BufferedTextDocumentModel(originals, [], nodes);
    }
}
exports.BufferedTextDocumentModel = BufferedTextDocumentModel;
function doTest() {
    var t1 = Date.now();
    var sab1 = util_1.str2ab('Hello, World!', SharedArrayBuffer);
    var sab2 = util_1.str2ab('This is amazing!', SharedArrayBuffer);
    var added1 = util_1.str2ab('~Honey~, ', SharedArrayBuffer);
    var added2 = util_1.str2ab('_Amazing!_', SharedArrayBuffer);
    var node1 = new bufferedTextDocumentModelNode_1.BufferedTextDocumentModelNode();
    node1.nodeType = 0;
    node1.chunkIndex = 0;
    node1.charIndex = 0;
    node1.charLen = 7;
    var node2 = new bufferedTextDocumentModelNode_1.BufferedTextDocumentModelNode();
    node2.nodeType = 1;
    node2.chunkIndex = 0;
    node2.charIndex = 1;
    node2.charLen = 6;
    var node3 = new bufferedTextDocumentModelNode_1.BufferedTextDocumentModelNode();
    node3.nodeType = 1;
    node3.chunkIndex = 0;
    node3.charIndex = 7;
    node3.charLen = 1;
    var node4 = new bufferedTextDocumentModelNode_1.BufferedTextDocumentModelNode();
    node4.nodeType = 0;
    node4.chunkIndex = 1;
    node4.charIndex = 0;
    node4.charLen = 16;
    var node5 = new bufferedTextDocumentModelNode_1.BufferedTextDocumentModelNode();
    node5.nodeType = 1;
    node5.chunkIndex = 0;
    node5.charIndex = 8;
    node5.charLen = 1;
    var node6 = new bufferedTextDocumentModelNode_1.BufferedTextDocumentModelNode();
    node6.nodeType = 1;
    node6.chunkIndex = 1;
    node6.charIndex = 1;
    node6.charLen = 8;
    var t2 = Date.now();
    var model = new BufferedTextDocumentModel([sab1, sab2], [added1, added2], [node1, node2, node3, node4, node5, node6], added2.byteLength);
    var t3 = Date.now();
    const res = model.build();
    var t4 = Date.now();
    return {
        t1, t2, t3, t4, res, model,
    };
}
exports.doTest = doTest;
//# sourceMappingURL=bufferedTextDocumentModel.js.map