"use strict";const fs=require("fs"),path=require("path"),FILE_COUNT_BEGIN=14,FILF_INFO_BEGIN=18;class WxvpkgReader{constructor(t){this.fileMap={},this.dirMap={},this.cache={},this._close=!0,this.readSync=(t,e)=>{this._close&&(this._close=!1,this.fd=fs.openSync(this._path,"r"));const i=Buffer.alloc(e);return fs.readSync(this.fd,i,0,e,t),i},this._path=t,this._stat=fs.statSync(t);const e=this.readSync(14,4).readInt32BE(0);this.fileMap=this.getFileMap(e)}cacheDirName(t){this.dirMap[t]||(this.dirMap[t]=!0,this.cacheDirName(path.dirname(t)))}getFileMapByJSON(){let t;try{const e=this._path.replace(".wxvpkg",".fileinfo");console.log(e),t=JSON.parse(fs.readFileSync(e,"utf-8"));for(const e in t){const i=t[e];this.cacheDirName(path.dirname(i.name))}}catch(t){}return t}getFileMap(t){let e=this.getFileMapByJSON();if(!e){e={};let i=18;for(let s=0;s<t;s++){const t={},s=this.readSync(i,4).readInt32BE(0);i+=4,t.name=this.readSync(i,s).toString(),this.cacheDirName(path.dirname(t.name)),i+=s,t.offset=this.readSync(i,4).readInt32BE(0),i+=4,t.length=this.readSync(i,4).readInt32BE(0),i+=4,e[t.name]=t}}return e}getFile(t){if(!this.cache[t]){const e=this.fileMap[t];this.cache[t]=e?this.readSync(e.offset,e.length):Buffer.alloc(0)}return this.cache[t]}exists(t){return!!this.fileMap[t]||!!this.dirMap[t]}stat(t){const e={atime:this._stat.atime,birthtime:this._stat.birthtime,mtime:this._stat.mtime,ctime:this._stat.ctime};if(this.fileMap[t])return Object.assign(Object.assign({},e),{isFile:!0,size:this.fileMap[t].length||0,mode:33188});if(this.dirMap[t])return Object.assign(Object.assign({},e),{isFile:!1,size:0,mode:16877});throw new Error("no such file or directory")}close(){this._close||(fs.close(this.fd,()=>{}),this.fd=void 0),this._close=!0}}module.exports=WxvpkgReader;