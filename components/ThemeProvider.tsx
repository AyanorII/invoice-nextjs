import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getDesignTokens } from "../styles/theme";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  let theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  theme = responsiveFontSizes(theme);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
