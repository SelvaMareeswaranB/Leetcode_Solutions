function topKFrequent(nums: number[], k: number): number[] {
    let cache = new Map();
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (cache.has(nums[i])) {
            let count = cache.get(nums[i]);
            count++;

            cache.set(nums[i], count);
        }
        else {
            cache.set(nums[i], 1);
        }

    }
    const sortedMap = new Map([...cache].sort((a, b) => b[1] - a[1]));
    const resultant = [...sortedMap]

    for (let i = 0; i < k; i++) {
        result.push(resultant[i][0])
    }

    return result;
}