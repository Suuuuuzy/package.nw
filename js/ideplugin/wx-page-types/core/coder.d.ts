export interface IBufferCoderDescriptor {
    byteOffsets: number[];
    totalBytes: number;
}
export declare type ArrayBufferLike = ArrayBuffer | SharedArrayBuffer;
export declare type ArrayBufferLikeCtor = {
    new (len: number): ArrayBufferLike;
};
export declare class BufferCoder {
    readonly descriptor: IBufferCoderDescriptor;
    readonly buffer: ArrayBufferLike;
    constructor(descriptor: IBufferCoderDescriptor, buffer: ArrayBufferLike);
    private _elementsCache;
    private _outdate;
    private _dataView;
    private get dataView();
    protected _getOffsetForElement(index: number): number[];
    protected readElement(index: number): number;
    private _doReadElement;
    private _doWriteElement;
    protected writeElement(index: number, value: number): void;
}
