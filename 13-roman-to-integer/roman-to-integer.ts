function romanToInt(s: string): number {
  let total = 0;
  let cache: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i = 0;
  while (i < s.length) {
    if (i + 1 < s.length && cache[s[i]] < cache[s[i + 1]]) {
      total += cache[s[i + 1]] - cache[s[i]];
      i += 2;
    } else {
      total += cache[s[i]];
      i++;
    }
  }
  return total;
}
