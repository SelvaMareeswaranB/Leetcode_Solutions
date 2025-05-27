function differenceOfSums(n: number, m: number): number {
    let num1 = 0
    let num2 = 0
    // if (n < m) {
    //     return n * (n + 1) / 2
    // }
    for (let i = 1; i <= n; i++) {
        i % m !== 0 ? num1 += i : num2 += i

    }

    return num1 - num2
};