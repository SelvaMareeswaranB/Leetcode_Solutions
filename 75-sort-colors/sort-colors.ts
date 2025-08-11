/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low = 0, high = nums.length - 1, mid = 0
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            mid++
            low++
        }
        else if (nums[mid] === 1) mid++
        else {
           [nums[high],nums[mid]] = [nums[mid],nums[high]]
           high--
        }
    }
};