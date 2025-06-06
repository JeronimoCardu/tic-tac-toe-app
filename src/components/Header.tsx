import useMarkStore from "../hooks/useMarkStore";
import ResetBtn from "./ResetBtn";

export default function Header() {
  const turnNow = useMarkStore((state) => state.turnNow);
  return (
    <header className="flex h-fit items-center justify-between p-6">
      <svg width="72" height="32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z"
            fill="#31C3BD"
          />
          <path
            d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z"
            fill="#F2B137"
            fillRule="nonzero"
          />
        </g>
      </svg>
      <div className="bg-semiDark text-silver fill-silver headingXS flex h-[3em] cursor-default items-center rounded-[5px] shadow-[0px_.5rem_0px_#10212A]">
        {turnNow == "x" ? (
          <svg
            className="scale-40"
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z" />
          </svg>
        ) : (
          <svg
            className="scale-40"
            width="66"
            height="66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
          </svg>
        )}
        <p className="pr-4">TURN</p>
      </div>
      <ResetBtn />
    </header>
  );
}
