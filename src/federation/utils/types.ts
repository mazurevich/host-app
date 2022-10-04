export type WebpackContainer = {
  init: (scopes: { [key: string]: unknown }) => Promise<void>;
};

export type ModuleFactory = () => unknown;

export type WebpackModules = {
  get: (module: string) => Promise<ModuleFactory>;
};
