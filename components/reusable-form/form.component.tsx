import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { client, endpoint } from "../../apollo-client";
import FormInput from "./input.component";

import axios from "axios";
import { useLoadError } from "../../store/store";
import { useLazyQuery } from "@apollo/client";
import UniversalButton, { ButtonTypes } from "../uniButton.component";

interface BlueprintData {
  name: string;
  label: string;
  settings: any;
}

interface ReusableFormProps {
  blueprint: BlueprintData[];
  queryCreator: (data) => any;
}

const ReusableForm: FC<ReusableFormProps> = ({ blueprint, queryCreator }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(errors);
    console.log(Object.keys(errors));
    if (Object.keys(errors).length > 0) {
      setTimeout(clearErrors, 2000);
    }
  }, [errors]);

  const sendData = async (formData) => {
    try {
      setLoading(true);
      const query = queryCreator(formData);

      await axios.post(endpoint, query);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err);
    }
  };

  if (loading) return <div> Loading </div>;
  if (error) return <div> Error </div>;

  return (
    <form
      onSubmit={handleSubmit(sendData)}
      className="min-h-[24rem] max-h-screen max-w-[24rem] bg-slate-400 flex flex-col p-4 justify-evenly items-center space-y-3 md:space-y-5"
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
      <UniversalButton buttonType={ButtonTypes.FORM_BUTTON} text="Send" />
    </form>
  );
};
export default ReusableForm;
