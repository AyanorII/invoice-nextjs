import { SxProps, Theme } from "@mui/material";

export const stackStyles: SxProps<Theme> = {
  background: (theme: Theme) => theme.palette.background.paper,
  marginInline: -3,
  marginBottom: -3,
  marginTop: 3,
  boxShadow: "0px 0px 50px 50px #00000050",
  position: { xs: "sticky", sm: "static" },
  bottom: 0,
  left: 0,
  right: 0,
  transition: "all 0.25s ease-in-out",
};

const baseButtonStyles: SxProps<Theme> = {
  paddingBlock: 1.5,
};

export const discardButtonStyles: SxProps<Theme> = {
  ...baseButtonStyles,
  color: (theme: Theme) => theme.palette.text.secondary,
  background: (theme: Theme) =>
    theme.palette.mode === "dark" ? "#252945" : "#F9FAFE",
  minWidth: "84px",

  "&:hover": {
    color: (theme: Theme) => "#7E88C3",
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "dark" ? "#FFFFFF" : "#DFE3FA",
  },
};

export const saveAsDraftButtonStyles: SxProps<Theme> = {
  ...baseButtonStyles,
  backgroundColor: (theme: Theme) => theme.palette.draft.background,
  color: (theme: Theme) => theme.palette.text.secondary,

  "&:hover": {
    backgroundColor: (theme: Theme) => theme.palette.background.paper,
    color: (theme: Theme) => theme.palette.text.primary,
  },
};
