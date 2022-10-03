import { InboxItemActions, InboxItemStatus } from "@/contracts/inbox.types";
import { IBoxSocketStatus } from "@/ibox-socket";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApprovalsFilters } from "./approvals";

export interface SocketProtocolObject {
  _type: string;
}

export interface SocketResponse extends SocketProtocolObject {
  _requestId: string;
  _status: string;
  message?: string;
  type: string;
}

export interface SocketEventResponse extends SocketProtocolObject {
  type: string;
}

export type SocketRequest<T extends object = Record<string, unknown>> =
  SocketProtocolObject & {
    _requestId: string;
  } & T;

export type SocketActionData<T = string, V = Record<string, unknown>> = {
  categoryId?: string;
  documentId?: string;
  filter?: ApprovalsFilters;
  shouldFilterOut?: boolean;
  totalCount?: number;
  type: T;
  newState?: ApprovalNewState;
  _requestId: string;
  _status?: string;
  _traceId?: string;
  _type: string;
} & V;

export type ApprovalNewState = {
  message: string;
};

export type ApprovalReadItemSocketResponse = {
  categoryId: string;
  documentId: string;
  id: string;
};

export type SocketAction<T = string, V = Record<string, unknown>> = {
  payload: SocketActionData<T, V>;
};

export type SocketRequestedActionPayload = PayloadAction<
  [(args: unknown) => void, Parameters<(args: unknown) => void>]
>;

export type PromisifiedRequest<T extends object> = {
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
  data: SocketRequest<T>;
};

export interface SocketChannelMessage {
  [key: string]: string;
}

export type IBoxSocketState = {
  status?: IBoxSocketStatus;
  isAuthenticated?: boolean;
  reconnectAttempts?: number;
  autoReconnect?: boolean;
  loading?: boolean;
  error?: unknown;
};

export interface EmbeddedCategory {
  id: string;
  title?: string;
  systemName?: string;
  icon?: string;
  unreadCount?: number;
}

export interface EmbeddedUser {
  id: string;
  upn: string;
  fullName: string;
}

export interface EmbeddedItem {
  id: string;
  author: EmbeddedUser;
  category: EmbeddedCategory;
  externalId: string;
  isRead: boolean;
  generatedAt: string | Date;
  message?: string;
  actionUrl?: string;
  tags: string[];
  actions?: InboxItemActions[];
  status?: InboxItemStatus;
  additionalData: {
    DocumentID?: string;
    InboxTitle?: string;
    InitiatorName?: string;
    TransferID?: string;
    isReply?: boolean;
  };
  itemType: string;
  isItemProcessing?: boolean;
  dueDate?: string;
  relatedUser?: {
    name?: string;
    cdmId?: string;
    email?: string;
  };
}

export interface EmbeddedItemsAmount {
  take?: number;
  from?: Date | string;
}
