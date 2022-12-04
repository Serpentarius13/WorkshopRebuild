import { FC } from "react";

interface DreamPageLayout {
  children?: React.ReactNode;
  pagination: () => JSX.Element[];
}

const DreamPageLayout: FC<DreamPageLayout> = ({ children, pagination }) => {
  return (
    <div className="w-[100%] mx-auto mt-8 flex flex-col justify-around items-center space-y-1 ">
      <h1 className="text-2xl font-medium text-center"> Dreams</h1>
      <ul className="  mx-auto flex flex-col justify-center items-start space-y-4 md:space-y-8 container p-4 !pb-12   ">
        {" "}
        {children}{" "}
      </ul>

      <div className="flex space-x-2 pb-2">{pagination()} </div>
    </div>
  );
};
export default DreamPageLayout;
