import Image from "next/image";
import { memo } from "react";
import { calcDate } from "../../utils/date";

const Greetings = ({ user }) => {
  const { name, createdAt, avatar } = user;
  const { days, hours, minutes } = calcDate(createdAt);

  return (
    <div className="text-1xl md:!text-3xl text-center cursor-default bg-gray-800 p-4 w-[100%] rounded-xl text-white flex items-center justify-center space-x-4">
      <div className="">
        <h1>
          {" "}
          Hello, <i className="text-orange-500">{name} </i>{" "}
        </h1>
        <p className="text-center leading-tight text-sm">
          It has been {days ? <span> {days} days,</span> : ""}{" "}
          {hours ? <span> {hours} hours,</span> : ""}
          <span>
            {" "}
            {hours || days ? "and" : ""} {minutes} minutes since you joined.
          </span>
          <br />{" "}
          <span className=" font-bold text-orange-600">
            {" "}
            Thanks for staying with us.{" "}
          </span>
        </p>
      </div>
      {avatar ? (
        <Image
          src={avatar}
          width={96}
          height={96}
          alt="User avatar"
          className="mx-auto border-2 border-white rounded-full"
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default memo(Greetings);
