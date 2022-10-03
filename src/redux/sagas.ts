import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { iBoxSocketSagas } from "@/ibox-socket";
import { eServiceSagas } from "@/components/e-services/redux";
import { myProfileSagas } from "@/components/profile/redux";
import { applicationSagas } from "@/pages/application/redux";
import { approvalsSagas } from "@/pages/approvals/redux";
import { noticesSagas } from "@/components/notices/redux";
import { homeSagas } from "@/pages/home/redux";
import { calendarSagas } from "@/pages/home/components/widgets/calendar/redux";
import { offersSagas } from "@/pages/home/components/widgets/offers/redux";
import { insightsSagas } from "@/pages/insights";
import { oilPricesSagas } from "@/pages/home/components/widgets/oil-prices/redux";
import { orgChartSagas } from "@/components/org-chart/redux";
import { userVoiceIdeasSagas } from "@/components/user-voice-ideas/redux";

const sagas: Array<() => Generator | SagaIterator> = [
  ...iBoxSocketSagas,
  ...applicationSagas,
  ...approvalsSagas,
  ...noticesSagas,
  ...myProfileSagas,
  ...eServiceSagas,
  ...homeSagas,
  ...calendarSagas,
  ...offersSagas,
  ...insightsSagas,
  ...oilPricesSagas,
  ...orgChartSagas,
  ...userVoiceIdeasSagas,
];

export const rootSaga = function* () {
  yield all(sagas.map(fork));
};
