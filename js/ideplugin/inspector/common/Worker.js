export class WorkerWrapper{constructor(e){const s=e+".js"+location.search;this._workerPromise=new Promise(e=>{const o=new Worker(s,{type:"module"});o.onmessage=s=>{console.assert("workerReady"===s.data),o.onmessage=null,e(o)}})}postMessage(e){this._workerPromise.then(s=>{this._disposed||s.postMessage(e)})}dispose(){this._disposed=!0,this._workerPromise.then(e=>e.terminate())}terminate(){this.dispose()}set onmessage(e){this._workerPromise.then(s=>{s.onmessage=e})}set onerror(e){this._workerPromise.then(s=>{s.onerror=e})}}