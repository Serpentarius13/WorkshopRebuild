const ControlPanel = ({ navState }) => {
  return (
    <>
      <h2 className='text-center font-bold text-3xl cursor-default'> Control panel: </h2>
      <div className="min-h-[30%] w-[95%] mx-auto grid grid-cols-2 gap-4 p-6">
        <button
          className="px-6 py-3 bg-purple-800 text-white"
          onClick={() => navState(33.333)}
        >
          {" "}
          Your dreams
        </button>
        <button
          className="px-6 py-3 bg-blue-500 text-white"
          onClick={() => navState(66.666)}
        >
          {" "}
          Your comments
        </button>

        <button className="px-4 py-2 bg-slate-600 text-white col-span-2">
          {" "}
          Set all dreams private{" "}
        </button>

        <button className="px-4 py-2 bg-red-600 text-white">
          {" "}
          Delete all dreams{" "}
        </button>
        <button className="px-4 py-2 bg-orange-600 col-span-1 text-white">
          {" "}
          Delete all comments{" "}
        </button>
      </div>
    </>
  );
};
export default ControlPanel;
