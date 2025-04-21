function heightChecker(heights: number[]): number {
  let result = 0;
  let sortedArray = countSort(heights);
  for(let i=0;i<heights.length;i++){
    sortedArray[i] !== heights[i] ? result++ : ''
  }

  return result;
}

function countSort(array: number[]): number[] {
  let sortedArray: number[] = [];
  let max = findMax(array)+1  
  let occurence = Array(max).fill(0)
  for(let i=0;i<array.length;i++){
    occurence[array[i]]++
  }
  let i=0,j=0
  while(i<max){
    if(occurence[i]>0){
     sortedArray[j++]=i
     occurence[i]--
    }
    else{
      i++
    }
  }

  return sortedArray;
}

function findMax(array: number[]): number {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, array[i]);
  }
  return max;
}