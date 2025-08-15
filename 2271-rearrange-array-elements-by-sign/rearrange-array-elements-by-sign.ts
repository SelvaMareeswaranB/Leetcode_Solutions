function rearrangeArray(nums: number[]): number[] {
    let posIndex = 0
    let negIndex = 1
    let ans: number[] = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            ans[negIndex] = nums[i]
            negIndex += 2
        } else {
            ans[posIndex] = nums[i]
            posIndex += 2
        }
    }
    return ans
};