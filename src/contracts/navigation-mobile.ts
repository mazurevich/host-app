import { FC, SVGProps } from "react";
import { BasicRoutePath, MobileRoutePath } from "@/constants";

export interface NavigationMobileConfigItem {
  iconElement: FC<SVGProps<SVGSVGElement>>;
  iconElementActive: FC<SVGProps<SVGSVGElement>>;
  path: BasicRoutePath | MobileRoutePath;
  title: string;
}
