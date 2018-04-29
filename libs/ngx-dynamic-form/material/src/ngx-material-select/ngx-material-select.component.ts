import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseFormElementComponent, ISelectData } from '@ngx-dynamic-form/core';
import { Observable } from 'rxjs/Observable';

import { INgxMaterialSelect } from '../models/interface/ngx-material-select.interface';

@Component({
  selector: 'ngx-material-select',
  templateUrl: './ngx-material-select.component.html',
  styleUrls: ['./ngx-material-select.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialSelectComponent extends BaseFormElementComponent implements OnInit {

  data$: Observable<ISelectData[]>;
  savedData: any;

  get materialSelect() {
    return this.formElement as INgxMaterialSelect;
  }

  get isEditMode() {
    return this.formModel.isEditMode;
  }

  get width() {
    return this.styling.width ?
      this.styling.width : '100%';
  }

  get isDisabled() {
    const isDisabled = this.formControl && this.materialSelect.isDisabled ?
      this.materialSelect.isDisabled(this.formModel, this.formControl, this.formValue) : false;

    return isDisabled;
  }

  get selected(): any {
    if (this.isEditMode) {
      return this.formControl.value;
    }
  }

  set selected(value) {
    this.formControl.setValue(value);
  }

  constructor() { super(); }

  ngOnInit() {

    if (this.isDebug) {
      console.log('ngOnInit@NgxMaterialSelectComponent => ', {
        formElement: this.formElement,
        formControl: this.formControl,
      });
    }

    if (this.materialSelect.parent) {
      this.setParentHandling();
    } else if (this.materialSelect.data) {
      this.data$ = this.materialSelect.data(undefined)
        .map((data) => this.addDefaultBlank(data));
    } else {
      this.data$ = Observable.of(this.materialSelect.inlineData);
    }
  }

  setParentHandling() {
    const control = this.getControl(this.materialSelect.parent);
    // This is required on edit so it loads the data set so the user can change the values of the select.
    if (this.formModel.isEditMode && control.value) {
      this.data$ = this.dataLoaderHandler(control.value);
    }
    // Then subscribe to any changes on the parent component
    control.valueChanges
      .debounceTime(200)
      .subscribe((value) => this.data$ = this.dataLoaderHandler(value));
  }

  dataLoaderHandler(value: any) {
    if (value && (value !== '' && value !== 'None')) {
      return this.materialSelect.data(value)
        .map((data) => this.addDefaultBlank(data));
    } else {
      return Observable.of<any[]>();
    }
  }

  setInitialValue() {
    if (this.isEditMode) {
      this.selected = this.savedData;
    } else {
      this.selected = this.materialSelect.value;
    }
  }

  addDefaultBlank(data: any[]) {
    if (data && this.materialSelect.addDefaultBlank) {
      // Check if there's a blank data already
      if (!data.some((item) => item.id === '')) {
        data.splice(0, 0, { value: '', viewValue: 'None' });
      }
    }

    return data;
  }
}
