"use client";

import HomeHeader from "../components/homePage/homeHeader";
import HomePageFunctionals from "../components/homePage/homePageFunctionals";

import HomeTestimonialsBlock from "../components/homePage/homeTestimonialsBlock";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { GiMoebiusStar } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="container mx-auto p-8 flex flex-col items-center justify-center space-y-8">
        {" "}
        <p className="italic text-center lg:w-[60%]  mx-auto  rounded-xl bg-gray-800 text-2xl text-white  p-4  ">
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
          <span className="no-underline arr"> &darr; </span>{" "}
        </h3>
        <HomeTestimonialsBlock />
        <p className="italic text-center md:w-[60%]  mx-auto  rounded-xl bg-gray-800 text-2xl text-white  p-4  ">
          You too can be a part of this evergrowing community of wonder and
          research. <br /> Dive deep into the meaning of human soul with <br />
          <span className="text-orange-500  font-medium text-3xl underline">
            us.{" "}
          </span>{" "}
          <br />
        </p>
        <HomePageFunctionals />
      </div>{" "}
    </>
  );
}
