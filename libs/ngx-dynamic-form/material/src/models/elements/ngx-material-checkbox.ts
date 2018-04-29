import { ThemePalette } from '@angular/material';
import { merge } from 'lodash';

import { INgxMaterialCheckbox } from '../interface/ngx-material-checkbox.interface';
import { NgxMaterialInput } from './ngx-material-input';
import { BooleanPredicate, LabelPosition } from '@ngx-dynamic-form/core';

export class NgxMaterialCheckbox extends NgxMaterialInput
  implements INgxMaterialCheckbox {
  useParentDefinitions = true;
  checked?: BooleanPredicate;
  labelPosition?: LabelPosition;
  checkboxLabel?: string;

  constructor(opt?: INgxMaterialCheckbox) {
    super(opt);
    merge(this, opt);
  }
}
