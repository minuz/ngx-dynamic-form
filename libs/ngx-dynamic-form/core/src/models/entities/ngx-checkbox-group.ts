import { merge } from 'lodash';

import { InputType } from '../enums';
import { INgxCheckboxGroup } from '../interfaces/ngx-checkbox-group.interface';
import { INgxCheckbox } from '../interfaces/ngx-checkbox.interface';
import { NgxGroup } from './ngx-group';

export class NgxCheckboxGroup extends NgxGroup implements INgxCheckboxGroup {

  elements: INgxCheckbox[] = [];
  inputType = InputType.Checkbox;

  constructor(opt?: INgxCheckboxGroup) {
    super(opt);
    merge(this, opt);
  }
}
