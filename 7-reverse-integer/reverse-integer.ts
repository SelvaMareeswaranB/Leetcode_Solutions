function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1 || x === 0) {
    return 0;
  }
  var n = Math.abs(x);
  var reversedNumber = 0;
  while (n > 0) {
    var lastDigit = n % 10;
     if (
      reversedNumber > Math.floor(INT_MAX / 10) || 
      (reversedNumber === Math.floor(INT_MAX / 10) && lastDigit > 7)
    ) {
      return 0;
    }
    reversedNumber = reversedNumber * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return x < 0 ? -reversedNumber : reversedNumber;
}