import Image from "next/image";
import { FC, useState } from "react";
import ButtonCollapse from "./button-collapse.component";
import Links from "./links.component";
import NavBarLinks from "./navbar-links";
import Prophecy from "./prophecy";

const Navbar: FC = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className=" navbar w-[100%] h-8 py-8 px-4 bg-slate-600 flex xl:justify-around items-center justify-center space-x-2">
        <div className=" flex items-center  space-x-2 ">
          <Image src="/aten.jpg" alt="aten" width={32} height={32} />
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
      </div>
      {dropdown && <NavBarLinks />}
    </>
  );
};
export default Navbar;
