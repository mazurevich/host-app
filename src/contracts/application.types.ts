export type ApplicationState = {
  isBackgroundMode: boolean;
  isMobileKeyboardOpen: boolean;
  safeAreaInserts: string;
};

export interface MobileMessagePayload {
  client: string;
  msg: {
    action: string;
    payload?: {
      bottom?: string;
      keyboardPhase?: string;
    };
    requestId: string;
    toaster?: object;
  };
}

export type Nullable<T> = T | null;
