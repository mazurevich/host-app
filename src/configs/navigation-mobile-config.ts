import { BasicRoutePath, MobileRoutePath } from "@/constants";
import {
  ApprovalsMobile,
  ApprovalsMobileActive,
  HamburgerMenu,
  HomeMobile,
  InsightsMobile,
  EServicesMobile,
  EServicesMobileActive,
  HomeMobileActive,
  InsightsMobileActive,
  HamburgerMenuActive,
} from "@/assets/icons";
import { NavigationMobileConfigItem } from "@/contracts/navigation-mobile";

export const navigationMobileConfig: NavigationMobileConfigItem[] = [
  {
    iconElement: HomeMobile,
    iconElementActive: HomeMobileActive,
    path: BasicRoutePath.Home,
    title: "home",
  },
  {
    iconElement: ApprovalsMobile,
    iconElementActive: ApprovalsMobileActive,
    path: BasicRoutePath.Approvals,
    title: "approvals",
  },
  {
    iconElement: EServicesMobile,
    iconElementActive: EServicesMobileActive,
    path: MobileRoutePath.EServices,
    title: "e-services",
  },
  {
    iconElement: InsightsMobile,
    iconElementActive: InsightsMobileActive,
    path: BasicRoutePath.Insights,
    title: "insights",
  },
  {
    iconElement: HamburgerMenu,
    iconElementActive: HamburgerMenuActive,
    path: MobileRoutePath.MoreMenu,
    title: "hamburger",
  },
];
