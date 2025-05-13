export default function cpuLogic(
  table: { value: boolean; mark: string }[],
  cpuMark: "x" | "o",
  index: number | undefined,
): number {
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

  const playerMark = cpuMark === "x" ? "o" : "x";

  // 1. Intentar ganar
  for (const [a, b, c] of winPatterns) {
    const line = [table[a], table[b], table[c]];
    const values = line.map((cell) => cell.mark);

    const countCPU = values.filter((v) => v === cpuMark).length;
    const countEmpty = line.filter((cell) => !cell.value).length;

    if (countCPU === 2 && countEmpty === 1) {
      if (!table[a].value && index != a) return a;
      if (!table[b].value && index != b) return b;
      if (!table[c].value && index != c) return c;
    }
  }

  // 2. Bloquear jugador
  for (const [a, b, c] of winPatterns) {
    const line = [table[a], table[b], table[c]];
    const values = line.map((cell) => cell.mark);

    const countPlayer = values.filter((v) => v === playerMark).length;
    const countEmpty = line.filter((cell) => !cell.value).length;

    if (countPlayer === 2 && countEmpty === 1) {
      if (!table[a].value && index != a) return a;
      if (!table[b].value && index != b) return b;
      if (!table[c].value && index != c) return c;
    }
  }

  // 3. Centro
  if (!table[4].value && index != 4) return 4;

  // 4. Esquinas
  const corners = [0, 2, 6, 8];
  for (const i of corners) {
    if (!table[i].value && index != i) return i;
  }

  // 5. Cualquier otro disponible
  for (let i = 0; i < table.length; i++) {
    if (!table[i].value && index != i) return i;
  }

  return -1; // No hay movimientos posibles
}
