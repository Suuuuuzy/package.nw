import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as Workspace from"../workspace/workspace.js";import{Breakpoint,BreakpointManager}from"./BreakpointManager.js";import{ContentProviderBasedProject}from"./ContentProviderBasedProject.js";import{DebuggerSourceMapping,DebuggerWorkspaceBinding}from"./DebuggerWorkspaceBinding.js";import{NetworkProject}from"./NetworkProject.js";import{metadataForURL}from"./ResourceUtils.js";export class ResourceScriptMapping{constructor(e,t,r){this._debuggerModel=e,this._workspace=t,this._debuggerWorkspaceBinding=r,this._uiSourceCodeToScriptFile=new Map,this._projects=new Map,this._acceptedScripts=new Set;const i=e.runtimeModel();this._eventListeners=[this._debuggerModel.addEventListener(SDK.DebuggerModel.Events.ParsedScriptSource,e=>{this._parsedScriptSource(e)},this),this._debuggerModel.addEventListener(SDK.DebuggerModel.Events.GlobalObjectCleared,this._globalObjectCleared,this),i.addEventListener(SDK.RuntimeModel.Events.ExecutionContextDestroyed,this._executionContextDestroyed,this)]}_project(e){const t=(e.isContentScript()?"js:extensions:":"js::")+this._debuggerModel.target().id()+":"+e.frameId;let r=this._projects.get(t);if(!r){const i=e.isContentScript()?Workspace.Workspace.projectTypes.ContentScripts:Workspace.Workspace.projectTypes.Network;r=new ContentProviderBasedProject(this._workspace,t,i,"",!1),NetworkProject.setTargetForProject(r,this._debuggerModel.target()),this._projects.set(t,r)}return r}rawLocationToUILocation(e){const t=e.script();if(!t)return null;const r=this._project(t).uiSourceCodeForURL(t.sourceURL);if(!r)return null;const i=this._uiSourceCodeToScriptFile.get(r);if(!i)return null;if(i.hasDivergedFromVM()&&!i.isMergingToVM()||i.isDivergingFromVM())return null;if(!i._hasScripts([t]))return null;const o=e.lineNumber-(t.isInlineScriptWithSourceURL()?t.lineOffset:0);let s=e.columnNumber||0;return t.isInlineScriptWithSourceURL()&&!o&&s&&(s-=t.columnOffset),r.uiLocation(o,s)}uiLocationToRawLocations(e,t,r){const i=this._uiSourceCodeToScriptFile.get(e);if(!i)return[];const o=i._script;return o.isInlineScriptWithSourceURL()?[this._debuggerModel.createRawLocation(o,t+o.lineOffset,t?r:r+o.columnOffset)]:[this._debuggerModel.createRawLocation(o,t,r)]}_acceptsScript(e){if(!e.sourceURL||e.isLiveEdit()||e.isInlineScript()&&!e.hasSourceURL)return!1;if(e.isContentScript()&&!e.hasSourceURL){if(!new Common.ParsedURL.ParsedURL(e.sourceURL).isValid)return!1}return!0}async _parsedScriptSource(e){const t=e.data;if(!this._acceptsScript(t))return;this._acceptedScripts.add(t);const r=t.originalContentProvider(),i=t.sourceURL,o=this._project(t),s=o.uiSourceCodeForURL(i);if(s){const e=this._uiSourceCodeToScriptFile.get(s);await this._removeScript(e._script)}const c=o.createUISourceCode(i,r.contentType());NetworkProject.setInitialFrameAttribution(c,t.frameId);const n=metadataForURL(this._debuggerModel.target(),t.frameId,i),a=new ResourceScriptFile(this,c,[t]);this._uiSourceCodeToScriptFile.set(c,a);const p=t.isWasm()?"application/wasm":"text/javascript";o.addUISourceCodeWithProvider(c,r,n,p),await this._debuggerWorkspaceBinding.updateLocations(t)}scriptFile(e){return this._uiSourceCodeToScriptFile.get(e)||null}async _removeScript(e){if(!this._acceptedScripts.has(e))return;this._acceptedScripts.delete(e);const t=this._project(e),r=t.uiSourceCodeForURL(e.sourceURL);this._uiSourceCodeToScriptFile.get(r).dispose(),this._uiSourceCodeToScriptFile.delete(r),t.removeFile(e.sourceURL),await this._debuggerWorkspaceBinding.updateLocations(e)}_executionContextDestroyed(e){const t=e.data,r=this._debuggerModel.scriptsForExecutionContext(t);for(const e of r)this._removeScript(e)}_globalObjectCleared(e){const t=Array.from(this._acceptedScripts);for(const e of t)this._removeScript(e)}resetForTest(){const e=Array.from(this._acceptedScripts);for(const t of e)this._removeScript(t)}dispose(){Common.EventTarget.EventTarget.removeEventListeners(this._eventListeners);const e=Array.from(this._acceptedScripts);for(const t of e)this._removeScript(t);for(const e of this._projects.values())e.removeProject();this._projects.clear()}}export class ResourceScriptFile extends Common.ObjectWrapper.ObjectWrapper{constructor(e,t,r){super(),console.assert(r.length),this._resourceScriptMapping=e,this._uiSourceCode=t,this._uiSourceCode.contentType().isScript()&&(this._script=r[r.length-1]),this._uiSourceCode.addEventListener(Workspace.UISourceCode.Events.WorkingCopyChanged,this._workingCopyChanged,this),this._uiSourceCode.addEventListener(Workspace.UISourceCode.Events.WorkingCopyCommitted,this._workingCopyCommitted,this)}_hasScripts(e){return this._script&&this._script===e[0]}_isDiverged(){if(this._uiSourceCode.isDirty())return!0;if(!this._script)return!1;if(void 0===this._scriptSource)return!1;const e=this._uiSourceCode.workingCopy();if(!e)return!1;if(!e.startsWith(this._scriptSource.trimRight()))return!0;const t=this._uiSourceCode.workingCopy().substr(this._scriptSource.length);return!!t.length&&!t.match(SDK.Script.sourceURLRegex)}_workingCopyChanged(e){this._update()}_workingCopyCommitted(e){if(this._uiSourceCode.project().canSetFileContent())return;if(!this._script)return;const t=this._resourceScriptMapping._debuggerModel,r=BreakpointManager.instance().breakpointLocationsForUISourceCode(this._uiSourceCode).map(e=>e.breakpoint),i=this._uiSourceCode.workingCopy();t.setScriptSource(this._script.scriptId,i,(e,t)=>{this.scriptSourceWasSet(i,r,e,t)})}async scriptSourceWasSet(e,t,r,i){if(r||i||(this._scriptSource=e),await this._update(),!r&&!i)return void await Promise.all(t.map(e=>e.refreshInDebugger()));if(!i)return void Common.Console.Console.instance().addMessage(Common.UIString.UIString("LiveEdit failed: %s",r),Common.Console.MessageLevel.Warning);const o=Common.UIString.UIString("LiveEdit compile failed: %s",i.text);this._uiSourceCode.addLineMessage(Workspace.UISourceCode.Message.Level.Error,o,i.lineNumber,i.columnNumber)}async _update(){this._isDiverged()&&!this._hasDivergedFromVM?await this._divergeFromVM():!this._isDiverged()&&this._hasDivergedFromVM&&await this._mergeToVM()}async _divergeFromVM(){this._isDivergingFromVM=!0,await this._resourceScriptMapping._debuggerWorkspaceBinding.updateLocations(this._script),delete this._isDivergingFromVM,this._hasDivergedFromVM=!0,this.dispatchEventToListeners(ResourceScriptFile.Events.DidDivergeFromVM,this._uiSourceCode)}async _mergeToVM(){delete this._hasDivergedFromVM,this._isMergingToVM=!0,await this._resourceScriptMapping._debuggerWorkspaceBinding.updateLocations(this._script),delete this._isMergingToVM,this.dispatchEventToListeners(ResourceScriptFile.Events.DidMergeToVM,this._uiSourceCode)}hasDivergedFromVM(){return this._hasDivergedFromVM}isDivergingFromVM(){return this._isDivergingFromVM}isMergingToVM(){return this._isMergingToVM}checkMapping(){this._script&&void 0===this._scriptSource?this._script.requestContent().then(e=>{this._scriptSource=e.content,this._update().then(()=>this._mappingCheckedForTest())}):this._mappingCheckedForTest()}_mappingCheckedForTest(){}dispose(){this._uiSourceCode.removeEventListener(Workspace.UISourceCode.Events.WorkingCopyChanged,this._workingCopyChanged,this),this._uiSourceCode.removeEventListener(Workspace.UISourceCode.Events.WorkingCopyCommitted,this._workingCopyCommitted,this)}addSourceMapURL(e){this._script&&this._script.debuggerModel.setSourceMapURL(this._script,e)}hasSourceMapURL(){return this._script&&!!this._script.sourceMapURL}get script(){return this._script}get uiSourceCode(){return this._uiSourceCode}}ResourceScriptFile.Events={DidMergeToVM:Symbol("DidMergeToVM"),DidDivergeFromVM:Symbol("DidDivergeFromVM")};