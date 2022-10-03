import { PropsWithChildren } from "react";
import axios from "axios";

import { AppContext } from "@/contexts";
import { acquireToken } from "@/utils";

axios.interceptors.request.use(
  async config => {
    const { accessToken } = await acquireToken();

    const common = config.headers?.common || {};

    return {
      ...config,
      headers: {
        ...config.headers,
        common: {
          ...common,
          Authorization: `Bearer ${accessToken}`,
        },
      },
    };
  },
  error => Promise.reject(error),
);

export const AppProvider: React.FC<PropsWithChildren<object>> = ({
  children,
}): React.ReactElement => (
  <AppContext.Provider value={{}}>{children}</AppContext.Provider>
);
