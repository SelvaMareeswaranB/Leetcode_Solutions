function maxAscendingSum(nums: number[]): number {
     var maxSum = Number.MIN_VALUE;
  var currentSum = 0;
  for (var i = 0; i < nums.length ; i++) {
    if (nums[i] < nums[i + 1]) {
        console.log(nums[i])
      currentSum = currentSum + nums[i];
      maxSum = Math.max(currentSum, maxSum);
    } else {
      
      currentSum = currentSum + nums[i];
      maxSum = Math.max(currentSum, maxSum);
      currentSum = 0;
    }
  }
  return maxSum; 
};