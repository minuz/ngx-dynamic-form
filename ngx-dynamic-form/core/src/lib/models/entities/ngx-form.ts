import { FormGroup } from '@angular/forms';
import { merge, remove } from 'lodash';
import { Observable } from 'rxjs';
import { v4 as newGuid } from 'uuid';

import { INgxFormElement } from './../interfaces/ngx-form-element.interface';
import { INgxForm } from './../interfaces/ngx-form.interface';
import { INgxFormPanel } from './../interfaces/ngx-panel.interface';
import { INgxFormRow } from './../interfaces/ngx-row.interface';
import { NgxFormPanel } from './ngx-panel';
import { NgxFormRow } from './ngx-row';

export class NgxForm implements INgxForm {
  modelId = newGuid();
  rows?: INgxFormRow[] = [];
  panels?: INgxFormPanel[] = [];
  subModels?: INgxForm[] = [];
  isEditMode?: boolean = false;
  formGroup?: FormGroup = new FormGroup({});

  debug?: boolean;
  wrapperCss?: string;
  name?: string;
  formData?: any;

  public static Create(opt?: INgxForm) {
    return new NgxForm(opt);
  }

  constructor(opt?: INgxForm) {
    merge(this, opt);
  }

  removeSubModel = modelId => {
    return Observable.create(observer => {
      remove(this.subModels, model => model.modelId === modelId);
      observer.next(`Model Id ${modelId} removed.`);
      observer.complete();
    });
  }

  addPanelWithRow(row: INgxFormRow, panel?: INgxFormPanel) {
    this.panels.push(new NgxFormPanel(panel).addRow(row));
    return this;
  }

  addPanelWithRows(rows: INgxFormRow[], panel?: INgxFormPanel) {
    this.panels.push(new NgxFormPanel(panel).addRows(rows));
    return this;
  }

  addPanelWithElement(element: INgxFormElement, panel?: INgxFormPanel) {
    this.panels.push(new NgxFormPanel(panel).addElement(element));
    return this;
  }

  addPanelWithElements(elements: INgxFormElement[], panel?: INgxFormPanel) {
    this.panels.push(new NgxFormPanel(panel).addElements(elements));
    return this;
  }

  addRow(row?: INgxFormRow) {
    if (row) {
      this.rows.push(row);
    } else {
      this.rows.push(
        NgxFormRow.CreateRow({ elements: new Array<INgxFormElement>() })
      );
    }
    return this;
  }

  addRowWithElement(element: INgxFormElement, row?: INgxFormRow) {
    this.rows.push(NgxFormRow.CreateRow(row).addElement(element));
    return this;
  }

  addRowWithElements(elements: INgxFormElement[], row?: INgxFormRow) {
    this.rows.push(NgxFormRow.CreateRow(row).addElements(elements));
    return this;
  }
}
