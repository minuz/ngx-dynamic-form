import { merge } from 'lodash';

import { ValidationType } from '../enums';
import { INgxFormElementValidation } from '../interfaces/ngx-form-element-validation.interface';
import { BooleanPredicate } from '../types';

export class NgxFormElementValidation implements INgxFormElementValidation {
  type: ValidationType;
  parameter?: any;
  message?: string;
  conditionalValidation?: BooleanPredicate;

  constructor(opt?: INgxFormElementValidation) {
    merge(this, opt);
  }
}
