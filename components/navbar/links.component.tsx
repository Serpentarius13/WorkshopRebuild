import Link from "next/link";
import { FC } from "react";
import { ModalTypes, store } from "../../store/store";
import UserLinks from "./userLinks.component";

interface LinksProps {
  expanded?: boolean;
}

const Links: FC<LinksProps> = ({ expanded }) => {
  const style = `${
    expanded
      ? "text-8xl text-bold nav-link text-black text-inherit "
      : "text-2xl text-medium text-white pr-4"
  }  cursor-pointer underline  `;

  const { openModal } = store;

  return (
    <>
      <button
        onClick={() => {
          console.log("Opening");
          openModal(ModalTypes.CREATE_DREAM);
        }}
        className={style}
      >
        Create dream
      </button>
      <UserLinks style={style}/>
      <button className={style}>boba</button>
    </>
  );
};
export default Links;
