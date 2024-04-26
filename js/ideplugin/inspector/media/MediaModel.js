import*as SDK from"../sdk/sdk.js";export let PlayerEvent;export const ProtocolTriggers={PlayerPropertiesChanged:Symbol("PlayerPropertiesChanged"),PlayerEventsAdded:Symbol("PlayerEventsAdded"),PlayerMessagesLogged:Symbol("PlayerMessagesLogged"),PlayerErrorsRaised:Symbol("PlayerErrorsRaised"),PlayersCreated:Symbol("PlayersCreated")};export class MediaModel extends SDK.SDKModel.SDKModel{constructor(e){super(e),this._enabled=!1,this._agent=e.mediaAgent(),e.registerMediaDispatcher(this)}resumeModel(){return this._enabled?this._agent.enable():Promise.resolve()}ensureEnabled(){this._agent.enable(),this._enabled=!0}playerPropertiesChanged(e,r){this.dispatchEventToListeners(ProtocolTriggers.PlayerPropertiesChanged,{playerId:e,properties:r})}playerEventsAdded(e,r){this.dispatchEventToListeners(ProtocolTriggers.PlayerEventsAdded,{playerId:e,events:r})}playerMessagesLogged(e,r){this.dispatchEventToListeners(ProtocolTriggers.PlayerMessagesLogged,{playerId:e,messages:r})}playerErrorsRaised(e,r){this.dispatchEventToListeners(ProtocolTriggers.PlayerErrorsRaised,{playerId:e,errors:r})}playersCreated(e){this.dispatchEventToListeners(ProtocolTriggers.PlayersCreated,e)}}SDK.SDKModel.SDKModel.register(MediaModel,SDK.SDKModel.Capability.DOM,!1);