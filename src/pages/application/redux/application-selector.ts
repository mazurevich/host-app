import { RootState } from "@/redux/types";

export const selectSafeAreaInserts = (state: RootState) =>
  state.application.safeAreaInserts;

export const selectIsMobileKeyboardOpen = (state: RootState) =>
  state.application.isMobileKeyboardOpen;
