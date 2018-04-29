import { merge } from 'lodash';

import { INgxFormElement } from './../interfaces/ngx-form-element.interface';
import { INgxFormPanel } from './../interfaces/ngx-panel.interface';
import { INgxFormRow } from './../interfaces/ngx-row.interface';
import { BooleanPredicate } from './../types';

export class NgxFormRow implements INgxFormRow {

  panels?: INgxFormPanel[] = [];
  elements?: INgxFormElement[] = [];
  rowCss?: string;
  overrideRowCss?: string;
  debug?: boolean;
  isHidden?: BooleanPredicate;

  public static CreateRow(opt?: INgxFormRow) {
    return new NgxFormRow(opt);
  }

  constructor(opt?: INgxFormRow) {
    merge(this, opt);
  }

  addElement(element: INgxFormElement) {
    this.elements.push(element);
    return this;
  }

  addElements(elements: INgxFormElement[]) {
    this.elements = elements;
    return this;
  }
}
