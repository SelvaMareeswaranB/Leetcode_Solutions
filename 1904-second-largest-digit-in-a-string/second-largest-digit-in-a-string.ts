function secondHighest(s: string): number {
  let secondLargest = -1  
  let firstLargest = -1
  for(const str of s){
       
    if(!Number.isNaN(Number(str))){
       let num = Number(str)
       if(num>firstLargest){
            secondLargest = firstLargest
           firstLargest = num
          
       }
       else if(num>secondLargest && num !== firstLargest){
           secondLargest=num
       }
    }
  }

    return secondLargest

};


console.log(secondHighest("ck111"))