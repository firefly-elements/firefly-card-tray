import { PolymerElement,html } from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import './node_modules/@polymer/paper-fab/paper-fab.js';
import './aspen_components/asp-icons.js';
import {AspSecurableMixin} from './aspen_components/asp-securable-mixin.js';
import './aspen_components/asp-delete-dialog.js';
import {FireflyTrayMixin} from './firefly-tray-mixin';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
/**
 * `asp-fire-tray` This component is used to render a collection of cards. Each card must have the "card" CSS class,
    and there must be a paper-dialog that uses the "detail-dialog" class.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class FireflyCardTray extends AspSecurableMixin(FireflyTrayMixin(PolymerElement)) {

    static get template(){
        return html `
        <style>
			:host {
				display: block; 
				--paper-fab-bottom: 10px;
				--paper-fab-right: 10px;
			}
			.tray{
				@apply --layout-horizontal;
				@apply --layout-wrap;
			}

			paper-fab{
				position: fixed;
				bottom: var(--paper-fab-bottom);
				right: var(--paper-fab-right);
			}

		</style>

		<div class="tray">
			<slot select=".card"></slot>
			<template is="dom-if" if="[[hasRole]]">
				<paper-fab icon="aspen:add" on-tap="_openAddDialog" mini="[[fabIsMini]]"></paper-fab>
			</template>
		</div>

	
		<slot select=".detail-dialog"></slot>
		
		<asp-delete-dialog></asp-delete-dialog>
        `;
    }


    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
				return 'firefly-card-tray';
    }



    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
				super();
    }
    

    /**
     * Use for one-time configuration of your component after local DOM is initialized. 
     */
    ready() {
				super.ready();

				afterNextRender(this, function() {
            
				});
    }

}

window.customElements.define(FireflyCardTray.is, FireflyCardTray);
