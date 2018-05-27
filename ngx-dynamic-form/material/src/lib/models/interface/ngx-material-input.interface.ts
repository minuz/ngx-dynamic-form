import { FloatLabelType } from '@angular/material';
import { INgxMaterialElement } from './ngx-material-element.interface';
import { InputType, HintPosition } from '@ngx-dynamic-form/core';

export interface INgxMaterialInput extends INgxMaterialElement {
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

  /**
   * @description
   * Define an icon after the placeholder text.
   * Set an existing icon from Font Awesome.
   */
  prefixCss?: string;

  /**
   * @description
   * Define an icon after the placeholder text.
   * Set an existing icon from Font Awesome.
   */
  suffixCss?: string;

  /**
   * @description
   * Whether the label should always float, never float or float as the user types.
   */
  floatLabel?: FloatLabelType;

  /**
   * @description
   * Whether the required marker should be hidden.
   */
  hideRequiredMarker?: boolean;

  /**
   * @description
   * Text for the form field hint.
   */
  hintLabel?: string;

  /**
   * @description
   * Whether to align the hint label at the start or end of the line.
   */
  hintPosition?: HintPosition;
}
