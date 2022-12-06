"use client";

import ReusableForm from "../form.component";
import { dreamBlueprint } from "../../modalOver";
import { QueryNames } from "../../modalOver";

const CreateDreamForm = () => {
  return (
    <ReusableForm
      blueprint={dreamBlueprint}
      type={true}
      name={QueryNames.NEW_DREAM}
      fields={[
        "_id",
        "authorId",
        "name",
        "description",
        "time",
        "dreamName",
        "email",
      ]}
    />
  );
};
export default CreateDreamForm;
