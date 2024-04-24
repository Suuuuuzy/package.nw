import*as Host from"../host/host.js";import*as Platform from"../platform/platform.js";import{Action}from"./Action.js";import{ActionRegistry}from"./ActionRegistry.js";import{Context}from"./Context.js";import{Dialog}from"./Dialog.js";import{Descriptor,KeyboardShortcut,Modifiers,Type}from"./KeyboardShortcut.js";import{isEditing}from"./UIUtils.js";export class ShortcutRegistry{constructor(t){this._actionRegistry=t,this._keyToShortcut=new Platform.Multimap,this._actionToShortcut=new Platform.Multimap,this._keyMap=new ShortcutTreeNode(0,0),this._activePrefixKey=null,this._activePrefixTimeout=null,this._consumePrefix=null,this._devToolsDefaultShortcutActions=new Set;const e=self.Common.settings.moduleSetting("activeKeybindSet");Root.Runtime.experiments.isEnabled("customKeyboardShortcuts")||e.get()===DefaultShortcutSetting||e.set(DefaultShortcutSetting),e.addChangeListener(t=>{Host.userMetrics.keybindSetSettingChanged(t.data),this._registerBindings()}),this._registerBindings()}_applicableActions(t,e={}){let o=[];const i=(this._activePrefixKey||this._keyMap).getNode(t);i&&(o=i.actions());const r=this._actionRegistry.applicableActions(o,Context.instance());if(i)for(const t of Object.keys(e))if(i.actions().indexOf(t)>=0){const e=this._actionRegistry.action(t);e&&r.push(e)}return r}shortcutsForAction(t){return[...this._actionToShortcut.get(t)]}globalShortcutKeys(){const t=[];for(const e of this._keyMap.chords().values()){const o=e.actions();(this._actionRegistry.applicableActions(o,Context.instance()).length||e.hasChords())&&t.push(e.key())}return t}shortcutDescriptorsForAction(t){return[...this._actionToShortcut.get(t)].map(t=>t.descriptors[0])}keysForActions(t){const e=t.flatMap(t=>[...this._actionToShortcut.get(t)].flatMap(t=>t.descriptors.map(t=>t.key)));return[...new Set(e)]}shortcutTitleForAction(t){const e=this._actionToShortcut.get(t);if(e.size)return e.firstValue().title()}handleShortcut(t,e){this.handleKey(KeyboardShortcut.makeKeyFromEvent(t),t.key,t,e)}actionHasDefaultShortcut(t){return this._devToolsDefaultShortcutActions.has(t)}addShortcutListener(t,e){const o=new ShortcutTreeNode(0,0);Object.keys(e).flatMap(t=>[...this._actionToShortcut.get(t)]).forEach(t=>{o.addKeyMapping(t.descriptors.map(t=>t.key),t.action)}),t.addEventListener("keydown",t=>{const i=KeyboardShortcut.makeKeyFromEvent(t);let r=o;this._activePrefixKey&&(r=r.getNode(this._activePrefixKey.key()),!r)||r.getNode(i)&&this.handleShortcut(t,e)})}async handleKey(t,e,o,i){const r=t>>8,s=!!i||!!this._activePrefixKey,n=this._keyMap.getNode(t),c=this._applicableActions(t,i).length>0||n&&n.hasChords();if((s||!function(){if(!o||!isEditing()||/^F\d+|Control|Shift|Alt|Meta|Escape|Win|U\+001B$/.test(e))return!1;if(!r)return!0;const i=Modifiers;if(Host.Platform.isMac()){if(KeyboardShortcut.makeKey("z",i.Meta)===t)return!0;if(KeyboardShortcut.makeKey("z",i.Meta|i.Shift)===t)return!0}else{if(KeyboardShortcut.makeKey("z",i.Ctrl)===t)return!0;if(KeyboardShortcut.makeKey("y",i.Ctrl)===t)return!0;if(!Host.Platform.isWin()&&KeyboardShortcut.makeKey("z",i.Ctrl|i.Shift)===t)return!0}if((r&(i.Ctrl|i.Alt))==(i.Ctrl|i.Alt))return Host.Platform.isWin();return!a(i.Ctrl)&&!a(i.Alt)&&!a(i.Meta)}())&&c&&!KeyboardShortcut.isModifier(KeyboardShortcut.keyCodeAndModifiersFromKey(t).keyCode)&&(o&&o.consume(!0),s||!Dialog.hasInstance())){if(this._activePrefixTimeout){clearTimeout(this._activePrefixTimeout);const t=await h.call(this);if(this._activePrefixKey=null,this._activePrefixTimeout=null,t)return;this._consumePrefix&&await this._consumePrefix()}n&&n.hasChords()?(this._activePrefixKey=n,this._consumePrefix=async()=>{this._activePrefixKey=null,this._activePrefixTimeout=null,await h.call(this)},this._activePrefixTimeout=setTimeout(this._consumePrefix,KeyTimeout)):await h.call(this)}function a(t){return!!(r&t)}async function h(){const e=this._applicableActions(t,i);if(!e.length)return!1;for(const t of e){let e;if(i&&i[t.id()]&&(e=await i[t.id()]()),i||(e=await t.execute()),e)return Host.userMetrics.keyboardShortcutFired(t.id()),!0}return!1}}_registerShortcut(t){this._actionToShortcut.set(t.action,t),this._keyMap.addKeyMapping(t.descriptors.map(t=>t.key),t.action)}_registerBindings(){this._keyToShortcut.clear(),this._actionToShortcut.clear(),this._keyMap.clear();const t=self.Common.settings.moduleSetting("activeKeybindSet").get(),e=self.runtime.extensions("action"),o=[];function i(t){if(!t)return!0;const e=t.split(",");let o=!1;const i=Host.Platform.platform();for(let t=0;!o&&t<e.length;++t)o=e[t]===i;return o}function r(e){return!e||e.includes(t)}e.forEach((function(t){const e=t.descriptor(),s=e.bindings;for(let t=0;s&&t<s.length;++t){const n=s[t].keybindSets;if(!i(s[t].platform)||!r(n))continue;const c=s[t].shortcut.split(/\s+/).map(KeyboardShortcut.makeDescriptorFromBindingShortcut);if(c.length>0){const t=e.actionId;ForwardedActions.has(t)&&o.push(...c.map(t=>KeyboardShortcut.keyCodeAndModifiersFromKey(t.key))),n?(n.includes(DefaultShortcutSetting)&&this._devToolsDefaultShortcutActions.add(t),this._registerShortcut(new KeyboardShortcut(c,t,Type.KeybindSetShortcut,new Set(n)))):(this._devToolsDefaultShortcutActions.add(t),this._registerShortcut(new KeyboardShortcut(c,t,Type.DefaultShortcut)))}}}),this),Host.InspectorFrontendHost.InspectorFrontendHostInstance.setWhitelistedShortcuts(JSON.stringify(o))}}export class ShortcutTreeNode{constructor(t,e=0){this._key=t,this._actions=[],this._chords=new Map,this._depth=e}addAction(t){this._actions.push(t)}key(){return this._key}chords(){return this._chords}hasChords(){return this._chords.size>0}addKeyMapping(t,e){if(!(t.length<this._depth))if(t.length===this._depth)this.addAction(e);else{const o=t[this._depth];this._chords.has(o)||this._chords.set(o,new ShortcutTreeNode(o,this._depth+1)),this._chords.get(o).addKeyMapping(t,e)}}getNode(t){return this._chords.get(t)||null}actions(){return this._actions}clear(){this._actions=[],this._chords=new Map}}export class ForwardedShortcut{}ForwardedShortcut.instance=new ForwardedShortcut;export const ForwardedActions=new Set(["main.toggle-dock","debugger.toggle-breakpoints-active","debugger.toggle-pause","commandMenu.show","console.show"]);export const KeyTimeout=1e3;export const DefaultShortcutSetting="devToolsDefault";