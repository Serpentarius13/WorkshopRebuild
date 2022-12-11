"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import DreamShowcase from "../dreams/dreamShowcaseItem";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import SliderDreams from "./sliderDreams";

const Sliderish = () => {
  const [slide, setSlide] = useState(1);

  const goRight = () => {
    const nextSlide = slide + 1;
    if (nextSlide > 3) {
      setSlide(1);
      return;
    }
    setSlide(nextSlide);
    console.log(slide);
  };

  const goLeft = () => {
    const prevSlide = slide - 1;
    if (prevSlide < 1) {
      setSlide(3);
      return;
    }

    setSlide(prevSlide);
  };

  return (
    <>
      <div className=" w-[85%] h-[100%]  relative">
        <div className="w-[100%] h-[100%] flex items-center justify-start  mx-auto relative overflow-hidden">
          <div
            className="w-[300%] h-[95%]  absolute flex items-center justify-between transition-all"
            style={{
              transform: `translateX(${-slide * 33.333 + 33.333}%)`,
            }}
          >
            <SliderDreams />
          </div>
        </div>
        <BsFillArrowLeftCircleFill
          className="absolute top-1/2 -left-[10%] -translate-y-1/2 w-8 h-8 btn-control cursor-pointer hover:fill-orange-700 transition-all"
          onClick={() => goLeft()}
          color={"#f97316"}
        />{" "}
        <BsFillArrowRightCircleFill
          className="absolute top-1/2 -right-[10%]  -translate-y-1/2 w-8 h-8 btn-control cursor-pointer hover:fill-orange-700 transition-all"
          onClick={() => goRight()}
          color={"#f97316"}
        />{" "}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 space-x-2 transition-all">
          {Array.from(Array(3)).map((el, ix) => {
            const index = ix + 1;
            return (
              <button
                className={`w-4 h-4 rounded-full ${
                  index === slide ? "bg-orange-500" : "bg-orange-200"
                }`}
                key={ix}
                onClick={() => setSlide(index)}
              >
                {" "}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Sliderish;
