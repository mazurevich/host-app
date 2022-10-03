export enum TransferActionType {
  Forward = "Forward",
  SendBack = "SendBack",
  Endorse = "Endorse",
  Reject = "Reject",
  SignAndSend = "SignAndSend",
  ForwardCC = "ForwardCC",
  Archive = "Archive",
}

export interface AttachmentInfo {
  attachmentID: string;
  title?: string;
  extension?: string;
  fileSize: number;
  isMain: boolean;
  createDate?: string;
}

export interface TransferActionItem {
  action: TransferActionType;
  displayName: string;
  backgroundColor?: string;
  foreColor?: string;
}

export interface TransferFullInfo {
  actions: TransferActionItem[];
  id: number;
  documentID: number;
  parentID?: number;
  fromUser?: string;
  fromOffice?: string;
  toUser?: string;
  toOffice?: string;
  originalToUser?: string;
  originalToOffice?: string;
  notes?: string;
  purpose?: string;
  receivedDate: string;
  closureDate?: string;
  readDate?: string;
  dueDate?: string;
  isClosed: boolean;
  isLocked: boolean;
  isRead: boolean;
  isLockedByCurrentUser: boolean;
  canBeLockedByCurrentUser: boolean;
}

export interface TrackingTransferInfo {
  id: number;
  parentID?: number;
  fromUser?: string;
  fromOffice?: string;
  toUser?: string;
  toOffice?: string;
  originalToUser?: string;
  originalToOffice?: string;
  notes?: string;
  purpose?: string;
  receivedDate: string;
  closureDate?: string;
  readDate?: string;
  dueDate?: string;
  isClosed: boolean;
  isLocked: boolean;
  isRead: boolean;
  isLockedByCurrentUser: boolean;
  canBeLockedByCurrentUser: boolean;
}

export interface TrackingTransferInfoResponse {
  data: TrackingTransferInfo[];
  totalCount: number;
}

export enum AddressBookStructureType {
  All = "All",
  MyOffice = "MyOffice",
  Internal = "Internal",
  Tenants = "Tenants",
  External = "External",
  Root = "Root",
  ContactsOnly = "ContactsOnly",
}

export enum AddressBookContactsType {
  All = "All",
  None = "None",
  Designated = "Designated",
  Manager = "Manager",
  Secretary = "Secretary",
  Signer = "Signer",
  User = "User",
  Contact = "Contact",
  StructureReceiver = "StructureReceiver",
}

export enum AddressBookNodeType {
  Contact = "ABContactNode",
  Structure = "ABStructureNode",
}

export interface AddressBookNode {
  nodeType: AddressBookNodeType;
  nodeID: number;
  localID: number;
  name?: string;
  email?: string;
  parentNodeID: number;
  parentStructureName?: string;
  myTenant: boolean;
  myStructure: boolean;
  structureCode?: string;
  entityNodeID: number;
  entityCode?: string;
  entityName?: string;
  nodePath?: string;
}

export interface AddressBookContactNode extends AddressBookNode {
  contactType?: string;
  isDesignated: boolean;
  jobTitle?: string;
  mySelf: boolean;
  canSign: boolean;
  transferRuleNodeID?: number;
  allowDirectSecret: boolean;
}

export interface AddressBookStructureNode extends AddressBookNode {
  isRootStructure: boolean;
  structureType?: string;
}

export type AddressBookNodeItem = AddressBookContactNode &
  AddressBookStructureNode;

export interface AddressBookPageNode {
  data: AddressBookNodeItem[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
}

export interface AddressBookNodesQuery {
  nodeID?: number;
  parentNodeID?: number;
  text?: string;
  abStructureType?: AddressBookStructureType[];
  abContactsType: AddressBookContactsType;
}

export interface TransferActionRules {
  transferTo?: AddressBookNodeItem[];
  transferToEnabled: boolean;
  transferToAllowMultiple: boolean;
  transferToAddressBookQuery: AddressBookNodesQuery;
  cc: AddressBookNodeItem[];
  ccAddressBookQuery: AddressBookNodesQuery;
  dueDateDefaultUTC?: string;
  dueDateRangeStartUTC?: string;
  dueDateRangeEndUTC?: string;
  pinCodeIsRequired: boolean;
  purposes?: string[];
  purposeDefault?: string;
  signatureNumber: number;
  totalSignatureCount: number;
  isWorkflowTemplate: boolean;
  signerNodeID?: number;
  attachmentsToBeSigned?: AttachmentInfo[];
}

export interface TransferToInfo {
  nodeID: number;
  notes?: string;
  purpose?: string;
}

export interface CCedInfo {
  nodeID: number;
  notes?: string;
}

export interface ActionTransfer {
  transferTo: TransferToInfo[];
  cc?: CCedInfo[];
  dueDate?: string;
  followup: boolean;
}

export interface PurposeDetails {
  displayName?: string;
  purpose?: string;
}

export interface TransferActionFavoritesRules {
  favoritesContacts?: AddressBookNodeItem[];
  favritesContacts?: AddressBookNodeItem[];
  allowMultiple: boolean;
  purposes?: PurposeDetails[];
  purposeCCed?: PurposeDetails[];
}
