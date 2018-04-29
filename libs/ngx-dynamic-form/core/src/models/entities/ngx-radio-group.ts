import { merge } from 'lodash';

import { FormElementType, InputType } from '../enums';
import { INgxRadioGroup } from '../interfaces/ngx-radio-group.interface';
import { INgxRadio } from '../interfaces/ngx-radio.interface';
import { NgxGroup } from './ngx-group';

export class NgxRadioGroup extends NgxGroup implements INgxRadioGroup {

  elementType = FormElementType.Input;
  inputType = InputType.Radio;
  elements: INgxRadio[] = [];

  constructor(opt?: INgxRadioGroup) {
    super(opt);
    merge(this, opt);
  }
}
