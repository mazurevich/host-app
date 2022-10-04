declare namespace StylesScssNamespace {
  export interface IStylesScss {
    eServicesButtonWrapper: string;
    headerWrapper: string;
    notificationCircle: string;
    notificationIconWrapper: string;
    rightBarSection: string;
    searchInput: string;
    title: string;
    transparent: string;
  }
}

declare const StylesScssModule: StylesScssNamespace.IStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesScssNamespace.IStylesScss;
};

export = StylesScssModule;
