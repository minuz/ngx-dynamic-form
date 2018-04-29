import { NgxMaterialGroup } from '@ngx-dynamic-form/material/src/models/elements/ngx-material-group';
import { merge } from 'lodash';

import { INgxMaterialRadioGroup } from '../interface/ngx-material-radio-group.interface';
import { INgxMaterialRadio } from '../interface/ngx-material-radio.interface';

export class NgxMaterialRadioGroup extends NgxMaterialGroup implements INgxMaterialRadioGroup {

  elements: INgxMaterialRadio[] = [];

  constructor(opt?: INgxMaterialRadioGroup) {
    super(opt);
    merge(this, opt);
  }
}
