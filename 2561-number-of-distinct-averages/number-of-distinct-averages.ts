function distinctAverages(nums: number[]): number {
    let len = nums.length -1 

    if(len<2) return 1
    nums.sort((a,b)=>a-b)
    let i=0;
    let j =len
    let ans= new Set()
    while(i<j){
      ans.add((nums[i]+nums[j])/2)
      i++
      j--
    }
    return ans.size
};