"use client";

import { store, userStore } from "../../store/store";
import { ModalTypes, QueryNames } from "../modalOver";
import UniversalButton, { ButtonTypes } from "../uniButton.component";
import DreamPageInitials from "./dreamPageInitials";

import { useState, useEffect } from "react";
import SendEmailForm from "../reusable-form/formTypes/sendEmailForm";
import CreateCommentForm from "../reusable-form/formTypes/createCommentForm";

import { FcLike, FcDislike } from "react-icons/fc";

import Comment from "./dreamComment";
import { useSnapshot } from "valtio";
import { gql, useMutation } from "@apollo/client";

import { client } from "../../apollo-client";

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
  const { dreamName, description, time, email, name, _id, rating, likedBy } =
    dream;

  let { comments } = dream;

  const { currentUser } = useSnapshot(userStore);
  const isUser = currentUser instanceof Object;

  const id = currentUser?._id;

  console.log(currentUser);

  console.log(currentUser);

  console.log(comments);

  const [mutateFn, { data, loading, error }] = useMutation(
    gql`
      mutation Mutation($id: String, $_id: String) {
        likeDream(id: $_id, userId: $id)
      }
    `,
    { variables: { id, _id }, client }
  );

  console.log(likedBy);

  const [formVis, setFormVis] = useState(false);
  return (
    <div className="container mx-auto py-12 px-4 relative ">
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-4xl font-medium"> {dreamName} </h1>{" "}
        <DreamPageInitials name={name} id={_id} time={time} />
      </div>
      <p className="break-words w-[100%] md:w-[50%] mt-8"> {description} </p>{" "}
      <div className="w-[95%] md:w-[45%] flex items-center justify-between mt-4">
        <UniversalButton
          buttonType={ButtonTypes.LEAVE_COMMENT}
          text="Leave comment"
          onClick={() => setFormVis(!formVis)}
        />
        {isUser ? (
          <div
            onClick={async () => {
              if (!isUser) return;
              try {
                if (loading || error) return;
                await mutateFn().then((res) => refetch());
              } catch (err) {
                return;
              }
            }}
          >
            {" "}
            <div className="flex space-x-2 items-center justify-center">
              {" "}
              {likedBy.includes(id) ? (
                <FcDislike className="icon icon-dislike" />
              ) : (
                <FcLike className="icon icon-like" />
              )}
            </div>
          </div>
        ) : (
          <p className="p-2 flex items-center justify-center border-2 border-orange-400">
            {" "}
            Be sure to log in to rate it <br />
          </p>
        )}
      </div>
      <div className=" z-10 absolute w-[30rem] h-[30rem]">
        {formVis && (
          <CreateCommentForm
            id={_id}
            close={() => {
              setFormVis(false);
              refetch();
            }}
          />
        )}
      </div>
      <p className="mt-8 text-blue-400">
        {" "}
        Comments: {countAllNestedArrays(dream)}{" "}
      </p>{" "}
      <p className="text-red-400"> Rating: {rating} </p>{" "}
      <div className="w-[100%] flex flex-col justify-start space-y-4 mt-4">
        {" "}
        {comments.map((comment, ix) => {
          return <Comment key={ix} comment={comment} />;
        })}
      </div>
    </div>
  );
};
export default DreamFullReadPage;
