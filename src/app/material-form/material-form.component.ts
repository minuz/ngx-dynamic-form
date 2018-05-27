import { Component, OnInit } from '@angular/core';
import { NgxForm, ValidationType } from '@ngx-dynamic-form/core';
import { NgxMaterialTextbox, NgxMaterialCheckboxGroup, NgxMaterialCheckbox } from '@ngx-dynamic-form/material';

@Component({
  selector: 'ngx-material-form',
  template: `
    <ngx-form [formModel]="formModel"></ngx-form>
  `,
  styles: []
})
export class MaterialFormComponent implements OnInit {
  formModel: NgxForm;
  constructor() {}

  ngOnInit() {
    const form = NgxForm.Create();
    form.addRowWithElement(
      new NgxMaterialTextbox({
        id: 'First Name',
        name: 'firstName',
        placeholder: 'First Name',
        validations: [
          { type: ValidationType.Required, message: 'First name is required' },
          {
            type: ValidationType.MinLength,
            parameter: 2,
            message: 'First name must have at least 2 characters'
          }
        ]
      })
    );
    form.addRowWithElement(new NgxMaterialCheckboxGroup({
      id: 'chk-group',
      name: 'chkGroup',
      elements: [
        new NgxMaterialCheckbox({
          id: 'chk-opt1',
          name: 'opt1',
          checkboxLabel: 'Male'
        }),
        new NgxMaterialCheckbox({
          id: 'chk-opt2',
          name: 'opt2',
          checkboxLabel: 'Female'
        }),
      ]
    }));

    this.formModel = form;
  }
}
