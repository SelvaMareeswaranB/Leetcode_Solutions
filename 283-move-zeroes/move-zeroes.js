/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length<=1) return nums;
    let l = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++;
        }
    }
    return nums;
};