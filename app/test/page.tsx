"use client";

import { gql, useQuery } from "@apollo/client";
import { client } from "../../apollo-client";
import OtherUserPage from "../../components/personalPage/otherUserPage";
import Error from "../../components/status/Error";
import Loading from "../../components/status/Loading";

const Page = () => {
  const id = "639672fbf9b4deec9e28872a";
  const { data, loading, error } = useQuery(
    gql`
      query Query($id: String) {
        getOtherUserData(id: $id) {
          dreams {
            _id
            dreamName
            name
            description
            email
            time
            rating
            likedBy
            isPrivate
          }

          comments {
            commentText
            commentRating
            commentAuthor
            commentAuthorId
            _id
            likedBy
            commentRating
            commentParentDream
          }

          rating
          avatar
          name
        }
      }
    `,
    { variables: { id }, client: client }
  );
  if (error) return <Error />;
  if (loading) return <Loading />;
  const { dreams, comments, rating, avatar, name } = data?.getOtherUserData;
  console.log(data);
  console.log(data);
  return (
    <OtherUserPage
      avatar={avatar}
      dreams={dreams}
      comments={comments}
      rating={rating}
      name={name}
    />
  );
};
export default Page;
