function groupAnagrams(strs: string[]): string[][] {
  let result: string[][] = [];
  let hashtable = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("")
    let key = hashtable.get(sorted)
    if(key){
     hashtable.set(sorted,[...key,strs[i]])
    }
    else{
      hashtable.set(sorted,[strs[i]])
    }
  }

  hashtable.forEach((value,key)=>{
  
    result.push(value)
  })
  return result;
}