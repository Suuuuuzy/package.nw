import{CodeMirrorTextEditor}from"./CodeMirrorTextEditor.js";if(wxMain.isFeatureEnabled("disableGetTokenForLargeFile")){const o=CodeMirrorTextEditor.prototype.tokenAtTextPosition;CodeMirrorTextEditor.prototype.tokenAtTextPosition=function(t,r){const e=this._codeMirror.lineCount();if(e<50)for(let o=0;o<e;o++){if(this._codeMirror.getLine(o).length>5e5)return null}return o.call(this,t,r)}}