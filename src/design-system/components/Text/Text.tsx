import { createElement, ReactNode } from "react";
import type { CSSProperties } from "react";
import clsx from "clsx";
import { sprinkles, Sprinkles } from "./Text.css";

type TextElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "span"
  | "div"
  | "label"
  | "caption";

type Props = {
  align?: Sprinkles["align"];
  size?: Sprinkles["size"];
  weight?: Sprinkles["fontWeight"];
  color?: Sprinkles["color"];
  marginBottom?: Sprinkles["marginBottom"];
  as?: TextElements;
  children: ReactNode;
  className?: string;
  UNSAFE_style?: CSSProperties;
  id?: string;
  htmlFor?: string;
};

export const Text = ({
  align,
  as,
  className,
  color,
  marginBottom,
  size,
  weight,
  UNSAFE_style = {},
  ...props
}: Props) => {
  const component = as ?? "p";

  return createElement(component, {
    ...props,
    style: UNSAFE_style,
    className: clsx(
      className,
      sprinkles({
        align,
        color,
        marginBottom,
        size,
        weight,
      }),
    ),
  });
};

Text.displayName = "Text";
