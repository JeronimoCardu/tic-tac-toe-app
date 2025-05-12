import useMarkStore from "../hooks/useMarkStore";

type Props = {
  mode: string;
};

export default function States({ mode }: Props) {
  const markSelected = useMarkStore((state) => state.markSelected);
  const statesGame = useMarkStore((state) => state.statesGame);

  return (
    <div className="mx-6 my-4 flex justify-between gap-4">
      <div className="bg-lightBlue text-dark body flex h-[4em] w-full flex-col items-center justify-center rounded-[10px] p-4">
        <p>{markSelected.toUpperCase()} (YOU)</p>
        <p className="outfitBold">
          {mode == "cpu" ? statesGame.winsYou : statesGame.winsP1}
        </p>
      </div>
      <div className="bg-silver text-dark body flex h-[4em] w-full flex-col items-center justify-center rounded-[10px] p-4">
        <p>TIES</p>
        <p className="outfitBold">
          {mode == "cpu" ? statesGame.tiesCPU : statesGame.tiesVS}
        </p>
      </div>
      <div className="bg-orange text-dark body flex h-[4em] w-full flex-col items-center justify-center rounded-[10px] p-4">
        <p>
          {markSelected == "x" ? "O" : "X"} ({mode == "cpu" ? "CPU" : "P2"})
        </p>
        <p className="outfitBold">
          {mode == "cpu" ? statesGame.winsCPU : statesGame.winsP2}
        </p>
      </div>
    </div>
  );
}
