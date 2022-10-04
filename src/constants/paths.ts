export const MOBILE_MODE_SUB_URL = "/web-view";
export const PROFILE_URL = "/profile";

export enum BasicRoutePath {
  Home = "/home",
  Approvals = "/approvals",
  News = "/news",
  Insights = "/insights",
  Company = "/company",
  Settings = "/settings",
  Profile = "/profile",
  EService = "/e-service-item",
  Search = "/search",
}

export enum MobileRoutePath {
  EServices = "e-services",
  MoreMenu = "more-menu",
  OrgChart = "org-chart",
  Overview = "overview",
}

export enum MobileEServicesRoutePath {
  Directory = "directory",
  Item = "item",
  Search = "e-services-search",
}

export enum ApprovalsTab {
  Inbox = "inbox",
  Tracking = "tracking",
}

export enum ErrorPagePath {
  NotFound = "not-found",
}

export const EServicePath = `${BasicRoutePath.EService}/:id`;

export const INSIGHTS_TAB_PATH = `${BasicRoutePath.Insights}/:tab`;

export const INSIGHTS_EMBEDDED_PATH = `${BasicRoutePath.Insights}/:id`;

export const APPROVALS_TAB_PATH = `${BasicRoutePath.Approvals}/:tab`;

export const PROFILE_PATH = `${BasicRoutePath.Profile}/:email`;

export const ORG_CHART_PATH = `${MobileRoutePath.OrgChart}/:email`;

export const NEWS_PATH = `${BasicRoutePath.News}/:module/*`;

export const PAGES_WITH_VISIBLE_MOBILE_NAV_BAR = [
  BasicRoutePath.Home,
  BasicRoutePath.Insights,
  MobileRoutePath.EServices,
  MobileRoutePath.MoreMenu,
  MobileRoutePath.OrgChart,
  APPROVALS_TAB_PATH,
  ORG_CHART_PATH,
  INSIGHTS_TAB_PATH,
];
