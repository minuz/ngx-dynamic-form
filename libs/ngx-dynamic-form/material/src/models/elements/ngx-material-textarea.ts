import { FormElementType } from '@ngx-dynamic-form/core';
import { merge } from 'lodash';

import { INgxMaterialTextarea } from '../interface/ngx-material-textarea.interface';
import { NgxMaterialInput } from './ngx-material-input';

export class NgxMaterialTextarea extends NgxMaterialInput implements INgxMaterialTextarea {

  elementType = FormElementType.Textarea;
  
  cols?: number;
  rows?: number;

  constructor(opt?: INgxMaterialTextarea) {
    super(opt);
    merge(this, opt);
  }
}
