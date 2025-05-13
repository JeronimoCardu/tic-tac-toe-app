import { NavLink } from "react-router-dom";
import useMarkStore from "../hooks/useMarkStore";

export default function BtnSecond1() {
  const setViewModalWin = useMarkStore((state) => state.setViewModalWin);
  const setResults = useMarkStore((state) => state.setResults);
  const setTurnNow = useMarkStore((state) => state.setTurnNow);
  return (
    <NavLink
      onClick={() => {
        setResults(99);
        setViewModalWin({ view: false, winner: "", msg: "", mode: "" });
        setTurnNow("x");
      }}
      to={"/"}
      className="bg-orange headingXS hover:bg-orangeHover rounded-[10px] p-4 shadow-[0px_.5em_0px_#CC8B13]"
    >
      NEXT ROUND
    </NavLink>
  );
}
