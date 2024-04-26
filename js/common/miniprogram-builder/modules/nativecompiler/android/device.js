!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tryLaunchAppOnDevice=exports.tryInstantInstall=exports.tryInstantBuild=exports.getCPU=exports.getAvailableCPUs=exports.getDevicesAsync=exports.getDevices=exports.tryLaunchEmulator=exports.getEmulators=void 0;const tslib_1=require("tslib"),os=tslib_1.__importStar(require("os")),child_process_1=require("child_process"),execa_1=tslib_1.__importDefault(require("execa")),env_1=require("../../../utils/env"),adb_1=require("./adb"),cp_1=require("../../../utils/cp");function getElumatorCommand(){const e=(0,env_1.getProcessEnv)();return e.ANDROID_HOME?e.ANDROID_HOME+"/emulator/emulator":"emulator"}const getEmulators=()=>{try{const e=getElumatorCommand();return execa_1.default.sync(e,["-list-avds"],{env:(0,env_1.getProcessEnv)()}).stdout.split(os.EOL).filter(e=>""!==e).map(e=>({name:e,type:"simulator",attach:!1}))}catch(e){return[]}};exports.getEmulators=getEmulators;const realLaunchEmulator=(e,t)=>new Promise((r,s)=>{var n,o;const a=getElumatorCommand();console.log(`Running command:${a} @${e}`),t.progress(`launch emulator ${e}...`);const c=getDevices(),i=(0,execa_1.default)(a,["@"+e],{detached:!0,stdio:["pipe","pipe","pipe","ipc"],env:(0,env_1.getProcessEnv)()});i.unref();let l="";null===(n=i.stdout)||void 0===n||n.on("data",e=>{t.progress(e.toString())}),null===(o=i.stderr)||void 0===o||o.on("data",e=>{const r=e.toString();l+=r,t.progress(r)});const u=setTimeout(()=>{d(),s(new Error("Could not start emulator within 30 seconds."))},3e4),p=setInterval(()=>{const e=getDevices().find(e=>c.every(t=>t.name!==e.name));e&&(d(),r(e))},1e3),d=()=>{clearTimeout(u),clearInterval(p)};i.on("exit",()=>{if(d(),null==l?void 0:l.includes("Running multiple emulators with the same AVD")){const e=getDevices().find(e=>"simulator"===e.type&&e.attach);r(e)}else s(new Error("Emulator exited before boot:"+l))}),i.on("error",e=>{d(),s(e.message)})}),tryLaunchEmulator=async(e,t)=>{if(!e){e=(0,exports.getEmulators)()[0].name}if(e)try{return{success:!0,device:await realLaunchEmulator(e,t)}}catch(e){return{success:!1,error:e.message}}return{success:!1,error:"No emulators found, please check `emulator -list-avds`"}};function parseDevicesResult(e){var t;if(!e)return[];const r=[],s=e.trim().split(/\r?\n/);for(const e of s){const s=e.split(/[ ,\t]+/).filter(e=>""!==e);"device"===s[1]&&((null===(t=s[0])||void 0===t?void 0:t.startsWith("emulator-"))?r.push({name:s[0],type:"simulator",attach:!0}):r.push({name:s[0],type:"device",attach:!0}))}return r}function getDevices(){try{const e=(0,adb_1.getAdbPath)(),t=parseDevicesResult((0,child_process_1.execSync)(`"${e}" devices -l`,{env:(0,env_1.getProcessEnv)()}).toString());return[...(0,exports.getEmulators)(),...t]}catch(e){return[]}}function getDevicesAsync(){return new Promise((e,t)=>{const r=(0,adb_1.getAdbPath)();(0,child_process_1.exec)(`"${r}" devices -l`,{env:(0,env_1.getProcessEnv)()},(r,s)=>{r&&t(r);const n=parseDevicesResult(s);e([...(0,exports.getEmulators)(),...n])})})}function getAvailableCPUs(e){try{const t=(0,adb_1.getAdbPath)(),r=["-s",e,"shell","getprop"];let s=(0,child_process_1.execFileSync)(t,r.concat(["ro.product.cpu.abilist"]),{env:(0,env_1.getProcessEnv)()}).toString();return s&&0!==s.trim().length||(s=(0,child_process_1.execFileSync)(t,r.concat(["ro.product.cpu.abi"]),{env:(0,env_1.getProcessEnv)()}).toString()),(s||"").trim().split(",")}catch(e){return[]}}function getCPU(e){try{const t=(0,adb_1.getAdbPath)(),r=(0,child_process_1.execFileSync)(t,["-s",e,"shell","getprop","ro.product.cpu.abi"],{env:(0,env_1.getProcessEnv)()}).toString().trim();return r.length>0?r:null}catch(e){return null}}async function tryInstantBuild(e,t,r){const s=process.platform.startsWith("win")?"gradlew.bat":"./gradlew",n=["assemble"+t];await(0,cp_1.spawnSync)(s,n,{cwd:e.sourceDir},r)}async function tryInstantInstall(e,t,r){try{const s=process.platform.startsWith("win")?"gradlew.bat":"./gradlew",n=["install"+t];await(0,cp_1.spawnSync)(s,n,{cwd:e.sourceDir},r)}catch(e){throw createInstallError(e)}}async function tryLaunchAppOnDevice(e,t,r,s){const{mainActivity:n=""}=r;try{const r=["shell","am","start","-n",`${t}/${n}`];e?(r.unshift("-s",e),s.progress(`Starting the app on "${e}"...`)):s.progress("Starting the app...");const o=(0,adb_1.getAdbPath)();await(0,cp_1.spawnSync)(o,r,{stdio:"inherit"},s)}catch(e){throw new Error("Failed to start the app."+e.message)}}function createInstallError(e){const t=(e.stderr||"").toString();let r="Make sure you have the Android development environment set up";throw t.includes("No connected devices")?r="Make sure you have an Android emulator running or a device connected":(t.includes("licences have not been accepted")||t.includes("accept the SDK license"))&&(r="Please accept all necessary Android SDK licenses using Android SDK Manager: \n      '$ANDROID_HOME/tools/bin/sdkmanager --licenses',\n    "),new Error(`Failed to install the app. ${r}: ${t}.`)}exports.tryLaunchEmulator=tryLaunchEmulator,exports.getDevices=getDevices,exports.getDevicesAsync=getDevicesAsync,exports.getAvailableCPUs=getAvailableCPUs,exports.getCPU=getCPU,exports.tryInstantBuild=tryInstantBuild,exports.tryInstantInstall=tryInstantInstall,exports.tryLaunchAppOnDevice=tryLaunchAppOnDevice;
}(require("licia/lazyImport")(require), require)