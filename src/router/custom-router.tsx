import { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";
import { CustomRouterProps } from "@/router/types";
import { checkIsMobile } from "@/utils/check-is-mobile";
import { MOBILE_MODE_SUB_URL } from "@/constants/paths";

export const CustomRouter = ({ history, ...props }: CustomRouterProps) => {
  const isMobile = checkIsMobile();

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  const baseName = isMobile ? `/${MOBILE_MODE_SUB_URL}` : "";

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
      basename={baseName}
    />
  );
};
