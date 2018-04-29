import { merge } from 'lodash';

import { INgxElementStyling } from './../interfaces/ngx-styling.interface';

export class NgxElementStyling implements INgxElementStyling {

  containerCss?: string;
  controlCss?: string;
  controlWrapperCss?: string;
  labelCss?: string;
  innerLabelCss?: string;
  groupCss?: string;
  width?: string;

  constructor(opt?: INgxElementStyling) {
    merge(this, opt);
  }
}
