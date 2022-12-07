/* ---------------------------- Base theme colors --------------------------- */
export const PRIMARY_COLOR = {
  main: "#7C5DFA",
  light: "#9277FF",
};
export const ERROR_COLOR = {
  main: "#EC5757",
  light: "#FF9797",
};
export const BACKGROUND_COLOR = {
  light: {
    paper: "#FFFFFF",
    main: "#F8F8FB",
  },
  dark: {
    paper: "#1E2139",
    main: "#141625",
  },
};
export const TEXT_COLOR = {
  light: {
    primary: "#0C0E16",
    secondary: "#888EB0",
  },
  dark: {
    primary: "#FFFFFF",
    secondary: "#DFE3FA",
  },
};

/* -------------------------- Invoice status colors ------------------------- */
export const PAID_COLOR = {
  main: "#33D69F",
  background: "#33D69F50",
};
export const PENDING_COLOR = {
  main: "#FF8F00",
  background: "#FF8F0050",
};
export const DRAFT_COLOR = {
  light: {
    main: "#373B53",
    background: "#373B5350",
  },
  dark: {
    main: "#DFE3FA",
    background: "#DFE3FA50",
  },
};

export const COLORS_MAP = {
  paid: PAID_COLOR,
  pending: PENDING_COLOR,
  draft: DRAFT_COLOR,
}
