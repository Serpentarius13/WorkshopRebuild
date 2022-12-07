import { gql, useMutation } from "@apollo/client";

import { client } from "../../apollo-client";
import LikeButton from "./dreamLikeButton";

const Comment = ({ comment, level = 0, likeHandler, id }) => {
  const nestedComments = (comment.comments || []).map((comment) => {
    comment.level = level + 1;

    return (
      <Comment
        level={level + 1}
        comment={comment}
        key={Math.random() * 123123}
        likeHandler={likeHandler}
        id={id}
      />
    );
  });

  const { commentAuthor, commentText, createdAt, commentRating, likedBy, _id } =
    comment;

  const date = new Date(+createdAt);

  console.log(date);
  console.log(createdAt);

  return (
    <div
      className="w-[25em] space-y-2"
      style={{
        marginLeft: `${level * 24}px`,
        marginTop: "20px",
      }}
    >
      <div className="flex items-center space-x-4 ">
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
        <LikeButton
          buttonExistenceCondition={id}
          rating={commentRating}
          condition={likedBy.includes(id)}
          size={16}
          handler={() => likeHandler(false, _id)}
        />{" "}
      </div>
      <p className="break-words "> {commentText} </p> {nestedComments}
    </div>
  );
};

export default Comment;
