import { CssBaseline, PaletteMode, Stack, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setThemeMode } from "../store/themeSlice";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const dispatch = useDispatch();
  useEffect(() => {
    const themeMode = prefersDarkMode ? "dark" : "light";
    dispatch(setThemeMode(themeMode as PaletteMode));
  }, [prefersDarkMode]);

  return (
    <>
      <CssBaseline />
      <Stack
        flexDirection={{ lg: "row" }}
        minHeight="100vh"
        maxHeight="100vh"
        overflow="auto"
        paddingBottom={{ xs: 4, lg: 0 }}
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Header />
        {children}
      </Stack>
    </>
  );
};

export default Layout;
