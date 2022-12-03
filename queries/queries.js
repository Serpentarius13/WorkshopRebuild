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

export const getUser = gql`
  query Query {
    getUser {
      username
      email
      _id
    }
  }
`;

export const dreamFields = [
  "dreamName",
  "description",
  "name",
  "email",
  "time",
  "_id",
  "authorId",
];
