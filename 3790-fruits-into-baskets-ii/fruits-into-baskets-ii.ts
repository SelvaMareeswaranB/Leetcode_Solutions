function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let unplaced = fruits.length 
    for(let i=0;i<fruits.length;i++){
  
      for(let j=0;j<baskets.length;j++){
          if(fruits[i]<=baskets[j]){
            unplaced--
            baskets[j]=-1
            break
          }
      }
    }
    return unplaced
};