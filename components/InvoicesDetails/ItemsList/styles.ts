import { SxProps, Theme } from "@mui/material";

export const paperStyles: SxProps<Theme> = {
  marginTop: 3,
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === "light" ? "#F9FAFE" : "#152945",
  overflow: "hidden",
  padding: { xs: 3, sm: 4 },
};

export const itemsHeadersStyles: SxProps<Theme> = {
  display: { xs: "none", sm: "grid" },
  gridTemplateColumns: "2fr 1fr 1fr 1fr",
};

export const totalStyles: SxProps<Theme> = {
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === "dark" ? "#0C0E16" : "#373B53",
  padding: { xs: 3, sm: 4 },
  marginInline: { xs: -3, sm: -4 },
  marginBottom: { xs: -3, sm: -4 },
  marginTop: 3,
};
