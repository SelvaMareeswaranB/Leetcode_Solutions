/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cache=new Set()
    for(let i=0;i<nums.length;i++){
        if(cache.has(nums[i])){
            return true;
        }
        cache.add(nums[i])
    }
    return false
};
