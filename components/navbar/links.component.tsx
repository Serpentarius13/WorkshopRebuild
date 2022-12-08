import Link from "next/link";
import { FC } from "react";
import { store } from "../../store/store";
import UserLinks from "./userLinks.component";
import { ModalTypes } from "./../../types/enum";

interface LinksProps {
  expanded?: boolean;
}

const Links: FC<LinksProps> = ({ expanded }) => {
  const style = `${
    expanded
      ? "text-8xl text-bold nav-link text-black text-inherit "
      : "text-2xl text-medium text-white"
  }  cursor-pointer underline `;

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
        Write 
      </button>
      <Link className={style} href="/dreams/1">
        {" "}
        Read
      </Link>
      <UserLinks style={style} />
    </>
  );
};
export default Links;
