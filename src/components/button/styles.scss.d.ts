declare namespace StylesScssNamespace {
  export interface IStylesScss {
    button: string;
    large: string;
    link: string;
    negative: string;
    positive: string;
    primary: string;
    secondary: string;
    small: string;
  }
}

declare const StylesScssModule: StylesScssNamespace.IStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesScssNamespace.IStylesScss;
};

export = StylesScssModule;
