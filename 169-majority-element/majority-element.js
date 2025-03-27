/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      let length = nums.length;
  let element;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (count === 0) {
      count = 1;
      element = nums[i];
    } else if (nums[i] === element) {
      count++;
    } else {
      count--;
    }
  }

  let frequency = 0
  for(let i=0;i<length;i++){
    nums[i] === element ? frequency++ : ""
  }
  let result=frequency*2 > length ? element : -1
  return result
};