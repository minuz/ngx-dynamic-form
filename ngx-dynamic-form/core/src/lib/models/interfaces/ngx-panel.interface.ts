import { INgxFormElement } from './ngx-form-element.interface';
import { INgxFormRow } from './ngx-row.interface';
import { INgxFormPanelStyling } from './ngx-styling.interface';

/**
 * @description
 * Interface to define the settings of a panel within the form.
 * Useful within some context where you might want to create different blocks of fields
 * Within the same form. Also helpful to create more attractive layouts for the form.
 */
export interface INgxFormPanel {

  /**
   * @description
   */
  panelLabel?: string;

  /**
   * @description
   * Set a wrapper around the elements inside the panel to further customize the layout disposition.
   */
  addControlModelsWrapper?: boolean;

  /**
   * @description
   * Property to define all form elements for this form row.
   *
   * @default
   * Empty Array. You shouldn't need to create new array when creating a new instance of the panel.
   */
  elements?: INgxFormElement[];

  /**
   * @description
   * Define the available css properties from a panel.
   */
  styling?: INgxFormPanelStyling;

  /**
   * @description
   * Use this property to define an array of INgxFormRows
   */
  rows?: INgxFormRow[];
}
