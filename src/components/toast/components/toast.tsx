import styles from "@/components/toast/components/styles.scss";
import { FC, useCallback } from "react";
import defaultToast from "react-hot-toast";
import clsx from "clsx";
import { Close } from "@/assets/icons";
import { icons } from "@/components/toast/components/configs";
import { ToastProps } from "@/components/toast/types";

export const Toast: FC<ToastProps> = ({
  message,
  toastType,
  messageTitle,
  toastSettings,
  actionButtonLabel,
  onActionButtonClick,
}) => {
  const ToastIcon = icons[toastType];

  const handleToastClose = useCallback(() => {
    defaultToast.dismiss(toastSettings?.id);
  }, [toastSettings?.id]);

  return (
    <div className={clsx(styles.toastWrapper, styles[toastType])}>
      <div className={styles.toastTypeIcon}>
        <ToastIcon />
      </div>

      <div className={styles.toastBody}>
        {messageTitle && <p className={styles.toastTitle}>{messageTitle}</p>}
        <p className={styles.toastText}>{message}</p>
      </div>

      <div className={styles.toastButtonsWrapper}>
        {actionButtonLabel && (
          <button
            className={styles.toastActionButton}
            onClick={onActionButtonClick}
          >
            {actionButtonLabel}
          </button>
        )}

        <button className={styles.toastCloseButton} onClick={handleToastClose}>
          <Close />
        </button>
      </div>
    </div>
  );
};
