import App, { Container } from "next/app";
import React from "react";

// This import breaks error messages, for some reason
import { Test } from "../components/test";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Test />
        <Component {...pageProps} />
      </Container>
    );
  }
}
