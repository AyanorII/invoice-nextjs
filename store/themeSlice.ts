import { createSlice } from "@reduxjs/toolkit"
import { PaletteMode } from "@mui/material";
export interface ThemeState {
  mode: PaletteMode;
}

const prefersDarkMode =
  window && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const initialState: ThemeState = {
  mode: prefersDarkMode
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    }
  }
})

export const { toggleMode } = themeSlice.actions
export default themeSlice.reducer
