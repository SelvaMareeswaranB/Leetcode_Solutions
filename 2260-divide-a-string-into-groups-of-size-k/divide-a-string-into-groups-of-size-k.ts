function divideString(s: string, k: number, fill: string): string[] {
  let ans: string[] = [];
  let temp = s[0];
  for (let i = 1; i < s.length; i++) {
    if (i % k === 0) {

      ans.push(temp);
      temp = "";
    }
    temp = temp + s[i];
  }
  if (temp.length === k) ans.push(temp);
  else {
    ans.push(temp+fill.repeat(k-temp.length))
  }
  return ans;
}
