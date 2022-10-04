import styles from "@/components/bottom-navigation/bottom-navigation-item/styles.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { BottomNavigationItemProps } from "@/components/bottom-navigation/bottom-navigation-item/types";

export const BottomNavigationItem: FC<BottomNavigationItemProps> = ({
  iconElement: Icon,
  iconElementActive: IconActive,
  path,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(styles.navItem, isActive && styles.navItemActive)
      }
    >
      {({ isActive }) =>
        isActive ? (
          <IconActive className={styles.navItemIconActive} />
        ) : (
          <Icon className={styles.navItemIcon} />
        )
      }
    </NavLink>
  );
};
