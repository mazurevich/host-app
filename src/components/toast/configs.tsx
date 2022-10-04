import styles from "@/components/toast/styles.scss";
import defaultToast from "react-hot-toast";
import { CustomToast, ToastProps, ToastType } from "@/components/toast/types";
import { Toast } from "@/components/toast/components";
import { checkIsMobile } from "@/utils";
import clsx from "clsx";

const createToast = ({ message, toastType, ...props }: ToastProps): string => {
  const isMobile = checkIsMobile();

  return defaultToast(
    toastSettings => (
      <Toast
        toastType={toastType}
        message={message}
        toastSettings={toastSettings}
        {...props}
      />
    ),
    {
      ...props,
      className: clsx(
        styles.toastContainer,
        isMobile && styles.toastContainerMobile,
      ),
    },
  );
};

export const toast: CustomToast = {
  success: (message, props) =>
    createToast({ ...props, message, toastType: ToastType.Success }),
  error: (message, props) =>
    createToast({ ...props, message, toastType: ToastType.Error }),
  warning: (message, props) =>
    createToast({ ...props, message, toastType: ToastType.Warning }),
  info: (message, props) =>
    createToast({ ...props, message, toastType: ToastType.Info }),
  default: (message, props) =>
    createToast({ ...props, message, toastType: ToastType.Default }),
  dismiss: (toastId?: string) => defaultToast.dismiss(toastId),
  remove: (toastId?: string) => defaultToast.remove(toastId),
};
