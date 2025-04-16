function areOccurrencesEqual(s: string): boolean {
    let result = true
    let cache = new Map()
    for(let i=0;i<s.length;i++){
      let count = cache.get(s[i]) || 0
     ++count
      console.log(count,cache.get(s[i]))
      cache.set(s[i],count)
    }

  let mapArray = Array.from(cache.entries())
    for(let data of mapArray){
     if(mapArray[0][1] !== data[1]){
       result = false
       break;

     }
    }

    return result
};