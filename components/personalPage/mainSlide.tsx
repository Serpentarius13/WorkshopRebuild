import ControlPanel from "./controlPanel";
import Greetings from "./greetings";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { slideStyle } from "./personalLayout";

import { memo, useRef, useEffect } from "react";

import counterFunction from "../../utils/counter";

const MainSlide = ({
  setOffset,
  user,
  data: { comments, dreams },
  refetch,
  rating,
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

  const ref = useRef<any>(null);

  useEffect(() => {
    counterFunction(ref, rating);
  }, []);
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
          <ControlPanel
            refetch={refetch}
            comments={comments}
            dreams={dreams}
            navState={setOffset}
          />
        </div>

        <div className=" h-64 p-8 mx-auto flex items-center justify-center bg-gray-800 mt-4 rounded-xl space-x-4">
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
         
            {" "}
            <div> 
              <p className='pb-2 text-2xl font-bold text-white'> Your rating: </p>
            <p ref={ref} className="text-white text-center text-3xl">
              {" "}
              0{" "}
            </p>{" "}
            </div>
     
        </div>
      </div>
    </div>
  );
};
export default memo(MainSlide);
