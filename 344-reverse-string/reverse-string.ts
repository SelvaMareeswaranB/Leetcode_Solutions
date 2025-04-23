/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let l=0
    let h=s.length-1
  
    while(l<s.length/2){
      [s[l],s[h]]=[s[h],s[l]]
      l++;
      h--
    }
   
};