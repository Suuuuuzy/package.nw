(() => {
	var e = {
			299: (e, t, o) => {
				var s = o(6361),
					c = o(8784),
					a = o(9991),
					r = Object.getOwnPropertyNames,
					n = Object.getOwnPropertySymbols;
				t = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						o = t.prototype,
						i = void 0 === o || o,
						l = t.unenumerable,
						u = void 0 !== l && l,
						d = t.symbol,
						g = void 0 !== d && d,
						p = [];
					if ((u || g) && r) {
						var f = s;
						u && r && (f = r);
						do {
							p = p.concat(f(e)), g && n && (p = p.concat(n(e)))
						} while (i && (e = c(e)) && e !== Object.prototype);
						p = a(p)
					} else if (i)
						for (var b in e) p.push(b);
					else p = s(e);
					return p
				}, e.exports = t
			},
			1356: (e, t, o) => {
				var s = o(9170),
					c = o(5180);
				t = function(e, t) {
					if (c(e)) return e;
					if (t && s(t, e)) return [e];
					var o = [];
					return e.replace(a, (function(e, t, s, c) {
						o.push(s ? c.replace(r, "$1") : t || e)
					})), o
				};
				var a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
					r = /\\(\\)?/g;
				e.exports = t
			},
			6389: (e, t, o) => {
				var s = o(4050),
					c = o(6292),
					a = o(3420),
					r = o(9938);
				t = function(e, t) {
					return c(e) ? e.indexOf(t) > -1 : (a(e) || (e = r(e)), s(e, t) >= 0)
				}, e.exports = t
			},
			5002: (e, t, o) => {
				var s = o(6093),
					c = o(393);
				t = function(e, t) {
					return function(o) {
						return c(arguments, (function(a, r) {
							if (0 !== r) {
								var n = e(a);
								c(n, (function(e) {
									t && !s(o[e]) || (o[e] = a[e])
								}))
							}
						})), o
					}
				}, e.exports = t
			},
			856: (e, t, o) => {
				t = o(5002)(o(299), !0), e.exports = t
			},
			393: (e, t, o) => {
				var s = o(3420),
					c = o(6361),
					a = o(8474);
				t = function(e, t, o) {
					var r, n;
					if (t = a(t, o), s(e))
						for (r = 0, n = e.length; r < n; r++) t(e[r], r, e);
					else {
						var i = c(e);
						for (r = 0, n = i.length; r < n; r++) t(e[i[r]], i[r], e)
					}
					return e
				}, e.exports = t
			},
			9404: (e, t, o) => {
				var s = o(6361);
				t = o(5002)(s), e.exports = t
			},
			9186: (e, t, o) => {
				var s = o(8998),
					c = o(393);
				t = function(e, t, o) {
					var a = [];
					return t = s(t, o), c(e, (function(e, o, s) {
						t(e, o, s) && a.push(e)
					})), a
				}, e.exports = t
			},
			8784: (e, t, o) => {
				var s = o(2735),
					c = o(1851),
					a = Object.getPrototypeOf,
					r = {}.constructor;
				t = function(e) {
					if (s(e)) {
						if (a) return a(e);
						var t = e.__proto__;
						return t || null === t ? t : c(e.constructor) ? e.constructor.prototype : e instanceof r ? r.prototype : void 0
					}
				}, e.exports = t
			},
			9170: (e, t) => {
				var o = Object.prototype.hasOwnProperty;
				t = function(e, t) {
					return o.call(e, t)
				}, e.exports = t
			},
			9407: (e, t) => {
				t = function(e) {
					return e
				}, e.exports = t
			},
			4050: (e, t) => {
				t = function(e, t, o) {
					return Array.prototype.indexOf.call(e, t, o)
				}, e.exports = t
			},
			5180: (e, t, o) => {
				var s = o(8521);
				t = Array.isArray ? Array.isArray : function(e) {
					return "[object Array]" === s(e)
				}, e.exports = t
			},
			3420: (e, t, o) => {
				var s = o(1589),
					c = o(1851),
					a = Math.pow(2, 53) - 1;
				t = function(e) {
					if (!e) return !1;
					var t = e.length;
					return s(t) && t >= 0 && t <= a && !c(e)
				}, e.exports = t
			},
			1851: (e, t, o) => {
				var s = o(8521);
				t = function(e) {
					var t = s(e);
					return "[object Function]" === t || "[object GeneratorFunction]" === t || "[object AsyncFunction]" === t
				}, e.exports = t
			},
			2476: (e, t, o) => {
				var s = o(6361);
				t = function(e, t) {
					var o = s(t),
						c = o.length;
					if (null == e) return !c;
					e = Object(e);
					for (var a = 0; a < c; a++) {
						var r = o[a];
						if (t[r] !== e[r] || !(r in e)) return !1
					}
					return !0
				}, e.exports = t
			},
			1589: (e, t, o) => {
				var s = o(8521);
				t = function(e) {
					return "[object Number]" === s(e)
				}, e.exports = t
			},
			2735: (e, t) => {
				t = function(e) {
					var t = typeof e;
					return !!e && ("function" === t || "object" === t)
				}, e.exports = t
			},
			6292: (e, t, o) => {
				var s = o(8521);
				t = function(e) {
					return "[object String]" === s(e)
				}, e.exports = t
			},
			6093: (e, t) => {
				t = function(e) {
					return void 0 === e
				}, e.exports = t
			},
			6361: (e, t, o) => {
				var s = o(9170);
				t = Object.keys ? Object.keys : function(e) {
					var t = [];
					for (var o in e) s(e, o) && t.push(o);
					return t
				}, e.exports = t
			},
			1696: (e, t, o) => {
				var s = o(9404),
					c = o(2476);
				t = function(e) {
					return e = s({}, e),
						function(t) {
							return c(t, e)
						}
				}, e.exports = t
			},
			8521: (e, t) => {
				var o = Object.prototype.toString;
				t = function(e) {
					return o.call(e)
				}, e.exports = t
			},
			8474: (e, t, o) => {
				var s = o(6093);
				t = function(e, t, o) {
					if (s(t)) return e;
					switch (null == o ? 3 : o) {
						case 1:
							return function(o) {
								return e.call(t, o)
							};
						case 3:
							return function(o, s, c) {
								return e.call(t, o, s, c)
							};
						case 4:
							return function(o, s, c, a) {
								return e.call(t, o, s, c, a)
							}
					}
					return function() {
						return e.apply(t, arguments)
					}
				}, e.exports = t
			},
			4962: (e, t, o) => {
				var s = o(5180),
					c = o(7059);
				t = function(e) {
					return s(e) ? function(t) {
						return c(t, e)
					} : (t = e, function(e) {
						return null == e ? void 0 : e[t]
					});
					var t
				}, e.exports = t
			},
			8998: (e, t, o) => {
				var s = o(1851),
					c = o(2735),
					a = o(5180),
					r = o(8474),
					n = o(1696),
					i = o(9407),
					l = o(4962);
				t = function(e, t, o) {
					return null == e ? i : s(e) ? r(e, t, o) : c(e) && !a(e) ? n(e) : l(e)
				}, e.exports = t
			},
			7059: (e, t, o) => {
				var s = o(6093),
					c = o(1356);
				t = function(e, t) {
					var o;
					for (o = (t = c(t, e)).shift(); !s(o);) {
						if (null == (e = e[o])) return;
						o = t.shift()
					}
					return e
				}, e.exports = t
			},
			9991: (e, t, o) => {
				var s = o(9186);

				function c(e, t) {
					return e === t
				}
				t = function(e, t) {
					return t = t || c, s(e, (function(e, o, s) {
						for (var c = s.length; ++o < c;)
							if (t(e, s[o])) return !1;
						return !0
					}))
				}, e.exports = t
			},
			9938: (e, t, o) => {
				var s = o(393);
				t = function(e) {
					var t = [];
					return s(e, (function(e) {
						t.push(e)
					})), t
				}, e.exports = t
			},
			4534: e => {
				"use strict";
				window.__devtoolsConfig || (window.__devtoolsConfig = {
					setting: {}
				}), window.__wxConfig = window.__wxConfig || {};
				const t = {
					getSystemInfo: !0,
					getBatteryInfo: !0,
					getBackgroundAudioState: !0,
					setBackgroundAudioState: !0,
					operateBackgroundAudio: !0,
					createRequestTask: !0,
					createUploadTask: !0,
					createDownloadTask: !0,
					createSocketTask: !0,
					operateSocketTask: !0,
					createAudioInstance: !0,
					getMenuButtonBoundingClientRect: !0,
					getPermissionBytes: !0,
					getPluginPermissionBytes: !0,
					createUDPSocket: !0,
					bindUDPSocket: !0,
					createLockStep: !0,
					loadFont: !0,
					canIUse: !0,
					createBufferURL: !0,
					revokeBufferURL: !0,
					measureTextString: !0,
					readCompressedFileSync: !0,
					injectSubPackages: !0,
					loadComponents: !0,
					createTCPServer: !0,
					listenTCPServer: !0,
					createTCPSocket: !0,
					connectTCPSocket: !0,
					writeTCPSocket: !0,
					removeHTMLWebView: !0
				};
				let o = 0;
				e.exports = {
					syncSDKList: t,
					isSyncSDK: function(e) {
						return !!t[e] || /Sync$/.test(e)
					},
					get DevtoolsConfig() {
						return __devtoolsConfig
					},
					get NetworkConfig() {
						return (null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.network) || {}
					},
					get Permission() {
						return null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.permission
					},
					get AppserviceMaxDataSize() {
						return (null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.setting) && __devtoolsConfig.setting.MaxDataSize || 1048576
					},
					get MaxRequestConcurrent() {
						return (null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.setting) && __devtoolsConfig.setting.MaxRequestConcurrent || 10
					},
					get MaxWebsocketConnect() {
						return (null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.setting) && __devtoolsConfig.setting.MaxWebsocketConnect || 10
					},
					get isUseApiMock() {
						return (null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.useApiMock) || !1
					},
					get apiMockApiList() {
						return (null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.apiList) || {}
					},
					get libNumberVersion() {
						var e;
						return null !== (e = null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.libNumberVersion) && void 0 !== e ? e : 999999999
					},
					ibForbiddenApi: {
						navigateTo: !0,
						navigateBack: !0,
						redirectTo: !0,
						switchTab: !0,
						reLaunch: !0,
						updateApp: !0,
						openUrl: !0,
						restart: !0,
						showTabBar: !0,
						hideTabBar: !0,
						openAddress: !0,
						addPhoneContact: !0,
						showActionSheet: !0,
						showToast: !0,
						hideToast: !0,
						showModal: !0,
						showLoading: !0,
						shareAppMessage: !0,
						showShareMenuWithShareTicket: !0,
						showShareMenu: !0,
						hideShareMenu: !0,
						shareAppMessageDirectly: !0,
						showShareTimelineMenu: !0,
						hideShareTimelineMenu: !0,
						openSetting: !0
					},
					urlCheckErrReason: "url not in domain list",
					needTransArgsBase64Api: {
						createBufferURL: !0
					},
					canNotReadFromCodePackage: {
						js: !0,
						wxss: !0,
						wxml: !0
					},
					genIdForDevTools: function(e, t) {
						var s;
						const c = "qbase_commapi" === (null === (s = t.data) || void 0 === s ? void 0 : s.api_name) || "qbase_commapi" === t.apiName;
						if ("operateWXData" === e && t && c && t.data && t.data.data) switch (t.data.data.qbase_api_name) {
							case "tcbapi_db_adddocument":
							case "tcbapi_db_deletedocument":
							case "tcbapi_db_querydocument":
							case "tcbapi_db_updatedocument":
							case "tcbapi_db_setdocument":
							case "tcbapi_db_countdocument":
							case "tcbapi_db_aggregate":
							case "tcbapi_deletefile":
							case "tcbapi_gettempfileurl": {
								const e = "4." + o++;
								return console.debug(`~DP_DEBUG_${JSON.stringify({type:"NetworkStackTrace",requestId:e,ignoreDepth:2})}`), e
							}
						}
					},
					invokeNeedToDevtoolsApi: {
						request: "request",
						createRequestTask: "request",
						operateRequestTask: "request"
					},
					actionsConfig: {
						SIMULATOR_SET_BACKGROUND_AUDIO: "SIMULATOR_SET_BACKGROUND_AUDIO",
						TOOLBAR_SET_CLICKKEY: "TOOLBAR_SET_CLICKKEY"
					},
					musicStatusConfig: {
						MUSIC_STATE_INIT: 1,
						MUSIC_STATE_PLAY: 2,
						MUSIC_STATE_PAUSE: 3,
						MUSIC_STATE_END: 4,
						MUSIC_STATE_ERROR: 5
					},
					referrerConfig: {
						referrerPolicyOrigin: "#devtools_refererOrigin",
						referrerPolicyNoReferrer: "#devtools_no_referrer"
					},
					clickkeyConfig: {
						MUSICCARD: "musiccard"
					}
				}
			},
			760: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = {
					class: {
						console: ["debug", "log", "info", "warn", "error", "group", "groupEnd"], env: ["USER_DATA_PATH"], CanvasContext: ["draw", "createLinearGradient", "createCircularGradient", "createPattern", "measureText", "save", "restore", "beginPath", "moveTo", "lineTo", "quadraticCurveTo", "bezierCurveTo", "arc", "rect", "arcTo", "clip", "fillRect", "strokeRect", "clearRect", "fill", "stroke", "closePath", "scale", "rotate", "translate", "drawImage", "strokeText", "transform", "setTransform", "setFillStyle", "setStrokeStyle", "setShadow", "setGlobalAlpha", "setLineWidth", "setLineJoin", "setLineCap", "setLineDash", "setMiterLimit", "fillText", "setFontSize", "setTextAlign", "setTextBaseline", "fillStyle", "strokeStyle", "shadowOffsetX", "shadowOffsetY", "shadowColor", "shadowBlur", "lineWidth", "lineCap", "lineJoin", "miterLimit", "lineDashOffset", "font", "globalAlpha", "globalCompositeOperation"], CanvasGradient: ["addColorStop"], OffscreenCanvas: ["getContext"], Color: [], EventChannel: ["emit", "on", "once", "off"], IntersectionObserver: ["relativeTo", "relativeToViewport", "observe", "disconnect"], MediaQueryObserver: ["observe", "disconnect"], NodesRef: ["fields", "boundingClientRect", "scrollOffset", "context", "node"], SelectorQuery: ["in", "select", "selectAll", "selectViewport", "exec"], AudioContext: ["setSrc", "play", "pause", "seek"], InnerAudioContext: ["play", "pause", "stop", "seek", "destroy", "onCanplay", "offCanplay", "onPlay", "offPlay", "onPause", "offPause", "onStop", "offStop", "onEnded", "offEnded", "onTimeUpdate", "offTimeUpdate", "onError", "offError", "onWaiting", "offWaiting", "onSeeking", "offSeeking", "onSeeked", "offSeeked", "src", "startTime", "autoplay", "loop", "obeyMuteSwitch", "volume", "playbackRate", "duration", "currentTime", "paused", "buffered"], CameraContext: ["onCameraFrame", "takePhoto", "setZoom", "startRecord", "stopRecord"], CameraFrameListener: ["start", "stop"], EditorContext: ["format", "insertDivider", "insertImage", "insertText", "setContents", "getContents", "clear", "removeFormat", "undo", "redo", "blur", "scrollIntoView", "getSelectionText"], LivePlayerContext: ["play", "stop", "mute", "pause", "resume", "requestFullScreen", "exitFullScreen", "exitPictureInPicture", "snapshot", "requestPictureInPicture"], LivePusherContext: ["start", "stop", "pause", "resume", "switchCamera", "snapshot", "toggleTorch", "playBGM", "stopBGM", "pauseBGM", "resumeBGM", "setBGMVolume", "setMICVolume", "startPreview", "stopPreview", "sendMessage"], MapContext: ["getCenterLocation", "setLocMarkerIcon", "moveToLocation", "translateMarker", "moveAlong", "includePoints", "getRegion", "getRotate", "getSkew", "getScale", "setCenterOffset", "removeCustomLayer", "addCustomLayer", "addGroundOverlay", "updateGroundOverlay", "removeGroundOverlay", "toScreenLocation", "fromScreenLocation", "openMapApp", "addMarkers", "removeMarkers", "initMarkerCluster", "on"], ScrollViewContext: ["scrollTo", "scrollIntoView", "scrollEnabled", "bounces", "showScrollbar", "pagingEnabled", "fastDeceleration", "decelerationDisabled"], VideoContext: ["play", "pause", "stop", "seek", "sendDanmu", "playbackRate", "requestFullScreen", "exitFullScreen", "showStatusBar", "hideStatusBar", "exitPictureInPicture"], LogManager: ["debug", "info", "log", "warn"], RealtimeLogManager: ["info", "warn", "error", "setFilterMsg", "addFilterMsg"], IBeaconInfo: ["uuid", "major", "minor", "proximity", "accuracy", "rssi"], MediaRecorder: ["pause", "resume", "start", "stop", "requestFrame", "on", "off", "destroy"], VideoDecoder: ["start", "seek", "stop", "remove", "getFrameData", "on", "off"], MediaTrack: ["kind", "duration", "volume"], MediaContainer: ["extractDataSource", "addTrack", "removeTrack", "export", "destroy"], UserInfo: ["nickName", "avatarUrl", "gender", "country", "province", "city", "language"], EntryList: ["getEntries", "getEntriesByType", "getEntriesByName"], Performance: ["getEntries", "getEntriesByType", "getEntriesByName", "createObserver", "setBufferSize"], PerformanceObserver: ["observe", "disconnect", "supportedEntryTypes"], Animation: ["export", "step", "matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ", "opacity", "backgroundColor", "width", "height", "left", "right", "top", "bottom"], UpdateManager: ["applyUpdate", "onCheckForUpdate", "onUpdateReady", "onUpdateFailed"], Worker: ["postMessage", "terminate", "onMessage", "onProcessKilled"], FileSystemManager: [], Stats: ["isDirectory", "isFile", "mode", "size", "lastAccessedTime", "lastModifiedTime"], UDPSocket: ["bind", "send", "close", "onClose", "offClose", "onError", "offError", "onListening", "offListening", "onMessage", "offMessage"], Canvas: ["getContext", "createImage", "requestAnimationFrame", "cancelAnimationFrame", "createImageData", "createPath2D", "toDataURL", "width", "height"], RenderingContext: [], Image: ["src", "width", "height", "onload", "onerror"], NFCAdapter: ["startDiscovery", "stopDiscovery", "getNdef", "getNfcA", "getNfcB", "getIsoDep", "getNfcF", "getNfcV", "getMifareClassic", "getMifareUltralight", "onDiscovered", "offDiscovered", "tech"], Ndef: ["connect", "close", "setTimeout", "isConnected", "onNdefMessage", "offNdefMessage", "writeNdefMessage"], NfcA: ["connect", "close", "setTimeout", "isConnected", "getMaxTransceiveLength", "transceive", "getAtqa", "getSak"], NfcB: ["connect", "close", "setTimeout", "isConnected", "getMaxTransceiveLength", "transceive"], IsoDep: ["connect", "close", "setTimeout", "isConnected", "getMaxTransceiveLength", "transceive", "getHistoricalBytes"], NfcF: ["connect", "close", "setTimeout", "isConnected", "getMaxTransceiveLength", "transceive"], NfcV: ["connect", "close", "setTimeout", "isConnected", "getMaxTransceiveLength", "transceive"], MifareClassic: ["connect", "close", "setTimeout", "isConnected", "getMaxTransceiveLength", "transceive"], MifareUltralight: ["connect", "close", "setTimeout", "isConnected", "getMaxTransceiveLength", "transceive"], WifiInfo: ["SSID", "BSSID", "secure", "signalStrength", "frequency"], BackgroundAudioManager: ["play", "pause", "seek", "stop", "onCanplay", "onWaiting", "onError", "onPlay", "onPause", "onSeeking", "onSeeked", "onEnded", "onStop", "onTimeUpdate", "onNext", "onPrev", "src", "startTime", "title", "epname", "singer", "coverImgUrl", "webUrl", "protocol", "playbackRate", "duration", "currentTime", "paused", "buffered"], RecorderManager: ["start", "pause", "resume", "stop", "onStart", "onResume", "onPause", "onStop", "onFrameRecorded", "onError", "onInterruptionBegin", "onInterruptionEnd"], DownloadTask: ["abort", "onProgressUpdate", "offProgressUpdate", "onHeadersReceived", "offHeadersReceived"], RequestTask: ["abort", "onHeadersReceived", "offHeadersReceived"], SocketTask: ["send", "close", "onOpen", "onClose", "onError", "onMessage"], UploadTask: ["abort", "onProgressUpdate", "offProgressUpdate", "onHeadersReceived", "offHeadersReceived"], AuthSetting: ["scope.userInfo", "scope.userLocation", "scope.address", "scope.invoiceTitle", "scope.invoice", "scope.werun", "scope.record", "scope.writePhotosAlbum", "scope.camera"], SubscriptionsSetting: ["mainSwitch", "itemSettings"], ImageData: ["width", "height", "data"], Path2D: [], BLEPeripheralServer: ["addService", "removeService", "startAdvertising", "stopAdvertising", "writeCharacteristicValue", "onCharacteristicWriteRequest", "offCharacteristicWriteRequest", "onCharacteristicReadRequest", "offCharacteristicReadRequest", "onCharacteristicSubscribed", "offCharacteristicSubscribed", "onCharacteristicUnsubscribed", "offCharacteristicUnsubscribed"], MediaAudioPlayer: ["start", "addAudioSource", "removeAudioSource", "stop", "destroy", "volume"], InterstitialAd: ["show", "load", "destroy", "onLoad", "offLoad", "onError", "offError", "onClose", "offClose"], RewardedVideoAd: ["load", "show", "destroy", "onLoad", "offLoad", "onError", "offError", "onClose", "offClose"]
					},
					method: {
						arrayBufferToBase64: {},
						base64ToArrayBuffer: {},
						exitVoIPChat: {
							object: {},
							success: {}
						},
						joinVoIPChat: {
							object: {
								roomType: ["voice", "video"],
								signature: 1,
								nonceStr: 1,
								timeStamp: 1,
								groupId: 1,
								muteConfig: 1
							},
							success: {
								openIdList: 1,
								errCode: 1,
								errMsg: 1
							}
						},
						onVoIPChatInterrupted: {
							callback: {
								errCode: 1,
								errMsg: 1
							}
						},
						offVoIPChatInterrupted: {},
						onVoIPChatMembersChanged: {
							callback: {
								openIdList: 1,
								errCode: 1,
								errMsg: 1
							}
						},
						offVoIPChatMembersChanged: {},
						onVoIPChatSpeakersChanged: {
							callback: {
								openIdList: 1,
								errCode: 1,
								errMsg: 1
							}
						},
						onVoIPVideoMembersChanged: {
							callback: {
								openIdList: 1,
								errCode: 1,
								errMsg: 1
							}
						},
						offVoIPVideoMembersChanged: {
							callback: {}
						},
						subscribeVoIPVideoMembers: {
							object: {
								openIdList: 1
							},
							success: {}
						},
						updateVoIPChatMuteConfig: {
							object: {
								muteConfig: 1
							},
							success: {}
						},
						getAccountInfoSync: {},
						onAppHide: {
							callback: {}
						},
						offAppHide: {
							callback: {}
						},
						onAppShow: {
							callback: {
								path: 1,
								scene: 1,
								query: 1,
								shareTicket: 1,
								referrerInfo: ["appId", "extraData"],
								forwardMaterials: 1
							}
						},
						offAppShow: {
							callback: {}
						},
						getEnterOptionsSync: {},
						onError: {
							callback: {}
						},
						offError: {},
						onUnhandledRejection: {
							callback: {
								reason: 1,
								promise: 1
							}
						},
						offUnhandledRejection: {
							callback: {}
						},
						getLaunchOptionsSync: {},
						onCopyUrl: {
							callback: {
								query: 1
							}
						},
						offCopyUrl: {
							callback: {}
						},
						onPageNotFound: {
							callback: {
								path: 1,
								query: 1,
								isEntryPage: 1
							}
						},
						offPageNotFound: {
							callback: {}
						},
						onThemeChange: {
							callback: {
								theme: ["dark", "light"]
							}
						},
						offThemeChange: {
							callback: {}
						},
						canvasGetImageData: {
							object: {
								canvasId: 1,
								x: 1,
								y: 1,
								width: 1,
								height: 1
							},
							success: {
								width: 1,
								height: 1,
								data: 1
							}
						},
						canvasPutImageData: {
							object: {
								canvasId: 1,
								data: 1,
								x: 1,
								y: 1,
								width: 1,
								height: 1
							},
							success: {}
						},
						canvasToTempFilePath: {
							object: {
								x: 1,
								y: 1,
								width: 1,
								height: 1,
								destWidth: 1,
								destHeight: 1,
								canvasId: 1,
								canvas: 1,
								fileType: ["jpg", "png"],
								quality: 1
							},
							success: {
								tempFilePath: 1
							}
						},
						createCanvasContext: {},
						createOffscreenCanvas: {},
						createIntersectionObserver: {},
						nextTick: {},
						createSelectorQuery: {},
						createAudioContext: {},
						createCameraContext: {},
						createLivePlayerContext: {},
						createLivePusherContext: {},
						createMapContext: {},
						createVideoContext: {},
						createInnerAudioContext: {},
						getLogManager: {
							object: {
								level: 1
							}
						},
						setEnableDebug: {
							object: {
								enableDebug: 1
							},
							success: {}
						},
						getRealtimeLogManager: {},
						startAccelerometer: {
							object: {
								interval: ["game", "ui", "normal"]
							},
							success: {}
						},
						stopAccelerometer: {
							object: {},
							success: {}
						},
						onAccelerometerChange: {
							callback: {
								x: 1,
								y: 1,
								z: 1
							}
						},
						offAccelerometerChange: {},
						checkIsOpenAccessibility: {
							object: {},
							success: {
								open: 1
							}
						},
						getBatteryInfo: {
							object: {},
							success: {
								level: 1,
								isCharging: 1
							}
						},
						getBatteryInfoSync: {
							return: {
								level: 1,
								isCharging: 1
							}
						},
						addPhoneCalendar: {
							object: {
								title: 1,
								startTime: 1,
								allDay: 1,
								description: 1,
								location: 1,
								endTime: 1,
								alarm: 1,
								alarmOffset: 1
							},
							success: {}
						},
						addPhoneRepeatCalendar: {
							object: {
								title: 1,
								startTime: 1,
								allDay: 1,
								description: 1,
								location: 1,
								endTime: 1,
								alarm: 1,
								alarmOffset: 1,
								repeatInterval: 1,
								repeatEndTime: 1
							},
							success: {}
						},
						getClipboardData: {
							object: {},
							success: {
								data: 1
							}
						},
						setClipboardData: {
							object: {
								data: 1
							},
							success: {}
						},
						startCompass: {
							object: {},
							success: {}
						},
						stopCompass: {
							object: {},
							success: {}
						},
						onCompassChange: {
							callback: {
								direction: 1,
								accuracy: 1
							}
						},
						offCompassChange: {},
						addPhoneContact: {
							object: {
								firstName: 1,
								photoFilePath: 1,
								nickName: 1,
								lastName: 1,
								middleName: 1,
								remark: 1,
								mobilePhoneNumber: 1,
								weChatNumber: 1,
								addressCountry: 1,
								addressState: 1,
								addressCity: 1,
								addressStreet: 1,
								addressPostalCode: 1,
								organization: 1,
								title: 1,
								workFaxNumber: 1,
								workPhoneNumber: 1,
								hostNumber: 1,
								email: 1,
								url: 1,
								workAddressCountry: 1,
								workAddressState: 1,
								workAddressCity: 1,
								workAddressStreet: 1,
								workAddressPostalCode: 1,
								homeFaxNumber: 1,
								homePhoneNumber: 1,
								homeAddressCountry: 1,
								homeAddressState: 1,
								homeAddressCity: 1,
								homeAddressStreet: 1,
								homeAddressPostalCode: 1
							},
							success: {}
						},
						getRandomValues: {
							object: {
								length: 1
							},
							success: {
								randomValues: 1
							}
						},
						startGyroscope: {
							object: {
								interval: ["game", "ui", "normal"]
							},
							success: {}
						},
						stopGyroscope: {
							object: {},
							success: {}
						},
						onGyroscopeChange: {
							callback: {
								x: 1,
								y: 1,
								z: 1
							}
						},
						offGyroscopeChange: {},
						startBeaconDiscovery: {
							object: {
								uuids: 1,
								ignoreBluetoothAvailable: 1
							},
							success: {}
						},
						stopBeaconDiscovery: {
							object: {},
							success: {}
						},
						getBeacons: {
							object: {},
							success: {
								beacons: 1
							}
						},
						onBeaconUpdate: {
							callback: {
								beacons: 1
							}
						},
						offBeaconUpdate: {
							callback: {}
						},
						onBeaconServiceChange: {
							callback: {
								available: 1,
								discovering: 1
							}
						},
						offBeaconServiceChange: {
							callback: {}
						},
						startLocalServiceDiscovery: {
							object: {
								serviceType: 1
							},
							success: {}
						},
						stopLocalServiceDiscovery: {
							object: {},
							success: {}
						},
						onLocalServiceFound: {
							callback: {
								serviceType: 1,
								serviceName: 1,
								ip: 1,
								port: 1
							}
						},
						offLocalServiceFound: {
							callback: {}
						},
						onLocalServiceLost: {
							callback: {
								serviceType: 1,
								serviceName: 1
							}
						},
						offLocalServiceLost: {
							callback: {}
						},
						onLocalServiceDiscoveryStop: {
							callback: {}
						},
						offLocalServiceDiscoveryStop: {
							callback: {}
						},
						onLocalServiceResolveFail: {
							callback: {
								serviceType: 1,
								serviceName: 1
							}
						},
						offLocalServiceResolveFail: {
							callback: {}
						},
						startDeviceMotionListening: {
							object: {
								interval: ["game", "ui", "normal"]
							},
							success: {}
						},
						stopDeviceMotionListening: {
							object: {},
							success: {}
						},
						onDeviceMotionChange: {
							callback: {
								alpha: 1,
								beta: 1,
								gamma: 1
							}
						},
						offDeviceMotionChange: {},
						getNetworkType: {
							object: {},
							success: {
								networkType: ["wifi", "2g", "3g", "4g", "5g", "unknown", "none"]
							}
						},
						onNetworkStatusChange: {
							callback: {
								isConnected: 1,
								networkType: ["wifi", "2g", "3g", "4g", "unknown", "none"]
							}
						},
						offNetworkStatusChange: {},
						makePhoneCall: {
							object: {
								phoneNumber: 1
							},
							success: {}
						},
						scanCode: {
							object: {
								onlyFromCamera: 1,
								scanType: ["barCode", "qrCode", "datamatrix", "pdf417"]
							},
							success: {
								result: 1,
								scanType: ["QR_CODE", "AZTEC", "CODABAR", "CODE_39", "CODE_93", "CODE_128", "DATA_MATRIX", "EAN_8", "EAN_13", "ITF", "MAXICODE", "PDF_417", "RSS_14", "RSS_EXPANDED", "UPC_A", "UPC_E", "UPC_EAN_EXTENSION", "WX_CODE", "CODE_25"],
								charSet: 1,
								path: 1,
								rawData: 1
							}
						},
						getSystemInfo: {
							object: {},
							success: {
								brand: 1,
								model: 1,
								pixelRatio: 1,
								screenWidth: 1,
								screenHeight: 1,
								windowWidth: 1,
								windowHeight: 1,
								statusBarHeight: 1,
								language: 1,
								version: 1,
								system: 1,
								platform: 1,
								fontSizeSetting: 1,
								SDKVersion: 1,
								benchmarkLevel: 1,
								albumAuthorized: 1,
								cameraAuthorized: 1,
								locationAuthorized: 1,
								microphoneAuthorized: 1,
								notificationAuthorized: 1,
								notificationAlertAuthorized: 1,
								notificationBadgeAuthorized: 1,
								notificationSoundAuthorized: 1,
								bluetoothEnabled: 1,
								locationEnabled: 1,
								wifiEnabled: 1,
								safeArea: ["left", "right", "top", "bottom", "width", "height"],
								locationReducedAccuracy: 1,
								theme: ["dark", "light"],
								enableDebug: 1,
								deviceOrientation: ["portrait", "landscape"]
							}
						},
						getSystemInfoSync: {},
						getSystemInfoAsync: {
							object: {},
							success: {
								brand: 1,
								model: 1,
								pixelRatio: 1,
								screenWidth: 1,
								screenHeight: 1,
								windowWidth: 1,
								windowHeight: 1,
								statusBarHeight: 1,
								language: 1,
								version: 1,
								system: 1,
								platform: 1,
								fontSizeSetting: 1,
								SDKVersion: 1,
								benchmarkLevel: 1,
								albumAuthorized: 1,
								cameraAuthorized: 1,
								locationAuthorized: 1,
								microphoneAuthorized: 1,
								notificationAuthorized: 1,
								notificationAlertAuthorized: 1,
								notificationBadgeAuthorized: 1,
								notificationSoundAuthorized: 1,
								bluetoothEnabled: 1,
								locationEnabled: 1,
								wifiEnabled: 1,
								safeArea: ["left", "right", "top", "bottom", "width", "height"],
								locationReducedAccuracy: 1,
								theme: ["dark", "light"],
								enableDebug: 1,
								deviceOrientation: ["portrait", "landscape"]
							}
						},
						vibrateShort: {
							object: {
								type: 1
							},
							success: {}
						},
						vibrateLong: {
							object: {},
							success: {}
						},
						getExptInfo: {
							object: {
								keyList: 1
							},
							success: {
								list: 1
							}
						},
						getExptInfoSync: {
							return: {}
						},
						reportEvent: {},
						getExtConfig: {
							object: {},
							success: {
								extConfig: 1
							}
						},
						getExtConfigSync: {
							return: {}
						},
						chooseLocation: {
							object: {
								latitude: 1,
								longitude: 1
							},
							success: {
								name: 1,
								address: 1,
								latitude: 1,
								longitude: 1
							}
						},
						choosePoi: {
							object: {},
							success: {
								type: 1,
								city: 1,
								name: 1,
								address: 1,
								latitude: 1,
								longitude: 1
							}
						},
						getLocation: {
							object: {
								type: 1,
								altitude: 1,
								isHighAccuracy: 1,
								highAccuracyExpireTime: 1
							},
							success: {
								latitude: 1,
								longitude: 1,
								speed: 1,
								accuracy: 1,
								altitude: 1,
								verticalAccuracy: 1,
								horizontalAccuracy: 1
							}
						},
						onLocationChange: {
							callback: {
								latitude: 1,
								longitude: 1,
								speed: 1,
								accuracy: 1,
								altitude: 1,
								verticalAccuracy: 1,
								horizontalAccuracy: 1
							}
						},
						offLocationChange: {
							callback: {}
						},
						startLocationUpdateBackground: {
							object: {},
							success: {}
						},
						startLocationUpdate: {
							object: {},
							success: {}
						},
						stopLocationUpdate: {
							object: {},
							success: {}
						},
						openLocation: {
							object: {
								latitude: 1,
								longitude: 1,
								scale: 1,
								name: 1,
								address: 1
							},
							success: {}
						},
						onAudioInterruptionBegin: {
							callback: {}
						},
						offAudioInterruptionBegin: {
							callback: {}
						},
						onAudioInterruptionEnd: {
							callback: {}
						},
						offAudioInterruptionEnd: {
							callback: {}
						},
						chooseMedia: {
							object: {
								count: 1,
								mediaType: ["image", "video"],
								sourceType: ["album", "camera"],
								maxDuration: 1,
								sizeType: 1,
								camera: ["back", "front"]
							},
							success: {
								tempFiles: 1,
								type: 1
							}
						},
						chooseMessageFile: {
							object: {
								count: 1,
								type: ["all", "video", "image", "file"],
								extension: 1
							},
							success: {
								tempFiles: 1
							}
						},
						loadFontFace: {
							object: {
								global: 1,
								family: 1,
								source: 1,
								desc: ["style", "weight", "variant"],
								scopes: 1
							},
							success: {
								status: 1
							}
						},
						chooseImage: {
							object: {
								count: 1,
								sizeType: ["original", "compressed"],
								sourceType: ["album", "camera"]
							},
							success: {
								tempFilePaths: 1,
								tempFiles: 1
							}
						},
						previewImage: {
							object: {
								urls: 1,
								showmenu: 1,
								current: 1
							},
							success: {}
						},
						getImageInfo: {
							object: {
								src: 1
							},
							success: {
								width: 1,
								height: 1,
								path: 1,
								orientation: ["up", "up-mirrored", "down", "down-mirrored", "left-mirrored", "right", "right-mirrored", "left"],
								type: 1
							}
						},
						saveImageToPhotosAlbum: {
							object: {
								filePath: 1
							},
							success: {}
						},
						compressImage: {
							object: {
								src: 1,
								quality: 1
							},
							success: {
								tempFilePath: 1
							}
						},
						createMediaRecorder: {},
						openVideoEditor: {
							object: {
								filePath: 1
							},
							success: {
								duration: 1,
								size: 1,
								tempFilePath: 1,
								tempThumbPath: 1
							}
						},
						previewMedia: {
							object: {
								sources: 1,
								current: 1,
								showmenu: 1
							},
							success: {}
						},
						chooseVideo: {
							object: {
								sourceType: ["album", "camera"],
								compressed: 1,
								maxDuration: 1,
								camera: ["back", "front"]
							},
							success: {
								tempFilePath: 1,
								duration: 1,
								size: 1,
								height: 1,
								width: 1
							}
						},
						saveVideoToPhotosAlbum: {
							object: {
								filePath: 1
							},
							success: {}
						},
						getVideoInfo: {
							object: {
								src: 1
							},
							success: {
								orientation: ["up", "down", "left", "right", "up-mirrored", "down-mirrored", "left-mirrored", "right-mirrored"],
								type: 1,
								duration: 1,
								size: 1,
								height: 1,
								width: 1,
								fps: 1,
								bitrate: 1
							}
						},
						compressVideo: {
							object: {
								src: 1,
								quality: ["low", "medium", "high"],
								bitrate: 1,
								fps: 1,
								resolution: 1
							},
							success: {
								tempFilePath: 1,
								size: 1
							}
						},
						createVideoDecoder: {},
						createMediaContainer: {},
						downloadFile: {
							object: {
								url: 1,
								header: 1,
								timeout: 1,
								filePath: 1
							},
							success: {
								tempFilePath: 1,
								filePath: 1,
								statusCode: 1,
								profile: 1
							}
						},
						request: {
							object: {
								url: 1,
								data: 1,
								header: 1,
								timeout: 1,
								method: ["OPTIONS", "GET", "HEAD", "POST", "PUT", "DELETE", "TRACE", "CONNECT"],
								dataType: ["json", "其他"],
								responseType: ["text", "arraybuffer"],
								enableHttp2: 1,
								enableQuic: 1,
								enableCache: 1
							},
							success: {
								data: 1,
								statusCode: 1,
								header: 1,
								cookies: 1,
								profile: 1
							}
						},
						uploadFile: {
							object: {
								url: 1,
								filePath: 1,
								name: 1,
								header: 1,
								formData: 1,
								timeout: 1
							},
							success: {
								data: 1,
								statusCode: 1
							}
						},
						login: {
							object: {
								timeout: 1
							},
							success: {
								code: 1
							}
						},
						checkSession: {
							object: {},
							success: {}
						},
						chooseAddress: {
							object: {},
							success: {
								userName: 1,
								postalCode: 1,
								provinceName: 1,
								cityName: 1,
								countyName: 1,
								detailInfo: 1,
								nationalCode: 1,
								telNumber: 1,
								errMsg: 1
							}
						},
						authorize: {
							object: {
								scope: 1
							},
							success: {}
						},
						addCard: {
							object: {
								cardList: 1
							},
							success: {
								cardList: 1
							}
						},
						openCard: {
							object: {
								cardList: 1
							},
							success: {}
						},
						chooseInvoice: {
							object: {},
							success: {
								invoiceInfo: 1
							}
						},
						chooseInvoiceTitle: {
							object: {},
							success: {
								type: ["0", "1"],
								title: 1,
								taxNumber: 1,
								companyAddress: 1,
								telephone: 1,
								bankName: 1,
								bankAccount: 1,
								errMsg: 1
							}
						},
						getGroupEnterInfo: {
							object: {},
							success: {
								errMsg: 1,
								encryptedData: 1,
								iv: 1,
								cloudID: 1
							}
						},
						getUserInfo: {
							object: {
								withCredentials: 1,
								lang: ["en", "zh_CN", "zh_TW"]
							},
							success: {
								userInfo: 1,
								rawData: 1,
								signature: 1,
								encryptedData: 1,
								iv: 1,
								cloudID: 1
							}
						},
						getUserProfile: {
							object: {
								lang: ["en", "zh_CN", "zh_TW"],
								desc: 1
							},
							success: {
								userInfo: 1
							}
						},
						requestPayment: {
							object: {
								timeStamp: 1,
								nonceStr: 1,
								package: 1,
								signType: ["MD5", "HMAC-SHA256", "RSA"],
								paySign: 1
							},
							success: {}
						},
						requestSubscribeMessage: {
							object: {
								tmplIds: 1
							},
							success: {
								errMsg: 1,
								TEMPLATE_ID: 1
							}
						},
						getWeRunData: {
							object: {},
							success: {
								encryptedData: 1,
								iv: 1,
								cloudID: 1
							}
						},
						getPerformance: {},
						onMemoryWarning: {
							callback: {
								level: ["5", "10", "15"]
							}
						},
						offMemoryWarning: {},
						reportPerformance: {},
						reportAnalytics: {},
						reportMonitor: {},
						getBackgroundFetchData: {
							object: {
								fetchType: 1
							},
							success: {}
						},
						onBackgroundFetchData: {
							callback: {
								fetchType: 1,
								fetchedData: 1,
								timeStamp: 1
							}
						},
						setBackgroundFetchToken: {
							object: {
								token: 1
							},
							success: {}
						},
						getBackgroundFetchToken: {
							object: {},
							success: {}
						},
						createAnimation: {
							object: {
								duration: 1,
								timingFunction: ["linear", "ease", "ease-in", "ease-in-out", "ease-out", "step-start", "step-end"],
								delay: 1,
								transformOrigin: 1
							}
						},
						enableAlertBeforeUnload: {
							object: {
								message: 1
							},
							success: {}
						},
						disableAlertBeforeUnload: {
							object: {},
							success: {}
						},
						getMenuButtonBoundingClientRect: {},
						getSelectedTextRange: {
							object: {},
							success: {
								start: 1,
								end: 1
							}
						},
						hideKeyboard: {
							object: {},
							success: {}
						},
						showModal: {
							object: {
								title: 1,
								content: 1,
								editable: 1,
								placeholderText: 1,
								showCancel: 1,
								cancelText: 1,
								cancelColor: 1,
								confirmText: 1,
								confirmColor: 1
							},
							success: {
								content: 1,
								confirm: 1,
								cancel: 1
							}
						},
						showToast: {
							object: {
								title: 1,
								icon: ["success", "error", "loading", "none"],
								image: 1,
								duration: 1,
								mask: 1
							},
							success: {}
						},
						hideToast: {
							object: {},
							success: {}
						},
						showLoading: {
							object: {
								title: 1,
								mask: 1
							},
							success: {}
						},
						hideLoading: {
							object: {},
							success: {}
						},
						showActionSheet: {
							object: {
								alertText: 1,
								itemList: 1,
								itemColor: 1
							},
							success: {
								tapIndex: 1
							}
						},
						onKeyboardHeightChange: {
							callback: {
								height: 1
							}
						},
						offKeyboardHeightChange: {},
						pageScrollTo: {
							object: {
								scrollTop: 1,
								duration: 1,
								selector: 1
							},
							success: {}
						},
						startPullDownRefresh: {
							object: {},
							success: {}
						},
						stopPullDownRefresh: {
							object: {},
							success: {}
						},
						onWindowResize: {
							callback: {
								size: ["windowWidth", "windowHeight"]
							}
						},
						offWindowResize: {
							callback: {}
						},
						setBackgroundColor: {
							object: {
								backgroundColor: 1,
								backgroundColorTop: 1,
								backgroundColorBottom: 1
							},
							success: {}
						},
						setBackgroundTextStyle: {
							object: {
								textStyle: ["dark", "light"]
							},
							success: {}
						},
						setWindowSize: {
							object: {
								width: 1,
								height: 1
							},
							success: {}
						},
						setTabBarBadge: {
							object: {
								index: 1,
								text: 1
							},
							success: {}
						},
						removeTabBarBadge: {
							object: {
								index: 1
							},
							success: {}
						},
						showTabBarRedDot: {
							object: {
								index: 1
							},
							success: {}
						},
						hideTabBarRedDot: {
							object: {
								index: 1
							},
							success: {}
						},
						showTabBar: {
							object: {
								animation: 1
							},
							success: {}
						},
						hideTabBar: {
							object: {
								animation: 1
							},
							success: {}
						},
						setTabBarStyle: {
							object: {
								color: 1,
								selectedColor: 1,
								backgroundColor: 1,
								borderStyle: 1
							},
							success: {}
						},
						setTabBarItem: {
							object: {
								index: 1,
								text: 1,
								iconPath: 1,
								selectedIconPath: 1
							},
							success: {}
						},
						setTopBarText: {
							object: {
								text: 1
							},
							success: {}
						},
						getUpdateManager: {},
						updateWeChatApp: {
							object: {},
							success: {}
						},
						createWorker: {},
						saveFile: {
							object: {
								tempFilePath: 1
							},
							success: {
								savedFilePath: 1
							}
						},
						openDocument: {
							object: {
								filePath: 1,
								showMenu: 1,
								fileType: ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf"]
							},
							success: {}
						},
						getSavedFileList: {
							object: {},
							success: {
								fileList: 1
							}
						},
						getSavedFileInfo: {
							object: {
								filePath: 1
							},
							success: {
								size: 1,
								createTime: 1
							}
						},
						removeSavedFile: {
							object: {
								filePath: 1
							},
							success: {}
						},
						getFileInfo: {
							object: {
								filePath: 1,
								digestAlgorithm: ["md5", "sha1"]
							},
							success: {
								size: 1,
								digest: 1
							}
						},
						getFileSystemManager: {},
						saveFileToDisk: {
							object: {
								filePath: 1
							},
							success: {}
						},
						getStorage: {
							object: {
								key: 1
							},
							success: {
								data: 1
							}
						},
						getStorageSync: {},
						setStorage: {
							object: {
								key: 1,
								data: 1
							},
							success: {}
						},
						setStorageSync: {},
						removeStorage: {
							object: {
								key: 1
							},
							success: {}
						},
						removeStorageSync: {},
						clearStorage: {
							object: {},
							success: {}
						},
						clearStorageSync: {},
						getStorageInfo: {
							object: {},
							success: {
								keys: 1,
								currentSize: 1,
								limitSize: 1
							}
						},
						getStorageInfoSync: {
							return: {
								keys: 1,
								currentSize: 1,
								limitSize: 1
							}
						},
						createUDPSocket: {},
						authorizeForMiniProgram: {
							object: {
								scope: ["scope.record", "scope.writePhotosAlbum", "scope.camera"]
							},
							success: {}
						},
						canIUse: {},
						closeBLEConnection: {
							object: {
								deviceId: 1
							},
							success: {}
						},
						closeBluetoothAdapter: {
							object: {},
							success: {}
						},
						createBLEConnection: {
							object: {
								deviceId: 1,
								timeout: 1
							},
							success: {}
						},
						getBLEDeviceCharacteristics: {
							object: {
								deviceId: 1,
								serviceId: 1
							},
							success: {
								characteristics: 1
							}
						},
						getBLEDeviceRSSI: {
							object: {
								deviceId: 1
							},
							success: {
								RSSI: 1
							}
						},
						getBLEDeviceServices: {
							object: {
								deviceId: 1
							},
							success: {
								services: 1
							}
						},
						getBluetoothAdapterState: {
							object: {},
							success: {
								discovering: 1,
								available: 1
							}
						},
						getBluetoothDevices: {
							object: {},
							success: {
								devices: 1
							}
						},
						getConnectedBluetoothDevices: {
							object: {
								services: 1
							},
							success: {
								devices: 1
							}
						},
						makeBluetoothPair: {
							object: {
								deviceId: 1,
								pin: 1,
								timeout: 1
							},
							success: {}
						},
						notifyBLECharacteristicValueChange: {
							object: {
								deviceId: 1,
								serviceId: 1,
								characteristicId: 1,
								state: 1
							},
							success: {}
						},
						onBLECharacteristicValueChange: {
							callback: {
								deviceId: 1,
								serviceId: 1,
								characteristicId: 1,
								value: 1
							}
						},
						offBLECharacteristicValueChange: {},
						onBLEConnectionStateChange: {
							callback: {
								deviceId: 1,
								connected: 1
							}
						},
						offBLEConnectionStateChange: {},
						onBluetoothAdapterStateChange: {
							callback: {
								available: 1,
								discovering: 1
							}
						},
						offBluetoothAdapterStateChange: {},
						onBluetoothDeviceFound: {
							callback: {
								devices: 1
							}
						},
						offBluetoothDeviceFound: {},
						openBluetoothAdapter: {
							object: {
								mode: ["central", "peripheral"]
							},
							success: {}
						},
						readBLECharacteristicValue: {
							object: {
								deviceId: 1,
								serviceId: 1,
								characteristicId: 1
							},
							success: {}
						},
						setBLEMTU: {
							object: {
								deviceId: 1,
								mtu: 1
							},
							success: {}
						},
						startBluetoothDevicesDiscovery: {
							object: {
								services: 1,
								allowDuplicatesKey: 1,
								interval: 1,
								powerLevel: ["low", "medium", "high"]
							},
							success: {}
						},
						stopBluetoothDevicesDiscovery: {
							object: {},
							success: {}
						},
						writeBLECharacteristicValue: {
							object: {
								deviceId: 1,
								serviceId: 1,
								characteristicId: 1,
								value: 1
							},
							success: {}
						},
						getHCEState: {
							object: {},
							success: {}
						},
						getNFCAdapter: {},
						onHCEMessage: {
							callback: {
								messageType: ["1", "2"],
								data: 1,
								reason: 1
							}
						},
						offHCEMessage: {},
						sendHCEMessage: {
							object: {
								data: 1
							},
							success: {}
						},
						startHCE: {
							object: {
								aid_list: 1
							},
							success: {}
						},
						stopHCE: {
							object: {},
							success: {}
						},
						getScreenBrightness: {
							object: {},
							success: {
								value: 1
							}
						},
						onUserCaptureScreen: {
							callback: {}
						},
						offUserCaptureScreen: {},
						setKeepScreenOn: {
							object: {
								keepScreenOn: 1
							},
							success: {}
						},
						setScreenBrightness: {
							object: {
								value: 1
							},
							success: {}
						},
						connectWifi: {
							object: {
								SSID: 1,
								BSSID: 1,
								password: 1,
								maunal: 1
							},
							success: {}
						},
						getConnectedWifi: {
							object: {},
							success: {
								wifi: 1
							}
						},
						getWifiList: {
							object: {},
							success: {}
						},
						onGetWifiList: {
							callback: {
								wifiList: 1
							}
						},
						offGetWifiList: {},
						onWifiConnected: {
							callback: {
								wifi: 1
							}
						},
						offWifiConnected: {},
						setWifiList: {
							object: {
								wifiList: 1
							},
							success: {}
						},
						startWifi: {
							object: {},
							success: {}
						},
						stopWifi: {
							object: {},
							success: {}
						},
						getBackgroundAudioManager: {},
						getRecorderManager: {},
						getBackgroundAudioPlayerState: {
							object: {},
							success: {
								duration: 1,
								currentPosition: 1,
								status: ["0", "1", "2"],
								downloadPercent: 1,
								dataUrl: 1
							}
						},
						playBackgroundAudio: {
							object: {
								dataUrl: 1,
								title: 1,
								coverImgUrl: 1
							},
							success: {}
						},
						pauseBackgroundAudio: {
							object: {},
							success: {}
						},
						seekBackgroundAudio: {
							object: {
								position: 1
							},
							success: {}
						},
						stopBackgroundAudio: {
							object: {},
							success: {}
						},
						onBackgroundAudioPlay: {
							callback: {}
						},
						onBackgroundAudioPause: {
							callback: {}
						},
						onBackgroundAudioStop: {
							callback: {}
						},
						getAvailableAudioSources: {
							object: {},
							success: {
								audioSources: ["auto", "buildInMic", "headsetMic", "mic", "camcorder", "voice_communication", "voice_recognition"]
							}
						},
						startRecord: {
							object: {},
							success: {
								tempFilePath: 1
							}
						},
						stopRecord: {
							object: {},
							success: {}
						},
						setInnerAudioOption: {
							object: {
								mixWithOther: 1,
								obeyMuteSwitch: 1,
								speakerOn: 1
							},
							success: {}
						},
						playVoice: {
							object: {
								filePath: 1,
								duration: 1
							},
							success: {}
						},
						pauseVoice: {
							object: {},
							success: {}
						},
						stopVoice: {
							object: {},
							success: {}
						},
						connectSocket: {
							object: {
								url: 1,
								header: 1,
								protocols: 1,
								tcpNoDelay: 1,
								perMessageDeflate: 1,
								timeout: 1
							},
							success: {}
						},
						closeSocket: {
							object: {
								code: 1,
								reason: 1
							},
							success: {}
						},
						sendSocketMessage: {
							object: {
								data: 1
							},
							success: {}
						},
						onSocketOpen: {
							callback: {
								header: 1
							}
						},
						onSocketClose: {
							callback: {
								code: 1,
								reason: 1
							}
						},
						onSocketMessage: {
							callback: {
								data: 1
							}
						},
						onSocketError: {
							callback: {
								errMsg: 1
							}
						},
						addFileToFavorites: {
							object: {
								filePath: 1,
								fileName: 1
							},
							success: {}
						},
						addVideoToFavorites: {
							object: {
								videoPath: 1,
								thumbPath: 1
							},
							success: {}
						},
						showRedPackage: {
							object: {
								url: 1
							},
							success: {}
						},
						getSetting: {
							object: {
								withSubscriptions: 1
							},
							success: {
								authSetting: 1,
								subscriptionsSetting: 1,
								miniprogramAuthSetting: 1
							}
						},
						openSetting: {
							object: {
								withSubscriptions: 1
							},
							success: {
								authSetting: 1,
								subscriptionsSetting: 1
							}
						},
						authPrivateMessage: {
							object: {
								shareTicket: 1
							},
							success: {
								errMsg: 1,
								valid: 1,
								encryptedData: 1,
								iv: 1
							}
						},
						getShareInfo: {
							object: {
								shareTicket: 1,
								timeout: 1
							},
							success: {
								errMsg: 1,
								encryptedData: 1,
								iv: 1,
								cloudID: 1
							}
						},
						hideShareMenu: {
							object: {
								menus: 1
							},
							success: {}
						},
						shareFileMessage: {
							object: {
								filePath: 1,
								fileName: 1
							},
							success: {}
						},
						shareVideoMessage: {
							object: {
								videoPath: 1,
								thumbPath: 1
							},
							success: {}
						},
						showShareImageMenu: {
							object: {
								path: 1
							},
							success: {}
						},
						showShareMenu: {
							object: {
								withShareTicket: 1,
								menus: 1
							},
							success: {}
						},
						updateShareMenu: {
							object: {
								withShareTicket: 1,
								isUpdatableMessage: 1,
								activityId: 1,
								toDoActivityId: 1,
								templateInfo: 1,
								isPrivateMessage: 1
							},
							success: {}
						},
						checkIsSoterEnrolledInDevice: {
							object: {
								checkAuthMode: ["fingerPrint", "facial", "speech"]
							},
							success: {
								isEnrolled: 1,
								errMsg: 1
							}
						},
						checkIsSupportSoterAuthentication: {
							object: {},
							success: {
								supportMode: ["fingerPrint", "facial", "speech"]
							}
						},
						startSoterAuthentication: {
							object: {
								requestAuthModes: ["fingerPrint", "facial", "speech"],
								challenge: 1,
								authContent: 1
							},
							success: {
								authMode: 1,
								resultJSON: 1,
								resultJSONSignature: 1,
								errCode: 1,
								errMsg: 1
							}
						},
						shareToWeRun: {
							object: {
								recordList: 1
							},
							success: {}
						},
						navigateBackMiniProgram: {
							object: {
								extraData: 1
							},
							success: {}
						},
						navigateToMiniProgram: {
							object: {
								appId: 1,
								path: 1,
								extraData: 1,
								envVersion: ["develop", "trial", "release"]
							},
							success: {}
						},
						setNavigationBarTitle: {
							object: {
								title: 1
							},
							success: {}
						},
						showNavigationBarLoading: {
							object: {},
							success: {}
						},
						hideNavigationBarLoading: {
							object: {},
							success: {}
						},
						hideHomeButton: {
							object: {},
							success: {}
						},
						setNavigationBarColor: {
							object: {
								frontColor: 1,
								backgroundColor: 1,
								animation: ["duration", "timingFunc"]
							},
							success: {}
						},
						redirectTo: {
							object: {
								url: 1
							},
							success: {}
						},
						reLaunch: {
							object: {
								url: 1
							},
							success: {}
						},
						navigateTo: {
							object: {
								url: 1,
								events: 1
							},
							success: {
								eventChannel: 1
							}
						},
						switchTab: {
							object: {
								url: 1
							},
							success: {}
						},
						navigateBack: {
							object: {
								delta: 1
							},
							success: {}
						},
						createBLEPeripheralServer: {
							object: {},
							success: {
								server: 1
							}
						},
						onBLEPeripheralConnectionStateChanged: {
							callback: {
								deviceId: 1,
								serverId: 1,
								connected: 1
							}
						},
						offBLEPeripheralConnectionStateChanged: {
							callback: {}
						},
						createMediaAudioPlayer: {},
						createInterstitialAd: {
							object: {
								adUnitId: 1
							}
						},
						createRewardedVideoAd: {
							object: {
								adUnitId: 1,
								multiton: 1
							}
						}
					},
					cloud: {
						class: {},
						method: {
							callFunction: {
								object: {},
								success: {}
							},
							callContainer: {
								object: {},
								success: {}
							}
						}
					},
					serviceMarket: {
						class: {},
						method: {
							invokeService: {
								object: {},
								success: {}
							}
						}
					}
				}
			},
			8960: (e, t, o) => {
				"use strict";
				const s = o(6389),
					c = o(856),
					a = o(760),
					{
						syncSDKList: r
					} = o(4534),
					n = ["__createPluginGlobal"],
					i = Object.defineProperty;

				function l(e, t) {
					var o;
					if (!top.__global.getHookMethodsCache) return !0;
					const s = top.__global.getHookMethodsCache();
					return !s || !!(null === (o = s[e]) || void 0 === o ? void 0 : o[t])
				}

				function u(e) {
					return l("APPSERVICE_ON_BEFORE_INVOKE_API", e)
				}

				function d(e) {
					return l("APPSERVICE_ON_AFTER_INVOKE_API", e)
				}

				function g(e) {
					return l("APPSERVICE_ON_BEFORE_INVOKE_API_PREVENT", e)
				}

				function p(e) {
					return l("APPSERVICE_ON_AFTER_INVOKE_API_PREVENT", e)
				}
				Object.defineProperty = function(e, t, o) {
					return "string" == typeof t && s(n, t) && o && c(o, {
						configurable: !0
					}), i(e, t, o)
				};
				const f = (e, t, o, s, c) => {
						t.errMsg = t.errMsg || `${e}:ok`;
						const a = new RegExp(`${e}:\\s*ok`).test(t.errMsg),
							r = new RegExp(`${e}:\\s*fail`).test(t.errMsg);
						a ? "function" == typeof o && o(t) : r && "function" == typeof s && s(t), "function" == typeof c && c(t)
					},
					b = (e, t, o, s, c) => {
						const a = s.success,
							r = s.fail,
							n = s.complete,
							i = c.namespace,
							l = i ? `${i}.${t}` : t;
						let u = s;
						if (!c.preventDefault && c.args) {
							const e = c.args[0];
							u = "object" == typeof e ? Object.assign(s, e) : s
						}
						delete u.success, delete u.fail, u.complete = function(e) {
							const o = c.preventDefault && c.result || e;
							if (!c.hasAfterInvokePrevent) return f(t, o, a, r, n), void(d(l) && window.__global.WeixinJSBridge.afterinvoke(l, {
								res: o,
								args: [s]
							}, (() => {}), {
								preventDefault: !1,
								pluginId: c.pluginId
							}));
							window.__global.WeixinJSBridge.afterinvoke(l, {
								res: o,
								args: [s]
							}, (e => {
								const s = (null == e ? void 0 : e.result) || o;
								f(t, s, a, r, n)
							}), {
								pluginId: c.pluginId
							})
						};
						if (!c.preventDefault || ["request", "downloadFile", "uploadFile", "connectSocket"].includes(t)) return o.apply(e, [u]);
						u.complete(c.result)
					},
					h = {
						request: !0,
						downloadFile: !0,
						uploadFile: !0,
						connectSocket: !0,
						createUDPSocket: !0
					},
					cocoSources = [ "getStorage",
									"getUserInfo", "getUserProfile",
									"getLocation", "getFuzzyLocation", "onLocationChange", "startLocationUpdate", 
									"startLocationUpdateBackground", "choosePoi", "chooseLocation", "chooseAddress", 
									"getNetworkType", "createCameraContext", "getBLEDeviceCharacteristics", "getConnectedWifi",
									"chooseVideo", "chooseMedia", "getFileInfo", "startRecord", "getRecorderManager", "joinVoIPChat",
									"chooseImage", "chooseMessageFile", 
									"chooseLicensePlate",
									"getWeRunData", "chooseInvoiceTitle", "chooseInvoice", "chooseContact"],
					cocoSinks = {   "request":["url", "data"], // we add "data" since taintMini include it
									"uploadFile":["url", "filePath", "name"],
									"downloadFile":["url", "filePath"], 
									"connectSocket": ["url"], // these four network related APIs
									// "createTCPSocket": [], // no arguments
									// "createUDPSocket":[], // no arguments
									"navigateToMiniProgram":["appId", "path", "extraData"], // extraData is an object
									"sendSocketMessage":["data"], // data: string/ArrayBuffer	
									"writeBLECharacteristicValue":["deviceId", "serviceId", "characteristicId", "value"], // value is an ArrayBuffer, do we support taint for ArrayBuffer?
									// "createBLEPeripheralServer":[], // no arguments
									"openBluetoothAdapter":["mode"], 
									"createVKSession":["version", "track"], // track is an object
									// "createLivePusherContext":[], // no arguments
									"saveImageToPhotosAlbum":["filePath"],
									"saveVideoToPhotosAlbum": ["filePath"],
									// "addPhoneContact": [], // a lot ...need user approve
									// "addPhoneRepeatCalendar": [], // a lot ... need user approve
									// "addPhoneCalendar": [] // a lot ...need user approve
									"setStorage": ["key", "data"], // data can be objects
								}, 
					cocoOnShow = ["onShow", "getLaunchOptionsSync", "onAppShow", "getEnterOptionsSync"],
					// navigateTo: url, redirectTo: url, switchTab: url, reLaunch: url
					miniumNavigate =["navigateTo", "redirectTo", "switchTab", "reLaunch"],
					cocoCallbacks = ["success", "fail", "complete"],	
					taintCallbacks = function(args){
						for (const i in cocoCallbacks){
							if (args.hasOwnProperty(cocoCallbacks[i])){
								var tmp = args[cocoCallbacks[i]];
								args[cocoCallbacks[i]] = function(res){
									// here we taint both the keys and the values
									__setTaint__(res, __taintConstants__()['WechatAPI']); 
									// console.log('hack source');
									tmp(res); 
								}
							}
						}
						return args;
					},		
					checkTaintObjectProperties = function(obj, prefix = '') {
						for (let key in obj) {
						  if (obj.hasOwnProperty(key)) {
						  	key.__checkTaint__();
							// console.log('key', key, key.__getTaint__());
							const fullKey = prefix ? `${prefix}.${key}` : key;
							const value = obj[key];
					  
							if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
								  checkTaintObjectProperties(value, fullKey)
							} else if (typeof value === 'string') {
								value.__checkTaint__();
								// console.log('value', value.__getTaint__());
							} else if (Array.isArray(value)){
								for (const el of value) {
									if (typeof el === 'string'){
										el.__checkTaint__();
									  	// console.log('value', el.__getTaint__());
								  }
							  }
							}
						  }
						}
					},
					v = (e, t, o) => {
						const s = {},
							{
								pluginId: c,
								namespace: a
							} = o || {};
						for (const o in e)
							if (t.hasOwnProperty(o)) {
								const n = e[o];
								if (!n) continue;
								s[o] = {
									value(...s) {
										var i, l;
										const f = null === (l = (i = top.__global).getHookMethodsCache) || void 0 === l ? void 0 : l.call(i);
										console.log('jianjia see all API name and args: ' + o + JSON.stringify(s));
										if (o=="setStorageSync"){
											s[0].__checkTaint__();
											if (typeof s[1]==='string'){
												s[1].__checkTaint__();
											}
											else {
												checkTaintObjectProperties(s[1]);
											}
										}
										else if (cocoSources.indexOf(o)!== -1){
											console.log('jianjia: taint source hit, API name and args: ' + o + JSON.stringify(s));
											if (s.length>0){
												s[0] = taintCallbacks(s[0]);
											}
										}
										else if (cocoSinks.hasOwnProperty(o)){
											console.log("jianjia: taint sink hit", o, JSON.stringify(s))
											for (var index in cocoSinks[o]){
												var prop_val = cocoSinks[o][index];
												if (typeof s[0][prop_val]==='string'){
													// let decoder = new TextDecoder('utf-8');
              										// let stringResult = decoder.decode(s[0][prop_val].__getTaint__());
													// console.log('jianjia: see string taint', stringResult);
													s[0][prop_val].__checkTaint__();
												}
												else{ // if s[0][prop_val] is an object, taint it recursively
													checkTaintObjectProperties(s[0][prop_val]);
												}
											}
										}
										else if (cocoOnShow.indexOf(o)!== -1){
											console.log('cocoOnShow: ', res);
										}
										if (!t.hasOwnProperty(o) || !f || 0 === Object.keys(f).length) {
											var res = n.apply(e, s);
											// jianjia start
											if (o=="getStorageSync") {
												console.log('see getStorageSync', res);
												if (typeof res === 'string' && res !== ""){
													console.log(res);
													var taintTmp = res.__getTaint__();
													var view = new Uint8Array(taintTmp); 
													if (view[0]==0){ // if it's not tainted before, we taint it.
														__setTaint__(res, __taintConstants__()["WechatAPI"]);
													}
													console.log("res after taint: ", res.__getTaint__());
												}
											}
											// jianjia end
											return res;
										} // jianjia: here may return error, so we check before this
                                        const v = t[o],
											m = v.hasOwnProperty("object") && v.hasOwnProperty("success") && !r[o],
											C = o.startsWith("off") || v.hasOwnProperty("callback"),
											S = "{}" === JSON.stringify(v),
											y = a ? `${a}.${o}` : o;
										if (u(y) && window.__global.WeixinJSBridge.beforeinvoke(y, s, (() => {}), {
												preventDefault: !1,
												pluginId: c
											}), !t.hasOwnProperty(o) || C || S) return n.apply(e, s);
										if (h[o]) return b(e, o, n, s[0], {
											hasAfterInvokePrevent: !1,
											pluginId: c,
											namespace: a
										});
										if (m) {
											const [t = {}, ...r] = s, {
												success: i,
												fail: l,
												complete: u
											} = t;
											return s.length > 1 ? n.apply(e, s) : i || l || u ? g(y) ? window.__global.WeixinJSBridge.beforeinvoke(y, s, (s => {
												const r = Object.assign(Object.assign({}, s), {
													namespace: a,
													pluginId: c
												});
												b(e, o, n, t, r)
											}), {
												isAsync: m,
												pluginId: c
											}) : b(e, o, n, t, {
												hasAfterInvokePrevent: p(o),
												pluginId: c,
												namespace: a
											}) : new Promise(((r, i) => {
												const l = Object.assign({
													success: r,
													fail: i
												}, t);
												g(y) ? window.__global.WeixinJSBridge.beforeinvoke(y, s, (t => {
													const s = Object.assign(Object.assign({}, t), {
														namespace: a,
														pluginId: c
													});
													b(e, o, n, l, s)
												}), {
													isAsync: m,
													pluginId: c
												}) : b(e, o, n, l, {
													hasAfterInvokePrevent: p(o),
													pluginId: c,
													namespace: a
												})
											}))
										}
										let k;
										return u(y) ? window.__global.WeixinJSBridge.beforeinvoke(y, s, (t => {
											const o = t.args || s;
											k = n.apply(e, o), t.preventDefault && (k = t.result), t.hasAfterInvokePrevent && window.__global.WeixinJSBridge.afterinvoke(y, {
												res: k,
												args: s
											}, (e => {
												k = (null == e ? void 0 : e.result) || t
											}), {
												isAsync: m,
												pluginId: c
											})
										}), {
											isAsync: m,
											pluginId: c
										}) : (k = n.apply(e, s), p(y) && window.__global.WeixinJSBridge.afterinvoke(y, {
											res: k,
											args: s
										}, (e => {
											k = null == e ? void 0 : e.result
										}), {
											isAsync: m,
											pluginId: c
										})), d(y) && window.__global.WeixinJSBridge.afterinvoke(y, {
											res: k,
											args: s
										}, (() => {}), {
											preventDefault: !1,
											pluginId: c,
											namespace: a
										}), k
									},
									configurable: !0,
									writable: !0
								}
							} Object.defineProperties(e, s)
					};
				e.exports = e => {
					const t = e.__appServiceSDK__.wx,
						o = e.__appServiceSDK__._apiData;
					let s = o ? o.method : a.default.method;
					if (s = Object.assign(Object.assign({}, s), {
							operateWXData: {
								object: {},
								success: {}
							}
						}), void 0 !== t.cloud) {
						const e = a.default.cloud.method;
						v(t.cloud, e, {
							namespace: "cloud"
						})
					}
					if (void 0 !== t.serviceMarket) {
						const e = a.default.serviceMarket.method;
						v(t.serviceMarket, e, {
							namespace: "serviceMarket"
						})
					}
					v(t, s), window.__devtoolsUseBeforeInvoke__ = !0;
					const c = e.__appServiceEngine__,
						r = c.__createPluginGlobal;
					Object.defineProperty(c, "__createPluginGlobal", {
						get: () => function(e, t) {
							const o = r(e, t);
							if (void 0 !== o.wx.cloud) {
								const t = a.default.cloud.method;
								v(o.wx.cloud, t, {
									namespace: "cloud",
									pluginId: e
								})
							}
							if (void 0 !== o.wx.serviceMarket) {
								const e = a.default.serviceMarket.method;
								v(o.wx.serviceMarket, e, {
									namespace: "serviceMarket"
								})
							}
							return v(o.wx, s, {
								pluginId: e
							}), o
						}
					})
				}
			}
		},
		t = {};

	function o(s) {
		var c = t[s];
		if (void 0 !== c) return c.exports;
		var a = t[s] = {
			exports: {}
		};
		return e[s](a, a.exports, o), a.exports
	}(() => {
		"use strict";
		const e = o(8960),
			t = window.__passWAServiceGlobal__ || function() {};
		window.__passWAServiceGlobal__ = function(o) {
			for (const e in o) "Protect" !== e && "WeixinJSBridge" === e && (window[e] = o[e]);
			e(o), t(o)
		}
	})()
})();
//# sourceURL=ide:///extensions/plugin/appservice/index.js