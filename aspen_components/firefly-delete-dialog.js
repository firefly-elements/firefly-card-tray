import '../node_modules/@polymer/paper-dialog/paper-dialog.js';
import '../node_modules/@polymer/paper-button/paper-button.js';
import { PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import {AspDialogMixin} from './aspen-dialog-mixin'
/**
 * `firefly-delete-dialog` This component allows the user to delete a doctype from the database.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspDeleteDialog extends AspDialogMixin(PolymerElement) {
    /**
     * String providing the tag name to register the element under.
     */
    static get is() {
				return 'firefly-delete-dialog';
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
				return {
            /** The model for the item to be deleted. */
            model:{
                type: Object,
                value: null
            },

            /** The text of the message to be displayed in the delete dialog. */
            message:{
                type: String,
                value: 'Are you sure you want to delete this card?'
            },

            url:{
                type: String,
                value: ''
            }
            
				};
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

    /** 
     * This method is responsible for deleting the model object from the database.
     */
     _handleDelete(){
				this.dispatchEvent(new CustomEvent('card-deleted', {
            bubbles: true,
            composed: true,
            detail: {
                model: this.model
            }
				}));
    }


}

window.customElements.define(AspDeleteDialog.is, AspDeleteDialog);
