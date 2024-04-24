"use strict";const tslib_1=require("tslib"),validate_1=tslib_1.__importDefault(require("./validate"));module.exports=new validate_1.default("object",!1,{deviceOrientation:new validate_1.default("string",!1,["portrait","landscape","landscapeLeft","landscapeRight"]),networkTimeout:new validate_1.default("object",!1,{request:new validate_1.default("number",!1),connectSocket:new validate_1.default("number",!1),uploadFile:new validate_1.default("number",!1),downloadFile:new validate_1.default("number",!1)}),openDataContext:new validate_1.default("string",!1),showStatusBar:new validate_1.default("boolean",!1),workers:new validate_1.default("string",!1),navigateToMiniProgramAppIdList:new validate_1.default("array",!1,new validate_1.default("string",!1)),disableSetUserStorageFromMiniProgram:new validate_1.default("boolean",!1),permission:new validate_1.default("object",!1,{"scope.userLocation":new validate_1.default("object",!1,{desc:new validate_1.default("string",!0)})}),subPackages:new validate_1.default("array",!1,new validate_1.default("object",!1,{root:new validate_1.default("string",!0),name:new validate_1.default("string",!1),independent:new validate_1.default("boolean",!1),plugins:new validate_1.default("object",!1,new validate_1.default("object",!1,{provider:new validate_1.default("string",!0),version:new validate_1.default("string",!0),path:new validate_1.default("string",!1)}))})),loadingImageInfo:new validate_1.default("object",!1,{path:new validate_1.default("string",!0),progressBarColor:new validate_1.default("string",!1)}),subpackages:new validate_1.default("array",!1,new validate_1.default("object",!1,{root:new validate_1.default("string",!0),name:new validate_1.default("string",!1),independent:new validate_1.default("boolean",!1),plugins:new validate_1.default("object",!1,new validate_1.default("object",!1,{provider:new validate_1.default("string",!0),version:new validate_1.default("string",!0),path:new validate_1.default("string",!1)}))})),plugins:new validate_1.default("object",!1,new validate_1.default("object",!1,{provider:new validate_1.default("string",!0),version:new validate_1.default("string",!0),path:new validate_1.default("string",!1)}))});