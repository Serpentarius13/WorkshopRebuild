"use client";

import ReusableForm from "../form.component";
import { dreamBlueprint } from "../../../utils/blueprints";
import { QueryNames } from "../../../types/enum";

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
