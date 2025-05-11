import { create } from "zustand";

type MarkProps = {
  markSelected: string;
  setMarkSelected: (mark: string) => void;
  turnNow: string;
  setTurnNow: (turn: string) => void;
  results: { value: boolean; mark: string }[];
  setResult: (indexBox: number) => void;
  resetResult: (reset: { value: false; mark: "" }[]) => void;
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
          : res,
      ),
    })),
  resetResult: (reset: { value: false; mark: "" }[]) => set({ results: reset }),
}));

export default useMarkStore;
