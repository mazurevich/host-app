import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app";
import { CustomRouter } from "@/router/custom-router";
import { history } from "@/router/history";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux";
import { getApplicationRoot } from "@/utils/get-application-root";

const Bootstrap: React.FC = (): React.ReactElement => (
  <CustomRouter history={history}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </CustomRouter>
);

const container = getApplicationRoot();
const root = createRoot(container);

root.render(<Bootstrap />);

