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
    <div className="relative">
      {viewModalWin.view && <ModalWin />}
      <Header />
      <TicTacToe mode={mode} />
      <States mode={mode} />
    </div>
  );
}
