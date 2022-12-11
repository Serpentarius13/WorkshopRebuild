import { slideStyle } from "./personalLayout";
import DreamOrComment from "./profileDream";

import { memo } from "react";

const DreamAndCommentPages = ({ dreams, comments }) => {
  return (
    <>
      <div
        className="w-screen h-screen "
        style={{
          backgroundImage: "linear-gradient(to right, #114357, #5f3dc4)",
        }}
      >
        <ul
          className={`${slideStyle}  bg-gray-800 list-none overflow-y-auto flex flex-col items-center  p-6 space-y-4 `}
        >
          {dreams.length > 0 ? (
            <>
              {" "}
              {dreams.map((dream) => (
                <DreamOrComment source={dream} key={dream._id} />
              ))}{" "}
            </>
          ) : (
            <p className="text-center font-bold text-white text-2xl ">
              {" "}
              No dreams yet you have!{" "}
            </p>
          )}
        </ul>
      </div>
      <div
        className="w-screen h-screen "
        style={{
          backgroundImage: "linear-gradient(to right, #5f3dc4, #91a7ff)",
        }}
      >
        <ul
          className={`${slideStyle} bg-gray-800 list-none overflow-y-auto flex flex-col items-center  p-6 space-y-4`}
        >
          {comments.length > 0 ? (
            <>
              {comments.map((comment) => (
                <DreamOrComment source={comment} key={comment._id} />
              ))}
            </>
          ) : (
            <p className="text-center font-bold text-white text-2xl ">
              {" "}
              No comments yet you have!{" "}
            </p>
          )}
        </ul>
      </div>
    </>
  );
};
export default memo(DreamAndCommentPages);
