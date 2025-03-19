import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { spacings } from "../tokens";
import { breakpointConditions } from "../utils/breakpointConditions";

const space = spacings;

const sizes = {
  full: "100%",
};

const responsiveProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "xs",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    flexWrap: ["nowrap", "inherit", "unset", "wrap"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    marginLeft: { auto: "auto" },
    marginRight: { auto: "auto" },
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    position: ["relative"],
    width: sizes,
    height: sizes,
    gap: space,
    overflow: ["hidden", "visible", "scroll", "auto"],
  },
  shorthands: {
    marginX: ["marginLeft", "marginRight"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    align: ["justifyContent"],
  },
});

const colorProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "xs",
  properties: {
    color: {},
    background: {
      white: "#fff",
    },
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
