import { style } from "@vanilla-extract/css";
import tokens from "@/design-system/tokens/tokens";

export const wrapper = style({
  display: "inline",
  position: "relative",
});

export const input = style({
  height: tokens.sizing[40],
  backgroundColor: tokens.bg.default,
  border: tokens.border.default,
  borderRadius: tokens.borderRadius.default,
  color: tokens.text.default,
  appearance: "none",
  width: "100%",
  transitionProperty: "color, border-color",
  transitionDuration: "150ms",
  ":hover": {
    border: tokens.border["accent/active"],
    color: tokens.text["default"],
  },
  ":disabled": {
    border: tokens.border["accent/disabled"],
    color: tokens.text["disabled"],
    backgroundColor: tokens.bg["subtle"],
  },
});
