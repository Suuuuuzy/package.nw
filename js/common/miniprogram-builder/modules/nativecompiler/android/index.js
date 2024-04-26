!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AndroidUtils=void 0;const tslib_1=require("tslib"),fs_extra_1=tslib_1.__importDefault(require("fs-extra")),deviceUtils=tslib_1.__importStar(require("./device")),projectconfig_1=tslib_1.__importDefault(require("./projectconfig"));class AndroidUtils{constructor(e,t={}){this.root=e,this.userConfig=t}getProjectConfig(e){const t=projectconfig_1.default.getProjectConfig(this.root,this.userConfig,e);if(!t)throw new Error("Android project not found. Are you sure this is a miniapp project?");return t}async run(e,t){const i=this.getProjectConfig(t);return process.chdir(i.sourceDir),e.device?await this.runOnSpecificDevice(e,i,t):await this.runOnAllDevices(e,i,t)}async build(e,t){t.progress("start build apk...");const i=this.getProjectConfig(t),{sourceDir:r,appName:s}=i,o=`${r}/${s}/build/outputs/apk`;return fs_extra_1.default.ensureDirSync(o),fs_extra_1.default.emptyDirSync(o),process.chdir(i.sourceDir),await deviceUtils.tryInstantBuild(i,e.variant,t),console.log("build apk successfully"),o}async runOnAllDevices(e,t,i){let r=deviceUtils.getDevices();if(0===r.length){i.progress("Launching emulator...");const e=await deviceUtils.tryLaunchEmulator(null,i);if(!e.success)throw new Error(`Failed to launch emulator. Reason: ${e.error}.`);i.progress("Successfully launched emulator."),r=deviceUtils.getDevices()}else i.progress("Get Devices:"+r.join(","));await deviceUtils.tryInstantBuild(t,e.variant,i),await deviceUtils.tryInstantInstall(t,e.variant,i),(r.length>0?r:[]).forEach(r=>{deviceUtils.tryLaunchAppOnDevice(r.name,t.packageName,e,i)})}async runOnSpecificDevice(e,t,i){var r;const{variant:s}=e;let{device:o}=e;const n=deviceUtils.getDevices();if(!(n.length>0&&o))throw new Error("No Android device or emulator connected.");{const c=n.find(e=>e.name===o);if(!c)throw new Error(`Could not find device with the id: "${o}". Please choose one of the following:${n.join(",")}`);if("simulator"===c.type&&!c.attach){const e=await deviceUtils.tryLaunchEmulator(o,i);if(!e.success)throw new Error(e.error);o=null===(r=e.device)||void 0===r?void 0:r.name}await deviceUtils.tryInstantBuild(t,s,i),await deviceUtils.tryInstantInstall(t,s,i),deviceUtils.tryLaunchAppOnDevice(o,t.packageName,e,i)}}}exports.AndroidUtils=AndroidUtils;
}(require("licia/lazyImport")(require), require)