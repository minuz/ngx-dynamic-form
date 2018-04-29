import { merge } from 'lodash';

import { InputType, LabelPosition } from '../enums';
import { INgxCheckbox } from '../interfaces/ngx-checkbox.interface';
import { BooleanPredicate } from '../types';
import { NgxInput } from './ngx-input';

export class NgxCheckbox extends NgxInput implements INgxCheckbox {

  inputType = InputType.Checkbox;
  labelPosition: LabelPosition = LabelPosition.After;
  defaultValue = false;

  checkboxLabel?: string;
  checked?: BooleanPredicate;

  constructor(opt?: INgxCheckbox) {
    super(opt);
    merge(this, opt);
  }
}
