import { FC } from "react";

interface ILikeButton {
  condition: boolean;
  handler: () => Promise<void>
  rating: number;
  size: number;
  buttonExistenceCondition: any;
}

import { FcDislike, FcLike } from "react-icons/fc";

const LikeButton: FC<ILikeButton> = ({
  buttonExistenceCondition,
  condition,
  handler,
  rating,
  size,
}) => {
  console.log(buttonExistenceCondition, 'COND');
  return (
    <>
      {" "}
      {buttonExistenceCondition ? (
        <div className={`relative   w-${size} h-${size} cursor-pointer z-10 `}>
          {" "}
          {condition ? (
            <FcDislike
              className={`w-[100%] h-[100%]  hover:scale-125  cursor-pointer  `}
              onClick={handler}
            />
          ) : (
            <FcLike
              className={`w-[100%] h-[100%]   hover:scale-125  cursor-pointer  `}
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
            } rounded-full w-6 h-6 flex items-center justify-center text-center  absolute -bottom-1 left-1/2 -translate-x-1/2 font-medium text-2xl text-white`}
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
