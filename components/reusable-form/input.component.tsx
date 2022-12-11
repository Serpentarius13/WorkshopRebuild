import React, { FC, useCallback, useEffect, useState } from "react";
import { useFormState } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  registerFunction: (name, settings) => any;

  settings?: any;
  control?: any;
  clearErrors?: any;
}

const FormInput: FC<FormInputProps> = ({
  label,
  registerFunction,
  name,
  settings = {},
  control,
  clearErrors,
}) => {
  const focusRef = useCallback((e: any) => {
    e.target.previousSibling.focus();
  }, []);

  const { errors } = useFormState({ control });

  console.log(errors[name]?.message);

  console.log(errors);

  const border = settings?.required ? "border-2 border-orange-500" : "";

  return (
    <>
      <p className="text-red-800 font-medium text-2xl">
        {" "}
        {errors?.[name]?.message?.toString()}
        {errors?.[name]?.type === "maxLength" ? "You wrote too much" : ""}
        {errors?.[name]?.type === "minLength" ? "Please, write some more" : ""}
      </p>
      <div className=" w-[90%] relative flex items-center justify-center">
        {settings.type === "textarea" ? (
          <textarea
            className={`${border} ${
              errors[name]?.message ? "border-4 !border-red-800" : ""
            } p-4 h-64 w-[100%] outline-none inputField resize-none `}
            {...registerFunction(name, settings)}
            defaultValue=""
            placeholder="2"
          />
        ) : (
          <input
            className={` inputField h-10 flex items-center justify-center p-1 file:rounded-full file:bg-transparent ${
              settings.type === "file" ? "text-white" : ""
            }  file:text-orange-500 file:border-white file:border-2 file:ml-2 w-[100%] outline-none mt-auto ${border} ${
              errors[name]?.message ? "border-4 !border-red-800" : ""
            } `}
            {...registerFunction(name, settings)}
            defaultValue=""
            placeholder="2"
            type={settings?.type}
            accept={
              settings.type === "file" ? 'accept="image/png, image/jpeg"' : ""
            }
          />
        )}
        <label
          onClick={focusRef}
          className="inputLabel absolute top-1/2 left-3 -translate-y-1/2 flex items-center justify-center "
        >
          {" "}
          {label}{" "}
        </label>
      </div>
    </>
  );
};
export default FormInput;

// {...registerFunction(name, settings)} - register
