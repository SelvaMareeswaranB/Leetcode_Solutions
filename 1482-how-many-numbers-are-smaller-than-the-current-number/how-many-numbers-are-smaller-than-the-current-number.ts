function smallerNumbersThanCurrent(nums: number[]): number[] {
  let count = countSort(nums)
  for(let i=0;i<nums.length;i++){
    nums[i]=count[nums[i]]
  }
  console.log(nums)
  return nums;
}

function countSort(nums: number[]): number[] {
  let count=Array(findMax(nums)).fill(0)
  for(let i=0;i<nums.length;i++){
    count[nums[i]]++
  }
  let prefix=0
  for(let i=0;i<count.length;i++){
     if(count[i] !==0){
      let temp = count[i]
      count[i]=prefix
      prefix+=temp
     }
  }
  return count;
}

function findMax(nums: number[]): number {
  let max: number = -1000;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  return max+1;
}