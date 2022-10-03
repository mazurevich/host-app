import { AnyAction } from "redux";
import {
  InboxCategory,
  InboxItem,
  UserInboxCategory,
} from "@/contracts/inbox.types";
import { TrackingCategory, TrackingItem } from "@/contracts/tracking.types";
import { Nullable } from "./application.types";
import { ApprovalsMeta } from "@/pages/approvals/redux/inbox/types";

export type NormalizedArray<T> = Record<string, T>;

export type ApprovalCategoryItem<T, Y> = {
  meta: ApprovalsMeta;
  data: T;
  items: Y[];
  isLoading: boolean;
  error: unknown;
  isInitialized: boolean;
  systemName: string;
};

export type ApprovalCategory =
  | ApprovalCategoryItem<TrackingCategory, ApprovalItemState<TrackingItem>>
  | ApprovalCategoryItem<InboxCategory, ApprovalItemState<InboxItem>>;

export type ApprovalCategoryReduxState =
  | ApprovalCategoryItem<TrackingCategory, ApprovalItemState<TrackingItem>>
  | ApprovalCategoryItem<UserInboxCategory, ApprovalItemState<InboxItem>>;

export type ApprovalItem =
  | ApprovalItemState<InboxItem>
  | ApprovalItemState<TrackingItem>;

export type Approval = InboxItem | TrackingItem;

export type ApprovalState = {
  isLoading: boolean;
  isInitialized: boolean;
  error: unknown;
  activeCategory?: string;
  pendingActions: AnyAction[];
  totalCount?: Nullable<number>;
  isItemActive: boolean;
};

export type RequestApprovalItemsPayload = {
  payload: { categoryId: string; delegatorId?: string; meta: ApprovalsMeta };
};

export type RequestApprovalItemPayload = {
  payload: { itemId: string };
};
// TODO check types when real post messages will be available
export type PostMessageData = {
  application?: object;
  status?: string;
  id?: number;
  error?: object;
  externalId?: number;
  payload?: object;
  requestId?: number;
  toaster?: object;
};

export interface ApprovalItemState<T> {
  data: T;
  isItemProcessing?: boolean;
}

export type ApprovalUpdateData = {
  categoryId: string;
  documentId: string;
  delegatorId?: string;
};

export type ApprovalCategoryUpdatedData = ApprovalUpdateData & {
  categoryCount: number;
};

export type ApprovalEventData<
  T,
  V = {
    newState: T;
  },
> = ApprovalUpdateData & V;

export interface ApprovalRequestsMapService {
  add: (approvalId: string, categoryId: string) => void;
  remove: (approvalId: string | undefined) => void;
  markAsObsoleteByCategoryId: (categoryId: string) => void;
  clear: () => void;
  getIsObsolete: (approvalId: string) => boolean;
}

export interface ApprovalsFilters {
  unread: boolean;
  overDue: boolean;
  delegated: boolean;
  important: boolean;
  error: boolean;
}
