import { Component, OnInit } from '@angular/core';
import { NgxForm, ValidationType } from '@ngx-dynamic-form/core';
import { MaterialFormBuilderService } from '@ngx-dynamic-form/material';

@Component({
  selector: 'app-material-form',
  template: `<ngx-form [formModel]="form"></ngx-form>`,
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {
  form: NgxForm;
  constructor(private fb: MaterialFormBuilderService) {}

  ngOnInit() {
    this.form = this.fb.newForm();
    this.form.addRowWithElements([
      this.fb.textbox({
        id: 'txt-first-name',
        name: 'firstName',
        placeholder: 'First Name',
        required: true,
        validations: [
          { type: ValidationType.Required, message: 'First Name is required' },
          {
            type: ValidationType.MinLength,
            parameter: 2,
            message: 'First name must have at least 2 character'
          }
        ]
      }),
      this.fb.textbox({
        id: 'txt-last-name',
        name: 'lastName',
        placeholder: 'Last Name',
        required: true,
        validations: [
          { type: ValidationType.Required, message: 'Last Name is required' },
          {
            type: ValidationType.MinLength,
            parameter: 2,
            message: 'Last Name must have at least 2 character'
          }
        ]
      })
    ]);
  }
}
