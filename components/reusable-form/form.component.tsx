import { FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { endpoint } from "../../apollo-client";
import FormInput from "./input.component";

import axios from "axios";
import UniversalButton, { ButtonTypes } from "../uniButton.component";
("use client");

import { createQuery } from "../../queries/createDreamMutation";
import { store } from "../../store/store";

import { useSnapshot } from "valtio";
import StatusPopOver, { StatusTypes } from "../statusPopOver";
import { useRouter } from "next/navigation";
import { RedirectFunction } from "../../utils/redirect";

import { QueryNames } from "./../modalOver";

interface BlueprintData {
  name: string;
  label: string;
  settings: any;
}

export interface ReusableFormProps {
  blueprint: BlueprintData[];
  name: QueryNames;
  type: boolean;
  fields?: string[];
  additionalVariables?: any;
  closeForm?: () => void;
}

const ReusableForm: FC<ReusableFormProps> = ({
  blueprint,
  name,
  type,
  fields = [],
  additionalVariables = {},
  closeForm = () => null,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm();

  const queryCreator = createQuery(fields, name, type);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const ref = useRef<any>(null);

  const { closeModal } = store;

  const router = useRouter();

  const { toggleCircle } = useSnapshot(store);
  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !event.key &&
      event.target.nodeName !== "BUTTON"
    ) {
      toggleCircle();
    }
    if (event.key === "Escape") toggleCircle();
  };

  useEffect(() => {
    const checkingFor = ["click", "keydown"];

    checkingFor.forEach((el) =>
      document.addEventListener(el, handleClickOutside, true)
    );
    return () => {
      checkingFor.forEach((el) =>
        document.removeEventListener(el, handleClickOutside, true)
      );
    };
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTimeout(clearErrors, 2000);
    }
  }, [errors, clearErrors]);

  const sendData = async (formData) => {
    try {
      setLoading(true);
      additionalVariables.forEach((el, ix) => {
        const key = Object.keys(el)[0];
        formData[key] = additionalVariables[ix][key];
      });
      const query = queryCreator(formData);

      console.log(query, "QUERY");

      const { data } = await axios.post(endpoint, query).then((data) => data);
      console.log(data);
      const returnings = data.data[name];
      setLoading(false);
      setSuccess(true);
      await RedirectFunction(name, returnings).then((path) => {
        console.log(data);
        console.log(path);
        setTimeout(() => {
          closeModal();
          reset();
          router.push(path);
        }, 1000);
      });
    } catch (err) {
      reset();
      setLoading(false);
      setError(true);
      console.log(err);

      setTimeout(() => {
        setError(false);
        closeModal();
        closeForm();

        router.refresh();
      }, 1000);
    }
  };

  if (loading) return <StatusPopOver type={StatusTypes.STATUS_LOADING} />;
  if (error) return <StatusPopOver type={StatusTypes.STATUS_ERROR} />;
  if (success) return <StatusPopOver type={StatusTypes.STATUS_SUCCESS} />;

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(sendData)}
      className="form relative bg-blue-200 flex flex-col p-4  items-center justify-center  space-y-4  rounded-xl"
    >
      {" "}
      {blueprint.map((field) => (
        <FormInput
          key={field.name}
          name={field.name}
          label={field.label}
          registerFunction={register}
          settings={field.settings}
          control={control}
          clearErrors={clearErrors}
        />
      ))}
      <UniversalButton
        type="submit"
        buttonType={ButtonTypes.FORM_BUTTON}
        text="Send"
      />
      <UniversalButton
        type="button"
        buttonType={ButtonTypes.MODAL_BUTTON}
        onClick={() => {
          closeForm();
          toggleCircle();
        }}
        text="&#10005;"
      />
    </form>
  );
};
export default ReusableForm;
