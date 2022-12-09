import { slideStyle } from "./personalLayout";
import DreamOrComment from "./profileDream";

import { useRef, useCallback } from "react";

const DreamAndCommentPages = ({ dreams, comments }) => {

  return (
    <>
      <div
        className="w-screen h-screen bg-blue-900"
      >
        <ul
         
          className={`${slideStyle} bg-purple-500 list-none h-[100%] overflow-y-auto flex flex-col items-center  p-6 space-y-4 profile-section`}
        >
          {dreams.map((dream) => (
            <DreamOrComment
         
              source={dream}
              key={dream._id}
            />
          ))}{" "}
        </ul>
      </div>
      <div
    
        className="w-screen h-screen bg-yellow-300"
      >
        <div  className={`${slideStyle} bg-blue-500`}>
          <ul className="list-none h-[100%] overflow-y-auto flex flex-col items-center  p-2 space-y-4 profile-section ">
            {comments.map((comment) => (
              <DreamOrComment
             
                source={comment}
                key={comment._id}
              />
            ))}{" "}
          </ul>
        </div>
      </div>
    </>
  );
};
export default DreamAndCommentPages;
