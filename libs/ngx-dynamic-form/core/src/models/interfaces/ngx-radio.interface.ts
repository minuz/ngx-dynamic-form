import { LabelPosition } from '../enums';
import { BooleanPredicate } from './../types';
import { INgxInput } from './ngx-input.interface';

export interface INgxRadio extends INgxInput {

  /**
   * @description
   * Expression tha receives the complete form model and the current control and must return a boolean value
   */
  checked?: BooleanPredicate;

  /**
   * @description
   * Property to determine the position of the label within the element.
   * Whether the label should appear after or before the radio button. Defaults to 'after'
   *
   * Accepted values: 'before' | 'after'
   * @default 'after'
   */
  labelPosition?: LabelPosition;

  /**
   * @description
   * This property defines the inner label for the radio control.
   * On radio, you may have an external label for a group and/or the inner radio label itself.
   */
  radioLabel?: string;
}
