import tokens from "@/design-system/tokens/tokens";
import { style } from "@vanilla-extract/css";

export const iconWrapper = style({
  width: "12px",
  height: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

export const icon = style({
  position: "absolute",
  top: 0,
  left: 0,
});

export const filledIcon = style({
  color: tokens.icon.yellow, // Yellow color
  fill: tokens.icon.yellow,
});

export const unfilledIcon = style({
  fill: "none",
});

export const halfFilledIcon = style({
  color: tokens.icon.yellow, // Yellow color
  fill: tokens.icon.yellow,
  clipPath: "inset(0 50% 0 0)", // This will show only the left half
});
