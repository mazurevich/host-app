import styles from "@/components/page/styles.scss";
import { FC } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { checkIsMobile } from "@/utils";
import { getSafeAreaInsertsInNumber } from "@/utils";
import { BOTTOM_NAVIGATION_HEIGHT } from "@/constants";
import { PageProps } from "@/components/page/types";
import { selectSafeAreaInserts } from "@/pages/application/redux/application-selector";
import { useMobileFooterDisplay } from "@/hooks/use-mobile-footer-display";

export const Page: FC<PageProps> = ({ style, className, children }) => {
  const isMobile = checkIsMobile();

  const safeAreaInserts = useSelector(selectSafeAreaInserts);
  const safeAreaHeight = getSafeAreaInsertsInNumber(safeAreaInserts);
  const { isNavigationBarHidden } = useMobileFooterDisplay();

  return (
    <div
      style={{
        paddingBottom: isMobile
          ? `${
              safeAreaHeight +
              (isNavigationBarHidden ? 0 : BOTTOM_NAVIGATION_HEIGHT)
            }px`
          : 0,
        ...style,
      }}
      className={clsx(styles.page, !isMobile && styles.pageDesktop, className)}
    >
      {children}
    </div>
  );
};
