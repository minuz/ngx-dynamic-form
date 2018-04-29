import { GroupAlignment, LabelPosition } from '@ngx-dynamic-form/core';
import { merge } from 'lodash';

import { INgxMaterialGroup } from './../interface/ngx-material-group.interface';
import { INgxMaterialInput } from './../interface/ngx-material-input.interface';
import { NgxMaterialInput } from './ngx-material-input';

export class NgxMaterialGroup extends NgxMaterialInput
  implements INgxMaterialGroup {
  align?: GroupAlignment;
  labelPosition?: LabelPosition;
  elements: INgxMaterialInput[];

  constructor(opt?: INgxMaterialGroup) {
    super(opt);
    merge(this, opt);
  }
}
