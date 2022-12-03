import { FC, useEffect, useRef, useState } from "react";
import { store } from "../../store/store";

import { useSnapshot } from "valtio";

import UniversalButton, { ButtonTypes } from "../uniButton.component";
import ReusableForm, { ReusableFormProps } from "./form.component";

interface FormPopOver {
  children?: React.ReactNode;
}

const FormPopOver: FC<FormPopOver> = ({ children }) => {
  const { circleOpenState, toggleCircle } = useSnapshot(store);

  const ref = useRef<any>(null);

  const [state, setState] = useState({});

  return (
    <>
      <div
        ref={ref}
        className="popover w-screen h-screen fixed top-0 left-0  flex items-center justify-center bg-opacity-20 bg-purple-900"
      >
        <div className="relative min-w-[24rem] min-h-[40rem] flex justify-center items-center">
          {children}

         
        </div>

        {circleOpenState && <div className="circle" />}
        {circleOpenState && <div className="circleIn" />}
      </div>
    </>
  );
};
export default FormPopOver;
