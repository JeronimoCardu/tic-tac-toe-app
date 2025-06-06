import { NavLink } from "react-router-dom";

export default function ButtonCPU() {
  return (
    <NavLink
      to={"/play"}
      className="headingXS hover:bg-orangeHover text-dark bg-orange w-full cursor-pointer rounded-[1rem] py-4 shadow-[0px_.75em_0px_#CC8B13] transition-colors duration-200"
    >
      NEW GAME (VS CPU)
    </NavLink>
  );
}
