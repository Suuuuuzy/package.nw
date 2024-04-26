import*as Common from"../common/common.js";import*as Host from"../host/host.js";import*as Platform from"../platform/platform.js";import*as TextUtils from"../text_utils/text_utils.js";import*as ARIAUtils from"./ARIAUtils.js";import{Dialog}from"./Dialog.js";import{Size}from"./Geometry.js";import{GlassPane,PointerEventsBehavior,SizeBehavior}from"./GlassPane.js";import{Icon}from"./Icon.js";import{KeyboardShortcut}from"./KeyboardShortcut.js";import{Toolbar,ToolbarButton}from"./Toolbar.js";import{TreeOutline}from"./Treeoutline.js";import{appendStyle}from"./utils/append-style.js";import{createShadowRootWithCoreStyles}from"./utils/create-shadow-root-with-core-styles.js";import{focusChanged}from"./utils/focus-changed.js";import{injectCoreStyles}from"./utils/inject-core-styles.js";import{measuredScrollbarWidth}from"./utils/measured-scrollbar-width.js";import{registerCustomElement}from"./utils/register-custom-element.js";import{XLink}from"./XLink.js";export const highlightedSearchResultClassName="highlighted-search-result";export const highlightedCurrentSearchResultClassName="current-search-result";export{markAsFocusedByKeyboard}from"./utils/focus-changed.js";export function installDragHandle(e,t,n,o,r,s,i){let a;e.addEventListener("mousedown",(function(s){const l=new DragHandler,c=l.elementDragStart.bind(l,e,t,n,o,r,s);i?a=setTimeout(c,i):c()}),!1),i&&e.addEventListener("mouseup",(function(){a&&clearTimeout(a),a=null}),!1),null!==s&&(e.style.cursor=s||r||"")}export function elementDragStart(e,t,n,o,r,s){(new DragHandler).elementDragStart(e,t,n,o,r,s)}class DragHandler{constructor(){this._elementDragMove=this._elementDragMove.bind(this),this._elementDragEnd=this._elementDragEnd.bind(this),this._mouseOutWhileDragging=this._mouseOutWhileDragging.bind(this)}_createGlassPane(){this._glassPaneInUse=!0,DragHandler._glassPaneUsageCount++||(DragHandler._glassPane=new GlassPane,DragHandler._glassPane.setPointerEventsBehavior(PointerEventsBehavior.BlockedByGlassPane),DragHandler._glassPane.show(DragHandler._documentForMouseOut))}_disposeGlassPane(){this._glassPaneInUse&&(this._glassPaneInUse=!1,--DragHandler._glassPaneUsageCount||(DragHandler._glassPane.hide(),delete DragHandler._glassPane,delete DragHandler._documentForMouseOut))}elementDragStart(e,t,n,o,r,s){if(s.button||Host.Platform.isMac()&&s.ctrlKey)return;if(this._elementDraggingEventListener)return;if(t&&!t(s))return;const i=s.target.ownerDocument;this._elementDraggingEventListener=n,this._elementEndDraggingEventListener=o,console.assert((DragHandler._documentForMouseOut||i)===i,"Dragging on multiple documents."),DragHandler._documentForMouseOut=i,this._dragEventsTargetDocument=i;try{this._dragEventsTargetDocumentTop=i.defaultView.top.document}catch(e){this._dragEventsTargetDocumentTop=this._dragEventsTargetDocument}i.addEventListener("mousemove",this._elementDragMove,!0),i.addEventListener("mouseup",this._elementDragEnd,!0),i.addEventListener("mouseout",this._mouseOutWhileDragging,!0),i!==this._dragEventsTargetDocumentTop&&this._dragEventsTargetDocumentTop.addEventListener("mouseup",this._elementDragEnd,!0),"string"==typeof r&&(this._restoreCursorAfterDrag=function(t){i.body.style.removeProperty("cursor"),e.style.cursor=t,this._restoreCursorAfterDrag=null}.bind(this,e.style.cursor),e.style.cursor=r,i.body.style.cursor=r),s.preventDefault()}_mouseOutWhileDragging(){this._unregisterMouseOutWhileDragging(),this._createGlassPane()}_unregisterMouseOutWhileDragging(){DragHandler._documentForMouseOut&&DragHandler._documentForMouseOut.removeEventListener("mouseout",this._mouseOutWhileDragging,!0)}_unregisterDragEvents(){this._dragEventsTargetDocument&&(this._dragEventsTargetDocument.removeEventListener("mousemove",this._elementDragMove,!0),this._dragEventsTargetDocument.removeEventListener("mouseup",this._elementDragEnd,!0),this._dragEventsTargetDocument!==this._dragEventsTargetDocumentTop&&this._dragEventsTargetDocumentTop.removeEventListener("mouseup",this._elementDragEnd,!0),delete this._dragEventsTargetDocument,delete this._dragEventsTargetDocumentTop)}_elementDragMove(e){1===e.buttons?this._elementDraggingEventListener(e)&&this._cancelDragEvents(e):this._elementDragEnd(e)}_cancelDragEvents(e){this._unregisterDragEvents(),this._unregisterMouseOutWhileDragging(),this._restoreCursorAfterDrag&&this._restoreCursorAfterDrag(),this._disposeGlassPane(),delete this._elementDraggingEventListener,delete this._elementEndDraggingEventListener}_elementDragEnd(e){const t=this._elementEndDraggingEventListener;this._cancelDragEvents(e),e.preventDefault(),t&&t(e)}}DragHandler._glassPaneUsageCount=0;export function isBeingEdited(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;let t=e;if(t.classList.contains("text-prompt")||"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)return!0;if(!UI.__editingCount)return!1;for(;t;){if(t.__editing)return!0;t=t.parentElementOrShadowHost()}return!1}export function isEditing(){if(UI.__editingCount)return!0;const e=document.deepActiveElement();return!!e&&(e.classList.contains("text-prompt")||"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)}export function markBeingEdited(e,t){if(t){if(e.__editing)return!1;e.classList.add("being-edited"),e.__editing=!0,UI.__editingCount=(UI.__editingCount||0)+1}else{if(!e.__editing)return!1;e.classList.remove("being-edited"),delete e.__editing,--UI.__editingCount}return!0}const _numberRegex=/^(-?(?:\d+(?:\.\d+)?|\.\d+))$/;export const StyleValueDelimiters="  \t\n\"':;,/()";function _valueModificationDirection(e){let t=null;return"mousewheel"===e.type?e.wheelDeltaY>0||e.wheelDeltaX>0?t="Up":(e.wheelDeltaY<0||e.wheelDeltaX<0)&&(t="Down"):"ArrowUp"===e.key||"PageUp"===e.key?t="Up":"ArrowDown"!==e.key&&"PageDown"!==e.key||(t="Down"),t}function _modifiedHexValue(e,t){const n=_valueModificationDirection(t);if(!n)return null;const o=t,r=parseInt(e,16);if(isNaN(r)||!isFinite(r))return null;const s=e.length,i=s/3;if(1!==i&&2!==i)return null;let a=0;KeyboardShortcut.eventHasCtrlOrMeta(o)&&(a+=Math.pow(16,2*i)),o.shiftKey&&(a+=Math.pow(16,i)),o.altKey&&(a+=1),0===a&&(a=1),"Down"===n&&(a*=-1);const l=Math.pow(16,s)-1;let c=Platform.NumberUtilities.clamp(r+a,0,l).toString(16).toUpperCase();for(let e=0,t=s-c.length;e<t;++e)c="0"+c;return c}function _modifiedFloatNumber(e,t,n){const o=_valueModificationDirection(t);if(!o)return null;const r=t;let s=1;KeyboardShortcut.eventHasCtrlOrMeta(r)?s=100:r.shiftKey?s=10:r.altKey&&(s=.1),"Down"===o&&(s*=-1),n&&(s*=n);const i=Number((e+s).toFixed(6));return String(i).match(_numberRegex)?i:null}export function createReplacementString(e,t,n){let o,r,s,i=null,a=/(.*#)([\da-fA-F]+)(.*)/.exec(e);return a&&a.length?(o=a[1],r=a[3],s=_modifiedHexValue(a[2],t),null!==s&&(i=o+s+r)):(a=/(.*?)(-?(?:\d+(?:\.\d+)?|\.\d+))(.*)/.exec(e),a&&a.length&&(o=a[1],r=a[3],s=_modifiedFloatNumber(parseFloat(a[2]),t),null!==s&&(i=n?n(o,s,r):o+s+r))),i}export function handleElementValueModifications(e,t,n,o,r){const s="ArrowUp"===e.key||"ArrowDown"===e.key||"mousewheel"===e.type,i="PageUp"===e.key||"PageDown"===e.key;if(!s&&!i)return!1;const a=t.getComponentSelection();if(!a.rangeCount)return!1;const l=a.getRangeAt(0);if(!l.commonAncestorContainer.isSelfOrDescendant(t))return!1;const c=t.textContent,d=l.startContainer.rangeOfWord(l.startOffset,"  \t\n\"':;,/()",t),u=d.toString();if(o&&o(u))return!1;const h=createReplacementString(u,e,r);if(h){const t=createTextNode(h);d.deleteContents(),d.insertNode(t);const o=document.createRange();return o.setStart(t,0),o.setEnd(t,h.length),a.removeAllRanges(),a.addRange(o),e.handled=!0,e.preventDefault(),n&&n(c,h),!0}return!1}Number.preciseMillisToString=function(e,t){const n="%."+(t=t||0)+"f ms";return Common.UIString.UIString(n,e)};export const _microsFormat=new Common.UIString.UIStringFormat("%.0f μs");export const _subMillisFormat=new Common.UIString.UIStringFormat("%.2f ms");export const _millisFormat=new Common.UIString.UIStringFormat("%.0f ms");export const _secondsFormat=new Common.UIString.UIStringFormat("%.2f s");export const _minutesFormat=new Common.UIString.UIStringFormat("%.1f min");export const _hoursFormat=new Common.UIString.UIStringFormat("%.1f hrs");export const _daysFormat=new Common.UIString.UIStringFormat("%.1f days");Number.millisToString=function(e,t){if(!isFinite(e))return"-";if(0===e)return"0";if(t&&e<.1)return _microsFormat.format(1e3*e);if(t&&e<1e3)return _subMillisFormat.format(e);if(e<1e3)return _millisFormat.format(e);const n=e/1e3;if(n<60)return _secondsFormat.format(n);const o=n/60;if(o<60)return _minutesFormat.format(o);const r=o/60;if(r<24)return _hoursFormat.format(r);const s=r/24;return _daysFormat.format(s)},Number.secondsToString=function(e,t){return isFinite(e)?Number.millisToString(1e3*e,t):"-"},Number.withThousandsSeparator=function(e){let t=e+"";const n=/(\d+)(\d{3})/;for(;t.match(n);)t=t.replace(n,"$1 $2");return t};export function formatLocalized(e,t){return Platform.StringUtilities.format(Common.UIString.UIString(e),t,{s:e=>e},createElement("span"),(function(e,t){return e.appendChild("string"==typeof t?createTextNode(t):t),e})).formattedResult}export function openLinkExternallyLabel(){return Common.UIString.UIString("Open in new tab")}export function copyLinkAddressLabel(){return Common.UIString.UIString("Copy link address")}export function anotherProfilerActiveLabel(){return Common.UIString.UIString("Another profiler is already active")}export function asyncStackTraceLabel(e){return e?"Promise.resolve"===e?ls`Promise resolved (async)`:"Promise.reject"===e?ls`Promise rejected (async)`:ls`${e} (async)`:Common.UIString.UIString("Async Call")}export function installComponentRootStyles(e){injectCoreStyles(e),e.classList.add("platform-"+Host.Platform.platform()),Host.Platform.isMac()||0!==measuredScrollbarWidth(e.ownerDocument)||e.classList.add("overlay-scrollbar-enabled")}function _windowFocused(e,t){t.target.document.nodeType===Node.DOCUMENT_NODE&&e.body.classList.remove("inactive"),UI._keyboardFocus=!0;const n=()=>{const t=e.deepActiveElement();t&&t.removeAttribute("data-keyboard-focus"),UI._keyboardFocus=!1};e.defaultView.requestAnimationFrame(()=>{UI._keyboardFocus=!1,e.removeEventListener("mousedown",n,!0)}),e.addEventListener("mousedown",n,!0)}function _windowBlurred(e,t){t.target.document.nodeType===Node.DOCUMENT_NODE&&e.body.classList.add("inactive")}export function elementIsFocusedByKeyboard(e){return e.hasAttribute("data-keyboard-focus")}export class ElementFocusRestorer{constructor(e){this._element=e,this._previous=e.ownerDocument.deepActiveElement(),e.focus()}restore(){this._element&&(this._element.hasFocus()&&this._previous&&this._previous.focus(),this._previous=null,this._element=null)}}export function highlightSearchResult(e,t,n,o){const r=highlightSearchResults(e,[new TextUtils.TextRange.SourceRange(t,n)],o);return r.length?r[0]:null}export function highlightSearchResults(e,t,n){return highlightRangesWithStyleClass(e,t,"highlighted-search-result",n)}export function runCSSAnimationOnce(e,t){e.classList.contains(t)&&e.classList.remove(t),e.addEventListener("webkitAnimationEnd",(function n(){e.classList.remove(t),e.removeEventListener("webkitAnimationEnd",n,!1)}),!1),e.classList.add(t)}export function highlightRangesWithStyleClass(e,t,n,o){o=o||[];const r=[],s=e.childTextNodes(),i=s.map((function(e){return e.textContent})).join(""),a=e.ownerDocument;if(0===s.length)return r;const l=[];let c=0;for(let e=0;e<s.length;++e){const t={};t.offset=c,t.length=s[e].textContent.length,c=t.offset+t.length,l.push(t)}let d=0;for(let e=0;e<t.length;++e){const c=t[e].offset,u=c+t[e].length;for(;d<s.length&&l[d].offset+l[d].length<=c;)d++;let h=d;for(;h<s.length&&l[h].offset+l[h].length<u;)h++;if(h===s.length)break;const m=a.createElement("span");m.className=n,m.textContent=i.substring(c,u);const g=s[h],p=g.textContent;if(g.textContent=p.substring(u-l[h].offset),o.push({node:g,type:"changed",oldText:p,newText:g.textContent}),d===h){g.parentElement.insertBefore(m,g),o.push({node:m,type:"added",nextSibling:g,parent:g.parentElement}),r.push(m);const e=a.createTextNode(p.substring(0,c-l[d].offset));g.parentElement.insertBefore(e,m),o.push({node:e,type:"added",nextSibling:m,parent:g.parentElement})}else{const e=s[d],t=e.textContent,n=e.nextSibling;e.parentElement.insertBefore(m,n),o.push({node:m,type:"added",nextSibling:n,parent:e.parentElement}),r.push(m),e.textContent=t.substring(0,c-l[d].offset),o.push({node:e,type:"changed",oldText:t,newText:e.textContent});for(let e=d+1;e<h;e++){const t=s[e],n=t.textContent;t.textContent="",o.push({node:t,type:"changed",oldText:n,newText:t.textContent})}}d=h,l[d].offset=u,l[d].length=g.textContent.length}return r}export function applyDomChanges(e){for(let t=0,n=e.length;t<n;++t){const n=e[t];switch(n.type){case"added":n.parent.insertBefore(n.node,n.nextSibling);break;case"changed":n.node.textContent=n.newText}}}export function revertDomChanges(e){for(let t=e.length-1;t>=0;--t){const n=e[t];switch(n.type){case"added":n.node.remove();break;case"changed":n.node.textContent=n.oldText}}}export function measurePreferredSize(e,t){const n=e.parentElement,o=e.nextSibling;(t=t||e.ownerDocument.body).appendChild(e),e.positionAt(0,0);const r=e.getBoundingClientRect();return e.positionAt(void 0,void 0),n?n.insertBefore(e,o):e.remove(),new Size(r.width,r.height)}class InvokeOnceHandlers{constructor(e){this._handlers=null,this._autoInvoke=e}add(e,t){this._handlers||(this._handlers=new Map,this._autoInvoke&&this.scheduleInvoke());let n=this._handlers.get(e);n||(n=new Set,this._handlers.set(e,n)),n.add(t)}scheduleInvoke(){this._handlers&&requestAnimationFrame(this._invoke.bind(this))}_invoke(){const e=this._handlers||new Map;this._handlers=null;for(const[t,n]of e)for(const e of n)e.call(t)}}let _coalescingLevel=0,_postUpdateHandlers=null;export function startBatchUpdate(){_coalescingLevel++||(_postUpdateHandlers=new InvokeOnceHandlers(!1))}export function endBatchUpdate(){--_coalescingLevel||(_postUpdateHandlers.scheduleInvoke(),_postUpdateHandlers=null)}export function invokeOnceAfterBatchUpdate(e,t){_postUpdateHandlers||(_postUpdateHandlers=new InvokeOnceHandlers(!0)),_postUpdateHandlers.add(e,t)}export function animateFunction(e,t,n,o,r){const s=e.performance.now();let i=e.requestAnimationFrame((function a(l){const c=Platform.NumberUtilities.clamp((l-s)/o,0,1);t(...n.map(e=>e.from+(e.to-e.from)*c)),c<1?i=e.requestAnimationFrame(a):r&&r()}));return()=>e.cancelAnimationFrame(i)}export class LongClickController extends Common.ObjectWrapper.ObjectWrapper{constructor(e,t,n=(e=>isEnterOrSpaceKey(e))){super(),this._element=e,this._callback=t,this._editKey=n,this._enable(),this._longClickData}reset(){this._longClickInterval&&(clearInterval(this._longClickInterval),delete this._longClickInterval)}_enable(){if(this._longClickData)return;const e=function(e){if(this._editKey(e)){const t=this._callback;this._longClickInterval=setTimeout(t.bind(null,e),LongClickController.TIME_MS)}}.bind(this),t=function(e){this._editKey(e)&&this.reset()}.bind(this),n=function(e){if(1!==e.which)return;const t=this._callback;this._longClickInterval=setTimeout(t.bind(null,e),LongClickController.TIME_MS)}.bind(this),o=function(e){if(1!==e.which)return;this.reset()}.bind(this),r=this.reset.bind(this);this._element.addEventListener("keydown",e,!1),this._element.addEventListener("keyup",t,!1),this._element.addEventListener("mousedown",n,!1),this._element.addEventListener("mouseout",r,!1),this._element.addEventListener("mouseup",o,!1),this._element.addEventListener("click",r,!0),this._longClickData={mouseUp:o,mouseDown:n,reset:r}}dispose(){this._longClickData&&(this._element.removeEventListener("mousedown",this._longClickData.mouseDown,!1),this._element.removeEventListener("mouseout",this._longClickData.reset,!1),this._element.removeEventListener("mouseup",this._longClickData.mouseUp,!1),this._element.addEventListener("click",this._longClickData.reset,!0),delete this._longClickData)}}function _trackKeyboardFocus(){UI._keyboardFocus=!0,document.defaultView.requestAnimationFrame(()=>{UI._keyboardFocus=!1})}LongClickController.TIME_MS=200;export function initializeUIUtils(e,t){e.body.classList.toggle("inactive",!e.hasFocus()),e.defaultView.addEventListener("focus",_windowFocused.bind(UI,e),!1),e.defaultView.addEventListener("blur",_windowBlurred.bind(UI,e),!1),e.addEventListener("focus",focusChanged.bind(UI),!0),e.addEventListener("keydown",_trackKeyboardFocus,!0),e.addEventListener("keyup",_trackKeyboardFocus,!0),self.UI.themeSupport||(self.UI.themeSupport=new ThemeSupport(t)),self.UI.themeSupport.applyTheme(e);const n=e.body;appendStyle(n,"ui/inspectorStyle.css"),GlassPane.setContainer(e.body)}export function beautifyFunctionName(e){return e||Common.UIString.UIString("(anonymous)")}export function createTextButton(e,t,n,o){const r=document.createElement("button");return n&&(r.className=n),r.textContent=e,r.classList.add("text-button"),o&&r.classList.add("primary-button"),t&&r.addEventListener("click",t,!1),r.type="button",r}export function createInput(e,t){const n=document.createElement("input");return e&&(n.className=e),n.spellcheck=!1,n.classList.add("harmony-input"),t&&(n.type=t),n}export function createLabel(e,t,n){const o=document.createElement("label");return t&&(o.className=t),o.textContent=e,n&&ARIAUtils.bindLabelToControl(o,n),o}export function createRadioLabel(e,t,n){const o=createElement("span","dt-radio");return o.radioElement.name=e,o.radioElement.checked=!!n,o.labelElement.createTextChild(t),o}export function createIconLabel(e,t){const n=createElement("span","dt-icon-label");return n.createChild("span").textContent=e,n.type=t,n}export function createSlider(e,t,n){const o=createElement("span","dt-slider");return o.sliderElement.min=e,o.sliderElement.max=t,o.sliderElement.step=1,o.sliderElement.tabIndex=n,o}export class CheckboxLabel extends HTMLSpanElement{constructor(){super(),this._shadowRoot,this.checkboxElement,this.textElement,CheckboxLabel._lastId=(CheckboxLabel._lastId||0)+1;const e="ui-checkbox-label"+CheckboxLabel._lastId;this._shadowRoot=createShadowRootWithCoreStyles(this,"ui/checkboxTextLabel.css"),this.checkboxElement=this._shadowRoot.createChild("input"),this.checkboxElement.type="checkbox",this.checkboxElement.setAttribute("id",e),this.textElement=this._shadowRoot.createChild("label","dt-checkbox-text"),this.textElement.setAttribute("for",e),this._shadowRoot.createChild("slot")}static create(e,t,n){CheckboxLabel._constructor||(CheckboxLabel._constructor=registerCustomElement("span","dt-checkbox",CheckboxLabel));const o=CheckboxLabel._constructor();return o.checkboxElement.checked=!!t,void 0!==e&&(o.textElement.textContent=e,ARIAUtils.setAccessibleName(o.checkboxElement,e),void 0!==n&&(o.textElement.createChild("div","dt-checkbox-subtitle").textContent=n)),o}set backgroundColor(e){this.checkboxElement.classList.add("dt-checkbox-themed"),this.checkboxElement.style.backgroundColor=e}set checkColor(e){this.checkboxElement.classList.add("dt-checkbox-themed");const t=createElement("style");t.textContent="input.dt-checkbox-themed:checked:after { background-color: "+e+"}",this._shadowRoot.appendChild(t)}set borderColor(e){this.checkboxElement.classList.add("dt-checkbox-themed"),this.checkboxElement.style.borderColor=e}}!function(){let e=0;function t(e){this.radioElement.checked||this.radioElement.disabled||(this.radioElement.checked=!0,this.radioElement.dispatchEvent(new Event("change")))}registerCustomElement("span","dt-radio",class extends HTMLSpanElement{constructor(){super(),this.radioElement=this.createChild("input","dt-radio-button"),this.labelElement=this.createChild("label");const n="dt-radio-button-id"+ ++e;this.radioElement.id=n,this.radioElement.type="radio",this.labelElement.htmlFor=n;createShadowRootWithCoreStyles(this,"ui/radioButton.css").createChild("slot"),this.addEventListener("click",t,!1)}}),registerCustomElement("span","dt-icon-label",class extends HTMLSpanElement{constructor(){super();const e=createShadowRootWithCoreStyles(this);this._iconElement=Icon.create(),this._iconElement.style.setProperty("margin-right","4px"),e.appendChild(this._iconElement),e.createChild("slot")}set type(e){this._iconElement.setIconType(e)}}),registerCustomElement("span","dt-slider",class extends HTMLSpanElement{constructor(){super();const e=createShadowRootWithCoreStyles(this,"ui/slider.css");this.sliderElement=document.createElement("input"),this.sliderElement.classList.add("dt-range-input"),this.sliderElement.type="range",e.appendChild(this.sliderElement)}set value(e){this.sliderElement.value=e}get value(){return this.sliderElement.value}}),registerCustomElement("span","dt-small-bubble",class extends HTMLSpanElement{constructor(){super();const e=createShadowRootWithCoreStyles(this,"ui/smallBubble.css");this._textElement=e.createChild("div"),this._textElement.className="info",this._textElement.createChild("slot")}set type(e){this._textElement.className=e}}),registerCustomElement("div","dt-close-button",class extends HTMLDivElement{constructor(){super();const e=createShadowRootWithCoreStyles(this,"ui/closeButton.css");this._buttonElement=e.createChild("div","close-button"),ARIAUtils.setAccessibleName(this._buttonElement,ls`Close`),ARIAUtils.markAsButton(this._buttonElement);const t=Icon.create("smallicon-cross","default-icon");this._hoverIcon=Icon.create("mediumicon-red-cross-hover","hover-icon"),this._activeIcon=Icon.create("mediumicon-red-cross-active","active-icon"),this._buttonElement.appendChild(t),this._buttonElement.appendChild(this._hoverIcon),this._buttonElement.appendChild(this._activeIcon)}set gray(e){e?(this._hoverIcon.setIconType("mediumicon-gray-cross-hover"),this._activeIcon.setIconType("mediumicon-gray-cross-active")):(this._hoverIcon.setIconType("mediumicon-red-cross-hover"),this._activeIcon.setIconType("mediumicon-red-cross-active"))}setAccessibleName(e){ARIAUtils.setAccessibleName(this._buttonElement,e)}setTabbable(e){this._buttonElement.tabIndex=e?0:-1}})}();export function bindInput(e,t,n,o,r){return e.addEventListener("change",(function(){const{valid:o}=n(e.value);e.classList.toggle("error-input",!o),o&&t(e.value)}),!1),e.addEventListener("input",(function(){e.classList.toggle("error-input",!n(e.value))}),!1),e.addEventListener("keydown",(function(s){if(isEnterKey(s)){const{valid:o}=n(e.value);return o&&t(e.value),void s.preventDefault()}if(!o)return;const i=_modifiedFloatNumber(parseFloat(e.value),s,r),a=i?String(i):"",{valid:l}=n(a);if(!l||!i)return;e.value=a,t(e.value),s.preventDefault()}),!1),e.addEventListener("focus",e.select.bind(e),!1),function(t){if(t===e.value)return;const{valid:o}=n(t);e.classList.toggle("error-input",!o),e.value=t}}export function trimText(e,t,n,o){if(n<=10)return"";t.length>200&&(t=o(t,200));const r=measureTextWidth(e,t);if(r<=n)return t;let s=0,i=t.length,a=0,l=r;for(;s<i&&a!==l&&a!==n;){const r=Math.ceil(s+(i-s)*(n-a)/(l-a)),c=measureTextWidth(e,o(t,r));c<=n?(s=r,a=c):(i=r-1,l=c)}return"…"!==(t=o(t,s))?t:""}export function trimTextMiddle(e,t,n){return trimText(e,t,n,(e,t)=>e.trimMiddle(t))}export function trimTextEnd(e,t,n){return trimText(e,t,n,(e,t)=>e.trimEndWithMaxLength(t))}export function measureTextWidth(e,t){if(t.length>200)return e.measureText(t).width;let n=measureTextWidth._textWidthCache;n||(n=new Map,measureTextWidth._textWidthCache=n);const o=e.font;let r=n.get(o);r||(r=new Map,n.set(o,r));let s=r.get(t);return s||(s=e.measureText(t).width,r.set(t,s)),s}export class ThemeSupport{constructor(e){const t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default";this._themeName="systemPreferred"===e.get()?t:e.get(),this._themableProperties=new Set(["color","box-shadow","text-shadow","outline-color","background-image","background-color","border-left-color","border-right-color","border-top-color","border-bottom-color","-webkit-border-image","fill","stroke"]),this._cachedThemePatches=new Map,this._setting=e,this._customSheets=new Set,this._computedRoot=Common.Lazy.lazy(()=>window.getComputedStyle(document.documentElement))}getComputedValue(e){const t=this._computedRoot();if("symbol"==typeof t)throw new Error(`Computed value for property (${e}) could not be found on :root.`);return t.getPropertyValue(e)}hasTheme(){return"default"!==this._themeName}themeName(){return this._themeName}injectHighlightStyleSheets(e){this._injectingStyleSheet=!0,appendStyle(e,"ui/inspectorSyntaxHighlight.css"),"dark"===this._themeName&&appendStyle(e,"ui/inspectorSyntaxHighlightDark.css"),this._injectingStyleSheet=!1}injectCustomStyleSheets(e){for(const t of this._customSheets){const n=createElement("style");n.textContent=t,e.appendChild(n)}}isForcedColorsMode(){return window.matchMedia("(forced-colors: active)").matches}addCustomStylesheet(e){this._customSheets.add(e)}applyTheme(e){if(!this.hasTheme()||this.isForcedColorsMode())return;"dark"===this._themeName&&e.documentElement.classList.add("-theme-with-dark-background");const t=e.styleSheets,n=[];for(let e=0;e<t.length;++e)n.push(this._patchForTheme(t[e].href,t[e]));n.push("/*# sourceURL=inspector.css.theme */");const o=createElement("style");o.textContent=n.join("\n"),e.head.appendChild(o)}themeStyleSheet(e,t){if(!this.hasTheme()||this._injectingStyleSheet||this.isForcedColorsMode())return"";let n=this._cachedThemePatches.get(e);if(!n){const o=createElement("style");o.textContent=t,document.body.appendChild(o),n=this._patchForTheme(e,o.sheet),document.body.removeChild(o)}return n}_patchForTheme(e,t){const n=this._cachedThemePatches.get(e);if(n)return n;try{const n=t.cssRules,o=[];for(let e=0;e<n.length;++e){if(n[e]instanceof CSSImportRule){o.push(this._patchForTheme(n[e].styleSheet.href,n[e].styleSheet));continue}const t=[],r=n[e].style,s=n[e].selectorText;for(let e=0;r&&e<r.length;++e)this._patchProperty(s,r,r[e],t);t.length&&o.push(n[e].selectorText+"{"+t.join("")+"}")}const r=o.join("\n");return this._cachedThemePatches.set(e,r),r}catch(e){return this._setting.set("default"),""}}_patchProperty(e,t,n,o){if(!this._themableProperties.has(n))return;const r=t.getPropertyValue(n);if(!r||"none"===r||"inherit"===r||"initial"===r||"transparent"===r)return;if("background-image"===n&&-1===r.indexOf("gradient"))return;if(-1!==e.indexOf("-theme-"))return;let s=ThemeSupport.ColorUsage.Unknown;0!==n.indexOf("background")&&0!==n.indexOf("border")||(s|=ThemeSupport.ColorUsage.Background),-1===n.indexOf("background")&&(s|=ThemeSupport.ColorUsage.Foreground),o.push(n),o.push(":");const i=r.replace(Common.Color.Regex,"\0$1\0").split("\0");for(let e=0;e<i.length;++e)o.push(this.patchColorText(i[e],s));t.getPropertyPriority(n)&&o.push(" !important"),o.push(";")}patchColorText(e,t){const n=Common.Color.Color.parse(e);if(!n)return e;const o=this.patchColor(n,t);let r=o.asString(null);return r||(r=o.asString(o.hasAlpha()?Common.Color.Format.RGBA:Common.Color.Format.RGB)),r||e}patchColor(e,t){const n=e.hsla();this._patchHSLA(n,t);const o=[];return Common.Color.Color.hsl2rgb(n,o),new Common.Color.Color(o,e.format())}_patchHSLA(e,t){const n=e[0],o=e[1];let r=e[2];const s=e[3];switch(this._themeName){case"dark":{const e=t&ThemeSupport.ColorUsage.Background?.14:.58,n=t&ThemeSupport.ColorUsage.Foreground?.9:1;r=1-r,r<2*e?r=e+r/2:r>2*n-1&&(r=n-.5+r/2);break}}e[0]=Platform.NumberUtilities.clamp(n,0,1),e[1]=Platform.NumberUtilities.clamp(o,0,1),e[2]=Platform.NumberUtilities.clamp(r,0,1),e[3]=Platform.NumberUtilities.clamp(s,0,1)}}ThemeSupport.ColorUsage={Unknown:0,Foreground:1,Background:2};export function createDocumentationLink(e,t){return XLink.create("https://developers.google.com/web/tools/chrome-devtools/"+e,t)}export function createWebDevLink(e,t){return XLink.create("https://web.dev/"+e,t)}export function addReferrerToURL(e){return/(\?|&)utm_source=devtools/.test(e)?e:-1===e.indexOf("?")?e.replace(/^([^#]*)(#.*)?$/g,"$1?utm_source=devtools$2"):e.replace(/^([^#]*)(#.*)?$/g,"$1&utm_source=devtools$2")}export function addReferrerToURLIfNecessary(e){return/(\/\/developers.google.com\/|\/\/web.dev\/)/.test(e)?addReferrerToURL(e):e}export function loadImage(e){return new Promise(t=>{const n=new Image;n.addEventListener("load",()=>t(n)),n.addEventListener("error",()=>t(null)),n.src=e})}export function loadImageFromData(e){return e?loadImage("data:image/jpg;base64,"+e):Promise.resolve(null)}export function createFileSelectorElement(e){const t=createElement("input");return t.type="file",t.style.display="none",t.setAttribute("tabindex",-1),t.onchange=function(n){e(t.files[0])},t}export const MaxLengthForDisplayedURLs=150;export class MessageDialog{static async show(e,t){const n=new Dialog;n.setSizeBehavior(SizeBehavior.MeasureContent),n.setDimmed(!0);const o=createShadowRootWithCoreStyles(n.contentElement,"ui/confirmDialog.css").createChild("div","widget");await new Promise(r=>{const s=createTextButton(Common.UIString.UIString("OK"),r,"",!0);o.createChild("div","message").createChild("span").textContent=e,o.createChild("div","button").appendChild(s),n.setOutsideClickCallback(e=>{e.consume(),r()}),n.show(t),s.focus()}),n.hide()}}export class ConfirmDialog{static async show(e,t){const n=new Dialog;n.setSizeBehavior(SizeBehavior.MeasureContent),n.setDimmed(!0),ARIAUtils.setAccessibleName(n.contentElement,e);const o=createShadowRootWithCoreStyles(n.contentElement,"ui/confirmDialog.css").createChild("div","widget");o.createChild("div","message").createChild("span").textContent=e;const r=o.createChild("div","button"),s=await new Promise(e=>{const o=createTextButton(ls`OK`,()=>e(!0),"",!0);r.appendChild(o),r.appendChild(createTextButton(ls`Cancel`,()=>e(!1))),n.setOutsideClickCallback(t=>{t.consume(),e(!1)}),n.show(t),o.focus()});return n.hide(),s}}export function createInlineButton(e){const t=createElement("span"),n=createShadowRootWithCoreStyles(t,"ui/inlineButton.css");t.classList.add("inline-button");const o=new Toolbar("");return o.appendToolbarItem(e),n.appendChild(o.element),t}export class Renderer{render(e,t){}}Renderer.render=async function(e,t){if(!e)throw new Error("Can't render "+e);const n=await self.runtime.extension(Renderer,e).instance();return n?n.render(e,t||{}):null};export function formatTimestamp(e,t){const n=new Date(e),o=n.getFullYear()+"-"+s(n.getMonth()+1,2)+"-"+s(n.getDate(),2),r=s(n.getHours(),2)+":"+s(n.getMinutes(),2)+":"+s(n.getSeconds(),2)+"."+s(n.getMilliseconds(),3);return t?o+" "+r:r;function s(e,t){return String(e).padStart(t,"0")}}export let Options;