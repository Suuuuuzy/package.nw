import Messenger from"../wx_main/Messenger.js";import{uniqId,isFn,isEmpty,Emitter,toStr,isUndef}from"../third_party/licia.js";class WxmlMessenger{constructor(){const e="PLUGIN_wxml_"+("RemoteDebug"===wxMain.type?"remotedebug":"miniprogram");this._messenger=new Messenger(e),this._callbacks={},this._onEvents={},this._messenger.registerCallback(e=>{const{command:s,data:t}=e;if("INVOKE_CALLBACK"===s){const{callbackID:e,res:s}=t;wxMain.isFeatureEnabled("logWxmlPluginMessage")&&console.log("wxml plugin messenger callback",e,s);const n=this._callbacks[e];n&&(n.resolve(s),delete this._callbacks[e])}else"ON_EVENT"===s&&this.triggerOnEvent(t)})}triggerOnEvent(e){const{eventName:s,res:t}=e;wxMain.isFeatureEnabled("logWxmlPluginMessage")&&console.log("wxml plugin messenger onEvent",s,t);const n=this._onEvents[s]||[];for(let e=0,s=n.length;e<s;e++){const s=n[e];isFn(s)&&s(t)}}on(e,s){const t=this._onEvents[e]||[];t.push(s),this._onEvents[e]=t}send(e,s={}){return new Promise(t=>{const n=uniqId();this._callbacks[n]={resolve:t},wxMain.isFeatureEnabled("logWxmlPluginMessage")&&console.log("wxml plugin messenger send",e,s,n),this._messenger.send({command:e,data:s,callbackID:n})})}}class ProtocolMessenger extends Emitter{constructor(e){super(),this._wxmlMessenger=e,this.reset(),this._wxmlMessenger.on("ON_EVENT",e=>{if(!this._debuggee)return;const{debuggee:s,method:t,params:n}=e;(isUndef(s.targetId)&&!this._isChrome||toStr(s.targetId)===this._debuggee.targetId)&&this.emit("message",{method:t,params:n})})}setDebuggee(e,s){this._debuggee=e,this._isChrome=s;const t=this._messagesToSend;if(!isEmpty(t)){for(let e=0,s=t.length;e<s;e++){const{message:s,resolve:n}=t[e];this.send(s.method,s.params).then(e=>n(e))}this._messagesToSend=[]}this.emit("debuggeeChanged")}getDebuggee(){return this._debuggee}reset(){this._debuggee=null,this._isChrome=!1,this._messagesToSend=[]}async send(e,s){return this._debuggee?await this._wxmlMessenger.send("SEND_COMMAND",{debuggee:this._debuggee,method:e,commandParams:s||{},toChrome:this._isChrome}):new Promise(t=>{this._messagesToSend.push({message:{method:e,params:s},resolve:t})})}}self.Wxml=self.Wxml||{},Wxml=Wxml||{},Wxml.wxmlMessenger=new WxmlMessenger,Wxml.remoteMessenger=new ProtocolMessenger(Wxml.wxmlMessenger),Wxml.chromeMessenger=new ProtocolMessenger(Wxml.wxmlMessenger),Wxml.wxmlMessenger.on("CHANGE_DEBUGGEE",e=>{const{debuggee:s,debuggeeToChrome:t,debuggeeMapChrome:n}=e;if(Wxml.remoteMessenger.setDebuggee(s,!1),"RemoteDebug"!==wxMain.type){const e=n[t[s.targetId]];Wxml.chromeMessenger.setDebuggee(e,!0)}}),Wxml.wxmlMessenger.send("GET_CURRENT_DEBUGGEE");