import { NavLink } from "react-router-dom";

export default function ButtonPlayer() {
  return (
    <NavLink
      className="headingXS transition-colors  duration-200 hover:bg-lightBlueHover text-dark bg-lightBlue w-full cursor-pointer rounded-[1rem] py-4 shadow-[0px_.75em_0px_#118C87]"
      to={"/vs"}
    >
      NEW GAME (VS PLAYER)
    </NavLink>
  );
}
