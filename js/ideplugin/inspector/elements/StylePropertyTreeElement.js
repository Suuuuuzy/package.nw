import*as Bindings from"../bindings/bindings.js";import*as ColorPicker from"../color_picker/color_picker.js";import*as Common from"../common/common.js";import*as InlineEditor from"../inline_editor/inline_editor.js";import*as Platform from"../platform/platform.js";import*as SDK from"../sdk/sdk.js";import*as TextUtils from"../text_utils/text_utils.js";import*as UI from"../ui/ui.js";import{BezierPopoverIcon,ColorSwatchPopoverIcon,ShadowSwatchPopoverHelper}from"./ColorSwatchPopoverIcon.js";import{CSSPropertyPrompt,StylePropertiesSection,StylesSidebarPane,StylesSidebarPropertyRenderer}from"./StylesSidebarPane.js";export class StylePropertyTreeElement extends UI.TreeOutline.TreeElement{constructor(t,e,i,n,s,r,o){super("",n),this._style=i.ownerStyle,this._matchedStyles=e,this.property=i,this._inherited=s,this._overloaded=r,this.selectable=!1,this._parentPane=t,this.isShorthand=n,this._applyStyleThrottler=new Common.Throttler.Throttler(0),this._newProperty=o,this._newProperty&&(this.listItemElement.textContent=""),this._expandedDueToFilter=!1,this.valueElement=null,this.nameElement=null,this._expandElement=null,this._originalPropertyText="",this._hasBeenEditedIncrementally=!1,this._prompt=null,this._lastComputedValue=null,this._contextForTest}matchedStyles(){return this._matchedStyles}_editable(){return!(!this._style.styleSheetId||!this._style.range)}inherited(){return this._inherited}overloaded(){return this._overloaded}setOverloaded(t){t!==this._overloaded&&(this._overloaded=t,this._updateState())}get name(){return this.property.name}get value(){return this.property.value}_updateFilter(){const t=this._parentPane.filterRegex(),e=!!t&&(t.test(this.property.name)||t.test(this.property.value));this.listItemElement.classList.toggle("filter-match",e),this.onpopulate();let i=!1;for(let t=0;t<this.childCount();++t)i|=this.childAt(t)._updateFilter();return t?i&&!this.expanded?(this.expand(),this._expandedDueToFilter=!0):!i&&this.expanded&&this._expandedDueToFilter&&(this.collapse(),this._expandedDueToFilter=!1):(this._expandedDueToFilter&&this.collapse(),this._expandedDueToFilter=!1),e}_processColor(t){const e=Common.Color.Color.parse(t);if(!e)return createTextNode(t);if(!this._editable()){const t=InlineEditor.ColorSwatch.ColorSwatch.create();return t.setColor(e),t}const i=InlineEditor.ColorSwatch.ColorSwatch.create();return i.setColor(e),i.setFormat(Common.Settings.detectColorFormat(i.color())),this._addColorContrastInfo(i),i}_processVar(t){const e=this._matchedStyles.computeValue(this._style,t);if(!e)return createTextNode(t);const i=Common.Color.Color.parse(e);if(!i){const i=createElement("span");return i.textContent=t,i.title=e,i}if(!this._editable()){const n=InlineEditor.ColorSwatch.ColorSwatch.create();return n.setText(t,e),n.setColor(i),n}const n=InlineEditor.ColorSwatch.ColorSwatch.create();return n.setColor(i),n.setFormat(Common.Settings.detectColorFormat(n.color())),n.setText(t,e),this._addColorContrastInfo(n),n}async _addColorContrastInfo(t){const e=this._parentPane.swatchPopoverHelper(),i=new ColorSwatchPopoverIcon(this,e,t);if("color"!==this.property.name||!this._parentPane.cssModel()||!this.node())return;const n=this._parentPane.cssModel(),s=new ColorPicker.ContrastInfo.ContrastInfo(await n.backgroundColorsPromise(this.node().id));i.setContrastInfo(s)}renderedPropertyText(){return this.nameElement.textContent+": "+this.valueElement.textContent}_processBezier(t){if(!this._editable()||!UI.Geometry.CubicBezier.parse(t))return createTextNode(t);const e=this._parentPane.swatchPopoverHelper(),i=InlineEditor.ColorSwatch.BezierSwatch.create();return i.setBezierText(t),new BezierPopoverIcon(this,e,i),i}_processShadow(t,e){if(!this._editable())return createTextNode(t);let i;if(i="text-shadow"===e?InlineEditor.CSSShadowModel.CSSShadowModel.parseTextShadow(t):InlineEditor.CSSShadowModel.CSSShadowModel.parseBoxShadow(t),!i.length)return createTextNode(t);const n=createDocumentFragment(),s=this._parentPane.swatchPopoverHelper();for(let t=0;t<i.length;t++){0!==t&&n.appendChild(createTextNode(", "));const e=InlineEditor.ColorSwatch.CSSShadowSwatch.create();e.setCSSShadow(i[t]),new ShadowSwatchPopoverHelper(this,s,e);const r=e.colorSwatch();r&&new ColorSwatchPopoverIcon(this,s,r),n.appendChild(e)}return n}_processGrid(t,e){const i=TextUtils.TextUtils.Utils.splitStringByRegexes(t,[SDK.CSSMetadata.GridAreaRowRegex]);if(i.length<=1)return createTextNode(t);const n=Common.Settings.Settings.instance().moduleSetting("textEditorIndent").get(),s=createDocumentFragment();for(const t of i){const e=t.value.trim(),i=UI.Fragment.html`<br /><span class='styles-clipboard-only'>${n.repeat(2)}</span>${e}`;s.appendChild(i)}return s}_updateState(){if(!this.listItemElement)return;this._style.isPropertyImplicit(this.name)?this.listItemElement.classList.add("implicit"):this.listItemElement.classList.remove("implicit");!this.property.parsedOk&&StylesSidebarPane.ignoreErrorsForProperty(this.property)?this.listItemElement.classList.add("has-ignorable-error"):this.listItemElement.classList.remove("has-ignorable-error"),this.inherited()?this.listItemElement.classList.add("inherited"):this.listItemElement.classList.remove("inherited"),this.overloaded()?this.listItemElement.classList.add("overloaded"):this.listItemElement.classList.remove("overloaded"),this.property.disabled?this.listItemElement.classList.add("disabled"):this.listItemElement.classList.remove("disabled")}node(){return this._parentPane.node()}parentPane(){return this._parentPane}section(){return this.treeOutline&&this.treeOutline.section}_updatePane(){const t=this.section();t&&t.refreshUpdate(this)}async _toggleDisabled(t){if(!this._style.range)return;this._parentPane.setUserOperation(!0);const e=await this.property.setDisabled(t);this._parentPane.setUserOperation(!1),e&&(this._matchedStyles.resetActiveProperties(),this._updatePane(),this.styleTextAppliedForTest())}async onpopulate(){if(this.childCount()||!this.isShorthand)return;const t=this._style.longhandProperties(this.name);for(let e=0;e<t.length;++e){const i=t[e].name;let n=!1,s=!1;const r=this.section();r&&(n=r.isPropertyInherited(i),s=this._matchedStyles.propertyState(t[e])===SDK.CSSMatchedStyles.PropertyState.Overloaded);const o=new StylePropertyTreeElement(this._parentPane,this._matchedStyles,t[e],!1,n,s,!1);this.appendChild(o)}}onattach(){this.updateTitle(),this.listItemElement.addEventListener("mousedown",t=>{1===t.which&&(this._parentPane[ActiveSymbol]=this)},!1),this.listItemElement.addEventListener("mouseup",this._mouseUp.bind(this)),this.listItemElement.addEventListener("click",t=>{t.target.hasSelection()||t.target===this.listItemElement||t.consume(!0)})}onexpand(){this._updateExpandElement()}oncollapse(){this._updateExpandElement()}_updateExpandElement(){this._expandElement&&(this.expanded?this._expandElement.setIconType("smallicon-triangle-down"):this._expandElement.setIconType("smallicon-triangle-right"))}updateTitleIfComputedValueChanged(){const t=this._matchedStyles.computeValue(this.property.ownerStyle,this.property.value);t!==this._lastComputedValue&&(this._lastComputedValue=t,this._innerUpdateTitle())}updateTitle(){this._lastComputedValue=this._matchedStyles.computeValue(this.property.ownerStyle,this.property.value),this._innerUpdateTitle()}_innerUpdateTitle(){this._updateState(),this.isExpandable()?this._expandElement=UI.Icon.Icon.create("smallicon-triangle-right","expand-icon"):this._expandElement=null;const t=new StylesSidebarPropertyRenderer(this._style.parentRule,this.node(),this.name,this.value);if(this.property.parsedOk&&(t.setVarHandler(this._processVar.bind(this)),t.setColorHandler(this._processColor.bind(this)),t.setBezierHandler(this._processBezier.bind(this)),t.setShadowHandler(this._processShadow.bind(this)),t.setGridHandler(this._processGrid.bind(this))),this.listItemElement.removeChildren(),this.nameElement=t.renderName(),this.property.name.startsWith("--")&&(this.nameElement.title=this._matchedStyles.computeCSSVariable(this._style,this.property.name)||""),this.valueElement=t.renderValue(),!this.treeOutline)return;const e=Common.Settings.Settings.instance().moduleSetting("textEditorIndent").get();this.listItemElement.createChild("span","styles-clipboard-only").createTextChild(e+(this.property.disabled?"/* ":"")),this.listItemElement.appendChild(this.nameElement);const i=this.valueElement.firstElementChild&&"BR"===this.valueElement.firstElementChild.tagName?":":": ";if(this.listItemElement.createChild("span","styles-name-value-separator").textContent=i,this._expandElement&&this.listItemElement.appendChild(this._expandElement),this.listItemElement.appendChild(this.valueElement),this.listItemElement.createTextChild(";"),this.property.disabled&&this.listItemElement.createChild("span","styles-clipboard-only").createTextChild(" */"),this.property.parsedOk?this._updateFontVariationSettingsWarning():(this.listItemElement.classList.add("not-parsed-ok"),this.listItemElement.insertBefore(StylesSidebarPane.createExclamationMark(this.property,null),this.listItemElement.firstChild)),this.property.activeInStyle()||this.listItemElement.classList.add("inactive"),this._updateFilter(),this.property.parsedOk&&this.section()&&this.parent.root){const t=createElement("input");t.className="enabled-button",t.type="checkbox",t.checked=!this.property.disabled,t.addEventListener("mousedown",t=>t.consume(),!1),t.addEventListener("click",t=>{this._toggleDisabled(!this.property.disabled),t.consume()},!1),UI.ARIAUtils.setAccessibleName(t,`${this.nameElement.textContent} ${this.valueElement.textContent}`),this.listItemElement.insertBefore(t,this.listItemElement.firstChild)}}async _updateFontVariationSettingsWarning(){if("font-variation-settings"!==this.property.name)return;const t=this.property.value,e=this._parentPane.cssModel();if(!e)return;const i=this._parentPane.computedStyleModel(),n=await i.fetchComputedStyle();if(!n)return;const s=n.computedStyle.get("font-family");if(!s)return;const r=new Set(SDK.CSSPropertyParser.parseFontFamily(s)),o=e.fontFaces().filter(t=>r.has(t.getFontFamily())),a=SDK.CSSPropertyParser.parseFontVariationSettings(t),l=[];for(const t of a)for(const e of o){const i=e.getVariationAxisByTag(t.tag);i&&((t.value<i.minValue||t.value>i.maxValue)&&l.push(ls`Value for setting “${t.tag}” ${t.value} is outside the supported range [${i.minValue}, ${i.maxValue}] for font-family “${e.getFontFamily()}”.`))}l.length&&(this.listItemElement.classList.add("has-warning"),this.listItemElement.insertBefore(StylesSidebarPane.createExclamationMark(this.property,l.join(" ")),this.listItemElement.firstChild))}_mouseUp(t){const e=this._parentPane[ActiveSymbol];this._parentPane[ActiveSymbol]=null,e===this&&(this.listItemElement.hasSelection()||UI.UIUtils.isBeingEdited(t.target)||(t.consume(!0),t.target!==this.listItemElement&&(UI.KeyboardShortcut.KeyboardShortcut.eventHasCtrlOrMeta(t)&&this.section().navigable?this._navigateToSource(t.target):this.startEditing(t.target))))}_handleContextMenuEvent(t,e){const i=new UI.ContextMenu.ContextMenu(e);this.property.parsedOk&&this.section()&&this.parent.root&&i.defaultSection().appendCheckboxItem(ls`Toggle property and continue editing`,async()=>{const i=this._parentPane.focusedSectionIndex(),n=this.treeOutline.rootElement().indexOfChild(this);this.editingCancelled(null,t),await this._toggleDisabled(!this.property.disabled),e.consume(),this._parentPane.continueEditingElement(i,n)},!this.property.disabled),i.defaultSection().appendItem(ls`Reveal in Sources panel`,this._navigateToSource.bind(this)),i.show()}_navigateToSource(t,e){if(!this.section().navigable)return;const i=t===this.nameElement,n=Bindings.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.property,i);n&&Common.Revealer.reveal(n,e)}startEditing(t){if(this.parent.isShorthand)return;if(this._expandElement&&t===this._expandElement)return;const e=this.section();if(e&&!e.editable)return;if(t&&(t=t.enclosingNodeOrSelfWithClass("webkit-css-property")||t.enclosingNodeOrSelfWithClass("value")),t||(t=this.nameElement),UI.UIUtils.isBeingEdited(t))return;const i=t===this.nameElement;var n;i||(SDK.CSSMetadata.cssMetadata().isGridAreaDefiningProperty(this.name)&&(this.valueElement.textContent=(n=this.value,TextUtils.TextUtils.Utils.splitStringByRegexes(n,[SDK.CSSMetadata.GridAreaRowRegex]).map(t=>t.value.trim()).join("\n"))),this.valueElement.textContent=function(t,e){const i=t.split(SDK.CSSMetadata.URLRegex);if(1===i.length)return t;const n=new RegExp(SDK.CSSMetadata.URLRegex);for(let t=1;t<i.length;t+=2){const s=n.exec(e);s&&(i[t]=s[0])}return i.join("")}(this.valueElement.textContent,this.value));const s={expanded:this.expanded,hasChildren:this.isExpandable(),isEditingName:i,originalProperty:this.property,previousContent:t.textContent};this._contextForTest=s,this.setExpandable(!1),t.parentElement&&t.parentElement.classList.add("child-editing"),t.textContent=t.textContent,this._originalPropertyText=this.property.propertyText,this._parentPane.setEditingStyle(!0,this),t.parentElement&&t.parentElement.scrollIntoViewIfNeeded(!1),this._prompt=new CSSPropertyPrompt(this,i),this._prompt.setAutocompletionTimeout(0),this._prompt.addEventListener(UI.TextPrompt.Events.TextChanged,t=>{this._applyFreeFlowStyleTextEdit(s)});const r=this._prompt.attachAndStartEditing(t,function(t,e){let i=e.target.textContent;t.isEditingName||(i=this.value||i),this._editingCommitted(i,t,"")}.bind(this,s));this._navigateToSource(t,!0),r.addEventListener("keydown",this._editingNameValueKeyDown.bind(this,s),!1),r.addEventListener("keypress",this._editingNameValueKeyPress.bind(this,s),!1),i&&(r.addEventListener("paste",function(t,e){const i=e.clipboardData.getData("Text");if(!i)return;const n=i.indexOf(":");if(n<0)return;const s=i.substring(0,n).trim(),r=i.substring(n+1).trim();e.preventDefault(),"originalName"in t||(t.originalName=this.nameElement.textContent,t.originalValue=this.valueElement.textContent),this.property.name=s,this.property.value=r,this.nameElement.textContent=s,this.valueElement.textContent=r,this.nameElement.normalize(),this.valueElement.normalize(),this._editingCommitted(e.target.textContent,t,"forward")}.bind(this,s),!1),r.addEventListener("contextmenu",this._handleContextMenuEvent.bind(this,s),!1)),t.getComponentSelection().selectAllChildren(t)}_editingNameValueKeyDown(t,e){if(e.handled)return;let i;if(isEnterKey(e)&&!e.shiftKey)i="forward";else if(e.keyCode===UI.KeyboardShortcut.Keys.Esc.code||"Escape"===e.key)i="cancel";else if(!t.isEditingName&&this._newProperty&&e.keyCode===UI.KeyboardShortcut.Keys.Backspace.code){const t=e.target.getComponentSelection();t.isCollapsed&&!t.focusOffset&&(e.preventDefault(),i="backward")}else"Tab"===e.key&&(i=e.shiftKey?"backward":"forward",e.preventDefault());if(i){switch(i){case"cancel":this.editingCancelled(null,t);break;case"forward":case"backward":this._editingCommitted(e.target.textContent,t,i)}e.consume()}else;}_editingNameValueKeyPress(t,e){const i=String.fromCharCode(e.charCode);if(t.isEditingName?":"===i:";"===i&&function(t,e){let i="";for(let n=0;n<e;++n){const e=t[n];"\\"===e&&""!==i?++n:i||'"'!==e&&"'"!==e?i===e&&(i=""):i=e}return!i}(e.target.textContent,e.target.selectionLeftOffset()))return e.consume(!0),void this._editingCommitted(e.target.textContent,t,"forward")}async _applyFreeFlowStyleTextEdit(t){if(!this._prompt||!this._parentPane.node())return;const e=this._prompt.text();if(t.isEditingName&&e.includes(":"))return void this._editingCommitted(e,t,"forward");const i=this._prompt.textWithCurrentSuggestion();if(i.includes(";"))return;if(!!this._parentPane.node().pseudoType()){if("content"===this.name.toLowerCase())return;const t=i.trim().toLowerCase();if(t.startsWith("content:")||"display: none"===t)return}t.isEditingName?i.includes(":")?await this.applyStyleText(i,!1):this._hasBeenEditedIncrementally&&await this._applyOriginalStyle(t):await this.applyStyleText(`${this.nameElement.textContent}: ${i}`,!1)}kickFreeFlowStyleEditForTest(){const t=this._contextForTest;return this._applyFreeFlowStyleTextEdit(t)}editingEnded(t){this.setExpandable(t.hasChildren),t.expanded&&this.expand();const e=t.isEditingName?this.nameElement:this.valueElement;e.parentElement&&e.parentElement.classList.remove("child-editing"),this._parentPane.setEditingStyle(!1)}editingCancelled(t,e){this._removePrompt(),this._hasBeenEditedIncrementally?this._applyOriginalStyle(e):this._newProperty&&this.treeOutline.removeChild(this),this.updateTitle(),this.editingEnded(e)}async _applyOriginalStyle(t){await this.applyStyleText(this._originalPropertyText,!1,t.originalProperty)}_findSibling(t){let e=this;do{e="forward"===t?e.nextSibling:e.previousSibling}while(e&&e.inherited());return e}async _editingCommitted(t,e,i){this._removePrompt(),this.editingEnded(e);const n=e.isEditingName,s=n&&this.nameElement.textContent.includes(":")||!this.property;let r,o;const a="originalName"in e,l=a&&(this.nameElement.textContent!==e.originalName||this.valueElement.textContent!==e.originalValue),h=a&&n&&this.valueElement.textContent!==e.originalValue;let d=this;const p=n^"forward"===i,m=this._newProperty&&!t&&(p||n);("forward"===i&&(!n||h)||"backward"===i&&n)&&(d=d._findSibling(i),d||("forward"!==i||this._newProperty&&!t?"backward"===i&&(o=!0):r=!0));let c=d&&this.treeOutline?this.treeOutline.rootElement().indexOfChild(d):-1;const u=Platform.StringUtilities.isWhitespace(t),y=this._newProperty&&(h||p||!i&&!n||n&&u||s),S=this.section();if((t!==e.previousContent||l)&&!this._newProperty||y){let e;e=s?this.nameElement.textContent:u||this._newProperty&&Platform.StringUtilities.isWhitespace(this.valueElement.textContent)?"":n?t+": "+this.property.value:this.property.name+": "+t,await this.applyStyleText(e,!0),_.call(this,this._newProperty,!u,S)}else n?this.property.name=t:this.property.value=t,a||this._newProperty||this.updateTitle(),_.call(this,this._newProperty,!1,S);function _(t,e,s){if(i)if(d&&d.parent)d.startEditing(n?d.valueElement:d.nameElement);else{if(d&&!d.parent){const e=s.propertiesTreeOutline.rootElement();if("forward"===i&&u&&!n&&--c,c>=e.childCount()&&!this._newProperty)r=!0;else{const s=c>=0?e.childAt(c):null;if(s){let e=!n||h?s.nameElement:s.valueElement;return t&&u&&(e="forward"===i?s.nameElement:s.valueElement),void s.startEditing(e)}t||(o=!0)}}if(r){if(t&&!e&&n^"backward"===i)return;s.addNewBlankProperty().startEditing()}else if(m){d=this._findSibling(i);const t=d||"backward"===i?s:s.nextEditableSibling();t&&(t.style().parentRule?t.startEditingSelector():t.moveEditorFromSelector(i))}else o&&(s.style().parentRule?s.startEditingSelector():s.moveEditorFromSelector(i))}else this._parentPane.resetFocus()}}_removePrompt(){this._prompt&&(this._prompt.detach(),this._prompt=null)}styleTextAppliedForTest(){}applyStyleText(t,e,i){return this._applyStyleThrottler.schedule(this._innerApplyStyleText.bind(this,t,e,i))}async _innerApplyStyleText(t,e,i){if(!this.treeOutline||!this.property)return;if(!this._style.range)return;const n=this._hasBeenEditedIncrementally;if(!(t=t.replace(/[\xA0\t]/g," ").trim()).length&&e&&this._newProperty&&!n)return void this.parent.removeChild(this);const s=this._parentPane.node();this._parentPane.setUserOperation(!0),t.length&&!/;\s*$/.test(t)&&(t+=";");const r=!this._newProperty||n;let o=await this.property.setText(t,e,r);n&&e&&!o&&(e=!1,o=await this.property.setText(this._originalPropertyText,e,r)),this._parentPane.setUserOperation(!1);const a=i||this._style.propertyAt(this.property.index),l=this.property.index<this._style.allProperties().length;if(!o||!a&&l)return e&&(this._newProperty?this.treeOutline.removeChild(this):this.updateTitle()),void this.styleTextAppliedForTest();this._matchedStyles.resetActiveProperties(),this._hasBeenEditedIncrementally=!0;!(e&&!t.length)&&a&&(this.property=a),s===this.node()&&this._updatePane(),this.styleTextAppliedForTest()}ondblclick(){return!0}isEventWithinDisclosureTriangle(t){return t.target===this._expandElement}}export const ActiveSymbol=Symbol("ActiveSymbol");export let Context;