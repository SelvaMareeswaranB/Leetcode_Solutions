function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let t=threshold*k
    let len = arr.length;
    if(!len) return 0
    let i =0
    let j=1
    let ans=0
    let temp=arr[i]
    while(j<=len){

        if(j-i !==k){
          
            temp=temp+arr[j]
            
            j++;
        }
        else{
        
          ans += temp >= t ? 1 : 0;
          temp-=arr[i]
          i++;
        }
    }
    
    return ans
};