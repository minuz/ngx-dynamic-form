import { ThemePalette } from '@angular/material';
import { merge } from 'lodash';

import { INgxMaterialRadio } from '../interface/ngx-material-radio.interface';
import { NgxMaterialInput } from './ngx-material-input';
import { BooleanPredicate, LabelPosition } from '@ngx-dynamic-form/core';

export class NgxMaterialRadio extends NgxMaterialInput
  implements INgxMaterialRadio {
  useParentDefinitions = true;
  checked?: BooleanPredicate;
  labelPosition?: LabelPosition;
  radioLabel?: string;

  constructor(opt?: INgxMaterialRadio) {
    super(opt);
    merge(this, opt);
  }
}
