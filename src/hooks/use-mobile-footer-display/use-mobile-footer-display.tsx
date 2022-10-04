import { useSelector } from "react-redux";
import { selectIsMobileKeyboardOpen } from "@/pages/application/redux/application-selector";
// import { selectIsInboxItemActive } from "@/pages/approvals/redux/inbox/selectors";
// import { selectIsTrackingItemActive } from "@/pages/approvals/redux/tracking/selectors";
// import { selectIsMobileSearchMode } from "./../../pages/approvals/redux/approvals/selectors";
import { useLocation, matchPath } from "react-router-dom";
import { useMemo } from "react";
import { PAGES_WITH_VISIBLE_MOBILE_NAV_BAR } from "@/constants";
import { MOBILE_MODE_SUB_URL } from "@/constants";

export const useMobileFooterDisplay = () => {
  const isMobileKeyboardOpen: boolean = useSelector(selectIsMobileKeyboardOpen);
  const isInboxItemActive = false;
  const isTrackingItemActive = false;
  const isMobileSearchMode = false;

  const { pathname } = useLocation();

  const isPageWithVisibleNavBar = useMemo(
    () =>
      PAGES_WITH_VISIBLE_MOBILE_NAV_BAR.some((path) =>
        matchPath({ path }, pathname.replace(`/${MOBILE_MODE_SUB_URL}`, ""))
      ),
    [pathname]
  );

  const isNavigationBarHidden =
    isMobileSearchMode ||
    isInboxItemActive ||
    isTrackingItemActive ||
    !isPageWithVisibleNavBar ||
    isMobileKeyboardOpen;

  return {
    isNavigationBarHidden,
  };
};
