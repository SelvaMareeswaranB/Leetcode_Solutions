function shuffle(nums: number[], n: number): number[] {
    for (let i = 0; i < n; i++) {
        nums[i + n] += nums[i] * 10000
    }
    for (let i = 0; i < n; i++) {
        nums[2 * i] = Math.floor(nums[i + n] / 10000)
        nums[(2 * i) + 1] = nums[i + n] % 10000;
    }
    return nums
};