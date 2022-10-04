import styles from "@/components/layout/styles.scss";
import { FC, useEffect } from "react";
import clsx from "clsx";
import { LayoutProps } from "@/components/layout/types";
import { checkIsMobile } from "@/utils/check-is-mobile";
import { ANIMATION_DURATION } from "@/constants";

export const Layout: FC<LayoutProps> = ({ children }) => {
  const isMobile = checkIsMobile();
  const isDesktop = !isMobile;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--animation-duration",
      `${ANIMATION_DURATION}ms`,
    );
  }, []);

  return (
    <div
      className={clsx(
        styles.container,
        isDesktop ? styles.desktopContainer : styles.mobileContainer,
      )}
    >
      {children}
    </div>
  );
};
