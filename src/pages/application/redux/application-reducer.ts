import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "@/contracts/application.types";

const initialState: ApplicationState = {
  isBackgroundMode: false,
  isMobileKeyboardOpen: false,
  safeAreaInserts: "",
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setIsBackgroundMode: (state, { payload }: PayloadAction<boolean>) => {
      state.isBackgroundMode = payload;
    },
    setIsMobileKeyboardOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isMobileKeyboardOpen = payload;
    },
    setSafeAreaInserts: (
      state,
      { payload }: PayloadAction<string | undefined>,
    ) => {
      state.safeAreaInserts = payload ?? "";
    },
  },
});

export const {
  actions: { setIsBackgroundMode, setIsMobileKeyboardOpen, setSafeAreaInserts },
  reducer: applicationReducer,
} = applicationSlice;
