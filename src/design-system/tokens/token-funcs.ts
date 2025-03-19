import { StyleRule } from "@vanilla-extract/css";
import tokens from "./tokens";

/**
 * These are our accessors to the tokens,
 * we should only use these to get values from it
 */

const backgroundColors = tokens.bg;
type BackgroundToken = keyof typeof backgroundColors;
export const backgroundColor = (unit: BackgroundToken) => {
  return backgroundColors[unit];
};

export const colors = tokens.text;
type TextColorToken = keyof typeof colors;
export const color = (unit: TextColorToken) => {
  return colors[unit];
};

const borderColors = tokens.border;
type BorderColorToken = keyof typeof borderColors;
export const borderColor = (unit: BorderColorToken) => {
  return borderColors[unit];
};

const borderWidths = tokens.borderWidth;
type BorderWidthToken = keyof typeof borderWidths;
export const borderWidth = (unit: BorderWidthToken) => {
  return borderWidths[unit];
};

export const border = (
  width: BorderWidthToken,
  color: BorderColorToken,
  style: "solid" | "dashed" = "solid"
) => `${borderWidth(width)}px ${style} ${borderColor(color)}`;

const radiuses = tokens.borderRadius;
type RadiusToken = keyof typeof radiuses;
export const radius = (unit: RadiusToken) => {
  return radiuses[unit];
};

export const spacings = tokens.spacing;
type SpacingToken = keyof typeof spacings;
export const spacing = (unit: SpacingToken) => {
  return spacings[unit];
};

const sizings = tokens.sizing;
type SizingToken = keyof typeof sizings;
export const sizing = (unit: SizingToken) => {
  return sizings[unit];
};

/**
 * This is a helper waiting for tokens
 */
export const fontWeight = (weight: 400 | 600 | 700) => {
  return weight;
};

/**
 * A function that implements CSS spec conformant expansion for "padding"
 *
 * @example
 *   padding(10)
 *   padding(10, 5)
 *   padding(2, 4, 8)
 *   padding(1, 0, 3, '4)
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding
 */
export const padding = (...values: (SpacingToken | 0)[]): StyleRule => {
  if (values.length === 1) {
    return {
      padding: values[0],
    };
  }

  if (values.length === 2) {
    return { padding: `${values[0]}px ${values[1]}px` };
  }

  if (values.length === 3) {
    return { padding: `${values[0]}px ${values[1]}px ${values[2]}px` };
  }

  return {
    padding: `${values[0]}px ${values[1]}px ${values[2]}px ${values[3]}px`,
  };
};
