import { CSSProperties } from "@vanilla-extract/css";

const Calibre = '"Calibre", sans-serif';

export const fonts = {
  Calibre,
};

type FontKeys =
  | "p14"
  | "p16"
  | "p18"
  | "p20"
  | "p22"
  | "p25"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5";

/** With defined standard line heights */
export const fontSizes: Record<FontKeys, CSSProperties> = {
  p14: {
    fontSize: "0.875rem",
    lineHeight: 1.3,
  },
  p16: {
    fontSize: "1rem",
    lineHeight: 1.25,
  },
  p18: {
    fontSize: "1.125rem",
    lineHeight: 1.3,
  },
  p20: {
    fontSize: "1.25rem",
    lineHeight: 1.3,
  },
  p22: {
    fontSize: "1.375rem",
    lineHeight: 1.3,
  },
  p25: {
    fontSize: "1.5625rem",
    lineHeight: 1.3,
  },
  h1: {
    fontSize: "3.5rem",
    lineHeight: 1.05,
    fontWeight: 700,
  },
  h2: {
    fontSize: "2.5rem",
    lineHeight: 1.1,
    fontWeight: 700,
  },
  h3: {
    fontSize: "2rem",
    lineHeight: 1.1,
    fontWeight: 700,
  },
  h4: {
    fontSize: "1.5rem",
    lineHeight: 1.1,
    fontWeight: 700,
  },
  h5: {
    fontSize: "1.25rem",
    lineHeight: 1.2,
    fontWeight: 700,
  },
};

/** Returns an object with fontSize and lineHeight standardised */
export const fontSize = (unit: FontKeys) => fontSizes[unit];
