"use client";

import { gql, useQuery } from "@apollo/client";
import { client } from "../../../apollo-client";
import OtherUserPage from "../../../components/personalPage/otherUserPage";
import Error from "../../../components/status/Error";
import Loading from "../../../components/status/Loading";
import { getOtherUserData } from "../../../queries/queries";

const Page = ({ params: { userId } }) => {
  const { data, loading, error } = useQuery(getOtherUserData, {
    variables: { id: userId },
    client: client,
  });
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
