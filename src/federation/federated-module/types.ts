import React from "react";

export interface FederatedModuleProps {
  url: string;
  scope: string;
  module: string;
  className?: string;
  loadingFallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
  [key: string]: unknown;
}

export interface IMessageToHost {
  type: MessageType;
  payload: unknown;
}

export enum ToastStatus {
  Success = "SUCCESS",
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO",
  Default = "DEFAULT",
}

export interface ToasterShowPayload {
  status: ToastStatus;
  id: string;
  message: string;
}

export interface FederatedModuleOptions {
  token: string;
}

// MessageTypes
export enum MessageType {
  TokenRetrieve = "TOKEN_RETRIEVE",
  ToasterShow = "TOASTER_SHOW",
}
