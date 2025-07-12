function totalFruit(fruits: number[]): number {
  let maxLen = 0;
  let l = 0;
  let r = 0;
  let cache = new Map<number, number>();

  while (r < fruits.length) {
    if (!cache.has(fruits[r]) && cache.size >= 2) {
      let minIndex = Infinity;
      let fruitToDelete: number = -1;

      for (let [fruit, index] of cache.entries()) {
        if (index < minIndex) {
          minIndex = index;
          fruitToDelete = fruit;
        }
      }

      l = minIndex + 1;
      cache.delete(fruitToDelete);
    }

    cache.set(fruits[r], r);

    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }

  return maxLen;
}
