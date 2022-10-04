import "@/scss/reset.scss";
import { FC, ReactElement  } from "react";
import { checkIsMobile } from "@/utils/check-is-mobile";
import { AppProvider } from "@/providers";
import { BottomNavigation, Header, Layout, SideNavigation } from "@/components";
import { Application } from "@/pages/application";
import { Toaster } from "react-hot-toast";


export const App: FC = (): ReactElement => {
  const isMobile = checkIsMobile();

  return (
    <AppProvider>
      <Toaster
        position={isMobile ? "top-center" : "top-right"}
        gutter={10}
        toastOptions={{ duration: 5000 }}
        reverseOrder
      />
      {!isMobile && (
          <SideNavigation />
      )}
      <Layout>
        {!isMobile && <Header />}
        <Application />
        {isMobile && <BottomNavigation />}
      </Layout>
    </AppProvider>
  );
};
