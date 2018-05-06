import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { MaterialFormComponent } from './material-form/material-form.component';
import { NgxDynamicFormModule } from '@ngx-dynamic-form/form';
import { NgxDynamicFormMaterialModule, ComponentsMap } from '@ngx-dynamic-form/material';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    NgxDynamicFormMaterialModule,
    NgxDynamicFormModule.withComponents(ComponentsMap),
  ],
  declarations: [AppComponent, MaterialFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
