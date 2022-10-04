import styles from "@/components/side-navigation/side-navigation-item/styles.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { SideNavigationItemProps } from "@/components/side-navigation/side-navigation-item/types";

export const SideNavigationItem: FC<SideNavigationItemProps> = ({
  iconElement: Icon,
  iconElementActive: IconActive,
  path,
  title,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(styles.listItem, isActive && styles.listItemActive)
      }
    >
      <div className={styles.listItemIconWrapper}>
        <Icon className={styles.listItemIcon} />
        <IconActive className={styles.listItemIconActive} />
      </div>
      <p className={styles.listItemTitle}>{title}</p>
    </NavLink>
  );
};
