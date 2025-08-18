function nextPermutation(nums: number[]): void {
    let n = nums.length;
    let index = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        nums.reverse();
        return;
    }

    for (let i = n - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    let left = index + 1, right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
