function zeroFilledSubarray(nums: number[]): number {
  let count = 0;
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    } else {
      console.log(zeros);
      count += (zeros * (zeros + 1)) / 2;
      zeros = 0;
    }
  }
  if (zeros) count += (zeros * (zeros + 1)) / 2;
  return count;
}