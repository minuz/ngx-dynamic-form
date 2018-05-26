import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormElementComponent } from '@ngx-dynamic-form/core';

import { INgxMaterialTextarea } from '../models/interface/ngx-material-textarea.interface';

@Component({
  selector: 'ngx-material-textarea',
  templateUrl: './ngx-material-textarea.component.html',
  styleUrls: ['./ngx-material-textarea.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxMaterialTextareaComponent extends BaseFormElementComponent implements OnInit {

  get textarea() {
    return this.formElement as INgxMaterialTextarea;
  }

  constructor() { super(); }
}
