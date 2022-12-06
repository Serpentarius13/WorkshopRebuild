const { gql } = require("@apollo/client");
import { client } from "../apollo-client";

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

export const fetchAllDreams = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query Query {
          getAll {
            dreamName
            description
            name
            email
            time
            _id
            authorId
          }
        }
      `,
    });
    return data.getAll;
  } catch (err) {
    return "error";
  }
};
