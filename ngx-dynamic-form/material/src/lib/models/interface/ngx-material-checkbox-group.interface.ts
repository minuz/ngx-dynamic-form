import { INgxMaterialCheckbox } from './ngx-material-checkbox.interface';
import { INgxMaterialGroup } from './ngx-material-group.interface';

export interface INgxMaterialCheckboxGroup extends INgxMaterialGroup {
  
  /**
   * @description
   * Holds the collection of Checkboxes.
   * Overrides base interface of INgxMaterialInput[].
   */
  elements: INgxMaterialCheckbox[];
}
