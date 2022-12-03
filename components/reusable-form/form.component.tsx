import { FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { endpoint } from "../../apollo-client";
import FormInput from "./input.component";

import axios from "axios";
import UniversalButton, { ButtonTypes } from "../uniButton.component";
import { createQuery } from "../../queries/createDreamMutation";
import { store, useZustandStore } from "../../store/store";

import { useSnapshot } from "valtio";
import StatusPopOver, { StatusTypes } from "../statusPopOver";
import Router from "next/router";
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
}

const ReusableForm: FC<ReusableFormProps> = ({
  blueprint,
  name,
  type,
  fields = [],
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
  } = useForm();

  const queryCreator = createQuery(fields, name, type);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false); //* Work on that

  const ref = useRef<any>(null);

  const { toggleCircle } = useSnapshot(store);
  const login = useZustandStore((state) => state.login);

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
      const query = queryCreator(formData);

      console.log(query, "QUERY");

      const { data } = await axios.post(endpoint, query).then((data) => data);
      console.log(data);
      const returnings = data.data[name];
      setLoading(false);
      setSuccess(true);
      await RedirectFunction(name, returnings, login).then((path) => {
        console.log(data);
        console.log(path);
        setTimeout(() => {
          Router.push(path);
        }, 1500);
      });
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err);

      setTimeout(() => {
        Router.push("/");
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
      className="form relative bg-blue-200 flex flex-col p-4 justify-center items-center space-y-4  rounded-xl"
    >
      {" "}
      {blueprint.map((field) => (
        <FormInput
          key={field.name}
          name={field.name}
          label={field.label}
          textFieldName={"description"}
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
          toggleCircle();
        }}
        text="&#10005;"
      />
    </form>
  );
};
export default ReusableForm;
