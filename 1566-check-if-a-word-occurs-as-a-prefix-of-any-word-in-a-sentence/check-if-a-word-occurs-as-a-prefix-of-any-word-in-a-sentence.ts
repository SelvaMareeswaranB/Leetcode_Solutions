function isPrefixOfWord(sentence: string, searchWord: string): number {
  let words = sentence.split(" ");
  let result = -1;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      result = i + 1;
      break
    }
  }
  return result;
}

