import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";

const sagas: Array<() => Generator | SagaIterator> = [

];

export const rootSaga = function* () {
  yield all(sagas.map(fork));
};
