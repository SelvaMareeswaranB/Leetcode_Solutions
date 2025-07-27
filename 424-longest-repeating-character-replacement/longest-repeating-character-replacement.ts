function characterReplacement(s: string, k: number): number {
  let l = 0,
    r = 0;
  let maxLen = 0;
  let maxFreq = 0;
  const hash = Array(26).fill(0);

  while (r < s.length) {
    const idx = s[r].charCodeAt(0) - "A".charCodeAt(0);
    hash[idx]++;
    maxFreq = Math.max(maxFreq, hash[idx]);

    if (r - l + 1 - maxFreq > k) {
      hash[s[l].charCodeAt(0) - "A".charCodeAt(0)]--;
      l++;
    }
    if (r - l + 1 - maxFreq <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }

  return maxLen;
}