"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Reporter=exports.initReport=void 0;const request=require("request"),utils_1=require("./utils"),URL="https://cube.weixinbridge.com/cube/report/reportbizdata?f=json",UPLOAD_INTERVAL=2e4;let _customRequest,_baseReportData={};function initReport(t,e){_baseReportData=Object.assign(Object.assign({},_baseReportData),t),"function"==typeof e&&(_customRequest=e)}exports.initReport=initReport;class Reporter{constructor(t,e={},r=!0){this.enabled=!0,this.timeStartMap={},this.stop=()=>{this.reset(),clearInterval(this.timer)},this.reset=()=>{this.reportQueues=[]},this.upload=async()=>{if(!this.reportQueues||0===this.reportQueues.length)return;const t=`report_items=${JSON.stringify(this.reportQueues)}`;try{(_customRequest||request)({url:URL,method:"POST",body:t},(t=>{t&&this.logger.error("report error: ",t)}))}catch(t){this.logger.error("report error: ",t)}finally{this.reset()}},this.report=async(t={})=>{const e=Object.assign(Object.assign({os_type:process.platform,time:Math.round(Date.now()/1e3),duration:this.timeEnd(t.action)},_baseReportData),t);if(!this.enabled||utils_1.isTest||!t.action)return;const r=[t.action];t.actionDetail&&r.push(t.actionDetail),this.logger.warn(`${r.join("-")} duration`,e.duration),this.reportQueues.push(e)},this.reportQueues=[],this.logger=t,_baseReportData=Object.assign(Object.assign({},_baseReportData),e),this.enabled=r,process.on("uncaughtException",(async()=>{try{await this.upload()}catch(t){this.logger.error("upload log error: ",t)}finally{this.stop()}})).on("beforeExit",(async()=>{try{await this.upload()}catch(t){console.error(t)}finally{this.stop()}})),this.timer=setInterval((()=>{this.timer&&this.upload()}),2e4)}timeStart(t){this.timeStartMap[t]=Date.now(),this.logger.warn(`${t} start`)}timeEnd(t){return t&&this.timeStartMap[t]?Date.now()-this.timeStartMap[t]:0}}exports.Reporter=Reporter;