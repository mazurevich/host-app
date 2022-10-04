import { ButtonHTMLAttributes } from "react";
import { ButtonSize, ButtonVariant } from "@/components/button/constants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}
