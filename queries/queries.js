const { gql } = require("@apollo/client");

export const sentenceQuery = gql`
  query Query {
    sentence
  }
`;

export const getAllDreams = gql`
  query Query {
    getAllDreams {
      name
      email
      time
      description
      dreamName
      authorId
    }
  }
`;
