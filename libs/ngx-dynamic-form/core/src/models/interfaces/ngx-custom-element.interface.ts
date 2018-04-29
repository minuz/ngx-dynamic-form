import { AbstractControl } from '@angular/forms';

import { INgxForm } from './ngx-form.interface';
import { INgxFormElement } from './ngx-form-element.interface';

export type InputExpression = (form: INgxForm, control: AbstractControl) => { [k: string]: any };
export type OutputExpression = (form: INgxForm, control: AbstractControl) => { [k: string]: any };

export interface INgxCustomElement extends INgxFormElement {

  /**
   * @description
   * The custom component to be loaded.
   * Must be a compatible Angular Component.
   * NOTE: The component must be added to entryComponents collection on the NgModule that consumes the NgxDynamicFormModule.
   */
  component: any;

  /**
   * @description
   * The expression to obtain the component input.
   */
  componentInput?: InputExpression;

  /**
   * @description
   * The expression to obtain the component output.
   */
  componentOutput?: OutputExpression;

  /**
   * @description
   * The custom element can be used to create buttons that does not require a form control.
   * Set flag to true to prevent the creation of the form control and prevent its addition to the main form.
   */
  preventControlCreation?: boolean;
}
