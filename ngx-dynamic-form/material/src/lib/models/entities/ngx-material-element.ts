import { ThemePalette } from '@angular/material';
import { NgxFormElement } from '@ngx-dynamic-form/core';
import { merge } from 'lodash';

import { INgxMaterialElement } from '../interface/ngx-material-element.interface';

export class NgxMaterialElement extends NgxFormElement
  implements INgxMaterialElement {
  ariaLabel?: string;
  ariaLabelledby?: string | null;
  color?: ThemePalette = 'primary';
  disableRipple = true;
  required?: boolean;

  constructor(opt?: INgxMaterialElement) {
    super(opt);
    merge(this, opt);
  }
}
