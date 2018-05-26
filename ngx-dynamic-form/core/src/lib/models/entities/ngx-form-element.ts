import { merge } from 'lodash';

import { FormElementType, HelpLocation } from '../enums';
import { INgxElementStyling } from '../interfaces/ngx-styling.interface';
import { INgxFormElementValidation } from '../interfaces/ngx-form-element-validation.interface';
import { INgxFormElement } from '../interfaces/ngx-form-element.interface';
import { BooleanPredicate } from './../types';

export class NgxFormElement implements INgxFormElement {

  debug?: boolean;
  elementType?: FormElementType;
  id: string;
  name: string;
  defaultValue?: any;
  label?: string;
  help?: string;
  helpLocation?: HelpLocation = HelpLocation.Label;
  isHidden?: BooleanPredicate;
  isDisabled?: BooleanPredicate;
  validations?: INgxFormElementValidation[] = [];
  styling?: INgxElementStyling;

  private _value;
  set value(value: any) {
    this._value = value;
  }

  get value() {
    if (this._value === null || this._value === undefined) {
      return this.name;
    }
  }

  constructor(opt?: INgxFormElement) {
    merge(this, opt);
  }
}
