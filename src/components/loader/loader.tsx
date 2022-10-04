import styles from "@/components/loader/styles.scss";
import { FC } from "react";
import clsx from "clsx";
import { Spinner } from "@/components/spinner";
import { LoaderProps } from "@/components/loader/types";

export const Loader: FC<LoaderProps> = ({ className, diameter = 40 }) => (
  <div className={clsx(styles.loaderWrapper, className)}>
    <Spinner diameter={diameter} />
  </div>
);
