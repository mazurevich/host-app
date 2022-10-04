import { NavigationConfigItem } from "@/contracts/navigation";
import {
  ApprovalsActive,
  Approvals,
  CompanyActive,
  Company,
  HomeActive,
  Home,
  InsightsActive,
  Insights,
  NewsActive,
  News,
  Settings,
} from "@/assets/icons";
import { BasicRoutePath } from "@/constants";

export const navigationConfig: NavigationConfigItem[] = [
  {
    iconElement: Home,
    iconElementActive: HomeActive,
    path: BasicRoutePath.Home,
    title: "Home",
  },
  {
    iconElement: Approvals,
    iconElementActive: ApprovalsActive,
    path: BasicRoutePath.Approvals,
    title: "Approvals",
  },
  {
    iconElement: News,
    iconElementActive: NewsActive,
    path: BasicRoutePath.News,
    title: "News",
  },
  {
    iconElement: Insights,
    iconElementActive: InsightsActive,
    path: BasicRoutePath.Insights,
    title: "Insights",
  },
  {
    iconElement: Company,
    iconElementActive: CompanyActive,
    path: BasicRoutePath.Company,
    title: "Company",
  },
  {
    iconElement: Settings,
    iconElementActive: Settings,
    path: BasicRoutePath.Settings,
    title: "Settings",
  },
];
