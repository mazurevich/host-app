import { Nullable } from "@/contracts/application.types";

export interface OrgChartEmployeeData {
  manager?: Nullable<OrgChartEmployeeData>;
  subordinates?: Nullable<OrgChartEmployeeData[]>;
  numberOfEmployeesInUnit?: number;
  childrenCount: number;
  email: string;
  hasParent: boolean;
  id: string;
  location: string;
  name: string;
  title: string;
  unit: string;
}
