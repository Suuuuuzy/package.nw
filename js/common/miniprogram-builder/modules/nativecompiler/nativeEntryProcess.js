var _a;process.env&&process.env.isDevtools&&require("../../utils/hackrequire/index"),Object.defineProperty(exports,"__esModule",{value:!0}),(null===(_a=process.env)||void 0===_a?void 0:_a.isDevtools)&&require("../../utils/hackrequire/index");const entryProcess_1=require("../../utils/subprocess/entryProcess"),progressRecorder_1=require("../../utils/progressRecorder"),nativeCompiler_1=require("./nativeCompiler");let nativeCompiler;async function initHandler(e){const{projectInfo:r}=e.data;nativeCompiler=new nativeCompiler_1.NativeCompiler({projectInfo:r})}async function messageHandler(e){if(e.type,"request"===e.type){const{id:r,name:s,data:n}=e,a=r,t=new progressRecorder_1.Recorder((e,r,s)=>{process.send({type:"progress",id:e,taskId:a,status:r,message:s})});n.fullEnv&&(global.fullEnv=n.fullEnv);try{let e;const i=`${s}-${a}`;if("buildNative"===s)e=await t.run(i,async()=>await nativeCompiler.build(n,t));else{if("runNative"!==s)throw new Error("unknown command "+s);e=await t.run(i,async()=>await nativeCompiler.run(n,t))}process.send({type:"response",id:r,data:e})}catch(e){process.send({type:"response",id:r,data:null,error:{code:e.code||-1,message:e.message,stack:e.stack,path:e.path||""}})}}}(0,entryProcess_1.runSubProcess)({initHandler:initHandler,messageHandler:messageHandler});