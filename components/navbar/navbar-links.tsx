import Links from "./links.component";

const NavBarLinks = ({ setExpanded }) => {
  return (
    <div
      onClick={() => setExpanded()}
      className="nav-links w-screen text-center absolute z-10 flex flex-col space-y-7 items-center justify-center top-0 left-0  bg-gray-200"
    >
      <Links expanded={true} />
    </div>
  );
};
export default NavBarLinks;
