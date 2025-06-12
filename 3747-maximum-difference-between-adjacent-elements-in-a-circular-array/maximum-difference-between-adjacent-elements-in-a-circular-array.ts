function maxAdjacentDistance(nums: number[]): number {
    let diff=0
    for(let i=0;i<nums.length;i++){
        diff=Math.max(Math.abs(nums[i]-nums[(i+1)%nums.length]),diff)
    }

    return diff
};