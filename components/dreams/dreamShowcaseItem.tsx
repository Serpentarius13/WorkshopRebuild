const DreamShowcase = () => {
  const fakeDream = {
    name: "Bobink",
    time: new Date().toTimeString(),
    email: "bobki@mail.ru",
    dreamName: "Lorem ipsum?",
    description:
      "Lorem ipsum dolor sit, amet con122222222222222222222222222222222222222222223s21212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121213ectetur12321321321321312312313123213123123123123213 adipisicing elit. Maiores, aliquam laudantium quod numquam repellat optio, porro accusamus sequi quisquam, quam cum ullam vel necessitatibus. Animi aliquam fugit id nulla iste.",
  };

  return (
    <div className="w-[25rem] h-[18rem]  p-4  space-y-4 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-center"> {fakeDream.dreamName} </h1>{" "}
        <p className="px-4 py-2 bg-purple-600 text-white">
          {" "}
          <span className="italic"> By: </span> {fakeDream.name}{" "}
        </p>
      </div>
      <p className="text-center h-[50%] w-[100%] overflow-clip break-words">
        {" "}
        {fakeDream.description}{" "}
      </p>

      <button className=" bg-purple-600 text-white  px-4 py-2 absolute bottom-6 right-6 ">
        {" "}
        Check yourself{" "}
      </button>
    </div>
  );
};
export default DreamShowcase;
