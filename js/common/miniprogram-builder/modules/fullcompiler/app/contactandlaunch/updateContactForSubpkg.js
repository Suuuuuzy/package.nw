!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateContactBase64ForSubPkgs=void 0;const tslib_1=require("tslib"),originalcontactbase64_1=tslib_1.__importDefault(require("./originalcontactbase64")),protobuf=require("protobufjs");async function updateContactBase64ForSubPkgs(e){const{appid:t,version:a,nickName:n,brandIconURL:i,fullPkg:o,modList:r}=e,s=originalcontactbase64_1.default,p=Buffer.from(s,"base64"),{root:d}=protobuf.parse("\n    package attrresponse;\n  \n    message WxaAttrSyncResponse\n    {\n      optional BaseResponse BaseResponse = 1;\n      optional bytes LastAttrVersion = 2;\n      repeated WxaAttrSyncResp_KeyValue UpdateInfoList = 3;\n      optional string WxaUserName = 4;\n      optional bytes RespBuffer = 5; \n    }\n  \n    message BaseResponse {\n      required int32 Ret = 1;\n      required SKBuiltinString_t ErrMsg = 2;\n    }\n  \n    message WxaAttrSyncResp_KeyValue\n    {\n      optional string Key = 1;\n      optional string Value = 2;\n    }\n  \n    message SKBuiltinString_t {\n      optional string String = 1;\n    }\n    ",{keepCase:!0}),l=t,c=d.lookupType("attrresponse.WxaAttrSyncResponse"),u=c.decode(p);u.WxaUserName=l,modifyUpdateInfoListItem(u,"Signature",""),modifyUpdateInfoListItem(u,"VerifyInfo",""),modifyUpdateInfoListItem(u,"NickName",n),modifyUpdateInfoListItem(u,"QuanPin",""),modifyUpdateInfoListItem(u,"PYInitial",""),modifyUpdateInfoListItem(u,"UserName",l),modifyUpdateInfoListItem(u,"Alias",""),modifyUpdateInfoListItem(u,"BrandIconURL",i),modifyUpdateInfoListItem(u,"BigHeadImgUrl",i),modifyUpdateInfoListItem(u,"SmallHeadImgUrl",i),modifyUpdateInfoListItem(u,"WxaAppInfo",{Appid:t,Network:{},PluginInfo:{plugin_list:[]},TcbCdnDomain:{},CanPreFetchData:0}),modifyUpdateInfoListItem(u,"WxaAppVersionInfo",{AppVersion:a,UsePreloadRule:!0,module_list:r||[],widget_list:o?[o]:[],UseModule:r&&r.length>0?1:0,EntranceModule:"__APP__",Last_Version_Categories:[],client_js_ext_info:{}}),modifyUpdateInfoListItem(u,"WxaAppDynamic",{NewCategories:[],NewSetting:{MaxLocalstorageSize:10,MaxCodeSize:2,MaxWebviewDepth:5,MaxBackgroundLifespan:300,MaxRequestConcurrent:10,MaxUploadConcurrent:10,MaxDownloadConcurrent:10,MaxFileStorageSize:200,ExpiresAtList:432e3,BackgroundNetworkInterruptedTimeout:300,CanKeepAliveByAudioPlay:1,LifeSpanBeforeSuspend:5,LifeSpanAfterSuspend:1800,MaxWebsocketConnect:5,ExpendedMaxWebviewDepth:10,ActualWebviewDepth:5,WebsocketSkipPortCheck:1,MaxSubpackageSubCodeSize:2,MaxSubpackageFullCodeSize:20,MaxWorkerConcurrent:1,ScanCodeEnableZZM:0,MaxPluginSdkReadmeSize:2,CanPreFetchData:0,CanPeriodFetchData:0,PeriodFetchData:12,TLSSkipHostnameCheck:0,NavigateMiniprogramLimit:999999,OpendataMaxLocalstorageSize:10,OpendataMaxFileStorageSize:10,MaxTempFileStorageSize:2048,OpenWxaIap:1,GuaranteeFlag:1,CanShowLoadingAdvert:0,MaxSubPackageLimit:100,PeriodFetchDataDay:7,OpenWxaWaitUpdateMaxMicSec:13e3,OpenWxaWaitUpdateMaxMicSecForWeakNet:13e3,MinTempFileStorageSize:2048,Uint32MaxLocalstorageSizeInMB:10,Uint32OpendataMaxLocalstorageSizeInMB:10,Uint32MaxFileStorageSizeInMB:200,Uint32OpendataMaxFileStorageSizeInMB:10,Uint32MaxTempFileStorageSizeInMB:4096,Uint32MinTempFileStorageSizeInMB:2048,OpenProductFlag:0,UsePackageConfirmSubDescScopeList:[],PreCgiCallByteBeforeLaunch:"",CanShowGameLoadingAdvert:0}});return c.encode(u).finish().toString("base64")}function modifyUpdateInfoListItem(e,t,a){const n=e.UpdateInfoList.find(e=>e.Key===t);if(n)if("object"==typeof a){const e=JSON.parse(n.Value);for(const t in a)e[t]=a[t];n.Value=JSON.stringify(e)}else n.Value=a}exports.updateContactBase64ForSubPkgs=updateContactBase64ForSubPkgs;
}(require("licia/lazyImport")(require), require)