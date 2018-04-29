import { merge } from 'lodash';

import { FormElementType } from '../enums';
import { INgxCustomElement, InputExpression, OutputExpression } from './../interfaces/ngx-custom-element.interface';
import { NgxFormElement } from './ngx-form-element';

export class NgxCustomElement extends NgxFormElement implements INgxCustomElement {

  elementType = FormElementType.Dynamic;
  preventControlCreation? = false;

  component: any;
  componentInput?: InputExpression;
  componentOutput?: OutputExpression;

  constructor(opt?: INgxCustomElement) {
    super(opt);
    merge(this, opt);
  }
}
