let _id=0;export function nextId(t){return(t||"")+ ++_id}export function bindLabelToControl(t,e){const r=nextId("labelledControl");e.id=r,t.setAttribute("for",r)}export function markAsAlert(t){t.setAttribute("role","alert"),t.setAttribute("aria-live","polite")}export function markAsApplication(t){t.setAttribute("role","application")}export function markAsButton(t){t.setAttribute("role","button")}export function markAsCheckbox(t){t.setAttribute("role","checkbox")}export function markAsCombobox(t){t.setAttribute("role","combobox")}export function markAsModalDialog(t){t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true")}export function markAsGroup(t){t.setAttribute("role","group")}export function markAsLink(t){t.setAttribute("role","link")}export function markAsMenuButton(t){markAsButton(t),t.setAttribute("aria-haspopup","true")}export function markAsProgressBar(t,e=0,r=100){t.setAttribute("role","progressbar"),t.setAttribute("aria-valuemin",e.toString()),t.setAttribute("aria-valuemax",r.toString())}export function markAsTab(t){t.setAttribute("role","tab")}export function markAsTablist(t){t.setAttribute("role","tablist")}export function markAsTabpanel(t){t.setAttribute("role","tabpanel")}export function markAsTree(t){t.setAttribute("role","tree")}export function markAsTreeitem(t){t.setAttribute("role","treeitem")}export function markAsTextBox(t){t.setAttribute("role","textbox")}export function markAsMenu(t){t.setAttribute("role","menu")}export function markAsMenuItem(t){t.setAttribute("role","menuitem")}export function markAsMenuItemSubMenu(t){markAsMenuItem(t),t.setAttribute("aria-haspopup","true")}export function markAsList(t){t.setAttribute("role","list")}export function markAsListitem(t){t.setAttribute("role","listitem")}export function markAsListBox(t){t.setAttribute("role","listbox")}export function markAsMultiSelectable(t){t.setAttribute("aria-multiselectable","true")}export function markAsOption(t){t.setAttribute("role","option")}export function markAsRadioGroup(t){t.setAttribute("role","radiogroup")}export function markAsHidden(t){t.setAttribute("aria-hidden","true")}export function markAsSlider(t,e=0,r=100){t.setAttribute("role","slider"),t.setAttribute("aria-valuemin",String(e)),t.setAttribute("aria-valuemax",String(r))}export function markAsHeading(t,e){t.setAttribute("role","heading"),t.setAttribute("aria-level",e.toString())}export function markAsPoliteLiveRegion(t,e){t.setAttribute("aria-live","polite"),e&&t.setAttribute("aria-atomic","true")}export function hasRole(t){return t.hasAttribute("role")}export function removeRole(t){t.removeAttribute("role")}export function setPlaceholder(t,e){e?t.setAttribute("aria-placeholder",e):t.removeAttribute("aria-placeholder")}export function markAsPresentation(t){t.setAttribute("role","presentation")}export function markAsStatus(t){t.setAttribute("role","status")}export function ensureId(t){t.id||(t.id=nextId("ariaElement"))}export function setAriaValueText(t,e){t.setAttribute("aria-valuetext",e)}export function setAriaValueNow(t,e){t.setAttribute("aria-valuenow",e)}export function setAriaValueMinMax(t,e,r){t.setAttribute("aria-valuemin",e),t.setAttribute("aria-valuemax",r)}export function setControls(t,e){e?(ensureId(e),t.setAttribute("aria-controls",e.id)):t.removeAttribute("aria-controls")}export function setChecked(t,e){t.setAttribute("aria-checked",(!!e).toString())}export function setCheckboxAsIndeterminate(t){t.setAttribute("aria-checked","mixed")}export function setDisabled(t,e){t.setAttribute("aria-disabled",(!!e).toString())}export function setExpanded(t,e){t.setAttribute("aria-expanded",(!!e).toString())}export function unsetExpandable(t){t.removeAttribute("aria-expanded")}export function setHidden(t,e){t.setAttribute("aria-hidden",(!!e).toString())}export function setLevel(t,e){t.setAttribute("aria-level",e.toString())}export const AutocompleteInteractionModel={inline:"inline",list:"list",both:"both",none:"none"};export function setAutocomplete(t,e=AutocompleteInteractionModel.none){t.setAttribute("aria-autocomplete",e)}export function setSelected(t,e){t.setAttribute("aria-selected",(!!e).toString())}export function clearSelected(t){t.removeAttribute("aria-selected")}export function setInvalid(t,e){e?t.setAttribute("aria-invalid",e.toString()):t.removeAttribute("aria-invalid")}export function setPressed(t,e){t.setAttribute("aria-pressed",(!!e).toString())}export function setValueNow(t,e){t.setAttribute("aria-valuenow",e.toString())}export function setValueText(t,e){t.setAttribute("aria-valuetext",e.toString())}export function setProgressBarValue(t,e,r){t.setAttribute("aria-valuenow",e.toString()),r&&t.setAttribute("aria-valuetext",r)}export function setAccessibleName(t,e){t.setAttribute("aria-label",e)}const _descriptionMap=new WeakMap;export function setDescription(t,e){const r=_descriptionMap.get(t);if(r&&r.remove(),t.removeAttribute("data-aria-utils-animation-hack"),!e)return _descriptionMap.delete(t),void t.removeAttribute("aria-describedby");const i=document.createElement("span");i.textContent=e,i.style.display="none",ensureId(i),t.setAttribute("aria-describedby",i.id),_descriptionMap.set(t,i);if(!new Set(["INPUT","IMG"]).has(t.tagName))return void t.appendChild(i);t.insertAdjacentElement("afterend",i)||(t.setAttribute("data-aria-utils-animation-hack","sorry"),t.addEventListener("animationend",()=>{_descriptionMap.get(t)===i&&(t.removeAttribute("data-aria-utils-animation-hack"),t.insertAdjacentElement("afterend",i))},{once:!0}))}export function setActiveDescendant(t,e){e?(e.isConnected&&t.isConnected?console.assert(t.hasSameShadowRoot(e),"elements are not in the same shadow dom"):console.warn("One or more elements in an active-descendant relationship are not yet attached to the DOM tree."),ensureId(e),t.setAttribute("aria-activedescendant",e.id)):t.removeAttribute("aria-activedescendant")}export function setSetSize(t,e){t.setAttribute("aria-setsize",e.toString())}export function setPositionInSet(t,e){t.setAttribute("aria-posinset",e.toString())}function hideFromLayout(t){t.style.position="absolute",t.style.left="-999em",t.style.width="100em",t.style.overflow="hidden"}const alertsMap=new WeakMap;export function alert(t,e){const r=e.ownerDocument;let i=alertsMap.get(r);if(!i){const t=r.body.createChild("div"),e="ariaLiveMessageElement";t.id=e,hideFromLayout(t);const o=r.body.createChild("div");hideFromLayout(o),o.setAttribute("role","alert"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-describedby",e),i={messageElement:t,alertElement:o},alertsMap.set(r,i)}setAccessibleName(i.messageElement,t.trimEndWithMaxLength(1e4))}