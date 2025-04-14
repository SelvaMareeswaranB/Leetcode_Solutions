function longestConsecutive(nums: number[]): number {
  if(!nums.length) return 0
  let output = 1;
  let cache  = new Set(nums);
  for (const item of cache) {
    if (cache.has(item+ 1) && !cache.has(item-1)) {
      let temp=1
      let y=item+1
      while(cache.has(y)){
        temp++
        y=y+1
      }
      output=Math.max(output,temp)
     
    }
  }
  

  return output;
}
