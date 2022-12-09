import { RiDeleteBin2Fill } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DreamOrComment = ({ source }) => {
  const router = useRouter();

  return (
    <li className="w-[95%] md:w-[65%] mx-auto h-24 flex bg-white text-black rounded-l-xl ">
      <div className="flex-1 h-[100%] w-[85%] border-r-purple-800 border-2 p-4  rounded-l-3xl ">
        <h1> {source.dreamName || source.name} </h1>
        <p
          className={`w-[95%] ${
            source.dreamName ? "h-[60%]" : "h-[95%]"
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
        />{" "}
        <HiOutlineExternalLink
          onClick={() => {
            router.push(
              source.parentId
                ? `/dream/${source.parentId}`
                : `/dream/${source._id}`
            );
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
          {source.rating || source.commentRating}{" "}
        </div>{" "}
      </div>{" "}
    </li>
  );
};
export default DreamOrComment;