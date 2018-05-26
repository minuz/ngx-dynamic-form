import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { INgxMaterialCheckbox } from '../../models/interface/ngx-material-checkbox.interface';
import { BaseGroupableInputComponent } from '../base-groupable-input.component';
import { INgxMaterialCheckboxGroup } from './../../models/interface/ngx-material-checkbox-group.interface';

@Component({
  selector: 'ngx-material-checkbox',
  templateUrl: './ngx-material-checkbox.component.html',
  styleUrls: ['./ngx-material-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialCheckboxComponent extends BaseGroupableInputComponent implements OnInit {

  get checkbox() {
    return this.formElement as INgxMaterialCheckbox;
  }

  get checkboxGroup() {
    return this.formElement as INgxMaterialCheckboxGroup;
  }

  get groupableElements(): INgxMaterialCheckbox[] {
    return this.radioGroup ? this.radioGroup.elements : null;
  }

  constructor() { super(); }

  ngOnInit() {
  }

}
