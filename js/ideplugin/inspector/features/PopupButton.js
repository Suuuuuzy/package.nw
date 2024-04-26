import*as UI from"../ui/ui.js";import*as Common from"../common/common.js";import{contain}from"../third_party/licia.js";export default class PopupButton{constructor(){const t=createElement("div"),o=UI.Utils.createShadowRootWithCoreStyles(t,"features/PopupButton.css");this._element=o.createChild("div","popup-button"),t.addEventListener("click",()=>{wxMain.getMessenger().send({command:"Button.popup"})},!1),this._button=new UI.Toolbar.ToolbarItem(t),this._button.setTitle(Common.UIString.UIString("Undock into separate window")),!wxMain.isFeatureEnabled("popupButton")||this._isPopup()||this._isSimple()?this._button.setVisible(!1):this._button.setVisible(!0)}item(){return this._button}_isSimple(){const t=navigator.userAgent;return contain(t,"simple")}_isPopup(){const t=navigator.userAgent;return contain(t,"popup")}}