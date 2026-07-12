function maxSubArray(nums) {

    let sum = 0
    let maxSum = -Infinity
    for (let el of nums) {
        if (sum < 0) {
            sum = 0
        }
        sum += el
        maxSum = Math.max(sum, maxSum)
    }

    return maxSum

};