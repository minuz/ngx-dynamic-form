import { merge } from 'lodash';

import { FormElementType } from '../enums';
import { INgxSelect, ISelectData } from '../interfaces/ngx-select.interface';
import { DataPredicate } from '../types';
import { NgxFormElement } from './ngx-form-element';

export class NgxSelect extends NgxFormElement implements INgxSelect {

  elementType = FormElementType.Select;
  inlineData?: ISelectData[];
  data?: DataPredicate;
  addDefaultBlank?: boolean;
  parent?: string;

  constructor(opt?: INgxSelect) {
    super(opt);
    merge(this, opt);
  }
}
