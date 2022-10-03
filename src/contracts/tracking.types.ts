import {
  SocketRequest,
  SocketResponse,
  EmbeddedCategory,
  EmbeddedItem,
  EmbeddedItemsAmount,
} from "./socket.types";

export interface TrackingCategoriesResponse<T> extends SocketResponse {
  categories: T[];
}

export interface TrackingCategory extends EmbeddedCategory {
  totalCount: number;
}

export interface TrackingItemResponse<T> extends SocketResponse {
  document: T;
}

export type TrackingItem = EmbeddedItem;

export interface TrackingSearchResultItemPayload {
  document: TrackingItem;
  score: number;
  highlights: Record<string, string>;
}

export interface TrackingSearchResultItem {
  document: TrackingItem;
  score: number;
  highlights: Record<string, string>;
}
export interface TrackingSearchResultResponse extends SocketResponse {
  items: TrackingSearchResultItem[];
  take: number;
}

export interface TrackingCategoryPage<T> extends SocketResponse {
  take: number;
  from?: Date | string;
  skip?: number;
  items: T[];
}

export interface TrackingSearchResponse extends SocketResponse {
  categories: TrackingSearchCategory[];
  searchText: string;
}

export interface TrackingListSearchItem {
  _score: number;
  _highlights: Partial<EmbeddedItem>;
}

export interface TrackingSearchCategory {
  items: TrackingListSearchItem[];
}

export interface TrackingCatchupResponse extends SocketResponse {
  items: TrackingCatchupObject[];
}

export interface TrackingCatchupObject {
  generatedAt: Date;
  _catchupType: string;
}

export interface TrackingItemRequest extends SocketRequest {
  itemId: string;
}

export interface TrackingItemsRequest
  extends SocketRequest,
    Required<EmbeddedItemsAmount> {
  categoryId: string;
}

export interface TrackingReadRequest extends SocketRequest {
  notificationId: string;
  _deduplicationId?: string;
}

export interface TrackingSearchRequest extends SocketRequest {
  searchText: string;
  take: number;
}

export interface TrackingCatchupRequest extends SocketRequest {
  since: Date;
}
