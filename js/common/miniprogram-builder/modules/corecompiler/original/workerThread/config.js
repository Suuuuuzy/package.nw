"use strict";var ETaskStatus,EWorkerStatus,EChildProcessStatus;Object.defineProperty(exports,"__esModule",{value:!0}),exports.SUICIDE_TIME=exports.EChildProcessStatus=exports.EWorkerStatus=exports.COMMAND=exports.TASK_NAME=exports.ETaskStatus=void 0,function(s){s[s.waiting=0]="waiting",s[s.progress=1]="progress",s[s.done=2]="done"}(ETaskStatus=exports.ETaskStatus||(exports.ETaskStatus={})),exports.TASK_NAME={COMPILE_JS:"COMPILE_JS",COMPILE_WXSS:"COMPILE_WXSS",MINIFY_WXML:"MINIFY_WXML",SUMMER_HOOK:"SUMMER_HOOK"},exports.COMMAND={RUN_TASK:"RUN_TASK",TASK_DONE:"TASK_DONE",CALL_FUNC:"CALL_FUNC",CALL_FUNC_RESULT:"CALL_FUNC_RESULT",CHILD_PROCESS_READY:"CHILD_PROCESS_READY",SEND_LOG:"SEND_LOG"},function(s){s[s.free=0]="free",s[s.busy=1]="busy",s[s.dying=2]="dying"}(EWorkerStatus=exports.EWorkerStatus||(exports.EWorkerStatus={})),function(s){s[s.free=0]="free",s[s.busy=1]="busy",s[s.fullload=2]="fullload",s[s.dying=3]="dying"}(EChildProcessStatus=exports.EChildProcessStatus||(exports.EChildProcessStatus={})),exports.SUICIDE_TIME={devtools:864e5,"miniprogram-ci":1e4};