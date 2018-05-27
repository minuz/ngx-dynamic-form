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
  private _formControl: AbstractControl;
  private _styling: INgxElementStyling;

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
    if (!this._styling) {
      this._styling = this.formElement ? this.formElement.styling : null;
    }
    return this._styling;
  }

  get formControl(): AbstractControl {
    if (this._formControl) {
      return this._formControl;
    } else if (this.formElement) {
      this._formControl = this.getControl(this.formElement.name);
    }
    return this._formControl;
  }

  get width(): string {
    return this.styling.width ? this.styling.width : '100%';
  }

  get isDebug(): boolean {
    return this.formElement.debug;
  }

  get hidden(): boolean {
    if (this.formElement && this.formControl) {
      const isHidden = this.formElement.isHidden
        ? this.formElement.isHidden(
            this.formModel,
            this.formControl,
            this.formValue
          )
        : false;

      return isHidden;
    }
    return false;
  }

  get disabled(): boolean {
    if (this.formElement && this.formControl) {
      const isDisabled = this.formElement.isDisabled
        ? this.formElement.isDisabled(
            this.formModel,
            this.formControl,
            this.formValue
          )
        : false;

      return isDisabled;
    }
    return false;
  }

  get formValue(): FormGroup {
    return this.formModel && this.formModel.formGroup
      ? this.formModel.formGroup.value
      : undefined;
  }

  ngOnInit() {
    if (this.formElement && this.formElement.debug) {
      console.log('ngOnInit@BaseFormElementComponent', {
        formModel: this.formModel,
        formElement: this.formElement
      });
    }
  }

  hasErrors(): boolean {
    if (this.disabled || !this.formControl) {
      return false;
    } else {
      return (
        (this.formControl.touched || this.formControl.dirty) &&
        !this.formControl.valid
      );
    }
  }

  getControl(controlName: string): AbstractControl {
    try {
      if (!controlName) {
        console.log(
          'Control Name was not provided and cannot get the form control'
        );
        return null;
      } else {
        const control = this.formModel.formGroup.get(controlName);
        return control;
      }
    } catch (error) {
      console.log('An error occurred trying to get form control', error);
      return null;
    }
  }

  buildElementId(element: INgxFormElement): string {
    return `${element.id}_${this.formElement.uniqueId}`;
  }

  buildElementName(element: INgxFormElement): string {
    return `${element.name}_${this.formElement.uniqueId}`;
  }
}
