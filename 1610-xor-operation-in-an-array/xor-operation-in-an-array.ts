function xorOperation(n: number, start: number): number {
    let xor = 0
    for(let i=0;i<n;i++){
        xor=xor^(start+(2*i))
    }
    return xor
};