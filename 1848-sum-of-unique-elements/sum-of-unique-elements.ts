function sumOfUnique(nums: number[]): number {
    let max = Math.max(...nums)
    let cache = new Array(max+1).fill(0)
      let result =0
    for(let i=0;i<nums.length;i++) cache[nums[i]]++
    for(let i=0;i<nums.length;i++){
        result += cache[nums[i]] === 1 ? nums[i] : 0
    }
  return result

};