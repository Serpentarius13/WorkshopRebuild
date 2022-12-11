"use client";

import HomeHeader from "../components/homePage/homeHeader";
import HomePageFunctionals from "../components/homePage/homePageFunctionals";

import HomeTestimonialsBlock from "../components/homePage/homeTestimonialsBlock";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { GiMoebiusStar } from "react-icons/gi";

import { motion, useAnimationControls } from "framer-motion";

export default function Home() {
  const ref = useRef<any>(null);

  const daytimeRef = useRef<any>(null);

  const animation = useAnimationControls();

  const sunAnimation = useAnimationControls();

  const [isNightTime, setNightTime] = useState(false);

  useEffect(() => {
    sunAnimation.start({
      left: "50%",
      translateX: "50%",
      transition: {
        duration: 3,
      },
    });
    setTimeout(() => {
      animation.start({
        opacity: 0,
        transition: {
          duration: 2,
        },
      });
    }, 2500);
  }, []);

  return (
    <>
      <HomeHeader />
      <div className="container mx-auto p-8 flex flex-col items-center justify-center space-y-8">
        {" "}
        <p className="italic text-center md:w-[60%]  mx-auto  rounded-xl bg-gray-800 text-2xl text-white  p-4  ">
          {" "}
          Since ancient times people believed that dreams have some extra sense
          to them. Wise philosophers and artisans of the past admitted that
          dreams brought them revelations and knowledge. From 20th century it is
          thought that dreams is something beyond normal waking life - a world
          of ghosts that affects our personality and motivations. There is
          plenty of evidence that dreams are not just mere illusions -{" "}
          <span className="text-orange-500 font-bold text-3xl">
            {" "}
            they have sense.{" "}
          </span>
        </p>{" "}
        <h3 className="text-6xl text-center tracking-tight  text-white flex  ">
          {" "}
          <span className="underline "> look for yourself </span>{" "}
          <span ref={ref} className="no-underline arr">
            {" "}
            &darr;{" "}
          </span>{" "}
        </h3>
        <HomeTestimonialsBlock />
        <p className="italic text-center w-[60%] mx-auto pt-8">
          You too can be a part of this evergrowing community of wonder and
          research. <br /> Dive deep into the meaning of human soul with <br />
          <span className="text-purple-800  font-medium text-6xl underline">
            us.{" "}
          </span>{" "}
          <br />
        </p>
        <HomePageFunctionals />
      </div>{" "}
      <motion.div animate={animation} ref={daytimeRef} className="daytime">
        <div className="w-screen h-screen relative bg-purple-300">
          {" "}
          <div className="sun "> </div>{" "}
          <motion.div
            animate={sunAnimation}
            className="absolute left-[200%] top-1/3 -translate-y-1/2  h-32 w-32 bg-purple-800 rounded-full "
          ></motion.div>
        </div>
      </motion.div>
      <div className="stars">
        {Array.from(Array(40)).map((el, ix) => {
          const speed = Math.max(3, Math.random() * 15);
          return (
            <GiMoebiusStar
              className="span-star w-10 h-10"
              style={{
                animationDuration: `${speed}s`,
              }}
              key={ix}
            />
          );
        })}
      </div>
    </>
  );
}
