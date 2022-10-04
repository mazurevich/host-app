/* eslint-disable no-console */
import { LocalStorageKey } from "@/constants/application";
import { Nullable } from "@/contracts/application.types";

export const getSafeAreaInsertsInNumber = (safeAreaInserts = ""): number => {
  try {
    const safeAreaValue: Nullable<string> =
      safeAreaInserts ||
      localStorage.getItem(LocalStorageKey.MobileSafeAreaInserts);

    return Number(safeAreaValue) || 0;
  } catch (error) {
    console.error(error);
    return 0;
  }
};
