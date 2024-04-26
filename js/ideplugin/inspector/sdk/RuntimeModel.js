import*as Common from"../common/common.js";import*as Host from"../host/host.js";import*as ProtocolClient from"../protocol_client/protocol_client.js";import{DebuggerModel,FunctionDetails}from"./DebuggerModel.js";import{HeapProfilerModel}from"./HeapProfilerModel.js";import{RemoteFunction,RemoteObject,RemoteObjectImpl,RemoteObjectProperty,ScopeRef,ScopeRemoteObject}from"./RemoteObject.js";import{Capability,SDKModel,Target,Type}from"./SDKModel.js";export class RuntimeModel extends SDKModel{constructor(e){super(e),this._agent=e.runtimeAgent(),this.target().registerRuntimeDispatcher(new RuntimeDispatcher(this)),this._agent.enable(),this._executionContextById=new Map,this._executionContextComparator=ExecutionContext.comparator,this._hasSideEffectSupport=null,Common.Settings.Settings.instance().moduleSetting("customFormatters").get()&&this._agent.setCustomObjectFormatterEnabled(!0),Common.Settings.Settings.instance().moduleSetting("customFormatters").addChangeListener(this._customFormattersStateChanged.bind(this))}static isSideEffectFailure(e){const t=!e[ProtocolClient.InspectorBackend.ProtocolError]&&e.exceptionDetails;return!!(t&&t.exception&&t.exception.description&&t.exception.description.startsWith("EvalError: Possible side-effect in debug-evaluate"))}debuggerModel(){return this.target().model(DebuggerModel)}heapProfilerModel(){return this.target().model(HeapProfilerModel)}executionContexts(){return[...this._executionContextById.values()].sort(this.executionContextComparator())}setExecutionContextComparator(e){this._executionContextComparator=e}executionContextComparator(){return this._executionContextComparator}defaultExecutionContext(){for(const e of this.executionContexts())if(e.isDefault)return e;return null}executionContext(e){return this._executionContextById.get(e)||null}_executionContextCreated(e){const t=e.auxData||{isDefault:!0},o=new ExecutionContext(this,e.id,e.name,e.origin,t.isDefault,t.frameId);this._executionContextById.set(o.id,o),this.dispatchEventToListeners(Events.ExecutionContextCreated,o)}_executionContextDestroyed(e){const t=this._executionContextById.get(e);t&&(this.debuggerModel().executionContextDestroyed(t),this._executionContextById.delete(e),this.dispatchEventToListeners(Events.ExecutionContextDestroyed,t))}fireExecutionContextOrderChanged(){this.dispatchEventToListeners(Events.ExecutionContextOrderChanged,this)}_executionContextsCleared(){this.debuggerModel().globalObjectCleared();const e=this.executionContexts();this._executionContextById.clear();for(let t=0;t<e.length;++t)this.dispatchEventToListeners(Events.ExecutionContextDestroyed,e[t])}createRemoteObject(e){return console.assert("object"==typeof e,"Remote object payload should only be an object"),new RemoteObjectImpl(this,e.objectId,e.type,e.subtype,e.value,e.unserializableValue,e.description,e.preview,e.customPreview,e.className)}createScopeRemoteObject(e,t){return new ScopeRemoteObject(this,e.objectId,t,e.type,e.subtype,e.value,e.unserializableValue,e.description,e.preview)}createRemoteObjectFromPrimitiveValue(e){const t=typeof e;let o=void 0;const n=RemoteObject.unserializableDescription(e);return null!==n&&(o=n),void 0!==o&&(e=void 0),new RemoteObjectImpl(this,void 0,t,void 0,e,o)}createRemotePropertyFromPrimitiveValue(e,t){return new RemoteObjectProperty(e,this.createRemoteObjectFromPrimitiveValue(t))}discardConsoleEntries(){this._agent.discardConsoleEntries()}releaseObjectGroup(e){this._agent.releaseObjectGroup(e)}releaseEvaluationResult(e){if(e.object&&e.object.release(),e.exceptionDetails&&e.exceptionDetails.exception){const t=e.exceptionDetails.exception;this.createRemoteObject({type:t.type,objectId:t.objectId}).release()}}runIfWaitingForDebugger(){this._agent.runIfWaitingForDebugger()}_customFormattersStateChanged(e){const t=e.data;this._agent.setCustomObjectFormatterEnabled(t)}async compileScript(e,t,o,n){const r=await this._agent.invoke_compileScript({expression:e,sourceURL:t,persistScript:o,executionContextId:n});return r[ProtocolClient.InspectorBackend.ProtocolError]?(console.error(r[ProtocolClient.InspectorBackend.ProtocolError]),null):{scriptId:r.scriptId,exceptionDetails:r.exceptionDetails}}async runScript(e,t,o,n,r,i,s,c){const a=await this._agent.invoke_runScript({scriptId:e,executionContextId:t,objectGroup:o,silent:n,includeCommandLineAPI:r,returnByValue:i,generatePreview:s,awaitPromise:c}),l=a[ProtocolClient.InspectorBackend.ProtocolError];return l?(console.error(l),{error:l}):{object:this.createRemoteObject(a.result),exceptionDetails:a.exceptionDetails}}async queryObjects(e){if(!e.objectId)return{error:"Prototype should be an Object."};const t=await this._agent.invoke_queryObjects({prototypeObjectId:e.objectId,objectGroup:"console"}),o=t[ProtocolClient.InspectorBackend.ProtocolError];return o?(console.error(o),{error:o}):{objects:this.createRemoteObject(t.objects)}}async isolateId(){return await this._agent.getIsolateId()||this.target().id()}async heapUsage(){const e=await this._agent.invoke_getHeapUsage({});return e[ProtocolClient.InspectorBackend.ProtocolError]?null:e}_inspectRequested(e,t){const o=this.createRemoteObject(e);t.copyToClipboard?this._copyRequested(o):t.queryObjects?this._queryObjectsRequested(o):o.isNode()?Common.Revealer.reveal(o).then(o.release.bind(o)):"function"!==o.type?o.release():RemoteFunction.objectAsFunction(o).targetFunctionDetails().then((function(e){if(o.release(),!e||!e.location)return;Common.Revealer.reveal(e.location)}))}_copyRequested(e){e.objectId?e.callFunctionJSON((function(e){if("node"===e)return this.outerHTML;if(e&&void 0===this)return e+"";try{return JSON.stringify(this,null,"  ")}catch(e){return""+this}}),[{value:e.subtype}]).then(Host.InspectorFrontendHost.InspectorFrontendHostInstance.copyText.bind(Host.InspectorFrontendHost.InspectorFrontendHostInstance)):Host.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(e.unserializableValue()||e.value)}async _queryObjectsRequested(e){const t=await this.queryObjects(e);e.release(),t.error?Common.Console.Console.instance().error(t.error):this.dispatchEventToListeners(Events.QueryObjectRequested,{objects:t.objects})}static simpleTextFromException(e){let t=e.text;if(e.exception&&e.exception.description){let o=e.exception.description;-1!==o.indexOf("\n")&&(o=o.substring(0,o.indexOf("\n"))),t+=" "+o}return t}exceptionThrown(e,t){const o={timestamp:e,details:t};this.dispatchEventToListeners(Events.ExceptionThrown,o)}_exceptionRevoked(e){this.dispatchEventToListeners(Events.ExceptionRevoked,e)}_consoleAPICalled(e,t,o,n,r,i){const s={type:e,args:t,executionContextId:o,timestamp:n,stackTrace:r,context:i};this.dispatchEventToListeners(Events.ConsoleAPICalled,s)}executionContextIdForScriptId(e){const t=this.debuggerModel().scriptForId(e);return t?t.executionContextId:0}executionContextForStackTrace(e){for(;e&&!e.callFrames.length;)e=e.parent;return e&&e.callFrames.length?this.executionContextIdForScriptId(e.callFrames[0].scriptId):0}hasSideEffectSupport(){return this._hasSideEffectSupport}async checkSideEffectSupport(){const e=this.executionContexts().peekLast();if(!e)return!1;const t=await this._agent.invoke_evaluate({expression:_sideEffectTestExpression,contextId:e.id,throwOnSideEffect:!0});return this._hasSideEffectSupport=RuntimeModel.isSideEffectFailure(t),this._hasSideEffectSupport}terminateExecution(){return this._agent.invoke_terminateExecution({})}}const _sideEffectTestExpression="(async function(){ await 1; })()";export const Events={ExecutionContextCreated:Symbol("ExecutionContextCreated"),ExecutionContextDestroyed:Symbol("ExecutionContextDestroyed"),ExecutionContextChanged:Symbol("ExecutionContextChanged"),ExecutionContextOrderChanged:Symbol("ExecutionContextOrderChanged"),ExceptionThrown:Symbol("ExceptionThrown"),ExceptionRevoked:Symbol("ExceptionRevoked"),ConsoleAPICalled:Symbol("ConsoleAPICalled"),QueryObjectRequested:Symbol("QueryObjectRequested")};class RuntimeDispatcher{constructor(e){this._runtimeModel=e}executionContextCreated(e){this._runtimeModel._executionContextCreated(e)}executionContextDestroyed(e){this._runtimeModel._executionContextDestroyed(e)}executionContextsCleared(){this._runtimeModel._executionContextsCleared()}exceptionThrown(e,t){this._runtimeModel.exceptionThrown(e,t)}exceptionRevoked(e,t){this._runtimeModel._exceptionRevoked(t)}consoleAPICalled(e,t,o,n,r,i){this._runtimeModel._consoleAPICalled(e,t,o,n,r,i)}inspectRequested(e,t){this._runtimeModel._inspectRequested(e,t)}}export class ExecutionContext{constructor(e,t,o,n,r,i){this.id=t,this.name=o,this.origin=n,this.isDefault=r,this.runtimeModel=e,this.debuggerModel=e.debuggerModel(),this.frameId=i,this._setLabel("")}target(){return this.runtimeModel.target()}static comparator(e,t){function o(e){return e.parentTarget()?e.type()===Type.Frame?4:e.type()===Type.ServiceWorker?3:e.type()===Type.Worker?2:1:5}function n(e){let t=e;const o=[];for(;t;)o.push(t),t=t.parentTarget();return o.reverse()}const r=n(e.target()),i=n(t.target());let s,c;for(let e=0;;e++)if(!r[e]||!i[e]||r[e]!==i[e]){s=r[e],c=i[e];break}if(!s&&c)return-1;if(!c&&s)return 1;if(s&&c){const e=o(s)-o(c);return e?-e:s.id().localeCompare(c.id())}return e.isDefault?-1:t.isDefault?1:e.name.localeCompare(t.name)}evaluate(e,t,o){if(this.debuggerModel.selectedCallFrame())return this.debuggerModel.evaluateOnSelectedCallFrame(e);if(!(!!e.throwOnSideEffect||void 0!==e.timeout)||this.runtimeModel.hasSideEffectSupport())return this._evaluateGlobal(e,t,o);const n={error:"Side-effect checks not supported by backend."};return!1===this.runtimeModel.hasSideEffectSupport()?Promise.resolve(n):this.runtimeModel.checkSideEffectSupport().then(()=>this.runtimeModel.hasSideEffectSupport()?this._evaluateGlobal(e,t,o):Promise.resolve(n))}globalObject(e,t){return this._evaluateGlobal({expression:"this",objectGroup:e,includeCommandLineAPI:!1,silent:!0,returnByValue:!1,generatePreview:t},!1,!1)}async _evaluateGlobal(e,t,o){e.expression||(e.expression="this");const n=await this.runtimeModel._agent.invoke_evaluate({expression:e.expression,objectGroup:e.objectGroup,includeCommandLineAPI:e.includeCommandLineAPI,silent:e.silent,contextId:this.id,returnByValue:e.returnByValue,generatePreview:e.generatePreview,userGesture:t,awaitPromise:o,throwOnSideEffect:e.throwOnSideEffect,timeout:e.timeout,disableBreaks:e.disableBreaks,replMode:e.replMode,allowUnsafeEvalBlockedByCSP:e.allowUnsafeEvalBlockedByCSP}),r=n[ProtocolClient.InspectorBackend.ProtocolError];return r?(console.error(r),{error:r}):{object:this.runtimeModel.createRemoteObject(n.result),exceptionDetails:n.exceptionDetails}}async globalLexicalScopeNames(){const e=await this.runtimeModel._agent.invoke_globalLexicalScopeNames({executionContextId:this.id});return e[ProtocolClient.InspectorBackend.ProtocolError]?[]:e.names}label(){return this._label}setLabel(e){this._setLabel(e),this.runtimeModel.dispatchEventToListeners(Events.ExecutionContextChanged,this)}_setLabel(e){if(e)return void(this._label=e);if(this.name)return void(this._label=this.name);const t=Common.ParsedURL.ParsedURL.fromString(this.origin);this._label=t?t.lastPathComponentWithFragment():""}}SDKModel.register(RuntimeModel,Capability.JS,!0);export let EvaluationResult;export let CompileScriptResult;export let EvaluationOptions;export let QueryObjectResult;