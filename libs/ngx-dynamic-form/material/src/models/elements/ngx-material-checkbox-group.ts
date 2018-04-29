import { merge } from 'lodash';

import { INgxMaterialCheckboxGroup } from '../interface/ngx-material-checkbox-group.interface';
import { INgxMaterialCheckbox } from '../interface/ngx-material-checkbox.interface';
import { NgxMaterialGroup } from './ngx-material-group';

export class NgxMaterialCheckboxGroup extends NgxMaterialGroup implements INgxMaterialCheckboxGroup {

  elements: INgxMaterialCheckbox[] = [];

  constructor(opt?: INgxMaterialCheckboxGroup) {
    super(opt);
    merge(this, opt);
  }
}
