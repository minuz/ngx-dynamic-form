import { merge } from 'lodash';

import { INgxElementStyling } from './../interfaces/ngx-styling.interface';

export class NgxElementStyling implements INgxElementStyling {

  containerCss?: string | string[];
  controlCss?: string | string[];
  controlWrapperCss?: string | string[];
  labelCss?: string | string[];
  innerLabelCss?: string | string[];
  groupCss?: string | string[];
  width?: string;

  constructor(opt?: INgxElementStyling) {
    merge(this, opt);
  }
}
