import { merge } from 'lodash';

import { INgxFormElement } from './../interfaces/ngx-form-element.interface';
import { INgxFormPanel } from './../interfaces/ngx-panel.interface';
import { INgxFormRow } from './../interfaces/ngx-row.interface';
import { INgxFormPanelStyling } from './../interfaces/ngx-styling.interface';

export class NgxFormPanel implements INgxFormPanel {

  elements?: INgxFormElement[] = [];
  rows?: INgxFormRow[] = [];

  panelLabel?: string;
  addControlModelsWrapper?: boolean;
  styling?: INgxFormPanelStyling;

  public static Create(opt?: INgxFormPanel) {
    return new NgxFormPanel(opt);
  }

  constructor(opt?: INgxFormPanel) {
    merge(this, opt);
  }

  addRow(row: INgxFormRow) {
    this.rows.push(row);
    return this;
  }

  addRows(rows: INgxFormRow[]) {
    this.rows = rows;
    return this;
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
