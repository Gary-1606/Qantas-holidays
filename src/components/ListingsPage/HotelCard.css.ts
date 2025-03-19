import { style } from "@vanilla-extract/css";

export const card = style({
  width: "100%",
  padding: "16px",
  border: "1px solid #E5E5E5",
  borderRadius: "8px",
  backgroundColor: "white",
});

export const imageContainer = style({
  width: "200px",
  height: "200px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "4px",
  flexShrink: 0,
});

export const contentContainer = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
});

export const title = style({
  margin: 0,
});

export const offerTag = style({
  fontWeight: 600,
}); 