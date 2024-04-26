/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import{isDirective}from"./directive.js";import{removeNodes}from"./dom.js";import{noChange,nothing}from"./part.js";import{TemplateInstance}from"./template-instance.js";import{TemplateResult}from"./template-result.js";import{createMarker}from"./template.js";export const isPrimitive=t=>null===t||!("object"==typeof t||"function"==typeof t);export const isIterable=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);export class AttributeCommitter{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new AttributePart(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(isPrimitive(t)||!isIterable(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}export class AttributePart{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===noChange||isPrimitive(t)&&t===this.value||(this.value=t,isDirective(t)||(this.committer.dirty=!0))}commit(){for(;isDirective(this.value);){const t=this.value;this.value=noChange,t(this)}this.value!==noChange&&this.committer.commit()}}export class NodePart{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(createMarker()),this.endNode=t.appendChild(createMarker())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=createMarker()),t.__insert(this.endNode=createMarker())}insertAfterPart(t){t.__insert(this.startNode=createMarker()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;isDirective(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=noChange,t(this)}const t=this.__pendingValue;t!==noChange&&(isPrimitive(t)?t!==this.value&&this.__commitText(t):t instanceof TemplateResult?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):isIterable(t)?this.__commitIterable(t):t===nothing?(this.value=nothing,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof TemplateInstance&&this.value.template===e)this.value.update(t.values);else{const i=new TemplateInstance(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new NodePart(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){removeNodes(this.startNode.parentNode,t.nextSibling,this.endNode)}}export class BooleanAttributePart{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;isDirective(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=noChange,t(this)}if(this.__pendingValue===noChange)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=noChange}}export class PropertyCommitter extends AttributeCommitter{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}export class PropertyPart extends AttributePart{}let eventOptionsSupported=!1;try{const t={get capture(){return eventOptionsSupported=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}export class EventPart{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;isDirective(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=noChange,t(this)}if(this.__pendingValue===noChange)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=getOptions(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=noChange}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const getOptions=t=>t&&(eventOptionsSupported?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);