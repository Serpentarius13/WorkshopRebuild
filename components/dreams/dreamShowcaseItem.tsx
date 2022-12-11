const DreamShowcase = ({ fakeDream }) => {
  return (
    <div className="w-[33%] h-[18rem]  p-4  space-y-4 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-center text-purple-500"> {fakeDream.dreamName} </h1>{" "}
        <p className="px-4 py-2 bg-purple-500 text-white">
          {" "}
          <span className="italic"> By: </span> {fakeDream.name}{" "}
        </p>
      </div>
      <p className="text-center h-[55%] w-[100%] overflow-clip break-words text-white text-2xl">
        {" "}
        {fakeDream.description}{" "}
      </p>
    </div>
  );
};
export default DreamShowcase;
