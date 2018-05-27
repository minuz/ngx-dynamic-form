import { INgxMaterialInput } from './ngx-material-input.interface';

export interface INgxMaterialDatepicker extends INgxMaterialInput {
  /**
   * @description
   * The view that the calendar should start in.
   */
  startView?: 'month' | 'year';

  /**
   * @description
   * Whether the calendar UI is in touch mode.In touch mode the calendar opens in a dialog
   * rather than a popup and elements have more padding to allow for bigger touch targets.
   */
  touchUi?: boolean;

  /**
   * @description
   * Function that can be used to filter out dates within the datepicker.
   */
  matDatepickerFilter?: (date: Date | null) => boolean;

  /**
   * @description
   * The maximum valid date.
   */
  max?: Date | null;

  /**
   * @description
   * The minimum valid date.
   */
  min?: Date | null;

  /**
   * @description
   * Expression to resolve the value emitted by matDatepicker.closedStream.
   */
  closedStream?: (value: any) => void;

  /**
   * @description
   * Expression to resolve the value emitted by matDatepicker.openedStream.
   */
  openedStream?: (value: any) => void;

  /**
   * @description
   * Expression to resolve the value emitted by matDatepickerInput.dateChange
   *
   * The event is emitted when a change event is fired on this <input>.
   */
  dateChange?: (value: any) => void;

  /**
   * @description
   * Expression to resolve the value emitted by matDatepickerInput.dateInput
   *
   * The event is emitted when an input event is fired on this <input>.
   */
  dateInput?: (value: any) => void;

  /**
   * @description
   * Classes to be passed to the date picker panel. Supports the same syntax as ngClass.
   */
  panelClass?: string | string[];

  /**
   * @description
   * The toggle button can display the calendar icon as a prefix or suffix.
   * When null or undefined, the icon will not be displayed.
   */
  iconPosition?: 'prefix' | 'suffix';

  /**
   * @description
   * Define a custom icon for the datepicker.
   */
  customIcon?: string;

  /**
   * @description
   * Font awesome has some small alignment issues.
   * Set the flag to true so the library automatically applies the fixes.
   * If you are using a different icon library, you might need to perform your own alignment items.
   *
   * Using Material Icon should not require any sort of alignment fix.
   */
  isFontAwesome?: boolean;

  /**
   * @description
   * Set the date format as standard date conventions.
   * i.e.: dd/MM/YYYY
   */
  dateFormat?: string;
}
