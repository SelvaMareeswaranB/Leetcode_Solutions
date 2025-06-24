function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const keyIndices: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }

  const resultSet = new Set<number>();

  for (const idx of keyIndices) {
    const start = Math.max(0, idx - k);
    const end = Math.min(nums.length - 1, idx + k);

    for (let i = start; i <= end; i++) {
      resultSet.add(i);
    }
  }

  return Array.from(resultSet).sort((a, b) => a - b);
}
