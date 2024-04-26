import*as SDK from"../sdk/sdk.js";import*as Common from"../common/common.js";import{clone,each,nextTick,startWith,noop,isDataUrl,isUrl}from"../third_party/licia.js";import{ResourceCategory,ResourceType,resourceCategories,resourceTypes}from"../common/ResourceType.js";import PopupButton from"./PopupButton.js";import{InspectorBackend}from"../protocol_client/protocol_client.js";import*as Host from"../host/host.js";import*as Workspace from"../workspace/workspace.js";import*as Extensions from"../extensions/extensions.js";import*as UI from"../ui/ui.js";import{isRemoteAppserviceMode,isRemoteDebugGame}from"../wx_main/util.js";import*as JSONEditor from"./JSONEditor.js";if(wxMain.isFeatureEnabled("customDevtoolsUI")&&wxMain.runOnAppUICreated(()=>{Root.Runtime.experiments.setEnabled("applyCustomStylesheet",!0)}),wxMain.isFeatureEnabled("reportConsoleBadges")){const e=function(){let e=0,t=0,n=0;try{const o=SDK.ConsoleModel.ConsoleModel.instance();e=Number(o.errors()),t=Number(o.warnings()),n=Number(o.violations())}catch(e){}return{errors:e,warnings:t,violations:n}},t=function(){const t=e();wxMain.getMessenger().send({command:"UPDATE_CONSOLE_BADGES",data:t})},n=new Common.Throttler.Throttler(600),o=function(){n.schedule(t)};wxMain.runOnAppUICreated(()=>{const e=SDK.ConsoleModel.ConsoleModel.instance(),t=SDK.ConsoleModel.Events;e.addEventListener(t.ConsoleCleared,o),e.addEventListener(t.MessageAdded,o),e.addEventListener(t.MessageUpdated,o),wxMain.getMessenger().registerCallback(e=>{const{command:t}=e;"GET_CONSOLE_BADGES"===t&&o()})})}if(wxMain.isFeatureEnabled("addCloudResourceCategories")){const e=new ResourceCategory("WeChat CloudBase","Cloud"),t=clone(resourceCategories);resourceCategories.Cloud=e,each(t,(e,t)=>delete resourceCategories[t]),each(t,(e,t)=>{resourceCategories[t]=e}),resourceTypes.Cloud=new ResourceType("cloud","Cloud",e,!0)}if(wxMain.isFeatureEnabled("compatibility91")&&(resourceTypes.Preflight=new ResourceType("preflight","Preflight",resourceCategories.Other,!0)),wxMain.isFeatureEnabled("monitorNetworkReset")&&SDK.NetworkLog.NetworkLog.instance().addEventListener(SDK.NetworkLog.Events.Reset,(function(){wxMain.getMessenger().send({command:"RESET_NETWORK_CACHE"}),WxMain.networkManager.reset()}),self),wxMain.isFeatureEnabled("monitorCompileEvent")&&wxMain.runOnAppUICreated(()=>{wxMain.getMessenger().registerCallback(async e=>{const{command:t}=e,n=Common.Settings.Settings.instance(),o=n.moduleSetting("preserveConsoleLog").get();if("NOTIFY_COMPILE"===t)if("AppService"===wxMain.type)!1===n.moduleSetting("network_log.preserve-log").get()&&SDK.NetworkLog.NetworkLog.instance().reset(),!1===o&&SDK.ConsoleModel.ConsoleModel.instance().requestClearMessages();else if("Game"===wxMain.type&&!1===o){const e=SDK.SDKModel.TargetManager.instance();if(e.allTargetsSuspended())return;await e.suspendAllTargets("game-recompile"),await e.resumeAllTargets()}})}),wxMain.isFeatureEnabled("monitorSecurityDetails")){let e;SDK.SDKModel.TargetManager.instance().addModelListener(SDK.NetworkManager.NetworkManager,SDK.NetworkManager.Events.ResponseReceived,t=>{if(!e){const t=document.getElementsByTagName("iframe");for(let n=0,o=t.length;n<o;n++){const o=t[n];/devtools.html$/.test(o.src)&&(e=o)}if(!e)return}const n=t.data.request,o=n.securityDetails();if(o){const t={command:"securityDetails",url:n.url(),statusCode:n.statusCode,remoteAddress:n._remoteAddress,protocol:o.protocol,securityState:n.securityState()};e.contentWindow.postMessage(t,"*")}})}if(wxMain.isFeatureEnabled("customDebuggerMask")&&wxMain.getMessenger().registerCallback(e=>{const t=SDK.SDKModel.TargetManager.instance().mainTarget().debuggerAgent();switch(e.command){case"ENABLE_DEBUG_AGENT":e.data&&e.data.disableBeforeEnable&&(t.setSkipAllPauses(!0),t.resume()),t.setSkipAllPauses(!1);break;case"DISABLE_DEBUG_AGENT":t.setSkipAllPauses(!0),t.resume();break;case"DEBUGGER_RESUME":t.resume();break;case"DEBUGGER_STEP_OVER":t.stepOver()}}),wxMain.isFeatureEnabled("enableTouchEmulation")){let e=!1;function enableTouchEmulation(t){if(e)return;SDK.SDKModel.TargetManager.instance().mainTarget().emulationAgent().invoke_setEmitTouchEventsForMouse({enabled:t})}wxMain.on(WxMain.Events.enableTouchEmulation,enableTouchEmulation),wxMain.on(WxMain.Events.lockTouchEmulation,t=>{e=t}),wxMain.getMessenger().registerCallback(e=>{"SET_TOUCH_MODE"===e.command&&enableTouchEmulation(e.data)})}if(wxMain.isFeatureEnabled("setSafeAreaInset")){let e=!1;function registerCommand(){e||(InspectorBackend.inspectorBackend.registerCommand("Emulation.setSafeAreaInset",[{name:"top",type:"number",optional:!1},{name:"left",type:"number",optional:!1},{name:"bottom",type:"number",optional:!1},{name:"right",type:"number",optional:!1}],[],!1),e=!0)}registerCommand();const t=wxMain.getMessenger();t.registerCallback(e=>{const t=SDK.SDKModel.TargetManager.instance().mainTarget().emulationAgent();switch(e.command){case"SET_SAFE_AREA_INSET":const{top:n,left:o,bottom:s,right:a}=e.data;t.setSafeAreaInset(n,o,s,a)}}),t.send({command:"HOOK_READY_SET_SAFE_AREA_INSET",data:{}})}if(wxMain.isFeatureEnabled("setDevice")){let e;function set(t){if(t&&(e=t),!e)return;SDK.SDKModel.TargetManager.instance().mainTarget().emulationAgent().invoke_setDeviceMetricsOverride(e)}wxMain.on(WxMain.Events.setDevice,set),wxMain.on(WxMain.Events.clearDevice,()=>{SDK.SDKModel.TargetManager.instance().mainTarget().emulationAgent().invoke_clearDeviceMetricsOverride()}),wxMain.getMessenger().registerCallback(e=>{"SET_DEVICE"===e.command&&set(e.data)})}if(wxMain.isFeatureEnabled("processCachedResources")&&nextTick(()=>{const e=SDK.SDKModel.TargetManager.instance().models(SDK.ResourceTreeModel.ResourceTreeModel);for(const t of e)t._processCachedResources(null)}),wxMain.isFeatureEnabled("setTheme")&&wxMain.runOnAppUICreated(()=>{const e=Common.Settings.Settings.instance().createSetting("uiTheme","systemPreferred");function t(t,n=!1){window.__theme__=t,(e.get()!==t||n)&&(e.set(t),wxMain.getMessenger().send({command:"THEME_MODIFIED"}))}t(prompt("GET_THEME")||"default"),wxMain.getMessenger().registerCallback(e=>{"SET_THEME"===e.command&&t(e.data,!0)})}),wxMain.isFeatureEnabled("showContextMenu")&&wxMain.on(WxMain.Events.showContextMenu,(e,t,n,o)=>{Host.InspectorFrontendHost.InspectorFrontendHostInstance.showContextMenuAtPoint(e,t,n),Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(Host.InspectorFrontendHostAPI.Events.ContextMenuItemSelected,(function e(t){Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(Host.InspectorFrontendHostAPI.Events.ContextMenuItemSelected,e,window),o(t)}),window)}),wxMain.isFeatureEnabled("revealSource")&&wxMain.getMessenger().registerCallback(e=>{const{command:t,data:n}=e;"REVEAL_SOURCE"===t&&setTimeout(()=>{let{fileURL:e}=n;startWith(e,"file:///")||(e=e.replace("file://","file:///"));const t=Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(e);Common.Revealer.reveal(t)},1e3)}),wxMain.isFeatureEnabled("addQuickOpen")){let e=!1;wxMain.on(WxMain.Events.showElements,()=>{if(e)return;e=!0;const t=UI.ViewManager.ViewManager.instance();for(const e of self.runtime.extensions("view")){const n=e.descriptor();"elements"===n.id&&(t._views.set(n.id,new UI.View.ProvidedView(e)),t._locationNameByViewId.set(n.id,n.location))}t.showView("elements")})}if(wxMain.isFeatureEnabled("correctRemoteDebugContext")&&"RemoteDebug"===wxMain.type&&!isRemoteDebugGame()&&isRemoteAppserviceMode()&&SDK.SDKModel.TargetManager.instance().observeModels(SDK.RuntimeModel.RuntimeModel,{modelAdded(e){e.addEventListener(SDK.RuntimeModel.Events.ExecutionContextCreated,e=>{const t=e.data;t.name.includes("sub_context")?(t.setLabel("appservice"),UI.Context.Context.instance().setFlavor(SDK.RuntimeModel.ExecutionContext,t)):t.setLabel("---")})}}),wxMain.isFeatureEnabled("correctContext")){let e,t;SDK.SDKModel.TargetManager.instance().observeModels(SDK.RuntimeModel.RuntimeModel,{modelAdded(n){function o(e){if(!e||!e.isDefault)return!1;const t=e.target().model(SDK.ResourceTreeModel.ResourceTreeModel),n=e.frameId&&t&&t.frameForId(e.frameId);return!!n&&n.isTopFrame()}e=e=>{const t=e.data;if("debug"===t.type){const{type:e,value:s}=t.args[0];if("string"===e&&startWith(s,"@appservice-current-context")){const e=s.slice(27),a=UI.Context.Context.instance().flavor(SDK.RuntimeModel.ExecutionContext);let r,i=!1;const d=n.executionContexts();for(const n of d)if(i||!o(n))if(n.id===t.executionContextId){let t="appservice";e&&(t=t+" ("+e+")"),n.setLabel(t),wxMain.getGlobal("appserviceDebug")||n===a||UI.Context.Context.instance().setFlavor(SDK.RuntimeModel.ExecutionContext,n),r=n}else n.setLabel("---");else i=!0;wxMain.emit(WxMain.Events.autoRevealInstanceFrame,r&&r.frameId)}}},n.addEventListener(SDK.RuntimeModel.Events.ConsoleAPICalled,e),t=e=>{const t=e.data;o(t)||t.setLabel("---")},n.addEventListener(SDK.RuntimeModel.Events.ExecutionContextCreated,t)},modelRemoved(e){e.removeEventListener(SDK.RuntimeModel.Events.ExecutionContextCreated,t),e.removeEventListener(SDK.RuntimeModel.Events.ExecutionContextCreated,t)}})}if(wxMain.isFeatureEnabled("cleanScripts")){let e;SDK.SDKModel.TargetManager.instance().observeModels(SDK.DebuggerModel.DebuggerModel,{modelAdded(t){const n=t.runtimeModel();e=e=>{const n=e.data,o=Array.from(t._scriptsBySourceURL.keys());for(const e of o){const o=t._scriptsBySourceURL.get(e),s=[...o];for(const e of s)if(e.executionContextId===n.id){const t=o.findIndex(t=>t===e);o.splice(t,1)}}},n.addEventListener(SDK.RuntimeModel.Events.ExecutionContextDestroyed,e)},modelRemoved(t){t.runtimeModel().removeEventListener(SDK.RuntimeModel.Events.ExecutionContextDestroyed,e)}})}if(wxMain.isFeatureEnabled("saveToTempVariable")){const e=SDK.ConsoleModel.ConsoleModel,t=e.prototype.saveToTempVariable;e.prototype.saveToTempVariable=async function(e,n){let o;try{const t=JSON.parse(n.objectId).injectedScriptId;e.id!==t?(o=n.runtimeModel().executionContext(t),o&&UI.Context.Context.instance().setFlavor(SDK.RuntimeModel.ExecutionContext,o)):o=e}catch(o){return t.call(this,e,n)}return t.call(this,o,n)}}if(wxMain.isFeatureEnabled("disableReloadWarning")&&wxMain.runOnAppUICreated(()=>{UI.InspectorView.InspectorView.instance().displayReloadRequiredWarning=noop}),wxMain.isFeatureEnabled("replaceOpenInNewTab")){const e=!!wxMain.getFeatureOptions("replaceOpenInNewTab").useAlert;wxMain.runOnMainLoaded(()=>{InspectorFrontendHost.openInNewTab=function(t){try{const e=Workspace.Workspace.WorkspaceImpl.instance(),n=e.uiSourceCodeForURL(t)||e.uiSourceCodeForURL("file://"+t);if(n)return void Common.Revealer.reveal(n)}catch(e){}isDataUrl(t)&&wxMain.getMessenger().send({command:"OPEN_DATA_URL",data:{url:t}}),e?window.alert("opennewtab:"+t):window.open(t)}})}if(wxMain.isFeatureEnabled("restoreMissingLog")){let e=!1;SDK.SDKModel.TargetManager.instance().observeModels(SDK.LogModel.LogModel,{modelAdded(t){if(!e){const n=wxMain.getGlobal("missingLog")||[];for(const e of n)t.entryAdded(e);wxMain.setGlobal("missingLog",[]),e=!0,wxMain.disableFeature("restoreMissingLog")}},modelRemoved(e){}})}if(wxMain.isFeatureEnabled("deleteIframe")){let e;async function deleteIframe(t){if(!e)return;(await e.requestDocument()).body.getChildNodes(e=>{for(let n=0,o=e.length;n<o;n++){const o=e[n];o.getAttribute("src")===t&&o.removeNode()}})}SDK.SDKModel.TargetManager.instance().observeModels(SDK.DOMModel.DOMModel,{modelAdded(t){e=t},modelRemoved(){}}),wxMain.getMessenger().registerCallback(e=>{const{command:t,data:n}=e;"DELETE_IFRAME"===t&&deleteIframe(n.src)})}if(wxMain.isFeatureEnabled("engineGetConsoleModelInfo")){if(wxMain.getFeatureOptions("engineGetConsoleModelInfo").active){const e=SDK.ConsoleModel.ConsoleModel.instance(),t={errors:-1,warnings:-1};let n;function onMessageUpdated(){n||(n=setTimeout((function(){n=void 0;const o=e.errors(),s=e.warnings();(o!==t.errors&&o<=99||s!==t.warnings||s<=99)&&(t.errors=o,t.warnings=s,wxMain.getMessenger().send({command:"ENGINE_GET_CONSOLE_MODEL_INFO",data:t}))}),2e3))}e.addEventListener(SDK.ConsoleModel.Events.MessageAdded,onMessageUpdated,this),e.addEventListener(SDK.ConsoleModel.Events.ConsoleCleared,onMessageUpdated,this),e.addEventListener(SDK.ConsoleModel.Events.MessageUpdated,onMessageUpdated,this)}}if(wxMain.isFeatureEnabled("engineListenWindowEvent")){if(wxMain.getFeatureOptions("engineListenWindowEvent").active){const e=function(e,t){wxMain.getMessenger().send({command:"ENGINE_LISTEN_WINDOW_EVENT",data:{eventName:e,payload:t}})};window.addEventListener("blur",()=>{e("blur")}),window.addEventListener("focus",()=>{e("focus")}),window.addEventListener("keydown",t=>{if(" "===t.key&&t.shiftKey&&e("maximum"),!t.altKey&&!t.shiftKey&&(t.metaKey||t.ctrlKey)){const n=parseInt(t.key,10);isNaN(n)||e("switchTapByIndex",{indexOfTap:n})}})}}if(wxMain.isFeatureEnabled("engineCorrectContext")){let e,t;SDK.SDKModel.TargetManager.instance().observeModels(SDK.RuntimeModel.RuntimeModel,{modelAdded(t){function n(e){if(!e||!e.isDefault)return!1;const t=e.target().model(SDK.ResourceTreeModel.ResourceTreeModel),n=e.frameId&&t&&t.frameForId(e.frameId);return!!n&&n.isTopFrame()}e=e=>{const o=e.data;if("debug"===o.type){const{type:e,value:s}=o.args[0];if("string"===e&&"@gameservice-current-context"===s){const e=UI.Context.Context.instance().flavor(SDK.RuntimeModel.ExecutionContext);let s,a=!1;const r=t.executionContexts();for(const t of r)a||!n(t)?t.id===o.executionContextId&&(t!==e&&UI.Context.Context.instance().setFlavor(SDK.RuntimeModel.ExecutionContext,t),s=t):a=!0;wxMain.emit(WxMain.Events.autoRevealInstanceFrame,s&&s.frameId)}}},t.addEventListener(SDK.RuntimeModel.Events.ConsoleAPICalled,e)},modelRemoved(e){e.removeEventListener(SDK.RuntimeModel.Events.ExecutionContextCreated,t),e.removeEventListener(SDK.RuntimeModel.Events.ExecutionContextCreated,t)}})}if(wxMain.isFeatureEnabled("customExtensionUrl")){const e=Extensions.ExtensionServer.ExtensionServer,t=e.prototype._expandResourcePath;e.prototype._expandResourcePath=function(e,n){return isUrl(n)?n:t.call(this,e,n)}}wxMain.isFeatureEnabled("sendMessage")&&wxMain.getMessenger().registerCallback(e=>{if("SEND_MESSAGE"===e.command){const{method:t,params:n}=e.data,o=SDK.SDKModel.TargetManager.instance().mainTarget(),[s]=t.split(".");o._router.sendMessage(o._sessionId,s,t,n,noop)}}),wxMain.setGlobal("SDK",SDK),self.WxMain=self.WxMain||{},WxMain=WxMain||{},WxMain.PopupButton=PopupButton;export{JSONEditor};