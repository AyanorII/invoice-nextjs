import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ThemeState {
  mode: PaletteMode;
}

const initialState: ThemeState = {
  mode: "dark",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      state.mode = action.payload;
    }
  },
});

export const { toggleMode, setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
