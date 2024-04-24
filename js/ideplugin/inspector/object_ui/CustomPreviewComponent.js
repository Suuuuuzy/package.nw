import*as Common from"../common/common.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{ObjectPropertiesSection}from"./ObjectPropertiesSection.js";export class CustomPreviewSection{constructor(e){this._sectionElement=document.createElement("span"),this._sectionElement.classList.add("custom-expandable-section"),this._object=e,this._expanded=!1,this._cachedContent=null;const t=e.customPreview();let o;try{o=JSON.parse(t.header)}catch(e){return void Common.Console.Console.instance().error("Broken formatter: header is invalid json "+e)}this._header=this._renderJSONMLTag(o),this._header.nodeType!==Node.TEXT_NODE?((t.hasBody||t.bodyGetterId)&&(this._header.classList.add("custom-expandable-section-header"),this._header.addEventListener("click",this._onClick.bind(this),!1),this._expandIcon=UI.Icon.Icon.create("smallicon-triangle-right","custom-expand-icon"),this._header.insertBefore(this._expandIcon,this._header.firstChild)),this._sectionElement.appendChild(this._header)):Common.Console.Console.instance().error("Broken formatter: header should be an element node.")}element(){return this._sectionElement}_renderJSONMLTag(e){if(!Array.isArray(e))return createTextNode(e+"");const t=e;return"object"===t[0]?this._layoutObjectTag(t):this._renderElement(t)}_renderElement(e){const t=e.shift();if(!CustomPreviewSection._allowedTags.has(t))return Common.Console.Console.instance().error("Broken formatter: element "+t+" is not allowed!"),createElement("span");const o=createElement(t);if("object"==typeof e[0]&&!Array.isArray(e[0])){const t=e.shift();for(const e in t){const n=t[e];"style"===e&&"string"==typeof n&&o.setAttribute(e,n)}}return this._appendJsonMLTags(o,e),o}_layoutObjectTag(e){e.shift();const t=e.shift(),o=this._object.runtimeModel().createRemoteObject(t);if(o.customPreview())return new CustomPreviewSection(o).element();const n=ObjectPropertiesSection.defaultObjectPresentation(o);return n.classList.toggle("custom-expandable-section-standard-section",o.hasChildren),n}_appendJsonMLTags(e,t){for(let o=0;o<t.length;++o)e.appendChild(this._renderJSONMLTag(t[o]))}_onClick(e){e.consume(!0),this._cachedContent?this._toggleExpand():this._loadBody()}_toggleExpand(){this._expanded=!this._expanded,this._header.classList.toggle("expanded",this._expanded),this._cachedContent.classList.toggle("hidden",!this._expanded),this._expanded?this._expandIcon.setIconType("smallicon-triangle-down"):this._expandIcon.setIconType("smallicon-triangle-right")}_loadBody(){const e=this._object.customPreview();if(e.bindRemoteObjectFunctionId&&e.formatterObjectId){const o=[{objectId:e.bindRemoteObjectFunctionId},{objectId:e.formatterObjectId}];e.configObjectId&&o.push({objectId:e.configObjectId}),this._object.callFunctionJSON((function(e,t,o){try{const n=t.body(this,o);return function t(o){if(!o||"object"!=typeof o||"function"!=typeof o.splice)return;const n=o.length;if("number"!=typeof n||n>>>0!==n||!(n>0||1/n>0))return;let s=1;if("object"===o[0]){const t=o[1],n=t.object,i=t.config;if(void 0===n)throw'Illegal format: obligatory attribute "object" isn\'t specified';o[1]=e(n,i),s=2}for(let e=s;e<o.length;++e)t(o[e])}(n),n}catch(e){return console.error("Custom Formatter Failed: "+e),null}}),o).then(t.bind(this))}else e.bodyGetterId&&this._object.callFunctionJSON(e=>e(),[{objectId:e.bodyGetterId}]).then(t.bind(this));function t(e){e&&(this._cachedContent=this._renderJSONMLTag(e),this._sectionElement.appendChild(this._cachedContent),this._toggleExpand())}}}export class CustomPreviewComponent{constructor(e){this._object=e,this._customPreviewSection=new CustomPreviewSection(e),this.element=document.createElement("span"),this.element.classList.add("source-code");const t=UI.Utils.createShadowRootWithCoreStyles(this.element,"object_ui/customPreviewComponent.css");this.element.addEventListener("contextmenu",this._contextMenuEventFired.bind(this),!1),t.appendChild(this._customPreviewSection.element())}expandIfPossible(){(this._object.customPreview().hasBody||this._object.customPreview().bodyGetterId)&&this._customPreviewSection&&this._customPreviewSection._loadBody()}_contextMenuEventFired(e){const t=new UI.ContextMenu.ContextMenu(e);this._customPreviewSection&&t.revealSection().appendItem(Common.UIString.UIString("Show as JavaScript object"),this._disassemble.bind(this)),t.appendApplicableItems(this._object),t.show()}_disassemble(){this.element.shadowRoot.textContent="",this._customPreviewSection=null,this.element.shadowRoot.appendChild(ObjectPropertiesSection.defaultObjectPresentation(this._object))}}CustomPreviewSection._allowedTags=new Set(["span","div","ol","li","table","tr","td"]);