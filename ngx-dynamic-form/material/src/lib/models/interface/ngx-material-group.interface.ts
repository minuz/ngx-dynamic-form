import { GroupAlignment, LabelPosition } from '@ngx-dynamic-form/core';

import { INgxMaterialElement } from './ngx-material-element.interface';
import { INgxMaterialInput } from './ngx-material-input.interface';

export interface INgxMaterialGroup extends INgxMaterialElement {

  /**
   * @description
   * Define the alignment of groupable elements.
   * Possible values: 'stacked' or 'inline'
   * Default value is always inline.
   *
   * NOTE: This property only affects the parent of grouped elements.
   *
   * @default 'inline'
   */
  align?: GroupAlignment;

  /**
   * @description
   * Property to determine the position of the label within the element.
   * Whether the label should appear after or before the radio button. Defaults to 'after'
   *
   * Accepted values: 'before' | 'after'
   * @default 'after'
   */
  labelPosition?: LabelPosition;

  /**
   * @description
   * The array of elements that is part of this group.
   */
  elements: INgxMaterialInput[];
 }
