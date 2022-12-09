import ControlPanel from "./controlPanel";
import Greetings from "./greetings";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { slideStyle } from "./personalLayout";

const MainSlide = ({ createdAt, setOffset, name, data }) => {
  return (
    <div className="w-screen h-screen bg-red-900   ">
      <div className={`${slideStyle} bg-blue-400`}>
        <Greetings createdAt={createdAt} name={name} />

        <div className="control mt-4">
          <ControlPanel navState={setOffset} />
        </div>

        <div className="w-64 h-64 p-8 mx-auto">
          <Doughnut
            data={data}
            options={{
              font: {
                size: 18,
              },
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MainSlide;
