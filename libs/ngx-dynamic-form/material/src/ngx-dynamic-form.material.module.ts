import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDynamicFormCoreModule } from '@ngx-dynamic-form/core';

import { NgxMaterialDatepickerComponent } from './ngx-material-datepicker/ngx-material-datepicker.component';
import { NgxMaterialFormElementComponent } from './ngx-material-form-element/ngx-material-form-element.component';
import { NgxMaterialCheckboxComponent } from './ngx-material-input/ngx-material-checkbox/ngx-material-checkbox.component';
import { NgxMaterialInputComponent } from './ngx-material-input/ngx-material-input.component';
import { NgxMaterialRadioComponent } from './ngx-material-input/ngx-material-radio/ngx-material-radio.component';
import { NgxMaterialTextboxComponent } from './ngx-material-input/ngx-material-textbox/ngx-material-textbox.component';
import { NgxMaterialSelectComponent } from './ngx-material-select/ngx-material-select.component';
import { NgxMaterialTextareaComponent } from './ngx-material-textarea/ngx-material-textarea.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NgxDynamicFormCoreModule,
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  declarations:[
    NgxMaterialCheckboxComponent,
    NgxMaterialDatepickerComponent,
    NgxMaterialFormElementComponent,
    NgxMaterialInputComponent,
    NgxMaterialRadioComponent,
    NgxMaterialSelectComponent,
    NgxMaterialTextareaComponent,
    NgxMaterialTextboxComponent
  ],
  exports:[NgxMaterialFormElementComponent]
})
export class NgxDynamicFormMaterialModule {}
