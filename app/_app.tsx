import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import Head from "next/head";

import { client } from "../apollo-client";
import { userStore } from "../store/store";
import { useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const { login } = userStore;

  return <Component {...pageProps} />;
}
