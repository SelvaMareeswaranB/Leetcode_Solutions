function countOperations(num1: number, num2: number): number {
  let opt = 0;
  while (num1 * num2 !== 0) {
    num1 >= num2 ? (num1 = num1 - num2) : (num2 = num2 - num1);

    opt++;
  }
  return opt;
}
