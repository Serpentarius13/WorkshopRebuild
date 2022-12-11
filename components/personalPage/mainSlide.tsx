import ControlPanel from "./controlPanel";
import Greetings from "./greetings";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { slideStyle } from "./personalLayout";

import {memo} from 'react'

const MainSlide = ({
  setOffset,
  user,
  data: { comments, dreams },
  refetch
}) => {
  const data = {
    labels: ["Comments", "Dreams"],
    datasets: [
      {
        data: [comments.length, dreams.length],
        backgroundColor: ["#3b82f6", "#a855f7"],
        borderColor: "white",
      },
    ],
  };
  return (
    <div
      className="w-screen h-screen    "
      style={{ background: "linear-gradient(to right,#f29492, #114357 )" }}
    >
      <div
        className={`${slideStyle} flex flex-col items-center justify-center `}
      >
        <Greetings user={user} />

        <div className="control mt-4 bg-gray-800 p-4 rounded-xl">
          <ControlPanel  refetch={refetch} comments={comments} dreams={dreams} navState={setOffset} />
        </div>

        <div className=" h-64 p-8 mx-auto flex items-center justify-center bg-gray-800 mt-4 rounded-xl">
          {comments.length || dreams.length ? (
            <Doughnut
              data={data}
              options={{
                font: {
                  size: 64,
                },
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
                color: "#f97316",
              }}
            />
          ) : (
            <p className="text-2xl text-white font-bold ">
              {" "}
              Be sure to add your first dream or comment something!{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(MainSlide);
