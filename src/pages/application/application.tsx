import { useRoutes } from "react-router-dom";

import { routes } from "@/pages/application/routes";

export const Application = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};
