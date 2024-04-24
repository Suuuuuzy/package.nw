import*as Host from"../host/host.js";import*as SDK from"../sdk/sdk.js";import*as UI from"../ui/ui.js";const TIMEOUT=1e3;export class WebauthnPaneImpl extends UI.Widget.VBox{constructor(){super(!0),this.registerRequiredCSS("webauthn/webauthnPane.css"),this.contentElement.classList.add("webauthn-pane"),this._enabled=!1,this._activeAuthId=null,this._hasBeenEnabled=!1;const t=SDK.SDKModel.TargetManager.instance().mainTarget();t&&(this._model=t.model(SDK.WebAuthnModel.WebAuthnModel)),this._createToolbar(),this._authenticatorsView=this.contentElement.createChild("div","authenticators-view"),this._createNewAuthenticatorSection(),this._updateVisibility(!1)}ownerViewDisposed(){this._enableCheckbox.setChecked(!1),this._setVirtualAuthEnvEnabled(!1)}_createToolbar(){this._topToolbarContainer=this.contentElement.createChild("div","webauthn-toolbar-container"),this._topToolbar=new UI.Toolbar.Toolbar("webauthn-toolbar",this._topToolbarContainer);const t=ls`Enable virtual authenticator environment`;this._enableCheckbox=new UI.Toolbar.ToolbarCheckbox(t,t,this._handleCheckboxToggle.bind(this)),this._topToolbar.appendToolbarItem(this._enableCheckbox)}_setVirtualAuthEnvEnabled(t){t&&!this._hasBeenEnabled&&(Host.userMetrics.actionTaken(Host.UserMetrics.Action.VirtualAuthenticatorEnvironmentEnabled),this._hasBeenEnabled=!0),this._enabled=t,this._model.setVirtualAuthEnvEnabled(t),this._updateVisibility(t),t||this._removeAuthenticatorSections()}_updateVisibility(t){t?this._newAuthenticatorSection&&(this._newAuthenticatorSection.style.visibility="visible"):this._newAuthenticatorSection&&(this._newAuthenticatorSection.style.visibility="hidden")}_removeAuthenticatorSections(){this._authenticatorsView.innerHTML=""}_handleCheckboxToggle(){this._setVirtualAuthEnvEnabled(!this._enabled)}_createNewAuthenticatorSection(){this._newAuthenticatorSection=this.contentElement.createChild("div","new-authenticator-container");const t=UI.UIUtils.createLabel(ls`New authenticator`,"new-authenticator-title");this._newAuthenticatorSection.appendChild(t),this._newAuthenticatorForm=this._newAuthenticatorSection.createChild("div","new-authenticator-form");const e=this._newAuthenticatorForm.createChild("div","authenticator-option"),i=this._newAuthenticatorForm.createChild("div","authenticator-option"),a=this._newAuthenticatorForm.createChild("div","authenticator-option"),n=this._newAuthenticatorForm.createChild("div","authenticator-option"),o=this._newAuthenticatorForm.createChild("div","authenticator-option"),r=UI.UIUtils.createLabel(ls`Protocol`,"authenticator-option-label");e.appendChild(r),this._protocolSelect=e.createChild("select","chrome-select"),UI.ARIAUtils.bindLabelToControl(r,this._protocolSelect),Object.values(Protocol.WebAuthn.AuthenticatorProtocol).forEach(t=>{this._protocolSelect.appendChild(new Option(t,t))}),this._protocolSelect.selectedIndex=0;const s=UI.UIUtils.createLabel(ls`Transport`,"authenticator-option-label");i.appendChild(s),this._transportSelect=i.createChild("select","chrome-select"),UI.ARIAUtils.bindLabelToControl(s,this._transportSelect),Object.values(Protocol.WebAuthn.AuthenticatorTransport).forEach(t=>{t!==Protocol.WebAuthn.AuthenticatorTransport.Cable&&this._transportSelect.appendChild(new Option(t,t))}),this._transportSelect.selectedIndex=0,this._residentKeyCheckboxLabel=UI.UIUtils.CheckboxLabel.create(ls`Supports resident keys`,!1),this._residentKeyCheckboxLabel.textElement.classList.add("authenticator-option-label"),a.appendChild(this._residentKeyCheckboxLabel.textElement),this._residentKeyCheckbox=this._residentKeyCheckboxLabel.checkboxElement,this._residentKeyCheckbox.checked=!1,this._residentKeyCheckbox.classList.add("authenticator-option-checkbox"),a.appendChild(this._residentKeyCheckbox),this._userVerificationCheckboxLabel=UI.UIUtils.CheckboxLabel.create("Supports user verification",!1),this._userVerificationCheckboxLabel.textElement.classList.add("authenticator-option-label"),n.appendChild(this._userVerificationCheckboxLabel.textElement),this._userVerificationCheckbox=this._userVerificationCheckboxLabel.checkboxElement,this._userVerificationCheckbox.checked=!1,this._userVerificationCheckbox.classList.add("authenticator-option-checkbox"),n.appendChild(this._userVerificationCheckbox),this._addAuthenticatorButton=UI.UIUtils.createTextButton(ls`Add`,this._handleAddAuthenticatorButton.bind(this),""),o.createChild("div","authenticator-option-label"),o.appendChild(this._addAuthenticatorButton);const c=UI.UIUtils.createLabel(ls`Add authenticator`,"");UI.ARIAUtils.bindLabelToControl(c,this._addAuthenticatorButton)}async _handleAddAuthenticatorButton(){const t=this._createOptionsFromCurrentInputs(),e=await this._model.addAuthenticator(t);this._addAuthenticatorSection(e,t)}async _addAuthenticatorSection(t,e){const i=document.createElement("div");i.classList.add("authenticator-section"),i.setAttribute("data-authenticator-id",t),this._authenticatorsView.insertAdjacentElement("afterbegin",i);const a=i.createChild("div","authenticator-section-header"),n=a.createChild("div","authenticator-section-title");UI.ARIAUtils.markAsHeading(n,2);const o=a.createChild("button","text-button");o.textContent=ls`Remove`,o.addEventListener("click",this._removeAuthenticator.bind(this,t)),await this._clearActiveAuthenticator();const r=a.createChild("div","active-button-container"),s=UI.UIUtils.createRadioLabel("active-authenticator",ls`Active`);s.radioElement.addEventListener("click",this._setActiveAuthenticator.bind(this,t)),r.appendChild(s),s.radioElement.checked=!0,this._activeAuthId=t;const c=new UI.Toolbar.Toolbar("edit-name-toolbar",n),l=new UI.Toolbar.ToolbarButton(ls`Edit name`,"largeicon-edit"),h=new UI.Toolbar.ToolbarButton(ls`Save name`,"largeicon-checkmark");h.setVisible(!1);const d=n.createChild("input","authenticator-name-field");d.setAttribute("readOnly","true");const u=t.slice(-5);d.value=ls`Authenticator ${u}`,this._updateActiveLabelTitle(s,d.value),l.addEventListener(UI.Toolbar.ToolbarButton.Events.Click,()=>this._handleEditNameButton(n,d,l,h)),h.addEventListener(UI.Toolbar.ToolbarButton.Events.Click,()=>this._handleSaveNameButton(n,d,l,h,s)),d.addEventListener("focusout",()=>this._handleSaveNameButton(n,d,l,h,s)),d.addEventListener("keydown",t=>{"Enter"===t.key&&this._handleSaveNameButton(n,d,l,h,s)}),c.appendToolbarItem(l),c.appendToolbarItem(h),this._createAuthenticatorFields(i,t,e),this._createCredentialsTable(i),this._updateCredentialTable(t)}_createCredentialsTable(t){t.appendChild(UI.UIUtils.createLabel(ls`Credentials`,"credentials-title"));const e=t.createChild("div","credentials-table-wrapper").createChild("table","credentials-table"),i=e.createTHead().insertRow();[ls`ID`,ls`Is Resident`,ls`RP ID`,ls`User Handle`,ls`Sign Count`,"",""].forEach(t=>{i.createChild("th").innerText=t}),i.children[0].classList.add("id-cell"),e.createChild("tbody")}async _updateCredentialTable(t){const e=this._authenticatorsView.querySelector(`[data-authenticator-id=${CSS.escape(t)}] div table tbody`);if(!e)return;const i=await this._model.getCredentials(t);e.innerHTML="",i.forEach(i=>this._insertCredentialRow(t,e,i)),setTimeout(this._updateCredentialTable.bind(this,t),1e3)}_insertCredentialRow(t,e,i){const a=e.createChild("tr");a.setAttribute("data-credential-id",i.credentialId);const n=a.createChild("td");n.innerHTML=i.credentialId,n.title=i.credentialId;const o=a.createChild("td").createChild("input");o.setAttribute("type","checkbox"),o.checked=i.isResidentCredential,o.disabled=!0,a.createChild("td").textContent=i.rpId||ls`<unknown RP ID>`,a.createChild("td").textContent=i.userHandle||ls`<no user handle>`,a.createChild("td").textContent=i.signCount.toString();const r=a.createChild("td").createChild("button","text-button");r.textContent=ls`Export`,r.addEventListener("click",this._exportCredential.bind(this,i));const s=a.createChild("td").createChild("button","text-button");s.textContent=ls`Remove`,s.addEventListener("click",this._removeCredential.bind(this,t,i.credentialId))}_exportCredential(t){const e="-----BEGIN PRIVATE KEY-----\n"+t.privateKey+"\n-----END PRIVATE KEY-----",i=document.createElement("a");i.download=ls`Private key.pem`,i.href="data:application/x-pem-file;charset=utf-8,"+encodeURIComponent(e),i.click()}async _removeCredential(t,e){this._authenticatorsView.querySelector(`[data-credential-id=${CSS.escape(e)}]`).remove(),await this._model.removeCredential(t,e)}_createAuthenticatorFields(t,e,i){const a=t.createChild("div","authenticator-fields"),n=a.createChild("div","authenticator-field"),o=a.createChild("div","authenticator-field"),r=a.createChild("div","authenticator-field"),s=a.createChild("div","authenticator-field"),c=a.createChild("div","authenticator-field");n.appendChild(UI.UIUtils.createLabel(ls`UUID`,"authenticator-option-label")),o.appendChild(UI.UIUtils.createLabel(ls`Protocol`,"authenticator-option-label")),r.appendChild(UI.UIUtils.createLabel(ls`Transport`,"authenticator-option-label")),s.appendChild(UI.UIUtils.createLabel(ls`Supports resident keys`,"authenticator-option-label")),c.appendChild(UI.UIUtils.createLabel(ls`Supports user verification`,"authenticator-option-label")),n.createChild("div","authenticator-field-value").textContent=e,o.createChild("div","authenticator-field-value").textContent=i.protocol,r.createChild("div","authenticator-field-value").textContent=i.transport,s.createChild("div","authenticator-field-value").textContent=i.hasResidentKey?ls`Yes`:ls`No`,c.createChild("div","authenticator-field-value").textContent=i.hasUserVerification?ls`Yes`:ls`No`}_handleEditNameButton(t,e,i,a){e.removeAttribute("readonly"),t.classList.add("editing-name"),e.focus(),a.setVisible(!0),i.setVisible(!1)}_handleSaveNameButton(t,e,i,a,n){e.setAttribute("readonly",""),t.classList.remove("editing-name"),i.setVisible(!0),a.setVisible(!1),this._updateActiveLabelTitle(n,e.value)}_updateActiveLabelTitle(t,e){t.radioElement.title=ls`Set ${e} as the active authenticator`}_removeAuthenticator(t){this._authenticatorsView.querySelector(`[data-authenticator-id=${CSS.escape(t)}]`).remove(),this._model.removeAuthenticator(t),this._activeAuthId===t&&(this._activeAuthId=null)}_createOptionsFromCurrentInputs(){return{protocol:this._protocolSelect.options[this._protocolSelect.selectedIndex].value,transport:this._transportSelect.options[this._transportSelect.selectedIndex].value,hasResidentKey:this._residentKeyCheckbox.checked,hasUserVerification:this._userVerificationCheckbox.checked,automaticPresenceSimulation:!0,isUserVerified:!0}}async _setActiveAuthenticator(t){await this._clearActiveAuthenticator(),await this._model.setAutomaticPresenceSimulation(t,!0),this._activeAuthId=t,this._updateActiveButtons()}_updateActiveButtons(){const t=this._authenticatorsView.getElementsByClassName("authenticator-section");Array.from(t).forEach(t=>{t.querySelector("input.dt-radio-button").checked=t.getAttribute("data-authenticator-id")===this._activeAuthId})}async _clearActiveAuthenticator(){this._activeAuthId&&await this._model.setAutomaticPresenceSimulation(this._activeAuthId,!1),this._activeAuthId=null}}