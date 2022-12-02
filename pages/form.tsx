import ReusableForm from "../components/reusable-form/form.component";
import FormPopOver from "../components/reusable-form/formPopOver";

import { createMutation } from "./../queries/createDreamMutation";

const Form = () => {
  const submitHandler = createMutation(blueprint, "newDream");

  return <FormPopOver blueprint={blueprint} queryCreator={submitHandler} />;
};
export default Form;

export const blueprint = [
  {
    name: "name",
    label: "Your name",
    settings: {
      required: false,
      maxLength: 40,
    },
  },
  {
    name: "time",
    label: "Time when dream occured",
    settings: {
      required: false,
      type: "time",
    },
  },
  {
    name: "email",
    label: "Your email",

    settings: {
      required: false,
      type: "email",
      maxLength: 40,
    },
  },
  {
    name: "dreamName",
    label: "Name of your dream",
    settings: {
      required: "Please fill out this field",
      maxLength: 20,
    },
  },
  {
    name: "description",
    label: "Describe your dream",
    settings: {
      required: "Please fill out this field",
      minLength: 40,
    },
  },
];
