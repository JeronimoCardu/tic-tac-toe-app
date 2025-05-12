import Header from "../../components/Header";
import States from "../../components/States";
import TicTacToe from "../../components/TicTacToe";

type Props = {
  mode: string;
};

export default function Play({ mode }: Props) {
  return (
    <div>
      <Header />
      <TicTacToe mode={mode} />
      <States mode={mode} />
    </div>
  );
}
