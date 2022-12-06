"use client";

import CreateDreamForm from "../reusable-form/formTypes/createDreamForm";
import Sliderish from "./slider";
import ReusableForm from "../reusable-form/form.component";
import { userSignUpBlueprint } from "../modalOver";
import { QueryNames } from "../modalOver";

import { useRef, useEffect } from "react";
import HomeBlurAppear from "./homeBlurAppearElement";
import HomeUserSignUp from "./homeUserSignUp";

const HomePageFunctionals = () => {
  return (
    <>
      <HomeBlurAppear>
        <div className="w-[100%] min-h-[16rem]  flex space-y-4 flex-col md:space-x-36 md:flex-row md:space-y-0  items-center justify-center functional-block">
          <p className="w-[100%] md:w-[50%] py-4 h-[100%] flex items-center justify-center text-3xl font-bold break-keep text-purple-600 text-center">
            {" "}
            Read, rate and comment dreams of other users
          </p>{" "}
          <div className="w-[100%] h-[20rem] flex items-center justify-center">
            <Sliderish />
          </div>
        </div>
      </HomeBlurAppear>
      <HomeBlurAppear>
        <div className="w-[100%] min-h-[16rem] flex flex-col-reverse md:space-x-36 md:flex-row md:space-y-0  items-center justify-center bg-red pt-10 functional-block">
          <div className="w-[100%] md:w-[50%] min-h-[24rem] relative flex items-center justify-center">
            <CreateDreamForm />
          </div>
          <p className="w-[100%] md:w-[50%] py-4 h-[100%] flex-col items-center justify-center text-3xl font-bold break-keep text-purple-600 text-center pb-10 md:pb-0">
            {" "}
            Write your own dreams and share them with other people. You can
            connect with each other via sending emails - but everything remains
            private
            <br />{" "}
            <span className="italic text-black text-sm  ">
              {" "}
              (it is your choice to fill non-violet fields tho){" "}
            </span>
          </p>
        </div>
      </HomeBlurAppear>

      <HomeUserSignUp />
    </>
  );
};
export default HomePageFunctionals;
