import { PaletteMode, PaletteOptions, ThemeOptions } from "@mui/material";
import {
  BACKGROUND_COLOR,
  DRAFT_COLOR,
  ERROR_COLOR,
  PAID_COLOR,
  PENDING_COLOR,
  PRIMARY_COLOR,
  TEXT_COLOR,
} from "../lib/constants";

const basePalette: PaletteOptions = {
  primary: {
    main: PRIMARY_COLOR.main,
    light: PRIMARY_COLOR.light,
  },
  error: {
    main: ERROR_COLOR.main,
    light: ERROR_COLOR.light,
  },
  paid: {
    main: PAID_COLOR.main,
    background: PAID_COLOR.background,
  },
  pending: {
    main: PENDING_COLOR.main,
    background: PENDING_COLOR.background,
  },
};

const components: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "capitalize",
          borderRadius: "24px",
          letterSpacing: "0.5px",
        },
        containedPrimary: {
          ":hover": {
            backgroundColor: PRIMARY_COLOR.light,
          },
        },
        containedError: {
          ":hover": {
            backgroundColor: ERROR_COLOR.light,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "1.5rem",
          borderRadius: "8px"
        }
      }
    }
  },
};

const typography: ThemeOptions = {
  typography: {
    fontFamily: ["League Spartan", "sans-serif"].join(","),
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  ...typography,
  ...components,
  palette: {
    ...basePalette,
    mode,
    ...(mode === "light"
      ? {
          background: {
            paper: BACKGROUND_COLOR.light.paper,
            default: BACKGROUND_COLOR.light.main,
          },
          text: {
            primary: TEXT_COLOR.light.primary,
            secondary: TEXT_COLOR.light.secondary,
          },
          draft: {
            main: DRAFT_COLOR.light.main,
            background: DRAFT_COLOR.light.background,
          },
        }
      : {
          background: {
            paper: BACKGROUND_COLOR.dark.paper,
            default: BACKGROUND_COLOR.dark.main,
          },
          text: {
            primary: TEXT_COLOR.dark.primary,
            secondary: TEXT_COLOR.dark.secondary,
          },
          draft: {
            main: DRAFT_COLOR.dark.main,
            background: DRAFT_COLOR.dark.background,
          },
        }),
  },
});
