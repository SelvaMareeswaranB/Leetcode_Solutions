function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; 

  reverse(nums, 0, n - 1);    
  reverse(nums, 0, k - 1);    
  reverse(nums, k, n - 1);

  console.log(nums);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
