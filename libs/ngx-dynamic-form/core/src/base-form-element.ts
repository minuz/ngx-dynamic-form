import { Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { v4 as newGuid } from 'uuid';

import { INgxFormElement } from './models/interfaces/ngx-form-element.interface';
import { INgxForm } from './models/interfaces/ngx-form.interface';
import { INgxElementStyling } from './models/interfaces/ngx-styling.interface';

export abstract class BaseFormElementComponent implements OnInit {

  @Input() formElement: INgxFormElement;
  @Input() formModel: INgxForm;

  private _elementId: string;
  private _elementName: string;

  get elementId(): string {
    if (!this._elementId) {
      this._elementId = this.buildElementId(this.formElement);
    }

    return this._elementId;
  }

  get elementName(): string {
    if (!this._elementName) {
      this._elementName = this.buildElementName(this.formElement);
    }

    return this._elementName;
  }

  get styling(): INgxElementStyling {
    return this.formElement ?
      this.formElement.styling : undefined;
  }

  get formControl(): AbstractControl {
    if (this.formElement) {
      const control = this.formModel.formGroup.get(this.formElement.name);
      return control;
    }
  }

  get width(): string {
    return this.styling.width ? this.styling.width : '100%';
  }

  get isDebug(): boolean {
    return this.formElement.debug;
  }

  get hidden(): boolean {
    if (this.formElement && this.formControl) {
      const isHidden = this.formElement.isHidden ?
        this.formElement.isHidden(this.formModel, this.formControl, this.formValue) : false;

      return isHidden;
    }
    return false;
  }

  get disabled(): boolean {
    if (this.formElement && this.formControl) {
      const isDisabled = this.formElement.isDisabled ?
        this.formElement.isDisabled(this.formModel, this.formControl, this.formValue) : false;

      return isDisabled;
    }
    return false;
  }

  get formValue(): FormGroup {
    return this.formModel && this.formModel.formGroup ?
      this.formModel.formGroup.value : undefined;
  }

  ngOnInit() { }

  hasErrors(): boolean {
    if (this.disabled || !this.formControl) {
      return false;
    } else {
      return (this.formControl.touched || this.formControl.dirty) && !this.formControl.valid;
    }
  }

  getControl(controlName: string): AbstractControl {
    const control = this.formModel.formGroup.get(controlName);
    return control;
  }

  buildElementId(element: INgxFormElement): string {
    return `${element.id}_${newGuid()}`;
  }

  buildElementName(element: INgxFormElement): string {
    return `${element.name}_${newGuid()}`;
  }
}
