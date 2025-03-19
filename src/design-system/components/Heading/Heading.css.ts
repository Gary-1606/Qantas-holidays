import { style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { breakpointConditions } from "../../utils/breakpointConditions";
import { color } from "../../tokens";

export const root = style({
  fontStretch: "condensed",
  color: color("default"),
});

const responsiveProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "xs",
  properties: {
    fontWeight: [400, 500, 600, 700],
    fontSize: {
      h1: "3.5rem",
      h2: "2.5rem",
      h3: "2rem",
      h4: "1.5rem",
      h5: "1.25rem",
    },
    lineHeight: {
      h1: 1.071,
      h2: 1.1,
      h3: 1.125,
      h4: 1.167,
      h5: 1.111,
    },
    textAlign: ["center"],
  },
  shorthands: {
    align: ["textAlign"],
    weight: ["fontWeight"],
    size: ["fontSize", "lineHeight"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
