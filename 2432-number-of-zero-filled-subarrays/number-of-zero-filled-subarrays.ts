function zeroFilledSubarray(nums: number[]): number {
    let count = 0;
    let zeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros++;
            count+=zeros
        } else {

            zeros = 0;
        }
    }
    return count;
}