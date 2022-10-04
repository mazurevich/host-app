import { ReactNode } from "react";

export interface NoDataProps {
  icon?: ReactNode;
  title?: string;
  subtitle?: ReactNode;
  className?: string;
  buttonText?: string;
  onClick?: () => void;
  isHorizontal?: boolean;
  buttonClassName?: string;
}
