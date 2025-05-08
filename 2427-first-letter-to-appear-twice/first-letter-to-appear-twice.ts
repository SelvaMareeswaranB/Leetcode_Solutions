function repeatedCharacter(s: string): string {
  let cache = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
 
    cache[s.charCodeAt(i) - 97]++;
    if (cache[s.charCodeAt(i) - 97] >= 2) return s[i];
  }
  return "";
}