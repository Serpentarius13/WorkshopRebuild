"use client";

import { useEffect, useRef, useState, memo } from "react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { calcDate } from "../../utils/date";
import Greetings from "./greetings";
import ControlPanel from "./controlPanel";
import MainSlide from "./mainSlide";
import DreamOrComment from "./profileDream";
import DreamAndCommentPages from "./DreamAndCommentPages";
import Buttons from "./personalLayoutButtons";

export const slideStyle =
  "w-[80%] md:w-[50%]  mx-auto mt-2 md:mt-8 rounded-lg min-h-[85%]";

const PersonalLayout = ({
  dreams,
  comments,
  user,
  refetch,
  rating
}) => {
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
          rating={rating}
        />

        <DreamAndCommentPages
          refetch={refetch}
          dreams={dreams}
          comments={comments}
        />
      </div>
    </div>
  );
};
export default memo(PersonalLayout);



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
