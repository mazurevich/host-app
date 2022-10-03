import "ui/scss/reset.scss";
import { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIsMobile } from "@/utils/check-is-mobile";
import { AppProvider } from "@/providers";
// import { checkIsMobile } from "ui/utils";
// import {
//   BottomNavigation,
//   EServicesSideDrawer,
//   Header,
//   SideNavigation,
//   Layout,
//   ManagePreferencesSideDrawer,
//   NoticesSideDrawer,
// } from "@/components";
// import { getMyProfile } from "@/components/profile";
// import { Application } from "@/pages";
// import { AppProvider } from "@/providers";
//
// import { useSocketLoginRefresh } from "./hooks";
// import { RouteDrawer } from "@/components/route-drawer";

export const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const isMobile = checkIsMobile();

  return (
    <AppProvider>
      {/*<Toaster*/}
      {/*  position={isMobile ? "top-center" : "top-right"}*/}
      {/*  gutter={10}*/}
      {/*  toastOptions={{ duration: 5000 }}*/}
      {/*  reverseOrder*/}
      {/*/>*/}
      {/*{!isMobile && (*/}
      {/*  <>*/}
      {/*    <SideNavigation />*/}
      {/*    <EServicesSideDrawer />*/}
      {/*    <ManagePreferencesSideDrawer />*/}
      {/*    <NoticesSideDrawer />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*<RouteDrawer />*/}
      {/*<Layout>*/}
      {/*  {!isMobile && <Header />}*/}
      {/*  <Application />*/}
      {/*  {isMobile && <BottomNavigation />}*/}
      {/*</Layout>*/}
      wolow
    </AppProvider>
  );
};
