import*as Common from"../common/common.js";import*as UI from"../ui/ui.js";export class LocationsSettingsTab extends UI.Widget.VBox{constructor(){super(!0),this.registerRequiredCSS("emulation/locationsSettingsTab.css"),this.contentElement.createChild("div","header").textContent=Common.UIString.UIString("Custom locations");const t=UI.UIUtils.createTextButton(Common.UIString.UIString("Add location…"),this._addButtonClicked.bind(this),"add-locations-button");this.contentElement.appendChild(t),this._list=new UI.ListWidget.ListWidget(this),this._list.element.classList.add("locations-list"),this._list.registerRequiredCSS("emulation/locationsSettingsTab.css"),this._list.show(this.contentElement),this._customSetting=Common.Settings.Settings.instance().moduleSetting("emulation.locations"),this._customSetting.addChangeListener(this._locationsUpdated,this),this.setDefaultFocusedElement(t)}wasShown(){super.wasShown(),this._locationsUpdated()}_locationsUpdated(){this._list.clear();const t=this._customSetting.get();for(let e=0;e<t.length;++e)this._list.appendItem(t[e],!0);this._list.appendSeparator()}_addButtonClicked(){this._list.addNewItem(this._customSetting.get().length,{title:"",lat:0,long:0,timezoneId:"",locale:""})}renderItem(t,e){const i=t,o=document.createElement("div");o.classList.add("locations-list-item");const n=o.createChild("div","locations-list-text locations-list-title").createChild("div","locations-list-title-text");return n.textContent=i.title,n.title=i.title,o.createChild("div","locations-list-separator"),o.createChild("div","locations-list-text").textContent=i.lat,o.createChild("div","locations-list-separator"),o.createChild("div","locations-list-text").textContent=i.long,o.createChild("div","locations-list-separator"),o.createChild("div","locations-list-text").textContent=i.timezoneId,o.createChild("div","locations-list-separator"),o.createChild("div","locations-list-text").textContent=i.locale,o}removeItemRequested(t,e){const i=this._customSetting.get();i.splice(e,1),this._customSetting.set(i)}commitEdit(t,e,i){const o=t;o.title=e.control("title").value.trim();const n=e.control("lat").value.trim();o.lat=n?parseFloat(n):0;const l=e.control("long").value.trim();o.long=l?parseFloat(l):0;const s=e.control("timezoneId").value.trim();o.timezoneId=s;const a=e.control("locale").value.trim();o.locale=a;const r=this._customSetting.get();i&&r.push(o),this._customSetting.set(r)}beginEdit(t){const e=t,i=this._createEditor();return i.control("title").value=e.title,i.control("lat").value=String(e.lat),i.control("long").value=String(e.long),i.control("timezoneId").value=e.timezoneId,i.control("locale").value=e.locale,i}_createEditor(){if(this._editor)return this._editor;const t=new UI.ListWidget.Editor;this._editor=t;const e=t.contentElement(),i=e.createChild("div","locations-edit-row");i.createChild("div","locations-list-text locations-list-title").textContent=Common.UIString.UIString("Location name"),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=Common.UIString.UIString("Lat"),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=Common.UIString.UIString("Long"),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=Common.UIString.UIString("Timezone ID"),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=Common.UIString.UIString("Locale");const o=e.createChild("div","locations-edit-row");o.createChild("div","locations-list-text locations-list-title locations-input-container").appendChild(t.createInput("title","text",ls`Location name`,(function(t,e,i){const o=i.value.trim();let n;o.length?o.length>50&&(n=ls`Location name must be less than ${50} characters`):n=ls`Location name cannot be empty`;if(n)return{valid:!1,errorMessage:n};return{valid:!0}}))),o.createChild("div","locations-list-separator locations-list-separator-invisible");let n=o.createChild("div","locations-list-text locations-input-container");return n.appendChild(t.createInput("lat","text",ls`Latitude`,(function(t,e,i){const o=i.value.trim(),n=Number(o);if(!o)return{valid:!0};let l;Number.isNaN(n)?l=ls`Latitude must be a number`:parseFloat(o)<-90?l=ls`Latitude must be greater than or equal to ${-90}`:parseFloat(o)>90&&(l=ls`Latitude must be less than or equal to ${90}`);if(l)return{valid:!1,errorMessage:l};return{valid:!0}}))),o.createChild("div","locations-list-separator locations-list-separator-invisible"),n=o.createChild("div","locations-list-text locations-list-text-longitude locations-input-container"),n.appendChild(t.createInput("long","text",ls`Longitude`,(function(t,e,i){const o=i.value.trim(),n=Number(o);if(!o)return{valid:!0};let l;Number.isNaN(n)?l=ls`Longitude must be a number`:parseFloat(o)<-180?l=ls`Longitude must be greater than or equal to ${-180}`:parseFloat(o)>180&&(l=ls`Longitude must be less than or equal to ${180}`);if(l)return{valid:!1,errorMessage:l};return{valid:!0}}))),o.createChild("div","locations-list-separator locations-list-separator-invisible"),n=o.createChild("div","locations-list-text locations-input-container"),n.appendChild(t.createInput("timezoneId","text",ls`Timezone ID`,(function(t,e,i){const o=i.value.trim();if(""===o||/[a-zA-Z]/.test(o))return{valid:!0};return{valid:!1,errorMessage:ls`Timezone ID must contain alphabetic characters`}}))),o.createChild("div","locations-list-separator locations-list-separator-invisible"),n=o.createChild("div","locations-list-text locations-input-container"),n.appendChild(t.createInput("locale","text",ls`Locale`,(function(t,e,i){const o=i.value.trim();if(""===o||/[a-zA-Z]{2}/.test(o))return{valid:!0};return{valid:!1,errorMessage:ls`Locale must contain alphabetic characters`}}))),t}}export let Item;