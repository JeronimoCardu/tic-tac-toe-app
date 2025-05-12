import { create } from "zustand";

type MarkProps = {
  markSelected: string;
  setMarkSelected: (mark: string) => void;
  turnNow: string;
  setTurnNow: (turn: string) => void;
  results: { value: boolean; mark: string }[];
  setResults: (indexBox: number) => void;
  viewModalWin: {
    view: boolean;
    winner: string;
    msg: string;
    mode: string;
  };
  setViewModalWin: (modalWin: {
    view: boolean;
    winner: string;
    msg: string;
    mode: string;
  }) => void;
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
    { value: false, mark: "0" },
    { value: false, mark: "1" },
    { value: false, mark: "2" },
    { value: false, mark: "3" },
    { value: false, mark: "4" },
    { value: false, mark: "5" },
    { value: false, mark: "6" },
    { value: false, mark: "7" },
    { value: false, mark: "8" },
  ],
  setResults: (indexBox: number) =>
    set((state) => ({
      results: state.results.map((res, index) =>
        index == indexBox && !res.value
          ? { value: true, mark: state.turnNow }
          : indexBox == 99
            ? { value: false, mark: String(index) }
            : res,
      ),
    })),
  viewModalWin: {
    view: false,
    winner: "",
    msg: "",
    mode: "",
  },
  setViewModalWin: (modalWin: {
    view: boolean;
    winner: string;
    msg: string;
    mode: string;
  }) => set({ viewModalWin: modalWin }),
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
