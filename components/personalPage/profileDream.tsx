import { RiDeleteBin2Fill } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";
import { client } from "../../apollo-client";
import StatusPopOver, { StatusTypes } from "../statusPopOver";

const DreamOrComment = ({ source, refetch }) => {
  const router = useRouter();

  const [deleteContent, { data, loading, error }] = useMutation(
    gql`
      mutation Mutation($id: String, $isDream: Boolean) {
        deleteContent(id: $id, isDream: $isDream)
      }
    `,
    { client }
  );

  if (error) return <StatusPopOver type={StatusTypes.STATUS_ERROR} />;

  return (
    <li
      className={`w-[95%] md:w-[65%] mx-auto h-24 flex bg-white text-black rounded-l-xl border-4 ${
        source.dreamName ? "border-purple-800" : "border-blue-500"
      }`}
    >
      <div
        className={`flex-1 h-[100%] w-[85%] ${
          source.dreamName ? "border-r-purple-800" : "border-r-blue-500"
        } border-2 p-4  rounded-l-3xl `}
      >
        <h1> {source.dreamName || source.name} </h1>
        <p
          className={`w-[95%] ${
            source.dreamName ? "h-[60%]" : "h-[93%]"
          } break-words overflow-hidden`}
        >
          {" "}
          {source.description || source.commentText}{" "}
        </p>{" "}
      </div>
      <div className="w-12 h-[100%] bg-blue-100 flex flex-col p-1 space-y-1 justify-center items-center ">
        {" "}
        <RiDeleteBin2Fill
          className="cursor-pointer"
          color={"red"}
          size={24}
          onClick={async () => {
            (await source.dreamName)
              ? deleteContent({ variables: { id: source._id, isDream: true } })
              : deleteContent({
                  variables: { id: source._id, isDream: false },
                });
            refetch();
          }}
        />{" "}
        <HiOutlineExternalLink
          onClick={() => {
            router.push(`/dream/${source.commentParentDream || source._id}`);
          }}
          className="cursor-pointer"
          size={24}
        />{" "}
        <div
          className={`p-1 cursor-default  border-2 rounded-full font-medium ${
            source.rating === 0 || source.commentRating === 0
              ? ""
              : source.rating > 0 || source.commentRating > 0
              ? "border-green-500"
              : "border-red-500"
          } `}
        >
          {" "}
          {source.rating || source.commentRating || 0}{" "}
        </div>{" "}
      </div>{" "}
    </li>
  );
};
export default DreamOrComment;
