import*as HeapSnapshotModel from"../heap_snapshot_model/heap_snapshot_model.js";export class HeapSnapshotWorkerDispatcher{constructor(e,t){this._objects=[],this._global=e,this._postMessage=t}_findFunction(e){const t=e.split(".");let s=this._global;for(let e=0;e<t.length;++e)s=s[t[e]];return s}sendEvent(e,t){this._postMessage({eventName:e,data:t})}dispatchMessage(e){const t=e.data,s={callId:t.callId};try{switch(t.disposition){case"create":{const e=this._findFunction(t.methodName);this._objects[t.objectId]=new e(this);break}case"dispose":delete this._objects[t.objectId];break;case"getter":{const e=this._objects[t.objectId][t.methodName];s.result=e;break}case"factory":{const e=this._objects[t.objectId],o=e[t.methodName].apply(e,t.methodArguments);o&&(this._objects[t.newObjectId]=o),s.result=!!o;break}case"method":{const e=this._objects[t.objectId];s.result=e[t.methodName].apply(e,t.methodArguments);break}case"evaluateForTest":try{s.result=self.eval(t.source)}catch(e){s.result=e.toString()}}}catch(e){s.error=e.toString(),s.errorCallStack=e.stack,t.methodName&&(s.errorMethodName=t.methodName)}this._postMessage(s)}}