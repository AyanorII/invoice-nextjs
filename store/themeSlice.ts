import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
export interface ThemeState {
  mode: PaletteMode;
}

const initialState: ThemeState = {
  mode: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
