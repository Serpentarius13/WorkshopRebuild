import { calcDate } from "../../utils/date";

const Greetings = ({ name, createdAt }) => {
  const { days, hours, minutes } = calcDate(createdAt);

  console.log(days, hours, minutes);
  return (
    <div className="text-1xl md:!text-3xl text-center cursor-default bg-gray-800 p-4 w-[100%] rounded-xl text-white">
      <h1>
        {" "}
        Hello, <i className='text-orange-500'>{name} </i>{" "}
      </h1>
      <h2 className="text-center leading-tight text-sm">
        It has been {days ? <span> {days} days,</span> : ""}{" "}
        {hours ? <span> {hours} hours,</span> : ""}{" "}
        {minutes && (
          <span>
            {" "}
            {hours || days ? "and" : ""} {minutes} minutes
          </span>
        )}{" "}
        since you joined.
        <br /> <span className=' font-bold text-orange-600'> Thanks for staying with us. </span>
      </h2>
    </div>
  );
};
export default Greetings;
