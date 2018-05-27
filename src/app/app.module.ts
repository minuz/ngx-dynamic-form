import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDynamicFormModule } from '@ngx-dynamic-form/form';
import { NgxDynamicFormMaterialModule, ComponentsMap } from '@ngx-dynamic-form/material';

import { AppNavComponent } from './app-nav/app-nav.component';
import { AppComponent } from './app.component';
import { MaterialFormComponent } from './material-form/material-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    MaterialFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxDynamicFormMaterialModule,
    NgxDynamicFormModule.withComponents(ComponentsMap)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
