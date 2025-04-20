function groupThePeople(groupSizes: number[]): number[][] {
  let result: number[][] = [];
  let cache = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    let temp = cache.get(groupSizes[i]);

    if (temp) {
      cache.set(groupSizes[i], [...temp, i]);
    } else {
      cache.set(groupSizes[i], [i]);
    }
  }

  for (let [key, value] of cache) {
    if (value.length > key) {
      for (let i = 0; i < value.length; i + key) {
        result.push(value.splice(i, i + key));
      }
    } else {
      result.push(value);
    }
  }

  return result;
}
