import { CssBaseline, Grid } from "@mui/material";
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
        <Grid container minHeight="100vh">
          <Grid item xs={12} lg="auto">
            <Header />
          </Grid>
          <Grid item xs={12} lg>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
