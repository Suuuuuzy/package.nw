!function(require, directRequire){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const fomatable_string_1=require("./fomatable_string"),config={GENERATE_LOCAL_SIGNATURE_FAIL:"generate local signature fail. Usually this happens the content or encoding of private key file is incorrect. Detail: %s",PARAM_ERROR:'function: "%s" lack of parameter: "%s"',SHOULD_NOT_BE_EMPTY:"%s should not be empty",JSON_CONTENT_SHOULD_BE:"%s field needs to be %s",SHOULD_MATCH:"%s should match %s",SHOULD_EQUAL:"%s should equal to %s",SHOULD_AT_LEAST_ONE_ITEM:"%s should have at least on item",OR:"Or",CORRESPONDING_FILE_NOT_FOUND:'%s could not find the corresponding file: "%s"',JSON_SHOULD_NOT_CONTAIN:"%s should not contain %s",JSON_SHOULD_NOT_START_WITH:"%s should not begin with '%s'",NOT_FOUND:"%s not found",NOT_FOUND_IN_ROOT_DIR:"%s is not found in the project root directory",MINIPROGRAM_APP_JSON_NOT_FOUND:'In the directory %s specified by "miniprogramRoot" in project.config.json, %s is not found in that directory.If you don\'t know what "miniprogramRoot" means for, just leave it as empty string.',PLUGIN_JSON_NOT_FOUND:"In the miniprogram local development plug-in directory %s specified by pluginRoot in project.config.json, %s is not found",PLUGIN_PATH_SAME_WITH_MINIPROGRAM:"The plugin directory %s specified by pluginRoot in project.config.json is the same as the miniprogram directory %s, please modify it to a different directory",CONTENT_EXIST:"%s already exists",FILE_NOT_FOUND:'"%s" file not found, or the file read failed',JSON_PARSE_ERROR:"%s File parsing error",ENTRANCE_NOT_FOUND:"No pages : %s defined in the entry page \napp.json is found",JSON_PAGE_FILE_NOT_EXISTS:'%s %s "%s" could not find the corresponding %s file',SHOULD_NOT_IN:"%s Should not exist in %s",JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS_TITLE:"app.json or custom compilation condition error",JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS:"The startup page %s specified in the custom compilation is not defined in app.json",JSON_ENTRY_PAGE_PATH_NOT_FOUND:"No entry page defined in %s is found in %s",JSON_TABBAR_AT_LEAST:'["tabBar"]["list"] must contain at least %s items',JSON_TABBAR_AT_MOST:'["tabBar"]["list"] cannot contain more than %s items',JSON_TABBAR_PATH_EMPTY:'["tabBar"]["list"][%s]["pagePath"] cannot be empty',JSON_TABBAR_PATH_SAME_WITH_OTHER:'["tabBar"]["list"][%s]["pagePath"] is same with ["tabBar"]["list"][%s]["pagePath"]',JSON_TABBAR_ICON_MAX_SIZE:'The size of ["tabBar"]["list"][%s]["%s"] exceeds %skb',JSON_TABBAR_ICON_EXT:'["tabBar"]["list"][%s]["%s"] Wrong file format, only %s format is supported',EXT_SHOULD_BE_ERROR:'extension name of %s should be "%s"',JSON_CONTENT_SHOULD_NOT_BE:"%s cannot be %s",JSON_RESOLVE_ALIAS_ILLEGAL:'Invalid %s or %s in resolveAlias field, contains consecutive "//"',JSON_RESOLVE_ALIAS_INCLUDE_STAR:'The key "%s" or value "%s" in resolveAlias field should end with "/*"',JSON_RESOLVE_ALIAS_SHOULD_NOT_START_WITH:'The value "%s" in resolveAlias field should not start with "./"',APP_JSON_SHOULD_SET_LAZYCODELOADING:'You need to add "lazyCodeLoading": "requiredComponents" in app.json, because the value of "renderer" in %s is "skyline"',PAGE_JSON_SHOULD_SET_DISABLESCROLL_TRUE:'According to the configuration of the page or app.json, the value of "renderer" in %s page is "skyline", you need to add "disableScroll": true in the page configuration',PAGE_JSON_SHOULD_SET_NAVIGATIONSTYLE_CUSTOM:'According to the configuration of the page or app.json, the value of "renderer" in %s page is "skyline", you need to add "navigationStyle": custom in the page configuration',JSON_CONTENT_EXISTED:"%s already exists",JSON_CONTENT_NOT_FOUND:"%s does not exist",LACK_OF_FILE:"File %s is missing",JSON_PAGES_REPEAT:"%s is repeated in %s",JSON_CONTENT_REPEAT:"%s could not be declared both in %s",EXT_JSON_INVALID:'%s is not a 3rdMiniProgramAppid, ext.json cannot take effect;Read the documentation: "%s"',GAME_EXT_JSON_INVALID:"%s is not a 3rdMiniGameAppid, ext.json cannot take effect;",EXT_APPID_SHOULD_NOT_BE_EMPTY:"extAppid should not be empty",FILE_NOT_UTF8:"%s file is not in UTF-8 encoding",INVALID:"invalid %s",DIRECTORY:"Directory",EXCEED_LIMIT:"%s exceed limit %s",PLEASE_CHOOSE_PLUGIN_MODE:"If you are developing a plugin, choose the plugin mode",TRIPLE_NUMBER_DOT:"digit.digit.digit, each segment of digit is no more than 3 digits",PAGE_PATH:"Page Path",PLUGINS_SAME_ALIAS:"%s and %s have same alias",SAME_ITEM:'%s and %s have same "%s"',ALREADY_EXISTS:"already exists",SAME_KEY_PAGE_PUBLICCOMPONENTS:'There can not be the same key: %s in ["pages"] and ["publicComponents"]',GAME_DEV_PLUGIN_SHOULD_NOT_USE_LOCAL_PATH:"Dev plugin: %s shall never specify a local path",GAME_PLUGIN_SIGNATURE_MD5_NOT_MATCH_CONTENT:'MD5 hash of the plugin library file "%s": "%s" not matching the value "%s" given by its signature.json, thus the compiling process has been interrupted.\nThis indicates you might have changed the content of the file.\nRestore the original content of this file may help solve the issue and remove this warning.\n\nTo learn more, you may refer to the documentation.\n',FILE:"FILE",PROCESSING:"processing: %s",DONE:"done: %s",UPLOAD:"upload",SUCCESS:"success",PROJECT_TYPE_ERROR:"project.type is %s, but appid(%s) is %s",MINI_PROGRAM:"MiniProgram",MINI_GAME:"MiniGame",NOT_ALLOWED_REQUIRE_VAR:"Require variable is not allowed",NOT_ALLOWED_REQUIRE_ASSIGN:"Assigning the require function to other variables is not allowed",NOT_FOUND_NPM_ENTRY:"Npm package entry file not found",NOT_FOUND_NODE_MODULES:"NPM packages not found. Please confirm npm packages which need to build are belong to `miniprogramRoot` directory. Or you may edit project.config.json's `packNpmManually` and `packNpmRelationList`",JSON_ENTRANCE_DECLARE_PATH_ERR:'["entranceDeclare"]["locationMessage"]["path"] "%s" should belong to pages or pages in sub packages',JSON_ENTRANCE_DECLARE_PATH_EMPTY:'["entranceDeclare"]["locationMessage"]["path"] should not be empty',JSON_REQUIRED_PRIVATE_INFOS_MUTUALLY_EXCLUSIVE:"requiredPrivateInfos %s is is mutually exclusive with %s.",COULD_NOT_USE_CODE_PROTECT:"Code protect is not available",SUMMER_COMPILING_MODULE:"Compiling %s",SUMMER_COMPILE_JSON:"Compile jSON files",SUMMER_OPTIMIZE_CODE:"Optimize code",SUMMER_PACK_FILES:"Pack resource file",SUMMER_COMPRESS_PACK:"Compress code package",SUMMER_SEAL_PACK:"Seal code package",SUMMER_APPEND_BABEL_HELPERS:"Append babel helper files",SUMMER_COMPILE_PAGE_JSON:"Compile json files of %s pages",SUMMER_COMPILE_PLUGIN_PAGE_JSON:"Compiling json files of %s plugin pages",SUMMER_COMPILE:"Compile %s",SUMMER_COMPILE_MINIPROGRAM:"Compile miniprogram",SUMMER_COMPILE_PLUGIN:"Compile plugin",FILE_EXT_FORMAT_ERROR:"%s Wrong file format, only %s format is supported",THEME_JSON_VALUE_SHOULD_BE:"%s as the value of %s , should be %s",JSON_VARIABLE_VALUE_NOT_FOUND:"could not find the value of %s in %s",THEME_JSON_SHOULD_EXIST:"%s use variable: %s，you need to use %s to specify the path of theme.json",PARSEERR_ENTRANCE_PAGE_ERROR:"The entrance page cannot be found\nPages defined in app.json : %s",PARSEERR_ENTRANCE_FILE_ERROR:"Failed to find or read the entrance file %s. Please recompile after checking",COMPILE_WXML_ERROR_CONSOLE:"compile .wxml error. The error message is as above, and you can view more details in the console.",COMPILE_WXSS_ERROR_CONSOLE:"Compile .wxss error. The error message is as above, and you can view more details in the console.",RELATED_NODE_MODULES_NOT_FOUND:"The related node_modules of %s is not found, please run `npm install` at %s",PACKAGE_JSON_PATH_IN_VALID:'packageJsonPath should ends with `package.json`, "%s" is invalid.'},formatConfig={};for(const[e,o]of Object.entries(config))formatConfig[e]=new fomatable_string_1.FormatableString(o);exports.default=formatConfig;
}(require("licia/lazyImport")(require), require)