import StatusPopOver, { StatusTypes } from "../components/statusPopOver";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-screen h-screen relative items-center justify-center">
      {" "}
      <StatusPopOver type={StatusTypes.STATUS_LOADING} />
    </div>
  );
}
