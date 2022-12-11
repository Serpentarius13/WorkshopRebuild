import { slideStyle } from "./personalLayout";
import DreamOrComment from "./profileDream";

import { useRef, useCallback } from "react";

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
          className={`${slideStyle} bg-gray-800 list-none h-[100%] overflow-y-auto flex flex-col items-center  p-6 space-y-4 profile-section`}
        >
          {dreams.map((dream) => (
            <DreamOrComment source={dream} key={dream._id} />
          ))}{" "}
        </ul>
      </div>
      <div
        className="w-screen h-screen "
        style={{
          backgroundImage: "linear-gradient(to right, #5f3dc4, #91a7ff)",
        }}
      >
        <div className={`${slideStyle} bg-gray-800 p-4`}>
          <ul className="list-none h-[100%] overflow-y-auto flex flex-col items-center  p-2 space-y-4 profile-section ">
            {comments.map((comment) => (
              <DreamOrComment source={comment} key={comment._id} />
            ))}{" "}
          </ul>
        </div>
      </div>
    </>
  );
};
export default DreamAndCommentPages;
