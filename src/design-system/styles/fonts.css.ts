import { globalFontFace } from "@vanilla-extract/css";

globalFontFace('"Calibre"', {
  src: `url('/next/fonts/CalibreWeb-Regular.woff2') format('woff2')`,
  fontWeight: 400,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace('"Calibre"', {
  src: `url('/next/fonts/CalibreWeb-Medium.woff2') format('woff2')`,
  fontWeight: 500,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace('"Calibre"', {
  src: `url('/next/fonts/CalibreWeb-Semibold.woff2') format('woff2')`,
  fontWeight: 600,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace('"Calibre"', {
  src: `url('/next/fonts/CalibreWeb-Bold.woff2') format('woff2')`,
  fontWeight: 700,
  fontStyle: "normal",
  fontDisplay: "swap",
});
