"use client";

import ReusableForm from "../reusable-form/form.component";
import { QueryNames } from "../modalOver";
import { userSignUpBlueprint } from "../modalOver";
import HomeBlurAppear from "./homeBlurAppearElement";
import { useSnapshot } from "valtio";
import { userStore } from "../../store/store";

import { useEffect, useState } from "react";

const HomeUserSignUp = () => {
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    const { currentUser } = userStore;
    setCurUser(currentUser);
  }, []);
  return (
    <HomeBlurAppear>
      <div className="w-[100%] min-h-[16rem] flex flex-col-reverse md:space-x-36 md:flex-row md:space-y-0  items-center justify-center bg-red pt-10 functional-block">
        <p className="w-[100%] md:w-[50%] py-4 h-[100%] flex-col items-center justify-center text-3xl font-bold break-keep text-purple-600 text-center pb-10 md:pb-0">
          {" "}
          Create your personal account where you can keep track of your dreams.
          <br />
          <span className="italic text-black text-sm  ">
            {" "}
            If you are logged in, your dreams are automatically signed by you
            and you can turn their visibility off to keep using our website as
            your journal.{" "}
          </span>
        </p>
        <ReusableForm
          blueprint={userSignUpBlueprint}
          type={true}
          name={QueryNames.SIGN_UP}
        />

        
      </div>
      {curUser ? (
          <div className="absolute top-0 w-[100%] h-[110%] left-0 bg-purple-300 bg-opacity-40 z-50 flex items-center justify-center overflow-hidden ">
            <div className="w-[60rem] h-20 bg-purple-800 rotate-45 left-3/5 top-1/2 absolute   flex items-center justify-center ">
              <p className="text-3xl text-white font-bold">
                You already have an account
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
    </HomeBlurAppear>
  );
};
export default HomeUserSignUp;
