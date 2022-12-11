"use client";

import { useEffect, useRef, useState } from "react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { calcDate } from "../../utils/date";
import Greetings from "./greetings";
import ControlPanel from "./controlPanel";
import MainSlide from "./mainSlide";
import DreamOrComment from "./profileDream";
import DreamAndCommentPages from "./DreamAndCommentPages";

export const slideStyle =
  "w-[80%] md:w-[50%]  mx-auto mt-2 md:mt-8 rounded-lg min-h-[85%]";

const PersonalLayout = ({ dreams, comments, user, refetch }) => {
  const ref = useRef<any>(null);
  const chart = useRef<any>();

  const [offset, setOffset] = useState(0);


  return (
    <div ref={ref} className="w-screen fixed">
      <Buttons offset={offset} setOffset={setOffset} />
      <div
        className="w-[300%] h-screen flex  "
        style={{ transform: `translateX(-${offset}%)`, transition: "1s all" }}
      >
        <MainSlide
          data={{ comments, dreams }}
          user={user}
          setOffset={setOffset}
          refetch={refetch}
        />

        <DreamAndCommentPages dreams={dreams} comments={comments} />
      </div>
    </div>
  );
};
export default PersonalLayout;

const Buttons = ({ offset, setOffset }) => {
  const onePage = 33.333;
  const twoPage = 66.666;
  const prevPage = () => {
    const prevOffset = offset - onePage;
    if (prevOffset < 0) setOffset(twoPage);
    else setOffset(prevOffset);
  };

  const nextPage = () => {
    const nextOffset = offset + onePage;
    if (nextOffset > twoPage) setOffset(0);
    else setOffset(nextOffset);
  };
  return (
    <>
      {" "}
      <button
        onClick={prevPage}
        className="px-6 py-3 bg-white text-black  rounded-full border-orange-500 border-4 absolute top-1/2 -translate-y-3/4   left-4 z-[400]"
      >
        {" "}
        <BiLeftArrow />
      </button>
      <button
        onClick={nextPage}
        className="px-6 py-3 bg-white text-black  rounded-full border-orange-500 border-4 absolute top-1/2 -translate-y-3/4   right-4 z-[400]"
      >
        {" "}
        <BiRightArrow />
      </button>{" "}
    </>
  );
};

// const user = {
//   _id: "123123213",
//   createdAt: 1670560657915,
//   name: "Bobkin",
// };

// const comments = [
//   {
//     commentTime: new Date(),
//     commentText:
//       "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
//     commentAuthor: "213123123123123",
//     rating: 123,
//   },
//   {
//     commentTime: new Date(),
//     commentText:
//       "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
//     commentAuthor: "213123123123123",
//     rating: 123,
//   },
//   {
//     commentTime: new Date(),
//     commentText:
//       "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
//     commentAuthor: "213123123123123",
//     rating: 123,
//   },
//   {
//     commentTime: new Date(),
//     commentText:
//       "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
//     commentAuthor: "213123123123123",
//     rating: 123,
//   },
//   {
//     commentTime: new Date(),
//     commentText:
//       "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
//     commentAuthor: "213123123123123",
//     rating: 123,
//   },
// ];

// const dreams = [
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
//   {
//     name: "Bob",
//     email: "213123",
//     _id: "63916eaec776b3d1a871f167",
//     dreamName: "123213213",
//     description:
//       "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
//     rating: 123,
//   },
// ];
