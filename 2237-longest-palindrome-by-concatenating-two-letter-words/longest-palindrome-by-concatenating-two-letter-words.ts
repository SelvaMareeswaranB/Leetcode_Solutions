function longestPalindrome(words: string[]): number {
  let cache = new Map();

  for (let i = 0; i < words.length; i++) {
    7;
    if (cache.get(words[i])) {
      let cnt = cache.get(words[i]);
      cache.set(words[i], ++cnt);
    } else {
      cache.set(words[i], 1);
    }
  }
  let result = 0;
  let single = 0;
  console.log(cache);
  for (const [key, value] of cache) {
    if(key === key[1]+key[0]){
      if(value === 1){
       single++
      }
      else{
        if((value&1) === 1){
          result+=2*(value-1);
          single++
        }
        else{
          result+=2*value
        }
      }
    }
    else if(cache.get(key[1]+key[0])){
     let rev=cache.get(key[1]+key[0])
   
      result+=rev === value ? 2*(rev+value)  : 4* Math.min(value,rev)
        console.log(rev,value,result,key)
      cache.set(key,undefined);
    }
   
  }
  console.log(result,single)
  return single ? result + 2 : result;
}