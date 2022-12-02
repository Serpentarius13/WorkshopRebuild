import Link from "next/link";
import { FC } from "react";
import { ModalTypes, store } from "../../store/store";

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
        Create dream
      </button>
      <button onClick={() => {
        openModal(ModalTypes.LOGIN)
      }} className={style}>boba</button>
      <button className={style}>boba</button>
      <button className={style}>boba</button>
    </>
  );
};
export default Links;
