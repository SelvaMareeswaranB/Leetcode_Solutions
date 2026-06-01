function topKFrequent(arr: number[], k: number): number[] {
      let map =new Map<number,number>()
    let result =[]
    
    for(let el of arr){
        map.set(el,(map.get(el) ?? 0) + 1)
    }
    
    const entries = [...map]
    entries.sort((a, b) => b[1] - a[1]);
    for(let i=0;i<k;i++){
        result.push(entries[i][0])
    }
    return result
};