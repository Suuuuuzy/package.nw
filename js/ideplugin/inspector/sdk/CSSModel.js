import*as Common from"../common/common.js";import*as HostModule from"../host/host.js";import*as Platform from"../platform/platform.js";import*as ProtocolClient from"../protocol_client/protocol_client.js";import*as Root from"../root/root.js";import{CSSFontFace}from"./CSSFontFace.js";import{CSSMatchedStyles}from"./CSSMatchedStyles.js";import{CSSMedia}from"./CSSMedia.js";import{CSSStyleRule}from"./CSSRule.js";import{CSSStyleDeclaration,Type}from"./CSSStyleDeclaration.js";import{CSSStyleSheetHeader}from"./CSSStyleSheetHeader.js";import{DOMModel,DOMNode}from"./DOMModel.js";import{Events as ResourceTreeModelEvents,ResourceTreeModel}from"./ResourceTreeModel.js";import{Capability,SDKModel,Target}from"./SDKModel.js";import{SourceMapManager}from"./SourceMapManager.js";export class CSSModel extends SDKModel{constructor(e){super(e),this._domModel=e.model(DOMModel),this._sourceMapManager=new SourceMapManager(e),this._agent=e.cssAgent(),this._styleLoader=new ComputedStyleLoader(this),this._resourceTreeModel=e.model(ResourceTreeModel),this._resourceTreeModel&&this._resourceTreeModel.addEventListener(ResourceTreeModelEvents.MainFrameNavigated,this._resetStyleSheets,this),e.registerCSSDispatcher(new CSSDispatcher(this)),e.suspended()||this._enable(),this._styleSheetIdToHeader=new Map,this._styleSheetIdsForURL=new Map,this._originalStyleSheetText=new Map,this._isRuleUsageTrackingEnabled=!1,this._fontFaces=new Map,this._cssPropertyTracker=null,this._isCSSPropertyTrackingEnabled=!1,this._isTrackingRequestPending=!1,this._trackedCSSProperties=new Map,this._stylePollingThrottler=new Common.Throttler.Throttler(StylePollingInterval),this._sourceMapManager.setEnabled(Common.Settings.Settings.instance().moduleSetting("cssSourceMapsEnabled").get()),Common.Settings.Settings.instance().moduleSetting("cssSourceMapsEnabled").addChangeListener(e=>this._sourceMapManager.setEnabled(e.data))}headersForSourceURL(e){const t=[];for(const s of this.styleSheetIdsForURL(e)){const e=this.styleSheetHeaderForId(s);e&&t.push(e)}return t}createRawLocationsByURL(e,t,s){const r=this.headersForSourceURL(e);r.sort((function(e,t){return e.startLine-t.startLine||e.startColumn-t.startColumn||e.id.localeCompare(t.id)}));const o=r.upperBound(void 0,(e,r)=>t-r.startLine||s-r.startColumn);if(!o)return[];const a=[],n=r[o-1];for(let e=o-1;e>=0&&r[e].startLine===n.startLine&&r[e].startColumn===n.startColumn;--e)r[e].containsLocation(t,s)&&a.push(new CSSLocation(r[e],t,s));return a}sourceMapManager(){return this._sourceMapManager}static trimSourceURL(e){let t=e.lastIndexOf("/*# sourceURL=");if(-1===t&&(t=e.lastIndexOf("/*@ sourceURL="),-1===t))return e;const s=e.lastIndexOf("\n",t);if(-1===s)return e;const r=e.substr(s+1).split("\n",1)[0];return-1===r.search(/[\040\t]*\/\*[#@] sourceURL=[\040\t]*([^\s]*)[\040\t]*\*\/[\040\t]*$/)?e:e.substr(0,s)+e.substr(s+r.length+1)}domModel(){return this._domModel}async setStyleText(e,t,s,r){try{await this._ensureOriginalStyleSheetText(e);const o=await this._agent.setStyleTexts([{styleSheetId:e,range:t.serializeToObject(),text:s}]);if(!o||1!==o.length)return!1;this._domModel.markUndoableState(!r);const a=new Edit(e,t,s,o[0]);return this._fireStyleSheetChanged(e,a),!0}catch(e){return!1}}async setSelectorText(e,t,s){HostModule.userMetrics.actionTaken(Host.UserMetrics.Action.StyleRuleEdited);try{await this._ensureOriginalStyleSheetText(e);const r=await this._agent.setRuleSelector(e,t,s);if(!r)return!1;this._domModel.markUndoableState();const o=new Edit(e,t,s,r);return this._fireStyleSheetChanged(e,o),!0}catch(e){return!1}}async setKeyframeKey(e,t,s){HostModule.userMetrics.actionTaken(Host.UserMetrics.Action.StyleRuleEdited);try{await this._ensureOriginalStyleSheetText(e);const r=await this._agent.setKeyframeKey(e,t,s);if(!r)return!1;this._domModel.markUndoableState();const o=new Edit(e,t,s,r);return this._fireStyleSheetChanged(e,o),!0}catch(e){return!1}}startCoverage(){return this._isRuleUsageTrackingEnabled=!0,this._agent.startRuleUsageTracking()}async takeCoverageDelta(){const e=await this._agent.invoke_takeCoverageDelta({});return{timestamp:e&&e.timestamp||0,coverage:e&&e.coverage||[]}}setLocalFontsEnabled(e){return this._agent.invoke_setLocalFontsEnabled({enabled:e})}stopCoverage(){return this._isRuleUsageTrackingEnabled=!1,this._agent.stopRuleUsageTracking()}async mediaQueriesPromise(){const e=await this._agent.getMediaQueries();return e?CSSMedia.parseMediaArrayPayload(this,e):[]}isEnabled(){return this._isEnabled}async _enable(){await this._agent.enable(),this._isEnabled=!0,this._isRuleUsageTrackingEnabled&&await this.startCoverage(),this.dispatchEventToListeners(Events.ModelWasEnabled)}async matchedStylesPromise(e){const t=await this._agent.invoke_getMatchedStylesForNode({nodeId:e});if(t[ProtocolClient.InspectorBackend.ProtocolError])return null;const s=this._domModel.nodeForId(e);return s?new CSSMatchedStyles(this,s,t.inlineStyle||null,t.attributesStyle||null,t.matchedCSSRules||[],t.pseudoElements||[],t.inherited||[],t.cssKeyframesRules||[]):null}classNamesPromise(e){return this._agent.collectClassNames(e).then(e=>e||[])}computedStylePromise(e){return this._styleLoader.computedStylePromise(e)}async backgroundColorsPromise(e){const t=this._agent.invoke_getBackgroundColors({nodeId:e});return t[ProtocolClient.InspectorBackend.ProtocolError]?null:t}platformFontsPromise(e){return this._agent.getPlatformFontsForNode(e)}allStyleSheets(){const e=[...this._styleSheetIdToHeader.values()];return e.sort((function(e,t){return e.sourceURL<t.sourceURL?-1:e.sourceURL>t.sourceURL?1:e.startLine-t.startLine||e.startColumn-t.startColumn})),e}async inlineStylesPromise(e){const t=await this._agent.invoke_getInlineStylesForNode({nodeId:e});if(t[ProtocolClient.InspectorBackend.ProtocolError]||!t.inlineStyle)return null;const s=new CSSStyleDeclaration(this,null,t.inlineStyle,Type.Inline),r=t.attributesStyle?new CSSStyleDeclaration(this,null,t.attributesStyle,Type.Attributes):null;return new InlineStyleResult(s,r)}forcePseudoState(e,t,s){const r=e.marker(PseudoStateMarker)||[];if(s){if(r.indexOf(t)>=0)return!1;r.push(t),e.setMarker(PseudoStateMarker,r)}else{if(r.indexOf(t)<0)return!1;Platform.ArrayUtilities.removeElement(r,t),r.length?e.setMarker(PseudoStateMarker,r):e.setMarker(PseudoStateMarker,null)}return this._agent.forcePseudoState(e.id,r),this.dispatchEventToListeners(Events.PseudoStateForced,{node:e,pseudoClass:t,enable:s}),!0}pseudoState(e){return e.marker(PseudoStateMarker)||[]}async setMediaText(e,t,s){HostModule.userMetrics.actionTaken(Host.UserMetrics.Action.StyleRuleEdited);try{await this._ensureOriginalStyleSheetText(e);const r=await this._agent.setMediaText(e,t,s);if(!r)return!1;this._domModel.markUndoableState();const o=new Edit(e,t,s,r);return this._fireStyleSheetChanged(e,o),!0}catch(e){return!1}}async addRule(e,t,s){try{await this._ensureOriginalStyleSheetText(e);const r=await this._agent.addRule(e,t,s);if(!r)return null;this._domModel.markUndoableState();const o=new Edit(e,s,t,r);return this._fireStyleSheetChanged(e,o),new CSSStyleRule(this,r)}catch(e){return null}}async requestViaInspectorStylesheet(e){const t=e.frameId()||(this._resourceTreeModel?this._resourceTreeModel.mainFrame.id:""),s=[...this._styleSheetIdToHeader.values()].find(e=>e.frameId===t&&e.isViaInspector());if(s)return s;try{const e=await this._agent.createStyleSheet(t);return e&&this._styleSheetIdToHeader.get(e)||null}catch(e){return null}}mediaQueryResultChanged(){this.dispatchEventToListeners(Events.MediaQueryResultChanged)}fontsUpdated(e){e&&this._fontFaces.set(e.src,new CSSFontFace(e)),this.dispatchEventToListeners(Events.FontsUpdated)}fontFaces(){return[...this._fontFaces.values()]}styleSheetHeaderForId(e){return this._styleSheetIdToHeader.get(e)||null}styleSheetHeaders(){return[...this._styleSheetIdToHeader.values()]}_fireStyleSheetChanged(e,t){this.dispatchEventToListeners(Events.StyleSheetChanged,{styleSheetId:e,edit:t})}_ensureOriginalStyleSheetText(e){const t=this.styleSheetHeaderForId(e);if(!t)return Promise.resolve(null);let s=this._originalStyleSheetText.get(t);return s||(s=this.getStyleSheetText(t.id),this._originalStyleSheetText.set(t,s),this._originalContentRequestedForTest(t)),s}_originalContentRequestedForTest(e){}originalStyleSheetText(e){return this._ensureOriginalStyleSheetText(e.id)}getAllStyleSheetHeaders(){return this._styleSheetIdToHeader.values()}_styleSheetAdded(e){console.assert(!this._styleSheetIdToHeader.get(e.styleSheetId));const t=new CSSStyleSheetHeader(this,e);this._styleSheetIdToHeader.set(e.styleSheetId,t);const s=t.resourceURL();this._styleSheetIdsForURL.get(s)||this._styleSheetIdsForURL.set(s,new Map);const r=this._styleSheetIdsForURL.get(s);let o=r.get(t.frameId);o||(o=new Set,r.set(t.frameId,o)),o.add(t.id),this._sourceMapManager.attachSourceMap(t,t.sourceURL,t.sourceMapURL),this.dispatchEventToListeners(Events.StyleSheetAdded,t)}_styleSheetRemoved(e){const t=this._styleSheetIdToHeader.get(e);if(console.assert(t),!t)return;this._styleSheetIdToHeader.delete(e);const s=t.resourceURL(),r=this._styleSheetIdsForURL.get(s);console.assert(r,"No frameId to styleSheetId map is available for given style sheet URL."),r.get(t.frameId).delete(e),r.get(t.frameId).size||(r.delete(t.frameId),r.size||this._styleSheetIdsForURL.delete(s)),this._originalStyleSheetText.delete(t),this._sourceMapManager.detachSourceMap(t),this.dispatchEventToListeners(Events.StyleSheetRemoved,t)}styleSheetIdsForURL(e){const t=this._styleSheetIdsForURL.get(e);if(!t)return[];const s=[];for(const e of t.values())s.push(...e);return s}async setStyleSheetText(e,t,s){const r=this._styleSheetIdToHeader.get(e);console.assert(r),t=CSSModel.trimSourceURL(t),r.hasSourceURL&&(t+="\n/*# sourceURL="+r.sourceURL+" */"),await this._ensureOriginalStyleSheetText(e);const o=(await this._agent.invoke_setStyleSheetText({styleSheetId:r.id,text:t})).sourceMapURL;return this._sourceMapManager.detachSourceMap(r),r.setSourceMapURL(o),this._sourceMapManager.attachSourceMap(r,r.sourceURL,r.sourceMapURL),null===o?"Error in CSS.setStyleSheetText":(this._domModel.markUndoableState(!s),this._fireStyleSheetChanged(e),null)}async getStyleSheetText(e){try{const t=await this._agent.getStyleSheetText(e);return t&&CSSModel.trimSourceURL(t)}catch(e){return null}}_resetStyleSheets(){const e=[...this._styleSheetIdToHeader.values()];this._styleSheetIdsForURL.clear(),this._styleSheetIdToHeader.clear();for(const t of e)this._sourceMapManager.detachSourceMap(t),this.dispatchEventToListeners(Events.StyleSheetRemoved,t)}_resetFontFaces(){this._fontFaces.clear()}async suspendModel(){this._isEnabled=!1,await this._agent.disable(),this._resetStyleSheets(),this._resetFontFaces()}async resumeModel(){return this._enable()}setEffectivePropertyValueForNode(e,t,s){this._agent.setEffectivePropertyValueForNode(e,t,s)}cachedMatchedCascadeForNode(e){return this._cachedMatchedCascadeNode!==e&&this.discardCachedMatchedCascade(),this._cachedMatchedCascadeNode=e,this._cachedMatchedCascadePromise||(this._cachedMatchedCascadePromise=this.matchedStylesPromise(e.id)),this._cachedMatchedCascadePromise}discardCachedMatchedCascade(){delete this._cachedMatchedCascadeNode,delete this._cachedMatchedCascadePromise}createCSSPropertyTracker(e){return new CSSPropertyTracker(this,e)}enableCSSPropertyTracker(e){const t=e.getTrackedProperties();0!==t.length&&(this._agent.invoke_trackComputedStyleUpdates({propertiesToTrack:t}),this._isCSSPropertyTrackingEnabled=!0,this._cssPropertyTracker=e,this._pollComputedStyleUpdates())}disableCSSPropertyTracker(){this._isCSSPropertyTrackingEnabled=!1,this._cssPropertyTracker=null,this._agent.invoke_trackComputedStyleUpdates({propertiesToTrack:[]})}async _pollComputedStyleUpdates(){if(!this._isTrackingRequestPending){if(this._isCSSPropertyTrackingEnabled){this._isTrackingRequestPending=!0;const e=await this._agent.invoke_takeComputedStyleUpdates();if(this._isTrackingRequestPending=!1,e.getError()||!e.nodeIds||!this._isCSSPropertyTrackingEnabled)return;this._cssPropertyTracker.dispatchEventToListeners(CSSPropertyTrackerEvents.TrackedCSSPropertiesUpdated,{domNodes:e.nodeIds.map(e=>this._domModel.nodeForId(e))})}this._isCSSPropertyTrackingEnabled&&this._stylePollingThrottler.schedule(this._pollComputedStyleUpdates.bind(this))}}dispose(){Root.Runtime.experiments.isEnabled("cssGridFeatures")&&this.disableCSSPropertyTracker(),super.dispose(),this._sourceMapManager.dispose()}}export const Events={FontsUpdated:Symbol("FontsUpdated"),MediaQueryResultChanged:Symbol("MediaQueryResultChanged"),ModelWasEnabled:Symbol("ModelWasEnabled"),PseudoStateForced:Symbol("PseudoStateForced"),StyleSheetAdded:Symbol("StyleSheetAdded"),StyleSheetChanged:Symbol("StyleSheetChanged"),StyleSheetRemoved:Symbol("StyleSheetRemoved")};const PseudoStateMarker="pseudo-state-marker";export class Edit{constructor(e,t,s,r){this.styleSheetId=e,this.oldRange=t,this.newRange=TextUtils.TextRange.fromEdit(t,s),this.newText=s,this.payload=r}}export class CSSLocation{constructor(e,t,s){this._cssModel=e.cssModel(),this.styleSheetId=e.id,this.url=e.resourceURL(),this.lineNumber=t,this.columnNumber=s||0}cssModel(){return this._cssModel}header(){return this._cssModel.styleSheetHeaderForId(this.styleSheetId)}}class CSSDispatcher{constructor(e){this._cssModel=e}mediaQueryResultChanged(){this._cssModel.mediaQueryResultChanged()}fontsUpdated(e){this._cssModel.fontsUpdated(e)}styleSheetChanged(e){this._cssModel._fireStyleSheetChanged(e)}styleSheetAdded(e){this._cssModel._styleSheetAdded(e)}styleSheetRemoved(e){this._cssModel._styleSheetRemoved(e)}}class ComputedStyleLoader{constructor(e){this._cssModel=e,this._nodeIdToPromise=new Map}computedStylePromise(e){let t=this._nodeIdToPromise.get(e);return t||(t=this._cssModel._agent.getComputedStyleForNode(e).then(function(t){if(this._nodeIdToPromise.delete(e),!t||!t.length)return null;const s=new Map;for(const e of t)s.set(e.name,e.value);return s}.bind(this)),this._nodeIdToPromise.set(e,t),t)}}export class InlineStyleResult{constructor(e,t){this.inlineStyle=e,this.attributesStyle=t}}export class CSSPropertyTracker extends Common.ObjectWrapper.ObjectWrapper{constructor(e,t){super(),this._cssModel=e,this._properties=t}start(){this._cssModel.enableCSSPropertyTracker(this)}stop(){this._cssModel.disableCSSPropertyTracker()}getTrackedProperties(){return this._properties}}const StylePollingInterval=1e3;export const CSSPropertyTrackerEvents={TrackedCSSPropertiesUpdated:Symbol("TrackedCSSPropertiesUpdated")};SDKModel.register(CSSModel,Capability.DOM,!0);export let ContrastInfo;