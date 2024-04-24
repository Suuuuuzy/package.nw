import*as Components from"../components/components.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{CustomPreviewComponent}from"./CustomPreviewComponent.js";import{ObjectPropertiesSection}from"./ObjectPropertiesSection.js";export class ObjectPopoverHelper{constructor(e,t){this._linkifier=e,this._resultHighlightedAsDOM=t}dispose(){this._resultHighlightedAsDOM&&SDK.OverlayModel.OverlayModel.hideDOMNodeHighlight(),this._linkifier&&this._linkifier.dispose()}static async buildObjectPopover(e,t){const o=e.description.trimEndWithMaxLength(MaxPopoverTextLength);let i=null;if("object"===e.type){let n=null,s=!1;if("node"===e.subtype&&(SDK.OverlayModel.OverlayModel.highlightObjectAsDOMNode(e),s=!0),e.customPreview()){const t=new CustomPreviewComponent(e);t.expandIfPossible(),i=t.element}else{i=document.createElement("div"),i.classList.add("object-popover-content"),UI.Utils.appendStyle(i,"object_ui/objectPopover.css");i.createChild("div","monospace object-popover-title").createChild("span").textContent=o,n=new Components.Linkifier.Linkifier;const t=new ObjectPropertiesSection(e,"",n,void 0,void 0,void 0,!0);t.element.classList.add("object-popover-tree"),t.titleLessMode(),i.appendChild(t.element)}return t.setMaxContentSize(new UI.Geometry.Size(300,250)),t.setSizeBehavior(UI.GlassPane.SizeBehavior.SetExactSize),t.contentElement.appendChild(i),new ObjectPopoverHelper(n,s)}i=createElement("span"),UI.Utils.appendStyle(i,"object_ui/objectValue.css"),UI.Utils.appendStyle(i,"object_ui/objectPopover.css");const n=i.createChild("span","monospace object-value-"+e.type);if(n.style.whiteSpace="pre","string"===e.type?n.createTextChildren(`"${o}"`):"function"!==e.type&&(n.textContent=o),"function"!==e.type)return t.contentElement.appendChild(i),new ObjectPopoverHelper(null,!1);ObjectPropertiesSection.formatObjectAsFunction(e,n,!0);const s=await e.debuggerModel().functionDetailsPromise(e);if(!s)return null;const r=document.createElement("div");r.classList.add("object-popover-container");const c=r.createChild("div","function-popover-title source-code");c.createChild("span","function-name").textContent=UI.UIUtils.beautifyFunctionName(s.functionName);const l=s.location,p=c.createChild("div","function-title-link-container"),a=l&&l.script()&&l.script().sourceURL;let d=null;return a&&(d=new Components.Linkifier.Linkifier(void 0,void 0,t.positionContent.bind(t)),p.appendChild(d.linkifyRawLocation(l,a))),r.appendChild(i),t.contentElement.appendChild(r),new ObjectPopoverHelper(d,!1)}}const MaxPopoverTextLength=1e4;