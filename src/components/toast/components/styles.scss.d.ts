declare namespace StylesScssNamespace {
  export interface IStylesScss {
    default: string;
    error: string;
    info: string;
    mobileToastWrapper: string;
    success: string;
    toastActionButton: string;
    toastBody: string;
    toastButtonsWrapper: string;
    toastCloseButton: string;
    toastText: string;
    toastTitle: string;
    toastTypeIcon: string;
    toastWrapper: string;
    warning: string;
  }
}

declare const StylesScssModule: StylesScssNamespace.IStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesScssNamespace.IStylesScss;
};

export = StylesScssModule;
