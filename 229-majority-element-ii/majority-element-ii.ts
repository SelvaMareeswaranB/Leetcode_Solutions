function majorityElement(nums: number[]): number[] {
  let count1 = 0,
    count2 = 0;
  let ele1: number = -Infinity;
  let ele2: number = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (count1 === 0 && ele2 !== nums[i]) {
      count1++;
      ele1 = nums[i];
    } else if (count2 === 0 && ele1 !== nums[i]) {
      count2++;
      ele2 = nums[i];
    } else if (ele1 === nums[i]) count1++;
    else if (ele2 === nums[i]) count2++;
    else {
      count1--;
      count2--;
    }
  }

  (count1 = 0), (count2 = 0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === ele1) count1++;
    if (nums[i] === ele2) count2++;
  }
  let ans: number[] = [];
  let boundary = Math.floor(nums.length / 3 + 1)

  if (boundary <= count1) ans.push(ele1);
  if (boundary <= count2) ans.push(ele2);

  return ans;
}