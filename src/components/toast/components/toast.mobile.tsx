import styles from "@/components/toast/components/styles.scss";
import { FC, TouchEventHandler, useRef, useState } from "react";
import defaultToast from "react-hot-toast";
import clsx from "clsx";
import { icons } from "@/components/toast/components/configs";
import { ToastProps } from "@/components/toast/types";

export const Toast: FC<ToastProps> = ({
  message,
  toastType,
  toastSettings,
}) => {
  const ToastIcon = icons[toastType];
  const toastRef = useRef<HTMLDivElement>(null);
  const initialTouchXCoordinate = useRef<number | null>(null);
  const intersectionObserver = useRef<IntersectionObserver | null>(null);
  const [right, setRight] = useState(0);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = ({
    targetTouches,
  }) => {
    initialTouchXCoordinate.current = targetTouches[0].screenX;
    intersectionObserver.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          defaultToast.dismiss(toastSettings?.id);
        }
      },
      { threshold: 0.4 },
    );
    if (toastRef.current) {
      intersectionObserver.current.observe(toastRef.current);
    }
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = ({
    targetTouches,
  }) => {
    const initialXCoordinate = initialTouchXCoordinate.current;

    if (initialXCoordinate) {
      const currentXCoordinate = targetTouches[0].screenX;
      const offset = initialXCoordinate - currentXCoordinate;

      if (offset > 0) {
        setRight(offset);
      }
    }
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
    setRight(0);
    initialTouchXCoordinate.current = null;
    intersectionObserver.current?.disconnect();
    intersectionObserver.current = null;
  };

  return (
    <div
      ref={toastRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      {...(right && { style: { right } })}
      className={clsx(
        styles.toastWrapper,
        styles[toastType],
        styles.mobileToastWrapper,
      )}
    >
      <div className={styles.toastTypeIcon}>
        <ToastIcon />
      </div>
      <div className={styles.toastBody}>
        <p className={styles.toastText}>{message}</p>
      </div>
    </div>
  );
};
