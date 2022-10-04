import styles from "@/components/bottom-navigation/styles.scss";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getSafeAreaInsertsInNumber } from "@/utils";
import { BOTTOM_NAVIGATION_HEIGHT } from "@/constants";
import { navigationMobileConfig } from "@/configs/navigation-mobile-config";
import { BottomNavigationItem } from "@/components/bottom-navigation/bottom-navigation-item/bottom-navigation-item";
import { selectSafeAreaInserts } from "@/pages/application/redux/application-selector";
import { useMobileFooterDisplay } from "@/hooks/use-mobile-footer-display";

export const BottomNavigation: FC = () => {
  const safeAreaInserts: string = useSelector(selectSafeAreaInserts);
  const safeAreaHeight: number = getSafeAreaInsertsInNumber(safeAreaInserts);
  const { isNavigationBarHidden } = useMobileFooterDisplay();

  return (
    <>
      {!isNavigationBarHidden && (
        <div
          className={styles.navigationWrapper}
          style={{
            bottom: safeAreaHeight,
            height: BOTTOM_NAVIGATION_HEIGHT,
          }}
        >
          <div className={styles.navItems}>
            {navigationMobileConfig.map(
              ({ iconElement, iconElementActive, path, title }) => (
                <BottomNavigationItem
                  key={title}
                  iconElement={iconElement}
                  iconElementActive={iconElementActive}
                  path={path}
                />
              ),
            )}
          </div>
          {!!safeAreaHeight && (
            <div
              className={styles.iosExtraSpace}
              style={{
                height: safeAreaHeight,
                minHeight: safeAreaHeight,
              }}
            />
          )}
        </div>
      )}
    </>
  );
};
