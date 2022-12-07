import { QueryNames } from "../../../types/enum";
import ReusableForm from "../form.component";

const CreateCommentForm = ({ id, close = () => {} }) => {
  return (
    <ReusableForm
      blueprint={commentBlueprint}
      type={true}
      additionalVariables={[{ id: id }]}
      name={QueryNames.ADD_COMMENT_TO_DREAM}
      closeForm={close}
    />
  );
};
export default CreateCommentForm;

export const commentBlueprint = [
  {
    name: "name",
    label: "Your name",
    settings: {
      required: "Please fill this field",
      maxLength: 40,
    },
  },
  {
    name: "text",
    label: "Text of your comment",
    settings: {
      required: "Please fill this field",
      minLength: 40,
      maxLength: 500,
      type: "textarea",
    },
  },
];
