import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormElementComponent } from '@ngx-dynamic-form/core';

import { INgxMaterialDatepicker } from '../models/interface/ngx-material-datepicker.interface';

@Component({
  selector: 'ngx-material-datepicker',
  templateUrl: './ngx-material-datepicker.component.html',
  styleUrls: ['./ngx-material-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialDatepickerComponent extends BaseFormElementComponent implements OnInit {

  get datepicker() {
    return this.formElement as INgxMaterialDatepicker;
  }

  get customIcon() {
    if (this.datepicker.customIcon) {
      return this.datepicker.isFontAwesome ?
        ['fix-icon-prefix', 'fa-fw', this.datepicker.customIcon] : this.datepicker.customIcon;
    } else {
      return [];
    }
  }

  ngOnInit() {
    if (this.formElement.debug) {
      console.log('ngOnInit @NgxMaterialDatepickerComponent', {
        formModel: this.formModel,
        formElement: this.datepicker,
      });
    }
  }

  openedStream(event) {
    if (this.datepicker && this.datepicker.openedStream) {
      this.datepicker.openedStream(event);
    }
  }

  closedStream(event) {
    if (this.datepicker && this.datepicker.closedStream) {
      this.datepicker.closedStream(event);
    }
  }

  dateInput(event) {
    if (this.datepicker && this.datepicker.dateInput) {
      this.datepicker.dateInput(event);
    }
  }

  dateChange(event) {
    if (this.datepicker && this.datepicker.dateChange) {
      this.datepicker.dateChange(event);
    }
  }
}
