import { FormElementType, InputType } from '@ngx-dynamic-form/core';
import { merge } from 'lodash';

import { INgxMaterialDatepicker } from '../interface/ngx-material-datepicker.interface';
import { NgxMaterialInput } from './ngx-material-input';

export class NgxMaterialDatepicker extends NgxMaterialInput
  implements INgxMaterialDatepicker {
  elementType: FormElementType = FormElementType.Datepicker;
  inputType: InputType = InputType.Date;

  startView?: 'month' | 'year' = 'month';
  iconPosition: 'prefix' | 'suffix' = 'prefix';
  touchUi?: boolean;
  matDatepickerFilter?: (date: Date | null) => boolean;
  max: Date | null;
  min: Date | null;
  closedStream?: (value: any) => void;
  openedStream?: (value: any) => void;
  dateChange?: (value: any) => void;
  dateInput?: (value: any) => void;
  hideRequiredMarker?: boolean;
  panelClass?: string | string[];
  isFontAwesome?: boolean;
  customIcon?: string;
  dateFormat?: string;

  constructor(opt?: INgxMaterialDatepicker) {
    super(opt);
    merge(this, opt);
  }
}
