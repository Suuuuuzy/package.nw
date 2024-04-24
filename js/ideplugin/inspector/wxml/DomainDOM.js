import{isEmpty,clone,startWith,each,trim,contain,filter,lowerCase,uniqId,unique,sleep,css,toNum,nextTick,map}from"../third_party/licia.js";const InspecteeTypes={dom:"dom",exparser:"exparser"};class SourceTree{constructor(){this.reset()}getRootId(){return this._rootId}getParentNode(e){return this.getNode(e.parentId)}setRoot(e){this._rootId=e.nodeId,this.setNodeRecursively(e)}setNode(e){this._nodes[e.nodeId]=e}setNodeRecursively(e){this.setNode(e),e.children&&traverseChildNodes(e.children,e=>this.setNode(e))}removeNode(e){delete this._nodes[e],this._removedNodes[e]=!0}isNodeRemoved(e){return!!this._removedNodes[e]}removeNodeRecursively(e,t){const o=this.getNode(e),d=this.getNode(t||o.parentId);d&&(d.children=filter(d.children,t=>t.nodeId!==e),d.childNodeCount--),o.children&&traverseChildNodes(o.children,e=>this.removeNode(e.nodeId)),this.removeNode(o.nodeId)}insertNode(e,t,o){const d=this.getNode(o||e.parentId),r=d.children;if(d.childNodeCount++,t)for(let o=0,d=r.length;o<d;o++){if(r[o].nodeId===t){r.splice(o+1,0,e);break}}else r.push(e);this.setNodeRecursively(e)}getNode(e){return this._nodes[e]}modifyAttribute(e,t,o){const d=this.getNode(e),r=d.attributes||[];for(let e=0,d=r.length;e<d;e+=2)if(r[e]===t&&r[e+1]!==o)return void(r[e+1]=o);contain(r,t)||r.push(t,o),d.attributes=r}reset(){this._nodes={},this._rootId=0,this._removedNodes={}}static getAttribute(e,t){if(!e)return"";for(let o=0,d=e.length;o<d;o+=2)if(e[o]===t)return e[o+1];return""}}const chromeIdBase=1e7;class ChromeTree extends SourceTree{insertNode(e,t,o){const d=this.getNode(o||e.parentId),r=d.children;if(d.childNodeCount++,t)for(let o=0,d=r.length;o<d;o++){if(r[o].nodeId===t){r.splice(o+1,0,e);break}}else r.unshift(e);this.setNodeRecursively(e)}setChildNodes(e,t){const o=this.getNode(t);o.childNodeCount=e.length,o.children=e,traverseChildNodes(e,e=>this.setNodeRecursively(e))}setNode(e){super.setNode(e);const t=ChromeTree.getRemoteNodeId(e);t&&(this._remoteNodeIdMap[t]=e)}modifyAttribute(e,t,o){"wx:nodeid"===t&&(this._remoteNodeIdMap[o]=this.getNode(e)),super.modifyAttribute(e,t,o)}getNodeByRemoteNodeId(e){return this._remoteNodeIdMap[e]}removePseudoElement(e,t){const o=this.getNode(e);o.pseudoElements=o.pseudoElements.filter(e=>e.nodeId!==t)}addPseudoElement(e,t){const o=this.getNode(e);o.pseudoElements=o.pseudoElements||[],o.pseudoElements.push(t)}removeNode(e){const t=this.getNode(e),o=ChromeTree.getRemoteNodeId(t);o&&delete this._remoteNodeIdMap[o],super.removeNode(e)}reset(){super.reset(),this._remoteNodeIdMap={}}static getRemoteNodeId(e){return SourceTree.getAttribute(e.attributes,"wx:nodeid")}static toRemoteNodeId(e){return 1e7+e}static isChromeNode(e){return e>1e7&&e<2e7}static toNodeId(e){return e-1e7}}const shadowRootIdBase=2e7;class ShadowTree{constructor(e){this._tree=e,this.reset()}getShadowRoot(e){return this._shadowRoots[e]}createShadowRoot(e){const t=ShadowTree.toShadowRootId(e),o=this._tree.getNode(e),d={nodeId:t,localName:"",childNodeCount:o.childNodeCount,children:o.children,nodeName:"#document-fragment",nodeType:11,nodeValue:"",shadowRootType:"open"};return this._shadowRoots[e]=d,d}updateShadowRoot(e){const t=this._shadowRoots[e];if(t){const o=this._tree.getNode(e);t.childNodeCount=o.childNodeCount,t.children=o.children}}removeShadowRoot(e){delete this._shadowRoots[e]}getOrCreateShadowRoot(e){return this.getShadowRoot(e)||this.createShadowRoot(e)}reset(){this._shadowRoots={}}static toShadowRootId(e){return 2e7+e}static toCustomNodeId(e){return e-2e7}static isShadowRoot(e){return e>2e7&&e<3e7}static isSlotChildNode(e){if(void 0!==e.slotParentId)return e.slotParentId!==e.parentId;const t=SourceTree.getAttribute(e.attributes,"exparser:info-in-slot-of");return"undefined"!==t&&!!t}}class WxmlTree{constructor(e,t,o){this._tree=e,this._shadowTree=o,this._chromeTree=t,this.reset()}isHiddenTextNode(e){if(3===e.nodeType||1===e.nodeType){let t=this._tree.getParentNode(e);const o=SourceTree.getAttribute(t.attributes,"style");if("span"===t.localName&&"display:none;"===o)return!0;if("div"===t.localName){t=this._tree.getParentNode(t);if("wx-dev-textarea"===SourceTree.getAttribute(t.attributes,"class"))return!0}}return!1}getChildNodes(e,t=1){let o;if(o=showShadowRoot&&ShadowTree.isShadowRoot(e)?this._shadowTree.getShadowRoot(ShadowTree.toCustomNodeId(e)):this._tree.getNode(e),0===o.childNodeCount)return[];let d=clone(o.children||[]);if(d.length>0)if(WxmlTree.isWxmlNode(d[0])){if(WxmlTree.isCustomNode(o)&&showShadowRoot){const e=clone(d),t=[],r=o.componentId||SourceTree.getAttribute(o.attributes,"exparser:info-custom-component");for(;e.length>0;){const o=e.shift();if(WxmlTree.isWxmlNode(o)){if((o.slotParentId||SourceTree.getAttribute(o.attributes,"exparser:info-in-slot-of"))===r){t.push(o);continue}}if(o.childNodeCount>0&&o.childNodeCount>0){const t=o.children;for(let o=0,d=t.length;o<d;o++)e.push(t[o])}}d=t}}else{let e;const t=clone(d);for(;t.length>0;){const o=t.shift();if(WxmlTree.isWxmlNode(o)&&!wxmlTree.isHiddenTextNode(o)){e=this._tree.getNode(o.parentId);break}if(o.childNodeCount>0){const e=o.children;for(let o=0,d=e.length;o<d;o++)t.push(e[o])}}if(!e)return[];d=clone(e.children)}const r=[];for(let s=0,n=d.length;s<n;s++){let n=clone(d[s]);if(WxmlTree.isWxmlNode(n)){if(showShadowRoot&&ShadowTree.isSlotChildNode(n)){if((n.slotParentId||SourceTree.getAttribute(n.attributes,"exparser:info-in-slot-of"))!==(o.componentId||SourceTree.getAttribute(o.attributes,"exparser:info-component-id")))continue}if(this._addPseudoElements(n),showShadowRoot&&this._addShadowRoots(n,t),n=WxmlTree.toWxmlNode(n),n.parentId=e,-1===t){const e=this.getChildNodes(n.nodeId,-1);n.children=e,n.childNodeCount=e.length}else if(1===t){const e=this.getChildNodes(n.nodeId,0);1===e.length&&3===e[0].nodeType?n.children=e:delete n.children,n.childNodeCount=e.length}else if(t>1){const e=this.getChildNodes(n.nodeId,t-1);n.children=e,n.childNodeCount=e.length}0===n.childNodeCount&&(n.children||(n.children=[])),r.push(n)}}return r}getChildNodeCount(e){return this.getChildNodes(e.nodeId,0).length}getParentNode(e){let t=this._getParentNode(e);if(showShadowRoot&&ShadowTree.isSlotChildNode(e)){const o=e.slotParentId||SourceTree.getAttribute(e.attributes,"exparser:info-in-slot-of");for(;t;){if(WxmlTree.isWxmlNode(t)){if(o===(t.componentId||SourceTree.getAttribute(t.attributes,"exparser:info-component-id")))break}t=this._getParentNode(t)}}else for(;t&&!WxmlTree.isWxmlNode(t);)t=this._getParentNode(t);return t}_getParentNode(e){const t=this._tree;let o;return showShadowRoot&&ShadowTree.isShadowRoot(e.nodeId)&&(o=t.getNode(ShadowTree.toCustomNodeId(e.nodeId))),o||(o=t.getParentNode(e),o&&showShadowRoot&&WxmlTree.isCustomNode(o)&&(o=this._shadowTree.getOrCreateShadowRoot(o.nodeId))),o}collectClassNamesFromSubtree(e){const t=this._tree.getNode(e),o=[];return traverseNode(t,e=>{if(WxmlTree.isWxmlNode(e)){const t=e.attributes;if(!t)return;for(let e=0,d=t.length;e<d;e+=2)if("class"===t[e]){const d=t[e+1].split(/\s+/);for(const e of d)o.push(e);break}}}),unique(o)}getAttribute(e,t){const o=this._tree.getNode(e);if(o.attributes){const e=WxmlTree.toWxmlAttributes(o.attributes);for(let o=0,d=e.length;o<d;o+=2)if(e[o]===t)return e[o+1]}return""}reset(){this._tree.reset(),this._shadowTree.reset(),this._chromeTree.reset()}_addShadowRoots(e,t=1){if(!WxmlTree.isCustomNode(e))return;const o=WxmlTree.toWxmlNode(this._shadowTree.getOrCreateShadowRoot(e.nodeId)),d=this.getChildNodes(o.nodeId,t-1);1===t?delete o.children:o.children=d,o.childNodeCount=d.length,e.shadowRoots=[o]}_addPseudoElements(e){const t=this._chromeTree.getNodeByRemoteNodeId(e.nodeId);if(t&&t.pseudoElements){const o=t.pseudoElements;e.pseudoElements=[];for(let t=0,d=o.length;t<d;t++){const d=WxmlTree.toWxmlNode(o[t]);d.nodeId=ChromeTree.toRemoteNodeId(d.nodeId),e.pseudoElements.push(d)}}}static isWxmlNode(e){if(inspecteeType===InspecteeTypes.exparser)return!0;const t=e.localName;return!!contain(["body","tab-bar","::after","::before"],t)||(!!contain(["#document","#document-fragment"],e.nodeName)||"wx-content"!==t&&(3===e.nodeType||/^wx-/.test(t)))}static isValidAttribute(e){return!startWith(e,"exparser:")&&("wx:nodeid"!==e&&"wx:scope-data"!==e)}static toWxmlNode(e){if((e=clone(e)).backendNodeId=e.backendNodeId||e.nodeId,3===e.nodeType&&(delete e.attributes,delete e.childNodeCount,delete e.children),!WxmlTree.isWxmlNode(e))return e;const t=e.localName;return t&&(e.localName="body"===t?"page":e.localName.replace(/^wx-/,"")),"BODY"===e.nodeName?e.nodeName="PAGE":e.nodeName=e.nodeName.replace(/^WX-/,""),delete e.parentId,e.attributes&&(e.attributes=WxmlTree.toWxmlAttributes(e.attributes)),e}static toWxmlAttributes(e){const t=[],o={};for(let t=0,d=e.length;t<d;t+=2)o[e[t]]=!0;const d=WxmlTree.getClassPrefix(e);for(let r=0,s=e.length;r<s;r+=2){let s=e[r],n=e[r+1];if(""!==n&&((!startWith(s,"exparser:info-attr-")||(s=s.replace("exparser:info-attr-",""),!o[s]))&&WxmlTree.isValidAttribute(s))){if("class"===s&&d){if(d){let e=n.split(/\s+/);const t={};each(e,e=>{startWith(e,d)&&(t[e.replace(d,"")]=!0)}),e=filter(e,e=>!t[e]),e=map(e,e=>e.replace(d,"")),n=trim(e.join(" "))}}else if("style"===s){const e=/wxcs_style_([\w_-]+):\s?([\w-\.]+);/g;let t=e.exec(n);for(;t;){n=n.replace(t[0],"");const o=t[1]+":[\\w-.]+;?";n=n.replace(new RegExp(o),`${t[1]}:${t[2]};`),e.lastIndex=0,t=e.exec(n)}}t.push(s,n)}}return t}static getClassPrefix(e){let t="";for(let o=0,d=e.length;o<d;o+=2)"exparser:info-class-prefix"===e[o]&&(t=e[o+1]);return t}static isCustomNode(e){return!!e.component||(e.attributes?e.customId||contain(e.attributes,"exparser:info-custom-component"):void 0)}static hasVisited(e){return!!Wxml.target.model(SDK.DOMModel).nodeForId(e)}static hasChildrenVisited(e){const t=Wxml.target.model(SDK.DOMModel).nodeForId(e);return t&&null!==t.children()}}class Debuggee{constructor(){this._debuggeeMap={},Wxml.wxmlMessenger.on("CHANGE_DEBUGGEE",e=>{const t={},o=this._debuggeeMap;each(e.debuggeeMap,e=>{const d=e.targetId;t[d]=o[d]||e}),this._debuggeeMap=t,this._curDebuggee=t[e.debuggee.targetId]})}saveCurNodePath(e){this._curDebuggee.path=e}getCurNodePath(){return this._curDebuggee.path}}const tree=new SourceTree,shadowTree=new ShadowTree(tree),chromeTree=new ChromeTree,wxmlTree=new WxmlTree(tree,chromeTree,shadowTree),debuggee=new Debuggee;let showShadowRoot=!1,searchResults={},inspecteeType=InspecteeTypes.dom;export async function enable(){Wxml.remoteMessenger.on("debuggeeChanged",()=>{documentUpdated()})}export async function getDocument(){wxmlTree.reset(),searchResults={};const{root:e,baseURL:t,inspectee:o=InspecteeTypes.dom}=await Wxml.remoteMessenger.send("DOM.getDocument");inspecteeType=o,"RemoteDebug"!==wxMain.type&&await getChromeTree();const d=e.nodeId,r={nodeId:d,baseURL:t,childNodeCount:0,children:[],nodeName:"#document",nodeType:9,nodeValue:"",xmlVersion:""};let s=null;s=inspecteeType===InspecteeTypes.exparser?e.children[1]:await Wxml.remoteMessenger.send("DOM.querySelector",{nodeId:d,selector:"body"});const n=await requestRemoteChildNodes(s.nodeId,-1),i={nodeId:s.nodeId,nodeName:"BODY",localName:"body",parentId:d,attributes:[],childNodeCount:n.length,children:n,nodeType:1,nodeValue:""};let a;if(r.childNodeCount++,r.children.push(i),a=inspecteeType===InspecteeTypes.exparser?e.children[2]:await Wxml.remoteMessenger.send("DOM.querySelector",{nodeId:d,selector:"tab-bar"}),a){const e=await requestRemoteChildNodes(a.nodeId,-1);if(e.length){const t={nodeId:a.nodeId,nodeName:"TAB-BAR",localName:"tab-bar",parentId:d,attributes:[],childNodeCount:e.length,children:e,nodeType:1,nodeValue:""};r.childNodeCount++,r.children.push(t)}}tree.setRoot(r);const l=wxmlTree.getChildNodes(r.nodeId,2);return{root:{...r,childNodeCount:l.length,children:l}}}export async function setInspectedNode(e){const{nodeId:t}=e,o=Wxml.target.model(SDK.DOMModel).nodeForId(t);debuggee.saveCurNodePath(o.path())}export async function getComponentData(e){if(ChromeTree.isChromeNode(e.nodeId))return;const{nodeId:t}=e;await Wxml.remoteMessenger.send("DOM.getComponentData",{nodeId:t})}export async function setNodeValue(e){await Wxml.remoteMessenger.send("DOM.setNodeValue",e)}export async function scrollIntoView(e){await Wxml.remoteMessenger.send("DOM.scrollIntoView",e)}export async function setHideElement(e){await Wxml.remoteMessenger.send("DOM.setHideElement",e)}export function requestChildNodes(e){const{nodeId:t,depth:o=1}=e,d=wxmlTree.getChildNodes(t,o);Wxml.connection.trigger("DOM.setChildNodes",{parentId:t,nodes:d})}export async function setAttributesAsText(e){e.text=Wxml.transRpx(e.text),await Wxml.remoteMessenger.send("DOM.setAttributesAsText",e)}function isWxmlNode(e){return WxmlTree.isWxmlNode(tree.getNode(e))}function pushNodesToFrontEnd(e){const t=tree.getNode(e);if(!WxmlTree.isWxmlNode(t)||WxmlTree.hasVisited(t.nodeId))return;const o=[t];let d=wxmlTree.getParentNode(t);for(;d&&!WxmlTree.hasVisited(d.nodeId);)o.push(d),d=wxmlTree.getParentNode(d);Wxml.connection.trigger("DOM.setChildNodes",{parentId:d.nodeId,nodes:wxmlTree.getChildNodes(d.nodeId,o.length)})}export function pushNodesByBackendIdsToFrontend(e){const{backendNodeIds:t}=e;return each(t,e=>pushNodesToFrontEnd(e)),{nodeIds:t}}export async function removeNode(e){await Wxml.remoteMessenger.send("DOM.removeNode",e)}export async function setAttributeValue(e){await Wxml.remoteMessenger.send("DOM.setAttributeValue",e),await sleep(500)}export function collectClassNamesFromSubtree(e){return{classNames:wxmlTree.collectClassNamesFromSubtree(e.nodeId)}}export function performSearch(e){const t=lowerCase(e.query),o=tree.getRootId(),d=[];traverseChildNodes(wxmlTree.getChildNodes(o,-1),e=>d.push(e),{shadowRoot:!0});const r=[];for(let e=0,o=d.length;e<o;e++){const o=d[e],{nodeType:s}=o;if(1===s){const e=lowerCase(o.localName);if(contain(`<${e} `,t)||contain(`</${e}>`,t))r.push(o.nodeId);else{const{attributes:e}=o;for(let d=0,s=e.length;d<s;d++){const s=lowerCase(e[d]);if(contain(s,t)){r.push(o.nodeId);break}}}}else if(3===s){const e=lowerCase(o.nodeValue);contain(e,t)&&r.push(o.nodeId)}}const s=uniqId();return searchResults[s]=r,{searchId:s,resultCount:r.length}}export function getSearchResults(e){const{searchId:t,fromIndex:o,toIndex:d}=e,r=searchResults[t].slice(o,d);return each(r,pushNodesToFrontEnd),{nodeIds:r}}export function discardSearchResults(e){delete searchResults[e.searchId]}export function pushNodeByPathToFrontend(e){const t=debuggee.getCurNodePath();if(t){let e=tree.getNode(tree.getRootId());const o=t.split(",");for(;o.length>0;){const t=o.shift(),d=o.shift();if("a"===t&&"#document-fragment"===d){const{shadowRoots:t}=e;if(!t||!t[0])break;e=t[0]}else{const o=e.nodeId,r=wxmlTree.getChildNodes(o);if(e=r[t],!e||e.nodeName!==d)break;WxmlTree.hasVisited(e.nodeId)||Wxml.connection.trigger("DOM.setChildNodes",{parentId:o,nodes:r})}}if(isEmpty(o))return{nodeId:e.nodeId}}}Wxml.remoteMessenger.on("message",({method:e,params:t})=>{switch(e){case"DOM.documentUpdated":documentUpdated();break;case"DOM.attributeRemoved":attributeModified(t.nodeId,t.name,"");break;case"DOM.attributeModified.EventList":each(t,(e,t)=>{each(e,(e,o)=>{attributeModified(t,o,e)})});break;case"DOM.childNodeMutation.EventList":for(let e=0,o=t.length;e<o;e++){const o=t[e],{type:d}=o;if("DOM.childNodeInserted"===d){const{node:e,previousNodeId:t}=o.params;childNodeInserted(e,t)}else if("DOM.childNodeRemoved"===d){const{nodeId:e}=o.params;childNodeRemoved(e)}}break;case"DOM.characterDataModified.EventList":each(t,(e,t)=>{characterDataModified(t,e.characterData)});break;case"DOM.attributeModified":attributeModified(t.nodeId,t.name,t.value);break;case"DOM.childNodeInserted":const{node:e,previousNodeId:o}=t;childNodeInserted(e,o);break;case"DOM.childNodeRemoved":const{nodeId:d}=t;childNodeRemoved(d);break;case"DOM.characterDataModified":characterDataModified(t.nodeId,t.characterData)}});let documentUpdatedCallbacks={},documentUpdatedTimer=null;function documentUpdated(){documentUpdatedTimer&&clearTimeout(documentUpdatedTimer),documentUpdatedTimer=setTimeout(()=>{Wxml.connection.resolveAllMessages(),setTimeout(()=>{each(documentUpdatedCallbacks,e=>e()),documentUpdatedCallbacks={};delete Wxml.target.model(SDK.DOMModel)._pendingDocumentRequestPromise,Wxml.connection.trigger("DOM.documentUpdated"),documentUpdatedTimer=null},500)},500)}function characterDataModified(e,t){const o=tree.getNode(e);if(!o)return documentUpdated();o.nodeValue!==t&&(o.nodeValue=t,WxmlTree.hasVisited(e)&&Wxml.connection.trigger("DOM.characterDataModified",{nodeId:e,characterData:t}))}function childNodeInserted(e,t){if("body"!==e.localName&&"tab-bar"!==e.localName||(e.parentId=tree.getRootId()),!tree.getNode(e.parentId))return documentUpdated();if(tree.getNode(e.nodeId))return;tree.insertNode(e,t),shadowTree.updateShadowRoot(e.parentId);const o=wxmlTree.getParentNode(e);if(WxmlTree.hasVisited(o.nodeId)){if(wxmlTree.isHiddenTextNode(e))return;const t=wxmlTree.getChildNodes(o.nodeId);if(Wxml.connection.trigger("DOM.childNodeCountUpdated",{nodeId:o.nodeId,childNodeCount:t.length}),WxmlTree.isWxmlNode(e)&&WxmlTree.hasChildrenVisited(o.nodeId)){delete(e=WxmlTree.toWxmlNode(e)).children,e.childNodeCount=wxmlTree.getChildNodeCount(e);const d={node:e,parentNodeId:o.nodeId};for(let o=0,r=t.length;o<r;o++)if(t[o].nodeId===e.nodeId&&o>0){d.previousNodeId=t[o-1].nodeId;break}Wxml.connection.trigger("DOM.childNodeInserted",d)}}}function childNodeRemoved(e){const t=tree.getNode(e);if(!t)return documentUpdated();const o=wxmlTree.getParentNode(t);WxmlTree.hasVisited(o.nodeId)&&(Wxml.connection.trigger("DOM.childNodeCountUpdated",{nodeId:o.nodeId,childNodeCount:wxmlTree.getChildNodeCount(o)}),WxmlTree.hasVisited(t.nodeId)&&WxmlTree.isWxmlNode(t)&&Wxml.connection.trigger("DOM.childNodeRemoved",{nodeId:e,parentNodeId:o.nodeId})),tree.removeNodeRecursively(e),shadowTree.removeShadowRoot(e),shadowTree.updateShadowRoot(t.parentId)}async function getChromeTree(){const{root:e}=await Wxml.chromeMessenger.send("DOM.getDocument",{depth:-1});let t,o=-1;traverseChildNodes(e.children,e=>{const d=e.contentDocument;if(!d)return;const r=toNum(getStyle(e.attributes,"z-index"));t?r>o&&(t=d,o=r):(t=d,o=r)}),t?(chromeTree.setRoot(t),Wxml.chromeMessenger.send("DOM.requestChildNodes",{nodeId:t.nodeId,depth:-1})):chromeTree.setRoot(e)}function getStyle(e,t){const o=SourceTree.getAttribute(e,"style");if(!o)return"";const d=css.parse(`.name {${o}}`).rules[0].declarations;for(let e=0,o=d.length;e<o;e++){const{property:o,value:r}=d[e];if(o===t)return r}return""}function attributeModified(e,t,o,d=!1){if(!tree.getNode(e)){if(tree.isNodeRemoved(e))return;return void(d?documentUpdated():setTimeout(()=>{attributeModified(e,t,o,!0)},1e3))}tree.modifyAttribute(e,t,o);const r=tree.getNode(e);WxmlTree.isWxmlNode(r)&&WxmlTree.isValidAttribute(t)&&(""===o?Wxml.connection.trigger("DOM.attributeRemoved",{nodeId:e,name:t}):("style"!==t&&"class"!==t||(o=wxmlTree.getAttribute(e,t)),Wxml.connection.trigger("DOM.attributeModified",{nodeId:e,name:t,value:o})))}function requestRemoteChildNodes(e,t=1){return new Promise(async o=>{Wxml.remoteMessenger.send("DOM.requestChildNodes",{nodeId:e,depth:t});const d=uniqId();function r({method:t,params:r}){"DOM.setChildNodes"===t&&r.parentId===e&&(o(r.nodes),nextTick(()=>s()),delete documentUpdatedCallbacks[d])}function s(){Wxml.remoteMessenger.off("message",r)}documentUpdatedCallbacks[d]=function(){s(),o([])},Wxml.remoteMessenger.on("message",r)})}function traverseNode(e,t){t(e),e.children&&traverseChildNodes(e.children,t)}function traverseChildNodes(e,t,o={}){for(let d=0,r=e.length;d<r;d++){const r=e[d];t(r),r.children&&!isEmpty(r.children)&&traverseChildNodes(r.children,t,o),o.shadowRoot&&r.shadowRoots&&!isEmpty(r.shadowRoots)&&traverseChildNodes(wxmlTree.getChildNodes(r.shadowRoots[0].nodeId,-1),t,o)}}"RemoteDebug"!==wxMain.type&&Wxml.chromeMessenger.on("message",({method:e,params:t})=>{switch(e){case"DOM.setChildNodes":{const{nodes:e,parentId:o}=t;chromeTree.setChildNodes(e,o),traverseChildNodes(e,e=>{const t=e.pseudoElements;if(!t)return;const o=ChromeTree.getRemoteNodeId(e);if(WxmlTree.hasVisited(o))for(let e=0,d=t.length;e<d;e++){const d=t[e],r=WxmlTree.toWxmlNode(d);r.nodeId=ChromeTree.toRemoteNodeId(d.nodeId),Wxml.connection.trigger("DOM.pseudoElementAdded",{parentId:o,pseudoElement:r})}});break}case"DOM.childNodeInserted":{const{node:e,previousNodeId:o,parentNodeId:d}=t;chromeTree.insertNode(e,o,d);break}case"DOM.childNodeRemoved":{const{nodeId:e,parentNodeId:o}=t;chromeTree.removeNodeRecursively(e,o);break}case"DOM.attributeModified":{const{nodeId:e,name:o,value:d}=t;chromeTree.modifyAttribute(e,o,d);break}case"DOM.pseudoElementRemoved":{const{parentId:e,pseudoElementId:o}=t;chromeTree.removePseudoElement(e,o);const d=chromeTree.getNode(e),r=ChromeTree.getRemoteNodeId(d);WxmlTree.hasVisited(r)&&Wxml.connection.trigger("DOM.pseudoElementRemoved",{parentId:r,pseudoElementId:ChromeTree.toRemoteNodeId(o)});break}case"DOM.pseudoElementAdded":{const{parentId:e,pseudoElement:o}=t;chromeTree.addPseudoElement(e,o);const d=chromeTree.getNode(e),r=ChromeTree.getRemoteNodeId(d);if(WxmlTree.hasVisited(r)){const e=WxmlTree.toWxmlNode(o);e.nodeId=ChromeTree.toRemoteNodeId(o.nodeId),Wxml.connection.trigger("DOM.pseudoElementAdded",{parentId:r,pseudoElement:e})}break}}}),Wxml.wxmlMessenger.on("SEND_STARTINFO",e=>{showShadowRoot=e.showShadowRoot}),self.Wxml=self.Wxml||{},Wxml=Wxml||{},Wxml.tree=tree,Wxml.chromeTree=chromeTree,Wxml.shadowTree=shadowTree,Wxml.wxmlTree=wxmlTree,Wxml.SourceTree=SourceTree,Wxml.WxmlTree=WxmlTree,Wxml.ChromeTree=ChromeTree,Wxml.ShadowTree=ShadowTree,Wxml.pushNodesToFrontEnd=pushNodesToFrontEnd,Wxml.isWxmlNode=isWxmlNode;