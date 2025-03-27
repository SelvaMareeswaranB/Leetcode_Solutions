/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
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

  let frequency = 0;
  for (let i = 0; i < length; i++) {
    nums[i] === element ? frequency++ : "";
  }

  if (!(frequency * 2 > length)) return -1;
  let splitIndex = -1;
  let currentFreq = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] === element) {
      currentFreq++;
      let currentLen = i + 1;
      if (currentFreq * 2 > currentLen) {
        let balanceLen = (length - i)-1;
        let balanceFreq = frequency - currentFreq;
        console.log(balanceLen,balanceFreq,length,i)
        if (balanceFreq * 2 > balanceLen) {
          splitIndex = i;
          break;
        }
      }
    }
  }

  return splitIndex; 
};