import { useSnapshot } from "valtio";
import { ModalTypes, store } from "../store/store";
import ReusableForm from "./reusable-form/form.component";
import FormPopOver from "./reusable-form/formPopOver";

import { blueprint } from "../pages/form";

export enum QueryNames {
  NEW_DREAM = "newDream",
  SIGN_UP = "signUp",
  SIGN_IN = "signIn",
}

const ModalOver = () => {
  const { modalOpenState } = useSnapshot(store);
  return (
    <>
      {modalOpenState === ModalTypes.CREATE_DREAM && (
        <FormPopOver>
          {" "}
          <ReusableForm
            blueprint={blueprint}
            type={true}
            name={QueryNames.NEW_DREAM}
            additionalFields={["_id", "authorId"]}
          />
        </FormPopOver>
      )}

      {modalOpenState === ModalTypes.LOGIN && <div>123123 </div>}
    </>
  );
};
export default ModalOver;
