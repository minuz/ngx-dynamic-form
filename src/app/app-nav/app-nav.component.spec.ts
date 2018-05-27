import { LayoutModule } from '@angular/cdk/layout';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDynamicFormModule } from '@ngx-dynamic-form/form';
import { ComponentsMap, NgxDynamicFormMaterialModule } from '@ngx-dynamic-form/material';

import { MaterialFormComponent } from '../material-form/material-form.component';
import { AppNavComponent } from './app-nav.component';


describe('AppNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(fakeAsync(() => {
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
      declarations: [ AppNavComponent, MaterialFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
