"use client";

import CreateDreamForm from "../reusable-form/formTypes/createDreamForm";
import Sliderish from "./slider";
import ReusableForm from "../reusable-form/form.component";
import { userSignUpBlueprint } from "../modalOver";
import { ModalTypes, QueryNames } from "../../types/enum";

import { useRef, useEffect } from "react";

import HomeUserSignUp from "./homeUserSignUp";
import UniversalButton from "../uniButton.component";

import { ButtonTypes } from "../../types/enum";
import { useSnapshot } from "valtio";
import { store } from "../../store/store";

const HomePageFunctionals = () => {
  const { openModal } = useSnapshot(store);
  return (
    <>
      <div className="w-[100%] min-h-[16rem] bg-gray-800 rounded-xl p-4  flex space-y-4 flex-col md:space-x-36 md:flex-row md:space-y-0  items-center justify-center functional-block">
        <p className="w-[100%] md:w-[50%] py-4 h-[100%] flex items-center justify-center text-3xl font-bold break-keep text-orange-500 text-center">
          {" "}
          Read, rate and comment dreams of other users
        </p>{" "}
        <div className="w-[100%] h-[20rem] flex items-center justify-center">
          <Sliderish />
        </div>
      </div>

      <div className="w-[100%] min-h-[16rem] pt-12 flex flex-col-reverse md:space-x-36 md:flex-row md:space-y-0 bg-gray-800 rounded-xl  items-center justify-center bg-red p-12 functional-block">
        <div className="w-[100%] md:w-[50%] min-h-[14rem] relative flex items-center justify-center">
          <UniversalButton
            buttonType={ButtonTypes.CTA_DREAM_BUTTON}
            text="Start now!"
            onClick={() => openModal(ModalTypes.CREATE_DREAM)}
          />
        </div>
        <p className="w-[100%] md:w-[50%] py-4 h-[100%] flex-col items-center justify-center text-3xl font-bold break-keep text-orange-500 text-center pb-10 md:pb-0">
          {" "}
          Write your own dreams and share them with other people. You can
          connect with each other via sending emails - but everything remains
          private
          <br />{" "}
          <span className="italic text-white text-sm  ">
            {" "}
            (it is your choice to fill non-violet fields tho){" "}
          </span>
        </p>
      </div>

      <HomeUserSignUp />
    </>
  );
};
export default HomePageFunctionals;
