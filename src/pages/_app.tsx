import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { appTheme } from "../core/app-themes";
import { GlobalStyle } from "../components/GlobalStyle";
import { Navbar } from "../molecules/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
