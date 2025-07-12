function totalFruit(fruits: number[]): number {
  let maxLen = 0;
  let l = 0;
  let r = 0;
  let cache = new Map<number, number>();

  while (r < fruits.length) {
    cache.set(fruits[r], (cache.get(fruits[r]) ?? 0) + 1);
    if (cache.size > 2) {
      cache.set(fruits[l], (cache.get(fruits[l]) ?? 0) - 1);
      if (cache.get(fruits[l]) === 0) {
        cache.delete(fruits[l]);
      }
      l++;
    }
    if (cache.size <= 2) {
      maxLen = Math.max(r - l + 1, maxLen);
    }
    r++
  }

  return maxLen;
}
