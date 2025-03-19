import type { FC, ReactNode } from "react";
import { visuallyHidden } from "./VisuallyHidden.css";

type Props = { children: ReactNode };

export const VisuallyHidden: FC<Props> = ({ children }) => {
  return (
    <span data-testid="visually-hidden" className={visuallyHidden}>
      {children}
    </span>
  );
};
