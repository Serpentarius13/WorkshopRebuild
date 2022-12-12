"use client";

import { store, userStore } from "../../store/store";
import { ModalTypes, QueryNames } from "./../../types/enum";
import UniversalButton from "../uniButton.component";
import DreamPageInitials from "./dreamPageInitials";
import { ButtonTypes } from "./../../types/enum";

import { useState, useEffect } from "react";
import SendEmailForm from "../reusable-form/formTypes/sendEmailForm";
import CreateCommentForm from "../reusable-form/formTypes/createCommentForm";

import { FcLike, FcDislike } from "react-icons/fc";

import Comment from "./dreamComment";
import { useSnapshot } from "valtio";
import { gql, useMutation } from "@apollo/client";

import { client } from "../../apollo-client";
import LikeButton from "./dreamLikeButton";
import StatusPopOver, { StatusTypes } from "../statusPopOver";

function countAllNestedArrays(obj) {
  let count = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) {
        if (!(obj[key][0] instanceof Object)) continue;

        count += obj[key].length;
        count += countAllNestedArrays(obj[key]);
      } else if (typeof obj[key] === "object") {
        // If the value is an object, call the function recursively
        count += countAllNestedArrays(obj[key]);
      }
    }
  }

  return count;
}

const DreamFullReadPage = ({ dream, refetch }) => {
  const {
    dreamName,
    description,
    time,
    email,
    name,
    _id,
    rating,
    likedBy,
    avatar,
    authorId,
  } = dream;

  let { comments } = dream;


  const { currentUser } = useSnapshot(userStore);

  const id = currentUser?._id;
  const [mutateFn, { data, loading, error }] = useMutation(
    gql`
      mutation Mutation($_id: String, $isDream: Boolean) {
        likeClick(id: $_id, isDream: $isDream)
      }
    `,
    { client }
  );

  const [formVis, setFormVis] = useState(false);

  const likePost = async (isDream, id) => {
    if (!currentUser) return;
    try {
      if (loading || error) return;
      await mutateFn({ variables: { isDream, _id: id } }).then((res) =>
        refetch()
      );
    } catch (err) {
      return;
    }
  };

  if (!dream)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        {" "}
        <StatusPopOver type={StatusTypes.STATUS_ERROR} />{" "}
      </div>
    );

  return (
    <div className="container mx-auto mt-12 py-12 px-4 relative text-[20px]  ">
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-4xl font-medium"> {dreamName} </h1>{" "}
        <DreamPageInitials
          authorId={authorId}
          avatar={avatar}
          name={name}
          id={_id}
          time={time}
        />
      </div>
      <p className="break-words w-[100%] md:w-[50%] mt-8"> {description} </p>{" "}
      <div className="w-[95%] md:w-[45%] flex items-center justify-between mt-4">
        <UniversalButton
          buttonType={ButtonTypes.LEAVE_COMMENT}
          text="Leave comment"
          onClick={() => setFormVis(!formVis)}
        />

        <LikeButton
          condition={likedBy.includes(id)}
          size={20}
          rating={rating}
          handler={() => likePost(true, _id)}
          buttonExistenceCondition={currentUser}
        />
      </div>
      {formVis && (
        <CreateCommentForm
          id={""}
          close={() => {
            setFormVis(false);
            refetch();
          }}
        />
      )}
      <p className="mt-8 text-blue-400">
        {" "}
        Comments: {countAllNestedArrays(dream)}{" "}
      </p>{" "}
      <p className="text-red-400"> Rating: {rating} </p>{" "}
      <div className="w-[100%] flex flex-col justify-start space-y-4 mt-4">
        {" "}
        {comments.map((comment, ix) => {
          return (
            <Comment
              likeHandler={likePost}
              key={ix}
              comment={comment}
              refetch={refetch}
            />
          );
        })}
      </div>
    </div>
  );
};
export default DreamFullReadPage;
