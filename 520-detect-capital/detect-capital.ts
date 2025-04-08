function detectCapitalUse(word: string): boolean {
  let capitalCount = 0;
  let firstOccurence;
  let len = word.length;
  for (let i = 0; i < len; i++) {
    if (!capitalCount) firstOccurence = i;
    let ascii = word.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) capitalCount++;
  }
  if (
    capitalCount === len ||
    !capitalCount ||
    (capitalCount === 1 && firstOccurence === 0)
  )
    return true;
  return false;
}