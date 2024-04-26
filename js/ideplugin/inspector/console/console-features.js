import{ConsoleView}from"./ConsoleView.js";import{ConsoleFilter}from"./ConsoleFilter.js";import{ConsoleViewMessage}from"./ConsoleViewMessage.js";import{ConsoleContextSelector}from"./ConsoleContextSelector.js";import*as UI from"../ui/ui.js";import*as SDK from"../sdk/sdk.js";import{isRemoteDebugGame,isRemoteAppserviceMode}from"../wx_main/util.js";if(wxMain.isFeatureEnabled("setMaxLogLen")){const e=wxMain.getMessenger();let t=999999;e.registerCallback(e=>{"SET_MAX_CONSOLE_LOG_LENGTH"===e.command&&(t=e.data)}),e.send({command:"GET_MAX_CONSOLE_LOG_LENGTH"});const o=ConsoleView.prototype._addConsoleMessage;ConsoleView.prototype._addConsoleMessage=function(){const e=this._consoleMessages,s=e.length;s>t&&(this._consoleMessages=e.slice(s-t,s),this._updateMessageList()),o.apply(this,arguments)}}if(wxMain.isFeatureEnabled("consoleLink")){const e=ConsoleViewMessage.prototype._formatParameterAsValue;ConsoleViewMessage.prototype._formatParameterAsValue=function(t){if("symbol"===t.type){const e=wxMain.getFeatureOptions("consoleLink").links,o=t._description.match(/Symbol\(@linkable:(.*)\)/);if(o){const t=o[1],[s,n]=t.split("#");if(s&&e[s]){const t=e[s],o=document.createElement("a");return o.innerText=n,o.href=t,o.target="_blank",o.style.color="hsl(220deg 100% 65%)",o}}}return e.apply(this,[t])}}if(wxMain.isFeatureEnabled("disabledRemoteDebugContextSelector")&&"RemoteDebug"===wxMain.type&&!isRemoteDebugGame()&&isRemoteAppserviceMode()){const e=ConsoleContextSelector.prototype.isItemSelectable;ConsoleContextSelector.prototype.isItemSelectable=function(t){if(wxMain.getGlobal("appserviceDebug"))return e.apply(this,[t]);const o=t.debuggerModel.selectedCallFrame(),s=o&&o.script.executionContext();return s?t===s:"---"!==t.label()}}if(wxMain.isFeatureEnabled("disableContextSelector")){const e=ConsoleContextSelector.prototype.isItemSelectable;ConsoleContextSelector.prototype.isItemSelectable=function(t){if(wxMain.getGlobal("appserviceDebug"))return e.apply(this,[t]);const o=t.debuggerModel.selectedCallFrame(),s=o&&o.script.executionContext();return s?t===s:"---"!==t.label()},ConsoleContextSelector.prototype.itemSelected=function(e){const t="AppService"===wxMain.type;this._toolbarItem.element.classList.toggle("warning",!t&&!this._isTopContext(e)&&this._hasTopContext());const o=e?ls`JavaScript context: ${this.titleFor(e)}`:ls`JavaScript context: Not selected`;this._toolbarItem.setTitle(o),UI.Context.Context.instance().setFlavor(SDK.RuntimeModel.ExecutionContext,e)}}if(wxMain.isFeatureEnabled("hideSourceMapWarning")){const e="DevTools failed to load SourceMap",t=ConsoleFilter.prototype.shouldBeVisible;ConsoleFilter.prototype.shouldBeVisible=function(o){return!(o._message&&o._message.messageText&&o._message.messageText.startsWith(e))&&t.apply(this,[o])}}if(wxMain.isFeatureEnabled("errorOccursDisplayIDEInfo")){let e="";wxMain.getMessenger().send({command:"GET_IDE_INFO"});const t=ConsoleViewMessage.prototype._buildMessage;ConsoleViewMessage.prototype._buildMessage=function(){const o=t.apply(this,arguments),s=SDK.ConsoleModel&&SDK.ConsoleModel.MessageLevel;if(this._message&&e&&s&&this._message.level===s.Error){const t=document.createElementWithClass("div","console-message-text");t.innerHTML=e,o.appendChild(t)}return o},wxMain.getMessenger().registerCallback(async t=>{const{command:o,data:s}=t;"SET_IDE_INFO_TO_CONSOLE"===o&&(e=s)})}