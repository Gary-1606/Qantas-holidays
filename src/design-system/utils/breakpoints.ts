export const breakpoints = {
  xs: 0,
  xsm: 360,
  sm: 560,
  md: 768,
  lg: 850,
  lgr: 991,
  xl: 1024,
  xxl: 1240,
  xxxl: 1480,
} as const;

export type Breakpoint = keyof typeof breakpoints;
