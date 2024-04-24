import{registerCustomElement}from"./utils/register-custom-element.js";let iconConstructor=null;export class Icon extends HTMLSpanElement{constructor(){super(),this._descriptor=null,this._spriteSheet=null,this._iconType=""}static create(i,s){iconConstructor||(iconConstructor=registerCustomElement("span","ui-icon",Icon));const e=iconConstructor();return s&&(e.className=s),i&&e.setIconType(i),e}setIconType(i){this._descriptor&&(this.style.removeProperty("--spritesheet-position"),this.style.removeProperty("width"),this.style.removeProperty("height"),this._toggleClasses(!1),this._iconType="",this._descriptor=null,this._spriteSheet=null);const s=descriptors.get(i)||null;if(s){if(this._iconType=i,this._descriptor=s,this._spriteSheet=spriteSheets.get(this._descriptor.spritesheet)||null,!this._spriteSheet)throw new Error(`ERROR: icon ${this._iconType} has unknown spritesheet: ${this._descriptor.spritesheet}`);this.style.setProperty("--spritesheet-position",this._propertyValue()),this.style.setProperty("width",this._spriteSheet.cellWidth+"px"),this.style.setProperty("height",this._spriteSheet.cellHeight+"px"),this._toggleClasses(!0)}else if(i)throw new Error("ERROR: failed to find icon descriptor for type: "+i)}_toggleClasses(i){this._descriptor&&(this.classList.toggle("spritesheet-"+this._descriptor.spritesheet,i),this.classList.toggle(this._iconType,i),this.classList.toggle("icon-mask",i&&!!this._descriptor.isMask),this.classList.toggle("icon-invert",i&&!!this._descriptor.invert))}_propertyValue(){if(!this._descriptor||!this._spriteSheet)throw new Error("Descriptor and spriteSheet expected to be present");if(!this._descriptor.coordinates){if(!this._descriptor.position||!_positionRegex.test(this._descriptor.position))throw new Error(`ERROR: icon '${this._iconType}' has malformed position: '${this._descriptor.position}'`);const i=this._descriptor.position[0].toLowerCase().charCodeAt(0)-97,s=parseInt(this._descriptor.position.substring(1),10)-1;this._descriptor.coordinates={x:-(this._spriteSheet.cellWidth+this._spriteSheet.padding)*i,y:(this._spriteSheet.cellHeight+this._spriteSheet.padding)*(s+1)-this._spriteSheet.padding}}return`${this._descriptor.coordinates.x}px ${this._descriptor.coordinates.y}px`}}const _positionRegex=/^[a-z][1-9][0-9]*$/,spriteSheets=new Map([["smallicons",{cellWidth:10,cellHeight:10,padding:10}],["mediumicons",{cellWidth:16,cellHeight:16,padding:0}],["largeicons",{cellWidth:28,cellHeight:24,padding:0}],["arrowicons",{cellWidth:19,cellHeight:19,padding:0}]]),initialDescriptors=new Map([["smallicon-bezier",{position:"a5",spritesheet:"smallicons",isMask:!0}],["smallicon-checkmark",{position:"b5",spritesheet:"smallicons"}],["smallicon-checkmark-square",{position:"b6",spritesheet:"smallicons",isMask:!0}],["smallicon-checkmark-behind",{position:"d6",spritesheet:"smallicons",isMask:!0}],["smallicon-command-result",{position:"a4",spritesheet:"smallicons"}],["smallicon-contrast-ratio",{position:"a6",spritesheet:"smallicons",isMask:!0}],["smallicon-cross",{position:"b4",spritesheet:"smallicons"}],["smallicon-device",{position:"c5",spritesheet:"smallicons"}],["smallicon-error",{position:"c4",spritesheet:"smallicons"}],["smallicon-expand-less",{position:"f5",spritesheet:"smallicons",isMask:!0}],["smallicon-expand-more",{position:"e6",spritesheet:"smallicons",isMask:!0}],["smallicon-green-arrow",{position:"a3",spritesheet:"smallicons"}],["smallicon-green-ball",{position:"b3",spritesheet:"smallicons"}],["smallicon-info",{position:"c3",spritesheet:"smallicons"}],["smallicon-inline-breakpoint-conditional",{position:"d4",spritesheet:"smallicons"}],["smallicon-inline-breakpoint",{position:"d5",spritesheet:"smallicons"}],["smallicon-no",{position:"c6",spritesheet:"smallicons",isMask:!0}],["smallicon-orange-ball",{position:"d3",spritesheet:"smallicons"}],["smallicon-red-ball",{position:"a2",spritesheet:"smallicons"}],["smallicon-shadow",{position:"b2",spritesheet:"smallicons",isMask:!0}],["smallicon-step-in",{position:"c2",spritesheet:"smallicons"}],["smallicon-step-out",{position:"d2",spritesheet:"smallicons"}],["smallicon-text-prompt",{position:"e5",spritesheet:"smallicons"}],["smallicon-thick-left-arrow",{position:"e4",spritesheet:"smallicons"}],["smallicon-thick-right-arrow",{position:"e3",spritesheet:"smallicons"}],["smallicon-triangle-down",{position:"e2",spritesheet:"smallicons",isMask:!0}],["smallicon-triangle-right",{position:"a1",spritesheet:"smallicons",isMask:!0}],["smallicon-triangle-up",{position:"b1",spritesheet:"smallicons",isMask:!0}],["smallicon-user-command",{position:"c1",spritesheet:"smallicons"}],["smallicon-warning",{position:"d1",spritesheet:"smallicons"}],["smallicon-network-product",{position:"e1",spritesheet:"smallicons"}],["smallicon-clear-warning",{position:"f1",spritesheet:"smallicons",isMask:!0}],["smallicon-clear-info",{position:"f2",spritesheet:"smallicons"}],["smallicon-clear-error",{position:"f3",spritesheet:"smallicons"}],["smallicon-account-circle",{position:"f4",spritesheet:"smallicons"}],["smallicon-videoplayer-paused",{position:"f6",spritesheet:"smallicons",isMask:!0}],["smallicon-videoplayer-playing",{position:"g6",spritesheet:"smallicons",isMask:!0}],["smallicon-videoplayer-destroyed",{position:"g5",spritesheet:"smallicons",isMask:!0}],["smallicon-issue-yellow-text",{position:"g1",spritesheet:"smallicons"}],["smallicon-issue-blue-text",{position:"g2",spritesheet:"smallicons"}],["mediumicon-clear-storage",{position:"a4",spritesheet:"mediumicons",isMask:!0}],["mediumicon-cookie",{position:"b4",spritesheet:"mediumicons",isMask:!0}],["mediumicon-database",{position:"c4",spritesheet:"mediumicons",isMask:!0}],["mediumicon-info",{position:"c1",spritesheet:"mediumicons",isMask:!0}],["mediumicon-manifest",{position:"d4",spritesheet:"mediumicons",isMask:!0}],["mediumicon-service-worker",{position:"a3",spritesheet:"mediumicons",isMask:!0}],["mediumicon-table",{position:"b3",spritesheet:"mediumicons",isMask:!0}],["mediumicon-arrow-in-circle",{position:"c3",spritesheet:"mediumicons",isMask:!0}],["mediumicon-file-sync",{position:"d3",spritesheet:"mediumicons",invert:!0}],["mediumicon-file",{position:"a2",spritesheet:"mediumicons",invert:!0}],["mediumicon-gray-cross-active",{position:"b2",spritesheet:"mediumicons"}],["mediumicon-gray-cross-hover",{position:"c2",spritesheet:"mediumicons"}],["mediumicon-red-cross-active",{position:"d2",spritesheet:"mediumicons"}],["mediumicon-red-cross-hover",{position:"a1",spritesheet:"mediumicons"}],["mediumicon-search",{position:"b1",spritesheet:"mediumicons"}],["mediumicon-replace",{position:"c5",spritesheet:"mediumicons",isMask:!0}],["mediumicon-account-circle",{position:"e4",spritesheet:"mediumicons",isMask:!0}],["mediumicon-warning-triangle",{position:"e1",spritesheet:"mediumicons"}],["mediumicon-error-circle",{position:"e3",spritesheet:"mediumicons"}],["mediumicon-info-circle",{position:"e2",spritesheet:"mediumicons"}],["mediumicon-bug",{position:"d1",spritesheet:"mediumicons",isMask:!0}],["mediumicon-list",{position:"e5",spritesheet:"mediumicons",isMask:!0}],["mediumicon-warning",{position:"d5",spritesheet:"mediumicons",isMask:!0}],["mediumicon-sync",{position:"a5",spritesheet:"mediumicons",isMask:!0}],["mediumicon-fetch",{position:"b5",spritesheet:"mediumicons",isMask:!0}],["mediumicon-cloud",{position:"a6",spritesheet:"mediumicons",isMask:!0}],["mediumicon-bell",{position:"b6",spritesheet:"mediumicons",isMask:!0}],["mediumicon-payment",{position:"c6",spritesheet:"mediumicons",isMask:!0}],["mediumicon-schedule",{position:"d6",spritesheet:"mediumicons",isMask:!0}],["mediumicon-frame",{position:"e6",spritesheet:"mediumicons",isMask:!0}],["mediumicon-frame-embedded",{position:"f6",spritesheet:"mediumicons",isMask:!0}],["mediumicon-frame-opened",{position:"f5",spritesheet:"mediumicons",isMask:!0}],["mediumicon-frame-embedded-blocked",{position:"f4",spritesheet:"mediumicons",isMask:!0}],["mediumicon-frame-blocked",{position:"g4",spritesheet:"mediumicons",isMask:!0}],["mediumicon-elements-panel",{position:"f3",spritesheet:"mediumicons",isMask:!0}],["mediumicon-network-panel",{position:"f2",spritesheet:"mediumicons",isMask:!0}],["mediumicon-sources-panel",{position:"g1",spritesheet:"mediumicons",isMask:!0}],["mediumicon-frame-top",{position:"f1",spritesheet:"mediumicons",isMask:!0}],["mediumicon-checkmark",{position:"g2",spritesheet:"mediumicons",isMask:!0}],["mediumicon-not-available",{position:"g3",spritesheet:"mediumicons",isMask:!0}],["mediumicon-warning-circle",{position:"g5",spritesheet:"mediumicons",isMask:!0}],["badge-navigator-file-sync",{position:"a9",spritesheet:"largeicons"}],["largeicon-add",{position:"a8",spritesheet:"largeicons",isMask:!0}],["largeicon-camera",{position:"b7",spritesheet:"largeicons",isMask:!0}],["largeicon-center",{position:"c9",spritesheet:"largeicons",isMask:!0}],["largeicon-checkmark",{position:"c8",spritesheet:"largeicons",isMask:!0}],["largeicon-chevron",{position:"c7",spritesheet:"largeicons",isMask:!0}],["largeicon-clear",{position:"a6",spritesheet:"largeicons",isMask:!0}],["largeicon-copy",{position:"b6",spritesheet:"largeicons",isMask:!0}],["largeicon-deactivate-breakpoints",{position:"c6",spritesheet:"largeicons",isMask:!0}],["largeicon-delete",{position:"d9",spritesheet:"largeicons",isMask:!0}],["largeicon-dock-to-bottom",{position:"d8",spritesheet:"largeicons",isMask:!0}],["largeicon-dock-to-left",{position:"d7",spritesheet:"largeicons",isMask:!0}],["largeicon-dock-to-right",{position:"d6",spritesheet:"largeicons",isMask:!0}],["largeicon-download",{position:"h6",spritesheet:"largeicons",isMask:!0}],["largeicon-edit",{position:"a5",spritesheet:"largeicons",isMask:!0}],["largeicon-eyedropper",{position:"b5",spritesheet:"largeicons",isMask:!0}],["largeicon-filter",{position:"c5",spritesheet:"largeicons",isMask:!0}],["largeicon-hide-bottom-sidebar",{position:"e9",spritesheet:"largeicons",isMask:!0}],["largeicon-hide-left-sidebar",{position:"e8",spritesheet:"largeicons",isMask:!0}],["largeicon-hide-right-sidebar",{position:"e7",spritesheet:"largeicons",isMask:!0}],["largeicon-hide-top-sidebar",{position:"e6",spritesheet:"largeicons",isMask:!0}],["largeicon-large-list",{position:"e5",spritesheet:"largeicons",isMask:!0}],["largeicon-layout-editor",{position:"a4",spritesheet:"largeicons",isMask:!0}],["largeicon-load",{position:"h5",spritesheet:"largeicons",isMask:!0}],["largeicon-longclick-triangle",{position:"b4",spritesheet:"largeicons",isMask:!0}],["largeicon-menu",{position:"c4",spritesheet:"largeicons",isMask:!0}],["largeicon-navigator-domain",{position:"d4",spritesheet:"largeicons",isMask:!0}],["largeicon-navigator-file",{position:"e4",spritesheet:"largeicons",isMask:!0}],["largeicon-navigator-file-sync",{position:"f9",spritesheet:"largeicons",isMask:!0}],["largeicon-navigator-folder",{position:"f8",spritesheet:"largeicons",isMask:!0}],["largeicon-navigator-frame",{position:"f7",spritesheet:"largeicons",isMask:!0}],["largeicon-navigator-snippet",{position:"f6",spritesheet:"largeicons",isMask:!0}],["largeicon-navigator-worker",{position:"f5",spritesheet:"largeicons",isMask:!0}],["largeicon-node-search",{position:"f4",spritesheet:"largeicons",isMask:!0}],["largeicon-pan",{position:"a3",spritesheet:"largeicons",isMask:!0}],["largeicon-pause-animation",{position:"b3",spritesheet:"largeicons",isMask:!0}],["largeicon-pause",{position:"c3",spritesheet:"largeicons",isMask:!0}],["largeicon-pause-on-exceptions",{position:"d3",spritesheet:"largeicons",isMask:!0}],["largeicon-phone",{position:"e3",spritesheet:"largeicons",isMask:!0}],["largeicon-play-animation",{position:"f3",spritesheet:"largeicons",isMask:!0}],["largeicon-play-back",{position:"a2",spritesheet:"largeicons",isMask:!0}],["largeicon-play",{position:"b2",spritesheet:"largeicons",isMask:!0}],["largeicon-pretty-print",{position:"c2",spritesheet:"largeicons",isMask:!0}],["largeicon-refresh",{position:"d2",spritesheet:"largeicons",isMask:!0}],["largeicon-replay-animation",{position:"e2",spritesheet:"largeicons",isMask:!0}],["largeicon-resume",{position:"f2",spritesheet:"largeicons",isMask:!0}],["largeicon-rotate",{position:"g9",spritesheet:"largeicons",isMask:!0}],["largeicon-rotate-screen",{position:"g8",spritesheet:"largeicons",isMask:!0}],["largeicon-search",{position:"h4",spritesheet:"largeicons",isMask:!0}],["largeicon-settings-gear",{position:"g7",spritesheet:"largeicons",isMask:!0}],["largeicon-shortcut-changed",{position:"i4",spritesheet:"largeicons",isMask:!0}],["largeicon-show-bottom-sidebar",{position:"g6",spritesheet:"largeicons",isMask:!0}],["largeicon-show-left-sidebar",{position:"g5",spritesheet:"largeicons",isMask:!0}],["largeicon-show-right-sidebar",{position:"g4",spritesheet:"largeicons",isMask:!0}],["largeicon-show-top-sidebar",{position:"g3",spritesheet:"largeicons",isMask:!0}],["largeicon-start-recording",{position:"g2",spritesheet:"largeicons",isMask:!0}],["largeicon-step-into",{position:"a1",spritesheet:"largeicons",isMask:!0}],["largeicon-step-out",{position:"b1",spritesheet:"largeicons",isMask:!0}],["largeicon-step-over",{position:"c1",spritesheet:"largeicons",isMask:!0}],["largeicon-step",{position:"h1",spritesheet:"largeicons",isMask:!0}],["largeicon-stop-recording",{position:"d1",spritesheet:"largeicons",isMask:!0}],["largeicon-terminate-execution",{position:"h2",spritesheet:"largeicons",isMask:!0}],["largeicon-trash-bin",{position:"f1",spritesheet:"largeicons",isMask:!0}],["largeicon-undo",{position:"h7",spritesheet:"largeicons",isMask:!0}],["largeicon-undock",{position:"g1",spritesheet:"largeicons",isMask:!0}],["largeicon-visibility",{position:"h9",spritesheet:"largeicons",isMask:!0}],["largeicon-waterfall",{position:"h8",spritesheet:"largeicons",isMask:!0}],["largeicon-breaking-change",{position:"h3",spritesheet:"largeicons"}],["largeicon-link",{position:"i1",spritesheet:"largeicons"}],["largeicon-dual-screen",{position:"i2",spritesheet:"largeicons",isMask:!0}],["largeicon-experimental-api",{position:"i3",spritesheet:"largeicons",isMask:!0}],["mediumicon-arrow-top",{position:"a4",spritesheet:"arrowicons"}],["mediumicon-arrow-bottom",{position:"a3",spritesheet:"arrowicons"}],["mediumicon-arrow-left",{position:"a2",spritesheet:"arrowicons"}],["mediumicon-arrow-right",{position:"a1",spritesheet:"arrowicons"}]]),descriptors=initialDescriptors;export let Descriptor;export let SpriteSheet;