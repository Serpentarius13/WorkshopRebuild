"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import DreamShowcase from "./dreams/dreamShowcaseItem";

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
      <div className="w-screen h-48 bg-slate-400 relative">
        <div className="w-[30rem] h-[100%] flex items-center justify-start bg-red-800 mx-auto relative ">
          <div
            className="w-[300%] h-[95%] bg-blue-800 absolute flex items-center justify-between transition-all"
            style={{
              transform: `translateX(${-slide * 30 + 30}rem)`,
            }}
          >
            <div className="h-[100%] w-[30rem] bg-blue-400"> </div>
            <div className="h-[100%] w-[30rem] bg-yellow-400"> </div>
            <div className="h-[100%] w-[30rem] bg-green-400"> </div>
          </div>
        </div>

        <button
          onClick={goRight}
          className="absolute p-4 bg-white text-purple-800 z-10"
        >
          {" "}
          Go right{" "}
        </button>
        <button
          onClick={goLeft}
          className="absolute p-4 top-12 bg-white text-purple-800 z-10"
        >
          {" "}
          Go Left{" "}
        </button>
      </div>
    </>
  );
};
export default Sliderish;
