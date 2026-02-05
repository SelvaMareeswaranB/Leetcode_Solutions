type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
    arr: MultiDimensionalArray,
    n: number,
    depth: number = 0
): MultiDimensionalArray {
    let ans: MultiDimensionalArray = [];

    if (n === 0) return arr;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (Array.isArray(item) && depth < n) {
            ans.push(...flat(item, n, depth + 1));
        } else {
            ans.push(item);
        }
    }

    return ans;
};
