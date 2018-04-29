import { merge } from 'lodash';

import { GroupAlignment, LabelPosition } from '../enums';
import { INgxGroup } from '../interfaces/ngx-group.interface';
import { INgxInput } from '../interfaces/ngx-input.interface';
import { NgxInput } from './ngx-input';

export class NgxGroup extends NgxInput implements INgxGroup {

  align?: GroupAlignment = GroupAlignment.Inline;
  labelPosition?: LabelPosition = LabelPosition.After;
  elements: INgxInput[] = [];

  constructor(opt?: INgxGroup) {
    super(opt);
    merge(this, opt);
  }
}
