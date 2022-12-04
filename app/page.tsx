import { operationName } from "@apollo/client";
import axios from "axios";
import * as build from "gql-query-builder";
import Image from "next/image";
import { endpoint } from "../apollo-client";
import BigDreamTemplate from "../components/dreamTemplates/bigDreamTemplate";
import HomeHeader from "../components/homePage/homeHeader";
import HomeTestimonial from "../components/homePage/homeTestimonial";
import HomeTestimonialsBlock from "../components/homePage/homeTestimonialsBlock";

export default async function Home() {
  return (
    <>
      <HomeHeader />
      <div className="container mx-auto p-8 flex flex-col items-center space-y-8">
        {" "}
        <p className="italic text-center w-[60%]  mx-auto   ">
          {" "}
          Since ancient times people believed that dreams have some extra sense
          to them. Wise philosophers and artisans of the past admitted that
          dreams brought them revelations and knowledge. From 20th century it
          is thought that dreams is something beyond normal waking life - a
          world of ghosts that affects our personality and motivations. There is
          plenty of evidence that dreams are not just mere illusions - they have
          sense.{" "}
        </p>{" "}
        <h3 className="text-6xl text-center tracking-tight underline">
          {" "}
          look for yourself{" "}
        </h3>
        <HomeTestimonialsBlock />
      </div>
    </>
  );
}
