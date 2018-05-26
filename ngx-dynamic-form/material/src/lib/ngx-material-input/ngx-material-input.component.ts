import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { INgxMaterialInput } from '../models/interface/ngx-material-input.interface';
import { BaseFormElementComponent } from '@ngx-dynamic-form/core';

@Component({
  selector: 'ngx-material-input',
  templateUrl: './ngx-material-input.component.html',
  styleUrls: ['./ngx-material-input.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialInputComponent extends BaseFormElementComponent implements OnInit {

  get materialInput() {
    return this.formElement as INgxMaterialInput;
  }

  constructor() { super(); }

  ngOnInit() {
    if (this.isDebug) {
      console.log('ngOnInit@NgxMaterialInputComponent => ', {
        formElemenent: this.formElement,
        formControl: this.formControl,
      });
    }
  }
}
