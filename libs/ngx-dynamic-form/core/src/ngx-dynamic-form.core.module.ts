import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicModule } from 'ng-dynamic-component';

import { NgxCustomElementComponent } from './ngx-custom-element/ngx-custom-element.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    DynamicModule.withComponents([]),
  ],
  declarations: [NgxCustomElementComponent],
  exports: [NgxCustomElementComponent]
})
export class NgxDynamicFormCoreModule { }
