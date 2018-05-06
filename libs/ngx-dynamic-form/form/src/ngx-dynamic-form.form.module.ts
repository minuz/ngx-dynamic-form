import { CommonModule } from '@angular/common';
import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DYNAMIC_FORM_ELEMENT } from '@ngx-dynamic-form/core';
import { DynamicModule } from 'ng-dynamic-component';

import { NgxFormElementComponent } from './ngx-form-element/ngx-form-element.component';
import { NgxFormPanelComponent } from './ngx-form-panel/ngx-form-panel.component';
import { NgxFormRowComponent } from './ngx-form-row/ngx-form-row.component';
import { NgxFormComponent } from './ngx-form/ngx-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    DynamicModule.withComponents([]),
  ],
  declarations: [
    NgxFormComponent,
    NgxFormRowComponent,
    NgxFormPanelComponent,
    NgxFormElementComponent
  ],
  exports: [NgxFormComponent]
})
export class NgxDynamicFormModule {
  static withComponents(config: { components: Array<Type<any>>, formElement: Type<any> }): ModuleWithProviders {
    return {
      ngModule: NgxDynamicFormModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config.components, multi: true },
        { provide: DYNAMIC_FORM_ELEMENT, useValue: config.formElement },
      ],
    };
  }
}
