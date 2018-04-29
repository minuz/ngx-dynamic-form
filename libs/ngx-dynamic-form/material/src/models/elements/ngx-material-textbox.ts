import { InputType } from '@ngx-dynamic-form/core';
import { merge } from 'lodash';

import { INgxMaterialTextbox } from '../interface/ngx-material-textbox.interface';
import { NgxMaterialInput } from './ngx-material-input';

export class NgxMaterialTextbox extends NgxMaterialInput implements INgxMaterialTextbox {

  inputType = InputType.Text;

  constructor(opt?: INgxMaterialTextbox) {
    super(opt);
    merge(this, opt);
  }
}
