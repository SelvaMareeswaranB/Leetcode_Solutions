function spiralOrder(matrix: number[][]): number[] {
    const n = matrix.length
    const m = matrix[0]?.length ?? 0
    let left =0;
    let right = m-1;
    let bottom = n-1;
    let top = 0
    let ans=[]
    while(top<=bottom && left <= right){
        for(let i = left ; i<=right;i++){
               ans.push(matrix[top][i])
        }
        top++
        for(let i = top ; i<=bottom;i++){
            ans.push(matrix[i][right])
        }
        right--
        if(top<=bottom){
            for(let i=right;i>=left;i--){
                ans.push(matrix[bottom][i])
            }
            bottom --
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                ans.push(matrix[i][left])
            }
            left++
        }
    }
    return ans
};