import*as Common from"../common/common.js";import*as Host from"../host/host.js";import*as PerfUI from"../perf_ui/perf_ui.js";import*as Platform from"../platform/platform.js";import*as TimelineModel from"../timeline_model/timeline_model.js";import*as UI from"../ui/ui.js";import{PerformanceModel}from"./PerformanceModel.js";import{FlameChartStyle,Selection}from"./TimelineFlameChartView.js";import{TimelineSelection}from"./TimelinePanel.js";import{TimelineUIUtils}from"./TimelineUIUtils.js";export class TimelineFlameChartNetworkDataProvider{constructor(){this._font="11px "+Host.Platform.fontFamily(),this.setModel(null),this._style={padding:4,height:17,collapsible:!0,color:self.UI.themeSupport.patchColorText("#222",UI.UIUtils.ThemeSupport.ColorUsage.Foreground),font:this._font,backgroundColor:self.UI.themeSupport.patchColorText("white",UI.UIUtils.ThemeSupport.ColorUsage.Background),nestingLevel:0,useFirstLineForOverview:!1,useDecoratorsForOverview:!0,shareHeaderLine:!1},this._group={startLevel:0,name:Common.UIString.UIString("Network"),expanded:!1,style:this._style},this._minimumBoundary=0,this._maximumBoundary=0,this._timeSpan=0}setModel(e){this._model=e&&e.timelineModel(),this._maxLevel=0,this._timelineData=null,this._requests=[]}isEmpty(){return this.timelineData(),!this._requests.length}maxStackDepth(){return this._maxLevel}timelineData(){return this._timelineData||(this._requests=[],this._timelineData=new PerfUI.FlameChart.TimelineData([],[],[],[]),this._model&&this._appendTimelineData()),this._timelineData}minimumBoundary(){return this._minimumBoundary}totalTime(){return this._timeSpan}setWindowTimes(e,t){this._startTime=e,this._endTime=t,this._updateTimelineData()}createSelection(e){if(-1===e)return null;const t=this._requests[e];return this._lastSelection=new Selection(TimelineSelection.fromNetworkRequest(t),e),this._lastSelection.timelineSelection}entryIndexForSelection(e){if(!e)return-1;if(this._lastSelection&&this._lastSelection.timelineSelection.object()===e.object())return this._lastSelection.entryIndex;if(e.type()!==TimelineSelection.Type.NetworkRequest)return-1;const t=e.object(),i=this._requests.indexOf(t);return-1!==i&&(this._lastSelection=new Selection(TimelineSelection.fromNetworkRequest(t),i)),i}entryColor(e){const t=this._requests[e],i=TimelineUIUtils.networkRequestCategory(t);return TimelineUIUtils.networkCategoryColor(i)}textColor(e){return FlameChartStyle.textColor}entryTitle(e){const t=this._requests[e],i=new Common.ParsedURL.ParsedURL(t.url||"");return i.isValid?`${i.displayName} (${i.host})`:t.url||null}entryFont(e){return this._font}decorateEntry(e,t,i,r,o,n,s,l,a){const m=this._requests[e];if(!m.timing)return!1;const h=m.beginTime(),u=e=>Math.floor(l+(e-h)*a),p=m.getStartTime(),c=m.endTime,{sendStartTime:d,headersEndTime:_}=m.getSendReceiveTiming(),f=Math.max(u(d),l),T=Math.max(u(_),f),y=Math.max(u(m.finishTime||c),T+2),S=u(p),g=Math.max(u(c),y);if(t.fillStyle="hsla(0, 100%, 100%, 0.8)",t.fillRect(f+.5,o+.5,T-f-.5,s-2),t.fillStyle=self.UI.themeSupport.patchColorText("white",UI.UIUtils.ThemeSupport.ColorUsage.Background),t.fillRect(r,o-.5,f-r,s),t.fillRect(y,o-.5,r+n-y,s),!m.cached()&&m.timing.pushStart){const i=u(1e3*m.timing.pushStart),r=m.timing.pushEnd?u(1e3*m.timing.pushEnd):S,n=Platform.NumberUtilities.clamp(r-i-2,0,4),l=1;if(t.save(),t.beginPath(),t.moveTo(i+n,o+s/2),t.lineTo(i,o+l),t.lineTo(r-n,o+l),t.lineTo(r,o+s/2),t.lineTo(r-n,o+s-l),t.lineTo(i,o+s-l),t.closePath(),m.timing.pushEnd)t.fillStyle=this.entryColor(e);else{const o=t.createLinearGradient(i,0,r,0);o.addColorStop(0,this.entryColor(e)),o.addColorStop(1,"white"),t.fillStyle=o}t.globalAlpha=.3,t.fill(),t.restore()}function U(e,i,r){t.moveTo(e,r-3),t.lineTo(e,r+3),t.moveTo(e,r),t.lineTo(i,r)}t.beginPath(),t.lineWidth=1,t.strokeStyle="#ccc";const x=Math.floor(o+s/2)+.5,C=g-.5;if(U(S+.5,f,x),U(C,y,x),t.stroke(),"string"==typeof m.priority){const e=this._colorForPriority(m.priority);e&&(t.fillStyle=e,t.fillRect(f+.5,o+.5,3.5,3.5))}const v=Math.max(f,0),w=y-v;if(w>=20&&(i=this.entryTitle(e)||"",m.fromServiceWorker&&(i="⚙ "+i),i)){const e=4,r=s-5,n=UI.UIUtils.trimTextEnd(t,i,w-2*e);t.fillStyle="#333",t.fillText(n,v+e,o+r)}return!0}forceDecoration(e){return!0}prepareHighlightedEntryInfo(e){const t=this._requests[e];if(!t.url)return null;const i=createElement("div"),r=UI.Utils.createShadowRootWithCoreStyles(i,"timeline/timelineFlamechartPopover.css").createChild("div","timeline-flamechart-popover"),o=t.getStartTime(),n=t.endTime-o;if(o&&isFinite(n)&&(r.createChild("span","timeline-info-network-time").textContent=Number.millisToString(n,!0)),"string"==typeof t.priority){const e=r.createChild("span");e.textContent=PerfUI.NetworkPriorities.uiLabelForNetworkPriority(t.priority),e.style.color=this._colorForPriority(t.priority)||"black"}return r.createChild("span").textContent=t.url.trimMiddle(80),i}_colorForPriority(e){if(!this._priorityToValue){const e=Protocol.Network.ResourcePriority;this._priorityToValue=new Map([[e.VeryLow,1],[e.Low,2],[e.Medium,3],[e.High,4],[e.VeryHigh,5]])}const t=this._priorityToValue.get(e);return t?`hsla(214, 80%, 50%, ${t/5})`:null}_appendTimelineData(){this._minimumBoundary=this._model.minimumRecordTime(),this._maximumBoundary=this._model.maximumRecordTime(),this._timeSpan=this._model.isEmpty()?1e3:this._maximumBoundary-this._minimumBoundary,this._model.networkRequests().forEach(this._appendEntry.bind(this)),this._updateTimelineData()}_updateTimelineData(){if(!this._timelineData)return;const e=[];let t=0;for(let i=0;i<this._requests.length;++i){const r=this._requests[i],o=r.beginTime();if(o<this._endTime&&r.endTime>this._startTime){for(;e.length&&e.peekLast()<=o;)e.pop();this._timelineData.entryLevels[i]=e.length,e.push(r.endTime),t=Math.max(t,e.length)}else this._timelineData.entryLevels[i]=-1}for(let e=0;e<this._requests.length;++e)-1===this._timelineData.entryLevels[e]&&(this._timelineData.entryLevels[e]=t);this._timelineData=new PerfUI.FlameChart.TimelineData(this._timelineData.entryLevels,this._timelineData.entryTotalTimes,this._timelineData.entryStartTimes,[this._group]),this._maxLevel=t}_appendEntry(e){this._requests.push(e),this._timelineData.entryStartTimes.push(e.beginTime()),this._timelineData.entryTotalTimes.push(e.endTime-e.beginTime()),this._timelineData.entryLevels.push(this._requests.length-1)}preferredHeight(){return this._style.height*(this._group.expanded?Platform.NumberUtilities.clamp(this._maxLevel+1,4,8.5):1)}isExpanded(){return this._group.expanded}formatValue(e,t){return Number.preciseMillisToString(e,t)}canJumpToEntry(e){return!1}navStartTimes(){return this._model?this._model.navStartTimes():new Map}}