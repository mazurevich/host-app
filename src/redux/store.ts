import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(rootSaga);
