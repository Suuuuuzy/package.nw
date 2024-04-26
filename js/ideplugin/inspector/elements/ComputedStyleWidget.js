import*as Common from"../common/common.js";import*as Components from"../components/components.js";import*as InlineEditor from"../inline_editor/inline_editor.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{ComputedStyle,ComputedStyleModel,Events}from"./ComputedStyleModel.js";import{ComputedStylePropertyData,createComputedStyleProperty}from"./ComputedStyleProperty_bridge.js";import{createComputedStyleTrace}from"./ComputedStyleTrace_bridge.js";import{ImagePreviewPopover}from"./ImagePreviewPopover.js";import{PlatformFontsWidget}from"./PlatformFontsWidget.js";import{IdleCallbackManager,StylePropertiesSection,StylesSidebarPane,StylesSidebarPropertyRenderer}from"./StylesSidebarPane.js";const createPropertyElement=(e,t,o,r)=>{const n=createComputedStyleProperty(),s=new StylesSidebarPropertyRenderer(null,e,t,o);s.setColorHandler(processComputedColor);const i=s.renderName();i.slot="property-name",n.appendChild(i);const l=s.renderValue();return l.slot="property-value",n.appendChild(l),n.data=r,n},createTraceElement=(e,t,o,r,n)=>{const s=createComputedStyleTrace(),i=new StylesSidebarPropertyRenderer(null,e,t.name,t.value);i.setColorHandler(processColor);const l=i.renderValue();l.slot="trace-value",s.appendChild(l);const a=t.ownerStyle.parentRule;if(a){const e=document.createElement("span");e.appendChild(StylePropertiesSection.createRuleOriginNode(r,n,a)),e.slot="trace-link",s.appendChild(e)}return s.data={selector:a?a.selectorText():"element.style",active:!o,onNavigateToSource:navigateToSource.bind(null,t)},s},processColor=e=>{const t=Common.Color.Color.parse(e);if(!t)return document.createTextNode(e);const o=InlineEditor.ColorSwatch.ColorSwatch.create();return o.setColor(t),o.setFormat(Common.Settings.detectColorFormat(t)),o},processComputedColor=e=>{const t=Common.Color.Color.parse(e);if(!t)return document.createTextNode(e);const o=InlineEditor.ColorSwatch.ColorSwatch.create();return t.setFormat(Common.Color.Format.RGB),o.setColor(t),o.setFormat(Common.Color.Format.RGB),o},navigateToSource=(e,t)=>{Common.Revealer.reveal(e),t.consume(!0)};export class ComputedStyleWidget extends UI.ThrottledWidget.ThrottledWidget{constructor(){super(!0),this.registerRequiredCSS("elements/computedStyleSidebarPane.css"),this._computedStyleModel=new ComputedStyleModel,this._computedStyleModel.addEventListener(Events.ComputedStyleChanged,this.update,this),this._showInheritedComputedStylePropertiesSetting=Common.Settings.Settings.instance().createSetting("showInheritedComputedStyleProperties",!1),this._showInheritedComputedStylePropertiesSetting.addChangeListener(this._showInheritedComputedStyleChanged.bind(this));const e=this.contentElement.createChild("div","hbox styles-sidebar-pane-toolbar"),t=e.createChild("div","styles-sidebar-pane-filter-box"),o=StylesSidebarPane.createPropertyFilterElement(ls`Filter`,e,function(e){this._filterRegex=e,this._updateFilter(e)}.bind(this));UI.ARIAUtils.setAccessibleName(o,Common.UIString.UIString("Filter Computed Styles")),t.appendChild(o),this.setDefaultFocusedElement(o),this._filterRegex=null;new UI.Toolbar.Toolbar("styles-pane-toolbar",e).appendToolbarItem(new UI.Toolbar.ToolbarSettingCheckbox(this._showInheritedComputedStylePropertiesSetting,void 0,Common.UIString.UIString("Show all"))),this._noMatchesElement=this.contentElement.createChild("div","gray-info-message"),this._noMatchesElement.textContent=ls`No matching property`,this._propertiesOutline=new UI.TreeOutline.TreeOutlineInShadow,this._propertiesOutline.hideOverflow(),this._propertiesOutline.setShowSelectionOnKeyboardFocus(!0),this._propertiesOutline.setFocusable(!0),this._propertiesOutline.registerRequiredCSS("elements/computedStyleWidgetTree.css"),this._propertiesOutline.element.classList.add("monospace","computed-properties"),this.contentElement.appendChild(this._propertiesOutline.element),this._linkifier=new Components.Linkifier.Linkifier(_maxLinkLength),this._imagePreviewPopover=new ImagePreviewPopover(this.contentElement,e=>{const t=e.composedPath()[0];return t instanceof Element?t:null},()=>this._computedStyleModel.node());new PlatformFontsWidget(this._computedStyleModel).show(this.contentElement),this._idleCallbackManager=null}onResize(){const e=this.contentElement.offsetWidth<260;this._propertiesOutline.contentElement.classList.toggle("computed-narrow",e)}_showInheritedComputedStyleChanged(){this.update()}update(){this._idleCallbackManager&&this._idleCallbackManager.discard(),this._idleCallbackManager=new IdleCallbackManager,super.update()}async doUpdate(){const e=[this._computedStyleModel.fetchComputedStyle(),this._fetchMatchedCascade()],[t,o]=await Promise.all(e);await this._innerRebuildUpdate(t,o)}_fetchMatchedCascade(){const e=this._computedStyleModel.node();return e&&this._computedStyleModel.cssModel()?this._computedStyleModel.cssModel().cachedMatchedCascadeForNode(e).then(function(e){return e&&e.node()===this._computedStyleModel.node()?e:null}.bind(this)):Promise.resolve(null)}async _innerRebuildUpdate(e,t){const o=new Set;for(const e of this._propertiesOutline.rootElement().children()){const t=e.listItemElement.querySelector("devtools-computed-style-property");if(!t||!t.isExpanded()&&!e.expanded)continue;const r=e[_propertySymbol].name;o.add(r)}const r=this._propertiesOutline.element.hasFocus();this._imagePreviewPopover.hide(),this._propertiesOutline.removeChildren(),this._linkifier.reset();const n=this._computedStyleModel.cssModel();if(!e||!t||!n)return void this._noMatchesElement.classList.remove("hidden");const s=[...e.computedStyle.keys()];s.sort((function(e,t){if(e.startsWith("--")^t.startsWith("--"))return e.startsWith("--")?1:-1;if(e.startsWith("-webkit")^t.startsWith("-webkit"))return e.startsWith("-webkit")?1:-1;const o=SDK.CSSMetadata.cssMetadata().canonicalPropertyName(e),r=SDK.CSSMetadata.cssMetadata().canonicalPropertyName(t);return o.compareTo(r)}));const i=e.node,l=this._computePropertyTraces(t),a=this._computeInheritedProperties(t),d=this._showInheritedComputedStylePropertiesSetting.get(),c=[];for(const t of s){const o=e.computedStyle.get(t),r=SDK.CSSMetadata.cssMetadata().canonicalPropertyName(t),n=!a.has(r);(d||!n||_alwaysShownComputedProperties.has(t))&&(!d&&t.startsWith("--")||t!==r&&o===e.computedStyle.get(r)||c.push({propertyName:t,propertyValue:o,isInherited:n}))}let p=100;for(;c.length>0;){const e=c.splice(0,20);this._idleCallbackManager.schedule(()=>{for(const{propertyName:n,propertyValue:s,isInherited:a}of e){const e=new UI.TreeOutline.TreeElement,d=l.get(n);let c=()=>{};const p=document.createElement("div");if(p.slot="property-traces",d){const o=this._renderPropertyTrace(t,i,p,d);e.setExpandable(!0),e.listItemElement.addEventListener("mousedown",e=>e.consume(),!1),e.listItemElement.addEventListener("dblclick",e=>e.consume(),!1),e.listItemElement.addEventListener("click",m.bind(null,e),!1),e.listItemElement.addEventListener("contextmenu",this._handleContextMenuEvent.bind(this,t,o)),c=navigateToSource.bind(this,o)}const h=o.has(n);h&&e.expand();const u=createPropertyElement(i,n,s,{inherited:a,expanded:h,onNavigateToSource:c});u.appendChild(p),e.title=u,e[_propertySymbol]={name:n,value:s},this._propertiesOutline.selectedTreeElement||e.select(!r),this._propertiesOutline.appendChild(e);const S=this._propertiesOutline.rootElement().children().length%2==0;e.listItemElement.classList.toggle("even-row",S)}this._updateFilter(this._filterRegex)},p),p+=100}function m(e,t){e.expanded?e.collapse():e.expand(),t.consume()}await this._idleCallbackManager.awaitDone()}_renderPropertyTrace(e,t,o,r){let n=null;for(const s of r){const r=e.propertyState(s)===SDK.CSSMatchedStyles.PropertyState.Overloaded;r||(n=s);const i=createTraceElement(t,s,r,e,this._linkifier);i.addEventListener("contextmenu",this._handleContextMenuEvent.bind(this,e,s)),o.appendChild(i)}return n}_handleContextMenuEvent(e,t,o){const r=new UI.ContextMenu.ContextMenu(o),n=t.ownerStyle.parentRule;if(n){const t=n.styleSheetId?e.cssModel().styleSheetHeaderForId(n.styleSheetId):null;t&&!t.isAnonymousInlineStyleSheet()&&r.defaultSection().appendItem(ls`Navigate to selector source`,()=>{StylePropertiesSection.tryNavigateToRuleLocation(e,n)})}r.defaultSection().appendItem(ls`Navigate to style`,()=>Common.Revealer.reveal(t)),r.show()}_computePropertyTraces(e){const t=new Map;for(const o of e.nodeStyles()){const r=o.allProperties();for(const o of r)o.activeInStyle()&&e.propertyState(o)&&(t.has(o.name)||t.set(o.name,[]),t.get(o.name).push(o))}return t}_computeInheritedProperties(e){const t=new Set;for(const o of e.nodeStyles())for(const r of o.allProperties())e.propertyState(r)&&t.add(SDK.CSSMetadata.cssMetadata().canonicalPropertyName(r.name));return t}_updateFilter(e){const t=this._propertiesOutline.rootElement().children();let o=!1;for(const r of t){const t=r[_propertySymbol],n=!e||e.test(t.name)||e.test(t.value);r.hidden=!n,o|=n}this._noMatchesElement.classList.toggle("hidden",!!o)}}const _maxLinkLength=30,_propertySymbol=Symbol("property");ComputedStyleWidget._propertySymbol=_propertySymbol;const _alwaysShownComputedProperties=new Set(["display","height","width"]);