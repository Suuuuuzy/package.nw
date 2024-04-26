import{Row,RowType}from"./ChangesView.js";export function ChangesHighlighter(e,t){const n=t.diffRows,i=t.baselineLines,o=t.currentLines,r=CodeMirror.getMode({},t.mimeType);function a(e,t,n,i){let o=t;for(;o<n&&o<i.length;){const t=new CodeMirror.StringStream(i[o]);for(t.eol()&&r.blankLine&&r.blankLine(e);!t.eol();)r.token(t,e),t.start=t.pos;o++}}return{startState:function(){return{rowNumber:0,diffTokenIndex:0,currentLineNumber:0,baselineLineNumber:0,currentSyntaxState:CodeMirror.startState(r),baselineSyntaxState:CodeMirror.startState(r),syntaxPosition:0,diffPosition:0,syntaxStyle:"",diffStyle:""}},token:function(e,t){const s=n[t.rowNumber];if(!s)return e.next(),"";!function(e,t,n){t>e.baselineLineNumber&&(a(e.baselineSyntaxState,e.baselineLineNumber,t,i),e.baselineLineNumber=t),n>e.currentLineNumber&&(a(e.currentSyntaxState,e.currentLineNumber,n,o),e.currentLineNumber=n)}(t,s.baselineLineNumber-1,s.currentLineNumber-1);let y="";0===e.pos&&(y+=" line-background-"+s.type+" line-"+s.type);const f=t.diffPosition>=t.syntaxPosition;return t.diffPosition<=t.syntaxPosition&&(t.diffPosition+=s.tokens[t.diffTokenIndex].text.length,t.diffStyle=s.tokens[t.diffTokenIndex].className,t.diffTokenIndex++),f&&(s.type===RowType.Deletion||s.type===RowType.Addition||s.type===RowType.Equal?(t.syntaxStyle=r.token(e,s.type===RowType.Deletion?t.baselineSyntaxState:t.currentSyntaxState),t.syntaxPosition=e.pos):(t.syntaxStyle="",t.syntaxPosition=1/0)),e.pos=Math.min(t.syntaxPosition,t.diffPosition),y+=" "+t.syntaxStyle,y+=" "+t.diffStyle,e.eol()&&(t.rowNumber++,s.type===RowType.Deletion?t.baselineLineNumber++:t.currentLineNumber++,t.diffPosition=0,t.syntaxPosition=0,t.diffTokenIndex=0),y},blankLine:function(e){const t=n[e.rowNumber];if(e.rowNumber++,e.syntaxPosition=0,e.diffPosition=0,e.diffTokenIndex=0,!t)return"";let i="";return r.blankLine&&(t.type===RowType.Equal||t.type===RowType.Addition?(i=r.blankLine(e.currentSyntaxState),e.currentLineNumber++):t.type===RowType.Deletion&&(i=r.blankLine(e.baselineSyntaxState),e.baselineLineNumber++)),i+" line-background-"+t.type+" line-"+t.type},copyState:function(e){const t=Object.assign({},e);return t.currentSyntaxState=CodeMirror.copyState(r,e.currentSyntaxState),t.baselineSyntaxState=CodeMirror.copyState(r,e.baselineSyntaxState),t}}}CodeMirror.defineMode("devtools-diff",ChangesHighlighter);export let DiffState;