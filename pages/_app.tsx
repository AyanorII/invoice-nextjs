import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ThemeProvider from "../components/ThemeProvider";
import { store } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
