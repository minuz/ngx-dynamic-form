import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  INgxForm,
  INgxFormElement,
  INgxFormPanel,
  INgxFormPanelStyling,
  INgxFormRow
} from '@ngx-dynamic-form/core';

@Component({
  selector: 'ngx-form-panel',
  templateUrl: './ngx-form-panel.component.html',
  styleUrls: ['./ngx-form-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxFormPanelComponent {
  @Input() formModel: INgxForm;
  @Input() formPanel: INgxFormPanel;

  get styling(): INgxFormPanelStyling {
    return this.formPanel ? this.formPanel.styling : null;
  }

  get formElements(): INgxFormElement[] {
    return this.formPanel ? this.formPanel.elements : null;
  }

  get rows(): INgxFormRow[] {
    return this.formPanel ? this.formPanel.rows : null;
  }
}
