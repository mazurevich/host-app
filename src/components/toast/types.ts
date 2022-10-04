import { Toast, ToastOptions } from "react-hot-toast";

export enum ToastType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
  Default = "default",
}

export interface ToastSettings extends ToastOptions {
  messageTitle?: string;
  actionButtonLabel?: string;
  onActionButtonClick?(): void;
}

export interface ToastProps extends ToastSettings {
  message: string;
  toastType: ToastType;
  toastSettings?: Toast;
}

export interface CustomToast {
  success: (message: string, toastProps?: ToastSettings) => string;
  error: (message: string, toastProps?: ToastSettings) => string;
  warning: (message: string, toastProps?: ToastSettings) => string;
  info: (message: string, toastProps?: ToastSettings) => string;
  default: (message: string, toastProps?: ToastSettings) => string;
  dismiss(toastId?: string): void;
  remove(toastId?: string): void;
}
