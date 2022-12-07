import { FC } from "react";

interface ILikeButton {
  condition: boolean;
  handler: () => any;
  rating: number;
  size: number;
  buttonExistenceCondition: any
}

import { FcDislike, FcLike } from "react-icons/fc";

const LikeButton: FC<ILikeButton> = ({
  buttonExistenceCondition,
  condition,
  handler,
  rating,
  size,
}) => {
  return (
    <>
      {" "}
      {buttonExistenceCondition ? (
        <div className="relative  ">
          {" "}
          {condition ? (
            <FcDislike
              className={`w-${size} h-${size}  hover:scale-125  cursor-pointer  `}
              onClick={handler}
            />
          ) : (
            <FcLike
              className={`w-${size} h-${size}  hover:scale-125  cursor-pointer  `}
              onClick={handler}
            />
          )}
          <span
            className={`${
              rating === 0
                ? "bg-white !text-black"
                : rating > 0
                ? "bg-green-600"
                : "bg-red-600"
            } rounded-full w-${Math.round(size / 2)} h-${Math.round(
              size / 2
            )} flex items-center justify-center text-center  absolute -bottom-14 left-1/2 -translate-x-1/2 font-medium text-2xl text-white`}
          >
            {" "}
            {rating}{" "}
          </span>
        </div>
      ) : (
        <p className="p-2 flex items-center justify-center border-2 border-orange-400">
          {" "}
          Be sure to log in to rate it <br />
        </p>
      )}{" "}
    </>
  );
};
export default LikeButton;

// async () => {
