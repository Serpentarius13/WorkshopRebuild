import { FC } from "react";

import UniversalButton from "../uniButton.component";
import ReusableForm, { ReusableFormProps } from "./form.component";

const FormPopOver: FC<ReusableFormProps> = ({ blueprint, queryCreator }) => {
  return (
    <>
      <div className=" w-screen h-screen relative flex items-center justify-center bg-opacity-20 bg-purple-900">
        <ReusableForm blueprint={blueprint} queryCreator={queryCreator} />
      </div>
    </>
  );
};
export default FormPopOver;
