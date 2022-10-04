import { useCallback, useEffect, useState } from "react";
import { acquireToken } from "@/utils";

export const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  const updateToken = useCallback(() => {
    return acquireToken().then(token => setToken(token.accessToken));
  }, []);

  useEffect(() => {
    updateToken();
  }, [updateToken]);

  return { token, updateToken };
};
