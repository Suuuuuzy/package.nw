(()=>{var __webpack_modules__={537:t=>{"use strict";t.exports=function(t,e){for(var n=new Array(arguments.length-1),r=0,o=2,i=!0;o<arguments.length;)n[r++]=arguments[o++];return new Promise((function(o,s){n[r]=function(t){if(i)if(i=!1,t)s(t);else{for(var e=new Array(arguments.length-1),n=0;n<e.length;)e[n++]=arguments[n];o.apply(null,e)}};try{t.apply(e||null,n)}catch(t){i&&(i=!1,s(t))}}))}},419:(t,e)=>{"use strict";var n=e;n.length=function(t){var e=t.length;if(!e)return 0;for(var n=0;--e%4>1&&"="===t.charAt(e);)++n;return Math.ceil(3*t.length)/4-n};for(var r=new Array(64),o=new Array(123),i=0;i<64;)o[r[i]=i<26?i+65:i<52?i+71:i<62?i-4:i-59|43]=i++;n.encode=function(t,e,n){for(var o,i=null,s=[],a=0,u=0;e<n;){var c=t[e++];switch(u){case 0:s[a++]=r[c>>2],o=(3&c)<<4,u=1;break;case 1:s[a++]=r[o|c>>4],o=(15&c)<<2,u=2;break;case 2:s[a++]=r[o|c>>6],s[a++]=r[63&c],u=0}a>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,s)),a=0)}return u&&(s[a++]=r[o],s[a++]=61,1===u&&(s[a++]=61)),i?(a&&i.push(String.fromCharCode.apply(String,s.slice(0,a))),i.join("")):String.fromCharCode.apply(String,s.slice(0,a))};var s="invalid encoding";n.decode=function(t,e,n){for(var r,i=n,a=0,u=0;u<t.length;){var c=t.charCodeAt(u++);if(61===c&&a>1)break;if(void 0===(c=o[c]))throw Error(s);switch(a){case 0:r=c,a=1;break;case 1:e[n++]=r<<2|(48&c)>>4,r=c,a=2;break;case 2:e[n++]=(15&r)<<4|(60&c)>>2,r=c,a=3;break;case 3:e[n++]=(3&r)<<6|c,a=0}}if(1===a)throw Error(s);return n-i},n.test=function(t){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)}},211:t=>{"use strict";function e(){this._listeners={}}t.exports=e,e.prototype.on=function(t,e,n){return(this._listeners[t]||(this._listeners[t]=[])).push({fn:e,ctx:n||this}),this},e.prototype.off=function(t,e){if(void 0===t)this._listeners={};else if(void 0===e)this._listeners[t]=[];else for(var n=this._listeners[t],r=0;r<n.length;)n[r].fn===e?n.splice(r,1):++r;return this},e.prototype.emit=function(t){var e=this._listeners[t];if(e){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);for(r=0;r<e.length;)e[r].fn.apply(e[r++].ctx,n)}return this}},945:t=>{"use strict";function e(t){return"undefined"!=typeof Float32Array?function(){var e=new Float32Array([-0]),n=new Uint8Array(e.buffer),r=128===n[3];function o(t,r,o){e[0]=t,r[o]=n[0],r[o+1]=n[1],r[o+2]=n[2],r[o+3]=n[3]}function i(t,r,o){e[0]=t,r[o]=n[3],r[o+1]=n[2],r[o+2]=n[1],r[o+3]=n[0]}function s(t,r){return n[0]=t[r],n[1]=t[r+1],n[2]=t[r+2],n[3]=t[r+3],e[0]}function a(t,r){return n[3]=t[r],n[2]=t[r+1],n[1]=t[r+2],n[0]=t[r+3],e[0]}t.writeFloatLE=r?o:i,t.writeFloatBE=r?i:o,t.readFloatLE=r?s:a,t.readFloatBE=r?a:s}():function(){function e(t,e,n,r){var o=e<0?1:0;if(o&&(e=-e),0===e)t(1/e>0?0:2147483648,n,r);else if(isNaN(e))t(2143289344,n,r);else if(e>34028234663852886e22)t((o<<31|2139095040)>>>0,n,r);else if(e<11754943508222875e-54)t((o<<31|Math.round(e/1401298464324817e-60))>>>0,n,r);else{var i=Math.floor(Math.log(e)/Math.LN2);t((o<<31|i+127<<23|8388607&Math.round(e*Math.pow(2,-i)*8388608))>>>0,n,r)}}function s(t,e,n){var r=t(e,n),o=2*(r>>31)+1,i=r>>>23&255,s=8388607&r;return 255===i?s?NaN:o*(1/0):0===i?1401298464324817e-60*o*s:o*Math.pow(2,i-150)*(s+8388608)}t.writeFloatLE=e.bind(null,n),t.writeFloatBE=e.bind(null,r),t.readFloatLE=s.bind(null,o),t.readFloatBE=s.bind(null,i)}(),"undefined"!=typeof Float64Array?function(){var e=new Float64Array([-0]),n=new Uint8Array(e.buffer),r=128===n[7];function o(t,r,o){e[0]=t,r[o]=n[0],r[o+1]=n[1],r[o+2]=n[2],r[o+3]=n[3],r[o+4]=n[4],r[o+5]=n[5],r[o+6]=n[6],r[o+7]=n[7]}function i(t,r,o){e[0]=t,r[o]=n[7],r[o+1]=n[6],r[o+2]=n[5],r[o+3]=n[4],r[o+4]=n[3],r[o+5]=n[2],r[o+6]=n[1],r[o+7]=n[0]}function s(t,r){return n[0]=t[r],n[1]=t[r+1],n[2]=t[r+2],n[3]=t[r+3],n[4]=t[r+4],n[5]=t[r+5],n[6]=t[r+6],n[7]=t[r+7],e[0]}function a(t,r){return n[7]=t[r],n[6]=t[r+1],n[5]=t[r+2],n[4]=t[r+3],n[3]=t[r+4],n[2]=t[r+5],n[1]=t[r+6],n[0]=t[r+7],e[0]}t.writeDoubleLE=r?o:i,t.writeDoubleBE=r?i:o,t.readDoubleLE=r?s:a,t.readDoubleBE=r?a:s}():function(){function e(t,e,n,r,o,i){var s=r<0?1:0;if(s&&(r=-r),0===r)t(0,o,i+e),t(1/r>0?0:2147483648,o,i+n);else if(isNaN(r))t(0,o,i+e),t(2146959360,o,i+n);else if(r>17976931348623157e292)t(0,o,i+e),t((s<<31|2146435072)>>>0,o,i+n);else{var a;if(r<22250738585072014e-324)t((a=r/5e-324)>>>0,o,i+e),t((s<<31|a/4294967296)>>>0,o,i+n);else{var u=Math.floor(Math.log(r)/Math.LN2);1024===u&&(u=1023),t(4503599627370496*(a=r*Math.pow(2,-u))>>>0,o,i+e),t((s<<31|u+1023<<20|1048576*a&1048575)>>>0,o,i+n)}}}function s(t,e,n,r,o){var i=t(r,o+e),s=t(r,o+n),a=2*(s>>31)+1,u=s>>>20&2047,c=4294967296*(1048575&s)+i;return 2047===u?c?NaN:a*(1/0):0===u?5e-324*a*c:a*Math.pow(2,u-1075)*(c+4503599627370496)}t.writeDoubleLE=e.bind(null,n,0,4),t.writeDoubleBE=e.bind(null,r,4,0),t.readDoubleLE=s.bind(null,o,0,4),t.readDoubleBE=s.bind(null,i,4,0)}(),t}function n(t,e,n){e[n]=255&t,e[n+1]=t>>>8&255,e[n+2]=t>>>16&255,e[n+3]=t>>>24}function r(t,e,n){e[n]=t>>>24,e[n+1]=t>>>16&255,e[n+2]=t>>>8&255,e[n+3]=255&t}function o(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}function i(t,e){return(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}t.exports=e(e)},199:module=>{"use strict";function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(t){}return null}module.exports=inquire},662:t=>{"use strict";t.exports=function(t,e,n){var r=n||8192,o=r>>>1,i=null,s=r;return function(n){if(n<1||n>o)return t(n);s+n>r&&(i=t(r),s=0);var a=e.call(i,s,s+=n);return 7&s&&(s=1+(7|s)),a}}},997:(t,e)=>{"use strict";var n=e;n.length=function(t){for(var e=0,n=0,r=0;r<t.length;++r)(n=t.charCodeAt(r))<128?e+=1:n<2048?e+=2:55296==(64512&n)&&56320==(64512&t.charCodeAt(r+1))?(++r,e+=4):e+=3;return e},n.read=function(t,e,n){if(n-e<1)return"";for(var r,o=null,i=[],s=0;e<n;)(r=t[e++])<128?i[s++]=r:r>191&&r<224?i[s++]=(31&r)<<6|63&t[e++]:r>239&&r<365?(r=((7&r)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536,i[s++]=55296+(r>>10),i[s++]=56320+(1023&r)):i[s++]=(15&r)<<12|(63&t[e++])<<6|63&t[e++],s>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,i)),s=0);return o?(s&&o.push(String.fromCharCode.apply(String,i.slice(0,s))),o.join("")):String.fromCharCode.apply(String,i.slice(0,s))},n.write=function(t,e,n){for(var r,o,i=n,s=0;s<t.length;++s)(r=t.charCodeAt(s))<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&56320==(64512&(o=t.charCodeAt(s+1)))?(r=65536+((1023&r)<<10)+(1023&o),++s,e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128);return n-i}},3:(t,e,n)=>{"use strict";var r=n(100),o=r.Reader,i=r.Writer,s=r.util,a=r.roots.default||(r.roots.default={});a.LanDebugHeader=function(){function t(t){if(t)for(var e=Object.keys(t),n=0;n<e.length;++n)null!=t[e[n]]&&(this[e[n]]=t[e[n]])}return t.prototype.version=0,t.prototype.method="",t.prototype.id=0,t.prototype.isString=!1,t.prototype.clientId="",t.prototype.notEnd=!1,t.prototype.options="",t.create=function(e){return new t(e)},t.encode=function(t,e){return e||(e=i.create()),e.uint32(0).int32(t.version),e.uint32(10).string(t.method),e.uint32(16).int32(t.id),e.uint32(24).bool(t.isString),e.uint32(34).string(t.clientId),null!=t.notEnd&&t.hasOwnProperty("notEnd")&&e.uint32(40).bool(t.notEnd),null!=t.options&&t.hasOwnProperty("options")&&e.uint32(50).string(t.options),e},t.encodeDelimited=function(t,e){return this.encode(t,e).ldelim()},t.decode=function(t,e){t instanceof o||(t=o.create(t));for(var n=void 0===e?t.len:t.pos+e,r=new a.LanDebugHeader;t.pos<n;){var i=t.uint32();switch(i>>>3){case 0:r.version=t.int32();break;case 1:r.method=t.string();break;case 2:r.id=t.int32();break;case 3:r.isString=t.bool();break;case 4:r.clientId=t.string();break;case 5:r.notEnd=t.bool();break;case 6:r.options=t.string();break;default:t.skipType(7&i)}}if(!r.hasOwnProperty("version"))throw s.ProtocolError("missing required 'version'",{instance:r});if(!r.hasOwnProperty("method"))throw s.ProtocolError("missing required 'method'",{instance:r});if(!r.hasOwnProperty("id"))throw s.ProtocolError("missing required 'id'",{instance:r});if(!r.hasOwnProperty("isString"))throw s.ProtocolError("missing required 'isString'",{instance:r});if(!r.hasOwnProperty("clientId"))throw s.ProtocolError("missing required 'clientId'",{instance:r});return r},t.decodeDelimited=function(t){return t instanceof o||(t=new o(t)),this.decode(t,t.uint32())},t.verify=function(t){return"object"!=typeof t||null===t?"object expected":s.isInteger(t.version)?s.isString(t.method)?s.isInteger(t.id)?"boolean"!=typeof t.isString?"isString: boolean expected":s.isString(t.clientId)?null!=t.notEnd&&t.hasOwnProperty("notEnd")&&"boolean"!=typeof t.notEnd?"notEnd: boolean expected":null!=t.options&&t.hasOwnProperty("options")&&!s.isString(t.options)?"options: string expected":null:"clientId: string expected":"id: integer expected":"method: string expected":"version: integer expected"},t.fromObject=function(t){if(t instanceof a.LanDebugHeader)return t;var e=new a.LanDebugHeader;return null!=t.version&&(e.version=0|t.version),null!=t.method&&(e.method=String(t.method)),null!=t.id&&(e.id=0|t.id),null!=t.isString&&(e.isString=Boolean(t.isString)),null!=t.clientId&&(e.clientId=String(t.clientId)),null!=t.notEnd&&(e.notEnd=Boolean(t.notEnd)),null!=t.options&&(e.options=String(t.options)),e},t.toObject=function(t,e){e||(e={});var n={};return e.defaults&&(n.version=0,n.method="",n.id=0,n.isString=!1,n.clientId="",n.notEnd=!1,n.options=""),null!=t.version&&t.hasOwnProperty("version")&&(n.version=t.version),null!=t.method&&t.hasOwnProperty("method")&&(n.method=t.method),null!=t.id&&t.hasOwnProperty("id")&&(n.id=t.id),null!=t.isString&&t.hasOwnProperty("isString")&&(n.isString=t.isString),null!=t.clientId&&t.hasOwnProperty("clientId")&&(n.clientId=t.clientId),null!=t.notEnd&&t.hasOwnProperty("notEnd")&&(n.notEnd=t.notEnd),null!=t.options&&t.hasOwnProperty("options")&&(n.options=t.options),n},t.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},t}(),t.exports=a},100:(t,e,n)=>{"use strict";t.exports=n(482)},482:(t,e,n)=>{"use strict";var r=e;function o(){r.Reader._configure(r.BufferReader),r.util._configure()}r.build="minimal",r.Writer=n(173),r.BufferWriter=n(155),r.Reader=n(408),r.BufferReader=n(593),r.util=n(693),r.rpc=n(994),r.roots=n(54),r.configure=o,r.Writer._configure(r.BufferWriter),o()},408:(t,e,n)=>{"use strict";t.exports=u;var r,o=n(693),i=o.LongBits,s=o.utf8;function a(t,e){return RangeError("index out of range: "+t.pos+" + "+(e||1)+" > "+t.len)}function u(t){this.buf=t,this.pos=0,this.len=t.length}var c,l="undefined"!=typeof Uint8Array?function(t){if(t instanceof Uint8Array||Array.isArray(t))return new u(t);throw Error("illegal buffer")}:function(t){if(Array.isArray(t))return new u(t);throw Error("illegal buffer")};function h(){var t=new i(0,0),e=0;if(!(this.len-this.pos>4)){for(;e<3;++e){if(this.pos>=this.len)throw a(this);if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*e)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(127&this.buf[this.pos++])<<7*e)>>>0,t}for(;e<4;++e)if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*e)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(127&this.buf[this.pos])<<28)>>>0,t.hi=(t.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return t;if(e=0,this.len-this.pos>4){for(;e<5;++e)if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*e+3)>>>0,this.buf[this.pos++]<128)return t}else for(;e<5;++e){if(this.pos>=this.len)throw a(this);if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*e+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}function f(t,e){return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0}function p(){if(this.pos+8>this.len)throw a(this,8);return new i(f(this.buf,this.pos+=4),f(this.buf,this.pos+=4))}u.create=o.Buffer?function(t){return(u.create=function(t){return o.Buffer.isBuffer(t)?new r(t):l(t)})(t)}:l,u.prototype._slice=o.Array.prototype.subarray||o.Array.prototype.slice,u.prototype.uint32=(c=4294967295,function(){if(c=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)return c;if(c=(c|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128)return c;if((this.pos+=5)>this.len)throw this.pos=this.len,a(this,10);return c}),u.prototype.int32=function(){return 0|this.uint32()},u.prototype.sint32=function(){var t=this.uint32();return t>>>1^-(1&t)|0},u.prototype.bool=function(){return 0!==this.uint32()},u.prototype.fixed32=function(){if(this.pos+4>this.len)throw a(this,4);return f(this.buf,this.pos+=4)},u.prototype.sfixed32=function(){if(this.pos+4>this.len)throw a(this,4);return 0|f(this.buf,this.pos+=4)},u.prototype.float=function(){if(this.pos+4>this.len)throw a(this,4);var t=o.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t},u.prototype.double=function(){if(this.pos+8>this.len)throw a(this,4);var t=o.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t},u.prototype.bytes=function(){var t=this.uint32(),e=this.pos,n=this.pos+t;if(n>this.len)throw a(this,t);return this.pos+=t,Array.isArray(this.buf)?this.buf.slice(e,n):e===n?new this.buf.constructor(0):this._slice.call(this.buf,e,n)},u.prototype.string=function(){var t=this.bytes();return s.read(t,0,t.length)},u.prototype.skip=function(t){if("number"==typeof t){if(this.pos+t>this.len)throw a(this,t);this.pos+=t}else do{if(this.pos>=this.len)throw a(this)}while(128&this.buf[this.pos++]);return this},u.prototype.skipType=function(t){switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(t=7&this.uint32());)this.skipType(t);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this},u._configure=function(t){r=t;var e=o.Long?"toLong":"toNumber";o.merge(u.prototype,{int64:function(){return h.call(this)[e](!1)},uint64:function(){return h.call(this)[e](!0)},sint64:function(){return h.call(this).zzDecode()[e](!1)},fixed64:function(){return p.call(this)[e](!0)},sfixed64:function(){return p.call(this)[e](!1)}})}},593:(t,e,n)=>{"use strict";t.exports=i;var r=n(408);(i.prototype=Object.create(r.prototype)).constructor=i;var o=n(693);function i(t){r.call(this,t)}o.Buffer&&(i.prototype._slice=o.Buffer.prototype.slice),i.prototype.string=function(){var t=this.uint32();return this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len))}},54:t=>{"use strict";t.exports={}},994:(t,e,n)=>{"use strict";e.Service=n(948)},948:(t,e,n)=>{"use strict";t.exports=o;var r=n(693);function o(t,e,n){if("function"!=typeof t)throw TypeError("rpcImpl must be a function");r.EventEmitter.call(this),this.rpcImpl=t,this.requestDelimited=Boolean(e),this.responseDelimited=Boolean(n)}(o.prototype=Object.create(r.EventEmitter.prototype)).constructor=o,o.prototype.rpcCall=function t(e,n,o,i,s){if(!i)throw TypeError("request must be specified");var a=this;if(!s)return r.asPromise(t,a,e,n,o,i);if(a.rpcImpl)try{return a.rpcImpl(e,n[a.requestDelimited?"encodeDelimited":"encode"](i).finish(),(function(t,n){if(t)return a.emit("error",t,e),s(t);if(null!==n){if(!(n instanceof o))try{n=o[a.responseDelimited?"decodeDelimited":"decode"](n)}catch(t){return a.emit("error",t,e),s(t)}return a.emit("data",n,e),s(null,n)}a.end(!0)}))}catch(t){return a.emit("error",t,e),void setTimeout((function(){s(t)}),0)}else setTimeout((function(){s(Error("already ended"))}),0)},o.prototype.end=function(t){return this.rpcImpl&&(t||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},630:(t,e,n)=>{"use strict";t.exports=o;var r=n(693);function o(t,e){this.lo=t>>>0,this.hi=e>>>0}var i=o.zero=new o(0,0);i.toNumber=function(){return 0},i.zzEncode=i.zzDecode=function(){return this},i.length=function(){return 1};var s=o.zeroHash="\0\0\0\0\0\0\0\0";o.fromNumber=function(t){if(0===t)return i;var e=t<0;e&&(t=-t);var n=t>>>0,r=(t-n)/4294967296>>>0;return e&&(r=~r>>>0,n=~n>>>0,++n>4294967295&&(n=0,++r>4294967295&&(r=0))),new o(n,r)},o.from=function(t){if("number"==typeof t)return o.fromNumber(t);if(r.isString(t)){if(!r.Long)return o.fromNumber(parseInt(t,10));t=r.Long.fromString(t)}return t.low||t.high?new o(t.low>>>0,t.high>>>0):i},o.prototype.toNumber=function(t){if(!t&&this.hi>>>31){var e=1+~this.lo>>>0,n=~this.hi>>>0;return e||(n=n+1>>>0),-(e+4294967296*n)}return this.lo+4294967296*this.hi},o.prototype.toLong=function(t){return r.Long?new r.Long(0|this.lo,0|this.hi,Boolean(t)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(t)}};var a=String.prototype.charCodeAt;o.fromHash=function(t){return t===s?i:new o((a.call(t,0)|a.call(t,1)<<8|a.call(t,2)<<16|a.call(t,3)<<24)>>>0,(a.call(t,4)|a.call(t,5)<<8|a.call(t,6)<<16|a.call(t,7)<<24)>>>0)},o.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},o.prototype.zzEncode=function(){var t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this},o.prototype.zzDecode=function(){var t=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this},o.prototype.length=function(){var t=this.lo,e=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return 0===n?0===e?t<16384?t<128?1:2:t<2097152?3:4:e<16384?e<128?5:6:e<2097152?7:8:n<128?9:10}},693:(t,e,n)=>{"use strict";var r=e;function o(t,e,n){for(var r=Object.keys(e),o=0;o<r.length;++o)void 0!==t[r[o]]&&n||(t[r[o]]=e[r[o]]);return t}function i(t){function e(t,n){if(!(this instanceof e))return new e(t,n);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:(new Error).stack||""}),n&&o(this,n)}return(e.prototype=Object.create(Error.prototype)).constructor=e,Object.defineProperty(e.prototype,"name",{get:function(){return t}}),e.prototype.toString=function(){return this.name+": "+this.message},e}r.asPromise=n(537),r.base64=n(419),r.EventEmitter=n(211),r.float=n(945),r.inquire=n(199),r.utf8=n(997),r.pool=n(662),r.LongBits=n(630),r.emptyArray=Object.freeze?Object.freeze([]):[],r.emptyObject=Object.freeze?Object.freeze({}):{},r.isNode=Boolean(n.g.process&&n.g.process.versions&&n.g.process.versions.node),r.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},r.isString=function(t){return"string"==typeof t||t instanceof String},r.isObject=function(t){return t&&"object"==typeof t},r.isset=r.isSet=function(t,e){var n=t[e];return!(null==n||!t.hasOwnProperty(e))&&("object"!=typeof n||(Array.isArray(n)?n.length:Object.keys(n).length)>0)},r.Buffer=function(){try{var t=r.inquire("buffer").Buffer;return t.prototype.utf8Write?t:null}catch(t){return null}}(),r._Buffer_from=null,r._Buffer_allocUnsafe=null,r.newBuffer=function(t){return"number"==typeof t?r.Buffer?r._Buffer_allocUnsafe(t):new r.Array(t):r.Buffer?r._Buffer_from(t):"undefined"==typeof Uint8Array?t:new Uint8Array(t)},r.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,r.Long=n.g.dcodeIO&&n.g.dcodeIO.Long||r.inquire("long"),r.key2Re=/^true|false|0|1$/,r.key32Re=/^-?(?:0|[1-9][0-9]*)$/,r.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,r.longToHash=function(t){return t?r.LongBits.from(t).toHash():r.LongBits.zeroHash},r.longFromHash=function(t,e){var n=r.LongBits.fromHash(t);return r.Long?r.Long.fromBits(n.lo,n.hi,e):n.toNumber(Boolean(e))},r.merge=o,r.lcFirst=function(t){return t.charAt(0).toLowerCase()+t.substring(1)},r.newError=i,r.ProtocolError=i("ProtocolError"),r.oneOfGetter=function(t){for(var e={},n=0;n<t.length;++n)e[t[n]]=1;return function(){for(var t=Object.keys(this),n=t.length-1;n>-1;--n)if(1===e[t[n]]&&void 0!==this[t[n]]&&null!==this[t[n]])return t[n]}},r.oneOfSetter=function(t){return function(e){for(var n=0;n<t.length;++n)t[n]!==e&&delete this[t[n]]}},r.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},r._configure=function(){var t=r.Buffer;t?(r._Buffer_from=t.from!==Uint8Array.from&&t.from||function(e,n){return new t(e,n)},r._Buffer_allocUnsafe=t.allocUnsafe||function(e){return new t(e)}):r._Buffer_from=r._Buffer_allocUnsafe=null}},173:(t,e,n)=>{"use strict";t.exports=h;var r,o=n(693),i=o.LongBits,s=o.base64,a=o.utf8;function u(t,e,n){this.fn=t,this.len=e,this.next=void 0,this.val=n}function c(){}function l(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function h(){this.len=0,this.head=new u(c,0,0),this.tail=this.head,this.states=null}function f(t,e,n){e[n]=255&t}function p(t,e){this.len=t,this.next=void 0,this.val=e}function d(t,e,n){for(;t.hi;)e[n++]=127&t.lo|128,t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7;for(;t.lo>127;)e[n++]=127&t.lo|128,t.lo=t.lo>>>7;e[n++]=t.lo}function _(t,e,n){e[n]=255&t,e[n+1]=t>>>8&255,e[n+2]=t>>>16&255,e[n+3]=t>>>24}h.create=o.Buffer?function(){return(h.create=function(){return new r})()}:function(){return new h},h.alloc=function(t){return new o.Array(t)},o.Array!==Array&&(h.alloc=o.pool(h.alloc,o.Array.prototype.subarray)),h.prototype._push=function(t,e,n){return this.tail=this.tail.next=new u(t,e,n),this.len+=e,this},p.prototype=Object.create(u.prototype),p.prototype.fn=function(t,e,n){for(;t>127;)e[n++]=127&t|128,t>>>=7;e[n]=t},h.prototype.uint32=function(t){return this.len+=(this.tail=this.tail.next=new p((t>>>=0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this},h.prototype.int32=function(t){return t<0?this._push(d,10,i.fromNumber(t)):this.uint32(t)},h.prototype.sint32=function(t){return this.uint32((t<<1^t>>31)>>>0)},h.prototype.uint64=function(t){var e=i.from(t);return this._push(d,e.length(),e)},h.prototype.int64=h.prototype.uint64,h.prototype.sint64=function(t){var e=i.from(t).zzEncode();return this._push(d,e.length(),e)},h.prototype.bool=function(t){return this._push(f,1,t?1:0)},h.prototype.fixed32=function(t){return this._push(_,4,t>>>0)},h.prototype.sfixed32=h.prototype.fixed32,h.prototype.fixed64=function(t){var e=i.from(t);return this._push(_,4,e.lo)._push(_,4,e.hi)},h.prototype.sfixed64=h.prototype.fixed64,h.prototype.float=function(t){return this._push(o.float.writeFloatLE,4,t)},h.prototype.double=function(t){return this._push(o.float.writeDoubleLE,8,t)};var g=o.Array.prototype.set?function(t,e,n){e.set(t,n)}:function(t,e,n){for(var r=0;r<t.length;++r)e[n+r]=t[r]};h.prototype.bytes=function(t){var e=t.length>>>0;if(!e)return this._push(f,1,0);if(o.isString(t)){var n=h.alloc(e=s.length(t));s.decode(t,n,0),t=n}return this.uint32(e)._push(g,e,t)},h.prototype.string=function(t){var e=a.length(t);return e?this.uint32(e)._push(a.write,e,t):this._push(f,1,0)},h.prototype.fork=function(){return this.states=new l(this),this.head=this.tail=new u(c,0,0),this.len=0,this},h.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new u(c,0,0),this.len=0),this},h.prototype.ldelim=function(){var t=this.head,e=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=t.next,this.tail=e,this.len+=n),this},h.prototype.finish=function(){for(var t=this.head.next,e=this.constructor.alloc(this.len),n=0;t;)t.fn(t.val,e,n),n+=t.len,t=t.next;return e},h._configure=function(t){r=t}},155:(t,e,n)=>{"use strict";t.exports=s;var r=n(173);(s.prototype=Object.create(r.prototype)).constructor=s;var o=n(693),i=o.Buffer;function s(){r.call(this)}s.alloc=function(t){return(s.alloc=o._Buffer_allocUnsafe)(t)};var a=i&&i.prototype instanceof Uint8Array&&"set"===i.prototype.set.name?function(t,e,n){e.set(t,n)}:function(t,e,n){if(t.copy)t.copy(e,n,0,t.length);else for(var r=0;r<t.length;)e[n++]=t[r++]};function u(t,e,n){t.length<40?o.utf8.write(t,e,n):e.utf8Write(t,n)}s.prototype.bytes=function(t){o.isString(t)&&(t=o._Buffer_from(t,"base64"));var e=t.length>>>0;return this.uint32(e),e&&this._push(a,e,t),this},s.prototype.string=function(t){var e=i.byteLength(t);return this.uint32(e),e&&this._push(u,e,t),this}},28:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.generateUUID=e.utf8ByteToUnicodeStr=e.str2ab=e.splitProtocol=e.decodeSubProtocol=e.encodeProtocol=e.handleURLEncode=e.isURLEncode=e.getIPAddress=e.getAvailablePort=e.TAKE_HEAP_SNAPSHOT=e.STOP_CPU_PROFILE=e.START_CPU_PROFILE=e.GET_DEVICE_LOGS=e.LAN_DEBUG_PLUGIN_GET_DEVICE_INFO=e.LAN_DEBUG_GET_DEVICE_INFO=e.LAN_DEBUG_METHOD_REGISTER_PLUGIN=e.LAN_DEBUG_METHOD_GET_CLIENTS=e.LAN_DEBUG_CLIENT_OPEN=e.LAN_DEBUG_CLIENT_CLOSED=e.LAN_DEBUG_DEVTOOLS_PLUGIN=e.MP_HELPER_PROTOCOL=e.LAN_DEBUG_PROTOCOL=e.WXMP_PROTOCOL=e.ENGINE_DEBUG_SIMULATOR_PROTOCOL=e.ENGINE_DEBUG_MOBILE_PROTOCOL=e.ENGINE_DEBUG_CLIENT_PROTOCOL=void 0;const r=n(269);let o=8001;function i(t,e="0.0.0.0"){const n=o,s=r.createServer((()=>{}));if(n>8100)return console.warn("not available port, try start later"),o=8001,t(-1);s.on("error",(n=>{console.log(`GET AVAILABLE PORT ERROR, try ${o+1}...`),o++,i(t,e)})),s.listen({port:n,host:e,exclusive:!0},(()=>{s.once("close",(()=>{o=8001,console.log("GET AVAILABLE PORT",n),setTimeout((()=>{t(n)}),0)})),s.close()}))}e.ENGINE_DEBUG_CLIENT_PROTOCOL="ENGINEDEBUGCLIENT",e.ENGINE_DEBUG_MOBILE_PROTOCOL="ENGINEDEBUGMOBILE",e.ENGINE_DEBUG_SIMULATOR_PROTOCOL="ENGINEDEBUGSIMULATOR",e.WXMP_PROTOCOL="WXMP",e.LAN_DEBUG_PROTOCOL="LANDEBUG",e.MP_HELPER_PROTOCOL="MPHELPER",e.LAN_DEBUG_DEVTOOLS_PLUGIN="LANDEBUGDEVTOOLSPLUGIN",e.LAN_DEBUG_CLIENT_CLOSED="LANDEBUGCLIENTCLOSED",e.LAN_DEBUG_CLIENT_OPEN="LANDEBUGCLIENTOPEN",e.LAN_DEBUG_METHOD_GET_CLIENTS="LANDEBUGMETHODGETCLIENTS",e.LAN_DEBUG_METHOD_REGISTER_PLUGIN="LANDEBUGMETHODREGISTERPLUGIN",e.LAN_DEBUG_GET_DEVICE_INFO="LAN_DEBUG_GET_DEVICE_INFO",e.LAN_DEBUG_PLUGIN_GET_DEVICE_INFO="LAN_DEBUG_PLUGIN_GET_DEVICE_INFO",e.GET_DEVICE_LOGS="GET_DEVICE_LOGS",e.START_CPU_PROFILE="START_CPU_PROFILE",e.STOP_CPU_PROFILE="STOP_CPU_PROFILE",e.TAKE_HEAP_SNAPSHOT="TAKE_HEAP_SNAPSHOT",e.getAvailablePort=async function(t="0.0.0.0"){return new Promise((e=>{i(e,t)}))},e.getIPAddress=function(){const t=n(926).networkInterfaces();for(const e in t){const n=t[e];for(const t of n){const e=t;if("IPv4"===e.family&&"127.0.0.1"!==e.address&&!e.internal)return e.address}}return"0.0.0.0"},e.isURLEncode=t=>{t=t||"";try{return t!==decodeURI(t)}catch(t){return!0}},e.handleURLEncode=t=>((0,e.isURLEncode)(t)||(t=encodeURI(t)),t),e.encodeProtocol=(t,n)=>`${t}#${(0,e.handleURLEncode)(n)}`,e.decodeSubProtocol=t=>{if(t===e.ENGINE_DEBUG_SIMULATOR_PROTOCOL)return"模拟器";const[,n]=t.split("#");return decodeURI(n)},e.splitProtocol=t=>{const[e,n]=t.split("#");return[e,n]},e.str2ab=function(t){const e=[],n=t.length;let r;for(let o=0;o<n;o++)r=t.charCodeAt(o),r>=65536&&r<=1114111?(e.push(r>>18&7|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):r>=2048&&r<=65535?(e.push(r>>12&15|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=128&&r<=2047?(e.push(r>>6&31|192),e.push(63&r|128)):e.push(255&r);const o=new Int8Array(e.length);for(const t in e)o[t]=e[t];return o.buffer},e.utf8ByteToUnicodeStr=function(t){let e="";for(let n=0;n<t.length;){const r=t[n];let o=0;r>>>7==0?(e+=String.fromCharCode(t[n]),n+=1):252==(252&r)?(o=(3&t[n])<<30,o|=(63&t[n+1])<<24,o|=(63&t[n+2])<<18,o|=(63&t[n+3])<<12,o|=(63&t[n+4])<<6,o|=63&t[n+5],e+=String.fromCharCode(o),n+=6):248==(248&r)?(o=(7&t[n])<<24,o|=(63&t[n+1])<<18,o|=(63&t[n+2])<<12,o|=(63&t[n+3])<<6,o|=63&t[n+4],e+=String.fromCharCode(o),n+=5):240==(240&r)?(o=(15&t[n])<<18,o|=(63&t[n+1])<<12,o|=(63&t[n+2])<<6,o|=63&t[n+3],e+=String.fromCharCode(o),n+=4):224==(224&r)?(o=(31&t[n])<<12,o|=(63&t[n+1])<<6,o|=63&t[n+2],e+=String.fromCharCode(o),n+=3):192==(192&r)?(o=(63&t[n])<<6,o|=63&t[n+1],e+=String.fromCharCode(o),n+=2):(e+=String.fromCharCode(t[n]),n+=1)}return e},e.generateUUID=(t=6)=>{(t>=13||t<0)&&(t=13);const e=`${Date.now()}`.slice(-t).split("");for(let n=0;n<Math.floor(t/2);n++){const t=Math.floor(10*Math.random());e[n]="abcdefghij"[t]}return e.join("")}},771:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LanDebug=void 0;const r=n(28),o=n(451),i=navigator.userAgent.match(/landebugClientId\/([^\s]+)/),s=i?i[1]:void 0;e.LanDebug=class{constructor(t){this.id=0,this.__getClientResolve=null,this.__callbackMap=new Map,this.__registered=!1,this.__messager=t,this.__messager.registerCallback((t=>{var e;const{command:n,data:o}=t;if(n===r.LAN_DEBUG_DEVTOOLS_PLUGIN&&"object"==typeof o&&o.method)switch(o.method){case r.LAN_DEBUG_PLUGIN_GET_DEVICE_INFO:null===(e=this.__getClientResolve)||void 0===e||e.call(this,JSON.parse(o.data));break;case r.LAN_DEBUG_CLIENT_OPEN:{const t=JSON.parse(o.data),e=this.__callbackMap.get(o.method);e&&e(t);break}default:{const t=this.__callbackMap.get(o.method);t&&t(o.data)}}}))}_registerSelf(t){this.__registered||(this.__messager.send({command:r.LAN_DEBUG_DEVTOOLS_PLUGIN,data:{method:r.LAN_DEBUG_METHOD_REGISTER_PLUGIN,data:`${t}_${s}`}}),this.__registered=!0)}async getClientInfo(){return new Promise((t=>{this.__messager.send({command:r.LAN_DEBUG_DEVTOOLS_PLUGIN,data:{method:r.LAN_DEBUG_PLUGIN_GET_DEVICE_INFO,data:s}}),this.__getClientResolve=t}))}send(t,e){if(s){const n=o.messageHandler.encode(t,e,this.id++,s);this.__messager.sendRaw(n)}else console.warn("no client connected")}on(t,e){e="function"==typeof e?e:()=>{},this.__callbackMap.set(t,e)}}},451:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.injectMessagerJSONParser=e.messageHandler=void 0;const r=n(3),o=n(28),i=new class{encode(t,e,n,i=""){let s,a=!1;"string"==typeof e?(s=new Uint8Array((0,o.str2ab)(e)),a=!0):s=new Uint8Array(e);const u=r.LanDebugHeader.encode({version:2,method:t,id:n,isString:a,clientId:i}).finish(),c=new Uint32Array([u.length]);return new Uint8Array([...new Uint8Array(c.buffer),...u,...s])}decode(t){const e=new Uint8Array(t),n=e.slice(0,4),i=new Uint32Array(n)[0],s=e.slice(4,4+i);let a;try{a=r.LanDebugHeader.decode(s)}catch(t){return console.error(t.message),{success:!1,body:t.message}}const{isString:u}=a;let c="";if(u){if(u){const t=e.slice(4+i);c=(0,o.utf8ByteToUnicodeStr)(t)}}else c=e.slice(4+i).buffer;return{success:!0,finished:!0,header:a,body:c}}};e.messageHandler=i,e.injectMessagerJSONParser=async t=>{if("string"==typeof t)return JSON.parse(t);if(t.constructor.toString().includes("ArrayBuffer"))try{const{header:e,body:n,success:r}=i.decode(t);return r?{command:o.LAN_DEBUG_DEVTOOLS_PLUGIN,data:{method:null==e?void 0:e.method,data:n,clientId:null==e?void 0:e.clientId}}:{}}catch(t){return{}}return{}}},580:t=>{"use strict";const e=window.navigator||window.__global.navigator,n=window.WebSocket||window.__global.WebSocket,r=window.prompt||window.__global.prompt,o=e.userAgent.match(/port\/(\d*)/),i=o?parseInt(o[1]):9974,s=`ws://127.0.0.1:${i}`;t.exports=class{constructor(t,e=!0){this._needToken=!0,this._msgQueue=[],this._rawMsgQueue=[],this._tryTime=0,this._protocol=t,this._needToken=e,this._ws=null,this._msgQueue=[],this._rawMsgQueue=[],this._callback=new Set,this._parseJson=null,"complete"==document.readyState?setTimeout((()=>{this.connect()})):window.addEventListener("load",(()=>{this.connect()}))}connect(){if(!i)return;if(this._tryTime++>=10)return;let t=this._protocol;this._needToken&&(t=`${t}#${r("GET_MESSAGE_TOKEN")}#`),this._ws=new n(s,t),this._ws.binaryType="arraybuffer",this._ws.onopen=t=>{let e=[].concat(this._msgQueue),n=[].concat(this._rawMsgQueue);this._msgQueue=[],this._rawMsgQueue=[],e.forEach((t=>{this.send(t)})),n.forEach((t=>{this.sendRaw(t)}))},this._ws.onclose=t=>{this._ws=null,setTimeout((()=>{this._tryTime<10&&(this._tryTime++,this.connect())}),150)},this._ws.onmessage=async t=>{try{let e=this._parseJson?await this._parseJson(t.data):JSON.parse(t.data);this._callback.forEach((t=>{try{t.call(this,e)}catch(t){}}))}catch(t){}}}send(t){this._ws&&this._ws.readyState===n.OPEN?this._ws.send(JSON.stringify(t)):this._msgQueue.push(t)}sendRaw(t){this._ws&&this._ws.readyState===n.OPEN?this._ws.send(t):this._rawMsgQueue.push(t)}registerCallback(t){"function"==typeof t&&this._callback.add(t)}removeCallback(t){this._callback.delete(t)}}},426:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=navigator.userAgent,r=-1!==n.indexOf("appservicedevtools"),o=-1!==n.indexOf("gameservicedevtools"),i=o&&-1!==n.indexOf("gameEngine/true"),s=-1!==n.indexOf("remotedebugdevtools"),a=-1!==n.indexOf("compileType/game"),u=a&&-1!==n.indexOf("gameEngine/true"),c=-1!==n.indexOf("landebugdevtools"),l=-1!==n.indexOf("autotest-record");e.default={isMiniProgram:r,isGame:o,isGameEngine:i,isRemoteDebug:s,isGameRemoteDebug:a,isGameEngineRemoteDebug:u,isLanDebug:c,isAutoTestRecord:l}},514:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(580),o=n(451),i=n(771),s=function(){let t=1;return function(){return t++}}(),a=()=>{};function u(t,e){const n=s();return this.__callbackMap[n]={callback:t,resolve:e},n}const c={onBeforeInvoke:"APPSERVICE_ON_BEFORE_INVOKE_API",offBeforeInvoke:"APPSERVICE_OFF_BEFORE_INVOKE_API",onAfterInvoke:"APPSERVICE_ON_AFTER_INVOKE_API",offAfterInvoke:"APPSERVICE_OFF_AFTER_INVOKE_API"};e.default=class{constructor(t,e=!1){this.__lanDebug=null,this.__callbackMap={},this.__onEvent={},this.callbackCounter=1,this.callbackMap={},Object.defineProperty(this,"__callbackMap",{value:{},writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,"__onEvent",{value:{},writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,"__messager",{value:new r(`PLUGIN_${t}`),writable:!1,enumerable:!1,configurable:!1}),e&&(this.__messager._parseJson=o.injectMessagerJSONParser,Object.defineProperty(this,"__lanDebug",{value:new i.LanDebug(this.__messager),writable:!1,enumerable:!1,configurable:!1})),this.__messager.registerCallback((t=>{const{command:e,data:n}=t;if("INVOKE_CALLBACK"===e){const{callbackID:t,res:e}=n,r=this.__callbackMap[t];r&&("function"==typeof r.callback&&r.callback(e),"function"==typeof r.resolve&&r.resolve(e)),delete this.__callbackMap[t]}if("ON_EVENT"===e){const{eventName:t,res:e}=n,r=this.__onEvent[t];"function"==typeof r&&r(e)}if("PLUGIN_HOOK_CALLBACK"===e){console.log("devtools message com");const{callbackID:t,args:e,eventName:r}=n;let o;o=r?this.callbackMap[t].cb(r,e):this.callbackMap[t].cb(e),Promise.resolve(o).then((e=>{e&&this.__messager.send({command:"PLUGIN_HOOK_CALLBACK_RETURN",data:e,callbackID:t})}))}}))}get invoke(){return(t,e,n)=>new Promise((r=>{n="function"==typeof n?n:()=>{},this.__messager.send({command:t,data:e,callbackID:u.call(this,n,r)})}))}get on(){return(t,e)=>{e="function"==typeof e?e:a,this.__onEvent[t]=e}}wrapCallback(t,e,n){n="function"==typeof n?n:()=>{},this.deleteFromCallbackMap(t,e);const r=this.callbackCounter;return this.callbackMap[r]={cb:n,type:t,api:e},this.callbackCounter++,r}deleteFromCallbackMap(t,e){for(const n in this.callbackMap)if(this.callbackMap[n].type===t&&this.callbackMap[n].api===e){delete this.callbackMap[n];break}}recordOffMethod(t,e){const[n,r]=e,o=t.split("_");o[1]="ON";const i=o.join("_");this.deleteFromCallbackMap(i,n),this.invoke(t,{api:n,options:r})}recordOnMethod(t,e){const[n,r,o]=e;this.invoke(t,{callbackID:this.wrapCallback(t,n,o),api:n,options:r})}get appservice(){const t=c;return{onBeforeInvoke:(...e)=>{this.recordOnMethod(t.onBeforeInvoke,e)},offBeforeInvoke:(...e)=>{this.recordOffMethod(t.offBeforeInvoke,e)},onAfterInvoke:(...e)=>{this.recordOnMethod(t.onAfterInvoke,e)},offAfterInvoke:(...e)=>{this.recordOffMethod(t.offAfterInvoke,e)}}}get lanDebug(){return this.__lanDebug}}},269:()=>{},926:()=>{}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var __webpack_exports__={};(()=>{"use strict";const t=__webpack_require__(514),e=__webpack_require__(426),{isMiniProgram:n,isGame:r,isGameEngine:o,isRemoteDebug:i,isGameRemoteDebug:s,isGameEngineRemoteDebug:a,isLanDebug:u,isAutoTestRecord:c}=e.default;function l(e,n,r=!1,o){let i;o.onShown.addListener((function(o){window.parent.alert(`debugger:click:${e}`),o.pluginId||(Object.defineProperty(o,"pluginId",{value:e,writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(o,"wechatide",{value:new t.default(`${e}_${n}`,r),writable:!1,enumerable:!1,configurable:!1}),o.wechatide.invoke("REGISTER_PLUGIN",{data:{pluginId:`${e}_${n}`}},(t=>{t===`${e}_${n}`&&(function(t,e,n){var r;e&&(null===(r=t.lanDebug)||void 0===r||r._registerSelf(n))}(o.wechatide,r,`${e}_${n}`),o.dispatchEvent(new CustomEvent("wechatideReady",{detail:o.wechatide})))})),function(t,e){if(t&&t.document&&t.document.body){const n=t.document.body,r=n.classList.contains("dark");"dark"!==e||r||n.classList.add("dark"),"dark"!==e&&r&&n.classList.remove("dark")}}(o,window.parent.__theme__)),i=o,"function"==typeof o.onShown&&o.onShown()})),o.onHidden.addListener((function(){i&&"function"==typeof i.onHidden&&i.onHidden()}))}!function(){if(function(){try{const t=window.parent.$messager;t?(t.send({command:"RETRIEVE_DEVTOOLS_STYLESHEET"}),t.registerCallback((function(t){var e;"SET_DEVTOOLS_STYLESHEET"===t.command&&(e=t.data)&&chrome.devtools.panels.applyStyleSheet(e)}))):console.error("window.parent.$messager not exists")}catch(t){}}(),!(n||i||r||u))return;let t="";n?t="miniprogram":r?t="game":i&&(t=s?"gameremotedebug":"remotedebug"),u&&(t="landebug"),(n||r)&&window.addEventListener("message",(t=>{const e=t.data;"object"==typeof e&&"securityDetails"===e.command&&chrome.devtools.inspectedWindow.eval(`window.setSecurityDetails('${e.url}', '${JSON.stringify(e)}')`,(()=>{}))})),document.addEventListener("manifestReady",(function(e){var n,r;const o=e.detail;for(const e in o){const i=o[e],s=i.lanDebug||!1;if(top.wxMain&&("wxml"===e||"sensor"===e||"storage"===e||"appdata"===e||"trace"===e))continue;const a=(null===(n=i.devtools_type)||void 0===n?void 0:n.indexOf(t))>=0,u=!c||(null===(r=i.devtools_type)||void 0===r?void 0:r.indexOf("autotest"))>=0;a&&u?chrome.devtools.panels.create(i.name||"","",i.main||"",l.bind(null,e,t,s)):console.log("not going to show",i.name)}try{window.parent.$messager&&window.parent.$messager.send({command:"PANEL_CREATED"})}catch(t){}})),function(){const t=document.createElement("script"),e=navigator.userAgent.match(/proxy\/(\d*)/);e&&(t.src=`http://127.0.0.1:${e[1]}/ideplugin/devtools/manifest.js`,document.head.appendChild(t))}()}()})()})();