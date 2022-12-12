"use client";

import { useSnapshot } from "valtio";
import { store } from "../store/store";

import ReusableForm from "./reusable-form/form.component";
import FormPopOver from "./reusable-form/formPopOver";
import SendEmailForm from "./reusable-form/formTypes/sendEmailForm";

import { ModalTypes, QueryNames } from "../types/enum";

import {dreamBlueprint, emailBlueprint, userLoginBlueprint, userSignUpBlueprint} from './../utils/blueprints'

const ModalOver = () => {
  const { modalOpenState, additionalVariables } = useSnapshot(store);
  return (
    <>
      {modalOpenState === ModalTypes.CREATE_DREAM && (
        <FormPopOver>
          {" "}
          <ReusableForm
            blueprint={dreamBlueprint}
            type={true}
            name={QueryNames.NEW_DREAM}
            fields={[
              "_id",
              "authorId",
              "name",
              "description",
              "time",
              "dreamName",
              "email",
            ]}
          />
        </FormPopOver>
      )}

      {modalOpenState === ModalTypes.LOGIN && (
        <FormPopOver>
          <ReusableForm
            blueprint={userLoginBlueprint}
            type={true}
            name={QueryNames.SIGN_IN}
          />
        </FormPopOver>
      )}

      {modalOpenState === ModalTypes.SIGNUP && (
        <FormPopOver>
          <ReusableForm
            blueprint={userSignUpBlueprint}
            type={true}
            name={QueryNames.SIGN_UP}
          />
        </FormPopOver>
      )}

      {modalOpenState === ModalTypes.SEND_EMAIL_TO_USER && (
        <FormPopOver>
          {" "}
          <SendEmailForm
            additionalVariables={additionalVariables}
            name={QueryNames.EMAIL_TO_USER}
          />{" "}
        </FormPopOver>
      )}

      {modalOpenState === ModalTypes.SEND_EMAIL_TO_ME && (
        <FormPopOver>
          {" "}
          <SendEmailForm name={QueryNames.EMAIL_TO_ME} />{" "}
        </FormPopOver>
      )}
    </>
  );
};
export default ModalOver;


