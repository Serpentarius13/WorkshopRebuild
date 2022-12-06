import StatusPopOver, { StatusTypes } from "../../components/statusPopOver";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      {" "}
      <StatusPopOver type={StatusTypes.STATUS_LOADING} />
    </>
  );
}
