import ReusableForm from "../form.component";

import { QueryNames } from "../../../types/enum";

import { FC } from "react";

import { emailBlueprint } from "../../../utils/blueprints";

interface ISendEmailForm {
  additionalVariables?: any;
  closeForm?: () => void;
  name: QueryNames;
  isModal?: boolean
}

const SendEmailForm: FC<ISendEmailForm> = ({
  additionalVariables = [],
  name,
  closeForm = () => null,
  isModal = true
}) => {
  return (
    <ReusableForm
      blueprint={emailBlueprint}
      type={true}
      name={name}
      additionalVariables={additionalVariables}
      closeForm={closeForm}
      isModal={isModal}
    />
  );
};
export default SendEmailForm;
