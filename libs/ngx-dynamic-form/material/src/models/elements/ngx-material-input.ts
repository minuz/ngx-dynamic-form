import { FloatLabelType } from '@angular/material';
import { HintPosition, FormElementType } from '@ngx-dynamic-form/core';
import { merge } from 'lodash';

import { INgxMaterialInput } from '../interface/ngx-material-input.interface';
import { NgxMaterialElement } from './ngx-material-element';

export class NgxMaterialInput extends NgxMaterialElement implements INgxMaterialInput {

  elementType?: FormElementType = FormElementType.Input;

  placeholder?: string;
  prefixCss?: string;
  suffixCss?: string;
  floatLabel?: FloatLabelType;
  hideRequiredMarker?: boolean;
  hintLabel?: string;
  hintPosition?: HintPosition;

  constructor(opt?: INgxMaterialInput) {
    super(opt);
    merge(this, opt);
  }
}
