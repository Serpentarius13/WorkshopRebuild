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
        className={` max-w-[70rem]  flex  ${
          reversed ? "flex-row-reverse" : ""
        }`}
      >
        <div className="w-[80px] flex items-center justify-center  ">
          <div className="w-24 h-18 overflow-hidden  rounded-full flex items-center justify-center ">
            <Image
              src={imageSource}
              width={96}
              height={96}
              alt={imageSource.split(".")[0].replace("/", "")}
              className=" min-w-[100%] min-h-[85%]"
            />{" "}
          </div>
        </div>
        <div className="flex-1  p-6 my-auto space-y-2">
          <p className="italic">
            {text}

            <br />
          </p>
          <p
            className={`${
              reversed ? "text-start" : "text-end"
            } text-1xl font-medium `}
          >
            - {author}.
          </p>
        </div>
      </div>
    </HomeBlurAppear>
  );
};
export default HomeTestimonial;
