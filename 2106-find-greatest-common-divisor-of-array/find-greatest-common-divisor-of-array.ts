function findGCD(nums: number[]): number {
    let s = Math.min(...nums)
    let l = Math.max(...nums)

    function euclid(a, b) {
        if (b === 0) return a

        return euclid(b, a % b)

    }

    return euclid(l, s)
};