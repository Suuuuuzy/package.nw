import{SourceMapEntry}from"../../SourceMap.js";let wasm;const heap=new Array(32).fill(void 0);function getObject(e){return heap[e]}heap.push(void 0,null,!0,!1);let heap_next=heap.length;function dropObject(e){e<36||(heap[e]=heap_next,heap_next=e)}function takeObject(e){const t=getObject(e);return dropObject(e),t}function addHeapObject(e){heap_next===heap.length&&heap.push(heap.length+1);const t=heap_next;return heap_next=heap[t],heap[t]=e,t}let cachedTextDecoder=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});cachedTextDecoder.decode();let cachegetUint8Memory0=null;function getUint8Memory0(){return null!==cachegetUint8Memory0&&cachegetUint8Memory0.buffer===wasm.memory.buffer||(cachegetUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachegetUint8Memory0}function getStringFromWasm0(e,t){return cachedTextDecoder.decode(getUint8Memory0().subarray(e,e+t))}let WASM_VECTOR_LEN=0;function passArray8ToWasm0(e,t){const n=t(1*e.length);return getUint8Memory0().set(e,n/1),WASM_VECTOR_LEN=e.length,n}let cachedTextEncoder=new TextEncoder("utf-8");const encodeString="function"==typeof cachedTextEncoder.encodeInto?function(e,t){return cachedTextEncoder.encodeInto(e,t)}:function(e,t){const n=cachedTextEncoder.encode(e);return t.set(n),{read:e.length,written:n.length}};function passStringToWasm0(e,t,n){if(void 0===n){const n=cachedTextEncoder.encode(e),r=t(n.length);return getUint8Memory0().subarray(r,r+n.length).set(n),WASM_VECTOR_LEN=n.length,r}let r=e.length,a=t(r);const o=getUint8Memory0();let c=0;for(;c<r;c++){const t=e.charCodeAt(c);if(t>127)break;o[a+c]=t}if(c!==r){0!==c&&(e=e.slice(c)),a=n(a,r,r=c+3*e.length);const t=getUint8Memory0().subarray(a+c,a+r);c+=encodeString(e,t).written}return WASM_VECTOR_LEN=c,a}export class Resolver{static __wrap(e){const t=Object.create(Resolver.prototype);return t.ptr=e,t}free(){const e=this.ptr;this.ptr=0,wasm.__wbg_resolver_free(e)}constructor(e){var t=passArray8ToWasm0(e,wasm.__wbindgen_malloc),n=WASM_VECTOR_LEN,r=wasm.resolver_from_slice(t,n);return Resolver.__wrap(r)}listFiles(){return takeObject(wasm.resolver_listFiles(this.ptr))}listMappings(){return takeObject(wasm.resolver_listMappings(this.ptr))}resolve(e){return takeObject(wasm.resolver_resolve(this.ptr,e))}resolveReverse(e,t,n){var r=passStringToWasm0(e,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),a=WASM_VECTOR_LEN;return takeObject(wasm.resolver_resolveReverse(this.ptr,r,a,t,n))}}async function load(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}async function init(e){void 0===e&&(e=import.meta.url.replace(/\.js$/,"_bg.wasm"));const t={wbg:{}};t.wbg.__wbindgen_object_drop_ref=function(e){takeObject(e)},t.wbg.__wbg_new_8344aa4d8326b816=function(e,t,n,r,a){return addHeapObject(new SourceMapEntry(e>>>0,t>>>0,getObject(n),r>>>0,a>>>0))},t.wbg.__wbindgen_object_clone_ref=function(e){return addHeapObject(getObject(e))},t.wbg.__wbindgen_string_new=function(e,t){return addHeapObject(getStringFromWasm0(e,t))},t.wbg.__wbg_new_0d50725e1ae68303=function(){return addHeapObject(new Array)},t.wbg.__wbg_push_46274b393147c746=function(e,t){return getObject(e).push(getObject(t))},t.wbg.__wbg_new_1d56e97b8de3067f=function(e,t){return addHeapObject(new Error(getStringFromWasm0(e,t)))},t.wbg.__wbindgen_throw=function(e,t){throw new Error(getStringFromWasm0(e,t))},t.wbg.__wbindgen_rethrow=function(e){throw takeObject(e)},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await load(await e,t);return wasm=n.exports,init.__wbindgen_wasm_module=r,wasm}export default init;