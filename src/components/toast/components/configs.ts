import {
  ErrorFilled,
  Info,
  SuccessFilled,
  WarningFilled,
} from "@/assets/icons";
import { ToastType } from "@/components/toast/types";

export const icons = {
  [ToastType.Success]: SuccessFilled,
  [ToastType.Error]: ErrorFilled,
  [ToastType.Warning]: WarningFilled,
  [ToastType.Info]: Info,
  [ToastType.Default]: Info,
};
