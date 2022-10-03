import {
  EmbeddedCategory,
  EmbeddedItem,
  EmbeddedItemsAmount,
  EmbeddedUser,
  SocketRequest,
  SocketResponse,
} from "./socket.types";
import { ApprovalCategory } from "@/contracts/approvals";
import { Nullable } from "./application.types";

export interface InboxResponse extends SocketRequest {
  _status: string;
  _traceId: string;
}

export interface InboxCategoriesResponse<T> extends InboxResponse {
  categories: T[];
}

export interface InboxCategory extends EmbeddedCategory {
  totalCount: number;
  disableBatchActions?: boolean;
}

export interface UserInboxCategory {
  totalCount: number;
  id: string;
  unreadCount?: number;
}

export interface InboxCategoryMetadataItem {
  id: string;
  title?: string;
  systemName?: string;
  icon?: string;
  disableBatchActions: boolean;
}

export interface UserInboxItem {
  categoryId: string;
  totalCount: number;
  unreadCount: number;
  updatedAt: string;
}

export interface DelegatedCategoryResponse {
  isLoading: boolean;
  totalCount: number;
  categoryId: string;
  unreadCount: number;
  updatedAt: string;
}

export interface DelegatedInboxItemResponse {
  delegator: EmbeddedUser;
  items: DelegatedCategoryResponse[];
}

export interface InboxCategoryDelegatedResponse extends SocketResponse {
  categoryMetadata: InboxCategoryMetadataItem[];
  userInbox: UserInboxItem[];
  delegatedInbox: DelegatedInboxItemResponse[];
}

export type InboxTotalCount = { count: number };

export interface InboxItemsRequest
  extends SocketRequest,
    Required<EmbeddedItemsAmount> {
  categoryId: string;
}

export interface InboxItemsResponse<T>
  extends InboxResponse,
    Required<EmbeddedItemsAmount> {
  items: T[];
}

export enum InboxItemStatus {
  Submitted = "Submitted",
  Processed = "Processed",
  ActionTaken = "ActionTaken",
  Error = "Error",
}

export interface InboxItem extends EmbeddedItem {
  workflow?: InboxWorkflow[];
  delegator?: Delegator;
}

export interface InboxWithSourceSystem extends InboxItem {
  sourceSystem: EmbeddedCategory;
}

export interface InboxItemRequest extends SocketRequest {
  itemId: string;
}

export interface InboxItemResponse<T> extends InboxResponse {
  document: T;
}

export interface InboxItemActions {
  actionName: string;
  displayName: string;
  actionIcon?: string;
}

export interface InboxWorkflow {
  step: number;
  encircle?: string;
  recipients: EmbeddedUser[];
}

export interface InboxActionTakeRequest extends SocketRequest {
  actionName: string;
  categoryId: string;
  approvals: InboxItem[];
  isExternal?: boolean;
}

export interface InboxIDRequest extends SocketRequest {
  approvalId: string;
}

export interface InboxActionBatchRequest extends SocketRequest {
  actions: InboxBatchActions[];
}

export interface InboxActionBatchResponse extends InboxResponse {
  results: InboxBatchResults[];
  success: boolean;
}

export interface InboxBatchResults {
  approvalId: string;
  success: boolean;
  error: Nullable<string>;
}

export interface InboxBatchActions {
  approvalId: string;
  actionName: string;
  payload?: string;
}

export interface Delegator {
  id: string;
  upn?: string;
  fullName?: string;
}

export interface Delegation {
  delegator: Delegator;
  categories: ApprovalCategory[];
}
