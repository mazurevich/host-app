import styles from "@/components/header/styles.scss";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { NotificationEmpty } from "@/assets/icons";
import { HeaderVariant } from "@/components/header/types";
import { getHeaderVariant } from "@/components/header/utils";

export const Header: FC = () => {
  const { pathname } = useLocation();

  const variant = getHeaderVariant(pathname);
  //TODO: update notification alert circle state
  const isNotices = false;

  const handleNotificationClick = () => {
    // dispatch(setIsNoticesDrawerOpen(true));
  };

  return (
    <header
      className={clsx(
        styles.headerWrapper,
        variant === HeaderVariant.Transparent && styles.transparent,
      )}
    >
      <div className={styles.rightBarSection}>
        {/*<EnterpriseSearchField className={styles.searchInput} />*/}
        <button
          className={styles.notificationIconWrapper}
          onClick={handleNotificationClick}
        >
          <NotificationEmpty />
          {isNotices && <div className={styles.notificationCircle}></div>}
        </button>
        {/*<ProfileMenu />*/}
      </div>
    </header>
  );
};
