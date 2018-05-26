import { ErrorStateMatcher } from '@angular/material';
import { DataPredicate, FormElementType, ISelectData } from '@ngx-dynamic-form/core';
import { merge } from 'lodash';

import { INgxMaterialSelect } from '../interface/ngx-material-select.interface';
import { NgxMaterialInput } from './ngx-material-input';

export class NgxMaterialSelect extends NgxMaterialInput implements INgxMaterialSelect {

  elementType = FormElementType.Select;

  compareWith?: (o1: any, o2: any) => boolean;
  errorStateMatcher?: ErrorStateMatcher;
  multiple?: boolean;
  panelClass?: string | string[] | Set<string> | { [key: string]: any };
  inlineData?: ISelectData[];
  data?: DataPredicate;
  addDefaultBlank?: boolean;
  parent?: string;

  constructor(opt?: INgxMaterialSelect) {
    super(opt);
    merge(this, opt);
  }
}
