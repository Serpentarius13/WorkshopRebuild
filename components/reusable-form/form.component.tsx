import { FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { endpoint } from "../../apollo-client";
import FormInput from "./input.component";

import axios from "axios";
import UniversalButton from "../uniButton.component";
("use client");

import { createQuery } from "../../queries/createDreamMutation";
import { store, userStore } from "../../store/store";

import { useSnapshot } from "valtio";
import StatusPopOver, { StatusTypes } from "../statusPopOver";
import { useRouter } from "next/navigation";
import { RedirectFunction } from "../../utils/redirect";

import { getToken, setToken } from "../../utils/cookies";
import { QueryNames, ButtonTypes } from "../../types/enum";

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
  pushTo?: any;
}

const ReusableForm: FC<ReusableFormProps> = ({
  blueprint,
  name,
  type,
  fields = [],
  additionalVariables = [],
  closeForm = () => {},
  pushTo = null,
}) => {
  const { currentUser } = useSnapshot(userStore);
  const generateDefault = () => {
    if (!currentUser) return {};
    const defaults = {};
    const curUserKeys = Object.keys(currentUser);

    blueprint.forEach((el) => {
      if (curUserKeys.includes(el.name)) {
        defaults[el.name] = currentUser[el.name];
      }
    });

    return defaults;
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<any>({ defaultValues: generateDefault() });

  const queryCreator = createQuery(fields, name, type);

  console.log(name, type);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const ref = useRef<any>(null);

  const { closeModal } = store;

  const router = useRouter();

  const { toggleCircle } = useSnapshot(store);
  const handleClickOutside = (event) => {
    if (event.target.classList.contains("popover")) {
      toggleCircle();
    }
    console.log("first");
    if (event.key === "Escape") toggleCircle();
  };

  useEffect(() => {
    const checkingFor = ["keypress", "click"];

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

      const { data } = await axios
        .post(endpoint, query, {
          headers: {
            authorization: getToken() ? `Bearer ${getToken()}` : "Bearer 0",
          },
        })
        .then((data) => data);
      const returnings = data.data[name];

      console.log(returnings);

      await RedirectFunction(name, returnings).then((path) => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          closeModal();
          closeForm();
          reset();

          router.push(path);
          router.refresh();
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
      className="form relative bg-blue-200 flex flex-col p-4  items-center justify-center  space-y-4  rounded-xl z-[500]"
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
