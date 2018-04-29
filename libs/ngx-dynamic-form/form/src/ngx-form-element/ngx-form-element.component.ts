import { Component, Inject, Input, OnDestroy, OnInit, Type, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DYNAMIC_FORM_ELEMENT,
  FormElementType,
  INgxCustomElement,
  INgxElementStyling,
  INgxForm,
  INgxFormElement,
  INgxFormElementValidation,
  InputType,
  ValidationType,
} from '@ngx-dynamic-form/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ngx-form-element',
  templateUrl: './ngx-form-element.component.html',
  styleUrls: ['./ngx-form-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxFormElementComponent implements OnInit, OnDestroy {
  valueChangesSubscription: Subscription;
  @Input() formElement: INgxFormElement;
  @Input() formModel: INgxForm;

  controlsArray: Array<{ name: string; control: AbstractControl }> = [];
  control: AbstractControl;

  get formData(): any {
    return this.formModel ? this.formModel.formData : null;
  }

  get formGroup(): FormGroup {
    return this.formModel ? this.formModel.formGroup : null;
  }

  get styling(): INgxElementStyling {
    return this.formElement ? this.formElement.styling : null;
  }

  get isHidden(): boolean {
    const isHidden =
      this.formElement && this.formElement.isHidden
        ? this.formElement.isHidden(
            this.formModel,
            this.control,
            this.formValue
          )
        : false;

    return isHidden ? this.removeControl(isHidden) : this.addControl(isHidden);
  }

  get isControlInForm(): boolean {
    return this.formControl === null ? false : true;
  }

  get isCheckboxGroup(): boolean {
    if (this.formElement) {
      const type = this.formElement.constructor.name;
      return type.includes('CheckboxGroup');
    } else {
      return false;
    }
  }

  get formControl(): AbstractControl {
    return this.formGroup ? this.formGroup.get(this.formElement.name) : null;
  }

  get component(): Type<any> {
    return this.dynamicFormElement;
  }

  get formValue(): any {
    return this.formModel && this.formGroup ? this.formGroup.value : null;
  }

  get componentInput(): any {
    return {
      formElement: this.formElement,
      formModel: this.formModel,
      formData: this.formModel.formData
    };
  }

  get labelFix(): boolean {
    const type = this.formElement.constructor.name;
    let shouldApply;
    switch (this.formElement.elementType) {
      case FormElementType.Input:
        const inputType = (this.formElement as any).inputType;
        switch (inputType) {
          case InputType.Checkbox:
          case InputType.Radio:
            shouldApply = false;
            break;
          default:
            shouldApply = type.includes('Material');
            break;
        }
        break;
      case FormElementType.Textarea:
      case FormElementType.Select:
        shouldApply = type.includes('Material');
        break;
      default:
        shouldApply = false;
        break;
    }

    return shouldApply;
  }

  constructor(
    @Inject(DYNAMIC_FORM_ELEMENT) private dynamicFormElement: Type<any>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildFormControl();

    if (this.formElement.isDisabled) {
      this.valueChangesSubscription = this.formModel.formGroup.valueChanges.subscribe(
        values => this.toggleControlDisable(values)
      );
    }
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  private toggleControlDisable(values) {
    const isDisabled = this.formElement.isDisabled(
      this.formModel,
      this.control,
      values
    );
    if (isDisabled) {
      this.control.disable({ emitEvent: false });
    } else {
      this.control.enable({ emitEvent: false });
    }
  }

  private addControl(isHidden: boolean) {
    if (this.isCheckboxGroup) {
      this.controlsArray.forEach(item =>
        this.formGroup.addControl(item.name, item.control)
      );
    } else {
      const customElement = this.formElement as INgxCustomElement;
      if (customElement && customElement.preventControlCreation) {
        return isHidden;
      } else if (!this.isControlInForm) {
        this.formGroup.addControl(this.formElement.name, this.control);
      }
    }
    return isHidden;
  }

  private removeControl(isHidden: boolean) {
    if (this.isCheckboxGroup) {
      this.controlsArray.forEach(item =>
        this.formGroup.removeControl(item.name)
      );
    } else {
      this.formGroup.removeControl(this.formElement.name);
    }

    return isHidden;
  }

  private buildFormControl() {
    const customElement = this.formElement as INgxCustomElement;
    if (customElement && customElement.preventControlCreation) {
      return;
    }

    const validators = this.getElementValidations();
    this.isCheckboxGroup
      ? this.buildCheckboxControls(validators)
      : this.buildSingleControl(validators);
  }

  private buildCheckboxControls(validators) {
    const checkboxGroup = this.formElement as any;
    checkboxGroup.elements.forEach(checkbox => {
      const controlValue = this.getControlValue(checkbox.name);
      const control = validators.length
        ? this.formBuilder.control(controlValue, validators)
        : this.formBuilder.control(controlValue);

      if (
        checkbox.isDisabled &&
        checkbox.isDisabled(this.formModel, control, this.formValue)
      ) {
        control.disable();
      }

      this.controlsArray.push({ name: checkbox.name, control });
    });
  }

  private buildSingleControl(validators) {
    const controlValue = this.getControlValue(this.formElement.name);
    this.control = validators.length
      ? this.formBuilder.control(controlValue, validators)
      : this.formBuilder.control(controlValue);
  }

  private getControlValue(key: string) {
    let controlValue = this.formData ? this.formData[key] : null;
    if (controlValue === null || controlValue === undefined) {
      controlValue = this.formElement.defaultValue;
    }
    return controlValue;
  }

  private getElementValidations() {
    const validationArray = [];

    if (this.formElement.validations) {
      this.formElement.validations.forEach(
        (validator: INgxFormElementValidation) => {
          if (validator.conditionalValidation) {
            if (
              validator.conditionalValidation(
                this.formModel,
                null,
                this.formValue
              )
            ) {
              this.setValidator(validator, validationArray);
            }
          } else {
            this.setValidator(validator, validationArray);
          }
        }
      );
    }

    return validationArray;
  }

  private setValidator(
    formItemValidation: INgxFormElementValidation,
    validatorsArray: Validators[]
  ) {
    switch (formItemValidation.type) {
      case ValidationType.Min:
        validatorsArray.push(Validators.min(+formItemValidation.parameter));
        break;
      case ValidationType.Max:
        validatorsArray.push(Validators.max(+formItemValidation.parameter));
        break;
      case ValidationType.MinLength:
        validatorsArray.push(
          Validators.minLength(+formItemValidation.parameter)
        );
        break;
      case ValidationType.MaxLength:
        validatorsArray.push(
          Validators.maxLength(+formItemValidation.parameter)
        );
        break;
      case ValidationType.Required:
        validatorsArray.push(Validators.required);
        break;
      case ValidationType.RequiredTrue:
        validatorsArray.push(Validators.requiredTrue);
        break;
      case ValidationType.Email:
        validatorsArray.push(Validators.email);
        break;
      case ValidationType.Pattern:
        validatorsArray.push(Validators.pattern(formItemValidation.parameter));
        break;
      case ValidationType.Custom:
        validatorsArray.push(formItemValidation.parameter);
    }
  }
}
