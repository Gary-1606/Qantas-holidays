import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "../../utils/responsiveStyle";
import { spacings } from "../../tokens";
import { containers } from "../../tokens";

export const containerStyles = style({
  width: "100%",
  paddingLeft: spacings[16],
  paddingRight: spacings[16],
  ...responsiveStyle({
    md: {
      paddingLeft: spacings[24],
      paddingRight: spacings[24],
    },
    xl: {
      paddingLeft: spacings[40],
      paddingRight: spacings[40],
    },
  }),
});

export const container = style({
  maxWidth: containers.default,
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
});
