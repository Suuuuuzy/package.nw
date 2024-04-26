import*as Common from"../common/common.js";import*as Host from"../host/host.js";import{ActionRegistry}from"./ActionRegistry.js";import{SoftContextMenu}from"./SoftContextMenu.js";export class Item{constructor(t,e,s,n,i){this._type=e,this._label=s,this._disabled=n,this._checked=i,this._contextMenu=t,"item"!==e&&"checkbox"!==e||(this._id=t?t._nextId():0)}id(){return this._id}type(){return this._type}isEnabled(){return!this._disabled}setEnabled(t){this._disabled=!t}_buildDescriptor(){switch(this._type){case"item":{const t={type:"item",id:this._id,label:this._label,enabled:!this._disabled};return this._customElement&&(t.element=this._customElement),this._shortcut&&(t.shortcut=this._shortcut),t}case"separator":return{type:"separator"};case"checkbox":return{type:"checkbox",id:this._id,label:this._label,checked:!!this._checked,enabled:!this._disabled}}throw new Error("Invalid item type:"+this._type)}setShortcut(t){this._shortcut=t}}export class Section{constructor(t){this._contextMenu=t,this._items=[]}appendItem(t,e,s){const n=new Item(this._contextMenu,"item",t,s);return this._items.push(n),this._contextMenu._setHandler(n.id(),e),n}appendCustomItem(t){const e=new Item(this._contextMenu,"item","<custom>");return e._customElement=t,this._items.push(e),e}appendSeparator(){const t=new Item(this._contextMenu,"separator");return this._items.push(t),t}appendAction(t,e,s){const n=ActionRegistry.instance().action(t);if(!n)return void(s||console.error(`Action ${t} was not defined`));e||(e=n.title());const i=this.appendItem(e,n.execute.bind(n)),o=self.UI.shortcutRegistry.shortcutTitleForAction(t);o&&i.setShortcut(o)}appendSubMenuItem(t,e){const s=new SubMenu(this._contextMenu,t,e);return s._init(),this._items.push(s),s}appendCheckboxItem(t,e,s,n){const i=new Item(this._contextMenu,"checkbox",t,n,s);return this._items.push(i),this._contextMenu._setHandler(i.id(),e),i}}export class SubMenu extends Item{constructor(t,e,s){super(t,"subMenu",e,s),this._sections=new Map,this._sectionList=[]}_init(){_groupWeights.forEach(t=>this.section(t))}section(t){let e=t?this._sections.get(t):null;return e||(e=new Section(this._contextMenu),t?(this._sections.set(t,e),this._sectionList.push(e)):this._sectionList.splice(ContextMenu._groupWeights.indexOf("default"),0,e)),e}headerSection(){return this.section("header")}newSection(){return this.section("new")}revealSection(){return this.section("reveal")}clipboardSection(){return this.section("clipboard")}editSection(){return this.section("edit")}debugSection(){return this.section("debug")}viewSection(){return this.section("view")}defaultSection(){return this.section("default")}saveSection(){return this.section("save")}footerSection(){return this.section("footer")}_buildDescriptor(){const t={type:"subMenu",label:this._label,enabled:!this._disabled,subItems:[]},e=this._sectionList.filter(t=>!!t._items.length);for(const s of e){for(const e of s._items)t.subItems.push(e._buildDescriptor());s!==e.peekLast()&&t.subItems.push({type:"separator"})}return t}appendItemsAtLocation(t){for(const e of self.runtime.extensions("context-menu-item")){const s=e.descriptor().location||"";if(!s.startsWith(t+"/"))continue;const n=s.substr(t.length+1);n&&!n.includes("/")&&this.section(n).appendAction(e.descriptor().actionId)}}}Item._uniqueSectionName=0;export class ContextMenu extends SubMenu{constructor(t,e,s,n){super(null),this._contextMenu=this,super._init(),this._defaultSection=this.defaultSection(),this._pendingPromises=[],this._pendingTargets=[],this._event=t,this._useSoftMenu=!!e,this._x=void 0===s?t.x:s,this._y=void 0===n?t.y:n,this._handlers={},this._id=0;const i=t.deepElementFromPoint();i&&this.appendApplicableItems(i)}static initialize(){Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(Host.InspectorFrontendHostAPI.Events.SetUseSoftMenu,(function(t){ContextMenu._useSoftMenu=t.data}))}static installHandler(t){t.body.addEventListener("contextmenu",(function(t){new ContextMenu(t).show()}),!1)}_nextId(){return this._id++}show(){Promise.all(this._pendingPromises).then(function(t){if(ContextMenu._pendingMenu!==this)return;delete ContextMenu._pendingMenu;for(let e=0;e<t.length;++e){const s=t[e],n=this._pendingTargets[e];for(let t=0;t<s.length;++t){s[t].appendApplicableItems(this._event,this,n)}}this._pendingPromises=[],this._pendingTargets=[]}.bind(this)).then(this._innerShow.bind(this)),ContextMenu._pendingMenu=this,this._event.consume(!0)}discard(){this._softMenu&&this._softMenu.discard()}_innerShow(){const t=this._buildMenuDescriptors();if(this._useSoftMenu||ContextMenu._useSoftMenu||Host.InspectorFrontendHost.InspectorFrontendHostInstance.isHostedMode())this._softMenu=new SoftContextMenu(t,this._itemSelected.bind(this)),this._softMenu.show(this._event.target.ownerDocument,new AnchorBox(this._x,this._y,0,0));else{Host.InspectorFrontendHost.InspectorFrontendHostInstance.showContextMenuAtPoint(this._x,this._y,t,this._event.target.ownerDocument),setImmediate(function(){Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(Host.InspectorFrontendHostAPI.Events.ContextMenuCleared,this._menuCleared,this),Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(Host.InspectorFrontendHostAPI.Events.ContextMenuItemSelected,this._onItemSelected,this)}.bind(this))}}setX(t){this._x=t}setY(t){this._y=t}_setHandler(t,e){e&&(this._handlers[t]=e)}_buildMenuDescriptors(){return super._buildDescriptor().subItems}_onItemSelected(t){this._itemSelected(t.data)}_itemSelected(t){this._handlers[t]&&this._handlers[t].call(this),this._menuCleared()}_menuCleared(){Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(Host.InspectorFrontendHostAPI.Events.ContextMenuCleared,this._menuCleared,this),Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(Host.InspectorFrontendHostAPI.Events.ContextMenuItemSelected,this._onItemSelected,this)}containsTarget(t){return this._pendingTargets.indexOf(t)>=0}appendApplicableItems(t){this._pendingPromises.push(self.runtime.allInstances(Provider,t)),this._pendingTargets.push(t)}}export const _groupWeights=["header","new","reveal","edit","clipboard","debug","view","default","save","footer"];export class Provider{appendApplicableItems(t,e,s){}}ContextMenu._groupWeights=_groupWeights;