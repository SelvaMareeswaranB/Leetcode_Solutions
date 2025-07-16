function numberOfSubstrings(s: string): number {
  let count = 0;
  let ls = Array(3).fill(-1);
  for (let i = 0; i < s.length; i++) {
    ls[s[i].charCodeAt(0) - "a".charCodeAt(0)] = i;
    if (ls[0] !== -1 && ls[1] !== -1 && ls[2] !== -1) {
      count = count + (1 + Math.min(ls[0], ls[1], ls[2]));
    }
  }

  return count;
}