function canConstruct(ransomNote: string, magazine: string): boolean {
  let cache = Array(26).fill(0);
  for (let i = 0; i < ransomNote.length; i++) {
    cache[ransomNote.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < magazine.length; i++) {
    console.log(magazine.charCodeAt(i) - 97)
    cache[magazine.charCodeAt(i) - 97]--
  }
   for (let i = 0; i < 26; i++) {
    if (cache[i] > 0) {
      return false;
    }
  }

  return true;
}