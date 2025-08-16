function maximum69Number(num: number): number {
  let maxNum = num + "";
  let nums = num + "";
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "6") {
      let changed = nums.slice(0, i) + "9" + nums.slice(i + 1);
      if (changed > maxNum) {
        maxNum = changed;
      }
    }
  }
  return Number(maxNum);
}
