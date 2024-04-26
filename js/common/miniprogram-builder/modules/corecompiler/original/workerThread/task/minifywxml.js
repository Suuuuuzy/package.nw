"use strict";const tslib_1=require("tslib"),path_1=tslib_1.__importDefault(require("path")),tools_1=require("../../../../../utils/tools"),log=tslib_1.__importStar(require("../../../../../utils/log")),config_1=require("../../../../../config/config"),locales_1=tslib_1.__importDefault(require("../../../../../utils/locales/locales"));function getCharCode(T){return T.charCodeAt(0)>=STATE.OTHERS?STATE.OTHERS:T.charCodeAt(0)}var TokenType,STATE,ACTION;!function(T){T[T.ATTR=0]="ATTR",T[T.STRING1=1]="STRING1",T[T.STRING2=2]="STRING2",T[T.OTHERS=3]="OTHERS"}(TokenType||(TokenType={})),function(T){T[T.ERROR=-1]="ERROR",T[T.NOT_SET=0]="NOT_SET",T[T.SIMPLE=1]="SIMPLE",T[T.TAG_START=2]="TAG_START",T[T.IN_TAG=3]="IN_TAG",T[T.IN_TAG_WORD=4]="IN_TAG_WORD",T[T.IN_STRING=5]="IN_STRING",T[T.IN_STRING_ESCAPE=6]="IN_STRING_ESCAPE",T[T.TAG_EQ=7]="TAG_EQ",T[T.IN_STRING2=9]="IN_STRING2",T[T.IN_STRING2_ESCAPE=10]="IN_STRING2_ESCAPE",T[T.IN_TEMPLATE_STRING=11]="IN_TEMPLATE_STRING",T[T.IN_TEMPLATE_STRING_ESCAPE=12]="IN_TEMPLATE_STRING_ESCAPE",T[T.IN_TEMPLATE_STRING2=13]="IN_TEMPLATE_STRING2",T[T.IN_TEMPLATE_STRING2_ESCAPE=14]="IN_TEMPLATE_STRING2_ESCAPE",T[T.WAIT_TEMPLATE_START=15]="WAIT_TEMPLATE_START",T[T.IN_TEMPLATE=16]="IN_TEMPLATE",T[T.WAIT_TEMPLATE_END=17]="WAIT_TEMPLATE_END",T[T.WAIT_FOR_RIGHT_BRACKET=18]="WAIT_FOR_RIGHT_BRACKET",T[T.IN_COMMENT=19]="IN_COMMENT",T[T.WAIT_FOR_COMMENT_END1=20]="WAIT_FOR_COMMENT_END1",T[T.WAIT_FOR_COMMENT_END2=21]="WAIT_FOR_COMMENT_END2",T[T.IN_COMMENT_BEGIN1=33]="IN_COMMENT_BEGIN1",T[T.IN_COMMENT_BEGIN2=34]="IN_COMMENT_BEGIN2",T[T.WXS_BEGIN_STEP1=22]="WXS_BEGIN_STEP1",T[T.WXS_BEGIN_STEP2=23]="WXS_BEGIN_STEP2",T[T.WXS_BEGIN_STEP3=24]="WXS_BEGIN_STEP3",T[T.WXS_BEGIN_STEP4=25]="WXS_BEGIN_STEP4",T[T.WXS_END_STEP1=26]="WXS_END_STEP1",T[T.WXS_END_STEP2=27]="WXS_END_STEP2",T[T.WXS_END_STEP3=28]="WXS_END_STEP3",T[T.WXS_END_STEP4=29]="WXS_END_STEP4",T[T.WXS_END_STEP5=30]="WXS_END_STEP5",T[T.IN_WXS=31]="IN_WXS",T[T.WXS_BEGIN_WAIT_FOR_RIGHT_BRACKET=32]="WXS_BEGIN_WAIT_FOR_RIGHT_BRACKET",T[T.SIMPLE_LINE_BREAK_BEGIN1=35]="SIMPLE_LINE_BREAK_BEGIN1",T[T.SIMPLE_LINE_BREAK_BEGIN2=36]="SIMPLE_LINE_BREAK_BEGIN2",T[T.SIMPLE_SPACE_OR_TAB=37]="SIMPLE_SPACE_OR_TAB",T[T.TEXT_BEGIN_STEP1=38]="TEXT_BEGIN_STEP1",T[T.TEXT_BEGIN_STEP2=39]="TEXT_BEGIN_STEP2",T[T.TEXT_BEGIN_STEP3=40]="TEXT_BEGIN_STEP3",T[T.TEXT_BEGIN_STEP4=41]="TEXT_BEGIN_STEP4",T[T.TEXT_BEGIN_STEP5=42]="TEXT_BEGIN_STEP5",T[T.TEXT_END_STEP1=43]="TEXT_END_STEP1",T[T.TEXT_END_STEP2=44]="TEXT_END_STEP2",T[T.TEXT_END_STEP3=45]="TEXT_END_STEP3",T[T.TEXT_END_STEP4=46]="TEXT_END_STEP4",T[T.TEXT_END_STEP5=47]="TEXT_END_STEP5",T[T.TEXT_END_STEP6=48]="TEXT_END_STEP6",T[T.IN_TEXT=49]="IN_TEXT",T[T.TEXT_BEGIN_WAIT_FOR_RIGHT_BRACKET=50]="TEXT_BEGIN_WAIT_FOR_RIGHT_BRACKET",T[T.END=99]="END",T[T.OTHERS=256]="OTHERS"}(STATE||(STATE={})),function(T){T[T.NOTHING=0]="NOTHING",T[T.DO_ACTION=65536]="DO_ACTION",T[T.STORE_TOKEN_EXCLUDE=131072]="STORE_TOKEN_EXCLUDE",T[T.STORE_TOKEN_INCLUDE=262144]="STORE_TOKEN_INCLUDE",T[T.IGNORE=524288]="IGNORE",T[T.REFEED=1048576]="REFEED",T[T.STORE_TOKEN_FIRST=2097152]="STORE_TOKEN_FIRST",T[T.STORE_ONE_SPACE=4194304]="STORE_ONE_SPACE",T[T.STORE_ONE_LINE_BREAK=8388608]="STORE_ONE_LINE_BREAK",T[T.GET_WHITECHARS_BEFORE=16777216]="GET_WHITECHARS_BEFORE",T[T.STORE_STATE_BEFORE_COMMENT=33554432]="STORE_STATE_BEFORE_COMMENT",T[T.SET_WXS_STATE=67108864]="SET_WXS_STATE",T[T.WXS_BACK=134217728]="WXS_BACK",T[T.SET_TEXT_STATE=268435456]="SET_TEXT_STATE",T[T.TEXT_BACK=536870912]="TEXT_BACK"}(ACTION||(ACTION={}));class Token{constructor(T,E){this.type=T,this.value=E}}class MachineState{constructor(){this.cur_pos=0,this.last_pos=0,this.line=1,this.col=1,this.last_line=this.line,this.last_col=1,this.state=STATE.SIMPLE}}class Machine{constructor(T,E){this.mState=new MachineState,this.TT=new Array(1024);for(let T=0;T<1024;T++){const E=new Array(257);this.TT[T]=E}this.InitTransitTable(),this.mPath=T,this.mSrc=E,this.stateBeforeComment=STATE.SIMPLE,this.wxsState=!1,this.textState=!1}Reset(){return this.mState.cur_pos=this.mState.last_pos=0,this.mState.line=1,this.mState.col=1,this.mState.last_line=this.mState.line,this.mState.last_col=1,this.mState.state=STATE.SIMPLE,0}Feed(T,E){let _,S,t,A,N;"\n"===T&&(this.mState.line++,this.mState.col=0);do{if(N=!1,void 0!==_&&_&ACTION.REFEED&&(N=!0),_=this.TT[this.mState.state][getCharCode(T)],_===STATE.NOT_SET&&(_=this.TT[this.mState.state][STATE.OTHERS]),_===STATE.NOT_SET)throw{msg:`BAD STATE MACHINE! AT INPUT ${this.mState.state} ${T}`};if(_<0)throw"\0"!==T?{msg:`${this.mState.line}:${this.mState.col}:unexpected character \`${T.replace("\n","\\n")}\``}:{msg:`${this.mState.line}:${this.mState.col}:unexpected end`};if(S=_,t=65535&_,A=this.mState.state,S&ACTION.STORE_STATE_BEFORE_COMMENT&&!N&&(this.stateBeforeComment=A),A===STATE.WAIT_FOR_RIGHT_BRACKET&&">"===T&&this.wxsState&&(this.wxsState=!1),A===STATE.WAIT_FOR_RIGHT_BRACKET&&">"===T&&this.textState&&(this.textState=!1),S&ACTION.SET_WXS_STATE&&(this.wxsState=!this.wxsState),S&ACTION.SET_TEXT_STATE&&(this.textState=!this.textState),">"===T&&t===STATE.SIMPLE&&this.wxsState&&(t=STATE.IN_WXS),">"===T&&t===STATE.SIMPLE&&this.textState&&(t=STATE.IN_TEXT),this.mState.state=t,S&ACTION.STORE_TOKEN_FIRST&&this.mState.cur_pos>this.mState.last_pos){const T=new Token(TokenType.OTHERS,this.mSrc.substring(this.mState.last_pos,this.mState.last_pos+1));E.push(T),this.mState.last_pos++,this.mState.last_col++}if(S&ACTION.STORE_ONE_LINE_BREAK){const T=new Token(TokenType.OTHERS,"\n");E.push(T),this.mState.last_pos=this.mState.cur_pos,this.mState.last_col=this.mState.col,this.mState.last_line=this.mState.line}if(S&ACTION.STORE_ONE_SPACE){const T=new Token(TokenType.OTHERS," ");E.push(T),this.mState.last_pos=this.mState.cur_pos,this.mState.last_col=this.mState.col,this.mState.last_line=this.mState.line}}while(_&ACTION.REFEED);if(S&ACTION.STORE_TOKEN_EXCLUDE){const T=this.mState.cur_pos,_=this.mState.last_pos;if(T>_){let S;S=A===STATE.IN_TAG_WORD&&_>0&&" \n\t\r".includes(this.mSrc[_-1])?new Token(TokenType.ATTR,this.mSrc.substring(_,T)):(this.wxsState&&STATE.IN_WXS,new Token(TokenType.OTHERS,this.mSrc.substring(_,T))),E.push(S),this.mState.last_pos=this.mState.cur_pos,this.mState.last_col=this.mState.col,this.mState.last_line=this.mState.line}}if(S&ACTION.WXS_BACK){const T=new Token(TokenType.OTHERS,this.mSrc.substring(this.mState.last_pos,this.mState.cur_pos-4));E.push(T),this.mState.last_pos=this.mState.cur_pos-4,this.mState.last_col=this.mState.col-4,this.mState.last_line=this.mState.line}if(S&ACTION.TEXT_BACK){const T=new Token(TokenType.OTHERS,this.mSrc.substring(this.mState.last_pos,this.mState.cur_pos-5));E.push(T),this.mState.last_pos=this.mState.cur_pos-5,this.mState.last_col=this.mState.col-5,this.mState.last_line=this.mState.line}if(this.mState.cur_pos++,this.mState.col++,S&ACTION.STORE_TOKEN_INCLUDE){let T;T=A===STATE.IN_STRING?TokenType.STRING1:A===STATE.IN_STRING2?TokenType.STRING2:TokenType.OTHERS;const _=new Token(T,this.mSrc.substring(this.mState.last_pos,this.mState.cur_pos));E.push(_),this.mState.last_pos=this.mState.cur_pos,this.mState.last_col=this.mState.col,this.mState.last_line=this.mState.line}return S&ACTION.IGNORE&&(this.mState.last_pos=this.mState.cur_pos,this.mState.last_col=this.mState.col),S&ACTION.GET_WHITECHARS_BEFORE&&(this.mState.state=this.stateBeforeComment,this.stateBeforeComment!==STATE.SIMPLE_LINE_BREAK_BEGIN2&&this.stateBeforeComment!==STATE.SIMPLE_SPACE_OR_TAB||E.pop(),this.stateBeforeComment=STATE.SIMPLE),0}FillTT(T,E,_,S){for(const t of S)this.TT[T][getCharCode(t)]=E|_}FillTT_template_string(T,E){const _=T+1;this.TT[T][getCharCode("\\")]=_,this.TT[_][STATE.OTHERS]=T,this.TT[T][getCharCode(E)]=STATE.IN_TEMPLATE,this.TT[T][0]=STATE.ERROR,this.TT[T][STATE.OTHERS]=T}FillTT_string(T,E){const _=T+1;this.TT[T][getCharCode("\\")]=_,this.TT[T][getCharCode("\n")]=STATE.ERROR,this.TT[_][STATE.OTHERS]=T,this.TT[_][getCharCode("\n")]=STATE.IN_TAG|ACTION.STORE_TOKEN_EXCLUDE|ACTION.IGNORE,this.TT[T][getCharCode(E)]=STATE.IN_TAG|ACTION.STORE_TOKEN_INCLUDE,this.TT[T][0]=STATE.ERROR,this.TT[T][STATE.OTHERS]=T}InitTransitTable(){for(let T=0;T<1024;T++)this.TT[T].fill(0);const T="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-:";this.TT[STATE.END][STATE.OTHERS]=STATE.END,this.TT[STATE.SIMPLE][getCharCode("<")]=STATE.TAG_START|ACTION.STORE_TOKEN_EXCLUDE|ACTION.STORE_STATE_BEFORE_COMMENT,this.TT[STATE.SIMPLE][getCharCode("{")]=STATE.WAIT_TEMPLATE_START,this.TT[STATE.SIMPLE][STATE.OTHERS]=STATE.SIMPLE,this.TT[STATE.SIMPLE][0]=STATE.END|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.WAIT_TEMPLATE_START][getCharCode("{")]=STATE.IN_TEMPLATE,this.TT[STATE.WAIT_TEMPLATE_START][STATE.OTHERS]=STATE.SIMPLE,this.TT[STATE.IN_TEMPLATE][getCharCode("}")]=STATE.WAIT_TEMPLATE_END,this.TT[STATE.IN_TEMPLATE][0]=STATE.ERROR,this.TT[STATE.IN_TEMPLATE][STATE.OTHERS]=STATE.IN_TEMPLATE,this.TT[STATE.WAIT_TEMPLATE_END][getCharCode("}")]=STATE.SIMPLE,this.TT[STATE.WAIT_TEMPLATE_END][STATE.OTHERS]=STATE.IN_TEMPLATE|ACTION.REFEED,this.TT[STATE.IN_TEMPLATE][getCharCode('"')]=STATE.IN_TEMPLATE_STRING,this.TT[STATE.IN_TEMPLATE][getCharCode("'")]=STATE.IN_TEMPLATE_STRING2,this.FillTT_template_string(STATE.IN_TEMPLATE_STRING,'"'),this.FillTT_template_string(STATE.IN_TEMPLATE_STRING2,"'"),this.FillTT(STATE.TAG_START,STATE.IN_TAG,ACTION.STORE_TOKEN_EXCLUDE|ACTION.IGNORE," \n\t\r"),this.FillTT(STATE.TAG_START,STATE.IN_TAG_WORD,ACTION.STORE_TOKEN_EXCLUDE,T),this.TT[STATE.TAG_START][getCharCode("/")]=STATE.IN_TAG|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.TAG_START][getCharCode("!")]=STATE.IN_COMMENT_BEGIN1,this.TT[STATE.TAG_START][STATE.OTHERS]=STATE.ERROR,this.TT[STATE.IN_COMMENT_BEGIN1][getCharCode("-")]=STATE.IN_COMMENT_BEGIN2,this.TT[STATE.IN_COMMENT_BEGIN1][STATE.OTHERS]=STATE.ERROR,this.TT[STATE.IN_COMMENT_BEGIN2][getCharCode("-")]=STATE.IN_COMMENT,this.TT[STATE.IN_COMMENT_BEGIN2][STATE.OTHERS]=STATE.ERROR,this.TT[STATE.IN_COMMENT][getCharCode("-")]=STATE.WAIT_FOR_COMMENT_END1,this.TT[STATE.IN_COMMENT][STATE.OTHERS]=STATE.IN_COMMENT,this.TT[STATE.WAIT_FOR_COMMENT_END1][getCharCode("-")]=STATE.WAIT_FOR_COMMENT_END2,this.TT[STATE.WAIT_FOR_COMMENT_END1][STATE.OTHERS]=STATE.IN_COMMENT,this.TT[STATE.WAIT_FOR_COMMENT_END2][getCharCode(">")]=STATE.SIMPLE|ACTION.IGNORE|ACTION.GET_WHITECHARS_BEFORE,this.TT[STATE.WAIT_FOR_COMMENT_END2][getCharCode("-")]=STATE.WAIT_FOR_COMMENT_END2,this.TT[STATE.WAIT_FOR_COMMENT_END2][STATE.OTHERS]=STATE.IN_COMMENT,this.FillTT(STATE.IN_TAG_WORD,STATE.IN_TAG_WORD,ACTION.NOTHING,T),this.FillTT(STATE.IN_TAG_WORD,STATE.IN_TAG_WORD,ACTION.NOTHING,"0123456789"),this.FillTT(STATE.IN_TAG_WORD,STATE.IN_TAG,ACTION.STORE_TOKEN_EXCLUDE|ACTION.IGNORE," \n\t\r"),this.TT[STATE.IN_TAG_WORD][getCharCode("=")]=STATE.TAG_EQ|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.IN_TAG_WORD][getCharCode('"')]=STATE.ERROR,this.TT[STATE.IN_TAG_WORD][getCharCode(">")]=STATE.SIMPLE|ACTION.STORE_TOKEN_EXCLUDE|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.IN_TAG_WORD][getCharCode("/")]=STATE.WAIT_FOR_RIGHT_BRACKET|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.IN_TAG_WORD][STATE.OTHERS]=STATE.IN_TAG|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.IN_TAG_WORD][0]=STATE.ERROR,this.FillTT(STATE.TAG_EQ,STATE.IN_TAG,ACTION.STORE_TOKEN_EXCLUDE|ACTION.IGNORE," \n\t\r"),this.FillTT(STATE.TAG_EQ,STATE.IN_STRING,ACTION.STORE_TOKEN_EXCLUDE,T),this.TT[STATE.TAG_EQ][getCharCode('"')]=STATE.IN_STRING|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.TAG_EQ][getCharCode("'")]=STATE.IN_STRING2|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.TAG_EQ][0]=STATE.ERROR,this.TT[STATE.TAG_EQ][STATE.OTHERS]=STATE.ERROR,this.FillTT(STATE.IN_TAG,STATE.IN_TAG,ACTION.IGNORE," \n\t\r"),this.FillTT(STATE.IN_TAG,STATE.IN_TAG_WORD,ACTION.NOTHING,T),this.FillTT(STATE.IN_TAG,STATE.ERROR,ACTION.NOTHING,"0123456789"),this.TT[STATE.IN_TAG][getCharCode("<")]=STATE.ERROR,this.TT[STATE.IN_TAG][getCharCode('"')]=STATE.IN_STRING,this.TT[STATE.IN_TAG][getCharCode("'")]=STATE.IN_STRING2,this.TT[STATE.IN_TAG][getCharCode("/")]=STATE.WAIT_FOR_RIGHT_BRACKET,this.TT[STATE.IN_TAG][getCharCode(">")]=STATE.SIMPLE|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.IN_TAG][getCharCode("=")]=STATE.TAG_EQ,this.TT[STATE.IN_TAG][0]=STATE.ERROR,this.TT[STATE.IN_TAG][STATE.OTHERS]=STATE.ERROR,this.FillTT(STATE.WAIT_FOR_RIGHT_BRACKET,STATE.IN_TAG_WORD,ACTION.STORE_TOKEN_EXCLUDE,T),this.TT[STATE.WAIT_FOR_RIGHT_BRACKET][getCharCode(">")]=STATE.SIMPLE|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.WAIT_FOR_RIGHT_BRACKET][STATE.OTHERS]=STATE.ERROR,this.FillTT_string(STATE.IN_STRING,'"'),this.FillTT_string(STATE.IN_STRING2,"'"),this.TT[STATE.TAG_START][getCharCode("w")]=STATE.WXS_BEGIN_STEP1;let E="wxs",_=STATE.WXS_BEGIN_STEP1;for(let T=1,S=_;T<E.length;T++)this.TT[S][getCharCode(E[T])]=_+T,this.TT[S][STATE.OTHERS]=STATE.IN_TAG_WORD|ACTION.REFEED|ACTION.STORE_TOKEN_FIRST,2===T&&(this.TT[S][getCharCode(E[T])]|=ACTION.SET_WXS_STATE),S=_+T;this.FillTT(STATE.WXS_BEGIN_STEP3,STATE.IN_TAG,ACTION.STORE_TOKEN_EXCLUDE|ACTION.IGNORE," \n\t\r"),this.TT[STATE.WXS_BEGIN_STEP3][getCharCode(">")]=STATE.IN_WXS|ACTION.STORE_TOKEN_EXCLUDE|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.WXS_BEGIN_STEP3][STATE.OTHERS]=STATE.IN_TAG_WORD|ACTION.REFEED|ACTION.STORE_TOKEN_FIRST|ACTION.SET_WXS_STATE,this.TT[STATE.IN_WXS][getCharCode("<")]=STATE.WXS_END_STEP1,this.TT[STATE.IN_WXS][STATE.OTHERS]=STATE.IN_WXS,E="</wxs",_=STATE.WXS_END_STEP1;for(let T=1,S=_;T<E.length;T++)this.TT[S][getCharCode(E[T])]=_+T,4===T&&(this.TT[S][getCharCode(E[T])]|=ACTION.WXS_BACK|ACTION.SET_WXS_STATE),this.TT[S][STATE.OTHERS]=STATE.IN_WXS|ACTION.REFEED,S=_+T;this.FillTT(STATE.WXS_END_STEP5,STATE.WXS_END_STEP5,ACTION.NOTHING," \n\t\r"),this.TT[STATE.WXS_END_STEP5][getCharCode(">")]=STATE.SIMPLE|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.WXS_END_STEP5][STATE.OTHERS]=STATE.ERROR,this.TT[STATE.SIMPLE][getCharCode(" ")]=STATE.SIMPLE_SPACE_OR_TAB|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.SIMPLE][getCharCode("\t")]=STATE.SIMPLE_SPACE_OR_TAB|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.SIMPLE][getCharCode("\n")]=STATE.SIMPLE_LINE_BREAK_BEGIN1|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.SIMPLE_SPACE_OR_TAB][getCharCode(" ")]=STATE.SIMPLE_SPACE_OR_TAB,this.TT[STATE.SIMPLE_SPACE_OR_TAB][getCharCode("\t")]=STATE.SIMPLE_SPACE_OR_TAB,this.TT[STATE.SIMPLE_SPACE_OR_TAB][getCharCode("\n")]=STATE.SIMPLE_SPACE_OR_TAB,this.TT[STATE.SIMPLE_SPACE_OR_TAB][getCharCode("<")]=STATE.SIMPLE|ACTION.STORE_ONE_SPACE|ACTION.REFEED|ACTION.STORE_STATE_BEFORE_COMMENT,this.TT[STATE.SIMPLE_SPACE_OR_TAB][STATE.OTHERS]=STATE.SIMPLE|ACTION.STORE_ONE_SPACE|ACTION.REFEED,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN1][getCharCode("\n")]=STATE.SIMPLE_LINE_BREAK_BEGIN2,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN1][getCharCode("\t")]=STATE.SIMPLE_SPACE_OR_TAB,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN1][getCharCode(" ")]=STATE.SIMPLE_SPACE_OR_TAB,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN1][getCharCode("<")]=STATE.SIMPLE|ACTION.REFEED|ACTION.STORE_STATE_BEFORE_COMMENT,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN1][STATE.OTHERS]=STATE.SIMPLE|ACTION.REFEED|ACTION.STORE_TOKEN_EXCLUDE,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN2][getCharCode("\n")]=STATE.SIMPLE_LINE_BREAK_BEGIN2,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN2][getCharCode("\t")]=STATE.SIMPLE_SPACE_OR_TAB,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN2][getCharCode(" ")]=STATE.SIMPLE_SPACE_OR_TAB,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN2][getCharCode("<")]=STATE.SIMPLE|ACTION.STORE_ONE_LINE_BREAK|ACTION.REFEED|ACTION.STORE_STATE_BEFORE_COMMENT,this.TT[STATE.SIMPLE_LINE_BREAK_BEGIN2][STATE.OTHERS]=STATE.SIMPLE|ACTION.REFEED|ACTION.STORE_ONE_LINE_BREAK,this.TT[STATE.TAG_START][getCharCode("t")]=STATE.TEXT_BEGIN_STEP1,E="text",_=STATE.TEXT_BEGIN_STEP1;for(let T=1,S=_;T<E.length;T++)this.TT[S][getCharCode(E[T])]=_+T,3===T&&(this.TT[S][getCharCode(E[T])]|=ACTION.SET_TEXT_STATE),this.TT[S][STATE.OTHERS]=STATE.IN_TAG_WORD|ACTION.REFEED|ACTION.STORE_TOKEN_FIRST,S=_+T;this.FillTT(STATE.TEXT_BEGIN_STEP4,STATE.IN_TAG,ACTION.STORE_TOKEN_EXCLUDE|ACTION.IGNORE," \n\t\r"),this.TT[STATE.TEXT_BEGIN_STEP4][getCharCode(">")]=STATE.IN_TEXT|ACTION.STORE_TOKEN_EXCLUDE|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.TEXT_BEGIN_STEP4][STATE.OTHERS]=STATE.IN_TAG_WORD|ACTION.REFEED|ACTION.STORE_TOKEN_FIRST|ACTION.SET_TEXT_STATE,this.TT[STATE.IN_TEXT][getCharCode("<")]=STATE.TEXT_END_STEP1,this.TT[STATE.IN_TEXT][STATE.OTHERS]=STATE.IN_TEXT,E="</text",_=STATE.TEXT_END_STEP1;for(let T=1,S=_;T<E.length;T++)this.TT[S][getCharCode(E[T])]=_+T,5===T&&(this.TT[S][getCharCode(E[T])]|=ACTION.TEXT_BACK|ACTION.SET_TEXT_STATE),this.TT[S][STATE.OTHERS]=STATE.IN_TEXT|ACTION.REFEED,S=_+T;this.FillTT(STATE.TEXT_END_STEP6,STATE.TEXT_END_STEP6,ACTION.NOTHING," \n\t\r"),this.TT[STATE.TEXT_END_STEP6][getCharCode(">")]=STATE.SIMPLE|ACTION.STORE_TOKEN_INCLUDE,this.TT[STATE.TEXT_END_STEP6][STATE.OTHERS]=STATE.ERROR}}class Tokenizer{constructor(T,E){this.machine=new Machine(E,T),this.m_pSrc=T,this.path=E}generateTokens(T){this.machine.Reset();let E=0;if(0===this.m_pSrc.length)return E;for(let _=0;_<this.m_pSrc.length&&0==E;_++){const S=this.m_pSrc[_];E=this.machine.Feed(S,T)}return 0!==E||(E=this.machine.Feed("\0",T)),E}}function generateWXMLFromTokens(T){let E="";for(const _ of T){let{value:T}=_;_.type===TokenType.ATTR&&(T=" "+T),E+=T}return E}async function minifyWXML(T){const{code:E,filePath:_,setting:S={},root:t=""}=T,{minifyWXML:A}=S,N=!!A,e=path_1.default.posix.join(t,_),I=Buffer.from(E);let s=(0,tools_1.bufferToUtf8String)(I);if(void 0===s)return{error:{code:config_1.FILE_NOT_UTF8,path:e,message:locales_1.default.config.FILE_NOT_UTF8.format(e)}};if(N&&s.length>0)try{const T=new Tokenizer(s.replace(/\r\n/g,"\n"),e),E=[],_=T.generateTokens(E);if(0!==_)throw new Error("minifywxml tokenizer error ret: "+_);return s=generateWXMLFromTokens(E),{error:null,code:s.replace(/\r\n/g,"\n")}}catch(T){return log.error("minifywxml error @ "+e),log.error(T.msg),{error:{code:config_1.MINIFY_WXML_ERR,path:e,message:T.msg}}}return{error:null,code:s.replace(/\r\n/g,"\n")}}module.exports={minifyWXML:minifyWXML,Tokenizer:Tokenizer,generateWXMLFromTokens:generateWXMLFromTokens,Token:Token};