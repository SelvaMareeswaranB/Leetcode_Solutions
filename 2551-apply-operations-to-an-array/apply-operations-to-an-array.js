/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
      let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] &&i < nums.length - 1) {
        nums[i] = nums[i] * 2;
        nums[i + 1] = 0;
      }
    if (nums[i] !== 0) {
      [nums[i], nums[l]] = [nums[l], nums[i]];
      l++;
    }
  }
  return nums;
};