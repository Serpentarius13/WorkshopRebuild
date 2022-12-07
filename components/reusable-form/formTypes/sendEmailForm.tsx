import ReusableForm from "../form.component";

import { QueryNames } from "../../../types/enum";

import { FC } from "react";

const SendEmailForm: FC<any> = ({
  additionalVariables = [],
  name,
  closeForm = () => null,
}) => {
  return (
    <ReusableForm
      blueprint={emailBlueprint}
      type={true}
      name={name}
      additionalVariables={additionalVariables}
      closeForm={closeForm}
    />
  );
};
export default SendEmailForm;

const emailBlueprint = [
  {
    name: "name",
    label: "Your name",
    settings: { required: "Please fill this field" },
  },
  {
    name: "email",
    label: "Your email",
    settings: {
      required: "Please fill this field",
      type: "email",
    },
  },
  {
    name: "message",
    label: "Your message",
    settings: {
      required: "Please fill this field",
      minLength: 40,
      type: "textarea",
    },
  },
];
