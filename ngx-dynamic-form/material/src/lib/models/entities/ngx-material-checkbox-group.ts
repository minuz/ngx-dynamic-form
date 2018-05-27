import { merge } from 'lodash';

import { INgxMaterialCheckboxGroup } from '../interface/ngx-material-checkbox-group.interface';
import { INgxMaterialCheckbox } from '../interface/ngx-material-checkbox.interface';
import { NgxMaterialGroup } from './ngx-material-group';
import { FormElementType, InputType } from '@ngx-dynamic-form/core';

export class NgxMaterialCheckboxGroup extends NgxMaterialGroup implements INgxMaterialCheckboxGroup {

  inputType = InputType.Checkbox;
  elements: INgxMaterialCheckbox[] = [];

  constructor(opt?: INgxMaterialCheckboxGroup) {
    super(opt);
    merge(this, opt);
  }
}
