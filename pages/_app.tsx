import { CssBaseline, Stack } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Header } from "../components/Header";
import ThemeProvider from "../components/ThemeProvider";
import { store } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <Stack
          flexDirection={{ lg: "row" }}
          minHeight="100vh"
          overflow="hidden"
        >
          <Header />
          <Component {...pageProps} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
