import { INgxFormPanel } from './ngx-panel.interface';
import { BooleanPredicate } from './../types';
import { INgxFormElement } from './ngx-form-element.interface';

/**
 * @description
 * Interface that describes and set properties of a row within the main form.
 * You may choose to add all elements within the same row or add a row per element.
 */
export interface INgxFormRow {

  /**
   * @description
   * Property to define a form panel within this form row.
   */
  panels?: INgxFormPanel[];

  /**
   * @description
   * Property to define all form elements for this form row.
   */
  elements?: INgxFormElement[];

  /**
   * @description
   * Property to assign custom css class to the element container.
   * By default this property will merge with existing css from library.
   * Should you need to override the default css, set the property overrideRowCss
   */
  rowCss?: string | string[];

  /**
   * @description
   * Property to determine whether the library will override defaults and use the user defined css.
   */
  overrideRowCss?: string | string[];

  /**
   * @description
   * Set flag to true to see debug info
   */
  debug?: boolean;

  /**
   * @description
   * Expression that receives the entire form model and should return a boolean value.
   * When true, should hide the element.
   */
  isHidden?: BooleanPredicate;
}
