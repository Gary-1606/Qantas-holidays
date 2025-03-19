import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "../../utils/responsiveStyle";
import { spacings } from "../../tokens";
import { containers } from "../../tokens";
import tokens from "@/design-system/tokens/tokens";

export const containerStyles = style({
  width: "100%",
  height: "100%",
  padding: spacings[16],
  ...responsiveStyle({
    md: {
      padding: spacings[24],
    },
    xl: {
      padding: spacings[40],
    },
  }),
});

export const container = style({
  maxWidth: containers.default,
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  height: "100%",
});
