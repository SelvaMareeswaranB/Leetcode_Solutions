function removeDuplicates(nums: number[]): number {
    let j = 2
    for(let i =2 ;i <nums.length;i++){
        if(nums[j-2] !==nums[i]){
            nums[j]=nums[i]
            j++
        }
    }
    return j
};