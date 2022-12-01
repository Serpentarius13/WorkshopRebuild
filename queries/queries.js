const { gql } = require("@apollo/client");

export const sentenceQuery = gql`
  query Query {
    sentence
  }
`;
