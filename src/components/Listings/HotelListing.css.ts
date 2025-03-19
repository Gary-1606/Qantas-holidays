import { style } from "@vanilla-extract/css";
import tokens from "@/design-system/tokens/tokens";

export const italic = style({
  fontStyle: "italic",
});

export const listingGrid = style({
  paddingBottom: "5px",
  borderBottom: `1px solid ${tokens.border["accent/default"]}`,
});
