import Image from "next/image";
import { cache, FC, useState } from "react";
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
      fetchPolicy: "no-cache",
    });

    const { sentence } = data;

    setText(sentence);
  };

  const translateProphecy = async () => {
    if(!text) return;
    const translatedSentence = await translate(text, { from: "la" });

    setTranslated(translatedSentence);
    setText(null);
  };

  return (
    <div className="flex-1 ml-8 flex items-center justify-start md:space-x-4 space-x-1">
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
        <div className="w-[50%] prophecy  font-bold text-white  flex justify-start items-center">
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
