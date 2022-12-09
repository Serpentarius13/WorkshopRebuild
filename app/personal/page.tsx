"use client";

import { gql, useQuery } from "@apollo/client";
import Error from "next/error";
import { useSnapshot } from "valtio";
import { client } from "../../apollo-client";
import Loading from "../../components/status/Loading";
import { store, userStore } from "../../store/store";
import { ModalTypes } from "../../types/enum";

import { calcDate } from "./../../utils/date";

const PersonalPage = () => {
  const { openModal } = store;

  const { data, loading, error } = useQuery(
    gql`
      query Query {
        getUserData {
          dreams {
            _id
            dreamName
            name
            description
            email
            time
            rating
            likedBy
          }

          comments {
            commentText
            commentRating
            commentAuthor
            commentAuthorId
            _id
            likedBy
            commentRating
          }
        }
      }
    `,
    { client }
  );
  const { currentUser } = useSnapshot(userStore);

  if (loading) return <Loading />;
  if (error && !currentUser)
    return (
      <div className="flex flex-col justify-center items-center space-y-4 mt-4">
        {" "}
        <h1 className="text-3xl text-purple-800 "> Please login first </h1>{" "}
        <button
          className="px-8 py-4 bg-purple-500 text-white active:bg-purple-800"
          onClick={() => openModal(ModalTypes.LOGIN)}
        >
          {" "}
          Login{" "}
        </button>{" "}
        <button
          className="px-8 py-4 bg-purple-500 text-white active:bg-purple-800"
          onClick={() => openModal(ModalTypes.SIGNUP)}
        >
          {" "}
          Sign up{" "}
        </button>{" "}
      </div>
    );

  const { name, email, _id, createdAt } = currentUser;

  const { dreams, comments } = data.getUserData;

  const { days, hours, minutes } = calcDate(createdAt);

  return (
    <div className="container p-4 mx-auto flex flex-col items-center justify-center space-y-4">
      <h1> Hello, {name}. Glad to see you. </h1>
     
      <div className="w-[100%] h-screen p-4 flex flex-col md:flex-row space-x-4 items-center justify-center">
        <div className="w-[50%] flex flex-col items-center justify-start">
          <h3> Your dreams: </h3>
          {dreams.map((dream) => {
            return (
              <p className=" break-words" key={dream._id}>
                {" "}
                {dream.dreamName}{" "}
              </p>
            );
          })}{" "}
        </div>
        <div className="w-[50%] flex flex-col items-center justify-start">
          Your comments:
          {comments.map((comment) => {
            return (
              <p className="w-[30%] break-words" key={comment._id}>
                {" "}
                {comment.commentText}{" "}
              </p>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};
export default PersonalPage;
