import { merge } from 'lodash';

import { InputType, LabelPosition } from '../enums';
import { BooleanPredicate } from '../types';
import { INgxRadio } from './../interfaces/ngx-radio.interface';
import { NgxInput } from './ngx-input';

export class NgxRadio extends NgxInput implements INgxRadio {

  inputType = InputType.Radio;
  labelPosition?: LabelPosition = LabelPosition.After;
  checked?: BooleanPredicate;
  radioLabel?: string;

  constructor(opt?: INgxRadio) {
    super(opt);
    merge(this, opt);
  }
}
