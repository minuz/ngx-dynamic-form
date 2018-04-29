import { merge } from 'lodash';

import { FormElementType } from '../enums';
import { INgxTextbox } from './../interfaces/ngx-textebox.interface';
import { NgxInput } from './ngx-input';

export class NgxTextbox extends NgxInput implements INgxTextbox {

  elementType = FormElementType.Input;
  placeholder?: string;

  constructor(opt?: INgxTextbox) {
    super(opt);
    merge(this, opt);
  }
}
