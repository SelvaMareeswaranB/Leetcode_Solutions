function largestGoodInteger(num: string): string {
  let l = 0;
  let r = 1;
  let maxi = -1;
  while (r < num.length) {
    if (r - l + 1 === 3) {
      maxi = Math.max(Number(num[l]), maxi);
      if (maxi === 9) break;
    }
    if (num[l] === num[r]) {
      r++;
    }
    if (num[l] !== num[r]) {
      l = r;
      r++;
    }
  }
  return maxi !== -1 ? String(maxi) + maxi + maxi : "";
}