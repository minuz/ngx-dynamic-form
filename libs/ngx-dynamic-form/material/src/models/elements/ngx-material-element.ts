import { merge } from 'lodash';
import { NgxFormElement } from '@ngx-dynamic-form/core';
import { INgxMaterialElement } from '../interface/ngx-material-element.interface';
import { ThemePalette } from '@angular/material';

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
