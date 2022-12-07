"use client";

import DreamFullReadPage from "../../components/dreams/dreamPage";
import DreamShowcase from "../../components/dreams/dreamShowcaseItem";

const fakeDream = {
  name: "Bobink",
  time: "12:38",
  email: "fynan@mail.ru",
  dreamName: "Lorem ipsum?",
  description:
    "Lorem ipsum dolor sit, amet con122222222222222222222222222222222222222222223s21212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121213ectetur12321321321321312312313123213123123123123213 adipisicing elit. Maiores, aliquam laudantium quod numquam repellat optio, porro accusamus sequi quisquam, quam cum ullam vel necessitatibus. Animi aliquam fugit id nulla iste.",
  comments: [
    {
      commentAuthor: "bobkin",
      message:
        "Loremius LoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremiusLoremius",
      commentTime: "213",
      comments: [
        {
          commentAuthor: "Bobkin",
          message: "213123123123",
          commentTime: new Date().toDateString(),
          comments: [
            {
              commentAuthor: "Bobkin",
              message: "213123123123",
              commentTime: new Date().toDateString(),
            },
          ],
        },
      ],
    },
  ],
  id: "638fee6110a309000f146c5c",
};

const Form = () => {
  return <DreamFullReadPage refetch={() => null} dream={fakeDream} />;
};
export default Form;
