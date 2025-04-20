function numRabbits(answers: number[]): number {
  let result = 0;
  let cache: { [key: number]: number[][] } = {};
  for (let i = 0; i < answers.length; i++) {
    let rabitGroup = answers[i] + 1;
    if (!cache[rabitGroup]) cache[rabitGroup] = [[]];
    let arr: number[] = cache[rabitGroup][cache[rabitGroup].length - 1];
    if (arr.length === rabitGroup) {
      cache[rabitGroup].push([i]);
    } else {
      arr.push(i);
    }
  }

  for (const property in cache) {
    result = result + Number(property) * cache[property].length;
  }

  return result;
}