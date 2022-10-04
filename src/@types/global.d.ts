import { WebpackContainer, WebpackModules } from "@/federation/utils/types";

export declare global {
  interface Window {
    __WB_MANIFEST: [];
    CURRENT_APP_VERSION: string;
    REACT_APP_API_URL: string;
    REACT_APP_AD_CLIENT_ID: string;
    REACT_APP_AD_TANENT_ID: string;
    REACT_APP_IS_SOCKETS_ENABLED: boolean;
    API_CONFIG_VERSION: string;
    API_LIGHT_APPS_VERSION: string;
    API_PROXY_VERSION: string;
    ADDITIONAL_SCOPES: string[];
    NEWS_REMOTE_URL: string;
    SEARCH_APP: {
      API_URL: string;
      APP_URL: string;
      PROFILE_URL: string;
      keys: {
        GOOGLE_API_KEY: string;
      };
    };
    ReactNativeWebView?: {
      postMessage: (payload: string) => void;
    };
    [scope: string]: WebpackModules | WebpackContainer;
  }
}
