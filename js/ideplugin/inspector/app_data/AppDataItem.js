import*as UI from"../ui/ui.js";import*as JSONEditor from"../features/JSONEditor.js";import{contain}from"../third_party/licia.js";export default class AppDataItem extends UI.TreeOutline.TreeElement{constructor(t,i){const{path:e,data:s,editorFactory:a}=i;super(contain(e," ")?e.split(" ").pop():e,!0),this.listItemElement.classList.add("app-data-list-item"),this.setCollapsible(!1),t.addPage(this),this._panel=t,this._data=s,this._editorFactory=a;const o=UI.Icon.Icon.create("mediumicon-manifest");this.setLeadingIcons([o])}destroy(){this._panel.removePage(this),this._view&&this._view.destroy()}onselect(t){super.onselect(t),this._view||(this._view=JSONEditor.jsonEditorFactory.createEditor({cm:this._editorFactory,onChange:()=>{this._panel.onDataChange()},onEditable:t=>"__webviewId__"!==t.field,data:this._data})),this._panel.showView(this.title,this._view)}update(t){this._view?this._view.getJSONEditor().update(t):this._data=t}get(){return this._view?this._view.getJSONEditor().get():this._data}getJSONEditor(){if(this._view)return this._view.getJSONEditor()}}