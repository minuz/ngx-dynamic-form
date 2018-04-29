import { INgxFormPanel } from './ngx-panel.interface';
import { INgxFormRow } from './ngx-row.interface';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

/**
 * The interface for the main form.
 */
export interface INgxForm {

  /**
   * @description
   * A dynamically created model id to facilitate certain search.
   * It is a unique Id based on UUID.
   */
  readonly modelId?: string;

  readonly removeSubModel?: (modelId) => Observable<any>;

  /**
   * @description
   * Property that represents the form group object from Angular.
   */
  formGroup?: FormGroup;

  /**
   * @description
   * Property that defines the metadata for each row of the form.
   */
  rows?: INgxFormRow[];

  /**
   * @description
   * Property that defines the set of panels for this form.
   * Careful when using panels and rows at the same level.
   * It's usually hard to control the position of the elements when having both.
   */
  panels?: INgxFormPanel[];

  /**
   * @description
   * Flag created to help control manipulation based on state of the form.
   * In some scenarios, you may want to disable a field in edit more or hide it when is on Creation mode.
   * All expression properties such as isDisabled or isHidden receives INgxForm as a parameter.
   */
  isEditMode?: boolean;

  /**
   * @description
   * Property to automatically display debugging information
   */
  debug?: boolean;

  /**
   * @description
   * Set the css class for the form wrapper.
   */
  wrapperCss?: string;

  /**
   * @description
   * The usage of sub-models implies a form array.
   * In order for the array to work property, it requires a name.
   * Use this property to set the name array within the form value.
   */
  name?: string;

  /**
   * @description
   * The data associated with this model.
   */
  formData?: any;

  /**
   * @description
   * Adding a submodel will include a FormArray and its structure.
   * Currently only supports one level deep.
   */
  subModels?: INgxForm[];
}
