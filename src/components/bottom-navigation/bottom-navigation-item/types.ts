import { FC, SVGProps } from "react";
import { BasicRoutePath, MobileRoutePath } from "@/constants";

export interface BottomNavigationItemProps {
  iconElement: FC<SVGProps<SVGSVGElement>>;
  iconElementActive: FC<SVGProps<SVGSVGElement>>;
  path: BasicRoutePath | MobileRoutePath;
}
