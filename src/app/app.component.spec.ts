import { LayoutModule } from '@angular/cdk/layout';
import { async, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDynamicFormModule } from '@ngx-dynamic-form/form';
import { ComponentsMap, NgxDynamicFormMaterialModule } from '@ngx-dynamic-form/material';

import { AppNavComponent } from './app-nav/app-nav.component';
import { AppComponent } from './app.component';
import { MaterialFormComponent } from './material-form/material-form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
      declarations: [AppComponent, AppNavComponent, MaterialFormComponent]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to ngx-dynamic-form!'
  //   );
  // }));
});
