function numSubarraysWithSum(nums: number[], goal: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    
    for (let j = i; j < nums.length; j++) {
  
      if (nums[j] === 1) sum++;
      if (sum === goal) count++;
      if (sum > goal) break
    }
  }
  return count;
}
