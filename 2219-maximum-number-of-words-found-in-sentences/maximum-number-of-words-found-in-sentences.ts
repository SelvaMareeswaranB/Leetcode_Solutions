function mostWordsFound(sentences: string[]): number {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    max=Math.max(countSentence(sentences[i]),max)
  }
  return max;
}

function countSentence(s: string): number {
  let words = s[s.length-1] === " " ? 0 : 1 ;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && s[i+1]!==" ") words++;
  
  }

  return words;
}