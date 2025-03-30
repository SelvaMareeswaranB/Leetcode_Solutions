function isPalindrome(x: number): boolean {
   let n=x
   let reversed = 0
   while(n>0){
    let lastDigit = n%10
    reversed = (reversed*10)+lastDigit
    n=~~(n/10)
   }
   return reversed ===x
};