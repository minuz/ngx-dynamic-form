import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { INgxMaterialRadioGroup } from '../../models/interface/ngx-material-radio-group.interface';
import { BaseGroupableInputComponent } from '../base-groupable-input.component';
import { INgxMaterialRadio } from './../../models/interface/ngx-material-radio.interface';

@Component({
  selector: 'ngx-material-radio',
  templateUrl: './ngx-material-radio.component.html',
  styleUrls: ['./ngx-material-radio.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialRadioComponent extends BaseGroupableInputComponent implements OnInit {

  get radio() {
    return this.formElement as INgxMaterialRadio;
  }

  get radioGroup() {
    return this.formElement as INgxMaterialRadioGroup;
  }

  get groupableElements(): INgxMaterialRadio[] {
    return this.radioGroup ? this.radioGroup.elements : null;
  }

  constructor() { super(); }

  ngOnInit() {
  }

}
