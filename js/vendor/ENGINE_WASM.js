(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  // 工具的fetch 被隐藏了
  var fetch = fetch || __global.fetch
  // 工具的WebAssembly可能被隐藏了
  var WebAssembly = WebAssembly || __global.WebAssembly

  var ENGINE_WASM = {exports: {}};

  (function (module, exports) {
  var ENGINE_WASM = (function() {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
    
    return (
  function(ENGINE_WASM) {
    ENGINE_WASM = ENGINE_WASM || {};



  // The Module object: Our interface to the outside world. We import
  // and export values on it. There are various ways Module can be used:
  // 1. Not defined. We create it here
  // 2. A function parameter, function(Module) { ..generated code.. }
  // 3. pre-run appended it, var Module = {}; ..generated code..
  // 4. External script tag defines var Module.
  // We need to check if Module already exists (e.g. case 3 above).
  // Substitution will be replaced with actual code on later stage of the build,
  // this way Closure Compiler will not mangle it (e.g. case 4. above).
  // Note that if you want to run closure, and also to use Module
  // after the generated code, you will need to define   var Module = {};
  // before the code. Then that object will be used in the code, and you
  // can continue to use Module afterwards as well.
  var Module = typeof ENGINE_WASM !== 'undefined' ? ENGINE_WASM : {};

  // Set up the promise that indicates the Module is initialized
  var readyPromiseResolve, readyPromiseReject;
  Module['ready'] = new Promise(function(resolve, reject) {
    readyPromiseResolve = resolve;
    readyPromiseReject = reject;
  });

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_main')) {
          Object.defineProperty(Module['ready'], '_main', { configurable: true, get: function() { abort('You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_main', { configurable: true, set: function() { abort('You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_end')) {
          Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_free')) {
          Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, get: function() { abort('You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', { configurable: true, set: function() { abort('You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_init')) {
          Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, get: function() { abort('You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_emscripten_stack_init', { configurable: true, set: function() { abort('You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
          Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
          Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
          Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
          Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
          Object.defineProperty(Module['ready'], '_fflush', { configurable: true, get: function() { abort('You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_fflush', { configurable: true, set: function() { abort('You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
          Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
          Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
          Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_ntohs')) {
          Object.defineProperty(Module['ready'], '_ntohs', { configurable: true, get: function() { abort('You are getting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_ntohs', { configurable: true, set: function() { abort('You are setting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_htons')) {
          Object.defineProperty(Module['ready'], '_htons', { configurable: true, get: function() { abort('You are getting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_htons', { configurable: true, set: function() { abort('You are setting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_main_thread_process_queued_calls')) {
          Object.defineProperty(Module['ready'], '_emscripten_main_thread_process_queued_calls', { configurable: true, get: function() { abort('You are getting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '_emscripten_main_thread_process_queued_calls', { configurable: true, set: function() { abort('You are setting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '___getTypeName')) {
          Object.defineProperty(Module['ready'], '___getTypeName', { configurable: true, get: function() { abort('You are getting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '___getTypeName', { configurable: true, set: function() { abort('You are setting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], '___embind_register_native_and_builtin_types')) {
          Object.defineProperty(Module['ready'], '___embind_register_native_and_builtin_types', { configurable: true, get: function() { abort('You are getting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], '___embind_register_native_and_builtin_types', { configurable: true, set: function() { abort('You are setting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

        if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
          Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
          Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'); } });
        }
      

  // --pre-jses are emitted after the Module integration code, so that they can
  // refer to Module (if they choose; they can also define Module)
  // {{PRE_JSES}}

  // Sometimes an existing Module object exists with properties
  // meant to overwrite the default module functionality. Here
  // we collect those properties and reapply _after_ we configure
  // the current environment's defaults to avoid having to be so
  // defensive during initialization.
  var moduleOverrides = {};
  var key;
  for (key in Module) {
    if (Module.hasOwnProperty(key)) {
      moduleOverrides[key] = Module[key];
    }
  }
  var quit_ = function(status, toThrow) {
    throw toThrow;
  };

  // Determine the runtime environment we are in. You can customize this by
  // setting the ENVIRONMENT setting at compile time (see settings.js).

  var ENVIRONMENT_IS_WEB = true;
  var ENVIRONMENT_IS_WORKER = false;
  var ENVIRONMENT_IS_NODE = false;
  var ENVIRONMENT_IS_SHELL = false;

  if (Module['ENVIRONMENT']) {
    throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
  }

  // `/` should be present at the end if `scriptDirectory` is not empty
  var scriptDirectory = '';
  function locateFile(path) {
    if (__wxConfig.brand === "devtools") {
      return window.location.origin + "/appservice/__dev__/" + path;
    }
    if (Module['locateFile']) {
      return Module['locateFile'](path, scriptDirectory);
    }
    return scriptDirectory + path;
  }

  // Hooks that are implemented differently in different runtime environments.
  var readBinary;

  {
    if (typeof document !== 'undefined' && document.currentScript) { // web
      scriptDirectory = document.currentScript.src;
    }
    // When MODULARIZE, this JS may be executed later, after document.currentScript
    // is gone, so we saved it, and we use it here instead of any other info.
    if (_scriptDir) {
      scriptDirectory = _scriptDir;
    }
    // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
    // otherwise, slice off the final part of the url to find the script directory.
    // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
    // and scriptDirectory will correctly be replaced with an empty string.
    // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
    // they are removed because they could contain a slash.
    if (scriptDirectory.indexOf('blob:') !== 0) {
      scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
    } else {
      scriptDirectory = '';
    }

    if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');
  }

  // Set up the out() and err() hooks, which are how we can print to stdout or
  // stderr, respectively.
  var out = Module['print'] || console.log.bind(console);
  var err = Module['printErr'] || console.warn.bind(console);

  // Merge back in the overrides
  for (key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      Module[key] = moduleOverrides[key];
    }
  }
  // Free the object hierarchy contained in the overrides, this lets the GC
  // reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
  moduleOverrides = null;

  // Emit code to handle expected values on the Module object. This applies Module.x
  // to the proper local x. This has two benefits: first, we only emit it if it is
  // expected to arrive, and second, by using a local everywhere else that can be
  // minified.

  if (Module['arguments']) ;
  if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) {
    Object.defineProperty(Module, 'arguments', {
      configurable: true,
      get: function() {
        abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  if (Module['thisProgram']) ;
  if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) {
    Object.defineProperty(Module, 'thisProgram', {
      configurable: true,
      get: function() {
        abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  if (Module['quit']) quit_ = Module['quit'];
  if (!Object.getOwnPropertyDescriptor(Module, 'quit')) {
    Object.defineProperty(Module, 'quit', {
      configurable: true,
      get: function() {
        abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  // perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
  // Assertions on removed incoming Module JS APIs.
  assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
  assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
  assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
  assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
  assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
  assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');

  if (!Object.getOwnPropertyDescriptor(Module, 'read')) {
    Object.defineProperty(Module, 'read', {
      configurable: true,
      get: function() {
        abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) {
    Object.defineProperty(Module, 'readAsync', {
      configurable: true,
      get: function() {
        abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) {
    Object.defineProperty(Module, 'readBinary', {
      configurable: true,
      get: function() {
        abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) {
    Object.defineProperty(Module, 'setWindowTitle', {
      configurable: true,
      get: function() {
        abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable.");

  assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.");

  assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");

  function warnOnce(text) {
    if (!warnOnce.shown) warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
      warnOnce.shown[text] = 1;
      err(text);
    }
  }

  // end include: runtime_functions.js
  // include: runtime_debug.js


  // end include: runtime_debug.js
  var tempRet0 = 0;

  var setTempRet0 = function(value) {
    tempRet0 = value;
  };

  var getTempRet0 = function() {
    return tempRet0;
  };



  // === Preamble library stuff ===

  // Documentation for the public APIs defined in this file must be updated in:
  //    site/source/docs/api_reference/preamble.js.rst
  // A prebuilt local version of the documentation is available at:
  //    site/build/text/docs/api_reference/preamble.js.txt
  // You can also build docs locally as HTML or other formats in site/
  // An online HTML version (which may be of a different version of Emscripten)
  //    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

  var wasmBinary;
  if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) {
    Object.defineProperty(Module, 'wasmBinary', {
      configurable: true,
      get: function() {
        abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }
  var noExitRuntime = Module['noExitRuntime'] || true;
  if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) {
    Object.defineProperty(Module, 'noExitRuntime', {
      configurable: true,
      get: function() {
        abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  if (typeof WebAssembly !== 'object') {
    abort('no native wasm support detected');
  }

  // end include: runtime_safe_heap.js
  // Wasm globals

  var wasmMemory;

  //========================================
  // Runtime essentials
  //========================================

  // whether we are quitting the application. no code should run after this.
  // set in exit() and abort()
  var ABORT = false;

  /** @type {function(*, string=)} */
  function assert(condition, text) {
    if (!condition) {
      abort('Assertion failed: ' + text);
    }
  }

  // include: runtime_strings.js


  // runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

  // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
  // a copy of that string as a Javascript String object.

  var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

  /**
   * @param {number} idx
   * @param {number=} maxBytesToRead
   * @return {string}
   */
  function UTF8ArrayToString(heap, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
    // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
    while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

    if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(heap.subarray(idx, endPtr));
    } else {
      var str = '';
      // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heap[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heap[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heap[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
        }

        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
    }
    return str;
  }

  // Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
  // copy of that string as a Javascript String object.
  // maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
  //                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
  //                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
  //                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
  //                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
  //                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
  //                 throw JS JIT optimizations off, so it is worth to consider consistently using one
  //                 style or the other.
  /**
   * @param {number} ptr
   * @param {number=} maxBytesToRead
   * @return {string}
   */
  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
  }

  // Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
  // encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
  //   outIdx: The starting offset in the array to begin the copying.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array.
  //                    This count should include the null terminator,
  //                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.

  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
      return 0;

    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      var u = str.charCodeAt(i); // possibly a lead surrogate
      if (u >= 0xD800 && u <= 0xDFFF) {
        var u1 = str.charCodeAt(++i);
        u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
      }
      if (u <= 0x7F) {
        if (outIdx >= endIdx) break;
        heap[outIdx++] = u;
      } else if (u <= 0x7FF) {
        if (outIdx + 1 >= endIdx) break;
        heap[outIdx++] = 0xC0 | (u >> 6);
        heap[outIdx++] = 0x80 | (u & 63);
      } else if (u <= 0xFFFF) {
        if (outIdx + 2 >= endIdx) break;
        heap[outIdx++] = 0xE0 | (u >> 12);
        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
        heap[outIdx++] = 0x80 | (u & 63);
      } else {
        if (outIdx + 3 >= endIdx) break;
        if (u > 0x10FFFF) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
        heap[outIdx++] = 0xF0 | (u >> 18);
        heap[outIdx++] = 0x80 | ((u >> 12) & 63);
        heap[outIdx++] = 0x80 | ((u >> 6) & 63);
        heap[outIdx++] = 0x80 | (u & 63);
      }
    }
    // Null-terminate the pointer to the buffer.
    heap[outIdx] = 0;
    return outIdx - startIdx;
  }

  // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
  // Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Returns the number of bytes written, EXCLUDING the null terminator.

  function stringToUTF8(str, outPtr, maxBytesToWrite) {
    assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
    return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
  }

  // Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
  function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var u = str.charCodeAt(i); // possibly a lead surrogate
      if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
      if (u <= 0x7F) ++len;
      else if (u <= 0x7FF) len += 2;
      else if (u <= 0xFFFF) len += 3;
      else len += 4;
    }
    return len;
  }

  // Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
  // a copy of that string as a Javascript String object.

  var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

  function UTF16ToString(ptr, maxBytesToRead) {
    assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
    var endPtr = ptr;
    // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
    // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
    var idx = endPtr >> 1;
    var maxIdx = idx + maxBytesToRead / 2;
    // If maxBytesToRead is not passed explicitly, it will be undefined, and this
    // will always evaluate to true. This saves on code size.
    while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
    endPtr = idx << 1;

    if (endPtr - ptr > 32 && UTF16Decoder) {
      return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
    } else {
      var str = '';

      // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
      // will always evaluate to true. The loop is then terminated on the first null char.
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
        if (codeUnit == 0) break;
        // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
        str += String.fromCharCode(codeUnit);
      }

      return str;
    }
  }

  // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
  // Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   outPtr: Byte address in Emscripten HEAP where to write the string to.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
  //                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.

  function stringToUTF16(str, outPtr, maxBytesToWrite) {
    assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
    assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
    // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
    if (maxBytesToWrite === undefined) {
      maxBytesToWrite = 0x7FFFFFFF;
    }
    if (maxBytesToWrite < 2) return 0;
    maxBytesToWrite -= 2; // Null terminator.
    var startPtr = outPtr;
    var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
    for (var i = 0; i < numCharsToWrite; ++i) {
      // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
      var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
      HEAP16[((outPtr)>>1)] = codeUnit;
      outPtr += 2;
    }
    // Null-terminate the pointer to the HEAP.
    HEAP16[((outPtr)>>1)] = 0;
    return outPtr - startPtr;
  }

  // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

  function lengthBytesUTF16(str) {
    return str.length*2;
  }

  function UTF32ToString(ptr, maxBytesToRead) {
    assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
    var i = 0;

    var str = '';
    // If maxBytesToRead is not passed explicitly, it will be undefined, and this
    // will always evaluate to true. This saves on code size.
    while (!(i >= maxBytesToRead / 4)) {
      var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
      if (utf32 == 0) break;
      ++i;
      // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      if (utf32 >= 0x10000) {
        var ch = utf32 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      } else {
        str += String.fromCharCode(utf32);
      }
    }
    return str;
  }

  // Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
  // null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
  // Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
  // Parameters:
  //   str: the Javascript string to copy.
  //   outPtr: Byte address in Emscripten HEAP where to write the string to.
  //   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
  //                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
  //                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
  // Returns the number of bytes written, EXCLUDING the null terminator.

  function stringToUTF32(str, outPtr, maxBytesToWrite) {
    assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
    assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
    // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
    if (maxBytesToWrite === undefined) {
      maxBytesToWrite = 0x7FFFFFFF;
    }
    if (maxBytesToWrite < 4) return 0;
    var startPtr = outPtr;
    var endPtr = startPtr + maxBytesToWrite - 4;
    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
      if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
        var trailSurrogate = str.charCodeAt(++i);
        codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
      }
      HEAP32[((outPtr)>>2)] = codeUnit;
      outPtr += 4;
      if (outPtr + 4 > endPtr) break;
    }
    // Null-terminate the pointer to the HEAP.
    HEAP32[((outPtr)>>2)] = 0;
    return outPtr - startPtr;
  }

  // Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

  function lengthBytesUTF32(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
      // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
      // See http://unicode.org/faq/utf_bom.html#utf16-3
      var codeUnit = str.charCodeAt(i);
      if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
      len += 4;
    }

    return len;
  }

  var /** @type {ArrayBuffer} */
    buffer,
  /** @type {Int8Array} */
    HEAP8,
  /** @type {Uint8Array} */
    HEAPU8,
  /** @type {Int16Array} */
    HEAP16,
  /** @type {Uint16Array} */
    HEAPU16,
  /** @type {Int32Array} */
    HEAP32,
  /** @type {Uint32Array} */
    HEAPU32,
  /** @type {Float32Array} */
    HEAPF32,
  /** @type {Float64Array} */
    HEAPF64;

  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module['HEAP8'] = HEAP8 = new Int8Array(buf);
    Module['HEAP16'] = HEAP16 = new Int16Array(buf);
    Module['HEAP32'] = HEAP32 = new Int32Array(buf);
    Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
    Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
    Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
    Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
    Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
  }

  var TOTAL_STACK = 5242880;
  if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime');

  var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 33554432;
  if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) {
    Object.defineProperty(Module, 'INITIAL_MEMORY', {
      configurable: true,
      get: function() {
        abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }

  assert(INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

  // check for full engine support (use string 'subarray' to avoid closure compiler confusion)
  assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
         'JS engine does not provide full typed array support');

  // If memory is defined in wasm, the user can't provide it.
  assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally');
  assert(INITIAL_MEMORY == 33554432, 'Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically');

  // include: runtime_init_table.js
  // In regular non-RELOCATABLE mode the table is exported
  // from the wasm module and this will be assigned once
  // the exports are available.
  var wasmTable;

  // end include: runtime_init_table.js
  // include: runtime_stack_check.js


  // Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
  function writeStackCookie() {
    var max = _emscripten_stack_get_end();
    assert((max & 3) == 0);
    // The stack grows downwards
    HEAPU32[(max >> 2)+1] = 0x2135467;
    HEAPU32[(max >> 2)+2] = 0x89BACDFE;
    // Also test the global address 0 for integrity.
    HEAP32[0] = 0x63736d65; /* 'emsc' */
  }

  function checkStackCookie() {
    if (ABORT) return;
    var max = _emscripten_stack_get_end();
    var cookie1 = HEAPU32[(max >> 2)+1];
    var cookie2 = HEAPU32[(max >> 2)+2];
    if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
      abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
    }
    // Also test the global address 0 for integrity.
    if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }

  // end include: runtime_stack_check.js
  // include: runtime_assertions.js


  // Endianness check
  (function() {
    var h16 = new Int16Array(1);
    var h8 = new Int8Array(h16.buffer);
    h16[0] = 0x6373;
    if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)';
  })();

  // end include: runtime_assertions.js
  var __ATPRERUN__  = []; // functions called before the runtime is initialized
  var __ATINIT__    = []; // functions called during startup
  var __ATPOSTRUN__ = []; // functions called after the main() is called

  var runtimeInitialized = false;
  var runtimeExited = false;
  var runtimeKeepaliveCounter = 0;

  function keepRuntimeAlive() {
    return noExitRuntime || runtimeKeepaliveCounter > 0;
  }

  function preRun() {

    if (Module['preRun']) {
      if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
      while (Module['preRun'].length) {
        addOnPreRun(Module['preRun'].shift());
      }
    }

    callRuntimeCallbacks(__ATPRERUN__);
  }

  function initRuntime() {
    checkStackCookie();
    assert(!runtimeInitialized);
    runtimeInitialized = true;

    
    callRuntimeCallbacks(__ATINIT__);
  }

  function exitRuntime() {
    checkStackCookie();
    runtimeExited = true;
  }

  function postRun() {
    checkStackCookie();

    if (Module['postRun']) {
      if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
      while (Module['postRun'].length) {
        addOnPostRun(Module['postRun'].shift());
      }
    }

    callRuntimeCallbacks(__ATPOSTRUN__);
  }

  function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }

  function addOnInit(cb) {
    __ATINIT__.unshift(cb);
  }

  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }

  // include: runtime_math.js


  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

  assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
  assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
  assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
  assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

  // end include: runtime_math.js
  // A counter of dependencies for calling run(). If we need to
  // do asynchronous work before running, increment this and
  // decrement it. Incrementing must happen in a place like
  // Module.preRun (used by emcc to add file preloading).
  // Note that you can add dependencies in preRun, even though
  // it happens right before run - run will be postponed until
  // the dependencies are met.
  var runDependencies = 0;
  var runDependencyWatcher = null;
  var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
  var runDependencyTracking = {};

  function addRunDependency(id) {
    runDependencies++;

    if (Module['monitorRunDependencies']) {
      Module['monitorRunDependencies'](runDependencies);
    }

    if (id) {
      assert(!runDependencyTracking[id]);
      runDependencyTracking[id] = 1;
      if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
        // Check for missing dependencies every few seconds
        runDependencyWatcher = setInterval(function() {
          if (ABORT) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null;
            return;
          }
          var shown = false;
          for (var dep in runDependencyTracking) {
            if (!shown) {
              shown = true;
              err('still waiting on run dependencies:');
            }
            err('dependency: ' + dep);
          }
          if (shown) {
            err('(end of list)');
          }
        }, 10000);
      }
    } else {
      err('warning: run dependency added without ID');
    }
  }

  function removeRunDependency(id) {
    runDependencies--;

    if (Module['monitorRunDependencies']) {
      Module['monitorRunDependencies'](runDependencies);
    }

    if (id) {
      assert(runDependencyTracking[id]);
      delete runDependencyTracking[id];
    } else {
      err('warning: run dependency removed without ID');
    }
    if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
      }
      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback(); // can add another dependenciesFulfilled
      }
    }
  }

  Module["preloadedImages"] = {}; // maps url to image data
  Module["preloadedAudios"] = {}; // maps url to audio data

  /** @param {string|number=} what */
  function abort(what) {
    {
      if (Module['onAbort']) {
        Module['onAbort'](what);
      }
    }

    what = 'Aborted(' + what + ')';
    // TODO(sbc): Should we remove printing and leave it up to whoever
    // catches the exception?
    err(what);

    ABORT = true;

    // Use a wasm runtime error, because a JS error might be seen as a foreign
    // exception, which means we'd run destructors on it. We need the error to
    // simply make the program stop.
    var e = new WebAssembly.RuntimeError(what);

    readyPromiseReject(e);
    // Throw the error whether or not MODULARIZE is set because abort is used
    // in code paths apart from instantiation where an exception is expected
    // to be thrown when abort is called.
    throw e;
  }

  // {{MEM_INITIALIZER}}

  // include: memoryprofiler.js


  // end include: memoryprofiler.js
  // show errors on likely calls to FS when it was not included
  var FS = {
    error: function() {
      abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
    },
    init: function() { FS.error(); },
    createDataFile: function() { FS.error(); },
    createPreloadedFile: function() { FS.error(); },
    createLazyFile: function() { FS.error(); },
    open: function() { FS.error(); },
    mkdev: function() { FS.error(); },
    registerDevice: function() { FS.error(); },
    analyzePath: function() { FS.error(); },
    loadFilesFromDB: function() { FS.error(); },

    ErrnoError: function ErrnoError() { FS.error(); },
  };
  Module['FS_createDataFile'] = FS.createDataFile;
  Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

  // include: URIUtils.js


  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  var dataURIPrefix = 'data:application/octet-stream;base64,';

  // Indicates whether filename is a base64 data URI.
  function isDataURI(filename) {
    // Prefix of data URIs emitted by SINGLE_FILE and related options.
    return filename.startsWith(dataURIPrefix);
  }

  // Indicates whether filename is delivered via file protocol (as opposed to http/https)
  function isFileURI(filename) {
    return filename.startsWith('file://');
  }

  // end include: URIUtils.js
  function createExportWrapper(name, fixedasm) {
    return function() {
      var displayName = name;
      var asm = fixedasm;
      if (!fixedasm) {
        asm = Module['asm'];
      }
      assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
      assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
      if (!asm[name]) {
        assert(asm[name], 'exported native function `' + displayName + '` not found');
      }
      return asm[name].apply(null, arguments);
    };
  }

  var wasmBinaryFile;
    wasmBinaryFile = 'ENGINE_WASM.wasm';
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }

  function getBinary(file) {
    try {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) ; else {
        throw "both async and sync fetching of the wasm failed";
      }
    }
    catch (err) {
      abort(err);
    }
  }

  function getBinaryPromise() {
    // If we don't have the binary yet, try to to load it asynchronously.
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
    if (!wasmBinary && (ENVIRONMENT_IS_WEB )) {
      if (typeof fetch === 'function'
      ) {
        return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
          if (!response['ok']) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response['arrayBuffer']();
        }).catch(function () {
            return getBinary(wasmBinaryFile);
        });
      }
    }

    // Otherwise, getBinary should be able to get it synchronously
    return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
  }

  // Create the wasm instance.
  // Receives the wasm imports, returns the exports.
  function createWasm() {
    // prepare imports
    var info = {
      'env': asmLibraryArg,
      'wasi_snapshot_preview1': asmLibraryArg,
    };
    // Load the wasm module and create an instance of using native support in the JS engine.
    // handle a generated wasm instance, receiving its exports and
    // performing other necessary setup
    /** @param {WebAssembly.Module=} module*/
    function receiveInstance(instance, module) {
      var exports = instance.exports;

      Module['asm'] = exports;

      wasmMemory = Module['asm']['memory'];
      assert(wasmMemory, "memory not found in wasm exports");
      // This assertion doesn't hold when emscripten is run in --post-link
      // mode.
      // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
      //assert(wasmMemory.buffer.byteLength === 33554432);
      updateGlobalBufferAndViews(wasmMemory.buffer);

      wasmTable = Module['asm']['__indirect_function_table'];
      assert(wasmTable, "table not found in wasm exports");

      addOnInit(Module['asm']['__wasm_call_ctors']);

      removeRunDependency('wasm-instantiate');
    }
    // we can't run yet (except in a pthread, where we have a custom sync instantiator)
    addRunDependency('wasm-instantiate');

    // Prefer streaming instantiation if available.
    // Async compilation can be confusing when an error on the page overwrites Module
    // (for example, if the order of elements is wrong, and the one defining Module is
    // later), so we save Module and check it later.
    var trueModule = Module;
    function receiveInstantiationResult(result) {
      // 'result' is a ResultObject object which has both the module and instance.
      // receiveInstance() will swap in the exports (to Module.asm) so they can be called
      assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
      trueModule = null;
      // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
      // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
      receiveInstance(result['instance']);
    }

    function instantiateArrayBuffer(receiver) {
      return getBinaryPromise().then(function(binary) {
        return WebAssembly.instantiate(binary, info);
      }).then(function (instance) {
        return instance;
      }).then(receiver, function(reason) {
        err('failed to asynchronously prepare wasm: ' + reason);

        // Warn on some common problems.
        if (isFileURI(wasmBinaryFile)) {
          err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
        }
        abort(reason);
      });
    }

    function instantiateAsync() {
      if (!wasmBinary &&
          typeof WebAssembly.instantiateStreaming === 'function' &&
          !isDataURI(wasmBinaryFile) &&
          typeof fetch === 'function') {
        return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
          var result = WebAssembly.instantiateStreaming(response, info);

          return result.then(
            receiveInstantiationResult,
            function(reason) {
              // We expect the most common failure cause to be a bad MIME type for the binary,
              // in which case falling back to ArrayBuffer instantiation should work.
              err('wasm streaming compile failed: ' + reason);
              err('falling back to ArrayBuffer instantiation');
              return instantiateArrayBuffer(receiveInstantiationResult);
            });
        });
      } else {
        return instantiateArrayBuffer(receiveInstantiationResult);
      }
    }

    // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
    // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
    // to any other async startup actions they are performing.
    if (Module['instantiateWasm']) {
      try {
        var exports = Module['instantiateWasm'](info, receiveInstance);
        return exports;
      } catch(e) {
        err('Module.instantiateWasm callback failed with error: ' + e);
        return false;
      }
    }

    // If instantiation fails, reject the module ready promise.
    instantiateAsync().catch(readyPromiseReject);
    return {}; // no exports yet; we'll fill them in later
  }






    function callRuntimeCallbacks(callbacks) {
        while (callbacks.length > 0) {
          var callback = callbacks.shift();
          if (typeof callback == 'function') {
            callback(Module); // Pass the module as the first argument.
            continue;
          }
          var func = callback.func;
          if (typeof func === 'number') {
            if (callback.arg === undefined) {
              wasmTable.get(func)();
            } else {
              wasmTable.get(func)(callback.arg);
            }
          } else {
            func(callback.arg === undefined ? null : callback.arg);
          }
        }
      }

    /** @type {function(...*):?} */
    function __ZN2v82V813DisposeGlobalEPm(
    ) {
    err('missing function: _ZN2v82V813DisposeGlobalEPm'); abort(-1);
    }

    /** @type {function(...*):?} */
    function __ZN2v82V89ClearWeakEPm(
    ) {
    err('missing function: _ZN2v82V89ClearWeakEPm'); abort(-1);
    }

    /** @type {function(...*):?} */
    function __ZN2v87Isolate37AdjustAmountOfExternalAllocatedMemoryEx(
    ) {
    err('missing function: _ZN2v87Isolate37AdjustAmountOfExternalAllocatedMemoryEx'); abort(-1);
    }

    /** @type {function(...*):?} */
    function __ZN6puppet3fdn6LoggerEPKcz(
    ) {
    err('missing function: _ZN6puppet3fdn6LoggerEPKcz'); abort(-1);
    }

    /** @type {function(...*):?} */
    function __ZN6puppet6engine12AddDirtyNodeEPNS0_12OpaqueEngineENS0_10NodeHandleE(
    ) {
    err('missing function: _ZN6puppet6engine12AddDirtyNodeEPNS0_12OpaqueEngineENS0_10NodeHandleE'); abort(-1);
    }

    function ___assert_fail(condition, filename, line, func) {
        abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
      }

    function ___cxa_allocate_exception(size) {
        // Thrown object is prepended by exception metadata block
        return _malloc(size + 16) + 16;
      }

    function _atexit(func, arg) {
      }
    function ___cxa_atexit(a0,a1
    ) {
    return _atexit();
    }

    function ExceptionInfo(excPtr) {
        this.excPtr = excPtr;
        this.ptr = excPtr - 16;
    
        this.set_type = function(type) {
          HEAP32[(((this.ptr)+(4))>>2)] = type;
        };
    
        this.get_type = function() {
          return HEAP32[(((this.ptr)+(4))>>2)];
        };
    
        this.set_destructor = function(destructor) {
          HEAP32[(((this.ptr)+(8))>>2)] = destructor;
        };
    
        this.get_destructor = function() {
          return HEAP32[(((this.ptr)+(8))>>2)];
        };
    
        this.set_refcount = function(refcount) {
          HEAP32[((this.ptr)>>2)] = refcount;
        };
    
        this.set_caught = function (caught) {
          caught = caught ? 1 : 0;
          HEAP8[(((this.ptr)+(12))>>0)] = caught;
        };
    
        this.get_caught = function () {
          return HEAP8[(((this.ptr)+(12))>>0)] != 0;
        };
    
        this.set_rethrown = function (rethrown) {
          rethrown = rethrown ? 1 : 0;
          HEAP8[(((this.ptr)+(13))>>0)] = rethrown;
        };
    
        this.get_rethrown = function () {
          return HEAP8[(((this.ptr)+(13))>>0)] != 0;
        };
    
        // Initialize native structure fields. Should be called once after allocated.
        this.init = function(type, destructor) {
          this.set_type(type);
          this.set_destructor(destructor);
          this.set_refcount(0);
          this.set_caught(false);
          this.set_rethrown(false);
        };
    
        this.add_ref = function() {
          var value = HEAP32[((this.ptr)>>2)];
          HEAP32[((this.ptr)>>2)] = value + 1;
        };
    
        // Returns true if last reference released.
        this.release_ref = function() {
          var prev = HEAP32[((this.ptr)>>2)];
          HEAP32[((this.ptr)>>2)] = prev - 1;
          assert(prev > 0);
          return prev === 1;
        };
      }
    function ___cxa_throw(ptr, type, destructor) {
        var info = new ExceptionInfo(ptr);
        // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
        info.init(type, destructor);
        throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s NO_DISABLE_EXCEPTION_CATCHING or -s EXCEPTION_CATCHING_ALLOWED=[..] to catch.";
      }

    var structRegistrations = {};
    
    function runDestructors(destructors) {
        while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
        }
      }
    
    function simpleReadValueFromPointer(pointer) {
        return this['fromWireType'](HEAPU32[pointer >> 2]);
      }
    
    var awaitingDependencies = {};
    
    var registeredTypes = {};
    
    var typeDependencies = {};
    
    var char_0 = 48;
    
    var char_9 = 57;
    function makeLegalFunctionName(name) {
        if (undefined === name) {
            return '_unknown';
        }
        name = name.replace(/[^a-zA-Z0-9_]/g, '$');
        var f = name.charCodeAt(0);
        if (f >= char_0 && f <= char_9) {
            return '_' + name;
        } else {
            return name;
        }
      }
    function createNamedFunction(name, body) {
        name = makeLegalFunctionName(name);
        /*jshint evil:true*/
        return new Function(
            "body",
            "return function " + name + "() {\n" +
            "    \"use strict\";" +
            "    return body.apply(this, arguments);\n" +
            "};\n"
        )(body);
      }
    function extendError(baseErrorType, errorName) {
        var errorClass = createNamedFunction(errorName, function(message) {
            this.name = errorName;
            this.message = message;
    
            var stack = (new Error(message)).stack;
            if (stack !== undefined) {
                this.stack = this.toString() + '\n' +
                    stack.replace(/^Error(:[^\n]*)?\n/, '');
            }
        });
        errorClass.prototype = Object.create(baseErrorType.prototype);
        errorClass.prototype.constructor = errorClass;
        errorClass.prototype.toString = function() {
            if (this.message === undefined) {
                return this.name;
            } else {
                return this.name + ': ' + this.message;
            }
        };
    
        return errorClass;
      }
    var InternalError = undefined;
    function throwInternalError(message) {
        throw new InternalError(message);
      }
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
        myTypes.forEach(function(type) {
            typeDependencies[type] = dependentTypes;
        });
    
        function onComplete(typeConverters) {
            var myTypeConverters = getTypeConverters(typeConverters);
            if (myTypeConverters.length !== myTypes.length) {
                throwInternalError('Mismatched type converter count');
            }
            for (var i = 0; i < myTypes.length; ++i) {
                registerType(myTypes[i], myTypeConverters[i]);
            }
        }
    
        var typeConverters = new Array(dependentTypes.length);
        var unregisteredTypes = [];
        var registered = 0;
        dependentTypes.forEach(function(dt, i) {
            if (registeredTypes.hasOwnProperty(dt)) {
                typeConverters[i] = registeredTypes[dt];
            } else {
                unregisteredTypes.push(dt);
                if (!awaitingDependencies.hasOwnProperty(dt)) {
                    awaitingDependencies[dt] = [];
                }
                awaitingDependencies[dt].push(function() {
                    typeConverters[i] = registeredTypes[dt];
                    ++registered;
                    if (registered === unregisteredTypes.length) {
                        onComplete(typeConverters);
                    }
                });
            }
        });
        if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
        }
      }
    function __embind_finalize_value_object(structType) {
        var reg = structRegistrations[structType];
        delete structRegistrations[structType];
    
        var rawConstructor = reg.rawConstructor;
        var rawDestructor = reg.rawDestructor;
        var fieldRecords = reg.fields;
        var fieldTypes = fieldRecords.map(function(field) { return field.getterReturnType; }).
                  concat(fieldRecords.map(function(field) { return field.setterArgumentType; }));
        whenDependentTypesAreResolved([structType], fieldTypes, function(fieldTypes) {
            var fields = {};
            fieldRecords.forEach(function(field, i) {
                var fieldName = field.fieldName;
                var getterReturnType = fieldTypes[i];
                var getter = field.getter;
                var getterContext = field.getterContext;
                var setterArgumentType = fieldTypes[i + fieldRecords.length];
                var setter = field.setter;
                var setterContext = field.setterContext;
                fields[fieldName] = {
                    read: function(ptr) {
                        return getterReturnType['fromWireType'](
                            getter(getterContext, ptr));
                    },
                    write: function(ptr, o) {
                        var destructors = [];
                        setter(setterContext, ptr, setterArgumentType['toWireType'](destructors, o));
                        runDestructors(destructors);
                    }
                };
            });
    
            return [{
                name: reg.name,
                'fromWireType': function(ptr) {
                    var rv = {};
                    for (var i in fields) {
                        rv[i] = fields[i].read(ptr);
                    }
                    rawDestructor(ptr);
                    return rv;
                },
                'toWireType': function(destructors, o) {
                    // todo: Here we have an opportunity for -O3 level "unsafe" optimizations:
                    // assume all fields are present without checking.
                    for (var fieldName in fields) {
                        if (!(fieldName in o)) {
                            throw new TypeError('Missing field:  "' + fieldName + '"');
                        }
                    }
                    var ptr = rawConstructor();
                    for (fieldName in fields) {
                        fields[fieldName].write(ptr, o[fieldName]);
                    }
                    if (destructors !== null) {
                        destructors.push(rawDestructor, ptr);
                    }
                    return ptr;
                },
                'argPackAdvance': 8,
                'readValueFromPointer': simpleReadValueFromPointer,
                destructorFunction: rawDestructor,
            }];
        });
      }

    function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}

    function getShiftFromSize(size) {
        switch (size) {
            case 1: return 0;
            case 2: return 1;
            case 4: return 2;
            case 8: return 3;
            default:
                throw new TypeError('Unknown type size: ' + size);
        }
      }
    
    function embind_init_charCodes() {
        var codes = new Array(256);
        for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
        }
        embind_charCodes = codes;
      }
    var embind_charCodes = undefined;
    function readLatin1String(ptr) {
        var ret = "";
        var c = ptr;
        while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
        }
        return ret;
      }
    
    var BindingError = undefined;
    function throwBindingError(message) {
        throw new BindingError(message);
      }
    /** @param {Object=} options */
    function registerType(rawType, registeredInstance, options) {
        options = options || {};
    
        if (!('argPackAdvance' in registeredInstance)) {
            throw new TypeError('registerType registeredInstance requires argPackAdvance');
        }
    
        var name = registeredInstance.name;
        if (!rawType) {
            throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
        }
        if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
                return;
            } else {
                throwBindingError("Cannot register type '" + name + "' twice");
            }
        }
    
        registeredTypes[rawType] = registeredInstance;
        delete typeDependencies[rawType];
    
        if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach(function(cb) {
                cb();
            });
        }
      }
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
        var shift = getShiftFromSize(size);
    
        name = readLatin1String(name);
        registerType(rawType, {
            name: name,
            'fromWireType': function(wt) {
                // ambiguous emscripten ABI: sometimes return values are
                // true or false, and sometimes integers (0 or 1)
                return !!wt;
            },
            'toWireType': function(destructors, o) {
                return o ? trueValue : falseValue;
            },
            'argPackAdvance': 8,
            'readValueFromPointer': function(pointer) {
                // TODO: if heap is fixed (like in asm.js) this could be executed outside
                var heap;
                if (size === 1) {
                    heap = HEAP8;
                } else if (size === 2) {
                    heap = HEAP16;
                } else if (size === 4) {
                    heap = HEAP32;
                } else {
                    throw new TypeError("Unknown boolean type size: " + name);
                }
                return this['fromWireType'](heap[pointer >> shift]);
            },
            destructorFunction: null, // This type does not need a destructor
        });
      }

    function ClassHandle_isAliasOf(other) {
        if (!(this instanceof ClassHandle)) {
            return false;
        }
        if (!(other instanceof ClassHandle)) {
            return false;
        }
    
        var leftClass = this.$$.ptrType.registeredClass;
        var left = this.$$.ptr;
        var rightClass = other.$$.ptrType.registeredClass;
        var right = other.$$.ptr;
    
        while (leftClass.baseClass) {
            left = leftClass.upcast(left);
            leftClass = leftClass.baseClass;
        }
    
        while (rightClass.baseClass) {
            right = rightClass.upcast(right);
            rightClass = rightClass.baseClass;
        }
    
        return leftClass === rightClass && left === right;
      }
    
    function shallowCopyInternalPointer(o) {
        return {
            count: o.count,
            deleteScheduled: o.deleteScheduled,
            preservePointerOnDelete: o.preservePointerOnDelete,
            ptr: o.ptr,
            ptrType: o.ptrType,
            smartPtr: o.smartPtr,
            smartPtrType: o.smartPtrType,
        };
      }
    
    function throwInstanceAlreadyDeleted(obj) {
        function getInstanceTypeName(handle) {
          return handle.$$.ptrType.registeredClass.name;
        }
        throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
      }
    
    var finalizationGroup = false;
    
    function detachFinalizer(handle) {}
    
    function runDestructor($$) {
        if ($$.smartPtr) {
            $$.smartPtrType.rawDestructor($$.smartPtr);
        } else {
            $$.ptrType.registeredClass.rawDestructor($$.ptr);
        }
      }
    function releaseClassHandle($$) {
        $$.count.value -= 1;
        var toDelete = 0 === $$.count.value;
        if (toDelete) {
            runDestructor($$);
        }
      }
    function attachFinalizer(handle) {
        if ('undefined' === typeof FinalizationGroup) {
            attachFinalizer = function (handle) { return handle; };
            return handle;
        }
        // If the running environment has a FinalizationGroup (see
        // https://github.com/tc39/proposal-weakrefs), then attach finalizers
        // for class handles.  We check for the presence of FinalizationGroup
        // at run-time, not build-time.
        finalizationGroup = new FinalizationGroup(function (iter) {
            for (var result = iter.next(); !result.done; result = iter.next()) {
                var $$ = result.value;
                if (!$$.ptr) {
                    console.warn('object already deleted: ' + $$.ptr);
                } else {
                    releaseClassHandle($$);
                }
            }
        });
        attachFinalizer = function(handle) {
            finalizationGroup.register(handle, handle.$$, handle.$$);
            return handle;
        };
        detachFinalizer = function(handle) {
            finalizationGroup.unregister(handle.$$);
        };
        return attachFinalizer(handle);
      }
    function ClassHandle_clone() {
        if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
        }
    
        if (this.$$.preservePointerOnDelete) {
            this.$$.count.value += 1;
            return this;
        } else {
            var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
                $$: {
                    value: shallowCopyInternalPointer(this.$$),
                }
            }));
    
            clone.$$.count.value += 1;
            clone.$$.deleteScheduled = false;
            return clone;
        }
      }
    
    function ClassHandle_delete() {
        if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
        }
    
        if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError('Object already scheduled for deletion');
        }
    
        detachFinalizer(this);
        releaseClassHandle(this.$$);
    
        if (!this.$$.preservePointerOnDelete) {
            this.$$.smartPtr = undefined;
            this.$$.ptr = undefined;
        }
      }
    
    function ClassHandle_isDeleted() {
        return !this.$$.ptr;
      }
    
    var delayFunction = undefined;
    
    var deletionQueue = [];
    
    function flushPendingDeletes() {
        while (deletionQueue.length) {
            var obj = deletionQueue.pop();
            obj.$$.deleteScheduled = false;
            obj['delete']();
        }
      }
    function ClassHandle_deleteLater() {
        if (!this.$$.ptr) {
            throwInstanceAlreadyDeleted(this);
        }
        if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
            throwBindingError('Object already scheduled for deletion');
        }
        deletionQueue.push(this);
        if (deletionQueue.length === 1 && delayFunction) {
            delayFunction(flushPendingDeletes);
        }
        this.$$.deleteScheduled = true;
        return this;
      }
    function init_ClassHandle() {
        ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
        ClassHandle.prototype['clone'] = ClassHandle_clone;
        ClassHandle.prototype['delete'] = ClassHandle_delete;
        ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
        ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
      }
    function ClassHandle() {
      }
    
    var registeredPointers = {};
    
    function ensureOverloadTable(proto, methodName, humanName) {
        if (undefined === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.
            proto[methodName] = function() {
                // TODO This check can be removed in -O3 level "unsafe" optimizations.
                if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                    throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
                }
                return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
            };
            // Move the previous function into the overload table.
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
        }
      }
    /** @param {number=} numArguments */
    function exposePublicSymbol(name, value, numArguments) {
        if (Module.hasOwnProperty(name)) {
            if (undefined === numArguments || (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])) {
                throwBindingError("Cannot register public name '" + name + "' twice");
            }
    
            // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
            // that routes between the two.
            ensureOverloadTable(Module, name, name);
            if (Module.hasOwnProperty(numArguments)) {
                throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
            }
            // Add the new function into the overload table.
            Module[name].overloadTable[numArguments] = value;
        }
        else {
            Module[name] = value;
            if (undefined !== numArguments) {
                Module[name].numArguments = numArguments;
            }
        }
      }
    
    /** @constructor */
    function RegisteredClass(
        name,
        constructor,
        instancePrototype,
        rawDestructor,
        baseClass,
        getActualType,
        upcast,
        downcast
      ) {
        this.name = name;
        this.constructor = constructor;
        this.instancePrototype = instancePrototype;
        this.rawDestructor = rawDestructor;
        this.baseClass = baseClass;
        this.getActualType = getActualType;
        this.upcast = upcast;
        this.downcast = downcast;
        this.pureVirtualFunctions = [];
      }
    
    function upcastPointer(ptr, ptrClass, desiredClass) {
        while (ptrClass !== desiredClass) {
            if (!ptrClass.upcast) {
                throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
            }
            ptr = ptrClass.upcast(ptr);
            ptrClass = ptrClass.baseClass;
        }
        return ptr;
      }
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
        if (handle === null) {
            if (this.isReference) {
                throwBindingError('null is not a valid ' + this.name);
            }
            return 0;
        }
    
        if (!handle.$$) {
            throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
        }
        if (!handle.$$.ptr) {
            throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
        }
        var handleClass = handle.$$.ptrType.registeredClass;
        var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
        return ptr;
      }
    
    function genericPointerToWireType(destructors, handle) {
        var ptr;
        if (handle === null) {
            if (this.isReference) {
                throwBindingError('null is not a valid ' + this.name);
            }
    
            if (this.isSmartPointer) {
                ptr = this.rawConstructor();
                if (destructors !== null) {
                    destructors.push(this.rawDestructor, ptr);
                }
                return ptr;
            } else {
                return 0;
            }
        }
    
        if (!handle.$$) {
            throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
        }
        if (!handle.$$.ptr) {
            throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
        }
        if (!this.isConst && handle.$$.ptrType.isConst) {
            throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
        }
        var handleClass = handle.$$.ptrType.registeredClass;
        ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
    
        if (this.isSmartPointer) {
            // TODO: this is not strictly true
            // We could support BY_EMVAL conversions from raw pointers to smart pointers
            // because the smart pointer can hold a reference to the handle
            if (undefined === handle.$$.smartPtr) {
                throwBindingError('Passing raw pointer to smart pointer is illegal');
            }
    
            switch (this.sharingPolicy) {
                case 0: // NONE
                    // no upcasting
                    if (handle.$$.smartPtrType === this) {
                        ptr = handle.$$.smartPtr;
                    } else {
                        throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
                    }
                    break;
    
                case 1: // INTRUSIVE
                    ptr = handle.$$.smartPtr;
                    break;
    
                case 2: // BY_EMVAL
                    if (handle.$$.smartPtrType === this) {
                        ptr = handle.$$.smartPtr;
                    } else {
                        var clonedHandle = handle['clone']();
                        ptr = this.rawShare(
                            ptr,
                            __emval_register(function() {
                                clonedHandle['delete']();
                            })
                        );
                        if (destructors !== null) {
                            destructors.push(this.rawDestructor, ptr);
                        }
                    }
                    break;
    
                default:
                    throwBindingError('Unsupporting sharing policy');
            }
        }
        return ptr;
      }
    
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
        if (handle === null) {
            if (this.isReference) {
                throwBindingError('null is not a valid ' + this.name);
            }
            return 0;
        }
    
        if (!handle.$$) {
            throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
        }
        if (!handle.$$.ptr) {
            throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
        }
        if (handle.$$.ptrType.isConst) {
            throwBindingError('Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name);
        }
        var handleClass = handle.$$.ptrType.registeredClass;
        var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
        return ptr;
      }
    
    function RegisteredPointer_getPointee(ptr) {
        if (this.rawGetPointee) {
            ptr = this.rawGetPointee(ptr);
        }
        return ptr;
      }
    
    function RegisteredPointer_destructor(ptr) {
        if (this.rawDestructor) {
            this.rawDestructor(ptr);
        }
      }
    
    function RegisteredPointer_deleteObject(handle) {
        if (handle !== null) {
            handle['delete']();
        }
      }
    
    function downcastPointer(ptr, ptrClass, desiredClass) {
        if (ptrClass === desiredClass) {
            return ptr;
        }
        if (undefined === desiredClass.baseClass) {
            return null; // no conversion
        }
    
        var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
        if (rv === null) {
            return null;
        }
        return desiredClass.downcast(rv);
      }
    
    function getInheritedInstanceCount() {
        return Object.keys(registeredInstances).length;
      }
    
    function getLiveInheritedInstances() {
        var rv = [];
        for (var k in registeredInstances) {
            if (registeredInstances.hasOwnProperty(k)) {
                rv.push(registeredInstances[k]);
            }
        }
        return rv;
      }
    
    function setDelayFunction(fn) {
        delayFunction = fn;
        if (deletionQueue.length && delayFunction) {
            delayFunction(flushPendingDeletes);
        }
      }
    function init_embind() {
        Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
        Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
        Module['flushPendingDeletes'] = flushPendingDeletes;
        Module['setDelayFunction'] = setDelayFunction;
      }
    var registeredInstances = {};
    
    function getBasestPointer(class_, ptr) {
        if (ptr === undefined) {
            throwBindingError('ptr should not be undefined');
        }
        while (class_.baseClass) {
            ptr = class_.upcast(ptr);
            class_ = class_.baseClass;
        }
        return ptr;
      }
    function getInheritedInstance(class_, ptr) {
        ptr = getBasestPointer(class_, ptr);
        return registeredInstances[ptr];
      }
    
    function makeClassHandle(prototype, record) {
        if (!record.ptrType || !record.ptr) {
            throwInternalError('makeClassHandle requires ptr and ptrType');
        }
        var hasSmartPtrType = !!record.smartPtrType;
        var hasSmartPtr = !!record.smartPtr;
        if (hasSmartPtrType !== hasSmartPtr) {
            throwInternalError('Both smartPtrType and smartPtr must be specified');
        }
        record.count = { value: 1 };
        return attachFinalizer(Object.create(prototype, {
            $$: {
                value: record,
            },
        }));
      }
    function RegisteredPointer_fromWireType(ptr) {
        // ptr is a raw pointer (or a raw smartpointer)
    
        // rawPointer is a maybe-null raw pointer
        var rawPointer = this.getPointee(ptr);
        if (!rawPointer) {
            this.destructor(ptr);
            return null;
        }
    
        var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
        if (undefined !== registeredInstance) {
            // JS object has been neutered, time to repopulate it
            if (0 === registeredInstance.$$.count.value) {
                registeredInstance.$$.ptr = rawPointer;
                registeredInstance.$$.smartPtr = ptr;
                return registeredInstance['clone']();
            } else {
                // else, just increment reference count on existing object
                // it already has a reference to the smart pointer
                var rv = registeredInstance['clone']();
                this.destructor(ptr);
                return rv;
            }
        }
    
        function makeDefaultHandle() {
            if (this.isSmartPointer) {
                return makeClassHandle(this.registeredClass.instancePrototype, {
                    ptrType: this.pointeeType,
                    ptr: rawPointer,
                    smartPtrType: this,
                    smartPtr: ptr,
                });
            } else {
                return makeClassHandle(this.registeredClass.instancePrototype, {
                    ptrType: this,
                    ptr: ptr,
                });
            }
        }
    
        var actualType = this.registeredClass.getActualType(rawPointer);
        var registeredPointerRecord = registeredPointers[actualType];
        if (!registeredPointerRecord) {
            return makeDefaultHandle.call(this);
        }
    
        var toType;
        if (this.isConst) {
            toType = registeredPointerRecord.constPointerType;
        } else {
            toType = registeredPointerRecord.pointerType;
        }
        var dp = downcastPointer(
            rawPointer,
            this.registeredClass,
            toType.registeredClass);
        if (dp === null) {
            return makeDefaultHandle.call(this);
        }
        if (this.isSmartPointer) {
            return makeClassHandle(toType.registeredClass.instancePrototype, {
                ptrType: toType,
                ptr: dp,
                smartPtrType: this,
                smartPtr: ptr,
            });
        } else {
            return makeClassHandle(toType.registeredClass.instancePrototype, {
                ptrType: toType,
                ptr: dp,
            });
        }
      }
    function init_RegisteredPointer() {
        RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
        RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
        RegisteredPointer.prototype['argPackAdvance'] = 8;
        RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
        RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
        RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
      }
    /** @constructor
        @param {*=} pointeeType,
        @param {*=} sharingPolicy,
        @param {*=} rawGetPointee,
        @param {*=} rawConstructor,
        @param {*=} rawShare,
        @param {*=} rawDestructor,
         */
    function RegisteredPointer(
        name,
        registeredClass,
        isReference,
        isConst,
    
        // smart pointer properties
        isSmartPointer,
        pointeeType,
        sharingPolicy,
        rawGetPointee,
        rawConstructor,
        rawShare,
        rawDestructor
      ) {
        this.name = name;
        this.registeredClass = registeredClass;
        this.isReference = isReference;
        this.isConst = isConst;
    
        // smart pointer properties
        this.isSmartPointer = isSmartPointer;
        this.pointeeType = pointeeType;
        this.sharingPolicy = sharingPolicy;
        this.rawGetPointee = rawGetPointee;
        this.rawConstructor = rawConstructor;
        this.rawShare = rawShare;
        this.rawDestructor = rawDestructor;
    
        if (!isSmartPointer && registeredClass.baseClass === undefined) {
            if (isConst) {
                this['toWireType'] = constNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
            } else {
                this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
            }
        } else {
            this['toWireType'] = genericPointerToWireType;
            // Here we must leave this.destructorFunction undefined, since whether genericPointerToWireType returns
            // a pointer that needs to be freed up is runtime-dependent, and cannot be evaluated at registration time.
            // TODO: Create an alternative mechanism that allows removing the use of var destructors = []; array in
            //       craftInvokerFunction altogether.
        }
      }
    
    /** @param {number=} numArguments */
    function replacePublicSymbol(name, value, numArguments) {
        if (!Module.hasOwnProperty(name)) {
            throwInternalError('Replacing nonexistant public symbol');
        }
        // If there's an overload table for this symbol, replace the symbol in the overload table instead.
        if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
            Module[name].overloadTable[numArguments] = value;
        }
        else {
            Module[name] = value;
            Module[name].argCount = numArguments;
        }
      }
    
    function dynCallLegacy(sig, ptr, args) {
        assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
        if (args && args.length) {
          // j (64-bit integer) must be passed in as two numbers [low 32, high 32].
          assert(args.length === sig.substring(1).replace(/j/g, '--').length);
        } else {
          assert(sig.length == 1);
        }
        var f = Module["dynCall_" + sig];
        return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
      }
    function dynCall(sig, ptr, args) {
        // Without WASM_BIGINT support we cannot directly call function with i64 as
        // part of thier signature, so we rely the dynCall functions generated by
        // wasm-emscripten-finalize
        if (sig.includes('j')) {
          return dynCallLegacy(sig, ptr, args);
        }
        assert(wasmTable.get(ptr), 'missing table entry in dynCall: ' + ptr);
        return wasmTable.get(ptr).apply(null, args)
      }
    function getDynCaller(sig, ptr) {
        assert(sig.includes('j'), 'getDynCaller should only be called with i64 sigs');
        var argCache = [];
        return function() {
          argCache.length = arguments.length;
          for (var i = 0; i < arguments.length; i++) {
            argCache[i] = arguments[i];
          }
          return dynCall(sig, ptr, argCache);
        };
      }
    function embind__requireFunction(signature, rawFunction) {
        signature = readLatin1String(signature);
    
        function makeDynCaller() {
          if (signature.includes('j')) {
            return getDynCaller(signature, rawFunction);
          }
          return wasmTable.get(rawFunction);
        }
    
        var fp = makeDynCaller();
        if (typeof fp !== "function") {
            throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
        }
        return fp;
      }
    
    var UnboundTypeError = undefined;
    
    function getTypeName(type) {
        var ptr = ___getTypeName(type);
        var rv = readLatin1String(ptr);
        _free(ptr);
        return rv;
      }
    function throwUnboundTypeError(message, types) {
        var unboundTypes = [];
        var seen = {};
        function visit(type) {
            if (seen[type]) {
                return;
            }
            if (registeredTypes[type]) {
                return;
            }
            if (typeDependencies[type]) {
                typeDependencies[type].forEach(visit);
                return;
            }
            unboundTypes.push(type);
            seen[type] = true;
        }
        types.forEach(visit);
    
        throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
      }
    function __embind_register_class(
        rawType,
        rawPointerType,
        rawConstPointerType,
        baseClassRawType,
        getActualTypeSignature,
        getActualType,
        upcastSignature,
        upcast,
        downcastSignature,
        downcast,
        name,
        destructorSignature,
        rawDestructor
      ) {
        name = readLatin1String(name);
        getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
        if (upcast) {
            upcast = embind__requireFunction(upcastSignature, upcast);
        }
        if (downcast) {
            downcast = embind__requireFunction(downcastSignature, downcast);
        }
        rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
        var legalFunctionName = makeLegalFunctionName(name);
    
        exposePublicSymbol(legalFunctionName, function() {
            // this code cannot run if baseClassRawType is zero
            throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
        });
    
        whenDependentTypesAreResolved(
            [rawType, rawPointerType, rawConstPointerType],
            baseClassRawType ? [baseClassRawType] : [],
            function(base) {
                base = base[0];
    
                var baseClass;
                var basePrototype;
                if (baseClassRawType) {
                    baseClass = base.registeredClass;
                    basePrototype = baseClass.instancePrototype;
                } else {
                    basePrototype = ClassHandle.prototype;
                }
    
                var constructor = createNamedFunction(legalFunctionName, function() {
                    if (Object.getPrototypeOf(this) !== instancePrototype) {
                        throw new BindingError("Use 'new' to construct " + name);
                    }
                    if (undefined === registeredClass.constructor_body) {
                        throw new BindingError(name + " has no accessible constructor");
                    }
                    var body = registeredClass.constructor_body[arguments.length];
                    if (undefined === body) {
                        throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                    }
                    return body.apply(this, arguments);
                });
    
                var instancePrototype = Object.create(basePrototype, {
                    constructor: { value: constructor },
                });
    
                constructor.prototype = instancePrototype;
    
                var registeredClass = new RegisteredClass(
                    name,
                    constructor,
                    instancePrototype,
                    rawDestructor,
                    baseClass,
                    getActualType,
                    upcast,
                    downcast);
    
                var referenceConverter = new RegisteredPointer(
                    name,
                    registeredClass,
                    true,
                    false,
                    false);
    
                var pointerConverter = new RegisteredPointer(
                    name + '*',
                    registeredClass,
                    false,
                    false,
                    false);
    
                var constPointerConverter = new RegisteredPointer(
                    name + ' const*',
                    registeredClass,
                    false,
                    true,
                    false);
    
                registeredPointers[rawType] = {
                    pointerType: pointerConverter,
                    constPointerType: constPointerConverter
                };
    
                replacePublicSymbol(legalFunctionName, constructor);
    
                return [referenceConverter, pointerConverter, constPointerConverter];
            }
        );
      }

    function heap32VectorToArray(count, firstElement) {
        var array = [];
        for (var i = 0; i < count; i++) {
            array.push(HEAP32[(firstElement >> 2) + i]);
        }
        return array;
      }
    function __embind_register_class_constructor(
        rawClassType,
        argCount,
        rawArgTypesAddr,
        invokerSignature,
        invoker,
        rawConstructor
      ) {
        assert(argCount > 0);
        var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
        invoker = embind__requireFunction(invokerSignature, invoker);
    
        whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = 'constructor ' + classType.name;
    
            if (undefined === classType.registeredClass.constructor_body) {
                classType.registeredClass.constructor_body = [];
            }
            if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
                throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount-1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            }
            classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
                throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
            };
    
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
                // Insert empty slot for context type (argTypes[1]).
                argTypes.splice(1, 0, null);
                classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
                return [];
            });
            return [];
        });
      }

    function new_(constructor, argumentList) {
        if (!(constructor instanceof Function)) {
            throw new TypeError('new_ called with constructor type ' + typeof(constructor) + " which is not a function");
        }
    
        /*
         * Previously, the following line was just:
    
         function dummy() {};
    
         * Unfortunately, Chrome was preserving 'dummy' as the object's name, even though at creation, the 'dummy' has the
         * correct constructor name.  Thus, objects created with IMVU.new would show up in the debugger as 'dummy', which
         * isn't very helpful.  Using IMVU.createNamedFunction addresses the issue.  Doublely-unfortunately, there's no way
         * to write a test for this behavior.  -NRD 2013.02.22
         */
        var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function(){});
        dummy.prototype = constructor.prototype;
        var obj = new dummy;
    
        var r = constructor.apply(obj, argumentList);
        return (r instanceof Object) ? r : obj;
      }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
        // humanName: a human-readable string name for the function to be generated.
        // argTypes: An array that contains the embind type objects for all types in the function signature.
        //    argTypes[0] is the type object for the function return value.
        //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
        //    argTypes[2...] are the actual function parameters.
        // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
        // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
        // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
        var argCount = argTypes.length;
    
        if (argCount < 2) {
            throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
        }
    
        var isClassMethodFunc = (argTypes[1] !== null && classType !== null);
    
        // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
    // TODO: This omits argument count check - enable only at -O3 or similar.
    //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
    //       return FUNCTION_TABLE[fn];
    //    }
    
        // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
        // TODO: Remove this completely once all function invokers are being dynamically generated.
        var needsDestructorStack = false;
    
        for (var i = 1; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here.
            if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) { // The type does not define a destructor function - must use dynamic stack
                needsDestructorStack = true;
                break;
            }
        }
    
        var returns = (argTypes[0].name !== "void");
    
        var argsList = "";
        var argsListWired = "";
        for (var i = 0; i < argCount - 2; ++i) {
            argsList += (i!==0?", ":"")+"arg"+i;
            argsListWired += (i!==0?", ":"")+"arg"+i+"Wired";
        }
    
        var invokerFnBody =
            "return function "+makeLegalFunctionName(humanName)+"("+argsList+") {\n" +
            "if (arguments.length !== "+(argCount - 2)+") {\n" +
                "throwBindingError('function "+humanName+" called with ' + arguments.length + ' arguments, expected "+(argCount - 2)+" args!');\n" +
            "}\n";
    
        if (needsDestructorStack) {
            invokerFnBody +=
                "var destructors = [];\n";
        }
    
        var dtorStack = needsDestructorStack ? "destructors" : "null";
        var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
        var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
    
        if (isClassMethodFunc) {
            invokerFnBody += "var thisWired = classParam.toWireType("+dtorStack+", this);\n";
        }
    
        for (var i = 0; i < argCount - 2; ++i) {
            invokerFnBody += "var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";
            args1.push("argType"+i);
            args2.push(argTypes[i+2]);
        }
    
        if (isClassMethodFunc) {
            argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
        }
    
        invokerFnBody +=
            (returns?"var rv = ":"") + "invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";
    
        if (needsDestructorStack) {
            invokerFnBody += "runDestructors(destructors);\n";
        } else {
            for (var i = isClassMethodFunc?1:2; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
                var paramName = (i === 1 ? "thisWired" : ("arg"+(i - 2)+"Wired"));
                if (argTypes[i].destructorFunction !== null) {
                    invokerFnBody += paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";
                    args1.push(paramName+"_dtor");
                    args2.push(argTypes[i].destructorFunction);
                }
            }
        }
    
        if (returns) {
            invokerFnBody += "var ret = retType.fromWireType(rv);\n" +
                             "return ret;\n";
        }
    
        invokerFnBody += "}\n";
    
        args1.push(invokerFnBody);
    
        var invokerFunction = new_(Function, args1).apply(null, args2);
        return invokerFunction;
      }
    function __embind_register_class_function(
        rawClassType,
        methodName,
        argCount,
        rawArgTypesAddr, // [ReturnType, ThisType, Args...]
        invokerSignature,
        rawInvoker,
        context,
        isPureVirtual
      ) {
        var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
        methodName = readLatin1String(methodName);
        rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
    
        whenDependentTypesAreResolved([], [rawClassType], function(classType) {
            classType = classType[0];
            var humanName = classType.name + '.' + methodName;
    
            if (methodName.startsWith("@@")) {
                methodName = Symbol[methodName.substring(2)];
            }
    
            if (isPureVirtual) {
                classType.registeredClass.pureVirtualFunctions.push(methodName);
            }
    
            function unboundTypesHandler() {
                throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
            }
    
            var proto = classType.registeredClass.instancePrototype;
            var method = proto[methodName];
            if (undefined === method || (undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2)) {
                // This is the first overload to be registered, OR we are replacing a function in the base class with a function in the derived class.
                unboundTypesHandler.argCount = argCount - 2;
                unboundTypesHandler.className = classType.name;
                proto[methodName] = unboundTypesHandler;
            } else {
                // There was an existing function with the same name registered. Set up a function overload routing table.
                ensureOverloadTable(proto, methodName, humanName);
                proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
            }
    
            whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
    
                var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
    
                // Replace the initial unbound-handler-stub function with the appropriate member function, now that all types
                // are resolved. If multiple overloads are registered for this function, the function goes into an overload table.
                if (undefined === proto[methodName].overloadTable) {
                    // Set argCount in case an overload is registered later
                    memberFunction.argCount = argCount - 2;
                    proto[methodName] = memberFunction;
                } else {
                    proto[methodName].overloadTable[argCount - 2] = memberFunction;
                }
    
                return [];
            });
            return [];
        });
      }

    function validateThis(this_, classType, humanName) {
        if (!(this_ instanceof Object)) {
            throwBindingError(humanName + ' with invalid "this": ' + this_);
        }
        if (!(this_ instanceof classType.registeredClass.constructor)) {
            throwBindingError(humanName + ' incompatible with "this" of type ' + this_.constructor.name);
        }
        if (!this_.$$.ptr) {
            throwBindingError('cannot call emscripten binding method ' + humanName + ' on deleted object');
        }
    
        // todo: kill this
        return upcastPointer(
            this_.$$.ptr,
            this_.$$.ptrType.registeredClass,
            classType.registeredClass);
      }
    function __embind_register_class_property(
        classType,
        fieldName,
        getterReturnType,
        getterSignature,
        getter,
        getterContext,
        setterArgumentType,
        setterSignature,
        setter,
        setterContext
      ) {
        fieldName = readLatin1String(fieldName);
        getter = embind__requireFunction(getterSignature, getter);
    
        whenDependentTypesAreResolved([], [classType], function(classType) {
            classType = classType[0];
            var humanName = classType.name + '.' + fieldName;
            var desc = {
                get: function() {
                    throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [getterReturnType, setterArgumentType]);
                },
                enumerable: true,
                configurable: true
            };
            if (setter) {
                desc.set = function() {
                    throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [getterReturnType, setterArgumentType]);
                };
            } else {
                desc.set = function(v) {
                    throwBindingError(humanName + ' is a read-only property');
                };
            }
    
            Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
    
            whenDependentTypesAreResolved(
                [],
                (setter ? [getterReturnType, setterArgumentType] : [getterReturnType]),
            function(types) {
                var getterReturnType = types[0];
                var desc = {
                    get: function() {
                        var ptr = validateThis(this, classType, humanName + ' getter');
                        return getterReturnType['fromWireType'](getter(getterContext, ptr));
                    },
                    enumerable: true
                };
    
                if (setter) {
                    setter = embind__requireFunction(setterSignature, setter);
                    var setterArgumentType = types[1];
                    desc.set = function(v) {
                        var ptr = validateThis(this, classType, humanName + ' setter');
                        var destructors = [];
                        setter(setterContext, ptr, setterArgumentType['toWireType'](destructors, v));
                        runDestructors(destructors);
                    };
                }
    
                Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
                return [];
            });
    
            return [];
        });
      }

    var emval_free_list = [];
    
    var emval_handle_array = [{},{value:undefined},{value:null},{value:true},{value:false}];
    function __emval_decref(handle) {
        if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
            emval_handle_array[handle] = undefined;
            emval_free_list.push(handle);
        }
      }
    
    function count_emval_handles() {
        var count = 0;
        for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== undefined) {
                ++count;
            }
        }
        return count;
      }
    
    function get_first_emval() {
        for (var i = 5; i < emval_handle_array.length; ++i) {
            if (emval_handle_array[i] !== undefined) {
                return emval_handle_array[i];
            }
        }
        return null;
      }
    function init_emval() {
        Module['count_emval_handles'] = count_emval_handles;
        Module['get_first_emval'] = get_first_emval;
      }
    function __emval_register(value) {
        switch (value) {
          case undefined :{ return 1; }
          case null :{ return 2; }
          case true :{ return 3; }
          case false :{ return 4; }
          default:{
            var handle = emval_free_list.length ?
                emval_free_list.pop() :
                emval_handle_array.length;
    
            emval_handle_array[handle] = {refcount: 1, value: value};
            return handle;
            }
          }
      }
    function __embind_register_emval(rawType, name) {
        name = readLatin1String(name);
        registerType(rawType, {
            name: name,
            'fromWireType': function(handle) {
                var rv = emval_handle_array[handle].value;
                __emval_decref(handle);
                return rv;
            },
            'toWireType': function(destructors, value) {
                return __emval_register(value);
            },
            'argPackAdvance': 8,
            'readValueFromPointer': simpleReadValueFromPointer,
            destructorFunction: null, // This type does not need a destructor
    
            // TODO: do we need a deleteObject here?  write a test where
            // emval is passed into JS via an interface
        });
      }

    function enumReadValueFromPointer(name, shift, signed) {
        switch (shift) {
            case 0: return function(pointer) {
                var heap = signed ? HEAP8 : HEAPU8;
                return this['fromWireType'](heap[pointer]);
            };
            case 1: return function(pointer) {
                var heap = signed ? HEAP16 : HEAPU16;
                return this['fromWireType'](heap[pointer >> 1]);
            };
            case 2: return function(pointer) {
                var heap = signed ? HEAP32 : HEAPU32;
                return this['fromWireType'](heap[pointer >> 2]);
            };
            default:
                throw new TypeError("Unknown integer type: " + name);
        }
      }
    function __embind_register_enum(
        rawType,
        name,
        size,
        isSigned
      ) {
        var shift = getShiftFromSize(size);
        name = readLatin1String(name);
    
        function ctor() {
        }
        ctor.values = {};
    
        registerType(rawType, {
            name: name,
            constructor: ctor,
            'fromWireType': function(c) {
                return this.constructor.values[c];
            },
            'toWireType': function(destructors, c) {
                return c.value;
            },
            'argPackAdvance': 8,
            'readValueFromPointer': enumReadValueFromPointer(name, shift, isSigned),
            destructorFunction: null,
        });
        exposePublicSymbol(name, ctor);
      }

    function requireRegisteredType(rawType, humanName) {
        var impl = registeredTypes[rawType];
        if (undefined === impl) {
            throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
        }
        return impl;
      }
    function __embind_register_enum_value(
        rawEnumType,
        name,
        enumValue
      ) {
        var enumType = requireRegisteredType(rawEnumType, 'enum');
        name = readLatin1String(name);
    
        var Enum = enumType.constructor;
    
        var Value = Object.create(enumType.constructor.prototype, {
            value: {value: enumValue},
            constructor: {value: createNamedFunction(enumType.name + '_' + name, function() {})},
        });
        Enum.values[enumValue] = Value;
        Enum[name] = Value;
      }

    function _embind_repr(v) {
        if (v === null) {
            return 'null';
        }
        var t = typeof v;
        if (t === 'object' || t === 'array' || t === 'function') {
            return v.toString();
        } else {
            return '' + v;
        }
      }
    
    function floatReadValueFromPointer(name, shift) {
        switch (shift) {
            case 2: return function(pointer) {
                return this['fromWireType'](HEAPF32[pointer >> 2]);
            };
            case 3: return function(pointer) {
                return this['fromWireType'](HEAPF64[pointer >> 3]);
            };
            default:
                throw new TypeError("Unknown float type: " + name);
        }
      }
    function __embind_register_float(rawType, name, size) {
        var shift = getShiftFromSize(size);
        name = readLatin1String(name);
        registerType(rawType, {
            name: name,
            'fromWireType': function(value) {
                return value;
            },
            'toWireType': function(destructors, value) {
                // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
                // avoid the following if() and assume value is of proper type.
                if (typeof value !== "number" && typeof value !== "boolean") {
                    throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
                }
                return value;
            },
            'argPackAdvance': 8,
            'readValueFromPointer': floatReadValueFromPointer(name, shift),
            destructorFunction: null, // This type does not need a destructor
        });
      }

    function integerReadValueFromPointer(name, shift, signed) {
        // integers are quite common, so generate very specialized functions
        switch (shift) {
            case 0: return signed ?
                function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
                function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
            case 1: return signed ?
                function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
                function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
            case 2: return signed ?
                function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
                function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
            default:
                throw new TypeError("Unknown integer type: " + name);
        }
      }
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
        name = readLatin1String(name);
        if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
            maxRange = 4294967295;
        }
    
        var shift = getShiftFromSize(size);
    
        var fromWireType = function(value) {
            return value;
        };
    
        if (minRange === 0) {
            var bitshift = 32 - 8*size;
            fromWireType = function(value) {
                return (value << bitshift) >>> bitshift;
            };
        }
    
        var isUnsignedType = (name.includes('unsigned'));
    
        registerType(primitiveType, {
            name: name,
            'fromWireType': fromWireType,
            'toWireType': function(destructors, value) {
                // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
                // avoid the following two if()s and assume value is of proper type.
                if (typeof value !== "number" && typeof value !== "boolean") {
                    throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
                }
                if (value < minRange || value > maxRange) {
                    throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
                }
                return isUnsignedType ? (value >>> 0) : (value | 0);
            },
            'argPackAdvance': 8,
            'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
            destructorFunction: null, // This type does not need a destructor
        });
      }

    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
        var typeMapping = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
        ];
    
        var TA = typeMapping[dataTypeIndex];
    
        function decodeMemoryView(handle) {
            handle = handle >> 2;
            var heap = HEAPU32;
            var size = heap[handle]; // in elements
            var data = heap[handle + 1]; // byte offset into emscripten heap
            return new TA(buffer, data, size);
        }
    
        name = readLatin1String(name);
        registerType(rawType, {
            name: name,
            'fromWireType': decodeMemoryView,
            'argPackAdvance': 8,
            'readValueFromPointer': decodeMemoryView,
        }, {
            ignoreDuplicateRegistrations: true,
        });
      }

    function __embind_register_smart_ptr(
        rawType,
        rawPointeeType,
        name,
        sharingPolicy,
        getPointeeSignature,
        rawGetPointee,
        constructorSignature,
        rawConstructor,
        shareSignature,
        rawShare,
        destructorSignature,
        rawDestructor
      ) {
        name = readLatin1String(name);
        rawGetPointee = embind__requireFunction(getPointeeSignature, rawGetPointee);
        rawConstructor = embind__requireFunction(constructorSignature, rawConstructor);
        rawShare = embind__requireFunction(shareSignature, rawShare);
        rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
    
        whenDependentTypesAreResolved([rawType], [rawPointeeType], function(pointeeType) {
            pointeeType = pointeeType[0];
    
            var registeredPointer = new RegisteredPointer(
                name,
                pointeeType.registeredClass,
                false,
                false,
                // smart pointer properties
                true,
                pointeeType,
                sharingPolicy,
                rawGetPointee,
                rawConstructor,
                rawShare,
                rawDestructor);
            return [registeredPointer];
        });
      }

    function __embind_register_std_string(rawType, name) {
        name = readLatin1String(name);
        var stdStringIsUTF8
        //process only std::string bindings with UTF8 support, in contrast to e.g. std::basic_string<unsigned char>
        = (name === "std::string");
    
        registerType(rawType, {
            name: name,
            'fromWireType': function(value) {
                var length = HEAPU32[value >> 2];
    
                var str;
                if (stdStringIsUTF8) {
                    var decodeStartPtr = value + 4;
                    // Looping here to support possible embedded '0' bytes
                    for (var i = 0; i <= length; ++i) {
                        var currentBytePtr = value + 4 + i;
                        if (i == length || HEAPU8[currentBytePtr] == 0) {
                            var maxRead = currentBytePtr - decodeStartPtr;
                            var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                            if (str === undefined) {
                                str = stringSegment;
                            } else {
                                str += String.fromCharCode(0);
                                str += stringSegment;
                            }
                            decodeStartPtr = currentBytePtr + 1;
                        }
                    }
                } else {
                    var a = new Array(length);
                    for (var i = 0; i < length; ++i) {
                        a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
                    }
                    str = a.join('');
                }
    
                _free(value);
    
                return str;
            },
            'toWireType': function(destructors, value) {
                if (value instanceof ArrayBuffer) {
                    value = new Uint8Array(value);
                }
    
                var getLength;
                var valueIsOfTypeString = (typeof value === 'string');
    
                if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                    throwBindingError('Cannot pass non-string to std::string');
                }
                if (stdStringIsUTF8 && valueIsOfTypeString) {
                    getLength = function() {return lengthBytesUTF8(value);};
                } else {
                    getLength = function() {return value.length;};
                }
    
                // assumes 4-byte alignment
                var length = getLength();
                var ptr = _malloc(4 + length + 1);
                HEAPU32[ptr >> 2] = length;
                if (stdStringIsUTF8 && valueIsOfTypeString) {
                    stringToUTF8(value, ptr + 4, length + 1);
                } else {
                    if (valueIsOfTypeString) {
                        for (var i = 0; i < length; ++i) {
                            var charCode = value.charCodeAt(i);
                            if (charCode > 255) {
                                _free(ptr);
                                throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                            }
                            HEAPU8[ptr + 4 + i] = charCode;
                        }
                    } else {
                        for (var i = 0; i < length; ++i) {
                            HEAPU8[ptr + 4 + i] = value[i];
                        }
                    }
                }
    
                if (destructors !== null) {
                    destructors.push(_free, ptr);
                }
                return ptr;
            },
            'argPackAdvance': 8,
            'readValueFromPointer': simpleReadValueFromPointer,
            destructorFunction: function(ptr) { _free(ptr); },
        });
      }

    function __embind_register_std_wstring(rawType, charSize, name) {
        name = readLatin1String(name);
        var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
        if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            getHeap = function() { return HEAPU16; };
            shift = 1;
        } else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            getHeap = function() { return HEAPU32; };
            shift = 2;
        }
        registerType(rawType, {
            name: name,
            'fromWireType': function(value) {
                // Code mostly taken from _embind_register_std_string fromWireType
                var length = HEAPU32[value >> 2];
                var HEAP = getHeap();
                var str;
    
                var decodeStartPtr = value + 4;
                // Looping here to support possible embedded '0' bytes
                for (var i = 0; i <= length; ++i) {
                    var currentBytePtr = value + 4 + i * charSize;
                    if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                        var maxReadBytes = currentBytePtr - decodeStartPtr;
                        var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                        if (str === undefined) {
                            str = stringSegment;
                        } else {
                            str += String.fromCharCode(0);
                            str += stringSegment;
                        }
                        decodeStartPtr = currentBytePtr + charSize;
                    }
                }
    
                _free(value);
    
                return str;
            },
            'toWireType': function(destructors, value) {
                if (!(typeof value === 'string')) {
                    throwBindingError('Cannot pass non-string to C++ string type ' + name);
                }
    
                // assumes 4-byte alignment
                var length = lengthBytesUTF(value);
                var ptr = _malloc(4 + length + charSize);
                HEAPU32[ptr >> 2] = length >> shift;
    
                encodeString(value, ptr + 4, length + charSize);
    
                if (destructors !== null) {
                    destructors.push(_free, ptr);
                }
                return ptr;
            },
            'argPackAdvance': 8,
            'readValueFromPointer': simpleReadValueFromPointer,
            destructorFunction: function(ptr) { _free(ptr); },
        });
      }

    function __embind_register_value_object(
        rawType,
        name,
        constructorSignature,
        rawConstructor,
        destructorSignature,
        rawDestructor
      ) {
        structRegistrations[rawType] = {
            name: readLatin1String(name),
            rawConstructor: embind__requireFunction(constructorSignature, rawConstructor),
            rawDestructor: embind__requireFunction(destructorSignature, rawDestructor),
            fields: [],
        };
      }

    function __embind_register_value_object_field(
        structType,
        fieldName,
        getterReturnType,
        getterSignature,
        getter,
        getterContext,
        setterArgumentType,
        setterSignature,
        setter,
        setterContext
      ) {
        structRegistrations[structType].fields.push({
            fieldName: readLatin1String(fieldName),
            getterReturnType: getterReturnType,
            getter: embind__requireFunction(getterSignature, getter),
            getterContext: getterContext,
            setterArgumentType: setterArgumentType,
            setter: embind__requireFunction(setterSignature, setter),
            setterContext: setterContext,
        });
      }

    function __embind_register_void(rawType, name) {
        name = readLatin1String(name);
        registerType(rawType, {
            isVoid: true, // void return values can be optimized out sometimes
            name: name,
            'argPackAdvance': 0,
            'fromWireType': function() {
                return undefined;
            },
            'toWireType': function(destructors, o) {
                // TODO: assert if anything else is given?
                return undefined;
            },
        });
      }

    function requireHandle(handle) {
        if (!handle) {
            throwBindingError('Cannot use deleted val. handle = ' + handle);
        }
        return emval_handle_array[handle].value;
      }
    function __emval_as(handle, returnType, destructorsRef) {
        handle = requireHandle(handle);
        returnType = requireRegisteredType(returnType, 'emval::as');
        var destructors = [];
        var rd = __emval_register(destructors);
        HEAP32[destructorsRef >> 2] = rd;
        return returnType['toWireType'](destructors, handle);
      }

    function __emval_lookupTypes(argCount, argTypes) {
        var a = new Array(argCount);
        for (var i = 0; i < argCount; ++i) {
            a[i] = requireRegisteredType(
                HEAP32[(argTypes >> 2) + i],
                "parameter " + i);
        }
        return a;
      }
    function __emval_call(handle, argCount, argTypes, argv) {
        handle = requireHandle(handle);
        var types = __emval_lookupTypes(argCount, argTypes);
    
        var args = new Array(argCount);
        for (var i = 0; i < argCount; ++i) {
            var type = types[i];
            args[i] = type['readValueFromPointer'](argv);
            argv += type['argPackAdvance'];
        }
    
        var rv = handle.apply(undefined, args);
        return __emval_register(rv);
      }


    var emval_symbols = {};
    function getStringOrSymbol(address) {
        var symbol = emval_symbols[address];
        if (symbol === undefined) {
            return readLatin1String(address);
        } else {
            return symbol;
        }
      }
    
    function emval_get_global() {
        if (typeof globalThis === 'object') {
          return globalThis;
        }
        return (function(){
          return Function;
        })()('return this')();
      }
    function __emval_get_global(name) {
        if (name===0) {
          return __emval_register(emval_get_global());
        } else {
          name = getStringOrSymbol(name);
          return __emval_register(emval_get_global()[name]);
        }
      }

    function __emval_incref(handle) {
        if (handle > 4) {
            emval_handle_array[handle].refcount += 1;
        }
      }

    function __emval_run_destructors(handle) {
        var destructors = emval_handle_array[handle].value;
        runDestructors(destructors);
        __emval_decref(handle);
      }

    function __emval_take_value(type, argv) {
        type = requireRegisteredType(type, '_emval_take_value');
        var v = type['readValueFromPointer'](argv);
        return __emval_register(v);
      }

    function _abort() {
        abort('native code called abort()');
      }

    function _emscripten_memcpy_big(dest, src, num) {
        HEAPU8.copyWithin(dest, src, src + num);
      }

    function abortOnCannotGrowMemory(requestedSize) {
        abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
      }
    function _emscripten_resize_heap(requestedSize) {
        HEAPU8.length;
        requestedSize = requestedSize >>> 0;
        abortOnCannotGrowMemory(requestedSize);
      }

    var _emscripten_get_now;_emscripten_get_now = function() { return performance.now(); }
    ;
    function _emscripten_thread_sleep(msecs) {
        var start = _emscripten_get_now();
        while (_emscripten_get_now() - start < msecs) {
          // Do nothing.
        }
      }

    function _exit(status) {
        // void _exit(int status);
        // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
        exit(status);
      }

    function flush_NO_FILESYSTEM() {
        // flush anything remaining in the buffers during shutdown
        if (typeof _fflush !== 'undefined') _fflush(0);
        var buffers = SYSCALLS.buffers;
        if (buffers[1].length) SYSCALLS.printChar(1, 10);
        if (buffers[2].length) SYSCALLS.printChar(2, 10);
      }
    
    var SYSCALLS = {mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
          var buffer = SYSCALLS.buffers[stream];
          assert(buffer);
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        },varargs:undefined,get:function() {
          assert(SYSCALLS.varargs != undefined);
          SYSCALLS.varargs += 4;
          var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
          return ret;
        },getStr:function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        },get64:function(low, high) {
          if (low >= 0) assert(high === 0);
          else assert(high === -1);
          return low;
        }};
    function _fd_write(fd, iov, iovcnt, pnum) {
        // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
        var num = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          for (var j = 0; j < len; j++) {
            SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
          }
          num += len;
        }
        HEAP32[((pnum)>>2)] = num;
        return 0;
      }

    function _getTempRet0() {
        return getTempRet0();
      }

    function _gettimeofday(ptr) {
        var now = Date.now();
        HEAP32[((ptr)>>2)] = (now/1000)|0; // seconds
        HEAP32[(((ptr)+(4))>>2)] = ((now % 1000)*1000)|0; // microseconds
        return 0;
      }

    function _setTempRet0(val) {
        setTempRet0(val);
      }

    function _time(ptr) {
        var ret = (Date.now()/1000)|0;
        if (ptr) {
          HEAP32[((ptr)>>2)] = ret;
        }
        return ret;
      }
  InternalError = Module['InternalError'] = extendError(Error, 'InternalError');embind_init_charCodes();
  BindingError = Module['BindingError'] = extendError(Error, 'BindingError');init_ClassHandle();
  init_RegisteredPointer();
  init_embind();UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');init_emval();

  var asmLibraryArg = {
    "_ZN2v82V813DisposeGlobalEPm": __ZN2v82V813DisposeGlobalEPm,
    "_ZN2v82V89ClearWeakEPm": __ZN2v82V89ClearWeakEPm,
    "_ZN2v87Isolate37AdjustAmountOfExternalAllocatedMemoryEx": __ZN2v87Isolate37AdjustAmountOfExternalAllocatedMemoryEx,
    "_ZN6puppet3fdn6LoggerEPKcz": __ZN6puppet3fdn6LoggerEPKcz,
    "_ZN6puppet6engine12AddDirtyNodeEPNS0_12OpaqueEngineENS0_10NodeHandleE": __ZN6puppet6engine12AddDirtyNodeEPNS0_12OpaqueEngineENS0_10NodeHandleE,
    "__assert_fail": ___assert_fail,
    "__cxa_allocate_exception": ___cxa_allocate_exception,
    "__cxa_atexit": ___cxa_atexit,
    "__cxa_throw": ___cxa_throw,
    "_embind_finalize_value_object": __embind_finalize_value_object,
    "_embind_register_bigint": __embind_register_bigint,
    "_embind_register_bool": __embind_register_bool,
    "_embind_register_class": __embind_register_class,
    "_embind_register_class_constructor": __embind_register_class_constructor,
    "_embind_register_class_function": __embind_register_class_function,
    "_embind_register_class_property": __embind_register_class_property,
    "_embind_register_emval": __embind_register_emval,
    "_embind_register_enum": __embind_register_enum,
    "_embind_register_enum_value": __embind_register_enum_value,
    "_embind_register_float": __embind_register_float,
    "_embind_register_integer": __embind_register_integer,
    "_embind_register_memory_view": __embind_register_memory_view,
    "_embind_register_smart_ptr": __embind_register_smart_ptr,
    "_embind_register_std_string": __embind_register_std_string,
    "_embind_register_std_wstring": __embind_register_std_wstring,
    "_embind_register_value_object": __embind_register_value_object,
    "_embind_register_value_object_field": __embind_register_value_object_field,
    "_embind_register_void": __embind_register_void,
    "_emval_as": __emval_as,
    "_emval_call": __emval_call,
    "_emval_decref": __emval_decref,
    "_emval_get_global": __emval_get_global,
    "_emval_incref": __emval_incref,
    "_emval_run_destructors": __emval_run_destructors,
    "_emval_take_value": __emval_take_value,
    "abort": _abort,
    "emscripten_memcpy_big": _emscripten_memcpy_big,
    "emscripten_resize_heap": _emscripten_resize_heap,
    "emscripten_thread_sleep": _emscripten_thread_sleep,
    "exit": _exit,
    "fd_write": _fd_write,
    "getTempRet0": _getTempRet0,
    "gettimeofday": _gettimeofday,
    "setTempRet0": _setTempRet0,
    "time": _time
  };
  createWasm();
  /** @type {function(...*):?} */
  Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

  /** @type {function(...*):?} */
  var _malloc = Module["_malloc"] = createExportWrapper("malloc");

  /** @type {function(...*):?} */
  var _free = Module["_free"] = createExportWrapper("free");

  /** @type {function(...*):?} */
  Module["___errno_location"] = createExportWrapper("__errno_location");

  /** @type {function(...*):?} */
  Module["_htons"] = createExportWrapper("htons");

  /** @type {function(...*):?} */
  var _fflush = Module["_fflush"] = createExportWrapper("fflush");

  /** @type {function(...*):?} */
  var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");

  /** @type {function(...*):?} */
  Module["___embind_register_native_and_builtin_types"] = createExportWrapper("__embind_register_native_and_builtin_types");

  /** @type {function(...*):?} */
  Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");

  /** @type {function(...*):?} */
  Module["_ntohs"] = createExportWrapper("ntohs");

  /** @type {function(...*):?} */
  Module["stackSave"] = createExportWrapper("stackSave");

  /** @type {function(...*):?} */
  Module["stackRestore"] = createExportWrapper("stackRestore");

  /** @type {function(...*):?} */
  Module["stackAlloc"] = createExportWrapper("stackAlloc");

  /** @type {function(...*):?} */
  var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
    return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
  };

  /** @type {function(...*):?} */
  Module["_emscripten_stack_get_free"] = function() {
    return (Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
  };

  /** @type {function(...*):?} */
  var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
    return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
  };

  /** @type {function(...*):?} */
  Module["dynCall_iifiiiijii"] = createExportWrapper("dynCall_iifiiiijii");

  /** @type {function(...*):?} */
  Module["dynCall_vifijii"] = createExportWrapper("dynCall_vifijii");

  /** @type {function(...*):?} */
  Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");





  // === Auto-generated postamble setup entry stuff ===

  if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() { abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() { abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory")) Module["zeroMemory"] = function() { abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() { abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() { abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() { abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() { abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() { abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() { abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() { abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() { abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() { abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() { abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() { abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() { abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() { abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() { abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() { abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() { abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() { abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() { abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "handleException")) Module["handleException"] = function() { abort("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() { abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() { abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() { abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() { abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout")) Module["safeSetTimeout"] = function() { abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() { abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad")) Module["asyncLoad"] = function() { abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "alignMemory")) Module["alignMemory"] = function() { abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() { abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() { abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() { abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() { abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() { abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() { abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() { abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() { abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() { abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() { abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() { abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() { abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() { abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() { abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() { abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() { abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() { abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() { abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() { abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() { abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() { abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() { abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() { abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() { abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() { abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() { abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() { abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() { abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() { abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() { abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() { abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() { abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() { abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() { abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() { abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() { abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() { abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() { abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() { abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() { abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() { abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() { abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() { abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() { abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() { abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() { abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() { abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setImmediateWrapped")) Module["setImmediateWrapped"] = function() { abort("'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "clearImmediateWrapped")) Module["clearImmediateWrapped"] = function() { abort("'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() { abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() { abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM")) Module["flush_NO_FILESYSTEM"] = function() { abort("'flush_NO_FILESYSTEM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() { abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() { abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() { abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() { abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() { abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() { abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() { abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() { abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() { abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "wget")) Module["wget"] = function() { abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() { abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() { abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() { abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() { abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() { abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() { abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() { abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() { abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() { abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() { abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() { abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() { abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() { abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() { abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() { abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array")) Module["emval_handle_array"] = function() { abort("'emval_handle_array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list")) Module["emval_free_list"] = function() { abort("'emval_free_list' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols")) Module["emval_symbols"] = function() { abort("'emval_symbols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "init_emval")) Module["init_emval"] = function() { abort("'init_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles")) Module["count_emval_handles"] = function() { abort("'count_emval_handles' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval")) Module["get_first_emval"] = function() { abort("'get_first_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol")) Module["getStringOrSymbol"] = function() { abort("'getStringOrSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "requireHandle")) Module["requireHandle"] = function() { abort("'requireHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emval_newers")) Module["emval_newers"] = function() { abort("'emval_newers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator")) Module["craftEmvalAllocator"] = function() { abort("'craftEmvalAllocator' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global")) Module["emval_get_global"] = function() { abort("'emval_get_global' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers")) Module["emval_methodCallers"] = function() { abort("'emval_methodCallers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "InternalError")) Module["InternalError"] = function() { abort("'InternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "BindingError")) Module["BindingError"] = function() { abort("'BindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError")) Module["UnboundTypeError"] = function() { abort("'UnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError")) Module["PureVirtualError"] = function() { abort("'PureVirtualError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "init_embind")) Module["init_embind"] = function() { abort("'init_embind' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError")) Module["throwInternalError"] = function() { abort("'throwInternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError")) Module["throwBindingError"] = function() { abort("'throwBindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError")) Module["throwUnboundTypeError"] = function() { abort("'throwUnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable")) Module["ensureOverloadTable"] = function() { abort("'ensureOverloadTable' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol")) Module["exposePublicSymbol"] = function() { abort("'exposePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol")) Module["replacePublicSymbol"] = function() { abort("'replacePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "extendError")) Module["extendError"] = function() { abort("'extendError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction")) Module["createNamedFunction"] = function() { abort("'createNamedFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances")) Module["registeredInstances"] = function() { abort("'registeredInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer")) Module["getBasestPointer"] = function() { abort("'getBasestPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance")) Module["registerInheritedInstance"] = function() { abort("'registerInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance")) Module["unregisterInheritedInstance"] = function() { abort("'unregisterInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance")) Module["getInheritedInstance"] = function() { abort("'getInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount")) Module["getInheritedInstanceCount"] = function() { abort("'getInheritedInstanceCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances")) Module["getLiveInheritedInstances"] = function() { abort("'getLiveInheritedInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes")) Module["registeredTypes"] = function() { abort("'registeredTypes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies")) Module["awaitingDependencies"] = function() { abort("'awaitingDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies")) Module["typeDependencies"] = function() { abort("'typeDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers")) Module["registeredPointers"] = function() { abort("'registeredPointers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "registerType")) Module["registerType"] = function() { abort("'registerType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved")) Module["whenDependentTypesAreResolved"] = function() { abort("'whenDependentTypesAreResolved' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes")) Module["embind_charCodes"] = function() { abort("'embind_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes")) Module["embind_init_charCodes"] = function() { abort("'embind_init_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String")) Module["readLatin1String"] = function() { abort("'readLatin1String' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getTypeName")) Module["getTypeName"] = function() { abort("'getTypeName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray")) Module["heap32VectorToArray"] = function() { abort("'heap32VectorToArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType")) Module["requireRegisteredType"] = function() { abort("'requireRegisteredType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize")) Module["getShiftFromSize"] = function() { abort("'getShiftFromSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer")) Module["integerReadValueFromPointer"] = function() { abort("'integerReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer")) Module["enumReadValueFromPointer"] = function() { abort("'enumReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer")) Module["floatReadValueFromPointer"] = function() { abort("'floatReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer")) Module["simpleReadValueFromPointer"] = function() { abort("'simpleReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "runDestructors")) Module["runDestructors"] = function() { abort("'runDestructors' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "new_")) Module["new_"] = function() { abort("'new_' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction")) Module["craftInvokerFunction"] = function() { abort("'craftInvokerFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction")) Module["embind__requireFunction"] = function() { abort("'embind__requireFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations")) Module["tupleRegistrations"] = function() { abort("'tupleRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations")) Module["structRegistrations"] = function() { abort("'structRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType")) Module["genericPointerToWireType"] = function() { abort("'genericPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType")) Module["constNoSmartPtrRawPointerToWireType"] = function() { abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType")) Module["nonConstNoSmartPtrRawPointerToWireType"] = function() { abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer")) Module["init_RegisteredPointer"] = function() { abort("'init_RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer")) Module["RegisteredPointer"] = function() { abort("'RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee")) Module["RegisteredPointer_getPointee"] = function() { abort("'RegisteredPointer_getPointee' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor")) Module["RegisteredPointer_destructor"] = function() { abort("'RegisteredPointer_destructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject")) Module["RegisteredPointer_deleteObject"] = function() { abort("'RegisteredPointer_deleteObject' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType")) Module["RegisteredPointer_fromWireType"] = function() { abort("'RegisteredPointer_fromWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "runDestructor")) Module["runDestructor"] = function() { abort("'runDestructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle")) Module["releaseClassHandle"] = function() { abort("'releaseClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup")) Module["finalizationGroup"] = function() { abort("'finalizationGroup' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps")) Module["detachFinalizer_deps"] = function() { abort("'detachFinalizer_deps' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer")) Module["detachFinalizer"] = function() { abort("'detachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer")) Module["attachFinalizer"] = function() { abort("'attachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle")) Module["makeClassHandle"] = function() { abort("'makeClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle")) Module["init_ClassHandle"] = function() { abort("'init_ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle")) Module["ClassHandle"] = function() { abort("'ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf")) Module["ClassHandle_isAliasOf"] = function() { abort("'ClassHandle_isAliasOf' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted")) Module["throwInstanceAlreadyDeleted"] = function() { abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone")) Module["ClassHandle_clone"] = function() { abort("'ClassHandle_clone' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete")) Module["ClassHandle_delete"] = function() { abort("'ClassHandle_delete' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue")) Module["deletionQueue"] = function() { abort("'deletionQueue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted")) Module["ClassHandle_isDeleted"] = function() { abort("'ClassHandle_isDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater")) Module["ClassHandle_deleteLater"] = function() { abort("'ClassHandle_deleteLater' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes")) Module["flushPendingDeletes"] = function() { abort("'flushPendingDeletes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "delayFunction")) Module["delayFunction"] = function() { abort("'delayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction")) Module["setDelayFunction"] = function() { abort("'setDelayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass")) Module["RegisteredClass"] = function() { abort("'RegisteredClass' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer")) Module["shallowCopyInternalPointer"] = function() { abort("'shallowCopyInternalPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer")) Module["downcastPointer"] = function() { abort("'downcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer")) Module["upcastPointer"] = function() { abort("'upcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "validateThis")) Module["validateThis"] = function() { abort("'validateThis' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "char_0")) Module["char_0"] = function() { abort("'char_0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "char_9")) Module["char_9"] = function() { abort("'char_9' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName")) Module["makeLegalFunctionName"] = function() { abort("'makeLegalFunctionName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); };
  Module["writeStackCookie"] = writeStackCookie;
  Module["checkStackCookie"] = checkStackCookie;
  if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); } });
  if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"); } });

  var calledRun;

  /**
   * @constructor
   * @this {ExitStatus}
   */
  function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
  }

  dependenciesFulfilled = function runCaller() {
    // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
    if (!calledRun) run();
    if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
  };

  function stackCheckInit() {
    // This is normally called automatically during __wasm_call_ctors but need to
    // get these values before even running any of the ctors so we call it redundantly
    // here.
    // TODO(sbc): Move writeStackCookie to native to to avoid this.
    _emscripten_stack_init();
    writeStackCookie();
  }

  /** @type {function(Array=)} */
  function run(args) {

    if (runDependencies > 0) {
      return;
    }

    stackCheckInit();

    preRun();

    // a preRun added a dependency, run will be called later
    if (runDependencies > 0) {
      return;
    }

    function doRun() {
      // run may have just been called through dependencies being fulfilled just in this very frame,
      // or while the async setStatus time below was happening
      if (calledRun) return;
      calledRun = true;
      Module['calledRun'] = true;

      if (ABORT) return;

      initRuntime();

      readyPromiseResolve(Module);
      if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

      assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

      postRun();
    }

    if (Module['setStatus']) {
      Module['setStatus']('Running...');
      setTimeout(function() {
        setTimeout(function() {
          Module['setStatus']('');
        }, 1);
        doRun();
      }, 1);
    } else
    {
      doRun();
    }
    checkStackCookie();
  }
  Module['run'] = run;

  function checkUnflushedContent() {
    // Compiler settings do not allow exiting the runtime, so flushing
    // the streams is not possible. but in ASSERTIONS mode we check
    // if there was something to flush, and if so tell the user they
    // should request that the runtime be exitable.
    // Normally we would not even include flush() at all, but in ASSERTIONS
    // builds we do so just for this check, and here we see if there is any
    // content to flush, that is, we check if there would have been
    // something a non-ASSERTIONS build would have not seen.
    // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
    // mode (which has its own special function for this; otherwise, all
    // the code is inside libc)
    var oldOut = out;
    var oldErr = err;
    var has = false;
    out = err = function(x) {
      has = true;
    };
    try { // it doesn't matter if it fails
      var flush = flush_NO_FILESYSTEM;
      if (flush) flush();
    } catch(e) {}
    out = oldOut;
    err = oldErr;
    if (has) {
      warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
      warnOnce('(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)');
    }
  }

  /** @param {boolean|number=} implicit */
  function exit(status, implicit) {

    checkUnflushedContent();

    if (keepRuntimeAlive()) {
      // if exit() was called, we may warn the user if the runtime isn't actually being shut down
      if (!implicit) {
        var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
        readyPromiseReject(msg);
        err(msg);
      }
    } else {
      exitRuntime();
    }

    procExit(status);
  }

  function procExit(code) {
    if (!keepRuntimeAlive()) {
      if (Module['onExit']) Module['onExit'](code);
      ABORT = true;
    }
    quit_(code, new ExitStatus(code));
  }

  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].pop()();
    }
  }

  run();







    return ENGINE_WASM.ready
  }
  );
  })();
  module.exports = ENGINE_WASM;
  }(ENGINE_WASM));

  var raw = ENGINE_WASM.exports;

  function PhysMesh(p) {
      p.PhysMesh.prototype._delete = p.PhysMesh.prototype.delete;
      p.PhysMesh.prototype._SetVertices = p.PhysMesh.prototype.SetVertices;
      p.PhysMesh.prototype.SetVertices = function(buffer/*Float32Array*/, length) {
          // return; 
          if (this.vPtr) {
              p._free(this.vPtr);
              this.vPtr = undefined;
          }
          this.vPtr = p._malloc(length * 3 * 4);
          p.HEAPF32.set(buffer, this.vPtr >> 2);
          this._SetVertices(this.vPtr, length);
      };
      p.PhysMesh.prototype._SetTriangles = p.PhysMesh.prototype.SetTriangles;
      p.PhysMesh.prototype.SetTriangles = function(buffer/*Uint16Array | Uint32Array*/, length, isShort = false) {
          // return;
          if (this.iPtr) {
              p._free(this.iPtr);
              this.iPtr = undefined;
          }
          if (isShort) {
              this.iPtr = p._malloc(length * 3 * 2);
              p.HEAPU16.set(buffer, this.iPtr >> 1);
          } else {
              this.iPtr = p._malloc(length * 3 * 4);
              p.HEAPU32.set(buffer, this.iPtr >> 2);
          }
          this._SetTriangles(this.iPtr, length, isShort);
      };
      p.PhysMesh.prototype.delete = function() {
          // return;
          if (this.vPtr) {
              p._free(this.vPtr);
              this.vPtr = undefined;
          }
          if (this.iPtr) {
              p._free(this.iPtr);
              this.iPtr = undefined;
          }
          this._delete();
      };
  }

  const RigidbodyMap = new Map();

  function Rigidbody(p) {
      p.getRigidbodyByWasmID = function(wasmID) {
          if (RigidbodyMap.has(wasmID)) return RigidbodyMap.get(wasmID);
          return null;
      };

      p.Rigidbody.prototype._AttachToEntity = p.Rigidbody.prototype.AttachToEntity;
      p.Rigidbody.prototype.AttachToEntity = function(jsbpool, entity_id) {
          this._AttachToEntity(jsbpool.$$.ptr, entity_id);
      };
  }

  function DynamicRigidbody(p) {
      p.DynamicRigidbody.prototype._delete = p.DynamicRigidbody.prototype.delete;
      p.DynamicRigidbody.prototype.delete = function() {
          RigidbodyMap.delete(this.wasmID);
          this._delete();
      };

      p._DynamicRigidbody = p.DynamicRigidbody;
      p.DynamicRigidbody = function(...args) {
          const i = new p._DynamicRigidbody(
              args[0],
              args[1] || 1.0,
              args[2] || 0,
              args[3] || 0.05,
              args[4] || true
          );
          RigidbodyMap.set(i.wasmID, i);
          return i;
      };
  }

  const ColliderMap = new Map();

  const ColliderEventEnum = [
      "onCollisionEnter",
      "onCollisionExit",
      "onCollisionStay",
      "onTriggerEnter",
      "onTriggerExit",
      "onTriggerStay",
      "eventTypeMax"
  ];

  function Collider(p) {
      globalThis["_f7o$c2x_globalColliderCallback"] = function(wasmID, typeEnum, collision) {
          const collider = ColliderMap.get(wasmID);
          if (collider && collider[ColliderEventEnum[typeEnum]]) {
              collider[ColliderEventEnum[typeEnum]](collision);
          } else {
              console.warn(`[Collider] Event ${ColliderEventEnum[typeEnum]} dispatch failed.`);
          }
      };

      for (let i = 0; i < ColliderEventEnum.length - 1; i++) {
          Object.defineProperty(p.Collider.prototype, ColliderEventEnum[i], {
              get() { return this[`_${ColliderEventEnum[i]}`]; },
              set(f) {
                  if (f) {
                      this.SetCallbackExist(i, true);
                  } else {
                      this.SetCallbackExist(i, false);
                  }
                  this[`_${ColliderEventEnum[i]}`] = f;
              }
          });
      }

      p.Collider.prototype._getAttachedRigidbody = p.Collider.prototype.getAttachedRigidbody;
      p.Collider.prototype.getAttachedRigidbody = function() {
          const wasmID = this._getAttachedRigidbody();
          if (wasmID === 0 || !RigidbodyMap.has(wasmID)) return null;
          return RigidbodyMap.get(wasmID);
      };
      Object.defineProperty(p.Collider.prototype, "attachedRigidbody", {
          get() { return this.getAttachedRigidbody(); },
          set(v) { this.setAttachedRigidbody(v); }
      });

      function wrapCollider(name) {
          if (!p[name]) {
              console.warn(`[Phys3D] No ${name} found.`);
              return;
          }
          p[name].prototype._delete = p[name].prototype.delete;
          p[name].prototype.delete = function() {
              ColliderMap.delete(this.wasmID);
              this._delete();
          };
      
          p[`_${name}`] = p[name];
          p[name] = function(...args) {
              const i = new p[`_${name}`](...args);
              ColliderMap.set(i.wasmID, i);
              return i;
          };
      }

      wrapCollider("BoxCollider");
      wrapCollider("SphereCollider");
      wrapCollider("MeshCollider");
      wrapCollider("CapsuleCollider");
      wrapCollider("CharacterController");

      p.getColliderByWasmID = function(wasmID) {
          if (ColliderMap.has(wasmID)) return ColliderMap.get(wasmID);
          return null;
      };
  }

  function Collision(p) {
      Object.defineProperty(p.Collision.prototype, "collider", {
          get() {
              const wasmID = this.getCollider();
              if (wasmID > 0 && ColliderMap.has(wasmID)) {
                  return ColliderMap.get(wasmID);
              } else {
                  return null;
              }
          }
      });

      Object.defineProperty(p.Collision.prototype, "contacts", {
          get() {
              if (this._contacts) {
                  return this._contacts;
              } else {
                  const arr = this.getContacts();
                  const len = arr.size();
                  const ret = [];
                  for (let i = 0; i < len; i++) {
                      ret.push(arr.get(i));
                  }
                  this._contacts = ret;
                  return ret;
              }
          }
      });
  }

  function zero() {
      return {x: 0, y: 0, z: 0};
  }

  function RawVec3f(p) {
      p.RawVec3f = class RawVec3f {
          constructor(x, y, z) {
              this.x = x;
              this.y = y;
              this.z = z;
          }
          x = 0;
          y = 0;
          z = 0;
      };
  }

  function RaycastHit(p) {
      Object.defineProperty(p.RaycastHit.prototype, "collider", {
          get() {
              const wasmID = this.getCollider();
              if (wasmID > 0 && ColliderMap.has(wasmID)) {
                  return ColliderMap.get(wasmID);
              } else {
                  return null;
              }
          }
      });
      p._RaycastHit = p.RaycastHit;

      p.RaycastHit = class RaycastHit {
          collider = null;
          distance = 0;
          normal = zero();
          point = zero();
          _resetNative(obj) {
              if (obj instanceof p._RaycastHit) {
                  this.collider = obj.collider;
                  this.distance = obj.distance;
                  this.normal = obj.normal;
                  this.point = obj.point;
              } else {
                  this.collider = null;
                  this.distance = 0;
                  this.normal = zero();
                  this.point = zero();
              }
          }
      };
  }

  function RaycastHitVectorToArray(p, vector) {
      const arr = [];
      if (vector) {
          const len = vector.size();
          for (let i = 0; i < len; i++) {
              const hit = new p.RaycastHit();
              arr.push(hit);
              hit._resetNative(vector.get(i));
              vector.get(i).delete();
          }
          vector.delete();
      }
      return arr;
  }

  function ColliderVectorToArray(p, vector) {
      const arr = [];
      if (vector) {
          const len = vector.size();
          for (let i = 0; i < len; i++) {
              const collider = ColliderMap.get(vector.get(i));
              if (collider) {
                  arr.push(collider);
              } else {
                  arr.push(null);
              }
          }
          vector.delete();
      }
      return arr;
  }

  function PhysSystem (p) {
      p.PhysSystem.prototype._Raycast = p.PhysSystem.prototype.Raycast;
      p.PhysSystem.prototype.Raycast = function (
          origin,
          unitDir,
          distance,
          hit,
          layerMask = 0xFFFFFFFF
      ) {
          // 这里主要是为了让nativeHit能释放，如果让用户手动创建nativeHit，那就释放不掉了。
          const nativeHit = new p._RaycastHit();
          const ret = this._Raycast(origin, unitDir, distance, nativeHit, layerMask);
          hit._resetNative(nativeHit);
          nativeHit.delete();
          return ret;
      };

      p.PhysSystem.prototype._RaycastAll = p.PhysSystem.prototype.RaycastAll;
      p.PhysSystem.prototype.RaycastAll = function (
          origin,
          unitDir,
          distance,
          layerMask = 0xFFFFFFFF,
          queryTriggerInteraction = 0
      ) {
          const ret = this._RaycastAll(origin, unitDir, distance, layerMask, queryTriggerInteraction);
          return RaycastHitVectorToArray(p, ret);
      };

      p.PhysSystem.prototype._BoxCast = p.PhysSystem.prototype.BoxCast;
      p.PhysSystem.prototype.BoxCast = function (
          center,
          halfExt,
          direction,
          hit,
          orientation,
          maxDistance,
          layerMask = 0xFFFFFFFF,
          queryTriggerInteraction = 0
      ) {
          const nativeHit = new p._RaycastHit();
          const ret = this._BoxCast(
              center,
              halfExt,
              direction,
              nativeHit,
              orientation,
              maxDistance,
              layerMask,
              queryTriggerInteraction
          );
          hit._resetNative(nativeHit);
          nativeHit.delete();
          return ret;
      };

      p.PhysSystem.prototype._BoxCastAll = p.PhysSystem.prototype.BoxCastAll;
      p.PhysSystem.prototype.BoxCastAll = function (
          center,
          halfExt,
          direction,
          orientation,
          maxDistance,
          layerMask = 0xFFFFFFFF,
          queryTriggerInteraction = 0
      ) {
          const ret = this._BoxCastAll(
              center,
              halfExt,
              direction,
              orientation,
              maxDistance,
              layerMask,
              queryTriggerInteraction
          );
          return RaycastHitVectorToArray(p, ret);
      };

      p.PhysSystem.prototype._CapsuleCast = p.PhysSystem.prototype.CapsuleCast;
      p.PhysSystem.prototype.CapsuleCast = function (
          p1,
          p2,
          radius,
          direction,
          hit,
          maxDistance,
          layerMask = 0xFFFFFFFF,
          queryTriggerInteraction = 0
      ) {
          const nativeHit = new p._RaycastHit();
          const ret = this._CapsuleCast(
              p1,
              p2,
              radius,
              direction,
              maxDistance,
              nativeHit,
              layerMask,
              queryTriggerInteraction
          );
          hit._resetNative(nativeHit);
          nativeHit.delete();
          return ret;
      };

      p.PhysSystem.prototype._CapsuleCastAll = p.PhysSystem.prototype.CapsuleCastAll;
      p.PhysSystem.prototype.CapsuleCastAll = function (
          p1,
          p2,
          radius,
          direction,
          maxDistance,
          layerMask = 0xFFFFFFFF,
          queryTriggerInteraction = 0
      ) {
          const ret = this._CapsuleCastAll(
              p1,
              p2,
              radius,
              direction,
              maxDistance,
              layerMask,
              queryTriggerInteraction
          );
          return RaycastHitVectorToArray(p, ret);
      };

      p.PhysSystem.prototype._OverlapBox = p.PhysSystem.prototype.OverlapBox;
      p.PhysSystem.prototype.OverlapBox = function (
          center,
          halfExt,
          orientation,
          layermask = 0xFFFFFFFF,
          queryTriggerInteraction = 0
      ) {
          const ret = this._OverlapBox(
              center,
              halfExt,
              orientation,
              layermask,
              queryTriggerInteraction
          );
          return ColliderVectorToArray(p, ret);
      };

      p.PhysSystem.prototype._OverlapCapsule = p.PhysSystem.prototype.OverlapCapsule;
      p.PhysSystem.prototype.OverlapCapsule = function (
          p1,
          p2,
          radius,
          layerMask = 0xFFFFFFFF,
          queryTriggerInteraction = 0
      ) {
          const ret = this._OverlapCapsule(
              p1,
              p2,
              radius,
              layerMask,
              queryTriggerInteraction
          );
          return ColliderVectorToArray(p, ret);
      };

      p.PhysSystem.prototype._SetCollisionMask = p.PhysSystem.prototype.SetCollisionMask;
      p.PhysSystem.prototype.SetCollisionMask = function(mask/* ArrayBuffer */) {
          return;
      };

      // p.PhysSystem.prototype.dirtyNodeMemSize = 0;
      p.PhysSystem.prototype.clearDirtyNodes = function() {
          this._dirtyNodeList = [];
      };

      p.PhysSystem.prototype.addDirtyNode = function(obj/* { wasmid, type } */) {
          if (!this._dirtyNodeList) {
              this._dirtyNodeList = [];
          }

          this._dirtyNodeList.push(obj);
      };

      p.PhysSystem.prototype.setDirtyNodes = function() {
          if (!this._dirtyNodeList) {
              this._dirtyNodeList = [];
          }
          const arr = this._dirtyNodeList;
          const len = arr.length;
          const list = this.getExtDirtyListMem(len);
          for (let i = 0; i < len; i++) {
              if (arr[i].type === 0 && RigidbodyMap.has(arr[i].id)) {
                  p.HEAPU32[(list >> 2) + i] = RigidbodyMap.get(arr[i].id).$$.ptr;
              } else if (ColliderMap.has(arr[i].id)) {
                  p.HEAPU32[(list >> 2) + i] = ColliderMap.get(arr[i].id).$$.ptr;
              } else {
                  p.HEAPU32[(list >> 2) + i] = 0;
              }
          }
          this._dirtyNodeList = [];
      };

      p.PhysSystem.prototype._destroyScene = p.PhysSystem.prototype.destroyScene;
      p.PhysSystem.prototype.destroyScene = function(id) {
          id = id || 0;
          this._destroyScene(id);
      };

      p.PhysSystem.prototype._Simulate = p.PhysSystem.prototype.Simulate;
      p.PhysSystem.prototype.Simulate = function(step) {
          this.setDirtyNodes();
          this._Simulate(step);
          // this.clearDirtyNodes();
      };
  }

  function ContactPoint(p) {
      Object.defineProperty(p.ContactPoint.prototype, "this_collider", {
          get() {
              const wasmID = this.getThis_collider();
              if (wasmID > 0 && ColliderMap.has(wasmID)) {
                  return ColliderMap.get(wasmID);
              } else {
                  return null;
              }
          }
      });
      Object.defineProperty(p.ContactPoint.prototype, "other_collider", {
          get() {
              const wasmID = this.getOther_collider();
              if (wasmID > 0 && ColliderMap.has(wasmID)) {
                  return ColliderMap.get(wasmID);
              } else {
                  return null;
              }
          }
      });

      // p._ContactPoint = p.ContactPoint;

      // p.ContactPoint = class ContactPoint {
      //     normal = zero();
      //     point = zero();
      //     separation = 0;
      //     this_collider = null;
      //     other_collider = null;
      //     _resetNative(obj) {
      //         if (obj instanceof p._RaycastHit) {
      //             this.collider = obj.collider;
      //             this.distance = obj.distance;
      //             this.normal = obj.normal;
      //             this.point = obj.point;
      //         } else {
      //             this.collider = null;
      //             this.distance = 0;
      //             this.normal = zero();
      //             this.point = zero();
      //         }
      //     }
      // };

  }

  function RawQuaternion(p) {
      p.RawQuaternion = class RawQuaternion {
          constructor(x, y, z, w) {
              this.x = x;
              this.y = y;
              this.z = z;
              this.w = w;
          }
          x = 0;
          y = 0;
          z = 0;
          w = 1;
      };
  }

  function StaticRigidbody(p) {
      p.StaticRigidbody.prototype._delete = p.StaticRigidbody.prototype.delete;
      p.StaticRigidbody.prototype.delete = function() {
          RigidbodyMap.delete(this.wasmID);
          this._delete();
      };

      p._StaticRigidbody = p.StaticRigidbody;
      p.StaticRigidbody = function(...args) {
          const i = new p._StaticRigidbody(args[0]);
          RigidbodyMap.set(i.wasmID, i);
          return i;
      };
  }

  function index(p/* emcc export */) {

      PhysMesh(p);
      Rigidbody(p);
      StaticRigidbody(p);
      DynamicRigidbody(p);
      Collider(p);
      Collision(p);
      RaycastHit(p);
      ContactPoint(p);
      PhysSystem(p);
      RawVec3f(p);
      RawQuaternion(p);

  }

  window.wasmLoadPromise = raw().then(m => {
      index(m);
      window.Phys3D = m;
      if (window.top) {
        window.top.Phys3D = m;
      }
      return m;
  });

}));
