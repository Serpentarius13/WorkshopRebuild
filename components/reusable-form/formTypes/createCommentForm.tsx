import { QueryNames } from "../../../types/enum";
import ReusableForm from "../form.component";

const CreateCommentForm = ({ id, close = () => {}, isDream = true }) => {
  return (
    <ReusableForm
      blueprint={commentBlueprint}
      type={true}
      additionalVariables={[{ id: id }]}
      name={
        isDream
          ? QueryNames.ADD_COMMENT_TO_DREAM
          : QueryNames.ADD_COMMENT_TO_COMMENT
      }
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
