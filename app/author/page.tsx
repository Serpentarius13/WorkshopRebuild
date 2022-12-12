"use client";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiMongodb,
  SiExpress,
  SiGit,
  SiNpm,
  SiVisualstudiocode,
  SiSass,
  SiNodedotjs,
  SiLess,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";

const AuthorPage = () => {
  const size = 48;
  return (
    <div className="w-screen flex items-center justify-center absolute">
      <div className="w-[90%] md:w-[50%]  p-4 flex flex-col items-center space-y-1 pt-8 ">
        <h1 className="text-3xl text-black text-center">
          {" "}
          Hello, Im <b> Andrei</b>, a front-end developer{" "}
        </h1>
        <p className="text-center text-2xl pt-4">
          {" "}
          Im 20 years old and been teaching myself software development for 3
          months now.{" "}
        </p>
        <p className="text-center text-2xl pt-4">
          {" "}
          While still not having enough experience, this website is built
          completely by me
        </p>

        <h2 className="text-bold text-2xl pt-4"> My stack: </h2>

        <div className="flex flex-col space-y-8 items-center justify-between w-[100%] p-4 ">
          <div className="flex space-x-4 items-center justify-center  w-[85%]">
            <p className="text-bold text-2xl w-[30%] text-end"> Frontend: </p>
            <div className="grid grid-flow-row gap-2 items-center justify-center space-x-2 flex-1">
              {" "}
              <SiHtml5 size={size} /> <SiCss3 size={size} />{" "}
              <SiTailwindcss size={size} /> <SiSass size={size} />{" "}
              <SiLess size={size} /> <SiJavascript size={size} />{" "}
              <SiTypescript size={size} /> <SiReact size={size} />{" "}
              <TbBrandNextjs className="col-span-4 w-[100%]" size={size} />
            </div>
          </div>
          <div className="flex space-x-4 items-center  w-[85%]">
            <p className="text-bold text-2xl  w-[30%] text-end"> Backend: </p>
            <div className="flex items-center justify-center space-x-2 flex-1">
              {" "}
              <SiNodedotjs size={size} /> <SiExpress size={size} />{" "}
              <SiMongodb size={size} /> <SiGraphql size={size} />
            </div>
          </div>

          <div className="flex space-x-4 items-center   w-[85%]">
            <p className="text-bold text-2xl  w-[30%] text-end"> Utilities: </p>
            <div className="flex items-center justify-center space-x-2 flex-1">
              <SiGit size={size} /> <SiNpm size={size} />{" "}
              <SiVisualstudiocode size={size} />{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 pt-4 ">
          {" "}
          <a
            className="px-4 py-2 bg-gray-800 text-white text-2xl rounded-xl hover:bg-gray-900 active:bg-black"
            href="mailto:serpentarium13@mail.ru?Subject=Hello%20User"
          >
            {" "}
            Contact me{" "}
          </a>{" "}
          <a
            className="px-4 py-2 bg-purple-700  text-white text-2xl rounded-xl hover:bg-purple-800 active:bg-purple-900"
            href="https://github.com/Serpentarius13/WorkshopRebuild"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            See my code
          </a>{" "}
        </div>
        <p className="text-2xl font-bold p-4"> Hope you have a great day! </p>
      </div>
    </div>
  );
};

export default AuthorPage;
