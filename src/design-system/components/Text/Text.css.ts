import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { textColors, spacings } from "../../tokens";
import { breakpointConditions } from "../../utils/breakpointConditions";

const responsiveProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "xs",
  properties: {
    fontSize: {
      p12: "0.75rem",
      p14: "0.875rem",
      p16: "1rem",
      p18: "1.125rem",
      p20: "1.25rem",
      p22: "1.375rem",
      p25: "1.5625rem",
      p40: "2.5rem",
    },
    lineHeight: {
      p12: 0.975,
      p14: 1.3,
      p16: 1.25,
      p18: 1.3,
      p20: 1.3,
      p22: 1.3,
      p25: 1.3,
      p40: 1.025,
    },
    fontWeight: [400, 500, 600, 700],
    color: {
      ...textColors,
    },
    textAlign: ["left", "center", "right"],
    marginBottom: spacings,
  },
  shorthands: {
    align: ["textAlign"],
    size: ["fontSize", "lineHeight"],
    weight: ["fontWeight"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
