!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printFoundDevices=exports.formattedDeviceName=exports.matchingDevice=exports.findMatchingSimulator=exports.getDevicesAsync=exports.getDevices=exports.parseXctraceIOSDevicesList=void 0;const tslib_1=require("tslib"),execa=tslib_1.__importStar(require("execa")),env_1=require("../../../utils/env");function parseIOSDevicesList(e){const t=[];return e.split("\n").forEach(e=>{const i=e.match(/(.*?) (\(([0-9.]+)\) )?\[([0-9A-F-]+)\]( \(Simulator\))?/i);if(i){const[,e,,s,r,n]=i,c={name:e,udid:r};s?(c.version=s,c.type=n?"simulator":"device"):c.type="catalyst",t.push(c)}}),t}function parseXctraceIOSDevicesList(e){const t=[];let i=!1;return-1===e.indexOf("== Simulators ==")?[]:(e.split("\n").forEach(e=>{"== Simulators =="===e&&(i=!0);const s=e.match(/(.*?) (\(([0-9.]+)\) )?\(([0-9A-F-]+)\)/i);if(s){const[,e,,r,n]=s,c={name:e,udid:n};r?(c.version=r,c.type=i?"simulator":"device"):c.type="catalyst",t.push(c)}}),t)}function getDevices(e){let t;try{const e=execa.sync("xcrun",["xctrace","list","devices"],{env:(0,env_1.getProcessEnv)()});t=parseXctraceIOSDevicesList(""===e.stderr?e.stdout:e.stderr)}catch(i){e?e.progress("Support for Xcode 11 and older is deprecated. Please upgrade to Xcode 12."):console.error("get Devices error:",i),t=parseIOSDevicesList(execa.sync("xcrun",["instruments","-s"],{env:(0,env_1.getProcessEnv)()}).stdout)}return t.filter(e=>!!e.version)}async function getDevicesAsync(e){let t;try{const e=await execa.default("xcrun",["xctrace","list","devices"],{env:(0,env_1.getProcessEnv)()});t=parseXctraceIOSDevicesList(""===e.stderr?e.stdout:e.stderr)}catch(i){e?e.progress("Support for Xcode 11 and older is deprecated. Please upgrade to Xcode 12."):console.error("get Devices error:",i),t=parseIOSDevicesList(execa.sync("xcrun",["instruments","-s"],{env:(0,env_1.getProcessEnv)()}).stdout)}return t.filter(e=>!!e.version)}function findMatchingSimulator(e,t){if(!e.devices)return null;const{devices:i}=e;let s,r,n=null;if(null==t?void 0:t.device){const e=t.device.match(/(.*)? (?:\((\d+\.\d+)?\))$/);void 0!==(null==e?void 0:e[2])?(s=e[2],n=e[1]):n=t.device}for(const e in i){const c=i[e];let o=e;if(o.startsWith("com.apple.CoreSimulator.SimRuntime.")&&(o=o.replace(/^com\.apple\.CoreSimulator\.SimRuntime\.([^-]+)-([^-]+)-([^-]+)$/g,"$1 $2.$3")),(o.includes("iOS")||o.includes("tvOS"))&&(!s||o.endsWith(s)))for(const e of c){if("(available)"!==e.availability&&"YES"!==e.isAvailable&&!0!==e.isAvailable)continue;const i="Booted"===e.state,s={udid:e.udid,name:e.name,booted:i,version:o};if(null==t?void 0:t.udid){if(e.udid===t.udid)return s}else{if(i&&null===n)return s;e.name!==n||r||(r=s)}}}return r}function matchingDevice(e,t,i){if(!0===t){const t=e.find(e=>"device"===e.type);return t?(i.progress(`Using first available device named "${t.name}" due to lack of name supplied.`),t):void i.progress("No iOS devices connected.")}const s=e.find(e=>e.name===t||formattedDeviceName(e)===t);if(!s)throw new Error(`Could not find a device named: "${String(t)} ${printFoundDevices(e)}}".`);return s}function formattedDeviceName(e){return e.version?`${e.name} (${e.version})`:e.name}function printFoundDevices(e){return["Available devices:",...e.map(e=>`  - ${e.name} (${e.udid})`)].join("\n")}exports.parseXctraceIOSDevicesList=parseXctraceIOSDevicesList,exports.getDevices=getDevices,exports.getDevicesAsync=getDevicesAsync,exports.findMatchingSimulator=findMatchingSimulator,exports.matchingDevice=matchingDevice,exports.formattedDeviceName=formattedDeviceName,exports.printFoundDevices=printFoundDevices;
}(require("licia/lazyImport")(require), require)