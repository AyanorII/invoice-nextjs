import { SxProps, Theme } from "@mui/material";

export const stackStyles: SxProps<Theme> = {
  background: (theme: Theme) => ({
    xs: theme.palette.background.paper,
    sm: "transparent",
  }),
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

export const saveAsDraftButtonStyles: SxProps<Theme> = {
  ...baseButtonStyles,
  marginLeft: {xs: 0, sm: "auto"},
  backgroundColor: (theme: Theme) => theme.palette.draft.background,
  color: (theme: Theme) => theme.palette.text.secondary,

  "&:hover": {
    backgroundColor: (theme: Theme) => theme.palette.background.paper,
    color: (theme: Theme) => theme.palette.text.primary,
  },
};
