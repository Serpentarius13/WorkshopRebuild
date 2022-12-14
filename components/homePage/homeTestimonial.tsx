"use client";

import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import HomeBlurAppear from "./homeBlurAppearElement";

interface HomeTestimonial {
  text: string;
  author: string;
  reversed?: boolean;
  imageSource: string;
}

const HomeTestimonial: FC<HomeTestimonial> = ({
  text,
  author,
  reversed = false,
  imageSource,
}) => {
  const ref = useRef<any>(null);

  return (
    <HomeBlurAppear>
      <div
        ref={ref}
        className={` max-w-[70rem]  flex bg-gray-900  md:px-8 md:py-2 px-4 py-1 rounded-xl  ${
          reversed ? "flex-row-reverse" : ""
        }`}
      >
        <div className="w-[80px] flex items-center justify-center  ">
          <Image
            src={imageSource}
            width={64}
            height={64}
            alt={imageSource.split(".")[0].replace("/", "")}
            className=" w-24 h-18 overflow-hidden  rounded-full flex items-center justify-center border-orange-500 border-4  "
          />{" "}
        </div>

        <div className="flex-1  p-6 my-auto space-y-2 text-white text-2xl z-[500]">
          <p className="italic">
            {text}

            <br />
          </p>
          <p
            className={`${
              reversed ? "text-start" : "text-end"
            } text-1xl font-medium text-orange-500 `}
          >
            - {author}.
          </p>
        </div>
      </div>
    </HomeBlurAppear>
  );
};
export default HomeTestimonial;
