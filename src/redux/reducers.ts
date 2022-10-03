import { combineReducers } from "redux";
import { iBoxSocketReducer } from "@/ibox-socket";
import { reducer as profileReducer } from "@/components/profile/redux/reducer";
import { reducer as modalManagerReducer } from "@/components/modal-manager/redux/reducer";
import { eServicesReducer } from "@/components/e-services";
import { orgChartReducer } from "@/components/org-chart";
import { applicationReducer } from "@/pages/application";
import { homeReducer } from "@/pages/home";
import { calendarReducer } from "@/pages/home/components/widgets/calendar";
import { offersReducer } from "@/pages/home/components/widgets/offers";
import { oilPricesReducer } from "@/pages/home/components/widgets/oil-prices";
import {
  approvalsReducer,
  correspondenceReducer,
  inboxReducer,
  snowReducer,
  trackingReducer,
} from "@/pages/approvals";
import { managePreferencesReducer } from "@/components/manage-preferences";
import { insightsReducer } from "@/pages/insights";
import { noticesReducer } from "@/components/notices";
import { userVoiceIdeasReducer } from "@/components/user-voice-ideas";

export const rootReducer = combineReducers({
  iBoxSocket: iBoxSocketReducer,
  application: applicationReducer,
  approvals: approvalsReducer,
  approvalInbox: inboxReducer,
  approvalTracking: trackingReducer,
  correspondence: correspondenceReducer,
  serviceNow: snowReducer,
  profile: profileReducer,
  modalManager: modalManagerReducer,
  eServices: eServicesReducer,
  home: homeReducer,
  calendarWidget: calendarReducer,
  offersWidget: offersReducer,
  managePreferences: managePreferencesReducer,
  insights: insightsReducer,
  oilPrices: oilPricesReducer,
  orgChart: orgChartReducer,
  notices: noticesReducer,
  userVoice: userVoiceIdeasReducer,
});
