import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { INgxForm } from '@ngx-dynamic-form/core';

import { INgxMaterialElement } from './../models/interface/ngx-material-element.interface';

@Component({
  selector: 'ngx-material-form-element',
  templateUrl: './ngx-material-form-element.component.html',
  styleUrls: ['./ngx-material-form-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialFormElementComponent implements OnInit {

  @Input() formElement: INgxMaterialElement;
  @Input() formModel: INgxForm;
  @Input() formData: any;

  get isDebug() {
    return this.formModel && this.formModel.debug ?
      this.formModel.debug : false;
  }

  constructor() { }

  ngOnInit() {
    if (this.isDebug) {
      console.log('ngOnInit @NgxMaterialFormElementComponent', {
        formElement: this.formElement,
        formModel: this.formModel,
        formData: this.formData,
      });
    }
  }
}
