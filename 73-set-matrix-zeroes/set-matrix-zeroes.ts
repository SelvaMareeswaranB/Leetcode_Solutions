function setZeroes(matrix: number[][]): void {
  const n = matrix.length;
  const m = matrix?.[0].length;
  let col1 = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        if (j != 0) matrix[0][j]=0;
        else col1 = 0;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) matrix[0][j] = 0;
  }

  if (col1 === 0) {
    for (let i = 0; i < n; i++) matrix[i][0] = 0;
  }
}
