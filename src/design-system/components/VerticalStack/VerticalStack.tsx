import { FC, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import { sprinkles, Sprinkles } from "@/design-system/styles/sprinkles.css";

interface Props
  extends Pick<
      Sprinkles,
      "gap" | "justifyContent" | "flexDirection" | "flexWrap"
    >,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  align?: Sprinkles["alignItems"];
}

export const VerticalStack: FC<Props> = ({
  children,
  gap,
  className,
  align,
  justifyContent,
  flexWrap,
  flexDirection = "column",
  ...passthroughProps
}) => {
  return (
    <div
      {...passthroughProps}
      className={clsx(
        sprinkles({
          gap,
          alignItems: align,
          justifyContent,
          display: "flex",
          flexDirection,
          flexWrap,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};
