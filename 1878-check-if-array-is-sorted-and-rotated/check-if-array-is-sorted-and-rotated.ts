function check(nums: number[]): boolean {
    let drop=0
    let n = nums.length
    for(let i=0;i<n;i++){
        if(nums[i]>nums[(i+1)%n]){
            drop++
        }
    }
    return drop <=1
};