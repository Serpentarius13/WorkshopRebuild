"use client";

import Image from "next/image";
import Link from "next/link";
import OtherUserDreamOrComment from "./otherUserDreamOrComment";

import { useEffect, useRef, FC } from "react";
import counterFunction from "../../utils/counter";

interface IOtherUserPage {
  dreams: any[];
  comments: any[];
  rating: number;
  avatar: string;
  name: string;
}

const OtherUserPage: FC<IOtherUserPage> = ({
  dreams,
  comments,
  rating,
  avatar,
  name,
}) => {
  const ref = useRef<any>(null);
  useEffect(() => {
     counterFunction(ref, rating);
  }, []);
  const isDreams = dreams.length > 0;
  const isComments = comments.length > 0;
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[65%] h-[75%] bg-gray-800 p-8  ">
        <div className="flex items-center space-x-4 pb-8">
          <Image
            src={avatar}
            alt="Profile picture"
            width={96}
            height={96}
            className="rounded-full"
          />{" "}
          <span className="italic text-orange-500 text-3xl"> {name} </span>
          <div className="flex-1 text-end text-white text-3xl pr-4">
            {" "}
            Rating: <span ref={ref}> </span>{" "}
          </div>
        </div>
        <div className="flex items-center justify-around w-[100%] h-12 text-2xl text-white">
          {isDreams ? (
            <h2> User dreams </h2>
          ) : (
            <h2> User hasnt got any dreams </h2>
          )}
          {isComments ? (
            <h2> User comments </h2>
          ) : (
            <h2> User hasnt got any comments </h2>
          )}
        </div>
        <div className="w-[100%] h-[65%] p-4 flex space-x-2 justify-center items-center">
          (
          <div className="border-r-2 w-[50%] border-orange-500 h-[100%] ">
            <ul className=" p-2 list-none text-2xl text-white flex flex-col justify-start  space-y-2 overflow-auto ">
              {dreams.map((dream) => (
                <OtherUserDreamOrComment key={dream._id} source={dream} />
              ))}
            </ul>
          </div>
          )
          <ul className="w-[50%] h-[100%] p-2 list-none text-2xl text-white justify-start flex flex-col space-y-2 overflow-auto ">
            {comments.map((comment) => (
              <OtherUserDreamOrComment key={comment._id} source={comment} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default OtherUserPage;
