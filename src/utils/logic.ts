export default function (table: { value: boolean; mark: string }[]) {
  let winner = "";
  if (table[0].mark == table[1].mark && table[2].mark == table[0].mark)
    winner = table[0].mark;
  if (table[3].mark == table[4].mark && table[5].mark == table[3].mark)
    winner = table[3].mark;
  if (table[6].mark == table[7].mark && table[8].mark == table[6].mark)
    winner = table[6].mark;
  if (table[0].mark == table[3].mark && table[6].mark == table[0].mark)
    winner = table[0].mark;
  if (table[1].mark == table[4].mark && table[7].mark == table[1].mark)
    winner = table[1].mark;
  if (table[2].mark == table[5].mark && table[8].mark == table[2].mark)
    winner = table[2].mark;
  if (table[0].mark == table[4].mark && table[8].mark == table[0].mark)
    winner = table[0].mark;
  if (table[2].mark == table[4].mark && table[6].mark == table[2].mark)
    winner = table[2].mark;
  return winner
}
