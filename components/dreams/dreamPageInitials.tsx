import { store } from "./../../store/store";
import { ModalTypes } from "../../types/enum";
import UniversalButton from "./../uniButton.component";
import { ButtonTypes } from "./../../types/enum";
import { sentEmail } from "../../utils/cookies";
import Image from "next/image";
import Link from "next/link";

interface DreamInitialsInterface {
  email: string;
  name: string;
  time: string;
  avatar: string | null;
}

const DreamPageInitials = ({ id, name, time, avatar, authorId }) => {
  const { setVariables, openModal } = store;

  const openEmailModel = () => {
    setVariables([{ id: id }]);
    if (sentEmail(id)) {
      alert("You have already sent email to this user");
      return;
    }
    openModal(ModalTypes.SEND_EMAIL_TO_USER);
  };

  return (
    <div className="flex md:mr-24 space-x-4 items-center justify-center">
      {" "}
      {time || name ? (
        <div className="flex items-center justify-center space-x-2 mx-auto">
          {name ? (
            <div className="px-6 py-3 text-blue-800 border-blue-800 border-4 items-center justify-center pr-4 flex space-x-2">
              {" "}
              {authorId.length > 1 ? (
                <Link href={`/profile/${authorId}`}>
                  {" "}
                  By: <span className="text-2xl font-bold"> {name} </span>{" "}
                </Link>
              ) : (
                <p>
                  {" "}
                  By: <span className="text-2xl font-bold"> {name} </span>{" "}
                </p>
              )}
              {avatar && (
                <Image
                  src={avatar}
                  alt="User avatar"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
            </div>
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
        {id ? (
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
