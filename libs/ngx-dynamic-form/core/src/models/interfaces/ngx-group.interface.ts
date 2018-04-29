import { GroupAlignment, LabelPosition } from '../enums';
import { INgxInput } from './ngx-input.interface';

export interface INgxGroup extends INgxInput {

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
  elements: INgxInput[];
}
