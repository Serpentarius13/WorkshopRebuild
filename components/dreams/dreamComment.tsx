import { gql, useMutation } from "@apollo/client";

import CreateCommentForm from "../reusable-form/formTypes/createCommentForm";
import LikeButton from "./dreamLikeButton";

import { useState } from "react";
import { userStore } from "../../store/store";

import { BsReply } from "react-icons/bs";

const Comment = ({ comment, level = 0, likeHandler, refetch }) => {
  const nestedComments = (comment.comments || []).map((comment) => {
    return (
      <Comment
        level={level + 1}
        comment={comment}
        key={Math.random() * 123123}
        likeHandler={likeHandler}
        refetch={refetch}
      />
    );
  });

  const { commentAuthor, commentText, createdAt, commentRating, likedBy, _id } =
    comment;

  const date = new Date(+createdAt);

  const [formVis, setFormVis] = useState(false);

  const { currentUser } = userStore;

  const id = currentUser?._id;

  return (
    <div
      className="w-[25rem] md:w-[30rem] lg:w-[35rem] space-y-1 relative"
      style={{
        marginLeft: `${level * 2}%`,
        marginTop: "20px",
      }}
    >
      <div className="flex items-center justify-center space-x-4 ">
        {" "}
        <p className="text-sm font-bold">
          {" "}
          By:{" "}
          <span className="text-1xl italic font-medium">
            {" "}
            {commentAuthor}{" "}
          </span>{" "}
        </p>{" "}
        <p className="text-sm underline  break-keep w-[80%] flex  gap-2">
          {" "}
          <span> {date.toLocaleTimeString()} </span>{" "}
          <span>{date.toDateString()}</span>
        </p>
        <LikeButton
          buttonExistenceCondition={id}
          rating={commentRating}
          condition={likedBy.includes(id)}
          size={14}
          handler={() => likeHandler(false, _id)}
        />{" "}
      </div>
      <p className="break-words "> {commentText} </p>{" "}
      <button
        onClick={() => {
          setFormVis((state) => !state);
          console.log(formVis);
        }}
        className="w-4 h-4 rotate-180"
      >
        {" "}
        <BsReply />
      </button>{" "}
      <div className="absolute">
        {formVis && (
          <CreateCommentForm
            id={_id}
            isDream={false}
            close={() => {
              setFormVis(false);
              refetch();
            }}
          />
        )}
      </div>
      {nestedComments}
    </div>
  );
};

export default Comment;
