import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const endpoint = "http://localhost:4000/";

const link = createHttpLink({
  uri: endpoint,
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
