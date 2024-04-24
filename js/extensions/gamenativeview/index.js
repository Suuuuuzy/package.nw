(()=>{"use strict";var e={1726:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(7120),s={};let a=1;o.default.registerCallback((e=>{const{command:t,data:n}=e;if("WEBVIEW_INVOKE_CALLBACK"===t){const e=n.callbackID,t=s[e];"function"==typeof t&&t(n.res),delete s[e]}})),t.default=function(e,t,n){const i=a++;s[i]=n,o.default.send({command:"WEBVIEW_INVOKE",data:{api:e,args:t,callbackID:i}})}},1233:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(7120),s={};o.default.registerCallback((e=>{const{command:t,data:n}=e;"WEBVIEW_ON_EVENT"===t&&function(e,t){const n=s[e];"function"==typeof n&&n(t)}(n.eventName,n.data)})),t.default=function(e,t){t&&(s[e]=t)}},6298:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(7120);t.default=function(e,t){o.default.send({command:"WEBVIEW_PUBLISH",data:{eventName:e,data:t}})}},9063:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(7120),s={};o.default.registerCallback((e=>{const{command:t,data:n}=e;"APPSERVICE_PUBLISH"===t&&function(e,t){console.error(arguments);const n=s[e];"function"==typeof n&&n(t)}(n.eventName,n.data)})),t.default=function(e,t){s[e]=t}},6211:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.webviewID=void 0;const n=navigator.userAgent,o=n.match(/gamenativeview\/([^\s]*)/);t.webviewID=o?o[1]:"";const s=-1!==n.indexOf("Android"),a=-1!==n.indexOf("iPhone"),i=-1!==n.indexOf("weapp");t.default={isAndroid:s,isiPhone:a,webviewID:t.webviewID,isWeapp:i}},7120:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(6211),s=n(8422);let a;const i=()=>{if(a)return a;const e=`GAMENATIVEVIEW_${o.webviewID}`;return a=new s(e),a};t.default={send(e){const t=i();e.fromWebviewID=o.webviewID,t.send(e)},registerCallback(e){i().registerCallback(e)}}},8422:e=>{const t=window.navigator||window.__global.navigator,n=window.WebSocket||window.__global.WebSocket,o=window.prompt||window.__global.prompt,s=t.userAgent.match(/port\/(\d*)/),a=s?parseInt(s[1]):9974,i=`ws://127.0.0.1:${a}`;window.__maxConnectTryTime=10;e.exports=class{constructor(e,t=!0){this._protocol=e,this._needToken=t,this._ws=null,this._msgQueue=[],this._callback=new Set,this._parseJson=null,this.tryTime=0,"complete"===document.readyState?setTimeout((()=>{this.connect()})):window.addEventListener("load",(()=>{this.connect()}))}connect(){if(!a)return;if(this.tryTime++,this.tryTime>=window.__maxConnectTryTime)return void console.error("当前应用通道断开且重连次数已满，请重新编译应用");let e=this._protocol;if(this._needToken){e=`${e}#${o("GET_MESSAGE_TOKEN")}#`}this._ws=new n(i,e),this._ws.onopen=()=>{const e=[].concat(this._msgQueue);this._msgQueue=[],e.forEach((e=>{this.send(e)}))},this._ws.onclose=()=>{this._ws=null,setTimeout((()=>{this.connect()}),150)},this._ws.onmessage=e=>{try{const t=this._parseJson?this._parseJson(e.data):JSON.parse(e.data);this._callback.forEach((e=>{try{e.call(this,t)}catch(e){console.error("onmessage",e)}}))}catch(e){console.error("onmessage",e)}}}send(e){this._ws&&this._ws.readyState===n.OPEN?this._ws.send(JSON.stringify(e)):this._msgQueue.push(e)}registerCallback(e){"function"==typeof e&&this._callback.add(e)}removeCallback(e){this._callback.delete(e)}}}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{const e=n(1233),t=n(1726),o=n(6298),s=n(9063);window.WeixinJSBridge={on:e.default,invoke:t.default,publish:o.default,subscribe:s.default},window.NativeViewBridge={on:e.default,publish:o.default}})()})();
//# sourceURL=ide:///extensions/gamenativeview/index.js