"use strict";const tslib_1=require("tslib"),fs_1=tslib_1.__importDefault(require("fs")),path_1=tslib_1.__importDefault(require("path")),locales_1=tslib_1.__importDefault(require("../../../../../utils/locales/locales")),tools_1=require("../../../../../utils/tools"),config_1=require("../../../../../config/config"),log=tslib_1.__importStar(require("../../../../../utils/log")),babel_helper_1=require("../../../../../utils/babel_helper"),jsonParse_1=require("../../../../../utils/jsonParse"),call_func_1=require("./call_func"),sourcemap=()=>require("source-map"),enhanceCompile=()=>require("../../js/enhance"),workletCompile=()=>require("../../js/workletCompile"),es6Compile=()=>require("../../js/es6Transform"),minifyJS=()=>require("../../js/minifyjs"),minifyJSAfterWrap=()=>require("../../js/minifyjsAfterWrap"),MAX_CODE_LENGTH=2048e3;async function tryGetInputSourceMap(e,r){try{const t=/\/\/[#|@] sourceMappingURL=[\s]*(\S*)[\s]*$/m.exec(e),s=path_1.default.posix.dirname(r),o=path_1.default.posix.basename(r);let i;if(null==t?void 0:t[1])if(t[1].endsWith(".js.map"))i=await(0,call_func_1.call)("readFileAsync",path_1.default.posix.join(s,t[1]),"utf-8");else{const e=t[1].split("base64,")[1];i=Buffer.from(e,"base64").toString()}else{const e=path_1.default.posix.join(s,o+".map");fs_1.default.existsSync(e)&&(i=await(0,call_func_1.call)("readFileAsync",e,"utf-8"))}if(i){const e=(0,jsonParse_1.jsonParse)(i);new(require("source-map").SourceMapConsumer)(e);return await insertSourcesContent(e,r),e}}catch(e){log.log(`try to get input sourcemap of ${r} catch error ${e}`)}}const insertSourcesContent=async(e,r)=>{if(Array.isArray(e.sources)&&!Array.isArray(e.sourcesContent)){const t=e.sourcesContent;try{const t=path_1.default.posix.dirname(r),s=[],{sources:o}=e;for(const e of o){const r=await(0,call_func_1.call)("readFileAsync",path_1.default.posix.join(t,e),"utf-8");s.push(r)}e.sourcesContent=s}catch(r){e.sourcesContent=t}}};async function compileJS(e){const{code:r,filePath:t,projectPath:s,setting:o,babelRoot:i="@babel/runtime",root:a="",babelIgnore:n=[]}=e,{es7:l,es6:c,disableUseStrict:u,compileWorklet:p}=o,f="string"==typeof r?r:(0,tools_1.bufferToUtf8String)(Buffer.from(r)),_=path_1.default.posix.join(a,t),m=o.minify||o.minifyJS;if(void 0===f)return{error:{code:config_1.FILE_NOT_UTF8,path:_,message:locales_1.default.config.FILE_NOT_UTF8.format(_)}};const b=f.length>=2048e3;let h=!1;l&&(h=(0,babel_helper_1.isIgnore)(n,t));const d=await tryGetInputSourceMap(f,path_1.default.posix.join(s,a,t));if(b||h)return{error:null,isLargeFile:b,isBabelIgnore:h,map:"object"==typeof d?JSON.stringify(d):d,code:f,helpers:[]};let g=f,j=d,y=[];if(l){const e=await require("../../js/enhance")({code:f,babelRoot:i,filePath:t,disableUseStrict:u,inputSourceMap:d});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:_})};g=e.code||"",j=e.map,y=e.helpers||[]}else if(c){const e=require("../../js/es6Transform")({code:f,filePath:t,inputSourceMap:d});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:_})};g=e.code||"",j=e.map}else if(p){if(f.includes('"worklet"')||f.includes("'worklet'")){const e=await require("../../js/workletCompile")({code:f,babelRoot:i,filePath:t,disableUseStrict:u,inputSourceMap:d});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:_})};g=e.code||"",j=e.map,y=e.helpers||[]}}if(m){if(!c&&!l){const e=require("../../js/minifyjsAfterWrap")({filePath:t,code:g,inputSourceMap:j});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:_})};g=e.code,j=e.map}else{const e=require("../../js/minifyjs")({filePath:t,code:g,useTerser:!!l,inputSourceMap:j});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:_})};g=e.code,j=e.map}}if("string"!=typeof j)try{(null==j?void 0:j.sourcesContent)&&(j.sourcesContent=j.sourcesContent.map(e=>e.replace(/\r\n/g,"\n"))),j=JSON.stringify(j)}catch(e){j=""}else j=j.replace(/\\r\\n/g,"\\n");return{error:null,isLargeFile:b,isBabelIgnore:h,map:j,code:g.replace(/\r\n/g,"\n"),helpers:y||[]}}module.exports=compileJS;