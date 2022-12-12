import Link from "next/link";

import { useEffect, useRef } from "react";
import counterFunction from "../../utils/counter";

const OtherUserDreamOrComment = ({ source }) => {
  const rating = source.rating
    ? source.rating
    : source.commentRating
    ? source.commentRating
    : 0;
  const link = `/dream/${
    source.dreamName ? source._id : source.commentParentDream
  }`;
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) counterFunction(ref, rating);
  }, []);
  return (
    <li className="w-[95%] border-b-white border-b-2 pb-2">
      <Link className="text-base w-[100%] h-[100%]" href={link}>
        <div>
          {" "}
          <div className="flex items-center">
            {" "}
            {source.dreamName ? (
              <span> Dreamname </span>
            ) : (
              <p className="h-4 overflow-hidden w-[90%]">
                {" "}
                {source.commentText}{" "}
              </p>
            )}
            <span
              ref={ref}
              className="px-2 py-1 ml-auto text-orange-500 font-bold bg-gray-900 rounded-full"
            >
              0{" "}
            </span>{" "}
          </div>{" "}
          {source.description && (
            <p className="h-4 overflow-hidden text-sm"> {source.description}</p>
          )}
        </div>
      </Link>{" "}
    </li>
  );
};
export default OtherUserDreamOrComment;
