import Link from "next/link";
import { FC } from "react";
import { store } from "../../store/store";
import UserLinks from "./userLinks.component";
import { ModalTypes } from "./../../types/enum";

import { BsVectorPen } from "react-icons/bs";

import { AiOutlineRead } from "react-icons/ai";

interface LinksProps {
  expanded?: boolean;
}

const Links: FC<LinksProps> = ({ expanded }) => {
  const style = `${
    expanded
      ? "text-8xl text-bold nav-link text-black text-inherit "
      : "text-2xl text-medium text-white"
  }  cursor-pointer underline flex space-x-2 items-end justify-center p-[4px] z-[10] `;

  const { openModal } = store;

  return (
    <>
      <button className={style}>
        {" "}
        <BsVectorPen /> <span className="text-center"> Write </span>
      </button>
      <Link className={style} href="/dreams/1">
        {" "}
        <AiOutlineRead /> <span> Read </span>
      </Link>
      <UserLinks style={style} />
    </>
  );
};
export default Links;
