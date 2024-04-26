"use strict";const path=require("path"),Module=require("module"),fs=require("fs"),CHAR_FORWARD_SLASH=47,packageMainCache=Object.create(null);function stat(e){const{cache:t}=stat;if(null!==t){const n=t.get(e);if(void 0!==n)return n}let n;if(fs.existsSync(e)){n=fs.statSync(e).isDirectory()?1:0}else n=-2;return null!==t&&t.set(e,n),n}function tryFile(e,t){return 0===stat(e)&&path.resolve(e)}function tryExtensions(e,t,n){for(const a of t){const t=tryFile(e+a,n);if(t)return t}return!1}function readPackage(e){const t=packageMainCache[e];if(t)return t;const n=path.resolve(e,"package.json");try{const t=fs.readFileSync(n,"utf8");return!!t&&(packageMainCache[e]=JSON.parse(t).main)}catch(e){return!1}}function tryPackage(e,t,n){const a=readPackage(e);if(!a)return!1;const s=path.resolve(e,a);return tryFile(s,n)||tryExtensions(s,t,n)||tryExtensions(path.resolve(s,"index"),t,n)}stat.cache=new Map;const module_findPath=Module._findPath;Module._findPath=function(e,t,n){if(path.isAbsolute(e))t=[""];else if(!t||0===t.length)return!1;const a=`${e}\0${1===t.length?t[0]:t.join("\0")}`,s=Module._pathCache[a];if(s)return s;let o,r=e.length>0&&47===e.charCodeAt(e.length-1);r||(r=/(?:^|\/)\.?\.$/.test(e));for(const s of t){if(s&&stat(s)<1)continue;const t=path.resolve(s,e);let c;const i=stat(t);if(r||(0===i&&(c=path.resolve(t)),c||(void 0===o&&(o=Object.keys(Module._extensions)),c=tryExtensions(t,o,n))),c||1!==i||(void 0===o&&(o=Object.keys(Module._extensions)),c=tryPackage(t,o,n),c||(c=tryExtensions(path.resolve(t,"index"),o,n))),c)return Module._pathCache[a]=c,c}return!1};const{_resolveLookupPaths:_resolveLookupPaths}=Module,isMac="darwin"===process.platform,newInstallPackagePath=isMac?path.join(process.execPath,"../../../../../../../../../Resources/package.nw"):path.join(process.execPath,"../code/package.nw");function appendInstallPkgPath(e){e.push(path.join(newInstallPackagePath,"node_modules")),e.push(path.join(newInstallPackagePath,"node_modules.wxvpkg")),isMac&&(e.push(path.join(process.execPath,"../../../../../../Resources/package.nw/node_modules")),e.push(path.join(process.execPath,"../../../../../../Resources/package.nw/node_modules.wxvpkg")))}Module._resolveLookupPaths=function(){const e=_resolveLookupPaths.apply(this,arguments),t=[],n=process.cwd();let a=!1;for(const s of e)"node_modules"===path.basename(s)&&t.push(path.join(path.dirname(s),"node_modules.wxvpkg")),t.push(s),a||path.dirname(s)!==n&&path.dirname(s)!==path.dirname(n)||(a=!0,appendInstallPkgPath(t));return a||(a=!0,appendInstallPkgPath(t)),t},module.exports={internalModuleFindPath:module_findPath,internalModuleResolveLookupPaths:_resolveLookupPaths};