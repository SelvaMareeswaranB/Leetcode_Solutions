function checkPerfectNumber(num: number): boolean {
    let total = 0
    if (num < 0) return false
    for (let i = 1; i < Math.sqrt(num); i++) {
        if (num % i === 0) {

            total += i
            if (num / i !== i && num / i !== num) {
                total += num / i

            }
        }
    }
    return total === num
};