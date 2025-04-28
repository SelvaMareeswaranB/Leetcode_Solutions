function percentageLetter(s: string, letter: string): number {
  let count = 0
  for(let i=0;i<s.length;i++){
      if(s[i] === letter) count++
  }
  return count ?  Math.floor((count/s.length)*100) : count
};