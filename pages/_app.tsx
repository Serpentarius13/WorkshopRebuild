import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { subscribe } from "valtio";

import { userStore } from "../store/store";

import { client } from "./../apollo-client";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
