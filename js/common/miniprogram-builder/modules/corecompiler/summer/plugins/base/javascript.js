"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MAX_CODE_LENGTH=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),fs_extra_1=tslib_1.__importDefault(require("fs-extra")),jsonParse_1=require("../../../../../utils/jsonParse"),sourcemap=()=>require("source-map");async function tryGetInputSourceMap(e,t){try{const s=/\/\/[#|@] sourceMappingURL=[\s]*(\S*)[\s]*$/m.exec(e),r=path_1.default.posix.dirname(t),a=path_1.default.posix.basename(t);let o;if(null==s?void 0:s[1])if(s[1].endsWith(".js.map"))o=await fs_extra_1.default.readFile(path_1.default.posix.join(r,s[1]),"utf-8");else{const e=s[1].split("base64,")[1];o=Buffer.from(e,"base64").toString()}else{const e=path_1.default.posix.join(r,a+".map");fs_extra_1.default.existsSync(e)&&(o=await fs_extra_1.default.readFile(e,"utf-8"))}if(o){const e=(0,jsonParse_1.jsonParse)(o);new(require("source-map").SourceMapConsumer)(e);return await insertSourcesContent(e,t),e}}catch(e){console.log(`try to get input sourcemap of ${t} catch error ${e}`)}}exports.MAX_CODE_LENGTH=2048e3;const insertSourcesContent=async(e,t)=>{if(Array.isArray(e.sources)&&!Array.isArray(e.sourcesContent)){const s=e.sourcesContent;try{const s=path_1.default.posix.dirname(t),r=[],{sources:a}=e;for(const e of a){const t=await fs_extra_1.default.readFile(path_1.default.posix.join(s,e),"utf-8");r.push(t)}e.sourcesContent=r}catch(t){e.sourcesContent=s}}};function default_1(e){return{name:"summer-javascript",async load(t,s){if(s.endsWith(".js")){const t=path_1.default.relative(e.projectPath,s),r=e.getFile("",t).toString(),a=await tryGetInputSourceMap(r,s);return{sourceCode:r,inputMap:null!=a?a:void 0,astInfo:void 0,largeFile:r.length>=exports.MAX_CODE_LENGTH}}}}}exports.default=default_1;