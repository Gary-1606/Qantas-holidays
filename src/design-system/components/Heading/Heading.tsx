import { createElement, ReactNode } from "react";
import clsx from "clsx";
import { root, sprinkles, Sprinkles } from "./Heading.css";

type TextElements = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

type Props = {
  align?: Sprinkles["align"];
  weight?: Sprinkles["weight"];
  size?: Sprinkles["size"];
  as?: TextElements;
  children: ReactNode;
  className?: string;
  id?: string;
};

export const Heading = ({
  align,
  as,
  className,
  size = "h1",
  weight = 700,
  ...props
}: Props) => {
  const component = as ?? "h1";

  return createElement(component, {
    ...props,
    className: clsx(
      className,
      root,
      sprinkles({
        align,
        size,
        weight,
      }),
    ),
  });
};

Heading.displayName = "Text";
