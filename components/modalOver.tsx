import { useSnapshot } from "valtio";
import { ModalTypes, store } from "../store/store";
import ReusableForm from "./reusable-form/form.component";
import FormPopOver from "./reusable-form/formPopOver";

import { blueprint } from "../pages/form";

const ModalOver = () => {
  const { modalOpenState } = useSnapshot(store);
  return (
    <>
      {modalOpenState === ModalTypes.CREATE_DREAM && (
        <FormPopOver>
          {" "}
          <ReusableForm blueprint={blueprint} type={true} name="newDream" />
        </FormPopOver>
      )}

      {modalOpenState === ModalTypes.LOGIN && <div>123123 </div>}
    </>
  );
};
export default ModalOver;
