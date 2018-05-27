import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialFormComponent } from './material-form.component';

describe('MaterialFormComponent', () => {
    let comp: MaterialFormComponent;
    let fixture: ComponentFixture<MaterialFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ MaterialFormComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(MaterialFormComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });
});
