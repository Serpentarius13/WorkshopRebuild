interface ButtonCollapseProps {
  handler?: () => null;
  state?: boolean;
}

const ButtonCollapse = ({ handler, state }) => {
  const spanStyle = `border-4 border-red rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all   `;
  return (
    <button
      onClick={(e) => handler((state) => !state)}
      className={`btn-nav-collapse  w-4 xl:hidden bg-cyan-900  !z-[500] relative ${
        state ? "!block fixed " : ""
      }`}
    >
      <span
        className={`${state ? "w-2 h-2" : "w-10 h-10"} ${spanStyle}`}
      ></span>
      <span className={`${state ? "w-6 h-6" : "w-6 h-6"} ${spanStyle}`}></span>
    </button>
  );
};
export default ButtonCollapse;
