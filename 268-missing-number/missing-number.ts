// function missingNumber(nums: number[]): number {
// let xor1=0;
// let xor2=0
// for(let i=0;i<nums.length;i++){
//     xor1=xor1^nums[i]
//     xor2=xor2^(i+1)
// }
// return xor2^xor1
// }


function missingNumber(nums: number[]): number {
    const n = nums.length;
    const naturalSum = n*(n+1)/2
    let sum = 0
    for(let i=0;i<n;i++){
        sum +=nums[i]
    }
    return naturalSum - sum
};