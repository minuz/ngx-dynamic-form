import { INgxGroup } from './ngx-group.interface';
import { INgxRadio } from './ngx-radio.interface';

export interface INgxRadioGroup extends INgxGroup {

  /**
   * @description
   * Represents the collection of radio buttons
   */
  elements: INgxRadio[];
}
