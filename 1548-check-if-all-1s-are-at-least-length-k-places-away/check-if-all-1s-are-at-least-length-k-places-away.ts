function kLengthApart(nums: number[], k: number): boolean {
  let lastAppeared = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (lastAppeared !== -1 && i - lastAppeared - 1 < k) return false;
      lastAppeared = i;
    }
  }
  return true;
}