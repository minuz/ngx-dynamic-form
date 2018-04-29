import { INgxCheckbox } from './ngx-checkbox.interface';
import { INgxGroup } from './ngx-group.interface';

export interface INgxCheckboxGroup extends INgxGroup {

  /**
   * @description
   * The array of checkbox elements contained with the group.
   */
  elements: INgxCheckbox[];
}
