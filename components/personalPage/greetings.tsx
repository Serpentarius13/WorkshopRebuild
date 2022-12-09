import { calcDate } from "../../utils/date";

const Greetings = ({ name, createdAt }) => {
  const { days, hours, minutes } = calcDate(createdAt);
  return (
    <>
      <h1> Hello, {name}. </h1>
      <h2>
        It has been {days ? <span> {days} days,</span> : ""}{" "}
        {hours ? <span> {hours} hours,</span> : ""}{" "}
        {minutes && (
          <span>
            {" "}
            {hours || days ? "and" : ""} {minutes} minutes
          </span>
        )}{" "}
        since you joined.
        <br /> Thanks for staying with us.
      </h2>
    </>
  );
};
export default Greetings;
