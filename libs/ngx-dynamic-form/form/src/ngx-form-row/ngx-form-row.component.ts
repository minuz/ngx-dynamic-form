import { Component, Input, ViewEncapsulation } from '@angular/core';
import { INgxForm, INgxFormRow } from '@ngx-dynamic-form/core';

@Component({
  selector: 'ngx-form-row',
  templateUrl: './ngx-form-row.component.html',
  styleUrls: ['./ngx-form-row.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxFormRowComponent {

  @Input() formRow: INgxFormRow;
  @Input() formModel: INgxForm;

  get isHidden() {
    return this.formRow.isHidden ?
      this.formRow.isHidden(this.formModel, null, null) : false;
  }

}
