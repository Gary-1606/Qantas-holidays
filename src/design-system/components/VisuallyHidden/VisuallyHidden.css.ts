import { style } from "@vanilla-extract/css";
import { Property } from "csstype";

// Inspired from https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
export const visuallyHidden = style({
  position: "absolute !important" as Property.Position,
  width: "1px !important",
  height: "1px !important",
  padding: "0 !important",
  margin: "-1px  !important",
  overflow: "hidden !important",
  clip: "rect(0,0,0,0) !important",
  whiteSpace: "nowrap !important" as Property.WhiteSpace,
  border: "0 !important",
});
