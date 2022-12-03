import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./utils/cookies";

export const endpoint = process.env.ENDPOINT || "http://localhost:4000/";

const link = createHttpLink({
  uri: endpoint,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});
