import { ValidationType } from '../enums';
import { BooleanPredicate } from './../types';

/**
 * @description
 * Interface that holds settings for form field validation.
 */
export interface INgxFormElementValidation {

  /**
   * @description
   * Property that defines the type of validation to be added.
   * Available types matches what Angular provides.
   */
  type: ValidationType;

  /**
   * @description
   * Some validations accepts a parameter.
   * Set your parameter based on what the Angular ValidatorFn offers.
   */
  parameter?: any;

  /**
   * @description
   * When defining a custom validation, set the custom validation name so we can get the proper error message.
   */
  customValidationName?: string;

  /**
   * @description
   * The error message to be shown on the form when the field is not valid.
   */
  message?: string;

  /**
   * @description
   * Add a conditional validation function to conditionally append a form Validator to the form field.
   * When the condition is not met, the validation will not be added.
   * The function will always receive the component itself as parameter so one can have everything available to perform its logic.
   */
  conditionalValidation?: BooleanPredicate;
}
