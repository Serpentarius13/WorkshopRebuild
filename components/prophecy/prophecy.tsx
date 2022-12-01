import Image from "next/image";
import { FC, useState } from "react";
import { client } from "../../apollo-client";

import { sentenceQuery } from "./../../queries/queries";

import translate from "translate";

const Prophecy: FC = () => {
  const [text, setText] = useState(null);

  const [translated, setTranslated] = useState(null);

  const getProphecy = async () => {
    setTranslated(null);
    const { data } = await client.query({
      query: sentenceQuery,
    });

    const { sentence } = data;

    setText(sentence);
  };

  const translateProphecy = async () => {
    const translatedSentence = await translate(text, { from: "la" });

    setTranslated(translatedSentence);
    setText(null);
  };

  return (
    <div className="flex-1 ml-8 p-6 flex items-center justify-start space-x-4">
      <div>
        {!text && (
          <Image
            src="/crystalBall.svg"
            alt="Crystall ball"
            width={36}
            height={36}
            onClick={getProphecy}
          />
        )}
      </div>
      {(text || translated) && (
        <div className="w-[50%] prophecy text-xs lg:text-3xl font-bold text-white  flex justify-start items-center">
          {" "}
          <p onClick={translateProphecy} className="underline cursor-pointer">
            {translated || text}
          </p>{" "}
        </div>
      )}
    </div>
  );
};
export default Prophecy;
