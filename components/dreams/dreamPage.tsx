"use client";

import { store } from "../../store/store";
import { ModalTypes, QueryNames } from "../modalOver";
import UniversalButton, { ButtonTypes } from "../uniButton.component";
import DreamPageInitials from "./dreamPageInitials";

import { useState, useEffect } from "react";
import SendEmailForm from "../reusable-form/formTypes/sendEmailForm";

const DreamFullReadPage = () => {
  const fakeDream = {
    name: "Bobink",
    time: "12:38",
    email: "bobki@mail.ru",
    dreamName: "Lorem ipsum?",
    description:
      "Lorem ipsum dolor sit, amet con122222222222222222222222222222222222222222223s21212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121213ectetur12321321321321312312313123213123123123123213 adipisicing elit. Maiores, aliquam laudantium quod numquam repellat optio, porro accusamus sequi quisquam, quam cum ullam vel necessitatibus. Animi aliquam fugit id nulla iste.",
    comments: [
      {
        commentAuthor: "bobkin",
        message:
          "Loremius LoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremius",
        commentTime: new Date().toDateString(),
        comments: [
          {
            commentAuthor: "Bobkin",
            message: "213123123123",
            commentTime: new Date().toDateString(),
            comments: [
              {
                commentAuthor: "Bobkin",
                message: "213123123123",
                commentTime: new Date().toDateString(),
              },
            ],
          },
        ],
      },
    ],
  };

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

  const { dreamName, description, time, email, name, comments } = fakeDream;

  const [formVis, setFormVis] = useState(false);
  return (
    <div className="container mx-auto py-12 px-4 relative ">
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-4xl font-medium"> {dreamName} </h1>{" "}
        <DreamPageInitials name={name} email={email} time={time} />
      </div>
      <p className="break-words w-[100%] md:w-[50%] mt-8"> {description} </p>{" "}
      <UniversalButton
        buttonType={ButtonTypes.LEAVE_COMMENT}
        text="Leave comment"
        onClick={() => setFormVis(!formVis)}
      />
      <div className=" z-10 absolute">
        {formVis && (
          <SendEmailForm
            name={QueryNames.EMAIL_TO_USER}
            additionalVariables={{ emailFrom: email }}
            closeForm={() => setFormVis(false)}
          />
        )}
      </div>
      <h1 className='mt-8'> Comments: {countAllNestedArrays(fakeDream)} </h1>
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

  console.log(comment);

  const { commentAuthor, message, commentTime } = comment;

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
        <span className="font-sm underline"> {commentTime} </span>
      </div>
      <p className="break-words "> {message} </p> {nestedComments}
    </div>
  );
};
