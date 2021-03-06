import { BooleanPredicate, LabelPosition } from '@ngx-dynamic-form/core';

import { INgxMaterialInput } from './ngx-material-input.interface';

export interface INgxMaterialRadio extends INgxMaterialInput {
  /**
   * @description
   * Flag that defines stylings properties from parent.
   * Only affected when the checkbox is part of a INgxMaterialRadioGroup.
   */
  useParentDefinitions?: boolean;

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
