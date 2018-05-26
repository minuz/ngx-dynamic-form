import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BaseFormElementComponent } from '../base-form-element';
import { INgxCustomElement } from './../models/interfaces/ngx-custom-element.interface';

@Component({
  selector: 'ngx-custom-element',
  templateUrl: './ngx-custom-element.component.html',
  styleUrls: ['./ngx-custom-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxCustomElementComponent extends BaseFormElementComponent implements OnInit {

  get dynamicElement() {
    return this.formElement ?
      this.formElement as INgxCustomElement : undefined;
  }

  get dynamicComponent() {
    return this.dynamicElement ?
      this.dynamicElement.component : undefined;
  }

  get dynamicComponentInput() {
    return this.dynamicElement && this.dynamicElement.componentInput ?
      this.dynamicElement.componentInput(this.formModel, this.formControl) : undefined;
  }

  get dynamicComponentOutput() {
    return this.dynamicElement && this.dynamicElement.componentOutput ?
      this.dynamicElement.componentOutput(this.formModel, this.formControl) : undefined;
  }

  constructor() { super(); }

  ngOnInit() {
    if (this.formElement.debug) {
      console.log('ngOnInit @NgxCustomElementComponent', {
        formElement: this.dynamicElement,
        formModel: this.formModel,
        formControl: this.formControl,
        data: this.formValue,
        input: this.dynamicComponentInput,
        output: this.dynamicComponentOutput,
      });
    }

    super.ngOnInit();
  }
}
