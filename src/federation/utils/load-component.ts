import { WebpackContainer, WebpackModules } from "./types";

export function loadComponent(scope: string, module: string) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    await __webpack_init_sharing__("default");
    const container = window[scope] as WebpackContainer; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    // eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    const factory = await (window[scope] as WebpackModules).get(module);
    return factory();
  };
}
