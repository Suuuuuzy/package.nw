(()=>{"use strict";var e={7152:(e,t,s)=>{const i=s(7147),n=s(1017),{getReader:r,splitPath:c}=s(9962),o=i.readFileSync;i.readFileSync=function(e,t){const[s,i,a]=c(e);if(!s||!a)return o.apply(this,arguments);const h=r(i);let l=a.replace(/\\/g,"/");l=n.posix.resolve(l);const d=h.getFile(l);let p;return t?"[object String]"===Object.prototype.toString.call(t)&&(p={encoding:t,flag:"r"}):p={encoding:null,flag:"r"},(null==p?void 0:p.encoding)?d.toString(p.encoding):d};let a=0;const h=process.getuid?process.getuid():0,l=process.getgid?process.getgid():0,d=Date.now(),p=i.statSync;i.statSync=function(e){const[t,s,i]=c(e);if(!t)return p.apply(this,arguments);if(!i){const e=p.apply(this,arguments);return Object.assign(Object.assign({},e),{isFile:()=>!1,isDirectory:()=>!0,wxvpkg:!0})}const o=r(s);let u=i.replace(/\\/g,"/");u=n.posix.resolve(u);const f=o.stat(u);return{dev:1,ino:++a,mode:33188,nlink:1,uid:h,gid:l,rdev:0,atime:f.atime||d,birthtime:f.birthtime||d,mtime:f.mtime||d,ctime:f.ctime||d,size:f.size,isFile:()=>f.isFile,isDirectory:()=>!f.isFile,isSymbolicLink:()=>!1,isBlockDevice:()=>!1,isCharacterDevice:()=>!1,isFIFO:()=>!1,isSocket:()=>!1}};const u=i.existsSync;i.existsSync=function(e){const[t,s,i]=c(e);if(!t||!i)return u.apply(this,arguments);const o=r(s);let a=i.replace(/\\/g,"/");return a=n.posix.resolve(a),o.exists(a)},e.exports={internalModuleReadFileSync:o,internalModuleStatSync:p,internalModuleExistSync:u}},452:(e,t,s)=>{const i=s(7152);s(9800),e.exports=i},9800:(e,t,s)=>{const i=s(1017),n=s(8188),r=s(7147),c=Object.create(null);function o(e){const t=o.cache;if(null!==t){const s=t.get(e);if(void 0!==s)return s}let s;return s=r.existsSync(e)?r.statSync(e).isDirectory()?1:0:-2,null!==t&&t.set(e,s),s}function a(e,t){return 0===o(e)&&i.resolve(e)}function h(e,t,s){for(const s of t){const t=a(e+s);if(t)return t}return!1}function l(e,t,s){const n=function(e){const t=c[e];if(t)return t;const s=i.resolve(e,"package.json");try{const t=r.readFileSync(s,"utf8");return!!t&&(c[e]=JSON.parse(t).main)}catch(e){return!1}}(e);if(!n)return!1;const o=i.resolve(e,n);return a(o)||h(o,t)||h(i.resolve(o,"index"),t)}o.cache=new Map;const d=n._findPath;n._findPath=function(e,t,s){if(i.isAbsolute(e))t=[""];else if(!t||0===t.length)return!1;const r=`${e}\0${1===t.length?t[0]:t.join("\0")}`,c=n._pathCache[r];if(c)return c;let a,d=e.length>0&&47===e.charCodeAt(e.length-1);d||(d=/(?:^|\/)\.?\.$/.test(e));for(const s of t){if(s&&o(s)<1)continue;const t=i.resolve(s,e);let c;const p=o(t);if(d||(0===p&&(c=i.resolve(t)),c||(void 0===a&&(a=Object.keys(n._extensions)),c=h(t,a))),c||1!==p||(void 0===a&&(a=Object.keys(n._extensions)),c=l(t,a),c||(c=h(i.resolve(t,"index"),a))),c)return n._pathCache[r]=c,c}return!1};const p=n._resolveLookupPaths,u="darwin"===process.platform,f=u?i.join(process.execPath,"../../../../../../../../../Resources/package.nw"):i.join(process.execPath,"../code/package.nw");function g(e){e.push(i.join(f,"node_modules")),e.push(i.join(f,"node_modules.wxvpkg")),u&&(e.push(i.join(process.execPath,"../../../../../../Resources/package.nw/node_modules")),e.push(i.join(process.execPath,"../../../../../../Resources/package.nw/node_modules.wxvpkg")))}n._resolveLookupPaths=function(){const e=p.apply(this,arguments),t=[],s=process.cwd();let n=!1;for(const r of e)"node_modules"===i.basename(r)&&t.push(i.join(i.dirname(r),"node_modules.wxvpkg")),t.push(r),n||i.dirname(r)!==s&&i.dirname(r)!==i.dirname(s)||(n=!0,g(t));return n||(n=!0,g(t)),t},e.exports={internalModuleFindPath:d,internalModuleResolveLookupPaths:p}},9962:(e,t,s)=>{const i=s(8671);let n={};e.exports={splitPath:e=>{if("[object String]"!==Object.prototype.toString.call(e))return[!1,"",""];if(".wxvpkg"===e.substr(-7))return[!0,e,""];const t=e.split(".wxvpkg");return 1===t.length?[!1,"",""]:[!0,`${t.slice(0,t.length-1).join(".wxvpkg")}.wxvpkg`,t[t.length-1]]},getReader:e=>{let t=n[e];return t||(t=new i(e),n[e]=t),t},cleanCache:()=>{for(const e in n)n[e].close();n={}}}},5903:(e,t,s)=>{const i=s(7147),n=s(1017);e.exports=class{constructor(e){this.fileMap={},this.dirMap={},this.cache={},this._close=!0,this.readSync=(e,t)=>{this._close&&(this._close=!1,this.fd=i.openSync(this._path,"r"));const s=Buffer.alloc(t);return i.readSync(this.fd,s,0,t,e),s},this._path=e,this._stat=i.statSync(e);const t=this.readSync(14,4).readInt32BE(0);this.fileMap=this.getFileMap(t)}cacheDirName(e){this.dirMap[e]||(this.dirMap[e]=!0,this.cacheDirName(n.dirname(e)))}getFileMapByJSON(){let e;try{const t=this._path.replace(".wxvpkg",".fileinfo");e=JSON.parse(i.readFileSync(t,"utf-8"));for(const t in e){const s=e[t];this.cacheDirName(n.dirname(s.name))}}catch(e){}return e}getFileMap(e){let t=this.getFileMapByJSON();if(!t){t={};let s=18;for(let i=0;i<e;i++){const e={},i=this.readSync(s,4).readInt32BE(0);s+=4,e.name=this.readSync(s,i).toString(),this.cacheDirName(n.dirname(e.name)),s+=i,e.offset=this.readSync(s,4).readInt32BE(0),s+=4,e.length=this.readSync(s,4).readInt32BE(0),s+=4,t[e.name]=e}}return t}getFile(e){if(!this.cache[e]){const t=this.fileMap[e];this.cache[e]=t?this.readSync(t.offset,t.length):Buffer.alloc(0)}return this.cache[e]}exists(e){return!!this.fileMap[e]||!!this.dirMap[e]}stat(e){const t={atime:this._stat.atime,birthtime:this._stat.birthtime,mtime:this._stat.mtime,ctime:this._stat.ctime};if(this.fileMap[e])return Object.assign(Object.assign({},t),{isFile:!0,size:this.fileMap[e].length||0,mode:33188});if(this.dirMap[e])return Object.assign(Object.assign({},t),{isFile:!1,size:0,mode:16877});throw new Error("no such file or directory")}close(){this._close||(i.close(this.fd,(()=>{})),this.fd=void 0),this._close=!0}}},6988:(e,t,s)=>{const i=s(7147),n=s(1017);e.exports=class{constructor(e){this.fileMap={},this.dirMap={},this.cache={},this._close=!0,this.readSync=(e,t)=>{this._close&&(this._close=!1,this.fd=i.openSync(this._path,"r"));const s=Buffer.alloc(t);return i.readSync(this.fd,s,0,t,e),s},this._path=e,this._stat=i.statSync(e);const t=this.readSync(18,4).readInt32BE(0);this.fileMap=this.getFileMap(t)}cacheDirName(e){this.dirMap[e]||(this.dirMap[e]=!0,this.cacheDirName(n.dirname(e)))}getFileMapByJSON(){let e;try{const t=this._path.replace(".wxvpkg",".wx.fileinfo");e=JSON.parse(i.readFileSync(t,"utf-8"));for(const t in e){const s=e[t];this.cacheDirName(n.dirname(s.name))}}catch(e){}return e}getFileMap(e){let t=this.getFileMapByJSON();if(!t){t={};let s=22;for(let i=0;i<e;i++){const e={},i=this.readSync(s,4).readInt32BE(0);s+=4,e.name=this.readSync(s,i).toString(),this.cacheDirName(n.dirname(e.name)),s+=i,e.encType=this.readSync(s,1).readIntBE(0,1,!1),s+=1,e.mode=this.readSync(s,2).readIntBE(0,2,!1),s+=2,e.offset=this.readSync(s,4).readInt32BE(0),s+=4,e.length=this.readSync(s,4).readInt32BE(0),s+=4,t[e.name]=e}}return t}getFile(e){if(!this.cache[e]){const t=this.fileMap[e];this.cache[e]=t?this.readSync(t.offset,t.length):Buffer.alloc(0)}return this.cache[e]}exists(e){return!!this.fileMap[e]||!!this.dirMap[e]}stat(e){const t={atime:this._stat.atime,birthtime:this._stat.birthtime,mtime:this._stat.mtime,ctime:this._stat.ctime};if(this.fileMap[e])return Object.assign(Object.assign({},t),{isFile:!0,size:this.fileMap[e].length||0,mode:this.fileMap[e].mode+32768});if(this.dirMap[e])return Object.assign(Object.assign({},t),{isFile:!1,size:0,mode:16877});throw new Error("no such file or directory")}close(){this._close||(i.close(this.fd,(()=>{})),this.fd=void 0),this._close=!0}}},7509:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionByFD=t.getVersion=void 0;const i=s(7147);t.getVersion=e=>{let t=e.slice(1,5).readInt32BE(0);if(1===t){const s=e.slice(13,14);14!==s[0]&&237!==s[0]||(t=0)}return t},t.getVersionByFD=e=>{const t=Buffer.alloc(4);i.readSync(e,t,0,4,1);let s=t.readInt32BE(0);if(1===s){const t=Buffer.alloc(1);i.readSync(e,t,0,1,13),14!==t[0]&&237!==t[0]||(s=0)}return s}},8671:(e,t,s)=>{const i=s(7509),n=s(7147),r=s(5903),c=s(6988);e.exports=class{constructor(e){this.readSync=(e,t)=>this.instance.readSync(e,t);const t=n.openSync(e,"r");if(this.version=(0,i.getVersionByFD)(t),0===this.version&&(this.instance=new r(e)),10===this.version&&(this.instance=new c(e)),!this.instance)throw new Error(`${e} unrecognized version: ${this.version}`);n.close(t,(()=>{}))}getFile(e){return this.instance.getFile(e)}exists(e){return this.instance.exists(e)}stat(e){return this.instance.stat(e)}close(){this.instance.close()}}},7147:e=>{e.exports=require("fs")},8188:e=>{e.exports=require("module")},1017:e=>{e.exports=require("path")}},t={},s=function s(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}(452);module.exports=s})();