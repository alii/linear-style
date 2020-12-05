import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import Head from "next/head";
import { appThemes } from "../app-themes";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar } from "../molecules/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Linear Style</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="icon"
          href="https://static.linear.app/client/favicon.5430d743.ico"
        />
        <meta name="theme-color" content="#5E6AD2" />
        <meta property="og:title" content="Linear Style  🖌️" />
        <meta
          property="og:description"
          content="Find and share great UI themes for Linear with linear.style"
        />
      </Head>
      <ThemeProvider theme={appThemes.dark}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
