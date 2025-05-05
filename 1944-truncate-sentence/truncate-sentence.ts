function truncateSentence(s: string, k: number): string {
    if (k === s.length) return s
    let words = s.split(" ")

    let ans = ""
    for (let i = 0; i < k-1; i++) {
        ans += words[i] + " "
    }
    ans+=words[k-1]
    return ans
};