import { PropsWithChildren } from "react";

import { AppContext } from "@/contexts";


export const AppProvider: React.FC<PropsWithChildren<object>> = ({
  children,
}): React.ReactElement => (
  <AppContext.Provider value={{}}>{children}</AppContext.Provider>
);
