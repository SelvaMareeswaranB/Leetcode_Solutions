function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0
    let max = 0
    for(let i =0;i<nums.length;i++){
        if(nums[i] ===0){
            max=Math.max(count,max)
            count=0;
        }
        else{
            count++;
        }
    }
    max = Math.max(count,max)
    return max
};