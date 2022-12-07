"use client";

import { store } from "../../store/store";
import { ModalTypes, QueryNames } from "../modalOver";
import UniversalButton, { ButtonTypes } from "../uniButton.component";
import DreamPageInitials from "./dreamPageInitials";

import { useState, useEffect } from "react";
import SendEmailForm from "../reusable-form/formTypes/sendEmailForm";
import CreateCommentForm from "../reusable-form/formTypes/createCommentForm";

function countAllNestedArrays(obj) {
  let count = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) {
        // If the value is an array, add the length to the count
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
  const { dreamName, description, time, email, name, _id } = dream;

  let { comments } = dream;

  console.log(comments);

  const [formVis, setFormVis] = useState(false);
  return (
    <div className="container mx-auto py-12 px-4 relative ">
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-4xl font-medium"> {dreamName} </h1>{" "}
        <DreamPageInitials name={name} id={_id} time={time} />
      </div>
      <p className="break-words w-[100%] md:w-[50%] mt-8"> {description} </p>{" "}
      <UniversalButton
        buttonType={ButtonTypes.LEAVE_COMMENT}
        text="Leave comment"
        onClick={() => setFormVis(!formVis)}
      />
      <div className=" z-10 absolute">
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
      <h1 className="mt-8"> Comments: {countAllNestedArrays(dream)} </h1>
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

const Comment = ({ comment, level = 0 }) => {
  const nestedComments = (comment.comments || []).map((comment) => {
    comment.level = level + 1;

    return (
      <Comment
        level={level + 1}
        comment={comment}
        key={Math.random() * 123123}
      />
    );
  });

  const { commentAuthor, commentText, commentTime } = comment;

  const date = new Date(+commentTime);

  console.log(date);

  return (
    <div
      className="w-[25em] space-y-2"
      style={{
        marginLeft: `${level * 24}px`,
        marginTop: "20px",
      }}
    >
      <div className="flex items-center justify-between">
        {" "}
        <p className="text-sm font-bold">
          {" "}
          By:{" "}
          <span className="text-2xl italic font-medium">
            {" "}
            {commentAuthor}{" "}
          </span>{" "}
        </p>{" "}
        <span className="font-sm underline flex justify-end gap-4 w-[60%] items-center">
          {" "}
          <span> {date.toLocaleTimeString()} </span>{" "}
          <span>{date.toDateString()}</span>
        </span>
      </div>
      <p className="break-words "> {commentText} </p> {nestedComments}
    </div>
  );
};
