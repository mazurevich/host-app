import { checkIsMobile } from "@/utils";
import { Toast as ToastDesktop } from "@/components/toast/components/toast";
import { Toast as ToastMobile } from "@/components/toast/components/toast.mobile";

export const Toast = checkIsMobile() ? ToastMobile : ToastDesktop;
