import Header from "../../components/Header";
import ModalWin from "../../components/ModalWin";
import States from "../../components/States";
import TicTacToe from "../../components/TicTacToe";
import useMarkStore from "../../hooks/useMarkStore";

type Props = {
  mode: string;
};

export default function Play({ mode }: Props) {
  const viewModalWin = useMarkStore((state) => state.viewModalWin);
  return (
    <>
      {viewModalWin.view && <ModalWin />}
      <div
        className={`${viewModalWin.view && "brightness-50 backdrop-brightness-50"} tablet:w-fit tablet:mx-auto tablet:scale-125 relative flex h-screen flex-col justify-center`}
      >
        <Header />
        <TicTacToe mode={mode} />
        <States mode={mode} />
      </div>
    </>
  );
}
