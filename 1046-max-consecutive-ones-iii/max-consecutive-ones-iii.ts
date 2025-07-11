function longestOnes(nums: number[], k: number): number {
  let maxLen = 0;
  let l = 0;
  let r = 0;
  let zero = 0;
  while (r < nums.length) {
    if (nums[r] === 0) {
      zero++;
    }
    while (zero > k) {
      if (nums[l] === 0) {
        zero--;
      } 
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
}