import { ArrayBufferLike } from '../core/index';
import { BufferedTextDocumentModelNode } from './bufferedTextDocumentModelNode';
export interface ITextDocumentModelChange {
    beforeCharOffset: number;
    charLen: number;
    insertText: string;
}
export interface IBufferedTextDocumentModelBuildInsertions {
    insertText: string;
}
export declare function getInsertionForOffset(insertions: Map<number, IBufferedTextDocumentModelBuildInsertions> | undefined, beforeCharOffsetsOrdered: number[], startingIndex: number, offset: number): {
    insertion: IBufferedTextDocumentModelBuildInsertions;
    idx: number;
    beforeCharOffset: number;
} | null;
export declare class BufferedTextDocumentModel {
    readonly originalChunks: readonly ArrayBufferLike[];
    readonly addedChunks: readonly ArrayBufferLike[];
    nodes: readonly BufferedTextDocumentModelNode[];
    readonly lastOffset: number;
    constructor(originalChunks: readonly ArrayBufferLike[], addedChunks: readonly ArrayBufferLike[], nodes: readonly BufferedTextDocumentModelNode[], lastOffset?: number);
    private _preferredCtor;
    get preferredCtor(): any;
    set preferredCtor(ctor: any);
    build(insertions?: Map<number, IBufferedTextDocumentModelBuildInsertions>): string;
    readRange(startCharOffset: number, charLen: number): string | null;
    get lastAddedChunk(): globalThis.ArrayBufferLike;
    mutateWithChanges(changes: ITextDocumentModelChange[], reArrange?: boolean): BufferedTextDocumentModel;
    static fromString<T extends ArrayBufferLike>(fullStr: string, ctor: {
        new (_: number): T;
    }): BufferedTextDocumentModel;
}
export declare function doTest(): {
    t1: number;
    t2: number;
    t3: number;
    t4: number;
    res: string;
    model: BufferedTextDocumentModel;
};
