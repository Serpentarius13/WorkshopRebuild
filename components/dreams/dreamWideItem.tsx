import Link from "next/link";

const DreamWideItem = ({ dream }) => {
  const { time, name, email, dreamName, description, _id } = dream;
  return (
    <li className="md:w-[60%] xl:w-[50%] w-[80%] mx-auto p-2 relative flex-1 ">
      <h1 className="text 2xl font-medium"> {dreamName} </h1>
      <p className="text-sm break-words overflow-hidden h-8 w-[85%]">
        {" "}
        123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123{" "}
        {description}{" "}
      </p>

      {time || name ? (
        <div className="absolute top-2 right-2 flex space-x-1">
          {name ? <p> By: {name} </p> : ""}
          {time ? <p> At: {time} </p> : ""}
        </div>
      ) : (
        ""
      )}

      <Link
        className="px-2 py-1 bg-purple-800 text-white absolute -bottom-4 right-0"
        href={`/dream/${_id}`}
      >
        {" "}
        Read more{" "}
      </Link>
    </li>
  );
};
export default DreamWideItem;
