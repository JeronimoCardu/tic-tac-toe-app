import useMarkStore from "../hooks/useMarkStore";

export default function ChoiceMark() {
  const markSelected = useMarkStore((state) => state.markSelected);
  const setMarkSelected = useMarkStore((state) => state.setMarkSelected);
  return (
    <div
      onClick={() =>
        markSelected == "x" ? setMarkSelected("o") : setMarkSelected("x")
      }
      className="bg-dark my-4 grid cursor-pointer grid-cols-2 gap-x-2 rounded-[10px] p-2"
    >
      <div
        className={`${
          markSelected == "x" ? "bg-silver" : "hover:bg-[rgba(168,191,201,.05)]"
        } flex items-center justify-center rounded-[10px] transition-colors duration-200`}
      >
        <svg
          className="scale-50"
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z"
            className={`${markSelected == "x" ? "fill-dark" : "fill-silver"} `}
          />
        </svg>
      </div>
      <div
        className={`${
          markSelected == "o" ? "bg-silver" : "hover:bg-[rgba(168,191,201,.05)]"
        } flex items-center justify-center rounded-[10px] transition-colors duration-200`}
      >
        <svg
          className="scale-50"
          width="66"
          height="66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
            className={`${markSelected == "o" ? "fill-dark" : "fill-silver"}`}
          />
        </svg>
      </div>
    </div>
  );
}
