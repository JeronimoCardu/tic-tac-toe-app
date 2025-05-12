import { create } from "zustand";

type MarkProps = {
  markSelected: string;
  setMarkSelected: (mark: string) => void;
  turnNow: string;
  setTurnNow: (turn: string) => void;
  results: { value: boolean; mark: string }[];
  setResult: (indexBox: number) => void;
  viewModalWin: [boolean, string];
  setViewModalWin: (show: boolean, winner: string) => void;
  statesGame: {
    winsYou: number;
    winsP1: number;
    winsP2: number;
    winsCPU: number;
    tiesCPU: number;
    tiesVS: number;
  };
  setStatesGame: (
    prop: "winsYou" | "winsP1" | "winsP2" | "winsCPU" | "tiesCPU" | "tiesVS",
  ) => void;
};

const useMarkStore = create<MarkProps>((set) => ({
  markSelected: "x",
  setMarkSelected: (mark: string) => set({ markSelected: mark }),
  turnNow: "x",
  setTurnNow: (turn: string) => set({ turnNow: turn }),
  results: [
    { value: false, mark: "" },
    { value: false, mark: "" },
    { value: false, mark: "" },
    { value: false, mark: "" },
    { value: false, mark: "" },
    { value: false, mark: "" },
    { value: false, mark: "" },
    { value: false, mark: "" },
    { value: false, mark: "" },
  ],
  setResult: (indexBox: number) =>
    set((state) => ({
      results: state.results.map((res, index) =>
        index == indexBox && !res.value
          ? { value: true, mark: state.turnNow }
          : indexBox == 99
            ? { value: false, mark: "" }
            : res,
      ),
    })),
  viewModalWin: [false, ""],
  setViewModalWin: (show: boolean, winner: string) =>
    set({ viewModalWin: [show, winner] }),
  statesGame: {
    winsYou: 0,
    winsP1: 0,
    winsP2: 0,
    winsCPU: 0,
    tiesCPU: 0,
    tiesVS: 0,
  },
  setStatesGame: (prop: keyof MarkProps["statesGame"]) =>
    set((state) => ({
      statesGame: {
        ...state.statesGame,
        [prop]: state.statesGame[prop] + 1,
      },
    })),
}));

export default useMarkStore;
