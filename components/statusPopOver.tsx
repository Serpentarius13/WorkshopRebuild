import { FC } from "react";

import { IconContext } from "react-icons";
import { MdNearbyError, MdOutlineCheckCircleOutline } from "react-icons/md";

export enum StatusTypes {
  STATUS_SUCCESS = "STATUS_SUCCESS",
  STATUS_ERROR = "STATUS_ERROR",
  STATUS_LOADING = "STATUS_LOADING",
}

interface StatusTypeInterface {
  type: StatusTypes;
}

const StatusPopOver: FC<StatusTypeInterface> = ({ type }) => {
  return (
    <div className="relative w-[20rem] h-[40rem] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center w-[30rem] h-[30rem] bg-gray-200 rounded-full z-100 -translate-y-[55%] -translate-x-1/2 ">
        {type === StatusTypes.STATUS_ERROR && (
          <IconContext.Provider value={{ size: "100px", color: "red" }}>
            {" "}
            <MdNearbyError />{" "}
            <div className="text-2xl text-center font-medium text-red-800 ">
              <h1> It appears there was an error</h1>
              <h2> Please, try later</h2>
            </div>
          </IconContext.Provider>
        )}

        {type === StatusTypes.STATUS_LOADING && (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}

        {type === StatusTypes.STATUS_SUCCESS && (
          <IconContext.Provider value={{ size: "100px", color: "green" }}>
            {" "}
            <MdOutlineCheckCircleOutline />
            <h1 className="text-2xl text-center font-medium text-green-800 ">
              {" "}
              Success! You will be redirected in no time
            </h1>
          </IconContext.Provider>
        )}
      </div>
    </div>
  );
};
export default StatusPopOver;
