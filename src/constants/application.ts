export const OH_WEB_CLIENT = "OH-web";
export const BOTTOM_NAVIGATION_HEIGHT = 50;

export enum LocalStorageKey {
  MobileSafeAreaInserts = "mobile-safe-area-inserts",
}

export enum MobileKeyboardPhases {
  WillShow = "WillShow",
  DidShow = "DidShow",
  WillHide = "WillHide",
  DidHide = "DidHide",
}

export enum MobileMessageAction {
  SetKeyboardState = "SET_KEYBOARD_STATE",
  SetSafeAreaInserts = "setSafeAreaInserts",
}

export enum PostMessage {
  RNNavigationAction = "navigation",
  RNBackAction = "back",
  RNOpenOrgChart = "openOrgChart",
  RNOpenCorrespondence = "openCorrespondenceDetails",
  RNOpenProfile = "openProfile",
  RNOpenProfileCompleteness = "openProfileCompleteness",
  RNOpenPowerBIApp = "openPowerBiApp",
  RNOpenMailApp = "openMailApp",
  RNDownloadLink = "downloadLink",
  RNShowPDF = "showPdf",
  RNPreviewLink = "previewLink",
  RNRefreshedToken = "token",
  RNCorrespondenceSubmitted = "correspondenceSubmitted",
  RNAppClosed = "appClosed",
  RNAppOpened = "appOpened",
  RNAppStateStatus = "APP_STATE_STATUS",
  RNLoaderState = "loaderIsActive",
  RNLogMeeraActivity = "logMeeraActivity",
  RNLogWebViewStateOnAppRoot = "logWebViewStateOnAppRoot",
  RNGetToken = "getToken",
  RNSetKeyboardState = "SET_KEYBOARD_STATE",
  RNProfilePageExited = "profilePageExited",
  RNUpdateAvailable = "updateAvailable",
  RNSetInboxUnreadMessageCount = "setInboxUnreadMessagesCount",
  RNSetSafeAreaInserts = "setSafeAreaInserts",
  RNRequestMicrophonePermission = "requestMicrophonePermission",
  RNDocumentWebView = "documentWebView",
  TokenExpired = "Token expired",
  Toastr = "toaster",
  DocumentPreviewClick = "previewClick",
  SetItemIsPending = "setItemIsPending",
}
