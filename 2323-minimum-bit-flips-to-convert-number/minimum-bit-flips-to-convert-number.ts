function minBitFlips(start: number, goal: number): number {
    let xor : number = start ^ goal
    let count = 0
    while(xor !=0){
        xor = xor&(xor-1)
        count++
    }
    return count
};