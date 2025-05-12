import useMarkStore from "../hooks/useMarkStore";
import BtnSecond1 from "./BtnSecond1";
import BtnSecond2 from "./BtnSecond2";

export default function ModalWin() {
  const viewModalWin = useMarkStore((state) => state.viewModalWin);
  return (
    <div className="bg-semiDark absolute top-1/2 -translate-y-1/4 left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-2 py-10">
      <p
        className={`${viewModalWin.winner == "ties" && "hidden"} text-silver headingXS`}
      >
        {viewModalWin.msg}
      </p>
      <div className="flex items-center">
        {viewModalWin.winner == "x" ? (
          <svg
            className="scale-75"
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
              fill="#31C3BD"
              fillRule="evenodd"
            />
          </svg>
        ) : viewModalWin.winner == "o" ? (
          <svg
            className="scale-75"
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
              fill="#F2B137"
            />
          </svg>
        ) : (
          ""
        )}
        <p
          className={`${viewModalWin.winner == "ties" && "text-silver"} headingM ${viewModalWin.winner == "o" && "text-orange"} ${viewModalWin.winner == "x" && "text-lightBlue"}`}
        >
          {viewModalWin.winner == "ties" ? viewModalWin.msg : "TAKES THE ROUND"}
        </p>
      </div>
      <div className="flex gap-4">
        <BtnSecond2 />
        <BtnSecond1 />
      </div>
    </div>
  );
}
