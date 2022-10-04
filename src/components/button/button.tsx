import styles from "@/components/button/styles.scss";
import { forwardRef } from "react";
import clsx from "clsx";
import { ButtonProps } from "@/components/button/types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        type={type}
        className={clsx(
          styles.button,
          variant && styles[variant],
          size && styles[size],
          className,
        )}
      >
        {children}
      </button>
    );
  },
);
