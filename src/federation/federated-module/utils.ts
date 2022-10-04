import { ToasterShowPayload, ToastStatus } from "../federated-module/types";
import { toast } from "@/components/toast";

export const handleToastMessage = (payload: ToasterShowPayload) => {
  const { message, status } = payload;
  switch (status) {
    case ToastStatus.Success:
      toast.success(message);
      break;
    case ToastStatus.Error:
      toast.error(message);
      break;
    case ToastStatus.Warning:
      toast.warning(message);
      break;
    case ToastStatus.Info:
      toast.info(message);
      break;
    default:
      toast.info(message);
  }
};
