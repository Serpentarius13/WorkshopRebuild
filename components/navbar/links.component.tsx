import Link from "next/link";
import { FC } from "react";

interface LinksProps {
  expanded?: boolean;
}

const Links: FC<LinksProps> = ({ expanded }) => {
  const style = `${
    expanded
      ? "text-8xl text-bold nav-link text-black text-inherit "
      : "text-2xl text-medium text-white"
  }  cursor-pointer underline `;
  return (
    <>
      <Link href="/" className={style}>
        boba
      </Link>
      <Link href="/" className={style}>
        boba
      </Link>
      <Link href="/" className={style}>
        boba
      </Link>
      <Link href="/" className={style}>
        boba
      </Link>
    </>
  );
};
export default Links;
