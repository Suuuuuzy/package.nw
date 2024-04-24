import*as Host from"../host/host.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";import{AccessibilitySubPane}from"./AccessibilitySubPane.js";const MAX_CHILD_ELEMENTS_THRESHOLD=300;export class SourceOrderPane extends AccessibilitySubPane{constructor(){super(ls`Source Order Viewer`),this._noNodeInfo=this.createInfo(ls`No source order information available`),this._warning=this.createInfo(ls`There may be a delay in displaying source order for elements with many children`),this._warning.id="source-order-warning",this._checked=!1,this._checkboxLabel=UI.UIUtils.CheckboxLabel.create(ls`Show source order`,!1),this._checkboxElement=this._checkboxLabel.checkboxElement,this._checkboxLabel.classList.add("source-order-checkbox"),this._checkboxElement.addEventListener("click",this._checkboxClicked.bind(this),!1),this.element.appendChild(this._checkboxLabel),this._node=null,this._overlayModel=null}async setNodeAsync(e){if(this._checkboxLabel.classList.contains("hidden")||(this._checked=this._checkboxElement.checked),this._checkboxElement.checked=!1,this._checkboxClicked(),super.setNode(e),!this._node)return void(this._overlayModel=null);let s=!1;const i=this._node.childNodeCount();if(i>0){this._node.children()||await this._node.getSubtree(1,!1);s=this._node.children().some(e=>e.nodeType()===Node.ELEMENT_NODE)}this._noNodeInfo.classList.toggle("hidden",s),this._warning.classList.toggle("hidden",i<300),this._checkboxLabel.classList.toggle("hidden",!s),s?(this._overlayModel=this._node.domModel().overlayModel(),this._checkboxElement.checked=this._checked,this._checkboxClicked()):this._overlayModel=null}_checkboxClicked(){this._node&&this._overlayModel&&(this._checkboxElement.checked?(Host.userMetrics.actionTaken(Host.UserMetrics.Action.SourceOrderViewActivated),this._overlayModel.highlightSourceOrderInOverlay(this._node)):this._overlayModel.hideSourceOrderInOverlay())}}