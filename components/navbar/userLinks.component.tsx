import { useSnapshot } from "valtio";
import { ModalTypes, store, useZustandStore } from "../../store/store";

import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface UserLinks {
  style: string;
}

const UserLinks: FC<UserLinks> = ({ style }) => {
  const { currentUser, logout } = useZustandStore();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  const { openModal } = store;

  console.log(currentUser);
  return (
    <>
      {currentUser && hydrated ? (
        <>
          {" "}
          <Link className={style} href="/personal">
            {" "}
            Your page{" "}
          </Link>
          <button className={style} onClick={() => logout()}>
            {" "}
            Logout
          </button>
        </>
      ) : hydrated ? (
        <>
          {" "}
          <button className={style} onClick={() => openModal(ModalTypes.LOGIN)}>
            {" "}
            Login{" "}
          </button>
          <button
            className={style}
            onClick={() => openModal(ModalTypes.SIGNUP)}
          >
            {" "}
            Sign up
          </button>{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default UserLinks;
