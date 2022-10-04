import styles from "@/components/no-data/styles.scss";
import clsx from "clsx";
import { NoDataProps } from "@/components/no-data/types";
import { ButtonSize, ButtonVariant } from "@/components/button/constants";
import { Button } from "@/components/button";
import { checkIsMobile } from "@/utils";

export const NoData = ({
  icon,
  title,
  subtitle,
  className,
  buttonText,
  onClick,
  isHorizontal,
  buttonClassName,
}: NoDataProps) => {
  const isMobile = checkIsMobile();
  return (
    <div
      className={clsx(
        styles.container,
        isHorizontal && styles.containerHorizontal,
        isMobile && styles.containerMobile,
        className,
      )}
    >
      {icon}
      <div>
        {title && (
          <h2
            className={clsx(
              styles.title,
              isHorizontal && styles.titleHorizontal,
              isMobile && styles.titleMobile,
            )}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <span
            className={clsx(
              styles.subtitle,
              isHorizontal && styles.subtitleHorizontal,
            )}
          >
            {subtitle}
          </span>
        )}
        {buttonText && (
          <Button
            className={clsx(
              styles.button,
              isHorizontal && styles.buttonHorizontal,
              buttonClassName,
            )}
            onClick={onClick}
            variant={ButtonVariant.Primary}
            size={ButtonSize.Small}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
