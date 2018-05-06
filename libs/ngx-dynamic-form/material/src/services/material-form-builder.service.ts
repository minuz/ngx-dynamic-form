import { Injectable } from '@angular/core';
import { INgxForm, NgxForm } from '@ngx-dynamic-form/core';

import { NgxMaterialTextbox } from '../models/entities/ngx-material-textbox';
import { INgxMaterialTextbox } from '../models/interface/ngx-material-textbox.interface';

@Injectable()
export class MaterialFormBuilderService {
  newForm(form?: INgxForm) {
    return new NgxForm(form);
  }

  textbox(txtbox: INgxMaterialTextbox) {
    return new NgxMaterialTextbox(txtbox);
  }
}
