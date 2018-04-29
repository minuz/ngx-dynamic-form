import { OnInit } from '@angular/core';
import { BaseFormElementComponent, GroupAlignment, LabelPosition } from '@ngx-dynamic-form/core';

import { INgxMaterialCheckbox } from '../models/interface/ngx-material-checkbox.interface';
import { INgxMaterialInput } from '../models/interface/ngx-material-input.interface';
import { INgxMaterialRadio } from '../models/interface/ngx-material-radio.interface';
import { INgxMaterialGroup } from './../models/interface/ngx-material-group.interface';

export abstract class BaseGroupableInputComponent extends BaseFormElementComponent
  implements OnInit {
  get materialInput(): INgxMaterialRadio | INgxMaterialCheckbox {
    return this.formElement as INgxMaterialInput;
  }

  get radioGroup() {
    return this.formElement as INgxMaterialGroup;
  }

  get isGroupable(): boolean {
    const groupable =
      this.radioGroup &&
      this.radioGroup.elements &&
      this.radioGroup.elements.length > 0;
    return groupable;
  }

  get isStacked(): boolean {
    return this.isGroupable
      ? this.radioGroup.align &&
          this.radioGroup.align === GroupAlignment.Stacked
      : false;
  }

  get isInline(): boolean {
    return this.isGroupable
      ? this.radioGroup.align && this.radioGroup.align === GroupAlignment.Inline
      : false;
  }

  get groupableElements(): INgxMaterialInput[] {
    return this.radioGroup ? this.radioGroup.elements : null;
  }

  get labelPosition() {
    const labelPosition = this.materialInput
      ? this.materialInput.labelPosition
      : LabelPosition.After;
    return labelPosition;
  }

  get disableRipple() {
    const disableRipple = this.materialInput
      ? this.materialInput.disableRipple
      : undefined;
    return disableRipple;
  }

  get color() {
    const color = this.materialInput ? this.materialInput.color : undefined;

    return color;
  }

  get checked() {
    let isChecked = false;
    if (this.materialInput && this.formControl) {
      if (this.materialInput.checked) {
        isChecked = this.materialInput.checked(
          this.formModel,
          this.formControl,
          this.formValue
        );
      } else {
        isChecked = false;
      }
    }

    return isChecked;
  }

  constructor() {
    super();
  }

  ngOnInit() {}

  getLabelPosition(child: INgxMaterialRadio | INgxMaterialCheckbox) {
    return child && child.useParentDefinitions
      ? this.labelPosition
      : child.labelPosition;
  }

  getDisableRipple(child: INgxMaterialRadio | INgxMaterialCheckbox) {
    const value =
      child && child.useParentDefinitions
        ? this.disableRipple
        : child.disableRipple;

    return value;
  }

  getColor(child: INgxMaterialRadio | INgxMaterialCheckbox) {
    return child && child.useParentDefinitions ? this.color : child.color;
  }

  isHidden(child: INgxMaterialRadio | INgxMaterialCheckbox) {
    return child && child.isHidden
      ? child.isHidden(this.formModel, this.formControl, this.formValue)
      : false;
  }

  isChecked(child: INgxMaterialRadio | INgxMaterialCheckbox) {
    return child && child.checked
      ? child.checked(this.formModel, this.formControl, this.formValue)
      : false;
  }

  isDisabled(child: INgxMaterialRadio | INgxMaterialCheckbox) {
    return child && child.isDisabled
      ? child.isDisabled(this.formModel, this.formControl, this.formValue)
      : false;
  }
}
