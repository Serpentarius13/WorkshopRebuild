import { store } from "./../../store/store";
import { ModalTypes } from "./../modalOver";
import UniversalButton, { ButtonTypes } from "./../uniButton.component";

interface DreamInitialsInterface {
  email: string;
  name: string;
  time: string;
}

const DreamPageInitials = ({ email, name, time }) => {
  const { setVariables, openModal } = store;

  const openEmailModel = () => {
    setVariables([{ toEmail: email }]);
    openModal(ModalTypes.SEND_EMAIL_TO_USER);
  };

  

  return (
    <div className="grid content-center md:mr-24 gap-4">
      {" "}
      {time || name ? (
        <div className="flex items-center justify-center space-x-2 mx-auto">
          {name ? (
            <p className="px-6 py-3 text-blue-800 border-blue-800 border-4 text-center">
              {" "}
              By: {name}{" "}
            </p>
          ) : (
            ""
          )}
          {time ? (
            <p className="px-6 py-3 text-purple-800 border-purple-800 border-4 text-center">
              {" "}
              Dreamt at: {time}{" "}
            </p>
          ) : (
            ""
          )}{" "}
        </div>
      ) : (
        ""
      )}{" "}
      <div className="mx-auto">
        {email ? (
          <UniversalButton
            buttonType={ButtonTypes.FORM_BUTTON}
            text="Send email to user!"
            onClick={openEmailModel}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default DreamPageInitials;
