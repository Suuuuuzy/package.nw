"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const fs=require("fs"),path=require("path");let hackRequirePath="./hackrequire/index.js";function suicide(){try{setTimeout((()=>{process.kill(process.pid,"SIGTERM")}),5e3),process.exit(0)}catch(e){process.kill(process.pid,"SIGTERM")}}process.env.UNPACK_DIR_PATH&&(hackRequirePath=path.join(process.env.UNPACK_DIR_PATH,hackRequirePath)),fs.existsSync(hackRequirePath)&&require(hackRequirePath);try{const e=require("glob");process.on("message",(s=>{const r=e.sync("**",s);process.send(r)})),process.on("disconnect",suicide)}catch(e){console.error(e)}