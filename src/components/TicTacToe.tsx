import { useEffect } from "react";
import useMarkStore from "../hooks/useMarkStore";
import logic from "../utils/logic";

type Props = {
  mode: string;
};

export default function TicTacToe({ mode }: Props) {
  const turnNow = useMarkStore((state) => state.turnNow);
  const setTurnNow = useMarkStore((state) => state.setTurnNow);
  const results = useMarkStore((state) => state.results);
  const setResults = useMarkStore((state) => state.setResult);
  const markSelected = useMarkStore((state) => state.markSelected);
  const setStatesGame = useMarkStore((state) => state.setStatesGame);

  useEffect(() => {
    if (logic(results) == "x") {
      if(markSelected == "x"){
        setStatesGame(mode == "cpu" ? "winsYou" : "winsP1")
      } else{
        setStatesGame(mode == "cpu" ? "winsCPU" : "winsP2")
      }
    }
    if (logic(results) == "o") {
      if(markSelected == "o"){
        setStatesGame(mode == "cpu" ? "winsYou" : "winsP1")
      } else{
        setStatesGame(mode == "cpu" ? "winsCPU" : "winsP2")
      }
    }
    if (results.every((r) => r.value))
      setStatesGame(mode == "cpu" ? "tiesCPU" : "tiesVS");
  }, [results]);
  return (
    <section className="grid h-full w-full grid-cols-3 grid-rows-3 gap-4 p-6">
      {results.map((res, index) => (
        <div
          onClick={() => {
            if (!results.every((r) => r.value) && !results[index].value && logic(results) == "") {
              setResults(index);
              setTurnNow(turnNow == "x" ? "o" : "x");
            }
          }}
          key={index}
          className="ticTacToeBox relative"
        >
          {res.value && res.mark == "x" ? (
            <svg
              className="fill-lightBlue absolute right-1/2 translate-x-1/2 cursor-pointer hover:fill-none"
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"
                stroke="#31C3BD"
                strokeWidth="2"
              />
            </svg>
          ) : res.value && res.mark == "o" ? (
            <svg
              className="fill-orange absolute right-1/2 translate-x-1/2 cursor-pointer hover:fill-none"
              width="66"
              height="66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                stroke="#F2B137"
                strokeWidth="2"
              />
            </svg>
          ) : (
            ""
          )}
        </div>
      ))}
    </section>
  );
}
