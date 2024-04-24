import{VBox}from"./Widget.js";import{ZoomManager}from"./ZoomManager.js";export class RootView extends VBox{constructor(){super(),this.markAsRoot(),this.element.classList.add("root-view"),this.registerRequiredCSS("ui/rootView.css"),this.element.setAttribute("spellcheck","false")}attachToDocument(t){t.defaultView&&t.defaultView.addEventListener("resize",this.doResize.bind(this),!1),this._window=t.defaultView,this.doResize(),this.show(t.body)}doResize(){if(this._window){const t=this.constraints().minimum,e=ZoomManager.instance().zoomFactor(),i=Math.min(0,this._window.innerWidth-t.width/e);this.element.style.marginRight=i+"px";const s=Math.min(0,this._window.innerHeight-t.height/e);this.element.style.marginBottom=s+"px"}super.doResize()}}