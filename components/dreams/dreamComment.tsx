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

export default Comment;
