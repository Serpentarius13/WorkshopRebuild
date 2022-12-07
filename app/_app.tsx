import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import Head from "next/head";

import { client } from "../apollo-client";
import { userStore } from "../store/store";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { login } = userStore;

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Dream workshop</title>
        <meta name="description" content="Dream workshop website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/aten.jpg" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
