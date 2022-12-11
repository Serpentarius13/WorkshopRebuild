import { gql, useLazyQuery, useMutation } from "@apollo/client";
import StatusPopOver, { StatusTypes } from "../statusPopOver";

import { client } from "../../apollo-client";

const ControlPanel = ({ navState, dreams, comments, refetch }) => {
  const [deleteAllDreams, { loading, error }] = useMutation(
    gql`
      mutation Mutation($isDreams: Boolean) {
        deleteAllContentOfUser(isDreams: $isDreams)
      }
    `,
    { client }
  );

  const [
    setDreamsPrivate,
    {  loading: loadingPrivate, error: errorPrivate },
  ] = useMutation(
    gql`
      mutation Mutation {
        setAllDreamsPrivate
      }
    `,
    { client }
  );



  console.log(error, errorPrivate, loading, loadingPrivate);

  console.log(dreams);

  if (error || errorPrivate)
    return <StatusPopOver type={StatusTypes.STATUS_ERROR} />;
  if (loading || loadingPrivate)
    return <StatusPopOver type={StatusTypes.STATUS_LOADING} />;
  return (
    <>
      <h2 className="text-center font-bold text-3xl cursor-default text-white">
        {" "}
        Control panel:{" "}
      </h2>
      <div className="min-h-[30%] w-[95%] mx-auto grid grid-cols-2 gap-4 p-6">
        <button
          className="px-6 py-3 bg-purple-800 text-white"
          onClick={() => navState(33.333)}
        >
          {" "}
          Your dreams
        </button>
        <button
          className="px-6 py-3 bg-blue-500 text-white"
          onClick={() => navState(66.666)}
        >
          {" "}
          Your comments
        </button>

        <button
          onClick={() => {
            setDreamsPrivate();
            refetch();
          }}
          className={`px-4 py-2  text-white col-span-2 border-2 border-whit ${
            dreams.length > 0 ? "bg-slate-500" : "  "
          }`}
          disabled={dreams.length <= 0}
        >
          {" "}
          Set all dreams{" "}
          {dreams[0] && dreams[0]?.isPrivate ? "public" : "private"}{" "}
        </button>

        <button
          onClick={() => {
            deleteAllDreams({ variables: { isDreams: true } });
            refetch();
          }}
          className={`px-4 py-2  text-white  ${
            dreams.length > 0 ? "bg-red-500" : "border-2 border-white "
          }`}
          disabled={dreams.length <= 0}
        >
          {" "}
          Delete all dreams{" "}
        </button>
        <button
          onClick={() => {
            deleteAllDreams({ variables: { isDreams: false } });
            refetch();
          }}
          className={`px-4 py-2  col-span-1 text-white  ${
            comments.length > 0 ? "bg-orange-600" : " border-2 border-white "
          }`}
          disabled={comments.length <= 0}
        >
          {" "}
          Delete all comments{" "}
        </button>
      </div>
    </>
  );
};
export default ControlPanel;
