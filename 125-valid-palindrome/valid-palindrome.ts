function isPalindrome(s: string): boolean {
  
    let processed=s.toLowerCase().replace(/[^a-z0-9]/gi, '').split(" ").join('')
    let i=0
    let j=processed.length -1

    while(i<j){
      console.log([processed[j],processed[j],i,j])
    if(processed[i]==processed[j]){
      i++;
      j--
    }
    else{
      return false
    }
    }
    return true
};
