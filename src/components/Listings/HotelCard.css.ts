import { style } from "@vanilla-extract/css";
import tokens from "@/design-system/tokens/tokens";
import { responsiveStyle } from "@/design-system/tokens";

export const card = style({
  marginTop: tokens.sizing[20],
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  borderTop: `1px solid ${tokens.border["accent/default"]}`,
  paddingTop: "12px",
});

export const title = style({
  fontSize: "1.25rem",
  whiteSpace: "wrap",
  ...responsiveStyle({
    sm: {
      fontSize: "1.5rem",
      maxWidth: "250px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
});

export const imageContainer = style({
  marginTop: "10px",
  minWidth: "100px",
  width: "100px",
  height: "150px",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  ...responsiveStyle({
    sm: {
      minWidth: "170px",
      width: "170px",
      height: "150px",
    },
  }),
});

export const offerTag = style({
  marginTop: 10,
  textDecoration: "underline",
});

export const sup = style({
  verticalAlign: "top",
  marginRight: "3px",
});

export const promotionTag = style({
  position: "absolute",
  padding: "5px",
  backgroundColor: tokens.bg.default,
  top: "10px",
  left: 0,
});
