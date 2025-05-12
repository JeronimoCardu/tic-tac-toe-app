export default function (table: { value: boolean; mark: string }[]) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of winPatterns) {
    if (
      table[a].value &&
      table[b].value &&
      table[c].value &&
      table[a].mark == table[b].mark &&
      table[b].mark == table[c].mark
    ) {
      return table[a].mark;
    }
  }
  return "";
}
