export enum EServiceItemType {
  EService = "EService",
  Application = "Application",
}

export interface FrontendPlugin {
  module: string;
  scope: string;
  url: string;
}

export interface EServiceItem {
  type: EServiceItemType;
  id: string;
  title: string;
  description: string;
  icon: string;
  isNew: boolean;
  openInNewTab: boolean;
  url: string;
  color?: string;
  isInternal: boolean;
  categoryId: string;
  frontend_plugin?: FrontendPlugin;
}

export interface EServiceSection {
  title: string;
  icon?: string;
  color?: string;
  items: EServiceItem[];
}

export interface EServiceCategory {
  id: string;
  order: number;
  color: string;
  title: string;
  icon: string;
}
