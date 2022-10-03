export enum SearchServiceType {
  Employee = "employee",
  Document = "document",
  Email = "email",
  Correspondence = "correspondence",
  Training = "training",
  News = "news",
  Tender = "tender",
  Suppliers = "suppliers",
  ServiceNow = "service-now",
  Customers = "customers",
  Projects = "projects",
  Stations = "distribution",
}
export interface CorrespondenceSuggestionResponse {
  id: string;
  searchString: string;
  subject: string;
  fromStructure: string;
  reference: string;
  status: string;
  isReply: boolean;
  hasAttachments: boolean;
  date?: string;
}

export interface CustomerSuggestionResponse {
  id: string;
  searchString: string;
  text: string;
  term: string;
  label: string;
  style: string;
}

export interface EmailSuggestionResponse {
  id: string;
  searchString: string;
  name: string;
  date: string;
  subject: string;
  hasAttachments: true;
  trailer: string;
  emailAddress: string;
}

export interface EmployeeSuggestionResponse {
  id: string;
  searchString: string;
  name: string;
  email: string;
  title: string;
  unit: string;
  city: string;
  icon: string;
  department: string;
  companyName: string;
}

export interface TrainingSuggestionResponse {
  id: string;
  searchString: string;
  icon: string;
  provider: string;
  name: string;
}

export interface NewsSuggestionResponse {
  id: string;
  title: string;
  image: string;
  date: string;
  tags: string[];
  company: string;
  originalUrl: string;
  searchString: string;
}

export interface ProjectSuggestionResponse {
  searchString: string;
  projectId: string;
  projectCompanyName: string;
  projectName: string;
  projectStage: string;
  minorDelay: number;
  mayorDelay: number;
  onSchedule: number;
  onBehindSchedule: number;
  onBudget: number;
  overBudget: number;
  stgIrr: number;
  stgNpv: number;
  projectCode: string;
}

export interface ServiceNowTicketSuggestionResponse {
  id: string;
  searchString: string;
  number: string;
  ticketType: string;
  createdDate: string;
  summary: string;
  description: string;
  category: string;
  state: string;
  groupCompany: string;
}

export interface DocumentSuggestionResponse {
  id: string;
  searchString: string;
  fileName: string;
  modifiedBy: string;
  updateDate: string;
  icon: string;
  createDate: string;
}

export interface SuppliersSuggestionResponse {
  id: string;
  searchString: string;
  text: string;
  term: string;
  entityLabel: string;
  entityStyle: string;
  entityBadge: string;
}

export interface Submission {
  usd: string;
  aed: string;
}

export interface TenderSuggestionResponse {
  id: string;
  searchString: string;
  name: string;
  type: string;
  category: string;
  submitionTotal: Submission;
  date: string;
}

export interface StationsSuggestionResponse {
  id: number;
  name: string;
  cityName: string;
  totalStaff: number;
  managerEmailAddress: string;
  status: string;
  searchString: string;
}

export type SuggestionResponse =
  | CorrespondenceSuggestionResponse
  | CustomerSuggestionResponse
  | EmailSuggestionResponse
  | EmployeeSuggestionResponse
  | TrainingSuggestionResponse
  | NewsSuggestionResponse
  | ProjectSuggestionResponse
  | ServiceNowTicketSuggestionResponse
  | DocumentSuggestionResponse
  | SuppliersSuggestionResponse
  | Submission
  | TenderSuggestionResponse
  | StationsSuggestionResponse;

type HistoryItem<T> = T & { historyDate: string };

export type CorrespondenceHistoryResponseItem =
  HistoryItem<CorrespondenceSuggestionResponse>;

export type CustomerHistoryResponseItem =
  HistoryItem<CustomerSuggestionResponse>;

export type EmailHistoryResponseItem = HistoryItem<EmailSuggestionResponse>;

export type EmployeeHistoryResponseItem =
  HistoryItem<EmployeeSuggestionResponse>;

export type TrainingHistoryResponseItem =
  HistoryItem<TrainingSuggestionResponse>;

export type NewsHistoryResponseItem = HistoryItem<NewsSuggestionResponse>;

export type ServiceNowTicketHistoryResponseItem =
  HistoryItem<ServiceNowTicketSuggestionResponse>;

export type DocumentHistoryResponseItem =
  HistoryItem<DocumentSuggestionResponse>;

export type SuppliersHistoryResponseItem =
  HistoryItem<SuppliersSuggestionResponse>;

export type TenderHistoryResponseItem = HistoryItem<TenderSuggestionResponse>;
export type StationsHistoryResponseItem =
  HistoryItem<StationsSuggestionResponse>;

export type ProjectHistoryResponseItem = HistoryItem<ProjectSuggestionResponse>;

export interface SuggestionMap {
  [SearchServiceType.Training]: TrainingSuggestionResponse;
  [SearchServiceType.Correspondence]: CorrespondenceSuggestionResponse;
  [SearchServiceType.Email]: EmailSuggestionResponse;
  [SearchServiceType.Document]: DocumentSuggestionResponse;
  [SearchServiceType.Employee]: EmployeeSuggestionResponse;
  [SearchServiceType.News]: NewsSuggestionResponse;
  [SearchServiceType.Tender]: TenderSuggestionResponse;
  [SearchServiceType.Projects]: ProjectSuggestionResponse;
  [SearchServiceType.ServiceNow]: ServiceNowTicketSuggestionResponse;
  [SearchServiceType.Suppliers]: SuppliersSuggestionResponse;
  [SearchServiceType.Customers]: CustomerSuggestionResponse;
  [SearchServiceType.Stations]: StationsSuggestionResponse;
}

export interface HistoryResponse {
  training: TrainingHistoryResponseItem[];
  correspondence: CorrespondenceHistoryResponseItem[];
  email: EmailHistoryResponseItem[];
  document: DocumentHistoryResponseItem[];
  employee: EmployeeHistoryResponseItem[];
  news: NewsHistoryResponseItem[];
  tenders: TenderHistoryResponseItem[];
  projects: ProjectHistoryResponseItem[];
  tickets: ServiceNowTicketHistoryResponseItem[];
  suppliers: SuppliersHistoryResponseItem[];
  customers: CustomerHistoryResponseItem[];
  distributions: StationsHistoryResponseItem[];
}
