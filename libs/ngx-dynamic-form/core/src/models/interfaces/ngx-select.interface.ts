import { DataPredicate } from './../types';
import { INgxFormElement } from './ngx-form-element.interface';

export interface ISelectData {
  value: any;
  text: string;
}

export interface INgxSelect extends INgxFormElement {

  /**
   * @description
   * Set inline data
   */
  inlineData?: ISelectData[];

  /**
   * @description
   * An expression that returns an Observable as data source.
   */
  data?: DataPredicate;

  /**
   * @description
   * Whether the control should add a default blank value as an option.
   */
  addDefaultBlank?: boolean;

  /**
   * @description
   * Whether this select is parent of another select component
   */
  parent?: string;
}
