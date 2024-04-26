!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeThemeJSONToPageJSON=exports.mergeThemeJSONToAppJSON=exports.checkThemeJSON=exports.getPluginThemeLocation=exports.getThemeLocation=void 0;const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),lodash_1=tslib_1.__importStar(require("lodash")),tools_1=require("../../../../utils/tools"),locales_1=tslib_1.__importDefault(require("../../../../utils/locales/locales")),common_1=require("../../../../utils/common"),cache_1=require("../../../../utils/cache"),schemaValidate_1=require("../validate/schemaValidate"),config_1=require("../../../../config/config"),common_2=require("./common"),appJSON_1=require("./app/appJSON"),plugin_1=require("./plugin/plugin"),reactiveCache_1=require("./reactiveCache"),projectconfig_1=require("./projectconfig");async function getPluginThemeLocation(e){return(await(0,plugin_1.getDevPluginJSON)(e)).themeLocation||null}function checkThemeJSON(e,o){const{isPlugin:t}=o;return t?originCheckThemeJSONForPlugin(e,o):originCheckThemeJSONForMiniProgram(e,o)}exports.getThemeLocation=(0,reactiveCache_1.wrapCompileJSONFunc)(cache_1.CACHE_KEY.APP_JSON_THEME_LOCATION,e=>{const o=(0,appJSON_1.getRawAppJSON)(e),{themeLocation:t}=o;return"[object Undefined]"!==Object.prototype.toString.call(t)?"string"==typeof t?((0,common_1.checkPath)({value:t,tips:'["themeLocation"]',filePath:"app.json"}),t):((0,common_1.throwError)({msg:locales_1.default.config.JSON_CONTENT_SHOULD_BE.format('appJSON["themeLocation"]',"string"),filePath:"app.json"}),null):null}),exports.getPluginThemeLocation=getPluginThemeLocation,exports.checkThemeJSON=checkThemeJSON;const originCheckThemeJSONForMiniProgram=(0,reactiveCache_1.wrapCompileJSONFunc)(cache_1.CACHE_KEY.THEME_JSON,originCheckThemeJSON),originCheckThemeJSONForPlugin=(0,reactiveCache_1.wrapCompileJSONFunc)(cache_1.CACHE_KEY.PLUGIN_THEME_JSON,originCheckThemeJSON);function originCheckThemeJSON(e,o){const{isPlugin:t}=o,r=(0,exports.getThemeLocation)(e),i=(0,projectconfig_1.getProjectConfigJSON)(e),a=t?i.pluginRoot:i.miniprogramRoot,c=(0,tools_1.normalizePath)(path_1.default.posix.join(a||"",r));e.stat("",c)||(0,common_1.throwError)({msg:locales_1.default.config.FILE_NOT_FOUND.format(c),filePath:"app.json"});const n=e.getFile("",c),l=(0,common_1.checkUTF8)(n,c),s=(0,common_2.checkJSONFormat)(l,c),h=(0,schemaValidate_1.schemaValidate)("theme",s);if(h.error.length){const e=h.error.map(e=>"type"===e.errorType||"enum"===e.errorType||"anyOf"===e.errorType?locales_1.default.config.JSON_CONTENT_SHOULD_BE.format([e.errorProperty,e.correctType]):locales_1.default.config.SHOULD_NOT_BE_EMPTY.format([e.requireProperty])).join("\n");(0,common_1.throwError)({msg:e,filePath:c})}return s}function mergeThemeJSONToAppJSON(e,o){var t,r;const{windowPropertWhiteList:i,tabBarPropertyWhiteList:a,tabbarListItemPropertyWhiteList:c}=config_1.jsonVariablePropertyWhiteList,n=/^@/,l=lodash_1.default.cloneDeep(o.window||{}),s=lodash_1.default.cloneDeep(o.window||{});Object.keys(l).forEach(o=>{const t=l[o];if(n.test(t)){i.includes(o)||(0,common_1.throwError)({msg:""+locales_1.default.config.SHOULD_NOT_IN.format([t,o]),filePath:"app.json"});const r=t.slice(1);l[o]=e.light[r]||t,s[o]=e.dark[r]||t}});const h=(0,lodash_1.cloneDeep)(o),m=(0,lodash_1.cloneDeep)(o);if(h.window=l,m.window=s,null===(r=null===(t=o.tabBar)||void 0===t?void 0:t.list)||void 0===r?void 0:r.length){const t=lodash_1.default.cloneDeep(o.tabBar||{list:[]}),r=lodash_1.default.cloneDeep(o.tabBar||{list:[]});t.list&&t.list.length>0&&Object.keys(t).forEach(o=>{if("list"!==o){const i=t[o];if(n.test(i)){a.includes(o)||(0,common_1.throwError)({msg:""+locales_1.default.config.SHOULD_NOT_IN.format([i,o]),filePath:"app.json"});const c=i.slice(1);t[o]=e.light[c]||i,r[o]=e.dark[c]||i}}else t.list.forEach((o,i)=>{Object.keys(o).forEach(a=>{const l=o[a];if(n.test(l)){c.includes(a)||(0,common_1.throwError)({msg:""+locales_1.default.config.SHOULD_NOT_IN.format([l,a]),filePath:"app.json"});const o=l.slice(1);t.list[i][a]=e.light[o]||l,r.list[i][a]=e.dark[o]||l}})})}),m.tabBar=r,h.tabBar=t}return{appJSONLight:h,appJSONDark:m}}function mergeThemeJSONToPageJSON(e,o,t){const r=config_1.jsonVariablePropertyWhiteList.windowPropertWhiteList,i=lodash_1.default.cloneDeep(o||{}),a=lodash_1.default.cloneDeep(o||{}),c=/^@/;return Object.keys(o).forEach(n=>{const l=o[n];if(c.test(l)){const o=l.slice(1);r.includes(n)||(0,common_1.throwError)({msg:""+locales_1.default.config.SHOULD_NOT_IN.format([l,n]),filePath:t}),a[n]=e.light[o]||l,i[n]=e.dark[o]||l}}),{pageJSONDark:i,pageJSONLight:a}}exports.mergeThemeJSONToAppJSON=mergeThemeJSONToAppJSON,exports.mergeThemeJSONToPageJSON=mergeThemeJSONToPageJSON;
}(require("licia/lazyImport")(require), require)