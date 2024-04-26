/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
function activate(context) {
    console.log('[VscodeMiniappPlugin]extension activate');
    const doctorDisposable = vscode.commands.registerCommand('workbench.run-miniapp-cmd', ({ data = {} }) => {
        onRunCommandInShell(data);
    });
    const termDisposable = vscode.commands.registerCommand('workbench.run-terminal-cmd', ({ data = {} }) => {
        onHandleTerminal(data);
    });
    context.subscriptions.push(doctorDisposable, termDisposable);
}
exports.activate = activate;
function onRunCommandInShell(data = {}) {
    console.log('[VscodeMiniappPlugin]extension onRunCommandInShell: ', data);
    const { cwd, cmd, env } = data;
    const opts = {
        cwd,
    };
    if (env) {
        opts.env = env;
    }
    if (process.platform === 'win32') {
        opts['executable'] = process.env.COMSPEC;
        opts['shellArgs'] = ['/c'];
    }
    const execution = new vscode.ShellExecution(cmd, opts);
    vscode.tasks.executeTask(new vscode.Task({ type: 'miniappTask' }, vscode.TaskScope.Workspace, 'MiniappTask', 'MiniappTask', execution));
    const disposable = vscode.tasks.onDidEndTask((e) => {
        if (e.execution.task.source === 'MiniappTask') {
            disposable.dispose();
            vscode.commands.executeCommand('workbench.run-miniapp-cmd-callback');
        }
    });
}
let term;
function onHandleTerminal(data = {}) {
    console.log('[VscodeMiniappPlugin]extension onHandleTerminal: ', data);
    const { action, cmd, cwd, name = 'default Terminal' } = data;
    if (action === 'createAndGetEnv') {
        let shellPath;
        if (process.platform === 'win32') {
            shellPath = process.env.COMSPEC;
        }
        term = vscode.window.createTerminal({
            name,
            cwd,
            shellPath,
        });
        term.sendText(cmd);
        vscode.commands.executeCommand('workbench.run-terminal-cmd-callback');
    }
    else if (action === 'dispose') {
        if (term) {
            term.dispose();
        }
    }
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map