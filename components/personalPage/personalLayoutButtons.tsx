import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Buttons = ({ offset, setOffset }) => {
  const onePage = 33.333;
  const twoPage = 66.666;
  const prevPage = () => {
    const prevOffset = offset - onePage;
    if (prevOffset < 0) setOffset(twoPage);
    else setOffset(prevOffset);
  };

  const nextPage = () => {
    const nextOffset = offset + onePage;
    if (nextOffset > twoPage) setOffset(0);
    else setOffset(nextOffset);
  };
  return (
    <>
      {" "}
      <button
        onClick={prevPage}
        className="px-6 py-3 bg-white text-black  rounded-full border-orange-500 border-4 absolute top-1/2 -translate-y-3/4   left-4 z-[400]"
      >
        {" "}
        <BiLeftArrow />
      </button>
      <button
        onClick={nextPage}
        className="px-6 py-3 bg-white text-black  rounded-full border-orange-500 border-4 absolute top-1/2 -translate-y-3/4   right-4 z-[400]"
      >
        {" "}
        <BiRightArrow />
      </button>{" "}
    </>
  );
};

export default Buttons;
