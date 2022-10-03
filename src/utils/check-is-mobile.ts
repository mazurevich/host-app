import { MOBILE_MODE_SUB_URL } from "ui/constants";

export const checkIsMobile = (): boolean =>
  window.location.pathname.includes(MOBILE_MODE_SUB_URL);
