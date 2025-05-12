import useMarkStore from "../hooks/useMarkStore";

export default function BtnSecond2() {
  const setViewModalWin = useMarkStore((state) => state.setViewModalWin);
  return (
    <button
      onClick={() =>
        setViewModalWin({ view: false, winner: "", msg: "", mode: "" })
      }
      className="bg-silver headingXS cursor-pointer rounded-[10px] p-4 shadow-[0px_.5em_0px_#6B8997]"
    >
      QUIT
    </button>
  );
}
