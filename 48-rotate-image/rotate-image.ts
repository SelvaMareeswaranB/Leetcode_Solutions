/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let n = matrix.length;
  let m = matrix[0]?.length;

  for (let i = 0; i < n ; i++) {
    for (let j = i + 1; j < n ; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n ; i++) {
    matrix[i].reverse();
  }
  console.log(matrix)
}