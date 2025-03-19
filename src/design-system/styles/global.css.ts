import { globalStyle } from "@vanilla-extract/css";
import { fonts } from "@/design-system/tokens/fonts";
import "./fonts.css";
import { color } from "../tokens";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("*", {
  margin: 0,
});

globalStyle("html, body", {
  fontFamily: fonts.Calibre,
  height: "100%",
});

globalStyle("body", {
  lineHeight: 1.3,
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
});

// CSS reset to set the default for images to be block to remove the spacing that comes from
// an image being set to inline
globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  width: "100%",
  height: "auto",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

globalStyle("#root, #__next", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

globalStyle("main", {
  flexGrow: 1,
  flexShrink: 1,
});

globalStyle("header, footer", {
  flexGrow: 0,
  flexShrink: 0,
});

globalStyle("[type=button],[type=reset],[type=submit],button", {
  appearance: "button",
  backgroundColor: "transparent",
  backgroundImage: "none",
  border: 0,
  cursor: "pointer",
  color: "inherit",
  padding: 0,
});

globalStyle("a", {
  textDecoration: "underline",
  color: color("default"),
  transition: "150ms color",
});

globalStyle("a:hover", {
  color: color("subtle"),
});

globalStyle("a:active", {
  color: color("default"),
});
