import { ErrorStateMatcher } from '@angular/material';
import { DataPredicate, ISelectData } from '@ngx-dynamic-form/core';

import { INgxMaterialInput } from './ngx-material-input.interface';

export interface INgxMaterialSelect extends INgxMaterialInput {
  /**
   * @description
   * A function to compare the option values with the selected values.
   * The first argument is a value from an option.
   * The second is a value from the selection. A boolean should be returned.
   *
   * @memberof INgxMaterialSelect
   */
  compareWith?: (o1: any, o2: any) => boolean;

  /**
   * @description
   * An object used to control when error messages are shown.
   */
  errorStateMatcher?: ErrorStateMatcher;

  /**
   * @description
   * Whether the user should be allowed to select multiple options.
   */
  multiple?: boolean;

  /**
   * @description
   * Classes to be passed to the select panel.Supports the same syntax as ngClass.
   */
  panelClass?: string | string[] | Set<string> | { [key: string]: any };

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
