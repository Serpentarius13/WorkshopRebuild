"use client";

import { useEffect, useRef, useState } from "react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const PersonalLayout = () => {
  const ref = useRef<any>(null);

  const [offset, setOffset] = useState(0);

  return (
    <div ref={ref} className="w-screen fixed">
      <Buttons offset={offset} setOffset={setOffset} />
      <div
        className="w-[300%] h-screen flex  "
        style={{ transform: `translateX(-${offset}%)`, transition: "1s all" }}
      >
        <div className="w-screen h-screen bg-red-900 flex items-center justify-center "></div>
        <div className="w-screen h-screen bg-blue-900"> </div>
        <div className="w-screen h-screen bg-yellow-300"> </div>
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
    <div className="absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 w-screen md:p-4 p-1 flex items-center justify-between z-[400]">
      {" "}
      <button
        onClick={prevPage}
        className="px-6 py-3 bg-white text-black z-[50] rounded-full border-purple-800 border-4 "
      >
        {" "}
        <BiLeftArrow />
      </button>
      <button
        onClick={nextPage}
        className="px-6 py-3 bg-white text-black z-[50] rounded-full border-purple-800 border-4"
      >
        {" "}
        <BiRightArrow />
      </button>{" "}
    </div>
  );
};

const comments = [
  {
    commentTime: new Date(),
    commentText:
      "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
    commentAuthor: "213123123123123",
    rating: 123,
  },
  {
    commentTime: new Date(),
    commentText:
      "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
    commentAuthor: "213123123123123",
    rating: 123,
  },
  {
    commentTime: new Date(),
    commentText:
      "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
    commentAuthor: "213123123123123",
    rating: 123,
  },
  {
    commentTime: new Date(),
    commentText:
      "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
    commentAuthor: "213123123123123",
    rating: 123,
  },
  {
    commentTime: new Date(),
    commentText:
      "0LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ",
    commentAuthor: "213123123123123",
    rating: 123,
  },
];

const dreams = [
  {
    name: "Bob",
    email: "213123",
    _id: "63916eaec776b3d1a871f167",
    dreamName: "123213213",
    description:
      "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
    rating: 123,
  },
  {
    name: "Bob",
    email: "213123",
    _id: "63916eaec776b3d1a871f167",
    dreamName: "123213213",
    description:
      "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
    rating: 123,
  },
  {
    name: "Bob",
    email: "213123",
    _id: "63916eaec776b3d1a871f167",
    dreamName: "123213213",
    description:
      "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
    rating: 123,
  },
  {
    name: "Bob",
    email: "213123",
    _id: "63916eaec776b3d1a871f167",
    dreamName: "123213213",
    description:
      "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
    rating: 123,
  },
  {
    name: "Bob",
    email: "213123",
    _id: "63916eaec776b3d1a871f167",
    dreamName: "123213213",
    description:
      "12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex12321312312312x21ex",
    rating: 123,
  },
];
