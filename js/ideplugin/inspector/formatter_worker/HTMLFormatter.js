import*as Platform from"../platform/platform.js";import{CSSFormatter}from"./CSSFormatter.js";import{FormattedContentBuilder}from"./FormattedContentBuilder.js";import{AbortTokenization,createTokenizer}from"./FormatterWorker.js";import{JavaScriptFormatter}from"./JavaScriptFormatter.js";export class HTMLFormatter{constructor(t){this._builder=t,this._jsFormatter=new JavaScriptFormatter(t),this._cssFormatter=new CSSFormatter(t)}format(t,e){this._text=t,this._lineEndings=e,this._model=new HTMLModel(t),this._walk(this._model.document())}_formatTokensTill(t,e){if(!this._model)return;let s=this._model.peekToken();for(;s&&s.startOffset<e;){const e=this._model.nextToken();this._formatToken(t,e),s=this._model.peekToken()}}_walk(t){if(!t.openTag||!t.closeTag)throw new Error("Element is missing open or close tag");t.parent&&this._formatTokensTill(t.parent,t.openTag.startOffset),this._beforeOpenTag(t),this._formatTokensTill(t,t.openTag.endOffset),this._afterOpenTag(t);for(let e=0;e<t.children.length;++e)this._walk(t.children[e]);this._formatTokensTill(t,t.closeTag.startOffset),this._beforeCloseTag(t),this._formatTokensTill(t,t.closeTag.endOffset),this._afterCloseTag(t)}_beforeOpenTag(t){this._model&&t.children.length&&t!==this._model.document()&&this._builder.addNewLine()}_afterOpenTag(t){this._model&&t.children.length&&t!==this._model.document()&&(this._builder.increaseNestingLevel(),this._builder.addNewLine())}_beforeCloseTag(t){this._model&&t.children.length&&t!==this._model.document()&&(this._builder.decreaseNestingLevel(),this._builder.addNewLine())}_afterCloseTag(t){this._builder.addNewLine()}_formatToken(t,e){if(Platform.StringUtilities.isWhitespace(e.value))return;if(e.type.has("comment")||e.type.has("meta"))return this._builder.addNewLine(),this._builder.addToken(e.value.trim(),e.startOffset),void this._builder.addNewLine();if(!t.openTag||!t.closeTag)return;const s=t.openTag.endOffset<=e.startOffset&&e.startOffset<t.closeTag.startOffset;return s&&"style"===t.name?(this._builder.addNewLine(),this._builder.increaseNestingLevel(),this._cssFormatter.format(this._text||"",this._lineEndings||[],e.startOffset,e.endOffset),void this._builder.decreaseNestingLevel()):s&&"script"===t.name?(this._builder.addNewLine(),this._builder.increaseNestingLevel(),this._scriptTagIsJavaScript(t)?this._jsFormatter.format(this._text||"",this._lineEndings||[],e.startOffset,e.endOffset):(this._builder.addToken(e.value,e.startOffset),this._builder.addNewLine()),void this._builder.decreaseNestingLevel()):(!s&&e.type.has("attribute")&&this._builder.addSoftSpace(),void this._builder.addToken(e.value,e.startOffset))}_scriptTagIsJavaScript(t){if(!t.openTag)return!0;if(!t.openTag.attributes.has("type"))return!0;let e=t.openTag.attributes.get("type");if(!e)return!0;e=e.toLowerCase();const s=/^(["\'])(.*)\1$/.exec(e.trim());return s&&(e=s[2]),HTMLFormatter.SupportedJavaScriptMimeTypes.has(e.trim())}}HTMLFormatter.SupportedJavaScriptMimeTypes=new Set(["application/ecmascript","application/javascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"]);export class HTMLModel{constructor(t){this._state=ParseState.Initial,this._document=new FormatterElement("document"),this._document.openTag=new Tag("document",0,0,new Map,!0,!1),this._document.closeTag=new Tag("document",t.length,t.length,new Map,!1,!1),this._stack=[this._document],this._tokens=[],this._tokenIndex=0,this._build(t),this._attributes=new Map,this._attributeName="",this._tagName="",this._isOpenTag=!1}_build(t){const e=createTokenizer("text/html");let s=0;const a=t.toLowerCase();for(;e(t.substring(s),i.bind(this,s)),!(s>=t.length);){const e=this._stack.peekLast();if(!e)break;if(s=a.indexOf("</"+e.name,s),-1===s&&(s=t.length),!e.openTag)break;const i=e.openTag.endOffset,n=s,r=t.substring(i,n);this._tokens.push(new Token(r,new Set,i,n))}for(;this._stack.length>1;){const e=this._stack.peekLast();if(!e)break;this._popElement(new Tag(e.name,t.length,t.length,new Map,!1,!1))}function i(t,e,a,i,n){i+=t,s=n+=t;const r=a?new Set(a.split(" ")):new Set,o=new Token(e,r,i,n);this._tokens.push(o),this._updateDOM(o);const h=this._stack.peekLast();if(h&&("script"===h.name||"style"===h.name)&&h.openTag&&h.openTag.endOffset===s)return AbortTokenization}}_updateDOM(t){const e=ParseState,s=t.value,a=t.type;switch(this._state){case e.Initial:return void(!a.has("bracket")||"<"!==s&&"</"!==s||(this._onStartTag(t),this._state=e.Tag));case e.Tag:return void(a.has("tag")&&!a.has("bracket")?this._tagName=s.trim().toLowerCase():a.has("attribute")?(this._attributeName=s.trim().toLowerCase(),this._attributes.set(this._attributeName,""),this._state=e.AttributeName):!a.has("bracket")||">"!==s&&"/>"!==s||(this._onEndTag(t),this._state=e.Initial));case e.AttributeName:return void(a.size||"="!==s?!a.has("bracket")||">"!==s&&"/>"!==s||(this._onEndTag(t),this._state=e.Initial):this._state=e.AttributeValue);case e.AttributeValue:return void(a.has("string")?(this._attributes.set(this._attributeName,s),this._state=e.Tag):!a.has("bracket")||">"!==s&&"/>"!==s||(this._onEndTag(t),this._state=e.Initial))}}_onStartTag(t){this._tagName="",this._tagStartOffset=t.startOffset,this._tagEndOffset=null,this._attributes=new Map,this._attributeName="",this._isOpenTag="<"===t.value}_onEndTag(t){this._tagEndOffset=t.endOffset;const e="/>"===t.value||SelfClosingTags.has(this._tagName),s=new Tag(this._tagName,this._tagStartOffset||0,this._tagEndOffset,this._attributes,this._isOpenTag,e);this._onTagComplete(s)}_onTagComplete(t){if(t.isOpenTag){const e=this._stack.peekLast();if(e){const a=AutoClosingTags.get(e.name);e!==this._document&&e.openTag&&e.openTag.selfClosingTag?this._popElement(s(e,e.openTag.endOffset)):a&&a.has(t.name)&&this._popElement(s(e,t.startOffset)),this._pushElement(t)}return}let e=this._stack.peekLast();for(;this._stack.length>1&&e&&e.name!==t.name;)this._popElement(s(e,t.startOffset)),e=this._stack.peekLast();function s(t,e){return new Tag(t.name,e,e,new Map,!1,!1)}1!==this._stack.length&&this._popElement(t)}_popElement(t){const e=this._stack.pop();e&&(e.closeTag=t)}_pushElement(t){const e=this._stack.peekLast(),s=new FormatterElement(t.name);e&&(s.parent=e,e.children.push(s)),s.openTag=t,this._stack.push(s)}peekToken(){return this._tokenIndex<this._tokens.length?this._tokens[this._tokenIndex]:null}nextToken(){return this._tokens[this._tokenIndex++]}document(){return this._document}}const SelfClosingTags=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),AutoClosingTags=new Map([["head",new Set(["body"])],["li",new Set(["li"])],["dt",new Set(["dt","dd"])],["dd",new Set(["dt","dd"])],["p",new Set(["address","article","aside","blockquote","div","dl","fieldset","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","main","nav","ol","p","pre","section","table","ul"])],["rb",new Set(["rb","rt","rtc","rp"])],["rt",new Set(["rb","rt","rtc","rp"])],["rtc",new Set(["rb","rtc","rp"])],["rp",new Set(["rb","rt","rtc","rp"])],["optgroup",new Set(["optgroup"])],["option",new Set(["option","optgroup"])],["colgroup",new Set(["colgroup"])],["thead",new Set(["tbody","tfoot"])],["tbody",new Set(["tbody","tfoot"])],["tfoot",new Set(["tbody"])],["tr",new Set(["tr"])],["td",new Set(["td","th"])],["th",new Set(["td","th"])]]),ParseState={Initial:"Initial",Tag:"Tag",AttributeName:"AttributeName",AttributeValue:"AttributeValue"},Token=class{constructor(t,e,s,a){this.value=t,this.type=e,this.startOffset=s,this.endOffset=a}},Tag=class{constructor(t,e,s,a,i,n){this.name=t,this.startOffset=e,this.endOffset=s,this.attributes=a,this.isOpenTag=i,this.selfClosingTag=n}},FormatterElement=class{constructor(t){this.name=t,this.children=[],this.parent=null,this.openTag=null,this.closeTag=null}};