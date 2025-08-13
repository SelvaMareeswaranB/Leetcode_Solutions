function isPowerOfThree(n) {
    const MAX_POWER_OF_3 = 1162261467;
    return n > 0 && (MAX_POWER_OF_3 % n === 0);
}
