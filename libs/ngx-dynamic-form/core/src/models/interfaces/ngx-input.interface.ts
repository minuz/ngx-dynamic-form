import { InputType } from '../enums';
import { INgxFormElement } from './ngx-form-element.interface';

export interface INgxInput extends INgxFormElement {
  /**
   * @description
   * Property to determine the input type.
   * This is mandatory to avoid simple mistakes like forgetting to determine the input type.
   */
  inputType?: InputType;

  /**
   * @description
   * The input placeholder value.
   */
  placeholder?: string;
}
