import { FormElementType, HelpLocation } from '../enums';
import { BooleanPredicate } from './../types';
import { INgxElementStyling } from './ngx-styling.interface';
import { INgxFormElementValidation } from './ngx-form-element-validation.interface';

export interface INgxFormElement {

  /**
   * @description
   * When true, this property will display debug information.
   */
  debug?: boolean;

  /**
   * @description
   * Property to determine the type of cell.
   * At the moment, the supported types are Dynamic or Normal.
   */
  elementType?: FormElementType;

  /**
   * @description
   * Set an ID for the form element.
   * Typically, should be unique across your form elements.
   * Will also be used to form the id of the HTML tag.
   */
  id: string;

  /**
   * @description
   * Property to set the name of the form element.
   * This property is used to create the form control.
   * Typically, this matches the property name of the form dto to be submitted.
   */
  name: string;

  /**
   * @description
   * Represents the value attribute of the native input element
   */
  value?: any;

  /**
   * @description
   * Should you need to specify a default value. Use this property to assign to form control at the moment of its creation
   */
  defaultValue?: any;

  /**
   * @description
   * Property to set the label of the checkbox button.
   */
  label?: string;

  /**
   * @description
   * Property the enables a helper button.
   * Set the message to be displayed.
   */
  help?: string;

  /**
   * @description
   * The help icon currently can be placed in two positions.
   * On the main label and on inner label (for radio/checkboxes)
   *
   * @default 'label'
   */
  helpLocation?: HelpLocation;

  /**
   * @description
   * Expression to evaluate if this control will be hidden or not.
   * When the expression returns true, the control will be hidden from DOM using the hidden attribute.
   *
   * NOTE: Hidding this element will also hide the label if exists.
   */
  isHidden?: BooleanPredicate;

  /**
   * @description
   * Expression to evaluate if this control will be disabled or not.
   * When the expression returns true, the control will be disabled from DOM using the disabled attribute.
   */
  isDisabled?: BooleanPredicate;

  /**
   * @description
   * Property to define the validations for this form element.
   */
  validations?: INgxFormElementValidation[];

  /**
   * @description
   * Property responsible to hold definition for form element styling.
   */
  styling?: INgxElementStyling;
}
