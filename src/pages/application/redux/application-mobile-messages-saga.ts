import { put } from "redux-saga/effects";
import {
  LocalStorageKey,
  MobileKeyboardPhases,
  MobileMessageAction,
} from "@/constants/application";
import { MobileMessagePayload } from "@/contracts/application.types";
import {
  setIsMobileKeyboardOpen,
  setSafeAreaInserts,
} from "./application-reducer";

function* handleMobileKeyboardEvent(event: string | undefined): Generator {
  switch (event) {
    case MobileKeyboardPhases.DidShow:
    case MobileKeyboardPhases.WillShow:
      yield put(setIsMobileKeyboardOpen(true));
      break;
    case MobileKeyboardPhases.DidHide:
    case MobileKeyboardPhases.WillHide:
      yield put(setIsMobileKeyboardOpen(false));
      break;
    default:
      break;
  }
}

export function* handleMobileMessage(data: MobileMessagePayload): Generator {
  const { action, payload } = data.msg;

  switch (action) {
    case MobileMessageAction.SetKeyboardState:
      yield handleMobileKeyboardEvent(payload?.keyboardPhase);
      break;
    case MobileMessageAction.SetSafeAreaInserts:
      yield put(setSafeAreaInserts(payload?.bottom));
      localStorage.setItem(
        LocalStorageKey.MobileSafeAreaInserts,
        payload?.bottom ?? "",
      );

      break;
    default:
      break;
  }
}
