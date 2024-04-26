"use strict";const tslib_1=require("tslib"),fs_1=tslib_1.__importDefault(require("fs")),path_1=tslib_1.__importDefault(require("path")),locales_1=tslib_1.__importDefault(require("../../../../../utils/locales/locales")),tools_1=require("../../../../../utils/tools"),config_1=require("../../../../../config/config"),log=tslib_1.__importStar(require("../../../../../utils/log")),babel_helper_1=require("../../../../../utils/babel_helper"),jsonParse_1=require("../../../../../utils/jsonParse"),call_func_1=require("./call_func"),sourcemap=()=>require("source-map"),enhanceCompile=()=>require("../../js/enhance"),es6Compile=()=>require("../../js/es6Transform"),minifyJS=()=>require("../../js/minifyjs"),minifyJSAfterWrap=()=>require("../../js/minifyjsAfterWrap"),MAX_CODE_LENGTH=2048e3;async function tryGetInputSourceMap(e,r){try{const t=/\/\/[#|@] sourceMappingURL=[\s]*(\S*)[\s]*$/m.exec(e),s=path_1.default.posix.dirname(r),o=path_1.default.posix.basename(r);let i;if(null==t?void 0:t[1])if(t[1].endsWith(".js.map"))i=await(0,call_func_1.call)("readFileAsync",path_1.default.posix.join(s,t[1]),"utf-8");else{const e=t[1].split("base64,")[1];i=Buffer.from(e,"base64").toString()}else{const e=path_1.default.posix.join(s,o+".map");fs_1.default.existsSync(e)&&(i=await(0,call_func_1.call)("readFileAsync",e,"utf-8"))}if(i){const e=(0,jsonParse_1.jsonParse)(i);new(require("source-map").SourceMapConsumer)(e);return await insertSourcesContent(e,r),e}}catch(e){log.log(`try to get input sourcemap of ${r} catch error ${e}`)}}const insertSourcesContent=async(e,r)=>{if(Array.isArray(e.sources)&&!Array.isArray(e.sourcesContent)){const t=e.sourcesContent;try{const t=path_1.default.posix.dirname(r),s=[],{sources:o}=e;for(const e of o){const r=await(0,call_func_1.call)("readFileAsync",path_1.default.posix.join(t,e),"utf-8");s.push(r)}e.sourcesContent=s}catch(r){e.sourcesContent=t}}};async function compileJS(e){const{code:r,filePath:t,projectPath:s,setting:o,babelRoot:i="@babel/runtime",root:a="",babelIgnore:n=[]}=e,{es7:c,es6:l,disableUseStrict:u}=o,f="string"==typeof r?r:(0,tools_1.bufferToUtf8String)(Buffer.from(r)),p=path_1.default.posix.join(a,t),_=o.minify||o.minifyJS;if(void 0===f)return{error:{code:config_1.FILE_NOT_UTF8,path:p,message:locales_1.default.config.FILE_NOT_UTF8.format(p)}};const m=f.length>=2048e3;let b=!1;c&&(b=(0,babel_helper_1.isIgnore)(n,t));const g=await tryGetInputSourceMap(f,path_1.default.posix.join(s,a,t));if(m||b)return{error:null,isLargeFile:m,isBabelIgnore:b,map:"object"==typeof g?JSON.stringify(g):g,code:f,helpers:[]};let h=f,d=g,j=[];if(c){const e=await require("../../js/enhance")({code:f,babelRoot:i,filePath:t,disableUseStrict:u,inputSourceMap:g});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:p})};h=e.code||"",d=e.map,j=e.helpers||[]}else if(l){const e=require("../../js/es6Transform")({code:f,filePath:t,inputSourceMap:g});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:p})};h=e.code||"",d=e.map}if(_){if(!l&&!c){const e=require("../../js/minifyjsAfterWrap")({filePath:t,code:h,inputSourceMap:d});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:p})};h=e.code,d=e.map}else{const e=require("../../js/minifyjs")({filePath:t,code:h,useTerser:!!c,inputSourceMap:d});if(e.error)return{error:Object.assign(Object.assign({},e.error),{path:p})};h=e.code,d=e.map}}if("string"!=typeof d)try{(null==d?void 0:d.sourcesContent)&&(d.sourcesContent=d.sourcesContent.map(e=>e.replace(/\r\n/g,"\n"))),d=JSON.stringify(d)}catch(e){d=""}else d=d.replace(/\\r\\n/g,"\\n");return{error:null,isLargeFile:m,isBabelIgnore:b,map:d,code:h.replace(/\r\n/g,"\n"),helpers:j||[]}}module.exports=compileJS;