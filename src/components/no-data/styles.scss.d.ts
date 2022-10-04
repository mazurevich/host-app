declare namespace StylesScssNamespace {
  export interface IStylesScss {
    button: string;
    buttonHorizontal: string;
    container: string;
    containerHorizontal: string;
    containerMobile: string;
    subtitle: string;
    subtitleHorizontal: string;
    title: string;
    titleHorizontal: string;
    titleMobile: string;
  }
}

declare const StylesScssModule: StylesScssNamespace.IStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesScssNamespace.IStylesScss;
};

export = StylesScssModule;
