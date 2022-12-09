import { useSnapshot } from "valtio";
import { store, userStore } from "../../store/store";

import { ModalTypes } from "../../types/enum";

import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { BiLogIn, BiLogOut } from "react-icons/bi";

import { FiUserPlus } from "react-icons/fi";

import { CgProfile } from "react-icons/cg";

interface UserLinks {
  style: string;
}

const UserLinks: FC<UserLinks> = ({ style }) => {
  const { currentUser, logout } = useSnapshot(userStore);

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
            <CgProfile /> <span> Your page </span>{" "}
          </Link>
          <button className={style} onClick={() => logout()}>
            {" "}
            <BiLogOut /> <span> Logout </span>
          </button>
        </>
      ) : hydrated ? (
        <>
          {" "}
          <button className={style} onClick={() => openModal(ModalTypes.LOGIN)}>
            {" "}
            <BiLogIn /> <span> Login </span>{" "}
          </button>
          <button
            className={style}
            onClick={() => openModal(ModalTypes.SIGNUP)}
          >
            {" "}
            <FiUserPlus /> <span> Sign up </span>
          </button>{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default UserLinks;
