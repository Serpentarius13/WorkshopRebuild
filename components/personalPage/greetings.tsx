import { calcDate } from "../../utils/date";

const Greetings = ({ name, createdAt }) => {
  const { days, hours, minutes } = calcDate(createdAt);

  console.log(days, hours, minutes);
  return (
    <div className="text-3xl text-center cursor-default">
      <h1>
        {" "}
        Hello, <i>{name} </i>{" "}
      </h1>
      <h2 className="text-center leading-tight">
        It has been {days ? <span> {days} days,</span> : ""}{" "}
        {hours ? <span> {hours} hours,</span> : ""}{" "}
        {minutes && (
          <span>
            {" "}
            {hours || days ? "and" : ""} {minutes} minutes
          </span>
        )}{" "}
        since you joined.
        <br /> <span className=' font-bold'> Thanks for staying with us. </span>
      </h2>
    </div>
  );
};
export default Greetings;
