function setZeroes(matrix) {

    let m = matrix.length
    let n = matrix?.[0]?.length
    let row = []
    let col = []

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row.push(i)
                col.push(j)
            }

        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
           if(row.includes(i) || col.includes(j)){
            console.log(i,j)
            matrix[i][j] =0
           }
        }
    }
    console.log(row, col,matrix)

};