import StatusPopOver from "../statusPopOver";
import { StatusTypes } from "../statusPopOver";


const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {" "}
      <StatusPopOver type={StatusTypes.STATUS_LOADING} />{" "}
    </div>
  );
};
export default Loading;
