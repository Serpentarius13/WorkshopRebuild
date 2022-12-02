import Link from "next/link";
import { FC } from "react";
import { store } from "../../store/store";

interface LinksProps {
  expanded?: boolean;
}

const Links: FC<LinksProps> = ({ expanded }) => {
  const style = `${
    expanded
      ? "text-8xl text-bold nav-link text-black text-inherit "
      : "text-2xl text-medium text-white"
  }  cursor-pointer underline `;

  const { toggleModal } = store;
  return (
    <>
      <button
        onClick={() => {
          toggleModal();
          console.log("Opening");
        }}
        className={style}
      >
        Create dream
      </button>
      <button className={style}>boba</button>
      <button className={style}>boba</button>
      <button className={style}>boba</button>
    </>
  );
};
export default Links;
