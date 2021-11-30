import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { appTheme } from "../core/app-themes";
import { GlobalStyle } from "../components/GlobalStyle";
import { Navbar } from "../molecules/Navbar";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Linear Style</title>
      </Head>

      <Script src="https://lab.alistair.cloud/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>

      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
