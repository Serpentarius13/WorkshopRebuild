"use client";

import { store } from "../../store/store";
import { ModalTypes, QueryNames } from "../modalOver";
import UniversalButton, { ButtonTypes } from "../uniButton.component";
import DreamPageInitials from "./dreamPageInitials";

import { useState, useEffect } from "react";
import SendEmailForm from "../reusable-form/formTypes/sendEmailForm";

const DreamFullReadPage = () => {
  const fakeDream = {
    name: "Bobink",
    time: "12:38",
    email: "bobki@mail.ru",
    dreamName: "Lorem ipsum?",
    description:
      "Lorem ipsum dolor sit, amet con122222222222222222222222222222222222222222223s21212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121213ectetur12321321321321312312313123213123123123123213 adipisicing elit. Maiores, aliquam laudantium quod numquam repellat optio, porro accusamus sequi quisquam, quam cum ullam vel necessitatibus. Animi aliquam fugit id nulla iste.",
  };

  const { dreamName, description, time, email, name } = fakeDream;

  const [formVis, setFormVis] = useState(false);
  return (
    <div className="container mx-auto py-12 px-4 relative ">
      <div className="flex justify-between items-center">
        {" "}
        <h1> {dreamName} </h1>{" "}
        <DreamPageInitials name={name} email={email} time={time} />
      </div>
      <p className="break-words w-[100%] md:w-[50%] mt-8"> {description} </p>{" "}
      <UniversalButton
        buttonType={ButtonTypes.LEAVE_COMMENT}
        text="Leave comment"
        onClick={() => setFormVis(!formVis)}
      />
      <div className="mt-8 z-10">
        {formVis && (
          <SendEmailForm
            name={QueryNames.EMAIL_TO_USER}
            additionalVariables={{ emailFrom: email }}
            closeForm={() => setFormVis(false)}
          />
        )}
      </div>
    </div>
  );
};
export default DreamFullReadPage;
