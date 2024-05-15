(() => {
    var e = {
            6659: e => {
                "use strict";
                var t = Object.prototype.hasOwnProperty,
                    o = "~";

                function n() {}

                function r(e, t, o) {
                    this.fn = e, this.context = t, this.once = o || !1
                }

                function i() {
                    this._events = new n, this._eventsCount = 0
                }
                Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (o = !1)), i.prototype.eventNames = function() {
                    var e, n, r = [];
                    if (0 === this._eventsCount) return r;
                    for (n in e = this._events) t.call(e, n) && r.push(o ? n.slice(1) : n);
                    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
                }, i.prototype.listeners = function(e, t) {
                    var n = o ? o + e : e,
                        r = this._events[n];
                    if (t) return !!r;
                    if (!r) return [];
                    if (r.fn) return [r.fn];
                    for (var i = 0, a = r.length, s = new Array(a); i < a; i++) s[i] = r[i].fn;
                    return s
                }, i.prototype.emit = function(e, t, n, r, i, a) {
                    var s = o ? o + e : e;
                    if (!this._events[s]) return !1;
                    var c, d, l = this._events[s],
                        u = arguments.length;
                    if (l.fn) {
                        switch (l.once && this.removeListener(e, l.fn, void 0, !0), u) {
                            case 1:
                                return l.fn.call(l.context), !0;
                            case 2:
                                return l.fn.call(l.context, t), !0;
                            case 3:
                                return l.fn.call(l.context, t, n), !0;
                            case 4:
                                return l.fn.call(l.context, t, n, r), !0;
                            case 5:
                                return l.fn.call(l.context, t, n, r, i), !0;
                            case 6:
                                return l.fn.call(l.context, t, n, r, i, a), !0
                        }
                        for (d = 1, c = new Array(u - 1); d < u; d++) c[d - 1] = arguments[d];
                        l.fn.apply(l.context, c)
                    } else {
                        var g, p = l.length;
                        for (d = 0; d < p; d++) switch (l[d].once && this.removeListener(e, l[d].fn, void 0, !0), u) {
                            case 1:
                                l[d].fn.call(l[d].context);
                                break;
                            case 2:
                                l[d].fn.call(l[d].context, t);
                                break;
                            case 3:
                                l[d].fn.call(l[d].context, t, n);
                                break;
                            case 4:
                                l[d].fn.call(l[d].context, t, n, r);
                                break;
                            default:
                                if (!c)
                                    for (g = 1, c = new Array(u - 1); g < u; g++) c[g - 1] = arguments[g];
                                l[d].fn.apply(l[d].context, c)
                        }
                    }
                    return !0
                }, i.prototype.on = function(e, t, n) {
                    var i = new r(t, n || this),
                        a = o ? o + e : e;
                    return this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : (this._events[a] = i, this._eventsCount++), this
                }, i.prototype.once = function(e, t, n) {
                    var i = new r(t, n || this, !0),
                        a = o ? o + e : e;
                    return this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], i] : this._events[a].push(i) : (this._events[a] = i, this._eventsCount++), this
                }, i.prototype.removeListener = function(e, t, r, i) {
                    var a = o ? o + e : e;
                    if (!this._events[a]) return this;
                    if (!t) return 0 == --this._eventsCount ? this._events = new n : delete this._events[a], this;
                    var s = this._events[a];
                    if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || (0 == --this._eventsCount ? this._events = new n : delete this._events[a]);
                    else {
                        for (var c = 0, d = [], l = s.length; c < l; c++)(s[c].fn !== t || i && !s[c].once || r && s[c].context !== r) && d.push(s[c]);
                        d.length ? this._events[a] = 1 === d.length ? d[0] : d : 0 == --this._eventsCount ? this._events = new n : delete this._events[a]
                    }
                    return this
                }, i.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = o ? o + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new n : delete this._events[t])) : (this._events = new n, this._eventsCount = 0), this
                }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
                    return this
                }, i.prefixed = o, i.EventEmitter = i, e.exports = i
            },
            1356: (e, t, o) => {
                var n = o(9170),
                    r = o(5180);
                t = function(e, t) {
                    if (r(e)) return e;
                    if (t && n(t, e)) return [e];
                    var o = [];
                    return e.replace(i, (function(e, t, n, r) {
                        o.push(n ? r.replace(a, "$1") : t || e)
                    })), o
                };
                var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    a = /\\(\\)?/g;
                e.exports = t
            },
            9570: (e, t, o) => {
                var n = o(2735),
                    r = o(1851),
                    i = o(5180),
                    a = o(5593);
                t = function(e) {
                    return i(e) ? e.map((function(e) {
                        return t(e)
                    })) : n(e) && !r(e) ? a(e, (function(e) {
                        return t(e)
                    })) : e
                }, e.exports = t
            },
            6389: (e, t, o) => {
                var n = o(4050),
                    r = o(6292),
                    i = o(3420),
                    a = o(9938);
                t = function(e, t) {
                    return r(e) ? e.indexOf(t) > -1 : (i(e) || (e = a(e)), n(e, t) >= 0)
                }, e.exports = t
            },
            5002: (e, t, o) => {
                var n = o(6093),
                    r = o(393);
                t = function(e, t) {
                    return function(o) {
                        return r(arguments, (function(i, a) {
                            if (0 !== a) {
                                var s = e(i);
                                r(s, (function(e) {
                                    t && !n(o[e]) || (o[e] = i[e])
                                }))
                            }
                        })), o
                    }
                }, e.exports = t
            },
            393: (e, t, o) => {
                var n = o(3420),
                    r = o(6361),
                    i = o(8474);
                t = function(e, t, o) {
                    var a, s;
                    if (t = i(t, o), n(e))
                        for (a = 0, s = e.length; a < s; a++) t(e[a], a, e);
                    else {
                        var c = r(e);
                        for (a = 0, s = c.length; a < s; a++) t(e[c[a]], c[a], e)
                    }
                    return e
                }, e.exports = t
            },
            9404: (e, t, o) => {
                var n = o(6361);
                t = o(5002)(n), e.exports = t
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
                var n = o(8521);
                t = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === n(e)
                }, e.exports = t
            },
            3420: (e, t, o) => {
                var n = o(1589),
                    r = o(1851),
                    i = Math.pow(2, 53) - 1;
                t = function(e) {
                    if (!e) return !1;
                    var t = e.length;
                    return n(t) && t >= 0 && t <= i && !r(e)
                }, e.exports = t
            },
            1851: (e, t, o) => {
                var n = o(8521);
                t = function(e) {
                    var t = n(e);
                    return "[object Function]" === t || "[object GeneratorFunction]" === t || "[object AsyncFunction]" === t
                }, e.exports = t
            },
            2476: (e, t, o) => {
                var n = o(6361);
                t = function(e, t) {
                    var o = n(t),
                        r = o.length;
                    if (null == e) return !r;
                    e = Object(e);
                    for (var i = 0; i < r; i++) {
                        var a = o[i];
                        if (t[a] !== e[a] || !(a in e)) return !1
                    }
                    return !0
                }, e.exports = t
            },
            1589: (e, t, o) => {
                var n = o(8521);
                t = function(e) {
                    return "[object Number]" === n(e)
                }, e.exports = t
            },
            2735: (e, t) => {
                t = function(e) {
                    var t = typeof e;
                    return !!e && ("function" === t || "object" === t)
                }, e.exports = t
            },
            6292: (e, t, o) => {
                var n = o(8521);
                t = function(e) {
                    return "[object String]" === n(e)
                }, e.exports = t
            },
            6093: (e, t) => {
                t = function(e) {
                    return void 0 === e
                }, e.exports = t
            },
            6361: (e, t, o) => {
                var n = o(9170);
                t = Object.keys ? Object.keys : function(e) {
                    var t = [];
                    for (var o in e) n(e, o) && t.push(o);
                    return t
                }, e.exports = t
            },
            5593: (e, t, o) => {
                var n = o(8998),
                    r = o(6361);
                t = function(e, t, o) {
                    t = n(t, o);
                    for (var i = r(e), a = i.length, s = {}, c = 0; c < a; c++) {
                        var d = i[c];
                        s[d] = t(e[d], d, e)
                    }
                    return s
                }, e.exports = t
            },
            1696: (e, t, o) => {
                var n = o(9404),
                    r = o(2476);
                t = function(e) {
                    return e = n({}, e),
                        function(t) {
                            return r(t, e)
                        }
                }, e.exports = t
            },
            2368: (e, t) => {
                function o(e) {
                    if ("function" != typeof e) throw new TypeError(e + " is not a function");
                    return e
                }
                t = "object" == typeof process && process.nextTick ? process.nextTick : "function" == typeof setImmediate ? function(e) {
                    setImmediate(o(e))
                } : function(e) {
                    setTimeout(o(e), 0)
                }, e.exports = t
            },
            8521: (e, t) => {
                var o = Object.prototype.toString;
                t = function(e) {
                    return o.call(e)
                }, e.exports = t
            },
            8474: (e, t, o) => {
                var n = o(6093);
                t = function(e, t, o) {
                    if (n(t)) return e;
                    switch (null == o ? 3 : o) {
                        case 1:
                            return function(o) {
                                return e.call(t, o)
                            };
                        case 3:
                            return function(o, n, r) {
                                return e.call(t, o, n, r)
                            };
                        case 4:
                            return function(o, n, r, i) {
                                return e.call(t, o, n, r, i)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }, e.exports = t
            },
            4962: (e, t, o) => {
                var n = o(5180),
                    r = o(7059);
                t = function(e) {
                    return n(e) ? function(t) {
                        return r(t, e)
                    } : (t = e, function(e) {
                        return null == e ? void 0 : e[t]
                    });
                    var t
                }, e.exports = t
            },
            8998: (e, t, o) => {
                var n = o(1851),
                    r = o(2735),
                    i = o(5180),
                    a = o(8474),
                    s = o(1696),
                    c = o(9407),
                    d = o(4962);
                t = function(e, t, o) {
                    return null == e ? c : n(e) ? a(e, t, o) : r(e) && !i(e) ? s(e) : d(e)
                }, e.exports = t
            },
            7059: (e, t, o) => {
                var n = o(6093),
                    r = o(1356);
                t = function(e, t) {
                    var o;
                    for (o = (t = r(t, e)).shift(); !n(o);) {
                        if (null == (e = e[o])) return;
                        o = t.shift()
                    }
                    return e
                }, e.exports = t
            },
            9938: (e, t, o) => {
                var n = o(393);
                t = function(e) {
                    var t = [];
                    return n(e, (function(e) {
                        t.push(e)
                    })), t
                }, e.exports = t
            },
            6391: (e, t, o) => {
                "use strict";
                const n = o(7799),
                    r = o(6955),
                    i = o(5220),
                    a = o(6202),
                    s = o(4572);
                e.exports = function(e) {
                    const t = {};
                    let o = 1,
                        c = !1,
                        d = !1;
                    const l = e => {
                            const {
                                command: o,
                                data: n
                            } = e;
                            if ("APPSERVICE_BEFORE_INVOKE_CALLBACK" === o) {
                                if (n.res.needImplement) {
                                    const {
                                        api: e,
                                        args: o
                                    } = n.res;
                                    r[e](e, o, t[n.callbackID])
                                } else {
                                    const e = n.callbackID,
                                        o = t[e];
                                    "function" == typeof o && o(n.res)
                                }
                                delete t[n.callbackID]
                            } else if ("APPSERVICE_AFTER_INVOKE_CALLBACK" === o) {
                                const e = n.callbackID,
                                    o = t[e];
                                "function" == typeof o && o(n.res)
                            }
                        },
                        u = function(e, t, o) {
                            return function(e) {
                                const n = Object.assign(Object.assign({}, e), o);
                                "function" == typeof t && t(n)
                            }
                        };
                    return s.once("RESET_INSTANCE", (() => {
                        c = !0, n.removeCallback(l)
                    })), d || (d = !0, n.registerCallback(l)), {
                        beforeinvoke: function(s, d, l, g) {
                            if (c) return;
                            const {
                                isAsync: p,
                                preventDefault: f,
                                pluginId: h
                            } = g;
                            a.debugLog(`${new Date} WeixinJSBridge beforeinvoke ${s}`, arguments), a.debugInfo({
                                type: "beforeinvoke",
                                eventName: s,
                                data: arguments,
                                timesmap: new Date
                            });
                            let m = d;
                            try {
                                JSON.stringify(d)
                            } catch (e) {
                                m = [{
                                    error: !0,
                                    errMsg: e
                                }]
                            }
                            if (!1 === f) return void n.send({
                                command: "APPSERVICE_BEFORE_INVOKE",
                                data: {
                                    api: s,
                                    args: m,
                                    preventDefault: !1
                                },
                                common: e
                            });
                            const _ = u(0, l, {}),
                                v = o++;
                            if (p) t[v] = _, n.send({
                                command: "APPSERVICE_BEFORE_INVOKE",
                                data: {
                                    api: s,
                                    args: m,
                                    pluginId: h,
                                    callbackID: v
                                },
                                common: e
                            });
                            else {
                                const e = i.sync(s, m, {
                                    beforeInvoke: !0,
                                    pluginId: h
                                });
                                e.needImplement ? r[s](s, d, _) : _(e)
                            }
                        },
                        afterinvoke: function(r, s, d, l) {
                            if (c) return;
                            const {
                                isAsync: g,
                                preventDefault: p,
                                pluginId: f
                            } = l;
                            a.debugLog(`${new Date} WeixinJSBridge afterinvoke ${r}`, arguments), a.debugInfo({
                                type: "afterinvoke",
                                eventName: r,
                                data: arguments,
                                timesmap: new Date
                            });
                            const {
                                res: h,
                                args: m
                            } = s;
                            let _ = m;
                            try {
                                JSON.stringify(m)
                            } catch (e) {
                                _ = [{
                                    error: !0,
                                    errMsg: e
                                }]
                            }
                            const v = {
                                res: h,
                                args: _,
                                pluginId: f
                            };
                            if (!1 === p) return void n.send({
                                command: "APPSERVICE_AFTER_INVOKE",
                                data: {
                                    api: r,
                                    args: v,
                                    preventDefault: !1
                                },
                                common: e
                            });
                            const y = u(0, d, {}),
                                b = o++;
                            if (g) t[b] = y, n.send({
                                command: "APPSERVICE_AFTER_INVOKE",
                                data: {
                                    api: r,
                                    args: v,
                                    callbackID: b,
                                    common: e
                                }
                            });
                            else {
                                y(i.sync(r, v, {
                                    afterInvoke: !0
                                }))
                            }
                        }
                    }
                }
            },
            4712: (e, t, o) => {
                "use strict";
                const n = o(990),
                    r = o(7799),
                    i = o(7419),
                    a = o(6955),
                    s = o(2614),
                    c = o(4813),
                    d = o(7821),
                    l = o(5220),
                    u = o(6202),
                    g = o(4534),
                    p = o(4572),
                    f = o(1026),
                    h = o(8286),
                    {
                        arrayBufferToBase64: m,
                        coverRes: _,
                        evaluateRes: v,
                        isKindOfArrayBuffer: y,
                        coverResToOriginArgs: b
                    } = u,
                    {
                        modifyComponentData: S
                    } = f,
                    {
                        isSyncSDK: w,
                        needTransArgsBase64Api: E,
                        genIdForDevTools: k,
                        invokeNeedToDevtoolsApi: C
                    } = g;
                let I, T, {
                        isUseApiMock: A,
                        apiMockApiList: D
                    } = g,
                    O = !1,
                    R = !1;

                function M() {
                    R || (r.registerCallback((e => {
                        const {
                            command: t,
                            data: o
                        } = e;
                        "SIMULATOR_APPSERVICE_HOOK_METHODS_CACHE_UPDATED" === t && o.pluginHookMethodsCache && (I = o.pluginHookMethodsCache)
                    })), R = !0), O || (r.send({
                        command: "SIMULATOR_APPSERVICE_HOOK_METHODS_CACHE_ACTION",
                        data: {
                            action: "get"
                        }
                    }), O = !0)
                }

                function P(e, t) {
                    var o;
                    if (!s[t]) return !1;
                    const n = (I || M(), I);
                    return !!n && !!(null === (o = n[e]) || void 0 === o ? void 0 : o[t])
                }
                let x = !1,
                    N = !1;

                function L() {
                    N || (r.registerCallback((e => {
                        const {
                            command: t,
                            data: o
                        } = e;
                        "APPSERVICE_HOOK_METHODS_CACHE_UPDATED" === t && o.pluginHookMethodsCache && (T = o.pluginHookMethodsCache)
                    })), N = !0), x || (r.send({
                        command: "APPSERVICE_HOOK_METHODS_CACHE_ACTION",
                        data: {
                            action: "get"
                        }
                    }), x = !0)
                }

                function $() {
                    return T || L(), T
                }

                function W(e, t) {
                    var o;
                    if (!C[t]) return !1;
                    const n = $();
                    if (n) {
                        const r = C[t];
                        return !!(null === (o = n[e]) || void 0 === o ? void 0 : o[r])
                    }
                    return !1
                }
                __global.getHookMethodsCache = $, p.on("RESET_INSTANCE", (() => {
                    O = !1, M(), x = !1, L()
                })), e.exports = function(e) {
                    const t = {};
                    let o = 1,
                        s = !1,
                        f = !1;
                    const C = o => {
                            const {
                                command: n,
                                data: i
                            } = o;
                            if ("APPSERVICE_INVOKE_CALLBACK" === n) {
                                if (i.res.needImplement) {
                                    const {
                                        api: e,
                                        args: o
                                    } = i.res;
                                    a[e](e, o, t[i.callbackID])
                                } else {
                                    const e = i.callbackID,
                                        o = t[e];
                                    _(i.res), "function" == typeof o && o(i.res)
                                }
                                delete t[i.callbackID]
                            } else "APPSERVICE_INVOKE_EMITTER" === n ? p.emit("triggerOnEvent", i.name, i.payload) : "API_MOCK_STATUS_CHANGE" === n ? A = i : "API_MOCK_APILIST_CHANGE" === n && (D = i.apiList);
                            "MODIFY_COMPONENT_DATA" === n && S(i.id, i.componentData, i.webviewId), "UPDATE_APPDATA_PANEL_DATA" === n && r.send({
                                command: "SEND_APP_DATA",
                                data: h.getWxAppData(),
                                common: e
                            })
                        },
                        I = function(e, t, o, n) {
                            return function(r) {
                                o && r.__toOrigin && b(r, o), v(r), "function" == typeof t && (e || n ? t(r) : setTimeout((() => {
                                    t(r)
                                }), 0))
                            }
                        };
                    return p.once("RESET_INSTANCE", (() => {
                        s = !0, r.removeCallback(C)
                    })), f || (f = !0, r.registerCallback(C)), {
                        invoke: function(p, f, h) {
                            if (function(e, t, o) {
                                    const r = t => {
                                        const n = w(e);
                                        "function" == typeof o && (n ? o(t) : setTimeout((() => {
                                            o(t)
                                        }), 0))
                                    };
                                    return s ? (r({
                                        errMsg: `${e}: deprecated`
                                    }), !0) : window.__interfaceBuilder && g.ibForbiddenApi[e] ? (console.log("interfacebuilder disabled invoke", e, t), r({
                                        errMsg: `${e}: interfacebuilder disabled`
                                    }), !0) : !!n.check(e, t, r) || !(!i[e] || i[e](e, t, r))
                                }(p, f, h)) return;
                            if (u.debugLog(`${new Date} WeixinJSBridge invoke ${p}`, arguments), u.debugInfo({
                                    type: "invoke",
                                    eventName: p,
                                    data: arguments,
                                    timesmap: new Date
                                }), E[p])
                                for (const e in f) y(f[e]) && (f[e] = m(f[e]));
                            const v = {};
                            if (c[p])
                                for (const e in f) c[p].is(f[e], e) && (c[p].saveOrigin && (v[e] = f[e]), f[e] = c[p].trans(f, f[e]));
                            const b = w(p),
                                S = I(b, h, v);
                            if (d[p]) {
                                const e = d[p](p, f, S);
                                if (!e) return;
                                f = e
                            }
                            const C = k(p, f),
                                T = C ? Object.assign(Object.assign({}, f), {
                                    __devtoolsId: C
                                }) : f;
                            if (a[p] && (!A || void 0 === D[p]) && ! function(e) {
                                    return P("APPSERVICE_ON_BEFORE_INVOKE", e) || W("APPSERVICE_ON_BEFORE_INVOKE_API_PREVENT", e)
                                }(p) && ! function(e) {
                                    return P("APPSERVICE_ON_AFTER_INVOKE", e) || W("APPSERVICE_ON_AFTER_INVOKE_API_PREVENT", e)
                                }(p)) {
                                const t = a[p](p, f, S, e);
                                if ("PROCEED" !== (null == t ? void 0 : t.action)) return
                            }
                            const O = o++;
                            if (!b) return t[O] = I(b, h, v, !0), void r.send({
                                command: "APPSERVICE_INVOKE",
                                data: {
                                    api: p,
                                    args: T,
                                    callbackID: O
                                },
                                common: e
                            });
                            const R = l.sync(p, T);
                            R.needImplement ? a[p](p, f, S) : (_(R), delete R.to, S(R))
                        }
                    }
                }
            },
            5082: (e, t, o) => {
                "use strict";
                const n = o(9570),
                    r = o(6202),
                    i = o(7799),
                    a = o(4572);
                e.exports = function() {
                    const e = a.instanceScope();
                    let t = {},
                        o = !1,
                        s = !1;

                    function c(e, r, i) {
                        if (o) return void console.warn("[memory-leak] triggerOnEvent called on a deprecated instance");
                        t.triggerWorkerEvent && "function" == typeof t.triggerWorkerEvent && t.triggerWorkerEvent(e, n(r));
                        const a = t[e];
                        if ("function" == typeof a) try {
                            a(r, i)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    const d = e => {
                        const {
                            command: t,
                            data: o,
                            webviewID: n
                        } = e;
                        "APPSERVICE_ON_EVENT" === t && (r.coverRes(o.data), c(o.eventName, o.data, n))
                    };
                    return s || (s = !0, i.registerCallback(d)), e.on("triggerOnEvent", (function(e, t, o) {
                        c(e, t, o)
                    })), window.DeviceOrientation = function(e, t, n) {
                        o || c("onAccelerometerChange", {
                            x: e,
                            y: t,
                            z: n
                        })
                    }, a.once("RESET_INSTANCE", (() => {
                        o = !0, t = {}, i.removeCallback(d)
                    })), {
                        on: function(e, n) {
                            o || (r.debugLog(`${new Date} WeixinJSBridge on ${e}`, arguments), r.debugInfo({
                                type: "on",
                                eventName: e,
                                data: arguments,
                                timesmap: new Date
                            }), n && (t[e] = n))
                        },
                        triggerOnEvent: c
                    }
                }
            },
            1227: (e, t, o) => {
                "use strict";
                const n = o(2368),
                    r = o(393),
                    i = o(1851),
                    a = o(8286),
                    s = o(6202),
                    c = o(7799),
                    d = o(4572);
                e.exports = function(e) {
                    let t = !1,
                        o = !0,
                        l = !1;
                    const u = t => {
                        const {
                            command: n,
                            data: s
                        } = t;
                        if ("WRITE_APP_DATA" === n) {
                            const e = a.getPages();
                            r(s, ((t, n) => {
                                const r = t.data,
                                    a = r.__webviewId__;
                                e[n] && e[n].route === t.route && i(e[n].setData) ? (o = !1, e[n].setData(r)) : (null === wx || void 0 === wx ? void 0 : wx.invokeWebviewMethod) ? (o = !1, wx.invokeWebviewMethod({
                                    name: "appDataChange",
                                    args: {
                                        data: r
                                    }
                                })) : g("appDataChange", {
                                    data: {
                                        data: r
                                    }
                                }, [a], !0)
                            }))
                        } else "GET_APP_DATA" === n && c.send({
                            command: "SEND_APP_DATA",
                            data: a.getWxAppData(),
                            common: e
                        })
                    };

                    function g(r, i, d, l) {
                        var u;
                        if (!t) {
                            if (d = d ? d.filter((e => void 0 !== e)) : [], s.debugLog(`${new Date} WeixinJSBridge publish ${r}`, arguments), i && 0 !== r.indexOf("canvas")) {
                                const e = JSON.stringify(i).length;
                                e > 1048576 && (console.group(`${new Date} 数据传输长度过长`), console.warn(`${"vdSyncBatch"===r?"setData":r} 数据传输长度为 ${Math.floor(e/1024)} KB，存在有性能问题！`), console.groupEnd())
                            }
                            s.debugInfo({
                                type: "publish",
                                eventName: r,
                                data: arguments,
                                timesmap: new Date
                            }), "appDataChange" !== r && "pageInitData" !== r && "__updateAppData" !== r || l || n((() => {
                                c.send({
                                    command: "SEND_APP_DATA",
                                    data: a.getWxAppData(),
                                    common: e
                                })
                            })), "invokeWebviewMethod" === r && "appDataChange" === (null === (u = null == i ? void 0 : i.data) || void 0 === u ? void 0 : u.name) && (o && c.send({
                                command: "SEND_APP_DATA",
                                data: a.getWxAppData(),
                                common: e
                            }), o = !0), "vdSync" !== r && "vdSyncBatch" !== r || (o && c.send({
                                command: "SEND_APP_DATA",
                                data: a.getWxAppData(),
                                common: e
                            }), o = !0), c.send({
                                command: "APPSERVICE_PUBLISH",
                                data: {
                                    eventName: r,
                                    data: i,
                                    webviewIds: d
                                },
                                common: e
                            })
                        }
                    }
                    return d.once("RESET_INSTANCE", (() => {
                        t = !0, c.removeCallback(u)
                    })), l || (l = !0, c.registerCallback(u)), {
                        publish: g
                    }
                }
            },
            8610: (e, t, o) => {
                "use strict";
                const n = o(8286),
                    r = o(6202),
                    i = o(3957),
                    a = o(7799),
                    s = o(4572);
                e.exports = function(e) {
                    let t = !1;
                    return s.once("RESET_INSTANCE", (() => {
                        t = !0
                    })), {
                        publishSync: function(o, s, c) {
                            if (t) return;
                            let d;
                            if (c = c ? c.filter((e => void 0 !== e)) : [], r.debugLog(`${new Date} WeixinJSBridge publishsync ${o}`, arguments), r.debugInfo({
                                    type: "publishsync",
                                    eventName: o,
                                    data: arguments,
                                    timesmap: new Date
                                }), 0 === c.length && (d = ["fail no such target", null]), d = i.sync("publishsync", {
                                    eventName: o,
                                    data: s,
                                    webviewIds: c
                                }, 1e4, "fail timeout"), d[0]) throw new Error(d[0]);
                            return "vdSyncSync" === o && a.send({
                                command: "SEND_APP_DATA",
                                data: n.getWxAppData(),
                                common: e
                            }), d[1]
                        }
                    }
                }
            },
            2561: (e, t, o) => {
                "use strict";
                const n = o(6202),
                    r = o(4572),
                    i = o(7799);
                e.exports = function() {
                    const e = r.instanceScope();
                    let t = {},
                        o = !1,
                        a = !1;
                    function findValandTaint(object, detail, value) {
                        var res;
                        Object.keys(object).some(function(k) {
                            if (k === detail) {
                                res = object[k];
                                if (value in res){
                                    var tmp = object[k][value];
                                    // console.log(tmp);
                                    if (typeof tmp==='string'){
                                        object[k][value].__setTaint__(1);
                                    }
                                    // else if this is a form element, tmp is like: {name: "somestring"}
                                    else if (typeof tmp==='object'){
                                        for(var propt in tmp){
                                            // do this for now, we don't know how to treat els like checkbox
                                            if (typeof tmp[propt]==='string'){
                                                tmp[propt].__setTaint__(1);
                                            }
                                            // console.log(propt + ': ' + tmp[propt]);
                                        }
                                    }
                                }
                                res = object[k];
                                return true;
                            }
                            if (object[k] && typeof object[k] === 'object') {
                                res = findValandTaint(object[k], detail, value);
                                return res !== undefined;
                            }
                        });
                        return res;
                    }
                    function findVal(object, key) {
                        var value;
                        Object.keys(object).some(function(k) {
                            if (k === key) {
                                value = object[k];
                                return true;
                            }
                            if (object[k] && typeof object[k] === 'object') {
                                value = findVal(object[k], key);
                                return value !== undefined;
                            }
                        });
                        return value;
                    }
                    function s(e, o, n) {
                        const r = t[e];
                        if ("function" == typeof r) try {
                            // console.log('jianjia hack callback func',e,  JSON.stringify(o))
                            // for all inputs/forms, they must have: event.detail = { value }
                            // we just need to taint this event.detail.value
                            findValandTaint(o, "detail", "value");
                            // var detail = findVal(o, 'detail');
                            // if (detail && 'value' in detail){
                                // console.log('jianjia hack callback func', detail.value.__getTaint__());
                            // }
                            r(o, n);
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    const c = e => {
                        const {
                            command: t,
                            data: o,
                            fromWebviewID: n
                        } = e;
                        "WEBVIEW_PUBLISH" === t && s(o.eventName, o.data, n)
                    };
                    return a || (a = !0, i.registerCallback(c)), e.on("triggerSubscribeEvent", ((e, t, o) => {
                        s(e, t, o)
                    })), r.once("RESET_INSTANCE", (() => {
                        o = !0, t = {}, i.removeCallback(c)
                    })), {
                        subscribe: function(e, r) {
                            o || (n.debugLog(`${new Date} WeixinJSBridge subscribe ${e}`, arguments), n.debugInfo({
                                type: "subscribe",
                                eventName: e,
                                data: arguments,
                                timesmap: new Date
                            }), t[e] = r)
                        },
                        triggerSubscribeEvent: s
                    }
                }
            },
            8286: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getPages = t.getWxAppData = void 0;
                const n = o(393),
                    r = o(8446);

                function i() {
                    try {
                        return r.WAServiceGlobal.__appServiceEngine__.getCurrentPagesByDomain()
                    } catch (e) {
                        return getCurrentPages()
                    }
                }
                t.getWxAppData = function() {
                    const e = i(),
                        t = [];
                    return n(e, (e => {
                        e && t.push({
                            route: e.__route__ || e.route,
                            data: e.data
                        })
                    })), t
                }, t.getPages = i
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
                        var n;
                        const r = "qbase_commapi" === (null === (n = t.data) || void 0 === n ? void 0 : n.api_name) || "qbase_commapi" === t.apiName;
                        if ("operateWXData" === e && t && r && t.data && t.data.data) switch (t.data.data.qbase_api_name) {
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
            9464: (e, t, o) => {
                "use strict";
                const n = o(5220),
                    r = o(4572),
                    i = o(7799),
                    a = o(8446);
                let s = {};
                const c = ["play", "canplay", "ended", "stop", "waiting", "seeking", "seeked"];
                i.registerCallback((e => {
                    const {
                        command: t
                    } = e;
                    ("LOAD_APPSERVICE" === t || "RESET" === t) && u()
                }));
                const d = function(e) {
                        return function(t) {
                            "function" == typeof e && e(t)
                        }
                    },
                    l = e => {
                        r.emit("triggerOnEvent", "onAudioStateChange", e)
                    };

                function u() {
                    for (const e in s) s[e].pause(), s[e].remove();
                    s = {}
                }
                e.exports = {
                    createAudioInstance: (e, t, o) => {
                        const n = d(o),
                            r = `${Date.now()}${Math.random()}`,
                            i = a.document.createElement("audio");
                        s[r] = i, n({
                            errMsg: `${e}:ok`,
                            audioId: r
                        })
                    },
                    destroyAudioInstance: function(e, t, o) {
                        const n = t.audioId,
                            r = d(o);
                        s[n] && (s[n].pause(), s[n].remove(), delete s[n]), r({
                            errMsg: `${e}:ok`,
                            audioId: n
                        })
                    },
                    setAudioState: (e, t, o) => {
                        const r = d(o);
                        try {
                            const {
                                audioId: o,
                                src: i,
                                startTime: a,
                                autoplay: d,
                                loop: u,
                                referrerPolicy: g
                            } = t, p = s[o];
                            let {
                                volume: f
                            } = t;
                            p.loop = u || !1, p.autoplay = d || !1, p.referrerPolicy = g || "no-referrer", f = parseFloat(f), p.volume = isNaN(f) ? 1 : Math.max(0, Math.min(1, f));
                            let h = 1;
                            if ("number" == typeof(null == t ? void 0 : t.playbackRate) && (h = Math.min(Math.max(t.playbackRate, .5), 2)), p.playbackRate = h || p.playbackRate || 1, i && function(e, t, o, r) {
                                    if (e._src === t) return;
                                    e._src = t;
                                    const i = n.sync("getInnerAudioContextSrc", {
                                        src: t,
                                        referrerPolicy: o
                                    });
                                    if ("getInnerAudioContextSrc:fail" === i.errMsg) throw new Error("getInnerAudioContextSrc:fail");
                                    const a = i.durationResult;
                                    a && (e._duration = a), e.src = i.srcResult, r && (e.playbackRate = r)
                                }(p, i, g, h), a) {
                                const e = () => {
                                    p.removeEventListener("canplay", e), p.currentTime = a / 1e3
                                };
                                p.addEventListener("canplay", e)
                            }
                            p.startTime = a || 0,
                                function(e) {
                                    const t = s[e];
                                    if (t.initStateChage) return;
                                    t.initStateChage = !0, t.addEventListener("error", (t => {
                                        const o = t.currentTarget.error.code,
                                            n = {
                                                audioId: e,
                                                state: "error",
                                                errMsg: "MediaError",
                                                errCode: 1e4 + parseInt(o, 10)
                                            };
                                        l(n)
                                    })), t.addEventListener("pause", (() => {
                                        const o = t._isStop ? "stop" : "pause";
                                        t._isStop = !1;
                                        l({
                                            audioId: e,
                                            state: o
                                        })
                                    })), c.forEach((o => {
                                        t.addEventListener(o, (() => {
                                            l({
                                                audioId: e,
                                                state: o
                                            })
                                        }))
                                    }))
                                }(o), r({
                                    errMsg: `${e}:ok`
                                })
                        } catch (t) {
                            r({
                                errMsg: `${e}:fail`
                            })
                        }
                    },
                    getAudioState: async function(e, t, o) {
                        const n = d(o),
                            r = t.audioId,
                            i = s[r];
                        if (i) {
                            const {
                                currentTime: t,
                                paused: o,
                                startTime: r
                            } = i;
                            let {
                                duration: a
                            } = i;
                            const s = function(e) {
                                const t = e ? e.buffered : "";
                                if (t) {
                                    const o = e.currentTime;
                                    for (let e = 0, n = t.length; e < n; e++)
                                        if (t.start(e) <= o && t.end(e) >= o) return t.end(e)
                                }
                                return 0
                            }(i);
                            a === 1 / 0 && i._duration && (a = i._duration), n({
                                errMsg: `${e}:ok`,
                                duration: 1e3 * a,
                                currentTime: 1e3 * t,
                                paused: o,
                                src: i._src,
                                startTime: 1e3 * r,
                                buffered: 1e3 * s,
                                referrerPolicy: i.referrerPolicy
                            })
                        } else n({
                            errMsg: `${e}:fail`
                        })
                    },
                    operateAudio: (e, t, o) => {
                        const n = d(o),
                            {
                                operationType: r,
                                audioId: i,
                                currentTime: a
                            } = t,
                            c = s[i];
                        c ? ("play" === r ? (c.play(), c._isStop = !1) : "pause" === r ? c.pause() : "stop" === r ? (c._isStop = !0, c.pause(), c.currentTime = 0) : "seek" === r && (c.currentTime = a / 1e3), n({
                            errMsg: `${e}:ok`
                        })) : n({
                            errMsg: `${e}:fail`
                        })
                    },
                    getAvailableAudioSources: async function(e, t, o) {
                        d(o)({
                            errMsg: `${e}:ok`,
                            audioSources: ["auto"]
                        })
                    }
                }
            },
            411: (e, t, o) => {
                "use strict";
                const n = o(7799),
                    r = o(4572),
                    i = o(4534),
                    a = o(8446),
                    {
                        actionsConfig: s,
                        musicStatusConfig: c,
                        referrerConfig: d
                    } = i;
                let l;
                const u = (e, t) => {
                        n.send({
                            command: "APPSERVICE_SDK_BACKGROUND_AUDIO_ACTION",
                            data: {
                                type: e,
                                payload: t
                            }
                        })
                    },
                    g = (e, t) => {
                        r.emit("triggerOnEvent", e, t)
                    },
                    p = () => {
                        u(s.SIMULATOR_SET_BACKGROUND_AUDIO, {
                            status: c.MUSIC_STATE_PLAY
                        }), g("onMusicPlay", {
                            dataUrl: l._src
                        }), g("onBackgroundAudioStateChange", {
                            state: "play"
                        })
                    },
                    f = () => {
                        l && !l.ended && (l.error || u(s.SIMULATOR_SET_BACKGROUND_AUDIO, {
                            status: c.MUSIC_STATE_PAUSE
                        }), g("onMusicPause", {
                            dataUrl: l._src
                        }), g("onBackgroundAudioStateChange", {
                            state: "pause"
                        }))
                    },
                    h = () => {
                        l && (u(s.SIMULATOR_SET_BACKGROUND_AUDIO, {
                            status: c.MUSIC_STATE_END
                        }), g("onMusicEnd", {
                            dataUrl: l._src
                        }), g("onBackgroundAudioStateChange", {
                            state: "ended"
                        }), b())
                    },
                    m = () => {
                        g("onBackgroundAudioStateChange", {
                            state: "waiting"
                        })
                    },
                    _ = () => {
                        g("onBackgroundAudioStateChange", {
                            state: "canplay"
                        })
                    },
                    v = e => {
                        if (!l) return;
                        u(s.SIMULATOR_SET_BACKGROUND_AUDIO, {
                            status: c.MUSIC_STATE_ERROR
                        });
                        const {
                            target: t
                        } = e, {
                            error: o
                        } = t;
                        let n = o.code;
                        n = n === o.MEDIA_ERR_NETWORK ? 10002 : n === o.MEDIA_ERR_DECODE ? 10003 : 10001;
                        const r = o.code;
                        g("onMusicError", {
                            dataUrl: l._src,
                            errMsg: `Error: ${l.error.code}`
                        }), g("onBackgroundAudioStateChange", {
                            state: "error",
                            errMsg: r,
                            errCode: n
                        }), b()
                    };
                const y = () => {
                    l.play(), l.removeEventListener("canplay", y)
                };

                function b() {
                    l && (l.removeEventListener("play", p), l.removeEventListener("pause", f), l.removeEventListener("ended", h), l.removeEventListener("waiting", m), l.removeEventListener("canPlay", _), l.removeEventListener("canPlay", y), l.removeEventListener("error", v), l.pause(), l.remove(), l = null)
                }
                e.exports = {
                    initMusic: function() {
                        l || (l = a.document.createElement("audio"), l.addEventListener("play", p), l.addEventListener("pause", f), l.addEventListener("ended", h), l.addEventListener("waiting", m), l.addEventListener("canplay", _), l.addEventListener("error", v))
                    },
                    playMusic: function(e = {}) {
                        if (l.removeEventListener("canplay", y), e.src && e.src !== l._src) {
                            l._src = e.src, l.src = "origin" === l.referrerPolicy ? `${e.src}${d.referrerPolicyOrigin}` : `${e.src}${d.referrerPolicyNoReferrer}`;
                            let t = 1;
                            "number" == typeof(null == e ? void 0 : e.playbackRate) && (t = Math.min(Math.max(e.playbackRate, .5), 2)), l.addEventListener("canplay", y), l.load(), l.playbackRate = t || l.playbackRate || 1, l.currentTime = e.startTime || 0
                        } else l.src && l.play()
                    },
                    pauseMusic: function() {
                        return !!l && (l.paused || l.pause(), !0)
                    },
                    resumeMusic: function() {
                        (null == l ? void 0 : l.paused) && l.play()
                    },
                    stopMusic: function() {
                        if (!l) return !1;
                        const e = l._src;
                        return setTimeout((() => {
                            u(s.SIMULATOR_SET_BACKGROUND_AUDIO, {
                                status: c.MUSIC_STATE_END
                            }), g("onMusicEnd", {
                                dataUrl: e
                            }), g("onBackgroundAudioStateChange", {
                                state: "stop"
                            })
                        })), b(), !0
                    },
                    seekMusic: function(e = {}) {
                        l && (l.currentTime = 1 * e.currentTime, l.paused || l.dispatchEvent(new Event("play")))
                    },
                    getAudioBufferd: function() {
                        const e = l ? l.buffered : "";
                        if (e) {
                            const t = l.currentTime;
                            for (let o = 0, n = e.length; o < n; o++)
                                if (e.start(o) <= t && e.end(o) >= t) return e.end(o)
                        }
                        return 0
                    },
                    getAudio: function() {
                        return l
                    },
                    removeAudio: b
                }
            },
            2614: (e, t, o) => {
                "use strict";
                const n = o(9970),
                    r = o(3742),
                    i = Object.assign(Object.assign({}, n), r);
                e.exports = i
            },
            3742: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getSystemInfo = t.getSystemInfoSync = void 0;
                const n = o(7799),
                    r = o(4572);
                let i, a = {},
                    s = !1,
                    c = {};

                function d(e) {
                    const t = e || "all";
                    c[t] || (n.send({
                        command: "APPSERVICE_SDK_DEVICE_ACTION",
                        data: {
                            action: "INIT",
                            args: {
                                type: e
                            }
                        }
                    }), c[t] = !0)
                }

                function l(e, t, o) {
                    const r = function(e = {}) {
                        const {
                            type: t
                        } = e;
                        return !t && i ? JSON.parse(JSON.stringify(i)) : t && a[t] ? JSON.parse(JSON.stringify(a[t])) : (s || (s = !0, n.registerCallback((e => {
                            const {
                                command: o,
                                data: n
                            } = e;
                            "APPSERVICE_DEVICE_UPDATED" === o && (n.type ? a[t] = n.systemInfo : i = n.systemInfo)
                        }))), void d(t))
                    }(t);
                    if (!r) return {
                        action: "PROCEED"
                    };
                    o(r)
                }
                r.on("RESET_INSTANCE", (() => {
                    i = void 0, a = {}, c = {}, d()
                })), r.on("SET_SYSTEM_INFO", (e => {
                    i = e, c.all = !0
                })), t.getSystemInfoSync = l, t.getSystemInfo = function(e, t, o) {
                    return l(0, t, o)
                }
            },
            8665: e => {
                "use strict";
                const t = {
                    0: "log",
                    1: "info",
                    2: "warn",
                    3: "error"
                };
                e.exports = {
                    reportKeyValue: (e, t, o) => {
                        o({
                            errMsg: `${e}:ok`
                        })
                    },
                    reportIDKey: (e, t, o) => {
                        o({
                            errMsg: `${e}:ok`
                        })
                    },
                    traceEvent: (e, t, o) => {
                        o({
                            errMsg: `${e}:ok`
                        })
                    },
                    log: (e, o) => {
                        (o.dataArray || []).forEach((e => {
                            const o = t[e.level];
                            o && e.msg && console[o](e.msg)
                        }))
                    },
                    systemLog: (e, t, o) => {
                        o({
                            errMsg: `${e}:ok`
                        })
                    }
                }
            },
            6955: (e, t, o) => {
                "use strict";
                const n = o(3161),
                    r = o(8665),
                    i = o(6622),
                    a = o(4420),
                    s = o(9970),
                    c = o(3742),
                    d = o(9464),
                    l = o(9613),
                    u = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), r), i), a), s), c), d), l);
                e.exports = u
            },
            9613: (e, t, o) => {
                "use strict";
                const n = o(4534),
                    r = o(7799),
                    i = o(5220),
                    {
                        initMusic: a,
                        playMusic: s,
                        resumeMusic: c,
                        stopMusic: d,
                        pauseMusic: l,
                        seekMusic: u,
                        getAudioBufferd: g,
                        getAudio: p,
                        removeAudio: f
                    } = o(411),
                    {
                        actionsConfig: h,
                        musicStatusConfig: m,
                        clickkeyConfig: _
                    } = n,
                    v = function(e) {
                        return function(t) {
                            "function" == typeof e && e(t)
                        }
                    };
                r.registerCallback((e => {
                    const {
                        command: t
                    } = e;
                    "LOAD_APPSERVICE" === t ? f() : "BACKGROUND_AUDIO_STOP" === t ? d() : "BACKGROUND_AUDIO_PAUSE" === t ? l() : "BACKGROUND_AUDIO_RESUME" === t && c()
                }));
                const y = (e, t) => {
                    r.send({
                        command: "APPSERVICE_SDK_BACKGROUND_AUDIO_ACTION",
                        data: {
                            type: e,
                            payload: t
                        }
                    })
                };
                e.exports = {
                    getMusicPlayerState: function(e, t, o) {
                        const n = p(),
                            r = v(o);
                        if (n) try {
                            return void r({
                                dataUrl: n.src,
                                duration: Math.floor(n.duration),
                                currentPosition: Math.floor(n.currentTime),
                                status: n.paused ? 0 : 1,
                                downloadPercent: Math.round(100 * n.buffered.end(0) / n.duration),
                                errMsg: `${e}:ok`,
                                referrerPolicy: n.referrerPolicy
                            })
                        } catch (t) {
                            r({
                                status: 2,
                                errMsg: `${e}:ok`
                            })
                        } else r({
                            errMsg: `${e}:ok`,
                            status: 2
                        })
                    },
                    operateMusicPlayer: function(e, t, o) {
                        const n = t.operationType,
                            r = v(o);
                        try {
                            if ("play" === n) a(), s({
                                src: t.dataUrl || "",
                                startTime: t.position || 0,
                                playbackRate: t.playbackRate || 1
                            }), y(h.SIMULATOR_SET_BACKGROUND_AUDIO, {
                                mode: "music",
                                title: t.title || "",
                                coverImgUrl: t.coverImgUrl || "",
                                src: t.dataUrl || "",
                                startTime: t.position || 0
                            }), y(h.TOOLBAR_SET_CLICKKEY, _.MUSICCARD);
                            else if ("resume" === n) c();
                            else if ("pause" === n) {
                                if (!l()) return void r({
                                    errMsg: `${e}:fail background audio not playing`
                                })
                            } else if ("seek" === n) u({
                                currentTime: t.position
                            });
                            else {
                                if ("stop" !== n) return void r({
                                    errMsg: `${e}:fail illegal operationType`
                                });
                                if (!d()) return void r({
                                    errMsg: `${e}:fail background audio not playing`
                                });
                                y(h.SIMULATOR_SET_BACKGROUND_AUDIO, {
                                    status: m.MUSIC_STATE_END
                                })
                            }
                            return void r({
                                errMsg: `${e}:ok`
                            })
                        } catch (t) {
                            r({
                                errMsg: `${e}:fail ${t.toString()}`
                            })
                        }
                    },
                    setBackgroundAudioState: function(e, t, o) {
                        const n = v(o);
                        try {
                            if (!t.title) return void n({
                                errMsg: `${e}:fail title is nil!`
                            });
                            a();
                            const o = p();
                            return o && t.referrerPolicy !== o.referrerPolicy && (o.referrerPolicy = t.referrerPolicy), t.src && s({
                                src: t.src,
                                startTime: t.startTime || 0,
                                playbackRate: t.playbackRate || 1
                            }), y(h.SIMULATOR_SET_BACKGROUND_AUDIO, Object.assign({
                                mode: "backgroundaudio"
                            }, t)), y(h.TOOLBAR_SET_CLICKKEY, _.MUSICCARD), void n({
                                errMsg: `${e}:ok`
                            })
                        } catch (t) {
                            n({
                                errMsg: `${e}:fail ${t.toString()}`
                            })
                        }
                    },
                    operateBackgroundAudio: function(e, t, o) {
                        const n = t.operationType,
                            r = v(o);
                        try {
                            if ("play" === n) s({
                                src: t.src,
                                startTime: t.startTime || 0,
                                playbackRate: t.playbackRate || 1
                            }), y(h.SIMULATOR_SET_BACKGROUND_AUDIO, Object.assign({
                                mode: "backgroundaudio"
                            }, t)), y(h.TOOLBAR_SET_CLICKKEY, _.MUSICCARD);
                            else if ("pause" === n) l();
                            else if ("stop" === n) d(), y(h.SIMULATOR_SET_BACKGROUND_AUDIO, {
                                status: m.MUSIC_STATE_END
                            });
                            else {
                                if ("seek" !== n) return void r({
                                    errMsg: `${e}:fail illegal operationType`
                                });
                                u({
                                    currentTime: t.currentTime
                                })
                            }
                            return void r({
                                errMsg: `${e}:ok`
                            })
                        } catch (t) {
                            r({
                                errMsg: `${e}:fail ${t.toString()}`
                            })
                        }
                    },
                    getBackgroundAudioState: function(e, t, o) {
                        const n = v(o),
                            r = i.sync(e, {});
                        try {
                            if (r.errMsg === `${e}:fail`) return void n({
                                errMsg: `${e}:fail`
                            });
                            const t = p();
                            return void n({
                                duration: t ? t.duration : 0,
                                currentTime: t ? t.currentTime : 0,
                                paused: !t || t.paused,
                                src: t ? t._src : "",
                                buffered: g(),
                                title: r.title || "",
                                epname: r.epname || "",
                                singer: r.singer || "",
                                coverImgUrl: r.coverImgUrl || "",
                                webUrl: r.webUrl || "",
                                startTime: r.startTime || "",
                                errMsg: `${e}:ok`
                            })
                        } catch (t) {
                            n({
                                errMsg: `${e}:fail`
                            })
                        }
                    }
                }
            },
            3161: (e, t, o) => {
                "use strict";
                const n = o(6180),
                    r = o(4572),
                    i = o(4534),
                    a = o(6202),
                    s = o(8446),
                    {
                        MaxRequestConcurrent: c,
                        urlCheckErrReason: d
                    } = i,
                    {
                        checkUrl: l
                    } = a,
                    u = {};
                let g = 1,
                    p = 0,
                    f = Date.now();
                r.on("RESET_INSTANCE", (() => {
                    p = 0, f = Date.now()
                }));
                const h = function(e) {
                        return function(t) {
                            "function" == typeof e && e(t)
                        }
                    },
                    m = {
                        "accept-charset": !0,
                        "accept-encoding": !0,
                        "access-control-request-headers": !0,
                        "access-control-request-method": !0,
                        connection: !0,
                        "content-length": !0,
                        cookie: !0,
                        cookie2: !0,
                        date: !0,
                        dnt: !0,
                        expect: !0,
                        host: !0,
                        "keep-alive": !0,
                        origin: !0,
                        referer: !0,
                        te: !0,
                        trailer: !0,
                        "transfer-encoding": !0,
                        upgrade: !0,
                        via: !0
                    },
                    _ = "for-wechatdevtools-fake-";

                function v(e, t) {
                    const {
                        origin: o,
                        tls: n
                    } = e;
                    console.group(`${new Date} wx.request 错误`), console.error(`${o} 对应的服务器 TLS 为 ${n} ，小程序要求的 TLS 版本必须大于等于 1.2 。控制台输入 showRequestInfo() 可以获取更详细信息。`), console.groupEnd(), t({
                        errMsg: "request:fail 小程序要求的 TLS 版本必须大于等于 1.2"
                    })
                }

                function y(e, t) {
                    const {
                        origin: o
                    } = e;
                    console.group(`${new Date} wx.request 错误`), console.error(`${o} 对应的服务器证书无效。控制台输入 showRequestInfo() 可以获取更详细信息。`), console.groupEnd(), t({
                        errMsg: "request:fail 对应的服务器证书无效。"
                    })
                }
                const b = (e, t, o, a) => {
                        var u;
                        p++;
                        const g = f,
                            h = e => {
                                g === f && setTimeout((() => {
                                    p--, "function" == typeof o && o(e)
                                }))
                            },
                            {
                                url: b,
                                responseType: S,
                                __skipDomainCheck__: C,
                                method: I = "POST",
                                header: T = {}
                            } = t;
                        if (function(e, t, o) {
                                const {
                                    url: r,
                                    __skipDomainCheck__: i,
                                    method: a = "POST"
                                } = t;
                                if (p > c) return console.group(`${new Date} request 错误`), console.error(`同时最多发起 ${c} 个 request 请求，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`), console.groupEnd(), o({
                                    errMsg: `${e}:fail exceed max task count`
                                }), !0;
                                if (!i && !l(r)) return o({
                                    errMsg: `${e}:fail ${d}`
                                }), !0;
                                if (["OPTIONS", "GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "TRACE", "CONNECT"].indexOf(a) < 0) return o({
                                    errMsg: `${e}:fail method is invalid`
                                }), !0;
                                const s = n.getSecuryDetailsByURL(r);
                                if (s.isReady) {
                                    if (!s.isSecuryTLS) return v(s, o), !0;
                                    if (!s.isSecuryCertificate) return y(s, o), !0
                                }
                                return !1
                            }(e, t, h)) return;
                        const A = function() {
                            let e = s.XMLHttpRequest;
                            if (s.asLoader) {
                                const t = s.asLoader.getInstanceWindowSync();
                                e = t ? t.__global.XMLHttpRequest : void 0
                            }
                            return e
                        }();
                        if (!A) return void h({
                            errMsg: `${e}:fail runtime invalidated`
                        });
                        let D = 0;
                        const O = new A;
                        O.disableHttp2 = !t.enableHttp2, O.responseType = S || "text", t.enableChunked && (O.responseType = "text"), O.timeout = t.timeout || (null === (u = __wxConfig.networkTimeout) || void 0 === u ? void 0 : u.request) || 6e4, O.open(I, t.url, !0), O.onreadystatechange = () => {
                            if (O.readyState === (O.HEADERS_RECEIVED || 2)) try {
                                let o = {};
                                try {
                                    o = JSON.parse(O.getResponseHeader("for-weapp-devtools"))
                                } catch (s) {}
                                if ("function" == typeof a && i.libNumberVersion >= 1009093) {
                                    const c = {
                                        state: "headersReceived",
                                        header: E(o || {}),
                                        cookies: w(o || {})
                                    };
                                    t.enableChunked && (c.statusCode = O.status), a(c)
                                }
                            } catch (u) {
                                console.error(u)
                            }
                            if (O.readyState, 4 === O.readyState) {
                                O.onreadystatechange = null;
                                const g = O.status;
                                if (0 === g);
                                else {
                                    const p = n.getSecuryDetailsByURL(b);
                                    let f = {};
                                    try {
                                        f = JSON.parse(O.getResponseHeader("for-weapp-devtools"))
                                    } catch (_) {}

                                    function m(o) {
                                        if (!o.isSecuryTLS) return void v(o, h);
                                        if (!o.isSecuryCertificate) return void y(o, h);
                                        if (O.responseURL && !C && !l(O.responseURL)) return void h({
                                            errMsg: `${e}:fail ${d}`
                                        });
                                        const n = {
                                            errMsg: `${e}:ok`,
                                            header: E(f || {}),
                                            cookies: w(f || {}),
                                            statusCode: g
                                        };
                                        "arraybuffer" === O.responseType ? n.data = O.response : n.data = O.responseText, t.enableChunked && (n.data = ""), h(n)
                                    }
                                    p.isReady ? m(p) : r.instanceScope().once(`TLS_CHECK_READY_${p.id}`, m)
                                }
                            }
                        }, O.onprogress = function() {
                            var e, o;
                            if (t.enableChunked && !t.enableHttp2 && "chunked" === O.getResponseHeader("transfer-encoding") && "function" == typeof a && i.libNumberVersion >= 1009093) try {
                                const t = null === (e = O.responseText) || void 0 === e ? void 0 : e.length;
                                if (D === t) return;
                                O.timeout = 0;
                                const n = null === (o = O.responseText) || void 0 === o ? void 0 : o.substring(D, t);
                                D = t, a({
                                    state: "chunked",
                                    data: k(n)
                                })
                            } catch (e) {}
                        }, O.onerror = () => {
                            h({
                                errMsg: `${e}:fail`
                            })
                        }, O.ontimeout = () => {
                            h({
                                errMsg: `${e}:fail timeout`
                            })
                        }, O.onabort = () => {
                            h({
                                errMsg: `${e}:fail abort`
                            })
                        };
                        let R = 0;
                        for (const e in T) "content-type" === e.toLowerCase() && R++;
                        R >= 2 && delete T["content-type"];
                        let M = !1;
                        for (const t in T)
                            if (T.hasOwnProperty(t)) {
                                const o = t.toLowerCase(),
                                    n = T[t];
                                M = "content-type" === o || M;
                                try {
                                    m[o] || 0 === t.indexOf(_) ? O.setRequestHeader(`${_}${t}`, n) : O.setRequestHeader(t, T[t])
                                } catch (t) {
                                    return void h({
                                        errMsg: `${e}:fail ${t}`
                                    })
                                }
                            }
                        "POST" !== I || M || O.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                        const P = t.data;
                        try {
                            O.send(P)
                        } catch (t) {
                            h({
                                errMsg: `${e}:fail`
                            })
                        }
                        return O
                    },
                    S = (e = "") => e,
                    w = e => {
                        const t = [];
                        for (const o in e)
                            if ("set-cookie" === o.toLowerCase()) {
                                const n = e[o],
                                    r = Object.prototype.toString.call(n);
                                if ("[object String]" === r) {
                                    t.push(S(n.trim()));
                                    continue
                                }
                                if ("[object Array]" === r) {
                                    for (const e of n) t.push(S(e.trim()));
                                    continue
                                }
                            } return t
                    },
                    E = (e, t = ",") => {
                        const o = {};
                        for (const n in e) {
                            const r = Object.prototype.toString.call(e[n]);
                            o[n] = "[object Array]" === r ? e[n].join(t) : e[n]
                        }
                        return o
                    };

                function k(e) {
                    return new(s.TextEncoder || TextEncoder)("utf-8").encode(e)
                }
                e.exports = {
                    request: b,
                    createRequestTask: (e, t, o) => {
                        const n = h(o),
                            i = {
                                id: g++,
                                url: t.url,
                                data: t.data,
                                header: t.header,
                                method: t.method,
                                callback: (e, t) => {
                                    let o = {};
                                    o = 0 === t.errMsg.indexOf("request:ok") ? {
                                        requestTaskId: e,
                                        state: "success",
                                        data: t.data,
                                        header: t.header,
                                        statusCode: t.statusCode,
                                        cookies: t.cookies
                                    } : {
                                        requestTaskId: e,
                                        state: "fail",
                                        errMsg: t.errMsg.replace(/^request:fail ?/, "")
                                    }, delete u[e], r.emit("triggerOnEvent", "onRequestTaskStateChange", o)
                                }
                            };
                        n({
                            errMsg: `${e}:ok`,
                            requestTaskId: i.id
                        }), u[i.id] = i;
                        i.xhr = b("request", t, i.callback.bind(void 0, i.id), (function(e) {
                            const t = Object.assign(Object.assign({}, e), {
                                requestTaskId: i.id
                            });
                            r.emit("triggerOnEvent", "onRequestTaskStateChange", t)
                        }))
                    },
                    operateRequestTask: (e, t, o) => {
                        const n = h(o),
                            r = t.requestTaskId,
                            i = t.operationType,
                            a = u[r];
                        if (!a) return n({
                            errMsg: `${e}:fail task not found`
                        });
                        if ("abort" !== i) return n({
                            errMsg: `${e}:fail illegal operationType ${i}`
                        });
                        try {
                            a.xhr.abort(), n({
                                errMsg: `${e}:ok`
                            })
                        } catch (t) {
                            n({
                                errMsg: `${e}:fail ${t}`
                            })
                        }
                    }
                }
            },
            6622: (e, t, o) => {
                "use strict";
                const n = o(4572),
                    r = o(4534),
                    i = o(6202),
                    a = o(8446),
                    {
                        checkUrl: s
                    } = i,
                    c = "未完成的操作";
                let d = {},
                    l = 1,
                    u = Date.now();

                function g(e) {
                    (0, a.alert)(`SET_SOCKET_HEADER:${JSON.stringify(e)}`)
                }

                function p(e, t = {}) {
                    const o = {};
                    try {
                        Object.keys(t).forEach((e => {
                            o[e.toLowerCase()] = t[e]
                        }));
                        const n = new a.URL(e);
                        if ("ws:" === n.protocol || "wss:" === n.protocol) {
                            const e = "ws:" === n.protocol ? "http:" : "https:",
                                r = n.port;
                            let i = `${e}//${n.hostname}`;
                            (function(e, t) {
                                return !t || ("http:" === e ? "80" === t : "https:" === e && "443" === t)
                            })(e, r) || (i = `${i}:${r}`), o.origin ? o.origin = `${i},${t.origin}` : o.origin = i
                        }
                    } catch (e) {}
                    return o
                }
                const f = a.WebSocket,
                    h = function(e) {
                        return function(t) {
                            "function" == typeof e && e(t)
                        }
                    },
                    m = {
                        1e3: "normal closure",
                        1001: "going away",
                        1002: "protocol error",
                        1003: "unsupported data",
                        1004: "reserved",
                        1005: "no status rcvd",
                        1006: "abnormal closure",
                        1007: "invalid frame payload data",
                        1008: "policy violation",
                        1009: "message too big",
                        1010: "mandatory ext.",
                        1011: "internal server error",
                        1015: "tls handshake"
                    };

                function _(e) {
                    console.group(`${new Date} 无网络状态模拟`), console.error(`已开启无网络状态模拟，网络请求 ${e} 已被阻止；在模拟器工具栏切换网络状态，可恢复网络请求。`), console.groupEnd()
                }
                let v;

                function y() {
                    v && (v.close(), v = void 0);
                    for (const e in d) {
                        const t = d[e].socket;
                        t && t.close()
                    }
                }
                window.addEventListener("networkChange", (e => {
                    r.DevtoolsConfig.networkStatus = e.detail.networkStatus, "none" === r.DevtoolsConfig.networkStatus && y()
                })), n.on("RESET_INSTANCE", (() => {
                    y(), d = {}, u = Date.now()
                })), e.exports = {
                    connectSocket: (e, t, o) => {
                        const {
                            url: i,
                            header: d
                        } = t, l = h(o);
                        if ("none" === r.DevtoolsConfig.networkStatus) return _(i), void l({
                            errMsg: `${e}:fail network is down`
                        });
                        if (!s(i, "socket")) return void l({
                            errMsg: `connectSocket:fail ${r.urlCheckErrReason}`
                        });
                        const y = p(i, d);
                        if (y && Object.keys(y).length > 0 && g(y), v && (v.readyState === f.OPEN || v.readyState === f.CONNECTING)) return void l({
                            errMsg: "connectSocket:fail websocket is connected"
                        });
                        try {
                            let e = a.WebSocket;
                            if (a.asLoader) {
                                const t = a.asLoader.getInstanceWindowSync();
                                if (!t) return void l({
                                    errMsg: "connectSocket:fail runtime invalidated"
                                });
                                e = t.__global.WebSocket
                            }
                            v = new e(i, t.protocols || [])
                        } catch (e) {
                            n.emit("triggerOnEvent", "onSocketError", {
                                errMsg: c
                            }), v = void 0
                        }
                        if (!v) return void l({
                            errMsg: "connectSocket:fail"
                        });
                        v.binaryType = "arraybuffer";
                        const b = u === u;
                        v.onopen = function() {
                            b && n.emit("triggerOnEvent", "onSocketOpen", {})
                        }, v.onmessage = function(e) {
                            b && n.emit("triggerOnEvent", "onSocketMessage", {
                                data: e.data
                            })
                        }, v.onclose = function(e) {
                            b && (n.emit("triggerOnEvent", "onSocketClose", {
                                code: e.code,
                                reason: e.reason || m[e.code] || ""
                            }), v = void 0)
                        }, v.onerror = function() {
                            b && (n.emit("triggerOnEvent", "onSocketError", {
                                errMsg: c
                            }), v = void 0)
                        }, l({
                            errMsg: "connectSocket:ok"
                        })
                    },
                    sendSocketMessage: (e, t, o) => {
                        const n = h(o),
                            r = t.data;
                        let i = "fail";
                        if (v) try {
                            v.readyState === f.OPEN ? (v.send(r), i = "ok") : i = "fail webSocket is not connected"
                        } catch (e) {
                            i = `fail ${e.message}`
                        }
                        n({
                            errMsg: `${e}:${i}`
                        })
                    },
                    closeSocket: (e, t, o) => {
                        const n = h(o);
                        if (v) try {
                            v.close(t.code, t.reason), n({
                                errMsg: "closeSocket:ok"
                            })
                        } catch (e) {
                            n({
                                errMsg: `closeSocket:fail ${e}`
                            })
                        } else n({
                            errMsg: "closeSocket:fail"
                        });
                        v = void 0
                    },
                    createSocketTask: (e, t, o) => {
                        var i;
                        const u = h(o),
                            f = Object.keys(d).length,
                            {
                                url: v,
                                header: y,
                                protocols: b,
                                __skipDomainCheck__: S
                            } = t,
                            w = l++,
                            E = {
                                socketTaskId: w,
                                url: v,
                                protocols: b,
                                header: y
                            };
                        if (u({
                                socketTaskId: w,
                                errMsg: `${e}:ok`
                            }), f >= r.MaxWebsocketConnect) return void setTimeout((() => {
                            console.group(`${new Date} websocket 错误`), console.error(`同时最多发起 ${r.MaxWebsocketConnect} 个 socket 请求，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`), console.groupEnd(), n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "error",
                                errMsg: "exceed max task count"
                            })
                        }));
                        if ("none" === r.DevtoolsConfig.networkStatus) return void setTimeout((() => {
                            _(v), n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "error",
                                errMsg: "network is down"
                            })
                        }));
                        if (!S && !s(v, "socket")) return void setTimeout((() => {
                            n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "error",
                                errMsg: r.urlCheckErrReason
                            })
                        }));
                        d[w] = E;
                        const k = p(v, y);
                        k && Object.keys(k).length > 0 && g(k);
                        const C = (null === (i = __wxConfig.networkTimeout) || void 0 === i ? void 0 : i.connectSocket) || 6e4;
                        let I, T = !1;
                        try {
                            let e = a.WebSocket;
                            if (a.asLoader) {
                                const t = a.asLoader.getInstanceWindowSync();
                                if (!t) return void u({
                                    errMsg: "connectSocket:fail runtime invalidated"
                                });
                                e = t.__global.WebSocket
                            }
                            I = new e(v, t.protocols || [])
                        } catch (e) {
                            if (T) return;
                            n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "error",
                                errMsg: c
                            }), delete d[w]
                        }
                        if (!I) return;
                        const A = setTimeout((() => {
                            var e;
                            T = !0, n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "error",
                                errMsg: "Timed out connecting to server."
                            }), delete d[w], null === (e = null == I ? void 0 : I.close) || void 0 === e || e.call(I)
                        }), C);
                        I.binaryType = "arraybuffer", I.onopen = function() {
                            clearTimeout(A), n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "open"
                            })
                        }, I.onmessage = function(e) {
                            if (T) return;
                            const t = e.data;
                            n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                data: t,
                                state: "message"
                            })
                        }, I.onclose = function(e) {
                            T || (n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "close",
                                code: e.code,
                                reason: e.reason || m[e.code] || ""
                            }), delete d[w])
                        }, I.onerror = function() {
                            T || (n.emit("triggerOnEvent", "onSocketTaskStateChange", {
                                socketTaskId: w,
                                state: "error",
                                errMsg: c
                            }), delete d[w])
                        }, E.socket = I
                    },
                    operateSocketTask: (e, t, o) => {
                        const {
                            socketTaskId: n,
                            operationType: r,
                            data: i
                        } = t, a = h(o), s = d[n];
                        if (!s) return a({
                            errMsg: `${e}:fail task not found`
                        });
                        if ("send" !== r)
                            if ("close" !== r) a({
                                errMsg: `${e}:fail illegal operationType ${r}`
                            });
                            else try {
                                s.socket.close(t.code, t.reason), a({
                                    errMsg: `${e}:ok`
                                })
                            } catch (t) {
                                a({
                                    errMsg: `${e}:fail ${t.message}`
                                })
                            } else try {
                                s.socket.readyState === f.OPEN ? (s.socket.send(i), a({
                                    errMsg: `${e}:ok`
                                })) : a({
                                    errMsg: `${e}:fail webSocket is not connected`
                                })
                            } catch (t) {
                                a({
                                    errMsg: `${e}:fail ${t.message}`
                                })
                            }
                    }
                }
            },
            9970: (e, t, o) => {
                "use strict";
                const n = o(6389),
                    r = o(7799),
                    i = o(4572);
                let a, s, c = !1,
                    d = !1;

                function l() {
                    c || (c = !0, r.registerCallback((e => {
                        const {
                            command: t,
                            data: o
                        } = e;
                        "APPSERVICE_STORAGE_UPDATED" === t ? (o.storage && (a = o.storage), o.config && (s = o.config)) : "APPSERVICE_EXEC_STORAGE_SDK" === t ? S[o.api] && S[o.api](o.api, o.args, (() => {})) : "APPSERVICE_RESET_STORAGE" === t && (a = void 0, s = void 0, d = !1, l())
                    }))), d || (r.send({
                        command: "APPSERVICE_SDK_STORAGE_ACTION",
                        data: {
                            action: "INIT"
                        }
                    }), d = !0)
                }

                function u() {
                    if (a) return a;
                    l()
                }

                function g(e, t, o) {
                    r.send({
                        command: "APPSERVICE_SDK_STORAGE_ACTION",
                        data: {
                            action: "UPDATE",
                            api: e,
                            args: t,
                            callbackID: void 0
                        },
                        common: o
                    })
                }

                function p(e, t, o) {
                    const n = u();
                    if (!n) return {
                        action: "PROCEED"
                    };
                    const r = t.key;
                    let i = t.storageId,
                        a = {};
                    if (void 0 === i) i = 0;
                    else if (!b(i)) return o({
                        errMsg: `${e}:fail nonexistent storage space`
                    });
                    a = n[i] || {};
                    const s = a[r];
                    if (void 0 !== s) return o({
                        errMsg: `${e}:ok`,
                        data: JSON.parse(JSON.stringify(s.data)),
                        dataType: s.dataType
                    });
                    o({
                        errMsg: `${e}:fail data not found`
                    })
                }

                function f(e, t, o) {
                    const n = u();
                    if (!n) return {
                        action: "PROCEED"
                    };
                    let r = t.storageId,
                        i = {};
                    if (void 0 === r) r = 0;
                    else if (!b(r)) return o({
                        errMsg: `${e}:fail nonexistent storage space`
                    });
                    i = n[r] || {};
                    const a = t.keyList || [],
                        s = [];
                    for (const e of a) {
                        const t = i[e];
                        void 0 !== t ? s.push({
                            data: JSON.parse(JSON.stringify(t.data)),
                            dataType: t.dataType
                        }) : s.push({
                            data: "",
                            dataType: "Null"
                        })
                    }
                    o({
                        errMsg: `${e}:ok`,
                        dataList: JSON.parse(JSON.stringify(s))
                    })
                }

                function h(e, t, o, n) {
                    const r = u();
                    if (!r) return {
                        action: "PROCEED"
                    };
                    const i = t.key;
                    if (0 === i.length) return o({
                        errMsg: `${e}:fail key is empty`
                    });
                    let a = t.storageId,
                        c = {};
                    if (void 0 === a) a = 0;
                    else if (!b(a)) return o({
                        errMsg: `${e}:fail nonexistent storage space`
                    });
                    c = r[a] || {}, r[a] = c;
                    const d = t.data,
                        l = t.dataType;
                    c[i] = {
                        data: d,
                        dataType: l
                    };
                    const p = 0 === a ? s.userMaxSize : s.openDataMaxSize;
                    if (JSON.stringify(r).length > 1024 * p * 1024) return o({
                        errMsg: `${e}:fail exceed storage max size ${p}Mb`
                    });
                    g(e, t, n), o({
                        errMsg: `${e}:ok`
                    })
                }

                function m(e, t, o, n) {
                    const r = u();
                    if (!r) return {
                        action: "PROCEED"
                    };
                    const i = t.kvList;
                    if (0 === i.length) return o({
                        errMsg: `${e}:fail key is empty`
                    });
                    let a = t.storageId,
                        c = {};
                    if (void 0 === a) a = 0;
                    else if (!b(a)) return o({
                        errMsg: `${e}:fail nonexistent storage space`
                    });
                    c = r[a] || {}, r[a] = c, i.forEach((e => {
                        const t = e.key,
                            o = e.data,
                            n = e.dataType;
                        c[t] = {
                            data: o,
                            dataType: n
                        }
                    }));
                    const d = 0 === a ? s.userMaxSize : s.openDataMaxSize;
                    if (JSON.stringify(r).length > 1024 * d * 1024) return o({
                        errMsg: `${e}:fail exceed storage max size ${d}Mb`
                    });
                    g(e, t, n), o({
                        errMsg: `${e}:ok`
                    })
                }

                function _(e, t, o, n) {
                    let r = (t || {}).storageId;
                    const i = u();
                    if (!i) return {
                        action: "PROCEED"
                    };
                    if (void 0 === r) r = 0;
                    else if (!b(r)) return o({
                        errMsg: `${e}:fail nonexistent storage space`
                    });
                    i[r] = {}, g(e, t, n), o({
                        errMsg: `${e}:ok`
                    })
                }

                function v(e, t, o, n) {
                    const r = u();
                    if (!r) return {
                        action: "PROCEED"
                    };
                    const i = t.key;
                    let a = t.storageId,
                        s = {};
                    if (void 0 === a) a = 0;
                    else if (!b(a)) return o({
                        errMsg: `${e}:fail nonexistent storage space`
                    });
                    s = r[a] || {}, r[a] = s, delete s[i], g(e, t, n), o({
                        errMsg: `${e}:ok`
                    })
                }

                function y(e, t, o) {
                    let n = (t || {}).storageId;
                    const r = u();
                    if (!r) return {
                        action: "PROCEED"
                    };
                    let i = {};
                    if (void 0 === n) n = 0;
                    else if (!b(n)) return o({
                        errMsg: `${e}:fail nonexistent storage space`
                    });
                    i = r[n] || {}, r[n] = i;
                    const a = {
                        keys: Object.keys(i),
                        currentSize: Math.ceil(JSON.stringify(i).length / 1024)
                    };
                    a.limitSize = 1024 * s.userMaxSize, a.errMsg = `${e}:ok`, o(a)
                }

                function b(e) {
                    return n([0, 1, 2, 3, 4], e)
                }
                i.on("RESET_INSTANCE", (() => {
                    a = void 0, d = !1, l()
                }));
                const S = {
                    getStorage: p,
                    clearStorage: _,
                    setStorage: h,
                    removeStorage: v,
                    getStorageInfo: y,
                    getStorageSync: p,
                    setStorageSync: h,
                    clearStorageSync: _,
                    removeStorageSync: v,
                    getStorageInfoSync: y,
                    batchSetStorage: m,
                    batchSetStorageSync: m,
                    batchGetStorage: f,
                    batchGetStorageSync: f
                }; - 1 !== navigator.userAgent.indexOf("game") && l(), e.exports = S
            },
            4813: (e, t, o) => {
                "use strict";
                const n = o(6202),
                    {
                        arrayBufferToBase64: r,
                        isKindOfArrayBuffer: i,
                        isKindOfArray: a
                    } = n,
                    s = {
                        invokeLockStepMethod: {
                            is: e => a(e) ? e.every((e => i(e))) : i(e),
                            trans: (e, t) => (e.__dataisab = !0, a(t) ? t.map((e => r(e))) : r(t))
                        },
                        writeFile: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        writeFileSync: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        fs_appendFile: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        fs_appendFileSync: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        uploadToCommonCDN: {
                            is: (e, t) => "fileData" === t && i(e),
                            trans: (e, t) => ({
                                __dataisab: !0,
                                value: r(t)
                            })
                        },
                        sendUDPSocketMessage: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        writeTCPSocket: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        write: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        writeSync: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t))
                        },
                        read: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t)),
                            saveOrigin: !0
                        },
                        readSync: {
                            is: e => i(e),
                            trans: (e, t) => (e.__dataisab = !0, r(t)),
                            saveOrigin: !0
                        }
                    };
                e.exports = s
            },
            4420: (e, t, o) => {
                "use strict";
                const n = o(8446);
                e.exports = {
                    encodeArrayBufferSync: async function(e, t, o) {
                        const r = t.format,
                            i = t.data;
                        try {
                            const t = new n.TextEncoder(r).encode(i);
                            return o({
                                errMsg: `${e}:ok`,
                                buffer: t.buffer
                            })
                        } catch (t) {
                            return o({
                                errMsg: `${e}:fail ${t}`
                            })
                        }
                    },
                    decodeArrayBufferSync: async function(e, t, o) {
                        const r = t.format,
                            i = t.data;
                        try {
                            const t = new n.TextDecoder(r);
                            return o({
                                errMsg: `${e}:ok`,
                                result: t.decode(i)
                            })
                        } catch (t) {
                            return o({
                                errMsg: `${e}:fail`
                            })
                        }
                    }
                }
            },
            8804: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.proxyGlobalVarToInstanceFrame = t.createInstanceFrameInitialGlobal = void 0;
                t.createInstanceFrameInitialGlobal = e => {
                    const {
                        id: t,
                        win: o,
                        isPreload: n,
                        asLoader: r
                    } = e, i = o.__passWAServiceGlobal__ || function() {};
                    if (o.__global.WAServiceGlobal = {}, o.__passWAServiceGlobal__ = function(e) {
                            for (const t in e) "Protect" !== t && ("WeixinJSBridge" === t && (o[t] = e[t]), o.__global.WAServiceGlobal[t] = e[t]);
                            i(e)
                        }, o.__wxAppData = {}, o.__wxRoute = void 0, o.__wxRouteBegin = void 0, o.__wxAppCode__ = {}, o.__wxAppCurrentFile__ = void 0, o.__vd_version_info__ = {}, o.Component = function() {}, o.Behavior = function() {}, o.definePlugin = function() {}, o.requirePlugin = function() {}, o.global = {}, o.__workerVendorCode__ = {}, o.__workersCode__ = {}, o.__global.WeixinWorker = o.WeixinWorker = {}, o.$gwx = void 0, o.__global.id = t, o.WeixinJSBridge = o.__global.WeixinJSBridge = __global.getNewWeixinJSBridge("global", n), __global.__getNewWeixinJSContext) {
                        const e = Object.assign({}, __global.__contextSupport || {});
                        o.__global.__contextSupport = e, o.WeixinJSContext = o.__global.WeixinJSContext = __global.__getNewWeixinJSContext({
                            obj: new o.Object,
                            window: o,
                            ObjectPrototype: o.Object.prototype,
                            scopedContextSupport: e,
                            bridge: o.WeixinJSBridge,
                            locationHash: o.location.hash,
                            parentId: `ifr-${t}`
                        })
                    }
                    o.__global.timing = new __global.Timing({
                        document: o.document,
                        MutationObserver: o.__global.MutationObserver,
                        blocked: !0
                    }), o.__global.asLoader = r, o.alert = o.__global.alert = r.proxyAlert.bind(r, t), o.prompt = o.__global.prompt = r.proxyPrompt.bind(r, t)
                }, t.proxyGlobalVarToInstanceFrame = function(e) {
                    const t = () => {
                            var t;
                            const o = e.frames.get(e.currentFrameId);
                            if (o) return (null === (t = null === __global || void 0 === __global ? void 0 : __global.__contextSupport) || void 0 === t ? void 0 : t.isIsolateContext) && e.getActiveAppserviceContextFrameWindowSync(o) || o.iframe.contentWindow
                        },
                        o = e => e;
                    [{
                        name: "__wxAppData",
                        defaultValue: {}
                    }, {
                        name: "__wxAppCode__",
                        defaultValue: {}
                    }, {
                        name: "WAServiceGlobal",
                        defaultValue: {},
                        subpathGetter: e => e.__global
                    }, {
                        name: "__wxAppCurrentFile__",
                        defaultValue: void 0,
                        proxySet: !0
                    }, {
                        name: "__workersCode__",
                        defaultValue: {}
                    }, {
                        name: "__workerVendorCode__",
                        defaultValue: {}
                    }, {
                        name: "WeixinWorker",
                        defaultValue: {}
                    }, {
                        name: "__WeixinWorker",
                        defaultValue: {}
                    }, {
                        name: "__vd_version_info__",
                        defaultValue: {}
                    }, {
                        name: "__passWAServiceGlobal__",
                        defaultValue: void 0,
                        proxySet: !0
                    }, {
                        name: "__devtoolsUseBeforeInvoke__",
                        defaultValue: !1
                    }, {
                        name: "wx",
                        defaultValue: {}
                    }, {
                        name: "getApp",
                        defaultValue: void 0
                    }, {
                        name: "getCurrentPages",
                        defaultValue: void 0
                    }, {
                        name: "global",
                        defaultValue: {}
                    }, {
                        name: "__wxConfig",
                        defaultValue: {}
                    }, {
                        name: "__devtoolsConfig",
                        defaultValue: {}
                    }, {
                        name: "WeixinJSBridge",
                        defaultValue: void 0
                    }, {
                        name: "__interfaceBuilder",
                        defaultValue: !1
                    }].forEach((e => {
                        Object.defineProperty(e.subpathGetter ? e.subpathGetter(window) : window, e.name, {
                            get: () => ((e = o, n, r) => {
                                var i;
                                try {
                                    const o = t();
                                    return o && null !== (i = e(o)[n]) && void 0 !== i ? i : r
                                } catch (e) {
                                    return r
                                }
                            })(e.subpathGetter, e.name, e.defaultValue),
                            set: n => (e.proxySet && ((e = o, n, r) => {
                                const i = t();
                                i && (e(i)[n] = r)
                            })(e.subpathGetter, e.name, n), !0),
                            enumerable: !0
                        })
                    }))
                }
            },
            1981: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ASLoader = void 0;
                const n = o(6659),
                    r = o(7799),
                    i = o(8804),
                    a = o(3672),
                    s = o(7414),
                    c = o(4572),
                    d = o(6202);
                class l {
                    constructor() {
                        this.globalSessionId = Date.now(), this.idCounter = 1, this.frames = new Map, this.currentFrameId = 0, this.runtimeInstanceInfo = {}, this.verbose = !1, this.messagerCallback = e => {
                            const {
                                command: t,
                                data: o
                            } = e;
                            "LOAD_APPSERVICE" === t ? (r.setAppserviceReady(!1), c.emit("RESET_INSTANCE"), this.runtimeInstanceInfo.compileTs = o.compileTs, o.initOptions && (o.initOptions.systemInfo && c.emit("SET_SYSTEM_INFO", o.initOptions.systemInfo), o.initOptions.libVersion && (window.__contextSupport.libVersion = o.initOptions.libVersion)), o.error || this.loadAppService(o.scripts, o.hardReload)) : "RESET" === t ? this.reset({
                                clearPreload: o.clearPreload,
                                shouldPreload: o.shouldPreload
                            }) : "PRELOAD" === t && this.preload()
                        }, r.registerCallback(this.messagerCallback);
                        try {
                            this.runtimeInstanceInfo = {
                                compileTs: Number(location.search.match(/cts=(\d+)/)[1])
                            }
                        } catch (e) {
                            const t = __global.prompt("GET_RUNTIME_INSTANCE_INFO");
                            this.runtimeInstanceInfo = JSON.parse(t)
                        }
                        this.loadAppService(), i.proxyGlobalVarToInstanceFrame(this)
                    }
                    isLoadSuccess(e) {
                        const t = e.iframe;
                        let o = !0;
                        try {
                            t.contentWindow.location && (o = !0)
                        } catch (e) {
                            o = !1
                        }
                        return o
                    }
                    isValidFrame(e) {
                        return this.frames.has(e)
                    }
                    isValidCurrentFrame(e) {
                        return this.frames.has(e) && this.currentFrameId === e
                    }
                    loadAppService(e, t) {
                        console.log("jianjia see loadAppService")
                        if (d.calibration(), 0 === this.frames.size || t) {
                            if (t) {
                                this.verbose && this.groupDebug("info", "--loader--", "will force load");
                                for (const [e, t] of this.frames) this.disposeFrame(t)
                            }
                            const e = this.idCounter++;
                            this.currentFrameId = e;
                            const o = this.initASFrameInfo({
                                id: e,
                                iframe: void 0,
                                status: "void",
                                statusChangeEE: new n.EventEmitter,
                                statusUpdateTs: Date.now(),
                                statusChangeListeners: {},
                                instanceInfo: Object.assign({}, this.runtimeInstanceInfo),
                                timing: {
                                    loadStartTs: Date.now()
                                }
                            });
                            this.frames.set(e, o), this.verbose && this.groupDebug("info", "--loader--", "will create new frame", e), a.createIframeElement(this.generateInstanceFrameSrc(e, !0)).then((e => {
                                o.iframe = e, o.status = "loading"
                            }))
                        } else {
                            let o = !1;
                            const n = new Set,
                                r = [...this.frames.values()];
                            for (const t of r)
                                if (o) n.add(t);
                                else switch (t.status) {
                                    case "void":
                                        o = !0, this.currentFrameId = t.id;
                                        break;
                                    case "preloading": {
                                        o = !0, this.verbose && this.groupDebug("info", "--loader--", "got a preloading", t.id), this.currentFrameId = t.id, t.instanceInfo = Object.assign({}, this.runtimeInstanceInfo), t.statusChangeListeners.waitPreloading && (clearTimeout(t.statusChangeListeners.waitPreloading.timeoutId), t.statusChangeEE.off("change", t.statusChangeListeners.waitPreloading.listener), this.verbose && this.groupDebug("warn", `clear previous wait before trying to load preloading frame ${t.id}`));
                                        const n = setTimeout((() => {
                                            this.groupLog("warn", "preloading -> timedout"), t.status = "timedout"
                                        }), 5e3);
                                        this.verbose && this.groupDebug("warn", `[--loader--] try to load preloading frame ${t.id}`);
                                        const r = () => {
                                            this.verbose && this.groupDebug("info", "--loader--", "listener triggered", t.id), "preloaded" === t.status && (this.verbose && this.groupDebug("info", "--loader--", "preloaded triggered", t.id), clearTimeout(n), t.statusChangeEE.off("change", r), t.status = "loading", t.iframe.contentWindow.__global.timing.addPoint("APPRESOURCE_LOAD_START", Date.now()), a.loadScripts(t.iframe.contentDocument, e))
                                        };
                                        t.statusChangeEE.on("change", r), t.statusChangeListeners.waitPreloading = {
                                            timeoutId: n,
                                            listener: r
                                        };
                                        break
                                    }
                                    case "preloaded":
                                        o = !0, this.verbose && this.groupDebug("info", "--loader--", "got a preloaded", t.id), this.currentFrameId = t.id, t.instanceInfo = Object.assign({}, this.runtimeInstanceInfo), t.status = "loading", t.iframe.contentWindow.__global.timing.addPoint("APPRESOURCE_LOAD_START", Date.now()), a.loadScripts(t.iframe.contentDocument, e);
                                        break;
                                    case "loading":
                                    case "loaded":
                                    case "errored":
                                    case "timedout":
                                        n.add(t);
                                        break;
                                    default:
                                        this.groupLog("warn", `[loader] unknown status ${t.status}. (getFirstAvailableFrame)`), n.add(t)
                                }
                            if (n.forEach((e => {
                                    this.disposeFrame(e)
                                })), !o) {
                                this.verbose && this.groupDebug("info", "--loader--", "found = false");
                                [...this.frames.values()].forEach((e => this.disposeFrame(e))), this.loadAppService(e, t)
                            }
                        }
                    }
                    preload() {
                        if (s.isSkylineRendererEnabled) return;
                        this.verbose && this.groupDebug("info", "--loader-- preload()");
                        for (const e of this.frames.values())
                            if ("preloading" === e.status || "preloaded" === e.status) return void(this.verbose && this.groupDebug("info", "--loader-- already a preload element"));
                        const e = this.idCounter++,
                            t = this.initASFrameInfo({
                                id: e,
                                iframe: void 0,
                                status: "void",
                                statusChangeEE: new n.EventEmitter,
                                statusUpdateTs: Date.now(),
                                statusChangeListeners: {},
                                timing: {
                                    preloadStartTs: Date.now()
                                }
                            });
                        this.frames.set(e, t), this.verbose && this.groupDebug("info", "--loader-- will preload", e, t), a.createIframeElement(this.generateInstanceFrameSrc(e)).then((e => {
                            t.iframe = e, t.status = "preloading"
                        })), -1 === this.currentFrameId && (this.currentFrameId = e)
                    }
                    loadSrc(e, t) {
                        try {
                            const o = e.iframe.contentWindow;
                            o.__global.history.pushState("", "", t), o.location.reload()
                        } catch (t) {
                            this.verbose && this.groupDebug("warn", "loadSrc catch error", t), e.status = "errored", this.disposeFrame(e), 1 === this.frames.size && this.preload()
                        }
                    }
                    handleLoadStart(e) {
                        var t;
                        const o = e.location.search.includes("autoload"),
                            n = Number(e.location.hash.match(/#id_(\d+)/)[1]);
                        this.verbose && this.groupDebug("info", "--loader-- handleLoadStart", null === (t = e.location) || void 0 === t ? void 0 : t.href);
                        const r = this.frames.get(n);
                        r && (i.createInstanceFrameInitialGlobal({
                            id: n,
                            win: e,
                            isPreload: !o,
                            asLoader: this
                        }), e.__global.asSubLoader.initWithContexts(), s.isSkylineRendererEnabled && Object.defineProperty(e, "SkylineGlobal", {
                            configurable: !1,
                            enumerable: !0,
                            get: () => "undefined" == typeof SkylineGlobal ? void 0 : SkylineGlobal,
                            set: () => {}
                        }), e.addEventListener("load", (() => {
                            var t;
                            if (this.verbose && this.groupDebug("info", "--loader-- win onload", null === (t = e.location) || void 0 === t ? void 0 : t.href), this.isValidFrame(n))
                                if (o) {
                                    const t = this.getFrameContextDelegate(r);
                                    (null == t ? void 0 : t.onceActiveAppserviceContextFrameLoadedScripts) ? t.onceActiveAppserviceContextFrameLoadedScripts((() => {
                                        var t;
                                        this.verbose && this.groupDebug("info", "--loader-- triggered onceActiveAppserviceContextFrameLoadedScripts", null === (t = e.location) || void 0 === t ? void 0 : t.href), this.handleLoadDone(e, n)
                                    })): this.handleLoadDone(e, n)
                                } else this.isLoadSuccess(r) ? (this.verbose && this.groupDebug("info", "--loader-- will set preloaded", {
                                    win: e,
                                    href: e.location.href
                                }), r.status = "preloaded", r.timing.preloadEndTs = Date.now(), r.timing.preloadCost = r.timing.preloadEndTs - r.timing.preloadStartTs) : r.status = "errored"
                        })))
                    }
                    handleLoadDone(e, t) {
                        var o;
                        if (this.verbose && this.groupDebug("info", "--loader-- handleLoadDone", null === (o = e.location) || void 0 === o ? void 0 : o.href), !this.isValidCurrentFrame(t)) return;
                        const n = this.frames.get(t);
                        if (!this.isLoadSuccess(n)) return void(n.status = "errored");
                        if ("loaded" === n.status) return;
                        if (!n.instanceInfo) return void this.groupLog("error", "frame loaded without instanceInfo");
                        e.performance.mark("documentReadyAlertStart"), e.__global.alert("DOCUMENT_READY"), e.performance.mark("documentReadyAlertEnd");
                        const i = new e.__global.CustomEvent("LOADER_LOAD_DONE");
                        e.dispatchEvent(i), e.__global.WeixinJSBridge.__setCommonPayload("compileTs", n.instanceInfo.compileTs), e.__global.WeixinJSBridge.__unblock(), r.setAppserviceReady(!0, e.JSON.parse.bind(e.JSON)), e.__global.timing.setCommonMessage(n.instanceInfo), e.__global.timing.setBlocked(!1), n.status = "loaded", n.timing.loadEndTs = Date.now(), e.__global.requestIdleCallback((() => {
                            e.__global.timing.report()
                        }))
                    }
                    handleWxConfigReady(e, t) {
                        const o = Number(e.location.hash.match(/#id_(\d+)/)[1]),
                            n = this.frames.get(o);
                        if (!n) return;
                        if (!n.instanceInfo) return void this.groupLog("error", "during handleWxConfigReady, frame instanceInfo not found");
                        const r = t || e;
                        r.__global.WeixinJSBridge.__setCommonPayload("compileTs", n.instanceInfo.compileTs), r.__global.WeixinJSBridge.__unblock()
                    }
                    getFrameContextDelegate(e) {
                        var t, o;
                        const n = null === (o = null === (t = null == e ? void 0 : e.iframe.contentWindow) || void 0 === t ? void 0 : t.__global) || void 0 === o ? void 0 : o.__contextSupport;
                        return null == n ? void 0 : n.delegate
                    }
                    getActiveAppserviceContextFrameWindowSync(e) {
                        var t, o;
                        const n = this.getFrameContextDelegate(e),
                            r = null === (t = null == n ? void 0 : n.getActiveAppserviceContextFrameSync) || void 0 === t ? void 0 : t.call(n);
                        return null !== (o = null == r ? void 0 : r.iframe.contentWindow) && void 0 !== o ? o : window
                    }
                    async getActiveAppserviceContextFrameWindow(e) {
                        var t, o;
                        const n = this.getFrameContextDelegate(e);
                        if (!n) return Promise.resolve(window);
                        const r = await (null === (t = null == n ? void 0 : n.getActiveAppserviceContextFrame) || void 0 === t ? void 0 : t.call(n));
                        return null !== (o = null == r ? void 0 : r.iframe.contentWindow) && void 0 !== o ? o : window
                    }
                    disposeFrame(e) {
                        var t, o, n;
                        if (this.verbose && this.groupDebug("warn", "dispose frame", e, null == e ? void 0 : e.id), e = e || this.frames.get(this.currentFrameId)) {
                            if (null === (o = null === (t = this.getFrameContextDelegate(e)) || void 0 === t ? void 0 : t.disposeAll) || void 0 === o || o.call(t), this.frames.delete(e.id), this.currentFrameId === e.id)
                                if (this.frames.size > 0)
                                    for (const [e, t] of this.frames) {
                                        this.currentFrameId = t.id;
                                        break
                                    } else this.currentFrameId = -1;
                            null === (n = __global.cfn) || void 0 === n || n.call(__global, e), r.send({
                                command: "DELETE_IFRAME",
                                data: {
                                    src: e.iframe.src
                                }
                            }), setTimeout((() => {
                                (null == e ? void 0 : e.iframe.parentElement) && e.iframe.parentElement.removeChild(e.iframe)
                            }), 1e3), this.clearStatusChangeListeners(e)
                        }
                    }
                    clearStatusChangeListeners(e) {
                        for (const t in e.statusChangeListeners) {
                            const o = e.statusChangeListeners[t];
                            clearTimeout(o.timeoutId), e.statusChangeEE.off("change", o.listener), this.verbose && this.groupDebug("warn", `clear ${t} listener of frame ${e.id}`)
                        }
                        e.statusChangeListeners = {}
                    }
                    reset(e = {}) {
                        if (s.isSkylineRendererEnabled) return;
                        const {
                            clearPreload: t,
                            shouldPreload: o = !0
                        } = e;
                        if (this.verbose && this.groupDebug("warn", `reset triggered. clearPreload ${t}, shouldPreload ${o}`), r.setAppserviceReady(!1), c.emit("RESET_INSTANCE"), -1 !== this.currentFrameId) {
                            const e = this.frames.get(this.currentFrameId);
                            !t && "preloaded" === (null == e ? void 0 : e.status) || "preloading" === (null == e ? void 0 : e.status) || this.disposeFrame()
                        }
                        if (t) {
                            const e = [...this.frames.values()];
                            for (const t of e) this.disposeFrame(t);
                            o && this.preload()
                        } else {
                            const e = new Set;
                            let t;
                            for (const [o, n] of this.frames) {
                                if (!t) {
                                    switch (n.status) {
                                        case "preloaded":
                                        case "preloading":
                                            t = n, this.clearStatusChangeListeners(n);
                                            break;
                                        default:
                                            e.add(n)
                                    }
                                    break
                                }
                                e.add(n)
                            }
                            for (const t of e) this.disposeFrame(t);
                            !t && o && this.preload()
                        }
                    }
                    async getCurrentInstanceFrame() {
                        const e = this.frames.get(this.currentFrameId);
                        if (!e) {
                            const e = `no current frame during getCurrentInstanceFrame [${this.getFrameStatus()}]`;
                            throw this.groupLog("error", e), new Error(`[loader] ${e}`)
                        }
                        switch (e.status) {
                            case "preloaded":
                            case "loaded":
                                return e.iframe;
                            case "loading":
                            case "preloading":
                                return new Promise(((t, o) => {
                                    const n = setTimeout((() => {
                                            e.status = "timedout"
                                        }), 5e3),
                                        r = () => {
                                            "preloaded" === e.status || "loaded" === e.status ? (clearTimeout(n), e.statusChangeEE.off("change", r), t(e.iframe)) : "errored" === e.status && o("[loader] frame load errored")
                                        };
                                    e.statusChangeEE.on("change", r), e.statusChangeListeners.waitGetFrame = {
                                        timeoutId: n,
                                        listener: r
                                    }
                                }));
                            default:
                                throw new Error(`[loader] unexpected current frame status ${e.status}`)
                        }
                    }
                    getFrameStatus() {
                        return `frames=(${Array.from(this.frames.values()).map((e=>`${e.id}@${e.status}`)).join(",")}), current=${this.currentFrameId}`
                    }
                    generateInstanceFrameSrc(e, t) {
                        let o = `${location.protocol}//${location.host}/appservice/instanceframe?s=${this.globalSessionId}`;
                        return t && (o += "&autoload"), o += `#id_${e}`, o
                    }
                    initASFrameInfo(e) {
                        const t = this;
                        let o = e.status;
                        return Object.defineProperty(e, "status", {
                            get: () => o,
                            set(n) {
                                o !== n && (t.verbose && t.groupDebug("warn", `id ${e.id} change status from ${o} to ${n}`, (new Error).stack), o = n, e.statusUpdateTs = Date.now(), e.statusChangeEE.emit("change", e))
                            }
                        }), e
                    }
                    proxyAlert(e, t) {
                        if (!this.isValidCurrentFrame(e)) return void(this.verbose && this.groupDebug("warn", `reject non-current frame (id ${e}) alert req with msg: ${t}`));
                        const o = this.frames.get(e);
                        return t.startsWith("SUBPACKAGE_READY_") && ("loaded" !== o.status && setTimeout((() => {
                            var t;
                            if (e === this.currentFrameId) {
                                const n = (null === (t = o.iframe.contentWindow.__global.asSubLoader) || void 0 === t ? void 0 : t.activeAppWindow) || o.iframe.contentWindow;
                                this.handleLoadDone(n, e)
                            }
                        })), o.iframe.contentWindow.__global.asSubLoader.emit(t)), __global.alert(`$$${JSON.stringify({msg:t,common:o.instanceInfo})}`)
                    }
                    proxyPrompt(e, t) {
                        if (!this.isValidCurrentFrame(e)) return void(this.verbose && this.groupDebug("warn", `reject non-current frame (id ${e}) prompt req with msg: ${t}`));
                        const o = this.frames.get(e);
                        return __global.prompt(`$$${JSON.stringify({msg:t,common:o.instanceInfo})}`)
                    }
                    getInstanceWindowSync() {
                        const e = this.frames.get(this.currentFrameId);
                        try {
                            return null == e ? void 0 : e.iframe.contentWindow
                        } catch (e) {
                            return
                        }
                    }
                    groupLog(e, ...t) {
                        console.group(`${new Date} 开发者工具 AppService 内部错误`), console[e]("[--loader--]", ...t), console.groupEnd()
                    }
                    groupDebug(e, ...t) {
                        if (this.verbose) {
                            try {
                                console[e]("[--loader--]", ...t)
                            } catch (e) {
                                console.warn("[--loader--] error while outputing debug log", e)
                            }
                            console.groupEnd()
                        }
                    }
                }
                if (t.ASLoader = l, location.pathname.endsWith("mainframe")) {
                    const e = new l;
                    window.__global.asLoader = e, window.__global.getInstanceWindow = async () => (await e.getCurrentInstanceFrame()).contentWindow, window.__global.getActiveAppWindow = async () => {
                        var t;
                        const o = (await e.getCurrentInstanceFrame()).contentWindow;
                        return ((null === (t = o.__global) || void 0 === t ? void 0 : t.asSubLoader) ? o.__global.asSubLoader.activeAppWindow : o) || o
                    }
                } else r.setAppserviceReady(!0), window.__global.getInstanceWindow = async () => window, window.__global.getActiveAppWindow = async () => {
                    var e;
                    const t = window;
                    return ((null === (e = t.__global) || void 0 === e ? void 0 : e.asSubLoader) ? t.__global.asSubLoader.activeAppWindow : t) || t
                }
            },
            3672: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loadScripts = t.ignoreKeys = t.createIframeElement = void 0, t.createIframeElement = async function(e = "about:blank") {
                    const t = document.createElement("iframe");
                    return t.style.borderWidth = "0px", t.style.width = "100%", t.style.height = "100%", t.style.pointerEvents = "none", t.src = e, document.body ? (document.body.appendChild(t), t) : new Promise((e => {
                        document.addEventListener("DOMContentLoaded", (() => {
                            document.body.appendChild(t), e(t)
                        }))
                    }))
                }, t.ignoreKeys = new Set(["dedupId"]), t.loadScripts = async function(e, o) {
                    if (o)
                        for (const n of o) {
                            const o = e.createElement("script");
                            o.charset = "UTF-8";
                            let r = !0;
                            for (const e in n)
                                if ("async" === e) r = !1;
                                else {
                                    if (t.ignoreKeys.has(e)) continue;
                                    o[e] = n[e]
                                } r && o.src ? await new Promise((t => {
                                o.addEventListener("load", t), o.addEventListener("error", t), e.head.appendChild(o)
                            })) : e.head.appendChild(o)
                        }
                }
            },
            4631: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initBridge = t.sendNavigateBackDone = t.sendNavigateBack = t.sendNotifyRouteDone = void 0;
                const n = o(7414),
                    r = o(4199),
                    i = o(7799),
                    a = o(4572);
                var s;
                async function c(e) {
                    const {
                        command: t,
                        data: o
                    } = e;
                    if (t === s.SKYLINE_DISPATCH_ROUTE) ! function(e) {
                        const t = e.taskId || 0;
                        switch (e.openType) {
                            case "navigateTo":
                                n.skylineShell.notifyNavigateTo(e.windowId, e.pageId, t, e.pageConfig);
                                break;
                            case "redirectTo":
                                n.skylineShell.notifyRedirectTo(e.windowId, e.pageId, t, e.pageConfig);
                                break;
                            case "navigateBack":
                                e.delta && n.skylineShell.notifyNavigateBack(e.windowId, e.pageId, e.delta, e.animated, t);
                                break;
                            case "appLaunch":
                                n.skylineShell.notifyAppLaunch(e.windowId, e.pageId, e.pageConfig);
                                break;
                            case "reLaunch":
                                n.skylineShell.notifyReLaunch(e.windowId, e.pageId, e.pageConfig);
                                break;
                            case "autoReLaunch":
                                n.skylineShell.notifyAutoReLaunch(e.windowId, e.pageId, e.pageConfig);
                                break;
                            case "switchTab":
                                n.skylineShell.notifySwitchTab(e.windowId, e.pageId, e.pageConfig)
                        }
                    }(o);
                    else if (t === s.SKYLINE_CREATE_WINDOW) r.log(s.SKYLINE_CREATE_WINDOW, o), await n.createWindow(o), r.log("emit requireRenderContext"), a.emit("triggerOnEvent", "requireRenderContext", {}), r.log("emit onSkylineGlobalReady"), a.emit("triggerOnEvent", "onSkylineGlobalReady", {}), r.log("emit onSkylineWindowReady", o.windowId), a.emit("triggerOnEvent", "onSkylineWindowReady", {
                        id: o.windowId
                    }), i.send({
                        command: s.SKYLINE_CREATE_WINDOW_RESPONSE,
                        data: o
                    });
                    else if (t === s.SKYLINE_DESTROY_WINDOW) n.destroyWindow(o.windowId);
                    else if (t === s.SKYLINE_DISPATCH_EVENT) {
                        const {
                            windowId: e,
                            eventName: t,
                            args: i
                        } = o, a = n.skylineWindows.get(e);
                        if (!a) throw r.error(`skylineWindow ${e} is not exist`);
                        if (t.startsWith("mouse") || "click" === t) return void
                        function(e, t, o) {
                            switch (t) {
                                case "mousemove":
                                    e.touchOver(...o);
                                    break;
                                case "click":
                                    e.touchStart(...o), e.touchEnd(...o)
                            }
                        }(a, t, i);
                        if (!(t in a)) throw r.error(`skylineWindow not support ${t} event`);
                        try {
                            a[t](...i)
                        } catch (e) {
                            r.error(s.SKYLINE_DISPATCH_EVENT, o, e)
                        }
                    }
                }! function(e) {
                    e.SKYLINE_CREATE_WINDOW = "SKYLINE_CREATE_WINDOW", e.SKYLINE_CREATE_WINDOW_RESPONSE = "SKYLINE_CREATE_WINDOW_RESPONSE", e.SKYLINE_DESTROY_WINDOW = "SKYLINE_DESTROY_WINDOW", e.SKYLINE_DISPATCH_EVENT = "SKYLINE_DISPATCH_EVENT", e.SKYLINE_DISPATCH_ROUTE = "SKYLINE_DISPATCH_ROUTE", e.SKYLINE_NOTIFY_ROUTE_DONE = "SKYLINE_NOTIFY_ROUTE_DONE", e.SKYLINE_NAVIGATE_BACK = "SKYLINE_NAVIGATE_BACK", e.SKYLINE_NAVIGATE_BACK_DONE = "SKYLINE_NAVIGATE_BACK_DONE"
                }(s || (s = {})), t.sendNotifyRouteDone = function(e) {
                    i.send({
                        command: s.SKYLINE_NOTIFY_ROUTE_DONE,
                        data: {
                            taskId: e
                        }
                    })
                }, t.sendNavigateBack = function(e) {
                    i.send({
                        command: s.SKYLINE_NAVIGATE_BACK,
                        data: {
                            windowId: e.window_id,
                            pageId: e.page_id
                        }
                    })
                }, t.sendNavigateBackDone = function(e) {
                    i.send({
                        command: s.SKYLINE_NAVIGATE_BACK_DONE,
                        data: {
                            windowId: e.window_id,
                            pageId: e.page_id
                        }
                    })
                }, t.initBridge = function() {
                    i.registerCallback(c)
                }
            },
            7414: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.destroyWindow = t.createWindow = t.skylineWindows = t.initSkyline = t.skylineShell = t.isSkylineRendererEnabled = void 0;
                const n = o(2638),
                    r = o(4199),
                    i = o(4631),
                    a = o(8446);
                async function s(e) {
                    if (t.skylineWindows.has(e.windowId)) throw r.error(`window ${e.windowId} already created`);
                    try {
                        const o = window.__global.safeSkylineRequire("sharedMemory/sharedMemory.node"),
                            n = e.width * e.dpr * e.height * e.dpr * 4 * 4,
                            i = 4,
                            a = 4,
                            s = o.setMemory(e.sharedMemoryKey, n + i + a);
                        if (!s) throw r.error("shared memory create failed");
                        r.log("shared memory", s);
                        const c = await t.skylineShell.createWindow({
                            window_id: e.windowId,
                            width: e.width,
                            height: e.height,
                            dpr: e.dpr,
                            sharedMemoryKey: e.sharedMemoryKey,
                            safeAreaInsets: e.safeAreaInsets,
                            buffer: s,
                            showWindow: !1
                        });
                        t.skylineWindows.set(e.windowId, c), r.log("createWindow", e.windowId)
                    } catch (t) {
                        throw r.error(`create skylineWindow ${e.windowId} failed`, t)
                    }
                }

                function c(e) {
                    if (t.skylineWindows.size <= 1) return;
                    const o = t.skylineWindows.get(e);
                    t.skylineWindows.delete(e), o && t.skylineShell.destroyWindow(e), r.log("destroyWindow", e)
                }
                t.isSkylineRendererEnabled = !1, t.initSkyline = function() {
                    "win32" !== window.__global.platform || "ia32" !== window.__global.arch ? (t.isSkylineRendererEnabled = !0, i.initBridge(), t.skylineShell = n.createSkylineShell({
                        loadResource(e) {
                            r.log("loadResource", e.path);
                            const t = `/appservice/__skyline__/${e.path}`;
                            return r.getBufferSync(t)
                        },
                        loadResourceAsync: e => new Promise((t => {
                            r.log("loadResourceAsync", e.path);
                            const o = `/appservice/__skyline__/${e.path}`;
                            r.getBufferASync(o, t)
                        })),
                        httpRequest: e => new Promise((t => {
                            r.log("httpRequest", e.url), a.fetch(e.url).then((e => e.arrayBuffer())).then((e => {
                                t(Buffer.from(e))
                            })).catch((e => {
                                console.error(e), t(Buffer.from([]))
                            }))
                        })),
                        notifyRouteDone: i.sendNotifyRouteDone,
                        navigateBack: i.sendNavigateBack,
                        navigateBackDone: i.sendNavigateBackDone
                    })) : r.error("Skyline renderer is not supported on 32-bit Windows, please use 64-bit version Weixin Devtools.")
                }, t.skylineWindows = new Map, t.createWindow = s, t.destroyWindow = c, a.skylineManager = {
                    skylineWindows: t.skylineWindows,
                    createWindow: s,
                    destroyWindow: c
                }
            },
            2638: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createSkylineShell = t.SkylineWindow = t.initAddon = void 0;
                const n = o(4199);

                function r() {
                    "undefined" == typeof SkylineShell && (window.__global.safeSkylineRequire("skyline-addon/build/skyline.node"), console.info(`[skyline] skyline 版本号: ${SkylineDebugInfo.skyline_version}, 版本记录: ${SkylineDebugInfo.skyline_git_rev}`))
                }
                t.initAddon = r;
                class i {
                    constructor(e, t) {
                        this.shell = e, this.options = t;
                        const o = window.__global.safeSkylineRequireResolve("skyline-addon"),
                            n = window.__global.safeSkylineRequire("path"),
                            r = n.join(n.dirname(o), "./bundle"),
                            i = n.join(n.dirname(o), "./build/skyline.node");
                        e.createWindow(t.window_id, r, t.width, t.height, t.dpr, !t.showWindow, t.buffer, i)
                    }
                    get window_id() {
                        return this.options.window_id
                    }
                    get width() {
                        return this.options.width
                    }
                    get height() {
                        return this.options.height
                    }
                    get dpr() {
                        return this.options.dpr
                    }
                    get sharedMemoryKey() {
                        return this.options.sharedMemoryKey
                    }
                    touchStart(e, t) {
                        this.shell.dispatchTouchStartEvent(this.window_id, e, t)
                    }
                    touchMove(e, t) {
                        this.shell.dispatchTouchMoveEvent(this.window_id, e, t)
                    }
                    touchEnd(e, t) {
                        this.shell.dispatchTouchEndEvent(this.window_id, e, t)
                    }
                    touchOver(e, t) {
                        this.shell.dispatchTouchOverEvent(this.window_id, e, t)
                    }
                    touchCancel() {
                        this.shell.dispatchTouchCancelEvent(this.window_id)
                    }
                    wheel(e, t, o, n) {
                        this.shell.dispatchWheelEvent(this.window_id, e, t, o, n)
                    }
                    char(e) {
                        n.log(`char: code_point ${e}`), this.shell.dispatchCharEvent(this.window_id, e)
                    }
                    keyboard(e, t, o, r) {
                        n.log(`keyboard: key ${e}, scancode ${t}, action ${o}, mods ${r}`), this.shell.dispatchKeyboardEvent(this.window_id, e, t, o, r)
                    }
                }
                t.SkylineWindow = i, t.createSkylineShell = function(e) {
                    let t, o = !1;
                    const n = new Map;

                    function a(i) {
                        t || (r(), t = new SkylineShell, t.setNotifyBootstrapDoneCallback((() => {
                            o = !0
                        })), t.setSafeAreaEdgeInsets(i.safeAreaInsets.left, i.safeAreaInsets.top, i.safeAreaInsets.right, i.safeAreaInsets.bottom), t.setLoadResourceCallback(e.loadResource), t.setLoadResourceAsyncCallback((function(o) {
                            e.loadResourceAsync({
                                path: o.path
                            }).then((e => {
                                t.notifyResourceLoad(o.request_id, e)
                            }))
                        })), t.setHttpRequestCallback((function(o) {
                            e.httpRequest({
                                url: o.url
                            }).then((e => {
                                t.notifyHttpRequestComplete(o.request_id, 0, 200, {}, e)
                            }))
                        })), t.setNotifyWindowReadyCallback((function(e) {
                            var t;
                            null === (t = n.get(e)) || void 0 === t || t(), n.delete(e)
                        })), t.setNotifyRouteDoneCallback(e.notifyRouteDone), t.setNavigateBackCallback(e.navigateBack), t.setNavigateBackDoneCallback(e.navigateBackDone), t.setSendLogCallback((e => {
                            let t;
                            ! function(e) {
                                e[e.info = 0] = "info", e[e.warn = 1] = "warn", e[e.error = 2] = "error", e[e.fatal = 3] = "fatal"
                            }(t || (t = {}));
                            const o = `[skyline]${e.log}`;
                            switch (e.type) {
                                case t.info:
                                    console.log(o);
                                    break;
                                case t.warn:
                                    console.warn(o);
                                    break;
                                case t.error:
                                case t.fatal:
                                    console.error(o)
                            }
                        })))
                    }
                    return {
                        createWindow: async e => (a({
                            safeAreaInsets: e.safeAreaInsets
                        }), new Promise((o => {
                            const r = new i(t, e);
                            n.set(e.window_id, (() => {
                                o(r)
                            }))
                        }))),
                        destroyWindow: e => {
                            o && t.destroyWindow(e)
                        },
                        notifyNavigateTo: (e, n, r, i) => {
                            o && t.notifyNavigateTo(e, n, r, i)
                        },
                        notifyRedirectTo: (e, n, r, i) => {
                            o && t.notifyRedirectTo(e, n, r, i)
                        },
                        notifyNavigateBack: (e, n, r, i, a) => {
                            o && t.notifyNavigateBack(e, n, r, i, a)
                        },
                        notifyAppLaunch: (e, n, r) => {
                            o && t.notifyAppLaunch(e, n, r)
                        },
                        notifyReLaunch: (e, n, r) => {
                            o && t.notifyReLaunch(e, n, r)
                        },
                        notifyAutoReLaunch: (e, n, r) => {
                            o && t.notifyAutoReLaunch(e, n, r)
                        },
                        notifySwitchTab: (e, n, r) => {
                            o && t.notifySwitchTab(e, n, r)
                        }
                    }
                }
            },
            4199: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getBufferASync = t.getBufferSync = t.log = t.error = void 0;
                const n = o(8446);

                function r(e, ...t) {
                    return console.error(`[skyline-devtools] ${e}`, ...t), new Error(`[skyline-devtools] ${e}`)
                }
                t.error = r;
                t.log = function(e, ...t) {
                    "object" == typeof __devtoolsConfig && Boolean((__devtoolsConfig.appConfig || {}).isDev) && console.log(`[skyline-devtools] ${e}`, ...t)
                }, t.getBufferSync = function(e) {
                    const t = new n.XMLHttpRequest;
                    return t.open("GET", e, !1), t.send(null), 200 === t.status ? Buffer.from(t.response, "base64") : (r(`get resource error ${e}`), Buffer.from([]))
                }, t.getBufferASync = function(e, t) {
                    const o = new n.XMLHttpRequest;
                    o.ontimeout = function() {
                        console.error(`The request for ${e} timed out.`)
                    }, o.onload = function() {
                        if (4 === o.readyState) {
                            if (200 === o.status) return void t(Buffer.from(o.response, "base64"));
                            console.error(o.statusText), t(Buffer.from([]))
                        }
                    }, o.open("GET", e, !0), o.send(null)
                }
            },
            5220: (e, t, o) => {
                "use strict";
                const n = o(8446);
                e.exports = {
                    sync: (e, t, o) => {
                        const r = {
                                api: e,
                                args: t,
                                options: o
                            },
                            i = new n.XMLHttpRequest;
                        return i.open("POST", `/apihelper/assdk?t=${Date.now()}`, !1), i.send(JSON.stringify(r)), 200 === i.status ? JSON.parse(i.responseText) : {
                            errMsg: `${e}:fail`
                        }
                    }
                }
            },
            7821: (e, t, o) => {
                "use strict";
                const n = o(8446),
                    r = n.navigator.userAgent,
                    i = (e, t, o) => {
                        if (!/gameservice/.test(r)) return t;
                        const i = t.canvasId,
                            a = () => {
                                o({
                                    errMsg: `${e}:fail canvas not found`
                                })
                            };
                        if (!i) return void(/Sync$/.test(e) ? a() : setTimeout(a));
                        const {
                            x: s = 0,
                            y: c = 0,
                            width: d = i.width,
                            height: l = i.height,
                            destWidth: u = i.width,
                            destHeight: g = i.height,
                            fileType: p = "png"
                        } = t, f = n.document.createElement("canvas");
                        Object.setPrototypeOf(f, n.canvasProto), f.width = u, f.height = g;
                        const h = f.getContext("2d");
                        h && (Object.setPrototypeOf(h, n.canvas2dContextProto), h.drawImage(i, s, c, d, l, 0, 0, u, g));
                        const m = "jpg" === p ? "image/jpeg" : "image/png",
                            _ = isNaN(t.quality) ? 1 : t.quality > 0 && t.quality <= 1 ? t.quality : 1;
                        return {
                            dataURL: f.toDataURL(m, _).replace(/^data:image\/(jpg|png);base64,/, ""),
                            fileType: p
                        }
                    },
                    a = {
                        canvasToTempFilePath: i,
                        canvasToTempFilePathSync: i
                    };
                e.exports = a
            },
            1026: (e, t, o) => {
                "use strict";
                const n = o(8446);
                e.exports = {
                    modifyComponentData: (e, t, o) => {
                        n.WAServiceGlobal.__virtualDOM__.getNodeById(e, parseInt(o)).setData(t)
                    }
                }
            },
            4572: (e, t, o) => {
                "use strict";
                const n = o(6659);
                class r extends n.EventEmitter {
                    constructor() {
                        super(), this.instanceScopeListeners = new Set, this.instanceScope = () => ({
                            on: (e, t) => (this.on(e, t), this.instanceScopeListeners.add({
                                event: e,
                                fn: t
                            }), this),
                            once: (e, t) => (this.once(e, t), this.instanceScopeListeners.add({
                                event: e,
                                fn: t
                            }), this),
                            off: this.off.bind(this)
                        }), this.initAutoClean()
                    }
                    initAutoClean() {
                        this.on("RESET_INSTANCE", (() => {
                            for (const {
                                    event: e,
                                    fn: t
                                }
                                of this.instanceScopeListeners) this.off(e, t);
                            this.instanceScopeListeners.clear()
                        }))
                    }
                }
                e.exports = new r
            },
            2238: (e, t, o) => {
                "use strict";
                const n = o(7799),
                    r = o(8446),
                    i = (e, t) => {
                        const o = r.document.getElementById("myCanvas"),
                            n = new r.Touch({
                                identifier: 1,
                                target: o,
                                clientX: e,
                                clientY: t,
                                pageX: e,
                                pageY: t
                            }),
                            i = new r.TouchEvent("touchstart", {
                                bubbles: !0,
                                touches: [n],
                                targetTouches: [n],
                                changedTouches: [n]
                            });
                        r.canvasProto.dispatchEvent.call(o, i)
                    },
                    a = (e, t) => {
                        const o = r.document.getElementById("myCanvas"),
                            n = new r.Touch({
                                identifier: 1,
                                target: o,
                                clientX: e,
                                clientY: t,
                                pageX: e,
                                pageY: t
                            }),
                            i = new r.TouchEvent("touchend", {
                                bubbles: !0,
                                changedTouches: [n]
                            });
                        r.canvasProto.dispatchEvent.call(o, i)
                    },
                    s = (e, t) => {
                        const o = r.document.getElementById("myCanvas"),
                            n = new r.Touch({
                                identifier: 1,
                                target: o,
                                clientX: e,
                                clientY: t,
                                pageX: e,
                                pageY: t
                            }),
                            i = new r.TouchEvent("touchmove", {
                                bubbles: !0,
                                touches: [n],
                                targetTouches: [n],
                                changedTouches: [n]
                            });
                        r.canvasProto.dispatchEvent.call(o, i)
                    };
                let c = !1,
                    d = !0;
                const l = e => {
                        c && d && (d = !1, setTimeout((() => {
                            d = !0
                        }), 250), r.WeixinJSBridge.invoke("private_ideplugin_excute_command", {
                            pluginId: "inspector_v1_game",
                            command: "INSPECT_MOVE",
                            data: {
                                x: e.pageX,
                                y: e.pageY
                            }
                        }))
                    },
                    u = e => {
                        c && r.WeixinJSBridge.invoke("private_ideplugin_excute_command", {
                            pluginId: "inspector_v1_game",
                            command: "INSPECT_RESULT",
                            data: {
                                x: e.pageX,
                                y: e.pageY
                            }
                        })
                    };
                e.exports = {
                    init: () => {
                        n.registerCallback((async e => {
                            const {
                                command: t,
                                data: o
                            } = e;
                            let d;
                            switch (t) {
                                case "Driver.game.dumpUI":
                                    d = (() => {
                                        let e = {};
                                        try {
                                            e = window.__monkeyInject.engine.dumpUI()
                                        } catch (e) {
                                            return {
                                                status: 17,
                                                value: {
                                                    message: e.toString()
                                                }
                                            }
                                        }
                                        return {
                                            status: 0,
                                            value: e
                                        }
                                    })();
                                    break;
                                case "Driver.game.tap":
                                    d = (e => (i(e.x, e.y), a(e.x, e.y), {
                                        status: 0
                                    }))(o.data);
                                    break;
                                case "Driver.game.swipe":
                                    d = await (e => {
                                        const {
                                            startX: t = 0,
                                            startY: o = 0,
                                            endX: n = 0,
                                            endY: r = 0,
                                            duration: c = 0
                                        } = e;
                                        i(t, o);
                                        let d = Math.floor(c / 20);
                                        d <= 0 && (d = 1);
                                        const l = (n - t) / d,
                                            u = (r - o) / d;
                                        return new Promise((e => {
                                            const i = function(c) {
                                                s(parseInt(t + c * l, 10), parseInt(o + c * u, 10)), c < d ? setTimeout((() => {
                                                    i(c + 1)
                                                }), 20) : (a(n, r), e({
                                                    status: 0
                                                }))
                                            };
                                            i(0)
                                        }))
                                    })(o.data);
                                    break;
                                case "Driver.game.touchstart":
                                    d = await (e => (i(e.x, e.y), {
                                        status: 0
                                    }))(o.data);
                                    break;
                                case "Driver.game.touchend":
                                    d = await (e => (a(e.x, e.y), {
                                        status: 0
                                    }))(o.data);
                                    break;
                                case "Driver.game.touchmove":
                                    d = await (e => (s(e.x, e.y), {
                                        status: 0
                                    }))(o.data);
                                    break;
                                case "Driver.game.setInspectMode":
                                    d = (e => (c = e.inspected, c ? (r.document.addEventListener("mousemove", l), r.document.addEventListener("mouseup", u)) : (r.document.removeEventListener("mousemove", l), r.document.removeEventListener("mouseup", u)), {
                                        status: 0
                                    }))(o.data);
                                    break;
                                default:
                                    return
                            }
                            n.send({
                                command: `${t}.callback`,
                                data: {
                                    callbackID: o.callbackID,
                                    res: d
                                }
                            })
                        }))
                    }
                }
            },
            8446: e => {
                "use strict";
                e.exports = window.__global
            },
            4510: (e, t, o) => {
                "use strict";
                const n = o(8446),
                    r = o(7799);
                e.exports = function() {
                    if (["Caches", "screen", "performance ", "getComputedStyle", "openDatabase", "btoa", "Image"].forEach((e => {
                            delete window[e]
                        })), window.chrome = void 0, "complete" === n.document.readyState) n.history.replaceState({}, n.document.title || "", `${location.href}?load`), n.alert("MAINFRAME_LOADED");
                    else {
                        const e = () => {
                            n.history.replaceState({}, n.document.title || "", `${location.href}?load`), n.alert("MAINFRAME_LOADED"), n.removeEventListener("load", e)
                        };
                        n.addEventListener("load", e)
                    }
                    let e = !1;
                    const t = WebAssembly.Memory;

                    function o() {
                        e || (e = !0, r.send({
                            command: "PAGE_EXIST_WASM"
                        }))
                    }
                    WebAssembly.Memory = function(...e) {
                        return o(), new t(...e)
                    }, WebAssembly.Memory.prototype = t.prototype;
                    const i = WebAssembly.Instance;
                    WebAssembly.Instance = function(...e) {
                        return o(), new i(...e)
                    }, WebAssembly.Instance.prototype = i.prototype
                }
            },
            3957: (e, t, o) => {
                "use strict";
                const n = o(8446);
                e.exports = {
                    sync: (e, t, o, r) => {
                        const i = {
                                args: t,
                                syncTimeout: o,
                                syncTimeoutMsg: r
                            },
                            a = new n.XMLHttpRequest;
                        if (a.open("POST", `/jsbridge/${e}?t=${Date.now()}`, !1), a.send(JSON.stringify(i)), 200 === a.status) return JSON.parse(a.responseText)
                    }
                }
            },
            7799: (e, t, o) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setAppserviceReady = t.removeCallback = t.registerCallback = t.send = void 0;
                const n = o(8446),
                    r = n.navigator.userAgent,
                    i = o(8422);
                let a, s = !1,
                    c = !1;
                const d = () => {
                        if (a) return a;
                        let e = "APPSERVICE";
                        return /widgetservice/.test(r) ? e = "WIDGETSERVICE" : /gameservice/.test(r) ? e = "GAMESERVICE" : /ibservice/.test(r) && (e = "IBSERVICE"), a = new i(e), /gameservice/.test(r) && a.registerCallback((e => {
                            const {
                                command: t,
                                data: o
                            } = e;
                            if ("SET_CANVAS" === t) {
                                const e = n.document.getElementById("myCanvas");
                                e.setAttribute("width", o.width), e.setAttribute("height", o.height), e.setAttribute("style", o.style)
                            }
                        })), a
                    },
                    l = new Set;
                let u = [];
                const g = e => {
                        l.forEach((t => {
                            try {
                                t(e)
                            } catch (e) {}
                        }))
                    },
                    p = e => {
                        if (c) g(e);
                        else {
                            const {
                                command: t
                            } = e;
                            switch (t) {
                                case "APPSERVICE_INVOKE_EMITTER":
                                case "APPSERVICE_ON_EVENT":
                                case "WEBVIEW_PUBLISH":
                                    u.push(e);
                                    break;
                                default:
                                    g(e)
                            }
                        }
                    };

                function f(e) {
                    d().send(e)
                }
                t.send = f, t.registerCallback = function(e) {
                    if (l.add(e), !s) {
                        d().registerCallback(p), s = !0
                    }
                }, t.removeCallback = function(e) {
                    if (l.delete(e), !s) {
                        d().registerCallback(p), s = !0
                    }
                }, t.setAppserviceReady = function(e, t) {
                    if (c === e) return;
                    c = e, d()._parseJson = t, e && (u.forEach((e => g(e))), u = [])
                }, window.parent === window && (window.__global.messager = {
                    send: f
                })
            },
            7419: (e, t, o) => {
                "use strict";
                const n = o(4534),
                    r = o(6202),
                    {
                        checkUrl: i
                    } = r,
                    {
                        urlCheckErrReason: a
                    } = n,
                    s = {
                        downloadFile: function(e, t, o) {
                            return !!i(t.url, "downloadFile") || (o({
                                errMsg: `${e}:fail ${a}`
                            }), !1)
                        },
                        uploadFile: function(e, t, o) {
                            return !!i(t.url, "uploadFile") || (o({
                                errMsg: `${e}:fail ${a}`
                            }), !1)
                        },
                        createUploadTask: function(e, t, o) {
                            return !(!t.__skipDomainCheck__ && !i(t.url, "uploadFile")) || (o({
                                errMsg: `${e}:fail ${a}`
                            }), !1)
                        },
                        createDownloadTask: function(e, t, o) {
                            return !(!t.__skipDomainCheck__ && !i(t.url, "downloadFile")) || (o({
                                errMsg: `${e}:fail ${a}`
                            }), !1)
                        },
                        authorize: function(e, t, o) {
                            return "scope.userInfo" === t.scope && (console.group(`${new Date} 接口调整`), console.error('wx.authorize({scope: "scope.userInfo"}) 不会出现授权弹窗，请使用 <button open-type="getUserInfo />\n参考文档: https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1650183953&docid=0000a26e1aca6012e896a517556c01'), console.groupEnd()), !0
                        }
                    };
                e.exports = s
            },
            4249: (e, t, o) => {
                "use strict";
                const n = o(8446),
                    r = o(7799),
                    i = -1 !== n.navigator.userAgent.indexOf("game"),
                    a = (e, t) => {
                        r.send({
                            command: "SYSTEM",
                            data: {
                                api: e,
                                data: t
                            }
                        })
                    };
                r.registerCallback((e => {
                    const {
                        command: t,
                        data: o
                    } = e;
                    "SYSTEM_CALLBACK" === t && function(e, t) {
                        switch (e) {
                            case "showSystemInfo": {
                                const e = t.memory,
                                    o = t.restartInfo,
                                    n = o.restartTimes;
                                console.group(`${new Date} 工具系统信息`), console.info(`${o.beginTime} 启动工具，执行编译 ${n} 次， 当前内存占用 ${e.toFixed(2)}m`), console.table(t.info), console.groupEnd();
                                break
                            }
                            case "checkProxy":
                                console.group(`${new Date} 代理信息`), console.table(t), console.groupEnd();
                                break;
                            case "showDecryptedInfo":
                                console.group(`${new Date} 加解密信息`), console.table(t), console.groupEnd();
                                break;
                            case "showMyOpenId":
                                console.group(`${new Date} openId`), console.log(t.openid), console.groupEnd();
                                break;
                            case "getMessageTunnelInfo":
                                console.group(`${new Date} Message Tunnel Info`), console.log(t), console.groupEnd();
                                break;
                            case "originalPositionFor":
                                console.group(`${new Date} Origin Position`), t.error ? console.error(t.error) : console.log(t.origin), t.codeFrame && console.log(t.codeFrame), console.groupEnd();
                                break;
                            case "setSourceMapContent":
                                console.group(`${new Date} setSourceMapContent`), console.log(t), console.groupEnd();
                                break;
                            case "checkUpdateWechatDevtools":
                                if (console.group(`${new Date} 检查版本更新`), t) {
                                    const {
                                        stringVersion: e,
                                        fromVersion: o,
                                        packType: n,
                                        silence: r
                                    } = t, i = {
                                        0: "安装包",
                                        1: "大代码包",
                                        2: "小代码包"
                                    };
                                    console.log("需要从", o, i[n], r ? "静默" : "", "更新到", e), console.log(t)
                                } else console.error("开发者工具没有灰度计划");
                                console.groupEnd();
                                break;
                            case "getDebuggerVendor":
                                console.group(`${new Date} 拉取调试基础库结果`), t ? console.log("拉取调试基础库成功，请在基础库列表中选择develop") : console.warn("未能拉取到调试基础库，请稍后再试"), console.groupEnd();
                                break;
                            default:
                                ;
                        }
                    }(o.api, o.data)
                }));
                const s = function(e) {
                        if ("string" != typeof e) return console.log("param should be string");
                        console.log("checking..."), a("checkProxy", e)
                    },
                    c = () => {
                        a("cleanAppCache"), console.warn("应用缓存已清理完成，建议重新启动")
                    },
                    d = () => {
                        const e = {};
                        for (const t in window.securityDetails)
                            if (0 !== t.indexOf(`http://${__wxConfig.apphash}`)) {
                                const o = window.securityDetails[t];
                                delete o.id, delete o.command, delete o.isReady, delete o.url, e[t] = o
                            } console.table(e)
                    },
                    l = () => {
                        console.table([{
                            fun: "build",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "build()",
                            description: "build / reload"
                        }, {
                            fun: "preview",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "preview()",
                            description: "preview with QR code"
                        }, {
                            fun: "upload",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "upload()",
                            description: "upload the app"
                        }, {
                            fun: "showDebugInfo",
                            "arg[0]": "type -- String || Array; publish on subscribe invoke GetMsg",
                            "arg[1]": "eventName -- String || Array;",
                            example: 'showDebugInfo() showDebugInfo("publish") showDebugInfo(["publish", "invoke"], "onAppRoute")',
                            description: "open tools logs"
                        }, {
                            fun: "closeDebug"
                        }, {
                            fun: "showDebugInfoTable"
                        }, {
                            fun: "openToolsLog",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openToolsLog()",
                            description: "open log folder"
                        }, {
                            fun: "openPlugin",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openPlugin()",
                            description: "open plugin folder"
                        }, {
                            fun: "openVendor",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openVendor()",
                            description: "open vendor folder"
                        }, {
                            fun: "openMiniapp",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openMiniapp()",
                            description: "open miniapp folder"
                        }, {
                            fun: "openMiniappIpa",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openMiniappIpa()",
                            description: "open miniapp Ipa folder"
                        }, {
                            fun: "openMiniappBuilder",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openMiniappBuilder()",
                            description: "open miniapp builder folder"
                        }, {
                            fun: "openCrashDir",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openCrashDir()",
                            description: "open crash folder"
                        }, {
                            fun: "openCache",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openCache()",
                            description: "open Cache folder"
                        }, {
                            fun: "openEngine",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openEngine()",
                            description: "open engine folder"
                        }, {
                            fun: "openEditorCache",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "openEditorCache()",
                            description: "open editor cache folder"
                        }, {
                            fun: "showRequestInfo",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "showRequestInfo()",
                            description: "show request info"
                        }, {
                            fun: "showSystemInfo",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "showSystemInfo()",
                            description: "show tools info"
                        }, {
                            fun: "showMyOpenId",
                            "arg[0]": "",
                            "arg[1]": "",
                            example: "showMyOpenId()",
                            description: "show openid"
                        }, {
                            fun: "checkProxy",
                            "arg[0]": "type -- String; url",
                            example: 'checkProxy("http://www.qq.com")',
                            description: "checkProxy of the input url"
                        }, {
                            fun: "showDecryptedInfo",
                            "arg[0]": "",
                            example: "showDecryptedInfo()",
                            description: "show API decrypted info"
                        }, {
                            fun: "cleanAppCache",
                            "arg[0]": "",
                            example: "cleanAppCache()",
                            description: "clean application cache"
                        }, {
                            fun: "cleanEngineWASM",
                            "arg[0]": "",
                            example: "cleanEngineWASM()",
                            description: "clean engine wasm cache"
                        }, {
                            fun: "setSourceMapContent",
                            "arg[0]": "the source map content",
                            example: "setSourceMapContent({})",
                            description: "set the source map for analyze"
                        }, {
                            fun: "originalPositionFor",
                            "arg[0]": "line",
                            "arg[1]": "column",
                            example: "originalPositionFor(1, 2)",
                            description: "get the origin source position"
                        }, {
                            fun: "getDebuggerVendor",
                            example: "getDebuggerVendor()",
                            description: "get the debugger verion of publib"
                        }, {
                            fun: "startProfiling",
                            "arg[0]": "categories",
                            example: "startProfiling('startup')",
                            description: "start profiling"
                        }, {
                            fun: "stopProfiling",
                            example: "stopProfiling",
                            description: "stop profiling and show result in performance panel"
                        }])
                    };
                e.exports = e => {
                    e.getMessageTunnelInfo = function() {
                        a("getMessageTunnelInfo")
                    }, Object.defineProperty(e, "help", {
                        get: () => l
                    }), Object.defineProperty(e, "showRequestInfo", {
                        get: () => d
                    }), Object.defineProperty(e, "build", {
                        get: () => () => a("build")
                    }), Object.defineProperty(e, "preview", {
                        get: () => () => a("preview")
                    }), Object.defineProperty(e, "upload", {
                        get: () => () => a("upload")
                    }), Object.defineProperty(e, "openToolsLog", {
                        get: () => () => a("openToolsLog")
                    }), Object.defineProperty(e, "openInspect", {
                        get: () => () => a("openInspect")
                    }), Object.defineProperty(e, "openGameEngineDebugMode", {
                        get: () => () => a("openGameEngineDebugMode")
                    }), Object.defineProperty(e, "closeGameEngineDebugMode", {
                        get: () => () => a("closeGameEngineDebugMode")
                    }), Object.defineProperty(e, "openGameEngineAssetsInspect", {
                        get: () => () => a("openGameEngineAssetsInspect")
                    }), Object.defineProperty(e, "openUserDataPath", {
                        get: () => () => a("openUserDataPath")
                    }), Object.defineProperty(e, "openPlugin", {
                        get: () => () => a("openPlugin")
                    }), Object.defineProperty(e, "openVendor", {
                        get: () => () => a("openVendor")
                    }), Object.defineProperty(e, "openMiniapp", {
                        get: () => () => a("openMiniapp")
                    }), Object.defineProperty(e, "openMiniappBuilder", {
                        get: () => () => a("openMiniappBuilder")
                    }), Object.defineProperty(e, "openMiniappIpa", {
                        get: () => () => a("openMiniappIpa")
                    }), Object.defineProperty(e, "openCrashDir", {
                        get: () => () => a("openCrashDir")
                    }), Object.defineProperty(e, "openCache", {
                        get: () => () => a("openCache")
                    }), Object.defineProperty(e, "openEngine", {
                        get: () => () => a("openEngine")
                    }), Object.defineProperty(e, "cleanEngineWASM", {
                        get: () => () => a("cleanEngineWASM")
                    }), Object.defineProperty(e, "openEditorCache", {
                        get: () => () => a("openEditorCache")
                    }), Object.defineProperty(e, "showSystemInfo", {
                        get: () => () => a("showSystemInfo")
                    }), Object.defineProperty(e, "showMyOpenId", {
                        get: () => () => a("showMyOpenId")
                    }), Object.defineProperty(e, "checkProxy", {
                        get: () => s
                    }), Object.defineProperty(e, "syncMessage", {
                        get: () => () => a("syncMessage")
                    }), Object.defineProperty(e, "showDecryptedInfo", {
                        get: () => () => a("showDecryptedInfo")
                    }), Object.defineProperty(e, "cleanAppCache", {
                        get: () => c
                    }), Object.defineProperty(e, "restoreLocalData", {
                        get: () => () => a("restoreLocalData")
                    }), Object.defineProperty(e, "setSourceMapContent", {
                        get: () => e => a("setSourceMapContent", e)
                    }), Object.defineProperty(e, "originalPositionFor", {
                        get: () => (e, t) => a("originalPositionFor", {
                            line: e,
                            column: t
                        })
                    }), Object.defineProperty(e, "checkUpdateWechatDevtools", {
                        get: () => e => {
                            a("checkUpdateWechatDevtools", e)
                        }
                    }), Object.defineProperty(e, "getDebuggerVendor", {
                        get: () => () => {
                            console.log("拉取调试基础库中..."), a("getDebuggerVendor")
                        }
                    }), Object.defineProperty(e, "startProfiling", {
                        get: () => e => {
                            a("startProfiling", e)
                        }
                    }), Object.defineProperty(e, "stopProfiling", {
                        get: () => () => a("stopProfiling")
                    }), i && (Object.defineProperty(e, "useStaticServer", {
                        get: () => e => a("useStaticServer", e)
                    }), Object.defineProperty(e, "saveJSCoreSnapshot", {
                        get: () => e => a("saveJSCoreSnapshot", e)
                    }))
                }
            },
            6202: (e, t, o) => {
                    "use strict";
                    const n = o(990),
                        r = o(4534),
                        i = o(8446);
                    let a = !1,
                        s = [];
                    window.showDebugInfo = (e, t) => {
                        const o = s.filter((o => {
                            const n = !e || (Array.isArray(e) ? e.includes(o.type) : o.type === e),
                                r = !t || (Array.isArray(t) ? t.includes(o.eventName) : o.eventName === t);
                            if (n && r) return o
                        }));
                        console.group("showDebugInfo"), o.forEach((e => {
                            console.group(`${e.timesmap} WeixinJSBridge ${e.type} ${e.eventName}`), console.debug.apply(window, e.data), console.groupEnd()
                        })), console.groupEnd(), a = !0
                    };
                    const c = () => (console.clear(), void(a = !1));
                    Object.defineProperty(window, "closeDebug", {
                        get: () => c
                    });
                    const d = () => {
                        console.table(s)
                    };
                    Object.defineProperty(window, "showDebugInfoTable", {
                        get: () => d
                    });

                    function l(e) {
                        const t = i.atob(e),
                            o = t.length,
                            n = new Uint8Array(o);
                        for (let e = 0; e < o; e++) n[e] = t.charCodeAt(e);
                        return n.buffer
                    }

                    function u(e, t = "`") {
                        return e ? "`" === t ? e.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$") : '"' === t ? e.replace(/\\/g, "\\\\").replace(/\r\n/g, "\n").replace(/\n/g, "\\n").replace(/"/g, '\\"') : "'" === t ? e.replace(/\\/g, "\\\\").replace(/\r\n/g, "\n").replace(/\n/g, "\\n").replace(/'/g, "\\'") : e : e
                    }
                    const g = e => {
                            const t = /^(?:http|ws)s?:\/\/((?:\d{1,3}\.){3}\d{1,3})(?::\d{1,5})?/i.exec(e);
                            if (t) {
                                const {
                                    localhostIp: e,
                                    networkMask: o
                                } = r.DevtoolsConfig;
                                if (!e || !o) return !1;
                                const n = t[1];
                                return e.split(".").map(((e, t) => e & o[t])).join(".") === n.split(".").map(((e, t) => e & o[t])).join(".")
                            }
                            return !1
                        },
                        p = /^(http|ws|udp)s?:\/\/[\w-.]+(:\d+)?/i;
                    let f = !0;
                    window.__disPlayURLCheckWarning = !0;
                    const h = e => {
                        const t = /^(?:http|ws)s?:\/\/((?:\d{1,3}\.){3}\d{1,3})(?::\d{1,5})?/i.exec(e);
                        if (t) {
                            return t[1] === r.DevtoolsConfig.localhostIp
                        }
                        return !1
                    };
                    e.exports = {
                            debugLog: (e, t) => {
                                a && (console.group(e), console.debug.apply(null, t), console.groupEnd())
                            },
                            debugInfo: e => {
                                a || (s.length > 100 && (s = []), s.push(e))
                            },
                            isDev: () => a,
                            base64ToArrayBuffer: l,
                            arrayBufferToBase64: function(e) {
                                let t = "";
                                const o = new Uint8Array(e),
                                    n = o.byteLength;
                                for (let e = 0; e < n; e++) t += String.fromCharCode(o[e]);
                                return i.btoa(t)
                            },
                            escapeQuot: u,
                            isKindOfArrayBuffer: function(e) {
                                if (!e) return !1;
                                if (e instanceof ArrayBuffer) return !0;
                                try {
                                    const t = Object.getPrototypeOf(e);
                                    return !(!t.hasOwnProperty("byteLength") || "[object ArrayBuffer]" !== Object.prototype.toString.call(t))
                                } catch (e) {
                                    return !1
                                }
                            },
                            isKindOfArray: function(e) {
                                if (!e) return !1;
                                if (e instanceof Array) return !0;
                                if (Array.isArray(e)) return !0;
                                try {
                                    const t = e.length;
                                    if ("number" != typeof t) return !1;
                                    for (let o = 0; o < t; o++)
                                        if (!(o in e)) return !1;
                                    return !0
                                } catch (e) {
                                    return !1
                                }
                            },
                            checkUrl: (e, t = "request") => {
                                    // jianjia: we can add here one check for the url, to see whether the url is tainted
                                    // console.log('jianjia hack in checkUrl');
                                    if (n.isTourist()) return f && (console.group(`${new Date} 无 AppID 关联`), console.warn("工具未检查合法域名，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"), console.groupEnd(), f = !1), !0;
                                    if (!r.DevtoolsConfig.urlCheck) return window.__disPlayURLCheckWarning && (console.group(`${new Date} 配置中关闭合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书检查`), console.warn("工具未校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书。"), console.groupEnd(), window.__disPlayURLCheckWarning = !1), !0;
                                    if (!e) return !1;
                                    if (/(\?|&)skip_domain_check=true(&|$)/.test(e)) return !0;
                                    if (["request", "downloadFile", "uploadFile", "socket", "udp"].includes(t)) {
                                        if (h(e)) return setTimeout((() => {
                                            console.error("Cannot send network request to localhost.")
                                        })), !1;
                                        if (g(e)) return !0
                                    }
                                    if (!(e = p.exec(e.toLowerCase()))) return !1;
                                    e = e[0];
                                    if (/^http:\/\/(tmp|usr|store)\/?$/gi.test(e)) return !0;
                                    try {
                                        const o = {
                                            downloadFile: r.NetworkConfig.download,
                                            uploadFile: r.NetworkConfig.upload,
                                            socket: r.NetworkConfig.socket,
                                            udp: r.NetworkConfig.udp
                                        } [t] || r.NetworkConfig.request;
                                        for (const n of o) {
                                            const o = p.exec(n.toLowerCase());
                                            if (o && o[0] === e) return !0;
                                            if ("socket" === t && r.DevtoolsConfig.setting.WebsocketSkipPortCheck) {
                                                if (new RegExp(`^${n}(:\\d+)?$`).test(e)) return !0
                                            }
                                        }
                                        const n = [];
                                        o.forEach((e => {
                                                n.push([e])
                                            })), console.group(`${new Date} ${t} 合法域名校验出错`), console.info("如若已在管理后台更新域名配置，请刷新项目配置后重新编译项目，操作路径：“详情-域名信息”"), console.error(` ${u(e,"`")} 不在以下 ${t} 合法域名列表中，请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`),console.table(n),console.groupEnd()}catch(e){return console.error(e),!1}return!1},isLocalhost:h,isInLAN:g,coverRes:e=>{if(null==e?void 0:e.__cover){for(const t in e.__cover)if("base64"===t&&(e[e.__cover[t]]=l(e.base64),delete e.base64),"base64Array"===t&&(e[e.__cover[t]]=e.base64Array.map((e=>l(e))),delete e.base64Array),"base64Entries"===t){const o=e.__cover[t]||[];for(const t of o)e[t.key]=l(t.base64);delete e.base64Entries}delete e.__cover}},coverResToOriginArgs:(e,t)=>{if(null==e?void 0:e.__toOrigin)for(const o in e.__toOrigin){const n=e.__toOrigin[o],r=t[n.argsName],i=e[o];if(i&&r&&"ArrayBuffer"===n.type){const t=new Uint8Array(r),n=new Uint8Array(i),a=t.length;for(let e=0;e<a;e++)t[e]=n[e];e[o]=r}}delete e.__toOrigin},evaluateRes:function(e){var t,o;if(!e.__codes)return;const n=e.__codes,r=window.__global.asLoader;let i=null;if(r){const e=r.frames.get(r.currentFrameId);i=null!==(o=null===(t=e.iframe.contentWindow.__global.asSubLoader)||void 0===t?void 0:t.activeAppDocument)&&void 0!==o?o:e.iframe.contentDocument}else i=window.document;for(let e=0,t=n.length;e<t;e++){const t=i.createElement("script");t.text=n[e],i.head.appendChild(t)}},calibration:()=>{try{const e=new i.XMLHttpRequest;e.responseType="text",e.open("GET",`
                                                $ {
                                                    location.protocol
                                                } //${window.location.host}/calibration/${Date.now()}`,!0),e.send()}catch(e){}},getQueryString:function(e){var t=new RegExp(`(^|&)${e}=([^&]*)(&|$)`,"i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null}}},990:(e,t,o)=>{"use strict";const n=o(4534),r=()=>{var e;return"touristappid"===n.DevtoolsConfig.appid||(null===(e=n.DevtoolsConfig.userInfo)||void 0===e?void 0:e.isTourist)},i={login:(e,t,o)=>{o({errMsg:"login:ok",code:"the code is a mock one"})},authorize:(e,t,o)=>{o({errMsg:"authorize:fail"})},operateWXData:(e,t,o)=>{if("webapi_getuserinfo"!==t.data.api_name)o({errMsg:"operateWXData:fail"});else{const e=function(){const e=n.DevtoolsConfig.userInfo||{};return delete n.DevtoolsConfig.userInfo,"touristappid"===n.DevtoolsConfig.appid||e.isTourist?e:{}}();o({errMsg:"operateWXData:ok",data:{data:JSON.stringify({nickName:e.nickName,avatarUrl:e.headUrl,gender:"male"===e.sex?1:2,province:e.province,city:e.city,country:e.country})}})}},openSetting:(e,t,o)=>{o({errMsg:"openSetting:ok",authSetting:[{scope:"scope.userInfo",state:1}]})}};e.exports={isTourist:r,fake:i,check:function(...e){const t=e[0];return!(!r()||!i.hasOwnProperty(t))&&(console.group(`${new Date} 游客模式`),console.warn(`请注意游客模式下，调用 wx.${t} 是受限的, API 的返回是工具的模拟返回`),console.groupEnd(),setTimeout((()=>{i[t].apply(null,e)})),!0)}}},6180:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSecuryDetailsByURL=t.parseURL=t.securityDetails=void 0;const n=o(990),r=o(4572),i=o(4534),a=o(8446);t.securityDetails=window.securityDetails={"https://servicewechat.com":{isSecuryTLS:!0,securityState:"secure",isReady:!0,isSecuryCertificate:!0,tls:"TLS 1.2"}};let s=1e4;function c(e){const t=a.document.createElement("a");return t.href=e,{protocol:t.protocol,origin:t.origin,fullPath:`${t.origin}/${t.pathname}`}}function d(e){const{protocol:o,origin:r,fullPath:a}=c(e);let d=t.securityDetails[r];return n.isTourist()||!i.DevtoolsConfig.urlCheck||"https:"!==o?(d={isReady:!0,isSecuryTLS:!0,isSecuryCertificate:!0},t.securityDetails[r]=d,d):d||(d={isReady:!1,id:s++,tls:"",isSecuryTLS:!1,securityState:"",isSecuryCertificate:!1,protocol:o,origin:r,fullPath:a,url:e},t.securityDetails[r]=d,d)}t.parseURL=c,window.setSecurityDetails=function(e,o){const{origin:n}=c(e);o=JSON.parse(o);let i=t.securityDetails[n];i||(i=t.securityDetails[n]={});const{protocol:a,securityState:s}=o;let d=!1;a&&(d=parseFloat(a.replace("TLS ",""))>=1.2),i.isSecuryTLS=d,i.tls=a,i.securityState=s,i.isSecuryCertificate="insecure"!==s,i.isReady=!0,i.remoteAddress=o.remoteAddress,i.statusCode=o.statusCode;const l=i.id;r.emit(`TLS_CHECK_READY_${l}`,t.securityDetails[n])},t.getSecuryDetailsByURL=d,t.default={securityDetails:t.securityDetails,getSecuryDetailsByURL:d,parseURL:c}},8422:e=>{"use strict";const t=window.navigator||window.__global.navigator,o=window.WebSocket||window.__global.WebSocket,n=window.prompt||window.__global.prompt,r=t.userAgent.match(/port\/(\d*)/),i=r?parseInt(r[1]):9974,a=`ws://127.0.0.1:${i}`;window.__maxConnectTryTime=10;e.exports=class{constructor(e,t=!0){this._protocol=e,this._needToken=t,this._ws=null,this._msgQueue=[],this._callback=new Set,this._parseJson=null,this.tryTime=0,"complete"===document.readyState?setTimeout((()=>{this.connect()})):window.addEventListener("load",(()=>{this.connect()}))}connect(){if(!i)return;if(this.tryTime++,this.tryTime>=window.__maxConnectTryTime)return void console.error("当前应用通道断开且重连次数已满，请重新编译应用");let e=this._protocol;if(this._needToken){e=`${e}#${n("GET_MESSAGE_TOKEN")}#`}this._ws=new o(a,e),this._ws.onopen=()=>{const e=[].concat(this._msgQueue);this._msgQueue=[],e.forEach((e=>{this.send(e)}))},this._ws.onclose=()=>{this._ws=null,setTimeout((()=>{this.connect()}),150)},this._ws.onmessage=e=>{try{const t=this._parseJson?this._parseJson(e.data):JSON.parse(e.data);this._callback.forEach((e=>{try{e.call(this,t)}catch(e){console.error("onmessage",e)}}))}catch(e){console.error("onmessage",e)}}}send(e){this._ws&&this._ws.readyState===o.OPEN?this._ws.send(JSON.stringify(e)):this._msgQueue.push(e)}registerCallback(e){"function"==typeof e&&this._callback.add(e)}removeCallback(e){this._callback.delete(e)}}},4386:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timing=void 0;const o=5e3,n=new Set(["USERCODE_REQUIRED","PAGEFRAME_GENERATE_FUNC_READY"]),r=[];let i;class a{constructor(e){this.records=[],this.countdownRecords=new Set,this._commonRecordReported=!1,this._pendingReport=[],this.onMutation=e=>{if(this.countdownRecords.size>0)for(const t of e)if(t.addedNodes)for(const e of t.addedNodes)if(e instanceof HTMLScriptElement&&e.hasAttribute("countdownid")){const t=e.getAttribute("countdownid");let o;for(const e of this.countdownRecords)if(e.countdownid===t&&(e.received++,e.received>=e.expect)){this.addPoint(e.name,Date.now()),o=e;break}o&&this.countdownRecords.delete(o)}},this.report=()=>{clearTimeout(this._reportTimer),this._blocked?this._reportTimer=setTimeout(this.report,o):this._pendingReport.length&&(this._commonRecordReported||(this._pendingReport.unshift(...r),this._commonRecordReported=!0),i.send({command:"TIMING_REPORT",data:this._pendingReport,common:this._commonMsg}),this._pendingReport=[],this._reportTimer=setTimeout(this.report,o))},this.observer=new e.MutationObserver(this.onMutation),this.observer.observe(e.document.head,{childList:!0}),this._blocked=e.blocked,this.init()}static setMessager(e){i=e}init(){setTimeout(this.report,o)}setBlocked(e){this._blocked=e,e||this.report()}addCost(e,t,o,n){const r={type:"cost",name:e,start:t,end:o,cost:o-t,opt:n};this.records.push(r),this._pendingReport.push(r)}addPoint(e,t=Date.now()){const o={type:"point",name:e,value:t};this.records.push(o),this._pendingReport.push(o),n.has(e)&&this.report()}static addCommonPoint(e,t=Date.now()){r.push({type:"point",name:e,value:t})}prepareScriptCountdownReport(e,t,o){this.countdownRecords.add({name:e,countdownid:t,expect:o,received:0})}setCommonMessage(e){this._commonMsg=e}}t.Timing=a,window.__global.Timing=a}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}(()=>{"use strict";o(1981);const e=o(4386),t=o(7414),n=o(4534),r=o(5082),i=o(4712),a=o(6391),s=o(1227),c=o(8610),d=o(2561),l=o(4510),u=o(8446),g=o(2238),p=o(4249),f=o(7799),h=o(6202);e.Timing.setMessager(f),location.pathname.endsWith("mainframe")||(window.__global.timing=new e.Timing({document,MutationObserver:window.MutationObserver||window.__global.MutationObserver})),p(window);const m=u.navigator.userAgent;-1!==m.indexOf("game")?g.init():l();-1!==m.indexOf("skyline")&&t.initSkyline(),window.__global.getNewWeixinJSBridge=(e,t)=>{const o={},n=()=>{const{invoke:e}=i(o),{publish:t}=s(o),{publishSync:n}=c(o),{subscribe:l,triggerSubscribeEvent:u}=d(),{on:g,triggerOnEvent:p}=r(),{beforeinvoke:f,afterinvoke:h}=a(o);return{invoke:e,publish:t,subscribe:l,on:g,publishSync:n,beforeinvoke:f,afterinvoke:h,get __triggerOnEvent(){return p},get __triggerSubscribeEvent(){return u},__unblock:()=>{},__setCommonPayload(e,t){o[e]=t}}};if(t){let e,t=[];const r=(o,...n)=>{e?e[o].apply(e,n):t.push({method:o,args:n})};let i=!1;return{invoke:r.bind(null,"invoke"),publish:r.bind(null,"publish"),subscribe:r.bind(null,"subscribe"),on:r.bind(null,"on"),publishSync:r.bind(null,"publishSync"),beforeinvoke:r.bind(null,"beforeinvoke"),afterinvoke:r.bind(null,"afterinvoke"),__triggerOnEvent:r.bind(null,"__triggerOnEvent"),__triggerSubscribeEvent:r.bind(null,"__triggerSubscribeEvent"),__unblock:()=>{if(!i){i=!0,e=n();for(const{method:o,args:n}of t)try{e[o].apply(null,n)}catch(e){console.error(e)}t=[]}},__setCommonPayload(e,t){o[e]=t}}}return n()},window.WeixinJSBridge=window.__global.WeixinJSBridge=window.__global.getNewWeixinJSBridge("global"),window.__global.WeixinJSBridgeMap={__globalBridge:window.WeixinJSBridge};n.DevtoolsConfig.online&&n.DevtoolsConfig.autoTest&&setInterval((()=>{console.clear()}),6e5),h.calibration(),e.Timing.addCommonPoint("ASDEBUG_LOADED")})()})();
                                                //# sourceURL=ide:///extensions/appservice/index.js