"use strict";const fs=require("fs"),path=require("path"),{getReader:getReader,splitPath:splitPath}=require("./wxvpkgreader"),internalModuleReadFileSync=fs.readFileSync;fs.readFileSync=function(e,t){const[i,n,s]=splitPath(e);if(!i||!s)return internalModuleReadFileSync.apply(this,arguments);const l=getReader(n);let r=s.replace(/\\/g,"/");r=path.posix.resolve(r);const a=l.getFile(r);let c;return t?"[object String]"===Object.prototype.toString.call(t)&&(c={encoding:t,flag:"r"}):c={encoding:null,flag:"r"},(null==c?void 0:c.encoding)?a.toString(c.encoding):a};let nextInode=0;const uid=process.getuid?process.getuid():0,gid=process.getgid?process.getgid():0,fakeTime=Date.now(),internalModuleStatSync=fs.statSync;fs.statSync=function(e){const[t,i,n]=splitPath(e);if(!t)return internalModuleStatSync.apply(this,arguments);if(!n){const e=internalModuleStatSync.apply(this,arguments);return Object.assign(Object.assign({},e),{isFile:()=>!1,isDirectory:()=>!0,wxvpkg:!0})}const s=getReader(i);let l=n.replace(/\\/g,"/");l=path.posix.resolve(l);const r=s.stat(l);return{dev:1,ino:++nextInode,mode:33188,nlink:1,uid:uid,gid:gid,rdev:0,atime:r.atime||fakeTime,birthtime:r.birthtime||fakeTime,mtime:r.mtime||fakeTime,ctime:r.ctime||fakeTime,size:r.size,isFile:()=>r.isFile,isDirectory:()=>!r.isFile,isSymbolicLink:()=>!1,isBlockDevice:()=>!1,isCharacterDevice:()=>!1,isFIFO:()=>!1,isSocket:()=>!1}};const internalModuleExistSync=fs.existsSync;fs.existsSync=function(e){const[t,i,n]=splitPath(e);if(!t||!n)return internalModuleExistSync.apply(this,arguments);const s=getReader(i);let l=n.replace(/\\/g,"/");return l=path.posix.resolve(l),s.exists(l)},module.exports={internalModuleReadFileSync:internalModuleReadFileSync,internalModuleStatSync:internalModuleStatSync,internalModuleExistSync:internalModuleExistSync};