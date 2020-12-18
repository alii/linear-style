import Document, { DocumentContext, Html, Main, NextScript, Head } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => {
            return props => sheet.collectStyles(<App {...props} />);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang={"en"}>
        <Head>
          <title>Linear Style</title>
          <link rel="stylesheet" href={"https://rsms.me/inter/inter.css"} />
          <link rel={"icon"} href="https://static.linear.app/client/favicon.5430d743.ico" />
          <meta name={"theme-color"} content={"#5E6AD2"} />
          <meta property={"og:title"} content={"Linear Style  🖌️"} />
          <meta property={"og:description"} content={"Find and share great UI themes for Linear with linear.style"} />
          <meta name="description" content={"Find and share great UI themes for Linear with linear.style"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
