import { generatePath, Navigate, RouteObject } from "react-router-dom";
import { checkIsMobile } from "@/utils";
import {
  APPROVALS_TAB_PATH,
  ApprovalsTab,
  BasicRoutePath,
  ErrorPagePath,
  MobileRoutePath,
  NEWS_PATH,
} from "@/constants";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/errors/not-found/not-found";
import { News } from "@/pages/news";
import { Approvals } from "@/pages/approvals";
import { Insights } from "@/pages/company";
import { Company } from "@/assets/icons";

const mobileRoutes = [
  {
    path: MobileRoutePath.Overview,
    element: <Navigate to={BasicRoutePath.Home} />,
  },
];

const routesBase: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={BasicRoutePath.Home} />,
  },
  {
    path: BasicRoutePath.Home,
    element: <Home />,
  },
  {
    path: BasicRoutePath.Approvals,
    element: (
      <Navigate
        to={generatePath(APPROVALS_TAB_PATH, { tab: ApprovalsTab.Inbox })}
      />
    ),
  },
  {
    path: BasicRoutePath.News,
    element: <News />,
  },
  {
    path: APPROVALS_TAB_PATH,
    element: <Approvals />,
  },
  {
    path: BasicRoutePath.Insights,
    element: <Insights />,
  },
  {
    path: NEWS_PATH,
    element: <News />,
  },
  {
    path: ErrorPagePath.NotFound,
    element: <NotFound />,
  },
  {
    path: BasicRoutePath.Company,
    element: <Company />,
  },
  {
    path: "/*",
    element: <Navigate to={ErrorPagePath.NotFound} />,
  },
];

export const routes = checkIsMobile()
  ? [...mobileRoutes, ...routesBase]
  : routesBase;
