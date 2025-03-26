/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
    let flatGrid = grid.flat();

    flatGrid.sort((a, b) => a - b);
    console.log(flatGrid);
    let length = flatGrid.length - 1;
    let medianIndex = Math.floor(flatGrid.length / 2);
    let target = flatGrid[medianIndex];
    let operations = 0;
    for (let i = 0; i <= length; i++) {

        let differnece = Math.abs(flatGrid[i] - target);

        if (differnece % x !== 0) return -1;

        let temp = differnece / x;
        operations = operations + temp;
    }
    return operations;
};