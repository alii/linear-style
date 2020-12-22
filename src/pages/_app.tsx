import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { appThemes } from "../core/app-themes";
import { GlobalStyle } from "../components/GlobalStyle";
import { Navbar } from "../molecules/Navbar";
import useSystemTheme from "use-system-theme";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useSystemTheme(true);

  return (
    <Fragment>
      <ThemeProvider theme={appThemes[theme]}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
