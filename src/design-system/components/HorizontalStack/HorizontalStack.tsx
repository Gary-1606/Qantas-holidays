import { FC, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { sprinkles, Sprinkles } from "@/design-system/styles/sprinkles.css";

interface Props
  extends Pick<
      Sprinkles,
      | "align"
      | "gap"
      | "flexWrap"
      | "alignItems"
      | "justifyContent"
      | "flexDirection"
    >,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const HorizontalStack: FC<Props> = ({
  children,
  gap,
  align,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  className,
  ...passthroughProps
}) => {
  return (
    <div
      {...passthroughProps}
      className={clsx(
        sprinkles({
          gap,
          align,
          alignItems,
          flexWrap,
          justifyContent,
          display: "flex",
          flexDirection,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};
