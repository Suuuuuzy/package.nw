"use strict";const tslib_1=require("tslib"),locales_1=tslib_1.__importDefault(require("../../../../utils/locales/locales"));function getType(e){return Object.prototype.toString.call(e).toLowerCase().split(" ")[1].replace("]","")}class T{constructor(e,t,r){this.type=e,this.required=t||!1;const o=this.valueType=getType(r);if("undefined"!==o)if(r instanceof T){if("array"!==e&&"object"!==e)throw new Error("value can be instance of ValidateType only when type is object or array");this.value=r}else if("array"!==o)if("regexp"!==o)if("object"!==o){if(e!==o)throw new Error(`value should be ${e} instead of ${o}`);this.value=r}else{if("object"!==e)throw new Error(e+" could not have object value");for(const e in r)if(!(r[e]instanceof T))throw new Error(`value["${e}"] should be instance of ValidateType`);this.value=r}else{if("regexp"!==e&&"string"!==e)throw new Error(e+" could not have regexp value");this.value=r}else{if("array"===e||"object"===e||"function"===e)throw new Error(e+" could not have optional value");for(let t=0,o=r.length;t<o;t++){const o=getType(r[t]);if(o!==e)throw new Error(`value[${t}] should be ${e} instead of ${o}`)}this.value=r}}static invalidKeys(e,t){const r=[];if(e instanceof T){try{e.check(t)}catch(e){return}if("object"!==e.type||"object"!==e.valueType||"object"!==getType(t))return;const o=e.value instanceof T;for(const i in t){let n=[];if(o)n=T.invalidKeys(e.value,t[i]);else{if(!e.value.hasOwnProperty(i)){r.push(`["${i}"]`);continue}n=T.invalidKeys(e.value[i],t[i])}n&&n.forEach(e=>{r.push(`["${i}"]${e}`)})}}else for(const o in t){if(!e.hasOwnProperty(o)){r.push(`["${o}"]`);continue}const i=T.invalidKeys(e[o],t[o]);i&&i.forEach(e=>{r.push(`["${o}"]${e}`)})}if(r.length>0)return r}check(e){const t=getType(e);if(!this.required&&"undefined"===t)return;if("ignore"===this.type)return;if(t!==this.type)throw new Error(locales_1.default.config.JSON_CONTENT_SHOULD_BE.format(["",this.type]));const{valueType:r}=this;if("undefined"!==r){if(this.value instanceof T){if("object"===this.type){for(const t in e)try{this.value.check(e[t])}catch(e){throw new Error(`["${t}"]${e.message}`)}return}if("array"===this.type){if(0===e.length&&this.value.required)throw new Error(locales_1.default.config.SHOULD_AT_LEAST_ONE_ITEM.format(""));for(let t=0,r=e.length;t<r;t++)try{this.value.check(e[t])}catch(e){throw new Error(`[${t}]${e.message}`)}return}}if("array"!==r)if("object"!==r)if("regexp"!==r){if(this.value!==e)throw new Error(locales_1.default.config.SHOULD_EQUAL.format(["",this.value.toString()]))}else{if("string"===this.type){if(!this.value.test(e))throw new Error(locales_1.default.config.SHOULD_MATCH.format(["",this.value.toString()]));return}if("regexp"===this.type&&this.value.toString()!==e.toString())throw new Error(locales_1.default.config.SHOULD_EQUAL.format(["",this.value.toString()]))}else for(const t in this.value){const r=this.value[t];try{r.check(e[t])}catch(e){throw new Error(`["${t}"]${e.message}`)}}else{let t=!1;for(const r of this.value)if(r===e){t=!0;break}if(!t)throw new Error(locales_1.default.config.JSON_CONTENT_SHOULD_BE.format(["",this.value.join(` ${locales_1.default.config.OR} `)]))}}}}module.exports=T;