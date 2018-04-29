import { merge } from 'lodash';

import { FormElementType, InputType } from '../enums';
import { INgxInput } from './../interfaces/ngx-input.interface';
import { NgxFormElement } from './ngx-form-element';

export class NgxInput extends NgxFormElement implements INgxInput {

  elementType = FormElementType.Input;
  inputType?: InputType;
  placeholder?: string;

  constructor(opt?: INgxInput) {
    super(opt);
    merge(this, opt);
  }
}
