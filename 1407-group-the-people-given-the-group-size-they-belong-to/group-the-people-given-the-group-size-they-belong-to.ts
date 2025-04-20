function groupThePeople(groupSizes: number[]): number[][] {
  let cache: { [key: number]: number[][] } = {};
  for (let i = 0; i < groupSizes.length; i++) {
    let groupSize = groupSizes[i];
    if (!cache[groupSize]) {
      cache[groupSize] = [[]];
    }
    let arr = cache[groupSize][cache[groupSize].length - 1];
    if (arr.length === groupSize) {
      cache[groupSize].push([i]);
    } else {
      arr.push(i);
    }
  }
  let result = Object.values(cache).flat();
  return result;
}