import { FC, SVGProps } from "react";
import { BasicRoutePath } from "@/constants";

export interface SideNavigationItemProps {
  iconElement: FC<SVGProps<SVGSVGElement>>;
  iconElementActive: FC<SVGProps<SVGSVGElement>>;
  path: BasicRoutePath;
  title: string;
}
