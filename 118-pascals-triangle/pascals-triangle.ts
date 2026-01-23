function generate(numRows: number): number[][] {
    if(numRows < 1) return []
    let ans=[[1]];
    for(let i=1;i<numRows;i++){
        let row=[1]
        for(let j=1;j<i;j++){
         
            row[j] = ans[i-1][j-1] + ans[i-1][j]
        }
        row[i] = 1
        ans.push(row)
    }
    return ans
};

console.log(generate(30))

