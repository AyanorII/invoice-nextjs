import { CssBaseline, useMediaQuery } from "@mui/material";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import ThemeProvider from "../components/ThemeProvider";
import { store } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
