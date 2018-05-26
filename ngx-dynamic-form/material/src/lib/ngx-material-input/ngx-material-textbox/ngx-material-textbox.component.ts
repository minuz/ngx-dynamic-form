import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { INgxMaterialTextbox } from '../../models/interface/ngx-material-textbox.interface';
import { BaseFormElementComponent } from '@ngx-dynamic-form/core';

@Component({
  selector: 'ngx-material-textbox',
  templateUrl: './ngx-material-textbox.component.html',
  styleUrls: ['./ngx-material-textbox.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialTextboxComponent extends BaseFormElementComponent implements OnInit {

  get textbox() {
    return this.formElement as INgxMaterialTextbox;
  }

  constructor() { super(); }

  ngOnInit() {
  }

}
