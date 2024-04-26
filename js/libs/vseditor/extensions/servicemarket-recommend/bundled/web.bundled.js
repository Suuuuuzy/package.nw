/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bundled/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global window, global*/
var util = __webpack_require__(9)
var assert = __webpack_require__(23)
function now() { return new Date().getTime() }

var slice = Array.prototype.slice
var console
var times = {}

if (typeof global !== "undefined" && global.console) {
    console = global.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = {}
}

var functions = [
    [log, "log"],
    [info, "info"],
    [warn, "warn"],
    [error, "error"],
    [time, "time"],
    [timeEnd, "timeEnd"],
    [trace, "trace"],
    [dir, "dir"],
    [consoleAssert, "assert"]
]

for (var i = 0; i < functions.length; i++) {
    var tuple = functions[i]
    var f = tuple[0]
    var name = tuple[1]

    if (!console[name]) {
        console[name] = f
    }
}

module.exports = console

function log() {}

function info() {
    console.log.apply(console, arguments)
}

function warn() {
    console.log.apply(console, arguments)
}

function error() {
    console.warn.apply(console, arguments)
}

function time(label) {
    times[label] = now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    delete times[label]
    var duration = now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function consoleAssert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {
//! _vsEditorConfig
// language
//! _global_
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLittleEndian = exports.OS = exports.setImmediate = exports.translationsConfigFile = exports.locale = exports.Language = exports.language = exports.isRootUser = exports.userAgent = exports.platform = exports.isIOS = exports.isWeb = exports.isNative = exports.isLinuxSnap = exports.isLinux = exports.isMacintosh = exports.isWindows = exports.PlatformToString = exports.isPreferringBrowserCodeLoad = exports.browserCodeLoadingCacheStrategy = exports.isElectronSandboxed = exports.globals = exports._global_ = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const LANGUAGE_DEFAULT = 'en';
// @ts-ignore
exports._global_ = (typeof global !== 'undefined' ? global :
    typeof self !== 'undefined' ? self :
        typeof globalThis !== 'undefined' ? globalThis :
            typeof window !== 'undefined' ? window :
                // @ts-ignore
                ((function () { return this; })() || {}));
const _vsEditorConfig = (exports._global_.vsEditorConfig = exports._global_.vsEditorConfig || {});
let _isWindows = false;
let _isMacintosh = false;
let _isLinux = false;
let _isLinuxSnap = false;
let _isNative = false;
let _isWeb = false;
let _isIOS = false;
let _locale = undefined;
let _language = LANGUAGE_DEFAULT;
let _translationsConfigFile = undefined;
let _userAgent = undefined;
exports.globals = (typeof self === 'object' ? self : typeof global === 'object' ? global : {});
let nodeProcess = undefined;
if (typeof exports.globals.vscode !== 'undefined' && typeof exports.globals.vscode.process !== 'undefined') {
    // Native environment (sandboxed)
    nodeProcess = exports.globals.vscode.process;
}
else if (typeof process !== 'undefined') {
    // Native environment (non-sandboxed)
    nodeProcess = process;
}
const isElectronRenderer = (typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer');
exports.isElectronSandboxed = isElectronRenderer && (nodeProcess === null || nodeProcess === void 0 ? void 0 : nodeProcess.sandboxed);
exports.browserCodeLoadingCacheStrategy = (() => {
    // Always enabled when sandbox is enabled
    if (exports.isElectronSandboxed) {
        return 'bypassHeatCheck';
    }
    // Otherwise, only enabled conditionally
    const env = nodeProcess === null || nodeProcess === void 0 ? void 0 : nodeProcess.env['VSCODE_BROWSER_CODE_LOADING'];
    if (typeof env === 'string') {
        if (env === 'none' || env === 'code' || env === 'bypassHeatCheck' || env === 'bypassHeatCheckAndEagerCompile') {
            return env;
        }
        return 'bypassHeatCheck';
    }
    return undefined;
})();
exports.isPreferringBrowserCodeLoad = typeof exports.browserCodeLoadingCacheStrategy === 'string';
// OS detection
if (typeof navigator === 'object' && typeof process !== 'object') {
    _userAgent = navigator.userAgent;
    _isWindows = _userAgent.indexOf('Windows') >= 0;
    _isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
    _isIOS = (_userAgent.indexOf('Macintosh') >= 0 || _userAgent.indexOf('iPad') >= 0 || _userAgent.indexOf('iPhone') >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
    _isLinux = _userAgent.indexOf('Linux') >= 0;
    _isWeb = true;
    _locale = navigator.language;
    _language = _locale;
}
else if (typeof nodeProcess === 'object') {
    _isWindows = (nodeProcess.platform === 'win32');
    _isMacintosh = (nodeProcess.platform === 'darwin');
    _isLinux = (nodeProcess.platform === 'linux');
    _isLinuxSnap = _isLinux && !!nodeProcess.env['SNAP'] && !!nodeProcess.env['SNAP_REVISION'];
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    const rawNlsConfig = nodeProcess.env['VSCODE_NLS_CONFIG'];
    if (rawNlsConfig) {
        try {
            const nlsConfig = JSON.parse(rawNlsConfig);
            const resolved = nlsConfig.availableLanguages['*'];
            _locale = nlsConfig.locale;
            // VSCode's default language is 'en'
            _language = resolved ? resolved : LANGUAGE_DEFAULT;
            _translationsConfigFile = nlsConfig._translationsConfigFile;
        }
        catch (e) {
        }
    }
    if (_vsEditorConfig.language) {
        _locale = _vsEditorConfig.language.toLowerCase();
        _language = _vsEditorConfig.language === 'en-US' ? LANGUAGE_DEFAULT : _vsEditorConfig.language;
    }
    _isNative = true;
}
function PlatformToString(platform) {
    switch (platform) {
        case 0 /* Web */: return 'Web';
        case 1 /* Mac */: return 'Mac';
        case 2 /* Linux */: return 'Linux';
        case 3 /* Windows */: return 'Windows';
    }
}
exports.PlatformToString = PlatformToString;
let _platform = 0 /* Web */;
if (_isMacintosh) {
    _platform = 1 /* Mac */;
}
else if (_isWindows) {
    _platform = 3 /* Windows */;
}
else if (_isLinux) {
    _platform = 2 /* Linux */;
}
exports.isWindows = _isWindows;
exports.isMacintosh = _isMacintosh;
exports.isLinux = _isLinux;
exports.isLinuxSnap = _isLinuxSnap;
exports.isNative = _isNative;
exports.isWeb = _isWeb;
exports.isIOS = _isIOS;
exports.platform = _platform;
exports.userAgent = _userAgent;
function isRootUser() {
    var _a;
    // @ts-ignore
    return _isNative && !_isWindows && (((_a = process.getuid) === null || _a === void 0 ? void 0 : _a.call(process)) === 0);
}
exports.isRootUser = isRootUser;
/**
 * The language used for the user interface. The format of
 * the string is all lower case (e.g. zh-tw for Traditional
 * Chinese)
 */
exports.language = _language;
var Language;
(function (Language) {
    function value() {
        return exports.language;
    }
    Language.value = value;
    function isDefaultVariant() {
        if (exports.language.length === 2) {
            return exports.language === 'en';
        }
        else if (exports.language.length >= 3) {
            return exports.language[0] === 'e' && exports.language[1] === 'n' && exports.language[2] === '-';
        }
        else {
            return false;
        }
    }
    Language.isDefaultVariant = isDefaultVariant;
    function isDefault() {
        return exports.language === 'en';
    }
    Language.isDefault = isDefault;
})(Language = exports.Language || (exports.Language = {}));
/**
 * The OS locale or the locale specified by --locale. The format of
 * the string is all lower case (e.g. zh-tw for Traditional
 * Chinese). The UI is not necessarily shown in the provided locale.
 */
exports.locale = _locale;
/**
 * The translatios that are available through language packs.
 */
exports.translationsConfigFile = _translationsConfigFile;
exports.setImmediate = (function defineSetImmediate() {
    if (exports.globals.setImmediate) {
        return exports.globals.setImmediate.bind(exports.globals);
    }
    if (typeof exports.globals.postMessage === 'function' && !exports.globals.importScripts) {
        let pending = [];
        exports.globals.addEventListener('message', (e) => {
            if (e.data && e.data.vscodeSetImmediateId) {
                for (let i = 0, len = pending.length; i < len; i++) {
                    const candidate = pending[i];
                    if (candidate.id === e.data.vscodeSetImmediateId) {
                        pending.splice(i, 1);
                        candidate.callback();
                        return;
                    }
                }
            }
        });
        let lastId = 0;
        return (callback) => {
            const myId = ++lastId;
            pending.push({
                id: myId,
                callback: callback
            });
            exports.globals.postMessage({ vscodeSetImmediateId: myId }, '*');
        };
    }
    if (typeof (nodeProcess === null || nodeProcess === void 0 ? void 0 : nodeProcess.nextTick) === 'function') {
        return nodeProcess.nextTick.bind(nodeProcess);
    }
    const _promise = Promise.resolve();
    return (callback) => _promise.then(callback);
})();
exports.OS = (_isMacintosh || _isIOS ? 2 /* Macintosh */ : (_isWindows ? 1 /* Windows */ : 3 /* Linux */));
let _isLittleEndian = true;
let _isLittleEndianComputed = false;
function isLittleEndian() {
    if (!_isLittleEndianComputed) {
        _isLittleEndianComputed = true;
        const test = new Uint8Array(2);
        test[0] = 1;
        test[1] = 2;
        const view = new Uint16Array(test.buffer);
        _isLittleEndian = (view[0] === (2 << 8) + 1);
    }
    return _isLittleEndian;
}
exports.isLittleEndian = isLittleEndian;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.refineServiceDecorator = exports.SyncDescriptor = exports.SĐ = exports.optional = exports.createDecorator = exports.CĐ = exports._util = void 0;
var _util;
(function (_util) {
    _util.serviceIds = new Map();
    _util.DI_TARGET = 'Đ_target';
    _util.DI_DEPENDENCIES = 'Đ_dependencies';
    function getServiceDependencies(ctor) {
        return ctor[_util.DI_DEPENDENCIES] || [];
    }
    _util.getServiceDependencies = getServiceDependencies;
})(_util = exports._util || (exports._util = {}));
function storeServiceDependency(id, target, index, optional) {
    if (!target) {
        return;
    }
    if (target[_util.DI_TARGET] === target) {
        target[_util.DI_DEPENDENCIES].push({ id, index, optional });
    }
    else {
        target[_util.DI_DEPENDENCIES] = [{ id, index, optional }];
        target[_util.DI_TARGET] = target;
    }
}
exports.CĐ = createDecorator;
function createDecorator(serviceId) {
    if (_util.serviceIds.has(serviceId)) {
        return _util.serviceIds.get(serviceId);
    }
    const id = function (target, _key, index) {
        if (arguments.length !== 3) {
            throw new Error('@Đ-IServiceName can only be used to decorate a parameter');
        }
        storeServiceDependency(id, target, index, false);
    };
    id.toString = () => serviceId;
    _util.serviceIds.set(serviceId, id);
    return id;
}
exports.createDecorator = createDecorator;
function optional(serviceIdentifier) {
    return function (target, _key, index) {
        if (arguments.length !== 3) {
            throw new Error('@optional-decorator can only be used to decorate a parameter');
        }
        storeServiceDependency(serviceIdentifier, target, index, true);
    };
}
exports.optional = optional;
const SĐ = (ctor, staticArguments = [], supportsDelayedInstantiation = false) => new SyncDescriptor(ctor, staticArguments, supportsDelayedInstantiation);
exports.SĐ = SĐ;
class SyncDescriptor {
    constructor(ctor, staticArguments = [], supportsDelayedInstantiation = false) {
        this.ctor = ctor;
        this.staticArguments = staticArguments;
        this.supportsDelayedInstantiation = supportsDelayedInstantiation;
    }
}
exports.SyncDescriptor = SyncDescriptor;
function refineServiceDecorator(serviceIdentifier) {
    return serviceIdentifier;
}
exports.refineServiceDecorator = refineServiceDecorator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promises = exports.DeferredPromise = exports.IntervalCounter = exports.TaskSequentializer = exports.retry = exports.IdleValue = exports.runWhenIdle = exports.ThrottledWorker = exports.RunOnceWorker = exports.RunOnceScheduler = exports.IntervalTimer = exports.TimeoutTimer = exports.ResourceQueue = exports.Queue = exports.Limiter = exports.firstParallel = exports.first = exports.sequence = exports.disposableTimeout = exports.timeout = exports.AutoOpenBarrier = exports.Barrier = exports.ThrottledDelayer = exports.Delayer = exports.SequencerByKey = exports.Sequencer = exports.Throttler = exports.asPromise = exports.raceTimeout = exports.raceCancellablePromises = exports.raceCancellation = exports.createCancelablePromise = exports.isThenable = void 0;
const cancellation_1 = __webpack_require__(20);
const errors_1 = __webpack_require__(10);
const event_1 = __webpack_require__(8);
const lifecycle_1 = __webpack_require__(12);
const resources_1 = __webpack_require__(13);
function isThenable(obj) {
    return !!obj && typeof obj.then === 'function';
}
exports.isThenable = isThenable;
function createCancelablePromise(callback) {
    const source = new cancellation_1.CancellationTokenSource();
    const thenable = callback(source.token);
    const promise = new Promise((resolve, reject) => {
        const subscription = source.token.onCancellationRequested(() => {
            subscription.dispose();
            source.dispose();
            reject((0, errors_1.canceled)());
        });
        Promise.resolve(thenable).then(value => {
            subscription.dispose();
            source.dispose();
            resolve(value);
        }, err => {
            subscription.dispose();
            source.dispose();
            reject(err);
        });
    });
    return new class {
        cancel() {
            source.cancel();
        }
        then(resolve, reject) {
            return promise.then(resolve, reject);
        }
        catch(reject) {
            return this.then(undefined, reject);
        }
        finally(onfinally) {
            return promise.finally(onfinally);
        }
    };
}
exports.createCancelablePromise = createCancelablePromise;
function raceCancellation(promise, token, defaultValue) {
    return Promise.race([promise, new Promise(resolve => token.onCancellationRequested(() => resolve(defaultValue)))]);
}
exports.raceCancellation = raceCancellation;
/**
 * Returns as soon as one of the promises is resolved and cancels remaining promises
 */
async function raceCancellablePromises(cancellablePromises) {
    let resolvedPromiseIndex = -1;
    const promises = cancellablePromises.map((promise, index) => promise.then(result => { resolvedPromiseIndex = index; return result; }));
    const result = await Promise.race(promises);
    cancellablePromises.forEach((cancellablePromise, index) => {
        if (index !== resolvedPromiseIndex) {
            cancellablePromise.cancel();
        }
    });
    return result;
}
exports.raceCancellablePromises = raceCancellablePromises;
function raceTimeout(promise, timeout, onTimeout) {
    let promiseResolve = undefined;
    const timer = setTimeout(() => {
        promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve(undefined);
        onTimeout === null || onTimeout === void 0 ? void 0 : onTimeout();
    }, timeout);
    return Promise.race([
        promise.finally(() => clearTimeout(timer)),
        new Promise(resolve => promiseResolve = resolve)
    ]);
}
exports.raceTimeout = raceTimeout;
function asPromise(callback) {
    return new Promise((resolve, reject) => {
        const item = callback();
        if (isThenable(item)) {
            item.then(resolve, reject);
        }
        else {
            resolve(item);
        }
    });
}
exports.asPromise = asPromise;
/**
 * A helper to prevent accumulation of sequential async tasks.
 *
 * Imagine a mail man with the sole task of delivering letters. As soon as
 * a letter submitted for delivery, he drives to the destination, delivers it
 * and returns to his base. Imagine that during the trip, N more letters were submitted.
 * When the mail man returns, he picks those N letters and delivers them all in a
 * single trip. Even though N+1 submissions occurred, only 2 deliveries were made.
 *
 * The throttler implements this via the queue() method, by providing it a task
 * factory. Following the example:
 *
 * 		const throttler = new Throttler();
 * 		const letters = [];
 *
 * 		function deliver() {
 * 			const lettersToDeliver = letters;
 * 			letters = [];
 * 			return makeTheTrip(lettersToDeliver);
 * 		}
 *
 * 		function onLetterReceived(l) {
 * 			letters.push(l);
 * 			throttler.queue(deliver);
 * 		}
 */
class Throttler {
    constructor() {
        this.activePromise = null;
        this.queuedPromise = null;
        this.queuedPromiseFactory = null;
    }
    queue(promiseFactory) {
        if (this.activePromise) {
            this.queuedPromiseFactory = promiseFactory;
            if (!this.queuedPromise) {
                const onComplete = () => {
                    this.queuedPromise = null;
                    const result = this.queue(this.queuedPromiseFactory);
                    this.queuedPromiseFactory = null;
                    return result;
                };
                this.queuedPromise = new Promise(resolve => {
                    this.activePromise.then(onComplete, onComplete).then(resolve);
                });
            }
            return new Promise((resolve, reject) => {
                this.queuedPromise.then(resolve, reject);
            });
        }
        this.activePromise = promiseFactory();
        return new Promise((resolve, reject) => {
            this.activePromise.then((result) => {
                this.activePromise = null;
                resolve(result);
            }, (err) => {
                this.activePromise = null;
                reject(err);
            });
        });
    }
}
exports.Throttler = Throttler;
class Sequencer {
    constructor() {
        this.current = Promise.resolve(null);
    }
    queue(promiseTask) {
        return this.current = this.current.then(() => promiseTask(), () => promiseTask());
    }
}
exports.Sequencer = Sequencer;
class SequencerByKey {
    constructor() {
        this.promiseMap = new Map();
    }
    queue(key, promiseTask) {
        var _a;
        const runningPromise = (_a = this.promiseMap.get(key)) !== null && _a !== void 0 ? _a : Promise.resolve();
        const newPromise = runningPromise
            .catch(() => { })
            .then(promiseTask)
            .finally(() => {
            if (this.promiseMap.get(key) === newPromise) {
                this.promiseMap.delete(key);
            }
        });
        this.promiseMap.set(key, newPromise);
        return newPromise;
    }
}
exports.SequencerByKey = SequencerByKey;
/**
 * A helper to delay (debounce) execution of a task that is being requested often.
 *
 * Following the throttler, now imagine the mail man wants to optimize the number of
 * trips proactively. The trip itself can be long, so he decides not to make the trip
 * as soon as a letter is submitted. Instead he waits a while, in case more
 * letters are submitted. After said waiting period, if no letters were submitted, he
 * decides to make the trip. Imagine that N more letters were submitted after the first
 * one, all within a short period of time between each other. Even though N+1
 * submissions occurred, only 1 delivery was made.
 *
 * The delayer offers this behavior via the trigger() method, into which both the task
 * to be executed and the waiting period (delay) must be passed in as arguments. Following
 * the example:
 *
 * 		const delayer = new Delayer(WAITING_PERIOD);
 * 		const letters = [];
 *
 * 		function letterReceived(l) {
 * 			letters.push(l);
 * 			delayer.trigger(() => { return makeTheTrip(); });
 * 		}
 */
class Delayer {
    constructor(defaultDelay) {
        this.defaultDelay = defaultDelay;
        this.timeout = null;
        this.completionPromise = null;
        this.doResolve = null;
        this.doReject = null;
        this.task = null;
    }
    trigger(task, delay = this.defaultDelay) {
        this.task = task;
        this.cancelTimeout();
        if (!this.completionPromise) {
            this.completionPromise = new Promise((resolve, reject) => {
                this.doResolve = resolve;
                this.doReject = reject;
            }).then(() => {
                this.completionPromise = null;
                this.doResolve = null;
                if (this.task) {
                    const task = this.task;
                    this.task = null;
                    return task();
                }
                return undefined;
            });
        }
        this.timeout = setTimeout(() => {
            this.timeout = null;
            if (this.doResolve) {
                this.doResolve(null);
            }
        }, delay);
        return this.completionPromise;
    }
    isTriggered() {
        return this.timeout !== null;
    }
    cancel() {
        this.cancelTimeout();
        if (this.completionPromise) {
            if (this.doReject) {
                this.doReject((0, errors_1.canceled)());
            }
            this.completionPromise = null;
        }
    }
    cancelTimeout() {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
    dispose() {
        this.cancel();
    }
}
exports.Delayer = Delayer;
/**
 * A helper to delay execution of a task that is being requested often, while
 * preventing accumulation of consecutive executions, while the task runs.
 *
 * The mail man is clever and waits for a certain amount of time, before going
 * out to deliver letters. While the mail man is going out, more letters arrive
 * and can only be delivered once he is back. Once he is back the mail man will
 * do one more trip to deliver the letters that have accumulated while he was out.
 */
class ThrottledDelayer {
    constructor(defaultDelay) {
        this.delayer = new Delayer(defaultDelay);
        this.throttler = new Throttler();
    }
    trigger(promiseFactory, delay) {
        return this.delayer.trigger(() => this.throttler.queue(promiseFactory), delay);
    }
    isTriggered() {
        return this.delayer.isTriggered();
    }
    cancel() {
        this.delayer.cancel();
    }
    dispose() {
        this.delayer.dispose();
    }
}
exports.ThrottledDelayer = ThrottledDelayer;
/**
 * A barrier that is initially closed and then becomes opened permanently.
 */
class Barrier {
    constructor() {
        this._isOpen = false;
        this._promise = new Promise((c, e) => {
            this._completePromise = c;
        });
    }
    isOpen() {
        return this._isOpen;
    }
    open() {
        this._isOpen = true;
        this._completePromise(true);
    }
    wait() {
        return this._promise;
    }
}
exports.Barrier = Barrier;
/**
 * A barrier that is initially closed and then becomes opened permanently after a certain period of
 * time or when open is called explicitly
 */
class AutoOpenBarrier extends Barrier {
    constructor(autoOpenTimeMs) {
        super();
        this._timeout = setTimeout(() => this.open(), autoOpenTimeMs);
    }
    open() {
        clearTimeout(this._timeout);
        super.open();
    }
}
exports.AutoOpenBarrier = AutoOpenBarrier;
function timeout(millis, token) {
    if (!token) {
        return createCancelablePromise(token => timeout(millis, token));
    }
    return new Promise((resolve, reject) => {
        const handle = setTimeout(() => {
            disposable.dispose();
            resolve();
        }, millis);
        const disposable = token.onCancellationRequested(() => {
            clearTimeout(handle);
            disposable.dispose();
            reject((0, errors_1.canceled)());
        });
    });
}
exports.timeout = timeout;
function disposableTimeout(handler, timeout = 0) {
    const timer = setTimeout(handler, timeout);
    return (0, lifecycle_1.toDisposable)(() => clearTimeout(timer));
}
exports.disposableTimeout = disposableTimeout;
/**
 * Runs the provided list of promise factories in sequential order. The returned
 * promise will complete to an array of results from each promise.
 */
function sequence(promiseFactories) {
    const results = [];
    let index = 0;
    const len = promiseFactories.length;
    function next() {
        return index < len ? promiseFactories[index++]() : null;
    }
    function thenHandler(result) {
        if (result !== undefined && result !== null) {
            results.push(result);
        }
        const n = next();
        if (n) {
            return n.then(thenHandler);
        }
        return Promise.resolve(results);
    }
    return Promise.resolve(null).then(thenHandler);
}
exports.sequence = sequence;
function first(promiseFactories, shouldStop = t => !!t, defaultValue = null) {
    let index = 0;
    const len = promiseFactories.length;
    const loop = () => {
        if (index >= len) {
            return Promise.resolve(defaultValue);
        }
        const factory = promiseFactories[index++];
        const promise = Promise.resolve(factory());
        return promise.then(result => {
            if (shouldStop(result)) {
                return Promise.resolve(result);
            }
            return loop();
        });
    };
    return loop();
}
exports.first = first;
function firstParallel(promiseList, shouldStop = t => !!t, defaultValue = null) {
    if (promiseList.length === 0) {
        return Promise.resolve(defaultValue);
    }
    let todo = promiseList.length;
    const finish = () => {
        var _a, _b;
        todo = -1;
        for (const promise of promiseList) {
            (_b = (_a = promise).cancel) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    };
    return new Promise((resolve, reject) => {
        for (const promise of promiseList) {
            promise.then(result => {
                if (--todo >= 0 && shouldStop(result)) {
                    finish();
                    resolve(result);
                }
                else if (todo === 0) {
                    resolve(defaultValue);
                }
            })
                .catch(err => {
                if (--todo >= 0) {
                    finish();
                    reject(err);
                }
            });
        }
    });
}
exports.firstParallel = firstParallel;
/**
 * A helper to queue N promises and run them all with a max degree of parallelism. The helper
 * ensures that at any time no more than M promises are running at the same time.
 */
class Limiter {
    constructor(maxDegreeOfParalellism) {
        this._size = 0;
        this.maxDegreeOfParalellism = maxDegreeOfParalellism;
        this.outstandingPromises = [];
        this.runningPromises = 0;
        this._onFinished = new event_1.Emitter();
    }
    get onFinished() {
        return this._onFinished.event;
    }
    get size() {
        return this._size;
    }
    queue(factory) {
        this._size++;
        return new Promise((c, e) => {
            this.outstandingPromises.push({ factory, c, e });
            this.consume();
        });
    }
    consume() {
        while (this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism) {
            const iLimitedTask = this.outstandingPromises.shift();
            this.runningPromises++;
            const promise = iLimitedTask.factory();
            promise.then(iLimitedTask.c, iLimitedTask.e);
            promise.then(() => this.consumed(), () => this.consumed());
        }
    }
    consumed() {
        this._size--;
        this.runningPromises--;
        if (this.outstandingPromises.length > 0) {
            this.consume();
        }
        else {
            this._onFinished.fire();
        }
    }
    dispose() {
        this._onFinished.dispose();
    }
}
exports.Limiter = Limiter;
/**
 * A queue is handles one promise at a time and guarantees that at any time only one promise is executing.
 */
class Queue extends Limiter {
    constructor() {
        super(1);
    }
}
exports.Queue = Queue;
/**
 * A helper to organize queues per resource. The ResourceQueue makes sure to manage queues per resource
 * by disposing them once the queue is empty.
 */
class ResourceQueue {
    constructor() {
        this.queues = new Map();
    }
    queueFor(resource, extUri = resources_1.extUri) {
        const key = extUri.getComparisonKey(resource);
        let queue = this.queues.get(key);
        if (!queue) {
            queue = new Queue();
            event_1.Event.once(queue.onFinished)(() => {
                queue === null || queue === void 0 ? void 0 : queue.dispose();
                this.queues.delete(key);
            });
            this.queues.set(key, queue);
        }
        return queue;
    }
    dispose() {
        this.queues.forEach(queue => queue.dispose());
        this.queues.clear();
    }
}
exports.ResourceQueue = ResourceQueue;
class TimeoutTimer {
    constructor(runner, timeout) {
        this._token = -1;
        if (typeof runner === 'function' && typeof timeout === 'number') {
            this.setIfNotSet(runner, timeout);
        }
    }
    dispose() {
        this.cancel();
    }
    cancel() {
        if (this._token !== -1) {
            clearTimeout(this._token);
            this._token = -1;
        }
    }
    cancelAndSet(runner, timeout) {
        this.cancel();
        this._token = setTimeout(() => {
            this._token = -1;
            runner();
        }, timeout);
    }
    setIfNotSet(runner, timeout) {
        if (this._token !== -1) {
            // timer is already set
            return;
        }
        this._token = setTimeout(() => {
            this._token = -1;
            runner();
        }, timeout);
    }
}
exports.TimeoutTimer = TimeoutTimer;
class IntervalTimer {
    constructor() {
        this._token = -1;
    }
    dispose() {
        this.cancel();
    }
    cancel() {
        if (this._token !== -1) {
            clearInterval(this._token);
            this._token = -1;
        }
    }
    cancelAndSet(runner, interval) {
        this.cancel();
        this._token = setInterval(() => {
            runner();
        }, interval);
    }
}
exports.IntervalTimer = IntervalTimer;
class RunOnceScheduler {
    constructor(runner, delay) {
        this.timeoutToken = -1;
        this.runner = runner;
        this.timeout = delay;
        this.timeoutHandler = this.onTimeout.bind(this);
    }
    /**
     * Dispose RunOnceScheduler
     */
    dispose() {
        this.cancel();
        this.runner = null;
    }
    /**
     * Cancel current scheduled runner (if any).
     */
    cancel() {
        if (this.isScheduled()) {
            clearTimeout(this.timeoutToken);
            this.timeoutToken = -1;
        }
    }
    /**
     * Cancel previous runner (if any) & schedule a new runner.
     */
    schedule(delay = this.timeout) {
        this.cancel();
        this.timeoutToken = setTimeout(this.timeoutHandler, delay);
    }
    get delay() {
        return this.timeout;
    }
    set delay(value) {
        this.timeout = value;
    }
    /**
     * Returns true if scheduled.
     */
    isScheduled() {
        return this.timeoutToken !== -1;
    }
    onTimeout() {
        this.timeoutToken = -1;
        if (this.runner) {
            this.doRun();
        }
    }
    doRun() {
        if (this.runner) {
            this.runner();
        }
    }
}
exports.RunOnceScheduler = RunOnceScheduler;
class RunOnceWorker extends RunOnceScheduler {
    constructor(runner, timeout) {
        super(runner, timeout);
        this.units = [];
    }
    work(unit) {
        this.units.push(unit);
        if (!this.isScheduled()) {
            this.schedule();
        }
    }
    doRun() {
        const units = this.units;
        this.units = [];
        if (this.runner) {
            this.runner(units);
        }
    }
    dispose() {
        this.units = [];
        super.dispose();
    }
}
exports.RunOnceWorker = RunOnceWorker;
/**
 * The `ThrottledWorker` will accept units of work `T`
 * to handle. The contract is:
 * * there is a maximum of units the worker can handle at once (via `chunkSize`)
 * * after having handled units, the worker needs to rest (via `throttleDelay`)
 */
class ThrottledWorker extends lifecycle_1.Disposable {
    constructor(maxWorkChunkSize, maxPendingWork, throttleDelay, handler) {
        super();
        this.maxWorkChunkSize = maxWorkChunkSize;
        this.maxPendingWork = maxPendingWork;
        this.throttleDelay = throttleDelay;
        this.handler = handler;
        this.pendingWork = [];
        this.throttler = this._register(new lifecycle_1.MutableDisposable());
        this.disposed = false;
    }
    /**
     * The number of work units that are pending to be processed.
     */
    get pending() { return this.pendingWork.length; }
    /**
     * Add units to be worked on. Use `pending` to figure out
     * how many units are not yet processed after this method
     * was called.
     *
     * @returns whether the work was accepted or not. If the
     * worker is disposed, it will not accept any more work.
     * If the number of pending units would become larger
     * than `maxPendingWork`, more work will also not be accepted.
     */
    work(units) {
        if (this.disposed) {
            return false; // work not accepted: disposed
        }
        // Check for reaching maximum of pending work
        if (typeof this.maxPendingWork === 'number') {
            // Throttled: simple check if pending + units exceeds max pending
            if (this.throttler.value) {
                if (this.pending + units.length > this.maxPendingWork) {
                    return false; // work not accepted: too much pending work
                }
            }
            // Unthrottled: same as throttled, but account for max chunk getting
            // worked on directly without being pending
            else {
                if (this.pending + units.length - this.maxWorkChunkSize > this.maxPendingWork) {
                    return false; // work not accepted: too much pending work
                }
            }
        }
        // Add to pending units first
        this.pendingWork.push(...units);
        // If not throttled, start working directly
        // Otherwise, when the throttle delay has
        // past, pending work will be worked again.
        if (!this.throttler.value) {
            this.doWork();
        }
        return true; // work accepted
    }
    doWork() {
        // Extract chunk to handle and handle it
        this.handler(this.pendingWork.splice(0, this.maxWorkChunkSize));
        // If we have remaining work, schedule it after a delay
        if (this.pendingWork.length > 0) {
            this.throttler.value = new RunOnceScheduler(() => {
                this.throttler.clear();
                this.doWork();
            }, this.throttleDelay);
            this.throttler.value.schedule();
        }
    }
    dispose() {
        super.dispose();
        this.disposed = true;
    }
}
exports.ThrottledWorker = ThrottledWorker;
(function () {
    if (typeof requestIdleCallback !== 'function' || typeof cancelIdleCallback !== 'function') {
        const dummyIdle = Object.freeze({
            didTimeout: true,
            timeRemaining() { return 15; }
        });
        exports.runWhenIdle = (runner) => {
            const handle = setTimeout(() => runner(dummyIdle));
            let disposed = false;
            return {
                dispose() {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                    clearTimeout(handle);
                }
            };
        };
    }
    else {
        exports.runWhenIdle = (runner, timeout) => {
            const handle = requestIdleCallback(runner, typeof timeout === 'number' ? { timeout } : undefined);
            let disposed = false;
            return {
                dispose() {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                    cancelIdleCallback(handle);
                }
            };
        };
    }
})();
/**
 * An implementation of the "idle-until-urgent"-strategy as introduced
 * here: https://philipwalton.com/articles/idle-until-urgent/
 */
class IdleValue {
    constructor(executor) {
        this._didRun = false;
        this._executor = () => {
            try {
                this._value = executor();
            }
            catch (err) {
                this._error = err;
            }
            finally {
                this._didRun = true;
            }
        };
        this._handle = (0, exports.runWhenIdle)(() => this._executor());
    }
    dispose() {
        this._handle.dispose();
    }
    get value() {
        if (!this._didRun) {
            this._handle.dispose();
            this._executor();
        }
        if (this._error) {
            throw this._error;
        }
        return this._value;
    }
}
exports.IdleValue = IdleValue;
//#endregion
async function retry(task, delay, retries) {
    let lastError;
    for (let i = 0; i < retries; i++) {
        try {
            return await task();
        }
        catch (error) {
            lastError = error;
            await timeout(delay);
        }
    }
    throw lastError;
}
exports.retry = retry;
class TaskSequentializer {
    hasPending(taskId) {
        if (!this._pending) {
            return false;
        }
        if (typeof taskId === 'number') {
            return this._pending.taskId === taskId;
        }
        return !!this._pending;
    }
    get pending() {
        return this._pending ? this._pending.promise : undefined;
    }
    cancelPending() {
        var _a;
        (_a = this._pending) === null || _a === void 0 ? void 0 : _a.cancel();
    }
    setPending(taskId, promise, onCancel) {
        this._pending = { taskId, cancel: () => onCancel === null || onCancel === void 0 ? void 0 : onCancel(), promise };
        promise.then(() => this.donePending(taskId), () => this.donePending(taskId));
        return promise;
    }
    donePending(taskId) {
        if (this._pending && taskId === this._pending.taskId) {
            // only set pending to done if the promise finished that is associated with that taskId
            this._pending = undefined;
            // schedule the next task now that we are free if we have any
            this.triggerNext();
        }
    }
    triggerNext() {
        if (this._next) {
            const next = this._next;
            this._next = undefined;
            // Run next task and complete on the associated promise
            next.run().then(next.promiseResolve, next.promiseReject);
        }
    }
    setNext(run) {
        // this is our first next task, so we create associated promise with it
        // so that we can return a promise that completes when the task has
        // completed.
        if (!this._next) {
            let promiseResolve;
            let promiseReject;
            const promise = new Promise((resolve, reject) => {
                promiseResolve = resolve;
                promiseReject = reject;
            });
            this._next = {
                run,
                promise,
                promiseResolve: promiseResolve,
                promiseReject: promiseReject
            };
        }
        // we have a previous next task, just overwrite it
        else {
            this._next.run = run;
        }
        return this._next.promise;
    }
}
exports.TaskSequentializer = TaskSequentializer;
//#endregion
//#region
/**
 * The `IntervalCounter` allows to count the number
 * of calls to `increment()` over a duration of
 * `interval`. This utility can be used to conditionally
 * throttle a frequent task when a certain threshold
 * is reached.
 */
class IntervalCounter {
    constructor(interval) {
        this.interval = interval;
        this.lastIncrementTime = 0;
        this.value = 0;
    }
    increment() {
        const now = Date.now();
        // We are outside of the range of `interval` and as such
        // start counting from 0 and remember the time
        if (now - this.lastIncrementTime > this.interval) {
            this.lastIncrementTime = now;
            this.value = 0;
        }
        this.value++;
        return this.value;
    }
}
exports.IntervalCounter = IntervalCounter;
/**
 * Creates a promise whose resolution or rejection can be controlled imperatively.
 */
class DeferredPromise {
    constructor() {
        this.rejected = false;
        this.resolved = false;
        this.p = new Promise((c, e) => {
            this.completeCallback = c;
            this.errorCallback = e;
        });
    }
    get isRejected() {
        return this.rejected;
    }
    get isResolved() {
        return this.resolved;
    }
    get isSettled() {
        return this.rejected || this.resolved;
    }
    complete(value) {
        return new Promise(resolve => {
            this.completeCallback(value);
            this.resolved = true;
            resolve();
        });
    }
    error(err) {
        return new Promise(resolve => {
            this.errorCallback(err);
            this.rejected = true;
            resolve();
        });
    }
    cancel() {
        new Promise(resolve => {
            this.errorCallback((0, errors_1.canceled)());
            this.rejected = true;
            resolve();
        });
    }
}
exports.DeferredPromise = DeferredPromise;
//#endregion
//#region Promises
var Promises;
(function (Promises) {
    /**
     * A drop-in replacement for `Promise.all` with the only difference
     * that the method awaits every promise to either fulfill or reject.
     *
     * Similar to `Promise.all`, only the first error will be returned
     * if any.
     */
    async function settled(promises) {
        let firstError = undefined;
        const result = await Promise.all(promises.map(promise => promise.then(value => value, error => {
            if (!firstError) {
                firstError = error;
            }
            return undefined; // do not rethrow so that other promises can settle
        })));
        if (typeof firstError !== 'undefined') {
            throw firstError;
        }
        return result; // cast is needed and protected by the `throw` above
    }
    Promises.settled = settled;
})(Promises = exports.Promises || (exports.Promises = {}));
//#endregion


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.delimiter = exports.sep = exports.toNamespacedPath = exports.parse = exports.format = exports.extname = exports.basename = exports.dirname = exports.relative = exports.resolve = exports.join = exports.isAbsolute = exports.normalize = exports.posix = exports.win32 = void 0;
// NOTE: VSCode's copy of nodejs path library to be usable in common (non-node) namespace
// Copied from: https://github.com/nodejs/node/blob/v12.8.1/lib/path.js
/**
 * Copyright Joyent, Inc. and other Node contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const process = __webpack_require__(28);
const CHAR_UPPERCASE_A = 65; /* A */
const CHAR_LOWERCASE_A = 97; /* a */
const CHAR_UPPERCASE_Z = 90; /* Z */
const CHAR_LOWERCASE_Z = 122; /* z */
const CHAR_DOT = 46; /* . */
const CHAR_FORWARD_SLASH = 47; /* / */
const CHAR_BACKWARD_SLASH = 92; /* \ */
const CHAR_COLON = 58; /* : */
const CHAR_QUESTION_MARK = 63; /* ? */
class ErrorInvalidArgType extends Error {
    constructor(name, expected, actual) {
        // determiner: 'must be' or 'must not be'
        let determiner;
        if (typeof expected === 'string' && expected.indexOf('not ') === 0) {
            determiner = 'must not be';
            expected = expected.replace(/^not /, '');
        }
        else {
            determiner = 'must be';
        }
        const type = name.indexOf('.') !== -1 ? 'property' : 'argument';
        let msg = `The "${name}" ${type} ${determiner} of type ${expected}`;
        msg += `. Received type ${typeof actual}`;
        super(msg);
        this.code = 'ERR_INVALID_ARG_TYPE';
    }
}
function validateString(value, name) {
    if (typeof value !== 'string') {
        throw new ErrorInvalidArgType(name, 'string', value);
    }
}
function isPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
    return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z ||
        code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
}
// Resolves . and .. elements in a path with directory names
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
    let res = '';
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code = 0;
    for (let i = 0; i <= path.length; ++i) {
        if (i < path.length) {
            code = path.charCodeAt(i);
        }
        else if (isPathSeparator(code)) {
            break;
        }
        else {
            code = CHAR_FORWARD_SLASH;
        }
        if (isPathSeparator(code)) {
            if (lastSlash === i - 1 || dots === 1) {
                // NOOP
            }
            else if (dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 ||
                    res.charCodeAt(res.length - 1) !== CHAR_DOT ||
                    res.charCodeAt(res.length - 2) !== CHAR_DOT) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf(separator);
                        if (lastSlashIndex === -1) {
                            res = '';
                            lastSegmentLength = 0;
                        }
                        else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                        }
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                    else if (res.length !== 0) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    res += res.length > 0 ? `${separator}..` : '..';
                    lastSegmentLength = 2;
                }
            }
            else {
                if (res.length > 0) {
                    res += `${separator}${path.slice(lastSlash + 1, i)}`;
                }
                else {
                    res = path.slice(lastSlash + 1, i);
                }
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        }
        else if (code === CHAR_DOT && dots !== -1) {
            ++dots;
        }
        else {
            dots = -1;
        }
    }
    return res;
}
function _format(sep, pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
        throw new ErrorInvalidArgType('pathObject', 'Object', pathObject);
    }
    const dir = pathObject.dir || pathObject.root;
    const base = pathObject.base ||
        `${pathObject.name || ''}${pathObject.ext || ''}`;
    if (!dir) {
        return base;
    }
    return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep}${base}`;
}
exports.win32 = {
    // path.resolve([from ...], to)
    resolve(...pathSegments) {
        let resolvedDevice = '';
        let resolvedTail = '';
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1; i--) {
            let path;
            if (i >= 0) {
                path = pathSegments[i];
                validateString(path, 'path');
                // Skip empty entries
                if (path.length === 0) {
                    continue;
                }
            }
            else if (resolvedDevice.length === 0) {
                path = process.cwd();
            }
            else {
                // Windows has the concept of drive-specific current working
                // directories. If we've resolved a drive letter but not yet an
                // absolute path, get cwd for that drive, or the process cwd if
                // the drive cwd is not available. We're sure the device is not
                // a UNC path at this points, because UNC paths are always absolute.
                path = process.env[`=${resolvedDevice}`] || process.cwd();
                // Verify that a cwd was found and that it actually points
                // to our drive. If not, default to the drive's root.
                if (path === undefined ||
                    path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() &&
                        path.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
                    path = `${resolvedDevice}\\`;
                }
            }
            const len = path.length;
            let rootEnd = 0;
            let device = '';
            let isAbsolute = false;
            const code = path.charCodeAt(0);
            // Try to match a root
            if (len === 1) {
                if (isPathSeparator(code)) {
                    // `path` contains just a path separator
                    rootEnd = 1;
                    isAbsolute = true;
                }
            }
            else if (isPathSeparator(code)) {
                // Possible UNC root
                // If we started with a separator, we know we at least have an
                // absolute path of some kind (UNC or otherwise)
                isAbsolute = true;
                if (isPathSeparator(path.charCodeAt(1))) {
                    // Matched double path separator at beginning
                    let j = 2;
                    let last = j;
                    // Match 1 or more non-path separators
                    while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        const firstPart = path.slice(last, j);
                        // Matched!
                        last = j;
                        // Match 1 or more path separators
                        while (j < len && isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j < len && j !== last) {
                            // Matched!
                            last = j;
                            // Match 1 or more non-path separators
                            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                                j++;
                            }
                            if (j === len || j !== last) {
                                // We matched a UNC root
                                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                                rootEnd = j;
                            }
                        }
                    }
                }
                else {
                    rootEnd = 1;
                }
            }
            else if (isWindowsDeviceRoot(code) &&
                path.charCodeAt(1) === CHAR_COLON) {
                // Possible device root
                device = path.slice(0, 2);
                rootEnd = 2;
                if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
                    // Treat separator following drive name as an absolute path
                    // indicator
                    isAbsolute = true;
                    rootEnd = 3;
                }
            }
            if (device.length > 0) {
                if (resolvedDevice.length > 0) {
                    if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
                        // This path points to another device so it is not applicable
                        continue;
                    }
                }
                else {
                    resolvedDevice = device;
                }
            }
            if (resolvedAbsolute) {
                if (resolvedDevice.length > 0) {
                    break;
                }
            }
            else {
                resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
                resolvedAbsolute = isAbsolute;
                if (isAbsolute && resolvedDevice.length > 0) {
                    break;
                }
            }
        }
        // At this point the path should be resolved to a full absolute path,
        // but handle relative paths to be safe (might happen when process.cwd()
        // fails)
        // Normalize the tail path
        resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, '\\', isPathSeparator);
        return resolvedAbsolute ?
            `${resolvedDevice}\\${resolvedTail}` :
            `${resolvedDevice}${resolvedTail}` || '.';
    },
    normalize(path) {
        validateString(path, 'path');
        const len = path.length;
        if (len === 0) {
            return '.';
        }
        let rootEnd = 0;
        let device;
        let isAbsolute = false;
        const code = path.charCodeAt(0);
        // Try to match a root
        if (len === 1) {
            // `path` contains just a single char, exit early to avoid
            // unnecessary work
            return isPosixPathSeparator(code) ? '\\' : path;
        }
        if (isPathSeparator(code)) {
            // Possible UNC root
            // If we started with a separator, we know we at least have an absolute
            // path of some kind (UNC or otherwise)
            isAbsolute = true;
            if (isPathSeparator(path.charCodeAt(1))) {
                // Matched double path separator at beginning
                let j = 2;
                let last = j;
                // Match 1 or more non-path separators
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                    j++;
                }
                if (j < len && j !== last) {
                    const firstPart = path.slice(last, j);
                    // Matched!
                    last = j;
                    // Match 1 or more path separators
                    while (j < len && isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        // Matched!
                        last = j;
                        // Match 1 or more non-path separators
                        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j === len) {
                            // We matched a UNC root only
                            // Return the normalized version of the UNC root since there
                            // is nothing left to process
                            return `\\\\${firstPart}\\${path.slice(last)}\\`;
                        }
                        if (j !== last) {
                            // We matched a UNC root with leftovers
                            device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                            rootEnd = j;
                        }
                    }
                }
            }
            else {
                rootEnd = 1;
            }
        }
        else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
            // Possible device root
            device = path.slice(0, 2);
            rootEnd = 2;
            if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
                // Treat separator following drive name as an absolute path
                // indicator
                isAbsolute = true;
                rootEnd = 3;
            }
        }
        let tail = rootEnd < len ?
            normalizeString(path.slice(rootEnd), !isAbsolute, '\\', isPathSeparator) :
            '';
        if (tail.length === 0 && !isAbsolute) {
            tail = '.';
        }
        if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
            tail += '\\';
        }
        if (device === undefined) {
            return isAbsolute ? `\\${tail}` : tail;
        }
        return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
    },
    isAbsolute(path) {
        validateString(path, 'path');
        const len = path.length;
        if (len === 0) {
            return false;
        }
        const code = path.charCodeAt(0);
        return isPathSeparator(code) ||
            // Possible device root
            len > 2 &&
                isWindowsDeviceRoot(code) &&
                path.charCodeAt(1) === CHAR_COLON &&
                isPathSeparator(path.charCodeAt(2));
    },
    join(...paths) {
        if (paths.length === 0) {
            return '.';
        }
        let joined;
        let firstPart;
        for (let i = 0; i < paths.length; ++i) {
            const arg = paths[i];
            validateString(arg, 'path');
            if (arg.length > 0) {
                if (joined === undefined) {
                    joined = firstPart = arg;
                }
                else {
                    joined += `\\${arg}`;
                }
            }
        }
        if (joined === undefined) {
            return '.';
        }
        // Make sure that the joined path doesn't start with two slashes, because
        // normalize() will mistake it for an UNC path then.
        //
        // This step is skipped when it is very clear that the user actually
        // intended to point at an UNC path. This is assumed when the first
        // non-empty string arguments starts with exactly two slashes followed by
        // at least one more non-slash character.
        //
        // Note that for normalize() to treat a path as an UNC path it needs to
        // have at least 2 components, so we don't filter for that here.
        // This means that the user can use join to construct UNC paths from
        // a server name and a share name; for example:
        //   path.join('//server', 'share') -> '\\\\server\\share\\')
        let needsReplace = true;
        let slashCount = 0;
        if (typeof firstPart === 'string' && isPathSeparator(firstPart.charCodeAt(0))) {
            ++slashCount;
            const firstLen = firstPart.length;
            if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
                ++slashCount;
                if (firstLen > 2) {
                    if (isPathSeparator(firstPart.charCodeAt(2))) {
                        ++slashCount;
                    }
                    else {
                        // We matched a UNC path in the first part
                        needsReplace = false;
                    }
                }
            }
        }
        if (needsReplace) {
            // Find any more consecutive slashes we need to replace
            while (slashCount < joined.length &&
                isPathSeparator(joined.charCodeAt(slashCount))) {
                slashCount++;
            }
            // Replace the slashes if needed
            if (slashCount >= 2) {
                joined = `\\${joined.slice(slashCount)}`;
            }
        }
        return exports.win32.normalize(joined);
    },
    // It will solve the relative path from `from` to `to`, for instance:
    //  from = 'C:\\orandea\\test\\aaa'
    //  to = 'C:\\orandea\\impl\\bbb'
    // The output of the function should be: '..\\..\\impl\\bbb'
    relative(from, to) {
        validateString(from, 'from');
        validateString(to, 'to');
        if (from === to) {
            return '';
        }
        const fromOrig = exports.win32.resolve(from);
        const toOrig = exports.win32.resolve(to);
        if (fromOrig === toOrig) {
            return '';
        }
        from = fromOrig.toLowerCase();
        to = toOrig.toLowerCase();
        if (from === to) {
            return '';
        }
        // Trim any leading backslashes
        let fromStart = 0;
        while (fromStart < from.length &&
            from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
            fromStart++;
        }
        // Trim trailing backslashes (applicable to UNC paths only)
        let fromEnd = from.length;
        while (fromEnd - 1 > fromStart &&
            from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
            fromEnd--;
        }
        const fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        let toStart = 0;
        while (toStart < to.length &&
            to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
            toStart++;
        }
        // Trim trailing backslashes (applicable to UNC paths only)
        let toEnd = to.length;
        while (toEnd - 1 > toStart &&
            to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
            toEnd--;
        }
        const toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        const length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
            const fromCode = from.charCodeAt(fromStart + i);
            if (fromCode !== to.charCodeAt(toStart + i)) {
                break;
            }
            else if (fromCode === CHAR_BACKWARD_SLASH) {
                lastCommonSep = i;
            }
        }
        // We found a mismatch before the first common path separator was seen, so
        // return the original `to`.
        if (i !== length) {
            if (lastCommonSep === -1) {
                return toOrig;
            }
        }
        else {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
                    // We get here if `from` is the exact base path for `to`.
                    // For example: from='C:\\foo\\bar'; to='C:\\foo\\bar\\baz'
                    return toOrig.slice(toStart + i + 1);
                }
                if (i === 2) {
                    // We get here if `from` is the device root.
                    // For example: from='C:\\'; to='C:\\foo'
                    return toOrig.slice(toStart + i);
                }
            }
            if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
                    // We get here if `to` is the exact base path for `from`.
                    // For example: from='C:\\foo\\bar'; to='C:\\foo'
                    lastCommonSep = i;
                }
                else if (i === 2) {
                    // We get here if `to` is the device root.
                    // For example: from='C:\\foo\\bar'; to='C:\\'
                    lastCommonSep = 3;
                }
            }
            if (lastCommonSep === -1) {
                lastCommonSep = 0;
            }
        }
        let out = '';
        // Generate the relative path based on the path difference between `to` and
        // `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
                out += out.length === 0 ? '..' : '\\..';
            }
        }
        toStart += lastCommonSep;
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) {
            return `${out}${toOrig.slice(toStart, toEnd)}`;
        }
        if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
            ++toStart;
        }
        return toOrig.slice(toStart, toEnd);
    },
    toNamespacedPath(path) {
        // Note: this will *probably* throw somewhere.
        if (typeof path !== 'string') {
            return path;
        }
        if (path.length === 0) {
            return '';
        }
        const resolvedPath = exports.win32.resolve(path);
        if (resolvedPath.length <= 2) {
            return path;
        }
        if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
            // Possible UNC root
            if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
                const code = resolvedPath.charCodeAt(2);
                if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
                    // Matched non-long UNC root, convert the path to a long UNC path
                    return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
                }
            }
        }
        else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) &&
            resolvedPath.charCodeAt(1) === CHAR_COLON &&
            resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
            // Matched device root, convert the path to a long UNC path
            return `\\\\?\\${resolvedPath}`;
        }
        return path;
    },
    dirname(path) {
        validateString(path, 'path');
        const len = path.length;
        if (len === 0) {
            return '.';
        }
        let rootEnd = -1;
        let offset = 0;
        const code = path.charCodeAt(0);
        if (len === 1) {
            // `path` contains just a path separator, exit early to avoid
            // unnecessary work or a dot.
            return isPathSeparator(code) ? path : '.';
        }
        // Try to match a root
        if (isPathSeparator(code)) {
            // Possible UNC root
            rootEnd = offset = 1;
            if (isPathSeparator(path.charCodeAt(1))) {
                // Matched double path separator at beginning
                let j = 2;
                let last = j;
                // Match 1 or more non-path separators
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                    j++;
                }
                if (j < len && j !== last) {
                    // Matched!
                    last = j;
                    // Match 1 or more path separators
                    while (j < len && isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        // Matched!
                        last = j;
                        // Match 1 or more non-path separators
                        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j === len) {
                            // We matched a UNC root only
                            return path;
                        }
                        if (j !== last) {
                            // We matched a UNC root with leftovers
                            // Offset by 1 to include the separator after the UNC root to
                            // treat it as a "normal root" on top of a (UNC) root
                            rootEnd = offset = j + 1;
                        }
                    }
                }
            }
            // Possible device root
        }
        else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
            rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
            offset = rootEnd;
        }
        let end = -1;
        let matchedSlash = true;
        for (let i = len - 1; i >= offset; --i) {
            if (isPathSeparator(path.charCodeAt(i))) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            }
            else {
                // We saw the first non-path separator
                matchedSlash = false;
            }
        }
        if (end === -1) {
            if (rootEnd === -1) {
                return '.';
            }
            end = rootEnd;
        }
        return path.slice(0, end);
    },
    basename(path, ext) {
        if (ext !== undefined) {
            validateString(ext, 'ext');
        }
        validateString(path, 'path');
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        // Check for a drive letter prefix so as not to mistake the following
        // path separator as an extra separator at the end of the path that can be
        // disregarded
        if (path.length >= 2 &&
            isWindowsDeviceRoot(path.charCodeAt(0)) &&
            path.charCodeAt(1) === CHAR_COLON) {
            start = 2;
        }
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext === path) {
                return '';
            }
            let extIdx = ext.length - 1;
            let firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= start; --i) {
                const code = path.charCodeAt(i);
                if (isPathSeparator(code)) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                // We matched the extension, so mark this as the end of our path
                                // component
                                end = i;
                            }
                        }
                        else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) {
                end = firstNonSlashEnd;
            }
            else if (end === -1) {
                end = path.length;
            }
            return path.slice(start, end);
        }
        for (i = path.length - 1; i >= start; --i) {
            if (isPathSeparator(path.charCodeAt(i))) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            }
            else if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // path component
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) {
            return '';
        }
        return path.slice(start, end);
    },
    extname(path) {
        validateString(path, 'path');
        let start = 0;
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        // Check for a drive letter prefix so as not to mistake the following
        // path separator as an extra separator at the end of the path that can be
        // disregarded
        if (path.length >= 2 &&
            path.charCodeAt(1) === CHAR_COLON &&
            isWindowsDeviceRoot(path.charCodeAt(0))) {
            start = startPart = 2;
        }
        for (let i = path.length - 1; i >= start; --i) {
            const code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            (preDotState === 1 &&
                startDot === end - 1 &&
                startDot === startPart + 1)) {
            return '';
        }
        return path.slice(startDot, end);
    },
    format: _format.bind(null, '\\'),
    parse(path) {
        validateString(path, 'path');
        const ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) {
            return ret;
        }
        const len = path.length;
        let rootEnd = 0;
        let code = path.charCodeAt(0);
        if (len === 1) {
            if (isPathSeparator(code)) {
                // `path` contains just a path separator, exit early to avoid
                // unnecessary work
                ret.root = ret.dir = path;
                return ret;
            }
            ret.base = ret.name = path;
            return ret;
        }
        // Try to match a root
        if (isPathSeparator(code)) {
            // Possible UNC root
            rootEnd = 1;
            if (isPathSeparator(path.charCodeAt(1))) {
                // Matched double path separator at beginning
                let j = 2;
                let last = j;
                // Match 1 or more non-path separators
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                    j++;
                }
                if (j < len && j !== last) {
                    // Matched!
                    last = j;
                    // Match 1 or more path separators
                    while (j < len && isPathSeparator(path.charCodeAt(j))) {
                        j++;
                    }
                    if (j < len && j !== last) {
                        // Matched!
                        last = j;
                        // Match 1 or more non-path separators
                        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                            j++;
                        }
                        if (j === len) {
                            // We matched a UNC root only
                            rootEnd = j;
                        }
                        else if (j !== last) {
                            // We matched a UNC root with leftovers
                            rootEnd = j + 1;
                        }
                    }
                }
            }
        }
        else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
            // Possible device root
            if (len <= 2) {
                // `path` contains just a drive root, exit early to avoid
                // unnecessary work
                ret.root = ret.dir = path;
                return ret;
            }
            rootEnd = 2;
            if (isPathSeparator(path.charCodeAt(2))) {
                if (len === 3) {
                    // `path` contains just a drive root, exit early to avoid
                    // unnecessary work
                    ret.root = ret.dir = path;
                    return ret;
                }
                rootEnd = 3;
            }
        }
        if (rootEnd > 0) {
            ret.root = path.slice(0, rootEnd);
        }
        let startDot = -1;
        let startPart = rootEnd;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        // Get non-dir info
        for (; i >= rootEnd; --i) {
            code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (end !== -1) {
            if (startDot === -1 ||
                // We saw a non-dot character immediately before the dot
                preDotState === 0 ||
                // The (right-most) trimmed path component is exactly '..'
                (preDotState === 1 &&
                    startDot === end - 1 &&
                    startDot === startPart + 1)) {
                ret.base = ret.name = path.slice(startPart, end);
            }
            else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
                ret.ext = path.slice(startDot, end);
            }
        }
        // If the directory is the root, use the entire root as the `dir` including
        // the trailing slash if any (`C:\abc` -> `C:\`). Otherwise, strip out the
        // trailing slash (`C:\abc\def` -> `C:\abc`).
        if (startPart > 0 && startPart !== rootEnd) {
            ret.dir = path.slice(0, startPart - 1);
        }
        else {
            ret.dir = ret.root;
        }
        return ret;
    },
    sep: '\\',
    delimiter: ';',
    win32: null,
    posix: null
};
exports.posix = {
    // path.resolve([from ...], to)
    resolve(...pathSegments) {
        let resolvedPath = '';
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            const path = i >= 0 ? pathSegments[i] : process.cwd();
            validateString(path, 'path');
            // Skip empty entries
            if (path.length === 0) {
                continue;
            }
            resolvedPath = `${path}/${resolvedPath}`;
            resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, '/', isPosixPathSeparator);
        if (resolvedAbsolute) {
            return `/${resolvedPath}`;
        }
        return resolvedPath.length > 0 ? resolvedPath : '.';
    },
    normalize(path) {
        validateString(path, 'path');
        if (path.length === 0) {
            return '.';
        }
        const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH;
        // Normalize the path
        path = normalizeString(path, !isAbsolute, '/', isPosixPathSeparator);
        if (path.length === 0) {
            if (isAbsolute) {
                return '/';
            }
            return trailingSeparator ? './' : '.';
        }
        if (trailingSeparator) {
            path += '/';
        }
        return isAbsolute ? `/${path}` : path;
    },
    isAbsolute(path) {
        validateString(path, 'path');
        return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    },
    join(...paths) {
        if (paths.length === 0) {
            return '.';
        }
        let joined;
        for (let i = 0; i < paths.length; ++i) {
            const arg = paths[i];
            validateString(arg, 'path');
            if (arg.length > 0) {
                if (joined === undefined) {
                    joined = arg;
                }
                else {
                    joined += `/${arg}`;
                }
            }
        }
        if (joined === undefined) {
            return '.';
        }
        return exports.posix.normalize(joined);
    },
    relative(from, to) {
        validateString(from, 'from');
        validateString(to, 'to');
        if (from === to) {
            return '';
        }
        // Trim leading forward slashes.
        from = exports.posix.resolve(from);
        to = exports.posix.resolve(to);
        if (from === to) {
            return '';
        }
        const fromStart = 1;
        const fromEnd = from.length;
        const fromLen = fromEnd - fromStart;
        const toStart = 1;
        const toLen = to.length - toStart;
        // Compare paths to find the longest common path from root
        const length = (fromLen < toLen ? fromLen : toLen);
        let lastCommonSep = -1;
        let i = 0;
        for (; i < length; i++) {
            const fromCode = from.charCodeAt(fromStart + i);
            if (fromCode !== to.charCodeAt(toStart + i)) {
                break;
            }
            else if (fromCode === CHAR_FORWARD_SLASH) {
                lastCommonSep = i;
            }
        }
        if (i === length) {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
                    // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                }
                if (i === 0) {
                    // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                }
            }
            else if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
                    // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                }
                else if (i === 0) {
                    // We get here if `to` is the root.
                    // For example: from='/foo/bar'; to='/'
                    lastCommonSep = 0;
                }
            }
        }
        let out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`.
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                out += out.length === 0 ? '..' : '/..';
            }
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts.
        return `${out}${to.slice(toStart + lastCommonSep)}`;
    },
    toNamespacedPath(path) {
        // Non-op on posix systems
        return path;
    },
    dirname(path) {
        validateString(path, 'path');
        if (path.length === 0) {
            return '.';
        }
        const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let end = -1;
        let matchedSlash = true;
        for (let i = path.length - 1; i >= 1; --i) {
            if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            }
            else {
                // We saw the first non-path separator
                matchedSlash = false;
            }
        }
        if (end === -1) {
            return hasRoot ? '/' : '.';
        }
        if (hasRoot && end === 1) {
            return '//';
        }
        return path.slice(0, end);
    },
    basename(path, ext) {
        if (ext !== undefined) {
            validateString(ext, 'ext');
        }
        validateString(path, 'path');
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext === path) {
                return '';
            }
            let extIdx = ext.length - 1;
            let firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= 0; --i) {
                const code = path.charCodeAt(i);
                if (code === CHAR_FORWARD_SLASH) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                // We matched the extension, so mark this as the end of our path
                                // component
                                end = i;
                            }
                        }
                        else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) {
                end = firstNonSlashEnd;
            }
            else if (end === -1) {
                end = path.length;
            }
            return path.slice(start, end);
        }
        for (i = path.length - 1; i >= 0; --i) {
            if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            }
            else if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // path component
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) {
            return '';
        }
        return path.slice(start, end);
    },
    extname(path) {
        validateString(path, 'path');
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        for (let i = path.length - 1; i >= 0; --i) {
            const code = path.charCodeAt(i);
            if (code === CHAR_FORWARD_SLASH) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            (preDotState === 1 &&
                startDot === end - 1 &&
                startDot === startPart + 1)) {
            return '';
        }
        return path.slice(startDot, end);
    },
    format: _format.bind(null, '/'),
    parse(path) {
        validateString(path, 'path');
        const ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) {
            return ret;
        }
        const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
        let start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        }
        else {
            start = 0;
        }
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        // Get non-dir info
        for (; i >= start; --i) {
            const code = path.charCodeAt(i);
            if (code === CHAR_FORWARD_SLASH) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) {
                    startDot = i;
                }
                else if (preDotState !== 1) {
                    preDotState = 1;
                }
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (end !== -1) {
            const start = startPart === 0 && isAbsolute ? 1 : startPart;
            if (startDot === -1 ||
                // We saw a non-dot character immediately before the dot
                preDotState === 0 ||
                // The (right-most) trimmed path component is exactly '..'
                (preDotState === 1 &&
                    startDot === end - 1 &&
                    startDot === startPart + 1)) {
                ret.base = ret.name = path.slice(start, end);
            }
            else {
                ret.name = path.slice(start, startDot);
                ret.base = path.slice(start, end);
                ret.ext = path.slice(startDot, end);
            }
        }
        if (startPart > 0) {
            ret.dir = path.slice(0, startPart - 1);
        }
        else if (isAbsolute) {
            ret.dir = '/';
        }
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
exports.posix.win32 = exports.win32.win32 = exports.win32;
exports.posix.posix = exports.win32.posix = exports.posix;
exports.normalize = (process.platform === 'win32' ? exports.win32.normalize : exports.posix.normalize);
exports.isAbsolute = (process.platform === 'win32' ? exports.win32.isAbsolute : exports.posix.isAbsolute);
exports.join = (process.platform === 'win32' ? exports.win32.join : exports.posix.join);
exports.resolve = (process.platform === 'win32' ? exports.win32.resolve : exports.posix.resolve);
exports.relative = (process.platform === 'win32' ? exports.win32.relative : exports.posix.relative);
exports.dirname = (process.platform === 'win32' ? exports.win32.dirname : exports.posix.dirname);
exports.basename = (process.platform === 'win32' ? exports.win32.basename : exports.posix.basename);
exports.extname = (process.platform === 'win32' ? exports.win32.extname : exports.posix.extname);
exports.format = (process.platform === 'win32' ? exports.win32.format : exports.posix.format);
exports.parse = (process.platform === 'win32' ? exports.win32.parse : exports.posix.parse);
exports.toNamespacedPath = (process.platform === 'win32' ? exports.win32.toNamespacedPath : exports.posix.toNamespacedPath);
exports.sep = (process.platform === 'win32' ? exports.win32.sep : exports.posix.sep);
exports.delimiter = (process.platform === 'win32' ? exports.win32.delimiter : exports.posix.delimiter);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.uriToFsPath = exports.URI = void 0;
const platform_1 = __webpack_require__(2);
const paths = __webpack_require__(6);
const _schemePattern = /^\w[\w\d+.-]*$/;
const _singleSlashStart = /^\//;
const _doubleSlashStart = /^\/\//;
function _validateUri(ret, _strict) {
    // scheme, must be set
    if (!ret.scheme && _strict) {
        throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${ret.authority}", path: "${ret.path}", query: "${ret.query}", fragment: "${ret.fragment}"}`);
    }
    // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
    // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw new Error('[UriError]: Scheme contains illegal characters.');
    }
    // path, http://tools.ietf.org/html/rfc3986#section-3.3
    // If a URI contains an authority component, then the path component
    // must either be empty or begin with a slash ("/") character.  If a URI
    // does not contain an authority component, then the path cannot begin
    // with two slash characters ("//").
    if (ret.path) {
        if (ret.authority) {
            if (!_singleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
        }
        else {
            if (_doubleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
            }
        }
    }
}
// for a while we allowed uris *without* schemes and this is the migration
// for them, e.g. an uri without scheme and without strict-mode warns and falls
// back to the file-scheme. that should cause the least carnage and still be a
// clear warning
function _schemeFix(scheme, _strict) {
    if (!scheme && !_strict) {
        return 'file';
    }
    return scheme;
}
// implements a bit of https://tools.ietf.org/html/rfc3986#section-5
function _referenceResolution(scheme, path) {
    // the slash-character is our 'default base' as we don't
    // support constructing URIs relative to other URIs. This
    // also means that we alter and potentially break paths.
    // see https://tools.ietf.org/html/rfc3986#section-5.1.4
    switch (scheme) {
        case 'https':
        case 'http':
        case 'file':
            if (!path) {
                path = _slash;
            }
            else if (path[0] !== _slash) {
                path = _slash + path;
            }
            break;
    }
    return path;
}
const _empty = '';
const _slash = '/';
const _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
 * This class is a simple parser which creates the basic component parts
 * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
 * and encoding.
 *
 * ```txt
 *       foo://example.com:8042/over/there?name=ferret#nose
 *       \_/   \______________/\_________/ \_________/ \__/
 *        |           |            |            |        |
 *     scheme     authority       path        query   fragment
 *        |   _____________________|__
 *       / \ /                        \
 *       urn:example:animal:ferret:nose
 * ```
 */
class URI {
    /**
     * @internal
     */
    constructor(schemeOrData, authority, path, query, fragment, _strict = false) {
        if (typeof schemeOrData === 'object') {
            this.scheme = schemeOrData.scheme || _empty;
            this.authority = schemeOrData.authority || _empty;
            this.path = schemeOrData.path || _empty;
            this.query = schemeOrData.query || _empty;
            this.fragment = schemeOrData.fragment || _empty;
            // no validation because it's this URI
            // that creates uri components.
            // _validateUri(this);
        }
        else {
            this.scheme = _schemeFix(schemeOrData, _strict);
            this.authority = authority || _empty;
            this.path = _referenceResolution(this.scheme, path || _empty);
            this.query = query || _empty;
            this.fragment = fragment || _empty;
            _validateUri(this, _strict);
        }
    }
    static isUri(thing) {
        if (thing instanceof URI) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.authority === 'string'
            && typeof thing.fragment === 'string'
            && typeof thing.path === 'string'
            && typeof thing.query === 'string'
            && typeof thing.scheme === 'string'
            && typeof thing.fsPath === 'string'
            && typeof thing.with === 'function'
            && typeof thing.toString === 'function';
    }
    // ---- filesystem path -----------------------
    /**
     * Returns a string representing the corresponding file system path of this URI.
     * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
     * platform specific path separator.
     *
     * * Will *not* validate the path for invalid characters and semantics.
     * * Will *not* look at the scheme of this URI.
     * * The result shall *not* be used for display purposes but for accessing a file on disk.
     *
     *
     * The *difference* to `URI#path` is the use of the platform specific separator and the handling
     * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
     *
     * ```ts
        const u = URI.parse('file://server/c$/folder/file.txt')
        u.authority === 'server'
        u.path === '/shares/c$/file.txt'
        u.fsPath === '\\server\c$\folder\file.txt'
    ```
     *
     * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
     * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
     * with URIs that represent files on disk (`file` scheme).
     */
    get fsPath() {
        // if (this.scheme !== 'file') {
        // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
        // }
        return uriToFsPath(this, false);
    }
    // ---- modify to new -------------------------
    with(change) {
        if (!change) {
            return this;
        }
        let { scheme, authority, path, query, fragment } = change;
        if (scheme === undefined) {
            scheme = this.scheme;
        }
        else if (scheme === null) {
            scheme = _empty;
        }
        if (authority === undefined) {
            authority = this.authority;
        }
        else if (authority === null) {
            authority = _empty;
        }
        if (path === undefined) {
            path = this.path;
        }
        else if (path === null) {
            path = _empty;
        }
        if (query === undefined) {
            query = this.query;
        }
        else if (query === null) {
            query = _empty;
        }
        if (fragment === undefined) {
            fragment = this.fragment;
        }
        else if (fragment === null) {
            fragment = _empty;
        }
        if (scheme === this.scheme
            && authority === this.authority
            && path === this.path
            && query === this.query
            && fragment === this.fragment) {
            return this;
        }
        return new Uri(scheme, authority, path, query, fragment);
    }
    // ---- parse & validate ------------------------
    /**
     * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */
    static parse(value, _strict = false) {
        const match = _regexp.exec(value);
        if (!match) {
            return new Uri(_empty, _empty, _empty, _empty, _empty);
        }
        return new Uri(match[2] || _empty, percentDecode(match[4] || _empty), percentDecode(match[5] || _empty), percentDecode(match[7] || _empty), percentDecode(match[9] || _empty), _strict);
    }
    /**
     * Creates a new URI from a file system path, e.g. `c:\my\files`,
     * `/usr/home`, or `\\server\share\some\path`.
     *
     * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
     * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
     * `URI.parse('file://' + path)` because the path might contain characters that are
     * interpreted (# and ?). See the following sample:
     * ```ts
    const good = URI.file('/coding/c#/project1');
    good.scheme === 'file';
    good.path === '/coding/c#/project1';
    good.fragment === '';
    const bad = URI.parse('file://' + '/coding/c#/project1');
    bad.scheme === 'file';
    bad.path === '/coding/c'; // path is now broken
    bad.fragment === '/project1';
    ```
     *
     * @param path A file system path (see `URI#fsPath`)
     */
    static file(path) {
        let authority = _empty;
        // normalize to fwd-slashes on windows,
        // on other systems bwd-slashes are valid
        // filename character, eg /f\oo/ba\r.txt
        if (platform_1.isWindows) {
            path = path.replace(/\\/g, _slash);
        }
        // check for authority as used in UNC shares
        // or use the path as given
        if (path[0] === _slash && path[1] === _slash) {
            const idx = path.indexOf(_slash, 2);
            if (idx === -1) {
                authority = path.substring(2);
                path = _slash;
            }
            else {
                authority = path.substring(2, idx);
                path = path.substring(idx) || _slash;
            }
        }
        return new Uri('file', authority, path, _empty, _empty);
    }
    static from(components) {
        const result = new Uri(components.scheme, components.authority, components.path, components.query, components.fragment);
        _validateUri(result, true);
        return result;
    }
    /**
     * Join a URI path with path fragments and normalizes the resulting path.
     *
     * @param uri The input URI.
     * @param pathFragment The path fragment to add to the URI path.
     * @returns The resulting URI.
     */
    static joinPath(uri, ...pathFragment) {
        if (!uri.path) {
            throw new Error(`[UriError]: cannot call joinPath on URI without path`);
        }
        let newPath;
        if (platform_1.isWindows && uri.scheme === 'file') {
            newPath = URI.file(paths.win32.join(uriToFsPath(uri, true), ...pathFragment)).path;
        }
        else {
            newPath = paths.posix.join(uri.path, ...pathFragment);
        }
        return uri.with({ path: newPath });
    }
    // ---- printing/externalize ---------------------------
    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    toString(skipEncoding = false) {
        return _asFormatted(this, skipEncoding);
    }
    toJSON() {
        return this;
    }
    static revive(data) {
        if (!data) {
            return data;
        }
        else if (data instanceof URI) {
            return data;
        }
        else {
            const result = new Uri(data);
            result._formatted = data.external;
            result._fsPath = data._sep === _pathSepMarker ? data.fsPath : null;
            return result;
        }
    }
}
exports.URI = URI;
const _pathSepMarker = platform_1.isWindows ? 1 : undefined;
// This class exists so that URI is compatibile with vscode.Uri (API).
class Uri extends URI {
    constructor() {
        super(...arguments);
        this._formatted = null;
        this._fsPath = null;
    }
    get fsPath() {
        if (!this._fsPath) {
            this._fsPath = uriToFsPath(this, false);
        }
        return this._fsPath;
    }
    toString(skipEncoding = false) {
        if (!skipEncoding) {
            if (!this._formatted) {
                this._formatted = _asFormatted(this, false);
            }
            return this._formatted;
        }
        else {
            // we don't cache that
            return _asFormatted(this, true);
        }
    }
    toJSON() {
        const res = {
            $mid: 1 /* Uri */
        };
        // cached state
        if (this._fsPath) {
            res.fsPath = this._fsPath;
            res._sep = _pathSepMarker;
        }
        if (this._formatted) {
            res.external = this._formatted;
        }
        // uri components
        if (this.path) {
            res.path = this.path;
        }
        if (this.scheme) {
            res.scheme = this.scheme;
        }
        if (this.authority) {
            res.authority = this.authority;
        }
        if (this.query) {
            res.query = this.query;
        }
        if (this.fragment) {
            res.fragment = this.fragment;
        }
        return res;
    }
}
// reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2
const encodeTable = {
    [58 /* Colon */]: '%3A',
    [47 /* Slash */]: '%2F',
    [63 /* QuestionMark */]: '%3F',
    [35 /* Hash */]: '%23',
    [91 /* OpenSquareBracket */]: '%5B',
    [93 /* CloseSquareBracket */]: '%5D',
    [64 /* AtSign */]: '%40',
    [33 /* ExclamationMark */]: '%21',
    [36 /* DollarSign */]: '%24',
    [38 /* Ampersand */]: '%26',
    [39 /* SingleQuote */]: '%27',
    [40 /* OpenParen */]: '%28',
    [41 /* CloseParen */]: '%29',
    [42 /* Asterisk */]: '%2A',
    [43 /* Plus */]: '%2B',
    [44 /* Comma */]: '%2C',
    [59 /* Semicolon */]: '%3B',
    [61 /* Equals */]: '%3D',
    [32 /* Space */]: '%20',
};
function encodeURIComponentFast(uriComponent, allowSlash) {
    let res = undefined;
    let nativeEncodePos = -1;
    for (let pos = 0; pos < uriComponent.length; pos++) {
        const code = uriComponent.charCodeAt(pos);
        // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3
        if ((code >= 97 /* a */ && code <= 122 /* z */)
            || (code >= 65 /* A */ && code <= 90 /* Z */)
            || (code >= 48 /* Digit0 */ && code <= 57 /* Digit9 */)
            || code === 45 /* Dash */
            || code === 46 /* Period */
            || code === 95 /* Underline */
            || code === 126 /* Tilde */
            || (allowSlash && code === 47 /* Slash */)) {
            // check if we are delaying native encode
            if (nativeEncodePos !== -1) {
                res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                nativeEncodePos = -1;
            }
            // check if we write into a new string (by default we try to return the param)
            if (res !== undefined) {
                res += uriComponent.charAt(pos);
            }
        }
        else {
            // encoding needed, we need to allocate a new string
            if (res === undefined) {
                res = uriComponent.substr(0, pos);
            }
            // check with default table first
            const escaped = encodeTable[code];
            if (escaped !== undefined) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                // append escaped variant to result
                res += escaped;
            }
            else if (nativeEncodePos === -1) {
                // use native encode only when needed
                nativeEncodePos = pos;
            }
        }
    }
    if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== undefined ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
    let res = undefined;
    for (let pos = 0; pos < path.length; pos++) {
        const code = path.charCodeAt(pos);
        if (code === 35 /* Hash */ || code === 63 /* QuestionMark */) {
            if (res === undefined) {
                res = path.substr(0, pos);
            }
            res += encodeTable[code];
        }
        else {
            if (res !== undefined) {
                res += path[pos];
            }
        }
    }
    return res !== undefined ? res : path;
}
/**
 * Compute `fsPath` for the given uri
 */
function uriToFsPath(uri, keepDriveLetterCasing) {
    let value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
        // unc path: file://shares/c$/far/boo
        value = `//${uri.authority}${uri.path}`;
    }
    else if (uri.path.charCodeAt(0) === 47 /* Slash */
        && (uri.path.charCodeAt(1) >= 65 /* A */ && uri.path.charCodeAt(1) <= 90 /* Z */ || uri.path.charCodeAt(1) >= 97 /* a */ && uri.path.charCodeAt(1) <= 122 /* z */)
        && uri.path.charCodeAt(2) === 58 /* Colon */) {
        if (!keepDriveLetterCasing) {
            // windows drive letter: file:///c:/far/boo
            value = uri.path[1].toLowerCase() + uri.path.substr(2);
        }
        else {
            value = uri.path.substr(1);
        }
    }
    else {
        // other path
        value = uri.path;
    }
    if (platform_1.isWindows) {
        value = value.replace(/\//g, '\\');
    }
    return value;
}
exports.uriToFsPath = uriToFsPath;
/**
 * Create the external version of a uri
 */
function _asFormatted(uri, skipEncoding) {
    const encoder = !skipEncoding
        ? encodeURIComponentFast
        : encodeURIComponentMinimal;
    let res = '';
    let { scheme, authority, path, query, fragment } = uri;
    if (scheme) {
        res += scheme;
        res += ':';
    }
    if (authority || scheme === 'file') {
        res += _slash;
        res += _slash;
    }
    if (authority) {
        let idx = authority.indexOf('@');
        if (idx !== -1) {
            // <user>@<auth>
            const userinfo = authority.substr(0, idx);
            authority = authority.substr(idx + 1);
            idx = userinfo.indexOf(':');
            if (idx === -1) {
                res += encoder(userinfo, false);
            }
            else {
                // <user>:<pass>@<auth>
                res += encoder(userinfo.substr(0, idx), false);
                res += ':';
                res += encoder(userinfo.substr(idx + 1), false);
            }
            res += '@';
        }
        authority = authority.toLowerCase();
        idx = authority.indexOf(':');
        if (idx === -1) {
            res += encoder(authority, false);
        }
        else {
            // <auth>:<port>
            res += encoder(authority.substr(0, idx), false);
            res += authority.substr(idx);
        }
    }
    if (path) {
        // lower-case windows drive letters in /C:/fff or C:/fff
        if (path.length >= 3 && path.charCodeAt(0) === 47 /* Slash */ && path.charCodeAt(2) === 58 /* Colon */) {
            const code = path.charCodeAt(1);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = `/${String.fromCharCode(code + 32)}:${path.substr(3)}`; // "/c:".length === 3
            }
        }
        else if (path.length >= 2 && path.charCodeAt(1) === 58 /* Colon */) {
            const code = path.charCodeAt(0);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = `${String.fromCharCode(code + 32)}:${path.substr(2)}`; // "/c:".length === 3
            }
        }
        // encode the rest of the path
        res += encoder(path, true);
    }
    if (query) {
        res += '?';
        res += encoder(query, false);
    }
    if (fragment) {
        res += '#';
        res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
    }
    return res;
}
// --- decode
function decodeURIComponentGraceful(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (_a) {
        if (str.length > 3) {
            return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
        }
        else {
            return str;
        }
    }
}
const _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(str) {
    if (!str.match(_rEncodedAsHex)) {
        return str;
    }
    return str.replace(_rEncodedAsHex, (match) => decodeURIComponentGraceful(match));
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relay = exports.EventBufferer = exports.EventMultiplexer = exports.AsyncEmitter = exports.PauseableEmitter = exports.Emitter = exports.setGlobalLeakWarningThreshold = exports.Event = void 0;
const errors_1 = __webpack_require__(10);
const functional_1 = __webpack_require__(11);
const lifecycle_1 = __webpack_require__(12);
const linkedList_1 = __webpack_require__(26);
var Event;
(function (Event) {
    Event.None = () => lifecycle_1.Disposable.None;
    /**
     * Given an event, returns another event which only fires once.
     */
    function once(event) {
        return (listener, thisArgs = null, disposables) => {
            // we need this, in case the event fires during the listener call
            let didFire = false;
            let result;
            result = event(e => {
                if (didFire) {
                    return;
                }
                else if (result) {
                    result.dispose();
                }
                else {
                    didFire = true;
                }
                return listener.call(thisArgs, e);
            }, null, disposables);
            if (didFire) {
                result.dispose();
            }
            return result;
        };
    }
    Event.once = once;
    /**
     * Given an event and a `map` function, returns another event which maps each element
     * through the mapping function.
     */
    function map(event, map) {
        return snapshot((listener, thisArgs = null, disposables) => event(i => listener.call(thisArgs, map(i)), null, disposables));
    }
    Event.map = map;
    /**
     * Given an event and an `each` function, returns another identical event and calls
     * the `each` function per each element.
     */
    function forEach(event, each) {
        return snapshot((listener, thisArgs = null, disposables) => event(i => { each(i); listener.call(thisArgs, i); }, null, disposables));
    }
    Event.forEach = forEach;
    function filter(event, filter) {
        return snapshot((listener, thisArgs = null, disposables) => event(e => filter(e) && listener.call(thisArgs, e), null, disposables));
    }
    Event.filter = filter;
    /**
     * Given an event, returns the same event but typed as `Event<void>`.
     */
    function signal(event) {
        return event;
    }
    Event.signal = signal;
    function any(...events) {
        return (listener, thisArgs = null, disposables) => (0, lifecycle_1.combinedDisposable)(...events.map(event => event(e => listener.call(thisArgs, e), null, disposables)));
    }
    Event.any = any;
    /**
     * Given an event and a `merge` function, returns another event which maps each element
     * and the cumulative result through the `merge` function. Similar to `map`, but with memory.
     */
    function reduce(event, merge, initial) {
        let output = initial;
        return map(event, e => {
            output = merge(output, e);
            return output;
        });
    }
    Event.reduce = reduce;
    /**
     * Given a chain of event processing functions (filter, map, etc), each
     * function will be invoked per event & per listener. Snapshotting an event
     * chain allows each function to be invoked just once per event.
     */
    function snapshot(event) {
        let listener;
        const emitter = new Emitter({
            onFirstListenerAdd() {
                listener = event(emitter.fire, emitter);
            },
            onLastListenerRemove() {
                listener.dispose();
            }
        });
        return emitter.event;
    }
    Event.snapshot = snapshot;
    function debounce(event, merge, delay = 100, leading = false, leakWarningThreshold) {
        let subscription;
        let output = undefined;
        let handle = undefined;
        let numDebouncedCalls = 0;
        const emitter = new Emitter({
            leakWarningThreshold,
            onFirstListenerAdd() {
                subscription = event(cur => {
                    numDebouncedCalls++;
                    output = merge(output, cur);
                    if (leading && !handle) {
                        emitter.fire(output);
                        output = undefined;
                    }
                    clearTimeout(handle);
                    handle = setTimeout(() => {
                        const _output = output;
                        output = undefined;
                        handle = undefined;
                        if (!leading || numDebouncedCalls > 1) {
                            emitter.fire(_output);
                        }
                        numDebouncedCalls = 0;
                    }, delay);
                });
            },
            onLastListenerRemove() {
                subscription.dispose();
            }
        });
        return emitter.event;
    }
    Event.debounce = debounce;
    /**
     * Given an event, it returns another event which fires only once and as soon as
     * the input event emits. The event data is the number of millis it took for the
     * event to fire.
     */
    function stopwatch(event) {
        const start = new Date().getTime();
        return map(once(event), _ => new Date().getTime() - start);
    }
    Event.stopwatch = stopwatch;
    /**
     * Given an event, it returns another event which fires only when the event
     * element changes.
     */
    function latch(event) {
        let firstCall = true;
        let cache;
        return filter(event, value => {
            const shouldEmit = firstCall || value !== cache;
            firstCall = false;
            cache = value;
            return shouldEmit;
        });
    }
    Event.latch = latch;
    /**
     * Buffers the provided event until a first listener comes
     * along, at which point fire all the events at once and
     * pipe the event from then on.
     *
     * ```typescript
     * const emitter = new Emitter<number>();
     * const event = emitter.event;
     * const bufferedEvent = buffer(event);
     *
     * emitter.fire(1);
     * emitter.fire(2);
     * emitter.fire(3);
     * // nothing...
     *
     * const listener = bufferedEvent(num => console.log(num));
     * // 1, 2, 3
     *
     * emitter.fire(4);
     * // 4
     * ```
     */
    function buffer(event, nextTick = false, _buffer = []) {
        let buffer = _buffer.slice();
        let listener = event(e => {
            if (buffer) {
                buffer.push(e);
            }
            else {
                emitter.fire(e);
            }
        });
        const flush = () => {
            if (buffer) {
                buffer.forEach(e => emitter.fire(e));
            }
            buffer = null;
        };
        const emitter = new Emitter({
            onFirstListenerAdd() {
                if (!listener) {
                    listener = event(e => emitter.fire(e));
                }
            },
            onFirstListenerDidAdd() {
                if (buffer) {
                    if (nextTick) {
                        setTimeout(flush);
                    }
                    else {
                        flush();
                    }
                }
            },
            onLastListenerRemove() {
                if (listener) {
                    listener.dispose();
                }
                listener = null;
            }
        });
        return emitter.event;
    }
    Event.buffer = buffer;
    class ChainableEvent {
        constructor(event) {
            this.event = event;
        }
        map(fn) {
            return new ChainableEvent(map(this.event, fn));
        }
        forEach(fn) {
            return new ChainableEvent(forEach(this.event, fn));
        }
        filter(fn) {
            return new ChainableEvent(filter(this.event, fn));
        }
        reduce(merge, initial) {
            return new ChainableEvent(reduce(this.event, merge, initial));
        }
        latch() {
            return new ChainableEvent(latch(this.event));
        }
        debounce(merge, delay = 100, leading = false, leakWarningThreshold) {
            return new ChainableEvent(debounce(this.event, merge, delay, leading, leakWarningThreshold));
        }
        on(listener, thisArgs, disposables) {
            return this.event(listener, thisArgs, disposables);
        }
        once(listener, thisArgs, disposables) {
            return once(this.event)(listener, thisArgs, disposables);
        }
    }
    function chain(event) {
        return new ChainableEvent(event);
    }
    Event.chain = chain;
    function fromNodeEventEmitter(emitter, eventName, map = id => id) {
        const fn = (...args) => result.fire(map(...args));
        const onFirstListenerAdd = () => emitter.on(eventName, fn);
        const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
        const result = new Emitter({ onFirstListenerAdd, onLastListenerRemove });
        return result.event;
    }
    Event.fromNodeEventEmitter = fromNodeEventEmitter;
    function fromDOMEventEmitter(emitter, eventName, map = id => id) {
        const fn = (...args) => result.fire(map(...args));
        const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
        const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
        const result = new Emitter({ onFirstListenerAdd, onLastListenerRemove });
        return result.event;
    }
    Event.fromDOMEventEmitter = fromDOMEventEmitter;
    function fromPromise(promise) {
        const emitter = new Emitter();
        let shouldEmit = false;
        promise
            .then(undefined, () => null)
            .then(() => {
            if (!shouldEmit) {
                setTimeout(() => emitter.fire(undefined), 0);
            }
            else {
                emitter.fire(undefined);
            }
        });
        shouldEmit = true;
        return emitter.event;
    }
    Event.fromPromise = fromPromise;
    function toPromise(event) {
        return new Promise(c => once(event)(c));
    }
    Event.toPromise = toPromise;
})(Event = exports.Event || (exports.Event = {}));
let _globalLeakWarningThreshold = -1;
function setGlobalLeakWarningThreshold(n) {
    const oldValue = _globalLeakWarningThreshold;
    _globalLeakWarningThreshold = n;
    return {
        dispose() {
            _globalLeakWarningThreshold = oldValue;
        }
    };
}
exports.setGlobalLeakWarningThreshold = setGlobalLeakWarningThreshold;
class LeakageMonitor {
    constructor(customThreshold, name = Math.random().toString(18).slice(2, 5)) {
        this.customThreshold = customThreshold;
        this.name = name;
        this._warnCountdown = 0;
    }
    dispose() {
        if (this._stacks) {
            this._stacks.clear();
        }
    }
    check(listenerCount) {
        let threshold = _globalLeakWarningThreshold;
        if (typeof this.customThreshold === 'number') {
            threshold = this.customThreshold;
        }
        if (threshold <= 0 || listenerCount < threshold) {
            return undefined;
        }
        if (!this._stacks) {
            this._stacks = new Map();
        }
        const stack = new Error().stack.split('\n').slice(3).join('\n');
        const count = (this._stacks.get(stack) || 0);
        this._stacks.set(stack, count + 1);
        this._warnCountdown -= 1;
        if (this._warnCountdown <= 0) {
            // only warn on first exceed and then every time the limit
            // is exceeded by 50% again
            this._warnCountdown = threshold * 0.5;
            // find most frequent listener and print warning
            let topStack;
            let topCount = 0;
            for (const [stack, count] of this._stacks) {
                if (!topStack || topCount < count) {
                    topStack = stack;
                    topCount = count;
                }
            }
            console.warn(`[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`);
            console.warn(topStack);
        }
        return () => {
            const count = (this._stacks.get(stack) || 0);
            this._stacks.set(stack, count - 1);
        };
    }
}
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
  class Document {

    private readonly _onDidChange = new Emitter<(value:string)=>any>();

    public onDidChange = this._onDidChange.event;

    // getter-style
    // get onDidChange(): Event<(value:string)=>any> {
    // 	return this._onDidChange.event;
    // }

    private _doIt() {
      //...
      this._onDidChange.fire(value);
    }
  }
 */
class Emitter {
    constructor(options) {
        this._disposed = false;
        this._options = options;
        this._leakageMon = _globalLeakWarningThreshold > 0
            ? new LeakageMonitor(this._options && this._options.leakWarningThreshold)
            : undefined;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
        if (!this._event) {
            this._event = (listener, thisArgs, disposables) => {
                if (!this._listeners) {
                    this._listeners = new linkedList_1.LinkedList();
                }
                const firstListener = this._listeners.isEmpty();
                if (firstListener && this._options && this._options.onFirstListenerAdd) {
                    this._options.onFirstListenerAdd(this);
                }
                const remove = this._listeners.push(!thisArgs ? listener : [listener, thisArgs]);
                if (firstListener && this._options && this._options.onFirstListenerDidAdd) {
                    this._options.onFirstListenerDidAdd(this);
                }
                if (this._options && this._options.onListenerDidAdd) {
                    this._options.onListenerDidAdd(this, listener, thisArgs);
                }
                // check and record this emitter for potential leakage
                let removeMonitor;
                if (this._leakageMon) {
                    removeMonitor = this._leakageMon.check(this._listeners.size);
                }
                let result;
                result = {
                    dispose: () => {
                        if (removeMonitor) {
                            removeMonitor();
                        }
                        result.dispose = Emitter._noop;
                        if (!this._disposed) {
                            remove();
                            if (this._options && this._options.onLastListenerRemove) {
                                const hasListeners = (this._listeners && !this._listeners.isEmpty());
                                if (!hasListeners) {
                                    this._options.onLastListenerRemove(this);
                                }
                            }
                        }
                    }
                };
                if (disposables instanceof lifecycle_1.DisposableStore) {
                    disposables.add(result);
                }
                else if (Array.isArray(disposables)) {
                    disposables.push(result);
                }
                return result;
            };
        }
        return this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(event) {
        if (this._listeners) {
            // put all [listener,event]-pairs into delivery queue
            // then emit all event. an inner/nested event might be
            // the driver of this
            if (!this._deliveryQueue) {
                this._deliveryQueue = new linkedList_1.LinkedList();
            }
            for (let listener of this._listeners) {
                this._deliveryQueue.push([listener, event]);
            }
            while (this._deliveryQueue.size > 0) {
                const [listener, event] = this._deliveryQueue.shift();
                try {
                    if (typeof listener === 'function') {
                        listener.call(undefined, event);
                    }
                    else {
                        listener[0].call(listener[1], event);
                    }
                }
                catch (e) {
                    (0, errors_1.onUnexpectedError)(e);
                }
            }
        }
    }
    dispose() {
        if (this._listeners) {
            this._listeners.clear();
        }
        if (this._deliveryQueue) {
            this._deliveryQueue.clear();
        }
        if (this._leakageMon) {
            this._leakageMon.dispose();
        }
        this._disposed = true;
    }
}
exports.Emitter = Emitter;
Emitter._noop = function () { };
class PauseableEmitter extends Emitter {
    constructor(options) {
        super(options);
        this._isPaused = 0;
        this._eventQueue = new linkedList_1.LinkedList();
        this._mergeFn = options && options.merge;
    }
    pause() {
        this._isPaused++;
    }
    resume() {
        if (this._isPaused !== 0 && --this._isPaused === 0) {
            if (this._mergeFn) {
                // use the merge function to create a single composite
                // event. make a copy in case firing pauses this emitter
                const events = Array.from(this._eventQueue);
                this._eventQueue.clear();
                super.fire(this._mergeFn(events));
            }
            else {
                // no merging, fire each event individually and test
                // that this emitter isn't paused halfway through
                while (!this._isPaused && this._eventQueue.size !== 0) {
                    super.fire(this._eventQueue.shift());
                }
            }
        }
    }
    fire(event) {
        if (this._listeners) {
            if (this._isPaused !== 0) {
                this._eventQueue.push(event);
            }
            else {
                super.fire(event);
            }
        }
    }
}
exports.PauseableEmitter = PauseableEmitter;
class AsyncEmitter extends Emitter {
    async fireAsync(data, token, promiseJoin) {
        if (!this._listeners) {
            return;
        }
        if (!this._asyncDeliveryQueue) {
            this._asyncDeliveryQueue = new linkedList_1.LinkedList();
        }
        for (const listener of this._listeners) {
            this._asyncDeliveryQueue.push([listener, data]);
        }
        while (this._asyncDeliveryQueue.size > 0 && !token.isCancellationRequested) {
            const [listener, data] = this._asyncDeliveryQueue.shift();
            const thenables = [];
            const event = {
                ...data,
                waitUntil: (p) => {
                    if (Object.isFrozen(thenables)) {
                        throw new Error('waitUntil can NOT be called asynchronous');
                    }
                    if (promiseJoin) {
                        p = promiseJoin(p, typeof listener === 'function' ? listener : listener[0]);
                    }
                    thenables.push(p);
                }
            };
            try {
                if (typeof listener === 'function') {
                    listener.call(undefined, event);
                }
                else {
                    listener[0].call(listener[1], event);
                }
            }
            catch (e) {
                (0, errors_1.onUnexpectedError)(e);
                continue;
            }
            // freeze thenables-collection to enforce sync-calls to
            // wait until and then wait for all thenables to resolve
            Object.freeze(thenables);
            await Promise.all(thenables).catch(e => (0, errors_1.onUnexpectedError)(e));
        }
    }
}
exports.AsyncEmitter = AsyncEmitter;
class EventMultiplexer {
    constructor() {
        this.hasListeners = false;
        this.events = [];
        this.emitter = new Emitter({
            onFirstListenerAdd: () => this.onFirstListenerAdd(),
            onLastListenerRemove: () => this.onLastListenerRemove()
        });
    }
    get event() {
        return this.emitter.event;
    }
    add(event) {
        const e = { event: event, listener: null };
        this.events.push(e);
        if (this.hasListeners) {
            this.hook(e);
        }
        const dispose = () => {
            if (this.hasListeners) {
                this.unhook(e);
            }
            const idx = this.events.indexOf(e);
            this.events.splice(idx, 1);
        };
        return (0, lifecycle_1.toDisposable)((0, functional_1.once)(dispose));
    }
    onFirstListenerAdd() {
        this.hasListeners = true;
        this.events.forEach(e => this.hook(e));
    }
    onLastListenerRemove() {
        this.hasListeners = false;
        this.events.forEach(e => this.unhook(e));
    }
    hook(e) {
        e.listener = e.event(r => this.emitter.fire(r));
    }
    unhook(e) {
        if (e.listener) {
            e.listener.dispose();
        }
        e.listener = null;
    }
    dispose() {
        this.emitter.dispose();
    }
}
exports.EventMultiplexer = EventMultiplexer;
/**
 * The EventBufferer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */
class EventBufferer {
    constructor() {
        this.buffers = [];
    }
    wrapEvent(event) {
        return (listener, thisArgs, disposables) => {
            return event(i => {
                const buffer = this.buffers[this.buffers.length - 1];
                if (buffer) {
                    buffer.push(() => listener.call(thisArgs, i));
                }
                else {
                    listener.call(thisArgs, i);
                }
            }, undefined, disposables);
        };
    }
    bufferEvents(fn) {
        const buffer = [];
        this.buffers.push(buffer);
        const r = fn();
        this.buffers.pop();
        buffer.forEach(flush => flush());
        return r;
    }
}
exports.EventBufferer = EventBufferer;
/**
 * A Relay is an event forwarder which functions as a replugabble event pipe.
 * Once created, you can connect an input event to it and it will simply forward
 * events from that input event through its own `event` property. The `input`
 * can be changed at any point in time.
 */
class Relay {
    constructor() {
        this.listening = false;
        this.inputEvent = Event.None;
        this.inputEventListener = lifecycle_1.Disposable.None;
        this.emitter = new Emitter({
            onFirstListenerDidAdd: () => {
                this.listening = true;
                this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter);
            },
            onLastListenerRemove: () => {
                this.listening = false;
                this.inputEventListener.dispose();
            }
        });
        this.event = this.emitter.event;
    }
    set input(event) {
        this.inputEvent = event;
        if (this.listening) {
            this.inputEventListener.dispose();
            this.inputEventListener = event(this.emitter.fire, this.emitter);
        }
    }
    dispose() {
        this.inputEventListener.dispose();
        this.emitter.dispose();
    }
}
exports.Relay = Relay;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, console) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(21);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(22);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorWithActions = exports.isErrorWithActions = exports.ExpectedError = exports.NotSupportedError = exports.NotImplementedError = exports.getErrorMessage = exports.disposed = exports.readonly = exports.illegalState = exports.illegalArgument = exports.canceled = exports.CancellationError = exports.isPromiseCanceledError = exports.transformErrorForSerialization = exports.onUnexpectedExternalError = exports.onUnexpectedError = exports.setUnexpectedErrorHandler = exports.errorHandler = exports.ErrorHandler = void 0;
// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
class ErrorHandler {
    constructor() {
        this.listeners = [];
        this.unexpectedErrorHandler = function (e) {
            setTimeout(() => {
                if (e.stack) {
                    throw new Error(e.message + '\n\n' + e.stack);
                }
                throw e;
            }, 0);
        };
    }
    addListener(listener) {
        this.listeners.push(listener);
        return () => {
            this._removeListener(listener);
        };
    }
    emit(e) {
        this.listeners.forEach((listener) => {
            listener(e);
        });
    }
    _removeListener(listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
    setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
        this.unexpectedErrorHandler = newUnexpectedErrorHandler;
    }
    getUnexpectedErrorHandler() {
        return this.unexpectedErrorHandler;
    }
    onUnexpectedError(e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
    }
    // For external errors, we don't want the listeners to be called
    onUnexpectedExternalError(e) {
        this.unexpectedErrorHandler(e);
    }
}
exports.ErrorHandler = ErrorHandler;
exports.errorHandler = new ErrorHandler();
function setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
    exports.errorHandler.setUnexpectedErrorHandler(newUnexpectedErrorHandler);
}
exports.setUnexpectedErrorHandler = setUnexpectedErrorHandler;
function onUnexpectedError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        exports.errorHandler.onUnexpectedError(e);
    }
    return undefined;
}
exports.onUnexpectedError = onUnexpectedError;
function onUnexpectedExternalError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        exports.errorHandler.onUnexpectedExternalError(e);
    }
    return undefined;
}
exports.onUnexpectedExternalError = onUnexpectedExternalError;
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        let { name, message } = error;
        const stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name,
            message,
            stack
        };
    }
    // return as is
    return error;
}
exports.transformErrorForSerialization = transformErrorForSerialization;
const canceledName = 'Canceled';
/**
 * Checks if the given error is a promise in canceled state
 */
function isPromiseCanceledError(error) {
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
exports.isPromiseCanceledError = isPromiseCanceledError;
// !!!IMPORTANT!!!
// Do NOT change this class because it is also used as an API-type.
class CancellationError extends Error {
    constructor() {
        super(canceledName);
        this.name = this.message;
    }
}
exports.CancellationError = CancellationError;
/**
 * Returns an error that signals cancellation.
 */
function canceled() {
    const error = new Error(canceledName);
    error.name = error.message;
    return error;
}
exports.canceled = canceled;
function illegalArgument(name) {
    if (name) {
        return new Error(`Illegal argument: ${name}`);
    }
    else {
        return new Error('Illegal argument');
    }
}
exports.illegalArgument = illegalArgument;
function illegalState(name) {
    if (name) {
        return new Error(`Illegal state: ${name}`);
    }
    else {
        return new Error('Illegal state');
    }
}
exports.illegalState = illegalState;
function readonly(name) {
    return name
        ? new Error(`readonly property '${name} cannot be changed'`)
        : new Error('readonly property cannot be changed');
}
exports.readonly = readonly;
function disposed(what) {
    const result = new Error(`${what} has been disposed`);
    result.name = 'DISPOSED';
    return result;
}
exports.disposed = disposed;
function getErrorMessage(err) {
    if (!err) {
        return 'Error';
    }
    if (err.message) {
        return err.message;
    }
    if (err.stack) {
        return err.stack.split('\n')[0];
    }
    return String(err);
}
exports.getErrorMessage = getErrorMessage;
class NotImplementedError extends Error {
    constructor(message) {
        super('NotImplemented');
        if (message) {
            this.message = message;
        }
    }
}
exports.NotImplementedError = NotImplementedError;
class NotSupportedError extends Error {
    constructor(message) {
        super('NotSupported');
        if (message) {
            this.message = message;
        }
    }
}
exports.NotSupportedError = NotSupportedError;
class ExpectedError extends Error {
    constructor() {
        super(...arguments);
        this.isExpected = true;
    }
}
exports.ExpectedError = ExpectedError;
function isErrorWithActions(obj) {
    const candidate = obj;
    return candidate instanceof Error && Array.isArray(candidate.actions);
}
exports.isErrorWithActions = isErrorWithActions;
function createErrorWithActions(message, options = Object.create(null)) {
    const result = new Error(message);
    if (options.actions) {
        result.actions = options.actions;
    }
    return result;
}
exports.createErrorWithActions = createErrorWithActions;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = void 0;
function once(fn) {
    const _this = this;
    let didCall = false;
    let result;
    return function () {
        if (didCall) {
            return result;
        }
        didCall = true;
        result = fn.apply(_this, arguments);
        return result;
    };
}
exports.once = once;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmortalReference = exports.AsyncReferenceCollection = exports.ReferenceCollection = exports.RefCountedDisposable = exports.MutableDisposable = exports.Disposable = exports.DisposableStore = exports.toDisposable = exports.combinedDisposable = exports.dispose = exports.isDisposable = exports.MultiDisposeError = exports.markAsSingleton = exports.setDisposableTracker = void 0;
const functional_1 = __webpack_require__(11);
const iterator_1 = __webpack_require__(25);
/**
 * Enables logging of potentially leaked disposables.
 *
 * A disposable is considered leaked if it is not disposed or not registered as the child of
 * another disposable. This tracking is very simple an only works for classes that either
 * extend Disposable or use a DisposableStore. This means there are a lot of false positives.
 */
const TRACK_DISPOSABLES = false;
let disposableTracker = null;
function setDisposableTracker(tracker) {
    disposableTracker = tracker;
}
exports.setDisposableTracker = setDisposableTracker;
if (TRACK_DISPOSABLES) {
    const __is_disposable_tracked__ = '__is_disposable_tracked__';
    setDisposableTracker(new class {
        trackDisposable(x) {
            const stack = new Error('Potentially leaked disposable').stack;
            setTimeout(() => {
                if (!x[__is_disposable_tracked__]) {
                    console.log(stack);
                }
            }, 3000);
        }
        setParent(child, parent) {
            if (child && child !== Disposable.None) {
                try {
                    child[__is_disposable_tracked__] = true;
                }
                catch (_a) {
                    // noop
                }
            }
        }
        markAsDisposed(disposable) {
            if (disposable && disposable !== Disposable.None) {
                try {
                    disposable[__is_disposable_tracked__] = true;
                }
                catch (_a) {
                    // noop
                }
            }
        }
        markAsSingleton(disposable) { }
    });
}
function trackDisposable(x) {
    disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.trackDisposable(x);
    return x;
}
function markAsDisposed(disposable) {
    disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.markAsDisposed(disposable);
}
function setParentOfDisposable(child, parent) {
    disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.setParent(child, parent);
}
function setParentOfDisposables(children, parent) {
    if (!disposableTracker) {
        return;
    }
    for (const child of children) {
        disposableTracker.setParent(child, parent);
    }
}
/**
 * Indicates that the given object is a singleton which does not need to be disposed.
*/
function markAsSingleton(singleton) {
    disposableTracker === null || disposableTracker === void 0 ? void 0 : disposableTracker.markAsSingleton(singleton);
    return singleton;
}
exports.markAsSingleton = markAsSingleton;
class MultiDisposeError extends Error {
    constructor(errors) {
        super(`Encountered errors while disposing of store. Errors: [${errors.join(', ')}]`);
        this.errors = errors;
    }
}
exports.MultiDisposeError = MultiDisposeError;
function isDisposable(thing) {
    return typeof thing.dispose === 'function' && thing.dispose.length === 0;
}
exports.isDisposable = isDisposable;
function dispose(arg) {
    if (iterator_1.Iterable.is(arg)) {
        let errors = [];
        for (const d of arg) {
            if (d) {
                try {
                    d.dispose();
                }
                catch (e) {
                    errors.push(e);
                }
            }
        }
        if (errors.length === 1) {
            throw errors[0];
        }
        else if (errors.length > 1) {
            throw new MultiDisposeError(errors);
        }
        return Array.isArray(arg) ? [] : arg;
    }
    else if (arg) {
        arg.dispose();
        return arg;
    }
}
exports.dispose = dispose;
function combinedDisposable(...disposables) {
    const parent = toDisposable(() => dispose(disposables));
    setParentOfDisposables(disposables, parent);
    return parent;
}
exports.combinedDisposable = combinedDisposable;
function toDisposable(fn) {
    const self = trackDisposable({
        dispose: (0, functional_1.once)(() => {
            markAsDisposed(self);
            fn();
        })
    });
    return self;
}
exports.toDisposable = toDisposable;
class DisposableStore {
    constructor() {
        this._toDispose = new Set();
        this._isDisposed = false;
        trackDisposable(this);
    }
    /**
     * Dispose of all registered disposables and mark this object as disposed.
     *
     * Any future disposables added to this object will be disposed of on `add`.
     */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        markAsDisposed(this);
        this._isDisposed = true;
        this.clear();
    }
    /**
     * Dispose of all registered disposables but do not mark this object as disposed.
     */
    clear() {
        try {
            dispose(this._toDispose.values());
        }
        finally {
            this._toDispose.clear();
        }
    }
    add(t) {
        if (!t) {
            return t;
        }
        if (t === this) {
            throw new Error('Cannot register a disposable on itself!');
        }
        setParentOfDisposable(t, this);
        if (this._isDisposed) {
            if (!DisposableStore.DISABLE_DISPOSED_WARNING) {
                console.warn(new Error('Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!').stack);
            }
        }
        else {
            this._toDispose.add(t);
        }
        return t;
    }
}
exports.DisposableStore = DisposableStore;
DisposableStore.DISABLE_DISPOSED_WARNING = false;
class Disposable {
    constructor() {
        this._store = new DisposableStore();
        trackDisposable(this);
        setParentOfDisposable(this._store, this);
    }
    dispose() {
        markAsDisposed(this);
        this._store.dispose();
    }
    _register(t) {
        if (t === this) {
            throw new Error('Cannot register a disposable on itself!');
        }
        return this._store.add(t);
    }
}
exports.Disposable = Disposable;
Disposable.None = Object.freeze({ dispose() { } });
/**
 * Manages the lifecycle of a disposable value that may be changed.
 *
 * This ensures that when the disposable value is changed, the previously held disposable is disposed of. You can
 * also register a `MutableDisposable` on a `Disposable` to ensure it is automatically cleaned up.
 */
class MutableDisposable {
    constructor() {
        this._isDisposed = false;
        trackDisposable(this);
    }
    get value() {
        return this._isDisposed ? undefined : this._value;
    }
    set value(value) {
        var _a;
        if (this._isDisposed || value === this._value) {
            return;
        }
        (_a = this._value) === null || _a === void 0 ? void 0 : _a.dispose();
        if (value) {
            setParentOfDisposable(value, this);
        }
        this._value = value;
    }
    clear() {
        this.value = undefined;
    }
    dispose() {
        var _a;
        this._isDisposed = true;
        markAsDisposed(this);
        (_a = this._value) === null || _a === void 0 ? void 0 : _a.dispose();
        this._value = undefined;
    }
    /**
     * Clears the value, but does not dispose it.
     * The old value is returned.
    */
    clearAndLeak() {
        const oldValue = this._value;
        this._value = undefined;
        if (oldValue) {
            setParentOfDisposable(oldValue, null);
        }
        return oldValue;
    }
}
exports.MutableDisposable = MutableDisposable;
class RefCountedDisposable {
    constructor(_disposable) {
        this._disposable = _disposable;
        this._counter = 1;
    }
    acquire() {
        this._counter++;
        return this;
    }
    release() {
        if (--this._counter === 0) {
            this._disposable.dispose();
        }
        return this;
    }
}
exports.RefCountedDisposable = RefCountedDisposable;
class ReferenceCollection {
    constructor() {
        this.references = new Map();
    }
    acquire(key, ...args) {
        let reference = this.references.get(key);
        if (!reference) {
            reference = { counter: 0, object: this.createReferencedObject(key, ...args) };
            this.references.set(key, reference);
        }
        const { object } = reference;
        const dispose = (0, functional_1.once)(() => {
            if (--reference.counter === 0) {
                this.destroyReferencedObject(key, reference.object);
                this.references.delete(key);
            }
        });
        reference.counter++;
        return { object, dispose };
    }
}
exports.ReferenceCollection = ReferenceCollection;
/**
 * Unwraps a reference collection of promised values. Makes sure
 * references are disposed whenever promises get rejected.
 */
class AsyncReferenceCollection {
    constructor(referenceCollection) {
        this.referenceCollection = referenceCollection;
    }
    async acquire(key, ...args) {
        const ref = this.referenceCollection.acquire(key, ...args);
        try {
            const object = await ref.object;
            return {
                object,
                dispose: () => ref.dispose()
            };
        }
        catch (error) {
            ref.dispose();
            throw error;
        }
    }
}
exports.AsyncReferenceCollection = AsyncReferenceCollection;
class ImmortalReference {
    constructor(object) {
        this.object = object;
    }
    dispose() { }
}
exports.ImmortalReference = ImmortalReference;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocalResource = exports.DataUri = exports.distinctParents = exports.addTrailingPathSeparator = exports.removeTrailingPathSeparator = exports.hasTrailingPathSeparator = exports.isEqualAuthority = exports.isAbsolutePath = exports.resolvePath = exports.relativePath = exports.normalizePath = exports.joinPath = exports.dirname = exports.extname = exports.basename = exports.basenameOrAuthority = exports.getComparisonKey = exports.isEqualOrParent = exports.isEqual = exports.extUriIgnorePathCase = exports.extUriBiasedIgnorePathCase = exports.extUri = exports.ExtUri = exports.originalFSPath = void 0;
const extpath = __webpack_require__(27);
const paths = __webpack_require__(6);
const uri_1 = __webpack_require__(7);
const strings_1 = __webpack_require__(14);
const network_1 = __webpack_require__(30);
const platform_1 = __webpack_require__(2);
function originalFSPath(uri) {
    return (0, uri_1.uriToFsPath)(uri, true);
}
exports.originalFSPath = originalFSPath;
class ExtUri {
    constructor(_ignorePathCasing) {
        this._ignorePathCasing = _ignorePathCasing;
    }
    compare(uri1, uri2, ignoreFragment = false) {
        if (uri1 === uri2) {
            return 0;
        }
        return (0, strings_1.compare)(this.getComparisonKey(uri1, ignoreFragment), this.getComparisonKey(uri2, ignoreFragment));
    }
    isEqual(uri1, uri2, ignoreFragment = false) {
        if (uri1 === uri2) {
            return true;
        }
        if (!uri1 || !uri2) {
            return false;
        }
        return this.getComparisonKey(uri1, ignoreFragment) === this.getComparisonKey(uri2, ignoreFragment);
    }
    getComparisonKey(uri, ignoreFragment = false) {
        return uri.with({
            path: this._ignorePathCasing(uri) ? uri.path.toLowerCase() : undefined,
            fragment: ignoreFragment ? null : undefined
        }).toString();
    }
    ignorePathCasing(uri) {
        return this._ignorePathCasing(uri);
    }
    isEqualOrParent(base, parentCandidate, ignoreFragment = false) {
        if (base.scheme === parentCandidate.scheme) {
            if (base.scheme === network_1.Schemas.file) {
                return extpath.isEqualOrParent(originalFSPath(base), originalFSPath(parentCandidate), this._ignorePathCasing(base)) && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
            }
            if ((0, exports.isEqualAuthority)(base.authority, parentCandidate.authority)) {
                return extpath.isEqualOrParent(base.path, parentCandidate.path, this._ignorePathCasing(base), '/') && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
            }
        }
        return false;
    }
    // --- path math
    joinPath(resource, ...pathFragment) {
        return uri_1.URI.joinPath(resource, ...pathFragment);
    }
    basenameOrAuthority(resource) {
        return (0, exports.basename)(resource) || resource.authority;
    }
    basename(resource) {
        return paths.posix.basename(resource.path);
    }
    extname(resource) {
        return paths.posix.extname(resource.path);
    }
    dirname(resource) {
        if (resource.path.length === 0) {
            return resource;
        }
        let dirname;
        if (resource.scheme === network_1.Schemas.file) {
            dirname = uri_1.URI.file(paths.dirname(originalFSPath(resource))).path;
        }
        else {
            dirname = paths.posix.dirname(resource.path);
            if (resource.authority && dirname.length && dirname.charCodeAt(0) !== 47 /* Slash */) {
                console.error(`dirname("${resource.toString})) resulted in a relative path`);
                dirname = '/'; // If a URI contains an authority component, then the path component must either be empty or begin with a CharCode.Slash ("/") character
            }
        }
        return resource.with({
            path: dirname
        });
    }
    normalizePath(resource) {
        if (!resource.path.length) {
            return resource;
        }
        let normalizedPath;
        if (resource.scheme === network_1.Schemas.file) {
            normalizedPath = uri_1.URI.file(paths.normalize(originalFSPath(resource))).path;
        }
        else {
            normalizedPath = paths.posix.normalize(resource.path);
        }
        return resource.with({
            path: normalizedPath
        });
    }
    relativePath(from, to) {
        if (from.scheme !== to.scheme || !(0, exports.isEqualAuthority)(from.authority, to.authority)) {
            return undefined;
        }
        if (from.scheme === network_1.Schemas.file) {
            const relativePath = paths.relative(originalFSPath(from), originalFSPath(to));
            return platform_1.isWindows ? extpath.toSlashes(relativePath) : relativePath;
        }
        let fromPath = from.path || '/', toPath = to.path || '/';
        if (this._ignorePathCasing(from)) {
            // make casing of fromPath match toPath
            let i = 0;
            for (const len = Math.min(fromPath.length, toPath.length); i < len; i++) {
                if (fromPath.charCodeAt(i) !== toPath.charCodeAt(i)) {
                    if (fromPath.charAt(i).toLowerCase() !== toPath.charAt(i).toLowerCase()) {
                        break;
                    }
                }
            }
            fromPath = toPath.substr(0, i) + fromPath.substr(i);
        }
        return paths.posix.relative(fromPath, toPath);
    }
    resolvePath(base, path) {
        if (base.scheme === network_1.Schemas.file) {
            const newURI = uri_1.URI.file(paths.resolve(originalFSPath(base), path));
            return base.with({
                authority: newURI.authority,
                path: newURI.path
            });
        }
        path = extpath.toPosixPath(path); // we allow path to be a windows path
        return base.with({
            path: paths.posix.resolve(base.path, path)
        });
    }
    // --- misc
    isAbsolutePath(resource) {
        return !!resource.path && resource.path[0] === '/';
    }
    isEqualAuthority(a1, a2) {
        return a1 === a2 || (0, strings_1.equalsIgnoreCase)(a1, a2);
    }
    hasTrailingPathSeparator(resource, sep = paths.sep) {
        if (resource.scheme === network_1.Schemas.file) {
            const fsp = originalFSPath(resource);
            return fsp.length > extpath.getRoot(fsp).length && fsp[fsp.length - 1] === sep;
        }
        else {
            const p = resource.path;
            return (p.length > 1 && p.charCodeAt(p.length - 1) === 47 /* Slash */) && !(/^[a-zA-Z]:(\/$|\\$)/.test(resource.fsPath)); // ignore the slash at offset 0
        }
    }
    removeTrailingPathSeparator(resource, sep = paths.sep) {
        // Make sure that the path isn't a drive letter. A trailing separator there is not removable.
        if ((0, exports.hasTrailingPathSeparator)(resource, sep)) {
            return resource.with({ path: resource.path.substr(0, resource.path.length - 1) });
        }
        return resource;
    }
    addTrailingPathSeparator(resource, sep = paths.sep) {
        let isRootSep = false;
        if (resource.scheme === network_1.Schemas.file) {
            const fsp = originalFSPath(resource);
            isRootSep = ((fsp !== undefined) && (fsp.length === extpath.getRoot(fsp).length) && (fsp[fsp.length - 1] === sep));
        }
        else {
            sep = '/';
            const p = resource.path;
            isRootSep = p.length === 1 && p.charCodeAt(p.length - 1) === 47 /* Slash */;
        }
        if (!isRootSep && !(0, exports.hasTrailingPathSeparator)(resource, sep)) {
            return resource.with({ path: resource.path + '/' });
        }
        return resource;
    }
}
exports.ExtUri = ExtUri;
/**
 * Unbiased utility that takes uris "as they are". This means it can be interchanged with
 * uri#toString() usages. The following is true
 * ```
 * assertEqual(aUri.toString() === bUri.toString(), exturi.isEqual(aUri, bUri))
 * ```
 */
exports.extUri = new ExtUri(() => false);
/**
 * BIASED utility that _mostly_ ignored the case of urs paths. ONLY use this util if you
 * understand what you are doing.
 *
 * This utility is INCOMPATIBLE with `uri.toString()`-usages and both CANNOT be used interchanged.
 *
 * When dealing with uris from files or documents, `extUri` (the unbiased friend)is sufficient
 * because those uris come from a "trustworthy source". When creating unknown uris it's always
 * better to use `IUriIdentityService` which exposes an `IExtUri`-instance which knows when path
 * casing matters.
 */
exports.extUriBiasedIgnorePathCase = new ExtUri(uri => {
    // A file scheme resource is in the same platform as code, so ignore case for non linux platforms
    // Resource can be from another platform. Lowering the case as an hack. Should come from File system provider
    return uri.scheme === network_1.Schemas.file ? !platform_1.isLinux : true;
});
/**
 * BIASED utility that always ignores the casing of uris paths. ONLY use this util if you
 * understand what you are doing.
 *
 * This utility is INCOMPATIBLE with `uri.toString()`-usages and both CANNOT be used interchanged.
 *
 * When dealing with uris from files or documents, `extUri` (the unbiased friend)is sufficient
 * because those uris come from a "trustworthy source". When creating unknown uris it's always
 * better to use `IUriIdentityService` which exposes an `IExtUri`-instance which knows when path
 * casing matters.
 */
exports.extUriIgnorePathCase = new ExtUri(_ => true);
exports.isEqual = exports.extUri.isEqual.bind(exports.extUri);
exports.isEqualOrParent = exports.extUri.isEqualOrParent.bind(exports.extUri);
exports.getComparisonKey = exports.extUri.getComparisonKey.bind(exports.extUri);
exports.basenameOrAuthority = exports.extUri.basenameOrAuthority.bind(exports.extUri);
exports.basename = exports.extUri.basename.bind(exports.extUri);
exports.extname = exports.extUri.extname.bind(exports.extUri);
exports.dirname = exports.extUri.dirname.bind(exports.extUri);
exports.joinPath = exports.extUri.joinPath.bind(exports.extUri);
exports.normalizePath = exports.extUri.normalizePath.bind(exports.extUri);
exports.relativePath = exports.extUri.relativePath.bind(exports.extUri);
exports.resolvePath = exports.extUri.resolvePath.bind(exports.extUri);
exports.isAbsolutePath = exports.extUri.isAbsolutePath.bind(exports.extUri);
exports.isEqualAuthority = exports.extUri.isEqualAuthority.bind(exports.extUri);
exports.hasTrailingPathSeparator = exports.extUri.hasTrailingPathSeparator.bind(exports.extUri);
exports.removeTrailingPathSeparator = exports.extUri.removeTrailingPathSeparator.bind(exports.extUri);
exports.addTrailingPathSeparator = exports.extUri.addTrailingPathSeparator.bind(exports.extUri);
//#endregion
function distinctParents(items, resourceAccessor) {
    const distinctParents = [];
    for (let i = 0; i < items.length; i++) {
        const candidateResource = resourceAccessor(items[i]);
        if (items.some((otherItem, index) => {
            if (index === i) {
                return false;
            }
            return (0, exports.isEqualOrParent)(candidateResource, resourceAccessor(otherItem));
        })) {
            continue;
        }
        distinctParents.push(items[i]);
    }
    return distinctParents;
}
exports.distinctParents = distinctParents;
/**
 * Data URI related helpers.
 */
var DataUri;
(function (DataUri) {
    DataUri.META_DATA_LABEL = 'label';
    DataUri.META_DATA_DESCRIPTION = 'description';
    DataUri.META_DATA_SIZE = 'size';
    DataUri.META_DATA_MIME = 'mime';
    function parseMetaData(dataUri) {
        const metadata = new Map();
        // Given a URI of:  data:image/png;size:2313;label:SomeLabel;description:SomeDescription;base64,77+9UE5...
        // the metadata is: size:2313;label:SomeLabel;description:SomeDescription
        const meta = dataUri.path.substring(dataUri.path.indexOf(';') + 1, dataUri.path.lastIndexOf(';'));
        meta.split(';').forEach(property => {
            const [key, value] = property.split(':');
            if (key && value) {
                metadata.set(key, value);
            }
        });
        // Given a URI of:  data:image/png;size:2313;label:SomeLabel;description:SomeDescription;base64,77+9UE5...
        // the mime is: image/png
        const mime = dataUri.path.substring(0, dataUri.path.indexOf(';'));
        if (mime) {
            metadata.set(DataUri.META_DATA_MIME, mime);
        }
        return metadata;
    }
    DataUri.parseMetaData = parseMetaData;
})(DataUri = exports.DataUri || (exports.DataUri = {}));
function toLocalResource(resource, authority, localScheme) {
    if (authority) {
        let path = resource.path;
        if (path && path[0] !== paths.posix.sep) {
            path = paths.posix.sep + path;
        }
        return resource.with({ scheme: localScheme, authority, path });
    }
    return resource.with({ scheme: localScheme });
}
exports.toLocalResource = toLocalResource;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTF8_BOM_CHARACTER = exports.removeAnsiEscapeCodes = exports.lcut = exports.isEmojiImprecise = exports.isFullWidthCharacter = exports.containsFullWidthCharacter = exports.containsUnusualLineTerminators = exports.UNUSUAL_LINE_TERMINATORS = exports.isBasicASCII = exports.containsEmoji = exports.containsRTL = exports.decodeUTF8 = exports.encodeUTF8 = exports.getCharContainingOffset = exports.prevCharLength = exports.nextCharLength = exports.getNextCodePoint = exports.computeCodePoint = exports.isLowSurrogate = exports.isHighSurrogate = exports.commonSuffixLength = exports.commonPrefixLength = exports.startsWithIgnoreCase = exports.equalsIgnoreCase = exports.isUpperAsciiLetter = exports.isLowerAsciiLetter = exports.compareSubstringIgnoreCase = exports.compareIgnoreCase = exports.compareSubstring = exports.compare = exports.lastNonWhitespaceIndex = exports.getLeadingWhitespace = exports.firstNonWhitespaceIndex = exports.splitLines = exports.regExpFlags = exports.regExpContainsBackreference = exports.regExpLeadsToEndlessLoop = exports.createRegExp = exports.stripWildcards = exports.convertSimple2RegExpPattern = exports.rtrim = exports.ltrim = exports.trim = exports.truncate = exports.count = exports.escapeRegExpCharacters = exports.escape = exports.format2 = exports.format = exports.isFalsyOrWhitespace = void 0;
exports.getLeftDeleteOffset = exports.breakBetweenGraphemeBreakType = exports.getGraphemeBreakType = exports.singleLetterHash = exports.getNLines = exports.uppercaseFirstLetter = exports.containsUppercaseCharacter = exports.fuzzyContains = exports.stripUTF8BOM = exports.startsWithUTF8BOM = void 0;
function isFalsyOrWhitespace(str) {
    if (!str || typeof str !== 'string') {
        return true;
    }
    return str.trim().length === 0;
}
exports.isFalsyOrWhitespace = isFalsyOrWhitespace;
const _formatRegexp = /{(\d+)}/g;
/**
 * Helper to produce a string with a variable number of arguments. Insert variable segments
 * into the string using the {n} notation where N is the index of the argument following the string.
 * @param value string to which formatting is applied
 * @param args replacements for {n}-entries
 */
function format(value, ...args) {
    if (args.length === 0) {
        return value;
    }
    return value.replace(_formatRegexp, function (match, group) {
        const idx = parseInt(group, 10);
        return isNaN(idx) || idx < 0 || idx >= args.length ?
            match :
            args[idx];
    });
}
exports.format = format;
const _format2Regexp = /{([^}]+)}/g;
/**
 * Helper to create a string from a template and a string record.
 * Similar to `format` but with objects instead of positional arguments.
 */
function format2(template, values) {
    return template.replace(_format2Regexp, (match, group) => { var _a; return ((_a = values[group]) !== null && _a !== void 0 ? _a : match); });
}
exports.format2 = format2;
/**
 * Converts HTML characters inside the string to use entities instead. Makes the string safe from
 * being used e.g. in HTMLElement.innerHTML.
 */
function escape(html) {
    return html.replace(/[<>&]/g, function (match) {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return match;
        }
    });
}
exports.escape = escape;
/**
 * Escapes regular expression characters in a given string
 */
function escapeRegExpCharacters(value) {
    return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
}
exports.escapeRegExpCharacters = escapeRegExpCharacters;
/**
 * Counts how often `character` occurs inside `value`.
 */
function count(value, character) {
    let result = 0;
    const ch = character.charCodeAt(0);
    for (let i = value.length - 1; i >= 0; i--) {
        if (value.charCodeAt(i) === ch) {
            result++;
        }
    }
    return result;
}
exports.count = count;
function truncate(value, maxLength, suffix = '…') {
    if (value.length <= maxLength) {
        return value;
    }
    return `${value.substr(0, maxLength)}${suffix}`;
}
exports.truncate = truncate;
/**
 * Removes all occurrences of needle from the beginning and end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim (default is a blank)
 */
function trim(haystack, needle = ' ') {
    const trimmed = ltrim(haystack, needle);
    return rtrim(trimmed, needle);
}
exports.trim = trim;
/**
 * Removes all occurrences of needle from the beginning of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function ltrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    const needleLen = needle.length;
    if (needleLen === 0 || haystack.length === 0) {
        return haystack;
    }
    let offset = 0;
    while (haystack.indexOf(needle, offset) === offset) {
        offset = offset + needleLen;
    }
    return haystack.substring(offset);
}
exports.ltrim = ltrim;
/**
 * Removes all occurrences of needle from the end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function rtrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    const needleLen = needle.length, haystackLen = haystack.length;
    if (needleLen === 0 || haystackLen === 0) {
        return haystack;
    }
    let offset = haystackLen, idx = -1;
    while (true) {
        idx = haystack.lastIndexOf(needle, offset - 1);
        if (idx === -1 || idx + needleLen !== offset) {
            break;
        }
        if (idx === 0) {
            return '';
        }
        offset = idx;
    }
    return haystack.substring(0, offset);
}
exports.rtrim = rtrim;
function convertSimple2RegExpPattern(pattern) {
    return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
exports.convertSimple2RegExpPattern = convertSimple2RegExpPattern;
function stripWildcards(pattern) {
    return pattern.replace(/\*/g, '');
}
exports.stripWildcards = stripWildcards;
function createRegExp(searchString, isRegex, options = {}) {
    if (!searchString) {
        throw new Error('Cannot create regex from empty string');
    }
    if (!isRegex) {
        searchString = escapeRegExpCharacters(searchString);
    }
    if (options.wholeWord) {
        if (!/\B/.test(searchString.charAt(0))) {
            searchString = '\\b' + searchString;
        }
        if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
            searchString = searchString + '\\b';
        }
    }
    let modifiers = '';
    if (options.global) {
        modifiers += 'g';
    }
    if (!options.matchCase) {
        modifiers += 'i';
    }
    if (options.multiline) {
        modifiers += 'm';
    }
    if (options.unicode) {
        modifiers += 'u';
    }
    return new RegExp(searchString, modifiers);
}
exports.createRegExp = createRegExp;
function regExpLeadsToEndlessLoop(regexp) {
    // Exit early if it's one of these special cases which are meant to match
    // against an empty string
    if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
        return false;
    }
    // We check against an empty string. If the regular expression doesn't advance
    // (e.g. ends in an endless loop) it will match an empty string.
    const match = regexp.exec('');
    return !!(match && regexp.lastIndex === 0);
}
exports.regExpLeadsToEndlessLoop = regExpLeadsToEndlessLoop;
function regExpContainsBackreference(regexpValue) {
    return !!regexpValue.match(/([^\\]|^)(\\\\)*\\\d+/);
}
exports.regExpContainsBackreference = regExpContainsBackreference;
function regExpFlags(regexp) {
    return (regexp.global ? 'g' : '')
        + (regexp.ignoreCase ? 'i' : '')
        + (regexp.multiline ? 'm' : '')
        + (regexp /* standalone editor compilation */.unicode ? 'u' : '');
}
exports.regExpFlags = regExpFlags;
function splitLines(str) {
    return str.split(/\r\n|\r|\n/);
}
exports.splitLines = splitLines;
/**
 * Returns first index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function firstNonWhitespaceIndex(str) {
    for (let i = 0, len = str.length; i < len; i++) {
        const chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
exports.firstNonWhitespaceIndex = firstNonWhitespaceIndex;
/**
 * Returns the leading whitespace of the string.
 * If the string contains only whitespaces, returns entire string
 */
function getLeadingWhitespace(str, start = 0, end = str.length) {
    for (let i = start; i < end; i++) {
        const chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return str.substring(start, i);
        }
    }
    return str.substring(start, end);
}
exports.getLeadingWhitespace = getLeadingWhitespace;
/**
 * Returns last index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function lastNonWhitespaceIndex(str, startIndex = str.length - 1) {
    for (let i = startIndex; i >= 0; i--) {
        const chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
exports.lastNonWhitespaceIndex = lastNonWhitespaceIndex;
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
exports.compare = compare;
function compareSubstring(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
    for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
        let codeA = a.charCodeAt(aStart);
        let codeB = b.charCodeAt(bStart);
        if (codeA < codeB) {
            return -1;
        }
        else if (codeA > codeB) {
            return 1;
        }
    }
    const aLen = aEnd - aStart;
    const bLen = bEnd - bStart;
    if (aLen < bLen) {
        return -1;
    }
    else if (aLen > bLen) {
        return 1;
    }
    return 0;
}
exports.compareSubstring = compareSubstring;
function compareIgnoreCase(a, b) {
    return compareSubstringIgnoreCase(a, b, 0, a.length, 0, b.length);
}
exports.compareIgnoreCase = compareIgnoreCase;
function compareSubstringIgnoreCase(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
    for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
        let codeA = a.charCodeAt(aStart);
        let codeB = b.charCodeAt(bStart);
        if (codeA === codeB) {
            // equal
            continue;
        }
        const diff = codeA - codeB;
        if (diff === 32 && isUpperAsciiLetter(codeB)) { //codeB =[65-90] && codeA =[97-122]
            continue;
        }
        else if (diff === -32 && isUpperAsciiLetter(codeA)) { //codeB =[97-122] && codeA =[65-90]
            continue;
        }
        if (isLowerAsciiLetter(codeA) && isLowerAsciiLetter(codeB)) {
            //
            return diff;
        }
        else {
            return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
        }
    }
    const aLen = aEnd - aStart;
    const bLen = bEnd - bStart;
    if (aLen < bLen) {
        return -1;
    }
    else if (aLen > bLen) {
        return 1;
    }
    return 0;
}
exports.compareSubstringIgnoreCase = compareSubstringIgnoreCase;
function isLowerAsciiLetter(code) {
    return code >= 97 /* a */ && code <= 122 /* z */;
}
exports.isLowerAsciiLetter = isLowerAsciiLetter;
function isUpperAsciiLetter(code) {
    return code >= 65 /* A */ && code <= 90 /* Z */;
}
exports.isUpperAsciiLetter = isUpperAsciiLetter;
function isAsciiLetter(code) {
    return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}
function equalsIgnoreCase(a, b) {
    return a.length === b.length && doEqualsIgnoreCase(a, b);
}
exports.equalsIgnoreCase = equalsIgnoreCase;
function doEqualsIgnoreCase(a, b, stopAt = a.length) {
    for (let i = 0; i < stopAt; i++) {
        const codeA = a.charCodeAt(i);
        const codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            continue;
        }
        // a-z A-Z
        if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
            const diff = Math.abs(codeA - codeB);
            if (diff !== 0 && diff !== 32) {
                return false;
            }
        }
        // Any other charcode
        else {
            if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
function startsWithIgnoreCase(str, candidate) {
    const candidateLength = candidate.length;
    if (candidate.length > str.length) {
        return false;
    }
    return doEqualsIgnoreCase(str, candidate, candidateLength);
}
exports.startsWithIgnoreCase = startsWithIgnoreCase;
/**
 * @returns the length of the common prefix of the two strings.
 */
function commonPrefixLength(a, b) {
    let i, len = Math.min(a.length, b.length);
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return i;
        }
    }
    return len;
}
exports.commonPrefixLength = commonPrefixLength;
/**
 * @returns the length of the common suffix of the two strings.
 */
function commonSuffixLength(a, b) {
    let i, len = Math.min(a.length, b.length);
    const aLastIndex = a.length - 1;
    const bLastIndex = b.length - 1;
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
            return i;
        }
    }
    return len;
}
exports.commonSuffixLength = commonSuffixLength;
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */
function isHighSurrogate(charCode) {
    return (0xD800 <= charCode && charCode <= 0xDBFF);
}
exports.isHighSurrogate = isHighSurrogate;
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */
function isLowSurrogate(charCode) {
    return (0xDC00 <= charCode && charCode <= 0xDFFF);
}
exports.isLowSurrogate = isLowSurrogate;
/**
 * See http://en.wikipedia.org/wiki/Surrogate_pair
 */
function computeCodePoint(highSurrogate, lowSurrogate) {
    return ((highSurrogate - 0xD800) << 10) + (lowSurrogate - 0xDC00) + 0x10000;
}
exports.computeCodePoint = computeCodePoint;
/**
 * get the code point that begins at offset `offset`
 */
function getNextCodePoint(str, len, offset) {
    const charCode = str.charCodeAt(offset);
    if (isHighSurrogate(charCode) && offset + 1 < len) {
        const nextCharCode = str.charCodeAt(offset + 1);
        if (isLowSurrogate(nextCharCode)) {
            return computeCodePoint(charCode, nextCharCode);
        }
    }
    return charCode;
}
exports.getNextCodePoint = getNextCodePoint;
/**
 * get the code point that ends right before offset `offset`
 */
function getPrevCodePoint(str, offset) {
    const charCode = str.charCodeAt(offset - 1);
    if (isLowSurrogate(charCode) && offset > 1) {
        const prevCharCode = str.charCodeAt(offset - 2);
        if (isHighSurrogate(prevCharCode)) {
            return computeCodePoint(prevCharCode, charCode);
        }
    }
    return charCode;
}
function nextCharLength(str, offset) {
    const graphemeBreakTree = GraphemeBreakTree.getInstance();
    const initialOffset = offset;
    const len = str.length;
    const initialCodePoint = getNextCodePoint(str, len, offset);
    offset += (initialCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
    let graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(initialCodePoint);
    while (offset < len) {
        const nextCodePoint = getNextCodePoint(str, len, offset);
        const nextGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(nextCodePoint);
        if (breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
            break;
        }
        offset += (nextCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
        graphemeBreakType = nextGraphemeBreakType;
    }
    return (offset - initialOffset);
}
exports.nextCharLength = nextCharLength;
function prevCharLength(str, offset) {
    const graphemeBreakTree = GraphemeBreakTree.getInstance();
    const initialOffset = offset;
    const initialCodePoint = getPrevCodePoint(str, offset);
    offset -= (initialCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
    let graphemeBreakType = graphemeBreakTree.getGraphemeBreakType(initialCodePoint);
    while (offset > 0) {
        const prevCodePoint = getPrevCodePoint(str, offset);
        const prevGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(prevCodePoint);
        if (breakBetweenGraphemeBreakType(prevGraphemeBreakType, graphemeBreakType)) {
            break;
        }
        offset -= (prevCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
        graphemeBreakType = prevGraphemeBreakType;
    }
    return (initialOffset - offset);
}
exports.prevCharLength = prevCharLength;
function _getCharContainingOffset(str, offset) {
    const graphemeBreakTree = GraphemeBreakTree.getInstance();
    const len = str.length;
    const initialOffset = offset;
    const initialCodePoint = getNextCodePoint(str, len, offset);
    const initialGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(initialCodePoint);
    offset += (initialCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
    // extend to the right
    let graphemeBreakType = initialGraphemeBreakType;
    while (offset < len) {
        const nextCodePoint = getNextCodePoint(str, len, offset);
        const nextGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(nextCodePoint);
        if (breakBetweenGraphemeBreakType(graphemeBreakType, nextGraphemeBreakType)) {
            break;
        }
        offset += (nextCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
        graphemeBreakType = nextGraphemeBreakType;
    }
    const endOffset = offset;
    // extend to the left
    offset = initialOffset;
    graphemeBreakType = initialGraphemeBreakType;
    while (offset > 0) {
        const prevCodePoint = getPrevCodePoint(str, offset);
        const prevGraphemeBreakType = graphemeBreakTree.getGraphemeBreakType(prevCodePoint);
        if (breakBetweenGraphemeBreakType(prevGraphemeBreakType, graphemeBreakType)) {
            break;
        }
        offset -= (prevCodePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
        graphemeBreakType = prevGraphemeBreakType;
    }
    return [offset, endOffset];
}
function getCharContainingOffset(str, offset) {
    if (offset > 0 && isLowSurrogate(str.charCodeAt(offset))) {
        return _getCharContainingOffset(str, offset - 1);
    }
    return _getCharContainingOffset(str, offset);
}
exports.getCharContainingOffset = getCharContainingOffset;
/**
 * A manual encoding of `str` to UTF8.
 * Use only in environments which do not offer native conversion methods!
 */
function encodeUTF8(str) {
    const strLen = str.length;
    // See https://en.wikipedia.org/wiki/UTF-8
    // first loop to establish needed buffer size
    let neededSize = 0;
    let strOffset = 0;
    while (strOffset < strLen) {
        const codePoint = getNextCodePoint(str, strLen, strOffset);
        strOffset += (codePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
        if (codePoint < 0x0080) {
            neededSize += 1;
        }
        else if (codePoint < 0x0800) {
            neededSize += 2;
        }
        else if (codePoint < 0x10000) {
            neededSize += 3;
        }
        else {
            neededSize += 4;
        }
    }
    // second loop to actually encode
    const arr = new Uint8Array(neededSize);
    strOffset = 0;
    let arrOffset = 0;
    while (strOffset < strLen) {
        const codePoint = getNextCodePoint(str, strLen, strOffset);
        strOffset += (codePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1);
        if (codePoint < 0x0080) {
            arr[arrOffset++] = codePoint;
        }
        else if (codePoint < 0x0800) {
            arr[arrOffset++] = 0b11000000 | ((codePoint & 0b00000000000000000000011111000000) >>> 6);
            arr[arrOffset++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
        }
        else if (codePoint < 0x10000) {
            arr[arrOffset++] = 0b11100000 | ((codePoint & 0b00000000000000001111000000000000) >>> 12);
            arr[arrOffset++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
            arr[arrOffset++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
        }
        else {
            arr[arrOffset++] = 0b11110000 | ((codePoint & 0b00000000000111000000000000000000) >>> 18);
            arr[arrOffset++] = 0b10000000 | ((codePoint & 0b00000000000000111111000000000000) >>> 12);
            arr[arrOffset++] = 0b10000000 | ((codePoint & 0b00000000000000000000111111000000) >>> 6);
            arr[arrOffset++] = 0b10000000 | ((codePoint & 0b00000000000000000000000000111111) >>> 0);
        }
    }
    return arr;
}
exports.encodeUTF8 = encodeUTF8;
/**
 * A manual decoding of a UTF8 string.
 * Use only in environments which do not offer native conversion methods!
 */
function decodeUTF8(buffer) {
    // https://en.wikipedia.org/wiki/UTF-8
    const len = buffer.byteLength;
    const result = [];
    let offset = 0;
    while (offset < len) {
        const v0 = buffer[offset];
        let codePoint;
        if (v0 >= 0b11110000 && offset + 3 < len) {
            // 4 bytes
            codePoint = ((((buffer[offset++] & 0b00000111) << 18) >>> 0)
                | (((buffer[offset++] & 0b00111111) << 12) >>> 0)
                | (((buffer[offset++] & 0b00111111) << 6) >>> 0)
                | (((buffer[offset++] & 0b00111111) << 0) >>> 0));
        }
        else if (v0 >= 0b11100000 && offset + 2 < len) {
            // 3 bytes
            codePoint = ((((buffer[offset++] & 0b00001111) << 12) >>> 0)
                | (((buffer[offset++] & 0b00111111) << 6) >>> 0)
                | (((buffer[offset++] & 0b00111111) << 0) >>> 0));
        }
        else if (v0 >= 0b11000000 && offset + 1 < len) {
            // 2 bytes
            codePoint = ((((buffer[offset++] & 0b00011111) << 6) >>> 0)
                | (((buffer[offset++] & 0b00111111) << 0) >>> 0));
        }
        else {
            // 1 byte
            codePoint = buffer[offset++];
        }
        if ((codePoint >= 0 && codePoint <= 0xD7FF) || (codePoint >= 0xE000 && codePoint <= 0xFFFF)) {
            // Basic Multilingual Plane
            result.push(String.fromCharCode(codePoint));
        }
        else if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
            // Supplementary Planes
            const uPrime = codePoint - 0x10000;
            const w1 = 0xD800 + ((uPrime & 0b11111111110000000000) >>> 10);
            const w2 = 0xDC00 + ((uPrime & 0b00000000001111111111) >>> 0);
            result.push(String.fromCharCode(w1));
            result.push(String.fromCharCode(w2));
        }
        else {
            // illegal code point
            result.push(String.fromCharCode(0xFFFD));
        }
    }
    return result.join('');
}
exports.decodeUTF8 = decodeUTF8;
/**
 * Generated using https://github.com/alexdima/unicode-utils/blob/master/generate-rtl-test.js
 */
const CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
/**
 * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
 */
function containsRTL(str) {
    return CONTAINS_RTL.test(str);
}
exports.containsRTL = containsRTL;
/**
 * Generated using https://github.com/alexdima/unicode-utils/blob/master/generate-emoji-test.js
 */
const CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD00-\uDDFF\uDE70-\uDED6])/;
function containsEmoji(str) {
    return CONTAINS_EMOJI.test(str);
}
exports.containsEmoji = containsEmoji;
const IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
/**
 * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
 */
function isBasicASCII(str) {
    return IS_BASIC_ASCII.test(str);
}
exports.isBasicASCII = isBasicASCII;
exports.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/; // LINE SEPARATOR (LS) or PARAGRAPH SEPARATOR (PS)
/**
 * Returns true if `str` contains unusual line terminators, like LS or PS
 */
function containsUnusualLineTerminators(str) {
    return exports.UNUSUAL_LINE_TERMINATORS.test(str);
}
exports.containsUnusualLineTerminators = containsUnusualLineTerminators;
function containsFullWidthCharacter(str) {
    for (let i = 0, len = str.length; i < len; i++) {
        if (isFullWidthCharacter(str.charCodeAt(i))) {
            return true;
        }
    }
    return false;
}
exports.containsFullWidthCharacter = containsFullWidthCharacter;
function isFullWidthCharacter(charCode) {
    // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
    // http://jrgraphix.net/research/unicode_blocks.php
    //          2E80 — 2EFF   CJK Radicals Supplement
    //          2F00 — 2FDF   Kangxi Radicals
    //          2FF0 — 2FFF   Ideographic Description Characters
    //          3000 — 303F   CJK Symbols and Punctuation
    //          3040 — 309F   Hiragana
    //          30A0 — 30FF   Katakana
    //          3100 — 312F   Bopomofo
    //          3130 — 318F   Hangul Compatibility Jamo
    //          3190 — 319F   Kanbun
    //          31A0 — 31BF   Bopomofo Extended
    //          31F0 — 31FF   Katakana Phonetic Extensions
    //          3200 — 32FF   Enclosed CJK Letters and Months
    //          3300 — 33FF   CJK Compatibility
    //          3400 — 4DBF   CJK Unified Ideographs Extension A
    //          4DC0 — 4DFF   Yijing Hexagram Symbols
    //          4E00 — 9FFF   CJK Unified Ideographs
    //          A000 — A48F   Yi Syllables
    //          A490 — A4CF   Yi Radicals
    //          AC00 — D7AF   Hangul Syllables
    // [IGNORE] D800 — DB7F   High Surrogates
    // [IGNORE] DB80 — DBFF   High Private Use Surrogates
    // [IGNORE] DC00 — DFFF   Low Surrogates
    // [IGNORE] E000 — F8FF   Private Use Area
    //          F900 — FAFF   CJK Compatibility Ideographs
    // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
    // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
    // [IGNORE] FE00 — FE0F   Variation Selectors
    // [IGNORE] FE20 — FE2F   Combining Half Marks
    // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
    // [IGNORE] FE50 — FE6F   Small Form Variants
    // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
    //          FF00 — FFEF   Halfwidth and Fullwidth Forms
    //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
    //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
    // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
    // [IGNORE] FFF0 — FFFF   Specials
    charCode = +charCode; // @perf
    return ((charCode >= 0x2E80 && charCode <= 0xD7AF)
        || (charCode >= 0xF900 && charCode <= 0xFAFF)
        || (charCode >= 0xFF01 && charCode <= 0xFF5E));
}
exports.isFullWidthCharacter = isFullWidthCharacter;
/**
 * A fast function (therefore imprecise) to check if code points are emojis.
 * Generated using https://github.com/alexdima/unicode-utils/blob/master/generate-emoji-test.js
 */
function isEmojiImprecise(x) {
    return ((x >= 0x1F1E6 && x <= 0x1F1FF) || (x === 8986) || (x === 8987) || (x === 9200)
        || (x === 9203) || (x >= 9728 && x <= 10175) || (x === 11088) || (x === 11093)
        || (x >= 127744 && x <= 128591) || (x >= 128640 && x <= 128764)
        || (x >= 128992 && x <= 129003) || (x >= 129280 && x <= 129535)
        || (x >= 129648 && x <= 129750));
}
exports.isEmojiImprecise = isEmojiImprecise;
/**
 * Given a string and a max length returns a shorted version. Shorting
 * happens at favorable positions - such as whitespace or punctuation characters.
 */
function lcut(text, n) {
    if (text.length < n) {
        return text;
    }
    const re = /\b/g;
    let i = 0;
    while (re.test(text)) {
        if (text.length - re.lastIndex < n) {
            break;
        }
        i = re.lastIndex;
        re.lastIndex += 1;
    }
    return text.substring(i).replace(/^\s/, '');
}
exports.lcut = lcut;
// Escape codes
// http://en.wikipedia.org/wiki/ANSI_escape_code
const EL = /\x1B\x5B[12]?K/g; // Erase in line
const COLOR_START = /\x1b\[\d+m/g; // Color
const COLOR_END = /\x1b\[0?m/g; // Color
function removeAnsiEscapeCodes(str) {
    if (str) {
        str = str.replace(EL, '');
        str = str.replace(COLOR_START, '');
        str = str.replace(COLOR_END, '');
    }
    return str;
}
exports.removeAnsiEscapeCodes = removeAnsiEscapeCodes;
// -- UTF-8 BOM
exports.UTF8_BOM_CHARACTER = String.fromCharCode(65279 /* UTF8_BOM */);
function startsWithUTF8BOM(str) {
    return !!(str && str.length > 0 && str.charCodeAt(0) === 65279 /* UTF8_BOM */);
}
exports.startsWithUTF8BOM = startsWithUTF8BOM;
function stripUTF8BOM(str) {
    return startsWithUTF8BOM(str) ? str.substr(1) : str;
}
exports.stripUTF8BOM = stripUTF8BOM;
/**
 * Checks if the characters of the provided query string are included in the
 * target string. The characters do not have to be contiguous within the string.
 */
function fuzzyContains(target, query) {
    if (!target || !query) {
        return false; // return early if target or query are undefined
    }
    if (target.length < query.length) {
        return false; // impossible for query to be contained in target
    }
    const queryLen = query.length;
    const targetLower = target.toLowerCase();
    let index = 0;
    let lastIndexOf = -1;
    while (index < queryLen) {
        const indexOf = targetLower.indexOf(query[index], lastIndexOf + 1);
        if (indexOf < 0) {
            return false;
        }
        lastIndexOf = indexOf;
        index++;
    }
    return true;
}
exports.fuzzyContains = fuzzyContains;
function containsUppercaseCharacter(target, ignoreEscapedChars = false) {
    if (!target) {
        return false;
    }
    if (ignoreEscapedChars) {
        target = target.replace(/\\./g, '');
    }
    return target.toLowerCase() !== target;
}
exports.containsUppercaseCharacter = containsUppercaseCharacter;
function uppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.uppercaseFirstLetter = uppercaseFirstLetter;
function getNLines(str, n = 1) {
    if (n === 0) {
        return '';
    }
    let idx = -1;
    do {
        idx = str.indexOf('\n', idx + 1);
        n--;
    } while (n > 0 && idx >= 0);
    if (idx === -1) {
        return str;
    }
    if (str[idx - 1] === '\r') {
        idx--;
    }
    return str.substr(0, idx);
}
exports.getNLines = getNLines;
/**
 * Produces 'a'-'z', followed by 'A'-'Z'... followed by 'a'-'z', etc.
 */
function singleLetterHash(n) {
    const LETTERS_CNT = (90 /* Z */ - 65 /* A */ + 1);
    n = n % (2 * LETTERS_CNT);
    if (n < LETTERS_CNT) {
        return String.fromCharCode(97 /* a */ + n);
    }
    return String.fromCharCode(65 /* A */ + n - LETTERS_CNT);
}
exports.singleLetterHash = singleLetterHash;
//#region Unicode Grapheme Break
function getGraphemeBreakType(codePoint) {
    const graphemeBreakTree = GraphemeBreakTree.getInstance();
    return graphemeBreakTree.getGraphemeBreakType(codePoint);
}
exports.getGraphemeBreakType = getGraphemeBreakType;
function breakBetweenGraphemeBreakType(breakTypeA, breakTypeB) {
    // http://www.unicode.org/reports/tr29/#Grapheme_Cluster_Boundary_Rules
    // !!! Let's make the common case a bit faster
    if (breakTypeA === 0 /* Other */) {
        // see https://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakTest-13.0.0d10.html#table
        return (breakTypeB !== 5 /* Extend */ && breakTypeB !== 7 /* SpacingMark */);
    }
    // Do not break between a CR and LF. Otherwise, break before and after controls.
    // GB3                                        CR × LF
    // GB4                       (Control | CR | LF) ÷
    // GB5                                           ÷ (Control | CR | LF)
    if (breakTypeA === 2 /* CR */) {
        if (breakTypeB === 3 /* LF */) {
            return false; // GB3
        }
    }
    if (breakTypeA === 4 /* Control */ || breakTypeA === 2 /* CR */ || breakTypeA === 3 /* LF */) {
        return true; // GB4
    }
    if (breakTypeB === 4 /* Control */ || breakTypeB === 2 /* CR */ || breakTypeB === 3 /* LF */) {
        return true; // GB5
    }
    // Do not break Hangul syllable sequences.
    // GB6                                         L × (L | V | LV | LVT)
    // GB7                                  (LV | V) × (V | T)
    // GB8                                 (LVT | T) × T
    if (breakTypeA === 8 /* L */) {
        if (breakTypeB === 8 /* L */ || breakTypeB === 9 /* V */ || breakTypeB === 11 /* LV */ || breakTypeB === 12 /* LVT */) {
            return false; // GB6
        }
    }
    if (breakTypeA === 11 /* LV */ || breakTypeA === 9 /* V */) {
        if (breakTypeB === 9 /* V */ || breakTypeB === 10 /* T */) {
            return false; // GB7
        }
    }
    if (breakTypeA === 12 /* LVT */ || breakTypeA === 10 /* T */) {
        if (breakTypeB === 10 /* T */) {
            return false; // GB8
        }
    }
    // Do not break before extending characters or ZWJ.
    // GB9                                           × (Extend | ZWJ)
    if (breakTypeB === 5 /* Extend */ || breakTypeB === 13 /* ZWJ */) {
        return false; // GB9
    }
    // The GB9a and GB9b rules only apply to extended grapheme clusters:
    // Do not break before SpacingMarks, or after Prepend characters.
    // GB9a                                          × SpacingMark
    // GB9b                                  Prepend ×
    if (breakTypeB === 7 /* SpacingMark */) {
        return false; // GB9a
    }
    if (breakTypeA === 1 /* Prepend */) {
        return false; // GB9b
    }
    // Do not break within emoji modifier sequences or emoji zwj sequences.
    // GB11    \p{Extended_Pictographic} Extend* ZWJ × \p{Extended_Pictographic}
    if (breakTypeA === 13 /* ZWJ */ && breakTypeB === 14 /* Extended_Pictographic */) {
        // Note: we are not implementing the rule entirely here to avoid introducing states
        return false; // GB11
    }
    // GB12                          sot (RI RI)* RI × RI
    // GB13                        [^RI] (RI RI)* RI × RI
    if (breakTypeA === 6 /* Regional_Indicator */ && breakTypeB === 6 /* Regional_Indicator */) {
        // Note: we are not implementing the rule entirely here to avoid introducing states
        return false; // GB12 & GB13
    }
    // GB999                                     Any ÷ Any
    return true;
}
exports.breakBetweenGraphemeBreakType = breakBetweenGraphemeBreakType;
class GraphemeBreakTree {
    constructor() {
        this._data = getGraphemeBreakRawData();
    }
    static getInstance() {
        if (!GraphemeBreakTree._INSTANCE) {
            GraphemeBreakTree._INSTANCE = new GraphemeBreakTree();
        }
        return GraphemeBreakTree._INSTANCE;
    }
    getGraphemeBreakType(codePoint) {
        // !!! Let's make 7bit ASCII a bit faster: 0..31
        if (codePoint < 32) {
            if (codePoint === 10 /* LineFeed */) {
                return 3 /* LF */;
            }
            if (codePoint === 13 /* CarriageReturn */) {
                return 2 /* CR */;
            }
            return 4 /* Control */;
        }
        // !!! Let's make 7bit ASCII a bit faster: 32..126
        if (codePoint < 127) {
            return 0 /* Other */;
        }
        const data = this._data;
        const nodeCount = data.length / 3;
        let nodeIndex = 1;
        while (nodeIndex <= nodeCount) {
            if (codePoint < data[3 * nodeIndex]) {
                // go left
                nodeIndex = 2 * nodeIndex;
            }
            else if (codePoint > data[3 * nodeIndex + 1]) {
                // go right
                nodeIndex = 2 * nodeIndex + 1;
            }
            else {
                // hit
                return data[3 * nodeIndex + 2];
            }
        }
        return 0 /* Other */;
    }
}
GraphemeBreakTree._INSTANCE = null;
function getGraphemeBreakRawData() {
    // generated using https://github.com/alexdima/unicode-utils/blob/master/generate-grapheme-break.js
    return JSON.parse('[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]');
}
//#endregion
/**
 * Computes the offset after performing a left delete on the given string,
 * while considering unicode grapheme/emoji rules.
*/
function getLeftDeleteOffset(offset, str) {
    if (offset === 0) {
        return 0;
    }
    // Try to delete emoji part.
    const emojiOffset = getOffsetBeforeLastEmojiComponent(offset, str);
    if (emojiOffset !== undefined) {
        return emojiOffset;
    }
    // Otherwise, just skip a single code point.
    const codePoint = getPrevCodePoint(str, offset);
    offset -= getUTF16Length(codePoint);
    return offset;
}
exports.getLeftDeleteOffset = getLeftDeleteOffset;
function getOffsetBeforeLastEmojiComponent(offset, str) {
    // See https://www.unicode.org/reports/tr51/tr51-14.html#EBNF_and_Regex for the
    // structure of emojis.
    let codePoint = getPrevCodePoint(str, offset);
    offset -= getUTF16Length(codePoint);
    // Skip modifiers
    while ((isEmojiModifier(codePoint) || codePoint === 65039 /* emojiVariantSelector */ || codePoint === 8419 /* enclosingKeyCap */)) {
        if (offset === 0) {
            // Cannot skip modifier, no preceding emoji base.
            return undefined;
        }
        codePoint = getPrevCodePoint(str, offset);
        offset -= getUTF16Length(codePoint);
    }
    // Expect base emoji
    if (!isEmojiImprecise(codePoint)) {
        // Unexpected code point, not a valid emoji.
        return undefined;
    }
    if (offset >= 0) {
        // Skip optional ZWJ code points that combine multiple emojis.
        // In theory, we should check if that ZWJ actually combines multiple emojis
        // to prevent deleting ZWJs in situations we didn't account for.
        const optionalZwjCodePoint = getPrevCodePoint(str, offset);
        if (optionalZwjCodePoint === 8205 /* zwj */) {
            offset -= getUTF16Length(optionalZwjCodePoint);
        }
    }
    return offset;
}
function getUTF16Length(codePoint) {
    return codePoint >= 65536 /* UNICODE_SUPPLEMENTARY_PLANE_BEGIN */ ? 2 : 1;
}
function isEmojiModifier(codePoint) {
    return 0x1F3FB <= codePoint && codePoint <= 0x1F3FF;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCollection = exports.CŜ = void 0;
const symbols_1 = __webpack_require__(4);
const async_1 = __webpack_require__(5);
const CŜ = () => new ServiceCollection();
exports.CŜ = CŜ;
class ServiceCollection {
    constructor(...entries) {
        this._entries = new Map();
        this._multipleEntries = new Map();
        this._waitingMap = new Map();
        this._finalIndicators = new Set();
        for (let [id, service] of entries) {
            this.set(id, service);
        }
    }
    waitUtilInstanceSet(id) {
        const instanceOrDescriptor = this._entries.get(id);
        if (instanceOrDescriptor && !(instanceOrDescriptor instanceof symbols_1.SyncDescriptor)) {
            return Promise.resolve(void 0);
        }
        let barrier = this._waitingMap.get(id);
        if (!barrier) {
            barrier = new async_1.Barrier();
            this._waitingMap.set(id, barrier);
        }
        return barrier.wait();
    }
    setAsFinal(id, instanceOrDescriptor) {
        this._finalIndicators.add(id);
        this.set(id, instanceOrDescriptor);
    }
    set(id, instanceOrDescriptor) {
        if (this._finalIndicators.has(id) && (instanceOrDescriptor instanceof symbols_1.SyncDescriptor)) {
            return;
        }
        this._entries.set(id, instanceOrDescriptor);
        if (instanceOrDescriptor && !(instanceOrDescriptor instanceof symbols_1.SyncDescriptor)) {
            const barrier = this._waitingMap.get(id);
            if (barrier) {
                barrier.open();
                this._waitingMap.delete(id);
            }
        }
    }
    addMultiple(id, instanceOrDescriptor) {
        const array = this._multipleEntries.get(id) || [];
        array.push(instanceOrDescriptor);
        this._multipleEntries.set(id, array);
    }
    setMultiple(id, instanceOrDescriptors) {
        this._multipleEntries.set(id, instanceOrDescriptors);
    }
    forEachMultiple(callback) {
        this._multipleEntries.forEach((value, key) => callback(key, value));
    }
    forEach(callback) {
        this._entries.forEach((value, key) => callback(key, value));
    }
    has(id) {
        return this._entries.has(id);
    }
    hasMultiple(id) {
        return (this._multipleEntries.get(id) || []).length >= 1;
    }
    get(id) {
        return this._entries.get(id);
    }
    getMultiple(id) {
        return this._multipleEntries.get(id) || [];
    }
}
exports.ServiceCollection = ServiceCollection;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const app_1 = __webpack_require__(18);
module.exports = new app_1.App();


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const utils_1 = __webpack_require__(19);
const async_1 = __webpack_require__(5);
const reporter_1 = __webpack_require__(34);
const ItemHeight = 60;
class App {
    constructor() {
        this._rosDocumentScroll = new async_1.RunOnceScheduler(this.onDocumentScroll.bind(this), 40);
        this._latestList = [];
        this._reportExposureMap = new Set();
        this.init();
    }
    init() {
        this._vs = acquireVsCodeApi();
        window.addEventListener('message', this.onReceiveMessage.bind(this));
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.addEventListener('click', this.onContainerClick.bind(this));
        this.ready();
    }
    report(desc) {
        this._vs.postMessage({ type: 'report', data: desc });
    }
    ready() {
        this._vs.postMessage({ type: 'ready' });
        document.addEventListener('scroll', () => this._rosDocumentScroll.schedule());
    }
    onReceiveMessage(msg) {
        var _a, _b;
        switch ((_a = msg === null || msg === void 0 ? void 0 : msg.data) === null || _a === void 0 ? void 0 : _a.type) {
            case 'setType': {
                (_b = this.container) === null || _b === void 0 ? void 0 : _b.classList.add(msg.data.data);
                break;
            }
            case 'updateList': {
                this.updateList(msg.data.data);
                break;
            }
            case 'focusService': {
                this.focusService(msg.data.data);
            }
        }
    }
    focusService(sid) {
        var _a;
        if (!this._lis) {
            this._lis = document.querySelectorAll('li[data-service-id]');
        }
        const lastSid = this._lastSid;
        this._lastSid = sid;
        if (sid === lastSid)
            return;
        for (let i = 0; i < this._lis.length; i++) {
            const el = this._lis[i];
            if (el.dataset.serviceId === sid) {
                el.classList.add('focus');
                (_a = el.scrollIntoViewIfNeeded) === null || _a === void 0 ? void 0 : _a.call(el, { behavior: 'smooth', block: 'end' });
            }
            else if (lastSid && el.dataset.serviceId === lastSid) {
                el.classList.remove('focus');
            }
        }
    }
    onContainerClick(e) {
        var _a;
        const pathes = e.composedPath();
        for (let i = 0; i < pathes.length; i++) {
            const target = pathes[i];
            if (typeof ((_a = target === null || target === void 0 ? void 0 : target.dataset) === null || _a === void 0 ? void 0 : _a.serviceId) === 'string') {
                const sid = target.dataset.serviceId;
                this._vs.postMessage({
                    type: 'openPromotionContainerEditor',
                    data: {
                        label: target.dataset.label || '?',
                        serviceId: sid,
                        source: 'panel',
                        order: this._latestList.findIndex(l => l.serviceId === sid),
                    }
                });
                this.focusService(sid);
                break;
            }
            if (target === this.container)
                break;
        }
    }
    resetList() {
        this._latestList = [];
        this._reportExposureMap.clear();
        this._lis = void 0;
        this._lastSid = void 0;
    }
    updateList(data) {
        this.resetList();
        if (!this.container)
            return;
        if (data.available === false || !data.list || data.list.length < 1) {
            const reason = String(data.emptyReason || 'Unable to load data list.');
            this.container.innerHTML = `
        <p class="info" style="text-align: center; margin-top: 10px">${utils_1.pt(reason)}</p>
      `;
            return;
        }
        this._latestList = data.list;
        const lis = [];
        for (const item of data.list) {
            lis.push(`
        <li class="smp-item" data-service-id="${utils_1.ps(item.serviceId)}" data-label="${utils_1.ps(item.label)}">
          <img class="smp-icon ${item.headImage ? '' : 'hide'}" src="${utils_1.ps(item.headImage || '')}" />
          <div class="smp-entry">
            <p class="smp-title">${utils_1.pt(item.label)}</p>
            <p class="smp-detail">${utils_1.pt(item.subjectName || '')}</p>
          </div>
        </li>
      `);
        }
        this.container.innerHTML = `
      <ul class="smp-items --fade-in-quick">
        ${lis.join('\n')}
      </ul>
    `;
        this._rosDocumentScroll.schedule();
    }
    reportExposureIfNotReported(idx) {
        if (this._reportExposureMap.has(idx))
            return;
        const it = this._latestList[idx];
        if (!it)
            return;
        this._reportExposureMap.add(idx);
        this.report({
            $scheme: 23099,
            $keyInfo: '(23099) report exposure apis in panel (' + it.label + ')',
            details: {
                PageType: reporter_1.Report23099PageType.Panel,
                ActionType: reporter_1.Report23099ActionType.Exposure,
                Exposure: reporter_1.Report23099Exposure.Exposure,
                ServiceType: it.serviceType || undefined,
                ServiceId: it.serviceId,
            }
        });
        this.report({
            $scheme: 13613,
            $keyInfo: '(13613) report exposure apis in panel (' + it.label + ')',
            details: {
                Action: reporter_1.Report13613Action.expose_editor_panel_api,
                Data: it.serviceId,
                Data2: String(idx + 1),
            }
        });
    }
    onDocumentScroll() {
        const y = window.pageYOffset;
        const height = window.innerHeight;
        if (isNaN(y) || isNaN(height))
            return;
        const startDigi = y / ItemHeight;
        const start = Math.ceil(startDigi) - 1;
        const maxCount = Math.ceil(height / ItemHeight);
        const max = Math.min(maxCount, this._latestList.length);
        let j = Math.max(0, start);
        for (let i = 0; i < max; i++) {
            this.reportExposureIfNotReported(j++);
        }
    }
}
exports.App = App;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ps = exports.pt = void 0;
const _i = document.createElement('i');
function pt(text) {
    _i.innerText = text;
    return _i.innerHTML;
}
exports.pt = pt;
const _i2 = document.createElement('i');
function ps(src) {
    _i2.setAttribute('class', src);
    return _i2.outerHTML.slice(10, -6);
}
exports.ps = ps;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancellationTokenSource = exports.CancellationToken = void 0;
const event_1 = __webpack_require__(8);
const shortcutEvent = Object.freeze(function (callback, context) {
    const handle = setTimeout(callback.bind(context), 0);
    return { dispose() { clearTimeout(handle); } };
});
var CancellationToken;
(function (CancellationToken) {
    function isCancellationToken(thing) {
        if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
            return true;
        }
        if (thing instanceof MutableToken) {
            return true;
        }
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        return typeof thing.isCancellationRequested === 'boolean'
            && typeof thing.onCancellationRequested === 'function';
    }
    CancellationToken.isCancellationToken = isCancellationToken;
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: event_1.Event.None
    });
    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
    });
})(CancellationToken = exports.CancellationToken || (exports.CancellationToken = {}));
class MutableToken {
    constructor() {
        this._isCancelled = false;
        this._emitter = null;
    }
    cancel() {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    }
    get isCancellationRequested() {
        return this._isCancelled;
    }
    get onCancellationRequested() {
        if (this._isCancelled) {
            return shortcutEvent;
        }
        if (!this._emitter) {
            this._emitter = new event_1.Emitter();
        }
        return this._emitter.event;
    }
    dispose() {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = null;
        }
    }
}
class CancellationTokenSource {
    constructor(parent) {
        this._token = undefined;
        this._parentListener = undefined;
        this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
    }
    get token() {
        if (!this._token) {
            // be lazy and create the token only when
            // actually needed
            this._token = new MutableToken();
        }
        return this._token;
    }
    cancel() {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        }
        else if (this._token instanceof MutableToken) {
            // actually cancel
            this._token.cancel();
        }
    }
    dispose(cancel = false) {
        if (cancel) {
            this.cancel();
        }
        if (this._parentListener) {
            this._parentListener.dispose();
        }
        if (!this._token) {
            // ensure to initialize with an empty token if we had none
            this._token = CancellationToken.None;
        }
        else if (this._token instanceof MutableToken) {
            // actually dispose
            this._token.dispose();
        }
    }
}
exports.CancellationTokenSource = CancellationTokenSource;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(24);

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(9);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterable = void 0;
var Iterable;
(function (Iterable) {
    function is(thing) {
        return thing && typeof thing === 'object' && typeof thing[Symbol.iterator] === 'function';
    }
    Iterable.is = is;
    const _empty = Object.freeze([]);
    function empty() {
        return _empty;
    }
    Iterable.empty = empty;
    function* single(element) {
        yield element;
    }
    Iterable.single = single;
    function from(iterable) {
        return iterable || _empty;
    }
    Iterable.from = from;
    function isEmpty(iterable) {
        return !iterable || iterable[Symbol.iterator]().next().done === true;
    }
    Iterable.isEmpty = isEmpty;
    function first(iterable) {
        return iterable[Symbol.iterator]().next().value;
    }
    Iterable.first = first;
    function some(iterable, predicate) {
        for (const element of iterable) {
            if (predicate(element)) {
                return true;
            }
        }
        return false;
    }
    Iterable.some = some;
    function find(iterable, predicate) {
        for (const element of iterable) {
            if (predicate(element)) {
                return element;
            }
        }
        return undefined;
    }
    Iterable.find = find;
    function* filter(iterable, predicate) {
        for (const element of iterable) {
            if (predicate(element)) {
                yield element;
            }
        }
    }
    Iterable.filter = filter;
    function* map(iterable, fn) {
        let index = 0;
        for (const element of iterable) {
            yield fn(element, index++);
        }
    }
    Iterable.map = map;
    function* concat(...iterables) {
        for (const iterable of iterables) {
            for (const element of iterable) {
                yield element;
            }
        }
    }
    Iterable.concat = concat;
    function* concatNested(iterables) {
        for (const iterable of iterables) {
            for (const element of iterable) {
                yield element;
            }
        }
    }
    Iterable.concatNested = concatNested;
    function reduce(iterable, reducer, initialValue) {
        let value = initialValue;
        for (const element of iterable) {
            value = reducer(value, element);
        }
        return value;
    }
    Iterable.reduce = reduce;
    /**
     * Returns an iterable slice of the array, with the same semantics as `array.slice()`.
     */
    function* slice(arr, from, to = arr.length) {
        if (from < 0) {
            from += arr.length;
        }
        if (to < 0) {
            to += arr.length;
        }
        else if (to > arr.length) {
            to = arr.length;
        }
        for (; from < to; from++) {
            yield arr[from];
        }
    }
    Iterable.slice = slice;
    /**
     * Consumes `atMost` elements from iterable and returns the consumed elements,
     * and an iterable for the rest of the elements.
     */
    function consume(iterable, atMost = Number.POSITIVE_INFINITY) {
        const consumed = [];
        if (atMost === 0) {
            return [consumed, iterable];
        }
        const iterator = iterable[Symbol.iterator]();
        for (let i = 0; i < atMost; i++) {
            const next = iterator.next();
            if (next.done) {
                return [consumed, Iterable.empty()];
            }
            consumed.push(next.value);
        }
        return [consumed, { [Symbol.iterator]() { return iterator; } }];
    }
    Iterable.consume = consume;
    /**
     * Returns whether the iterables are the same length and all items are
     * equal using the comparator function.
     */
    function equals(a, b, comparator = (at, bt) => at === bt) {
        const ai = a[Symbol.iterator]();
        const bi = b[Symbol.iterator]();
        while (true) {
            const an = ai.next();
            const bn = bi.next();
            if (an.done !== bn.done) {
                return false;
            }
            else if (an.done) {
                return true;
            }
            else if (!comparator(an.value, bn.value)) {
                return false;
            }
        }
    }
    Iterable.equals = equals;
})(Iterable = exports.Iterable || (exports.Iterable = {}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(element) {
        this.element = element;
        this.next = Node.Undefined;
        this.prev = Node.Undefined;
    }
}
Node.Undefined = new Node(undefined);
class LinkedList {
    constructor() {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    isEmpty() {
        return this._first === Node.Undefined;
    }
    clear() {
        let node = this._first;
        while (node !== Node.Undefined) {
            const next = node.next;
            node.prev = Node.Undefined;
            node.next = Node.Undefined;
            node = next;
        }
        this._first = Node.Undefined;
        this._last = Node.Undefined;
        this._size = 0;
    }
    unshift(element) {
        return this._insert(element, false);
    }
    push(element) {
        return this._insert(element, true);
    }
    _insert(element, atTheEnd) {
        const newNode = new Node(element);
        if (this._first === Node.Undefined) {
            this._first = newNode;
            this._last = newNode;
        }
        else if (atTheEnd) {
            // push
            const oldLast = this._last;
            this._last = newNode;
            newNode.prev = oldLast;
            oldLast.next = newNode;
        }
        else {
            // unshift
            const oldFirst = this._first;
            this._first = newNode;
            newNode.next = oldFirst;
            oldFirst.prev = newNode;
        }
        this._size += 1;
        let didRemove = false;
        return () => {
            if (!didRemove) {
                didRemove = true;
                this._remove(newNode);
            }
        };
    }
    shift() {
        if (this._first === Node.Undefined) {
            return undefined;
        }
        else {
            const res = this._first.element;
            this._remove(this._first);
            return res;
        }
    }
    pop() {
        if (this._last === Node.Undefined) {
            return undefined;
        }
        else {
            const res = this._last.element;
            this._remove(this._last);
            return res;
        }
    }
    _remove(node) {
        if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
            // middle
            const anchor = node.prev;
            anchor.next = node.next;
            node.next.prev = anchor;
        }
        else if (node.prev === Node.Undefined && node.next === Node.Undefined) {
            // only node
            this._first = Node.Undefined;
            this._last = Node.Undefined;
        }
        else if (node.next === Node.Undefined) {
            // last
            this._last = this._last.prev;
            this._last.next = Node.Undefined;
        }
        else if (node.prev === Node.Undefined) {
            // first
            this._first = this._first.next;
            this._first.prev = Node.Undefined;
        }
        // done
        this._size -= 1;
    }
    *[Symbol.iterator]() {
        let node = this._first;
        while (node !== Node.Undefined) {
            yield node.element;
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLineAndColumnAware = exports.indexOfPath = exports.getDriveLetter = exports.hasDriveLetter = exports.isRootOrDriveLetter = exports.sanitizeFilePath = exports.isWindowsDriveLetter = exports.isEqualOrParent = exports.isEqual = exports.isValidBasename = exports.isUNC = exports.getRoot = exports.toPosixPath = exports.toSlashes = exports.isPathSeparator = void 0;
const platform_1 = __webpack_require__(2);
const strings_1 = __webpack_require__(14);
const path_1 = __webpack_require__(6);
const types_1 = __webpack_require__(29);
function isPathSeparator(code) {
    return code === 47 /* Slash */ || code === 92 /* Backslash */;
}
exports.isPathSeparator = isPathSeparator;
/**
 * Takes a Windows OS path and changes backward slashes to forward slashes.
 * This should only be done for OS paths from Windows (or user provided paths potentially from Windows).
 * Using it on a Linux or MaxOS path might change it.
 */
function toSlashes(osPath) {
    return osPath.replace(/[\\/]/g, path_1.posix.sep);
}
exports.toSlashes = toSlashes;
/**
 * Takes a Windows OS path (using backward or forward slashes) and turns it into a posix path:
 * - turns backward slashes into forward slashes
 * - makes it absolute if it starts with a drive letter
 * This should only be done for OS paths from Windows (or user provided paths potentially from Windows).
 * Using it on a Linux or MaxOS path might change it.
 */
function toPosixPath(osPath) {
    if (osPath.indexOf('/') === -1) {
        osPath = toSlashes(osPath);
    }
    if (/^[a-zA-Z]:(\/|$)/.test(osPath)) { // starts with a drive letter
        osPath = '/' + osPath;
    }
    return osPath;
}
exports.toPosixPath = toPosixPath;
/**
 * Computes the _root_ this path, like `getRoot('c:\files') === c:\`,
 * `getRoot('files:///files/path') === files:///`,
 * or `getRoot('\\server\shares\path') === \\server\shares\`
 */
function getRoot(path, sep = path_1.posix.sep) {
    if (!path) {
        return '';
    }
    const len = path.length;
    const firstLetter = path.charCodeAt(0);
    if (isPathSeparator(firstLetter)) {
        if (isPathSeparator(path.charCodeAt(1))) {
            // UNC candidate \\localhost\shares\ddd
            //               ^^^^^^^^^^^^^^^^^^^
            if (!isPathSeparator(path.charCodeAt(2))) {
                let pos = 3;
                const start = pos;
                for (; pos < len; pos++) {
                    if (isPathSeparator(path.charCodeAt(pos))) {
                        break;
                    }
                }
                if (start !== pos && !isPathSeparator(path.charCodeAt(pos + 1))) {
                    pos += 1;
                    for (; pos < len; pos++) {
                        if (isPathSeparator(path.charCodeAt(pos))) {
                            return path.slice(0, pos + 1) // consume this separator
                                .replace(/[\\/]/g, sep);
                        }
                    }
                }
            }
        }
        // /user/far
        // ^
        return sep;
    }
    else if (isWindowsDriveLetter(firstLetter)) {
        // check for windows drive letter c:\ or c:
        if (path.charCodeAt(1) === 58 /* Colon */) {
            if (isPathSeparator(path.charCodeAt(2))) {
                // C:\fff
                // ^^^
                return path.slice(0, 2) + sep;
            }
            else {
                // C:
                // ^^
                return path.slice(0, 2);
            }
        }
    }
    // check for URI
    // scheme://authority/path
    // ^^^^^^^^^^^^^^^^^^^
    let pos = path.indexOf('://');
    if (pos !== -1) {
        pos += 3; // 3 -> "://".length
        for (; pos < len; pos++) {
            if (isPathSeparator(path.charCodeAt(pos))) {
                return path.slice(0, pos + 1); // consume this separator
            }
        }
    }
    return '';
}
exports.getRoot = getRoot;
/**
 * Check if the path follows this pattern: `\\hostname\sharename`.
 *
 * @see https://msdn.microsoft.com/en-us/library/gg465305.aspx
 * @return A boolean indication if the path is a UNC path, on none-windows
 * always false.
 */
function isUNC(path) {
    if (!platform_1.isWindows) {
        // UNC is a windows concept
        return false;
    }
    if (!path || path.length < 5) {
        // at least \\a\b
        return false;
    }
    let code = path.charCodeAt(0);
    if (code !== 92 /* Backslash */) {
        return false;
    }
    code = path.charCodeAt(1);
    if (code !== 92 /* Backslash */) {
        return false;
    }
    let pos = 2;
    const start = pos;
    for (; pos < path.length; pos++) {
        code = path.charCodeAt(pos);
        if (code === 92 /* Backslash */) {
            break;
        }
    }
    if (start === pos) {
        return false;
    }
    code = path.charCodeAt(pos + 1);
    if (isNaN(code) || code === 92 /* Backslash */) {
        return false;
    }
    return true;
}
exports.isUNC = isUNC;
// Reference: https://en.wikipedia.org/wiki/Filename
const WINDOWS_INVALID_FILE_CHARS = /[\\/:\*\?"<>\|]/g;
const UNIX_INVALID_FILE_CHARS = /[\\/]/g;
const WINDOWS_FORBIDDEN_NAMES = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;
function isValidBasename(name, isWindowsOS = platform_1.isWindows) {
    const invalidFileChars = isWindowsOS ? WINDOWS_INVALID_FILE_CHARS : UNIX_INVALID_FILE_CHARS;
    if (!name || name.length === 0 || /^\s+$/.test(name)) {
        return false; // require a name that is not just whitespace
    }
    invalidFileChars.lastIndex = 0; // the holy grail of software development
    if (invalidFileChars.test(name)) {
        return false; // check for certain invalid file characters
    }
    if (isWindowsOS && WINDOWS_FORBIDDEN_NAMES.test(name)) {
        return false; // check for certain invalid file names
    }
    if (name === '.' || name === '..') {
        return false; // check for reserved values
    }
    if (isWindowsOS && name[name.length - 1] === '.') {
        return false; // Windows: file cannot end with a "."
    }
    if (isWindowsOS && name.length !== name.trim().length) {
        return false; // Windows: file cannot end with a whitespace
    }
    if (name.length > 255) {
        return false; // most file systems do not allow files > 255 length
    }
    return true;
}
exports.isValidBasename = isValidBasename;
function isEqual(pathA, pathB, ignoreCase) {
    const identityEquals = (pathA === pathB);
    if (!ignoreCase || identityEquals) {
        return identityEquals;
    }
    if (!pathA || !pathB) {
        return false;
    }
    return (0, strings_1.equalsIgnoreCase)(pathA, pathB);
}
exports.isEqual = isEqual;
function isEqualOrParent(base, parentCandidate, ignoreCase, separator = path_1.sep) {
    if (base === parentCandidate) {
        return true;
    }
    if (!base || !parentCandidate) {
        return false;
    }
    if (parentCandidate.length > base.length) {
        return false;
    }
    if (ignoreCase) {
        const beginsWith = (0, strings_1.startsWithIgnoreCase)(base, parentCandidate);
        if (!beginsWith) {
            return false;
        }
        if (parentCandidate.length === base.length) {
            return true; // same path, different casing
        }
        let sepOffset = parentCandidate.length;
        if (parentCandidate.charAt(parentCandidate.length - 1) === separator) {
            sepOffset--; // adjust the expected sep offset in case our candidate already ends in separator character
        }
        return base.charAt(sepOffset) === separator;
    }
    if (parentCandidate.charAt(parentCandidate.length - 1) !== separator) {
        parentCandidate += separator;
    }
    return base.indexOf(parentCandidate) === 0;
}
exports.isEqualOrParent = isEqualOrParent;
function isWindowsDriveLetter(char0) {
    return char0 >= 65 /* A */ && char0 <= 90 /* Z */ || char0 >= 97 /* a */ && char0 <= 122 /* z */;
}
exports.isWindowsDriveLetter = isWindowsDriveLetter;
function sanitizeFilePath(candidate, cwd) {
    // Special case: allow to open a drive letter without trailing backslash
    if (platform_1.isWindows && candidate.endsWith(':')) {
        candidate += path_1.sep;
    }
    // Ensure absolute
    if (!(0, path_1.isAbsolute)(candidate)) {
        candidate = (0, path_1.join)(cwd, candidate);
    }
    // Ensure normalized
    candidate = (0, path_1.normalize)(candidate);
    // Ensure no trailing slash/backslash
    if (platform_1.isWindows) {
        candidate = (0, strings_1.rtrim)(candidate, path_1.sep);
        // Special case: allow to open drive root ('C:\')
        if (candidate.endsWith(':')) {
            candidate += path_1.sep;
        }
    }
    else {
        candidate = (0, strings_1.rtrim)(candidate, path_1.sep);
        // Special case: allow to open root ('/')
        if (!candidate) {
            candidate = path_1.sep;
        }
    }
    return candidate;
}
exports.sanitizeFilePath = sanitizeFilePath;
function isRootOrDriveLetter(path) {
    const pathNormalized = (0, path_1.normalize)(path);
    if (platform_1.isWindows) {
        if (path.length > 3) {
            return false;
        }
        return hasDriveLetter(pathNormalized) &&
            (path.length === 2 || pathNormalized.charCodeAt(2) === 92 /* Backslash */);
    }
    return pathNormalized === path_1.posix.sep;
}
exports.isRootOrDriveLetter = isRootOrDriveLetter;
function hasDriveLetter(path) {
    if (platform_1.isWindows) {
        return isWindowsDriveLetter(path.charCodeAt(0)) && path.charCodeAt(1) === 58 /* Colon */;
    }
    return false;
}
exports.hasDriveLetter = hasDriveLetter;
function getDriveLetter(path) {
    return hasDriveLetter(path) ? path[0] : undefined;
}
exports.getDriveLetter = getDriveLetter;
function indexOfPath(path, candidate, ignoreCase) {
    if (candidate.length > path.length) {
        return -1;
    }
    if (path === candidate) {
        return 0;
    }
    if (ignoreCase) {
        path = path.toLowerCase();
        candidate = candidate.toLowerCase();
    }
    return path.indexOf(candidate);
}
exports.indexOfPath = indexOfPath;
function parseLineAndColumnAware(rawPath) {
    const segments = rawPath.split(':'); // C:\file.txt:<line>:<column>
    let path = undefined;
    let line = undefined;
    let column = undefined;
    segments.forEach(segment => {
        const segmentAsNumber = Number(segment);
        if (!(0, types_1.isNumber)(segmentAsNumber)) {
            path = !!path ? [path, segment].join(':') : segment; // a colon can well be part of a path (e.g. C:\...)
        }
        else if (line === undefined) {
            line = segmentAsNumber;
        }
        else if (column === undefined) {
            column = segmentAsNumber;
        }
    });
    if (!path) {
        throw new Error('Format for `--goto` should be: `FILE:LINE(:COLUMN)`');
    }
    return {
        path,
        line: line !== undefined ? line : undefined,
        column: column !== undefined ? column : line !== undefined ? 1 : undefined // if we have a line, make sure column is also set
    };
}
exports.parseLineAndColumnAware = parseLineAndColumnAware;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextTick = exports.platform = exports.env = exports.cwd = void 0;
const platform_1 = __webpack_require__(2);
let safeProcess;
// Native sandbox environment
if (typeof platform_1.globals.vscode !== 'undefined' && typeof platform_1.globals.vscode.process !== 'undefined') {
    const sandboxProcess = platform_1.globals.vscode.process;
    safeProcess = {
        get platform() { return sandboxProcess.platform; },
        get env() { return sandboxProcess.env; },
        cwd() { return sandboxProcess.cwd(); },
        nextTick(callback) { return (0, platform_1.setImmediate)(callback); }
    };
}
// Native node.js environment
else if (typeof process !== 'undefined') {
    safeProcess = {
        get platform() { return process.platform; },
        get env() { return process.env; },
        cwd() { return process.env['VSCODE_CWD'] || process.cwd(); },
        nextTick(callback) { return process.nextTick(callback); }
    };
}
// Web environment
else {
    safeProcess = {
        // Supported
        get platform() { return platform_1.isWindows ? 'win32' : platform_1.isMacintosh ? 'darwin' : 'linux'; },
        nextTick(callback) { return (0, platform_1.setImmediate)(callback); },
        // Unsupported
        get env() { return {}; },
        cwd() { return '/'; }
    };
}
/**
 * Provides safe access to the `cwd` property in node.js, sandboxed or web
 * environments.
 *
 * Note: in web, this property is hardcoded to be `/`.
 */
exports.cwd = safeProcess.cwd;
/**
 * Provides safe access to the `env` property in node.js, sandboxed or web
 * environments.
 *
 * Note: in web, this property is hardcoded to be `{}`.
 */
exports.env = safeProcess.env;
/**
 * Provides safe access to the `platform` property in node.js, sandboxed or web
 * environments.
 */
exports.platform = safeProcess.platform;
/**
 * Provides safe access to the `nextTick` method in node.js, sandboxed or web
 * environments.
 */
exports.nextTick = safeProcess.nextTick;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNever = exports.NotImplementedProxy = exports.withUndefinedAsNull = exports.withNullAsUndefined = exports.createProxyObject = exports.getAllMethodNames = exports.getAllPropertyNames = exports.validateConstraint = exports.validateConstraints = exports.areFunctions = exports.isFunction = exports.isEmptyObject = exports.assertAllDefined = exports.assertIsDefined = exports.assertType = exports.isUndefinedOrNull = exports.isDefined = exports.isUndefined = exports.isBoolean = exports.isIterable = exports.isNumber = exports.isObject = exports.isStringArray = exports.isString = exports.isArray = void 0;
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
 */
function isArray(array) {
    return Array.isArray(array);
}
exports.isArray = isArray;
/**
 * @returns whether the provided parameter is a JavaScript String or not.
 */
function isString(str) {
    return (typeof str === 'string');
}
exports.isString = isString;
/**
 * @returns whether the provided parameter is a JavaScript Array and each element in the array is a string.
 */
function isStringArray(value) {
    return Array.isArray(value) && value.every(elem => isString(elem));
}
exports.isStringArray = isStringArray;
/**
 *
 * @returns whether the provided parameter is of type `object` but **not**
 *	`null`, an `array`, a `regexp`, nor a `date`.
 */
function isObject(obj) {
    // The method can't do a type cast since there are type (like strings) which
    // are subclasses of any put not positvely matched by the function. Hence type
    // narrowing results in wrong results.
    return typeof obj === 'object'
        && obj !== null
        && !Array.isArray(obj)
        && !(obj instanceof RegExp)
        && !(obj instanceof Date);
}
exports.isObject = isObject;
/**
 * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
 * @returns whether the provided parameter is a JavaScript Number or not.
 */
function isNumber(obj) {
    return (typeof obj === 'number' && !isNaN(obj));
}
exports.isNumber = isNumber;
/**
 * @returns whether the provided parameter is an Iterable, casting to the given generic
 */
function isIterable(obj) {
    return !!obj && typeof obj[Symbol.iterator] === 'function';
}
exports.isIterable = isIterable;
/**
 * @returns whether the provided parameter is a JavaScript Boolean or not.
 */
function isBoolean(obj) {
    return (obj === true || obj === false);
}
exports.isBoolean = isBoolean;
/**
 * @returns whether the provided parameter is undefined.
 */
function isUndefined(obj) {
    return (typeof obj === 'undefined');
}
exports.isUndefined = isUndefined;
/**
 * @returns whether the provided parameter is defined.
 */
function isDefined(arg) {
    return !isUndefinedOrNull(arg);
}
exports.isDefined = isDefined;
/**
 * @returns whether the provided parameter is undefined or null.
 */
function isUndefinedOrNull(obj) {
    return (isUndefined(obj) || obj === null);
}
exports.isUndefinedOrNull = isUndefinedOrNull;
function assertType(condition, type) {
    if (!condition) {
        throw new Error(type ? `Unexpected type, expected '${type}'` : 'Unexpected type');
    }
}
exports.assertType = assertType;
/**
 * Asserts that the argument passed in is neither undefined nor null.
 */
function assertIsDefined(arg) {
    if (isUndefinedOrNull(arg)) {
        throw new Error('Assertion Failed: argument is undefined or null');
    }
    return arg;
}
exports.assertIsDefined = assertIsDefined;
function assertAllDefined(...args) {
    const result = [];
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (isUndefinedOrNull(arg)) {
            throw new Error(`Assertion Failed: argument at index ${i} is undefined or null`);
        }
        result.push(arg);
    }
    return result;
}
exports.assertAllDefined = assertAllDefined;
const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @returns whether the provided parameter is an empty JavaScript Object or not.
 */
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return false;
    }
    for (let key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
exports.isEmptyObject = isEmptyObject;
/**
 * @returns whether the provided parameter is a JavaScript Function or not.
 */
function isFunction(obj) {
    return (typeof obj === 'function');
}
exports.isFunction = isFunction;
/**
 * @returns whether the provided parameters is are JavaScript Function or not.
 */
function areFunctions(...objects) {
    return objects.length > 0 && objects.every(isFunction);
}
exports.areFunctions = areFunctions;
function validateConstraints(args, constraints) {
    const len = Math.min(args.length, constraints.length);
    for (let i = 0; i < len; i++) {
        validateConstraint(args[i], constraints[i]);
    }
}
exports.validateConstraints = validateConstraints;
function validateConstraint(arg, constraint) {
    if (isString(constraint)) {
        if (typeof arg !== constraint) {
            throw new Error(`argument does not match constraint: typeof ${constraint}`);
        }
    }
    else if (isFunction(constraint)) {
        try {
            if (arg instanceof constraint) {
                return;
            }
        }
        catch (_a) {
            // ignore
        }
        if (!isUndefinedOrNull(arg) && arg.constructor === constraint) {
            return;
        }
        if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
            return;
        }
        throw new Error(`argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true`);
    }
}
exports.validateConstraint = validateConstraint;
function getAllPropertyNames(obj) {
    let res = [];
    let proto = Object.getPrototypeOf(obj);
    while (Object.prototype !== proto) {
        res = res.concat(Object.getOwnPropertyNames(proto));
        proto = Object.getPrototypeOf(proto);
    }
    return res;
}
exports.getAllPropertyNames = getAllPropertyNames;
function getAllMethodNames(obj) {
    const methods = [];
    for (const prop of getAllPropertyNames(obj)) {
        if (typeof obj[prop] === 'function') {
            methods.push(prop);
        }
    }
    return methods;
}
exports.getAllMethodNames = getAllMethodNames;
function createProxyObject(methodNames, invoke) {
    const createProxyMethod = (method) => {
        return function () {
            const args = Array.prototype.slice.call(arguments, 0);
            return invoke(method, args);
        };
    };
    let result = {};
    for (const methodName of methodNames) {
        result[methodName] = createProxyMethod(methodName);
    }
    return result;
}
exports.createProxyObject = createProxyObject;
/**
 * Converts null to undefined, passes all other values through.
 */
function withNullAsUndefined(x) {
    return x === null ? undefined : x;
}
exports.withNullAsUndefined = withNullAsUndefined;
/**
 * Converts undefined to null, passes all other values through.
 */
function withUndefinedAsNull(x) {
    return typeof x === 'undefined' ? null : x;
}
exports.withUndefinedAsNull = withUndefinedAsNull;
function NotImplementedProxy(name) {
    return class {
        constructor() {
            return new Proxy({}, {
                get(target, prop) {
                    if (target[prop]) {
                        return target[prop];
                    }
                    throw new Error(`Not Implemented: ${name}->${String(prop)}`);
                }
            });
        }
    };
}
exports.NotImplementedProxy = NotImplementedProxy;
function assertNever(value, message = 'Unreachable') {
    throw new Error(message);
}
exports.assertNever = assertNever;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//! getPathFromAmdModule asFileUri
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAccess = exports.RemoteAuthorities = exports.Schemas = void 0;
const uri_1 = __webpack_require__(7);
const platform = __webpack_require__(2);
const amd_1 = __webpack_require__(31);
var Schemas;
(function (Schemas) {
    /**
     * A schema that is used for models that exist in memory
     * only and that have no correspondence on a server or such.
     */
    Schemas.inMemory = 'inmemory';
    /**
     * A schema that is used for setting files
     */
    Schemas.vscode = 'vscode';
    /**
     * A schema that is used for internal private files
     */
    Schemas.internal = 'private';
    /**
     * A walk-through document.
     */
    Schemas.walkThrough = 'walkThrough';
    /**
     * An embedded code snippet.
     */
    Schemas.walkThroughSnippet = 'walkThroughSnippet';
    Schemas.http = 'http';
    Schemas.https = 'https';
    Schemas.file = 'file';
    Schemas.mailto = 'mailto';
    Schemas.untitled = 'untitled';
    Schemas.data = 'data';
    Schemas.command = 'command';
    Schemas.vscodeRemote = 'vscode-remote';
    Schemas.vscodeRemoteResource = 'vscode-remote-resource';
    Schemas.userData = 'vscode-userdata';
    Schemas.vscodeCustomEditor = 'vscode-custom-editor';
    Schemas.vscodeNotebook = 'vscode-notebook';
    Schemas.vscodeNotebookCell = 'vscode-notebook-cell';
    Schemas.vscodeNotebookCellMetadata = 'vscode-notebook-cell-metadata';
    Schemas.vscodeNotebookCellOutput = 'vscode-notebook-cell-output';
    Schemas.vscodeInteractive = 'vscode-interactive';
    Schemas.vscodeInteractiveInput = 'vscode-interactive-input';
    Schemas.vscodeSettings = 'vscode-settings';
    Schemas.vscodeWorkspaceTrust = 'vscode-workspace-trust';
    Schemas.vscodeTerminal = 'vscode-terminal';
    Schemas.webviewPanel = 'webview-panel';
    /**
     * Scheme used for loading the wrapper html and script in webviews.
     */
    Schemas.vscodeWebview = 'vscode-webview';
    /**
     * Scheme used for extension pages
     */
    Schemas.extension = 'extension';
    /**
     * Scheme used as a replacement of `file` scheme to load
     * files with our custom protocol handler (desktop only).
     */
    Schemas.vscodeFileResource = 'vscode-file';
    /**
     * Scheme used for temporary resources
     */
    Schemas.tmp = 'tmp';
})(Schemas = exports.Schemas || (exports.Schemas = {}));
class RemoteAuthoritiesImpl {
    constructor() {
        this._hosts = Object.create(null);
        this._ports = Object.create(null);
        this._connectionTokens = Object.create(null);
        this._preferredWebSchema = 'http';
        this._delegate = null;
    }
    setPreferredWebSchema(schema) {
        this._preferredWebSchema = schema;
    }
    setDelegate(delegate) {
        this._delegate = delegate;
    }
    set(authority, host, port) {
        this._hosts[authority] = host;
        this._ports[authority] = port;
    }
    setConnectionToken(authority, connectionToken) {
        this._connectionTokens[authority] = connectionToken;
    }
    rewrite(uri) {
        if (this._delegate) {
            return this._delegate(uri);
        }
        const authority = uri.authority;
        let host = this._hosts[authority];
        if (host && host.indexOf(':') !== -1) {
            host = `[${host}]`;
        }
        const port = this._ports[authority];
        const connectionToken = this._connectionTokens[authority];
        let query = `path=${encodeURIComponent(uri.path)}`;
        if (typeof connectionToken === 'string') {
            query += `&tkn=${encodeURIComponent(connectionToken)}`;
        }
        return uri_1.URI.from({
            scheme: platform.isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource,
            authority: `${host}:${port}`,
            path: `/vscode-remote-resource`,
            query
        });
    }
}
exports.RemoteAuthorities = new RemoteAuthoritiesImpl();
class FileAccessImpl {
    constructor() {
        this.FALLBACK_AUTHORITY = 'vscode-app';
    }
    asBrowserUri(uriOrModule, moduleIdToUrl, __forceCodeFileUri) {
        const uri = this.toUri(uriOrModule, moduleIdToUrl);
        // Handle remote URIs via `RemoteAuthorities`
        if (uri.scheme === Schemas.vscodeRemote) {
            return exports.RemoteAuthorities.rewrite(uri);
        }
        let convertToVSCodeFileResource = false;
        // Only convert the URI if we are in a native context and it has `file:` scheme
        // and we have explicitly enabled the conversion (sandbox, or VSCODE_BROWSER_CODE_LOADING)
        if (platform.isNative && (__forceCodeFileUri || platform.isPreferringBrowserCodeLoad) && uri.scheme === Schemas.file) {
            convertToVSCodeFileResource = true;
        }
        // Also convert `file:` URIs in the web worker extension host (running in desktop) case
        if (uri.scheme === Schemas.file && typeof platform.globals.importScripts === 'function' && platform.globals.origin === 'vscode-file://vscode-app') {
            convertToVSCodeFileResource = true;
        }
        if (convertToVSCodeFileResource) {
            return uri.with({
                scheme: Schemas.vscodeFileResource,
                // We need to provide an authority here so that it can serve
                // as origin for network and loading matters in chromium.
                // If the URI is not coming with an authority already, we
                // add our own
                authority: uri.authority || this.FALLBACK_AUTHORITY,
                query: null,
                fragment: null
            });
        }
        return uri;
    }
    asFileUri(uriOrModule, moduleIdToUrl) {
        if (typeof uriOrModule === 'string') {
            return uri_1.URI.file((0, amd_1.getPathFromAmdModule)(__webpack_require__(33), uriOrModule));
        }
        const uri = this.toUri(uriOrModule, moduleIdToUrl);
        // Only convert the URI if it is `vscode-file:` scheme
        if (uri.scheme === Schemas.vscodeFileResource) {
            return uri.with({
                scheme: Schemas.file,
                // Only preserve the `authority` if it is different from
                // our fallback authority. This ensures we properly preserve
                // Windows UNC paths that come with their own authority.
                authority: uri.authority !== this.FALLBACK_AUTHORITY ? uri.authority : null,
                query: null,
                fragment: null
            });
        }
        return uri;
    }
    toUri(uriOrModule, moduleIdToUrl) {
        if (uri_1.URI.isUri(uriOrModule)) {
            return uriOrModule;
        }
        return uri_1.URI.parse(moduleIdToUrl.toUrl(uriOrModule));
    }
}
exports.FileAccess = new FileAccessImpl();


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAndGetAmdImageURL = exports.getUriFromAmdModule = exports.getPathFromAmdModule = void 0;
const uri_1 = __webpack_require__(7);
const pJoin = function (...args) {
    if (typeof process === 'object') {
        return __webpack_require__(32).posix.join(...args);
    }
    else {
        return args.join('/').replace(/\\/g, '/').replace(/\/{2,}/g, '/');
    }
};
const resources_1 = __webpack_require__(13);
// @ts-ignore
const vsEditorConfig = global.vsEditorConfig || {
    editorRootPath: '',
};
const Transforms = [
    ['vs/workbench/contrib/debug/browser/media/', (p, r) => pJoin(vsEditorConfig.editorRootPath, 'static/vs/debug/', r.substr(p.length))],
    ['bootstrap-fork', (p, r) => pJoin(vsEditorConfig.editorRootPath, 'src', r)],
    ['vs/workbench/contrib/externalTerminal/node/', (p, r) => pJoin(vsEditorConfig.editorRootPath, 'src', r)],
    [(r) => r === '', (p, r) => pJoin(vsEditorConfig.editorRootPath, 'src', r)],
    ['vs/base/node/', (p, r) => pJoin(vsEditorConfig.editorRootPath, 'src', r)],
];
function getPathFromAmdModule(requirefn, relativePath) {
    if (!vsEditorConfig.editorRootPath) {
        throw new Error('vsEditorConfig.editorRootPath not set');
    }
    // throw new Error('getPathFromAmdModule cannot be implemented!')
    let transformed = false;
    for (const k of Transforms) {
        if ((typeof k[0] === 'function' && k[0](relativePath)) || (typeof k[0] === 'string' && relativePath.startsWith(k[0]))) {
            relativePath = k[1](k[0], relativePath);
            transformed = true;
            break;
        }
    }
    // TODO: 最终 app 的路径
    // console.log(pJoin(vsEditorConfig.editorRootPath, 'src', relativePath).toString())
    return transformed ? relativePath.toString() : pJoin(vsEditorConfig.editorRootPath, 'src', relativePath).toString();
}
exports.getPathFromAmdModule = getPathFromAmdModule;
function getUriFromAmdModule(requirefn, relativePath) {
    return uri_1.URI.parse(getPathFromAmdModule(requirefn, relativePath));
}
exports.getUriFromAmdModule = getUriFromAmdModule;
/**
 * Reference a resource that might be inlined.
 * Do not inline icons that will be used by the native mac touchbar.
 * Do not rename this method unless you adopt the build scripts.
 */
function registerAndGetAmdImageURL(absolutePath) {
    if (!vsEditorConfig.editorRootPath) {
        throw new Error('vsEditorConfig.editorRootPath not set');
    }
    if (absolutePath.startsWith('vs/')) {
        throw new Error('there might be an invalid uri using registerAndGetAmdImageURL(), please correct it');
    }
    return (0, resources_1.joinPath)(uri_1.URI.file(vsEditorConfig.editorRootPath), absolutePath).toString();
}
exports.registerAndGetAmdImageURL = registerAndGetAmdImageURL;
// export abstract class LoaderStats {
//   abstract get amdLoad(): [string, number][];
//   abstract get amdInvoke(): [string, number][];
//   abstract get nodeRequire(): [string, number][];
//   abstract get nodeEval(): [string, number][];
//   abstract get nodeRequireTotal(): number;
//   static get(): LoaderStats {
//     const amdLoadScript = new Map<string, number>();
//     const amdInvokeFactory = new Map<string, number>();
//     const nodeRequire = new Map<string, number>();
//     const nodeEval = new Map<string, number>();
//     function mark(map: Map<string, number>, stat: LoaderEvent) {
//       if (map.has(stat.detail)) {
//         // console.warn('BAD events, DOUBLE start', stat);
//         // map.delete(stat.detail);
//         return;
//       }
//       map.set(stat.detail, -stat.timestamp);
//     }
//     function diff(map: Map<string, number>, stat: LoaderEvent) {
//       let duration = map.get(stat.detail);
//       if (!duration) {
//         // console.warn('BAD events, end WITHOUT start', stat);
//         // map.delete(stat.detail);
//         return;
//       }
//       if (duration >= 0) {
//         // console.warn('BAD events, DOUBLE end', stat);
//         // map.delete(stat.detail);
//         return;
//       }
//       map.set(stat.detail, duration + stat.timestamp);
//     }
//     const stats = mergeSort(require.getStats().slice(0), (a, b) => a.timestamp - b.timestamp);
//     for (const stat of stats) {
//       switch (stat.type) {
//         case LoaderEventType.BeginLoadingScript:
//           mark(amdLoadScript, stat);
//           break;
//         case LoaderEventType.EndLoadingScriptOK:
//         case LoaderEventType.EndLoadingScriptError:
//           diff(amdLoadScript, stat);
//           break;
//         case LoaderEventType.BeginInvokeFactory:
//           mark(amdInvokeFactory, stat);
//           break;
//         case LoaderEventType.EndInvokeFactory:
//           diff(amdInvokeFactory, stat);
//           break;
//         case LoaderEventType.NodeBeginNativeRequire:
//           mark(nodeRequire, stat);
//           break;
//         case LoaderEventType.NodeEndNativeRequire:
//           diff(nodeRequire, stat);
//           break;
//         case LoaderEventType.NodeBeginEvaluatingScript:
//           mark(nodeEval, stat);
//           break;
//         case LoaderEventType.NodeEndEvaluatingScript:
//           diff(nodeEval, stat);
//           break;
//       }
//     }
//     let nodeRequireTotal = 0;
//     nodeRequire.forEach(value => nodeRequireTotal += value);
//     function to2dArray(map: Map<string, number>): [string, number][] {
//       let res: [string, number][] = [];
//       map.forEach((value, index) => res.push([index, value]));
//       return res;
//     }
//     return {
//       amdLoad: to2dArray(amdLoadScript),
//       amdInvoke: to2dArray(amdInvokeFactory),
//       nodeRequire: to2dArray(nodeRequire),
//       nodeEval: to2dArray(nodeEval),
//       nodeRequireTotal
//     };
//   }
//   static toMarkdownTable(header: string[], rows: Array<Array<{ toString(): string } | undefined>>): string {
//     let result = '';
//     let lengths: number[] = [];
//     header.forEach((cell, ci) => {
//       lengths[ci] = cell.length;
//     });
//     rows.forEach(row => {
//       row.forEach((cell, ci) => {
//         if (typeof cell === 'undefined') {
//           cell = row[ci] = '-';
//         }
//         const len = cell.toString().length;
//         lengths[ci] = Math.max(len, lengths[ci]);
//       });
//     });
//     // header
//     header.forEach((cell, ci) => { result += `| ${cell + ' '.repeat(lengths[ci] - cell.toString().length)} `; });
//     result += '|\n';
//     header.forEach((_cell, ci) => { result += `| ${'-'.repeat(lengths[ci])} `; });
//     result += '|\n';
//     // cells
//     rows.forEach(row => {
//       row.forEach((cell, ci) => {
//         if (typeof cell !== 'undefined') {
//           result += `| ${cell + ' '.repeat(lengths[ci] - cell.toString().length)} `;
//         }
//       });
//       result += '|\n';
//     });
//     return result;
//   }
// }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(3)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 33;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporterService = exports.Report13613Action = exports.Report23099Exposure = exports.Report23099ActionType = exports.Report23099PageType = void 0;
const service_base_1 = __webpack_require__(35);
var Report23099PageType;
(function (Report23099PageType) {
    Report23099PageType[Report23099PageType["SuggestList"] = 19] = "SuggestList";
    Report23099PageType[Report23099PageType["Panel"] = 20] = "Panel";
})(Report23099PageType = exports.Report23099PageType || (exports.Report23099PageType = {}));
var Report23099ActionType;
(function (Report23099ActionType) {
    Report23099ActionType[Report23099ActionType["Exposure"] = 1] = "Exposure";
})(Report23099ActionType = exports.Report23099ActionType || (exports.Report23099ActionType = {}));
var Report23099Exposure;
(function (Report23099Exposure) {
    Report23099Exposure[Report23099Exposure["Exposure"] = 2] = "Exposure";
    Report23099Exposure[Report23099Exposure["Click"] = 1] = "Click";
})(Report23099Exposure = exports.Report23099Exposure || (exports.Report23099Exposure = {}));
var Report13613Action;
(function (Report13613Action) {
    Report13613Action[Report13613Action["expose_editor_suggestion_api"] = 527] = "expose_editor_suggestion_api";
    Report13613Action[Report13613Action["click_editor_suggestion_api"] = 528] = "click_editor_suggestion_api";
    Report13613Action[Report13613Action["expose_editor_panel_api"] = 529] = "expose_editor_panel_api";
    Report13613Action[Report13613Action["click_editor_panel_api"] = 530] = "click_editor_panel_api";
    Report13613Action[Report13613Action["expose_suggestion_detail_page"] = 531] = "expose_suggestion_detail_page";
    Report13613Action[Report13613Action["click_buy_on_suggestion_detail_page"] = 532] = "click_buy_on_suggestion_detail_page";
    Report13613Action[Report13613Action["click_submit_order_on_suggestion_detail_page"] = 533] = "click_submit_order_on_suggestion_detail_page";
})(Report13613Action = exports.Report13613Action || (exports.Report13613Action = {}));
exports.IReporterService = service_base_1.createDecorator('reporterService');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstantiationService = exports.IInstantiationService = exports.registerMonacoHacks = exports.createDecorator = void 0;
const symbols_1 = __webpack_require__(4);
Object.defineProperty(exports, "createDecorator", { enumerable: true, get: function () { return symbols_1.createDecorator; } });
const graph_1 = __webpack_require__(38);
const collection_1 = __webpack_require__(15);
const async_1 = __webpack_require__(5);
let monacoHackRegistry = {
    monacoCommonServices: new WeakMap(),
    monacoCollections: new Set(),
    saveMonacoService: () => { },
    activateMonaco: () => { },
    getKnownMonacoCommonServices: () => { return void 0; },
};
function registerMonacoHacks(registers) {
    monacoHackRegistry = registers;
}
exports.registerMonacoHacks = registerMonacoHacks;
exports.IInstantiationService = (0, symbols_1.createDecorator)('instantiationService');
const _enableTracing = false;
class CyclicDependencyError extends Error {
    constructor(graph) {
        var _a;
        super('cyclic dependency between services');
        this.message = (_a = graph.findCycleSlow()) !== null && _a !== void 0 ? _a : `UNABLE to detect cycle, dumping graph: \n${graph.toString()}`;
    }
}
class InstantiationService {
    constructor(services = new collection_1.ServiceCollection(), strict = false, parent) {
        this._monacoShadowedInstantiationServices = [];
        this._activeInstantiations = new Set();
        this._services = services;
        this._strict = strict;
        this._parent = parent;
        this._services.set(exports.IInstantiationService, this);
    }
    getServiceCollection() {
        return this._services;
    }
    monacoShadowed() {
        monacoHackRegistry.activateMonaco();
        for (const collection of monacoHackRegistry.monacoCollections) {
            if (this._monacoShadowedInstantiationServices.findIndex(mi => {
                return mi.getServiceCollection() === collection;
            }) < 0) {
                this._monacoShadowedInstantiationServices.push(new InstantiationService(collection, false, this));
            }
        }
        return this._monacoShadowedInstantiationServices;
    }
    monacoShadowedCommonService(monacoId) {
        monacoHackRegistry.activateMonaco();
        let _service = monacoHackRegistry.monacoCommonServices.get(monacoId);
        if (_service) {
            return _service;
        }
        const shadows = this.monacoShadowed();
        for (const o of shadows) {
            _service = o.Ә(monacoId);
            if (_service) {
                monacoHackRegistry.saveMonacoService(monacoId, _service);
                return _service;
            }
        }
        return void 0;
    }
    createChild(services) {
        return new InstantiationService(services, this._strict, this);
    }
    async δ(id, isOptional) {
        if (typeof id === 'string') {
            id = symbols_1._util.serviceIds.get(id);
            if (!id) {
                return void 0;
            }
        }
        if (!this._services.has(id)) {
            let instance = this._parent;
            while (instance) {
                if (instance._services.has(id)) {
                    return instance.δ(id, isOptional);
                }
                instance = instance._parent;
            }
        }
        await this._services.waitUtilInstanceSet(id);
        return this.Ә(id, isOptional);
    }
    Ԑ(id, isOptional) {
        if (typeof id === 'string') {
            id = symbols_1._util.serviceIds.get(id);
            if (!id) {
                return void 0;
            }
        }
        if (!this._services.has(id)) {
            let instance = this._parent;
            while (instance) {
                if (instance._services.has(id)) {
                    return instance.Ԑ(id, isOptional);
                }
                instance = instance._parent;
            }
        }
        if (!this._services.has(id)) {
            return void 0;
        }
        const thing = this._getServiceInstanceOrDescriptor(id);
        if (thing instanceof symbols_1.SyncDescriptor) {
            return void 0;
        }
        return this.Ә(id, isOptional);
    }
    Ә(id, isOptional) {
        if (typeof id === 'string') {
            id = symbols_1._util.serviceIds.get(id);
            if (!id) {
                return void 0;
            }
        }
        const result = this._getOrCreateServiceInstance(id, Trace.None);
        if (!result && isOptional !== symbols_1.optional) {
            console.warn(`[invokeFunction] unknown service '${id}'`);
            return void 0;
        }
        return result;
    }
    ӘӘ(id, isOptional) {
        if (typeof id === 'string') {
            id = symbols_1._util.serviceIds.get(id);
            if (!id) {
                return [];
            }
        }
        const result = this._getOrCreateServiceInstanceMultiple(id, Trace.None);
        if (!result && isOptional !== symbols_1.optional) {
            console.warn(`[invokeFunction] unknown service '${id}'`);
            return [];
        }
        return result;
    }
    invokeFunction(fn, ...args) {
        let _trace = Trace.traceInvocation(fn);
        let _done = false;
        try {
            const getter = (id, isOptional) => {
                if (_done) {
                    throw new Error('service accessor is only valid during the invocation of its target method');
                }
                const result = this._getOrCreateServiceInstance(id, _trace);
                if (!result && isOptional !== symbols_1.optional) {
                    throw new Error(`[invokeFunction] unknown service '${id}'`);
                }
                return result;
            };
            const multipleGetter = (id, isOptional) => {
                if (_done) {
                    throw new Error('service accessor is only valid during the invocation of its target method');
                }
                const result = this._getOrCreateServiceInstanceMultiple(id, _trace);
                if (!result && isOptional !== symbols_1.optional) {
                    throw new Error(`[invokeFunction] unknown service '${id}'`);
                }
                return result;
            };
            const setter = (id, service) => {
                if (typeof id === 'string') {
                    id = (0, symbols_1.createDecorator)(id);
                }
                this._services.set(id, service);
            };
            const multipleAdder = (id, service) => {
                if (typeof id === 'string') {
                    id = (0, symbols_1.createDecorator)(id);
                }
                this._services.addMultiple(id, service);
            };
            const accessor = {
                get: getter,
                getMultiple: multipleGetter,
                set: setter,
                addMultiple: multipleAdder,
            };
            // @ts-ignore
            return fn.apply(void 0, [accessor].concat(args));
        }
        finally {
            _done = true;
            _trace.stop();
        }
    }
    createInstance(ctorOrDescriptor, ...rest) {
        let _trace;
        let result;
        if (ctorOrDescriptor instanceof symbols_1.SyncDescriptor) {
            _trace = Trace.traceCreation(ctorOrDescriptor.ctor);
            result = this._createInstance(ctorOrDescriptor.ctor, ctorOrDescriptor.staticArguments.concat(rest), _trace);
        }
        else {
            _trace = Trace.traceCreation(ctorOrDescriptor);
            result = this._createInstance(ctorOrDescriptor, rest, _trace);
        }
        _trace.stop();
        return result;
    }
    _createInstance(ctor, args = [], _trace) {
        // arguments defined by service decorators
        let serviceDependencies = symbols_1._util.getServiceDependencies(ctor).sort((a, b) => a.index - b.index);
        let serviceArgs = [];
        for (const dependency of serviceDependencies) {
            let service = this._getOrCreateServiceInstance(dependency.id, _trace);
            if (!service && this._strict && !dependency.optional) {
                throw new Error(`[createInstance] ${ctor.name} depends on UNKNOWN service ${dependency.id}.`);
            }
            serviceArgs.push(service);
        }
        let firstServiceArgPos = serviceDependencies.length > 0 ? serviceDependencies[0].index : args.length;
        // check for argument mismatches, adjust static args if needed
        if (args.length !== firstServiceArgPos) {
            console.warn(`[createInstance] First service dependency of ${ctor.name} at position ${firstServiceArgPos + 1} conflicts with ${args.length} static arguments`);
            let delta = firstServiceArgPos - args.length;
            if (delta > 0) {
                args = args.concat(new Array(delta));
            }
            else {
                args = args.slice(0, firstServiceArgPos);
            }
        }
        // now create the instance
        // return <T>new ctor(...[...args, ...serviceArgs])
        return new ctor(...[...args, ...serviceArgs]);
    }
    _setServiceInstance(id, instance) {
        if (this._services.get(id) instanceof symbols_1.SyncDescriptor) {
            this._services.set(id, instance);
        }
        else if (this._parent) {
            this._parent._setServiceInstance(id, instance);
        }
        else {
            throw new Error('illegalState - setting UNKNOWN service instance');
        }
    }
    _getServiceInstanceOrDescriptor(id) {
        const instanceOrDesc = this._services.get(id);
        let result;
        if (!instanceOrDesc && this._parent) {
            result = this._parent._getServiceInstanceOrDescriptor(id);
        }
        else {
            result = instanceOrDesc;
        }
        if (!result && monacoHackRegistry.getKnownMonacoCommonServices(id)) {
            const _monaco_id = monacoHackRegistry.getKnownMonacoCommonServices(id);
            result = this.monacoShadowedCommonService(_monaco_id);
        }
        if (!result && id._monacoDecorator) {
            result = this.monacoShadowedCommonService(id);
        }
        return result;
    }
    _getServiceInstanceOrDescriptorMultiple(id) {
        const instanceOrDesc = this._services.getMultiple(id);
        if (instanceOrDesc.length < 1 && this._parent) {
            return this._parent._getServiceInstanceOrDescriptorMultiple(id);
        }
        else {
            return instanceOrDesc;
        }
    }
    _getOrCreateServiceInstance(id, _trace) {
        let thing = this._getServiceInstanceOrDescriptor(id);
        let result;
        if (thing instanceof symbols_1.SyncDescriptor) {
            return this._safeCreateAndCacheServiceInstance(id, thing, _trace.branch(id, true));
        }
        else {
            _trace.branch(id, false);
            result = thing;
        }
        if (!result && monacoHackRegistry.getKnownMonacoCommonServices(id)) {
            const _monaco_id = monacoHackRegistry.getKnownMonacoCommonServices(id);
            result = this.monacoShadowedCommonService(_monaco_id);
        }
        if (!result && id._monacoDecorator) {
            result = this.monacoShadowedCommonService(id);
        }
        return result;
    }
    _getOrCreateServiceInstanceMultiple(id, _trace) {
        let instances = this._getServiceInstanceOrDescriptorMultiple(id);
        const things = [];
        for (const ins of instances) {
            if (ins instanceof symbols_1.SyncDescriptor) {
                const instance = this._createInstance(ins.ctor, ins.staticArguments, _trace);
                things.push(instance);
            }
            else {
                things.push(ins);
            }
        }
        this._services.setMultiple(id, things);
        return things;
    }
    _safeCreateAndCacheServiceInstance(id, desc, _trace) {
        if (this._activeInstantiations.has(id)) {
            throw new Error(`illegal state - RECURSIVELY instantiating service '${id}'`);
        }
        this._activeInstantiations.add(id);
        try {
            return this._createAndCacheServiceInstance(id, desc, _trace);
        }
        finally {
            this._activeInstantiations.delete(id);
        }
    }
    _createAndCacheServiceInstance(id, desc, _trace) {
        const graph = new graph_1.Graph(data => data.id.toString());
        function throwCycleError() {
            const err = new Error('[createInstance] cyclic dependency between services');
            err.message = graph.toString();
            throw err;
        }
        let cycleCount = 0;
        const stack = [{ id, desc, _trace }];
        while (stack.length) {
            const item = stack.pop();
            graph.lookupOrInsertNode(item);
            // TODO@joh use the graph to find a cycle
            // a weak heuristic for cycle checks
            if (cycleCount++ > 1000) {
                throw new CyclicDependencyError(graph);
            }
            // check all dependencies for existence and if they need to be created first
            let dependencies = symbols_1._util.getServiceDependencies(item.desc.ctor);
            for (let dependency of dependencies) {
                let instanceOrDesc = this._getServiceInstanceOrDescriptor(dependency.id);
                if (!instanceOrDesc && !dependency.optional) {
                    console.warn(`[createInstance] ${id} depends on ${dependency.id} which is NOT registered.`);
                }
                if (instanceOrDesc instanceof symbols_1.SyncDescriptor) {
                    const d = { id: dependency.id, desc: instanceOrDesc, _trace: item._trace.branch(dependency.id, true) };
                    graph.insertEdge(item, d);
                    stack.push(d);
                }
            }
        }
        while (true) {
            let roots = graph.roots();
            // if there is no more roots but still
            // nodes in the graph we have a cycle
            if (roots.length === 0) {
                if (!graph.isEmpty()) {
                    throwCycleError();
                }
                break;
            }
            for (const { data } of roots) {
                // Repeat the check for this still being a service sync descriptor. That's because
                // instantiating a dependency might have side-effect and recursively trigger instantiation
                // so that some dependencies are now fullfilled already.
                const instanceOrDesc = this._getServiceInstanceOrDescriptor(data.id);
                if (instanceOrDesc instanceof symbols_1.SyncDescriptor) {
                    // create instance and overwrite the service collections
                    const instance = this._createServiceInstanceWithOwner(data.id, data.desc.ctor, data.desc.staticArguments, data.desc.supportsDelayedInstantiation, data._trace);
                    this._setServiceInstance(data.id, instance);
                }
                graph.removeNode(data);
            }
        }
        return this._getServiceInstanceOrDescriptor(id);
    }
    _createServiceInstanceWithOwner(id, ctor, args = [], supportsDelayedInstantiation, _trace) {
        let desc = this._services.get(id);
        if (!desc) {
            desc = this._services.getMultiple(id)[0];
        }
        if (desc instanceof symbols_1.SyncDescriptor) {
            return this._createServiceInstance(ctor, args, supportsDelayedInstantiation, _trace);
        }
        else if (this._parent) {
            return this._parent._createServiceInstanceWithOwner(id, ctor, args, supportsDelayedInstantiation, _trace);
        }
        else {
            throw new Error('illegalState - creating UNKNOWN service instance');
        }
    }
    _createServiceInstance(ctor, args = [], _supportsDelayedInstantiation, _trace) {
        if (!_supportsDelayedInstantiation) {
            // eager instantiation
            return this._createInstance(ctor, args, _trace);
        }
        else {
            // Return a proxy object that's backed by an idle value. That
            // strategy is to instantiate services in our idle time or when actually
            // needed but not when injected into a consumer
            const idle = new async_1.IdleValue(() => this._createInstance(ctor, args, _trace));
            return new Proxy(Object.create(null), {
                get(target, key) {
                    if (key in target) {
                        return target[key];
                    }
                    let obj = idle.value;
                    let prop = obj[key];
                    if (typeof prop !== 'function') {
                        return prop;
                    }
                    prop = prop.bind(obj);
                    target[key] = prop;
                    return prop;
                },
                set(_target, p, value) {
                    idle.value[p] = value;
                    return true;
                }
            });
        }
    }
}
exports.InstantiationService = InstantiationService;
class Trace {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this._start = Date.now();
        this._dep = [];
    }
    //!
    static get None() {
        return this._None;
    }
    static traceInvocation(ctor) {
        return !_enableTracing ? Trace._None : new Trace(1 /* Invocation */, ctor.name || ctor.toString().substring(0, 42).replace(/\n/g, ''));
    }
    static traceCreation(ctor) {
        return !_enableTracing ? Trace._None : new Trace(0 /* Creation */, ctor.name);
    }
    branch(id, first) {
        let child = new Trace(2 /* Branch */, id.toString());
        this._dep.push([id, first, child]);
        return child;
    }
    stop() {
        let dur = Date.now() - this._start;
        Trace._totals += dur;
        let causedCreation = false;
        function printChild(n, trace) {
            let res = [];
            let prefix = new Array(n + 1).join('\t');
            for (const [id, first, child] of trace._dep) {
                if (first && child) {
                    causedCreation = true;
                    res.push(`${prefix}CREATES -> ${id}`);
                    let nested = printChild(n + 1, child);
                    if (nested) {
                        res.push(nested);
                    }
                }
                else {
                    res.push(`${prefix}uses -> ${id}`);
                }
            }
            return res.join('\n');
        }
        let lines = [
            `${this.type === 0 /* Creation */ ? 'CREATE' : 'CALL'} ${this.name}`,
            `${printChild(1, this)}`,
            `DONE, took ${dur.toFixed(2)}ms (grand total ${Trace._totals.toFixed(2)}ms)`
        ];
        if (dur > 2 || causedCreation) {
            console.log(lines.join('\n'));
        }
    }
}
Trace._None = new class extends Trace {
    constructor() { super(-1, null); }
    stop() { }
    branch() { return this; }
};
Trace._totals = 0;
//#endregion

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.Node = void 0;
class Node {
    constructor(data) {
        this.incoming = new Map();
        this.outgoing = new Map();
        this.data = data;
    }
}
exports.Node = Node;
class Graph {
    constructor(_hashFn) {
        this._hashFn = _hashFn;
        this._nodes = new Map();
        // empty
    }
    roots() {
        const ret = [];
        for (let node of this._nodes.values()) {
            if (node.outgoing.size === 0) {
                ret.push(node);
            }
        }
        return ret;
    }
    insertEdge(from, to) {
        const fromNode = this.lookupOrInsertNode(from);
        const toNode = this.lookupOrInsertNode(to);
        fromNode.outgoing.set(this._hashFn(to), toNode);
        toNode.incoming.set(this._hashFn(from), fromNode);
    }
    removeNode(data) {
        const key = this._hashFn(data);
        this._nodes.delete(key);
        for (let node of this._nodes.values()) {
            node.outgoing.delete(key);
            node.incoming.delete(key);
        }
    }
    lookupOrInsertNode(data) {
        const key = this._hashFn(data);
        let node = this._nodes.get(key);
        if (!node) {
            node = new Node(data);
            this._nodes.set(key, node);
        }
        return node;
    }
    lookup(data) {
        return this._nodes.get(this._hashFn(data));
    }
    isEmpty() {
        return this._nodes.size === 0;
    }
    toString() {
        let data = [];
        for (let [key, value] of this._nodes) {
            data.push(`${key}, (incoming)[${[...value.incoming.keys()].join(', ')}], (outgoing)[${[...value.outgoing.keys()].join(',')}]`);
        }
        return data.join('\n');
    }
    /**
     * This is brute force and slow and **only** be used
     * to trouble shoot.
     */
    findCycleSlow() {
        for (let [id, node] of this._nodes) {
            const seen = new Set([id]);
            const res = this._findCycle(node, seen);
            if (res) {
                return res;
            }
        }
        return undefined;
    }
    _findCycle(node, seen) {
        for (let [id, outgoing] of node.outgoing) {
            if (seen.has(id)) {
                return [...seen, id].join(' -> ');
            }
            seen.add(id);
            const value = this._findCycle(outgoing, seen);
            if (value) {
                return value;
            }
            seen.delete(id);
        }
        return undefined;
    }
}
exports.Graph = Graph;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(console) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerInRootServiceCollection = exports.setRootServiceCollection = exports.getSingletonServiceDescriptors = exports.registerSingleton = void 0;
const symbols_1 = __webpack_require__(4);
const _registry = [];
function registerSingleton(id, ctorOrDescriptor, supportsDelayedInstantiation, autoRegisterInRootServiceCollection) {
    if (!(ctorOrDescriptor instanceof symbols_1.SyncDescriptor)) {
        ctorOrDescriptor = new symbols_1.SyncDescriptor(ctorOrDescriptor, [], supportsDelayedInstantiation);
    }
    if (autoRegisterInRootServiceCollection === undefined) {
        autoRegisterInRootServiceCollection = true;
    }
    if (_rootServiceCollection && autoRegisterInRootServiceCollection) {
        registerInRootServiceCollection(id, ctorOrDescriptor, supportsDelayedInstantiation);
    }
    else {
        _registry.push([id, ctorOrDescriptor]);
    }
}
exports.registerSingleton = registerSingleton;
function getSingletonServiceDescriptors() {
    return _registry;
}
exports.getSingletonServiceDescriptors = getSingletonServiceDescriptors;
let _rootServiceCollection;
let _queue = [];
function setRootServiceCollection(cc) {
    if (_rootServiceCollection) {
        throw new Error('Root service collection has already been set.');
    }
    _rootServiceCollection = cc;
    if (_queue.length) {
        const queue = [..._queue];
        _queue = [];
        for (const [id, descriptor] of queue) {
            cc.set(id, descriptor);
        }
    }
}
exports.setRootServiceCollection = setRootServiceCollection;
function registerInRootServiceCollection(id, ctorOrDescriptor, supportsDelayedInstantiation) {
    if (!(ctorOrDescriptor instanceof symbols_1.SyncDescriptor)) {
        ctorOrDescriptor = new symbols_1.SyncDescriptor(ctorOrDescriptor, [], supportsDelayedInstantiation);
    }
    if (_rootServiceCollection) {
        const possible = _rootServiceCollection.get(id);
        if (possible && !(possible instanceof symbols_1.SyncDescriptor)) {
            console.warn('[registerInRootServiceCollection]', id.toString(), 'may already be instantiated.');
            return;
        }
        _rootServiceCollection.set(id, ctorOrDescriptor);
    }
    else {
        _queue.push([id, ctorOrDescriptor]);
    }
}
exports.registerInRootServiceCollection = registerInRootServiceCollection;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNvbGUtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vYmFzZS9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vc2VydmljZS9zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vYmFzZS9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvdXJpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vYmFzZS9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vYmFzZS9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2UtYmFzZS9kaXN0L2NvbW1vbi9iYXNlL2Z1bmN0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2UtYmFzZS9kaXN0L2NvbW1vbi9iYXNlL2xpZmVjeWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvcmVzb3VyY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vYmFzZS9zdHJpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vc2VydmljZS9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWJ2aWV3L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJ2aWV3L2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vidmlldy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvY2FuY2VsbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hc3NlcnQvYXNzZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vYmFzZS9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvZXh0cGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2UvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2UtYmFzZS9kaXN0L2NvbW1vbi9iYXNlL25ldHdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2UtYmFzZS9kaXN0L2NvbW1vbi9hbWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL2Jhc2Ugc3luYyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3JlcG9ydGVyL3JlcG9ydGVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VydmljZS1iYXNlL2Rpc3QvY29tbW9uL3NlcnZpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2UtYmFzZS9kaXN0L2NvbW1vbi9zZXJ2aWNlL2luc3RhbnRpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2UtYmFzZS9kaXN0L2NvbW1vbi9zZXJ2aWNlL2dyYXBoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXJ2aWNlLWJhc2UvZGlzdC9jb21tb24vc2VydmljZS9leHRlbnNpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQSxXQUFXLG1CQUFPLENBQUMsQ0FBTTtBQUN6QixhQUFhLG1CQUFPLENBQUMsRUFBUTtBQUM3QixnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7O0FDdkx0Qyx1REFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhLEVBQUUsU0FBUztBQUN2RCxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdURBQXVEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHlDQUF5Qyw2QkFBNkI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7O0FDbkJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQjtBQUNsRTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHVCQUF1QixtQkFBTyxDQUFDLEVBQWdCO0FBQy9DLGlCQUFpQixtQkFBTyxDQUFDLEVBQVU7QUFDbkMsZ0JBQWdCLG1CQUFPLENBQUMsQ0FBUztBQUNqQyxvQkFBb0IsbUJBQU8sQ0FBQyxFQUFhO0FBQ3pDLG9CQUFvQixtQkFBTyxDQUFDLEVBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsOEJBQThCLGVBQWUsRUFBRTtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0JBQXNCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsVUFBVTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsQ0FBQyx1REFBdUQ7QUFDeEQ7Ozs7Ozs7O0FDajlCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFXO0FBQ25DLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLLElBQUksS0FBSyxHQUFHLFdBQVcsV0FBVyxTQUFTO0FBQzFFLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVLEVBQUUsNkJBQTZCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCLEVBQUUscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJLEVBQUUsS0FBSyxPQUFPLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVSxJQUFJLG9CQUFvQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9CQUFvQixJQUFJLGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlLElBQUksYUFBYTtBQUMvQyxlQUFlLGVBQWUsRUFBRSxhQUFhO0FBQzdDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVSxJQUFJLGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVSxJQUFJLG9CQUFvQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsS0FBSztBQUMxQztBQUNBLCtCQUErQixPQUFPLElBQUksS0FBSyxPQUFPLE9BQU8sRUFBRSxLQUFLO0FBQ3BFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLElBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSSxFQUFFLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDhCQUE4QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxHQUFHLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsSUFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLEVBQUUsa0NBQWtDO0FBQzFELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzMyQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsQ0FBWTtBQUN2QyxjQUFjLG1CQUFPLENBQUMsQ0FBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsMEJBQTBCLGNBQWMsWUFBWSxTQUFTLGFBQWEsVUFBVSxnQkFBZ0IsYUFBYSxFQUFFO0FBQzVLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyQ0FBMkM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGNBQWMsRUFBRSxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkNBQTJDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQkFBK0IsR0FBRyxlQUFlLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQkFBK0IsR0FBRyxlQUFlLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2psQkEsK0NBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsRUFBVTtBQUNuQyxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFjO0FBQzNDLG9CQUFvQixtQkFBTyxDQUFDLEVBQWE7QUFDekMscUJBQXFCLG1CQUFPLENBQUMsRUFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLFNBQVMsNEJBQTRCLEVBQUU7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDJDQUEyQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyQ0FBMkM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVUsNkNBQTZDLGNBQWMsOENBQThDLFNBQVM7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5ckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLEVBQW9COztBQUUvQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsRUFBVTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0QsMkJBQTJCLG1EQUFtRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlyQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxLQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hNYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BCQSwrQ0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxFQUFjO0FBQzNDLG1CQUFtQixtQkFBTyxDQUFDLEVBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGtCQUFrQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVksRUFBRSxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOzs7Ozs7Ozs7QUNwVUEsK0NBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsRUFBVztBQUNuQyxjQUFjLG1CQUFPLENBQUMsQ0FBUTtBQUM5QixjQUFjLG1CQUFPLENBQUMsQ0FBTztBQUM3QixrQkFBa0IsbUJBQU8sQ0FBQyxFQUFXO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLEVBQVc7QUFDckMsbUJBQW1CLG1CQUFPLENBQUMsQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtCQUFrQjtBQUM1RCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxTQUFTO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUlBQXFJO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMERBQTBEO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVSxnQkFBZ0IsNEJBQTRCO0FBQ2pHLHNDQUFzQyxnQkFBZ0I7QUFDdEQsbUVBQW1FLG1DQUFtQztBQUN0RyxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkNBQTJDLFVBQVUsZ0JBQWdCLDRCQUE0QjtBQUNqRztBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9EQUFvRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUNBQXVDO0FBQ3JFO0FBQ0EsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBOzs7Ozs7Ozs7QUNuU2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixNQUFNO0FBQzlCO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx5QkFBeUIsSUFBSSxJQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsUUFBUSxzRUFBc0UsRUFBRTtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixFQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQkFBMkIsRUFBRSxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0NBQWdDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQ0FBZ0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCLGtCQUFrQjtBQUMxRDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JnQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLENBQVc7QUFDckMsZ0JBQWdCLG1CQUFPLENBQUMsQ0FBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pFYTtBQUNiLGNBQWMsbUJBQU8sQ0FBQyxFQUFPO0FBQzdCOzs7Ozs7OztBQ0ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFlO0FBQ3ZDLGdCQUFnQixtQkFBTyxDQUFDLENBQXFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLEVBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLG1DQUFtQztBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxxQkFBcUIsbUJBQW1CO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDJCQUEyQixnQkFBZ0IsdUJBQXVCO0FBQ2xILGlDQUFpQyw2QkFBNkIsU0FBUyxpQ0FBaUM7QUFDeEc7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELG9DQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hLYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLENBQVM7QUFDakM7QUFDQTtBQUNBLFlBQVksWUFBWSxzQkFBc0IsRUFBRTtBQUNoRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsa0ZBQWtGO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQSw4Q0FBYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxFQUFlOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLENBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLG9CQUFvQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3pGYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQixpQkFBaUIsRUFBRSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdURBQXVEOzs7Ozs7OztBQ3ZKM0M7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0hhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLENBQVk7QUFDdkMsa0JBQWtCLG1CQUFPLENBQUMsRUFBVztBQUNyQyxlQUFlLG1CQUFPLENBQUMsQ0FBUTtBQUMvQixnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjLFdBQVc7QUFDekI7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUJBQW1CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL1RBLCtDQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLENBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0MsRUFBRTtBQUMxRCxtQkFBbUIsMkJBQTJCLEVBQUU7QUFDaEQsZUFBZSw2QkFBNkIsRUFBRTtBQUM5Qyw0QkFBNEIsK0NBQStDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCLEVBQUU7QUFDbkQsbUJBQW1CLG9CQUFvQixFQUFFO0FBQ3pDLGVBQWUsbURBQW1ELEVBQUU7QUFDcEUsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUZBQXFGLEVBQUU7QUFDL0csNEJBQTRCLCtDQUErQyxFQUFFO0FBQzdFO0FBQ0EsbUJBQW1CLFdBQVcsRUFBRTtBQUNoQyxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM5RGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQSxtRUFBbUUsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsV0FBVztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSyxJQUFJLGFBQWE7QUFDOUU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuUGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxjQUFjLG1CQUFPLENBQUMsQ0FBTztBQUM3QixpQkFBaUIsbUJBQU8sQ0FBQyxDQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyxFQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0Q7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0EsNkJBQTZCLG9DQUFvQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSyxHQUFHLEtBQUs7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSx1QkFBTztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsTEEsdURBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxDQUFZO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsRUFBTTtBQUM3QjtBQUNBO0FBQ0EsOERBQThELEdBQUc7QUFDakU7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLEVBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxxQkFBcUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0EscUNBQXFDLGdCQUFnQix3REFBd0QsR0FBRyxFQUFFO0FBQ2xIO0FBQ0Esc0NBQXNDLGdCQUFnQix3QkFBd0IsR0FBRyxFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQXdEO0FBQ3BGO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyw4QkFBOEI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0EsNEI7Ozs7Ozs7QUNSYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMsRUFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0ZBQXdGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEZBQThGO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3RkFBd0Y7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrRkFBa0Y7QUFDbkY7Ozs7Ozs7O0FDNUJhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLEVBQXdCOzs7Ozs7OztBQ1poQztBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyxFQUFjO0FBQ25DLGFBQWEsbUJBQU8sQ0FBQyxFQUFpQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsQ0FBVztBQUNoQyxhQUFhLG1CQUFPLENBQUMsRUFBYzs7Ozs7Ozs7QUNmbkMsK0NBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLENBQVc7QUFDckMsbURBQW1ELHFDQUFxQyxrQ0FBa0MsRUFBRSxFQUFFO0FBQzlILGdCQUFnQixtQkFBTyxDQUFDLEVBQVM7QUFDakMscUJBQXFCLG1CQUFPLENBQUMsRUFBYztBQUMzQyxnQkFBZ0IsbUJBQU8sQ0FBQyxDQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixFQUFFO0FBQ2hDLDJCQUEyQixFQUFFO0FBQzdCLHlDQUF5QyxlQUFlLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlJQUFpSSxpQkFBaUI7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELEdBQUc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxHQUFHO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxHQUFHO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsVUFBVSw4QkFBOEIsY0FBYztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsVUFBVSxlQUFlLHVCQUF1QixrQkFBa0IsWUFBWTtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLEdBQUc7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsR0FBRyxjQUFjLGNBQWM7QUFDcEY7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTyxhQUFhLEdBQUc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU8sVUFBVSxHQUFHO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFtRCxHQUFHLFVBQVU7QUFDL0UsZUFBZSxvQkFBb0I7QUFDbkMsMEJBQTBCLGVBQWUsa0JBQWtCLHlCQUF5QjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEMsWUFBWTtBQUNaLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2plYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLGVBQWUsc0NBQXNDLGdCQUFnQixxQ0FBcUM7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9GQSwrQ0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoid2ViLmJ1bmRsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idW5kbGVkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuIiwiLypnbG9iYWwgd2luZG93LCBnbG9iYWwqL1xudmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKVxudmFyIGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIilcbmZ1bmN0aW9uIG5vdygpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIH1cblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG52YXIgY29uc29sZVxudmFyIHRpbWVzID0ge31cblxuaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNvbnNvbGUpIHtcbiAgICBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGVcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY29uc29sZSkge1xuICAgIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZVxufSBlbHNlIHtcbiAgICBjb25zb2xlID0ge31cbn1cblxudmFyIGZ1bmN0aW9ucyA9IFtcbiAgICBbbG9nLCBcImxvZ1wiXSxcbiAgICBbaW5mbywgXCJpbmZvXCJdLFxuICAgIFt3YXJuLCBcIndhcm5cIl0sXG4gICAgW2Vycm9yLCBcImVycm9yXCJdLFxuICAgIFt0aW1lLCBcInRpbWVcIl0sXG4gICAgW3RpbWVFbmQsIFwidGltZUVuZFwiXSxcbiAgICBbdHJhY2UsIFwidHJhY2VcIl0sXG4gICAgW2RpciwgXCJkaXJcIl0sXG4gICAgW2NvbnNvbGVBc3NlcnQsIFwiYXNzZXJ0XCJdXG5dXG5cbmZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHR1cGxlID0gZnVuY3Rpb25zW2ldXG4gICAgdmFyIGYgPSB0dXBsZVswXVxuICAgIHZhciBuYW1lID0gdHVwbGVbMV1cblxuICAgIGlmICghY29uc29sZVtuYW1lXSkge1xuICAgICAgICBjb25zb2xlW25hbWVdID0gZlxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zb2xlXG5cbmZ1bmN0aW9uIGxvZygpIHt9XG5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKVxufVxuXG5mdW5jdGlvbiB3YXJuKCkge1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cylcbn1cblxuZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cylcbn1cblxuZnVuY3Rpb24gdGltZShsYWJlbCkge1xuICAgIHRpbWVzW2xhYmVsXSA9IG5vdygpXG59XG5cbmZ1bmN0aW9uIHRpbWVFbmQobGFiZWwpIHtcbiAgICB2YXIgdGltZSA9IHRpbWVzW2xhYmVsXVxuICAgIGlmICghdGltZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsOiBcIiArIGxhYmVsKVxuICAgIH1cblxuICAgIGRlbGV0ZSB0aW1lc1tsYWJlbF1cbiAgICB2YXIgZHVyYXRpb24gPSBub3coKSAtIHRpbWVcbiAgICBjb25zb2xlLmxvZyhsYWJlbCArIFwiOiBcIiArIGR1cmF0aW9uICsgXCJtc1wiKVxufVxuXG5mdW5jdGlvbiB0cmFjZSgpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKClcbiAgICBlcnIubmFtZSA9IFwiVHJhY2VcIlxuICAgIGVyci5tZXNzYWdlID0gdXRpbC5mb3JtYXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKVxufVxuXG5mdW5jdGlvbiBkaXIob2JqZWN0KSB7XG4gICAgY29uc29sZS5sb2codXRpbC5pbnNwZWN0KG9iamVjdCkgKyBcIlxcblwiKVxufVxuXG5mdW5jdGlvbiBjb25zb2xlQXNzZXJ0KGV4cHJlc3Npb24pIHtcbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFyIGFyciA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICAgICBhc3NlcnQub2soZmFsc2UsIHV0aWwuZm9ybWF0LmFwcGx5KG51bGwsIGFycikpXG4gICAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8hIF92c0VkaXRvckNvbmZpZ1xuLy8gbGFuZ3VhZ2Vcbi8vISBfZ2xvYmFsX1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0xpdHRsZUVuZGlhbiA9IGV4cG9ydHMuT1MgPSBleHBvcnRzLnNldEltbWVkaWF0ZSA9IGV4cG9ydHMudHJhbnNsYXRpb25zQ29uZmlnRmlsZSA9IGV4cG9ydHMubG9jYWxlID0gZXhwb3J0cy5MYW5ndWFnZSA9IGV4cG9ydHMubGFuZ3VhZ2UgPSBleHBvcnRzLmlzUm9vdFVzZXIgPSBleHBvcnRzLnVzZXJBZ2VudCA9IGV4cG9ydHMucGxhdGZvcm0gPSBleHBvcnRzLmlzSU9TID0gZXhwb3J0cy5pc1dlYiA9IGV4cG9ydHMuaXNOYXRpdmUgPSBleHBvcnRzLmlzTGludXhTbmFwID0gZXhwb3J0cy5pc0xpbnV4ID0gZXhwb3J0cy5pc01hY2ludG9zaCA9IGV4cG9ydHMuaXNXaW5kb3dzID0gZXhwb3J0cy5QbGF0Zm9ybVRvU3RyaW5nID0gZXhwb3J0cy5pc1ByZWZlcnJpbmdCcm93c2VyQ29kZUxvYWQgPSBleHBvcnRzLmJyb3dzZXJDb2RlTG9hZGluZ0NhY2hlU3RyYXRlZ3kgPSBleHBvcnRzLmlzRWxlY3Ryb25TYW5kYm94ZWQgPSBleHBvcnRzLmdsb2JhbHMgPSBleHBvcnRzLl9nbG9iYWxfID0gdm9pZCAwO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5jb25zdCBMQU5HVUFHRV9ERUZBVUxUID0gJ2VuJztcbi8vIEB0cy1pZ25vcmVcbmV4cG9ydHMuX2dsb2JhbF8gPSAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOlxuICAgICAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDpcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDpcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgKChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IHt9KSk7XG5jb25zdCBfdnNFZGl0b3JDb25maWcgPSAoZXhwb3J0cy5fZ2xvYmFsXy52c0VkaXRvckNvbmZpZyA9IGV4cG9ydHMuX2dsb2JhbF8udnNFZGl0b3JDb25maWcgfHwge30pO1xubGV0IF9pc1dpbmRvd3MgPSBmYWxzZTtcbmxldCBfaXNNYWNpbnRvc2ggPSBmYWxzZTtcbmxldCBfaXNMaW51eCA9IGZhbHNlO1xubGV0IF9pc0xpbnV4U25hcCA9IGZhbHNlO1xubGV0IF9pc05hdGl2ZSA9IGZhbHNlO1xubGV0IF9pc1dlYiA9IGZhbHNlO1xubGV0IF9pc0lPUyA9IGZhbHNlO1xubGV0IF9sb2NhbGUgPSB1bmRlZmluZWQ7XG5sZXQgX2xhbmd1YWdlID0gTEFOR1VBR0VfREVGQVVMVDtcbmxldCBfdHJhbnNsYXRpb25zQ29uZmlnRmlsZSA9IHVuZGVmaW5lZDtcbmxldCBfdXNlckFnZW50ID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5nbG9iYWxzID0gKHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyA/IGdsb2JhbCA6IHt9KTtcbmxldCBub2RlUHJvY2VzcyA9IHVuZGVmaW5lZDtcbmlmICh0eXBlb2YgZXhwb3J0cy5nbG9iYWxzLnZzY29kZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMuZ2xvYmFscy52c2NvZGUucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBOYXRpdmUgZW52aXJvbm1lbnQgKHNhbmRib3hlZClcbiAgICBub2RlUHJvY2VzcyA9IGV4cG9ydHMuZ2xvYmFscy52c2NvZGUucHJvY2Vzcztcbn1cbmVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE5hdGl2ZSBlbnZpcm9ubWVudCAobm9uLXNhbmRib3hlZClcbiAgICBub2RlUHJvY2VzcyA9IHByb2Nlc3M7XG59XG5jb25zdCBpc0VsZWN0cm9uUmVuZGVyZXIgPSAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKTtcbmV4cG9ydHMuaXNFbGVjdHJvblNhbmRib3hlZCA9IGlzRWxlY3Ryb25SZW5kZXJlciAmJiAobm9kZVByb2Nlc3MgPT09IG51bGwgfHwgbm9kZVByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVQcm9jZXNzLnNhbmRib3hlZCk7XG5leHBvcnRzLmJyb3dzZXJDb2RlTG9hZGluZ0NhY2hlU3RyYXRlZ3kgPSAoKCkgPT4ge1xuICAgIC8vIEFsd2F5cyBlbmFibGVkIHdoZW4gc2FuZGJveCBpcyBlbmFibGVkXG4gICAgaWYgKGV4cG9ydHMuaXNFbGVjdHJvblNhbmRib3hlZCkge1xuICAgICAgICByZXR1cm4gJ2J5cGFzc0hlYXRDaGVjayc7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgb25seSBlbmFibGVkIGNvbmRpdGlvbmFsbHlcbiAgICBjb25zdCBlbnYgPSBub2RlUHJvY2VzcyA9PT0gbnVsbCB8fCBub2RlUHJvY2VzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZVByb2Nlc3MuZW52WydWU0NPREVfQlJPV1NFUl9DT0RFX0xPQURJTkcnXTtcbiAgICBpZiAodHlwZW9mIGVudiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGVudiA9PT0gJ25vbmUnIHx8IGVudiA9PT0gJ2NvZGUnIHx8IGVudiA9PT0gJ2J5cGFzc0hlYXRDaGVjaycgfHwgZW52ID09PSAnYnlwYXNzSGVhdENoZWNrQW5kRWFnZXJDb21waWxlJykge1xuICAgICAgICAgICAgcmV0dXJuIGVudjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2J5cGFzc0hlYXRDaGVjayc7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59KSgpO1xuZXhwb3J0cy5pc1ByZWZlcnJpbmdCcm93c2VyQ29kZUxvYWQgPSB0eXBlb2YgZXhwb3J0cy5icm93c2VyQ29kZUxvYWRpbmdDYWNoZVN0cmF0ZWd5ID09PSAnc3RyaW5nJztcbi8vIE9TIGRldGVjdGlvblxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAnb2JqZWN0Jykge1xuICAgIF91c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIF9pc1dpbmRvd3MgPSBfdXNlckFnZW50LmluZGV4T2YoJ1dpbmRvd3MnKSA+PSAwO1xuICAgIF9pc01hY2ludG9zaCA9IF91c2VyQWdlbnQuaW5kZXhPZignTWFjaW50b3NoJykgPj0gMDtcbiAgICBfaXNJT1MgPSAoX3VzZXJBZ2VudC5pbmRleE9mKCdNYWNpbnRvc2gnKSA+PSAwIHx8IF91c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID49IDAgfHwgX3VzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+PSAwKSAmJiAhIW5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwO1xuICAgIF9pc0xpbnV4ID0gX3VzZXJBZ2VudC5pbmRleE9mKCdMaW51eCcpID49IDA7XG4gICAgX2lzV2ViID0gdHJ1ZTtcbiAgICBfbG9jYWxlID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xuICAgIF9sYW5ndWFnZSA9IF9sb2NhbGU7XG59XG5lbHNlIGlmICh0eXBlb2Ygbm9kZVByb2Nlc3MgPT09ICdvYmplY3QnKSB7XG4gICAgX2lzV2luZG93cyA9IChub2RlUHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyk7XG4gICAgX2lzTWFjaW50b3NoID0gKG5vZGVQcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJyk7XG4gICAgX2lzTGludXggPSAobm9kZVByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcpO1xuICAgIF9pc0xpbnV4U25hcCA9IF9pc0xpbnV4ICYmICEhbm9kZVByb2Nlc3MuZW52WydTTkFQJ10gJiYgISFub2RlUHJvY2Vzcy5lbnZbJ1NOQVBfUkVWSVNJT04nXTtcbiAgICBfbG9jYWxlID0gTEFOR1VBR0VfREVGQVVMVDtcbiAgICBfbGFuZ3VhZ2UgPSBMQU5HVUFHRV9ERUZBVUxUO1xuICAgIGNvbnN0IHJhd05sc0NvbmZpZyA9IG5vZGVQcm9jZXNzLmVudlsnVlNDT0RFX05MU19DT05GSUcnXTtcbiAgICBpZiAocmF3TmxzQ29uZmlnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBubHNDb25maWcgPSBKU09OLnBhcnNlKHJhd05sc0NvbmZpZyk7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5sc0NvbmZpZy5hdmFpbGFibGVMYW5ndWFnZXNbJyonXTtcbiAgICAgICAgICAgIF9sb2NhbGUgPSBubHNDb25maWcubG9jYWxlO1xuICAgICAgICAgICAgLy8gVlNDb2RlJ3MgZGVmYXVsdCBsYW5ndWFnZSBpcyAnZW4nXG4gICAgICAgICAgICBfbGFuZ3VhZ2UgPSByZXNvbHZlZCA/IHJlc29sdmVkIDogTEFOR1VBR0VfREVGQVVMVDtcbiAgICAgICAgICAgIF90cmFuc2xhdGlvbnNDb25maWdGaWxlID0gbmxzQ29uZmlnLl90cmFuc2xhdGlvbnNDb25maWdGaWxlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKF92c0VkaXRvckNvbmZpZy5sYW5ndWFnZSkge1xuICAgICAgICBfbG9jYWxlID0gX3ZzRWRpdG9yQ29uZmlnLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIF9sYW5ndWFnZSA9IF92c0VkaXRvckNvbmZpZy5sYW5ndWFnZSA9PT0gJ2VuLVVTJyA/IExBTkdVQUdFX0RFRkFVTFQgOiBfdnNFZGl0b3JDb25maWcubGFuZ3VhZ2U7XG4gICAgfVxuICAgIF9pc05hdGl2ZSA9IHRydWU7XG59XG5mdW5jdGlvbiBQbGF0Zm9ybVRvU3RyaW5nKHBsYXRmb3JtKSB7XG4gICAgc3dpdGNoIChwbGF0Zm9ybSkge1xuICAgICAgICBjYXNlIDAgLyogV2ViICovOiByZXR1cm4gJ1dlYic7XG4gICAgICAgIGNhc2UgMSAvKiBNYWMgKi86IHJldHVybiAnTWFjJztcbiAgICAgICAgY2FzZSAyIC8qIExpbnV4ICovOiByZXR1cm4gJ0xpbnV4JztcbiAgICAgICAgY2FzZSAzIC8qIFdpbmRvd3MgKi86IHJldHVybiAnV2luZG93cyc7XG4gICAgfVxufVxuZXhwb3J0cy5QbGF0Zm9ybVRvU3RyaW5nID0gUGxhdGZvcm1Ub1N0cmluZztcbmxldCBfcGxhdGZvcm0gPSAwIC8qIFdlYiAqLztcbmlmIChfaXNNYWNpbnRvc2gpIHtcbiAgICBfcGxhdGZvcm0gPSAxIC8qIE1hYyAqLztcbn1cbmVsc2UgaWYgKF9pc1dpbmRvd3MpIHtcbiAgICBfcGxhdGZvcm0gPSAzIC8qIFdpbmRvd3MgKi87XG59XG5lbHNlIGlmIChfaXNMaW51eCkge1xuICAgIF9wbGF0Zm9ybSA9IDIgLyogTGludXggKi87XG59XG5leHBvcnRzLmlzV2luZG93cyA9IF9pc1dpbmRvd3M7XG5leHBvcnRzLmlzTWFjaW50b3NoID0gX2lzTWFjaW50b3NoO1xuZXhwb3J0cy5pc0xpbnV4ID0gX2lzTGludXg7XG5leHBvcnRzLmlzTGludXhTbmFwID0gX2lzTGludXhTbmFwO1xuZXhwb3J0cy5pc05hdGl2ZSA9IF9pc05hdGl2ZTtcbmV4cG9ydHMuaXNXZWIgPSBfaXNXZWI7XG5leHBvcnRzLmlzSU9TID0gX2lzSU9TO1xuZXhwb3J0cy5wbGF0Zm9ybSA9IF9wbGF0Zm9ybTtcbmV4cG9ydHMudXNlckFnZW50ID0gX3VzZXJBZ2VudDtcbmZ1bmN0aW9uIGlzUm9vdFVzZXIoKSB7XG4gICAgdmFyIF9hO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gX2lzTmF0aXZlICYmICFfaXNXaW5kb3dzICYmICgoKF9hID0gcHJvY2Vzcy5nZXR1aWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHByb2Nlc3MpKSA9PT0gMCk7XG59XG5leHBvcnRzLmlzUm9vdFVzZXIgPSBpc1Jvb3RVc2VyO1xuLyoqXG4gKiBUaGUgbGFuZ3VhZ2UgdXNlZCBmb3IgdGhlIHVzZXIgaW50ZXJmYWNlLiBUaGUgZm9ybWF0IG9mXG4gKiB0aGUgc3RyaW5nIGlzIGFsbCBsb3dlciBjYXNlIChlLmcuIHpoLXR3IGZvciBUcmFkaXRpb25hbFxuICogQ2hpbmVzZSlcbiAqL1xuZXhwb3J0cy5sYW5ndWFnZSA9IF9sYW5ndWFnZTtcbnZhciBMYW5ndWFnZTtcbihmdW5jdGlvbiAoTGFuZ3VhZ2UpIHtcbiAgICBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMubGFuZ3VhZ2U7XG4gICAgfVxuICAgIExhbmd1YWdlLnZhbHVlID0gdmFsdWU7XG4gICAgZnVuY3Rpb24gaXNEZWZhdWx0VmFyaWFudCgpIHtcbiAgICAgICAgaWYgKGV4cG9ydHMubGFuZ3VhZ2UubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5sYW5ndWFnZSA9PT0gJ2VuJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChleHBvcnRzLmxhbmd1YWdlLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5sYW5ndWFnZVswXSA9PT0gJ2UnICYmIGV4cG9ydHMubGFuZ3VhZ2VbMV0gPT09ICduJyAmJiBleHBvcnRzLmxhbmd1YWdlWzJdID09PSAnLSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgTGFuZ3VhZ2UuaXNEZWZhdWx0VmFyaWFudCA9IGlzRGVmYXVsdFZhcmlhbnQ7XG4gICAgZnVuY3Rpb24gaXNEZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5sYW5ndWFnZSA9PT0gJ2VuJztcbiAgICB9XG4gICAgTGFuZ3VhZ2UuaXNEZWZhdWx0ID0gaXNEZWZhdWx0O1xufSkoTGFuZ3VhZ2UgPSBleHBvcnRzLkxhbmd1YWdlIHx8IChleHBvcnRzLkxhbmd1YWdlID0ge30pKTtcbi8qKlxuICogVGhlIE9TIGxvY2FsZSBvciB0aGUgbG9jYWxlIHNwZWNpZmllZCBieSAtLWxvY2FsZS4gVGhlIGZvcm1hdCBvZlxuICogdGhlIHN0cmluZyBpcyBhbGwgbG93ZXIgY2FzZSAoZS5nLiB6aC10dyBmb3IgVHJhZGl0aW9uYWxcbiAqIENoaW5lc2UpLiBUaGUgVUkgaXMgbm90IG5lY2Vzc2FyaWx5IHNob3duIGluIHRoZSBwcm92aWRlZCBsb2NhbGUuXG4gKi9cbmV4cG9ydHMubG9jYWxlID0gX2xvY2FsZTtcbi8qKlxuICogVGhlIHRyYW5zbGF0aW9zIHRoYXQgYXJlIGF2YWlsYWJsZSB0aHJvdWdoIGxhbmd1YWdlIHBhY2tzLlxuICovXG5leHBvcnRzLnRyYW5zbGF0aW9uc0NvbmZpZ0ZpbGUgPSBfdHJhbnNsYXRpb25zQ29uZmlnRmlsZTtcbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKGZ1bmN0aW9uIGRlZmluZVNldEltbWVkaWF0ZSgpIHtcbiAgICBpZiAoZXhwb3J0cy5nbG9iYWxzLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5nbG9iYWxzLnNldEltbWVkaWF0ZS5iaW5kKGV4cG9ydHMuZ2xvYmFscyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5nbG9iYWxzLnBvc3RNZXNzYWdlID09PSAnZnVuY3Rpb24nICYmICFleHBvcnRzLmdsb2JhbHMuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICBsZXQgcGVuZGluZyA9IFtdO1xuICAgICAgICBleHBvcnRzLmdsb2JhbHMuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS52c2NvZGVTZXRJbW1lZGlhdGVJZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwZW5kaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHBlbmRpbmdbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGUuaWQgPT09IGUuZGF0YS52c2NvZGVTZXRJbW1lZGlhdGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUuY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBsYXN0SWQgPSAwO1xuICAgICAgICByZXR1cm4gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBteUlkID0gKytsYXN0SWQ7XG4gICAgICAgICAgICBwZW5kaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBteUlkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBleHBvcnRzLmdsb2JhbHMucG9zdE1lc3NhZ2UoeyB2c2NvZGVTZXRJbW1lZGlhdGVJZDogbXlJZCB9LCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIChub2RlUHJvY2VzcyA9PT0gbnVsbCB8fCBub2RlUHJvY2VzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZVByb2Nlc3MubmV4dFRpY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBub2RlUHJvY2Vzcy5uZXh0VGljay5iaW5kKG5vZGVQcm9jZXNzKTtcbiAgICB9XG4gICAgY29uc3QgX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICByZXR1cm4gKGNhbGxiYWNrKSA9PiBfcHJvbWlzZS50aGVuKGNhbGxiYWNrKTtcbn0pKCk7XG5leHBvcnRzLk9TID0gKF9pc01hY2ludG9zaCB8fCBfaXNJT1MgPyAyIC8qIE1hY2ludG9zaCAqLyA6IChfaXNXaW5kb3dzID8gMSAvKiBXaW5kb3dzICovIDogMyAvKiBMaW51eCAqLykpO1xubGV0IF9pc0xpdHRsZUVuZGlhbiA9IHRydWU7XG5sZXQgX2lzTGl0dGxlRW5kaWFuQ29tcHV0ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGlzTGl0dGxlRW5kaWFuKCkge1xuICAgIGlmICghX2lzTGl0dGxlRW5kaWFuQ29tcHV0ZWQpIHtcbiAgICAgICAgX2lzTGl0dGxlRW5kaWFuQ29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCB0ZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMik7XG4gICAgICAgIHRlc3RbMF0gPSAxO1xuICAgICAgICB0ZXN0WzFdID0gMjtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBVaW50MTZBcnJheSh0ZXN0LmJ1ZmZlcik7XG4gICAgICAgIF9pc0xpdHRsZUVuZGlhbiA9ICh2aWV3WzBdID09PSAoMiA8PCA4KSArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gX2lzTGl0dGxlRW5kaWFuO1xufVxuZXhwb3J0cy5pc0xpdHRsZUVuZGlhbiA9IGlzTGl0dGxlRW5kaWFuO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZmluZVNlcnZpY2VEZWNvcmF0b3IgPSBleHBvcnRzLlN5bmNEZXNjcmlwdG9yID0gZXhwb3J0cy5TxJAgPSBleHBvcnRzLm9wdGlvbmFsID0gZXhwb3J0cy5jcmVhdGVEZWNvcmF0b3IgPSBleHBvcnRzLkPEkCA9IGV4cG9ydHMuX3V0aWwgPSB2b2lkIDA7XG52YXIgX3V0aWw7XG4oZnVuY3Rpb24gKF91dGlsKSB7XG4gICAgX3V0aWwuc2VydmljZUlkcyA9IG5ldyBNYXAoKTtcbiAgICBfdXRpbC5ESV9UQVJHRVQgPSAnxJBfdGFyZ2V0JztcbiAgICBfdXRpbC5ESV9ERVBFTkRFTkNJRVMgPSAnxJBfZGVwZW5kZW5jaWVzJztcbiAgICBmdW5jdGlvbiBnZXRTZXJ2aWNlRGVwZW5kZW5jaWVzKGN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGN0b3JbX3V0aWwuRElfREVQRU5ERU5DSUVTXSB8fCBbXTtcbiAgICB9XG4gICAgX3V0aWwuZ2V0U2VydmljZURlcGVuZGVuY2llcyA9IGdldFNlcnZpY2VEZXBlbmRlbmNpZXM7XG59KShfdXRpbCA9IGV4cG9ydHMuX3V0aWwgfHwgKGV4cG9ydHMuX3V0aWwgPSB7fSkpO1xuZnVuY3Rpb24gc3RvcmVTZXJ2aWNlRGVwZW5kZW5jeShpZCwgdGFyZ2V0LCBpbmRleCwgb3B0aW9uYWwpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXRbX3V0aWwuRElfVEFSR0VUXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldFtfdXRpbC5ESV9ERVBFTkRFTkNJRVNdLnB1c2goeyBpZCwgaW5kZXgsIG9wdGlvbmFsIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W191dGlsLkRJX0RFUEVOREVOQ0lFU10gPSBbeyBpZCwgaW5kZXgsIG9wdGlvbmFsIH1dO1xuICAgICAgICB0YXJnZXRbX3V0aWwuRElfVEFSR0VUXSA9IHRhcmdldDtcbiAgICB9XG59XG5leHBvcnRzLkPEkCA9IGNyZWF0ZURlY29yYXRvcjtcbmZ1bmN0aW9uIGNyZWF0ZURlY29yYXRvcihzZXJ2aWNlSWQpIHtcbiAgICBpZiAoX3V0aWwuc2VydmljZUlkcy5oYXMoc2VydmljZUlkKSkge1xuICAgICAgICByZXR1cm4gX3V0aWwuc2VydmljZUlkcy5nZXQoc2VydmljZUlkKTtcbiAgICB9XG4gICAgY29uc3QgaWQgPSBmdW5jdGlvbiAodGFyZ2V0LCBfa2V5LCBpbmRleCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdAxJAtSVNlcnZpY2VOYW1lIGNhbiBvbmx5IGJlIHVzZWQgdG8gZGVjb3JhdGUgYSBwYXJhbWV0ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBzdG9yZVNlcnZpY2VEZXBlbmRlbmN5KGlkLCB0YXJnZXQsIGluZGV4LCBmYWxzZSk7XG4gICAgfTtcbiAgICBpZC50b1N0cmluZyA9ICgpID0+IHNlcnZpY2VJZDtcbiAgICBfdXRpbC5zZXJ2aWNlSWRzLnNldChzZXJ2aWNlSWQsIGlkKTtcbiAgICByZXR1cm4gaWQ7XG59XG5leHBvcnRzLmNyZWF0ZURlY29yYXRvciA9IGNyZWF0ZURlY29yYXRvcjtcbmZ1bmN0aW9uIG9wdGlvbmFsKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIF9rZXksIGluZGV4KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0BvcHRpb25hbC1kZWNvcmF0b3IgY2FuIG9ubHkgYmUgdXNlZCB0byBkZWNvcmF0ZSBhIHBhcmFtZXRlcicpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3JlU2VydmljZURlcGVuZGVuY3koc2VydmljZUlkZW50aWZpZXIsIHRhcmdldCwgaW5kZXgsIHRydWUpO1xuICAgIH07XG59XG5leHBvcnRzLm9wdGlvbmFsID0gb3B0aW9uYWw7XG5jb25zdCBTxJAgPSAoY3Rvciwgc3RhdGljQXJndW1lbnRzID0gW10sIHN1cHBvcnRzRGVsYXllZEluc3RhbnRpYXRpb24gPSBmYWxzZSkgPT4gbmV3IFN5bmNEZXNjcmlwdG9yKGN0b3IsIHN0YXRpY0FyZ3VtZW50cywgc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbik7XG5leHBvcnRzLlPEkCA9IFPEkDtcbmNsYXNzIFN5bmNEZXNjcmlwdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihjdG9yLCBzdGF0aWNBcmd1bWVudHMgPSBbXSwgc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuY3RvciA9IGN0b3I7XG4gICAgICAgIHRoaXMuc3RhdGljQXJndW1lbnRzID0gc3RhdGljQXJndW1lbnRzO1xuICAgICAgICB0aGlzLnN1cHBvcnRzRGVsYXllZEluc3RhbnRpYXRpb24gPSBzdXBwb3J0c0RlbGF5ZWRJbnN0YW50aWF0aW9uO1xuICAgIH1cbn1cbmV4cG9ydHMuU3luY0Rlc2NyaXB0b3IgPSBTeW5jRGVzY3JpcHRvcjtcbmZ1bmN0aW9uIHJlZmluZVNlcnZpY2VEZWNvcmF0b3Ioc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gc2VydmljZUlkZW50aWZpZXI7XG59XG5leHBvcnRzLnJlZmluZVNlcnZpY2VEZWNvcmF0b3IgPSByZWZpbmVTZXJ2aWNlRGVjb3JhdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHJvbWlzZXMgPSBleHBvcnRzLkRlZmVycmVkUHJvbWlzZSA9IGV4cG9ydHMuSW50ZXJ2YWxDb3VudGVyID0gZXhwb3J0cy5UYXNrU2VxdWVudGlhbGl6ZXIgPSBleHBvcnRzLnJldHJ5ID0gZXhwb3J0cy5JZGxlVmFsdWUgPSBleHBvcnRzLnJ1bldoZW5JZGxlID0gZXhwb3J0cy5UaHJvdHRsZWRXb3JrZXIgPSBleHBvcnRzLlJ1bk9uY2VXb3JrZXIgPSBleHBvcnRzLlJ1bk9uY2VTY2hlZHVsZXIgPSBleHBvcnRzLkludGVydmFsVGltZXIgPSBleHBvcnRzLlRpbWVvdXRUaW1lciA9IGV4cG9ydHMuUmVzb3VyY2VRdWV1ZSA9IGV4cG9ydHMuUXVldWUgPSBleHBvcnRzLkxpbWl0ZXIgPSBleHBvcnRzLmZpcnN0UGFyYWxsZWwgPSBleHBvcnRzLmZpcnN0ID0gZXhwb3J0cy5zZXF1ZW5jZSA9IGV4cG9ydHMuZGlzcG9zYWJsZVRpbWVvdXQgPSBleHBvcnRzLnRpbWVvdXQgPSBleHBvcnRzLkF1dG9PcGVuQmFycmllciA9IGV4cG9ydHMuQmFycmllciA9IGV4cG9ydHMuVGhyb3R0bGVkRGVsYXllciA9IGV4cG9ydHMuRGVsYXllciA9IGV4cG9ydHMuU2VxdWVuY2VyQnlLZXkgPSBleHBvcnRzLlNlcXVlbmNlciA9IGV4cG9ydHMuVGhyb3R0bGVyID0gZXhwb3J0cy5hc1Byb21pc2UgPSBleHBvcnRzLnJhY2VUaW1lb3V0ID0gZXhwb3J0cy5yYWNlQ2FuY2VsbGFibGVQcm9taXNlcyA9IGV4cG9ydHMucmFjZUNhbmNlbGxhdGlvbiA9IGV4cG9ydHMuY3JlYXRlQ2FuY2VsYWJsZVByb21pc2UgPSBleHBvcnRzLmlzVGhlbmFibGUgPSB2b2lkIDA7XG5jb25zdCBjYW5jZWxsYXRpb25fMSA9IHJlcXVpcmUoXCIuL2NhbmNlbGxhdGlvblwiKTtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuY29uc3QgZXZlbnRfMSA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpO1xuY29uc3QgbGlmZWN5Y2xlXzEgPSByZXF1aXJlKFwiLi9saWZlY3ljbGVcIik7XG5jb25zdCByZXNvdXJjZXNfMSA9IHJlcXVpcmUoXCIuL3Jlc291cmNlc1wiKTtcbmZ1bmN0aW9uIGlzVGhlbmFibGUob2JqKSB7XG4gICAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNUaGVuYWJsZSA9IGlzVGhlbmFibGU7XG5mdW5jdGlvbiBjcmVhdGVDYW5jZWxhYmxlUHJvbWlzZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBjYW5jZWxsYXRpb25fMS5DYW5jZWxsYXRpb25Ub2tlblNvdXJjZSgpO1xuICAgIGNvbnN0IHRoZW5hYmxlID0gY2FsbGJhY2soc291cmNlLnRva2VuKTtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzb3VyY2UudG9rZW4ub25DYW5jZWxsYXRpb25SZXF1ZXN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHNvdXJjZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZWplY3QoKDAsIGVycm9yc18xLmNhbmNlbGVkKSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh0aGVuYWJsZSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgc291cmNlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHNvdXJjZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBjbGFzcyB7XG4gICAgICAgIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIHNvdXJjZS5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGVuKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKHJlamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseShvbmZpbmFsbHkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLmZpbmFsbHkob25maW5hbGx5KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZUNhbmNlbGFibGVQcm9taXNlID0gY3JlYXRlQ2FuY2VsYWJsZVByb21pc2U7XG5mdW5jdGlvbiByYWNlQ2FuY2VsbGF0aW9uKHByb21pc2UsIHRva2VuLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtwcm9taXNlLCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRva2VuLm9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKCgpID0+IHJlc29sdmUoZGVmYXVsdFZhbHVlKSkpXSk7XG59XG5leHBvcnRzLnJhY2VDYW5jZWxsYXRpb24gPSByYWNlQ2FuY2VsbGF0aW9uO1xuLyoqXG4gKiBSZXR1cm5zIGFzIHNvb24gYXMgb25lIG9mIHRoZSBwcm9taXNlcyBpcyByZXNvbHZlZCBhbmQgY2FuY2VscyByZW1haW5pbmcgcHJvbWlzZXNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmFjZUNhbmNlbGxhYmxlUHJvbWlzZXMoY2FuY2VsbGFibGVQcm9taXNlcykge1xuICAgIGxldCByZXNvbHZlZFByb21pc2VJbmRleCA9IC0xO1xuICAgIGNvbnN0IHByb21pc2VzID0gY2FuY2VsbGFibGVQcm9taXNlcy5tYXAoKHByb21pc2UsIGluZGV4KSA9PiBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IHsgcmVzb2x2ZWRQcm9taXNlSW5kZXggPSBpbmRleDsgcmV0dXJuIHJlc3VsdDsgfSkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgY2FuY2VsbGFibGVQcm9taXNlcy5mb3JFYWNoKChjYW5jZWxsYWJsZVByb21pc2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gcmVzb2x2ZWRQcm9taXNlSW5kZXgpIHtcbiAgICAgICAgICAgIGNhbmNlbGxhYmxlUHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnJhY2VDYW5jZWxsYWJsZVByb21pc2VzID0gcmFjZUNhbmNlbGxhYmxlUHJvbWlzZXM7XG5mdW5jdGlvbiByYWNlVGltZW91dChwcm9taXNlLCB0aW1lb3V0LCBvblRpbWVvdXQpIHtcbiAgICBsZXQgcHJvbWlzZVJlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUgPT09IG51bGwgfHwgcHJvbWlzZVJlc29sdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb21pc2VSZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIG9uVGltZW91dCA9PT0gbnVsbCB8fCBvblRpbWVvdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVGltZW91dCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgICAgICBwcm9taXNlLmZpbmFsbHkoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKSksXG4gICAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlKVxuICAgIF0pO1xufVxuZXhwb3J0cy5yYWNlVGltZW91dCA9IHJhY2VUaW1lb3V0O1xuZnVuY3Rpb24gYXNQcm9taXNlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGNhbGxiYWNrKCk7XG4gICAgICAgIGlmIChpc1RoZW5hYmxlKGl0ZW0pKSB7XG4gICAgICAgICAgICBpdGVtLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuYXNQcm9taXNlID0gYXNQcm9taXNlO1xuLyoqXG4gKiBBIGhlbHBlciB0byBwcmV2ZW50IGFjY3VtdWxhdGlvbiBvZiBzZXF1ZW50aWFsIGFzeW5jIHRhc2tzLlxuICpcbiAqIEltYWdpbmUgYSBtYWlsIG1hbiB3aXRoIHRoZSBzb2xlIHRhc2sgb2YgZGVsaXZlcmluZyBsZXR0ZXJzLiBBcyBzb29uIGFzXG4gKiBhIGxldHRlciBzdWJtaXR0ZWQgZm9yIGRlbGl2ZXJ5LCBoZSBkcml2ZXMgdG8gdGhlIGRlc3RpbmF0aW9uLCBkZWxpdmVycyBpdFxuICogYW5kIHJldHVybnMgdG8gaGlzIGJhc2UuIEltYWdpbmUgdGhhdCBkdXJpbmcgdGhlIHRyaXAsIE4gbW9yZSBsZXR0ZXJzIHdlcmUgc3VibWl0dGVkLlxuICogV2hlbiB0aGUgbWFpbCBtYW4gcmV0dXJucywgaGUgcGlja3MgdGhvc2UgTiBsZXR0ZXJzIGFuZCBkZWxpdmVycyB0aGVtIGFsbCBpbiBhXG4gKiBzaW5nbGUgdHJpcC4gRXZlbiB0aG91Z2ggTisxIHN1Ym1pc3Npb25zIG9jY3VycmVkLCBvbmx5IDIgZGVsaXZlcmllcyB3ZXJlIG1hZGUuXG4gKlxuICogVGhlIHRocm90dGxlciBpbXBsZW1lbnRzIHRoaXMgdmlhIHRoZSBxdWV1ZSgpIG1ldGhvZCwgYnkgcHJvdmlkaW5nIGl0IGEgdGFza1xuICogZmFjdG9yeS4gRm9sbG93aW5nIHRoZSBleGFtcGxlOlxuICpcbiAqIFx0XHRjb25zdCB0aHJvdHRsZXIgPSBuZXcgVGhyb3R0bGVyKCk7XG4gKiBcdFx0Y29uc3QgbGV0dGVycyA9IFtdO1xuICpcbiAqIFx0XHRmdW5jdGlvbiBkZWxpdmVyKCkge1xuICogXHRcdFx0Y29uc3QgbGV0dGVyc1RvRGVsaXZlciA9IGxldHRlcnM7XG4gKiBcdFx0XHRsZXR0ZXJzID0gW107XG4gKiBcdFx0XHRyZXR1cm4gbWFrZVRoZVRyaXAobGV0dGVyc1RvRGVsaXZlcik7XG4gKiBcdFx0fVxuICpcbiAqIFx0XHRmdW5jdGlvbiBvbkxldHRlclJlY2VpdmVkKGwpIHtcbiAqIFx0XHRcdGxldHRlcnMucHVzaChsKTtcbiAqIFx0XHRcdHRocm90dGxlci5xdWV1ZShkZWxpdmVyKTtcbiAqIFx0XHR9XG4gKi9cbmNsYXNzIFRocm90dGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVldWVkUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVldWVkUHJvbWlzZUZhY3RvcnkgPSBudWxsO1xuICAgIH1cbiAgICBxdWV1ZShwcm9taXNlRmFjdG9yeSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlZFByb21pc2VGYWN0b3J5ID0gcHJvbWlzZUZhY3Rvcnk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucXVldWVkUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucXVldWUodGhpcy5xdWV1ZWRQcm9taXNlRmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkUHJvbWlzZUZhY3RvcnkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvbWlzZS50aGVuKG9uQ29tcGxldGUsIG9uQ29tcGxldGUpLnRoZW4ocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZVByb21pc2UgPSBwcm9taXNlRmFjdG9yeSgpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5UaHJvdHRsZXIgPSBUaHJvdHRsZXI7XG5jbGFzcyBTZXF1ZW5jZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICAgIHF1ZXVlKHByb21pc2VUYXNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQudGhlbigoKSA9PiBwcm9taXNlVGFzaygpLCAoKSA9PiBwcm9taXNlVGFzaygpKTtcbiAgICB9XG59XG5leHBvcnRzLlNlcXVlbmNlciA9IFNlcXVlbmNlcjtcbmNsYXNzIFNlcXVlbmNlckJ5S2V5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBxdWV1ZShrZXksIHByb21pc2VUYXNrKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgcnVubmluZ1Byb21pc2UgPSAoX2EgPSB0aGlzLnByb21pc2VNYXAuZ2V0KGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBjb25zdCBuZXdQcm9taXNlID0gcnVubmluZ1Byb21pc2VcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pXG4gICAgICAgICAgICAudGhlbihwcm9taXNlVGFzaylcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb21pc2VNYXAuZ2V0KGtleSkgPT09IG5ld1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2VNYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb21pc2VNYXAuc2V0KGtleSwgbmV3UHJvbWlzZSk7XG4gICAgICAgIHJldHVybiBuZXdQcm9taXNlO1xuICAgIH1cbn1cbmV4cG9ydHMuU2VxdWVuY2VyQnlLZXkgPSBTZXF1ZW5jZXJCeUtleTtcbi8qKlxuICogQSBoZWxwZXIgdG8gZGVsYXkgKGRlYm91bmNlKSBleGVjdXRpb24gb2YgYSB0YXNrIHRoYXQgaXMgYmVpbmcgcmVxdWVzdGVkIG9mdGVuLlxuICpcbiAqIEZvbGxvd2luZyB0aGUgdGhyb3R0bGVyLCBub3cgaW1hZ2luZSB0aGUgbWFpbCBtYW4gd2FudHMgdG8gb3B0aW1pemUgdGhlIG51bWJlciBvZlxuICogdHJpcHMgcHJvYWN0aXZlbHkuIFRoZSB0cmlwIGl0c2VsZiBjYW4gYmUgbG9uZywgc28gaGUgZGVjaWRlcyBub3QgdG8gbWFrZSB0aGUgdHJpcFxuICogYXMgc29vbiBhcyBhIGxldHRlciBpcyBzdWJtaXR0ZWQuIEluc3RlYWQgaGUgd2FpdHMgYSB3aGlsZSwgaW4gY2FzZSBtb3JlXG4gKiBsZXR0ZXJzIGFyZSBzdWJtaXR0ZWQuIEFmdGVyIHNhaWQgd2FpdGluZyBwZXJpb2QsIGlmIG5vIGxldHRlcnMgd2VyZSBzdWJtaXR0ZWQsIGhlXG4gKiBkZWNpZGVzIHRvIG1ha2UgdGhlIHRyaXAuIEltYWdpbmUgdGhhdCBOIG1vcmUgbGV0dGVycyB3ZXJlIHN1Ym1pdHRlZCBhZnRlciB0aGUgZmlyc3RcbiAqIG9uZSwgYWxsIHdpdGhpbiBhIHNob3J0IHBlcmlvZCBvZiB0aW1lIGJldHdlZW4gZWFjaCBvdGhlci4gRXZlbiB0aG91Z2ggTisxXG4gKiBzdWJtaXNzaW9ucyBvY2N1cnJlZCwgb25seSAxIGRlbGl2ZXJ5IHdhcyBtYWRlLlxuICpcbiAqIFRoZSBkZWxheWVyIG9mZmVycyB0aGlzIGJlaGF2aW9yIHZpYSB0aGUgdHJpZ2dlcigpIG1ldGhvZCwgaW50byB3aGljaCBib3RoIHRoZSB0YXNrXG4gKiB0byBiZSBleGVjdXRlZCBhbmQgdGhlIHdhaXRpbmcgcGVyaW9kIChkZWxheSkgbXVzdCBiZSBwYXNzZWQgaW4gYXMgYXJndW1lbnRzLiBGb2xsb3dpbmdcbiAqIHRoZSBleGFtcGxlOlxuICpcbiAqIFx0XHRjb25zdCBkZWxheWVyID0gbmV3IERlbGF5ZXIoV0FJVElOR19QRVJJT0QpO1xuICogXHRcdGNvbnN0IGxldHRlcnMgPSBbXTtcbiAqXG4gKiBcdFx0ZnVuY3Rpb24gbGV0dGVyUmVjZWl2ZWQobCkge1xuICogXHRcdFx0bGV0dGVycy5wdXNoKGwpO1xuICogXHRcdFx0ZGVsYXllci50cmlnZ2VyKCgpID0+IHsgcmV0dXJuIG1ha2VUaGVUcmlwKCk7IH0pO1xuICogXHRcdH1cbiAqL1xuY2xhc3MgRGVsYXllciB7XG4gICAgY29uc3RydWN0b3IoZGVmYXVsdERlbGF5KSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdERlbGF5ID0gZGVmYXVsdERlbGF5O1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBsZXRpb25Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kb1Jlc29sdmUgPSBudWxsO1xuICAgICAgICB0aGlzLmRvUmVqZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXNrID0gbnVsbDtcbiAgICB9XG4gICAgdHJpZ2dlcih0YXNrLCBkZWxheSA9IHRoaXMuZGVmYXVsdERlbGF5KSB7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICAgICAgICBpZiAoIXRoaXMuY29tcGxldGlvblByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGlvblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb1Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9SZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRpb25Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmRvUmVzb2x2ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFzaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9SZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb1Jlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGlvblByb21pc2U7XG4gICAgfVxuICAgIGlzVHJpZ2dlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lb3V0ICE9PSBudWxsO1xuICAgIH1cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsVGltZW91dCgpO1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZG9SZWplY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvUmVqZWN0KCgwLCBlcnJvcnNfMS5jYW5jZWxlZCkoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRpb25Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYW5jZWxUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG59XG5leHBvcnRzLkRlbGF5ZXIgPSBEZWxheWVyO1xuLyoqXG4gKiBBIGhlbHBlciB0byBkZWxheSBleGVjdXRpb24gb2YgYSB0YXNrIHRoYXQgaXMgYmVpbmcgcmVxdWVzdGVkIG9mdGVuLCB3aGlsZVxuICogcHJldmVudGluZyBhY2N1bXVsYXRpb24gb2YgY29uc2VjdXRpdmUgZXhlY3V0aW9ucywgd2hpbGUgdGhlIHRhc2sgcnVucy5cbiAqXG4gKiBUaGUgbWFpbCBtYW4gaXMgY2xldmVyIGFuZCB3YWl0cyBmb3IgYSBjZXJ0YWluIGFtb3VudCBvZiB0aW1lLCBiZWZvcmUgZ29pbmdcbiAqIG91dCB0byBkZWxpdmVyIGxldHRlcnMuIFdoaWxlIHRoZSBtYWlsIG1hbiBpcyBnb2luZyBvdXQsIG1vcmUgbGV0dGVycyBhcnJpdmVcbiAqIGFuZCBjYW4gb25seSBiZSBkZWxpdmVyZWQgb25jZSBoZSBpcyBiYWNrLiBPbmNlIGhlIGlzIGJhY2sgdGhlIG1haWwgbWFuIHdpbGxcbiAqIGRvIG9uZSBtb3JlIHRyaXAgdG8gZGVsaXZlciB0aGUgbGV0dGVycyB0aGF0IGhhdmUgYWNjdW11bGF0ZWQgd2hpbGUgaGUgd2FzIG91dC5cbiAqL1xuY2xhc3MgVGhyb3R0bGVkRGVsYXllciB7XG4gICAgY29uc3RydWN0b3IoZGVmYXVsdERlbGF5KSB7XG4gICAgICAgIHRoaXMuZGVsYXllciA9IG5ldyBEZWxheWVyKGRlZmF1bHREZWxheSk7XG4gICAgICAgIHRoaXMudGhyb3R0bGVyID0gbmV3IFRocm90dGxlcigpO1xuICAgIH1cbiAgICB0cmlnZ2VyKHByb21pc2VGYWN0b3J5LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxheWVyLnRyaWdnZXIoKCkgPT4gdGhpcy50aHJvdHRsZXIucXVldWUocHJvbWlzZUZhY3RvcnkpLCBkZWxheSk7XG4gICAgfVxuICAgIGlzVHJpZ2dlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxheWVyLmlzVHJpZ2dlcmVkKCk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5kZWxheWVyLmNhbmNlbCgpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLmRlbGF5ZXIuZGlzcG9zZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGhyb3R0bGVkRGVsYXllciA9IFRocm90dGxlZERlbGF5ZXI7XG4vKipcbiAqIEEgYmFycmllciB0aGF0IGlzIGluaXRpYWxseSBjbG9zZWQgYW5kIHRoZW4gYmVjb21lcyBvcGVuZWQgcGVybWFuZW50bHkuXG4gKi9cbmNsYXNzIEJhcnJpZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChjLCBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZVByb21pc2UgPSBjO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb21wbGV0ZVByb21pc2UodHJ1ZSk7XG4gICAgfVxuICAgIHdhaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH1cbn1cbmV4cG9ydHMuQmFycmllciA9IEJhcnJpZXI7XG4vKipcbiAqIEEgYmFycmllciB0aGF0IGlzIGluaXRpYWxseSBjbG9zZWQgYW5kIHRoZW4gYmVjb21lcyBvcGVuZWQgcGVybWFuZW50bHkgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZCBvZlxuICogdGltZSBvciB3aGVuIG9wZW4gaXMgY2FsbGVkIGV4cGxpY2l0bHlcbiAqL1xuY2xhc3MgQXV0b09wZW5CYXJyaWVyIGV4dGVuZHMgQmFycmllciB7XG4gICAgY29uc3RydWN0b3IoYXV0b09wZW5UaW1lTXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcGVuKCksIGF1dG9PcGVuVGltZU1zKTtcbiAgICB9XG4gICAgb3BlbigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgICBzdXBlci5vcGVuKCk7XG4gICAgfVxufVxuZXhwb3J0cy5BdXRvT3BlbkJhcnJpZXIgPSBBdXRvT3BlbkJhcnJpZXI7XG5mdW5jdGlvbiB0aW1lb3V0KG1pbGxpcywgdG9rZW4pIHtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVDYW5jZWxhYmxlUHJvbWlzZSh0b2tlbiA9PiB0aW1lb3V0KG1pbGxpcywgdG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgbWlsbGlzKTtcbiAgICAgICAgY29uc3QgZGlzcG9zYWJsZSA9IHRva2VuLm9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKCgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZWplY3QoKDAsIGVycm9yc18xLmNhbmNlbGVkKSgpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0O1xuZnVuY3Rpb24gZGlzcG9zYWJsZVRpbWVvdXQoaGFuZGxlciwgdGltZW91dCA9IDApIHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCk7XG4gICAgcmV0dXJuICgwLCBsaWZlY3ljbGVfMS50b0Rpc3Bvc2FibGUpKCgpID0+IGNsZWFyVGltZW91dCh0aW1lcikpO1xufVxuZXhwb3J0cy5kaXNwb3NhYmxlVGltZW91dCA9IGRpc3Bvc2FibGVUaW1lb3V0O1xuLyoqXG4gKiBSdW5zIHRoZSBwcm92aWRlZCBsaXN0IG9mIHByb21pc2UgZmFjdG9yaWVzIGluIHNlcXVlbnRpYWwgb3JkZXIuIFRoZSByZXR1cm5lZFxuICogcHJvbWlzZSB3aWxsIGNvbXBsZXRlIHRvIGFuIGFycmF5IG9mIHJlc3VsdHMgZnJvbSBlYWNoIHByb21pc2UuXG4gKi9cbmZ1bmN0aW9uIHNlcXVlbmNlKHByb21pc2VGYWN0b3JpZXMpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBjb25zdCBsZW4gPSBwcm9taXNlRmFjdG9yaWVzLmxlbmd0aDtcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPCBsZW4gPyBwcm9taXNlRmFjdG9yaWVzW2luZGV4KytdKCkgOiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0aGVuSGFuZGxlcihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbiA9IG5leHQoKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBuLnRoZW4odGhlbkhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0cyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbih0aGVuSGFuZGxlcik7XG59XG5leHBvcnRzLnNlcXVlbmNlID0gc2VxdWVuY2U7XG5mdW5jdGlvbiBmaXJzdChwcm9taXNlRmFjdG9yaWVzLCBzaG91bGRTdG9wID0gdCA9PiAhIXQsIGRlZmF1bHRWYWx1ZSA9IG51bGwpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IGxlbiA9IHByb21pc2VGYWN0b3JpZXMubGVuZ3RoO1xuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA+PSBsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gcHJvbWlzZUZhY3Rvcmllc1tpbmRleCsrXTtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShmYWN0b3J5KCkpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RvcChyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxvb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gbG9vcCgpO1xufVxuZXhwb3J0cy5maXJzdCA9IGZpcnN0O1xuZnVuY3Rpb24gZmlyc3RQYXJhbGxlbChwcm9taXNlTGlzdCwgc2hvdWxkU3RvcCA9IHQgPT4gISF0LCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XG4gICAgaWYgKHByb21pc2VMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuICAgIGxldCB0b2RvID0gcHJvbWlzZUxpc3QubGVuZ3RoO1xuICAgIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdG9kbyA9IC0xO1xuICAgICAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZUxpc3QpIHtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IHByb21pc2UpLmNhbmNlbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZUxpc3QpIHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgtLXRvZG8gPj0gMCAmJiBzaG91bGRTdG9wKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodG9kbyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoLS10b2RvID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmZpcnN0UGFyYWxsZWwgPSBmaXJzdFBhcmFsbGVsO1xuLyoqXG4gKiBBIGhlbHBlciB0byBxdWV1ZSBOIHByb21pc2VzIGFuZCBydW4gdGhlbSBhbGwgd2l0aCBhIG1heCBkZWdyZWUgb2YgcGFyYWxsZWxpc20uIFRoZSBoZWxwZXJcbiAqIGVuc3VyZXMgdGhhdCBhdCBhbnkgdGltZSBubyBtb3JlIHRoYW4gTSBwcm9taXNlcyBhcmUgcnVubmluZyBhdCB0aGUgc2FtZSB0aW1lLlxuICovXG5jbGFzcyBMaW1pdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXhEZWdyZWVPZlBhcmFsZWxsaXNtKSB7XG4gICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB0aGlzLm1heERlZ3JlZU9mUGFyYWxlbGxpc20gPSBtYXhEZWdyZWVPZlBhcmFsZWxsaXNtO1xuICAgICAgICB0aGlzLm91dHN0YW5kaW5nUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5ydW5uaW5nUHJvbWlzZXMgPSAwO1xuICAgICAgICB0aGlzLl9vbkZpbmlzaGVkID0gbmV3IGV2ZW50XzEuRW1pdHRlcigpO1xuICAgIH1cbiAgICBnZXQgb25GaW5pc2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uRmluaXNoZWQuZXZlbnQ7XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG4gICAgcXVldWUoZmFjdG9yeSkge1xuICAgICAgICB0aGlzLl9zaXplKys7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoYywgZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRzdGFuZGluZ1Byb21pc2VzLnB1c2goeyBmYWN0b3J5LCBjLCBlIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdW1lKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5vdXRzdGFuZGluZ1Byb21pc2VzLmxlbmd0aCAmJiB0aGlzLnJ1bm5pbmdQcm9taXNlcyA8IHRoaXMubWF4RGVncmVlT2ZQYXJhbGVsbGlzbSkge1xuICAgICAgICAgICAgY29uc3QgaUxpbWl0ZWRUYXNrID0gdGhpcy5vdXRzdGFuZGluZ1Byb21pc2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmdQcm9taXNlcysrO1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGlMaW1pdGVkVGFzay5mYWN0b3J5KCk7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oaUxpbWl0ZWRUYXNrLmMsIGlMaW1pdGVkVGFzay5lKTtcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB0aGlzLmNvbnN1bWVkKCksICgpID0+IHRoaXMuY29uc3VtZWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3VtZWQoKSB7XG4gICAgICAgIHRoaXMuX3NpemUtLTtcbiAgICAgICAgdGhpcy5ydW5uaW5nUHJvbWlzZXMtLTtcbiAgICAgICAgaWYgKHRoaXMub3V0c3RhbmRpbmdQcm9taXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX29uRmluaXNoZWQuZmlyZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMuX29uRmluaXNoZWQuZGlzcG9zZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuTGltaXRlciA9IExpbWl0ZXI7XG4vKipcbiAqIEEgcXVldWUgaXMgaGFuZGxlcyBvbmUgcHJvbWlzZSBhdCBhIHRpbWUgYW5kIGd1YXJhbnRlZXMgdGhhdCBhdCBhbnkgdGltZSBvbmx5IG9uZSBwcm9taXNlIGlzIGV4ZWN1dGluZy5cbiAqL1xuY2xhc3MgUXVldWUgZXh0ZW5kcyBMaW1pdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoMSk7XG4gICAgfVxufVxuZXhwb3J0cy5RdWV1ZSA9IFF1ZXVlO1xuLyoqXG4gKiBBIGhlbHBlciB0byBvcmdhbml6ZSBxdWV1ZXMgcGVyIHJlc291cmNlLiBUaGUgUmVzb3VyY2VRdWV1ZSBtYWtlcyBzdXJlIHRvIG1hbmFnZSBxdWV1ZXMgcGVyIHJlc291cmNlXG4gKiBieSBkaXNwb3NpbmcgdGhlbSBvbmNlIHRoZSBxdWV1ZSBpcyBlbXB0eS5cbiAqL1xuY2xhc3MgUmVzb3VyY2VRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucXVldWVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBxdWV1ZUZvcihyZXNvdXJjZSwgZXh0VXJpID0gcmVzb3VyY2VzXzEuZXh0VXJpKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGV4dFVyaS5nZXRDb21wYXJpc29uS2V5KHJlc291cmNlKTtcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5xdWV1ZXMuZ2V0KGtleSk7XG4gICAgICAgIGlmICghcXVldWUpIHtcbiAgICAgICAgICAgIHF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgICAgICAgICBldmVudF8xLkV2ZW50Lm9uY2UocXVldWUub25GaW5pc2hlZCkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHF1ZXVlID09PSBudWxsIHx8IHF1ZXVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBxdWV1ZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucXVldWVzLnNldChrZXksIHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVldWU7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMucXVldWVzLmZvckVhY2gocXVldWUgPT4gcXVldWUuZGlzcG9zZSgpKTtcbiAgICAgICAgdGhpcy5xdWV1ZXMuY2xlYXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlJlc291cmNlUXVldWUgPSBSZXNvdXJjZVF1ZXVlO1xuY2xhc3MgVGltZW91dFRpbWVyIHtcbiAgICBjb25zdHJ1Y3RvcihydW5uZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5fdG9rZW4gPSAtMTtcbiAgICAgICAgaWYgKHR5cGVvZiBydW5uZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnNldElmTm90U2V0KHJ1bm5lciwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy5fdG9rZW4gIT09IC0xKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYW5jZWxBbmRTZXQocnVubmVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IC0xO1xuICAgICAgICAgICAgcnVubmVyKCk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgICBzZXRJZk5vdFNldChydW5uZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rva2VuICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gdGltZXIgaXMgYWxyZWFkeSBzZXRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90b2tlbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSAtMTtcbiAgICAgICAgICAgIHJ1bm5lcigpO1xuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG59XG5leHBvcnRzLlRpbWVvdXRUaW1lciA9IFRpbWVvdXRUaW1lcjtcbmNsYXNzIEludGVydmFsVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl90b2tlbiA9IC0xO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLl90b2tlbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYW5jZWxBbmRTZXQocnVubmVyLCBpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB0aGlzLl90b2tlbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHJ1bm5lcigpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxufVxuZXhwb3J0cy5JbnRlcnZhbFRpbWVyID0gSW50ZXJ2YWxUaW1lcjtcbmNsYXNzIFJ1bk9uY2VTY2hlZHVsZXIge1xuICAgIGNvbnN0cnVjdG9yKHJ1bm5lciwgZGVsYXkpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0VG9rZW4gPSAtMTtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBydW5uZXI7XG4gICAgICAgIHRoaXMudGltZW91dCA9IGRlbGF5O1xuICAgICAgICB0aGlzLnRpbWVvdXRIYW5kbGVyID0gdGhpcy5vblRpbWVvdXQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcG9zZSBSdW5PbmNlU2NoZWR1bGVyXG4gICAgICovXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYW5jZWwgY3VycmVudCBzY2hlZHVsZWQgcnVubmVyIChpZiBhbnkpLlxuICAgICAqL1xuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY2hlZHVsZWQoKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFRva2VuKTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dFRva2VuID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FuY2VsIHByZXZpb3VzIHJ1bm5lciAoaWYgYW55KSAmIHNjaGVkdWxlIGEgbmV3IHJ1bm5lci5cbiAgICAgKi9cbiAgICBzY2hlZHVsZShkZWxheSA9IHRoaXMudGltZW91dCkge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB0aGlzLnRpbWVvdXRUb2tlbiA9IHNldFRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlciwgZGVsYXkpO1xuICAgIH1cbiAgICBnZXQgZGVsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVvdXQ7XG4gICAgfVxuICAgIHNldCBkZWxheSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHNjaGVkdWxlZC5cbiAgICAgKi9cbiAgICBpc1NjaGVkdWxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZW91dFRva2VuICE9PSAtMTtcbiAgICB9XG4gICAgb25UaW1lb3V0KCkge1xuICAgICAgICB0aGlzLnRpbWVvdXRUb2tlbiA9IC0xO1xuICAgICAgICBpZiAodGhpcy5ydW5uZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZG9SdW4oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb1J1bigpIHtcbiAgICAgICAgaWYgKHRoaXMucnVubmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5lcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SdW5PbmNlU2NoZWR1bGVyID0gUnVuT25jZVNjaGVkdWxlcjtcbmNsYXNzIFJ1bk9uY2VXb3JrZXIgZXh0ZW5kcyBSdW5PbmNlU2NoZWR1bGVyIHtcbiAgICBjb25zdHJ1Y3RvcihydW5uZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgc3VwZXIocnVubmVyLCB0aW1lb3V0KTtcbiAgICAgICAgdGhpcy51bml0cyA9IFtdO1xuICAgIH1cbiAgICB3b3JrKHVuaXQpIHtcbiAgICAgICAgdGhpcy51bml0cy5wdXNoKHVuaXQpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTY2hlZHVsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvUnVuKCkge1xuICAgICAgICBjb25zdCB1bml0cyA9IHRoaXMudW5pdHM7XG4gICAgICAgIHRoaXMudW5pdHMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucnVubmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5lcih1bml0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy51bml0cyA9IFtdO1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5SdW5PbmNlV29ya2VyID0gUnVuT25jZVdvcmtlcjtcbi8qKlxuICogVGhlIGBUaHJvdHRsZWRXb3JrZXJgIHdpbGwgYWNjZXB0IHVuaXRzIG9mIHdvcmsgYFRgXG4gKiB0byBoYW5kbGUuIFRoZSBjb250cmFjdCBpczpcbiAqICogdGhlcmUgaXMgYSBtYXhpbXVtIG9mIHVuaXRzIHRoZSB3b3JrZXIgY2FuIGhhbmRsZSBhdCBvbmNlICh2aWEgYGNodW5rU2l6ZWApXG4gKiAqIGFmdGVyIGhhdmluZyBoYW5kbGVkIHVuaXRzLCB0aGUgd29ya2VyIG5lZWRzIHRvIHJlc3QgKHZpYSBgdGhyb3R0bGVEZWxheWApXG4gKi9cbmNsYXNzIFRocm90dGxlZFdvcmtlciBleHRlbmRzIGxpZmVjeWNsZV8xLkRpc3Bvc2FibGUge1xuICAgIGNvbnN0cnVjdG9yKG1heFdvcmtDaHVua1NpemUsIG1heFBlbmRpbmdXb3JrLCB0aHJvdHRsZURlbGF5LCBoYW5kbGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWF4V29ya0NodW5rU2l6ZSA9IG1heFdvcmtDaHVua1NpemU7XG4gICAgICAgIHRoaXMubWF4UGVuZGluZ1dvcmsgPSBtYXhQZW5kaW5nV29yaztcbiAgICAgICAgdGhpcy50aHJvdHRsZURlbGF5ID0gdGhyb3R0bGVEZWxheTtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5wZW5kaW5nV29yayA9IFtdO1xuICAgICAgICB0aGlzLnRocm90dGxlciA9IHRoaXMuX3JlZ2lzdGVyKG5ldyBsaWZlY3ljbGVfMS5NdXRhYmxlRGlzcG9zYWJsZSgpKTtcbiAgICAgICAgdGhpcy5kaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHdvcmsgdW5pdHMgdGhhdCBhcmUgcGVuZGluZyB0byBiZSBwcm9jZXNzZWQuXG4gICAgICovXG4gICAgZ2V0IHBlbmRpbmcoKSB7IHJldHVybiB0aGlzLnBlbmRpbmdXb3JrLmxlbmd0aDsgfVxuICAgIC8qKlxuICAgICAqIEFkZCB1bml0cyB0byBiZSB3b3JrZWQgb24uIFVzZSBgcGVuZGluZ2AgdG8gZmlndXJlIG91dFxuICAgICAqIGhvdyBtYW55IHVuaXRzIGFyZSBub3QgeWV0IHByb2Nlc3NlZCBhZnRlciB0aGlzIG1ldGhvZFxuICAgICAqIHdhcyBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB3aGV0aGVyIHRoZSB3b3JrIHdhcyBhY2NlcHRlZCBvciBub3QuIElmIHRoZVxuICAgICAqIHdvcmtlciBpcyBkaXNwb3NlZCwgaXQgd2lsbCBub3QgYWNjZXB0IGFueSBtb3JlIHdvcmsuXG4gICAgICogSWYgdGhlIG51bWJlciBvZiBwZW5kaW5nIHVuaXRzIHdvdWxkIGJlY29tZSBsYXJnZXJcbiAgICAgKiB0aGFuIGBtYXhQZW5kaW5nV29ya2AsIG1vcmUgd29yayB3aWxsIGFsc28gbm90IGJlIGFjY2VwdGVkLlxuICAgICAqL1xuICAgIHdvcmsodW5pdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gd29yayBub3QgYWNjZXB0ZWQ6IGRpc3Bvc2VkXG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHJlYWNoaW5nIG1heGltdW0gb2YgcGVuZGluZyB3b3JrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tYXhQZW5kaW5nV29yayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIFRocm90dGxlZDogc2ltcGxlIGNoZWNrIGlmIHBlbmRpbmcgKyB1bml0cyBleGNlZWRzIG1heCBwZW5kaW5nXG4gICAgICAgICAgICBpZiAodGhpcy50aHJvdHRsZXIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nICsgdW5pdHMubGVuZ3RoID4gdGhpcy5tYXhQZW5kaW5nV29yaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHdvcmsgbm90IGFjY2VwdGVkOiB0b28gbXVjaCBwZW5kaW5nIHdvcmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVbnRocm90dGxlZDogc2FtZSBhcyB0aHJvdHRsZWQsIGJ1dCBhY2NvdW50IGZvciBtYXggY2h1bmsgZ2V0dGluZ1xuICAgICAgICAgICAgLy8gd29ya2VkIG9uIGRpcmVjdGx5IHdpdGhvdXQgYmVpbmcgcGVuZGluZ1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZyArIHVuaXRzLmxlbmd0aCAtIHRoaXMubWF4V29ya0NodW5rU2l6ZSA+IHRoaXMubWF4UGVuZGluZ1dvcmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB3b3JrIG5vdCBhY2NlcHRlZDogdG9vIG11Y2ggcGVuZGluZyB3b3JrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCB0byBwZW5kaW5nIHVuaXRzIGZpcnN0XG4gICAgICAgIHRoaXMucGVuZGluZ1dvcmsucHVzaCguLi51bml0cyk7XG4gICAgICAgIC8vIElmIG5vdCB0aHJvdHRsZWQsIHN0YXJ0IHdvcmtpbmcgZGlyZWN0bHlcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3aGVuIHRoZSB0aHJvdHRsZSBkZWxheSBoYXNcbiAgICAgICAgLy8gcGFzdCwgcGVuZGluZyB3b3JrIHdpbGwgYmUgd29ya2VkIGFnYWluLlxuICAgICAgICBpZiAoIXRoaXMudGhyb3R0bGVyLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRvV29yaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyB3b3JrIGFjY2VwdGVkXG4gICAgfVxuICAgIGRvV29yaygpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBjaHVuayB0byBoYW5kbGUgYW5kIGhhbmRsZSBpdFxuICAgICAgICB0aGlzLmhhbmRsZXIodGhpcy5wZW5kaW5nV29yay5zcGxpY2UoMCwgdGhpcy5tYXhXb3JrQ2h1bmtTaXplKSk7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgcmVtYWluaW5nIHdvcmssIHNjaGVkdWxlIGl0IGFmdGVyIGEgZGVsYXlcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1dvcmsubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50aHJvdHRsZXIudmFsdWUgPSBuZXcgUnVuT25jZVNjaGVkdWxlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvdHRsZXIuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvV29yaygpO1xuICAgICAgICAgICAgfSwgdGhpcy50aHJvdHRsZURlbGF5KTtcbiAgICAgICAgICAgIHRoaXMudGhyb3R0bGVyLnZhbHVlLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnRzLlRocm90dGxlZFdvcmtlciA9IFRocm90dGxlZFdvcmtlcjtcbihmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0SWRsZUNhbGxiYWNrICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBjYW5jZWxJZGxlQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZHVtbXlJZGxlID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiB0cnVlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZygpIHsgcmV0dXJuIDE1OyB9XG4gICAgICAgIH0pO1xuICAgICAgICBleHBvcnRzLnJ1bldoZW5JZGxlID0gKHJ1bm5lcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiBydW5uZXIoZHVtbXlJZGxlKSk7XG4gICAgICAgICAgICBsZXQgZGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy5ydW5XaGVuSWRsZSA9IChydW5uZXIsIHRpbWVvdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZSA9IHJlcXVlc3RJZGxlQ2FsbGJhY2socnVubmVyLCB0eXBlb2YgdGltZW91dCA9PT0gJ251bWJlcicgPyB7IHRpbWVvdXQgfSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBsZXQgZGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxJZGxlQ2FsbGJhY2soaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbn0pKCk7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBcImlkbGUtdW50aWwtdXJnZW50XCItc3RyYXRlZ3kgYXMgaW50cm9kdWNlZFxuICogaGVyZTogaHR0cHM6Ly9waGlsaXB3YWx0b24uY29tL2FydGljbGVzL2lkbGUtdW50aWwtdXJnZW50L1xuICovXG5jbGFzcyBJZGxlVmFsdWUge1xuICAgIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgICAgIHRoaXMuX2RpZFJ1biA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9leGVjdXRvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBleGVjdXRvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlID0gKDAsIGV4cG9ydHMucnVuV2hlbklkbGUpKCgpID0+IHRoaXMuX2V4ZWN1dG9yKCkpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGUuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGlkUnVuKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fZXhlY3V0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuX2Vycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLklkbGVWYWx1ZSA9IElkbGVWYWx1ZTtcbi8vI2VuZHJlZ2lvblxuYXN5bmMgZnVuY3Rpb24gcmV0cnkodGFzaywgZGVsYXksIHJldHJpZXMpIHtcbiAgICBsZXQgbGFzdEVycm9yO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0cmllczsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGFzaygpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbGFzdEVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICBhd2FpdCB0aW1lb3V0KGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBsYXN0RXJyb3I7XG59XG5leHBvcnRzLnJldHJ5ID0gcmV0cnk7XG5jbGFzcyBUYXNrU2VxdWVudGlhbGl6ZXIge1xuICAgIGhhc1BlbmRpbmcodGFza0lkKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFza0lkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BlbmRpbmcudGFza0lkID09PSB0YXNrSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhdGhpcy5fcGVuZGluZztcbiAgICB9XG4gICAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZW5kaW5nID8gdGhpcy5fcGVuZGluZy5wcm9taXNlIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjYW5jZWxQZW5kaW5nKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX3BlbmRpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYW5jZWwoKTtcbiAgICB9XG4gICAgc2V0UGVuZGluZyh0YXNrSWQsIHByb21pc2UsIG9uQ2FuY2VsKSB7XG4gICAgICAgIHRoaXMuX3BlbmRpbmcgPSB7IHRhc2tJZCwgY2FuY2VsOiAoKSA9PiBvbkNhbmNlbCA9PT0gbnVsbCB8fCBvbkNhbmNlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DYW5jZWwoKSwgcHJvbWlzZSB9O1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5kb25lUGVuZGluZyh0YXNrSWQpLCAoKSA9PiB0aGlzLmRvbmVQZW5kaW5nKHRhc2tJZCkpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZG9uZVBlbmRpbmcodGFza0lkKSB7XG4gICAgICAgIGlmICh0aGlzLl9wZW5kaW5nICYmIHRhc2tJZCA9PT0gdGhpcy5fcGVuZGluZy50YXNrSWQpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgc2V0IHBlbmRpbmcgdG8gZG9uZSBpZiB0aGUgcHJvbWlzZSBmaW5pc2hlZCB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IHRhc2tJZFxuICAgICAgICAgICAgdGhpcy5fcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIHNjaGVkdWxlIHRoZSBuZXh0IHRhc2sgbm93IHRoYXQgd2UgYXJlIGZyZWUgaWYgd2UgaGF2ZSBhbnlcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlck5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmlnZ2VyTmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLl9uZXh0O1xuICAgICAgICAgICAgdGhpcy5fbmV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIFJ1biBuZXh0IHRhc2sgYW5kIGNvbXBsZXRlIG9uIHRoZSBhc3NvY2lhdGVkIHByb21pc2VcbiAgICAgICAgICAgIG5leHQucnVuKCkudGhlbihuZXh0LnByb21pc2VSZXNvbHZlLCBuZXh0LnByb21pc2VSZWplY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldE5leHQocnVuKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgb3VyIGZpcnN0IG5leHQgdGFzaywgc28gd2UgY3JlYXRlIGFzc29jaWF0ZWQgcHJvbWlzZSB3aXRoIGl0XG4gICAgICAgIC8vIHNvIHRoYXQgd2UgY2FuIHJldHVybiBhIHByb21pc2UgdGhhdCBjb21wbGV0ZXMgd2hlbiB0aGUgdGFzayBoYXNcbiAgICAgICAgLy8gY29tcGxldGVkLlxuICAgICAgICBpZiAoIXRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIGxldCBwcm9taXNlUmVzb2x2ZTtcbiAgICAgICAgICAgIGxldCBwcm9taXNlUmVqZWN0O1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fbmV4dCA9IHtcbiAgICAgICAgICAgICAgICBydW4sXG4gICAgICAgICAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgICAgICAgICBwcm9taXNlUmVzb2x2ZTogcHJvbWlzZVJlc29sdmUsXG4gICAgICAgICAgICAgICAgcHJvbWlzZVJlamVjdDogcHJvbWlzZVJlamVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBoYXZlIGEgcHJldmlvdXMgbmV4dCB0YXNrLCBqdXN0IG92ZXJ3cml0ZSBpdFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQucnVuID0gcnVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9uZXh0LnByb21pc2U7XG4gICAgfVxufVxuZXhwb3J0cy5UYXNrU2VxdWVudGlhbGl6ZXIgPSBUYXNrU2VxdWVudGlhbGl6ZXI7XG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvblxuLyoqXG4gKiBUaGUgYEludGVydmFsQ291bnRlcmAgYWxsb3dzIHRvIGNvdW50IHRoZSBudW1iZXJcbiAqIG9mIGNhbGxzIHRvIGBpbmNyZW1lbnQoKWAgb3ZlciBhIGR1cmF0aW9uIG9mXG4gKiBgaW50ZXJ2YWxgLiBUaGlzIHV0aWxpdHkgY2FuIGJlIHVzZWQgdG8gY29uZGl0aW9uYWxseVxuICogdGhyb3R0bGUgYSBmcmVxdWVudCB0YXNrIHdoZW4gYSBjZXJ0YWluIHRocmVzaG9sZFxuICogaXMgcmVhY2hlZC5cbiAqL1xuY2xhc3MgSW50ZXJ2YWxDb3VudGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubGFzdEluY3JlbWVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB9XG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAvLyBXZSBhcmUgb3V0c2lkZSBvZiB0aGUgcmFuZ2Ugb2YgYGludGVydmFsYCBhbmQgYXMgc3VjaFxuICAgICAgICAvLyBzdGFydCBjb3VudGluZyBmcm9tIDAgYW5kIHJlbWVtYmVyIHRoZSB0aW1lXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RJbmNyZW1lbnRUaW1lID4gdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0SW5jcmVtZW50VGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUrKztcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5JbnRlcnZhbENvdW50ZXIgPSBJbnRlcnZhbENvdW50ZXI7XG4vKipcbiAqIENyZWF0ZXMgYSBwcm9taXNlIHdob3NlIHJlc29sdXRpb24gb3IgcmVqZWN0aW9uIGNhbiBiZSBjb250cm9sbGVkIGltcGVyYXRpdmVseS5cbiAqL1xuY2xhc3MgRGVmZXJyZWRQcm9taXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZWplY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc29sdmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucCA9IG5ldyBQcm9taXNlKChjLCBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2FsbGJhY2sgPSBjO1xuICAgICAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrID0gZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBpc1JlamVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWplY3RlZDtcbiAgICB9XG4gICAgZ2V0IGlzUmVzb2x2ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICAgIH1cbiAgICBnZXQgaXNTZXR0bGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWplY3RlZCB8fCB0aGlzLnJlc29sdmVkO1xuICAgIH1cbiAgICBjb21wbGV0ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlQ2FsbGJhY2sodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlcnJvcihlcnIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2soKDAsIGVycm9yc18xLmNhbmNlbGVkKSgpKTtcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkRlZmVycmVkUHJvbWlzZSA9IERlZmVycmVkUHJvbWlzZTtcbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIFByb21pc2VzXG52YXIgUHJvbWlzZXM7XG4oZnVuY3Rpb24gKFByb21pc2VzKSB7XG4gICAgLyoqXG4gICAgICogQSBkcm9wLWluIHJlcGxhY2VtZW50IGZvciBgUHJvbWlzZS5hbGxgIHdpdGggdGhlIG9ubHkgZGlmZmVyZW5jZVxuICAgICAqIHRoYXQgdGhlIG1ldGhvZCBhd2FpdHMgZXZlcnkgcHJvbWlzZSB0byBlaXRoZXIgZnVsZmlsbCBvciByZWplY3QuXG4gICAgICpcbiAgICAgKiBTaW1pbGFyIHRvIGBQcm9taXNlLmFsbGAsIG9ubHkgdGhlIGZpcnN0IGVycm9yIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAgKiBpZiBhbnkuXG4gICAgICovXG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0dGxlZChwcm9taXNlcykge1xuICAgICAgICBsZXQgZmlyc3RFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKHByb21pc2UgPT4gcHJvbWlzZS50aGVuKHZhbHVlID0+IHZhbHVlLCBlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoIWZpcnN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmaXJzdEVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBkbyBub3QgcmV0aHJvdyBzbyB0aGF0IG90aGVyIHByb21pc2VzIGNhbiBzZXR0bGVcbiAgICAgICAgfSkpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmaXJzdEVycm9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgZmlyc3RFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0OyAvLyBjYXN0IGlzIG5lZWRlZCBhbmQgcHJvdGVjdGVkIGJ5IHRoZSBgdGhyb3dgIGFib3ZlXG4gICAgfVxuICAgIFByb21pc2VzLnNldHRsZWQgPSBzZXR0bGVkO1xufSkoUHJvbWlzZXMgPSBleHBvcnRzLlByb21pc2VzIHx8IChleHBvcnRzLlByb21pc2VzID0ge30pKTtcbi8vI2VuZHJlZ2lvblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVsaW1pdGVyID0gZXhwb3J0cy5zZXAgPSBleHBvcnRzLnRvTmFtZXNwYWNlZFBhdGggPSBleHBvcnRzLnBhcnNlID0gZXhwb3J0cy5mb3JtYXQgPSBleHBvcnRzLmV4dG5hbWUgPSBleHBvcnRzLmJhc2VuYW1lID0gZXhwb3J0cy5kaXJuYW1lID0gZXhwb3J0cy5yZWxhdGl2ZSA9IGV4cG9ydHMucmVzb2x2ZSA9IGV4cG9ydHMuam9pbiA9IGV4cG9ydHMuaXNBYnNvbHV0ZSA9IGV4cG9ydHMubm9ybWFsaXplID0gZXhwb3J0cy5wb3NpeCA9IGV4cG9ydHMud2luMzIgPSB2b2lkIDA7XG4vLyBOT1RFOiBWU0NvZGUncyBjb3B5IG9mIG5vZGVqcyBwYXRoIGxpYnJhcnkgdG8gYmUgdXNhYmxlIGluIGNvbW1vbiAobm9uLW5vZGUpIG5hbWVzcGFjZVxuLy8gQ29waWVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL3YxMi44LjEvbGliL3BhdGguanNcbi8qKlxuICogQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbiAqIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuICogd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuICogZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuICogcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4gKiBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuICogaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuICogTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4gKiBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcbiAqIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbiAqIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbmNvbnN0IHByb2Nlc3MgPSByZXF1aXJlKFwiLi9wcm9jZXNzXCIpO1xuY29uc3QgQ0hBUl9VUFBFUkNBU0VfQSA9IDY1OyAvKiBBICovXG5jb25zdCBDSEFSX0xPV0VSQ0FTRV9BID0gOTc7IC8qIGEgKi9cbmNvbnN0IENIQVJfVVBQRVJDQVNFX1ogPSA5MDsgLyogWiAqL1xuY29uc3QgQ0hBUl9MT1dFUkNBU0VfWiA9IDEyMjsgLyogeiAqL1xuY29uc3QgQ0hBUl9ET1QgPSA0NjsgLyogLiAqL1xuY29uc3QgQ0hBUl9GT1JXQVJEX1NMQVNIID0gNDc7IC8qIC8gKi9cbmNvbnN0IENIQVJfQkFDS1dBUkRfU0xBU0ggPSA5MjsgLyogXFwgKi9cbmNvbnN0IENIQVJfQ09MT04gPSA1ODsgLyogOiAqL1xuY29uc3QgQ0hBUl9RVUVTVElPTl9NQVJLID0gNjM7IC8qID8gKi9cbmNsYXNzIEVycm9ySW52YWxpZEFyZ1R5cGUgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZXhwZWN0ZWQsIGFjdHVhbCkge1xuICAgICAgICAvLyBkZXRlcm1pbmVyOiAnbXVzdCBiZScgb3IgJ211c3Qgbm90IGJlJ1xuICAgICAgICBsZXQgZGV0ZXJtaW5lcjtcbiAgICAgICAgaWYgKHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycgJiYgZXhwZWN0ZWQuaW5kZXhPZignbm90ICcpID09PSAwKSB7XG4gICAgICAgICAgICBkZXRlcm1pbmVyID0gJ211c3Qgbm90IGJlJztcbiAgICAgICAgICAgIGV4cGVjdGVkID0gZXhwZWN0ZWQucmVwbGFjZSgvXm5vdCAvLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZXRlcm1pbmVyID0gJ211c3QgYmUnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR5cGUgPSBuYW1lLmluZGV4T2YoJy4nKSAhPT0gLTEgPyAncHJvcGVydHknIDogJ2FyZ3VtZW50JztcbiAgICAgICAgbGV0IG1zZyA9IGBUaGUgXCIke25hbWV9XCIgJHt0eXBlfSAke2RldGVybWluZXJ9IG9mIHR5cGUgJHtleHBlY3RlZH1gO1xuICAgICAgICBtc2cgKz0gYC4gUmVjZWl2ZWQgdHlwZSAke3R5cGVvZiBhY3R1YWx9YDtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICAgICAgdGhpcy5jb2RlID0gJ0VSUl9JTlZBTElEX0FSR19UWVBFJztcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyh2YWx1ZSwgbmFtZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvckludmFsaWRBcmdUeXBlKG5hbWUsICdzdHJpbmcnLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNQYXRoU2VwYXJhdG9yKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIIHx8IGNvZGUgPT09IENIQVJfQkFDS1dBUkRfU0xBU0g7XG59XG5mdW5jdGlvbiBpc1Bvc2l4UGF0aFNlcGFyYXRvcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IENIQVJfRk9SV0FSRF9TTEFTSDtcbn1cbmZ1bmN0aW9uIGlzV2luZG93c0RldmljZVJvb3QoY29kZSkge1xuICAgIHJldHVybiBjb2RlID49IENIQVJfVVBQRVJDQVNFX0EgJiYgY29kZSA8PSBDSEFSX1VQUEVSQ0FTRV9aIHx8XG4gICAgICAgIGNvZGUgPj0gQ0hBUl9MT1dFUkNBU0VfQSAmJiBjb2RlIDw9IENIQVJfTE9XRVJDQVNFX1o7XG59XG4vLyBSZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggd2l0aCBkaXJlY3RvcnkgbmFtZXNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZyhwYXRoLCBhbGxvd0Fib3ZlUm9vdCwgc2VwYXJhdG9yLCBpc1BhdGhTZXBhcmF0b3IpIHtcbiAgICBsZXQgcmVzID0gJyc7XG4gICAgbGV0IGxhc3RTZWdtZW50TGVuZ3RoID0gMDtcbiAgICBsZXQgbGFzdFNsYXNoID0gLTE7XG4gICAgbGV0IGRvdHMgPSAwO1xuICAgIGxldCBjb2RlID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBwYXRoLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpIDwgcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNQYXRoU2VwYXJhdG9yKGNvZGUpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvZGUgPSBDSEFSX0ZPUldBUkRfU0xBU0g7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUGF0aFNlcGFyYXRvcihjb2RlKSkge1xuICAgICAgICAgICAgaWYgKGxhc3RTbGFzaCA9PT0gaSAtIDEgfHwgZG90cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIE5PT1BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRvdHMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmxlbmd0aCA8IDIgfHwgbGFzdFNlZ21lbnRMZW5ndGggIT09IDIgfHxcbiAgICAgICAgICAgICAgICAgICAgcmVzLmNoYXJDb2RlQXQocmVzLmxlbmd0aCAtIDEpICE9PSBDSEFSX0RPVCB8fFxuICAgICAgICAgICAgICAgICAgICByZXMuY2hhckNvZGVBdChyZXMubGVuZ3RoIC0gMikgIT09IENIQVJfRE9UKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFNsYXNoSW5kZXggPSByZXMubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0U2xhc2hJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0U2VnbWVudExlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSByZXMuc2xpY2UoMCwgbGFzdFNsYXNoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTZWdtZW50TGVuZ3RoID0gcmVzLmxlbmd0aCAtIDEgLSByZXMubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTbGFzaCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNlZ21lbnRMZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFNsYXNoID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyArPSByZXMubGVuZ3RoID4gMCA/IGAke3NlcGFyYXRvcn0uLmAgOiAnLi4nO1xuICAgICAgICAgICAgICAgICAgICBsYXN0U2VnbWVudExlbmd0aCA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyArPSBgJHtzZXBhcmF0b3J9JHtwYXRoLnNsaWNlKGxhc3RTbGFzaCArIDEsIGkpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSBwYXRoLnNsaWNlKGxhc3RTbGFzaCArIDEsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0U2VnbWVudExlbmd0aCA9IGkgLSBsYXN0U2xhc2ggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdFNsYXNoID0gaTtcbiAgICAgICAgICAgIGRvdHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT09IENIQVJfRE9UICYmIGRvdHMgIT09IC0xKSB7XG4gICAgICAgICAgICArK2RvdHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb3RzID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIF9mb3JtYXQoc2VwLCBwYXRoT2JqZWN0KSB7XG4gICAgaWYgKHBhdGhPYmplY3QgPT09IG51bGwgfHwgdHlwZW9mIHBhdGhPYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvckludmFsaWRBcmdUeXBlKCdwYXRoT2JqZWN0JywgJ09iamVjdCcsIHBhdGhPYmplY3QpO1xuICAgIH1cbiAgICBjb25zdCBkaXIgPSBwYXRoT2JqZWN0LmRpciB8fCBwYXRoT2JqZWN0LnJvb3Q7XG4gICAgY29uc3QgYmFzZSA9IHBhdGhPYmplY3QuYmFzZSB8fFxuICAgICAgICBgJHtwYXRoT2JqZWN0Lm5hbWUgfHwgJyd9JHtwYXRoT2JqZWN0LmV4dCB8fCAnJ31gO1xuICAgIGlmICghZGlyKSB7XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbiAgICByZXR1cm4gZGlyID09PSBwYXRoT2JqZWN0LnJvb3QgPyBgJHtkaXJ9JHtiYXNlfWAgOiBgJHtkaXJ9JHtzZXB9JHtiYXNlfWA7XG59XG5leHBvcnRzLndpbjMyID0ge1xuICAgIC8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbiAgICByZXNvbHZlKC4uLnBhdGhTZWdtZW50cykge1xuICAgICAgICBsZXQgcmVzb2x2ZWREZXZpY2UgPSAnJztcbiAgICAgICAgbGV0IHJlc29sdmVkVGFpbCA9ICcnO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gcGF0aFNlZ21lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTE7IGktLSkge1xuICAgICAgICAgICAgbGV0IHBhdGg7XG4gICAgICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGhTZWdtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0cmluZyhwYXRoLCAncGF0aCcpO1xuICAgICAgICAgICAgICAgIC8vIFNraXAgZW1wdHkgZW50cmllc1xuICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXNvbHZlZERldmljZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gcHJvY2Vzcy5jd2QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdpbmRvd3MgaGFzIHRoZSBjb25jZXB0IG9mIGRyaXZlLXNwZWNpZmljIGN1cnJlbnQgd29ya2luZ1xuICAgICAgICAgICAgICAgIC8vIGRpcmVjdG9yaWVzLiBJZiB3ZSd2ZSByZXNvbHZlZCBhIGRyaXZlIGxldHRlciBidXQgbm90IHlldCBhblxuICAgICAgICAgICAgICAgIC8vIGFic29sdXRlIHBhdGgsIGdldCBjd2QgZm9yIHRoYXQgZHJpdmUsIG9yIHRoZSBwcm9jZXNzIGN3ZCBpZlxuICAgICAgICAgICAgICAgIC8vIHRoZSBkcml2ZSBjd2QgaXMgbm90IGF2YWlsYWJsZS4gV2UncmUgc3VyZSB0aGUgZGV2aWNlIGlzIG5vdFxuICAgICAgICAgICAgICAgIC8vIGEgVU5DIHBhdGggYXQgdGhpcyBwb2ludHMsIGJlY2F1c2UgVU5DIHBhdGhzIGFyZSBhbHdheXMgYWJzb2x1dGUuXG4gICAgICAgICAgICAgICAgcGF0aCA9IHByb2Nlc3MuZW52W2A9JHtyZXNvbHZlZERldmljZX1gXSB8fCBwcm9jZXNzLmN3ZCgpO1xuICAgICAgICAgICAgICAgIC8vIFZlcmlmeSB0aGF0IGEgY3dkIHdhcyBmb3VuZCBhbmQgdGhhdCBpdCBhY3R1YWxseSBwb2ludHNcbiAgICAgICAgICAgICAgICAvLyB0byBvdXIgZHJpdmUuIElmIG5vdCwgZGVmYXVsdCB0byB0aGUgZHJpdmUncyByb290LlxuICAgICAgICAgICAgICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5zbGljZSgwLCAyKS50b0xvd2VyQ2FzZSgpICE9PSByZXNvbHZlZERldmljZS50b0xvd2VyQ2FzZSgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLmNoYXJDb2RlQXQoMikgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGAke3Jlc29sdmVkRGV2aWNlfVxcXFxgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHBhdGgubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHJvb3RFbmQgPSAwO1xuICAgICAgICAgICAgbGV0IGRldmljZSA9ICcnO1xuICAgICAgICAgICAgbGV0IGlzQWJzb2x1dGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICAvLyBUcnkgdG8gbWF0Y2ggYSByb290XG4gICAgICAgICAgICBpZiAobGVuID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGF0aFNlcGFyYXRvcihjb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgcGF0aGAgY29udGFpbnMganVzdCBhIHBhdGggc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgIHJvb3RFbmQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBpc0Fic29sdXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1BhdGhTZXBhcmF0b3IoY29kZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBQb3NzaWJsZSBVTkMgcm9vdFxuICAgICAgICAgICAgICAgIC8vIElmIHdlIHN0YXJ0ZWQgd2l0aCBhIHNlcGFyYXRvciwgd2Uga25vdyB3ZSBhdCBsZWFzdCBoYXZlIGFuXG4gICAgICAgICAgICAgICAgLy8gYWJzb2x1dGUgcGF0aCBvZiBzb21lIGtpbmQgKFVOQyBvciBvdGhlcndpc2UpXG4gICAgICAgICAgICAgICAgaXNBYnNvbHV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoZWQgZG91YmxlIHBhdGggc2VwYXJhdG9yIGF0IGJlZ2lubmluZ1xuICAgICAgICAgICAgICAgICAgICBsZXQgaiA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggMSBvciBtb3JlIG5vbi1wYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGogPCBsZW4gJiYgIWlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoaikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBsZW4gJiYgaiAhPT0gbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gcGF0aC5zbGljZShsYXN0LCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoZWQhXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoIDEgb3IgbW9yZSBwYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbGVuICYmIGlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoaikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBsZW4gJiYgaiAhPT0gbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoZWQhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggMSBvciBtb3JlIG5vbi1wYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IGxlbiAmJiAhaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdChqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gbGVuIHx8IGogIT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF0Y2hlZCBhIFVOQyByb290XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldmljZSA9IGBcXFxcXFxcXCR7Zmlyc3RQYXJ0fVxcXFwke3BhdGguc2xpY2UobGFzdCwgail9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdEVuZCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290RW5kID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1dpbmRvd3NEZXZpY2VSb290KGNvZGUpICYmXG4gICAgICAgICAgICAgICAgcGF0aC5jaGFyQ29kZUF0KDEpID09PSBDSEFSX0NPTE9OKSB7XG4gICAgICAgICAgICAgICAgLy8gUG9zc2libGUgZGV2aWNlIHJvb3RcbiAgICAgICAgICAgICAgICBkZXZpY2UgPSBwYXRoLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICAgIHJvb3RFbmQgPSAyO1xuICAgICAgICAgICAgICAgIGlmIChsZW4gPiAyICYmIGlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoMikpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyZWF0IHNlcGFyYXRvciBmb2xsb3dpbmcgZHJpdmUgbmFtZSBhcyBhbiBhYnNvbHV0ZSBwYXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIGluZGljYXRvclxuICAgICAgICAgICAgICAgICAgICBpc0Fic29sdXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcm9vdEVuZCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRldmljZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkRGV2aWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldmljZS50b0xvd2VyQ2FzZSgpICE9PSByZXNvbHZlZERldmljZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHBhdGggcG9pbnRzIHRvIGFub3RoZXIgZGV2aWNlIHNvIGl0IGlzIG5vdCBhcHBsaWNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWREZXZpY2UgPSBkZXZpY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc29sdmVkQWJzb2x1dGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZWREZXZpY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZFRhaWwgPSBgJHtwYXRoLnNsaWNlKHJvb3RFbmQpfVxcXFwke3Jlc29sdmVkVGFpbH1gO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xuICAgICAgICAgICAgICAgIGlmIChpc0Fic29sdXRlICYmIHJlc29sdmVkRGV2aWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLFxuICAgICAgICAvLyBidXQgaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKClcbiAgICAgICAgLy8gZmFpbHMpXG4gICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgdGFpbCBwYXRoXG4gICAgICAgIHJlc29sdmVkVGFpbCA9IG5vcm1hbGl6ZVN0cmluZyhyZXNvbHZlZFRhaWwsICFyZXNvbHZlZEFic29sdXRlLCAnXFxcXCcsIGlzUGF0aFNlcGFyYXRvcik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZEFic29sdXRlID9cbiAgICAgICAgICAgIGAke3Jlc29sdmVkRGV2aWNlfVxcXFwke3Jlc29sdmVkVGFpbH1gIDpcbiAgICAgICAgICAgIGAke3Jlc29sdmVkRGV2aWNlfSR7cmVzb2x2ZWRUYWlsfWAgfHwgJy4nO1xuICAgIH0sXG4gICAgbm9ybWFsaXplKHBhdGgpIHtcbiAgICAgICAgdmFsaWRhdGVTdHJpbmcocGF0aCwgJ3BhdGgnKTtcbiAgICAgICAgY29uc3QgbGVuID0gcGF0aC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJvb3RFbmQgPSAwO1xuICAgICAgICBsZXQgZGV2aWNlO1xuICAgICAgICBsZXQgaXNBYnNvbHV0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICAgICAgICAvLyBUcnkgdG8gbWF0Y2ggYSByb290XG4gICAgICAgIGlmIChsZW4gPT09IDEpIHtcbiAgICAgICAgICAgIC8vIGBwYXRoYCBjb250YWlucyBqdXN0IGEgc2luZ2xlIGNoYXIsIGV4aXQgZWFybHkgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHVubmVjZXNzYXJ5IHdvcmtcbiAgICAgICAgICAgIHJldHVybiBpc1Bvc2l4UGF0aFNlcGFyYXRvcihjb2RlKSA/ICdcXFxcJyA6IHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUGF0aFNlcGFyYXRvcihjb2RlKSkge1xuICAgICAgICAgICAgLy8gUG9zc2libGUgVU5DIHJvb3RcbiAgICAgICAgICAgIC8vIElmIHdlIHN0YXJ0ZWQgd2l0aCBhIHNlcGFyYXRvciwgd2Uga25vdyB3ZSBhdCBsZWFzdCBoYXZlIGFuIGFic29sdXRlXG4gICAgICAgICAgICAvLyBwYXRoIG9mIHNvbWUga2luZCAoVU5DIG9yIG90aGVyd2lzZSlcbiAgICAgICAgICAgIGlzQWJzb2x1dGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoMSkpKSB7XG4gICAgICAgICAgICAgICAgLy8gTWF0Y2hlZCBkb3VibGUgcGF0aCBzZXBhcmF0b3IgYXQgYmVnaW5uaW5nXG4gICAgICAgICAgICAgICAgbGV0IGogPSAyO1xuICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gajtcbiAgICAgICAgICAgICAgICAvLyBNYXRjaCAxIG9yIG1vcmUgbm9uLXBhdGggc2VwYXJhdG9yc1xuICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbGVuICYmICFpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KGopKSkge1xuICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqIDwgbGVuICYmIGogIT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gcGF0aC5zbGljZShsYXN0LCBqKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2hlZCFcbiAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoIDEgb3IgbW9yZSBwYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGogPCBsZW4gJiYgaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdChqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IGxlbiAmJiBqICE9PSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRjaGVkIVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRjaCAxIG9yIG1vcmUgbm9uLXBhdGggc2VwYXJhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGogPCBsZW4gJiYgIWlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoaikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGxlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG1hdGNoZWQgYSBVTkMgcm9vdCBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIFVOQyByb290IHNpbmNlIHRoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgbm90aGluZyBsZWZ0IHRvIHByb2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxcXFxcXFxcJHtmaXJzdFBhcnR9XFxcXCR7cGF0aC5zbGljZShsYXN0KX1cXFxcYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqICE9PSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF0Y2hlZCBhIFVOQyByb290IHdpdGggbGVmdG92ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2aWNlID0gYFxcXFxcXFxcJHtmaXJzdFBhcnR9XFxcXCR7cGF0aC5zbGljZShsYXN0LCBqKX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RFbmQgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdEVuZCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNXaW5kb3dzRGV2aWNlUm9vdChjb2RlKSAmJiBwYXRoLmNoYXJDb2RlQXQoMSkgPT09IENIQVJfQ09MT04pIHtcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIGRldmljZSByb290XG4gICAgICAgICAgICBkZXZpY2UgPSBwYXRoLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgcm9vdEVuZCA9IDI7XG4gICAgICAgICAgICBpZiAobGVuID4gMiAmJiBpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KDIpKSkge1xuICAgICAgICAgICAgICAgIC8vIFRyZWF0IHNlcGFyYXRvciBmb2xsb3dpbmcgZHJpdmUgbmFtZSBhcyBhbiBhYnNvbHV0ZSBwYXRoXG4gICAgICAgICAgICAgICAgLy8gaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgaXNBYnNvbHV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcm9vdEVuZCA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhaWwgPSByb290RW5kIDwgbGVuID9cbiAgICAgICAgICAgIG5vcm1hbGl6ZVN0cmluZyhwYXRoLnNsaWNlKHJvb3RFbmQpLCAhaXNBYnNvbHV0ZSwgJ1xcXFwnLCBpc1BhdGhTZXBhcmF0b3IpIDpcbiAgICAgICAgICAgICcnO1xuICAgICAgICBpZiAodGFpbC5sZW5ndGggPT09IDAgJiYgIWlzQWJzb2x1dGUpIHtcbiAgICAgICAgICAgIHRhaWwgPSAnLic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhaWwubGVuZ3RoID4gMCAmJiBpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KGxlbiAtIDEpKSkge1xuICAgICAgICAgICAgdGFpbCArPSAnXFxcXCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRldmljZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBYnNvbHV0ZSA/IGBcXFxcJHt0YWlsfWAgOiB0YWlsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0Fic29sdXRlID8gYCR7ZGV2aWNlfVxcXFwke3RhaWx9YCA6IGAke2RldmljZX0ke3RhaWx9YDtcbiAgICB9LFxuICAgIGlzQWJzb2x1dGUocGF0aCkge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZyhwYXRoLCAncGF0aCcpO1xuICAgICAgICBjb25zdCBsZW4gPSBwYXRoLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHJldHVybiBpc1BhdGhTZXBhcmF0b3IoY29kZSkgfHxcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIGRldmljZSByb290XG4gICAgICAgICAgICBsZW4gPiAyICYmXG4gICAgICAgICAgICAgICAgaXNXaW5kb3dzRGV2aWNlUm9vdChjb2RlKSAmJlxuICAgICAgICAgICAgICAgIHBhdGguY2hhckNvZGVBdCgxKSA9PT0gQ0hBUl9DT0xPTiAmJlxuICAgICAgICAgICAgICAgIGlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoMikpO1xuICAgIH0sXG4gICAgam9pbiguLi5wYXRocykge1xuICAgICAgICBpZiAocGF0aHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqb2luZWQ7XG4gICAgICAgIGxldCBmaXJzdFBhcnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZyA9IHBhdGhzW2ldO1xuICAgICAgICAgICAgdmFsaWRhdGVTdHJpbmcoYXJnLCAncGF0aCcpO1xuICAgICAgICAgICAgaWYgKGFyZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpvaW5lZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGpvaW5lZCA9IGZpcnN0UGFydCA9IGFyZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGpvaW5lZCArPSBgXFxcXCR7YXJnfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChqb2luZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgam9pbmVkIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHR3byBzbGFzaGVzLCBiZWNhdXNlXG4gICAgICAgIC8vIG5vcm1hbGl6ZSgpIHdpbGwgbWlzdGFrZSBpdCBmb3IgYW4gVU5DIHBhdGggdGhlbi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhpcyBzdGVwIGlzIHNraXBwZWQgd2hlbiBpdCBpcyB2ZXJ5IGNsZWFyIHRoYXQgdGhlIHVzZXIgYWN0dWFsbHlcbiAgICAgICAgLy8gaW50ZW5kZWQgdG8gcG9pbnQgYXQgYW4gVU5DIHBhdGguIFRoaXMgaXMgYXNzdW1lZCB3aGVuIHRoZSBmaXJzdFxuICAgICAgICAvLyBub24tZW1wdHkgc3RyaW5nIGFyZ3VtZW50cyBzdGFydHMgd2l0aCBleGFjdGx5IHR3byBzbGFzaGVzIGZvbGxvd2VkIGJ5XG4gICAgICAgIC8vIGF0IGxlYXN0IG9uZSBtb3JlIG5vbi1zbGFzaCBjaGFyYWN0ZXIuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE5vdGUgdGhhdCBmb3Igbm9ybWFsaXplKCkgdG8gdHJlYXQgYSBwYXRoIGFzIGFuIFVOQyBwYXRoIGl0IG5lZWRzIHRvXG4gICAgICAgIC8vIGhhdmUgYXQgbGVhc3QgMiBjb21wb25lbnRzLCBzbyB3ZSBkb24ndCBmaWx0ZXIgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgLy8gVGhpcyBtZWFucyB0aGF0IHRoZSB1c2VyIGNhbiB1c2Ugam9pbiB0byBjb25zdHJ1Y3QgVU5DIHBhdGhzIGZyb21cbiAgICAgICAgLy8gYSBzZXJ2ZXIgbmFtZSBhbmQgYSBzaGFyZSBuYW1lOyBmb3IgZXhhbXBsZTpcbiAgICAgICAgLy8gICBwYXRoLmpvaW4oJy8vc2VydmVyJywgJ3NoYXJlJykgLT4gJ1xcXFxcXFxcc2VydmVyXFxcXHNoYXJlXFxcXCcpXG4gICAgICAgIGxldCBuZWVkc1JlcGxhY2UgPSB0cnVlO1xuICAgICAgICBsZXQgc2xhc2hDb3VudCA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgZmlyc3RQYXJ0ID09PSAnc3RyaW5nJyAmJiBpc1BhdGhTZXBhcmF0b3IoZmlyc3RQYXJ0LmNoYXJDb2RlQXQoMCkpKSB7XG4gICAgICAgICAgICArK3NsYXNoQ291bnQ7XG4gICAgICAgICAgICBjb25zdCBmaXJzdExlbiA9IGZpcnN0UGFydC5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoZmlyc3RMZW4gPiAxICYmIGlzUGF0aFNlcGFyYXRvcihmaXJzdFBhcnQuY2hhckNvZGVBdCgxKSkpIHtcbiAgICAgICAgICAgICAgICArK3NsYXNoQ291bnQ7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0TGVuID4gMikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKGZpcnN0UGFydC5jaGFyQ29kZUF0KDIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytzbGFzaENvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF0Y2hlZCBhIFVOQyBwYXRoIGluIHRoZSBmaXJzdCBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkc1JlcGxhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmVlZHNSZXBsYWNlKSB7XG4gICAgICAgICAgICAvLyBGaW5kIGFueSBtb3JlIGNvbnNlY3V0aXZlIHNsYXNoZXMgd2UgbmVlZCB0byByZXBsYWNlXG4gICAgICAgICAgICB3aGlsZSAoc2xhc2hDb3VudCA8IGpvaW5lZC5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBpc1BhdGhTZXBhcmF0b3Ioam9pbmVkLmNoYXJDb2RlQXQoc2xhc2hDb3VudCkpKSB7XG4gICAgICAgICAgICAgICAgc2xhc2hDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgc2xhc2hlcyBpZiBuZWVkZWRcbiAgICAgICAgICAgIGlmIChzbGFzaENvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICBqb2luZWQgPSBgXFxcXCR7am9pbmVkLnNsaWNlKHNsYXNoQ291bnQpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cG9ydHMud2luMzIubm9ybWFsaXplKGpvaW5lZCk7XG4gICAgfSxcbiAgICAvLyBJdCB3aWxsIHNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoIGZyb20gYGZyb21gIHRvIGB0b2AsIGZvciBpbnN0YW5jZTpcbiAgICAvLyAgZnJvbSA9ICdDOlxcXFxvcmFuZGVhXFxcXHRlc3RcXFxcYWFhJ1xuICAgIC8vICB0byA9ICdDOlxcXFxvcmFuZGVhXFxcXGltcGxcXFxcYmJiJ1xuICAgIC8vIFRoZSBvdXRwdXQgb2YgdGhlIGZ1bmN0aW9uIHNob3VsZCBiZTogJy4uXFxcXC4uXFxcXGltcGxcXFxcYmJiJ1xuICAgIHJlbGF0aXZlKGZyb20sIHRvKSB7XG4gICAgICAgIHZhbGlkYXRlU3RyaW5nKGZyb20sICdmcm9tJyk7XG4gICAgICAgIHZhbGlkYXRlU3RyaW5nKHRvLCAndG8nKTtcbiAgICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJvbU9yaWcgPSBleHBvcnRzLndpbjMyLnJlc29sdmUoZnJvbSk7XG4gICAgICAgIGNvbnN0IHRvT3JpZyA9IGV4cG9ydHMud2luMzIucmVzb2x2ZSh0byk7XG4gICAgICAgIGlmIChmcm9tT3JpZyA9PT0gdG9PcmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZnJvbSA9IGZyb21PcmlnLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRvID0gdG9PcmlnLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyaW0gYW55IGxlYWRpbmcgYmFja3NsYXNoZXNcbiAgICAgICAgbGV0IGZyb21TdGFydCA9IDA7XG4gICAgICAgIHdoaWxlIChmcm9tU3RhcnQgPCBmcm9tLmxlbmd0aCAmJlxuICAgICAgICAgICAgZnJvbS5jaGFyQ29kZUF0KGZyb21TdGFydCkgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgIGZyb21TdGFydCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyaW0gdHJhaWxpbmcgYmFja3NsYXNoZXMgKGFwcGxpY2FibGUgdG8gVU5DIHBhdGhzIG9ubHkpXG4gICAgICAgIGxldCBmcm9tRW5kID0gZnJvbS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChmcm9tRW5kIC0gMSA+IGZyb21TdGFydCAmJlxuICAgICAgICAgICAgZnJvbS5jaGFyQ29kZUF0KGZyb21FbmQgLSAxKSA9PT0gQ0hBUl9CQUNLV0FSRF9TTEFTSCkge1xuICAgICAgICAgICAgZnJvbUVuZC0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyb21MZW4gPSBmcm9tRW5kIC0gZnJvbVN0YXJ0O1xuICAgICAgICAvLyBUcmltIGFueSBsZWFkaW5nIGJhY2tzbGFzaGVzXG4gICAgICAgIGxldCB0b1N0YXJ0ID0gMDtcbiAgICAgICAgd2hpbGUgKHRvU3RhcnQgPCB0by5sZW5ndGggJiZcbiAgICAgICAgICAgIHRvLmNoYXJDb2RlQXQodG9TdGFydCkgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgIHRvU3RhcnQrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmltIHRyYWlsaW5nIGJhY2tzbGFzaGVzIChhcHBsaWNhYmxlIHRvIFVOQyBwYXRocyBvbmx5KVxuICAgICAgICBsZXQgdG9FbmQgPSB0by5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0b0VuZCAtIDEgPiB0b1N0YXJ0ICYmXG4gICAgICAgICAgICB0by5jaGFyQ29kZUF0KHRvRW5kIC0gMSkgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgIHRvRW5kLS07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9MZW4gPSB0b0VuZCAtIHRvU3RhcnQ7XG4gICAgICAgIC8vIENvbXBhcmUgcGF0aHMgdG8gZmluZCB0aGUgbG9uZ2VzdCBjb21tb24gcGF0aCBmcm9tIHJvb3RcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZnJvbUxlbiA8IHRvTGVuID8gZnJvbUxlbiA6IHRvTGVuO1xuICAgICAgICBsZXQgbGFzdENvbW1vblNlcCA9IC0xO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb21Db2RlID0gZnJvbS5jaGFyQ29kZUF0KGZyb21TdGFydCArIGkpO1xuICAgICAgICAgICAgaWYgKGZyb21Db2RlICE9PSB0by5jaGFyQ29kZUF0KHRvU3RhcnQgKyBpKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnJvbUNvZGUgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBsYXN0Q29tbW9uU2VwID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBmb3VuZCBhIG1pc21hdGNoIGJlZm9yZSB0aGUgZmlyc3QgY29tbW9uIHBhdGggc2VwYXJhdG9yIHdhcyBzZWVuLCBzb1xuICAgICAgICAvLyByZXR1cm4gdGhlIG9yaWdpbmFsIGB0b2AuXG4gICAgICAgIGlmIChpICE9PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChsYXN0Q29tbW9uU2VwID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b09yaWc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodG9MZW4gPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodG8uY2hhckNvZGVBdCh0b1N0YXJ0ICsgaSkgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZ2V0IGhlcmUgaWYgYGZyb21gIGlzIHRoZSBleGFjdCBiYXNlIHBhdGggZm9yIGB0b2AuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPSdDOlxcXFxmb29cXFxcYmFyJzsgdG89J0M6XFxcXGZvb1xcXFxiYXJcXFxcYmF6J1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9PcmlnLnNsaWNlKHRvU3RhcnQgKyBpICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGdldCBoZXJlIGlmIGBmcm9tYCBpcyB0aGUgZGV2aWNlIHJvb3QuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPSdDOlxcXFwnOyB0bz0nQzpcXFxcZm9vJ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9PcmlnLnNsaWNlKHRvU3RhcnQgKyBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnJvbUxlbiA+IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tLmNoYXJDb2RlQXQoZnJvbVN0YXJ0ICsgaSkgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZ2V0IGhlcmUgaWYgYHRvYCBpcyB0aGUgZXhhY3QgYmFzZSBwYXRoIGZvciBgZnJvbWAuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPSdDOlxcXFxmb29cXFxcYmFyJzsgdG89J0M6XFxcXGZvbydcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbW1vblNlcCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZ2V0IGhlcmUgaWYgYHRvYCBpcyB0aGUgZGV2aWNlIHJvb3QuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPSdDOlxcXFxmb29cXFxcYmFyJzsgdG89J0M6XFxcXCdcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbW1vblNlcCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3RDb21tb25TZXAgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGFzdENvbW1vblNlcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgcmVsYXRpdmUgcGF0aCBiYXNlZCBvbiB0aGUgcGF0aCBkaWZmZXJlbmNlIGJldHdlZW4gYHRvYCBhbmRcbiAgICAgICAgLy8gYGZyb21gXG4gICAgICAgIGZvciAoaSA9IGZyb21TdGFydCArIGxhc3RDb21tb25TZXAgKyAxOyBpIDw9IGZyb21FbmQ7ICsraSkge1xuICAgICAgICAgICAgaWYgKGkgPT09IGZyb21FbmQgfHwgZnJvbS5jaGFyQ29kZUF0KGkpID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IG91dC5sZW5ndGggPT09IDAgPyAnLi4nIDogJ1xcXFwuLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9TdGFydCArPSBsYXN0Q29tbW9uU2VwO1xuICAgICAgICAvLyBMYXN0bHksIGFwcGVuZCB0aGUgcmVzdCBvZiB0aGUgZGVzdGluYXRpb24gKGB0b2ApIHBhdGggdGhhdCBjb21lcyBhZnRlclxuICAgICAgICAvLyB0aGUgY29tbW9uIHBhdGggcGFydHNcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7b3V0fSR7dG9PcmlnLnNsaWNlKHRvU3RhcnQsIHRvRW5kKX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b09yaWcuY2hhckNvZGVBdCh0b1N0YXJ0KSA9PT0gQ0hBUl9CQUNLV0FSRF9TTEFTSCkge1xuICAgICAgICAgICAgKyt0b1N0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b09yaWcuc2xpY2UodG9TdGFydCwgdG9FbmQpO1xuICAgIH0sXG4gICAgdG9OYW1lc3BhY2VkUGF0aChwYXRoKSB7XG4gICAgICAgIC8vIE5vdGU6IHRoaXMgd2lsbCAqcHJvYmFibHkqIHRocm93IHNvbWV3aGVyZS5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gZXhwb3J0cy53aW4zMi5yZXNvbHZlKHBhdGgpO1xuICAgICAgICBpZiAocmVzb2x2ZWRQYXRoLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb2x2ZWRQYXRoLmNoYXJDb2RlQXQoMCkgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIFVOQyByb290XG4gICAgICAgICAgICBpZiAocmVzb2x2ZWRQYXRoLmNoYXJDb2RlQXQoMSkgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gcmVzb2x2ZWRQYXRoLmNoYXJDb2RlQXQoMik7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgIT09IENIQVJfUVVFU1RJT05fTUFSSyAmJiBjb2RlICE9PSBDSEFSX0RPVCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXRjaGVkIG5vbi1sb25nIFVOQyByb290LCBjb252ZXJ0IHRoZSBwYXRoIHRvIGEgbG9uZyBVTkMgcGF0aFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxcXFxcXFxcP1xcXFxVTkNcXFxcJHtyZXNvbHZlZFBhdGguc2xpY2UoMil9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNXaW5kb3dzRGV2aWNlUm9vdChyZXNvbHZlZFBhdGguY2hhckNvZGVBdCgwKSkgJiZcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aC5jaGFyQ29kZUF0KDEpID09PSBDSEFSX0NPTE9OICYmXG4gICAgICAgICAgICByZXNvbHZlZFBhdGguY2hhckNvZGVBdCgyKSA9PT0gQ0hBUl9CQUNLV0FSRF9TTEFTSCkge1xuICAgICAgICAgICAgLy8gTWF0Y2hlZCBkZXZpY2Ugcm9vdCwgY29udmVydCB0aGUgcGF0aCB0byBhIGxvbmcgVU5DIHBhdGhcbiAgICAgICAgICAgIHJldHVybiBgXFxcXFxcXFw/XFxcXCR7cmVzb2x2ZWRQYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSxcbiAgICBkaXJuYW1lKHBhdGgpIHtcbiAgICAgICAgdmFsaWRhdGVTdHJpbmcocGF0aCwgJ3BhdGgnKTtcbiAgICAgICAgY29uc3QgbGVuID0gcGF0aC5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJvb3RFbmQgPSAtMTtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChsZW4gPT09IDEpIHtcbiAgICAgICAgICAgIC8vIGBwYXRoYCBjb250YWlucyBqdXN0IGEgcGF0aCBzZXBhcmF0b3IsIGV4aXQgZWFybHkgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHVubmVjZXNzYXJ5IHdvcmsgb3IgYSBkb3QuXG4gICAgICAgICAgICByZXR1cm4gaXNQYXRoU2VwYXJhdG9yKGNvZGUpID8gcGF0aCA6ICcuJztcbiAgICAgICAgfVxuICAgICAgICAvLyBUcnkgdG8gbWF0Y2ggYSByb290XG4gICAgICAgIGlmIChpc1BhdGhTZXBhcmF0b3IoY29kZSkpIHtcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIFVOQyByb290XG4gICAgICAgICAgICByb290RW5kID0gb2Zmc2V0ID0gMTtcbiAgICAgICAgICAgIGlmIChpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KDEpKSkge1xuICAgICAgICAgICAgICAgIC8vIE1hdGNoZWQgZG91YmxlIHBhdGggc2VwYXJhdG9yIGF0IGJlZ2lubmluZ1xuICAgICAgICAgICAgICAgIGxldCBqID0gMjtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdCA9IGo7XG4gICAgICAgICAgICAgICAgLy8gTWF0Y2ggMSBvciBtb3JlIG5vbi1wYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IGxlbiAmJiAhaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdChqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaiA8IGxlbiAmJiBqICE9PSBsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoZWQhXG4gICAgICAgICAgICAgICAgICAgIGxhc3QgPSBqO1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXRjaCAxIG9yIG1vcmUgcGF0aCBzZXBhcmF0b3JzXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbGVuICYmIGlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoaikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBsZW4gJiYgaiAhPT0gbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2hlZCFcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggMSBvciBtb3JlIG5vbi1wYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChqIDwgbGVuICYmICFpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KGopKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXRjaGVkIGEgVU5DIHJvb3Qgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogIT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXRjaGVkIGEgVU5DIHJvb3Qgd2l0aCBsZWZ0b3ZlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPZmZzZXQgYnkgMSB0byBpbmNsdWRlIHRoZSBzZXBhcmF0b3IgYWZ0ZXIgdGhlIFVOQyByb290IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYXQgaXQgYXMgYSBcIm5vcm1hbCByb290XCIgb24gdG9wIG9mIGEgKFVOQykgcm9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RFbmQgPSBvZmZzZXQgPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIGRldmljZSByb290XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNXaW5kb3dzRGV2aWNlUm9vdChjb2RlKSAmJiBwYXRoLmNoYXJDb2RlQXQoMSkgPT09IENIQVJfQ09MT04pIHtcbiAgICAgICAgICAgIHJvb3RFbmQgPSBsZW4gPiAyICYmIGlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoMikpID8gMyA6IDI7XG4gICAgICAgICAgICBvZmZzZXQgPSByb290RW5kO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbmQgPSAtMTtcbiAgICAgICAgbGV0IG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZW4gLSAxOyBpID49IG9mZnNldDsgLS1pKSB7XG4gICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAgICAgICBpZiAocm9vdEVuZCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kID0gcm9vdEVuZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xuICAgIH0sXG4gICAgYmFzZW5hbWUocGF0aCwgZXh0KSB7XG4gICAgICAgIGlmIChleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVTdHJpbmcoZXh0LCAnZXh0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsaWRhdGVTdHJpbmcocGF0aCwgJ3BhdGgnKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IC0xO1xuICAgICAgICBsZXQgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIC8vIENoZWNrIGZvciBhIGRyaXZlIGxldHRlciBwcmVmaXggc28gYXMgbm90IHRvIG1pc3Rha2UgdGhlIGZvbGxvd2luZ1xuICAgICAgICAvLyBwYXRoIHNlcGFyYXRvciBhcyBhbiBleHRyYSBzZXBhcmF0b3IgYXQgdGhlIGVuZCBvZiB0aGUgcGF0aCB0aGF0IGNhbiBiZVxuICAgICAgICAvLyBkaXNyZWdhcmRlZFxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPj0gMiAmJlxuICAgICAgICAgICAgaXNXaW5kb3dzRGV2aWNlUm9vdChwYXRoLmNoYXJDb2RlQXQoMCkpICYmXG4gICAgICAgICAgICBwYXRoLmNoYXJDb2RlQXQoMSkgPT09IENIQVJfQ09MT04pIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXh0ICE9PSB1bmRlZmluZWQgJiYgZXh0Lmxlbmd0aCA+IDAgJiYgZXh0Lmxlbmd0aCA8PSBwYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGV4dCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRJZHggPSBleHQubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5vblNsYXNoRW5kID0gLTE7XG4gICAgICAgICAgICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gc3RhcnQ7IC0taSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGF0aFNlcGFyYXRvcihjb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAgICAgICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0Tm9uU2xhc2hFbmQgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgcmVtZW1iZXIgdGhpcyBpbmRleCBpbiBjYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIGl0IGlmIHRoZSBleHRlbnNpb24gZW5kcyB1cCBub3QgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROb25TbGFzaEVuZCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRJZHggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBleHBsaWNpdCBleHRlbnNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSBleHQuY2hhckNvZGVBdChleHRJZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0tZXh0SWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXRjaGVkIHRoZSBleHRlbnNpb24sIHNvIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91ciBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dGVuc2lvbiBkb2VzIG5vdCBtYXRjaCwgc28gb3VyIHJlc3VsdCBpcyB0aGUgZW50aXJlIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRJZHggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSBmaXJzdE5vblNsYXNoRW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBmaXJzdE5vblNsYXNoRW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHBhdGgubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IHN0YXJ0OyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgICAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgICAgICAgICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVuZCA9IGkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfSxcbiAgICBleHRuYW1lKHBhdGgpIHtcbiAgICAgICAgdmFsaWRhdGVTdHJpbmcocGF0aCwgJ3BhdGgnKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgICAgbGV0IHN0YXJ0RG90ID0gLTE7XG4gICAgICAgIGxldCBzdGFydFBhcnQgPSAwO1xuICAgICAgICBsZXQgZW5kID0gLTE7XG4gICAgICAgIGxldCBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAgICAgICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gICAgICAgIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gICAgICAgIGxldCBwcmVEb3RTdGF0ZSA9IDA7XG4gICAgICAgIC8vIENoZWNrIGZvciBhIGRyaXZlIGxldHRlciBwcmVmaXggc28gYXMgbm90IHRvIG1pc3Rha2UgdGhlIGZvbGxvd2luZ1xuICAgICAgICAvLyBwYXRoIHNlcGFyYXRvciBhcyBhbiBleHRyYSBzZXBhcmF0b3IgYXQgdGhlIGVuZCBvZiB0aGUgcGF0aCB0aGF0IGNhbiBiZVxuICAgICAgICAvLyBkaXNyZWdhcmRlZFxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPj0gMiAmJlxuICAgICAgICAgICAgcGF0aC5jaGFyQ29kZUF0KDEpID09PSBDSEFSX0NPTE9OICYmXG4gICAgICAgICAgICBpc1dpbmRvd3NEZXZpY2VSb290KHBhdGguY2hhckNvZGVBdCgwKSkpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gc3RhcnRQYXJ0ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IHN0YXJ0OyAtLWkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAgICAgICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZW5kID0gaSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9ET1QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEgfHxcbiAgICAgICAgICAgIGVuZCA9PT0gLTEgfHxcbiAgICAgICAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICAgICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgICAgICAgKHByZURvdFN0YXRlID09PSAxICYmXG4gICAgICAgICAgICAgICAgc3RhcnREb3QgPT09IGVuZCAtIDEgJiZcbiAgICAgICAgICAgICAgICBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbiAgICB9LFxuICAgIGZvcm1hdDogX2Zvcm1hdC5iaW5kKG51bGwsICdcXFxcJyksXG4gICAgcGFyc2UocGF0aCkge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZyhwYXRoLCAncGF0aCcpO1xuICAgICAgICBjb25zdCByZXQgPSB7IHJvb3Q6ICcnLCBkaXI6ICcnLCBiYXNlOiAnJywgZXh0OiAnJywgbmFtZTogJycgfTtcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IHBhdGgubGVuZ3RoO1xuICAgICAgICBsZXQgcm9vdEVuZCA9IDA7XG4gICAgICAgIGxldCBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAobGVuID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gYHBhdGhgIGNvbnRhaW5zIGp1c3QgYSBwYXRoIHNlcGFyYXRvciwgZXhpdCBlYXJseSB0byBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHVubmVjZXNzYXJ5IHdvcmtcbiAgICAgICAgICAgICAgICByZXQucm9vdCA9IHJldC5kaXIgPSBwYXRoO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQuYmFzZSA9IHJldC5uYW1lID0gcGF0aDtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJ5IHRvIG1hdGNoIGEgcm9vdFxuICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKGNvZGUpKSB7XG4gICAgICAgICAgICAvLyBQb3NzaWJsZSBVTkMgcm9vdFxuICAgICAgICAgICAgcm9vdEVuZCA9IDE7XG4gICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdCgxKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXRjaGVkIGRvdWJsZSBwYXRoIHNlcGFyYXRvciBhdCBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICBsZXQgaiA9IDI7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3QgPSBqO1xuICAgICAgICAgICAgICAgIC8vIE1hdGNoIDEgb3IgbW9yZSBub24tcGF0aCBzZXBhcmF0b3JzXG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPCBsZW4gJiYgIWlzUGF0aFNlcGFyYXRvcihwYXRoLmNoYXJDb2RlQXQoaikpKSB7XG4gICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGogPCBsZW4gJiYgaiAhPT0gbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYXRjaGVkIVxuICAgICAgICAgICAgICAgICAgICBsYXN0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggMSBvciBtb3JlIHBhdGggc2VwYXJhdG9yc1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IGxlbiAmJiBpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KGopKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChqIDwgbGVuICYmIGogIT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoZWQhXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0ID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoIDEgb3IgbW9yZSBub24tcGF0aCBzZXBhcmF0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaiA8IGxlbiAmJiAhaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdChqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF0Y2hlZCBhIFVOQyByb290IG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290RW5kID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGogIT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXRjaGVkIGEgVU5DIHJvb3Qgd2l0aCBsZWZ0b3ZlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290RW5kID0gaiArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNXaW5kb3dzRGV2aWNlUm9vdChjb2RlKSAmJiBwYXRoLmNoYXJDb2RlQXQoMSkgPT09IENIQVJfQ09MT04pIHtcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIGRldmljZSByb290XG4gICAgICAgICAgICBpZiAobGVuIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBgcGF0aGAgY29udGFpbnMganVzdCBhIGRyaXZlIHJvb3QsIGV4aXQgZWFybHkgdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAvLyB1bm5lY2Vzc2FyeSB3b3JrXG4gICAgICAgICAgICAgICAgcmV0LnJvb3QgPSByZXQuZGlyID0gcGF0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm9vdEVuZCA9IDI7XG4gICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdCgyKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGVuID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBwYXRoYCBjb250YWlucyBqdXN0IGEgZHJpdmUgcm9vdCwgZXhpdCBlYXJseSB0byBhdm9pZFxuICAgICAgICAgICAgICAgICAgICAvLyB1bm5lY2Vzc2FyeSB3b3JrXG4gICAgICAgICAgICAgICAgICAgIHJldC5yb290ID0gcmV0LmRpciA9IHBhdGg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvb3RFbmQgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb290RW5kID4gMCkge1xuICAgICAgICAgICAgcmV0LnJvb3QgPSBwYXRoLnNsaWNlKDAsIHJvb3RFbmQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydERvdCA9IC0xO1xuICAgICAgICBsZXQgc3RhcnRQYXJ0ID0gcm9vdEVuZDtcbiAgICAgICAgbGV0IGVuZCA9IC0xO1xuICAgICAgICBsZXQgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgICAgICAgbGV0IGkgPSBwYXRoLmxlbmd0aCAtIDE7XG4gICAgICAgIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgICAgICAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgICAgICAgbGV0IHByZURvdFN0YXRlID0gMDtcbiAgICAgICAgLy8gR2V0IG5vbi1kaXIgaW5mb1xuICAgICAgICBmb3IgKDsgaSA+PSByb290RW5kOyAtLWkpIHtcbiAgICAgICAgICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAgICAgICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZW5kID0gaSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9ET1QpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbmQgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgICAgICAgICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgICAgICAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgICAgICAgICAgICAocHJlRG90U3RhdGUgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREb3QgPT09IGVuZCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0LmJhc2UgPSByZXQubmFtZSA9IHBhdGguc2xpY2Uoc3RhcnRQYXJ0LCBlbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0Lm5hbWUgPSBwYXRoLnNsaWNlKHN0YXJ0UGFydCwgc3RhcnREb3QpO1xuICAgICAgICAgICAgICAgIHJldC5iYXNlID0gcGF0aC5zbGljZShzdGFydFBhcnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgcmV0LmV4dCA9IHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGRpcmVjdG9yeSBpcyB0aGUgcm9vdCwgdXNlIHRoZSBlbnRpcmUgcm9vdCBhcyB0aGUgYGRpcmAgaW5jbHVkaW5nXG4gICAgICAgIC8vIHRoZSB0cmFpbGluZyBzbGFzaCBpZiBhbnkgKGBDOlxcYWJjYCAtPiBgQzpcXGApLiBPdGhlcndpc2UsIHN0cmlwIG91dCB0aGVcbiAgICAgICAgLy8gdHJhaWxpbmcgc2xhc2ggKGBDOlxcYWJjXFxkZWZgIC0+IGBDOlxcYWJjYCkuXG4gICAgICAgIGlmIChzdGFydFBhcnQgPiAwICYmIHN0YXJ0UGFydCAhPT0gcm9vdEVuZCkge1xuICAgICAgICAgICAgcmV0LmRpciA9IHBhdGguc2xpY2UoMCwgc3RhcnRQYXJ0IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXQuZGlyID0gcmV0LnJvb3Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIHNlcDogJ1xcXFwnLFxuICAgIGRlbGltaXRlcjogJzsnLFxuICAgIHdpbjMyOiBudWxsLFxuICAgIHBvc2l4OiBudWxsXG59O1xuZXhwb3J0cy5wb3NpeCA9IHtcbiAgICAvLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4gICAgcmVzb2x2ZSguLi5wYXRoU2VnbWVudHMpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkUGF0aCA9ICcnO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gcGF0aFNlZ21lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGkgPj0gMCA/IHBhdGhTZWdtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG4gICAgICAgICAgICB2YWxpZGF0ZVN0cmluZyhwYXRoLCAncGF0aCcpO1xuICAgICAgICAgICAgLy8gU2tpcCBlbXB0eSBlbnRyaWVzXG4gICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCA9IGAke3BhdGh9LyR7cmVzb2x2ZWRQYXRofWA7XG4gICAgICAgICAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQ29kZUF0KDApID09PSBDSEFSX0ZPUldBUkRfU0xBU0g7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAgICAgICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gICAgICAgIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZVN0cmluZyhyZXNvbHZlZFBhdGgsICFyZXNvbHZlZEFic29sdXRlLCAnLycsIGlzUG9zaXhQYXRoU2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKHJlc29sdmVkQWJzb2x1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb2x2ZWRQYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkUGF0aC5sZW5ndGggPiAwID8gcmVzb2x2ZWRQYXRoIDogJy4nO1xuICAgIH0sXG4gICAgbm9ybWFsaXplKHBhdGgpIHtcbiAgICAgICAgdmFsaWRhdGVTdHJpbmcocGF0aCwgJ3BhdGgnKTtcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQWJzb2x1dGUgPSBwYXRoLmNoYXJDb2RlQXQoMCkgPT09IENIQVJfRk9SV0FSRF9TTEFTSDtcbiAgICAgICAgY29uc3QgdHJhaWxpbmdTZXBhcmF0b3IgPSBwYXRoLmNoYXJDb2RlQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIO1xuICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgICAgICAgcGF0aCA9IG5vcm1hbGl6ZVN0cmluZyhwYXRoLCAhaXNBYnNvbHV0ZSwgJy8nLCBpc1Bvc2l4UGF0aFNlcGFyYXRvcik7XG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzQWJzb2x1dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRyYWlsaW5nU2VwYXJhdG9yID8gJy4vJyA6ICcuJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhaWxpbmdTZXBhcmF0b3IpIHtcbiAgICAgICAgICAgIHBhdGggKz0gJy8nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0Fic29sdXRlID8gYC8ke3BhdGh9YCA6IHBhdGg7XG4gICAgfSxcbiAgICBpc0Fic29sdXRlKHBhdGgpIHtcbiAgICAgICAgdmFsaWRhdGVTdHJpbmcocGF0aCwgJ3BhdGgnKTtcbiAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoID4gMCAmJiBwYXRoLmNoYXJDb2RlQXQoMCkgPT09IENIQVJfRk9SV0FSRF9TTEFTSDtcbiAgICB9LFxuICAgIGpvaW4oLi4ucGF0aHMpIHtcbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgam9pbmVkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBhcmcgPSBwYXRoc1tpXTtcbiAgICAgICAgICAgIHZhbGlkYXRlU3RyaW5nKGFyZywgJ3BhdGgnKTtcbiAgICAgICAgICAgIGlmIChhcmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChqb2luZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBqb2luZWQgPSBhcmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBqb2luZWQgKz0gYC8ke2FyZ31gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoam9pbmVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cG9ydHMucG9zaXgubm9ybWFsaXplKGpvaW5lZCk7XG4gICAgfSxcbiAgICByZWxhdGl2ZShmcm9tLCB0bykge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZyhmcm9tLCAnZnJvbScpO1xuICAgICAgICB2YWxpZGF0ZVN0cmluZyh0bywgJ3RvJyk7XG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyaW0gbGVhZGluZyBmb3J3YXJkIHNsYXNoZXMuXG4gICAgICAgIGZyb20gPSBleHBvcnRzLnBvc2l4LnJlc29sdmUoZnJvbSk7XG4gICAgICAgIHRvID0gZXhwb3J0cy5wb3NpeC5yZXNvbHZlKHRvKTtcbiAgICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJvbVN0YXJ0ID0gMTtcbiAgICAgICAgY29uc3QgZnJvbUVuZCA9IGZyb20ubGVuZ3RoO1xuICAgICAgICBjb25zdCBmcm9tTGVuID0gZnJvbUVuZCAtIGZyb21TdGFydDtcbiAgICAgICAgY29uc3QgdG9TdGFydCA9IDE7XG4gICAgICAgIGNvbnN0IHRvTGVuID0gdG8ubGVuZ3RoIC0gdG9TdGFydDtcbiAgICAgICAgLy8gQ29tcGFyZSBwYXRocyB0byBmaW5kIHRoZSBsb25nZXN0IGNvbW1vbiBwYXRoIGZyb20gcm9vdFxuICAgICAgICBjb25zdCBsZW5ndGggPSAoZnJvbUxlbiA8IHRvTGVuID8gZnJvbUxlbiA6IHRvTGVuKTtcbiAgICAgICAgbGV0IGxhc3RDb21tb25TZXAgPSAtMTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tQ29kZSA9IGZyb20uY2hhckNvZGVBdChmcm9tU3RhcnQgKyBpKTtcbiAgICAgICAgICAgIGlmIChmcm9tQ29kZSAhPT0gdG8uY2hhckNvZGVBdCh0b1N0YXJ0ICsgaSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZyb21Db2RlID09PSBDSEFSX0ZPUldBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBsYXN0Q29tbW9uU2VwID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodG9MZW4gPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodG8uY2hhckNvZGVBdCh0b1N0YXJ0ICsgaSkgPT09IENIQVJfRk9SV0FSRF9TTEFTSCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBnZXQgaGVyZSBpZiBgZnJvbWAgaXMgdGhlIGV4YWN0IGJhc2UgcGF0aCBmb3IgYHRvYC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGU6IGZyb209Jy9mb28vYmFyJzsgdG89Jy9mb28vYmFyL2JheidcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvLnNsaWNlKHRvU3RhcnQgKyBpICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGdldCBoZXJlIGlmIGBmcm9tYCBpcyB0aGUgcm9vdFxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZXhhbXBsZTogZnJvbT0nLyc7IHRvPScvZm9vJ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG8uc2xpY2UodG9TdGFydCArIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZyb21MZW4gPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbS5jaGFyQ29kZUF0KGZyb21TdGFydCArIGkpID09PSBDSEFSX0ZPUldBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZ2V0IGhlcmUgaWYgYHRvYCBpcyB0aGUgZXhhY3QgYmFzZSBwYXRoIGZvciBgZnJvbWAuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPScvZm9vL2Jhci9iYXonOyB0bz0nL2Zvby9iYXInXG4gICAgICAgICAgICAgICAgICAgIGxhc3RDb21tb25TZXAgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGdldCBoZXJlIGlmIGB0b2AgaXMgdGhlIHJvb3QuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBleGFtcGxlOiBmcm9tPScvZm9vL2Jhcic7IHRvPScvJ1xuICAgICAgICAgICAgICAgICAgICBsYXN0Q29tbW9uU2VwID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgcmVsYXRpdmUgcGF0aCBiYXNlZCBvbiB0aGUgcGF0aCBkaWZmZXJlbmNlIGJldHdlZW4gYHRvYFxuICAgICAgICAvLyBhbmQgYGZyb21gLlxuICAgICAgICBmb3IgKGkgPSBmcm9tU3RhcnQgKyBsYXN0Q29tbW9uU2VwICsgMTsgaSA8PSBmcm9tRW5kOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChpID09PSBmcm9tRW5kIHx8IGZyb20uY2hhckNvZGVBdChpKSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IG91dC5sZW5ndGggPT09IDAgPyAnLi4nIDogJy8uLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGFzdGx5LCBhcHBlbmQgdGhlIHJlc3Qgb2YgdGhlIGRlc3RpbmF0aW9uIChgdG9gKSBwYXRoIHRoYXQgY29tZXMgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIGNvbW1vbiBwYXRoIHBhcnRzLlxuICAgICAgICByZXR1cm4gYCR7b3V0fSR7dG8uc2xpY2UodG9TdGFydCArIGxhc3RDb21tb25TZXApfWA7XG4gICAgfSxcbiAgICB0b05hbWVzcGFjZWRQYXRoKHBhdGgpIHtcbiAgICAgICAgLy8gTm9uLW9wIG9uIHBvc2l4IHN5c3RlbXNcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSxcbiAgICBkaXJuYW1lKHBhdGgpIHtcbiAgICAgICAgdmFsaWRhdGVTdHJpbmcocGF0aCwgJ3BhdGgnKTtcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc1Jvb3QgPSBwYXRoLmNoYXJDb2RlQXQoMCkgPT09IENIQVJfRk9SV0FSRF9TTEFTSDtcbiAgICAgICAgbGV0IGVuZCA9IC0xO1xuICAgICAgICBsZXQgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IENIQVJfRk9SV0FSRF9TTEFTSCkge1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICcvLyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbiAgICB9LFxuICAgIGJhc2VuYW1lKHBhdGgsIGV4dCkge1xuICAgICAgICBpZiAoZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlU3RyaW5nKGV4dCwgJ2V4dCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhbGlkYXRlU3RyaW5nKHBhdGgsICdwYXRoJyk7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSAtMTtcbiAgICAgICAgbGV0IG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBpZiAoZXh0ICE9PSB1bmRlZmluZWQgJiYgZXh0Lmxlbmd0aCA+IDAgJiYgZXh0Lmxlbmd0aCA8PSBwYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGV4dCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRJZHggPSBleHQubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5vblNsYXNoRW5kID0gLTE7XG4gICAgICAgICAgICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3ROb25TbGFzaEVuZCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCByZW1lbWJlciB0aGlzIGluZGV4IGluIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgaXQgaWYgdGhlIGV4dGVuc2lvbiBlbmRzIHVwIG5vdCBtYXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5vblNsYXNoRW5kID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dElkeCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGV4cGxpY2l0IGV4dGVuc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IGV4dC5jaGFyQ29kZUF0KGV4dElkeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLS1leHRJZHggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG1hdGNoZWQgdGhlIGV4dGVuc2lvbiwgc28gbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXh0ZW5zaW9uIGRvZXMgbm90IG1hdGNoLCBzbyBvdXIgcmVzdWx0IGlzIHRoZSBlbnRpcmUgcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dElkeCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IGZpcnN0Tm9uU2xhc2hFbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGZpcnN0Tm9uU2xhc2hFbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gcGF0aC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSBDSEFSX0ZPUldBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAgICAgICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbmQgPSBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH0sXG4gICAgZXh0bmFtZShwYXRoKSB7XG4gICAgICAgIHZhbGlkYXRlU3RyaW5nKHBhdGgsICdwYXRoJyk7XG4gICAgICAgIGxldCBzdGFydERvdCA9IC0xO1xuICAgICAgICBsZXQgc3RhcnRQYXJ0ID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IC0xO1xuICAgICAgICBsZXQgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgICAgICAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAgICAgICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICAgICAgICBsZXQgcHJlRG90U3RhdGUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSBDSEFSX0ZPUldBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgICAgICAgICAgICAvLyBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbmQgPSBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlID09PSBDSEFSX0RPVCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICAgICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgICAgICAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fFxuICAgICAgICAgICAgZW5kID09PSAtMSB8fFxuICAgICAgICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgICAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAgICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICAgICAgICAocHJlRG90U3RhdGUgPT09IDEgJiZcbiAgICAgICAgICAgICAgICBzdGFydERvdCA9PT0gZW5kIC0gMSAmJlxuICAgICAgICAgICAgICAgIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xuICAgIH0sXG4gICAgZm9ybWF0OiBfZm9ybWF0LmJpbmQobnVsbCwgJy8nKSxcbiAgICBwYXJzZShwYXRoKSB7XG4gICAgICAgIHZhbGlkYXRlU3RyaW5nKHBhdGgsICdwYXRoJyk7XG4gICAgICAgIGNvbnN0IHJldCA9IHsgcm9vdDogJycsIGRpcjogJycsIGJhc2U6ICcnLCBleHQ6ICcnLCBuYW1lOiAnJyB9O1xuICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNBYnNvbHV0ZSA9IHBhdGguY2hhckNvZGVBdCgwKSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIO1xuICAgICAgICBsZXQgc3RhcnQ7XG4gICAgICAgIGlmIChpc0Fic29sdXRlKSB7XG4gICAgICAgICAgICByZXQucm9vdCA9ICcvJztcbiAgICAgICAgICAgIHN0YXJ0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RhcnREb3QgPSAtMTtcbiAgICAgICAgbGV0IHN0YXJ0UGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSAtMTtcbiAgICAgICAgbGV0IG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gICAgICAgIGxldCBpID0gcGF0aC5sZW5ndGggLSAxO1xuICAgICAgICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gICAgICAgIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gICAgICAgIGxldCBwcmVEb3RTdGF0ZSA9IDA7XG4gICAgICAgIC8vIEdldCBub24tZGlyIGluZm9cbiAgICAgICAgZm9yICg7IGkgPj0gc3RhcnQ7IC0taSkge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSBDSEFSX0ZPUldBUkRfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAgICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgICAgICAgICAgICAvLyBleHRlbnNpb25cbiAgICAgICAgICAgICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbmQgPSBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2RlID09PSBDSEFSX0RPVCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICAgICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgICAgICAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRQYXJ0ID09PSAwICYmIGlzQWJzb2x1dGUgPyAxIDogc3RhcnRQYXJ0O1xuICAgICAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fFxuICAgICAgICAgICAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICAgICAgICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgICAgICAgICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICAgICAgICAgICAgKHByZURvdFN0YXRlID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSkge1xuICAgICAgICAgICAgICAgIHJldC5iYXNlID0gcmV0Lm5hbWUgPSBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0Lm5hbWUgPSBwYXRoLnNsaWNlKHN0YXJ0LCBzdGFydERvdCk7XG4gICAgICAgICAgICAgICAgcmV0LmJhc2UgPSBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgICAgIHJldC5leHQgPSBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydFBhcnQgPiAwKSB7XG4gICAgICAgICAgICByZXQuZGlyID0gcGF0aC5zbGljZSgwLCBzdGFydFBhcnQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0Fic29sdXRlKSB7XG4gICAgICAgICAgICByZXQuZGlyID0gJy8nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBzZXA6ICcvJyxcbiAgICBkZWxpbWl0ZXI6ICc6JyxcbiAgICB3aW4zMjogbnVsbCxcbiAgICBwb3NpeDogbnVsbFxufTtcbmV4cG9ydHMucG9zaXgud2luMzIgPSBleHBvcnRzLndpbjMyLndpbjMyID0gZXhwb3J0cy53aW4zMjtcbmV4cG9ydHMucG9zaXgucG9zaXggPSBleHBvcnRzLndpbjMyLnBvc2l4ID0gZXhwb3J0cy5wb3NpeDtcbmV4cG9ydHMubm9ybWFsaXplID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyBleHBvcnRzLndpbjMyLm5vcm1hbGl6ZSA6IGV4cG9ydHMucG9zaXgubm9ybWFsaXplKTtcbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gZXhwb3J0cy53aW4zMi5pc0Fic29sdXRlIDogZXhwb3J0cy5wb3NpeC5pc0Fic29sdXRlKTtcbmV4cG9ydHMuam9pbiA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gZXhwb3J0cy53aW4zMi5qb2luIDogZXhwb3J0cy5wb3NpeC5qb2luKTtcbmV4cG9ydHMucmVzb2x2ZSA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gZXhwb3J0cy53aW4zMi5yZXNvbHZlIDogZXhwb3J0cy5wb3NpeC5yZXNvbHZlKTtcbmV4cG9ydHMucmVsYXRpdmUgPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/IGV4cG9ydHMud2luMzIucmVsYXRpdmUgOiBleHBvcnRzLnBvc2l4LnJlbGF0aXZlKTtcbmV4cG9ydHMuZGlybmFtZSA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gZXhwb3J0cy53aW4zMi5kaXJuYW1lIDogZXhwb3J0cy5wb3NpeC5kaXJuYW1lKTtcbmV4cG9ydHMuYmFzZW5hbWUgPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/IGV4cG9ydHMud2luMzIuYmFzZW5hbWUgOiBleHBvcnRzLnBvc2l4LmJhc2VuYW1lKTtcbmV4cG9ydHMuZXh0bmFtZSA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gZXhwb3J0cy53aW4zMi5leHRuYW1lIDogZXhwb3J0cy5wb3NpeC5leHRuYW1lKTtcbmV4cG9ydHMuZm9ybWF0ID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyBleHBvcnRzLndpbjMyLmZvcm1hdCA6IGV4cG9ydHMucG9zaXguZm9ybWF0KTtcbmV4cG9ydHMucGFyc2UgPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/IGV4cG9ydHMud2luMzIucGFyc2UgOiBleHBvcnRzLnBvc2l4LnBhcnNlKTtcbmV4cG9ydHMudG9OYW1lc3BhY2VkUGF0aCA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gZXhwb3J0cy53aW4zMi50b05hbWVzcGFjZWRQYXRoIDogZXhwb3J0cy5wb3NpeC50b05hbWVzcGFjZWRQYXRoKTtcbmV4cG9ydHMuc2VwID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyBleHBvcnRzLndpbjMyLnNlcCA6IGV4cG9ydHMucG9zaXguc2VwKTtcbmV4cG9ydHMuZGVsaW1pdGVyID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyBleHBvcnRzLndpbjMyLmRlbGltaXRlciA6IGV4cG9ydHMucG9zaXguZGVsaW1pdGVyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVyaVRvRnNQYXRoID0gZXhwb3J0cy5VUkkgPSB2b2lkIDA7XG5jb25zdCBwbGF0Zm9ybV8xID0gcmVxdWlyZShcIi4vcGxhdGZvcm1cIik7XG5jb25zdCBwYXRocyA9IHJlcXVpcmUoXCIuL3BhdGhcIik7XG5jb25zdCBfc2NoZW1lUGF0dGVybiA9IC9eXFx3W1xcd1xcZCsuLV0qJC87XG5jb25zdCBfc2luZ2xlU2xhc2hTdGFydCA9IC9eXFwvLztcbmNvbnN0IF9kb3VibGVTbGFzaFN0YXJ0ID0gL15cXC9cXC8vO1xuZnVuY3Rpb24gX3ZhbGlkYXRlVXJpKHJldCwgX3N0cmljdCkge1xuICAgIC8vIHNjaGVtZSwgbXVzdCBiZSBzZXRcbiAgICBpZiAoIXJldC5zY2hlbWUgJiYgX3N0cmljdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFtVcmlFcnJvcl06IFNjaGVtZSBpcyBtaXNzaW5nOiB7c2NoZW1lOiBcIlwiLCBhdXRob3JpdHk6IFwiJHtyZXQuYXV0aG9yaXR5fVwiLCBwYXRoOiBcIiR7cmV0LnBhdGh9XCIsIHF1ZXJ5OiBcIiR7cmV0LnF1ZXJ5fVwiLCBmcmFnbWVudDogXCIke3JldC5mcmFnbWVudH1cIn1gKTtcbiAgICB9XG4gICAgLy8gc2NoZW1lLCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMVxuICAgIC8vIEFMUEhBICooIEFMUEhBIC8gRElHSVQgLyBcIitcIiAvIFwiLVwiIC8gXCIuXCIgKVxuICAgIGlmIChyZXQuc2NoZW1lICYmICFfc2NoZW1lUGF0dGVybi50ZXN0KHJldC5zY2hlbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1VyaUVycm9yXTogU2NoZW1lIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycy4nKTtcbiAgICB9XG4gICAgLy8gcGF0aCwgaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuM1xuICAgIC8vIElmIGEgVVJJIGNvbnRhaW5zIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY29tcG9uZW50XG4gICAgLy8gbXVzdCBlaXRoZXIgYmUgZW1wdHkgb3IgYmVnaW4gd2l0aCBhIHNsYXNoIChcIi9cIikgY2hhcmFjdGVyLiAgSWYgYSBVUklcbiAgICAvLyBkb2VzIG5vdCBjb250YWluIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY2Fubm90IGJlZ2luXG4gICAgLy8gd2l0aCB0d28gc2xhc2ggY2hhcmFjdGVycyAoXCIvL1wiKS5cbiAgICBpZiAocmV0LnBhdGgpIHtcbiAgICAgICAgaWYgKHJldC5hdXRob3JpdHkpIHtcbiAgICAgICAgICAgIGlmICghX3NpbmdsZVNsYXNoU3RhcnQudGVzdChyZXQucGF0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tVcmlFcnJvcl06IElmIGEgVVJJIGNvbnRhaW5zIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY29tcG9uZW50IG11c3QgZWl0aGVyIGJlIGVtcHR5IG9yIGJlZ2luIHdpdGggYSBzbGFzaCAoXCIvXCIpIGNoYXJhY3RlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKF9kb3VibGVTbGFzaFN0YXJ0LnRlc3QocmV0LnBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBJZiBhIFVSSSBkb2VzIG5vdCBjb250YWluIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY2Fubm90IGJlZ2luIHdpdGggdHdvIHNsYXNoIGNoYXJhY3RlcnMgKFwiLy9cIiknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIGZvciBhIHdoaWxlIHdlIGFsbG93ZWQgdXJpcyAqd2l0aG91dCogc2NoZW1lcyBhbmQgdGhpcyBpcyB0aGUgbWlncmF0aW9uXG4vLyBmb3IgdGhlbSwgZS5nLiBhbiB1cmkgd2l0aG91dCBzY2hlbWUgYW5kIHdpdGhvdXQgc3RyaWN0LW1vZGUgd2FybnMgYW5kIGZhbGxzXG4vLyBiYWNrIHRvIHRoZSBmaWxlLXNjaGVtZS4gdGhhdCBzaG91bGQgY2F1c2UgdGhlIGxlYXN0IGNhcm5hZ2UgYW5kIHN0aWxsIGJlIGFcbi8vIGNsZWFyIHdhcm5pbmdcbmZ1bmN0aW9uIF9zY2hlbWVGaXgoc2NoZW1lLCBfc3RyaWN0KSB7XG4gICAgaWYgKCFzY2hlbWUgJiYgIV9zdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuICdmaWxlJztcbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtZTtcbn1cbi8vIGltcGxlbWVudHMgYSBiaXQgb2YgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01XG5mdW5jdGlvbiBfcmVmZXJlbmNlUmVzb2x1dGlvbihzY2hlbWUsIHBhdGgpIHtcbiAgICAvLyB0aGUgc2xhc2gtY2hhcmFjdGVyIGlzIG91ciAnZGVmYXVsdCBiYXNlJyBhcyB3ZSBkb24ndFxuICAgIC8vIHN1cHBvcnQgY29uc3RydWN0aW5nIFVSSXMgcmVsYXRpdmUgdG8gb3RoZXIgVVJJcy4gVGhpc1xuICAgIC8vIGFsc28gbWVhbnMgdGhhdCB3ZSBhbHRlciBhbmQgcG90ZW50aWFsbHkgYnJlYWsgcGF0aHMuXG4gICAgLy8gc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4xLjRcbiAgICBzd2l0Y2ggKHNjaGVtZSkge1xuICAgICAgICBjYXNlICdodHRwcyc6XG4gICAgICAgIGNhc2UgJ2h0dHAnOlxuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBfc2xhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRoWzBdICE9PSBfc2xhc2gpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gX3NsYXNoICsgcGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmNvbnN0IF9lbXB0eSA9ICcnO1xuY29uc3QgX3NsYXNoID0gJy8nO1xuY29uc3QgX3JlZ2V4cCA9IC9eKChbXjovPyNdKz8pOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vO1xuLyoqXG4gKiBVbmlmb3JtIFJlc291cmNlIElkZW50aWZpZXIgKFVSSSkgaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4Ni5cbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW1wbGUgcGFyc2VyIHdoaWNoIGNyZWF0ZXMgdGhlIGJhc2ljIGNvbXBvbmVudCBwYXJ0c1xuICogKGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zKSB3aXRoIG1pbmltYWwgdmFsaWRhdGlvblxuICogYW5kIGVuY29kaW5nLlxuICpcbiAqIGBgYHR4dFxuICogICAgICAgZm9vOi8vZXhhbXBsZS5jb206ODA0Mi9vdmVyL3RoZXJlP25hbWU9ZmVycmV0I25vc2VcbiAqICAgICAgIFxcXy8gICBcXF9fX19fX19fX19fX19fL1xcX19fX19fX19fLyBcXF9fX19fX19fXy8gXFxfXy9cbiAqICAgICAgICB8ICAgICAgICAgICB8ICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgIHxcbiAqICAgICBzY2hlbWUgICAgIGF1dGhvcml0eSAgICAgICBwYXRoICAgICAgICBxdWVyeSAgIGZyYWdtZW50XG4gKiAgICAgICAgfCAgIF9fX19fX19fX19fX19fX19fX19fX3xfX1xuICogICAgICAgLyBcXCAvICAgICAgICAgICAgICAgICAgICAgICAgXFxcbiAqICAgICAgIHVybjpleGFtcGxlOmFuaW1hbDpmZXJyZXQ6bm9zZVxuICogYGBgXG4gKi9cbmNsYXNzIFVSSSB7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NoZW1lT3JEYXRhLCBhdXRob3JpdHksIHBhdGgsIHF1ZXJ5LCBmcmFnbWVudCwgX3N0cmljdCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2NoZW1lT3JEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5zY2hlbWUgPSBzY2hlbWVPckRhdGEuc2NoZW1lIHx8IF9lbXB0eTtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXR5ID0gc2NoZW1lT3JEYXRhLmF1dGhvcml0eSB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBzY2hlbWVPckRhdGEucGF0aCB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gc2NoZW1lT3JEYXRhLnF1ZXJ5IHx8IF9lbXB0eTtcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnQgPSBzY2hlbWVPckRhdGEuZnJhZ21lbnQgfHwgX2VtcHR5O1xuICAgICAgICAgICAgLy8gbm8gdmFsaWRhdGlvbiBiZWNhdXNlIGl0J3MgdGhpcyBVUklcbiAgICAgICAgICAgIC8vIHRoYXQgY3JlYXRlcyB1cmkgY29tcG9uZW50cy5cbiAgICAgICAgICAgIC8vIF92YWxpZGF0ZVVyaSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1lID0gX3NjaGVtZUZpeChzY2hlbWVPckRhdGEsIF9zdHJpY3QpO1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpdHkgPSBhdXRob3JpdHkgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gX3JlZmVyZW5jZVJlc29sdXRpb24odGhpcy5zY2hlbWUsIHBhdGggfHwgX2VtcHR5KTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeSB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQgfHwgX2VtcHR5O1xuICAgICAgICAgICAgX3ZhbGlkYXRlVXJpKHRoaXMsIF9zdHJpY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBpc1VyaSh0aGluZykge1xuICAgICAgICBpZiAodGhpbmcgaW5zdGFuY2VvZiBVUkkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaW5nLmF1dGhvcml0eSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5mcmFnbWVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5wYXRoID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnF1ZXJ5ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnNjaGVtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5mc1BhdGggPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpbmcud2l0aCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgICAvLyAtLS0tIGZpbGVzeXN0ZW0gcGF0aCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjb3JyZXNwb25kaW5nIGZpbGUgc3lzdGVtIHBhdGggb2YgdGhpcyBVUkkuXG4gICAgICogV2lsbCBoYW5kbGUgVU5DIHBhdGhzLCBub3JtYWxpemVzIHdpbmRvd3MgZHJpdmUgbGV0dGVycyB0byBsb3dlci1jYXNlLCBhbmQgdXNlcyB0aGVcbiAgICAgKiBwbGF0Zm9ybSBzcGVjaWZpYyBwYXRoIHNlcGFyYXRvci5cbiAgICAgKlxuICAgICAqICogV2lsbCAqbm90KiB2YWxpZGF0ZSB0aGUgcGF0aCBmb3IgaW52YWxpZCBjaGFyYWN0ZXJzIGFuZCBzZW1hbnRpY3MuXG4gICAgICogKiBXaWxsICpub3QqIGxvb2sgYXQgdGhlIHNjaGVtZSBvZiB0aGlzIFVSSS5cbiAgICAgKiAqIFRoZSByZXN1bHQgc2hhbGwgKm5vdCogYmUgdXNlZCBmb3IgZGlzcGxheSBwdXJwb3NlcyBidXQgZm9yIGFjY2Vzc2luZyBhIGZpbGUgb24gZGlzay5cbiAgICAgKlxuICAgICAqXG4gICAgICogVGhlICpkaWZmZXJlbmNlKiB0byBgVVJJI3BhdGhgIGlzIHRoZSB1c2Ugb2YgdGhlIHBsYXRmb3JtIHNwZWNpZmljIHNlcGFyYXRvciBhbmQgdGhlIGhhbmRsaW5nXG4gICAgICogb2YgVU5DIHBhdGhzLiBTZWUgdGhlIGJlbG93IHNhbXBsZSBvZiBhIGZpbGUtdXJpIHdpdGggYW4gYXV0aG9yaXR5IChVTkMgcGF0aCkuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAgICBjb25zdCB1ID0gVVJJLnBhcnNlKCdmaWxlOi8vc2VydmVyL2MkL2ZvbGRlci9maWxlLnR4dCcpXG4gICAgICAgIHUuYXV0aG9yaXR5ID09PSAnc2VydmVyJ1xuICAgICAgICB1LnBhdGggPT09ICcvc2hhcmVzL2MkL2ZpbGUudHh0J1xuICAgICAgICB1LmZzUGF0aCA9PT0gJ1xcXFxzZXJ2ZXJcXGMkXFxmb2xkZXJcXGZpbGUudHh0J1xuICAgIGBgYFxuICAgICAqXG4gICAgICogVXNpbmcgYFVSSSNwYXRoYCB0byByZWFkIGEgZmlsZSAodXNpbmcgZnMtYXBpcykgd291bGQgbm90IGJlIGVub3VnaCBiZWNhdXNlIHBhcnRzIG9mIHRoZSBwYXRoLFxuICAgICAqIG5hbWVseSB0aGUgc2VydmVyIG5hbWUsIHdvdWxkIGJlIG1pc3NpbmcuIFRoZXJlZm9yZSBgVVJJI2ZzUGF0aGAgZXhpc3RzIC0gaXQncyBzdWdhciB0byBlYXNlIHdvcmtpbmdcbiAgICAgKiB3aXRoIFVSSXMgdGhhdCByZXByZXNlbnQgZmlsZXMgb24gZGlzayAoYGZpbGVgIHNjaGVtZSkuXG4gICAgICovXG4gICAgZ2V0IGZzUGF0aCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuc2NoZW1lICE9PSAnZmlsZScpIHtcbiAgICAgICAgLy8gXHRjb25zb2xlLndhcm4oYFtVcmlFcnJvcl0gY2FsbGluZyBmc1BhdGggd2l0aCBzY2hlbWUgJHt0aGlzLnNjaGVtZX1gKTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gdXJpVG9Gc1BhdGgodGhpcywgZmFsc2UpO1xuICAgIH1cbiAgICAvLyAtLS0tIG1vZGlmeSB0byBuZXcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHdpdGgoY2hhbmdlKSB7XG4gICAgICAgIGlmICghY2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgeyBzY2hlbWUsIGF1dGhvcml0eSwgcGF0aCwgcXVlcnksIGZyYWdtZW50IH0gPSBjaGFuZ2U7XG4gICAgICAgIGlmIChzY2hlbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2NoZW1lID0gdGhpcy5zY2hlbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2NoZW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICBzY2hlbWUgPSBfZW1wdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dGhvcml0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdXRob3JpdHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhdGggPSBfZW1wdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gdGhpcy5xdWVyeTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChxdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnkgPSBfZW1wdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyYWdtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gdGhpcy5mcmFnbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmcmFnbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBfZW1wdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjaGVtZSA9PT0gdGhpcy5zY2hlbWVcbiAgICAgICAgICAgICYmIGF1dGhvcml0eSA9PT0gdGhpcy5hdXRob3JpdHlcbiAgICAgICAgICAgICYmIHBhdGggPT09IHRoaXMucGF0aFxuICAgICAgICAgICAgJiYgcXVlcnkgPT09IHRoaXMucXVlcnlcbiAgICAgICAgICAgICYmIGZyYWdtZW50ID09PSB0aGlzLmZyYWdtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFVyaShzY2hlbWUsIGF1dGhvcml0eSwgcGF0aCwgcXVlcnksIGZyYWdtZW50KTtcbiAgICB9XG4gICAgLy8gLS0tLSBwYXJzZSAmIHZhbGlkYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgVVJJIGZyb20gYSBzdHJpbmcsIGUuZy4gYGh0dHA6Ly93d3cubXNmdC5jb20vc29tZS9wYXRoYCxcbiAgICAgKiBgZmlsZTovLy91c3IvaG9tZWAsIG9yIGBzY2hlbWU6d2l0aC9wYXRoYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB3aGljaCByZXByZXNlbnRzIGFuIFVSSSAoc2VlIGBVUkkjdG9TdHJpbmdgKS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UodmFsdWUsIF9zdHJpY3QgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IF9yZWdleHAuZXhlYyh2YWx1ZSk7XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXJpKF9lbXB0eSwgX2VtcHR5LCBfZW1wdHksIF9lbXB0eSwgX2VtcHR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFVyaShtYXRjaFsyXSB8fCBfZW1wdHksIHBlcmNlbnREZWNvZGUobWF0Y2hbNF0gfHwgX2VtcHR5KSwgcGVyY2VudERlY29kZShtYXRjaFs1XSB8fCBfZW1wdHkpLCBwZXJjZW50RGVjb2RlKG1hdGNoWzddIHx8IF9lbXB0eSksIHBlcmNlbnREZWNvZGUobWF0Y2hbOV0gfHwgX2VtcHR5KSwgX3N0cmljdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgVVJJIGZyb20gYSBmaWxlIHN5c3RlbSBwYXRoLCBlLmcuIGBjOlxcbXlcXGZpbGVzYCxcbiAgICAgKiBgL3Vzci9ob21lYCwgb3IgYFxcXFxzZXJ2ZXJcXHNoYXJlXFxzb21lXFxwYXRoYC5cbiAgICAgKlxuICAgICAqIFRoZSAqZGlmZmVyZW5jZSogYmV0d2VlbiBgVVJJI3BhcnNlYCBhbmQgYFVSSSNmaWxlYCBpcyB0aGF0IHRoZSBsYXR0ZXIgdHJlYXRzIHRoZSBhcmd1bWVudFxuICAgICAqIGFzIHBhdGgsIG5vdCBhcyBzdHJpbmdpZmllZC11cmkuIEUuZy4gYFVSSS5maWxlKHBhdGgpYCBpcyAqKm5vdCB0aGUgc2FtZSBhcyoqXG4gICAgICogYFVSSS5wYXJzZSgnZmlsZTovLycgKyBwYXRoKWAgYmVjYXVzZSB0aGUgcGF0aCBtaWdodCBjb250YWluIGNoYXJhY3RlcnMgdGhhdCBhcmVcbiAgICAgKiBpbnRlcnByZXRlZCAoIyBhbmQgPykuIFNlZSB0aGUgZm9sbG93aW5nIHNhbXBsZTpcbiAgICAgKiBgYGB0c1xuICAgIGNvbnN0IGdvb2QgPSBVUkkuZmlsZSgnL2NvZGluZy9jIy9wcm9qZWN0MScpO1xuICAgIGdvb2Quc2NoZW1lID09PSAnZmlsZSc7XG4gICAgZ29vZC5wYXRoID09PSAnL2NvZGluZy9jIy9wcm9qZWN0MSc7XG4gICAgZ29vZC5mcmFnbWVudCA9PT0gJyc7XG4gICAgY29uc3QgYmFkID0gVVJJLnBhcnNlKCdmaWxlOi8vJyArICcvY29kaW5nL2MjL3Byb2plY3QxJyk7XG4gICAgYmFkLnNjaGVtZSA9PT0gJ2ZpbGUnO1xuICAgIGJhZC5wYXRoID09PSAnL2NvZGluZy9jJzsgLy8gcGF0aCBpcyBub3cgYnJva2VuXG4gICAgYmFkLmZyYWdtZW50ID09PSAnL3Byb2plY3QxJztcbiAgICBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXRoIEEgZmlsZSBzeXN0ZW0gcGF0aCAoc2VlIGBVUkkjZnNQYXRoYClcbiAgICAgKi9cbiAgICBzdGF0aWMgZmlsZShwYXRoKSB7XG4gICAgICAgIGxldCBhdXRob3JpdHkgPSBfZW1wdHk7XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB0byBmd2Qtc2xhc2hlcyBvbiB3aW5kb3dzLFxuICAgICAgICAvLyBvbiBvdGhlciBzeXN0ZW1zIGJ3ZC1zbGFzaGVzIGFyZSB2YWxpZFxuICAgICAgICAvLyBmaWxlbmFtZSBjaGFyYWN0ZXIsIGVnIC9mXFxvby9iYVxcci50eHRcbiAgICAgICAgaWYgKHBsYXRmb3JtXzEuaXNXaW5kb3dzKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csIF9zbGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZm9yIGF1dGhvcml0eSBhcyB1c2VkIGluIFVOQyBzaGFyZXNcbiAgICAgICAgLy8gb3IgdXNlIHRoZSBwYXRoIGFzIGdpdmVuXG4gICAgICAgIGlmIChwYXRoWzBdID09PSBfc2xhc2ggJiYgcGF0aFsxXSA9PT0gX3NsYXNoKSB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBwYXRoLmluZGV4T2YoX3NsYXNoLCAyKTtcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5ID0gcGF0aC5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgcGF0aCA9IF9zbGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eSA9IHBhdGguc3Vic3RyaW5nKDIsIGlkeCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKGlkeCkgfHwgX3NsYXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVXJpKCdmaWxlJywgYXV0aG9yaXR5LCBwYXRoLCBfZW1wdHksIF9lbXB0eSk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tKGNvbXBvbmVudHMpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVyaShjb21wb25lbnRzLnNjaGVtZSwgY29tcG9uZW50cy5hdXRob3JpdHksIGNvbXBvbmVudHMucGF0aCwgY29tcG9uZW50cy5xdWVyeSwgY29tcG9uZW50cy5mcmFnbWVudCk7XG4gICAgICAgIF92YWxpZGF0ZVVyaShyZXN1bHQsIHRydWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBKb2luIGEgVVJJIHBhdGggd2l0aCBwYXRoIGZyYWdtZW50cyBhbmQgbm9ybWFsaXplcyB0aGUgcmVzdWx0aW5nIHBhdGguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBpbnB1dCBVUkkuXG4gICAgICogQHBhcmFtIHBhdGhGcmFnbWVudCBUaGUgcGF0aCBmcmFnbWVudCB0byBhZGQgdG8gdGhlIFVSSSBwYXRoLlxuICAgICAqIEByZXR1cm5zIFRoZSByZXN1bHRpbmcgVVJJLlxuICAgICAqL1xuICAgIHN0YXRpYyBqb2luUGF0aCh1cmksIC4uLnBhdGhGcmFnbWVudCkge1xuICAgICAgICBpZiAoIXVyaS5wYXRoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFtVcmlFcnJvcl06IGNhbm5vdCBjYWxsIGpvaW5QYXRoIG9uIFVSSSB3aXRob3V0IHBhdGhgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3UGF0aDtcbiAgICAgICAgaWYgKHBsYXRmb3JtXzEuaXNXaW5kb3dzICYmIHVyaS5zY2hlbWUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgbmV3UGF0aCA9IFVSSS5maWxlKHBhdGhzLndpbjMyLmpvaW4odXJpVG9Gc1BhdGgodXJpLCB0cnVlKSwgLi4ucGF0aEZyYWdtZW50KSkucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld1BhdGggPSBwYXRocy5wb3NpeC5qb2luKHVyaS5wYXRoLCAuLi5wYXRoRnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmkud2l0aCh7IHBhdGg6IG5ld1BhdGggfSk7XG4gICAgfVxuICAgIC8vIC0tLS0gcHJpbnRpbmcvZXh0ZXJuYWxpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgdGhpcyBVUkkuIEl0J3MgZ3VhcmFudGVlZCB0aGF0IGNhbGxpbmdcbiAgICAgKiBgVVJJLnBhcnNlYCB3aXRoIHRoZSByZXN1bHQgb2YgdGhpcyBmdW5jdGlvbiBjcmVhdGVzIGFuIFVSSSB3aGljaCBpcyBlcXVhbFxuICAgICAqIHRvIHRoaXMgVVJJLlxuICAgICAqXG4gICAgICogKiBUaGUgcmVzdWx0IHNoYWxsICpub3QqIGJlIHVzZWQgZm9yIGRpc3BsYXkgcHVycG9zZXMgYnV0IGZvciBleHRlcm5hbGl6YXRpb24gb3IgdHJhbnNwb3J0LlxuICAgICAqICogVGhlIHJlc3VsdCB3aWxsIGJlIGVuY29kZWQgdXNpbmcgdGhlIHBlcmNlbnRhZ2UgZW5jb2RpbmcgYW5kIGVuY29kaW5nIGhhcHBlbnMgbW9zdGx5XG4gICAgICogaWdub3JlIHRoZSBzY2hlbWUtc3BlY2lmaWMgZW5jb2RpbmcgcnVsZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2tpcEVuY29kaW5nIERvIG5vdCBlbmNvZGUgdGhlIHJlc3VsdCwgZGVmYXVsdCBpcyBgZmFsc2VgXG4gICAgICovXG4gICAgdG9TdHJpbmcoc2tpcEVuY29kaW5nID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIF9hc0Zvcm1hdHRlZCh0aGlzLCBza2lwRW5jb2RpbmcpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgcmV2aXZlKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgVVJJKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVcmkoZGF0YSk7XG4gICAgICAgICAgICByZXN1bHQuX2Zvcm1hdHRlZCA9IGRhdGEuZXh0ZXJuYWw7XG4gICAgICAgICAgICByZXN1bHQuX2ZzUGF0aCA9IGRhdGEuX3NlcCA9PT0gX3BhdGhTZXBNYXJrZXIgPyBkYXRhLmZzUGF0aCA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5VUkkgPSBVUkk7XG5jb25zdCBfcGF0aFNlcE1hcmtlciA9IHBsYXRmb3JtXzEuaXNXaW5kb3dzID8gMSA6IHVuZGVmaW5lZDtcbi8vIFRoaXMgY2xhc3MgZXhpc3RzIHNvIHRoYXQgVVJJIGlzIGNvbXBhdGliaWxlIHdpdGggdnNjb2RlLlVyaSAoQVBJKS5cbmNsYXNzIFVyaSBleHRlbmRzIFVSSSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX2Zvcm1hdHRlZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ZzUGF0aCA9IG51bGw7XG4gICAgfVxuICAgIGdldCBmc1BhdGgoKSB7XG4gICAgICAgIGlmICghdGhpcy5fZnNQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLl9mc1BhdGggPSB1cmlUb0ZzUGF0aCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZzUGF0aDtcbiAgICB9XG4gICAgdG9TdHJpbmcoc2tpcEVuY29kaW5nID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFza2lwRW5jb2RpbmcpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZm9ybWF0dGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ybWF0dGVkID0gX2FzRm9ybWF0dGVkKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtYXR0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBjYWNoZSB0aGF0XG4gICAgICAgICAgICByZXR1cm4gX2FzRm9ybWF0dGVkKHRoaXMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgICAgJG1pZDogMSAvKiBVcmkgKi9cbiAgICAgICAgfTtcbiAgICAgICAgLy8gY2FjaGVkIHN0YXRlXG4gICAgICAgIGlmICh0aGlzLl9mc1BhdGgpIHtcbiAgICAgICAgICAgIHJlcy5mc1BhdGggPSB0aGlzLl9mc1BhdGg7XG4gICAgICAgICAgICByZXMuX3NlcCA9IF9wYXRoU2VwTWFya2VyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9mb3JtYXR0ZWQpIHtcbiAgICAgICAgICAgIHJlcy5leHRlcm5hbCA9IHRoaXMuX2Zvcm1hdHRlZDtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cmkgY29tcG9uZW50c1xuICAgICAgICBpZiAodGhpcy5wYXRoKSB7XG4gICAgICAgICAgICByZXMucGF0aCA9IHRoaXMucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY2hlbWUpIHtcbiAgICAgICAgICAgIHJlcy5zY2hlbWUgPSB0aGlzLnNjaGVtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRob3JpdHkpIHtcbiAgICAgICAgICAgIHJlcy5hdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgICAgICAgcmVzLnF1ZXJ5ID0gdGhpcy5xdWVyeTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mcmFnbWVudCkge1xuICAgICAgICAgICAgcmVzLmZyYWdtZW50ID0gdGhpcy5mcmFnbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn1cbi8vIHJlc2VydmVkIGNoYXJhY3RlcnM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMi4yXG5jb25zdCBlbmNvZGVUYWJsZSA9IHtcbiAgICBbNTggLyogQ29sb24gKi9dOiAnJTNBJyxcbiAgICBbNDcgLyogU2xhc2ggKi9dOiAnJTJGJyxcbiAgICBbNjMgLyogUXVlc3Rpb25NYXJrICovXTogJyUzRicsXG4gICAgWzM1IC8qIEhhc2ggKi9dOiAnJTIzJyxcbiAgICBbOTEgLyogT3BlblNxdWFyZUJyYWNrZXQgKi9dOiAnJTVCJyxcbiAgICBbOTMgLyogQ2xvc2VTcXVhcmVCcmFja2V0ICovXTogJyU1RCcsXG4gICAgWzY0IC8qIEF0U2lnbiAqL106ICclNDAnLFxuICAgIFszMyAvKiBFeGNsYW1hdGlvbk1hcmsgKi9dOiAnJTIxJyxcbiAgICBbMzYgLyogRG9sbGFyU2lnbiAqL106ICclMjQnLFxuICAgIFszOCAvKiBBbXBlcnNhbmQgKi9dOiAnJTI2JyxcbiAgICBbMzkgLyogU2luZ2xlUXVvdGUgKi9dOiAnJTI3JyxcbiAgICBbNDAgLyogT3BlblBhcmVuICovXTogJyUyOCcsXG4gICAgWzQxIC8qIENsb3NlUGFyZW4gKi9dOiAnJTI5JyxcbiAgICBbNDIgLyogQXN0ZXJpc2sgKi9dOiAnJTJBJyxcbiAgICBbNDMgLyogUGx1cyAqL106ICclMkInLFxuICAgIFs0NCAvKiBDb21tYSAqL106ICclMkMnLFxuICAgIFs1OSAvKiBTZW1pY29sb24gKi9dOiAnJTNCJyxcbiAgICBbNjEgLyogRXF1YWxzICovXTogJyUzRCcsXG4gICAgWzMyIC8qIFNwYWNlICovXTogJyUyMCcsXG59O1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50RmFzdCh1cmlDb21wb25lbnQsIGFsbG93U2xhc2gpIHtcbiAgICBsZXQgcmVzID0gdW5kZWZpbmVkO1xuICAgIGxldCBuYXRpdmVFbmNvZGVQb3MgPSAtMTtcbiAgICBmb3IgKGxldCBwb3MgPSAwOyBwb3MgPCB1cmlDb21wb25lbnQubGVuZ3RoOyBwb3MrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gdXJpQ29tcG9uZW50LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgLy8gdW5yZXNlcnZlZCBjaGFyYWN0ZXJzOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTIuM1xuICAgICAgICBpZiAoKGNvZGUgPj0gOTcgLyogYSAqLyAmJiBjb2RlIDw9IDEyMiAvKiB6ICovKVxuICAgICAgICAgICAgfHwgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDkwIC8qIFogKi8pXG4gICAgICAgICAgICB8fCAoY29kZSA+PSA0OCAvKiBEaWdpdDAgKi8gJiYgY29kZSA8PSA1NyAvKiBEaWdpdDkgKi8pXG4gICAgICAgICAgICB8fCBjb2RlID09PSA0NSAvKiBEYXNoICovXG4gICAgICAgICAgICB8fCBjb2RlID09PSA0NiAvKiBQZXJpb2QgKi9cbiAgICAgICAgICAgIHx8IGNvZGUgPT09IDk1IC8qIFVuZGVybGluZSAqL1xuICAgICAgICAgICAgfHwgY29kZSA9PT0gMTI2IC8qIFRpbGRlICovXG4gICAgICAgICAgICB8fCAoYWxsb3dTbGFzaCAmJiBjb2RlID09PSA0NyAvKiBTbGFzaCAqLykpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBkZWxheWluZyBuYXRpdmUgZW5jb2RlXG4gICAgICAgICAgICBpZiAobmF0aXZlRW5jb2RlUG9zICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50LnN1YnN0cmluZyhuYXRpdmVFbmNvZGVQb3MsIHBvcykpO1xuICAgICAgICAgICAgICAgIG5hdGl2ZUVuY29kZVBvcyA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugd3JpdGUgaW50byBhIG5ldyBzdHJpbmcgKGJ5IGRlZmF1bHQgd2UgdHJ5IHRvIHJldHVybiB0aGUgcGFyYW0pXG4gICAgICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gdXJpQ29tcG9uZW50LmNoYXJBdChwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RpbmcgbmVlZGVkLCB3ZSBuZWVkIHRvIGFsbG9jYXRlIGEgbmV3IHN0cmluZ1xuICAgICAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gdXJpQ29tcG9uZW50LnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgd2l0aCBkZWZhdWx0IHRhYmxlIGZpcnN0XG4gICAgICAgICAgICBjb25zdCBlc2NhcGVkID0gZW5jb2RlVGFibGVbY29kZV07XG4gICAgICAgICAgICBpZiAoZXNjYXBlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlIGRlbGF5aW5nIG5hdGl2ZSBlbmNvZGVcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlRW5jb2RlUG9zICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXMgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudC5zdWJzdHJpbmcobmF0aXZlRW5jb2RlUG9zLCBwb3MpKTtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlRW5jb2RlUG9zID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBlc2NhcGVkIHZhcmlhbnQgdG8gcmVzdWx0XG4gICAgICAgICAgICAgICAgcmVzICs9IGVzY2FwZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYXRpdmVFbmNvZGVQb3MgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlIG5hdGl2ZSBlbmNvZGUgb25seSB3aGVuIG5lZWRlZFxuICAgICAgICAgICAgICAgIG5hdGl2ZUVuY29kZVBvcyA9IHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmF0aXZlRW5jb2RlUG9zICE9PSAtMSkge1xuICAgICAgICByZXMgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudC5zdWJzdHJpbmcobmF0aXZlRW5jb2RlUG9zKSk7XG4gICAgfVxuICAgIHJldHVybiByZXMgIT09IHVuZGVmaW5lZCA/IHJlcyA6IHVyaUNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudE1pbmltYWwocGF0aCkge1xuICAgIGxldCByZXMgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChsZXQgcG9zID0gMDsgcG9zIDwgcGF0aC5sZW5ndGg7IHBvcysrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDM1IC8qIEhhc2ggKi8gfHwgY29kZSA9PT0gNjMgLyogUXVlc3Rpb25NYXJrICovKSB7XG4gICAgICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMgPSBwYXRoLnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzICs9IGVuY29kZVRhYmxlW2NvZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9IHBhdGhbcG9zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzICE9PSB1bmRlZmluZWQgPyByZXMgOiBwYXRoO1xufVxuLyoqXG4gKiBDb21wdXRlIGBmc1BhdGhgIGZvciB0aGUgZ2l2ZW4gdXJpXG4gKi9cbmZ1bmN0aW9uIHVyaVRvRnNQYXRoKHVyaSwga2VlcERyaXZlTGV0dGVyQ2FzaW5nKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmICh1cmkuYXV0aG9yaXR5ICYmIHVyaS5wYXRoLmxlbmd0aCA+IDEgJiYgdXJpLnNjaGVtZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIC8vIHVuYyBwYXRoOiBmaWxlOi8vc2hhcmVzL2MkL2Zhci9ib29cbiAgICAgICAgdmFsdWUgPSBgLy8ke3VyaS5hdXRob3JpdHl9JHt1cmkucGF0aH1gO1xuICAgIH1cbiAgICBlbHNlIGlmICh1cmkucGF0aC5jaGFyQ29kZUF0KDApID09PSA0NyAvKiBTbGFzaCAqL1xuICAgICAgICAmJiAodXJpLnBhdGguY2hhckNvZGVBdCgxKSA+PSA2NSAvKiBBICovICYmIHVyaS5wYXRoLmNoYXJDb2RlQXQoMSkgPD0gOTAgLyogWiAqLyB8fCB1cmkucGF0aC5jaGFyQ29kZUF0KDEpID49IDk3IC8qIGEgKi8gJiYgdXJpLnBhdGguY2hhckNvZGVBdCgxKSA8PSAxMjIgLyogeiAqLylcbiAgICAgICAgJiYgdXJpLnBhdGguY2hhckNvZGVBdCgyKSA9PT0gNTggLyogQ29sb24gKi8pIHtcbiAgICAgICAgaWYgKCFrZWVwRHJpdmVMZXR0ZXJDYXNpbmcpIHtcbiAgICAgICAgICAgIC8vIHdpbmRvd3MgZHJpdmUgbGV0dGVyOiBmaWxlOi8vL2M6L2Zhci9ib29cbiAgICAgICAgICAgIHZhbHVlID0gdXJpLnBhdGhbMV0udG9Mb3dlckNhc2UoKSArIHVyaS5wYXRoLnN1YnN0cigyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdXJpLnBhdGguc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBvdGhlciBwYXRoXG4gICAgICAgIHZhbHVlID0gdXJpLnBhdGg7XG4gICAgfVxuICAgIGlmIChwbGF0Zm9ybV8xLmlzV2luZG93cykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5leHBvcnRzLnVyaVRvRnNQYXRoID0gdXJpVG9Gc1BhdGg7XG4vKipcbiAqIENyZWF0ZSB0aGUgZXh0ZXJuYWwgdmVyc2lvbiBvZiBhIHVyaVxuICovXG5mdW5jdGlvbiBfYXNGb3JtYXR0ZWQodXJpLCBza2lwRW5jb2RpbmcpIHtcbiAgICBjb25zdCBlbmNvZGVyID0gIXNraXBFbmNvZGluZ1xuICAgICAgICA/IGVuY29kZVVSSUNvbXBvbmVudEZhc3RcbiAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnRNaW5pbWFsO1xuICAgIGxldCByZXMgPSAnJztcbiAgICBsZXQgeyBzY2hlbWUsIGF1dGhvcml0eSwgcGF0aCwgcXVlcnksIGZyYWdtZW50IH0gPSB1cmk7XG4gICAgaWYgKHNjaGVtZSkge1xuICAgICAgICByZXMgKz0gc2NoZW1lO1xuICAgICAgICByZXMgKz0gJzonO1xuICAgIH1cbiAgICBpZiAoYXV0aG9yaXR5IHx8IHNjaGVtZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIHJlcyArPSBfc2xhc2g7XG4gICAgICAgIHJlcyArPSBfc2xhc2g7XG4gICAgfVxuICAgIGlmIChhdXRob3JpdHkpIHtcbiAgICAgICAgbGV0IGlkeCA9IGF1dGhvcml0eS5pbmRleE9mKCdAJyk7XG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICAvLyA8dXNlcj5APGF1dGg+XG4gICAgICAgICAgICBjb25zdCB1c2VyaW5mbyA9IGF1dGhvcml0eS5zdWJzdHIoMCwgaWR4KTtcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IGF1dGhvcml0eS5zdWJzdHIoaWR4ICsgMSk7XG4gICAgICAgICAgICBpZHggPSB1c2VyaW5mby5pbmRleE9mKCc6Jyk7XG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKHVzZXJpbmZvLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyA8dXNlcj46PHBhc3M+QDxhdXRoPlxuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKHVzZXJpbmZvLnN1YnN0cigwLCBpZHgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JztcbiAgICAgICAgICAgICAgICByZXMgKz0gZW5jb2Rlcih1c2VyaW5mby5zdWJzdHIoaWR4ICsgMSksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyArPSAnQCc7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yaXR5ID0gYXV0aG9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlkeCA9IGF1dGhvcml0eS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICByZXMgKz0gZW5jb2RlcihhdXRob3JpdHksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIDxhdXRoPjo8cG9ydD5cbiAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKGF1dGhvcml0eS5zdWJzdHIoMCwgaWR4KSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVzICs9IGF1dGhvcml0eS5zdWJzdHIoaWR4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0aCkge1xuICAgICAgICAvLyBsb3dlci1jYXNlIHdpbmRvd3MgZHJpdmUgbGV0dGVycyBpbiAvQzovZmZmIG9yIEM6L2ZmZlxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPj0gMyAmJiBwYXRoLmNoYXJDb2RlQXQoMCkgPT09IDQ3IC8qIFNsYXNoICovICYmIHBhdGguY2hhckNvZGVBdCgyKSA9PT0gNTggLyogQ29sb24gKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMSk7XG4gICAgICAgICAgICBpZiAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gOTAgLyogWiAqLykge1xuICAgICAgICAgICAgICAgIHBhdGggPSBgLyR7U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlICsgMzIpfToke3BhdGguc3Vic3RyKDMpfWA7IC8vIFwiL2M6XCIubGVuZ3RoID09PSAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aC5sZW5ndGggPj0gMiAmJiBwYXRoLmNoYXJDb2RlQXQoMSkgPT09IDU4IC8qIENvbG9uICovKSB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgaWYgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDkwIC8qIFogKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlICsgMzIpfToke3BhdGguc3Vic3RyKDIpfWA7IC8vIFwiL2M6XCIubGVuZ3RoID09PSAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5jb2RlIHRoZSByZXN0IG9mIHRoZSBwYXRoXG4gICAgICAgIHJlcyArPSBlbmNvZGVyKHBhdGgsIHRydWUpO1xuICAgIH1cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgcmVzICs9ICc/JztcbiAgICAgICAgcmVzICs9IGVuY29kZXIocXVlcnksIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGZyYWdtZW50KSB7XG4gICAgICAgIHJlcyArPSAnIyc7XG4gICAgICAgIHJlcyArPSAhc2tpcEVuY29kaW5nID8gZW5jb2RlVVJJQ29tcG9uZW50RmFzdChmcmFnbWVudCwgZmFsc2UpIDogZnJhZ21lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG4vLyAtLS0gZGVjb2RlXG5mdW5jdGlvbiBkZWNvZGVVUklDb21wb25lbnRHcmFjZWZ1bChzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cik7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIDMpICsgZGVjb2RlVVJJQ29tcG9uZW50R3JhY2VmdWwoc3RyLnN1YnN0cigzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgX3JFbmNvZGVkQXNIZXggPSAvKCVbMC05QS1aYS16XVswLTlBLVphLXpdKSsvZztcbmZ1bmN0aW9uIHBlcmNlbnREZWNvZGUoc3RyKSB7XG4gICAgaWYgKCFzdHIubWF0Y2goX3JFbmNvZGVkQXNIZXgpKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZShfckVuY29kZWRBc0hleCwgKG1hdGNoKSA9PiBkZWNvZGVVUklDb21wb25lbnRHcmFjZWZ1bChtYXRjaCkpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVsYXkgPSBleHBvcnRzLkV2ZW50QnVmZmVyZXIgPSBleHBvcnRzLkV2ZW50TXVsdGlwbGV4ZXIgPSBleHBvcnRzLkFzeW5jRW1pdHRlciA9IGV4cG9ydHMuUGF1c2VhYmxlRW1pdHRlciA9IGV4cG9ydHMuRW1pdHRlciA9IGV4cG9ydHMuc2V0R2xvYmFsTGVha1dhcm5pbmdUaHJlc2hvbGQgPSBleHBvcnRzLkV2ZW50ID0gdm9pZCAwO1xuY29uc3QgZXJyb3JzXzEgPSByZXF1aXJlKFwiLi9lcnJvcnNcIik7XG5jb25zdCBmdW5jdGlvbmFsXzEgPSByZXF1aXJlKFwiLi9mdW5jdGlvbmFsXCIpO1xuY29uc3QgbGlmZWN5Y2xlXzEgPSByZXF1aXJlKFwiLi9saWZlY3ljbGVcIik7XG5jb25zdCBsaW5rZWRMaXN0XzEgPSByZXF1aXJlKFwiLi9saW5rZWRMaXN0XCIpO1xudmFyIEV2ZW50O1xuKGZ1bmN0aW9uIChFdmVudCkge1xuICAgIEV2ZW50Lk5vbmUgPSAoKSA9PiBsaWZlY3ljbGVfMS5EaXNwb3NhYmxlLk5vbmU7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gZXZlbnQsIHJldHVybnMgYW5vdGhlciBldmVudCB3aGljaCBvbmx5IGZpcmVzIG9uY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25jZShldmVudCkge1xuICAgICAgICByZXR1cm4gKGxpc3RlbmVyLCB0aGlzQXJncyA9IG51bGwsIGRpc3Bvc2FibGVzKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMsIGluIGNhc2UgdGhlIGV2ZW50IGZpcmVzIGR1cmluZyB0aGUgbGlzdGVuZXIgY2FsbFxuICAgICAgICAgICAgbGV0IGRpZEZpcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgICByZXN1bHQgPSBldmVudChlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGlkRmlyZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlkRmlyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBlKTtcbiAgICAgICAgICAgIH0sIG51bGwsIGRpc3Bvc2FibGVzKTtcbiAgICAgICAgICAgIGlmIChkaWRGaXJlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIEV2ZW50Lm9uY2UgPSBvbmNlO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50IGFuZCBhIGBtYXBgIGZ1bmN0aW9uLCByZXR1cm5zIGFub3RoZXIgZXZlbnQgd2hpY2ggbWFwcyBlYWNoIGVsZW1lbnRcbiAgICAgKiB0aHJvdWdoIHRoZSBtYXBwaW5nIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1hcChldmVudCwgbWFwKSB7XG4gICAgICAgIHJldHVybiBzbmFwc2hvdCgobGlzdGVuZXIsIHRoaXNBcmdzID0gbnVsbCwgZGlzcG9zYWJsZXMpID0+IGV2ZW50KGkgPT4gbGlzdGVuZXIuY2FsbCh0aGlzQXJncywgbWFwKGkpKSwgbnVsbCwgZGlzcG9zYWJsZXMpKTtcbiAgICB9XG4gICAgRXZlbnQubWFwID0gbWFwO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50IGFuZCBhbiBgZWFjaGAgZnVuY3Rpb24sIHJldHVybnMgYW5vdGhlciBpZGVudGljYWwgZXZlbnQgYW5kIGNhbGxzXG4gICAgICogdGhlIGBlYWNoYCBmdW5jdGlvbiBwZXIgZWFjaCBlbGVtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvckVhY2goZXZlbnQsIGVhY2gpIHtcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90KChsaXN0ZW5lciwgdGhpc0FyZ3MgPSBudWxsLCBkaXNwb3NhYmxlcykgPT4gZXZlbnQoaSA9PiB7IGVhY2goaSk7IGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGkpOyB9LCBudWxsLCBkaXNwb3NhYmxlcykpO1xuICAgIH1cbiAgICBFdmVudC5mb3JFYWNoID0gZm9yRWFjaDtcbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQsIGZpbHRlcikge1xuICAgICAgICByZXR1cm4gc25hcHNob3QoKGxpc3RlbmVyLCB0aGlzQXJncyA9IG51bGwsIGRpc3Bvc2FibGVzKSA9PiBldmVudChlID0+IGZpbHRlcihlKSAmJiBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBlKSwgbnVsbCwgZGlzcG9zYWJsZXMpKTtcbiAgICB9XG4gICAgRXZlbnQuZmlsdGVyID0gZmlsdGVyO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50LCByZXR1cm5zIHRoZSBzYW1lIGV2ZW50IGJ1dCB0eXBlZCBhcyBgRXZlbnQ8dm9pZD5gLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNpZ25hbChldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICAgIEV2ZW50LnNpZ25hbCA9IHNpZ25hbDtcbiAgICBmdW5jdGlvbiBhbnkoLi4uZXZlbnRzKSB7XG4gICAgICAgIHJldHVybiAobGlzdGVuZXIsIHRoaXNBcmdzID0gbnVsbCwgZGlzcG9zYWJsZXMpID0+ICgwLCBsaWZlY3ljbGVfMS5jb21iaW5lZERpc3Bvc2FibGUpKC4uLmV2ZW50cy5tYXAoZXZlbnQgPT4gZXZlbnQoZSA9PiBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBlKSwgbnVsbCwgZGlzcG9zYWJsZXMpKSk7XG4gICAgfVxuICAgIEV2ZW50LmFueSA9IGFueTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCBhbmQgYSBgbWVyZ2VgIGZ1bmN0aW9uLCByZXR1cm5zIGFub3RoZXIgZXZlbnQgd2hpY2ggbWFwcyBlYWNoIGVsZW1lbnRcbiAgICAgKiBhbmQgdGhlIGN1bXVsYXRpdmUgcmVzdWx0IHRocm91Z2ggdGhlIGBtZXJnZWAgZnVuY3Rpb24uIFNpbWlsYXIgdG8gYG1hcGAsIGJ1dCB3aXRoIG1lbW9yeS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZWR1Y2UoZXZlbnQsIG1lcmdlLCBpbml0aWFsKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBpbml0aWFsO1xuICAgICAgICByZXR1cm4gbWFwKGV2ZW50LCBlID0+IHtcbiAgICAgICAgICAgIG91dHB1dCA9IG1lcmdlKG91dHB1dCwgZSk7XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRXZlbnQucmVkdWNlID0gcmVkdWNlO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgY2hhaW4gb2YgZXZlbnQgcHJvY2Vzc2luZyBmdW5jdGlvbnMgKGZpbHRlciwgbWFwLCBldGMpLCBlYWNoXG4gICAgICogZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHBlciBldmVudCAmIHBlciBsaXN0ZW5lci4gU25hcHNob3R0aW5nIGFuIGV2ZW50XG4gICAgICogY2hhaW4gYWxsb3dzIGVhY2ggZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBqdXN0IG9uY2UgcGVyIGV2ZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNuYXBzaG90KGV2ZW50KSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcjtcbiAgICAgICAgY29uc3QgZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckFkZCgpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGV2ZW50KGVtaXR0ZXIuZmlyZSwgZW1pdHRlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MYXN0TGlzdGVuZXJSZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuZXZlbnQ7XG4gICAgfVxuICAgIEV2ZW50LnNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgZnVuY3Rpb24gZGVib3VuY2UoZXZlbnQsIG1lcmdlLCBkZWxheSA9IDEwMCwgbGVhZGluZyA9IGZhbHNlLCBsZWFrV2FybmluZ1RocmVzaG9sZCkge1xuICAgICAgICBsZXQgc3Vic2NyaXB0aW9uO1xuICAgICAgICBsZXQgb3V0cHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgaGFuZGxlID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgbnVtRGVib3VuY2VkQ2FsbHMgPSAwO1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gbmV3IEVtaXR0ZXIoe1xuICAgICAgICAgICAgbGVha1dhcm5pbmdUaHJlc2hvbGQsXG4gICAgICAgICAgICBvbkZpcnN0TGlzdGVuZXJBZGQoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gZXZlbnQoY3VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtRGVib3VuY2VkQ2FsbHMrKztcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbWVyZ2Uob3V0cHV0LCBjdXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVhZGluZyAmJiAhaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUob3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfb3V0cHV0ID0gb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsZWFkaW5nIHx8IG51bURlYm91bmNlZENhbGxzID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIuZmlyZShfb3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bURlYm91bmNlZENhbGxzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGFzdExpc3RlbmVyUmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuZGVib3VuY2UgPSBkZWJvdW5jZTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBhbiBldmVudCwgaXQgcmV0dXJucyBhbm90aGVyIGV2ZW50IHdoaWNoIGZpcmVzIG9ubHkgb25jZSBhbmQgYXMgc29vbiBhc1xuICAgICAqIHRoZSBpbnB1dCBldmVudCBlbWl0cy4gVGhlIGV2ZW50IGRhdGEgaXMgdGhlIG51bWJlciBvZiBtaWxsaXMgaXQgdG9vayBmb3IgdGhlXG4gICAgICogZXZlbnQgdG8gZmlyZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdG9wd2F0Y2goZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIG1hcChvbmNlKGV2ZW50KSwgXyA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0KTtcbiAgICB9XG4gICAgRXZlbnQuc3RvcHdhdGNoID0gc3RvcHdhdGNoO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIGFuIGV2ZW50LCBpdCByZXR1cm5zIGFub3RoZXIgZXZlbnQgd2hpY2ggZmlyZXMgb25seSB3aGVuIHRoZSBldmVudFxuICAgICAqIGVsZW1lbnQgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsYXRjaChldmVudCkge1xuICAgICAgICBsZXQgZmlyc3RDYWxsID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNhY2hlO1xuICAgICAgICByZXR1cm4gZmlsdGVyKGV2ZW50LCB2YWx1ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRFbWl0ID0gZmlyc3RDYWxsIHx8IHZhbHVlICE9PSBjYWNoZTtcbiAgICAgICAgICAgIGZpcnN0Q2FsbCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FjaGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBzaG91bGRFbWl0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgRXZlbnQubGF0Y2ggPSBsYXRjaDtcbiAgICAvKipcbiAgICAgKiBCdWZmZXJzIHRoZSBwcm92aWRlZCBldmVudCB1bnRpbCBhIGZpcnN0IGxpc3RlbmVyIGNvbWVzXG4gICAgICogYWxvbmcsIGF0IHdoaWNoIHBvaW50IGZpcmUgYWxsIHRoZSBldmVudHMgYXQgb25jZSBhbmRcbiAgICAgKiBwaXBlIHRoZSBldmVudCBmcm9tIHRoZW4gb24uXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgZW1pdHRlciA9IG5ldyBFbWl0dGVyPG51bWJlcj4oKTtcbiAgICAgKiBjb25zdCBldmVudCA9IGVtaXR0ZXIuZXZlbnQ7XG4gICAgICogY29uc3QgYnVmZmVyZWRFdmVudCA9IGJ1ZmZlcihldmVudCk7XG4gICAgICpcbiAgICAgKiBlbWl0dGVyLmZpcmUoMSk7XG4gICAgICogZW1pdHRlci5maXJlKDIpO1xuICAgICAqIGVtaXR0ZXIuZmlyZSgzKTtcbiAgICAgKiAvLyBub3RoaW5nLi4uXG4gICAgICpcbiAgICAgKiBjb25zdCBsaXN0ZW5lciA9IGJ1ZmZlcmVkRXZlbnQobnVtID0+IGNvbnNvbGUubG9nKG51bSkpO1xuICAgICAqIC8vIDEsIDIsIDNcbiAgICAgKlxuICAgICAqIGVtaXR0ZXIuZmlyZSg0KTtcbiAgICAgKiAvLyA0XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZnVuY3Rpb24gYnVmZmVyKGV2ZW50LCBuZXh0VGljayA9IGZhbHNlLCBfYnVmZmVyID0gW10pIHtcbiAgICAgICAgbGV0IGJ1ZmZlciA9IF9idWZmZXIuc2xpY2UoKTtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gZXZlbnQoZSA9PiB7XG4gICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmbHVzaCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIuZm9yRWFjaChlID0+IGVtaXR0ZXIuZmlyZShlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWZmZXIgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gbmV3IEVtaXR0ZXIoe1xuICAgICAgICAgICAgb25GaXJzdExpc3RlbmVyQWRkKCkge1xuICAgICAgICAgICAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBldmVudChlID0+IGVtaXR0ZXIuZmlyZShlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckRpZEFkZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0VGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmbHVzaCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGFzdExpc3RlbmVyUmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbWl0dGVyLmV2ZW50O1xuICAgIH1cbiAgICBFdmVudC5idWZmZXIgPSBidWZmZXI7XG4gICAgY2xhc3MgQ2hhaW5hYmxlRXZlbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcihldmVudCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIG1hcChmbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFpbmFibGVFdmVudChtYXAodGhpcy5ldmVudCwgZm4pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JFYWNoKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoYWluYWJsZUV2ZW50KGZvckVhY2godGhpcy5ldmVudCwgZm4pKTtcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXIoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQoZmlsdGVyKHRoaXMuZXZlbnQsIGZuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVkdWNlKG1lcmdlLCBpbml0aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoYWluYWJsZUV2ZW50KHJlZHVjZSh0aGlzLmV2ZW50LCBtZXJnZSwgaW5pdGlhbCkpO1xuICAgICAgICB9XG4gICAgICAgIGxhdGNoKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFpbmFibGVFdmVudChsYXRjaCh0aGlzLmV2ZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVib3VuY2UobWVyZ2UsIGRlbGF5ID0gMTAwLCBsZWFkaW5nID0gZmFsc2UsIGxlYWtXYXJuaW5nVGhyZXNob2xkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENoYWluYWJsZUV2ZW50KGRlYm91bmNlKHRoaXMuZXZlbnQsIG1lcmdlLCBkZWxheSwgbGVhZGluZywgbGVha1dhcm5pbmdUaHJlc2hvbGQpKTtcbiAgICAgICAgfVxuICAgICAgICBvbihsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKTtcbiAgICAgICAgfVxuICAgICAgICBvbmNlKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBvbmNlKHRoaXMuZXZlbnQpKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoYWluKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBFdmVudC5jaGFpbiA9IGNoYWluO1xuICAgIGZ1bmN0aW9uIGZyb21Ob2RlRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGV2ZW50TmFtZSwgbWFwID0gaWQgPT4gaWQpIHtcbiAgICAgICAgY29uc3QgZm4gPSAoLi4uYXJncykgPT4gcmVzdWx0LmZpcmUobWFwKC4uLmFyZ3MpKTtcbiAgICAgICAgY29uc3Qgb25GaXJzdExpc3RlbmVyQWRkID0gKCkgPT4gZW1pdHRlci5vbihldmVudE5hbWUsIGZuKTtcbiAgICAgICAgY29uc3Qgb25MYXN0TGlzdGVuZXJSZW1vdmUgPSAoKSA9PiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgZm4pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRW1pdHRlcih7IG9uRmlyc3RMaXN0ZW5lckFkZCwgb25MYXN0TGlzdGVuZXJSZW1vdmUgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZXZlbnQ7XG4gICAgfVxuICAgIEV2ZW50LmZyb21Ob2RlRXZlbnRFbWl0dGVyID0gZnJvbU5vZGVFdmVudEVtaXR0ZXI7XG4gICAgZnVuY3Rpb24gZnJvbURPTUV2ZW50RW1pdHRlcihlbWl0dGVyLCBldmVudE5hbWUsIG1hcCA9IGlkID0+IGlkKSB7XG4gICAgICAgIGNvbnN0IGZuID0gKC4uLmFyZ3MpID0+IHJlc3VsdC5maXJlKG1hcCguLi5hcmdzKSk7XG4gICAgICAgIGNvbnN0IG9uRmlyc3RMaXN0ZW5lckFkZCA9ICgpID0+IGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcbiAgICAgICAgY29uc3Qgb25MYXN0TGlzdGVuZXJSZW1vdmUgPSAoKSA9PiBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbik7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFbWl0dGVyKHsgb25GaXJzdExpc3RlbmVyQWRkLCBvbkxhc3RMaXN0ZW5lclJlbW92ZSB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuZnJvbURPTUV2ZW50RW1pdHRlciA9IGZyb21ET01FdmVudEVtaXR0ZXI7XG4gICAgZnVuY3Rpb24gZnJvbVByb21pc2UocHJvbWlzZSkge1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICAgICAgbGV0IHNob3VsZEVtaXQgPSBmYWxzZTtcbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4odW5kZWZpbmVkLCAoKSA9PiBudWxsKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlbWl0dGVyLmZpcmUodW5kZWZpbmVkKSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmZpcmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNob3VsZEVtaXQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgRXZlbnQuZnJvbVByb21pc2UgPSBmcm9tUHJvbWlzZTtcbiAgICBmdW5jdGlvbiB0b1Byb21pc2UoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGMgPT4gb25jZShldmVudCkoYykpO1xuICAgIH1cbiAgICBFdmVudC50b1Byb21pc2UgPSB0b1Byb21pc2U7XG59KShFdmVudCA9IGV4cG9ydHMuRXZlbnQgfHwgKGV4cG9ydHMuRXZlbnQgPSB7fSkpO1xubGV0IF9nbG9iYWxMZWFrV2FybmluZ1RocmVzaG9sZCA9IC0xO1xuZnVuY3Rpb24gc2V0R2xvYmFsTGVha1dhcm5pbmdUaHJlc2hvbGQobikge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gX2dsb2JhbExlYWtXYXJuaW5nVGhyZXNob2xkO1xuICAgIF9nbG9iYWxMZWFrV2FybmluZ1RocmVzaG9sZCA9IG47XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcG9zZSgpIHtcbiAgICAgICAgICAgIF9nbG9iYWxMZWFrV2FybmluZ1RocmVzaG9sZCA9IG9sZFZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuc2V0R2xvYmFsTGVha1dhcm5pbmdUaHJlc2hvbGQgPSBzZXRHbG9iYWxMZWFrV2FybmluZ1RocmVzaG9sZDtcbmNsYXNzIExlYWthZ2VNb25pdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihjdXN0b21UaHJlc2hvbGQsIG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zbGljZSgyLCA1KSkge1xuICAgICAgICB0aGlzLmN1c3RvbVRocmVzaG9sZCA9IGN1c3RvbVRocmVzaG9sZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fd2FybkNvdW50ZG93biA9IDA7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrKGxpc3RlbmVyQ291bnQpIHtcbiAgICAgICAgbGV0IHRocmVzaG9sZCA9IF9nbG9iYWxMZWFrV2FybmluZ1RocmVzaG9sZDtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1c3RvbVRocmVzaG9sZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocmVzaG9sZCA9IHRoaXMuY3VzdG9tVGhyZXNob2xkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aHJlc2hvbGQgPD0gMCB8fCBsaXN0ZW5lckNvdW50IDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fc3RhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFja3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJykuc2xpY2UoMykuam9pbignXFxuJyk7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gKHRoaXMuX3N0YWNrcy5nZXQoc3RhY2spIHx8IDApO1xuICAgICAgICB0aGlzLl9zdGFja3Muc2V0KHN0YWNrLCBjb3VudCArIDEpO1xuICAgICAgICB0aGlzLl93YXJuQ291bnRkb3duIC09IDE7XG4gICAgICAgIGlmICh0aGlzLl93YXJuQ291bnRkb3duIDw9IDApIHtcbiAgICAgICAgICAgIC8vIG9ubHkgd2FybiBvbiBmaXJzdCBleGNlZWQgYW5kIHRoZW4gZXZlcnkgdGltZSB0aGUgbGltaXRcbiAgICAgICAgICAgIC8vIGlzIGV4Y2VlZGVkIGJ5IDUwJSBhZ2FpblxuICAgICAgICAgICAgdGhpcy5fd2FybkNvdW50ZG93biA9IHRocmVzaG9sZCAqIDAuNTtcbiAgICAgICAgICAgIC8vIGZpbmQgbW9zdCBmcmVxdWVudCBsaXN0ZW5lciBhbmQgcHJpbnQgd2FybmluZ1xuICAgICAgICAgICAgbGV0IHRvcFN0YWNrO1xuICAgICAgICAgICAgbGV0IHRvcENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3N0YWNrLCBjb3VudF0gb2YgdGhpcy5fc3RhY2tzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b3BTdGFjayB8fCB0b3BDb3VudCA8IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcFN0YWNrID0gc3RhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRvcENvdW50ID0gY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbJHt0aGlzLm5hbWV9XSBwb3RlbnRpYWwgbGlzdGVuZXIgTEVBSyBkZXRlY3RlZCwgaGF2aW5nICR7bGlzdGVuZXJDb3VudH0gbGlzdGVuZXJzIGFscmVhZHkuIE1PU1QgZnJlcXVlbnQgbGlzdGVuZXIgKCR7dG9wQ291bnR9KTpgKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih0b3BTdGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gKHRoaXMuX3N0YWNrcy5nZXQoc3RhY2spIHx8IDApO1xuICAgICAgICAgICAgdGhpcy5fc3RhY2tzLnNldChzdGFjaywgY291bnQgLSAxKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4vKipcbiAqIFRoZSBFbWl0dGVyIGNhbiBiZSB1c2VkIHRvIGV4cG9zZSBhbiBFdmVudCB0byB0aGUgcHVibGljXG4gKiB0byBmaXJlIGl0IGZyb20gdGhlIGluc2lkZXMuXG4gKiBTYW1wbGU6XG4gIGNsYXNzIERvY3VtZW50IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29uRGlkQ2hhbmdlID0gbmV3IEVtaXR0ZXI8KHZhbHVlOnN0cmluZyk9PmFueT4oKTtcblxuICAgIHB1YmxpYyBvbkRpZENoYW5nZSA9IHRoaXMuX29uRGlkQ2hhbmdlLmV2ZW50O1xuXG4gICAgLy8gZ2V0dGVyLXN0eWxlXG4gICAgLy8gZ2V0IG9uRGlkQ2hhbmdlKCk6IEV2ZW50PCh2YWx1ZTpzdHJpbmcpPT5hbnk+IHtcbiAgICAvLyBcdHJldHVybiB0aGlzLl9vbkRpZENoYW5nZS5ldmVudDtcbiAgICAvLyB9XG5cbiAgICBwcml2YXRlIF9kb0l0KCkge1xuICAgICAgLy8uLi5cbiAgICAgIHRoaXMuX29uRGlkQ2hhbmdlLmZpcmUodmFsdWUpO1xuICAgIH1cbiAgfVxuICovXG5jbGFzcyBFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl9sZWFrYWdlTW9uID0gX2dsb2JhbExlYWtXYXJuaW5nVGhyZXNob2xkID4gMFxuICAgICAgICAgICAgPyBuZXcgTGVha2FnZU1vbml0b3IodGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmxlYWtXYXJuaW5nVGhyZXNob2xkKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvciB0aGUgcHVibGljIHRvIGFsbG93IHRvIHN1YnNjcmliZVxuICAgICAqIHRvIGV2ZW50cyBmcm9tIHRoaXMgRW1pdHRlclxuICAgICAqL1xuICAgIGdldCBldmVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnQgPSAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IG5ldyBsaW5rZWRMaXN0XzEuTGlua2VkTGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdExpc3RlbmVyID0gdGhpcy5fbGlzdGVuZXJzLmlzRW1wdHkoKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RMaXN0ZW5lciAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyQWRkKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSB0aGlzLl9saXN0ZW5lcnMucHVzaCghdGhpc0FyZ3MgPyBsaXN0ZW5lciA6IFtsaXN0ZW5lciwgdGhpc0FyZ3NdKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RMaXN0ZW5lciAmJiB0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyRGlkQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyRGlkQWRkKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLm9uTGlzdGVuZXJEaWRBZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5vbkxpc3RlbmVyRGlkQWRkKHRoaXMsIGxpc3RlbmVyLCB0aGlzQXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFuZCByZWNvcmQgdGhpcyBlbWl0dGVyIGZvciBwb3RlbnRpYWwgbGVha2FnZVxuICAgICAgICAgICAgICAgIGxldCByZW1vdmVNb25pdG9yO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sZWFrYWdlTW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZU1vbml0b3IgPSB0aGlzLl9sZWFrYWdlTW9uLmNoZWNrKHRoaXMuX2xpc3RlbmVycy5zaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVNb25pdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTW9uaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRpc3Bvc2UgPSBFbWl0dGVyLl9ub29wO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNwb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMub25MYXN0TGlzdGVuZXJSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzTGlzdGVuZXJzID0gKHRoaXMuX2xpc3RlbmVycyAmJiAhdGhpcy5fbGlzdGVuZXJzLmlzRW1wdHkoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLm9uTGFzdExpc3RlbmVyUmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzcG9zYWJsZXMgaW5zdGFuY2VvZiBsaWZlY3ljbGVfMS5EaXNwb3NhYmxlU3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcG9zYWJsZXMuYWRkKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGlzcG9zYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3Bvc2FibGVzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUbyBiZSBrZXB0IHByaXZhdGUgdG8gZmlyZSBhbiBldmVudCB0b1xuICAgICAqIHN1YnNjcmliZXJzXG4gICAgICovXG4gICAgZmlyZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAvLyBwdXQgYWxsIFtsaXN0ZW5lcixldmVudF0tcGFpcnMgaW50byBkZWxpdmVyeSBxdWV1ZVxuICAgICAgICAgICAgLy8gdGhlbiBlbWl0IGFsbCBldmVudC4gYW4gaW5uZXIvbmVzdGVkIGV2ZW50IG1pZ2h0IGJlXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9mIHRoaXNcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGVsaXZlcnlRdWV1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUgPSBuZXcgbGlua2VkTGlzdF8xLkxpbmtlZExpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGxpc3RlbmVyIG9mIHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUucHVzaChbbGlzdGVuZXIsIGV2ZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fZGVsaXZlcnlRdWV1ZS5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsaXN0ZW5lciwgZXZlbnRdID0gdGhpcy5fZGVsaXZlcnlRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodW5kZWZpbmVkLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lclswXS5jYWxsKGxpc3RlbmVyWzFdLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIGVycm9yc18xLm9uVW5leHBlY3RlZEVycm9yKShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RlbGl2ZXJ5UXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGVha2FnZU1vbikge1xuICAgICAgICAgICAgdGhpcy5fbGVha2FnZU1vbi5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydHMuRW1pdHRlciA9IEVtaXR0ZXI7XG5FbWl0dGVyLl9ub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuY2xhc3MgUGF1c2VhYmxlRW1pdHRlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gMDtcbiAgICAgICAgdGhpcy5fZXZlbnRRdWV1ZSA9IG5ldyBsaW5rZWRMaXN0XzEuTGlua2VkTGlzdCgpO1xuICAgICAgICB0aGlzLl9tZXJnZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQrKztcbiAgICB9XG4gICAgcmVzdW1lKCkge1xuICAgICAgICBpZiAodGhpcy5faXNQYXVzZWQgIT09IDAgJiYgLS10aGlzLl9pc1BhdXNlZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21lcmdlRm4pIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIG1lcmdlIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNpbmdsZSBjb21wb3NpdGVcbiAgICAgICAgICAgICAgICAvLyBldmVudC4gbWFrZSBhIGNvcHkgaW4gY2FzZSBmaXJpbmcgcGF1c2VzIHRoaXMgZW1pdHRlclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IEFycmF5LmZyb20odGhpcy5fZXZlbnRRdWV1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRRdWV1ZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHN1cGVyLmZpcmUodGhpcy5fbWVyZ2VGbihldmVudHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vIG1lcmdpbmcsIGZpcmUgZWFjaCBldmVudCBpbmRpdmlkdWFsbHkgYW5kIHRlc3RcbiAgICAgICAgICAgICAgICAvLyB0aGF0IHRoaXMgZW1pdHRlciBpc24ndCBwYXVzZWQgaGFsZndheSB0aHJvdWdoXG4gICAgICAgICAgICAgICAgd2hpbGUgKCF0aGlzLl9pc1BhdXNlZCAmJiB0aGlzLl9ldmVudFF1ZXVlLnNpemUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZmlyZSh0aGlzLl9ldmVudFF1ZXVlLnNoaWZ0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmaXJlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1BhdXNlZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50UXVldWUucHVzaChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdXBlci5maXJlKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUGF1c2VhYmxlRW1pdHRlciA9IFBhdXNlYWJsZUVtaXR0ZXI7XG5jbGFzcyBBc3luY0VtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICBhc3luYyBmaXJlQXN5bmMoZGF0YSwgdG9rZW4sIHByb21pc2VKb2luKSB7XG4gICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9hc3luY0RlbGl2ZXJ5UXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jRGVsaXZlcnlRdWV1ZSA9IG5ldyBsaW5rZWRMaXN0XzEuTGlua2VkTGlzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9hc3luY0RlbGl2ZXJ5UXVldWUucHVzaChbbGlzdGVuZXIsIGRhdGFdKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5fYXN5bmNEZWxpdmVyeVF1ZXVlLnNpemUgPiAwICYmICF0b2tlbi5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCkge1xuICAgICAgICAgICAgY29uc3QgW2xpc3RlbmVyLCBkYXRhXSA9IHRoaXMuX2FzeW5jRGVsaXZlcnlRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgdGhlbmFibGVzID0gW107XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHdhaXRVbnRpbDogKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5pc0Zyb3plbih0aGVuYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhaXRVbnRpbCBjYW4gTk9UIGJlIGNhbGxlZCBhc3luY2hyb25vdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZUpvaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBwcm9taXNlSm9pbihwLCB0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicgPyBsaXN0ZW5lciA6IGxpc3RlbmVyWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGVuYWJsZXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodW5kZWZpbmVkLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lclswXS5jYWxsKGxpc3RlbmVyWzFdLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAoMCwgZXJyb3JzXzEub25VbmV4cGVjdGVkRXJyb3IpKGUpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZnJlZXplIHRoZW5hYmxlcy1jb2xsZWN0aW9uIHRvIGVuZm9yY2Ugc3luYy1jYWxscyB0b1xuICAgICAgICAgICAgLy8gd2FpdCB1bnRpbCBhbmQgdGhlbiB3YWl0IGZvciBhbGwgdGhlbmFibGVzIHRvIHJlc29sdmVcbiAgICAgICAgICAgIE9iamVjdC5mcmVlemUodGhlbmFibGVzKTtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoZW5hYmxlcykuY2F0Y2goZSA9PiAoMCwgZXJyb3JzXzEub25VbmV4cGVjdGVkRXJyb3IpKGUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQXN5bmNFbWl0dGVyID0gQXN5bmNFbWl0dGVyO1xuY2xhc3MgRXZlbnRNdWx0aXBsZXhlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzTGlzdGVuZXJzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckFkZDogKCkgPT4gdGhpcy5vbkZpcnN0TGlzdGVuZXJBZGQoKSxcbiAgICAgICAgICAgIG9uTGFzdExpc3RlbmVyUmVtb3ZlOiAoKSA9PiB0aGlzLm9uTGFzdExpc3RlbmVyUmVtb3ZlKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBldmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgYWRkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGUgPSB7IGV2ZW50OiBldmVudCwgbGlzdGVuZXI6IG51bGwgfTtcbiAgICAgICAgdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2soZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlzcG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIHRoaXMudW5ob29rKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5ldmVudHMuaW5kZXhPZihlKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKDAsIGxpZmVjeWNsZV8xLnRvRGlzcG9zYWJsZSkoKDAsIGZ1bmN0aW9uYWxfMS5vbmNlKShkaXNwb3NlKSk7XG4gICAgfVxuICAgIG9uRmlyc3RMaXN0ZW5lckFkZCgpIHtcbiAgICAgICAgdGhpcy5oYXNMaXN0ZW5lcnMgPSB0cnVlO1xuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGUgPT4gdGhpcy5ob29rKGUpKTtcbiAgICB9XG4gICAgb25MYXN0TGlzdGVuZXJSZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuaGFzTGlzdGVuZXJzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZSA9PiB0aGlzLnVuaG9vayhlKSk7XG4gICAgfVxuICAgIGhvb2soZSkge1xuICAgICAgICBlLmxpc3RlbmVyID0gZS5ldmVudChyID0+IHRoaXMuZW1pdHRlci5maXJlKHIpKTtcbiAgICB9XG4gICAgdW5ob29rKGUpIHtcbiAgICAgICAgaWYgKGUubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGUubGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGUubGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZGlzcG9zZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuRXZlbnRNdWx0aXBsZXhlciA9IEV2ZW50TXVsdGlwbGV4ZXI7XG4vKipcbiAqIFRoZSBFdmVudEJ1ZmZlcmVyIGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIGluIHdoaWNoIHlvdSB3YW50XG4gKiB0byBkZWxheSBmaXJpbmcgeW91ciBldmVudHMgZHVyaW5nIHNvbWUgY29kZS5cbiAqIFlvdSBjYW4gd3JhcCB0aGF0IGNvZGUgYW5kIGJlIHN1cmUgdGhhdCB0aGUgZXZlbnQgd2lsbCBub3RcbiAqIGJlIGZpcmVkIGR1cmluZyB0aGF0IHdyYXAuXG4gKlxuICogYGBgXG4gKiBjb25zdCBlbWl0dGVyOiBFbWl0dGVyO1xuICogY29uc3QgZGVsYXllciA9IG5ldyBFdmVudERlbGF5ZXIoKTtcbiAqIGNvbnN0IGRlbGF5ZWRFdmVudCA9IGRlbGF5ZXIud3JhcEV2ZW50KGVtaXR0ZXIuZXZlbnQpO1xuICpcbiAqIGRlbGF5ZWRFdmVudChjb25zb2xlLmxvZyk7XG4gKlxuICogZGVsYXllci5idWZmZXJFdmVudHMoKCkgPT4ge1xuICogICBlbWl0dGVyLmZpcmUoKTsgLy8gZXZlbnQgd2lsbCBub3QgYmUgZmlyZWQgeWV0XG4gKiB9KTtcbiAqXG4gKiAvLyBldmVudCB3aWxsIG9ubHkgYmUgZmlyZWQgYXQgdGhpcyBwb2ludFxuICogYGBgXG4gKi9cbmNsYXNzIEV2ZW50QnVmZmVyZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICB9XG4gICAgd3JhcEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHJldHVybiAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50KGkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuYnVmZmVyc1t0aGlzLmJ1ZmZlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHVzaCgoKSA9PiBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB1bmRlZmluZWQsIGRpc3Bvc2FibGVzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYnVmZmVyRXZlbnRzKGZuKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMucHVzaChidWZmZXIpO1xuICAgICAgICBjb25zdCByID0gZm4oKTtcbiAgICAgICAgdGhpcy5idWZmZXJzLnBvcCgpO1xuICAgICAgICBidWZmZXIuZm9yRWFjaChmbHVzaCA9PiBmbHVzaCgpKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfVxufVxuZXhwb3J0cy5FdmVudEJ1ZmZlcmVyID0gRXZlbnRCdWZmZXJlcjtcbi8qKlxuICogQSBSZWxheSBpcyBhbiBldmVudCBmb3J3YXJkZXIgd2hpY2ggZnVuY3Rpb25zIGFzIGEgcmVwbHVnYWJibGUgZXZlbnQgcGlwZS5cbiAqIE9uY2UgY3JlYXRlZCwgeW91IGNhbiBjb25uZWN0IGFuIGlucHV0IGV2ZW50IHRvIGl0IGFuZCBpdCB3aWxsIHNpbXBseSBmb3J3YXJkXG4gKiBldmVudHMgZnJvbSB0aGF0IGlucHV0IGV2ZW50IHRocm91Z2ggaXRzIG93biBgZXZlbnRgIHByb3BlcnR5LiBUaGUgYGlucHV0YFxuICogY2FuIGJlIGNoYW5nZWQgYXQgYW55IHBvaW50IGluIHRpbWUuXG4gKi9cbmNsYXNzIFJlbGF5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnB1dEV2ZW50ID0gRXZlbnQuTm9uZTtcbiAgICAgICAgdGhpcy5pbnB1dEV2ZW50TGlzdGVuZXIgPSBsaWZlY3ljbGVfMS5EaXNwb3NhYmxlLk5vbmU7XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckRpZEFkZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RXZlbnRMaXN0ZW5lciA9IHRoaXMuaW5wdXRFdmVudCh0aGlzLmVtaXR0ZXIuZmlyZSwgdGhpcy5lbWl0dGVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxhc3RMaXN0ZW5lclJlbW92ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEV2ZW50TGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudCA9IHRoaXMuZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgc2V0IGlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRFdmVudCA9IGV2ZW50O1xuICAgICAgICBpZiAodGhpcy5saXN0ZW5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFdmVudExpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFdmVudExpc3RlbmVyID0gZXZlbnQodGhpcy5lbWl0dGVyLmZpcmUsIHRoaXMuZW1pdHRlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEV2ZW50TGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZGlzcG9zZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVsYXkgPSBSZWxheTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVFcnJvcldpdGhBY3Rpb25zID0gZXhwb3J0cy5pc0Vycm9yV2l0aEFjdGlvbnMgPSBleHBvcnRzLkV4cGVjdGVkRXJyb3IgPSBleHBvcnRzLk5vdFN1cHBvcnRlZEVycm9yID0gZXhwb3J0cy5Ob3RJbXBsZW1lbnRlZEVycm9yID0gZXhwb3J0cy5nZXRFcnJvck1lc3NhZ2UgPSBleHBvcnRzLmRpc3Bvc2VkID0gZXhwb3J0cy5yZWFkb25seSA9IGV4cG9ydHMuaWxsZWdhbFN0YXRlID0gZXhwb3J0cy5pbGxlZ2FsQXJndW1lbnQgPSBleHBvcnRzLmNhbmNlbGVkID0gZXhwb3J0cy5DYW5jZWxsYXRpb25FcnJvciA9IGV4cG9ydHMuaXNQcm9taXNlQ2FuY2VsZWRFcnJvciA9IGV4cG9ydHMudHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uID0gZXhwb3J0cy5vblVuZXhwZWN0ZWRFeHRlcm5hbEVycm9yID0gZXhwb3J0cy5vblVuZXhwZWN0ZWRFcnJvciA9IGV4cG9ydHMuc2V0VW5leHBlY3RlZEVycm9ySGFuZGxlciA9IGV4cG9ydHMuZXJyb3JIYW5kbGVyID0gZXhwb3J0cy5FcnJvckhhbmRsZXIgPSB2b2lkIDA7XG4vLyBBdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5IG9uIEV2ZW50RW1pdHRlciBieSBpbXBsZW1lbnRpbmcgYSBzdWJzZXQgb2YgdGhlIGludGVyZmFjZS5cbmNsYXNzIEVycm9ySGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMudW5leHBlY3RlZEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zdGFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlICsgJ1xcblxcbicgKyBlLnN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZW1pdChlKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lcihlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICAgIH1cbiAgICBzZXRVbmV4cGVjdGVkRXJyb3JIYW5kbGVyKG5ld1VuZXhwZWN0ZWRFcnJvckhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy51bmV4cGVjdGVkRXJyb3JIYW5kbGVyID0gbmV3VW5leHBlY3RlZEVycm9ySGFuZGxlcjtcbiAgICB9XG4gICAgZ2V0VW5leHBlY3RlZEVycm9ySGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5leHBlY3RlZEVycm9ySGFuZGxlcjtcbiAgICB9XG4gICAgb25VbmV4cGVjdGVkRXJyb3IoZSkge1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIoZSk7XG4gICAgICAgIHRoaXMuZW1pdChlKTtcbiAgICB9XG4gICAgLy8gRm9yIGV4dGVybmFsIGVycm9ycywgd2UgZG9uJ3Qgd2FudCB0aGUgbGlzdGVuZXJzIHRvIGJlIGNhbGxlZFxuICAgIG9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IoZSkge1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIoZSk7XG4gICAgfVxufVxuZXhwb3J0cy5FcnJvckhhbmRsZXIgPSBFcnJvckhhbmRsZXI7XG5leHBvcnRzLmVycm9ySGFuZGxlciA9IG5ldyBFcnJvckhhbmRsZXIoKTtcbmZ1bmN0aW9uIHNldFVuZXhwZWN0ZWRFcnJvckhhbmRsZXIobmV3VW5leHBlY3RlZEVycm9ySGFuZGxlcikge1xuICAgIGV4cG9ydHMuZXJyb3JIYW5kbGVyLnNldFVuZXhwZWN0ZWRFcnJvckhhbmRsZXIobmV3VW5leHBlY3RlZEVycm9ySGFuZGxlcik7XG59XG5leHBvcnRzLnNldFVuZXhwZWN0ZWRFcnJvckhhbmRsZXIgPSBzZXRVbmV4cGVjdGVkRXJyb3JIYW5kbGVyO1xuZnVuY3Rpb24gb25VbmV4cGVjdGVkRXJyb3IoZSkge1xuICAgIC8vIGlnbm9yZSBlcnJvcnMgZnJvbSBjYW5jZWxsZWQgcHJvbWlzZXNcbiAgICBpZiAoIWlzUHJvbWlzZUNhbmNlbGVkRXJyb3IoZSkpIHtcbiAgICAgICAgZXhwb3J0cy5lcnJvckhhbmRsZXIub25VbmV4cGVjdGVkRXJyb3IoZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLm9uVW5leHBlY3RlZEVycm9yID0gb25VbmV4cGVjdGVkRXJyb3I7XG5mdW5jdGlvbiBvblVuZXhwZWN0ZWRFeHRlcm5hbEVycm9yKGUpIHtcbiAgICAvLyBpZ25vcmUgZXJyb3JzIGZyb20gY2FuY2VsbGVkIHByb21pc2VzXG4gICAgaWYgKCFpc1Byb21pc2VDYW5jZWxlZEVycm9yKGUpKSB7XG4gICAgICAgIGV4cG9ydHMuZXJyb3JIYW5kbGVyLm9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IoZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLm9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IgPSBvblVuZXhwZWN0ZWRFeHRlcm5hbEVycm9yO1xuZnVuY3Rpb24gdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgbGV0IHsgbmFtZSwgbWVzc2FnZSB9ID0gZXJyb3I7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gZXJyb3Iuc3RhY2t0cmFjZSB8fCBlcnJvci5zdGFjaztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRpc0Vycm9yOiB0cnVlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBzdGFja1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyByZXR1cm4gYXMgaXNcbiAgICByZXR1cm4gZXJyb3I7XG59XG5leHBvcnRzLnRyYW5zZm9ybUVycm9yRm9yU2VyaWFsaXphdGlvbiA9IHRyYW5zZm9ybUVycm9yRm9yU2VyaWFsaXphdGlvbjtcbmNvbnN0IGNhbmNlbGVkTmFtZSA9ICdDYW5jZWxlZCc7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZXJyb3IgaXMgYSBwcm9taXNlIGluIGNhbmNlbGVkIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGlzUHJvbWlzZUNhbmNlbGVkRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSBjYW5jZWxlZE5hbWUgJiYgZXJyb3IubWVzc2FnZSA9PT0gY2FuY2VsZWROYW1lO1xufVxuZXhwb3J0cy5pc1Byb21pc2VDYW5jZWxlZEVycm9yID0gaXNQcm9taXNlQ2FuY2VsZWRFcnJvcjtcbi8vICEhIUlNUE9SVEFOVCEhIVxuLy8gRG8gTk9UIGNoYW5nZSB0aGlzIGNsYXNzIGJlY2F1c2UgaXQgaXMgYWxzbyB1c2VkIGFzIGFuIEFQSS10eXBlLlxuY2xhc3MgQ2FuY2VsbGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKGNhbmNlbGVkTmFtZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubWVzc2FnZTtcbiAgICB9XG59XG5leHBvcnRzLkNhbmNlbGxhdGlvbkVycm9yID0gQ2FuY2VsbGF0aW9uRXJyb3I7XG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdGhhdCBzaWduYWxzIGNhbmNlbGxhdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FuY2VsZWQoKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoY2FuY2VsZWROYW1lKTtcbiAgICBlcnJvci5uYW1lID0gZXJyb3IubWVzc2FnZTtcbiAgICByZXR1cm4gZXJyb3I7XG59XG5leHBvcnRzLmNhbmNlbGVkID0gY2FuY2VsZWQ7XG5mdW5jdGlvbiBpbGxlZ2FsQXJndW1lbnQobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYElsbGVnYWwgYXJndW1lbnQ6ICR7bmFtZX1gKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQnKTtcbiAgICB9XG59XG5leHBvcnRzLmlsbGVnYWxBcmd1bWVudCA9IGlsbGVnYWxBcmd1bWVudDtcbmZ1bmN0aW9uIGlsbGVnYWxTdGF0ZShuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgSWxsZWdhbCBzdGF0ZTogJHtuYW1lfWApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignSWxsZWdhbCBzdGF0ZScpO1xuICAgIH1cbn1cbmV4cG9ydHMuaWxsZWdhbFN0YXRlID0gaWxsZWdhbFN0YXRlO1xuZnVuY3Rpb24gcmVhZG9ubHkobmFtZSkge1xuICAgIHJldHVybiBuYW1lXG4gICAgICAgID8gbmV3IEVycm9yKGByZWFkb25seSBwcm9wZXJ0eSAnJHtuYW1lfSBjYW5ub3QgYmUgY2hhbmdlZCdgKVxuICAgICAgICA6IG5ldyBFcnJvcigncmVhZG9ubHkgcHJvcGVydHkgY2Fubm90IGJlIGNoYW5nZWQnKTtcbn1cbmV4cG9ydHMucmVhZG9ubHkgPSByZWFkb25seTtcbmZ1bmN0aW9uIGRpc3Bvc2VkKHdoYXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRXJyb3IoYCR7d2hhdH0gaGFzIGJlZW4gZGlzcG9zZWRgKTtcbiAgICByZXN1bHQubmFtZSA9ICdESVNQT1NFRCc7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZGlzcG9zZWQgPSBkaXNwb3NlZDtcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnIpIHtcbiAgICBpZiAoIWVycikge1xuICAgICAgICByZXR1cm4gJ0Vycm9yJztcbiAgICB9XG4gICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgICByZXR1cm4gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhlcnIpO1xufVxuZXhwb3J0cy5nZXRFcnJvck1lc3NhZ2UgPSBnZXRFcnJvck1lc3NhZ2U7XG5jbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIoJ05vdEltcGxlbWVudGVkJyk7XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Ob3RJbXBsZW1lbnRlZEVycm9yID0gTm90SW1wbGVtZW50ZWRFcnJvcjtcbmNsYXNzIE5vdFN1cHBvcnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIoJ05vdFN1cHBvcnRlZCcpO1xuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuTm90U3VwcG9ydGVkRXJyb3IgPSBOb3RTdXBwb3J0ZWRFcnJvcjtcbmNsYXNzIEV4cGVjdGVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaXNFeHBlY3RlZCA9IHRydWU7XG4gICAgfVxufVxuZXhwb3J0cy5FeHBlY3RlZEVycm9yID0gRXhwZWN0ZWRFcnJvcjtcbmZ1bmN0aW9uIGlzRXJyb3JXaXRoQWN0aW9ucyhvYmopIHtcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBvYmo7XG4gICAgcmV0dXJuIGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEVycm9yICYmIEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlLmFjdGlvbnMpO1xufVxuZXhwb3J0cy5pc0Vycm9yV2l0aEFjdGlvbnMgPSBpc0Vycm9yV2l0aEFjdGlvbnM7XG5mdW5jdGlvbiBjcmVhdGVFcnJvcldpdGhBY3Rpb25zKG1lc3NhZ2UsIG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIGlmIChvcHRpb25zLmFjdGlvbnMpIHtcbiAgICAgICAgcmVzdWx0LmFjdGlvbnMgPSBvcHRpb25zLmFjdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmNyZWF0ZUVycm9yV2l0aEFjdGlvbnMgPSBjcmVhdGVFcnJvcldpdGhBY3Rpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub25jZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGRpZENhbGwgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkaWRDYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGRpZENhbGwgPSB0cnVlO1xuICAgICAgICByZXN1bHQgPSBmbi5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuZXhwb3J0cy5vbmNlID0gb25jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkltbW9ydGFsUmVmZXJlbmNlID0gZXhwb3J0cy5Bc3luY1JlZmVyZW5jZUNvbGxlY3Rpb24gPSBleHBvcnRzLlJlZmVyZW5jZUNvbGxlY3Rpb24gPSBleHBvcnRzLlJlZkNvdW50ZWREaXNwb3NhYmxlID0gZXhwb3J0cy5NdXRhYmxlRGlzcG9zYWJsZSA9IGV4cG9ydHMuRGlzcG9zYWJsZSA9IGV4cG9ydHMuRGlzcG9zYWJsZVN0b3JlID0gZXhwb3J0cy50b0Rpc3Bvc2FibGUgPSBleHBvcnRzLmNvbWJpbmVkRGlzcG9zYWJsZSA9IGV4cG9ydHMuZGlzcG9zZSA9IGV4cG9ydHMuaXNEaXNwb3NhYmxlID0gZXhwb3J0cy5NdWx0aURpc3Bvc2VFcnJvciA9IGV4cG9ydHMubWFya0FzU2luZ2xldG9uID0gZXhwb3J0cy5zZXREaXNwb3NhYmxlVHJhY2tlciA9IHZvaWQgMDtcbmNvbnN0IGZ1bmN0aW9uYWxfMSA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uYWxcIik7XG5jb25zdCBpdGVyYXRvcl8xID0gcmVxdWlyZShcIi4vaXRlcmF0b3JcIik7XG4vKipcbiAqIEVuYWJsZXMgbG9nZ2luZyBvZiBwb3RlbnRpYWxseSBsZWFrZWQgZGlzcG9zYWJsZXMuXG4gKlxuICogQSBkaXNwb3NhYmxlIGlzIGNvbnNpZGVyZWQgbGVha2VkIGlmIGl0IGlzIG5vdCBkaXNwb3NlZCBvciBub3QgcmVnaXN0ZXJlZCBhcyB0aGUgY2hpbGQgb2ZcbiAqIGFub3RoZXIgZGlzcG9zYWJsZS4gVGhpcyB0cmFja2luZyBpcyB2ZXJ5IHNpbXBsZSBhbiBvbmx5IHdvcmtzIGZvciBjbGFzc2VzIHRoYXQgZWl0aGVyXG4gKiBleHRlbmQgRGlzcG9zYWJsZSBvciB1c2UgYSBEaXNwb3NhYmxlU3RvcmUuIFRoaXMgbWVhbnMgdGhlcmUgYXJlIGEgbG90IG9mIGZhbHNlIHBvc2l0aXZlcy5cbiAqL1xuY29uc3QgVFJBQ0tfRElTUE9TQUJMRVMgPSBmYWxzZTtcbmxldCBkaXNwb3NhYmxlVHJhY2tlciA9IG51bGw7XG5mdW5jdGlvbiBzZXREaXNwb3NhYmxlVHJhY2tlcih0cmFja2VyKSB7XG4gICAgZGlzcG9zYWJsZVRyYWNrZXIgPSB0cmFja2VyO1xufVxuZXhwb3J0cy5zZXREaXNwb3NhYmxlVHJhY2tlciA9IHNldERpc3Bvc2FibGVUcmFja2VyO1xuaWYgKFRSQUNLX0RJU1BPU0FCTEVTKSB7XG4gICAgY29uc3QgX19pc19kaXNwb3NhYmxlX3RyYWNrZWRfXyA9ICdfX2lzX2Rpc3Bvc2FibGVfdHJhY2tlZF9fJztcbiAgICBzZXREaXNwb3NhYmxlVHJhY2tlcihuZXcgY2xhc3Mge1xuICAgICAgICB0cmFja0Rpc3Bvc2FibGUoeCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgRXJyb3IoJ1BvdGVudGlhbGx5IGxlYWtlZCBkaXNwb3NhYmxlJykuc3RhY2s7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXhbX19pc19kaXNwb3NhYmxlX3RyYWNrZWRfX10pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICAgIHNldFBhcmVudChjaGlsZCwgcGFyZW50KSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQgIT09IERpc3Bvc2FibGUuTm9uZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkW19faXNfZGlzcG9zYWJsZV90cmFja2VkX19dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFya0FzRGlzcG9zZWQoZGlzcG9zYWJsZSkge1xuICAgICAgICAgICAgaWYgKGRpc3Bvc2FibGUgJiYgZGlzcG9zYWJsZSAhPT0gRGlzcG9zYWJsZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcG9zYWJsZVtfX2lzX2Rpc3Bvc2FibGVfdHJhY2tlZF9fXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmtBc1NpbmdsZXRvbihkaXNwb3NhYmxlKSB7IH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHRyYWNrRGlzcG9zYWJsZSh4KSB7XG4gICAgZGlzcG9zYWJsZVRyYWNrZXIgPT09IG51bGwgfHwgZGlzcG9zYWJsZVRyYWNrZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpc3Bvc2FibGVUcmFja2VyLnRyYWNrRGlzcG9zYWJsZSh4KTtcbiAgICByZXR1cm4geDtcbn1cbmZ1bmN0aW9uIG1hcmtBc0Rpc3Bvc2VkKGRpc3Bvc2FibGUpIHtcbiAgICBkaXNwb3NhYmxlVHJhY2tlciA9PT0gbnVsbCB8fCBkaXNwb3NhYmxlVHJhY2tlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlzcG9zYWJsZVRyYWNrZXIubWFya0FzRGlzcG9zZWQoZGlzcG9zYWJsZSk7XG59XG5mdW5jdGlvbiBzZXRQYXJlbnRPZkRpc3Bvc2FibGUoY2hpbGQsIHBhcmVudCkge1xuICAgIGRpc3Bvc2FibGVUcmFja2VyID09PSBudWxsIHx8IGRpc3Bvc2FibGVUcmFja2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXNwb3NhYmxlVHJhY2tlci5zZXRQYXJlbnQoY2hpbGQsIHBhcmVudCk7XG59XG5mdW5jdGlvbiBzZXRQYXJlbnRPZkRpc3Bvc2FibGVzKGNoaWxkcmVuLCBwYXJlbnQpIHtcbiAgICBpZiAoIWRpc3Bvc2FibGVUcmFja2VyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBkaXNwb3NhYmxlVHJhY2tlci5zZXRQYXJlbnQoY2hpbGQsIHBhcmVudCk7XG4gICAgfVxufVxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgc2luZ2xldG9uIHdoaWNoIGRvZXMgbm90IG5lZWQgdG8gYmUgZGlzcG9zZWQuXG4qL1xuZnVuY3Rpb24gbWFya0FzU2luZ2xldG9uKHNpbmdsZXRvbikge1xuICAgIGRpc3Bvc2FibGVUcmFja2VyID09PSBudWxsIHx8IGRpc3Bvc2FibGVUcmFja2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXNwb3NhYmxlVHJhY2tlci5tYXJrQXNTaW5nbGV0b24oc2luZ2xldG9uKTtcbiAgICByZXR1cm4gc2luZ2xldG9uO1xufVxuZXhwb3J0cy5tYXJrQXNTaW5nbGV0b24gPSBtYXJrQXNTaW5nbGV0b247XG5jbGFzcyBNdWx0aURpc3Bvc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvcnMpIHtcbiAgICAgICAgc3VwZXIoYEVuY291bnRlcmVkIGVycm9ycyB3aGlsZSBkaXNwb3Npbmcgb2Ygc3RvcmUuIEVycm9yczogWyR7ZXJyb3JzLmpvaW4oJywgJyl9XWApO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG59XG5leHBvcnRzLk11bHRpRGlzcG9zZUVycm9yID0gTXVsdGlEaXNwb3NlRXJyb3I7XG5mdW5jdGlvbiBpc0Rpc3Bvc2FibGUodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nLmRpc3Bvc2UgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcuZGlzcG9zZS5sZW5ndGggPT09IDA7XG59XG5leHBvcnRzLmlzRGlzcG9zYWJsZSA9IGlzRGlzcG9zYWJsZTtcbmZ1bmN0aW9uIGRpc3Bvc2UoYXJnKSB7XG4gICAgaWYgKGl0ZXJhdG9yXzEuSXRlcmFibGUuaXMoYXJnKSkge1xuICAgICAgICBsZXQgZXJyb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZCBvZiBhcmcpIHtcbiAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3JzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVycm9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTXVsdGlEaXNwb3NlRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpID8gW10gOiBhcmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZykge1xuICAgICAgICBhcmcuZGlzcG9zZSgpO1xuICAgICAgICByZXR1cm4gYXJnO1xuICAgIH1cbn1cbmV4cG9ydHMuZGlzcG9zZSA9IGRpc3Bvc2U7XG5mdW5jdGlvbiBjb21iaW5lZERpc3Bvc2FibGUoLi4uZGlzcG9zYWJsZXMpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0b0Rpc3Bvc2FibGUoKCkgPT4gZGlzcG9zZShkaXNwb3NhYmxlcykpO1xuICAgIHNldFBhcmVudE9mRGlzcG9zYWJsZXMoZGlzcG9zYWJsZXMsIHBhcmVudCk7XG4gICAgcmV0dXJuIHBhcmVudDtcbn1cbmV4cG9ydHMuY29tYmluZWREaXNwb3NhYmxlID0gY29tYmluZWREaXNwb3NhYmxlO1xuZnVuY3Rpb24gdG9EaXNwb3NhYmxlKGZuKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRyYWNrRGlzcG9zYWJsZSh7XG4gICAgICAgIGRpc3Bvc2U6ICgwLCBmdW5jdGlvbmFsXzEub25jZSkoKCkgPT4ge1xuICAgICAgICAgICAgbWFya0FzRGlzcG9zZWQoc2VsZik7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xufVxuZXhwb3J0cy50b0Rpc3Bvc2FibGUgPSB0b0Rpc3Bvc2FibGU7XG5jbGFzcyBEaXNwb3NhYmxlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl90b0Rpc3Bvc2UgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuX2lzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdHJhY2tEaXNwb3NhYmxlKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIG9mIGFsbCByZWdpc3RlcmVkIGRpc3Bvc2FibGVzIGFuZCBtYXJrIHRoaXMgb2JqZWN0IGFzIGRpc3Bvc2VkLlxuICAgICAqXG4gICAgICogQW55IGZ1dHVyZSBkaXNwb3NhYmxlcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aWxsIGJlIGRpc3Bvc2VkIG9mIG9uIGBhZGRgLlxuICAgICAqL1xuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWFya0FzRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIHRoaXMuX2lzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc3Bvc2Ugb2YgYWxsIHJlZ2lzdGVyZWQgZGlzcG9zYWJsZXMgYnV0IGRvIG5vdCBtYXJrIHRoaXMgb2JqZWN0IGFzIGRpc3Bvc2VkLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGlzcG9zZSh0aGlzLl90b0Rpc3Bvc2UudmFsdWVzKCkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5fdG9EaXNwb3NlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkKHQpIHtcbiAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodCA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVnaXN0ZXIgYSBkaXNwb3NhYmxlIG9uIGl0c2VsZiEnKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRQYXJlbnRPZkRpc3Bvc2FibGUodCwgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICBpZiAoIURpc3Bvc2FibGVTdG9yZS5ESVNBQkxFX0RJU1BPU0VEX1dBUk5JTkcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCdUcnlpbmcgdG8gYWRkIGEgZGlzcG9zYWJsZSB0byBhIERpc3Bvc2FibGVTdG9yZSB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gZGlzcG9zZWQgb2YuIFRoZSBhZGRlZCBvYmplY3Qgd2lsbCBiZSBsZWFrZWQhJykuc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdG9EaXNwb3NlLmFkZCh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG59XG5leHBvcnRzLkRpc3Bvc2FibGVTdG9yZSA9IERpc3Bvc2FibGVTdG9yZTtcbkRpc3Bvc2FibGVTdG9yZS5ESVNBQkxFX0RJU1BPU0VEX1dBUk5JTkcgPSBmYWxzZTtcbmNsYXNzIERpc3Bvc2FibGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9zdG9yZSA9IG5ldyBEaXNwb3NhYmxlU3RvcmUoKTtcbiAgICAgICAgdHJhY2tEaXNwb3NhYmxlKHRoaXMpO1xuICAgICAgICBzZXRQYXJlbnRPZkRpc3Bvc2FibGUodGhpcy5fc3RvcmUsIHRoaXMpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBtYXJrQXNEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBfcmVnaXN0ZXIodCkge1xuICAgICAgICBpZiAodCA9PT0gdGhpcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVnaXN0ZXIgYSBkaXNwb3NhYmxlIG9uIGl0c2VsZiEnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmUuYWRkKHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuRGlzcG9zYWJsZSA9IERpc3Bvc2FibGU7XG5EaXNwb3NhYmxlLk5vbmUgPSBPYmplY3QuZnJlZXplKHsgZGlzcG9zZSgpIHsgfSB9KTtcbi8qKlxuICogTWFuYWdlcyB0aGUgbGlmZWN5Y2xlIG9mIGEgZGlzcG9zYWJsZSB2YWx1ZSB0aGF0IG1heSBiZSBjaGFuZ2VkLlxuICpcbiAqIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gdGhlIGRpc3Bvc2FibGUgdmFsdWUgaXMgY2hhbmdlZCwgdGhlIHByZXZpb3VzbHkgaGVsZCBkaXNwb3NhYmxlIGlzIGRpc3Bvc2VkIG9mLiBZb3UgY2FuXG4gKiBhbHNvIHJlZ2lzdGVyIGEgYE11dGFibGVEaXNwb3NhYmxlYCBvbiBhIGBEaXNwb3NhYmxlYCB0byBlbnN1cmUgaXQgaXMgYXV0b21hdGljYWxseSBjbGVhbmVkIHVwLlxuICovXG5jbGFzcyBNdXRhYmxlRGlzcG9zYWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2lzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdHJhY2tEaXNwb3NhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc3Bvc2VkID8gdW5kZWZpbmVkIDogdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkIHx8IHZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIChfYSA9IHRoaXMuX3ZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGlzcG9zZSgpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNldFBhcmVudE9mRGlzcG9zYWJsZSh2YWx1ZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5faXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIG1hcmtBc0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICAoX2EgPSB0aGlzLl92YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgdmFsdWUsIGJ1dCBkb2VzIG5vdCBkaXNwb3NlIGl0LlxuICAgICAqIFRoZSBvbGQgdmFsdWUgaXMgcmV0dXJuZWQuXG4gICAgKi9cbiAgICBjbGVhckFuZExlYWsoKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHNldFBhcmVudE9mRGlzcG9zYWJsZShvbGRWYWx1ZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuTXV0YWJsZURpc3Bvc2FibGUgPSBNdXRhYmxlRGlzcG9zYWJsZTtcbmNsYXNzIFJlZkNvdW50ZWREaXNwb3NhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihfZGlzcG9zYWJsZSkge1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlID0gX2Rpc3Bvc2FibGU7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSAxO1xuICAgIH1cbiAgICBhY3F1aXJlKCkge1xuICAgICAgICB0aGlzLl9jb3VudGVyKys7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWxlYXNlKCkge1xuICAgICAgICBpZiAoLS10aGlzLl9jb3VudGVyID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnRzLlJlZkNvdW50ZWREaXNwb3NhYmxlID0gUmVmQ291bnRlZERpc3Bvc2FibGU7XG5jbGFzcyBSZWZlcmVuY2VDb2xsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhY3F1aXJlKGtleSwgLi4uYXJncykge1xuICAgICAgICBsZXQgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmdldChrZXkpO1xuICAgICAgICBpZiAoIXJlZmVyZW5jZSkge1xuICAgICAgICAgICAgcmVmZXJlbmNlID0geyBjb3VudGVyOiAwLCBvYmplY3Q6IHRoaXMuY3JlYXRlUmVmZXJlbmNlZE9iamVjdChrZXksIC4uLmFyZ3MpIH07XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMuc2V0KGtleSwgcmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG9iamVjdCB9ID0gcmVmZXJlbmNlO1xuICAgICAgICBjb25zdCBkaXNwb3NlID0gKDAsIGZ1bmN0aW9uYWxfMS5vbmNlKSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoLS1yZWZlcmVuY2UuY291bnRlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVJlZmVyZW5jZWRPYmplY3Qoa2V5LCByZWZlcmVuY2Uub2JqZWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZWZlcmVuY2UuY291bnRlcisrO1xuICAgICAgICByZXR1cm4geyBvYmplY3QsIGRpc3Bvc2UgfTtcbiAgICB9XG59XG5leHBvcnRzLlJlZmVyZW5jZUNvbGxlY3Rpb24gPSBSZWZlcmVuY2VDb2xsZWN0aW9uO1xuLyoqXG4gKiBVbndyYXBzIGEgcmVmZXJlbmNlIGNvbGxlY3Rpb24gb2YgcHJvbWlzZWQgdmFsdWVzLiBNYWtlcyBzdXJlXG4gKiByZWZlcmVuY2VzIGFyZSBkaXNwb3NlZCB3aGVuZXZlciBwcm9taXNlcyBnZXQgcmVqZWN0ZWQuXG4gKi9cbmNsYXNzIEFzeW5jUmVmZXJlbmNlQ29sbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlQ29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZUNvbGxlY3Rpb24gPSByZWZlcmVuY2VDb2xsZWN0aW9uO1xuICAgIH1cbiAgICBhc3luYyBhY3F1aXJlKGtleSwgLi4uYXJncykge1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnJlZmVyZW5jZUNvbGxlY3Rpb24uYWNxdWlyZShrZXksIC4uLmFyZ3MpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gYXdhaXQgcmVmLm9iamVjdDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHJlZi5kaXNwb3NlKClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWYuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkFzeW5jUmVmZXJlbmNlQ29sbGVjdGlvbiA9IEFzeW5jUmVmZXJlbmNlQ29sbGVjdGlvbjtcbmNsYXNzIEltbW9ydGFsUmVmZXJlbmNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7IH1cbn1cbmV4cG9ydHMuSW1tb3J0YWxSZWZlcmVuY2UgPSBJbW1vcnRhbFJlZmVyZW5jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvTG9jYWxSZXNvdXJjZSA9IGV4cG9ydHMuRGF0YVVyaSA9IGV4cG9ydHMuZGlzdGluY3RQYXJlbnRzID0gZXhwb3J0cy5hZGRUcmFpbGluZ1BhdGhTZXBhcmF0b3IgPSBleHBvcnRzLnJlbW92ZVRyYWlsaW5nUGF0aFNlcGFyYXRvciA9IGV4cG9ydHMuaGFzVHJhaWxpbmdQYXRoU2VwYXJhdG9yID0gZXhwb3J0cy5pc0VxdWFsQXV0aG9yaXR5ID0gZXhwb3J0cy5pc0Fic29sdXRlUGF0aCA9IGV4cG9ydHMucmVzb2x2ZVBhdGggPSBleHBvcnRzLnJlbGF0aXZlUGF0aCA9IGV4cG9ydHMubm9ybWFsaXplUGF0aCA9IGV4cG9ydHMuam9pblBhdGggPSBleHBvcnRzLmRpcm5hbWUgPSBleHBvcnRzLmV4dG5hbWUgPSBleHBvcnRzLmJhc2VuYW1lID0gZXhwb3J0cy5iYXNlbmFtZU9yQXV0aG9yaXR5ID0gZXhwb3J0cy5nZXRDb21wYXJpc29uS2V5ID0gZXhwb3J0cy5pc0VxdWFsT3JQYXJlbnQgPSBleHBvcnRzLmlzRXF1YWwgPSBleHBvcnRzLmV4dFVyaUlnbm9yZVBhdGhDYXNlID0gZXhwb3J0cy5leHRVcmlCaWFzZWRJZ25vcmVQYXRoQ2FzZSA9IGV4cG9ydHMuZXh0VXJpID0gZXhwb3J0cy5FeHRVcmkgPSBleHBvcnRzLm9yaWdpbmFsRlNQYXRoID0gdm9pZCAwO1xuY29uc3QgZXh0cGF0aCA9IHJlcXVpcmUoXCIuL2V4dHBhdGhcIik7XG5jb25zdCBwYXRocyA9IHJlcXVpcmUoXCIuL3BhdGhcIik7XG5jb25zdCB1cmlfMSA9IHJlcXVpcmUoXCIuL3VyaVwiKTtcbmNvbnN0IHN0cmluZ3NfMSA9IHJlcXVpcmUoXCIuL3N0cmluZ3NcIik7XG5jb25zdCBuZXR3b3JrXzEgPSByZXF1aXJlKFwiLi9uZXR3b3JrXCIpO1xuY29uc3QgcGxhdGZvcm1fMSA9IHJlcXVpcmUoXCIuL3BsYXRmb3JtXCIpO1xuZnVuY3Rpb24gb3JpZ2luYWxGU1BhdGgodXJpKSB7XG4gICAgcmV0dXJuICgwLCB1cmlfMS51cmlUb0ZzUGF0aCkodXJpLCB0cnVlKTtcbn1cbmV4cG9ydHMub3JpZ2luYWxGU1BhdGggPSBvcmlnaW5hbEZTUGF0aDtcbmNsYXNzIEV4dFVyaSB7XG4gICAgY29uc3RydWN0b3IoX2lnbm9yZVBhdGhDYXNpbmcpIHtcbiAgICAgICAgdGhpcy5faWdub3JlUGF0aENhc2luZyA9IF9pZ25vcmVQYXRoQ2FzaW5nO1xuICAgIH1cbiAgICBjb21wYXJlKHVyaTEsIHVyaTIsIGlnbm9yZUZyYWdtZW50ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHVyaTEgPT09IHVyaTIpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMCwgc3RyaW5nc18xLmNvbXBhcmUpKHRoaXMuZ2V0Q29tcGFyaXNvbktleSh1cmkxLCBpZ25vcmVGcmFnbWVudCksIHRoaXMuZ2V0Q29tcGFyaXNvbktleSh1cmkyLCBpZ25vcmVGcmFnbWVudCkpO1xuICAgIH1cbiAgICBpc0VxdWFsKHVyaTEsIHVyaTIsIGlnbm9yZUZyYWdtZW50ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHVyaTEgPT09IHVyaTIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdXJpMSB8fCAhdXJpMikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBhcmlzb25LZXkodXJpMSwgaWdub3JlRnJhZ21lbnQpID09PSB0aGlzLmdldENvbXBhcmlzb25LZXkodXJpMiwgaWdub3JlRnJhZ21lbnQpO1xuICAgIH1cbiAgICBnZXRDb21wYXJpc29uS2V5KHVyaSwgaWdub3JlRnJhZ21lbnQgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdXJpLndpdGgoe1xuICAgICAgICAgICAgcGF0aDogdGhpcy5faWdub3JlUGF0aENhc2luZyh1cmkpID8gdXJpLnBhdGgudG9Mb3dlckNhc2UoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGZyYWdtZW50OiBpZ25vcmVGcmFnbWVudCA/IG51bGwgOiB1bmRlZmluZWRcbiAgICAgICAgfSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWdub3JlUGF0aENhc2luZyh1cmkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lnbm9yZVBhdGhDYXNpbmcodXJpKTtcbiAgICB9XG4gICAgaXNFcXVhbE9yUGFyZW50KGJhc2UsIHBhcmVudENhbmRpZGF0ZSwgaWdub3JlRnJhZ21lbnQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoYmFzZS5zY2hlbWUgPT09IHBhcmVudENhbmRpZGF0ZS5zY2hlbWUpIHtcbiAgICAgICAgICAgIGlmIChiYXNlLnNjaGVtZSA9PT0gbmV0d29ya18xLlNjaGVtYXMuZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHRwYXRoLmlzRXF1YWxPclBhcmVudChvcmlnaW5hbEZTUGF0aChiYXNlKSwgb3JpZ2luYWxGU1BhdGgocGFyZW50Q2FuZGlkYXRlKSwgdGhpcy5faWdub3JlUGF0aENhc2luZyhiYXNlKSkgJiYgYmFzZS5xdWVyeSA9PT0gcGFyZW50Q2FuZGlkYXRlLnF1ZXJ5ICYmIChpZ25vcmVGcmFnbWVudCB8fCBiYXNlLmZyYWdtZW50ID09PSBwYXJlbnRDYW5kaWRhdGUuZnJhZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgwLCBleHBvcnRzLmlzRXF1YWxBdXRob3JpdHkpKGJhc2UuYXV0aG9yaXR5LCBwYXJlbnRDYW5kaWRhdGUuYXV0aG9yaXR5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHRwYXRoLmlzRXF1YWxPclBhcmVudChiYXNlLnBhdGgsIHBhcmVudENhbmRpZGF0ZS5wYXRoLCB0aGlzLl9pZ25vcmVQYXRoQ2FzaW5nKGJhc2UpLCAnLycpICYmIGJhc2UucXVlcnkgPT09IHBhcmVudENhbmRpZGF0ZS5xdWVyeSAmJiAoaWdub3JlRnJhZ21lbnQgfHwgYmFzZS5mcmFnbWVudCA9PT0gcGFyZW50Q2FuZGlkYXRlLmZyYWdtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIC0tLSBwYXRoIG1hdGhcbiAgICBqb2luUGF0aChyZXNvdXJjZSwgLi4ucGF0aEZyYWdtZW50KSB7XG4gICAgICAgIHJldHVybiB1cmlfMS5VUkkuam9pblBhdGgocmVzb3VyY2UsIC4uLnBhdGhGcmFnbWVudCk7XG4gICAgfVxuICAgIGJhc2VuYW1lT3JBdXRob3JpdHkocmVzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuICgwLCBleHBvcnRzLmJhc2VuYW1lKShyZXNvdXJjZSkgfHwgcmVzb3VyY2UuYXV0aG9yaXR5O1xuICAgIH1cbiAgICBiYXNlbmFtZShyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gcGF0aHMucG9zaXguYmFzZW5hbWUocmVzb3VyY2UucGF0aCk7XG4gICAgfVxuICAgIGV4dG5hbWUocmVzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhzLnBvc2l4LmV4dG5hbWUocmVzb3VyY2UucGF0aCk7XG4gICAgfVxuICAgIGRpcm5hbWUocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKHJlc291cmNlLnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpcm5hbWU7XG4gICAgICAgIGlmIChyZXNvdXJjZS5zY2hlbWUgPT09IG5ldHdvcmtfMS5TY2hlbWFzLmZpbGUpIHtcbiAgICAgICAgICAgIGRpcm5hbWUgPSB1cmlfMS5VUkkuZmlsZShwYXRocy5kaXJuYW1lKG9yaWdpbmFsRlNQYXRoKHJlc291cmNlKSkpLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkaXJuYW1lID0gcGF0aHMucG9zaXguZGlybmFtZShyZXNvdXJjZS5wYXRoKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZS5hdXRob3JpdHkgJiYgZGlybmFtZS5sZW5ndGggJiYgZGlybmFtZS5jaGFyQ29kZUF0KDApICE9PSA0NyAvKiBTbGFzaCAqLykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGRpcm5hbWUoXCIke3Jlc291cmNlLnRvU3RyaW5nfSkpIHJlc3VsdGVkIGluIGEgcmVsYXRpdmUgcGF0aGApO1xuICAgICAgICAgICAgICAgIGRpcm5hbWUgPSAnLyc7IC8vIElmIGEgVVJJIGNvbnRhaW5zIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY29tcG9uZW50IG11c3QgZWl0aGVyIGJlIGVtcHR5IG9yIGJlZ2luIHdpdGggYSBDaGFyQ29kZS5TbGFzaCAoXCIvXCIpIGNoYXJhY3RlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZS53aXRoKHtcbiAgICAgICAgICAgIHBhdGg6IGRpcm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZVBhdGgocmVzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZS5wYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBub3JtYWxpemVkUGF0aDtcbiAgICAgICAgaWYgKHJlc291cmNlLnNjaGVtZSA9PT0gbmV0d29ya18xLlNjaGVtYXMuZmlsZSkge1xuICAgICAgICAgICAgbm9ybWFsaXplZFBhdGggPSB1cmlfMS5VUkkuZmlsZShwYXRocy5ub3JtYWxpemUob3JpZ2luYWxGU1BhdGgocmVzb3VyY2UpKSkucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQYXRoID0gcGF0aHMucG9zaXgubm9ybWFsaXplKHJlc291cmNlLnBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZS53aXRoKHtcbiAgICAgICAgICAgIHBhdGg6IG5vcm1hbGl6ZWRQYXRoXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWxhdGl2ZVBhdGgoZnJvbSwgdG8pIHtcbiAgICAgICAgaWYgKGZyb20uc2NoZW1lICE9PSB0by5zY2hlbWUgfHwgISgwLCBleHBvcnRzLmlzRXF1YWxBdXRob3JpdHkpKGZyb20uYXV0aG9yaXR5LCB0by5hdXRob3JpdHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tLnNjaGVtZSA9PT0gbmV0d29ya18xLlNjaGVtYXMuZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aHMucmVsYXRpdmUob3JpZ2luYWxGU1BhdGgoZnJvbSksIG9yaWdpbmFsRlNQYXRoKHRvKSk7XG4gICAgICAgICAgICByZXR1cm4gcGxhdGZvcm1fMS5pc1dpbmRvd3MgPyBleHRwYXRoLnRvU2xhc2hlcyhyZWxhdGl2ZVBhdGgpIDogcmVsYXRpdmVQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmcm9tUGF0aCA9IGZyb20ucGF0aCB8fCAnLycsIHRvUGF0aCA9IHRvLnBhdGggfHwgJy8nO1xuICAgICAgICBpZiAodGhpcy5faWdub3JlUGF0aENhc2luZyhmcm9tKSkge1xuICAgICAgICAgICAgLy8gbWFrZSBjYXNpbmcgb2YgZnJvbVBhdGggbWF0Y2ggdG9QYXRoXG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxlbiA9IE1hdGgubWluKGZyb21QYXRoLmxlbmd0aCwgdG9QYXRoLmxlbmd0aCk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChmcm9tUGF0aC5jaGFyQ29kZUF0KGkpICE9PSB0b1BhdGguY2hhckNvZGVBdChpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbVBhdGguY2hhckF0KGkpLnRvTG93ZXJDYXNlKCkgIT09IHRvUGF0aC5jaGFyQXQoaSkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcm9tUGF0aCA9IHRvUGF0aC5zdWJzdHIoMCwgaSkgKyBmcm9tUGF0aC5zdWJzdHIoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGhzLnBvc2l4LnJlbGF0aXZlKGZyb21QYXRoLCB0b1BhdGgpO1xuICAgIH1cbiAgICByZXNvbHZlUGF0aChiYXNlLCBwYXRoKSB7XG4gICAgICAgIGlmIChiYXNlLnNjaGVtZSA9PT0gbmV0d29ya18xLlNjaGVtYXMuZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VVJJID0gdXJpXzEuVVJJLmZpbGUocGF0aHMucmVzb2x2ZShvcmlnaW5hbEZTUGF0aChiYXNlKSwgcGF0aCkpO1xuICAgICAgICAgICAgcmV0dXJuIGJhc2Uud2l0aCh7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5OiBuZXdVUkkuYXV0aG9yaXR5LFxuICAgICAgICAgICAgICAgIHBhdGg6IG5ld1VSSS5wYXRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwYXRoID0gZXh0cGF0aC50b1Bvc2l4UGF0aChwYXRoKTsgLy8gd2UgYWxsb3cgcGF0aCB0byBiZSBhIHdpbmRvd3MgcGF0aFxuICAgICAgICByZXR1cm4gYmFzZS53aXRoKHtcbiAgICAgICAgICAgIHBhdGg6IHBhdGhzLnBvc2l4LnJlc29sdmUoYmFzZS5wYXRoLCBwYXRoKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gLS0tIG1pc2NcbiAgICBpc0Fic29sdXRlUGF0aChyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gISFyZXNvdXJjZS5wYXRoICYmIHJlc291cmNlLnBhdGhbMF0gPT09ICcvJztcbiAgICB9XG4gICAgaXNFcXVhbEF1dGhvcml0eShhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIGExID09PSBhMiB8fCAoMCwgc3RyaW5nc18xLmVxdWFsc0lnbm9yZUNhc2UpKGExLCBhMik7XG4gICAgfVxuICAgIGhhc1RyYWlsaW5nUGF0aFNlcGFyYXRvcihyZXNvdXJjZSwgc2VwID0gcGF0aHMuc2VwKSB7XG4gICAgICAgIGlmIChyZXNvdXJjZS5zY2hlbWUgPT09IG5ldHdvcmtfMS5TY2hlbWFzLmZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZzcCA9IG9yaWdpbmFsRlNQYXRoKHJlc291cmNlKTtcbiAgICAgICAgICAgIHJldHVybiBmc3AubGVuZ3RoID4gZXh0cGF0aC5nZXRSb290KGZzcCkubGVuZ3RoICYmIGZzcFtmc3AubGVuZ3RoIC0gMV0gPT09IHNlcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSByZXNvdXJjZS5wYXRoO1xuICAgICAgICAgICAgcmV0dXJuIChwLmxlbmd0aCA+IDEgJiYgcC5jaGFyQ29kZUF0KHAubGVuZ3RoIC0gMSkgPT09IDQ3IC8qIFNsYXNoICovKSAmJiAhKC9eW2EtekEtWl06KFxcLyR8XFxcXCQpLy50ZXN0KHJlc291cmNlLmZzUGF0aCkpOyAvLyBpZ25vcmUgdGhlIHNsYXNoIGF0IG9mZnNldCAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlVHJhaWxpbmdQYXRoU2VwYXJhdG9yKHJlc291cmNlLCBzZXAgPSBwYXRocy5zZXApIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHBhdGggaXNuJ3QgYSBkcml2ZSBsZXR0ZXIuIEEgdHJhaWxpbmcgc2VwYXJhdG9yIHRoZXJlIGlzIG5vdCByZW1vdmFibGUuXG4gICAgICAgIGlmICgoMCwgZXhwb3J0cy5oYXNUcmFpbGluZ1BhdGhTZXBhcmF0b3IpKHJlc291cmNlLCBzZXApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2Uud2l0aCh7IHBhdGg6IHJlc291cmNlLnBhdGguc3Vic3RyKDAsIHJlc291cmNlLnBhdGgubGVuZ3RoIC0gMSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbiAgICBhZGRUcmFpbGluZ1BhdGhTZXBhcmF0b3IocmVzb3VyY2UsIHNlcCA9IHBhdGhzLnNlcCkge1xuICAgICAgICBsZXQgaXNSb290U2VwID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXNvdXJjZS5zY2hlbWUgPT09IG5ldHdvcmtfMS5TY2hlbWFzLmZpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZzcCA9IG9yaWdpbmFsRlNQYXRoKHJlc291cmNlKTtcbiAgICAgICAgICAgIGlzUm9vdFNlcCA9ICgoZnNwICE9PSB1bmRlZmluZWQpICYmIChmc3AubGVuZ3RoID09PSBleHRwYXRoLmdldFJvb3QoZnNwKS5sZW5ndGgpICYmIChmc3BbZnNwLmxlbmd0aCAtIDFdID09PSBzZXApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlcCA9ICcvJztcbiAgICAgICAgICAgIGNvbnN0IHAgPSByZXNvdXJjZS5wYXRoO1xuICAgICAgICAgICAgaXNSb290U2VwID0gcC5sZW5ndGggPT09IDEgJiYgcC5jaGFyQ29kZUF0KHAubGVuZ3RoIC0gMSkgPT09IDQ3IC8qIFNsYXNoICovO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNSb290U2VwICYmICEoMCwgZXhwb3J0cy5oYXNUcmFpbGluZ1BhdGhTZXBhcmF0b3IpKHJlc291cmNlLCBzZXApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2Uud2l0aCh7IHBhdGg6IHJlc291cmNlLnBhdGggKyAnLycgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xuICAgIH1cbn1cbmV4cG9ydHMuRXh0VXJpID0gRXh0VXJpO1xuLyoqXG4gKiBVbmJpYXNlZCB1dGlsaXR5IHRoYXQgdGFrZXMgdXJpcyBcImFzIHRoZXkgYXJlXCIuIFRoaXMgbWVhbnMgaXQgY2FuIGJlIGludGVyY2hhbmdlZCB3aXRoXG4gKiB1cmkjdG9TdHJpbmcoKSB1c2FnZXMuIFRoZSBmb2xsb3dpbmcgaXMgdHJ1ZVxuICogYGBgXG4gKiBhc3NlcnRFcXVhbChhVXJpLnRvU3RyaW5nKCkgPT09IGJVcmkudG9TdHJpbmcoKSwgZXh0dXJpLmlzRXF1YWwoYVVyaSwgYlVyaSkpXG4gKiBgYGBcbiAqL1xuZXhwb3J0cy5leHRVcmkgPSBuZXcgRXh0VXJpKCgpID0+IGZhbHNlKTtcbi8qKlxuICogQklBU0VEIHV0aWxpdHkgdGhhdCBfbW9zdGx5XyBpZ25vcmVkIHRoZSBjYXNlIG9mIHVycyBwYXRocy4gT05MWSB1c2UgdGhpcyB1dGlsIGlmIHlvdVxuICogdW5kZXJzdGFuZCB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gKlxuICogVGhpcyB1dGlsaXR5IGlzIElOQ09NUEFUSUJMRSB3aXRoIGB1cmkudG9TdHJpbmcoKWAtdXNhZ2VzIGFuZCBib3RoIENBTk5PVCBiZSB1c2VkIGludGVyY2hhbmdlZC5cbiAqXG4gKiBXaGVuIGRlYWxpbmcgd2l0aCB1cmlzIGZyb20gZmlsZXMgb3IgZG9jdW1lbnRzLCBgZXh0VXJpYCAodGhlIHVuYmlhc2VkIGZyaWVuZClpcyBzdWZmaWNpZW50XG4gKiBiZWNhdXNlIHRob3NlIHVyaXMgY29tZSBmcm9tIGEgXCJ0cnVzdHdvcnRoeSBzb3VyY2VcIi4gV2hlbiBjcmVhdGluZyB1bmtub3duIHVyaXMgaXQncyBhbHdheXNcbiAqIGJldHRlciB0byB1c2UgYElVcmlJZGVudGl0eVNlcnZpY2VgIHdoaWNoIGV4cG9zZXMgYW4gYElFeHRVcmlgLWluc3RhbmNlIHdoaWNoIGtub3dzIHdoZW4gcGF0aFxuICogY2FzaW5nIG1hdHRlcnMuXG4gKi9cbmV4cG9ydHMuZXh0VXJpQmlhc2VkSWdub3JlUGF0aENhc2UgPSBuZXcgRXh0VXJpKHVyaSA9PiB7XG4gICAgLy8gQSBmaWxlIHNjaGVtZSByZXNvdXJjZSBpcyBpbiB0aGUgc2FtZSBwbGF0Zm9ybSBhcyBjb2RlLCBzbyBpZ25vcmUgY2FzZSBmb3Igbm9uIGxpbnV4IHBsYXRmb3Jtc1xuICAgIC8vIFJlc291cmNlIGNhbiBiZSBmcm9tIGFub3RoZXIgcGxhdGZvcm0uIExvd2VyaW5nIHRoZSBjYXNlIGFzIGFuIGhhY2suIFNob3VsZCBjb21lIGZyb20gRmlsZSBzeXN0ZW0gcHJvdmlkZXJcbiAgICByZXR1cm4gdXJpLnNjaGVtZSA9PT0gbmV0d29ya18xLlNjaGVtYXMuZmlsZSA/ICFwbGF0Zm9ybV8xLmlzTGludXggOiB0cnVlO1xufSk7XG4vKipcbiAqIEJJQVNFRCB1dGlsaXR5IHRoYXQgYWx3YXlzIGlnbm9yZXMgdGhlIGNhc2luZyBvZiB1cmlzIHBhdGhzLiBPTkxZIHVzZSB0aGlzIHV0aWwgaWYgeW91XG4gKiB1bmRlcnN0YW5kIHdoYXQgeW91IGFyZSBkb2luZy5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgaXMgSU5DT01QQVRJQkxFIHdpdGggYHVyaS50b1N0cmluZygpYC11c2FnZXMgYW5kIGJvdGggQ0FOTk9UIGJlIHVzZWQgaW50ZXJjaGFuZ2VkLlxuICpcbiAqIFdoZW4gZGVhbGluZyB3aXRoIHVyaXMgZnJvbSBmaWxlcyBvciBkb2N1bWVudHMsIGBleHRVcmlgICh0aGUgdW5iaWFzZWQgZnJpZW5kKWlzIHN1ZmZpY2llbnRcbiAqIGJlY2F1c2UgdGhvc2UgdXJpcyBjb21lIGZyb20gYSBcInRydXN0d29ydGh5IHNvdXJjZVwiLiBXaGVuIGNyZWF0aW5nIHVua25vd24gdXJpcyBpdCdzIGFsd2F5c1xuICogYmV0dGVyIHRvIHVzZSBgSVVyaUlkZW50aXR5U2VydmljZWAgd2hpY2ggZXhwb3NlcyBhbiBgSUV4dFVyaWAtaW5zdGFuY2Ugd2hpY2gga25vd3Mgd2hlbiBwYXRoXG4gKiBjYXNpbmcgbWF0dGVycy5cbiAqL1xuZXhwb3J0cy5leHRVcmlJZ25vcmVQYXRoQ2FzZSA9IG5ldyBFeHRVcmkoXyA9PiB0cnVlKTtcbmV4cG9ydHMuaXNFcXVhbCA9IGV4cG9ydHMuZXh0VXJpLmlzRXF1YWwuYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLmlzRXF1YWxPclBhcmVudCA9IGV4cG9ydHMuZXh0VXJpLmlzRXF1YWxPclBhcmVudC5iaW5kKGV4cG9ydHMuZXh0VXJpKTtcbmV4cG9ydHMuZ2V0Q29tcGFyaXNvbktleSA9IGV4cG9ydHMuZXh0VXJpLmdldENvbXBhcmlzb25LZXkuYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLmJhc2VuYW1lT3JBdXRob3JpdHkgPSBleHBvcnRzLmV4dFVyaS5iYXNlbmFtZU9yQXV0aG9yaXR5LmJpbmQoZXhwb3J0cy5leHRVcmkpO1xuZXhwb3J0cy5iYXNlbmFtZSA9IGV4cG9ydHMuZXh0VXJpLmJhc2VuYW1lLmJpbmQoZXhwb3J0cy5leHRVcmkpO1xuZXhwb3J0cy5leHRuYW1lID0gZXhwb3J0cy5leHRVcmkuZXh0bmFtZS5iaW5kKGV4cG9ydHMuZXh0VXJpKTtcbmV4cG9ydHMuZGlybmFtZSA9IGV4cG9ydHMuZXh0VXJpLmRpcm5hbWUuYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLmpvaW5QYXRoID0gZXhwb3J0cy5leHRVcmkuam9pblBhdGguYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGggPSBleHBvcnRzLmV4dFVyaS5ub3JtYWxpemVQYXRoLmJpbmQoZXhwb3J0cy5leHRVcmkpO1xuZXhwb3J0cy5yZWxhdGl2ZVBhdGggPSBleHBvcnRzLmV4dFVyaS5yZWxhdGl2ZVBhdGguYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLnJlc29sdmVQYXRoID0gZXhwb3J0cy5leHRVcmkucmVzb2x2ZVBhdGguYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLmlzQWJzb2x1dGVQYXRoID0gZXhwb3J0cy5leHRVcmkuaXNBYnNvbHV0ZVBhdGguYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLmlzRXF1YWxBdXRob3JpdHkgPSBleHBvcnRzLmV4dFVyaS5pc0VxdWFsQXV0aG9yaXR5LmJpbmQoZXhwb3J0cy5leHRVcmkpO1xuZXhwb3J0cy5oYXNUcmFpbGluZ1BhdGhTZXBhcmF0b3IgPSBleHBvcnRzLmV4dFVyaS5oYXNUcmFpbGluZ1BhdGhTZXBhcmF0b3IuYmluZChleHBvcnRzLmV4dFVyaSk7XG5leHBvcnRzLnJlbW92ZVRyYWlsaW5nUGF0aFNlcGFyYXRvciA9IGV4cG9ydHMuZXh0VXJpLnJlbW92ZVRyYWlsaW5nUGF0aFNlcGFyYXRvci5iaW5kKGV4cG9ydHMuZXh0VXJpKTtcbmV4cG9ydHMuYWRkVHJhaWxpbmdQYXRoU2VwYXJhdG9yID0gZXhwb3J0cy5leHRVcmkuYWRkVHJhaWxpbmdQYXRoU2VwYXJhdG9yLmJpbmQoZXhwb3J0cy5leHRVcmkpO1xuLy8jZW5kcmVnaW9uXG5mdW5jdGlvbiBkaXN0aW5jdFBhcmVudHMoaXRlbXMsIHJlc291cmNlQWNjZXNzb3IpIHtcbiAgICBjb25zdCBkaXN0aW5jdFBhcmVudHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVJlc291cmNlID0gcmVzb3VyY2VBY2Nlc3NvcihpdGVtc1tpXSk7XG4gICAgICAgIGlmIChpdGVtcy5zb21lKChvdGhlckl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKDAsIGV4cG9ydHMuaXNFcXVhbE9yUGFyZW50KShjYW5kaWRhdGVSZXNvdXJjZSwgcmVzb3VyY2VBY2Nlc3NvcihvdGhlckl0ZW0pKTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGRpc3RpbmN0UGFyZW50cy5wdXNoKGl0ZW1zW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3RpbmN0UGFyZW50cztcbn1cbmV4cG9ydHMuZGlzdGluY3RQYXJlbnRzID0gZGlzdGluY3RQYXJlbnRzO1xuLyoqXG4gKiBEYXRhIFVSSSByZWxhdGVkIGhlbHBlcnMuXG4gKi9cbnZhciBEYXRhVXJpO1xuKGZ1bmN0aW9uIChEYXRhVXJpKSB7XG4gICAgRGF0YVVyaS5NRVRBX0RBVEFfTEFCRUwgPSAnbGFiZWwnO1xuICAgIERhdGFVcmkuTUVUQV9EQVRBX0RFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBEYXRhVXJpLk1FVEFfREFUQV9TSVpFID0gJ3NpemUnO1xuICAgIERhdGFVcmkuTUVUQV9EQVRBX01JTUUgPSAnbWltZSc7XG4gICAgZnVuY3Rpb24gcGFyc2VNZXRhRGF0YShkYXRhVXJpKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBHaXZlbiBhIFVSSSBvZjogIGRhdGE6aW1hZ2UvcG5nO3NpemU6MjMxMztsYWJlbDpTb21lTGFiZWw7ZGVzY3JpcHRpb246U29tZURlc2NyaXB0aW9uO2Jhc2U2NCw3Nys5VUU1Li4uXG4gICAgICAgIC8vIHRoZSBtZXRhZGF0YSBpczogc2l6ZToyMzEzO2xhYmVsOlNvbWVMYWJlbDtkZXNjcmlwdGlvbjpTb21lRGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgbWV0YSA9IGRhdGFVcmkucGF0aC5zdWJzdHJpbmcoZGF0YVVyaS5wYXRoLmluZGV4T2YoJzsnKSArIDEsIGRhdGFVcmkucGF0aC5sYXN0SW5kZXhPZignOycpKTtcbiAgICAgICAgbWV0YS5zcGxpdCgnOycpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcHJvcGVydHkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlmIChrZXkgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHaXZlbiBhIFVSSSBvZjogIGRhdGE6aW1hZ2UvcG5nO3NpemU6MjMxMztsYWJlbDpTb21lTGFiZWw7ZGVzY3JpcHRpb246U29tZURlc2NyaXB0aW9uO2Jhc2U2NCw3Nys5VUU1Li4uXG4gICAgICAgIC8vIHRoZSBtaW1lIGlzOiBpbWFnZS9wbmdcbiAgICAgICAgY29uc3QgbWltZSA9IGRhdGFVcmkucGF0aC5zdWJzdHJpbmcoMCwgZGF0YVVyaS5wYXRoLmluZGV4T2YoJzsnKSk7XG4gICAgICAgIGlmIChtaW1lKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5zZXQoRGF0YVVyaS5NRVRBX0RBVEFfTUlNRSwgbWltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgIH1cbiAgICBEYXRhVXJpLnBhcnNlTWV0YURhdGEgPSBwYXJzZU1ldGFEYXRhO1xufSkoRGF0YVVyaSA9IGV4cG9ydHMuRGF0YVVyaSB8fCAoZXhwb3J0cy5EYXRhVXJpID0ge30pKTtcbmZ1bmN0aW9uIHRvTG9jYWxSZXNvdXJjZShyZXNvdXJjZSwgYXV0aG9yaXR5LCBsb2NhbFNjaGVtZSkge1xuICAgIGlmIChhdXRob3JpdHkpIHtcbiAgICAgICAgbGV0IHBhdGggPSByZXNvdXJjZS5wYXRoO1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoWzBdICE9PSBwYXRocy5wb3NpeC5zZXApIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRocy5wb3NpeC5zZXAgKyBwYXRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZS53aXRoKHsgc2NoZW1lOiBsb2NhbFNjaGVtZSwgYXV0aG9yaXR5LCBwYXRoIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb3VyY2Uud2l0aCh7IHNjaGVtZTogbG9jYWxTY2hlbWUgfSk7XG59XG5leHBvcnRzLnRvTG9jYWxSZXNvdXJjZSA9IHRvTG9jYWxSZXNvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVURjhfQk9NX0NIQVJBQ1RFUiA9IGV4cG9ydHMucmVtb3ZlQW5zaUVzY2FwZUNvZGVzID0gZXhwb3J0cy5sY3V0ID0gZXhwb3J0cy5pc0Vtb2ppSW1wcmVjaXNlID0gZXhwb3J0cy5pc0Z1bGxXaWR0aENoYXJhY3RlciA9IGV4cG9ydHMuY29udGFpbnNGdWxsV2lkdGhDaGFyYWN0ZXIgPSBleHBvcnRzLmNvbnRhaW5zVW51c3VhbExpbmVUZXJtaW5hdG9ycyA9IGV4cG9ydHMuVU5VU1VBTF9MSU5FX1RFUk1JTkFUT1JTID0gZXhwb3J0cy5pc0Jhc2ljQVNDSUkgPSBleHBvcnRzLmNvbnRhaW5zRW1vamkgPSBleHBvcnRzLmNvbnRhaW5zUlRMID0gZXhwb3J0cy5kZWNvZGVVVEY4ID0gZXhwb3J0cy5lbmNvZGVVVEY4ID0gZXhwb3J0cy5nZXRDaGFyQ29udGFpbmluZ09mZnNldCA9IGV4cG9ydHMucHJldkNoYXJMZW5ndGggPSBleHBvcnRzLm5leHRDaGFyTGVuZ3RoID0gZXhwb3J0cy5nZXROZXh0Q29kZVBvaW50ID0gZXhwb3J0cy5jb21wdXRlQ29kZVBvaW50ID0gZXhwb3J0cy5pc0xvd1N1cnJvZ2F0ZSA9IGV4cG9ydHMuaXNIaWdoU3Vycm9nYXRlID0gZXhwb3J0cy5jb21tb25TdWZmaXhMZW5ndGggPSBleHBvcnRzLmNvbW1vblByZWZpeExlbmd0aCA9IGV4cG9ydHMuc3RhcnRzV2l0aElnbm9yZUNhc2UgPSBleHBvcnRzLmVxdWFsc0lnbm9yZUNhc2UgPSBleHBvcnRzLmlzVXBwZXJBc2NpaUxldHRlciA9IGV4cG9ydHMuaXNMb3dlckFzY2lpTGV0dGVyID0gZXhwb3J0cy5jb21wYXJlU3Vic3RyaW5nSWdub3JlQ2FzZSA9IGV4cG9ydHMuY29tcGFyZUlnbm9yZUNhc2UgPSBleHBvcnRzLmNvbXBhcmVTdWJzdHJpbmcgPSBleHBvcnRzLmNvbXBhcmUgPSBleHBvcnRzLmxhc3ROb25XaGl0ZXNwYWNlSW5kZXggPSBleHBvcnRzLmdldExlYWRpbmdXaGl0ZXNwYWNlID0gZXhwb3J0cy5maXJzdE5vbldoaXRlc3BhY2VJbmRleCA9IGV4cG9ydHMuc3BsaXRMaW5lcyA9IGV4cG9ydHMucmVnRXhwRmxhZ3MgPSBleHBvcnRzLnJlZ0V4cENvbnRhaW5zQmFja3JlZmVyZW5jZSA9IGV4cG9ydHMucmVnRXhwTGVhZHNUb0VuZGxlc3NMb29wID0gZXhwb3J0cy5jcmVhdGVSZWdFeHAgPSBleHBvcnRzLnN0cmlwV2lsZGNhcmRzID0gZXhwb3J0cy5jb252ZXJ0U2ltcGxlMlJlZ0V4cFBhdHRlcm4gPSBleHBvcnRzLnJ0cmltID0gZXhwb3J0cy5sdHJpbSA9IGV4cG9ydHMudHJpbSA9IGV4cG9ydHMudHJ1bmNhdGUgPSBleHBvcnRzLmNvdW50ID0gZXhwb3J0cy5lc2NhcGVSZWdFeHBDaGFyYWN0ZXJzID0gZXhwb3J0cy5lc2NhcGUgPSBleHBvcnRzLmZvcm1hdDIgPSBleHBvcnRzLmZvcm1hdCA9IGV4cG9ydHMuaXNGYWxzeU9yV2hpdGVzcGFjZSA9IHZvaWQgMDtcbmV4cG9ydHMuZ2V0TGVmdERlbGV0ZU9mZnNldCA9IGV4cG9ydHMuYnJlYWtCZXR3ZWVuR3JhcGhlbWVCcmVha1R5cGUgPSBleHBvcnRzLmdldEdyYXBoZW1lQnJlYWtUeXBlID0gZXhwb3J0cy5zaW5nbGVMZXR0ZXJIYXNoID0gZXhwb3J0cy5nZXROTGluZXMgPSBleHBvcnRzLnVwcGVyY2FzZUZpcnN0TGV0dGVyID0gZXhwb3J0cy5jb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciA9IGV4cG9ydHMuZnV6enlDb250YWlucyA9IGV4cG9ydHMuc3RyaXBVVEY4Qk9NID0gZXhwb3J0cy5zdGFydHNXaXRoVVRGOEJPTSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzRmFsc3lPcldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgdHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdHIudHJpbSgpLmxlbmd0aCA9PT0gMDtcbn1cbmV4cG9ydHMuaXNGYWxzeU9yV2hpdGVzcGFjZSA9IGlzRmFsc3lPcldoaXRlc3BhY2U7XG5jb25zdCBfZm9ybWF0UmVnZXhwID0gL3soXFxkKyl9L2c7XG4vKipcbiAqIEhlbHBlciB0byBwcm9kdWNlIGEgc3RyaW5nIHdpdGggYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLiBJbnNlcnQgdmFyaWFibGUgc2VnbWVudHNcbiAqIGludG8gdGhlIHN0cmluZyB1c2luZyB0aGUge259IG5vdGF0aW9uIHdoZXJlIE4gaXMgdGhlIGluZGV4IG9mIHRoZSBhcmd1bWVudCBmb2xsb3dpbmcgdGhlIHN0cmluZy5cbiAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gd2hpY2ggZm9ybWF0dGluZyBpcyBhcHBsaWVkXG4gKiBAcGFyYW0gYXJncyByZXBsYWNlbWVudHMgZm9yIHtufS1lbnRyaWVzXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgLi4uYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKF9mb3JtYXRSZWdleHAsIGZ1bmN0aW9uIChtYXRjaCwgZ3JvdXApIHtcbiAgICAgICAgY29uc3QgaWR4ID0gcGFyc2VJbnQoZ3JvdXAsIDEwKTtcbiAgICAgICAgcmV0dXJuIGlzTmFOKGlkeCkgfHwgaWR4IDwgMCB8fCBpZHggPj0gYXJncy5sZW5ndGggP1xuICAgICAgICAgICAgbWF0Y2ggOlxuICAgICAgICAgICAgYXJnc1tpZHhdO1xuICAgIH0pO1xufVxuZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXQ7XG5jb25zdCBfZm9ybWF0MlJlZ2V4cCA9IC97KFtefV0rKX0vZztcbi8qKlxuICogSGVscGVyIHRvIGNyZWF0ZSBhIHN0cmluZyBmcm9tIGEgdGVtcGxhdGUgYW5kIGEgc3RyaW5nIHJlY29yZC5cbiAqIFNpbWlsYXIgdG8gYGZvcm1hdGAgYnV0IHdpdGggb2JqZWN0cyBpbnN0ZWFkIG9mIHBvc2l0aW9uYWwgYXJndW1lbnRzLlxuICovXG5mdW5jdGlvbiBmb3JtYXQyKHRlbXBsYXRlLCB2YWx1ZXMpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShfZm9ybWF0MlJlZ2V4cCwgKG1hdGNoLCBncm91cCkgPT4geyB2YXIgX2E7IHJldHVybiAoKF9hID0gdmFsdWVzW2dyb3VwXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbWF0Y2gpOyB9KTtcbn1cbmV4cG9ydHMuZm9ybWF0MiA9IGZvcm1hdDI7XG4vKipcbiAqIENvbnZlcnRzIEhUTUwgY2hhcmFjdGVycyBpbnNpZGUgdGhlIHN0cmluZyB0byB1c2UgZW50aXRpZXMgaW5zdGVhZC4gTWFrZXMgdGhlIHN0cmluZyBzYWZlIGZyb21cbiAqIGJlaW5nIHVzZWQgZS5nLiBpbiBIVE1MRWxlbWVudC5pbm5lckhUTUwuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShodG1sKSB7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvWzw+Jl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOiByZXR1cm4gJyZsdDsnO1xuICAgICAgICAgICAgY2FzZSAnPic6IHJldHVybiAnJmd0Oyc7XG4gICAgICAgICAgICBjYXNlICcmJzogcmV0dXJuICcmYW1wOyc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuLyoqXG4gKiBFc2NhcGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjaGFyYWN0ZXJzIGluIGEgZ2l2ZW4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cENoYXJhY3RlcnModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcXFxcXHtcXH1cXCpcXCtcXD9cXHxcXF5cXCRcXC5cXFtcXF1cXChcXCldL2csICdcXFxcJCYnKTtcbn1cbmV4cG9ydHMuZXNjYXBlUmVnRXhwQ2hhcmFjdGVycyA9IGVzY2FwZVJlZ0V4cENoYXJhY3RlcnM7XG4vKipcbiAqIENvdW50cyBob3cgb2Z0ZW4gYGNoYXJhY3RlcmAgb2NjdXJzIGluc2lkZSBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBjb3VudCh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgY29uc3QgY2ggPSBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IgKGxldCBpID0gdmFsdWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHZhbHVlLmNoYXJDb2RlQXQoaSkgPT09IGNoKSB7XG4gICAgICAgICAgICByZXN1bHQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5jb3VudCA9IGNvdW50O1xuZnVuY3Rpb24gdHJ1bmNhdGUodmFsdWUsIG1heExlbmd0aCwgc3VmZml4ID0gJ+KApicpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDw9IG1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBgJHt2YWx1ZS5zdWJzdHIoMCwgbWF4TGVuZ3RoKX0ke3N1ZmZpeH1gO1xufVxuZXhwb3J0cy50cnVuY2F0ZSA9IHRydW5jYXRlO1xuLyoqXG4gKiBSZW1vdmVzIGFsbCBvY2N1cnJlbmNlcyBvZiBuZWVkbGUgZnJvbSB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgaGF5c3RhY2suXG4gKiBAcGFyYW0gaGF5c3RhY2sgc3RyaW5nIHRvIHRyaW1cbiAqIEBwYXJhbSBuZWVkbGUgdGhlIHRoaW5nIHRvIHRyaW0gKGRlZmF1bHQgaXMgYSBibGFuaylcbiAqL1xuZnVuY3Rpb24gdHJpbShoYXlzdGFjaywgbmVlZGxlID0gJyAnKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IGx0cmltKGhheXN0YWNrLCBuZWVkbGUpO1xuICAgIHJldHVybiBydHJpbSh0cmltbWVkLCBuZWVkbGUpO1xufVxuZXhwb3J0cy50cmltID0gdHJpbTtcbi8qKlxuICogUmVtb3ZlcyBhbGwgb2NjdXJyZW5jZXMgb2YgbmVlZGxlIGZyb20gdGhlIGJlZ2lubmluZyBvZiBoYXlzdGFjay5cbiAqIEBwYXJhbSBoYXlzdGFjayBzdHJpbmcgdG8gdHJpbVxuICogQHBhcmFtIG5lZWRsZSB0aGUgdGhpbmcgdG8gdHJpbVxuICovXG5mdW5jdGlvbiBsdHJpbShoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgaWYgKCFoYXlzdGFjayB8fCAhbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcbiAgICB9XG4gICAgY29uc3QgbmVlZGxlTGVuID0gbmVlZGxlLmxlbmd0aDtcbiAgICBpZiAobmVlZGxlTGVuID09PSAwIHx8IGhheXN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG4gICAgfVxuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIHdoaWxlIChoYXlzdGFjay5pbmRleE9mKG5lZWRsZSwgb2Zmc2V0KSA9PT0gb2Zmc2V0KSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCArIG5lZWRsZUxlbjtcbiAgICB9XG4gICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cmluZyhvZmZzZXQpO1xufVxuZXhwb3J0cy5sdHJpbSA9IGx0cmltO1xuLyoqXG4gKiBSZW1vdmVzIGFsbCBvY2N1cnJlbmNlcyBvZiBuZWVkbGUgZnJvbSB0aGUgZW5kIG9mIGhheXN0YWNrLlxuICogQHBhcmFtIGhheXN0YWNrIHN0cmluZyB0byB0cmltXG4gKiBAcGFyYW0gbmVlZGxlIHRoZSB0aGluZyB0byB0cmltXG4gKi9cbmZ1bmN0aW9uIHJ0cmltKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICBpZiAoIWhheXN0YWNrIHx8ICFuZWVkbGUpIHtcbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuICAgIH1cbiAgICBjb25zdCBuZWVkbGVMZW4gPSBuZWVkbGUubGVuZ3RoLCBoYXlzdGFja0xlbiA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICBpZiAobmVlZGxlTGVuID09PSAwIHx8IGhheXN0YWNrTGVuID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcbiAgICB9XG4gICAgbGV0IG9mZnNldCA9IGhheXN0YWNrTGVuLCBpZHggPSAtMTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZHggPSBoYXlzdGFjay5sYXN0SW5kZXhPZihuZWVkbGUsIG9mZnNldCAtIDEpO1xuICAgICAgICBpZiAoaWR4ID09PSAtMSB8fCBpZHggKyBuZWVkbGVMZW4gIT09IG9mZnNldCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCA9IGlkeDtcbiAgICB9XG4gICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cmluZygwLCBvZmZzZXQpO1xufVxuZXhwb3J0cy5ydHJpbSA9IHJ0cmltO1xuZnVuY3Rpb24gY29udmVydFNpbXBsZTJSZWdFeHBQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKC9bXFwtXFxcXFxce1xcfVxcK1xcP1xcfFxcXlxcJFxcLlxcLFxcW1xcXVxcKFxcKVxcI1xcc10vZywgJ1xcXFwkJicpLnJlcGxhY2UoL1tcXCpdL2csICcuKicpO1xufVxuZXhwb3J0cy5jb252ZXJ0U2ltcGxlMlJlZ0V4cFBhdHRlcm4gPSBjb252ZXJ0U2ltcGxlMlJlZ0V4cFBhdHRlcm47XG5mdW5jdGlvbiBzdHJpcFdpbGRjYXJkcyhwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZSgvXFwqL2csICcnKTtcbn1cbmV4cG9ydHMuc3RyaXBXaWxkY2FyZHMgPSBzdHJpcFdpbGRjYXJkcztcbmZ1bmN0aW9uIGNyZWF0ZVJlZ0V4cChzZWFyY2hTdHJpbmcsIGlzUmVnZXgsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghc2VhcmNoU3RyaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSByZWdleCBmcm9tIGVtcHR5IHN0cmluZycpO1xuICAgIH1cbiAgICBpZiAoIWlzUmVnZXgpIHtcbiAgICAgICAgc2VhcmNoU3RyaW5nID0gZXNjYXBlUmVnRXhwQ2hhcmFjdGVycyhzZWFyY2hTdHJpbmcpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53aG9sZVdvcmQpIHtcbiAgICAgICAgaWYgKCEvXFxCLy50ZXN0KHNlYXJjaFN0cmluZy5jaGFyQXQoMCkpKSB7XG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSAnXFxcXGInICsgc2VhcmNoU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmICghL1xcQi8udGVzdChzZWFyY2hTdHJpbmcuY2hhckF0KHNlYXJjaFN0cmluZy5sZW5ndGggLSAxKSkpIHtcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZyA9IHNlYXJjaFN0cmluZyArICdcXFxcYic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IG1vZGlmaWVycyA9ICcnO1xuICAgIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgICAgICBtb2RpZmllcnMgKz0gJ2cnO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMubWF0Y2hDYXNlKSB7XG4gICAgICAgIG1vZGlmaWVycyArPSAnaSc7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm11bHRpbGluZSkge1xuICAgICAgICBtb2RpZmllcnMgKz0gJ20nO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy51bmljb2RlKSB7XG4gICAgICAgIG1vZGlmaWVycyArPSAndSc7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHNlYXJjaFN0cmluZywgbW9kaWZpZXJzKTtcbn1cbmV4cG9ydHMuY3JlYXRlUmVnRXhwID0gY3JlYXRlUmVnRXhwO1xuZnVuY3Rpb24gcmVnRXhwTGVhZHNUb0VuZGxlc3NMb29wKHJlZ2V4cCkge1xuICAgIC8vIEV4aXQgZWFybHkgaWYgaXQncyBvbmUgb2YgdGhlc2Ugc3BlY2lhbCBjYXNlcyB3aGljaCBhcmUgbWVhbnQgdG8gbWF0Y2hcbiAgICAvLyBhZ2FpbnN0IGFuIGVtcHR5IHN0cmluZ1xuICAgIGlmIChyZWdleHAuc291cmNlID09PSAnXicgfHwgcmVnZXhwLnNvdXJjZSA9PT0gJ14kJyB8fCByZWdleHAuc291cmNlID09PSAnJCcgfHwgcmVnZXhwLnNvdXJjZSA9PT0gJ15cXFxccyokJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFdlIGNoZWNrIGFnYWluc3QgYW4gZW1wdHkgc3RyaW5nLiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGRvZXNuJ3QgYWR2YW5jZVxuICAgIC8vIChlLmcuIGVuZHMgaW4gYW4gZW5kbGVzcyBsb29wKSBpdCB3aWxsIG1hdGNoIGFuIGVtcHR5IHN0cmluZy5cbiAgICBjb25zdCBtYXRjaCA9IHJlZ2V4cC5leGVjKCcnKTtcbiAgICByZXR1cm4gISEobWF0Y2ggJiYgcmVnZXhwLmxhc3RJbmRleCA9PT0gMCk7XG59XG5leHBvcnRzLnJlZ0V4cExlYWRzVG9FbmRsZXNzTG9vcCA9IHJlZ0V4cExlYWRzVG9FbmRsZXNzTG9vcDtcbmZ1bmN0aW9uIHJlZ0V4cENvbnRhaW5zQmFja3JlZmVyZW5jZShyZWdleHBWYWx1ZSkge1xuICAgIHJldHVybiAhIXJlZ2V4cFZhbHVlLm1hdGNoKC8oW15cXFxcXXxeKShcXFxcXFxcXCkqXFxcXFxcZCsvKTtcbn1cbmV4cG9ydHMucmVnRXhwQ29udGFpbnNCYWNrcmVmZXJlbmNlID0gcmVnRXhwQ29udGFpbnNCYWNrcmVmZXJlbmNlO1xuZnVuY3Rpb24gcmVnRXhwRmxhZ3MocmVnZXhwKSB7XG4gICAgcmV0dXJuIChyZWdleHAuZ2xvYmFsID8gJ2cnIDogJycpXG4gICAgICAgICsgKHJlZ2V4cC5pZ25vcmVDYXNlID8gJ2knIDogJycpXG4gICAgICAgICsgKHJlZ2V4cC5tdWx0aWxpbmUgPyAnbScgOiAnJylcbiAgICAgICAgKyAocmVnZXhwIC8qIHN0YW5kYWxvbmUgZWRpdG9yIGNvbXBpbGF0aW9uICovLnVuaWNvZGUgPyAndScgOiAnJyk7XG59XG5leHBvcnRzLnJlZ0V4cEZsYWdzID0gcmVnRXhwRmxhZ3M7XG5mdW5jdGlvbiBzcGxpdExpbmVzKHN0cikge1xuICAgIHJldHVybiBzdHIuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XG59XG5leHBvcnRzLnNwbGl0TGluZXMgPSBzcGxpdExpbmVzO1xuLyoqXG4gKiBSZXR1cm5zIGZpcnN0IGluZGV4IG9mIHRoZSBzdHJpbmcgdGhhdCBpcyBub3Qgd2hpdGVzcGFjZS5cbiAqIElmIHN0cmluZyBpcyBlbXB0eSBvciBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VzLCByZXR1cm5zIC0xXG4gKi9cbmZ1bmN0aW9uIGZpcnN0Tm9uV2hpdGVzcGFjZUluZGV4KHN0cikge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaENvZGUgIT09IDMyIC8qIFNwYWNlICovICYmIGNoQ29kZSAhPT0gOSAvKiBUYWIgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmV4cG9ydHMuZmlyc3ROb25XaGl0ZXNwYWNlSW5kZXggPSBmaXJzdE5vbldoaXRlc3BhY2VJbmRleDtcbi8qKlxuICogUmV0dXJucyB0aGUgbGVhZGluZyB3aGl0ZXNwYWNlIG9mIHRoZSBzdHJpbmcuXG4gKiBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZXMsIHJldHVybnMgZW50aXJlIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXRMZWFkaW5nV2hpdGVzcGFjZShzdHIsIHN0YXJ0ID0gMCwgZW5kID0gc3RyLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY2hDb2RlICE9PSAzMiAvKiBTcGFjZSAqLyAmJiBjaENvZGUgIT09IDkgLyogVGFiICovKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG59XG5leHBvcnRzLmdldExlYWRpbmdXaGl0ZXNwYWNlID0gZ2V0TGVhZGluZ1doaXRlc3BhY2U7XG4vKipcbiAqIFJldHVybnMgbGFzdCBpbmRleCBvZiB0aGUgc3RyaW5nIHRoYXQgaXMgbm90IHdoaXRlc3BhY2UuXG4gKiBJZiBzdHJpbmcgaXMgZW1wdHkgb3IgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlcywgcmV0dXJucyAtMVxuICovXG5mdW5jdGlvbiBsYXN0Tm9uV2hpdGVzcGFjZUluZGV4KHN0ciwgc3RhcnRJbmRleCA9IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY2hDb2RlICE9PSAzMiAvKiBTcGFjZSAqLyAmJiBjaENvZGUgIT09IDkgLyogVGFiICovKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5leHBvcnRzLmxhc3ROb25XaGl0ZXNwYWNlSW5kZXggPSBsYXN0Tm9uV2hpdGVzcGFjZUluZGV4O1xuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZVN1YnN0cmluZyhhLCBiLCBhU3RhcnQgPSAwLCBhRW5kID0gYS5sZW5ndGgsIGJTdGFydCA9IDAsIGJFbmQgPSBiLmxlbmd0aCkge1xuICAgIGZvciAoOyBhU3RhcnQgPCBhRW5kICYmIGJTdGFydCA8IGJFbmQ7IGFTdGFydCsrLCBiU3RhcnQrKykge1xuICAgICAgICBsZXQgY29kZUEgPSBhLmNoYXJDb2RlQXQoYVN0YXJ0KTtcbiAgICAgICAgbGV0IGNvZGVCID0gYi5jaGFyQ29kZUF0KGJTdGFydCk7XG4gICAgICAgIGlmIChjb2RlQSA8IGNvZGVCKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZUEgPiBjb2RlQikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYUxlbiA9IGFFbmQgLSBhU3RhcnQ7XG4gICAgY29uc3QgYkxlbiA9IGJFbmQgLSBiU3RhcnQ7XG4gICAgaWYgKGFMZW4gPCBiTGVuKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYUxlbiA+IGJMZW4pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0cy5jb21wYXJlU3Vic3RyaW5nID0gY29tcGFyZVN1YnN0cmluZztcbmZ1bmN0aW9uIGNvbXBhcmVJZ25vcmVDYXNlKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZVN1YnN0cmluZ0lnbm9yZUNhc2UoYSwgYiwgMCwgYS5sZW5ndGgsIDAsIGIubGVuZ3RoKTtcbn1cbmV4cG9ydHMuY29tcGFyZUlnbm9yZUNhc2UgPSBjb21wYXJlSWdub3JlQ2FzZTtcbmZ1bmN0aW9uIGNvbXBhcmVTdWJzdHJpbmdJZ25vcmVDYXNlKGEsIGIsIGFTdGFydCA9IDAsIGFFbmQgPSBhLmxlbmd0aCwgYlN0YXJ0ID0gMCwgYkVuZCA9IGIubGVuZ3RoKSB7XG4gICAgZm9yICg7IGFTdGFydCA8IGFFbmQgJiYgYlN0YXJ0IDwgYkVuZDsgYVN0YXJ0KyssIGJTdGFydCsrKSB7XG4gICAgICAgIGxldCBjb2RlQSA9IGEuY2hhckNvZGVBdChhU3RhcnQpO1xuICAgICAgICBsZXQgY29kZUIgPSBiLmNoYXJDb2RlQXQoYlN0YXJ0KTtcbiAgICAgICAgaWYgKGNvZGVBID09PSBjb2RlQikge1xuICAgICAgICAgICAgLy8gZXF1YWxcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpZmYgPSBjb2RlQSAtIGNvZGVCO1xuICAgICAgICBpZiAoZGlmZiA9PT0gMzIgJiYgaXNVcHBlckFzY2lpTGV0dGVyKGNvZGVCKSkgeyAvL2NvZGVCID1bNjUtOTBdICYmIGNvZGVBID1bOTctMTIyXVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlmZiA9PT0gLTMyICYmIGlzVXBwZXJBc2NpaUxldHRlcihjb2RlQSkpIHsgLy9jb2RlQiA9Wzk3LTEyMl0gJiYgY29kZUEgPVs2NS05MF1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvd2VyQXNjaWlMZXR0ZXIoY29kZUEpICYmIGlzTG93ZXJBc2NpaUxldHRlcihjb2RlQikpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXR1cm4gZGlmZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlU3Vic3RyaW5nKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpLCBhU3RhcnQsIGFFbmQsIGJTdGFydCwgYkVuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYUxlbiA9IGFFbmQgLSBhU3RhcnQ7XG4gICAgY29uc3QgYkxlbiA9IGJFbmQgLSBiU3RhcnQ7XG4gICAgaWYgKGFMZW4gPCBiTGVuKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYUxlbiA+IGJMZW4pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuZXhwb3J0cy5jb21wYXJlU3Vic3RyaW5nSWdub3JlQ2FzZSA9IGNvbXBhcmVTdWJzdHJpbmdJZ25vcmVDYXNlO1xuZnVuY3Rpb24gaXNMb3dlckFzY2lpTGV0dGVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSA5NyAvKiBhICovICYmIGNvZGUgPD0gMTIyIC8qIHogKi87XG59XG5leHBvcnRzLmlzTG93ZXJBc2NpaUxldHRlciA9IGlzTG93ZXJBc2NpaUxldHRlcjtcbmZ1bmN0aW9uIGlzVXBwZXJBc2NpaUxldHRlcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDkwIC8qIFogKi87XG59XG5leHBvcnRzLmlzVXBwZXJBc2NpaUxldHRlciA9IGlzVXBwZXJBc2NpaUxldHRlcjtcbmZ1bmN0aW9uIGlzQXNjaWlMZXR0ZXIoY29kZSkge1xuICAgIHJldHVybiBpc0xvd2VyQXNjaWlMZXR0ZXIoY29kZSkgfHwgaXNVcHBlckFzY2lpTGV0dGVyKGNvZGUpO1xufVxuZnVuY3Rpb24gZXF1YWxzSWdub3JlQ2FzZShhLCBiKSB7XG4gICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBkb0VxdWFsc0lnbm9yZUNhc2UoYSwgYik7XG59XG5leHBvcnRzLmVxdWFsc0lnbm9yZUNhc2UgPSBlcXVhbHNJZ25vcmVDYXNlO1xuZnVuY3Rpb24gZG9FcXVhbHNJZ25vcmVDYXNlKGEsIGIsIHN0b3BBdCA9IGEubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9wQXQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb2RlQSA9IGEuY2hhckNvZGVBdChpKTtcbiAgICAgICAgY29uc3QgY29kZUIgPSBiLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjb2RlQSA9PT0gY29kZUIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGEteiBBLVpcbiAgICAgICAgaWYgKGlzQXNjaWlMZXR0ZXIoY29kZUEpICYmIGlzQXNjaWlMZXR0ZXIoY29kZUIpKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMoY29kZUEgLSBjb2RlQik7XG4gICAgICAgICAgICBpZiAoZGlmZiAhPT0gMCAmJiBkaWZmICE9PSAzMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBbnkgb3RoZXIgY2hhcmNvZGVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlQSkudG9Mb3dlckNhc2UoKSAhPT0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlQikudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0YXJ0c1dpdGhJZ25vcmVDYXNlKHN0ciwgY2FuZGlkYXRlKSB7XG4gICAgY29uc3QgY2FuZGlkYXRlTGVuZ3RoID0gY2FuZGlkYXRlLmxlbmd0aDtcbiAgICBpZiAoY2FuZGlkYXRlLmxlbmd0aCA+IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZG9FcXVhbHNJZ25vcmVDYXNlKHN0ciwgY2FuZGlkYXRlLCBjYW5kaWRhdGVMZW5ndGgpO1xufVxuZXhwb3J0cy5zdGFydHNXaXRoSWdub3JlQ2FzZSA9IHN0YXJ0c1dpdGhJZ25vcmVDYXNlO1xuLyoqXG4gKiBAcmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tb24gcHJlZml4IG9mIHRoZSB0d28gc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gY29tbW9uUHJlZml4TGVuZ3RoKGEsIGIpIHtcbiAgICBsZXQgaSwgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGEuY2hhckNvZGVBdChpKSAhPT0gYi5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVuO1xufVxuZXhwb3J0cy5jb21tb25QcmVmaXhMZW5ndGggPSBjb21tb25QcmVmaXhMZW5ndGg7XG4vKipcbiAqIEByZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGNvbW1vbiBzdWZmaXggb2YgdGhlIHR3byBzdHJpbmdzLlxuICovXG5mdW5jdGlvbiBjb21tb25TdWZmaXhMZW5ndGgoYSwgYikge1xuICAgIGxldCBpLCBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICAgIGNvbnN0IGFMYXN0SW5kZXggPSBhLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgYkxhc3RJbmRleCA9IGIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGEuY2hhckNvZGVBdChhTGFzdEluZGV4IC0gaSkgIT09IGIuY2hhckNvZGVBdChiTGFzdEluZGV4IC0gaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZW47XG59XG5leHBvcnRzLmNvbW1vblN1ZmZpeExlbmd0aCA9IGNvbW1vblN1ZmZpeExlbmd0aDtcbi8qKlxuICogU2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3Vycm9nYXRlX3BhaXJcbiAqL1xuZnVuY3Rpb24gaXNIaWdoU3Vycm9nYXRlKGNoYXJDb2RlKSB7XG4gICAgcmV0dXJuICgweEQ4MDAgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gMHhEQkZGKTtcbn1cbmV4cG9ydHMuaXNIaWdoU3Vycm9nYXRlID0gaXNIaWdoU3Vycm9nYXRlO1xuLyoqXG4gKiBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TdXJyb2dhdGVfcGFpclxuICovXG5mdW5jdGlvbiBpc0xvd1N1cnJvZ2F0ZShjaGFyQ29kZSkge1xuICAgIHJldHVybiAoMHhEQzAwIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IDB4REZGRik7XG59XG5leHBvcnRzLmlzTG93U3Vycm9nYXRlID0gaXNMb3dTdXJyb2dhdGU7XG4vKipcbiAqIFNlZSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N1cnJvZ2F0ZV9wYWlyXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVDb2RlUG9pbnQoaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKSB7XG4gICAgcmV0dXJuICgoaGlnaFN1cnJvZ2F0ZSAtIDB4RDgwMCkgPDwgMTApICsgKGxvd1N1cnJvZ2F0ZSAtIDB4REMwMCkgKyAweDEwMDAwO1xufVxuZXhwb3J0cy5jb21wdXRlQ29kZVBvaW50ID0gY29tcHV0ZUNvZGVQb2ludDtcbi8qKlxuICogZ2V0IHRoZSBjb2RlIHBvaW50IHRoYXQgYmVnaW5zIGF0IG9mZnNldCBgb2Zmc2V0YFxuICovXG5mdW5jdGlvbiBnZXROZXh0Q29kZVBvaW50KHN0ciwgbGVuLCBvZmZzZXQpIHtcbiAgICBjb25zdCBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgaWYgKGlzSGlnaFN1cnJvZ2F0ZShjaGFyQ29kZSkgJiYgb2Zmc2V0ICsgMSA8IGxlbikge1xuICAgICAgICBjb25zdCBuZXh0Q2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChvZmZzZXQgKyAxKTtcbiAgICAgICAgaWYgKGlzTG93U3Vycm9nYXRlKG5leHRDaGFyQ29kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlQ29kZVBvaW50KGNoYXJDb2RlLCBuZXh0Q2hhckNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFyQ29kZTtcbn1cbmV4cG9ydHMuZ2V0TmV4dENvZGVQb2ludCA9IGdldE5leHRDb2RlUG9pbnQ7XG4vKipcbiAqIGdldCB0aGUgY29kZSBwb2ludCB0aGF0IGVuZHMgcmlnaHQgYmVmb3JlIG9mZnNldCBgb2Zmc2V0YFxuICovXG5mdW5jdGlvbiBnZXRQcmV2Q29kZVBvaW50KHN0ciwgb2Zmc2V0KSB7XG4gICAgY29uc3QgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChvZmZzZXQgLSAxKTtcbiAgICBpZiAoaXNMb3dTdXJyb2dhdGUoY2hhckNvZGUpICYmIG9mZnNldCA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldkNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQob2Zmc2V0IC0gMik7XG4gICAgICAgIGlmIChpc0hpZ2hTdXJyb2dhdGUocHJldkNoYXJDb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVDb2RlUG9pbnQocHJldkNoYXJDb2RlLCBjaGFyQ29kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYXJDb2RlO1xufVxuZnVuY3Rpb24gbmV4dENoYXJMZW5ndGgoc3RyLCBvZmZzZXQpIHtcbiAgICBjb25zdCBncmFwaGVtZUJyZWFrVHJlZSA9IEdyYXBoZW1lQnJlYWtUcmVlLmdldEluc3RhbmNlKCk7XG4gICAgY29uc3QgaW5pdGlhbE9mZnNldCA9IG9mZnNldDtcbiAgICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGNvbnN0IGluaXRpYWxDb2RlUG9pbnQgPSBnZXROZXh0Q29kZVBvaW50KHN0ciwgbGVuLCBvZmZzZXQpO1xuICAgIG9mZnNldCArPSAoaW5pdGlhbENvZGVQb2ludCA+PSA2NTUzNiAvKiBVTklDT0RFX1NVUFBMRU1FTlRBUllfUExBTkVfQkVHSU4gKi8gPyAyIDogMSk7XG4gICAgbGV0IGdyYXBoZW1lQnJlYWtUeXBlID0gZ3JhcGhlbWVCcmVha1RyZWUuZ2V0R3JhcGhlbWVCcmVha1R5cGUoaW5pdGlhbENvZGVQb2ludCk7XG4gICAgd2hpbGUgKG9mZnNldCA8IGxlbikge1xuICAgICAgICBjb25zdCBuZXh0Q29kZVBvaW50ID0gZ2V0TmV4dENvZGVQb2ludChzdHIsIGxlbiwgb2Zmc2V0KTtcbiAgICAgICAgY29uc3QgbmV4dEdyYXBoZW1lQnJlYWtUeXBlID0gZ3JhcGhlbWVCcmVha1RyZWUuZ2V0R3JhcGhlbWVCcmVha1R5cGUobmV4dENvZGVQb2ludCk7XG4gICAgICAgIGlmIChicmVha0JldHdlZW5HcmFwaGVtZUJyZWFrVHlwZShncmFwaGVtZUJyZWFrVHlwZSwgbmV4dEdyYXBoZW1lQnJlYWtUeXBlKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IChuZXh0Q29kZVBvaW50ID49IDY1NTM2IC8qIFVOSUNPREVfU1VQUExFTUVOVEFSWV9QTEFORV9CRUdJTiAqLyA/IDIgOiAxKTtcbiAgICAgICAgZ3JhcGhlbWVCcmVha1R5cGUgPSBuZXh0R3JhcGhlbWVCcmVha1R5cGU7XG4gICAgfVxuICAgIHJldHVybiAob2Zmc2V0IC0gaW5pdGlhbE9mZnNldCk7XG59XG5leHBvcnRzLm5leHRDaGFyTGVuZ3RoID0gbmV4dENoYXJMZW5ndGg7XG5mdW5jdGlvbiBwcmV2Q2hhckxlbmd0aChzdHIsIG9mZnNldCkge1xuICAgIGNvbnN0IGdyYXBoZW1lQnJlYWtUcmVlID0gR3JhcGhlbWVCcmVha1RyZWUuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCBpbml0aWFsT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIGNvbnN0IGluaXRpYWxDb2RlUG9pbnQgPSBnZXRQcmV2Q29kZVBvaW50KHN0ciwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgLT0gKGluaXRpYWxDb2RlUG9pbnQgPj0gNjU1MzYgLyogVU5JQ09ERV9TVVBQTEVNRU5UQVJZX1BMQU5FX0JFR0lOICovID8gMiA6IDEpO1xuICAgIGxldCBncmFwaGVtZUJyZWFrVHlwZSA9IGdyYXBoZW1lQnJlYWtUcmVlLmdldEdyYXBoZW1lQnJlYWtUeXBlKGluaXRpYWxDb2RlUG9pbnQpO1xuICAgIHdoaWxlIChvZmZzZXQgPiAwKSB7XG4gICAgICAgIGNvbnN0IHByZXZDb2RlUG9pbnQgPSBnZXRQcmV2Q29kZVBvaW50KHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcHJldkdyYXBoZW1lQnJlYWtUeXBlID0gZ3JhcGhlbWVCcmVha1RyZWUuZ2V0R3JhcGhlbWVCcmVha1R5cGUocHJldkNvZGVQb2ludCk7XG4gICAgICAgIGlmIChicmVha0JldHdlZW5HcmFwaGVtZUJyZWFrVHlwZShwcmV2R3JhcGhlbWVCcmVha1R5cGUsIGdyYXBoZW1lQnJlYWtUeXBlKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0IC09IChwcmV2Q29kZVBvaW50ID49IDY1NTM2IC8qIFVOSUNPREVfU1VQUExFTUVOVEFSWV9QTEFORV9CRUdJTiAqLyA/IDIgOiAxKTtcbiAgICAgICAgZ3JhcGhlbWVCcmVha1R5cGUgPSBwcmV2R3JhcGhlbWVCcmVha1R5cGU7XG4gICAgfVxuICAgIHJldHVybiAoaW5pdGlhbE9mZnNldCAtIG9mZnNldCk7XG59XG5leHBvcnRzLnByZXZDaGFyTGVuZ3RoID0gcHJldkNoYXJMZW5ndGg7XG5mdW5jdGlvbiBfZ2V0Q2hhckNvbnRhaW5pbmdPZmZzZXQoc3RyLCBvZmZzZXQpIHtcbiAgICBjb25zdCBncmFwaGVtZUJyZWFrVHJlZSA9IEdyYXBoZW1lQnJlYWtUcmVlLmdldEluc3RhbmNlKCk7XG4gICAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBjb25zdCBpbml0aWFsT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIGNvbnN0IGluaXRpYWxDb2RlUG9pbnQgPSBnZXROZXh0Q29kZVBvaW50KHN0ciwgbGVuLCBvZmZzZXQpO1xuICAgIGNvbnN0IGluaXRpYWxHcmFwaGVtZUJyZWFrVHlwZSA9IGdyYXBoZW1lQnJlYWtUcmVlLmdldEdyYXBoZW1lQnJlYWtUeXBlKGluaXRpYWxDb2RlUG9pbnQpO1xuICAgIG9mZnNldCArPSAoaW5pdGlhbENvZGVQb2ludCA+PSA2NTUzNiAvKiBVTklDT0RFX1NVUFBMRU1FTlRBUllfUExBTkVfQkVHSU4gKi8gPyAyIDogMSk7XG4gICAgLy8gZXh0ZW5kIHRvIHRoZSByaWdodFxuICAgIGxldCBncmFwaGVtZUJyZWFrVHlwZSA9IGluaXRpYWxHcmFwaGVtZUJyZWFrVHlwZTtcbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuKSB7XG4gICAgICAgIGNvbnN0IG5leHRDb2RlUG9pbnQgPSBnZXROZXh0Q29kZVBvaW50KHN0ciwgbGVuLCBvZmZzZXQpO1xuICAgICAgICBjb25zdCBuZXh0R3JhcGhlbWVCcmVha1R5cGUgPSBncmFwaGVtZUJyZWFrVHJlZS5nZXRHcmFwaGVtZUJyZWFrVHlwZShuZXh0Q29kZVBvaW50KTtcbiAgICAgICAgaWYgKGJyZWFrQmV0d2VlbkdyYXBoZW1lQnJlYWtUeXBlKGdyYXBoZW1lQnJlYWtUeXBlLCBuZXh0R3JhcGhlbWVCcmVha1R5cGUpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgKz0gKG5leHRDb2RlUG9pbnQgPj0gNjU1MzYgLyogVU5JQ09ERV9TVVBQTEVNRU5UQVJZX1BMQU5FX0JFR0lOICovID8gMiA6IDEpO1xuICAgICAgICBncmFwaGVtZUJyZWFrVHlwZSA9IG5leHRHcmFwaGVtZUJyZWFrVHlwZTtcbiAgICB9XG4gICAgY29uc3QgZW5kT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIC8vIGV4dGVuZCB0byB0aGUgbGVmdFxuICAgIG9mZnNldCA9IGluaXRpYWxPZmZzZXQ7XG4gICAgZ3JhcGhlbWVCcmVha1R5cGUgPSBpbml0aWFsR3JhcGhlbWVCcmVha1R5cGU7XG4gICAgd2hpbGUgKG9mZnNldCA+IDApIHtcbiAgICAgICAgY29uc3QgcHJldkNvZGVQb2ludCA9IGdldFByZXZDb2RlUG9pbnQoc3RyLCBvZmZzZXQpO1xuICAgICAgICBjb25zdCBwcmV2R3JhcGhlbWVCcmVha1R5cGUgPSBncmFwaGVtZUJyZWFrVHJlZS5nZXRHcmFwaGVtZUJyZWFrVHlwZShwcmV2Q29kZVBvaW50KTtcbiAgICAgICAgaWYgKGJyZWFrQmV0d2VlbkdyYXBoZW1lQnJlYWtUeXBlKHByZXZHcmFwaGVtZUJyZWFrVHlwZSwgZ3JhcGhlbWVCcmVha1R5cGUpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgLT0gKHByZXZDb2RlUG9pbnQgPj0gNjU1MzYgLyogVU5JQ09ERV9TVVBQTEVNRU5UQVJZX1BMQU5FX0JFR0lOICovID8gMiA6IDEpO1xuICAgICAgICBncmFwaGVtZUJyZWFrVHlwZSA9IHByZXZHcmFwaGVtZUJyZWFrVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIFtvZmZzZXQsIGVuZE9mZnNldF07XG59XG5mdW5jdGlvbiBnZXRDaGFyQ29udGFpbmluZ09mZnNldChzdHIsIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQgPiAwICYmIGlzTG93U3Vycm9nYXRlKHN0ci5jaGFyQ29kZUF0KG9mZnNldCkpKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Q2hhckNvbnRhaW5pbmdPZmZzZXQoc3RyLCBvZmZzZXQgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIF9nZXRDaGFyQ29udGFpbmluZ09mZnNldChzdHIsIG9mZnNldCk7XG59XG5leHBvcnRzLmdldENoYXJDb250YWluaW5nT2Zmc2V0ID0gZ2V0Q2hhckNvbnRhaW5pbmdPZmZzZXQ7XG4vKipcbiAqIEEgbWFudWFsIGVuY29kaW5nIG9mIGBzdHJgIHRvIFVURjguXG4gKiBVc2Ugb25seSBpbiBlbnZpcm9ubWVudHMgd2hpY2ggZG8gbm90IG9mZmVyIG5hdGl2ZSBjb252ZXJzaW9uIG1ldGhvZHMhXG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVURjgoc3RyKSB7XG4gICAgY29uc3Qgc3RyTGVuID0gc3RyLmxlbmd0aDtcbiAgICAvLyBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVVRGLThcbiAgICAvLyBmaXJzdCBsb29wIHRvIGVzdGFibGlzaCBuZWVkZWQgYnVmZmVyIHNpemVcbiAgICBsZXQgbmVlZGVkU2l6ZSA9IDA7XG4gICAgbGV0IHN0ck9mZnNldCA9IDA7XG4gICAgd2hpbGUgKHN0ck9mZnNldCA8IHN0ckxlbikge1xuICAgICAgICBjb25zdCBjb2RlUG9pbnQgPSBnZXROZXh0Q29kZVBvaW50KHN0ciwgc3RyTGVuLCBzdHJPZmZzZXQpO1xuICAgICAgICBzdHJPZmZzZXQgKz0gKGNvZGVQb2ludCA+PSA2NTUzNiAvKiBVTklDT0RFX1NVUFBMRU1FTlRBUllfUExBTkVfQkVHSU4gKi8gPyAyIDogMSk7XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPCAweDAwODApIHtcbiAgICAgICAgICAgIG5lZWRlZFNpemUgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDA4MDApIHtcbiAgICAgICAgICAgIG5lZWRlZFNpemUgKz0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICAgICAgICBuZWVkZWRTaXplICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZWVkZWRTaXplICs9IDQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2Vjb25kIGxvb3AgdG8gYWN0dWFsbHkgZW5jb2RlXG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkobmVlZGVkU2l6ZSk7XG4gICAgc3RyT2Zmc2V0ID0gMDtcbiAgICBsZXQgYXJyT2Zmc2V0ID0gMDtcbiAgICB3aGlsZSAoc3RyT2Zmc2V0IDwgc3RyTGVuKSB7XG4gICAgICAgIGNvbnN0IGNvZGVQb2ludCA9IGdldE5leHRDb2RlUG9pbnQoc3RyLCBzdHJMZW4sIHN0ck9mZnNldCk7XG4gICAgICAgIHN0ck9mZnNldCArPSAoY29kZVBvaW50ID49IDY1NTM2IC8qIFVOSUNPREVfU1VQUExFTUVOVEFSWV9QTEFORV9CRUdJTiAqLyA/IDIgOiAxKTtcbiAgICAgICAgaWYgKGNvZGVQb2ludCA8IDB4MDA4MCkge1xuICAgICAgICAgICAgYXJyW2Fyck9mZnNldCsrXSA9IGNvZGVQb2ludDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDA4MDApIHtcbiAgICAgICAgICAgIGFyclthcnJPZmZzZXQrK10gPSAwYjExMDAwMDAwIHwgKChjb2RlUG9pbnQgJiAwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDExMTExMDAwMDAwKSA+Pj4gNik7XG4gICAgICAgICAgICBhcnJbYXJyT2Zmc2V0KytdID0gMGIxMDAwMDAwMCB8ICgoY29kZVBvaW50ICYgMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDExMTExMSkgPj4+IDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgICAgICAgIGFyclthcnJPZmZzZXQrK10gPSAwYjExMTAwMDAwIHwgKChjb2RlUG9pbnQgJiAwYjAwMDAwMDAwMDAwMDAwMDAxMTExMDAwMDAwMDAwMDAwKSA+Pj4gMTIpO1xuICAgICAgICAgICAgYXJyW2Fyck9mZnNldCsrXSA9IDBiMTAwMDAwMDAgfCAoKGNvZGVQb2ludCAmIDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAxMTExMTEwMDAwMDApID4+PiA2KTtcbiAgICAgICAgICAgIGFyclthcnJPZmZzZXQrK10gPSAwYjEwMDAwMDAwIHwgKChjb2RlUG9pbnQgJiAwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExKSA+Pj4gMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJbYXJyT2Zmc2V0KytdID0gMGIxMTExMDAwMCB8ICgoY29kZVBvaW50ICYgMGIwMDAwMDAwMDAwMDExMTAwMDAwMDAwMDAwMDAwMDAwMCkgPj4+IDE4KTtcbiAgICAgICAgICAgIGFyclthcnJPZmZzZXQrK10gPSAwYjEwMDAwMDAwIHwgKChjb2RlUG9pbnQgJiAwYjAwMDAwMDAwMDAwMDAwMTExMTExMDAwMDAwMDAwMDAwKSA+Pj4gMTIpO1xuICAgICAgICAgICAgYXJyW2Fyck9mZnNldCsrXSA9IDBiMTAwMDAwMDAgfCAoKGNvZGVQb2ludCAmIDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAxMTExMTEwMDAwMDApID4+PiA2KTtcbiAgICAgICAgICAgIGFyclthcnJPZmZzZXQrK10gPSAwYjEwMDAwMDAwIHwgKChjb2RlUG9pbnQgJiAwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExKSA+Pj4gMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMuZW5jb2RlVVRGOCA9IGVuY29kZVVURjg7XG4vKipcbiAqIEEgbWFudWFsIGRlY29kaW5nIG9mIGEgVVRGOCBzdHJpbmcuXG4gKiBVc2Ugb25seSBpbiBlbnZpcm9ubWVudHMgd2hpY2ggZG8gbm90IG9mZmVyIG5hdGl2ZSBjb252ZXJzaW9uIG1ldGhvZHMhXG4gKi9cbmZ1bmN0aW9uIGRlY29kZVVURjgoYnVmZmVyKSB7XG4gICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVVRGLThcbiAgICBjb25zdCBsZW4gPSBidWZmZXIuYnl0ZUxlbmd0aDtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICB3aGlsZSAob2Zmc2V0IDwgbGVuKSB7XG4gICAgICAgIGNvbnN0IHYwID0gYnVmZmVyW29mZnNldF07XG4gICAgICAgIGxldCBjb2RlUG9pbnQ7XG4gICAgICAgIGlmICh2MCA+PSAwYjExMTEwMDAwICYmIG9mZnNldCArIDMgPCBsZW4pIHtcbiAgICAgICAgICAgIC8vIDQgYnl0ZXNcbiAgICAgICAgICAgIGNvZGVQb2ludCA9ICgoKChidWZmZXJbb2Zmc2V0KytdICYgMGIwMDAwMDExMSkgPDwgMTgpID4+PiAwKVxuICAgICAgICAgICAgICAgIHwgKCgoYnVmZmVyW29mZnNldCsrXSAmIDBiMDAxMTExMTEpIDw8IDEyKSA+Pj4gMClcbiAgICAgICAgICAgICAgICB8ICgoKGJ1ZmZlcltvZmZzZXQrK10gJiAwYjAwMTExMTExKSA8PCA2KSA+Pj4gMClcbiAgICAgICAgICAgICAgICB8ICgoKGJ1ZmZlcltvZmZzZXQrK10gJiAwYjAwMTExMTExKSA8PCAwKSA+Pj4gMCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHYwID49IDBiMTExMDAwMDAgJiYgb2Zmc2V0ICsgMiA8IGxlbikge1xuICAgICAgICAgICAgLy8gMyBieXRlc1xuICAgICAgICAgICAgY29kZVBvaW50ID0gKCgoKGJ1ZmZlcltvZmZzZXQrK10gJiAwYjAwMDAxMTExKSA8PCAxMikgPj4+IDApXG4gICAgICAgICAgICAgICAgfCAoKChidWZmZXJbb2Zmc2V0KytdICYgMGIwMDExMTExMSkgPDwgNikgPj4+IDApXG4gICAgICAgICAgICAgICAgfCAoKChidWZmZXJbb2Zmc2V0KytdICYgMGIwMDExMTExMSkgPDwgMCkgPj4+IDApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2MCA+PSAwYjExMDAwMDAwICYmIG9mZnNldCArIDEgPCBsZW4pIHtcbiAgICAgICAgICAgIC8vIDIgYnl0ZXNcbiAgICAgICAgICAgIGNvZGVQb2ludCA9ICgoKChidWZmZXJbb2Zmc2V0KytdICYgMGIwMDAxMTExMSkgPDwgNikgPj4+IDApXG4gICAgICAgICAgICAgICAgfCAoKChidWZmZXJbb2Zmc2V0KytdICYgMGIwMDExMTExMSkgPDwgMCkgPj4+IDApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIDEgYnl0ZVxuICAgICAgICAgICAgY29kZVBvaW50ID0gYnVmZmVyW29mZnNldCsrXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGNvZGVQb2ludCA+PSAwICYmIGNvZGVQb2ludCA8PSAweEQ3RkYpIHx8IChjb2RlUG9pbnQgPj0gMHhFMDAwICYmIGNvZGVQb2ludCA8PSAweEZGRkYpKSB7XG4gICAgICAgICAgICAvLyBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmVcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZVBvaW50ID49IDB4MDEwMDAwICYmIGNvZGVQb2ludCA8PSAweDEwRkZGRikge1xuICAgICAgICAgICAgLy8gU3VwcGxlbWVudGFyeSBQbGFuZXNcbiAgICAgICAgICAgIGNvbnN0IHVQcmltZSA9IGNvZGVQb2ludCAtIDB4MTAwMDA7XG4gICAgICAgICAgICBjb25zdCB3MSA9IDB4RDgwMCArICgodVByaW1lICYgMGIxMTExMTExMTExMDAwMDAwMDAwMCkgPj4+IDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHcyID0gMHhEQzAwICsgKCh1UHJpbWUgJiAwYjAwMDAwMDAwMDAxMTExMTExMTExKSA+Pj4gMCk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHcxKSk7XG4gICAgICAgICAgICByZXN1bHQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHcyKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpbGxlZ2FsIGNvZGUgcG9pbnRcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbn1cbmV4cG9ydHMuZGVjb2RlVVRGOCA9IGRlY29kZVVURjg7XG4vKipcbiAqIEdlbmVyYXRlZCB1c2luZyBodHRwczovL2dpdGh1Yi5jb20vYWxleGRpbWEvdW5pY29kZS11dGlscy9ibG9iL21hc3Rlci9nZW5lcmF0ZS1ydGwtdGVzdC5qc1xuICovXG5jb25zdCBDT05UQUlOU19SVEwgPSAvKD86W1xcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUQwLVxcdTA1RjRcXHUwNjA4XFx1MDYwQlxcdTA2MERcXHUwNjFCLVxcdTA2NEFcXHUwNjZELVxcdTA2NkZcXHUwNjcxLVxcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODMwLVxcdTA4NThcXHUwODVFLVxcdTA4QkRcXHUyMDBGXFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkQzRFxcdUZENTAtXFx1RkRGQ1xcdUZFNzAtXFx1RkVGQ118XFx1RDgwMltcXHVEQzAwLVxcdUREMUJcXHVERDIwLVxcdURFMDBcXHVERTEwLVxcdURFMzNcXHVERTQwLVxcdURFRTRcXHVERUVCLVxcdURGMzVcXHVERjQwLVxcdURGRkZdfFxcdUQ4MDNbXFx1REMwMC1cXHVEQ0ZGXXxcXHVEODNBW1xcdURDMDAtXFx1RENDRlxcdUREMDAtXFx1REQ0M1xcdURENTAtXFx1REZGRl18XFx1RDgzQltcXHVEQzAwLVxcdURFQkJdKS87XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgc3RyYCBjb250YWlucyBhbnkgVW5pY29kZSBjaGFyYWN0ZXIgdGhhdCBpcyBjbGFzc2lmaWVkIGFzIFwiUlwiIG9yIFwiQUxcIi5cbiAqL1xuZnVuY3Rpb24gY29udGFpbnNSVEwoc3RyKSB7XG4gICAgcmV0dXJuIENPTlRBSU5TX1JUTC50ZXN0KHN0cik7XG59XG5leHBvcnRzLmNvbnRhaW5zUlRMID0gY29udGFpbnNSVEw7XG4vKipcbiAqIEdlbmVyYXRlZCB1c2luZyBodHRwczovL2dpdGh1Yi5jb20vYWxleGRpbWEvdW5pY29kZS11dGlscy9ibG9iL21hc3Rlci9nZW5lcmF0ZS1lbW9qaS10ZXN0LmpzXG4gKi9cbmNvbnN0IENPTlRBSU5TX0VNT0pJID0gLyg/OltcXHUyMzFBXFx1MjMxQlxcdTIzRjBcXHUyM0YzXFx1MjYwMC1cXHUyN0JGXFx1MkI1MFxcdTJCNTVdfFxcdUQ4M0NbXFx1RERFNi1cXHVEREZGXFx1REYwMC1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1REU0RlxcdURFODAtXFx1REVGQ1xcdURGRTAtXFx1REZFQl18XFx1RDgzRVtcXHVERDAwLVxcdURERkZcXHVERTcwLVxcdURFRDZdKS87XG5mdW5jdGlvbiBjb250YWluc0Vtb2ppKHN0cikge1xuICAgIHJldHVybiBDT05UQUlOU19FTU9KSS50ZXN0KHN0cik7XG59XG5leHBvcnRzLmNvbnRhaW5zRW1vamkgPSBjb250YWluc0Vtb2ppO1xuY29uc3QgSVNfQkFTSUNfQVNDSUkgPSAvXltcXHRcXG5cXHJcXHgyMC1cXHg3RV0qJC87XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgc3RyYCBjb250YWlucyBvbmx5IGJhc2ljIEFTQ0lJIGNoYXJhY3RlcnMgaW4gdGhlIHJhbmdlIDMyIC0gMTI2IChpbmNsdWRpbmcgMzIgYW5kIDEyNikgb3IgXFxuLCBcXHIsIFxcdFxuICovXG5mdW5jdGlvbiBpc0Jhc2ljQVNDSUkoc3RyKSB7XG4gICAgcmV0dXJuIElTX0JBU0lDX0FTQ0lJLnRlc3Qoc3RyKTtcbn1cbmV4cG9ydHMuaXNCYXNpY0FTQ0lJID0gaXNCYXNpY0FTQ0lJO1xuZXhwb3J0cy5VTlVTVUFMX0xJTkVfVEVSTUlOQVRPUlMgPSAvW1xcdTIwMjhcXHUyMDI5XS87IC8vIExJTkUgU0VQQVJBVE9SIChMUykgb3IgUEFSQUdSQVBIIFNFUEFSQVRPUiAoUFMpXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgc3RyYCBjb250YWlucyB1bnVzdWFsIGxpbmUgdGVybWluYXRvcnMsIGxpa2UgTFMgb3IgUFNcbiAqL1xuZnVuY3Rpb24gY29udGFpbnNVbnVzdWFsTGluZVRlcm1pbmF0b3JzKHN0cikge1xuICAgIHJldHVybiBleHBvcnRzLlVOVVNVQUxfTElORV9URVJNSU5BVE9SUy50ZXN0KHN0cik7XG59XG5leHBvcnRzLmNvbnRhaW5zVW51c3VhbExpbmVUZXJtaW5hdG9ycyA9IGNvbnRhaW5zVW51c3VhbExpbmVUZXJtaW5hdG9ycztcbmZ1bmN0aW9uIGNvbnRhaW5zRnVsbFdpZHRoQ2hhcmFjdGVyKHN0cikge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGlzRnVsbFdpZHRoQ2hhcmFjdGVyKHN0ci5jaGFyQ29kZUF0KGkpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5jb250YWluc0Z1bGxXaWR0aENoYXJhY3RlciA9IGNvbnRhaW5zRnVsbFdpZHRoQ2hhcmFjdGVyO1xuZnVuY3Rpb24gaXNGdWxsV2lkdGhDaGFyYWN0ZXIoY2hhckNvZGUpIHtcbiAgICAvLyBEbyBhIGNoZWFwIHRyaWNrIHRvIGJldHRlciBzdXBwb3J0IHdyYXBwaW5nIG9mIHdpZGUgY2hhcmFjdGVycywgdHJlYXQgdGhlbSBhcyAyIGNvbHVtbnNcbiAgICAvLyBodHRwOi8vanJncmFwaGl4Lm5ldC9yZXNlYXJjaC91bmljb2RlX2Jsb2Nrcy5waHBcbiAgICAvLyAgICAgICAgICAyRTgwIOKAlCAyRUZGICAgQ0pLIFJhZGljYWxzIFN1cHBsZW1lbnRcbiAgICAvLyAgICAgICAgICAyRjAwIOKAlCAyRkRGICAgS2FuZ3hpIFJhZGljYWxzXG4gICAgLy8gICAgICAgICAgMkZGMCDigJQgMkZGRiAgIElkZW9ncmFwaGljIERlc2NyaXB0aW9uIENoYXJhY3RlcnNcbiAgICAvLyAgICAgICAgICAzMDAwIOKAlCAzMDNGICAgQ0pLIFN5bWJvbHMgYW5kIFB1bmN0dWF0aW9uXG4gICAgLy8gICAgICAgICAgMzA0MCDigJQgMzA5RiAgIEhpcmFnYW5hXG4gICAgLy8gICAgICAgICAgMzBBMCDigJQgMzBGRiAgIEthdGFrYW5hXG4gICAgLy8gICAgICAgICAgMzEwMCDigJQgMzEyRiAgIEJvcG9tb2ZvXG4gICAgLy8gICAgICAgICAgMzEzMCDigJQgMzE4RiAgIEhhbmd1bCBDb21wYXRpYmlsaXR5IEphbW9cbiAgICAvLyAgICAgICAgICAzMTkwIOKAlCAzMTlGICAgS2FuYnVuXG4gICAgLy8gICAgICAgICAgMzFBMCDigJQgMzFCRiAgIEJvcG9tb2ZvIEV4dGVuZGVkXG4gICAgLy8gICAgICAgICAgMzFGMCDigJQgMzFGRiAgIEthdGFrYW5hIFBob25ldGljIEV4dGVuc2lvbnNcbiAgICAvLyAgICAgICAgICAzMjAwIOKAlCAzMkZGICAgRW5jbG9zZWQgQ0pLIExldHRlcnMgYW5kIE1vbnRoc1xuICAgIC8vICAgICAgICAgIDMzMDAg4oCUIDMzRkYgICBDSksgQ29tcGF0aWJpbGl0eVxuICAgIC8vICAgICAgICAgIDM0MDAg4oCUIDREQkYgICBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBBXG4gICAgLy8gICAgICAgICAgNERDMCDigJQgNERGRiAgIFlpamluZyBIZXhhZ3JhbSBTeW1ib2xzXG4gICAgLy8gICAgICAgICAgNEUwMCDigJQgOUZGRiAgIENKSyBVbmlmaWVkIElkZW9ncmFwaHNcbiAgICAvLyAgICAgICAgICBBMDAwIOKAlCBBNDhGICAgWWkgU3lsbGFibGVzXG4gICAgLy8gICAgICAgICAgQTQ5MCDigJQgQTRDRiAgIFlpIFJhZGljYWxzXG4gICAgLy8gICAgICAgICAgQUMwMCDigJQgRDdBRiAgIEhhbmd1bCBTeWxsYWJsZXNcbiAgICAvLyBbSUdOT1JFXSBEODAwIOKAlCBEQjdGICAgSGlnaCBTdXJyb2dhdGVzXG4gICAgLy8gW0lHTk9SRV0gREI4MCDigJQgREJGRiAgIEhpZ2ggUHJpdmF0ZSBVc2UgU3Vycm9nYXRlc1xuICAgIC8vIFtJR05PUkVdIERDMDAg4oCUIERGRkYgICBMb3cgU3Vycm9nYXRlc1xuICAgIC8vIFtJR05PUkVdIEUwMDAg4oCUIEY4RkYgICBQcml2YXRlIFVzZSBBcmVhXG4gICAgLy8gICAgICAgICAgRjkwMCDigJQgRkFGRiAgIENKSyBDb21wYXRpYmlsaXR5IElkZW9ncmFwaHNcbiAgICAvLyBbSUdOT1JFXSBGQjAwIOKAlCBGQjRGICAgQWxwaGFiZXRpYyBQcmVzZW50YXRpb24gRm9ybXNcbiAgICAvLyBbSUdOT1JFXSBGQjUwIOKAlCBGREZGICAgQXJhYmljIFByZXNlbnRhdGlvbiBGb3Jtcy1BXG4gICAgLy8gW0lHTk9SRV0gRkUwMCDigJQgRkUwRiAgIFZhcmlhdGlvbiBTZWxlY3RvcnNcbiAgICAvLyBbSUdOT1JFXSBGRTIwIOKAlCBGRTJGICAgQ29tYmluaW5nIEhhbGYgTWFya3NcbiAgICAvLyBbSUdOT1JFXSBGRTMwIOKAlCBGRTRGICAgQ0pLIENvbXBhdGliaWxpdHkgRm9ybXNcbiAgICAvLyBbSUdOT1JFXSBGRTUwIOKAlCBGRTZGICAgU21hbGwgRm9ybSBWYXJpYW50c1xuICAgIC8vIFtJR05PUkVdIEZFNzAg4oCUIEZFRkYgICBBcmFiaWMgUHJlc2VudGF0aW9uIEZvcm1zLUJcbiAgICAvLyAgICAgICAgICBGRjAwIOKAlCBGRkVGICAgSGFsZndpZHRoIGFuZCBGdWxsd2lkdGggRm9ybXNcbiAgICAvLyAgICAgICAgICAgICAgIFtodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IYWxmd2lkdGhfYW5kX2Z1bGx3aWR0aF9mb3Jtc11cbiAgICAvLyAgICAgICAgICAgICAgIG9mIHdoaWNoIEZGMDEgLSBGRjVFIGZ1bGx3aWR0aCBBU0NJSSBvZiAyMSB0byA3RVxuICAgIC8vIFtJR05PUkVdICAgIGFuZCBGRjY1IC0gRkZEQyBoYWxmd2lkdGggb2YgS2F0YWthbmEgYW5kIEhhbmd1bFxuICAgIC8vIFtJR05PUkVdIEZGRjAg4oCUIEZGRkYgICBTcGVjaWFsc1xuICAgIGNoYXJDb2RlID0gK2NoYXJDb2RlOyAvLyBAcGVyZlxuICAgIHJldHVybiAoKGNoYXJDb2RlID49IDB4MkU4MCAmJiBjaGFyQ29kZSA8PSAweEQ3QUYpXG4gICAgICAgIHx8IChjaGFyQ29kZSA+PSAweEY5MDAgJiYgY2hhckNvZGUgPD0gMHhGQUZGKVxuICAgICAgICB8fCAoY2hhckNvZGUgPj0gMHhGRjAxICYmIGNoYXJDb2RlIDw9IDB4RkY1RSkpO1xufVxuZXhwb3J0cy5pc0Z1bGxXaWR0aENoYXJhY3RlciA9IGlzRnVsbFdpZHRoQ2hhcmFjdGVyO1xuLyoqXG4gKiBBIGZhc3QgZnVuY3Rpb24gKHRoZXJlZm9yZSBpbXByZWNpc2UpIHRvIGNoZWNrIGlmIGNvZGUgcG9pbnRzIGFyZSBlbW9qaXMuXG4gKiBHZW5lcmF0ZWQgdXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhkaW1hL3VuaWNvZGUtdXRpbHMvYmxvYi9tYXN0ZXIvZ2VuZXJhdGUtZW1vamktdGVzdC5qc1xuICovXG5mdW5jdGlvbiBpc0Vtb2ppSW1wcmVjaXNlKHgpIHtcbiAgICByZXR1cm4gKCh4ID49IDB4MUYxRTYgJiYgeCA8PSAweDFGMUZGKSB8fCAoeCA9PT0gODk4NikgfHwgKHggPT09IDg5ODcpIHx8ICh4ID09PSA5MjAwKVxuICAgICAgICB8fCAoeCA9PT0gOTIwMykgfHwgKHggPj0gOTcyOCAmJiB4IDw9IDEwMTc1KSB8fCAoeCA9PT0gMTEwODgpIHx8ICh4ID09PSAxMTA5MylcbiAgICAgICAgfHwgKHggPj0gMTI3NzQ0ICYmIHggPD0gMTI4NTkxKSB8fCAoeCA+PSAxMjg2NDAgJiYgeCA8PSAxMjg3NjQpXG4gICAgICAgIHx8ICh4ID49IDEyODk5MiAmJiB4IDw9IDEyOTAwMykgfHwgKHggPj0gMTI5MjgwICYmIHggPD0gMTI5NTM1KVxuICAgICAgICB8fCAoeCA+PSAxMjk2NDggJiYgeCA8PSAxMjk3NTApKTtcbn1cbmV4cG9ydHMuaXNFbW9qaUltcHJlY2lzZSA9IGlzRW1vamlJbXByZWNpc2U7XG4vKipcbiAqIEdpdmVuIGEgc3RyaW5nIGFuZCBhIG1heCBsZW5ndGggcmV0dXJucyBhIHNob3J0ZWQgdmVyc2lvbi4gU2hvcnRpbmdcbiAqIGhhcHBlbnMgYXQgZmF2b3JhYmxlIHBvc2l0aW9ucyAtIHN1Y2ggYXMgd2hpdGVzcGFjZSBvciBwdW5jdHVhdGlvbiBjaGFyYWN0ZXJzLlxuICovXG5mdW5jdGlvbiBsY3V0KHRleHQsIG4pIHtcbiAgICBpZiAodGV4dC5sZW5ndGggPCBuKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBjb25zdCByZSA9IC9cXGIvZztcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKHJlLnRlc3QodGV4dCkpIHtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoIC0gcmUubGFzdEluZGV4IDwgbikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaSA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhpKS5yZXBsYWNlKC9eXFxzLywgJycpO1xufVxuZXhwb3J0cy5sY3V0ID0gbGN1dDtcbi8vIEVzY2FwZSBjb2Rlc1xuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlXG5jb25zdCBFTCA9IC9cXHgxQlxceDVCWzEyXT9LL2c7IC8vIEVyYXNlIGluIGxpbmVcbmNvbnN0IENPTE9SX1NUQVJUID0gL1xceDFiXFxbXFxkK20vZzsgLy8gQ29sb3JcbmNvbnN0IENPTE9SX0VORCA9IC9cXHgxYlxcWzA/bS9nOyAvLyBDb2xvclxuZnVuY3Rpb24gcmVtb3ZlQW5zaUVzY2FwZUNvZGVzKHN0cikge1xuICAgIGlmIChzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoRUwsICcnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoQ09MT1JfU1RBUlQsICcnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoQ09MT1JfRU5ELCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5leHBvcnRzLnJlbW92ZUFuc2lFc2NhcGVDb2RlcyA9IHJlbW92ZUFuc2lFc2NhcGVDb2Rlcztcbi8vIC0tIFVURi04IEJPTVxuZXhwb3J0cy5VVEY4X0JPTV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1Mjc5IC8qIFVURjhfQk9NICovKTtcbmZ1bmN0aW9uIHN0YXJ0c1dpdGhVVEY4Qk9NKHN0cikge1xuICAgIHJldHVybiAhIShzdHIgJiYgc3RyLmxlbmd0aCA+IDAgJiYgc3RyLmNoYXJDb2RlQXQoMCkgPT09IDY1Mjc5IC8qIFVURjhfQk9NICovKTtcbn1cbmV4cG9ydHMuc3RhcnRzV2l0aFVURjhCT00gPSBzdGFydHNXaXRoVVRGOEJPTTtcbmZ1bmN0aW9uIHN0cmlwVVRGOEJPTShzdHIpIHtcbiAgICByZXR1cm4gc3RhcnRzV2l0aFVURjhCT00oc3RyKSA/IHN0ci5zdWJzdHIoMSkgOiBzdHI7XG59XG5leHBvcnRzLnN0cmlwVVRGOEJPTSA9IHN0cmlwVVRGOEJPTTtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSBwcm92aWRlZCBxdWVyeSBzdHJpbmcgYXJlIGluY2x1ZGVkIGluIHRoZVxuICogdGFyZ2V0IHN0cmluZy4gVGhlIGNoYXJhY3RlcnMgZG8gbm90IGhhdmUgdG8gYmUgY29udGlndW91cyB3aXRoaW4gdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZnV6enlDb250YWlucyh0YXJnZXQsIHF1ZXJ5KSB7XG4gICAgaWYgKCF0YXJnZXQgfHwgIXF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gcmV0dXJuIGVhcmx5IGlmIHRhcmdldCBvciBxdWVyeSBhcmUgdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0YXJnZXQubGVuZ3RoIDwgcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gaW1wb3NzaWJsZSBmb3IgcXVlcnkgdG8gYmUgY29udGFpbmVkIGluIHRhcmdldFxuICAgIH1cbiAgICBjb25zdCBxdWVyeUxlbiA9IHF1ZXJ5Lmxlbmd0aDtcbiAgICBjb25zdCB0YXJnZXRMb3dlciA9IHRhcmdldC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGxhc3RJbmRleE9mID0gLTE7XG4gICAgd2hpbGUgKGluZGV4IDwgcXVlcnlMZW4pIHtcbiAgICAgICAgY29uc3QgaW5kZXhPZiA9IHRhcmdldExvd2VyLmluZGV4T2YocXVlcnlbaW5kZXhdLCBsYXN0SW5kZXhPZiArIDEpO1xuICAgICAgICBpZiAoaW5kZXhPZiA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0SW5kZXhPZiA9IGluZGV4T2Y7XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5mdXp6eUNvbnRhaW5zID0gZnV6enlDb250YWlucztcbmZ1bmN0aW9uIGNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyKHRhcmdldCwgaWdub3JlRXNjYXBlZENoYXJzID0gZmFsc2UpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpZ25vcmVFc2NhcGVkQ2hhcnMpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnJlcGxhY2UoL1xcXFwuL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC50b0xvd2VyQ2FzZSgpICE9PSB0YXJnZXQ7XG59XG5leHBvcnRzLmNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyID0gY29udGFpbnNVcHBlcmNhc2VDaGFyYWN0ZXI7XG5mdW5jdGlvbiB1cHBlcmNhc2VGaXJzdExldHRlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuZXhwb3J0cy51cHBlcmNhc2VGaXJzdExldHRlciA9IHVwcGVyY2FzZUZpcnN0TGV0dGVyO1xuZnVuY3Rpb24gZ2V0TkxpbmVzKHN0ciwgbiA9IDEpIHtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBpZHggPSAtMTtcbiAgICBkbyB7XG4gICAgICAgIGlkeCA9IHN0ci5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcbiAgICAgICAgbi0tO1xuICAgIH0gd2hpbGUgKG4gPiAwICYmIGlkeCA+PSAwKTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBpZiAoc3RyW2lkeCAtIDFdID09PSAnXFxyJykge1xuICAgICAgICBpZHgtLTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaWR4KTtcbn1cbmV4cG9ydHMuZ2V0TkxpbmVzID0gZ2V0TkxpbmVzO1xuLyoqXG4gKiBQcm9kdWNlcyAnYSctJ3onLCBmb2xsb3dlZCBieSAnQSctJ1onLi4uIGZvbGxvd2VkIGJ5ICdhJy0neicsIGV0Yy5cbiAqL1xuZnVuY3Rpb24gc2luZ2xlTGV0dGVySGFzaChuKSB7XG4gICAgY29uc3QgTEVUVEVSU19DTlQgPSAoOTAgLyogWiAqLyAtIDY1IC8qIEEgKi8gKyAxKTtcbiAgICBuID0gbiAlICgyICogTEVUVEVSU19DTlQpO1xuICAgIGlmIChuIDwgTEVUVEVSU19DTlQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgLyogYSAqLyArIG4pO1xuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSAvKiBBICovICsgbiAtIExFVFRFUlNfQ05UKTtcbn1cbmV4cG9ydHMuc2luZ2xlTGV0dGVySGFzaCA9IHNpbmdsZUxldHRlckhhc2g7XG4vLyNyZWdpb24gVW5pY29kZSBHcmFwaGVtZSBCcmVha1xuZnVuY3Rpb24gZ2V0R3JhcGhlbWVCcmVha1R5cGUoY29kZVBvaW50KSB7XG4gICAgY29uc3QgZ3JhcGhlbWVCcmVha1RyZWUgPSBHcmFwaGVtZUJyZWFrVHJlZS5nZXRJbnN0YW5jZSgpO1xuICAgIHJldHVybiBncmFwaGVtZUJyZWFrVHJlZS5nZXRHcmFwaGVtZUJyZWFrVHlwZShjb2RlUG9pbnQpO1xufVxuZXhwb3J0cy5nZXRHcmFwaGVtZUJyZWFrVHlwZSA9IGdldEdyYXBoZW1lQnJlYWtUeXBlO1xuZnVuY3Rpb24gYnJlYWtCZXR3ZWVuR3JhcGhlbWVCcmVha1R5cGUoYnJlYWtUeXBlQSwgYnJlYWtUeXBlQikge1xuICAgIC8vIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjI5LyNHcmFwaGVtZV9DbHVzdGVyX0JvdW5kYXJ5X1J1bGVzXG4gICAgLy8gISEhIExldCdzIG1ha2UgdGhlIGNvbW1vbiBjYXNlIGEgYml0IGZhc3RlclxuICAgIGlmIChicmVha1R5cGVBID09PSAwIC8qIE90aGVyICovKSB7XG4gICAgICAgIC8vIHNlZSBodHRwczovL3d3dy51bmljb2RlLm9yZy9QdWJsaWMvMTMuMC4wL3VjZC9hdXhpbGlhcnkvR3JhcGhlbWVCcmVha1Rlc3QtMTMuMC4wZDEwLmh0bWwjdGFibGVcbiAgICAgICAgcmV0dXJuIChicmVha1R5cGVCICE9PSA1IC8qIEV4dGVuZCAqLyAmJiBicmVha1R5cGVCICE9PSA3IC8qIFNwYWNpbmdNYXJrICovKTtcbiAgICB9XG4gICAgLy8gRG8gbm90IGJyZWFrIGJldHdlZW4gYSBDUiBhbmQgTEYuIE90aGVyd2lzZSwgYnJlYWsgYmVmb3JlIGFuZCBhZnRlciBjb250cm9scy5cbiAgICAvLyBHQjMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1Igw5cgTEZcbiAgICAvLyBHQjQgICAgICAgICAgICAgICAgICAgICAgIChDb250cm9sIHwgQ1IgfCBMRikgw7dcbiAgICAvLyBHQjUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw7cgKENvbnRyb2wgfCBDUiB8IExGKVxuICAgIGlmIChicmVha1R5cGVBID09PSAyIC8qIENSICovKSB7XG4gICAgICAgIGlmIChicmVha1R5cGVCID09PSAzIC8qIExGICovKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEdCM1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChicmVha1R5cGVBID09PSA0IC8qIENvbnRyb2wgKi8gfHwgYnJlYWtUeXBlQSA9PT0gMiAvKiBDUiAqLyB8fCBicmVha1R5cGVBID09PSAzIC8qIExGICovKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBHQjRcbiAgICB9XG4gICAgaWYgKGJyZWFrVHlwZUIgPT09IDQgLyogQ29udHJvbCAqLyB8fCBicmVha1R5cGVCID09PSAyIC8qIENSICovIHx8IGJyZWFrVHlwZUIgPT09IDMgLyogTEYgKi8pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEdCNVxuICAgIH1cbiAgICAvLyBEbyBub3QgYnJlYWsgSGFuZ3VsIHN5bGxhYmxlIHNlcXVlbmNlcy5cbiAgICAvLyBHQjYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEwgw5cgKEwgfCBWIHwgTFYgfCBMVlQpXG4gICAgLy8gR0I3ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChMViB8IFYpIMOXIChWIHwgVClcbiAgICAvLyBHQjggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoTFZUIHwgVCkgw5cgVFxuICAgIGlmIChicmVha1R5cGVBID09PSA4IC8qIEwgKi8pIHtcbiAgICAgICAgaWYgKGJyZWFrVHlwZUIgPT09IDggLyogTCAqLyB8fCBicmVha1R5cGVCID09PSA5IC8qIFYgKi8gfHwgYnJlYWtUeXBlQiA9PT0gMTEgLyogTFYgKi8gfHwgYnJlYWtUeXBlQiA9PT0gMTIgLyogTFZUICovKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEdCNlxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChicmVha1R5cGVBID09PSAxMSAvKiBMViAqLyB8fCBicmVha1R5cGVBID09PSA5IC8qIFYgKi8pIHtcbiAgICAgICAgaWYgKGJyZWFrVHlwZUIgPT09IDkgLyogViAqLyB8fCBicmVha1R5cGVCID09PSAxMCAvKiBUICovKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEdCN1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChicmVha1R5cGVBID09PSAxMiAvKiBMVlQgKi8gfHwgYnJlYWtUeXBlQSA9PT0gMTAgLyogVCAqLykge1xuICAgICAgICBpZiAoYnJlYWtUeXBlQiA9PT0gMTAgLyogVCAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBHQjhcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBEbyBub3QgYnJlYWsgYmVmb3JlIGV4dGVuZGluZyBjaGFyYWN0ZXJzIG9yIFpXSi5cbiAgICAvLyBHQjkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw5cgKEV4dGVuZCB8IFpXSilcbiAgICBpZiAoYnJlYWtUeXBlQiA9PT0gNSAvKiBFeHRlbmQgKi8gfHwgYnJlYWtUeXBlQiA9PT0gMTMgLyogWldKICovKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gR0I5XG4gICAgfVxuICAgIC8vIFRoZSBHQjlhIGFuZCBHQjliIHJ1bGVzIG9ubHkgYXBwbHkgdG8gZXh0ZW5kZWQgZ3JhcGhlbWUgY2x1c3RlcnM6XG4gICAgLy8gRG8gbm90IGJyZWFrIGJlZm9yZSBTcGFjaW5nTWFya3MsIG9yIGFmdGVyIFByZXBlbmQgY2hhcmFjdGVycy5cbiAgICAvLyBHQjlhICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgw5cgU3BhY2luZ01hcmtcbiAgICAvLyBHQjliICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXBlbmQgw5dcbiAgICBpZiAoYnJlYWtUeXBlQiA9PT0gNyAvKiBTcGFjaW5nTWFyayAqLykge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEdCOWFcbiAgICB9XG4gICAgaWYgKGJyZWFrVHlwZUEgPT09IDEgLyogUHJlcGVuZCAqLykge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEdCOWJcbiAgICB9XG4gICAgLy8gRG8gbm90IGJyZWFrIHdpdGhpbiBlbW9qaSBtb2RpZmllciBzZXF1ZW5jZXMgb3IgZW1vamkgendqIHNlcXVlbmNlcy5cbiAgICAvLyBHQjExICAgIFxccHtFeHRlbmRlZF9QaWN0b2dyYXBoaWN9IEV4dGVuZCogWldKIMOXIFxccHtFeHRlbmRlZF9QaWN0b2dyYXBoaWN9XG4gICAgaWYgKGJyZWFrVHlwZUEgPT09IDEzIC8qIFpXSiAqLyAmJiBicmVha1R5cGVCID09PSAxNCAvKiBFeHRlbmRlZF9QaWN0b2dyYXBoaWMgKi8pIHtcbiAgICAgICAgLy8gTm90ZTogd2UgYXJlIG5vdCBpbXBsZW1lbnRpbmcgdGhlIHJ1bGUgZW50aXJlbHkgaGVyZSB0byBhdm9pZCBpbnRyb2R1Y2luZyBzdGF0ZXNcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBHQjExXG4gICAgfVxuICAgIC8vIEdCMTIgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdCAoUkkgUkkpKiBSSSDDlyBSSVxuICAgIC8vIEdCMTMgICAgICAgICAgICAgICAgICAgICAgICBbXlJJXSAoUkkgUkkpKiBSSSDDlyBSSVxuICAgIGlmIChicmVha1R5cGVBID09PSA2IC8qIFJlZ2lvbmFsX0luZGljYXRvciAqLyAmJiBicmVha1R5cGVCID09PSA2IC8qIFJlZ2lvbmFsX0luZGljYXRvciAqLykge1xuICAgICAgICAvLyBOb3RlOiB3ZSBhcmUgbm90IGltcGxlbWVudGluZyB0aGUgcnVsZSBlbnRpcmVseSBoZXJlIHRvIGF2b2lkIGludHJvZHVjaW5nIHN0YXRlc1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEdCMTIgJiBHQjEzXG4gICAgfVxuICAgIC8vIEdCOTk5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFueSDDtyBBbnlcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuYnJlYWtCZXR3ZWVuR3JhcGhlbWVCcmVha1R5cGUgPSBicmVha0JldHdlZW5HcmFwaGVtZUJyZWFrVHlwZTtcbmNsYXNzIEdyYXBoZW1lQnJlYWtUcmVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGdldEdyYXBoZW1lQnJlYWtSYXdEYXRhKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFHcmFwaGVtZUJyZWFrVHJlZS5fSU5TVEFOQ0UpIHtcbiAgICAgICAgICAgIEdyYXBoZW1lQnJlYWtUcmVlLl9JTlNUQU5DRSA9IG5ldyBHcmFwaGVtZUJyZWFrVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHcmFwaGVtZUJyZWFrVHJlZS5fSU5TVEFOQ0U7XG4gICAgfVxuICAgIGdldEdyYXBoZW1lQnJlYWtUeXBlKGNvZGVQb2ludCkge1xuICAgICAgICAvLyAhISEgTGV0J3MgbWFrZSA3Yml0IEFTQ0lJIGEgYml0IGZhc3RlcjogMC4uMzFcbiAgICAgICAgaWYgKGNvZGVQb2ludCA8IDMyKSB7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50ID09PSAxMCAvKiBMaW5lRmVlZCAqLykge1xuICAgICAgICAgICAgICAgIHJldHVybiAzIC8qIExGICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA9PT0gMTMgLyogQ2FycmlhZ2VSZXR1cm4gKi8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMiAvKiBDUiAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA0IC8qIENvbnRyb2wgKi87XG4gICAgICAgIH1cbiAgICAgICAgLy8gISEhIExldCdzIG1ha2UgN2JpdCBBU0NJSSBhIGJpdCBmYXN0ZXI6IDMyLi4xMjZcbiAgICAgICAgaWYgKGNvZGVQb2ludCA8IDEyNykge1xuICAgICAgICAgICAgcmV0dXJuIDAgLyogT3RoZXIgKi87XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgICAgIGNvbnN0IG5vZGVDb3VudCA9IGRhdGEubGVuZ3RoIC8gMztcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDE7XG4gICAgICAgIHdoaWxlIChub2RlSW5kZXggPD0gbm9kZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50IDwgZGF0YVszICogbm9kZUluZGV4XSkge1xuICAgICAgICAgICAgICAgIC8vIGdvIGxlZnRcbiAgICAgICAgICAgICAgICBub2RlSW5kZXggPSAyICogbm9kZUluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29kZVBvaW50ID4gZGF0YVszICogbm9kZUluZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBnbyByaWdodFxuICAgICAgICAgICAgICAgIG5vZGVJbmRleCA9IDIgKiBub2RlSW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaGl0XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbMyAqIG5vZGVJbmRleCArIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwIC8qIE90aGVyICovO1xuICAgIH1cbn1cbkdyYXBoZW1lQnJlYWtUcmVlLl9JTlNUQU5DRSA9IG51bGw7XG5mdW5jdGlvbiBnZXRHcmFwaGVtZUJyZWFrUmF3RGF0YSgpIHtcbiAgICAvLyBnZW5lcmF0ZWQgdXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhkaW1hL3VuaWNvZGUtdXRpbHMvYmxvYi9tYXN0ZXIvZ2VuZXJhdGUtZ3JhcGhlbWUtYnJlYWsuanNcbiAgICByZXR1cm4gSlNPTi5wYXJzZSgnWzAsMCwwLDUxNTkyLDUxNTkyLDExLDQ0NDI0LDQ0NDI0LDExLDcyMjUxLDcyMjU0LDUsNzE1MCw3MTUwLDcsNDgwMDgsNDgwMDgsMTEsNTUxNzYsNTUxNzYsMTEsMTI4NDIwLDEyODQyMCwxNCwzMjc2LDMyNzcsNSw5OTc5LDk5ODAsMTQsNDYyMTYsNDYyMTYsMTEsNDk4MDAsNDk4MDAsMTEsNTMzODQsNTMzODQsMTEsNzA3MjYsNzA3MjYsNSwxMjI5MTUsMTIyOTE2LDUsMTI5MzIwLDEyOTMyNywxNCwyNTU4LDI1NTgsNSw1OTA2LDU5MDgsNSw5NzYyLDk3NjMsMTQsNDMzNjAsNDMzODgsOCw0NTMyMCw0NTMyMCwxMSw0NzExMiw0NzExMiwxMSw0ODkwNCw0ODkwNCwxMSw1MDY5Niw1MDY5NiwxMSw1MjQ4OCw1MjQ4OCwxMSw1NDI4MCw1NDI4MCwxMSw3MDA4Miw3MDA4MywxLDcxMzUwLDcxMzUwLDcsNzMxMTEsNzMxMTEsNSwxMjc4OTIsMTI3ODkzLDE0LDEyODcyNiwxMjg3MjcsMTQsMTI5NDczLDEyOTQ3NCwxNCwyMDI3LDIwMzUsNSwyOTAxLDI5MDIsNSwzNzg0LDM3ODksNSw2NzU0LDY3NTQsNSw4NDE4LDg0MjAsNSw5ODc3LDk4NzcsMTQsMTEwODgsMTEwODgsMTQsNDQwMDgsNDQwMDgsNSw0NDg3Miw0NDg3MiwxMSw0NTc2OCw0NTc2OCwxMSw0NjY2NCw0NjY2NCwxMSw0NzU2MCw0NzU2MCwxMSw0ODQ1Niw0ODQ1NiwxMSw0OTM1Miw0OTM1MiwxMSw1MDI0OCw1MDI0OCwxMSw1MTE0NCw1MTE0NCwxMSw1MjA0MCw1MjA0MCwxMSw1MjkzNiw1MjkzNiwxMSw1MzgzMiw1MzgzMiwxMSw1NDcyOCw1NDcyOCwxMSw2OTgxMSw2OTgxNCw1LDcwNDU5LDcwNDYwLDUsNzEwOTYsNzEwOTksNyw3MTk5OCw3MTk5OCw1LDcyODc0LDcyODgwLDUsMTE5MTQ5LDExOTE0OSw3LDEyNzM3NCwxMjczNzQsMTQsMTI4MzM1LDEyODMzNSwxNCwxMjg0ODIsMTI4NDgyLDE0LDEyODc2NSwxMjg3NjcsMTQsMTI5Mzk5LDEyOTQwMCwxNCwxMjk2ODAsMTI5Njg1LDE0LDE0NzYsMTQ3Nyw1LDIzNzcsMjM4MCw3LDI3NTksMjc2MCw1LDMxMzcsMzE0MCw3LDM0NTgsMzQ1OSw3LDQxNTMsNDE1NCw1LDY0MzIsNjQzNCw1LDY5NzgsNjk3OCw1LDc2NzUsNzY3OSw1LDk3MjMsOTcyNiwxNCw5ODIzLDk4MjMsMTQsOTkxOSw5OTIzLDE0LDEwMDM1LDEwMDM2LDE0LDQyNzM2LDQyNzM3LDUsNDM1OTYsNDM1OTYsNSw0NDIwMCw0NDIwMCwxMSw0NDY0OCw0NDY0OCwxMSw0NTA5Niw0NTA5NiwxMSw0NTU0NCw0NTU0NCwxMSw0NTk5Miw0NTk5MiwxMSw0NjQ0MCw0NjQ0MCwxMSw0Njg4OCw0Njg4OCwxMSw0NzMzNiw0NzMzNiwxMSw0Nzc4NCw0Nzc4NCwxMSw0ODIzMiw0ODIzMiwxMSw0ODY4MCw0ODY4MCwxMSw0OTEyOCw0OTEyOCwxMSw0OTU3Niw0OTU3NiwxMSw1MDAyNCw1MDAyNCwxMSw1MDQ3Miw1MDQ3MiwxMSw1MDkyMCw1MDkyMCwxMSw1MTM2OCw1MTM2OCwxMSw1MTgxNiw1MTgxNiwxMSw1MjI2NCw1MjI2NCwxMSw1MjcxMiw1MjcxMiwxMSw1MzE2MCw1MzE2MCwxMSw1MzYwOCw1MzYwOCwxMSw1NDA1Niw1NDA1NiwxMSw1NDUwNCw1NDUwNCwxMSw1NDk1Miw1NDk1MiwxMSw2ODEwOCw2ODExMSw1LDY5OTMzLDY5OTQwLDUsNzAxOTcsNzAxOTcsNyw3MDQ5OCw3MDQ5OSw3LDcwODQ1LDcwODQ1LDUsNzEyMjksNzEyMjksNSw3MTcyNyw3MTczNSw1LDcyMTU0LDcyMTU1LDUsNzIzNDQsNzIzNDUsNSw3MzAyMyw3MzAyOSw1LDk0MDk1LDk0MDk4LDUsMTIxNDAzLDEyMTQ1Miw1LDEyNjk4MSwxMjcxODIsMTQsMTI3NTM4LDEyNzU0NiwxNCwxMjc5OTAsMTI3OTkwLDE0LDEyODM5MSwxMjgzOTEsMTQsMTI4NDQ1LDEyODQ0OSwxNCwxMjg1MDAsMTI4NTA1LDE0LDEyODc1MiwxMjg3NTIsMTQsMTI5MTYwLDEyOTE2NywxNCwxMjkzNTYsMTI5MzU2LDE0LDEyOTQzMiwxMjk0NDIsMTQsMTI5NjQ4LDEyOTY1MSwxNCwxMjk3NTEsMTMxMDY5LDE0LDE3MywxNzMsNCwxNzU3LDE3NTcsMSwyMjc0LDIyNzQsMSwyNDk0LDI0OTQsNSwyNjQxLDI2NDEsNSwyODc2LDI4NzYsNSwzMDE0LDMwMTYsNywzMjYyLDMyNjIsNywzMzkzLDMzOTYsNSwzNTcwLDM1NzEsNywzOTY4LDM5NzIsNSw0MjI4LDQyMjgsNyw2MDg2LDYwODYsNSw2Njc5LDY2ODAsNSw2OTEyLDY5MTUsNSw3MDgwLDcwODEsNSw3MzgwLDczOTIsNSw4MjUyLDgyNTIsMTQsOTA5Niw5MDk2LDE0LDk3NDgsOTc0OSwxNCw5Nzg0LDk3ODYsMTQsOTgzMyw5ODUwLDE0LDk4OTAsOTg5NCwxNCw5OTM4LDk5MzgsMTQsOTk5OSw5OTk5LDE0LDEwMDg1LDEwMDg3LDE0LDEyMzQ5LDEyMzQ5LDE0LDQzMTM2LDQzMTM3LDcsNDM0NTQsNDM0NTYsNyw0Mzc1NSw0Mzc1NSw3LDQ0MDg4LDQ0MDg4LDExLDQ0MzEyLDQ0MzEyLDExLDQ0NTM2LDQ0NTM2LDExLDQ0NzYwLDQ0NzYwLDExLDQ0OTg0LDQ0OTg0LDExLDQ1MjA4LDQ1MjA4LDExLDQ1NDMyLDQ1NDMyLDExLDQ1NjU2LDQ1NjU2LDExLDQ1ODgwLDQ1ODgwLDExLDQ2MTA0LDQ2MTA0LDExLDQ2MzI4LDQ2MzI4LDExLDQ2NTUyLDQ2NTUyLDExLDQ2Nzc2LDQ2Nzc2LDExLDQ3MDAwLDQ3MDAwLDExLDQ3MjI0LDQ3MjI0LDExLDQ3NDQ4LDQ3NDQ4LDExLDQ3NjcyLDQ3NjcyLDExLDQ3ODk2LDQ3ODk2LDExLDQ4MTIwLDQ4MTIwLDExLDQ4MzQ0LDQ4MzQ0LDExLDQ4NTY4LDQ4NTY4LDExLDQ4NzkyLDQ4NzkyLDExLDQ5MDE2LDQ5MDE2LDExLDQ5MjQwLDQ5MjQwLDExLDQ5NDY0LDQ5NDY0LDExLDQ5Njg4LDQ5Njg4LDExLDQ5OTEyLDQ5OTEyLDExLDUwMTM2LDUwMTM2LDExLDUwMzYwLDUwMzYwLDExLDUwNTg0LDUwNTg0LDExLDUwODA4LDUwODA4LDExLDUxMDMyLDUxMDMyLDExLDUxMjU2LDUxMjU2LDExLDUxNDgwLDUxNDgwLDExLDUxNzA0LDUxNzA0LDExLDUxOTI4LDUxOTI4LDExLDUyMTUyLDUyMTUyLDExLDUyMzc2LDUyMzc2LDExLDUyNjAwLDUyNjAwLDExLDUyODI0LDUyODI0LDExLDUzMDQ4LDUzMDQ4LDExLDUzMjcyLDUzMjcyLDExLDUzNDk2LDUzNDk2LDExLDUzNzIwLDUzNzIwLDExLDUzOTQ0LDUzOTQ0LDExLDU0MTY4LDU0MTY4LDExLDU0MzkyLDU0MzkyLDExLDU0NjE2LDU0NjE2LDExLDU0ODQwLDU0ODQwLDExLDU1MDY0LDU1MDY0LDExLDY1NDM4LDY1NDM5LDUsNjk2MzMsNjk2MzMsNSw2OTgzNyw2OTgzNywxLDcwMDE4LDcwMDE4LDcsNzAxODgsNzAxOTAsNyw3MDM2OCw3MDM3MCw3LDcwNDY1LDcwNDY4LDcsNzA3MTIsNzA3MTksNSw3MDgzNSw3MDg0MCw1LDcwODUwLDcwODUxLDUsNzExMzIsNzExMzMsNSw3MTM0MCw3MTM0MCw3LDcxNDU4LDcxNDYxLDUsNzE5ODUsNzE5ODksNyw3MjAwMiw3MjAwMiw3LDcyMTkzLDcyMjAyLDUsNzIyODEsNzIyODMsNSw3Mjc2Niw3Mjc2Niw3LDcyODg1LDcyODg2LDUsNzMxMDQsNzMxMDUsNSw5MjkxMiw5MjkxNiw1LDExMzgyNCwxMTM4MjcsNCwxMTkxNzMsMTE5MTc5LDUsMTIxNTA1LDEyMTUxOSw1LDEyNTEzNiwxMjUxNDIsNSwxMjcyNzksMTI3Mjc5LDE0LDEyNzQ4OSwxMjc0OTAsMTQsMTI3NTcwLDEyNzc0MywxNCwxMjc5MDAsMTI3OTAxLDE0LDEyODI1NCwxMjgyNTQsMTQsMTI4MzY5LDEyODM3MCwxNCwxMjg0MDAsMTI4NDAwLDE0LDEyODQyNSwxMjg0MzIsMTQsMTI4NDY4LDEyODQ3NSwxNCwxMjg0ODksMTI4NDk0LDE0LDEyODcxNSwxMjg3MjAsMTQsMTI4NzQ1LDEyODc0NSwxNCwxMjg3NTksMTI4NzYwLDE0LDEyOTAwNCwxMjkwMjMsMTQsMTI5Mjk2LDEyOTMwNCwxNCwxMjkzNDAsMTI5MzQyLDE0LDEyOTM4OCwxMjkzOTIsMTQsMTI5NDA0LDEyOTQwNywxNCwxMjk0NTQsMTI5NDU1LDE0LDEyOTQ4NSwxMjk0ODcsMTQsMTI5NjU5LDEyOTY2MywxNCwxMjk3MTksMTI5NzI3LDE0LDkxNzUzNiw5MTc2MzEsNSwxMywxMywyLDExNjAsMTE2MSw1LDE1NjQsMTU2NCw0LDE4MDcsMTgwNywxLDIwODUsMjA4Nyw1LDIzNjMsMjM2Myw3LDI0MDIsMjQwMyw1LDI1MDcsMjUwOCw3LDI2MjIsMjYyNCw3LDI2OTEsMjY5MSw3LDI3ODYsMjc4Nyw1LDI4ODEsMjg4NCw1LDMwMDYsMzAwNiw1LDMwNzIsMzA3Miw1LDMxNzAsMzE3MSw1LDMyNjcsMzI2OCw3LDMzMzAsMzMzMSw3LDM0MDYsMzQwNiwxLDM1MzgsMzU0MCw1LDM2NTUsMzY2Miw1LDM4OTcsMzg5Nyw1LDQwMzgsNDAzOCw1LDQxODQsNDE4NSw1LDQzNTIsNDQ0Nyw4LDYwNjgsNjA2OSw1LDYxNTUsNjE1Nyw1LDY0NDgsNjQ0OSw3LDY3NDIsNjc0Miw1LDY3ODMsNjc4Myw1LDY5NjYsNjk3MCw1LDcwNDIsNzA0Miw3LDcxNDMsNzE0Myw3LDcyMTIsNzIxOSw1LDc0MTIsNzQxMiw1LDgyMDYsODIwNyw0LDgyOTQsODMwMyw0LDg1OTYsODYwMSwxNCw5NDEwLDk0MTAsMTQsOTc0Miw5NzQyLDE0LDk3NTcsOTc1NywxNCw5NzcwLDk3NzAsMTQsOTc5NCw5Nzk0LDE0LDk4MjgsOTgyOCwxNCw5ODU1LDk4NTUsMTQsOTg4Miw5ODgyLDE0LDk5MDAsOTkwMywxNCw5OTI5LDk5MzMsMTQsOTk2Myw5OTY3LDE0LDk5ODcsOTk4OCwxNCwxMDAwNiwxMDAwNiwxNCwxMDA2MiwxMDA2MiwxNCwxMDE3NSwxMDE3NSwxNCwxMTc0NCwxMTc3NSw1LDQyNjA3LDQyNjA3LDUsNDMwNDMsNDMwNDQsNyw0MzI2Myw0MzI2Myw1LDQzNDQ0LDQzNDQ1LDcsNDM1NjksNDM1NzAsNSw0MzY5OCw0MzcwMCw1LDQzNzY2LDQzNzY2LDUsNDQwMzIsNDQwMzIsMTEsNDQxNDQsNDQxNDQsMTEsNDQyNTYsNDQyNTYsMTEsNDQzNjgsNDQzNjgsMTEsNDQ0ODAsNDQ0ODAsMTEsNDQ1OTIsNDQ1OTIsMTEsNDQ3MDQsNDQ3MDQsMTEsNDQ4MTYsNDQ4MTYsMTEsNDQ5MjgsNDQ5MjgsMTEsNDUwNDAsNDUwNDAsMTEsNDUxNTIsNDUxNTIsMTEsNDUyNjQsNDUyNjQsMTEsNDUzNzYsNDUzNzYsMTEsNDU0ODgsNDU0ODgsMTEsNDU2MDAsNDU2MDAsMTEsNDU3MTIsNDU3MTIsMTEsNDU4MjQsNDU4MjQsMTEsNDU5MzYsNDU5MzYsMTEsNDYwNDgsNDYwNDgsMTEsNDYxNjAsNDYxNjAsMTEsNDYyNzIsNDYyNzIsMTEsNDYzODQsNDYzODQsMTEsNDY0OTYsNDY0OTYsMTEsNDY2MDgsNDY2MDgsMTEsNDY3MjAsNDY3MjAsMTEsNDY4MzIsNDY4MzIsMTEsNDY5NDQsNDY5NDQsMTEsNDcwNTYsNDcwNTYsMTEsNDcxNjgsNDcxNjgsMTEsNDcyODAsNDcyODAsMTEsNDczOTIsNDczOTIsMTEsNDc1MDQsNDc1MDQsMTEsNDc2MTYsNDc2MTYsMTEsNDc3MjgsNDc3MjgsMTEsNDc4NDAsNDc4NDAsMTEsNDc5NTIsNDc5NTIsMTEsNDgwNjQsNDgwNjQsMTEsNDgxNzYsNDgxNzYsMTEsNDgyODgsNDgyODgsMTEsNDg0MDAsNDg0MDAsMTEsNDg1MTIsNDg1MTIsMTEsNDg2MjQsNDg2MjQsMTEsNDg3MzYsNDg3MzYsMTEsNDg4NDgsNDg4NDgsMTEsNDg5NjAsNDg5NjAsMTEsNDkwNzIsNDkwNzIsMTEsNDkxODQsNDkxODQsMTEsNDkyOTYsNDkyOTYsMTEsNDk0MDgsNDk0MDgsMTEsNDk1MjAsNDk1MjAsMTEsNDk2MzIsNDk2MzIsMTEsNDk3NDQsNDk3NDQsMTEsNDk4NTYsNDk4NTYsMTEsNDk5NjgsNDk5NjgsMTEsNTAwODAsNTAwODAsMTEsNTAxOTIsNTAxOTIsMTEsNTAzMDQsNTAzMDQsMTEsNTA0MTYsNTA0MTYsMTEsNTA1MjgsNTA1MjgsMTEsNTA2NDAsNTA2NDAsMTEsNTA3NTIsNTA3NTIsMTEsNTA4NjQsNTA4NjQsMTEsNTA5NzYsNTA5NzYsMTEsNTEwODgsNTEwODgsMTEsNTEyMDAsNTEyMDAsMTEsNTEzMTIsNTEzMTIsMTEsNTE0MjQsNTE0MjQsMTEsNTE1MzYsNTE1MzYsMTEsNTE2NDgsNTE2NDgsMTEsNTE3NjAsNTE3NjAsMTEsNTE4NzIsNTE4NzIsMTEsNTE5ODQsNTE5ODQsMTEsNTIwOTYsNTIwOTYsMTEsNTIyMDgsNTIyMDgsMTEsNTIzMjAsNTIzMjAsMTEsNTI0MzIsNTI0MzIsMTEsNTI1NDQsNTI1NDQsMTEsNTI2NTYsNTI2NTYsMTEsNTI3NjgsNTI3NjgsMTEsNTI4ODAsNTI4ODAsMTEsNTI5OTIsNTI5OTIsMTEsNTMxMDQsNTMxMDQsMTEsNTMyMTYsNTMyMTYsMTEsNTMzMjgsNTMzMjgsMTEsNTM0NDAsNTM0NDAsMTEsNTM1NTIsNTM1NTIsMTEsNTM2NjQsNTM2NjQsMTEsNTM3NzYsNTM3NzYsMTEsNTM4ODgsNTM4ODgsMTEsNTQwMDAsNTQwMDAsMTEsNTQxMTIsNTQxMTIsMTEsNTQyMjQsNTQyMjQsMTEsNTQzMzYsNTQzMzYsMTEsNTQ0NDgsNTQ0NDgsMTEsNTQ1NjAsNTQ1NjAsMTEsNTQ2NzIsNTQ2NzIsMTEsNTQ3ODQsNTQ3ODQsMTEsNTQ4OTYsNTQ4OTYsMTEsNTUwMDgsNTUwMDgsMTEsNTUxMjAsNTUxMjAsMTEsNjQyODYsNjQyODYsNSw2NjI3Miw2NjI3Miw1LDY4OTAwLDY4OTAzLDUsNjk3NjIsNjk3NjIsNyw2OTgxNyw2OTgxOCw1LDY5OTI3LDY5OTMxLDUsNzAwMDMsNzAwMDMsNSw3MDA3MCw3MDA3OCw1LDcwMDk0LDcwMDk0LDcsNzAxOTQsNzAxOTUsNyw3MDIwNiw3MDIwNiw1LDcwNDAwLDcwNDAxLDUsNzA0NjMsNzA0NjMsNyw3MDQ3NSw3MDQ3Nyw3LDcwNTEyLDcwNTE2LDUsNzA3MjIsNzA3MjQsNSw3MDgzMiw3MDgzMiw1LDcwODQyLDcwODQyLDUsNzA4NDcsNzA4NDgsNSw3MTA4OCw3MTA4OSw3LDcxMTAyLDcxMTAyLDcsNzEyMTksNzEyMjYsNSw3MTIzMSw3MTIzMiw1LDcxMzQyLDcxMzQzLDcsNzE0NTMsNzE0NTUsNSw3MTQ2Myw3MTQ2Nyw1LDcxNzM3LDcxNzM4LDUsNzE5OTUsNzE5OTYsNSw3MjAwMCw3MjAwMCw3LDcyMTQ1LDcyMTQ3LDcsNzIxNjAsNzIxNjAsNSw3MjI0OSw3MjI0OSw3LDcyMjczLDcyMjc4LDUsNzIzMzAsNzIzNDIsNSw3Mjc1Miw3Mjc1OCw1LDcyODUwLDcyODcxLDUsNzI4ODIsNzI4ODMsNSw3MzAxOCw3MzAxOCw1LDczMDMxLDczMDMxLDUsNzMxMDksNzMxMDksNSw3MzQ2MSw3MzQ2Miw3LDk0MDMxLDk0MDMxLDUsOTQxOTIsOTQxOTMsNywxMTkxNDIsMTE5MTQyLDcsMTE5MTU1LDExOTE2Miw0LDExOTM2MiwxMTkzNjQsNSwxMjE0NzYsMTIxNDc2LDUsMTIyODg4LDEyMjkwNCw1LDEyMzE4NCwxMjMxOTAsNSwxMjY5NzYsMTI2OTc5LDE0LDEyNzE4NCwxMjcyMzEsMTQsMTI3MzQ0LDEyNzM0NSwxNCwxMjc0MDUsMTI3NDYxLDE0LDEyNzUxNCwxMjc1MTQsMTQsMTI3NTYxLDEyNzU2NywxNCwxMjc3NzgsMTI3Nzc5LDE0LDEyNzg5NiwxMjc4OTYsMTQsMTI3OTg1LDEyNzk4NiwxNCwxMjc5OTUsMTI3OTk5LDUsMTI4MzI2LDEyODMyOCwxNCwxMjgzNjAsMTI4MzY2LDE0LDEyODM3OCwxMjgzNzgsMTQsMTI4Mzk0LDEyODM5NywxNCwxMjg0MDUsMTI4NDA2LDE0LDEyODQyMiwxMjg0MjMsMTQsMTI4NDM1LDEyODQ0MywxNCwxMjg0NTMsMTI4NDY0LDE0LDEyODQ3OSwxMjg0ODAsMTQsMTI4NDg0LDEyODQ4NywxNCwxMjg0OTYsMTI4NDk4LDE0LDEyODY0MCwxMjg3MDksMTQsMTI4NzIzLDEyODcyNCwxNCwxMjg3MzYsMTI4NzQxLDE0LDEyODc0NywxMjg3NDgsMTQsMTI4NzU1LDEyODc1NSwxNCwxMjg3NjIsMTI4NzYyLDE0LDEyODk4MSwxMjg5OTEsMTQsMTI5MDk2LDEyOTEwMywxNCwxMjkyOTIsMTI5MjkyLDE0LDEyOTMxMSwxMjkzMTEsMTQsMTI5MzI5LDEyOTMzMCwxNCwxMjkzNDQsMTI5MzQ5LDE0LDEyOTM2MCwxMjkzNzQsMTQsMTI5Mzk0LDEyOTM5NCwxNCwxMjk0MDIsMTI5NDAyLDE0LDEyOTQxMywxMjk0MjUsMTQsMTI5NDQ1LDEyOTQ1MCwxNCwxMjk0NjYsMTI5NDcxLDE0LDEyOTQ4MywxMjk0ODMsMTQsMTI5NTExLDEyOTUzNSwxNCwxMjk2NTMsMTI5NjU1LDE0LDEyOTY2NywxMjk2NzAsMTQsMTI5NzA1LDEyOTcxMSwxNCwxMjk3MzEsMTI5NzQzLDE0LDkxNzUwNSw5MTc1MDUsNCw5MTc3NjAsOTE3OTk5LDUsMTAsMTAsMywxMjcsMTU5LDQsNzY4LDg3OSw1LDE0NzEsMTQ3MSw1LDE1MzYsMTU0MSwxLDE2NDgsMTY0OCw1LDE3NjcsMTc2OCw1LDE4NDAsMTg2Niw1LDIwNzAsMjA3Myw1LDIxMzcsMjEzOSw1LDIzMDcsMjMwNyw3LDIzNjYsMjM2OCw3LDIzODIsMjM4Myw3LDI0MzQsMjQzNSw3LDI0OTcsMjUwMCw1LDI1MTksMjUxOSw1LDI1NjMsMjU2Myw3LDI2MzEsMjYzMiw1LDI2NzcsMjY3Nyw1LDI3NTAsMjc1Miw3LDI3NjMsMjc2NCw3LDI4MTcsMjgxNyw1LDI4NzksMjg3OSw1LDI4OTEsMjg5Miw3LDI5MTQsMjkxNSw1LDMwMDgsMzAwOCw1LDMwMjEsMzAyMSw1LDMwNzYsMzA3Niw1LDMxNDYsMzE0OSw1LDMyMDIsMzIwMyw3LDMyNjQsMzI2NSw3LDMyNzEsMzI3Miw3LDMyOTgsMzI5OSw1LDMzOTAsMzM5MCw1LDM0MDIsMzQwNCw3LDM0MjYsMzQyNyw1LDM1MzUsMzUzNSw1LDM1NDQsMzU1MCw3LDM2MzUsMzYzNSw3LDM3NjMsMzc2Myw3LDM4OTMsMzg5Myw1LDM5NTMsMzk2Niw1LDM5ODEsMzk5MSw1LDQxNDUsNDE0NSw3LDQxNTcsNDE1OCw1LDQyMDksNDIxMiw1LDQyMzcsNDIzNyw1LDQ1MjAsNDYwNywxMCw1OTcwLDU5NzEsNSw2MDcxLDYwNzcsNSw2MDg5LDYwOTksNSw2Mjc3LDYyNzgsNSw2NDM5LDY0NDAsNSw2NDUxLDY0NTYsNyw2NjgzLDY2ODMsNSw2NzQ0LDY3NTAsNSw2NzY1LDY3NzAsNyw2ODQ2LDY4NDYsNSw2OTY0LDY5NjQsNSw2OTcyLDY5NzIsNSw3MDE5LDcwMjcsNSw3MDc0LDcwNzcsNSw3MDgzLDcwODUsNSw3MTQ2LDcxNDgsNyw3MTU0LDcxNTUsNyw3MjIyLDcyMjMsNSw3Mzk0LDc0MDAsNSw3NDE2LDc0MTcsNSw4MjA0LDgyMDQsNSw4MjMzLDgyMzMsNCw4Mjg4LDgyOTIsNCw4NDEzLDg0MTYsNSw4NDgyLDg0ODIsMTQsODk4Niw4OTg3LDE0LDkxOTMsOTIwMywxNCw5NjU0LDk2NTQsMTQsOTczMyw5NzMzLDE0LDk3NDUsOTc0NSwxNCw5NzUyLDk3NTIsMTQsOTc2MCw5NzYwLDE0LDk3NjYsOTc2NiwxNCw5Nzc0LDk3NzUsMTQsOTc5Miw5NzkyLDE0LDk4MDAsOTgxMSwxNCw5ODI1LDk4MjYsMTQsOTgzMSw5ODMxLDE0LDk4NTIsOTg1MywxNCw5ODcyLDk4NzMsMTQsOTg4MCw5ODgwLDE0LDk4ODUsOTg4NywxNCw5ODk2LDk4OTcsMTQsOTkwNiw5OTE2LDE0LDk5MjYsOTkyNywxNCw5OTM2LDk5MzYsMTQsOTk0MSw5OTYwLDE0LDk5NzQsOTk3NCwxNCw5OTgyLDk5ODUsMTQsOTk5Miw5OTk3LDE0LDEwMDAyLDEwMDAyLDE0LDEwMDE3LDEwMDE3LDE0LDEwMDU1LDEwMDU1LDE0LDEwMDcxLDEwMDcxLDE0LDEwMTQ1LDEwMTQ1LDE0LDExMDEzLDExMDE1LDE0LDExNTAzLDExNTA1LDUsMTIzMzQsMTIzMzUsNSwxMjk1MSwxMjk1MSwxNCw0MjYxMiw0MjYyMSw1LDQzMDE0LDQzMDE0LDUsNDMwNDcsNDMwNDcsNyw0MzIwNCw0MzIwNSw1LDQzMzM1LDQzMzQ1LDUsNDMzOTUsNDMzOTUsNyw0MzQ1MCw0MzQ1MSw3LDQzNTYxLDQzNTY2LDUsNDM1NzMsNDM1NzQsNSw0MzY0NCw0MzY0NCw1LDQzNzEwLDQzNzExLDUsNDM3NTgsNDM3NTksNyw0NDAwNSw0NDAwNSw1LDQ0MDEyLDQ0MDEyLDcsNDQwNjAsNDQwNjAsMTEsNDQxMTYsNDQxMTYsMTEsNDQxNzIsNDQxNzIsMTEsNDQyMjgsNDQyMjgsMTEsNDQyODQsNDQyODQsMTEsNDQzNDAsNDQzNDAsMTEsNDQzOTYsNDQzOTYsMTEsNDQ0NTIsNDQ0NTIsMTEsNDQ1MDgsNDQ1MDgsMTEsNDQ1NjQsNDQ1NjQsMTEsNDQ2MjAsNDQ2MjAsMTEsNDQ2NzYsNDQ2NzYsMTEsNDQ3MzIsNDQ3MzIsMTEsNDQ3ODgsNDQ3ODgsMTEsNDQ4NDQsNDQ4NDQsMTEsNDQ5MDAsNDQ5MDAsMTEsNDQ5NTYsNDQ5NTYsMTEsNDUwMTIsNDUwMTIsMTEsNDUwNjgsNDUwNjgsMTEsNDUxMjQsNDUxMjQsMTEsNDUxODAsNDUxODAsMTEsNDUyMzYsNDUyMzYsMTEsNDUyOTIsNDUyOTIsMTEsNDUzNDgsNDUzNDgsMTEsNDU0MDQsNDU0MDQsMTEsNDU0NjAsNDU0NjAsMTEsNDU1MTYsNDU1MTYsMTEsNDU1NzIsNDU1NzIsMTEsNDU2MjgsNDU2MjgsMTEsNDU2ODQsNDU2ODQsMTEsNDU3NDAsNDU3NDAsMTEsNDU3OTYsNDU3OTYsMTEsNDU4NTIsNDU4NTIsMTEsNDU5MDgsNDU5MDgsMTEsNDU5NjQsNDU5NjQsMTEsNDYwMjAsNDYwMjAsMTEsNDYwNzYsNDYwNzYsMTEsNDYxMzIsNDYxMzIsMTEsNDYxODgsNDYxODgsMTEsNDYyNDQsNDYyNDQsMTEsNDYzMDAsNDYzMDAsMTEsNDYzNTYsNDYzNTYsMTEsNDY0MTIsNDY0MTIsMTEsNDY0NjgsNDY0NjgsMTEsNDY1MjQsNDY1MjQsMTEsNDY1ODAsNDY1ODAsMTEsNDY2MzYsNDY2MzYsMTEsNDY2OTIsNDY2OTIsMTEsNDY3NDgsNDY3NDgsMTEsNDY4MDQsNDY4MDQsMTEsNDY4NjAsNDY4NjAsMTEsNDY5MTYsNDY5MTYsMTEsNDY5NzIsNDY5NzIsMTEsNDcwMjgsNDcwMjgsMTEsNDcwODQsNDcwODQsMTEsNDcxNDAsNDcxNDAsMTEsNDcxOTYsNDcxOTYsMTEsNDcyNTIsNDcyNTIsMTEsNDczMDgsNDczMDgsMTEsNDczNjQsNDczNjQsMTEsNDc0MjAsNDc0MjAsMTEsNDc0NzYsNDc0NzYsMTEsNDc1MzIsNDc1MzIsMTEsNDc1ODgsNDc1ODgsMTEsNDc2NDQsNDc2NDQsMTEsNDc3MDAsNDc3MDAsMTEsNDc3NTYsNDc3NTYsMTEsNDc4MTIsNDc4MTIsMTEsNDc4NjgsNDc4NjgsMTEsNDc5MjQsNDc5MjQsMTEsNDc5ODAsNDc5ODAsMTEsNDgwMzYsNDgwMzYsMTEsNDgwOTIsNDgwOTIsMTEsNDgxNDgsNDgxNDgsMTEsNDgyMDQsNDgyMDQsMTEsNDgyNjAsNDgyNjAsMTEsNDgzMTYsNDgzMTYsMTEsNDgzNzIsNDgzNzIsMTEsNDg0MjgsNDg0MjgsMTEsNDg0ODQsNDg0ODQsMTEsNDg1NDAsNDg1NDAsMTEsNDg1OTYsNDg1OTYsMTEsNDg2NTIsNDg2NTIsMTEsNDg3MDgsNDg3MDgsMTEsNDg3NjQsNDg3NjQsMTEsNDg4MjAsNDg4MjAsMTEsNDg4NzYsNDg4NzYsMTEsNDg5MzIsNDg5MzIsMTEsNDg5ODgsNDg5ODgsMTEsNDkwNDQsNDkwNDQsMTEsNDkxMDAsNDkxMDAsMTEsNDkxNTYsNDkxNTYsMTEsNDkyMTIsNDkyMTIsMTEsNDkyNjgsNDkyNjgsMTEsNDkzMjQsNDkzMjQsMTEsNDkzODAsNDkzODAsMTEsNDk0MzYsNDk0MzYsMTEsNDk0OTIsNDk0OTIsMTEsNDk1NDgsNDk1NDgsMTEsNDk2MDQsNDk2MDQsMTEsNDk2NjAsNDk2NjAsMTEsNDk3MTYsNDk3MTYsMTEsNDk3NzIsNDk3NzIsMTEsNDk4MjgsNDk4MjgsMTEsNDk4ODQsNDk4ODQsMTEsNDk5NDAsNDk5NDAsMTEsNDk5OTYsNDk5OTYsMTEsNTAwNTIsNTAwNTIsMTEsNTAxMDgsNTAxMDgsMTEsNTAxNjQsNTAxNjQsMTEsNTAyMjAsNTAyMjAsMTEsNTAyNzYsNTAyNzYsMTEsNTAzMzIsNTAzMzIsMTEsNTAzODgsNTAzODgsMTEsNTA0NDQsNTA0NDQsMTEsNTA1MDAsNTA1MDAsMTEsNTA1NTYsNTA1NTYsMTEsNTA2MTIsNTA2MTIsMTEsNTA2NjgsNTA2NjgsMTEsNTA3MjQsNTA3MjQsMTEsNTA3ODAsNTA3ODAsMTEsNTA4MzYsNTA4MzYsMTEsNTA4OTIsNTA4OTIsMTEsNTA5NDgsNTA5NDgsMTEsNTEwMDQsNTEwMDQsMTEsNTEwNjAsNTEwNjAsMTEsNTExMTYsNTExMTYsMTEsNTExNzIsNTExNzIsMTEsNTEyMjgsNTEyMjgsMTEsNTEyODQsNTEyODQsMTEsNTEzNDAsNTEzNDAsMTEsNTEzOTYsNTEzOTYsMTEsNTE0NTIsNTE0NTIsMTEsNTE1MDgsNTE1MDgsMTEsNTE1NjQsNTE1NjQsMTEsNTE2MjAsNTE2MjAsMTEsNTE2NzYsNTE2NzYsMTEsNTE3MzIsNTE3MzIsMTEsNTE3ODgsNTE3ODgsMTEsNTE4NDQsNTE4NDQsMTEsNTE5MDAsNTE5MDAsMTEsNTE5NTYsNTE5NTYsMTEsNTIwMTIsNTIwMTIsMTEsNTIwNjgsNTIwNjgsMTEsNTIxMjQsNTIxMjQsMTEsNTIxODAsNTIxODAsMTEsNTIyMzYsNTIyMzYsMTEsNTIyOTIsNTIyOTIsMTEsNTIzNDgsNTIzNDgsMTEsNTI0MDQsNTI0MDQsMTEsNTI0NjAsNTI0NjAsMTEsNTI1MTYsNTI1MTYsMTEsNTI1NzIsNTI1NzIsMTEsNTI2MjgsNTI2MjgsMTEsNTI2ODQsNTI2ODQsMTEsNTI3NDAsNTI3NDAsMTEsNTI3OTYsNTI3OTYsMTEsNTI4NTIsNTI4NTIsMTEsNTI5MDgsNTI5MDgsMTEsNTI5NjQsNTI5NjQsMTEsNTMwMjAsNTMwMjAsMTEsNTMwNzYsNTMwNzYsMTEsNTMxMzIsNTMxMzIsMTEsNTMxODgsNTMxODgsMTEsNTMyNDQsNTMyNDQsMTEsNTMzMDAsNTMzMDAsMTEsNTMzNTYsNTMzNTYsMTEsNTM0MTIsNTM0MTIsMTEsNTM0NjgsNTM0NjgsMTEsNTM1MjQsNTM1MjQsMTEsNTM1ODAsNTM1ODAsMTEsNTM2MzYsNTM2MzYsMTEsNTM2OTIsNTM2OTIsMTEsNTM3NDgsNTM3NDgsMTEsNTM4MDQsNTM4MDQsMTEsNTM4NjAsNTM4NjAsMTEsNTM5MTYsNTM5MTYsMTEsNTM5NzIsNTM5NzIsMTEsNTQwMjgsNTQwMjgsMTEsNTQwODQsNTQwODQsMTEsNTQxNDAsNTQxNDAsMTEsNTQxOTYsNTQxOTYsMTEsNTQyNTIsNTQyNTIsMTEsNTQzMDgsNTQzMDgsMTEsNTQzNjQsNTQzNjQsMTEsNTQ0MjAsNTQ0MjAsMTEsNTQ0NzYsNTQ0NzYsMTEsNTQ1MzIsNTQ1MzIsMTEsNTQ1ODgsNTQ1ODgsMTEsNTQ2NDQsNTQ2NDQsMTEsNTQ3MDAsNTQ3MDAsMTEsNTQ3NTYsNTQ3NTYsMTEsNTQ4MTIsNTQ4MTIsMTEsNTQ4NjgsNTQ4NjgsMTEsNTQ5MjQsNTQ5MjQsMTEsNTQ5ODAsNTQ5ODAsMTEsNTUwMzYsNTUwMzYsMTEsNTUwOTIsNTUwOTIsMTEsNTUxNDgsNTUxNDgsMTEsNTUyMTYsNTUyMzgsOSw2NTA1Niw2NTA3MSw1LDY1NTI5LDY1NTMxLDQsNjgwOTcsNjgwOTksNSw2ODE1OSw2ODE1OSw1LDY5NDQ2LDY5NDU2LDUsNjk2ODgsNjk3MDIsNSw2OTgwOCw2OTgxMCw3LDY5ODE1LDY5ODE2LDcsNjk4MjEsNjk4MjEsMSw2OTg4OCw2OTg5MCw1LDY5OTMyLDY5OTMyLDcsNjk5NTcsNjk5NTgsNyw3MDAxNiw3MDAxNyw1LDcwMDY3LDcwMDY5LDcsNzAwNzksNzAwODAsNyw3MDA4OSw3MDA5Miw1LDcwMDk1LDcwMDk1LDUsNzAxOTEsNzAxOTMsNSw3MDE5Niw3MDE5Niw1LDcwMTk4LDcwMTk5LDUsNzAzNjcsNzAzNjcsNSw3MDM3MSw3MDM3OCw1LDcwNDAyLDcwNDAzLDcsNzA0NjIsNzA0NjIsNSw3MDQ2NCw3MDQ2NCw1LDcwNDcxLDcwNDcyLDcsNzA0ODcsNzA0ODcsNSw3MDUwMiw3MDUwOCw1LDcwNzA5LDcwNzExLDcsNzA3MjAsNzA3MjEsNyw3MDcyNSw3MDcyNSw3LDcwNzUwLDcwNzUwLDUsNzA4MzMsNzA4MzQsNyw3MDg0MSw3MDg0MSw3LDcwODQzLDcwODQ0LDcsNzA4NDYsNzA4NDYsNyw3MDg0OSw3MDg0OSw3LDcxMDg3LDcxMDg3LDUsNzEwOTAsNzEwOTMsNSw3MTEwMCw3MTEwMSw1LDcxMTAzLDcxMTA0LDUsNzEyMTYsNzEyMTgsNyw3MTIyNyw3MTIyOCw3LDcxMjMwLDcxMjMwLDcsNzEzMzksNzEzMzksNSw3MTM0MSw3MTM0MSw1LDcxMzQ0LDcxMzQ5LDUsNzEzNTEsNzEzNTEsNSw3MTQ1Niw3MTQ1Nyw3LDcxNDYyLDcxNDYyLDcsNzE3MjQsNzE3MjYsNyw3MTczNiw3MTczNiw3LDcxOTg0LDcxOTg0LDUsNzE5OTEsNzE5OTIsNyw3MTk5Nyw3MTk5Nyw3LDcxOTk5LDcxOTk5LDEsNzIwMDEsNzIwMDEsMSw3MjAwMyw3MjAwMyw1LDcyMTQ4LDcyMTUxLDUsNzIxNTYsNzIxNTksNyw3MjE2NCw3MjE2NCw3LDcyMjQzLDcyMjQ4LDUsNzIyNTAsNzIyNTAsMSw3MjI2Myw3MjI2Myw1LDcyMjc5LDcyMjgwLDcsNzIzMjQsNzIzMjksMSw3MjM0Myw3MjM0Myw3LDcyNzUxLDcyNzUxLDcsNzI3NjAsNzI3NjUsNSw3Mjc2Nyw3Mjc2Nyw1LDcyODczLDcyODczLDcsNzI4ODEsNzI4ODEsNyw3Mjg4NCw3Mjg4NCw3LDczMDA5LDczMDE0LDUsNzMwMjAsNzMwMjEsNSw3MzAzMCw3MzAzMCwxLDczMDk4LDczMTAyLDcsNzMxMDcsNzMxMDgsNyw3MzExMCw3MzExMCw3LDczNDU5LDczNDYwLDUsNzg4OTYsNzg5MDQsNCw5Mjk3Niw5Mjk4Miw1LDk0MDMzLDk0MDg3LDcsOTQxODAsOTQxODAsNSwxMTM4MjEsMTEzODIyLDUsMTE5MTQxLDExOTE0MSw1LDExOTE0MywxMTkxNDUsNSwxMTkxNTAsMTE5MTU0LDUsMTE5MTYzLDExOTE3MCw1LDExOTIxMCwxMTkyMTMsNSwxMjEzNDQsMTIxMzk4LDUsMTIxNDYxLDEyMTQ2MSw1LDEyMTQ5OSwxMjE1MDMsNSwxMjI4ODAsMTIyODg2LDUsMTIyOTA3LDEyMjkxMyw1LDEyMjkxOCwxMjI5MjIsNSwxMjM2MjgsMTIzNjMxLDUsMTI1MjUyLDEyNTI1OCw1LDEyNjk4MCwxMjY5ODAsMTQsMTI3MTgzLDEyNzE4MywxNCwxMjcyNDUsMTI3MjQ3LDE0LDEyNzM0MCwxMjczNDMsMTQsMTI3MzU4LDEyNzM1OSwxNCwxMjczNzcsMTI3Mzg2LDE0LDEyNzQ2MiwxMjc0ODcsNiwxMjc0OTEsMTI3NTAzLDE0LDEyNzUzNSwxMjc1MzUsMTQsMTI3NTQ4LDEyNzU1MSwxNCwxMjc1NjgsMTI3NTY5LDE0LDEyNzc0NCwxMjc3NzcsMTQsMTI3NzgwLDEyNzg5MSwxNCwxMjc4OTQsMTI3ODk1LDE0LDEyNzg5NywxMjc4OTksMTQsMTI3OTAyLDEyNzk4NCwxNCwxMjc5ODcsMTI3OTg5LDE0LDEyNzk5MSwxMjc5OTQsMTQsMTI4MDAwLDEyODI1MywxNCwxMjgyNTUsMTI4MzE3LDE0LDEyODMyOSwxMjgzMzQsMTQsMTI4MzM2LDEyODM1OSwxNCwxMjgzNjcsMTI4MzY4LDE0LDEyODM3MSwxMjgzNzcsMTQsMTI4Mzc5LDEyODM5MCwxNCwxMjgzOTIsMTI4MzkzLDE0LDEyODM5OCwxMjgzOTksMTQsMTI4NDAxLDEyODQwNCwxNCwxMjg0MDcsMTI4NDE5LDE0LDEyODQyMSwxMjg0MjEsMTQsMTI4NDI0LDEyODQyNCwxNCwxMjg0MzMsMTI4NDM0LDE0LDEyODQ0NCwxMjg0NDQsMTQsMTI4NDUwLDEyODQ1MiwxNCwxMjg0NjUsMTI4NDY3LDE0LDEyODQ3NiwxMjg0NzgsMTQsMTI4NDgxLDEyODQ4MSwxNCwxMjg0ODMsMTI4NDgzLDE0LDEyODQ4OCwxMjg0ODgsMTQsMTI4NDk1LDEyODQ5NSwxNCwxMjg0OTksMTI4NDk5LDE0LDEyODUwNiwxMjg1OTEsMTQsMTI4NzEwLDEyODcxNCwxNCwxMjg3MjEsMTI4NzIyLDE0LDEyODcyNSwxMjg3MjUsMTQsMTI4NzI4LDEyODczNSwxNCwxMjg3NDIsMTI4NzQ0LDE0LDEyODc0NiwxMjg3NDYsMTQsMTI4NzQ5LDEyODc1MSwxNCwxMjg3NTMsMTI4NzU0LDE0LDEyODc1NiwxMjg3NTgsMTQsMTI4NzYxLDEyODc2MSwxNCwxMjg3NjMsMTI4NzY0LDE0LDEyODg4NCwxMjg4OTUsMTQsMTI4OTkyLDEyOTAwMywxNCwxMjkwMzYsMTI5MDM5LDE0LDEyOTExNCwxMjkxMTksMTQsMTI5MTk4LDEyOTI3OSwxNCwxMjkyOTMsMTI5Mjk1LDE0LDEyOTMwNSwxMjkzMTAsMTQsMTI5MzEyLDEyOTMxOSwxNCwxMjkzMjgsMTI5MzI4LDE0LDEyOTMzMSwxMjkzMzgsMTQsMTI5MzQzLDEyOTM0MywxNCwxMjkzNTEsMTI5MzU1LDE0LDEyOTM1NywxMjkzNTksMTQsMTI5Mzc1LDEyOTM4NywxNCwxMjkzOTMsMTI5MzkzLDE0LDEyOTM5NSwxMjkzOTgsMTQsMTI5NDAxLDEyOTQwMSwxNCwxMjk0MDMsMTI5NDAzLDE0LDEyOTQwOCwxMjk0MTIsMTQsMTI5NDI2LDEyOTQzMSwxNCwxMjk0NDMsMTI5NDQ0LDE0LDEyOTQ1MSwxMjk0NTMsMTQsMTI5NDU2LDEyOTQ2NSwxNCwxMjk0NzIsMTI5NDcyLDE0LDEyOTQ3NSwxMjk0ODIsMTQsMTI5NDg0LDEyOTQ4NCwxNCwxMjk0ODgsMTI5NTEwLDE0LDEyOTUzNiwxMjk2NDcsMTQsMTI5NjUyLDEyOTY1MiwxNCwxMjk2NTYsMTI5NjU4LDE0LDEyOTY2NCwxMjk2NjYsMTQsMTI5NjcxLDEyOTY3OSwxNCwxMjk2ODYsMTI5NzA0LDE0LDEyOTcxMiwxMjk3MTgsMTQsMTI5NzI4LDEyOTczMCwxNCwxMjk3NDQsMTI5NzUwLDE0LDkxNzUwNCw5MTc1MDQsNCw5MTc1MDYsOTE3NTM1LDQsOTE3NjMyLDkxNzc1OSw0LDkxODAwMCw5MjE1OTksNCwwLDksNCwxMSwxMiw0LDE0LDMxLDQsMTY5LDE2OSwxNCwxNzQsMTc0LDE0LDExNTUsMTE1OSw1LDE0MjUsMTQ2OSw1LDE0NzMsMTQ3NCw1LDE0NzksMTQ3OSw1LDE1NTIsMTU2Miw1LDE2MTEsMTYzMSw1LDE3NTAsMTc1Niw1LDE3NTksMTc2NCw1LDE3NzAsMTc3Myw1LDE4MDksMTgwOSw1LDE5NTgsMTk2OCw1LDIwNDUsMjA0NSw1LDIwNzUsMjA4Myw1LDIwODksMjA5Myw1LDIyNTksMjI3Myw1LDIyNzUsMjMwNiw1LDIzNjIsMjM2Miw1LDIzNjQsMjM2NCw1LDIzNjksMjM3Niw1LDIzODEsMjM4MSw1LDIzODUsMjM5MSw1LDI0MzMsMjQzMyw1LDI0OTIsMjQ5Miw1LDI0OTUsMjQ5Niw3LDI1MDMsMjUwNCw3LDI1MDksMjUwOSw1LDI1MzAsMjUzMSw1LDI1NjEsMjU2Miw1LDI2MjAsMjYyMCw1LDI2MjUsMjYyNiw1LDI2MzUsMjYzNyw1LDI2NzIsMjY3Myw1LDI2ODksMjY5MCw1LDI3NDgsMjc0OCw1LDI3NTMsMjc1Nyw1LDI3NjEsMjc2MSw3LDI3NjUsMjc2NSw1LDI4MTAsMjgxNSw1LDI4MTgsMjgxOSw3LDI4NzgsMjg3OCw1LDI4ODAsMjg4MCw3LDI4ODcsMjg4OCw3LDI4OTMsMjg5Myw1LDI5MDMsMjkwMyw1LDI5NDYsMjk0Niw1LDMwMDcsMzAwNyw3LDMwMDksMzAxMCw3LDMwMTgsMzAyMCw3LDMwMzEsMzAzMSw1LDMwNzMsMzA3NSw3LDMxMzQsMzEzNiw1LDMxNDIsMzE0NCw1LDMxNTcsMzE1OCw1LDMyMDEsMzIwMSw1LDMyNjAsMzI2MCw1LDMyNjMsMzI2Myw1LDMyNjYsMzI2Niw1LDMyNzAsMzI3MCw1LDMyNzQsMzI3NSw3LDMyODUsMzI4Niw1LDMzMjgsMzMyOSw1LDMzODcsMzM4OCw1LDMzOTEsMzM5Miw3LDMzOTgsMzQwMCw3LDM0MDUsMzQwNSw1LDM0MTUsMzQxNSw1LDM0NTcsMzQ1Nyw1LDM1MzAsMzUzMCw1LDM1MzYsMzUzNyw3LDM1NDIsMzU0Miw1LDM1NTEsMzU1MSw1LDM2MzMsMzYzMyw1LDM2MzYsMzY0Miw1LDM3NjEsMzc2MSw1LDM3NjQsMzc3Miw1LDM4NjQsMzg2NSw1LDM4OTUsMzg5NSw1LDM5MDIsMzkwMyw3LDM5NjcsMzk2Nyw3LDM5NzQsMzk3NSw1LDM5OTMsNDAyOCw1LDQxNDEsNDE0NCw1LDQxNDYsNDE1MSw1LDQxNTUsNDE1Niw3LDQxODIsNDE4Myw3LDQxOTAsNDE5Miw1LDQyMjYsNDIyNiw1LDQyMjksNDIzMCw1LDQyNTMsNDI1Myw1LDQ0NDgsNDUxOSw5LDQ5NTcsNDk1OSw1LDU5MzgsNTk0MCw1LDYwMDIsNjAwMyw1LDYwNzAsNjA3MCw3LDYwNzgsNjA4NSw3LDYwODcsNjA4OCw3LDYxMDksNjEwOSw1LDYxNTgsNjE1OCw0LDYzMTMsNjMxMyw1LDY0MzUsNjQzOCw3LDY0NDEsNjQ0Myw3LDY0NTAsNjQ1MCw1LDY0NTcsNjQ1OSw1LDY2ODEsNjY4Miw3LDY3NDEsNjc0MSw3LDY3NDMsNjc0Myw3LDY3NTIsNjc1Miw1LDY3NTcsNjc2NCw1LDY3NzEsNjc4MCw1LDY4MzIsNjg0NSw1LDY4NDcsNjg0OCw1LDY5MTYsNjkxNiw3LDY5NjUsNjk2NSw1LDY5NzEsNjk3MSw3LDY5NzMsNjk3Nyw3LDY5NzksNjk4MCw3LDcwNDAsNzA0MSw1LDcwNzMsNzA3Myw3LDcwNzgsNzA3OSw3LDcwODIsNzA4Miw3LDcxNDIsNzE0Miw1LDcxNDQsNzE0NSw1LDcxNDksNzE0OSw1LDcxNTEsNzE1Myw1LDcyMDQsNzIxMSw3LDcyMjAsNzIyMSw3LDczNzYsNzM3OCw1LDczOTMsNzM5Myw3LDc0MDUsNzQwNSw1LDc0MTUsNzQxNSw3LDc2MTYsNzY3Myw1LDgyMDMsODIwMyw0LDgyMDUsODIwNSwxMyw4MjMyLDgyMzIsNCw4MjM0LDgyMzgsNCw4MjY1LDgyNjUsMTQsODI5Myw4MjkzLDQsODQwMCw4NDEyLDUsODQxNyw4NDE3LDUsODQyMSw4NDMyLDUsODUwNSw4NTA1LDE0LDg2MTcsODYxOCwxNCw5MDAwLDkwMDAsMTQsOTE2Nyw5MTY3LDE0LDkyMDgsOTIxMCwxNCw5NjQyLDk2NDMsMTQsOTY2NCw5NjY0LDE0LDk3MjgsOTczMiwxNCw5NzM1LDk3NDEsMTQsOTc0Myw5NzQ0LDE0LDk3NDYsOTc0NiwxNCw5NzUwLDk3NTEsMTQsOTc1Myw5NzU2LDE0LDk3NTgsOTc1OSwxNCw5NzYxLDk3NjEsMTQsOTc2NCw5NzY1LDE0LDk3NjcsOTc2OSwxNCw5NzcxLDk3NzMsMTQsOTc3Niw5NzgzLDE0LDk3ODcsOTc5MSwxNCw5NzkzLDk3OTMsMTQsOTc5NSw5Nzk5LDE0LDk4MTIsOTgyMiwxNCw5ODI0LDk4MjQsMTQsOTgyNyw5ODI3LDE0LDk4MjksOTgzMCwxNCw5ODMyLDk4MzIsMTQsOTg1MSw5ODUxLDE0LDk4NTQsOTg1NCwxNCw5ODU2LDk4NjEsMTQsOTg3NCw5ODc2LDE0LDk4NzgsOTg3OSwxNCw5ODgxLDk4ODEsMTQsOTg4Myw5ODg0LDE0LDk4ODgsOTg4OSwxNCw5ODk1LDk4OTUsMTQsOTg5OCw5ODk5LDE0LDk5MDQsOTkwNSwxNCw5OTE3LDk5MTgsMTQsOTkyNCw5OTI1LDE0LDk5MjgsOTkyOCwxNCw5OTM0LDk5MzUsMTQsOTkzNyw5OTM3LDE0LDk5MzksOTk0MCwxNCw5OTYxLDk5NjIsMTQsOTk2OCw5OTczLDE0LDk5NzUsOTk3OCwxNCw5OTgxLDk5ODEsMTQsOTk4Niw5OTg2LDE0LDk5ODksOTk4OSwxNCw5OTk4LDk5OTgsMTQsMTAwMDAsMTAwMDEsMTQsMTAwMDQsMTAwMDQsMTQsMTAwMTMsMTAwMTMsMTQsMTAwMjQsMTAwMjQsMTQsMTAwNTIsMTAwNTIsMTQsMTAwNjAsMTAwNjAsMTQsMTAwNjcsMTAwNjksMTQsMTAwODMsMTAwODQsMTQsMTAxMzMsMTAxMzUsMTQsMTAxNjAsMTAxNjAsMTQsMTA1NDgsMTA1NDksMTQsMTEwMzUsMTEwMzYsMTQsMTEwOTMsMTEwOTMsMTQsMTE2NDcsMTE2NDcsNSwxMjMzMCwxMjMzMyw1LDEyMzM2LDEyMzM2LDE0LDEyNDQxLDEyNDQyLDUsMTI5NTMsMTI5NTMsMTQsNDI2MDgsNDI2MTAsNSw0MjY1NCw0MjY1NSw1LDQzMDEwLDQzMDEwLDUsNDMwMTksNDMwMTksNSw0MzA0NSw0MzA0Niw1LDQzMDUyLDQzMDUyLDUsNDMxODgsNDMyMDMsNyw0MzIzMiw0MzI0OSw1LDQzMzAyLDQzMzA5LDUsNDMzNDYsNDMzNDcsNyw0MzM5Miw0MzM5NCw1LDQzNDQzLDQzNDQzLDUsNDM0NDYsNDM0NDksNSw0MzQ1Miw0MzQ1Myw1LDQzNDkzLDQzNDkzLDUsNDM1NjcsNDM1NjgsNyw0MzU3MSw0MzU3Miw3LDQzNTg3LDQzNTg3LDUsNDM1OTcsNDM1OTcsNyw0MzY5Niw0MzY5Niw1LDQzNzAzLDQzNzA0LDUsNDM3MTMsNDM3MTMsNSw0Mzc1Niw0Mzc1Nyw1LDQzNzY1LDQzNzY1LDcsNDQwMDMsNDQwMDQsNyw0NDAwNiw0NDAwNyw3LDQ0MDA5LDQ0MDEwLDcsNDQwMTMsNDQwMTMsNSw0NDAzMyw0NDA1OSwxMiw0NDA2MSw0NDA4NywxMiw0NDA4OSw0NDExNSwxMiw0NDExNyw0NDE0MywxMiw0NDE0NSw0NDE3MSwxMiw0NDE3Myw0NDE5OSwxMiw0NDIwMSw0NDIyNywxMiw0NDIyOSw0NDI1NSwxMiw0NDI1Nyw0NDI4MywxMiw0NDI4NSw0NDMxMSwxMiw0NDMxMyw0NDMzOSwxMiw0NDM0MSw0NDM2NywxMiw0NDM2OSw0NDM5NSwxMiw0NDM5Nyw0NDQyMywxMiw0NDQyNSw0NDQ1MSwxMiw0NDQ1Myw0NDQ3OSwxMiw0NDQ4MSw0NDUwNywxMiw0NDUwOSw0NDUzNSwxMiw0NDUzNyw0NDU2MywxMiw0NDU2NSw0NDU5MSwxMiw0NDU5Myw0NDYxOSwxMiw0NDYyMSw0NDY0NywxMiw0NDY0OSw0NDY3NSwxMiw0NDY3Nyw0NDcwMywxMiw0NDcwNSw0NDczMSwxMiw0NDczMyw0NDc1OSwxMiw0NDc2MSw0NDc4NywxMiw0NDc4OSw0NDgxNSwxMiw0NDgxNyw0NDg0MywxMiw0NDg0NSw0NDg3MSwxMiw0NDg3Myw0NDg5OSwxMiw0NDkwMSw0NDkyNywxMiw0NDkyOSw0NDk1NSwxMiw0NDk1Nyw0NDk4MywxMiw0NDk4NSw0NTAxMSwxMiw0NTAxMyw0NTAzOSwxMiw0NTA0MSw0NTA2NywxMiw0NTA2OSw0NTA5NSwxMiw0NTA5Nyw0NTEyMywxMiw0NTEyNSw0NTE1MSwxMiw0NTE1Myw0NTE3OSwxMiw0NTE4MSw0NTIwNywxMiw0NTIwOSw0NTIzNSwxMiw0NTIzNyw0NTI2MywxMiw0NTI2NSw0NTI5MSwxMiw0NTI5Myw0NTMxOSwxMiw0NTMyMSw0NTM0NywxMiw0NTM0OSw0NTM3NSwxMiw0NTM3Nyw0NTQwMywxMiw0NTQwNSw0NTQzMSwxMiw0NTQzMyw0NTQ1OSwxMiw0NTQ2MSw0NTQ4NywxMiw0NTQ4OSw0NTUxNSwxMiw0NTUxNyw0NTU0MywxMiw0NTU0NSw0NTU3MSwxMiw0NTU3Myw0NTU5OSwxMiw0NTYwMSw0NTYyNywxMiw0NTYyOSw0NTY1NSwxMiw0NTY1Nyw0NTY4MywxMiw0NTY4NSw0NTcxMSwxMiw0NTcxMyw0NTczOSwxMiw0NTc0MSw0NTc2NywxMiw0NTc2OSw0NTc5NSwxMiw0NTc5Nyw0NTgyMywxMiw0NTgyNSw0NTg1MSwxMiw0NTg1Myw0NTg3OSwxMiw0NTg4MSw0NTkwNywxMiw0NTkwOSw0NTkzNSwxMiw0NTkzNyw0NTk2MywxMiw0NTk2NSw0NTk5MSwxMiw0NTk5Myw0NjAxOSwxMiw0NjAyMSw0NjA0NywxMiw0NjA0OSw0NjA3NSwxMiw0NjA3Nyw0NjEwMywxMiw0NjEwNSw0NjEzMSwxMiw0NjEzMyw0NjE1OSwxMiw0NjE2MSw0NjE4NywxMiw0NjE4OSw0NjIxNSwxMiw0NjIxNyw0NjI0MywxMiw0NjI0NSw0NjI3MSwxMiw0NjI3Myw0NjI5OSwxMiw0NjMwMSw0NjMyNywxMiw0NjMyOSw0NjM1NSwxMiw0NjM1Nyw0NjM4MywxMiw0NjM4NSw0NjQxMSwxMiw0NjQxMyw0NjQzOSwxMiw0NjQ0MSw0NjQ2NywxMiw0NjQ2OSw0NjQ5NSwxMiw0NjQ5Nyw0NjUyMywxMiw0NjUyNSw0NjU1MSwxMiw0NjU1Myw0NjU3OSwxMiw0NjU4MSw0NjYwNywxMiw0NjYwOSw0NjYzNSwxMiw0NjYzNyw0NjY2MywxMiw0NjY2NSw0NjY5MSwxMiw0NjY5Myw0NjcxOSwxMiw0NjcyMSw0Njc0NywxMiw0Njc0OSw0Njc3NSwxMiw0Njc3Nyw0NjgwMywxMiw0NjgwNSw0NjgzMSwxMiw0NjgzMyw0Njg1OSwxMiw0Njg2MSw0Njg4NywxMiw0Njg4OSw0NjkxNSwxMiw0NjkxNyw0Njk0MywxMiw0Njk0NSw0Njk3MSwxMiw0Njk3Myw0Njk5OSwxMiw0NzAwMSw0NzAyNywxMiw0NzAyOSw0NzA1NSwxMiw0NzA1Nyw0NzA4MywxMiw0NzA4NSw0NzExMSwxMiw0NzExMyw0NzEzOSwxMiw0NzE0MSw0NzE2NywxMiw0NzE2OSw0NzE5NSwxMiw0NzE5Nyw0NzIyMywxMiw0NzIyNSw0NzI1MSwxMiw0NzI1Myw0NzI3OSwxMiw0NzI4MSw0NzMwNywxMiw0NzMwOSw0NzMzNSwxMiw0NzMzNyw0NzM2MywxMiw0NzM2NSw0NzM5MSwxMiw0NzM5Myw0NzQxOSwxMiw0NzQyMSw0NzQ0NywxMiw0NzQ0OSw0NzQ3NSwxMiw0NzQ3Nyw0NzUwMywxMiw0NzUwNSw0NzUzMSwxMiw0NzUzMyw0NzU1OSwxMiw0NzU2MSw0NzU4NywxMiw0NzU4OSw0NzYxNSwxMiw0NzYxNyw0NzY0MywxMiw0NzY0NSw0NzY3MSwxMiw0NzY3Myw0NzY5OSwxMiw0NzcwMSw0NzcyNywxMiw0NzcyOSw0Nzc1NSwxMiw0Nzc1Nyw0Nzc4MywxMiw0Nzc4NSw0NzgxMSwxMiw0NzgxMyw0NzgzOSwxMiw0Nzg0MSw0Nzg2NywxMiw0Nzg2OSw0Nzg5NSwxMiw0Nzg5Nyw0NzkyMywxMiw0NzkyNSw0Nzk1MSwxMiw0Nzk1Myw0Nzk3OSwxMiw0Nzk4MSw0ODAwNywxMiw0ODAwOSw0ODAzNSwxMiw0ODAzNyw0ODA2MywxMiw0ODA2NSw0ODA5MSwxMiw0ODA5Myw0ODExOSwxMiw0ODEyMSw0ODE0NywxMiw0ODE0OSw0ODE3NSwxMiw0ODE3Nyw0ODIwMywxMiw0ODIwNSw0ODIzMSwxMiw0ODIzMyw0ODI1OSwxMiw0ODI2MSw0ODI4NywxMiw0ODI4OSw0ODMxNSwxMiw0ODMxNyw0ODM0MywxMiw0ODM0NSw0ODM3MSwxMiw0ODM3Myw0ODM5OSwxMiw0ODQwMSw0ODQyNywxMiw0ODQyOSw0ODQ1NSwxMiw0ODQ1Nyw0ODQ4MywxMiw0ODQ4NSw0ODUxMSwxMiw0ODUxMyw0ODUzOSwxMiw0ODU0MSw0ODU2NywxMiw0ODU2OSw0ODU5NSwxMiw0ODU5Nyw0ODYyMywxMiw0ODYyNSw0ODY1MSwxMiw0ODY1Myw0ODY3OSwxMiw0ODY4MSw0ODcwNywxMiw0ODcwOSw0ODczNSwxMiw0ODczNyw0ODc2MywxMiw0ODc2NSw0ODc5MSwxMiw0ODc5Myw0ODgxOSwxMiw0ODgyMSw0ODg0NywxMiw0ODg0OSw0ODg3NSwxMiw0ODg3Nyw0ODkwMywxMiw0ODkwNSw0ODkzMSwxMiw0ODkzMyw0ODk1OSwxMiw0ODk2MSw0ODk4NywxMiw0ODk4OSw0OTAxNSwxMiw0OTAxNyw0OTA0MywxMiw0OTA0NSw0OTA3MSwxMiw0OTA3Myw0OTA5OSwxMiw0OTEwMSw0OTEyNywxMiw0OTEyOSw0OTE1NSwxMiw0OTE1Nyw0OTE4MywxMiw0OTE4NSw0OTIxMSwxMiw0OTIxMyw0OTIzOSwxMiw0OTI0MSw0OTI2NywxMiw0OTI2OSw0OTI5NSwxMiw0OTI5Nyw0OTMyMywxMiw0OTMyNSw0OTM1MSwxMiw0OTM1Myw0OTM3OSwxMiw0OTM4MSw0OTQwNywxMiw0OTQwOSw0OTQzNSwxMiw0OTQzNyw0OTQ2MywxMiw0OTQ2NSw0OTQ5MSwxMiw0OTQ5Myw0OTUxOSwxMiw0OTUyMSw0OTU0NywxMiw0OTU0OSw0OTU3NSwxMiw0OTU3Nyw0OTYwMywxMiw0OTYwNSw0OTYzMSwxMiw0OTYzMyw0OTY1OSwxMiw0OTY2MSw0OTY4NywxMiw0OTY4OSw0OTcxNSwxMiw0OTcxNyw0OTc0MywxMiw0OTc0NSw0OTc3MSwxMiw0OTc3Myw0OTc5OSwxMiw0OTgwMSw0OTgyNywxMiw0OTgyOSw0OTg1NSwxMiw0OTg1Nyw0OTg4MywxMiw0OTg4NSw0OTkxMSwxMiw0OTkxMyw0OTkzOSwxMiw0OTk0MSw0OTk2NywxMiw0OTk2OSw0OTk5NSwxMiw0OTk5Nyw1MDAyMywxMiw1MDAyNSw1MDA1MSwxMiw1MDA1Myw1MDA3OSwxMiw1MDA4MSw1MDEwNywxMiw1MDEwOSw1MDEzNSwxMiw1MDEzNyw1MDE2MywxMiw1MDE2NSw1MDE5MSwxMiw1MDE5Myw1MDIxOSwxMiw1MDIyMSw1MDI0NywxMiw1MDI0OSw1MDI3NSwxMiw1MDI3Nyw1MDMwMywxMiw1MDMwNSw1MDMzMSwxMiw1MDMzMyw1MDM1OSwxMiw1MDM2MSw1MDM4NywxMiw1MDM4OSw1MDQxNSwxMiw1MDQxNyw1MDQ0MywxMiw1MDQ0NSw1MDQ3MSwxMiw1MDQ3Myw1MDQ5OSwxMiw1MDUwMSw1MDUyNywxMiw1MDUyOSw1MDU1NSwxMiw1MDU1Nyw1MDU4MywxMiw1MDU4NSw1MDYxMSwxMiw1MDYxMyw1MDYzOSwxMiw1MDY0MSw1MDY2NywxMiw1MDY2OSw1MDY5NSwxMiw1MDY5Nyw1MDcyMywxMiw1MDcyNSw1MDc1MSwxMiw1MDc1Myw1MDc3OSwxMiw1MDc4MSw1MDgwNywxMiw1MDgwOSw1MDgzNSwxMiw1MDgzNyw1MDg2MywxMiw1MDg2NSw1MDg5MSwxMiw1MDg5Myw1MDkxOSwxMiw1MDkyMSw1MDk0NywxMiw1MDk0OSw1MDk3NSwxMiw1MDk3Nyw1MTAwMywxMiw1MTAwNSw1MTAzMSwxMiw1MTAzMyw1MTA1OSwxMiw1MTA2MSw1MTA4NywxMiw1MTA4OSw1MTExNSwxMiw1MTExNyw1MTE0MywxMiw1MTE0NSw1MTE3MSwxMiw1MTE3Myw1MTE5OSwxMiw1MTIwMSw1MTIyNywxMiw1MTIyOSw1MTI1NSwxMiw1MTI1Nyw1MTI4MywxMiw1MTI4NSw1MTMxMSwxMiw1MTMxMyw1MTMzOSwxMiw1MTM0MSw1MTM2NywxMiw1MTM2OSw1MTM5NSwxMiw1MTM5Nyw1MTQyMywxMiw1MTQyNSw1MTQ1MSwxMiw1MTQ1Myw1MTQ3OSwxMiw1MTQ4MSw1MTUwNywxMiw1MTUwOSw1MTUzNSwxMiw1MTUzNyw1MTU2MywxMiw1MTU2NSw1MTU5MSwxMiw1MTU5Myw1MTYxOSwxMiw1MTYyMSw1MTY0NywxMiw1MTY0OSw1MTY3NSwxMiw1MTY3Nyw1MTcwMywxMiw1MTcwNSw1MTczMSwxMiw1MTczMyw1MTc1OSwxMiw1MTc2MSw1MTc4NywxMiw1MTc4OSw1MTgxNSwxMiw1MTgxNyw1MTg0MywxMiw1MTg0NSw1MTg3MSwxMiw1MTg3Myw1MTg5OSwxMiw1MTkwMSw1MTkyNywxMiw1MTkyOSw1MTk1NSwxMiw1MTk1Nyw1MTk4MywxMiw1MTk4NSw1MjAxMSwxMiw1MjAxMyw1MjAzOSwxMiw1MjA0MSw1MjA2NywxMiw1MjA2OSw1MjA5NSwxMiw1MjA5Nyw1MjEyMywxMiw1MjEyNSw1MjE1MSwxMiw1MjE1Myw1MjE3OSwxMiw1MjE4MSw1MjIwNywxMiw1MjIwOSw1MjIzNSwxMiw1MjIzNyw1MjI2MywxMiw1MjI2NSw1MjI5MSwxMiw1MjI5Myw1MjMxOSwxMiw1MjMyMSw1MjM0NywxMiw1MjM0OSw1MjM3NSwxMiw1MjM3Nyw1MjQwMywxMiw1MjQwNSw1MjQzMSwxMiw1MjQzMyw1MjQ1OSwxMiw1MjQ2MSw1MjQ4NywxMiw1MjQ4OSw1MjUxNSwxMiw1MjUxNyw1MjU0MywxMiw1MjU0NSw1MjU3MSwxMiw1MjU3Myw1MjU5OSwxMiw1MjYwMSw1MjYyNywxMiw1MjYyOSw1MjY1NSwxMiw1MjY1Nyw1MjY4MywxMiw1MjY4NSw1MjcxMSwxMiw1MjcxMyw1MjczOSwxMiw1Mjc0MSw1Mjc2NywxMiw1Mjc2OSw1Mjc5NSwxMiw1Mjc5Nyw1MjgyMywxMiw1MjgyNSw1Mjg1MSwxMiw1Mjg1Myw1Mjg3OSwxMiw1Mjg4MSw1MjkwNywxMiw1MjkwOSw1MjkzNSwxMiw1MjkzNyw1Mjk2MywxMiw1Mjk2NSw1Mjk5MSwxMiw1Mjk5Myw1MzAxOSwxMiw1MzAyMSw1MzA0NywxMiw1MzA0OSw1MzA3NSwxMiw1MzA3Nyw1MzEwMywxMiw1MzEwNSw1MzEzMSwxMiw1MzEzMyw1MzE1OSwxMiw1MzE2MSw1MzE4NywxMiw1MzE4OSw1MzIxNSwxMiw1MzIxNyw1MzI0MywxMiw1MzI0NSw1MzI3MSwxMiw1MzI3Myw1MzI5OSwxMiw1MzMwMSw1MzMyNywxMiw1MzMyOSw1MzM1NSwxMiw1MzM1Nyw1MzM4MywxMiw1MzM4NSw1MzQxMSwxMiw1MzQxMyw1MzQzOSwxMiw1MzQ0MSw1MzQ2NywxMiw1MzQ2OSw1MzQ5NSwxMiw1MzQ5Nyw1MzUyMywxMiw1MzUyNSw1MzU1MSwxMiw1MzU1Myw1MzU3OSwxMiw1MzU4MSw1MzYwNywxMiw1MzYwOSw1MzYzNSwxMiw1MzYzNyw1MzY2MywxMiw1MzY2NSw1MzY5MSwxMiw1MzY5Myw1MzcxOSwxMiw1MzcyMSw1Mzc0NywxMiw1Mzc0OSw1Mzc3NSwxMiw1Mzc3Nyw1MzgwMywxMiw1MzgwNSw1MzgzMSwxMiw1MzgzMyw1Mzg1OSwxMiw1Mzg2MSw1Mzg4NywxMiw1Mzg4OSw1MzkxNSwxMiw1MzkxNyw1Mzk0MywxMiw1Mzk0NSw1Mzk3MSwxMiw1Mzk3Myw1Mzk5OSwxMiw1NDAwMSw1NDAyNywxMiw1NDAyOSw1NDA1NSwxMiw1NDA1Nyw1NDA4MywxMiw1NDA4NSw1NDExMSwxMiw1NDExMyw1NDEzOSwxMiw1NDE0MSw1NDE2NywxMiw1NDE2OSw1NDE5NSwxMiw1NDE5Nyw1NDIyMywxMiw1NDIyNSw1NDI1MSwxMiw1NDI1Myw1NDI3OSwxMiw1NDI4MSw1NDMwNywxMiw1NDMwOSw1NDMzNSwxMiw1NDMzNyw1NDM2MywxMiw1NDM2NSw1NDM5MSwxMiw1NDM5Myw1NDQxOSwxMiw1NDQyMSw1NDQ0NywxMiw1NDQ0OSw1NDQ3NSwxMiw1NDQ3Nyw1NDUwMywxMiw1NDUwNSw1NDUzMSwxMiw1NDUzMyw1NDU1OSwxMiw1NDU2MSw1NDU4NywxMiw1NDU4OSw1NDYxNSwxMiw1NDYxNyw1NDY0MywxMiw1NDY0NSw1NDY3MSwxMiw1NDY3Myw1NDY5OSwxMiw1NDcwMSw1NDcyNywxMiw1NDcyOSw1NDc1NSwxMiw1NDc1Nyw1NDc4MywxMiw1NDc4NSw1NDgxMSwxMiw1NDgxMyw1NDgzOSwxMiw1NDg0MSw1NDg2NywxMiw1NDg2OSw1NDg5NSwxMiw1NDg5Nyw1NDkyMywxMiw1NDkyNSw1NDk1MSwxMiw1NDk1Myw1NDk3OSwxMiw1NDk4MSw1NTAwNywxMiw1NTAwOSw1NTAzNSwxMiw1NTAzNyw1NTA2MywxMiw1NTA2NSw1NTA5MSwxMiw1NTA5Myw1NTExOSwxMiw1NTEyMSw1NTE0NywxMiw1NTE0OSw1NTE3NSwxMiw1NTE3Nyw1NTIwMywxMiw1NTI0Myw1NTI5MSwxMCw2NTAyNCw2NTAzOSw1LDY1Mjc5LDY1Mjc5LDQsNjU1MjAsNjU1MjgsNCw2NjA0NSw2NjA0NSw1LDY2NDIyLDY2NDI2LDUsNjgxMDEsNjgxMDIsNSw2ODE1Miw2ODE1NCw1LDY4MzI1LDY4MzI2LDUsNjkyOTEsNjkyOTIsNSw2OTYzMiw2OTYzMiw3LDY5NjM0LDY5NjM0LDcsNjk3NTksNjk3NjEsNV0nKTtcbn1cbi8vI2VuZHJlZ2lvblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgb2Zmc2V0IGFmdGVyIHBlcmZvcm1pbmcgYSBsZWZ0IGRlbGV0ZSBvbiB0aGUgZ2l2ZW4gc3RyaW5nLFxuICogd2hpbGUgY29uc2lkZXJpbmcgdW5pY29kZSBncmFwaGVtZS9lbW9qaSBydWxlcy5cbiovXG5mdW5jdGlvbiBnZXRMZWZ0RGVsZXRlT2Zmc2V0KG9mZnNldCwgc3RyKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgLy8gVHJ5IHRvIGRlbGV0ZSBlbW9qaSBwYXJ0LlxuICAgIGNvbnN0IGVtb2ppT2Zmc2V0ID0gZ2V0T2Zmc2V0QmVmb3JlTGFzdEVtb2ppQ29tcG9uZW50KG9mZnNldCwgc3RyKTtcbiAgICBpZiAoZW1vamlPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZW1vamlPZmZzZXQ7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwganVzdCBza2lwIGEgc2luZ2xlIGNvZGUgcG9pbnQuXG4gICAgY29uc3QgY29kZVBvaW50ID0gZ2V0UHJldkNvZGVQb2ludChzdHIsIG9mZnNldCk7XG4gICAgb2Zmc2V0IC09IGdldFVURjE2TGVuZ3RoKGNvZGVQb2ludCk7XG4gICAgcmV0dXJuIG9mZnNldDtcbn1cbmV4cG9ydHMuZ2V0TGVmdERlbGV0ZU9mZnNldCA9IGdldExlZnREZWxldGVPZmZzZXQ7XG5mdW5jdGlvbiBnZXRPZmZzZXRCZWZvcmVMYXN0RW1vamlDb21wb25lbnQob2Zmc2V0LCBzdHIpIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjUxL3RyNTEtMTQuaHRtbCNFQk5GX2FuZF9SZWdleCBmb3IgdGhlXG4gICAgLy8gc3RydWN0dXJlIG9mIGVtb2ppcy5cbiAgICBsZXQgY29kZVBvaW50ID0gZ2V0UHJldkNvZGVQb2ludChzdHIsIG9mZnNldCk7XG4gICAgb2Zmc2V0IC09IGdldFVURjE2TGVuZ3RoKGNvZGVQb2ludCk7XG4gICAgLy8gU2tpcCBtb2RpZmllcnNcbiAgICB3aGlsZSAoKGlzRW1vamlNb2RpZmllcihjb2RlUG9pbnQpIHx8IGNvZGVQb2ludCA9PT0gNjUwMzkgLyogZW1vamlWYXJpYW50U2VsZWN0b3IgKi8gfHwgY29kZVBvaW50ID09PSA4NDE5IC8qIGVuY2xvc2luZ0tleUNhcCAqLykpIHtcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQ2Fubm90IHNraXAgbW9kaWZpZXIsIG5vIHByZWNlZGluZyBlbW9qaSBiYXNlLlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb2RlUG9pbnQgPSBnZXRQcmV2Q29kZVBvaW50KHN0ciwgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0IC09IGdldFVURjE2TGVuZ3RoKGNvZGVQb2ludCk7XG4gICAgfVxuICAgIC8vIEV4cGVjdCBiYXNlIGVtb2ppXG4gICAgaWYgKCFpc0Vtb2ppSW1wcmVjaXNlKGNvZGVQb2ludCkpIHtcbiAgICAgICAgLy8gVW5leHBlY3RlZCBjb2RlIHBvaW50LCBub3QgYSB2YWxpZCBlbW9qaS5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9mZnNldCA+PSAwKSB7XG4gICAgICAgIC8vIFNraXAgb3B0aW9uYWwgWldKIGNvZGUgcG9pbnRzIHRoYXQgY29tYmluZSBtdWx0aXBsZSBlbW9qaXMuXG4gICAgICAgIC8vIEluIHRoZW9yeSwgd2Ugc2hvdWxkIGNoZWNrIGlmIHRoYXQgWldKIGFjdHVhbGx5IGNvbWJpbmVzIG11bHRpcGxlIGVtb2ppc1xuICAgICAgICAvLyB0byBwcmV2ZW50IGRlbGV0aW5nIFpXSnMgaW4gc2l0dWF0aW9ucyB3ZSBkaWRuJ3QgYWNjb3VudCBmb3IuXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsWndqQ29kZVBvaW50ID0gZ2V0UHJldkNvZGVQb2ludChzdHIsIG9mZnNldCk7XG4gICAgICAgIGlmIChvcHRpb25hbFp3akNvZGVQb2ludCA9PT0gODIwNSAvKiB6d2ogKi8pIHtcbiAgICAgICAgICAgIG9mZnNldCAtPSBnZXRVVEYxNkxlbmd0aChvcHRpb25hbFp3akNvZGVQb2ludCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbn1cbmZ1bmN0aW9uIGdldFVURjE2TGVuZ3RoKGNvZGVQb2ludCkge1xuICAgIHJldHVybiBjb2RlUG9pbnQgPj0gNjU1MzYgLyogVU5JQ09ERV9TVVBQTEVNRU5UQVJZX1BMQU5FX0JFR0lOICovID8gMiA6IDE7XG59XG5mdW5jdGlvbiBpc0Vtb2ppTW9kaWZpZXIoY29kZVBvaW50KSB7XG4gICAgcmV0dXJuIDB4MUYzRkIgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDFGM0ZGO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNlcnZpY2VDb2xsZWN0aW9uID0gZXhwb3J0cy5DxZwgPSB2b2lkIDA7XG5jb25zdCBzeW1ib2xzXzEgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9iYXNlL2FzeW5jXCIpO1xuY29uc3QgQ8WcID0gKCkgPT4gbmV3IFNlcnZpY2VDb2xsZWN0aW9uKCk7XG5leHBvcnRzLkPFnCA9IEPFnDtcbmNsYXNzIFNlcnZpY2VDb2xsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5lbnRyaWVzKSB7XG4gICAgICAgIHRoaXMuX2VudHJpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX211bHRpcGxlRW50cmllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fd2FpdGluZ01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fZmluYWxJbmRpY2F0b3JzID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGxldCBbaWQsIHNlcnZpY2VdIG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGlkLCBzZXJ2aWNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3YWl0VXRpbEluc3RhbmNlU2V0KGlkKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlT3JEZXNjcmlwdG9yID0gdGhpcy5fZW50cmllcy5nZXQoaWQpO1xuICAgICAgICBpZiAoaW5zdGFuY2VPckRlc2NyaXB0b3IgJiYgIShpbnN0YW5jZU9yRGVzY3JpcHRvciBpbnN0YW5jZW9mIHN5bWJvbHNfMS5TeW5jRGVzY3JpcHRvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFycmllciA9IHRoaXMuX3dhaXRpbmdNYXAuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFiYXJyaWVyKSB7XG4gICAgICAgICAgICBiYXJyaWVyID0gbmV3IGFzeW5jXzEuQmFycmllcigpO1xuICAgICAgICAgICAgdGhpcy5fd2FpdGluZ01hcC5zZXQoaWQsIGJhcnJpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXJyaWVyLndhaXQoKTtcbiAgICB9XG4gICAgc2V0QXNGaW5hbChpZCwgaW5zdGFuY2VPckRlc2NyaXB0b3IpIHtcbiAgICAgICAgdGhpcy5fZmluYWxJbmRpY2F0b3JzLmFkZChpZCk7XG4gICAgICAgIHRoaXMuc2V0KGlkLCBpbnN0YW5jZU9yRGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHNldChpZCwgaW5zdGFuY2VPckRlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZpbmFsSW5kaWNhdG9ycy5oYXMoaWQpICYmIChpbnN0YW5jZU9yRGVzY3JpcHRvciBpbnN0YW5jZW9mIHN5bWJvbHNfMS5TeW5jRGVzY3JpcHRvcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbnRyaWVzLnNldChpZCwgaW5zdGFuY2VPckRlc2NyaXB0b3IpO1xuICAgICAgICBpZiAoaW5zdGFuY2VPckRlc2NyaXB0b3IgJiYgIShpbnN0YW5jZU9yRGVzY3JpcHRvciBpbnN0YW5jZW9mIHN5bWJvbHNfMS5TeW5jRGVzY3JpcHRvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhcnJpZXIgPSB0aGlzLl93YWl0aW5nTWFwLmdldChpZCk7XG4gICAgICAgICAgICBpZiAoYmFycmllcikge1xuICAgICAgICAgICAgICAgIGJhcnJpZXIub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhaXRpbmdNYXAuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRNdWx0aXBsZShpZCwgaW5zdGFuY2VPckRlc2NyaXB0b3IpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLl9tdWx0aXBsZUVudHJpZXMuZ2V0KGlkKSB8fCBbXTtcbiAgICAgICAgYXJyYXkucHVzaChpbnN0YW5jZU9yRGVzY3JpcHRvcik7XG4gICAgICAgIHRoaXMuX211bHRpcGxlRW50cmllcy5zZXQoaWQsIGFycmF5KTtcbiAgICB9XG4gICAgc2V0TXVsdGlwbGUoaWQsIGluc3RhbmNlT3JEZXNjcmlwdG9ycykge1xuICAgICAgICB0aGlzLl9tdWx0aXBsZUVudHJpZXMuc2V0KGlkLCBpbnN0YW5jZU9yRGVzY3JpcHRvcnMpO1xuICAgIH1cbiAgICBmb3JFYWNoTXVsdGlwbGUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fbXVsdGlwbGVFbnRyaWVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IGNhbGxiYWNrKGtleSwgdmFsdWUpKTtcbiAgICB9XG4gICAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lbnRyaWVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IGNhbGxiYWNrKGtleSwgdmFsdWUpKTtcbiAgICB9XG4gICAgaGFzKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRyaWVzLmhhcyhpZCk7XG4gICAgfVxuICAgIGhhc011bHRpcGxlKGlkKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fbXVsdGlwbGVFbnRyaWVzLmdldChpZCkgfHwgW10pLmxlbmd0aCA+PSAxO1xuICAgIH1cbiAgICBnZXQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudHJpZXMuZ2V0KGlkKTtcbiAgICB9XG4gICAgZ2V0TXVsdGlwbGUoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211bHRpcGxlRW50cmllcy5nZXQoaWQpIHx8IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuU2VydmljZUNvbGxlY3Rpb24gPSBTZXJ2aWNlQ29sbGVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgYXBwXzEgPSByZXF1aXJlKFwiLi9hcHBcIik7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBhcHBfMS5BcHAoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BcHAgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHMvdXRpbHNcIik7XG5jb25zdCBhc3luY18xID0gcmVxdWlyZShcInNlcnZpY2UtYmFzZS9kaXN0L2NvbW1vbi9iYXNlL2FzeW5jXCIpO1xuY29uc3QgcmVwb3J0ZXJfMSA9IHJlcXVpcmUoXCJAL2NvbW1vbi9yZXBvcnRlci9yZXBvcnRlclwiKTtcbmNvbnN0IEl0ZW1IZWlnaHQgPSA2MDtcbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Jvc0RvY3VtZW50U2Nyb2xsID0gbmV3IGFzeW5jXzEuUnVuT25jZVNjaGVkdWxlcih0aGlzLm9uRG9jdW1lbnRTY3JvbGwuYmluZCh0aGlzKSwgNDApO1xuICAgICAgICB0aGlzLl9sYXRlc3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX3JlcG9ydEV4cG9zdXJlTWFwID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fdnMgPSBhY3F1aXJlVnNDb2RlQXBpKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vblJlY2VpdmVNZXNzYWdlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29udGFpbmVyQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucmVhZHkoKTtcbiAgICB9XG4gICAgcmVwb3J0KGRlc2MpIHtcbiAgICAgICAgdGhpcy5fdnMucG9zdE1lc3NhZ2UoeyB0eXBlOiAncmVwb3J0JywgZGF0YTogZGVzYyB9KTtcbiAgICB9XG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHRoaXMuX3ZzLnBvc3RNZXNzYWdlKHsgdHlwZTogJ3JlYWR5JyB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gdGhpcy5fcm9zRG9jdW1lbnRTY3JvbGwuc2NoZWR1bGUoKSk7XG4gICAgfVxuICAgIG9uUmVjZWl2ZU1lc3NhZ2UobXNnKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHN3aXRjaCAoKF9hID0gbXNnID09PSBudWxsIHx8IG1zZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbXNnLmRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzZXRUeXBlJzoge1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LmFkZChtc2cuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZUxpc3QnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0KG1zZy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZm9jdXNTZXJ2aWNlJzoge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNTZXJ2aWNlKG1zZy5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvY3VzU2VydmljZShzaWQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuX2xpcykge1xuICAgICAgICAgICAgdGhpcy5fbGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlbZGF0YS1zZXJ2aWNlLWlkXScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RTaWQgPSB0aGlzLl9sYXN0U2lkO1xuICAgICAgICB0aGlzLl9sYXN0U2lkID0gc2lkO1xuICAgICAgICBpZiAoc2lkID09PSBsYXN0U2lkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9saXNbaV07XG4gICAgICAgICAgICBpZiAoZWwuZGF0YXNldC5zZXJ2aWNlSWQgPT09IHNpZCkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgKF9hID0gZWwuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoZWwsIHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2VuZCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsYXN0U2lkICYmIGVsLmRhdGFzZXQuc2VydmljZUlkID09PSBsYXN0U2lkKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbnRhaW5lckNsaWNrKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwYXRoZXMgPSBlLmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcGF0aGVzW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoKF9hID0gdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LmRhdGFzZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXJ2aWNlSWQpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpZCA9IHRhcmdldC5kYXRhc2V0LnNlcnZpY2VJZDtcbiAgICAgICAgICAgICAgICB0aGlzLl92cy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvcGVuUHJvbW90aW9uQ29udGFpbmVyRWRpdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRhcmdldC5kYXRhc2V0LmxhYmVsIHx8ICc/JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJZDogc2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiAncGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHRoaXMuX2xhdGVzdExpc3QuZmluZEluZGV4KGwgPT4gbC5zZXJ2aWNlSWQgPT09IHNpZCksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzU2VydmljZShzaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5jb250YWluZXIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzZXRMaXN0KCkge1xuICAgICAgICB0aGlzLl9sYXRlc3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMuX3JlcG9ydEV4cG9zdXJlTWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2xpcyA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5fbGFzdFNpZCA9IHZvaWQgMDtcbiAgICB9XG4gICAgdXBkYXRlTGlzdChkYXRhKSB7XG4gICAgICAgIHRoaXMucmVzZXRMaXN0KCk7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLmF2YWlsYWJsZSA9PT0gZmFsc2UgfHwgIWRhdGEubGlzdCB8fCBkYXRhLmxpc3QubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gU3RyaW5nKGRhdGEuZW1wdHlSZWFzb24gfHwgJ1VuYWJsZSB0byBsb2FkIGRhdGEgbGlzdC4nKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHhcIj4ke3V0aWxzXzEucHQocmVhc29uKX08L3A+XG4gICAgICBgO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhdGVzdExpc3QgPSBkYXRhLmxpc3Q7XG4gICAgICAgIGNvbnN0IGxpcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YS5saXN0KSB7XG4gICAgICAgICAgICBsaXMucHVzaChgXG4gICAgICAgIDxsaSBjbGFzcz1cInNtcC1pdGVtXCIgZGF0YS1zZXJ2aWNlLWlkPVwiJHt1dGlsc18xLnBzKGl0ZW0uc2VydmljZUlkKX1cIiBkYXRhLWxhYmVsPVwiJHt1dGlsc18xLnBzKGl0ZW0ubGFiZWwpfVwiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJzbXAtaWNvbiAke2l0ZW0uaGVhZEltYWdlID8gJycgOiAnaGlkZSd9XCIgc3JjPVwiJHt1dGlsc18xLnBzKGl0ZW0uaGVhZEltYWdlIHx8ICcnKX1cIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbXAtZW50cnlcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic21wLXRpdGxlXCI+JHt1dGlsc18xLnB0KGl0ZW0ubGFiZWwpfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic21wLWRldGFpbFwiPiR7dXRpbHNfMS5wdChpdGVtLnN1YmplY3ROYW1lIHx8ICcnKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8dWwgY2xhc3M9XCJzbXAtaXRlbXMgLS1mYWRlLWluLXF1aWNrXCI+XG4gICAgICAgICR7bGlzLmpvaW4oJ1xcbicpfVxuICAgICAgPC91bD5cbiAgICBgO1xuICAgICAgICB0aGlzLl9yb3NEb2N1bWVudFNjcm9sbC5zY2hlZHVsZSgpO1xuICAgIH1cbiAgICByZXBvcnRFeHBvc3VyZUlmTm90UmVwb3J0ZWQoaWR4KSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXBvcnRFeHBvc3VyZU1hcC5oYXMoaWR4KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9sYXRlc3RMaXN0W2lkeF07XG4gICAgICAgIGlmICghaXQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX3JlcG9ydEV4cG9zdXJlTWFwLmFkZChpZHgpO1xuICAgICAgICB0aGlzLnJlcG9ydCh7XG4gICAgICAgICAgICAkc2NoZW1lOiAyMzA5OSxcbiAgICAgICAgICAgICRrZXlJbmZvOiAnKDIzMDk5KSByZXBvcnQgZXhwb3N1cmUgYXBpcyBpbiBwYW5lbCAoJyArIGl0LmxhYmVsICsgJyknLFxuICAgICAgICAgICAgZGV0YWlsczoge1xuICAgICAgICAgICAgICAgIFBhZ2VUeXBlOiByZXBvcnRlcl8xLlJlcG9ydDIzMDk5UGFnZVR5cGUuUGFuZWwsXG4gICAgICAgICAgICAgICAgQWN0aW9uVHlwZTogcmVwb3J0ZXJfMS5SZXBvcnQyMzA5OUFjdGlvblR5cGUuRXhwb3N1cmUsXG4gICAgICAgICAgICAgICAgRXhwb3N1cmU6IHJlcG9ydGVyXzEuUmVwb3J0MjMwOTlFeHBvc3VyZS5FeHBvc3VyZSxcbiAgICAgICAgICAgICAgICBTZXJ2aWNlVHlwZTogaXQuc2VydmljZVR5cGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFNlcnZpY2VJZDogaXQuc2VydmljZUlkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXBvcnQoe1xuICAgICAgICAgICAgJHNjaGVtZTogMTM2MTMsXG4gICAgICAgICAgICAka2V5SW5mbzogJygxMzYxMykgcmVwb3J0IGV4cG9zdXJlIGFwaXMgaW4gcGFuZWwgKCcgKyBpdC5sYWJlbCArICcpJyxcbiAgICAgICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICAgICAgICBBY3Rpb246IHJlcG9ydGVyXzEuUmVwb3J0MTM2MTNBY3Rpb24uZXhwb3NlX2VkaXRvcl9wYW5lbF9hcGksXG4gICAgICAgICAgICAgICAgRGF0YTogaXQuc2VydmljZUlkLFxuICAgICAgICAgICAgICAgIERhdGEyOiBTdHJpbmcoaWR4ICsgMSksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkRvY3VtZW50U2Nyb2xsKCkge1xuICAgICAgICBjb25zdCB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGlmIChpc05hTih5KSB8fCBpc05hTihoZWlnaHQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzdGFydERpZ2kgPSB5IC8gSXRlbUhlaWdodDtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLmNlaWwoc3RhcnREaWdpKSAtIDE7XG4gICAgICAgIGNvbnN0IG1heENvdW50ID0gTWF0aC5jZWlsKGhlaWdodCAvIEl0ZW1IZWlnaHQpO1xuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1pbihtYXhDb3VudCwgdGhpcy5fbGF0ZXN0TGlzdC5sZW5ndGgpO1xuICAgICAgICBsZXQgaiA9IE1hdGgubWF4KDAsIHN0YXJ0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRFeHBvc3VyZUlmTm90UmVwb3J0ZWQoaisrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQXBwID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBzID0gZXhwb3J0cy5wdCA9IHZvaWQgMDtcbmNvbnN0IF9pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuZnVuY3Rpb24gcHQodGV4dCkge1xuICAgIF9pLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIF9pLmlubmVySFRNTDtcbn1cbmV4cG9ydHMucHQgPSBwdDtcbmNvbnN0IF9pMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmZ1bmN0aW9uIHBzKHNyYykge1xuICAgIF9pMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3JjKTtcbiAgICByZXR1cm4gX2kyLm91dGVySFRNTC5zbGljZSgxMCwgLTYpO1xufVxuZXhwb3J0cy5wcyA9IHBzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UgPSBleHBvcnRzLkNhbmNlbGxhdGlvblRva2VuID0gdm9pZCAwO1xuY29uc3QgZXZlbnRfMSA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpO1xuY29uc3Qgc2hvcnRjdXRFdmVudCA9IE9iamVjdC5mcmVlemUoZnVuY3Rpb24gKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaGFuZGxlID0gc2V0VGltZW91dChjYWxsYmFjay5iaW5kKGNvbnRleHQpLCAwKTtcbiAgICByZXR1cm4geyBkaXNwb3NlKCkgeyBjbGVhclRpbWVvdXQoaGFuZGxlKTsgfSB9O1xufSk7XG52YXIgQ2FuY2VsbGF0aW9uVG9rZW47XG4oZnVuY3Rpb24gKENhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgZnVuY3Rpb24gaXNDYW5jZWxsYXRpb25Ub2tlbih0aGluZykge1xuICAgICAgICBpZiAodGhpbmcgPT09IENhbmNlbGxhdGlvblRva2VuLk5vbmUgfHwgdGhpbmcgPT09IENhbmNlbGxhdGlvblRva2VuLkNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaW5nIGluc3RhbmNlb2YgTXV0YWJsZVRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaW5nIHx8IHR5cGVvZiB0aGluZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaW5nLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkID09PSAnYm9vbGVhbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5vbkNhbmNlbGxhdGlvblJlcXVlc3RlZCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgQ2FuY2VsbGF0aW9uVG9rZW4uaXNDYW5jZWxsYXRpb25Ub2tlbiA9IGlzQ2FuY2VsbGF0aW9uVG9rZW47XG4gICAgQ2FuY2VsbGF0aW9uVG9rZW4uTm9uZSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogZmFsc2UsXG4gICAgICAgIG9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBldmVudF8xLkV2ZW50Lk5vbmVcbiAgICB9KTtcbiAgICBDYW5jZWxsYXRpb25Ub2tlbi5DYW5jZWxsZWQgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IHRydWUsXG4gICAgICAgIG9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBzaG9ydGN1dEV2ZW50XG4gICAgfSk7XG59KShDYW5jZWxsYXRpb25Ub2tlbiA9IGV4cG9ydHMuQ2FuY2VsbGF0aW9uVG9rZW4gfHwgKGV4cG9ydHMuQ2FuY2VsbGF0aW9uVG9rZW4gPSB7fSkpO1xuY2xhc3MgTXV0YWJsZVRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faXNDYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VtaXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0dGVyLmZpcmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0NhbmNlbGxlZDtcbiAgICB9XG4gICAgZ2V0IG9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKCkge1xuICAgICAgICBpZiAodGhpcy5faXNDYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG9ydGN1dEV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fZW1pdHRlcikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlciA9IG5ldyBldmVudF8xLkVtaXR0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZW1pdHRlci5ldmVudDtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2VtaXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wYXJlbnRMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fcGFyZW50TGlzdGVuZXIgPSBwYXJlbnQgJiYgcGFyZW50Lm9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKHRoaXMuY2FuY2VsLCB0aGlzKTtcbiAgICB9XG4gICAgZ2V0IHRva2VuKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Rva2VuKSB7XG4gICAgICAgICAgICAvLyBiZSBsYXp5IGFuZCBjcmVhdGUgdGhlIHRva2VuIG9ubHkgd2hlblxuICAgICAgICAgICAgLy8gYWN0dWFsbHkgbmVlZGVkXG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IG5ldyBNdXRhYmxlVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XG4gICAgfVxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90b2tlbikge1xuICAgICAgICAgICAgLy8gc2F2ZSBhbiBvYmplY3QgYnkgcmV0dXJuaW5nIHRoZSBkZWZhdWx0XG4gICAgICAgICAgICAvLyBjYW5jZWxsZWQgdG9rZW4gd2hlbiBjYW5jZWxsYXRpb24gaGFwcGVuc1xuICAgICAgICAgICAgLy8gYmVmb3JlIHNvbWVvbmUgYXNrcyBmb3IgdGhlIHRva2VuXG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IENhbmNlbGxhdGlvblRva2VuLkNhbmNlbGxlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl90b2tlbiBpbnN0YW5jZW9mIE11dGFibGVUb2tlbikge1xuICAgICAgICAgICAgLy8gYWN0dWFsbHkgY2FuY2VsXG4gICAgICAgICAgICB0aGlzLl90b2tlbi5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwb3NlKGNhbmNlbCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl90b2tlbikge1xuICAgICAgICAgICAgLy8gZW5zdXJlIHRvIGluaXRpYWxpemUgd2l0aCBhbiBlbXB0eSB0b2tlbiBpZiB3ZSBoYWQgbm9uZVxuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSBDYW5jZWxsYXRpb25Ub2tlbi5Ob25lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3Rva2VuIGluc3RhbmNlb2YgTXV0YWJsZVRva2VuKSB7XG4gICAgICAgICAgICAvLyBhY3R1YWxseSBkaXNwb3NlXG4gICAgICAgICAgICB0aGlzLl90b2tlbi5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkNhbmNlbGxhdGlvblRva2VuU291cmNlID0gQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIGNvbXBhcmUgYW5kIGlzQnVmZmVyIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvYmxvYi82ODBlOWU1ZTQ4OGYyMmFhYzI3NTk5YTU3ZGM4NDRhNjMxNTkyOGRkL2luZGV4LmpzXG4vLyBvcmlnaW5hbCBub3RpY2U6XG5cbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmICh5IDwgeCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gaXNCdWZmZXIoYikge1xuICBpZiAoZ2xvYmFsLkJ1ZmZlciAmJiB0eXBlb2YgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKGIpO1xuICB9XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpO1xufVxuXG4vLyBiYXNlZCBvbiBub2RlIGFzc2VydCwgb3JpZ2luYWwgbm90aWNlOlxuLy8gTkI6IFRoZSBVUkwgdG8gdGhlIENvbW1vbkpTIHNwZWMgaXMga2VwdCBqdXN0IGZvciB0cmFkaXRpb24uXG4vLyAgICAgbm9kZS1hc3NlcnQgaGFzIGV2b2x2ZWQgYSBsb3Qgc2luY2UgdGhlbiwgYm90aCBpbiBBUEkgYW5kIGJlaGF2aW9yLlxuXG4vLyBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Vbml0X1Rlc3RpbmcvMS4wXG4vL1xuLy8gVEhJUyBJUyBOT1QgVEVTVEVEIE5PUiBMSUtFTFkgVE8gV09SSyBPVVRTSURFIFY4IVxuLy9cbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsLycpO1xudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGZ1bmN0aW9uc0hhdmVOYW1lcyA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb28oKSB7fS5uYW1lID09PSAnZm9vJztcbn0oKSk7XG5mdW5jdGlvbiBwVG9TdHJpbmcgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc1ZpZXcoYXJyYnVmKSB7XG4gIGlmIChpc0J1ZmZlcihhcnJidWYpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZ2xvYmFsLkFycmF5QnVmZmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhhcnJidWYpO1xuICB9XG4gIGlmICghYXJyYnVmKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhcnJidWYgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhcnJidWYuYnVmZmVyICYmIGFycmJ1Zi5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIDEuIFRoZSBhc3NlcnQgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0aGF0IHRocm93XG4vLyBBc3NlcnRpb25FcnJvcidzIHdoZW4gcGFydGljdWxhciBjb25kaXRpb25zIGFyZSBub3QgbWV0LiBUaGVcbi8vIGFzc2VydCBtb2R1bGUgbXVzdCBjb25mb3JtIHRvIHRoZSBmb2xsb3dpbmcgaW50ZXJmYWNlLlxuXG52YXIgYXNzZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSBvaztcblxuLy8gMi4gVGhlIEFzc2VydGlvbkVycm9yIGlzIGRlZmluZWQgaW4gYXNzZXJ0LlxuLy8gbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7IG1lc3NhZ2U6IG1lc3NhZ2UsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pXG5cbnZhciByZWdleCA9IC9cXHMqZnVuY3Rpb25cXHMrKFteXFwoXFxzXSopXFxzKi87XG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL2Z1bmN0aW9uLnByb3RvdHlwZS5uYW1lL2Jsb2IvYWRlZWVlYzhiZmNjNjA2OGIxODdkN2Q5ZmIzZDViYjFkM2EzMDg5OS9pbXBsZW1lbnRhdGlvbi5qc1xuZnVuY3Rpb24gZ2V0TmFtZShmdW5jKSB7XG4gIGlmICghdXRpbC5pc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuYy5uYW1lO1xuICB9XG4gIHZhciBzdHIgPSBmdW5jLnRvU3RyaW5nKCk7XG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcbn1cbmFzc2VydC5Bc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIEFzc2VydGlvbkVycm9yKG9wdGlvbnMpIHtcbiAgdGhpcy5uYW1lID0gJ0Fzc2VydGlvbkVycm9yJztcbiAgdGhpcy5hY3R1YWwgPSBvcHRpb25zLmFjdHVhbDtcbiAgdGhpcy5leHBlY3RlZCA9IG9wdGlvbnMuZXhwZWN0ZWQ7XG4gIHRoaXMub3BlcmF0b3IgPSBvcHRpb25zLm9wZXJhdG9yO1xuICBpZiAob3B0aW9ucy5tZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWVzc2FnZSA9IGdldE1lc3NhZ2UodGhpcyk7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gdHJ1ZTtcbiAgfVxuICB2YXIgc3RhY2tTdGFydEZ1bmN0aW9uID0gb3B0aW9ucy5zdGFja1N0YXJ0RnVuY3Rpb24gfHwgZmFpbDtcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBub24gdjggYnJvd3NlcnMgc28gd2UgY2FuIGhhdmUgYSBzdGFja3RyYWNlXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgIHZhciBvdXQgPSBlcnIuc3RhY2s7XG5cbiAgICAgIC8vIHRyeSB0byBzdHJpcCB1c2VsZXNzIGZyYW1lc1xuICAgICAgdmFyIGZuX25hbWUgPSBnZXROYW1lKHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gICAgICB2YXIgaWR4ID0gb3V0LmluZGV4T2YoJ1xcbicgKyBmbl9uYW1lKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgbG9jYXRlZCB0aGUgZnVuY3Rpb24gZnJhbWVcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdHJpcCBvdXQgZXZlcnl0aGluZyBiZWZvcmUgaXQgKGFuZCBpdHMgbGluZSlcbiAgICAgICAgdmFyIG5leHRfbGluZSA9IG91dC5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZyhuZXh0X2xpbmUgKyAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFjayA9IG91dDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGFzc2VydC5Bc3NlcnRpb25FcnJvciBpbnN0YW5jZW9mIEVycm9yXG51dGlsLmluaGVyaXRzKGFzc2VydC5Bc3NlcnRpb25FcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZShzLCBuKSB7XG4gIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPCBuID8gcyA6IHMuc2xpY2UoMCwgbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc3BlY3Qoc29tZXRoaW5nKSB7XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMgfHwgIXV0aWwuaXNGdW5jdGlvbihzb21ldGhpbmcpKSB7XG4gICAgcmV0dXJuIHV0aWwuaW5zcGVjdChzb21ldGhpbmcpO1xuICB9XG4gIHZhciByYXduYW1lID0gZ2V0TmFtZShzb21ldGhpbmcpO1xuICB2YXIgbmFtZSA9IHJhd25hbWUgPyAnOiAnICsgcmF3bmFtZSA6ICcnO1xuICByZXR1cm4gJ1tGdW5jdGlvbicgKyAgbmFtZSArICddJztcbn1cbmZ1bmN0aW9uIGdldE1lc3NhZ2Uoc2VsZikge1xuICByZXR1cm4gdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmFjdHVhbCksIDEyOCkgKyAnICcgK1xuICAgICAgICAgc2VsZi5vcGVyYXRvciArICcgJyArXG4gICAgICAgICB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuZXhwZWN0ZWQpLCAxMjgpO1xufVxuXG4vLyBBdCBwcmVzZW50IG9ubHkgdGhlIHRocmVlIGtleXMgbWVudGlvbmVkIGFib3ZlIGFyZSB1c2VkIGFuZFxuLy8gdW5kZXJzdG9vZCBieSB0aGUgc3BlYy4gSW1wbGVtZW50YXRpb25zIG9yIHN1YiBtb2R1bGVzIGNhbiBwYXNzXG4vLyBvdGhlciBrZXlzIHRvIHRoZSBBc3NlcnRpb25FcnJvcidzIGNvbnN0cnVjdG9yIC0gdGhleSB3aWxsIGJlXG4vLyBpZ25vcmVkLlxuXG4vLyAzLiBBbGwgb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgbXVzdCB0aHJvdyBhbiBBc3NlcnRpb25FcnJvclxuLy8gd2hlbiBhIGNvcnJlc3BvbmRpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHdpdGggYSBtZXNzYWdlIHRoYXRcbi8vIG1heSBiZSB1bmRlZmluZWQgaWYgbm90IHByb3ZpZGVkLiAgQWxsIGFzc2VydGlvbiBtZXRob2RzIHByb3ZpZGVcbi8vIGJvdGggdGhlIGFjdHVhbCBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRvIHRoZSBhc3NlcnRpb24gZXJyb3IgZm9yXG4vLyBkaXNwbGF5IHB1cnBvc2VzLlxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0RnVuY3Rpb24pIHtcbiAgdGhyb3cgbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxuICAgIHN0YWNrU3RhcnRGdW5jdGlvbjogc3RhY2tTdGFydEZ1bmN0aW9uXG4gIH0pO1xufVxuXG4vLyBFWFRFTlNJT04hIGFsbG93cyBmb3Igd2VsbCBiZWhhdmVkIGVycm9ycyBkZWZpbmVkIGVsc2V3aGVyZS5cbmFzc2VydC5mYWlsID0gZmFpbDtcblxuLy8gNC4gUHVyZSBhc3NlcnRpb24gdGVzdHMgd2hldGhlciBhIHZhbHVlIGlzIHRydXRoeSwgYXMgZGV0ZXJtaW5lZFxuLy8gYnkgISFndWFyZC5cbi8vIGFzc2VydC5vayhndWFyZCwgbWVzc2FnZV9vcHQpO1xuLy8gVGhpcyBzdGF0ZW1lbnQgaXMgZXF1aXZhbGVudCB0byBhc3NlcnQuZXF1YWwodHJ1ZSwgISFndWFyZCxcbi8vIG1lc3NhZ2Vfb3B0KTsuIFRvIHRlc3Qgc3RyaWN0bHkgZm9yIHRoZSB2YWx1ZSB0cnVlLCB1c2Vcbi8vIGFzc2VydC5zdHJpY3RFcXVhbCh0cnVlLCBndWFyZCwgbWVzc2FnZV9vcHQpOy5cblxuZnVuY3Rpb24gb2sodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09JywgYXNzZXJ0Lm9rKTtcbn1cbmFzc2VydC5vayA9IG9rO1xuXG4vLyA1LiBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGhcbi8vID09LlxuLy8gYXNzZXJ0LmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5lcXVhbCk7XG59O1xuXG4vLyA2LiBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90IGVxdWFsXG4vLyB3aXRoICE9IGFzc2VydC5ub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9JywgYXNzZXJ0Lm5vdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gNy4gVGhlIGVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBhIGRlZXAgZXF1YWxpdHkgcmVsYXRpb24uXG4vLyBhc3NlcnQuZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmRlZXBFcXVhbCA9IGZ1bmN0aW9uIGRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwRXF1YWwnLCBhc3NlcnQuZGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIGRlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBTdHJpY3RFcXVhbCcsIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpIHtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAmJiBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gY29tcGFyZShhY3R1YWwsIGV4cGVjdGVkKSA9PT0gMDtcblxuICAvLyA3LjIuIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIERhdGUgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIERhdGUgb2JqZWN0IHRoYXQgcmVmZXJzIHRvIHRoZSBzYW1lIHRpbWUuXG4gIH0gZWxzZSBpZiAodXRpbC5pc0RhdGUoYWN0dWFsKSAmJiB1dGlsLmlzRGF0ZShleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMyBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIFJlZ0V4cCBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzb3VyY2UgYW5kXG4gIC8vIHByb3BlcnRpZXMgKGBnbG9iYWxgLCBgbXVsdGlsaW5lYCwgYGxhc3RJbmRleGAsIGBpZ25vcmVDYXNlYCkuXG4gIH0gZWxzZSBpZiAodXRpbC5pc1JlZ0V4cChhY3R1YWwpICYmIHV0aWwuaXNSZWdFeHAoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5zb3VyY2UgPT09IGV4cGVjdGVkLnNvdXJjZSAmJlxuICAgICAgICAgICBhY3R1YWwuZ2xvYmFsID09PSBleHBlY3RlZC5nbG9iYWwgJiZcbiAgICAgICAgICAgYWN0dWFsLm11bHRpbGluZSA9PT0gZXhwZWN0ZWQubXVsdGlsaW5lICYmXG4gICAgICAgICAgIGFjdHVhbC5sYXN0SW5kZXggPT09IGV4cGVjdGVkLmxhc3RJbmRleCAmJlxuICAgICAgICAgICBhY3R1YWwuaWdub3JlQ2FzZSA9PT0gZXhwZWN0ZWQuaWdub3JlQ2FzZTtcblxuICAvLyA3LjQuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoKGFjdHVhbCA9PT0gbnVsbCB8fCB0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JykgJiZcbiAgICAgICAgICAgICAoZXhwZWN0ZWQgPT09IG51bGwgfHwgdHlwZW9mIGV4cGVjdGVkICE9PSAnb2JqZWN0JykpIHtcbiAgICByZXR1cm4gc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyBJZiBib3RoIHZhbHVlcyBhcmUgaW5zdGFuY2VzIG9mIHR5cGVkIGFycmF5cywgd3JhcCB0aGVpciB1bmRlcmx5aW5nXG4gIC8vIEFycmF5QnVmZmVycyBpbiBhIEJ1ZmZlciBlYWNoIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlXG4gIC8vIFRoaXMgb3B0aW1pemF0aW9uIHJlcXVpcmVzIHRoZSBhcnJheXMgdG8gaGF2ZSB0aGUgc2FtZSB0eXBlIGFzIGNoZWNrZWQgYnlcbiAgLy8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAoYWthIHBUb1N0cmluZykuIE5ldmVyIHBlcmZvcm0gYmluYXJ5XG4gIC8vIGNvbXBhcmlzb25zIGZvciBGbG9hdCpBcnJheXMsIHRob3VnaCwgc2luY2UgZS5nLiArMCA9PT0gLTAgYnV0IHRoZWlyXG4gIC8vIGJpdCBwYXR0ZXJucyBhcmUgbm90IGlkZW50aWNhbC5cbiAgfSBlbHNlIGlmIChpc1ZpZXcoYWN0dWFsKSAmJiBpc1ZpZXcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgcFRvU3RyaW5nKGFjdHVhbCkgPT09IHBUb1N0cmluZyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICAhKGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fFxuICAgICAgICAgICAgICAgYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KSkge1xuICAgIHJldHVybiBjb21wYXJlKG5ldyBVaW50OEFycmF5KGFjdHVhbC5idWZmZXIpLFxuICAgICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KGV4cGVjdGVkLmJ1ZmZlcikpID09PSAwO1xuXG4gIC8vIDcuNSBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAhPT0gaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1lbW9zID0gbWVtb3MgfHwge2FjdHVhbDogW10sIGV4cGVjdGVkOiBbXX07XG5cbiAgICB2YXIgYWN0dWFsSW5kZXggPSBtZW1vcy5hY3R1YWwuaW5kZXhPZihhY3R1YWwpO1xuICAgIGlmIChhY3R1YWxJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChhY3R1YWxJbmRleCA9PT0gbWVtb3MuZXhwZWN0ZWQuaW5kZXhPZihleHBlY3RlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb3MuYWN0dWFsLnB1c2goYWN0dWFsKTtcbiAgICBtZW1vcy5leHBlY3RlZC5wdXNoKGV4cGVjdGVkKTtcblxuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSB7XG4gIGlmIChhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGlmIG9uZSBpcyBhIHByaW1pdGl2ZSwgdGhlIG90aGVyIG11c3QgYmUgc2FtZVxuICBpZiAodXRpbC5pc1ByaW1pdGl2ZShhKSB8fCB1dGlsLmlzUHJpbWl0aXZlKGIpKVxuICAgIHJldHVybiBhID09PSBiO1xuICBpZiAoc3RyaWN0ICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihhKSAhPT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgdmFyIGFJc0FyZ3MgPSBpc0FyZ3VtZW50cyhhKTtcbiAgdmFyIGJJc0FyZ3MgPSBpc0FyZ3VtZW50cyhiKTtcbiAgaWYgKChhSXNBcmdzICYmICFiSXNBcmdzKSB8fCAoIWFJc0FyZ3MgJiYgYklzQXJncykpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoYUlzQXJncykge1xuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIF9kZWVwRXF1YWwoYSwgYiwgc3RyaWN0KTtcbiAgfVxuICB2YXIga2EgPSBvYmplY3RLZXlzKGEpO1xuICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB2YXIga2V5LCBpO1xuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9PSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIV9kZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyA4LiBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cbi8vIGFzc2VydC5ub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcEVxdWFsJywgYXNzZXJ0Lm5vdERlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWwgPSBub3REZWVwU3RyaWN0RXF1YWw7XG5mdW5jdGlvbiBub3REZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBTdHJpY3RFcXVhbCcsIG5vdERlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn1cblxuXG4vLyA5LiBUaGUgc3RyaWN0IGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzdHJpY3QgZXF1YWxpdHksIGFzIGRldGVybWluZWQgYnkgPT09LlxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09PScsIGFzc2VydC5zdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDEwLiBUaGUgc3RyaWN0IG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHN0cmljdCBpbmVxdWFsaXR5LCBhc1xuLy8gZGV0ZXJtaW5lZCBieSAhPT0uICBhc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT09JywgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkge1xuICBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV4cGVjdGVkKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWdub3JlLiAgVGhlIGluc3RhbmNlb2YgY2hlY2sgZG9lc24ndCB3b3JrIGZvciBhcnJvdyBmdW5jdGlvbnMuXG4gIH1cblxuICBpZiAoRXJyb3IuaXNQcm90b3R5cGVPZihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX3RyeUJsb2NrKGJsb2NrKSB7XG4gIHZhciBlcnJvcjtcbiAgdHJ5IHtcbiAgICBibG9jaygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSBlO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gX3Rocm93cyhzaG91bGRUaHJvdywgYmxvY2ssIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIHZhciBhY3R1YWw7XG5cbiAgaWYgKHR5cGVvZiBibG9jayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYmxvY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgbWVzc2FnZSA9IGV4cGVjdGVkO1xuICAgIGV4cGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIGFjdHVhbCA9IF90cnlCbG9jayhibG9jayk7XG5cbiAgbWVzc2FnZSA9IChleHBlY3RlZCAmJiBleHBlY3RlZC5uYW1lID8gJyAoJyArIGV4cGVjdGVkLm5hbWUgKyAnKS4nIDogJy4nKSArXG4gICAgICAgICAgICAobWVzc2FnZSA/ICcgJyArIG1lc3NhZ2UgOiAnLicpO1xuXG4gIGlmIChzaG91bGRUaHJvdyAmJiAhYWN0dWFsKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnTWlzc2luZyBleHBlY3RlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICB2YXIgdXNlclByb3ZpZGVkTWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJztcbiAgdmFyIGlzVW53YW50ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgdXRpbC5pc0Vycm9yKGFjdHVhbCk7XG4gIHZhciBpc1VuZXhwZWN0ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmICFleHBlY3RlZDtcblxuICBpZiAoKGlzVW53YW50ZWRFeGNlcHRpb24gJiZcbiAgICAgIHVzZXJQcm92aWRlZE1lc3NhZ2UgJiZcbiAgICAgIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fFxuICAgICAgaXNVbmV4cGVjdGVkRXhjZXB0aW9uKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnR290IHVud2FudGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIGlmICgoc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmIGV4cGVjdGVkICYmXG4gICAgICAhZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8ICghc2hvdWxkVGhyb3cgJiYgYWN0dWFsKSkge1xuICAgIHRocm93IGFjdHVhbDtcbiAgfVxufVxuXG4vLyAxMS4gRXhwZWN0ZWQgdG8gdGhyb3cgYW4gZXJyb3I6XG4vLyBhc3NlcnQudGhyb3dzKGJsb2NrLCBFcnJvcl9vcHQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnRocm93cyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKHRydWUsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG4vLyBFWFRFTlNJT04hIFRoaXMgaXMgYW5ub3lpbmcgdG8gd3JpdGUgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyhmYWxzZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24oZXJyKSB7IGlmIChlcnIpIHRocm93IGVycjsgfTtcblxuLy8gRXhwb3NlIGEgc3RyaWN0IG9ubHkgdmFyaWFudCBvZiBhc3NlcnRcbmZ1bmN0aW9uIHN0cmljdCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBzdHJpY3QpO1xufVxuYXNzZXJ0LnN0cmljdCA9IG9iamVjdEFzc2lnbihzdHJpY3QsIGFzc2VydCwge1xuICBlcXVhbDogYXNzZXJ0LnN0cmljdEVxdWFsLFxuICBkZWVwRXF1YWw6IGFzc2VydC5kZWVwU3RyaWN0RXF1YWwsXG4gIG5vdEVxdWFsOiBhc3NlcnQubm90U3RyaWN0RXF1YWwsXG4gIG5vdERlZXBFcXVhbDogYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbFxufSk7XG5hc3NlcnQuc3RyaWN0LnN0cmljdCA9IGFzc2VydC5zdHJpY3Q7XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkl0ZXJhYmxlID0gdm9pZCAwO1xudmFyIEl0ZXJhYmxlO1xuKGZ1bmN0aW9uIChJdGVyYWJsZSkge1xuICAgIGZ1bmN0aW9uIGlzKHRoaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGluZyAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0aGluZ1tTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgICBJdGVyYWJsZS5pcyA9IGlzO1xuICAgIGNvbnN0IF9lbXB0eSA9IE9iamVjdC5mcmVlemUoW10pO1xuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4gX2VtcHR5O1xuICAgIH1cbiAgICBJdGVyYWJsZS5lbXB0eSA9IGVtcHR5O1xuICAgIGZ1bmN0aW9uKiBzaW5nbGUoZWxlbWVudCkge1xuICAgICAgICB5aWVsZCBlbGVtZW50O1xuICAgIH1cbiAgICBJdGVyYWJsZS5zaW5nbGUgPSBzaW5nbGU7XG4gICAgZnVuY3Rpb24gZnJvbShpdGVyYWJsZSkge1xuICAgICAgICByZXR1cm4gaXRlcmFibGUgfHwgX2VtcHR5O1xuICAgIH1cbiAgICBJdGVyYWJsZS5mcm9tID0gZnJvbTtcbiAgICBmdW5jdGlvbiBpc0VtcHR5KGl0ZXJhYmxlKSB7XG4gICAgICAgIHJldHVybiAhaXRlcmFibGUgfHwgaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpLm5leHQoKS5kb25lID09PSB0cnVlO1xuICAgIH1cbiAgICBJdGVyYWJsZS5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgICBmdW5jdGlvbiBmaXJzdChpdGVyYWJsZSkge1xuICAgICAgICByZXR1cm4gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpLm5leHQoKS52YWx1ZTtcbiAgICB9XG4gICAgSXRlcmFibGUuZmlyc3QgPSBmaXJzdDtcbiAgICBmdW5jdGlvbiBzb21lKGl0ZXJhYmxlLCBwcmVkaWNhdGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBJdGVyYWJsZS5zb21lID0gc29tZTtcbiAgICBmdW5jdGlvbiBmaW5kKGl0ZXJhYmxlLCBwcmVkaWNhdGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgSXRlcmFibGUuZmluZCA9IGZpbmQ7XG4gICAgZnVuY3Rpb24qIGZpbHRlcihpdGVyYWJsZSwgcHJlZGljYXRlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBpdGVyYWJsZSkge1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgSXRlcmFibGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIGZ1bmN0aW9uKiBtYXAoaXRlcmFibGUsIGZuKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBpdGVyYWJsZSkge1xuICAgICAgICAgICAgeWllbGQgZm4oZWxlbWVudCwgaW5kZXgrKyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgSXRlcmFibGUubWFwID0gbWFwO1xuICAgIGZ1bmN0aW9uKiBjb25jYXQoLi4uaXRlcmFibGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlcmFibGUgb2YgaXRlcmFibGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEl0ZXJhYmxlLmNvbmNhdCA9IGNvbmNhdDtcbiAgICBmdW5jdGlvbiogY29uY2F0TmVzdGVkKGl0ZXJhYmxlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhYmxlIG9mIGl0ZXJhYmxlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBJdGVyYWJsZS5jb25jYXROZXN0ZWQgPSBjb25jYXROZXN0ZWQ7XG4gICAgZnVuY3Rpb24gcmVkdWNlKGl0ZXJhYmxlLCByZWR1Y2VyLCBpbml0aWFsVmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaXRlcmFibGUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcmVkdWNlcih2YWx1ZSwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBJdGVyYWJsZS5yZWR1Y2UgPSByZWR1Y2U7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYWJsZSBzbGljZSBvZiB0aGUgYXJyYXksIHdpdGggdGhlIHNhbWUgc2VtYW50aWNzIGFzIGBhcnJheS5zbGljZSgpYC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiogc2xpY2UoYXJyLCBmcm9tLCB0byA9IGFyci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGZyb20gPCAwKSB7XG4gICAgICAgICAgICBmcm9tICs9IGFyci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvIDwgMCkge1xuICAgICAgICAgICAgdG8gKz0gYXJyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0byA+IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvID0gYXJyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgZnJvbSA8IHRvOyBmcm9tKyspIHtcbiAgICAgICAgICAgIHlpZWxkIGFycltmcm9tXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBJdGVyYWJsZS5zbGljZSA9IHNsaWNlO1xuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIGBhdE1vc3RgIGVsZW1lbnRzIGZyb20gaXRlcmFibGUgYW5kIHJldHVybnMgdGhlIGNvbnN1bWVkIGVsZW1lbnRzLFxuICAgICAqIGFuZCBhbiBpdGVyYWJsZSBmb3IgdGhlIHJlc3Qgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvbnN1bWUoaXRlcmFibGUsIGF0TW9zdCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuICAgICAgICBjb25zdCBjb25zdW1lZCA9IFtdO1xuICAgICAgICBpZiAoYXRNb3N0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW2NvbnN1bWVkLCBpdGVyYWJsZV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXRNb3N0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAobmV4dC5kb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtjb25zdW1lZCwgSXRlcmFibGUuZW1wdHkoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdW1lZC5wdXNoKG5leHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY29uc3VtZWQsIHsgW1N5bWJvbC5pdGVyYXRvcl0oKSB7IHJldHVybiBpdGVyYXRvcjsgfSB9XTtcbiAgICB9XG4gICAgSXRlcmFibGUuY29uc3VtZSA9IGNvbnN1bWU7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBpdGVyYWJsZXMgYXJlIHRoZSBzYW1lIGxlbmd0aCBhbmQgYWxsIGl0ZW1zIGFyZVxuICAgICAqIGVxdWFsIHVzaW5nIHRoZSBjb21wYXJhdG9yIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiLCBjb21wYXJhdG9yID0gKGF0LCBidCkgPT4gYXQgPT09IGJ0KSB7XG4gICAgICAgIGNvbnN0IGFpID0gYVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGNvbnN0IGJpID0gYltTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBhbiA9IGFpLm5leHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGJuID0gYmkubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGFuLmRvbmUgIT09IGJuLmRvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhbi5kb25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghY29tcGFyYXRvcihhbi52YWx1ZSwgYm4udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEl0ZXJhYmxlLmVxdWFscyA9IGVxdWFscztcbn0pKEl0ZXJhYmxlID0gZXhwb3J0cy5JdGVyYWJsZSB8fCAoZXhwb3J0cy5JdGVyYWJsZSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MaW5rZWRMaXN0ID0gdm9pZCAwO1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5leHQgPSBOb2RlLlVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wcmV2ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgfVxufVxuTm9kZS5VbmRlZmluZWQgPSBuZXcgTm9kZSh1bmRlZmluZWQpO1xuY2xhc3MgTGlua2VkTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2xhc3QgPSBOb2RlLlVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0ID09PSBOb2RlLlVuZGVmaW5lZDtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5fZmlyc3Q7XG4gICAgICAgIHdoaWxlIChub2RlICE9PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIG5vZGUucHJldiA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICAgICAgbm9kZS5uZXh0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgICAgICBub2RlID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maXJzdCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9sYXN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgIH1cbiAgICB1bnNoaWZ0KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc2VydChlbGVtZW50LCBmYWxzZSk7XG4gICAgfVxuICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zZXJ0KGVsZW1lbnQsIHRydWUpO1xuICAgIH1cbiAgICBfaW5zZXJ0KGVsZW1lbnQsIGF0VGhlRW5kKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZShlbGVtZW50KTtcbiAgICAgICAgaWYgKHRoaXMuX2ZpcnN0ID09PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXRUaGVFbmQpIHtcbiAgICAgICAgICAgIC8vIHB1c2hcbiAgICAgICAgICAgIGNvbnN0IG9sZExhc3QgPSB0aGlzLl9sYXN0O1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IG5ld05vZGU7XG4gICAgICAgICAgICBuZXdOb2RlLnByZXYgPSBvbGRMYXN0O1xuICAgICAgICAgICAgb2xkTGFzdC5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVuc2hpZnRcbiAgICAgICAgICAgIGNvbnN0IG9sZEZpcnN0ID0gdGhpcy5fZmlyc3Q7XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IG5ld05vZGU7XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBvbGRGaXJzdDtcbiAgICAgICAgICAgIG9sZEZpcnN0LnByZXYgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NpemUgKz0gMTtcbiAgICAgICAgbGV0IGRpZFJlbW92ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkaWRSZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBkaWRSZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZShuZXdOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgc2hpZnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9maXJzdCA9PT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLl9maXJzdC5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlKHRoaXMuX2ZpcnN0KTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcG9wKCkge1xuICAgICAgICBpZiAodGhpcy5fbGFzdCA9PT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLl9sYXN0LmVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmUodGhpcy5fbGFzdCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9yZW1vdmUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5wcmV2ICE9PSBOb2RlLlVuZGVmaW5lZCAmJiBub2RlLm5leHQgIT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBtaWRkbGVcbiAgICAgICAgICAgIGNvbnN0IGFuY2hvciA9IG5vZGUucHJldjtcbiAgICAgICAgICAgIGFuY2hvci5uZXh0ID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXYgPSBhbmNob3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5wcmV2ID09PSBOb2RlLlVuZGVmaW5lZCAmJiBub2RlLm5leHQgPT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBvbmx5IG5vZGVcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLl9sYXN0ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5uZXh0ID09PSBOb2RlLlVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbGFzdFxuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHRoaXMuX2xhc3QucHJldjtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QubmV4dCA9IE5vZGUuVW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUucHJldiA9PT0gTm9kZS5VbmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IHRoaXMuX2ZpcnN0Lm5leHQ7XG4gICAgICAgICAgICB0aGlzLl9maXJzdC5wcmV2ID0gTm9kZS5VbmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uZVxuICAgICAgICB0aGlzLl9zaXplIC09IDE7XG4gICAgfVxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLl9maXJzdDtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT09IE5vZGUuVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB5aWVsZCBub2RlLmVsZW1lbnQ7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5MaW5rZWRMaXN0ID0gTGlua2VkTGlzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTGluZUFuZENvbHVtbkF3YXJlID0gZXhwb3J0cy5pbmRleE9mUGF0aCA9IGV4cG9ydHMuZ2V0RHJpdmVMZXR0ZXIgPSBleHBvcnRzLmhhc0RyaXZlTGV0dGVyID0gZXhwb3J0cy5pc1Jvb3RPckRyaXZlTGV0dGVyID0gZXhwb3J0cy5zYW5pdGl6ZUZpbGVQYXRoID0gZXhwb3J0cy5pc1dpbmRvd3NEcml2ZUxldHRlciA9IGV4cG9ydHMuaXNFcXVhbE9yUGFyZW50ID0gZXhwb3J0cy5pc0VxdWFsID0gZXhwb3J0cy5pc1ZhbGlkQmFzZW5hbWUgPSBleHBvcnRzLmlzVU5DID0gZXhwb3J0cy5nZXRSb290ID0gZXhwb3J0cy50b1Bvc2l4UGF0aCA9IGV4cG9ydHMudG9TbGFzaGVzID0gZXhwb3J0cy5pc1BhdGhTZXBhcmF0b3IgPSB2b2lkIDA7XG5jb25zdCBwbGF0Zm9ybV8xID0gcmVxdWlyZShcIi4vcGxhdGZvcm1cIik7XG5jb25zdCBzdHJpbmdzXzEgPSByZXF1aXJlKFwiLi9zdHJpbmdzXCIpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcIi4vcGF0aFwiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmZ1bmN0aW9uIGlzUGF0aFNlcGFyYXRvcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IDQ3IC8qIFNsYXNoICovIHx8IGNvZGUgPT09IDkyIC8qIEJhY2tzbGFzaCAqLztcbn1cbmV4cG9ydHMuaXNQYXRoU2VwYXJhdG9yID0gaXNQYXRoU2VwYXJhdG9yO1xuLyoqXG4gKiBUYWtlcyBhIFdpbmRvd3MgT1MgcGF0aCBhbmQgY2hhbmdlcyBiYWNrd2FyZCBzbGFzaGVzIHRvIGZvcndhcmQgc2xhc2hlcy5cbiAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgZG9uZSBmb3IgT1MgcGF0aHMgZnJvbSBXaW5kb3dzIChvciB1c2VyIHByb3ZpZGVkIHBhdGhzIHBvdGVudGlhbGx5IGZyb20gV2luZG93cykuXG4gKiBVc2luZyBpdCBvbiBhIExpbnV4IG9yIE1heE9TIHBhdGggbWlnaHQgY2hhbmdlIGl0LlxuICovXG5mdW5jdGlvbiB0b1NsYXNoZXMob3NQYXRoKSB7XG4gICAgcmV0dXJuIG9zUGF0aC5yZXBsYWNlKC9bXFxcXC9dL2csIHBhdGhfMS5wb3NpeC5zZXApO1xufVxuZXhwb3J0cy50b1NsYXNoZXMgPSB0b1NsYXNoZXM7XG4vKipcbiAqIFRha2VzIGEgV2luZG93cyBPUyBwYXRoICh1c2luZyBiYWNrd2FyZCBvciBmb3J3YXJkIHNsYXNoZXMpIGFuZCB0dXJucyBpdCBpbnRvIGEgcG9zaXggcGF0aDpcbiAqIC0gdHVybnMgYmFja3dhcmQgc2xhc2hlcyBpbnRvIGZvcndhcmQgc2xhc2hlc1xuICogLSBtYWtlcyBpdCBhYnNvbHV0ZSBpZiBpdCBzdGFydHMgd2l0aCBhIGRyaXZlIGxldHRlclxuICogVGhpcyBzaG91bGQgb25seSBiZSBkb25lIGZvciBPUyBwYXRocyBmcm9tIFdpbmRvd3MgKG9yIHVzZXIgcHJvdmlkZWQgcGF0aHMgcG90ZW50aWFsbHkgZnJvbSBXaW5kb3dzKS5cbiAqIFVzaW5nIGl0IG9uIGEgTGludXggb3IgTWF4T1MgcGF0aCBtaWdodCBjaGFuZ2UgaXQuXG4gKi9cbmZ1bmN0aW9uIHRvUG9zaXhQYXRoKG9zUGF0aCkge1xuICAgIGlmIChvc1BhdGguaW5kZXhPZignLycpID09PSAtMSkge1xuICAgICAgICBvc1BhdGggPSB0b1NsYXNoZXMob3NQYXRoKTtcbiAgICB9XG4gICAgaWYgKC9eW2EtekEtWl06KFxcL3wkKS8udGVzdChvc1BhdGgpKSB7IC8vIHN0YXJ0cyB3aXRoIGEgZHJpdmUgbGV0dGVyXG4gICAgICAgIG9zUGF0aCA9ICcvJyArIG9zUGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIG9zUGF0aDtcbn1cbmV4cG9ydHMudG9Qb3NpeFBhdGggPSB0b1Bvc2l4UGF0aDtcbi8qKlxuICogQ29tcHV0ZXMgdGhlIF9yb290XyB0aGlzIHBhdGgsIGxpa2UgYGdldFJvb3QoJ2M6XFxmaWxlcycpID09PSBjOlxcYCxcbiAqIGBnZXRSb290KCdmaWxlczovLy9maWxlcy9wYXRoJykgPT09IGZpbGVzOi8vL2AsXG4gKiBvciBgZ2V0Um9vdCgnXFxcXHNlcnZlclxcc2hhcmVzXFxwYXRoJykgPT09IFxcXFxzZXJ2ZXJcXHNoYXJlc1xcYFxuICovXG5mdW5jdGlvbiBnZXRSb290KHBhdGgsIHNlcCA9IHBhdGhfMS5wb3NpeC5zZXApIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBsZW4gPSBwYXRoLmxlbmd0aDtcbiAgICBjb25zdCBmaXJzdExldHRlciA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKGZpcnN0TGV0dGVyKSkge1xuICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdCgxKSkpIHtcbiAgICAgICAgICAgIC8vIFVOQyBjYW5kaWRhdGUgXFxcXGxvY2FsaG9zdFxcc2hhcmVzXFxkZGRcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgXl5eXl5eXl5eXl5eXl5eXl5eXlxuICAgICAgICAgICAgaWYgKCFpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KDIpKSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSAzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcG9zO1xuICAgICAgICAgICAgICAgIGZvciAoOyBwb3MgPCBsZW47IHBvcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgIT09IHBvcyAmJiAhaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdChwb3MgKyAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBwb3MgPCBsZW47IHBvcysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdChwb3MpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRoLnNsaWNlKDAsIHBvcyArIDEpIC8vIGNvbnN1bWUgdGhpcyBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXFxcL10vZywgc2VwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAvdXNlci9mYXJcbiAgICAgICAgLy8gXlxuICAgICAgICByZXR1cm4gc2VwO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1dpbmRvd3NEcml2ZUxldHRlcihmaXJzdExldHRlcikpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIHdpbmRvd3MgZHJpdmUgbGV0dGVyIGM6XFwgb3IgYzpcbiAgICAgICAgaWYgKHBhdGguY2hhckNvZGVBdCgxKSA9PT0gNTggLyogQ29sb24gKi8pIHtcbiAgICAgICAgICAgIGlmIChpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KDIpKSkge1xuICAgICAgICAgICAgICAgIC8vIEM6XFxmZmZcbiAgICAgICAgICAgICAgICAvLyBeXl5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZSgwLCAyKSArIHNlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEM6XG4gICAgICAgICAgICAgICAgLy8gXl5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZSgwLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgVVJJXG4gICAgLy8gc2NoZW1lOi8vYXV0aG9yaXR5L3BhdGhcbiAgICAvLyBeXl5eXl5eXl5eXl5eXl5eXl5eXG4gICAgbGV0IHBvcyA9IHBhdGguaW5kZXhPZignOi8vJyk7XG4gICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgICAgcG9zICs9IDM7IC8vIDMgLT4gXCI6Ly9cIi5sZW5ndGhcbiAgICAgICAgZm9yICg7IHBvcyA8IGxlbjsgcG9zKyspIHtcbiAgICAgICAgICAgIGlmIChpc1BhdGhTZXBhcmF0b3IocGF0aC5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgcG9zICsgMSk7IC8vIGNvbnN1bWUgdGhpcyBzZXBhcmF0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG5leHBvcnRzLmdldFJvb3QgPSBnZXRSb290O1xuLyoqXG4gKiBDaGVjayBpZiB0aGUgcGF0aCBmb2xsb3dzIHRoaXMgcGF0dGVybjogYFxcXFxob3N0bmFtZVxcc2hhcmVuYW1lYC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvZ2c0NjUzMDUuYXNweFxuICogQHJldHVybiBBIGJvb2xlYW4gaW5kaWNhdGlvbiBpZiB0aGUgcGF0aCBpcyBhIFVOQyBwYXRoLCBvbiBub25lLXdpbmRvd3NcbiAqIGFsd2F5cyBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gaXNVTkMocGF0aCkge1xuICAgIGlmICghcGxhdGZvcm1fMS5pc1dpbmRvd3MpIHtcbiAgICAgICAgLy8gVU5DIGlzIGEgd2luZG93cyBjb25jZXB0XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFwYXRoIHx8IHBhdGgubGVuZ3RoIDwgNSkge1xuICAgICAgICAvLyBhdCBsZWFzdCBcXFxcYVxcYlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChjb2RlICE9PSA5MiAvKiBCYWNrc2xhc2ggKi8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDEpO1xuICAgIGlmIChjb2RlICE9PSA5MiAvKiBCYWNrc2xhc2ggKi8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcG9zID0gMjtcbiAgICBjb25zdCBzdGFydCA9IHBvcztcbiAgICBmb3IgKDsgcG9zIDwgcGF0aC5sZW5ndGg7IHBvcysrKSB7XG4gICAgICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDkyIC8qIEJhY2tzbGFzaCAqLykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0ID09PSBwb3MpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KHBvcyArIDEpO1xuICAgIGlmIChpc05hTihjb2RlKSB8fCBjb2RlID09PSA5MiAvKiBCYWNrc2xhc2ggKi8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuaXNVTkMgPSBpc1VOQztcbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlsZW5hbWVcbmNvbnN0IFdJTkRPV1NfSU5WQUxJRF9GSUxFX0NIQVJTID0gL1tcXFxcLzpcXCpcXD9cIjw+XFx8XS9nO1xuY29uc3QgVU5JWF9JTlZBTElEX0ZJTEVfQ0hBUlMgPSAvW1xcXFwvXS9nO1xuY29uc3QgV0lORE9XU19GT1JCSURERU5fTkFNRVMgPSAvXihjb258cHJufGF1eHxjbG9ja1xcJHxudWx8bHB0WzAtOV18Y29tWzAtOV0pKFxcLiguKj8pKT8kL2k7XG5mdW5jdGlvbiBpc1ZhbGlkQmFzZW5hbWUobmFtZSwgaXNXaW5kb3dzT1MgPSBwbGF0Zm9ybV8xLmlzV2luZG93cykge1xuICAgIGNvbnN0IGludmFsaWRGaWxlQ2hhcnMgPSBpc1dpbmRvd3NPUyA/IFdJTkRPV1NfSU5WQUxJRF9GSUxFX0NIQVJTIDogVU5JWF9JTlZBTElEX0ZJTEVfQ0hBUlM7XG4gICAgaWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwIHx8IC9eXFxzKyQvLnRlc3QobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyByZXF1aXJlIGEgbmFtZSB0aGF0IGlzIG5vdCBqdXN0IHdoaXRlc3BhY2VcbiAgICB9XG4gICAgaW52YWxpZEZpbGVDaGFycy5sYXN0SW5kZXggPSAwOyAvLyB0aGUgaG9seSBncmFpbCBvZiBzb2Z0d2FyZSBkZXZlbG9wbWVudFxuICAgIGlmIChpbnZhbGlkRmlsZUNoYXJzLnRlc3QobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBjaGVjayBmb3IgY2VydGFpbiBpbnZhbGlkIGZpbGUgY2hhcmFjdGVyc1xuICAgIH1cbiAgICBpZiAoaXNXaW5kb3dzT1MgJiYgV0lORE9XU19GT1JCSURERU5fTkFNRVMudGVzdChuYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGNoZWNrIGZvciBjZXJ0YWluIGludmFsaWQgZmlsZSBuYW1lc1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gJy4nIHx8IG5hbWUgPT09ICcuLicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBjaGVjayBmb3IgcmVzZXJ2ZWQgdmFsdWVzXG4gICAgfVxuICAgIGlmIChpc1dpbmRvd3NPUyAmJiBuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFdpbmRvd3M6IGZpbGUgY2Fubm90IGVuZCB3aXRoIGEgXCIuXCJcbiAgICB9XG4gICAgaWYgKGlzV2luZG93c09TICYmIG5hbWUubGVuZ3RoICE9PSBuYW1lLnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBXaW5kb3dzOiBmaWxlIGNhbm5vdCBlbmQgd2l0aCBhIHdoaXRlc3BhY2VcbiAgICB9XG4gICAgaWYgKG5hbWUubGVuZ3RoID4gMjU1KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gbW9zdCBmaWxlIHN5c3RlbXMgZG8gbm90IGFsbG93IGZpbGVzID4gMjU1IGxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuaXNWYWxpZEJhc2VuYW1lID0gaXNWYWxpZEJhc2VuYW1lO1xuZnVuY3Rpb24gaXNFcXVhbChwYXRoQSwgcGF0aEIsIGlnbm9yZUNhc2UpIHtcbiAgICBjb25zdCBpZGVudGl0eUVxdWFscyA9IChwYXRoQSA9PT0gcGF0aEIpO1xuICAgIGlmICghaWdub3JlQ2FzZSB8fCBpZGVudGl0eUVxdWFscykge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHlFcXVhbHM7XG4gICAgfVxuICAgIGlmICghcGF0aEEgfHwgIXBhdGhCKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBzdHJpbmdzXzEuZXF1YWxzSWdub3JlQ2FzZSkocGF0aEEsIHBhdGhCKTtcbn1cbmV4cG9ydHMuaXNFcXVhbCA9IGlzRXF1YWw7XG5mdW5jdGlvbiBpc0VxdWFsT3JQYXJlbnQoYmFzZSwgcGFyZW50Q2FuZGlkYXRlLCBpZ25vcmVDYXNlLCBzZXBhcmF0b3IgPSBwYXRoXzEuc2VwKSB7XG4gICAgaWYgKGJhc2UgPT09IHBhcmVudENhbmRpZGF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFiYXNlIHx8ICFwYXJlbnRDYW5kaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFyZW50Q2FuZGlkYXRlLmxlbmd0aCA+IGJhc2UubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgY29uc3QgYmVnaW5zV2l0aCA9ICgwLCBzdHJpbmdzXzEuc3RhcnRzV2l0aElnbm9yZUNhc2UpKGJhc2UsIHBhcmVudENhbmRpZGF0ZSk7XG4gICAgICAgIGlmICghYmVnaW5zV2l0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRDYW5kaWRhdGUubGVuZ3RoID09PSBiYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIHNhbWUgcGF0aCwgZGlmZmVyZW50IGNhc2luZ1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZXBPZmZzZXQgPSBwYXJlbnRDYW5kaWRhdGUubGVuZ3RoO1xuICAgICAgICBpZiAocGFyZW50Q2FuZGlkYXRlLmNoYXJBdChwYXJlbnRDYW5kaWRhdGUubGVuZ3RoIC0gMSkgPT09IHNlcGFyYXRvcikge1xuICAgICAgICAgICAgc2VwT2Zmc2V0LS07IC8vIGFkanVzdCB0aGUgZXhwZWN0ZWQgc2VwIG9mZnNldCBpbiBjYXNlIG91ciBjYW5kaWRhdGUgYWxyZWFkeSBlbmRzIGluIHNlcGFyYXRvciBjaGFyYWN0ZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFzZS5jaGFyQXQoc2VwT2Zmc2V0KSA9PT0gc2VwYXJhdG9yO1xuICAgIH1cbiAgICBpZiAocGFyZW50Q2FuZGlkYXRlLmNoYXJBdChwYXJlbnRDYW5kaWRhdGUubGVuZ3RoIC0gMSkgIT09IHNlcGFyYXRvcikge1xuICAgICAgICBwYXJlbnRDYW5kaWRhdGUgKz0gc2VwYXJhdG9yO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZS5pbmRleE9mKHBhcmVudENhbmRpZGF0ZSkgPT09IDA7XG59XG5leHBvcnRzLmlzRXF1YWxPclBhcmVudCA9IGlzRXF1YWxPclBhcmVudDtcbmZ1bmN0aW9uIGlzV2luZG93c0RyaXZlTGV0dGVyKGNoYXIwKSB7XG4gICAgcmV0dXJuIGNoYXIwID49IDY1IC8qIEEgKi8gJiYgY2hhcjAgPD0gOTAgLyogWiAqLyB8fCBjaGFyMCA+PSA5NyAvKiBhICovICYmIGNoYXIwIDw9IDEyMiAvKiB6ICovO1xufVxuZXhwb3J0cy5pc1dpbmRvd3NEcml2ZUxldHRlciA9IGlzV2luZG93c0RyaXZlTGV0dGVyO1xuZnVuY3Rpb24gc2FuaXRpemVGaWxlUGF0aChjYW5kaWRhdGUsIGN3ZCkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogYWxsb3cgdG8gb3BlbiBhIGRyaXZlIGxldHRlciB3aXRob3V0IHRyYWlsaW5nIGJhY2tzbGFzaFxuICAgIGlmIChwbGF0Zm9ybV8xLmlzV2luZG93cyAmJiBjYW5kaWRhdGUuZW5kc1dpdGgoJzonKSkge1xuICAgICAgICBjYW5kaWRhdGUgKz0gcGF0aF8xLnNlcDtcbiAgICB9XG4gICAgLy8gRW5zdXJlIGFic29sdXRlXG4gICAgaWYgKCEoMCwgcGF0aF8xLmlzQWJzb2x1dGUpKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgY2FuZGlkYXRlID0gKDAsIHBhdGhfMS5qb2luKShjd2QsIGNhbmRpZGF0ZSk7XG4gICAgfVxuICAgIC8vIEVuc3VyZSBub3JtYWxpemVkXG4gICAgY2FuZGlkYXRlID0gKDAsIHBhdGhfMS5ub3JtYWxpemUpKGNhbmRpZGF0ZSk7XG4gICAgLy8gRW5zdXJlIG5vIHRyYWlsaW5nIHNsYXNoL2JhY2tzbGFzaFxuICAgIGlmIChwbGF0Zm9ybV8xLmlzV2luZG93cykge1xuICAgICAgICBjYW5kaWRhdGUgPSAoMCwgc3RyaW5nc18xLnJ0cmltKShjYW5kaWRhdGUsIHBhdGhfMS5zZXApO1xuICAgICAgICAvLyBTcGVjaWFsIGNhc2U6IGFsbG93IHRvIG9wZW4gZHJpdmUgcm9vdCAoJ0M6XFwnKVxuICAgICAgICBpZiAoY2FuZGlkYXRlLmVuZHNXaXRoKCc6JykpIHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZSArPSBwYXRoXzEuc2VwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYW5kaWRhdGUgPSAoMCwgc3RyaW5nc18xLnJ0cmltKShjYW5kaWRhdGUsIHBhdGhfMS5zZXApO1xuICAgICAgICAvLyBTcGVjaWFsIGNhc2U6IGFsbG93IHRvIG9wZW4gcm9vdCAoJy8nKVxuICAgICAgICBpZiAoIWNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgY2FuZGlkYXRlID0gcGF0aF8xLnNlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FuZGlkYXRlO1xufVxuZXhwb3J0cy5zYW5pdGl6ZUZpbGVQYXRoID0gc2FuaXRpemVGaWxlUGF0aDtcbmZ1bmN0aW9uIGlzUm9vdE9yRHJpdmVMZXR0ZXIocGF0aCkge1xuICAgIGNvbnN0IHBhdGhOb3JtYWxpemVkID0gKDAsIHBhdGhfMS5ub3JtYWxpemUpKHBhdGgpO1xuICAgIGlmIChwbGF0Zm9ybV8xLmlzV2luZG93cykge1xuICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhc0RyaXZlTGV0dGVyKHBhdGhOb3JtYWxpemVkKSAmJlxuICAgICAgICAgICAgKHBhdGgubGVuZ3RoID09PSAyIHx8IHBhdGhOb3JtYWxpemVkLmNoYXJDb2RlQXQoMikgPT09IDkyIC8qIEJhY2tzbGFzaCAqLyk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoTm9ybWFsaXplZCA9PT0gcGF0aF8xLnBvc2l4LnNlcDtcbn1cbmV4cG9ydHMuaXNSb290T3JEcml2ZUxldHRlciA9IGlzUm9vdE9yRHJpdmVMZXR0ZXI7XG5mdW5jdGlvbiBoYXNEcml2ZUxldHRlcihwYXRoKSB7XG4gICAgaWYgKHBsYXRmb3JtXzEuaXNXaW5kb3dzKSB7XG4gICAgICAgIHJldHVybiBpc1dpbmRvd3NEcml2ZUxldHRlcihwYXRoLmNoYXJDb2RlQXQoMCkpICYmIHBhdGguY2hhckNvZGVBdCgxKSA9PT0gNTggLyogQ29sb24gKi87XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaGFzRHJpdmVMZXR0ZXIgPSBoYXNEcml2ZUxldHRlcjtcbmZ1bmN0aW9uIGdldERyaXZlTGV0dGVyKHBhdGgpIHtcbiAgICByZXR1cm4gaGFzRHJpdmVMZXR0ZXIocGF0aCkgPyBwYXRoWzBdIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXREcml2ZUxldHRlciA9IGdldERyaXZlTGV0dGVyO1xuZnVuY3Rpb24gaW5kZXhPZlBhdGgocGF0aCwgY2FuZGlkYXRlLCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKGNhbmRpZGF0ZS5sZW5ndGggPiBwYXRoLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChwYXRoID09PSBjYW5kaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGNhbmRpZGF0ZSk7XG59XG5leHBvcnRzLmluZGV4T2ZQYXRoID0gaW5kZXhPZlBhdGg7XG5mdW5jdGlvbiBwYXJzZUxpbmVBbmRDb2x1bW5Bd2FyZShyYXdQYXRoKSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSByYXdQYXRoLnNwbGl0KCc6Jyk7IC8vIEM6XFxmaWxlLnR4dDo8bGluZT46PGNvbHVtbj5cbiAgICBsZXQgcGF0aCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgbGluZSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgY29sdW1uID0gdW5kZWZpbmVkO1xuICAgIHNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnRBc051bWJlciA9IE51bWJlcihzZWdtZW50KTtcbiAgICAgICAgaWYgKCEoMCwgdHlwZXNfMS5pc051bWJlcikoc2VnbWVudEFzTnVtYmVyKSkge1xuICAgICAgICAgICAgcGF0aCA9ICEhcGF0aCA/IFtwYXRoLCBzZWdtZW50XS5qb2luKCc6JykgOiBzZWdtZW50OyAvLyBhIGNvbG9uIGNhbiB3ZWxsIGJlIHBhcnQgb2YgYSBwYXRoIChlLmcuIEM6XFwuLi4pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsaW5lID0gc2VnbWVudEFzTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbHVtbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb2x1bW4gPSBzZWdtZW50QXNOdW1iZXI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtYXQgZm9yIGAtLWdvdG9gIHNob3VsZCBiZTogYEZJTEU6TElORSg6Q09MVU1OKWAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgbGluZTogbGluZSAhPT0gdW5kZWZpbmVkID8gbGluZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgY29sdW1uOiBjb2x1bW4gIT09IHVuZGVmaW5lZCA/IGNvbHVtbiA6IGxpbmUgIT09IHVuZGVmaW5lZCA/IDEgOiB1bmRlZmluZWQgLy8gaWYgd2UgaGF2ZSBhIGxpbmUsIG1ha2Ugc3VyZSBjb2x1bW4gaXMgYWxzbyBzZXRcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJzZUxpbmVBbmRDb2x1bW5Bd2FyZSA9IHBhcnNlTGluZUFuZENvbHVtbkF3YXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubmV4dFRpY2sgPSBleHBvcnRzLnBsYXRmb3JtID0gZXhwb3J0cy5lbnYgPSBleHBvcnRzLmN3ZCA9IHZvaWQgMDtcbmNvbnN0IHBsYXRmb3JtXzEgPSByZXF1aXJlKFwiLi9wbGF0Zm9ybVwiKTtcbmxldCBzYWZlUHJvY2Vzcztcbi8vIE5hdGl2ZSBzYW5kYm94IGVudmlyb25tZW50XG5pZiAodHlwZW9mIHBsYXRmb3JtXzEuZ2xvYmFscy52c2NvZGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwbGF0Zm9ybV8xLmdsb2JhbHMudnNjb2RlLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc2FuZGJveFByb2Nlc3MgPSBwbGF0Zm9ybV8xLmdsb2JhbHMudnNjb2RlLnByb2Nlc3M7XG4gICAgc2FmZVByb2Nlc3MgPSB7XG4gICAgICAgIGdldCBwbGF0Zm9ybSgpIHsgcmV0dXJuIHNhbmRib3hQcm9jZXNzLnBsYXRmb3JtOyB9LFxuICAgICAgICBnZXQgZW52KCkgeyByZXR1cm4gc2FuZGJveFByb2Nlc3MuZW52OyB9LFxuICAgICAgICBjd2QoKSB7IHJldHVybiBzYW5kYm94UHJvY2Vzcy5jd2QoKTsgfSxcbiAgICAgICAgbmV4dFRpY2soY2FsbGJhY2spIHsgcmV0dXJuICgwLCBwbGF0Zm9ybV8xLnNldEltbWVkaWF0ZSkoY2FsbGJhY2spOyB9XG4gICAgfTtcbn1cbi8vIE5hdGl2ZSBub2RlLmpzIGVudmlyb25tZW50XG5lbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzYWZlUHJvY2VzcyA9IHtcbiAgICAgICAgZ2V0IHBsYXRmb3JtKCkgeyByZXR1cm4gcHJvY2Vzcy5wbGF0Zm9ybTsgfSxcbiAgICAgICAgZ2V0IGVudigpIHsgcmV0dXJuIHByb2Nlc3MuZW52OyB9LFxuICAgICAgICBjd2QoKSB7IHJldHVybiBwcm9jZXNzLmVudlsnVlNDT0RFX0NXRCddIHx8IHByb2Nlc3MuY3dkKCk7IH0sXG4gICAgICAgIG5leHRUaWNrKGNhbGxiYWNrKSB7IHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKTsgfVxuICAgIH07XG59XG4vLyBXZWIgZW52aXJvbm1lbnRcbmVsc2Uge1xuICAgIHNhZmVQcm9jZXNzID0ge1xuICAgICAgICAvLyBTdXBwb3J0ZWRcbiAgICAgICAgZ2V0IHBsYXRmb3JtKCkgeyByZXR1cm4gcGxhdGZvcm1fMS5pc1dpbmRvd3MgPyAnd2luMzInIDogcGxhdGZvcm1fMS5pc01hY2ludG9zaCA/ICdkYXJ3aW4nIDogJ2xpbnV4JzsgfSxcbiAgICAgICAgbmV4dFRpY2soY2FsbGJhY2spIHsgcmV0dXJuICgwLCBwbGF0Zm9ybV8xLnNldEltbWVkaWF0ZSkoY2FsbGJhY2spOyB9LFxuICAgICAgICAvLyBVbnN1cHBvcnRlZFxuICAgICAgICBnZXQgZW52KCkgeyByZXR1cm4ge307IH0sXG4gICAgICAgIGN3ZCgpIHsgcmV0dXJuICcvJzsgfVxuICAgIH07XG59XG4vKipcbiAqIFByb3ZpZGVzIHNhZmUgYWNjZXNzIHRvIHRoZSBgY3dkYCBwcm9wZXJ0eSBpbiBub2RlLmpzLCBzYW5kYm94ZWQgb3Igd2ViXG4gKiBlbnZpcm9ubWVudHMuXG4gKlxuICogTm90ZTogaW4gd2ViLCB0aGlzIHByb3BlcnR5IGlzIGhhcmRjb2RlZCB0byBiZSBgL2AuXG4gKi9cbmV4cG9ydHMuY3dkID0gc2FmZVByb2Nlc3MuY3dkO1xuLyoqXG4gKiBQcm92aWRlcyBzYWZlIGFjY2VzcyB0byB0aGUgYGVudmAgcHJvcGVydHkgaW4gbm9kZS5qcywgc2FuZGJveGVkIG9yIHdlYlxuICogZW52aXJvbm1lbnRzLlxuICpcbiAqIE5vdGU6IGluIHdlYiwgdGhpcyBwcm9wZXJ0eSBpcyBoYXJkY29kZWQgdG8gYmUgYHt9YC5cbiAqL1xuZXhwb3J0cy5lbnYgPSBzYWZlUHJvY2Vzcy5lbnY7XG4vKipcbiAqIFByb3ZpZGVzIHNhZmUgYWNjZXNzIHRvIHRoZSBgcGxhdGZvcm1gIHByb3BlcnR5IGluIG5vZGUuanMsIHNhbmRib3hlZCBvciB3ZWJcbiAqIGVudmlyb25tZW50cy5cbiAqL1xuZXhwb3J0cy5wbGF0Zm9ybSA9IHNhZmVQcm9jZXNzLnBsYXRmb3JtO1xuLyoqXG4gKiBQcm92aWRlcyBzYWZlIGFjY2VzcyB0byB0aGUgYG5leHRUaWNrYCBtZXRob2QgaW4gbm9kZS5qcywgc2FuZGJveGVkIG9yIHdlYlxuICogZW52aXJvbm1lbnRzLlxuICovXG5leHBvcnRzLm5leHRUaWNrID0gc2FmZVByb2Nlc3MubmV4dFRpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hc3NlcnROZXZlciA9IGV4cG9ydHMuTm90SW1wbGVtZW50ZWRQcm94eSA9IGV4cG9ydHMud2l0aFVuZGVmaW5lZEFzTnVsbCA9IGV4cG9ydHMud2l0aE51bGxBc1VuZGVmaW5lZCA9IGV4cG9ydHMuY3JlYXRlUHJveHlPYmplY3QgPSBleHBvcnRzLmdldEFsbE1ldGhvZE5hbWVzID0gZXhwb3J0cy5nZXRBbGxQcm9wZXJ0eU5hbWVzID0gZXhwb3J0cy52YWxpZGF0ZUNvbnN0cmFpbnQgPSBleHBvcnRzLnZhbGlkYXRlQ29uc3RyYWludHMgPSBleHBvcnRzLmFyZUZ1bmN0aW9ucyA9IGV4cG9ydHMuaXNGdW5jdGlvbiA9IGV4cG9ydHMuaXNFbXB0eU9iamVjdCA9IGV4cG9ydHMuYXNzZXJ0QWxsRGVmaW5lZCA9IGV4cG9ydHMuYXNzZXJ0SXNEZWZpbmVkID0gZXhwb3J0cy5hc3NlcnRUeXBlID0gZXhwb3J0cy5pc1VuZGVmaW5lZE9yTnVsbCA9IGV4cG9ydHMuaXNEZWZpbmVkID0gZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGV4cG9ydHMuaXNCb29sZWFuID0gZXhwb3J0cy5pc0l0ZXJhYmxlID0gZXhwb3J0cy5pc051bWJlciA9IGV4cG9ydHMuaXNPYmplY3QgPSBleHBvcnRzLmlzU3RyaW5nQXJyYXkgPSBleHBvcnRzLmlzU3RyaW5nID0gZXhwb3J0cy5pc0FycmF5ID0gdm9pZCAwO1xuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXIgaXMgYSBKYXZhU2NyaXB0IEFycmF5IG9yIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheShhcnJheSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgU3RyaW5nIG9yIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgQXJyYXkgYW5kIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgaXMgYSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuZXZlcnkoZWxlbSA9PiBpc1N0cmluZyhlbGVtKSk7XG59XG5leHBvcnRzLmlzU3RyaW5nQXJyYXkgPSBpc1N0cmluZ0FycmF5O1xuLyoqXG4gKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyIGlzIG9mIHR5cGUgYG9iamVjdGAgYnV0ICoqbm90KipcbiAqXHRgbnVsbGAsIGFuIGBhcnJheWAsIGEgYHJlZ2V4cGAsIG5vciBhIGBkYXRlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgLy8gVGhlIG1ldGhvZCBjYW4ndCBkbyBhIHR5cGUgY2FzdCBzaW5jZSB0aGVyZSBhcmUgdHlwZSAobGlrZSBzdHJpbmdzKSB3aGljaFxuICAgIC8vIGFyZSBzdWJjbGFzc2VzIG9mIGFueSBwdXQgbm90IHBvc2l0dmVseSBtYXRjaGVkIGJ5IHRoZSBmdW5jdGlvbi4gSGVuY2UgdHlwZVxuICAgIC8vIG5hcnJvd2luZyByZXN1bHRzIGluIHdyb25nIHJlc3VsdHMuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG4gICAgICAgICYmIG9iaiAhPT0gbnVsbFxuICAgICAgICAmJiAhQXJyYXkuaXNBcnJheShvYmopXG4gICAgICAgICYmICEob2JqIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICAmJiAhKG9iaiBpbnN0YW5jZW9mIERhdGUpO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLyoqXG4gKiBJbiAqKmNvbnRyYXN0KiogdG8ganVzdCBjaGVja2luZyBgdHlwZW9mYCB0aGlzIHdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yIGBOYU5gLlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyIGlzIGEgSmF2YVNjcmlwdCBOdW1iZXIgb3Igbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdudW1iZXInICYmICFpc05hTihvYmopKTtcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyIGlzIGFuIEl0ZXJhYmxlLCBjYXN0aW5nIHRvIHRoZSBnaXZlbiBnZW5lcmljXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmFibGUob2JqKSB7XG4gICAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmpbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNJdGVyYWJsZSA9IGlzSXRlcmFibGU7XG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHBhcmFtZXRlciBpcyBhIEphdmFTY3JpcHQgQm9vbGVhbiBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgICByZXR1cm4gKG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlKTtcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLlxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKTtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyIGlzIGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZChhcmcpIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkT3JOdWxsKGFyZyk7XG59XG5leHBvcnRzLmlzRGVmaW5lZCA9IGlzRGVmaW5lZDtcbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBudWxsLlxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbChvYmopIHtcbiAgICByZXR1cm4gKGlzVW5kZWZpbmVkKG9iaikgfHwgb2JqID09PSBudWxsKTtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWRPck51bGwgPSBpc1VuZGVmaW5lZE9yTnVsbDtcbmZ1bmN0aW9uIGFzc2VydFR5cGUoY29uZGl0aW9uLCB0eXBlKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHR5cGUgPyBgVW5leHBlY3RlZCB0eXBlLCBleHBlY3RlZCAnJHt0eXBlfSdgIDogJ1VuZXhwZWN0ZWQgdHlwZScpO1xuICAgIH1cbn1cbmV4cG9ydHMuYXNzZXJ0VHlwZSA9IGFzc2VydFR5cGU7XG4vKipcbiAqIEFzc2VydHMgdGhhdCB0aGUgYXJndW1lbnQgcGFzc2VkIGluIGlzIG5laXRoZXIgdW5kZWZpbmVkIG5vciBudWxsLlxuICovXG5mdW5jdGlvbiBhc3NlcnRJc0RlZmluZWQoYXJnKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGFyZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3NlcnRpb24gRmFpbGVkOiBhcmd1bWVudCBpcyB1bmRlZmluZWQgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gYXJnO1xufVxuZXhwb3J0cy5hc3NlcnRJc0RlZmluZWQgPSBhc3NlcnRJc0RlZmluZWQ7XG5mdW5jdGlvbiBhc3NlcnRBbGxEZWZpbmVkKC4uLmFyZ3MpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXJnID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGFyZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXNzZXJ0aW9uIEZhaWxlZDogYXJndW1lbnQgYXQgaW5kZXggJHtpfSBpcyB1bmRlZmluZWQgb3IgbnVsbGApO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGFyZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmFzc2VydEFsbERlZmluZWQgPSBhc3NlcnRBbGxEZWZpbmVkO1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXIgaXMgYW4gZW1wdHkgSmF2YVNjcmlwdCBPYmplY3Qgb3Igbm90LlxuICovXG5mdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuICAgIGlmICghaXNPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmlzRW1wdHlPYmplY3QgPSBpc0VtcHR5T2JqZWN0O1xuLyoqXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXIgaXMgYSBKYXZhU2NyaXB0IEZ1bmN0aW9uIG9yIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycyBpcyBhcmUgSmF2YVNjcmlwdCBGdW5jdGlvbiBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIGFyZUZ1bmN0aW9ucyguLi5vYmplY3RzKSB7XG4gICAgcmV0dXJuIG9iamVjdHMubGVuZ3RoID4gMCAmJiBvYmplY3RzLmV2ZXJ5KGlzRnVuY3Rpb24pO1xufVxuZXhwb3J0cy5hcmVGdW5jdGlvbnMgPSBhcmVGdW5jdGlvbnM7XG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnN0cmFpbnRzKGFyZ3MsIGNvbnN0cmFpbnRzKSB7XG4gICAgY29uc3QgbGVuID0gTWF0aC5taW4oYXJncy5sZW5ndGgsIGNvbnN0cmFpbnRzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YWxpZGF0ZUNvbnN0cmFpbnQoYXJnc1tpXSwgY29uc3RyYWludHNbaV0pO1xuICAgIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVDb25zdHJhaW50cyA9IHZhbGlkYXRlQ29uc3RyYWludHM7XG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnN0cmFpbnQoYXJnLCBjb25zdHJhaW50KSB7XG4gICAgaWYgKGlzU3RyaW5nKGNvbnN0cmFpbnQpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnICE9PSBjb25zdHJhaW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFyZ3VtZW50IGRvZXMgbm90IG1hdGNoIGNvbnN0cmFpbnQ6IHR5cGVvZiAke2NvbnN0cmFpbnR9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNGdW5jdGlvbihjb25zdHJhaW50KSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGFyZyBpbnN0YW5jZW9mIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkT3JOdWxsKGFyZykgJiYgYXJnLmNvbnN0cnVjdG9yID09PSBjb25zdHJhaW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQubGVuZ3RoID09PSAxICYmIGNvbnN0cmFpbnQuY2FsbCh1bmRlZmluZWQsIGFyZykgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFyZ3VtZW50IGRvZXMgbm90IG1hdGNoIG9uZSBvZiB0aGVzZSBjb25zdHJhaW50czogYXJnIGluc3RhbmNlb2YgY29uc3RyYWludCwgYXJnLmNvbnN0cnVjdG9yID09PSBjb25zdHJhaW50LCBub3IgY29uc3RyYWludChhcmcpID09PSB0cnVlYCk7XG4gICAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUNvbnN0cmFpbnQgPSB2YWxpZGF0ZUNvbnN0cmFpbnQ7XG5mdW5jdGlvbiBnZXRBbGxQcm9wZXJ0eU5hbWVzKG9iaikge1xuICAgIGxldCByZXMgPSBbXTtcbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICB3aGlsZSAoT2JqZWN0LnByb3RvdHlwZSAhPT0gcHJvdG8pIHtcbiAgICAgICAgcmVzID0gcmVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykpO1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5leHBvcnRzLmdldEFsbFByb3BlcnR5TmFtZXMgPSBnZXRBbGxQcm9wZXJ0eU5hbWVzO1xuZnVuY3Rpb24gZ2V0QWxsTWV0aG9kTmFtZXMob2JqKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBnZXRBbGxQcm9wZXJ0eU5hbWVzKG9iaikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG1ldGhvZHMucHVzaChwcm9wKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kcztcbn1cbmV4cG9ydHMuZ2V0QWxsTWV0aG9kTmFtZXMgPSBnZXRBbGxNZXRob2ROYW1lcztcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5T2JqZWN0KG1ldGhvZE5hbWVzLCBpbnZva2UpIHtcbiAgICBjb25zdCBjcmVhdGVQcm94eU1ldGhvZCA9IChtZXRob2QpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICAgICAgcmV0dXJuIGludm9rZShtZXRob2QsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgbWV0aG9kTmFtZSBvZiBtZXRob2ROYW1lcykge1xuICAgICAgICByZXN1bHRbbWV0aG9kTmFtZV0gPSBjcmVhdGVQcm94eU1ldGhvZChtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuY3JlYXRlUHJveHlPYmplY3QgPSBjcmVhdGVQcm94eU9iamVjdDtcbi8qKlxuICogQ29udmVydHMgbnVsbCB0byB1bmRlZmluZWQsIHBhc3NlcyBhbGwgb3RoZXIgdmFsdWVzIHRocm91Z2guXG4gKi9cbmZ1bmN0aW9uIHdpdGhOdWxsQXNVbmRlZmluZWQoeCkge1xuICAgIHJldHVybiB4ID09PSBudWxsID8gdW5kZWZpbmVkIDogeDtcbn1cbmV4cG9ydHMud2l0aE51bGxBc1VuZGVmaW5lZCA9IHdpdGhOdWxsQXNVbmRlZmluZWQ7XG4vKipcbiAqIENvbnZlcnRzIHVuZGVmaW5lZCB0byBudWxsLCBwYXNzZXMgYWxsIG90aGVyIHZhbHVlcyB0aHJvdWdoLlxuICovXG5mdW5jdGlvbiB3aXRoVW5kZWZpbmVkQXNOdWxsKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHg7XG59XG5leHBvcnRzLndpdGhVbmRlZmluZWRBc051bGwgPSB3aXRoVW5kZWZpbmVkQXNOdWxsO1xuZnVuY3Rpb24gTm90SW1wbGVtZW50ZWRQcm94eShuYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3h5KHt9LCB7XG4gICAgICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IEltcGxlbWVudGVkOiAke25hbWV9LT4ke1N0cmluZyhwcm9wKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLk5vdEltcGxlbWVudGVkUHJveHkgPSBOb3RJbXBsZW1lbnRlZFByb3h5O1xuZnVuY3Rpb24gYXNzZXJ0TmV2ZXIodmFsdWUsIG1lc3NhZ2UgPSAnVW5yZWFjaGFibGUnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuZXhwb3J0cy5hc3NlcnROZXZlciA9IGFzc2VydE5ldmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyEgZ2V0UGF0aEZyb21BbWRNb2R1bGUgYXNGaWxlVXJpXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRmlsZUFjY2VzcyA9IGV4cG9ydHMuUmVtb3RlQXV0aG9yaXRpZXMgPSBleHBvcnRzLlNjaGVtYXMgPSB2b2lkIDA7XG5jb25zdCB1cmlfMSA9IHJlcXVpcmUoXCIuL3VyaVwiKTtcbmNvbnN0IHBsYXRmb3JtID0gcmVxdWlyZShcIi4vcGxhdGZvcm1cIik7XG5jb25zdCBhbWRfMSA9IHJlcXVpcmUoXCIuLi9hbWRcIik7XG52YXIgU2NoZW1hcztcbihmdW5jdGlvbiAoU2NoZW1hcykge1xuICAgIC8qKlxuICAgICAqIEEgc2NoZW1hIHRoYXQgaXMgdXNlZCBmb3IgbW9kZWxzIHRoYXQgZXhpc3QgaW4gbWVtb3J5XG4gICAgICogb25seSBhbmQgdGhhdCBoYXZlIG5vIGNvcnJlc3BvbmRlbmNlIG9uIGEgc2VydmVyIG9yIHN1Y2guXG4gICAgICovXG4gICAgU2NoZW1hcy5pbk1lbW9yeSA9ICdpbm1lbW9yeSc7XG4gICAgLyoqXG4gICAgICogQSBzY2hlbWEgdGhhdCBpcyB1c2VkIGZvciBzZXR0aW5nIGZpbGVzXG4gICAgICovXG4gICAgU2NoZW1hcy52c2NvZGUgPSAndnNjb2RlJztcbiAgICAvKipcbiAgICAgKiBBIHNjaGVtYSB0aGF0IGlzIHVzZWQgZm9yIGludGVybmFsIHByaXZhdGUgZmlsZXNcbiAgICAgKi9cbiAgICBTY2hlbWFzLmludGVybmFsID0gJ3ByaXZhdGUnO1xuICAgIC8qKlxuICAgICAqIEEgd2Fsay10aHJvdWdoIGRvY3VtZW50LlxuICAgICAqL1xuICAgIFNjaGVtYXMud2Fsa1Rocm91Z2ggPSAnd2Fsa1Rocm91Z2gnO1xuICAgIC8qKlxuICAgICAqIEFuIGVtYmVkZGVkIGNvZGUgc25pcHBldC5cbiAgICAgKi9cbiAgICBTY2hlbWFzLndhbGtUaHJvdWdoU25pcHBldCA9ICd3YWxrVGhyb3VnaFNuaXBwZXQnO1xuICAgIFNjaGVtYXMuaHR0cCA9ICdodHRwJztcbiAgICBTY2hlbWFzLmh0dHBzID0gJ2h0dHBzJztcbiAgICBTY2hlbWFzLmZpbGUgPSAnZmlsZSc7XG4gICAgU2NoZW1hcy5tYWlsdG8gPSAnbWFpbHRvJztcbiAgICBTY2hlbWFzLnVudGl0bGVkID0gJ3VudGl0bGVkJztcbiAgICBTY2hlbWFzLmRhdGEgPSAnZGF0YSc7XG4gICAgU2NoZW1hcy5jb21tYW5kID0gJ2NvbW1hbmQnO1xuICAgIFNjaGVtYXMudnNjb2RlUmVtb3RlID0gJ3ZzY29kZS1yZW1vdGUnO1xuICAgIFNjaGVtYXMudnNjb2RlUmVtb3RlUmVzb3VyY2UgPSAndnNjb2RlLXJlbW90ZS1yZXNvdXJjZSc7XG4gICAgU2NoZW1hcy51c2VyRGF0YSA9ICd2c2NvZGUtdXNlcmRhdGEnO1xuICAgIFNjaGVtYXMudnNjb2RlQ3VzdG9tRWRpdG9yID0gJ3ZzY29kZS1jdXN0b20tZWRpdG9yJztcbiAgICBTY2hlbWFzLnZzY29kZU5vdGVib29rID0gJ3ZzY29kZS1ub3RlYm9vayc7XG4gICAgU2NoZW1hcy52c2NvZGVOb3RlYm9va0NlbGwgPSAndnNjb2RlLW5vdGVib29rLWNlbGwnO1xuICAgIFNjaGVtYXMudnNjb2RlTm90ZWJvb2tDZWxsTWV0YWRhdGEgPSAndnNjb2RlLW5vdGVib29rLWNlbGwtbWV0YWRhdGEnO1xuICAgIFNjaGVtYXMudnNjb2RlTm90ZWJvb2tDZWxsT3V0cHV0ID0gJ3ZzY29kZS1ub3RlYm9vay1jZWxsLW91dHB1dCc7XG4gICAgU2NoZW1hcy52c2NvZGVJbnRlcmFjdGl2ZSA9ICd2c2NvZGUtaW50ZXJhY3RpdmUnO1xuICAgIFNjaGVtYXMudnNjb2RlSW50ZXJhY3RpdmVJbnB1dCA9ICd2c2NvZGUtaW50ZXJhY3RpdmUtaW5wdXQnO1xuICAgIFNjaGVtYXMudnNjb2RlU2V0dGluZ3MgPSAndnNjb2RlLXNldHRpbmdzJztcbiAgICBTY2hlbWFzLnZzY29kZVdvcmtzcGFjZVRydXN0ID0gJ3ZzY29kZS13b3Jrc3BhY2UtdHJ1c3QnO1xuICAgIFNjaGVtYXMudnNjb2RlVGVybWluYWwgPSAndnNjb2RlLXRlcm1pbmFsJztcbiAgICBTY2hlbWFzLndlYnZpZXdQYW5lbCA9ICd3ZWJ2aWV3LXBhbmVsJztcbiAgICAvKipcbiAgICAgKiBTY2hlbWUgdXNlZCBmb3IgbG9hZGluZyB0aGUgd3JhcHBlciBodG1sIGFuZCBzY3JpcHQgaW4gd2Vidmlld3MuXG4gICAgICovXG4gICAgU2NoZW1hcy52c2NvZGVXZWJ2aWV3ID0gJ3ZzY29kZS13ZWJ2aWV3JztcbiAgICAvKipcbiAgICAgKiBTY2hlbWUgdXNlZCBmb3IgZXh0ZW5zaW9uIHBhZ2VzXG4gICAgICovXG4gICAgU2NoZW1hcy5leHRlbnNpb24gPSAnZXh0ZW5zaW9uJztcbiAgICAvKipcbiAgICAgKiBTY2hlbWUgdXNlZCBhcyBhIHJlcGxhY2VtZW50IG9mIGBmaWxlYCBzY2hlbWUgdG8gbG9hZFxuICAgICAqIGZpbGVzIHdpdGggb3VyIGN1c3RvbSBwcm90b2NvbCBoYW5kbGVyIChkZXNrdG9wIG9ubHkpLlxuICAgICAqL1xuICAgIFNjaGVtYXMudnNjb2RlRmlsZVJlc291cmNlID0gJ3ZzY29kZS1maWxlJztcbiAgICAvKipcbiAgICAgKiBTY2hlbWUgdXNlZCBmb3IgdGVtcG9yYXJ5IHJlc291cmNlc1xuICAgICAqL1xuICAgIFNjaGVtYXMudG1wID0gJ3RtcCc7XG59KShTY2hlbWFzID0gZXhwb3J0cy5TY2hlbWFzIHx8IChleHBvcnRzLlNjaGVtYXMgPSB7fSkpO1xuY2xhc3MgUmVtb3RlQXV0aG9yaXRpZXNJbXBsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faG9zdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9wb3J0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25Ub2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9wcmVmZXJyZWRXZWJTY2hlbWEgPSAnaHR0cCc7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gbnVsbDtcbiAgICB9XG4gICAgc2V0UHJlZmVycmVkV2ViU2NoZW1hKHNjaGVtYSkge1xuICAgICAgICB0aGlzLl9wcmVmZXJyZWRXZWJTY2hlbWEgPSBzY2hlbWE7XG4gICAgfVxuICAgIHNldERlbGVnYXRlKGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgfVxuICAgIHNldChhdXRob3JpdHksIGhvc3QsIHBvcnQpIHtcbiAgICAgICAgdGhpcy5faG9zdHNbYXV0aG9yaXR5XSA9IGhvc3Q7XG4gICAgICAgIHRoaXMuX3BvcnRzW2F1dGhvcml0eV0gPSBwb3J0O1xuICAgIH1cbiAgICBzZXRDb25uZWN0aW9uVG9rZW4oYXV0aG9yaXR5LCBjb25uZWN0aW9uVG9rZW4pIHtcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblRva2Vuc1thdXRob3JpdHldID0gY29ubmVjdGlvblRva2VuO1xuICAgIH1cbiAgICByZXdyaXRlKHVyaSkge1xuICAgICAgICBpZiAodGhpcy5fZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZSh1cmkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF1dGhvcml0eSA9IHVyaS5hdXRob3JpdHk7XG4gICAgICAgIGxldCBob3N0ID0gdGhpcy5faG9zdHNbYXV0aG9yaXR5XTtcbiAgICAgICAgaWYgKGhvc3QgJiYgaG9zdC5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgICAgICAgICBob3N0ID0gYFske2hvc3R9XWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9ydCA9IHRoaXMuX3BvcnRzW2F1dGhvcml0eV07XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25Ub2tlbiA9IHRoaXMuX2Nvbm5lY3Rpb25Ub2tlbnNbYXV0aG9yaXR5XTtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gYHBhdGg9JHtlbmNvZGVVUklDb21wb25lbnQodXJpLnBhdGgpfWA7XG4gICAgICAgIGlmICh0eXBlb2YgY29ubmVjdGlvblRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcXVlcnkgKz0gYCZ0a249JHtlbmNvZGVVUklDb21wb25lbnQoY29ubmVjdGlvblRva2VuKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmlfMS5VUkkuZnJvbSh7XG4gICAgICAgICAgICBzY2hlbWU6IHBsYXRmb3JtLmlzV2ViID8gdGhpcy5fcHJlZmVycmVkV2ViU2NoZW1hIDogU2NoZW1hcy52c2NvZGVSZW1vdGVSZXNvdXJjZSxcbiAgICAgICAgICAgIGF1dGhvcml0eTogYCR7aG9zdH06JHtwb3J0fWAsXG4gICAgICAgICAgICBwYXRoOiBgL3ZzY29kZS1yZW1vdGUtcmVzb3VyY2VgLFxuICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZW1vdGVBdXRob3JpdGllcyA9IG5ldyBSZW1vdGVBdXRob3JpdGllc0ltcGwoKTtcbmNsYXNzIEZpbGVBY2Nlc3NJbXBsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5GQUxMQkFDS19BVVRIT1JJVFkgPSAndnNjb2RlLWFwcCc7XG4gICAgfVxuICAgIGFzQnJvd3NlclVyaSh1cmlPck1vZHVsZSwgbW9kdWxlSWRUb1VybCwgX19mb3JjZUNvZGVGaWxlVXJpKSB7XG4gICAgICAgIGNvbnN0IHVyaSA9IHRoaXMudG9VcmkodXJpT3JNb2R1bGUsIG1vZHVsZUlkVG9VcmwpO1xuICAgICAgICAvLyBIYW5kbGUgcmVtb3RlIFVSSXMgdmlhIGBSZW1vdGVBdXRob3JpdGllc2BcbiAgICAgICAgaWYgKHVyaS5zY2hlbWUgPT09IFNjaGVtYXMudnNjb2RlUmVtb3RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5SZW1vdGVBdXRob3JpdGllcy5yZXdyaXRlKHVyaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbnZlcnRUb1ZTQ29kZUZpbGVSZXNvdXJjZSA9IGZhbHNlO1xuICAgICAgICAvLyBPbmx5IGNvbnZlcnQgdGhlIFVSSSBpZiB3ZSBhcmUgaW4gYSBuYXRpdmUgY29udGV4dCBhbmQgaXQgaGFzIGBmaWxlOmAgc2NoZW1lXG4gICAgICAgIC8vIGFuZCB3ZSBoYXZlIGV4cGxpY2l0bHkgZW5hYmxlZCB0aGUgY29udmVyc2lvbiAoc2FuZGJveCwgb3IgVlNDT0RFX0JST1dTRVJfQ09ERV9MT0FESU5HKVxuICAgICAgICBpZiAocGxhdGZvcm0uaXNOYXRpdmUgJiYgKF9fZm9yY2VDb2RlRmlsZVVyaSB8fCBwbGF0Zm9ybS5pc1ByZWZlcnJpbmdCcm93c2VyQ29kZUxvYWQpICYmIHVyaS5zY2hlbWUgPT09IFNjaGVtYXMuZmlsZSkge1xuICAgICAgICAgICAgY29udmVydFRvVlNDb2RlRmlsZVJlc291cmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHNvIGNvbnZlcnQgYGZpbGU6YCBVUklzIGluIHRoZSB3ZWIgd29ya2VyIGV4dGVuc2lvbiBob3N0IChydW5uaW5nIGluIGRlc2t0b3ApIGNhc2VcbiAgICAgICAgaWYgKHVyaS5zY2hlbWUgPT09IFNjaGVtYXMuZmlsZSAmJiB0eXBlb2YgcGxhdGZvcm0uZ2xvYmFscy5pbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nICYmIHBsYXRmb3JtLmdsb2JhbHMub3JpZ2luID09PSAndnNjb2RlLWZpbGU6Ly92c2NvZGUtYXBwJykge1xuICAgICAgICAgICAgY29udmVydFRvVlNDb2RlRmlsZVJlc291cmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udmVydFRvVlNDb2RlRmlsZVJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJpLndpdGgoe1xuICAgICAgICAgICAgICAgIHNjaGVtZTogU2NoZW1hcy52c2NvZGVGaWxlUmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBwcm92aWRlIGFuIGF1dGhvcml0eSBoZXJlIHNvIHRoYXQgaXQgY2FuIHNlcnZlXG4gICAgICAgICAgICAgICAgLy8gYXMgb3JpZ2luIGZvciBuZXR3b3JrIGFuZCBsb2FkaW5nIG1hdHRlcnMgaW4gY2hyb21pdW0uXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIFVSSSBpcyBub3QgY29taW5nIHdpdGggYW4gYXV0aG9yaXR5IGFscmVhZHksIHdlXG4gICAgICAgICAgICAgICAgLy8gYWRkIG91ciBvd25cbiAgICAgICAgICAgICAgICBhdXRob3JpdHk6IHVyaS5hdXRob3JpdHkgfHwgdGhpcy5GQUxMQkFDS19BVVRIT1JJVFksXG4gICAgICAgICAgICAgICAgcXVlcnk6IG51bGwsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQ6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmk7XG4gICAgfVxuICAgIGFzRmlsZVVyaSh1cmlPck1vZHVsZSwgbW9kdWxlSWRUb1VybCkge1xuICAgICAgICBpZiAodHlwZW9mIHVyaU9yTW9kdWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHVyaV8xLlVSSS5maWxlKCgwLCBhbWRfMS5nZXRQYXRoRnJvbUFtZE1vZHVsZSkocmVxdWlyZSwgdXJpT3JNb2R1bGUpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmkgPSB0aGlzLnRvVXJpKHVyaU9yTW9kdWxlLCBtb2R1bGVJZFRvVXJsKTtcbiAgICAgICAgLy8gT25seSBjb252ZXJ0IHRoZSBVUkkgaWYgaXQgaXMgYHZzY29kZS1maWxlOmAgc2NoZW1lXG4gICAgICAgIGlmICh1cmkuc2NoZW1lID09PSBTY2hlbWFzLnZzY29kZUZpbGVSZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVyaS53aXRoKHtcbiAgICAgICAgICAgICAgICBzY2hlbWU6IFNjaGVtYXMuZmlsZSxcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHByZXNlcnZlIHRoZSBgYXV0aG9yaXR5YCBpZiBpdCBpcyBkaWZmZXJlbnQgZnJvbVxuICAgICAgICAgICAgICAgIC8vIG91ciBmYWxsYmFjayBhdXRob3JpdHkuIFRoaXMgZW5zdXJlcyB3ZSBwcm9wZXJseSBwcmVzZXJ2ZVxuICAgICAgICAgICAgICAgIC8vIFdpbmRvd3MgVU5DIHBhdGhzIHRoYXQgY29tZSB3aXRoIHRoZWlyIG93biBhdXRob3JpdHkuXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5OiB1cmkuYXV0aG9yaXR5ICE9PSB0aGlzLkZBTExCQUNLX0FVVEhPUklUWSA/IHVyaS5hdXRob3JpdHkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBudWxsLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50OiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJpO1xuICAgIH1cbiAgICB0b1VyaSh1cmlPck1vZHVsZSwgbW9kdWxlSWRUb1VybCkge1xuICAgICAgICBpZiAodXJpXzEuVVJJLmlzVXJpKHVyaU9yTW9kdWxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVyaU9yTW9kdWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmlfMS5VUkkucGFyc2UobW9kdWxlSWRUb1VybC50b1VybCh1cmlPck1vZHVsZSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuRmlsZUFjY2VzcyA9IG5ldyBGaWxlQWNjZXNzSW1wbCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyQW5kR2V0QW1kSW1hZ2VVUkwgPSBleHBvcnRzLmdldFVyaUZyb21BbWRNb2R1bGUgPSBleHBvcnRzLmdldFBhdGhGcm9tQW1kTW9kdWxlID0gdm9pZCAwO1xuY29uc3QgdXJpXzEgPSByZXF1aXJlKFwiLi9iYXNlL3VyaVwiKTtcbmNvbnN0IHBKb2luID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKCdwYXRoJykucG9zaXguam9pbiguLi5hcmdzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhcmdzLmpvaW4oJy8nKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXFwvezIsfS9nLCAnLycpO1xuICAgIH1cbn07XG5jb25zdCByZXNvdXJjZXNfMSA9IHJlcXVpcmUoXCIuL2Jhc2UvcmVzb3VyY2VzXCIpO1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgdnNFZGl0b3JDb25maWcgPSBnbG9iYWwudnNFZGl0b3JDb25maWcgfHwge1xuICAgIGVkaXRvclJvb3RQYXRoOiAnJyxcbn07XG5jb25zdCBUcmFuc2Zvcm1zID0gW1xuICAgIFsndnMvd29ya2JlbmNoL2NvbnRyaWIvZGVidWcvYnJvd3Nlci9tZWRpYS8nLCAocCwgcikgPT4gcEpvaW4odnNFZGl0b3JDb25maWcuZWRpdG9yUm9vdFBhdGgsICdzdGF0aWMvdnMvZGVidWcvJywgci5zdWJzdHIocC5sZW5ndGgpKV0sXG4gICAgWydib290c3RyYXAtZm9yaycsIChwLCByKSA9PiBwSm9pbih2c0VkaXRvckNvbmZpZy5lZGl0b3JSb290UGF0aCwgJ3NyYycsIHIpXSxcbiAgICBbJ3ZzL3dvcmtiZW5jaC9jb250cmliL2V4dGVybmFsVGVybWluYWwvbm9kZS8nLCAocCwgcikgPT4gcEpvaW4odnNFZGl0b3JDb25maWcuZWRpdG9yUm9vdFBhdGgsICdzcmMnLCByKV0sXG4gICAgWyhyKSA9PiByID09PSAnJywgKHAsIHIpID0+IHBKb2luKHZzRWRpdG9yQ29uZmlnLmVkaXRvclJvb3RQYXRoLCAnc3JjJywgcildLFxuICAgIFsndnMvYmFzZS9ub2RlLycsIChwLCByKSA9PiBwSm9pbih2c0VkaXRvckNvbmZpZy5lZGl0b3JSb290UGF0aCwgJ3NyYycsIHIpXSxcbl07XG5mdW5jdGlvbiBnZXRQYXRoRnJvbUFtZE1vZHVsZShyZXF1aXJlZm4sIHJlbGF0aXZlUGF0aCkge1xuICAgIGlmICghdnNFZGl0b3JDb25maWcuZWRpdG9yUm9vdFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd2c0VkaXRvckNvbmZpZy5lZGl0b3JSb290UGF0aCBub3Qgc2V0Jyk7XG4gICAgfVxuICAgIC8vIHRocm93IG5ldyBFcnJvcignZ2V0UGF0aEZyb21BbWRNb2R1bGUgY2Fubm90IGJlIGltcGxlbWVudGVkIScpXG4gICAgbGV0IHRyYW5zZm9ybWVkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBrIG9mIFRyYW5zZm9ybXMpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Yga1swXSA9PT0gJ2Z1bmN0aW9uJyAmJiBrWzBdKHJlbGF0aXZlUGF0aCkpIHx8ICh0eXBlb2Yga1swXSA9PT0gJ3N0cmluZycgJiYgcmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgoa1swXSkpKSB7XG4gICAgICAgICAgICByZWxhdGl2ZVBhdGggPSBrWzFdKGtbMF0sIHJlbGF0aXZlUGF0aCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUT0RPOiDmnIDnu4ggYXBwIOeahOi3r+W+hFxuICAgIC8vIGNvbnNvbGUubG9nKHBKb2luKHZzRWRpdG9yQ29uZmlnLmVkaXRvclJvb3RQYXRoLCAnc3JjJywgcmVsYXRpdmVQYXRoKS50b1N0cmluZygpKVxuICAgIHJldHVybiB0cmFuc2Zvcm1lZCA/IHJlbGF0aXZlUGF0aC50b1N0cmluZygpIDogcEpvaW4odnNFZGl0b3JDb25maWcuZWRpdG9yUm9vdFBhdGgsICdzcmMnLCByZWxhdGl2ZVBhdGgpLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmdldFBhdGhGcm9tQW1kTW9kdWxlID0gZ2V0UGF0aEZyb21BbWRNb2R1bGU7XG5mdW5jdGlvbiBnZXRVcmlGcm9tQW1kTW9kdWxlKHJlcXVpcmVmbiwgcmVsYXRpdmVQYXRoKSB7XG4gICAgcmV0dXJuIHVyaV8xLlVSSS5wYXJzZShnZXRQYXRoRnJvbUFtZE1vZHVsZShyZXF1aXJlZm4sIHJlbGF0aXZlUGF0aCkpO1xufVxuZXhwb3J0cy5nZXRVcmlGcm9tQW1kTW9kdWxlID0gZ2V0VXJpRnJvbUFtZE1vZHVsZTtcbi8qKlxuICogUmVmZXJlbmNlIGEgcmVzb3VyY2UgdGhhdCBtaWdodCBiZSBpbmxpbmVkLlxuICogRG8gbm90IGlubGluZSBpY29ucyB0aGF0IHdpbGwgYmUgdXNlZCBieSB0aGUgbmF0aXZlIG1hYyB0b3VjaGJhci5cbiAqIERvIG5vdCByZW5hbWUgdGhpcyBtZXRob2QgdW5sZXNzIHlvdSBhZG9wdCB0aGUgYnVpbGQgc2NyaXB0cy5cbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJBbmRHZXRBbWRJbWFnZVVSTChhYnNvbHV0ZVBhdGgpIHtcbiAgICBpZiAoIXZzRWRpdG9yQ29uZmlnLmVkaXRvclJvb3RQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndnNFZGl0b3JDb25maWcuZWRpdG9yUm9vdFBhdGggbm90IHNldCcpO1xuICAgIH1cbiAgICBpZiAoYWJzb2x1dGVQYXRoLnN0YXJ0c1dpdGgoJ3ZzLycpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlcmUgbWlnaHQgYmUgYW4gaW52YWxpZCB1cmkgdXNpbmcgcmVnaXN0ZXJBbmRHZXRBbWRJbWFnZVVSTCgpLCBwbGVhc2UgY29ycmVjdCBpdCcpO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIHJlc291cmNlc18xLmpvaW5QYXRoKSh1cmlfMS5VUkkuZmlsZSh2c0VkaXRvckNvbmZpZy5lZGl0b3JSb290UGF0aCksIGFic29sdXRlUGF0aCkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMucmVnaXN0ZXJBbmRHZXRBbWRJbWFnZVVSTCA9IHJlZ2lzdGVyQW5kR2V0QW1kSW1hZ2VVUkw7XG4vLyBleHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9hZGVyU3RhdHMge1xuLy8gICBhYnN0cmFjdCBnZXQgYW1kTG9hZCgpOiBbc3RyaW5nLCBudW1iZXJdW107XG4vLyAgIGFic3RyYWN0IGdldCBhbWRJbnZva2UoKTogW3N0cmluZywgbnVtYmVyXVtdO1xuLy8gICBhYnN0cmFjdCBnZXQgbm9kZVJlcXVpcmUoKTogW3N0cmluZywgbnVtYmVyXVtdO1xuLy8gICBhYnN0cmFjdCBnZXQgbm9kZUV2YWwoKTogW3N0cmluZywgbnVtYmVyXVtdO1xuLy8gICBhYnN0cmFjdCBnZXQgbm9kZVJlcXVpcmVUb3RhbCgpOiBudW1iZXI7XG4vLyAgIHN0YXRpYyBnZXQoKTogTG9hZGVyU3RhdHMge1xuLy8gICAgIGNvbnN0IGFtZExvYWRTY3JpcHQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuLy8gICAgIGNvbnN0IGFtZEludm9rZUZhY3RvcnkgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuLy8gICAgIGNvbnN0IG5vZGVSZXF1aXJlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbi8vICAgICBjb25zdCBub2RlRXZhbCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4vLyAgICAgZnVuY3Rpb24gbWFyayhtYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4sIHN0YXQ6IExvYWRlckV2ZW50KSB7XG4vLyAgICAgICBpZiAobWFwLmhhcyhzdGF0LmRldGFpbCkpIHtcbi8vICAgICAgICAgLy8gY29uc29sZS53YXJuKCdCQUQgZXZlbnRzLCBET1VCTEUgc3RhcnQnLCBzdGF0KTtcbi8vICAgICAgICAgLy8gbWFwLmRlbGV0ZShzdGF0LmRldGFpbCk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cbi8vICAgICAgIG1hcC5zZXQoc3RhdC5kZXRhaWwsIC1zdGF0LnRpbWVzdGFtcCk7XG4vLyAgICAgfVxuLy8gICAgIGZ1bmN0aW9uIGRpZmYobWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+LCBzdGF0OiBMb2FkZXJFdmVudCkge1xuLy8gICAgICAgbGV0IGR1cmF0aW9uID0gbWFwLmdldChzdGF0LmRldGFpbCk7XG4vLyAgICAgICBpZiAoIWR1cmF0aW9uKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUud2FybignQkFEIGV2ZW50cywgZW5kIFdJVEhPVVQgc3RhcnQnLCBzdGF0KTtcbi8vICAgICAgICAgLy8gbWFwLmRlbGV0ZShzdGF0LmRldGFpbCk7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICAgIH1cbi8vICAgICAgIGlmIChkdXJhdGlvbiA+PSAwKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUud2FybignQkFEIGV2ZW50cywgRE9VQkxFIGVuZCcsIHN0YXQpO1xuLy8gICAgICAgICAvLyBtYXAuZGVsZXRlKHN0YXQuZGV0YWlsKTtcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgfVxuLy8gICAgICAgbWFwLnNldChzdGF0LmRldGFpbCwgZHVyYXRpb24gKyBzdGF0LnRpbWVzdGFtcCk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHN0YXRzID0gbWVyZ2VTb3J0KHJlcXVpcmUuZ2V0U3RhdHMoKS5zbGljZSgwKSwgKGEsIGIpID0+IGEudGltZXN0YW1wIC0gYi50aW1lc3RhbXApO1xuLy8gICAgIGZvciAoY29uc3Qgc3RhdCBvZiBzdGF0cykge1xuLy8gICAgICAgc3dpdGNoIChzdGF0LnR5cGUpIHtcbi8vICAgICAgICAgY2FzZSBMb2FkZXJFdmVudFR5cGUuQmVnaW5Mb2FkaW5nU2NyaXB0OlxuLy8gICAgICAgICAgIG1hcmsoYW1kTG9hZFNjcmlwdCwgc3RhdCk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgTG9hZGVyRXZlbnRUeXBlLkVuZExvYWRpbmdTY3JpcHRPSzpcbi8vICAgICAgICAgY2FzZSBMb2FkZXJFdmVudFR5cGUuRW5kTG9hZGluZ1NjcmlwdEVycm9yOlxuLy8gICAgICAgICAgIGRpZmYoYW1kTG9hZFNjcmlwdCwgc3RhdCk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgTG9hZGVyRXZlbnRUeXBlLkJlZ2luSW52b2tlRmFjdG9yeTpcbi8vICAgICAgICAgICBtYXJrKGFtZEludm9rZUZhY3RvcnksIHN0YXQpO1xuLy8gICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlIExvYWRlckV2ZW50VHlwZS5FbmRJbnZva2VGYWN0b3J5OlxuLy8gICAgICAgICAgIGRpZmYoYW1kSW52b2tlRmFjdG9yeSwgc3RhdCk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgTG9hZGVyRXZlbnRUeXBlLk5vZGVCZWdpbk5hdGl2ZVJlcXVpcmU6XG4vLyAgICAgICAgICAgbWFyayhub2RlUmVxdWlyZSwgc3RhdCk7XG4vLyAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgTG9hZGVyRXZlbnRUeXBlLk5vZGVFbmROYXRpdmVSZXF1aXJlOlxuLy8gICAgICAgICAgIGRpZmYobm9kZVJlcXVpcmUsIHN0YXQpO1xuLy8gICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlIExvYWRlckV2ZW50VHlwZS5Ob2RlQmVnaW5FdmFsdWF0aW5nU2NyaXB0OlxuLy8gICAgICAgICAgIG1hcmsobm9kZUV2YWwsIHN0YXQpO1xuLy8gICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlIExvYWRlckV2ZW50VHlwZS5Ob2RlRW5kRXZhbHVhdGluZ1NjcmlwdDpcbi8vICAgICAgICAgICBkaWZmKG5vZGVFdmFsLCBzdGF0KTtcbi8vICAgICAgICAgICBicmVhaztcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgbGV0IG5vZGVSZXF1aXJlVG90YWwgPSAwO1xuLy8gICAgIG5vZGVSZXF1aXJlLmZvckVhY2godmFsdWUgPT4gbm9kZVJlcXVpcmVUb3RhbCArPSB2YWx1ZSk7XG4vLyAgICAgZnVuY3Rpb24gdG8yZEFycmF5KG1hcDogTWFwPHN0cmluZywgbnVtYmVyPik6IFtzdHJpbmcsIG51bWJlcl1bXSB7XG4vLyAgICAgICBsZXQgcmVzOiBbc3RyaW5nLCBudW1iZXJdW10gPSBbXTtcbi8vICAgICAgIG1hcC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHJlcy5wdXNoKFtpbmRleCwgdmFsdWVdKSk7XG4vLyAgICAgICByZXR1cm4gcmVzO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgYW1kTG9hZDogdG8yZEFycmF5KGFtZExvYWRTY3JpcHQpLFxuLy8gICAgICAgYW1kSW52b2tlOiB0bzJkQXJyYXkoYW1kSW52b2tlRmFjdG9yeSksXG4vLyAgICAgICBub2RlUmVxdWlyZTogdG8yZEFycmF5KG5vZGVSZXF1aXJlKSxcbi8vICAgICAgIG5vZGVFdmFsOiB0bzJkQXJyYXkobm9kZUV2YWwpLFxuLy8gICAgICAgbm9kZVJlcXVpcmVUb3RhbFxuLy8gICAgIH07XG4vLyAgIH1cbi8vICAgc3RhdGljIHRvTWFya2Rvd25UYWJsZShoZWFkZXI6IHN0cmluZ1tdLCByb3dzOiBBcnJheTxBcnJheTx7IHRvU3RyaW5nKCk6IHN0cmluZyB9IHwgdW5kZWZpbmVkPj4pOiBzdHJpbmcge1xuLy8gICAgIGxldCByZXN1bHQgPSAnJztcbi8vICAgICBsZXQgbGVuZ3RoczogbnVtYmVyW10gPSBbXTtcbi8vICAgICBoZWFkZXIuZm9yRWFjaCgoY2VsbCwgY2kpID0+IHtcbi8vICAgICAgIGxlbmd0aHNbY2ldID0gY2VsbC5sZW5ndGg7XG4vLyAgICAgfSk7XG4vLyAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4vLyAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY2kpID0+IHtcbi8vICAgICAgICAgaWYgKHR5cGVvZiBjZWxsID09PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgICAgIGNlbGwgPSByb3dbY2ldID0gJy0nO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnN0IGxlbiA9IGNlbGwudG9TdHJpbmcoKS5sZW5ndGg7XG4vLyAgICAgICAgIGxlbmd0aHNbY2ldID0gTWF0aC5tYXgobGVuLCBsZW5ndGhzW2NpXSk7XG4vLyAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vICAgICAvLyBoZWFkZXJcbi8vICAgICBoZWFkZXIuZm9yRWFjaCgoY2VsbCwgY2kpID0+IHsgcmVzdWx0ICs9IGB8ICR7Y2VsbCArICcgJy5yZXBlYXQobGVuZ3Roc1tjaV0gLSBjZWxsLnRvU3RyaW5nKCkubGVuZ3RoKX0gYDsgfSk7XG4vLyAgICAgcmVzdWx0ICs9ICd8XFxuJztcbi8vICAgICBoZWFkZXIuZm9yRWFjaCgoX2NlbGwsIGNpKSA9PiB7IHJlc3VsdCArPSBgfCAkeyctJy5yZXBlYXQobGVuZ3Roc1tjaV0pfSBgOyB9KTtcbi8vICAgICByZXN1bHQgKz0gJ3xcXG4nO1xuLy8gICAgIC8vIGNlbGxzXG4vLyAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4vLyAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY2kpID0+IHtcbi8vICAgICAgICAgaWYgKHR5cGVvZiBjZWxsICE9PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgICAgIHJlc3VsdCArPSBgfCAke2NlbGwgKyAnICcucmVwZWF0KGxlbmd0aHNbY2ldIC0gY2VsbC50b1N0cmluZygpLmxlbmd0aCl9IGA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0pO1xuLy8gICAgICAgcmVzdWx0ICs9ICd8XFxuJztcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyB9XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSAzMzsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSVJlcG9ydGVyU2VydmljZSA9IGV4cG9ydHMuUmVwb3J0MTM2MTNBY3Rpb24gPSBleHBvcnRzLlJlcG9ydDIzMDk5RXhwb3N1cmUgPSBleHBvcnRzLlJlcG9ydDIzMDk5QWN0aW9uVHlwZSA9IGV4cG9ydHMuUmVwb3J0MjMwOTlQYWdlVHlwZSA9IHZvaWQgMDtcbmNvbnN0IHNlcnZpY2VfYmFzZV8xID0gcmVxdWlyZShcInNlcnZpY2UtYmFzZVwiKTtcbnZhciBSZXBvcnQyMzA5OVBhZ2VUeXBlO1xuKGZ1bmN0aW9uIChSZXBvcnQyMzA5OVBhZ2VUeXBlKSB7XG4gICAgUmVwb3J0MjMwOTlQYWdlVHlwZVtSZXBvcnQyMzA5OVBhZ2VUeXBlW1wiU3VnZ2VzdExpc3RcIl0gPSAxOV0gPSBcIlN1Z2dlc3RMaXN0XCI7XG4gICAgUmVwb3J0MjMwOTlQYWdlVHlwZVtSZXBvcnQyMzA5OVBhZ2VUeXBlW1wiUGFuZWxcIl0gPSAyMF0gPSBcIlBhbmVsXCI7XG59KShSZXBvcnQyMzA5OVBhZ2VUeXBlID0gZXhwb3J0cy5SZXBvcnQyMzA5OVBhZ2VUeXBlIHx8IChleHBvcnRzLlJlcG9ydDIzMDk5UGFnZVR5cGUgPSB7fSkpO1xudmFyIFJlcG9ydDIzMDk5QWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoUmVwb3J0MjMwOTlBY3Rpb25UeXBlKSB7XG4gICAgUmVwb3J0MjMwOTlBY3Rpb25UeXBlW1JlcG9ydDIzMDk5QWN0aW9uVHlwZVtcIkV4cG9zdXJlXCJdID0gMV0gPSBcIkV4cG9zdXJlXCI7XG59KShSZXBvcnQyMzA5OUFjdGlvblR5cGUgPSBleHBvcnRzLlJlcG9ydDIzMDk5QWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5SZXBvcnQyMzA5OUFjdGlvblR5cGUgPSB7fSkpO1xudmFyIFJlcG9ydDIzMDk5RXhwb3N1cmU7XG4oZnVuY3Rpb24gKFJlcG9ydDIzMDk5RXhwb3N1cmUpIHtcbiAgICBSZXBvcnQyMzA5OUV4cG9zdXJlW1JlcG9ydDIzMDk5RXhwb3N1cmVbXCJFeHBvc3VyZVwiXSA9IDJdID0gXCJFeHBvc3VyZVwiO1xuICAgIFJlcG9ydDIzMDk5RXhwb3N1cmVbUmVwb3J0MjMwOTlFeHBvc3VyZVtcIkNsaWNrXCJdID0gMV0gPSBcIkNsaWNrXCI7XG59KShSZXBvcnQyMzA5OUV4cG9zdXJlID0gZXhwb3J0cy5SZXBvcnQyMzA5OUV4cG9zdXJlIHx8IChleHBvcnRzLlJlcG9ydDIzMDk5RXhwb3N1cmUgPSB7fSkpO1xudmFyIFJlcG9ydDEzNjEzQWN0aW9uO1xuKGZ1bmN0aW9uIChSZXBvcnQxMzYxM0FjdGlvbikge1xuICAgIFJlcG9ydDEzNjEzQWN0aW9uW1JlcG9ydDEzNjEzQWN0aW9uW1wiZXhwb3NlX2VkaXRvcl9zdWdnZXN0aW9uX2FwaVwiXSA9IDUyN10gPSBcImV4cG9zZV9lZGl0b3Jfc3VnZ2VzdGlvbl9hcGlcIjtcbiAgICBSZXBvcnQxMzYxM0FjdGlvbltSZXBvcnQxMzYxM0FjdGlvbltcImNsaWNrX2VkaXRvcl9zdWdnZXN0aW9uX2FwaVwiXSA9IDUyOF0gPSBcImNsaWNrX2VkaXRvcl9zdWdnZXN0aW9uX2FwaVwiO1xuICAgIFJlcG9ydDEzNjEzQWN0aW9uW1JlcG9ydDEzNjEzQWN0aW9uW1wiZXhwb3NlX2VkaXRvcl9wYW5lbF9hcGlcIl0gPSA1MjldID0gXCJleHBvc2VfZWRpdG9yX3BhbmVsX2FwaVwiO1xuICAgIFJlcG9ydDEzNjEzQWN0aW9uW1JlcG9ydDEzNjEzQWN0aW9uW1wiY2xpY2tfZWRpdG9yX3BhbmVsX2FwaVwiXSA9IDUzMF0gPSBcImNsaWNrX2VkaXRvcl9wYW5lbF9hcGlcIjtcbiAgICBSZXBvcnQxMzYxM0FjdGlvbltSZXBvcnQxMzYxM0FjdGlvbltcImV4cG9zZV9zdWdnZXN0aW9uX2RldGFpbF9wYWdlXCJdID0gNTMxXSA9IFwiZXhwb3NlX3N1Z2dlc3Rpb25fZGV0YWlsX3BhZ2VcIjtcbiAgICBSZXBvcnQxMzYxM0FjdGlvbltSZXBvcnQxMzYxM0FjdGlvbltcImNsaWNrX2J1eV9vbl9zdWdnZXN0aW9uX2RldGFpbF9wYWdlXCJdID0gNTMyXSA9IFwiY2xpY2tfYnV5X29uX3N1Z2dlc3Rpb25fZGV0YWlsX3BhZ2VcIjtcbiAgICBSZXBvcnQxMzYxM0FjdGlvbltSZXBvcnQxMzYxM0FjdGlvbltcImNsaWNrX3N1Ym1pdF9vcmRlcl9vbl9zdWdnZXN0aW9uX2RldGFpbF9wYWdlXCJdID0gNTMzXSA9IFwiY2xpY2tfc3VibWl0X29yZGVyX29uX3N1Z2dlc3Rpb25fZGV0YWlsX3BhZ2VcIjtcbn0pKFJlcG9ydDEzNjEzQWN0aW9uID0gZXhwb3J0cy5SZXBvcnQxMzYxM0FjdGlvbiB8fCAoZXhwb3J0cy5SZXBvcnQxMzYxM0FjdGlvbiA9IHt9KSk7XG5leHBvcnRzLklSZXBvcnRlclNlcnZpY2UgPSBzZXJ2aWNlX2Jhc2VfMS5jcmVhdGVEZWNvcmF0b3IoJ3JlcG9ydGVyU2VydmljZScpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb24vc2VydmljZS9pbmRleFwiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbGxlY3Rpb25cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2luc3RhbnRpYXRpb25cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3N5bWJvbHNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2V4dGVuc2lvbnNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluc3RhbnRpYXRpb25TZXJ2aWNlID0gZXhwb3J0cy5JSW5zdGFudGlhdGlvblNlcnZpY2UgPSBleHBvcnRzLnJlZ2lzdGVyTW9uYWNvSGFja3MgPSBleHBvcnRzLmNyZWF0ZURlY29yYXRvciA9IHZvaWQgMDtcbmNvbnN0IHN5bWJvbHNfMSA9IHJlcXVpcmUoXCIuL3N5bWJvbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVEZWNvcmF0b3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN5bWJvbHNfMS5jcmVhdGVEZWNvcmF0b3I7IH0gfSk7XG5jb25zdCBncmFwaF8xID0gcmVxdWlyZShcIi4vZ3JhcGhcIik7XG5jb25zdCBjb2xsZWN0aW9uXzEgPSByZXF1aXJlKFwiLi9jb2xsZWN0aW9uXCIpO1xuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuLi9iYXNlL2FzeW5jXCIpO1xubGV0IG1vbmFjb0hhY2tSZWdpc3RyeSA9IHtcbiAgICBtb25hY29Db21tb25TZXJ2aWNlczogbmV3IFdlYWtNYXAoKSxcbiAgICBtb25hY29Db2xsZWN0aW9uczogbmV3IFNldCgpLFxuICAgIHNhdmVNb25hY29TZXJ2aWNlOiAoKSA9PiB7IH0sXG4gICAgYWN0aXZhdGVNb25hY286ICgpID0+IHsgfSxcbiAgICBnZXRLbm93bk1vbmFjb0NvbW1vblNlcnZpY2VzOiAoKSA9PiB7IHJldHVybiB2b2lkIDA7IH0sXG59O1xuZnVuY3Rpb24gcmVnaXN0ZXJNb25hY29IYWNrcyhyZWdpc3RlcnMpIHtcbiAgICBtb25hY29IYWNrUmVnaXN0cnkgPSByZWdpc3RlcnM7XG59XG5leHBvcnRzLnJlZ2lzdGVyTW9uYWNvSGFja3MgPSByZWdpc3Rlck1vbmFjb0hhY2tzO1xuZXhwb3J0cy5JSW5zdGFudGlhdGlvblNlcnZpY2UgPSAoMCwgc3ltYm9sc18xLmNyZWF0ZURlY29yYXRvcikoJ2luc3RhbnRpYXRpb25TZXJ2aWNlJyk7XG5jb25zdCBfZW5hYmxlVHJhY2luZyA9IGZhbHNlO1xuY2xhc3MgQ3ljbGljRGVwZW5kZW5jeUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGdyYXBoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIoJ2N5Y2xpYyBkZXBlbmRlbmN5IGJldHdlZW4gc2VydmljZXMnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gKF9hID0gZ3JhcGguZmluZEN5Y2xlU2xvdygpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBgVU5BQkxFIHRvIGRldGVjdCBjeWNsZSwgZHVtcGluZyBncmFwaDogXFxuJHtncmFwaC50b1N0cmluZygpfWA7XG4gICAgfVxufVxuY2xhc3MgSW5zdGFudGlhdGlvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2VzID0gbmV3IGNvbGxlY3Rpb25fMS5TZXJ2aWNlQ29sbGVjdGlvbigpLCBzdHJpY3QgPSBmYWxzZSwgcGFyZW50KSB7XG4gICAgICAgIHRoaXMuX21vbmFjb1NoYWRvd2VkSW5zdGFudGlhdGlvblNlcnZpY2VzID0gW107XG4gICAgICAgIHRoaXMuX2FjdGl2ZUluc3RhbnRpYXRpb25zID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgICAgICB0aGlzLl9zdHJpY3QgPSBzdHJpY3Q7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fc2VydmljZXMuc2V0KGV4cG9ydHMuSUluc3RhbnRpYXRpb25TZXJ2aWNlLCB0aGlzKTtcbiAgICB9XG4gICAgZ2V0U2VydmljZUNvbGxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlcztcbiAgICB9XG4gICAgbW9uYWNvU2hhZG93ZWQoKSB7XG4gICAgICAgIG1vbmFjb0hhY2tSZWdpc3RyeS5hY3RpdmF0ZU1vbmFjbygpO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbGxlY3Rpb24gb2YgbW9uYWNvSGFja1JlZ2lzdHJ5Lm1vbmFjb0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbW9uYWNvU2hhZG93ZWRJbnN0YW50aWF0aW9uU2VydmljZXMuZmluZEluZGV4KG1pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWkuZ2V0U2VydmljZUNvbGxlY3Rpb24oKSA9PT0gY29sbGVjdGlvbjtcbiAgICAgICAgICAgIH0pIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vbmFjb1NoYWRvd2VkSW5zdGFudGlhdGlvblNlcnZpY2VzLnB1c2gobmV3IEluc3RhbnRpYXRpb25TZXJ2aWNlKGNvbGxlY3Rpb24sIGZhbHNlLCB0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbmFjb1NoYWRvd2VkSW5zdGFudGlhdGlvblNlcnZpY2VzO1xuICAgIH1cbiAgICBtb25hY29TaGFkb3dlZENvbW1vblNlcnZpY2UobW9uYWNvSWQpIHtcbiAgICAgICAgbW9uYWNvSGFja1JlZ2lzdHJ5LmFjdGl2YXRlTW9uYWNvKCk7XG4gICAgICAgIGxldCBfc2VydmljZSA9IG1vbmFjb0hhY2tSZWdpc3RyeS5tb25hY29Db21tb25TZXJ2aWNlcy5nZXQobW9uYWNvSWQpO1xuICAgICAgICBpZiAoX3NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfc2VydmljZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGFkb3dzID0gdGhpcy5tb25hY29TaGFkb3dlZCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygc2hhZG93cykge1xuICAgICAgICAgICAgX3NlcnZpY2UgPSBvLtOYKG1vbmFjb0lkKTtcbiAgICAgICAgICAgIGlmIChfc2VydmljZSkge1xuICAgICAgICAgICAgICAgIG1vbmFjb0hhY2tSZWdpc3RyeS5zYXZlTW9uYWNvU2VydmljZShtb25hY29JZCwgX3NlcnZpY2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfc2VydmljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICBjcmVhdGVDaGlsZChzZXJ2aWNlcykge1xuICAgICAgICByZXR1cm4gbmV3IEluc3RhbnRpYXRpb25TZXJ2aWNlKHNlcnZpY2VzLCB0aGlzLl9zdHJpY3QsIHRoaXMpO1xuICAgIH1cbiAgICBhc3luYyDOtChpZCwgaXNPcHRpb25hbCkge1xuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWQgPSBzeW1ib2xzXzEuX3V0aWwuc2VydmljZUlkcy5nZXQoaWQpO1xuICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9zZXJ2aWNlcy5oYXMoaWQpKSB7XG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzLl9wYXJlbnQ7XG4gICAgICAgICAgICB3aGlsZSAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuX3NlcnZpY2VzLmhhcyhpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLs60KGlkLCBpc09wdGlvbmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBpbnN0YW5jZS5fcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlcnZpY2VzLndhaXRVdGlsSW5zdGFuY2VTZXQoaWQpO1xuICAgICAgICByZXR1cm4gdGhpcy7TmChpZCwgaXNPcHRpb25hbCk7XG4gICAgfVxuICAgINSQKGlkLCBpc09wdGlvbmFsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZCA9IHN5bWJvbHNfMS5fdXRpbC5zZXJ2aWNlSWRzLmdldChpZCk7XG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3NlcnZpY2VzLmhhcyhpZCkpIHtcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXMuX3BhcmVudDtcbiAgICAgICAgICAgIHdoaWxlIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5fc2VydmljZXMuaGFzKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uu1JAoaWQsIGlzT3B0aW9uYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IGluc3RhbmNlLl9wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9zZXJ2aWNlcy5oYXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRoaW5nID0gdGhpcy5fZ2V0U2VydmljZUluc3RhbmNlT3JEZXNjcmlwdG9yKGlkKTtcbiAgICAgICAgaWYgKHRoaW5nIGluc3RhbmNlb2Ygc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLtOYKGlkLCBpc09wdGlvbmFsKTtcbiAgICB9XG4gICAg05goaWQsIGlzT3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlkID0gc3ltYm9sc18xLl91dGlsLnNlcnZpY2VJZHMuZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2dldE9yQ3JlYXRlU2VydmljZUluc3RhbmNlKGlkLCBUcmFjZS5Ob25lKTtcbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgaXNPcHRpb25hbCAhPT0gc3ltYm9sc18xLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtpbnZva2VGdW5jdGlvbl0gdW5rbm93biBzZXJ2aWNlICcke2lkfSdgKTtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAg05jTmChpZCwgaXNPcHRpb25hbCkge1xuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWQgPSBzeW1ib2xzXzEuX3V0aWwuc2VydmljZUlkcy5nZXQoaWQpO1xuICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9nZXRPckNyZWF0ZVNlcnZpY2VJbnN0YW5jZU11bHRpcGxlKGlkLCBUcmFjZS5Ob25lKTtcbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgaXNPcHRpb25hbCAhPT0gc3ltYm9sc18xLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtpbnZva2VGdW5jdGlvbl0gdW5rbm93biBzZXJ2aWNlICcke2lkfSdgKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBpbnZva2VGdW5jdGlvbihmbiwgLi4uYXJncykge1xuICAgICAgICBsZXQgX3RyYWNlID0gVHJhY2UudHJhY2VJbnZvY2F0aW9uKGZuKTtcbiAgICAgICAgbGV0IF9kb25lID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBnZXR0ZXIgPSAoaWQsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX2RvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXJ2aWNlIGFjY2Vzc29yIGlzIG9ubHkgdmFsaWQgZHVyaW5nIHRoZSBpbnZvY2F0aW9uIG9mIGl0cyB0YXJnZXQgbWV0aG9kJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2dldE9yQ3JlYXRlU2VydmljZUluc3RhbmNlKGlkLCBfdHJhY2UpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0ICYmIGlzT3B0aW9uYWwgIT09IHN5bWJvbHNfMS5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFtpbnZva2VGdW5jdGlvbl0gdW5rbm93biBzZXJ2aWNlICcke2lkfSdgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBtdWx0aXBsZUdldHRlciA9IChpZCwgaXNPcHRpb25hbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChfZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NlcnZpY2UgYWNjZXNzb3IgaXMgb25seSB2YWxpZCBkdXJpbmcgdGhlIGludm9jYXRpb24gb2YgaXRzIHRhcmdldCBtZXRob2QnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZ2V0T3JDcmVhdGVTZXJ2aWNlSW5zdGFuY2VNdWx0aXBsZShpZCwgX3RyYWNlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCAmJiBpc09wdGlvbmFsICE9PSBzeW1ib2xzXzEub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbaW52b2tlRnVuY3Rpb25dIHVua25vd24gc2VydmljZSAnJHtpZH0nYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc2V0dGVyID0gKGlkLCBzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgPSAoMCwgc3ltYm9sc18xLmNyZWF0ZURlY29yYXRvcikoaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXJ2aWNlcy5zZXQoaWQsIHNlcnZpY2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG11bHRpcGxlQWRkZXIgPSAoaWQsIHNlcnZpY2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZCA9ICgwLCBzeW1ib2xzXzEuY3JlYXRlRGVjb3JhdG9yKShpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2VzLmFkZE11bHRpcGxlKGlkLCBzZXJ2aWNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgICAgICAgICBnZXRNdWx0aXBsZTogbXVsdGlwbGVHZXR0ZXIsXG4gICAgICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXG4gICAgICAgICAgICAgICAgYWRkTXVsdGlwbGU6IG11bHRpcGxlQWRkZXIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHZvaWQgMCwgW2FjY2Vzc29yXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgX2RvbmUgPSB0cnVlO1xuICAgICAgICAgICAgX3RyYWNlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVJbnN0YW5jZShjdG9yT3JEZXNjcmlwdG9yLCAuLi5yZXN0KSB7XG4gICAgICAgIGxldCBfdHJhY2U7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChjdG9yT3JEZXNjcmlwdG9yIGluc3RhbmNlb2Ygc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBfdHJhY2UgPSBUcmFjZS50cmFjZUNyZWF0aW9uKGN0b3JPckRlc2NyaXB0b3IuY3Rvcik7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGVJbnN0YW5jZShjdG9yT3JEZXNjcmlwdG9yLmN0b3IsIGN0b3JPckRlc2NyaXB0b3Iuc3RhdGljQXJndW1lbnRzLmNvbmNhdChyZXN0KSwgX3RyYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90cmFjZSA9IFRyYWNlLnRyYWNlQ3JlYXRpb24oY3Rvck9yRGVzY3JpcHRvcik7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGVJbnN0YW5jZShjdG9yT3JEZXNjcmlwdG9yLCByZXN0LCBfdHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIF90cmFjZS5zdG9wKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9jcmVhdGVJbnN0YW5jZShjdG9yLCBhcmdzID0gW10sIF90cmFjZSkge1xuICAgICAgICAvLyBhcmd1bWVudHMgZGVmaW5lZCBieSBzZXJ2aWNlIGRlY29yYXRvcnNcbiAgICAgICAgbGV0IHNlcnZpY2VEZXBlbmRlbmNpZXMgPSBzeW1ib2xzXzEuX3V0aWwuZ2V0U2VydmljZURlcGVuZGVuY2llcyhjdG9yKS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gICAgICAgIGxldCBzZXJ2aWNlQXJncyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGRlcGVuZGVuY3kgb2Ygc2VydmljZURlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgbGV0IHNlcnZpY2UgPSB0aGlzLl9nZXRPckNyZWF0ZVNlcnZpY2VJbnN0YW5jZShkZXBlbmRlbmN5LmlkLCBfdHJhY2UpO1xuICAgICAgICAgICAgaWYgKCFzZXJ2aWNlICYmIHRoaXMuX3N0cmljdCAmJiAhZGVwZW5kZW5jeS5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgW2NyZWF0ZUluc3RhbmNlXSAke2N0b3IubmFtZX0gZGVwZW5kcyBvbiBVTktOT1dOIHNlcnZpY2UgJHtkZXBlbmRlbmN5LmlkfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcnZpY2VBcmdzLnB1c2goc2VydmljZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpcnN0U2VydmljZUFyZ1BvcyA9IHNlcnZpY2VEZXBlbmRlbmNpZXMubGVuZ3RoID4gMCA/IHNlcnZpY2VEZXBlbmRlbmNpZXNbMF0uaW5kZXggOiBhcmdzLmxlbmd0aDtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGFyZ3VtZW50IG1pc21hdGNoZXMsIGFkanVzdCBzdGF0aWMgYXJncyBpZiBuZWVkZWRcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9PSBmaXJzdFNlcnZpY2VBcmdQb3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW2NyZWF0ZUluc3RhbmNlXSBGaXJzdCBzZXJ2aWNlIGRlcGVuZGVuY3kgb2YgJHtjdG9yLm5hbWV9IGF0IHBvc2l0aW9uICR7Zmlyc3RTZXJ2aWNlQXJnUG9zICsgMX0gY29uZmxpY3RzIHdpdGggJHthcmdzLmxlbmd0aH0gc3RhdGljIGFyZ3VtZW50c2ApO1xuICAgICAgICAgICAgbGV0IGRlbHRhID0gZmlyc3RTZXJ2aWNlQXJnUG9zIC0gYXJncy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KG5ldyBBcnJheShkZWx0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMCwgZmlyc3RTZXJ2aWNlQXJnUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBub3cgY3JlYXRlIHRoZSBpbnN0YW5jZVxuICAgICAgICAvLyByZXR1cm4gPFQ+bmV3IGN0b3IoLi4uWy4uLmFyZ3MsIC4uLnNlcnZpY2VBcmdzXSlcbiAgICAgICAgcmV0dXJuIG5ldyBjdG9yKC4uLlsuLi5hcmdzLCAuLi5zZXJ2aWNlQXJnc10pO1xuICAgIH1cbiAgICBfc2V0U2VydmljZUluc3RhbmNlKGlkLCBpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpcy5fc2VydmljZXMuZ2V0KGlkKSBpbnN0YW5jZW9mIHN5bWJvbHNfMS5TeW5jRGVzY3JpcHRvcikge1xuICAgICAgICAgICAgdGhpcy5fc2VydmljZXMuc2V0KGlkLCBpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFNlcnZpY2VJbnN0YW5jZShpZCwgaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbGxlZ2FsU3RhdGUgLSBzZXR0aW5nIFVOS05PV04gc2VydmljZSBpbnN0YW5jZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRTZXJ2aWNlSW5zdGFuY2VPckRlc2NyaXB0b3IoaWQpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VPckRlc2MgPSB0aGlzLl9zZXJ2aWNlcy5nZXQoaWQpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAoIWluc3RhbmNlT3JEZXNjICYmIHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fcGFyZW50Ll9nZXRTZXJ2aWNlSW5zdGFuY2VPckRlc2NyaXB0b3IoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gaW5zdGFuY2VPckRlc2M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgbW9uYWNvSGFja1JlZ2lzdHJ5LmdldEtub3duTW9uYWNvQ29tbW9uU2VydmljZXMoaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBfbW9uYWNvX2lkID0gbW9uYWNvSGFja1JlZ2lzdHJ5LmdldEtub3duTW9uYWNvQ29tbW9uU2VydmljZXMoaWQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5tb25hY29TaGFkb3dlZENvbW1vblNlcnZpY2UoX21vbmFjb19pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgaWQuX21vbmFjb0RlY29yYXRvcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5tb25hY29TaGFkb3dlZENvbW1vblNlcnZpY2UoaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9nZXRTZXJ2aWNlSW5zdGFuY2VPckRlc2NyaXB0b3JNdWx0aXBsZShpZCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZU9yRGVzYyA9IHRoaXMuX3NlcnZpY2VzLmdldE11bHRpcGxlKGlkKTtcbiAgICAgICAgaWYgKGluc3RhbmNlT3JEZXNjLmxlbmd0aCA8IDEgJiYgdGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50Ll9nZXRTZXJ2aWNlSW5zdGFuY2VPckRlc2NyaXB0b3JNdWx0aXBsZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VPckRlc2M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldE9yQ3JlYXRlU2VydmljZUluc3RhbmNlKGlkLCBfdHJhY2UpIHtcbiAgICAgICAgbGV0IHRoaW5nID0gdGhpcy5fZ2V0U2VydmljZUluc3RhbmNlT3JEZXNjcmlwdG9yKGlkKTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaW5nIGluc3RhbmNlb2Ygc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2FmZUNyZWF0ZUFuZENhY2hlU2VydmljZUluc3RhbmNlKGlkLCB0aGluZywgX3RyYWNlLmJyYW5jaChpZCwgdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX3RyYWNlLmJyYW5jaChpZCwgZmFsc2UpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgbW9uYWNvSGFja1JlZ2lzdHJ5LmdldEtub3duTW9uYWNvQ29tbW9uU2VydmljZXMoaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBfbW9uYWNvX2lkID0gbW9uYWNvSGFja1JlZ2lzdHJ5LmdldEtub3duTW9uYWNvQ29tbW9uU2VydmljZXMoaWQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5tb25hY29TaGFkb3dlZENvbW1vblNlcnZpY2UoX21vbmFjb19pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQgJiYgaWQuX21vbmFjb0RlY29yYXRvcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5tb25hY29TaGFkb3dlZENvbW1vblNlcnZpY2UoaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIF9nZXRPckNyZWF0ZVNlcnZpY2VJbnN0YW5jZU11bHRpcGxlKGlkLCBfdHJhY2UpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IHRoaXMuX2dldFNlcnZpY2VJbnN0YW5jZU9yRGVzY3JpcHRvck11bHRpcGxlKGlkKTtcbiAgICAgICAgY29uc3QgdGhpbmdzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaW5zIG9mIGluc3RhbmNlcykge1xuICAgICAgICAgICAgaWYgKGlucyBpbnN0YW5jZW9mIHN5bWJvbHNfMS5TeW5jRGVzY3JpcHRvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fY3JlYXRlSW5zdGFuY2UoaW5zLmN0b3IsIGlucy5zdGF0aWNBcmd1bWVudHMsIF90cmFjZSk7XG4gICAgICAgICAgICAgICAgdGhpbmdzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpbmdzLnB1c2goaW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXJ2aWNlcy5zZXRNdWx0aXBsZShpZCwgdGhpbmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaW5ncztcbiAgICB9XG4gICAgX3NhZmVDcmVhdGVBbmRDYWNoZVNlcnZpY2VJbnN0YW5jZShpZCwgZGVzYywgX3RyYWNlKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVJbnN0YW50aWF0aW9ucy5oYXMoaWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGlsbGVnYWwgc3RhdGUgLSBSRUNVUlNJVkVMWSBpbnN0YW50aWF0aW5nIHNlcnZpY2UgJyR7aWR9J2ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FjdGl2ZUluc3RhbnRpYXRpb25zLmFkZChpZCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlQW5kQ2FjaGVTZXJ2aWNlSW5zdGFuY2UoaWQsIGRlc2MsIF90cmFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVJbnN0YW50aWF0aW9ucy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jcmVhdGVBbmRDYWNoZVNlcnZpY2VJbnN0YW5jZShpZCwgZGVzYywgX3RyYWNlKSB7XG4gICAgICAgIGNvbnN0IGdyYXBoID0gbmV3IGdyYXBoXzEuR3JhcGgoZGF0YSA9PiBkYXRhLmlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBmdW5jdGlvbiB0aHJvd0N5Y2xlRXJyb3IoKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ1tjcmVhdGVJbnN0YW5jZV0gY3ljbGljIGRlcGVuZGVuY3kgYmV0d2VlbiBzZXJ2aWNlcycpO1xuICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBncmFwaC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjeWNsZUNvdW50ID0gMDtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbeyBpZCwgZGVzYywgX3RyYWNlIH1dO1xuICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBncmFwaC5sb29rdXBPckluc2VydE5vZGUoaXRlbSk7XG4gICAgICAgICAgICAvLyBUT0RPQGpvaCB1c2UgdGhlIGdyYXBoIHRvIGZpbmQgYSBjeWNsZVxuICAgICAgICAgICAgLy8gYSB3ZWFrIGhldXJpc3RpYyBmb3IgY3ljbGUgY2hlY2tzXG4gICAgICAgICAgICBpZiAoY3ljbGVDb3VudCsrID4gMTAwMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDeWNsaWNEZXBlbmRlbmN5RXJyb3IoZ3JhcGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2hlY2sgYWxsIGRlcGVuZGVuY2llcyBmb3IgZXhpc3RlbmNlIGFuZCBpZiB0aGV5IG5lZWQgdG8gYmUgY3JlYXRlZCBmaXJzdFxuICAgICAgICAgICAgbGV0IGRlcGVuZGVuY2llcyA9IHN5bWJvbHNfMS5fdXRpbC5nZXRTZXJ2aWNlRGVwZW5kZW5jaWVzKGl0ZW0uZGVzYy5jdG9yKTtcbiAgICAgICAgICAgIGZvciAobGV0IGRlcGVuZGVuY3kgb2YgZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlT3JEZXNjID0gdGhpcy5fZ2V0U2VydmljZUluc3RhbmNlT3JEZXNjcmlwdG9yKGRlcGVuZGVuY3kuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VPckRlc2MgJiYgIWRlcGVuZGVuY3kub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbY3JlYXRlSW5zdGFuY2VdICR7aWR9IGRlcGVuZHMgb24gJHtkZXBlbmRlbmN5LmlkfSB3aGljaCBpcyBOT1QgcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlT3JEZXNjIGluc3RhbmNlb2Ygc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB7IGlkOiBkZXBlbmRlbmN5LmlkLCBkZXNjOiBpbnN0YW5jZU9yRGVzYywgX3RyYWNlOiBpdGVtLl90cmFjZS5icmFuY2goZGVwZW5kZW5jeS5pZCwgdHJ1ZSkgfTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGguaW5zZXJ0RWRnZShpdGVtLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGxldCByb290cyA9IGdyYXBoLnJvb3RzKCk7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBtb3JlIHJvb3RzIGJ1dCBzdGlsbFxuICAgICAgICAgICAgLy8gbm9kZXMgaW4gdGhlIGdyYXBoIHdlIGhhdmUgYSBjeWNsZVxuICAgICAgICAgICAgaWYgKHJvb3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghZ3JhcGguaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93Q3ljbGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgeyBkYXRhIH0gb2Ygcm9vdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXBlYXQgdGhlIGNoZWNrIGZvciB0aGlzIHN0aWxsIGJlaW5nIGEgc2VydmljZSBzeW5jIGRlc2NyaXB0b3IuIFRoYXQncyBiZWNhdXNlXG4gICAgICAgICAgICAgICAgLy8gaW5zdGFudGlhdGluZyBhIGRlcGVuZGVuY3kgbWlnaHQgaGF2ZSBzaWRlLWVmZmVjdCBhbmQgcmVjdXJzaXZlbHkgdHJpZ2dlciBpbnN0YW50aWF0aW9uXG4gICAgICAgICAgICAgICAgLy8gc28gdGhhdCBzb21lIGRlcGVuZGVuY2llcyBhcmUgbm93IGZ1bGxmaWxsZWQgYWxyZWFkeS5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZU9yRGVzYyA9IHRoaXMuX2dldFNlcnZpY2VJbnN0YW5jZU9yRGVzY3JpcHRvcihkYXRhLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VPckRlc2MgaW5zdGFuY2VvZiBzeW1ib2xzXzEuU3luY0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGluc3RhbmNlIGFuZCBvdmVyd3JpdGUgdGhlIHNlcnZpY2UgY29sbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9jcmVhdGVTZXJ2aWNlSW5zdGFuY2VXaXRoT3duZXIoZGF0YS5pZCwgZGF0YS5kZXNjLmN0b3IsIGRhdGEuZGVzYy5zdGF0aWNBcmd1bWVudHMsIGRhdGEuZGVzYy5zdXBwb3J0c0RlbGF5ZWRJbnN0YW50aWF0aW9uLCBkYXRhLl90cmFjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldFNlcnZpY2VJbnN0YW5jZShkYXRhLmlkLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdyYXBoLnJlbW92ZU5vZGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFNlcnZpY2VJbnN0YW5jZU9yRGVzY3JpcHRvcihpZCk7XG4gICAgfVxuICAgIF9jcmVhdGVTZXJ2aWNlSW5zdGFuY2VXaXRoT3duZXIoaWQsIGN0b3IsIGFyZ3MgPSBbXSwgc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbiwgX3RyYWNlKSB7XG4gICAgICAgIGxldCBkZXNjID0gdGhpcy5fc2VydmljZXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKCFkZXNjKSB7XG4gICAgICAgICAgICBkZXNjID0gdGhpcy5fc2VydmljZXMuZ2V0TXVsdGlwbGUoaWQpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXNjIGluc3RhbmNlb2Ygc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU2VydmljZUluc3RhbmNlKGN0b3IsIGFyZ3MsIHN1cHBvcnRzRGVsYXllZEluc3RhbnRpYXRpb24sIF90cmFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50Ll9jcmVhdGVTZXJ2aWNlSW5zdGFuY2VXaXRoT3duZXIoaWQsIGN0b3IsIGFyZ3MsIHN1cHBvcnRzRGVsYXllZEluc3RhbnRpYXRpb24sIF90cmFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lsbGVnYWxTdGF0ZSAtIGNyZWF0aW5nIFVOS05PV04gc2VydmljZSBpbnN0YW5jZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jcmVhdGVTZXJ2aWNlSW5zdGFuY2UoY3RvciwgYXJncyA9IFtdLCBfc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbiwgX3RyYWNlKSB7XG4gICAgICAgIGlmICghX3N1cHBvcnRzRGVsYXllZEluc3RhbnRpYXRpb24pIHtcbiAgICAgICAgICAgIC8vIGVhZ2VyIGluc3RhbnRpYXRpb25cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVJbnN0YW5jZShjdG9yLCBhcmdzLCBfdHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmV0dXJuIGEgcHJveHkgb2JqZWN0IHRoYXQncyBiYWNrZWQgYnkgYW4gaWRsZSB2YWx1ZS4gVGhhdFxuICAgICAgICAgICAgLy8gc3RyYXRlZ3kgaXMgdG8gaW5zdGFudGlhdGUgc2VydmljZXMgaW4gb3VyIGlkbGUgdGltZSBvciB3aGVuIGFjdHVhbGx5XG4gICAgICAgICAgICAvLyBuZWVkZWQgYnV0IG5vdCB3aGVuIGluamVjdGVkIGludG8gYSBjb25zdW1lclxuICAgICAgICAgICAgY29uc3QgaWRsZSA9IG5ldyBhc3luY18xLklkbGVWYWx1ZSgoKSA9PiB0aGlzLl9jcmVhdGVJbnN0YW5jZShjdG9yLCBhcmdzLCBfdHJhY2UpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJveHkoT2JqZWN0LmNyZWF0ZShudWxsKSwge1xuICAgICAgICAgICAgICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBpZGxlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3AgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3AgPSBwcm9wLmJpbmQob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldChfdGFyZ2V0LCBwLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZGxlLnZhbHVlW3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5JbnN0YW50aWF0aW9uU2VydmljZSA9IEluc3RhbnRpYXRpb25TZXJ2aWNlO1xuY2xhc3MgVHJhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLl9kZXAgPSBbXTtcbiAgICB9XG4gICAgLy8hXG4gICAgc3RhdGljIGdldCBOb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fTm9uZTtcbiAgICB9XG4gICAgc3RhdGljIHRyYWNlSW52b2NhdGlvbihjdG9yKSB7XG4gICAgICAgIHJldHVybiAhX2VuYWJsZVRyYWNpbmcgPyBUcmFjZS5fTm9uZSA6IG5ldyBUcmFjZSgxIC8qIEludm9jYXRpb24gKi8sIGN0b3IubmFtZSB8fCBjdG9yLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDQyKS5yZXBsYWNlKC9cXG4vZywgJycpKTtcbiAgICB9XG4gICAgc3RhdGljIHRyYWNlQ3JlYXRpb24oY3Rvcikge1xuICAgICAgICByZXR1cm4gIV9lbmFibGVUcmFjaW5nID8gVHJhY2UuX05vbmUgOiBuZXcgVHJhY2UoMCAvKiBDcmVhdGlvbiAqLywgY3Rvci5uYW1lKTtcbiAgICB9XG4gICAgYnJhbmNoKGlkLCBmaXJzdCkge1xuICAgICAgICBsZXQgY2hpbGQgPSBuZXcgVHJhY2UoMiAvKiBCcmFuY2ggKi8sIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLl9kZXAucHVzaChbaWQsIGZpcnN0LCBjaGlsZF0pO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHN0b3AoKSB7XG4gICAgICAgIGxldCBkdXIgPSBEYXRlLm5vdygpIC0gdGhpcy5fc3RhcnQ7XG4gICAgICAgIFRyYWNlLl90b3RhbHMgKz0gZHVyO1xuICAgICAgICBsZXQgY2F1c2VkQ3JlYXRpb24gPSBmYWxzZTtcbiAgICAgICAgZnVuY3Rpb24gcHJpbnRDaGlsZChuLCB0cmFjZSkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IFtdO1xuICAgICAgICAgICAgbGV0IHByZWZpeCA9IG5ldyBBcnJheShuICsgMSkuam9pbignXFx0Jyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgZmlyc3QsIGNoaWxkXSBvZiB0cmFjZS5fZGVwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0ICYmIGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhdXNlZENyZWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goYCR7cHJlZml4fUNSRUFURVMgLT4gJHtpZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5lc3RlZCA9IHByaW50Q2hpbGQobiArIDEsIGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2gobmVzdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goYCR7cHJlZml4fXVzZXMgLT4gJHtpZH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaW5lcyA9IFtcbiAgICAgICAgICAgIGAke3RoaXMudHlwZSA9PT0gMCAvKiBDcmVhdGlvbiAqLyA/ICdDUkVBVEUnIDogJ0NBTEwnfSAke3RoaXMubmFtZX1gLFxuICAgICAgICAgICAgYCR7cHJpbnRDaGlsZCgxLCB0aGlzKX1gLFxuICAgICAgICAgICAgYERPTkUsIHRvb2sgJHtkdXIudG9GaXhlZCgyKX1tcyAoZ3JhbmQgdG90YWwgJHtUcmFjZS5fdG90YWxzLnRvRml4ZWQoMil9bXMpYFxuICAgICAgICBdO1xuICAgICAgICBpZiAoZHVyID4gMiB8fCBjYXVzZWRDcmVhdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGluZXMuam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuVHJhY2UuX05vbmUgPSBuZXcgY2xhc3MgZXh0ZW5kcyBUcmFjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKC0xLCBudWxsKTsgfVxuICAgIHN0b3AoKSB7IH1cbiAgICBicmFuY2goKSB7IHJldHVybiB0aGlzOyB9XG59O1xuVHJhY2UuX3RvdGFscyA9IDA7XG4vLyNlbmRyZWdpb25cbiIsIlwidXNlIHN0cmljdFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyYXBoID0gZXhwb3J0cy5Ob2RlID0gdm9pZCAwO1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmluY29taW5nID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm91dGdvaW5nID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG5jbGFzcyBHcmFwaCB7XG4gICAgY29uc3RydWN0b3IoX2hhc2hGbikge1xuICAgICAgICB0aGlzLl9oYXNoRm4gPSBfaGFzaEZuO1xuICAgICAgICB0aGlzLl9ub2RlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gZW1wdHlcbiAgICB9XG4gICAgcm9vdHMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMuX25vZGVzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5vdXRnb2luZy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgaW5zZXJ0RWRnZShmcm9tLCB0bykge1xuICAgICAgICBjb25zdCBmcm9tTm9kZSA9IHRoaXMubG9va3VwT3JJbnNlcnROb2RlKGZyb20pO1xuICAgICAgICBjb25zdCB0b05vZGUgPSB0aGlzLmxvb2t1cE9ySW5zZXJ0Tm9kZSh0byk7XG4gICAgICAgIGZyb21Ob2RlLm91dGdvaW5nLnNldCh0aGlzLl9oYXNoRm4odG8pLCB0b05vZGUpO1xuICAgICAgICB0b05vZGUuaW5jb21pbmcuc2V0KHRoaXMuX2hhc2hGbihmcm9tKSwgZnJvbU5vZGUpO1xuICAgIH1cbiAgICByZW1vdmVOb2RlKGRhdGEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5faGFzaEZuKGRhdGEpO1xuICAgICAgICB0aGlzLl9ub2Rlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLl9ub2Rlcy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgbm9kZS5vdXRnb2luZy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIG5vZGUuaW5jb21pbmcuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9va3VwT3JJbnNlcnROb2RlKGRhdGEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5faGFzaEZuKGRhdGEpO1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuX25vZGVzLmdldChrZXkpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUgPSBuZXcgTm9kZShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX25vZGVzLnNldChrZXksIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBsb29rdXAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZXMuZ2V0KHRoaXMuX2hhc2hGbihkYXRhKSk7XG4gICAgfVxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2Rlcy5zaXplID09PSAwO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHRoaXMuX25vZGVzKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goYCR7a2V5fSwgKGluY29taW5nKVske1suLi52YWx1ZS5pbmNvbWluZy5rZXlzKCldLmpvaW4oJywgJyl9XSwgKG91dGdvaW5nKVske1suLi52YWx1ZS5vdXRnb2luZy5rZXlzKCldLmpvaW4oJywnKX1dYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEuam9pbignXFxuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYnJ1dGUgZm9yY2UgYW5kIHNsb3cgYW5kICoqb25seSoqIGJlIHVzZWRcbiAgICAgKiB0byB0cm91YmxlIHNob290LlxuICAgICAqL1xuICAgIGZpbmRDeWNsZVNsb3coKSB7XG4gICAgICAgIGZvciAobGV0IFtpZCwgbm9kZV0gb2YgdGhpcy5fbm9kZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0KFtpZF0pO1xuICAgICAgICAgICAgY29uc3QgcmVzID0gdGhpcy5fZmluZEN5Y2xlKG5vZGUsIHNlZW4pO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgX2ZpbmRDeWNsZShub2RlLCBzZWVuKSB7XG4gICAgICAgIGZvciAobGV0IFtpZCwgb3V0Z29pbmddIG9mIG5vZGUub3V0Z29pbmcpIHtcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyhpZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnNlZW4sIGlkXS5qb2luKCcgLT4gJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWVuLmFkZChpZCk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2ZpbmRDeWNsZShvdXRnb2luZywgc2Vlbik7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWVuLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnRzLkdyYXBoID0gR3JhcGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWdpc3RlckluUm9vdFNlcnZpY2VDb2xsZWN0aW9uID0gZXhwb3J0cy5zZXRSb290U2VydmljZUNvbGxlY3Rpb24gPSBleHBvcnRzLmdldFNpbmdsZXRvblNlcnZpY2VEZXNjcmlwdG9ycyA9IGV4cG9ydHMucmVnaXN0ZXJTaW5nbGV0b24gPSB2b2lkIDA7XG5jb25zdCBzeW1ib2xzXzEgPSByZXF1aXJlKFwiLi9zeW1ib2xzXCIpO1xuY29uc3QgX3JlZ2lzdHJ5ID0gW107XG5mdW5jdGlvbiByZWdpc3RlclNpbmdsZXRvbihpZCwgY3Rvck9yRGVzY3JpcHRvciwgc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbiwgYXV0b1JlZ2lzdGVySW5Sb290U2VydmljZUNvbGxlY3Rpb24pIHtcbiAgICBpZiAoIShjdG9yT3JEZXNjcmlwdG9yIGluc3RhbmNlb2Ygc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKSkge1xuICAgICAgICBjdG9yT3JEZXNjcmlwdG9yID0gbmV3IHN5bWJvbHNfMS5TeW5jRGVzY3JpcHRvcihjdG9yT3JEZXNjcmlwdG9yLCBbXSwgc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbik7XG4gICAgfVxuICAgIGlmIChhdXRvUmVnaXN0ZXJJblJvb3RTZXJ2aWNlQ29sbGVjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGF1dG9SZWdpc3RlckluUm9vdFNlcnZpY2VDb2xsZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKF9yb290U2VydmljZUNvbGxlY3Rpb24gJiYgYXV0b1JlZ2lzdGVySW5Sb290U2VydmljZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgcmVnaXN0ZXJJblJvb3RTZXJ2aWNlQ29sbGVjdGlvbihpZCwgY3Rvck9yRGVzY3JpcHRvciwgc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBfcmVnaXN0cnkucHVzaChbaWQsIGN0b3JPckRlc2NyaXB0b3JdKTtcbiAgICB9XG59XG5leHBvcnRzLnJlZ2lzdGVyU2luZ2xldG9uID0gcmVnaXN0ZXJTaW5nbGV0b247XG5mdW5jdGlvbiBnZXRTaW5nbGV0b25TZXJ2aWNlRGVzY3JpcHRvcnMoKSB7XG4gICAgcmV0dXJuIF9yZWdpc3RyeTtcbn1cbmV4cG9ydHMuZ2V0U2luZ2xldG9uU2VydmljZURlc2NyaXB0b3JzID0gZ2V0U2luZ2xldG9uU2VydmljZURlc2NyaXB0b3JzO1xubGV0IF9yb290U2VydmljZUNvbGxlY3Rpb247XG5sZXQgX3F1ZXVlID0gW107XG5mdW5jdGlvbiBzZXRSb290U2VydmljZUNvbGxlY3Rpb24oY2MpIHtcbiAgICBpZiAoX3Jvb3RTZXJ2aWNlQ29sbGVjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jvb3Qgc2VydmljZSBjb2xsZWN0aW9uIGhhcyBhbHJlYWR5IGJlZW4gc2V0LicpO1xuICAgIH1cbiAgICBfcm9vdFNlcnZpY2VDb2xsZWN0aW9uID0gY2M7XG4gICAgaWYgKF9xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcXVldWUgPSBbLi4uX3F1ZXVlXTtcbiAgICAgICAgX3F1ZXVlID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW2lkLCBkZXNjcmlwdG9yXSBvZiBxdWV1ZSkge1xuICAgICAgICAgICAgY2Muc2V0KGlkLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuc2V0Um9vdFNlcnZpY2VDb2xsZWN0aW9uID0gc2V0Um9vdFNlcnZpY2VDb2xsZWN0aW9uO1xuZnVuY3Rpb24gcmVnaXN0ZXJJblJvb3RTZXJ2aWNlQ29sbGVjdGlvbihpZCwgY3Rvck9yRGVzY3JpcHRvciwgc3VwcG9ydHNEZWxheWVkSW5zdGFudGlhdGlvbikge1xuICAgIGlmICghKGN0b3JPckRlc2NyaXB0b3IgaW5zdGFuY2VvZiBzeW1ib2xzXzEuU3luY0Rlc2NyaXB0b3IpKSB7XG4gICAgICAgIGN0b3JPckRlc2NyaXB0b3IgPSBuZXcgc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKGN0b3JPckRlc2NyaXB0b3IsIFtdLCBzdXBwb3J0c0RlbGF5ZWRJbnN0YW50aWF0aW9uKTtcbiAgICB9XG4gICAgaWYgKF9yb290U2VydmljZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcG9zc2libGUgPSBfcm9vdFNlcnZpY2VDb2xsZWN0aW9uLmdldChpZCk7XG4gICAgICAgIGlmIChwb3NzaWJsZSAmJiAhKHBvc3NpYmxlIGluc3RhbmNlb2Ygc3ltYm9sc18xLlN5bmNEZXNjcmlwdG9yKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbcmVnaXN0ZXJJblJvb3RTZXJ2aWNlQ29sbGVjdGlvbl0nLCBpZC50b1N0cmluZygpLCAnbWF5IGFscmVhZHkgYmUgaW5zdGFudGlhdGVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9yb290U2VydmljZUNvbGxlY3Rpb24uc2V0KGlkLCBjdG9yT3JEZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIF9xdWV1ZS5wdXNoKFtpZCwgY3Rvck9yRGVzY3JpcHRvcl0pO1xuICAgIH1cbn1cbmV4cG9ydHMucmVnaXN0ZXJJblJvb3RTZXJ2aWNlQ29sbGVjdGlvbiA9IHJlZ2lzdGVySW5Sb290U2VydmljZUNvbGxlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9