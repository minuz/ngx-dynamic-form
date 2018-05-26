import { INgxMaterialGroup } from './ngx-material-group.interface';
import { INgxMaterialRadio } from './ngx-material-radio.interface';

export interface INgxMaterialRadioGroup extends INgxMaterialGroup {

  /**
   * @description
   * Holds the collection of Radio Buttons.
   * Overrides base interface of INgxMaterialInput[].
   */
  elements: INgxMaterialRadio[];
}
