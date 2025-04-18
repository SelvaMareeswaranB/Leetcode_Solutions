function isValidSudoku(board: string[][]): boolean {
  let result = true;
  let cache = new Map();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let temp = cache.get(board[i][j]);
      if (board[i][j] === ".") continue;
      if (temp) {
        for (let k = 0; k < temp.length; k++) {
        
          if (
            i === temp[k][0] || 
            j === temp[k][1] || 
            (Math.floor(i / 3) === Math.floor(temp[k][0] / 3) && Math.floor(j / 3) === Math.floor(temp[k][1] / 3))
          )
           {
            result = false;
            break;
          }
        }
        cache.set(board[i][j], [...temp, [i, j]]);
      } else {
        cache.set(board[i][j], [[i, j]]);
      }
    }
  }

  return result;
}

