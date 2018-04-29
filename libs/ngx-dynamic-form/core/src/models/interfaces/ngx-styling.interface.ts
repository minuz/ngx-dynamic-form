export interface INgxElementStyling {

  /**
   * @description
   * Property to assign custom css class to the element container.
   * The container is set around both label and control
   */
  containerCss?: string;

  /**
   * @description
   * Property that sets the css class for the HTML control.
   */
  controlCss?: string;

  /**
   * @description
   * Property to define the css class on the control wrapper.
   */
  controlWrapperCss?: string;

  /**
   * @description
   * When using checkbox, use this property to set the bootstrap css for styling.
   * i.e.: radio-inline to group the checkbox buttons horizontally
   */
  labelCss?: string;

  /**
   * @description
   * Checkboxe and Radio contains inner label. Use this property to control the inner label style.
   */
  innerLabelCss?: string;

  /**
   * @description
   * When using groupable elements, you may customized the group element with custom CSS class.
   */
  groupCss?: string;

  /**
   * @description
   * The width value for the control
   */
  width?: string;
}

export interface INgxFormPanelStyling {

  /**
   * @description
   * Sets the css classes for the panel div element
   */
  panelCss?: string;

  /**
   * @description
   * Should the panel contains a label, use this property to define the label css.
   */
  panelLabelCss?: string;

  /**
   * @description
   * Should the panel adds a wrapper around the inside controls, use this property to define its css.
   */
  controlModelsWrapperCss?: string;
}
