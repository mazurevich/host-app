import { ReactNode } from "react";
import { BrowserHistory } from "history";

export interface CustomRouterProps {
  history: BrowserHistory;
  children: ReactNode;
}
