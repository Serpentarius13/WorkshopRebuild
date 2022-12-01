import Links from "../links/links.component";

const NavBarLinks = () => {
  return (
    <div className="nav-links h-screen text-center absolute z-10 flex flex-col space-y-4 items-center justify-center top-0 left-0 bg-yellow-400">
      <Links expanded={true} />
    </div>
  );
};
export default NavBarLinks;
