"use client";

import ReusableForm from "../reusable-form/form.component";
import { ButtonTypes, ModalTypes, QueryNames } from "../../types/enum";
import { userSignUpBlueprint } from "../../utils/blueprints";

import { useSnapshot } from "valtio";
import { store, userStore } from "../../store/store";

import { useEffect, useState } from "react";
import UniversalButton from "../uniButton.component";

const HomeUserSignUp = () => {
  const [curUser, setCurUser] = useState(null);

  const { currentUser } = useSnapshot(userStore);

  const { openModal } = useSnapshot(store);

  useEffect(() => {
    setCurUser(currentUser?._id);
  }, [currentUser]);
  return (
    <>
      <div className="w-[100%] min-h-[18rem] p-12 flex flex-col bg-gray-800 rounded-xl md:flex-row md:space-y-0 relative  items-center justify-around bg-red  functional-block">
        <p className="w-[100%] md:w-[50%] py-4 h-[100%] flex-col items-center justify-center text-3xl font-bold break-keep text-orange-500 text-center pb-10   md:pb-0">
          {" "}
          Create your personal account where you can keep track of your dreams.
          <br />
          <span className="italic text-white text-sm  ">
            {" "}
            If you are logged in, your dreams are automatically signed by you
            and you can turn their visibility off to keep using our website as
            your journal.{" "}
          </span>
        </p>
        <UniversalButton
          buttonType={ButtonTypes.CTA_USER_BUTTON}
          text="Join now!"
          onClick={() => openModal(ModalTypes.CREATE_DREAM)}
        />
        {curUser ? (
          <div className="absolute top-1/2 z-[1] appear -translate-y-1/2 w-[105%] rounded-3xl h-[105%] bg-purple-300 bg-opacity-40 flex items-center justify-center overflow-hidden ">
            <div className="w-[140rem] h-20 bg-purple-800 rotate-45 left-3/6  top-1/2 absolute   flex items-center justify-center ">
              <p className="text-3xl text-white font-bold md:-translate-x-10 ">
                You already have an account
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default HomeUserSignUp;
