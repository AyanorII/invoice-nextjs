import { SxProps, Theme } from "@mui/material";
import { TEXT_COLOR } from "../../lib/constants";

export const inputStyles: SxProps<Theme> = {
  "& .MuiInputBase-input": {
    backgroundColor: (theme: Theme): string => theme.palette.background.paper,
    color: (theme: Theme) => theme.palette.text.primary,
    fontWeight: "bold",
    borderRadius: "4px",
  },
};

export const outlineInputStyles: SxProps<Theme> = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: (theme: Theme) =>
      theme.palette.mode === "dark" ? "transparent" : TEXT_COLOR.dark.secondary,
    transition: "all 0.1s",
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: (theme: Theme) =>
      theme.palette.mode === "dark"
        ? "transparent"
        : `${TEXT_COLOR.dark.secondary} !important`,
    transition: "all 0.1s",
  },
};

export const helperTextStyles: SxProps<Theme> = {
  "& .MuiFormHelperText-root": {
    position: "absolute",
    top: "-1.35rem",
    right: 0,
    margin: 0,
  },
};

export const datePickerStyles: SxProps<Theme> = {
  width: "100%",
  ...inputStyles,
  ...outlineInputStyles,
  ...helperTextStyles,
  "& .MuiInputBase-root": {
    paddingRight: 0,
  },
  "& .MuiInputAdornment-root": {
    position: "absolute",
    right: "1.5rem",
    display: "block",
    top: 10,
  },
};

export const textFieldStyles: SxProps<Theme> = {
  width: "100%",
  ...inputStyles,
  ...outlineInputStyles,
  ...helperTextStyles,
};

export const selectStyles: SxProps<Theme> = {
  padding: 0,
  ...textFieldStyles,
}
