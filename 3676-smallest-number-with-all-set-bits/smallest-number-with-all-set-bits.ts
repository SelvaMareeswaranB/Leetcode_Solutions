function smallestNumber(n: number): number {
      let x = 1;
    while (x < n) x = (x << 1) + 1;
    return x;
};