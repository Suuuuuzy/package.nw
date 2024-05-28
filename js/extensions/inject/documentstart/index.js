(() => {
	var e = {
			4796: (e, t) => {
				"use strict";
				t.byteLength = function(e) {
					var t = l(e),
						n = t[0],
						r = t[1];
					return 3 * (n + r) / 4 - r
				}, t.toByteArray = function(e) {
					var t, n, o = l(e),
						s = o[0],
						a = o[1],
						c = new i(function(e, t, n) {
							return 3 * (t + n) / 4 - n
						}(0, s, a)),
						u = 0,
						d = a > 0 ? s - 4 : s;
					for (n = 0; n < d; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
					2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, c[u++] = 255 & t);
					1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t);
					return c
				}, t.fromByteArray = function(e) {
					for (var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, l = r - i; a < l; a += s) o.push(c(e, a, a + s > l ? l : a + s));
					1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
					return o.join("")
				};
				for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) n[s] = o[s], r[o.charCodeAt(s)] = s;

				function l(e) {
					var t = e.length;
					if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
					var n = e.indexOf("=");
					return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
				}

				function c(e, t, r) {
					for (var i, o, s = [], a = t; a < r; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
					return s.join("")
				}
				r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
			},
			7945: (e, t, n) => {
				"use strict";
				var r = n(4796),
					i = n(9710),
					o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
				/*!
				 * The buffer module from node.js, for the browser.
				 *
				 * @author   Feross Aboukhadijeh <https://feross.org>
				 * @license  MIT
				 */
				t.lW = l, t.h2 = 50;
				var s = 2147483647;

				function a(e) {
					if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"');
					var t = new Uint8Array(e);
					return Object.setPrototypeOf(t, l.prototype), t
				}

				function l(e, t, n) {
					if ("number" == typeof e) {
						if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
						return d(e)
					}
					return c(e, t, n)
				}

				function c(e, t, n) {
					if ("string" == typeof e) return function(e, t) {
						"string" == typeof t && "" !== t || (t = "utf8");
						if (!l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
						var n = 0 | g(e, t),
							r = a(n),
							i = r.write(e, t);
						i !== n && (r = r.slice(0, i));
						return r
					}(e, t);
					if (ArrayBuffer.isView(e)) return function(e) {
						if (W(e, Uint8Array)) {
							var t = new Uint8Array(e);
							return h(t.buffer, t.byteOffset, t.byteLength)
						}
						return f(e)
					}(e);
					if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
					if (W(e, ArrayBuffer) || e && W(e.buffer, ArrayBuffer)) return h(e, t, n);
					if ("undefined" != typeof SharedArrayBuffer && (W(e, SharedArrayBuffer) || e && W(e.buffer, SharedArrayBuffer))) return h(e, t, n);
					if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
					var r = e.valueOf && e.valueOf();
					if (null != r && r !== e) return l.from(r, t, n);
					var i = function(e) {
						if (l.isBuffer(e)) {
							var t = 0 | p(e.length),
								n = a(t);
							return 0 === n.length || e.copy(n, 0, 0, t), n
						}
						if (void 0 !== e.length) return "number" != typeof e.length || F(e.length) ? a(0) : f(e);
						if ("Buffer" === e.type && Array.isArray(e.data)) return f(e.data)
					}(e);
					if (i) return i;
					if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return l.from(e[Symbol.toPrimitive]("string"), t, n);
					throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
				}

				function u(e) {
					if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
					if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
				}

				function d(e) {
					return u(e), a(e < 0 ? 0 : 0 | p(e))
				}

				function f(e) {
					for (var t = e.length < 0 ? 0 : 0 | p(e.length), n = a(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
					return n
				}

				function h(e, t, n) {
					if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
					if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
					var r;
					return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, l.prototype), r
				}

				function p(e) {
					if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
					return 0 | e
				}

				function g(e, t) {
					if (l.isBuffer(e)) return e.length;
					if (ArrayBuffer.isView(e) || W(e, ArrayBuffer)) return e.byteLength;
					if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
					var n = e.length,
						r = arguments.length > 2 && !0 === arguments[2];
					if (!r && 0 === n) return 0;
					for (var i = !1;;) switch (t) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
							return U(e).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return j(e).length;
						default:
							if (i) return r ? -1 : U(e).length;
							t = ("" + t).toLowerCase(), i = !0
					}
				}

				function m(e, t, n) {
					var r = !1;
					if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (t >>>= 0)) return "";
					for (e || (e = "utf8");;) switch (e) {
						case "hex":
							return R(this, t, n);
						case "utf8":
						case "utf-8":
							return O(this, t, n);
						case "ascii":
							return S(this, t, n);
						case "latin1":
						case "binary":
							return M(this, t, n);
						case "base64":
							return A(this, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return N(this, t, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + e);
							e = (e + "").toLowerCase(), r = !0
					}
				}

				function v(e, t, n) {
					var r = e[t];
					e[t] = e[n], e[n] = r
				}

				function w(e, t, n, r, i) {
					if (0 === e.length) return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), F(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
						if (i) return -1;
						n = e.length - 1
					} else if (n < 0) {
						if (!i) return -1;
						n = 0
					}
					if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, i);
					if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, i);
					throw new TypeError("val must be string, number or Buffer")
				}

				function y(e, t, n, r, i) {
					var o, s = 1,
						a = e.length,
						l = t.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (e.length < 2 || t.length < 2) return -1;
						s = 2, a /= 2, l /= 2, n /= 2
					}

					function c(e, t) {
						return 1 === s ? e[t] : e.readUInt16BE(t * s)
					}
					if (i) {
						var u = -1;
						for (o = n; o < a; o++)
							if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
								if (-1 === u && (u = o), o - u + 1 === l) return u * s
							} else -1 !== u && (o -= o - u), u = -1
					} else
						for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
							for (var d = !0, f = 0; f < l; f++)
								if (c(e, o + f) !== c(t, f)) {
									d = !1;
									break
								} if (d) return o
						}
					return -1
				}

				function E(e, t, n, r) {
					n = Number(n) || 0;
					var i = e.length - n;
					r ? (r = Number(r)) > i && (r = i) : r = i;
					var o = t.length;
					r > o / 2 && (r = o / 2);
					for (var s = 0; s < r; ++s) {
						var a = parseInt(t.substr(2 * s, 2), 16);
						if (F(a)) return s;
						e[n + s] = a
					}
					return s
				}

				function _(e, t, n, r) {
					return $(U(t, e.length - n), e, n, r)
				}

				function b(e, t, n, r) {
					return $(function(e) {
						for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
						return t
					}(t), e, n, r)
				}

				function I(e, t, n, r) {
					return $(j(t), e, n, r)
				}

				function T(e, t, n, r) {
					return $(function(e, t) {
						for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = (n = e.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r);
						return o
					}(t, e.length - n), e, n, r)
				}

				function A(e, t, n) {
					return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
				}

				function O(e, t, n) {
					n = Math.min(e.length, n);
					for (var r = [], i = t; i < n;) {
						var o, s, a, l, c = e[i],
							u = null,
							d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
						if (i + d <= n) switch (d) {
							case 1:
								c < 128 && (u = c);
								break;
							case 2:
								128 == (192 & (o = e[i + 1])) && (l = (31 & c) << 6 | 63 & o) > 127 && (u = l);
								break;
							case 3:
								o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (l = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (u = l);
								break;
							case 4:
								o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (l = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
						}
						null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), i += d
					}
					return function(e) {
						var t = e.length;
						if (t <= C) return String.fromCharCode.apply(String, e);
						var n = "",
							r = 0;
						for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += C));
						return n
					}(r)
				}
				l.TYPED_ARRAY_SUPPORT = function() {
					try {
						var e = new Uint8Array(1),
							t = {
								foo: function() {
									return 42
								}
							};
						return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
					} catch (e) {
						return !1
					}
				}(), l.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(l.prototype, "parent", {
					enumerable: !0,
					get: function() {
						if (l.isBuffer(this)) return this.buffer
					}
				}), Object.defineProperty(l.prototype, "offset", {
					enumerable: !0,
					get: function() {
						if (l.isBuffer(this)) return this.byteOffset
					}
				}), l.poolSize = 8192, l.from = function(e, t, n) {
					return c(e, t, n)
				}, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array), l.alloc = function(e, t, n) {
					return function(e, t, n) {
						return u(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e)
					}(e, t, n)
				}, l.allocUnsafe = function(e) {
					return d(e)
				}, l.allocUnsafeSlow = function(e) {
					return d(e)
				}, l.isBuffer = function(e) {
					return null != e && !0 === e._isBuffer && e !== l.prototype
				}, l.compare = function(e, t) {
					if (W(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), W(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (e === t) return 0;
					for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
						if (e[i] !== t[i]) {
							n = e[i], r = t[i];
							break
						} return n < r ? -1 : r < n ? 1 : 0
				}, l.isEncoding = function(e) {
					switch (String(e).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, l.concat = function(e, t) {
					if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === e.length) return l.alloc(0);
					var n;
					if (void 0 === t)
						for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
					var r = l.allocUnsafe(t),
						i = 0;
					for (n = 0; n < e.length; ++n) {
						var o = e[n];
						if (W(o, Uint8Array)) i + o.length > r.length ? l.from(o).copy(r, i) : Uint8Array.prototype.set.call(r, o, i);
						else {
							if (!l.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
							o.copy(r, i)
						}
						i += o.length
					}
					return r
				}, l.byteLength = g, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
					var e = this.length;
					if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (var t = 0; t < e; t += 2) v(this, t, t + 1);
					return this
				}, l.prototype.swap32 = function() {
					var e = this.length;
					if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
					return this
				}, l.prototype.swap64 = function() {
					var e = this.length;
					if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4);
					return this
				}, l.prototype.toString = function() {
					var e = this.length;
					return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : m.apply(this, arguments)
				}, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(e) {
					if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
					return this === e || 0 === l.compare(this, e)
				}, l.prototype.inspect = function() {
					var e = "",
						n = t.h2;
					return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
				}, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(e, t, n, r, i) {
					if (W(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
					if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
					if (r >= i && t >= n) return 0;
					if (r >= i) return -1;
					if (t >= n) return 1;
					if (this === e) return 0;
					for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(r, i), u = e.slice(t, n), d = 0; d < a; ++d)
						if (c[d] !== u[d]) {
							o = c[d], s = u[d];
							break
						} return o < s ? -1 : s < o ? 1 : 0
				}, l.prototype.includes = function(e, t, n) {
					return -1 !== this.indexOf(e, t, n)
				}, l.prototype.indexOf = function(e, t, n) {
					return w(this, e, t, n, !0)
				}, l.prototype.lastIndexOf = function(e, t, n) {
					return w(this, e, t, n, !1)
				}, l.prototype.write = function(e, t, n, r) {
					if (void 0 === t) r = "utf8", n = this.length, t = 0;
					else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
					else {
						if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					var i = this.length - t;
					if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					for (var o = !1;;) switch (r) {
						case "hex":
							return E(this, e, t, n);
						case "utf8":
						case "utf-8":
							return _(this, e, t, n);
						case "ascii":
						case "latin1":
						case "binary":
							return b(this, e, t, n);
						case "base64":
							return I(this, e, t, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return T(this, e, t, n);
						default:
							if (o) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), o = !0
					}
				}, l.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
				var C = 4096;

				function S(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
					return r
				}

				function M(e, t, n) {
					var r = "";
					n = Math.min(e.length, n);
					for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
					return r
				}

				function R(e, t, n) {
					var r = e.length;
					(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
					for (var i = "", o = t; o < n; ++o) i += G[e[o]];
					return i
				}

				function N(e, t, n) {
					for (var r = e.slice(t, n), i = "", o = 0; o < r.length - 1; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
					return i
				}

				function L(e, t, n) {
					if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
					if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function k(e, t, n, r, i, o) {
					if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
					if (n + r > e.length) throw new RangeError("Index out of range")
				}

				function P(e, t, n, r, i, o) {
					if (n + r > e.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function x(e, t, n, r, o) {
					return t = +t, n >>>= 0, o || P(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
				}

				function D(e, t, n, r, o) {
					return t = +t, n >>>= 0, o || P(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
				}
				l.prototype.slice = function(e, t) {
					var n = this.length;
					(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
					var r = this.subarray(e, t);
					return Object.setPrototypeOf(r, l.prototype), r
				}, l.prototype.readUintLE = l.prototype.readUIntLE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || L(e, t, this.length);
					for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
					return r
				}, l.prototype.readUintBE = l.prototype.readUIntBE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || L(e, t, this.length);
					for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
					return r
				}, l.prototype.readUint8 = l.prototype.readUInt8 = function(e, t) {
					return e >>>= 0, t || L(e, 1, this.length), this[e]
				}, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e, t) {
					return e >>>= 0, t || L(e, 2, this.length), this[e] | this[e + 1] << 8
				}, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e, t) {
					return e >>>= 0, t || L(e, 2, this.length), this[e] << 8 | this[e + 1]
				}, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e, t) {
					return e >>>= 0, t || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
				}, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e, t) {
					return e >>>= 0, t || L(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
				}, l.prototype.readIntLE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || L(e, t, this.length);
					for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
					return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
				}, l.prototype.readIntBE = function(e, t, n) {
					e >>>= 0, t >>>= 0, n || L(e, t, this.length);
					for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
					return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
				}, l.prototype.readInt8 = function(e, t) {
					return e >>>= 0, t || L(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
				}, l.prototype.readInt16LE = function(e, t) {
					e >>>= 0, t || L(e, 2, this.length);
					var n = this[e] | this[e + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, l.prototype.readInt16BE = function(e, t) {
					e >>>= 0, t || L(e, 2, this.length);
					var n = this[e + 1] | this[e] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, l.prototype.readInt32LE = function(e, t) {
					return e >>>= 0, t || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
				}, l.prototype.readInt32BE = function(e, t) {
					return e >>>= 0, t || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
				}, l.prototype.readFloatLE = function(e, t) {
					return e >>>= 0, t || L(e, 4, this.length), i.read(this, e, !0, 23, 4)
				}, l.prototype.readFloatBE = function(e, t) {
					return e >>>= 0, t || L(e, 4, this.length), i.read(this, e, !1, 23, 4)
				}, l.prototype.readDoubleLE = function(e, t) {
					return e >>>= 0, t || L(e, 8, this.length), i.read(this, e, !0, 52, 8)
				}, l.prototype.readDoubleBE = function(e, t) {
					return e >>>= 0, t || L(e, 8, this.length), i.read(this, e, !1, 52, 8)
				}, l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e, t, n, r) {
					(e = +e, t >>>= 0, n >>>= 0, r) || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var i = 1,
						o = 0;
					for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
					return t + n
				}, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e, t, n, r) {
					(e = +e, t >>>= 0, n >>>= 0, r) || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
					var i = n - 1,
						o = 1;
					for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
					return t + n
				}, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
				}, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
				}, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
				}, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
				}, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
				}, l.prototype.writeIntLE = function(e, t, n, r) {
					if (e = +e, t >>>= 0, !r) {
						var i = Math.pow(2, 8 * n - 1);
						k(this, e, t, n, i - 1, -i)
					}
					var o = 0,
						s = 1,
						a = 0;
					for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
					return t + n
				}, l.prototype.writeIntBE = function(e, t, n, r) {
					if (e = +e, t >>>= 0, !r) {
						var i = Math.pow(2, 8 * n - 1);
						k(this, e, t, n, i - 1, -i)
					}
					var o = n - 1,
						s = 1,
						a = 0;
					for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
					return t + n
				}, l.prototype.writeInt8 = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
				}, l.prototype.writeInt16LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
				}, l.prototype.writeInt16BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
				}, l.prototype.writeInt32LE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
				}, l.prototype.writeInt32BE = function(e, t, n) {
					return e = +e, t >>>= 0, n || k(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
				}, l.prototype.writeFloatLE = function(e, t, n) {
					return x(this, e, t, !0, n)
				}, l.prototype.writeFloatBE = function(e, t, n) {
					return x(this, e, t, !1, n)
				}, l.prototype.writeDoubleLE = function(e, t, n) {
					return D(this, e, t, !0, n)
				}, l.prototype.writeDoubleBE = function(e, t, n) {
					return D(this, e, t, !1, n)
				}, l.prototype.copy = function(e, t, n, r) {
					if (!l.isBuffer(e)) throw new TypeError("argument should be a Buffer");
					if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
					if (0 === e.length || 0 === this.length) return 0;
					if (t < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
					var i = r - n;
					return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
				}, l.prototype.fill = function(e, t, n, r) {
					if ("string" == typeof e) {
						if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
						if (1 === e.length) {
							var i = e.charCodeAt(0);
							("utf8" === r && i < 128 || "latin1" === r) && (e = i)
						}
					} else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
					if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
					if (n <= t) return this;
					var o;
					if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
						for (o = t; o < n; ++o) this[o] = e;
					else {
						var s = l.isBuffer(e) ? e : l.from(e, r),
							a = s.length;
						if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
						for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
					}
					return this
				};
				var B = /[^+/0-9A-Za-z-_]/g;

				function U(e, t) {
					var n;
					t = t || 1 / 0;
					for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
						if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
							if (!i) {
								if (n > 56319) {
									(t -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								if (s + 1 === r) {
									(t -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								i = n;
								continue
							}
							if (n < 56320) {
								(t -= 3) > -1 && o.push(239, 191, 189), i = n;
								continue
							}
							n = 65536 + (i - 55296 << 10 | n - 56320)
						} else i && (t -= 3) > -1 && o.push(239, 191, 189);
						if (i = null, n < 128) {
							if ((t -= 1) < 0) break;
							o.push(n)
						} else if (n < 2048) {
							if ((t -= 2) < 0) break;
							o.push(n >> 6 | 192, 63 & n | 128)
						} else if (n < 65536) {
							if ((t -= 3) < 0) break;
							o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if (!(n < 1114112)) throw new Error("Invalid code point");
							if ((t -= 4) < 0) break;
							o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return o
				}

				function j(e) {
					return r.toByteArray(function(e) {
						if ((e = (e = e.split("=")[0]).trim().replace(B, "")).length < 2) return "";
						for (; e.length % 4 != 0;) e += "=";
						return e
					}(e))
				}

				function $(e, t, n, r) {
					for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
					return i
				}

				function W(e, t) {
					return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
				}

				function F(e) {
					return e != e
				}
				var G = function() {
					for (var e = "0123456789abcdef", t = new Array(256), n = 0; n < 16; ++n)
						for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
					return t
				}()
			},
			9710: (e, t) => {
				/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
				t.read = function(e, t, n, r, i) {
					var o, s, a = 8 * i - r - 1,
						l = (1 << a) - 1,
						c = l >> 1,
						u = -7,
						d = n ? i - 1 : 0,
						f = n ? -1 : 1,
						h = e[t + d];
					for (d += f, o = h & (1 << -u) - 1, h >>= -u, u += a; u > 0; o = 256 * o + e[t + d], d += f, u -= 8);
					for (s = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; s = 256 * s + e[t + d], d += f, u -= 8);
					if (0 === o) o = 1 - c;
					else {
						if (o === l) return s ? NaN : 1 / 0 * (h ? -1 : 1);
						s += Math.pow(2, r), o -= c
					}
					return (h ? -1 : 1) * s * Math.pow(2, o - r)
				}, t.write = function(e, t, n, r, i, o) {
					var s, a, l, c = 8 * o - i - 1,
						u = (1 << c) - 1,
						d = u >> 1,
						f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						h = r ? 0 : o - 1,
						p = r ? 1 : -1,
						g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
					for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + d >= 1 ? f / l : f * Math.pow(2, 1 - d)) * l >= 2 && (s++, l /= 2), s + d >= u ? (a = 0, s = u) : s + d >= 1 ? (a = (t * l - 1) * Math.pow(2, i), s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + h] = 255 & a, h += p, a /= 256, i -= 8);
					for (s = s << i | a, c += i; c > 0; e[n + h] = 255 & s, h += p, s /= 256, c -= 8);
					e[n + h - p] |= 128 * g
				}
			},
			757: e => {
				"use strict";

				function t(e, t, n, r, i) {
					for (var o = i + 1; r <= i;) {
						var s = r + i >>> 1,
							a = e[s];
						(void 0 !== n ? n(a, t) : a - t) >= 0 ? (o = s, i = s - 1) : r = s + 1
					}
					return o
				}

				function n(e, t, n, r, i) {
					for (var o = i + 1; r <= i;) {
						var s = r + i >>> 1,
							a = e[s];
						(void 0 !== n ? n(a, t) : a - t) > 0 ? (o = s, i = s - 1) : r = s + 1
					}
					return o
				}

				function r(e, t, n, r, i) {
					for (var o = r - 1; r <= i;) {
						var s = r + i >>> 1,
							a = e[s];
						(void 0 !== n ? n(a, t) : a - t) < 0 ? (o = s, r = s + 1) : i = s - 1
					}
					return o
				}

				function i(e, t, n, r, i) {
					for (var o = r - 1; r <= i;) {
						var s = r + i >>> 1,
							a = e[s];
						(void 0 !== n ? n(a, t) : a - t) <= 0 ? (o = s, r = s + 1) : i = s - 1
					}
					return o
				}

				function o(e, t, n, r, i) {
					for (; r <= i;) {
						var o = r + i >>> 1,
							s = e[o],
							a = void 0 !== n ? n(s, t) : s - t;
						if (0 === a) return o;
						a <= 0 ? r = o + 1 : i = o - 1
					}
					return -1
				}

				function s(e, t, n, r, i, o) {
					return "function" == typeof n ? o(e, t, n, void 0 === r ? 0 : 0 | r, void 0 === i ? e.length - 1 : 0 | i) : o(e, t, void 0, void 0 === n ? 0 : 0 | n, void 0 === r ? e.length - 1 : 0 | r)
				}
				e.exports = {
					ge: function(e, n, r, i, o) {
						return s(e, n, r, i, o, t)
					},
					gt: function(e, t, r, i, o) {
						return s(e, t, r, i, o, n)
					},
					lt: function(e, t, n, i, o) {
						return s(e, t, n, i, o, r)
					},
					le: function(e, t, n, r, o) {
						return s(e, t, n, r, o, i)
					},
					eq: function(e, t, n, r, i) {
						return s(e, t, n, r, i, o)
					}
				}
			},
			2305: (e, t, n) => {
				"use strict";
				var r = n(9006);

				function i(e, t) {
					return e - t
				}

				function o(e, t) {
					var n = e.length,
						r = new Array(t - n),
						o = 0,
						s = 0;
					e.sort(i);
					for (var a = 0; a < t; ++a) e[o] === a ? o += 1 : r[s++] = a;
					return r
				}
				e.exports = function(e, t, n) {
					var i = r(e, t, n);
					return [o(i[0], e), o(i[1], t)]
				}
			},
			6964: (e, t, n) => {
				"use strict";
				var r = n(899),
					i = 1 << 28;
				e.exports = function(e, t, n) {
					for (var o = new Array(e), s = r.mallocInt32(e), a = r.mallocInt32(e), l = 0; l < e; ++l) s[l] = -1, o[l] = [], a[l] = i;
					var c = new Array(t),
						u = r.mallocInt32(t);
					for (l = 0; l < t; ++l) u[l] = -1, c[l] = [];
					var d = n.length;
					for (l = 0; l < d; ++l) {
						var f = n[l];
						o[f[0]].push(f[1]), c[f[1]].push(f[0])
					}
					var h = i;

					function p(e) {
						if (e < 0) return !0;
						for (var t = o[e], n = 0, r = t.length; n < r; ++n) {
							var l = t[n],
								c = u[l],
								d = h;
							if (c >= 0 && (d = a[c]), d === a[e] + 1 && p(c)) return s[e] = l, u[l] = e, !0
						}
						return a[e] = i, !1
					}
					var g = r.mallocInt32(e),
						m = 0;
					for (;;) {
						var v = 0;
						for (l = 0; l < e; ++l) s[l] < 0 ? (a[l] = 0, g[v++] = l) : a[l] = i;
						var w = 0;
						for (h = i; w < v;) {
							var y = g[w++],
								E = a[y];
							if (E < h)
								for (var _ = o[y], b = 0, I = _.length; b < I; ++b) {
									var T = _[b],
										A = u[T];
									A < 0 ? h === i && (h = E + 1) : a[A] === i && (a[A] = E + 1, g[v++] = A)
								}
						}
						if (h === i) break;
						for (l = 0; l < e; ++l) s[l] < 0 && p(l) && (m += 1)
					}
					v = 0;
					var O = new Array(m);
					for (l = 0; l < e; ++l) s[l] < 0 || (O[v++] = [l, s[l]]);
					return r.free(g), r.free(u), r.free(a), r.free(s), O
				}
			},
			9006: (e, t, n) => {
				"use strict";
				var r = n(899),
					i = (n(9149), n(6964));

				function o(e, t, n, r, i, o, s) {
					if (!(i[t] || r[t] >= 0))
						for (; t >= 0;) {
							i[t] = 1;
							for (var a = n[t], l = -1, c = 0, u = a.length; c < u; ++c) {
								var d = a[c];
								s[d] || (l = d)
							}
							if (l < 0) break;
							s[l] = 1, e.push(l), t = o[l]
						}
				}
				e.exports = function(e, t, n) {
					for (var s = i(e, t, n), a = new Array(e), l = r.mallocInt32(e), c = r.mallocInt32(e), u = r.mallocInt32(e), d = 0; d < e; ++d) a[d] = [], l[d] = -1, c[d] = 0, u[d] = 0;
					var f = new Array(t),
						h = r.mallocInt32(t),
						p = r.mallocInt32(t);
					for (d = 0; d < t; ++d) f[d] = [], h[d] = -1, p[d] = 0;
					d = 0;
					for (var g = s.length; d < g; ++d) {
						var m = s[d][0],
							v = s[d][1];
						l[m] = v, h[v] = m
					}
					for (d = 0, g = n.length; d < g; ++d) {
						var w = n[d];
						m = w[0], v = w[1];
						(l[m] !== v || c[m]++) && (a[m].push(v), f[v].push(m))
					}
					var y = [],
						E = [];
					for (d = 0; d < e; ++d) o(E, d, a, l, u, h, p);
					for (d = 0; d < t; ++d) o(y, d, f, h, p, l, u);
					for (d = 0; d < e; ++d) !u[d] && l[d] >= 0 && (p[l[d]] = u[d] = 1, y.push(d));
					return r.free(p), r.free(h), r.free(u), r.free(c), r.free(l), [y, E]
				}
			},
			8214: (e, t) => {
				"use strict";

				function n(e) {
					var t = 32;
					return (e &= -e) && t--, 65535 & e && (t -= 16), 16711935 & e && (t -= 8), 252645135 & e && (t -= 4), 858993459 & e && (t -= 2), 1431655765 & e && (t -= 1), t
				}
				t.INT_BITS = 32, t.INT_MAX = 2147483647, t.INT_MIN = -1 << 31, t.sign = function(e) {
					return (e > 0) - (e < 0)
				}, t.abs = function(e) {
					var t = e >> 31;
					return (e ^ t) - t
				}, t.min = function(e, t) {
					return t ^ (e ^ t) & -(e < t)
				}, t.max = function(e, t) {
					return e ^ (e ^ t) & -(e < t)
				}, t.isPow2 = function(e) {
					return !(e & e - 1 || !e)
				}, t.log2 = function(e) {
					var t, n;
					return t = (e > 65535) << 4, t |= n = ((e >>>= t) > 255) << 3, t |= n = ((e >>>= n) > 15) << 2, (t |= n = ((e >>>= n) > 3) << 1) | (e >>>= n) >> 1
				}, t.log10 = function(e) {
					return e >= 1e9 ? 9 : e >= 1e8 ? 8 : e >= 1e7 ? 7 : e >= 1e6 ? 6 : e >= 1e5 ? 5 : e >= 1e4 ? 4 : e >= 1e3 ? 3 : e >= 100 ? 2 : e >= 10 ? 1 : 0
				}, t.popCount = function(e) {
					return 16843009 * ((e = (858993459 & (e -= e >>> 1 & 1431655765)) + (e >>> 2 & 858993459)) + (e >>> 4) & 252645135) >>> 24
				}, t.countTrailingZeros = n, t.nextPow2 = function(e) {
					return e += 0 === e, --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, (e |= e >>> 16) + 1
				}, t.prevPow2 = function(e) {
					return e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, (e |= e >>> 16) - (e >>> 1)
				}, t.parity = function(e) {
					return e ^= e >>> 16, e ^= e >>> 8, e ^= e >>> 4, 27030 >>> (e &= 15) & 1
				};
				var r = new Array(256);
				! function(e) {
					for (var t = 0; t < 256; ++t) {
						var n = t,
							r = t,
							i = 7;
						for (n >>>= 1; n; n >>>= 1) r <<= 1, r |= 1 & n, --i;
						e[t] = r << i & 255
					}
				}(r), t.reverse = function(e) {
					return r[255 & e] << 24 | r[e >>> 8 & 255] << 16 | r[e >>> 16 & 255] << 8 | r[e >>> 24 & 255]
				}, t.interleave2 = function(e, t) {
					return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e &= 65535) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t &= 65535) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
				}, t.deinterleave2 = function(e, t) {
					return (e = 65535 & ((e = 16711935 & ((e = 252645135 & ((e = 858993459 & ((e = e >>> t & 1431655765) | e >>> 1)) | e >>> 2)) | e >>> 4)) | e >>> 16)) << 16 >> 16
				}, t.interleave3 = function(e, t, n) {
					return e = 1227133513 & ((e = 3272356035 & ((e = 251719695 & ((e = 4278190335 & ((e &= 1023) | e << 16)) | e << 8)) | e << 4)) | e << 2), (e |= (t = 1227133513 & ((t = 3272356035 & ((t = 251719695 & ((t = 4278190335 & ((t &= 1023) | t << 16)) | t << 8)) | t << 4)) | t << 2)) << 1) | (n = 1227133513 & ((n = 3272356035 & ((n = 251719695 & ((n = 4278190335 & ((n &= 1023) | n << 16)) | n << 8)) | n << 4)) | n << 2)) << 2
				}, t.deinterleave3 = function(e, t) {
					return (e = 1023 & ((e = 4278190335 & ((e = 251719695 & ((e = 3272356035 & ((e = e >>> t & 1227133513) | e >>> 2)) | e >>> 4)) | e >>> 8)) | e >>> 16)) << 22 >> 22
				}, t.nextCombination = function(e) {
					var t = e | e - 1;
					return t + 1 | (~t & -~t) - 1 >>> n(e) + 1
				}
			},
			190: (e, t, n) => {
				var r;
				! function(i, o) {
					var s, a, l, c, u, d, f, h, p, g, m, v, w, y, E, _, b, I, T = "sizzle" + 1 * new Date,
						A = i.document,
						O = 0,
						C = 0,
						S = fe(),
						M = fe(),
						R = fe(),
						N = fe(),
						L = function(e, t) {
							return e === t && (m = !0), 0
						},
						k = {}.hasOwnProperty,
						P = [],
						x = P.pop,
						D = P.push,
						B = P.push,
						U = P.slice,
						j = function(e, t) {
							for (var n = 0, r = e.length; n < r; n++)
								if (e[n] === t) return n;
							return -1
						},
						$ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
						W = "[\\x20\\t\\r\\n\\f]",
						F = `(?:\\\\[\\da-fA-F]{1,6}${W}?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+`,
						G = `\\[${W}*(${F})(?:${W}*([*^$|!~]?=)${W}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${F}))|)${W}*\\]`,
						H = `:(${F})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${G})*)|.*)\\)|)`,
						V = new RegExp(`${W}+`, "g"),
						q = new RegExp(`^${W}+|((?:^|[^\\\\])(?:\\\\.)*)${W}+$`, "g"),
						z = new RegExp(`^${W}*,${W}*`),
						K = new RegExp(`^${W}*([>+~]|${W})${W}*`),
						J = new RegExp(`${W}|>`),
						Y = new RegExp(H),
						Q = new RegExp(`^${F}$`),
						X = {
							ID: new RegExp(`^#(${F})`),
							CLASS: new RegExp(`^\\.(${F})`),
							TAG: new RegExp(`^(${F}|[*])`),
							ATTR: new RegExp(`^${G}`),
							PSEUDO: new RegExp(`^${H}`),
							CHILD: new RegExp(`^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${W}*(even|odd|(([+-]|)(\\d*)n|)${W}*(?:([+-]|)${W}*(\\d+)|))${W}*\\)|)`, "i"),
							bool: new RegExp(`^(?:${$})$`, "i"),
							needsContext: new RegExp(`^${W}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${W}*((?:-\\d)?\\d*)${W}*\\)|)(?=[^-]|$)`, "i")
						},
						Z = /HTML$/i,
						ee = /^(?:input|select|textarea|button)$/i,
						te = /^h\d$/i,
						ne = /^[^{]+\{\s*\[native \w/,
						re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
						ie = /[+~]/,
						oe = new RegExp(`\\\\[\\da-fA-F]{1,6}${W}?|\\\\([^\\r\\n\\f])`, "g"),
						se = function(e, t) {
							var n = `0x${e.slice(1)}` - 65536;
							return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
						},
						ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
						le = function(e, t) {
							return t ? "\0" === e ? "�" : `${e.slice(0,-1)}\\${e.charCodeAt(e.length-1).toString(16)} ` : `\\${e}`
						},
						ce = function() {
							v()
						},
						ue = Te((e => !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()), {
							dir: "parentNode",
							next: "legend"
						});
					try {
						B.apply(P = U.call(A.childNodes), A.childNodes), P[A.childNodes.length].nodeType
					} catch (e) {
						B = {
							apply: P.length ? function(e, t) {
								D.apply(e, U.call(t))
							} : function(e, t) {
								for (var n = e.length, r = 0; e[n++] = t[r++];);
								e.length = n - 1
							}
						}
					}

					function de(e, t, n, r) {
						var i, s, l, c, u, f, p, g = t && t.ownerDocument,
							m = t ? t.nodeType : 9;
						if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
						if (!r && (v(t), t = t || o, y)) {
							if (11 !== m && (u = re.exec(e)))
								if (i = u[1]) {
									if (9 === m) {
										if (!(l = t.getElementById(i))) return n;
										if (l.id === i) return n.push(l), n
									} else if (g && (l = g.getElementById(i)) && I(t, l) && l.id === i) return n.push(l), n
								} else {
									if (u[2]) return B.apply(n, t.getElementsByTagName(e)), n;
									if ((i = u[3]) && a.getElementsByClassName && t.getElementsByClassName) return B.apply(n, t.getElementsByClassName(i)), n
								} if (a.qsa && !N[`${e} `] && (!E || !E.test(e)) && (1 !== m || "object" !== t.nodeName.toLowerCase())) {
								if (p = e, g = t, 1 === m && (J.test(e) || K.test(e))) {
									for ((g = ie.test(e) && _e(t.parentNode) || t) === t && a.scope || ((c = t.getAttribute("id")) ? c = c.replace(ae, le) : t.setAttribute("id", c = T)), s = (f = d(e)).length; s--;) f[s] = `${c?`#${c}`:":scope"} ${Ie(f[s])}`;
									p = f.join(",")
								}
								try {
									return B.apply(n, g.querySelectorAll(p)), n
								} catch (t) {
									N(e, !0)
								} finally {
									c === T && t.removeAttribute("id")
								}
							}
						}
						return h(e.replace(q, "$1"), t, n, r)
					}

					function fe() {
						var e = [];
						return function t(n, r) {
							return e.push(`${n} `) > l.cacheLength && delete t[e.shift()], t[`${n} `] = r
						}
					}

					function he(e) {
						return e[T] = !0, e
					}

					function pe(e) {
						var t = o.createElement("fieldset");
						try {
							return !!e(t)
						} catch (e) {
							return !1
						} finally {
							t.parentNode && t.parentNode.removeChild(t), t = null
						}
					}

					function ge(e, t) {
						for (var n = e.split("|"), r = n.length; r--;) l.attrHandle[n[r]] = t
					}

					function me(e, t) {
						var n = t && e,
							r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
						if (r) return r;
						if (n)
							for (; n = n.nextSibling;)
								if (n === t) return -1;
						return e ? 1 : -1
					}

					function ve(e) {
						return function(t) {
							return "input" === t.nodeName.toLowerCase() && t.type === e
						}
					}

					function we(e) {
						return function(t) {
							var n = t.nodeName.toLowerCase();
							return ("input" === n || "button" === n) && t.type === e
						}
					}

					function ye(e) {
						return function(t) {
							return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ue(t) === e : t.disabled === e : "label" in t && t.disabled === e
						}
					}

					function Ee(e) {
						return he((t => (t = +t, he(((n, r) => {
							for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
						})))))
					}

					function _e(e) {
						return e && void 0 !== e.getElementsByTagName && e
					}
					for (s in a = de.support = {}, u = de.isXML = function(e) {
							var t = e && e.namespaceURI,
								n = e && (e.ownerDocument || e).documentElement;
							return !Z.test(t || n && n.nodeName || "HTML")
						}, v = de.setDocument = function(e) {
							var t, n, r = e ? e.ownerDocument || e : A;
							return 9 === r.nodeType && r.documentElement ? (w = (o = r).documentElement, y = !u(o), A != o && (n = o.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ce, !1) : n.attachEvent && n.attachEvent("onunload", ce)), a.scope = pe((e => (w.appendChild(e).appendChild(o.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length))), a.attributes = pe((e => (e.className = "i", !e.getAttribute("className")))), a.getElementsByTagName = pe((e => (e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length))), a.getElementsByClassName = ne.test(o.getElementsByClassName), a.getById = pe((e => (w.appendChild(e).id = T, !o.getElementsByName || !o.getElementsByName(T).length))), a.getById ? (l.filter.ID = function(e) {
								var t = e.replace(oe, se);
								return function(e) {
									return e.getAttribute("id") === t
								}
							}, l.find.ID = function(e, t) {
								if (void 0 !== t.getElementById && y) {
									var n = t.getElementById(e);
									return n ? [n] : []
								}
							}) : (l.filter.ID = function(e) {
								var t = e.replace(oe, se);
								return function(e) {
									var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
									return n && n.value === t
								}
							}, l.find.ID = function(e, t) {
								if (void 0 !== t.getElementById && y) {
									var n, r, i, o = t.getElementById(e);
									if (o) {
										if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
										for (i = t.getElementsByName(e), r = 0; o = i[r++];)
											if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
									}
									return []
								}
							}), l.find.TAG = a.getElementsByTagName ? function(e, t) {
								return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : a.qsa ? t.querySelectorAll(e) : void 0
							} : function(e, t) {
								var n, r = [],
									i = 0,
									o = t.getElementsByTagName(e);
								if ("*" === e) {
									for (; n = o[i++];) 1 === n.nodeType && r.push(n);
									return r
								}
								return o
							}, l.find.CLASS = a.getElementsByClassName && function(e, t) {
								if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e)
							}, _ = [], E = [], (a.qsa = ne.test(o.querySelectorAll)) && (pe((e => {
								var t;
								w.appendChild(e).innerHTML = `<a id='${T}'></a><select id='${T}-\r\\' msallowcapture=''><option selected=''></option></select>`, e.querySelectorAll("[msallowcapture^='']").length && E.push(`[*^$]=${W}*(?:''|"")`), e.querySelectorAll("[selected]").length || E.push(`\\[${W}*(?:value|${$})`), e.querySelectorAll(`[id~=${T}-]`).length || E.push("~="), (t = o.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || E.push(`\\[${W}*name${W}*=${W}*(?:''|"")`), e.querySelectorAll(":checked").length || E.push(":checked"), e.querySelectorAll(`a#${T}+*`).length || E.push(".#.+[+~]"), e.querySelectorAll("\\\f"), E.push("[\\r\\n\\f]")
							})), pe((e => {
								e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
								var t = o.createElement("input");
								t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && E.push(`name${W}*[*^$|!~]?=`), 2 !== e.querySelectorAll(":enabled").length && E.push(":enabled", ":disabled"), w.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && E.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), E.push(",.*:")
							}))), (a.matchesSelector = ne.test(b = w.matches || w.webkitMatchesSelector || w.mozMatchesSelector || w.oMatchesSelector || w.msMatchesSelector)) && pe((e => {
								a.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), _.push("!=", H)
							})), E = E.length && new RegExp(E.join("|")), _ = _.length && new RegExp(_.join("|")), t = ne.test(w.compareDocumentPosition), I = t || ne.test(w.contains) ? function(e, t) {
								var n = 9 === e.nodeType ? e.documentElement : e,
									r = t && t.parentNode;
								return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
							} : function(e, t) {
								if (t)
									for (; t = t.parentNode;)
										if (t === e) return !0;
								return !1
							}, L = t ? function(e, t) {
								if (e === t) return m = !0, 0;
								var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
								return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !a.sortDetached && t.compareDocumentPosition(e) === n ? e == o || e.ownerDocument == A && I(A, e) ? -1 : t == o || t.ownerDocument == A && I(A, t) ? 1 : g ? j(g, e) - j(g, t) : 0 : 4 & n ? -1 : 1)
							} : function(e, t) {
								if (e === t) return m = !0, 0;
								var n, r = 0,
									i = e.parentNode,
									s = t.parentNode,
									a = [e],
									l = [t];
								if (!i || !s) return e == o ? -1 : t == o ? 1 : i ? -1 : s ? 1 : g ? j(g, e) - j(g, t) : 0;
								if (i === s) return me(e, t);
								for (n = e; n = n.parentNode;) a.unshift(n);
								for (n = t; n = n.parentNode;) l.unshift(n);
								for (; a[r] === l[r];) r++;
								return r ? me(a[r], l[r]) : a[r] == A ? -1 : l[r] == A ? 1 : 0
							}, o) : o
						}, de.matches = function(e, t) {
							return de(e, null, null, t)
						}, de.matchesSelector = function(e, t) {
							if (v(e), a.matchesSelector && y && !N[`${t} `] && (!_ || !_.test(t)) && (!E || !E.test(t))) try {
								var n = b.call(e, t);
								if (n || a.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
							} catch (e) {
								N(t, !0)
							}
							return de(t, o, null, [e]).length > 0
						}, de.contains = function(e, t) {
							return (e.ownerDocument || e) != o && v(e), I(e, t)
						}, de.attr = function(e, t) {
							(e.ownerDocument || e) != o && v(e);
							var n = l.attrHandle[t.toLowerCase()],
								r = n && k.call(l.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
							return void 0 !== r ? r : a.attributes || !y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
						}, de.escape = function(e) {
							return `${e}`.replace(ae, le)
						}, de.error = function(e) {
							throw new Error(`Syntax error, unrecognized expression: ${e}`)
						}, de.uniqueSort = function(e) {
							var t, n = [],
								r = 0,
								i = 0;
							if (m = !a.detectDuplicates, g = !a.sortStable && e.slice(0), e.sort(L), m) {
								for (; t = e[i++];) t === e[i] && (r = n.push(i));
								for (; r--;) e.splice(n[r], 1)
							}
							return g = null, e
						}, c = de.getText = function(e) {
							var t, n = "",
								r = 0,
								i = e.nodeType;
							if (i) {
								if (1 === i || 9 === i || 11 === i) {
									if ("string" == typeof e.textContent) return e.textContent;
									for (e = e.firstChild; e; e = e.nextSibling) n += c(e)
								} else if (3 === i || 4 === i) return e.nodeValue
							} else
								for (; t = e[r++];) n += c(t);
							return n
						}, l = de.selectors = {
							cacheLength: 50,
							createPseudo: he,
							match: X,
							attrHandle: {},
							find: {},
							relative: {
								">": {
									dir: "parentNode",
									first: !0
								},
								" ": {
									dir: "parentNode"
								},
								"+": {
									dir: "previousSibling",
									first: !0
								},
								"~": {
									dir: "previousSibling"
								}
							},
							preFilter: {
								ATTR: e => (e[1] = e[1].replace(oe, se), e[3] = (e[3] || e[4] || e[5] || "").replace(oe, se), "~=" === e[2] && (e[3] = ` ${e[3]} `), e.slice(0, 4)),
								CHILD: e => (e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || de.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && de.error(e[0]), e),
								PSEUDO(e) {
									var t, n = !e[6] && e[2];
									return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
								}
							},
							filter: {
								TAG(e) {
									var t = e.replace(oe, se).toLowerCase();
									return "*" === e ? function() {
										return !0
									} : function(e) {
										return e.nodeName && e.nodeName.toLowerCase() === t
									}
								},
								CLASS(e) {
									var t = S[`${e} `];
									return t || (t = new RegExp(`(^|${W})${e}(${W}|$)`)) && S(e, (e => t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")))
								},
								ATTR: (e, t, n) => function(r) {
									var i = de.attr(r, e);
									return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? ` ${i.replace(V," ")} `.indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === `${n}-`))
								},
								CHILD(e, t, n, r, i) {
									var o = "nth" !== e.slice(0, 3),
										s = "last" !== e.slice(-4),
										a = "of-type" === t;
									return 1 === r && 0 === i ? function(e) {
										return !!e.parentNode
									} : function(t, n, l) {
										var c, u, d, f, h, p, g = o !== s ? "nextSibling" : "previousSibling",
											m = t.parentNode,
											v = a && t.nodeName.toLowerCase(),
											w = !l && !a,
											y = !1;
										if (m) {
											if (o) {
												for (; g;) {
													for (f = t; f = f[g];)
														if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
													p = g = "only" === e && !p && "nextSibling"
												}
												return !0
											}
											if (p = [s ? m.firstChild : m.lastChild], s && w) {
												for (y = (h = (c = (u = (d = (f = m)[T] || (f[T] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === O && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (y = h = 0) || p.pop();)
													if (1 === f.nodeType && ++y && f === t) {
														u[e] = [O, h, y];
														break
													}
											} else if (w && (y = h = (c = (u = (d = (f = t)[T] || (f[T] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === O && c[1]), !1 === y)
												for (;
													(f = ++h && f && f[g] || (y = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (w && ((u = (d = f[T] || (f[T] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [O, y]), f !== t)););
											return (y -= i) === r || y % r == 0 && y / r >= 0
										}
									}
								},
								PSEUDO(e, t) {
									var n, r = l.pseudos[e] || l.setFilters[e.toLowerCase()] || de.error(`unsupported pseudo: ${e}`);
									return r[T] ? r(t) : r.length > 1 ? (n = [e, e, "", t], l.setFilters.hasOwnProperty(e.toLowerCase()) ? he(((e, n) => {
										for (var i, o = r(e, t), s = o.length; s--;) e[i = j(e, o[s])] = !(n[i] = o[s])
									})) : function(e) {
										return r(e, 0, n)
									}) : r
								}
							},
							pseudos: {
								not: he((e => {
									var t = [],
										n = [],
										r = f(e.replace(q, "$1"));
									return r[T] ? he(((e, t, n, i) => {
										for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
									})) : function(e, i, o) {
										return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
									}
								})),
								has: he((e => function(t) {
									return de(e, t).length > 0
								})),
								contains: he((e => (e = e.replace(oe, se), function(t) {
									return (t.textContent || c(t)).indexOf(e) > -1
								}))),
								lang: he((e => (Q.test(e || "") || de.error(`unsupported lang: ${e}`), e = e.replace(oe, se).toLowerCase(), function(t) {
									var n;
									do {
										if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(`${e}-`)
									} while ((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}))),
								target(e) {
									var t = i.location && i.location.hash;
									return t && t.slice(1) === e.id
								},
								root: e => e === w,
								focus: e => e === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(e.type || e.href || ~e.tabIndex),
								enabled: ye(!1),
								disabled: ye(!0),
								checked(e) {
									var t = e.nodeName.toLowerCase();
									return "input" === t && !!e.checked || "option" === t && !!e.selected
								},
								selected: e => (e.parentNode && e.parentNode.selectedIndex, !0 === e.selected),
								empty(e) {
									for (e = e.firstChild; e; e = e.nextSibling)
										if (e.nodeType < 6) return !1;
									return !0
								},
								parent: e => !l.pseudos.empty(e),
								header: e => te.test(e.nodeName),
								input: e => ee.test(e.nodeName),
								button(e) {
									var t = e.nodeName.toLowerCase();
									return "input" === t && "button" === e.type || "button" === t
								},
								text(e) {
									var t;
									return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
								},
								first: Ee((() => [0])),
								last: Ee(((e, t) => [t - 1])),
								eq: Ee(((e, t, n) => [n < 0 ? n + t : n])),
								even: Ee(((e, t) => {
									for (var n = 0; n < t; n += 2) e.push(n);
									return e
								})),
								odd: Ee(((e, t) => {
									for (var n = 1; n < t; n += 2) e.push(n);
									return e
								})),
								lt: Ee(((e, t, n) => {
									for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
									return e
								})),
								gt: Ee(((e, t, n) => {
									for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
									return e
								}))
							}
						}, l.pseudos.nth = l.pseudos.eq, {
							radio: !0,
							checkbox: !0,
							file: !0,
							password: !0,
							image: !0
						}) l.pseudos[s] = ve(s);
					for (s in {
							submit: !0,
							reset: !0
						}) l.pseudos[s] = we(s);

					function be() {}

					function Ie(e) {
						for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
						return r
					}

					function Te(e, t, n) {
						var r = t.dir,
							i = t.next,
							o = i || r,
							s = n && "parentNode" === o,
							a = C++;
						return t.first ? function(t, n, i) {
							for (; t = t[r];)
								if (1 === t.nodeType || s) return e(t, n, i);
							return !1
						} : function(t, n, l) {
							var c, u, d, f = [O, a];
							if (l) {
								for (; t = t[r];)
									if ((1 === t.nodeType || s) && e(t, n, l)) return !0
							} else
								for (; t = t[r];)
									if (1 === t.nodeType || s)
										if (u = (d = t[T] || (t[T] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
										else {
											if ((c = u[o]) && c[0] === O && c[1] === a) return f[2] = c[2];
											if (u[o] = f, f[2] = e(t, n, l)) return !0
										} return !1
						}
					}

					function Ae(e) {
						return e.length > 1 ? function(t, n, r) {
							for (var i = e.length; i--;)
								if (!e[i](t, n, r)) return !1;
							return !0
						} : e[0]
					}

					function Oe(e, t, n, r, i) {
						for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
						return s
					}

					function Ce(e, t, n, r, i, o) {
						return r && !r[T] && (r = Ce(r)), i && !i[T] && (i = Ce(i, o)), he(((o, s, a, l) => {
							var c, u, d, f = [],
								h = [],
								p = s.length,
								g = o || function(e, t, n) {
									for (var r = 0, i = t.length; r < i; r++) de(e, t[r], n);
									return n
								}(t || "*", a.nodeType ? [a] : a, []),
								m = !e || !o && t ? g : Oe(g, f, e, a, l),
								v = n ? i || (o ? e : p || r) ? [] : s : m;
							if (n && n(m, v, a, l), r)
								for (c = Oe(v, h), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
							if (o) {
								if (i || e) {
									if (i) {
										for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
										i(null, v = [], c, l)
									}
									for (u = v.length; u--;)(d = v[u]) && (c = i ? j(o, d) : f[u]) > -1 && (o[c] = !(s[c] = d))
								}
							} else v = Oe(v === s ? v.splice(p, v.length) : v), i ? i(null, s, v, l) : B.apply(s, v)
						}))
					}

					function Se(e) {
						for (var t, n, r, i = e.length, o = l.relative[e[0].type], s = o || l.relative[" "], a = o ? 1 : 0, c = Te((e => e === t), s, !0), u = Te((e => j(t, e) > -1), s, !0), d = [function(e, n, r) {
								var i = !o && (r || n !== p) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
								return t = null, i
							}]; a < i; a++)
							if (n = l.relative[e[a].type]) d = [Te(Ae(d), n)];
							else {
								if ((n = l.filter[e[a].type].apply(null, e[a].matches))[T]) {
									for (r = ++a; r < i && !l.relative[e[r].type]; r++);
									return Ce(a > 1 && Ae(d), a > 1 && Ie(e.slice(0, a - 1).concat({
										value: " " === e[a - 2].type ? "*" : ""
									})).replace(q, "$1"), n, a < r && Se(e.slice(a, r)), r < i && Se(e = e.slice(r)), r < i && Ie(e))
								}
								d.push(n)
							} return Ae(d)
					}
					be.prototype = l.filters = l.pseudos, l.setFilters = new be, d = de.tokenize = function(e, t) {
						var n, r, i, o, s, a, c, u = M[`${e} `];
						if (u) return t ? 0 : u.slice(0);
						for (s = e, a = [], c = l.preFilter; s;) {
							for (o in n && !(r = z.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = K.exec(s)) && (n = r.shift(), i.push({
									value: n,
									type: r[0].replace(q, " ")
								}), s = s.slice(n.length)), l.filter) !(r = X[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), i.push({
								value: n,
								type: o,
								matches: r
							}), s = s.slice(n.length));
							if (!n) break
						}
						return t ? s.length : s ? de.error(e) : M(e, a).slice(0)
					}, f = de.compile = function(e, t) {
						var n, r = [],
							i = [],
							s = R[`${e} `];
						if (!s) {
							for (t || (t = d(e)), n = t.length; n--;)(s = Se(t[n]))[T] ? r.push(s) : i.push(s);
							s = R(e, function(e, t) {
								var n = t.length > 0,
									r = e.length > 0,
									i = function(i, s, a, c, u) {
										var d, f, h, g = 0,
											m = "0",
											w = i && [],
											E = [],
											_ = p,
											b = i || r && l.find.TAG("*", u),
											I = O += null == _ ? 1 : Math.random() || .1,
											T = b.length;
										for (u && (p = s == o || s || u); m !== T && null != (d = b[m]); m++) {
											if (r && d) {
												for (f = 0, s || d.ownerDocument == o || (v(d), a = !y); h = e[f++];)
													if (h(d, s || o, a)) {
														c.push(d);
														break
													} u && (O = I)
											}
											n && ((d = !h && d) && g--, i && w.push(d))
										}
										if (g += m, n && m !== g) {
											for (f = 0; h = t[f++];) h(w, E, s, a);
											if (i) {
												if (g > 0)
													for (; m--;) w[m] || E[m] || (E[m] = x.call(c));
												E = Oe(E)
											}
											B.apply(c, E), u && !i && E.length > 0 && g + t.length > 1 && de.uniqueSort(c)
										}
										return u && (O = I, p = _), w
									};
								return n ? he(i) : i
							}(i, r)), s.selector = e
						}
						return s
					}, h = de.select = function(e, t, n, r) {
						var i, o, s, a, c, u = "function" == typeof e && e,
							h = !r && d(e = u.selector || e);
						if (n = n || [], 1 === h.length) {
							if ((o = h[0] = h[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && y && l.relative[o[1].type]) {
								if (!(t = (l.find.ID(s.matches[0].replace(oe, se), t) || [])[0])) return n;
								u && (t = t.parentNode), e = e.slice(o.shift().value.length)
							}
							for (i = X.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !l.relative[a = s.type]);)
								if ((c = l.find[a]) && (r = c(s.matches[0].replace(oe, se), ie.test(o[0].type) && _e(t.parentNode) || t))) {
									if (o.splice(i, 1), !(e = r.length && Ie(o))) return B.apply(n, r), n;
									break
								}
						}
						return (u || f(e, h))(r, t, !y, n, !t || ie.test(e) && _e(t.parentNode) || t), n
					}, a.sortStable = T.split("").sort(L).join("") === T, a.detectDuplicates = !!m, v(), a.sortDetached = pe((e => 1 & e.compareDocumentPosition(o.createElement("fieldset")))), pe((e => (e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")))) || ge("type|href|height|width", ((e, t, n) => {
						if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
					})), a.attributes && pe((e => (e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")))) || ge("value", ((e, t, n) => {
						if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
					})), pe((e => null == e.getAttribute("disabled"))) || ge($, ((e, t, n) => {
						var r;
						if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
					}));
					var Me = i.Sizzle;
					de.noConflict = function() {
						return i.Sizzle === de && (i.Sizzle = Me), de
					}, void 0 === (r = (() => de).call(t, n, t, e)) || (e.exports = r)
				}(window, window.__vueglobaldocument || window.document)
			},
			6554: e => {
				"use strict";

				function t(e, n, r) {
					var i = 0 | e[r];
					if (i <= 0) return [];
					var o, s = new Array(i);
					if (r === e.length - 1)
						for (o = 0; o < i; ++o) s[o] = n;
					else
						for (o = 0; o < i; ++o) s[o] = t(e, n, r + 1);
					return s
				}
				e.exports = function(e, n) {
					switch (void 0 === n && (n = 0), typeof e) {
						case "number":
							if (e > 0) return function(e, t) {
								var n, r;
								for (n = new Array(e), r = 0; r < e; ++r) n[r] = t;
								return n
							}(0 | e, n);
							break;
						case "object":
							if ("number" == typeof e.length) return t(e, n, 0)
					}
					return []
				}
			},
			2958: (e, t, n) => {
				"use strict";
				var r = n(757),
					i = 0,
					o = 1;

				function s(e, t, n, r, i) {
					this.mid = e, this.left = t, this.right = n, this.leftPoints = r, this.rightPoints = i, this.count = (t ? t.count : 0) + (n ? n.count : 0) + r.length
				}
				e.exports = function(e) {
					if (!e || 0 === e.length) return new y(null);
					return new y(w(e))
				};
				var a = s.prototype;

				function l(e, t) {
					e.mid = t.mid, e.left = t.left, e.right = t.right, e.leftPoints = t.leftPoints, e.rightPoints = t.rightPoints, e.count = t.count
				}

				function c(e, t) {
					var n = w(t);
					e.mid = n.mid, e.left = n.left, e.right = n.right, e.leftPoints = n.leftPoints, e.rightPoints = n.rightPoints, e.count = n.count
				}

				function u(e, t) {
					var n = e.intervals([]);
					n.push(t), c(e, n)
				}

				function d(e, t) {
					var n = e.intervals([]),
						r = n.indexOf(t);
					return r < 0 ? i : (n.splice(r, 1), c(e, n), o)
				}

				function f(e, t, n) {
					for (var r = 0; r < e.length && e[r][0] <= t; ++r) {
						var i = n(e[r]);
						if (i) return i
					}
				}

				function h(e, t, n) {
					for (var r = e.length - 1; r >= 0 && e[r][1] >= t; --r) {
						var i = n(e[r]);
						if (i) return i
					}
				}

				function p(e, t) {
					for (var n = 0; n < e.length; ++n) {
						var r = t(e[n]);
						if (r) return r
					}
				}

				function g(e, t) {
					return e - t
				}

				function m(e, t) {
					var n = e[0] - t[0];
					return n || e[1] - t[1]
				}

				function v(e, t) {
					var n = e[1] - t[1];
					return n || e[0] - t[0]
				}

				function w(e) {
					if (0 === e.length) return null;
					for (var t = [], n = 0; n < e.length; ++n) t.push(e[n][0], e[n][1]);
					t.sort(g);
					var r = t[t.length >> 1],
						i = [],
						o = [],
						a = [];
					for (n = 0; n < e.length; ++n) {
						var l = e[n];
						l[1] < r ? i.push(l) : r < l[0] ? o.push(l) : a.push(l)
					}
					var c = a,
						u = a.slice();
					return c.sort(m), u.sort(v), new s(r, w(i), w(o), c, u)
				}

				function y(e) {
					this.root = e
				}
				a.intervals = function(e) {
					return e.push.apply(e, this.leftPoints), this.left && this.left.intervals(e), this.right && this.right.intervals(e), e
				}, a.insert = function(e) {
					var t = this.count - this.leftPoints.length;
					if (this.count += 1, e[1] < this.mid) this.left ? 4 * (this.left.count + 1) > 3 * (t + 1) ? u(this, e) : this.left.insert(e) : this.left = w([e]);
					else if (e[0] > this.mid) this.right ? 4 * (this.right.count + 1) > 3 * (t + 1) ? u(this, e) : this.right.insert(e) : this.right = w([e]);
					else {
						var n = r.ge(this.leftPoints, e, m),
							i = r.ge(this.rightPoints, e, v);
						this.leftPoints.splice(n, 0, e), this.rightPoints.splice(i, 0, e)
					}
				}, a.remove = function(e) {
					var t = this.count - this.leftPoints;
					if (e[1] < this.mid) return this.left ? 4 * (this.right ? this.right.count : 0) > 3 * (t - 1) ? d(this, e) : 2 === (c = this.left.remove(e)) ? (this.left = null, this.count -= 1, o) : (c === o && (this.count -= 1), c) : i;
					if (e[0] > this.mid) return this.right ? 4 * (this.left ? this.left.count : 0) > 3 * (t - 1) ? d(this, e) : 2 === (c = this.right.remove(e)) ? (this.right = null, this.count -= 1, o) : (c === o && (this.count -= 1), c) : i;
					if (1 === this.count) return this.leftPoints[0] === e ? 2 : i;
					if (1 === this.leftPoints.length && this.leftPoints[0] === e) {
						if (this.left && this.right) {
							for (var n = this, s = this.left; s.right;) n = s, s = s.right;
							if (n === this) s.right = this.right;
							else {
								var a = this.left,
									c = this.right;
								n.count -= s.count, n.right = s.left, s.left = a, s.right = c
							}
							l(this, s), this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length
						} else this.left ? l(this, this.left) : l(this, this.right);
						return o
					}
					for (a = r.ge(this.leftPoints, e, m); a < this.leftPoints.length && this.leftPoints[a][0] === e[0]; ++a)
						if (this.leftPoints[a] === e) {
							this.count -= 1, this.leftPoints.splice(a, 1);
							for (c = r.ge(this.rightPoints, e, v); c < this.rightPoints.length && this.rightPoints[c][1] === e[1]; ++c)
								if (this.rightPoints[c] === e) return this.rightPoints.splice(c, 1), o
						} return i
				}, a.queryPoint = function(e, t) {
					if (e < this.mid) {
						if (this.left)
							if (n = this.left.queryPoint(e, t)) return n;
						return f(this.leftPoints, e, t)
					}
					if (e > this.mid) {
						var n;
						if (this.right)
							if (n = this.right.queryPoint(e, t)) return n;
						return h(this.rightPoints, e, t)
					}
					return p(this.leftPoints, t)
				}, a.queryInterval = function(e, t, n) {
					var r;
					if (e < this.mid && this.left && (r = this.left.queryInterval(e, t, n))) return r;
					if (t > this.mid && this.right && (r = this.right.queryInterval(e, t, n))) return r;
					return t < this.mid ? f(this.leftPoints, t, n) : e > this.mid ? h(this.rightPoints, e, n) : p(this.leftPoints, n)
				};
				var E = y.prototype;
				E.insert = function(e) {
					this.root ? this.root.insert(e) : this.root = new s(e[0], null, null, [e], [e])
				}, E.remove = function(e) {
					if (this.root) {
						var t = this.root.remove(e);
						return 2 === t && (this.root = null), t !== i
					}
					return !1
				}, E.queryPoint = function(e, t) {
					if (this.root) return this.root.queryPoint(e, t)
				}, E.queryInterval = function(e, t, n) {
					if (e <= t && this.root) return this.root.queryInterval(e, t, n)
				}, Object.defineProperty(E, "count", {
					get: function() {
						return this.root ? this.root.count : 0
					}
				}), Object.defineProperty(E, "intervals", {
					get: function() {
						return this.root ? this.root.intervals([]) : []
					}
				})
			},
			9149: e => {
				"use strict";
				e.exports = function(e) {
					for (var t = new Array(e), n = 0; n < e; ++n) t[n] = n;
					return t
				}
			},
			6: (e, t, n) => {
				"use strict";
				var r = n(2305),
					i = n(2958);
				n(6554);

				function o(e, t, n, r) {
					this.point = e, this.path = t, this.index = n, this.concave = r, this.next = null, this.prev = null, this.visited = !1
				}

				function s(e, t, n) {
					var r = e.point[1 ^ n],
						i = t.point[1 ^ n];
					r < i ? (this[0] = r, this[1] = i) : (this[0] = i, this[1] = r), this.start = e, this.end = t, this.direction = n, this.number = -1
				}

				function a(e, t, n, r) {
					var i = e.point[1 ^ r],
						o = t.point[1 ^ r];
					return !!n.queryPoint(e.point[r], (function(e) {
						var t = e.start.point[1 ^ r];
						return i < t && t < o
					}))
				}

				function l(e, t, n, r) {
					for (var i = [], o = 0; o < e.length; ++o) e[o].concave && i.push(e[o]);
					i.sort((function(e, t) {
						var r = e.point[n] - t.point[n];
						return r || e.point[1 ^ n] - t.point[1 ^ n]
					}));
					var l = [];
					for (o = 1; o < i.length; ++o) {
						var c = i[o - 1],
							u = i[o];
						if (c.point[n] === u.point[n]) {
							if (c.path === u.path) {
								var d = t[c.path].length,
									f = (c.index - u.index + d) % d;
								if (1 === f || f === d - 1) continue
							}
							a(c, u, r, n) || l.push(new s(c, u, n))
						}
					}
					return l
				}

				function c(e) {
					var t = e.start,
						n = e.end,
						r = t.prev,
						i = t.next,
						o = n.prev,
						s = n.next;
					t.concave = !1, n.concave = !1;
					var a = r.point[e.direction] === t.point[e.direction],
						l = o.point[e.direction] === n.point[e.direction];
					a && l ? (t.prev = o, o.next = t, n.prev = r, r.next = n) : a && !l ? (t.prev = n, n.next = t, r.next = s, s.prev = r) : !a && l ? (t.next = n, n.prev = t, i.prev = o, o.next = i) : a || l || (t.next = s, s.prev = t, n.next = i, i.prev = n)
				}
				e.exports = function(e, t) {
					if (!Array.isArray(e)) throw new Error("rectangle-decomposition: Must specify list of loops");
					t = !!t;
					for (var n = [], a = new Array(e.length), u = 0; u < e.length; ++u) {
						var d = e[u];
						if (!Array.isArray(d)) throw new Error("rectangle-decomposition: Loop must be array type");
						var f = d.length,
							h = d[f - 3],
							p = d[f - 2],
							g = d[f - 1];
						a[u] = [];
						for (var m = 0; m < f; ++m) {
							if (h = p, p = g, g = d[m], !Array.isArray(g) || 2 !== g.length) throw new Error("rectangle-decomposition: Must specify list of loops");
							var v = !1;
							if (h[0] === p[0]) {
								if (g[0] === p[0]) continue;
								v = h[1] < p[1] === p[0] < g[0]
							} else {
								if (g[1] === p[1]) continue;
								v = h[0] < p[0] !== p[1] < g[1]
							}
							t && (v = !v);
							var w = new o(p, u, (m + f - 1) % f, v);
							a[u].push(w), n.push(w)
						}
					}
					var y = [],
						E = [];
					for (u = 0; u < a.length; ++u) {
						var _ = a[u];
						for (m = 0; m < _.length; ++m) {
							var b = _[m],
								I = _[(m + 1) % _.length];
							b.point[0] === I.point[0] ? y.push(new s(b, I, 0)) : E.push(new s(b, I, 1)), t ? (b.prev = I, I.next = b) : (b.next = I, I.prev = b)
						}
					}
					var T = i(y),
						A = i(E),
						O = l(n, a, 0, A),
						C = l(n, a, 1, T),
						S = function(e, t) {
							for (var n = function(e, t) {
									for (var n = i(e), r = [], o = 0; o < t.length; ++o) {
										var s = t[o];
										s.start.point[0];
										n.queryPoint(s.start.point[1], (function(e) {
											var t = e.start.point[0];
											s[0] <= t && t <= s[1] && r.push([e, s])
										}))
									}
									return r
								}(e, t), o = 0; o < e.length; ++o) e[o].number = o;
							for (o = 0; o < t.length; ++o) t[o].number = o;
							var s = n.map((function(e) {
									return [e[0].number, e[1].number]
								})),
								a = r(e.length, t.length, s),
								l = new Array(a[0].length + a[1].length),
								c = 0;
							for (o = 0; o < a[0].length; ++o) l[c++] = e[a[0][o]];
							for (o = 0; o < a[1].length; ++o) l[c++] = t[a[1][o]];
							return l
						}(O, C);
					for (u = 0; u < S.length; ++u) c(S[u]);
					return function(e) {
							for (var t = [], n = [], r = 0; r < e.length; ++r) {
								(c = e[r]).next.point[1] === c.point[1] && (c.next.point[0] < c.point[0] ? t.push(new s(c, c.next, 1)) : n.push(new s(c, c.next, 1)))
							}
							var a = i(t),
								l = i(n);
							for (r = 0; r < e.length; ++r) {
								var c;
								if ((c = e[r]).concave) {
									var u, d = c.point[1];
									u = c.prev.point[0] === c.point[0] ? c.prev.point[1] < d : c.next.point[1] < d;
									var f = null,
										h = 1 / 0 * (u = u ? 1 : -1);
									u < 0 ? l.queryPoint(c.point[0], (function(e) {
										var t = e.start.point[1];
										t < d && t > h && (h = t, f = e)
									})) : a.queryPoint(c.point[0], (function(e) {
										var t = e.start.point[1];
										t > d && t < h && (h = t, f = e)
									}));
									var p, g = new o([c.point[0], h], 0, 0, !1),
										m = new o([c.point[0], h], 0, 0, !1);
									c.concave = !1, g.prev = f.start, f.start.next = g, m.next = f.end, f.end.prev = m, (p = u < 0 ? l : a).remove(f), p.insert(new s(f.start, g, 1)), p.insert(new s(m, f.end, 1)), e.push(g, m), c.prev.point[0] === c.point[0] ? (g.next = c, m.prev = c.prev) : (g.next = c.next, m.prev = c), g.next.prev = g, m.prev.next = m
								}
							}
						}(n),
						function(e) {
							for (var t = e.length, n = 0; n < t; ++n) e[n].visited = !1;
							var r = [];
							for (n = 0; n < t; ++n) {
								var i = e[n];
								if (!i.visited) {
									for (var o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0]; !i.visited;) {
										for (var a = 0; a < 2; ++a) o[a] = Math.min(i.point[a], o[a]), s[a] = Math.max(i.point[a], s[a]);
										i.visited = !0, i = i.next
									}
									r.push([o, s])
								}
							}
							return r
						}(n)
				}
			},
			6674: e => {
				"use strict";
				e.exports = {
					webview: {
						scroll: "Driver.scroll",
						getTagName: "Driver.getTagName",
						getAttribute: "Driver.getAttribute",
						getLocation: "Driver.getLocation",
						getSize: "Driver.getSize",
						getRect: "Driver.getRect",
						getCssValue: "Driver.getCssValue",
						getProperty: "Driver.getProperty",
						elementFromPoint: "Driver.elementFromPoint",
						getContentSize: "Driver.getContentSize",
						findElement: "Driver.findElement",
						findElements: "Driver.findElements",
						sendKeys: "Driver.sendKeys",
						focus: "Driver.focus",
						scrollIntoView: "Driver.scrollIntoView",
						actionElementFromPoint: "Driver.actionElementFromPoint",
						tapElement: "Driver.tapElement",
						longtapElement: "Driver.longtapElement",
						touchDown: "Driver.touchDown",
						touchUp: "Driver.touchUp",
						touchMove: "Driver.touchMove",
						findShadowRoot: "Driver.findShadowRoot",
						findElementInWebviewShadowRoot: "Driver.findElementInWebviewShadowRoot",
						clickContextMenu: "Driver.clickContextMenu"
					}
				}
			},
			6248: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const n = navigator.userAgent || "",
					r = n.indexOf(" webdebugger ") > 0,
					i = n.indexOf(" miniprogramhtmlwebview ") > 0,
					o = n.indexOf(" miniprogram ") > 0,
					s = n.indexOf(" gameservice ") > 0,
					a = n.indexOf(" appservice ") > 0,
					l = n.indexOf(" gitmanager") > 0,
					c = n.indexOf(" cloudconsolev1") > 0,
					u = n.indexOf(" wechatideplugin ") > 0,
					d = n.indexOf(" simulatorplugin ") > 0,
					f = n.indexOf(" hybirdplugin ") > 0,
					h = n.indexOf(" entranceplugin ") > 0,
					p = /^chrome-extension:\/\/\w+\/html\/subapp-window.html/.test(location.href),
					g = n.indexOf(" isgameengineide ") > 0,
					m = n.indexOf(" isgameengineideiframe") > 0,
					v = n.indexOf(" isgameenginedebug ") > 0,
					w = n.indexOf(" devtoolsedit") > 0,
					y = n.indexOf(" appservicedevtools") > 0,
					E = n.indexOf(" test-mode") > 0,
					_ = n.indexOf(" allownw") > 0,
					b = n.indexOf(" skyline") > 0,
					I = n.indexOf(" engineTutorial") > 0;
				let T = n.indexOf(" gameserviceenv/") > 0 ? n.match(/\sgameserviceenv\/([^\s]*)\s/) : "";
				T = (null == T ? void 0 : T[1]) ? T[1] : "", t.default = {
					isWebDebugger: r,
					isMiniProgramHtmlWebview: i,
					isMiniProgram: o,
					isAppService: a,
					isSkyline: b,
					isGame: s,
					isIDEPlugin: u,
					isSimulatorPlugin: d,
					isHybirdPlugin: f,
					isEntrancePLugin: h,
					isSubAppWindow: p,
					isGameEngineIDE: g,
					isGameEngineIDEIframe: m,
					isGameEngineDebug: v,
					isEditor: w,
					isAppServiceDevtools: y,
					isGitManager: l,
					isCloudConsoleV1: c,
					isTestMode: E,
					isAllowNw: _,
					gameEnvType: T,
					engineTutorial: I
				}
			},
			6440: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(9788),
					i = n(1648),
					o = () => {
						console.error("WeixinJSBridge.call 不被支持，请参考 http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html 进行正确调用")
					},
					s = e => {
						console.log(e)
					};
				t.default = () => ({
					invoke: r.default(),
					on: i.default(),
					call: o,
					log: s
				})
			},
			9788: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(5673),
					i = n(5423),
					o = {};
				let s = 1,
					a = !1;

				function l(e, t, n) {
					if (/^__sys/.test(e)) return;
					if ("shareTimeline" === e || "sendAppMessage" === e) {
						const t = "shareTimeline" === e ? "onMenuShareTimeline" : "onMenuShareAppMessage",
							n = "shareTimeline" === e ? "updateTimelineShareData" : "updateAppMessageShareData";
						console.warn(`wx.${t} is about to be abandoned, please use wx.${n}. See https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#10 for more detail.`)
					}
					"startRecord" === e && console.warn("开发者工具录制的音频并非是真正的silk格式文件，对其以silk格式进行解析将发生错误"), console.group(`${new Date} wx.${i.default.getSdkDisplayName(e)} begin`), console.info(i.default.getSdkArgs(e, t)), console.groupEnd();
					const a = s++;
					o[a] = {
						api: e,
						cb: n
					}, r.default.send({
						command: "WEBDEBUGGER_INVOKE",
						data: {
							api: e,
							args: t,
							callbackID: a
						}
					})
				}
				t.default = () => (a || (a = !0, r.default.registerCallback((e => {
					var t;
					const {
						command: n,
						data: s
					} = e;
					if ("WEBDEBUGGER_INVOKE_CALLBACK" === n) {
						const e = s.callbackID,
							n = o[e];
						if (n && "function" == typeof n.cb) {
							const e = n.api,
								r = s.res,
								o = s.ext;
							if (console.group(`${new Date} wx.${i.default.getSdkDisplayName(e)} end`), console.info(i.default.getSdkArgs(e, r)), console.groupEnd(), "preVerifyJSAPI" === e && /^config:ok/.test(r.errMsg)) {
								const e = o.args.verifyJsApiList || [],
									n = o.sdkResExt,
									s = [],
									a = [];
								let l = [];
								e.forEach((e => {
									(n.defaultPurview[e] || n.purviewFormGetA8key[e] || n.purviewFromPreVerify[e]) && (0 === l.length ? s.push(l) : 6 === l.length && (l = [], s.push(l)), l.push(i.default.getSdkDisplayName(e)))
								})), console.group(`${new Date} 当前页面通过 wx.config 获取到的 JSSDK 权限如下`), console.table(s), console.groupEnd(), (null === (t = r.verifyOpenTagList) || void 0 === t ? void 0 : t.length) > 0 && (l = [], r.verifyOpenTagList.forEach((e => {
									0 === l.length ? a.push(l) : 6 === l.length && (l = [], a.push(l)), l.push(e)
								})), console.group(`${new Date} 当前页面通过 wx.config 获取到的 OpenTag 权限如下`), console.table(a), console.groupEnd())
							}
							"function" == typeof n.cb && n.cb(r)
						}
						delete o[e]
					} else "WEBDEBUGGER_GET_TITLE" === n && self === top && r.default.send({
						command: "WEBDEBUGGER_GET_TITLE_RES",
						data: {
							title: document.title
						}
					})
				}))), l)
			},
			1648: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(5673),
					i = {};
				let o = !1;
				t.default = () => (o || (o = !0, r.default.registerCallback((e => {
					const {
						command: t,
						data: n
					} = e;
					if ("WEBDEBUGGER_ON_EVENT" === t) {
						const e = i[n.eventName];
						"function" == typeof e && e(n.data)
					}
				}))), (e, t) => {
					i[e] = t
				})
			},
			2726: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(6440);

				function i() {
					! function() {
						const e = ["ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel"],
							t = [window.__proto__, document.__proto__];
						for (const n of e)
							for (const e of t) n in e || Object.defineProperty(e, n, {
								value: null,
								writable: !0,
								configurable: !0,
								enumerable: !0
							})
					}(), window.WeixinJSBridge = r.default();
					const e = document.createEvent("UIEvent");
					e.initEvent("WeixinJSBridgeReady", !1, !1), document.dispatchEvent(e)
				}
				t.default = () => {
					"complete" === document.readyState ? i() : window.addEventListener("load", (() => {
						i()
					}))
				}
			},
			8204: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = {
					sdkDisplayName: {
						shareTimeline: "onMenuShareTimeline",
						sendAppMessage: "onMenuShareAppMessage",
						shareQQ: "onMenuShareQQ",
						shareWeiboApp: "onMenuShareWeibo",
						shareQZone: "onMenuShareQZone",
						"menu:share:timeline": "onMenuShareTimeline",
						"menu:share:appmessage": "onMenuShareAppMessage",
						"menu:share:qq": "onMenuShareQQ",
						"menu:share:weiboApp": "onMenuShareWeibo",
						"menu:share:QZone": "onMenuShareQZone",
						preVerifyJSAPI: "config",
						imagePreview: "previewImage",
						geoLocation: "getLocation",
						openProductViewWithPid: "openProductSpecificView",
						batchAddCard: "addCard",
						batchViewCard: "openCard",
						getBrandWCPayRequest: "chooseWXPay",
						showPickerView: "showPickerView",
						showDatePickerView: "showDatePickerView"
					},
					doNotDisplayArgsConfig: {
						appId: !0,
						verifyAppId: !0,
						verifyNonceStr: !0,
						verifySignType: !0,
						verifySignature: !0,
						verifyTimestamp: !0,
						origin: !0,
						webviewId: !0,
						__isFromOn__: !0,
						__domain__: !0,
						__url__: !0
					}
				}
			},
			5673: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(8422),
					i = navigator.userAgent.match(/webview\/([\w]*)/),
					o = i ? i[1] : "",
					s = `${Date.now()}${Math.floor(1e4*Math.random())}`;
				let a;
				const l = () => {
					if (a) return a;
					return a = new r(`WEBDEBUGGER_${s}`), a.send({
						command: "WEBDEBUGGER_MESSAGER_READY",
						webviewID: o,
						runtimeID: s
					}), a
				};
				t.default = {
					send(e) {
						e.webviewID = o, e.runtimeID = s;
						l().send(e)
					},
					registerCallback(e) {
						l().registerCallback(e)
					}
				}
			},
			5423: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(8204);

				function i(e) {
					return r.default.sdkDisplayName[e] || e
				}
				t.default = {
					getSdkArgs: function(e, t = {}) {
						const n = JSON.parse(JSON.stringify(t));
						if (delete n.verifyAppId, "preVerifyJSAPI" === e) n.jsApiList = n.verifyJsApiList || [], n.jsApiList.forEach(((e, t) => {
							n.jsApiList[t] = i(e)
						})), n.verifyNonceStr && (n.nonceStr = n.verifyNonceStr), n.verifySignature && (n.signature = n.verifySignature), n.verifyTimestamp && (n.timestamp = n.verifyTimestamp), n.verifyOpenTagList && (n.openTagList = n.verifyOpenTagList), delete n.verifyJsApiList, delete n.verifyNonceStr, delete n.verifySignature, delete n.verifyTimestamp, delete n.verifySignType, delete n.verifyOpenTagList;
						else
							for (const e in t) r.default.doNotDisplayArgsConfig[e] && delete n[e];
						return n
					},
					getSdkDisplayName: i
				}
			},
			5887: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.LinkedList = void 0;
				class n {
					constructor(e) {
						this.element = e, this.next = n.Undefined, this.prev = n.Undefined
					}
				}
				n.Undefined = new n(void 0);
				class r {
					constructor() {
						this._first = n.Undefined, this._last = n.Undefined, this._size = 0
					}
					get size() {
						return this._size
					}
					isEmpty() {
						return this._first === n.Undefined
					}
					clear() {
						this._first = n.Undefined, this._last = n.Undefined, this._size = 0
					}
					unshift(e) {
						return this._insert(e, !1)
					}
					push(e) {
						return this._insert(e, !0)
					}
					_insert(e, t) {
						const r = new n(e);
						if (this._first === n.Undefined) this._first = r, this._last = r;
						else if (t) {
							const e = this._last;
							this._last = r, r.prev = e, e.next = r
						} else {
							const e = this._first;
							this._first = r, r.next = e, e.prev = r
						}
						this._size += 1;
						let i = !1;
						return () => {
							i || (i = !0, this._remove(r))
						}
					}
					shift() {
						if (this._first === n.Undefined) return;
						const e = this._first.element;
						return this._remove(this._first), e
					}
					pop() {
						if (this._last === n.Undefined) return;
						const e = this._last.element;
						return this._remove(this._last), e
					}
					_remove(e) {
						if (e.prev !== n.Undefined && e.next !== n.Undefined) {
							const t = e.prev;
							t.next = e.next, e.next.prev = t
						} else e.prev === n.Undefined && e.next === n.Undefined ? (this._first = n.Undefined, this._last = n.Undefined) : e.next === n.Undefined ? (this._last = this._last.prev, this._last.next = n.Undefined) : e.prev === n.Undefined && (this._first = this._first.next, this._first.prev = n.Undefined);
						this._size -= 1
					}*[Symbol.iterator]() {
						let e = this._first;
						for (; e !== n.Undefined;) yield e.element, e = e.next
					}
				}
				t.LinkedList = r
			},
			2185: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.isKindOfArray = t.isKindOfArrayBuffer = t.arrayBufferToBase64 = t.base64ToArrayBuffer = void 0, t.base64ToArrayBuffer = function(e) {
					const t = window.atob(e),
						n = t.length,
						r = new Uint8Array(n);
					for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
					return r.buffer
				}, t.arrayBufferToBase64 = function(e) {
					let t = "";
					const n = new Uint8Array(e),
						r = n.byteLength;
					for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
					return window.btoa(t)
				}, t.isKindOfArrayBuffer = function(e) {
					if (!e) return !1;
					if (e instanceof ArrayBuffer) return !0;
					try {
						const t = Object.getPrototypeOf(e);
						return !(!t.hasOwnProperty("byteLength") || "[object ArrayBuffer]" !== Object.prototype.toString.call(t))
					} catch (e) {
						return !1
					}
				}, t.isKindOfArray = function(e) {
					if (!e) return !1;
					if (e instanceof Array) return !0;
					if (Array.isArray(e)) return !0;
					try {
						const t = e.length;
						if ("number" != typeof t) return !1;
						for (let n = 0; n < t; n++)
							if (!(n in e)) return !1;
						return !0
					} catch (e) {
						return !1
					}
				}
			},
			7241: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(9916),
					i = n(2389);
				t.default = () => {
					const e = location.pathname.match(/ideplugin\/(\S*)\//),
						t = e ? e[1] : "";
					if (t) {
						console.warn("pluginId", t);
						const e = new r.default(t);
						Object.defineProperty(window, "wechatide", {
							value: i.createWechatideApiFactoryAndRegisterActors(e, t, {
								entrance: !0
							}),
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), window.dispatchEvent(new CustomEvent("wechatideReady", {
							detail: window.wechatide
						}))
					}
				}
			},
			534: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(9916),
					i = n(7891),
					o = n(6454),
					s = n(2389),
					a = n(6248),
					{
						isHybirdPlugin: l
					} = a.default;
				t.default = () => {
					const e = window.navigator.userAgent.match(/pluginid\/(\S*)/),
						t = e ? e[1] : "";
					if (t) {
						const e = new r.default(t);
						Object.defineProperty(window, "wechatide", {
							value: s.createWechatideApiFactoryAndRegisterActors(e, t, {
								hybird: l
							}),
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), Object.defineProperty(window, "pluginStorage", {
							value: new i.default,
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), Object.defineProperty(window, "logger", {
							value: new o.default(t),
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), window.dispatchEvent(new CustomEvent("wechatideReady", {
							detail: window.wechatide
						})), window.dispatchEvent(new CustomEvent("pluginStorageReady", {
							detail: window.pluginStorage
						}))
					}
				}
			},
			6454: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = class {
					constructor(e) {
						this.pluginId = e
					}
					error(...e) {
						window.wechatide.invoke("PLUGIN_LOGGER_ERROR", {
							msg: e || [],
							pluginId: this.pluginId
						})
					}
					info(...e) {
						window.wechatide.invoke("PLUGIN_LOGGER_INFO", {
							msg: e || [],
							pluginId: this.pluginId
						})
					}
				}
			},
			9916: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(8422),
					i = +new Date,
					o = function() {
						let e = 1;
						return function() {
							return `${i}_${e++}`
						}
					}();

				function s(e, t) {
					const n = o();
					return this.__callbackMap[n] = {
						callback: e,
						resolve: t
					}, n
				}
				t.default = class {
					constructor(e) {
						this.__callbackMap = {}, this.__onEvent = {}, Object.defineProperty(this, "__callbackMap", {
							value: {},
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), Object.defineProperty(this, "__onEvent", {
							value: {},
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), Object.defineProperty(this, "__messager", {
							value: new r(`PLUGIN_${e}`),
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), this.__messager.registerCallback((e => {
							const {
								command: t,
								data: n,
								callbackID: r
							} = e;
							if ("INVOKE_CALLBACK" === t) {
								const {
									callbackID: e,
									res: t
								} = n, r = this.__callbackMap[e];
								r && ("function" == typeof r.callback && r.callback(t), "function" == typeof r.resolve && r.resolve(t)), delete this.__callbackMap[e]
							}
							if ("ON_EVENT" === t) {
								const {
									eventName: e,
									res: t
								} = n, i = this.__onEvent[e];
								"function" == typeof i && i(t, r)
							}
						}))
					}
					callback(e, t) {
						this.__messager.send({
							command: "PLUGIN_INVOKE_CALLBACK",
							data: {
								callbackID: e,
								res: t
							}
						})
					}
					get invoke() {
						return (e, t, n) => new Promise((r => {
							n = "function" == typeof n ? n : () => {}, this.__messager.send({
								command: e,
								data: t,
								callbackID: s.call(this, n, r)
							})
						}))
					}
					get on() {
						return (e, t) => {
							this.__onEvent[e] = t
						}
					}
				}
			},
			3660: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(9916),
					i = n(7891),
					o = n(2389),
					s = {
						onBeforeInvoke: "APPSERVICE_ON_BEFORE_INVOKE",
						offBeforeInvoke: "APPSERVICE_OFF_BEFORE_INVOKE",
						onAfterInvoke: "APPSERVICE_ON_AFTER_INVOKE",
						offAfterInvoke: "APPSERVICE_OFF_AFTER_INVOKE",
						onBeforeTriggerEvent: "APPSERVICE_ON_BEFORE_TRIGGER_EVENT",
						offBeforeTriggerEvent: "APPSERVICE_OFF_BEFORE_TRIGGER_EVENT",
						onAfterTriggerEvent: "APPSERVICE_ON_AFTER_TRIGGER_EVENT",
						offAfterTriggerEvent: "APPSERVICE_OFF_AFTER_TRIGGER_EVENT"
					},
					a = {
						onBeforeInvoke: "WEBVIEW_ON_BEFORE_INVOKE",
						offBeforeInvoke: "WEBVIEW_OFF_BEFORE_INVOKE",
						onAfterInvoke: "WEBVIEW_ON_AFTER_INVOKE",
						offAfterInvoke: "WEBVIEW_OFF_AFTER_INVOKE",
						onBeforeTriggerEvent: "WEBVIEW_ON_BEFORE_TRIGGER_EVENT",
						offBeforeTriggerEvent: "WEBVIEW_OFF_BEFORE_TRIGGER_EVENT",
						onAfterTriggerEvent: "WEBVIEW_ON_AFTER_TRIGGER_EVENT",
						offAfterTriggerEvent: "WEBVIEW_OFF_AFTER_TRIGGER_EVENT"
					};
				class l extends r.default {
					constructor(e) {
						super(e), this.callbackCounter = 1, this.callbackMap = {}, this.__messager.registerCallback((e => {
							const {
								command: t,
								data: n
							} = e;
							if ("SIMULATOR_PLUGIN_HOOK_CALLBACK" === t) {
								const {
									callbackID: e,
									args: t,
									eventName: r
								} = n;
								let i;
								i = r ? this.callbackMap[e].cb(r, t) : this.callbackMap[e].cb(t), Promise.resolve(i).then((t => {
									t && this.__messager.send({
										command: "SIMULATOR_PLUGIN_HOOK_CALLBACK_RETURN",
										data: t,
										callbackID: e
									})
								}))
							}
						}))
					}
					wrapCallback(e, t, n) {
						n = "function" == typeof n ? n : () => {}, this.deleteFromCallbackMap(e, t);
						const r = this.callbackCounter;
						return this.callbackMap[r] = {
							cb: n,
							type: e,
							api: t
						}, this.callbackCounter++, r
					}
					deleteFromCallbackMap(e, t) {
						for (const n in this.callbackMap)
							if (this.callbackMap[n].type === e && this.callbackMap[n].api === t) {
								delete this.callbackMap[n];
								break
							}
					}
					recordOffMethod(e, t) {
						const [n, r] = t, i = e.split("_");
						i[1] = "ON";
						const o = i.join("_");
						this.deleteFromCallbackMap(o, n), this.invoke(e, {
							api: n,
							options: r
						})
					}
					recordOnMethod(e, t) {
						const [n, r, i] = t;
						this.invoke(e, {
							callbackID: this.wrapCallback(e, n, i),
							api: n,
							options: r
						})
					}
					get simulator() {
						return {
							appservice: this.appservice,
							webview: this.webview
						}
					}
					get appservice() {
						const e = s;
						return {
							onBeforeInvoke: (...t) => {
								this.recordOnMethod(e.onBeforeInvoke, t)
							},
							offBeforeInvoke: (...t) => {
								this.recordOffMethod(e.offBeforeInvoke, t)
							},
							onAfterInvoke: (...t) => {
								this.recordOnMethod(e.onAfterInvoke, t)
							},
							offAfterInvoke: (...t) => {
								this.recordOffMethod(e.offAfterInvoke, t)
							},
							onBeforeTriggerEvent: (...t) => {
								this.recordOnMethod(e.onBeforeTriggerEvent, t)
							},
							offBeforeTriggerEvent: (...t) => {
								this.recordOffMethod(e.offBeforeTriggerEvent, t)
							},
							onAfterTriggerEvent: (...t) => {
								this.recordOnMethod(e.onAfterTriggerEvent, t)
							},
							offAfterTriggerEvent: (...t) => {
								this.recordOffMethod(e.offAfterTriggerEvent, t)
							}
						}
					}
					get webview() {
						const e = a;
						return {
							onBeforeInvoke: (...t) => {
								this.recordOnMethod(e.onBeforeInvoke, t)
							},
							offBeforeInvoke: (...t) => {
								this.recordOffMethod(e.offBeforeInvoke, t)
							},
							onAfterInvoke: (...t) => {
								this.recordOnMethod(e.onAfterInvoke, t)
							},
							offAfterInvoke: (...t) => {
								this.recordOffMethod(e.offAfterInvoke, t)
							},
							onBeforeTriggerEvent: (...t) => {
								this.recordOnMethod(e.onBeforeTriggerEvent, t)
							},
							offBeforeTriggerEvent: (...t) => {
								this.recordOffMethod(e.offBeforeTriggerEvent, t)
							},
							onAfterTriggerEvent: (...t) => {
								this.recordOnMethod(e.onAfterTriggerEvent, t)
							},
							offAfterTriggerEvent: (...t) => {
								this.recordOffMethod(e.offAfterTriggerEvent, t)
							}
						}
					}
				}
				t.default = () => {
					const e = window.navigator.userAgent.match(/pluginid\/(\S*)/),
						t = e ? e[1] : "";
					if (t) {
						const e = new l(t);
						Object.defineProperty(window, "wechatide", {
							value: o.createWechatideApiFactoryAndRegisterActors(e, t, {
								simulator: !0
							}),
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), Object.defineProperty(window, "pluginStorage", {
							value: new i.default,
							writable: !1,
							enumerable: !1,
							configurable: !1
						}), window.dispatchEvent(new CustomEvent("wechatideReady", {
							detail: window.wechatide
						})), window.dispatchEvent(new CustomEvent("pluginStorageReady", {
							detail: window.pluginStorage
						}))
					}
				}
			},
			7891: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = class {
					async getItem(e) {
						return (await window.wechatide.invoke("PLUGIN_STORAGE_GET_ITEM", {
							key: e
						})).value
					}
					async setItem(e, t) {
						await window.wechatide.invoke("PLUGIN_STORAGE_SET_ITEM", {
							key: e,
							value: t
						})
					}
					async removeItem(e) {
						await window.wechatide.invoke("PLUGIN_STORAGE_REMOVE_ITEM", {
							key: e
						})
					}
				}
			},
			2389: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.createWechatideApiFactoryAndRegisterActors = void 0;
				const r = n(6754),
					i = n(1303),
					o = n(8556),
					s = n(7106),
					a = n(9400);
				t.createWechatideApiFactoryAndRegisterActors = function(e, t, n) {
					const l = window.navigator.userAgent,
						c = l.match(/appVersion\/(\S*)/),
						u = c ? c[1] : "",
						d = new r.ExtHostDevtoolsParticipant(e),
						f = new o.ExtHostToolbarParticipant(e),
						h = new s.ExtHostProjectParticipant(e),
						p = {
							sendAuthRequest: () => d.sendAuthRequest(),
							onWillUpload: (e, t, n) => d.getOnWillUploadEvent()(e, t, n),
							onDidBuild: (e, t, n) => d.getOnDidBuildEvent()(e, t, n),
							openProject: (e, t) => h.openProject(e, t),
							getProjectInfo: () => h.getProjectInfo(),
							showModal: e => d.showModal(e),
							setStorage: (e, t) => d.setStorage(e, t),
							getStorage: e => d.getStorage(e),
							removeStorage: e => d.removeStorage(e),
							onThemeChange: (e, t, n) => d.getOnDidThemeChangeEvent()(e, t, n),
							onLocaleChange: (e, t, n) => d.getOnDidLocaleChangeEvent()(e, t, n),
							openExternal: e => d.openExternal(e),
							openIdeplugin: e => d.openIdeplugin(e)
						};
					let g = "window";
					(null == n ? void 0 : n.hybird) ? g = "hybird": (null == n ? void 0 : n.simulator) ? g = "simulator" : (null == n ? void 0 : n.entrance) && (g = "entrance");
					const m = {
						appVersion: u,
						env: g,
						invoke: e.invoke,
						on: e.on
					};
					if (null == n ? void 0 : n.hybird) {
						const t = /hybirdCached(\S*)/.test(l),
							n = new i.ExtHostHybirdParticipant(e),
							r = {
								isCached: t,
								getProjectStatus: () => n.getProjectStatus(),
								init: (e, t) => n.init(e, t),
								changeCode: (e, t) => n.changeCode(e, t),
								changeToolbar: (e, t) => n.changeToolbar(e, t),
								changeSimulator: e => n.changeSimulator(e),
								getLayout: () => n.getLayout(),
								onDidSimulatorChange: (e, t, n) => d.getOnSimulatorChangeEvent()(e, t, n),
								onDidDevtoolsChange: (e, t, n) => d.getOnDevtoolsChangeEvent()(e, t, n),
								moveDown: () => n.moveDown(),
								moveUp: () => n.moveUp(),
								addToolbarItems: e => f.getToolbarAddParticipate("HYBIRD")(e),
								removeToolbarItems: e => f.removeToolbarParticipate("HYBIRD")(e),
								getFiles: () => n.getFiles(),
								hideLoading: () => n.hideLoading(),
								showLoading: () => n.showLoading()
							};
						m.hybird = r
					}
					if ((null == n ? void 0 : n.simulator) && (m.simulator = e.simulator, m.appservice = e.simulator.appservice, m.webview = e.simulator.webview), null == n ? void 0 : n.entrance) {
						const t = new a.ExtHostEntranceParticipant(e),
							n = {
								onWillCreateProject: (e, n, r) => t.getOnWillCreateProjectEvent()(e, n, r),
								showModal: e => d.showModal(e),
								openExternal: e => d.openExternal(e)
							};
						m.entrance = n
					} else m.workspace = p;
					return m
				}
			},
			5896: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.errcode = void 0, t.errcode = {
					SYSTEM_ERROR: -1,
					SUCCESS: 0,
					AUTH_NOT_LOGIN: 10001,
					AUTH_LOGIN_NOT_MATCH_APPID: 10002,
					AUTH_USER_REJECT: 10003,
					AUTH_NOT_DECLARATION: 10004,
					INVALID_PARAMS: 20001,
					COMPILE_HOT_RELOAD_ERROR: 30001
				}
			},
			6754: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ExtHostDevtoolsParticipant = void 0;
				const r = n(5887);
				t.ExtHostDevtoolsParticipant = class {
					constructor(e, t = {
						timeout: 18e4,
						errors: 3
					}) {
						this.messager = e, this._thresholds = t, this._callbacks = new r.LinkedList, this._callbacksBuild = new r.LinkedList, this._callbacksTheme = new r.LinkedList, this._callbacksLocale = new r.LinkedList, this._badListeners = new WeakMap, this._callbacksSimulatorChange = new r.LinkedList, this._callbacksDevtoolsChange = new r.LinkedList, this.messager.on("WORKSPACE_PAERICIPATE_IN_UPLOAD", ((e, t) => {
							this._callbacks.isEmpty() || this.participate(e).then((e => {
								this.messager.callback(t, e)
							}))
						})), this.messager.on("WORKSPACE_PAERICIPATE_IN_BUILD", ((e, t) => {
							this._callbacksBuild.isEmpty() || this.participateBuild(e).then((e => {
								this.messager.callback(t, e)
							}))
						})), this.messager.on("WORKSPACE_ON_SIMULATOR_CHANGE", (e => {
							for (const [t, n] of [...this._callbacksSimulatorChange]) t.apply(n, [e])
						})), this.messager.on("WORKSPACE_ON_DEVTOOLS_CHANGE", (e => {
							for (const [t, n] of [...this._callbacksDevtoolsChange]) t.apply(n, [e])
						})), this.messager.on("THEME_CHANGE", (e => {
							for (const [t, n] of [...this._callbacksTheme]) t.apply(n, [e])
						})), this.messager.on("LOCALE_CHANGE", (e => {
							for (const [t, n] of [...this._callbacksLocale]) t.apply(n, [e])
						}))
					}
					async participate(e) {
						return new Promise(((t, n) => {
							setTimeout((() => n(new Error(`Aborted onWillUpload-event after ${this._thresholds.timeout}ms`))), this._thresholds.timeout), this.$participateInUpload(e).then((e => (console.warn("wimainThread", e), e))).then(t, n)
						}))
					}
					async participateBuild(e) {
						return new Promise(((t, n) => {
							setTimeout((() => n(new Error(`Aborted onDidBuild-event after ${this._thresholds.timeout}ms`))), this._thresholds.timeout), this.$participateInBuild(e).then((e => (console.warn("wimainThread", e), e))).then(t, n)
						}))
					}
					dispose() {
						this._callbacks.clear(), this._callbacksBuild.clear(), this._callbacksTheme.clear(), this._callbacksLocale.clear(), this._callbacksSimulatorChange.clear(), this._callbacksDevtoolsChange.clear()
					}
					getOnSimulatorChangeEvent() {
						return (e, t, n) => {
							const r = {
								dispose: this._callbacksSimulatorChange.push([e, t, "extension"])
							};
							return Array.isArray(n) && n.push(r), this.messager.invoke("REGISTER_SIMULATOR_CHANGE_PARTICIPANT", {}), r
						}
					}
					getOnDevtoolsChangeEvent() {
						return (e, t, n) => {
							const r = {
								dispose: this._callbacksDevtoolsChange.push([e, t, "extension"])
							};
							return Array.isArray(n) && n.push(r), this.messager.invoke("REGISTER_DEVTOOLS_CHANGE_PARTICIPANT", {}), r
						}
					}
					getOnWillUploadEvent() {
						return (e, t, n) => {
							const r = {
								dispose: this._callbacks.push([e, t, "extension"])
							};
							return Array.isArray(n) && n.push(r), this.messager.invoke("REGISTER_UPLOAD_PARTICIPANT", {}), r
						}
					}
					getOnDidBuildEvent() {
						return (e, t, n) => {
							const r = {
								dispose: this._callbacksBuild.push([e, t, "extension"])
							};
							return Array.isArray(n) && n.push(r), this.messager.invoke("REGISTER_BUILD_PARTICIPANT", {}), r
						}
					}
					async $participateInUpload(e) {
						let t = !1;
						const n = setTimeout((() => t = !0), this._thresholds.timeout),
							r = [];
						try {
							for (const n of [...this._callbacks]) {
								if (t) break;
								const i = await this._deliverEventAsyncAndBlameBadListeners(n, e);
								r.push(...i)
							}
						} finally {
							clearTimeout(n)
						}
						return r
					}
					async $participateInBuild(e) {
						let t = !1;
						const n = setTimeout((() => t = !0), this._thresholds.timeout),
							r = [];
						try {
							for (const n of [...this._callbacksBuild]) {
								if (t) break;
								const i = await this._deliverEventAsyncAndBlameBadListeners(n, e);
								r.push(...i)
							}
						} finally {
							clearTimeout(n)
						}
						return r
					}
					_deliverEventAsyncAndBlameBadListeners([e, t, n], r) {
						const i = this._badListeners.get(e);
						return "number" == typeof i && i > this._thresholds.errors ? Promise.resolve([]) : this._deliverEventAsync(n, e, t, r).then((e => e), (t => {
							if (!(t instanceof Error) || "concurrent_edits" !== t.message) {
								const t = this._badListeners.get(e);
								this._badListeners.set(e, t ? t + 1 : 1), "number" == typeof t && this._thresholds.errors
							}
							return []
						}))
					}
					_deliverEventAsync(e, t, n, r) {
						const i = [],
							o = Object.freeze(Object.assign(Object.assign({}, r), {
								waitUntil(e) {
									if (Object.isFrozen(i)) throw Error("waitUntil can not be called async");
									i.push(Promise.resolve(e))
								}
							}));
						try {
							t.apply(n, [o])
						} catch (e) {
							return Promise.reject(e)
						}
						return Object.freeze(i), new Promise(((e, t) => {
							const n = setTimeout((() => t(new Error("timeout"))), this._thresholds.timeout);
							return Promise.all(i).then((t => {
								clearTimeout(n), e(t)
							})).catch((e => {
								clearTimeout(n), t(e)
							}))
						})).then((e => e))
					}
					async openProject(e, t) {
						return this.messager.invoke("OPEN_PROJECT", {
							projectid: e,
							type: t
						})
					}
					async showModal(e) {
						return this.messager.invoke("SHOW_MODAL", e, e.success)
					}
					async openExternal(e) {
						return this.messager.invoke("OPEN_EXTERNAL", e)
					}
					async openIdeplugin(e) {
						return this.messager.invoke("OPEN_IDEPLUGIN", e)
					}
					sendAuthRequest() {
						return this.messager.invoke("SEND_AUTH_REQUEST_NEW", {})
					}
					setStorage(e, t) {
						return this.messager.invoke("PLUGIN_STORAGE_SET_ITEM", {
							key: e,
							value: t
						})
					}
					getStorage(e) {
						return this.messager.invoke("PLUGIN_STORAGE_GET_ITEM", {
							key: e
						})
					}
					removeStorage(e) {
						return this.messager.invoke("PLUGIN_STORAGE_REMOVE_ITEM", {
							key: e
						})
					}
					getOnDidThemeChangeEvent() {
						return (e, t, n) => {
							const r = {
								dispose: this._callbacksTheme.push([e, t, "extension"])
							};
							return Array.isArray(n) && n.push(r), r
						}
					}
					getOnDidLocaleChangeEvent() {
						return (e, t, n) => {
							const r = {
								dispose: this._callbacksLocale.push([e, t, "extension"])
							};
							return Array.isArray(n) && n.push(r), r
						}
					}
				}
			},
			9400: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ExtHostEntranceParticipant = void 0;
				const r = n(5887);
				t.ExtHostEntranceParticipant = class {
					constructor(e, t = {
						timeout: 18e4,
						errors: 3
					}) {
						this.messager = e, this._thresholds = t, this._callbacks = new r.LinkedList, this._badListeners = new WeakMap, this._callbacksCreateProject = new r.LinkedList, this.messager.on("ENTRANCE_PAERICIPATE_IN_CREATE_PROJECT", ((e, t) => {
							this.participateBuild(e).then((e => {
								this.messager.callback(t, e)
							}))
						}))
					}
					getOnWillCreateProjectEvent() {
						return (e, t, n) => {
							const r = {
								dispose: this._callbacksCreateProject.push([e, t, "extension"])
							};
							return Array.isArray(n) && n.push(r), r
						}
					}
					async participateBuild(e) {
						return new Promise(((t, n) => {
							setTimeout((() => n(new Error(`Aborted onDidBuild-event after ${this._thresholds.timeout}ms`))), this._thresholds.timeout), this.$participateInBuild(e).then((e => (console.warn("wimainThread", e), e))).then(t, n)
						}))
					}
					async $participateInBuild(e) {
						let t = !1;
						const n = setTimeout((() => t = !0), this._thresholds.timeout),
							r = [];
						try {
							for (const n of [...this._callbacksCreateProject]) {
								if (t) break;
								const i = await this._deliverEventAsyncAndBlameBadListeners(n, e);
								r.push(...i)
							}
						} finally {
							clearTimeout(n)
						}
						return r
					}
					_deliverEventAsyncAndBlameBadListeners([e, t, n], r) {
						const i = this._badListeners.get(e);
						return "number" == typeof i && i > this._thresholds.errors ? Promise.resolve([]) : this._deliverEventAsync(n, e, t, r).then((e => e), (t => {
							if (!(t instanceof Error) || "concurrent_edits" !== t.message) {
								const t = this._badListeners.get(e);
								this._badListeners.set(e, t ? t + 1 : 1), "number" == typeof t && this._thresholds.errors
							}
							return []
						}))
					}
					_deliverEventAsync(e, t, n, r) {
						const i = [],
							o = Object.freeze(Object.assign(Object.assign({}, r), {
								waitUntil(e) {
									if (Object.isFrozen(i)) throw Error("waitUntil can not be called async");
									i.push(Promise.resolve(e))
								}
							}));
						try {
							t.apply(n, [o])
						} catch (e) {
							return Promise.reject(e)
						}
						return Object.freeze(i), new Promise(((e, t) => {
							const n = setTimeout((() => t(new Error("timeout"))), this._thresholds.timeout);
							return Promise.all(i).then((t => {
								clearTimeout(n), e(t)
							})).catch((e => {
								clearTimeout(n), t(e)
							}))
						}))
					}
				}
			},
			1303: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ExtHostHybirdParticipant = void 0;
				const r = n(5896),
					i = n(2185),
					{
						arrayBufferToBase64: o,
						isKindOfArrayBuffer: s
					} = i;
				t.ExtHostHybirdParticipant = class {
					constructor(e, t = {
						timeout: 1500,
						errors: 3
					}) {
						this.messager = e, this._thresholds = t
					}
					async init(e, t) {
						if (!s(e)) return {
							success: !1,
							errMsg: "data is not arraybuffer",
							errCode: r.errcode.INVALID_PARAMS
						};
						const n = await this.messager.invoke("HYBIRD_CODE_INIT", {
							data: o(e),
							__dataisab: !0,
							option: t
						});
						return console.log("resp", n), n
					}
					async changeCode(e, t) {
						const n = [];
						return e.forEach((e => {
							if ("delete" === e.type) n.push({
								path: e.path,
								type: e.type
							});
							else if (s(e.data)) {
								const t = e.data;
								n.push({
									path: e.path,
									type: "write",
									data: o(t),
									__dataisab: !0
								})
							} else "string" == typeof e.data ? n.push({
								path: e.path,
								data: e.data,
								type: "write",
								__dataisab: !1
							}) : console.warn(`changeCode ignore ${e.path}`)
						})), this.messager.invoke("HYBIRD_CHANGE_FILE", {
							items: n,
							option: t
						})
					}
					async changeToolbar(e, t) {
						return this.messager.invoke("HYBIRD_SET_TOOLBAR", {
							show: e,
							option: t
						}), {
							success: !0,
							errCode: r.errcode.SUCCESS
						}
					}
					async changeSimulator(e) {
						return this.messager.invoke("HYBIRD_SET_SIMULATOR", {
							show: e
						}), {
							success: !0,
							errCode: r.errcode.SUCCESS
						}
					}
					async getLayout() {
						return this.messager.invoke("HYBIRD_GET_LAYOUT", {})
					}
					async moveDown() {
						return this.messager.invoke("HYBIRD_PLUGIN_MOVE_DOWN", {})
					}
					async moveUp() {
						return this.messager.invoke("HYBIRD_PLUGIN_MOVE_UP", {})
					}
					async getFiles() {
						return this.messager.invoke("HYBIRD_GET_FILES", {})
					}
					async getProjectStatus() {
						return this.messager.invoke("HYBIRD_GET_PROJECT_STATUS", {})
					}
					async hideLoading() {
						return this.messager.invoke("HYBIRD_HIDE_LOADING", {})
					}
					async showLoading() {
						return this.messager.invoke("HYBIRD_SHOW_LOADING", {})
					}
				}
			},
			7106: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ExtHostProjectParticipant = void 0;
				t.ExtHostProjectParticipant = class {
					constructor(e, t = {
						timeout: 1500,
						errors: 3
					}) {
						this.messager = e, this._thresholds = t
					}
					async openProject(e, t) {
						return this.messager.invoke("OPEN_PROJECT", {
							projectid: e,
							type: t
						})
					}
					async getProjectInfo() {
						return this.messager.invoke("GET_PROJECT_INFO", {})
					}
				}
			},
			8556: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ExtHostToolbarParticipant = void 0;
				const r = n(5896),
					i = n(5887);
				t.ExtHostToolbarParticipant = class {
					constructor(e, t = {
						timeout: 1500,
						errors: 3
					}) {
						this.messager = e, this._thresholds = t, this._callbacks = new i.LinkedList, this._badListeners = new WeakMap, this._cbId = 0, this._clickCb = {}, this.messager.on("TOOLBAR_ON_CLICK", (e => {
							const {
								id: t
							} = e;
							this._clickCb[t] && this._clickCb[t].callback(e)
						}))
					}
					getToolbarAddParticipate(e) {
						return async t => {
							for (const e of t) {
								if (!e.id) return {
									success: !1,
									errMsg: "Toolbar item should have id",
									errCode: r.errcode.INVALID_PARAMS
								};
								e.onClick && "function" == typeof e.onClick && (this._clickCb[e.id] = {
									callback: e.onClick
								}, delete e.onClick)
							}
							return this.messager.invoke(`${e}_TOOLBAR_ADD_ITEMS`, {
								items: t
							})
						}
					}
					removeToolbarParticipate(e) {
						return async t => this.messager.invoke(`${e}_TOOLBAR_REMOVE_ITEMS`, {
							ids: t
						})
					}
				}
			},
			7195: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.evaluate = void 0;
				const r = n(1132),
					i = e => Object.prototype.toString.call(e).slice(8, -1).toLowerCase();

				function o(e) {
					try {
						let t = e.split(".").reduce(((e, t, n, r) => e + parseInt(t, 10) * Math.pow(1e3, r.length - n - 1)), 0);
						return isNaN(t) && (t = 999999999), t
					} catch (e) {
						return 999999999
					}
				}

				function s(e, t, n) {
					let i;
					const o = 1 === n ? r.locales.config.EMBED_WARNINGS : r.locales.config.EMBED_ERRORS;
					i = "bbs" === t.linkType ? r.locales.config.COMMUNITY_RELATED_POST_RECOMMENDATION : "doc" === t.linkType ? r.locales.config.DOCUMENT_RECOMMENDATION : r.locales.config.ARTICLE_RECOMMENDS;
					try {
						console.group(`${new Date} ${i}`), console.group(`${r.locales.config.INFO_DISPLAY_ORIGINAL_INFORMATION.format(o)}`), 1 === n ? function(...e) {
							(__global.consoleWarn || console.warn)(...e)
						}(...JSON.parse(e)) : function(...e) {
							(__global.consoleError || console.error)(...e)
						}(...JSON.parse(e)), console.groupEnd(), t.explanation && console.log(decodeURIComponent(encodeURIComponent(t.explanation))), console.log(`${r.locales.config.INFO_DISPLAY_MORE_INFORMATION.format(o,t.link)}`), console.groupEnd()
					} catch (e) {
						throw console.groupEnd(), console.groupEnd(), e
					}
				}
				let a;

				function l(e, t) {
					if (function() {
							if (!a && (null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.bbsConfig)) {
								a = JSON.parse(JSON.stringify((null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.bbsConfig) || []));
								for (const e of a) {
									const t = e.config;
									if (t.scope && "array" === i(t.scope) && t.scope.length > 0)
										for (const e of t.scope)
											if ("lib" === e.type) {
												const t = i(e.target);
												"string" === t && (e.targetLibVersionNumbers = [o(e.target)]), "array" === t && (e.targetLibVersionNumbers = e.target.map((e => o(e))))
											}
								}
							}
						}(), !a || 0 === a.length) return;
					const n = null === __devtoolsConfig || void 0 === __devtoolsConfig ? void 0 : __devtoolsConfig.libNumberVersion;
					for (const r of a) try {
						if (r.errorBefore || r.used) break;
						const o = r.config;
						let a = !0;
						if (o.scope && "array" === i(o.scope) && o.scope.length > 0) {
							a = !1;
							for (const e of o.scope)
								if ("lib" === e.type) {
									if (!n) continue;
									if (e.target) switch (e.operator) {
										case "=":
											for (const t of e.targetLibVersionNumbers)
												if (t === n) {
													a = !0;
													break
												} break;
										case "<":
											e.targetLibVersionNumbers[0] && n < e.targetLibVersionNumbers[0] && (a = !0);
											break;
										case ">":
											e.targetLibVersionNumbers[0] && n > e.targetLibVersionNumbers[0] && (a = !0);
											break;
										case "<=":
											e.targetLibVersionNumbers[0] && n <= e.targetLibVersionNumbers[0] && (a = !0);
											break;
										case ">=":
											e.targetLibVersionNumbers[0] && n >= e.targetLibVersionNumbers[0] && (a = !0)
									}
								}
						}
						if (!a) continue;
						if ("full" === o.matchType && o.match === e || "reg" === o.matchType && new RegExp(o.match).test(e)) {
							s(e, o, t), r.used = !0;
							break
						}
					} catch (e) {
						r && (r.errorBefore = !0)
					}
				}
				t.evaluate = function(e, t) {
					setTimeout((() => {
						l(e, t)
					}), 0)
				}
			},
			3360: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.__globalDocumentRemainForEngineIDE = t.__globalDocumentRemain = t.nodeGlobal = t.documentRemain = t.windowCanNotEnumerable = t.__globalWindowRemainForEngineIDE = t.windowRemain = void 0, t.windowRemain = {
					parent: !0,
					__global: !0,
					atob: !0,
					onload: !0,
					setTimeout: !0,
					setInterval: !0,
					clearTimeout: !0,
					clearInterval: !0,
					requestAnimationFrame: !0,
					cancelAnimationFrame: !0,
					WebGLRenderingContext: !0,
					innerWidth: !0,
					innerHeight: !0,
					require: !0,
					navigator: !0,
					self: !0,
					performance: !0,
					webkitURL: !0,
					scrollTo: !0,
					FontFace: !0,
					WeakRef: !0,
					FinalizationGroup: !0,
					FinalizationRegistry: !0,
					Path2D: !0,
					loadBabelMod: !0,
					TextDecoder: !0,
					TextEncoder: !0,
					AudioContext: !0,
					globalThis: !0,
					BigInt: !0,
					URL: !0,
					PromiseRejectionEvent: !0,
					WeixinJSContext: !0,
					BigInt64Array: !0,
					BigUint64Array: !0,
					Atomics: !0
				}, t.__globalWindowRemainForEngineIDE = {
					getComputedStyle: !0,
					Node: !0
				}, t.windowCanNotEnumerable = ["XMLHttpRequest", "WebSocket", "Audio", "DOMParser", "AudioContext", "WebGLRenderingContext", "WebAssembly"], t.documentRemain = {
					body: !0,
					createElement: !0,
					createDocumentFragment: !0,
					head: !0,
					fonts: !0,
					removeEventListener: !0,
					addEventListener: !0,
					readyState: !0,
					activeElement: !0,
					childNodes: !0,
					pointerLockElement: !0,
					exitPointerLock: !0,
					dispatchEvent: !0,
					createTextNode: !0,
					querySelectorAll: !0,
					styleSheets: !0
				}, t.nodeGlobal = ["Object", "Function", "Array", "Number", "parseFloat", "parseInt", "Boolean", "String", "Symbol", "Date", "Promise", "RegExp", "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError", "JSON", "Math", "Intl", "ArrayBuffer", "Uint8Array", "Int8Array", "Uint16Array", "Int16Array", "Uint32Array", "Int32Array", "Float32Array", "Float64Array", "Uint8ClampedArray", "DataView", "Map", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect", "Infinity", "NaN", "undefined", "decodeURI", "decodeURIComponent", "__setLog__", "__setTaint__", "__taintConstants__", "encodeURI", "encodeURIComponent", "escape", "unescape", "eval", "isFinite", "isNaN", "WebAssembly", "console", "DTRACE_NET_SERVER_CONNECTION", "DTRACE_NET_STREAM_END", "DTRACE_HTTP_SERVER_REQUEST", "DTRACE_HTTP_SERVER_RESPONSE", "DTRACE_HTTP_CLIENT_REQUEST", "DTRACE_HTTP_CLIENT_RESPONSE", "global", "GLOBAL", "root", "Buffer", "clearImmediate", "clearInterval", "clearTimeout", "setImmediate", "setInterval", "setTimeout"], t.__globalDocumentRemain = {
					readyState: !0,
					onreadystatechange: !0,
					createElement: !0,
					getElementById: !0,
					addEventListener: !0,
					removeEventListener: !0,
					getElementsByTagName: !0,
					Image: !0
				}, t.__globalDocumentRemainForEngineIDE = {
					createElement: !0,
					body: !0,
					documentElement: !0,
					activeElement: !0,
					scripts: !0,
					addEventListener: !0,
					removeEventListener: !0,
					createEvent: !0,
					activeElementNS: !0,
					createTextNode: !0,
					querySelectorAll: !0,
					querySelector: !0,
					destroy: !0,
					createComment: !0,
					currentScript: !0,
					onkeydown: !0,
					getElementById: !0,
					head: !0,
					scrollingElement: !0,
					getElementsByClassName: !0,
					getElementsByTagName: !0,
					createElementNS: !0,
					createRange: !0,
					execCommand: !0,
					writeln: !0,
					nodeType: !0,
					defaultView: !0,
					ownerDocument: !0
				}, t.default = {
					windowRemain: t.windowRemain,
					windowCanNotEnumerable: t.windowCanNotEnumerable,
					documentRemain: t.documentRemain,
					nodeGlobal: t.nodeGlobal,
					__globalDocumentRemain: t.__globalDocumentRemain,
					__globalDocumentRemainForEngineIDE: t.__globalDocumentRemainForEngineIDE,
					__globalWindowRemainForEngineIDE: t.__globalWindowRemainForEngineIDE
				}
			},
			1779: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(3360);
				t.default = () => {
					const e = Object.getOwnPropertyNames(window).filter((e => r.nodeGlobal.indexOf(e) < 0));
					for (const t of e) {
						if (r.windowRemain[t]) continue;
						const e = Object.getOwnPropertyDescriptor(window, t);
						e && !0 !== e.configurable || delete window[t]
					}
					for (const e in document) {
						if (r.documentRemain[e]) continue;
						const t = Object.getOwnPropertyDescriptor(document, e);
						t && !0 !== t.configurable || (delete document[e], Object.defineProperty(document, e, {
							configurable: !0,
							value: void 0
						}))
					}
					for (const e in window.__global.document) {
						if (r.__globalDocumentRemain[e]) continue;
						const t = Object.getOwnPropertyDescriptor(window.__global.document, e);
						t && !0 !== t.configurable || (delete window.__global.document[e], Object.defineProperty(window.__global.document, e, {
							configurable: !0,
							value: void 0
						}))
					}
				}
			},
			7019: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(7195),
					i = {
						IGNORE_ERROR_REGS: [],
						IGNORE_WARNING_REGS: [{
							regExp: /^WXMLRT_\$gwx:/,
							allowReportOnce: !0,
							matchContentCache: []
						}],
						shouldIgnoreWarn: (...e) => e.some((e => "string" == typeof e && i.IGNORE_WARNING_REGS.some((t => !!t.regExp.test(e) && (!(t.allowReportOnce && !t.matchContentCache.includes(e)) || (t.matchContentCache.push(e), !1)))))),
						shouldIgnoreError: (...e) => e.some((e => "string" == typeof e && i.IGNORE_ERROR_REGS.some((t => !!t.regExp.test(e) && (!(t.allowReportOnce && !t.matchContentCache.includes(e)) || (t.matchContentCache.push(e), !1))))))
					},
					o = [new Set, new Set];
				const s = (e, t) => {
					try {
						const a = JSON.stringify(e, ((e, t) => t instanceof Error && t.stack ? t.stack : "string" == typeof t && t.length > 500 ? `${t.substr(0,500)}...` : t)),
							l = o[t - 1];
						l.has(a) || (__devtoolsConfig.logHandleInSimulator ? r.evaluate(a, t) : (n = {
							message: a,
							level: t
						}, (null === __global || void 0 === __global ? void 0 : __global.messager) ? null === __global || void 0 === __global || __global.messager.send({
							command: "CONSOLE_MESSAGE",
							data: n
						}) : (null === (i = window.parent.__global) || void 0 === i ? void 0 : i.messager) && (null === (s = window.parent.__global) || void 0 === s || s.messager.send({
							command: "CONSOLE_MESSAGE",
							data: n
						}))), l.size > 500 && l.clear(), l.add(a))
					} catch (e) {}
					var n, i, s
				};
				t.default = () => {
					__global || (__global = {});
					const e = __global.consoleError = console.error.bind(console),
						t = __global.consoleWarn = console.warn.bind(console);
					console.error = function(...t) {
						if (!i.shouldIgnoreError(...t)) return s(t, 2), e(...t)
					}, console.warn = function(...e) {
						if (!i.shouldIgnoreWarn(...e)) return s(e, 1), t(...e)
					}
				}
			},
			6100: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = () => {
					window.addEventListener("contextmenu", (e => {
						e.preventDefault(), window.__global.alert(`contextmenu:${e.clientX}:${e.clientX}`)
					}), !0)
				}
			},
			4269: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				let n = !1;

				function r(e) {
					e.preventDefault(), e.stopPropagation()
				}

				function i(e) {
					e.preventDefault(), e.stopPropagation()
				}
				const o = () => {
					if (n) return;
					const e = document.body;
					e && (e.addEventListener("dragover", r, !1), e.addEventListener("drop", i, !1)), n = !0
				};
				t.default = () => {
					"complete" === document.readyState || "interactive" === document.readyState ? o() : document.onreadystatechange = () => {
						"interactive" !== document.readyState && "complete" !== document.readyState || o()
					}
				}
			},
			3873: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(3360),
					i = n(6248),
					o = n(5165),
					{
						isGameEngineIDEIframe: s
					} = i.default;
				t.default = () => {
					if (s) return;
					o.default(), window.__global.HTMLUnknownElement = HTMLUnknownElement, window.__global.HTMLElement = HTMLElement, window.__global.HTMLDocument = HTMLDocument, window.__global.Function = Function, window.__global.fetch = window.fetch.bind(window), window.__global.addEventListener = window.addEventListener.bind(window), window.__global.removeEventListener = window.removeEventListener.bind(window), window.__global.postMessage = window.postMessage.bind(window);
					const e = Object.getOwnPropertyNames(window).filter((e => r.nodeGlobal.indexOf(e) < 0)),
						t = Object.assign({}, r.windowRemain, r.__globalWindowRemainForEngineIDE);
					for (const n of e) {
						if (t[n]) continue;
						const e = Object.getOwnPropertyDescriptor(window, n);
						e && !0 !== e.configurable || delete window[n]
					}
					for (const e in document) {
						if (r.documentRemain[e]) continue;
						const t = Object.getOwnPropertyDescriptor(document, e);
						t && !0 !== t.configurable || (delete document[e], Object.defineProperty(document, e, {
							configurable: !0,
							value: void 0
						}))
					}
					const n = Object.assign({}, r.__globalDocumentRemain, r.__globalDocumentRemainForEngineIDE);
					for (const e in window.__global.document) {
						if (n[e]) continue;
						const t = Object.getOwnPropertyDescriptor(window.__global.document, e);
						t && !0 !== t.configurable || (delete window.__global.document[e], Object.defineProperty(window.__global.document, e, {
							configurable: !0,
							value: void 0
						}))
					}
				}
			},
			6324: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = () => {
					window.addEventListener("message", (e => {
						const t = e.data;
						t && "object" == typeof t && function(e) {
							if (e && ("geolocation" === e.module || "locationPicker" === e.module)) {
								let t = e;
								"geolocation" === e.module && (t = {
									module: "locationPicker",
									latlng: {
										lat: e.lat,
										lng: e.lng
									},
									poiaddress: `${e.province}${e.city}`,
									poiname: e.addr,
									cityname: e.city
								}), window.__global.alert(`map handle:${JSON.stringify(t)}`)
							}
						}(t)
					}))
				}
			},
			5165: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = () => {
					Element.prototype._addEventListener = Element.prototype.addEventListener, Element.prototype._removeEventListener = Element.prototype.removeEventListener, Element.prototype.addEventListener = function(e, t, n = !1) {
						this._addEventListener(e, t, n), this.eventListenerList || (this.eventListenerList = {}), this.eventListenerList[e] || (this.eventListenerList[e] = []), this.eventListenerList[e].push({
							type: e,
							listener: t,
							useCapture: n
						})
					}, Element.prototype.removeEventListener = function(e, t, n = !1) {
						this._removeEventListener(e, t, n), this.eventListenerList || (this.eventListenerList = {}), this.eventListenerList[e] || (this.eventListenerList[e] = []);
						for (let r = 0; r < this.eventListenerList[e].length; r++)
							if (this.eventListenerList[e][r].listener === t && this.eventListenerList[e][r].useCapture === n) {
								this.eventListenerList[e].splice(r, 1);
								break
							} 0 === this.eventListenerList[e].length && delete this.eventListenerList[e]
					}, Element.prototype.getEventListeners = function(e) {
						return this.eventListenerList || (this.eventListenerList = {}), void 0 === e ? this.eventListenerList : this.eventListenerList[e]
					}
				}
			},
			6935: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.hackEval = t.hackRequire = void 0, t.hackRequire = function() {
					window.__global || (window.__global = {}), window.__global.require = window.require, window.__global.__engineInnerNodeRequire = window.require
				}, t.hackEval = function() {
					window.__global || (window.__global = {}), window.__global.__hackEval = window.eval
				}
			},
			4497: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.hackRequireModule = void 0;
				t.hackRequireModule = function() {
					const e = window.require,
						t = window.process,
						n = e("path"),
						r = e("module"),
						i = e("fs"),
						o = ["path", "sharedMemory", "skyline-addon"];

					function s(e) {
						const t = e.split("/")[0];
						if (!o.includes(t)) throw new Error("the module not allowed");
						return !0
					}
					window.__global || (window.__global = {}), window.__global.safeSkylineRequire = function(t) {
						if (s(t)) return e(t)
					}, window.__global.safeSkylineRequireResolve = function(t) {
						return s(t) ? e.resolve(t) : ""
					}, window.__global.platform = t.platform, window.__global.arch = t.arch, delete window.require;
					const a = Object.create(null);

					function l(e) {
						const t = l.cache;
						if (null !== t) {
							const n = t.get(e);
							if (void 0 !== n) return n
						}
						let n;
						if (i.existsSync(e)) {
							n = i.statSync(e).isDirectory() ? 1 : 0
						} else n = -2;
						return null !== t && t.set(e, n), n
					}

					function c(e) {
						return 0 === l(e) && n.resolve(e)
					}

					function u(e, t) {
						for (const n of t) {
							const t = c(e + n);
							if (t) return t
						}
						return !1
					}

					function d(e, t) {
						const r = function(e) {
							const t = a[e];
							if (t) return t;
							const r = n.resolve(e, "package.json");
							try {
								const t = i.readFileSync(r, "utf8");
								return !!t && (a[e] = JSON.parse(t).main, a[e])
							} catch (e) {
								return !1
							}
						}(e);
						if (!r) return !1;
						const o = n.resolve(e, r);
						return c(o) || u(o, t) || u(n.resolve(o, "index"), t)
					}
					l.cache = new Map, r._findPath = function(e, t) {
						if (n.isAbsolute(e)) t = [""];
						else if (!t || 0 === t.length) return !1;
						const i = `${e}\0${1===t.length?t[0]:t.join("\0")}`,
							o = r._pathCache[i];
						if (o) return o;
						let s, a = e.length > 0 && 47 === e.charCodeAt(e.length - 1);
						a || (a = /(?:^|\/)\.?\.$/.test(e));
						for (const o of t) {
							if (o && l(o) < 1) continue;
							const t = n.resolve(o, e);
							let c;
							const f = l(t);
							if (a || (0 === f && (c = n.resolve(t)), c || (void 0 === s && (s = Object.keys(r._extensions)), c = u(t, s))), c || 1 !== f || (void 0 === s && (s = Object.keys(r._extensions)), c = d(t, s), c || (c = u(n.resolve(t, "index"), s))), c) return r._pathCache[i] = c, c
						}
						return !1
					};
					const f = r._resolveLookupPaths,
						h = "darwin" === t.platform,
						p = (t.execPath.includes("resources_mac") || t.execPath.includes("resources_win"), h ? n.join(t.execPath, "../../../../../../../../../Resources/package.nw") : n.join(t.execPath, "../code/package.nw"));

					function g(e) {
						e.push(n.join(p, "node_modules"))
					}
					r._resolveLookupPaths = function() {
						const e = f.apply(this, arguments),
							r = [],
							i = t.cwd();
						let o = !1;
						for (const t of e) r.push(t), o || n.dirname(t) !== i && n.dirname(t) !== n.dirname(i) || (o = !0, g(r));
						return o || (o = !0, g(r)), r
					}
				}
			},
			7707: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					const e = window.Date;
					window.Date = new Proxy(e, {
						construct(t, n) {
							const r = new e(...n);
							try {
								if (1 === n.length && "Invalid Date" !== r.toString()) {
									const e = n[0];
									if ("string" == typeof e) {
										const t = e.trim();
										if (!/^\d+(\/\d+\/\d+)?(\s+\d*:\s*\d*(:\s*\d*)?)?$/.test(t) && !/^\d+-\d+(-\d+)?(T\d+:\d+(:\d+)?(\.\d+)?((\+\d+(:\d+)+)|Z)?)?$/.test(t)) {
											const t = (new Error).stack.split("\n")[2].trim();
											console.warn(`${t}\nnew Date("${e}") 在部分 iOS 下无法正常使用，iOS 只支持 "yyyy/MM/dd"、"yyyy/MM/dd HH:mm:ss"、"yyyy-MM-dd"、"yyyy-MM-ddTHH:mm:ss"、"yyyy-MM-ddTHH:mm:ss+HH:mm" 的格式`)
										}
									}
								}
							} catch (e) {}
							return r
						}
					})
				}
			},
			4559: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const n = {},
					r = /\.(\\|\/)/,
					i = /\.js$/,
					o = window.CustomEvent,
					s = window.dispatchEvent.bind(window),
					a = window.document.createElement.bind(window.document),
					l = window.document.getElementsByTagName.bind(window.document);

				function c(e) {
					if (r.test(e)) return;
					if (i.test(e) || (e += ".js"), void 0 !== n[e]) return;
					n[e] = !0, s(new o("__babel_module_loading"));
					const t = a("script");
					t.src = e, t.onload = function() {
						n[e] = !1,
							function() {
								for (const e in n)
									if (n[e]) return !1;
								return !0
							}() && s(new o("__babel_module_loaded"))
					}, t.onerror = function() {
						throw new Error(`${e} load error`)
					}, l("head")[0].appendChild(t)
				}
				t.default = () => {
					window.loadBabelMod = function(e, t) {
						if (__global.asSubLoader)(null == t ? void 0 : t.sync) ? __global.asSubLoader.loadBabelModulesSync(e) : __global.asSubLoader.loadBabelModules(e);
						else
							for (const t of e) c(t)
					}
				}
			},
			1132: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.locales = t.FormatedString = void 0;
				const n = {
						COMMUNITY_RELATED_POST_RECOMMENDATION: "社区相关帖子推荐",
						DOCUMENT_RECOMMENDATION: "文档推荐",
						ARTICLE_RECOMMENDS: "文章推荐",
						INFO_DISPLAY_ORIGINAL_INFORMATION: "原%s信息",
						EMBED_WARNINGS: "警告",
						EMBED_ERRORS: "报错",
						INFO_DISPLAY_MORE_INFORMATION: "关于上述%s，点击查看更多信息：%s"
					},
					r = {
						COMMUNITY_RELATED_POST_RECOMMENDATION: "Community Related Post Recommendation",
						DOCUMENT_RECOMMENDATION: "Document Recommendation",
						ARTICLE_RECOMMENDS: "Article Recommends",
						INFO_DISPLAY_ORIGINAL_INFORMATION: "Original %s information",
						EMBED_WARNINGS: "warnings",
						EMBED_ERRORS: "errors",
						INFO_DISPLAY_MORE_INFORMATION: "About the above %s, Click here for more information: %s"
					};
				let i = "zh";

				function o(e) {
					if (e.__formated__) return e;
					for (const t in e) e[t] = new s(e[t]);
					return e.__formated__ = new s("1"), e
				}
				class s extends String {
					format(...e) {
						let t = this.toString();
						for (const n of e) t = t.replace("%s", n);
						return t
					}
				}
				t.FormatedString = s, t.locales = {
					setLocales(e) {
						i = e
					},
					get config() {
						return o("zh" === i ? n : r)
					}
				}
			},
			7803: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = () => {
					window.__wxjs_environment = "miniprogram"
				}
			},
			5503: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = () => {
					document.addEventListener("mousewheel", (e => {
						e.ctrlKey && e.preventDefault()
					}), {
						passive: !1
					})
				}
			},
			1917: (e, t) => {
				"use strict";

				function n(e) {
					var t;
					let n = {};
					if (window.__global.WeixinJSBridge.invoke("createBufferURL", {
							buffer: e
						}, (e => {
							n = e
						})), null === (t = null == n ? void 0 : n.errMsg) || void 0 === t ? void 0 : t.startsWith("createBufferURL:fail")) {
						throw new Error(n.errMsg)
					}
					return n.url
				}

				function r(e) {
					var t;
					let n = {};
					if (window.__global.WeixinJSBridge.invoke("revokeBufferURL", {
							url: e
						}, (e => {
							n = e
						})), null === (t = null == n ? void 0 : n.errMsg) || void 0 === t ? void 0 : t.startsWith("revokeBufferURL:fail")) {
						throw new Error(n.errMsg)
					}
					return n.result
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const i = {
					create(e, t) {
						null == t || t(-4)
					}
				};
				t.default = function() {
					window.NativeGlobal = {
						createBufferURL: n,
						revokeBufferURL: r,
						ARSession: i
					}
				}
			},
			6786: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const n = {
						origin: !0
					},
					r = () => {},
					i = (e, t) => {
						Object.setPrototypeOf(e, t);
						for (const n in t) try {
							e[n] = t[n]
						} catch (e) {}
					};
				t.default = () => {
					if (location.protocol.startsWith("chrome-extension")) return;
					const e = window.alert,
						t = window.prompt,
						o = XMLHttpRequest,
						s = new Set;
					let a, l, c;
					const u = {
						dialogDisable: !1,
						alert: function() {
							if (!window.__global.dialogDisable) return e.apply(window, arguments)
						},
						prompt: function() {
							if (!window.__global.dialogDisable) return t.apply(window, arguments)
						},
						parent: window.parent,
						Worker,
						WebSocket,
						XMLHttpRequest: o,
						FileReader,
						fetch: window.fetch.bind(window),
						atob: window.atob.bind(window),
						btoa: window.btoa.bind(window),
						TextEncoder: window.TextEncoder.bind(window),
						TextDecoder: window.TextDecoder.bind(window),
						requestAnimationFrame: window.requestAnimationFrame,
						cancelAnimationFrame: window.cancelAnimationFrame,
						requestIdleCallback: window.requestIdleCallback.bind(window),
						cancelIdleCallback: window.cancelIdleCallback.bind(window),
						setTimeout,
						clearTimeout,
						setInterval,
						CustomEvent,
						clearInterval,
						MutationObserver,
						Image,
						Audio,
						Blob,
						URL,
						navigator,
						BigInt,
						addEventListener: window.addEventListener.bind(window),
						removeEventListener: window.removeEventListener.bind(window),
						get canvasProto() {
							if (!a) {
								a = {};
								const e = document.createElement("canvas");
								i(a, Object.getPrototypeOf(e))
							}
							return a
						},
						get canvasWebGlContextProto() {
							if (!l) {
								l = {};
								const e = document.createElement("canvas").getContext("webgl");
								i(l, Object.getPrototypeOf(e))
							}
							return l
						},
						get canvas2dContextProto() {
							if (!c) {
								c = {};
								const e = document.createElement("canvas").getContext("2d");
								i(c, Object.getPrototypeOf(e))
							}
							return c
						},
						history: window.history,
						networkLog: e => {
							if (!s.has(e.reqId)) {
								if (!e.url) return;
								if ("wx.cloud.init" === e.url);
								else if (!(e.url.startsWith("wx.cloud.callFunction") || e.url.startsWith("wx.cloud.callContainer") || e.url.startsWith("gateway.call"))) return
							}
							try {
								const t = JSON.stringify(e),
									n = new o;
								n.addEventListener("load", (() => {})), n.addEventListener("error", r), n.open(e.method || "POST", `/networklog/${e.type}/${e.reqId}`, !0), n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), e.timestampMs && n.setRequestHeader("x-timestamp-ms", e.timestampMs.toString()), n.send(t), s.add(e.reqId)
							} catch (e) {
								throw console.error("networkLog xhr error", e), e
							}
						},
						createCustomImage: function(e, t) {
							let n = "",
								r = "";
							const i = window.__global.Image;
							return new class extends i {
								set src(t) {
									const r = e(t);
									n = r, super.src = "origin" !== super.referrerPolicy ? `${r}#devtools_no_referrer` : r
								}
								get src() {
									return t(n)
								}
								set referrerPolicy(e) {
									r = e, super.referrerPolicy = e
								}
								get referrerPolicy() {
									return r
								}
							}
						},
						document: {},
						Touch: window.Touch,
						TouchEvent: window.TouchEvent,
						SharedArrayBuffer: window.SharedArrayBuffer,
						Atomics: window.Atomics,
						WebAssembly: window.WebAssembly
					};
					for (const e in window.document)
						if (!n[e]) try {
							"function" == typeof window.document[e] ? u.document[e] = window.document[e].bind(document) : u.document[e] = window.document[e]
						} catch (e) {}
					window.__global = u
				}
			},
			2567: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					let e = window.setTimeout((() => {}));
					if ("number" == typeof e) return;
					const t = window.setTimeout,
						n = window.setInterval,
						r = window.clearTimeout,
						i = window.clearInterval;
					let o = 1,
						s = 1,
						a = !1;
					const l = {},
						c = {};

					function u() {
						var e;
						for (const t in l)(null === (e = l[t]) || void 0 === e ? void 0 : e._destroyed) && delete l[t];
						a = !1
					}
					window.setTimeout = function(...n) {
						const r = t.call(window, ...n),
							i = o++;
						return l[i] = r, a || (e = t(u, 1e4), a = !0), i
					}, window.clearTimeout = function(e) {
						const t = l[e];
						return delete l[e], r.call(window, t)
					}, window.setInterval = function(...e) {
						const t = n.call(window, ...e),
							r = s++;
						return c[r] = t, r
					}, window.clearInterval = function(e) {
						const t = c[e];
						return delete c[e], i.call(window, t)
					}, delete window.setImmediate, delete window.clearImmediate
				}
			},
			6113: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = () => {
					window.onerror = function(e, t, n, r, i) {
						try {
							return window.__global.WeixinJSBridge.__triggerOnEvent("onError", i), !0
						} catch (e) {}
						return !1
					}
				}
			},
			8422: e => {
				"use strict";
				const t = window.navigator || window.__global.navigator,
					n = window.WebSocket || window.__global.WebSocket,
					r = window.prompt || window.__global.prompt,
					i = t.userAgent.match(/port\/(\d*)/),
					o = i ? parseInt(i[1]) : 9974,
					s = `ws://127.0.0.1:${o}`;
				window.__maxConnectTryTime = 10;
				e.exports = class {
					constructor(e, t = !0) {
						this._protocol = e, this._needToken = t, this._ws = null, this._msgQueue = [], this._callback = new Set, this._parseJson = null, this.tryTime = 0, "complete" === document.readyState ? setTimeout((() => {
							this.connect()
						})) : window.addEventListener("load", (() => {
							this.connect()
						}))
					}
					connect() {
						if (!o) return;
						if (this.tryTime++, this.tryTime >= window.__maxConnectTryTime) return void console.error("当前应用通道断开且重连次数已满，请重新编译应用");
						let e = this._protocol;
						if (this._needToken) {
							e = `${e}#${r("GET_MESSAGE_TOKEN")}#`
						}
						this._ws = new n(s, e), this._ws.onopen = () => {
							const e = [].concat(this._msgQueue);
							this._msgQueue = [], e.forEach((e => {
								this.send(e)
							}))
						}, this._ws.onclose = () => {
							this._ws = null, setTimeout((() => {
								this.connect()
							}), 150)
						}, this._ws.onmessage = e => {
							try {
								const t = this._parseJson ? this._parseJson(e.data) : JSON.parse(e.data);
								this._callback.forEach((e => {
									try {
										e.call(this, t)
									} catch (e) {
										console.error("onmessage", e)
									}
								}))
							} catch (e) {
								console.error("onmessage", e)
							}
						}
					}
					send(e) {
						this._ws && this._ws.readyState === n.OPEN ? this._ws.send(JSON.stringify(e)) : this._msgQueue.push(e)
					}
					registerCallback(e) {
						"function" == typeof e && this._callback.add(e)
					}
					removeCallback(e) {
						this._callback.delete(e)
					}
				}
			},
			925: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(9594);
				t.default = class {
					constructor() {
						this._completed = !1, this._resolves = [], this.ReferenceObjects = {}, this._evaluateCompletion = this.evaluateCompletion.bind(this)
					}
					get completed() {
						return this._completed
					}
					set completed(e) {
						this._completed = e, e && this.wakeup()
					}
					async startAndWait() {
						await this.startTesting(), await new Promise((e => {
							this._resolves.push(e)
						}))
					}
					async wakeup() {
						await this.stopTesting(), this._resolves.forEach((e => {
							e()
						})), this._resolves = []
					}
					startTesting() {
						r.default.add(this._evaluateCompletion)
					}
					stopTesting() {
						r.default.remove(this._evaluateCompletion)
					}
					async evaluateCompletion() {
						this.completed = !0
					}
					async autoComplete() {
						throw new Error("not implement autoComplete")
					}
					setFutureObjectReferences(e) {
						this.ReferenceObjects = e
					}
				}
			},
			143: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Hooks = t.Criterion = void 0, t.Criterion = function(e, t, n) {
					return r => {
						r.prototype.$$type = e, r.prototype.$$context = t, r.prototype.$$contextOption = n
					}
				}, t.Hooks = function(e, t, n) {
					return (r, i) => {
						r[i].$$type = e, r[i].$$context = t, r[i].$$contextOption = n
					}
				}
			},
			5761: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.eventEmitter = void 0;
				class n {
					constructor() {
						this.events = Object.create(null)
					}
					has(e) {
						return this.events[e]
					}
					on(e, t) {
						this.events[e] || (this.events[e] = []), this.events[e].push(t)
					}
					emit(e, t) {
						if (!this.events[e]) return;
						this.events[e].forEach((e => e.call(this, t)))
					}
					async emitSync(e, t) {
						if (!this.events[e]) return;
						const n = this.events[e].map((async e => await e(t)));
						return await Promise.all(n)
					}
					off(e, t) {
						if (!this.events[e]) return;
						if (!t) return void(this.events[e] = null);
						const n = this.events[e].indexOf(t);
						this.events[e].splice(n, 1)
					}
					once(e, t) {
						const n = r => {
							t.call(this, r), this.off(e, n)
						};
						this.on(e, n)
					}
				}
				t.default = n, t.eventEmitter = new n
			},
			3413: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = class {
					constructor() {
						this.ReferenceObjects = {}
					}
					setFutureObjectReferences(e) {
						this.ReferenceObjects = e
					}
				}
			},
			2584: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.onEvent = t.onUpdate = void 0;
				const r = n(7833),
					i = n(925),
					o = n(3413),
					s = n(143),
					a = n(4478),
					l = n(5761),
					c = n(9594);
				t.onUpdate = {
					add: c.default.add.bind(c.default),
					remove: c.default.remove.bind(c.default)
				}, t.onEvent = {
					once: l.eventEmitter.once.bind(l.eventEmitter),
					add: l.eventEmitter.on.bind(l.eventEmitter),
					remove: l.eventEmitter.off.bind(l.eventEmitter),
					fire: (...e) => {
						window.__tutorial__.tutorialClient.triggerEvent(...e)
					},
					fireSync: async (...e) => {
						const t = window.__tutorial__.tutorialClient;
						await t.triggerEventSync(...e)
					}
				}, t.default = {
					isWebview: !1,
					MaskingClient: r.default,
					TutorialClient: a.default,
					Criterion: i.default,
					Hooks: o.default,
					decorators: s,
					onUpdate: t.onUpdate,
					onEvent: t.onEvent,
					tutorialClient: null
				}
			},
			1450: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(2584);
				t.default = function(e) {
					window.__tutorial__ || (window.__tutorial__ = r.default, window.__tutorial__.__tutorialRequire = window.require, window.__tutorial__.tutorialClient = new window.__tutorial__.TutorialClient(e), window.__tutorial__.callClientMethod = async e => {
						await async function(e) {
							const {
								msgId: t,
								method: n,
								argArr: r
							} = e, i = window.__tutorial__.tutorialClient;
							if (!i || !i[n]) return;
							let o;
							try {
								o = await i[n](...r)
							} catch (t) {
								console.error("callTutorialClientMethod error:", e, t)
							}
							const s = `__tutorial__${JSON.stringify({msgId:t,result:null!=o?o:""})}`;
							console.log("[tutorial]callClientMethod:", e, s), window.__global.prompt(s)
						}(e)
					}, console.log("[tutorial] tutorialClient had injected"))
				}
			},
			9594: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				t.default = new class {
					constructor() {
						this.handlers = [], this._loop = 0, this.running = !1, this.timeoutTime = 1e3
					}
					add(e) {
						this.handlers.includes(e) || this.handlers.push(e), this.handlers.length > 0 && !this.running && this.startLoop()
					}
					remove(e) {
						const t = this.handlers.indexOf(e); - 1 !== t && this.handlers.splice(t, 1), 0 === this.handlers.length && this.stopLoop()
					}
					startLoop() {
						this.running = !0;
						const e = async () => {
							const t = this.handlers.map((async e => e()));
							await Promise.all(t), this._loop && window.clearTimeout(this._loop), this._loop = window.setTimeout((async () => {
								await e()
							}), this.timeoutTime)
						};
						this._loop = window.setTimeout((async () => {
							await e()
						}), this.timeoutTime)
					}
					stopLoop() {
						this.running = !1, this._loop && window.clearTimeout(this._loop), this._loop = 0
					}
				}
			},
			7833: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(190);
				var i;
				! function(e) {
					e[e.cssSelector = 0] = "cssSelector", e[e.Text = 1] = "Text", e[e.Reference = 2] = "Reference"
				}(i || (i = {}));
				t.default = class {
					async getControlRect(e, t) {
						if (!e || !t) return;
						let n, r;
						return e.selectorMode === i.cssSelector ? (n = this.getElementBySelector(e.cssSelector, t), r = null == n ? void 0 : n.getBoundingClientRect()) : e.selectorMode === i.Text ? (n = this.getElementByText(e.text, t), r = null == n ? void 0 : n.getBoundingClientRect()) : (n = await this.getElementByRefrenceObject(e.referenceObject, t), r = null == n ? void 0 : n.getBoundingClientRect()), r ? {
							x: r.x,
							y: r.y,
							width: r.width,
							height: r.height
						} : null
					}
					getElementBySelector(e, t) {
						try {
							return r(e, t)[0]
						} catch (e) {
							throw console.log("[TutorialClient] getElementBySelector error:", e), e
						}
					}
					getElementByText(e, t) {
						let n = [],
							i = "",
							o = "";
						if (e.includes("//")) {
							const t = e.split("//");
							i = t[0], o = t[1]
						} else o = e;
						try {
							return n = r(`:contains(${o})`, t).filter((e => {
								var t;
								return (null === (t = e.innerHTML) || void 0 === t ? void 0 : t.trim()) === o
							})), i && (n = n.map((e => e.closest(i)))), n[0]
						} catch (e) {
							throw console.log("[TutorialClient] getElementByText error:", e), e
						}
					}
					async getElementByRefrenceObject(e, t) {
						if (/#hierarchy#/.test(e)) {
							const n = e.replace("#hierarchy#", "");
							await this.searchEntity(n);
							const i = r(`.tutorial-entity-item :contains(${n})`, t).filter((e => {
								var t;
								return (null === (t = e.innerHTML) || void 0 === t ? void 0 : t.trim()) === n
							}));
							if (i[0]) return i[0].closest(".tutorial-entity-item")
						} else if (/#project#/.test(e)) {
							const n = e.replace("#project#", "");
							await this.searchProject(n);
							const i = r(`.tutorial-file-item :contains(${n})`, t).filter((e => {
								var t;
								return (null === (t = e.innerHTML) || void 0 === t ? void 0 : t.trim()) === n
							}));
							if (i[0]) return i[0].closest(".tutorial-file-item")
						} else if (/#inspector#/.test(e)) {
							const n = e.replace("#inspector#", "");
							return r(`.tutorial-inspector-item :contains(${n})`, t)[0]
						}
					}
					async searchProject(e, t = 600) {
						const n = window.__IDE.store;
						n && (n.dispatch("project/updateSearchInput", e), n.dispatch("project/debounceSearch"), await new Promise((e => {
							setTimeout((() => {
								e({})
							}), t)
						})))
					}
					async searchEntity(e, t = 600) {
						const n = window.__IDE.store;
						n && (n.dispatch("hierarchy/setSearchStr", {
							searchStr: e
						}), await new Promise((e => {
							setTimeout((() => {
								e({})
							}), t)
						})))
					}
				}
			},
			251: (e, t, n) => {
				"use strict";
				const r = n(4625);
				e.exports = new class {
					constructor() {
						this.popupMap = {}, this.container = null, this.maskingInsMap = {}
					}
					install(e, t, n = 1e3) {
						try {
							const i = document.createElement("div");
							i.className = "tutorial-masking-container", i.style.cssText = `\n        position: relative;\n        z-index: ${n};\n      `, this.popupMap[e] = i, this.container = t || document.body, this.container.appendChild(i);
							const o = new r({
								container: i,
								maskingClient: e
							});
							this.mountMaskingInstance(e, o)
						} catch (e) {
							console.error("install TutorialMasking error:", e)
						}
					}
					unInstall(e) {
						this.maskingInsMap[e] && this.unmountMaskingInstance(e), this.popupMap[e] && delete this.popupMap[e]
					}
					mountMaskingInstance(e, t) {
						this.maskingInsMap[e] = t
					}
					unmountMaskingInstance(e) {
						delete this.maskingInsMap[e]
					}
					renderMasking(e, t) {
						const n = this.maskingInsMap[e];
						n && (null == n || n.renderTutorialMasking(t))
					}
				}
			},
			4625: (e, t, n) => {
				"use strict";
				const r = n(6);
				var i;
				! function(e) {
					e[e.BlockInteraction = 0] = "BlockInteraction", e[e.FullUnmasked = 1] = "FullUnmasked"
				}(i || (i = {}));
				const o = 0;
				e.exports = class {
					constructor(e) {
						this.maskingClient = "", this.container = null, this.isShowMasking = !0, this.hollowAreas = [], this.coverAreas = [], this.renderTutorialMasking = e => {
							const {
								isShow: t,
								rects: n = []
							} = e, r = n.filter((e => "hollow" === e.hollowMode)), i = n.filter((e => "cover" === e.hollowMode));
							this.setMaskingStatus(t), this.setHollAreas(r), this.setCoverAreas(i), this.clear(), this.render()
						}, this.maskingClient = e.maskingClient, this.container = e.container
					}
					setMaskingStatus(e) {
						this.isShowMasking = e
					}
					setHollAreas(e) {
						const t = window.__vueglobaldocument || document,
							n = t.documentElement.clientWidth,
							r = t.documentElement.clientHeight,
							i = e.filter((e => null == e ? void 0 : e.points.length));
						this.hollowAreas = this.fixPointsArr(i, n, r)
					}
					setCoverAreas(e) {
						this.coverAreas = e
					}
					checkIntersect(e, t, n = !1) {
						let r;
						return r = n ? e[0][0] > t[2][0] || e[2][0] < t[0][0] || e[1][1] < t[0][1] || e[0][1] > t[1][1] : e[0][0] >= t[2][0] || e[2][0] <= t[0][0] || e[1][1] <= t[0][1] || e[0][1] >= t[1][1], !r
					}
					checkHorizontalIntersect(e, t, n = !0) {
						let r;
						return r = n ? e[0][0] > t[2][0] || e[2][0] < t[0][0] : e[0][0] >= t[2][0] || e[2][0] <= t[0][0], !r
					}
					checkVerticalIntersect(e, t, n = !0) {
						let r;
						return r = n ? e[1][1] < t[0][1] || e[0][1] > t[1][1] : e[1][1] <= t[0][1] || e[0][1] >= t[1][1], !r
					}
					checkEncircle(e, t) {
						return e[0][0] <= t[0][0] && e[2][0] >= t[2][0] && e[0][1] <= t[0][1] && e[1][1] >= t[1][1]
					}
					fixPointsArr(e, t, n) {
						const r = [];
						return (e = e.filter((e => e.points.every((e => 2 === e.length && e.every((e => "number" == typeof e && !isNaN(e)))))))).forEach((e => {
							e.points.forEach((e => {
								e[0] <= 0 ? e[0] = 1 : e[0] >= t && (e[0] = t - 1), e[1] <= 0 ? e[1] = 1 : e[1] >= n && (e[1] = n - 1)
							}))
						})), (e = e.sort(((e, t) => e.points[0][0] - t.points[0][0]))).forEach(((t, n) => {
							if (n !== e.length - 1 && !r.includes(n))
								for (let i = n + 1; i < e.length; i++) {
									if (r.includes(i)) continue;
									const o = e[i];
									if (this.checkEncircle(t.points, o.points)) r.push(i), e[i] = t;
									else {
										if (this.checkEncircle(o.points, t.points)) {
											r.push(n);
											break
										}
										if (this.checkHorizontalIntersect(t.points, o.points) && this.checkVerticalIntersect(t.points, o.points, !1)) {
											t.points[2][0] = t.points[3][0] = o.points[0][0] - 1;
											break
										}
									}
								}
						})), (e = (e = e.filter(((e, t) => !r.includes(t)))).sort(((e, t) => e.points[0][1] - t.points[0][1]))).forEach(((t, n) => {
							if (n !== e.length - 1)
								for (let r = n + 1; r < e.length; r++) {
									const n = e[r];
									if (this.checkVerticalIntersect(t.points, n.points) && this.checkHorizontalIntersect(t.points, n.points, !1)) {
										t.points[1][1] = t.points[2][1] = n.points[0][1] - 1;
										break
									}
								}
						})), e
					}
					filterValidRects(e) {
						return e
					}
					clear() {
						const e = this.container;
						let t = e.lastElementChild;
						for (; t;) e.removeChild(t), t = e.lastElementChild
					}
					render() {
						const {
							isShowMasking: e,
							hollowAreas: t
						} = this;
						e && (t.length ? this.renderMaskingAreas() : this.renderFullMasking())
					}
					renderFullMasking() {
						const e = document.createElement("div");
						e.className = "tutorial-masking", e.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0,0,0,0.6);\n    ", this.container.appendChild(e)
					}
					renderMaskingAreas() {
						const e = document.createElement("div");
						e.className = "tutorial-masking", e.style.cssText = "\n        pointer-events: none;\n        position: fixed;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        height: 100%;\n      ", this.container.appendChild(e);
						const {
							hollowAreas: t,
							coverAreas: n
						} = this, i = window.__vueglobaldocument || document, s = i.documentElement.clientWidth, a = i.documentElement.clientHeight, l = [
							[0, 0],
							[s, 0],
							[s, a],
							[0, a]
						];
						t.forEach((t => {
							const n = document.createElement("div");
							n.className = "hollow-rect", n.style.cssText = `\n        pointer-events: ${t.maskType===o?"auto":"none"};\n        position: absolute;\n        left: ${t.points[0][0]}px;\n        top: ${t.points[0][1]}px;\n        width: ${Math.abs(t.points[3][0])-t.points[0][0]}px;\n        height: ${Math.abs(t.points[1][1])-t.points[0][1]}px;\n      `, e.appendChild(n)
						}));
						const c = [...t.map((e => e.points || [])), l];
						r(c).forEach((t => {
							const n = document.createElement("div");
							n.className = "mask-rect", n.style.cssText = `\n        pointer-events: auto;\n        background: rgba(0, 0, 0, 0.6);\n        position: absolute;\n        left: ${t[0][0]}px;\n        top: ${t[0][1]}px;\n        width: ${Math.abs(t[1][0])-t[0][0]}px;\n        height: ${Math.abs(t[1][1])-t[0][1]}px;\n      `, e.appendChild(n)
						})), n.forEach((t => {
							var n;
							const i = document.createElement("div");
							if (i.className = "cover-rect", e.appendChild(i), null === (n = t.fullViewPoints) || void 0 === n ? void 0 : n.length) {
								const [e, n, s, a] = t.fullViewPoints, l = [t.points, [e, a, s, n]];
								r(l).forEach((e => {
									const t = document.createElement("div");
									t.className = "mask-rect", t.style.cssText = `\n            pointer-events: auto;\n            background: rgba(0, 0, 0, 0.6);\n            position: absolute;\n            left: ${e[0][0]}px;\n            top: ${e[0][1]}px;\n            width: ${Math.abs(e[1][0])-e[0][0]}px;\n            height: ${Math.abs(e[1][1])-e[0][1]}px;\n          `, i.appendChild(t)
								}));
								const c = document.createElement("div");
								c.className = "hollow-rect", c.style.cssText = `\n          pointer-events: ${t.maskType===o?"auto":"none"};\n          position: absolute;\n          left: ${t.points[0][0]}px;\n          top: ${t.points[0][1]}px;\n          width: ${Math.abs(t.points[3][0])-t.points[0][0]}px;\n          height: ${Math.abs(t.points[1][1])-t.points[0][1]}px;\n        `, i.appendChild(c)
							} else i.style.cssText = `\n        pointer-events: 'auto';\n        background: rgba(0, 0, 0, 0.6);\n        position: absolute;\n        left: ${t.points[0][0]}px;\n        top: ${t.points[0][1]}px;\n        width: ${Math.abs(t.points[3][0])-t.points[0][0]}px;\n        height: ${Math.abs(t.points[1][1])-t.points[0][1]}px;\n      `
						}))
					}
				}
			},
			4478: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(5761),
					i = "__TUTORIAL__/";
				t.default = class {
					constructor(e = {}) {
						this.isWebview = !1, this.isGameEngineIDE = !1, this.dynamicTutorialMasking = null, this.bridgeWS = {}, this.globalIDE = null, this.criterionInsMap = {};
						const {
							isWebview: t,
							isGameEngineIDE: n
						} = e;
						this.isWebview = t, this.isGameEngineIDE = n, this.mountMaskingRenderClass(), this.createMaskClient()
					}
					mountMaskingRenderClass() {
						this.isWebview && !this.isGameEngineIDE || (this.dynamicTutorialMasking = n(251))
					}
					createMaskClient() {
						this._maskingClient || (this._maskingClient = new window.__tutorial__.MaskingClient)
					}
					init(e, t) {
						e && (this.bridgeWS = e, this.globalIDE = t, this.addMessageListener(), this.initInnerEventListeners(), this.notifyNewClient())
					}
					addMessageListener() {
						var e;
						(null === (e = this.bridgeWS) || void 0 === e ? void 0 : e.regist) && this.bridgeWS.regist("TUTORIAL_ACTION_EVENT", (async e => await this.executeEventHandler(e)))
					}
					initInnerEventListeners() {
						this.addInnerEventListener("TUTORIAL_MASKING_AREA", (async e => await this.getMaskingControlRect(e))), this.addInnerEventListener("TUTORIAL_MASKING_RENDER", (async ({
							maskingClient: e,
							data: t
						}) => this.renderTutorialMasking(e, t))), this.addInnerEventListener("TUTORIAL_CRITERIION_EXEC", (async e => await this.executeCriterion(e))), this.addInnerEventListener("TUTORIAL_CRITERIION_STOP", (async e => await this.stopCriterion(e))), this.addInnerEventListener("TUTORIAL_CRITERIION_RELOAD", (async e => await this.reloadCriterion(e))), this.addInnerEventListener("TUTORIAL_HOOKS_EXECUTE", (async e => await this.executeHooks(e)))
					}
					notifyNewClient() {
						this.nofifyRefreshMasking()
					}
					async nofifyRefreshMasking() {
						var e;
						(null === (e = null == this ? void 0 : this.bridgeWS) || void 0 === e ? void 0 : e.sendPromise) && await (null == this ? void 0 : this.bridgeWS.sendPromise("MAIN", "updateTutorialLastestMasking", {}))
					}
					injectMaskingRenderer(e, t, n) {
						this.dynamicTutorialMasking && this.dynamicTutorialMasking.install(e, t, n)
					}
					removeMaskingRenderer(e) {
						this.dynamicTutorialMasking && this.dynamicTutorialMasking.unInstall(e)
					}
					renderTutorialMasking(e, t) {
						this.dynamicTutorialMasking && this.dynamicTutorialMasking.renderMasking(e, t)
					}
					getRootDocument(e) {
						var t, n, r, i;
						const {
							mode: o,
							contextType: s,
							viewType: a,
							status: l
						} = e;
						let c = null;
						return c = "engineIDEView" === s ? "sameHost" === o && "popup" === l ? (null === (n = null === (t = this.globalIDE) || void 0 === t ? void 0 : t.shareWebviewObject) || void 0 === n ? void 0 : n.get_target_webview_val(a, "document")) || (null === (i = null === (r = this.globalIDE) || void 0 === r ? void 0 : r.shareWebviewObject) || void 0 === i ? void 0 : i.get_target_webview_val(`${a}#0`, "document")) : window.__vueglobaldocument : window.document, c
					}
					async getMaskingControlRect(e) {
						const {
							control: t
						} = e;
						if (!t) return;
						const n = this.getRootDocument(e);
						return await this._maskingClient.getControlRect(t, n)
					}
					getReferenceObject(e) {
						const {
							mode: t,
							contextType: n,
							viewType: r,
							status: i
						} = e, o = this.getRootDocument({
							mode: t,
							contextType: n,
							viewType: r,
							status: i
						}), s = window.__tutorialReferenceObjects || {};
						let a = Object.assign({
							document: o,
							window
						}, s);
						if ("engineIDEView" === n) {
							const e = window.GameEditor;
							a = Object.assign({
								gameEditor: e
							}, a)
						}
						return a
					}
					async executeCriterion(e) {
						try {
							const {
								criterionKey: t,
								autoComplete: n,
								contextType: r,
								viewType: i,
								mode: o,
								status: s,
								filePath: a,
								criterionArgs: l
							} = e, c = window.require || window.__tutorial__.__tutorialRequire, u = new(0, c(a).default), d = this.getReferenceObject({
								contextType: r,
								viewType: i,
								mode: o,
								status: s
							});
							d.criterionArgs = l, this.criterionInsMap[t] || (this.criterionInsMap[t] = {}), this.criterionInsMap[t] = u, u.setFutureObjectReferences(d), n && u.autoComplete && await u.autoComplete(), await u.startAndWait()
						} catch (e) {
							throw console.error("[executeCriterion] error: ", e), e
						}
					}
					async reloadCriterion(e) {
						try {
							const {
								criterionKey: t,
								autoComplete: n,
								contextType: r,
								viewType: i,
								mode: o,
								status: s,
								filePath: a,
								criterionArgs: l
							} = e;
							await this.stopCriterion(e);
							const c = window.require || window.__tutorial__.__tutorialRequire,
								u = new(0, c(a).default),
								d = this.getReferenceObject({
									contextType: r,
									viewType: i,
									mode: o,
									status: s
								});
							this.criterionInsMap[t] || (this.criterionInsMap[t] = {}), this.criterionInsMap[t] = u, d.criterionArgs = l, u.setFutureObjectReferences(d), n && u.autoComplete && await u.autoComplete();
							const f = this.getCriterionIns(t);
							u._resolves = f ? f._resolves : [], await u.startAndWait()
						} catch (e) {
							throw console.error("[reloadCriterion] error: ", e), e
						}
					}
					getCriterionIns(e) {
						if (this.criterionInsMap[e]) {
							return this.criterionInsMap[e]
						}
					}
					deleteCriterIns(e) {
						delete this.criterionInsMap[e]
					}
					async wakeupCriterion(e) {
						const {
							criterionKey: t
						} = e, n = this.getCriterionIns(t);
						n && await n.wakeup()
					}
					async stopCriterion(e) {
						const {
							criterionKey: t
						} = e, n = this.getCriterionIns(t);
						n && await n.stopTesting(), this.deleteCriterIns(t)
					}
					async executeHooks(e) {
						try {
							const {
								contextType: t,
								viewType: n,
								mode: r,
								status: i,
								filePath: o,
								hooksName: s,
								hookArgs: a
							} = e, l = (window.require || window.__tutorial__.__tutorialRequire)(o).default, c = Object.getOwnPropertyNames(l.prototype), u = new l;
							let d = null;
							if (c.forEach((e => {
									if ("constructor" === e) return;
									const t = u[e];
									t && t.$$type === s && (d = t)
								})), !d) throw new Error(`${s} is not exist`);
							const f = this.getReferenceObject({
								contextType: t,
								viewType: n,
								mode: r,
								status: i
							});
							f.hookArgs = a, u.setFutureObjectReferences(f), await d.call(u)
						} catch (e) {
							throw console.error("[executeHooks] error: ", e), e
						}
					}
					addInnerEventListener(e, t) {
						r.eventEmitter.on(i + e, t)
					}
					removeInnerEventListener(e, t) {
						r.eventEmitter.off(i + e, t)
					}
					async executeEventHandler(e) {
						const {
							event: t,
							args: n
						} = e;
						let i;
						return r.eventEmitter.has(t) && (i = await r.eventEmitter.emitSync(t, n)), i
					}
					async fireInnerEvent(e, t, n) {
						await this.triggerEventSync(i + e, t, n)
					}
					async triggerEventSync(e, t, n) {
						return await this.bridgeWS.sendWithCb("MAIN", "messageToTutorialServer", {
							type: "event_trigger",
							data: {
								event: e,
								targets: n,
								args: t
							}
						})
					}
					triggerEvent(e, t, n, r) {
						this.bridgeWS.sendWithCb("MAIN", "messageToTutorialServer", {
							type: "event_trigger",
							data: {
								event: e,
								targets: r,
								args: t
							}
						}, n)
					}
				}
			},
			4117: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const r = n(9741),
					i = n(1837),
					o = n(2429),
					s = n(6674),
					{
						webview: a
					} = s,
					l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
				class c {
					constructor() {
						this.ELEMENTS_INFO = {}, this.ELEMENTS_WEAK_MAP = new WeakMap, this.getElementId = e => {
							let t = this.ELEMENTS_WEAK_MAP.get(e);
							return t || (t = `${i.webviewID}_${Math.random()}${Date.now()}`, this.ELEMENTS_INFO[t] = e, this.ELEMENTS_WEAK_MAP.set(e, t)), t
						}, this.getDOM = e => this.ELEMENTS_INFO[e], this.removeDOM = e => {
							const t = this.ELEMENTS_WEAK_MAP.get(e);
							return t && (delete this.ELEMENTS_INFO[t], this.ELEMENTS_WEAK_MAP.delete(e)), t
						};
						new l((e => {
							e.forEach((e => {
								e.removedNodes.length > 0 && e.removedNodes.forEach((e => {
									e && this.removeDOM(e)
								}))
							}))
						})).observe(document, {
							childList: !0
						})
					}
				}
				t.default = class {
					constructor() {
						this.nodeManager = new c, this.findElement = (e, t) => {
							if ("css selector" === e) {
								const e = document.querySelector(t);
								if (e) return {
									status: o.default.Success,
									value: {
										WEBVIEW_ELEMENT: this.nodeManager.getElementId(e)
									}
								}
							}
							return {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.findElements = (e, t) => {
							if ("css selector" === e) {
								const e = document.querySelectorAll(t),
									n = [];
								return e.forEach((e => {
									n.push(this.nodeManager.getElementId(e))
								})), {
									status: o.default.Success,
									value: n
								}
							}
							return {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.scroll = (e, t) => (document.documentElement && (document.documentElement.scrollLeft += e, document.documentElement.scrollTop += t), document.body.scrollLeft += e, document.body.scrollTop += t, {
							status: o.default.Success
						}), this.getTagName = e => {
							const t = this.nodeManager.getDOM(e);
							return t ? {
								status: o.default.Success,
								value: t.tagName.toLowerCase()
							} : {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.getCssValue = (e, t) => {
							const n = this.nodeManager.getDOM(e);
							if (!n) return {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							};
							const r = window.getComputedStyle(n);
							return {
								status: o.default.Success,
								value: r[t]
							}
						}, this.getProperty = (e, t) => {
							const n = this.nodeManager.getDOM(e);
							return n ? {
								status: o.default.Success,
								value: n[t]
							} : {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.getLocation = e => {
							const t = this.nodeManager.getDOM(e);
							if (!t) return {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							};
							const n = t.getBoundingClientRect();
							return {
								status: o.default.Success,
								value: {
									x: n.left,
									y: n.top
								}
							}
						}, this.getSize = e => {
							const t = this.nodeManager.getDOM(e);
							if (!t) return {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							};
							const n = t.getBoundingClientRect();
							return {
								status: o.default.Success,
								value: {
									width: n.width,
									height: n.height
								}
							}
						}, this.getRect = e => {
							const t = this.nodeManager.getDOM(e);
							if (!t) return {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							};
							const n = t.getBoundingClientRect();
							let r = t;
							return "wx-scroll-view" === t.localName && (r = t.querySelector("div div") || t), {
								status: o.default.Success,
								value: {
									x: n.left,
									y: n.top,
									width: n.width,
									height: n.height,
									scrollTop: r.scrollTop,
									scrollLeft: r.scrollLeft,
									scrollHeight: r.scrollHeight,
									scrollWidth: r.scrollWidth
								}
							}
						}, this.getAttribute = (e, t) => {
							const n = this.nodeManager.getDOM(e);
							return n ? {
								status: o.default.Success,
								value: n.getAttribute(t)
							} : {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.elementFromPoint = (e, t) => {
							const n = document.elementFromPoint(e, t);
							return n ? {
								status: o.default.Success,
								value: {
									WEBVIEW_ELEMENT: this.nodeManager.getElementId(n)
								}
							} : {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.focus = e => {
							const t = this.nodeManager.getDOM(e);
							return t || t ? (t.focus(), {
								status: o.default.Success
							}) : {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.getContentSize = () => ({
							status: o.default.Success,
							value: {
								windowHeight: window.innerHeight,
								windowWidth: window.innerWidth,
								scrollTop: document.body.scrollTop || document.documentElement.scrollTop,
								scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft,
								scrollHeight: document.body.scrollHeight || document.documentElement.scrollHeight,
								scrollWidth: document.body.scrollWidth || document.documentElement.scrollWidth
							}
						}), this.findShadowRoot = e => {
							const t = document.querySelector(e);
							if (!t || !t.shadowRoot) return {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							};
							const n = t.shadowRoot;
							return {
								status: o.default.Success,
								value: {
									WEBVIEW_SHADOW_ROOT: this.nodeManager.getElementId(n)
								}
							}
						}, this.findElementInWebviewShadowRoot = (e, t) => {
							const n = this.nodeManager.getDOM(t);
							if (!n) return {
								status: o.default.NoSuchElement,
								value: {
									message: "shadow root not found"
								}
							};
							const r = n.querySelector(e);
							return r ? {
								status: o.default.Success,
								value: {
									WEBVIEW_ELEMENT: this.nodeManager.getElementId(r)
								}
							} : {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}, this.clickContextMenu = e => ($contextMenuClicked(e), {
							status: o.default.Success
						}), this.scrollIntoView = e => {
							const t = this.nodeManager.getDOM(e);
							return t ? (t.scrollIntoView(), {
								status: o.default.Success
							}) : {
								status: o.default.NoSuchElement,
								value: {
									message: "no such element"
								}
							}
						}
					}
					init(e = {}) {
						const t = {
							[a.findElement]: ({
								using: e,
								value: t
							}) => this.findElement(e, t),
							[a.findElements]: ({
								using: e,
								value: t
							}) => this.findElements(e, t),
							[a.scroll]: ({
								xoffset: e,
								yoffset: t
							}) => this.scroll(e, t),
							[a.getTagName]: ({
								ELEMENT: e
							}) => this.getTagName(e),
							[a.getAttribute]: ({
								ELEMENT: e,
								name: t
							}) => this.getAttribute(e, t),
							[a.getCssValue]: ({
								ELEMENT: e,
								propertyName: t
							}) => this.getCssValue(e, t),
							[a.getProperty]: ({
								ELEMENT: e,
								propertyName: t
							}) => this.getProperty(e, t),
							[a.getSize]: ({
								ELEMENT: e
							}) => this.getSize(e),
							[a.getRect]: ({
								ELEMENT: e
							}) => this.getRect(e),
							[a.getLocation]: ({
								ELEMENT: e
							}) => this.getLocation(e),
							[a.elementFromPoint]: ({
								x: e,
								y: t
							}) => this.elementFromPoint(e, t),
							[a.getContentSize]: this.getContentSize,
							[a.focus]: ({
								ELEMENT: e
							}) => this.focus(e),
							[a.scrollIntoView]: ({
								ELEMENT: e
							}) => this.scrollIntoView(e),
							[a.findShadowRoot]: ({
								selector: e
							}) => this.findShadowRoot(e),
							[a.findElementInWebviewShadowRoot]: ({
								selector: e,
								shadowRootHostId: t
							}) => this.findElementInWebviewShadowRoot(e, t),
							[a.clickContextMenu]: ({
								id: e
							}) => this.clickContextMenu(e)
						};
						r.default.registerCallback((({
							command: n,
							data: i
						}) => {
							const o = e[n] || t[n];
							if (o) {
								const e = o(i);
								r.default.send({
									command: `${n}.callback`,
									data: {
										callbackID: i.callbackID,
										res: e
									}
								})
							}
						}))
					}
				}
			},
			1837: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.webviewID = void 0;
				const n = navigator.userAgent,
					r = n.indexOf(" devtoolsedit") > 0,
					i = n.indexOf(" appservicedevtools") > 0;
				if (t.webviewID = "", r) t.webviewID = "devtoolsedit";
				else if (i) t.webviewID = "appservicedevtools";
				else {
					const e = n.match(/webview\/(\d*)/);
					if (e) {
						const n = parseInt(e[1], 10);
						isNaN(n) || (t.webviewID = n)
					}
				}
			},
			9741: (e, t, n) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.setJSONParser = t.setPageframeReady = t.removeCallback = t.registerCallback = t.send = t.getMessager = void 0;
				const r = n(1837),
					i = n(8422);
				let o, s = !1,
					a = [],
					l = !1;
				const c = new Set;
				t.getMessager = () => {
					if (o) return o;
					const e = `WEBVIEW_${r.webviewID}`;
					return o = new i(e), o
				};
				const u = e => {
						c.forEach((t => {
							try {
								t(e)
							} catch (e) {}
						}))
					},
					d = e => {
						if (s) u(e);
						else {
							const {
								command: t
							} = e;
							switch (t) {
								case "WEBVIEW_ON_EVENT":
								case "APPSERVICE_PUBLISH":
								case "APPSERVICE_PUBLISH_SYNC":
									a.push(e);
									break;
								default:
									u(e)
							}
						}
					};

				function f(e) {
					e.fromWebviewID = r.webviewID;
					t.getMessager().send(e)
				}

				function h(e) {
					if (c.add(e), !l) {
						t.getMessager().registerCallback(d), l = !0
					}
				}

				function p(e) {
					if (c.delete(e), !l) {
						t.getMessager().registerCallback(d), l = !0
					}
				}

				function g(e, n) {
					if (s === e) return;
					s = e;
					t.getMessager()._parseJson = n, e && (a.forEach((e => u(e))), a = [])
				}
				t.send = f, t.registerCallback = h, t.removeCallback = p, t.setPageframeReady = g, t.setJSONParser = function(e) {
					t.getMessager()._parseJson = e
				}, t.default = {
					send: f,
					registerCallback: h,
					removeCallback: p,
					setPageframeReady: g
				}
			},
			2429: (e, t) => {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = {
					Success: 0,
					NoSuchElement: 7
				}
			},
			899: (e, t, n) => {
				"use strict";
				var r = n(8214),
					i = n(6554),
					o = n(7945).lW;
				n.g.__TYPEDARRAY_POOL || (n.g.__TYPEDARRAY_POOL = {
					UINT8: i([32, 0]),
					UINT16: i([32, 0]),
					UINT32: i([32, 0]),
					BIGUINT64: i([32, 0]),
					INT8: i([32, 0]),
					INT16: i([32, 0]),
					INT32: i([32, 0]),
					BIGINT64: i([32, 0]),
					FLOAT: i([32, 0]),
					DOUBLE: i([32, 0]),
					DATA: i([32, 0]),
					UINT8C: i([32, 0]),
					BUFFER: i([32, 0])
				});
				var s = "undefined" != typeof Uint8ClampedArray,
					a = "undefined" != typeof BigUint64Array,
					l = "undefined" != typeof BigInt64Array,
					c = n.g.__TYPEDARRAY_POOL;
				c.UINT8C || (c.UINT8C = i([32, 0])), c.BIGUINT64 || (c.BIGUINT64 = i([32, 0])), c.BIGINT64 || (c.BIGINT64 = i([32, 0])), c.BUFFER || (c.BUFFER = i([32, 0]));
				var u = c.DATA,
					d = c.BUFFER;

				function f(e) {
					if (e) {
						var t = e.length || e.byteLength,
							n = r.log2(t);
						u[n].push(e)
					}
				}

				function h(e) {
					e = r.nextPow2(e);
					var t = r.log2(e),
						n = u[t];
					return n.length > 0 ? n.pop() : new ArrayBuffer(e)
				}

				function p(e) {
					return new Uint8Array(h(e), 0, e)
				}

				function g(e) {
					return new Uint16Array(h(2 * e), 0, e)
				}

				function m(e) {
					return new Uint32Array(h(4 * e), 0, e)
				}

				function v(e) {
					return new Int8Array(h(e), 0, e)
				}

				function w(e) {
					return new Int16Array(h(2 * e), 0, e)
				}

				function y(e) {
					return new Int32Array(h(4 * e), 0, e)
				}

				function E(e) {
					return new Float32Array(h(4 * e), 0, e)
				}

				function _(e) {
					return new Float64Array(h(8 * e), 0, e)
				}

				function b(e) {
					return s ? new Uint8ClampedArray(h(e), 0, e) : p(e)
				}

				function I(e) {
					return a ? new BigUint64Array(h(8 * e), 0, e) : null
				}

				function T(e) {
					return l ? new BigInt64Array(h(8 * e), 0, e) : null
				}

				function A(e) {
					return new DataView(h(e), 0, e)
				}

				function O(e) {
					e = r.nextPow2(e);
					var t = r.log2(e),
						n = d[t];
					return n.length > 0 ? n.pop() : new o(e)
				}
				t.free = function(e) {
					if (o.isBuffer(e)) d[r.log2(e.length)].push(e);
					else {
						if ("[object ArrayBuffer]" !== Object.prototype.toString.call(e) && (e = e.buffer), !e) return;
						var t = e.length || e.byteLength,
							n = 0 | r.log2(t);
						u[n].push(e)
					}
				}, t.freeUint8 = t.freeUint16 = t.freeUint32 = t.freeBigUint64 = t.freeInt8 = t.freeInt16 = t.freeInt32 = t.freeBigInt64 = t.freeFloat32 = t.freeFloat = t.freeFloat64 = t.freeDouble = t.freeUint8Clamped = t.freeDataView = function(e) {
					f(e.buffer)
				}, t.freeArrayBuffer = f, t.freeBuffer = function(e) {
					d[r.log2(e.length)].push(e)
				}, t.malloc = function(e, t) {
					if (void 0 === t || "arraybuffer" === t) return h(e);
					switch (t) {
						case "uint8":
							return p(e);
						case "uint16":
							return g(e);
						case "uint32":
							return m(e);
						case "int8":
							return v(e);
						case "int16":
							return w(e);
						case "int32":
							return y(e);
						case "float":
						case "float32":
							return E(e);
						case "double":
						case "float64":
							return _(e);
						case "uint8_clamped":
							return b(e);
						case "bigint64":
							return T(e);
						case "biguint64":
							return I(e);
						case "buffer":
							return O(e);
						case "data":
						case "dataview":
							return A(e);
						default:
							return null
					}
					return null
				}, t.mallocArrayBuffer = h, t.mallocUint8 = p, t.mallocUint16 = g, t.mallocUint32 = m, t.mallocInt8 = v, t.mallocInt16 = w, t.mallocInt32 = y, t.mallocFloat32 = t.mallocFloat = E, t.mallocFloat64 = t.mallocDouble = _, t.mallocUint8Clamped = b, t.mallocBigUint64 = I, t.mallocBigInt64 = T, t.mallocDataView = A, t.mallocBuffer = O, t.clearCache = function() {
					for (var e = 0; e < 32; ++e) c.UINT8[e].length = 0, c.UINT16[e].length = 0, c.UINT32[e].length = 0, c.INT8[e].length = 0, c.INT16[e].length = 0, c.INT32[e].length = 0, c.FLOAT[e].length = 0, c.DOUBLE[e].length = 0, c.BIGUINT64[e].length = 0, c.BIGINT64[e].length = 0, c.UINT8C[e].length = 0, u[e].length = 0, d[e].length = 0
				}
			}
		},
		t = {};

	function n(r) {
		var i = t[r];
		if (void 0 !== i) return i.exports;
		var o = t[r] = {
			exports: {}
		};
		return e[r](o, o.exports, n), o.exports
	}
	n.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}();
	(() => {
		"use strict";
		const e = n(1779),
			t = n(3873),
			r = n(7803),
			i = n(6100),
			o = n(5503),
			s = n(4269),
			a = n(6324),
			l = n(7019),
			c = n(1917),
			u = n(6113),
			d = n(6786),
			f = n(2726),
			h = n(534),
			p = n(3660),
			g = n(7241),
			m = n(6248),
			v = n(4117),
			w = n(4559),
			y = n(6935),
			E = n(1450),
			_ = n(4497),
			b = n(7707),
			I = n(2567),
			{
				isWebDebugger: T,
				isMiniProgramHtmlWebview: A,
				isMiniProgram: O,
				isAppService: C,
				isGame: S,
				isSkyline: M,
				isIDEPlugin: R,
				isSimulatorPlugin: N,
				isEntrancePLugin: L,
				isSubAppWindow: k,
				isGameEngineIDE: P,
				isEditor: x,
				isAppServiceDevtools: D,
				isGitManager: B,
				isCloudConsoleV1: U,
				isTestMode: j,
				isAllowNw: $,
				engineTutorial: W
			} = m.default;
		d.default(),
			function() {
				if ("undefined" != typeof nw && void 0 !== nw.Menu) {
					const e = nw.Menu.prototype.popup;
					nw.Menu.prototype.popup = function(...t) {
						nw.Window.get().window.global.Win.contextMenu = {
							type: "nw",
							menu: this
						}, console.log("hacked menu.popup:", t, this, e), e.apply(this, t)
					}
				}
			}(), k || R || (o.default(), s.default(), a.default()), (S || O || C) && (l.default(), u.default()), T && f.default(), A && r.default(), M && $ && _.hackRequireModule(), (S || C) && (w.default(), P ? t.default() : e.default(), y.hackEval(), $ && y.hackRequire()), W && E.default({
				isWebview: !0,
				isGameEngineIDE: P
			}), (S || C) && c.default(), (S || O || A) && !P && i.default(), L ? g.default() : N ? p.default() : R && h.default(), (x || D || B || U) && j && (new v.default).init(), (S || C || T) && b.default(), C && $ && I.default()
	})();
})();
//# sourceURL=ide:///extensions/inject/documentstart/index.js