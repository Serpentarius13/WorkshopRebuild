"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState, useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { userStore } from "../../store/store";
import ButtonCollapse from "./button-collapse.component";
import Links from "./links.component";
import NavBarLinks from "./navbar-links";
import Prophecy from "./prophecy";

const Navbar: FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const ref = useRef<any>(null);

  const { login } = userStore;

  useEffect(() => {
    const log = async () => {
      try {
        await login();
      } catch (err) {
        console.log(err);
      }
    };

    log();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) ref.current.classList.add("nav-stick");
      else ref.current.classList.remove("nav-stick");
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.pageYOffset > 100) ref.current.classList.add("nav-stick");
        else ref.current.classList.remove("nav-stick");
      });
    };
  }, []);
  return (
    <>
      <div
        ref={ref}
        className={`  w-screen h-8 py-8 px-8 bg-slate-600 flex xl:justify-around items-center justify-center z-[100]   `}
      >
        <div
          onClick={() => router.push("/")}
          className=" flex items-center  space-x-2 cursor-pointer"
        >
          <Image
            src="/aten.jpg"
            alt="aten"
            width={32}
            height={32}
            className="cursor-pointer"
          />
          <span className="text-white  md:block text-1xl lg:text-2xl hidden font-sans font-medium ">
            {" "}
            Dream workshop{" "}
          </span>
        </div>

        <Prophecy />

        <div className=" justify-around items-center space-x-4 hidden xl:flex">
          <Links />
        </div>
        <ButtonCollapse handler={setDropdown} state={dropdown} />
        {dropdown && <NavBarLinks setExpanded={() => setDropdown(false)} />}
      </div>
    </>
  );
};
export default Navbar;
