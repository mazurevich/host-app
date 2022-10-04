import { FC } from "react";

import styles from "@/components/side-navigation/styles.scss";
import { CompanyLogo } from "@/assets/illustrations";
import { navigationConfig } from "@/configs";
import { SideNavigationItem } from "@/components/side-navigation/side-navigation-item";

export const SideNavigation: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CompanyLogo />
        <div className={styles.list}>
          {navigationConfig.map(
            ({ iconElement, iconElementActive, path, title }) => (
              <SideNavigationItem
                key={title}
                iconElement={iconElement}
                iconElementActive={iconElementActive}
                path={path}
                title={title}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};
