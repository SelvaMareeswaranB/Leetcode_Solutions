/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
    let length = s.length
    let i = 1
    let j = 0
    let lps = new Array(length).fill(0);
    while (i < length) {
        if (s[i] === s[j]) {
            lps[i] = j + 1

            i++
            j++
        }
        else {
            if (j !== 0) {
                j = lps[j - 1]
            }
            else {
                lps[i] = 0
                i++
            }
        }
    }
    let happyPrefix = s.substring(0, lps[length - 1]);
    return happyPrefix
};