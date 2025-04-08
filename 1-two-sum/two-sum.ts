function twoSum(nums: number[], target: number): number[] {
    let result: number[] = []
    let cache = new Map<string, number>()
    for (let i = 0; i < nums.length; i++) {
        let secondVar = target - nums[i]
        let value = cache.get(String(secondVar))

        if (value !== undefined) {
            result = [value, i]
            break;
        }
        else {
            cache.set(String(nums[i]), i)
        }

    }
    return result
};