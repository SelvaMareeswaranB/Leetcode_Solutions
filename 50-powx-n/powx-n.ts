function myPow(x: number, n: number): number {
    let m = n
    let ans =1
    if(x === 0 || x === 1) return x
    if(n<0){
        x=1/x
        n=-(n+1)
        ans=ans*x
    }
    while(n>0){
      if(n%2!==0){
        ans=ans*x
        n=n-1
      }
      else{
        n=n/2
        x=x*x
      }
    }
    return ans
};