import { IMessageToHost, MessageType } from "../federated-module/types";

export interface FederatedNewsProps {
  className?: string;
}

enum SpecificNewsMessageType {
  NewsRedirect = "NEWS_REDIRECT",
}

export const NewsMessageType = {
  ...MessageType,
  ...SpecificNewsMessageType,
};

export type NewsMessageToHost = Omit<IMessageToHost, "type"> & {
  type: MessageType & SpecificNewsMessageType;
};

export interface NewsRedirectPayload {
  path: string;
}
