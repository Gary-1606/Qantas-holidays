import type { StyleRule } from "@vanilla-extract/css";
import omit from "lodash/omit";
import isEqual from "lodash/isEqual";
import { Breakpoint, breakpoints } from "./breakpoints";

type StyleWithoutMediaQueries = Exclude<StyleRule["@media"], undefined>[string];
interface ResponsiveStyle {
  xs?: StyleWithoutMediaQueries;
  xsm?: StyleWithoutMediaQueries;
  sm?: StyleWithoutMediaQueries;
  md?: StyleWithoutMediaQueries;
  lg?: StyleWithoutMediaQueries;
  lgr?: StyleWithoutMediaQueries;
  xl?: StyleWithoutMediaQueries;
  xxl?: StyleWithoutMediaQueries;
}

const makeMediaQuery =
  (breakpoint: Breakpoint) => (styles: StyleWithoutMediaQueries) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : {
          [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
        };

const mediaQuery = {
  xsm: makeMediaQuery("xsm"),
  sm: makeMediaQuery("sm"),
  md: makeMediaQuery("md"),
  lg: makeMediaQuery("lg"),
  lgr: makeMediaQuery("lgr"),
  xl: makeMediaQuery("xl"),
  xxl: makeMediaQuery("xxl"),
};

export const responsiveStyle = ({
  xs,
  xsm,
  sm,
  md,
  lg,
  lgr,
  xl,
  xxl,
}: ResponsiveStyle): StyleRule => {
  const xsStyles = omit(xs, "@media");
  const xsmStyles = !xsm || isEqual(xsm, xsStyles) ? null : xsm;
  const smStyles = !sm || isEqual(sm, xsStyles || xsmStyles) ? null : sm;
  const mdStyles =
    !md || isEqual(md, xsStyles || xsmStyles || smStyles) ? null : md;
  const lgStyles =
    !lg || isEqual(lg, xsStyles || xsmStyles || smStyles || mdStyles)
      ? null
      : lg;
  const lgrStyles =
    !lgr ||
    isEqual(lgr, xsStyles || xsmStyles || smStyles || mdStyles || lgStyles)
      ? null
      : lgr;
  const xlStyles =
    !xl ||
    isEqual(
      xl,
      xsStyles || xsmStyles || smStyles || mdStyles || lgStyles || lgrStyles,
    )
      ? null
      : xl;
  const xxlStyles =
    !xxl ||
    isEqual(
      xl,
      xsStyles || xsmStyles || smStyles || mdStyles || lgStyles || lgrStyles,
    )
      ? null
      : xxl;

  const hasMediaQueries =
    xsmStyles ||
    smStyles ||
    mdStyles ||
    lgStyles ||
    lgrStyles ||
    xlStyles ||
    xxlStyles;

  return {
    ...xsStyles,
    ...(hasMediaQueries
      ? {
          "@media": {
            ...(xsmStyles ? mediaQuery.xsm(xsmStyles) : {}),
            ...(smStyles ? mediaQuery.sm(smStyles) : {}),
            ...(mdStyles ? mediaQuery.md(mdStyles) : {}),
            ...(lgStyles ? mediaQuery.lg(lgStyles) : {}),
            ...(lgrStyles ? mediaQuery.lgr(lgrStyles) : {}),
            ...(xlStyles ? mediaQuery.xl(xlStyles) : {}),
            ...(xxlStyles ? mediaQuery.xxl(xxlStyles) : {}),
          },
        }
      : {}),
  };
};
