function maximumDifference(nums: number[]): number {
  let minVal = nums[0]
  let maxDiff = -1
  for(let num of nums){
    num<=minVal ? minVal=num : maxDiff = Math.max(num-minVal,maxDiff)
  } 
  return maxDiff
};