import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";
import { containerStyles, container } from "./Container.css";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(containerStyles, className)} {...rest}>
      <div className={container}>{children}</div>
    </div>
  );
};
