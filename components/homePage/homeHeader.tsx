import { GiMoebiusStar } from "react-icons/gi";

const HomeHeader = () => {
  return (
    <>
      <div className="w-screen h-[20%] md:h-[25%]  "> </div>
      <div className="sun" />
      <div className="moon">
        {" "}
        <div className="dot top-16 left-24" />{" "}
        <div className="dot top-32 left-44" />{" "}
        <div className="dot top-28 left-28" />{" "}
      </div>{" "}
      <div className="stars -z-[6]">
        {Array.from(Array(40)).map((el, ix) => {
          const speed = Math.max(3, Math.random() * 10);
          const nextSpeed = Math.max(3, Math.random() * 10);
          return (
            <div
              className="span-star w-10 h-10"
              style={{
                animationDuration: `${speed + nextSpeed}s`,
              }}
              key={ix}
            />
          );
        })}
      </div>
      <div className="morning" />
      <div className="w-[28rem] h-[10rem] space-y-8 p-24 bg-opacity-60 absolute top-[45%] -translate-y-1/3 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col   text-header bg-gray-800 rounded-xl    ">
        <div className=" ">
          <h1 className="  text-center text-4xl font-bold text-orange-500">
            {" "}
            Dream <span className="text-purple-600">workshop </span>{" "}
          </h1>
          <h2 className="text-header-reverse text-3xl italic text-white w-[0%]">
            {" "}
            share your dreams with us!{" "}
          </h2>{" "}
        </div>
      </div>
    </>
  );
};
export default HomeHeader;
