"use client";

import { useSnapshot } from "valtio";
import { store } from "../store/store";
import ReusableForm from "./reusable-form/form.component";
import FormPopOver from "./reusable-form/formPopOver";
import SendEmailForm from "./reusable-form/formTypes/sendEmailForm";

export enum QueryNames {
  NEW_DREAM = "newDream",
  SIGN_UP = "signUp",
  SIGN_IN = "signIn",
  EMAIL_TO_USER = "sendEmail",
  EMAIL_TO_ME = "sendEmailMe",
  ADD_COMMENT_TO_DREAM = 'addCommentToDream'
}

export enum ModalTypes {
  CREATE_DREAM = "CREATE_DREAM",
  LOGIN = "LOGIN",
  SIGNUP = "SIGN_UP",
  SEND_EMAIL_TO_USER = "SEND_EMAIL_TO_USER",
  SEND_EMAIL_TO_ME = "SEND_EMAIL_TO_AUTHOR",
}

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

const userLoginBlueprint = [
  {
    name: "name",
    label: "Your username",
    settings: { required: "Please fill this field" },
  },
  {
    name: "password",
    label: "Your password",
    settings: {
      required: "Please fill this field",
    },
  },
];

export const userSignUpBlueprint = [
  {
    name: "name",
    label: "Your username",
    settings: { required: "Please fill this field" },
  },
  {
    name: "password",
    label: "Your password",
    settings: {
      required: "Please fill this field",
    },
  },
  {
    name: "email",
    label: "Your email",
    settings: {
      type: "email",
      required: "Please fill this field",
    },
  },
];

export const dreamBlueprint = [
  {
    name: "name",
    label: "Your name",
    settings: {
      required: false,
      maxLength: 40,
    },
  },
  {
    name: "time",
    label: "Time when dream occured",
    settings: {
      required: false,
      type: "time",
    },
  },
  {
    name: "email",
    label: "Your email",

    settings: {
      required: false,
      type: "email",
      maxLength: 40,
    },
  },
  {
    name: "dreamName",
    label: "Name of your dream",
    settings: {
      required: "Please fill out this field",
      maxLength: 40,
    },
  },
  {
    name: "description",
    label: "Describe your dream",
    settings: {
      required: "Please fill out this field",
      minLength: 40,
      type: "textarea",
    },
  },
];
