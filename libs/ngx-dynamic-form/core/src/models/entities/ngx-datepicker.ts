import { merge } from 'lodash';

import { INgxDatePicker } from '../interfaces/ngx-datepicker.interface';
import { NgxInput } from './ngx-input';

export class NgxDatepicker extends NgxInput implements INgxDatePicker {
  dateFormat?: string;

  constructor(opt?: INgxDatePicker) {
    super(opt);
    merge(this, opt);
  }
}
