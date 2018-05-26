import { ThemePalette } from '@angular/material';
import { INgxFormElement } from '@ngx-dynamic-form/core';

export interface INgxMaterialElement extends INgxFormElement {

  /**
   * @description
   * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will take precedence so this may be omitted.
   */
  ariaLabel?: string;

  /**
   * @description
   * Users can specify the aria-labelledby attribute which will be forwarded to the input element
   */
  ariaLabelledby?: string | null;

  /**
   * @description
   * Theme color palette for the component.
   * Possible values: 'primary' | 'accent' | 'warn' | undefined
   *
   * @default 'primary'
   */
  color?: ThemePalette;

  /**
   * @description
   * Whether ripples are disabled.
   */
  disableRipple?: boolean;

  /**
   * @description
   * Whether the checkbox is required.
   */
  required?: boolean;
}
