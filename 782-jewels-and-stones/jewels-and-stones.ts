function numJewelsInStones(jewels: string, stones: string): number {
    let cache={}
    let result = 0
    for(let i=0;i<jewels.length;i++){
        cache[jewels[i]] = i;
    }
    for(let i=0;i<stones.length;i++){
      if(cache[stones[i]] !== undefined) result++
    }
    return result
};