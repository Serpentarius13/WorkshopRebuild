interface ButtonCollapseProps {
  handler?: () => null;
  state?: boolean;
}

const ButtonCollapse = ({ handler, state }) => {
  const divStyle = `border-4 border-red rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all`;
  return (
    <button
      onClick={(e) => handler((state) => !state)}
      className={`btn-nav-collapse  w-4 xl:hidden bg-cyan-900 z-20 relative ${
        state ? "shown " : ""
      }`}
    >
      <div className={`${state ? "w-4 h-4" : "w-14 h-14"} ${divStyle}`}></div>
      <div className={`${state ? "w-8 h-8" : "w-8 h-8"} ${divStyle}`}></div>
    </button>
  );
};
export default ButtonCollapse;
