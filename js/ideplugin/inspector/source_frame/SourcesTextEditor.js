import*as Common from"../common/common.js";import*as TextEditor from"../text_editor/text_editor.js";import*as TextUtils from"../text_utils/text_utils.js";import*as UI from"../ui/ui.js";export class SourcesTextEditor extends TextEditor.CodeMirrorTextEditor.CodeMirrorTextEditor{constructor(e,t){const i={lineNumbers:!0,lineWrapping:!1,bracketMatchingSetting:Common.Settings.Settings.instance().moduleSetting("textEditorBracketMatching"),padBottom:Common.Settings.Settings.instance().moduleSetting("allowScrollPastEof").get(),lineWiseCopyCut:!0};function o(e){this._isHandlingMouseDownEvent=e}t&&Object.assign(i,t),super(i),this.codeMirror().addKeyMap({Enter:"smartNewlineAndIndent",Esc:"sourcesDismiss"}),this._delegate=e,this.codeMirror().on("cursorActivity",this._cursorActivity.bind(this)),this.codeMirror().on("gutterClick",this._gutterClick.bind(this)),this.codeMirror().on("scroll",this._scroll.bind(this)),this.codeMirror().on("focus",this._focus.bind(this)),this.codeMirror().on("blur",this._blur.bind(this)),this.codeMirror().on("beforeSelectionChange",this._fireBeforeSelectionChanged.bind(this)),this.element.addEventListener("contextmenu",this._contextMenu.bind(this),!1),this._gutterMouseMove=e=>{this.element.classList.toggle("CodeMirror-gutter-hovered",e.clientX<this.codeMirror().getGutterElement().getBoundingClientRect().right)},this._gutterMouseOut=e=>{this.element.classList.toggle("CodeMirror-gutter-hovered",!1)},this.codeMirror().addKeyMap(_BlockIndentController),this._tokenHighlighter=new TokenHighlighter(this,this.codeMirror()),this._gutters=[lineNumbersGutterType],this.codeMirror().setOption("gutters",this._gutters.slice()),this.codeMirror().setOption("electricChars",!1),this.codeMirror().setOption("smartIndent",!1),this.element.addEventListener("mousedown",o.bind(this,!0),!0),this.element.addEventListener("mousedown",o.bind(this,!1),!1),Common.Settings.Settings.instance().moduleSetting("textEditorIndent").addChangeListener(this._onUpdateEditorIndentation,this),Common.Settings.Settings.instance().moduleSetting("textEditorAutoDetectIndent").addChangeListener(this._onUpdateEditorIndentation,this),Common.Settings.Settings.instance().moduleSetting("showWhitespacesInEditor").addChangeListener(this._updateWhitespace,this),Common.Settings.Settings.instance().moduleSetting("textEditorCodeFolding").addChangeListener(this._updateCodeFolding,this),Common.Settings.Settings.instance().moduleSetting("allowScrollPastEof").addChangeListener(this._updateScrollPastEof,this),this._updateCodeFolding(),this._autocompleteConfig={isWordChar:TextUtils.TextUtils.Utils.isWordChar},Common.Settings.Settings.instance().moduleSetting("textEditorAutocompletion").addChangeListener(this._updateAutocomplete,this),this._updateAutocomplete(),this._onUpdateEditorIndentation(),this._setupWhitespaceHighlight(),this._infoBarDiv=null}attachInfobar(e){this._infoBarDiv||(this._infoBarDiv=document.createElement("div"),this._infoBarDiv.classList.add("flex-none"),this.element.insertBefore(this._infoBarDiv,this.element.firstChild)),this._infoBarDiv.appendChild(e.element),e.setParentView(this),this.doResize()}static _guessIndentationLevel(e){const t=/^\t+/;let i=0;const o={};for(let n=0;n<e.length;++n){const r=e[n];if(0===r.length||!TextUtils.TextUtils.Utils.isSpaceChar(r[0]))continue;if(t.test(r)){++i;continue}let s=0;for(;s<r.length&&TextUtils.TextUtils.Utils.isSpaceChar(r[s]);)++s;s%2==0&&(o[s]=1+(o[s]||0))}const n=3*e.length/100;if(i&&i>n)return"\t";let r=1/0;for(const e in o){if(o[e]<n)continue;const t=parseInt(e,10);r>t&&(r=t)}return r===1/0?Common.Settings.Settings.instance().moduleSetting("textEditorIndent").get():" ".repeat(r)}_isSearchActive(){return!!this._tokenHighlighter.highlightedRegex()}scrollToLine(e){super.scrollToLine(e),this._scroll()}highlightSearchResults(e,t){this._selectionBeforeSearch||(this._selectionBeforeSearch=this.selection()),this.codeMirror().operation(function(){t&&(this.scrollLineIntoView(t.startLine),t.endColumn>TextEditor.CodeMirrorTextEditor.CodeMirrorTextEditor.maxHighlightLength?this.setSelection(t):this.setSelection(TextUtils.TextRange.TextRange.createFromLocation(t.startLine,t.startColumn))),this._tokenHighlighter.highlightSearchResults(e,t)}.bind(this))}cancelSearchResultsHighlight(){this.codeMirror().operation(this._tokenHighlighter.highlightSelectedTokens.bind(this._tokenHighlighter)),this._selectionBeforeSearch&&(this._reportJump(this._selectionBeforeSearch,this.selection()),delete this._selectionBeforeSearch)}removeHighlight(e){e.clear()}highlightRange(e,t){t="CodeMirror-persist-highlight "+t;const i=TextEditor.CodeMirrorUtils.toPos(e);return++i.end.ch,this.codeMirror().markText(i.start,i.end,{className:t,startStyle:t+"-start",endStyle:t+"-end"})}installGutter(e,t){-1===this._gutters.indexOf(e)&&(t?this._gutters.unshift(e):this._gutters.push(e),this.codeMirror().setOption("gutters",this._gutters.slice()),this.refresh())}uninstallGutter(e){const t=this._gutters.indexOf(e);-1!==t&&(this.codeMirror().clearGutter(e),this._gutters.splice(t,1),this.codeMirror().setOption("gutters",this._gutters.slice()),this.refresh())}setGutterDecoration(e,t,i){console.assert(-1!==this._gutters.indexOf(t),"Cannot decorate unexisting gutter."),this.codeMirror().setGutterMarker(e,t,i)}setExecutionLocation(e,t){if(this.clearPositionHighlight(),this._executionLine=this.codeMirror().getLineHandle(e),!this._executionLine)return;this.showExecutionLineBackground(),this.codeMirror().addLineClass(this._executionLine,"wrap","cm-execution-line-outline");let i,o=this.tokenAtTextPosition(e,t);if(o&&!o.type&&o.startColumn+1===o.endColumn){const t=this.codeMirror().getLine(e)[o.startColumn];"."!==t&&"("!==t||(o=this.tokenAtTextPosition(e,o.endColumn+1))}i=o&&o.type?o.endColumn:this.codeMirror().getLine(e).length,this._executionLineTailMarker=this.codeMirror().markText({line:e,ch:t},{line:e,ch:i},{className:"cm-execution-line-tail"})}showExecutionLineBackground(){this._executionLine&&this.codeMirror().addLineClass(this._executionLine,"wrap","cm-execution-line")}hideExecutionLineBackground(){this._executionLine&&this.codeMirror().removeLineClass(this._executionLine,"wrap","cm-execution-line")}clearExecutionLine(){this.clearPositionHighlight(),this._executionLine&&(this.hideExecutionLineBackground(),this.codeMirror().removeLineClass(this._executionLine,"wrap","cm-execution-line-outline")),delete this._executionLine,this._executionLineTailMarker&&this._executionLineTailMarker.clear(),delete this._executionLineTailMarker}toggleLineClass(e,t,i){if(this.hasLineClass(e,t)===i)return;const o=this.codeMirror().getLineHandle(e);o&&(i?(this.codeMirror().addLineClass(o,"gutter",t),this.codeMirror().addLineClass(o,"wrap",t)):(this.codeMirror().removeLineClass(o,"gutter",t),this.codeMirror().removeLineClass(o,"wrap",t)))}hasLineClass(e,t){const i=this.codeMirror().lineInfo(e);if(!i)return!1;const o=i.wrapClass;if(!o)return!1;return-1!==o.split(" ").indexOf(t)}_gutterClick(e,t,i,o){this.dispatchEventToListeners(Events.GutterClick,{gutterType:i,lineNumber:t,event:o})}_contextMenu(e){const t=new UI.ContextMenu.ContextMenu(e);e.consume(!0);const i=e.target.enclosingNodeOrSelfWithClass("CodeMirror-gutter-wrapper"),o=i?i.querySelector(".CodeMirror-linenumber"):null;let n;if(o)n=this._delegate.populateLineGutterContextMenu(t,parseInt(o.textContent,10)-1);else{const e=this.selection();n=this._delegate.populateTextAreaContextMenu(t,e.startLine,e.startColumn)}n.then(function(){t.appendApplicableItems(this),t.show()}.bind(this))}editRange(e,t,i){const o=super.editRange(e,t,i);return Common.Settings.Settings.instance().moduleSetting("textEditorAutoDetectIndent").get()&&this._onUpdateEditorIndentation(),o}_onUpdateEditorIndentation(){this._setEditorIndentation(TextEditor.CodeMirrorUtils.pullLines(this.codeMirror(),LinesToScanForIndentationGuessing))}_setEditorIndentation(e){const t={};let i=Common.Settings.Settings.instance().moduleSetting("textEditorIndent").get();Common.Settings.Settings.instance().moduleSetting("textEditorAutoDetectIndent").get()&&(i=SourcesTextEditor._guessIndentationLevel(e)),i===TextUtils.TextUtils.Utils.Indent.TabCharacter?(this.codeMirror().setOption("indentWithTabs",!0),this.codeMirror().setOption("indentUnit",4)):(this.codeMirror().setOption("indentWithTabs",!1),this.codeMirror().setOption("indentUnit",i.length),t.Tab=function(e){if(e.somethingSelected())return CodeMirror.Pass;const t=e.getCursor("head");e.replaceRange(i.substring(t.ch%i.length),e.getCursor())}),this.codeMirror().setOption("extraKeys",t),this._indentationLevel=i}indent(){return this._indentationLevel}_onAutoAppendedSpaces(){this._autoAppendedSpaces=this._autoAppendedSpaces||[];for(let e=0;e<this._autoAppendedSpaces.length;++e){const t=this._autoAppendedSpaces[e].resolve();if(!t)continue;const i=this.line(t.lineNumber);i.length===t.columnNumber&&TextUtils.TextUtils.Utils.lineIndent(i).length===i.length&&this.codeMirror().replaceRange("",new CodeMirror.Pos(t.lineNumber,0),new CodeMirror.Pos(t.lineNumber,t.columnNumber))}this._autoAppendedSpaces=[];const e=this.selections();for(let t=0;t<e.length;++t){const i=e[t];this._autoAppendedSpaces.push(this.textEditorPositionHandle(i.startLine,i.startColumn))}}_cursorActivity(){this._isSearchActive()||this.codeMirror().operation(this._tokenHighlighter.highlightSelectedTokens.bind(this._tokenHighlighter));const e=this.codeMirror().getCursor("anchor"),t=this.codeMirror().getCursor("head");this.dispatchEventToListeners(Events.SelectionChanged,TextEditor.CodeMirrorUtils.toRange(e,t))}_reportJump(e,t){e&&t&&e.equal(t)||this.dispatchEventToListeners(Events.JumpHappened,{from:e,to:t})}_scroll(){const e=this.codeMirror().lineAtHeight(this.codeMirror().getScrollInfo().top,"local");this.dispatchEventToListeners(Events.ScrollChanged,e)}_focus(){this.dispatchEventToListeners(Events.EditorFocused)}_blur(){this.dispatchEventToListeners(Events.EditorBlurred)}_fireBeforeSelectionChanged(e,t){if(!this._isHandlingMouseDownEvent)return;if(!t.ranges.length)return;const i=t.ranges[0];this._reportJump(this.selection(),TextEditor.CodeMirrorUtils.toRange(i.anchor,i.head))}dispose(){super.dispose(),Common.Settings.Settings.instance().moduleSetting("textEditorIndent").removeChangeListener(this._onUpdateEditorIndentation,this),Common.Settings.Settings.instance().moduleSetting("textEditorAutoDetectIndent").removeChangeListener(this._onUpdateEditorIndentation,this),Common.Settings.Settings.instance().moduleSetting("showWhitespacesInEditor").removeChangeListener(this._updateWhitespace,this),Common.Settings.Settings.instance().moduleSetting("textEditorCodeFolding").removeChangeListener(this._updateCodeFolding,this),Common.Settings.Settings.instance().moduleSetting("allowScrollPastEof").removeChangeListener(this._updateScrollPastEof,this)}setText(e){this._setEditorIndentation(e.split("\n").slice(0,LinesToScanForIndentationGuessing)),super.setText(e)}_updateWhitespace(){this.setMimeType(this.mimeType())}_updateCodeFolding(){Common.Settings.Settings.instance().moduleSetting("textEditorCodeFolding").get()?(this.installGutter("CodeMirror-foldgutter",!1),this.element.addEventListener("mousemove",this._gutterMouseMove),this.element.addEventListener("mouseout",this._gutterMouseOut),this.codeMirror().setOption("foldGutter",!0),this.codeMirror().setOption("foldOptions",{minFoldSize:1})):(this.codeMirror().execCommand("unfoldAll"),this.element.removeEventListener("mousemove",this._gutterMouseMove),this.element.removeEventListener("mouseout",this._gutterMouseOut),this.uninstallGutter("CodeMirror-foldgutter"),this.codeMirror().setOption("foldGutter",!1))}_updateScrollPastEof(){this.toggleScrollPastEof(Common.Settings.Settings.instance().moduleSetting("allowScrollPastEof").get())}rewriteMimeType(e){this._setupWhitespaceHighlight();const t=Common.Settings.Settings.instance().moduleSetting("showWhitespacesInEditor").get();return this.element.classList.toggle("show-whitespaces","all"===t),"all"===t?this._allWhitespaceOverlayMode(e):"trailing"===t?this._trailingWhitespaceOverlayMode(e):e}_allWhitespaceOverlayMode(e){let t=CodeMirror.mimeModes[e]?CodeMirror.mimeModes[e].name||CodeMirror.mimeModes[e]:CodeMirror.mimeModes["text/plain"];if(t+="+all-whitespaces",CodeMirror.modes[t])return t;return CodeMirror.defineMode(t,(function(t,i){const o={token:function(e){if(" "===e.peek()){let t=0;for(;t<MaximumNumberOfWhitespacesPerSingleSpan&&" "===e.peek();)++t,e.next();return"whitespace whitespace-"+t}for(;!e.eol()&&" "!==e.peek();)e.next();return null}};return CodeMirror.overlayMode(CodeMirror.getMode(t,e),o,!1)})),t}_trailingWhitespaceOverlayMode(e){let t=CodeMirror.mimeModes[e]?CodeMirror.mimeModes[e].name||CodeMirror.mimeModes[e]:CodeMirror.mimeModes["text/plain"];if(t+="+trailing-whitespaces",CodeMirror.modes[t])return t;return CodeMirror.defineMode(t,(function(t,i){const o={token:function(e){if(e.match(/^\s+$/,!0))return"trailing-whitespace";do{e.next()}while(!e.eol()&&" "!==e.peek());return null}};return CodeMirror.overlayMode(CodeMirror.getMode(t,e),o,!1)})),t}_setupWhitespaceHighlight(){const e=this.element.ownerDocument;if(e._codeMirrorWhitespaceStyleInjected||!Common.Settings.Settings.instance().moduleSetting("showWhitespacesInEditor").get())return;e._codeMirrorWhitespaceStyleInjected=!0;let t="",i="";for(let e=1;e<=MaximumNumberOfWhitespacesPerSingleSpan;++e){t+="·";i+=".show-whitespaces .CodeMirror .cm-whitespace-"+e+"::before { content: '"+t+"';}\n"}const o=e.createElement("style");o.textContent=i,e.head.appendChild(o)}configureAutocomplete(e){this._autocompleteConfig=e,this._updateAutocomplete()}_updateAutocomplete(){super.configureAutocomplete(Common.Settings.Settings.instance().moduleSetting("textEditorAutocompletion").get()?this._autocompleteConfig:null)}}export const Events={GutterClick:Symbol("GutterClick"),SelectionChanged:Symbol("SelectionChanged"),ScrollChanged:Symbol("ScrollChanged"),EditorFocused:Symbol("EditorFocused"),EditorBlurred:Symbol("EditorBlurred"),JumpHappened:Symbol("JumpHappened")};export class SourcesTextEditorDelegate{populateLineGutterContextMenu(e,t){}populateTextAreaContextMenu(e,t,i){}}CodeMirror.commands.smartNewlineAndIndent=function(e){e.operation(function(e){const t=e.listSelections(),i=[];for(let o=0;o<t.length;++o){const n=t[o],r=CodeMirror.cmpPos(n.head,n.anchor)<0?n.head:n.anchor,s=e.getLine(r.line),h=TextUtils.TextUtils.Utils.lineIndent(s);i.push("\n"+h.substring(0,Math.min(r.ch,h.length)))}e.replaceSelections(i),e._codeMirrorTextEditor._onAutoAppendedSpaces()}.bind(null,e))},CodeMirror.commands.sourcesDismiss=function(e){return 1===e.listSelections().length&&e._codeMirrorTextEditor._isSearchActive()?CodeMirror.Pass:CodeMirror.commands.dismiss(e)};export const _BlockIndentController={name:"blockIndentKeymap",Enter:function(e){let t=e.listSelections();const i=[];let o=!1;for(let n=0;n<t.length;++n){const r=t[n],s=CodeMirror.cmpPos(r.head,r.anchor)<0?r.head:r.anchor,h=e.getLine(s.line),l=TextUtils.TextUtils.Utils.lineIndent(h);let c="\n"+l+e._codeMirrorTextEditor.indent(),d=!1;if(0===r.head.ch)return CodeMirror.Pass;if("{}"===h.substr(r.head.ch-1,2))c+="\n"+l,d=!0;else if("{"!==h.substr(r.head.ch-1,1))return CodeMirror.Pass;if(n>0&&o!==d)return CodeMirror.Pass;i.push(c),o=d}if(e.replaceSelections(i),!o)return void e._codeMirrorTextEditor._onAutoAppendedSpaces();t=e.listSelections();const n=[];for(let i=0;i<t.length;++i){const o=t[i],r=e.getLine(o.head.line-1),s=new CodeMirror.Pos(o.head.line-1,r.length);n.push({head:s,anchor:s})}e.setSelections(n),e._codeMirrorTextEditor._onAutoAppendedSpaces()},"'}'":function(e){if(e.somethingSelected())return CodeMirror.Pass;let t=e.listSelections(),i=[];for(let o=0;o<t.length;++o){const n=t[o],r=e.getLine(n.head.line);if(r!==TextUtils.TextUtils.Utils.lineIndent(r))return CodeMirror.Pass;i.push("}")}e.replaceSelections(i),t=e.listSelections(),i=[];const o=[];for(let n=0;n<t.length;++n){const r=t[n],s=e.findMatchingBracket(r.head);if(!s||!s.match)return;o.push({head:r.head,anchor:new CodeMirror.Pos(r.head.line,0)});const h=e.getLine(s.to.line),l=TextUtils.TextUtils.Utils.lineIndent(h);i.push(l+"}")}e.setSelections(o),e.replaceSelections(i)}};export class TokenHighlighter{constructor(e,t){this._textEditor=e,this._codeMirror=t}highlightSearchResults(e,t){const i=this._highlightRegex;this._highlightRegex=e,this._highlightRange=t,this._searchResultMarker&&(this._searchResultMarker.clear(),delete this._searchResultMarker),this._highlightDescriptor&&this._highlightDescriptor.selectionStart&&this._codeMirror.removeLineClass(this._highlightDescriptor.selectionStart.line,"wrap","cm-line-with-selection");const o=this._highlightRange?new CodeMirror.Pos(this._highlightRange.startLine,this._highlightRange.startColumn):null;if(o&&this._codeMirror.addLineClass(o.line,"wrap","cm-line-with-selection"),i&&this._highlightRegex.toString()===i.toString()?this._highlightDescriptor&&(this._highlightDescriptor.selectionStart=o):(this._removeHighlight(),this._setHighlighter(this._searchHighlighter.bind(this,this._highlightRegex),o)),this._highlightRange){const e=TextEditor.CodeMirrorUtils.toPos(this._highlightRange);this._searchResultMarker=this._codeMirror.markText(e.start,e.end,{className:"cm-column-with-selection"})}}highlightedRegex(){return this._highlightRegex}highlightSelectedTokens(){delete this._highlightRegex,delete this._highlightRange,this._highlightDescriptor&&this._highlightDescriptor.selectionStart&&this._codeMirror.removeLineClass(this._highlightDescriptor.selectionStart.line,"wrap","cm-line-with-selection"),this._removeHighlight();const e=this._codeMirror.getCursor("start"),t=this._codeMirror.getCursor("end");if(e.line!==t.line)return;if(e.ch===t.ch)return;const i=this._codeMirror.getSelections();if(i.length>1)return;const o=i[0];this._isWord(o,e.line,e.ch,t.ch)&&(e&&this._codeMirror.addLineClass(e.line,"wrap","cm-line-with-selection"),this._setHighlighter(this._tokenHighlighter.bind(this,o,e),e))}_isWord(e,t,i,o){const n=this._codeMirror.getLine(t),r=0===i||!TextUtils.TextUtils.Utils.isWordChar(n.charAt(i-1)),s=o===n.length||!TextUtils.TextUtils.Utils.isWordChar(n.charAt(o));return r&&s&&TextUtils.TextUtils.Utils.isWord(e)}_removeHighlight(){this._highlightDescriptor&&(this._codeMirror.removeOverlay(this._highlightDescriptor.overlay),delete this._highlightDescriptor)}_searchHighlighter(e,t){if(0===t.column()&&delete this._searchMatchLength,this._searchMatchLength){if(this._searchMatchLength>2){for(let e=0;e<this._searchMatchLength-2;++e)t.next();return this._searchMatchLength=1,"search-highlight"}return t.next(),delete this._searchMatchLength,"search-highlight search-highlight-end"}const i=t.match(e,!1);if(i){t.next();const e=i[0].length;return 1===e?"search-highlight search-highlight-full":(this._searchMatchLength=e,"search-highlight search-highlight-start")}for(;!t.match(e,!1)&&t.next(););}_tokenHighlighter(e,t,i){const o=e.charAt(0);if(i.match(e)&&(i.eol()||!TextUtils.TextUtils.Utils.isWordChar(i.peek())))return i.column()===t.ch?"token-highlight column-with-selection":"token-highlight";let n;do{n=i.next()}while(n&&(TextUtils.TextUtils.Utils.isWordChar(n)||i.peek()!==o))}_setHighlighter(e,t){const i={token:e};this._codeMirror.addOverlay(i),this._highlightDescriptor={overlay:i,selectionStart:t}}}const LinesToScanForIndentationGuessing=1e3,MaximumNumberOfWhitespacesPerSingleSpan=16;export const lineNumbersGutterType="CodeMirror-linenumbers";export let GutterClickEventData;