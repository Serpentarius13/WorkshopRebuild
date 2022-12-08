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
      name
      email
      _id
      createdAt
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


export const getOneDream = gql`
  query Query($id: String) {
    getOneDream(id: $id) {
      _id
      authorId
      description
      name
      dreamName
      likedBy
      rating
      comments {
        ...CommentFragment
        comments {
          ...CommentFragment
          comments {
            ...CommentFragment
            comments {
              ...CommentFragment
              comments {
                ...CommentFragment
                comments {
                  ...CommentFragment
                }
              }
            }
          }
        }
      }
    }
  }
  fragment CommentFragment on Comment {
    commentRating
    commentAuthorId
    commentAuthor
    commentText
    createdAt
    likedBy
    _id
  }
`;
